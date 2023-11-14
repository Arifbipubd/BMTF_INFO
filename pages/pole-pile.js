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
      <Title title='Pole & Pile' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Pole & Pile</h3>
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
                    <span className='bread-current'>Pole & Pile</span>
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
                      src='https://www.youtube.com/embed/buIr3Ft7iLo'
                      frameborder='0'
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className='desc_holder'>
                    <p>
                      The Pole and Pile Factory is a prominent division of the
                      state-owned BMTF, one of the largest manufacturing
                      entities. In April 2016, the Chief of Army Staff, who also
                      serves as the Chairman of the BMTF Board of Directors,
                      approved the establishment of this factory. On February
                      14, 2017, the BMTF Pole Factory commenced operations with
                      a mission to support the government's 'Vision 2041' by
                      providing quality lighting solutions for every home.
                    </p>
                    <p>
                      Since its inception, the factory has been producing a wide
                      range of durable Concrete Electric Poles. It has the
                      capacity to manufacture over 1,400 poles daily, thanks to
                      the dedicated efforts of a large team of officers,
                      employees, and workers. These poles are renowned for their
                      strength and resistance to corrosion. In addition to
                      standard products, our experts specialize in designing
                      poles capable of withstanding extreme heat and natural
                      disasters. We also offer Earthing Electrodes with
                      excellent electrical conductivity, thermal stability, low
                      maintenance requirements, and a long working life.
                    </p>
                    <p>
                      Our infrastructure includes a warehouse and an R&D unit
                      alongside the main production facility. We leverage the
                      latest manufacturing techniques developed by our research
                      department to create our product range. We maintain a
                      rigorous quality control process, adhering to ISO
                      standards, to ensure that our products meet stringent
                      quality criteria at every stage.
                    </p>
                    <p>
                      To meet the high demand of our satisfied customers, we
                      have expanded our production capacity by establishing
                      additional units equipped with advanced machinery. We also
                      manufacture SPC piles for building construction to the
                      highest standards.
                    </p>
                    <h3>Our Aim</h3>
                    <p>
                      The aim of the factory is to enhance efficiency by
                      upgrading technology and adhering to the entity's spirit
                      of integrity and innovation.
                    </p>
                    <h3>Our Initiatives</h3>
                    <p>
                      We are committed to providing a safe work environment and
                      enforcing safe work practices. We insist on minimal
                      environmental impact from our manufacturing processes,
                      adhering to environmental regulations and conducting
                      regular site audits to ensure compliance. We monitor our
                      energy consumption patterns and seek opportunities for
                      conservation.
                    </p>
                    <h3>BMTF Pile</h3>
                    <p>
                      In addition, we are also expanding our expertise in
                      concrete pile manufacturing. Our centrifugal method of
                      pile forming produces high-strength dense concrete,
                      resulting in larger bearing capacity. Our piles also
                      possess large bending moment capacity and high structural
                      strength, allowing for axial load capacity, tensile
                      capacity, and bending capacity. They are highly resistant
                      to sulfate attack and steel reinforcement corrosion.
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
                              <h3>Cage Making and Setting</h3>
                              <p>
                                Reinforcement circumferential spiral wire coil
                                is placed on the lower steel mold. All
                                accessories and prestressed strand are inserted
                                longitudinally through the tension plate, spiral
                                wire coils, and anchor plate. Retaining rings at
                                regular intervals are inserted to ensure correct
                                concrete cover, and the cage is positioned in
                                the lower half of the steel molds.
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
                              <h3>Concrete Mixing and Pouring</h3>
                              <p>
                                Poles made in steel molds are specially
                                manufactured from high-quality concrete mix
                                designed to achieve the concrete strength of
                                C55/67 and durability. The high-strength
                                concrete is poured into the lower half of the
                                mold. Then, the upper half of the mold is bolted
                                on to the lower half. The prestressed strand is
                                tensioned. The mold is then shifted to the
                                spinning machine.
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
                              <h3>Spinning</h3>
                              <p>
                                Once the mold is placed on the spinning machine,
                                it is rotated for a specific designed time. The
                                pole derives its extra strength properties from
                                the unique centrifugal manufacturing process,
                                which gives uniform densely compacted concrete
                                along the whole length of the pole. The final
                                stage of the spinning cycle also removes excess
                                water.
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
                              <h3>Steam Curing</h3>
                              <p>
                                After the spinning process is completed, the
                                concrete pole is placed in the curing chamber
                                for steam curing. Steam curing is carried out at
                                controlled temperature and for a specific time
                                period.
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
                              <h3>De-molding</h3>
                              <p>
                                Then the concrete pole is shifted to the
                                de-molding work station. The pole is carefully
                                de-molded and shifted to the finishing work
                                station for further finishing, final inspection,
                                and testing.
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
                              <h3>Finishing, Inspection, and Testing</h3>
                              <p>
                                Finishing of poles is carried out by cutting the
                                exposed strand, applying concrete capping at the
                                bottom, and applying Nitocote. Physical and
                                dimensional checks are conducted. All concrete
                                poles are delivered to the customers with a
                                product test certificate and delivery note.
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
                      <li className='active'>
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
