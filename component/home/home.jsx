import React, { useState } from 'react'
import './home.css'
import Header from '../header/header'
import Headers from '../headers/headers'
import About from '../about/about'
import Skills from '../skill/Skills'
import Contact from '../contact/contact'

function Home() {
// state des composants 

const [Post,setPost]=useState();

const [musiques,setRun]=useState([
  {
      id:1,
      titre:'fally ipupa',
      miniature:"../assets/logo5.png",
      source:"assets/musique.MP3"
  },
  {
      id:2,
      titre:'kerozen',
      miniature:"../assets/logo3.png"
  },
]); 

const indexs= musiques.length;


// modification de l'etat




  return (
    <div>
      
       <Headers/>
     <div className="home-container"  id='Home'>
     
      {/* style={{ backgroundImage: `url("assets/BG.jpg")`,backgroundSize:'cover'}} */}
    {/* <audio src={musiques[0].source} controls style={{ borderRadius:"50%", width:"50px",height:"50px"}}></audio> */}
       <div className="part-home">
        <div className="gauche">
            <span className="me">I'm</span>
            <h1 className="name">Wilfried NGUENOU DZOMEU</h1>
            <h2 className="pro" id='pro'></h2>

            <div className="tel">
                <div className="space">
                    <img src="../assets/gmail.png" alt="Mon compte gmail" />
                    <p>ContactWD237@gmail.com</p>
                </div>
                <div className="space">
                    <img src="../assets/phone.png" alt="Mon numero de telephone" />
                    <p>678378976</p>
                </div>
                <div className="space">
                    <img src="../assets/location.png" alt="Mon compte gmail" />
                    <p>Douala, Cameroun</p>
                </div>
            </div>
            <div className="network">
                <li> <a href="https://www.facebook.com/monnouveauguide/"><img src="../assets/facebook.png" alt="Ma page facebook" /></a></li>
                <li>  <a href="https://www.youtube.com/channel/UCBg4mnLqcqHk_zaeEKi6ctg"><img src="../assets/youtube.png" alt="Ma chaine youtube"/></a></li>
                <li>  <a href="https://www.linkedin.com/in/wilfried-dzomeu-b060771b9/"><img src="../assets/linkedin.png" alt="Mon compte linkedlin" /></a></li>
            </div>
        </div>
        <div className="droite">
            <div className="fil-container">
              <img src="../assets/me.png" alt="me" />
            </div>
           
        </div>
       </div>
       
     </div>
   


    </div>
  )
}

export default Home
