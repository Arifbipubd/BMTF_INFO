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
          <div className='about_section aboutUsSection'>
            {/* <!-- About Shortcode --> */}
            <div className='fn_cs_about'>
              <div className='container'>
                <div className='customAboutDiv'>
                  <div className='customLeftSide'>
                    <div className='title_holder'>
                      <p>
                        Bangladesh Machine Tools Factory Limited (BMTF) is a
                        prominent state-owned entity operating under the
                        Bangladesh Army's supervision. BMTF located in Gazipur,
                        spans 260 acres and serves as a leading industrial
                        conglomerate. BMTF, led by the Chief of Army Staff as
                        the Board Chairman and a capable Managing Director,
                        boasts a strong leadership that has propelled it to
                        global recognition.
                      </p>
                      <p>
                        With a blend of military and civilian officers and a
                        dedicated workforce, BMTF is committed to contributing
                        to Bangladesh's economic transformation, aligning with
                        the 'Delta Plan 2100.' Its consistent revenue generation
                        plays a pivotal role in shaping the nation's progress
                        and development.
                      </p>
                    </div>
                  </div>
                  <div className='customRightSide'>
                    <div>
                      <img src='/csr/school.jpg' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /About Shortcode --> */}
          </div>
          {/* <!-- CSR --> */}
        </div>
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
