import React from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

interface WordItem {
    id: string;
    word: string;
    translation: string;
}

interface KamusResultListProps {
    words: WordItem[];
    selectedWordId: string | null;
    onSelectWord: (word: WordItem) => void;
}

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const KamusResultList: React.FC<KamusResultListProps> = ({ words, selectedWordId, onSelectWord }) => {
    return (
        <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
        >
            <h2 className="text-xl font-bold text-[#1A2C42] mb-4 sticky top-0 bg-white pt-2 pb-3 z-10 border-b-2 border-dotted border-gray-300">Jejak Kata yang Ditemukan</h2>

            {words.length === 0 && (
                <p className="text-gray-500 italic px-2">Jejak kata yang Anda cari belum menampakkan diri. Mari telusuri kata lain.</p>
            )}

            {words.map((word) => (
                <motion.div
                    key={word.id}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-200 
            ${selectedWordId === word.id ? 'bg-[#FFF7E6] border-[#FFC107] shadow-md' : 'bg-gray-50 hover:bg-gray-100'}
            flex justify-between items-center`}
                    onClick={() => onSelectWord(word)}
                >
                    <div>
                        <h3 className="text-xl font-bold text-[#1A2C42]">{word.word}</h3>
                        <p className="text-sm text-gray-600">{word.translation}</p>
                    </div>
                    <button className="p-2 rounded-full hover:bg-gray-200">
                        <Volume2 className="w-5 h-5" />
                    </button>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default KamusResultList;