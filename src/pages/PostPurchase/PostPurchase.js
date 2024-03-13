import React, { useEffect } from "react";
import "./PostPurchase.scss";
import LOGO from "../../assets/images/logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";


const PostPurchase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;


 
  useEffect(() => {
    console.log("Data order: ", data)
  }, [data])


  const goBack = () => {
    navigate("/products")
  }

  return (
    <div className="PostPurchase">
      <div className="PostPurchase-container">
        <div className="finish-purchase">
          <i class="bi bi-check2-circle"></i>
        </div>
        <div className="text">
          <h2>Cảm ơn vì đã tin tưởng Đồng Guitar</h2>
          <p>Đơn hàng của bạn đã được hệ thống ghi nhận</p>
          <br></br>
          <p>Mã đơn hàng: <span><b>{data.Code}</b></span></p>
          <p>Kiểm tra địa chỉ Email của bạn để xem chi tiết thông tin về đơn hàng hoặc liên hệ chúng tôi để được hỗ trợ. </p>
        </div>
        <div className="back">
          <button onClick={goBack}>Tiếp tục mua hàng</button>
        </div>
      </div>
    </div>
  );
};

export default PostPurchase;
