import React from "react";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.header_logo} src="./Logo.svg" alt="logo" />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre mim</a>
          </li>
          <li>
            <a href="">Portfólio</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Carreira</a>
          </li>
          <li>
            <a href="">Recomendações</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
