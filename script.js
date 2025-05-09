document.getElementById("convertForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const value = document.getElementById("value").value;
    const fromUnit = document.getElementById("from_unit").value;
    const toUnit = document.getElementById("to_unit").value;

    fetch("/convert", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            value: value,
            from_unit: fromUnit,
            to_unit: toUnit
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").textContent = 
            `Converted value: ${data.result} ${toUnit}`;
    })
    .catch(error => {
        document.getElementById("result").textContent = "Error converting value.";
        console.error("Error:", error);
    });
});

