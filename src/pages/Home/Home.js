import React, { useEffect } from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import SectionView from "../../components/SectionView/SectionView";
import ProductView from "../../components/ProductView/ProductView";
import Typhography from "../../components/Typhography/Typhography";
import BrandView from "../../components/BrandView/BrandView";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/services/product.service";
import { getFeaturesActive } from "../../redux/services/feature.service";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const initData = () => {
    dispatch(getProducts());
    dispatch(getFeaturesActive());
  };

  useEffect(() => {
    initData();
    document.title = "Đồng Guitar"
  }, []);

  return (
    <div className="Home">
      <div className="banner">
        <Banner />
      </div>
      <div className="main">
        {/* Section view images */}
        {/* <div className="section-view-image">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="section-view">
                  <SectionView
                    title={"New Products"}
                    img={
                      "https://stuff.fendergarage.com/images/X/6/q/av2-shop-card-v3@2x.jpg"
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="section-view">
                  <SectionView
                    title={"What News"}
                    img={
                      "https://stuff.fendergarage.com/images/P/i/Z/Web_Fender_0609_23_SquierParanormalShop_Assets_SHOP-CARD@2x.jpg"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Section view products */}
        <div className="section-view-brands">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col h-100">
                <BrandView />
              </div>
            </div>
          </div>
        </div>

        {data.features.isLoading ? (
          <></>
        ) : (
          <>
            {data.features.data &&
              data.features.data.map((feature) => {
                return (
                  <div
                    className="section-view-products"
                    key={"feature-product-view" + feature._id}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <ProductView
                            title={feature.Name}
                            featureId={feature._id}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}

        {/* Section view typhography */}
        <div className="section-view-typhography">
          <Typhography />
        </div>


         {/* Section view images */}
         {/* <div className="section-view-image">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="section-view">
                  <SectionView
                    title={"New Products"}
                    img={
                      "https://stuff.fendergarage.com/images/X/6/q/av2-shop-card-v3@2x.jpg"
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="section-view">
                  <SectionView
                    title={"What News"}
                    img={
                      "https://stuff.fendergarage.com/images/P/i/Z/Web_Fender_0609_23_SquierParanormalShop_Assets_SHOP-CARD@2x.jpg"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
