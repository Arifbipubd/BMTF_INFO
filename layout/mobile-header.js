/** @format */

import React, { useState, useEffect } from "react";
import MetisMenu from "metismenujs";
import Link from "next/link";
import { Facebook, Linkedin, Youtube } from "../public/svg/social/IconSocial";

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isAboutSubmenuVisible, setAboutSubmenuVisibility] = useState(false);
  const [isVerticalSubmenuVisible, setVerticalSubmenuVisibility] =
    useState(false);
  const [isAccreditationSubmenuVisible, setAccreditationSubmenuVisibility] =
    useState(false);
  const [isNoticeSubmenuVisible, setNoticeSubmenuVisibility] = useState(false);
  const [isGallerySubmenuVisible, setGallerySubmenuVisibility] =
    useState(false);
  const [isContactSubmenuVisible, setContactSubmenuVisibility] =
    useState(false);

  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    const metisMenu = new MetisMenu("#metismenu");

    return () => {
      metisMenu.dispose(); // Cleanup when the component unmounts
    };
  }, []);

  const toggleAboutSubmenuVisibility = () => {
    setAboutSubmenuVisibility(!isAboutSubmenuVisible);
  };
  const toggleVerticalSubmenuVisibility = () => {
    setVerticalSubmenuVisibility(!isVerticalSubmenuVisible);
  };
  const toggleAccreditationSubmenuVisibility = () => {
    setAccreditationSubmenuVisibility(!isAccreditationSubmenuVisible);
  };
  const toggleNoticeSubmenuVisibility = () => {
    setNoticeSubmenuVisibility(!isNoticeSubmenuVisible);
  };
  const toggleGallerySubmenuVisibility = () => {
    setGallerySubmenuVisibility(!isGallerySubmenuVisible);
  };
  const toggleContactSubmenuVisibility = () => {
    setContactSubmenuVisibility(!isContactSubmenuVisible);
  };

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
                <li
                  className='menu-item-has-children'
                  onClick={toggleAboutSubmenuVisibility}
                >
                  <Link href='#'>
                    <a>
                      <span className='mobileNestedMenu'>
                        About <span className='mobileNestedMenuSpan'></span>
                      </span>
                    </a>
                  </Link>
                  {isAboutSubmenuVisible && (
                    <ul className='sub-menu'>
                      <li>
                        <Link href='/about-us'>
                          <a>About Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/our-history'>
                          <a>Our History</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/about-us#organogram'>
                          <a>Organogram</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/csr'>
                          <a>Corporate Social Responsibility(CSR)</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/our-client'>
                          <a>Our Client</a>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className='menu-item-has-children'
                  onClick={toggleVerticalSubmenuVisibility}
                >
                  <Link href='#'>
                    <a>
                      <span className='mobileNestedMenu'>
                        Verticals
                        <span className='mobileNestedMenuSpan'></span>
                      </span>
                    </a>
                  </Link>
                  {isVerticalSubmenuVisible && (
                    <ul className='sub-menu'>
                      <div>
                        <li>
                          <Link href='/verticals'>
                            <a>All Verticals</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/footwear-and-leather'>
                            <a>Footwear & Leather</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/furniture'>
                            <a>Furniture</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/pole-pile'>
                            <a>Pole & Pile</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/vehicle-assembly'>
                            <a>Vehicle Assembly</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/steel-structure-manufacturing'>
                            <a>Steel Structure Manufacturing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/electronic-assembly'>
                            <a>Electronic Assembly</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/bmtf-crafties'>
                            <a>BMTF Crafties</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/cfl-led-bulb'>
                            <a>CFL & LED Bulb</a>
                          </Link>
                        </li>
                      </div>
                      <div>
                        <li>
                          <Link href='/central-tooling-factory'>
                            <a>Central Tooling Department</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/forge-shop'>
                            <a>Forge Shop</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/foundry-shop'>
                            <a>Foundry Shop</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/galvanizing-plant'>
                            <a>Galvanizing Plant</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/heat-and-surface'>
                            <a>Heat and Surface Treatment</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/machine-shop'>
                            <a>Machine Shop</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/army-pharma'>
                            <a>Army Pharma</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/packaging-unit'>
                            <a>Packaging Unit</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/pattern-shop'>
                            <a>Pattern Shop</a>
                          </Link>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li
                  className='menu-item-has-children'
                  onClick={toggleAccreditationSubmenuVisibility}
                >
                  <Link href='#'>
                    <a>
                      <span className='mobileNestedMenu'>
                        Accreditations
                        <span className='mobileNestedMenuSpan'></span>
                      </span>
                    </a>
                  </Link>
                  {isAccreditationSubmenuVisible && (
                    <ul className='sub-menu'>
                      <li>
                        <Link href='/accreditation-and-certificate'>
                          <a>Accreditations</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/accreditation-and-certificate#certificate'>
                          <a>Certifications</a>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className='menu-item-has-children'
                  onClick={toggleNoticeSubmenuVisibility}
                >
                  <Link href='#'>
                    <a>
                      <span className='mobileNestedMenu'>
                        Notice Board
                        <span className='mobileNestedMenuSpan'></span>
                      </span>
                    </a>
                  </Link>
                  {isNoticeSubmenuVisible && (
                    <ul className='sub-menu'>
                      <li>
                        <Link href='/news-tenders'>
                          <a>News & Tenders</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/noc-and-notice'>
                          <a>NOC & Notices</a>
                        </Link>
                      </li>
                      <li>
                        <a href='https://spc-pile.bmtf.com.bd/' target='_blank'>
                          Application for SPC-Pile at Jholshiri
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className='menu-item-has-children'
                  onClick={toggleGallerySubmenuVisibility}
                >
                  <Link href='#'>
                    <a>
                      <span className='mobileNestedMenu'>
                        Gallery
                        <span className='mobileNestedMenuSpan'></span>
                      </span>
                    </a>
                  </Link>
                  {isGallerySubmenuVisible && (
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
                  )}
                </li>
                <li
                  className='menu-item-has-children'
                  onClick={toggleContactSubmenuVisibility}
                >
                  <Link href='#'>
                    <a>
                      <span className='mobileNestedMenu'>
                        Contact
                        <span className='mobileNestedMenuSpan'></span>
                      </span>
                    </a>
                  </Link>
                  {isContactSubmenuVisible && (
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
                  )}
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
