import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

const useApi = () => {
  const token = localStorage.getItem('token');

  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  const get = async (url) => instance.get(url);
  const post = async (url, data) => instance.post(url, data);
  const put = async (url, data) => instance.put(url, data);
  const del = async (url) => instance.delete(url);

  return { get, post, put, del };
};

export default useApi;
