import React from "react";
import data from "./data/Shoes";
import { Card } from "./components/Card";

export const App = () => {
  const products = data.map((product) => (
    <Card key={product.id} {...product} />
  ));

  return <div className="product-container">{products}</div>;
};
