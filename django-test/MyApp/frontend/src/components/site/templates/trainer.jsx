import {Header, } from '../../../components/common/header';
import {Footer, } from '../../../components/common/footer';
import {LinkPage, } from '../../../components/button/button_link';
import {ButtonSend, } from '../../../components/button/button_send';
import {SendMessage, } from '../../../containers/SendMessage';
import {ResultMessage, } from '../../../containers/ResultMessage';

import {RegExpBlock, } from '../../../components/layout-block/send-regexp-block'
import {AnswerBlock, } from '../../../components/layout-block/get-regexp-block'

import React, {useState, useEffect, } from 'react';


import  '../../../theme/css/regexp/style-trainer-compile.css';

async function getTask(id) {
        let response = await fetch(`http://127.0.0.1:8000/trainer/requests/${id}`)
        const task = await response.json()
        return task
    }

export const Trainer = (props) => {

    const currentID = window.location.href.split('/')[4];
    console.log(getTask(currentID))


    const [count, setCount] = useState()
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState([])

    useEffect(() => {
        getTask(currentID).then(task_ => {
            setTask(task_)
            setLoading(false)
        }).catch(error => {
            alert('Ошибка запроса')
        })
    }, [])

    const link_serv = <LinkPage class="menu__link" link="/"
                            name="Главная" />

    const link_cost = <LinkPage class="menu__link" link="/blog"
                                name="Блог" />

    const link_proj = <LinkPage class="menu__link" link="/manual"
                                    name="Справочник" />

    const button_send = <ButtonSend name="Войти/Регистрация" href="/auth"/>

    function RegExp(count, date){
        try{
            let test = date.match(count)
            return test
        }catch(err){
            console.log(err)
            }
        }

    return(
        <>
            <Header first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj}
                   button_send={button_send}/>

            <section class="main">

                <div class="compiler__container fixed-container join-container">

                    <div class="compiler__left-block">
                        <div class="left-block__task">
                            <h1>Задание</h1>
                            <h3>{task.task}</h3>
                        </div>

                            <SendMessage  childComponent={<RegExpBlock
                                                            setCount={setCount}
                                                            exercise={getTask(currentID)}/>} />

                    </div>

                    <div class="compiler__right-block">
                        <div class="right-block__example">
                            <h1>Данные</h1>
                            <h3>{task.example}</h3>
                        </div>
                        <ResultMessage childComponent={<AnswerBlock count={RegExp(count, task.example)} />} />
                    </div>

                </div>


            </section>

            <Footer first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj}/>
        </>
    )
}