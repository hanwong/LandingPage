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
        'triggerHook': 0.5,
        // 'reverse': false
    })
    .setClassToggle('.scroll-nav', 'fade-in')
    .addTo(ctrl);

  var page01_scene = new ScrollMagic.Scene({
        'triggerElement': '.page01',
        'triggerHook': 0.5,
        'duration': $('.page01').height()
        // 'reverse': false
    })
    .setClassToggle('.nav-list01', 'active')
    .addTo(ctrl);

  var page02_scene = new ScrollMagic.Scene({
        'triggerElement': '.page02',
        'triggerHook': 0.5,
        'duration': $('.page02').height()
        // 'reverse': false
    })
    .setClassToggle('.nav-list02', 'active')
    .addTo(ctrl);

  var page03_scene = new ScrollMagic.Scene({
        'triggerElement': '.page03',
        'triggerHook': 0.5,
        'duration': $('.page03').height()
        // 'reverse': false
    })
    .setClassToggle('.nav-list03', 'active')
    .addTo(ctrl);

  var page04_scene = new ScrollMagic.Scene({
        'triggerElement': '.page04',
        'triggerHook': 0.5,
        'duration': $('.page04').height()
        // 'reverse': false
    })
    .setClassToggle('.nav-list04', 'active')
    .addTo(ctrl);

  var page05_scene = new ScrollMagic.Scene({
        'triggerElement': '.page05',
        'triggerHook': 0.5,
        'duration': $('.page05').height()
        // 'reverse': false
    })
    .setClassToggle('.nav-list05', 'active')
    .addTo(ctrl);
    // var id     = $this.attr('href'),
    //     offset = nav_height,
    //     target = $(id).offset().top - offset;


})(this, this.jQuery);