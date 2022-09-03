// !для информации значек $ это начит вызов библиотеки jquery

$(document).ready(function () {
	// !заменили ID на наш клас .header-navbar__btn
	$('.header-navbar__btn').click(function(){
		$(this).toggleClass('open');
		$('.header-navbar__list').toggleClass('open');
	});
});