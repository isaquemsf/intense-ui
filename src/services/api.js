import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const generateMessageForName = (name) => {
    return api.post('/messages/generate', { name });
};