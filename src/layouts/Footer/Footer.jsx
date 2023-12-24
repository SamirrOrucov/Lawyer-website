import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <div className="footer_container">
        <div className="footer_container_top">
          <div className="footer_container_top_in">
            <div className="footer_container_top_in_about all">
              <p className="head">About Us</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                ducimus ipsam necessitatibus.
              </p>
              <div className="icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </div>
            <div className="footer_container_top_in_expertise all">
              <p className="head">Our Expertise</p>
              <ul>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Serious car
                  crash
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Brain injury
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Truck accidents
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Semi-truck
                  collision
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Motorcycle
                  accidents
                </li>
              </ul>
            </div>
            <div className="footer_container_top_in_location all">
              <p className="head">Baku,Azerbaijan</p>
              <p className="street">Heydər Əliyev küçəsi, 95</p>
              <p className="number">077-514-77-70</p>
              <p className="email">samiroruclu10@gmail.com</p>
            </div>
            <div className="footer_container_top_in_location all">
              <p className="head">Ganja,Azerbaijan</p>
              <p className="street">Heydər Əliyev küçəsi, 95</p>
              <p className="number">077-514-77-70</p>
              <p className="email">samiroruclu10@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer_container_bottom">
          <div className="footer_container_bottom_container">
            <ul>
              <Link>Home</Link>
              <Link>Services</Link>
              <Link>Faq</Link>
              <Link>Carreers</Link>
            </ul>
            <p>© 2023 Gradiant, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
