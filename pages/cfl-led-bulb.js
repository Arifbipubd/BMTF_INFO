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
      <Title title=' CFL AND LED BULB' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3> CFL AND LED BULB</h3>
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
                    <span className='bread-current'> CFL AND LED BULB</span>
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
                      src='https://www.youtube.com/embed/2dBaoLQC-wE'
                      frameborder='0'
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className='desc_holder'>
                    <p>
                      The BMTF CFL & LED bulb factory is a leading manufacturer
                      and exporter in the country, specializing in an impressive
                      range of innovative, diverse, user-friendly, and
                      high-quality Light Emitting Diode-LED and Compact
                      Fluorescent Lamps-CFL tubes and bulbs. Under the guidance
                      of the Honorable Chief of Army Staff and Chairman of
                      Bangladesh Machines and Tools Factory-BMTF Limited,
                      production of CFL and LED bulbs commenced on October 1,
                      2011. Our state-of-the-art facilities, along with an
                      excellent logistics and supply management network, have
                      enabled us to reach even the most remote areas of the
                      country. With a dedicated workforce of approximately 50
                      employees, we continuously work towards the improvement of
                      our project. Moreover, we maintain a research and quality
                      control department that diligently monitors the products
                      at every stage to meet the standards of the International
                      Organization for Standardization. Our products have
                      garnered national acclaim for their longevity, energy
                      efficiency, low maintenance, and remarkable
                      energy-efficient features.
                    </p>
                    <h3>Motto</h3>
                    <p>Innovative and Quality life for all.</p>
                    <h3>Our Aim</h3>
                    <p>
                      Ensuring reliable, energy-saving, innovative, diversified,
                      smart, and best-quality CFL and LED products with the
                      highest customer satisfaction in the local and global
                      market.
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
                            <p>Long Life</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Energy Efficiency</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Ecologically Friendly</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Durable Quality</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Design Flexibility</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>
                              Operational in Extremely Cold or Hot Temperatures
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Easy Disposal</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Instant Lighting & Frequent Switching</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Low-Voltage</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Check List Shortcode  */}
                  <div className='desc_holder'>
                    <h3>SOLAR STREET LIGHT</h3>
                    <p>
                      The government of Bangladesh has developed a comprehensive
                      plan to transition 20% of its total electricity and fuel
                      sector to renewable energy sources as part of its
                      sustainable development goal for 2030. This initiative has
                      already achieved a total capacity of 220 MW of solar power
                      through the installation of 6.9 million solar home systems
                      (SHSs). The National Solar Energy Roadmap for 2021-2041
                      has been successfully implemented, with solar lights being
                      adopted by various government and non-government
                      organizations. Furthermore, the installation of new Solar
                      Street Lights in zillas and upazilas throughout the
                      country is currently underway. In addition to the new
                      installations, 20% of the existing lights are being
                      replaced by Solar Street Lights. Different city
                      corporations are actively involved in this project, and
                      BMTF is a proud partner in this journey.
                    </p>
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
                      <li>
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
                      <li className='active'>
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
