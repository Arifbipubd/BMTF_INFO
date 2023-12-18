/** @format */

import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import Link from "next/link";

export default function BlogSingle1() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='DNCC LED Lights Supply & Installation' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>DNCC LED Lights Supply & Installation</h3>
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
                    <span className='bread-current'>
                      DNCC LED Lights Supply & Installation
                    </span>
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
                {/* Single Blog */}
                <div className='industify_fn_blog_single'>
                  <div className='img_holder'>
                    <img src='/project-image/DNCC-LED.jpg' alt='' />
                  </div>

                  <div className='desc_holder'>
                    <p>
                      The Dhaka North City Corporation (DNCC) will complete
                      installing 46,410 LED lights in the city streets by 2021
                      under the 'LED Light Supply and Installation in DNCC
                      Streets' project.
                    </p>
                    <p>
                      The revised cost of the project is over Tk 3.69 billion.
                      The project was supposed to complete by December 31 this
                      year which may be extended due to the COVID-19 pandemic.
                    </p>
                    <p>
                      The DNCC signed an agreement with Bangladesh Machine Tools
                      Factory (BMTF) in this regard on Tuesday at a program at
                      Nagar Bhaban in the city's Gulshan.
                    </p>
                    <p>
                      Project director and DNCC superintendent engineer Rafiqul
                      Islam and BMTF general manager Lt Col Tofael Ahmed signed
                      the deal on behalf of their respective organizations.
                    </p>
                    <p>
                      DNCC mayor Atiqul Islam was present during signing of the
                      agreement.
                    </p>
                    <p>
                      Mr Atiqul Islam said that 42,500 LED lights can be
                      installed by 2021. Some of the streets will be illuminated
                      by January 01, he said.
                    </p>
                    <p>
                      "It is part of our pledge of making the city safe by
                      illuminating the city. The lights are made in Europe with
                      10 years of warranty," he added.
                    </p>
                    <p>
                      The BMTF will complete the work efficiently and do the
                      maintenance during warranty period.
                    </p>
                    <p>
                      The LED light installation project (1st amended) was
                      approved in September last year at a cost of over Tk 3.69
                      billion. The number of LED lights was mentioned 42,450 in
                      the original project which was later increased to 46,410.
                    </p>
                    <p>
                      Of those, 3,408 will be of 150 watts, 3,646 of 90 watt,
                      10,666 of 60 watt and 25,661 of 40 watt.
                    </p>
                    <p>
                      The cost of lights installation has been fixed at more
                      than Tk 3.19 billion. This includes purchase of lights,
                      pole purchase and installation, bracket, fittings,
                      controlling system, software and overhead cables.
                    </p>
                    <p>
                      The lights have been imported from Poland. The rest Tk 494
                      million will be spent for purchase of hydraulic car and
                      other vehicles, machinery and equipment.
                    </p>
                  </div>
                </div>
                {/* /Single Blog */}
              </div>
              {/* /Main Sidebar: Left */}

              {/* Main Sidebar: Right  */}
              <div className='industify_fn_rightsidebar'>
                {/* Service List  */}
                <div className='service_list_as_function'>
                  <div className='title'>
                    <h3>All News of BMTF</h3>
                  </div>
                  <div className='list_holder'>
                    <ul>
                      <li>
                        <Link href='/news-bmtf'>
                          <a>BMTF to provide 3 crore blank smart cards to EC</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/news-army-chief'>
                          <a>
                            Army chief inaugurates Army Pharma Limited in
                            Gazipur
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/news-bangladesh-machine'>
                          <a>
                            Bangladesh Machine Tools Factory Limited wins global
                            ISO certification
                          </a>
                        </Link>
                      </li>
                      <li className='active'>
                        <Link href='/dncc-led-light'>
                          <a>DNCC LED Lights Supply & Installation</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/jhilmil-residential-park'>
                          <a>Jhilmil Residential Park Project</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/solar-home-system'>
                          <a>Solar Home System & Installation</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Service List  */}
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
