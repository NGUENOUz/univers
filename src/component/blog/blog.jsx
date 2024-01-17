import { FacebookProvider, useFacebook } from "react-facebook-sdk";
import React from "react";
import { useState,useEffect } from "react";
import './blog.css'

function Blog() {
  
  
  return (
      <div>
        <div className="blog">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmonnouveauguide%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="800" height="500" style={{border:"none", display:"flex",flexWrap:"wrap"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    );
  }
  
  export default Blog;
  