import React from 'react';
import s from './Info.module.scss'

const Info = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.first}>
                        <div className={s.back}>
                            <img src="/back_ava.png" alt="" />
                            <img src="/man.png" alt="" />
                        </div>
                    </div>
                    <div className={s.second}>
                        <button>🧐 Sobre mim</button>
                        <h1>Washington Henrique <br /> Fernandes de Sousa</h1>
                        <p>
                            👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me chamar apenas de Henrique. Prazer!
                            <br />
                            <br />
                            👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript.
                            <br />
                            🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos Campos
                            <br />
                            💡 Interesses em desenvolvimento Front-end com React, React Native, VueJS e UX/UI Design.
                            <br />
                            <br />
                            🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;