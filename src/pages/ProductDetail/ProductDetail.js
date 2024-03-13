import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Slider from "react-slick";
import "./ProductDetail.scss";
import RichTextEditor from "react-quill";

const ProductDetail = () => {
  let sliderRef = useRef(null);
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  var settings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
  };

  // LIFE CYCLE HOOK
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (data) {
      initData();
    }
  }, [data]);

  const initData = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + `/api/products/detail/${data.id}`
    );
    if (response.status === 200) {
      console.log(response.data.data);
      setProduct(response.data.data);
    }
  };

  // Action for slider --------
  const onNext = () => {
    console.log("hehehe");
    sliderRef.slickNext();
  };
  const onPrev = () => {
    sliderRef.slickPrev();
  };

  // Chuyển đổi sang định dạng VND
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(amount);
  };

  // Lấy hình ảnh từ drive theo id
  const getImageFromDriver = (id) => {
    return `https://lh3.googleusercontent.com/d/${id}?authuser=0`;
  };

  // Editor Dencoded
  const htmlDecode = (input) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = input;
    return textArea.value;
  };

  // Handle buy
  const onBuy = () => {
    navigate("/checkout", { state: product });
  };

  return (
    <div className="ProductDetail">
      <Loading isLoading={!data} />
      <div className="container">
        <div className="product-detail-container">
          <div className="row">
            <div className="col-7">
              <div className="product-images-container">
                <Slider
                  {...settings}
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                >
                  {!product ? (
                    <></>
                  ) : (
                    product.Images.map((item) => {
                      return (
                        <div className="slide-item">
                          <img src={getImageFromDriver(item.DriverId)} />
                        </div>
                      );
                    })
                  )}
                </Slider>
                {/* <div className="logo-overlay">
                  <img src={LOGO}/>
                </div> */}
                {/* Custom arrow control of slide */}
                <div className="custom-arrow-next">
                  <div onClick={onNext}>
                    <i class="bi bi-chevron-compact-right"></i>
                  </div>
                </div>
                <div className="custom-arrow-prev">
                  <div onClick={onPrev}>
                    <i class="bi bi-chevron-compact-left"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              {product ? (
                <div className="r-info">
                  <div className="product-name-container">
                    <h1>{product.Name}</h1>
                    <p>
                      Trạng thái:{" "}
                      {product.Quantity > 0 ? "Còn hàng" : "Hết hàng"}
                    </p>
                  </div>
                  <div className="product-specs-container">
                    <div className="p-specs">
                      <h2 className="underline-title">FEATURES</h2>
                      <div className="product-specs-list">
                        <div className="row">
                          <div className="col-5">
                            <div className="product-specs-item">
                              <p>Material: </p>
                              <p>
                                {product.Product_specs.Material
                                  ? product.Product_specs.Material
                                  : "N/a"}
                              </p>
                            </div>
                            <div className="product-specs-item">
                              <p>Back: </p>
                              <p>
                                {product.Product_specs.Back
                                  ? product.Product_specs.Back
                                  : "N/a"}
                              </p>
                            </div>
                            <div className="product-specs-item">
                              <p>Top: </p>
                              <p>
                                {product.Product_specs.Top
                                  ? product.Product_specs.Top
                                  : "N/a"}
                              </p>
                            </div>
                            <div className="product-specs-item">
                              <p>Side: </p>
                              <p>
                                {product.Product_specs.Side
                                  ? product.Product_specs.Side
                                  : "N/a"}
                              </p>
                            </div>
                          </div>
                          <div className="col-1"></div>
                          <div className="col-6">
                            <div className="product-specs-item">
                              <p>EQ: </p>
                              <p>
                                {product.Product_specs.EQ
                                  ? product.Product_specs.EQ
                                  : "N/a"}
                              </p>
                            </div>
                            <div className="product-specs-item">
                              <p>Condition: </p>
                              <p>
                                {product.Product_specs.Condition
                                  ? product.Product_specs.Condition
                                  : "N/a"}
                              </p>
                            </div>
                            <div className="product-specs-item">
                              <p>String type: </p>
                              <p>
                                {product.Product_specs.String_type
                                  ? product.Product_specs.String_type
                                  : "N/a"}
                              </p>
                            </div>
                            <div className="product-specs-item">
                              <p>Timbre: </p>
                              <p>
                                {product.Product_specs.Timbre
                                  ? product.Product_specs.Timbre
                                  : "N/a"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="btn-action">
                      <div className="product-price">
                        {formatCurrency(product.SellingPrice)}
                      </div>
                      <div className="btn-buy" onClick={onBuy}>
                        MUA SẢN PHẨM
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="col-12">
              <div className="video-show">
                <div
                  dangerouslySetInnerHTML={{
                    __html: product ? product.Video : "<></>",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-12">
              <div className="product-description-container">
                <h2 className="underline-title">DESCRIPTION</h2>
                <div className="row">
                  <div className="col-12">
                    <div
                      className="product-description-inner"
                      dangerouslySetInnerHTML={{
                        __html: htmlDecode(product ? product.Description : ""),
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='main'>{product.Name}</div> */}
      </div>
    </div>
  );
};

export default ProductDetail;
