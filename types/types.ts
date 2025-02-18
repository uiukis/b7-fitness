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
