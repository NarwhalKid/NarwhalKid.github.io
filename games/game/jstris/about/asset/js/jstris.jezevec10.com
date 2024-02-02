<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="PsPdZF46UfxLqY2Bfh5IDdPiKxYqOzQ06NLf28Jm">
<title>Jstris</title>
<link media="all" rel="stylesheet" href="https://s.jezevec10.com/css/main.css?id=e7ac13d58db69d420b23">
<link rel="shortcut icon" href="/res/favicon.ico" type="image/vnd.microsoft.icon" id="favicon">
<meta name="description" content="Online multiplayer puzzle game">
<script>window.Laravel = {"csrfToken":"PsPdZF46UfxLqY2Bfh5IDdPiKxYqOzQ06NLf28Jm"}</script>
<script defer src="https://s.jezevec10.com/js/app.js?id=db537a26944fb6f21c91"></script>
<script async src="https://s.jezevec10.com/js/ga.js?id=59c66906331844362528"></script>
<meta name="apple-mobile-web-app-capable" content="yes">
<style type="text/css">body{ background: black !important; }</style>
<link media="all" rel="stylesheet" href="https://s.jezevec10.com/css/game-style.css?id=a9f04dd4b2fd5e526380">
<script defer src="/lang/en.js?bb83b45cbe7065bfa1737953fefde558"></script>
<script defer src="https://s.jezevec10.com/js/replayer.js?id=8f431dce6de8e5f58f5b"></script>
<script defer src="https://s.jezevec10.com/js/game.js?id=820f5ddf59f207a9ed10"></script>
<script defer src="https://s.jezevec10.com/js/components.js?id=ba051761cb46dd8bd965"></script>
<script>
var conf_global = {v: "v1.39",
srvScheme: "wss",
revProxy: 0,
srv: "ws-xd7cxueq33c2cewq5.jezevec10.com",
port: "443",
cdn: "s.jezevec10.com",
name: ""};

</script>
</head>
<body>
<div id="app">
<nav class="navbar navbar-default navbar-static-top">
<div class="container">
<div class="navbar-header">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
<span class="sr-only">Toggle Navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand" href="https://jstris.jezevec10.com">
Jstris
</a>
</div>
<div class="collapse navbar-collapse" id="app-navbar-collapse">
<ul class="nav navbar-nav" id="mnav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Play <span class="caret"></span></a>
<ul class="dropdown-menu plLinks" role="menu">
<li><a href="/">Live</a></li>
<li class="dropdown-submenu">
<a tabindex="-1" href="/play/sprint" id="plH">Sprint</a>
<ul class="dropdown-menu">
<li><a id="pl2" href="/play/sprint/20">20L</a></li>
<li><a id="pl3" href="/play/sprint/40">40L</a></li>
<li><a id="pl4" href="/play/sprint/100">100L</a></li>
<li><a id="pl5" href="/play/sprint/1000">1000L</a></li>
</ul>
</li>
<li class="dropdown-submenu">
<a tabindex="-1" href="/play/cheeseRace" id="plI">Cheese race</a>
<ul class="dropdown-menu">
<li><a id="pl6" href="/play/cheeseRace/10">10L</a></li>
<li><a id="pl7" href="/play/cheeseRace/18">18L</a></li>
<li><a id="pl8" href="/play/cheeseRace/100">100L</a></li>
</ul>
 </li>
