// AboutPage.jsx
import React from 'react';

function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto space-y-12">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At ShoPpP, we are passionate about bringing you the best products online. We believe in quality, service, and making your shopping experience seamless and enjoyable.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h3>
          <p className="text-lg text-gray-600">
            ShoPpP started with a simple vision: to create an online marketplace where you could find high-quality products that enhance your daily life. Our team carefully curates each item to ensure that you only get the best of the best.
            We value simplicity, innovation, and reliability, ensuring that our customers enjoy a smooth, secure, and efficient shopping experience.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center space-y-8">
          <h3 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center space-y-4 max-w-xs">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-thumbs-up fa-lg"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Quality Products</h4>
              <p className="text-gray-600 text-center">
                We provide products that are of the highest quality to ensure satisfaction.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 max-w-xs">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-truck fa-lg"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Fast Delivery</h4>
              <p className="text-gray-600 text-center">
                We ensure fast and reliable delivery for all your orders so you can get your items quickly.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 max-w-xs">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-headset fa-lg"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">24/7 Support</h4>
              <p className="text-gray-600 text-center">
                Our support team is available around the clock to help you with any questions or issues.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h3>
          <div className="flex justify-center gap-8">
            <div className="max-w-xs">
              <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1741121477~exp=1741125077~hmac=9ef8739195f6bf670de911be4fb9cbe0e9dd642fb9e3c5caf09af62a196a4a2c&w=900" alt="Team Member" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-2xl" />
              <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="max-w-xs">
              <img  src="https://imgs.search.brave.com/1gh1gNgNPGWMOTr-RReQqPijbsuskT-KLX0xifciMz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/ZWxmaWUtcG9ydHJh/aXQtdmlkZW9jYWxs/XzIzLTIxNDkxODYx/MjIuanBnP3NlbXQ9/YWlzX2h5YnJpZA" alt="Team Member" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-2xl" />
              <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">Head of Operations</p>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="bg-teal-500 text-white py-12 px-6 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-lg mb-6">Have any questions or need assistance? Reach out to us below!</p>
          <p className="text-lg">Email: <a href="mailto:support@shopp.com" className="text-yellow-300 hover:text-yellow-400">support@shopp.com</a></p>
          <p className="text-lg mt-2">Phone: <span className="text-yellow-300">(123) 456-7890</span></p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
