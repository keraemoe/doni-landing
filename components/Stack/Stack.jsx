import React from 'react';
import s from './Stack.module.scss'
import { motion } from 'framer-motion'

const Stack = () => {
    const tech = [
        {
            img: '/React.png'
        },
        {
            img: '/Javascript.png'
        },
        {
            img: '/TypeScript.png'
        },
        {
            img: '/Nextjs.png'
        },
        {
            img: '/Group 1.png'
        },
        {
            img: '/HTML5.png'
        },
        {
            img: '/Figma.png'
        },
        {
            img: '/Github.png'
        },
        {
            img: '/Shape.png'
        },
        {
            img: '/Insomnia.png'
        },
    ]

    const outtech = [
        {
            img: '/bitbucket.png'
        },
        {
            img: '/Vue.png'
        },
        {
            img: '/Nodejs.png'
        },
        {
            img: '/TailwindCSS.png'
        },
        {
            img: '/Sass.png'
        },
        {
            img: '/Python.png'
        },
        {
            img: '/Group 26.png'
        },
        {
            img: '/Union.png'
        },
        {
            img: '/Group 27.png'
        },
        {
            img: '/Docker.png'
        },

    ]
    return (
        <>
            <div className={s.container}>
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