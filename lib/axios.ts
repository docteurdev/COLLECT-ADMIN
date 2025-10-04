import axios from 'axios';

// Configuration de l'instance axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3342',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Intercepteur pour les requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    // Vous pouvez ajouter un token d'authentification ici si nécessaire
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Le serveur a répondu avec un code d'erreur
      console.error('Erreur de réponse:', error.response.data);
      console.error('Status:', error.response.status);
    } else if (error.request) {
      // La requête a été faite mais pas de réponse
      console.error('Erreur de requête:', error.request);
    } else {
      // Erreur lors de la configuration de la requête
      console.error('Erreur:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;