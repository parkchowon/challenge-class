import { useEffect } from "react";
import "./App.css";
import { getProduct } from "./api/api.product";

function App() {
  useEffect(() => {
    const productId = 9587059;
    const brandId = 105;

    getProduct(productId);
  });

  return (
    <>
      <main>hello world</main>
    </>
  );
}

export default App;
