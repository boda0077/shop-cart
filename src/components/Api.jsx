import React from "react";

import { Link } from "react-router-dom";

export default function Api() { 

    return (
        <>
         <h1 className="text-4xl text-center text-teal-500 font-bold mb-[3rem] ">
          ShoPpPing & Enjoy
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative  cursor-pointer  flex flex-col bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-teal-800 transition-all hover:scale-105"
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
                <Link
                to={`/shop/item/${product.id}`}
                  className="w-full cursor-pointer  rounded-md bg-gray-800 py-2 px-4 text-center text-sm text-white transition-all hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700"
                  
                >
                  ${product.price}
                </Link>
              </div>
            </div>
          ))}
        </div>
        </>
    );
    }
