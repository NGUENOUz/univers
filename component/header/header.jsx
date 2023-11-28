import React from "react";

import { useEffect,useState } from "react";
import './header.css'
import '../about/about.jsx';
import { Link } from "react-router-dom";

function Header() {


    
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
          <li ><a href="" className='color1'>Home</a></li>
              <li><a href="#about" className='color1'>About</a></li>
              <li><a href="#Project" className='color1'> projects</a></li>
              <li><a href="#Skill" className='color1'>Skills</a></li>
              <li><a href="#Contact"className='color1' >Contact</a></li>
          </ul>
      </div>
      <div className="part-droite">
          <div className="close" >X</div>
      </div>
     </div>
    )
  };


  return (
  <div className="header" id="header" >
    <div className="header-container">
      <div className="logo">
          <img src={logo} alt="Logo de WD" />
      </div>
      <div className="list">
          <ul className='options'>
              <li ><a href="" className='color1'>Home</a></li>
              <li><a href="#about" className='color1'>About</a></li>
              <li><a href="#Project" className='color1'> projects</a></li>
              <li><a href="#Skill" className='color1'>Skills</a></li>
              <li><a href="#Contact"className='color1' >Contact</a></li>
          </ul>
      </div>
      <div className="whatsapp">
          <a href="https://wa.me/message/XCFB5J3NBV5JI1">
              <img src="../assets/whatsapp.png" alt="" />
          </a>
      </div>
    </div>

    <div className="mobile-header">
      <div className="menus-gauche" onClick={toggleMenu}>
         <div className="trait" >
          <span className='trait1'></span>
          <span className='trait2'></span>
          <span className='trait3'></span>
         </div>
         {menuOPen && <OptionMenu />}
      </div>
      <div className="logo">
          <img src="../assets/LOGO.png" alt="Mon logo" />
      </div>
    </div>
  </div>
)

}

export default Header