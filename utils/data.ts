import { Unit, Benefit, Plan, Routes, Texts } from "types/types";

export const texts: Texts[] = ["sobre", "unidades", "modalidades", "planos"];

export const routes: Routes = {
  sobre: "sobre",
  unidades: "unidades",
  modalidades: "modalidades",
  planos: "planos",
};

export const units: Unit[] = [
  {
    id: "maraponga",
    name: "Maraponga",
    image: "/images/background-joao-carlos.png",
    imageInput: "/images/input-maraponga.jpg",
    address: "Av. Godofredo Maciel, 1945 - Maraponga",
    hours: {
      week: "05h às 00h",
      saturday: "06h às 21h",
      sunday: "07h às 19h",
    },
    position: [-3.7936605056440107, -38.56872093252526],
    modalities: [
      {
        title: "Musculação",
        image: "/images/musculacao.jpg",
        text: "Treino de resistência e força.",
      },
      {
        title: "CrossFit",
        image: "/images/crossfit.jpg",
        text: "Treino funcional de alta intensidade.",
      },
    ],
  },
  {
    id: "sao-paulo",
    name: "São Paulo",
    image: "/images/background-joao-carlos.png",
    imageInput: "/images/input-sao-paulo.jpg",
    address: "R. São Paulo, 1648 - Centro",
    hours: {
      week: "06h às 23h",
      saturday: "07h às 20h",
      sunday: "08h às 18h",
    },
    position: [-3.7216146212465433, -38.54022004768853],
    modalities: [
      {
        title: "Yoga",
        image: "/images/yoga.jpg",
        text: "Práticas de relaxamento e flexibilidade.",
      },
      {
        title: "Pilates",
        image: "/images/pilates.jpg",
        text: "Treinamento para fortalecimento e postura.",
      },
    ],
  },
  {
    id: "joao-carlos",
    name: "João Carlos",
    image: "/images/background-joao-carlos.png",
    imageInput: "/images/input-joao-carlos.jpg",
    address: "R. Gov. João Carlos, 858 - Serrinha",
    hours: {
      week: "05h às 23h",
      saturday: "06h às 22h",
      sunday: "08h às 18h",
    },
    position: [-3.7825172360883346, -38.55380791718331],
    modalities: [
      {
        title: "Zumba",
        image: "/images/zumba.jpg",
        text: "Dança aeróbica com ritmos latinos.",
      },
      {
        title: "HIIT",
        image: "/images/hiit.jpg",
        text: "Treinamento intervalado de alta intensidade.",
      },
    ],
  },
  {
    id: "joao-xxiii",
    name: "João XXIII",
    image: "/images/background-joao-carlos.png",
    imageInput: "/images/input-joao-23.jpg",
    address: "Rua Aluísio Azevedo, 86 - João XXIII",
    hours: {
      week: "05h às 23h",
      saturday: "06h às 22h",
      sunday: "08h às 18h",
    },
    position: [-3.7745481127694682, -38.57289561718324],
    modalities: [
      {
        title: "Funcional",
        image: "/images/funcional.jpg",
        text: "Treinamento para mobilidade e resistência.",
      },
      {
        title: "Spinning",
        image: "/images/spinning.jpg",
        text: "Aulas de ciclismo indoor com intensidade.",
      },
    ],
  },
];

export const benefits: Benefit[] = [
  {
    title: "EQUIPAMENTOS MODERNOS",
    image: "/images/equipamentos.jpg",
    text: "Aparelhos de última geração para melhor desempenho.",
  },
  {
    title: "AMBIENTE CLIMATIZADO",
    image: "/images/climatizado.jpg",
    text: "Treine com conforto, independente da temperatura externa.",
  },
  {
    title: "CADEIRAS DE MASSAGEM",
    image: "/images/massagem.jpg",
    text: "Relaxe após o treino com nossas cadeiras de massagem.",
  },
  {
    title: "PROFESSORES QUALIFICADOS",
    image: "/images/professores.jpg",
    text: "Equipe experiente para te ajudar a alcançar seus objetivos.",
  },
  {
    title: "AULAS COLETIVAS DIÁRIAS",
    image: "/images/equipamentos.jpg",
    text: "Participe de aulas dinâmicas para motivação extra.",
  },
];

export const plans: Plan[] = [
  {
    title: "FLEX",
    description: [
      "Acesso a aulas coletivas",
      "Professores qualificados",
      "Cadeiras de massagem",
      "Treine em todas as unidades",
    ],
    price: "119,90",
    fullPrice: "149,90",
    benefits: [true, true, false, false],
  },
  {
    title: "PLUS",
    description: [
      "Acesso a aulas coletivas",
      "Professores qualificados",
      "Cadeiras de massagem",
      "Treine em todas as unidades",
    ],
    price: "149,90",
    fullPrice: "169,90",
    benefits: [true, true, true, true],
  },
  {
    title: "FAMÍLIA",
    description: [
      "Acesso a aulas coletivas",
      "Professores qualificados",
      "Cadeiras de massagem",
      "Treine em todas as unidades",
    ],
    price: "149,90",
    fullPrice: "169,90",
    benefits: [true, true, true, true],
  },
];
