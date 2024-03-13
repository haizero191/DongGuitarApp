import React from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Banner.scss";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="Banner">
      <div className="slick-carousel">
        <Slider {...settings}>
          <div className="slide-item">
            <LazyLoadImage
              effect="blur"
              height={'100%'}
              src={"https://stuff.fendergarage.com/images/m/H/n/DESKTOP-1.jpg"} // use normal <img> attributes as props
              width={'100%'}
            />
            {/* <img src="https://stuff.fendergarage.com/images/m/H/n/DESKTOP-1.jpg"/> */}
          </div>
          <div className="slide-item">
            <img src="https://stuff.fendergarage.com/images/g/6/2/Web_Squier_0425_23_NPI_Squier_Sonic_Series_Launch_HPS_DESKTOP.jpg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
