import React, { useState } from 'react';
import './SendTicket.css';

function SendTicket() {
  const [formData, setFormData] = useState({
    name: '',
    regno: '',
    email: '',
    confirmedEvents: '',
    tranID: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'https://esummit-registration-backend.onrender.com/sendmail';
      const params = new URLSearchParams(formData);

      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors'
      });

      alert('Tickets sent!');
      setFormData({
        name: '',
        regno: '',
        email: '',
        confirmedEvents: '',
        tranID: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container">
      <h2>Send Ticket</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input" />
        </label>
        <br />
        <label className="label">
          Registration No:
          <input type="text" name="regno" value={formData.regno} onChange={handleChange} className="input" />
        </label>
        <br />
        <label className="label">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" />
        </label>
        <br />
        <label className="label">
          Confirmed Events:
          <select name="confirmedEvents" value={formData.confirmedEvents} onChange={handleChange} className="input">
            <option value="">Select an event</option>
            <option value="IPL Auction">IPL Auction</option>
            <option value="Product Design Competition">Product Design Competition</option>
            <option value="Paper Trading">Paper Trading</option>
            <option value="Speaker Session">Speaker Session</option>
            <option value="Networking Arena">Networking Arena</option>
            <option value="Case Study Competition">Case Study Competition</option>
          </select>
        </label>
        <br />
        <label className="label">
          Transaction ID:
          <input type="text" name="tranID" value={formData.tranID} onChange={handleChange} className="input" />
        </label>
        <br />
        <button type="submit" className="button">Send Ticket</button>
      </form>
    </div>
  );
}

export default SendTicket;
