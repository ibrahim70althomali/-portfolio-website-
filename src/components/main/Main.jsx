import { useState } from "react";
import "./Main.css"
import { myPorj } from "./myPorj";
import { AnimatePresence, motion } from "framer-motion";




  const Main = () => {
  
    // عشان اسوي اكتف  علي زر
  const [current, setCurrent] = useState("all");
  //للمشاريع عشان نسوي فلتر 
  const [arr, setArr] = useState(myPorj);
  
   const handleClick = (buttonCategory) => {
    //فكره هنا اني سوي فلتر بعدها بقول روح شوف وش كتقري وش اسمه 
    // category
    const newArr = myPorj.filter((item) => {
    
      return item.category === buttonCategory;  
    })

    setArr(newArr);
    setCurrent(buttonCategory);

  }




  return (

    <div className='main flex'>

      <div className='left-main flex'>
        <button onClick={() => {
          setCurrent("all");
          // يرجع يعرض كل مشاريع
          setArr(myPorj);
        }}
          className={current === "all" ? "active" : null}> All Projects </button>


        <button onClick={() => {
          handleClick("html");
        }}
          className={current === "html" ? "active" : null}>HTML&CSS</button>





        <button onClick={() => {
          setCurrent("JavaScript")
        }} className={current === "JavaScript" ? "active" : null}>JavaScript</button>


        <button onClick={() => {
          setCurrent("React")
        }} className={current === "React" ? "active" : null}>React</button>

        <button>Laravel</button>

      </div>

       
       <div className='Rightmain flex '>
        
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.div 
            layout
            initial={{transform:"scale(0.4)"}}
            animate={{transform:"scale(1)"}}
            transition={{type:"spring",damping:8,stiffness:50}}
            key={item.imgpath}
            className="card "
            >
            
              <img width={270} src={item.imgpath} alt="" />
              <div style={{ width: "280px" }} className="box">



                  <h1 className="title_main ">{item.myPorjTitle}</h1>
                  <p className="sub_title_main ">{item.p}</p>
                  <div className="flex icons">

                  <div style={{ gap: "11px" }} className="flex">
                    {/* <a href="#" className="icon-link" /> */}
                    <a href="#" className="icon-github-square"/>
                  </div>

                  {/* <a className="link" href="Footer.jsx">more<span className="icon-arrow-right-thick"></span></a> */}
                
                
                </div>
              </div>
            </motion.div>
          );
        })}
        </AnimatePresence>
      </div>
    </div>
  )
}
export default Main