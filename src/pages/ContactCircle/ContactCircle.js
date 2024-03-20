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
      <div className="circle" onClick={() => navigateToUrl('https://www.facebook.com/profile.php?id=61554988470959')}>
        <i class="bi bi-facebook"></i>
      </div>
      <div className="circle">
        <img src={ZALO} />
      </div>
    </div>
  );
};

export default ContactCircle;
