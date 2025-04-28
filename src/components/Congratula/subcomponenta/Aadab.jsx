import React from 'react'
import { avatars, congraimg } from '../../../assets/images'
import { Link } from "react-router-dom"

const Aadab = () => {
  return (
    <div>
     <div className="section-congra">
        <div className="container">
          <div className="congra-main">
            <div className="congra-imgmain">
              <div className="conimg">
              <img src={congraimg} alt="" />
              </div>
              <div className="conimg-cunt">
                <h1> Congratulations!  </h1>
                <p> Your Umrah Package is Confirmed! </p>
              </div>
            </div>
            <div className="sec-cunt">
                <p> 
                  Your journey to the Holy Cities is now set. You’ve successfully
                   booked your Umrah package. We’ve sent a confirmation email with all the details to your inbox.
                </p>
              </div>
              <div className="sec-ancar">
                <ul>
                  <li> <Link to="">View My Bookingb </Link></li>
                  <li> <Link to="">Contact Support  </Link></li>
                  <li> <Link to="">Give Feedback </Link></li>
                </ul>
              </div>
            <div className="conthree-main">
              <div className="conthree-imgmain">
                <img src={avatars} alt="" />
                <span>
                  <p> Join Your Umrah Travel Group. </p>
                </span>
              </div>
              <div className="conthree-cunt">
                <h1> Send Request to Join </h1>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Aadab
