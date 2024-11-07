const periodsA = [
  [0, 00, "No School"],
  [7, 25, "Homeroom"],
  [7, 40, "Switching Classes"],
  [7, 45, "AP Computer Science A"],
  [9, 10, "Switching Classes"],
  [9, 15, "Advanced Technological Applications"],
  [10, 40, "Switching Classes"],
  [10, 45, "Drawing & Painting"],
  [10, 45, "Lunch"],
  [11, 05, "Drawing & Painting"],
  [12, 30, "Switching Classes"],
  [12, 35, "PE"],
  [14, 00, "No School"]
];
const periodsB = [
  [0, 00, "No School"],
  [7, 25, "Homeroom"],
  [7, 40, "Switching Classes"],
  [7, 45, "English III"],
  [9, 10, "Switching Classes"],
  [9, 15, "AP Computer Science Principles"],
  [10, 40, "Switching Classes"],
  [10, 45, "Earth and Environmental Systems"],
  [12, 05, "Lunch"],
  [12, 30, "Earth and Environmental Systems"],
  [12, 30, "Switching Classes"],
  [12, 35, "US History"],
  [14, 00, "No School"]
];


const text = document.getElementById('text');
const r = document.querySelector(':root');
let menu = 0;
let menuAnim = 0;

function countdown(seconds) {
  displayTime(seconds);

  // Sync the timer to the next second
  const now = new Date();
  const delay = 1000 - (now % 1000); // Get the milliseconds until the next second

  setTimeout(() => {
    const startTime = performance.now(); // Start the timer after syncing to the next second

    function updateTime() {
      const elapsed = Math.floor((performance.now() - startTime) / 1000); // Calculate the elapsed time in seconds
      const remaining = seconds - elapsed;

      displayTime(remaining);

      // If the countdown has finished
      if (remaining <= 0) {
        calcTimeSincePd();
        return;
      }

      // Continue updating every frame
      if (menu === 0) {
        requestAnimationFrame(updateTime);
      }
    }

    // Start the countdown after the delay
    requestAnimationFrame(updateTime);

  }, delay); // Delay until the next second boundary
}

function getPercent(length, total) {
  document.getElementById("bar").style.transitionDuration = "0s";
  const percent = (total * 100) / length;
  r.style.setProperty('--percent', percent + '%');
  console.log("hi: " + percent);
  setTimeout(() => {
    document.getElementById("bar").style.transitionDuration = total + "s";
    r.style.setProperty('--percent', "0%");
  }, 10);
}

function displayTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor(seconds / 60) % 60;
  const secs = seconds % 60;
  const formattedSecs = secs < 10 ? "0" + secs : secs;
  const formattedMins = mins < 10 ? "0" + mins : mins;

  document.title = `${hrs}:${formattedMins}:${formattedSecs}`;
  text.innerHTML = `${hrs}:${formattedMins}:${formattedSecs}`;

  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = `./favicons/${mins}.png`;
}

function calcTimeSincePd(day) {
  const date = new Date();
  const date2 = new Date();

  const periods = document.cookie[4] === "A" ? periodsA : periodsB;
  
  const dateHrs = date.getHours() * 60 + date.getMinutes();

  let period = periods.length - 1;
  for (let i = 0; i < periods.length - 1; i++) {
    if (dateHrs >= periods[i][0] * 60 + periods[i][1] && dateHrs < periods[i + 1][0] * 60 + periods[i + 1][1]) {
      period = i;
    }
  }

  date.setSeconds(0);
  date.setMinutes(periods[period][1]);
  date.setHours(periods[period][0]);

  if (period === periods.length - 1) {
    date2.setHours(23, 59, 59);
  } else {
    date2.setHours(periods[period + 1][0], periods[period + 1][1], 0);
  }

  const length = Math.floor((date2.getTime() - date.getTime()) / 1000);
  const distance = Math.floor((performance.now() - date.getTime()) / 1000);
  const remaining = length - distance;

  countdown(remaining);
  getPercent(length, remaining);
  document.getElementById('two').innerText = periods[period][2];
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  mobile = 1;
  document.getElementById('sched').innerText = "Schedule (Click on a period for times)";
} else {
  mobile = 0;
}

function fillLoop() {
  if (periodsA && periodsB) {
    fillTable();
  } else {
    setTimeout(() => {
      fillLoop();
    }, 100);
  }
}

fillLoop();
