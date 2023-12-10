/** @format */

import React from "react";
import Services from "../components/Home/HomeServices";
import Slider from "../components/Home/HomeSlider";
import Layout from "../layout/layout";
import Title from "../layout/title";
import Link from "next/link";
import {
  Arrow_r,
  Certificate,
  Checked,
  Quotes,
  Stars,
} from "../public/svg/icon";

const right = "/img/about/right.jpg";
const rightImage = "/Home/home-specialty.jpg";
const testimonial = "/Home/Quote-bg.jpg";
const portfolio1 = "/project-image/DNCC-LED.jpg";
const portfolio2 = "/project-image/jhilmil-card.png";
const portfolio3 = "/project-image/Solar-Home-System.jpg";
const map = "/img/blog/map.png";
const blog1 = "/News/BMTF_News_1.jpg";
const blog2 = "/News/BMTF_News_2.jpg";
const blog3 = "/News/BMTF_News_3.jpg";

export default function Index() {
  return (
    <>
      <Layout className={"transdark"}>
        <Title title='Home' />
        <Slider />
        {/* <!-- Principles Modern --> */}
        <div className='fn_cs_principles_modern'>
          <div className='container'>
            <div className='inner'>
              <div className='shape'>
                <span className='shape1'></span>
                <span className='shape2'></span>
              </div>
              <ul className='fn_cs_miniboxes'>
                <li>
                  <div className='item'>
                    <div className='title_holder'>
                      <h3>Vision</h3>
                      <p>
                        Enhancing in-house production capacity through
                        innovation, diversification and excellence in
                        transforming Bangladesh Machine Tools Factory (BMTF)
                        Limited as mother and defense industry.
                      </p>
                    </div>
                    <div className='number_holder'>01</div>
                  </div>
                </li>
                <li>
                  <div className='item'>
                    <div className='title_holder'>
                      <h3>Mission</h3>
                      <p>
                        Make Bangladesh Machine Tools Factory (BMTF) Limited a
                        lead commercially viable organization to contribute in
                        the national economy.
                      </p>
                    </div>
                    <div className='number_holder'>02</div>
                  </div>
                </li>
                <li>
                  <div className='item'>
                    <div className='title_holder'>
                      <h3>Core Values</h3>
                      <p>
                        BMTF is unwavering in its commitment to align its core
                        values with the high standards of its clients. We place
                        a premium on innovation, community engagement, and
                        sustainable practices, all aimed at delivering customer
                        satisfaction through customized solutions.
                      </p>
                    </div>
                    <div className='number_holder'>03</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Principles Modern --> */}

        {/* <!-- About Section --> */}
        <div className='about_section padding_mobile'>
          {/* <!-- About Shortcode --> */}
          <div className='fn_cs_about'>
            <div className='container'>
              <div className='a_inner'>
                <div className='leftpart'>
                  <div className='title_holder'>
                    <h3 className='title'>About BMTF</h3>
                    <p className='justify_text'>
                      Bangladesh Machine Tools Factory Limited (BMTF) is a
                      prominent state-owned entity operating under the
                      Bangladesh Army's supervision. BMTF located in Gazipur,
                      spans 260 acres and serves as a leading industrial
                      conglomerate. BMTF, led by the Chief of Army Staff as the
                      Board Chairman and a capable Managing Director, boasts a
                      strong leadership that has propelled it to global
                      recognition.
                    </p>
                    <p className='justify_text'>
                      With a blend of military and civilian officers and a
                      dedicated workforce, BMTF is committed to contributing to
                      Bangladesh's economic transformation, aligning with the
                      'Delta Plan 2100.' Its consistent revenue generation plays
                      a pivotal role in shaping the nation's progress and
                      development.
                    </p>
                  </div>
                </div>
                <div className='rightpart'>
                  {/* <div className="r_inner" id="scene">
										<div className="layer border" data-depth="0.3">
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5">
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${right})` }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9">
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
									</div> */}
                  <div
                    className='r_inner'
                    id='scene'
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div
                      className='layer border'
                      data-depth='0.3'
                      style={{
                        position: "relative",
                        display: "block",
                        left: "0px",
                        top: "0px",
                        transform: "translate3d(21.2782px, -19.0075px, 0px)",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <span className='span1'></span>
                      <span className='span2'></span>
                      <img src='img/thumb/500-560.jpg' alt='' />
                    </div>
                    <div
                      className='img_holder layer'
                      data-depth='0.5'
                      style={{
                        position: "absolute",
                        display: "block",
                        left: "0px",
                        top: "0px",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(35.4636px, -31.6792px, 0px)",
                      }}
                    >
                      <img src='img/thumb/500-560.jpg' alt='' />
                      <div
                        className='abs_img'
                        data-bg-img='/Home/home-intro.png'
                        style={{
                          backgroundImage: "url(/Home/home-intro.png)",
                        }}
                      ></div>
                    </div>
                    <div
                      className='dots layer'
                      data-switch='disable'
                      data-depth='0.9'
                      style={{
                        position: "absolute",
                        display: "block",
                        left: "0px",
                        top: "0px",
                        transform: "translate3d(63.8345px, -57.0226px, 0px)",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <img src='img/thumb/500-560.jpg' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /About Shortcode --> */}
        </div>
        {/* <!-- /About Section --> */}

        <Services />

        {/* <!-- Service Section --> */}
        <div className='service_section padding_mobile'>
          {/* <!-- About with Rating Shortcode --> */}
          <div className='fn_cs_about_with_rating'>
            <div className='container'>
              <div className='awr_inner'>
                <div className='left_part'>
                  <div className='title_holder'>
                    <h3>Why choose our services?</h3>
                    <p>
                      At BMTF, we stand as a beacon of excellence in the
                      machinery and tools industry. Our unwavering commitment to
                      quality, innovation, and customer satisfaction sets us
                      apart. With a rich heritage in precision engineering,
                      cutting-edge technology, and a highly skilled workforce,
                      we offer unparalleled products and services. When you
                      choose BMTF, you're selecting reliability, durability, and
                      the promise of a brighter industrial future. Join us in
                      shaping tomorrow's success with the trusted expertise of
                      BMTF by your side.
                    </p>
                  </div>
                  <div className='signature'>
                    <Certificate className='fn__svg' />
                    <p>
                      BMTF is <br />
                      ISO 9001:2015 Qualified.
                    </p>
                  </div>
                  <div className='signature'>
                    <Certificate className='fn__svg' />
                    <p>
                      BMTF is <br />
                      ISO 45001:2018 Qualified.
                    </p>
                  </div>
                </div>
                <div className='right_part'>
                  <div className='r_inner'>
                    <div className='top_section'>
                      <div className='badge_holder'>
                        <div className='badge_left'>
                          <div className='b_title'>
                            <h3>
                              State Owned Largest Production Facility of
                              <br />
                              Bangladesh
                            </h3>
                          </div>
                          <div className='b_desc'>
                            <span className='year'>44</span>
                            <span className='text'>Years of Experience</span>
                          </div>
                        </div>
                        <div
                          className='badge_right'
                          style={{ backgroundImage: `url(${rightImage})` }}
                        ></div>
                      </div>
                      {/* <div className='rating_holder'>
                        <div className='r_header'></div>
                        <div className='r_footer'></div>
                        <Link href='#'>
                          <a></a>
                        </Link>
                        <Stars className='fn__svg' />
                        <h3 className='rating_number'>9.7</h3>
                        <h3 className='rating_text'>Customer Rating</h3>
                      </div> */}
                    </div>
                    <div className='bottom_section'>
                      <div className='list'>
                        <ul>
                          <li>
                            <div className='item'>
                              <span className='icon'>
                                <Checked className='fn__svg' />
                              </span>
                              <p>Biggest State Owned Production facility.</p>
                            </div>
                          </li>
                          <li>
                            <div className='item'>
                              <span className='icon'>
                                <Checked className='fn__svg' />
                              </span>
                              <p>Successfully serving 50+ Clients.</p>
                            </div>
                          </li>
                          <li>
                            <div className='item'>
                              <span className='icon'>
                                <Checked className='fn__svg' />
                              </span>
                              <p>DIgital & Smart Integrated Factory.</p>
                            </div>
                          </li>
                          <li>
                            <div className='item'>
                              <span className='icon'>
                                <Checked className='fn__svg' />
                              </span>
                              <p>Most dedicated & passionate team.</p>
                            </div>
                          </li>
                          <li>
                            <div className='item'>
                              <span className='icon'>
                                <Checked className='fn__svg' />
                              </span>
                              <p>No compromise in quality control. </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /About with Rating Shortcode --> */}
        </div>
        {/* <!-- /Service Section --> */}

        {/* <!-- Call to Action --> */}
        <div className='fn_cs_call_to_action'>
          <div className='container'>
            <div className='cta_holder'>
              <div className='title_holder'>
                <h3>BMTF Corporate Social Responsibility</h3>
                <p>
                  Our Commitment is to make Made in Bangladesh a Global
                  Preferred Choice.
                </p>
              </div>
              <div className='link_holder'>
                <Link href='/csr'>
                  <a>Our Responsibility</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Call to Action --> */}

        {/* <!-- Testimonial Section --> */}
        <div
          className='testimonial_section'
          style={{ backgroundImage: `url(${testimonial})` }}
        >
          <div className='overlay'></div>

          {/* <!-- Single Testimonial Shortcode --> */}
          <div className='fn_cs_single_testimonial'>
            <div className='container'>
              <div className='inner'>
                <Quotes className='fn__svg' />
                <div className='content_holder'>
                  <p>
                    Under the banner of Bangladesh Machine Tools Factory Limited
                    (BMTF), we stand at the forefront of innovation and
                    industrial excellence. Spanning across 260 acres in Gazipur,
                    BMTF is more than an industrial conglomerate; it's a
                    testament to our commitment to Bangladesh's economic ascent.
                    Guided by the visionary leadership of the Chief of Army
                    Staff as the Board Chairman and supported by a skilled team,
                    we've earned global recognition through our relentless
                    pursuit of excellence.
                  </p>
                  <h3>
                    Major General Sultanuzzaman Md Saleh Uddin, OSP, SGP, ndc
                  </h3>
                  <h5>Managing Director, BMTF Ltd</h5>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Single Testimonial Shortcode --> */}
        </div>
        {/* <!-- /Testimonial Section --> */}

        {/* <!-- Project Sticky Full --> */}
        <div className='fn_cs_project_sticky_full'>
          <div className='inner'>
            <div className='left_part'>
              <div className='fn_cs_sticky_section'>
                <h3>Our latest projects.</h3>
                <p>
                  BMTF has embarked on several projects and remains dedicated to
                  consistently advancing its initiatives. With a commitment to
                  fostering self-sufficiency and supporting local industries,
                  BMTF’s projects reflect its ongoing efforts to contribute to
                  the economic development of Bangladesh. These endeavors aim to
                  address the evolving needs of various sectors, including
                  agriculture, construction, and manufacturing, by producing
                  high-quality machinery and tools to bolster the nation's
                  self-reliance and progress. BMTF's dedication to these
                  projects underscores its role as a pivotal player in advancing
                  industrial and agricultural sectors in Bangladesh.
                </p>
                <Link href='/portfolio'>
                  <a>View All Projects</a>
                </Link>
              </div>
            </div>

            <div className='right_part'>
              <div className='fn_cs_sticky_section'>
                <ul>
                  <li>
                    <div className='item'>
                      <div className='img_holder'>
                        <img src='img/thumb/700-500.jpg' alt='' />
                        <div
                          className='abs_img'
                          style={{ backgroundImage: `url(${portfolio1})` }}
                        ></div>
                        <Link href='/dncc-led-light'>
                          <a></a>
                        </Link>
                      </div>
                      <div className='title_holder'>
                        <h3>
                          <Link href='/dncc-led-light'>
                            <a>DNCC LED Lights Supply & Installation</a>
                          </Link>
                        </h3>
                        <span className='desc'>
                          The Dhaka North City Corporation (DNCC) will complete
                          installing 46,410 LED lights in the city streets by
                          2021 under the 'LED Light Supply and Installation in
                          DNCC Streets' project.
                        </span>
                        <p>
                          <Link href='/dncc-led-light'>
                            <a>
                              <span className='text'>More Details</span>
                              <span className='arrow'>
                                <Arrow_r className='fn__svg' />
                              </span>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='img_holder'>
                        <img src='img/thumb/700-500.jpg' alt='' />
                        <div
                          className='abs_img'
                          style={{ backgroundImage: `url(${portfolio2})` }}
                        ></div>
                        <Link href='/jhilmil-residential-park'>
                          <a></a>
                        </Link>
                      </div>
                      <div className='title_holder'>
                        <h3>
                          <Link href='/jhilmil-residential-park'>
                            <a>Jhilmil Residential Park</a>
                          </Link>
                        </h3>
                        <span className='desc'>
                          SVC Jhilmil Residential BD Limited and Bangladesh
                          Machine Tools Factory Limited (BMTF) have collaborated
                          for the 'Jhilmil Residential Park Technology
                          Transfer'.
                        </span>
                        <p>
                          <Link href='/jhilmil-residential-park'>
                            <a>
                              <span className='text'>More Details</span>
                              <span className='arrow'>
                                <Arrow_r className='fn__svg' />
                              </span>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='img_holder'>
                        <img src='img/thumb/700-500.jpg' alt='' />
                        <div
                          className='abs_img'
                          style={{ backgroundImage: `url(${portfolio3})` }}
                        ></div>
                        <Link href='/solar-home-system'>
                          <a></a>
                        </Link>
                      </div>
                      <div className='title_holder'>
                        <h3>
                          <Link href='/solar-home-system'>
                            <a>Solar Home System Supply & Installation</a>
                          </Link>
                        </h3>
                        <span className='desc'>
                          The Cabinet Committee on Public Purchase on Wednesday
                          approved four proposals including one for installing
                          42,500 solar systems in the country’s three hill
                          districts.
                        </span>
                        <p>
                          <Link href='/solar-home-system'>
                            <a>
                              <span className='text'>More Details</span>
                              <span className='arrow'>
                                <Arrow_r className='fn__svg' />
                              </span>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Project Sticky Full --> */}

        {/* <!-- Blog Section --> */}
        <div className='blog_section padding_mobile'>
          <div
            className='overlay'
            style={{ backgroundImage: `url(${map})` }}
          ></div>

          {/* <!-- Main Title --> */}
          <div className='fn_cs_main_title '>
            <div className='container'>
              <div className='title_holder'>
                <h3>News</h3>
              </div>
            </div>
          </div>
          {/* <!-- /Main Title --> */}

          {/* <!-- Triple Blog Modern Shortcode --> */}
          <div className='fn_cs_triple_blog_modern fn_alpha'>
            <div className='container'>
              <div className='inner'>
                <ul>
                  <li>
                    <div className='item'>
                      <div
                        className='img_holder'
                        style={{ backgroundImage: `url(${blog1})` }}
                      >
                        <div className='time'>
                          <span></span>
                          <h3>09</h3>
                          <h5>May</h5>
                          <h5>2023</h5>
                        </div>
                        <img src='News/BMTF_News_1.jpg' alt='' />
                      </div>
                      <div className='title_holder'>
                        <h3>
                          <Link href='/news-bmtf'>
                            <a>
                              BMTF to provide 3 crore blank smart cards to EC
                            </a>
                          </Link>
                        </h3>
                        <p className='t_footer'>
                          <Link href='/news-bmtf'>
                            <a>Read More</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div
                        className='img_holder'
                        style={{ backgroundImage: `url(${blog2})` }}
                      >
                        <div className='time'>
                          <span></span>
                          <h3>27</h3>
                          <h5>May</h5>
                          <h5>2021</h5>
                        </div>
                        <img src='News/BMTF_News_2.jpg' alt='' />
                      </div>
                      <div className='title_holder'>
                        <h3>
                          <Link href='/news-army-chief'>
                            <a>
                              Chief of Army Staff inaugurates Army Pharma
                              Limited in Gazipur
                            </a>
                          </Link>
                        </h3>
                        <p className='t_footer'>
                          <Link href='/news-army-chief'>
                            <a>Read More</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div
                        className='img_holder'
                        style={{ backgroundImage: `url(${blog3})` }}
                      >
                        <div className='time'>
                          <span></span>
                          <h3>18</h3>
                          <h5>Feb</h5>
                          <h5>2022</h5>
                        </div>
                        <img src='News/BMTF_News_3.jpg' alt='' />
                      </div>
                      <div className='title_holder'>
                        <h3>
                          <Link href='/news-bangladesh-machine'>
                            <a>
                              Bangladesh Machine Tools Factory Limited wins
                              global ISO certification
                            </a>
                          </Link>
                        </h3>
                        <p className='t_footer'>
                          <Link href='/news-bangladesh-machine'>
                            <a>Read More</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /Triple Blog Modern Shortcode --> */}
        </div>
        {/* <!-- /Blog Section --> */}
      </Layout>
    </>
  );
}
