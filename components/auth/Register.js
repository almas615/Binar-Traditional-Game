import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import ButtonLoader from '../layout/ButtonLoader';

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
  });

  const { first_name, last_name, email, username, password } = user;

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      first_name,
      last_name,
      email,
      username,
      password,
    };

    setLoading(true);

    try {
      const result = await axios.post(
        'http://localhost:4000/api/register',
        userData
      );
      router.push('/login');
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        toast.error(error.response.data.error);
      }, 1000);
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg reg" onSubmit={submitHandler}>
            <h1
              className="mb-3"
              style={{ textAlign: 'center', marginTop: '-0.6rem' }}
            >
              SIGN UP
            </h1>

            <div className="form-group" style={{ display: 'inline' }}>
              <label htmlFor="first_name_field">First Name</label>
              <input
                type="text"
                id="first_name_field"
                className="form-control"
                name="first_name"
                value={first_name}
                onChange={onChange}
              />
              <label htmlFor="last_name_field">Last Name</label>
              <input
                type="text"
                id="last_name_field"
                className="form-control"
                name="last_name"
                value={last_name}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="text"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username_field">Username</label>
              <input
                type="text"
                id="username_field"
                className="form-control"
                name="username"
                value={username}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              {loading ? <ButtonLoader /> : 'Sign up'}
            </button>
            <span className="float-left mt-2">
              Don't have an account?
              <Link href="/login" class="float-right mt-3">
                Sign in
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
