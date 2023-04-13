import React from 'react';
import s from './Stack.module.scss'

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
                    <button>🧑‍💻 Skills · Experiências</button>
                    <h1>Tecnologias e habilidades</h1>
                    <p>Techs que uso no dia a dia</p>
                    <div className={s.tech}>
                        {tech.map((tech) => (
                            <img src={tech.img} alt="tech" />
                        ))}
                    </div>
                    <p>Outras techs com que já realizei projetos</p>
                    <div className={s.tech}>
                        {outtech.map((tech) => (
                            <img src={tech.img} alt="tech" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stack;