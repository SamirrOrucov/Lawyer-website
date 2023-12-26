import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
function NavbarMain() {
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    return () => window.removeEventListener("scroll", stickyNavbar);
  }, []);
  const stickyNavbar=()=>{
    if (window!==undefined) {
      let windowHeight=window.scrollY;
        windowHeight>350? setStickyClass("sticky-nav"):setStickyClass("")
      
    }
  }

  return (
    <div id="navbarMain" className={`${stickyClass}`}>
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
          <button>
            Call Now <i class="fa-solid fa-scale-balanced"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarMain;
