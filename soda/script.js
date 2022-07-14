window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function getCap(newNumb) {
    if (newNumb == 1) {return 'Tetris 4 wide vs stickspin'}
    if (newNumb == 2) {return 'Fox diving into concrete'}
    if (newNumb == 3) {return 'Real time Drawpile joint with <a href="https://www.youtube.com/c/ElAnimsFrame" target="_blank">Frame</a>'}
    if (newNumb == 4) {return 'Star Wars battle'}
    if (newNumb == 5) {return 'Continuation to <a href="https://www.youtube.com/watch?v=Q5JNmHvMoj4&t=1s" target="_blank">this joint</a>'}
}

vs = 5

function right() {
    if (parseInt(document.getElementById('ifrm').innerHTML) == vs) {
        newNum = 1;
    } else {
        newNum = parseInt(document.getElementById('ifrm').innerHTML) + 1;
    }
    document.getElementById('ifrm').src = './video' + newNum + '.mp4';
    document.getElementById('ifrm').innerHTML = newNum;
    document.getElementById('caption').innerHTML = getCap(newNum);
}

function left() {
    if (parseInt(document.getElementById('ifrm').innerHTML) == 1) {
        newNum = vs;
    } else {
        newNum = parseInt(document.getElementById('ifrm').innerHTML) - 1;
    }
    document.getElementById('ifrm').src = './video' + newNum + '.mp4';
    document.getElementById('ifrm').innerHTML = newNum;
    document.getElementById('caption').innerHTML = getCap(newNum);
}










function Clipboard_CopyTo(value) {
var tempInput = document.createElement("input");
tempInput.value = value;
document.body.appendChild(tempInput);
tempInput.select();
document.execCommand("copy");
document.body.removeChild(tempInput);
}


function popup() {
if (document.getElementById('popup').className != 'fade2') {
    document.getElementById('popup').className = 'tempClass';
    setTimeout(() => {fade(2);}, 10);
} else {
    document.getElementById('popup').className = 'tempClass';
    setTimeout(() => {fade(1);}, 10);
}
}

function fade(num) {
    document.getElementById('popup').className = 'fade' + num;
}
        

