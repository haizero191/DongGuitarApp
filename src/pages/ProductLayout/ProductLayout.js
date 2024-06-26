import React, { useEffect, useState, useRef } from "react";
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
import ToneWoods from "../../components/ToneWoods/ToneWoods";
import ProductCardLazy from "../../components/ProductCardLazy/ProductCardLazy";

const ProductLayout = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category"); // Access specific param by key
  const brandParam = searchParams.get("brand");
  const searchParam = searchParams.get("search");
  const subCategoryParams = searchParams.get("sub-category");
  const sortByParams = searchParams.get("sortBy");
  const [params, setParams] = useState({
    category: "",
    brand: "",
  });
  const sortByOptions = [
    { value: "all", label: "All of price" },
    { value: "incs", label: "Price - ascending" },
    { value: "desc", label: "Price - descending" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [subCate, setSubCate] = useState(null);
  const initValue = [];
  const [isLoading, setIsLoading] = useState(false);

  const F_Brand_Ref_Desktop = useRef();

  // ------- LIFE CYCLE HOOK --->
  useEffect(() => {
    initData();
    document.title = "Store - Đồng Guitar";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    paramsLoader();
    initData();
    onNavigate(1);
  }, [brandParam, categoryParam, sortByParams, subCategoryParams, searchParam]);

  // useEffect(() => {
  //   console.log(state)
  //   if(state.products.isLoading) {
  //     setIsLoading(true)
  //   }else {
  //     setIsLoading(false)
  //   }
  // }, [state.products.isLoading])

  // Params loading data
  const paramsLoader = () => {
    var paramsValid = removeEmptyField({
      category: categoryParam ? categoryParam.split("-").join(" ") : null,
      brand: brandParam ? brandParam : null,
      search: searchParam,
      sortBy: sortByParams ? sortByParams : null,
      ["sub-category"]: subCategoryParams
        ? subCategoryParams.split("-").join(" ")
        : null,
    });

    if (!paramsValid.brand) {
      F_Brand_Ref_Desktop.current.clearValue();
    }

    setSearchParams({ ...paramsValid });
    setParams({ ...paramsValid });
  };

  // Handle search products
  const onSearchProduct = (event) => {
    setSearchTerm(event.target.value);
  };

  // Navigate with endpoint
  const navigateToPage = (endpoint) => {
    navigate(`${endpoint}`);
    initData();
  };

  // Create option item for filter select
  const createOption = (data) => {
    if (data && data.length !== 0) {
      const dataOption = data;
      var filterData = dataOption.map((item) => {
        if (item) return { value: item._id, label: item.Name };
        else return null;
      });
      return initValue.concat(filterData);
    } else return [];
  };

  const initData = () => {
    dispatch(
      getProducts({
        page: page,
        limit: 9,
        filter: removeEmptyField({
          category:
            categoryParam && categoryParam !== "all"
              ? categoryParam.split("-").join(" ")
              : null,
          brand: brandParam ? brandParam.split("-").join(" ") : null,
          search: searchParam ? searchParam : null,
          sortBy: sortByParams ? sortByParams : null,
          subCategory: subCategoryParams
            ? subCategoryParams.split("-").join(" ")
            : null,
        }),
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
            category: categoryParam ? categoryParam.split("-").join(" ") : null,
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

  // Remove empty field
  const removeEmptyField = (obj) => {
    for (const key in obj) {
      if (
        obj[key] === null ||
        obj[key] === "" ||
        obj[key] === "undefined" ||
        obj[key] === undefined
      ) {
        delete obj[key];
      }
    }
    return obj;
  };

  const handleFilterChange = (target, element) => {
    var paramStringArray = target.map((item) =>
      item.label.split(" ").join("-")
    );
    setSearchParams({ ...params, [element.name]: paramStringArray.join(" ") });
  };

  const handleSingleFilterChange = (target, element) => {
    if (target.label !== "All") {
      var cateSelect = state.categories.data.find((cate) => {
        return cate._id === target.value;
      });
      var subCateList = [{ _id: "", Name: "All" }].concat(
        cateSelect.SubCategory
      );
      setSubCate(subCateList);
      setSearchParams({
        ...params,
        [element.name]: target.label.split(" ").join("-"),
      });
    } else {
      setSubCate([]);
      setSearchParams(removeEmptyField({ ...params, [element.name]: null }));
    }
  };

  const handleSubCateFilterChange = (target, element) => {
    if (target && target.label === "All") {
      setSearchParams(removeEmptyField({ ...params, ["sub-category"]: null }));
    } else {
      if (target) {
        setSearchParams({
          ...params,
          ["sub-category"]: target.label.split(" ").join("-"),
        });
      }
    }
  };

  const handleSortByChange = (target, element) => {
    setSearchParams({ ...params, ["sortBy"]: target.value });
  };

  return (
    <div className="ProductLayout">
      <Loading isLoading={state.products.isLoading} />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="p-header-container">
              <div className="p-header">
                <h1>
                  {categoryParam && categoryParam !== "all"
                    ? categoryParam.split("-").join(" ")
                    : "Collection"}
                </h1>
                <p> {state.products.navigate.productCount} results found</p>
              </div>
              <div className="p-sort">
                <span>Sort by: </span>
                <Select
                  className="react-select-container"
                  width="400px"
                  placeholder="Sort by price"
                  options={sortByOptions}
                  classNamePrefix="sort-custom-select"
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "#ff2d1e60",
                      primary: "#D52B1E",
                    },
                  })}
                  onChange={(target, element) =>
                    handleSortByChange(target, element)
                  }
                />
              </div>
              <div className="p-search-mobile d-flex d-md-none">
                <i
                  class="bi bi-search"
                  onClick={() =>
                    navigateToPage(`/products?search=${searchTerm}`)
                  }
                ></i>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  onChange={onSearchProduct}
                />
              </div>
              {/* For mobile UI */}
              <div className="filter-container d-flex d-md-none ">
                {/* Categories filter for mobile UI */}
                <div className="p-filter d-flex d-md-none">
                  <span className="title">Type</span>
                  <Select
                    classNamePrefix="custom-select"
                    readOnly="true"
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
                    placeholder="Product select"
                    options={createOption(
                      [{ _id: "", Name: "All" }].concat(state.categories.data)
                    )}
                    name="category"
                    onChange={(target, element) =>
                      handleSingleFilterChange(target, element)
                    }
                  />

                  <Select
                    classNamePrefix="custom-select"
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
                    placeholder="Type select"
                    options={createOption(subCate)}
                    name="category"
                    onChange={(target, element) =>
                      handleSubCateFilterChange(target, element)
                    }
                    isClearable
                  />
                </div>
                {/* Brand filter for mobile UI */}
                <div className="p-filter d-flex d-md-none">
                  <span className="title">Brands</span>
                  <Select
                    classNamePrefix="custom-select"
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
                    placeholder="Brand select"
                    options={createOption(state.brands.data)}
                    name="brand"
                    onChange={(target, element) =>
                      handleFilterChange(target, element)
                    }
                    isMulti
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <div className="side">
              {/* For Desktop UI */}
              <div className="side-filter">
                {/* side item for filter*/}
                <div className="side-filter-item">
                  <h2 className="title">Filter By Brand</h2>
                  <Select
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
                    ref={F_Brand_Ref_Desktop}
                    className="filter-select-item"
                    width="400px"
                    placeholder="Brand select"
                    options={createOption(state.brands.data)}
                    name="brand"
                    onChange={(target, element) =>
                      handleFilterChange(target, element)
                    }
                    isMulti
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-9">
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
                          className="col-6 col-md-4 p-c-container"
                          key={"p-" + item._id}
                          onClick={(event) =>
                            onViewProduct(item._id, item.Alias, event)
                          }
                        >
                          <div className="product-card">
                            <ProductCard
                              quantity={item.Quantity}
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

                  {state.products &&
                  state.products.data &&
                  state.products.data.length === 0 ? (
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
            </div>
          </div>
          <div className="col-12">
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
      <div className="tone-woods">
        <ToneWoods />
      </div>
    </div>
  );
};

export default ProductLayout;
