#!/usr/bin/env python3
"""
Skolyn Medical AI Platform Backend Testing Suite
Tests all backend API endpoints with realistic medical professional data
"""

import requests
import json
import os
from datetime import datetime
import uuid

# Get base URL from environment
BASE_URL = os.getenv('NEXT_PUBLIC_BASE_URL', 'https://radmed.preview.emergentagent.com')
API_BASE = f"{BASE_URL}/api"

print(f"Testing Skolyn Medical AI Platform Backend")
print(f"Base URL: {BASE_URL}")
print(f"API Base: {API_BASE}")
print("=" * 60)

def test_health_check():
    """Test the health check endpoint"""
    print("\n🏥 Testing Health Check API...")
    
    try:
        response = requests.get(f"{API_BASE}/health", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            
            # Verify expected fields
            required_fields = ['status', 'timestamp', 'service']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ Missing required fields: {missing_fields}")
                return False
            
            if data.get('status') == 'healthy' and data.get('service') == 'Skolyn API':
                print("✅ Health check API working correctly")
                return True
            else:
                print(f"❌ Unexpected response values: status={data.get('status')}, service={data.get('service')}")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Health check API error: {str(e)}")
        return False

def test_contact_form_submission():
    """Test contact form submission with realistic medical professional data"""
    print("\n📋 Testing Contact Form Submission...")
    
    # Realistic medical professional data
    contact_data = {
        "firstName": "Dr. Sarah",
        "lastName": "Chen",
        "email": "sarah.chen@metrogeneral.com",
        "organization": "Metro General Hospital",
        "role": "radiologist",
        "inquiryType": "demo",
        "message": "Interested in learning more about your explainable AI solutions for our radiology department. We handle approximately 500 imaging studies daily and are looking to improve diagnostic efficiency while maintaining accuracy.",
        "phone": "+1-555-0123",
        "department": "Radiology"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact",
            json=contact_data,
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            
            # Verify response structure
            if 'message' in data and 'id' in data and 'status' in data:
                print("✅ Contact form submission successful")
                return True, data.get('id')
            else:
                print("❌ Unexpected response structure")
                return False, None
        else:
            print(f"❌ Contact form submission failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False, None
            
    except Exception as e:
        print(f"❌ Contact form submission error: {str(e)}")
        return False, None

def test_contact_form_validation():
    """Test contact form validation with missing required fields"""
    print("\n🔍 Testing Contact Form Validation...")
    
    # Test cases with missing required fields
    test_cases = [
        {
            "name": "Missing firstName",
            "data": {
                "lastName": "Chen",
                "email": "sarah.chen@hospital.com",
                "organization": "Metro General Hospital"
            }
        },
        {
            "name": "Missing email",
            "data": {
                "firstName": "Dr. Sarah",
                "lastName": "Chen",
                "organization": "Metro General Hospital"
            }
        },
        {
            "name": "Invalid email format",
            "data": {
                "firstName": "Dr. Sarah",
                "lastName": "Chen",
                "email": "invalid-email",
                "organization": "Metro General Hospital"
            }
        },
        {
            "name": "Missing organization",
            "data": {
                "firstName": "Dr. Sarah",
                "lastName": "Chen",
                "email": "sarah.chen@hospital.com"
            }
        }
    ]
    
    validation_passed = True
    
    for test_case in test_cases:
        print(f"\n  Testing: {test_case['name']}")
        
        try:
            response = requests.post(
                f"{API_BASE}/contact",
                json=test_case['data'],
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            print(f"  Status Code: {response.status_code}")
            
            if response.status_code == 400:
                data = response.json()
                print(f"  ✅ Validation error correctly returned: {data.get('error')}")
            else:
                print(f"  ❌ Expected 400 status code, got {response.status_code}")
                validation_passed = False
                
        except Exception as e:
            print(f"  ❌ Validation test error: {str(e)}")
            validation_passed = False
    
    if validation_passed:
        print("✅ Contact form validation working correctly")
    else:
        print("❌ Contact form validation has issues")
    
    return validation_passed

def test_contact_form_get():
    """Test retrieving contact submissions (admin endpoint)"""
    print("\n📊 Testing Contact Form GET (Admin)...")
    
    try:
        response = requests.get(f"{API_BASE}/contact?limit=10", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response structure: contacts={len(data.get('contacts', []))}, total={data.get('total')}")
            
            if 'contacts' in data and 'total' in data:
                print("✅ Contact form GET endpoint working correctly")
                return True
            else:
                print("❌ Unexpected response structure")
                return False
        else:
            print(f"❌ Contact form GET failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Contact form GET error: {str(e)}")
        return False

def test_blog_api_get():
    """Test blog posts retrieval"""
    print("\n📝 Testing Blog API GET...")
    
    try:
        response = requests.get(f"{API_BASE}/blog", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            posts = data.get('posts', [])
            print(f"Retrieved {len(posts)} blog posts")
            
            if posts:
                # Check first post structure
                first_post = posts[0]
                required_fields = ['title', 'excerpt', 'author', 'publishedAt', 'category']
                missing_fields = [field for field in required_fields if field not in first_post]
                
                if missing_fields:
                    print(f"❌ Missing required fields in blog post: {missing_fields}")
                    return False
                
                print(f"Sample post: {first_post.get('title')} by {first_post.get('author')}")
                print("✅ Blog API GET working correctly")
                return True
            else:
                print("⚠️ No blog posts found, but API structure is correct")
                return True
                
        else:
            print(f"❌ Blog API GET failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Blog API GET error: {str(e)}")
        return False

def test_blog_api_post():
    """Test blog post creation"""
    print("\n✍️ Testing Blog API POST...")
    
    blog_post_data = {
        "title": "AI-Powered Diagnostic Accuracy in Emergency Medicine",
        "excerpt": "How artificial intelligence is transforming emergency department workflows and improving patient outcomes through faster, more accurate diagnostics.",
        "content": "<p>Emergency departments face unique challenges in diagnostic accuracy due to time constraints and high patient volumes. AI-powered diagnostic tools are proving invaluable in this critical healthcare setting.</p><h2>Key Benefits</h2><ul><li>Rapid triage and prioritization</li><li>Early detection of critical conditions</li><li>Reduced diagnostic errors</li></ul>",
        "author": "Dr. Michael Rodriguez",
        "authorRole": "Emergency Medicine Director",
        "category": "Emergency Medicine",
        "tags": ["AI", "Emergency Medicine", "Diagnostics"],
        "featured": false,
        "slug": "ai-diagnostic-accuracy-emergency-medicine",
        "readTime": "5 min read"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/blog",
            json=blog_post_data,
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            
            if 'message' in data and 'id' in data:
                print("✅ Blog post creation successful")
                return True
            else:
                print("❌ Unexpected response structure")
                return False
        else:
            print(f"❌ Blog post creation failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Blog post creation error: {str(e)}")
        return False

def test_mongodb_integration():
    """Test MongoDB integration by verifying data persistence"""
    print("\n🗄️ Testing MongoDB Integration...")
    
    # Test contact form submission and retrieval
    print("  Testing contact data persistence...")
    contact_success, contact_id = test_contact_form_submission()
    
    if contact_success and contact_id:
        # Try to retrieve the contact
        try:
            response = requests.get(f"{API_BASE}/contact?limit=1", timeout=10)
            if response.status_code == 200:
                data = response.json()
                contacts = data.get('contacts', [])
                if contacts and str(contacts[0].get('_id')) == str(contact_id):
                    print("  ✅ Contact data successfully persisted and retrieved")
                else:
                    print("  ⚠️ Contact data may not be properly persisted")
            else:
                print("  ❌ Could not retrieve contact data")
        except Exception as e:
            print(f"  ❌ Error retrieving contact data: {str(e)}")
    
    # Test blog data persistence
    print("  Testing blog data persistence...")
    blog_success = test_blog_api_get()
    
    if blog_success:
        print("  ✅ Blog data successfully retrieved")
    else:
        print("  ❌ Blog data retrieval failed")
    
    if contact_success and blog_success:
        print("✅ MongoDB integration working correctly")
        return True
    else:
        print("❌ MongoDB integration has issues")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Skolyn Medical AI Platform Backend Tests")
    print(f"Timestamp: {datetime.now().isoformat()}")
    print("=" * 60)
    
    test_results = {}
    
    # Run all tests
    test_results['health_check'] = test_health_check()
    test_results['contact_form_post'] = test_contact_form_submission()[0]
    test_results['contact_form_validation'] = test_contact_form_validation()
    test_results['contact_form_get'] = test_contact_form_get()
    test_results['blog_api_get'] = test_blog_api_get()
    test_results['blog_api_post'] = test_blog_api_post()
    test_results['mongodb_integration'] = test_mongodb_integration()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed ({(passed/total)*100:.1f}%)")
    
    if passed == total:
        print("🎉 All backend tests passed! Skolyn Medical AI Platform backend is working correctly.")
    else:
        print("⚠️ Some backend tests failed. Please review the issues above.")
    
    return test_results

if __name__ == "__main__":
    run_all_tests()