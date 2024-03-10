const sortButton = document.getElementById('sort');


const sortInputArray = (event) => {
    //avoid default submission of the numbers associated with the form element
    event.preventDefault();

    //convert the input values to an array by using the spread operator
    const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));
    updateUI(inputValues);
}

//display the sorted array on the screen
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}

const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++) {
    
    }
}



sortButton.addEventListener('click', sortInputArray);