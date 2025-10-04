import axiosInstance from '../axios';
import { IAgent } from '../../../api/src/interfaces';

export interface CreateAgentData {
  firstName: string;
  lastName: string;
  phone: string;
  adminId: string;
  password: string;
}

export interface UpdateAgentData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  password?: string;
}

// Récupérer tous les agents
export const getAllAgents = async () => {
  const response = await axiosInstance.get<IAgent[]>('/agents');
  return response.data;
};

// Récupérer un agent par ID
export const getAgentById = async (id: string) => {
  const response = await axiosInstance.get<IAgent>(`/agents/${id}`);
  return response.data;
};

// Créer un nouvel agent
export const createAgent = async (data: CreateAgentData) => {
  const response = await axiosInstance.post<IAgent>('/agents/create', data);
  return response.data;
};

// Mettre à jour un agent
export const updateAgent = async (id: string, data: UpdateAgentData) => {
  const response = await axiosInstance.put<IAgent>(`/agents/${id}`, data);
  return response.data;
};

// Supprimer un agent
export const deleteAgent = async (id: string) => {
  alert(id)
  const response = await axiosInstance.delete(`/agents/${id}`);
  return response.data;
};