import React from 'react';

const Navbar = ({ links = ['Home', 'Profile', 'Service'], onLogout }) => {
  return (
    <div className="w-full bg-[#110877] text-white flex justify-between items-center px-8 py-3 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/logo.jpg" 
          alt="Logo" 
          className="h-10"
        />
      </div>
      
      {/* Navigation Links */}
      <div className="flex space-x-6">
        {links.map((link, index) => (
          <a 
            key={index} 
            href="#" 
            className="text-white no-underline text-lg hover:text-blue-200 transition duration-300"
          >
            {link}
          </a>
        ))}
      </div>
      
      {/* Logout Button */}
      <button 
        onClick={onLogout}
        className="bg-[#2b1f67] text-white border-none py-2 px-4 rounded-lg cursor-pointer hover:bg-[#1a1254] transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;