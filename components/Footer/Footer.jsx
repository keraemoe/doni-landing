import React from "react";
import s from "./Footer.module.scss";
import Footer_end from "../Footer_end/Footer_end";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className={s.global}>
        <div className={s.container}>
          <div className={s.content}>
            <motion.button
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              📬 Contatos
            </motion.button>
            <motion.h1
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              Vamos conversar!{" "}
            </motion.h1>

            <div className={s.footer_whats}>
              <motion.button
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className={s.btn_whatsapp}
              >
                <img src="/Whatsapp.png" alt="whatsapp" /> Vamos conversar{" "}
              </motion.button>

              <motion.div
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className={s.email}
              >
                <img src="/tg.png" alt="tg" />
                <h2>E-mail:</h2>
                <a href="#">henriquesousa.dev@gmail.com</a>
              </motion.div>
            </div>
            <motion.a
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              className={s.footer_l}
              href="#"
            >
              Voltar ao topo <img src="/arrowUp.png" alt="arrowUp" />
            </motion.a>
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
