const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    if(textInput.value.trim() === '') {
        alert('Please input a value')
    } else {
        const inputValue = textInput.value.trim().toLowerCase();
        switch (inputValue) {
            case 'a':
                result.textContent = 'A is a palindrome';
                break;
            default:
                result.textContent = '';
                break;
        }
    }
});

//TODO: research palindrome logic to implement