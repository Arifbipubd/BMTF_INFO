/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";

export default function Services() {
  return (
    <>
      <Title title='Verticals' />
      <Layout>
        {/* Page Title */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>Verticals</h3>
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
                    <span className='bread-current'>Verticals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title */}

        {/* Sidebar Page */}
        <div className='industify_fn_sidebarpage'>
          <div className='container'>
            <div className='s_inner'>
              {/* Main Sidebar: Left */}
              <div className='industify_fn_leftsidebar'>
                <ul className='industify_fn_service_list'>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Footwear-and-leather.jpg)",
                            }}
                          ></div>
                          <Link href='/footwear-and-leather'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/footwear-and-leather'>
                              <a>Footwear Industry and Leather Industry</a>
                            </Link>
                          </h3>
                          <p>
                            The BMTF Footwear & Leather Factory stands as one of
                            the largest military shoe manufacturing shops in
                            Bangladesh. They introduced their
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/footwear-and-leather'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Furniture.jpg)",
                            }}
                          ></div>
                          <Link href='/furniture'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/furniture'>
                              <a>Furniture</a>
                            </Link>
                          </h3>
                          <p>
                            The BMTF Furniture Factory is renowned for its
                            distinctive style and high-quality furniture.
                            Utilizing cutting-edge technology
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/furniture'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Pole-n-pile.jpg)",
                            }}
                          ></div>
                          <Link href='/pole-pile'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/pole-pile'>
                              <a>Pole and Pile</a>
                            </Link>
                          </h3>
                          <p>
                            The Pole and Pile Factory is a prominent division of
                            the state-owned BMTF, one of the largest
                            manufacturing entities. In April 2016
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/pole-pile'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/vehicle-assembly.jpg)",
                            }}
                          ></div>
                          <Link href='/vehicle-assembly'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/vehicle-assembly'>
                              <a>Vehicle Assembly</a>
                            </Link>
                          </h3>
                          <p>
                            In 2001, the Bangladesh Machine Tools Factory (BMTF)
                            established a state-of-the-art Vehicle Assembly
                            Shop, equipped
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/vehicle-assembly'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Steel-structure.jpg)",
                            }}
                          ></div>
                          <Link href='/steel-structure-manufacturing'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/steel-structure-manufacturing'>
                              <a>Steel Structure Manufacturing</a>
                            </Link>
                          </h3>
                          <p>
                            The Steel Structure Manufacturing Shop at BMTF has
                            transformed from a vision in the year 2000 to a
                            reality that
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/steel-structure-manufacturing'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Electronic-Assembly.jpg)",
                            }}
                          ></div>
                          <Link href='/electronic-assembly'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/electronic-assembly'>
                              <a>Electronic Assembly</a>
                            </Link>
                          </h3>
                          <p>
                            The BMTF Electronic Assembly Shop is a hub for
                            high-tech electronics and projects aimed at
                            advancing Bangladesh's digital
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/electronic-assembly'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/crafties.jpg)",
                            }}
                          ></div>
                          <Link href='/bmtf-crafties'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/bmtf-crafties'>
                              <a>BMTF Crafties</a>
                            </Link>
                          </h3>
                          <p>
                            BMTF Crafties began in 2020 with a commitment to
                            create special designs for military, paramilitary,
                            and various
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/bmtf-crafties'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/CFL-and-LED.jpg)",
                            }}
                          ></div>
                          <Link href='/cfl-led-bulb'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/cfl-led-bulb'>
                              <a>CFL AND LED BULB</a>
                            </Link>
                          </h3>
                          <p>
                            The BMTF CFL & LED bulb factory is a leading
                            manufacturer and exporter in the country,
                            specializing in an impressive
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/cfl-led-bulb'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage: "url(/allVerticals/CTD.jpg)",
                            }}
                          ></div>
                          <Link href='/central-tooling-factory'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/central-tooling-factory'>
                              <a>Central Tooling Department</a>
                            </Link>
                          </h3>
                          <p>
                            The Central Tooling Department (CTD) is a vital
                            component of the Machine Shop at BMTF. This
                            department is equipped
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/central-tooling-factory'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Forge-shop.jpg)",
                            }}
                          ></div>
                          <Link href='/forge-shop'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/forge-shop'>
                              <a>Forge Shop</a>
                            </Link>
                          </h3>
                          <p>
                            BMTF Forge Shop is a renowned brand in the country's
                            forging industry. Since 1980, the shop has been
                            consistently
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/forge-shop'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Foundry-shop.png)",
                            }}
                          ></div>
                          <Link href='/foundry-shop'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/foundry-shop'>
                              <a>Foundry Shop</a>
                            </Link>
                          </h3>
                          <p>
                            The Foundry Shop, established in 1967, has been
                            providing clients with a diverse range of casting
                            solutions ever since.
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/foundry-shop'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/galvanizing-shop.jpg)",
                            }}
                          ></div>
                          <Link href='/galvanizing-plant'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/galvanizing-plant'>
                              <a>Galvanizing Plant</a>
                            </Link>
                          </h3>
                          <p>
                            The BMTF Galvanizing Shop is committed to
                            strengthening and enhancing the durability of steel.
                            Established in 2018
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/galvanizing-plant'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/heat-n-surface.jpg)",
                            }}
                          ></div>
                          <Link href='/heat-and-surface'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/heat-and-surface'>
                              <a>Heat and Surface Treatment</a>
                            </Link>
                          </h3>
                          <p>
                            Since 1980, the BMTF Heat and Surface Treatment
                            Plant has been offering a comprehensive range of
                            thermal processing services.
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/heat-and-surface'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Machine-shop.jpg)",
                            }}
                          ></div>
                          <Link href='/machine-shop'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/machine-shop'>
                              <a>Machine Shop</a>
                            </Link>
                          </h3>
                          <p>
                            The Machine Shop stands as the principal
                            manufacturing unit within Bangladesh Machine Tools
                            Factory (BMTF) Limited, under
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/machine-shop'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage: "url(/allVerticals/Pharma.png)",
                            }}
                          ></div>
                          <Link href='/army-pharma'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/army-pharma'>
                              <a>Army Pharma</a>
                            </Link>
                          </h3>
                          <p>
                            Army Pharma Ltd., a state-owned pharmaceutical
                            company, commenced operations in June 2019 under
                            Bangladesh Machine Tools
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/army-pharma'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Packaging.jpg)",
                            }}
                          ></div>
                          <Link href='/packaging-unit'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/packaging-unit'>
                              <a>Packaging Unit</a>
                            </Link>
                          </h3>
                          <p>
                            BMTF Packaging Unit (BMTF-2) stands as a
                            distinguished entity in the manufacturing and export
                            of square bottom brown paper bags.
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/packaging-unit'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item_in'>
                        <div className='img_holder'>
                          <div
                            className='img_abs'
                            style={{
                              backgroundImage:
                                "url(/allVerticals/Pattern-shop.jpg)",
                            }}
                          ></div>
                          <Link href='/pattern-shop'>
                            <a></a>
                          </Link>
                        </div>
                        <div className='title'>
                          <h3>
                            <Link href='/pattern-shop'>
                              <a>Pattern Shop</a>
                            </Link>
                          </h3>
                          <p>
                            The BMTF Pattern Shop specializes in crafting a
                            diverse range of patterns to accommodate various
                            molding techniques.
                          </p>
                        </div>
                        <div className='read_more'>
                          <Link href='/pattern-shop'>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className='clearfix'></div>
              </div>
              {/* /Main Sidebar: Left */}

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
        {/* /Sidebar Page */}
      </Layout>
    </>
  );
}
