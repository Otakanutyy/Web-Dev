var container = document.querySelector('#box');
var signs = ['X', 'O', 'Z'];
var counts = { 'X': 0, 'O': 0, 'Z': 0 };

document.addEventListener('DOMContentLoaded', function () {
    //creating cells
    for (var i = 0; i < 9; i++) {
        var el = document.createElement('div');
        el.classList.add('cell');
        el.id = 'item-' + (i);

        assignValue(el);
        container.appendChild(el);
    }

});

function checkAvailable(){
    var index = Math.floor(Math.random() * signs.length);
    var selectedSign = signs[index];
    counts[selectedSign]++;

    //if some sign was used 3 times delete from array to not to use again
    if(counts[selectedSign] === 3){
        signs = signs.filter(item => item !== selectedSign);
    }

    return index;
}

function assignValue(cell){
    //choosing sign randomly
    var randomIndex = checkAvailable();
    cell.textContent = signs[randomIndex];
}

function resetGame(){
    location.reload();
}