import React from 'react';

const Card = ({ title, imageUrl, onClick }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-64 h-64 object-contain mb-4"
      />
      <button 
        onClick={onClick}
        className="mt-4 bg-[#110877] text-white border-none py-4 px-6 text-lg rounded-xl cursor-pointer hover:bg-[#2b1f67] transition duration-300 font-medium w-full"
      >
        {title}
      </button>
    </div>
  );
};

export default Card;