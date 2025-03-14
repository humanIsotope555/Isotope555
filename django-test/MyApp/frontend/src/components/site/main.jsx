import {Header, } from '../../components/common/header';
import {LinkPage, } from '../../components/button/button_link';
import {Footer, } from '../../components/common/footer';
import {Base, } from './templates/base';
import React, {useState} from 'react';

import '../../theme/css/styles.css';

const BuildPage = (props) => {

    const link_serv = <LinkPage class="menu__link logo" href=""
                            name="RayDev" />

    const link_cost = <LinkPage class="menu__link" href="#cost"
                                name="" />

    const link_proj = <LinkPage class="menu__link" href="#projects"
                                    name="" />
  return(
      <>
          <Header  first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj} />
          <Base />
          <Footer first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj} />
    </>
  )
}

export const Main = () => BuildPage();
