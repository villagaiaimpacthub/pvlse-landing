import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface ConsultationRequest {
  id?: string
  name: string
  email: string
  company: string
  employees: string
  phone?: string
  message?: string
  created_at?: string
  status?: 'new' | 'contacted' | 'scheduled' | 'completed'
}