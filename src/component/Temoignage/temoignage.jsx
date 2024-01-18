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
                <img src="./assets/rutha.jpg" alt="" />
               </div>

               <div className="comment">
                <h3><span>"</span>
                Rutha Bio 
                </h3>
                <h3>
                j'aime bien ta qualité de service
                </h3>
               </div>

             </div>
             <div className="cart">
               <div className="profil">
                <img src="./assets/pro.jpg" alt="" />
               </div>

               <div className="comment">
                <h3><span>"</span>
                ArchiPro Constuction
                </h3>
                <h3>
               Merci de nous avoir fait donner de nouvelles opportunités 
                </h3>
               </div>

             </div>
             <div className="cart">
               <div className="profil">
                <img src="./assets/mira.jpg" alt="" />
               </div>

               <div className="comment">
                <h3><span>"</span>
                Mira Cosmetic Gabon
                </h3>
                <h3>
                Merci por ma page que tu à créer
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
