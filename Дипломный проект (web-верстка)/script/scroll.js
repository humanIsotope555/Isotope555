$(document).ready(function(){  
    
    const btnOff = document.querySelector('.menu-on');
    const btOff = document.querySelectorAll('.button');
    

    function disableScroll(){
        
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.style.paddingRight = paddingOffset;

        let pagePosition = window.scrollY;
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
        document.querySelector('.order-area').dataset.position = 0;

        
        
    }

    function enableScroll(){

        document.body.style.paddingRight = 0;

        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto'
        document.body.classList.remove('disable-scroll');
        window.scroll({top: pagePosition, left: 0});
        document.body.removeAttribute('data-position');
    }

    for (i = 0; i < btOff.length; i++){
        btOff[i].addEventListener('click', (e) =>{
            disableScroll();

        });
    }

    $('.order-area').click(function(event){
        if(event.target == this){
        $(this).hide();
        enableScroll();
        }
    })

    $('.btn-cross').click(function(event){
        enableScroll();
    });

});