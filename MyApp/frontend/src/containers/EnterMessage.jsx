import $ from 'jquery';

export const EnterMessage = (props) => {

    $(props.class).on('change', function(){
        console.log($(this).val());
    });

    return(
        <>
            <input class={props.class} />
        </>
    )
}