import axios from 'axios';
import {fetchDataRequest, fetchDataSuccess, } from './action';

export function fetchProducts(){
    return dispatch => {
        dispatch(fetchDataRequest());
        axios
            .get('http://127.0.0.1:8000/blog/requests/')
            .then(response => {
                dispatch(fetchDataSuccess(response.data))
            })
    };
}