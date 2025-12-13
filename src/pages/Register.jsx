import React, { useState } from "react";

function Register() {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setData({
      name: form.name.value,
      contact: form.contact.value,
      age: form.age.value,
      gender: form.gender.value,
      married: form.married.value,
      email: form.email.value,
      address: form.address.value,
      occupation: form.occupation.value,
    });
  };

  return (
    <div className="register-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" required />

        <label>Contact Number:</label>
        <input type="text" name="contact" required />

        <label>Age:</label>
        <input type="number" name="age" required />

        <label>Gender:</label>
        <select name="gender">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Married?</label>
        <select name="married">
          <option>Yes</option>
          <option>No</option>
        </select>

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Address:</label>
        <input type="text" name="address" />

        <label>Occupation:</label>
        <input type="text" name="occupation" />

        <button type="submit">Submit</button>
      </form>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Register;
