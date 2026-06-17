```javascript
// =========================
// Temperature Converter
// =========================

const temperature = document.getElementById("temperature");
const unit = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {

    const value = parseFloat(temperature.value);

    if (isNaN(value)) {
        result.innerHTML = "⚠ Please enter a valid number";
        result.style.color = "#ff4d4d";
        return;
    }

    let output = "";

    if (unit.value === "celsius") {

        const fahrenheit = (value * 9 / 5) + 32;
        const kelvin = value + 273.15;

        output =
        `${value.toFixed(2)} °C<br>
         ${fahrenheit.toFixed(2)} °F<br>
         ${kelvin.toFixed(2)} K`;

    }

    else if (unit.value === "fahrenheit") {

        const celsius = (value - 32) * 5 / 9;
        const kelvin = celsius + 273.15;

        output =
        `${value.toFixed(2)} °F<br>
         ${celsius.toFixed(2)} °C<br>
         ${kelvin.toFixed(2)} K`;

    }

    else {

        const celsius = value - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

        output =
        `${value.toFixed(2)} K<br>
         ${celsius.toFixed(2)} °C<br>
         ${fahrenheit.toFixed(2)} °F`;

    }

    result.style.color = "#38bdf8";
    result.innerHTML = output;

});

// =========================
// Enter Key Support
// =========================

temperature.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        convertBtn.click();

    }

});
```
