/* global $, alert ,console */ 





$(document).ready(function(){
    
    'use strict';
    
//    بسم الله 
    
    
    
     $(".gear-check").click(function(){
         
         
         
         $(".color-option").toggle(); 
         
         
         
         
     })
    
    
    
    
    
    
    
    
//    change theme color
    
   
    
    
    $(".color-option ul li").eq(0).css("background-color","#1ec207");
    $(".color-option ul li").eq(1).css("background-color","#2fc4b8");
    $(".color-option ul li").eq(2).css("background-color","#d39e3b");
    $(".color-option ul li").eq(3).css("background-color","#FFF");
    
    
    
    
    $(".color-option ul li").click(function(){
        
        
        
      $("link[href*='theme']").attr("href",$(this).attr("data-value"))
        
        
        
        
    })
        
        
        
        
        
    
    
    
    
    
    
    
    
    
    
 //    end change theme color
    
    
    
    
    
    
//    scroll top
    
    
    
    
    $(window).on("scroll",function(){
        
        
        if($(this).scrollTop()>=700)
            {
                
               $(".scroll-top").fadeIn(1000);
                
            }
        else {
            $(".scroll-top").fadeOut(1000);
            
        }
        
        
        
        
    });
    
    
    $(".scroll-top").on("click",function(){
        
        $("body,html").animate({"scrollTop":"0"},5000);
        
        
        
        
        
    })
    
    
    
    
    
    
//    end scroll top
    
    
    
    
    
    
    
    
    
    
    
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    الحمد الله
    
});







//start loading








$(window).on("load",function(){
    
    
// $("body").css("overflow","auto");    //      عشاان متعمليش مشكلة فى الاسكروول 
    
                                   // لكن اناا مش هستخدمهااا لانى مستخدم nice scroll 
    
    
  $(".overlay .sk-folding-cube").delay(50).fadeOut(1000,function(){
      
      
      $(".overlay").slideUp(1000,function(){
          
          $(this).slideDown(500, function(){
              
              
              $(this).slideUp(500,function(){
                  
                  $(this).remove();        //دى هتمسحه من الدوم تررى 
                  
              })
          })
          
          
      });
      
      
  }) ; 
    
    
});









    
    
    
    
    
