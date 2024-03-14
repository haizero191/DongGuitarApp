import React from "react";
import "./Footer.scss";
import GoogleMapAddress from "../GoogleMapAddress/GoogleMapAddress";
import ZALO_ICON from "../../assets/images/icon-zalo-100.png"


const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-top">
                <div className="row">
                  <div className="col">
                    <div className="brands footer-col">
                      <div className="footer-col-title">Thông tin chung</div>
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
                  <div className="col">
                    <div className="brands footer-col">
                      <div className="footer-col-title">Thương hiệu</div>
                      <ul>
                        <li>Marshall</li>
                        <li>Draha</li>
                        <li>Epiphone</li>
                        <li>Martin & Co.</li>
                        <li>Yamaha</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories footer-col">
                      <div className="footer-col-title">Phân loại</div>
                      <ul>
                        <li>Guitar</li>
                        <li>Piano</li>
                        <li>Cajon</li>
                        <li>Amply</li>
                        <li>Repair</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-5">
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
                  <div className="col">
                    <p className="copywrite">
                      Bản quyền © 2024, Kinh doanh và phân phối đàn chính hãng{" "}
                      <b>Đồng Guitar </b>.
                    </p>
                  </div>
                  <div className="col">
                    <p> Địa chỉ kinh doanh: </p>
                    <p>
                      101/2 Nguyễn Khuyến, Phường 12, Bình Thạnh, Thành phố Hồ
                      Chí Minh.
                    </p>
                  </div>
                  <div className="col">
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
