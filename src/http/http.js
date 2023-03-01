import axios from "axios";

export const privateApi = axios.create({
  baseURL: 'https://kapusta-backend.goit.global/',
});

export const publicApi = axios.create({
  baseURL: 'https://kapusta-backend.goit.global/',
});