<li><a href="https://jstris.jezevec10.com/maps">Map downstack</a></li>
<li><a id="pl9" href="/play/survival">Survival</a></li>
<li><a id="plA" href="/play/ultra">Ultra</a></li>
<li><a id="plB" href="/play/20TSD">20TSD</a></li>
<li><a id="plC" href="/play/PC">PC Mode</a></li>
<li><a id="plD" href="/play/practice">Practice</a></li>
<li class="dropdown-submenu">
<a tabindex="-1" href="#">Rulesets</a>
<ul class="dropdown-menu">
<li><a id="plE" href="/play/big">Big mode</a></li>
<li><a id="plF" href="/play/pentomino">Pentomino</a></li>
<li><a id="plG" href="/play/MPH">MPH</a></li>
</ul>
</li>
</ul>
</li>
<li class="dropdown ">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Leaderboard <span class="caret"></span></a>
<ul class="dropdown-menu" role="menu">
<li class=""><a href="https://jstris.jezevec10.com/sprint">Sprint</a></li>
<li class=""><a href="https://jstris.jezevec10.com/cheese">Cheese race</a></li>
<li class=""><a href="https://jstris.jezevec10.com/survival">Survival</a></li>
<li class=""><a href="https://jstris.jezevec10.com/ultra">Ultra</a></li>
<li class=""><a href="https://jstris.jezevec10.com/20TSD">20TSD</a></li>
<li class=""><a href="https://jstris.jezevec10.com/PC-mode">PC Mode</a></li>
</ul>
</li>
<li class="dropdown ">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Maps <span class="caret"></span></a>
<ul class="dropdown-menu" role="menu">
<li class=""><a href="https://jstris.jezevec10.com/maps">Browse</a></li>
<li><a href="https://jstris.jezevec10.com/maps/random">Random map</a></li>
<li class=""><a href="https://jstris.jezevec10.com/maps/create">Map Designer</a></li>
<li class=""><a href="https://jstris.jezevec10.com/maps/games">Latest games</a></li>
<li class=""><a href="https://jstris.jezevec10.com/maps/leaderboard">Leaderboard</a></li>
</ul>
</li>
<li class="">
<a href="https://jstris.jezevec10.com/about">About</a>
</li>
<li class="">
<a href="https://jstris.jezevec10.com/donate">Donate</a>
</li>
</ul>
<ul class="nav navbar-nav navbar-right">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
en <span class="caret"></span>
</a>
<ul class="dropdown-menu" role="menu">
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=en" hreflang="en">en
<span class="cinf">100%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=cs" hreflang="cs">cs
<span class="cinf">78%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=da" hreflang="da">da
<span class="cinf">52%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=de" hreflang="de">de
<span class="cinf">79%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=es" hreflang="es">es
<span class="cinf">99%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=fi" hreflang="fi">fi
<span class="cinf">81%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=fr" hreflang="fr">fr
<span class="cinf">100%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=ga" hreflang="ga">ga
<span class="cinf">43%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=id" hreflang="id">id
<span class="cinf">52%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=it" hreflang="it">it
<span class="cinf">43%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=ja" hreflang="ja">ja
<span class="cinf">100%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=ko" hreflang="ko">ko
<span class="cinf">61%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=nl" hreflang="nl">nl
<span class="cinf">81%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=pl" hreflang="pl">pl
<span class="cinf">52%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=pt" hreflang="pt">pt
<span class="cinf">99%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=ru" hreflang="ru">ru
<span class="cinf">100%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=sv" hreflang="sv">sv
<span class="cinf">81%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=tr" hreflang="tr">tr
<span class="cinf">81%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=vi" hreflang="vi">vi
<span class="cinf">79%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=zh" hreflang="zh">zh
<span class="cinf">100%</span>
</a>
</li>
<li>
<a href="https://jstris.jezevec10.com/?langSwitch=zh-tw" hreflang="zh-tw">zh-tw
<span class="cinf">77%</span>
</a>
</li>
<li>
<a target="_blank" href="https://github.com/jezevec10/jstris-multilang"><em>Update translation</em></a>
</li>
</ul>
</li>
<li><a href="https://jstris.jezevec10.com/login">Login</a></li>
<li><a href="https://jstris.jezevec10.com/register">Register</a></li>
</ul>
</div>
</div>
</nav>
<div class="container" id="gc">
<div id="BG_only" class="absBg" style="z-index:-100;"></div>
<div id="settingsBox" style="display:none;">
<div class="settingsTabs">
<ul id="tabsMenu">
<li><a href="javascript:void(0)" data-target="tab_controls">Controls</a></li>
<li><a href="javascript:void(0)" data-target="tab_settings">Game settings</a></li>
<li><a href="javascript:void(0)" data-target="tab_skin">Skin</a></li>
<li><a href="javascript:void(0)" data-target="tab_sound">Sound</a></li>
<li><a href="javascript:void(0)" data-target="tab_stats">Stats</a></li>
<li><a href="javascript:void(0)" data-target="tab_other">Other</a></li>
</ul>
<div class="setTab" id="tab_controls">
<h2>Game controls</h2>
<em>Click on a text box and press the key you want.</em>
<table>
<tr><td width="180">Move Left:</td><td width="125"><INPUT id="input1" type="text" size="7" value="" /></td><td id="kc1">0</td></tr>
<tr><td>Move Right:</td><td><INPUT id="input2" type="text" size="7" value="" /></td><td id="kc2">0</td></tr>
<tr><td>Soft Drop:</td><td><INPUT id="input3" type="text" size="7" value="" /></td><td id="kc3">0</td></tr>
<tr><td>Hard Drop:</td><td><INPUT id="input4" type="text" size="7" value="" /></td><td id="kc4">0</td></tr>
<tr><td>Rotate Left:</td><td><INPUT id="input5" type="text" size="7" value="" /></td><td id="kc5">0</td></tr>
<tr><td>Rotate Right:</td><td><INPUT id="input6" type="text" size="7" value="" /></td><td id="kc6">0</td></tr>
<tr><td>Rotate 180:</td><td><INPUT id="input8" type="text" size="7" value="" /></td><td id="kc8">0</td></tr>
<tr><td>Hold:</td><td><INPUT id="input7" type="text" size="7" value="" /></td><td id="kc7">0</td></tr>
</table>
<table>
<tr><td><input type="checkbox" id="touch"></td><td><label for="touch">Enable touch screen controls (experimental)</label></td></tr>
<tr style="display:none"><td><input type="checkbox" id="touchBtn"></td><td><label for="touchBtn">Enable on-screen control buttons</label></td></tr>
<tr style="display:none"><td><input type="checkbox" id="touchBtnMove"></td><td><label for="touchBtnMove">Allow position adjustment by dragging</label></td></tr>
</table>
</div>
<div class="setTab" id="tab_settings">
<h2>Game settings</h2>
<table>
<tr><td width="26%">DAS:</td><td><INPUT size="10" id="DAS" type="text" value="117" />
<span style="padding-left:10px;"><a style="color:grey;" href="javascript:alert('TF DAS table:\nLevel 1 - 267\nLevel 2 - 183\nLevel 3 - 150\nLevel 4 - 133\nLevel 5 - 117')">TF DAS</a>
| <a style="color:grey;" id="nullpoDAS" href="javascript:void(0);">NullpoMino</a></span>
</td></tr>
<tr><td>ARR:</td><td><INPUT size="10" id="ARR" type="text" value="0" />
<span style="padding-left:10px;"><a style="color:grey;" href="javascript:alert('TF ARR table:\nLevel 1 - 50\nLevel 2 - 33\nLevel 3 - 22\nLevel 4 - 20\nLevel 5 - 17')">TF ARR</a></span>
</td></tr>
<tr><td>Soft-drop:</td><td>
<form name="sdForm" style="display: block; margin-top:7px;">
<input type="radio" name="sds" value="0" id="sd0"><label for="sd0"> Slow</label>
<input type="radio" name="sds" value="1" id="sd1"><label for="sd1"> Medium</label>
<input type="radio" name="sds" value="2" id="sd2" checked><label for="sd2"> Fast</label><br>
<input type="radio" name="sds" value="3" id="sd3"><label for="sd3"> Ultra</label>
<input type="radio" name="sds" value="4" id="sd4"><label for="sd4"> Instant</label>
</form>
</td></tr>
<tr><td>Grid:</td><td>
<form name="gridForm" style="display: block; margin-top:7px;">
<input type="radio" name="grs" value="0" id="gr0"><label for="gr0"> None</label>
<input type="radio" name="grs" value="1" id="gr1" checked><label for="gr1"> Standard</label>
<input type="radio" name="grs" value="2" id="gr2"><label for="gr2"> Partial</label><br>
<input type="radio" name="grs" value="3" id="gr3"><label for="gr3"> Vertical</label>
<input type="radio" name="grs" value="4" id="gr4"><label for="gr4"> Full</label>
</form>
</td></tr>
<tr><td>Ghost:</td><td><input type="checkbox" id="ghost" checked><label for="ghost"> Enabled</label></td></tr>
</table>
</div>
<div class="setTab" id="tab_skin">
<h2>Block skin</h2>
<form name="blockSkin" style="display: block; margin-top:7px;">
<table><tr><td></td><td>
<input type="radio" name="bSkin" value="0" id="bs0"><label for="bs0"> Solid color (no skin)</label><br>
<input type="radio" name="bSkin" value="6" id="bs01"><label for="bs01"> Invisible</label>
| <input type="radio" name="bSkin" value="7" id="bs7"><label for="bs7"> Monochrome <input type="text" class="colorPicker" id="monoColor" value="#5c5c5c"></label><br>
<input type="radio" name="bSkin" value="1" id="bs1"><label for="bs1"> <img height="20" src="https://s.jezevec10.com/res/b1.png"></label><br>
<input type="radio" name="bSkin" value="2" id="bs2"><label for="bs2"> <img height="20" src="https://s.jezevec10.com/res/b2.png"></label><br>
<input type="radio" name="bSkin" value="3" id="bs3"><label for="bs3"> <img height="20" src="https://s.jezevec10.com/res/b3.png"></label><br>
<input type="radio" name="bSkin" value="4" id="bs4"><label for="bs4"> <img height="20" src="https://s.jezevec10.com/res/b4.png"></label><br>
<input type="radio" name="bSkin" value="8" id="bs8"><label for="bs8"> <img height="20" src="https://s.jezevec10.com/res/b8.png"></label><br>
<input type="radio" name="bSkin" value="9" id="bs9"><label for="bs9"> <img height="20" src="https://s.jezevec10.com/res/b9.png"></label><br>
<input type="radio" name="bSkin" value="10" id="bs10"><label for="bs10"> <img height="20" src="https://s.jezevec10.com/res/b10.png"></label><br>
<input type="radio" name="bSkin" value="11" id="bs11"><label for="bs11"> <img height="20" src="https://s.jezevec10.com/res/b11.png"></label><br>
<input type="radio" name="bSkin" value="12" id="bs12"><label for="bs12"> <img height="20" src="https://s.jezevec10.com/res/b12.png"></label><br>
<input type="radio" name="bSkin" value="13" id="bs13"><label for="bs13"> <img height="20" src="https://s.jezevec10.com/res/b13.png"></label><br>
</td></tr>
<tr><td></td><td id="moreSkins"></td></tr>
</table>
</form>
<a href="/donate" target="_blank" class="mSkInf" id="mSkInf-s"><i class='glyphicon glyphicon-info-sign'></i><span>100+ more block skins available to Jstris Supporters for $5</span></a>
</div>
<div class="setTab" id="tab_sound">
<h2>Sound</h2>
SE volume: <input id="vol-control" type="range" min="0" max="100" value="100" step="1">
<span id="vol-value"></span>
<table>
<tr><td><input type="checkbox" id="SE" checked="checked"></td><td><label for="SE">Enable sound effects:</label>
<select id='sfxSelect'>
<option value="0">Nullpomino SE</option>
<option value="1">Yotipo's SE</option>
<option value="2">Rainforest (Combo)</option>
<option value="3">Tetra-X</option>
<option value="4">No SFX</option>
</select>
</td></tr>
<tr id="soundDesc"><td></td><td><span class="settingsDesc">Audio Assets by <span id="audioCred"></span></span></td></tr>
<tr><td><input type="checkbox" id="SEstart" checked="checked"></td><td><label for="SEstart">Enable game start sound effect</label></td></tr>
<tr><td><input type="checkbox" id="SErot"></td><td><label for="SErot">Sound effect of block rotation</label></td></tr>
<tr><td><input type="checkbox" id="SEfault" checked="checked"></td><td><label for="SEfault">Special sound effect on finesse fault</label></td></tr>
<tr><td><input type="checkbox" id="esound" checked="checked"></td><td><label for="esound">Player join notification (a ding)</label></td></tr>
<tr><td><input type="checkbox" id="DMsound" checked="checked"></td><td><label for="DMsound">Direct message notification</label></td></tr>
<tr><td><input type="checkbox" id="vSE"></td><td><label for="vSE">Voice comments:</label>
<select id='vsfxSelect'>
<option value="2">Dalicious - Commentary</option>
<option value="3">Dalicious - Block spawns</option>
<option value="0">TTS - Commentary</option>
<option value="1">TTS - Block spawns</option>
</select>
</td></tr>
<tr id="soundDesc2"><td></td><td><span class="settingsDesc">Audio Assets by <span id="audioCred2"></span></span></td></tr>
</table>
</div>
<div class="setTab" id="tab_other">
<h2>Other settings</h2>
<table>
<tr><td>Sprint reset:</td><td><INPUT id="input9" class="keySelect" type="text" size="7" value="" /><span id="kc9" style="display:none">0</span>
or <input type="checkbox" id="ffRestart"><label for="ffRestart">Finesse fault</label></td></tr>
<tr><td></td><td><span class="settingsDesc">Choose an alternative key to reset a sprint game.</span></td></tr>
<tr><td>Game reset:</td><td><INPUT id="input10" class="keySelect" type="text" size="7" value="" /><span id="kc10" style="display:none">0</span></td></tr>
<tr><td></td><td><span class="settingsDesc">Choose an alternative key to reset a live game.</span></td></tr>
</table>
<table>
<tr><td><input type="checkbox" id="rescaleNow"></td><td><label for="rescaleNow">Resize multiplayer fields immediately</label></td></tr>
<tr><td></td><td><span class="settingsDesc">If unchecked fields of new players will appear next round</span></td></tr>
</table>
<table>
<tr><td><input type="checkbox" id="cancelDAS" checked="checked"></td><td><label for="cancelDAS">DAS cancellation</label></td></tr>
<tr><td></td><td><span class="settingsDesc">If enabled, DAS cancels on direction change</span></td></tr>
</table>
<table>
<tr><td><input type="checkbox" id="dasMethod" checked="checked"></td><td><label for="dasMethod">FPS-based DAS</label></td></tr>
<tr><td></td><td><span class="settingsDesc">Evaluate DAS on fixed intervals (lower timing accuracy)</span></td></tr>
</table>
<table>
<tr><td><input type="checkbox" id="wGL" checked="checked"></td><td><label for="wGL">Use WebGL</label></td></tr>
<tr><td></td><td><span class="settingsDesc">Disable this if you aren't able to render OpenGL in 2021</span></td></tr>
</table>
<table>
<tr><td><input type="checkbox" id="mLay" checked="checked"></td><td><label for="mLay">Use mobile layout</label></td></tr>
<tr><td></td><td><span class="settingsDesc">Change to override mobile detection, requires refresh</span></td></tr>
</table>
</div>
<div class="setTab" id="tab_stats" style="display: none;">
<h2>Stats</h2>
<table><tbody><tr><td>
<label for="statGameModeSelect">Mode:</label>
<select id="statGameModeSelect">
<option value="0" selected="selected">Live</option>
<option value="1">Sprint</option>
<option value="2">Practice</option>
<option value="3">Cheese race</option>
<option value="4">Survival</option>
<option value="5">Ultra</option>
<option value="6">Maps</option>
<option value="7">20TSD</option>
<option value="8">PC Mode</option>
<option value="9">Custom modes</option>
</select>
</td></tr></tbody></table>
<table><tbody>
<tr><td><input type="checkbox" class="statCheckbox" id="stat1"></td><td><label for="stat1">Time</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat2"></td><td><label for="stat2">Score</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat3"></td><td><label for="stat3">Lines</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat4"></td><td><label for="stat4">Attack</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat5"></td><td><label for="stat5">Received</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat6"></td><td><label for="stat6">Finesse</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat7"></td><td><label for="stat7">PPS</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat8"></td><td><label for="stat8">KPP</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat9"></td><td><label for="stat9">APM</label></td></tr>
<tr><td><input type="checkbox" class="statCheckbox" id="stat10"></td><td><label for="stat10">Blocks</label></td></tr>
<tr><td><input type="checkbox" id="stat11" class="statCheckbox" checked="checked"></td><td><label for="stat11">VS</label>
&nbsp;<div class="help-tip"><p>100*((Attack + Downstack)/seconds)</p></div></td></tr>
<tr><td><input type="checkbox" id="stat12" class="statCheckbox" checked="checked"></td><td><label for="stat12">Wasted</label>
&nbsp;<div class="help-tip"><p>Ratio of T pieces not used in a T-Spin (to total T pieces)</p></div></td></tr>
<tr><td><input type="checkbox" id="stat13" class="statCheckbox" checked="checked"></td><td><label for="stat13">Hold</label></td></tr>
</tbody></table>
<div id="statOptId"></div>
</div>
</div>
<button id="settingsSave"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-check"></use></svg> Save Settings & Close</button>
<button id="settingsReset"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-rubbish"></use></svg> Reset all</button>
</div>
<div id="gameFrame">
<div id="moreResults" style="display:none;">
<div id="moreClose">Close</div>
<h3>Game results</h3>
<div id="moreData"></div>
</div>
<div id="main">
<div class="lstage">
<canvas id="holdCanvas" width="96" height="96"></canvas>
<div class="itmBox" style="display: none">
<div class="itmIcn"></div>
<div class="itmTxt"><b>W</b> to use</div>
</div>
<div class="modeBtns"></div>
<div class="goalInfo"></div>
</div>
<div id="stage">
<canvas id="bgLayer" class="layer bgLayer" width="248" height="480"></canvas>
<canvas id="myCanvas" class="layer mainLayer" width="248" height="480" tabindex="1"></canvas>
<div id="practice-menu-big" style="display:none">
<h4>Practice modes</h4>
<div id="mode-menu"></div>
</div>
<div id="team-options" style="display:none">
<h4>Team selection</h4>
<div id="tsArea">
</div>
</div>
</div>
<div id="rstage">
<canvas id="queueCanvas" width="96" height="360"></canvas>
<div id="rInfoBox" class="unsel">
<div id="practiceMenu">
<b>Practice:</b>
<div id="practice-last" class="prMenuItem">
Sprint <span class="prKey">F4</span>
</div>
<div id="ruleSel1" class="prMenuItem cCom">
<svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-gear"></use></svg>
<span>Default</span>
<span class="arrowclass"></span>
</div>
<div id="more-practice" class="prMenuItem">
Show more </div>
</div>
<div id="sprintInfo" style="display:none">
<div id="lrem">40</div>
<div id="sprintText"><div id="stLrem">lines remaining</div><div id="stTrem" style="display:none">time remaining</div>
<div id="stTSD" style="display:none">TSDs done</div><div id="stPC" style="display:none">Perfect Clears</div><div style="display:none" id="oRem">40</div>F4 to restart</div>
</div>
<div id="teamInfo" style="display:none">
<div>Playing for:</div>
<div id="myTeam" style="background-color:blue">Team Blue</div>
</div>
</div>
</div>
<div style="clear:both;">
<div id="buttonsBox">
<button id="lobby">Lobby</button>
<button id="settings">Settings</button>
<button id="res" data-text="New game">New game</button>
</div>
<div id="fps"></div>
<div id="gstats">
<div class="statL" id="statLabels"></div>
<canvas id="glstats" width="96" height="1"></canvas>
</div>
</div>
<div id="tc-area-desc">TOUCH<br>CONTROL AREA</div>
</div>
<div class="players" id="players">
<div id="lobbyBox" style="display:none;">
<h3>Lobby</h3>
<div id="lobbyContent">
<table class="lobbyTable" id="lobbyTable">
<thead><tr><th>Room name</th><th class='gamesCol'>Games</th><th class='plCol' colspan="2">Players</th></tr></thead>
<tbody></tbody>
</table>
<div class="roomListSep" id="rLSep">Custom rooms</div>
<table class="lobbyTable" id="customTable"></table>
<div class="roomListSep" id="ovLSep">Overflow rooms</div>
<table class="lobbyTable" id="ovfTable"></table>
<div class="roomListSep" id="guLSep">Guest rooms</div>
<table class="lobbyTable" id="guTable"></table>
<div class="roomListSep" id="loLSep">Spectate only rooms</div>
<table class="lobbyTable" id="loTable"></table>
</div>
<div id="lobbyBottom">
<button id="editRoomButton"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-edit"></use></svg> Edit</button>
<button id="createRoomButton"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-plus"></use></svg> Create room</button>
<button id="refreshLobby"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-reload"></use></svg> Reload</button>
<button id="closeLobby"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-exit"></use></svg> Close</button>
</div>
</div>
<div id="createRoom" style="display:none;">
<h3>Create room</h3>
<table>
<tr><td width="130">Room name:</td><td><input type="text" id="roomName"></td></tr>
<tr><td>Players:</td>
<td>
<select id="numPlayers" size="1">
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="28">No limit</option>
</select>
<a href="javascript:void(0)" id="addJL">+ Add join limit</a>
</td>
</tr>
<tr id="trMode"><td>Mode:</td>
<td>
<select id="gameMode" size="1">
<option value="0">Standard</option>
<option value="2">Team</option>
<option value="1">Cheese</option>
<option value="101">Live Sprint</option>
<option value="103">Live Cheese</option>
<option value="104">Live Survival</option>
<option value="106">Live Maps v0.1</option>
</select>
</td>
</tr>
<tr id="trPriv"><td>Private:</td><td><input type="checkbox" id="isPrivate"></td></tr>
</table>
<div class="moreTitle" id="moreSet1">
<span class="more_opt labs">
<input type="radio" name="moreSel" value="2" id="more_preset"><label for="more_preset"> Preset</label>
<input type="radio" name="moreSel" value="0" id="more_simple"><label for="more_simple"> Simple</label>
<input type="radio" name="moreSel" value="1" id="more_adv"><label for="more_adv"> All</label>
</span>
<h4>More settings</h4>
<div style="clear:both;"></div>
</div>
<div id="presetMode">
<table>
<tr><td width="130">Use preset:</td>
<td>
<select id="presetSel" size="1">
<option value="0" data-desc="The default settings">Default</option>
</select>
<img id="presetLoadState" style="visibility:hidden" src="https://s.jezevec10.com/res/svg/spinWhite.svg">
</td>
</tr>
<tr><td></td><td><span id="settingsDesc" class="settingsDesc ruleDesc"></span></td></tr>
</table>
<div style="margin-top:15px;font-size:12px">
Other options:
<ul style="margin-top:5px"><li><a href="javascript:void(0)" id="customPre">Use custom preset</a></li>
<li><a href="/presets" target="_blank">Browse custom presets</a></li>
<li><a href="/presets/submit" target="_blank">Submit a new one</a></li>
</ul>
</div>
</div>
<div class="setScroll">
<table id="moreSet2">
<tr class="simple"><td>Attack:</td>
<td>
<select id="attackMode" size="1">
<option value="0">TF</option>
<option value="1">TOJ</option>
<option value="2">No spins</option>
</select>
</td>
</tr>
<tr class="adv"><td>Attack table:</td><td><input type="text" id="attackTable">
<span class="inputDesc"><a href="javascript:alert('Insert attacks in this order:\n0lines,1line,2lines,3lines,4lines,TD,TT,TS,TMS,PC,B2B')">?</a></span></td></tr>
<tr class="adv"><td>Combo attack:</td><td><input type="text" id="comboTable">
<span class="inputDesc"><a href="javascript:alert('Insert combo attacks in this order:\nNoCombo,1,2,3,4,5,6,7,8,9,10,11,12+')">?</a></span></td></tr>
<tr><td>Garbage distribution:</td>
<td>
<select id="gdmSel" size="1">
<option value="0">Targets</option>
<option value="1">Divide</option>
<option value="2">To all</option>
<option value="3">To least (Rec)</option>
<option value="4">To most (Snt)</option>
<option value="5">To self</option>
<option value="6">Random</option>
<option value="7">Roulette</option>
</select>
</td>
</tr>
<tr><td>Garbage blocking:</td>
<td>
<select id="gblockSel" size="1">
<option value="0">Full</option>
<option value="1">Limited</option>
<option value="2">None</option>
<option value="3">Instant</option>
</select>
</td>
</tr>
<tr><td>Blocks:</td>
<td>
<select id="blocksSel" size="1">
<option value="0">Standard</option>
<option value="1">Big</option>
<option value="3">ARS</option>
<option value="4">Penta</option>
<option value="5">M123</option>
<option value="6">All-29</option>
<option value="7">C2RS</option>
<option value="8">O-spin</option>
</select>
</td>
</tr>
<tr><td>Randomizer:</td>
<td>
<select id="rndSel" size="1">
<option value="0">7-bag</option>
<option value="1">14-bag</option>
<option value="2">Classic</option>
<option value="7">C2Sim</option>
<option value="3">One block</option>
<option value="4">Two block</option>
<option value="5">One 7-bag</option>
<option value="6">One 14-bag</option>
<option value="8">Repeat+7b</option>
<option value="9">BSblock+7b</option>
<option value="10">BigBlock+7b</option>
</select>
</td>
</tr>
<tr><td>Previews:</td>
<td>
<select id="prSel" size="1">
<option value="5">5</option>
<option value="4">4</option>
<option value="3">3</option>
<option value="2">2</option>
<option value="1">1</option>
<option value="0">0</option>
</select>
</td>
</tr>
<tr><td>Hold:</td><td><input type="checkbox" id="hasHold" checked></td></tr>
<tr><td>Solid garbage:</td><td><input type="checkbox" id="hasSolid"> After <input type="text" id="solid" style="width:80px"><span class="inputDesc">(s)</span></td></tr>
<tr class="adv"><td>Solid g. speed:</td><td><input type="text" id="sgProfile" style="width:140px"><span class="inputDesc">
<a href="javascript:alert('Set delays between solid garbage additions. Last value is repeated.')">?</a></span></td></tr>
<tr class="adv"><td>Lock delay:</td><td><input type="text" id="lockDelay" style="width:140px"><span class="inputDesc">L1/L2/L3 (ms)
<a href="javascript:alert('L1-lock delay\nL2-max single LD extension\nL3-max time before autolock')">?</a></span></td></tr>
<tr><td width="130">Clear delay:</td><td><input type="text" id="clearDelay" style="width:80px"><span class="inputDesc">(ms)</span></td></tr>
<tr><td>Speed limit:</td><td><input type="text" id="speedLimit" style="width:80px"><span class="inputDesc">(PPS)</span></td></tr>
<tr class="adv"><td>Gravity lvl:</td><td><input type="text" id="gravityLvl" style="width:80px"><span class="inputDesc">(0-28)</span></td></tr>
<tr class="adv"><td>Garbage Delay:</td><td><input type="text" id="garbageDelay" style="width:80px"><span class="inputDesc">(ms)</span></td></tr>
<tr class="adv"><td>Messiness:</td><td><input type="text" id="mess" style="width:80px"><span class="inputDesc">%</span></td></tr>
<tr class="adv"><td>Gap width:</td><td><input type="text" id="gapW" style="width:80px"><span class="inputDesc"></span></td></tr>
<tr class="adv"><td>All-spin:</td><td class="labs">
<input type="radio" name="allSpin" value="0" id="as0"><label for="as0"> Off</label>
<input type="radio" name="allSpin" value="1" id="as1"><label for="as1"> Immobile</label>
<input type="radio" name="allSpin" value="2" id="as2"><label for="as2"> 4-point</label>
</td></tr>
<tr class="adv"><td>Excl. blocks:</td><td><input type="text" id="asEx" style="width:80px"><span class="inputDesc">
<a href="javascript:alert('Enter comma-separated list of blocks exluded from allspin attacks. Eg.: T,J,L')">?</a></span></td></tr>
<tr class="adv"><td>Invert garbage:</td><td><input type="checkbox" id="gInv"></td></tr>
 <tr class="adv"><td>Attack as solid:</td><td><input type="checkbox" id="solidAtk"></td></tr>
