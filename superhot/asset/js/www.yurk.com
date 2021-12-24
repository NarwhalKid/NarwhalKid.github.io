<!DOCTYPE html>
<html lang=en>

<head>

    <script async src="assets/scripts/consent.js"></script>

    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1" name=viewport>
    <link rel="canonical" href="https://www.yurk.com/" />
    <title>Yurk.com : Great Games Without The Fuss!</title>
    <meta content="Visit yurk.com to play great games such as Mr. Bullet, Rio Rex, Steve's World, The Right Mix, Pixel Force, Fall Beans ...and many more!" name=description>

    <link rel="preload" href="assets/fonts/yurkFont.ttf" as="font" type="font/ttf" crossorigin>


    <!-- <link rel="preload" href="assets/fonts/yurkFont.ttf" as="font" type="font/woff2" crossorigin> -->


    <link rel="apple-touch-icon" sizes="180x180" href="/assets/gfx/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/gfx/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/gfx/icons/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/assets/gfx/icons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="theme-color" content="#ffffff">

    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yurk",
            "url": "https://www.yurk.com/",
            "logo": "https://www.yurk.com/assets/gfx/yurkLogoGoldMin.svg"
        }

    </script>

    <style>
        @font-face {
            font-family: yurkFont;
            font-display: swap;
            src: url(assets/fonts/yurkFont.ttf);
        }

        body,
        html {
            margin: 0;
            background: navy;
            background: linear-gradient(navy, teal);
            text-align: center;
            font-size: 1vmax;
            font-family: yurkFont, arial, helvetica, sans-serif;
            color: white;
            text-shadow: 0.3vmax 0.3vmax 0.3vmax rgba(0, 0, 0, 0.5);
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        }

        a {
            color: skyblue;
            text-decoration: none;
            transition: 1s;
        }

        a:link {
            color: skyblue;
        }

        a:visited {
            color: dodgerBlue;
        }

        a:hover {
            color: lemonChiffon;
        }

        a:active {
            color: lemonChiffon;
        }

        #welcome {
            padding: 2vmax;
        }

        #joke,
        #jokeAnswer {
            color: yellow;
            background-color: fireBrick;
            cursor: pointer;
            font-size: 3vmax;
            padding: 1vmax;
            margin-left: 1vw;
            margin-right: 1vw;
            box-shadow: 0.5vmax 0.5vmax 0.5vmax rgba(0, 0, 0, 0.4);
        }

        #joke {
            border-radius: 1vmax 1vmax 0 0;
            margin-top: 15vh;
        }

        #jokeAnswer {
            border-radius: 0 0 1vmax 1vmax;
            margin-bottom: 2vh;
            padding-top: 0;
        }

        #riddle,
        #riddleAnswer {
            border-radius: 1vmax 1vmax 0 0;
            color: yellow;
            background-color: darkGreen;
            cursor: pointer;
            font-size: 3vmax;
            padding: 1vmax;
            margin-left: 1vw;
            margin-right: 1vw;
            box-shadow: 0.5vmax 0.5vmax 0.5vmax rgba(0, 0, 0, 0.4);
        }

        #riddleAnswer {
            border-radius: 0 0 1vmax 1vmax;
            margin-bottom: 2vh;
            padding-top: 0;
        }

        #funFact {
            border-radius: 1vmax 1vmax 1vmax 1vmax;
            color: yellow;
            background-color: darkBlue;
            font-size: 3vmax;
            margin-bottom: 10vh;
            padding: 1vmax;
            margin-left: 1vw;
            margin-right: 1vw;
            box-shadow: 0.5vmax 0.5vmax 0.5vmax rgba(0, 0, 0, 0.4);
        }

        #gamesBlockHeader {
            letter-spacing: 1vw;
            font-size: 3vmax;
            padding: 1vh 1vw 0.7vh 1vw;
        }

        .blink {
            animation: blink 0.1s steps(5, start) infinite;
        }

        @keyframes blink {
            to {
                visibility: hidden;
            }
        }

        #gamesBlockFooter {
            font-size: 3vmax;
            padding: 1vw;
            padding-top: 100vh;
        }

        #gamesBlock {
            margin: 0 0 15vh 0;
            overflow: hidden;
            padding-bottom: 2vh;
            opacity: 0;
        }

        .gameIconContainer {
            display: inline-block;
            position: relative;
            overflow: hidden;
            font-size: 25px;
            text-align: center;
            color: white;
            border-style: outset;
            border-width: 8px;
            border-color: lightSkyBlue dodgerBlue royalBlue #ddf;
            border-radius: 20px;
            box-shadow: 0.5vmax 0.5vmax 0.5vmax rgba(0, 0, 0, 0.4);
            text-shadow: none;
            width: 360px;
            height: 100px;
            margin: 3px 5px 3px 5px;
            background-color: lightSeaGreen;
        }

        .gameIconContainer:hover {
            border-color: #ddf lightSkyBlue dodgerBlue white;
        }

        /* for very small mobile screens */
        @media only screen and (max-width: 320px) {
            .gameIconContainer {
                width: 288px;
                height: 80px;
            }

            #logo {
                width: 100vw;
                height: 25vw;
            }
        }

        .gameIcon {
            image-rendering: pixelated;
            image-rendering: crisp-edges;
            transition: 1s;
        }

        .gameIcon:hover {
            filter: brightness(150%);
        }

        .gameIconName {
            position: absolute;
            width: 80%;
            left: 10%;
            bottom: 15%;
            background-color: rgba(0, 0, 0, 0.4);
            color: lightgoldenrodyellow;
            border-radius: 0.5vmax;
            pointer-events: none;
            line-height: 100%;
        }

        #menuBar {
            position: relative;
            /* background: rgba(0, 0, 0, 0.5); */
            padding: 0.2vmax;
            margin: 1vh 0 1vh 0;
            opacity: 0;
        }

        #menuBarCover {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }

        .menuBarItem {
            display: inline-block;
            font-size: 1.5vmax;
            background: linear-gradient(179deg, white 0%, white 5%, dodgerBlue 15%, royalBlue 50%, royalBlue 70%, navy 90%, navy 100%);
            border-radius: 1vmax;
            margin: 0.2vmax;
            padding: 0.5vmax;
            cursor: pointer;
            transition: filter 1s;
            box-shadow: 0.5vmax 0.5vmax 0.5vmax rgba(0, 0, 0, 0.4);
        }

        .menuBarItem:hover {
            filter: hue-rotate(-50deg);
        }

        @media screen and (orientation:portrait) {
            #menuBar {
                display: none;
            }
        }

        #results {
            padding-bottom: 1vh;
            font-size: 1.6vmax;
            color: yellow;
        }

        #logo {
            display: inline-block;
            margin: 20px 0 20px 0;
            width: 60vw;
            height: 15vw;
            /* transition: 2s; causes judder*/
            animation: shake 0.5s 20s cubic-bezier(0.36, 0.07, 0.19, 0.97);
        }

        @media screen and (orientation:portrait) {
            #logo {
                width: 96vw;
                height: 24vw;
            }
        }

        @keyframes shake {

            10%,
            90% {
                transform: translate3d(-1px, -1px, 0);
                filter: hue-rotate(360deg)
            }

            20%,
            80% {
                transform: translate3d(2px, 1px, 0);
            }

            30%,
            50%,
            70% {
                transform: translate3d(-4px, -3px, 0);
            }

            40%,
            60% {
                transform: translate3d(4px, 3px, 0);
                filter: hue-rotate(0deg)
            }
        }

        #adSection {
            background: rgba(0, 0, 0, 0.5);
            padding-bottom: 1vh;
            margin-bottom: 2vh;
            box-shadow: 0.5vmax 0.5vmax 0.5vmax rgba(0, 0, 0, 0.4);
            min-height: 322px;
            /* hopefully help with cls */
        }

        #adText {
            font-size: calc(10px + 0.7vmax);
            margin: 0;
            padding: 1vh 0 0.5vh 0;
            letter-spacing: 1vmax;
        }

        .changeConsent {
            cursor: pointer;
        }

        #footerImage {
            background-size: cover;
            background-image: url("assets/gfx/footerBackground1Min.svg");
            width: 100%;
            height: 100vw;
        }

        #footerText {
            font-size: 2vmax;
            background-image: linear-gradient(#555577, #333355);
            padding: 3vh 0 3vh 0;
        }

        #debugPanel {
            display: none;
            text-align: left;
            padding: 5px;
            font-family: "Courier New", Courier, monospace;
            color: white;
            font-size: 20px;
            background-color: red;
        }

        .hide {
            display: none;
        }

        #catNW,
        #catAD,
        #catCR,
        #catDR,
        #catMP,
        #catXM,
        #catHW {
            display: none;
        }

    </style>

    <script>
        var adBlockActive = true;

    </script>
    <script src="assets/scripts/300x250.js"></script>







    <!--

    -->

    <script async src="https://www.googletagmanager.com/gtag/js"></script>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>










