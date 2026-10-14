const container = document.querySelector(".container");

//let grids = 16;

function createGrid(num) {
    //console.log("test");
    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            let gridDiv = document.createElement('div');
            container.appendChild(gridDiv);
            //gridDiv.textContent = "test";
        }
        let gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
        //gridDiv.textContent = "test";
    }
}

createGrid(16);