"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/appContext";
import { useRouter } from "next/navigation";
import Confetti from 'react-confetti';
import Image from "next/image";
import STR from '@/public/str.png';

export default function ObrigadoPage() {
    const { selectedInstitution, selectedMarket, selectedValor, resetContext } = useAppContext();
    const router = useRouter();

    // Inicializando as dimensões da janela como 0
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    const handleBackToHome = () => {
        resetContext(); // Reseta o contexto
        router.replace('/'); // Navega para a tela inicial
    };

    // Atualiza as dimensões da janela
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        // Define as dimensões iniciais
        handleResize(); 

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#1B3252] p-5 relative">
            <Confetti 
                width={windowWidth} 
                height={windowHeight} 
            />
            <h1 className="text-white bold text-4xl mt-10 text-center">Obrigado(a) por doar!</h1>
            <Image
                src={STR}
                height={100} 
                width={0}  
                alt="Imagem de agradecimento"
                className="h-[35vh] w-[50vw] object-contain"
            />
            <div className="bg-white rounded-lg p-5 mt-4 shadow-md w-full max-w-md">
                <h2 className="font-semibold text-xl mb-2">Dados da doação</h2>
                <p>Instituição: {selectedInstitution?.name || 'Não selecionada'}</p>
                <p>Mercado: {selectedMarket?.name || 'Não selecionado'}</p>
                <p>Valor: {selectedValor !== null ? `R$ ${selectedValor.toFixed(2)}` : 'Não informado'}</p>
            </div>
            <p className="text-white italic text-center mt-4">Sua doação será encaminhada para a instituição escolhida.</p>
            <button 
                className="mt-20 bg-transparent border border-white text-white rounded-lg px-4 py-2 w-4/5"
                onClick={handleBackToHome}
            >
                Retornar para tela inicial
            </button>
        </div>
    );
}
