import $ from 'jquery';
import getCookie from '../../api/csrf-token'
import React, {Component, useState, useEffect, } from 'react';


export const RegExpBlock = (props) => {

    const setCount = props.setCount
    const count = props.count
    const exercise = props.exercise

    const csrftoken = getCookie;

  async function sendRegexp() {
        let response = await fetch(`http://127.0.0.1:8000/`, {
      method: 'POST',
      headers: {'X-CSRFToken': csrftoken},
      body: count
    })
        const symbol = await response.json()
        return symbol
    }

    useEffect(() => {
        sendRegexp().then(symbol_ => {
            setCount(symbol_)

        }).catch(error => {
           // alert('Ошибка запроса')
        })
    }, [])

    {/*
    function handleChange(event) {
        setValue({value: event.target.value});
    }
    */}
    const [task, setTask] = useState()

    useEffect(() => {
        exercise.then(task => {
            setTask(task)

        }).catch(error => {
            alert('Ошибка запроса')
        })
    }, [])
    function handleSubmit(e) {

        const re = new RegExp(e.target[0].value, "g")
        console.log(task.example.split(' '))

        console.log(Array.from(task.example.matchAll(re)))

        setCount(e.target[0].value)
        e.preventDefault();
    }


    return(
        <div class="compile__block">
            <div class="compile__block-title">
                <h1 class="compile__title">

                </h1>
            </div>
            <div class="wrapper-area">
                <form class="form-area"
                        id="form-send-regex"
                        onSubmit={handleSubmit}
                        >

                    <div class="block-enter">
                        <textarea class="block-area" name="regexp"
                                  autofocus
                                    placeholder="Введите RegExp..."

                                     value={count}
                                     onChange={(e) => setCount(e.target.value)}
                                    ></textarea>

                        <button id="send_regexp" class="button button-compile"
 /*onClick={() => openSnackbar('Отправленно')}*/
                            >

                            Отправить
                        </button>


                    </div>
                </form>

            </div>

        </div>
    )
}