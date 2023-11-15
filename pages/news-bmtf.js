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
        <Title title='BMTF to provide 3 crore blank smart cards to EC' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>BMTF to provide 3 crore blank smart cards to EC</h3>
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
                      BMTF to provide 3 crore blank smart cards to EC
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
                    <img src='img/blog/1.jpg' alt='' />
                  </div>

                  <div className='desc_holder'>
                    <p>
                      Bangladesh Army-run Bangladesh Machine Tools Factory
                      Limited will supply 3 crore blank smart cards to
                      Bangladesh Election Commission.
                    </p>
                    <p>
                      Cabinet Committee on Government Purchase in a meeting on
                      Tuesday approved the proposal along with some others from
                      different ministries.
                    </p>
                    <p>
                      Finance minister AHM Mustafa Kamal presided over the
                      virtual meeting.
                    </p>
                    <p>
                      As per the proposal, the BMTF will supply the smart cards
                      under the Identification System for Enhancing Access to
                      Services project of the Arms Forces Division of the prime
                      minister’s office at contract value of Tk 406.50 crore.
                    </p>
                    <blockquote>
                      “Seymour Whyte is a company that resembles us, with a
                      strong entrepreneurial culture. This acquisition will
                      enable us to expand synergies with VINCI Construction’s
                      existing expertise in Australia and more broadly in the
                      Pacific area,” said Jérôme Stubler, Chairman and Chief
                      Executive Officer of VINCI Construction.
                    </blockquote>
                  </div>
                </div>
                {/* /Single Blog */}
              </div>
              {/* /Main Sidebar: Left */}

              {/* Main Sidebar: Right */}
              <div className='industify_fn_rightsidebar'>
                {/* Get Sidebar */}
                <Sidebar />
                {/* /Get Sidebar */}
              </div>
              {/* Main Sidebar: Right */}
            </div>
          </div>
        </div>
        {/* /Sidebar Page */}
      </Layout>
    </>
  );
}
