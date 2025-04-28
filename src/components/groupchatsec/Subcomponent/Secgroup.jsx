import React from 'react';
import { Bookingimg, Chat1pho, Chat2pho, Chat3pho, kalel } from '../../../assets/images';
import { Link } from 'react-router-dom';

const Secgroup = () => {
  return (
    
      <section className="section-gropsec">
        <div className="container">
            <div className="gropsec-hed">
                <span>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7.5H3.83L9.42 1.91L8 0.5L0 8.5L8 16.5L9.41 15.09L3.83 9.5H16V7.5Z" fill="black"/>
                    </svg>
                </span>
                <p> Group </p>
            </div>
            <div className="card secgropmain">
              <div className="booking-hed">
                <div className="booking-leftmain">
                  <div className="booking-leftimg">
                    <img src={Bookingimg} alt="" />
                  </div>
                  <div className="booking-rightcunt">
                    <div className="pre-umra">
                      <div className="prebook">
                        <p> Booking Reference: </p>
                      </div>
                      <div className="preuma">
                        <p> UMR-12345678 </p>
                      </div>
                    </div>
                    <div className="pretive">
                      <div className="paytop-left">
                        <h1> Exclutive Umrah Packages </h1>
                      </div>
                      <div className="paytop-right">
                        <div className="student-days">
                          <div className="night">
                            <p> 10 Nights | 11 Days</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="booking-rightcunt">
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
                </div>
              </div>
              <div className="chakbookcunt-main">
                <div className="chatbook">
                  <p> Welcome to the group! Feel free to introduce yourself and connect with fellow travelers.
                    The admin will share important updates and instructions here.
                  </p>
                </div>
                <div className="acntchat-main">
                  <div className="acntchat">
                    <div className="acntchat-img">
                      <div className="chatonepho">
                        <img src={Chat1pho} alt="" />
                      </div>
                      <div className="chattwopho">
                        <img src={Chat2pho} alt="" />
                        <p> 9:20 PM </p>
                      </div>
                    </div>
                    <div className="acntchat-img">
                      <div className="chatonepho">
                        <img src={Chat1pho} alt="" />
                      </div>
                      <div className="chattwopho2">
                        <h1> تذكير: موعد مغادرتك للعمرة بعد 5 أيام! يرجى
                          التأكد من إكمال جميع الاستعدادات اللازمة، بما في ذلك المستندات 
                          وأساسيات السفر. أخبرنا إذا كنت بحاجة إلى أي مساعدة!</h1>
                        <p> 9:20 PM </p>
                      </div>
                    </div>
                    <div className="acntchat-img">
                      <div className="chatonepho">
                        <img src={Chat3pho} alt="" />
                      </div>
                      <div className="chattwopho2">
                        <h1>السلام عليكم! اسمي عائشة، وأنا مسافر من لندن
                          . أتطلع للقاء الجميع في مكة إن شاء الله!</h1>
                        <p> 9:20 PM </p>
                      </div>
                    </div>
                    <div className="chattwright2">
                      <h1> الحمدلله للجميع </h1>
                    </div>
                    <div className="chttwrightti">
                      <p> 9:20 PM </p>
                    </div>
                  </div>
                  <div className="inputsend-main">
                  <div className="sendin">
                    <input type="text" placeholder='Type here'/>
                  </div> 
                  <div className="sendbtn">
                    <div className="send-btn">
                       <Link to="">
                       <h1> SEND </h1>
                       <span>
                          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.33137 4.91369L4.09957 8.00805C4.37641 8.49252 4.51483 8.73476 4.51483 9.00033C4.51483 9.26589 4.37641 9.50813 4.09957 9.9926L2.33136 13.087C1.09306 15.254 0.473907 16.3375 0.956732 16.8748C1.43956 17.4121 2.58287 16.912 4.86949 15.9116L16.4784 10.8326C18.2739 10.0471 19.1717 9.65434 19.1717 9.00033C19.1717 8.34631 18.2739 7.95354 16.4784 7.16801L4.86949 2.0891C2.58287 1.0887 1.43956 0.5885 0.956732 1.12582C0.473907 1.66314 1.09306 2.74666 2.33137 4.91369Z" fill="#D4AF37"/>
                          </svg>
                        </span>
                       </Link> 
                       
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    
  );
}

export default Secgroup;
