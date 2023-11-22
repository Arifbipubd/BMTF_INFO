/** @format */

import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Vk,
} from "../public/svg/social/IconSocial";

const background = "img/call.png";

export default function DesktopHeader() {
  const [isActive, setActive] = useState(false);
  const activeTrueFalse = () => setActive(!isActive);

  return (
    <>
      <div className='industify_fn_header'>
        {/* <!-- Header: Top Panel --> */}
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
        {/* <!-- /Header: Top Panel --> */}

        {/* <!-- Header: Bottom Panel --> */}
        <div className='header_inner'>
          <div className='menu_logo'>
            <Link href='/'>
              <a>
                <img
                  className='desktop_logo'
                  src='logo-light.svg'
                  alt='Industry HTML Template'
                />
                <img
                  className='desktop_logo_dark'
                  src='logo-dark.svg'
                  alt='Industry HTML Template'
                />
              </a>
            </Link>
          </div>
          <div className='menu_nav'>
            <ul className='industify_fn_main_nav vert_nav'>
              <li className='menu-item-has-children'>
                <Link href='/about-us'>
                  <a>About</a>
                </Link>
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
                    <Link href='/organogram'>
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
              </li>
              <li className='menu-item-has-children'>
                <Link href='/verticals'>
                  <a>Verticals</a>
                </Link>
                <ul className='sub-menu verticalSubmenu'>
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
              </li>
              <li className='menu-item-has-children'>
                <Link href='/accreditation-and-certificate'>
                  <a>Accreditations</a>
                </Link>
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
              </li>
              <li className='menu-item-has-children'>
                <Link href='/notice-board'>
                  <a>Notice Board</a>
                </Link>
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
                </ul>
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
          </div>
          <div className='toll_free_lang'>
            <div
              className={
                isActive
                  ? "industify_fn_moving_lang opened"
                  : "industify_fn_moving_lang"
              }
              style={{
                position: "absolute",
                left: "1281.16px",
                top: "105.085px",
              }}
            >
              <ul onClick={activeTrueFalse}>
                <li onClick={() => setSelect("Eng")}>
                  <span>Eng</span>
                </li>
                <li onClick={() => setSelect("Spa")}>
                  <span>Spa</span>
                </li>
                <li onClick={() => setSelect("Rus")}>
                  <span>Rus</span>
                </li>
              </ul>
            </div>
            <div className='toll_free'>
              <span className='shape1'></span>
              <span className='shape2'></span>
              <span className='shape3'></span>
              <div className='tf_in'>
                <div
                  className='img_holder'
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
                <p>Ecommerce</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Header: Bottom Panel --> */}
      </div>
      <div className='my-class'></div>
    </>
  );
}
