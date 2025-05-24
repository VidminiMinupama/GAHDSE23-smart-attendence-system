import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Banner Section */}
      <div className="banner">
        <img
          src="/images/Home1.jpg" // Replace with the correct path to your banner image
          alt="Office Scene"
          className="banner-image"
        />
        <h1 className="banner-title">Welcome to Smart Attendance System</h1>
        <p className="banner-subtitle">Efficient. Smart. Reliable.</p>
      </div>

      {/* Icon Section */}
      <div className="icon-section">
        <Link to="/addbatches">
  <div className="icon-box">
    <img src="/images/Addbatches.jpg" alt="Add Batches" className="icon-image" />
    <p>Add Batches</p>
  </div>
</Link>
        <Link to="/schedulemodules">
  <div className="icon-box">
    <img src="/images/ScheduleModule.jpg" alt="Schedule Modules" className="icon-image" />
    <p>Schedule Modules</p>
  </div>
</Link>

        <Link to="/managemodules">
  <div className="icon-box">
    <img src="/images/ManageModules.jpg" alt="Manage Modules" className="icon-image" />
    <p>Manage Modules</p>
  </div>
</Link>

<Link to="/exam-eligibility">
        <div className="icon-box">
          <img src="/images/ExamEligibility.jpg" alt="Exam Calculator" className="icon-image" />
          <p>Exam Eligibility Calculator</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;