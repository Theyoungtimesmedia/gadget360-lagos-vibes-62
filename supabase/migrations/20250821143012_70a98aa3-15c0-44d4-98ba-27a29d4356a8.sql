-- Create storage bucket for social media icons
INSERT INTO storage.buckets (id, name, public) 
VALUES ('social-icons', 'social-icons', true);

-- Create policies for social media icons bucket
CREATE POLICY "Social icons are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'social-icons');

CREATE POLICY "Admin can upload social icons" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'social-icons');