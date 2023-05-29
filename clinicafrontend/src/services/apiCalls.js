import axios from "axios";

export const loginCall = async (credentials) => {
  console.log(credentials);
  return await axios.post("http://localhost:27017/user/login", credentials);
};

export const registerCall = async (data) => {
  await axios.post("http://localhost:27017/user/", data);
};

export const profileCall = async (credentials) => {
  const config = {
    headers: {
      Authorization: "Bearer " + credentials.token,
    },
  };

  return await axios.get(`http://localhost:27017/user/${credentials.user.role}`,
    config
  );
};

export const updateUserCall = async (data, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const body = (({ email, phone, password }) => ({
    email,
    phone,
    password,
  }))(data);

  return await axios.put(`http://localhost:27017/user/`, body, config);
};
