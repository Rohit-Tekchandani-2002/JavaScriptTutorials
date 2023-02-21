// Dom Manipulation

// Event listeners

// On click
// element.addEventListner("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('This is also a test');
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover
// element.addEventListner("mouseover", function);

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'lightblue'; // css background-color here camel case backgroundColor
}

newBackgroundColor.addEventListener("mouseover",changeBgColor);