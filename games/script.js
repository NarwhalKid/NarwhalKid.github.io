function makeNewGameBox(dispName, link, isIfrm) {

  const newDiv = document.createElement("a");
  newDiv.className = "game"
  newDiv.target = "_blank"
  newDiv.href = link

  const divText = document.createElement("h2");
  divText.innerText = dispName

  newDiv.appendChild(divText);

  // newDiv.onclick = function() {
  //   if (isIfrm == "1") {

  //     document.body.innerHTML = ""

  //     document.querySelectorAll('link[rel="stylesheet"]')
  //       .forEach(el => el.parentNode.removeChild(el)); //clear all css

  //     document.body.style.margin = "0" // remove border

  //     const ifrm = document.createElement("iframe")

  //     ifrm.style.border = "0"
  //     ifrm.style.width = "100vw"
  //     ifrm.style.height = "100vh"
  //     ifrm.style.display = "block"
  //     ifrm.src = link



  //     document.body.appendChild(ifrm)

  //   } else {

  //     window.location.href = link

  //   }

  // };

  document.getElementById('games').appendChild(newDiv)

}

// load games from github js file


games = [["basket random", "./games/basketrandom/", "1"], ["boxing random", "./games/boxingrandom/", "1"], ["bitlife", "./games/bitlife/", "1"], ["flappy bird", "./games/flappybird/", "1"], ["google feud", "./games/googlefeud/", "1"], ["idle breakout", "./games/idlebreakout/", "1"], ["jetpack joyride", "./games/jetpackjoyride/", "1"], ["madalin stunt cars 2", "./games/msc2/", "1"], ["madalin stunt cars 3", "./games/msc3/", "1"], ["papas burgeria", "./games/papasburgeria/", "1"], ["papas pizzaria", "./games/papaspizzaria/", "1"], ["paper.io 2", "./games/paperio2/", "1"], ["retrobowl", "./games/retrobowl/", "1"], ["slope", "./games/slope/", "1"], ["soccer random", "./games/soccerrandom/", "1"], ["super mario 64", "./games/sm64/", "1"], ["stack", "./games/stack/", "1"], ["subway surfers", "./games/subwaysurfers/", "1"], ["superhot", "./games/superhot/", "1"], ["tanuki sunset", "./games/tanukisunset/", "1"], ["temple run 2", "./games/templerun2/", "1"], ["this is the only level", "./games/thisistheonlylevel/", "1"], ["tiny fishing", "./games/tinyfishing/", "1"], ["wolfenstein 3d", "./games/wolf3d/", "1"], ["wordle", "./games/wordle/", "1"], ["volley random", "./games/volleyrandom/", "1"], ["rooftop snipers", "./games/rooftopsnipers/", "1"], ["rooftop snipers 2", "./games/rooftopsnipers2/", "1"], ["crossy road", "./games/crossyroad/", "1"], ["jstris", "./games/jstris/", "1"]]

function loadGames() {
  document.querySelectorAll('.game').forEach((element) => { element.remove() })
  games.forEach((element) => {
    makeNewGameBox(element[0], element[1], element[2])
  })
}

loadGames()



function updateGames(query) {
  if (query == "") {
    loadGames()
  } else {
    loadGames()


    document.querySelectorAll('.game').forEach((element) => {
      if (!element.firstChild.innerText.startsWith(query)) {
        element.remove()
      }
    })


  }
}

// updateGames("1V1")

search = document.getElementById('search')

search.value = "" // clear search on page load

search.addEventListener("input", (event) => {
  updateGames(search.value.toUpperCase())
});

title = document.getElementById('logo-title')

function setLogo() {
  if (document.documentElement.clientWidth < 438) {
    title.innerText = "NKG"
  } else {
    title.innerText = "NarwhalKidGames"
  }
}

setLogo()

window.addEventListener('resize', function(event) {
  setLogo()
}, true);

document.getElementById('search').focus()