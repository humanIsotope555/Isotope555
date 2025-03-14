import {Header, } from '../../components/common/header';
import {Footer, } from '../../components/common/footer';
import {LinkPage, } from '../../components/button/button_link';
import {SymbolList, } from '../../components/menu/symbol-list';
import {SymbolDetail, } from '../../components/layout-block/symbol-detail'

import {SendMessage, } from '../../containers/SendMessage';
import {ResultMessage, } from '../../containers/ResultMessage';

import {SendMessageBlock, } from '../../components/layout-block/send-message-block'
import {GetMessageBlock, } from '../../components/layout-block/get-message-block'

import React, {useState} from 'react';


import '../../theme/css/styles.css';
import '../../theme/css/chatbot/style-chatbot.css';

export const ChatBot = () => {

    const link_serv = <LinkPage class="menu__link" link="/"
                            name="Главная" />

    const link_cost = <LinkPage class="menu__link" href="/blog"
                                name="Блог" />

    const link_proj = <LinkPage class="menu__link" link="/regexp"
                                    name="RegExp" />

    return(
        <>
             <Header first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj} />

             <section class="chatbot">
                <div class="chatbot__container fixed-container join-container">
                    <div class="chat-block">
                        <h2 class="chat-title">Чат-бот</h2>
                        <ResultMessage childComponent={<GetMessageBlock />} />
                        <SendMessage childComponent={<SendMessageBlock />} />
                    </div>
                </div>
             </section>

             <Footer first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj} />
        </>
    )

}