import axios from 'axios'


const token = sessionStorage.getItem('memberToken').replace(/"/g, ''); 
const backendUrl = process.env.BACKEND_URL
const config = axios.create({
    baseURL:backendUrl 
})
config.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default config;