import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import api from "../api/api";
import Page from "../components/Page";

function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  console.log(productId);
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", { id: productId }],
    queryFn: () => api.products.getProduct(productId),
  });
  if (isLoading) return <Page>Loading</Page>;
  if (isError) return <Page>Error</Page>;
  return <div>{product.name}</div>;
}

export default ProductDetailPage;
