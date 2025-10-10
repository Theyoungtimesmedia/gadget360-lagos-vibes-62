import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    
    if (!prompt) {
      throw new Error("Prompt is required");
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Generating product with prompt:', prompt);

    const systemPrompt = `You are a product catalog expert for an electronics and gadgets e-commerce store. 
Generate realistic product details based on the user's description. 
Return ONLY valid JSON with this exact structure:
{
  "name": "Product Name",
  "description": "Detailed product description (2-3 sentences)",
  "price": 150000,
  "category": "One of: Apple, Audio, Gaming, Laptops, Smartphones, Accessories",
  "stock": 10,
  "image_url": "/lovable-uploads/placeholder-image.png"
}

Use realistic Nigerian Naira prices (₦). Be specific and detailed in descriptions.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content;
    
    console.log('AI Response:', generatedText);

    // Parse JSON from response
    let productData;
    try {
      // Remove markdown code blocks if present
      const cleanedText = generatedText.replace(/```json\n?|\n?```/g, '').trim();
      productData = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      throw new Error('Failed to parse AI response as JSON');
    }

    // Validate required fields
    if (!productData.name || !productData.price || !productData.category) {
      throw new Error('Generated product is missing required fields');
    }

    // Set default image based on category if not provided
    if (!productData.image_url || productData.image_url.includes('placeholder')) {
      const categoryImages: { [key: string]: string } = {
        'Apple': '/lovable-uploads/0bb67128-8dd5-487b-a971-3259ae739094.png',
        'Audio': '/lovable-uploads/335cb308-9043-47a5-9ea4-82bc3bbed7cc.png',
        'Gaming': '/lovable-uploads/748f6b1b-dfd2-4f84-bc33-518f43e050c6.png',
        'Laptops': '/lovable-uploads/4ad028ba-f332-4ad4-ac42-e489a52165b8.png',
        'Smartphones': '/lovable-uploads/371bdd40-ee61-409b-8a61-603c7a2ef02a.png',
        'Accessories': '/lovable-uploads/0bb67128-8dd5-487b-a971-3259ae739094.png'
      };
      productData.image_url = categoryImages[productData.category] || categoryImages['Accessories'];
    }

    return new Response(
      JSON.stringify({ product: productData }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in generate-product function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
