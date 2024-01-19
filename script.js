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
          hoverDiv.style.backgroundColor = `${generateColor()}`;
     });
});


// step 4 popup window

const newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", () => {

     // Removing the event listener
     hoverDiv.forEach(hoverDiv => {
          hoverDiv.removeEventListener("mouseover", () => {
               hoverDiv.style.backgroundColor = `${generateColor()}`;
          });
     });

     // Assigning new value for new grid size 
     let value = prompt("New Grid Size");
     if(value > 100) {
          alert("Please enter a value under 100 grids.");
          return;
     };
     container.innerHTML = "";
     grid = value;
     let containerWidth = (grid * boxSize);
     container.style.width = `${containerWidth}px`;
     createGrid();

     // reassigning for coloring the divs

     hoverDiv = document.querySelectorAll(".hover");
     hoverDiv.forEach(hoverDiv => {
     hoverDiv.addEventListener("mouseover", () => {
          hoverDiv.style.backgroundColor = `${generateColor()}`;
     });
});
});

// Additional
// generating random RGB

const generateColor = () => {
     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
     return "#" + randomColor;
   };