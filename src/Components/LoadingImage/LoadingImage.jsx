import React, { useEffect, useRef } from "react";
import Load from "./LoadingImage.module.css";
const LoadingImage = ({src,top,bottom,right,left, delay, width,height,index}) => {

const image=useRef();
useEffect(()=> {
image.current.style.setProperty("--top",top+"%");
image.current.style.setProperty("--index",index -2);

image.current.style.setProperty("--width",width+"%");
image.current.style.setProperty("--height",height+"%");

image.current.style.setProperty("--delay",delay+"s");

image.current.style.setProperty("--left",left+"%");
image.current.style.setProperty("--right",right+"%");
image.current.style.setProperty("--bottom",bottom+"%");
},[])



  return <div className={Load.container} ref={image}>
    <div className={Load.containerImage}>
        
    <div className={Load.overlay}></div>

      <img className={Load.image} src={src} alt="" />

</div>
  </div>;
};

export default LoadingImage;

