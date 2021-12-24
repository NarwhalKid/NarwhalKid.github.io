<!DOCTYPE html>
<html lang=en>

<head>
    <meta charset="utf-8" />
    <title>404 Error - File Not Found!</title>
    <meta name=description content="Sorry - we looked everywhere but we couldn't find the file you wanted!">
    <meta content="noindex, nofollow" name=robots>
    <script async src="https://www.googletagmanager.com/gtag/js"></script>
    <style>
        @font-face {
            font-family: yurkFont;
            font-display: swap;
            src: url(/assets/fonts/yurkFont.ttf);
        }

        body,
        html {
            background-color: #39f;
            margin: 0;
            animation-duration: 100s;
            animation-iteration-count: infinite;
            color: rgba(0, 0, 0, .5);
            font-family: yurkFont, arial, helvetica, sans-serif;
            font-size: 2vmin;
            text-align: center;
            overflow: hidden;
            cursor: pointer;
            animation-name: backColor;
        }

        @keyframes backColor {
            0% {
                background-color: #39f;
            }

            50% {
                background-color: #064;
            }

            100% {
                background-color: #39f;
            }
        }

        #logoContainer {
            position: relative;
            height: 80vh
        }

        #clickText {
            animation: hueRotate 60s infinite
        }

        #logo {
            z-index: 4;
            width: 90vw;
            max-height: 70vh;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute
        }

        #clickText {
            z-index: 5;
            position: absolute;
            bottom: 5vh;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            user-select: none;
            font-size: 7vmin;
            color: #afa;
            text-shadow: 6px 6px 0 rgba(0, 0, 0, .3)
        }

        @keyframes hueRotate {
            100% {
                filter: hue-rotate(360deg)
            }
        }

        #shape1,
        #shape2,
        #shape3 {
            position: absolute;
            opacity: .03;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            position: fixed
        }

        #shape1 {
            z-index: 1;
            margin-left: -100vw;
            animation-name: shape1Rotate;
            animation-duration: 70s;
        }

        @keyframes shape1Rotate {
            0% {
                transform: rotate(0)
            }

            100% {
                transform: rotate(360deg)
            }
        }

        #shape2 {
            z-index: 2;
            margin-left: -50vw;
            margin-top: -100vh;
            animation-name: shape2Rotate;
            animation-duration: 40s
        }

        @keyframes shape2Rotate {
            0% {
                transform: rotate(0)
            }

            100% {
                transform: rotate(360deg)
            }
        }

        #shape3 {
            z-index: 3;
            animation-name: shape3Rotate;
            animation-duration: 30s;
        }

        @keyframes shape3Rotate {
            0% {
                transform: rotate(360deg)
            }

            100% {
                transform: rotate(0)
            }
        }

        .footer {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            text-align: right;
            margin-right: 25px
        }

        #bottom1,
        #bottom2,
        #top1,
        #top2 {
            background: rgba(255, 255, 255, .03);
            position: fixed;
            height: 30px
        }

        #bottom1,
        #bottom2 {
            left: 0;
            right: 0;
            bottom: 0
        }

        #top1,
        #top2 {
            left: 0;
            right: 0;
            top: 0
        }

        #top2,
        #bottom2 {
            height: 50px
        }

        #xImg {
            display: none
        }

    </style>
</head>

<body>

    <div id=logoContainer><img alt=Yurk src=/assets/gfx/yurkLogoGoldMin.svg id=logo></div>
    <div id=clickText>Error 404 - File Not Found.<br>Click to play at yurk.com!</div>
    <svg height=2048 id=shape1 width=2048>
        <circle cx=400 cy=400 fill=white r=300 /></svg>
    <svg height=2048 id=shape2 width=2048>
        <polygon points="1000,100 400,1980 1900,780 100,780 1600,1980" style=fill:#fff /></svg>
    <svg height=2048 id=shape3 width=2048>
        <circle cx=400 cy=400 fill=white r=200 /></svg>
    <div id=top1></div>
    <div id=top2></div>
    <div id=bottom1></div>
    <div id=bottom2></div>

    <script>
        //click out
        document.onclick = function() {
            window.open("https://www.yurk.com/index.html?err", "_top")
        };
        
        //setTimeout(function(){ 
        //    window.open("https://www.yurk.com/index.html?err", "_top")
        //}, 9000);

        //analytics
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-3596694-20');

    </script>
