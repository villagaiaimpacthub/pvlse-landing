# PVLSE Supabase Backend Setup

This guide explains how to set up the Supabase backend for the PVLSE consultation form.

## Prerequisites

1. A Supabase account (https://supabase.com)
2. A new Supabase project created

## Setup Instructions

### 1. Create Supabase Project

1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Fill in your project details:
   - Name: `pvlse-landing`
   - Database Password: (generate a strong password)
   - Region: Choose closest to your users

### 2. Set up Database Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy and paste the contents of `supabase-schema.sql`
5. Click **Run** to execute the SQL

This will create:
- `consultation_requests` table
- Row Level Security policies
- Performance indexes

### 3. Configure Environment Variables

1. In your Supabase project dashboard, go to **Settings** > **API**
2. Copy the following values:
   - Project URL
   - Anon (public) key
   - Service role key (keep this secret!)

3. Update `.env.local` with your values:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 4. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the consultation form on your landing page
3. Fill out and submit the form
4. Check the **Table Editor** in your Supabase dashboard to see the submitted data

## Database Schema

### consultation_requests Table

| Column      | Type      | Description                           |
|-------------|-----------|---------------------------------------|
| id          | UUID      | Primary key (auto-generated)         |
| name        | TEXT      | Full name of the contact              |
| email       | TEXT      | Business email address                |
| company     | TEXT      | Company/organization name             |
| employees   | TEXT      | Employee count range                  |
| phone       | TEXT      | Phone number (optional)               |
| message     | TEXT      | Additional message (optional)         |
| status      | TEXT      | Request status (new/contacted/scheduled/completed) |
| created_at  | TIMESTAMP | When the request was submitted        |

## API Endpoints

### POST /api/consultation

Submit a new consultation request.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "employees": "100-250",
  "phone": "+1 (555) 123-4567", // optional
  "message": "We're interested in..." // optional
}
```

**Response:**
```json
{
  "success": true,
  "message": "Consultation request submitted successfully",
  "data": {
    "id": "uuid-here",
    "name": "John Doe",
    // ... other fields
    "created_at": "2025-01-01T12:00:00Z"
  }
}
```

## Row Level Security (RLS)

The table has RLS enabled with these policies:
- **Anonymous users** can INSERT (for form submissions)
- **Authenticated users** can SELECT and UPDATE (for admin access)

## Admin Dashboard (Future Enhancement)

To build an admin dashboard to view consultation requests:

1. Implement authentication in your app
2. Create admin pages that query the `consultation_requests` table
3. Use the authenticated user policies to access the data

## Troubleshooting

### Common Issues

1. **"Invalid API key"**: Check that your environment variables are correct
2. **"Row Level Security policy violation"**: Ensure RLS policies are properly set up
3. **"Table doesn't exist"**: Make sure you ran the schema SQL in Supabase

### Testing the Database Connection

You can test the connection in the browser console:
```javascript
// This will be available in your app after setup
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
```

## Security Notes

- Never commit `.env.local` to version control
- The anon key is safe to expose in client-side code
- Keep the service role key secret (server-side only)
- RLS policies prevent data leaks between different form submissions