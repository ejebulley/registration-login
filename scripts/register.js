// select form by name
const registerForm = document.querySelector("#register-form");
// document.write("<h1> I Messed It  </h1>");
// document.body.innerHTML = " <h1> I Messed It Up. </h1>";
// handle form submit event
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();


    // collect form data
    const formData = new FormData(event.target);
    console.log(
        formData.get("username"),
        formData.get("email"),
        formData.get("password")
    );


    // Save user information
    // Send confirmation email
    // display success message

    const messageH1 = document.querySelector("#message");
    messageH1.textContent = ("Account registered successfully!");


});

// age variable
// const age = 44;

// // square of age
// function squareOfAge(age) {
//     const squaredAge = age ** 2;
//     return squaredAge;
// }

// const squaredAge= squareOfAge((age));
// console.log(squaredAge(45));


// create a function that returns firstname and Lastname


function combineNames(firstName, lastName) {
    return `${firstName} ${lastName}`;

}

// Fullname combined
const fullName = combineNames("Justin", "Edie");
