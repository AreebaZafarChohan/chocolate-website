import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-8 flex-wrap mb-10">
          <a
            href="https://www.linkedin.com/in/areeba-zafar-973917303/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIJHCvgutQCKAZjoSHjrRig%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:areebazafar715@gmail.com"
            className="text-2xl text-white hover:text-blue-800 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/arenab_bazar?igsh=YmNtamVhNGlhaDY0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-pink-600 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/AreebaZafarChohan/portfolio-next.js.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-black transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Categories and Map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-10">
          
          {/* FAQ Section */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-lg mb-4">FAQ</h2>
            <ul>
              <li><a href="/faq" className="hover:underline hover:text-white transition duration-300">How it works</a></li>
              <li><a href="/shipping" className="hover:underline hover:text-white transition duration-300">Shipping & Returns</a></li>
              <li><a href="/support" className="hover:underline hover:text-white transition duration-300">Customer Support</a></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <ul>
              <li><a href="/categories/chocolates" className="hover:underline hover:text-white transition duration-300">All</a></li>
              <li><a href="/categories/chocolates" className="hover:underline hover:text-white transition duration-300">Baskets</a></li>
              <li><a href="/categories/boxes" className="hover:underline hover:text-white transition duration-300">Boxes</a></li>
              <li><a href="/categories/bouquets" className="hover:underline hover:text-white transition duration-300">Bouquets</a></li>
              <li><a href="/categories/chocolates" className="hover:underline hover:text-white transition duration-300">Chocolates</a></li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-lg mb-4">Links</h2>
            <ul>
              <li><a href="/privacy-policy" className="hover:underline hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:underline hover:text-white transition duration-300">Terms of Service</a></li>
              <li><a href="/contact" className="hover:underline hover:text-white transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Embedded Map */}
          <div className="col-span-full md:col-span-1">
            <h1 className='text- text-white mb-2 font-bold'> LOCATION </h1>
              <iframe
                title="Map of Korangi, Karachi, Pakistan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14477.118319530805!2d67.11287001812949!3d24.83655603877286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fd351aef833%3A0xbd32d00871db9cd8!2sKorangi%2C%20Karachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694432109637!5m2!1sen!2s"
                width="500"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="w-full rounded-lg shadow-lg shadow-orange-900"
              ></iframe>
          </div>

        </div>

        {/* All Rights Reserved */}
        <div className="text-center text-sm text-white">
          © 2024 Areeba Zafar | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;