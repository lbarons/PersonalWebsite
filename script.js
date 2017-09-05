console.log("js loaded")
$(function() {


	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		console.log("entered func")
		$('html, body').animate({scrollTop : 0}, 100);
		return false;
	});

	console.log("entered")
	/*
	document.querySelector('#main-page').scrollIntoView({ 
 		behavior: 'smooth' 
	});*/
	
});