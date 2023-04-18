import React, { useRef } from "react";
import s from "./Footer.module.scss";
import Footer_end from "../Footer_end/Footer_end";
import { motion, useAnimationFrame } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 850)) * -10;
    ref6.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 900)) * -10;
    ref7.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <>
      <div id="contact" className={s.global}>
        <div className={s.container}>
          <div className={s.content}>
            <motion.button
              ref={ref}
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
              ref={ref6}
              
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
              ref={ref7}

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
