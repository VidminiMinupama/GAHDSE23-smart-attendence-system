import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/Home';
import AddBatches from './pages/AddBatches/AddBatches';
import ScheduleModules from './pages/ScheduleModules/ScheduleModules';
import ManageModules from './pages/ManageModules/ManageModules';
import ExamEligibilityCalculator from './pages/ExamEligibilityCalculator/ExamEligibilityCalculator';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addbatches" element={<AddBatches />} />
        <Route path="/schedulemodules" element={<ScheduleModules />} />
     <Route path="/managemodules" element={<ManageModules />} />
     <Route path="/exam-eligibility" element={<ExamEligibilityCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
