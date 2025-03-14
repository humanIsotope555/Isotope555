import {SendMessage, } from '../../containers/SendMessage'
import {ButtonSend, } from '../button/button_send'
import {EnterMessage, } from '../../containers/EnterMessage'

export const SendMessageBlock = () => {
    return (
        <>
            <div class="send-block">
                <form>
                    <div class="enter-block">
                        <EnterMessage class="enter-message" />
                        <SendMessage
                            childComponent={<ButtonSend class="button-send" name="Отправить" />}
                            />
                    </div>
                </form>
            </div>
        </>
    )
}