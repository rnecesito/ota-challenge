import React from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

const ProductGroup = ({ title, products }) => (
  <div className="mb-4 px-4">
    <div className="flex justify-between mb-1">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <h1 className="text-xs font-medium text-violet-600">See All</h1>
    </div>
    <div className="flex overflow-x-auto space-x-4 pb-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
);

export default ProductGroup;
