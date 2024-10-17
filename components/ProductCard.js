import Image from "next/image";
import React from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function ProductCard({ product }) {
  return (
    <div className="min-w-[183px] flex-shrink-0 shadow rounded-lg">
      <ImageWithFallback
        src={product.product_image}
        alt={product.product_name}
        fallbackSrc={"/broken-image.png"}
        width={300}
        height={100}
        className="object-cover rounded-t-lg w-auto h-100"
      />

      <div className="px-2 py-3">
        <ImageWithFallback
          src={product.brand_image}
          alt={product.brand_name}
          fallbackSrc={"/broken-image.png"}
          width={40}
          height={16}
          className="object-cover rounded-lg w-auto h-5"
          loading="lazy"
        />
        <p className="text-base font-bold">{product.brand_name}</p>
        <p className="text-sm font-medium">{product.product_name}</p>
        <p className="text-xs font-light">{product.title}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400 mt-2">
          <div
            className="bg-violet-600 h-2.5 rounded-full"
            style={{ width: `${product.progress * 100}%` }}
          ></div>
        </div>
        <p className="text-xs mt-1">{product.progress * 100}% Complete</p>
      </div>
    </div>
  );
}
