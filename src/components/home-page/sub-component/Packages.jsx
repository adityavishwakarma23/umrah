import React from "react";
import {
  PaymentCard,
  PaymentCard1,
  PaymentCard2,
} from "../../../assets/images";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <section className="pack-section">
      <div className="container">
        <div className="main-pack">
          <div className="pack-top">
            <h1> PACKAGES </h1>
            <p> Choose the Perfect Package for Your Journey </p>
          </div>
          <div className="card-main">
            <div className="card-flax">
              <div className="card">
                <div className="bcntant">
                  <div className="pack-padding">
                    <div className="bcnt-img">
                      <span>
                        <img src={PaymentCard} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="padding-pack">
                    <div className="student-days">
                      <div className="night">
                        <p> 10 Nights | 11 Days</p>
                      </div>
                    </div>
                    <div className="student-name">
                      <h1>EXECUTIVE Umrah Packages</h1>
                    </div>
                    <div className="ux-main">
                      <p>
                        {" "}
                        4530
                        <span>
                          SR / <em> person </em>
                        </span>{" "}
                      </p>
                    </div>
                    <div className="bcnt-dtl">
                      <div className="bcnt-main">
                        <div className="cnt-infor">
                          <ul>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="22"
                                  height="16"
                                  viewBox="0 0 22 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21 6H1M10 10H5M1 4.2L1 11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15L17.8 15C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.4802 1 18.9201 1 17.8 1L4.2 1C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2Z"
                                    stroke="#D4AF37"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <p> Visa + Insurance </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="14"
                                  viewBox="0 0 20 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 7C20 5.9 19.1 5 18 5V2C18 0.9 17.1 0 16 0H4C2.9 0 2 0.9 2 2V5C0.9 5 0 5.9 0 7V12H1.33L2 14H3L3.67 12H16.34L17 14H18L18.67 12H20V7ZM16 5H11V2H16V5ZM4 2H9V5H4V2ZM2 7H18V10H2V7Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Hotel </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.10041 5C3.76041 5.55 3.70041 5.97 3.70041 6.38C3.70041 7.15 4.70041 9 4.70041 10C4.70041 10.95 4.30041 11.5 4.30041 11.5H2.80041C2.80041 11.5 3.20041 10.95 3.20041 10C3.20041 9 2.20041 7.15 2.20041 6.38C2.20041 5.97 2.26041 5.55 2.60041 5H4.10041ZM9.10041 5C8.76041 5.55 8.70041 5.97 8.70041 6.38C8.70041 7.15 9.70041 9 9.70041 10C9.70041 10.95 9.30041 11.5 9.30041 11.5H10.8004C10.8004 11.5 11.2004 10.95 11.2004 10C11.2004 9 10.2004 7.15 10.2004 6.38C10.2004 5.97 10.2604 5.55 10.6004 5H9.10041ZM5.85041 5C5.51041 5.55 5.45041 5.97 5.45041 6.38C5.45041 7.15 6.45041 9.01 6.45041 10C6.45041 10.95 6.05041 11.5 6.05041 11.5H7.55041C7.55041 11.5 7.95041 10.95 7.95041 10C7.95041 9 6.95041 7.15 6.95041 6.38C6.95041 5.97 7.01041 5.55 7.35041 5H5.85041ZM16.3004 0C14.7604 0 13.4904 1.16 13.3204 2.65L12.2304 13H1.71041C1.11041 13 0.620412 13.53 0.710412 14.13C1.23041 17.46 4.09041 20 7.45041 20C10.9304 20 13.7904 17.27 14.1604 13.77L15.3104 2.9C15.3604 2.39 15.7804 2 16.3004 2C16.8504 2 17.3004 2.45 17.3004 3C17.3004 3.3 17.2004 4.25 17.2004 4.25L19.1704 4.5C19.1704 4.5 19.3004 3.44 19.3004 3C19.3004 1.35 17.9504 0 16.3004 0ZM7.45041 18C5.51041 18 3.78041 16.77 3.02041 15H11.8104C11.0904 16.78 9.39041 18 7.45041 18Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Meal </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 14V12L11.5 7V1.5C11.5 0.67 10.83 0 10 0C9.17 0 8.5 0.67 8.5 1.5V7L0 12V14L8.5 11.5V17L6 18.5V20L10 19L14 20V18.5L11.5 17V11.5L20 14Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Air Transport </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="btn-pock">
                      <div className="primary-btn btnpok">
                        {" "}
                        <Link to="/packagemain">Learn more</Link>{" "}
                        {/* <div className="primary-btn btnright"> <Link to="/packagemain">Explore Packages</Link> </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-flax">
              <div className="card">
                <div className="bcntant">
                  <div className="pack-padding">
                    <div className="bcnt-img">
                      <span>
                        <img src={PaymentCard1} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="padding-pack">
                    <div className="student-days">
                      <div className="night">
                        <p> 10 Nights | 11 Days</p>
                      </div>
                    </div>
                    <div className="student-name">
                      <h1>EXECUTIVE Umrah Packages</h1>
                    </div>
                    <div className="ux-main">
                      <p>
                        {" "}
                        4530
                        <span>
                          SR / <em> person </em>
                        </span>{" "}
                      </p>
                    </div>
                    <div className="bcnt-dtl">
                      <div className="bcnt-main">
                        <div className="cnt-infor">
                          <ul>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="22"
                                  height="16"
                                  viewBox="0 0 22 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21 6H1M10 10H5M1 4.2L1 11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15L17.8 15C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.4802 1 18.9201 1 17.8 1L4.2 1C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2Z"
                                    stroke="#D4AF37"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <p> Visa + Insurance </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="14"
                                  viewBox="0 0 20 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 7C20 5.9 19.1 5 18 5V2C18 0.9 17.1 0 16 0H4C2.9 0 2 0.9 2 2V5C0.9 5 0 5.9 0 7V12H1.33L2 14H3L3.67 12H16.34L17 14H18L18.67 12H20V7ZM16 5H11V2H16V5ZM4 2H9V5H4V2ZM2 7H18V10H2V7Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Hotel </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.10041 5C3.76041 5.55 3.70041 5.97 3.70041 6.38C3.70041 7.15 4.70041 9 4.70041 10C4.70041 10.95 4.30041 11.5 4.30041 11.5H2.80041C2.80041 11.5 3.20041 10.95 3.20041 10C3.20041 9 2.20041 7.15 2.20041 6.38C2.20041 5.97 2.26041 5.55 2.60041 5H4.10041ZM9.10041 5C8.76041 5.55 8.70041 5.97 8.70041 6.38C8.70041 7.15 9.70041 9 9.70041 10C9.70041 10.95 9.30041 11.5 9.30041 11.5H10.8004C10.8004 11.5 11.2004 10.95 11.2004 10C11.2004 9 10.2004 7.15 10.2004 6.38C10.2004 5.97 10.2604 5.55 10.6004 5H9.10041ZM5.85041 5C5.51041 5.55 5.45041 5.97 5.45041 6.38C5.45041 7.15 6.45041 9.01 6.45041 10C6.45041 10.95 6.05041 11.5 6.05041 11.5H7.55041C7.55041 11.5 7.95041 10.95 7.95041 10C7.95041 9 6.95041 7.15 6.95041 6.38C6.95041 5.97 7.01041 5.55 7.35041 5H5.85041ZM16.3004 0C14.7604 0 13.4904 1.16 13.3204 2.65L12.2304 13H1.71041C1.11041 13 0.620412 13.53 0.710412 14.13C1.23041 17.46 4.09041 20 7.45041 20C10.9304 20 13.7904 17.27 14.1604 13.77L15.3104 2.9C15.3604 2.39 15.7804 2 16.3004 2C16.8504 2 17.3004 2.45 17.3004 3C17.3004 3.3 17.2004 4.25 17.2004 4.25L19.1704 4.5C19.1704 4.5 19.3004 3.44 19.3004 3C19.3004 1.35 17.9504 0 16.3004 0ZM7.45041 18C5.51041 18 3.78041 16.77 3.02041 15H11.8104C11.0904 16.78 9.39041 18 7.45041 18Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Meal </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 14V12L11.5 7V1.5C11.5 0.67 10.83 0 10 0C9.17 0 8.5 0.67 8.5 1.5V7L0 12V14L8.5 11.5V17L6 18.5V20L10 19L14 20V18.5L11.5 17V11.5L20 14Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Air Transport </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="btn-pock">
                      <div className="primary-btn btnpok">
                        {" "}
                        <Link to="/packagemain">Learn more</Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-flax">
              <div className="card">
                <div className="bcntant">
                  <div className="pack-padding">
                    <div className="bcnt-img">
                      <span>
                        <img src={PaymentCard2} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="padding-pack">
                    <div className="student-days">
                      <div className="night">
                        <p> 10 Nights | 11 Days</p>
                      </div>
                    </div>
                    <div className="student-name">
                      <h1>EXECUTIVE Umrah Packages</h1>
                    </div>
                    <div className="ux-main">
                      <p>
                        {" "}
                        4530
                        <span>
                          SR / <em> person </em>
                        </span>{" "}
                      </p>
                    </div>
                    <div className="bcnt-dtl">
                      <div className="bcnt-main">
                        <div className="cnt-infor">
                          <ul>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="22"
                                  height="16"
                                  viewBox="0 0 22 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21 6H1M10 10H5M1 4.2L1 11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15L17.8 15C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.4802 1 18.9201 1 17.8 1L4.2 1C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2Z"
                                    stroke="#D4AF37"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <p> Visa + Insurance </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="14"
                                  viewBox="0 0 20 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 7C20 5.9 19.1 5 18 5V2C18 0.9 17.1 0 16 0H4C2.9 0 2 0.9 2 2V5C0.9 5 0 5.9 0 7V12H1.33L2 14H3L3.67 12H16.34L17 14H18L18.67 12H20V7ZM16 5H11V2H16V5ZM4 2H9V5H4V2ZM2 7H18V10H2V7Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Hotel </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.10041 5C3.76041 5.55 3.70041 5.97 3.70041 6.38C3.70041 7.15 4.70041 9 4.70041 10C4.70041 10.95 4.30041 11.5 4.30041 11.5H2.80041C2.80041 11.5 3.20041 10.95 3.20041 10C3.20041 9 2.20041 7.15 2.20041 6.38C2.20041 5.97 2.26041 5.55 2.60041 5H4.10041ZM9.10041 5C8.76041 5.55 8.70041 5.97 8.70041 6.38C8.70041 7.15 9.70041 9 9.70041 10C9.70041 10.95 9.30041 11.5 9.30041 11.5H10.8004C10.8004 11.5 11.2004 10.95 11.2004 10C11.2004 9 10.2004 7.15 10.2004 6.38C10.2004 5.97 10.2604 5.55 10.6004 5H9.10041ZM5.85041 5C5.51041 5.55 5.45041 5.97 5.45041 6.38C5.45041 7.15 6.45041 9.01 6.45041 10C6.45041 10.95 6.05041 11.5 6.05041 11.5H7.55041C7.55041 11.5 7.95041 10.95 7.95041 10C7.95041 9 6.95041 7.15 6.95041 6.38C6.95041 5.97 7.01041 5.55 7.35041 5H5.85041ZM16.3004 0C14.7604 0 13.4904 1.16 13.3204 2.65L12.2304 13H1.71041C1.11041 13 0.620412 13.53 0.710412 14.13C1.23041 17.46 4.09041 20 7.45041 20C10.9304 20 13.7904 17.27 14.1604 13.77L15.3104 2.9C15.3604 2.39 15.7804 2 16.3004 2C16.8504 2 17.3004 2.45 17.3004 3C17.3004 3.3 17.2004 4.25 17.2004 4.25L19.1704 4.5C19.1704 4.5 19.3004 3.44 19.3004 3C19.3004 1.35 17.9504 0 16.3004 0ZM7.45041 18C5.51041 18 3.78041 16.77 3.02041 15H11.8104C11.0904 16.78 9.39041 18 7.45041 18Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Meal </p>
                              </div>
                            </li>
                            <li>
                              <div className="infor-img">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 14V12L11.5 7V1.5C11.5 0.67 10.83 0 10 0C9.17 0 8.5 0.67 8.5 1.5V7L0 12V14L8.5 11.5V17L6 18.5V20L10 19L14 20V18.5L11.5 17V11.5L20 14Z"
                                    fill="#D4AF37"
                                  />
                                </svg>
                                <p> Air Transport </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="btn-pock">
                      <div className="primary-btn btnpok">
                      <Link to="/packagemain">Learn more</Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
