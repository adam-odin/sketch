console.log("Test: start of script.js file linked from html");

const container = document.querySelector(".container");
const squares = document.querySelector(".square");
let row;
let square;

const numberRows = 16;
const numberColumns = 16;

for (let i = 0; i < numberRows; i++) {
    console.log("Row number (i):" + i);
    row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < numberColumns; j++) {
        console.log("Column number (j):" + j);
        square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);

        square.addEventListener("mouseenter", () => {
            console.log("mouseenter");
            square.setAttribute("style","background: var(--herod");  
        });
        
        square.addEventListener("mouseleave", () => {
            console.log("mouseleave");
            square.setAttribute("style","background: var(--heros");
        });
    } 
}

