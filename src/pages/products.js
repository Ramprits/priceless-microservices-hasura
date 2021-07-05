import { useSubscription } from "@apollo/client";
import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/product";
import { FETCH_PRODUCTS } from "../graphql/product";

function ProductPage() {
  const { data, loading } = useSubscription(FETCH_PRODUCTS);
  return (
    <Navbar
      title="Product Page"
      bucketMain={[<Product items={data} loading={loading} />]}
    />
  );
}

export default ProductPage;
