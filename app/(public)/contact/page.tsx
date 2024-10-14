import React from 'react'
import ContactSection from '../../components/contactSection/ContactSection';


const Contact = () => {
  return (
    <div style={{backgroundImage: `url(/images/bg5.jpg)`,
      backgroundSize: "cover",
    }} className='p-0 mb-6 lg:m-8 lg:p-2 md:m-8 md:p-2 rounded-none md:rounded-2xl lg:rounded-2xl h-[35.5rem] md:h-[42rem] lg:h-[42rem]'>
      <ContactSection />
    </div>
  );
};

export default Contact;
