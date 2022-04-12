import axios from 'axios';

const CustomAxios = async (baseURL) => {
  const connect = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const response = await connect.get();
  return response;
};

export default CustomAxios;
