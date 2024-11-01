"use client";
import React from 'react';
import { Store, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderParceiroProps {
    title: string;
}

const HeaderParceiro: React.FC<HeaderParceiroProps> = ({ title }) => {
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
                    <Store className="text-[#DFA436]" size={36} />
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold transition-colors ml-2">
                       Conheça nossos parceiros
                    </p>
                </div>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center transition-colors ml-2">
                    {title}
                </p>
            </div>
        </header>
    );
};

export default HeaderParceiro;
