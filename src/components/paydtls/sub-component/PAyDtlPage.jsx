import React from 'react';
import { Link } from 'react-router-dom';
import { Payfoem1, Payfomun, Paypal, Upi, VisaPay } from '../../../assets/images';

const PAyDtlPage = () => {
  return (
    <div>
      <section className='payment-info-section'>
            <div className="payment-page">
                <div className="container">
                    <div className="p-info-main">
                        <div className="p-back-main">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black" />
                                </svg>
                            </span>
                            <p>Back</p>
                        </div>
                        <div className="card modifiy-info">
                            <div className="personalc-adr-main">
                                <div className="info-left-side">
                                    <div className="personal-payment-main">
                                        <div className="info-pay-main pymnt ">
                                            <Link to="/info">Personal Info. </Link>
                                            <span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 18L15 12L9 6" stroke="#78716C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="payment-main clr">
                                            <Link to="">Payment</Link>
                                        </div>
                                    </div>
                                    <div className="pay-more-info-main">
                                    <div className="pay-client-info-second">
                                        <div className="pay-other-info-details">
                                            <label htmlFor="">First Name</label>
                                            <input type="text" name="" id="" placeholder='Enter your first name' />
                                        </div>
                                        <div className="pay-other-info-details cvv-setup">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" name="" id="" placeholder='Enter your last name' />
                                            
                                        </div>
                                    </div>
                                    <div className="client-info">
                                            <label htmlFor="">Card Holder Name</label>
                                            <input type="text" placeholder='Enter name here' />
                                        </div>
                                        <div className="client-info">
                                            <label htmlFor="">Card Holder Name</label>
                                            <input type="text" placeholder='Enter name here' />
                                        </div>
                                    </div>
                                    
                                    <div className="pay-client-info-second">
                                        <div className="pay-other-info-details">
                                            <label htmlFor="">First Name</label>
                                            <input type="text" name="" id="" placeholder='Enter your first name' />
                                        </div>
                                        <div className="pay-other-info-details cvv-setup">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" name="" id="" placeholder='Enter your last name' />
                                            
                                        </div>
                                    </div>
                                    <div className="pay-client-info">
                                       
                                        <div className="client-info">
                                            <label htmlFor="">Full Address</label>
                                            <textarea  id="view" name="view" rows="2" cols="10" placeholder='4140 Parker Rd. Allentown, New Mexico 31134'/>
                                        </div>
                                    </div>
                                    <div className="payment-save-main">
                                        <div className="payment-main">
                                            <input type="checkbox" name="" id="" />
                                        </div>
                                        <div className="payment-sesure-text">
                                            <p>Save card securely for further payments</p>
                                        </div>
                                    </div>
                                    <div className="payment-save-maine">
                                        <div className="payment-main">
                                            <input type="checkbox" name="" id="" />
                                        </div>
                                        <div className="payment-sesure-text">
                                            <p>Save card securely for further payments</p>
                                        </div>
                                    </div>
                                    <div className="payment-btns-main payfom">
                                       
                                        <p>Make payment</p>
                                    </div>
                                </div>
                                <div className="info-right-side">
                                    <div className="select-pkg-info">
                                        <p>Selected Package</p>
                                    </div>
                                    <div className="personal details-main">
                                        <div className="p-info-img">
                                            <img src={Payfomun} alt="" />
                                        </div>
                                        <div className="personal-pro-info-main">
                                            <div className="personal-info-img">
                                                <img src={Payfoem1} alt="" />
                                            </div>
                                            <div className="personal-info-text-main">
                                                <p>Agent</p>
                                                <h5>Md. Sharifsudeen kalf</h5>
                                            </div>
                                        </div>
                                        <div className="personal exe-pkg">
                                            <p>EXECUTIVE Umrah Packages</p>
                                        </div>
                                        <div className="personal-info-day-night">
                                            <p>10 Nights | 11 Days</p>
                                        </div>
                                    </div>
                                    <div className="personal date-main">
                                        <div className="info-date-text">
                                            <p>Date</p>
                                        </div>
                                        <div className="p-other-date-info">
                                            <span>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6.46143" width="18" height="15" rx="2" stroke="#D4AF37" stroke-width="2" />
                                                    <path d="M3 10.4614C3 8.57581 3 7.633 3.58579 7.04721C4.17157 6.46143 5.11438 6.46143 7 6.46143H17C18.8856 6.46143 19.8284 6.46143 20.4142 7.04721C21 7.633 21 8.57581 21 10.4614H3Z" fill="#D4AF37" />
                                                    <path d="M7 3.46143L7 6.46143" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M17 3.46143L17 6.46143" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                            </span>
                                            <p>16 Jan 2024 - 26 Jan 2024</p>
                                        </div>
                                    </div>
                                    <div className="personal prize-details">
                                        <p>Price Detail</p>
                                    </div>
                                    <div className="personal-double-info-main">
                                        <div className="double-left">
                                            <span>
                                                <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 9.96143C11.3472 9.96143 13.25 8.05864 13.25 5.71143C13.25 3.36422 11.3472 1.46143 9 1.46143C6.65279 1.46143 4.75 3.36422 4.75 5.71143C4.75 8.05864 6.65279 9.96143 9 9.96143Z" fill="#D4AF37" stroke="white" />
                                                    <path d="M9.00012 10.8364C5.06102 10.8364 1.68262 13.4944 1.68262 16.9614C1.68262 17.4476 2.07147 17.8364 2.55762 17.8364H15.4426C15.9288 17.8364 16.3176 17.4476 16.3176 16.9614C16.3176 13.4944 12.9392 10.8364 9.00012 10.8364Z" fill="#D4AF37" stroke="white" />
                                                    <path d="M15 9.96143C17.3472 9.96143 19.25 8.05864 19.25 5.71143C19.25 3.36422 17.3472 1.46143 15 1.46143C12.6528 1.46143 10.75 3.36422 10.75 5.71143C10.75 8.05864 12.6528 9.96143 15 9.96143Z" fill="#D4AF37" stroke="white" />
                                                    <path d="M15.0001 10.8364C11.061 10.8364 7.68262 13.4944 7.68262 16.9614C7.68262 17.4476 8.07147 17.8364 8.55762 17.8364H21.4426C21.9288 17.8364 22.3176 17.4476 22.3176 16.9614C22.3176 13.4944 18.9392 10.8364 15.0001 10.8364Z" fill="#D4AF37" stroke="white" />
                                                </svg>
                                            </span>
                                            <p>DOUBLE   -</p>
                                        </div>
                                        <div className="double-right">
                                            <h1>4530 <span>SR / <em> person</em></span></h1>
                                        </div>
                                    </div>
                                    <div className="personal-some-other-count">
                                        <p>Per Person</p>
                                        <h5>4530 SR</h5>
                                    </div>
                                    <div className="personal-some-other-count">
                                        <p>4530 x 2 person</p>
                                        <h5>9060 SR</h5>
                                    </div>
                                    <div className="personal-some-other-count-0">
                                        <p>Taxes inc.</p>
                                        <h5>230 SR</h5>
                                    </div>
                                    <div className="personal-some-other-count-1">
                                        <p>Total</p>
                                        <h5>9290 SR</h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
  );
}

export default PAyDtlPage;
