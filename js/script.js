console.log("js loaded")
$(function() {


	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		console.log("entered toTop")
		$('html, body').animate({scrollTop : 0}, 1300);
		return false;
	});


	$('.scrollSegment').click(function(event){
		console.log("entered segment")
		var hash = event.currentTarget.hash
		var short = hash.substring(0, hash.indexOf('-'))
		console.log(short)
		var item = $(short)
		console.log(item)
		$('html, body').animate({scrollTop: item.offset().top}, 1300);
	});



	/*document.querySelector('#main-page').scrollIntoView({ 
 		behavior: 'smooth' 
	});*/
	
});