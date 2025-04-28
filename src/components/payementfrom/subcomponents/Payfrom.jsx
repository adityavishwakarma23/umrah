import React from 'react'
import { Payfoem1, Payfomun, Paypal, Upi, VisaPay } from '../../../assets/images'
import { Link} from 'react-router-dom'

const Payfrom = () => {
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
                                            <Link to="/info">Personal </Link>
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
                                        <div className="pay-visa-main">
                                            <div className="visa-logos-main">
                                                <span>
                                                    <img src={VisaPay} alt="" />
                                                </span>
                                                <p>Credit Card</p>
                                            </div>
                                            <div className="pay-click-method">

                                                <input type="radio" name="radio" id="radio" />
                                            </div>
                                        </div>
                                        <div className="pay-visa-main">
                                            <div className="visa-logos-main">
                                                <span>
                                                    <img src={Upi} alt="" />
                                                </span>
                                                <p>UPI</p>
                                            </div>
                                            <div className="pay-click-method">
                                                <input type="radio" name="radio" id="" />
                                            </div>
                                        </div>
                                        <div className="pay-visa-main">
                                            <div className="visa-logos-main">
                                                <span>
                                                    <img src={Paypal} alt="" />
                                                </span>
                                                <p>PayPal</p>
                                            </div>
                                            <div className="pay-click-method">
                                                <input type="radio" name="radio" id="radio" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pay-client-info">
                                        <div className="client-info">
                                            <label htmlFor="">Card Holder Name</label>
                                            <input type="text" placeholder='Enter name here' />
                                        </div>
                                        <div className="client-info">
                                            <label htmlFor="">Card Number</label>
                                            <input type="text" placeholder='0000 0000 0000 0000' />
                                        </div>
                                    </div>
                                    <div className="pay-client-info-second">
                                        <div className="pay-other-info-details">
                                            <label htmlFor="">Expiration Date</label>
                                            <input type="date" name="" id="" placeholder='--/--' />
                                        </div>
                                        <div className="pay-other-info-details cvv-setup">
                                            <label htmlFor="">CVV</label>
                                            <input type="text" name="" id="" placeholder='...' />
                                            <div className="cvv-logo">
                                                <span>
                                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.99985 21.5386C9.75985 21.5386 9.51986 21.5087 9.28986 21.4387C4.09986 20.0087 0.339844 15.1586 0.339844 9.89862V5.5086C0.339844 4.3886 1.14985 3.17865 2.18985 2.74865L7.75986 0.468623C9.20986 -0.121377 10.7998 -0.121377 12.2398 0.468623L17.8098 2.74865C18.8498 3.17865 19.6599 4.3886 19.6599 5.5086V9.89862C19.6599 15.1486 15.8898 19.9987 10.7098 21.4387C10.4798 21.5087 10.2398 21.5386 9.99985 21.5386ZM9.99985 1.53863C9.42985 1.53863 8.86983 1.64865 8.32983 1.86865L2.75986 4.14862C2.27986 4.34862 1.83984 4.99861 1.83984 5.51861V9.90863C1.83984 14.4986 5.13985 18.7387 9.68985 19.9987C9.88985 20.0587 10.1098 20.0587 10.3098 19.9987C14.8598 18.7387 18.1599 14.4986 18.1599 9.90863V5.51861C18.1599 4.99861 17.7198 4.34862 17.2398 4.14862L11.6699 1.86865C11.1299 1.64865 10.5698 1.53863 9.99985 1.53863Z" fill="#292524" />
                                                    </svg>
                                                </span>
                                            </div>
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
                                    <div className="payment-btns-main">
                                        <p>Cancel</p>
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
  )
}

export default Payfrom
