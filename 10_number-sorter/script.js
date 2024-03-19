const sortButton = document.getElementById('sort');


const sortInputArray = (event) => {
    //avoid default submission of the numbers associated with the form element
    event.preventDefault();

    //convert the input values to an array by using the spread operator
    const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));
    const sortedValues = selectionSort(inputValues)

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
            
//check if the current element is larger than the next element            
            if (array[j] > array[j+1]) {
                //swap the elements
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
};

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i+1; j < array.length; j++ ) {
            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        const temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array;
};

const insertionSort = (array) => {

};

sortButton.addEventListener('click', sortInputArray);