const LoginForm = document.querySelector("#login-form");
console.log(LoginForm);

// handle form submit event
LoginForm.addEventListener("submit", function (event) {
    event.preventDefault();


    // collect form data
    const formData = new FormData(event.target);
    console.log(
        formData.get("username"),
        formData.get("password")
    );

    // display success message

    const messageH1 = document.querySelector("#message");
    messageH1.textContent = ("Login  successful!");


});

