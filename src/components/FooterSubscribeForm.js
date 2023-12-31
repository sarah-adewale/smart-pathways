import React from "react";
import Button from "./Button";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_SERVICE_ID
const templateId = process.env.REACT_APP_TEMPLATE_ID
const publicKey = process.env.REACT_APP_PUBLIC_KEY

const FooterSubscribeForm = () => {
    const [successMessage, setSuccessMessage] = useState('');
    

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${serviceId}`, `${templateId}`, form.current, `${publicKey}`)
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
          setSuccessMessage('Thank you for subscribing!');

          setTimeout(() => {
            setSuccessMessage('');
          }, 3000); // Hide success message after 3 seconds
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <>
        <section className="mt-52 subscrber-form">
            <section className="subscribe-form-bg" >
                <h2 className="subscribe-form-title">Join our newsletter</h2>
                <p className="subscribe-form-subtitle">Get first hand information and updates on our services and offerings</p>
                <form action="" ref={form} onSubmit={sendEmail}>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" className="email-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8335 17.5C17.6744 17.5 19.1668 16.0076 19.1668 14.1667V6.68557C19.1671 6.67283 19.1671 6.66005 19.1668 6.64725V5.83333C19.1668 3.99238 17.6744 2.5 15.8335 2.5H4.16681C2.32586 2.5 0.833474 3.99238 0.833474 5.83333V6.64726C0.833177 6.66005 0.833179 6.67282 0.833474 6.68556V14.1667C0.833474 16.0076 2.32586 17.5 4.16681 17.5H15.8335ZM2.50014 14.1667C2.50014 15.0871 3.24633 15.8333 4.16681 15.8333H15.8335C16.7539 15.8333 17.5001 15.0871 17.5001 14.1667V7.89753L11.2381 10.4023C10.4434 10.7202 9.55687 10.7202 8.76217 10.4023L2.50014 7.89753V14.1667ZM10.6191 8.85488L17.5001 6.10247V5.83333C17.5001 4.91286 16.7539 4.16667 15.8335 4.16667H4.16681C3.24633 4.16667 2.50014 4.91286 2.50014 5.83333V6.10247L9.38116 8.85488C9.77851 9.01382 10.2218 9.01382 10.6191 8.85488Z" fill="#667185"/>
                        </svg>
                        <input type="email" name="user_email" placeholder="Email address"/>
                        {/* <input type="text" placeholder="Email address"/> */}
                    </div>
                    <div className="mt-10">
                        <Button type="submit" value="Send"  style={{border: '1px solid #BDFC6D', backgroundColor: '#BDFC6D', color: '#191919', width: '142px', height: '51px'}}>Subscribe</Button>
                    </div>
                </form>
               {successMessage && <p className="success-message">{successMessage}</p>}
            </section>
        </section>
        </>
    )
}

export default FooterSubscribeForm;