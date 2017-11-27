// responsive navbar
function navbarResponsive() {
	var x = document.getElementById("inicio");
	if (x.className === "navbar") {
	    x.className += " responsive";
	} else {
	    x.className = "navbar";
	}
}

// sticky navbar on scroll
const nav = document.querySelector('#inicio');
const navTop = nav.offsetTop;

function stickyNavigation() {
	console.log('navTop = ' + navTop);
	console.log('scrollY = ' + window.scrollY);
	if (window.scrollY >= navTop) {
		/*document.body.style.paddingTop = nav.offsetHeight + 'px';*/
		document.body.classList.add('fixed-nav');
	} else {
		/*document.body.style.paddingTop = 0;*/
		document.body.classList.remove('fixed-nav');
	}
}

window.addEventListener('scroll', stickyNavigation);