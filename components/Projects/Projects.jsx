import React from 'react';
import s from './Projects.module.scss'
import UICard from '../UICard/UICard';

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
                    <button>🔗 Portfólio</button>
                    <div className={s.tag}>
                        <h1>Trabalhos e projetos</h1>
                        <div className={s.tab}>
                            <button className={s.tab_btn}> <img src="/ui.png" alt="ui" /> UI Design</button>
                            <button className={s.tab_btn}> <img src="/pal.svg" alt="pal" /> Design</button>
                            <button className={s.tab_btn}> <img src="/ui.png" alt="ui" /> UI Design</button>
                        </div>
                    </div>
                    <div className={s.cards}>
                        {slides.map((slide) => (
                            <div className={s.card}>
                                <h1>{slide.tag}</h1>
                                <p>{slide.info}</p>
                                <div className={s.stack}>
                                    <button>{slide.stackone}</button>
                                    <button>{slide.stacktwo}</button>
                                </div>
                                <img src={slide.image} alt="image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;