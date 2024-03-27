import React, { useEffect, useState } from "react";
import "./ImgViewFull.scss";
import Logo from "../../assets/images/logo_transparent.png";

const ImgViewFull = ({ onclose, data }) => {
  const [displayImg, setDisplayImg] = useState("");
  const [isOption, setIsOption] = useState(false)
  useEffect(() => {
    onImgViewFullCreated();
    return () => {
      onImgViewFullClosed();
    }
  }, []);

  useEffect(() => {
    if (data) {
      setDisplayImg(data[0]);
    }
  }, [data]);

  // Lấy hình ảnh từ drive theo id
  const getImageFromDriver = (id) => {
    return `https://lh3.googleusercontent.com/d/${id}?authuser=0`;
  };

  // Khi component ImgViewFull được tạo
  const onImgViewFullCreated = () => {
    document.body.classList.add("no-scroll");
  };

  // Khi component ImgViewFull bị đóng
  const onImgViewFullClosed = () => {
    document.body.classList.remove("no-scroll");
  };

  const onSelectImg = (image) => {
    setDisplayImg(image)
  }

  const onCloseView = () => {
    onclose();
    onImgViewFullClosed();
  }


  const onPressImg = () => {
    setIsOption(isOption => !isOption)
  }

  return (
    <div className="ImgViewFull">
      <div className="img-view-container">
        <div className="logo-overlay">
          <img src={Logo} />
        </div>
        <div className="close" onClick={onCloseView}>
          <i class="bi bi-x-lg"></i>
        </div>

        <div className={"image-select" + (isOption ? " image-select-active" : "")}>
          {data.map((image, index) => {
            return <div className="sq-img" key={'sm-view-full-' + index} onClick={() => onSelectImg(image)}>
               <img src={getImageFromDriver(image)} />
            </div>;
          })}
        </div>
        {data && <img src={getImageFromDriver(displayImg)} onClick={() => onPressImg()}/>}
      </div>
    </div>
  );
};

export default ImgViewFull;
