import React, { useEffect, useState } from "react";
import LOGO from "../../assets/images/DongGuitar.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";

// Redux usage
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/services/category.service";
import axios from "axios";

const Header = () => {
  const [cateSelected, setCateSelected] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [productSearch, setProductSearch] = useState([]);
  const [productSearchCount, setProductSearchCount] = useState(0);
  const [isSearchContainer, setIsSearchContainer] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Update the scroll position when the user scrolls
      const position = window.pageYOffset;
      if (position > 176) {
        const headerEl = document.querySelector(".Header");
        headerEl.style.transform = "translateY(-28px)";
      } else {
        const headerEl = document.querySelector(".Header");
        headerEl.style.transform = "translateY(0px)";
      }
    };

    initData();
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") setCateSelected("");
  }, [location]);

  useEffect(() => {
    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  useEffect(() => {
    const onSearchAsync = async () => {
      const Search_Product_Result = await axios.get(
        process.env.REACT_APP_API_URL +
          "/api/products/search?hidden=true&keyword=" +
          searchTerm
      );

      if (Search_Product_Result.data.success) {
        setProductSearchCount(Search_Product_Result.data.count);
        setProductSearch(Search_Product_Result.data.data);
      }
    };

    if (searchTerm) {
      setIsSearchContainer(true);
      onSearchAsync();
    } else if (!searchTerm || searchTerm === "") {
      setProductSearch([]);
      setProductSearchCount(0);
      setIsSearchContainer(false);
    }
  }, [searchTerm]);

  const initData = () => {
    dispatch(getCategories());
  };

  const onLogoClicked = () => {
    navigate("/");
  };

  const onCateClicked = (name) => {
    var cateName = name.toLowerCase();
    setCateSelected(name);
    navigate(`/products?category=` + cateName);
  };

  const onSearchProduct = (event) => {
    const newTimeoutId = setTimeout(() => {
      setSearchTerm(event.target.value);
      // Perform search logic here (e.g., API call)
    }, 800); // Adjust delay (in milliseconds) as needed

    // Store the timeout ID for cleanup in useEffect
    setTimeoutId(newTimeoutId);
  };

  // Chuyển đổi sang định dạng VND
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(amount);
  };

  const onFocusSearch = (event) => {
    setIsSearchContainer(true);
  };

  const onBlurSearch = () => {
    if (searchTerm === "" || !searchTerm) setIsSearchContainer(false);
  };

  return (
    <div className="Header">
      <div className="header-contact">
        <div className="container">
          <span>
            <b>Đồng Guitar</b> - 101/2 Nguyễn Khuyến, Phường 12, Bình Thạnh,
            Thành phố Hồ Chí Minh
          </span>
          <span> - </span>
          <span>0879299627</span>
        </div>
      </div>

      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="logo" onClick={onLogoClicked}>
                <div className="logo-container">
                  <img alt="logo" src={LOGO} />
                </div>
              </div>
            </div>
            <div className="col d-md-none">
              <div className="hamburger">Hamburger</div>
            </div>
            <div className="col-md-8">
              <div className="search-bar">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  onChange={(event) => onSearchProduct(event)}
                  onFocus={onFocusSearch}
                  onBlur={onBlurSearch}
                />
                {isSearchContainer && (
                  <div className="search-container">
                    <h2>
                      Kết quả tìm kiếm{" "}
                      <span>({productSearchCount} kết quả)</span>
                    </h2>
                    <div className="search-result">
                      <div className="product-list">
                        <div className="product-list-inner">
                          {productSearch.map((product) => {
                            return (
                              <div
                                className="product-item"
                                key={"search-p" + product._id}
                              >
                                <div className="image">
                                  <img src="https://lh3.googleusercontent.com/d/1Mb_iGkREhEoVR_VXDISh40Yw0rqdzH3I?authuser=0" />
                                </div>
                                <div className="info">
                                  <p className="name">{product.Name}</p>
                                  <p className="brand">
                                    {product.Brand ? product.Brand.Name : "N/a"}
                                  </p>
                                  <p className="price">
                                    {product.SellingPrice
                                      ? formatCurrency(product.SellingPrice)
                                      : "N/a"}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {productSearchCount > 3 && (
                        <div className="watch-more">
                          <p>Xem thêm</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-2 d-none d-sm-block">
              <div className="social">
                <div className="social-icon">
                  <i className="bi bi-facebook"></i>
                </div>
                <div className="social-icon">
                  <img src="https://clipground.com/images/zalo-icon-clipart-2.png" />
                </div>
                <div className="social-icon">
                  <i className="bi bi-envelope-at"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="categories-nav">
            {state.categories.data ? (
              state.categories.data.map((cate) => {
                return (
                  <div
                    className={
                      cate.Name === cateSelected
                        ? "cate-item cate-active"
                        : "cate-item"
                    }
                    key={"Header-category-key-" + cate._id}
                    onClick={() => onCateClicked(cate.Name)}
                  >
                    <span>{cate.Name}</span>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
