//creating radom objects
var min = 2;
var max = 10;
var boxes = [];

for (var i = 0; i < radomizeBoxes(min, max); i++) {
    var box = { width: radomizeBoxes(), height: radomizeBoxes(), color: '000'};
    boxes[i] = box;
}

function radomizeBoxes(_min, _max){
    _min = _min || 50;
    _max = _max || 500;
    return  Math.random() * (_max - _min) + _min;
}

var toPrint = '';
boxes.forEach(function(b){
    toPrint += '<div style="width:'+b.width+'px; height:'+b.height+'px; background-color:#'+b.color+'; border:1px solid #fff"></div>';
    console.log(toPrint);
});

var unsortedContainer = document.querySelector('#unsorted');
unsortedContainer.insertAdjacentHTML('beforeend', toPrint);
