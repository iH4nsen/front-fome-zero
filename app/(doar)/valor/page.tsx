"use client";
import HeaderDoar from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from 'next/navigation';
import { useAppContext } from "@/context/appContext";

const valores = [5, 10, 15, 20, 25, 30, 36, 40, 45, 50, 55];

export default function ValorPage() {
    const { selectedValor, setSelectedValor } = useAppContext(); // Obtenha o valor e a função do contexto
    const router = useRouter();

    const handleSelectValor = (valor: number) => {
        setSelectedValor(valor); // Atualiza o valor selecionado no contexto
    };

    const handleNavigateToMarket = () => {
        router.push('/obrigado'); // Navega para a tela de agradecimento
    };

    return (
        <div className="relative">
            <HeaderDoar title="Escolher valor" />
            <ScrollArea>
                <div className="grid grid-cols-3 gap-4 p-4">
                    {valores.map((valor, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectValor(valor)}
                            className={`flex flex-col items-center p-4 border cursor-pointer rounded-full shadow-md transition-transform transform ${selectedValor === valor ? 'border-2 border-[#1B3252]' : 'border-transparent'}`}
                        >
                            <div className="flex-grow p-4">
                                <h3 className="text-2xl font-semibold text-[#1B3252]">R$ {valor},00</h3> {/* Exibindo o valor em R$ */}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {selectedValor && ( // Verifique se selectedValor está definido
                <button
                    onClick={handleNavigateToMarket}
                    className="bg-[#1B3252] fixed bottom-0 w-full h-20 text-white px-4 py-2 rounded"
                    aria-pressed="false"
                >
                    Continuar
                </button>
            )}
        </div>
    );
}
