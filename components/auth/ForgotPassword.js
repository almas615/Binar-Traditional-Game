import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Email is required');
    } else {
      const res = await axios.put('http://localhost:4000/api/forgotPassword', {
        email,
      });
      setEmail('');
      toast.success('Please check your email!');
    }
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg forgot" onSubmit={sendEmail}>
            <h1 className="mb-3" style={{ textAlign: 'center' }}>
              Forgot Password
            </h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="text"
                id="email_field"
                className="form-control"
                value={email}
                placeholder="Enter an email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              style={{ marginBottom: '10px' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
