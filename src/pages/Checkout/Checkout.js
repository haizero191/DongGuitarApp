import React, { useEffect, useState } from "react";
import "./Checkout.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const Checkout = () => {
  const location = useLocation();
  const data = location.state;
  const [order, setOrder] = useState({
    Fullname: "",
    Phone: "",
    Email: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({
    Fullname: "Không được bỏ trống nội dung này !",
    Phone: "Không được bỏ trống nội dung này !",
    Email: "Không được bỏ trống nội dung này !",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  // Chuyển đổi sang định dạng VND
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(amount);
  };

  // Handle input change
  const handleInputChange = (event) => {
    var emptyFieldElem = document.getElementsByName(event.target.name)[0];
    var fieldParent = emptyFieldElem.parentNode;

    if (!event.target.value) {
      fieldParent.classList.add("invalid-field");
      setErrorMsg({
        ...errorMsg,
        [event.target.name]: "Nội dung này không được để trống !",
      });
    } else {
      if (
        fieldParent.classList.contains("invalid-field") &&
        event.target.value
      ) {
        fieldParent.classList.remove("invalid-field");
      }
      if (event.target.name === "Phone") {
        if (!isPhonenumberValid(event.target.value)) {
          setErrorMsg({ ...errorMsg, Phone: "Số điện thoại không hợp lệ !" });
          fieldParent.classList.add("invalid-field");
        }
      }
      if (event.target.name === "Email") {
        if (!isEmailValid(event.target.value)) {
          setErrorMsg({ ...errorMsg, Email: "Email không hợp lệ !" });
          fieldParent.classList.add("invalid-field");
        } else {
        }
      }
    }
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  // Lấy hình ảnh từ drive theo id
  const getImageFromDriver = (id) => {
    return `https://lh3.googleusercontent.com/d/${id}?authuser=0`;
  };

  const formCheck = (object) => {
    var formValid = true;
    for (const field in object) {
      if (field === "Phone") {
        if (!isPhonenumberValid(object[field])) {
          setErrorMsg({ ...errorMsg, Phone: "Số điện thoại không hợp lệ !" });
          var emptyFieldElem = document.getElementsByName(field)[0];
          var fieldParent = emptyFieldElem.parentNode;
          fieldParent.classList.add("invalid-field");
          formValid = false;
        }
      }
      if (field === "Email") {
        if (!isEmailValid(object[field])) {
          setErrorMsg({ ...errorMsg, Email: "Email không hợp lệ !" });
          var emptyFieldElem = document.getElementsByName(field)[0];
          var fieldParent = emptyFieldElem.parentNode;
          fieldParent.classList.add("invalid-field");
          formValid = false;
        } else {
        }
      }
      if (!object[field]) {
        setErrorMsg({
          ...errorMsg,
          [field]: "Nội dung này không được bỏ trống !",
        });
        var emptyFieldElem = document.getElementsByName(field)[0];
        var fieldParent = emptyFieldElem.parentNode;
        fieldParent.classList.add("invalid-field");
        formValid = false;
      }
    }

    if (!formValid) {
      return false;
    } else {
      return true;
    }
  };

  // Xử lí đặt hàng
  const handleCheckout = async () => {
    var newOrder = order;
    newOrder.Product = data._id;
    newOrder.PaymentCost = data.SellingPrice;
    setIsLoading(true);
    var Create_Order_Result = await axios({
      method: "post",
      url: process.env.REACT_APP_API_URL + "/api/orders/create",
      headers: {},
      data: newOrder,
    });

    console.log("Check order result: ", Create_Order_Result.data.data)

    if (Create_Order_Result.data.success === true) {
      setTimeout(() => {
        setIsLoading(false);
        navigate('/thanks', {state: Create_Order_Result.data.data})
      }, 500);
    }
  };

  // Confirm checkout
  const onConfirmCheckout = () => {
    if (window.confirm("Đồng Guitar - Xác nhận đặt đơn hàng này ?") === true) {
      if (formCheck(order)) {
        handleCheckout();
      }
    }
  };

  // Phone number checking
  const isPhonenumberValid = (phoneNumber) => {
    // Regular expression for Vietnamese phone numbers (updated as of 2024)
    const regex = /^(?:\+?84|0)(?:[3|5|7|8|9][0-9]{8}|1[2|6|8|9]\d{7})$/;
    return regex.test(phoneNumber);
  };

  // Email checking
  const isEmailValid = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  return (
    <div className="Checkout">
      <Loading isLoading={isLoading} opacity={0.6} />
      <div className="checkout-container">
        <div className="checkout-form">
          <div className="checkout-overlay">
            <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/427903488_122123195414166282_5988616060710111131_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEzusTxMe37i8vxXKDjj8LVaSgEWc03LPNpKARZzTcs88cxK1OZXYBjHyNquX2sW3brokxd31ELq56uYBrhCnr5&_nc_ohc=MERPJvcbq3oAX-cBA0N&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAfigxk-svmqezOk8-B6OrBs9xQPEyICl9MH0VNqhLFMA&oe=65EBC6CF" />
          </div>
          <div className="checkout-product">
            <div className="image">
              <img src={getImageFromDriver(data.Images[0].DriverId)} />
            </div>
            <div className="name">
              <h2>{data.Name}</h2>
            </div>
            <div className="info-p-field">
              <p>Nhãn hàng</p>
              <p>{data.Brand.Name}</p>
            </div>
            <div className="info-p-field">
              <p>Danh mục</p>
              <p>{data.Category.Name}</p>
            </div>
            <div className="info-p-field">
              <p>Số lượng</p>
              <p>1</p>
            </div>
            <div className="info-p-field price">
              <p>Total Cost</p>
              <p>{formatCurrency(data.SellingPrice)}</p>
            </div>
          </div>
          <div className="checkout-info-buy">
            <h2>Thông tin thanh toán</h2>
            <div className="checkout-info-form">
              <div className="checkout-info-field">
                <div className="label">
                  <p>Họ và tên</p>
                </div>
                <input
                  type="text"
                  name="Fullname"
                  onChange={(event) => handleInputChange(event)}
                  required
                />
                <div className="warning-icon">
                  <i className="bi bi-exclamation-diamond"></i>
                </div>
                <p className="error-message">{errorMsg.Fullname}</p>
              </div>
            </div>
            <div className="checkout-info-form">
              <div className="checkout-info-field">
                <div className="label">
                  <p>Số điện thoại</p>
                </div>
                <input
                  type="number"
                  name="Phone"
                  onChange={(event) => handleInputChange(event)}
                  required
                />
                <div className="warning-icon">
                  <i class="bi bi-exclamation-diamond"></i>
                </div>
                <p className="error-message">{errorMsg.Phone}</p>
              </div>
            </div>
            <div className="checkout-info-form">
              <div className="checkout-info-field">
                <div className="label">
                  <p>Email</p>
                </div>
                <input
                  type="text"
                  name="Email"
                  onChange={(event) => handleInputChange(event)}
                  required
                />
                <div className="warning-icon">
                  <i class="bi bi-exclamation-diamond"></i>
                </div>
                <p className="error-message">{errorMsg.Email}</p>
              </div>
            </div>

            <p className="note">
              <span
                style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}
              >
                *
              </span>
              Thông tin mua hàng sẽ được hệ thống ghi nhận và phản hồi cho khách
              hàng qua số điện thoại trong thời gian ngắn nhất
            </p>

            <div className="checkout-btn" onClick={onConfirmCheckout}>
              Xác nhận mua
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
