import React from "react";
import "./Typhography.scss";
import POSTER from "../../assets/images/poster.jpg";

const Typhography = () => {
  return (
    <div className="Typhography">
      
      <div className="main">
        <div className="row">
          <div className="col-12">
            <div
              className="about-main-image"
              style={{
                backgroundImage: `url('https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/428697020_122123798780166282_6290848348524541422_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF26oqdlRtqdBls9aClNIVCOJCHrFxutTk4kIesXG61OXoz1V5Cwiwj62Kytv4TYggl3uBVfDDdImtSX7iBiHOT&_nc_ohc=GtSN1p0JsJMAX_Uz3CE&_nc_oc=AQmcej6msCilZ8dtEKAOtHu4I_WK8M2zEszLolEg4J7cb8P6AH9vkNfLvtqTH4gyxWE&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAsjCh2d-sf5oktSVHs3wKyvwf8lH44Xi3Gx0hZ0B1dEA&oe=65F9A285')`,
              }}
            >
            </div>
          </div>
        </div>

        <div className="title">
          <p>Đồng Guitar</p>
          <p>Uy tín - Chất lượng - Đẳng cấp</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <div
                className="content"
                style={{ paddingRight: "20px", marginBottom: "10px" }}
              >
                <h4>Giới thiệu</h4>
                <h2>
                  Đồng guitar - Cửa hàng phân phối đàn và nhạc cụ chính hãng
                </h2>
                <p>
                  <b>Đồng Guitar</b> là một cửa hàng chuyên phân phối, bán lẻ
                  đàn Guitar và các loại nhạc cụ chính hãng tại thành phố Hồ Chí
                  Minh. Chúng tôi tự hào khi sản phẩm kinh doanh đều có xuất xứ
                  từ các thương hiệu nổi tiếng như Avarez, TenTon Guitar,
                  Martin&Co...
                </p>
                <br></br>
              </div>

              <div className="content" style={{ paddingRight: "20px" }}>
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
            <div className="col-6">
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

export default Typhography;
