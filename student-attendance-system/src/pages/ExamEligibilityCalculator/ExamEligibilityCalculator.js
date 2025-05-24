import React, { useState } from 'react';
import './ExamEligibilityCalculator.css';

function ExamEligibilityCalculator() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', module: 'Mathematics 101', attendance: 85 },
    { id: 2, name: 'Bob', module: 'Physics Basics', attendance: 78 },
    { id: 3, name: 'Charlie', module: 'Mathematics 101', attendance: 92 },
    { id: 4, name: 'Diana', module: 'Physics Basics', attendance: 60 },
  ]);

  const isEligible = (attendance) => attendance >= 80;

  return (
    <div className="exam-eligibility-page">
      <h1>Exam Eligibility Calculator</h1>
      <table className="eligibility-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Module</th>
            <th>Attendance (%)</th>
            <th>Eligibility</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.module}</td>
              <td>{student.attendance}%</td>
              <td className={isEligible(student.attendance) ? 'eligible' : 'not-eligible'}>
                {isEligible(student.attendance) ? 'Eligible' : 'Not Eligible'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExamEligibilityCalculator;
