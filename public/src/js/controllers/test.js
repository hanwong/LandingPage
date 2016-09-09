(function(global, ng, jq){
  'use strict';
  
  ng.module('ngUI')
    .controller('testCtrl', function(){

    })
    .animation('.colorful', function () {
      return {
        'addClass': function (element, className, done) {
          console.log('color_addClass: ', className);
          
        },
        'removeClass': function (element, className, done) {
          console.log('color_removeClass: ', className);
        },
        'setClass': function(element, addedClass, removedClass, done) {
          console.log('addedClass: ', addedClass, 'removedClass: ',removedClass);
          // console.log('people_setClass: ', element,  addedClass, removedClass, done);
          TweenMax.fromTo(element, 1, { opacity: 0}, { opacity: 1, onComplete: done });
        }
    };
  });

//END IIFE PATTERN
})(this, this.angular, this.jQuery);