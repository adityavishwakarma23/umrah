import React from "react";
import { authImage, AuthLogo } from "../../../assets/images";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-wrapper-inner">
          <div className="auth-flex">
            <div className="auth-flex-50">
              <div className="auth-main auth-fgt-main">
                <div className="auth-logo">
                  <img src={AuthLogo} alt="" />
                </div>
                <div className="auth-form-main">
                <div className="auth-inner-main ">
                    <div className="login-heading login-wthback-btn">
                      <div className="backlink-icon">
                        <Link to="/login">
                          <span>
                          <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7915 7.00498H3.62148L8.50148 2.12498C8.89148 1.73498 8.89148 1.09498 8.50148 0.704976C8.11148 0.314976 7.48148 0.314976 7.09148 0.704976L0.501484 7.29498C0.111484 7.68498 0.111484 8.31498 0.501484 8.70498L7.09148 15.295C7.48148 15.685 8.11148 15.685 8.50148 15.295C8.89148 14.905 8.89148 14.275 8.50148 13.885L3.62148 9.00498H14.7915C15.3415 9.00498 15.7915 8.55498 15.7915 8.00498C15.7915 7.45498 15.3415 7.00498 14.7915 7.00498Z"
        fill="#262626"
      />
    </svg>
                          </span>
                        </Link>
                      </div>
                      <h3>Reset Your Password</h3>
                    </div>
                    <div className="divider-main bg-white">
                            <div className="container">
                              <div className="divider">
                                <span>
                                  <svg
                                    width="15"
                                    height="20"
                                    viewBox="0 0 15 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.24909 11.5254L3.1805 10.2072L4.1908 9.3809L3.1805 8.14138L4.48223 7.07894L5.53139 8.37748L4.54052 9.20382L5.53139 10.404L4.24909 11.5254ZM0.479892 2.51439C1.35419 0.625613 3.49136 0.114069 5.43425 1.13716C8.19314 2.67179 8.46515 5.58366 8.46515 8.49553V15.1259C8.46515 16.3851 10.6218 15.6965 10.9326 14.4767V2.31765L12.7978 3.08496V17.2311C12.7978 19.8872 14.3521 19.8872 14.3521 19.8872H12.4869C12.4869 19.8872 10.9326 19.8872 10.9326 17.2311V15.8539C10.1166 17.2311 6.63884 18.9625 6.58055 15.5785V7.74789C6.58055 6.4887 6.63884 4.58025 6.0754 3.51781C4.48223 0.664963 -0.452692 3.8326 2.55878 8.14138C2.55878 8.14138 -0.899556 5.38691 0.479892 2.51439Z"
                                      fill="white"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                    <div className="auth-card">
                      <div className="auth-card-body">
                        <div className="auth-card-body-inner">
                          <div className="form-flex">
                            <div className="form-inner-flx-100">
                              <div className="form-inputs">
                                <label className="form-label">
                                  New Password
                                </label>
                                <div className="input-wthicon">
                                  <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                  />
                                  <div className="input-icon">
                                    <span>
                                      <i className="fa-regular fa-eye"></i>
                                    </span>
                                    <span style={{ display: "none" }}>
                                      <i className="fa-regular fa-eye-slash"></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-inner-flx-100">
                              <div className="form-inputs">
                                <label className="form-label">
                                  Confirm Password
                                </label>
                                <div className="input-wthicon">
                                  <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                  />
                                  <div className="input-icon">
                                    <span>
                                      <i className="fa-regular fa-eye"></i>
                                    </span>
                                    <span style={{ display: "none" }}>
                                      <i className="fa-regular fa-eye-slash"></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="auth-btn">
                            <Link to="/" className="btn btn-secondary">
                              Reset Password
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="auth-flex-50">
              <div className="auth-discrption">
                <div className="auth-discrption-inner">
                  <div className="auth-discrption-main">
                    <div className="auth-discription-image">
                      <span
                        className="auth-bg"
                        style={{ backgroundImage: `url(${authImage})` }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
