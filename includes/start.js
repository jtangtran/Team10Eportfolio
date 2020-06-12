$(document).ready(function() {
    //checking if the password is correct
    //returns true if the password matches
    function passwordCheck() {
        var password = "Team10/10";
        return (($("#password").val() === password) ? true : false);
    }

    //checks if the user presses the enter key to submit the form
    $("#password").keypress(function(e) {
        if (e.which == 13) {
            $("#button").click();
            return false;
        }
    });
   
    //checks if the password is correct when the user presses the enter button
    //if the user enters the wrong password it will be displayed onto the screen "Incorrect Password"
    //if the user enters the correct password it will display the next screen
    $("#button").click(function() {
        var passwordResult = passwordCheck();
        if (passwordResult) {
            location.href = "index.html";
            // $('#protected').hide();
            // $('#navBar').fadeIn(500);
        }
        else {
            $("#err").text("Incorrect Password");
            location.reload();
        }  
    }); 
});