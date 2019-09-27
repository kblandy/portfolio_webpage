var arrowButton = $(".arrow");
var mainContent = $("#main-container");
var scrollDiv = $("#empty-div");

//adds gentle scrolling when arrow icon is clicked
$(document).ready(function(){
    // Add smooth scrolling to all links
    arrowButton.on('click', function(event) {

        event.preventDefault();
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: scrollDiv.offset().top
        }, 900, function(){
     
        });
      }); 
    });