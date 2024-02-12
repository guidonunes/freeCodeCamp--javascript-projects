const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener('click', () => {
    if(textInput.value.trim() === '') {
        alert('Please input a value')
    }
})