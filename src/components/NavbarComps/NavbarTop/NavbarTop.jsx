import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function NavbarTop() {
  return (
    <div id='navbarTop'>
        <div className="navbarTop_container">
            <div className="navbarTop_container_logo">
                <img src="https://justicia.qodeinteractive.com/wp-content/uploads/2018/10/h1-logo-white.png" alt="" />
            </div>
            <div className="navbarTop_container_icons">
                <div className="date">
                    <div className="date_top">
                        <div className="date_top_icn"><i class="fa-regular fa-clock"></i></div>
                        <div className="date_top_time"><p>9:00-18:00</p></div>
                        </div>
                        <div className="date_bottom">
                            <p>Our Opening Hours Mon - Fri</p>
                        </div>

                </div>
                <Link to={"tel:0775147770"}><div className="call">
                <div className="call_top">
                        <div className="call_top_icn"><i class="fa-solid fa-phone"></i></div>
                        <div className="call_top_number"><p>077-514-77-70</p></div>
                        
                        </div>
                        

                        <div className="call_bottom">
                            <p>Call us For Free Consultation</p>
                        </div>

                </div></Link>
                <div className="instagram">
                <i class="fa-brands fa-instagram"></i><p>Instagram</p>
                </div>
                <div className="facebook"><i class="fa-brands fa-facebook-f"></i><p>Facebook</p></div>
                <div className="twitter"><i class="fa-brands fa-x-twitter"></i><p>Twitter</p></div>
                <div className="whatsapp"><i class="fa-brands fa-whatsapp"></i><p>Whatsapp</p></div>

            </div>
        </div>
    </div>
  )
}

export default NavbarTop