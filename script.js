

jQuery(document).ready(function(){

   jQuery(window).on("load", function(){
    jQuery("#preloader").fadeOut("slow");
  });

	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});

 

 
});
