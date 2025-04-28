import React from 'react'
import { Chadmain, Chadround } from '../../../assets/images'

function Joinusimg() {
  return (
    <section className='joinus-section'>
        <div className="container">
            <div className="main-joinus">
               <div className="card joincard">
                    <div className="joinus-hed">
                        <h1> Join Us as an Umrah <em> Agent </em></h1>
                    </div>
                    <div className="joinus-seched">
                        <h3> Reach Pilgrims Worldwide, Grow Your Business </h3>
                        <p> Create Umrah packages, manage bookings, and connect with pilgrims easily. Start offering your services today.</p>
                    </div>
                    <div className="btn-primary joinbtn">
                        <h1> Get Started </h1>
                        <span>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6667 6L14.3739 5.29289L15.081 6L14.3739 6.70711L13.6667 6ZM1.16675 7C0.614463 7 0.166748 6.55228 0.166748 6C0.166748 5.44772 0.614463 5 1.16675 5V7ZM9.37385 0.292893L14.3739 5.29289L12.9596 6.70711L7.95964 1.70711L9.37385 0.292893ZM14.3739 6.70711L9.37385 11.7071L7.95964 10.2929L12.9596 5.29289L14.3739 6.70711ZM13.6667 7H1.16675V5H13.6667V7Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                    <div className="chadmain">
                        <img src={Chadmain} alt="" />
                    </div>
                    <div className="chadround">
                        <img src={Chadround} alt="" />
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Joinusimg
