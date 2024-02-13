const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');


// Define the isPalindrome function
function isPalindrome(str) {
    const alphanumericStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
}



// Add event listener to the checkBtn
checkBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const inputValue = textInput.value.trim().toLowerCase();

    if(inputValue === '') {
        alert('Please input a value');
        return;
     }

    // Check if the input value is a palindrome
    if(isPalindrome(inputValue)) {
        result.textContent = inputValue + ' is a palindrome';
    } else {
        result.textContent = inputValue + ' is not a palindrome';
    }

    textInput.value = '';
});

