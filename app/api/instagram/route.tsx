// /app/api/instagram/route.ts
// Route Handler (Berfungsi sebagai API Endpoint)

import { NextResponse } from 'next/server';

// **PERHATIAN PENTING:** // Ganti ini dengan variabel lingkungan yang aman (process.env.INSTAGRAM_ACCESS_TOKEN)
// JANGAN HARDCODE TOKEN ASLI DI SINI.
const INSTAGRAM_ACCESS_TOKEN = "YOUR_SECURE_INSTAGRAM_ACCESS_TOKEN"; 
const USER_ID = "sulbar_culture"; // ID Pengguna Bisnis/Kreator

// Fields yang ingin kita ambil: id, caption, media_type, media_url, permalink, timestamp
const FIELDS = 'id,caption,media_type,media_url,permalink,timestamp';

export async function GET() {
  if (!INSTAGRAM_ACCESS_TOKEN || !USER_ID) {
    return NextResponse.json({ error: 'Instagram API credentials missing' }, { status: 500 });
  }

  const endpoint = `https://graph.instagram.com/v19.0/${USER_ID}/media?fields=${FIELDS}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

  try {
    const response = await fetch(endpoint, {
      // Force cache revalidation every 3600 seconds (1 hour)
      next: { revalidate: 3600 } 
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ 
        error: 'Failed to fetch Instagram data', 
        details: errorText 
      }, { status: response.status });
    }

    const data = await response.json();
    
    // Kembalikan hanya data yang dibutuhkan ke client
    return NextResponse.json(data.data, { status: 200 });

  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}