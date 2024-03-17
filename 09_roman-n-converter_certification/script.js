const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

convertBtn.addEventListener("click", () =>{
    const inputValue = parseInt(numberInput.value.trim());

    switch(true) {
        case numberInput.value.trim() === "":
            output.textContent = "Please enter a valid number";
            break;
        case inputValue === -1:
            output.textContent = "Please enter a number greater than or equal to 1.";
            break;
        case inputValue >= 4000:
            output.textContent = "Please enter a number less than or equal to 3999";
            break;
        case isNaN(inputValue) || inputValue < 1:
            output.texContent = "Please enter a valid number.";
            break;
        default:
            // Call conversion function here if input is valid
        break;
    }
})

