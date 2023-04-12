import React from "react";
import s from "./Career.module.scss";
import { career } from "../constants/Career";
import CareerCard from "../CareerCard/CareerCard";

const Career = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.first_block}>
            <button>💼 Carreira</button>
            <h1>Trajetória até aqui</h1>
          </div>
          <div className={s.third_block}>
     <CareerCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
