$(window).on("load", function(){



 $('.preloader').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});






$(document).ready(function () {
    
$(".language").click(function(){
    $(".dropdown-conutry").slideToggle();
}) ;
	
	$(".navigation-link.position-relative").click(function(){
    $(".dropdown-conutry").slideToggle();
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
  slidesToScroll: 2,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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
  slidesToScroll: 3,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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
    delay: 10, 
    time: 1000 
  });

    $(".pricing-description").matchHeight();
    $(".why-us-description").matchHeight();

$(".partner-name").matchHeight();


    $(".blog-content").matchHeight();

     $(".footer-menu h5").matchHeight();

    $(".footer-menu-ul").matchHeight();

 
    
});
    
    
