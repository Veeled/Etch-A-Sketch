const container = document.querySelector('#container');

function makeDivs(rows, cols) {
    //innerHTML to empty to container so child elements do not compound. The 'grid-template-..' properties were used to take user input to create the desired rows + cols. 1fr gives the size of the child element: dynamically adjusts to fit the container. 
    container.innerHTML = "";
    container.style.setProperty('grid-template-rows', 'repeat(' + rows + ', 1fr)');
    container.style.setProperty('grid-template-columns', 'repeat(' + cols + ', 1fr)');
    let multiplier = 2;

    //Loop to create the grid/ child elements
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = '';
        container.appendChild(cell).className = 'grid-item';
        //Event to fire when mouse hovers over child elements
        cell.addEventListener ('mouseover', (event) => {
            //storing the event/ cell in target so dont have to repeat event.target repeatedly. Target references the object in which the event was triggered.  
            let target = event.target;
            //parseInt to convert string into integer. Custom attribute dataset to obtain the percentage value of cell. 
            let rbgPercentValue = parseInt(target.dataset.percent);
                    multiplier += 0.1;
            //if rgbPercent.. is not a number/ is a string, return it as 100. 
            if (isNaN(rbgPercentValue)) rbgPercentValue = 100;
           if (rbgPercentValue >= 10) {
               rbgPercentValue -= 10;
               //The previous cell percentage value is equal to the new set value
               target.dataset.percent = rbgPercentValue;
            }
            // rgb (red, green, blue)
            let rgbColor = `rgb(${rbgPercentValue * multiplier}%,${rbgPercentValue / multiplier}%,${rbgPercentValue}%)`;
            // if target/ cell is not the container, style the background the value of rgbColor. 
            if (target !== container) {
                target.style['background'] = rgbColor;
            }
        }, false);
    }
};
makeDivs(16, 16);

let btn = document.querySelector('.grid-value');
btn.addEventListener('click', () => {
    const rows = prompt('Number of rows required?');
    const cols = prompt('Number of columns required?');
    if (!isNaN(rows) && !isNaN(cols)) {
        if (rows <= 100 && cols <= 100) {
            makeDivs (rows, cols);
        } else {
            alert ('Must Enter Values Less Than 100');
        }
    } else {
        alert('Must Enter Number Values Only');
    }
});
