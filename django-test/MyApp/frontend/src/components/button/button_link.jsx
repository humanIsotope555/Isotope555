import {Link, } from 'react-router-dom';

export const LinkPage = (props) => {

    const arr_link = ['RayDev']

    if (arr_link.includes(props.name) ){
        return(
            <>
                <a class={props.class} href={props.href}>
                    <h1>RayDev</h1>
                </a>
            </>
        )
    }else{
        return(
            <>
                <Link class={props.class} to={props.link}>
                    {props.name}
                </Link>
            </>
        )
    }
}