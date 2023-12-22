import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
function NavbarMain() {
  return (
    <div id="navbarMain">
      <div className="navbarMain_container">
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
        <div className="callButton">
            <button>Call Now <i class="fa-solid fa-scale-balanced"></i></button>
        </div>
      </div>
    </div>
  );
}

export default NavbarMain;
