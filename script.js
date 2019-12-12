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

  $('.hid .li-btn').click( 
    function () {
      if ($('.hid').is(':visible')) {
        $('.hid').fadeOut(200);
        $('.toolbar').removeClass('actual',3000);
      } else {
        event.stopPropagation();
      }
    });
  

  if (window.matchMedia( '(max-width:700px)' ).matches) {
    $(function() {
      $('.acc').click(function () {
        if($(this).parents('.each').find('.eachbox').hasClass('open'))
        {
          $(this).parents('.each').find('.eachbox').fadeOut();
          $(this).parents('.each').find('.eachbox').removeClass('open');
          $(this).html('詳細を表示<a><span class="fas fa-arrow-down"></span></a>');
        }
        else{
          $(this).parents('.each').find('.eachbox').fadeIn();
          $(this).parents('.each').find('.eachbox').addClass('open')
          $(this).html('詳細を非表示<a><span class="fas fa-arrow-up"></span></a>');
        }
      });

    });
  }
  else{
    $('.each').hover(
      function() {
        $(this).find('.eachbox').fadeIn();
        $(this).find('.eachbox').addClass('open');
        $(this).find('.acc').html('詳細を非表示<a><span class="fas fa-arrow-up"></span></a>');
        $(this).find('.acc').addClass("dummy");
      },
      function() {
        $(this).find('.eachbox').fadeOut();
        $(this).find('.eachbox').removeClass('open');
        $(this).find('.acc').html('詳細を表示<a><span class="fas fa-arrow-down"></span></a>');
        $(this).find('.acc').removeClass("dummy");
      }
    );
    console.log(false);
  }


});
