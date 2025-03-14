$(window).on('load', function (){
  $preloader = $('.area-for-preloader'),
  $loader = $preloader.find('.preloader');
  $loader.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});
