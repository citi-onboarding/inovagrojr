// responsive navbar
function navbarResponsive() {
	var menu = document.getElementById('navbar');
	menu.classList.toggle('responsive');
}

function navbarCollapse() {
	const screen = window.innerWidth;
	var menu = document.getElementById('navbar');
	if (screen > 790 && menu.className === "navbar-collapse responsive") {
		menu.className = "navbar-collapse";
	}
}

window.addEventListener('resize', navbarCollapse);

// sticky navbar on scroll
const nav = document.querySelector('#inicio');
const navTop = nav.offsetTop;

function stickyNavigation() {
	console.log('navTop = ' + navTop);
	console.log('scrollY = ' + window.scrollY);

	if (window.scrollY > 200) {
		nav.className = "navbar navbar-colorful";
	} else {
		nav.className = "navbar navbar-colorful navbar-transparent";
	}
}

window.addEventListener('scroll', stickyNavigation);