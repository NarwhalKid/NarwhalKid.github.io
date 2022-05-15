function yes() {
  change()
  
}

function no() {
  if (document.getElementById('q').innerHTML == 'NOOO! <img id="D" src="./D.png"> Did you try any methods of holding yourself back (like butterflies, messaging narwhal, or something else)?' || document.getElementById('q').innerHTML == '): Sounds like that didnt help. Will you try a new method next time or try to use the same method more effectively next time?') {
    document.getElementById('q').innerHTML = 'Please try to do that next time ):'
    document.getElementById('stuff').innerHTML = '<img class="center" src="./sad.jpg">'
  } else {
    document.getElementById('q').innerHTML = 'Epic Job! Keep it up :D'
    document.getElementById('stuff').innerHTML = '<img class="center" src="./happy.jpg">'
  }
}

function change() {
  var currentQ = document.getElementById('q').innerHTML
  var currentQ2 = document.getElementById('q')

    if (currentQ == '): Sounds like that didnt help. Will you try a new method next time or try to use the same method more effectively next time?') {
   currentQ2.innerHTML = 'Yay! Thats what we like to hear. Good luck next time :)'
    document.getElementById('stuff').innerHTML = '<img class="center" src="./happy.jpg">'
  }
  
    if (currentQ == 'NOOO! <img id="D" src="./D.png"> Did you try any methods of holding yourself back (like butterflies, messaging narwhal, or something else)?') {
   currentQ2.innerHTML = '): Sounds like that didnt help. Will you try a new method next time or try to use the same method more effectively next time?'
  }
  
  if (currentQ == 'D: Sorry to hear that. Did you yuri today?') {
   currentQ2.innerHTML = 'NOOO! <img id="D" src="./D.png"> Did you try any methods of holding yourself back (like butterflies, messaging narwhal, or something else)?'
  }
  
  if (currentQ == 'Did you have the urge to yuri today?') {
   currentQ2.innerHTML = 'D: Sorry to hear that. Did you yuri today?'
  }
}