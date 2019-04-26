/*Liz's Knock Knock javascript*/
function alertUser(msg) {
    alert(msg);
}

/*Liz's Logo Hover jquery*/
$(document).ready(function() {
    $('img').hover(			
        function () {
            $(this).css({"background-color":"#007bff"});
               },	
        function () {
            $(this).css({"background-color":"white"});
               }
            );
    });