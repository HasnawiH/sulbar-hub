import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from './components/MainLayout';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sulbar Culture - Budaya dan Bahasa Mandar',
  description: 'Aplikasi Kamus, Warisan Budaya, Agenda Budaya, dan Lapak Mandar',
  manifest: '/manifest.json',
  themeColor: '#0F9D58',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="id">
      <body className={inter.className}>
          <MainLayout >
            {children}
          </MainLayout>
      </body>
    </html>
  );
}
