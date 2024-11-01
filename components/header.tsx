"use client";
import React from 'react';
import { HandHeart, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderDoarProps {
    title: string;
}

const HeaderDoar: React.FC<HeaderDoarProps> = ({ title }) => {
    const router = useRouter();

    return (
        <header className="h-52 flex bg-[#1B3252] justify-center text-white relative">
            <button
                onClick={() => router.back()}
                className="absolute left-4 top-4 bg-white text-[#1B3252] py-4 px-4 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition-colors"
            >
                <ArrowLeft />
            </button>
            <div className='mt-8 space-y-16'>
                <div className="flex justify-center items-center">
                    <HandHeart className="text-[#DFA436]" size={36} />
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold transition-colors ml-2">
                        Quero Doar
                    </p>
                </div>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold transition-colors ml-2">
                    {title}
                </p>
            </div>
        </header>
    );
};

export default HeaderDoar;
