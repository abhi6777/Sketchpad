const body = document.body;

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);


let grid = 16;
let boxSize = 20;
let containerWidth = (grid * boxSize);
container.style.width = `${containerWidth}px`;
createGrid();

// iterating a loop to create divS as boxes 
function createGrid() {
     for (let i = 0; i < grid * grid; i++) {
             const divS = document.createElement("div");
             divS.setAttribute("style", `height: ${boxSize}px; width: ${boxSize}px;`);
             divS.classList.add("gridStyle","hover");
             container.appendChild(divS);
     };
 };
 
// step 3 hover function 

let hoverDiv = document.querySelectorAll(".hover");

hoverDiv.forEach(hoverDiv => {
     hoverDiv.addEventListener("mouseover", () => {
          hoverDiv.style.backgroundColor = "red";
      });
});


// step 4 popup window

const newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", () => {
     let value = prompt("New Grid Size");
     if(value > 100) {
          alert("pls enter under 100 grids");
          return;
     };
     container.innerHTML = "";
     grid = value;
     let containerWidth = (grid * boxSize);
     container.style.width = `${containerWidth}px`;
     createGrid();
});