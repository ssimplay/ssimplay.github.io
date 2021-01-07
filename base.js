
$(function(){

   $(".m01 table tbody tr:eq(1) td:eq(5)").click(function(){
       $(".modal").fadeIn();
   });


   

   $(".day button").click(function(){
       $(".modal").fadeOut();
   });

   

})