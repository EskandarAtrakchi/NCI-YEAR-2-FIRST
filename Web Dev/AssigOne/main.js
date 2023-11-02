//===================================

//function number 1 for the Home page page 

//===================================

function filterProducts() {
    
    //Grab the elements from the doucment 
    var input = document.getElementById('searchInput').value.toLowerCase();
    var rows = document.getElementsByTagName('tr');
    var noResultsMessage = document.querySelector('.informUser'); // Get the <p> element
    var hideTheTableHeader = document.getElementById('customers');
    var notFound = true; // Initialize a variable to track if any results are found

    for (var i = 1; i < rows.length; i++) {//i is equal to 1 and not zero 
        
        var data = rows[i].textContent || rows[i].innerText;// Get the row 
        //it is better to use the lowercase built in method here to match the chars in all cases
        if (data.toLowerCase().indexOf(input) > -1) {

            rows[i].style.display = '';//set the display to noting-means to display as designed in css styles
            notFound = false; // Set notFound to false if a match is not Found

        } else {

            rows[i].style.display = 'none';//hide the table data 
            //notFound = true;//This is just a reminder for me that I might need this later

        }
    }//end for loop 

    // Show/hide the "Not available" message based on whether results are found
    if (notFound) {

        //display the text as block 
        noResultsMessage.style.display = 'block';
        hideTheTableHeader.style.display = 'none';//an opportunity to hide the header of the table here also 

    } else {

        //display the text as hidden 
        noResultsMessage.style.display = 'none'; 
        hideTheTableHeader.style.display = '';//get the table header back to its original css styling that have been set in css styling file 

    }
}//end method here

//===================================

//function number 2 for feedback page 

//===================================

function feedbackPage () {

    hitCount();//calling the method 
    const userConfirmed = window.confirm("Do you want to continue observing our new product?");
    
    if (userConfirmed) {

        confirmation ();//calling the method 
        
    }

    else if (!userConfirmed) {

        cancellation ();//calling the method 

    }
    
}//end method here

//===================================

//function number 3 for confirmation pop-up dialog

//===================================

function confirmation () {

    //open new tab productList.html
    window.open('productList.html');

}//end method confirmation

//===================================

//function number 4 for cancel pop-up dialog

//===================================

function cancellation () {

    //close the current tab feedback.html
    window.close();

}

//===================================

//function number 5 to limit the number of submitted feedback from the users 

//===================================

function hitCount() {

    //checking if the submitted button of feedback was clicked before 
    if (localStorage.pagecount) {

        localStorage.pagecount = Number(localStorage.pagecount) + 1;

    } else {

        localStorage.pagecount = 1;

    }
    
    //if it was clicked then run the if statements accordingly 
    if (localStorage.pagecount > 1) {

        alert('You already have submitted your feedback!\nWe will read your feedback carefully!\nThank you.\nYour feedback helps us improve!');

    }

    else {

        //inform the user for their feedback feedback
        alert('Thank you for providing your feedback.\nYour feedback helps us improve!');

    }
  
} //end hitCount

//===================================

//function number 6 scrollBox

//===================================

//declaring variables and assigning values to them 
i = 0;// integer type
direction = 1;
isTyping = true;//boolean type
function scrollBoxForFeedbackPage() {

    var message = "lease Send Us Your Feedback";
    if (isTyping) { //when the condition is true 

        document.getElementById("DynamicTextForFeedbackPage").innerHTML = message.substring(0, i) + "_";
        
    } else { //otherwise 

        document.getElementById("DynamicTextForFeedbackPage").innerHTML = message.substring(0, i);

    }

    if (i >= message.length) {

        setTimeout("scrollBoxForFeedbackPage()", 2000); //pause time in msI 2 seconds 
        return document.getElementById("DynamicTextForFeedbackPage").innerHTML = "lease Send Us Your Feedback";

    }

    i += direction; //increment 

    isTyping = !isTyping;
    setTimeout("scrollBoxForFeedbackPage()", 200);

}

//end function scrollBox

//===================================

//function number 7 smooth scrolling 

//===================================

function scrollToTop() {
    // Scroll smoothly to the top of the page
    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });
}

//===================================

// Function number 8 to apply dark mode styles

//===================================

function applyDarkMode() {

    var body = document.body;
    body.classList.add("dark-mode");
    document.getElementById("darkModeCheckbox").checked = true;

}

//===================================

// Function number 9 to apply light mode styles

//===================================

function applyLightMode() {

    var body = document.body;
    body.classList.remove("dark-mode");
    document.getElementById("darkModeCheckbox").checked = false;

}

//=================================== 

// Function number 10 to toggle dark mode when the checkbox is clicked

//=================================== 

function toggleDarkMode() {

    var darkModeCheckbox = document.getElementById("darkModeCheckbox");
    if (darkModeCheckbox.checked) {
        applyDarkMode();
    } else {
        applyLightMode();
    }

}

//=================================== 

//eventlisteners were added in script tags in the pages of html 