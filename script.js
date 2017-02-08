
// ANIMATED NAV///////////////////////////////

  var $hamburger = $(".hamburger");
  var $mainNavUl = $('.mainnav ul');
  var $window = $(window);
  var mobileBreakpoint = 800;
  $hamburger.on("click", function(e) {
    $mainNavUl.slideToggle();
    $hamburger.toggleClass("is-active");
  });

  $window.on('resize', function() {
      if ($window.width() > mobileBreakpoint ){
        $mainNavUl.removeAttr('style');
        $hamburger.removeClass('is-active');
      }
    });






  // ACTIVE STATE//////////////////////////////////////////////////
  var $sections = $('.section01,.section02,.section03,.section04,.section05');
  var $mainNav = $(".mainnav");
  var navOffset = 50;
  $(window).scroll(function() {
    var currentPosition = $(this).scrollTop();

    $sections.each(function() {
      var top = $(this).offset().top -navOffset;
      var bottom = top + $(this).height();

      if (currentPosition >= top && currentPosition <= bottom) {
        $mainNav.find('a').removeClass('active');
        $sections.removeClass('active');

        $(this).addClass('active');
        $mainNav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });

  });

  // SMOOTH SCROLL
  $(".mainnav a").click(function(e) {
    e.preventDefault();

    var $this = $(this);
    var sectionId = $this.attr('href');

    $('html, body').animate({
      scrollTop: $(sectionId).offset().top
    }, 750);
  });



// sub nav//////////////////////////////////////////////////
  $('.tabgroup > div').hide();
  $('.tabgroup > div:first-of-type').show();
  $('.tabs a').click(function(e){
    e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();

  })

  // HOME CAROUSEL
  $(document).ready(function(){
       $('.hero-slick').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
       });
     });

     // gallery-title CAROUSEL
     $(document).ready(function(){
          $('.gallery-slick').slick({
           dots: false,
           arrows: true,
           autoplay: true,
           autoplaySpeed: 2000,
           infinite: true,
           speed: 500,
           fade: true,
           cssEase: 'linear'
          });
        });


// LOAD MORE---------------
$(function () {
    $('.news-content:gt(1)').hide();
    // $('.news').slice(0, 4).show();
    $('.post').on('click', function (e) {
        e.preventDefault();
        $('.news-content:hidden').slice(0, 1).slideDown();

        $('html,body').animate({
            scrollTop: $(this).offset().top
        },1000);
    });
});
