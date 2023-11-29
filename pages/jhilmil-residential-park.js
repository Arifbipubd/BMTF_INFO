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
        <Title title='Jhilmil Residential Park' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>Jhilmil Residential Park</h3>
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
                      Jhilmil Residential Park
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
                    <img
                      src='/project-image/Jhilmil-Residential-Park.jpg'
                      alt=''
                    />
                  </div>

                  <div className='desc_holder'>
                    <p>
                      SVC Jhilmil Residential BD Limited and Bangladesh Machine
                      Tools Factory Limited (BMTF) have collaborated for the
                      'Jhilmil Residential Park Technology Transfer'.
                    </p>
                    <p>
                      An announcement ceremony was held at Pan Pacific Sonargaon
                      in the capital on Wednesday, said a press release issued
                      on Wednesday.
                    </p>
                    <p>
                      The Chairman of SVC Jhilmil Residential BD Limited,
                      Professor Dr Sharifah Sabrina, and Brigadier General Md
                      Arman Hossain , SGP,BGBM,Ndc,Psc , Director of BMTF,
                      signed the Collaboration as their organization's
                      representative.
                    </p>
                    <p>
                      Dr Sharifah Sabrina welcomed everyone with a warm address,
                      followed by an overview of the collaboration by BMTF.
                    </p>
                    <p>
                      Private Partner from Malaysia working with Rajuk, the
                      Contracting Authority for the PPP Project Jhilmil
                      Residential Park, is poised to leap frog into implementing
                      the Project with Technology Transfer from Malaysia to
                      Bangladesh in most of its procurements for the Project.
                    </p>
                    <p>
                      Having understood the current economic conditions and the
                      need for foreign exchange in Bangladesh, BNG Global
                      Holding has resorted to manufacture some of the advanced
                      and innovative construction material in Bangladesh, thus
                      avoiding the economic drain as a result of heavy taxes and
                      also containing the foreign currency in the country.
                    </p>
                    <p>
                      Technology transfer is one of the key components of
                      commitment and collaboration in preparing the Development
                      Index around diverse issues, there is no natural tendency
                      to make global economic growth a win-win enterprise, and
                      the consumption of knowledge is no longer non-rival.
                      Finding smarter options to allay these fears and to
                      accelerate efforts to ensure that everyone, everywhere,
                      can take the advantage of technological progress and
                      thereby reduce inequality was the thrust the Private
                      Partner took upon them, reads the release.
                    </p>
                    <p>
                      They made smart technology transfer of manufacturing spun
                      Piles in the premises of BMITF, a concern of the
                      Bangladesh Army.
                    </p>
                    <p>
                      The Ministry of Housing and Public Works welcomed this
                      progress towards the quick implementation of the Project.
                    </p>
                    <div className='img_holder'>
                      <img src='/project-image/jhilmil-full.png' alt='' />
                    </div>
                    <p>
                      Much has been spoken of the delay to get the project off
                      the ground. The two years of pandemic delayed the whole
                      implementation process and the shipping of all
                      procurements from Malaysia as was the intention of BNG
                      Global Holding was also hampered with the global economic
                      crisis coupled with heavy taxation making it so difficult
                      to leap frog into the project implementation, with their
                      desired new construction technology, away from the mundane
                      brick and mortar that is commonly used in building
                      residential projects in Bangladesh
                    </p>
                    <p>
                      The determination of the Private Partner BNG to give the
                      people of Bangladesh a better home has been consistent.
                      Hence, they are endeavoring to leap frog into the
                      production of spun piles and also the Industrialized
                      Building system as is known in Malaysia. This technique of
                      construction avoids all the mishaps of a traditional
                      construction method that would have to be dismantled
                      unlike in IBS. It also reduces manual labor, shortens to
                      great extent construction tenure, and offers a clean
                      environment to work in. BNG is planning on driving the
                      piles three months from now when the first batch of piles
                      will be manufactured and brought to site for driving. The
                      piling work offers great speed in completion without
                      worrying about weather conditions, and logistics. Homes
                      built with this technology offer homeowners strong
                      concrete walls resistant to earthquakes and have stood the
                      test of time.
                    </p>
                    <p>
                      The project to handover to Rajuk 13700 apartments in 4
                      years would have been achieved as the Private Partner BNG
                      Global Holding had all of the resources to spearhead the
                      Project but the unavoidable natural calamity of pandemic
                      and war was totally unanticipated.
                    </p>
                    <p>
                      Today the Company is poised to make its Dream come true
                      and achieve its sustainable development goal motto of
                      Connecting Communities.
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
                      <li className='active'>
                        <Link href='/jhilmil-residential-park'>
                          <a>Jhilmil Residential Park</a>
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
