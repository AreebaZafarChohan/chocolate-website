import React from 'react';
import SpecialityItem from '../specialityItem/SpecialityItem';

const OurSpeciality: React.FC = () => {
  const chocolates = [
    {
      name: 'Nuts Chocolate',
      description: 'Rich and creamy chocolate with roasted nuts for an unforgettable crunch.',
      image: '/images/c1.jpg',
    },
    {
      name: 'Kunafa Chocolate',
      description: 'A delightful combination of chocolate and the classic Arabic Kunafa.',
      image: '/images/c2.jpg',
    },
    {
      name: 'Dark Chocolate',
      description: 'Bitter-sweet dark chocolate made from premium cocoa beans.',
      image: '/images/c3.jpg',
    },
    {
      name: 'Sugar-Free Chocolate',
      description: 'Delicious sugar-free chocolate for guilt-free indulgence.',
      image: '/images/c4.jpg',
    },
    {
      name: 'Pistachio Chocolate',
      description: 'Smooth chocolate infused with crunchy pistachios for a unique flavor.',
      image: '/images/c5.jpg',
    },
    {
      name: 'Cashew Chocolate',
      description: 'Creamy milk chocolate filled with roasted cashew nuts for a rich taste.',
      image: '/images/c6.jpg',
    },
  ];

  return (
    <div className="py-16 mb-4 bg-[#411900]">
      {/* Our Speciality Heading */}
      <h1 className="text-orange-800 text-center lg:text-4xl md:text-4xl font-bold text-3xl">Our Speciality</h1>

      <hr className='h-1 w-[35%] lg:w-[25%] md:w-[30%]  text-transparent border-transparent text-center bg-orange-800 mt-4 mb-10 mx-auto'/>

      {/* Flexbox Layout for Chocolates */}
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 ml-6 mr-6">
        {chocolates.map((chocolate, index) => (
          <div key={index} className="speacial p-6">
            <SpecialityItem 
              name={chocolate.name}
              description={chocolate.description}
              image={chocolate.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpeciality;