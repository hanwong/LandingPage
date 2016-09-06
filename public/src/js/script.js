(function(global, $){
  'use strict';

  var $html = $('html'),
  $nav = $('.navigation'),
  $scroll_nav = $('.scroll-nav');
  
  // js 설정 가는 환경 체크 
  $('html').removeClass('no-js').addClass('js');
  $(window).on('load resize', {'i': 0}, function(event) {
    changeDeviceMode($html, event.data.i++ === 0 ? true : false);
  });

  // page scroll
  $nav.find('a').on('click', function () {
    // console.log(this);
    gotoPages.call(this, event);
  });

  // scroll navigation
  $scroll_nav.find('a').on('click', function () {
    gotoPages.call(this, event);
    var $this = $.$(this);
    $this.parent().radioClass('active');
  });

  // var controller = new ScrollMagic.Controller();

  // var scene1 = new ScrollMagic.Scene({
  //       duration: 100,    // the scene should last for a scroll distance of 100px
  //       offset: 50        // start this scene after scrolling for 50px
  //   })
  //   .setPin("#page01") // pins the element for the the scene's duration
  //   .addTo(controller); 
    // var id     = $this.attr('href'),
    //     offset = nav_height,
    //     target = $(id).offset().top - offset;


})(this, this.jQuery);