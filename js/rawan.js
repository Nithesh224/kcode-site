if($(window).load(function(){$(".se-pre-con").fadeOut("slow")}),$(window).scroll(function(){$(document).scrollTop()>50?$("nav").removeClass("nav-expanded"):$("nav").addClass("nav-expanded")}),$(document).ready(function(){$(".counter").counterUp({delay:20,time:1500}),$("body").scrollspy({target:".navbar-fixed-top",offset:80}),$("a.scrollto").bind("click",function(e){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top-40},1250,"easeInOutExpo"),e.preventDefault()}),$("#testimonials").owlCarousel({items:1,animateOut:"slideOutDown",animateIn:"flipInX",smartSpeed:450,autoplay:!0,autoplayTimeout:4e3,loop:!0,autoplayHoverPause:!0,nav:true,navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]}),$("#client-logos").owlCarousel({items:5,autoplay:!0,autoplayTimeout:3e3,loop:!0,autoplayHoverPause:!0,dots:!1,margin:60,responsive:{0:{items:2,margin:30},768:{items:5,margin:30},992:{items:5,margin:60}}}),$("#about-us").owlCarousel({items:1,autoplay:!0,autoplayTimeout:3e3,loop:!0,autoplayHoverPause:!0,margin:30,dots:!1,responsiveClass:!0,responsive:{0:{items:1},768:{items:1}}}),$(".section-pricing").parallax(),$(".gallery-work").magnificPopup({type:"image",zoom:{enabled:!0},gallery:{enabled:!0}}),$("#contact-form").validate({rules:{name:{required:!0},email:{required:!0,email:!0},phone:{required:!0,number:!0},subject:{required:!0},message:{required:!0}}}),$("#subscribe-form").validate({rules:{email:{required:!0,email:!0}},errorElement:"div",errorLabelContainer:".error-msg"}),(new WOW).init()}),$("#back-to-top").length){var scrollTrigger=100,backToTop=function(){var e=$(window).scrollTop();e>scrollTrigger?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")};backToTop(),$(window).on("scroll",function(){backToTop()}),$("#back-to-top").on("click",function(e){e.preventDefault(),$("html,body").animate({scrollTop:0},700)})}$('#gallery').owlCarousel({center: true,items:2,loop:true,margin:10,smartSpeed:450,autoplay:!0,autoplayTimeout:4e3,loop:!0,autoplayHoverPause:!0,nav:true,navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"], responsive:{600:{nav:true,items:2} }});