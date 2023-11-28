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
      <Title title='Heat And Surface Treatment' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Heat And Surface Treatment</h3>
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
                    <span className='bread-current'>
                      Heat And Surface Treatment
                    </span>
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
                      src='https://www.youtube.com/embed/6bGN5Y0pk-M'
                      frameborder='0'
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className='desc_holder'>
                    <p>
                      Since 1980, the BMTF Heat and Surface Treatment Plant has
                      been offering a comprehensive range of thermal processing
                      services. We have a strong track record of producing
                      high-quality products and have earned an ISO Certificate
                      in recognition of our stringent quality standards. Our
                      facilities are equipped to handle a wide variety of
                      components, consistently delivering dependable results.
                      Experienced engineers and technicians oversee our heat
                      treatment processes, ensuring they are aligned with the
                      specific needs of our customers.
                    </p>
                    <p>
                      In addition to heat treatment, our plant provides
                      automatic production systems, along with standard services
                      such as anodizing, electroplating, phosphate cleaning, and
                      etching. We also offer manual and semi-automatic processes
                      for immersing various products in chemical solutions
                    </p>
                    <h3>Our Aim</h3>
                    <p>
                      The aim of the plant is to enhance the quality with
                      advanced solutions that maximize the effectiveness of the
                      products and meet customer requirements.
                    </p>
                    <h3>Motto</h3>
                    <p>Quality and Durable Surfaces</p>
                  </div>
                </div>

                {/* Check List Shortcode  */}
                <div className='fn_cs_check_list'>
                  <h3 className='title'>Our Promises Are</h3>
                  <p>
                    The plant has experience in building process lines for
                    treatments that include:
                  </p>
                  <div className='list'>
                    <ul>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>Anodizing</p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>Precious Metal Plating</p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>Nickel</p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>Metal Etching</p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>Metal Cleaning</p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>
                            Copper Nickel Chrome Plating of both Metal and
                            Plastic Substrates
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>Pilot Plants for R&D and Small Batch Production</p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>PCB</p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>Urea</p>
                        </div>
                      </li>
                      <li>
                        <div className='item'>
                          <Check className='fn__svg' />
                          <p>Zinc Alloys</p>
                        </div>
                      </li>
                    </ul>
                    <p>
                      The BMTF H&ST Shop integrates the latest available
                      technologies into our array of manual and semi-automatic
                      process lines. We prioritize treatments designed for the
                      21st century. Our equipment is robust, and, significantly,
                      we place a strong emphasis on the aesthetics of our
                      products.
                    </p>
                  </div>
                </div>
                {/* Check List Shortcode  */}

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
                      <li className='active'>
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
