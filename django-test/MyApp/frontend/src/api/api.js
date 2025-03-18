import $ from 'jquery';
import React, {Component, useState, useEffect, } from 'react';
import axios from 'axios';
import getCookie from './csrf-token';


const csrftoken = getCookie;

const data = 2;
function apiService() {
        let response = fetch('http://127.0.0.1:8000/trainer/requests/1', {
            method: 'POST',
            headers: {'X-CSRFToken': csrftoken},
            body: data
        })
        const post =  response.json
        return post
    }

function getData(endpoint){
    return apiService(endpoint);
}

/*
const NoListResult = ({title}) => {
        return (
            <strong>{title}</strong>
        )
   }

const BuildPage = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

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
    }
    */