/*
Lets break down the code below:

document.addEventListener('DOMContentLoaded', function()
    Only allows the function to run after all the HTML is loaded

var contactForm = document.getElementById('contactForm')
    Finds the form with the id 'contectForm' and stores it in a new variable
    In the .html, we can find the id in the following line:
    <form id="contactForm" action="/submit" method="POST">

var formOutput = document.getElementById('formOutput')
    Same thing as before, finds the form output
    In the .html, we can find the id in the following line:
    <div id="formOutput"></div>

contactForm.addEventListener('submit', function(e) { ... });
    In English: Once they click submit, do the following

*/
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    var formOutput = document.getElementById('formOutput');

    contactForm.addEventListener('submit', function(e) {

        // Get the values from the form fields
        var name = document.getElementById('userName').value;
        var email = document.getElementById('userEmail').value;
        var message = document.getElementById('userMessage').value;

        // Create the output content
        var output = "<h3>Your Submission</h3>";
        output += "<p>Name: " + name + "</p>";
        output += "<p>Email: " + email + "</p>";
        output += "<p>Message: " + message + "</p>";

        // Display the output content on the page
        formOutput.innerHTML = output;
    });
});