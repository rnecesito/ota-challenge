"use client";
import Avatar from "@/components/Avatar";
import Loader from "@/components/Loader";
import ProductGroup from "@/components/ProductGroup";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch("/data.json");
    response
      .json()
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const groups = {
    featured: data.filter((product) => product.lane === "features"),
    hot: data.filter((product) => product.lane === "hot"),
    for_you: data.filter((product) => product.lane === "for_you"),
    null: data.filter((product) => product.lane === null),
  };

  return (
    <div>
      <div className="bg-violet-600 text-white p-4 flex flex-row gap-3">
        <div>
          <Avatar src={"https://i.pravatar.cc/200"} alt="avatar" size={40} />
        </div>
        <div>
          <h1 className="text-xs">Welcome to e-commerce!</h1>
          <p className="text-xl font-semibold">Good Morning, Nicole</p>
        </div>
      </div>
      <div className="p-4 pb-14">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white rounded-lg">
            <Loader />
          </div>
        )}
        <ProductGroup title="For You" products={groups.for_you} />
        <ProductGroup title="Hot Products" products={groups.hot} />
        <ProductGroup title="Featured" products={groups.featured} />
        <ProductGroup title="" products={groups.null} />
      </div>
    </div>
  );
};

export default Home;
