import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Info</h2>
      <p className="text-gray-600 mb-4">Email: mudassaramin93@gmail.com</p>
      <p className="text-gray-600 mb-4">Phone: +47-46251080</p>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://linkedin.com/in/mudassar-amin" target="_blank" className="text-blue-600">LinkedIn</a>
        <a href="https://github.com/mudassar-amin" target="_blank" className="text-gray-800">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
