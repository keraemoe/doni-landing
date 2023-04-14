import React from 'react';
import s from './Projects.module.scss'
import UICard from '../UICard/UICard';
import { motion } from 'framer-motion'

const Projects = () => {
    const slides = [
        {
            tag: 'Move.it1',
            info: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
            stackone: 'React JS',
            stacktwo: 'Vue JS',
            image: '/image.png',
        },
        {
            tag: 'Move.it2',
            info: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
            stackone: 'React JS',
            stacktwo: 'Next',
            image: '/image.png',
        },
        {
            tag: 'Move.it3',
            info: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
            stackone: 'JS',
            stacktwo: 'HTML & CSS',
            image: '/image.png',
        },
        {
            tag: 'Move.it4',
            info: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
            stackone: 'Typescript',
            stacktwo: 'JS',
            image: '/image.png',
        },
        {
            tag: 'Move.it5',
            info: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
            stackone: 'Angular',
            stacktwo: 'Flutter',
            image: '/image.png',
        },
        {
            tag: 'Move.it6',
            info: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
            stackone: 'Python',
            stacktwo: 'React JS',
            image: '/image.png',
        },
        {
            tag: 'Move.it7',
            info: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
            stackone: 'JS',
            stacktwo: 'HTML & CSS',
            image: '/image.png',
        },
        {
            tag: 'Move.it8',
            info: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
            stackone: 'React JS',
            stacktwo: 'Typescript',
            image: '/image.png',
        },
    ]
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
                        initial="hidden"
                        transition={{ duration: 0.6 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.cards}>
                        {slides.map((slide) => (
                            <div className={s.card}>
                                <motion.h1
                                    initial="hidden"
                                    transition={{ duration: 0.5 }}
                                    whileInView="visible"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: { scale: 1 },
                                    }}
                                >{slide.tag}</motion.h1>
                                <motion.p
                                    initial="hidden"
                                    transition={{ duration: 0.7 }}
                                    whileInView="visible"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: { scale: 1 },
                                    }}
                                >{slide.info}</motion.p>
                                <motion.div
                                    initial="hidden"
                                    transition={{ duration: 0.8 }}
                                    whileInView="visible"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: { scale: 1 },
                                    }}
                                    className={s.stack}>
                                    <button>{slide.stackone}</button>
                                    <button>{slide.stacktwo}</button>
                                </motion.div>
                                <motion.img
                                    initial="hidden"
                                    transition={{ duration: 0.7 }}
                                    whileInView="visible"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: { scale: 1 },
                                    }}
                                    src={slide.image} alt="image" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Projects;