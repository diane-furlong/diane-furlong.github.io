$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
  });

  $(document).ready(function(){
    $(".hi").fadeIn(2000)
    $(".intro").fadeIn(4000)
  });