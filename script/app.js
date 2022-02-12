// function questionAscend() {
//     onkeydown
//     var questionPosition = document.querySelector(".main-question-frame");
//     questionPosition.animate()
//     questionPosition.style.bottom = '7%'

//     ])
// }
var treeDirection = 1;

function moneyTreeChecker() {
    if (treeDirection == 1) {
        moneyTreeMoverLeft();
    } else {
        moneyTreeMoverRight();
    }
}

function moneyTreeMoverLeft() {
    treeDirection += 1;
    let id = null;
    const elem = document.querySelector(".money-tree");  
    let pos = 99;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 78) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + "%"; 
      }
    }
};

function moneyTreeMoverRight() {
    treeDirection -= 1;
    let id = null;
    const elem = document.querySelector(".money-tree");  
    let pos = 78;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 97) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + "%"; 
      }
    }
};