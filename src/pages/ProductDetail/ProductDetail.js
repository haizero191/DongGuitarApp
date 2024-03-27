import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Slider from "react-slick";
import "./ProductDetail.scss";
import RichTextEditor from "react-quill";
import ImgViewFull from "../../components/ImgViewFull/ImgViewFull";

const ProductDetail = () => {
  let sliderRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [productSpecs, setProductSpecs] = useState([]);
  const [isViewMore, setIsViewMore] = useState(false);
  const [isViewFull, setIsViewFull] = useState(false);
  const [imgView, setImgView] = useState('');

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

  // Get Product Specs
  const getProductSpecs = async () => {
    var Get_ProductSpecs_Result = await axios({
      method: "get",
      url:
        process.env.REACT_APP_API_URL +
        "/api/product_specs?productId=" +
        data.id,
      headers: {},
    });
    if (Get_ProductSpecs_Result.data.success) {
      setProductSpecs(Get_ProductSpecs_Result.data.data);
    }
  };

  const initData = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + `/api/products/detail/${data.id}`
    );
    if (response.status === 200) {
      console.log(response.data.data);
      setProduct(response.data.data);
      getProductSpecs();
    }
  };
  // Action for slider --------
  const onNext = () => {
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

  const viewMore = () => {
    setIsViewMore(true);
  };

  // Navigate with URL
  const navigateToUrl = (url) => {
    window.open(url, "_blank");
  };


  // Handle Open view full image
  const onOpenViewFull = () => {
    var imgList = product.Images.map(image => image.DriverId)
    setIsViewFull(true)
    setImgView(imgList)
  }

  const handleClose = () => {
    setIsViewFull(false)
    setImgView('')
  }

  return (
    <div className="ProductDetail">
      <Loading isLoading={!data} />
      <div className="container">
        <div className="product-detail-container">
          <div className="row">
            <div className="detail-image col-12 col-md-7">
              <div className="product-images-container">
                <div className="view-full" onClick={onOpenViewFull}>
                  <i class="bi bi-arrows-fullscreen"></i>
                  <p>Full Image</p>
                </div>
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
                        <div className="slide-item" key={'slide-'+item._id}> 
                          <img src={getImageFromDriver(item.DriverId)} />
                        </div>
                      );
                    })
                  )}
                </Slider>
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
            <div className="col-12 col-md-5">
              {product ? (
                <div className="r-info">
                  <div className="product-name-container">
                    <h1>{product.Name}</h1>
                    <p>
                      {product.Quantity > 0 ? "In Stock" : "Out of stock"}
                    </p>
                  </div>
                  <div className="product-specs-container">
                    <div className="p-specs">
                      <h2 className="underline-title">INFORMATION</h2>
                      <div className="product-specs-list">
                        <div className="row">
                          <div className="col-12">
                            <div
                              className="product-specs-item"
                              style={{ textTransform: "capitalize" }}
                            >
                              <p>Category </p>
                              <p>
                                {product.Category.Name} |{" "}
                                {product.SubCategory
                                  ? product.SubCategory.Name
                                  : ""}
                              </p>
                            </div>

                            <div
                              className="product-specs-item"
                              style={{ textTransform: "capitalize" }}
                            >
                              <p>Brand </p>
                              <p>{product.Brand.Name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-specs">
                      <h2 className="underline-title">KEY FEATURES</h2>
                      <div className="product-specs-list">
                        <div className="row">
                          <div className="col-12">
                            {productSpecs.map((ps, index) => {
                              if (index <= 3 || isViewMore) {
                                return (
                                  <div className="product-specs-item" key={ps._id}>
                                    <p>{ps.Name} </p>
                                    <p>{ps.Description}</p>
                                  </div>
                                );
                              }
                            })}

                            {productSpecs.length > 4 && !isViewMore && (
                              <p className="view-more" onClick={viewMore}>
                                View more
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="btn-action d-none d-md-flex">
                      <div className="product-price">
                        {formatCurrency(product.SellingPrice)}
                      </div>
                      <div
                        className="btn-buy "
                        onClick={() =>
                          navigateToUrl(
                            "https://www.facebook.com/profile.php?id=61554988470959"
                          )
                        }
                      >
                        CONTACT NOW
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="col-12 col-md-12">
              <div className="video-show">
                <div
                  dangerouslySetInnerHTML={{
                    __html: product ? product.Video : "<></>",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-12 col-md-12">
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
      </div>

      <div className="view-full-container">
        {
          isViewFull ? <ImgViewFull onclose={handleClose} data={imgView}/> : <></>
        }
      </div>
      
    </div>
  );
};

export default ProductDetail;
