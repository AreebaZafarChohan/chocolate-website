"use client";
import { useState, useEffect } from "react";
import NavbarLi from "../navbar-li/NavbarLi";
import { GiChocolateBar } from "react-icons/gi";
import { FaUserAlt, FaUserPlus, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // State for cart count
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleUserAccountClick = () => {
    router.push("/user_account");
  };

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const count = cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);
      setCartCount(count);
    };

    // Call the function on mount
    updateCartCount();

    // Add an event listener for storage to update the count dynamically
    window.addEventListener("storage", updateCartCount);

    // Cleanup event listener
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <header>
      <div className="mb-16">
        {/* Top section */}
        <div className="flex justify-between items-center mb-8 mt-2 ml-4 p-4 pt-2">
          <div className="flex justify-start space-x-1 items-center">
            <GiChocolateBar className="text-orange-700 text-4xl" />
            <div className="text-3xl font-bold font-mono text-white">
              Choco Bliss <span className="text-white text-xl">(Since-1995)</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 mr-4 items-center">
            <div className="relative group">
              <FaUserAlt className="text-lg cursor-pointer text-white" />
              <span className="icon-tooltip group-hover:opacity-100">Login</span>
            </div>
            <div className="relative group">
              <FaUserPlus className="text-lg cursor-pointer text-white" />
              <span className="icon-tooltip group-hover:opacity-100">Sign up</span>
            </div>
            <div className="relative group">
              <FaShoppingCart
                className="text-lg cursor-pointer text-white"
                onClick={handleUserAccountClick}
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              {cartCount === 0 && (
                <span className="absolute -top-2 -right-3 bg-gray-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              )}
            </div>
          </div>

          {/* Hamburger icon for mobile menu */}
          <div className="md:hidden flex items-center mr-4">
            {isMobileMenuOpen ? (
              <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
            ) : (
              <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
            )}
          </div>
        </div>

        {/* Navbar Section */}
        <nav
          className={`navbar bg-white w-full h-full ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex justify-center items-center px-0 py-2`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center items-center">
            <NavbarLi name="Home" href="/" />
            <NavbarLi name="About" href="/about" />
            <NavbarLi name="Products" href="/products" />
            <NavbarLi name="Contact" href="/contact" />
          </ul>
        </nav>

        {/* Mobile Icons Section */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex justify-around items-center mt-4">
            <div className="relative group">
              <FaUserAlt className="text-lg cursor-pointer text-white" />
              <span className="icon-tooltip group-hover:opacity-100">Login</span>
            </div>
            <div className="relative group">
              <FaUserPlus className="text-lg cursor-pointer text-white" />
              <span className="icon-tooltip group-hover:opacity-100">Sign up</span>
            </div>
            <div className="relative group">
              <FaShoppingCart
                className="text-lg cursor-pointer text-white"
                onClick={handleUserAccountClick}
              />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-3 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              {cartCount === 0 && (
                <span className="absolute -top-3 -right-3 bg-gray-500 text-white text-xs font-bold rounded-full h-4 w-3 flex items-center justify-center">
                  0
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;