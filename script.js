// console.log("Test: start of script.js file linked from html");

const container = document.querySelector(".container");
const maxSize = 960;
let row;
let square;

let numberRows = 16;
let numberColumns = numberRows;

const buttonSet = document.querySelector(".setGrid");
buttonSet.textContent="set grid size";
const buttonClear = document.querySelector(".clearGrid");
buttonClear.textContent="clear grid";

buttonSet.addEventListener("click", () => {
    clearGrid();
    numberRows = prompt("how many squares per side?")
    resize(numberRows);
});

function resize(num) {
    console.log("resize:" + num);
    
    numberRows = (num > maxSize ? maxSize : num);
    numberColumns=numberRows;
    console.log(numberColumns);

    for (let i = 1; i < numberRows+1; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 1; j < numberColumns+1; j++) {
            square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("row"+i);
            square.classList.add("col"+j);
            square.id= "row" + i + "_col"+j;

            if(j===numberRows) {square.classList.add("colLast")}; 
            if(i===numberRows) {square.classList.add("rowLast")};

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
};

resize(numberRows);

let thisSquare;

function clearGrid() {
    console.log("clearGrid");
    for (let i=1; i < numberRows+1; i++) {
        for (let j=1; j < numberColumns+1; j++) {
            thisSquare = document.getElementById("row"+i+"_col"+j);
            thisSquare.style.background="var(--hero)";
        }
    }
};

buttonClear.addEventListener("click", clearGrid);