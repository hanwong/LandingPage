(function(global, $){
  'use strict';
  
  var $html = $('html');
  // js 설정 가는 환경 체크 
  $('html').removeClass('no-js').addClass('js');
  $(window).on('load resize', {'i': 0}, function(event) {
    changeDeviceMode($html, event.data.i++ === 0 ? true : false);
  });
  
//END IIFE PATTERN
})(this, this.jQuery);
  
