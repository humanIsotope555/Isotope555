import {Header, } from '../../components/common/header';
import {Footer, } from '../../components/common/footer';
import {LinkPage, } from '../../components/button/button_link';
import {Task, } from '../item/task';
import {ButtonSend, } from '../../components/button/button_send';

import axios from 'axios'
import React, {Component, useEffect, useState} from 'react';

import '../../theme/css/styles.css';
import '../../theme/css/regexp/style-trainer.css';

 async function getList() {
        let response = await fetch('http://127.0.0.1:8000/trainer/requests')
        const posts = await response.json()
        return posts
    }

const NoListResult = ({title}) => {
        return (
            <strong>{title}</strong>
        )
   }

const BuildPage = () => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        getList().then(tasks_ => {
            setTasks(tasks_)
            setLoading(false)
        }).catch(error => {
            alert('Ошибка запроса')
        })
    }, [])

    if (loading) {
        return <>
            Загрузка...
        </>
    }


    const link_serv = <LinkPage class="menu__link" link="/"
                            name="Главная" />

    const link_cost = <LinkPage class="menu__link" link="/blog"
                                name="Блог" />

    const link_proj = <LinkPage class="menu__link" link="/manual/point"
                                    name="Справочник" />

    const button_send = <ButtonSend name="Войти/Регистрация" />

  return(
      <>
          <Header first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj}
                   button_send={button_send} />
           <section class="main">

                <div class="main__container fixed-container join-container">
                    <div class="exercises__block">
                        <div class="exercises__block-title">
                            <h1 class="exercises__title">Задания</h1>

                        </div>
                        {tasks.map((task) => (
                        <Task task={task.task}
                            id={task.id}
                            class="link-task"/>
                        ))}


                   </div>

                </div>

            </section>
          <Footer first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj}/>
    </>
  )
}

export const RegExp = () => BuildPage();