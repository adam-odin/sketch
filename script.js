console.log("Test: start of script.js file linked from html");

const body = document.querySelector("body");
const container = document.querySelector(".container");
let column;
let square;

const setGrid = document.querySelector(".setGrid");
setGrid.textContent="set grid size";
const clearGrid = document.querySelector(".clearGrid");
clearGrid.textContent="clear grid";

// setGrid.addEventListener()


const numberRows = 16;
const numberColumns = 16;

for (let j = 1; j < numberColumns+1; j++) {
    console.log("Column number (j):" + j);
    column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (let i = 1; i < numberRows+1; i++) {
        console.log("Column number (j):" + j);
        square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("row"+i);
        square.classList.add("col"+j);
        square.id= "row" + i + "_col"+j;

        if (i===numberRows) {
            square.classList.add("rowLast");
        }
        if(j===numberRows) {
            square.classList.add("colLast");
        }
        column.appendChild(square); 

        square.addEventListener("mouseenter", function(e) {
            console.log("mouseenter");        
            if(i=numberRows-1) {
                square.classList.add("rowLast");
            }
            if(j=numberRows-1) {
                square.classList.add("colLast");
            }
    
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

const squares = document.querySelector(".square");

clearGrid.addEventListener("click", () => {
    console.log("clearGrid");
    container.style.background="var(--hero)";
});
