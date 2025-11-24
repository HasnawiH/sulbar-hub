import { NextResponse } from 'next/server';

function convertDurationToSeconds(isoDuration: string): number {
    const parts = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!parts) return 999; 

    const hours = parseInt(parts[1] || '0') * 3600;
    const minutes = parseInt(parts[2] || '0') * 60;
    const seconds = parseInt(parts[3] || '0');
    
    return hours + minutes + seconds;
}

const simulatedFilteredData = [
    { videoId: 'Yn1D2oSyWW0', title: 'OPENING FESTIVAL SIPAMANDAR 2024 "JEJAK PELAYARAN JALUR REMPAH MAJENE 2024"', duration: 'PT56S' },
    { videoId: '9MuSvv90buc', title: 'Traditional Instrument of Adivasi Culture i.e "MANDAR"', duration: 'PT8S' },
    { videoId: 'Vh3Xb5VkSGs', title: 'Lomba Segitiga Perahu Sandeq - Festival Sandeq Teluk Mandar Kabupaten Majene Tahun 2024', duration: 'PT22S' },
];

export async function GET() {

    const filteredReels = simulatedFilteredData
        .filter(video => {
            const durationInSeconds = convertDurationToSeconds(video.duration);
            return durationInSeconds <= 60; 
        })
        .map(video => ({
            videoId: video.videoId, 
            title: video.title
        }));
        
    return NextResponse.json({ reels: filteredReels });
}