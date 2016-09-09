(function(global, ng, jq){
  'use strict';
  
  ng.module('ngUI')
    .controller('peopleCtrl', function(){

      this.contents = [
        {
          'class': 'brian01',
          'name': 'Brian Williamson',
          'role': 'PM . Jetlinks',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself.',
          'img': 'http://placehold.it/200x200/FF6666/fff/?text=brian01'
        },
        {
          'class': 'brian02',
          'name': 'Brian Williamson',
          'role': 'PM . Jetlinks',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself.',
          'img': 'http://placehold.it/200x200/FFCC66/fff/?text=brian02'
        },
        {
          'class': 'brian03',
          'name': 'Brian Williamson',
          'role': 'PM . Jetlinks',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself.',
          'img': 'http://placehold.it/200x200/FFFF66/fff/?text=brian03'
        },
        {
          'class': 'brian04',
          'name': 'Brian Williamson',
          'role': 'PM . Jetlinks',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself.',
          'img': 'http://placehold.it/200x200/CCFF66/fff/?text=brian04'
        },
        {
          'class': 'brian05',
          'name': 'Brian Williamson',
          'role': 'PM . Jetlinks',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself.',
          'img': 'http://placehold.it/200x200/66FF66/fff/?text=brian05'
        }
        
      ];

      var $people = $('.page01'),
        $prevButton = $people.find('.prev'),
        $nextButton = $people.find('.next');

      var current_item = 0,
        item_length = this.contents.length;

      this.prevItem = function () {
        current_item === 0 ? current_item = item_length - 1 : current_item-- ;
        current_item = Math.abs(current_item % item_length);
        // console.log(current_item);
        return current_item;
      };
      this.nextItem = function () {
        current_item++;
        current_item = Math.abs(current_item % item_length);
        // console.log(current_item);
        return current_item;
      };

      this.currentClass = function (cls) {
         var className = '';
         
         var left_item = current_item === 0 ? item_length - 1 : current_item - 1 ;
         left_item = Math.abs(left_item % item_length);
         
         var right_item = current_item + 1;
         right_item = Math.abs(right_item % item_length);
         
         if ( this.contents[current_item].class === cls ) {
            className = 'current';
         } else if ( this.contents[left_item].class === cls  ) {
            className = 'standby-left';
         } else if ( this.contents[right_item].class === cls  ) {
            className = 'standby-right';
         }
         return className;
      };
        
  })
    .animation('.people-animation', function () {
      return {
        'addClass': function (element, className, done) {
          // console.log('people_addClass: ', className);
          // console.log('people_addClass: ', arguments);

        },
        'removeClass': function (element, className, done) {
          // console.log('people_removeClass: ', className);

        },
        'setClass': function(element, addedClass, removedClass, done) {
          // console.log('people_addedClass: ', addedClass, 'people_removedClass: ',removedClass);
          
          // next버튼 클릭시
          if ( addedClass === 'standby-left' && removedClass === 'current' ) {

            if (!element.next().next()[0] && element.next()[0]) {
              TweenMax.fromTo(element, 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: 300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done }); 
              TweenMax.fromTo(element.next().find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
            else if (!element.next().next()[0] && !element.next()[0]) {
              TweenMax.fromTo(element, 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: 300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(1), 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done }); 
              TweenMax.fromTo(element.parent().children().eq(0).find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
            else {
              TweenMax.fromTo(element, 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: 300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.next().next(), 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next().find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
            
          }

          // prev버튼 클릭시
          if ( addedClass === 'current' && removedClass === 'standby-left' ) {
            // console.log('000', element.prev()[0]); // 이동전 current class, 마지막 체크
            // console.log('111', element[0]); // 이동전 current class
            // console.log('222', element.next()[0]); // 이동전 current class, 맨처음에 체크 할것
            
            if (!element.next()[0]) {
              TweenMax.fromTo(element.prev(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
            }
            else if (!element.prev()[0]) {
              TweenMax.fromTo(element.parent().children().last(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
            }
            else {
              TweenMax.fromTo(element.prev(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              // TimelineMax.fromTo(element.next().find('.item-text'), 0.5, { y: 50 }, { y: 0, onComplete: done });
            }
            TweenMax.fromTo(element.find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });

          }
          // if ( addedClass === 'standby-right' && removedClass === 'current' ) {
          //   console.log('이동전 current class', element); // 이동전 current class
          //   people_tl.fromTo(element, 1, { right: -50 }, { right: 50, onComplete: done });
          // }
        }
    };
  });

//END IIFE PATTERN
})(this, this.angular, this.jQuery);