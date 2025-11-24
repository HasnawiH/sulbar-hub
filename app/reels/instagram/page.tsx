// /app/reels/page.tsx
import DesktopNav from '@/app/components/DesktopNav';
import Footer from '@/app/components/Footer';
import InstagramGallery from '@/app/components/Media/InstagramEmbed';

export default function ReelsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DesktopNav />
            <main className="max-w-7xl mx-auto px-6 py-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
                    Galeri Visual Kami
                </h1>
                <InstagramGallery />
            </main>
            <Footer />
        </div>
    );
}