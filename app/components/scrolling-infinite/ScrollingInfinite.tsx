import React from 'react';
import Image from 'next/image';

const images = [
    "/images/loop1.jpg",
    "/images/loop2.jpg",
    "/images/loop3.jpg",
    "/images/loop4.jpg",
    "/images/loop5.jpg",
    "/images/loop6.jpg",
    "/images/loop7.jpg",
    "/images/loop8.jpg",
    "/images/loop9.jpg",
    "/images/loop10.jpg",
    "/images/loop11.jpg",
    "/images/loop12.jpg",
    "/images/loop13.jpg",
    "/images/loop14.jpg",
    "/images/loop15.jpg",
];

const ScrollingInfinite = () => {
  return (
    <div className='wrapper flex items-center justify-center'>
    { images.map((src, index) => (
        <div key={index} className={`item item${index + 1}`}>
            <Image 
            src={src}
            alt={`Image ${index + 1}`}
            width={120}
            height={150}
            className='object-cover rounded-lg p-1'
            />
        </div>
    )) }
    </div>
  );
};

export default ScrollingInfinite;
