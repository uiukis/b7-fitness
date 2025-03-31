import { Unit, Plan, Routes, Texts, Modality } from "types/types";

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
    image: "/images/background-maraponga.png",
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
        text: "Treino com pesos que promove força, resistência e ganho de massa muscular.",
      },
      {
        title: "FitDance",
        image: "/images/fitdance.jpg",
        text: "Aula animada de dança coreografada, ideal para queimar calorias se divertindo.",
      },
      {
        title: "Funcional",
        image: "/images/funcional.jpg",
        text: "Treinamento que melhora o condicionamento físico com exercícios que simulam movimentos do dia a dia.",
      },
      {
        title: "Alongamento",
        image: "/images/alongamento.jpg",
        text: "Exercícios voltados para melhorar a flexibilidade, postura e aliviar tensões musculares.",
      },
      {
        title: "GAP",
        image: "/images/gap.jpg",
        text: "Foco em Glúteos, Abdômen e Pernas com exercícios localizados de alta efetividade.",
      },
      {
        title: "Forró",
        image: "/images/forro.jpg",
        text: "Aula de dança típica nordestina, que trabalha coordenação, ritmo e interação social.",
      },
      {
        title: "Pilates Solo",
        image: "/images/pilates.jpg",
        text: "É uma prática que se concentra em exercícios realizados no chão, usando um tapete.",
      },
    ],
  },
  {
    id: "sao-paulo",
    name: "São Paulo",
    image: "/images/background-sao-paulo.jpg",
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
        title: "Musculação",
        image: "/images/musculacao.jpg",
        text: "Treino com pesos que promove força, resistência e ganho de massa muscular.",
      },
      {
        title: "FitDance",
        image: "/images/fitdance.jpg",
        text: "Aula animada de dança coreografada, ideal para queimar calorias se divertindo.",
      },
      {
        title: "Funcional",
        image: "/images/funcional.jpg",
        text: "Treinamento que melhora o condicionamento físico com exercícios que simulam movimentos do dia a dia.",
      },
      {
        title: "Alongamento",
        image: "/images/alongamento.jpg",
        text: "Exercícios voltados para melhorar a flexibilidade, postura e aliviar tensões musculares.",
      },
      {
        title: "GAP",
        image: "/images/gap.jpg",
        text: "Foco em Glúteos, Abdômen e Pernas com exercícios localizados de alta efetividade.",
      },
      {
        title: "Forró",
        image: "/images/forro.jpg",
        text: "Aula de dança típica nordestina, que trabalha coordenação, ritmo e interação social.",
      },
      {
        title: "Pilates Solo",
        image: "/images/pilates.jpg",
        text: "É uma prática que se concentra em exercícios realizados no chão, usando um tapete.",
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
        title: "Musculação",
        image: "/images/musculacao.jpg",
        text: "Treino com pesos que promove força, resistência e ganho de massa muscular.",
      },
      {
        title: "FitDance",
        image: "/images/fitdance.jpg",
        text: "Aula animada de dança coreografada, ideal para queimar calorias se divertindo.",
      },
      {
        title: "Funcional",
        image: "/images/funcional.jpg",
        text: "Treinamento que melhora o condicionamento físico com exercícios que simulam movimentos do dia a dia.",
      },
      {
        title: "Alongamento",
        image: "/images/alongamento.jpg",
        text: "Exercícios voltados para melhorar a flexibilidade, postura e aliviar tensões musculares.",
      },
      {
        title: "GAP",
        image: "/images/gap.jpg",
        text: "Foco em Glúteos, Abdômen e Pernas com exercícios localizados de alta efetividade.",
      },
      {
        title: "Forró",
        image: "/images/forro.jpg",
        text: "Aula de dança típica nordestina, que trabalha coordenação, ritmo e interação social.",
      },
      {
        title: "Pilates Solo",
        image: "/images/pilates.jpg",
        text: "É uma prática que se concentra em exercícios realizados no chão, usando um tapete.",
      },
    ],
  },
  {
    id: "joao-xxiii",
    name: "João XXIII",
    image: "/images/background-joao-xxiii.jpg",
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
        title: "Musculação",
        image: "/images/musculacao.jpg",
        text: "Treino com pesos que promove força, resistência e ganho de massa muscular.",
      },
      {
        title: "FitDance",
        image: "/images/fitdance.jpg",
        text: "Aula animada de dança coreografada, ideal para queimar calorias se divertindo.",
      },
      {
        title: "Funcional",
        image: "/images/funcional.jpg",
        text: "Treinamento que melhora o condicionamento físico com exercícios que simulam movimentos do dia a dia.",
      },
      {
        title: "Alongamento",
        image: "/images/alongamento.jpg",
        text: "Exercícios voltados para melhorar a flexibilidade, postura e aliviar tensões musculares.",
      },
      {
        title: "GAP",
        image: "/images/gap.jpg",
        text: "Foco em Glúteos, Abdômen e Pernas com exercícios localizados de alta efetividade.",
      },
      {
        title: "Ritbox",
        image: "/images/ritbox.jpg",
        text: "Combinação de ritmos dançantes com movimentos de boxe para queimar calorias e aliviar o estresse.",
      },
      {
        title: "Forró",
        image: "/images/forro.jpg",
        text: "Aula de dança típica nordestina, que trabalha coordenação, ritmo e interação social.",
      },
      {
        title: "Pilates Solo",
        image: "/images/pilates.jpg",
        text: "É uma prática que se concentra em exercícios realizados no chão, usando um tapete.",
      },
      {
        title: "Fullbody",
        image: "/images/fullbody.jpg",
        text: "Treinamento que ativa o corpo inteiro em uma única sessão, unindo força, cardio e resistência.",
      },
    ],
  },
];

export const benefits: Modality[] = [
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
    price: "114,90",
    fullPrice: "1318,90",
    benefits: [true, true, true, true],
  },
];
