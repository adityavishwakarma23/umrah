import React, { useState } from "react";
import { authImage, AuthLogo } from "../../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const index = () => {
  const navigate = useNavigate();
  const GotoNext = (type) => {
    localStorage.setItem("UserType", type);
    if (type === "Agent") {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  const [userLoginData, setUserLoginData] = useState({
    email:"",
    password: ""  
  });

  const handleUseLogin = (e) => {
    e.preventDefault();

    try {
      console.log("Inside Login");

      const response = axios.post("http://localhost:5000/auth/login", userLoginData);
      console.log("response:", response);

    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleUserChange = (e) => {
    setUserLoginData({...userLoginData, [e.target.id]: e.target.value})
  };

  return (
    <>
      <div className="auth-wrapper auth-wrp-hght">
        <div className="auth-wrapper-inner">
          <div className="auth-flex">
            <div className="auth-flex-50">
              <div className="auth-main">
                <div className="auth-logo">
                  <img src={AuthLogo} alt="" />
                </div>
                <div className="auth-form-main">
                  <div className="auth-inner-main auth-hgt-st">
                    <div className="auth-top-main">
                      <h3>Welcome Back, Partner!</h3>
                      <p>
                        Log in to access your dashboard, manage Umrah & Hajj
                        packages, track bookings, and connect with pilgrims.
                      </p>
                    </div>
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
                    <form onSubmit={handleUseLogin}>
                      <div className="auth-card">
                        <div className="auth-card-body">
                          <div className="auth-card-body-inner">
                            <div className="form-flex">
                              <div className="form-inner-flx-100">
                                <label className="form-label">
                                  Email <i>*</i>
                                </label>
                                <input
                                  type="num"
                                  placeholder="JBVBYHV89785"
                                  className="alert-input"
                                  id="email"
                                  onChange={handleUserChange}
                                  required
                                />
                              </div>
                              <div className="form-inner-flex-100">
                                <div className="form-inputs">
                                  <label className="form-label">Password</label>
                                  <div className="input-wthicon">
                                    <input
                                      type="password"
                                      placeholder="Enter Your Password"
                                      id="password"
                                      onChange={handleUserChange}
                                      required
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
                            <div className="frgot-btn">
                              <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                            <div className="auth-btn">
                              <button
                                onClick={() => {
                                  GotoNext("Agent");
                                }}
                                className="btn btn-secondary"
                              >
                                Agent
                              </button>
                              <button
                                // onClick={() => {
                                //   GotoNext("User");
                                // }}
                                className="btn btn-secondary"
                                type="submit"
                              >
                                LOGIN
                              </button>
                            </div>
                            <div className="donthave-account">
                              <p>
                                New to the platform?
                                <Link to="/sign-up"> Create an account</Link> and
                                start your spiritual journey today.
                              </p>
                            </div>
                            <div className="socail-list">
                              <ul>
                                <li>
                                  <div className="social-link">
                                    <Link to="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="61"
                                        height="26"
                                        viewBox="0.5 0.5 999 431.51"
                                      >
                                        <path d="M47.19 432.01C21.985 432.01.5 416.189.5 380.327c0-55.361 47.642-97.403 69.257-109.293 0 0 30.243 17.422 61.618 28.633C69.035 260.226 29.2 188.363 29.2 108.603 29.2 34.06 68.547.5 104.07.5c28.577 0 96.327 31.436 96.327 152.063 0 129.8-67.73 279.447-153.206 279.447zM667.742 345.728h-29.518V239.894c0-20.404-3.152-35.158-9.446-44.282-6.304-9.123-16.893-13.676-31.767-13.676-12.598 0-23.307 5.76-32.126 17.28-8.82 11.52-13.234 25.315-13.234 41.397v105.115h-29.518V236.291c0-36.237-13.98-54.355-41.941-54.355-12.958 0-23.639 5.428-32.044 16.293-8.405 10.857-12.598 24.994-12.598 42.384v105.115h-29.518V161.412h29.518v29.16h.72c13.076-22.322 32.153-33.482 57.238-33.482 12.598 0 23.583 3.511 32.938 10.534 9.363 7.022 15.777 16.229 19.26 27.629 13.677-25.436 34.08-38.163 61.202-38.163 40.56 0 60.843 25.021 60.843 75.063v113.575zM999.5 345.728h-29.517V240.613c0-39.121-14.285-58.677-42.835-58.677-14.764 0-26.966 5.548-36.633 16.653-9.658 11.096-14.487 25.113-14.487 42.024v105.115H846.51V161.412h29.518v30.597h.719c13.915-23.28 34.08-34.919 60.474-34.919 20.154 0 35.582 6.507 46.263 19.528S999.5 208.45 999.5 233.047v112.681zM699.97 307.123v31.62s15.675 11.326 46.253 11.326c46.411 0 66.806-25.897 66.806-54.152 0-61.248-82.463-46.604-82.463-87.246 0-15.27 12.165-26.33 32.578-26.33 23.84 0 41.397 12.718 41.397 12.718v-29.27s-16.321-9.04-39.858-9.04c-39.683 0-64.41 24.781-64.41 54.558 0 60.547 82.205 48.705 82.205 88.167 0 18.137-14.91 24.708-34.19 24.708-27.61 0-48.319-17.059-48.319-17.059z" />
                                        <path d="M156.13 390.88c0 18.813 6.572 26.178 16.619 26.178 25.143 0 65.199-58.685 63.679-120.298 38.124-40.218 83.826-103.22 83.826-153.681 0-12.215-3.464-22.501-17.942-22.501-22.134 0-53.763 38.149-73.825 76.032-19.35 39.246-37.447 84.009-61.473 145.445-5.615 15.41-10.883 34.074-10.883 48.826z" />
                                      </svg>
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <div className="social-link">
                                    <Link to="">
                                      <span>
                                        <svg
                                          width="25"
                                          height="24"
                                          viewBox="0 0 25 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M23.54 12.2615C23.54 11.446 23.4668 10.6619 23.3309 9.90918H12.5V14.3576H18.6891C18.4225 15.7951 17.6123 17.013 16.3943 17.8285V20.714H20.1109C22.2855 18.7119 23.54 15.7637 23.54 12.2615Z"
                                            fill="#4285F4"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12.4999 23.4998C15.6049 23.4998 18.2081 22.47 20.1108 20.7137L16.3943 17.8282C15.3645 18.5182 14.0472 18.9259 12.4999 18.9259C9.50471 18.9259 6.96948 16.903 6.06516 14.1848H2.22311V17.1644C4.11539 20.9228 8.00448 23.4998 12.4999 23.4998Z"
                                            fill="#34A853"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.06523 14.185C5.83523 13.495 5.70455 12.7579 5.70455 12C5.70455 11.242 5.83523 10.505 6.06523 9.81499V6.83545H2.22318C1.44432 8.38795 1 10.1443 1 12C1 13.8557 1.44432 15.612 2.22318 17.1645L6.06523 14.185Z"
                                            fill="#FBBC05"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12.4999 5.07386C14.1883 5.07386 15.7043 5.65409 16.8961 6.79364L20.1945 3.49523C18.2029 1.63955 15.5997 0.5 12.4999 0.5C8.00448 0.5 4.11539 3.07705 2.22311 6.83545L6.06516 9.815C6.96948 7.09682 9.50471 5.07386 12.4999 5.07386Z"
                                            fill="#EA4335"
                                          />
                                        </svg>
                                      </span>
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <div className="social-link">
                                    <Link to="">
                                      <span>
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <div className="social-link">
                                    <Link to="">
                                      <span>
                                        <svg
                                          width="20"
                                          height="23"
                                          viewBox="0 0 20 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19.2806 17.924C18.9328 18.7275 18.5211 19.4672 18.0441 20.1472C17.3939 21.0743 16.8615 21.716 16.4512 22.0724C15.8151 22.6573 15.1337 22.9568 14.4039 22.9739C13.8801 22.9739 13.2483 22.8248 12.5129 22.5224C11.7751 22.2214 11.097 22.0724 10.477 22.0724C9.8268 22.0724 9.12944 22.2214 8.38352 22.5224C7.63647 22.8248 7.03466 22.9824 6.57453 22.998C5.87475 23.0278 5.17725 22.7197 4.48102 22.0724C4.03665 21.6848 3.48084 21.0204 2.81499 20.0791C2.1006 19.0739 1.51326 17.9084 1.05313 16.5795C0.560353 15.1442 0.313324 13.7543 0.313324 12.4087C0.313324 10.8673 0.646388 9.53789 1.31351 8.42385C1.83781 7.529 2.53531 6.82312 3.40829 6.30493C4.28127 5.78674 5.22453 5.52267 6.24033 5.50578C6.79615 5.50578 7.52502 5.6777 8.4308 6.01559C9.33402 6.35462 9.91397 6.52655 10.1682 6.52655C10.3583 6.52655 11.0026 6.32552 12.0948 5.92473C13.1276 5.55305 13.9993 5.39916 14.7134 5.45978C16.6485 5.61595 18.1023 6.37876 19.0691 7.75303C17.3385 8.80163 16.4824 10.2703 16.4994 12.1544C16.5151 13.622 17.0474 14.8432 18.0938 15.8129C18.568 16.2629 19.0975 16.6107 19.6867 16.8578C19.5589 17.2283 19.424 17.5832 19.2806 17.924V17.924ZM14.8426 0.460131C14.8426 1.61039 14.4224 2.68439 13.5848 3.67847C12.5739 4.86023 11.3513 5.54311 10.0254 5.43536C10.0085 5.29736 9.99873 5.15213 9.99873 4.99951C9.99873 3.89526 10.4794 2.71349 11.3331 1.74724C11.7593 1.25801 12.3014 0.851218 12.9587 0.526714C13.6146 0.207053 14.235 0.0302728 14.8185 0C14.8355 0.153772 14.8426 0.307554 14.8426 0.460116V0.460131Z"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
