// Item.jsx (ItemPage)
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';  // Import useCart
import Loading from './Loading';

function ItemPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [add, setAdd] = useState(1);

  const { addToCart } = useCart();  // Get addToCart from useCart

  const handelChange = (e) => {
    setAdd(e.target.value);
  };

  const handelOrder = () => {
    // Prepare the item to add to cart
    const itemToAdd = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: add,
    };

    // Add item to cart
    addToCart(itemToAdd);

    console.log(`Ordered ${add} item(s)`);
  };

  const handelDecress = () => {
    if (add > 1) {
      setAdd(add - 1);
    }
  };

  const handelIncress = () => {
    setAdd(add + 1);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
        <div className="relative h-56 md:h-auto overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
             className='w-[500px] h-[450px]'
          />
        </div>
        <div className="p-4 flex flex-col gap-4">
          <h6 className="text-gray-800 text-4xl font-semibold">{product.title}</h6>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <button
                onClick={handelDecress}
                className="text-2xl px-2 rounded-md border border-black font-bold text-red-500 cursor-pointer"
              >
                -
              </button>
              <input
                type="number"
                name="Item-Number"
                className="outline-0 rounded-sm text-center text-2xl font-bold border border-black w-[4rem] h-[3rem]"
                onChange={handelChange}
                value={add}
              />
              <button
                onClick={handelIncress}
                className="text-2xl font-bold rounded-md border px-2 text-teal-500 cursor-pointer"
              >
                +
              </button>
            </div>
            <button
              onClick={handelOrder}
              className="w-full cursor-pointer rounded-md bg-gray-800 py-2 px-4 text-center text-sm text-white transition-all hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
