import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8086/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const taskApi = {
    getAllTasks: async () => {
        try {
            const response = await api.get('/tasks');
            return response.data;
        } catch (error) {
            console.error('GetAllTasks Hatası:', error);
            throw error;
        }
    },

    getTaskById: async (id) => {
        try {
            const response = await api.get(`/tasks/${id}`);
            return response.data;
        } catch (error) {
            console.error('GetTaskById Hatası:', error);
            throw error;
        }
    },

    createTask: async (task) => {
        try {
            console.log('API - Gönderilen task:', task);
            const response = await api.post('/tasks/create', task); 
            return response.data;
        } catch (error) {
            console.error('CreateTask Hatası:', error);
            console.error('Hata detayları:', error.response?.data);
            throw error;
        }
    },

    updateTask: async (id, task) => {
        try {
            const response = await api.put(`/tasks/${id}`, task);
            return response.data;
        } catch (error) {
            console.error('UpdateTask Hatası:', error);
            throw error;
        }
    },

    deleteTask: async (id) => {
        try {
            await api.delete(`/tasks/${id}`);
        } catch (error) {
            console.error('DeleteTask Hatası:', error);
            throw error;
        }
    }
};