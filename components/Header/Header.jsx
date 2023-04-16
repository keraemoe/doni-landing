import React from "react";
import s from "./Header.module.scss";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className={s.container}>
      <motion.div
        initial="hidden"
        transition={{ duration: 0.7 }}
        whileInView="visible"
        variants={{
          hidden: { y: -20, scale: 0.9 },
          visible: { y: 10, scale: 1 },
        }}
        className={s.content}>
        <img className={s.header_logo} src="/Logo.svg" alt="logo" />
        <ul>
          <li>
            <a href="#">Home</a>
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
      </motion.div>
    </div>
  );
};

export default Header;
