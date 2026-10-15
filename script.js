const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetGrid");

function createGrid(num) {
    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            let gridDiv = document.createElement('div');
            gridDiv.classList.add("grid");
            container.appendChild(gridDiv);
        }
        let gridDiv = document.createElement('div');
        gridDiv.classList.add("grid")
        container.appendChild(gridDiv);
    }
}

container.addEventListener('mouseover', colorHover);

function colorHover (e) {
    e.target.style.background = "red";
}

createGrid(16);