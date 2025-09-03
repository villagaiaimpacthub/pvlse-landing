import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Add CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method)
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Request received:', { method: req.method, body: req.body })
    
    const { name, email, company, employees, phone, message } = req.body

    // Basic validation
    if (!name || !email || !company || !employees) {
      console.log('Missing required fields:', { name, email, company, employees })
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, company, employees' 
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('consultation_requests')
      .insert([
        {
          name,
          email,
          company,
          employees,
          phone: phone || null,
          message: message || null,
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({ error: 'Database error' })
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Consultation request submitted successfully',
      data: data[0]
    })

  } catch (error) {
    console.error('API error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}