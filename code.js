const container = document.querySelector('#container');

function makeDivs(rows, cols) {
    container.innerHTML = "";
    container.style.setProperty('grid-template-rows', 'repeat(' + rows + ', 1fr)');
    container.style.setProperty('grid-template-columns', 'repeat(' + cols + ', 1fr)');
    let multiplier = 2;
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = '';
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener ('mouseover', (event) => {
            let target = event.target;
            //
            let rbgPercentValue = parseInt(target.dataset.percent);
                    multiplier += 0.1;
            //
            if (isNaN(rbgPercentValue)) rbgPercentValue = 100;
            if (rbgPercentValue >= 10) {
                rbgPercentValue -= 10;
                target.dataset.percent = rbgPercentValue;
                console.log (multiplier)
            }
            // rgb (red, green, blue)
            let rgbColor = `rgb(${rbgPercentValue * multiplier}%,${rbgPercentValue}%,${rbgPercentValue}%)`;
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
