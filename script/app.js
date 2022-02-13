// function questionAscend() {
//     onkeydown
//     var questionPosition = document.querySelector(".main-question-frame");
//     questionPosition.animate()
//     questionPosition.style.bottom = '7%'

//     ])
// }
var treeDirection = "left";

function moneyTreeChecker() {
    if (treeDirection == 1) {
        moneyTreeMoverLeft();
    } else {
        moneyTreeMoverRight();
    }
}

function moneyTreeMover() {
  let id = null;
  const elem = document.querySelector(".money-tree");
  let pos = 0;
  if (treeDirection == "left") {
    document.querySelector(".money-tree-arrow").innerHTML = "<i class='fa solid fa-angles-right'></i>";
    treeDirection = "right";
    pos = 100;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 78) {
        clearInterval(id);
      } else {
        pos--;
        elem.style.left = pos + "%";
      }
    };
  } else {
    pos = 78;
    document.querySelector(".money-tree-arrow").innerHTML = "<i class='fa solid fa-angles-left'></i>";
    treeDirection = "left";
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 100) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + "%";
      };
    
    }
  }
};