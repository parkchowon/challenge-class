import axios from "axios";
import { baseURL } from "./api";

const myAxiosInstance = axios.create();

export async function getBrands() {
  const endpoint = `${baseURL}/brands`;

  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}

export async function getBrand(brandId) {
  const endpoint = `${baseURL}/brands/${brandId}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}
