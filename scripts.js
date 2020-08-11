var resetButton = document.getElementById("Reset");
var clearButton = document.getElementById("Clear");
var greyButton = document.getElementById("Grey");
var randButton = document.getElementById("Rand");

var colorsChoose;

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function createRow() {
    var element = document.getElementById("Grid");
    var row = document.createElement("div");
    row.setAttribute("id", "row");
    element.appendChild(row);
    return row;
}

function createCell(row, i, j) {
    var cell = document.createElement("div");
    cell.setAttribute("name", "cell");
    cell.setAttribute("id", "cell");
    cell.setAttribute("onmouseover", "generateColor(this)");
    cell.style.border = "1px solid black";
    row.appendChild(cell);
}

function generateColor(x) {
    console.log(colorsChoose)
    if (colorsChoose == "greyscale") {
        var randomColor;
        switch(x.style.backgroundColor)
        {
            case "rgb(24, 24, 24)":
                break;
            case "rgb(48, 48, 48)":
                randomColor = "rgb(24,24,24)"
                break;
            case "rgb(88, 88, 88)":
                randomColor = "rgb(48,48,48)"
                break;
            case "rgb(128, 128, 128)":
                randomColor = "rgb(88,88,88)"
                break;
            case "rgb(192, 192, 192)":
                randomColor = "rgb(128,128,128)"
                break;
            default:
                randomColor = "rgb(192,192,192)"
                break;
        }
    }
    else {
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    console.log(x.style.backgroundColor)
    x.style.backgroundColor = randomColor;
}

function createGrid(numRows) {
    // We set the rows = cols because is a symmetric table

    var element = document.getElementById("Grid");
    var grid = document.createElement("div");
    grid.setAttribute("name", "Grid");
    grid.setAttribute("id", "Grid");
    document.body.appendChild(grid);

    let numCols = numRows;
    for(let i = 0; i < numRows; i++) {
        let row = createRow();
        for(let j = 0; j < numCols; j++) {
            createCell(row, i, j);
        }
    }
}

clearButton.addEventListener('click', () => {
    var cell = document.getElementsByName("cell");
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.backgroundColor = "#ffffff";
    }
})

resetButton.addEventListener('click', () => {
    var prompt = window.prompt("Please the grid size [0, 100]");
    console.log(typeof(prompt))
    if(prompt == null) {
        return;
    }
    else if(prompt.length <= 0 || isNaN(prompt)) {
        return;
    }
    else if (parseInt(prompt) >= 0 && parseInt(prompt) <= 100) {
        var element = document.getElementById("Grid");
        element.remove()
        createGrid(parseInt(parseInt(prompt)));
    }
})

randButton.addEventListener('click', () => {
    colorsChoose = "default";
})

greyButton.addEventListener('click', () => {
    colorsChoose = "greyscale";
})

createGrid(20);
