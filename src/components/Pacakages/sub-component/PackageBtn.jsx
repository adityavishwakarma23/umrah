import React from 'react'
import {Link} from 'react-router-dom'


const PackageBtn = () => {
  return (
    <section className='packages-details'>
    <div className="packages">
        <div className="container">
            <div className="pkg-details-main">
                <div className="pkg-details-text">
                    <p>Packages</p>
                </div>
                <div className="fix-packages-main">
                    <div className="fixed-pkg">
                        <Link to="">Fixed Packages</Link>
                    </div>
                    <div className="flex-pkg">
                        <Link to="">Flexible Packages</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default PackageBtn
