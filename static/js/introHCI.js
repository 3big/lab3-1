'use strict';
var setif = 0;
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
		/* code for slide 41
		console.log(setif);
		e.preventDefault();
		if(setif==0){
			$('.jumbotron h1').text("Javascript is connected");
			setif=1;
		}
		else if(setif==1){
			$('.jumbotron h1').text("Experience Chan! It's not a lot of questions.");
			setif=2;
		}
		else if(setif==2){
			$('.jumbotron h1').text("Too many questions is the Chan disease");
		}
		*/

	});
	$("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) { 
	console.log("Project clicked");
    // prevent the page from reloading      
    e.preventDefault();
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}