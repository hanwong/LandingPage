(function(global, $){
  'use strict';

/**
* changeDeviceMode
* 윈도우 사이즈 변경에 따라 html 요소에 클래스 추가
* ---------------------------------------------
* @작성자    hanwong
* @버전     0.0.1
* @param  {this} screen, first_exe
* @return {this}
*/
  var breakpoints = {
      'xs': [767],
      'md': [768, 991],
      'lg': [992, 1199],
      'wide': []
  };
  var breakpoints_keys = $.keys(breakpoints);

  function changeDeviceMode(screen, first_exe) {
    var screen_width = screen.width();
    screen.removeClass(function(index, current_class) {
      return breakpoints_keys.join(' ');
    });

    if ( screen_width < breakpoints[breakpoints_keys[0]][0]+1 ) {
      screen.addClass(breakpoints_keys[0]);
    } else if ( screen_width >= breakpoints[breakpoints_keys[1]][0] && screen_width < breakpoints[breakpoints_keys[1]][1]+1 ) {
      screen.addClass(breakpoints_keys[1]);
    } else if ( screen_width >= breakpoints[breakpoints_keys[2]][0] && screen_width < breakpoints[breakpoints_keys[2]][1]+1 ) {
      screen.addClass(breakpoints_keys[2]);
    } else {
      screen.addClass('wide');
    }
  }

/**
 * gotoPages
 * 랜딩 페이지 링크 이동시 스크롤 애니매이션 효과 
 * ---------------------------------------------
 * @작성자    hawnong
 * @버전     0.0.1  
 * @param  {this} event
 * @return {this}
 */
  var $nav = $('.gnb-nav'), 
  nav_height = $nav.height();

  function gotoPages(event) {
    // console.log(arguments);
    event.preventDefault();
    // console.log( '객체 생성 전:', $.data(this, '$this') );
    var id     = $.$(this).attr('href'),
        offset = nav_height,
        target = $(id).offset().top - offset;
    // console.log( '객체 생성 후:', $.data(this, '$this') );
    $('body').animate({
      scrollTop: target
    }, 400);
  }

/**
 * viewUpdate
 * 페이지 주소 표시
 * ---------------------------------------------
 * @작성자    hanwong
 * @버전     0.0.1
 * @param  {this} index
 * @return {this}
 */
  var xhr = new XMLHttpRequest;
  var views = 'page01 page02 page03 page04 page05'.split(' ');

  function viewUpdate (index) {
    var page;
    if ( typeof(index) === 'number' ) {
      // console.log(index);
      page = '#' + views[index];
      xhr.open('GET', page);
      xhr.send();
    }
    else {
      // console.log(index);
      page = '#';
      xhr.open('GET', page);
      xhr.send(); 
    }
    // 페이지의 주소(해쉬) 값을 변경
    global.location.hash = page;

    // 웹 브라우저가 수행하는 브라우저의 기본 동작 차단
    // return false;
  }

  global.changeDeviceMode = changeDeviceMode;
  global.gotoPages = gotoPages;
  global.viewUpdate = viewUpdate;
  
})(this, this.jQuery);