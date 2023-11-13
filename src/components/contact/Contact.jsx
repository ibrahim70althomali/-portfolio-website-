import React from 'react'
import "./Contact.css"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import emaliAnimation from "../../../public/animation/email.json"
import  doneAnimation from "../../../public/animation/done.json"



const Contact = () => {

  const [state, handleSubmit] = useForm("meqbddzn");

  return (
    <div className='Contact'>
      <h1 className='title'><span className='icon-envelope' />Contact Me</h1>
      <p className='sub-title'>Contact me for more information</p>


      <div style={{justifyContent:"space-between"}} className="flex">

        <form onSubmit={handleSubmit} className='form'>
          <div className='flex'>
            <label htmlFor='Email'>Email Address :</label>
            <input autoComplete='off' required type="email" name='email' id='Email' />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>


          <div className="flex" style={{ marginTop: "30px" }}>
            <label htmlFor="message">Your message : </label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className='Submit'>
            {state.submitting ? "Submitting ..." : "Submit"}

          </button >

          {state.succeeded && (

            <p className='flex ' style={{ marginTop: "11px", fontSize: "16px"}}>
              <Lottie loop={false} style={{ height: 50, }} animationData={
              doneAnimation} />
              Yuor message has been sent successfully </p>)}
        </form>


        <div className="animation ">
          
          <Lottie
           className='CONanimation'
           style={{height :450}}
          animationData={emaliAnimation}/>
          </div>
      </div>

    </div>
  )
}

export default Contact
