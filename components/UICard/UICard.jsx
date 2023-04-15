import s from './UICard.module.scss'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Grid, Pagination } from "swiper";

const UICard = () => {
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
            <Swiper
                slidesPerView={4}
                grid={{
                    rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                autoplay={{
                    delay: 1500,
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Autoplay, Grid, Pagination]}
                className="project_slider"
            >
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default UICard;