/** @format */

import React from "react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <>
      <div className='industify_fn_sidebar'>
        <div className='industify_fn_sidebar_in'>
          <div className='widget_block'>
            <div className='industify_fn_widget_estimate'>
              <div className='img_holder'>
                <span className='helper1'></span>
                <span className='helper2'></span>
                <span className='helper3'></span>
                <span className='helper4'></span>
                <span className='helper5'></span>
                <span className='helper6'></span>
                <div
                  className='abs_img'
                  style={{ backgroundImage: "url(/banner.png)" }}
                ></div>
              </div>
              <div className='bfwe_inner'>
                <p>
                  Connect with BMTF today to explore strategic collaborations,
                  innovation, and economic transformation.
                </p>
                <Link href='/contact-us'>
                  <a>Request an Estimate</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
