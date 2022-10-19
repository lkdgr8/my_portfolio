import React, { useState } from 'react'
import './Header.css'
import projectData from './Data.js'
import Showprojects from './Showprojects'

function Navbar() {

  const [datalist, setDatalist] = useState(projectData);
  const [active, setActive] =useState("btn4");

  const filteredItems = (category) => {
        const updatedList = projectData.filter((selected) => {
            return selected.category === category; 
        });
        setDatalist(updatedList);
    } 
  return (
    <>
        <div id='projects' className='projects'>    
                <section className='projects_section'>
                    <h1 className='pheading'>My Creative Portfolio Section</h1>
                    <div className='project_tabs'>
                        <button className={active === "btn1" ? "activebtn" : "btns"}  onClick={() => { filteredItems('UI/UX Design'); setActive("btn1"); }}>UI/UX</button>
                        <button className={active === "btn2" ? "activebtn" : "btns"}  onClick={() => { filteredItems('Reactjs'); setActive("btn2") }}>React</button>
                        <button className={active === "btn3" ? "activebtn" : "btns"}  onClick={() => { filteredItems('Wordpress'); setActive("btn3") }}>Wordpress</button>
                        <button className={active === "btn4" ? "activebtn" : "btns"}  onClick={() => { setDatalist(projectData); setActive("btn4") }}>All</button>
                    </div>
                    <Showprojects datalist={datalist} />
                </section>
            </div>
    </>
  )
}

export default Navbar;