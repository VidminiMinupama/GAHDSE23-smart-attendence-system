import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"; // Custom CSS file

const AttendanceSystem = () => {
  return (
    <div className="attendance-app w-100">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <div className="container-fluid px-0 d-flex align-items-center justify-content-between">
          {/* Brand */}
          <a className="navbar-brand" href="#">
            <img
              src="/images/LGG-removebg-preview.png"
              alt="NIBM Logo"
              height="40"
            />
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav main-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
            </ul>
          </div>

          {/* Logout button - stays visible */}
          <div className="d-none d-lg-block">
            <button className="btn btn-logout">Logout</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid main-content">
        {/* Background Image with Overlay */}
        <div className="background-container">
          <div className="overlay"></div>
        </div>

        {/* Attendance Options */}
        <div className="container attendance-container">
          <div className="row justify-content-around">
            <div className="col-md-5 attendance-card">
              <div className="card-body text-center">
                <div className="attendance-icon">
                  <img
                    src="/images/attendance_record.png"
                    alt="Attendance Record"
                    className="img-fluid"
                  />
                </div>
                <div className="action-button">
                  <button className="btn btn-primary attendance-btn">
                    Attendance Record
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-5 attendance-card">
              <div className="card-body text-center">
                <div className="attendance-icon">
                  <img
                    src="/images/mark_attendance.png"
                    alt="Mark Attendance"
                    className="img-fluid"
                  />
                </div>
                <div className="action-button">
                  <button className="btn btn-primary attendance-btn">
                    Mark Attendance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                &copy; 2025 NIBM Attendance Management System. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AttendanceSystem;
