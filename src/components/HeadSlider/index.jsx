import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import "./index.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function HeadSlider() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    
    <div id='headSlider'>
        <Slider {...settings}>
          
          <div>
            <img src="https://justicia.qodeinteractive.com/wp-content/uploads/2018/09/h2-img-1.jpg" />
            <div className="text" data-aos="fade-left">
              <h2>Client Focused</h2>
              <p>The best law practices & services for all your legal needs.</p>
              <button>Call Us</button>
            </div>
          </div>
          <div>
            <img src="https://justicia.qodeinteractive.com/wp-content/uploads/2018/10/h2-slider-3.jpg" />
            <div className="text" data-aos="fade-right">
              <h2>Client Focused</h2>
              <p>The best law practices & services for all your legal needs.</p>
              <button>Call Us</button>
            </div>
          </div>
          <div>
            <img src="https://justicia.qodeinteractive.com/wp-content/uploads/2018/10/h2-slider-2.jpg" />
            <div className="text" data-aos="fade-down-right">
              <h2>Client Focused</h2>
              <p>The best law practices & services for all your legal needs.</p>
              <button>Call Us</button>
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default HeadSlider