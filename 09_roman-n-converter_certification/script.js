const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

convertBtn.addEventListener("click", () =>{
    const inputValue = parseInt(numberInput.value.trim());

    switch(true) {
        case inputValue === -1:
            output.textContent = "Please enter a number greater than or equal to 1."
            break;
    }
})

