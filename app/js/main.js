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

/* Открытие меню */
 
var main = function() { //главная функция
    $('.nav-btn').click(function() { /* выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике */
        $('.mob-menu').animate({ //выбираем класс menu и метод animate 
            left: '0px', /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */
        }, 600); //скорость движения меню в мс         
        $('body').animate({ //выбираем тег body и метод animate 
            left: '285px' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 285px */
        }, 600); //скорость движения меню в мс
    });
 
 
/* Закрытие меню */
 
    $('.close').click(function() { //выбираем класс icon-close и метод click
        $('.mob-menu').animate({ //выбираем класс menu и метод animate 
            left: '-310px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */
        }, 600); //скорость движения меню в мс         
    $('body').animate({ //выбираем тег body и метод animate
            left: '0px' //а содержимое страницы снова вернется в положение 0px 
        }, 600); //скорость движения меню в мс
    });
};
 
$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */