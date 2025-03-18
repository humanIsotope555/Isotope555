import {Link, } from 'react-router-dom';

export const ButtonSend = (props) => {
    return(
        <>

            <Link class={props.class} to={props.href}>
                {props.name}
            </Link>
        </>
    )

}


