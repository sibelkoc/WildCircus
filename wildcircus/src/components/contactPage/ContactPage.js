import React, {useState, useEffect, Component,} from 'react';
import './ContactPage.css'; 
import emailjs from 'emailjs-com';


  
function ContactPage() {
    
    
    function sendEmail(e) {
        
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_ecqWUHtH', e.target, 'user_zCFU2eWxgNjmOzCdwMLgF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div id="ContactPage">
            <div className="titleContactPage">
                <h2>Contact Us</h2>
                <form className="sign-form2"  onSubmit={sendEmail}>
          <label>
            Nom: 
            <input type="text" name="lastname" />
          </label>
          
          <label>
            Prénom: 
            <input type="text" name="firstname" />
          </label>
          
          <label>
            Email: 
            <input type="email" name="email" />
          </label>
          
          <label>
            Téléphone: 
            <input type="tel" name="tel" />
          </label>
         
         <label>
           Votre message: 
           <textarea
            className="messageContact"
            type="text"
            name="message"
          />
         </label>
          
          <button type="submit" className="btn">
            Envoyer !
          </button>
        </form>
            </div>
        </div>
        

    );
}



export default ContactPage;  