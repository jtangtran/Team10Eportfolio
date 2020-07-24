$(document).ready(function() {
    $("#navBar").fadeIn(500);
    $(function(){
        $("#navBar-placeholder").load("navBar.html");
        $("#footer").load("footer.html");
    });


});