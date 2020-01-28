$(function () {


  setTimeout(function() {
    $('.start p').fadeIn(1300);
  },500);

  setTimeout(function() {
    $('.start').fadeOut(1000);
  },3000);

  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:true,
    fade:true,
    arrows:true,
    asNavFor:'.thumb',
  });

  $('.thumb').slick({
    asNavFor:'.slider',
    focusOnSelect:true,
    slidesToShow: 2,
    slidesToScroll:1,
  });



  $('.li-btn').click(
    function() {
      var hre = $(this).find('a').attr('href');
      $("html,body").animate({scrollTop:$(hre).offset().top},700);
    }
  );

  $('.toolbar .fa-bars').click( 

    function() {
      var sc = $(window).scrollTop();

      var h_sc = $('header').height();
      if ($('.hid').is(':visible')) {
      $('.hid').fadeOut(10);
      $('.toolbar').removeClass('actual');

      if (sc > h_sc){
      $('.fa-bars').css('color','#444');
      }else{
        $('.fa-bars').css('color','#cecece');
      }
    } else {
      $('.toolbar').addClass('actual');
      $('.fa-bars').css('color','#cecece');
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
  }

  $(window).scroll(function() {
    var sc = $(this).scrollTop();

    var h_sc = $('header').height();

    if (sc <= h_sc-20){
      $('.fa-bars').css('color','#cecece');
    }
    else {
      $('.fa-bars').css('color','#444');
    }
  })

});
