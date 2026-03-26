import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">

            <div className="footer-content-left">

                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatum sapiente repellat illo sit nihil voluptates porro rem omnis molestiae, dolorem hic. Asperiores exercitationem suscipit accusantium, veniam, aut neque ducimus similique officia doloribus, odio sapiente ad cum dolor ullam saepe quasi? Excepturi deserunt quisquam error quia quas veniam voluptas saepe.</p>
                
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>

            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
            </div>

            <div className="footer-content-right">

                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>

            </div>

            

        </div>

        <hr />
        <p className="footer-copyright">
            Copyright 2026 Tomatoo.com - All rights reserved
        </p>


      
    </div>
  )
}

export default Footer
