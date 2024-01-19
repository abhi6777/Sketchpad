const body = document.body;

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

let grid = 16;
let containerWidth = (grid * grid);
container.style.width = `${containerWidth}px`;
createGrid();

function createGrid() {
     for (let i = 0; i < grid * grid; i++) {
             const divS = document.createElement("div");
             divS.classList.add("gridStyle")
             container.appendChild(divS);
     };
 };
 
