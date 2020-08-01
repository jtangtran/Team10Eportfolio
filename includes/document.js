$(document).ready(function() {
    //displays the nav bar from the index.html and footer.html file
    $(function(){
        $("#navBar-placeholder").load("navBar.html");
        $("#footer").load("footer.html");
    });
});