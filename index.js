const ratingButtons = document.querySelectorAll(".rating-item");
const submitButton = document.getElementById("submit");
const ratingSection = document.getElementById("rating-section");
const thankYouSection = document.getElementById("thank-you-section");
const errorMsg = document.getElementById("error");
const ratingChosen = document.getElementById("rating-choosen");

// console.log(ratingButtons, submitButton, ratingSection, thankYouSection);

// METHOD 1 ()

// Loop through the nodelist to add an event listeiner
ratingButtons.forEach((button) => {
    button.addEventListener("click", (button) => {
        // Get the rating value
        let rating = button.target.value;
        
        // pass the rating value to the submit function
        submitRating(rating);
            
    });
});

// submit function
let submitRating = (rating) => {
   
    // add a event listeiner to Submit button
    submitButton.addEventListener("click", () => {
        // check if the rating is  valid or not
        if (rating == 0) {
             
             errorMsg.innerHTML = "Please Select a rating";
        } else {
            // Switch the section display
             ratingSection.style.display = "none";
            thankYouSection.style.display = "block";
            
            // add the choosen rating to the screen
             ratingChosen.innerHTML = rating;
             
         }
    });
};


// automatic display of error if submit is clicked before rating is choosing
submitButton.addEventListener("click", () => {
    errorMsg.innerHTML = "Please Select a rating";
});









// // call back function for rating buttons click event


// let ratingValue = (button) => {
//     let rating = e.target.value;
//     // Get the rating value
//     console.log(rating);

//     submitButton.addEventListener("click", () => {
//     console.log(rating.target.value);

//     if (rating !== 0) {
//         ratingSection.style.display = "none";
//         thankYouSection.style.display = "block";
//         ratingChosen.innerHTML = rating;
//     } else {
//         errorMsg.innerHTML = "Please Select a rating";
//         console.log("please select a rating");
//     }
// });
// };

// let setRating = (rating) => {
//     console.log(rating);

//     if (rating !== 0) {
//         ratingSection.style.display = "none";
//         thankYouSection.style.display = "block";
//         ratingChosen.innerHTML = rating;
//     } else {
//         errorMsg.innerHTML = "Please Select a rating";
//         console.log("please select a rating");
//     }
// };

// // Loop through the nodelist to add an event listeiner
// ratingButtons.forEach((button) => {
//     button.addEventListener("click", ratingValue);
// });

// let ratingChoosen = ratingValue();
// console.log(ratingChoosen);

// submitButton.addEventListener("click", setRating);

// submitButton.addEventListener("click", setRating);
