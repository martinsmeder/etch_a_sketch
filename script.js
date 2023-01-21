const container = document.querySelector('#container');
const flexContainer = document.querySelector('.flexContainer');
const flexItem = document.querySelector('.flexItem');
const squareButton = document.querySelector('#create');

squareButton.addEventListener('click', createGrid)


function createGrid() {
    // clear grid
    container.replaceChildren();

    let squareAmount = prompt("Squares per side? (max 100)");

    if (squareAmount <= 100) {
        // create divs
        for (let i = 0; i < squareAmount; i++) {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add('flexContainer');
        container.appendChild(flexContainer); 

            for (let i = 0; i < squareAmount; i++) {
                const flexItem = document.createElement("div");
                flexItem.classList.add('flexItem');
                flexContainer.appendChild(flexItem);
            }  
        } 
    } else {
        alert("Too many squares! Max 100 per side.");
        createGrid();
    }
};






