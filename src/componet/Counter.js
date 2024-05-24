import { AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { FaRotateRight,FaGear} from "react-icons/fa6";
import { useState,useEffect } from "react";


const Counter=()=>{

let [count,setCount]=useState(0);
let [showPopup,setShowPopup]=useState(false);
let [settingPopup,setStingPopup]=useState(false);


let color=["#F3F3F3","#000000","#004291","#ED1E79","#607D8B","#A700A5","#00AD98","#FFAC02"]
let [changeColor,SetChangeColor]=useState("#F3F3F3");


let textColor=changeColor==="#F3F3F3"? "#000000":"#FFFFFF";
useEffect(() => {
    document.body.style.backgroundColor = changeColor;
    document.body.style.color = textColor;
    // document.getElementsByTagName("a").style.color=textColor;
    
    
  }, [changeColor,textColor]);

function handdelpopup(){
    setCount(0);
    setShowPopup(false);
}

function handdelInput(e){
    setCount(e.target.value);
    console.log(e.target.value);
}
    return (
        <div className="container" style={{backgroundColor:changeColor, color:textColor}}>
            <div className="setting-container">
                <FaGear className="setting-icon" onClick={()=>setStingPopup(true)}/>
                <FaRotateRight className="reset-icon" onClick={()=>setShowPopup(true)}/>
            </div>
            <div className="counter">
                <AiOutlineMinus className="minus" onClick={()=>setCount(count-1)}/>
                <div className="count">{count}</div>
                <AiOutlinePlus className="add" onClick={()=>setCount(count+1)}/>
            </div>

            {showPopup && (
                <div className="showpopup-container" style={{backgroundColor:changeColor, color:textColor}}>
                    <div className="popup">
                        <h2>Reset Counter?</h2>
                        <button onClick={handdelpopup} style={{color:textColor}}>Yes</button>
                        <button onClick={()=>setShowPopup(false)} style={{color:textColor}}>cancel</button>
                    </div>
                </div>
            )}
            {settingPopup && (
                <div className="setting-popup-container" style={{backgroundColor:changeColor , color:textColor}}>
                    
                    <div className="setting-popup" >
                        <h2>Setting</h2>
                        <div className="inputcontainer">
                            <label htmlFor="setcount">Set count = </label> 
                            <input
                             type="number"
                             id="sertcount"
                             onChange={handdelInput}
                             value={count}   
                             />
                        </div>
                        <div className="color-container">
                            {color.map((item,index)=>{
                                return (
                                    <div 
                                    className="color"
                                    key={index}
                                    style={{backgroundColor:item}}
                                    onClick={()=>SetChangeColor(item)}
                                    >
                                    </div>
                                )
                            })}
                        </div>
                        <div className="close" onClick={()=>setStingPopup(false)}>X</div>    
                    </div>
                </div>
            )}
        </div>
    )
}

export default Counter;


