$(function () {

  $('.slide').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:true,
    fade:true,
  });

  $('.each').hover(
    function() {
      $(this).find('.eachbox').fadeIn();
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
  )
});
