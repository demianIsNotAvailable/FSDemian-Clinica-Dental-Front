import axios from 'axios';


export const loginCall = async (credentials) => await axios.post('https://fsdemian-clinica-dental-production-a578.up.railway.app/user/login', credentials)
export const registerCall = async (data) => await axios.post('https://fsdemian-clinica-dental-production-a578.up.railway.app/user/login', data)