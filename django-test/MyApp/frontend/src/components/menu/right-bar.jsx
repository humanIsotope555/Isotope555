import {MailSend, } from '../modal/mail';
import {LinkPage, } from '../button/button_link';
import Modal from 'react-modal';
import React, {useState} from 'react';

export const HeaderRightBar = (props) => {
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
     <div class="header__right-bar">

        <div class="call header__call">
            <a class ="number header__number" href="tel:+">
                {props.label}
            </a>
            <button
                class="button header__button"
                onClick={openModal}>
                    {props.send}
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

</>
)
}