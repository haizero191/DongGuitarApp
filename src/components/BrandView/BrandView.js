import React from "react";
import "./BrandView.scss";
import Slider from "react-slick";

const BrandView = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="BrandView">
      <Slider {...settings}>
        <div className="brand-icon">
          <div className="image-contain">
            <img src="https://images.crutchfieldonline.com/ImageBank/v20160819104300/mobile/brandedstores/Marshall_logo.png" />
          </div>
        </div>
        <div className="brand-icon">
          <div className="image-contain">
            <img src="https://nhaccubmt.com/uploads/nha-phan-phoi/untitled.jpg" />
          </div>
        </div>
        <div className="brand-icon">
          <div className="image-contain">
            <img src="https://nhaccubmt.com/uploads/nha-phan-phoi/4.jpg" />
          </div>
        </div>
        <div className="brand-icon">
          <div className="image-contain">
            <img src="https://nhaccubmt.com/uploads/nha-phan-phoi/martin-co-319.jpg" />
          </div>
        </div>
        <div className="brand-icon">
          <div className="image-contain">
            <img src="https://nhaccubmt.com/uploads/nha-phan-phoi/untitled_720_519.png" />
          </div>
        </div>
        <div className="brand-icon">
          <div className="image-contain">
            <img src="https://nhaccubmt.com/uploads/nha-phan-phoi/6.jpg" />
          </div>
        </div>
        <div className="brand-icon">
          <div className="image-contain">
            <img src="https://images.crutchfieldonline.com/ImageBank/v20160819104300/mobile/brandedstores/Marshall_logo.png" />
          </div>
        </div>
      </Slider>
      {/* <div className='brand-list'>
            <div className='brand-icon'>
                <img src='https://images.crutchfieldonline.com/ImageBank/v20160819104300/mobile/brandedstores/Marshall_logo.png'/>
            </div>
            <div className='brand-icon'>
                <img src='https://images.crutchfieldonline.com/ImageBank/v20160819104300/mobile/brandedstores/Marshall_logo.png'/>
            </div>
            <div className='brand-icon'>
                <img src='https://images.crutchfieldonline.com/ImageBank/v20160819104300/mobile/brandedstores/Marshall_logo.png'/>
            </div>
            <div className='brand-icon'>
                <img src='https://images.crutchfieldonline.com/ImageBank/v20160819104300/mobile/brandedstores/Marshall_logo.png'/>
            </div>
        </div> */}
    </div>
  );
};

export default BrandView;
