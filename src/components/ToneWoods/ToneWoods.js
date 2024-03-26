import React, { useState, useRef } from "react";
import "./ToneWoods.scss";
import Slider from "react-slick";

const ToneWoods = () => {
  let sliderRef = useRef(null);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplayspeed: 500,
  });

  const toneWoods = [
    {
      image: "11g-7AiFLwGGUbsIsgg3lk7S9L89LqQHM",
      name: "Indian Rosewood",
      desc: "Indian Rosewood là một loại gỗ phổ biến trong làm đàn Guitar, với âm thanh cân bằng từ âm Bass đến Treble và âm vang tốt. Đây là lựa chọn tốt cho đàn Classic guitar. Loại gỗ này cân bằng cả âm Bass lẫn Treble ngoài ra âm vang cũng rất tốt nên được ưa chuộng làm đàn guitar.",
    },
    {
      image: "1lSh134F7ETcZGAzTY1_fYL06a4IWQchS",
      name: "Koa",
      desc: "Gỗ Koa này thường được sử dụng làm những cây đà giá trị rất cao.Koa âm chắc,trong trẻo,mạnh mẽ.",
    },
    {
      image: "17v9_feEIOJHQg1rot55-1vD0BiJF35YZ",
      name: "Macassar Ebony",
      desc: "Đàn guitar làm từ loại gỗ này mang lại âm thanh toát lên sự rõ ràng. Âm bass mạnh mẽ, âm trung trung bình và âm treble trong, rõ ràng. Kết hợp gỗ Mun với mặt đàn là Spruce hoặc Cedar sẽ tạo ra âm thanh cân bằng hơn. Loại gỗ này có thể sử dụng trong nhiều loại đàn guitar.",
    },
    {
      image: "1oOSOmxMYZqBx2vP8-ugrKMBjyB5MpP3a",
      name: "Mahogany",
      desc: "Mahogany là một trong những dòng gỗ có âm sắc rất chắc chắn, cân bằng với dải tầng trung mạnh mẽ. Ngoài ra Mahogany cũng là tiêu chuẩn cần đàn cho hầu hết tất cả cây đàn.",
    },
    {
      image: "1xV_DqO8q-8QRGBoT1WUDdNfnPZQOBGGl",
      name: "Maple",
      desc: "Maple thường có trọng lượng nhẹ và cho ra âm thanh rõ ràng, trong và tươi sáng. ",
    },
    {
      image: "1ZMoFPM4oYUBkd-q9GzoGZAmmcpyjZJvq",
      name: "Sitka Spruce",
      desc: "Sitka Spruce là vật liệu được sử dụng phổ biến nhất cho mặt đàn guitar trong thời đại hiện đại. Tầm vực sử dụng của nó rất đa dạng, phù hợp với mọi thể loại âm nhạc. Vân gỗ thông thường có màu trắng hơi đục và có vân cườm. Số lượng vân cườm càng nhiều thì gỗ càng có tuổi thọ lâu hơn. ",
    },
    {
      image: "12IFz53Dg_sjDzKMQs5ejFbrqZxEYoF4d",
      name: "Walnut",
      desc: "Walnut âm trung khá giống Mahogany nhưng ấm hơn, dải Treble cực kì ấm. Thích hợp kết với gỗ Cedar để chơi Fingerstyle.",
    },
    {
      image: "1gyEfzyp6ZAwSq70huf_mhzmeDQYRONz9",
      name: "Western Cedar",
      desc: "Western Cedar không chắc bằng Spruce, nhưng cho âm thanh dịu hơn, ấm hơn.Các âm thanh khi đàn nhẹ nghe to hơn tuy nhiên khi đàn mạnh Cedar sẽ bị chạm ngưỡng giới hạn về âm lượng. Thường dùng cho người chơi Fingerstyle, Classical. ",
    },
  ];

  const getImageFromDriver = (id) => {
    return `https://lh3.googleusercontent.com/d/${id}?authuser=0`;
  };

  // Action for slider --------
  const onNext = () => {
    console.log("hehehe");
    sliderRef.slickNext();
  };
  const onPrev = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="ToneWoods">
      <div className="container">
        <div className="ToneWoods-title">
          <h2>ToneWoods</h2>
          <p>
            Khám phá thế giới tiềm ẩn của gỗ
          </p>
          <p>Nơi gỗ biến thành biểu tượng âm nhạc.</p>
        </div>

        <div className="ToneWoods-list">
          <div className="ToneWoods-inner">
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
            >
              {toneWoods.map((tw) => {
                return (
                  <div
                    className="slide-item"
                    key={"tonewood-render-" + tw.name}
                  >
                    <div className="slide-image">
                      <img alt="tonewoods" src={getImageFromDriver(tw.image)} />
                    </div>
                    <div className="name">{tw.name}</div>
                    <div className="description">
                      <span>{tw.desc} </span>
                    </div>
                  </div>
                );
              })}
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
      </div>
    </div>
  );
};

export default ToneWoods;
