/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";

export default function ServiceSingle1() {
  return (
    <>
      <Title title='CSR' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Corporate Social Responsibility</h3>
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
                      Corporate Social Responsibility
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
          {/* <!--CSR --> */}
          <div className='container'>
            <div className='fn_cs_info_rating csrSection'>
              <div className='container'>
                <div className='inner'>
                  <div className='left_part'>
                    <div className='title_holder'>
                      <p className='l_desc'>
                        Being a state-owned entity we are obliged to play a
                        central role in society and feel responsible to keep up
                        this special way of working. We make business decisions
                        linked to ethical values, compliance with legal
                        requirements and respect for people, country and the
                        environment. BMTF has established a high school inside
                        its premises to help improve educational status of the
                        children of the employees. For children of low scale
                        workers, BMTF CSR department exempt their tuition fees.
                        Apart from all these BMTF patronize different
                        initiatives for overall wellbeing of its employees. It
                        has an enormous picnic spot for recreation of the
                        employees and their family members.
                      </p>
                      <p>
                        Besides, we believe in religious and cultural harmony. A
                        beautiful mosque is there inside the vast area. During
                        Covid-19 pandemic BMTF has played a very pivotal role.
                        It has maintained salaries and wages of its employees’
                        and workers on a regular basis. During the early phase,
                        BMTF handed down ventilators to Combined Military
                        Hospital-CMH to meet the growing demand. Also it has
                        aided Kuwait Armed Forces with Health Sanitizing
                        Products.
                      </p>
                    </div>
                  </div>
                  <div className='middle_part'>
                    <div className='m_in'>
                      <div
                        className='tagline_holder'
                        style={{ height: "310.969px" }}
                      >
                        <div className='tl_inner'>
                          <span>Corporate Social Responsibility (CSR)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='right_part'>
                    <div
                      className='o_img'
                      style={{
                        backgroundImage: "url(/csr/school.jpg)",
                      }}
                    ></div>
                    <div className='o_color'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- CSR --> */}
        </div>
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
