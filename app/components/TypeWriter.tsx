// components/Typewriter.tsx
'use client'; // Penting: Ini harus menjadi Client Component untuk menggunakan Hooks

import React, { useState, useEffect } from 'react';

// Tentukan Props menggunakan TypeScript Interface
interface TypewriterProps {
  text: string;
  typingSpeed?: number; // Kecepatan ketik per karakter (ms)
  delay?: number; // Jeda sebelum mulai mengetik (ms)
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 100,
  delay = 500,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Efek untuk memulai dan menjalankan animasi mengetik
  useEffect(() => {
    const timeoutStart = setTimeout(() => {
      setIsTyping(true); // Mulai mengetik setelah jeda
    }, delay);

    return () => clearTimeout(timeoutStart);
  }, [delay]); // Hanya dijalankan sekali saat komponen dimuat

  useEffect(() => {
    if (!isTyping || displayedText.length === text.length) return; // Hentikan jika belum waktunya atau sudah selesai

    // Timer untuk menambahkan karakter berikutnya
    const timer = setTimeout(() => {
      setDisplayedText((prev) => text.slice(0, prev.length + 1));
    }, typingSpeed);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount atau sebelum efek dijalankan lagi
  }, [isTyping, displayedText, text, typingSpeed]);


  return (
    // Gunakan <p> atau <h1>. Tambahkan CSS untuk efek kursor
    <p 
      className="typewriter-text pt-4 md:pt-8 text:md md:text-xl w-full md:max-w-2xl text-shadow-current" 
      style={{ fontFamily: 'monospace' }}
    >
      {displayedText}
      {/* Kursor berkedip (jika belum selesai) */}
      {displayedText.length < text.length && <span className="blinking-cursor">|</span>}
    </p>
  );
};

export default Typewriter;