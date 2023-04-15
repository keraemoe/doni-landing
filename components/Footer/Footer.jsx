import React from "react";
import s from "./Footer.module.scss";
import Footer_end from "../Footer_end/Footer_end";

const Footer = () => {
  return (
    <>
      <div className={s.global}>
        <div className={s.container}>
          <div className={s.content}>
            <button>📬 Contatos</button>
            <h1>Vamos conversar! </h1>

            <div className={s.footer_whats}>
              <button className={s.btn_whatsapp}>
                <img src="/Whatsapp.png" alt="whatsapp" /> Vamos conversar{" "}
              </button>
              <div className={s.email}>
                <img src="/tg.png" alt="tg" />
                <h2>E-mail:</h2>
                <a href="">henriquesousa.dev@gmail.com</a>
              </div>
            </div>
            <a className={s.footer_l} href="">
              Voltar ao topo <img src="/arrowUp.png" alt="arrowUp" />
            </a>
          </div>
        </div>

        <div className={s.footer_end}>
          <Footer_end />
        </div>
      </div>
    </>
  );
};

export default Footer;
