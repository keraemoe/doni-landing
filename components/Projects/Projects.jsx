import React from 'react';
import s from './Projects.module.scss'
import UICard from '../UICard/UICard';
import { motion } from 'framer-motion'
import { slides } from '../../constants/constants'

const Projects = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.projects}>
                    <motion.button
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                    >🔗 Portfólio</motion.button>
                    <div className={s.tag}>
                        <motion.h1
                            initial="hidden"
                            transition={{ duration: 0.7 }}
                            whileInView="visible"
                            variants={{
                                hidden: { scale: 0 },
                                visible: { scale: 1 },
                            }}
                        >Trabalhos e projetos</motion.h1>
                        <div className={s.tab}>
                            <motion.button
                                initial="hidden"
                                transition={{ duration: 0.5 }}
                                whileInView="visible"
                                variants={{
                                    hidden: { scale: 0 },
                                    visible: { scale: 1 },
                                }}
                                className={s.tab_btn}> <img src="/ui.png" alt="ui" /> UI Design</motion.button>
                            <motion.button
                                initial="hidden"
                                transition={{ duration: 0.6 }}
                                whileInView="visible"
                                variants={{
                                    hidden: { scale: 0 },
                                    visible: { scale: 1 },
                                }}
                                className={s.tab_btn}> <img src="/pal.svg" alt="pal" /> Design</motion.button>
                            <motion.button
                                initial="hidden"
                                transition={{ duration: 0.7 }}
                                whileInView="visible"
                                variants={{
                                    hidden: { scale: 0 },
                                    visible: { scale: 1 },
                                }}
                                className={s.tab_btn}> <img src="/ui.png" alt="ui" /> UI Design</motion.button>
                        </div>
                    </div>
                    <motion.div
                        className={s.cards}>
                        {slides.map((item) => (
                            <motion.div
                                initial="hidden"
                                transition={{ duration: 0.7 }}
                                whileInView="visible"
                                variants={{
                                    hidden: { scale: 0 },
                                    visible: { scale: 1 },
                                }}
                                className={s.card}>
                                <motion.h1
                                    initial="hidden"
                                    transition={{ duration: 0.5 }}
                                    whileInView="visible"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: { scale: 1 },
                                    }}
                                >{item.tag}</motion.h1>
                                <motion.p
                                    initial="hidden"
                                    transition={{ duration: 0.7 }}
                                    whileInView="visible"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: { scale: 1 },
                                    }}
                                >{item.info}</motion.p>
                                <motion.div
                                    initial="hidden"
                                    transition={{ duration: 0.8 }}
                                    whileInView="visible"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: { scale: 1 },
                                    }}
                                    className={s.stack}>
                                    <button>{item.stackone}</button>
                                    <button>{item.stacktwo}</button>
                                </motion.div>
                                <motion.img
                                    initial="hidden"
                                    transition={{ duration: 0.7 }}
                                    whileInView="visible"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: { scale: 1 },
                                    }}
                                    src={item.image} alt="image" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Projects;