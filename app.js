document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("inputValue");
    const inUnit = document.getElementById("inUnit");
    const outUnit = document.getElementById("outUnit");
    const result = document.getElementById("result");
    
    input.addEventListener("input", changeInput);
    inUnit.addEventListener("change", changeInput);
    outUnit.addEventListener("change", changeInput);

    function changeInput() {
        if (isValid(input.value)) {
            showResult();
        }
    }

    function showResult() {
        result.textContent = convertUnit();
    }

    function convertUnit() {
        return input.value * inUnit.value / outUnit.value;
    }

    function isValid(value) {
        return !Number.isNaN(value);
    }
});