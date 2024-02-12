const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result')

checkBtn.addEventListener('click', () => {
    if(textInput.value.trim() === '') {
        alert('Please input a value')
    }
})