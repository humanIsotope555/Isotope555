let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

function enableScroll(){

  document.body.style.paddingRight = 0;

  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto'
  document.body.classList.remove('disable-scroll');
  window.scroll({top: pagePosition, left: 0});
  document.body.removeAttribute('data-position');
}

let validateForms  = function(selector, rules, successModal, yaGoal){
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form){
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
                if (xhr.readyState === 4){
                    if(xhr.status === 200){
                    	$('.not-area').slideDown(500);
                      	$('.not-area').delay(3000).slideUp(500);
                      	
                      	$('.order-area').delay(3000).fadeOut(1000);
                        $('.js-validate-error-label').hide();
                        $('.e-mail').css('border', '1px solid black');
                        $('.num').css('border', '1px solid black');
                        $('.enter-name').css('border', '1px solid black');
                        document.getElementById('field1').value=" ";
                        document.getElementById('field2').value=" ";
                        document.getElementById('field3').value=" ";
                      
                      	setTimeout(enableScroll, 5000);
                      
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
            form.reset();
        }
    });
}

validateForms('.form', {
    user: {required: true},
    email: {required: true, email: true}, 
    tell: {required: true}
}, '.thanks-popup', 'send goal');