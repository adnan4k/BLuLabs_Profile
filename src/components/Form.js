import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    number: '',
    email: '',
    message: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="contact-info">
      <form onSubmit={handleSubmit} className='info'>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
        />
        
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className='btn-submit'>Send</button>
      </form>
    </div>
  );
};

export default Form;
