/*function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

function ibg() {
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

*/
var burger_menu = document.getElementById('burger-menu');
var phoneClose = document.getElementById('phoneClose');
var phoneOpen = document.getElementById('phoneOpen');
function openBurgerMenu (){
	if(burger_menu.style = "display:none;"){
		burger_menu.style = "display:inline-flex;";
		phoneOpen.style = "display: none;";
		phoneClose.style = "display:block;";
	}
}

function closeBurgerMenu (){
		phoneOpen.style = "display: block;";
		phoneClose.style = "display: none";
		burger_menu.style = "display:none;";
}