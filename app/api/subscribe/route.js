import { NextResponse } from 'next/server'

export async function POST(request) {
  const { email, firstName, guide, source } = await request.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  const response = await fetch(
    `https://us12.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName || '',
          SOURCE: source || 'website',
          GUIDE: guide || '',
        },
        tags: [source || 'website'],
      }),
    }
  )

  if (response.ok || response.status === 400) {
    // 400 = already subscribed, treat as success
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
}
