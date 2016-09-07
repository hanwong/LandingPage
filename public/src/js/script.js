(function(global, $){
  'use strict';

  var $html = $('html'),
  $nav_home = $('.nav-home'),
  $nav_list = $('.nav-list'),
  $scroll_nav = $('.scroll-nav');
  
  // js 설정 가는 환경 체크 
  $('html').removeClass('no-js').addClass('js');
  $(window).on('load resize', {'i': 0}, function(event) {
    changeDeviceMode($html, event.data.i++ === 0 ? true : false);
  });

  // page navigation

  $nav_home.find('a').on('click', function () {
    gotoPages.call(this, event);
  });

  $nav_list.find('a').on('click', function () {
    gotoPages.call(this, event);
    var $this = $.$(this);
    $this.parent().radioClass('active');
  });

  // side scroll navigation
  $scroll_nav.find('a').on('click', function () {
    gotoPages.call(this, event);
    var $this = $.$(this);
    $this.parent().radioClass('active');
  });

  var ctrl = new ScrollMagic.Controller({
    'addIndicators': true
  });

  var scroll_scene = new ScrollMagic.Scene({
        'triggerElement': '.page01',
        'triggerHook': 0.3,
        // 'reverse': false
    })
    .setClassToggle('.scroll-nav', 'fade-in')
    .addTo(ctrl);

  var page_list_scene = '.nav-page01, .nav-page02, .nav-page03, .nav-page04, .nav-page05'.split(', ');
  page_list_scene.forEach(function (selector, idx) {
    var scroll_scene = new ScrollMagic.Scene({
          'triggerElement': `.page0${idx+1}`,
          'triggerHook': 0.5,
          'duration': $(`.page0${idx+1}`).height()
          // 'reverse': false
      })
      .setClassToggle(selector, 'active')
      .addTo(ctrl);
  });

  var nav_list_scene = '.nav-list01, .nav-list02, .nav-list03, .nav-list04, .nav-list05'.split(', ');
  nav_list_scene.forEach(function (selector, idx) {
    var scroll_scene = new ScrollMagic.Scene({
          'triggerElement': `.page0${idx+1}`,
          'triggerHook': 0.5,
          'duration': $(`.page0${idx+1}`).height()
          // 'reverse': false
      })
      .setClassToggle(selector, 'active')
      .addTo(ctrl);
  });

  // var home_pin = new ScrollMagic.Scene({
  //   'triggerElement': `.home`,
  //   'triggerHook': 0,
  //   'duration': '30%'
  // })
  //   .setPin('.home', {'pushFollowers': false})
  //   .addTo(ctrl)
  //   .on('end', function (event) {
  //       // TweenMax.to( 'main .home', 1, {'x': -1000, 'autoAlpha': 0, 'ease': Power0.easeNone});
  //   });

  // $('.navigation .nav-home').on('click', function () {
  //   TweenMax.from(this, 1, {css: {rotation: 180, opacity:0, scale:0.5}, ease: Quad.easeInOut});
  // })


})(this, this.jQuery);