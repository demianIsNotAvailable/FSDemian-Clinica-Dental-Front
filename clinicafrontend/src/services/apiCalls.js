import axios from 'axios';

                                                                  
export const loginCall = async (credentials) => await axios.post('https://fsdemian-clinica-dental-production-a578.up.railway.app/user/login', credentials)

export const registerCall = async (data) => {
  await axios.post('https://fsdemian-clinica-dental-production-a578.up.railway.app/user', data)
}

export const profileCall = async (id, token) => {
    const config = {
        headers: { 
          'Authorization': 'Bearer '+ token,  
        }
      };

    return await axios.post(`https://fsdemian-clinica-dental-production-a578.up.railway.app/user/${id}`, config);
 }

 export const updateUserCall = async (id, data, token) => {
  const config = {
    headers: { 
      'Authorization': 'Bearer '+ token,
    },
  };
  const body = (({name, lastname, email, phone, password}) => ({name, lastname, email, phone, password}))(data)
  
  return await axios.put(`https://proyecto-4-clinica-dental-production.up.railway.app/user/${id}`, body, config);
}
