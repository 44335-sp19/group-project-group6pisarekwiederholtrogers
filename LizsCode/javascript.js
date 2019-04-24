/*Social Media Shadow javascript*/

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