import Image from "next/image";
import backgroundImage from '@/public/background-image.jpg';
import fomeZero from "@/public/fomeZero.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { HandHeart, Store, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  return (
    <ScrollArea className="overflow-auto h-screen">
      <div className="relative w-screen min-h-screen">
        <Image
          src={backgroundImage}
          alt="Descrição da imagem"
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute w-full flex flex-col items-center top-10 z-10">
          <div className="flex items-center mb-3">
            <Image
              src={fomeZero}
              alt="Fome Zero"
              width={90}
              height={90}
            />
            <h1 className="text-white text-4xl font-bold ml-4">Fome Zero</h1>
          </div>
          <h2 className="text-[#DFA436] bold text-3xl text-center">
            &quot;Fazer o bem, olhando a quem!&quot;
          </h2>

          <div className="w-96 mt-32 z-20 flex flex-col items-center justify-center space-y-5">
            <div className="w-full">
              <Link className="bg-white w-full space-x-2 py-2 px-4 rounded-lg justify-center flex items-center shadow-lg" href="/instituicao">
                <HandHeart className="text-[#DFA436]" size={36} />
                <p className="text-[#1B3252] text-xl md:text-2xl lg:text-3xl font-semibold transition-colors">
                  Quero Doar
                </p>
              </Link>
            </div>

            <div className="z-20 my-3">
              <div className="space-x-2 py-2 px-4 rounded-lg flex items-center shadow-lg">
                <Store className="text-[#DFA436]" size={36} />
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold transition-colors">
                  Conheça nossos parceiros
                </p>
              </div>
              <Link className="bg-white space-x-2 py-2 px-4 rounded-lg flex items-center shadow-lg justify-center" href="/instituicao-parceiro">
                <p className="text-[#1B3252] text-xl md:text-2xl lg:text-3xl font-semibold transition-colors ">
                  Intituições
                </p>
              </Link>
              <Link className="bg-white mt-2 space-x-2 py-2 px-4 rounded-lg flex items-center shadow-lg justify-center" href="/mercado-parceiro">
                <p className="text-[#1B3252] text-xl md:text-2xl lg:text-3xl font-semibold transition-colors ">
                  Supermercados
                </p>
              </Link>
            </div>
          </div>

          <div className="z-20 my-5">
            <div className="space-x-2 py-2 px-4 rounded-lg flex items-center shadow-lg">
              <HeartHandshake className="text-[#DFA436]" size={36} />
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold transition-colors">
                Conheça nossos parceiros
              </p>
            </div>
            <Link className="bg-white space-x-2 py-2 px-4 rounded-lg flex items-center shadow-lg justify-center" href="/apoiar">
              <p className="text-[#1B3252] text-xl md:text-2xl lg:text-3xl font-semibold transition-colors ">
                Apoiar
              </p>
            </Link>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
