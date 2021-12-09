import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ButtonLoader from '../../components/layout/ButtonLoader';

import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };

    setLoading(true);

    try {
      const result = await axios.post('http://localhost:4000/api/login', data);
      router.push('/');
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        toast.error(error.response.data.message);
      }, 1000);
    }
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="text"
                id="email_field"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className="float-left mb-4">
              Forgot Password?
            </a>
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              {loading ? <ButtonLoader /> : 'LOGIN'}
            </button>
            <span className="float-left mt-2">
              Don't have an account?
              <a href="#"> Sign Up</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
