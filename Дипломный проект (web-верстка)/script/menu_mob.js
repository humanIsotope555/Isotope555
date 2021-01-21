let my = {

    window : $(window)

};

$(window).resize(function(){

    let width = my.window.width();

    if(my.window.width() >= 1184)
    {
        $('.menu__list').css('display', 'flex');

    }else{

        $('.menu__list').css('display', 'none');
        
    }

});
 $(document).ready(function(){  
    
    $('.menu-on').click(function(){
        if ($('.menu__list').css('display')=='none'){
            $('.menu__list').slideDown(1000);
        }else if($('.menu__list').css('display')=='block'){
            $('.menu__list').slideUp(1000)
        }
    });

    $('.menu-on').on('mouseover',function(){
        if($('.top').css('width')=='45px'){
        $('.top').animate({width: '35px'}, 500);
        $('.middle').animate({width: '30px'}, 500);
        $('.bottom').animate({width: '35px'}, 500);
        }else{

        }
    });

    $('.menu-on').on('mouseout', function(){
        if($('.top').css('width')=='35px'){
        $('.top').animate({width: '45px'}, 500);
        $('.middle').animate({width: '45px'}, 500);
        $('.bottom').animate({width: '45px'}, 500);
        }
    })

    $('.menu__item').click(function(){
        if ($('.menu__list').css('display')=='block'){
            $('.menu__list').slideUp(1000);
        } else {
            $('.menu__list').css('display')='block'
        }
    });

    $('section').click(function(){
        $('.menu__list').slideUp(1000);
    })
    

    $('.button').click(function(){
        $('.order-area').show();
      
    })

    $('.order-area').click(function(event){
        if(event.target == this){
        $(this).hide();
        
        }
    });

    $('.btn-cross').click(function(event){
        $('.order-area').hide();
    });

});