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
        <Title title='Bangladesh Machine Tools Factory Limited wins global ISO certification' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>
                Bangladesh Machine Tools Factory Limited wins global ISO
                certification
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
                      Bangladesh Machine Tools Factory Limited wins global ISO
                      certification
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
                      Bangladesh Machine Tools Factory Limited (BMTF), a
                      state-owned limited company under the management of
                      Bangladesh Army has been awarded the global ISO standard
                      certification recently. BMTF is one of the largest
                      commercial enterprises of its kind in Bangladesh located
                      at Shimultoly of Gazipur Sadar, built as the mother
                      industry of the country's small enterprises dealing with
                      minor engineering products.
                    </p>
                    <p>
                      Major General Sultanuzzaman Md. Saleh Uddin (Managing
                      Director of BMTF), Brigadier General Md. Abdul Hye
                      (Director Marketing), Colonel Md. Hasan Morshed (Addn
                      Director- Planning & Training) and Major A K M Humayun
                      Kabir (DGM-Planning & Training) while on behalf of
                      UNICERT, Abdul Kader, Director of UNICERT, Engr. M Liaquat
                      Ali, Director Asia Region of UNICERT's global operations
                      and Lt. Colonel Maksudul Haq (rtd) along with other senior
                      officials attended the certificate award ceremony at the
                      BMTF corporate office, at the Dhaka Cantonment on February
                      15 last.
                    </p>
                    <p>
                      UNICERT Director Abdul Kader said: "UNICERT is committed
                      to bringing world class standards to Bangladesh and to
                      offer management system certification services to the
                      highest standard to all organizations without
                      discrimination, by competent, consistent, impartial and
                      value added conformity assessments and UNICERT is proud to
                      certify the army owned company, BMTF, for two
                      international certifications related to Quality and Health
                      and Safety Management Systems." It may be mentioned here
                      that to accelerate the industrialization of erstwhile East
                      Pakistan, the factory started its journey in 1967 and
                      after the independence, it was re-inaugurated on February
                      11, 1979 under the government management.
                    </p>
                    <p>
                      Later Prime Minister Sheikh Hasina, officially handed over
                      the factory to Bangladesh Army on July 27, 2000 to
                      increase its efficiency. Since then BMTF is functioning as
                      a State-Owned Limited Company. Recently it has been
                      awarded with the with latest version of the
                      internationally recognized ISO 9001:2015 (Quality
                      Management System) and ISO 45001:2018 (Occupational Health
                      & Safety Management System) certifications from the
                      accredited certification body United Certification
                      Services Limited - UNICERT.
                    </p>
                    <p>
                      UNICERT is a private accredited certification body (CB) in
                      Bangladesh accredited by the International Accreditation
                      Services (IAS)-USA, the Department of Standards Malaysia
                      (DSM), APMG-UK and The Bangladesh Accreditation Board
                      (BAB). UNICERT is also the only CMMI transition partner in
                      Bangladesh of the CMMI Institute, USA. It provides
                      services to government and private organizations worldwide
                      related to certification, inspection, testing and training
                      on conformity assessments focused on key dynamics that
                      shape organizational behavior.
                    </p>
                    <p>
                      UNICERT awarded the international ISO certifications to
                      BMTF in recognition of its outstanding achievements and
                      commitment to international standards in factory operation
                      compliance as assessed by UNICERT.
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
