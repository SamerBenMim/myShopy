import React from "react";
import classes from "./Wellcome.module.css";
import LoadingIntro from "../../Components/LoadingIntro/LoadingIntro";
import Navbar from "../../Components/NavbarProducts/Navbar";
import Header from "../../Components/Header/Header";

const Wellcome = () => {
  return (
    <div className={classes["big-container"]}>
      <LoadingIntro />
      <Header />
    </div>
  );
};

export default Wellcome;
