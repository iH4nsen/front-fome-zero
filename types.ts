export interface Instituicao {
    name: string;
    image?: {
        uri: string;
    };
    tags: string[];
    progress: number;
}

export interface Market {
    name: string;
    image?: {
        uri: string;
    };
    cnpj?: string;
}