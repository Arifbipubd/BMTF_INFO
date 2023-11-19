/** @format */

import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import Link from "next/link";
import { Arrow_r } from "../public/svg/icon";

export default function BlogSingle1() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='Accreditations and Certificates' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder nocTitle_holder'>
              <h3>Accreditations and Certificates</h3>
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
                      Accreditations and Certificates
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title */}

        {/* Accreditation Page */}
        <div className='fn_cs_project_sticky accreditationDiv'>
          <div className='container'>
            <div className='inner'>
              <div className='left_part'>
                <div className='fn_cs_sticky_section'>
                  <h3>
                    Our <span>Accreditation</span>
                  </h3>
                  <p>
                    To provide exceptional services to the insurance industry
                    and thier clients, the property owner. We are committed to
                    providing the highest level of professionalism, service
                    response, and quality workmanship.
                  </p>
                </div>
              </div>
              <div className='right_part'>
                <div className='fn_cs_sticky_section'>
                  <ul>
                    <li>
                      <div className='item'>
                        <div className='img_holder'>
                          <img src='/img/thumb/560-375.jpg' alt='' />
                          <div
                            className='abs_img'
                            style={{
                              backgroundImage: "url(/img/portfolio/1.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className='title_holder'>
                          <h3>
                            <a>Industify Gas and Oil Organization</a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='img_holder'>
                          <img src='/img/thumb/560-375.jpg' alt='' />
                          <div
                            className='abs_img'
                            style={{
                              backgroundImage: "url(/img/portfolio/1.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className='title_holder'>
                          <h3>
                            <a>Industify Gas and Oil Organization</a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='img_holder'>
                          <img src='/img/thumb/560-375.jpg' alt='' />
                          <div
                            className='abs_img'
                            style={{
                              backgroundImage: "url(/img/portfolio/1.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className='title_holder'>
                          <h3>
                            <a>Industify Gas and Oil Organization</a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Accreditation Page */}
        {/* Certificate Page */}
        <div className='fn_cs_project_sticky accreditationDiv'>
          <div className='container'>
            <div className='inner'>
              <div className='left_part'>
                <div className='fn_cs_sticky_section'>
                  <h3>
                    Our <span>Certificates</span>
                  </h3>
                  <p>
                    To provide exceptional services to the insurance industry
                    and thier clients, the property owner. We are committed to
                    providing the highest level of professionalism, service
                    response, and quality workmanship.
                  </p>
                </div>
              </div>
              <div className='right_part'>
                <div className='fn_cs_sticky_section'>
                  <ul>
                    <li>
                      <div className='item'>
                        <div className='img_holder'>
                          <img src='/img/thumb/560-375.jpg' alt='' />
                          <div
                            className='abs_img'
                            style={{
                              backgroundImage: "url(/img/portfolio/1.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className='title_holder'>
                          <h3>
                            <a>Industify Gas and Oil Organization</a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='img_holder'>
                          <img src='/img/thumb/560-375.jpg' alt='' />
                          <div
                            className='abs_img'
                            style={{
                              backgroundImage: "url(/img/portfolio/1.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className='title_holder'>
                          <h3>
                            <a>Industify Gas and Oil Organization</a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='img_holder'>
                          <img src='/img/thumb/560-375.jpg' alt='' />
                          <div
                            className='abs_img'
                            style={{
                              backgroundImage: "url(/img/portfolio/1.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className='title_holder'>
                          <h3>
                            <a>Industify Gas and Oil Organization</a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Accreditation Page */}
      </Layout>
    </>
  );
}
