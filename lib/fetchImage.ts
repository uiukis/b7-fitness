import { supabase } from "lib/supabase";
import { ImageStorage } from "types/types";

export async function fetchImages(folder: string): Promise<ImageStorage[]> {
  try {
    const { data, error } = await supabase.storage
      .from("b7-images")
      .list(folder);

    if (error) {
      console.warn("Erro ao buscar imagens do bucket:", error);
      return [];
    }

    if (!data || data.length === 0) {
      console.warn("Nenhuma imagem encontrada no bucket.");
      return [];
    }

    const images = data.map((file) => {
      return {
        id: file.id,
        name: file.name,
        url: `https://ubmztlgnyghmgmmsbdtd.supabase.co/storage/v1/object/public/b7-images/${folder}/${file.name}`,
      };
    });

    return images;
  } catch (error) {
    console.warn("Erro inesperado:", error);
    return [];
  }
}
