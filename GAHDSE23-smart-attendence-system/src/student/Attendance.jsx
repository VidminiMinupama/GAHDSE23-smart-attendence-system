import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const modules = ["SENG1013 - OOP", "SENG1024 - DBMS", "SENG1032 - Web"];

const attendanceData = {
  "SENG1013 - OOP": [
    { date: "2025-05-15", status: "Present" },
    { date: "2025-05-16", status: "Absent" },
  ],
  "SENG1024 - DBMS": [
    { date: "2025-05-17", status: "Present" },
    { date: "2025-05-18", status: "Present" },
  ],
  "SENG1032 - Web": [
    { date: "2025-05-19", status: "Absent" },
    { date: "2025-05-20", status: "Present" },
  ],
};

const Attendance = () => {
  const [selectedModule, setSelectedModule] = useState("");
  const navigate = useNavigate();

  const handleModuleChange = (e) => {
    setSelectedModule(e.target.value);
  };

  const selectedAttendance = attendanceData[selectedModule] || [];

  // Calculate attendance percentage
  const totalSessions = selectedAttendance.length;
  const presentCount = selectedAttendance.filter(
    (entry) => entry.status === "Present"
  ).length;
  const attendancePercentage =
    totalSessions > 0 ? ((presentCount / totalSessions) * 100).toFixed(2) : 0;

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-4 flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium"
      >
        <FaArrowLeft />
        Back
      </button>

      <h2 className="text-2xl font-semibold mb-4">Attendance Record</h2>

      <select
        onChange={handleModuleChange}
        value={selectedModule}
        className="mb-6 px-4 py-2 border rounded-md text-lg"
      >
        <option value="">Select a Module</option>
        {modules.map((mod, index) => (
          <option key={index} value={mod}>
            {mod}
          </option>
        ))}
      </select>

      {selectedModule ? (
        <>
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {selectedAttendance.map((entry, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{entry.date}</td>
                  <td
                    className={`px-4 py-2 border ${
                      entry.status === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {entry.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Attendance Percentage */}
          <p className="mt-4 text-lg font-medium">
            Attendance Percentage:{" "}
            <span className="text-blue-600">{attendancePercentage}%</span>
          </p>
        </>
      ) : (
        <p className="text-gray-500 mt-4">
          Please select a module to view attendance.
        </p>
      )}
    </div>
  );
};

export default Attendance;
