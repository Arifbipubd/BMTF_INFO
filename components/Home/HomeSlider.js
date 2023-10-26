/** @format */

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

// Images imported
const slider1 = "/img/slider/1.jpg";
const slider2 = "/img/slider/4.jpg";
const slider3 = "/img/slider/3.jpg";
const slider4 = "/img/slider/4.jpg";
const slider5 = "/img/slider/5.jpg";

export default function HomeSlider() {
  return (
    <>
      <div
        className='industify_slider_alpha'
        data-desc-show='yes'
        data-category-show='yes'
        data-nav-types='square'
        data-autoplay-switch='enabled'
        data-autoplay-time='8000'
        data-effect='cards'
        data-progress='enabled'
        data-box-pos='cr'
        data-img-effect='enabled'
        data-text-effect='enabled'
      >
        {/* <!-- Alpha Slider: navigation --> */}
        <div className='owl_control'>
          <div className='fn_prev'>
            <span>
              <span className='a'></span>
              <span className='b'></span>
              <span className='c'></span>
            </span>
          </div>
          <div className='fn_next'>
            <span>
              <span className='a'></span>
              <span className='b'></span>
              <span className='c'></span>
            </span>
          </div>
        </div>
        {/* <!-- /Alpha Slider: navigation --> */}

        {/* <!-- Alpha Slider: pagination --> */}
        <div className='swiper-pagination'></div>
        {/* <!-- /Alpha Slider: pagination --> */}

        {/* <!-- Alpha Slider: wrapper --> */}
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          autoplaydisableoninteraction={false}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".fn_prev",
            nextEl: ".fn_next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className='custom-class'
        >
          <SwiperSlide>
            <div className='item'>
              <div
                className='img_holder'
                style={{ backgroundImage: `url(${slider1})` }}
              ></div>
              <div className='title_holder'>
                <div className='inner'>
                  <div className='in'>
                    <p>
                      <span>Industry</span>
                    </p>
                    <h3>
                      <span>Production through excellence</span>
                    </h3>
                    <div className='desc'>
                      <span>
                        Bangladesh Machine Tools Factory Limited A commercial
                        enterprise under the management of Bangladesh Army
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item'>
              <div
                className='img_holder'
                style={{ backgroundImage: `url(${slider2})` }}
              ></div>
              <div className='title_holder'>
                <div className='inner'>
                  <div className='in'>
                    <p>
                      <span>BMTF Ltd</span>
                    </p>
                    <h3>
                      <span>A Catalyst for Industrial Growth</span>
                    </h3>
                    <div className='desc'>
                      <span>
                        BMTF Ltd in Gazipur, Bangladesh, established in 1967 on
                        a 260-acre site, is a symbol of industrial progress and
                        a key driver of engineering enterprises in the nation,
                        shaping Bangladesh's industrial landscape significantly.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item'>
              <div
                className='img_holder'
                style={{ backgroundImage: `url(${slider3})` }}
              ></div>
              <div className='title_holder'>
                <div className='inner'>
                  <div className='in'>
                    <p>
                      <span>Engineering Sector</span>
                    </p>
                    <h3>
                      <span>Highest tax payers in 2021-22</span>
                    </h3>
                    <div className='desc'>
                      <span>
                        In the fiscal year 2021-22, BMTF became the engineering
                        sector's top taxpayer, underscoring its substantial
                        economic contributions and pivotal role in Bangladesh's
                        industrial landscape, highlighting its commitment to
                        fiscal responsibility.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item'>
              <div
                className='img_holder'
                style={{ backgroundImage: `url(${slider4})` }}
              ></div>
              <div className='title_holder'>
                <div className='inner'>
                  <div className='in'>
                    <p>
                      <span>Enduring Legacy</span>
                    </p>
                    <h3>
                      <span>Committed to Society</span>
                    </h3>
                    <div className='desc'>
                      <span>
                        At BMTF, we're more than just a business – we're a force
                        for good. From nurturing education and well-being for
                        our employees to providing essential support, we are
                        committed to making a positive impact on society.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item'>
              <div
                className='img_holder'
                style={{ backgroundImage: `url(${slider5})` }}
              ></div>
              <div className='title_holder'>
                <div className='inner'>
                  <div className='in'>
                    <p>
                      <span>Multifaceted Capabilities </span>
                    </p>
                    <h3>
                      <span>
                        Empowering Innovation, Precision, and Excellence
                      </span>
                    </h3>
                    <div className='desc'>
                      <span>
                        BMTF offers a wide range of versatile capabilities,
                        spanning from manufacturing machinery, military
                        equipment, and furniture to healthcare products and
                        services like galvanizing and electronic assembly, all
                        characterized by a commitment to innovation and
                        precision.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <!-- Alpha Slider: wrapper --> */}
      </div>
      {/* <!-- /Alpha Slider --> */}
    </>
  );
}
