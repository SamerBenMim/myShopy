import React,{useState} from "react";
import navbar from "./Navbar.module.css";
import search from "../../xSVG/search.svg"
import bag from "../../xSVG/bag.svg"

const Navbar = () => {
  const [active, setActive] = useState(0)
  return (
    <div className={navbar.container}>
      <ul className={navbar.sections}>
        <li className={navbar.section} onClick={()=>{setActive(0)}}>
          <a className={ (active==0)? navbar.active : navbar.section} href="#" >Femme</a>
          </li>
        <li className={navbar.section} onClick={()=>{setActive(1)}}>
        <a className={ (active==1)? navbar.active : navbar.section} href="#">Homme</a>
          </li>
        <li className={navbar.section} onClick={()=>{setActive(2)}}>
        <a className={ (active==2)? navbar.active : navbar.section} href="#">Enfant</a>
          </li>
      </ul>
      <div className={navbar.logo}>LOGO</div>
      <div className={navbar.icons}>
          <div className={navbar.wrapperIcons}>
      <img src={search} className={navbar.search} alt="bag" />
      <img src={bag} className={navbar.bag} alt="loop" />
      </div></div>
    </div>
  );
};

export default Navbar;
