import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTJjZTJmY2JjZWJjYWNhODdhZjdiYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDc2NjU4MSwiZXhwIjoxNjcxMDI1NzgxfQ.3lasoYkAGrOTmlspSqyrAQnEdd5UbzznT4Z8dqbIfV4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
