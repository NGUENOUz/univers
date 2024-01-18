import React from 'react'
import './about.css';
import { useState } from 'react';
function About() {
  const cvName= "cv"
  const cvLien="./assets/cv.pdf"
 
  return (
    <>

     <section id='about'>
      <div className="about-container">
        <div className="about-gauche">
          <div className="svg-top">
          <svg xmlns="http://www.w3.org/2000/svg" width="77" height="104" viewBox="0 0 77 104" fill="none">
<path d="M0.885644 90.5541L8.24722 -4.84586e-05L18.1858 81.3371L76.2921 103.443L0.885644 90.5541Z" fill="var(--text-black-700)"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="91" height="85" viewBox="0 0 91 85" fill="none">
<path d="M0 8L90.5 0L12 23.5L0 84.5V8Z" fill="var(--text-black-700)"/>
</svg>

 </div>
          <img src="../assets/me.png" alt="" className='profil2'  data-aos="fade-right"/>
        </div>
        <div className="about-droite"data-aos="fade-right">
             <h1 style={{color:'white'}}>About Me</h1>
             <p>Hello, I’m a wilfried, web-developer based on Douala. I have rich experience in
                   web site design & building and customization. Also I am good at</p>

            <div className="langage-list">
                <li>React js</li>
                <li>Html</li>
                <li>Css</li>
                <li>Spring boot</li>
                <li>Photoshop</li>
                <li>Facebook ADS</li>
                <li>Canvas</li>
                <li>...</li>
            </div>

            <button className=" custom-btn btn-cv"   
            
            onClick={() => {
              const a = document.createElement("a");
              a.href = cvLien;
              a.download = cvName;
              a.click();
            }}
            
            >
                <span>Download my CV</span>
                <img src="../assets/telechargement.png" alt="" />
            </button>


        </div>
      </div>


      <div className="info-plus">
        <h1 style={{color:'white'}}>What I Do</h1>
        <div className="cart-info" data-aos="fade-right">
          <div className="cart">
            <img src="../assets/ui.png" alt="ui Desygn image" />
            <h3>UI/UX DESYGN</h3>
            <p>As a UI/UX designer, I create site and application mock-ups, logos and posters.</p>
          </div>

          <div className="cart">
            <img src="../assets/web_dev.png" alt="ui Desygn image" />
            <h3>WEB DEVELOPMENT</h3>
            <p className='cart-info-description'>
            As a web developer, I work on showcase and e-commerce sites, maintaining and integrating existing solutions.
            </p>
          </div>

          <div className="cart">
            <img src="../assets/marketing.png" alt="ui Desygn image" />
            <h3>Digital MARKETING</h3>
            <p>
            
Digital maestro crafting brands, igniting success with social, SEO & ads.
            </p>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default About
