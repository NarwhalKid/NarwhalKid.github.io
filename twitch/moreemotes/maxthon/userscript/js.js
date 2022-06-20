function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

window.location.replace("https://www.narwhalkid.com/twitch/moreemotes/ffz_injector.user.js")
sleep(1000);
window.close();