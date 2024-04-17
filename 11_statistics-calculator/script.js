//calculate mean logic
const getMean = (array) => array.reduce((acc,el)=>acc +el, 0)/array.length;

//calculate median logic
const getMedian = (array) => {
    const sorted = array.sort((a,b) => a - b);
    const median = array.length %2 === 0 ?
    getMean([sorted[array.length/ 2], sorted[array.length/ 2 -1]]) :
    sorted[Math.floor(array.length/2)];
    return median;
}

//get the number that appears most often in the list
const getMode = (array) => {
    const counts = {}
    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1;
    });
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort((a,b) => {
        return counts[b] - counts[a]
    })[0];
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    return mode.join(", ");
}

//calculate range
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array)
}

//calculate variance 
const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc,el) =>{
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
}

//calculate
const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    document.querySelector('#range').textContent = range;
    document.querySelector('#mode').textContent = mode;
    document.querySelector('#median').textContent = median;
    document.querySelector('#mean').textContent = mean;
}