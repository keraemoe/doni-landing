﻿import React, { useRef } from 'react';
import s from './Info.module.scss'
import { motion, useAnimationFrame } from 'framer-motion'

const Info = () => {

    
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref.current.style.transform = `translateY(${y}px) `;
  });

    return (
        <>
            <div id='sobre' className={s.container}>
                <div className={s.info}>
                    <div className={s.first}>
                        <motion.div
                            initial="hidden"
                            transition={{ duration: 0.7 }}
                            whileInView="visible"
                            variants={{
                                hidden: { scale: 0 },
                                visible: { scale: 1 },
                            }}
                            className={s.back}>
                            <img src="/back_ava.png" alt="" />
                            <img src="/man.png" alt="" />
                        </motion.div>
                    </div>
                    <div className={s.second}>
                        <motion.button
                        ref={ref}
                            initial="hidden"
                            transition={{ duration: 0.5 }}
                            whileInView="visible"
                            variants={{
                                hidden: { scale: 0 },
                                visible: { scale: 1 },
                            }}
                        >🧐 Sobre mim</motion.button>
                        <motion.h1
                            initial="hidden"
                            transition={{ duration: 0.6 }}
                            whileInView="visible"
                            variants={{
                                hidden: { scale: 0 },
                                visible: { scale: 1 },
                            }}
                        >Washington Henrique <br /> Fernandes de Sousa</motion.h1>
                        <motion.p
                            initial="hidden"
                            transition={{ duration: 0.7 }}
                            whileInView="visible"
                            variants={{
                                hidden: { scale: 0 },
                                visible: { scale: 1 },
                            }}
                        >
                            👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me chamar apenas de Henrique. Prazer!
                            <br />
                            <br />
                            👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript.
                            <br />
                            <br />
                            🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos Campos
                            <br />
                            <br />

                            
                            💡 Interesses em desenvolvimento Front-end com React, React Native, VueJS e UX/UI Design.
                            <br />
                            <br />
                            🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
                        </motion.p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;