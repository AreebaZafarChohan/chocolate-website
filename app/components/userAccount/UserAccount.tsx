"use client";
import { useEffect, useState } from "react";
import { UserAccountProps } from "@/types/componentTypes";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const UserAccount = () => {
  const [cartItems, setCartItems] = useState<UserAccountProps[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const removeItemFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-16">
      <div className="md:col-span-2">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow-lg flex flex-col sm:flex-row gap-6 items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                height={200}
                width={200}
                className="w-32 h-32 object-cover mb-2 rounded"
              />
              <div className="flex-grow">
                <h2 className="font-semibold text-lg md:text-xl">{item.name}</h2>
                <p className="text-base md:text-lg mt-2">
                  Price: <span className="text-orange-700">${item.price}</span>
                </p>
                <p className="text-sm md:text-md mt-1 flex gap-2 items-center">
                  Quantity:
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-orange-700 text-white px-2 pb-1 hover:bg-orange-600 rounded text-sm"
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-orange-700 text-white px-2 hover:bg-orange-600 rounded text-sm"
                  >
                   +
                  </button>
                </p>
              </div>
              <button
                onClick={() => removeItemFromCart(item.id)}
                className="bg-orange-700 border-2 border-orange-700 text-white px-3 py-1 rounded flex items-center h-10 hover:bg-transparent hover:text-orange-700"
              >
                <FaTrash className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="border p-6 rounded shadow-lg mt-8 md:mt-14 bg-white">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-orange-950 border-b border-orange-950 pb-2">
          Order Summary
        </h2>
        <ul className="space-y-4 md:space-y-6 text-orange-950">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between hover:underline">
              <span>
                {item.name} (x{item.quantity})
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold text-orange-950">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row sm:flex-row md:flex-col gap-4 items-center justify-center">
          <button className="bg-orange-700 border-2 border-orange-700 text-white px-4 py-2 rounded hover:bg-transparent hover:text-orange-950 font-bold">
            Place Order
          </button>
          <Link href="/products">
            <button className="bg-transparent border-2 border-orange-700 text-orange-950 hover:text-white px-4 py-2 rounded hover:bg-orange-700 font-bold">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;