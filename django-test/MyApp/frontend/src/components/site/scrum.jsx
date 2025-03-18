import {Header, } from '../../components/common/header';
import {ButtonSend, } from '../../components/button/button_send';
import {LinkPage, } from '../../components/button/button_link';
import {Footer, } from '../../components/common/footer';
import {StatusObjectBlock, } from '../../components/layout-block/status-object-block';
import React, {useState} from 'react';

import '../../theme/css/scrum/style-scrum.css';

export const Scrum = (props) => {
     const link_serv = <LinkPage class="menu__link logo" href=""
                            name="Scrum" />

    const link_cost = <LinkPage class="menu__link" href="#cost"
                                name="" />

    const link_proj = <LinkPage class="menu__link" href="#projects"
                                    name="" />

    const button_send = <ButtonSend name="Войти/Регистрация" />
        return(
                <>
                <h1>
                    <Header  first_link={link_serv}
                            second_link={link_cost}
                            third_link={link_proj}
                            />
               </h1>
                <section class="scrum">
                    <div class="scrum__container fixed-container join-container">
                        <StatusObjectBlock status_object="Ожидание" />
                        <StatusObjectBlock status_object="Разработка" />
                        <StatusObjectBlock status_object="Решено" />
                    </div>
                </section>

                  <Footer first_link={link_serv}
                           second_link={link_cost}
                           third_link={link_proj} />
                </>
            )
    }