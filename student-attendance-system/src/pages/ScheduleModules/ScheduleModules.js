import React, { useState } from 'react';
import './ScheduleModules.css';

function ScheduleModules() {
  const [schedule, setSchedule] = useState({
    moduleName: '',
    instructor: '',
    day: '',
    startTime: '',
    endTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Scheduled Module:', schedule);
    alert('Module scheduled successfully!');
    // Here you would send the schedule to your backend or database
  };

  return (
    <div className="schedule-modules-page">
      <h1>Schedule Module</h1>
      <form className="schedule-modules-form" onSubmit={handleSubmit}>
        <label>
          Module Name:
          <input
            type="text"
            name="moduleName"
            value={schedule.moduleName}
            onChange={handleChange}
            placeholder="Enter Module Name"
            required
          />
        </label>
        <label>
          Instructor:
          <input
            type="text"
            name="instructor"
            value={schedule.instructor}
            onChange={handleChange}
            placeholder="Enter Instructor Name"
            required
          />
        </label>
        <label>
          Day:
          <select
            name="day"
            value={schedule.day}
            onChange={handleChange}
            required
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </label>
        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={schedule.startTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            name="endTime"
            value={schedule.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Schedule Module</button>
      </form>
    </div>
  );
}

export default ScheduleModules;
