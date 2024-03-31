import React, { useEffect, useState } from "react";
import "./ProductCard.scss";

// Import React-Loading skeneton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Import Lazyload for image


const ProductCard = ({ images, name, price, isLoad = false }) => {
  const [imageSelected, setImageSelected] = useState(null);

  // Chuyển đổi sang định dạng VND
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(amount).replace("₫", "vnd");
  };

  // set default image selected
  const initialImage = () => {
    if (images) {
      setImageSelected(images[0]);
    }
  };

  // on select image
  const onImageSelected = (event) => {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan tỏa đến thành phần cha
    clearImageActive();
    const imgSelectedEl = event.currentTarget;
    imgSelectedEl.classList.add("img-active");
    var imgSelected = images[imgSelectedEl.getAttribute("data-index")];
    setImageSelected(imgSelected);
  };

  // Clear image product selected
  const clearImageActive = () => {
    const imgActived = document.querySelector(".img-active");
    if (imgActived) {
      imgActived.classList.remove("img-active");
    }
  };

  // Convert and get image url from driver
  const getImageFromDriver = (id) => {
    return `https://lh3.googleusercontent.com/d/${id}?authuser=0`;
  };

  useEffect(() => {
    initialImage();
  }, []);


  

  return (
    <div className="ProductCard">
      <div className="image">
        <div className="squares-img">
          {images ? (
            images.map((img, index) => {
              return (
                <div
                  key={"image-sm" + img._id}
                  loading="lazy"
                  className={index === 0 ? "sq-img img-active" : "sq-img"}
                  onClick={onImageSelected}
                  data-index={index}
                >
                  <img alt="p1" src={getImageFromDriver(img.DriverId)} />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
        {imageSelected ? (
          <img
            alt="img-product"
            src={getImageFromDriver(imageSelected.DriverId)}
            loading="lazy"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="info">
        <p className="name">{name ? name : <Skeleton />}</p>
        <p className="price">
          {formatCurrency(price) ? formatCurrency(price) : <Skeleton />}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
