"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { ProductDetailsType } from "@/types/componentTypes";

export async function getProducts() {
  const response = await fetch("/api/productsData");
  const data = await response.json();
  return data;
}

const CategorySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [productData, setProductData] = useState<ProductDetailsType[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProductData(products);
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter(
          (product: ProductDetailsType) =>
            product.category === selectedCategory
        );

        const addToCart = (product: ProductDetailsType) => {
          const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        
          const productIndex = cart.findIndex((item: ProductDetailsType) => item.id === product.id);
        
          if (productIndex !== -1) {

            cart[productIndex].quantity += 1;
          } else {

            const newItem = { ...product, quantity: 1 };
            cart.push(newItem);
          }
        
          localStorage.setItem("cart", JSON.stringify(cart));
        
          setPopupMessage(`"${product.name}" added to cart successfully ✅`);
          setShowPopup(true);
        
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        };

  return (
    <div className="p-6 mb-10">
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 ">
        Categories
      </h1>
      <div className="mb-6 flex flex-wrap gap-4">
        <button
          className={`mr-4 px-4 py-2 rounded ${
            selectedCategory === "all"
              ? "bg-orange-700 text-white hover:bg-orange-900 "
              : "bg-gray-200 border-2 border-transparent text-black hover:border-2 hover:border-orange-700"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded ${
            selectedCategory === "chocolates"
              ? "bg-orange-700 text-white hover:bg-orange-900 "
              : "bg-gray-200 border-2 border-transparent text-black hover:border-2 hover:border-orange-700"
          }`}
          onClick={() => setSelectedCategory("chocolates")}
        >
          Chocolates
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded ${
            selectedCategory === "boxes"
              ? "bg-orange-700 text-white hover:bg-orange-900 "
              : "bg-gray-200 border-2 border-transparent text-black hover:border-2 hover:border-orange-700"
          }`}
          onClick={() => setSelectedCategory("boxes")}
        >
          Boxes
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded ${
            selectedCategory === "baskets"
              ? "bg-orange-700 text-white hover:bg-orange-900 "
              : "bg-gray-200 border-2 border-transparent text-black hover:border-2 hover:border-orange-700"
          }`}
          onClick={() => setSelectedCategory("baskets")}
        >
          Baskets
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded ${
            selectedCategory === "bouquets"
              ? "bg-orange-700 text-white hover:bg-orange-900 "
              : "bg-gray-200 border-2 border-transparent text-black hover:border-2 hover:border-orange-700"
          }`}
          onClick={() => setSelectedCategory("bouquets")}
        >
          Bouquets
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded ${
            selectedCategory === "cakes"
              ? "bg-orange-700 text-white hover:bg-orange-900 "
              : "bg-gray-200 border-2 border-transparent text-black hover:border-2 hover:border-orange-700"
          }`}
          onClick={() => setSelectedCategory("cakes")}
        >
          Cakes
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="c-div border p-4 rounded shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-white">
              Price: <span className="text-orange-700">${product.price}</span>
            </p>
            <div className="flex justify-between flex-col sm:flex-row gap-2 lg:gap-0 sm:gap-0 lg:flex-row md:flex-col mt-4 md:gap-2">
              <div className="bg-orange-700 text-white px-3 py-1 rounded flex flex-row gap-1">
                <FaShoppingCart className="pt-2 text-2xl" />
                {/* Pass the product to the addToCart function */}
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
              <Link
                href={`/products/${product.id}`}
                className="text-orange-700 border-2 border-white hover:bg-orange-700 hover:border-orange-700 hover:text-white p-2 rounded-lg"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="fixed top-4 right-4 bg-orange-700 text-white p-4 rounded-lg shadow-md">
          {popupMessage}
        </div>
      )}
      <hr className="mt-10"/>
    </div>
  );
};

export default CategorySection;