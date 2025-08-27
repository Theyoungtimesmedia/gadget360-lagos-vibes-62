-- Fix infinite recursion in profiles RLS policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Create security definer function to get current user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Recreate admin policy using the function
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR ALL 
USING (public.get_current_user_role() = 'admin');