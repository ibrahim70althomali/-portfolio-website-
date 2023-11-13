import React from 'react'
import "./Hero.css"
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animation/developer.json"
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <div className=' hero flex'>

      <div className='left-hero '>

        <div className="parent-avatar flex">
          <img src="./photo_5949392968072936511_y-removebg-preview-modified.png" alt=""  className='avatar'/>
          <div className='icon-verified'></div>
          </div>
          
          <motion.h1 
           initial={{opacity: 0 }}
           animate={{opacity: 1 }}
           transition={{ duration: 4 }}
           className='title'
          > 
          Software Designer,Full-Stack Web Developer
          </motion.h1 >
          
          <p className='sub-title'>I’m IBRAHIM ABDULWAHED ALTHOMALI,
           a software designer and Full-Stack Web Developer.
           I’m fresh-education from Taif University,with a GPA of 3.25 out of 4.00 and an overall grade "Very Good" with second 
           honors</p>
           
            <div className='all_icons flex '>
            <div className= "icon  icon-x"></div>
            <div className= "icon icon-linkedin-square"></div>
             <div className=' icon-github-square'></div>
          </div>
      </div>
         
      <div className='right-hero animation '>

       <Lottie style={{height :300}}
          animationData={developerAnimation}/>
         
      </div>
    
    </div>
  )
}

export default Hero
