/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import CategoryCard from "../components/verticals/category";
import {
  Packaging_Factory,
  Beauty_Products,
} from "../lib/productCategory.json";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title='Army Pharma' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Army Pharma</h3>
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
                    <Link href='/verticals'>
                      <a title='verticals'>Verticals</a>
                    </Link>
                  </li>
                  <li className='separator'>
                    <span></span>
                  </li>
                  <li>
                    <span className='bread-current'>Army Pharma</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title  */}

        {/* Sidebar Page  */}
        <div className='industify_fn_sidebarpage'>
          <div className='container'>
            <div className='s_inner'>
              {/* Main Sidebar: Left  */}
              <div className='industify_fn_leftsidebar'>
                {/* Single Service  */}
                <div className='industify_fn_service_single'>
                  <div className='img_holder'>
                    <img src='img/service/single/1.jpg' alt='' />
                    {/* <iframe
                      width='100%'
                      src='https://www.youtube.com/embed/FGOEmtRJOjU'
                      frameborder='0'
                      allowfullscreen
                    ></iframe> */}
                  </div>
                  <div className='desc_holder'>
                    <p>
                      Army Pharma Ltd., a state-owned pharmaceutical company,
                      commenced operations in June 2019 under Bangladesh Machine
                      Tools Factory Limited, overseen by the Bangladesh Army.
                      The organization, led by the Chief of Army Staff as
                      Chairman, has three production units focusing on Oral
                      Solid Dosage drugs, parenteral drugs, and a dedicated
                      Cephalosporin unit. The project profile is approved by the
                      Directorate General of Drug Administration, registered
                      with the Registrar of Joint Stock Companies and Firms, and
                      endorsed by the Bangladesh Investment Development
                      Authority. To ensure quality, the company has enlisted the
                      services of Elomatic Consulting & Engineering Ltd, a
                      Finland-based GMP consultant, aiming for cGMP
                      manufacturing licenses and international accreditations.
                    </p>
                    <h3>Vision</h3>
                    <p>
                      Manufacture and promotion of quality healthcare products
                      for the mankind.
                    </p>
                    <h3>Mission</h3>
                    <p>
                      We prioritize current good manufacturing practice (cGMP)
                      by employing skilled professionals, utilizing quality
                      materials, and employing world-class equipment. Our
                      commitment extends to maintaining rigorous documentation,
                      process validation, and ongoing training, ensuring the
                      consistent delivery of high-quality pharmaceutical
                      products.
                    </p>
                    <h3>Manufacturing Facilities</h3>
                    <p>
                      Army Pharma Ltd. is dedicated to WHO cGMP guidelines
                      compliance in its manufacturing plant and will supply
                      medicines to the Directorate General of Medical Service
                      and paramilitary institutions. The company sources
                      high-quality raw materials and cGMP-compliant packaging
                      materials from reputable countries, employing a skilled
                      workforce to serve nationwide retail, wholesale markets,
                      and various medical institutions, ensuring top-tier
                      healthcare for all patients in the country.
                    </p>
                    <p>
                      Army Pharma Ltd. is progressing with product development
                      and has established a cutting-edge QC analytical setup,
                      featuring top-tier equipment from global leaders. The
                      company has acquired production machinery from Europe,
                      China, and India, implementing a clean room concept with
                      HVAC systems, sandwich panels, and epoxy floors for cGMP
                      adherence. Stability chambers from Germany, a microbiology
                      lab, and a water treatment plant from Europe augment the
                      facility. The design prioritizes easy cleaning for a
                      hygienic environment, and fire protection measures have
                      been integrated. The comprehensive approach also includes
                      a central BMS for streamlined operations.
                    </p>
                    <p>
                      Army Pharma Ltd. prioritizes sustainability and quality,
                      evident in its waste water disposal and Zero Liquid
                      Discharge (ZLD) system. The company integrates advanced
                      technologies, including heavy metal removal, green
                      initiatives, and safety measures like incineration and
                      animal shelters. Unidirectional material flow with
                      In-process Quality Control (IPQC) ensures efficiency,
                      while independent quality monitoring and serialization
                      combat counterfeits. Adhering to International Conference
                      on Harmonization (ICH) guidelines, products undergo
                      stability studies before release. The company fosters an
                      eco-friendly environment with facilities like a medical
                      center, laundry, fire unit, and water bodies.
                    </p>
                    <h3>Products and product line</h3>
                    <p>
                      Bangladesh Army Pharma Ltd. has strategically planned its
                      site to accommodate Anti-cancer, Hormone, Vaccine, Biotec,
                      Agrovet, Herbal, and Medical Device plants. Market experts
                      have meticulously selected 300 dynamic molecules through
                      Intercontinental Medical Statistics (IMS), emphasizing
                      high market share and growth. The company will manufacture
                      a diverse range of pharmaceuticals, including tablets,
                      capsules, syrups, injectable, creams, and more, covering
                      therapeutic subclasses such as Antibiotics, Cardiovascular
                      drugs, Neurological products, and Geriatric medicines.
                      Prioritizing institutional, domestic, wholesale, and
                      international markets, Army Pharma Ltd. is dedicated to
                      producing new generics and biosimilar, exemplified by its
                      already developed products like Paracetamol and
                      Esomeprazole tablets, showcasing a commitment to
                      innovation in the pharmaceutical sector.
                    </p>
                    <h3>Healthcare and Hygiene</h3>
                    <p>
                      Under the guidance of Army Pharma Limited, Bangladesh
                      Machine Tools Factory Ltd. (BMTF) is actively engaged in
                      the manufacturing and retailing of Healthcare and Hygiene
                      products. BMTF holds a No Objection Certificate (NOC) from
                      the Directorate General of Drug Administration (DGDA) and
                      is certified by the Bangladesh Standards and Testing
                      Institution (BSTI). With a presence in retail, wholesale,
                      outlets, and institutions, BMTF plays a vital role in
                      providing quality healthcare and hygiene solutions in
                      Bangladesh, maintaining strict adherence to regulatory
                      standards.
                    </p>
                    <h3>Packaging Factory</h3>
                    <p>
                      We are producing pharmaceutical primary packaging
                      materials with the only virgin grade raw materials in our
                      factory. The vision of the packaging factory is to provide
                      the finest quality of finished product in your hand.
                    </p>
                  </div>
                  {/* Check List Shortcode  */}
                  <div className='fn_cs_check_list'>
                    <h3>Our Promises Are</h3>
                    <div className='list'>
                      <ul>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>
                              {" "}
                              Use class D environment as per Pharmaceutical
                              clean room concept for finished goods packing
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Use only virgin grade resin</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p> Affordable price</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Skilled and experienced workforce</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Check List Shortcode  */}
                  {/* Category card start */}
                  <div className='armyPharmaCat'>
                    <h3 className='categorySectionTitle'>Product Categories</h3>
                    <p className=''>
                      We can serve you by offering the following Primary
                      Packaging Stock Keeping Unit (SKU):
                    </p>
                    <div className='clientDiv'>
                      {Packaging_Factory.map((client) => (
                        <CategoryCard key={client.id} data={client} />
                      ))}
                    </div>
                  </div>
                  {/* Category card End */}
                  <div className='desc_holder'>
                    <h3>Beauty Products</h3>
                    <p>
                      We are producing pharmaceutical primary packaging
                      materials with the only virgin grade raw materials in our
                      factory. The vision of the packaging factory is to provide
                      the finest quality of finished product in your hand.
                    </p>
                  </div>
                  {/* Check List Shortcode  */}
                  <div className='fn_cs_check_list'>
                    <h3>Our Promises Are</h3>
                    <div className='list'>
                      <ul>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>
                              {" "}
                              Use class D environment as per Pharmaceutical
                              clean room concept for finished goods packing
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Use only virgin grade resin</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p> Affordable price</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Skilled and experienced workforce</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Check List Shortcode  */}
                  {/* Category card start */}
                  <div className='armyPharmaCat'>
                    <h3 className='categorySectionTitle'>Product Categories</h3>
                    <p className=''>
                      We can serve you by offering the following Primary
                      Packaging Stock Keeping Unit (SKU):
                    </p>
                    <div className='clientDiv'>
                      {Beauty_Products.map((client) => (
                        <CategoryCard key={client.id} data={client} />
                      ))}
                    </div>
                  </div>
                  {/* Category card End */}
                  <div className='desc_holder'>
                    <h3>Animal Health</h3>
                    <p>
                      In January 2023, BMTF Ltd. proudly introduced a line of
                      animal healthcare products, underscoring our commitment to
                      quality and promotion. Sourcing raw materials from
                      validated channels, we adhere to the stringent guidelines
                      of the Directorate General of Drug Administration (DGDA)
                      and have established a world-class QC lab. With approval
                      from the Directorate of Livestock Services (DLS), our
                      State-of-The-Art production facilities operate under the
                      supervision of a qualified multidisciplinary team
                      comprising Veterinary Doctors, Pharmacists, Biochemists,
                      Chemists, and Microbiologists. Embracing Current Good
                      Manufacturing Practice (cGMP) standards, including a clean
                      room concept and unidirectional production lines, we
                      ensure product quality. Each production batch is released
                      only after receiving a finished goods qualification
                      certificate from our meticulous Quality Assurance (QA)
                      department.
                    </p>
                  </div>
                  {/* Check List Shortcode  */}
                  <div className='fn_cs_check_list'>
                    <h3>Our Promises Are</h3>
                    <div className='list'>
                      <ul>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>
                              {" "}
                              Use class D environment as per Pharmaceutical
                              clean room concept for finished goods packing
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>
                              {" "}
                              Raw materials are used from validated sources
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p> Skilled and experienced workforce</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Affordable price</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Check List Shortcode  */}
                </div>
                {/* /Single Service  */}
              </div>
              {/* /Main Sidebar: Left  */}

              {/* Main Sidebar: Right  */}
              <div className='industify_fn_rightsidebar'>
                {/* Service List  */}
                <div className='service_list_as_function'>
                  <div className='title'>
                    <h3>All Industries of BMTF</h3>
                  </div>
                  <div className='list_holder'>
                    <ul>
                      <li className='active'>
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
                    </ul>
                  </div>
                </div>
                {/* /Service List  */}

                {/* Get Sidebar  */}
                <Sidebar />
                {/* /Get Sidebar  */}
              </div>
              {/* Main Sidebar: Right  */}
            </div>
          </div>
        </div>
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
