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
      <Title title='Electronic Assembly' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Electronic Assembly</h3>
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
                    <span className='bread-current'>Electronic Assembly</span>
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
                      The BMTF Electronic Assembly Shop is a hub for high-tech
                      electronics and projects aimed at advancing Bangladesh's
                      digital landscape. It plays a pivotal role in numerous
                      government projects focused on automating both public and
                      private organizations within the country. The team
                      possesses expertise in assembling various electronic
                      devices, including laptops, notebooks, and tablets.
                      Furthermore, they are engaged in specialized projects such
                      as the manufacturing of Electronic Voting Machines (EVMs),
                      National ID Smart Cards, Vehicle Number Plates, and
                      Digital Driver's Licenses vital initiatives for the
                      nation. They are at the forefront of incorporating modern
                      technology and innovating to further develop and expand
                      their operations
                    </p>
                    <h3>Our Aim</h3>
                    <p>
                      The aim of this shop is to assemble or produce the latest
                      technological products of national interest and contribute
                      to the digitalization of Bangladesh. They work today for a
                      better tomorrow.
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
                              <h3>Rubber Outsole Pressing</h3>
                              <p>
                                Our shoe molds consist of two parts — the insole
                                and outsole. First, the outsole is prepped with
                                color for a logo as well as a background color.
                                The middle plate is closed with the colors
                                added, and then raw rubber is placed into the
                                mold.
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
                              <h3>Rubber Insole Pressing</h3>
                              <p>
                                During the insole pressing process, we add raw
                                rubber to shape the forefront and place the mold
                                back into the heat to form the insole.
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
                              <h3>Fusing</h3>
                              <p>
                                The insole and outsole are later efficiently
                                fused to form a finished rubber sole,
                                prioritizing comfort for the feet.
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
