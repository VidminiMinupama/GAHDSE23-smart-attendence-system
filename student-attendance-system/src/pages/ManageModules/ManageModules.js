import React, { useState } from 'react';
import './ManageModules.css';

function ManageModules() {
  const [modules, setModules] = useState([
    {
      id: 1,
      moduleName: 'Mathematics 101',
      instructor: 'John Doe',
      day: 'Monday',
      startTime: '09:00',
      endTime: '11:00',
    },
    {
      id: 2,
      moduleName: 'Physics Basics',
      instructor: 'Jane Smith',
      day: 'Wednesday',
      startTime: '10:00',
      endTime: '12:00',
    },
  ]);

  const [editingModule, setEditingModule] = useState(null);
  const [filter, setFilter] = useState({ day: '', instructor: '' });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this module?');
    if (confirmDelete) {
      setModules(modules.filter((mod) => mod.id !== id));
    }
  };

  const handleEdit = (mod) => {
    setEditingModule({ ...mod });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingModule((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setModules((prev) =>
      prev.map((mod) => (mod.id === editingModule.id ? editingModule : mod))
    );
    setEditingModule(null);
    alert('Module updated successfully!');
  };

  const filteredModules = modules.filter((mod) => {
    return (
      (!filter.day || mod.day === filter.day) &&
      (!filter.instructor || mod.instructor.toLowerCase().includes(filter.instructor.toLowerCase()))
    );
  });

  return (
    <div className="manage-modules-page">
      <h1>Manage Modules</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Filter by instructor"
          value={filter.instructor}
          onChange={(e) => setFilter({ ...filter, instructor: e.target.value })}
        />
        <select
          value={filter.day}
          onChange={(e) => setFilter({ ...filter, day: e.target.value })}
        >
          <option value="">All Days</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>

      {editingModule && (
        <form className="edit-form" onSubmit={handleUpdate}>
          <h3>Edit Module</h3>
          <input
            type="text"
            name="moduleName"
            value={editingModule.moduleName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="instructor"
            value={editingModule.instructor}
            onChange={handleInputChange}
            required
          />
          <select name="day" value={editingModule.day} onChange={handleInputChange} required>
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <input
            type="time"
            name="startTime"
            value={editingModule.startTime}
            onChange={handleInputChange}
            required
          />
          <input
            type="time"
            name="endTime"
            value={editingModule.endTime}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Update</button>
        </form>
      )}

      {filteredModules.length === 0 ? (
        <p>No modules match your filter.</p>
      ) : (
        <table className="modules-table">
          <thead>
            <tr>
              <th>Module Name</th>
              <th>Instructor</th>
              <th>Day</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredModules.map((mod) => (
              <tr key={mod.id}>
                <td>{mod.moduleName}</td>
                <td>{mod.instructor}</td>
                <td>{mod.day}</td>
                <td>
                  {mod.startTime} - {mod.endTime}
                </td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(mod)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(mod.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageModules;
