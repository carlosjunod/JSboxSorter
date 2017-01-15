//creating radom objects
var min = 2;
var max = 10;
var boxes = [];

console.log(max);

for (var i = 0; i < radomizeBoxes(min, max); i++) {
    var box = { width: radomizeBoxes(), height: radomizeBoxes(), color: '000', id: i};
    boxes[i] = box;
}

// printing unsorted
var unsortedContainer = document.querySelector('#unsorted');
unsortedContainer.insertAdjacentHTML('beforeend', printer());

// Sorting Boxes
function sortBoxes(){

    boxes.sort(function(a, b) {
      return a.width - b.width;
    });

    // printing sorted
    var sortedContainer = document.querySelector('#sorted');
    sortedContainer.insertAdjacentHTML('beforeend', printer());

    //disable button
    document.querySelector('#organize').disabled = true;

}

// Helpers
function radomizeBoxes(_min, _max){
    _min = _min || 50;
    _max = _max || 600;
    return  Math.random() * (_max - _min) + _min;
}

// to print on the screen
function printer(){

    var toPrint = '';
    boxes.forEach(function(b){
        toPrint += '<div class="box" style="width:'+b.width+'px; height:'+b.height+'px; background-color:#'+b.color+'; border:1px solid #fff">'+b.id+'</div>';
    });
    return toPrint;
}
