"use client";
import HeaderParceiro from "@/components/headerParceiro";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Instituicao } from "@/types";

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

export default function InstituicaoParceiraPage() {
    const [selectedInstitution, setSelectedInstitution] = useState<Instituicao | null>(null);
    const router = useRouter();

    return (
        <div className="relative">
            <HeaderParceiro title="Instituições" />
            <ScrollArea>
                <div className="flex flex-col gap-4 p-4">
                    {institutions.map((institution, index) => (
                        <div
                            key={index}
                            className={`flex flex-row items-center border cursor-pointer rounded-lg shadow-md transition-transform transform ${selectedInstitution && selectedInstitution.name === institution.name ? 'border-2 border-[#1B3252]' : 'border-transparent'
                                }`}
                        >
                            <div className="relative w-52 h-40 rounded-l-lg overflow-hidden">
                                <Image
                                    src={institution.image.uri}
                                    alt={institution.name}
                                    layout="fill"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-grow p-4 flex flex-col justify-start">
                                <h3 className="text-2xl bold font-semibold">{institution.name}</h3>
                                <div className="flex flex-wrap mt-2">
                                    {institution.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} className="bg-[#1B3252] text-white mx-1">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </ScrollArea>
        </div>
    );
}