</head>

<body>

    <div id=logoContainer></div>

    <div id=adSection>
        <p id=adText></p>

        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-0813719552929704" data-ad-slot="2186186356" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});

        </script>
    </div>



    <h1 id=gamesBlockHeader></h1>

    <main id=menuBar>
        <div id=menuBarCover></div>
        <div class=menuBarItem id=catAZ onclick="showGames('-');">All A-Z</div>
        <div class=menuBarItem id=catAC onclick="showGames('ac');">Action</div>
        <div class=menuBarItem id=catAD onclick="showGames('ad');">Adventure</div>
        <div class=menuBarItem id=catCO onclick="showGames('co');">Combat</div>
        <div class=menuBarItem id=catCR onclick="showGames('cr');">Creative</div>
        <div class=menuBarItem id=catDR onclick="showGames('dr');">Dressup</div>
        <div class=menuBarItem id=catJB onclick="showGames('jb');">Jobs</div>
        <div class=menuBarItem id=catMS onclick="showGames('ms');">Motorsport</div>
        <div class=menuBarItem id=catMP onclick="showGames('mp');">Multiplayer</div>
        <div class=menuBarItem id=catPL onclick="showGames('pl');">Platform</div>
        <div class=menuBarItem id=catPZ onclick="showGames('pz');">Puzzle</div>
        <div class=menuBarItem id=catSH onclick="showGames('sh');">Shooting</div>
        <div class=menuBarItem id=catSP onclick="showGames('sp');">Sport</div>
        <div class=menuBarItem id=catST onclick="showGames('st');">Strategy</div>
        <div class=menuBarItem id=catRT onclick="showGames('rt');">Retro</div>
        <div class=menuBarItem class=hide id=catXM onclick="showGames('xm');">Xmas</div>
        <div class=menuBarItem class=hide id=catHW onclick="showGames('hw');">Halloween</div>
        <div class=menuBarItem id=catNW onclick="showGames('nw');">New</div>
    </main>

    <main id="gamesBlock"></main>
    <div id=gamesBlockFooter></div>

    <div id=joke onclick="showJokeAnswer()"></div>
    <div id=jokeAnswer onclick="showJokeAnswer()">Click for the answer!</div>
    <div id=riddle onclick="showRiddleAnswer()"></div>
    <div id=riddleAnswer onclick="showRiddleAnswer()">Click for the answer!</div>
    <div id=funFact></div>

    <div id=footerImage></div>
    <div id=footerText>
        <p><a href="privacy.html" target="_blank">&nbsp;&nbsp;Privacy&nbsp;And&nbsp;Cookie&nbsp;Consent&nbsp;Policy</a>&nbsp;&nbsp; &nbsp;&nbsp;<a class="changeConsent" onclick="googlefc.callbackQueue.push(googlefc.showRevocationMessage)">Manage&nbsp;Or&nbsp;Revoke&nbsp;Cookie&nbsp;Consents&nbsp;&nbsp;</a></p>
        <p>Copyright&nbsp;&copy;&nbsp;2014-<span id=copyrightYear>onwards</span>. All&nbsp;rights&nbsp;reserved. Yurk&nbsp;is&nbsp;a&nbsp;trademark.</p>
        <div id=debugPanel></div>
        <!-- First use as a games site recorded 18th December 2014 - https://web.archive.org/web/20141218161823/http://yurk.com/ -->
    </div>






    <script>
        'use strict';

        //////// INITIALISATIONS v0.5
        /////////////////////////////
        var varsGS = {
            version: "v0.1",
            debug: false,
            siteName: "yurk.com",
            siteURL: "https://www.yurk.com/",
            analyticsID: "UA-3596694-42",
            os: "Other",
            gestureType: "Click", //default
            touchDevice: false,
            userAgent: (navigator.userAgent || navigator.vendor || window.opera).toLowerCase(),
            shortLang: navigator.language.toLowerCase().slice(0, 2),
            pageViews: -1,
            recordPageViews: true
        };


        logoContainer.innerHTML = "<img id=logo src=assets/gfx/yurkLogoGoldMin.svg alt=Yurk>";


        //////// GET USER OS v1.1
        /////////////////////////
        function getOperatingSystem() {
            if (/android/i.test(varsGS.userAgent)) {
                return "a";
            }
            if (/ipad|iphone|ipod/.test(varsGS.userAgent) && !window.MSStream) {
                return "ios";
            }
            if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) { //newer iPads
                return "ios";
            }
            return "dt"; //desktop
        }

        varsGS.os = getOperatingSystem();

        if (varsGS.os == "a" || varsGS.os == "ios") {
            varsGS.touchDevice = true;
            varsGS.gestureType = "Tap";
        }

        var androidVersion = 0;
        if (varsGS.userAgent.indexOf("android") > -1) {
            androidVersion = parseFloat(varsGS.userAgent.slice(varsGS.userAgent.indexOf("android") + 8));
        }

        function getAndroidVersion() {
            var match = varsGS.userAgent.toLowerCase().match(/android\s([0-9\.]*)/i);
            return match ? parseInt(match[1], 10) : false;
        };

        var androidVersionTruncated = getAndroidVersion();

        if (varsGS.os == "a") {

            if (androidVersionTruncated <= 8) {
                varsGS.os += "l"; //low
            }

            if (androidVersionTruncated >= 9 && androidVersionTruncated <= 10) {
                varsGS.os += "m"; //medium
            }

            if (androidVersionTruncated >= 11) {
                varsGS.os += "h"; //high
            }

            //alert(varsGS.userAgent);
            //alert("Android version: " + androidVersion);

        }


        //////// MULTI LANGUAGE TEXT
        ////////////////////////////
        var textMenuGS = {
            thankyou: "Thank you!",
            noAdsPromo1: "What's extra nice about yurk.com? There are no advert interruptions in any of our games. We'll never make you sit through a video.",
            moreGamesDesktop: "You'll see LOTS more games if you play on a desktop computer, so check them out!",
            tryOnTouch: "Many of these games also work on phones and tablets, so check them out!",
            advertisement: "Advertisement",
            topWelcome: "Welcome to " + varsGS.siteName + "! Here we have xx great games for you.",
            loadingGames: "Loading games",
            gamesFound: "xx games found.",
            gameFound: "1 game found.",
            allAZ: "All A-Z",
            action: "Action",
            adventure: "Adventure",
            combat: "Combat",
            creative: "Creative",
            dressup: "Dressup",
            halloween: "Halloween",
            jobs: "Jobs",
            motorsport: "Motorsport",
            multiplayer: "Multiplayer",
            platform: "Platform",
            puzzle: "Puzzle",
            shooting: "Shooting",
            sport: "Sport",
            strategy: "Strategy",
            retro: "Retro",
            xmas: "Xmas",
            new: "New"
        };







        //////// POPULATE TEXT DIVS
        ///////////////////////////
        adText.innerHTML = (textMenuGS.advertisement).toUpperCase();
        if (varsGS.touchDevice) {
            gamesBlockFooter.innerHTML = textMenuGS.noAdsPromo1 + "<br>" + textMenuGS.moreGamesDesktop;
        } else {
            gamesBlockFooter.innerHTML = textMenuGS.noAdsPromo1 + "<br>" + textMenuGS.tryOnTouch;
        }


        catAZ.innerHTML = textMenuGS.allAZ;
        catAC.innerHTML = textMenuGS.action;
        catAD.innerHTML = textMenuGS.adventure;
        catCO.innerHTML = textMenuGS.combat;
        catCR.innerHTML = textMenuGS.creative;
        catDR.innerHTML = textMenuGS.dressup;
        catHW.innerHTML = textMenuGS.halloween;
        catJB.innerHTML = textMenuGS.jobs;
        catMS.innerHTML = textMenuGS.motorsport;
        catMP.innerHTML = textMenuGS.multiplayer;
        catPL.innerHTML = textMenuGS.platform;
        catPZ.innerHTML = textMenuGS.puzzle;
        catSH.innerHTML = textMenuGS.shooting;
        catSP.innerHTML = textMenuGS.sport;
        catST.innerHTML = textMenuGS.strategy;
        catRT.innerHTML = textMenuGS.retro;
        catXM.innerHTML = textMenuGS.xmas;
        catNW.innerHTML = textMenuGS.new;




        //dt-desktop (tc-mobile) === ac-Action co-Combat jb-Jobs hw-Halloween ms-Motorsport mp-Multiplayer nw-New pl-Platform pz-Puzzle rt-Retro rp-RPG sh-Shooting sp-Sport st-Strategy xm-Xmas=== ls-Landscape pt-Portrait
        //misc-for-uncategortized?
        //ad-Adventure cr-Creative du-Dressup fo-Food



        /////////////////////////////////////////////
        // CHECK FOR MOBILE, SHOW WARNING, ANALYTICS
        /////////////////////////////////////////////

        var games = [
            "Mr-Bullet,dt-ios-al-am---ac-co-sh---ls",
            "Moto-X3M,dt-al-am-ah---ac-ms---ls", //needs ios fix
            "Mafia-Wars,dt-ios-al-am-ah---ac-co-sh---ls",
            "Steve's-World,dt-ios-al-am-ah---ac-pl-rt---ls",
            "Pull-The-Pin,dt-ios-al-am-ah---pz---ls",
            "Truck-Loader-4,dt---pz-jb---ls",
            "Eggy-Car,dt-ios-al-am-ah---ac-ms---ls",
            "Extreme-Car-Parking,dt-ios-al-am-ah---ms---ls",
            "Monster-Truck-Soccer,dt-ios-al-am-ah---ac-sp-ms---ls",
            "Soccer-Online,dt-ios-al-am-ah---ac-sp---ls",
            "Street-Pursuit,dt-ios-al-am-ah---ac-ms---ls",
            "Stick-Running,dt-ios-al-am-ah---ac-pl---ls",
            "Rio-Rex,dt---ac-co-pl---ls",
            "Mortar-Madness,dt---ac-co-sh---ls",
            "Pixel-Force,dt---ac-co-sh---ls",
            "Doctor-Teeth-2,dt-ios-al-am-ah---jb---ls",
            "Cursed-Treasure,dt-ios-al-am-ah---ac-st---ls",
            "Cursed-Treasure-2,dt-ios-al-am-ah---ac-st---ls",
            "Plug-Me,dt-ios-al-am-ah---ac-pl-rt---ls",
            "Viewnemy,dt---ac-pl-rt---ls",
            "Cannonball,dt-ios-al-am-ah---ac-sh---ls",
            "Happy-Glass,dt-ios-al-am-ah---pz---ls",
            "Route-Digger,dt-ios-al-am-ah---pz---ls",
            "Super-Pixel,dt-ios-al-am-ah---ac-pl-rt---ls",
            "Superhot-Prototype,dt---ac-co-sh---ls",
            "Fall-Beans,dt-ios-al-am-ah---ac-pl---ls",
            "Super-Playboy,dt---ac-co-pl---ls",
            "Spear-Stickman,dt-ios-al-am-ah---ac-co-sh---ls",
            "My-Big-Friend,dt---pl-pz---ls",
            "The-Right-Mix,dt---jb---ls",
            "Black,dt-ios-al-am-ah---st---ls",
            "Charge-Robot,dt---pl-pz---ls",
            "Ghost-Rider,dt-ios-al-am-ah---ac-pl-ms---ls",
            "Mamma-Mia-Zombies,dt-ios-al-am-ah---ac-st---ls", //issues-with-analytics
            "Connector,dt-ios-al-am-ah---pz---ls", //issues-with-analytics
            "Stickman-Swing,dt-ios-al-am-ah---ac---ls", //no-data
            "Kid-Disco,dt---ac-pl---ls", //no game-ui
            //
            "Happy-Filled-Glass,dt-ios-al-am-ah---pz---ls",
            "Gold-Miner,dt-ios-al-am-ah---pz-jb---ls",
            "Fish-Rescue,dt-ios-al-am-ah---xx---ls",
            "City-Hero,dt-ios-al-am-ah---ac-co-pl-sh---ls",
            "Angry-Zombies,dt-ios-al-am-ah---ac-sh---ls",
            "Pocket-Racing,dt-ios-al-am-ah---ac-pl-ms---ls",
            //
            
            "Low's-Adventures,dt-ios-al-am-ah---pl-rt---ls",
            //"Outrun,dt-ios-al-am-ah---xx---ls",

            // check desc...
            "Photo-King,dt---ac-jb---ls",
            "Power-Fox,dt---ac-co---ls",
            "Bat-Country,dt---ac---ls",
            //
            "Slime-Bubble-Bro,dt---ac-pl-rt--ls",
            //
            //promo games...
            /*
            "Square-Hero-Origins,dt-xx-xx-xx-xx",
            "Monster-High-Rock-Band,dt-xx-xx-xx-xx",
            "Where's-My-Blankie,dt-xx-xx-xx-xx",
            "The-Cobblebot-Caper,dt-xx-xx-xx-xx",
            "Dora's-Magical-Garden,dt-xx-xx-xx-xx",
            "Rain-Forest-Adventure,dt-xx-xx-xx-xx",
            "Mutiny,dt-xx-xx-xx-xx",
            "Papa's-Pizzeria,dt-xx-xx-xx-xx",
            "TU-95,dt-xx-xx-xx-xx",
            "Drop-Cannon,dt-ios-al-am-ah---xx---ls",
            */

            //Dice Wars...?

            //"Super-Frisco-Frenzy,dt-xx-xx-xx-xx", as3
            //"Hotdog-Bush,dt-xx-xx-xx-xx", emulation issue
            //"Sydney-Shark,dt-cc-xx-xx-xx", emulation issue

            //!t! "Pixel-Rush,dt-ios-al-am-ah---xx---ls",
            //!t! "Fit-In-The-Wall,dt-xx-xx-xx",

            //"XXX,dt-ios-al-am-ah---xx---ls",
            
            //poor...
            //"Stickman-War,dt-ios-al-am-ah---ac-co-sh---ls",
            //"Nuwpy's-Adventure,dt-ios-al-am-ah---ac-pl-rt---ls",
            //"Masked-Stabber,dt-ios-al-am-ah---ac-co-pl-rt---ls",

        ];

        shuffleArray(games);

        var gamesX = [
            //check desc...
            "New-York-Shark,dt---ac-co---ls",
            "Los-Angeles-Shark,dt---ac-co---ls",
            "Miami-Shark,dt---ac-co---ls",
            "Medieval-Shark,dt---ac-co---ls",
            "Prehistoric-Shark,dt---ac-co---ls",
            //
            "Hobo,dt---ac-co---ls",
            "Hobo-2,dt---ac-co---ls",
            "Hobo-3,dt---ac-co---ls",
            "Hobo-4,dt---ac-co---ls",
            "Hobo-5,dt---ac-co---ls",
            "Hobo-6,dt---ac-co---ls",
            "Hobo-7,dt---ac-co---ls",
            "Lucky-Life,dt---ac-pl---ls",
            "Short-Life,dt---ac-pl---ls",
            "Short-Life-2,dt---ac-pl---ls",
            "Friday-Night-Funkin,dt---xx---ls",
            "Hero-Rescue,dt-ios-al-am-ah---ac-jb---ls",
            "Park-Master,dt-ios-al-am-ah---pz-ms---pt",
            "Super-Agent,dt-ios-al-am-ah---ac-pl-rt-sh---ls",
            "Treasure-Hunters,dt-ios-al-am-ah---ac-ad-pl-rt---ls",
            //
            "The-Last-Ninja,dt---ac-co-sh--ls",
            "The-Last-Ninja-2,dt---ac-co-sh--ls",
        ];

        var newGames = games.concat(gamesX);
        games = newGames;

        //alert(games.length);

        var sitemapText = "";
        var fullGamesListText = "";

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }



        gamesBlockHeader.innerHTML = "<div class=blink>" + (textMenuGS.loadingGames).toUpperCase() + "</div>"; //"L O A D I N G&nbsp;&nbsp;&nbsp;G A M E S . . .";

        var gameCounter;
        var showGamesFlag = false;

        function showGames(selected) {
            var output = "";
            var gameName = "";
            var gameID = "";
            var i;
            gameCounter = 0;
            for (i = 0; i < games.length; i++) {
                var game = games[i].split(",");
                if (game[1].indexOf(varsGS.os) > -1 && game[1].indexOf(selected) > -1) { //check if game is selected from search AND if it is compatible with os
                    gameCounter++;
                    gameName = game[0].replace(/-/g, " ");
                    gameID = game[0].replace(/-/g, "").toLowerCase();
                    gameID = gameID.replace(/'/g, "");
                    output += "<a href=games/" + gameID + "/><div class=gameIconContainer><img class=gameIcon loading='lazy' src=thumbs/" + gameID + ".png alt=" + gameID + " width=360px height=100px><div class=gameIconName>" + gameName + "</div></div></a>";

                    sitemapText += "<url><loc>https://www.yurk.com/games/" + gameID + "/</loc></url>\n";
                    fullGamesListText += '<li><a href="games/' + gameID + '/">' + gameName + ' Yurk Game</a></li>\n';
                }
            }
            if (showGamesFlag) {
                //gamesBlockHeader.innerHTML = gameCounter + " games found.";

                if (gameCounter == 1) {
                    gamesBlockHeader.innerHTML = textMenuGS.gameFound;
                } else {
                    gamesBlockHeader.innerHTML = (textMenuGS.gamesFound).replace(/xx/g, gameCounter);
                }


            }
            showGamesFlag = true;
            gamesBlock.innerHTML = output;
        }

        function sortAscend(index) {
            return function(a, b) {
                if (a[index] === b[index]) {
                    return 0;
                } else {
                    return (a[index].toString().toLowerCase() < b[index].toString().toLowerCase()) ? -1 : 1;
                }
            }
        }

        setTimeout(function() {
            showGames("-");
            games.sort(sortAscend(0)); //after games have shown for teh first time, sort alphabetically
            //console.log(sitemapText);
            //console.log(fullGamesListText);
        }, 1000); //faster overall page loading / less page jitter

        setTimeout(function() {
            //gamesBlockHeader.innerHTML = "Welcome to yurk.com! Here we have " + gameCounter + " great games for you."; //You have chosen wisely visiting yurk.com - there are NO advert interruptions in any of our games. Yay!
            gamesBlockHeader.style.letterSpacing = "normal";
            gamesBlockHeader.innerHTML = (textMenuGS.topWelcome).replace(/xx/g, gameCounter);
            gamesBlock.style.opacity = "1";
            menuBar.style.opacity = "1";
            gamesBlockFooter.style.paddingTop = "1vw";
            menuBarCover.style.display = "none";
        }, 3500); //faster overall page loading / less page jitter

        copyrightYear.innerHTML = (new Date).getFullYear();


        //////// ANALYTICS
        //////////////////
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-3596694-20');



        var today = new Date();
        var date = today.getDate();
        var day = today.getDay();

        var jokes = [
            ["What is a duck’s favourite snack?", "Quackers!"],
            ["Why didn't the skeleton want to go on the rollercoaster?", "He didn't have the guts!"],
            ["Why didn't the skeleton want to go on the seesaw?", "He didn't have 'any body' to go on it with!"],
            ["What do you call an alligator in a vest?", "An investigator!"],
            ["What do you call a man who sits behind a cow?", "Pat!"],
            ["What do you call a teacher with no arms, no legs and no body?", "The head teacher!"],
            ["What do you call a woman sitting on a slice of Mediterranean pizza?", "Olive!"],
            ["What do you call a woman lying on a slice of bread?", "Marge!"],
            ["What do you call a woman with a pint of lager balanced in one hand, a pint of ale in the other and a pint of stout on her head?", "Beatrix!"],
            ["What do you call a dinosaur with a very extensive vocabulary?", "A thesaurus!"],
            ["What do you call a policeman who can't get out of bed in the morning?", "An undercover detective!"],
            ["What do you call a zebra with no stripes?", "A horse!"],
            ["What do you call a man with a rabbit up his jumper?", "Warren!"],
            ["What do you call a T-Rex with a scratch on its leg?", "A dino-sore!"],
            ["What do you call a Vicar on a moped?", "Rev!"],
            ["Why can't pirates play cards?", "Because they keep sitting on the deck!"],
            ["A truck driver and a doctor are in love with the same beautiful lady. The truck driver has to go on a one-week trip, but gives the lady seven apples before he leaves. Why?", "An apple a day keeps the doctor away!"],
            ["How do you know carrots are good for your eyes?", "You never see rabbits wearing glasses!"],
            ["Why can’t you trust the law of gravity?", "Because it will always let you down!"],
            ["What does a fish say when it swims head first into a concrete wall?", "Dam!"],
            ["Why can’t your nose be 12 inches long?", "Because it would be a foot!"],
            ["What is green and smells like blue paint?", "Green paint!"],
            ["What do you call a Frenchman wearing sandals?", "Philippe Philoppe!"],
            ["What do you call a boomerang that doesn't work?", "A stick!"],
            ["What do you call a fly without wings?", "A walk!"],
            ["What do you call a women who throws her bills on the fire?", "Bernadette!"],
            ["What do you call a man with a car on his head?", "Jack!"],
            ["What kind of storm is always in a rush?", "A hurricane!"],
            ["What do you call a person with trifle in their ears?", "Anything you like. They can't hear you!"],
            ["What do you call a woman with a tortoise on her head?", "Shelley!"],
            ["What do you call a man who can't stand up?", "Neil!"],
            ["What do you call a man who always just lies on the floor?", "Matt!"],
            ["What do you call a deer with no eyes?", "No idea!"],
            ["What do you call a fish with no eyes?", "A fsh!"],
            ["What do you call a horse that likes arts and crafts?", "A hobby horse!"],
            ["What do you call a spider with no legs?", "A raisin!"],
            ["What do you call a man with an elephant on his head?", "An ambulance!"],
            ["What do you call salted potato snack carved into the shape of a Tibetan priest?", "A chip monk!"],
            ["What do you call a pony with a cough?", "A little hoarse!"],
            ["What do you call a sleeping bull on a building site?", "A bulldozer!"]
        ];

        var dispJoke = "Today's joke: " + jokes[date][0];
        var dispJokeAnswer = jokes[date][1];

        joke.innerHTML = dispJoke;

        function showJokeAnswer() {
            jokeAnswer.innerHTML = dispJokeAnswer;
            joke.style.cursor = "default";
            jokeAnswer.style.cursor = "default";
        }

        var riddles = [
            ["A one-seeded fruit I may be, but all of your calendars are full of me. What am I?", "Dates."],
            ["Before Mount Everest was discovered, what was the highest mountain on Earth?", "Mount Everest."],
            ["A horse was tied to a five foot long rope and the horse's food was 15 feet away from the horse. How did the horse reach the food?", "The rope wasn't tied to anything - he simply walked over to it."],
            ["Three men fall from a boat and plunge beneath the waves, but only two get their hair wet. Why?", "The third man was bald."],
            ["Tall I am young, short I am old. While with life I glow, wind is my foe. What am I?", "A candle."],
            ["How many bricks does it take to complete a 2,000 square foot building made entirely of brick?", "Only one. It's the last brick that completes the building."],
            ["Joseph builds a one storey house made entirely of redwood. He paints the roof, the walls, the floors, the ceilings - EVERYTHING in red paint. What colour would the stairs be?", "What stairs? It is a one storey house."],
            ["Look carefully. Can you spot the the mistake? ABCDEFGHIJKLMNOPQRSTUVWXYZ", "The word 'the' is repeated."],
            ["Mr. and Mrs. Smith have six sons and each son has one sister. How many people are in the Smith family?", "Nine. The two parents. Six sons. One daughter."],
            ["A bus driver was heading down a street. He went right past a stop sign without stopping. Next he turned left where there was a 'no left turn' sign. Finally he went the wrong way down a one-way street. He didn't break any traffic laws. How?", "He was walking."],
            ["I run up and down the stairs without moving. What am I?", "The stair carpet."],
            ["What must you break in order to use it?", "An egg."],
            ["What is black when you buy it, red when you use it, and gray when you throw it away?", "Charcoal."],
            ["What has a mouth but never eats, a bed but never sleeps, and has banks but no money?", "A river."],
            ["It was Peter's first day on the soccer team and he scored a goal within just 5 minutes. His teammates congratulated him. When he scored a second goal, he was scolded. Why?", "His second goal was an own goal."],
            ["Roadworks meant a school bus has to take a different route to school one day - under a low bridge. When the driver came to the bridge, he got out and saw that the bus was just a pencil width too tall, and that he would have to turn back. Sophie, a 5-year old boffin called for quiet. She said she had a solution which would require only her index finger and thumb. What was it?", "Sophie let some air out of the tyres."],
            ["A room with no windows or doors. Walks in the night, grows in a day. Is found where there is death and decay.", "Mushrooms."],
            ["A nonstop train leaves London for Edinburgh at 60 mph. Another nonstop train leaves Edinburgh for London at 40 mph. How far apart are the trains one hour before they pass each other?", "100 miles."],
            ["What comes once in a minute, twice in a moment, but never in a thousand years?", "The letter 'm'."],
            ["Re-arrange the letters... R S W T D U O O J N E ...to spell just one word.", "JUST ONE WORD."],
            ["A man rode out of town on Sunday, he stayed a whole night at a hotel and rode back to town the next day on Sunday. How is this possible?", "His horse was called Sunday."],
            ["You can hear me and control me, but never see me or touch me. What am I?", "Your voice."],
            ["What is the first thing you see in an emergency but you only see it twice in a lifetime?", "The letter ‘e’."],
            ["What stays in a corner but travels around the world?", "A postage stamp."],
            ["What when read from right to left is a servant but when read from left to right is a ruler?", "God."],
            ["Five apples are in a basket. How do you divide them among five girls so that each girl gets an apple, but one apple remains in the basket?", "Give the fifth girl her apple in the basket."],
            ["You are my brother but I am not your brother. Who am I?", "Your sister."],
            ["Which is correct: 'The yolk of an egg are white' or 'The yolk of an egg is white'?", "Neither. The yolk of an egg is yellow."],
            ["What has one head, one foot, and four legs?", "A bed."],
            ["The more you take, the more you leave behind. What am I?", "Footsteps."],
            ["Legend tells of an ancient invention that allows people to see through walls. What is it?", "A window."],
            ["Three eyes have I, all in a row; when the red one opens, no one can go. What am I?", "A set of traffic lights."],
        ];

        var dispRiddle = "Today's riddle: " + riddles[date][0];
        var dispRiddleAnswer = riddles[date][1];

        riddle.innerHTML = dispRiddle;

        function showRiddleAnswer() {
            riddleAnswer.innerHTML = dispRiddleAnswer;
            riddle.style.cursor = "default";
            riddleAnswer.style.cursor = "default";
        }

        var funFacts = [
            "Ants never sleep.",
            "The world's termites outweigh the world's humans 10 to 1.",
            "Months that begin on a Sunday will always have a 'Friday the 13th'.",
            "Ninety eight per cent of the weight of water is made up from oxygen.",
            "Snails can sleep for three years without eating.",
            "Strawberries are the only fruit to have their seeds on the outside.",
            "Fingernails grow nearly four times faster than toenails.",
            "Due to gravitational effects, you weigh slightly less when the moon is directly overhead.",
            "Earth is the only planet not named after a god.",
            "You must have your back to the sun in order to see a rainbow.",
            "If you multiply 526,315,789,473,684,210 with any number you will always find the original number in the result.",
            "It takes eight and a half minutes for light to get from the Sun to Earth.",
            "A mole can dig a tunnel the length of a football field in just one night.",
            "The human brain is approximately 80% water.",
            "2,520 can be divided by 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 without having a fraction left over.",
            "The strongest muscle in the human body is the tongue.",
            "The longest word in the English language is: Pneumonoultramicroscopicsilicovolcanoconiosis (45 letters) although many people find Antidisestablishmentarianism (28 letters) easier to slip into everday conversation.",
            "A normal bed and duvet can be home to as many as ten million dust mites.",
            "Every drop of seawater contains approximately one billion atoms of gold. The problem of course is extracting it.",
            "There are more trees on Earth than stars in the Milky Way. 100 billion stars vs. 3 trillion trees.",
            "Babies are born with 300 bones. By the time they are adults they have only 206.",
            "An ostrich's eye is bigger than its brain.",
            "Brazil got its name from the nut, not the other way around.",
            "Crocodiles swallow stones to help them dive deeper.",
            "It's impossible to sneeze with your eyes open.",
            "A cockroach can live several weeks with its head cut off. It dies of starvation.",
            "Only female mosquitoes bite.",
            "A hippo can open its mouth wide enough to fit a four foot tall child inside.",
            "A lump of pure gold the size of a matchbox can be flattened into a sheet the size of a tennis court.",
            "Camels have three eyelids per eye to protect their eyes from airborne sand.",
            "Nose prints can be used to identify dogs, just as fingerprints can be used to identify humans.",
            "The most used letter in English is 'E', while 'Q' is the least used.",
            "A single poison-arrow frog contains enough poison to kill over 2,000 people."
        ];

        funFact.innerHTML = "Today's fun fact: " + funFacts[date];









        /*
        //fixed size specified above for good practice, now make dynamic (special case for small screens)
        if (window.innerWidth > 505) {
            console.log(window.innerWidth + " big");
            logo.style.width = "60vw"; //50
            logo.style.height = "15vw"; //25
        } else { //make logo big for small screens
            console.log(window.innerWidth + " small");
            logo.style.width = "90vw";
            logo.style.height = "22.5vw";
        }
        */

        //alert(screen.width);

        //reload page on orientation change (needed for mobile pages with responsive (large) ads.
        window.onorientationchange = function() {
            var orientation = window.orientation;
            switch (orientation) {
                case 0:
                case 90:
                case -90:
                    window.location.reload();
                    break;
            }
        };



        //////// PAGE VIEW COUNT
        ////////////////////////
        function pageView() {
            var n = localStorage.getItem('visitsCounter');

            if (n === null) {
                n = 0;
            }
            n++;

            if (varsGS.recordPageViews) {
                localStorage.setItem("visitsCounter", n);
            }

            varsGS.pageViews = n;
        }

        pageView();



        //////// DEBUGGING
        //////////////////

        footerText.addEventListener("click", debugging);

        var debugCounter = 0;

        function debugging() {
            if (debugCounter == 5) {
                debugPanel.style.display = "block";
                debugPanel.innerHTML = "<mark>&nbsp;" + varsGS.siteName.toUpperCase() + " DEBUG PANEL (1)</mark> (" + (varsGS.gestureType).toLowerCase() + " here x5 to remove)<br>OS: " + varsGS.os + " | Lang: " + varsGS.shortLang + " | Pageviews: " + varsGS.pageViews + " | Adblock: " + adBlockActive + "<br>User Agent: " + varsGS.userAgent;
            }
            if (debugCounter == 10) {
                debugPanel.style.display = "none";
                debugCounter = 0;
            }
            debugCounter++;
        }

    </script>

</body>

</html>
