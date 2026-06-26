import "./ScrollProgress.css";
import { useEffect, useState } from "react";

function ScrollProgress(){

const [scroll,setScroll]=useState(0);

useEffect(()=>{

const handle=()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

setScroll((window.scrollY/total)*100);

};

window.addEventListener("scroll",handle);

return ()=>window.removeEventListener("scroll",handle);

},[]);

return(

<div

className="progress"

style={{

width:`${scroll}%`

}}

/>

);

}

export default ScrollProgress;