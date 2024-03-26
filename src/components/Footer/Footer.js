import React, { useEffect } from "react";
import "./Footer.scss";
import GoogleMapAddress from "../GoogleMapAddress/GoogleMapAddress";
import ZALO_ICON from "../../assets/images/icon-zalo-100.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/services/category.service";
import axios from "axios";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const location = useLocation();

  const initData = () => {
    dispatch(getCategories());
  };

  useEffect(() => {
    initData();
  }, []);

  console.log("hehehe", state.categories);

  return (
    <div className="Footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-top">
                <div className="row">
                  <div className="col-md-6 p-0 col-sm-12">
                    <div className="footer-list-info">
                      <div className="row">
                        <div className="col-6 p-0 col-md-4">
                          <div className="brands footer-col">
                            <div className="footer-col-title">
                              Thông tin chung
                            </div>
                            <ul>
                              <li>Giới thiệu</li>
                              <li>Địa chỉ</li>
                              <li>Giao nhận</li>
                              <li>Chính sách bảo hành</li>
                              <li>Quyền riêng tư</li>
                              <li>Điều khoản sử dụng</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-4 p-0 col-md-4">
                          <div className="brands footer-col">
                            <div className="footer-col-title">Thương hiệu</div>
                            <ul>
                              <li>Nhẫn Guitar</li>
                              <li>Alvarez</li>
                              <li>Ortega</li>
                              <li>Marshall</li>
                              <li>B&O</li>
                              <li>JPL</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-2 p-0 col-md-4">
                          <div className="categories footer-col">
                            <div className="footer-col-title">Phân loại</div>
                            <ul>
                              {state.categories && state.categories.data ? (
                                state.categories.data.map((cate) => {
                                  return <li>{cate.Name}</li>;
                                })
                              ) : (
                                <></>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-none d-md-block col-md-6 col-sm-12">
                    <div className="store-map footer-col">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0115537500124!2d106.69717627480539!3d10.810426589340391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290069118e19%3A0x26eb6f22a86cd7e6!2s%C4%90%E1%BB%93ng%20Guitar%20-%20Premium%20Sound!5e0!3m2!1sen!2s!4v1706422449043!5m2!1sen!2s"
                        width="100%"
                        height="350"
                        style={{ border: "none" }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="footer-bottom">
                <div className="row">
                  <div className="col-6  col-md-4">
                    <p className="copywrite">
                      Bản quyền © 2024, Kinh doanh và phân phối đàn chính hãng{" "}
                      <b>Đồng Guitar </b>.
                    </p>
                  </div>
                  <div className="col-6 col-md-4 text-end">
                    <p> Địa chỉ kinh doanh: </p>
                    <p>
                      101/2 Nguyễn Khuyến, Phường 12, Bình Thạnh, Thành phố Hồ
                      Chí Minh.
                    </p>
                  </div>
                  <div className="col-12  col-md-4">
                    <div className="social-container">
                      <p>Liên hệ chúng tôi tại </p>
                      <div className="social">
                        <div className="social-icon">
                          <i className="bi bi-facebook"></i>
                        </div>
                        <div className="social-icon">
                          <img src={ZALO_ICON} />
                        </div>
                        <div className="social-icon">
                          <i className="bi bi-envelope-at"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
