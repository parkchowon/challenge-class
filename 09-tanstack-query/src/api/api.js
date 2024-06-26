import axios from "axios";
import BrandAPI from "./brand.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com/";

class API {
  #baseURL = BASE_URL;
  #client;

  products;
  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
    this.products = new ProductsAPI(this.#client);
    this.brands = new BrandAPI(this.#client);
  }
}

const api = new API();

export default api;
