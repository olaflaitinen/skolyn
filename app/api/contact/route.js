import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

// MongoDB connection
let client
let db

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db('skolyn')
  }
  return db
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.firstName || !body.lastName || !body.email || !body.organization) {
      return NextResponse.json(
        { error: 'Required fields missing: firstName, lastName, email, organization' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Connect to database
    const database = await connectToDatabase()
    
    // Create contact record
    const contactData = {
      ...body,
      createdAt: new Date(),
      status: 'new',
      source: 'website_contact_form'
    }

    // Insert into contacts collection
    const result = await database.collection('contacts').insertOne(contactData)
    
    // TODO: Send notification email to sales team
    // TODO: Send confirmation email to user
    // TODO: Create CRM record
    
    console.log('New contact form submission:', {
      id: result.insertedId,
      email: body.email,
      organization: body.organization,
      inquiryType: body.inquiryType
    })

    return NextResponse.json({ 
      message: 'Contact form submitted successfully',
      id: result.insertedId,
      status: 'received'
    })
    
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request) {
  try {
    // Admin endpoint to view contact submissions
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit')) || 50
    const status = searchParams.get('status') || null

    const database = await connectToDatabase()
    
    let query = {}
    if (status) {
      query.status = status
    }

    const contacts = await database
      .collection('contacts')
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray()

    return NextResponse.json({ 
      contacts,
      total: contacts.length 
    })
    
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}