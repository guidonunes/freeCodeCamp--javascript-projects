const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');



//conversion function for valid input
const convertToRoman = (num) => {
    const numerals = {
        M: 1000, 
        CM: 900, 
        D: 500, 
        CD: 400, 
        C: 100, 
        XC: 90, 
        L: 50, 
        XL: 40, 
        X: 10, 
        IX: 9, 
        V: 5, 
        IV: 4, 
        I: 1,
    };
    let convertedNumber = '';

    for (let i of Object.keys(numerals)) {
        const value = Math.floor(num/ numerals[i]);
        num -= value * numerals[i];
        convertedNumber += i.repeat(value);
    }
    return convertedNumber;
};


const handleConversion = () => {
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
            output.textContent = "Please enter a valid number.";
            break;
        default:
            // Call conversion function here if input is valid
            output.textContent = convertToRoman(inputValue);    
        break;
    }
};

convertBtn.addEventListener("click", () => {
    handleConversion();
});

