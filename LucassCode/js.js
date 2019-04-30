function MouseOver(elem) {
  elem.style.boxShadow = "-10px -18px 6px gray";
}

function MouseOut(elem) {
  elem.style.boxShadow = "none";
}

/*Slideshow jQuery*/
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  4000);

/*Contact Form javascript*/
function myFunction() {
  alert("Thank you for your response!");
}

/*javascript Warn Button*/
function Warn() {
    alert ("Fun fact:\n\nI have never broken a bone in my life!");
        };

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

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

/*jquery Project #1 slideToggle*/
$(document).ready(function(){
  $("#project").click(function(){
    $("#description").slideToggle("slow");
  });
});

/*jquery Project #2 slideToggle*/
$(document).ready(function(){
  $("#butn1").click(function(){
    $("#welcome").slideToggle("slow");
  });
});

/*jquery Project #3 slideToggle*/
$(document).ready(function(){
  $("#project3").click(function(){
    $("#description3").slideToggle("slow");
  });
});

/* Button*/
$(document).ready(function(){
  $('#resume').zoom({url: 'Resume.PNG'});
});
