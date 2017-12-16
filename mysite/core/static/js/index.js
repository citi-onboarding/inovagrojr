// responsive navbar
function navbarResponsive() {
	var menu = document.getElementById('navbar');
	menu.classList.toggle('responsive');
}

function navbarCollapse() {
	/*const screen = window.innerWidth;*/
	const screen = document.body.clientWidth;
	var menu = document.getElementById('navbar');
	if (screen > 880 && menu.className === "navbar-collapse responsive") {
		menu.className = "navbar-collapse";
	}
}

window.addEventListener('resize', navbarCollapse);

// sticky navbar on scroll
const nav = document.querySelector('#idNavbar');
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

// google map api
/*function initMap() {
    var uluru = {lat: -8,0524, lng: -34,9454};
    var map = new google.maps.Map(document.getElementById('idMap'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}*/