/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import {
  Drawing,
  Learning,
  TowerCrane,
} from "../public/svg/service/IconService";

export default function ServiceSingle1() {
  return (
    <>
      <Title title='Forge Shop' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Forge Shop</h3>
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
                    <span className='bread-current'>Forge Shop</span>
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
                    <img src='img/service/single/1.jpg' alt='' />
                    {/* <iframe
                      width='100%'
                      src='https://www.youtube.com/embed/FGOEmtRJOjU'
                      frameborder='0'
                      allowfullscreen
                    ></iframe> */}
                  </div>
                  <div className='desc_holder'>
                    <p>
                      BMTF Forge Shop is a renowned brand in the country's
                      forging industry. Since 1980, the shop has been
                      consistently producing high-quality products for the
                      nation. We specialize in the manufacturing and marketing
                      of die, cold and open die, rolled ring forged, and
                      machined components. Our daily production capacity stands
                      at approximately 10 tons. Over the years, we have
                      experienced exponential growth, representing values of
                      quality, dedication, and innovation. Our forging process
                      ensures parts possess appropriate mechanical properties,
                      and we maintain stringent quality control at every step.
                      We are committed to continuous and systematic development
                      of our skills, processes, and services, ensuring long-term
                      sustainability and customer satisfaction. Our production
                      quality has been ISO 9001:2015 certified.
                    </p>
                    <h3>Our Aim</h3>
                    <p>
                      The aim of the Forging Shop is to manufacture products
                      with the highest quality of forging, enabling us to expand
                      our current market and explore new business opportunities,
                      thereby contributing to the strengthening of the national
                      economy.
                    </p>
                  </div>
                  {/* Manufacturing Process Start  */}
                  <div className='fn_cs_services_classic manufacture_process'>
                    <div className=''>
                      <div className='list'>
                        <h3 className='title'>Our Manufacturing Process</h3>
                        <ul>
                          <li>
                            <div className='item'>
                              <span className='bg1'></span>
                              <span className='bg2'></span>
                              <span className='icon'>
                                <Learning className='fn__svg' />
                              </span>
                              <h3>Hammer Machine</h3>
                              <p>
                                Our modern drop hammer machine provides a rapid
                                high-energy transfer of force for forging works.
                                We also possess two forging dies that expedite
                                the process.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className='item'>
                              <span className='bg1'></span>
                              <span className='bg2'></span>
                              <span className='icon'>
                                <Drawing className='fn__svg' />
                              </span>
                              <h3>Press Machine</h3>
                              <p>
                                Our heavy press machine is capable of performing
                                trimming, bending, punching, piercing, and
                                forming with great precision to meet our
                                customer’s demands.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className='item'>
                              <span className='bg1'></span>
                              <span className='bg2'></span>
                              <span className='icon'>
                                <TowerCrane className='fn__svg' />
                              </span>
                              <h3>Copy Milling</h3>
                              <p>
                                Our high-tech copy-milling machine precisely
                                replicates any job for forging work.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Manufacturing Process End  */}
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
                      <li className='active'>
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
