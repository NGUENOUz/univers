import React, { useState } from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import validation from './validation';

function Contact() {

  // state des composants

  const [values, setValue]=useState({  

    User_first_name:'',
    User_last_name:'',
    User_email:'',
    message:''
  });

  const [errors , setError]=useState({});
  
  const form = useRef();

  // comportement des composants 

  const handleInput= (event)=>{
    
     // ici on fait une copy de notre objet innitiale , on ajoute les nouvelle valeurs de nos input 
    const valueCopy={...values,[event.target.name]:event.target.value}
    setValue(valueCopy);
  }

  const sendEmail = (e) => {
    e.preventDefault();

     setError(validation(values))
       
    emailjs.sendForm('service_0nip0ds',
     'template_3lczlhh',
      form.current,
       'qlkcyCJt1wVMZOuPF')


      .then((result) => {
          console.log(result.text);
          console.log("message envoyer")
      }, (error) => {
          console.log(error.text);
      });
  };

  
// affichage des composants 
  return (
    <div>
      {/* <section className="contact" id='Contact'
      
      style={{
        backgroundImage: `url("assets/fond1.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"auto",
        color:"white",
      }}
      > <h1>Contact me</h1>   
        <div className="container">
        <div className="gauche">
            <div className="adresse">
                <div className="icon">
                  <img src="../assets/ville.png" alt="location" />
                </div>
                <div className="info">
                    <h3>Douala , Cameroun</h3>
                </div>
            </div>
            <div className="adresse">
                <div className="icon">
                  <img src="../assets/mail.png" alt="location" />
                </div>
                <div className="info">
                    <h3> <span>ContactWD237@gmail.com</span></h3>
                </div>
            </div>

            <div className="adresse">
                <div className="icon">
                  <img src="../assets/tel.png" alt="location" />
                </div>
                <div className="info">
                    <h3> <span>678-37-89-76</span></h3>
                </div>
            </div>
            <div className="more-info">
                <p>You can follow me on my social network</p>
                <div className="social-link">
                    <a href="https://www.facebook.com/monnouveauguide/"><img src="../assets/facebook.png" alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCBg4mnLqcqHk_zaeEKi6ctg"><img src="../assets/youtube.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/wilfried-dzomeu-b060771b9/"><img src="../assets/linkedin.png" alt="" /></a>
                </div>
            </div>
         </div>

         <div className="droite">
            <form ref={form} onSubmit={sendEmail} name='form'>
                
                {errors.User_first_name&& <p style={{color:"red"}}>{errors.User_first_name}</p>}
                <input type="text" name="User_first_name" id="first_name" placeholder='Enter your first name' onChange={handleInput}/>


                {errors.User_last_name&& <p style={{color:"red"}}>{errors.User_last_name}</p>}
                <input type="text" name="User_last_name" id="Last_name" placeholder='Enter your Last Name' onChange={handleInput}/>

                {errors.User_email&& <p style={{color:"red"}}>{errors.User_email}</p>}
                <input type="text" name="User_email" id="Email" placeholder='Enter your Email'onChange={handleInput} />

                {errors.User_first_name&& <p style={{color:"red"}}>{errors.User_first_name}</p>}
                <textarea name="message" id="message" cols="30" rows="10" placeholder='message : 'onChange={handleInput}></textarea>

                <button type="submit">Send Message</button>
            </form>
         </div>
        </div>
        <footer>
        <p>Wilfried Dzomeu All right reserved </p>
      </footer>
      </section> */}
     
    </div>
  )
}

export default Contact
