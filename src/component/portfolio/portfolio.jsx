import React from 'react'
import './portfolio.css'

function Portfolio() {

  const Mot= 'ggg'
  return (
    <div>
      <div className="recent-portfolio"
      
      style={{
        backgroundImage: `url("assets/fond1.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"100vh",
        color:"white",
      }}
      >
        <h1>Recent Projects</h1>

        <div className="container">
       <div className="logo-box">
        <div className="img" data-aos="fade-up-right">
            <img src="../assets/logo3.png" alt="logo" />
            <div className="description">
              <span className='logo-titre'>Beautiful spar</span>
              <span className='logo-description'>
                Beautiful est le logo d'un sallon de beauté ,
                 que nous avonbs realiser , pour pouvoir representer ca marque . 
              </span>
            </div>
        </div>
       </div>
       <div className="flyers-box">
            
       </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
