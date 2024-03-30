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
    // autoplay: true
  };
  return (
    <div className="Banner">
      <div className="slick-carousel">
        <Slider {...settings}>
          <div className="slide-item">
            <LazyLoadImage
              effect="blur"
              height={"100%"}
              src={
                "https://i.ytimg.com/vi/yBJ3VEHmtaI/maxresdefault.jpg"
              } // use normal <img> attributes as props
              width={"100%"}
            />
          </div>
          <div className="slide-item">
            <LazyLoadImage
              effect="blur"
              height={"100%"}
              src={
                "https://www.taylorguitars.com/sites/default/files/2022-02-08/AD27eFlametop-Gallery%2016.jpg"
              } // use normal <img> attributes as props
              width={"100%"}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
