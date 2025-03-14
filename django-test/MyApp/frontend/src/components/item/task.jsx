import {Route, Routes, BrowserRouter, Link, } from 'react-router-dom';
import {Trainer, } from '../site/templates/trainer';

export const Task = (props) => {
    return(
        <>
        <Link class={props.class} to={`/task/${props.id}`}>

            <div class="exercises__exercise-block">
                <h2 class="exercises__exercise-title">
                    <span class="exercise__text">{props.task}</span>
                    <sup class="exercise__index">{props.id}</sup>&nbsp;
                </h2>
                {/*
                <a class="articles__link" href="">
                    <button class="button photo__more">Узнать больше</button>
                </a> */}
            </div>

        </Link>

    </>
    )
}