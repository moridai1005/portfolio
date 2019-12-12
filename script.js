$(function () {

  setTimeout(function() {
    $('.start p').fadeIn(1300);
  },500);

  setTimeout(function() {
    $('.start').fadeOut(1000);
  },3000);

  $('.slide').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:true,
    fade:true,
  });

  $('.each').hover(
    function() {
      $(this).find('.eachbox').fadeIn();
      $(this).find('.acc').html('詳細を非表示<a><span class="fas fa-arrow-up"></span></a>');
      $(this).find('.acc').addClass("dummy");
    },
    function() {
      $(this).find('.eachbox').fadeOut();
    }
  );

  $('.li-btn').click(
    function() {
      var hre = $(this).find('a').attr('href');
      $("html,body").animate({scrollTop:$(hre).offset().top},700);
    }
  );

  $('.toolbar .fa-bars').click( 
    function() {
      if ($('.hid').is(':visible')) {
      $('.hid').fadeOut(10);
      $('.toolbar').removeClass('actual');
    } else {
      $('.toolbar').addClass('actual');
      $('.hid').fadeIn();
    }}
  )

  $('.main').on('click', function () {
    if ($('.hid').is(':visible')) {
      $('.hid').fadeOut(200);
      $('.toolbar').removeClass('actual',3000);
    } else {
      event.stopPropagation();
    }
  });


});
