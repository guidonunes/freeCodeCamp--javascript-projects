//calculate mean logic
const getMean = (array) => array.reduce((acc,el)=>acc +el, 0)/array.length;

//calculate median logic
const getMedian = (array) => {
    const sorted = array.sort((a,b) => a - b);
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
    document.querySelector('#mean').textContent = mean;
    const median = array.length %2 === 0 ?
    getMean([sorted[array.length/ 2], sorted[array.length/ 2 -1]]) :
    sorted[Math.floor(array.length/2)];
    return median;
}