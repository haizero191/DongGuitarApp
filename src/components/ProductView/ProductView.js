import React, { useEffect, useState } from "react";
import "./ProductView.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";



const ProductView = ({ title, featureId }) => {
  const [data, setData] = useState([]);
  const [productIdList, setProductIdList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();


  // Lấy hình ảnh từ drive theo id
  const getImageFromDriver = (id) => {
    return `https://lh3.googleusercontent.com/d/${id}?authuser=0`;
  };

  // Go to view detail product
  const onViewProduct = (id, alias, event) => {
    const data = {
      alias: alias,
      id: id,
    };
    navigate(`/products/view/${alias}`, { state: data });
  };

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
        


        var pIds = Get_Product_Feature_Result.data.data.map(
          (fp) => {
            return fp.Product._id
          }
        );
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

    Promise.all(
      pIds.map((id) => {
        return getProduct(id);
      })
    ).then((result) => {
      setProductList(result);
    });
  }, [productIdList]);

  useEffect(() => {}, [imageList]);

  return (
    <div className="ProductView">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="main">
        <div className="container-inner">
          <div className="row">
            {data.length > 0 ? (
              <>
                {productList.map((product, index) => {
                  return (
                    <div className="col-6 col-sm-3">
                      <div className="product-card" onClick={(event) => onViewProduct(product._id, product.Alias, event)}>
                        <ProductCard
                          name={product.Name}
                          price={product.SellingPrice}
                          images={product.Images}
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="product-loader"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
