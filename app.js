//  Interval Exercise (follow the instructions below).
 // When the user presses a key, it will run the following function...
      $("#button").click(function()   {   

  



        // Determine which key was pressed
        var userGuess = $("#button").onclick
        
//  This code will run as soon as the page loads.
var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();
var correct = 0;
// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
  var now = new Date().getTime();

// Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds, all variables
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 30)) / 1000);
  
// Display the result in the element with id="demo"
 

  
  // Here we create the HTML that will be injected into our div and displayed on the page.
    var html = "<p>Will AI help humanity?</p>";



   document.getElementById("demo").innerHTML = "Time Remaining:" +seconds + "s "+ html;

   
    $("#radio-wrapper").show();

});
   


   })

   




  






  
 

