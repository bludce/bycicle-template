// fixed menu

	var navFixed = $("nav.nofixed"),
        navHeight = $('nav').height();

	if ($(window).scrollTop()) {
		navFixed.addClass("fixed").removeClass("nofixed");
	};

    
	if (navFixed.length) {
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
            
			if (scroll < navHeight + 50) {
				navFixed.addClass("nofixed");
				navFixed.removeClass("fixed hidden");
			};
			if (scroll > navHeight){
				navFixed.addClass("hidden");
			};
			if (scroll > navHeight + 50){
				navFixed.addClass("fixed");
				navFixed.removeClass("nofixed");
			};
            
		});
	};
