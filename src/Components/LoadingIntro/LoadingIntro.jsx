import React, { useRef, useEffect } from "react";
import classes from "./LoadingIntro.module.css";
import images from "./images";
import LoadingImage from "../LoadingImage/LoadingImage";

const LoadingIntro = () => {
  useEffect(() => {
    document.body.classList.add("animated");
  });

  return (
    <div className={classes.container}>
      {images.map((image) => (
        <LoadingImage
          key={image.src}
          src={image.src}
          top={image.top}
          left={image.left}
          delay={image.delay}
          width={image.width}
          height={image.height}
        />
      ))}
      <div className={classes.overlay}></div>
    </div>
  );
};

export default LoadingIntro;
