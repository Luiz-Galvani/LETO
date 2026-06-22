import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function postJson(url, data) {
  let payload = data;
  if (typeof data === 'string') {
    try {
      payload = JSON.parse(data);
    } catch (e) {
      throw new Error('postJson recebeu uma string que não é JSON válido');
    }
  }

  return api.post(url, payload);
}