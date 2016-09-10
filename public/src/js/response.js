(function(global, $){
  'use strict';
  
  var $html = $('html');
  // js 설정 가는 환경 체크 
  $('html').removeClass('no-js').addClass('js');
  $(window).on('load resize', {'i': 0}, function(event) {
    changeDeviceMode($html, event.data.i++ === 0 ? true : false);
  });

// // isotope
//   var $grid = $('.grid').isotope({
//     itemSelector: '.element-item',
//     layoutMode: 'fitRows'
//   });

//   $('.filter-button-group').on( 'click', 'button', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
//   });
  
//   $('.button-group').each( function( i, buttonGroup ) {
//     var $buttonGroup = $( buttonGroup );
//     $buttonGroup.on( 'click', 'button', function() {
//       $buttonGroup.find('.is-checked').removeClass('is-checked');
//       $( this ).addClass('is-checked');
//     });
//   });


//END IIFE PATTERN
})(this, this.jQuery);
  
