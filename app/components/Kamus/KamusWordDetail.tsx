import React from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import WordDetailCardBackground from './WordDetailCardbackground';

interface WordDetail {
  id: string;
  word: string;
  translation: string;
  phonetic: string;
  type: string;
  definition: string;
  example: string;
  exampleTranslation: string;
  cultureLink: string;
  relatedWords: string[];
}

interface KamusWordDetailProps {
  word: WordDetail;
}

const KamusWordDetail: React.FC<KamusWordDetailProps> = ({ word }) => {
  const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <WordDetailCardBackground>
      <motion.div
        variants={cardContentVariants}
        className="pb-6 border-b border-gray-100">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-6xl font-extrabold text-[#5A1F2B] font-serif leading-none">
              {word.word.toUpperCase()}
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              {word.phonetic} ({word.type})
            </p>
          </div>
          <button className="p-3 rounded-full bg-gray-100 text-[#5A1F2B] hover:bg-[#5A1F2B] hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zM7.5 12a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0z" /></svg>
          </button>
        </div>
        <p className="text-3xl font-semibold text-[#1A2C42] mt-4">
          {word.translation}
        </p>
      </motion.div>

      <motion.div
        variants={cardContentVariants}
        transition={{ delay: 0.1 }} className="pt-6">
        <h3 className="text-xl font-bold text-[#1A2C42] mb-2">Inti Makna Kata</h3>
        <p className="text-gray-700 leading-relaxed">
          {word.definition}
        </p>
      </motion.div>
      <motion.div
        variants={cardContentVariants}
        transition={{ delay: 0.2 }} className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#FFC107] mt-6">
        <h3 className="text-xl font-bold text-[#1A2C42] mb-2">Tuturan Sehari-hari</h3>
        <p className="text-gray-800 italic font-semibold">{word.example}</p>
        <p className="text-gray-600 mt-1">{word.exampleTranslation}</p>
        <button className="mt-3 p-2 rounded-full bg-gray-200 text-[#5A1F2B] hover:bg-[#5A1F2B] hover:text-white transition-colors">
          <Volume2 className="w-5 h-5" />
        </button>
      </motion.div>

      <motion.div
        variants={cardContentVariants}
        transition={{ delay: 0.3 }} className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#5A1F2B] mt-6 flex items-start space-x-4">
        <div>
          <h3 className="text-xl font-bold text-[#1A2C42] mb-2">Kaitan Budaya & Tradisi</h3>
          <p className="text-gray-700 leading-relaxed">{word.cultureLink}</p>
        </div>
      </motion.div>

      {word.relatedWords.length > 0 && (
        <motion.div
          variants={cardContentVariants}
          transition={{ delay: 0.4 }} className="mt-6">
          <h3 className="text-xl font-bold text-[#1A2C42] mb-2">Kata Serumpun</h3>
          <div className="flex flex-wrap gap-2">
            {word.relatedWords.map((related, index) => (
              <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                {related}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </WordDetailCardBackground>
  );
};

export default KamusWordDetail;