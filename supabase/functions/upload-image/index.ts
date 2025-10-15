import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Parse multipart form data
    const formData = await req.formData();
    const files = formData.getAll('images');

    console.log(`Received ${files.length} files for upload`);

    // Enforce max 10 images
    if (files.length > 10) {
      return new Response(
        JSON.stringify({ error: 'Maximum 10 images allowed per upload' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (files.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No images provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const uploadedUrls: string[] = [];

    for (const file of files) {
      if (!(file instanceof File)) {
        console.error('Invalid file object received');
        continue;
      }

      // Generate unique filename
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 9);
      const extension = file.name.split('.').pop();
      const filename = `products/${timestamp}-${random}.${extension}`;

      console.log(`Uploading file: ${filename}, size: ${file.size} bytes`);

      // Convert File to ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('Images for products')
        .upload(filename, uint8Array, {
          contentType: file.type,
          upsert: false
        });

      if (error) {
        console.error(`Upload error for ${filename}:`, error);
        throw new Error(`Failed to upload ${file.name}: ${error.message}`);
      }

      console.log(`Successfully uploaded: ${filename}`);

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('Images for products')
        .getPublicUrl(filename);

      uploadedUrls.push(publicUrl);
    }

    console.log(`Successfully uploaded ${uploadedUrls.length} images`);

    return new Response(
      JSON.stringify({ urls: uploadedUrls }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in upload-image function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
