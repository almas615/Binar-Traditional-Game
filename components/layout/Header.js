import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav className="navbar row justify-content-center sticky-top">
        <div className="container">
          <div className="col-3 p-0">
            <div className="navbar-brand">
              <img
                style={{ cursor: 'pointer' }}
                src="/img/goplay.png"
                alt="Binar"
                height="60px"
              />
            </div>
          </div>

          <div className="col-3 mt-3 mt-md-0 text-center">
            <Link href="/login">
              <a className="btn btn-primary px-4 text-white login-header-btn float-right">
                Login
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
