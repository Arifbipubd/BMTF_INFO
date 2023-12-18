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
        <Title title='Solar Home System & Installation' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>Solar Home System & Installation</h3>
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
                      Solar Home System & Installation
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
                    <img src='/project-image/Solar-Home-System.jpg' alt='' />
                  </div>

                  <div className='desc_holder'>
                    <p>
                      The Cabinet Committee on Public Purchase on Wednesday
                      approved four proposals including one for installing
                      42,500 solar systems in the country’s three hill
                      districts.
                    </p>
                    <p>
                      Of these, 40,000 are solar home systems (SHS), each having
                      100 watt-peak capacity, while the remaining 2,500 are
                      solar community systems, each having 320 watt-peak
                      capacity.
                    </p>
                    <p>
                      Finance Minister AHM Mustafa Kamal presided over the
                      meeting.
                    </p>
                    <p>
                      According to officials, the Parbatya Chattagram Unnayan
                      Board (PCUB) under the Ministry of Chittagong Hill Tracts
                      Affairs (MCHTA) will install solar home and community
                      systems at a cost of Tk204.37 crore.
                    </p>
                    <p>
                      Bangladesh Machine Tools Factory (BMTF) Ltd, an enterprise
                      of Bangladesh Army, won the contract through direct
                      procurement method (DPM) to supply and install the solar
                      systems.
                    </p>
                    <p>
                      Under the method, any government entity can purchase any
                      product or service through negotiation without any bidding
                      process.
                    </p>
                    <p>
                      A senior official at MCHTA said that the same proposal was
                      approved by the Cabinet body on April 29 to award the
                      contract to the Border Guard of Bangladesh (BGB) Welfare
                      Trust in the same process.
                    </p>
                    <p>
                      He added: “But after objections from the Ministry of Home
                      Affairs, the contract was cancelled and later awarded to
                      BMTF through negotiation.”
                    </p>
                    <p>
                      Kazi Mokhlesur Rahman, deputy secretary of the MCHTA,
                      said: “About 40,000 families at the off-grid remote areas
                      will benefit from the solar home systems.”
                    </p>
                    <p>
                      He said: “The government will provide the solar systems to
                      the families free of cost which will enable a consumer to
                      use four LED bulbs, each having 3 watt capacity, a mobile
                      recharging panel, a 12 volt fan and a small TV.”
                    </p>
                    <p>
                      There will be a battery to provide 5-6 hours backup power
                      supply for the solar system.
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
                      <li className='active'>
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
