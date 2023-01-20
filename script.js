// create divs
for (let i = 0; i < 100; i++) {
    const flexContainer = document.createElement("div");
    flexContainer.classList.add('flexContainer');
    divContainer.appendChild(flexContainer);   

    for (let i = 0; i < 100; i++) {
        const flexItem = document.createElement("div");
        flexItem.classList.add('flexItem');
        flexContainer.appendChild(flexItem);
    }  
}
