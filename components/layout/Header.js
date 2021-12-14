import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Link from 'next/link';
import router from 'next/router';

const Header = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      const config = {
        headers: {
          authorization: `${localStorage.getItem('accessToken')}`,
        },
      };
      const result = await axios.get('http://localhost:4000/api/me', config);
      setUser(result.data.user);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        // toast.error(error.response.data.message);
      }, 1000);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div>
      <nav className="navbar row justify-content-center sticky-top">
        <div className="container">
          <div className="col-3 p-0">
            <div className="navbar-brand">
              <Link href="/">
                <img
                  style={{ cursor: 'pointer' }}
                  src="/img/goplay.png"
                  alt="Binar"
                  height="60px"
                />
              </Link>
            </div>
          </div>

          <div className="col-3 mt-3 mt-md-0 text-center">
            {user ? (
              <div className="ml-4 dropdown d-line">
                <a
                  className="btn dropdown-toggle mr-4"
                  id="dropDownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>{user && user.username}</span>
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropDownMenuButton"
                >
                  <Link href="/me/profile">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                  <Link href="/">
                    <a className="dropdown-item" onClick={logoutHandler}>
                      Logout
                    </a>
                  </Link>
                </div>
              </div>
            ) : (
              !loading && (
                <Link href="/login">
                  <a className="btn btn-primary px-4 text-white login-header-btn float-right">
                    Login
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
