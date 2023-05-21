import axios from 'axios';


export const loginCall = async (credentials) => {

    // return await axios.post(`endpoint`)

    // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTE2NmEzZDUzMDYwODRlY2U1M2I5NCIsInJvbGUiOiJkZW50aXN0IiwiaWF0IjoxNjgzMDU2NDcyLCJleHAiOjE2ODMxNDI4NzJ9.Vl1QcuSy1D0FlgIhbDxFeoqm7eM6ZCdncjxdAJgAT38";

    const res = await axios.post('https://dentistclinicbackend-production.up.railway.app/user/login', credentials)

    return res
}