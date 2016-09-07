(function(global, ng, jq){
  'use strict';
  
  ng.module('ngCarousel')
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
      }
      this.nextItem = function () {
        current_item++;
        current_item = Math.abs(current_item % item_length);
        // console.log(current_item);
        return current_item;
      }

      this.isSelected = function (cls) {
        // console.log(this.contents[current_item].class);
         return this.contents[current_item].class === cls;
      }

      this.isStandbyLeft = function (cls) {
        // console.log(this.contents[current_item].class);
         var left_item = current_item === 0 ? item_length - 1 : current_item - 1 ;
         left_item = Math.abs(left_item % item_length);
         return this.contents[left_item].class === cls;
      }
      this.isStandbyRight = function (cls) {
        // console.log(this.contents[current_item].class);
         var right_item = current_item + 1;
         right_item = Math.abs(right_item % item_length);
         return this.contents[right_item].class === cls;
      }
        
  });

//END IIFE PATTERN
})(this, this.angular, this.jQuery);