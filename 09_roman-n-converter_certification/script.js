const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

const numerals = [
    {char:"M", value: 1000},
    {char:"CM", value: 900},
    {char:"D", value: 500},
    {char:"CD", value: 400},
    {char:"C", value: 100},
    {char:"XC", value: 90},
    {char:"L", value: 50},
    {char:"XL", value: 40},
    {char:"X", value: 10},
    {char:"IX", value: 9},
    {char:"V", value: 5},
    {char:"IV", value: 4},
    {char:"I", value: 1},
]




convertBtn.addEventListener("click", () =>{
    const inputValue = parseInt(numberInput.value.trim());
//Check if the input is valid or not
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

