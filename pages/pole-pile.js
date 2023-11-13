/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import CategoryCard from "../components/verticals/category";
import { footwear } from "../lib/productCategory.json";
import PhotoGallery from "../components/Gallery/PhotoGallery";
import { Check } from "../public/svg/icon";
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
                      src='https://www.youtube.com/embed/NwBF-LlN_hM'
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
                  </div>
                  {/* Check List Shortcode  */}
                  <div className='fn_cs_check_list'>
                    <h3>Our Promises Are</h3>
                    <div className='list'>
                      <ul>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>High standard of products</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>High-quality raw materials</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Proper quality raw materials</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Reasonable prices</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Timely delivery</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Standard compliance</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Check List Shortcode  */}
                  {/* Category card start */}
                  <div className=''>
                    <h3 className='categorySectionTitle'>Product Categories</h3>
                    <div className='clientDiv'>
                      {footwear.map((client) => (
                        <CategoryCard key={client.id} data={client} />
                      ))}
                    </div>
                  </div>
                  {/* Category card End */}
                  {/* Call to Action Shortcode (with corner)  */}
                  {/* <div className='fn_cs_call_to_action corner'>
                    <div className='container'>
                      <div className='cta_holder'>
                        <div className='title_holder'>
                          <h3>Industify LLC</h3>
                          <p>
                            We build your dream house. Contact us for detailed
                            information.
                          </p>
                        </div>
                        <div className='link_holder'>
                          <Link href='/contact'>
                            <a>Our Responsibility</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* /Call to Action Shortcode (with corner)  */}

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
                        <Link href='/service-single-9'>
                          <a>Aerospace and Defense</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-8'>
                          <a>Automative Manufacturing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-7'>
                          <a>Chemical Industry</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-6'>
                          <a>Oil and Gas Industry</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-5'>
                          <a>Energy &amp; Commodities</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-4'>
                          <a>Medical Devices</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-3'>
                          <a>Housewares &amp; Home Decor</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-2'>
                          <a>Textiles &amp; Apparel</a>
                        </Link>
                      </li>
                      <li className='active'>
                        <Link href='/service-single-1'>
                          <a>Construction &amp; Engineering</a>
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
