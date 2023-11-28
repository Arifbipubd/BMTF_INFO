/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import HistoryImage from "../components/Gallery/historyPhotoGallery";
export default function ServiceSingle1() {
  return (
    <>
      <Title title='Our History' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Our History</h3>
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
                    <span className='bread-current'>Our History</span>
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
            {/*History Timeline Start */}
            <div className='ourHistory'>
              <section id='timeline'>
                <div class='demo-card-wrapper'>
                  <div class='demo-card demo-card--step1'>
                    <div class='head'>
                      <div class='number-box'>
                        <span>01</span>
                      </div>
                      <h2>
                        <span class='small'>In</span> 1963
                      </h2>
                    </div>
                    <div class='body'>
                      <p>
                        The Bangladesh Machine Tools Factory (BMTF) aimed to be
                        a central force in East Pakistan's industrial growth,
                        focusing on supporting small enterprises in minor
                        engineering products. Over time, it transformed into one
                        of Bangladesh's major commercial enterprises, playing a
                        crucial role in shaping the nation's industrial
                        landscape since its inception.
                      </p>
                      <img src='/History/1963.jpg' alt='Graphic' />
                    </div>
                  </div>

                  <div class='demo-card demo-card--step2'>
                    <div class='head'>
                      <div class='number-box'>
                        <span>02</span>
                      </div>
                      <h2>
                        <span class='small'>In</span> 1967
                      </h2>
                    </div>
                    <div class='body'>
                      <p>
                        The Bangladesh Machine Tools Factory (BMTF) officially
                        launched its operation. Concurrently, construction
                        efforts were underway, establishing the physical
                        groundwork for BMTF's role as a significant player in
                        Bangladesh's industrial development.
                      </p>
                      <img src='/History/1967.png' alt='Graphic' />
                    </div>
                  </div>

                  <div class='demo-card demo-card--step3'>
                    <div class='head'>
                      <div class='number-box'>
                        <span>03</span>
                      </div>
                      <h2>
                        <span class='small'>In</span> 1972
                      </h2>
                    </div>
                    <div class='body'>
                      <p>
                        The operational reins of the Bangladesh Machine Tools
                        Factory (BMTF) were handed over to the Bangladesh Steel
                        & Engineering Corporation. This strategic decision aimed
                        to optimize efficiency and enhance the factory's
                        performance under the specialized management of a
                        renowned entity.
                      </p>
                    </div>
                  </div>

                  <div class='demo-card demo-card--step4'>
                    <div class='head'>
                      <div class='number-box'>
                        <span>04</span>
                      </div>
                      <h2>
                        <span class='small'>In</span> 1979
                      </h2>
                    </div>
                    <div class='body'>
                      <p>
                        Following the independence of Bangladesh, a remarkable
                        journey started on February 11, 1979, with the official
                        inauguration of the Bangladesh Machine Tools Factory
                        (BMTF). This marked a crucial step in the nation's
                        post-independence industrial development.
                      </p>
                      <img src='/History/1979.jpg' alt='Graphic' />
                    </div>
                  </div>

                  <div class='demo-card demo-card--step5'>
                    <div class='head'>
                      <div class='number-box'>
                        <span>05</span>
                      </div>
                      <h2>
                        <span class='small'>From</span> 1994-2000
                      </h2>
                    </div>
                    <div class='body'>
                      <p>The factory was closed during this tenure.</p>
                      <img src='/History/1994.png' alt='Graphic' />
                    </div>
                  </div>
                  <div class='demo-card demo-card--step6'>
                    <div class='head'>
                      <div class='number-box'>
                        <span>06</span>
                      </div>
                      <h2>
                        <span class='small'>In</span> 2000
                      </h2>
                    </div>
                    <div class='body'>
                      <p>
                        On July 27, 2000 Honorable Prime Minister Sheikh Hasina
                        handed over The BMTF industry to Bangladesh Army to
                        increase the efficiency. The whole operating system of
                        BMTF is officially going under Bangladesh Army and it
                        has been a remarkable journey since then.{" "}
                      </p>
                      <img src='/History/2000.png' alt='Graphic' />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*History Timeline End */}
            <div className='historyImage'>
              <div>
                <h3>Memory Snaps</h3>
              </div>
              <HistoryImage />
            </div>
          </div>
        </div>
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
