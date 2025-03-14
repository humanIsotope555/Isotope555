import {MailSend, } from '../../components/modal/mail';
import {LinkPage, } from '../../components/button/button_link';
import Modal from 'react-modal';
import React, {useState} from 'react';

export const Footer = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };

    const afterOpenModal = () => {

    }

    const closeModal = () => {
      setModalIsOpen(false);
    };

    return(
    <>
        <footer class="footer">
        <div class="bar footer__bar footer-container join-container fixed-container">
            <nav class="menu bar__menu">
                <ul class="list-footer menu__list-footer">
                    <li class="item list-footer__item">
                    {props.first_link}
                    {/*
                        <a class="link item__link" href="#mywork">
                            {props.first_link}
                        </a>

                        */}
                    </li>
                    <li class="item list-footer__item">
                    {props.second_link}
                        {/*
                        <a class="link item__link" href="#projects">
                            {props.second_link}
                        </a>
                        */}
                    </li>
                    <li class="item list-footer__item">
                    {props.third_link}
                    {/*
                        <a class="link item__link" href="#cost">
                            {props.third_link}
                        </a>
                        */}
                    </li>
                </ul>
            </nav>
            <address class="addr bar__addr">
                <div class="call addr__call">
                    <a class="tel call__tel" href="tel:+">
                    [ Телефон ]
                    </a>
                </div>
                <div class=" mail addr__mail">
                    <a href="malto:" class="mail__link">
                        [ Почта ]
                    </a>
                </div>

            </address>

            <div class="order-links bar__order-links">
                <button class="order order-links__order button"
                        onClick={openModal}>
                        Заказать звонок
                </button>
                <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            onAfterOpen={afterOpenModal}
                            >

                            <MailSend />

                        </Modal>


                <ul class="list order-links__list">
                    <li class="vk list__vk list__style">
                        <a class="link-net vk__link-net" href="" target="_blank">&nbsp;</a>
                    </li>
                    <li class="f list_f list__style">
                        <a class="link-net f__link-net" href="" target="_blank">&nbsp;</a>
                    </li>
                    <li class="g list__g list__style">
                        <a class="link-net g__link-net" href="" target="_blank">&nbsp;</a>
                    </li>
                    <li class="i list__i list__style">
                        <a class="link-net i__link-net" href="" target="_blank">&nbsp;</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="law footer__law">
            <div class="author law__author footer-container join-container">
                <p class="author__text">
                    &copy;&nbsp;[ Имя ], 2020 <span class="def text__def">_</span> 2023
                </p>
            </div>
        </div>
    </footer>
    </>
)
}

Footer.defaultProps = { first_link: "Услуги",
                        second_link: "Портфолио",
                        third_link: "Стоимость", }