import {MailSend, } from '../../components/modal/mail';
import {LinkPage, } from '../../components/button/button_link';
import Modal from 'react-modal';
import React, {useState} from 'react';

export const Header = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };

    const afterOpenModal = () => {

    }

    const closeModal = () => {
      setModalIsOpen(false);
    };



    return( <>
        <header class="header">
            <div class="header-container fixed-container join-container">
                <nav class="menu header__menu ">

                    <div class="menu-on header__menu-on">
                        <div class="top menu-on__top"></div>
                        <div class="middle menu-on__middle"></div>
                        <div class="bottom menu-on__bottom"></div>
                    </div>

                    <ul class="menu__list">
                        <li class="menu__item">
                            {props.first_link}

                            {/*
                            <a class="menu__link" href="#mywork">
                                {props.first_link}
                            </a>
                            */}
                        </li>
                        <li class="menu__item">
                            {props.second_link}

                            {/*
                            <a class="menu__link_red menu__link" href="#projects">
                                {props.second_link}
                            </a>
                            */}
                        </li>

                        <li class="menu__item">
                            {props.third_link}
                            {/*
                            <a class="menu__link" href="#cost">
                                {props.third_link}
                            </a>
                            */}
                        </li>

                    </ul>
                </nav>
                <div class="header__right-bar">

                    <div class="call header__call">
                        <a class ="number header__number" href="tel:+">
                            [ Телефон ]
                        </a>
                        <button
                            class="button header__button"
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

                    </div>
                </div>
            </div>
        </header>

    </>
    )
}



