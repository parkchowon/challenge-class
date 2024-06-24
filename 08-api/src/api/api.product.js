import { baseURL } from "./api";

export async function getProduct(productId) {
  const endpoint = `${baseURL}/products/${productId}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}
