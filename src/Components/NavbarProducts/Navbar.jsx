import React, { useState } from "react";
import navbar from "./Navbar.module.css";
import search from "../../xSVG/search.svg";
import CartIcon from "./../cart-icon/cartIcon";
import X from "../X/X";
const Navbar = () => {
  const [active, setActive] = useState(0);
  const [input, setInput] = useState(true);

  return (
    <nav className={navbar.container}>
      <div className={navbar.list_container}>
        <X />
        <ul className={navbar.sections}>
          <li
            className={navbar.section}
            onClick={() => {
              setActive(0);
            }}
          >
            <a
              className={active == 0 ? navbar.active : navbar.section}
              href="#"
            >
              Femme
            </a>
          </li>
          <li
            className={navbar.section}
            onClick={() => {
              setActive(1);
            }}
          >
            <a
              className={active == 1 ? navbar.active : navbar.section}
              href="#"
            >
              Homme
            </a>
          </li>
          <li
            className={navbar.section}
            onClick={() => {
              setActive(2);
            }}
          >
            <a
              className={active == 2 ? navbar.active : navbar.section}
              href="#"
            >
              Enfant
            </a>
          </li>
        </ul>
      </div>
      <div className={navbar.logo}>
        <h3>LOGO</h3>
      </div>
      <div className={navbar.icons}>
        {!input && <input type="text" id="id" autoFocus placeholder="search" />}
        <div className={navbar.wrapperIcons}>
          <div className={navbar.wrap}>
            <img
              src={search}
              onClick={() => {
                setInput(!input);
              }}
              className={navbar.search}
              alt="loop"
            />
          </div>
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
