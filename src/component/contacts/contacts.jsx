import React, { useState } from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import validation from '../contact/validation';
import './contacts.css'

function Contacts() {
  // etat des composants : 
  const [values, setValue]=useState({  

    Name:'', 
    Email:'',
    Message:''
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
           alert('Message envoyer ')
       }, (error) => {
           console.log(error.text);
       });
   };
 



  return (
    <div className='Contacts' id='contacts'>

        <h1>Contactez moi</h1>
        <h3>Je répond immédiatement à vos message </h3>

       <div className="container">
       <div className="Contact-infos">
            <div className="detail">
                <img src="./assets/lieux.png" alt="ville" title='ville' />
                <p>Douala, cameroun</p>
            </div>
            <div className="detail">
                <img src="./assets/email.png" alt="email" title='email' />
                <p>Wilfrieddzomeu90@gmail.com</p>
            </div>
            <div className="detail">
                <img src="./assets/telephone.png" alt="numero de telep^hone" title='numeros de telephone' />
                <p>+237 678-37-89-76</p>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} name='form'>
          <div className="item">
         
             <label htmlFor="Nom">Nom</label>  <pre></pre>
             {errors.Name&& <span style={{color:"red"}}>{errors.Name}</span>}
             <input type="text" name="Name" id="" placeholder='Entrez votre nom' onChange={handleInput} />
          </div>
          <div className="item">

             <label htmlFor="Nom">Email</label>   <pre></pre>  
          {errors.Email&& <span style={{color:"red"}}>{errors.Email}</span>}
             <input type="text" name="Email" id="" placeholder='Entrez votre email'  onChange={handleInput}/>
         </div>
         <div className="item">
             <label htmlFor="message">Message</label>  <pre></pre> 
             {errors.Message&& <span style={{color:"red"}}>{errors.Message}</span>}
             <textarea name="Message" id="" cols="30" rows="10"  onChange={handleInput} ></textarea>
        </div>   
             <button type='submit' className='custom-btn btn-cv' ><pre></pre>Envoyer<pre></pre></button>
        </form>
       </div>
      
    </div>
  )
}

export default Contacts
