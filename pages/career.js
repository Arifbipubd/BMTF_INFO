/** @format */

import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import Link from "next/link";
import CareerData from "../lib/career.json";

export default function BlogSingle1() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='Career Opportunity' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder nocTitle_holder'>
              <h3>Career Opportunity</h3>
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
                    <span className='bread-current'>Career Opportunity</span>
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
              <div class='nocAndNotice'>
                <ul class='responsive-table'>
                  <li class='table-header'>
                    <div class='col col-3'>Job Post</div>
                    <div class='col col-4'>Department</div>
                    <div class='col col-1'>Upload Date</div>
                    <div class='col col-1'>File</div>
                    <div class='col col-1'>Action</div>
                  </li>
                  {CareerData.map((data) => (
                    <li class='table-row' key={data.id}>
                      <div class='col col-3' data-label='Name :'>
                        {data.name}
                      </div>
                      <div class='col col-4' data-label='Issued Authority :'>
                        {data.authority}
                      </div>
                      <div class='col col-1' data-label='Upload Date :'>
                        {data.date}
                      </div>
                      <div class='col col-1' data-label='File :'>
                        <a href={data.view} target='_blank' className='view'>
                          View
                        </a>
                      </div>
                      <div class='col col-1' data-label='Action :'>
                        <a href={data.action} download className='download'>
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Sidebar Page */}
      </Layout>
    </>
  );
}
