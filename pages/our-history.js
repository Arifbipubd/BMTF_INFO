/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import { Arrow_r } from "../public/svg/icon";

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
            <div className='container'>
              <div className='ourHistory'>
                <section id='timeline'>
                  <h1>A Flexbox Timeline</h1>
                  <p class='leader'>
                    All cards must be the same height and width for space
                    calculations on large screens.
                  </p>
                  <div class='demo-card-wrapper'>
                    <div class='demo-card demo-card--step1'>
                      <div class='head'>
                        <div class='number-box'>
                          <span>01</span>
                        </div>
                        <h2>
                          <span class='small'>Subtitle</span> Technology
                        </h2>
                      </div>
                      <div class='body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Soluta reiciendis deserunt doloribus
                          consequatur, laudantium odio dolorum laboriosam.
                        </p>
                        <img src='http://placehold.it/1000x500' alt='Graphic' />
                      </div>
                    </div>

                    <div class='demo-card demo-card--step2'>
                      <div class='head'>
                        <div class='number-box'>
                          <span>02</span>
                        </div>
                        <h2>
                          <span class='small'>Subtitle</span> Confidence
                        </h2>
                      </div>
                      <div class='body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Soluta reiciendis deserunt doloribus
                          consequatur, laudantium odio dolorum laboriosam.
                        </p>
                        <img src='http://placehold.it/1000x500' alt='Graphic' />
                      </div>
                    </div>

                    <div class='demo-card demo-card--step3'>
                      <div class='head'>
                        <div class='number-box'>
                          <span>03</span>
                        </div>
                        <h2>
                          <span class='small'>Subtitle</span> Adaptation
                        </h2>
                      </div>
                      <div class='body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Soluta reiciendis deserunt doloribus
                          consequatur, laudantium odio dolorum laboriosam.
                        </p>
                        <img src='http://placehold.it/1000x500' alt='Graphic' />
                      </div>
                    </div>

                    <div class='demo-card demo-card--step4'>
                      <div class='head'>
                        <div class='number-box'>
                          <span>04</span>
                        </div>
                        <h2>
                          <span class='small'>Subtitle</span> Consistency
                        </h2>
                      </div>
                      <div class='body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Soluta reiciendis deserunt doloribus
                          consequatur, laudantium odio dolorum laboriosam.
                        </p>
                        <img src='http://placehold.it/1000x500' alt='Graphic' />
                      </div>
                    </div>

                    <div class='demo-card demo-card--step5'>
                      <div class='head'>
                        <div class='number-box'>
                          <span>05</span>
                        </div>
                        <h2>
                          <span class='small'>Subtitle</span> Conversion
                        </h2>
                      </div>
                      <div class='body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Soluta reiciendis deserunt doloribus
                          consequatur, laudantium odio dolorum laboriosam.
                        </p>
                        <img src='http://placehold.it/1000x500' alt='Graphic' />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/*History Timeline End */}
          </div>
        </div>
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
