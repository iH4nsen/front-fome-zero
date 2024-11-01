"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import str from '@/public/str.png';
import instagram from "@/public/instagram.jpeg";
import { ArrowLeft } from 'lucide-react';

export default function MoreScreen() {
    const router = useRouter();

    return (
        <div className="flex flex-col p-4 bg-[#1B3252] "> {/* Ajuste a cor de início */}
            <div className="flex items-center justify-between relative">
                <button
                    onClick={() => router.back()}
                    className="absolute left-4 top-4 bg-white text-[#1B3252] py-4 px-4 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                    <ArrowLeft />
                </button>
                <div className="flex-grow items-center mt-8 flex justify-center">
                    <h1 className="text-4xl font-bold text-[#DFA436]">Seja um apoiador do STR</h1>
                </div>
            </div>

            <div className="flex justify-center my-4">
                <Image
                    src={str}
                    height={220}
                    width={300}
                    alt="Imagem de agradecimento"
                    className="object-contain"
                />
            </div>

            <p className="text-white text-lg mb-2 text-justify"> {/* Adicionei text-justify aqui */}
                A equipe STR - Super Tecno Robots é composta por 9 (Nove)
                integrantes: André, Artur, Fellipe, Heitor, Isabela, Luiza, Miguel, Sara e
                Valentina, sendo alunos do 5 Ano do Ensino Fundamental do Colégio
                Marista Patos de Minas.
            </p>
            <p className="text-white text-lg mb-2 text-justify"> {/* Adicionei text-justify aqui */}
                O nome STR foi escolhido para representar os superpoderes de um
                grupo que é apaixonado por tecnologia e robótica e que participa pelo
                terceiro ano consecutivo do torneio do TBR, sendo classificado este
                ano para a etapa regional do Triangulo Mineiro, trazendo cada vez mais
                garra e paixão por este universo de desafios e diversão que é a
                robótica.
            </p>
            <h2 className="text-2xl font-semibold mt-4 text-[#DFA436]">Torneio</h2>
            <p className="text-white text-lg mb-2 text-justify"> {/* Adicionei text-justify aqui */}
                O Torneio Brasil de Robótica - TBR é uma iniciativa de cunho educativo-científico-tecnológico que objetiva preparar crianças,
                jovens e adultos jovens para atuarem de diferentes modos na pluralidade científica e tecnológica do mundo do trabalho.
                A Metodologia do Torneio Brasil de Robótica, há doze anos explora as competências individuais de seus participantes
                no enfrentamento e resolução de problemas no mundo real, estimula o empreendedorismo por meio das soluções apresentadas aos problemas trabalhados,
                fortalece as habilidades técnicas e científicas individualmente de cada integrante com o propósito de
                descortinar os expoentes, além de exercitar os domínios da gestão de forma ampla e integrada, fazendo a melhoria
                contínua dos processos;
            </p>
            <h2 className="text-2xl font-semibold mt-4 text-[#DFA436]">Objetivos</h2>
            <p className="text-white text-lg mb-2 text-justify"> {/* Adicionei text-justify aqui */}
                Ampliar nossos conhecimentos e vivenciar novas experiências no contexto da criatividade, inovação e desenvolvimento tecnológico,
                alcançando a etapa nacional e com determinação, disciplina e dedicação conquistar o título no maior torneio de robótica do Brasil,
                o TBR.
            </p>
            <h1 className="text-3xl font-bold mt-4 text-[#DFA436]">Contato</h1>
            <div className="flex justify-center my-2">
                <span className="text-lg font-bold text-white"> (34) 9 9968-3339 </span>
            </div>

            <div className="flex justify-center my-4">
                <Image
                    src={instagram}
                    height={300}
                    width={300}
                    alt="Imagem de agradecimento"
                    className="rounded-2xl object-cover"
                />
            </div>
        </div>
    );
}
