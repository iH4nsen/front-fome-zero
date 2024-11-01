"use client";
import HeaderDoar from "@/components/header";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Instituicao } from "@/types";
import { useAppContext } from "@/context/appContext";

const institutions = [
    {
        name: "Casa da Esperança",
        image: { uri: 'https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg' },
        tags: ["Educação", "Crianças"],
        progress: 45,
    },
    {
        name: "Lar dos Idosos São Vicente",
        image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeDda-Lhi0pTKkMSE-n-Zd1WQv7hIXGUrDw&s' },
        tags: ["Saúde", "Idosos"],
        progress: 60,
    },
    {
        name: "Instituto Vida Verde",
        image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukdXKanbCK1nL4v0vXeUHZxbUuHpQVd9-Gg&s' },
        tags: ["Meio Ambiente", "Sustentabilidade"],
        progress: 30,
    },
    {
        name: "Associação Viver Bem",
        image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexbqvlv4GrtPhi3IpVJPFPhTFoQWNOKMbVg&s' },
        tags: ["Saúde", "Assistência Social"],
        progress: 80,
    }
];

export default function InstituicaoPage() {
    const { selectedInstitution, setSelectedInstitution } = useAppContext(); // Desestruturação correta do contexto
    const router = useRouter();

    const handleSelectInstitution = (institution: Instituicao) => {
        setSelectedInstitution(institution); // Atualiza a instituição selecionada no contexto
    };

    const handleNavigateToMarket = () => {
        router.push('/mercado');
    };

    return (
        <div className="relative">
            <HeaderDoar title="Escolher instituição" />
            <ScrollArea>
                <div className="flex flex-col gap-4 p-4">
                    {institutions.map((institution, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectInstitution(institution)}
                            className={`flex flex-row items-center border cursor-pointer rounded-lg shadow-md transition-transform transform ${selectedInstitution && selectedInstitution.name === institution.name ? 'border-2 border-[#1B3252]' : 'border-transparent'}`}
                        >
                            <div className="relative w-52 h-52 rounded-l-lg overflow-hidden">
                                <Image
                                    src={institution.image.uri}
                                    alt={institution.name}
                                    layout="fill"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-grow p-4 flex flex-col justify-start">
                                <h3 className="text-2xl font-semibold">{institution.name}</h3>
                                <div className="flex flex-wrap mt-2">
                                    {institution.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} className="bg-[#1B3252] text-white mx-1">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="mt-16">{institution.progress}% da meta arrecadada</p>
                                <Progress value={institution.progress} className="w-full mt-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {selectedInstitution && (
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
