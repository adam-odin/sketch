const container = document.querySelector(".container");
const maxSize = 960;
let row;
let square;

let numberRows=100;
let numberColumns;
let num=2;
let proportion;
let thisSquare;

const buttonSet = document.querySelector(".setGrid");
buttonSet.textContent="set grid size";
const buttonClear = document.querySelector(".clearGrid");
buttonClear.textContent="clear grid";

function resize(num) {
    console.log("resize:" + num);
    
    numberRows = (num > maxSize ? maxSize : num);
    numberColumns=numberRows;
    proportion = 100/numberRows;
    console.log("proportion: "+proportion);
    console.log("numberColumns"+numberColumns);

    for (let i = 0; i < numberRows; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        row.id="row"+(i+1);
        console.log(row.id);
        container.appendChild(row);

        for (let j = 0; j < numberColumns; j++) {
            square = document.createElement("div");
            square.classList.add("square");            
            thisSquare = document.getElementById("row"+(i+1)+"_col"+(j+1));
            square.classList.add("row"+(i+1));
            square.classList.add("col"+(j+1));
            square.id= "row" + (i+1) + "_col"+(j+1);
            square.style.height=proportion+"vw";
            
            if(i===(numberRows-1)) square.classList.add("rowLast");
            if(j===(numberColumns-1)) square.classList.add("colLast"); 

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

function clearGrid() {
    console.log("clearGrid");
    for (let i=0; i < numberRows; i++) {
        for (let j=0; j < numberColumns; j++) {
            thisSquare = document.getElementById("row"+(i+1)+"_col"+(j+1));
            thisSquare.style.background="var(--hero)";
        }
    }
};

buttonClear.addEventListener("click", clearGrid);

buttonSet.addEventListener("click", () => {
    clearGrid();
    const oldNumber = numberRows;
    console.log("oldNumber: "+oldNumber);
    newNumber = prompt("how many squares per side?")
    console.log("newNumber: "+newNumber);
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    resize(newNumber);
});

resize(numberRows);