import React, { useRef } from "react";
import s from "./Experience.module.scss";
import { motion, useAnimationFrame } from "framer-motion";

const Experience = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -20;
    ref1.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 870)) * -25;
    ref2.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 940)) * -30;
    ref3.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.cards}>
          <motion.div
            ref={ref1}
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.card}
          >
            <img src="/Programador.svg" alt="Programador" />
            <h2>3 anos como</h2>
            <h1>Programador</h1>
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.card}
          >
            <img src="/Trabalhos.png" alt="Trabalhos" />
            <h2>7 anos de</h2>
            <h1>Trabalhos</h1>
          </motion.div>
          <motion.div
            ref={ref3}
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.card}
          >
            <img src="/Designer.png" alt="Designer" />
            <h2>4 anos como</h2>
            <h1>Designer</h1>
          </motion.div>
        </div>
        <div
          className={s.category}
        >
          <motion.div
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
          className={s.category_title}>
            <h4>Desenvolvedor</h4>
            <h3>Front-end</h3>
          </motion.div>
          <motion.div
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
          className={s.category_title}>
            <h4>Dezenas de projetos e</h4>
            <h3>Experiências</h3>
          </motion.div>
          <motion.div
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
          className={s.category_title}>
            <h4>Designer Freelancer e</h4>
            <h3>UI · UX</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
