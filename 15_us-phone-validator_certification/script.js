const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkPhone = () => {
  const inputVal = userInput.value.trim();
  if (inputVal === '') {
    alert('Please provide a phone number');
  } else {
    const regEx = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    const validPhone = regEx.test(inputVal);

    validPhone ?
      resultsDiv.innerHTML = `<p class="text-success">Valid US number: ${inputVal}</p>` :
      resultsDiv.innerHTML = `<p class="text-danger">Invalid US number: ${inputVal}</p>`;
  }
};

clearBtn.addEventListener('click', () => {
  userInput.value = '';
  resultsDiv.innerHTML = '';
});

checkBtn.addEventListener('click', checkPhone);
