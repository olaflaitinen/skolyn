import { NextResponse } from 'next/server'

// Basic API routes for future expansion
export async function GET(request, { params }) {
  const path = params.path || []
  
  try {
    // Health check endpoint
    if (path[0] === 'health') {
      return NextResponse.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        service: 'Skolyn API'
      })
    }

    // Demo request endpoint (placeholder)
    if (path[0] === 'demo' && path[1] === 'request') {
      return NextResponse.json({ 
        message: 'Demo request endpoint ready',
        status: 'available'
      })
    }

    // Default response for undefined routes
    return NextResponse.json({ 
      message: 'Skolyn API',
      version: '1.0.0',
      endpoints: ['/health', '/demo/request']
    })
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request, { params }) {
  const path = params.path || []
  
  try {
    // Demo request submission
    if (path[0] === 'demo' && path[1] === 'request') {
      const body = await request.json()
      
      // Basic validation
      if (!body.email || !body.name) {
        return NextResponse.json(
          { error: 'Name and email are required' },
          { status: 400 }
        )
      }

      // TODO: Integration with CRM/email system
      console.log('Demo request received:', body)
      
      return NextResponse.json({ 
        message: 'Demo request submitted successfully',
        status: 'received'
      })
    }

    return NextResponse.json(
      { error: 'Endpoint not found' },
      { status: 404 }
    )
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}