import {ButtonSend, } from '../../../components/button/button_send';
import {ButtonScrum, } from '../../../components/button/button_scrum';
import {ButtonMainLink, } from '../../../components/button/button_main_link';


export const Base = (props) => (

    <>

        <section class="main">

            <button_send_mail />
            <div class="main__container fixed-container join-container">
                <div class="main__myinfo">
                    <h1 class="main__name">Заголовок</h1>
                    <p class="main__prof">Что-то...</p>

                    <div class="main__info">
                        <ButtonMainLink class="button main__more" name="Узнать больше" />
                        <ButtonMainLink class="button main__menu-link"
                                        name = "Мой&nbsp;&nbsp;&lt;&nbsp;блог&nbsp;&gt;"
                                        link="/blog"
                          />
                        <ButtonMainLink class="button main__menu-link"
                                        link="/regexp"
                                        name="Тренажер [ regexp ]"
                         />
                    </div>
                </div>
                <div class="right-block">
                    <ButtonScrum />
                </div>

            </div>

        </section>
        {/*
        <section class="mywork" id="mywork">
            <div class="photo-container join-container work-container">
                <h2 class="do mywork__do">
                    Что я делаю
                </h2>
                <ul class="view mywork__view">
                    <li class="item view__item view__item1">
                        <p class="item__text">
                            Вёрстка лендинг<span class="def">_</span>страниц
                            и сайтов любой сложности
                        </p>
                    </li>
                    <li class="item view__item view__item2">
                        <p class="item__text">
                            Адаптивная вёрстка под все
                            браузеры и устройства
                        </p>
                    </li>
                    <li class="item view__item view__item3">
                        <p class="item__text">
                            Frontend <span class="def">_</span> разработка
                            и программирование
                        </p>
                    </li>

                    <li class="item view__item view__item4">
                        <p class="item__text">
                            Исправление и доработка
                            существующей вёрстки
                        </p>
                    </li>
                </ul>
                <ButtonSend class="mywork__more button" name="Узнать стоимость" />


            </div>
        </section>


        <section class="projects" id="projects">
            <div class="slider-container projects__slider-container join-container fixed-container">
                <h2 class="exp slider-container__exp">
                    Примеры моих работ
                </h2>
                <div class="swiper-container slider-container__swiper-container">
                    <div class="swiper-wrapper swiper-container__swiper-wrapper">

                        <div class="swiper-slide card swiper-wrapper__swiper-slide">
                            <img class="img swiper-slide__img" src ="{% static 'img/11.png' %}" alt="screen 1">
                            </img>
                            <span class="text swiper-slide__text">Мой сайт</span>
                        </div>

                        <div class="swiper-slide card">
                            <img class="img swiper-slide__img" src ="{% static 'img/22.png' %}" alt="screen 2">
                            </img>
                            <span class="text swiper-slide__text">Сайт новостей</span>
                        </div>
                        <div class="swiper-slide card">
                            <img class="img swiper-slide__img" src ="{% static 'img/33.png' %}" alt="screen 3">
                            </img>
                            <span class="text swiper-slide__text">Сайт списка дел</span>
                        </div>

                        <div class="swiper-slide card">
                            <img class="img swiper-slide__img" src ="{% static 'img/44.png' %}" alt="screen 4">
                            </img>
                            <span class="text swiper-slide__text">Сайт IT компании</span>
                        </div>

                    </div>

                </div>
                <div class="swiper-pagination slider-container__swiper-pagination"></div>
                <button class="swiper-button-prev slider-container__swiper-button-prev">&nbsp;</button>
                <button class="swiper-button-next  slider-container__swiper-button-next">&nbsp;</button>

                <button class="order slider-container__order button">
                    Заказать проект
                </button>
            </div>
        </section>

        <section class="cost" id="cost">

            <div class="cost__container fixed-container join-container">
                <div class="board cost__board">
                    <h2 class="head main__head">
                    Адаптивная вёрстка под все
                    устройства и браузеры от 1000
                    рублей всего за 4 часа.*
                    </h2>
                </div>

                <span class="cost__other">

                    * Срок и стоимость могут отличаться
                    от заявленных и рассчитываются
                    индивидуально, в зависимости от
                    сложности задач.

                </span>
            </div>
        </section>
*/}
    </>

)