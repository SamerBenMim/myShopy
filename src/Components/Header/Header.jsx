import React, { useEffect, useRef } from "react";
import classes from "./Header.module.css";
import wardrobe from "../../assets/wardrobe.jpg";

const Header = () => {
  const headerImg = useRef();

  useEffect(() => {
    headerImg.current.onanimationend = () => {
      document.body.classList.remove("animated");
    };
  });

  return (
    <div className={classes.header}>
      <div ref={headerImg} className={classes["header-img"]}>
        <img src={wardrobe} alt="wardrobe" />
      </div>
      <div className={classes["header-content"]}>
        <span className={classes["header-txt"]}>Shop your favourite items</span>
        <span className={classes["header-txt"]}>all in one place</span>
        <span className={classes["header-btn"]}>shop now</span>
      </div>
    </div>
  );
};

export default Header;
