document.getElementById("convertButton").addEventListener("click", convertTemperatureToFahrenheit);

function convertTemperatureToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var resultElement = document.getElementById("result");

    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = fahrenheit.toFixed(2) + "°F";
    } else {
        resultElement.textContent = "Invalid input";
    }
}

document.getElementById("convertButton-2").addEventListener("click", convertTemperatureToCelsius);

function convertTemperatureToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var resultElement1 = document.getElementById("result-2");

    if(!isNaN(fahrenheit)) {
        var celsius = ((fahrenheit-32)*5/9);
        resultElement1.textContent = celsius.toFixed(2) + "°C";
    } else {
        resultElement1.textContent = "Invalid input";
    }
}


document.getElementById("resetButton").addEventListener("click", resetForm);

function resetForm() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").textContent = "---";
    document.getElementById("result-2").textContent = "---";
}