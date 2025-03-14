import {Header, } from '../../components/common/header';
import {Footer, } from '../../components/common/footer';
import {LinkPage, } from '../../components/button/button_link';
import {SymbolList, } from '../../components/menu/symbol-list';
import {SymbolDetail, } from '../../components/layout-block/symbol-detail'

import '../../theme/css/manual/manual.css';
import React, {useState} from 'react';

export const Manual = (props) => {

    const link_serv = <LinkPage class="menu__link" link="/"
                            name="Главная" />

    const link_cost = <LinkPage class="menu__link" href="#cost"
                                name="Чат-бот" />

    const link_proj = <LinkPage class="menu__link" link="/regexp"
                                    name="RegExp" />

    return(
        <>
            <Header first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj} />

          <section class="main">

            <div class="manual__container fixed-container join-container">
                <div class="manual__block">
                    <div class="manual__block-title">
                        <h1 class="manual__title">Справочник</h1>

                    </div>

                    <div class="manual-base">
                        <SymbolList />
                        <SymbolDetail />
                    </div>

                </div>

            </div>

        </section>



            <Footer first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj} />
    </>
    )
}