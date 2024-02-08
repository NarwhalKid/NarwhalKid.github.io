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


games = [["basket random", "./game/basketrandom/", "1"], ["boxing random", "./game/boxingrandom/", "1"], ["bitlife", "./game/bitlife/", "1"], ["flappy bird", "./game/flappybird/", "1"], ["google feud", "./game/googlefeud/", "1"], ["idle breakout", "./game/idlebreakout/", "1"], ["jetpack joyride", "./game/jetpackjoyride/", "1"], ["madalin stunt cars 2", "./game/msc2/", "1"], ["madalin stunt cars 3", "./game/msc3/", "1"], ["papas burgeria", "./game/papasburgeria/", "1"], ["papas pizzaria", "./game/papaspizzaria/", "1"], ["paper.io 2", "./game/paperio2/", "1"], ["retrobowl", "./game/retrobowl/", "1"], ["slope", "./game/slope/", "1"], ["soccer random", "./game/soccerrandom/", "1"], ["super mario 64", "./game/sm64/", "1"], ["stack", "./game/stack/", "1"], ["subway surfers", "./game/subwaysurfers/", "1"], ["superhot", "./game/superhot/", "1"], ["tanuki sunset", "./game/tanukisunset/", "1"], ["temple run 2", "./game/templerun2/", "1"], ["this is the only level", "./game/thisistheonlylevel/", "1"], ["tiny fishing", "./game/tinyfishing/", "1"], ["wolfenstein 3d", "./game/wolf3d/", "1"], ["wordle", "./game/wordle/", "1"], ["volley random", "./game/volleyrandom/", "1"], ["rooftop snipers", "./game/rooftopsnipers/", "1"], ["rooftop snipers 2", "./game/rooftopsnipers2/", "1"], ["crossy road", "./game/crossyroad/", "1"], ["jstris", "./game/jstris/", "1"]]

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
