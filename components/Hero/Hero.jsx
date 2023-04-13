import React from "react";
import s from "./Hero.module.scss";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <motion.div 
             initial="hidden"
             transition={{ duration: 0.7 }}
             whileInView="visible"
             variants={{
               hidden: { scale: 0 },
               visible: { scale: 1 },
             }}
        
        className={s.podmobil}>
          <motion.a
               initial="hidden"
               transition={{ duration: 0.7 }}
               whileInView="visible"
               variants={{
                 hidden: { scale: 0 },
                 visible: { scale: 1 },
               }}
          href="">
            <img src="./linkedin.svg" alt="in" />
          </motion.a>
          <motion.a 
               initial="hidden"
               transition={{ duration: 0.7 }}
               whileInView="visible"
               variants={{
                 hidden: { scale: 0 },
                 visible: { scale: 1 },
               }}
          href="">
            <img src="./githubHeader.png" alt="github" />
          </motion.a>
          <motion.a
               initial="hidden"
               transition={{ duration: 0.7 }}
               whileInView="visible"
               variants={{
                 hidden: { scale: 0 },
                 visible: { scale: 1 },
               }}
          href="">
            <img src="./behance.svg" alt="behance" />
          </motion.a>
        </motion.div>
        <div className={s.title}>
          <motion.button
               initial="hidden"
               transition={{ duration: 0.7 }}
               whileInView="visible"
               variants={{
                 hidden: { scale: 0 },
                 visible: { scale: 1 },
               }}
          >👋 Saudações!</motion.button>
          <motion.h1
        
               initial="hidden"
               transition={{ duration: 0.7 }}
               whileInView="visible"
               variants={{
                 hidden: { scale: 0 },
                 visible: { scale: 1 },
               }}
          >Henrique Sousa</motion.h1>
          <motion.h2
               initial="hidden"
               transition={{ duration: 0.7 }}
               whileInView="visible"
               variants={{
                 hidden: { scale: 0 },
                 visible: { scale: 1 },
               }}
          >Front-end developer · UI designer</motion.h2>
          <div className={s.sotcial_network}>
            <motion.a
                 initial="hidden"
                 transition={{ duration: 0.7 }}
                 whileInView="visible"
                 variants={{
                   hidden: { scale: 0 },
                   visible: { scale: 1 },
                 }}
            href="">
              <img src="./linkedin.svg" alt="in" />
            </motion.a>
            <motion.a
                 initial="hidden"
                 transition={{ duration: 0.7 }}
                 whileInView="visible"
                 variants={{
                   hidden: { scale: 0 },
                   visible: { scale: 1 },
                 }}
            href="">
              <img src="./githubHeader.png" alt="github" />
            </motion.a>
            <motion.a
                 initial="hidden"
                 transition={{ duration: 0.7 }}
                 whileInView="visible"
                 variants={{
                   hidden: { scale: 0 },
                   visible: { scale: 1 },
                 }}
            href="">
              <img src="./behance.svg" alt="behance" />
            </motion.a>
          </div>
        </div>
        <motion.div
             initial="hidden"
             transition={{ duration: 0.7 }}
             whileInView="visible"
             variants={{
               hidden: { scale: 0 },
               visible: { scale: 1 },
             }}
        className={s.images}>
          <img src="./hero.png" alt="hero_img" />
        </motion.div>
        <div className={s.save_and_whatsapp}>
          <motion.a
               initial="hidden"
               transition={{ duration: 0.7 }}
               whileInView="visible"
               variants={{
                 hidden: { scale: 0 },
                 visible: { scale: 1 },
               }}
          href="/resumejpg.pdf" className={s.btn_save}>
            Baixar CV <img src="./save.png" alt="save" />
          </motion.a>
          <motion.button
               initial="hidden"
               transition={{ duration: 0.7 }}
               whileInView="visible"
               variants={{
                 hidden: { scale: 0 },
                 visible: { scale: 1 },
               }}
          className={s.btn_whatsapp}>
            <img src="./Whatsapp.png" alt="whatsapp" /> Vamos conversar{" "}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
