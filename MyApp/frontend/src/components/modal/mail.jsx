import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export const MailSend = () => {

    return(

      <div class="order-area">
          <div class="not-area order-area__not-area">
            <div class="notification-text not-area_notification-text">
                <h2>Заявка успешно отправлена, ожидайте.</h2>
            </div>
          </div>
            <form class="form order-area__form" id="form_send" name="myForm" method="POST">


                <div class="header-call form__header-call">
                    <div class="icon-call header__icon-call"></div>
                    <div class="head-text header-call__head-text">
                        <h2 class="relation form__relation">Связатьcя со мной</h2>
                        <h3 class="keep form__keep">Оставьте мне ваш номер телефона
                            и я свяжусь с вами в ближайшее время
                        </h3>
                    </div>
                    <div class="btn-cross header__btn-cross">&nbsp;</div>
                </div>

                <div class="field-set form__field-set">
                    <div class="field-set-1 field-set__field-set-1">
                        <h3 class="first-name field-set__first-name">Имя</h3>
                        <input class="enter-name field-set__enter-name" id="field1" data-validate-field="user" type="text" name = "username">
                        </input>
                    </div>

                    <div class="field-set-2 field-set__field-set-2">
                        <h3 class="mail field-set__mail">Почта</h3>
                        <input class="e-mail field-set__e-mail" id="field2" data-validate-field="email" type="email" name = "email" >
                        </input>
                    </div>

                    <div class="field-set-3 field-set__field-set-3">
                        <h3 class="number-call field-set__number-call">Номер телефона</h3>
                        <input class="num field-set__num" id="field3" data-validate-field="tell" name="tel" type="tel">
                        </input>
                    </div>

                    <button class="button-send field-set__button-send" type="submit" >
                        Оставить заявку
                    </button>
                </div>
            </form>
      </div>

    )
}