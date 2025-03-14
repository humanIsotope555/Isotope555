import {Route, Routes, BrowserRouter, Link, } from 'react-router-dom';
import {useParams, useLocation} from 'react-router-dom';

export const Symbol = (props) => {
    let { id } = useParams();

    return(

            <>
            <Link id="link-symbol" to={{pathname:`/manual/${props.url}`,
                                        state:`${props.id}`}}>
                {props.id==id ?
                <li class="item-elem item-selected"  value="">
                    {props.item}
                </li>
                :
                <li class="item-elem"  value="">
                    {props.item}
                </li>
                }
            </Link>
            </>
    )
}