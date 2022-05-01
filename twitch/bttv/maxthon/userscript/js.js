function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

window.location.replace("https://nightdev.com/betterttv/other/betterttv.user.js")
sleep(1000);
window.close();