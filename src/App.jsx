import Header from "./components/header/Header"
import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import { useEffect, useState } from "react"
function App() {
  const [showScroll, setshowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setshowScroll(true);
      }else{
        setshowScroll(false)
      }})},[]);


  return (
    <div id="up" className="container">
      <Header />
      <div />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
 

        <a style={{opacity: showScroll ? 1: 0,transition: "0.5s"}} href="#up">
          <button className=" icon-arrow_drop_up scroll2Top"></button>

        </a>
    
    </div>
  )
}

export default App
