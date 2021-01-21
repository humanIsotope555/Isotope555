$(document).ready(function(){

    $("#form").submit(function(e){ //Устанавливаем событие отправки для формы
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $("#form").serialize(),
            success: function(data){
                alert(data);
            }
        })
    });
  
});