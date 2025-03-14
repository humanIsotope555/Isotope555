import {Header, } from '../../../components/common/header';
import {Footer, } from '../../../components/common/footer';
import {LinkPage, } from '../../../components/button/button_link';
import {ButtonMainLink, } from '../../../components/button/button_main_link';
import {getPost, } from '../../../api/api.js';

import React, {Component, useState, useEffect, } from 'react';
import {useParams, } from 'react-router-dom';
import '../../../theme/css/blog/style-articles-detail.css';

export const Post = (props) => {

    let { id } = useParams();

    async function getPost() {

        const months = {
            '01': 'Январь', '02': 'Февраль', '03': 'Март',
            '04': 'Апрель', '05': 'Май', '06': 'Июнь',
            '07': 'Июль', '08': 'Август', '09': 'Сентябрь',
            '10': 'Октябрь', '11': 'Ноябрь', '12': 'Декабрь'
        }


        let response = await fetch(`http://127.0.0.1:8000/blog/requests/${id}/`)
        const post = await response.json()
        const post_date = post.date.split("T")
        const date = [[post_date[0].split("-")], [post_date[1].split(":")]]
        console.log(date)
        return [post.title, date, post.body, post.topic]
    }


    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState([])

    useEffect(() => {
        getPost().then(post_ => {
            setPost(post_)
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

                                     {post[0]}
                                    </h1>


                                    <div class="other info__other">

                                        <span class="date other__date">
                                            {post[1][0]}
                                        </span>
                                    </div>

                                </div>
                                    <div class="list-posts">
                                        <div class="list-posts__item">

                                            <p class="article__text">
                                                {post[2]}
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
                                                {post[3]}
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