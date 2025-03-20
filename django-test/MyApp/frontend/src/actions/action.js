import {FETCH_DATA_REQUEST,
        FETCH_DATA_SUCCESS,
        } from './actionType';

export function fetchDataRequest(){
    return {
        type: FETCH_DATA_REQUEST,
    };
}

export function fetchDataSuccess(item){
    return {
        type: FETCH_DATA_SUCCESS,
        item
    };
}