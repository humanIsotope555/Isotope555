import {Header, } from '../../../components/common/header';
import {Footer, } from '../../../components/common/footer';
import {LinkPage, } from '../../../components/button/button_link';
import {ButtonMainLink, } from '../../../components/button/button_main_link';
import {getPost, } from '../../../api/api.js';

import React, {Component, useState, useEffect, } from 'react';
import {useParams, } from 'react-router-dom';
import '../../../theme/css/blog/style-articles-detail.css';

export const Post = (props) => {

    const { id } = useParams();
    const [post, setPost] = useState([])
    const [date, setDate] = useState([])
    const [time, setTime] = useState([])

    async function getPostData() {
        let response = await fetch(`http://127.0.0.1:8000/blog/requests/${id}/`)
        const post = await response.json()

        return {'title': post.title,
                'body': post.body,
                'topic': post.topic}
    }

    async function getPostDate(){

        const months = new Map([
            ['01', 'Январь'], ['02', 'Февраль'], ['03', 'Март'],
            ['04', 'Апрель'], ['05', 'Май'], ['06', 'Июнь'],
            ['07', 'Июль'], ['08', 'Август'], ['09', 'Сентябрь'],
            ['10', 'Октябрь'], ['11', 'Ноябрь'], ['12', 'Декабрь']
        ])

        let response = await fetch(`http://127.0.0.1:8000/blog/requests/${id}/`)
        const post = await response.json()
        const post_date = post.date.split("T")
        const post_time = post_date[1].split(".")[0].split(':')

        return {'year': post_date[0].split("-")[0],
                'month': months.get(post_date[0].split("-")[1]),
                'day': post_date[0].split("-")[2]}


        }

        async function getPostTime(){
            let response = await fetch(`http://127.0.0.1:8000/blog/requests/${id}/`)
            const post = await response.json()
            const post_time = post.date.split("T")[1].split(".")[0].split(':')
            return {'hour': post_time[0],
                    'minute': post_time[1],
                    'second': post_time[2]}
            }

    useEffect(() => {
        getPostData().then(post => {setPost(post)})
        getPostDate().then(date =>{setDate(date)})
        getPostTime().then(time =>{setTime(time)})
                    }, [])





    const link_serv = <LinkPage class="menu__link" link="/"
                            name="Главная" />

    const link_cost = <LinkPage class="menu__link" link="/blog"
                                name="Блог" />

    const link_proj = <LinkPage class="menu__link" link="/manual"
                                    name="Справочник" />

    return(   <>
        <Header first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj}/>

            <section class="post">

                <div class="post__container fixed-container join-container">

                        <div class="info article__info">
                            <div class="list-block">
                                <div class="list-head">

                                    <h1 class="article__name">
                                     {post.title}
                                    </h1>

                                    <div class="other info__other">

                                        <span class="date other__date">
                                            <span class="year date__year">
                                                {date.year}&nbsp;
                                            </span>
                                            <span class="month date__month">
                                                {date.month}&nbsp;
                                            </span>
                                            <span class="day date__day">
                                                {date.day}&nbsp;
                                            </span>
                                            <span class="time date__time">
                                                <span class="hour time__hour">
                                                    {time.hour}:
                                                </span>
                                                <span class="minute time__minute">
                                                    {time.minute}:
                                                </span>
                                                <span class="second time__second">
                                                    {time.second}
                                                </span>
                                            </span>

                                        </span>
                                    </div>

                                </div>
                                    <div class="list-posts">
                                        <div class="list-posts__item">

                                            <p class="article__text">
                                                {post.body}
                                            </p>
                                        </div>
                                    </div>
                                <div class="block-link">
                                    <a class="article__link" >

                                        <ButtonMainLink class="button article__back"
                                            link="/blog"
                                            name="Назад"
                                                />
                                    </a>
                                    <span class="topic other__topic">
                                                {post.topic}
                                    </span>
                                </div>
                            </div>
                        </div>

                </div>

            </section>

            <Footer first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj}/>
    </>)
    }