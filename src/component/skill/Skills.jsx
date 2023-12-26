import React, { Component } from 'react'
import { useState } from 'react'
import Hot from '../data/hot_projet.jsx'
import './skill.css'
import './slide.css'
import Filter from '../filterData/filterData.jsx'
import Pagination from '../filterData/pagination.jsx'


function Skills() {
   

  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    

    if (index >= (Hot.length-1)) {
      setIndex(0);
     
    }
    else{
      setIndex(index + 1);
    console.log("index"+index)
    
    }
  };

  const handlePreviewClick = () => {
    

    if (index <=0) {
      setIndex((Hot.length-1));
    }
    else{
      setIndex(index - 1);
    }
  };

  return (
    <> 
      <section className="feature-projet" id='Project'
          style={{
        
      }}
      
      >
        <h1>Featured Project</h1>

        <div className="hot-project">
          <div className="preview" onClick={handlePreviewClick}>
            <span> <img src="../assets/btn_preview.png" alt="" /> </span>
          </div>

               <div className="hot-container">

                      <div className="hot">
                      <div className="hot-gauche">
                      <img src={Hot[index].image} alt="image du projet en hot" />
                     </div> 

                     <div className="hot-droite">
                        <p className='categorie'>{Hot[index].category}</p>
                        <h2 className='hot-titre'>{Hot[index].titre}</h2>
                        
                        <p className='hot-description'>{Hot[index].description}</p>

                        <div className=" custom-btn btn-cv">
                          <a href={Hot[index].lien} style={{textDecoration:"none",color:"white"}}>More details</a>
                        </div>
              </div>
                      </div>
                    
                    </div>

            
          <div className="Next" onClick={handleNextClick}>
            <span> <img src="../assets/btn_next.png" alt="" /> </span>
          </div>        
                

                 
               </div>

                  <div className="allProject">
                  <Pagination/>
                     
                   
                  </div>
        </section>

      <section className="skills" id='Skill'>
          <h1>My skills</h1>
       
        <div className="skills-container">
        <div className="gauche">
            <h3>soft skills</h3>

            <p className=""> Here are some of my soft skills </p>
            <ul>
              <li> <img src="./assets/etoile.png" alt="" />Communication : <span> ability to communicate effectively with customers, colleagues and other stakeholders. </span></li>

              <li> <img src="./assets/etoile.png" alt="" />Collaboration : <span> ability to work effectively in a team, sharing information and solving problems together. </span></li>

              <li> <img src="./assets/etoile.png" alt="" />Autonom :<span> ability to work independently and manage time effectively.</span></li>

              <li> <img src="./assets/etoile.png" alt="" />Creativity : <span> ability to generate new and innovative ideas.</span></li>
              
              <li> <img src="./assets/etoile.png" alt="" />Analysis : <span> ability to collect, analyze and interpret data.</span></li>
              
              <li> <img src="./assets/etoile.png" alt="" />Adaptability : <span> ability to adapt to change and new situations.</span></li>
              

            </ul>
          </div>


          <div className="droite">
          <h3>Technical skills</h3>
          <div className="box">
      <div className="group">
        <div className="overlap">
          <div className="overlap-group">
            <div className="ellipse" />
            <img className="img  eclipse" alt="Ellipse" src="./assets/meta.png" />
            <img className="ellipse-2  eclipse" alt="Ellipse" src="./assets/css3.png" />
            <img className="ellipse-3  eclipse" alt="Ellipse" src="./assets/figma.png" title='fima me permet de faire les maquettes de site' />
            <div className="overlap-group-wrapper">
              <div className="div">
                <img className="ellipse-4 " alt="Ellipse" src="https://media.giphy.com/media/nTByLbm6g2Q9xO5aIB/giphy.gif" />
                <p className="text-wrapper">
                I still have more technical skills ,
                   that only the lucky ones who 
                   work with me will have the pleasure 
                   of discovering them
                </p>
              </div>
            </div>
          </div>
          <img className="ellipse-5   eclipse" alt="Ellipse" src="./assets/git.png"/>
          <img className="ellipse-6   eclipse" alt="Ellipse" src="./assets/chatgpt.png"/>
        </div>
        <img className="ellipse-7   eclipse" alt="Ellipse" src="./assets/wordpress.png" />
        <img className="ellipse-8   eclipse" alt="Ellipse" src="./assets/postman.png"/>
        <img className="ellipse-9   eclipse" alt="Ellipse" src="./assets/photoshop.png"/>
        <div className="ellipse-wrapper">
          <img className="ellipse-10   eclipse" alt="Ellipse" src="./assets/React.png" />
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>
  </>
  )
}

export default Skills
