import styled from 'styled-components';
import {Link, } from 'react-router-dom';

const StyleLink = styled.button`
        background-color: #f9f9f9;
        color: #ff4e2e;
        border: 1px solid #ff4e2e;
        width: 207px;
        padding: 11px 20px;
        padding-top: 14px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 1s, color 1s;
        &:hover {
            background-color: #ff4e2e;
            color: white;
             }
    `



export const ButtonSend = (props) => {
    return(
        <>

            <StyleLink class="{props.class}"
                to={props.href}
                >
                {props.name}
            </StyleLink>
        </>
    )

}


