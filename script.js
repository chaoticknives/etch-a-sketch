const container = document.querySelector(".container");

function createGrid(num) {
    // let gridDiv = document.createElement('div');
    //container.appendChild(gridDiv);
    for (let row = 0; row < num; row++) {
        let gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
    }
    
    for (let column = 0; column < num; column++) {
        let gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
    }
}

createGrid(2);