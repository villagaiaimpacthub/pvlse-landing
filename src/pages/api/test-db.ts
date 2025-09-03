import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Test environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    console.log('Environment check:', {
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseAnonKey,
      url: supabaseUrl ? supabaseUrl.substring(0, 20) + '...' : 'missing'
    })

    // Test database connection
    const { data, error } = await supabase
      .from('consultation_requests')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Database connection error:', error)
      return res.status(500).json({ 
        error: 'Database connection failed', 
        details: error.message,
        code: error.code
      })
    }

    // Test insert permission (without actually inserting)
    const { error: insertError } = await supabase
      .from('consultation_requests')
      .insert([{
        name: 'test',
        email: 'test@test.com',
        company: 'test',
        employees: 'test'
      }])
      .select()

    return res.status(200).json({
      success: true,
      environment: {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseAnonKey
      },
      database: {
        connectionOk: true,
        insertTest: insertError ? 'failed' : 'success',
        insertError: insertError?.message
      }
    })

  } catch (error) {
    console.error('Test error:', error)
    return res.status(500).json({ error: 'Test failed', details: error })
  }
}