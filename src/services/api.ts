import axios from 'axios';

console.log(import.meta.env);

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_NODE_ENV === 'DEVELOPMENT'
      ? import.meta.env.VITE_DEVELOPMENT_API
      : import.meta.env.VITE_PRODUCTION_API,
});
