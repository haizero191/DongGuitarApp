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
import ToneWoods from "../../components/ToneWoods/ToneWoods";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const initData = () => {
    dispatch(getProducts());
    dispatch(getFeaturesActive());
  };

  useEffect(() => {
    initData();
    document.title = "Đồng Guitar";
  }, []);

  return (
    <div className="Home">
      <div className="banner">
        <Banner />
      </div>


      <div className="main">
      
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

        <div className="tone-woods">
          <ToneWoods />
        </div>

        {/* Section view typhography */}
        <div className="section-view-typhography">
          <Typhography />
        </div>

      </div>
    </div>
  );
};

export default Home;
