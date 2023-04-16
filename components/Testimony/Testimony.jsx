import React from "react";
import s from "./Testimony.module.scss";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import { motion } from "framer-motion";
import { Navigation } from "swiper";

const Testimony = () => {
  return (
    <>
      <div className={s.container}>
        <motion.button
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          💬 Recomendações
        </motion.button>
        <div className={s.content}>
          <motion.h1
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            Em depoimento
          </motion.h1>
        </div>{" "}
        <div className={s.testimonyCard}>
          <TestimonyCard />
        </div>
      </div>
    </>
  );
};

export default Testimony;
