import React from "react";
import s from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.cards}>
          <div className={s.card}>
            <img src="./Programador.svg" alt="Programador" />
            <h2>3 anos como</h2>
            <h1>Programador</h1>
          </div>
          <div className={s.card}>
            <img src="./Trabalhos.png" alt="Trabalhos" />
            <h2>7 anos de</h2>
            <h1>Trabalhos</h1>
          </div>{" "}
          <div className={s.card}>
            <img src="./Designer.png" alt="Designer" />
            <h2>4 anos como</h2>
            <h1>Designer</h1>
          </div>
        </div>
        <div className={s.category}>
          <div className={s.category_title}>
            <h4>Desenvolvedor</h4>
            <h3>Front-end</h3>
          </div>
          <div className={s.category_title}>
          <h4>Dezenas de projetos e</h4>
            <h3>Experiências</h3>
          </div>
          <div className={s.category_title}>
          <h4>Designer Freelancer e</h4>
            <h3>UI · UX</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
