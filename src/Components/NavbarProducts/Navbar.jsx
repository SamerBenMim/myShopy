import React from "react";
import navbar from "./Navbar.module.css";
import search from "../../xSVG/search.svg"
import bag from "../../xSVG/bag.svg"

const Navbar = () => {
  return (

    <div className={navbar.container}>
      <ul className={navbar.sections}>
        <li className={navbar.section}>Femme</li>
        <li className={navbar.section}>Homme</li>
        <li className={navbar.section}>Enfant</li>
      </ul>
      <div className={navbar.logo}>LOGO</div>
      <div className={navbar.icons}>
          <div className={navbar.wrapperIcons}>
      <img src={search} className={navbar.search} alt="" />
      <img src={bag} className={navbar.bag} alt="" />
      </div></div>
    </div>
  );
};

export default Navbar;
