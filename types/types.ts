export interface User {
  id: string;
  email?: string;
}

export interface ImageStorage {
  id: string;
  name: string;
  url: string;
}

export interface UploadResult {
  success: boolean;
  message: string;
}

export interface DeleteResult {
  success: boolean;
  message: string;
}

export interface Hours {
  week: string;
  saturday: string;
  sunday: string;
}

export interface Modality {
  title: string;
  image: string;
  text: string;
}
export interface Unit {
  id: string;
  name: string;
  image: string;
  imageInput: string;
  address: string;
  hours: Hours;
  position: [number, number];
  modalities: Modality[];
}

export interface Benefit {
  title: string;
  image: string;
  text: string;
}

export interface Plan {
  title: string;
  description: string[];
  price: string;
  fullPrice: string;
  benefits: boolean[];
}

export type Texts = "sobre" | "unidades" | "modalidades" | "planos";

export type Routes = Record<Texts, string>;
