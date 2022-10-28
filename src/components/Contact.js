import React from 'react'
import { GrMailOption } from 'react-icons/gr'
import { FiPhoneCall } from 'react-icons/fi'

import './Header.css'
function Contact() {
    return (
        <>
          <div id="contact">
            <h1 className='myskills contact_tit'>Contact Me</h1>
            <div className='contact_page'>
              <span className='contact_me'>
                  <span className='contact_info'><span className='contact_cont'><GrMailOption className='contact_icon' /><a href="mailto:lateshkakrai825@gmail.com">lateshkakrai825@gmail.com</a></span></span>
                  <span className='contact_info'><span className='contact_cont'><FiPhoneCall className='contact_icon' /><a href="tel:9137305895">+91 9137305895</a></span></span>
              </span>
              <form>
                  <p>Full Name : <input className="first" type="text" /></p>
                  <p>Contact Number : <input className="second" type="number" /></p>  
                  <p>Email Id : <input className="third" type="text" /></p>
                  <p>Purpose : <select className="third" type="select">
                        <option>select</option>
                        <option>discus a new project</option>
                        <option>want to hire me</option>
                        <option>outsource your project</option>
                    </select></p>
                  <p>Your Message : <textarea className="last" type="text" /></p>
                  <button className='form_submit'>Submit</button>
              </form>
              </div>
          </div>
        </>
    )
}

export default Contact