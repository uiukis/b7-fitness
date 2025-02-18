import { UploadResult } from "types/types";
import { supabase } from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function uploadImage(
  fileName: File,
  folderName: string
): Promise<UploadResult> {
  if (!fileName || !folderName) {
    return {
      success: false,
      message: "Nome do arquivo ou pasta não fornecido.",
    };
  }

  try {
    const fileExtension = fileName.name.split(".").pop();

    const currentDate = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .slice(0, 19);

    const uniqueId = uuidv4().slice(0, 8);

    const newFileName = `b7-${folderName}_${currentDate}_${uniqueId}.${fileExtension}`;
    console.log(newFileName);

    const filePath = `${folderName}/${newFileName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("b7-images")
      .upload(filePath, fileName);

    if (uploadError) {
      console.error("Erro ao enviar imagem:", uploadError);
      throw new Error("Erro ao salvar: " + uploadError.message);
    }

    console.log("Imagem salva:", uploadData.path);

    return { success: true, message: "Imagem enviada e salva com sucesso!" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "Ocorreu um erro desconhecido." };
  }
}
