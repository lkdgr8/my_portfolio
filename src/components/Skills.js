import React from 'react'
import { SiBootstrap, SiHtml5, SiCss3, SiShopify } from 'react-icons/si'
import { BsWordpress } from 'react-icons/bs';
import { RiReactjsLine } from 'react-icons/ri';
import { FaUniversity } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';
import { MdWork } from 'react-icons/md';
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs, TbFileCertificate } from 'react-icons/tb'
import './Header.css'

function Skills() {

  return (
    <>
      <div id='skills' className='skills'>
        <div className='skills_sect'>
          <h1 className='myskills'>Skills</h1>
          <div className='web_design'>
            <h1>Web Designing</h1>
            <div className='adj'>
              <div className='skills_icons'>
                <div className='skills_icons_sec'>
                  <SiHtml5 className='design_icons' />
                  <h2 className='heading'>HTML</h2>
                </div>
                <div className='skills_icons_sec'>
                  <SiCss3 className='design_icons icon2' />
                  <h2 className='heading heading2'>CSS</h2>
                </div>
                <div className='skills_icons_sec'>
                  <SiBootstrap className='design_icons' />
                  <h2 className='heading'>Bootstrap</h2>
                </div>
                <div className='skills_icons_sec'>
                  <BsWordpress className='design_icons' />
                  <h2 className='heading'>Wordpress</h2>
                </div>
                <div className='skills_icons_sec'>
                  <SiShopify className='design_icons' />
                  <h2 className='heading'>Shopify</h2>
                </div>
            </div>
            </div>
          </div>
          <div className='web_design web_dev'>
            <h1>Web Development</h1>
            <div className='skills_icons'>
              <div className='skills_icons_sec'>
                <TbBrandJavascript className='design_icons icon_font' />
                <h2 className='heading'>Javascript</h2>
              </div>
              <div className='skills_icons_sec'>
                <RiReactjsLine className='design_icons' />
                <h2 className='heading'>React JS</h2>
              </div>
              <div className='skills_icons_sec'>
                <TbBrandNextjs className='design_icons' />
                <h2 className='heading'>Next JS</h2>
              </div>
              <div className='skills_icons_sec'>
                <FaPhp className='design_icons' />
                <h2 className='heading'>PHP</h2>
              </div>
              <div className='skills_icons_sec'>
                <FaNodeJs className='design_icons' />
                <h2 className='heading'>Node Js</h2>
              </div>
              <div className='skills_icons_sec'>
                <SiMongodb className='design_icons' />
                <h2 className='heading'>MongoDB</h2>
              </div>
              <div className='skills_icons_sec'>
                <SiMysql className='design_icons' />
                <h2 className='heading'>Mysql</h2>
              </div>
            </div>
          </div>
          <div className='cert'>
            <h1 className='myskills'>Education and Certification</h1>
            <div className='edu'>
              <FaUniversity className='uni' />
              <div className='course'>
                <h1>B.E. in Electronics and Telecommunication Engineering</h1>
                <h2>University of Mumbai</h2>
                <h2>2017-2020</h2>
              </div>
            </div>
            <div className='edu'>
              <TbFileCertificate className='uni' />
              <div className='course'>
                <h1>Complete Python Development Certificate</h1>
                <h2>ZTM Acedemy</h2>
                <h2>2020-2021</h2>
              </div>
            </div>
            <div className='edu'>
              <GrCertificate className='uni' />
              <div className='course'>
                <h1>Complete Web Development Certificate</h1>
                <h2>ZTM Acedemy</h2>
                <h2>2021-2022</h2>
              </div>
            </div>
            <div className='work'>
              <h1 className='myskills'>Work Expereince</h1>
              <div className='edu'>
                <div className='course job'>
                  <h1>Front End Web Developer</h1>
                  <h2>KS Softech Pvt. Ltd.</h2>
                  <h2>Apr 2022 - May 2023</h2>
                </div>
              </div>
              <div className='edu'>
                <div className='course job'>
                  <h1>Web Developer</h1>
                  <h2>Seraphyq Futureverse Pvt. Ltd.</h2>
                  <h2>June 2023 - Mar 2024</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;