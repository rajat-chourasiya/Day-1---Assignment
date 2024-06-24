document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeColorButton').addEventListener('click', function() {
        var color = prompt("Enter a color name or hex code (e.g., blue, #ff0000):");
        if (color !== null) {
            document.body.style.backgroundColor = color;
        }
    });

    var userName = prompt("Enter your name:");
    if (userName !== null) {
        var greeting = document.createElement('h3');
        greeting.textContent = "Hello, " + userName + "!";
        document.body.appendChild(greeting);
    }

    var age = prompt("Enter your age:");
    if (age !== null) {
        age = parseInt(age); // Convert input to integer
        if (age >= 18) {
            alert("You are an adult.");
        } else {
            alert("You are not an adult.");
        }
    }
});
