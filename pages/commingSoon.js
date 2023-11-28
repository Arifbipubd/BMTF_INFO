/** @format */

import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <Layout>
        {/* <!-- 404 Page --> */}
        <Title title='Comming Soon' />
        <div className='industify_fn_error_page commingSoonPage'>
          <div className='container'>
            <div className='error_box max750'>
              <div className='title_holder'>
                <h3>Exciting Shopping Experience </h3>
                <h1>Unveiling Soon!</h1>
                <p>
                  Get ready for a revolutionary shopping experience with BMTF's
                  upcoming E-commerce Store. We're thrilled to announce the
                  launch of our online platform, where innovation meets
                  convenience. Discover a curated selection of premium products
                  and exclusive deals right at your fingertips. Stay tuned for
                  the grand opening, and join us in redefining the way you shop.
                  Your seamless online journey with BMTF is just around the
                  corner. Keep in touch for the big reveal!
                </p>
              </div>
              <div className='search_holder'></div>
              <div>
                <Link href='/'>
                  <button className='commingSoonBtn'>Back To Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /404 Page --> */}
      </Layout>
    </>
  );
}
