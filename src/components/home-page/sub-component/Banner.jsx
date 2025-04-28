import React from 'react'
import { Link } from 'react-router-dom'
// import '../../../assets/css/style.css'
// import { bannerbackb, bannerbacki } from "../../../assets/images";

const Banner = () => {
  return (
    <section className='banner-section'>
      <div className="container">
        <div className="main-banner">
          <div className="banner-main">
            <div className="bannar-left">
              <h1> Embark on Your  </h1>
              <h1> <em> Sacred Journey </em> with Ease </h1>
              <p> Discover exclusive Umrah packages, connect with trusted agents, and book
                 your spiritual pilgrimage with just a few clicks.</p>
            </div>
            <div className="banner-right">
              <div className="right-para">
              <p> Your trusted platform for Umrah bookings, offering tailored packages 
              for every budget and seamless support throughout your pilgrimage.</p>
              </div>
              <div className="btn-right">
                      <div className="primary-btn btnright"> <Link to="/packagemain">Explore Packages</Link> </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Banner
