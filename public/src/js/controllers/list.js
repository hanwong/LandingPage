(function(global, ng, jq){
  'use strict';

  ng.module('ngUI')
    .controller('listCtrl', function(){
      this.contents = [
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        }        
      ];

      this.selected_index = 'all';

      this.sortItems = function (cls) {
         this.selected_index = cls;
      };
      this.currentCategory = function (cls) {
        if ( this.selected_index === 'all') {
          return true;
        } else{
          return this.selected_index === cls;
        }
      };
    });
    // .animation('.list-animation', function () {
    //    return {
    //     'addClass': function (element, className, done) {
    //        TweenMax.fromTo(element, 1, { opacity: 0, scale: 0.5}, { opacity: 1, scale: 1, onComplete: done }); 
    //     },
    //     'removeClass': function (element, className, done) {
    //       // console.log(className);
    //        TweenMax.fromTo(element, 1, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5, onComplete: done }); 
    //     }
    //    }
    // });


//END IIFE PATTERN
})(this, this.angular, this.jQuery);