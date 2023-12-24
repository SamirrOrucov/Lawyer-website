import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"
function NavbarTop() {
  const [show, setShow] = useState(false)
  function handleShowNavbar() {
    setShow(!show)
    
  }
  return (
    <div id='navbarTop'>
        <div className="navbarTop_container">
            <div className="navbarTop_container_logo">
                <img src="https://justicia.qodeinteractive.com/wp-content/uploads/2018/10/h1-logo-white.png" alt="" />
            </div>
            <div className="navbarTop_container_icons">
                <div className="date">
                    <div className="date_top">
                        <div className="date_top_icn"><i className="fa-regular fa-clock"></i></div>
                        <div className="date_top_time"><p>9:00-18:00</p></div>
                        </div>
                        <div className="date_bottom">
                            <p>Our Opening Hours Mon - Fri</p>
                        </div>

                </div>
                <Link to={"tel:0775147770"}><div className="call">
                <div className="call_top">
                        <div className="call_top_icn"><i className="fa-solid fa-phone"></i></div>
                        <div className="call_top_number"><p>077-514-77-70</p></div>
                        
                        </div>
                        

                        <div className="call_bottom">
                            <p>Call us For Free Consultation</p>
                        </div>

                </div></Link>
                <div className="instagram sIcons">
                <i className="fa-brands fa-instagram"></i><p>Instagram</p>
                </div>
                <div className="facebook sIcons"><i className="fa-brands fa-facebook-f"></i><p>Facebook</p></div>
                <div className="twitter sIcons"><i className="fa-brands fa-x-twitter"></i><p>Twitter</p></div>
                <div className="whatsapp sIcons"><i className="fa-brands fa-whatsapp"></i><p>Whatsapp</p></div>
                <div className="menu" onClick={handleShowNavbar}><i className="fa-solid fa-bars"></i></div>



            </div>
        </div>
        <div className="hidden  ">
        <div className={`hidden_NavbarMain ${ show?"show_hidden_NavbarMain":""} `}>
        <ul>
          <NavLink>
            HOME <i className="fa-solid fa-star"></i>
          </NavLink>
          <Link>
            TEAM <i className="fa-solid fa-star"></i>
          </Link>
          <Link>
            BLOG <i className="fa-solid fa-star"></i>
          </Link>
          <Link>
            OUR EXPERTISE <i className="fa-solid fa-star"></i>
          </Link>
          <Link>
            SHOP <i className="fa-solid fa-star"></i>
          </Link>
          <Link>
            ELEMENTS <i className="fa-solid fa-star"></i>
          </Link>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default NavbarTop