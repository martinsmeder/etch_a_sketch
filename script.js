let currentColor = '#333333';
let currentMode = 'color';

const divContainer = document.querySelector('#divContainer');
const colorPicker = document.querySelector('#picker')
const colorBtn = document.querySelector('#color');
const rainbowBtn = document.querySelector('#rainbow');
const blackBtn = document.querySelector('#black');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');
const gridSlider = document.querySelector('#slider');
let sliderOutput = document.querySelector('#output');

colorBtn.addEventListener('click', () => {
  setCurrentMode('color')
});
rainbowBtn.addEventListener('click', () => {
  setCurrentMode('rainbow')
});
blackBtn.addEventListener('click', () => {
  setCurrentMode('black')
});
eraserBtn.addEventListener('click', () => {
  setCurrentMode('eraser')
});
colorPicker.addEventListener('change', (e) => {
  setCurrentColor(e.target.value)
});
clearBtn.addEventListener('click', clearGrid);
gridSlider.addEventListener('mouseup', changeGridSize);
gridSlider.addEventListener('mousemove', showGridSize);


function createGrid(size) {
    // clear grid
    divContainer.replaceChildren();
    
    divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', changeColor);
        gridItem.addEventListener('mousedown', changeColor);
        divContainer.appendChild(gridItem);
    };  
};

function changeGridSize() {
    createGrid(gridSlider.value);
};

function showGridSize() {
  sliderOutput.textContent = `${gridSlider.value} x ${gridSlider.value}`;
};

function clearGrid() {
  createGrid(gridSlider.value);
};

function setCurrentMode(newMode) {
  currentMode = newMode;
};

function setCurrentColor(newColor) {
  currentColor = newColor;
};

// generate random colors
function random(min,max) {
    const num = Math.floor(Math.random()*(max-min)) + min;
    return num;
};
  
function randomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
};

// draw on mousedown instead of hover
let mouseDown = false

document.body.addEventListener('mousedown', () => {
  mouseDown = true;
});
document.body.addEventListener('mouseup', () => {
  mouseDown = false;
});

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'rainbow') {
        e.target.style.backgroundColor = randomColor();
      } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
      } else if (currentMode === 'black') {
        e.target.style.backgroundColor = '#000'
      } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#FFF'
      }; 
};

createGrid(16);
showGridSize();