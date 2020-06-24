$(document).ready(function() {
    //checking if the password is correct but first it hashes it 
    //and then compares it with the correct password's hash
    //returns true if the password matches
    function passwordCheck() {
        var password = $('#password').val();
        var hash = stringToHash(password);
        let hashedPassword = "1783682994"
        return ((hash=== hashedPassword) ? true : false);
    }

    //hashes the string from the parameters
    //returns a hash value
    function stringToHash(string) { 
        var hash = 0; 
        if (string.length == 0) return hash; 
        for (i = 0; i < string.length; i++) { 
            char = string.charCodeAt(i); 
            hash = ((hash << 5) - hash) + char; 
            hash = hash & hash; 
        } 
        return String(hash); 
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
        }
        else {
            //displays an error message and then reloads the page after 5 seconds
            $("#err").text("Incorrect Password");
            //functions that refreshes the page in around 1 second
            setTimeout(function(){
                window.location.reload(1);
             }, 1000);
        }  
    }); 
});