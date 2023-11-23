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
      <Title title='Packaging Unit' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Packaging Unit</h3>
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
                    <span className='bread-current'>Packaging Unit</span>
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
                      src='https://www.youtube.com/embed/yrDpckexiHU'
                      frameborder='0'
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className='desc_holder'>
                    <p>
                      BMTF Packaging Unit (BMTF-2) stands as a distinguished
                      entity in the manufacturing and export of square bottom
                      brown paper bags. Our commitment revolves around providing
                      clients with a comprehensive range, including versatile
                      white Kraft paper bags, brown Kraft paper grocery bags,
                      brown shopping bags, and special bags. Since our
                      inception, we have steadfastly focused on delivering
                      products that adhere to standardized quality and
                      incorporate technical innovation.
                    </p>
                    <p>
                      Our expansive manufacturing unit is well-appointed with
                      modern amenities and tools, empowering us to meet delivery
                      timelines while ensuring pocket-friendly prices. Client
                      satisfaction stands as our paramount objective, and our
                      diverse product range is entirely environmentally friendly
                      and user-friendly, devoid of any toxic or harmful
                      elements. At BMTF Packaging Unit, we are dedicated to the
                      cause of reducing plastic contamination, working
                      tirelessly to contribute to the creation of a greener
                      future.
                    </p>
                    <h3>Our Aim</h3>
                    <p>
                      Our aim is to achieve maximum client satisfaction and
                      surpass their expectations with motivated and contented
                      staff, generating sustainable results. Our business
                      objective is to grow as a commercially viable production
                      house and contribute significantly to the socio-economic
                      development of the country.
                    </p>
                  </div>
                  {/* Check List Shortcode  */}
                  <div className='fn_cs_check_list'>
                    <h3>Environmental Benefits of Using Paper Bags</h3>
                    <div className='list'>
                      <ul>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Paper bags are recyclable</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>They help in cutting down toxic waste</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Paper bags help to conserve natural resources</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Resistant and economical</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Check List Shortcode  */}
                  <div className='desc_holder'>
                    <h3>Recyclable</h3>
                    <p>
                      Paper bags are commonly 100% recyclable. Unlike plastic
                      that emits highly toxic and poisonous gases in the
                      atmosphere during the recycling process, the recycling
                      process of paper bags involves no such hazard. The
                      materials used to make paper bags easily gets decomposed
                      by bacteria and other microorganisms. Thus, the paper bag
                      takes less time to disintegrate into simpler forms. Also
                      it requires less energy to produce and recycle paper bags
                      than it does for plastic.
                    </p>
                    <h3>Cutting down toxic waste</h3>
                    <p>
                      One of the biggest benefits of using paper bags is that
                      they are biodegradable. Even if thrown randomly it mixes
                      with soil completely without leaving any kind of toxic
                      residue, becoming a fertilizer. As a result, the impact on
                      the ecosystem is minimal and pose less of a threat to the
                      environment and wildlife.
                    </p>
                    <h3>Resistant and economical</h3>
                    <p>
                      Paper bags are characterized by being a very affordable
                      element, even for a very limited budget. They are also
                      usually accessible and practical for companies, since they
                      are super easy to decorate and allow for more elegant
                      designs than plastic ones. Although their price is low,
                      the quality is good and they can have a long life.
                    </p>
                    <h3>Conserve natural resources</h3>
                    <p>
                      The manufacturing process of biodegradable plastic bags
                      consume less energy and decreases harmful gas emissions
                      and conserves our natural resources. Also the solid waste
                      percentage is less. The use of paper bags is a big
                      environmental convenience as it is a big step towards
                      making the earth a zero-waste habitat for all generations
                      to come.
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
                      <li className='active'>
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
