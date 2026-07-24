// WDD 131 Country Page JavaScript
// Discover Zambia


// Static weather values
const temperature = 8;
const windSpeed = 10;


// Wind Chill Calculation Function
// Metric formula: temperature in Celsius, wind speed in km/h
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}


// Display Wind Chill
const windChillDisplay = document.getElementById("windchill");


if (temperature <= 10 && windSpeed > 4.8) {

    windChillDisplay.textContent =
        calculateWindChill(temperature, windSpeed) + " °C";

} else {

    windChillDisplay.textContent = "N/A";

}



// Display Current Year
document.getElementById("currentyear").textContent =
    new Date().getFullYear();


// Display Last Modified Date
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;