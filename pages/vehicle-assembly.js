/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
export default function ServiceSingle1() {
  return (
    <>
      <Title title='Vehicle Assembly' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Vehicle Assembly</h3>
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
                    <span className='bread-current'>Vehicle Assembly</span>
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
                      src='https://www.youtube.com/embed/lotbMoeqOOo'
                      frameborder='0'
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className='desc_holder'>
                    <p>
                      In 2001, the Bangladesh Machine Tools Factory (BMTF)
                      established a state-of-the-art Vehicle Assembly Shop,
                      equipped with cutting-edge machinery and tools, to uphold
                      the highest quality standards in vehicle assembly. This
                      facility boasts high-speed production lines dedicated to
                      activities such as spot welding, painting, and rigorous
                      vehicle testing, enabling an annual production capacity of
                      3,000 motorcycles and 1,500 wagons. Over the past two
                      decades, we have successfully assembled a diverse range of
                      vehicles including trucks, pickups, buses, jeeps, and
                      more.
                    </p>
                    <p>
                      Currently, we are actively engaged in international
                      collaborations with top automobile companies, with a focus
                      on expanding our business beyond borders. Furthermore, we
                      have undertaken a new venture to assemble advanced armored
                      tanks and combat vehicles. Our continuous exploration in
                      the automobile sector has had a positive impact on our
                      country's economy and its citizens. With our strategic
                      location, well-developed logistics, skilled workforce,
                      robust infrastructure, and our status as a state-owned
                      enterprise, we stand as one of the leading automobile
                      assembly industries in our nation.
                    </p>
                    <h3>Assembly Process</h3>
                    <p>
                      Our assembly lines are organized into three main
                      categories: single model, mixed model, and multi-model
                      assembly lines.
                    </p>
                    <p>
                      In the single model assembly line, we focus on assembling
                      a single product without any variants. All operations at
                      the stations along the line are standardized, resulting in
                      identical products upon completion.
                    </p>
                    <p>
                      The mixed-model assembly line handles the assembly of
                      variants of a single product with varying operation times
                      for different models. This line allows for model
                      sequencing without resource constraints, enabling the
                      processing of different models without the need for
                      modifications.
                    </p>
                    <p>
                      The multi-model assembly line represents the most complex
                      method in terms of operational requirements. Here, we
                      carry out the assembly of different products that require
                      distinct assembly processes.
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
                      <li className='active'>
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
