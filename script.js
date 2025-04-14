const containerBox = document.querySelector("#container");
const hexValues = "0123456789ABCDEF";
const newGameButton = document.querySelector("#newGameButton");
const resetButton = document.querySelector("#resetButton");

const rowDiv = document.createElement("div");
const colDiv = document.createElement("div");


let userInput = "";

rowDiv.classList.add("row");
colDiv.classList.add("column");


function getRandomColor() {
    let randomColor = "#";
    for (i = 0; i < 6; i++) {
        randomColor += hexValues[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

function decreaseOpacityOfSquare(event) {
    const currentOpacity = parseFloat(window.getComputedStyle(event.target).opacity);
    const newOpacity = Math.max(currentOpacity - 0.1, 0);
    return newOpacity;
}

function create16x16Grid() {

    rowDiv.innerHTML = "";
    containerBox.innerHTML = "";

    for (i = 0; i < 16; i++) {
        rowDiv.appendChild(colDiv.cloneNode());
    }

    for (i = 0; i < 16; i++) {
        containerBox.appendChild(rowDiv.cloneNode(true));
    }
}

create16x16Grid();

function createCustomGrid(userInput) {

    containerBox.innerHTML = "";
    rowDiv.innerHTML = "";

    for (i = 0; i < userInput; i++) {
        rowDiv.appendChild(colDiv.cloneNode());
    }

    for (i = 0; i < userInput; i++) {
        containerBox.appendChild(rowDiv.cloneNode(true));
    }

}

containerBox.addEventListener("mouseover", (event) => { 
    event.target.style.backgroundColor = getRandomColor();
    event.target.style.opacity = decreaseOpacityOfSquare(event);
});

newGameButton.addEventListener("click", () => {
    userInput = prompt("How many rows and columns?");
// Input validation:
    top: while (userInput !== null) { 
        userInput = +userInput;
        while (isNaN(userInput) || !Number.isInteger(userInput) || userInput > 100 || userInput === 0 || typeof userInput === 'string') {
            if (userInput === null) break top;

            userInput = +userInput;
            console.log(userInput);
            console.log(Number.isInteger(userInput));
            if (userInput > 100) {
                userInput = prompt("No higher than 100!");
                if (userInput === null) {
                    break top;
                } else {
                    userInput = +userInput;
                }
            } else {
                userInput = prompt("Whole numbers between 1 to 100 only!");
                if (userInput === null) {
                    break top;
                } else {
                    userInput = +userInput;
                }
            }
        }
        createCustomGrid(userInput);
    }
});

resetButton.addEventListener("click", () => { 
    create16x16Grid();
})