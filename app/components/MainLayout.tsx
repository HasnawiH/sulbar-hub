import React from 'react';
import NavMobile from './NavMobile';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen  flex flex-col items-center">
      <div className="w-full max-w-lg md:max-w-full shadow-xl min-h-screen relative pb-16 md:pb-0">
        <main className="">
          {children}
          <Footer/>
        </main>

        <div className='md:hidden'>
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;