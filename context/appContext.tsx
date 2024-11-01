'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Market, Instituicao } from '@/types'; // Certifique-se de que o caminho está correto

interface AppContextType {
    resetContext: () => void;
    selectedValor: number | null;
    setSelectedValor: (valor: number | null) => void; // Corrigido para 'valor'
    selectedMarket: Market | null;
    setSelectedMarket: (market: Market | null) => void;
    selectedInstitution: Instituicao | null;
    setSelectedInstitution: (instituicao: Instituicao | null) => void; // Corrigido para 'instituição'
}

// Criação do contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provedor do contexto
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [selectedValor, setSelectedValor] = useState<number | null>(null);
    const [selectedMarket, setSelectedMarket] = useState<Market | null>(null); // Estado do mercado
    const [selectedInstitution, setSelectedInstitution] = useState<Instituicao | null>(null); // Estado da instituição

    const resetContext = () => {
        setSelectedInstitution(null);
        setSelectedMarket(null);
        setSelectedValor(null);
    };
    
    return (
        <AppContext.Provider value={{ selectedValor, setSelectedValor, selectedMarket, setSelectedMarket, selectedInstitution, setSelectedInstitution, resetContext }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
