// app/components/MainLayout.tsx
import React from 'react';
import NavMobile from './NavMobile';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0C2B4E] flex flex-col items-center">
      {/* Container utama (Max-width 500px) */}
      <div className="w-full max-w-lg md:max-w-full bg-[#0C2B4E] shadow-xl min-h-screen relative pb-16 md:pb-0">

        {/* Konten Halaman */}
        <main className="">
          {children}
          <Footer/>
        </main>

        {/* Navigasi Bawah Mobile */}
        <div className='md:hidden'>
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;