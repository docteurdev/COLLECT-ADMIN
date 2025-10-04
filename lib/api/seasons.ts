import axiosInstance from '../axios';

export interface Season {
  id?: number;
  label: string;
  start: string;
  end: string;
  created_at?: string;
  updated_at?: string;
}

// Récupérer toutes les saisons
export const getAllSeasons = async () => {
  const response = await axiosInstance.get<Season[]>('/saisons');
  return response.data;
};

// Récupérer une saison par ID
export const getSeasonById = async (id: number) => {
  const response = await axiosInstance.get<Season>(`/saisons/${id}`);
  return response.data;
};

// Créer une nouvelle saison
export const createSeason = async (data: Omit<Season, 'id' | 'created_at' | 'updated_at'>) => {
  const response = await axiosInstance.post<Season>('/saisons', data);
  return response.data;
};

// Mettre à jour une saison
export const updateSeason = async (id: number, data: Partial<Season>) => {
  const response = await axiosInstance.put<Season>(`/saisons/${id}`, data);
  return response.data;
};

// Supprimer une saison
export const deleteSeason = async (id: number) => {
  const response = await axiosInstance.delete(`/saisons/${id}`);
  return response.data;
};