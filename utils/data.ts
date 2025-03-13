export const texts = ["sobre", "unidades", "modalidades", "planos"];
export const routes: Record<string, string> = {
  sobre: "sobre",
  unidades: "unidades",
  modalidades: "modalidades",
  planos: "planos",
};
export const units = [
  { name: "MARAPONGA", image: "/images/unit-1.jpg" },
  { name: "SÃO PAULO", image: "/images/unit-2.jpg" },
  { name: "JOÃO CARLOS", image: "/images/unit-3.jpg" },
  { name: "MARAPONGA", image: "/images/unit-1.jpg" },
  { name: "SÃO PAULO", image: "/images/unit-2.jpg" },
  { name: "JOÃO CARLOS", image: "/images/unit-3.jpg" },
];

export const benefits = [
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
    image: "/images/aulas.jpg",
    text: "Participe de aulas dinâmicas para motivação extra.",
  },
];

export const plans = [
  {
    title: "FLEX",
    price: "119,90",
    fullPrice: "149,90",
    benefits: [true, true, false, false],
  },
  {
    title: "PLUS",
    price: "149,90",
    fullPrice: "169,90",
    benefits: [true, true, true, true],
  },
  {
    title: "FAMÍLIA",
    price: "149,90",
    fullPrice: "169,90",
    benefits: [true, true, true, true],
  },
];
