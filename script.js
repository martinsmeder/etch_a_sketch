const container = document.querySelector('#container');
const squareButton = document.querySelector('#create');
const changeColor = document.querySelector('#color')
const blackColor = document.querySelector('#black')


squareButton.addEventListener('click', createGrid)

changeColor.addEventListener('click', () => {
    document.querySelectorAll('div > div > div ').forEach(item => {
        item.addEventListener('mouseover', () => {
            const newBgColor = randomColor();
            item.style.setProperty('background-color', newBgColor);
        })
    })
})  

blackColor.addEventListener('click', () => {
    document.querySelectorAll('div > div > div ').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.background = 'black';
        })
    })
})  

// initial grid
for (let i = 0; i < 16; i++) {
    const flexContainer = document.createElement("div");
    flexContainer.classList.add('flexContainer');
    container.appendChild(flexContainer); 

        for (let i = 0; i < 16; i++) {
            const flexItem = document.createElement("div");
            flexItem.classList.add('flexItem');
            flexContainer.appendChild(flexItem);
        } 
    } 

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

function random(min,max) {
    const num = Math.floor(Math.random()*(max-min)) + min;
    return num;
}
  
function randomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
