$(document).ready(function(){
	//Translating hover to a touch on iOS - Method 1
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		$(hand).click(function(){
			$(hand).removeClass('animated wobble');
			$(this).toggleClass('animated wobble');
		});
	}

	//Translating hover to a touch on iOS - Method 2
	var userAgent = navigator.userAgent.toLowerCase();
	var isiPhone = (userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipod') != -1) ? true : false;
	clickEvent = isiPhone ? 'tap' : 'click';

	//Add other code below here
});
