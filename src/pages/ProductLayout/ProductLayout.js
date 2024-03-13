import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductLayout.scss";
import Select from "react-select";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";

// Redux usage
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/services/product.service";
import { getBrands } from "../../redux/services/brand.service";
import { useSearchParams } from "react-router-dom";

const ProductLayout = () => {
  const [page, setPage] = useState(1);
  const [brands, setBrands] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category"); // Access specific param by key
  const brandParam = searchParams.get("brand");
  const searchParam = searchParams.get("search");
  const [brandFilter, setBrandFilter] = useState([]);
  const [params, setParams] = useState({
    category: "",
    brand: "",
  });

  const options = [
    { value: "item 0", label: "Tất cả sản phẩm" },
    { value: "item 1", label: "Giá - Từ thấp đến cao" },
    { value: "item 2", label: "Giá - Từ cao đến thấp" },
  ];

  const initValue = [];

  // Create option item for filter select
  const createOption = (data) => {
    if (data) {
      const dataOption = data;
      var filterData = dataOption.map((item) => {
        return { value: item._id, label: item.Name };
      });
      return initValue.concat(filterData);
    } else return [];
  };

  const initData = () => {
    dispatch(
      getProducts({
        page: page,
        limit: 9,
        filter: {
          category: categoryParam ? categoryParam.split(" ") : null,
          brand: brandParam ? brandParam.split(" ") : null,
          search: searchParam ? searchParam : null
        },
      })
    );
    dispatch(getBrands());
  };

  // Handle navigate product list
  const onNavigate = (pageSelected, event) => {
    if (pageSelected !== page) {
      dispatch(
        getProducts({
          page: pageSelected,
          limit: 9,
          filter: {
            category: categoryParam ? categoryParam.split(" ") : null,
            brand: brandParam ? brandParam.split(" ") : null,
          },
        })
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setPage(pageSelected);
  };

  // Go to view detail product
  const onViewProduct = (id, alias, event) => {
    const data = {
      alias: alias,
      id: id,
    };
    navigate(`/products/view/${alias}`, { state: data });
  };

  // Get default brands in parameters
  const getBrandDefault = () => {
    if (brandParam) {
      var defaultBrand = brandParam.split(" ").map((brand) => {
        return { value: brand, label: brand };
      });
      return defaultBrand;
    }
  };

  // LIFE CYCLE HOOK --->
  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    initData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [brandParam, categoryParam]);

  useEffect(() => {

    var paramsValid = removeEmptyField({
      category: categoryParam,
      brand: params.brand,
      search: searchParam
    });
    setSearchParams(paramsValid);
  }, [params]);

  const removeEmptyField = (obj) => {
    for (const key in obj) {
      if (obj[key] === null || obj[key] === "") {
        delete obj[key];
      }
    }
    return obj;
  };

  const handleFilterChange = (target, element) => {
    var paramStringArray = target.map((item) => item.label);
    setParams({ ...params, [element.name]: paramStringArray.join(" ") });
  };

  return (
    <div className="ProductLayout">
      <Loading isLoading={state.products.isLoading} />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="p-header-container">
              <div className="p-header">
                <h1>{categoryParam ? categoryParam : "Sản phẩm"}</h1>
                <p> {state.products.navigate.productCount} sản phẩm</p>
              </div>
              <div className="p-sort">
                <span>Sort by: </span>
                <Select
                  className="react-select-container"
                  width="400px"
                  placeholder="Bộ lọc sản phẩm"
                  options={options}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "#ff2d1e60",
                      primary: "#D52B1E",
                    },
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="side">
              <div className="side-filter">
                {/* side item for filter*/}
                <div className="side-filter-item">
                  <h2 className="title">Nhãn hàng</h2>
                  <Select
                    defaultValue={getBrandDefault}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: "none",
                        padding: "0px",
                        cursor: state.isFocused ? "pointer" : "pointer",
                      }),
                      dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        display: "none",
                      }),
                      indicatorSeparator: (baseStyles) => ({
                        ...baseStyles,
                        display: "none",
                      }),
                    }}
                    classNames={{
                      control: (state) =>
                        state.isFocused ? "border-red-600" : "border-grey-300",
                    }}
                    className="filter-select-item"
                    width="400px"
                    placeholder="Lựa chọn nhãn hàng"
                    options={createOption(state.brands.data)}
                    name="brand"
                    onChange={(target, element) =>
                      handleFilterChange(target, element)
                    }
                    isMulti
                  />
                </div>

                {/* side item for filter*/}
                <div className="side-filter-item">
                  <h2 className="title">Kiểu dáng</h2>
                  <Select
                    defaultValue={[initValue[0]]}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: "none",
                        padding: "0px",
                        cursor: state.isFocused ? "pointer" : "pointer",
                      }),
                      dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        display: "none",
                      }),
                      indicatorSeparator: (baseStyles) => ({
                        ...baseStyles,
                        display: "none",
                      }),
                    }}
                    classNames={{
                      control: (state) =>
                        state.isFocused ? "border-red-600" : "border-grey-300",
                    }}
                    className="filter-select-item"
                    width="400px"
                    placeholder="Lựa chọn kiểu dáng"
                    options={brands.brands}
                    name="category"
                    onChange={(target, element) =>
                      handleFilterChange(target, element)
                    }
                    isMulti
                  />
                </div>
                {/* side item for filter*/}
                <div className="side-filter-item">
                  <h2 className="title">Loại dây</h2>
                  <Select
                    defaultValue={getBrandDefault}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: "none",
                        padding: "0px",
                        cursor: state.isFocused ? "pointer" : "pointer",
                      }),
                      dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        display: "none",
                      }),
                      indicatorSeparator: (baseStyles) => ({
                        ...baseStyles,
                        display: "none",
                      }),
                    }}
                    classNames={{
                      control: (state) =>
                        state.isFocused ? "border-red-600" : "border-grey-300",
                    }}
                    className="filter-select-item"
                    width="400px"
                    placeholder="Lựa chọn loại dây"
                    options={createOption(null)}
                    isMulti
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="main">
              {/* List of product */}
              <div className="product-list">
                <div className="row">
                  {state.products.isLoading ? (
                    <></>
                  ) : state.products.data ? (
                    state.products.data.map((item) => {
                      return (
                        <div
                          className="col-md-4 p-c-container"
                          key={"p-" + item._id}
                          onClick={(event) =>
                            onViewProduct(item._id, item.Alias, event)
                          }
                        >
                          <div className="product-card">
                            <ProductCard
                              images={item.Images}
                              name={item.Name}
                              price={item.SellingPrice}
                            />
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}

                  {state.products && state.products.data && state.products.data.length === 0 ? (
                    <div className="col-12">
                      <div className="p-not-found">
                        <img src="https://th.bing.com/th/id/R.6cec46d3aed2c4bd0d4d02a4cd542ecc?rik=I0iq3AnGeTZpoQ&riu=http%3a%2f%2fmix-iran.com%2fwp-content%2fuploads%2f2020%2f10%2fcart.png&ehk=6bwRLj2D4dPAHBhPJxkRWwZsTIAOWDM0suUY%2fJ1P9Lo%3d&risl=&pid=ImgRaw&r=0" />
                        <p>Product not found !</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/* product navigation */}
              <div className="navigation-container">
                <div className="navigation">
                  {state.products.data ? (
                    Array.from({
                      length: state.products.navigate.totalPage,
                    }).map((item, index) => {
                      return (
                        <div
                          key={"product-render" + index}
                          className={
                            index + 1 === page
                              ? "navigation-number navigate-active"
                              : "navigation-number"
                          }
                          onClick={(event) => onNavigate(index + 1, event)}
                        >
                          {index + 1}
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
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
