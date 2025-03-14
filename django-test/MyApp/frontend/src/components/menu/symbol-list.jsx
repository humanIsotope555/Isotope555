import {SelectSymbol, } from '../../containers/SelectSymbol'
import React, { Component, useState, useEffect } from 'react';

async function getList() {
        let response = await fetch('http://127.0.0.1:8000/manual/requests/')
        const symbols = await response.json()
        return symbols
    }


export const SymbolList = (props) => {

    const [loading, setLoading] = useState(true)
    const [symbols, setSymbols] = useState([])

    useEffect(() => {
        getList().then(symbols_ => {
            setSymbols(symbols_)
            setLoading(false)
        }).catch(error => {
            alert('Ошибка запроса')
        })
    }, [])

    return(
        <>
            <div class="left-block-symbol">
                <h2 class="head-list">Символы</h2>

                    <ul class="list-symbol">
            {symbols.map((symbol) => <SelectSymbol item={symbol.symbol} id={symbol.id} value={symbol.id} url={symbol.url} />)}

                    </ul>

            </div>
        </>
    )
}