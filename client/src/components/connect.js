// import React from 'react';
// import './connect.css';
// import connectImage from '../screens/contact-img.svg';
// const GetInTouch = () => {
//   return (
//     <div className="background-container">
//       <div className="image-section">
//         <img src={connectImage} alt="connectimage" />
//       </div>
//       <div className="contact-container">
//         <h1>Get In Touch</h1>
//         <form>
//           <div className="input-row">
//             <input type="text" className="input input-half" placeholder="First Name" required />
//             <input type="text" className="input input-half" placeholder="Last Name" required />
//           </div>
//           <input type="email" className="input" placeholder="Email" required />
//           <input type="tel" className="input" placeholder="Phone Number" required />
//           <textarea className="textarea" placeholder="Your Message" required></textarea>
//           <button type="submit" className="send-button">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default GetInTouch;

import React, { useState } from 'react';
import './connect.css';
import connectImage from '../screens/contact-img.svg';
import axios from 'axios';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/connect', formData);
      console.log('Email sent successfully!', response.data);
      alert('Message sent successfully');
    } catch (error) {
      console.error('Failed to send email.', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="background-container">
      <div className="image-section">
        <img src={connectImage} alt="connectimage" />
      </div>
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              className="input input-half"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="input input-half"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            className="input"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            className="textarea"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
