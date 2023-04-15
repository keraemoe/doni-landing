import React from "react";
import s from "./Career.module.scss";
import CareerCard from "../CareerCard/CareerCard";
import { motion } from "framer-motion";
import { career } from "@/constants/constants";
const Career = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.first_block}>
            <motion.button
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >💼 Carreira</motion.button>
            <motion.h1
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >Trajetória até aqui</motion.h1>
          </div>
          <div className={s.third_block}>
            <CareerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
