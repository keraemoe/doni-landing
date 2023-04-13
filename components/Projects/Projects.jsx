import React from 'react';
import s from './Projects.module.scss'
import UICard from '../UICard/UICard';

const Projects = () => {
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
                        <UICard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;