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
        <Title title='404' />
        <div className='industify_fn_error_page'>
          <div className='container'>
            <div className='error_box max550'>
              <div className='title_holder'>
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <p>
                  Sorry, but the page you are looking for was moved, removed,
                  renamed or might never existed...
                </p>
              </div>
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
