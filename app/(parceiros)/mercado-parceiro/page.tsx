"use client";
import HeaderParceiro from "@/components/headerParceiro";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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

export default function MercadoParceiroPage() {
    const router = useRouter();

    return (
        <div className="relative">
            <HeaderParceiro title="Supermercados" />
            <ScrollArea>
                <div className="grid grid-cols-3 gap-4 p-4">
                    {mercado.map((mercado, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center" // Adicionado para centralizar o conteúdo do card
                        >
                            <Image
                                src={mercado.image.uri}
                                alt={mercado.name}
                                width={200}
                                height={120}
                                className="rounded-lg object-cover"
                            />
                            <div className="flex-grow p-4">
                                <h3 className="text-2xl bold text-[#1B3252] font-semibold">{mercado.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}