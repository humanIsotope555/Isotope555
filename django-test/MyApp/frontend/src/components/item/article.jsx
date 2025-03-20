import {Post, } from '../site/templates/post';
import {Route, Routes, BrowserRouter, Link, } from 'react-router-dom';

export const Article = (props) => (
    <>
        <Link class="articles__link" to={`/article/${props.id}`}>
            <div class="articles__article-block">

                <div class="articles__article-title">
                    <h2 class="article__head">{props.name}</h2>
                    <span class="article__date"></span>
                </div>
                <p class="articles__text"></p>

            </div>
        </Link>



    </>
)