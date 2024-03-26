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
            Uncover the hidden realm of tonewoods, where wood transforms into
            musical expression.
          </p>
        </div>

        <div className="ToneWoods-list">
          <div className="ToneWoods-inner">
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
            >
              <div className="slide-item">
                <div className="slide-image">
                  <img
                    src={
                      "https://www.taylorguitars.com/sites/default/files/styles/multi_column_module_guitar_light/public/images/2022-12/taylor-ad17-e-bt-wal-1208121180-frontleft-2022.png?itok=A2KoYlVW"
                    }
                  />
                </div>
                <div className="name">American Dream</div>
                <div className="description">
                  <span>
                    The American Dream® Series reflects the principles of
                    innovation and resourcefulness that Taylor Guitars is famous
                    for.{" "}
                  </span>
                </div>
              </div>
              <div className="slide-item">
                <div className="slide-image">
                  <img
                    src={
                      "https://www.taylorguitars.com/sites/default/files/styles/multi_column_module_guitar_light/public/images/2022-12/taylor-327e-00887766098430-frontleft-2021.png?itok=e2NxxnYN"
                    }
                  />
                </div>
                <div className="name">Grand Pacific</div>
                <div className="description">
                  <span>
                    Taylor’s versatile new round-shoulder dreadnought guitar
                    brings a whole new sonic personality to the dreadnought
                    category and the Taylor line.{" "}
                  </span>
                </div>
              </div>
              <div className="slide-item">
                <div className="slide-image">
                  <img
                    src={
                      "https://www.taylorguitars.com/sites/default/files/styles/multi_column_module_guitar_light/public/images/2022-12/builders_edition_k24ce-front.png?itok=C7LCxFDH"
                    }
                  />
                </div>
                <div className="name">Builder's Edition</div>
                <div className="description">
                  <span>
                    Each guitar in the Builder’s Edition family represents the
                    peak of Taylor’s design philosophy: comfortable, inviting
                    guitars with rich, robust tone and stunning aesthetics.{" "}
                  </span>
                </div>
              </div>
              <div className="slide-item">
                <div className="slide-image">
                  <img
                    src={
                      "https://www.taylorguitars.com/sites/default/files/styles/multi_column_module_guitar_light/public/images/2022-12/gt_urban_ash-front.png?itok=rT7NI5K7"
                    }
                  />
                </div>
                <div className="name">Taylor GT</div>
                <div className="description">
                  <span>
                    The Taylor GT™ (short for Grand Theater) introduces a new
                    category of acoustic guitar in size, feel and sound. GT’s
                    uniquely modern proportions make it super fun and easy to
                    play, with a big sonic personality worthy of any pro
                    player’s toolbox.{" "}
                  </span>
                </div>
              </div>



              <div className="slide-item">
                <div className="slide-image">
                  <img
                    src={
                      "https://www.taylorguitars.com/sites/default/files/styles/multi_column_module_guitar_light/public/images/2022-12/taylor-724ce-1201272186-frontleft-2022_0.png?itok=3gx-aNoq"
                    }
                  />
                </div>
                <div className="name">Koa</div>
                <div className="description">
                  <span>
                  Powered by a new V-Class voicing recipe, koa’s sweet midrange sings out more vividly, and with a punchier response, than ever before.{" "}
                  </span>
                </div>
              </div>
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
