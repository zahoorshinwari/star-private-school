import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      {/* Introduction Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Contact Us</h1>
        <p className="text-gray-700">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the form below.
        </p>
      </div>

      {/* Contact Form and Information */}
      <div className="flex flex-wrap justify-between">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 mb-4 p-6 border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input className="border rounded w-full p-3 focus:outline-none focus:ring focus:ring-blue-300" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input className="border rounded w-full p-3 focus:outline-none focus:ring focus:ring-blue-300" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea className="border rounded w-full p-3 focus:outline-none focus:ring focus:ring-blue-300" id="message" name="message" rows="4" required></textarea>
            </div>
            <button className="bg-blue-600 text-white p-3 rounded-lg transition duration-200 hover:bg-blue-700" type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2 mb-4 p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Contact Information</h2>
          <p className="mb-2"><strong>Email:</strong> info@example.com</p>
          <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">Our Location</h2>
        <iframe
          title="Google Map"
          className="w-full h-60 border-2 border-gray-200 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090044!2d144.9537353153144!3d-37.816279979751004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f10e2e7%3A0x5045675218ceed40!2sYour%20Location!5e0!3m2!1sen!2sus!4v1634094554857!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
