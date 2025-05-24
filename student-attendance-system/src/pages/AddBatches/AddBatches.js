
import React, { useState } from 'react';
import './AddBatches.css';

function AddBatches() {
  const [formData, setFormData] = useState({
    branch: '',
    studyArea: '',
    batchType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Batch Details:', formData);
    alert('Batch added successfully!');
    // Add logic to send the data to a backend/database
  };

  return (
    <div className="add-batches-page">
      <h1>Add Batches</h1>
      <form className="add-batches-form" onSubmit={handleSubmit}>
        <label>
          Branch:
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleInputChange}
            placeholder="Enter Branch Name"
            required
          />
        </label>
        <label>
          Study Area:
          <input
            type="text"
            name="studyArea"
            value={formData.studyArea}
            onChange={handleInputChange}
            placeholder="Enter Study Area"
            required
          />
        </label>
        <label>
          Batch Type:
          <select
            name="batchType"
            value={formData.batchType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Batch Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
          </select>
        </label>
        <button type="submit">Add Batch</button>
      </form>
    </div>
  );
}

export default AddBatches;