console.log("Test: start of script.js file linked from html");

const container = document.querySelector(".container");
const squares = document.querySelector(".square");
let row;
let square;

const gridButton = document.querySelector("#gridButton");

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
        square.id= "row" + i + "_col"+j;
        row.appendChild(square);

        square.addEventListener("mouseenter", function(e) {
            console.log("mouseenter");
            console.log(e.target);
            e.target.style.background="var(--herod)";
        });

        square.addEventListener("mouseleave", function(e) {
            console.log("mouseleave");
            console.log(e.target);
            e.target.style.background="var(--herot)";
        });

    } 
}

