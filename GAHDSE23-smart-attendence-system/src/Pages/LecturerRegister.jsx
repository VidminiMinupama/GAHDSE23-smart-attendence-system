import React from 'react';
import "./LecturerRegister.css";

const LecturerRegister = () => {
  return (
    <div className="d-flex vh-100">
      {/* Left side with background image */}
      <div className="col-md-6 p-0 position-relative">
        <img
          src="/images/image.png"
          alt="Lecturer"
          className="w-100 h-100 object-fit-cover"
        />
        <div className="logo-overlay position-absolute bottom-0 start-0 p-3">
          <img src="/images/LGG-removebg-preview.png" alt="NIBM Logo" height="60" />
        </div>
      </div>

      {/* Right side with form */}
      <div className="col-md-6 custom-form-bg text-white d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-4">Lecturer Register</h2>
        <form className="w-75">
          <div className="mb-3">
            <input type="text" className="form-control custom-input" placeholder="Full Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control custom-input" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control custom-input" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control custom-input" placeholder="Phone No" />
          </div>
          <div className="mb-4">
            <input type="text" className="form-control custom-input" placeholder="Address" />
          </div>
          <button className="btn btn-gradient w-100 py-2">Save</button>
        </form>
      </div>
    </div>
  );
};

export default LecturerRegister;
