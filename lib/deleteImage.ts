import { DeleteResult } from "types/types";
import { supabase } from "./supabase";

export async function deleteImage(
  fileName: string,
  folderName: string
): Promise<DeleteResult> {
  if (!fileName || !folderName) {
    return {
      success: false,
      message: "Nome do arquivo ou pasta não fornecido.",
    };
  }

  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData.user) {
      return {
        success: false,
        message: "Usuário não autenticado. Faça login para continuar.",
      };
    }

    const filePath = `${folderName}/${fileName}`;

    console.log(fileName);

    const { data, error } = await supabase.storage
      .from(`b7-images/${folderName}/${fileName}`)
      .remove([fileName]);

    if (error) {
      console.error("Erro ao deletar imagem do bucket:", error);
      throw new Error("Erro ao deletar a imagem: " + error.message);
    }

    console.log("Imagem deletada:", data);

    return {
      success: true,
      message: `Imagem "${filePath}" deletada com sucesso!`,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "Ocorreu um erro desconhecido." };
  }
}
