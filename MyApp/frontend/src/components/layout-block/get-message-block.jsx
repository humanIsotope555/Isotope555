export const GetMessageBlock = (props) => {

    const arr = {
                'bot': ['bot',
                    'Текст', 'message-block bot-block',
                    'message-item bot-item'],
                'user': ['user',
                    'Текст', 'message-block user-block',
                    'message-item user-item']
                }


    console.log(Object.keys(arr).map((item) => arr[item]))
    return(
        <>
            <div class="chat-list">

                <ul class="messages-list">
                {Object.keys(arr).map((item) =>
                    <li class={arr[item][3]}>
                        <div class={arr[item][2]}>
                            <div class="text-block">{arr[item][1]}</div>
                        </div>
                    </li>
                        )}

                </ul>
            </div>
        </>
    )
}