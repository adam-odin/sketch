const container = document.querySelector(".container");
const maxSize = 200;
let row;
let square;

let numberRows=50;
let numberColumns;
let num=2;
let proportion;
let thisSquare;
let thisOpacity;


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
            square.style.opacity=0;
            square.style.background="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";

            if(i===(numberRows-1)) square.classList.add("rowLast");
            if(j===(numberColumns-1)) square.classList.add("colLast"); 

            row.appendChild(square);

            square.addEventListener("mouseenter", function(e) {
                console.log("mouseenter");        
                thisSquare = document.getElementById(e.target.id);
                console.log("thisSquareID: "+thisSquare.id);
                thisOpacity = parseFloat(window.getComputedStyle(thisSquare).getPropertyValue("opacity"));
                console.log(thisOpacity);
                if (thisSquare.style.background==="var(--hero)") {
                thisSquare.style.opacity=0;
                thisSquare.style.background= rgb(Math.random()*255, Math.random*255, Math.random*255);
                } 
                let newOpacity = thisOpacity+0.2;
                thisSquare.style.opacity=newOpacity;
                // let newOpacity=Number(thisOpacity)+0.1;
                // e.target.style.background="var(--herot)";
            });

            square.addEventListener("mouseleave", function(e) {
                // e.target.style.background="var(--heros)";                
                console.log("mouseleave");
                thisSquare = document.getElementById(e.target.id);
                thisOpacity = parseFloat(window.getComputedStyle(thisSquare).getPropertyValue("opacity"));
                console.log(thisOpacity);
            });

        }
        
    }
};

function clearGrid() {
    console.log("clearGrid");
    for (let i=0; i < numberRows; i++) {
        for (let j=0; j < numberColumns; j++) {
            thisSquare = document.getElementById("row"+(i+1)+"_col"+(j+1));
            thisSquare.style.opacity=1;
            thisSquare.style.background="var(--hero)";
            thisSquare.style.opacity=0;
            thisSquare.style.background="var(--heroi)";
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