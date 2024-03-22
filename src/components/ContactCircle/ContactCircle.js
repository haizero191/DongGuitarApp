import React from "react";
import "./ContactCircle.scss";
import ZALO from "../../assets/images/icon-zalo-100.png";
const ContactCircle = () => {
  const navigateToUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="ContactCircle">
      <div className="text">
        <span>Contact us</span>
      </div>
      <div
        className="circle"
        onClick={() =>
          navigateToUrl(
            "https://www.facebook.com/profile.php?id=61554988470959"
          )
        }
      >
        <i class="bi bi-facebook"></i>
      </div>
      <div className="circle">
        <img src={ZALO} />
      </div>
      <div className="circle phone">
        <i class="bi bi-telephone"></i>
        <div className="phone-number">0886634699 - Mr.Đức</div>
      </div>
    </div>
  );
};

export default ContactCircle;
