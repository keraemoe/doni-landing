import React from 'react';
import s from './Stack.module.scss'
import { motion } from 'framer-motion'
import { tech, outtech } from '../../constants/constants'

const Stack = () => {
    return (
        <>
            <div id='skill' className={s.container}>
                <div className={s.stack}>
                    <motion.button
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                    >🧑‍💻 Skills · Experiências</motion.button>
                    <motion.h1
                        initial="hidden"
                        transition={{ duration: 0.5 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                    >Tecnologias e habilidades</motion.h1>
                    <motion.p
                        initial="hidden"
                        transition={{ duration: 0.8 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                    >Techs que uso no dia a dia</motion.p>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.6 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.tech}>
                        {tech.map((tech) => (
                            <img src={tech.img} alt="tech" />
                        ))}
                    </motion.div>
                    <motion.p
                        initial="hidden"
                        transition={{ duration: 0.8 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                    >Outras techs com que já realizei projetos</motion.p>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.tech}>
                        {outtech.map((tech) => (
                            <img src={tech.img} alt="tech" />
                        ))}
                    </motion.div>
                </div>
            </div >
        </>
    );
};

export default Stack;