'use client'; 

import React, { useState, useEffect } from 'react';
interface TypewriterProps {
  text: string;
  typingSpeed?: number; 
  delay?: number; 
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 100,
  delay = 500,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeoutStart = setTimeout(() => {
      setIsTyping(true); 
    }, delay);

    return () => clearTimeout(timeoutStart);
  }, [delay]); 

  useEffect(() => {
    if (!isTyping || displayedText.length === text.length) return; 

    const timer = setTimeout(() => {
      setDisplayedText((prev) => text.slice(0, prev.length + 1));
    }, typingSpeed);

    return () => clearTimeout(timer); 
  }, [isTyping, displayedText, text, typingSpeed]);


  return (
    <p 
      className="typewriter-text pt-4 md:pt-8 text:md md:text-xl w-full md:max-w-2xl text-shadow-current" 
      style={{ fontFamily: 'monospace' }}
    >
      {displayedText}
      {displayedText.length < text.length && <span className="blinking-cursor">|</span>}
    </p>
  );
};

export default Typewriter;