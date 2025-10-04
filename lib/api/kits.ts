import axiosInstance from '../axios';

export interface Kit {
  id?: string;
  label: string;
  saisonId: string;
  amount: number;
  createdAt?: string;
}

// Récupérer tous les kits
export const getAllKits = async () => {
  const response = await axiosInstance.get<Kit[]>('/kits/byId/1');
  return response.data;
};

// Récupérer un kit par ID
export const getKitById = async (id: string) => {
  const response = await axiosInstance.get<Kit>(`/kits/${id}`);
  return response.data;
};

// Créer un nouveau kit
export const createKit = async (data: Omit<Kit, 'id' | 'createdAt'>) => {
  const response = await axiosInstance.post<Kit>('/kits', data);
  return response.data;
};

// Mettre à jour un kit
export const updateKit = async (id: string, data: Partial<Omit<Kit, 'id' | 'createdAt'>>) => {
  const response = await axiosInstance.put<Kit>(`/kits/${id}`, data);
  return response.data;
};

// Supprimer un kit
export const deleteKit = async (id: string) => {
  const response = await axiosInstance.delete(`/kits/${id}`);
  return response.data;
};