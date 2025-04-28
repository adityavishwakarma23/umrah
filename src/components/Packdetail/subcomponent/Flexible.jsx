import React, { useState } from "react";
import { kalel, Packdet, Umlaline } from "../../../assets/images";
import { PaymentCard } from "../../../assets/images";
import { Link } from "react-router-dom";

const Flexible = () => {
  // useState hook to manage checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // Toggle the checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section className="section-flexed">
      <div className="container">
        <div className="fixed-main">
          <div className="inner-fixed">
            <div className="main-fixed">
              <div className="note-fled">
                <p> Fixed </p>
              </div>
              <div className="fixed-top">
                <span>
                  <img src={Packdet} alt="" />
                </span>
              </div>
              <div className="kalf-main">
                <div className="main-khofl">
                  <div className="kofl-left">
                    <div className="photo-fle">
                      <span>
                        <img src={kalel} alt="" />
                      </span>
                    </div>
                    <div className="agent-para">
                      <p> Agent </p>
                      <h1> Md. Sharifsudeen kalf </h1>
                    </div>
                  </div>
                  <div className="kalf-right">
                    <div className="right-main">
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.38512 3.97875C10.034 4.10479 10.6304 4.42072 11.0978 4.88612C11.5653 5.35151 11.8827 5.94519 12.0093 6.59118M9.38512 1.33325C10.7333 1.48235 11.9904 2.08337 12.9501 3.03762C13.9099 3.99187 14.5152 5.24265 14.6666 6.58457M6.84533 9.17919C6.04707 8.38449 5.41675 7.48592 4.95437 6.52718C4.9146 6.44471 4.89471 6.40348 4.87943 6.3513C4.82514 6.16589 4.86414 5.9382 4.97709 5.78117C5.00887 5.73698 5.04684 5.69918 5.12278 5.62358C5.35504 5.39236 5.47117 5.27675 5.54709 5.16049C5.83342 4.72207 5.83342 4.15687 5.54709 3.71846C5.47117 3.6022 5.35504 3.48659 5.12278 3.25537L4.99332 3.12649C4.64026 2.775 4.46373 2.59926 4.27414 2.5038C3.89709 2.31394 3.4518 2.31394 3.07475 2.5038C2.88516 2.59926 2.70863 2.775 2.35557 3.12649L2.25084 3.23074C1.89899 3.58102 1.72307 3.75616 1.5887 3.99428C1.43961 4.2585 1.33241 4.66888 1.33332 4.97194C1.33413 5.24505 1.38735 5.4317 1.49378 5.80501C2.06576 7.81123 3.14497 9.70432 4.73141 11.2837C6.31784 12.863 8.21943 13.9374 10.2346 14.5068C10.6096 14.6128 10.7971 14.6658 11.0715 14.6666C11.3759 14.6675 11.7881 14.5608 12.0535 14.4123C12.2927 14.2786 12.4686 14.1034 12.8205 13.7532L12.9252 13.6489C13.2782 13.2974 13.4548 13.1217 13.5507 12.9329C13.7414 12.5576 13.7414 12.1143 13.5507 11.7389C13.4548 11.5501 13.2782 11.3744 12.9252 11.0229L12.7957 10.894C12.5635 10.6628 12.4473 10.5472 12.3306 10.4716C11.8902 10.1866 11.3224 10.1866 10.8821 10.4716C10.7653 10.5472 10.6492 10.6628 10.4169 10.894C10.341 10.9696 10.303 11.0074 10.2586 11.0391C10.1009 11.1515 9.87215 11.1904 9.6859 11.1363C9.63349 11.1211 9.59207 11.1013 9.50924 11.0617C8.54619 10.6014 7.64359 9.97388 6.84533 9.17919Z"
                            stroke="#007AFF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <p> +971 55 327 9516 </p>
                    </div>
                    <div className="right-main">
                      <span>
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.75 2.875L5.85307 6.44715C6.26631 6.73641 6.47292 6.88105 6.69766 6.93707C6.89618 6.98655 7.10382 6.98655 7.30234 6.93707C7.52708 6.88105 7.73369 6.73641 8.14692 6.44715L13.25 2.875M3.75 11H10.25C11.3001 11 11.8251 11 12.2262 10.7956C12.579 10.6159 12.8659 10.329 13.0456 9.97623C13.25 9.57515 13.25 9.0501 13.25 8V4C13.25 2.9499 13.25 2.42485 13.0456 2.02377C12.8659 1.67096 12.579 1.38413 12.2262 1.20436C11.8251 1 11.3001 1 10.25 1H3.75C2.6999 1 2.17485 1 1.77377 1.20436C1.42096 1.38413 1.13413 1.67096 0.954363 2.02377C0.75 2.42485 0.75 2.9499 0.75 4V8C0.75 9.0501 0.75 9.57515 0.954363 9.97623C1.13413 10.329 1.42096 10.6159 1.77377 10.7956C2.17485 11 2.6999 11 3.75 11Z"
                            stroke="#007AFF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <p> sharifsudeen@gmail.com </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="note-main">
              <div className="noteh1">
                <h1> Note : </h1>
              </div>
              <div className="note-para">
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2> Package cost is per Person on Sharing Basis. </h2>
                  </div>
                </div>
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2>
                      {" "}
                      All services starts from your landing point. Airport,
                      Delhi/Jeddha/Madinah/Delhi etc.{" "}
                    </h2>
                  </div>
                </div>
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2> 2 Photos (6cm x 4 cm with white background). </h2>
                  </div>
                </div>
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2>
                      {" "}
                      Indian passport valid should be valid 6 months of
                      expiring.{" "}
                    </h2>
                  </div>
                </div>
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2> Vaccine Certificate both dose </h2>
                  </div>
                </div>
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2> Pan card mandatory. </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="note-main">
              <div className="noteh1">
                <h1> Booking Policy : </h1>
              </div>
              <div className="note-para">
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2> Pay 50% Advance per person at time of Book. </h2>
                  </div>
                </div>
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2>
                      Balance amount should be full and final at time of
                      passport hand over otherwise your all package will be
                      cancelled{" "}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="note-main">
              <div className="noteh1">
                <h1> Cancellation Policy: </h1>
              </div>
              <div className="note-para">
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2>
                      {" "}
                      The following cancelation charges would apply per person
                      if booking is cancelled as per schedule below.{" "}
                    </h2>
                  </div>
                </div>
                <div className="para-main">
                  <div className="note-svg">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <div className="note-cunt">
                    <h2>100% Non-refundable </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-fixed2">
            <div className="night-main">
              <div className="night-exe">
                <div className="exe-hed">
                  <h1> EXECUTIVE Umrah Packages </h1>
                </div>
                <div className="exe-chek">
                  <div className="add-checkbox dat">
                    <label class="custom-check" htmlFor="check">
                      <input type="checkbox" name="check" id="check" checked />
                      <span class="checkbox"></span>
                      Add to Compair
                    </label>
                  </div>
                </div>
              </div>
              <div className="day-main">
                <div className="main-day">
                  <div className="day-top">
                    <span>
                      <svg
                        width="13"
                        height="18"
                        viewBox="0 0 13 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66671 9.00008C8.66671 5.91675 10.3417 3.23341 12.8334 1.79175C11.6084 1.08341 10.1834 0.666748 8.66671 0.666748C4.06671 0.666748 0.333374 4.40008 0.333374 9.00008C0.333374 13.6001 4.06671 17.3334 8.66671 17.3334C10.1834 17.3334 11.6084 16.9167 12.8334 16.2084C10.3417 14.7667 8.66671 12.0834 8.66671 9.00008ZM9.50837 15.6084C9.23337 15.6501 8.95004 15.6667 8.66671 15.6667C4.99171 15.6667 2.00004 12.6751 2.00004 9.00008C2.00004 5.32508 4.99171 2.33341 8.66671 2.33341C8.95004 2.33341 9.23337 2.35008 9.50837 2.39175C7.91671 4.19175 7.00004 6.54175 7.00004 9.00008C7.00004 11.4584 7.91671 13.8084 9.50837 15.6084Z"
                          fill="#D4AF37"
                        />
                      </svg>
                    </span>
                    <p> 10 Nights </p>
                  </div>
                  <div className="day-top">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 7.49992C11.375 7.49992 12.5 8.62492 12.5 9.99992C12.5 11.3749 11.375 12.4999 10 12.4999C8.62504 12.4999 7.50004 11.3749 7.50004 9.99992C7.50004 8.62492 8.62504 7.49992 10 7.49992ZM10 5.83325C7.70004 5.83325 5.83337 7.69992 5.83337 9.99992C5.83337 12.2999 7.70004 14.1666 10 14.1666C12.3 14.1666 14.1667 12.2999 14.1667 9.99992C14.1667 7.69992 12.3 5.83325 10 5.83325ZM1.66671 10.8333H3.33337C3.79171 10.8333 4.16671 10.4583 4.16671 9.99992C4.16671 9.54158 3.79171 9.16658 3.33337 9.16658H1.66671C1.20837 9.16658 0.833374 9.54158 0.833374 9.99992C0.833374 10.4583 1.20837 10.8333 1.66671 10.8333ZM16.6667 10.8333H18.3334C18.7917 10.8333 19.1667 10.4583 19.1667 9.99992C19.1667 9.54158 18.7917 9.16658 18.3334 9.16658H16.6667C16.2084 9.16658 15.8334 9.54158 15.8334 9.99992C15.8334 10.4583 16.2084 10.8333 16.6667 10.8333ZM9.16671 1.66659V3.33325C9.16671 3.79158 9.54171 4.16658 10 4.16658C10.4584 4.16658 10.8334 3.79158 10.8334 3.33325V1.66659C10.8334 1.20825 10.4584 0.833252 10 0.833252C9.54171 0.833252 9.16671 1.20825 9.16671 1.66659ZM9.16671 16.6666V18.3333C9.16671 18.7916 9.54171 19.1666 10 19.1666C10.4584 19.1666 10.8334 18.7916 10.8334 18.3333V16.6666C10.8334 16.2083 10.4584 15.8333 10 15.8333C9.54171 15.8333 9.16671 16.2083 9.16671 16.6666ZM4.99171 3.81658C4.66671 3.49159 4.13337 3.49159 3.81671 3.81658C3.49171 4.14158 3.49171 4.67492 3.81671 4.99158L4.70004 5.87492C5.02504 6.19992 5.55837 6.19992 5.87504 5.87492C6.19171 5.54992 6.20004 5.01658 5.87504 4.69992L4.99171 3.81658ZM15.3 14.1249C14.975 13.7999 14.4417 13.7999 14.125 14.1249C13.8 14.4499 13.8 14.9833 14.125 15.2999L15.0084 16.1833C15.3334 16.5083 15.8667 16.5083 16.1834 16.1833C16.5084 15.8583 16.5084 15.3249 16.1834 15.0083L15.3 14.1249ZM16.1834 4.99158C16.5084 4.66658 16.5084 4.13325 16.1834 3.81658C15.8584 3.49159 15.325 3.49159 15.0084 3.81658L14.125 4.69992C13.8 5.02492 13.8 5.55825 14.125 5.87492C14.45 6.19159 14.9834 6.19992 15.3 5.87492L16.1834 4.99158ZM5.87504 15.2999C6.20004 14.9749 6.20004 14.4416 5.87504 14.1249C5.55004 13.7999 5.01671 13.7999 4.70004 14.1249L3.81671 15.0083C3.49171 15.3333 3.49171 15.8666 3.81671 16.1833C4.14171 16.4999 4.67504 16.5083 4.99171 16.1833L5.87504 15.2999Z"
                          fill="#D4AF37"
                        />
                      </svg>
                    </span>
                    <p> 11 Days </p>
                  </div>
                </div>
                <div className="main-day">
                  <div className="day-top">
                    <span>
                      <svg
                        width="13"
                        height="18"
                        viewBox="0 0 13 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66671 9.00008C8.66671 5.91675 10.3417 3.23341 12.8334 1.79175C11.6084 1.08341 10.1834 0.666748 8.66671 0.666748C4.06671 0.666748 0.333374 4.40008 0.333374 9.00008C0.333374 13.6001 4.06671 17.3334 8.66671 17.3334C10.1834 17.3334 11.6084 16.9167 12.8334 16.2084C10.3417 14.7667 8.66671 12.0834 8.66671 9.00008ZM9.50837 15.6084C9.23337 15.6501 8.95004 15.6667 8.66671 15.6667C4.99171 15.6667 2.00004 12.6751 2.00004 9.00008C2.00004 5.32508 4.99171 2.33341 8.66671 2.33341C8.95004 2.33341 9.23337 2.35008 9.50837 2.39175C7.91671 4.19175 7.00004 6.54175 7.00004 9.00008C7.00004 11.4584 7.91671 13.8084 9.50837 15.6084Z"
                          fill="#D4AF37"
                        />
                      </svg>
                    </span>
                    <p> 10 Nights </p>
                  </div>
                  <div className="day-top">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 7.49992C11.375 7.49992 12.5 8.62492 12.5 9.99992C12.5 11.3749 11.375 12.4999 10 12.4999C8.62504 12.4999 7.50004 11.3749 7.50004 9.99992C7.50004 8.62492 8.62504 7.49992 10 7.49992ZM10 5.83325C7.70004 5.83325 5.83337 7.69992 5.83337 9.99992C5.83337 12.2999 7.70004 14.1666 10 14.1666C12.3 14.1666 14.1667 12.2999 14.1667 9.99992C14.1667 7.69992 12.3 5.83325 10 5.83325ZM1.66671 10.8333H3.33337C3.79171 10.8333 4.16671 10.4583 4.16671 9.99992C4.16671 9.54158 3.79171 9.16658 3.33337 9.16658H1.66671C1.20837 9.16658 0.833374 9.54158 0.833374 9.99992C0.833374 10.4583 1.20837 10.8333 1.66671 10.8333ZM16.6667 10.8333H18.3334C18.7917 10.8333 19.1667 10.4583 19.1667 9.99992C19.1667 9.54158 18.7917 9.16658 18.3334 9.16658H16.6667C16.2084 9.16658 15.8334 9.54158 15.8334 9.99992C15.8334 10.4583 16.2084 10.8333 16.6667 10.8333ZM9.16671 1.66659V3.33325C9.16671 3.79158 9.54171 4.16658 10 4.16658C10.4584 4.16658 10.8334 3.79158 10.8334 3.33325V1.66659C10.8334 1.20825 10.4584 0.833252 10 0.833252C9.54171 0.833252 9.16671 1.20825 9.16671 1.66659ZM9.16671 16.6666V18.3333C9.16671 18.7916 9.54171 19.1666 10 19.1666C10.4584 19.1666 10.8334 18.7916 10.8334 18.3333V16.6666C10.8334 16.2083 10.4584 15.8333 10 15.8333C9.54171 15.8333 9.16671 16.2083 9.16671 16.6666ZM4.99171 3.81658C4.66671 3.49159 4.13337 3.49159 3.81671 3.81658C3.49171 4.14158 3.49171 4.67492 3.81671 4.99158L4.70004 5.87492C5.02504 6.19992 5.55837 6.19992 5.87504 5.87492C6.19171 5.54992 6.20004 5.01658 5.87504 4.69992L4.99171 3.81658ZM15.3 14.1249C14.975 13.7999 14.4417 13.7999 14.125 14.1249C13.8 14.4499 13.8 14.9833 14.125 15.2999L15.0084 16.1833C15.3334 16.5083 15.8667 16.5083 16.1834 16.1833C16.5084 15.8583 16.5084 15.3249 16.1834 15.0083L15.3 14.1249ZM16.1834 4.99158C16.5084 4.66658 16.5084 4.13325 16.1834 3.81658C15.8584 3.49159 15.325 3.49159 15.0084 3.81658L14.125 4.69992C13.8 5.02492 13.8 5.55825 14.125 5.87492C14.45 6.19159 14.9834 6.19992 15.3 5.87492L16.1834 4.99158ZM5.87504 15.2999C6.20004 14.9749 6.20004 14.4416 5.87504 14.1249C5.55004 13.7999 5.01671 13.7999 4.70004 14.1249L3.81671 15.0083C3.49171 15.3333 3.49171 15.8666 3.81671 16.1833C4.14171 16.4999 4.67504 16.5083 4.99171 16.1833L5.87504 15.2999Z"
                          fill="#D4AF37"
                        />
                      </svg>
                    </span>
                    <p> 11 Days </p>
                  </div>
                </div>
                <div className="main-day">
                  <div className="day-top">
                    <span>
                      <svg
                        width="13"
                        height="18"
                        viewBox="0 0 13 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66671 9.00008C8.66671 5.91675 10.3417 3.23341 12.8334 1.79175C11.6084 1.08341 10.1834 0.666748 8.66671 0.666748C4.06671 0.666748 0.333374 4.40008 0.333374 9.00008C0.333374 13.6001 4.06671 17.3334 8.66671 17.3334C10.1834 17.3334 11.6084 16.9167 12.8334 16.2084C10.3417 14.7667 8.66671 12.0834 8.66671 9.00008ZM9.50837 15.6084C9.23337 15.6501 8.95004 15.6667 8.66671 15.6667C4.99171 15.6667 2.00004 12.6751 2.00004 9.00008C2.00004 5.32508 4.99171 2.33341 8.66671 2.33341C8.95004 2.33341 9.23337 2.35008 9.50837 2.39175C7.91671 4.19175 7.00004 6.54175 7.00004 9.00008C7.00004 11.4584 7.91671 13.8084 9.50837 15.6084Z"
                          fill="#D4AF37"
                        />
                      </svg>
                    </span>
                    <p> 10 Nights </p>
                  </div>
                  <div className="day-top">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 7.49992C11.375 7.49992 12.5 8.62492 12.5 9.99992C12.5 11.3749 11.375 12.4999 10 12.4999C8.62504 12.4999 7.50004 11.3749 7.50004 9.99992C7.50004 8.62492 8.62504 7.49992 10 7.49992ZM10 5.83325C7.70004 5.83325 5.83337 7.69992 5.83337 9.99992C5.83337 12.2999 7.70004 14.1666 10 14.1666C12.3 14.1666 14.1667 12.2999 14.1667 9.99992C14.1667 7.69992 12.3 5.83325 10 5.83325ZM1.66671 10.8333H3.33337C3.79171 10.8333 4.16671 10.4583 4.16671 9.99992C4.16671 9.54158 3.79171 9.16658 3.33337 9.16658H1.66671C1.20837 9.16658 0.833374 9.54158 0.833374 9.99992C0.833374 10.4583 1.20837 10.8333 1.66671 10.8333ZM16.6667 10.8333H18.3334C18.7917 10.8333 19.1667 10.4583 19.1667 9.99992C19.1667 9.54158 18.7917 9.16658 18.3334 9.16658H16.6667C16.2084 9.16658 15.8334 9.54158 15.8334 9.99992C15.8334 10.4583 16.2084 10.8333 16.6667 10.8333ZM9.16671 1.66659V3.33325C9.16671 3.79158 9.54171 4.16658 10 4.16658C10.4584 4.16658 10.8334 3.79158 10.8334 3.33325V1.66659C10.8334 1.20825 10.4584 0.833252 10 0.833252C9.54171 0.833252 9.16671 1.20825 9.16671 1.66659ZM9.16671 16.6666V18.3333C9.16671 18.7916 9.54171 19.1666 10 19.1666C10.4584 19.1666 10.8334 18.7916 10.8334 18.3333V16.6666C10.8334 16.2083 10.4584 15.8333 10 15.8333C9.54171 15.8333 9.16671 16.2083 9.16671 16.6666ZM4.99171 3.81658C4.66671 3.49159 4.13337 3.49159 3.81671 3.81658C3.49171 4.14158 3.49171 4.67492 3.81671 4.99158L4.70004 5.87492C5.02504 6.19992 5.55837 6.19992 5.87504 5.87492C6.19171 5.54992 6.20004 5.01658 5.87504 4.69992L4.99171 3.81658ZM15.3 14.1249C14.975 13.7999 14.4417 13.7999 14.125 14.1249C13.8 14.4499 13.8 14.9833 14.125 15.2999L15.0084 16.1833C15.3334 16.5083 15.8667 16.5083 16.1834 16.1833C16.5084 15.8583 16.5084 15.3249 16.1834 15.0083L15.3 14.1249ZM16.1834 4.99158C16.5084 4.66658 16.5084 4.13325 16.1834 3.81658C15.8584 3.49159 15.325 3.49159 15.0084 3.81658L14.125 4.69992C13.8 5.02492 13.8 5.55825 14.125 5.87492C14.45 6.19159 14.9834 6.19992 15.3 5.87492L16.1834 4.99158ZM5.87504 15.2999C6.20004 14.9749 6.20004 14.4416 5.87504 14.1249C5.55004 13.7999 5.01671 13.7999 4.70004 14.1249L3.81671 15.0083C3.49171 15.3333 3.49171 15.8666 3.81671 16.1833C4.14171 16.4999 4.67504 16.5083 4.99171 16.1833L5.87504 15.2999Z"
                          fill="#D4AF37"
                        />
                      </svg>
                    </span>
                    <p> 11 Days </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="arraval">
              <h1> Departure & Arrival Information </h1>
              <div className="arrival-svg">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="15"
                      rx="2"
                      stroke="#D4AF37"
                      stroke-width="2"
                    />
                    <path
                      d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z"
                      fill="#D4AF37"
                    />
                    <path
                      d="M7 3L7 6"
                      stroke="#D4AF37"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17 3L17 6"
                      stroke="#D4AF37"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <p> 16 Jan 2024 - 26 Jan 2024 </p>
              </div>
            </div>
            <div className="hilton-main">
              <div className="custom-checkbox-container">
                <label className="checkbox-wrapper" htmlFor="customCircleCheck">
                  <input
                    type="checkbox"
                    name="customCircleCheck"
                    id="customCircleCheck"
                    checked
                    onChange={handleCheckboxChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-indicator"></span>
                </label>
              </div>
              <div className="hilton-left hil-left">
                <div className="hilton-makk">
                  <p> 5-Nights Makkah </p>
                </div>
                <div className="makk-hilton">
                  <span>
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
                  </span>
                  <p> Hilton Suites/Conrad Makkah </p>
                </div>
                <div className="makk-hilton">
                  <span>
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
                  </span>
                  <p> Breakfast </p>
                </div>
              </div>
              <div className="hilton-left">
                <div className="hilton-makk">
                  <p> 5-Nights Madina </p>
                </div>
                <div className="makk-hilton">
                  <span>
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
                  </span>
                  <p> Dallah Taiba </p>
                </div>
                <div className="makk-hilton">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="7.5"
                        stroke="#FF3B30"
                        stroke-width="2"
                      />
                      <path d="M15 15L5 5" stroke="#FF3B30" stroke-width="2" />
                    </svg>
                  </span>
                  <p>
                    <em> NO MEAL </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="hilton-main">
              <div className="custom-checkbox-container">
                <label className="checkbox-wrapper" htmlFor="CustomCircleCheck-1">
                  <input
                    type="checkbox"
                    name="CustomCircleCheck-1"
                    id="CustomCircleCheck-1"
                    checked
                    onChange={handleCheckboxChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-indicator"></span>
                </label>
              </div>
              <div className="hilton-left hil-left">
                <div className="hilton-makk">
                  <p> 5-Nights Makkah </p>
                </div>
                <div className="makk-hilton">
                  <span>
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
                  </span>
                  <p> Hilton Suites/Conrad Makkah </p>
                </div>
                <div className="makk-hilton">
                  <span>
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
                  </span>
                  <p> Breakfast </p>
                </div>
              </div>
              <div className="hilton-left">
                <div className="hilton-makk">
                  <p> 5-Nights Madina </p>
                </div>
                <div className="makk-hilton">
                  <span>
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
                  </span>
                  <p> Dallah Taiba </p>
                </div>
                <div className="makk-hilton">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="7.5"
                        stroke="#FF3B30"
                        stroke-width="2"
                      />
                      <path d="M15 15L5 5" stroke="#FF3B30" stroke-width="2" />
                    </svg>
                  </span>
                  <p>
                    <em> NO MEAL </em>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="prices-main">
              <div className="price-hed">
                <h1> Package Price Detail </h1>
              </div>
              <div className="price-cunt">
                <div className="pricedon-main">
                  <div className="prie-doulb">
                    <span>
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 9.5C11.3472 9.5 13.25 7.59721 13.25 5.25C13.25 2.90279 11.3472 1 9 1C6.65279 1 4.75 2.90279 4.75 5.25C4.75 7.59721 6.65279 9.5 9 9.5Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M9 10.375C5.0609 10.375 1.6825 13.033 1.6825 16.5C1.6825 16.9861 2.07135 17.375 2.5575 17.375H15.4425C15.9286 17.375 16.3175 16.9861 16.3175 16.5C16.3175 13.033 12.9391 10.375 9 10.375Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M15 9.5C17.3472 9.5 19.25 7.59721 19.25 5.25C19.25 2.90279 17.3472 1 15 1C12.6528 1 10.75 2.90279 10.75 5.25C10.75 7.59721 12.6528 9.5 15 9.5Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M15 10.375C11.0609 10.375 7.6825 13.033 7.6825 16.5C7.6825 16.9861 8.07135 17.375 8.5575 17.375H21.4425C21.9286 17.375 22.3175 16.9861 22.3175 16.5C22.3175 13.033 18.9391 10.375 15 10.375Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                      </svg>
                    </span>
                    <p> DOUBLE </p>
                  </div>
                  <div className="ux-main price">
                    <p>
                      {" "}
                      4530{" "}
                      <span>
                        {" "}
                        SR / <em> person </em>{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="pricedon-main">
                  <div className="prie-doulb">
                    <span>
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 9.5C11.3472 9.5 13.25 7.59721 13.25 5.25C13.25 2.90279 11.3472 1 9 1C6.65279 1 4.75 2.90279 4.75 5.25C4.75 7.59721 6.65279 9.5 9 9.5Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M9 10.375C5.0609 10.375 1.6825 13.033 1.6825 16.5C1.6825 16.9861 2.07135 17.375 2.5575 17.375H15.4425C15.9286 17.375 16.3175 16.9861 16.3175 16.5C16.3175 13.033 12.9391 10.375 9 10.375Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M15 9.5C17.3472 9.5 19.25 7.59721 19.25 5.25C19.25 2.90279 17.3472 1 15 1C12.6528 1 10.75 2.90279 10.75 5.25C10.75 7.59721 12.6528 9.5 15 9.5Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M15 10.375C11.0609 10.375 7.6825 13.033 7.6825 16.5C7.6825 16.9861 8.07135 17.375 8.5575 17.375H21.4425C21.9286 17.375 22.3175 16.9861 22.3175 16.5C22.3175 13.033 18.9391 10.375 15 10.375Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                      </svg>
                    </span>
                    <p> DOUBLE </p>
                  </div>
                  <div className="ux-main price">
                    <p>
                      {" "}
                      4530
                      <span>
                        {" "}
                        SR / <em> person </em>{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="pricedon-main">
                  <div className="prie-doulb">
                    <span>
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 9.5C11.3472 9.5 13.25 7.59721 13.25 5.25C13.25 2.90279 11.3472 1 9 1C6.65279 1 4.75 2.90279 4.75 5.25C4.75 7.59721 6.65279 9.5 9 9.5Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M9 10.375C5.0609 10.375 1.6825 13.033 1.6825 16.5C1.6825 16.9861 2.07135 17.375 2.5575 17.375H15.4425C15.9286 17.375 16.3175 16.9861 16.3175 16.5C16.3175 13.033 12.9391 10.375 9 10.375Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M15 9.5C17.3472 9.5 19.25 7.59721 19.25 5.25C19.25 2.90279 17.3472 1 15 1C12.6528 1 10.75 2.90279 10.75 5.25C10.75 7.59721 12.6528 9.5 15 9.5Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                        <path
                          d="M15 10.375C11.0609 10.375 7.6825 13.033 7.6825 16.5C7.6825 16.9861 8.07135 17.375 8.5575 17.375H21.4425C21.9286 17.375 22.3175 16.9861 22.3175 16.5C22.3175 13.033 18.9391 10.375 15 10.375Z"
                          fill="#D4AF37"
                          stroke="white"
                        />
                      </svg>
                    </span>
                    <p> DOUBLE </p>
                  </div>
                  <div className="ux-main price">
                    <p>
                      {" "}
                      4530
                      <span>
                        {" "}
                        SR / <em> person </em>{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-pock fix2">
              <div className="primary-btn btnpok">
                <Link to="/paydtls"> Book Now </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cntr-uma">
          <div className="line-uma"></div>
          <div className="or-uma">
            <span>
              <img src={Umlaline} alt="" />
            </span>
          </div>
          <div className="line line-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Flexible;
