(function(global, $){
  'use strict';

  var $gnb_home = $('.gnb-home'),
  $gnb_nav_list = $('.gnb-nav-list'),
  $side_nav = $('.side-nav');

  // gnb navigation 링크 이동시 active 클래스 추가
  var home_link = $gnb_home.find('a');
  home_link.on('click', function () {
    gotoPages.call(this, event);
    viewUpdate.call(this, 'home');
  });
  
  $gnb_nav_list.find('a').on('click', function () {
    gotoPages.call(this, event);
    var $this = $.$(this);
    $this.parent().radioClass('active');
  });

 // 클릭시 주소창에 링크 주소 추가 
  var gnb_nav_links = $gnb_nav_list.find('a');
  var link,
    i = gnb_nav_links.length - 1;
  
  for ( i ; gnb_nav_links[i] ; i-- ) {
    link = gnb_nav_links[i];
    link.onclick = (function (index) {
       return viewUpdate.bind(link, index);
    })(i);

  }


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

  var side_nav_links = $side_nav.find('a');
  var side_link,
    k = side_nav_links.length - 1;

  for ( k ; side_nav_links[k] ; k-- ) {
    side_link = side_nav_links[k];
    side_link.onclick = (function (index) {
       return viewUpdate.bind(side_link, index);
    })(k);
  }
  var tm = new TweenMax.fromTo('.side-nav', 0.3, { 'opacity': 0 }, { 'opacity': 1 });
  // side navigation 영역 ScrollMagic 추가
  var scroll_scene = new ScrollMagic.Scene({
        'triggerElement': '.page01',
        'triggerHook': 0.5,
        // 'duration': $(document).height()
        // 'reverse': false
    })
    .setClassToggle('.side-nav', 'fade-in')
    .addTo(ctrl)
    .setTween(tm);

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