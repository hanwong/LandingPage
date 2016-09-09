(function(global, ng, jq){
  'use strict';
  
  ng.module('ngUI')
    .controller('homeCtrl', function(){

      this.contents = [
        {
          'class': 'mobile',
          'name': 'mobile app',
          'description': ' The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed since his interview with his landlady.',
          'img': 'http://placehold.it/320x200/800000/fff/?text=mobile'
        },
        {
          'class': 'watch',
          'name': 'watch app',
          'description': ' The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed since his interview with his landlady.',
          'img': 'http://placehold.it/320x200/804000/fff/?text=watch'
        },
        {
          'class': 'tablet',
          'name': 'tablet app',
          'description': ' The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed since his interview with his landlady.',
          'img': 'http://placehold.it/320x200/808000/fff/?text=tablet'
        }
        
      ];

      var $home = $('.home'),
        $prevButton = $home.find('.prev'),
        $nextButton = $home.find('.next');

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
      this.isSelected = function (cls) {
        // console.log(this.contents[current_item].class);
         return this.contents[current_item].class === cls;
      };
        
  })
    .animation('.home-animation', function () {
      return {
        'addClass': function (element, className, done) {
          TweenMax.fromTo(element, 1, { opacity: 0}, { opacity: 1, onComplete: done });
        }
    };
  });

      // var carousel_tl = new TimelineMax();
      // carousel_tl.to( '.home-carousel li', 1, {'opacity': 1, 'ease': Quad.easeInOut});

//END IIFE PATTERN
})(this, this.angular, this.jQuery);