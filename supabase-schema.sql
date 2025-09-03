-- Create the consultation_requests table
CREATE TABLE consultation_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  employees TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add Row Level Security (RLS)
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS
-- Allow anonymous users to insert (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON consultation_requests
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users can read/update (for admin dashboard)
CREATE POLICY "Admin can read all" ON consultation_requests
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Admin can update all" ON consultation_requests
  FOR UPDATE TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_consultation_requests_created_at ON consultation_requests (created_at DESC);
CREATE INDEX idx_consultation_requests_status ON consultation_requests (status);
CREATE INDEX idx_consultation_requests_email ON consultation_requests (email);

-- Add helpful comments
COMMENT ON TABLE consultation_requests IS 'Stores enterprise consultation requests from the PVLSE landing page';
COMMENT ON COLUMN consultation_requests.status IS 'Tracks the status of each consultation request';
COMMENT ON COLUMN consultation_requests.employees IS 'Employee count range selected by the prospect';