/**
 * Random number generator between given minimum and maximum
 * Both values are included Ex.: genRandom(0, 10) gives random between 0 and 10
 * @param {number} min - Minimum value (included)
 * @param {number} max - Maximum value (included)
 */
function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/**
 * Returns the length of an object
 * @param {object} obj - Object to read the length of
 */
function length(obj) {
    return Object.keys(obj).length
}

/**
 * Changes the colors to the generated values
 * @param {array} currentColor - Array containing the colors to be used. Can contain either 2 or 3 colors
 */
function setColor(currentColor) {
    let header = document.getElementById('pageheader');

    if (currentColor.length === 2) {
        header.style.background = 'linear-gradient(to right, ' + currentColor[0] + ', ' + currentColor[1] + ')';
    }
    else if (currentColor.length === 3) {
        header.style.background = 'linear-gradient(to right, ' + currentColor[0] + ', ' + currentColor[1] + ', ' + currentColor[2] + ')';
    }
}

/** Object with all the gradients.
 * Gradients obtained from https://uigradients.com */
let data = {
    "gradients": [
        { "name": "By Design", "colors": ["#009FFF", "#ec2F4B"] },
        { "name": "Rainbow Blue", "colors": ["#00F260", "#0575E6"] },
        { "name": "Crystal Clear", "colors": ["#159957", "#155799"] },
        { "name": "Chitty Chitty Bang Bang", "colors": ["#007991", "#78ffd6"] },
        { "name": "Mini", "colors": ["#30E8BF", "#FF8235"] },
        { "name": "Can You Feel The Love Tonight", "colors": ["#4568DC", "#B06AB3"] },
        { "name": "Ibiza Sunset", "colors": ["#ee0979", "#ff6a00"] },
        { "name": "Ali", "colors": ["#ff4b1f", "#1fddff"] },
        { "name": "Hazel", "colors": ["#77a1d3", "#79cbca", "#e684ae"] },
        { "name": "Metapolis", "colors": ["#659999", "#f4791f"] },
        { "name": "Wedding Day Blues", "colors": ["#40E0D0", "#FF8C00", "#FF8C00"] },
        { "name": "Vice City", "colors": ["#3494E6", "#3494E6"] },
    ]
}

let gradients = data.gradients;
let col = gradients[genRandom(0, length(gradients))].colors;
setColor(col);

