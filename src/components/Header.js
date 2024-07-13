import React, { useState } from 'react'
import '../App.css'
import './Header.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import Navbar from './Navbar'
import Skills from './Skills'
import Contact from './Contact'
import resume from './resume/myupdatedresume.pdf'
import { IoCloseSharp } from "react-icons/io5";

function Header() {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <div className='home'>
                <div className='fixedposition'>
                    <header className='display-flex mob-none'>
                        <div className='title'>
                            <a href='#'><h2>Latesh Kakrai</h2></a>
                            <GiHamburgerMenu className="hamb_icon" onClick={() => setClicked(!clicked)}/>
                        </div>
                        <div className= {clicked ? `update_div display-flex1` : "display-flex1"}>
                            <sapn>
                                <nav>   
                                    <a href='#'><li>Home</li></a>
                                    <a href='#projects'><li>Projects</li></a>
                                    <a href='#skills'><li>My Career</li></a>
                                    <a href="#contact"><li>Contact Me</li></a>
                                </nav>  
                            </sapn>                         
                        </div>
                        <div className='resume_container'>
                            <button className='resume_btn'><a target="_blank" href={resume}>Resume</a></button>
                        </div> 
                    </header>
                    <header className='display-flex mob-block'>
                        <div className='title'>
                            <a href='#'><h2>Latesh Kakrai</h2></a>
                            <GiHamburgerMenu className={clicked ? `mob-none display_cross` : "hamb_icon"} onClick={() => setClicked(!clicked)}/>
                            
                        </div>
                        <div className= {clicked ? `update_div display-flex1` : "display-flex1"}>
                            <sapn>
                            <IoCloseSharp className={clicked ? "mob-block close_menu" : "mob-none"} onClick={() => setClicked(!clicked)} />
                                <nav onClick={() => setClicked(!clicked)}>   
                                    <a href='#'><li>Home</li></a>
                                    <a href='#projects'><li>Projects</li></a>
                                    <a href='#skills'><li>My Career</li></a>
                                    <a href="#contact"><li>Contact Me</li></a>
                                </nav>  
                            </sapn>          
                            <div className='resume_container'>
                                <button className='resume_btn'><a target="_blank" href={resume}>Resume</a></button>
                            </div>               
                        </div>
                    </header>
                </div>
                <section className='intro'>
                    <div>
                        <div className='subtitle'>
                            <h1>Hi, I'm <a>Latesh</a></h1>
                            <h1>A Fullstack Web Developer</h1>
                        </div>
                        <div className='lastpara'>
                            <p>I’m focused on building responsive fullstack web applications</p>
                            <p>while learning & exploring other technologies.</p>
                        </div>
                    </div>
                    <div className='icons'>
                        <a href='https://www.linkedin.com/in/latesh-kakrai-958a421b9/' target="_blank"><AiFillLinkedin className='icon1' /></a>
                        <a href="https://github.com/lkdgr8" target="_blank"><AiFillGithub className='icon1' /></a>
                        <a href="https://m.facebook.com/100007677783861/" target="_blank"><AiFillFacebook className='icon1' /></a>
                        <a href="mailto:lateshkakrai825@gmail.com" target="_blank"><CgMail className='icon1' /></a>
                    </div>
                </section>
            </div>
            <Navbar/>
            <Skills/>
            <Contact />
        </>
    )
}

export default Header;