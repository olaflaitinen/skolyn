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

// Sample blog posts data
const samplePosts = [
  {
    title: 'The Future of Explainable AI in Medical Imaging',
    excerpt: 'Exploring how transparent AI systems are revolutionizing diagnostic confidence and patient outcomes in radiology departments worldwide.',
    content: `
      <p>The healthcare industry is experiencing a paradigm shift with the introduction of Explainable AI (XAI) in medical imaging. Unlike traditional "black box" AI systems, XAI provides clear, interpretable insights into how diagnostic decisions are made.</p>
      
      <h2>Why Explainability Matters in Healthcare</h2>
      <p>In medical diagnostics, understanding the "why" behind an AI's decision is crucial for several reasons:</p>
      <ul>
        <li>Building trust between AI systems and healthcare professionals</li>
        <li>Enabling validation of AI findings against clinical expertise</li>
        <li>Supporting regulatory compliance and quality assurance</li>
        <li>Facilitating continuous learning and improvement</li>
      </ul>
      
      <h2>The Technology Behind XAI</h2>
      <p>Modern XAI systems in medical imaging primarily use techniques like Gradient-weighted Class Activation Mapping (Grad-CAM) to highlight regions of interest in medical images. These visualizations show exactly where the AI model is "looking" when making diagnostic decisions.</p>
      
      <h2>Clinical Impact</h2>
      <p>Studies have shown that XAI systems not only maintain high diagnostic accuracy but also improve radiologist confidence and reduce time to diagnosis. The transparency allows for better integration into clinical workflows and supports better patient outcomes.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Medical Officer',
    publishedAt: new Date('2024-12-15'),
    category: 'AI Technology',
    tags: ['XAI', 'Medical Imaging', 'Deep Learning'],
    featured: true,
    slug: 'future-explainable-ai-medical-imaging',
    readTime: '8 min read'
  },
  {
    title: 'Reducing Radiologist Burnout with AI Assistance',
    excerpt: 'How AI-powered diagnostic tools are helping radiologists manage increasing workloads while maintaining diagnostic accuracy and job satisfaction.',
    content: `
      <p>Radiologist burnout has reached critical levels, with studies showing that over 70% of radiologists report symptoms of burnout. The COVID-19 pandemic has only exacerbated this issue, leading to increased case volumes and staffing shortages.</p>
      
      <h2>The Burnout Crisis in Radiology</h2>
      <p>Several factors contribute to radiologist burnout:</p>
      <ul>
        <li>Overwhelming case volumes with limited time for interpretation</li>
        <li>Increasing complexity of imaging studies</li>
        <li>Pressure to reduce turnaround times</li>
        <li>Administrative burdens and documentation requirements</li>
      </ul>
      
      <h2>AI as a Solution</h2>
      <p>AI diagnostic tools can address these challenges by:</p>
      <ul>
        <li>Automating routine screenings and flagging abnormalities</li>
        <li>Prioritizing urgent cases requiring immediate attention</li>
        <li>Reducing time spent on repetitive tasks</li>
        <li>Providing decision support for complex cases</li>
      </ul>
      
      <h2>Real-World Results</h2>
      <p>Hospitals implementing AI diagnostic tools have reported significant improvements in radiologist satisfaction, with many experiencing reduced overtime hours and improved work-life balance.</p>
    `,
    author: 'Dr. Michael Rodriguez',
    authorRole: 'Radiology Director',
    publishedAt: new Date('2024-12-10'),
    category: 'Workforce',
    tags: ['Burnout', 'Workflow', 'Radiology'],
    featured: false,
    slug: 'reducing-radiologist-burnout-ai-assistance',
    readTime: '6 min read'
  }
]

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const limit = parseInt(searchParams.get('limit')) || 20

    const database = await connectToDatabase()
    
    // Check if blog posts collection exists, if not create with sample data
    const collection = database.collection('blog_posts')
    const count = await collection.countDocuments()
    
    if (count === 0) {
      // Insert sample posts
      await collection.insertMany(samplePosts)
    }

    let query = {}
    
    // Filter by category
    if (category && category !== 'All') {
      query.category = category
    }
    
    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ]
    }

    const posts = await collection
      .find(query)
      .sort({ publishedAt: -1 })
      .limit(limit)
      .toArray()

    return NextResponse.json({ 
      posts: posts.map(post => ({
        ...post,
        _id: post._id.toString()
      })),
      total: posts.length 
    })
    
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { error: 'Required fields missing: title, content, author' },
        { status: 400 }
      )
    }

    const database = await connectToDatabase()
    
    const postData = {
      ...body,
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const result = await database.collection('blog_posts').insertOne(postData)
    
    return NextResponse.json({ 
      message: 'Blog post created successfully',
      id: result.insertedId,
      post: postData
    })
    
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}