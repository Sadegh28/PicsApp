import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID SYIaHCH6IZ36_REnfwoYJTeaNXcLPqrQ9OJ3JIly5nQ'
  }
});