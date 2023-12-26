import React, { useEffect, useRef, useState } from 'react'
import Headers from '../headers/headers'
import './homes.css'
import {useTypewriter , Cursor} from 'react-simple-typewriter';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import About from '../about/about';
import Skills from '../skill/Skills';
import Experience from '../experience/experience';
import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';
import Temoignage from '../Temoignage/temoignage';

function Homes() {

   const play_img='./assets/play.png'
   const stop_img= './assets/pause.png'
   const [isplay, setPlay]=useState(false);
   const [currentTime, setCurrentTime]=useState(0);
   const {duration,setDuration}=useState(0)

   const audioRef= useRef(null)


// fonction pour determiner le temps net :  
const handllseek=(e)=>{};

// fonction pour changer l'etat du bouton

const Play=()=>{
    return(
        <img   src={play_img} alt="image du boutton"/>
    )
}


const Stop=()=>{
    return(
        <img   src={stop_img} alt="image du boutton"/>
    )
}


const handlPlaypause =()=>{
     

    if(isplay){
        handlPause();
    }
    else{
        handlPlay();
    }
    
}

// fonction pour determiner si c'est en lecture 
const handlPlay=()=>{
    audioRef.current.play();
    setPlay(true)
};
// fonction pour determiner si c'est en lecture 
const handlPause=()=>{
    audioRef.current.pause();
    setPlay(false)
};



    const [typeEffect] = useTypewriter({
        words: [' Web Developer','blogeur','Marketteur','UI/UX Designer','freelancer'],
        loop:{},
        typeSpeed:70,
        deleteSpeed:70
      })
    
     const [name]= useTypewriter({
        words: ['I am  '],
        typeSpeed:70,
      })
    const [counterOn , setConterOn]=useState(false)  


  return (
    <>
 <Headers/>  
   
<section className='homes' id='Acceuil'>
   <div className="homes-container">
   <div className="left">
    <p><span className='crochet'>"</span><br />There's nothing more beautiful than<br /> working with passion</p>
   </div>
    <div className="center">
    <div className="part1" data-aos="fade-left">
        <h1> Hello ! my name is <span>Wilfried NGUENOU DZOMEU</span></h1>
        <h1>{name}{typeEffect} <Cursor/></h1>
    </div>
    <div className="part2 " data-aos="fade-left">
        <div className="semi-cercle">
            <img src="../assets/v1.png" alt="" />
        </div>
    </div>
    <div className=' part3 custom-btn btn-cv '>
        <a href='#about'>Read more</a>
    </div>
    </div>

    <div className="right">
        <div className="first">
        <div className="star">
            <img src="../assets/etoile.png" alt="note" />
            <img src="../assets/etoile.png" alt="note" />
            <img src="../assets/etoile.png" alt="note" />
            <img src="../assets/etoile.png" alt="note" />
            <img src="../assets/etoile.png" alt="note" />
        </div>
         <ScrollTrigger onEnter={()=>setConterOn(true)} onExit={()=>setConterOn(false)}>
         <h2>+{counterOn && <CountUp start={0} end={50} delay={0} duration={4}></CountUp>}k Followers</h2>
         </ScrollTrigger>
        </div>


        <div className="segond">
            
                <button className="visuel" onClick={handlPlaypause}> 
                
                { !isplay ? <Play/>: <Stop/>}
                 </button>

                 <audio src="./assets/musiqu.mp3" ref={audioRef} autoPlay loop></audio>

                
               
            
        </div>
    </div>
   </div>



   
</section>

    <About/> 
    <Skills/> 
    <Experience/>
    <Temoignage/>
    <Contacts/>
    <Footer/>

</>
  )
}

export default Homes
