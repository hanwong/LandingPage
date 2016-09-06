(function($){
  'use strict';

/**
 * keys
 * ---------------------------------------------
 * @작성자    hanwong
 * @버전     0.0.1
 * @param  {this} jQuery 객체
 * @return {this}
 */
  if (!$.keys) {
    $.keys = function(obj) {
      if ( $.type(obj) !== 'object' ) { throw new Error('객체를 전달해야 합니다.') }
      var keys = [];
      for ( var prop in obj ) {
        if ( obj.hasOwnProperty(prop) ) {
          keys.push(prop);
        }
      }
      return keys;
    };
  }

/**
 * memory
 * ---------------------------------------------
 * @작성자    hanwong
 * @버전     0.0.1
 * @param  {this} $this
 * @return {this}
 */
 if (!$.memory) {
    $.memory = function(dom_el) {
      if ( dom_el.nodeType !== 1 ) {
        throw new Error('DOM 객체를 전달해야 합니다.');
      }
      // 전달 받은 dom_el는 $this라고 하는 데이터가 메모리 되어 있는가?
      if ( !$.data(dom_el, '$this') ) {
        $.data(dom_el, '$this', $(dom_el));
      }
      return $.data(dom_el, '$this');
    };
    // 별칭
    $.$ = $.memory;
  }

/**
 * radioClass
 * ---------------------------------------------
 * @작성자    hanwong
 * @버전     0.0.1
 * @param  {this} class_name
 * @return {this} this
 */
  if ( !$.fn.radioClass ) {
    $.fn.radioClass = function (class_name) {
        if ( $.type(class_name) !== 'string' ) {
          throw new Error('전달 인자는 문자열이어야 합니다.');
        }
        // console.log('radio this: ', this);
        var  $activated = this.siblings('.'+class_name);
        if ($activated.length === 0) {
          console.info('전달한 ${class_name}에 해당하는 형제가 없습니다 확인해보세요.');
        }
        $activated.removeClass(class_name);
        this.addClass(class_name);

        // 메소드 체이닝
        return this;
    };
  }

})(this.jQuery);
