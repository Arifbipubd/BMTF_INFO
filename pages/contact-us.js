/** @format */

import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import { Location } from "../public/svg/icon";
import { Facebook, Linkedin, Youtube } from "../public/svg/social/IconSocial";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='Contact' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>Get in Touch</h3>
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
                    <span className='bread-current'>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title */}

        {/* Contact */}
        <div className='industify_fn_contact'>
          <div className='container'>
            <div className='contact_in'>
              <div className='contact_holder'>
                <div className='contact_left'>
                  <h3>Get in touch with us</h3>
                  <form
                    className='contact_form'
                    action='/'
                    method='post'
                    autoComplete='off'
                    data-email='frenifyteam@gmail.com'
                  >
                    {/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

                    <div
                      className='success'
                      data-success='Your message has been received, we will contact you soon.'
                    ></div>
                    <div className='empty_notice'>
                      <span>Please Fill Required Fields</span>
                    </div>
                    {/*  */}
                    <div className='items'>
                      <div className='item'>
                        <input id='name' type='text' placeholder='Name' />
                      </div>
                      <div className='item'>
                        <input id='email' type='email' placeholder='Email' />
                      </div>
                      <div className='item'>
                        <textarea id='message' placeholder='Message'></textarea>
                      </div>
                      <div className='item'>
                        <Link href='#'>
                          <a id='send_message'>Send Message</a>
                        </Link>
                      </div>
                    </div>
                    <div className='contactFax'>
                      <div className='contactFaxTitle'>
                        <span>Fax</span>
                        <hr />
                      </div>
                      <div>
                        <span>Factory Office: +880-2-996618078</span>
                      </div>
                      <div>
                        <span>Corporate Office: +880-2-8871893</span>
                      </div>
                    </div>
                    <div className='contactSocial'>
                      {/* <ul>
                        <li>
                          <a href='#'>
                            <Facebook className='fab' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i class='fab fa-linkedin' aria-hidden='true'></i>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i class='fab fa-linkedin' aria-hidden='true'></i>
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </form>
                </div>
                <div className='contact_right'>
                  <div className='fn_cs_location_list'>
                    <ul className='list'>
                      <li className='location_item'>
                        <div className='item'>
                          <div className='title_holder'>
                            <span className='icon_wrapper'>
                              <span className='icon'>
                                <Location className='fn__svg' />
                              </span>
                              <span className='shape'></span>
                            </span>
                            <h3>Corporate Office</h3>
                          </div>
                          <div className='content_holder'>
                            <ul>
                              <li>
                                House # 41, Road # 7 , Dhaka Cantonment,
                                Bangladesh
                              </li>
                              <li>
                                Phone:{" "}
                                <Link href='tel:+880-2-8871150'>
                                  +880-2-8871150
                                </Link>
                              </li>
                              <li>
                                Email:{" "}
                                <Link href='mailto:bmtfpackagingfactory@gmail.com'>
                                  <a>bmtfpackagingfactory@gmail.com</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <div className='map_holder'>
                        <iframe
                          width='100%'
                          height='200'
                          frameBorder='0'
                          scrolling='no'
                          marginHeight='0'
                          marginWidth='0'
                          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1166.219177620229!2d90.39452243966895!3d23.801534085008726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7226ed7f097%3A0x9082763e2ff3deb4!2sBMTF%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1700329688808!5m2!1sen!2sbd'
                        ></iframe>
                      </div>

                      <li className='location_item'>
                        <div className='item'>
                          <div className='title_holder'>
                            <span className='icon_wrapper'>
                              <span className='icon'>
                                <Location className='fn__svg' />
                              </span>
                              <span className='shape'></span>
                            </span>
                            <h3>Factory Office</h3>
                          </div>
                          <div className='content_holder'>
                            <ul>
                              <li>Joydebpur Gazipur – 1700, Bangladesh</li>
                              <li>
                                Phone:{" "}
                                <Link href='tel:+880-2-996618072-7'>
                                  +880-2-996618072-7
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <div className='map_holder'>
                        <iframe
                          width='100%'
                          height='200'
                          frameBorder='0'
                          scrolling='no'
                          marginHeight='0'
                          marginWidth='0'
                          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3644.1282355433414!2d90.41913!3d24.0265427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755da37c87e69cb%3A0xd9fb6d3b7e4b012f!2sBangladesh%20Machine%20Tools%20Factory!5e0!3m2!1sen!2sbd!4v1700329752544!5m2!1sen!2sbd'
                        ></iframe>
                      </div>
                      <li className='location_item'>
                        <div className='item'>
                          <div className='title_holder'>
                            <span className='icon_wrapper'>
                              <span className='icon'>
                                <Location className='fn__svg' />
                              </span>
                              <span className='shape'></span>
                            </span>
                            <h3>Packaging Unit (BMTF-2)</h3>
                          </div>
                          <div className='content_holder'>
                            <ul>
                              <li>
                                Kholishajani, Fulbaria, Kaliakoir, Gazipur.
                              </li>
                              <li>
                                Phone:{" "}
                                <Link href='tel:+880 1769041207'>
                                  +880 1769041207
                                </Link>
                              </li>
                              <li>
                                Email:{" "}
                                <Link href='mailto:bmtfpackagingfactory@gmail.comm'>
                                  <a>bmtfpackagingfactory@gmail.com</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <div className='map_holder'>
                        <iframe
                          width='100%'
                          height='200'
                          frameBorder='0'
                          scrolling='no'
                          marginHeight='0'
                          marginWidth='0'
                          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d87918.7032159503!2d90.35371691245776!3d24.16766873050415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756753a03c6500b%3A0x28aa972e95269d62!2sBMTF-2!5e0!3m2!1sen!2sbd!4v1700329808842!5m2!1sen!2sbd'
                        ></iframe>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Contact */}
      </Layout>
    </>
  );
}
