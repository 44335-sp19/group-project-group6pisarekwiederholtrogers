/*Social Media Shadow javascript*/
function MouseOver(elem) {
  elem.style.boxShadow = "-10px -18px 6px lightblue";
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

/*jquery Project #1 slideToggle*/
$(document).ready(function(){
  $("#project").click(function(){
    $("#description").slideToggle("slow");
  });
});

/*jquery Project #2 slideToggle*/
$(document).ready(function(){
  $("#project2").click(function(){
    $("#description2").slideToggle("slow");
  });
});

/*jquery Project #3 slideToggle*/
$(document).ready(function(){
  $("#project3").click(function(){
    $("#description3").slideToggle("slow");
  });
});