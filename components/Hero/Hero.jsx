import React from "react";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.podmobil}>
          <a href="">
            <img src="./linkedin.svg" alt="behance" />
          </a>
          <a href="">
            <img src="./github.png" alt="behance" />
          </a>
          <a href="">
            <img src="./behance.svg" alt="behance" />
          </a>
        </div>
        <div className={s.title}>
          <button>👋 Saudações!</button>
          <h1>Henrique Sousa</h1>
          <h2>Front-end developer · UI designer</h2>
          <div className={s.sotcial_network}>
            <a href="">
              <img src="./linkedin.svg" alt="behance" />
            </a>
            <a href="">
              <img src="./github.png" alt="behance" />
            </a>
            <a href="">
              <img src="./behance.svg" alt="behance" />
            </a>
          </div>
        </div>
        <div className={s.images}>
          <img src="./hero.png" alt="hero_img" />
        </div>
        <div className={s.save_and_whatsapp}>
          <a href="/resumejpg.pdf" className={s.btn_save}>
            Baixar CV <img src="./save.png" alt="save" />
          </a>
          <button className={s.btn_whatsapp}>
            <img src="./Whatsapp.png" alt="whatsapp" /> Vamos conversar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
