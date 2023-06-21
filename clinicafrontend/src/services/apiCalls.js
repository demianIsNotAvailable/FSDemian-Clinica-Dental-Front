import axios from "axios";

export const loginUser = async (credentials) => {
  return await axios.post(`http://localhost:27017/user/login`, credentials);
};

export const registerUser = async (data) => {
  await axios.post(`http://localhost:27017/user/`, data);
};

export const bringUser = async (credentials) => {
  const config = {
    headers: {
      Authorization: "Bearer " + credentials.token,
    },
  }

  return await axios.get(`http://localhost:27017/user/${credentials.id}`, config)
}


export const findUsers = async (token, name) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.get(`http://localhost:27017/user/find?name=${name}`, config)
}

export const bringUsersByRole = async (token, role) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.get(`http://localhost:27017/user?role=${role}`, config);
};

export const updateUserData = async (data, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const body = (({id, email, phone, password }) => ({
    id,
    email,
    phone,
    password,
  }))(data);
  console.log(data)
  console.log(body)
  console.log( await axios.put(`http://localhost:27017/user/`, body, config));
};

export const bringAppointments = async (token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.get(`http://localhost:27017/appointments`, config)
}