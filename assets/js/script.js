(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }

  //top
  var xiahua=$(".xiahua");
  var top=$(".top")
  $(window).resize(function(){
     var lw=$(window).width();
     if(lw<1200){
      top.slideUp(500);

    }else{
      top.slideDown(500);
    }
   
     })
   $(window).resize();
   
  xiahua.click(function(){    
    top.slideUp(500); 
  })
  //top

/* services*/
    $(".services").hover(function(){
        $(this).find(".service-wrap").css({transform:"rotateY(180deg)",zIndex:1});
        $(this).find(".services_m").css({transform:"rotateY(0deg)",zIndex:40});
    },function(){
        $(this).find(".service-wrap").css({transform:"rotateY(0deg)",zIndex:40});
        $(this).find(".services_m").css({transform:"rotateY(180deg)",zIndex:1});
    })
/* services*/
  //
  //
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
 

var $ = jQuery;
(function(){
  function setHomeBannerHeight() {
    var windowHeight = jQuery(window).height(); 
    jQuery('#header').height(windowHeight);
  }
  function centerHomeBannerText() {
      var bannerText = jQuery('#header > .center');
      var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 40;   
      bannerText.css('padding-top', bannerTextTop+'px');    
      bannerText.show();
  }

  function setHeaderBackground() {    
    var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top 
    
    if (scrollTop > 300 || jQuery(window).width() < 700) { 
      jQuery('#header .top').addClass('solid');
    } else {
      jQuery('#header .top').removeClass('solid');    
    }
  }



  jQuery.noConflict();
  setHomeBannerHeight();
  centerHomeBannerText();


  jQuery(window).smartresize(function(){
    setHomeBannerHeight();
    centerHomeBannerText();
  });
  
})();

smoothScroll.init();


var $ = jQuery;

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

$(document).ready(function(){
    $('#scrollToContent').each(function() {
        animationHover(this, 'pulse');
    });
});


var menu = $('#navigation');
var origOffsetY = menu.offset().top;

function scroll() {
   if ($(window).scrollTop() >= origOffsetY) {
       $('#navigation').addClass('nav-wrap');
       $('#services').addClass('exp');
       //$('.content').addClass('menu-padding');
   } else {
       $('#navigation').removeClass('nav-wrap');
       $('#services').removeClass('exp');
       //$('.content').removeClass('menu-padding');
   }



}

 document.onscroll = scroll;


  ///////////////////////////////
  // Testimonial Slide
  ///////////////////////////////

 $(document).ready(function() {
 
  $("#testimonial-container").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 700,
      paginationSpeed : 400,
      singleItem:true,
  });
 
});


  ///////////////////////////////
  // google map
  ///////////////////////////////

function initialize()
{
var mapProp = {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  disableDefaultUI: true,
  scrollwheel: false
  };
var map=new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);
}



