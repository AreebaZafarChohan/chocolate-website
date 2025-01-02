"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { ProductDetailsType } from "@/types/componentTypes";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProductDetails = () => {
  const params = useParams();
  const id = params.product;
  const productId = parseInt(id as string, 10);

  const [details, setDetails] = useState<ProductDetailsType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
      const fetchProductDetails = async () => {
        try {
          const product = await client.fetch(
            `*[_type == "products"]{id,name,image,"category":category->category,price,description, images[]{asset->{url}}
            }`
          );

          const productDetail = product.find(
                   (product: ProductDetailsType) =>
                    String(product.id) === String(productId)
                 );

          setDetails(productDetail);

        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };
  
      fetchProductDetails();
    }, [productId]);

    useEffect(() => {
      if (details?.image) {
        setHoveredImage(urlFor(details.image).url()); 
      }
    }, [details]);
  
    const handleHoverImage = (imageUrl: string) => {
      setHoveredImage(imageUrl); 
    };
  

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    if (details) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
      const productIndex = cart.findIndex((item: ProductDetailsType) => item.id === details.id);
  
      if (productIndex !== -1) {
        cart[productIndex].quantity += quantity;
      } else {
        const newItem = { ...details, quantity };
        cart.push(newItem);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
  
      setShowPopup(true);
  
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  if (!details) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container w-full p-4 lg:mx-20 md:mx-20 bg-transparent rounded-xl shadow-md flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 mb-20 ">
      <div className="product-left  lg:w-[50%] my-8">
      <div className="img-container border-2 p-4 rounded border-[rgb(255,145,163)]">
          {hoveredImage && (
            <Image
              src={hoveredImage}
              alt={details.name}
              width={200}
              height={400}
              className="w-full h-80 object-contain"
            />
          )}
        </div>

        {/* Thumbnail Images */}
        <div className="hover-container">
          {details.images && details.images.length > 0 ? (
            details.images.map((image, index) => (
              <div
                key={index}
                onMouseOver={() => handleHoverImage(urlFor(image).url())}
                className="cursor-pointer border rounded-md p-1 hover:border-orange-700"
              >
                <Image
                  src={urlFor(image).url()}
                  alt={`Product Image ${index + 1}`}
                  height={100}
                  width={100}
                  className="image h-28 w-40 object-cover"
                />
              </div>
            ))
          ) : (
            <div>No additional images available</div>
          )}
        </div>
      </div>
      <div className="mx-2 md:ml-10 lg:w-[40%] mb-8">
        <h1 className="text-4xl text-white font-bold mb-6">{details.name}</h1>
        <p className="text-lg font-medium mb-2">Price: ${details.price}</p>
        <div className="flex flex-row gap-1 text-yellow-600 mb-6">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-lg text-white mb-6">{details.description}</p>

        <div className="flex items-center my-4 gap-4">
          <span className="text-xl">Quantity: {quantity}</span>
          <button
            onClick={decreaseQuantity}
            className="ml-6 px-2.5 rounded-full bg-orange-700 text-lg"
          >
            -
          </button>
          <button
            onClick={increaseQuantity}
            className="px-2 text-lg rounded-full  bg-orange-700 "
          >
            +
          </button>
        </div>

        <div className="flex flex-row gap-8 my-8">
          <Link
            href="/products"
            className="text-orange-700 border-2 border-white hover:bg-orange-700 hover:border-orange-700 hover:text-white p-2 rounded-lg"
          >
            See Less
          </Link>

          <div className="bg-orange-700 text-white px-3 py-1 rounded flex flex-row gap-1">
            <FaShoppingCart className="pt-2 text-2xl" />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-4 right-4 bg-orange-700 text-white p-4 rounded-lg shadow-md">
          {details.name} added to cart successfully ✅
        </div>
      )}
    </div>
  );
};

export default ProductDetails;