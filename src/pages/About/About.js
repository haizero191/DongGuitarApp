import React, { useEffect } from "react";
import "./About.scss";
import Typhography from "../../components/Typhography/Typhography";
import POSTER from "../../assets/images/poster.jpg";
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="About">
      <div className="main">
        <div className="title">
          <p>Đồng Guitar</p>
          <p>Uy tín - Chất lượng - Đẳng cấp</p>
        </div>
        <div className="">
          <div className="row">
            <div className="col-12 col-md-6 p-0">
              <div className="image">
                <img alt="img1" src={POSTER} />
              </div>
            </div>
            <div className="col-12 d-none d-md-block col-md-6 p-0">
              <div
                className="content"
              >
                <h4>Giới thiệu</h4>
                <h2>
                  Đồng guitar - Cửa hàng phân phối đàn và nhạc cụ chính hãng
                </h2>
                <p>
                  <b>Đồng Guitar</b> là một cửa hàng chuyên phân phối, bán lẻ
                  đàn Guitar và các loại nhạc cụ chính hãng tại thành phố Hồ Chí
                  Minh. Chúng tôi tự hào khi sản phẩm kinh doanh đều có xuất xứ
                  từ các thương hiệu nổi tiếng như Alvarez, Baton Rouge, Nhẫn
                  Guitar...
                </p>
                <br></br>
              </div>
            </div>
            <div className="col-12 d-block d-md-none col-md-6">
              <div
                className="content"
                style={{ paddingLeft: "20px", marginBottom: "10px" }}
              >
                <h4>Giới thiệu</h4>
                <h2>
                  Đồng guitar - Cửa hàng phân phối đàn và nhạc cụ chính hãng
                </h2>
                <p>
                  <b>Đồng Guitar</b> là một cửa hàng chuyên phân phối, bán lẻ
                  đàn Guitar và các loại nhạc cụ chính hãng tại thành phố Hồ Chí
                  Minh. Chúng tôi tự hào khi sản phẩm kinh doanh đều có xuất xứ
                  từ các thương hiệu nổi tiếng như Alvarez, Baton Rouge, Nhẫn
                  Guitar...
                </p>
                <br></br>
              </div>

              <div className="content" style={{ paddingLeft: "20px" }}>
                <h4>Mục tiêu</h4>
                <h2>Đem âm nhạc thế giới lại gần hơn với người Việt.</h2>
                <p>
                  <b>Đồng Guitar</b> mong muốn trở thành người bạn đồng hành tin
                  cậy của tất cả những ai yêu thích và theo đuổi âm nhạc.
                </p>
                <p>
                  Với đội ngũ nhân viên nhiệt tình, chu đáo. Chúng tôi luôn
                  hướng tới phương châm hài lòng khách hàng cả về sản phẩm lẫn
                  trải nghiệm mua hàng, luôn sẵn sàng tư vấn và giải đáp các
                  thắc mắc của khách hàng một cách nhanh chóng nhất và hài lòng
                  nhất.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-12 d-none d-md-block col-md-6 p-0">
              {/* <div
                className="content"
                style={{ paddingLeft: "20px", marginBottom: "10px" }}
              >
                <h4>Giới thiệu</h4>
                <h2>
                  Đồng guitar - Cửa hàng phân phối đàn và nhạc cụ chính hãng
                </h2>
                <p>
                  <b>Đồng Guitar</b> là một cửa hàng chuyên phân phối, bán lẻ
                  đàn Guitar và các loại nhạc cụ chính hãng tại thành phố Hồ Chí
                  Minh. Chúng tôi tự hào khi sản phẩm kinh doanh đều có xuất xứ
                  từ các thương hiệu nổi tiếng như Alvarez, Baton Rouge, Nhẫn
                  Guitar...
                </p>
                <br></br>
              </div> */}
              <div className="content" >
                <h4>Mục tiêu</h4>
                <h2>Đem âm nhạc thế giới lại gần hơn với người Việt.</h2>
                <p>
                  <b>Đồng Guitar</b> mong muốn trở thành người bạn đồng hành tin
                  cậy của tất cả những ai yêu thích và theo đuổi âm nhạc.
                </p>
                <p>
                  Với đội ngũ nhân viên nhiệt tình, chu đáo. Chúng tôi luôn
                  hướng tới phương châm hài lòng khách hàng cả về sản phẩm lẫn
                  trải nghiệm mua hàng, luôn sẵn sàng tư vấn và giải đáp các
                  thắc mắc của khách hàng một cách nhanh chóng nhất và hài lòng
                  nhất.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0">
              <div className="image">
                <img alt="img1" src={POSTER} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
