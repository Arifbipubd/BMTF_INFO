/** @format */

import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='News and Tenders' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>News and Tenders</h3>
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
                    <span className='bread-current'>News and Tenders</span>
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
                <ul className='industify_fn_postlist'>
                  <li>
                    <div className='post has-post-thumbnail'>
                      <div className='time'>
                        <span></span>
                        <h3>28</h3>
                        <h5>Aug</h5>
                        <h5>2021</h5>
                      </div>
                      <div className='img_holder'>
                        <a>
                          <img src='/News/BMTF_News_1.jpg' alt='' />
                        </a>
                        <span className='shape1'></span>
                        <span className='shape2'></span>
                      </div>
                      <div className='content_holder'>
                        <div className='title'>
                          <h3>
                            <Link href='/news-bmtf'>
                              <a>
                                BMTF to provide 3 crore blank smart cards to EC
                              </a>
                            </Link>
                          </h3>
                        </div>
                        <div className='excerpt_holder'>
                          <p>
                            Bangladesh Army-run Bangladesh Machine Tools Factory
                            Limited will supply 3 crore blank smart cards to
                            Bangladesh Election Commission.
                          </p>
                        </div>
                        <div className='read_holder'>
                          <p>
                            <Link href='/news-bmtf'>
                              <a>Read More</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='post has-post-thumbnail'>
                      <div className='time'>
                        <span></span>
                        <h3>27</h3>
                        <h5>Aug</h5>
                        <h5>2021</h5>
                      </div>
                      <div className='img_holder'>
                        <a>
                          <img src='/News/BMTF_News_2.jpg' alt='' />
                        </a>
                        <span className='shape1'></span>
                        <span className='shape2'></span>
                      </div>
                      <div className='content_holder'>
                        <div className='title'>
                          <h3>
                            <Link href='/news-army-chief'>
                              <a>
                                Army chief inaugurates Army Pharma Limited in
                                Gazipur
                              </a>
                            </Link>
                          </h3>
                        </div>
                        <div className='excerpt_holder'>
                          <p>
                            Chief of Army Staff General Aziz Ahmed inaugurated
                            Army Pharma Limited at Shimultali under Joydebpur in
                            the Gazipur district on Thursday.
                          </p>
                        </div>
                        <div className='read_holder'>
                          <p>
                            <Link href='/news-army-chief'>
                              <a>Read More</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='post has-post-thumbnail'>
                      <div className='time'>
                        <span></span>
                        <h3>26</h3>
                        <h5>Aug</h5>
                        <h5>2021</h5>
                      </div>
                      <div className='img_holder'>
                        <a>
                          <img src='/News/BMTF_News_3.jpg' alt='' />
                        </a>
                        <span className='shape1'></span>
                        <span className='shape2'></span>
                      </div>
                      <div className='content_holder'>
                        <div className='title'>
                          <h3>
                            <Link href='/news-bangladesh-machine'>
                              <a>
                                Bangladesh Machine Tools Factory Limited wins
                                global ISO certification
                              </a>
                            </Link>
                          </h3>
                        </div>
                        <div className='excerpt_holder'>
                          <p>
                            Bangladesh Machine Tools Factory Limited (BMTF), a
                            state-owned limited company under the management of
                            Bangladesh Army has been awarded the global ISO
                            standard certification recently.
                          </p>
                        </div>
                        <div className='read_holder'>
                          <p>
                            <Link href='/news-bangladesh-machine'>
                              <a>Read More</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className='clearfix'></div>
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
