import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"], //항상 배열로 쓴다.
    queryFn: () => api.products.getProducts(),
  });

  if (isLoading) return <Page>Loading...</Page>;
  if (isError) return <Page>Error</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;
