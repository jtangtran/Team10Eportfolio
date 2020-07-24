$(document).ready(function() {
    $("#navBar").fadeIn(500);
    $(function(){
        $("#navBar-placeholder").load("navBar.html");
        $("#footer").load("footer.html");
    });

    var img = document.getElementById("thankYouGif");
    document.getElementById('divText').innerHTML = img.alt;

    var image = document.getElementById("logo");
    document.getElementById('divLogo').innerHTML = image.alt;

    var image = document.getElementById("camosunIcon");
    document.getElementById('camosunAltText').innerHTML = image.alt;

    var image = document.getElementById("landingPage");
    document.getElementById('landPageAlt').innerHTML = image.alt;

});