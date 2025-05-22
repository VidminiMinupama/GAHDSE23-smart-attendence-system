import React, { useState } from "react";

const Medical = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Simulate API call
      setTimeout(() => {
        setMessage("Medical report submitted successfully.");
        setFile(null);
      }, 1000);
    } else {
      setMessage("Please select a file before submitting.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Submit Medical Report</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default Medical;