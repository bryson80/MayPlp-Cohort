// string
let greeting = "Hello, Kenya";
console.log(greeting);

// Number
let year = 2023;
console.log(year);

// Boolean
let isCodindFun = true;
console.log(isCodindFun);

// Object
let phone = {
    firstName: "iphone",
    lastName: "proMax",
    year: 2024
};
console.log(phone);

// function declaration
function add(a, b) {
    return a + b;
}
console.log(add(30, 40));

// function expression subract
function subract(a, b) {
    return a - b;
};
console.log(subract(9, 3));

//arrow function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(7, 3)); // output 21

// function divide
function divide(a, b){
    return a / b;
}
console.log(divide(6, 3)); // output 2

document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Expense Tracker 1!");

    const links = document.querySelectorAll('a');
    links.forEach(links => {
        links.addEventListener('click', function(event) {
            console.log('Navigating to ${link.textContent} page.');
        });
    });
    const submitBtn = document.getElementById('submitBtn');
    const message = document.getElementById('message');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    submitBtn.addEventListener('click', function() {
        const username = usernameInput.ariaValueMax;
        const password = passwordInput.ariaValueMax;

        console.log('Username: ${username}, Password: ${password}');

        if (username && password) {
            message.classList.remove('hidden');
            message.textContent = 'Thank you for submitting your details, ${username}!';
        } else {
            message.classList.remove('hidden');
            message.textContent = 'please enter both username and password.';
            message.style.color = 'red';
        }
    });
});




