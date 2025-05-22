import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './student/dashboard/dashboard';
import Login from './student/auth/login/login';
import Attendance from './student/Attendance';
import Medical from './student/Medical';
import LecturerDashboard from './lecturer/dashboard/dashboard';



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/student-login" element={<Login />} />
          <Route path="/student-dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance/>} />
          <Route path="/medical-report" element={<Medical />} />
          <Route path="/exam-eligibility" element={<Attendance />} />
          <Route path="/lecturer-dashboard" element={<LecturerDashboard/>} />
          

        </Routes>
    </BrowserRouter>
  );
}

export default App;

