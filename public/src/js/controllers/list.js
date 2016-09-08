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
          'name': 'This is name.',
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


//END IIFE PATTERN
})(this, this.angular, this.jQuery);