import {Header, } from '../../components/common/header';
import {LinkPage, } from '../../components/button/button_link';
import {ButtonSend, } from '../../components/button/button_send';
import { fetchProducts } from "../../actions/fetchData";
import {Footer, } from '../../components/common/footer';

//import {Post, } from './templates/base';
import axios from 'axios'
import {Article, } from '../item/article';

import '../../theme/css/styles.css';
import '../../theme/css/blog/style-blog.css';
import '../../theme/css/blog/style-articles-list.css';
import {connect, useDispatch} from 'react-redux';
import React, { Component, useState, useEffect } from 'react';

    async function getList() {
        let response = await fetch('http://127.0.0.1:8000/blog/requests/')
        const posts = await response.json()
        return posts
    }

const NoListResult = ({title}) => {
        return (
            <strong>{title}</strong>
        )
   }

const BuildPage = (props) => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
 const dispatch = useDispatch()

    useEffect(() => {
        getList().then(posts_ => {
            setPosts(posts_)
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


    if (posts.length == 0) {
        return <NoListResult title="Нет постов" />
    }

    const link_serv = <LinkPage class="menu__link" link="/"
                            name="Главная" />

    const link_cost = <LinkPage class="menu__link" link="/chatbot"
                                name="Чат-бот" />

    const link_proj = <LinkPage class="menu__link" link="/regexp"
                                    name="RegExp" />

    const button_send = <ButtonSend name="Войти/Регистрация" href="/auth" />

// var posts = ["Текст A", "Текст B", "Текст C", "Текст D"]



//const par = getUser().then(render => {posts.push(render[0].title)})
// console.log(posts)

    return(

        <>
            <Header first_link={link_serv}
                   second_link={link_cost}
                   third_link={link_proj}
                   button_send={button_send} />

          <section class="blog">

                <div class="blog__container fixed-container join-container">
                    <div class="articles__block">
                        <div class="articles__block-title">
                            <h1 class="articles__title">Заметки</h1>

                        </div>
                        {posts.map((item) => (
                                <Article id={item.id} name={item.title} />
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

export const Blog = (props) => BuildPage(props);