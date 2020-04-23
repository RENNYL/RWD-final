$(document).ready(function() {
    $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
	$('.ham-icon').click(function(){
		$(this).toggleClass('open');
    });
    $('.product-img i').click(function(){
		$(this).toggleClass('bold');
    });
  
 });