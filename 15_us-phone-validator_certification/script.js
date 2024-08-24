const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');



const checkPhone = () => {
  if (userInput.value === '') {
    alert('Please provide a phone number');
  } else {
    const regEx = /^1?(\d{3})(\d{3})(\d{4})$/;
    const validPhone = regEx.test(userInput.value);

    if (validPhone) {
      userInput.style.borderColor = 'green';
    } else {
      userInput.style.borderColor = 'red';
    }
  }

};

checkBtn.addEventListener('click', checkPhone);
