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


    $("#form_send").on('submit', function(e){
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "",
            data: {'form_data': $(this).serialize(), 'form_html': $(this).html()},
            headers: {'X-CSRFToken': getCookie('csrftoken')},
            success: function(data){
                console.log(data);

            },
            error: function(error){
                console.log(error);
              }
        });
    });

    $("#form_reg").on('submit', function(e){
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "",
            data: {'form_data': $(this).serialize(), 'form_html': $(this).html()},
            headers: {'X-CSRFToken': getCookie('csrftoken')},
            success: function(data){
                console.log(data);
                alert(data.context);
            },
            error: function(error){
                console.log(error);
            }
        });

    });

});