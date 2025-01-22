import React, { useState } from 'react';
import { Calendar, User, HeadphonesIcon } from 'lucide-react';
import logo from "@/assets/logo.png"

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6">Be the first to know about our latest updates, exclusive offers, and more.</p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-transparent border border-gray-600 rounded text-white"
            />
            <button type="submit" className="bg-green-500 px-6 py-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div>
            <img src={logo.src} alt="KKR Logo" className="mb-6" />
            <p className="mb-4">Future is Here !</p>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Events
            </h3>
            <ul className="space-y-2">
              <li>Internships</li>
              <li>Workshops <span className="bg-blue-500 text-xs px-2 py-1 rounded">New</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <User className="w-5 h-5" /> About
            </h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Vision and Mission</li>
              <li>Key Values</li>
              <li>Team</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HeadphonesIcon className="w-5 h-5" /> Support
            </h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Community</li>
              <li>ROS</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-400">All Rights Reserved @Karthikesh Robotics Private Limited</p>
          <button className="flex items-center gap-2 text-gray-400">
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;