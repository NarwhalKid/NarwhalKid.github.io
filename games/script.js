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


games = [
  ["narwhalgpt", "/chat/"], 
  ["1v1.lol", "./game/1v1lol/"], 
  ["doki doki literature ...", "https://backend.narwhalkid.com/ddlc/"], 
  ["gba games", "/emulators/gba"], 
  ["unrestricted youtube", "https://inv.nadeko.net/feed/popular"], 
  ["papas sushiria", "./game/papassushiria/"], 
  ["this is the only level", "./game/thisistheonlylevel/"],  
  ["this is the only level 2", "./game/thisistheonlyleveltoo/"],
  ["this is the only level 3", "./game/thisistheonlylevelthree/"], 
  ["tennis physics", "./game/tennisphysics/"], 
  ["drift hunters", "./game/drifthunters/"], 
  ["2048Verse", "https://2048verse.com/"], 
  ["minecraft", "./game/minecraft"], 
  ["friday night funkin", "./game/fridaynightfunkin"], 
  ["cookie clicker", "./game/cookieclicker"], 
  ["getaway shootout", "./game/getawayshootout"], 
  ["achievement unlock...", "./game/achievementunlocked"], 
  ["pizza tower", "./game/pizzatower"], 
  ["jump king", "./game/jumpking"], 
  ["basket random", "./game/basketrandom/"],
  ["boxing random", "./game/boxingrandom/"],
  ["bitlife", "./game/bitlife/"],
  ["flappy bird", "./game/flappybird/"],
  ["google feud", "./game/googlefeud/"],
  ["idle breakout", "./game/idlebreakout/"],
  ["jetpack joyride", "./game/jetpackjoyride/"],
  ["madalin stunt cars 2", "./game/msc2/"],
  ["madalin stunt cars 3", "./game/msc3/"],
  ["papas burgeria", "./game/papasburgeria/"],
  ["papas pizzaria", "./game/papaspizzaria/"],
  ["paper.io 2", "./game/paperio2/"],
  ["retrobowl", "./game/retrobowl/"],
  ["retrobowl college", "./game/retrobowlcollege/"],
  ["slope", "./game/slope/"],
  ["soccer random", "./game/soccerrandom/"],
  ["super mario 64", "./game/sm64/"],
  ["stack", "./game/stack/"],
  ["subway surfers", "./game/subwaysurfers/"],
  ["superhot", "./game/superhot/"],
  ["tanuki sunset", "./game/tanukisunset/"],
  ["temple run 2", "./game/templerun2/"],
  ["tiny fishing", "./game/tinyfishing/"],
  ["wolfenstein 3d", "./game/wolf3d/"],
  ["wordle", "./game/wordle/"],
  ["volley random", "./game/volleyrandom/"],
  ["rooftop snipers", "./game/rooftopsnipers/"],
  ["rooftop snipers 2", "./game/rooftopsnipers2/"],
  ["crossy road", "./game/crossyroad/"],
  ["jstris", "./game/jstris/"],
]

function loadGames() {
  document.querySelectorAll('.game').forEach((element) => { element.remove() })
  games.forEach((element) => {
    makeNewGameBox(element[0], element[1])
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
