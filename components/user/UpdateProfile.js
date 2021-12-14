import React, { useState, useEffect } from 'react';
import axios from 'axios';
import router, { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import ButtonLoader from '../layout/ButtonLoader';
import Loader from '../layout/Loader';

const UpdateProfile = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    bio: '',
    locatio: '',
    social_media_url: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const {
    first_name,
    last_name,
    email,
    username,
    password,
    bio,
    location,
    social_media_url,
  } = user;

  useEffect(async () => {
    try {
      const config = {
        headers: {
          authorization: `${localStorage.getItem('accessToken')}`,
        },
      };
      const result = await axios.get('http://localhost:4000/api/me', config);
      setUser({
        first_name: result.data.user.first_name,
        last_name: result.data.user.last_name,
        email: result.data.user.email,
        username: result.data.user.username,
        password: result.data.user.password,
        bio: result.data.user.bio,
        location: result.data.user.location,
        social_media_url: result.data.user.social_media_url,
      });
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const config = {
        headers: {
          authorization: `${localStorage.getItem('accessToken')}`,
        },
      };
      const userData = {
        first_name,
        last_name,
        email,
        username,
        password,
        bio,
        location,
        social_media_url,
      };

      const result = await axios.put(
        'http://localhost:4000/api/user/me/update',
        userData,
        config
      );
      setLoading(false);
      router.push('/game');
    } catch (error) {
      console.log(error.response);
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container container-fluid">
          <div className="row wrapper">
            <div className="col-10 col-lg-5 update-form">
              <form className="shadow-lg" onSubmit={submitHandler}>
                <h1 className="mb-3">Update Profile</h1>

                <div className="form-group">
                  <label htmlFor="name_field">First Name</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="first_name"
                    value={first_name}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name_field">Last Name</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="last_name"
                    value={last_name}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name_field">Username</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name_field">Bio</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="bio"
                    value={bio}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name_field">Location</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="location"
                    value={location}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name_field">Social Media</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="social_media_url"
                    value={social_media_url}
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
                    onChange={onChange}
                  />
                </div>

                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={loading ? true : false}
                >
                  {loading ? <ButtonLoader /> : 'UPDATE'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfile;
