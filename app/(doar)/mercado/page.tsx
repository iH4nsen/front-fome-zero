"use client";
import HeaderDoar from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useAppContext } from "@/context/appContext"; // Importando o contexto
import { Market } from "@/types";
const mercado = [
    {
        name: "Bernardão",
        image: { uri: 'https://www.patrocinioonline.com.br/media/uploads/2023/07/06/whatsapp-image-2023-07-06-at-111126.jpeg' },
    },
    {
        name: "Lima",
        image: { uri: 'https://www.supermercadoslima.com.br/views/imgs/capa.jpg' },
    },
    {
        name: "BH",
        image: { uri: 'https://bigshopping.com.br/wp-content/uploads/2023/12/18.png' },
    },
    {
        name: "Moderno",
        image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69EYXVQmIRzWgnG8k0nPmLjlkQ6MVM6_Wng&s' },
    },
];

export default function MercadoPage() {
    const { selectedMarket, setSelectedMarket } = useAppContext(); // Usando o contexto
    const router = useRouter();

    const handleSelectMarket = (marke: Market) => {
        setSelectedMarket(marke); // Atualiza o mercado selecionado
    };

    const handleNavigateToValue = () => {
        router.push('/valor'); // Navega para a próxima página
    };

    return (
        <div className="relative">
            <HeaderDoar title="Escolher mercado" />
            <ScrollArea>
                <div className="grid grid-cols-3 gap-4 p-4">
                    {mercado.map((market, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectMarket(market)}
                            className={`flex flex-col items-center p-4 border cursor-pointer rounded-lg shadow-md transition-transform transform ${selectedMarket && selectedMarket.name === market.name ? 'border-2 border-[#1B3252]' : 'border-transparent'}`}
                        >
                            <Image
                                src={market.image.uri}
                                alt={market.name}
                                width={200}
                                height={120}
                                className="rounded-lg object-cover"
                            />
                            <div className="flex-grow p-4">
                                <h3 className="text-2xl bold text-[#1B3252] font-semibold">{market.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {selectedMarket && ( // Verifica se um mercado foi selecionado
                <button
                    onClick={handleNavigateToValue}
                    className="bg-[#1B3252] fixed bottom-0 w-full h-20 text-white px-4 py-2 rounded"
                    aria-pressed="false"
                >
                    Continuar
                </button>
            )}
        </div>
    );
}