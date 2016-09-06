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

  var home_pin = new ScrollMagic.Scene({
    'triggerElement': `.home`,
    'triggerHook': 0,
    'duration': '80%'
  })
    .setPin('.home', {'pushFollowers': false})
    .addTo(ctrl)
    .on('progress', function (event) {
       var target = event.target.triggerElement();
       // console.log(target);
       target.style.opacity = 1 - event.progress;
    });

  $('.navigation .nav-home').on('click', function () {
    TweenMax.from(this, 1, {css: {rotation: 180, opacity:0, scale:0.5}, ease: Quad.easeInOut});
  })

  var scene_list = '.nav-list01, .nav-list02, .nav-list03, .nav-list04, .nav-list05'.split(', ');

  scene_list.forEach(function (selector, idx) {
    var scroll_scene = new ScrollMagic.Scene({
          'triggerElement': `.page0${idx+1}`,
          'triggerHook': 0.5,
          'duration': $(`.page0${idx+1}`).height()
          // 'reverse': false
      })
      .setClassToggle(selector, 'active')
      .addTo(ctrl);
  });


})(this, this.jQuery);