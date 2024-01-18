import { FacebookProvider, useFacebook } from "react-facebook-sdk";
import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import './blog.css'
import Footer from "../footer/footer";

function Blog() {
  
  
  return (
      <div>
        <div className="blog">

          <nav>
            <div className="gauche">
              <Link to="/">  <img src="./assets/back1.png" alt="icon" /></Link>
            </div>
            <div className="droite">
               Entrez dans mon univers pour mieux me découvrir 
            </div>
          </nav>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmonnouveauguide%2F&tabs=timeline&width=360&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="360" height="500" style={{border:"none", display:"flex",flexWrap:"wrap"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Blog;
  