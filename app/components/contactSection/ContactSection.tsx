"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // Popup visibility state

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the specific field
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // Handle secure form submission
    console.log(formData);

    // Show the popup
    setShowPopup(true);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-transparent border-2 p-8 rounded-lg items-center">
      <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4 text-orange-950 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-white bg-transparent rounded-md w-full"
          />
          {errors.name && <p className="text-red-500 bg-white w-60 rounded-md p-1 text-xs mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-white bg-transparent rounded-md w-full"
          />
          {errors.email && <p className="text-red-500  bg-white w-60 rounded-md p-1  text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-white">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-white bg-transparent rounded-md w-full"
          />
          {errors.subject && <p className="text-red-500  bg-white/75 w-60 rounded-md p-1  text-xs mt-1">{errors.subject}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 p-2 border border-white bg-transparent rounded-md w-full"
          />
          {errors.message && <p className="text-red-500  bg-white/75 w-64 rounded-md p-1 text-xs mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-orange-950 border-2 border-orange-950 text-white px-4 py-2 shadow-lg rounded-md hover:bg-transparent hover:shadow-orange-950"
        >
          Send Message
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-bold text-orange-950">Thank You!</h3>
            <p className="mt-2 text-sm text-gray-700">
              Your message has been received. We will get back to you shortly.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 bg-orange-950 text-white px-4 py-2 rounded-md hover:bg-orange-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;