$(window).on("load", function(){



 $('.preloader').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});






$(document).ready(function () {
    
$(".language").click(function(){
    $(".dropdown-language").slideToggle();
}) ;
    

    
   $('.work-slider').slick({
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrows"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrows"><i class="fas fa-angle-left"></i></span>',
         autoplay: true,
  autoplaySpeed: 2000,
        responsive: [
   
    {
      breakpoint: 357,
      settings: {
        dots:false
      }
    }
  
  ]
}); 
    
    
    
    
    
    
    
$('.partenter-slider').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});
    
    
    
        
$('.blog-slider').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});





  
  $('.num-counter').counterUp({
    delay: 10, // the delay time in ms
    time: 1000 // the speed time in ms
  });

    $(".pricing-description").matchHeight();
    $(".why-us-description").matchHeight();

$(".partner").matchHeight();

    $(".blog-content").matchHeight();
    $(".blog-content p").matchHeight();

 
    $(".footer-menu-ul").matchHeight();
        $(".footer-menu h5").matchHeight();

 

    
});
    
    
