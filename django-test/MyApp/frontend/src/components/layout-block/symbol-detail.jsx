import React, {Component, useState, useEffect } from 'react';
import {useParams, useLocation} from 'react-router-dom';


export const SymbolDetail = (props) => {

    let { id } = useParams();
    let location = useLocation();
    let sym_id = location.pathname.split('/')[2]
    async function getSymbol() {
        let response = await fetch(`http://127.0.0.1:8000/manual/requests/${sym_id}/`)
        const symbol = await response.json()
        return symbol
    }

    const [loading, setLoading] = useState(true)
    const [symbol, setSymbol] = useState([])

    useEffect(() => {
        getSymbol().then(symbol_ => {
            setSymbol(symbol_)
            setLoading(false)
        }).catch(error => {
            alert('Ошибка запроса')
        })
    }, [])


    return(
        <>

            <div class="right-block-mean">

                <div class="mean">
                    <div class="mean__title mean-block">
                        <h2 class="mean__title-head">Название:</h2>
                        <div class="mean__title-body mean-body">
                            <span>
                                {symbol.title}
                            </span>
                        </div>
                    </div>
                    <div class="mean__sybmol mean-block">
                        <h2 class="mean__sybmol-head">Символ:</h2>
                        <div class="mean__sybmol-body mean-body">
                            <span class="sybmol-view">
                                {symbol.symbol}
                            </span>
                        </div>
                    </div>
                    <div class="mean__body mean-block">
                        <h2 class="mean__body-head">Подробно:</h2>
                        <div class="mean__body-head mean-body">
                            <span>
                                {symbol.body}
                            </span>
                        </div>
                    </div>
                    <div class="mean__example mean-block">
                        <h2 class="mean__example-head">Пример:</h2>
                        <div class="mean__example-body mean-body">
                            <span>
                                {symbol.example}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}