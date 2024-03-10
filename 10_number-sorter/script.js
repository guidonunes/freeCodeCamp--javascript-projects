const sortButton = document.getElementById('sort');


const sortInputArray = (event) => {
    //avoid default submission of the numbers associated with the form element
    event.preventDefault();

    //convert the input values to an array by using the spread operator
    const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));
    const sortedValues = bubbleSort(inputValues)

    updateUI(sortedValues);

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
        for(let j = 0; j < array.length-1; j++) {
            console.log(array, array[j], array[j+1]);
//check if the current element is larger than the next element            
            if (array[j] > array[j+1]) {
                //swap the elements
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array
}



sortButton.addEventListener('click', sortInputArray);