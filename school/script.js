const text = document.getElementById('text')
const r = document.querySelector(':root');



function countdown(seconds) {
  displayTime(seconds);

  var i = 1
  function myLoop() {
    setTimeout(function() {
      displayTime(seconds - i);
      i++;
      if (i <= seconds) {
        myLoop();
      } else {
        calcTimeSincePd();
      }
    }, 1000)
  }

  myLoop();
}

function getPercent(length, total) {
  document.getElementById("bar").style.transitionDuration = "0s";
  percent = (total * 100) / length
  r.style.setProperty('--percent', percent + '%');
  console.log("hi: " + percent)
  setTimeout(() => {
    document.getElementById("bar").style.transitionDuration = total + "s";
    r.style.setProperty('--percent', "0%");
  }, 10)
}

function displayTime(seconds) {
  hrs = Math.floor(seconds / 3600);
  mins = Math.floor(seconds / 60) % 60;
  secs = seconds % 60
  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  text.innerHTML = hrs + ":" + mins + ":" + secs;
}


function calcTimeSincePd(day) {

  date = new Date();
  date2 = new Date();

  // date = new Date('August 19, 1975 00:00:00');
  periodsC = [[0, 00, "No School"]]
  periodsA = [[0, 00, "No School"], [7, 25, "Homeroom"], [7, 40, "French"], [9, 10, "Foundations of Technology"], [10, 40, "Algebra II"], [11, 05, "Lunch"], [11, 30, "Algebra II"], [12, 35, "Gym"], [14, 00, "No School"]]
  periodsB = [[0, 00, "No School"], [7, 25, "Homeroom"], [7, 40, "Band"], [9, 10, "English"], [10, 40, "American Government"], [11, 35, "Lunch"], [12, 00, "American Government"], [12, 35, "Biology"], [14, 00, "No School"]]

  if (date.getDay() == 1 || date.getDay() == 3 || day == "A") {
    periods = periodsA
  } else if (date.getDay() == 5 || date.getDay() == 4 || day == "B") {
    periods = periodsB
  } else if (date.getDay() == 0 || date.getDay() == 6) {
    periods = periodsC
  } else {
    alert('aw i messed up the code somehow')
  }

  dateHrs = date.getHours() * 60 + date.getMinutes();

  period = periods.length - 1;
  for (let i = 0; i < periods.length - 1; i++) {
    if (dateHrs >= 60 * periods[i][0] + periods[i][1] && dateHrs < 60 * periods[i + 1][0] + periods[i + 1][1]) {
      period = i;
    }


  }
  console.log(period)



  date.setSeconds(0)
  date.setMinutes(periods[period][1])
  date.setHours(periods[period][0])
  if (period == periods.length - 1) {
    date2.setSeconds(59)
    date2.setMinutes(59)
    date2.setHours(23)
  } else {
    date2.setSeconds(0)
    date2.setMinutes(periods[period + 1][1])
    date2.setHours(periods[period + 1][0])
  }



  length = Math.floor((date2.getTime() - date.getTime()) / 1000)
  console.log(length)
  distance = Math.floor((Math.floor(new Date().getTime()) - date.getTime()) / 1000)
  console.log(distance)

  remaining = length - distance


  countdown(remaining)
  getPercent(length, remaining);
  document.getElementById('two').innerText = periods[period][2]
}


date = new Date();
if (date.getDay() == 5) {
  document.getElementById('aOrB').style.display = "inline";
  document.getElementsByClassName('innerMain')[0].style.display = "none"
  document.getElementsByClassName('innerMain')[1].style.display = "none"
} else {
  calcTimeSincePd();
}


function setDay(day) {
  document.getElementById('aOrB').style.display = "none";
  document.getElementsByClassName('innerMain')[0].style.display = "inline"
  document.getElementsByClassName('innerMain')[1].style.display = "inline"



  calcTimeSincePd(day);
}

function openMenu() {

  three = document.getElementById('three')
  div = document.getElementById('main2')

  three.innerText = ""

  three.style.backgroundColor = "#689268";
  three.style.height = "200vh"
  three.style.width = "200vw"
  div.style.display = "inline"

  setTimeout(() => {

    document.body.style.backgroundColor = "#689268";

    document.getElementsByClassName('innerMain')[0].style.display = "none"
    document.getElementById('main').style.display = "none";


    div.style.opacity = "1"
  }, 2000)

}

function fillTable() {

  for (let i = 1; i <= 8; i++) {

    var row = document.getElementsByTagName("tr")[1];
    var x = row.insertCell(row.length);
    x.innerHTML = "<span class='tableElem' title ='" + periodsA[i][0] + ":" + periodsA[i][1] + "'>" + periodsA[i][2] + "</span>";

    var row2 = document.getElementsByTagName("tr")[2];
    var x2 = row2.insertCell(row2.length);
    x2.innerHTML = "<span class='tableElem' title ='" + periodsB[i][0] + ":" + periodsB[i][1] + "'>" + periodsB[i][2] + "</span>";
  }
}

fillTable();

