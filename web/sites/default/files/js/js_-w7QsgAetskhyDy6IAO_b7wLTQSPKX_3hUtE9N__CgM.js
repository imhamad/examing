alert('welcome to NCM');
$(window).scroll(function(){
 var shah_nawaz = $(window).scrollTop();
 if (shah_nawaz >= 30){
   $('.region-header').addClass('sohail_stylings');
 }
  if (shah_nawaz <= 30){
   $('.region-header').removeClass('sohail_stylings');
 }
});;
