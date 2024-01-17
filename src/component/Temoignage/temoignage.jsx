import React from 'react'
import './temoignage.scss'

const Temoignage = () => {
  return (
    <div>
      <section className='temoignage' id='Temoignage'>
        <h1>Testimonial</h1>
         <div className="carte-container">
             <div className="cart">
               <div className="profil">
                <img src="./assets/profil.png" alt="" />
               </div>

               <div className="comment">
                <h3><span>"</span>
                Junior ferdinand 
                </h3>
                <h3>
                j'approuve la qualité de son travail ...
                </h3>
               </div>

             </div>
             <div className="cart">
               <div className="profil">
                <img src="./assets/profil.png" alt="" />
               </div>

               <div className="comment">
                <h3><span>"</span>
                Junior ferdinand 
                </h3>
                <h3>
                j'approuve la qualité de son travail ...
                </h3>
               </div>

             </div>
             <div className="cart">
               <div className="profil">
                <img src="./assets/profil.png" alt="" />
               </div>

               <div className="comment">
                <h3><span>"</span>
                Junior ferdinand 
                </h3>
                <h3>
                j'approuve la qualité de son travail ...
                </h3>
               </div>

             </div>
         </div>

         <div className="cercles-container">
          <span></span>
        
          {/* <span></span> */}
         </div>
        <div className="container">

        </div>
      </section>
    </div>
  )
}

export default Temoignage
