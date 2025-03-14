import {Link, } from 'react-router-dom';

export const ButtonMainLink = (props) => {

    return(
        <>
            <Link to={props.link}>
                <button class={props.class} link={props.link}>
                    {props.name}
                </button>
            </Link>
        </>
    )

}