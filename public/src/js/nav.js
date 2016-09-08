(function(global, $){
  'use strict';

  var $gnb_home = $('.gnb-home'),
  $gnb_nav_list = $('.gnb-nav-list'),
  $side_nav = $('.side-nav');

  // gnb navigation 링크 이동시 active 클래스 추가
  $gnb_home.find('a').on('click', function () {
    gotoPages.call(this, event);
  });

  $gnb_nav_list.find('a').on('click', function () {
    gotoPages.call(this, event);
    var $this = $.$(this);
    $this.parent().radioClass('active');
  });

  // gnb navigation 영역 ScrollMagic 추가
  var ctrl = new ScrollMagic.Controller({
    'addIndicators': false
  });
  var gnb_scene = '.gnb-page01, .gnb-page02, .gnb-page03, .gnb-page04, .gnb-page05'.split(', ');
  gnb_scene.forEach(function (selector, idx) {
    var scroll_scene = new ScrollMagic.Scene({
          'triggerElement': `.page0${idx+1}`,
          'triggerHook': 0.5,
          'duration': $(`.page0${idx+1}`).height()
          // 'reverse': false
      })
      .setClassToggle(selector, 'active')
      .addTo(ctrl);
  });

  // side navigation 링크 이동시 active 클래스 추가
  $side_nav.find('a').on('click', function () {
    gotoPages.call(this, event);
    var $this = $.$(this);
    $this.parent().radioClass('active');
  });

  var products_tl = new TimelineMax();
    products_tl
    .fromTo('.side-nav', 0.3, { 'opacity': 0 }, { 'opacity': 1 });
  // side navigation 영역 ScrollMagic 추가
  var scroll_scene = new ScrollMagic.Scene({
        'triggerElement': '.page01',
        'triggerHook': 0.5,
        // 'reverse': false
    })
    .setClassToggle('.side-nav', 'fade-in')
    .addTo(ctrl)
    .setTween(products_tl);

  var side_scene = '.side-page01, .side-page02, .side-page03, .side-page04, .side-page05'.split(', ');
  side_scene.forEach(function (selector, idx) {
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