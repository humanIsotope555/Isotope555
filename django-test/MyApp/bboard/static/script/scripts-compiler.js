$(document).ready(function(){

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                    }
                }
            }
            return cookieValue;
        }

        /* [START] Ajax send regex [START] */


        $(document).on('submit', "#form-send-regex", function(e){
            e.preventDefault();

            $.ajax({
                type: "POST",
                url: "",
                data: {'form_data': $(this).serialize(), 'form_html': $(this).html()},
                headers: {'X-CSRFToken': getCookie('csrftoken')},
                success: function(data){

                    $('.result-text').text(data['answer']);
                    $('.result__alert').text(data['res']);

                },
                error: function(error){
                    console.log(error);

                }
            });

        });
        /* [END] Ajax send regex [END] */

        /* [START] Script block transfer [START] */
            // Сделайте элемент DIV перетаскиваемым:
            dragElement(document.getElementById("transfer-block"));

            function dragElement(elmnt) {
              var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
              if (document.getElementById(elmnt.id + "header")) {
                // если присутствует, заголовок - это место, откуда вы перемещаете DIV:
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
              } else {
                // в противном случае переместите DIV из любого места внутри DIV:
                elmnt.onmousedown = dragMouseDown;
              }

              function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // получить положение курсора мыши при запуске:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // вызов функции при каждом перемещении курсора:
                document.onmousemove = elementDrag;
              }

              function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // вычислить новую позицию курсора:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // установите новое положение элемента:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
              }

              function closeDragElement() {
                // остановка перемещения при отпускании кнопки мыши:
                document.onmouseup = null;
                document.onmousemove = null;
              }
            }
        /* [END] Script block transfer [END] */

});
