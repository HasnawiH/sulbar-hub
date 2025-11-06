// /app/api/reels/route.ts

import { NextResponse } from 'next/server';

function convertDurationToSeconds(isoDuration: string): number {
    const parts = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!parts) return 999; // Default jika format tidak valid

    const hours = parseInt(parts[1] || '0') * 3600;
    const minutes = parseInt(parts[2] || '0') * 60;
    const seconds = parseInt(parts[3] || '0');
    
    return hours + minutes + seconds;
}

const simulatedFilteredData = [
    // Video 1: PT56S (56 detik) -> LOLOS FILTER
    { videoId: 'Yn1D2oSyWW0', title: 'OPENING FESTIVAL SIPAMANDAR 2024 "JEJAK PELAYARAN JALUR REMPAH MAJENE 2024"', duration: 'PT56S' },
    // Video 2: PT8S (8 detik) -> LOLOS FILTER
    { videoId: '9MuSvv90buc', title: 'Traditional Instrument of Adivasi Culture i.e "MANDAR"', duration: 'PT8S' },
    // Video 3: PT22S (22 detik) -> LOLOS FILTER
    { videoId: 'Vh3Xb5VkSGs', title: 'Lomba Segitiga Perahu Sandeq - Festival Sandeq Teluk Mandar Kabupaten Majene Tahun 2024', duration: 'PT22S' },
    // Video yang DITOLAK filter (misal: durasi PT1M1S = 61 detik) TIDAK dimasukkan ke sini
];

// Handler GET untuk API Route
export async function GET() {
    
    // --- Langkah Filtering (dieksekusi saat fetch) ---
    const filteredReels = simulatedFilteredData
        .filter(video => {
            const durationInSeconds = convertDurationToSeconds(video.duration);
            // Kriteria filter: durasi harus <= 60 detik (1 menit)
            return durationInSeconds <= 60; 
        })
        .map(video => ({
            videoId: video.videoId, 
            title: video.title
        }));
        
    return NextResponse.json({ reels: filteredReels });
}

// // /app/api/reels/route.ts

// import { NextResponse } from 'next/server';

// // PENTING: Key ini seharusnya diakses dari .env.local (process.env.YOUTUBE_API_KEY)
// // Diletakkan langsung di sini HANYA untuk tujuan demonstrasi dan HARUS diganti nanti.
// const YOUTUBE_API_KEY = 'AIzaSyC26FsqoDm-WgDMJvOeBqKmv8touSktjVI';
// const MAX_DURATION_SECONDS = 60; // Maksimum durasi untuk dipertimbangkan sebagai Shorts

// // Fungsi bantuan untuk mengkonversi durasi ISO 8601 (misal: PT1M5S) ke detik
// function convertDurationToSeconds(isoDuration: string): number {
//     const parts = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
//     if (!parts) return 999; 

//     // Helper untuk mengambil nilai numerik dari grup Regex
//     const getPartValue = (index: number) => {
//         const part = parts[index];
//         return part ? parseInt(part.slice(0, -1) || '0') : 0;
//     };

//     const hours = getPartValue(1) * 3600;
//     const minutes = getPartValue(2) * 60;
//     const seconds = getPartValue(3);
    
//     return hours + minutes + seconds;
// }


// export async function GET() {
//     if (!YOUTUBE_API_KEY) {
//         // Ini akan menangani kasus jika key tidak ada di .env.local
//         return NextResponse.json({ error: 'YOUTUBE_API_KEY tidak ditemukan/tidak valid.' }, { status: 500 });
//     }

//     try {
//         // 1. Panggilan API Search: Mencari Video #Mandar (maxResults=50)
//         const searchQuery = encodeURIComponent('Mandar OR #Mandar');
//         const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=50&key=${YOUTUBE_API_KEY}`;
        
//         const searchResponse = await fetch(searchUrl, {
//              // Cache data ini untuk 1 jam (menghemat kuota API)
//              next: { revalidate: 3600 } 
//         });
        
//         if (!searchResponse.ok) {
//             throw new Error(`Gagal (Status: ${searchResponse.status}) mengambil data dari YouTube Search API.`);
//         }

//         const searchData = await searchResponse.json();
        
//         const videoIds = searchData.items
//             .map((item: any) => item.id.videoId)
//             .filter((id: string) => id); 

//         if (videoIds.length === 0) {
//             return NextResponse.json({ reels: [] });
//         }

//         // 2. Panggilan API Videos: Mendapatkan Detail Durasi
//         const videoDetailUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoIds.join(',')}&key=${YOUTUBE_API_KEY}`;

//         const detailResponse = await fetch(videoDetailUrl);
        
//         if (!detailResponse.ok) {
//              throw new Error(`Gagal (Status: ${detailResponse.status}) mengambil detail durasi.`);
//         }

//         const detailData = await detailResponse.json();

//         // 3. Filtering Otomatis berdasarkan Durasi
//         const filteredReels = detailData.items
//             .filter((video: any) => {
//                 const durationIso = video.contentDetails.duration;
//                 const durationInSeconds = convertDurationToSeconds(durationIso);
                
//                 // Kriteria FILTER UTAMA: durasi <= 60 detik
//                 return durationInSeconds > 0 && durationInSeconds <= MAX_DURATION_SECONDS;
//             })
//             .map((video: any) => ({
//                 videoId: video.id,
//                 title: video.snippet.title,
//             }));

//         return NextResponse.json({ reels: filteredReels });

//     } catch (error) {
//         console.error("YouTube API Error:", error);
//         return NextResponse.json({ error: 'Terjadi kesalahan saat memproses data YouTube.' }, { status: 500 });
//     }
// }