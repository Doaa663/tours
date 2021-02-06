/*global $, alert, console*/

$( function () {
    'use strict';
    // trigger nice scrollplugen
    $('html').niceScroll({
        cursorcolor:'#f7600e',
        cursorwidth: 10 ,
        cursorborderradius :  0 ,
        cursorborder : '1px solid #f7600e'
    });
   
    //chang header height
    $('.header').height($(window).height());
  
    


//SCROLL TO FEATURES 
  $('.header .arrow i').click(function () {
      
           $('html, body').animate({
            scrollTop: $('.features').offset().top  
           },1000);   
     });
    
    $('.hire').click(function () {
        
        $('html, body').animate({
    scrollTop: $('.our-team').offset().top  
   },1000);   
  });
    
        
   
    
    
    //show hidden items from work 
    $('.show-more').click(function(){
       $('.our-work .hidden').fadeIn(1000); 
        $('.show-more').fadeOut();
    });
    
  
    //check testimonials
      var leftarrow = $('.testim .fa-chevron-left'),
          rightarrow =$('.testim .fa-chevron-right');
    function checkClients(){
      
     $('.client:first').hasClass('active') ?  leftarrow.fadeOut()   : leftarrow.fadeIn();
        $('.client:last').hasClass('active') ?  rightarrow.fadeOut() : rightarrow.fadeIn();
        
    }
    
    checkClients();
    $('.testim i').click(function () {
        if($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                  checkClients();
            });
            
        }else {
            
             $('.testim .active').fadeOut(100 , function (){
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                  checkClients();
            }); 
            
        }
        
    });
    });






