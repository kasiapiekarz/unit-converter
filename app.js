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
        else {
            isError();
        }
    }

    function showResult() {
        result.textContent = convertUnit();
    }

    function isError() {
        result.textContent = "Wrong format. Input must be a number";
    }

    function convertUnit() {
        return input.value * inUnit.value / outUnit.value;
    }

    function isValid(num) {
        return !Number.isNaN(Number(num));
    }
});