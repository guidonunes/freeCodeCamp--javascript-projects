const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById('animation-container');

    //array of objects to store data for each frame of the animation
    const animationData = [
        {
        inputVal:5,
        marginTop:300,
        addElDelay:1000,
        },
        {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500
        },
        {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000,
        msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 5000,
        removeElDelay: 10000
        }
    ];

const decimalToBinary = (input) => {
    //check base case
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

    // animation to check what's happening under the hood
const showAnimation = () => {
    result.innerText = "Call Stack Animation";
    // loop through animationData array
    animationData.forEach((obj) => {
    // set up the delay to add elements to the DOM    
        setTimeout(() => {
            animationContainer.innerHTML += `<p id='${obj.inputVal}' style = 'margin-top:${obj.marginTop}px;' class ='animation-frame'>
            decimalToBinary(${obj.inputVal})
            </p>`;
        }, obj.addElDelay)
    })
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    alert("Please provide a decimal number");
    return;
  }

  if (inputInt === 5) {
    //animation function call
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});