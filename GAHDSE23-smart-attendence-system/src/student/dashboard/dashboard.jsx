import React from 'react';
import { FaClipboardList, FaFileMedical, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg';

const StudentDashboard = () => {
  const features = [
    { title: 'View Attendance', icon: <FaClipboardList size={60} className="text-blue-700 mb-4" />, link: '/attendance' },
    { title: 'Submit Medical Report', icon: <FaFileMedical size={60} className="text-green-600 mb-4" />, link: '/medical-report' },
    { title: 'Exam Eligibility', icon: <FaCheckCircle size={60} className="text-yellow-500 mb-4" />, link: '/exam-eligibility' },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100">
      
      {/* Hero Section */}
      <div className="relative">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Welcome to Smart Attendance System</h1>
            <p className="text-lg mt-2">Efficient. Smart. Reliable.</p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {features.map((feature, index) => (
          <Link
            to={feature.link}
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {feature.icon}
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;