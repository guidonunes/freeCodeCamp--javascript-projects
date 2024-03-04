const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');



const decimalToBinary = (input) => {
   if (input === 0) {
    return '0';
   } else if (input === 1) {
    return "1";
   } else {
    return decimalToBinary(Math.floor(input/2)) + (input % 2);
   }
};

const checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        alert("Please provide a decimal number");
        return;
    }
   decimalToBinary(parseInt(numberInput.value));
   result.textContent = decimalToBinary();
   numberInput.value = '';
}


convertBtn.addEventListener('click', (checkUserInput));
numberInput.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter') {
        checkUserInput();
    }
});