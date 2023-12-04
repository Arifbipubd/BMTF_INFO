/** @format */

import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import {
  TowerCrane,
  Drawing,
  Learning,
} from "../public/svg/service/IconService";
import { Check, Arrow_r } from "../public/svg/icon";
import Link from "next/link";

export default function BlogSingle1() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='About Us' />
        {/* /Page Title */}

        {/* Sidebar Page */}
        <div className=''>
          {/* <!-- Who We Are Section --> */}
          <div className='about_section aboutUsSection'>
            {/* <!-- About Shortcode --> */}
            <div className=''>
              <div className='container'>
                <div className='a_inner'>
                  <div className='customAboutDiv'>
                    <div className='customAboutLeftSide'>
                      <div className='title_holder'>
                        <h3>Who We Are</h3>
                        <p className='justify_text'>
                          Bangladesh Machine Tools Factory Limited (BMTF) is a
                          prominent state-owned entity operating under the
                          Bangladesh Army's supervision. BMTF located in
                          Gazipur, spans 260 acres and serves as a leading
                          industrial conglomerate. BMTF, led by the Chief of
                          Army Staff as the Board Chairman and a capable
                          Managing Director, boasts a strong leadership that has
                          propelled it to global recognition.
                        </p>
                        <p className='justify_text'>
                          With a blend of military and civilian officers and a
                          dedicated workforce, BMTF is committed to contributing
                          to Bangladesh's economic transformation, aligning with
                          the 'Delta Plan 2100.' Its consistent revenue
                          generation plays a pivotal role in shaping the
                          nation's progress and development.
                        </p>
                      </div>
                    </div>
                    <div className='customAboutRightSide'>
                      <img src='/about-bmtf.png' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /About Shortcode --> */}
          </div>
          {/* <!-- /Who We Are Section --> */}
          {/* <!-- Service Section --> */}
          <div className='service_section_2'>
            {/* <!-- Services Shortcode --> */}
            <div className='fn_cs_services'>
              <div className='container'>
                <div className='list'>
                  <ul className='aboutMission'>
                    <li>
                      <div className='item'>
                        <span className='bg1'></span>
                        <span className='bg2'></span>
                        <span className='icon'>
                          <span></span>
                          <Learning className='fn__svg' />
                        </span>
                        <h3>Mission</h3>
                        <p>
                          BMTF leads Bangladesh's industrial progress,
                          emphasizing innovation, sustainability, and social
                          responsibility. With visionary leadership, we drive
                          economic transformation and national prosperity,
                          aligning with critical development initiatives.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <span className='bg1'></span>
                        <span className='bg2'></span>
                        <span className='icon'>
                          <span></span>
                          <Drawing className='fn__svg' />
                          {/* <img className="fn__svg" src="/svg/service/drawing.svg" alt="svg" /> */}
                        </span>
                        <h3>Vision</h3>
                        <p>
                          BMTF aspire to lead Bangladesh's industry, setting new
                          manufacturing standards, fostering economic growth,
                          and global recognition through innovation,
                          diversification, and strategic partnerships, driving
                          resilience and prosperity.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <span className='bg1'></span>
                        <span className='bg2'></span>
                        <span className='icon'>
                          <span></span>
                          <TowerCrane className='fn__svg' />
                          {/* <img className="fn__svg" src="/svg/service/tower-crane.svg" alt="svg" /> */}
                        </span>
                        <h3>Core Values</h3>
                        <p>
                          BMTF is unwavering in its commitment to align its core
                          values with the high standards of its clients. We
                          place a premium on innovation, community engagement,
                          and sustainable practices, all aimed at delivering
                          customer satisfaction through customized solutions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /Services Shortcode --> */}
          </div>
          {/* <!-- /Service Section --> */}
          {/* <!--Business Strategy --> */}
          <div className='fn_cs_info_rating'>
            <div className='container'>
              <div className='inner'>
                <div className='left_part'>
                  <div className='title_holder'>
                    <h3 className='l_title'>Business Strategy</h3>
                    <p className='l_desc'>
                      Our strategic focus is on expanding our scope in
                      manufacturing, assembly, and fabrication across a wide
                      spectrum of products. This includes military and
                      commercial vehicles, electrical line hardware, machine
                      tools & spares, concrete poles & piles, footwear and
                      leather products, wooden and metal furniture, steel
                      structures, CFL & LED bulbs, solar street lights,
                      electronic items and gadgets, healthcare & hygiene
                      products, badges & metal crafts, and products under
                      e-Governance initiatives. Our goal is twofold: to bolster
                      the economic viability and operational dynamism of our
                      factory while also contributing to reducing Bangladesh's
                      import reliance on these goods.
                    </p>
                    <p>
                      Moreover, we aim to actively engage in government
                      projects, spanning construction, simulation, security,
                      transportation, energy, agriculture, and other viable
                      sectors. Through manufacturing, assembly, trading, and
                      supply, our objective is to foster sustainable growth
                      within the industry, effectively meeting the demands of
                      evolving scenarios and contributing significantly to our
                      nation's progress.
                    </p>
                  </div>
                </div>
                <div className='middle_part'>
                  <div className='m_in'>
                    <div
                      className='tagline_holder'
                      style={{ height: "310.969px" }}
                    >
                      <div className='tl_inner'>
                        <span>
                          Strategic Framework for BMTF: Navigating the Future.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='right_part'>
                  <div
                    className='o_img'
                    style={{
                      backgroundImage: "url(/bmtf-strategy.png)",
                    }}
                  ></div>
                  <div className='o_color'></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Business Strategy --> */}
          {/* Check List Shortcode  */}
          <div className='fn_cs_check_list aboutOurCapability'>
            <div className='container'>
              <h3>Our Capabilities</h3>
              <div className='list'>
                <ul>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Production and assembly of diverse machinery,
                        components, tools & spares, vehicle bodies, and defense
                        equipment.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Manufacturing of foundry and forging items, including
                        electrical line hardware, and various other products.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Fabrication of heavy steel structures, trusses,
                        architecturally exposed infrastructures, electric
                        transmission towers, bailey bridges, sandwich panels, C
                        & Z purlins, and roof sheets.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        {" "}
                        Crafting high-quality, long-lasting concrete products
                        like poles, piles, and railway sleepers, ensuring
                        durability and low maintenance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        {" "}
                        Assembly of both military and commercial vehicles,
                        showcasing our adeptness in automotive manufacturing.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Crafting top-tier wooden and metal furniture known for
                        its quality and craftsmanship.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Producing a diverse range of footwear including
                        military, para-military, formal, casual, and sports
                        varieties, along with fine leather products.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Offering galvanization, heat treatment, and surface
                        treatment services for various structural and general
                        steel products.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Manufacturing and assembling electronic products,
                        gadgets, CFL & LED, and solar street lighting solutions
                        with a focus on quality.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Crafting metallic & nonmetallic crafts, decorative items
                        such as military ranks, badges, sports items like
                        medals, crests, trophies, and gift items like lapel
                        pins, key rings, and souvenirs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Developing and manufacturing healthcare and hygiene
                        products to ensure well-being and cleanliness.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Producing eco-friendly, export-oriented food-grade paper
                        bags and packages, aligning with sustainable practices.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <Check className='fn__svg' />
                      <p>
                        Providing supply, construction, and trading services for
                        projects and commercial ventures feasible for BMTF,
                        contributing to various sectors.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Organogram Start */}
          <div>
            <div className='fn_cs_check_list'>
              <div id='organogram'>
                <div className='boardDirector'>
                  <div className=' container '>
                    <div>
                      <h3>Board of Directors</h3>
                    </div>
                    <div>
                      <img src='/bmtf-organogram.png' alt='' />
                    </div>
                  </div>
                </div>
                <div className='organogramDiv container'>
                  <div>
                    <h3>Organogram</h3>
                  </div>
                  <div>
                    <img src='/organogram.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Organogram End */}
          {/* Check List Shortcode  */}
        </div>
        {/* /Sidebar Page */}
      </Layout>
    </>
  );
}
