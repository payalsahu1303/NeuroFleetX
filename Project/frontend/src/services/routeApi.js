import api from './api';

export const getRoutes = () => api.get('/routes');
export const addRoute = (route) => api.post('/routes', route);
export const updateRoute = (id, route) => api.put(`/routes/${id}`, route);
export const deleteRoute = (id) => api.delete(`/routes/${id}`);
export const assignVehicle = (routeId, vehicleId) =>
    api.post(`/routes/${routeId}/assign?vehicleId=${vehicleId}`);
