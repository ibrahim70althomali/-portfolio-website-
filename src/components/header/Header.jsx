import React, { useState } from 'react'
import "./header.css"
import { useEffect } from 'react';
const Header = () => {


  const [showModel, setShowModel] = useState(false);
  // نغير ثيم  
  const [Theme, setTheme] = useState(localStorage.getItem("currenMode"));
 
  useEffect(()=>{
    if (Theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  },[Theme])
 
 
 
 
 
  return (
    
   <header className=' flex'>  
 
  {/* <button className='menu icon-menu flex' onClick={()=>{setShowModel(true)}}></button>       */}
 
      <div />

      <nav>
        {/* <ul className='flex'>
          <li><a href="#/">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Uses</a></li>
        </ul> */}
        <h1 className='flex hh'>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</h1>
      </nav>
      
      
      
      <button onClick={() => {
        
        // send value to localStorage
        localStorage.setItem("currenMode",Theme === "dark" ? "light" : "dark")
        // get value form localStorage  
        setTheme(localStorage.getItem("currenMode"))
      }}
       className='modle flex'>
     
      { Theme === "dark"? (<span className='icon-moon-o'></span>) : (<span className='icon-sun'></span>) }
      </button>




      {/* menu */}
      {showModel && (
        <div className='flexd'>
          <ul className='list'>
             <li>
              <button className='icon-cross1' onClick={()=>{
                setShowModel(false);
              }}></button>
             </li>
            <li><a href="#/">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Uses</a></li>
          </ul>
        </div>)}
    </header>
  )
}

export default Header
