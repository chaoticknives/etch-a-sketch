const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn");

window.onload = createGrid(16);

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

resetBtn.addEventListener('click', resetGrid);

function resetGrid (e) {
    let userGrid = prompt("Please enter a number between 1 and 100.");

    if (userGrid >= 1 && userGrid <= 100) {
        clearGrid(container);
        createGrid(userGrid);
    } else {
        alert ("Please enter a number between 1 and 100."); 
    }
};

function clearGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}