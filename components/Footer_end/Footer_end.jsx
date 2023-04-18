import React, { useRef } from "react";
import s from "./Footer_end.module.scss";
import { useAnimationFrame } from "framer-motion";
const Footer_end = () => {

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);


  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -7;
    ref.current.style.transform = `translateY(${y}px) `;
  });
  
  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 850)) * -7;
    ref2.current.style.transform = `translateY(${y}px) `;
  });
  
  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 900)) * -7;
    ref3.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1> SNOWFLAKE    · 2023</h1>
        <div className={s.icon}>
          <a href="#">
            <img  src="/linkedin.svg" alt="in"  ref={ref}  />
          </a>
          <a href="#">
            <img src="/githubHeader.png" alt="github"   ref={ref2} />
          </a>

          <a href="#">
            <img src="/behance.svg" alt="behance" ref={ref3} />
          </a>
        </div>
        <h2>Copyright © Henrique Sousa</h2>
      </div>
    </div>
  );
};

export default Footer_end;
