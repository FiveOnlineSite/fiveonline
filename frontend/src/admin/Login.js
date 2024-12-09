import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="form-white-bg">
                <form>
                  <div className="row">
                    <div className="col-md-12 text-center mb-4">
                      <img
                        src="/images/black-logo.png"
                        alt="logo"
                        width={"200px"}
                        height={"35px"}
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="theme-form">
                        <label>Email ID</label>
                        <input type="email" name="email" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="theme-form">
                        <label>Password</label>
                        <input type="password" name="password" required />
                      </div>
                    </div>

                    <div className="col-md-12 text-end">
                      <NavLink to="/" className="forgot-password-link">
                        Forgot Password?
                      </NavLink>
                    </div>

                    <div className="col-md-12">
                      <div className="theme-form">
                        <button type="submit">Login</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
