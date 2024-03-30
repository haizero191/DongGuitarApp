import React, { useEffect, useState } from "react";
import "./About.scss";
import Typhography from "../../components/Typhography/Typhography";
import POSTER from "../../assets/images/poster.jpg";
import LOGO from "../../assets/images/DongGuitar.png";



const About = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScrollParalax = () => setOffsetY(window.pageYOffset)
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("scroll", handleScrollParalax)

    return () => {
      window.removeEventListener("scroll", handleScrollParalax)
    }
  }, []);

  return (
    <div className="About">
      <div className="banner-about">
        <div className="image">
          <img  
            alt="img1"
            src={
              "https://images.hdqwalls.com/wallpapers/boy-playing-guitar-outdoors-5k-0l.jpg"
            }
          />
        </div>
        <div className="image-title">
          <p>Đồng Guitar</p>
          <p>Uy tín - Chất lượng - Đẳng cấp</p>
        </div>
      </div>


      <div className="main">
        <div className="title">
          <p>Đồng Guitar</p>
          <p>Uy tín - Chất lượng - Đẳng cấp</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 d-none d-md-block col-md-12">
              <div className="content">
                <div className="content-logo">
                    <img src={LOGO}/>
                </div>
                <p>
                  <b>Đồng Guitar</b> là một cửa hàng chuyên phân phối, bán lẻ
                  đàn Guitar và các loại nhạc cụ chính hãng tại thành phố Hồ Chí
                  Minh. Chúng tôi tự hào khi sản phẩm kinh doanh đều có xuất xứ
                  từ các thương hiệu nổi tiếng như Alvarez, Baton Rouge, Nhẫn
                  Guitar...
                </p>

                <p>
                  Với đội ngũ nhân viên nhiệt tình, chu đáo. Chúng tôi luôn
                  hướng tới phương châm hài lòng khách hàng cả về sản phẩm lẫn
                  trải nghiệm mua hàng, luôn sẵn sàng tư vấn và giải đáp các
                  thắc mắc của khách hàng một cách nhanh chóng nhất và hài lòng
                  nhất.
                </p>
                <p>
                  <b>Đồng Guitar</b> rất hy vọng và mong muốn đồng hành cùng các bạn trẻ Việt Nam trên con đường theo đuổi âm nhạc của riêng mình. 
                 
                </p>
                <p>Thanks for visited !</p>
                {/* <div className="author-sign">
                  <p></p>
                  <img src={"https://chukyphongthuy.vn/wp-content/uploads/Chu-ky-khong-co-net-gach-duoi.png"}/>
                </div> */}
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
