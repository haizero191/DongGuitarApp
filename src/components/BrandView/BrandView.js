import React, { useEffect, useState } from "react";
import "./BrandView.scss";
import Slider from "react-slick";

const BrandView = () => {
  const [settings, setSettings] = useState({
    // autoplay: true,
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplayspeed: 500,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      var newSetting = settings
      newSetting.slidesToShow = 3;
      setSettings(newSetting);
    }
  }, []);

  return (
    <div className="BrandView">
      {settings && (
        <Slider {...settings}>
          <div className="brand-icon">
            <div className="image-contain">
              <img src="data:image/png;base64,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" />
            </div>
          </div>
          <div className="brand-icon">
            <div className="image-contain">
              <img src="data:image/png;base64,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" />
            </div>
          </div>
          <div className="brand-icon">
            <div className="image-contain">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1BFtNXsJtkQ5qc9rijE-I-isdwumGNQUCxSkASEcWEPU31ZIpnHIHy8jOq-Fe2p5hmM&usqp=CAU" />
            </div>
          </div>
          <div className="brand-icon">
            <div className="image-contain">
              <img src="https://images.crutchfieldonline.com/ImageBank/v20160819104300/mobile/brandedstores/Marshall_logo.png" />
            </div>
          </div>
          <div className="brand-icon">
            <div className="image-contain">
              <img src="https://welchmusic.com/assets/img/affiliates/client-logo-02.jpg" />
            </div>
          </div>
          <div className="brand-icon">
            <div className="image-contain">
              <img src="https://i.pinimg.com/736x/a5/61/a2/a561a297aab636d9421787ee18059deb.jpg" />
            </div>
          </div>
          <div className="brand-icon">
            <div className="image-contain">
              <img src="data:image/png;base64,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" />
            </div>
          </div>
        </Slider>
      )}
    </div>
  );
};

export default BrandView;
