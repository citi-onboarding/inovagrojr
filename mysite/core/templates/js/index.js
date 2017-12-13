// global variables
const screen = document.body.clientWidth;


// responsive navbar
function navbarResponsive() {
	var menu = document.getElementById('navbar');
	menu.classList.toggle('responsive');
}

function navbarCollapse() {
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

// servicos
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function carouselResponsive (){
	if (screen > 984) {
		return "mySlides";
	} else {
		return "mySlides-mobile";
	}
}

function x(classname) {
	var slides = document.getElementsByClassName(classname);
	if (classname === "mySlides") {
		slides[slideIndex-1].style.display = "flex";
		slides[slideIndex-1].style.justifyContent = "space-around";
		slides[slideIndex-1].style.alignItems = "center";
	} else {
		slides[slideIndex-1].style.display = "flex";
		slides[slideIndex-1].style.flexDirection = "column";
		slides[slideIndex-1].style.justifyContent = "space-around";
		slides[slideIndex-1].style.alignItems = "center";
	}
}

function showSlides(n) {
  var i;
	var classname = carouselResponsive();
  console.log(screen);
  console.log(classname);
  var slides = document.getElementsByClassName(classname);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
	/*slides[slideIndex-1].style.display = "flex";
	slides[slideIndex-1].style.justifyContent = "space-around";
	slides[slideIndex-1].style.alignItems = "center";*/
	x(classname);
	dots[slideIndex-1].className += " active";
}

window.addEventListener('resize', showSlides);