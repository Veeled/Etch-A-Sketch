const container = document.querySelector('#container')

// from https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
function makeDivs(rows, cols) {
     //Creating a custom CSS property name '--grid-..'. Value is set by the variables: can be used to change the number of rows/columns in a grid
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    //Loop which only runs until it reaches the multiplied value of makeDivs. Starting value is set by innerText
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = ''//(c + 1)  
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener ('mouseover', (event) => {

        let target = event.target
        let rbgPercentValue = parseInt(target.dataset.percent);
        if (isNaN(rbgPercentValue)) rbgPercentValue = 100;
        if (rbgPercentValue >= 10) {
        rbgPercentValue -= 10;
        target.dataset.percent = rbgPercentValue;
    }
        let rgbColor = `rgb(${rbgPercentValue}%,${rbgPercentValue}%,${rbgPercentValue}%)`
    
        if (target !== container) {
            target.style['background'] = rgbColor;
        }
    

            //event.target.style.color = 'orange';
            //setTimeout(() => {
               // event.target.style.color = ""
            //}, 500);
        }, false);
    };
};
makeDivs(16, 16)


