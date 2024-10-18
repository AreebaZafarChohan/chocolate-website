"use client";
import React from "react";
import Image from "next/image";
import { SpecialityItemProps } from "@/types/componentTypes";
import Link from "next/link";

const SpecialityItem: React.FC<SpecialityItemProps> = ({
  name,
  description,
  image,
}) => {

  return (
    <div className="c-div bg-gray-300 flex flex-col items-center rounded-lg p-4 w-full h-96">
      {/* Chocolate Image */}
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="c-image rounded-lg"
      />

      {/* Chocolate Name */}
      <h2 className="text-orange-900 text-xl font-bold mt-4">{name}</h2>

      {/* Chocolate Description */}
      <p className="text-orange-950 mt-2 text-center">{description}</p>

      {/* Buy Now Button */}
      <Link
      href="/products"
        className="mt-4 bg-orange-800 text-white py-2 px-4 rounded hover:bg-orange-900 transition"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default SpecialityItem;
