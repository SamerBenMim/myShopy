import React from "react";
import Load from "./Loading.module.css";
import LoadingImage from "../../Components/LoadingImage/LoadingImage";
const Loading = () => {
  return (
      <div className={Load.Bigcontainer}>
    <div className={Load.container}>
         <LoadingImage
        src="https://i.pinimg.com/564x/f2/87/60/f28760b66d4e45527549a614c865fe31.jpg"
        top={25}
        left={40}
        delay={0.5}
        width={15}
        height={50}
      ></LoadingImage>
      <LoadingImage
        src="https://i.pinimg.com/564x/af/ab/0e/afab0e0bcf15470caaf99f1455bca944.jpg"
        top={30}
        left={60}
        delay={0.7}
        width={15}
        height={50}
      ></LoadingImage>
       <LoadingImage
        src="https://i.pinimg.com/564x/08/06/77/080677fba124195e1987013f18ad2187.jpg"
        top={40}
        left={20}
        delay={1}
        width={15}
        height={40}
      ></LoadingImage>
       <LoadingImage
        src="https://i.pinimg.com/564x/df/bb/e5/dfbbe50328c4f23887eff290d03d7d2e.jpg"
        top={60}
        left={50}
        delay={0.9}
        width={30}
        height={30}
      ></LoadingImage>
        <LoadingImage
        src="https://i.pinimg.com/564x/5a/fc/c0/5afcc06fcc484de5500a716bb0d85589.jpg"
        top={20}
        left={30}
        delay={0.9}
        width={15}
        height={25}
      ></LoadingImage>
         <LoadingImage
        src="https://i.pinimg.com/564x/d4/3c/d6/d43cd60d93c072ab0a589247bce1bcd8.jpg"
        top={55}
        left={30}
        delay={1.1}
        width={15}
        height={35}
      ></LoadingImage>
     
    </div></div>
  );
};

export default Loading;
