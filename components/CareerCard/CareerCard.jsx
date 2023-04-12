import React from "react";
import s from "./CareerCard.module.scss";
import { career, career2 } from "../constants/Career";

const CareerCard = () => {
  return (
    <div className={s.global}>
      <div className={s.first_cards}>
        <h6>
          Área profissional <b>2016 · Atualmente</b>
        </h6>

        {career.map((item) => (
          <div className={s.third_content}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className={s.dates}>
              <h2>{item.prazo}</h2>
              <h3>{item.data}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className={s.second_cards}>
        <h6>
          Acadêmica<b>2014 · Atualmente</b>
        </h6>
        {career2.map((item) => (
          <div className={s.third_content}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className={s.dates}>
              <h2>{item.prazo}</h2>
              <h3>{item.data}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerCard;
