function makeNewGameBox(dispName, link) {
  const newDiv = document.createElement("a");
  newDiv.className = "game"
  newDiv.target = "_blank"
  newDiv.href = link

  const divText = document.createElement("h2");
  divText.innerText = dispName

  newDiv.appendChild(divText);

  document.getElementById('games').appendChild(newDiv)
}

if (!localStorage.getItem("popup")) {
  localStorage.setItem("popup", "true");
  alert("Hey guys! It's Narwhal. Sorry I haven't added any new games recently, I've been focusing on updates for my other website: 2048Verse. Thanks to everyone who plays my games, it's pretty cool to see so many people using my site. I could've easily added ads or whatever to the site but I hate school and I wanted to make it easier for people to play games at school. But yeah, just wanted you guys to know I'm not dead, I just have a life now lol\n\nTL;DR: I'm not dead");
}

games = [
  ["2048Verse", "https://2048verse.com/"], 
  ["2048Verse alt link", "https://2048verse.narwhalkid.com/"], 
  ["narwhalgpt", "/chat/"],
  ["1v1.lol", "./game/1v1lol/", true], 
  ["balatro", "https://backend.narwhalkid.com/balatro"], 
  ["dungeons and degenerate gamblers", "https://backend.narwhalkid.com/dndg"], 
  ["doki doki literature club", "https://backend.narwhalkid.com/ddlc/"], 
  ["movies, tv, & anime", "./game/streaming/"], 
  ["minesweeper", "./game/minesweeper/", true], 
  ["gladihoppers", "./game/gladihoppers/"], 
  // ["super smash flash", "./game/supersmashflash"],
  // ["crazy cattle 3d", "./game/crazycattle3d"], 
  ["the binding of isaac", "./game/bindingofisaac"], 
  ["minecraft", "./game/minecraft"], 
  ["clicker heroes", "./game/clickerheroes/"],
  ["retro bowl", "./game/retrobowl/"],
  ["retro bowl college", "./game/retrobowlcollege/"],
  // ["unrestricted youtube", "https://inv.nadeko.net/feed/popular"], 
  ["funny shooter 2", "./game/funnyshooter2/"], 
  ["sort the court", "./game/sortthecourt/"], 
  ["geometry dash", "./game/gd/"], 
  ["world's hardest game", "./game/worldshardestgame/"], 
  ["plants vs zombies", "./game/pvz/"], 
  ["pokemon showdown", "./game/pokemonshowdown/", true], 
  ["super mario bros", "./game/mario/"], 
  ["sandtris", "./game/sandtris/"], 
  // ["doom", "./game/doom/"],  
  ["tube jumpers", "./game/tubejumpers/"], 
  ["tileman.io", "./game/tilemanio/", true], 
  ["highway racer 2", "./game/highwayracer2/"], 
  ["gun mayhem", "./game/gunmayhem/"], 
  ["higher lower", "./game/higherlower/", true], 
  ["papa's pastaria", "./game/papaspastaria/"], 
  ["papa's donutria", "./game/donutria/"], 
  ["papa's bakeria", "./game/papasbakeria/"], 
  ["papa's sushiria", "./game/papassushiria/"], 
  ["papa's taco mia", "./game/papastacomia/"], 
  ["papa's freezeria", "./game/papasfreezeria/"], 
  ["pokemon tower defense", "./game/ptd/"],  
  ["plant daddy", "./game/plantdaddy/"],  
  ["this is the only level", "./game/thisistheonlylevel/"],  
  ["this is the only level 2", "./game/thisistheonlyleveltoo/"],
  // ["this is the only level 3", "./game/thisistheonlylevelthree/"], 
  ["tennis physics", "./game/tennisphysics/"], 
  ["drift hunters", "./game/drifthunters/"], 
  ["friday night funkin", "./game/fridaynightfunkin"], 
  ["cookie clicker", "./game/cookieclicker"], 
  ["getaway shootout", "./game/getawayshootout"], 
  ["achievement unlocked", "./game/achievementunlocked"], 
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
  ["papa's burgeria", "./game/papasburgeria/"],
  ["papa's pizzaria", "./game/papaspizzaria/"],
  ["paper.io 2", "./game/paperio2/"],
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

let proxyEnabled = false;

async function checkWebsite(url) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });

    if (response.ok) {
        proxyEnabled = true;
    } else {
        proxyEnabled = false;
    }
  } catch (error) {
    proxyEnabled = false;
  } finally {
    loadGames();
  }
}

if (typeof(proxyBase) != "undefined") {
  checkWebsite(proxyBase);
} else {
  loadGames();
}

function loadGames() {
  document.querySelectorAll('.game').forEach((element) => { element.remove() })
  games.forEach((element) => {
    if(!!element[2] && !proxyEnabled) {
      return;
    }
    makeNewGameBox(element[0], element[1])
  })
}


function updateGames(query) {
  loadGames();
  if (query != "") {
    document.querySelectorAll('.game').forEach((element) => {
      if (!element.firstChild.innerText.includes(query)) {
        element.remove()
      }
    })
  }
}

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
