import React, { useState, useEffect } from 'react';
import axios from 'axios';
import router, { useRouter } from 'next/router';

const DetailsProfile = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    bio: '',
    location: '',
    social_media_url: '',
  });

  const {
    first_name,
    last_name,
    email,
    username,
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
        bio: result.data.user.bio,
        location: result.data.user.location,
        social_media_url: result.data.user.social_media_url,
      });
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  return (
    <div className="profile-bg-image">
      <div>
        <div className="container profile-background">
          <br />
          <br />
          <div className="text-center">
            <img
              className="img"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
              alt={user.name}
              width="150"
              height="150"
            />
          </div>
          <br />
          <h3 className="text-center">@{username}</h3>
          <br />
          <br />
          <h4 className="text-center">
            {first_name} {last_name}
          </h4>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-2">
                <strong>EMAIL:</strong>
              </div>
              <div className="col-10">{email}</div>
            </div>
            <br />
            <div className="row">
              <div className="col-2">
                <strong>BIO:</strong>
              </div>
              <div className="col-10">{bio}</div>
            </div>
            <br />
            <div className="row">
              <div className="col-2">
                <strong>LOCATION:</strong>
              </div>
              <div className="col-10">{location}</div>
            </div>
            <br />
            <div className="row">
              <div className="col-2">
                <strong>SOCIAL MEDIA:</strong>
              </div>
              <div className="col-10">{social_media_url}</div>
            </div>
            <br />
            <br />
            <div className="text-center">
              <a className="btn" href="/me/update">
                Update your profile
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default DetailsProfile;
