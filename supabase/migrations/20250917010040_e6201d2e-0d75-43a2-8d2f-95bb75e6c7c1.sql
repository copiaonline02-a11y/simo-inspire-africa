-- Create table for Calendly bookings
CREATE TABLE public.calendly_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id TEXT UNIQUE,
  event_name TEXT,
  invitee_name TEXT,
  invitee_email TEXT,
  start_time TIMESTAMP WITH TIME ZONE,
  end_time TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'scheduled',
  meeting_url TEXT,
  cancel_url TEXT,
  reschedule_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.calendly_bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public access for webhook inserts (Calendly integration)
CREATE POLICY "Allow webhook inserts for Calendly bookings" 
ON public.calendly_bookings 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading of bookings (admin only)
CREATE POLICY "No public access to bookings" 
ON public.calendly_bookings 
FOR SELECT 
USING (false);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_calendly_bookings_updated_at
BEFORE UPDATE ON public.calendly_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();