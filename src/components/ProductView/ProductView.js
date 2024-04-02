import React, { useEffect, useState } from "react";
import "./ProductView.scss";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCardLazy from "../ProductCardLazy/ProductCardLazy";

const ProductView = ({ title, featureId }) => {
  const [data, setData] = useState([]);
  const [productIdList, setProductIdList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isProductViewLoad, setIsProductViewLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductFeature = async (featureId) => {
      const Get_Product_Feature_Result = await axios.get(
        process.env.REACT_APP_API_URL +
          "/api/product-feature/getProductWithFeatureId/" +
          featureId
      );
      if (
        Get_Product_Feature_Result.status === 200 &&
        Get_Product_Feature_Result.data.success
      ) {
        var pIds = Get_Product_Feature_Result.data.data.map((fp) => {
          return fp.Product._id;
        });
        setProductIdList(pIds);
        setData(Get_Product_Feature_Result.data.data);
      }
    };

    if (featureId) {
      getProductFeature(featureId);
    }
  }, [featureId]);

  useEffect(() => {
    // Get image with id
    var getProduct = async (pId) => {
      if (pId) {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + `/api/products/detail/${pId}`
        );
        if (response.status === 200) {
          return response.data.data;
        }
      } else {
        return null;
      }
    };

    // Handle Images of product [ Get first image ]
    var pIds = productIdList;
    setIsProductViewLoad(true);

    Promise.all(
      pIds.map((id) => {
        return getProduct(id);
      })
    )
      .then((result) => {
        setTimeout(() => {
          setIsProductViewLoad(false);
        }, 450);
        setProductList(result);
      })
      .catch((error) => {
        setTimeout(() => {
          setIsProductViewLoad(false);
        }, 450);
      });
  }, [productIdList]);

  // Go to view detail product
  const onViewProduct = (id, alias, event) => {
    const data = {
      alias: alias,
      id: id,
    };
    navigate(`/products/view/${alias}`, { state: data });
  };

  // Navigate with endpoint
  const navigateToPage = (endpoint) => {
    navigate(`${endpoint}`);
  };

  



  return (
    <div className="ProductView">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="main">
        <div className="container-inner">
          <div className="row flex-nowrap flex-md-wrap">
            {data.length > 0 && !isProductViewLoad ? (
              <>
                {productList.map((product, index) => {
                  return (
                    <div className="col-6 col-sm-3 padding-0">
                      <div
                        className="product-card"
                        onClick={(event) =>
                          onViewProduct(product._id, product.Alias, event)
                        }
                      >
                        {product ? (
                          <ProductCard
                            quantity={product.Quantity}
                            name={product.Name}
                            price={product.SellingPrice}
                            images={product.Images}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div className="col-6 col-sm-3 padding-0 d-block d-md-none">
                  <div className="product-card p-empty">
                    <div
                      className="p-empty-container"
                      onClick={() => navigateToPage("/products")}
                    >
                      <p>Xem Thêm</p>
                      <i class="bi bi-three-dots"></i>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-6 col-sm-3 padding-0">
                  <div className="product-card">
                    <ProductCardLazy isLoad="true" />
                  </div>
                </div>
                <div className="col-6 col-sm-3 padding-0">
                  <div className="product-card">
                    <ProductCardLazy />
                  </div>
                </div>
                <div className="col-6 col-sm-3 padding-0">
                  <div className="product-card">
                    <ProductCardLazy />
                  </div>
                </div>
                <div className="col-6 col-sm-3 padding-0">
                  <div className="product-card">
                    <ProductCardLazy />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="view-more d-none d-md-flex">
          <button onClick={() => navigateToPage("/products")}>Xem thêm</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
