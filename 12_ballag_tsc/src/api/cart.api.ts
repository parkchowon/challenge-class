import { AxiosInstance } from "axios";

class CartAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getCart() {
    const path = "/cart";

    const response = await this.axios.get<string>(path);
    const result = response.data.result;

    return result;
  }

  async addItemToCart(productId: number) {
    const path = `/cart/products/${productId}`;
    const response = await this.axios.post(path);
    const result = response.data.result;
    return result;
  }
  async removeItemFromCart(productId: number) {
    const path = `/cart/products/${productId}`;
    const response = await this.axios.delete(path);
    const result = response.data.result;

    return result;
  }
  async clearItemInCart(productId: number) {
    const path = `/cart/products/${productId}/clear`;
    const response = await this.axios.delete(path);
    const result = response.data.result;

    return result;
  }
}

export default CartAPI;
