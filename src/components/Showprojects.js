import React from 'react';
import './Header.css';


function Showprojects({ datalist }) {
  return (
    <>
    <section className='display-row'>
        {
            datalist.map((allData, index) => {
                const { image, title, link } = allData;
                return(
                    <>  
                    <div className='border' key={index}>
                        <div className='img-container'>
                            <img src={image} alt="design_convert_project" className='projectimg' />
                        </div>
                        <div className='desc'>
                            <div className='texts'>
                                <p>{title}</p>
                            </div>
                            <a href={link} target="_blank"><button className='learn_more_btn'>See Live</button></a>
                        </div>  
                    </div>
                    </>
                )
            })
        }
    </section>
    </>
  )
}

export default Showprojects