import React, { useState } from "react";
import "./JobForm.css";

const JobForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    collegeName: "",
    course: "",
    degree: "",
    duration: "",
    technicalSkills: [],
    applyingFor: "",
    preferredLocation: "",
    expectedSalary: "",
    whyHire: "",
  };

  const [formData, setFormData] = useState(initialState);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox (technical skills)
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        technicalSkills: [...formData.technicalSkills, value],
      });
    } else {
      setFormData({
        ...formData,
        technicalSkills: formData.technicalSkills.filter(
          (skill) => skill !== value
        ),
      });
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  // Handle reset
  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>

      <form onSubmit={handleSubmit}>
        {/* First + Last Name */}
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age + Gender */}
        <div className="row">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* College + Course */}
        <div className="row">
          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        {/* Degree + Duration */}
        <div className="row">
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>

        {/* Technical Skills */}
        <div className="checkbox-group">
          <label>Technical Skills:</label>

          <div className="checkbox-item">
            <input
              type="checkbox"
              value="Java"
              onChange={handleCheckbox}
              checked={formData.technicalSkills.includes("Java")}
            />
            <label>Java</label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              value="Python"
              onChange={handleCheckbox}
              checked={formData.technicalSkills.includes("Python")}
            />
            <label>Python</label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              value="React"
              onChange={handleCheckbox}
              checked={formData.technicalSkills.includes("React")}
            />
            <label>React</label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              value="SQL"
              onChange={handleCheckbox}
              checked={formData.technicalSkills.includes("SQL")}
            />
            <label>SQL</label>
          </div>
        </div>

        {/* Applying For */}
        <select
          name="applyingFor"
          value={formData.applyingFor}
          onChange={handleChange}
          required
        >
          <option value="">Applying For</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>

        {/* Preferred Location */}
        <select
          name="preferredLocation"
          value={formData.preferredLocation}
          onChange={handleChange}
          required
        >
          <option value="">Preferred Location</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>

        {/* Expected Salary */}
        <input
          type="number"
          name="expectedSalary"
          placeholder="Expected Salary"
          value={formData.expectedSalary}
          onChange={handleChange}
          required
        />

        {/* Why Hire You */}
        <textarea
          name="whyHire"
          placeholder="Why should we hire you?"
          value={formData.whyHire}
          onChange={handleChange}
          rows="4"
          required
        />

        {/* Buttons */}
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;