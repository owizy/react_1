import { useEffect, useState } from "react";
import React  from "react";
import "./reactslider.css"
import phone_1 from "./phone_1.png"
import phone_2 from "./phone_2.png"
import phone_3 from "./phone_3.png"
const ReactSliderBasic=()=>{
    const[currentIndex, setcurrentIndex]=useState(0);
   const[intervalid,setintervalid]=useState(null)
   const item=[
    {
        id:"A",
        content:<div className="itemSlider"><div className="family"> <button className="tophead ">Hot Deal</button> <h3>Sale 10% off </h3>
        <h2>IPHONE 13 Pro</h2> <h5>Top quality Apple ios</h5>
        <button className="discoverBtn
        ">Discover now</button> </div>
        <img src={phone_1} width={250}/>
        </div>
        
    },
    {
        id:"B",
        content:<div className="itemSlider"><div className="family"> <button className="head_2">Hot Deal</button> <h3  className="second sec">Sale 20% off </h3>
        <h2 className="second sec"> Mac Book Pro Laptop Apple</h2> <h5 className="h5_2">Top quality macbook </h5>
        <button className="discoverBtn btn_2
        ">Discover now</button> </div>
        <img src={phone_2} width={250}/>
        </div>
    },
    {
        id:"C",
        content:<div className="itemSlider  spacing"><div className="family"> <button className="head_2"> Hot Deal</button> <h3 className="sec">Sale 40% off </h3>
        <h2  className="second sec">Nokia Smart TV display  </h2> <h5>Top quality Led Smart TV</h5>
        <button className="discoverBtn btn_2
        ">Discover now</button> </div>
        <img src={phone_3} width={250}/>
        </div>
    }
   ]
   useEffect(()=>{
       const id =setInterval(()=>{
       setcurrentIndex((currentIndex +1 ) %   item.length);   
       console.log('slider call here automaticall')
       },5000)
       setintervalid(id)
       console.log("yes useeffect call here")
    return()=> clearInterval(id);
   },[currentIndex,item.length])
   const handlerprev =()=>{
    clearInterval(intervalid);
    setcurrentIndex((currentIndex - 1) % item.length);
   }
   const handlernext =()=>{
    clearInterval(intervalid);
    setcurrentIndex((currentIndex + 1) % item.length);
   }
   const handleclick =(ItemIndex)=>{
    clearInterval(intervalid);
    setcurrentIndex(ItemIndex);
   }
    return (
        <div className="cover">
       <div className="slider">
             {
                item.map((itemContent, index)=>{
                    const isActive = index === currentIndex;
                    const className = `slider-item ${isActive ? "active" : ""}`
                    return(
                       <div className={className} key={itemContent.id}> 
                             {
                                itemContent.content
                             } 
                       </div> 
                    )
                })
             }
               <div className="cover">
       <div className="slider">
             {
                item.map((itemContent, index)=>{
                    const isActive = index === currentIndex;
                    const className = `slider-item ${isActive ? "active" : ""}`
                    return(
                       <div className={className} key={itemContent.id}> 
                             {
                                itemContent.content
                             } 
                       </div> 
                    )
                })
             }
             <div className="slider-contols">
               <div className="slider-indicator">
                     {
                        item.map((_, index)=>{
                            return(
                                <span key={index} 
                                onClick={()=>{handleclick(index)}}
                                className={`slider-indicator-item ${index === currentIndex ? "active" : ""}`}>
                                  {index + 1}
                                </span>
                            )
                        })
                     }
               </div>
             </div>
       </div>
        </div>
       </div>
        </div>
    )
}
export default ReactSliderBasic