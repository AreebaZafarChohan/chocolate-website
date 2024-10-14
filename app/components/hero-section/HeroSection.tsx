import React from 'react';
import ImageSlider from '../image-slider/ImageSlider';
import ScrollingInfinite from '../scrolling-infinite/ScrollingInfinite';
import ScrollWording from '../scroll-wording/ScrollWording';
import BeanToBar from '../bean-to-bar/BeanToBar';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='relative bg-transparent'>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,224L7.3,224C14.5,224,29,224,44,197.3C58.2,171,73,117,87,101.3C101.8,85,116,107,131,144C145.5,181,160,235,175,250.7C189.1,267,204,245,218,208C232.7,171,247,117,262,112C276.4,107,291,149,305,181.3C320,213,335,235,349,240C363.6,245,378,235,393,234.7C407.3,235,422,245,436,208C450.9,171,465,85,480,53.3C494.5,21,509,43,524,90.7C538.2,139,553,213,567,218.7C581.8,224,596,160,611,138.7C625.5,117,640,139,655,170.7C669.1,203,684,245,698,272C712.7,299,727,309,742,272C756.4,235,771,149,785,106.7C800,64,815,64,829,74.7C843.6,85,858,107,873,101.3C887.3,96,902,64,916,74.7C930.9,85,945,139,960,160C974.5,181,989,171,1004,192C1018.2,213,1033,267,1047,288C1061.8,309,1076,299,1091,288C1105.5,277,1120,267,1135,245.3C1149.1,224,1164,192,1178,197.3C1192.7,203,1207,245,1222,245.3C1236.4,245,1251,203,1265,192C1280,181,1295,203,1309,224C1323.6,245,1338,267,1353,261.3C1367.3,256,1382,224,1396,197.3C1410.9,171,1425,149,1433,138.7L1440,128L1440,320L1432.7,320C1425.5,320,1411,320,1396,320C1381.8,320,1367,320,1353,320C1338.2,320,1324,320,1309,320C1294.5,320,1280,320,1265,320C1250.9,320,1236,320,1222,320C1207.3,320,1193,320,1178,320C1163.6,320,1149,320,1135,320C1120,320,1105,320,1091,320C1076.4,320,1062,320,1047,320C1032.7,320,1018,320,1004,320C989.1,320,975,320,960,320C945.5,320,931,320,916,320C901.8,320,887,320,873,320C858.2,320,844,320,829,320C814.5,320,800,320,785,320C770.9,320,756,320,742,320C727.3,320,713,320,698,320C683.6,320,669,320,655,320C640,320,625,320,611,320C596.4,320,582,320,567,320C552.7,320,538,320,524,320C509.1,320,495,320,480,320C465.5,320,451,320,436,320C421.8,320,407,320,393,320C378.2,320,364,320,349,320C334.5,320,320,320,305,320C290.9,320,276,320,262,320C247.3,320,233,320,218,320C203.6,320,189,320,175,320C160,320,145,320,131,320C116.4,320,102,320,87,320C72.7,320,58,320,44,320C29.1,320,15,320,7,320L0,320Z"></path>
      </svg>

      {/* HeroSection */}
      <div className='hero-section flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-4'>
      
        {/* Left side */}
        <div className='description w-full md:w-[50%] text-center md:text-left mb-6 md:mb-0'>
          <h1 className='sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4'>
            Welcome to Choco Bliss!
          </h1>
          <p className='text-lg md:text-xl font-bold'>
            Indulge in the finest selection of chocolates and exclusive gift boxes.
            Perfect for every occasion. Discover our range of chocolate baskets, bouquets,
            and more. Crafted with love for every chocolate lover.
          </p>
          <button className='text-white bg-orange-700 rounded-lg mt-4 p-3 font-bold hover:bg-orange-900'><Link href="/category">Shop Now</Link></button>
        </div>

        {/* Right Side */}
        <div className='relative w-full md:w-[50%] ml-0 md:ml-12 p-4'>
          <ImageSlider />
        </div>
      </div>

      {/* Scroll sections */}
      <div className='py-4'>
        <ScrollWording />
        <ScrollingInfinite />
      </div>
      
      {/* Bean to Bar Section */}
      <div>
        <BeanToBar />
      </div>
    </div>
  );
};

export default HeroSection;