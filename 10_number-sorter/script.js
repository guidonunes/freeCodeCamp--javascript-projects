const sortButton = document.getElementById('sort');


const sortInputArray = (event) => {
    //avoid default submission of the numbers associated with the form element
    event.preventDefault();

    const inputValues = document.getElementsByClassName('values-dropdown');
}


sortButton.addEventListener('click', sortInputArray);