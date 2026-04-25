import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setStudents([...students, formData]);

    // Reset form
    setFormData({
      name: "",
      age: "",
      course: ""
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formData.course}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Student</button>
      </form>

      <h2>Student List</h2>

      {students.map((student, index) => (
        <div key={index} style={{
          border: "1px solid black",
          margin: "10px auto",
          padding: "10px",
          width: "200px"
        }}>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Age:</b> {student.age}</p>
          <p><b>Course:</b> {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default App;