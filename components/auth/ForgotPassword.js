import React from 'react';

const ForgotPassword = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('di klik');
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg forgot">
            <h1 className="mb-3" style={{ textAlign: 'center' }}>
              Forgot Password
            </h1>
            <div className="form-group">
              <label htmlFor="username_field">Email</label>
              <input
                type="text"
                id="username_field"
                className="form-control"
                value=""
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              style={{ marginBottom: '10px' }}
              onClick={sendEmail}
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
