import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

 

  if (loading) return <Loading />;
  if (error) return <h1 className="text-5xl text-center text-red-600 font-bold relative top-[15rem]">Error</h1>;

  return (
    <div className="mx-auto p-4 relative bg-linear-[0deg,#0c1618,white]">
      <h1 className="text-4xl text-center text-[#F6BE9A] font-bold mb-[3rem]">
        ShoPpIng & Enjoy
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-8">
        {products.map((product, index) => (
          <Link
            to={`/shop/item/${product.id}`}
            key={product.id}
             // Attach ref to each item
            className="box relative cursor-pointer flex flex-col bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-teal-800 transition-all hover:scale-105"
          >
            <div className="flex justify-center items-center h-56">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h6 className="mb-2 text-gray-800 text-lg font-semibold">
                {product.title}
              </h6>
              <p className="text-gray-600 flex-grow">
                {product.description.slice(0, 50)}...
              </p>
            </div>
            <div className="p-4 bg-gray-50">
              <span className="w-full cursor-pointer rounded-md bg-gray-800 py-2 px-4 text-center text-sm text-white transition-all hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700">
                ${product.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
