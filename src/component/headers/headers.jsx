import React from 'react';
import { useState ,useEffect,useRef } from 'react';
import './headers.css'
function Headers() {



  const logo= "../assets/LOGO.png";
  const [menuOPen, setMenuOPen] = useState(false);

  const toggleMenu = () => {
    setMenuOPen(!menuOPen);
    
  };

  const OptionMenu = () => {

    return(
      <div className="options-menus">
      <div className="part-gauche">
  
     <ul>
        <li><a href="" >Acceuil</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#Project">Projets</a></li>
        <li><a href="#Skill">Competences</a></li>
        <li><a href=""className='Logo'>WD</a></li>
        <li><a href="#Exp">Expérience</a></li>
        <li><a href="">Temoignage</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
  
      </div>
      <div className="part-droite">
          <div className="close" >X</div>
      </div>
     </div>
    )
  };




  return (
    <>

   <header>
    <nav>
      <ul className='list'>
        <li><a href="" >Acceuil</a></li>
        <li><a href="#about">propos</a></li>
        <li><a href="#Project">Projets</a></li>
        <li><a href="#Skill">Competences</a></li>
        <li><a href=""className='Logo'>WD</a></li>
        <li><a href="#Exp">Expérience</a></li>
        <li><a href="">Temoignage</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
      <div className="mobile-header">
      <div className="menus-gauche" onClick={toggleMenu}>
         <div className="trait" >
          <span className='trait1'></span>
          <span className='trait2'></span>
          <span className='trait3'></span>
         </div>
         {menuOPen && <OptionMenu />}
      </div>
      <li><a href=""className='Logo'>WD</a></li>
    </div>
    </nav>
   </header>
   </>
  )
}

export default Headers
