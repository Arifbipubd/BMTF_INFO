/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title='Furniture' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Furniture</h3>
              <div className='industify_fn_breadcrumbs'>
                <ul>
                  <li>
                    <Link href='/'>
                      <a title='Home'>Home</a>
                    </Link>
                  </li>
                  <li className='separator'>
                    <span></span>
                  </li>
                  <li>
                    <Link href='/verticals'>
                      <a title='verticals'>Verticals</a>
                    </Link>
                  </li>
                  <li className='separator'>
                    <span></span>
                  </li>
                  <li>
                    <span className='bread-current'>Furniture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title  */}

        {/* Sidebar Page  */}
        <div className='industify_fn_sidebarpage'>
          <div className='container'>
            <div className='s_inner'>
              {/* Main Sidebar: Left  */}
              <div className='industify_fn_leftsidebar'>
                {/* Single Service  */}
                <div className='industify_fn_service_single'>
                  <div className='img_holder'>
                    {/* <img src='img/service/single/1.jpg' alt='' /> */}
                    <iframe
                      width='100%'
                      src='https://www.youtube.com/embed/Sf1SDoOmfwc'
                      frameborder='0'
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className='desc_holder'>
                    <p>
                      The BMTF Furniture Factory is renowned for its distinctive
                      style and high-quality furniture. Utilizing cutting-edge
                      technology and machinery, we offer an extensive range of
                      furniture and home decor that mirrors your personal taste
                      and lifestyle. Our team of designers and carpenters
                      collaborate to cater to our clients' aesthetic
                      preferences. Our furniture is characterized by its simple
                      yet elegant design, and a commitment to using honest,
                      quality materials. We are dedicated to crafting beautiful
                      and flawless pieces, ensuring our products are both
                      comfortable and elegant.
                    </p>
                    <p>
                      As the newest flagship of Bangladesh Machine Tools Factory
                      Limited, the BMTF Furniture Factory commenced operations
                      in September 2018 with a 90,000 square foot area. It now
                      operates in a 150,000 square foot space, establishing
                      itself as a leader in furniture manufacturing in the
                      country. We source and prepare wood from our own sawmill,
                      guaranteeing it is properly seasoned and treated under the
                      supervision of specialists.
                    </p>
                    <h3>Our Aim</h3>
                    <p>
                      From design to delivery, our aim is to create value for
                      our customers through Reliability and Flexibility. As the
                      country’s largest furniture manufacturer, we are committed
                      to continued business growth and contributing to the
                      national economy.
                    </p>
                    <h3>Categories of Services</h3>
                    <p>
                      The factory comprises three main sections: one for
                      crafting metal furniture, one for producing wooden
                      furniture, and another dedicated to manufacturing medical
                      furniture. This enables us to create a wide variety of
                      furniture, including combinations of wood and metal, with
                      various designs and styles. Our design team employs the
                      latest software for 2D and 3D modeling, ensuring our
                      designs meet international standards and align with global
                      technology trends. We take great pride in our quality,
                      woodworking skills, and on-time delivery, making us highly
                      competitive in the market.
                    </p>
                    <h3>Wooden Section</h3>
                    <p>
                      We employ green technology in the manufacturing process,
                      minimizing carbon emissions and their impact on the
                      environment. We are attuned to your needs and committed to
                      a sustainable future.
                    </p>
                    <h3>Metal Section</h3>
                    <p>
                      The BMTF stainless steel series caters to the demands of
                      the modern era, offering lighter and space-defining
                      options. Through the use of ultra-high-strength stainless
                      steel sheets, we enhance the appearance to be more
                      gorgeous and fashionable.
                    </p>
                    <h3>Medical Furniture Section</h3>
                    <p>
                      BMTF Furniture provides modern and functional hospital
                      furniture, designed with meticulous attention to ensure
                      the comfort of patients, visitors, and staff. We offer
                      furniture for patient wards, emergency rooms, operating
                      rooms, staff offices, and waiting areas. Employing a
                      unique approach, we provide high-quality and affordable
                      furniture, facilitating healthcare facilities in
                      delivering excellent care. Additionally, we offer custom
                      solutions tailored to meet the specific needs of our
                      customers.
                    </p>
                    <h3>Our Values</h3>
                    <p>
                      We rigorously adhere to due diligence procedures to ensure
                      the timber we use complies with Bangladesh Timber
                      Regulations.
                    </p>
                    <p>
                      Our quality products are designed to provide years of
                      service before replacement, contributing to waste
                      reduction.
                    </p>
                    <p>
                      We minimize our environmental impact by utilizing every
                      segment of cut-off or left-over timber to create beautiful
                      souvenirs.
                    </p>
                    <p>
                      Our work environment meets international safety standards.
                    </p>
                  </div>
                  {/* Check List Shortcode  */}
                  <div className='fn_cs_check_list'>
                    <h3>Our Promises Are</h3>
                    <div className='list'>
                      <ul>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Qualitative Array of Products</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Stringent Quality Control</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>High-tech Infrastructure</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Dedicated Workforce</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Prompt Delivery of Orders</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Competitive Prices</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Customized Solutions</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Single Service  */}
              </div>
              {/* /Main Sidebar: Left  */}

              {/* Main Sidebar: Right  */}
              <div className='industify_fn_rightsidebar'>
                {/* Service List  */}
                <div className='service_list_as_function'>
                  <div className='title'>
                    <h3>All Industries of BMTF</h3>
                  </div>
                  <div className='list_holder'>
                    <ul>
                      <li>
                        <Link href='/footwear-and-leather'>
                          <a>Footwear & Leather</a>
                        </Link>
                      </li>
                      <li className='active'>
                        <Link href='/furniture'>
                          <a>Furniture</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/pole-pile'>
                          <a>Pole & Pile</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/vehicle-assembly'>
                          <a>Vehicle Assembly</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/steel-structure-manufacturing'>
                          <a>Steel Structure Manufacturing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/electronic-assembly'>
                          <a>Electronic Assembly</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/bmtf-crafties'>
                          <a>BMTF Crafties</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/cfl-led-bulb'>
                          <a>CFL & LED Bulb</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/central-tooling-factory'>
                          <a>Central Tooling Department</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/forge-shop'>
                          <a>Forge Shop</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/foundry-shop'>
                          <a>Foundry Shop</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/galvanizing-plant'>
                          <a>Galvanizing Plant</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/heat-and-surface'>
                          <a>Heat and Surface Treatment</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/machine-shop'>
                          <a>Machine Shop</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/army-pharma'>
                          <a>Army Pharma</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/packaging-unit'>
                          <a>Packaging Unit</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/pattern-shop'>
                          <a>Pattern Shop</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Service List  */}

                {/* Get Sidebar  */}
                <Sidebar />
                {/* /Get Sidebar  */}
              </div>
              {/* Main Sidebar: Right  */}
            </div>
          </div>
        </div>
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
