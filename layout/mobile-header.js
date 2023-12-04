/** @format */

import React, { useState, useEffect } from "react";
import MetisMenu from "metismenujs";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Vk,
} from "../public/svg/social/IconSocial";

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    new MetisMenu("#metismenu");
  }, []);

  return (
    <>
      <div className='industify_fn_mobilemenu_wrap'>
        <div className='industify_fn_toppanel'>
          <div className='left_panel'>
            <div className='info'>
              <Link href='tel:+880-2-8871150'>
                <a>+880-2-8871150</a>
              </Link>
            </div>
            <div className='info'>
              <Link href='mailto:mkt@bmtf.com.bd'>
                <a>mkt@bmtf.com.bd</a>
              </Link>
            </div>
            <div className='industify_fn_social_list'>
              <ul>
                <li>
                  <Link href='https://www.facebook.com/BMTF.Bangladesh'>
                    <a target='_blank' rel='noreferrer'>
                      <Facebook className='fn__svg' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='https://www.youtube.com/@BMTFofficial/'>
                    <a target='_blank' rel='noreferrer'>
                      <Youtube className='fn__svg' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/98842722/'>
                    <a target='_blank' rel='noreferrer'>
                      <Linkedin className='fn__svg' />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- TOLL FREE MOBILE --> */}
        {/* <div className='m_toll_free_lang'>
          <div className='m_toll_free'>
            <span className='shape1'></span>
            <span className='shape2'></span>
            <span className='shape3'></span>
            <div className='tf_in'>
              <div
                className='img_holder'
                style={{ backgroundImage: "url(img/call.png)" }}
              ></div>
              <p>
                <span>Toll Free:</span> 1-800-987-6543
              </p>
            </div>
          </div>
        </div> */}
        {/* <!-- /TOLL FREE MOBILE --> */}
        {/* <!-- LOGO & HAMBURGER --> */}
        <div className='logo_hamb'>
          <div className='in'>
            <div className='menu_logo'>
              <Link href='/'>
                <a>
                  <img src='logo-light.svg' alt='Industry Template' />
                </a>
              </Link>
            </div>
            <div
              onClick={MobileMenuTrueFalse}
              className={
                !isMobileMenu
                  ? "hamburger hamburger--collapse-r"
                  : "hamburger hamburger--collapse-r is-active"
              }
            >
              <div className='hamburger-box'>
                <div className='hamburger-inner'></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /LOGO & HAMBURGER --> */}
        {/* <!-- MOBILE DROPDOWN MENU --> */}
        <div
          className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}
        >
          <div>
            <nav>
              <ul className='metismenu' id='metismenu'>
                <li className='menu-item-has-children'>
                  <Link href='/about-us'>
                    <a>About</a>
                  </Link>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='/verticals'>
                    <a>Verticals</a>
                  </Link>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='/accreditation-and-certificate'>
                    <a>Accreditations</a>
                  </Link>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='/news-tenders'>
                    <a>Notice Board</a>
                  </Link>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='/image-gallery'>
                    <a>Gallery</a>
                  </Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/image-gallery'>
                        <a>Image Gallery</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/videos'>
                        <a>Video Gallery</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='/contact-us'>
                    <a>Contact</a>
                  </Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/contact-us'>
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/career'>
                        <a>Career Opportunities</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!-- /MOBILE DROPDOWN MENU --> */}
      </div>
    </>
  );
}