<tr class="adv"><td>NoFourwide:</td><td><input type="checkbox" id="noFW"></td></tr>
<tr class="adv"><td>HostStart:</td><td><input type="checkbox" id="hostStart"></td></tr>
<tr class="adv"><td>Server:</td><td><select id="srvSel" size="1"></select></td></tr>
</table></div>
<input type="hidden" id="r-ext" value="0">
<div id="saveData" style="display:none">
<h3>Save the preset</h3>
Here is your preset data, you can <a href="/presets/submit" target="_blank">submit it here</a> to make it available to everyone.
<textarea id="saveDataArea" onclick="this.focus();this.select()"></textarea><br>
<button id="saveDataClose">Close</button>
</div>
<div id="joinLimits" style="display:none">
<h3>Room join limits</h3>
<p>You can set requirements for players joining your room. Leave a field empty for no limit.</p>
<table class="limitsT"><tbody>
<tr><td>APM</td><td><input type="number"></td><td><input type="number"></td><td></td></tr>
<tr><td>Sprint 40L</td><td><input type="number"></td><td><input type="number"></td><td>(seconds)</td></tr>
<tr><td>Gametime</td><td><input type="number"></td><td><input type="number"></td><td>(hours)</td></tr>
</tbody></table>
<button id="saveLimits"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-check"></use></svg> Apply & Close</button>
</div>
<div class="roomButtons">
<img id="createState" style="display:none" src="https://s.jezevec10.com/res/svg/spinWhite.svg">
<button id="create" style="min-width:150px"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-check"></use></svg> Create</button>
<button id="cancelCreation" style="min-width:90px"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-exit"></use></svg> Cancel</button>
<button id="saveRD" style="visibility:hidden"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-download"></use></svg> Save</button>
</div>
</div>
<div id="reportU" style="display:none">
<h1>Report user</h1>
Here you can create a report if you think someone has abused the game chat.
<form name="repForm">
<table>
<tr><td>User</td><td>
<select id="repUser"></select>
</td></tr>
<tr><td>Reason</td><td>
<input type="radio" name="rRe" value="0" id="rr0"><label for="rr0">Spam or unwanted advertising</label><br>
<input type="radio" name="rRe" value="1" id="rr1"><label for="rr1">Sexually explicit content</label><br>
<input type="radio" name="rRe" value="2" id="rr2"><label for="rr2">Hate speech</label><br>
<input type="radio" name="rRe" value="3" id="rr3"><label for="rr3">Harassment or bullying</label><br>
<input type="radio" name="rRe" value="4" id="rr4"><label for="rr4">Other (specify)<br><input type="text" autocomplete="off" size="500" id="rReTxt"></label><br>
</td></tr>
</table>
</form>
<button id="repSend"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-check"></use></svg> Send report</button>
<button id="repClose"><svg class="btnIcn"><use xlink:href="/svg/dark.svg#s-exit"></use></svg> Cancel</button>
</div>
<div class="slots" id="gameSlots">
<div id="resultsBox" style="display:none;">
<a target="_blank" href="#" id="saveLink"><img src="https://s.jezevec10.com/res/link.png" height="16"></a>
<a href="javascript:void(0)" id="closeLink"><img src="https://s.jezevec10.com/res/close.png" height="16"></a>
<h3>Game results</h3>
<div id="resultsContent"></div>
<div id="showMore">
<span>Show more details</span>
</div>
</div>
<div id="slotSettingsBtn" class="unsel zoomIc">
<div id="slotSettings" style="display:none">
<label for="zoomControl"><img class="zoomSetIcon" src="https://s.jezevec10.com/res/svg/slots/zoomW.svg"><input id="zoomControl" type="range" min="100" max="200" value="100" step="1"><span id="zoomNow">100%</span></label>
<label for="fsSlots"><input type="checkbox" id="fsSlots"> Full screen</label>
<label for="hqSlots"><input type="checkbox" id="hqSlots"> Show H+Q</label>
<label for="statsSlots"><input type="checkbox" id="statsSlots"> Show stats</label>
</div>
</div>
</div>
<div class="chatArea">
<div id="chatExpand" class="exUp" data-toggle="tooltip" data-placement="auto right" title="Expand"></div>
<div id="frLobby" class="fri" data-toggle="tooltip" data-placement="auto right" title="Friends"></div>
<div id="chatBox">
<div id="chatContent">
<div id="ch1"></div>
<div id="ch2"></div>
</div>
</div>
</div>
<div id="chatInputArea">
<div class="chatInputC">
<input type="text" autocomplete="off" size="500" id="chatInput" value="">
<svg class="emSel"><use xlink:href="/svg/dark.svg#s-emote"></use></svg>
<svg class="warnI"><use xlink:href="/svg/dark.svg#s-warn"></use></svg>
</div>
<button id="sendMsg">Send</button>
</div>
<div id="connectStatus">NOT CONNECTED</div>
</div>
</div>
</div>
<div id="tcc" style="display:none">
<div>
<span id="tc-dr"><svg><use xlink:href="/svg/dark.svg#s-r180"></use></svg></span>
<span id="tc-h"><svg><use xlink:href="/svg/dark.svg#s-hold"></use></svg></span>
<span id="tc-hd"><svg><use xlink:href="/svg/dark.svg#s-harddrop"></use></svg></span>
</div>
<div>
<span id="tc-l"><svg><use xlink:href="/svg/dark.svg#s-back"></use></svg></span>
<span id="tc-r"><svg><use xlink:href="/svg/dark.svg#s-forward"></use></svg></span>
<span id="tc-d"><svg><use xlink:href="/svg/dark.svg#s-down"></use></svg></span>
<span id="tc-cc"><svg><use xlink:href="/svg/dark.svg#s-ccw"></use></svg></span>
<span id="tc-c"><svg><use xlink:href="/svg/dark.svg#s-cw"></use></svg></span>
</div>
</div>
</div>
</body>
</html>
