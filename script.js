const celsiusEl = document.getElementById("Celsius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

let lastInputTime = Date.now();
let inputCount = 0;
const maxRequestsPerSecond = 2; // Adjust this value based on your needs

function computeTemp(event) {
    const currentTime = Date.now();
    const timeDifference = currentTime - lastInputTime;

    if (timeDifference < 1000) { // 1000 milliseconds = 1 second
        inputCount++;

        if (inputCount > maxRequestsPerSecond) {
            alert("Too many requests in a short period. Please wait a moment.");
            return;
        }
    } else {
        // Reset the counter and update the last input time
        inputCount = 1;
        lastInputTime = currentTime;
    }

    // Rest of your existing code
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celsius":
            fahrenheitEl.value = (currentValue * 9 / 5) + 32;
            kelvinEl.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celsiusEl.value = (currentValue - 32) * 5 / 9;
            kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        // Add more cases if needed

        default:
            break;
    }
}
