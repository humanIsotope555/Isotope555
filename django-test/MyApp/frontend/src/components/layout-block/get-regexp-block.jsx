import $ from 'jquery';
import React, {Component, useState, useEffect, useContext} from 'react';
import {globalContext} from '../../app/App'

export const AnswerBlock = (props) => {

    return(
        <div class="result__block">
            <div class="wrapper-result">
                <div class="result__block-title">
                    <span class="result__title">Результат вашего RegExp</span>
                    <span class="result__alert"></span>
                </div>
                <div class="result-area">
                    <span class="result-text">{props.count}</span>
                </div>
            </div>
        </div>
    )
}