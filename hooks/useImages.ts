import { useState } from "react";
import { fetchImages } from "lib/fetchImage";
import { ImageStorage } from "types/types";

export function useImages(storagePath: string) {
  const [images, setImages] = useState<ImageStorage[]>([]);

  const loadImages = async () => {
    const fetchStorageImages = await fetchImages(storagePath);
    setImages(fetchStorageImages);
  };

  return { images, loadImages };
}
