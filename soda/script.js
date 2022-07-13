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


function right() {
    var video = document.getElementById('ifrm');
    var cap = document.getElementById('caption');
    if (video.innerHTML == '1') {
        video.src = './video2.mp4';
        video.innerHTML = '2';
        cap.innerText = 'Fox diving into concrete';
    } else if (video.innerHTML == '2') {
        video.src = './video3.mp4';
        video.innerHTML = '3';
        cap.innerHTML = 'Real time Drawpile joint with <a href="https://www.youtube.com/c/ElAnimsFrame">Frame</a>';
    } else if (video.innerHTML == '3') {
        video.src = './video1.mp4';
        video.innerHTML = '1';
        cap.innerText = 'Tetris 4 wide vs stickspin';
    }
}

function left() {
    var video = document.getElementById('ifrm');
    var cap = document.getElementById('caption');
    if (video.innerHTML == '1') {
        video.src = './video3.mp4';
        video.innerHTML = '3';
        cap.innerHTML = 'Real time Drawpile joint with <a href="https://www.youtube.com/c/ElAnimsFrame">Frame</a>';
    } else if (video.innerHTML == '2') {
        video.src = './video1.mp4';
        video.innerHTML = '1';
        cap.innerText = 'Tetris 4 wide vs stickspin';
    } else if (video.innerHTML == '3') {
        video.src = './video2.mp4';
        video.innerHTML = '2';
        cap.innerText = 'Fox diving into concrete';
    }
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
        

