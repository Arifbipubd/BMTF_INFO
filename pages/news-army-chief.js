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
        <Title title='Army chief inaugurates Army Pharma Limited in Gazipur' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>
                Chief of Army Staff inaugurates Army Pharma Limited in Gazipur
              </h3>
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
                      Army chief inaugurates Army Pharma Limited in Gazipur
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
                    <img src='News/BMTF_News_2.jpg' alt='' />
                  </div>

                  <div className='desc_holder'>
                    <p>
                      Chief of Army Staff General Aziz Ahmed inaugurated Army
                      Pharma Limited at Shimultali under Joydebpur in the
                      Gazipur district on Thursday.
                    </p>
                    <p>
                      Army Pharma Limited, a subsidiary of Bangladesh Machine
                      Tools Factory Limited (BMTF), an organization run by the
                      Bangladesh Army, started its official journey with the
                      conviction of producing and marketing quality medicines,
                      reports BSS citing an Inter-Services Public Relation
                      (ISPR) press release issued on Friday.
                    </p>
                    <p>
                      Chief of Army Staff General Aziz Ahmed termed as historic
                      the journey of Army Pharma during the birth centenary of
                      Father of the Nation Bangabandhu Sheikh Mujibur Rahman and
                      the 50th anniversary of the country’s independence.
                    </p>
                    <p>
                      Under the worthy leadership of Prime Minister Sheikh
                      Hasina, Aziz hoped, Bangladesh Army and Army Pharma would
                      play a significant role in the health sector in the days
                      to come.
                    </p>
                    <p>
                      He expressed his hope that the company will emerge as one
                      of the top pharmaceutical companies in the country within
                      the shortest possible time.
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
                      <li className='active'>
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
                      <li>
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
