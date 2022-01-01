'use strict';
/** @type {!Array} */
var _0x5cb4 = ["use strict", "toFixed", "floor", ":", "0", "", "\\]", "replace", "\\[", "search", "exec", "[\\?&]", "=([^&#]*)", " ", "hasOwnProperty", "byteLength", "fromCharCode", "btoa", "atob", "length", "charCodeAt", "object", "indexOf", "filter", "slice", "&amp;", "&lt;", "&gt;", "?", '<svg class="', '"><use xlink:href="', "/svg/", ".svg#", '"></use></svg>', "display", "style", "block", "none", "&quot;", "selectAllChildren", "getSelection", "option", "createElement", "value", "id", "innerHTML", 
"title", "desc", "dataset", "description", "appendChild", "undefined", "cdn", "/", "https://", "head", "script", "type", "text/javascript", "src", "onload", "onreadystatechange", "values", "map", "keys", "set", "pos", "rot", "item", "blocks", "step", "scale", "items", "previewAs", "equidist", "allspin", "I", "O", "T", "L", "J", "S", "Z", "I5", "V5", "T5", "U5", "W5", "X5", "J5", "L5", "S5", "Z5", "TL", "TJ", "OZ", "OS", "TS", "TZ", "LL", "JJ", "I1", "I2", "I3", "L3", "concat", "push", "kicks", "name", 
"O+", "stringify", "parse", "spawn", "ghost", "INV", "A", "freeze", "ATI", "SOFT_DROP", "HARD_DROP", "CLEAR1", "CLEAR2", "CLEAR3", "CLEAR4", "CLEAR5", "TSPIN_MINI", "TSPIN", "TSPIN_MINI_SINGLE", "TSPIN_SINGLE", "TSPIN_DOUBLE", "TSPIN_TRIPLE", "PERFECT_CLEAR", "COMBO", "B2B", "get", "prototype", "lineAtk", "getComboAttack", "linesAttack", "wasBack2Back", "Score", "ISGAME", "randomizer", "matrix", "deadline", "blockSets", "softDropSpeeds", "blockIds", "queue", "queueLength", "gamedata", "skins", "None", 
"Default", "/res/b1.png", "Pixel", "/res/b2.png?v2", "Glass", "/res/b3.png?v2", "Gradient", "/res/b4.png?v2", "Nullpomino4", "/res/b5.png", "Invisible", "Mono", "Eyebites", "/res/b8.png", "Retro", "/res/b9.png", "Color Cubes", "/res/b10.png", "Simple", "/res/b11.png", "Color Blocks", "/res/b12.png", "Critter", "/res/b13.png", "customSkinPath", "spinPossible", "spinMiniPossible", "tspinMiniPossible", "isBack2Back", "isInvisibleSkin", "monochromeSkin", "cids", "coffset", "colors", "black", "#D70F37", 
"#E35B02", "#E39F02", "#59B101", "#0F9BD7", "#2141C6", "#AF298A", "#999999", "#6A6A6A", "white", "colorsV3", "NullCol", "#E4203E", "#E47E30", "#E3CF3C", "#1DE03D", "#00C9DF", "#0042DC", "#9E2CDC", "#585858", "multipleNames", "Single", "Double", "Triple", "Quadruple", "Multiple", "excludedBlocksAS", "Items", "R", "DEF", "rnd", "initRandomizer", "RNG", "usebag", "bag", "n", "getBlock", "lastIndex", "hist", "i", "nextSegment", "bsArr", "EXPECTED_BLOCKS", "volume", "comboTones", "maxCombo", "getSoundUrl", 
"getSoundUrlFromObj", "abs", "url", "/res/se", "getComboSFX", "c", "min", "linefall", "getScoreSFX", "scoring", "s", "getClearSFX", "b2bScoring", "b", "b2b", "hold", "hold.wav", "linefall.wav", "lock", "lock.wav", "move", "move.wav", "died", "topout.wav", "ready", "ready.wav", "go", "go.wav", "ding", "ding.wav", "msg", "msg2.mp3", "fault", "fault.wav", "blank", "null.wav", "item.mp3", "pickup", "pickup.mp3", "rotate", "rotate.ogg", "success", "success.ogg", "harddrop", "golive", "land", "garbage", 
"author", "inherit", "spawns", "Chris Butler, CC BY 3.0, remixed, freesound.org", "lock.mp3", "topout.mp3", "comboTones.mp3", "Dr Ocelot, CC BY 3.0", "ren/ren", ".ogg", "hold.ogg", "move.ogg", "ready.ogg", "go.ogg", "start.ogg", "locknohd.ogg", "harddrop.ogg", "step.ogg", "garbage.ogg", "b2b.ogg", "topout.ogg", "lockforce.ogg", "erase1.ogg", "erase2.ogg", "erase3.ogg", "erase4.ogg", "tspin0mini.ogg", "tspin0.ogg", "tspin1mini.ogg", "tspin1.ogg", "tspin2.ogg", "tspin3.ogg", "bravo.ogg", "Google Translate", 
"bl/I.mp3", "bl/O.mp3", "bl/S.mp3", "bl/Z.mp3", "bl/T.mp3", "bl/L.mp3", "bl/J.mp3", "game_over.mp3", "b2b/e4.mp3", "b2b/tspin2.mp3", "e1.mp3", "e2.mp3", "e3.mp3", "e4.mp3", "tspin0Mini.mp3", "tspin0.mp3", "tspin1Mini.mp3", "tspin1.mp3", "tspin2.mp3", "tspin3.mp3", "PC.mp3", "twitch.tv/daliciouss", "b/I.mp3", "b/O.mp3", "b/S.mp3", "b/Z.mp3", "b/T.mp3", "b/L.mp3", "b/J.mp3", "b2b.mp3", "tspin0mini.mp3", "tspin1mini.mp3", "well-done.ogg", "randomizerFactory", "baseBlockSet", "blockRNG", "Replay", "config", 
"getRandomizerBlock", "temporaryBlockSet", "getBlockFromQueue", "pmode", "noBlocks", "noBlocks2", "gameWarning", "Caption", "activeBlock", "splice", "refillQueue", "updateQueueBox", "checkIntersection", "setCurrentPieceToDefaultPos", "x", "y", "centerColumnCheck", "rotateCurrentBlock", "finesse", "-1", "1", "2", "tspinType", "lockDelayActive", "timer", "playSound", "updateGhostPiece", "redraw", "addSolidGarbage", "solidHeight", "Action", "timestamp", "add", "gravityStep", "lockDelayActivated", "lastAction", 
"holdBlock", "holdUsedAlready", "holdEnabled", "blockInHold", "getNextBlock", "lastGeneration", "VSEenabled", "VSFXset", "playCurrentPieceSound", "totalKeyPresses", "holds", "GameStats", "HOLD", "checkAutoRepeat", "redrawHoldBox", "onBlockHold", "v", "moveBlockToTheWall", "ghostEnabled", "redrawBlocked", "ghostPiece", "checkTSpin", "checkAllSpinImmobile", "checkAllSpin", "isArray", "checkLineClears", "countGarbageHeight", "clearLines", "allSpin", "clearDelay", "garbageCleared", "isPmode", "finish", 
"mapData", "MapManager", "FINISH_STANDARD", "lineCleared", "lines", "LINES", "singles", "debug", "T-Spin Single", "Scoring", "T-Spin Mini Single", "doubles", "TSD", "T-Spin Double", "triples", "T-Spin Triple", "tetrises", "Tetris", "Multitris (", ")", "Ignored ", "-Spin", "-Spin ", " Mini", "B2B ", "wasted", "tspins", "score", "PCs", "Perfect Clear", "FINISH_BY_PC", "practiceModeCompleted", "mapLines", "fourWideFlag", "noFourWide", "Live", "comboCounter", "is4W", "linesSent", "ATTACK", "SFXset", 
"showInChat", "attack", "linesRemaining", "textContent", "lrem", "cheeseLevel", "minCheeseHeight", "addGarbage", "setLrem", "notTSD", "notTSDInfo", "TSD20", "clock", "round", "lastPC", "PCdata", "evalPCmodeEnd", "ModeManager", "on", "blockOrSendAttack", "fwDetect", "fwDetectInfo", "sendAttack", "play", "animator", "onLinesCleared", "-Spin Mini", "maxCheeseHeight", "placeBlock", "placedBlocks", "tpieces", "BLOCKS", "getKPP", "KPP", "savePlacementTime", "color", "liveMode", "raceCompleted", "place", 
"playing", "solidToAdd", "gblock", "addGarbageFromQueue", "onBlockLocked", "getWasted", "WASTE", "getQueuePreview", "generateQueue", "r", "getAPM", "getVS", "clearMatrix", "QueueHoldEnabled", "clearQueueCanvas", "showPreviews", "repeatQueue", "addStaticQueueToQueue", "yp", "xp", "drawBlockOnCanvas", "drawBrickOverlayOnCanvas", "clearHoldCanvas", "resetGameData", "getGravityLevel", "MAX_SAFE_INTEGER", "exports", "getRandomExcept", "Nullpomino", "Yotipo", "Rainforest", "Tetra-X", "TTS-VoiceSFXset", 
"TTS-SpawnSFXset", "Commentary - Dal", "Block spawns - Dal", "playingSound", "p", "itmBox", "getElementsByClassName", "itmIcn", "itmTxt", "itmDef", "Tblocks", "/res/img/i/tpieces.png", "Tornado", "/res/img/i/tornado.png", "Compress", "/res/img/i/compress.png", "Fourwide", "/res/img/i/four.png", "Poison", "/res/img/i/poison.png", "Pentomino", "/res/img/i/pento.png", "Big", "/res/img/i/big.png", "Invert", "/res/img/i/invert.png", "Mystery", "/res/img/i/unknown.png", "Win", "/res/img/i/win.png", "B1", 
"/res/img/i/dot.png", "Big2", "key", "origBBS", "P1", "fs", "f", "isPriv", "active", "preload", "dom", "getDate", "g", "tmpMatrix", "invertMatrix", "PER_ROUND", "hadGhost", "d", "hd", "onMapReady", "mapId", "emptyMatrix", "lowestMapLine", "STATE_NEW", "STATE_PUBLISHED", "onReady", "modeId", "modeData", "goalInfo", "modeBtns", "timesPlayed", "soundCache", "skinCache", "startingTimeout", "unpauseHandler", "nextModeHandler", "components", "eventTriggers", "timeTriggers", "initTrigger", "initTriggerFirst", 
"afterTrigger", "totalRuns", "totalTriggers", "usedTriggers", "fail", "isFinished", "noQueueRefill", "skinWasChanged", "lastAttackGarbageColumn", "STATE_LOCKED", "STATE_PUBLISHED_UNLISTED", "BLOCK", "LINE", "LINECLEAR", "statID", "blockNames", "fileload", "bind", "soundLoaded", "addEventListener", "Sound", "enabled", "cmds", "playSpeed", "pauseReplay", "listeners", "startDownloaders", "elemID", "elem", "getElementById", "live", "isDownloading", "controller", "download", "spin", "img", "repLoading", 
"classList", "/res/svg/spinWhite.svg", "nextSibling", "insertBefore", "parentNode", "reachedEnd", "subMode", "frames", "gameStep", "softDrop", "softDropId", "holdPressed", "redBar", "solidInterval", "totalFinesse", "finFaults", "scoreStamps", "comboAttack", "timeRemaining", "actions", "Analytics", "call", "data", "byte", "bitpos", "timeout", "playingLive", "frameId", "stop", "_playTask", "vol", "complete", "_next", "failed", "shift", "avail", "loadConf", "m", "forEach", "def", "autoSelectKey", "w", 
"z", "a", "e", "controls", "Settings", "includes", "<b>", "toUpperCase", "</b> to use", "genItem", "random", "genItemType", "resolveProb", "onReset", "preloadIcons", "revert", "reset", "backgroundImage", "mysteryItem", "fullSize", "url(", "remove", "onHardDrop", "use", "applyItem", "changeRandomizer", "changeMatrix", "changeBBS", "BLOCK_SET", "AUX", "Instant win", "loading", "resolveMystery", "MATRIX_MOD", "loadFourWide", "wipeDeadline", "VmAAAiJUYAACIlRAAAMyUUAAAzIRcAAGZhdwAAEWEXAABxFREAAHdVIgAAcVUiAAARVSIAABdWIgAAd3ZmAABmYzUAAGZjNQAAYzIlAABjNSUAACIlIQAAJEURRABEJRRAACIg==", 
"parseMatrix", "compressMatrix", "tfTornado", "RANDOMIZER", "hdAbort", "render", "iter", "finished", "gameEnded", "hardDrop", "mapFetchError", "This map could not be loaded!\n", "startPractice", "getLowestMapLine", "reduce", "parseMapData", "loadMap", "state", "/maps/api/", "GET", "open", "X-Requested-With", "XMLHttpRequest", "setRequestHeader", "Content-type", "application/x-www-form-urlencoded", "send", "message", "ontimeout", "REQUEST_TIMEOUT", "onerror", "onabort", "REQUEST_FAIL", "status", "responseText", 
" - ", "statusText", "prepare", "map not specified", "run", "execCommand", "execCommands", "clearPause", "clearNextModeHandler", "keydown", "removeEventListener", "clearUnPauseHandler", "resetUI", "getNamedStatVal", "string", "Blocks", "Finesse", "Sent", "Tspins", "Combo", "TSDs", "Time", "APM", "getPPS", "PPS", "VS", "Garbage cleared", "Holds", "WastedTs", "Lines", "MaxCombo", "Singles", "Doubles", "Triples", "Jstrises", "initialExecCommands", "pause", "field_type", "isClearMatrix", "redrawMatrix", 
"len", "opts", "skip", "paused", "totalCond", "usedCond", "stageCompleted", "sendForfeit", "l", "safeSend", "skipToNext", "next", "modeComplete", "skip-btn", "saveScore", "clip-congratz", "Info", "Result: Total starts: ", "button", "focusState", "keyCode", "stopImmediatePropagation", "BUTTON", "captions", "resolveIdentifier", ".", "split", "Namespace ", " does not exist!", "log", "assign", "cond", "check", "do", "check2", "match", "Could not fetch val for expression:", "<", ">", "=", "trim", "substring", 
",", "<=", "=<", ">=", "=>", "span", "goalOk", "goalF", ": ", "childNodes", "firstChild", "fadeOutTop", "removeChild", "Required ", ",<br>you had ", "Failed", "do2", "execById", "rtrig", "af", "when", "registerCommandTrigger", "t", "sort", "refill", "wipe", "last", "staticQueue", "repeat", "stats", "resetAll", "applyShownStats", "reorder", "text", "replaceTextVars", "modeInfo", "sprintInfo", "sprintInfoLineContent", "inp", "hide", "redrawAll", "audio", "SEenabled", "clip-", "-", "context", "WebAudioPlugin", 
"suspended", "outOfFocus", "onstatechange", "atk", "col", "garbageCols", "cols", "cs", "garbageQueue", "addAsyncGarbageFromTheQueue", "skin", "loaded", "Skin skipped because not loaded.", "warn", "changeSkin", "h", "loadSkin", "rule", "applyPresetRule", "RulesetManager", "speedLimit", "setSpeedLimit", "gravityLvl", "applyGravityLvl", "lockDelay", "setLockDelay", "switch", "substr", "findIndex", "matchAll", "Mode could not be loaded!\n", "restarts", "enableSkipButton", "click", "Skip", "href", "javascript:void(0)", 
"btnNX2", "btnNX-sm", "blue", "getHint", "xhint", "hintPtr", "hintCount", "enableHintButton", "hint-btn", "Hint", "Hint (", "loadMode", "parseModeData", "list", "getParameterByName", "effectiveList", "?list=", "Jstris", "/play/mode/list/", "pushState", "history", "/play/mode/", "/usermodes/api/", "restoreSkin", "origSkin", "json", "skinId", "authorized", "rated", "so", "loadedParts", "fields", "cid", "trig", "naturalHeight", "Loaded ", "loadModeSkins", "error", "One of the required skins couldnt be loaded.", 
"ID-", "when2", "https://www.narwhalkid.com/jstristest/dal/congratulations.ogg", "flex", "registerSounds", "finalLoader", "startsWith", "replaceActiveBlock", "registerTimeTrigger", "mode", "Mode not specified!", "toggleRepControls", "disabled", "load", "prev", "addListener", "trigger", "frame", "update", "canvas", "requestAnimFrame", "playUntilTime", "onTimeRemainingChanged", "fixUltraClockPrecision", "loadReplay", "rep", "decompressFromEncodedURIComponent", "Error", "Invalid replay file. Aborting", "initReplay", 
"initSetOnce", "restart", "onReplayLoaded", "toggleAnalytics", "Not possible to play two Ver1 replays at once!\nUse at least one V3 replay.", "allReplaysEnded", "ptr", "boolean", "Pause", "Play", "nextFrame", "updateTextBar", "prevFrame", "max", "loadAtTime", "loadAtFrame", "changeSpeed", "speed", "getTime", "SAcontainer", "showSA", "Hide", "Show", "keyInput", "getFinesse", "rep0", "rep1", "onRepReady", "onData", "compressToEncodedURIComponent", "content", "[name=csrf-token]", "querySelector", "/replay/data", 
"?id=", "&live=1", "X-CSRF-TOKEN", "onError", "function", "<br><b>ERROR:</b> ", "create", "buffer", "harddrops", "segSize", "showGlobalAvg", "showLocalSpeed", "showCurrentPos", "showRelAtk", "scLayer0", "speedChartLayer0", "ctx0", "2d", "getContext", "strokeStyle", "yellow", "fillStyle", "scLayer1", "speedChartLayer1", "ctx1", "mousemove", "mouseMove", "mouseleave", "clearHighlights", "chartClick", "checked", "dispP", "dispL", "dispG", "dispF", "dispRA", "change", "tb", "tbody", "getElementsByTagName", 
"scoreTable", "emptyData", "scoreFilter", "ordered", "initDefault", "order", "initialVal", "label", "td", "width", "ter", "statElem", "sval", "constructor", "getRandomizer", "seedrandom", "seed", "bbs", "pullBits", "loadBinaryActionsV3", "GARBAGE_ADD", "REDBAR_SET", "ARR_MOVE", "aux", "AFK", "MOVE_TO", "WIDE_GARBAGE_ADD", "replaySEset", "se", "bs", "bp", "mClr", "onCreate", "processAction", "onRestart", "moveCurrentBlock", "onBlockMove", "cc", "hdId", "FINESSE", "updatePos", "GameOver", "onGameOver", 
"linesReceived", "RECV", "garbage_add_adv", "MOVE_LEFT", "MOVE_RIGHT", "DAS_LEFT", "DAS_RIGHT", "ROTATE_LEFT", "ROTATE_RIGHT", "ROTATE_180", "time", "SOFT_DROP_BEGIN_END", "steps", "GRAVITY_STEP", "HOLD_BLOCK", "SGARBAGE_ADD", "applyGravitySteps", "playLive", "[", "] SKIP_AHEAD: ", " actions, ", " ms", "frameFinish", "] WAITING: ", " ms (", "playByTimeouts", "paintMatrixWithColor", "SCORE", "onScoreChanged", "analyze", "analyzeHardDrops", "analyzeScoring", "initScoreFilter", "findSegments", "deltat", 
"processSegments", "drawSpeedChart", "speedChart", "height", "clearRect", "beginPath", "moveTo", "lineTo", "stroke", "segments", "ceil", "#1c1c1c", "font", "10px Verdana", "fillText", "xStep", "showFinesse", "red", "fill", "getRelativeAttackOutput", "lineWidth", "#B12888", "#F95025", "#B9E446", "#001B73", "#3639E5", "segFast", "segSlow", '<thead><tr><th width="100">', "segment", '</th><th width="100">', "duration", '</th><th width="70">PPS</th></tr></thead>', "segrow", "tr", "mouseenter", "highlightSegment", 
"getTR", "TD", "nodeName", "target", "globalAlpha", "fillRect", "getEvtPos", "getBoundingClientRect", "X", "clientX", "left", "Y", "clientY", "top", "#FFFFFF", "setLineDash", "scoreFilter1", '<input type="checkbox" name="chbx', '" id="chbx', '" checked=""><label for="chbx', '">', "</label><br>", "scoreFilter2", "applyFilter", "chbx", "fetchScoreStamps", "setShownStats", "shownStats", "getItem", "shown", "CLOCK", "roundTime", "addStat", "received", "#", "Wasted", "Hold", "0.00", "addShownStats", "statTable", 
"log2", "find"];
_0x5cb4[0];
/**
 * @param {number} deltaX
 * @param {number} deltaY
 * @return {?}
 */
function sprintTimeFormat(deltaX, deltaY) {
  if (deltaX < 60 && deltaY > 0) {
    return deltaX[_0x5cb4[1]](deltaY);
  }
  var slideWidth = Math[_0x5cb4[2]](deltaX / 60);
  var total_pageviews_raw = (deltaX = deltaX - 60 * slideWidth)[_0x5cb4[1]](deltaY < 0 ? 0 : deltaY);
  return slideWidth + _0x5cb4[3] + (parseInt(total_pageviews_raw) < 10 ? _0x5cb4[4] : _0x5cb4[5]) + total_pageviews_raw;
}
/**
 * @param {?} name
 * @return {?}
 */
function getParameterByName(name) {
  name = name[_0x5cb4[7]](/[\[]/, _0x5cb4[8])[_0x5cb4[7]](/[\]]/, _0x5cb4[6]);
  var d3_map_zero = (new RegExp(_0x5cb4[11] + name + _0x5cb4[12]))[_0x5cb4[10]](location[_0x5cb4[9]]);
  return null === d3_map_zero ? _0x5cb4[5] : decodeURIComponent(d3_map_zero[1][_0x5cb4[7]](/\+/g, _0x5cb4[13]));
}
/**
 * @param {!Object} obj
 * @param {?} value
 * @return {?}
 */
function getKeyByValue(obj, value) {
  var key;
  for (key in obj) {
    if (obj[_0x5cb4[14]](key) && obj[key] === value) {
      return key;
    }
  }
}
/**
 * @param {?} signature
 * @return {?}
 */
function _simpleArrayBufferToBase64(signature) {
  var message = _0x5cb4[5];
  /** @type {!Uint8Array} */
  var result = new Uint8Array(signature);
  /** @type {number} */
  var contentIndex = result[_0x5cb4[15]];
  /** @type {number} */
  var discussionIndex = 0;
  for (; discussionIndex < contentIndex; discussionIndex++) {
    message = message + String[_0x5cb4[16]](result[discussionIndex]);
  }
  return window[_0x5cb4[17]](message);
}
/**
 * @param {?} input
 * @return {?}
 */
function base64ToBinary(input) {
  var base = window[_0x5cb4[18]](input);
  var rawLength = base[_0x5cb4[19]];
  /** @type {!Uint8Array} */
  var buffer = new Uint8Array(new ArrayBuffer(rawLength));
  /** @type {number} */
  var i = 0;
  for (; i < rawLength; i++) {
    buffer[i] = base[_0x5cb4[20]](i);
  }
  return buffer;
}
/**
 * @param {?} obj
 * @return {?}
 */
function objSize(obj) {
  var propName;
  /** @type {number} */
  var count = 0;
  for (propName in obj) {
    if (obj[_0x5cb4[14]](propName)) {
      count++;
    }
  }
  return count;
}
/**
 * @param {string} obj
 * @return {?}
 */
function objCopy(obj) {
  if (null == obj || _0x5cb4[21] != typeof obj) {
    return obj;
  }
  var copy = {};
  var key;
  for (key in obj) {
    if (obj[_0x5cb4[14]](key)) {
      copy[key] = obj[key];
    }
  }
  return copy;
}
/**
 * @param {?} value
 * @param {?} item
 * @return {?}
 */
function arrayContains(value, item) {
  var i = value[_0x5cb4[19]];
  for (; i--;) {
    if (value[i] === item) {
      return true;
    }
  }
  return false;
}
/**
 * @param {?} array
 * @param {number} steps
 * @return {?}
 */
function hexToRgb(array, steps) {
  var ip = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i[_0x5cb4[10]](array);
  return steps || (steps = 1), ip ? [parseInt(ip[1], 16) / steps, parseInt(ip[2], 16) / steps, parseInt(ip[3], 16) / steps] : null;
}
/**
 * @param {?} array
 * @return {?}
 */
function arrayUnique(array) {
  return array[_0x5cb4[23]](function(key, i, context) {
    return context[_0x5cb4[22]](key) === i;
  });
}
/**
 * @param {!NodeList} bytes
 * @return {?}
 */
function copyMatrix(bytes) {
  /** @type {!Array} */
  var newMatrix = new Array(bytes[_0x5cb4[19]]);
  /** @type {number} */
  var i = 0;
  for (; i < bytes[_0x5cb4[19]]; i++) {
    newMatrix[i] = bytes[i][_0x5cb4[24]]();
  }
  return newMatrix;
}
/**
 * @param {?} str
 * @return {?}
 */
function stringEscape(str) {
  var attrToProp = {
    "&" : _0x5cb4[25],
    "<" : _0x5cb4[26],
    ">" : _0x5cb4[27]
  };
  return str[_0x5cb4[7]](/[&<>]/g, function(name) {
    return attrToProp[name] || name;
  });
}
/**
 * @param {?} v
 * @param {!NodeList} callback
 * @return {?}
 */
function trans(v, callback) {
  return v[_0x5cb4[7]](/{(\w+)}/g, function(canCreateDiscussions, callbackIndex) {
    return callback[callbackIndex] || _0x5cb4[28];
  });
}
/**
 * @param {?} settings
 * @param {?} inline
 * @param {?} callback
 * @return {?}
 */
function getSVG(settings, inline, callback) {
  return _0x5cb4[29] + callback + _0x5cb4[30] + (_0x5cb4[31] + inline + _0x5cb4[32] + settings) + _0x5cb4[33];
}
/**
 * @param {?} elem
 * @return {undefined}
 */
function showElem(elem) {
  if (elem) {
    elem[_0x5cb4[35]][_0x5cb4[34]] = _0x5cb4[36];
  }
}
/**
 * @param {?} elem
 * @return {undefined}
 */
function hideElem(elem) {
  if (elem) {
    elem[_0x5cb4[35]][_0x5cb4[34]] = _0x5cb4[37];
  }
}
/**
 * @param {?} s
 * @return {?}
 */
function htmlEntities(s) {
  return String(s)[_0x5cb4[7]](/&/g, _0x5cb4[25])[_0x5cb4[7]](/</g, _0x5cb4[26])[_0x5cb4[7]](/>/g, _0x5cb4[27])[_0x5cb4[7]](/"/g, _0x5cb4[38]);
}
/**
 * @param {?} elem
 * @return {?}
 */
function toggleElem(elem) {
  return _0x5cb4[36] === elem[_0x5cb4[35]][_0x5cb4[34]] ? (hideElem(elem), false) : (showElem(elem), true);
}
/**
 * @param {?} event
 * @return {undefined}
 */
function selectText(event) {
  window[_0x5cb4[40]]()[_0x5cb4[39]](event);
}
/**
 * @param {?} callback
 * @param {?} options
 * @return {undefined}
 */
function addOption(callback, options) {
  var data = document[_0x5cb4[42]](_0x5cb4[41]);
  data[_0x5cb4[43]] = options[_0x5cb4[44]];
  data[_0x5cb4[45]] = stringEscape(options[_0x5cb4[46]]);
  data[_0x5cb4[48]][_0x5cb4[47]] = stringEscape(options[_0x5cb4[49]]);
  callback[_0x5cb4[50]](data);
}
/**
 * @param {string} i
 * @return {?}
 */
function CDN_URL(i) {
  var item = _0x5cb4[5];
  return _0x5cb4[51] != typeof conf_global && (item = conf_global[_0x5cb4[52]]), item ? (_0x5cb4[53] !== i[0] && (i = _0x5cb4[53] + i), _0x5cb4[54] + item + i) : i;
}
/**
 * @param {?} url
 * @param {?} callback
 * @return {undefined}
 */
function includeScript(url, callback) {
  var doc = document[_0x5cb4[55]];
  var script = document[_0x5cb4[42]](_0x5cb4[56]);
  script[_0x5cb4[57]] = _0x5cb4[58];
  script[_0x5cb4[59]] = url;
  script[_0x5cb4[60]] = script[_0x5cb4[61]] = callback;
  doc[_0x5cb4[50]](script);
}
if (!Object[_0x5cb4[62]]) {
  /**
   * @param {!NodeList} descriptor
   * @return {?}
   */
  Object[_0x5cb4[62]] = (descriptor) => {
    return Object[_0x5cb4[64]](descriptor)[_0x5cb4[63]]((settingName) => {
      return descriptor[settingName];
    });
  };
}
/** @type {!Array} */
var finesse = [[[1, 2, 1, 0, 1, 2, 1], [2, 2, 2, 2, 1, 1, 2, 2, 2, 2], [1, 2, 1, 0, 1, 2, 1], [2, 2, 2, 2, 1, 1, 2, 2, 2, 2]], [[1, 2, 2, 1, 0, 1, 2, 2, 1], [1, 2, 2, 1, 0, 1, 2, 2, 1], [1, 2, 2, 1, 0, 1, 2, 2, 1], [1, 2, 2, 1, 0, 1, 2, 2, 1]], [[1, 2, 1, 0, 1, 2, 2, 1], [2, 2, 3, 2, 1, 2, 3, 3, 2], [3, 4, 3, 2, 3, 4, 4, 3], [2, 3, 2, 1, 2, 3, 3, 2, 2]], [[1, 2, 1, 0, 1, 2, 2, 1], [2, 2, 3, 2, 1, 2, 3, 3, 2], [3, 4, 3, 2, 3, 4, 4, 3], [2, 3, 2, 1, 2, 3, 3, 2, 2]], [[1, 2, 1, 0, 1, 2, 2, 1], [2, 2, 
3, 2, 1, 2, 3, 3, 2], [3, 4, 3, 2, 3, 4, 4, 3], [2, 3, 2, 1, 2, 3, 3, 2, 2]], [[1, 2, 1, 0, 1, 2, 2, 1], [2, 2, 2, 1, 1, 2, 3, 2, 2], [1, 2, 1, 0, 1, 2, 2, 1], [2, 2, 2, 1, 1, 2, 3, 2, 2]], [[1, 2, 1, 0, 1, 2, 2, 1], [2, 2, 2, 1, 1, 2, 3, 2, 2], [1, 2, 1, 0, 1, 2, 2, 1], [2, 2, 2, 1, 1, 2, 3, 2, 2]]];
/**
 * @param {?} impactPlayer
 * @return {undefined}
 */
function Block(impactPlayer) {
  this[_0x5cb4[44]] = impactPlayer;
  /** @type {number} */
  this[_0x5cb4[65]] = 0;
  this[_0x5cb4[66]] = {
    x : 3,
    y : 0
  };
  /** @type {number} */
  this[_0x5cb4[67]] = 0;
  /** @type {number} */
  this[_0x5cb4[68]] = 0;
}
/**
 * @return {undefined}
 */
function BlockSet() {
  this[_0x5cb4[69]] = {};
  /** @type {number} */
  this[_0x5cb4[70]] = 1;
  /** @type {number} */
  this[_0x5cb4[71]] = 1;
  /** @type {boolean} */
  this[_0x5cb4[72]] = false;
  /** @type {null} */
  this[_0x5cb4[73]] = null;
  /** @type {boolean} */
  this[_0x5cb4[74]] = true;
  /** @type {null} */
  this[_0x5cb4[75]] = null;
}
/** @type {null} */
var _blockSets = null;
/**
 * @return {?}
 */
function getBlockSets() {
  /**
   * @param {!NodeList} r
   * @param {number} x
   * @param {number} c
   * @param {?} n
   * @return {undefined}
   */
  function pow(r, x, c, n) {
    if (x >= r[_0x5cb4[19]]) {
      /** @type {!Array} */
      r[x] = [];
    }
    r[x][c] = n;
  }
  /**
   * @param {!NodeList} data
   * @param {number} option
   * @return {undefined}
   */
  function shouldUseIciba(data, option) {
    /** @type {number} */
    var i = 0;
    for (; i < data[_0x5cb4[19]]; i++) {
      data[i][0] *= option;
      data[i][1] *= option;
    }
  }
  /**
   * @param {number} x
   * @return {?}
   */
  function translate(x) {
    var pendingRequests = new BlockSet;
    pendingRequests[_0x5cb4[69]] = JSON[_0x5cb4[111]](JSON[_0x5cb4[110]](xhr[_0x5cb4[69]]));
    var PL$13 = xhr[_0x5cb4[69]];
    /** @type {number} */
    var PL$17 = 0;
    for (; PL$17 < PL$13[_0x5cb4[19]]; PL$17++) {
      /** @type {number} */
      var level = 0;
      for (; level < 4; level++) {
        var outputs = PL$13[PL$17][_0x5cb4[69]][level];
        /** @type {number} */
        var i = 0;
        for (; i < 4; i++) {
          /** @type {number} */
          var k = 0;
          for (; k < 4; k++) {
            var val = outputs[i][k];
            pow(pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[69]][level], i * x, k * x, val);
            pow(pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[69]][level], i * x + 1, k * x, val);
            pow(pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[69]][level], i * x, k * x + 1, val);
            pow(pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[69]][level], i * x + 1, k * x + 1, val);
          }
        }
      }
      var indexLookupKey;
      for (indexLookupKey in pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[107]]) {
        shouldUseIciba(pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[107]][indexLookupKey][-1], x);
        shouldUseIciba(pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[107]][indexLookupKey][1], x);
        shouldUseIciba(pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[107]][indexLookupKey][2], x);
      }
      /** @type {number} */
      pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[112]][0] = 2 === x ? 2 : 1;
      pendingRequests[_0x5cb4[69]][PL$17][_0x5cb4[44]] += 100;
    }
    return pendingRequests[_0x5cb4[71]] = 2, pendingRequests[_0x5cb4[70]] = 2, pendingRequests[_0x5cb4[73]] = xhr, pendingRequests;
  }
  if (null !== _blockSets) {
    return _blockSets;
  }
  var xhr = new BlockSet;
  /** @type {boolean} */
  xhr[_0x5cb4[72]] = true;
  /** @type {!Array} */
  var _0x3de4x3 = [{
    "-1" : [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
    1 : [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    2 : [[0, 0], [0, 1]]
  }, {
    "-1" : [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
    1 : [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
    2 : [[0, 0], [1, 0]]
  }, {
    "-1" : [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    1 : [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
    2 : [[0, 0], [0, -1]]
  }, {
    "-1" : [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
    1 : [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
    2 : [[0, 0], [-1, 0]]
  }];
  /** @type {!Array} */
  var _0x3de4x4 = [{
    "-1" : [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
    1 : [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
    2 : [[0, 0], [0, 1]]
  }, {
    "-1" : [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
    1 : [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
    2 : [[0, 0], [1, 0]]
  }, {
    "-1" : [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
    1 : [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
    2 : [[0, 0], [0, -1]]
  }, {
    "-1" : [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
    1 : [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
    2 : [[0, 0], [-1, 0]]
  }];
  /** @type {!Array} */
  var _0x3de4x5 = [{
    "-1" : [[0, 0]],
    1 : [[0, 0]],
    2 : [[0, 0]]
  }, {
    "-1" : [[0, 0]],
    1 : [[0, 0]],
    2 : [[0, 0]]
  }, {
    "-1" : [[0, 0]],
    1 : [[0, 0]],
    2 : [[0, 0]]
  }, {
    "-1" : [[0, 0]],
    1 : [[0, 0]],
    2 : [[0, 0]]
  }];
  /** @type {!Array} */
  xhr[_0x5cb4[69]] = [{
    id : 0,
    name : _0x5cb4[76],
    color : 5,
    blocks : [[[0, 0, 0, 0], [1, 2, 3, 4], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 2, 0], [0, 0, 3, 0], [0, 0, 4, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [4, 3, 2, 1], [0, 0, 0, 0]], [[0, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 1, 0, 0]]],
    cc : [0, 2, 0, 1],
    yp : [1, 1],
    spawn : [3, -1],
    kicks : _0x3de4x4,
    h : [1, 4, 1, 4]
  }, {
    id : 1,
    name : _0x5cb4[77],
    color : 3,
    blocks : [[[0, 0, 0, 0], [0, 1, 2, 0], [0, 3, 4, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 3, 1, 0], [0, 4, 2, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 4, 3, 0], [0, 2, 1, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 2, 4, 0], [0, 1, 3, 0], [0, 0, 0, 0]]],
    cc : [1, 1, 1, 1],
    yp : [1, 2],
    spawn : [3, -2],
    kicks : _0x3de4x5,
    h : [2, 2, 2, 2]
  }, {
    id : 2,
    name : _0x5cb4[78],
    color : 7,
    blocks : [[[0, 0, 0, 0], [0, 1, 0, 0], [2, 3, 4, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 2, 0, 0], [0, 3, 1, 0], [0, 4, 0, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [4, 3, 2, 0], [0, 1, 0, 0]], [[0, 0, 0, 0], [0, 4, 0, 0], [1, 3, 0, 0], [0, 2, 0, 0]]],
    cc : [0, 1, 0, 0],
    yp : [1, 2],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    h : [2, 3, 2, 3]
  }, {
    id : 3,
    name : _0x5cb4[79],
    color : 2,
    blocks : [[[0, 0, 0, 0], [0, 0, 1, 0], [2, 3, 4, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 2, 0, 0], [0, 3, 0, 0], [0, 4, 1, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [4, 3, 2, 0], [1, 0, 0, 0]], [[0, 0, 0, 0], [1, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0]]],
    cc : [0, 1, 0, 0],
    yp : [1, 2],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    h : [2, 3, 2, 3]
  }, {
    id : 4,
    name : _0x5cb4[80],
    color : 6,
    blocks : [[[0, 0, 0, 0], [1, 0, 0, 0], [2, 3, 4, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 2, 1, 0], [0, 3, 0, 0], [0, 4, 0, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [4, 3, 2, 0], [0, 0, 1, 0]], [[0, 0, 0, 0], [0, 4, 0, 0], [0, 3, 0, 0], [1, 2, 0, 0]]],
    cc : [0, 1, 0, 0],
    yp : [1, 2],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    h : [2, 3, 2, 3]
  }, {
    id : 5,
    name : _0x5cb4[81],
    color : 4,
    blocks : [[[0, 0, 0, 0], [0, 1, 2, 0], [3, 4, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 3, 0, 0], [0, 4, 1, 0], [0, 0, 2, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [0, 4, 3, 0], [2, 1, 0, 0]], [[0, 0, 0, 0], [2, 0, 0, 0], [1, 4, 0, 0], [0, 3, 0, 0]]],
    cc : [0, 1, 0, 0],
    yp : [1, 2],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    h : [2, 3, 2, 3]
  }, {
    id : 6,
    name : _0x5cb4[82],
    color : 1,
    blocks : [[[0, 0, 0, 0], [1, 2, 0, 0], [0, 3, 4, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 0, 1, 0], [0, 3, 2, 0], [0, 4, 0, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [4, 3, 0, 0], [0, 2, 1, 0]], [[0, 0, 0, 0], [0, 4, 0, 0], [2, 3, 0, 0], [1, 0, 0, 0]]],
    cc : [0, 1, 0, 0],
    yp : [1, 2],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    h : [2, 3, 2, 3]
  }];
  /** @type {!Array} */
  xhr[_0x5cb4[75]] = [[[[-1, 1, 4, 1], [[1, 0, 2, 0], [1, 2, 2, 2]]], [[2, -1, 2, 4], [[1, 1, 1, 2], [3, 1, 3, 2]]], [[-1, 2, 4, 2], [[1, 1, 2, 1], [1, 3, 2, 3]]], [[1, -1, 1, 4], [[0, 1, 0, 2], [2, 1, 2, 2]]]], null, null, [[[0, 3, 2, 3], [0, 1, 1, 1]], [[0, 1, 0, 3], [2, 1, 2, 2]], [[0, 1, 2, 1], [1, 3, 2, 3]], [[2, 1, 2, 3], [0, 2, 0, 3]]], [[[0, 3, 2, 3], [1, 1, 2, 1]], [[0, 1, 0, 3], [2, 2, 2, 3]], [[0, 1, 2, 1], [0, 3, 1, 3]], [[2, 1, 2, 3], [0, 1, 0, 2]]], [[[3, 1, -1, 2], [0, 1, 2, 2]], [[1, 
  0, 2, 4], [2, 1, 1, 3]], [[3, 2, -1, 3], [0, 2, 2, 3]], [[0, 0, 1, 4], [1, 1, 0, 3]]], [[[-1, 1, 3, 2], [0, 2, 2, 1]], [[2, 0, 1, 4], [1, 1, 2, 3]], [[-1, 2, 3, 3], [2, 2, 0, 3]], [[-1, 2, 0, 4], [0, 1, 1, 3]]]];
  xhr[_0x5cb4[73]] = xhr;
  var _0x3de4x9 = new BlockSet;
  /** @type {!Array} */
  var _0x3de4x21 = [{
    "-1" : [[0, 0], [1, 0], [-1, 0]],
    1 : [[0, 0], [1, 0], [-1, 0]],
    2 : [[0, 0], [1, 0], [-1, 0]]
  }, {
    "-1" : [[0, 0], [1, 0], [-1, 0]],
    1 : [[0, 0], [1, 0], [-1, 0]],
    2 : [[0, 0], [1, 0], [-1, 0]]
  }, {
    "-1" : [[0, 0], [1, 0], [-1, 0]],
    1 : [[0, 0], [1, 0], [-1, 0]],
    2 : [[0, 0], [1, 0], [-1, 0]]
  }, {
    "-1" : [[0, 0], [1, 0], [-1, 0]],
    1 : [[0, 0], [1, 0], [-1, 0]],
    2 : [[0, 0], [1, 0], [-1, 0]]
  }];
  /** @type {!Array} */
  _0x3de4x9[_0x5cb4[69]] = [{
    id : 200,
    name : _0x5cb4[76],
    color : 1,
    blocks : [[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]], [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]]],
    cc : [0, 2, 0, 1],
    spawn : [3, -1],
    kicks : _0x3de4x5
  }, {
    id : 201,
    name : _0x5cb4[77],
    color : 3,
    blocks : [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]],
    cc : [1, 1, 1, 1],
    spawn : [3, -2],
    kicks : _0x3de4x21
  }, {
    id : 202,
    name : _0x5cb4[78],
    color : 5,
    blocks : [[[0, 0, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], [[0, 1, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 1, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0]], [[0, 1, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]],
    cc : [0, 1, 0, 0],
    spawn : [3, -2],
    kicks : _0x3de4x21
  }, {
    id : 203,
    name : _0x5cb4[79],
    color : 2,
    blocks : [[[0, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0], [0, 0, 0, 0]], [[1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 0, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0]], [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]]],
    cc : [0, 1, 0, 0],
    spawn : [3, -2],
    kicks : _0x3de4x21
  }, {
    id : 204,
    name : _0x5cb4[80],
    color : 6,
    blocks : [[[0, 0, 0, 0], [1, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]], [[0, 1, 0, 0], [0, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0]], [[0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]]],
    cc : [0, 1, 0, 0],
    spawn : [3, -2],
    kicks : _0x3de4x21
  }, {
    id : 205,
    name : _0x5cb4[81],
    color : 7,
    blocks : [[[0, 0, 0, 0], [0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0]], [[1, 0, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0]], [[1, 0, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]]],
    cc : [0, 1, 0, 0],
    spawn : [3, -2],
    kicks : _0x3de4x21
  }, {
    id : 206,
    name : _0x5cb4[82],
    color : 4,
    blocks : [[[0, 0, 0, 0], [1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]],
    cc : [0, 1, 0, 0],
    spawn : [3, -2],
    kicks : _0x3de4x21
  }];
  _0x3de4x9[_0x5cb4[73]] = _0x3de4x9;
  var _0x3de4x22 = new BlockSet;
  _0x3de4x22[_0x5cb4[73]] = _0x3de4x22;
  /** @type {boolean} */
  _0x3de4x22[_0x5cb4[74]] = false;
  /** @type {!Array} */
  _0x3de4x22[_0x5cb4[69]] = [{
    id : 21,
    name : _0x5cb4[83],
    yp : [2, 2],
    xp : 0,
    rp : [2, 2],
    blocks : [[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x4,
    cc : [0, 0, 0, 0],
    color : 5
  }, {
    id : 22,
    name : _0x5cb4[84],
    yp : [0, 2],
    xp : 0,
    rp : [1, 1],
    blocks : [[[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 1, 1, 0, 0], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 6
  }, {
    id : 23,
    name : _0x5cb4[85],
    yp : [0, 2],
    xp : [1, 3],
    rp : [2, 2],
    blocks : [[[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 7
  }, {
    id : 24,
    name : _0x5cb4[86],
    yp : [0, 1],
    xp : 0,
    rp : [1, 1],
    blocks : [[[1, 0, 1, 0, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 1, 0, 0, 0], [0, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -1],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 1
  }, {
    id : 25,
    name : _0x5cb4[87],
    yp : [0, 2],
    xp : 0,
    rp : [1, 1],
    blocks : [[[0, 0, 1, 0, 0], [0, 1, 1, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 1, 0, 0], [1, 1, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 2
  }, {
    id : 26,
    name : _0x5cb4[88],
    yp : [0, 2],
    xp : 0,
    rp : [1, 1],
    blocks : [[[0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 3
  }, {
    id : 27,
    name : _0x5cb4[89],
    yp : [1, 2],
    xp : [1, 4],
    rp : [2, 2],
    blocks : [[[0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 4
  }, {
    id : 28,
    name : _0x5cb4[90],
    yp : [1, 2],
    xp : 0,
    rp : [2, 2],
    blocks : [[[0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 1, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 5
  }, {
    id : 29,
    name : _0x5cb4[91],
    yp : [1, 2],
    xp : 0,
    rp : [2, 2],
    blocks : [[[0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 1], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 6
  }, {
    id : 30,
    name : _0x5cb4[92],
    yp : [1, 2],
    xp : [1, 4],
    rp : [2, 2],
    blocks : [[[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 7
  }, {
    id : 31,
    name : _0x5cb4[93],
    yp : [1, 2],
    xp : 0,
    rp : [2, 2],
    blocks : [[[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 1
  }, {
    id : 32,
    name : _0x5cb4[94],
    yp : [1, 2],
    xp : [1, 4],
    rp : [2, 2],
    blocks : [[[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 2
  }, {
    id : 33,
    name : _0x5cb4[95],
    yp : [0, 1],
    xp : 0,
    rp : [1, 1],
    blocks : [[[1, 1, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 1, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -1],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 3
  }, {
    id : 34,
    name : _0x5cb4[96],
    yp : [0, 1],
    xp : 0,
    rp : [1, 1],
    blocks : [[[0, 1, 1, 0, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -1],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 4
  }, {
    id : 35,
    name : _0x5cb4[97],
    yp : [0, 2],
    xp : 0,
    rp : [1, 1],
    blocks : [[[1, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 1, 0, 0], [1, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [0, 1, 1, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 5
  }, {
    id : 36,
    name : _0x5cb4[98],
    yp : [0, 2],
    xp : 0,
    rp : [1, 1],
    blocks : [[[0, 0, 1, 0, 0], [1, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 6
  }, {
    id : 37,
    name : _0x5cb4[99],
    yp : [0, 2],
    xp : 0,
    rp : [1, 1],
    blocks : [[[0, 0, 1, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 1, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 7
  }, {
    id : 38,
    name : _0x5cb4[100],
    yp : [0, 2],
    xp : 0,
    rp : [1, 1],
    blocks : [[[1, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[1, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]],
    spawn : [3, -2],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 1
  }];
  var _0x3de4x23 = new BlockSet;
  /** @type {boolean} */
  _0x3de4x23[_0x5cb4[72]] = true;
  _0x3de4x23[_0x5cb4[73]] = _0x3de4x23;
  /** @type {boolean} */
  _0x3de4x23[_0x5cb4[74]] = false;
  /** @type {!Array} */
  _0x3de4x23[_0x5cb4[69]] = [{
    id : 40,
    name : _0x5cb4[101],
    yp : [0, 0],
    blocks : [[[1]], [[1]], [[1]], [[1]]],
    spawn : [4, 0],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 1
  }, {
    id : 41,
    name : _0x5cb4[102],
    yp : [0, 0],
    blocks : [[[1, 2], [0, 0]], [[0, 1], [0, 2]], [[0, 0], [2, 1]], [[2, 0], [1, 0]]],
    spawn : [4, 0],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 2
  }, {
    id : 42,
    name : _0x5cb4[103],
    yp : [1, 1],
    blocks : [[[0, 0, 0], [1, 2, 3], [0, 0, 0]], [[0, 1, 0], [0, 2, 0], [0, 3, 0]], [[0, 0, 0], [3, 2, 1], [0, 0, 0]], [[0, 3, 0], [0, 2, 0], [0, 1, 0]]],
    spawn : [3, -1],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 3
  }, {
    id : 43,
    name : _0x5cb4[104],
    yp : [0, 1],
    blocks : [[[1, 0, 0], [2, 3, 0], [0, 0, 0]], [[2, 1, 0], [3, 0, 0], [0, 0, 0]], [[3, 2, 0], [0, 1, 0], [0, 0, 0]], [[0, 3, 0], [1, 2, 0], [0, 0, 0]]],
    spawn : [4, -1],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 4
  }];
  var _0x3de4x24 = new BlockSet;
  _0x3de4x24[_0x5cb4[73]] = _0x3de4x24;
  /** @type {boolean} */
  _0x3de4x24[_0x5cb4[74]] = false;
  _0x3de4x24[_0x5cb4[69]] = xhr[_0x5cb4[69]][_0x5cb4[24]]()[_0x5cb4[105]](_0x3de4x23[_0x5cb4[69]][_0x5cb4[24]]())[_0x5cb4[105]](_0x3de4x22[_0x5cb4[69]][_0x5cb4[24]]());
  var config = new BlockSet;
  var entry;
  for (entry in config[_0x5cb4[69]] = [], config[_0x5cb4[73]] = config, xhr[_0x5cb4[69]]) {
    config[_0x5cb4[69]][_0x5cb4[106]](objCopy(xhr[_0x5cb4[69]][entry]));
  }
  /** @type {!Array} */
  var blocksLayouts = [[0, 0], [-1, 0], [1, 0], [0, -1], [-1, -1], [1, -1], [-2, 0], [2, 0]];
  var fff = {
    "-1" : blocksLayouts,
    1 : blocksLayouts,
    2 : blocksLayouts
  };
  /** @type {!Array} */
  var text = [fff, fff, fff, fff];
  for (entry in config[_0x5cb4[69]]) {
    /** @type {!Array} */
    config[_0x5cb4[69]][entry][_0x5cb4[107]] = text;
  }
  var data = new BlockSet;
  data[_0x5cb4[73]] = data;
  /** @type {!Array} */
  data[_0x5cb4[69]] = [];
  /** @type {!Array} */
  var domingo = [[0, 0], [-1, 0], [1, 0], [0, -1], [-1, -1], [1, -1], [-2, 0], [2, 0], [0, -2], [-1, -2], [1, -2], [0, 1], [-2, -2], [2, -2], [-3, -3], [3, -3]];
  var mouseup = {
    "-1" : domingo,
    1 : domingo,
    2 : domingo
  };
  /** @type {!Array} */
  var events = [mouseup, mouseup, mouseup, mouseup];
  /** @type {!Array} */
  var _0x3de4x2e = [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0], [1, 0, 0, 0]], [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]];
  for (entry in xhr[_0x5cb4[69]]) {
    data[_0x5cb4[69]][_0x5cb4[106]](objCopy(xhr[_0x5cb4[69]][entry]));
    /** @type {!Array} */
    data[_0x5cb4[69]][entry][_0x5cb4[107]] = events;
    if (_0x5cb4[77] === data[_0x5cb4[69]][entry][_0x5cb4[108]]) {
      data[_0x5cb4[69]][entry][_0x5cb4[108]] = _0x5cb4[109];
      /** @type {number} */
      data[_0x5cb4[69]][entry][_0x5cb4[44]] = 50;
      /** @type {!Array} */
      data[_0x5cb4[69]][entry][_0x5cb4[69]] = _0x3de4x2e;
    }
  }
  var name = new BlockSet;
  name[_0x5cb4[73]] = name;
  /** @type {boolean} */
  name[_0x5cb4[74]] = false;
  /** @type {!Array} */
  name[_0x5cb4[69]] = [{
    id : 400,
    name : _0x5cb4[101],
    yp : [0, 0],
    blocks : [[[0]], [[0]], [[0]], [[0]]],
    spawn : [4, -1],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 9
  }];
  var counterHandlers = new BlockSet;
  /** @type {boolean} */
  counterHandlers[_0x5cb4[72]] = true;
  counterHandlers[_0x5cb4[73]] = name;
  /** @type {boolean} */
  counterHandlers[_0x5cb4[74]] = false;
  /** @type {boolean} */
  counterHandlers[_0x5cb4[113]] = false;
  /** @type {!Array} */
  counterHandlers[_0x5cb4[69]] = [{
    id : 401,
    name : _0x5cb4[114],
    yp : [0, 0],
    blocks : [[[1]], [[1]], [[1]], [[1]]],
    spawn : [4, -1],
    kicks : _0x3de4x3,
    cc : [0, 0, 0, 0],
    color : 9
  }];
  var translatedHTML = translate(2);
  var b = translate(2);
  return b[_0x5cb4[70]] = 1, _blockSets = [xhr, translatedHTML, b, _0x3de4x9, _0x3de4x22, _0x3de4x23, _0x3de4x24, config, data, counterHandlers];
}
/**
 * @return {undefined}
 */
function Scoring() {
  this[_0x5cb4[115]] = Object[_0x5cb4[116]]({
    SOFT_DROP : 0,
    HARD_DROP : 1,
    CLEAR1 : 2,
    CLEAR2 : 3,
    CLEAR3 : 4,
    CLEAR4 : 5,
    TSPIN_MINI : 6,
    TSPIN : 7,
    TSPIN_MINI_SINGLE : 8,
    TSPIN_SINGLE : 9,
    TSPIN_DOUBLE : 10,
    TSPIN_TRIPLE : 11,
    PERFECT_CLEAR : 12,
    COMBO : 13,
    CLEAR5 : 14
  });
  /** @type {!Array} */
  this[_0x5cb4[117]] = [-1, -1, 1, 2, 3, 4, -1, -1, 8, 7, 5, 6, 9, -1, 6];
  /** @type {!Array} */
  this[_0x5cb4[81]] = Array(15);
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[118]]] = 1;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[119]]] = 2;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[120]]] = 100;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[121]]] = 300;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[122]]] = 500;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[123]]] = 800;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[124]]] = 1600;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[125]]] = 100;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[126]]] = 400;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[127]]] = 200;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[128]]] = 800;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[129]]] = 1200;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[130]]] = 1600;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[131]]] = 3E3;
  /** @type {number} */
  this[_0x5cb4[81]][this[_0x5cb4[115]][_0x5cb4[132]]] = 50;
  /** @type {!Array} */
  this[_0x5cb4[133]] = Array(15);
  /** @type {number} */
  this[_0x5cb4[133]][this[_0x5cb4[115]][_0x5cb4[123]]] = 400;
  /** @type {number} */
  this[_0x5cb4[133]][this[_0x5cb4[115]][_0x5cb4[124]]] = 800;
  /** @type {number} */
  this[_0x5cb4[133]][this[_0x5cb4[115]][_0x5cb4[127]]] = 100;
  /** @type {number} */
  this[_0x5cb4[133]][this[_0x5cb4[115]][_0x5cb4[128]]] = 400;
  /** @type {number} */
  this[_0x5cb4[133]][this[_0x5cb4[115]][_0x5cb4[129]]] = 600;
  /** @type {number} */
  this[_0x5cb4[133]][this[_0x5cb4[115]][_0x5cb4[130]]] = 800;
}
Scoring[_0x5cb4[135]][_0x5cb4[134]] = function(name, canCreateDiscussions) {
  var ret = this[_0x5cb4[81]][name];
  return void 0 !== canCreateDiscussions && true === canCreateDiscussions && void 0 !== this[_0x5cb4[133]][name] && (ret = ret + this[_0x5cb4[133]][name]), ret;
}, Scoring[_0x5cb4[135]][_0x5cb4[136]] = function(targetfieldName, leftFence, data_select) {
  if (targetfieldName === this[_0x5cb4[115]][_0x5cb4[132]]) {
    return data_select[_0x5cb4[137]](leftFence);
  }
  let name = this[_0x5cb4[117]][targetfieldName];
  let fns = 0;
  return name && -1 != name && (fns = data_select[_0x5cb4[138]][name]), this[_0x5cb4[133]][targetfieldName] && data_select[_0x5cb4[139]] && (fns = fns + data_select[_0x5cb4[138]][10]), fns;
}, window[_0x5cb4[140]] = new Scoring;
var Action = Object[_0x5cb4[116]]({
  MOVE_LEFT : 0,
  MOVE_RIGHT : 1,
  DAS_LEFT : 2,
  DAS_RIGHT : 3,
  ROTATE_LEFT : 4,
  ROTATE_RIGHT : 5,
  ROTATE_180 : 6,
  HARD_DROP : 7,
  SOFT_DROP_BEGIN_END : 8,
  GRAVITY_STEP : 9,
  HOLD_BLOCK : 10,
  GARBAGE_ADD : 11,
  SGARBAGE_ADD : 12,
  REDBAR_SET : 13,
  ARR_MOVE : 14,
  AUX : 15
});
var Aux = Object[_0x5cb4[116]]({
  AFK : 0,
  BLOCK_SET : 1,
  MOVE_TO : 2,
  RANDOMIZER : 3,
  MATRIX_MOD : 4,
  WIDE_GARBAGE_ADD : 5
});
/**
 * @param {?} logger
 * @return {undefined}
 */
function GameCore(logger) {
  this[_0x5cb4[141]] = logger;
  /** @type {null} */
  this[_0x5cb4[142]] = null;
  /** @type {!Array} */
  this[_0x5cb4[143]] = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  /** @type {!Array} */
  this[_0x5cb4[144]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this[_0x5cb4[145]] = getBlockSets();
  /** @type {!Array} */
  this[_0x5cb4[146]] = [{
    id : 0,
    time : .05,
    steps : 0
  }, {
    id : 1,
    time : .008,
    steps : 0
  }, {
    id : 2,
    time : 0,
    steps : 1
  }, {
    id : 3,
    time : 0,
    steps : 2
  }, {
    id : 4,
    time : 0,
    steps : 20
  }];
  this[_0x5cb4[147]] = {
    Z : 6,
    L : 3,
    O : 1,
    S : 5,
    I : 0,
    J : 4,
    T : 2
  };
  /** @type {!Array} */
  this[_0x5cb4[148]] = [new Block(0), new Block(0), new Block(0), new Block(0), new Block(0)];
  this[_0x5cb4[149]] = this[_0x5cb4[148]][_0x5cb4[19]];
  this[_0x5cb4[150]] = {
    lines : 0,
    singles : 0,
    doubles : 0,
    triples : 0,
    tetrises : 0,
    maxCombo : 0,
    linesSent : 0,
    linesReceived : 0,
    PCs : 0,
    lastPC : 0,
    TSD : 0,
    TSD20 : 0,
    B2B : 0,
    attack : 0,
    score : 0,
    holds : 0,
    garbageCleared : 0,
    wasted : 0,
    tpieces : 0,
    tspins : 0
  };
  /** @type {!Array} */
  this[_0x5cb4[151]] = [{
    id : 0,
    name : _0x5cb4[152],
    data : _0x5cb4[5]
  }, {
    id : 1,
    name : _0x5cb4[153],
    data : _0x5cb4[154],
    w : 32
  }, {
    id : 2,
    name : _0x5cb4[155],
    data : _0x5cb4[156],
    w : 32
  }, {
    id : 3,
    name : _0x5cb4[157],
    data : _0x5cb4[158],
    w : 32
  }, {
    id : 4,
    name : _0x5cb4[159],
    data : _0x5cb4[160],
    w : 32
  }, {
    id : 5,
    name : _0x5cb4[161],
    data : _0x5cb4[162],
    w : 32
  }, {
    id : 6,
    name : _0x5cb4[163],
    data : _0x5cb4[5]
  }, {
    id : 7,
    name : _0x5cb4[164],
    data : _0x5cb4[5]
  }, {
    id : 8,
    name : _0x5cb4[165],
    data : _0x5cb4[166],
    w : 32
  }, {
    id : 9,
    name : _0x5cb4[167],
    data : _0x5cb4[168],
    w : 32
  }, {
    id : 10,
    name : _0x5cb4[169],
    data : _0x5cb4[170],
    w : 32
  }, {
    id : 11,
    name : _0x5cb4[171],
    data : _0x5cb4[172],
    w : 32
  }, {
    id : 12,
    name : _0x5cb4[173],
    data : _0x5cb4[174],
    w : 32
  }, {
    id : 13,
    name : _0x5cb4[175],
    data : _0x5cb4[176],
    w : 32
  }];
  /** @type {null} */
  this[_0x5cb4[177]] = null;
  /** @type {boolean} */
  this[_0x5cb4[178]] = false;
  /** @type {boolean} */
  this[_0x5cb4[179]] = false;
  /** @type {boolean} */
  this[_0x5cb4[180]] = false;
  /** @type {boolean} */
  this[_0x5cb4[181]] = false;
  /** @type {boolean} */
  this[_0x5cb4[139]] = false;
  /** @type {boolean} */
  this[_0x5cb4[182]] = false;
  /** @type {boolean} */
  this[_0x5cb4[183]] = false;
  /** @type {!Array} */
  this[_0x5cb4[184]] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  /** @type {!Array} */
  this[_0x5cb4[185]] = [0, 2, 3, 4, 5, 6, 7, 8, 1, 0];
  /** @type {!Array} */
  this[_0x5cb4[186]] = [_0x5cb4[187], _0x5cb4[188], _0x5cb4[189], _0x5cb4[190], _0x5cb4[191], _0x5cb4[192], _0x5cb4[193], _0x5cb4[194], _0x5cb4[195], _0x5cb4[196], _0x5cb4[187], _0x5cb4[197]];
  /** @type {!Array} */
  this[_0x5cb4[198]] = [[0, 0, 0], [215, 15, 55], [227, 91, 2], [227, 159, 2], [89, 177, 1], [15, 155, 215], [33, 65, 198], [175, 41, 138], [153, 153, 153], [106, 106, 106], [0, 0, 0], [255, 255, 255]];
  /** @type {number} */
  var IS_HANDLED = 0;
  for (; IS_HANDLED < this[_0x5cb4[198]][_0x5cb4[19]]; ++IS_HANDLED) {
    /** @type {number} */
    var id = 0;
    for (; id < 3; ++id) {
      this[_0x5cb4[198]][IS_HANDLED][id] /= 255;
    }
  }
  /** @type {!Array} */
  this[_0x5cb4[199]] = [_0x5cb4[187], _0x5cb4[200], _0x5cb4[201], _0x5cb4[202], _0x5cb4[203], _0x5cb4[204], _0x5cb4[205], _0x5cb4[206], _0x5cb4[195], _0x5cb4[207], _0x5cb4[187], _0x5cb4[197]];
  /** @type {!Array} */
  this[_0x5cb4[208]] = [_0x5cb4[209], _0x5cb4[210], _0x5cb4[211], _0x5cb4[212], _0x5cb4[213]];
  /** @type {!Array} */
  this[_0x5cb4[214]] = [];
  this[_0x5cb4[215]] = new Items(this);
  this[_0x5cb4[216]] = this[_0x5cb4[217]] = {
    clearDelay : 0,
    rnd : 0,
    showPreviews : 5,
    holdEnabled : true,
    baseBlockSet : 0,
    gravityLvl : 1,
    lockDelay : [500, 5E3, 2E4],
    mess : 0,
    gapW : 1,
    gInv : false,
    gDelay : 500,
    gblock : 0,
    tsdOnly : false,
    allSpin : 0,
    speedLimit : 0,
    scoreMult : 1,
    clearLines : true,
    sfx : true,
    vsfx : true,
    solidAttack : false,
    ext : 0,
    sgProfile : [0, 3]
  };
  this[_0x5cb4[219]](this[_0x5cb4[216]][_0x5cb4[218]]);
}
/**
 * @param {?} data
 * @param {?} length
 * @param {?} width
 * @return {undefined}
 */
function Bag(data, length, width) {
  this[_0x5cb4[220]] = data;
  /** @type {!Array} */
  this[_0x5cb4[221]] = [];
  for (let i = 0; i < length; i++) {
    for (let img_x = 0; img_x < width; img_x++) {
      this[_0x5cb4[221]][_0x5cb4[106]](i);
    }
  }
  this[_0x5cb4[222]] = this[_0x5cb4[221]][_0x5cb4[24]](0);
}
/**
 * @param {?} config
 * @param {?} _newfeed
 * @return {undefined}
 */
function Classic(config, _newfeed) {
  this[_0x5cb4[220]] = config;
  this[_0x5cb4[223]] = _newfeed;
}
/**
 * @param {?} res
 * @param {?} rej
 * @param {?} nb_ft
 * @param {!Function} type_geom
 * @return {undefined}
 */
function OneBlock(res, rej, nb_ft, type_geom) {
  if (this[_0x5cb4[220]] = res, this[_0x5cb4[223]] = rej, this[_0x5cb4[222]] = [], type_geom) {
    let _0x3de4x9 = new Bag(res, rej, type_geom);
    for (let _t_ix = 0; _t_ix < nb_ft; ++_t_ix) {
      this[_0x5cb4[222]][_0x5cb4[106]](_0x3de4x9[_0x5cb4[224]]()[_0x5cb4[44]]);
    }
  } else {
    for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
      let artistTrack;
      do {
        artistTrack = Math[_0x5cb4[2]](this.RNG() * this[_0x5cb4[223]]);
      } while (-1 !== this[_0x5cb4[222]][_0x5cb4[22]](artistTrack));
      this[_0x5cb4[222]][_0x5cb4[106]](artistTrack);
    }
  }
  /** @type {number} */
  this[_0x5cb4[225]] = 0;
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function C2Sim(formatters, customFormatters) {
  this[_0x5cb4[220]] = formatters;
  this[_0x5cb4[223]] = customFormatters;
  /** @type {!Array} */
  this[_0x5cb4[226]] = [-1, -2];
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function Repeated(formatters, customFormatters) {
  this[_0x5cb4[142]] = formatters;
  this[_0x5cb4[223]] = customFormatters;
  /** @type {null} */
  this[_0x5cb4[36]] = null;
  /** @type {number} */
  this[_0x5cb4[227]] = 0;
  this[_0x5cb4[228]]();
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function BsBlock(formatters, customFormatters) {
  this[_0x5cb4[142]] = formatters;
  this[_0x5cb4[229]] = customFormatters;
  /** @type {number} */
  this[_0x5cb4[227]] = 0;
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function BigBlockRand(formatters, customFormatters) {
  this[_0x5cb4[142]] = formatters;
  this[_0x5cb4[229]] = customFormatters;
  /** @type {number} */
  this[_0x5cb4[227]] = 0;
  /** @type {number} */
  this[_0x5cb4[230]] = 5E3;
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function ConstBlock(formatters, customFormatters) {
  this[_0x5cb4[44]] = formatters;
  this[_0x5cb4[65]] = customFormatters;
}
/**
 * @return {undefined}
 */
function BaseSFXset() {
  /** @type {number} */
  this[_0x5cb4[231]] = .5;
  /** @type {boolean} */
  this[_0x5cb4[232]] = false;
  /** @type {null} */
  this[_0x5cb4[233]] = null;
  /**
   * @param {?} ballNumber
   * @return {?}
   */
  this[_0x5cb4[234]] = function(ballNumber) {
    return this[_0x5cb4[235]](this[ballNumber]);
  };
  /**
   * @param {!Object} canCreateDiscussions
   * @return {?}
   */
  this[_0x5cb4[235]] = function(canCreateDiscussions) {
    return null === canCreateDiscussions ? null : canCreateDiscussions[_0x5cb4[236]] ? canCreateDiscussions[_0x5cb4[237]] : CDN_URL(_0x5cb4[238] + canCreateDiscussions[_0x5cb4[65]] + _0x5cb4[53] + canCreateDiscussions[_0x5cb4[237]]);
  };
  /**
   * @param {?} suggestedValue
   * @return {?}
   */
  this[_0x5cb4[239]] = function(suggestedValue) {
    return this[_0x5cb4[232]] ? _0x5cb4[240] + Math[_0x5cb4[241]](this[_0x5cb4[233]], suggestedValue) : _0x5cb4[242];
  };
  /**
   * @param {?} ballNumber
   * @return {?}
   */
  this[_0x5cb4[243]] = function(ballNumber) {
    return this[_0x5cb4[244]] && this[_0x5cb4[244]][ballNumber] ? _0x5cb4[245] + ballNumber : null;
  };
  /**
   * @param {?} packetArray
   * @param {?} json_event_model
   * @param {?} canCreateDiscussions
   * @param {number} key
   * @return {?}
   */
  this[_0x5cb4[246]] = function(packetArray, json_event_model, canCreateDiscussions, key) {
    let el = [];
    let prefix = _0x5cb4[5];
    return canCreateDiscussions && (this[_0x5cb4[247]] ? prefix = _0x5cb4[248] : el[_0x5cb4[106]](_0x5cb4[249])), key >= 0 && el[_0x5cb4[106]](this[_0x5cb4[239]](key)), this[_0x5cb4[244]] && (el[_0x5cb4[106]](prefix + this[_0x5cb4[243]](json_event_model)), packetArray === Score[_0x5cb4[115]][_0x5cb4[131]] && el[_0x5cb4[106]](prefix + this[_0x5cb4[243]](packetArray))), el;
  };
  this[_0x5cb4[250]] = {
    url : _0x5cb4[251],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[242]] = {
    url : _0x5cb4[252],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[253]] = {
    url : _0x5cb4[254],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[255]] = {
    url : _0x5cb4[256],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[257]] = {
    url : _0x5cb4[258],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[259]] = {
    url : _0x5cb4[260],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[261]] = {
    url : _0x5cb4[262],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[263]] = {
    url : _0x5cb4[264],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[265]] = {
    url : _0x5cb4[266],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[267]] = {
    url : _0x5cb4[268],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[269]] = {
    url : _0x5cb4[270],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[68]] = {
    url : _0x5cb4[271],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[272]] = {
    url : _0x5cb4[273],
    abs : 0,
    set : 0
  };
  this[_0x5cb4[274]] = {
    url : _0x5cb4[275],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[276]] = {
    url : _0x5cb4[277],
    abs : 0,
    set : 0
  };
  /** @type {null} */
  this[_0x5cb4[278]] = null;
  /** @type {null} */
  this[_0x5cb4[279]] = null;
  /** @type {null} */
  this[_0x5cb4[280]] = null;
  /** @type {null} */
  this[_0x5cb4[281]] = null;
  /** @type {null} */
  this[_0x5cb4[249]] = null;
  /** @type {null} */
  this[_0x5cb4[244]] = null;
  /** @type {null} */
  this[_0x5cb4[247]] = null;
  /** @type {null} */
  this[_0x5cb4[282]] = null;
  /** @type {null} */
  this[_0x5cb4[283]] = null;
  /** @type {null} */
  this[_0x5cb4[284]] = null;
}
/**
 * @return {undefined}
 */
function NullSFXset() {
  /** @type {null} */
  this[_0x5cb4[250]] = null;
  /** @type {null} */
  this[_0x5cb4[242]] = null;
  /** @type {null} */
  this[_0x5cb4[253]] = null;
  /** @type {null} */
  this[_0x5cb4[255]] = null;
  /** @type {null} */
  this[_0x5cb4[257]] = null;
  /** @type {null} */
  this[_0x5cb4[259]] = null;
  /** @type {null} */
  this[_0x5cb4[261]] = null;
  /** @type {null} */
  this[_0x5cb4[263]] = null;
  /** @type {null} */
  this[_0x5cb4[265]] = null;
  /** @type {null} */
  this[_0x5cb4[267]] = null;
  /** @type {null} */
  this[_0x5cb4[68]] = null;
  /** @type {null} */
  this[_0x5cb4[272]] = null;
  /** @type {null} */
  this[_0x5cb4[278]] = null;
  /** @type {null} */
  this[_0x5cb4[279]] = null;
  /** @type {null} */
  this[_0x5cb4[280]] = null;
  /** @type {null} */
  this[_0x5cb4[281]] = null;
  /** @type {null} */
  this[_0x5cb4[249]] = null;
  /** @type {null} */
  this[_0x5cb4[274]] = null;
  /** @type {null} */
  this[_0x5cb4[244]] = null;
  /** @type {null} */
  this[_0x5cb4[247]] = null;
  /** @type {null} */
  this[_0x5cb4[282]] = null;
  /** @type {null} */
  this[_0x5cb4[283]] = null;
  /** @type {null} */
  this[_0x5cb4[284]] = null;
  /** @type {null} */
  this[_0x5cb4[276]] = null;
}
/**
 * @return {undefined}
 */
function YotipoSFXset() {
  /** @type {number} */
  this[_0x5cb4[231]] = 1;
  /** @type {null} */
  this[_0x5cb4[250]] = null;
  this[_0x5cb4[242]] = {
    url : _0x5cb4[252],
    abs : 0,
    set : 1
  };
  this[_0x5cb4[253]] = {
    url : _0x5cb4[254],
    abs : 0,
    set : 1
  };
  /** @type {null} */
  this[_0x5cb4[255]] = null;
  this[_0x5cb4[257]] = {
    url : _0x5cb4[258],
    abs : 0,
    set : 1
  };
  this[_0x5cb4[259]] = {
    url : _0x5cb4[260],
    abs : 0,
    set : 1
  };
  this[_0x5cb4[261]] = {
    url : _0x5cb4[262],
    abs : 0,
    set : 1
  };
}
/**
 * @return {undefined}
 */
function RainforestSFXset() {
  this[_0x5cb4[282]] = _0x5cb4[285];
  /** @type {number} */
  this[_0x5cb4[231]] = .4;
  /** @type {null} */
  this[_0x5cb4[255]] = null;
  /** @type {null} */
  this[_0x5cb4[250]] = null;
  this[_0x5cb4[253]] = {
    url : _0x5cb4[286],
    abs : 0,
    set : 2
  };
  this[_0x5cb4[257]] = {
    url : _0x5cb4[287],
    abs : 0,
    set : 2
  };
  this[_0x5cb4[232]] = {
    url : _0x5cb4[288],
    abs : 0,
    set : 2,
    duration : 1E3,
    spacing : 500,
    cnt : 15
  };
}
/**
 * @return {undefined}
 */
function TetraSFXset() {
  this[_0x5cb4[282]] = _0x5cb4[289];
  /** @type {number} */
  this[_0x5cb4[231]] = .35;
  /** @type {!Array} */
  this[_0x5cb4[232]] = [null];
  /** @type {number} */
  var _0x3de4x2 = 1;
  for (; _0x3de4x2 <= 20; _0x3de4x2++) {
    this[_0x5cb4[232]][_0x5cb4[106]]({
      url : _0x5cb4[290] + _0x3de4x2 + _0x5cb4[291],
      abs : 0,
      set : 3
    });
  }
  this[_0x5cb4[250]] = {
    url : _0x5cb4[292],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[255]] = {
    url : _0x5cb4[293],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[259]] = {
    url : _0x5cb4[294],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[261]] = {
    url : _0x5cb4[295],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[279]] = {
    url : _0x5cb4[296],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[253]] = {
    url : _0x5cb4[297],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[278]] = {
    url : _0x5cb4[298],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[280]] = {
    url : _0x5cb4[299],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[281]] = {
    url : _0x5cb4[300],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[249]] = {
    url : _0x5cb4[301],
    abs : 0,
    set : 3
  };
  /** @type {null} */
  this[_0x5cb4[242]] = null;
  this[_0x5cb4[257]] = {
    url : _0x5cb4[302],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[267]] = {
    url : _0x5cb4[303],
    abs : 0,
    set : 3
  };
  /** @type {!Array} */
  this[_0x5cb4[244]] = Array(15);
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[120]]] = {
    url : _0x5cb4[304],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[121]]] = {
    url : _0x5cb4[305],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[122]]] = {
    url : _0x5cb4[306],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[123]]] = {
    url : _0x5cb4[307],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[125]]] = {
    url : _0x5cb4[308],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[126]]] = {
    url : _0x5cb4[309],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[127]]] = {
    url : _0x5cb4[310],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[128]]] = {
    url : _0x5cb4[311],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[129]]] = {
    url : _0x5cb4[312],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[130]]] = {
    url : _0x5cb4[313],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[131]]] = {
    url : _0x5cb4[314],
    abs : 0,
    set : 3
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[124]]] = {
    url : _0x5cb4[313],
    abs : 0,
    set : 3
  };
}
/**
 * @return {undefined}
 */
function SpawnSFXset() {
  this[_0x5cb4[282]] = _0x5cb4[315];
  /** @type {number} */
  this[_0x5cb4[231]] = 1;
  this[_0x5cb4[284]] = {
    I : {
      url : _0x5cb4[316],
      abs : 0,
      set : 4
    },
    O : {
      url : _0x5cb4[317],
      abs : 0,
      set : 4
    },
    S : {
      url : _0x5cb4[318],
      abs : 0,
      set : 4
    },
    Z : {
      url : _0x5cb4[319],
      abs : 0,
      set : 4
    },
    T : {
      url : _0x5cb4[320],
      abs : 0,
      set : 4
    },
    L : {
      url : _0x5cb4[321],
      abs : 0,
      set : 4
    },
    J : {
      url : _0x5cb4[322],
      abs : 0,
      set : 4
    }
  };
}
/**
 * @return {undefined}
 */
function VoiceSFXset() {
  this[_0x5cb4[282]] = _0x5cb4[315];
  /** @type {number} */
  this[_0x5cb4[231]] = 1;
  this[_0x5cb4[257]] = {
    url : _0x5cb4[323],
    abs : 0,
    set : 4
  };
  /** @type {!Array} */
  this[_0x5cb4[247]] = Array(15);
  this[_0x5cb4[247]][Score[_0x5cb4[115]][_0x5cb4[123]]] = {
    url : _0x5cb4[324],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[247]][Score[_0x5cb4[115]][_0x5cb4[129]]] = {
    url : _0x5cb4[325],
    abs : 0,
    set : 4,
    q : 1
  };
  /** @type {!Array} */
  this[_0x5cb4[244]] = Array(15);
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[120]]] = {
    url : _0x5cb4[326],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[121]]] = {
    url : _0x5cb4[327],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[122]]] = {
    url : _0x5cb4[328],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[123]]] = {
    url : _0x5cb4[329],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[125]]] = {
    url : _0x5cb4[330],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[126]]] = {
    url : _0x5cb4[331],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[127]]] = {
    url : _0x5cb4[332],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[128]]] = {
    url : _0x5cb4[333],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[129]]] = {
    url : _0x5cb4[334],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[130]]] = {
    url : _0x5cb4[335],
    abs : 0,
    set : 4,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[131]]] = {
    url : _0x5cb4[336],
    abs : 0,
    set : 4,
    q : 1
  };
}
/**
 * @return {undefined}
 */
function DalSpawnVSFXset() {
  this[_0x5cb4[282]] = _0x5cb4[337];
  /** @type {number} */
  this[_0x5cb4[231]] = 1;
  this[_0x5cb4[257]] = {
    url : _0x5cb4[323],
    abs : 0,
    set : 5
  };
  this[_0x5cb4[284]] = {
    I : {
      url : _0x5cb4[338],
      abs : 0,
      set : 5
    },
    O : {
      url : _0x5cb4[339],
      abs : 0,
      set : 5
    },
    S : {
      url : _0x5cb4[340],
      abs : 0,
      set : 5
    },
    Z : {
      url : _0x5cb4[341],
      abs : 0,
      set : 5
    },
    T : {
      url : _0x5cb4[342],
      abs : 0,
      set : 5
    },
    L : {
      url : _0x5cb4[343],
      abs : 0,
      set : 5
    },
    J : {
      url : _0x5cb4[344],
      abs : 0,
      set : 5
    }
  };
}
/**
 * @return {undefined}
 */
function DalVSFXset() {
  this[_0x5cb4[282]] = _0x5cb4[337];
  /** @type {number} */
  this[_0x5cb4[231]] = 1;
  this[_0x5cb4[257]] = {
    url : _0x5cb4[323],
    abs : 0,
    set : 5
  };
  /** @type {null} */
  this[_0x5cb4[247]] = null;
  this[_0x5cb4[249]] = {
    url : _0x5cb4[345],
    abs : 0,
    set : 5,
    q : 1
  };
  /** @type {!Array} */
  this[_0x5cb4[244]] = Array(15);
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[123]]] = {
    url : _0x5cb4[329],
    abs : 0,
    set : 5,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[125]]] = {
    url : _0x5cb4[346],
    abs : 0,
    set : 5,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[126]]] = {
    url : _0x5cb4[331],
    abs : 0,
    set : 5,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[127]]] = {
    url : _0x5cb4[347],
    abs : 0,
    set : 5,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[128]]] = {
    url : _0x5cb4[333],
    abs : 0,
    set : 5,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[129]]] = {
    url : _0x5cb4[334],
    abs : 0,
    set : 5,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[130]]] = {
    url : _0x5cb4[335],
    abs : 0,
    set : 5,
    q : 1
  };
  this[_0x5cb4[244]][Score[_0x5cb4[115]][_0x5cb4[131]]] = {
    url : _0x5cb4[336],
    abs : 0,
    set : 5,
    q : 1
  };
  this[_0x5cb4[276]] = {
    url : _0x5cb4[348],
    abs : 0,
    set : 5,
    q : 1
  };
}
GameCore[_0x5cb4[135]][_0x5cb4[349]] = function(canCreateDiscussions, isSlidingUp) {
  let zero = this[_0x5cb4[145]][this[_0x5cb4[216]][_0x5cb4[350]]][_0x5cb4[69]][_0x5cb4[19]];
  let point_2 = null;
  let collected = isSlidingUp || this[_0x5cb4[351]];
  switch(canCreateDiscussions) {
    default:
      point_2 = new Bag(collected, zero, 1);
      break;
    case 1:
      point_2 = new Bag(collected, zero, 2);
      break;
    case 2:
      point_2 = new Classic(collected, zero);
      break;
    case 3:
      point_2 = new OneBlock(collected, zero, 1, null);
      break;
    case 4:
      point_2 = new OneBlock(collected, zero, 2, null);
      break;
    case 5:
      point_2 = new OneBlock(collected, zero, zero, 1);
      break;
    case 6:
      point_2 = new OneBlock(collected, zero, 2 * zero, 2);
      break;
    case 7:
      point_2 = new C2Sim(collected, zero);
      break;
    case 8:
      point_2 = new Repeated(new Bag(collected, zero, 1), 7);
      break;
    case 9:
      point_2 = new BsBlock(new Bag(collected, zero, 1), [2, 4]);
      break;
    case 10:
      point_2 = new BigBlockRand(new Bag(collected, zero, 1), 2);
      break;
    case 11:
      point_2 = new ConstBlock(2, 0);
      break;
    case 12:
      point_2 = new ConstBlock(0, 5);
  }
  return point_2;
}, GameCore[_0x5cb4[135]][_0x5cb4[219]] = function(mmCoreSplitViewBlock) {
  this[_0x5cb4[142]] = this[_0x5cb4[349]](mmCoreSplitViewBlock);
  if (this[_0x5cb4[141]] && this[_0x5cb4[352]]) {
    if (0 !== mmCoreSplitViewBlock) {
      /** @type {number} */
      this[_0x5cb4[352]][_0x5cb4[353]][_0x5cb4[218]] = mmCoreSplitViewBlock;
    } else {
      if (_0x5cb4[218] in this[_0x5cb4[352]][_0x5cb4[353]]) {
        delete this[_0x5cb4[352]][_0x5cb4[353]][_0x5cb4[218]];
      }
    }
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[354]] = function(limitFromUnread) {
  let _0x3de4x3 = (limitFromUnread = limitFromUnread || this[_0x5cb4[142]])[_0x5cb4[224]]();
  return 0 === _0x3de4x3[_0x5cb4[65]] ? _0x3de4x3[_0x5cb4[65]] = this[_0x5cb4[216]][_0x5cb4[350]] : -1 === _0x3de4x3[_0x5cb4[65]] && (_0x3de4x3[_0x5cb4[65]] = 0), null !== this[_0x5cb4[355]] && (_0x3de4x3[_0x5cb4[65]] = this[_0x5cb4[355]], this[_0x5cb4[355]] = null), _0x3de4x3;
}, GameCore[_0x5cb4[135]][_0x5cb4[356]] = function() {
  if (0 === this[_0x5cb4[148]][_0x5cb4[19]]) {
    return this[_0x5cb4[141]] && 9 === this[_0x5cb4[357]] && this[_0x5cb4[361]][_0x5cb4[360]](i18n[_0x5cb4[358]], i18n[_0x5cb4[359]]), this.GameOver(), this[_0x5cb4[362]];
  }
  var _0x3de4x2 = this[_0x5cb4[148]][_0x5cb4[363]](0, 1)[0];
  return this[_0x5cb4[364]](), this[_0x5cb4[365]](), _0x3de4x2;
}, GameCore[_0x5cb4[135]][_0x5cb4[366]] = function(imageModelSection, afterIdx, m) {
  m = null === m ? this[_0x5cb4[362]][_0x5cb4[67]] : m;
  let _0x3de4x5 = this[_0x5cb4[145]][this[_0x5cb4[362]][_0x5cb4[65]]];
  let DateDisabled = _0x3de4x5[_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[44]]][_0x5cb4[69]];
  let ld = _0x3de4x5[_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[44]]][_0x5cb4[69]][m][_0x5cb4[19]];
  /** @type {number} */
  var i = 0;
  for (; i < ld; i++) {
    /** @type {number} */
    var id = 0;
    for (; id < ld; id++) {
      if (DateDisabled[m][i][id] > 0) {
        if (afterIdx + i >= 20) {
          return true;
        }
        if (imageModelSection + id < 0 || imageModelSection + id >= 10) {
          return true;
        }
        if (afterIdx + i >= 0 && this[_0x5cb4[143]][afterIdx + i][imageModelSection + id] > 0) {
          return true;
        }
      }
    }
  }
  return false;
}, GameCore[_0x5cb4[135]][_0x5cb4[367]] = function() {
  let _0x3de4x2 = this[_0x5cb4[145]][this[_0x5cb4[362]][_0x5cb4[65]]][_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[44]]];
  let iClef = _0x3de4x2[_0x5cb4[69]][0][_0x5cb4[19]];
  if (this[_0x5cb4[362]][_0x5cb4[67]] = 0, this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] = _0x3de4x2[_0x5cb4[112]][0], this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]] = _0x3de4x2[_0x5cb4[112]][1], 0 === this[_0x5cb4[362]][_0x5cb4[65]]) {
    var _0x3de4x4 = _0x3de4x2[_0x5cb4[69]][0][-this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]];
    if (this[_0x5cb4[143]][0][3] && _0x3de4x4[0] || this[_0x5cb4[143]][0][4] && _0x3de4x4[1] || this[_0x5cb4[143]][0][5] && _0x3de4x4[2] || this[_0x5cb4[143]][0][6] && _0x3de4x4[3]) {
      this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]--;
    }
  } else {
    for (; this[_0x5cb4[366]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]], this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]], null);) {
      this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]--;
    }
  }
  /** @type {number} */
  var iPitch = -(1 + this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]);
  if (iPitch >= 0 && iPitch < iClef) {
    /** @type {number} */
    var HTMLELEMENT = 0;
    for (; HTMLELEMENT < iClef; ++HTMLELEMENT) {
      if (_0x3de4x2[_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[67]]][iPitch][HTMLELEMENT] && this[_0x5cb4[144]][this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] + HTMLELEMENT]) {
        this.GameOver();
        break;
      }
    }
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[370]] = function(pixX, pixY) {
  let _0x3de4x4 = this[_0x5cb4[362]][_0x5cb4[44]];
  let _0x3de4x5 = false;
  return !(pixY < 0) && (3 === _0x3de4x4 || 4 === _0x3de4x4 ? 0 === this[_0x5cb4[362]][_0x5cb4[67]] ? _0x3de4x5 = (this[_0x5cb4[143]][pixY][pixX + 1] > 0 || this[_0x5cb4[143]][pixY + 2][pixX + 1] > 0) && !(this[_0x5cb4[143]][pixY + 2][pixX + 1] > 0 && this[_0x5cb4[143]][pixY][pixX + (2 * (4 === _0x3de4x4) | 0)] > 0) : 3 === this[_0x5cb4[362]][_0x5cb4[67]] && (_0x3de4x5 = this[_0x5cb4[143]][pixY][pixX + 1] > 0 || this[_0x5cb4[143]][pixY + 1][pixX + 1] > 0) : 2 === _0x3de4x4 && (0 !== this[_0x5cb4[362]][_0x5cb4[67]] && 
  2 !== this[_0x5cb4[362]][_0x5cb4[67]] || (_0x3de4x5 = this[_0x5cb4[143]][pixY + 1][pixX] > 0)), _0x3de4x5);
}, GameCore[_0x5cb4[135]][_0x5cb4[371]] = function(canCreateDiscussions) {
  this[_0x5cb4[372]] += 2 === canCreateDiscussions ? 2 : 1;
  let indexLookupKey = -1 === canCreateDiscussions ? _0x5cb4[373] : 1 === canCreateDiscussions ? _0x5cb4[374] : _0x5cb4[375];
  let _maskLayer = this[_0x5cb4[362]][_0x5cb4[67]] + canCreateDiscussions;
  /** @type {number} */
  _maskLayer = -1 === _maskLayer ? _maskLayer = 3 : _maskLayer % 4;
  let _0x3de4x5 = this[_0x5cb4[145]][this[_0x5cb4[362]][_0x5cb4[65]]][_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[44]]];
  let heapDiffs = _0x3de4x5[_0x5cb4[107]][this[_0x5cb4[362]][_0x5cb4[67]]][indexLookupKey];
  let gcollections = heapDiffs[_0x5cb4[19]];
  if (3 !== this[_0x5cb4[362]][_0x5cb4[65]] || !this[_0x5cb4[370]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]], this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]])) {
    for (let gcIndex = 0; gcIndex < gcollections; gcIndex++) {
      let _0x3de4x21 = heapDiffs[gcIndex][0];
      let _0x3de4x22 = heapDiffs[gcIndex][1];
      if (!this[_0x5cb4[366]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] + _0x3de4x21, this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]] - _0x3de4x22, _maskLayer)) {
        if (this[_0x5cb4[178]] = true, 2 === _0x3de4x5[_0x5cb4[44]]) {
          this[_0x5cb4[376]] = 10 * _maskLayer + gcIndex;
        } else {
          if (50 === _0x3de4x5[_0x5cb4[44]]) {
            if (2 === canCreateDiscussions) {
              return;
            }
            if (3 === _maskLayer && gcIndex < 14) {
              return;
            }
            if ((1 === _maskLayer && 0 === this[_0x5cb4[362]][_0x5cb4[67]] || 2 === _maskLayer && 1 === this[_0x5cb4[362]][_0x5cb4[67]]) && 3 !== gcIndex) {
              return;
            }
            if ((0 === _maskLayer && 1 === this[_0x5cb4[362]][_0x5cb4[67]] || 1 === _maskLayer && 2 === this[_0x5cb4[362]][_0x5cb4[67]]) && 11 !== gcIndex) {
              return;
            }
            if (3 === this[_0x5cb4[362]][_0x5cb4[67]] && 0 !== _maskLayer) {
              return;
            }
          }
        }
        /** @type {number} */
        this[_0x5cb4[362]][_0x5cb4[67]] = _maskLayer;
        this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] += _0x3de4x21;
        this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]] -= _0x3de4x22;
        if (_0x3de4x22 > 0) {
          /** @type {boolean} */
          this[_0x5cb4[377]] = false;
          /** @type {number} */
          this[_0x5cb4[378]] = 0;
        }
        if (this[_0x5cb4[141]]) {
          this[_0x5cb4[379]](_0x5cb4[274]);
        }
        break;
      }
    }
    this[_0x5cb4[380]](true);
    this[_0x5cb4[381]]();
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[382]] = function() {
  if (20 === this[_0x5cb4[383]]) {
    return;
  }
  let _0x3de4x2 = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
  this[_0x5cb4[144]] = this[_0x5cb4[143]][0][_0x5cb4[24]](0);
  var configCount = this[_0x5cb4[143]][_0x5cb4[19]];
  /** @type {number} */
  var currentCount = 0;
  for (; currentCount < configCount; currentCount++) {
    this[_0x5cb4[143]][currentCount] = configCount - currentCount > 1 ? this[_0x5cb4[143]][currentCount + 1][_0x5cb4[24]](0) : _0x3de4x2[_0x5cb4[24]](0);
  }
  this[_0x5cb4[383]]++;
  if (this[_0x5cb4[141]]) {
    this[_0x5cb4[352]][_0x5cb4[386]](new ReplayAction(this[_0x5cb4[352]][_0x5cb4[384]].SGARBAGE_ADD, this[_0x5cb4[385]]()));
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[387]] = function(canCreateDiscussions, mmCoreSplitViewBlock) {
  return this[_0x5cb4[366]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]], this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]] + 1, null) ? (this[_0x5cb4[141]] && !this[_0x5cb4[377]] && (this[_0x5cb4[377]] = true, this[_0x5cb4[388]] = mmCoreSplitViewBlock, this[_0x5cb4[389]] = mmCoreSplitViewBlock, this[_0x5cb4[379]](_0x5cb4[280])), 0) : (this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]++, this[_0x5cb4[178]] = false, canCreateDiscussions ? 1 + this[_0x5cb4[387]](canCreateDiscussions - 1, mmCoreSplitViewBlock) : 
  1);
}, GameCore[_0x5cb4[135]][_0x5cb4[390]] = function() {
  if (!this[_0x5cb4[391]] && this[_0x5cb4[216]][_0x5cb4[392]]) {
    /** @type {null} */
    var artistTrack = null;
    if (this[_0x5cb4[141]] && (artistTrack = this[_0x5cb4[385]](), this[_0x5cb4[352]][_0x5cb4[386]](new ReplayAction(this[_0x5cb4[352]][_0x5cb4[384]].HOLD_BLOCK, artistTrack))), this[_0x5cb4[377]] = false, null === this[_0x5cb4[393]]) {
      this[_0x5cb4[393]] = this[_0x5cb4[362]];
      this[_0x5cb4[394]](artistTrack);
    } else {
      var _0x3de4x3 = this[_0x5cb4[393]];
      this[_0x5cb4[393]] = this[_0x5cb4[362]];
      this[_0x5cb4[362]] = _0x3de4x3;
      this[_0x5cb4[367]]();
      if (this[_0x5cb4[141]]) {
        this[_0x5cb4[395]] = artistTrack;
        if (this[_0x5cb4[396]] && this[_0x5cb4[397]][_0x5cb4[284]]) {
          this[_0x5cb4[398]]();
        }
      }
    }
    this[_0x5cb4[380]](true);
    /** @type {boolean} */
    this[_0x5cb4[391]] = true;
    this[_0x5cb4[399]]++;
    this[_0x5cb4[150]][_0x5cb4[400]]++;
    if (this[_0x5cb4[401]]) {
      this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[402])[_0x5cb4[65]](this[_0x5cb4[150]][_0x5cb4[400]]);
    }
    if (this[_0x5cb4[141]]) {
      this[_0x5cb4[403]](artistTrack, false);
      this[_0x5cb4[404]]();
      this[_0x5cb4[381]]();
      this[_0x5cb4[379]](_0x5cb4[250]);
    } else {
      this[_0x5cb4[406]][_0x5cb4[405]]();
    }
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[407]] = function(canCreateDiscussions) {
  /** @type {number} */
  var _0x3de4x3 = 0;
  for (; !this[_0x5cb4[366]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] + canCreateDiscussions, this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]], null);) {
    this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] + canCreateDiscussions;
    /** @type {number} */
    _0x3de4x3 = _0x3de4x3 + 1;
  }
  return _0x3de4x3 && (this[_0x5cb4[380]](true), this[_0x5cb4[381]]()), _0x3de4x3;
}, GameCore[_0x5cb4[135]][_0x5cb4[380]] = function(canCreateDiscussions) {
  if (canCreateDiscussions || this[_0x5cb4[408]] && (!this[_0x5cb4[141]] || this[_0x5cb4[406]][_0x5cb4[408]] && !this[_0x5cb4[406]][_0x5cb4[409]])) {
    var artistTrack = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]];
    for (; artistTrack <= 20; ++artistTrack) {
      if (this[_0x5cb4[366]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]], artistTrack, null)) {
        this[_0x5cb4[410]][_0x5cb4[66]][_0x5cb4[368]] = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]];
        /** @type {number} */
        this[_0x5cb4[410]][_0x5cb4[66]][_0x5cb4[369]] = artistTrack - 1;
        break;
      }
    }
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[411]] = function(canCreateDiscussions) {
  let mmCoreDownloaded = 0;
  let mmCoreNotDownloadable = 0;
  let _0x3de4x5 = this[_0x5cb4[362]][_0x5cb4[67]];
  let indexLookupKey = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]];
  let _0x3de4x21 = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]];
  if (202 === canCreateDiscussions && (2 !== this[_0x5cb4[362]][_0x5cb4[67]] && --_0x3de4x21, _0x3de4x5 = (this[_0x5cb4[362]][_0x5cb4[67]] + 2) % 4), _0x3de4x21 < -2) {
    return false;
  }
  switch(_0x3de4x5) {
    case 0:
      if (_0x3de4x21 >= -1) {
        /** @type {number} */
        mmCoreDownloaded = (this[_0x5cb4[143]][_0x3de4x21 + 1][indexLookupKey] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 1][indexLookupKey + 2] > 0);
      } else {
        if (-2 === _0x3de4x21) {
          /** @type {number} */
          mmCoreDownloaded = (this[_0x5cb4[144]][indexLookupKey] > 0) + (this[_0x5cb4[144]][indexLookupKey + 2] > 0);
        }
      }
      /** @type {number} */
      mmCoreNotDownloadable = 17 === _0x3de4x21 ? 2 : (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey + 2] > 0);
      break;
    case 1:
      if (-1 === indexLookupKey) {
        /** @type {number} */
        mmCoreNotDownloadable = 2;
      }
      if (_0x3de4x21 >= -1) {
        /** @type {number} */
        mmCoreDownloaded = (this[_0x5cb4[143]][_0x3de4x21 + 1][indexLookupKey + 2] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey + 2] > 0);
        if (!mmCoreNotDownloadable) {
          /** @type {number} */
          mmCoreNotDownloadable = (this[_0x5cb4[143]][_0x3de4x21 + 1][indexLookupKey] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey] > 0);
        }
      } else {
        if (-2 === _0x3de4x21) {
          /** @type {number} */
          mmCoreDownloaded = (this[_0x5cb4[144]][indexLookupKey + 2] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey + 2] > 0);
          if (!mmCoreNotDownloadable) {
            /** @type {number} */
            mmCoreNotDownloadable = (this[_0x5cb4[144]][indexLookupKey] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey] > 0);
          }
        }
      }
      break;
    case 2:
      if (_0x3de4x21 >= -1) {
        /** @type {number} */
        mmCoreNotDownloadable = (this[_0x5cb4[143]][_0x3de4x21 + 1][indexLookupKey] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 1][indexLookupKey + 2] > 0);
      } else {
        if (-2 === _0x3de4x21) {
          /** @type {number} */
          mmCoreNotDownloadable = (this[_0x5cb4[144]][indexLookupKey] > 0) + (this[_0x5cb4[144]][indexLookupKey + 2] > 0);
        }
      }
      /** @type {number} */
      mmCoreDownloaded = 17 === _0x3de4x21 ? 2 : (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey + 2] > 0);
      break;
    case 3:
      if (8 === indexLookupKey) {
        /** @type {number} */
        mmCoreNotDownloadable = 2;
      }
      if (_0x3de4x21 >= -1) {
        /** @type {number} */
        mmCoreDownloaded = (this[_0x5cb4[143]][_0x3de4x21 + 1][indexLookupKey] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey] > 0);
        if (!mmCoreNotDownloadable) {
          /** @type {number} */
          mmCoreNotDownloadable = (this[_0x5cb4[143]][_0x3de4x21 + 1][indexLookupKey + 2] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey + 2] > 0);
        }
      } else {
        if (-2 === _0x3de4x21) {
          /** @type {number} */
          mmCoreDownloaded = (this[_0x5cb4[144]][indexLookupKey] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey] > 0);
          if (!mmCoreNotDownloadable) {
            /** @type {number} */
            mmCoreNotDownloadable = (this[_0x5cb4[144]][indexLookupKey + 2] > 0) + (this[_0x5cb4[143]][_0x3de4x21 + 3][indexLookupKey + 2] > 0);
          }
        }
      }
  }
  /** @type {boolean} */
  this[_0x5cb4[178]] = 2 === mmCoreDownloaded && mmCoreNotDownloadable >= 1;
  /** @type {boolean} */
  this[_0x5cb4[179]] = 1 === mmCoreDownloaded && 2 === mmCoreNotDownloadable;
}, GameCore[_0x5cb4[135]][_0x5cb4[412]] = function() {
  let artistTrack = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]];
  let GET_AUTH_URL_TIMEOUT = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]];
  this[_0x5cb4[178]] = this[_0x5cb4[366]](artistTrack - 1, GET_AUTH_URL_TIMEOUT, null) && this[_0x5cb4[366]](artistTrack + 1, GET_AUTH_URL_TIMEOUT, null) && this[_0x5cb4[366]](artistTrack, GET_AUTH_URL_TIMEOUT - 1, null);
}, GameCore[_0x5cb4[135]][_0x5cb4[413]] = function(name) {
  let indexesByNodeName = this[_0x5cb4[145]][this[_0x5cb4[362]][_0x5cb4[65]]];
  if (!indexesByNodeName[_0x5cb4[75]]) {
    return;
  }
  let _0x3de4x4 = indexesByNodeName[_0x5cb4[75]][name];
  if (!_0x3de4x4) {
    return;
  }
  let newIntervals = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]];
  let paramStringWellFormed = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]];
  let componentJsStreams = _0x3de4x4[this[_0x5cb4[362]][_0x5cb4[67]]][0];
  let options = _0x3de4x4[this[_0x5cb4[362]][_0x5cb4[67]]][1];
  let hreviews = this;
  let merge = function(values) {
    let e1 = 0;
    for (let i = 0; i < values[_0x5cb4[19]]; i = i + 2) {
      let status = newIntervals + values[i];
      let k = paramStringWellFormed + values[i + 1];
      if (status < 0 || status >= 10 || k < 0 || k >= 20 || hreviews[_0x5cb4[143]][k][status] > 0) {
        ++e1;
      }
    }
    return e1;
  };
  if (merge(componentJsStreams) !== componentJsStreams[_0x5cb4[19]] / 2) {
    return;
  }
  let headers = 0;
  if (Array[_0x5cb4[414]](options[0])) {
    for (let i = 0; i < options[_0x5cb4[19]]; i++) {
      if (merge(options[i])) {
        headers++;
      }
    }
  } else {
    headers = merge(options);
  }
  if (this[_0x5cb4[178]] = true, 2 == headers) {
  } else {
    if (1 != headers) {
      return;
    }
    /** @type {boolean} */
    this[_0x5cb4[179]] = true;
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[415]] = function(leftFence) {
  let r = 0;
  let layerPath = -1;
  let reconnectTimeIncrease = 0;
  let _currentModifierKeys = 0;
  let _0x3de4x21 = false;
  let waitBeforeReconnect = 0;
  let zeroSizeMax = 0;
  let subdoc = [];
  let _0x3de4x25 = null;
  let _0x3de4x26 = this[_0x5cb4[145]][this[_0x5cb4[362]][_0x5cb4[65]]][_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[44]]];
  let wsFunction = _0x5cb4[5];
  if (this[_0x5cb4[139]] = this[_0x5cb4[181]], this[_0x5cb4[179]] = false, this[_0x5cb4[141]] || 3 !== this[_0x5cb4[357]] || (zeroSizeMax = this[_0x5cb4[416]]()), this[_0x5cb4[216]][_0x5cb4[417]]) {
    if (this[_0x5cb4[178]] && 1 !== this[_0x5cb4[216]][_0x5cb4[418]]) {
      if (2 === _0x3de4x26[_0x5cb4[44]] || 202 === _0x3de4x26[_0x5cb4[44]]) {
        this[_0x5cb4[411]](_0x3de4x26[_0x5cb4[44]]);
      } else {
        if (2 === this[_0x5cb4[216]][_0x5cb4[418]]) {
          /** @type {boolean} */
          this[_0x5cb4[178]] = false;
          this[_0x5cb4[413]](_0x3de4x26[_0x5cb4[44]]);
        } else {
          /** @type {boolean} */
          this[_0x5cb4[178]] = false;
        }
      }
    }
    /** @type {number} */
    var prop = 0;
    for (; prop < 10; ++prop) {
      if (0 !== this[_0x5cb4[144]][prop]) {
        ++reconnectTimeIncrease;
      } else {
        if (reconnectTimeIncrease > 0) {
          break;
        }
      }
    }
    if (10 === reconnectTimeIncrease) {
      /** @type {!Array} */
      this[_0x5cb4[144]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ++r;
    } else {
      waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
    }
    /** @type {number} */
    var newPath = 0;
    for (; newPath < 20; newPath++) {
      /** @type {number} */
      reconnectTimeIncrease = 0;
      /** @type {number} */
      _currentModifierKeys = 0;
      /** @type {number} */
      prop = 0;
      for (; prop < 10; prop++) {
        let modifierKeyValue = this[_0x5cb4[143]][newPath][prop];
        if (9 === modifierKeyValue) {
          break;
        }
        if (0 !== modifierKeyValue) {
          reconnectTimeIncrease++;
          /** @type {number} */
          _currentModifierKeys = _currentModifierKeys | modifierKeyValue;
        } else {
          if (waitBeforeReconnect + reconnectTimeIncrease > 0) {
            break;
          }
        }
      }
      if (10 === reconnectTimeIncrease) {
        if (this[_0x5cb4[216]][_0x5cb4[419]]) {
          if (null === _0x3de4x25) {
            _0x3de4x25 = copyMatrix(this[_0x5cb4[143]]);
          }
          subdoc[_0x5cb4[106]](newPath);
        }
        if (this[_0x5cb4[143]][newPath][_0x5cb4[22]](8) >= 0) {
          this[_0x5cb4[150]][_0x5cb4[420]]++;
        }
        /** @type {number} */
        var thatpos = newPath;
        for (; thatpos > 0; thatpos--) {
          this[_0x5cb4[143]][thatpos] = this[_0x5cb4[143]][thatpos - 1];
        }
        this[_0x5cb4[143]][0] = this[_0x5cb4[144]][_0x5cb4[24]](0);
        /** @type {!Array} */
        this[_0x5cb4[144]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        /** @type {number} */
        reconnectTimeIncrease = 0;
        r++;
        /** @type {number} */
        layerPath = newPath;
        if (this[_0x5cb4[141]] && 6 === this[_0x5cb4[421]](false) && this[_0x5cb4[424]][_0x5cb4[423]][_0x5cb4[422]] === this[_0x5cb4[424]][_0x5cb4[425]]) {
          this[_0x5cb4[424]][_0x5cb4[426]](newPath);
        }
        if (16 & _currentModifierKeys) {
          /** @type {boolean} */
          _0x3de4x21 = true;
        }
      }
      waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
    }
    if (r > 0) {
      this[_0x5cb4[150]][_0x5cb4[427]] += r;
      if (this[_0x5cb4[401]]) {
        this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[428])[_0x5cb4[65]](this[_0x5cb4[150]][_0x5cb4[427]]);
      }
      /** @type {number} */
      var preCount = 0;
      /** @type {null} */
      var _maskLayer = null;
      switch(r) {
        case 1:
          this[_0x5cb4[150]][_0x5cb4[429]]++;
          preCount = this[_0x5cb4[138]][1];
          if (this[_0x5cb4[178]]) {
            if (this[_0x5cb4[430]]) {
              wsFunction = _0x5cb4[431];
            }
            _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[128]];
            preCount = this[_0x5cb4[138]][7];
            if (this[_0x5cb4[181]]) {
              this[_0x5cb4[150]][_0x5cb4[133]] += 1;
              preCount = preCount + this[_0x5cb4[138]][10];
            } else {
              /** @type {boolean} */
              this[_0x5cb4[181]] = true;
            }
          } else {
            if (this[_0x5cb4[179]]) {
              _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[127]];
              if (this[_0x5cb4[181]]) {
                this[_0x5cb4[150]][_0x5cb4[133]] += 1;
              } else {
                /** @type {boolean} */
                this[_0x5cb4[181]] = true;
              }
              preCount = this[_0x5cb4[138]][8];
              if (this[_0x5cb4[430]]) {
                wsFunction = _0x5cb4[433];
              }
            } else {
              /** @type {boolean} */
              this[_0x5cb4[181]] = false;
              _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[120]];
            }
          }
          break;
        case 2:
          this[_0x5cb4[150]][_0x5cb4[434]]++;
          preCount = this[_0x5cb4[138]][2];
          if (this[_0x5cb4[178]] || this[_0x5cb4[179]]) {
            this[_0x5cb4[150]][_0x5cb4[435]]++;
            preCount = this[_0x5cb4[138]][5];
            _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[129]];
            if (this[_0x5cb4[181]]) {
              this[_0x5cb4[150]][_0x5cb4[133]] += 1;
              preCount = preCount + this[_0x5cb4[138]][10];
            } else {
              /** @type {boolean} */
              this[_0x5cb4[181]] = true;
            }
            if (this[_0x5cb4[430]]) {
              wsFunction = _0x5cb4[436];
            }
          } else {
            /** @type {boolean} */
            this[_0x5cb4[181]] = false;
            _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[121]];
          }
          break;
        case 3:
          this[_0x5cb4[150]][_0x5cb4[437]]++;
          preCount = this[_0x5cb4[138]][3];
          if (!this[_0x5cb4[178]] && !this[_0x5cb4[179]] || 2 !== _0x3de4x26[_0x5cb4[44]] && 50 !== _0x3de4x26[_0x5cb4[44]]) {
            /** @type {boolean} */
            this[_0x5cb4[181]] = false;
            _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[122]];
          } else {
            preCount = this[_0x5cb4[138]][6];
            _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[130]];
            if (this[_0x5cb4[181]]) {
              this[_0x5cb4[150]][_0x5cb4[133]] += 1;
              preCount = preCount + this[_0x5cb4[138]][10];
            } else {
              /** @type {boolean} */
              this[_0x5cb4[181]] = true;
            }
            if (this[_0x5cb4[430]]) {
              wsFunction = _0x5cb4[438];
            }
          }
          break;
        case 4:
          this[_0x5cb4[150]][_0x5cb4[439]]++;
          _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[123]];
          preCount = this[_0x5cb4[138]][4];
          if (this[_0x5cb4[181]]) {
            this[_0x5cb4[150]][_0x5cb4[133]] += 1;
            preCount = preCount + this[_0x5cb4[138]][10];
          } else {
            /** @type {boolean} */
            this[_0x5cb4[181]] = true;
          }
          if (this[_0x5cb4[430]]) {
            wsFunction = _0x5cb4[440];
          }
          break;
        default:
          this[_0x5cb4[150]][_0x5cb4[439]]++;
          _maskLayer = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[124]];
          preCount = this[_0x5cb4[138]][6];
          if (this[_0x5cb4[181]]) {
            this[_0x5cb4[150]][_0x5cb4[133]] += 1;
            preCount = preCount + this[_0x5cb4[138]][10];
          } else {
            /** @type {boolean} */
            this[_0x5cb4[181]] = true;
          }
          if (this[_0x5cb4[430]]) {
            wsFunction = _0x5cb4[441] + r + _0x5cb4[442];
          }
      }
      if (this[_0x5cb4[216]][_0x5cb4[418]] && this[_0x5cb4[178]]) {
        if (this[_0x5cb4[214]] && this[_0x5cb4[214]][_0x5cb4[19]] && -1 !== this[_0x5cb4[214]][_0x5cb4[22]](_0x3de4x26[_0x5cb4[108]])) {
          /** @type {number} */
          preCount = 0;
          if (this[_0x5cb4[430]]) {
            wsFunction = _0x5cb4[443] + _0x3de4x26[_0x5cb4[108]] + _0x5cb4[444];
          }
        } else {
          if (2 !== _0x3de4x26[_0x5cb4[44]]) {
            /** @type {number} */
            _maskLayer = 127;
            preCount = 1 === this[_0x5cb4[216]][_0x5cb4[418]] ? r >= 4 ? this[_0x5cb4[138]][6] + 1 : 3 === r ? this[_0x5cb4[138]][6] : 2 === r ? this[_0x5cb4[138]][5] : this[_0x5cb4[138]][7] : this[_0x5cb4[179]] ? Math[_0x5cb4[241]](2, r) : Math[_0x5cb4[241]](5, 2 * r);
            if (this[_0x5cb4[139]]) {
              preCount = preCount + this[_0x5cb4[138]][10];
            }
            /** @type {boolean} */
            this[_0x5cb4[181]] = true;
            if (this[_0x5cb4[430]] && this[_0x5cb4[141]]) {
              wsFunction = _0x3de4x26[_0x5cb4[108]] + _0x5cb4[445] + (r <= 4 ? this[_0x5cb4[208]][r - 1] : this[_0x5cb4[208]][4]);
              if (this[_0x5cb4[179]]) {
                wsFunction = wsFunction + _0x5cb4[446];
              }
              if (this[_0x5cb4[139]]) {
                wsFunction = _0x5cb4[447] + wsFunction;
              }
            }
          }
        }
      }
      if (_maskLayer >= 8 && _maskLayer <= 11) {
        this[_0x5cb4[150]][_0x5cb4[448]]--;
        this[_0x5cb4[150]][_0x5cb4[449]]++;
      }
      this[_0x5cb4[450]](_maskLayer);
      let UCR_PARTICIPATION_RECEIVED = _maskLayer;
      if (0 === waitBeforeReconnect) {
        this[_0x5cb4[150]][_0x5cb4[451]]++;
        preCount = this[_0x5cb4[138]][9];
        UCR_PARTICIPATION_RECEIVED = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[131]];
        if (this[_0x5cb4[430]]) {
          wsFunction = _0x5cb4[452];
        }
        this[_0x5cb4[450]](UCR_PARTICIPATION_RECEIVED);
        if (this[_0x5cb4[141]] && 6 === this[_0x5cb4[421]](false) && this[_0x5cb4[424]][_0x5cb4[423]][_0x5cb4[422]] === this[_0x5cb4[424]][_0x5cb4[453]]) {
          this[_0x5cb4[454]](leftFence);
        }
      }
      if (this[_0x5cb4[141]] && 6 === this[_0x5cb4[421]](false) && this[_0x5cb4[424]][_0x5cb4[423]][_0x5cb4[422]] === this[_0x5cb4[424]][_0x5cb4[425]] && 0 === this[_0x5cb4[424]][_0x5cb4[455]][_0x5cb4[19]]) {
        this[_0x5cb4[454]](leftFence);
      }
      this[_0x5cb4[456]] = this[_0x5cb4[141]] && this[_0x5cb4[458]][_0x5cb4[457]] && (this[_0x5cb4[456]] && this[_0x5cb4[459]] >= 0 || this[_0x5cb4[460]](layerPath));
      this[_0x5cb4[459]]++;
      if (this[_0x5cb4[459]] > 0) {
        this[_0x5cb4[450]](this[_0x5cb4[432]][_0x5cb4[115]].COMBO, this[_0x5cb4[459]]);
      }
      if (this[_0x5cb4[459]] > this[_0x5cb4[150]][_0x5cb4[233]]) {
        this[_0x5cb4[150]][_0x5cb4[233]] = this[_0x5cb4[459]];
      }
      var files = this[_0x5cb4[137]](this[_0x5cb4[459]]);
      this[_0x5cb4[150]][_0x5cb4[461]] += preCount + files;
      let _maskLayerSimulate = {
        type : UCR_PARTICIPATION_RECEIVED,
        b2b : this[_0x5cb4[139]],
        cmb : this[_0x5cb4[459]]
      };
      if ((preCount > 0 || files > 0) && this[_0x5cb4[401]] && this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[462])[_0x5cb4[65]](this[_0x5cb4[150]][_0x5cb4[461]]), this[_0x5cb4[141]]) {
        let _0x3de4x2 = [UCR_PARTICIPATION_RECEIVED, _maskLayer, this[_0x5cb4[139]] && this[_0x5cb4[181]], this[_0x5cb4[459]]];
        this[_0x5cb4[379]](this[_0x5cb4[463]][_0x5cb4[246]](..._0x3de4x2), 1);
        if (this[_0x5cb4[396]]) {
          this[_0x5cb4[379]](this[_0x5cb4[397]][_0x5cb4[246]](..._0x3de4x2), 2);
        }
        if (this[_0x5cb4[430]] && wsFunction) {
          this[_0x5cb4[458]][_0x5cb4[464]](_0x5cb4[5], wsFunction);
        }
      }
      if (this[_0x5cb4[421]](false)) {
        if (this[_0x5cb4[150]][_0x5cb4[465]] = this[_0x5cb4[150]][_0x5cb4[461]], 1 === this[_0x5cb4[421]](false)) {
          if (this[_0x5cb4[466]] >= r) {
            this[_0x5cb4[466]] -= r;
          } else {
            /** @type {number} */
            this[_0x5cb4[466]] = 0;
          }
          if (this[_0x5cb4[141]]) {
            this[_0x5cb4[468]][_0x5cb4[467]] = this[_0x5cb4[466]];
          }
        } else {
          if (3 === this[_0x5cb4[421]](false)) {
            let duedate = this[_0x5cb4[416]]();
            if (this[_0x5cb4[141]]) {
              if (this[_0x5cb4[469]] > duedate) {
                /** @type {number} */
                var timeSubmittedDiff = this[_0x5cb4[469]] - duedate;
                this[_0x5cb4[469]] = duedate;
                this[_0x5cb4[466]] -= timeSubmittedDiff;
                if (this[_0x5cb4[466]] > this[_0x5cb4[469]] && this[_0x5cb4[469]] < this[_0x5cb4[470]]) {
                  this[_0x5cb4[471]](1);
                  this[_0x5cb4[469]] += 1;
                }
              }
              this[_0x5cb4[472]](this[_0x5cb4[466]]);
            } else {
              let _0x3de4x3 = zeroSizeMax - duedate;
              this[_0x5cb4[466]] -= _0x3de4x3;
            }
          } else {
            if (7 === this[_0x5cb4[421]](false)) {
              if (this[_0x5cb4[141]] && _maskLayer !== this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[129]]) {
                this[_0x5cb4[361]][_0x5cb4[360]](i18n[_0x5cb4[473]], i18n[_0x5cb4[474]]);
                this[_0x5cb4[454]]();
              }
              if (this[_0x5cb4[141]]) {
                this[_0x5cb4[468]][_0x5cb4[467]] = this[_0x5cb4[150]][_0x5cb4[435]];
              }
              if (20 === this[_0x5cb4[150]][_0x5cb4[435]]) {
                this[_0x5cb4[150]][_0x5cb4[475]] = Math[_0x5cb4[477]](1E3 * this[_0x5cb4[476]]);
              }
            } else {
              if (this[_0x5cb4[141]] && 8 === this[_0x5cb4[421]](false)) {
                if (UCR_PARTICIPATION_RECEIVED === this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[131]]) {
                  this[_0x5cb4[150]][_0x5cb4[478]] = this[_0x5cb4[476]];
                  this[_0x5cb4[468]][_0x5cb4[467]] = this[_0x5cb4[150]][_0x5cb4[451]];
                  if (this[_0x5cb4[141]]) {
                    this[_0x5cb4[479]] = {
                      blocks : 0,
                      lines : 0
                    };
                  }
                } else {
                  if (this[_0x5cb4[141]]) {
                    this[_0x5cb4[479]][_0x5cb4[69]]++;
                    this[_0x5cb4[479]][_0x5cb4[427]] += r;
                    this[_0x5cb4[480]]();
                  }
                }
              } else {
                if (this[_0x5cb4[141]] && 9 === this[_0x5cb4[421]](false)) {
                  let y = this[_0x5cb4[150]][_0x5cb4[427]] - r;
                  for (let ky = 1; ky <= r; ++ky) {
                    this[_0x5cb4[481]][_0x5cb4[482]](this[_0x5cb4[481]].LINE, y + ky);
                  }
                  this[_0x5cb4[481]][_0x5cb4[482]](this[_0x5cb4[481]].LINECLEAR, r);
                  if (preCount > 0) {
                    this[_0x5cb4[483]](preCount, leftFence);
                  }
                  if (files > 0) {
                    this[_0x5cb4[483]](files, leftFence);
                  }
                }
              }
            }
          }
        }
        if (!this[_0x5cb4[466]] && this[_0x5cb4[141]]) {
          this[_0x5cb4[454]]();
        }
      } else {
        if (this[_0x5cb4[141]]) {
          if (this[_0x5cb4[456]] && files && this[_0x5cb4[458]][_0x5cb4[457]]) {
            this[_0x5cb4[361]][_0x5cb4[360]](i18n[_0x5cb4[484]], i18n[_0x5cb4[485]]);
            for (; files > 0;) {
              this[_0x5cb4[471]](1);
              --files;
            }
          }
          let lastviewmatrix = null;
          let selectedArchive = null;
          if (preCount > 0) {
            lastviewmatrix = this[_0x5cb4[483]](preCount, leftFence);
          }
          if (files > 0) {
            selectedArchive = this[_0x5cb4[483]](files, leftFence);
          }
          if (lastviewmatrix || selectedArchive) {
            this[_0x5cb4[458]][_0x5cb4[486]](lastviewmatrix, selectedArchive, _maskLayerSimulate);
          }
        }
      }
      if (this[_0x5cb4[141]]) {
        if (_0x3de4x21) {
          this[_0x5cb4[215]][_0x5cb4[272]]();
        }
        if (this[_0x5cb4[216]][_0x5cb4[419]] && !this[_0x5cb4[409]]) {
          /** @type {boolean} */
          this[_0x5cb4[487]] = false;
          /** @type {boolean} */
          this[_0x5cb4[409]] = true;
          this[_0x5cb4[488]] = new LineClearAnimator(_0x3de4x25, subdoc, this);
        }
      } else {
        this[_0x5cb4[406]][_0x5cb4[489]](preCount, files, _maskLayerSimulate);
      }
    } else {
      /** @type {number} */
      this[_0x5cb4[459]] = -1;
      let artistTrack = null;
      if (this[_0x5cb4[178]] ? (artistTrack = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[126]], this[_0x5cb4[430]] && this[_0x5cb4[141]] && this[_0x5cb4[458]][_0x5cb4[464]](_0x5cb4[5], _0x3de4x26[_0x5cb4[108]] + _0x5cb4[444])) : this[_0x5cb4[179]] && (artistTrack = this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[125]], this[_0x5cb4[430]] && this[_0x5cb4[141]] && this[_0x5cb4[458]][_0x5cb4[464]](_0x5cb4[5], _0x3de4x26[_0x5cb4[108]] + _0x5cb4[490])), artistTrack && (this[_0x5cb4[450]](artistTrack), this[_0x5cb4[141]])) {
        let _0x3de4x3 = [artistTrack, artistTrack, false, -1];
        this[_0x5cb4[379]](this[_0x5cb4[463]][_0x5cb4[246]](..._0x3de4x3), 1);
        if (this[_0x5cb4[396]]) {
          this[_0x5cb4[379]](this[_0x5cb4[397]][_0x5cb4[246]](..._0x3de4x3), 2);
        }
      }
      if (this[_0x5cb4[141]] && 3 === this[_0x5cb4[421]](false)) {
        /** @type {number} */
        var value = this[_0x5cb4[491]] - this[_0x5cb4[469]];
        if (value > 0) {
          var i = Math[_0x5cb4[241]](value, this[_0x5cb4[466]] - this[_0x5cb4[469]]);
          /** @type {number} */
          thatpos = 0;
          for (; thatpos < i; thatpos++) {
            this[_0x5cb4[471]](1);
          }
          this[_0x5cb4[469]] += i;
        }
      } else {
        if (this[_0x5cb4[141]] && 8 === this[_0x5cb4[421]](false)) {
          this[_0x5cb4[479]][_0x5cb4[69]]++;
          this[_0x5cb4[480]]();
        }
      }
    }
  } else {
    /** @type {number} */
    this[_0x5cb4[459]] = -1;
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[416]] = function(i) {
  i = i || 20;
  /** @type {number} */
  var interestingPoint = 0;
  /** @type {number} */
  var whichFriend = 0;
  for (; whichFriend < i; whichFriend++) {
    if (8 !== this[_0x5cb4[143]][19 - whichFriend][0] && 8 !== this[_0x5cb4[143]][19 - whichFriend][1]) {
      /** @type {number} */
      interestingPoint = whichFriend;
      break;
    }
  }
  return interestingPoint;
}, GameCore[_0x5cb4[135]][_0x5cb4[460]] = function(boardManager) {
  /** @type {number} */
  var _0x3de4x3 = 0;
  /** @type {number} */
  var IS_HANDLED = boardManager;
  for (; IS_HANDLED >= 0; IS_HANDLED--) {
    /** @type {null} */
    var mmCoreNotDownloaded = null;
    /** @type {boolean} */
    var isOnline = false;
    /** @type {number} */
    var id = 0;
    for (; id < 10; id++) {
      if (9 !== this[_0x5cb4[143]][IS_HANDLED][id]) {
        if (0 === this[_0x5cb4[143]][IS_HANDLED][id]) {
          if (isOnline) {
            /** @type {number} */
            mmCoreNotDownloaded = -1;
            /** @type {boolean} */
            isOnline = false;
            break;
          }
          if (null === mmCoreNotDownloaded) {
            /** @type {number} */
            mmCoreNotDownloaded = 1;
          } else {
            if (++mmCoreNotDownloaded > 4) {
              /** @type {boolean} */
              isOnline = false;
              break;
            }
          }
        } else {
          if (4 === mmCoreNotDownloaded) {
            /** @type {boolean} */
            isOnline = true;
          } else {
            if (mmCoreNotDownloaded) {
              /** @type {number} */
              mmCoreNotDownloaded = -1;
              /** @type {boolean} */
              isOnline = false;
              break;
            }
          }
        }
      }
    }
    if (4 === mmCoreNotDownloaded || isOnline) {
      if (++_0x3de4x3 >= 3) {
        return true;
      }
    } else {
      if (_0x3de4x3 = 0, IS_HANDLED <= 3) {
        return false;
      }
    }
  }
  return false;
}, GameCore[_0x5cb4[135]][_0x5cb4[492]] = function(imageModelSection, afterIdx, mmCoreSplitViewBlock) {
  ++this[_0x5cb4[493]];
  if (2 === this[_0x5cb4[362]][_0x5cb4[44]]) {
    this[_0x5cb4[150]][_0x5cb4[448]]++;
    this[_0x5cb4[150]][_0x5cb4[494]]++;
  }
  if (this[_0x5cb4[401]]) {
    this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[495])[_0x5cb4[65]](this[_0x5cb4[493]]);
  }
  if (this[_0x5cb4[401]]) {
    this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[497])[_0x5cb4[65]](this[_0x5cb4[496]]());
  }
  if (this[_0x5cb4[141]]) {
    this[_0x5cb4[498]]();
    mmCoreSplitViewBlock = mmCoreSplitViewBlock || this[_0x5cb4[385]]();
  }
  let tmpTimeVal = 0;
  let selTimeVal = 0;
  let _0x3de4x21 = false;
  let MULT3 = this[_0x5cb4[145]][this[_0x5cb4[362]][_0x5cb4[65]]][_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[44]]];
  let ld = MULT3[_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[67]]][_0x5cb4[19]];
  let s1 = 0;
  if (this[_0x5cb4[178]] && 1 === this[_0x5cb4[216]][_0x5cb4[418]]) {
    this[_0x5cb4[412]]();
  }
  /** @type {number} */
  var i = 0;
  for (; i < ld; i++) {
    /** @type {number} */
    var id = 0;
    for (; id < ld; id++) {
      let _0x3de4x4 = MULT3[_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[67]]][i][id];
      if (_0x3de4x4 > 0) {
        ++selTimeVal;
        /** @type {number} */
        s1 = _0x3de4x4 === this[_0x5cb4[362]][_0x5cb4[68]] ? 16 : 0;
        if (afterIdx + i >= 0 && imageModelSection + id >= 0) {
          /** @type {number} */
          this[_0x5cb4[143]][afterIdx + i][imageModelSection + id] = MULT3[_0x5cb4[499]] ^ s1;
          if (afterIdx + i === 19 - this[_0x5cb4[383]]) {
            if (this[_0x5cb4[141]] && 1 === this[_0x5cb4[458]][_0x5cb4[500]] && !this[_0x5cb4[357]]) {
              this[_0x5cb4[458]][_0x5cb4[501]]();
              /** @type {number} */
              this[_0x5cb4[502]] = 1;
              /** @type {boolean} */
              _0x3de4x21 = true;
            } else {
              if (!this[_0x5cb4[141]]) {
                /** @type {boolean} */
                this[_0x5cb4[503]] = false;
              }
            }
          }
        } else {
          tmpTimeVal++;
          if (afterIdx + i === -1 && 0 === this[_0x5cb4[144]][imageModelSection + id]) {
            /** @type {number} */
            this[_0x5cb4[144]][imageModelSection + id] = MULT3[_0x5cb4[499]] ^ s1;
          }
        }
      }
    }
  }
  if (tmpTimeVal === selTimeVal && this.GameOver(), this[_0x5cb4[487]]) {
    /** @type {boolean} */
    this[_0x5cb4[391]] = false;
    this[_0x5cb4[415]](mmCoreSplitViewBlock);
    for (; this[_0x5cb4[504]];) {
      this[_0x5cb4[382]]();
      this[_0x5cb4[504]]--;
    }
    if (!(-1 !== this[_0x5cb4[459]] && 0 === this[_0x5cb4[216]][_0x5cb4[505]])) {
      this[_0x5cb4[506]](mmCoreSplitViewBlock);
    }
    this[_0x5cb4[394]](mmCoreSplitViewBlock);
    if (_0x3de4x21) {
      this.GameOver();
    }
  } else {
    if (!this[_0x5cb4[141]]) {
      /** @type {boolean} */
      this[_0x5cb4[391]] = false;
      this[_0x5cb4[415]]();
      this[_0x5cb4[394]]();
      this[_0x5cb4[406]][_0x5cb4[507]]();
    }
  }
  if (this[_0x5cb4[150]][_0x5cb4[494]] > 0 && this[_0x5cb4[401]]) {
    this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[509])[_0x5cb4[65]](this[_0x5cb4[508]]());
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[510]] = function(url) {
  let Sharetor = [];
  /** @type {number} */
  var _0x3de4x4 = 0;
  for (; _0x3de4x4 < this[_0x5cb4[149]]; _0x3de4x4++) {
    Sharetor[_0x5cb4[106]](this[_0x5cb4[354]](url));
  }
  return Sharetor;
}, GameCore[_0x5cb4[135]][_0x5cb4[511]] = function() {
  if (this[_0x5cb4[141]]) {
    /** @type {!Array} */
    this[_0x5cb4[148]] = [];
  } else {
    this[_0x5cb4[148]][_0x5cb4[363]](0, this[_0x5cb4[149]]);
  }
  /** @type {number} */
  var _0x3de4x2 = 0;
  for (; _0x3de4x2 < this[_0x5cb4[149]]; _0x3de4x2++) {
    this[_0x5cb4[148]][_0x5cb4[106]](this[_0x5cb4[354]]());
  }
  if (!this[_0x5cb4[141]]) {
    if (1 === this[_0x5cb4[357]]) {
      if (this[_0x5cb4[148]][0][_0x5cb4[44]] >= 5 && 0 === this[_0x5cb4[148]][0][_0x5cb4[65]]) {
        var _0x3de4x3 = this[_0x5cb4[148]][0];
        if (this[_0x5cb4[148]][1][_0x5cb4[44]] < 5) {
          this[_0x5cb4[148]][0] = this[_0x5cb4[148]][1];
          this[_0x5cb4[148]][1] = _0x3de4x3;
        } else {
          this[_0x5cb4[148]][0] = this[_0x5cb4[148]][2];
          this[_0x5cb4[148]][2] = _0x3de4x3;
        }
      }
    } else {
      if (this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[406]] < 3.3 && 2 !== this[_0x5cb4[357]] && this[_0x5cb4[148]][_0x5cb4[19]] >= 3 && this[_0x5cb4[148]][0][_0x5cb4[44]] >= 5 && this[_0x5cb4[148]][1][_0x5cb4[44]] >= 5) {
        _0x3de4x3 = this[_0x5cb4[148]][0];
        this[_0x5cb4[148]][0] = this[_0x5cb4[148]][2];
        this[_0x5cb4[148]][2] = _0x3de4x3;
      }
    }
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[513]] = function() {
  var _0x3de4x2 = this[_0x5cb4[476]];
  return this[_0x5cb4[141]] || (_0x3de4x2 = _0x3de4x2 / 1E3), Math[_0x5cb4[477]](100 * this[_0x5cb4[150]][_0x5cb4[465]] / (_0x3de4x2 / 60)) / 100;
}, GameCore[_0x5cb4[135]][_0x5cb4[496]] = function() {
  /** @type {number} */
  var number = 0;
  return this[_0x5cb4[493]] && (number = (this[_0x5cb4[399]] + this[_0x5cb4[493]]) / this[_0x5cb4[493]]), Math[_0x5cb4[477]](100 * number) / 100;
}, GameCore[_0x5cb4[135]][_0x5cb4[514]] = function() {
  var lowestDelta = this[_0x5cb4[476]];
  return this[_0x5cb4[141]] || (lowestDelta = lowestDelta / 1E3), Math[_0x5cb4[477]](1E4 * (this[_0x5cb4[150]][_0x5cb4[420]] + this[_0x5cb4[150]][_0x5cb4[465]]) / lowestDelta) / 100;
}, GameCore[_0x5cb4[135]][_0x5cb4[508]] = function() {
  return Math[_0x5cb4[477]](this[_0x5cb4[150]][_0x5cb4[448]] / this[_0x5cb4[150]][_0x5cb4[494]] * 100) / 100;
}, GameCore[_0x5cb4[135]][_0x5cb4[515]] = function() {
  var addressCount = this[_0x5cb4[143]][_0x5cb4[19]];
  /** @type {number} */
  var IS_HANDLED = 0;
  for (; IS_HANDLED < addressCount; IS_HANDLED++) {
    var ld = this[_0x5cb4[143]][IS_HANDLED][_0x5cb4[19]];
    /** @type {number} */
    var id = 0;
    for (; id < ld; id++) {
      /** @type {number} */
      this[_0x5cb4[143]][IS_HANDLED][id] = 0;
    }
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[365]] = function() {
  if (this[_0x5cb4[141]] && this[_0x5cb4[409]]) {
    return;
  }
  if (!this[_0x5cb4[141]] && (this[_0x5cb4[406]][_0x5cb4[409]] || !this[_0x5cb4[406]][_0x5cb4[516]])) {
    return;
  }
  this[_0x5cb4[406]][_0x5cb4[517]]();
  let keyOffset = 0;
  /** @type {number} */
  var cur = 0;
  for (; cur < this[_0x5cb4[216]][_0x5cb4[518]]; cur++) {
    if (cur >= this[_0x5cb4[148]][_0x5cb4[19]]) {
      if (9 != this[_0x5cb4[357]]) {
        break;
      }
      if (!this[_0x5cb4[481]][_0x5cb4[519]]) {
        break;
      }
      this[_0x5cb4[481]][_0x5cb4[520]]();
    }
    var res = this[_0x5cb4[148]][cur];
    var coupling = this[_0x5cb4[145]][res[_0x5cb4[65]]][_0x5cb4[73]];
    var values = coupling[_0x5cb4[69]][res[_0x5cb4[44]]][_0x5cb4[69]][0];
    var artistTrack = coupling[_0x5cb4[69]][res[_0x5cb4[44]]][_0x5cb4[499]];
    var change = coupling[_0x5cb4[74]] ? [0, 3] : coupling[_0x5cb4[69]][res[_0x5cb4[44]]][_0x5cb4[521]];
    var notes_mac = values[_0x5cb4[19]];
    var curElem = coupling[_0x5cb4[69]][res[_0x5cb4[44]]][_0x5cb4[522]] ? coupling[_0x5cb4[69]][res[_0x5cb4[44]]][_0x5cb4[522]] : [0, notes_mac - 1];
    var j = change[0];
    for (; j <= change[1]; j++) {
      var i = curElem[0];
      for (; i <= curElem[1]; i++) {
        if (values[j][i] > 0) {
          this[_0x5cb4[406]][_0x5cb4[523]](i - curElem[0], j - change[0] + keyOffset, artistTrack, this[_0x5cb4[406]].QUEUE);
          if (res[_0x5cb4[68]] && values[j][i] === res[_0x5cb4[68]]) {
            this[_0x5cb4[406]][_0x5cb4[524]](i - curElem[0], j - change[0] + keyOffset, this[_0x5cb4[406]].QUEUE);
          }
        }
      }
    }
    if (coupling[_0x5cb4[74]]) {
      keyOffset = keyOffset + 3;
    } else {
      keyOffset = keyOffset + (change[1] - change[0] + 2);
    }
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[404]] = function() {
  if ((!this[_0x5cb4[141]] || !this[_0x5cb4[409]]) && (this[_0x5cb4[141]] || !this[_0x5cb4[406]][_0x5cb4[409]] && this[_0x5cb4[406]][_0x5cb4[516]]) && (this[_0x5cb4[406]][_0x5cb4[525]](), null !== this[_0x5cb4[393]])) {
    var _0x3de4x2 = this[_0x5cb4[145]][this[_0x5cb4[393]][_0x5cb4[65]]][_0x5cb4[73]];
    var nextIdLookup = _0x3de4x2[_0x5cb4[69]][this[_0x5cb4[393]][_0x5cb4[44]]][_0x5cb4[69]][0];
    var artistTrack = _0x3de4x2[_0x5cb4[69]][this[_0x5cb4[393]][_0x5cb4[44]]][_0x5cb4[499]];
    var functionDesc = _0x3de4x2[_0x5cb4[74]] ? [0, 3] : _0x3de4x2[_0x5cb4[69]][this[_0x5cb4[393]][_0x5cb4[44]]][_0x5cb4[521]];
    var currentIndex = nextIdLookup[_0x5cb4[19]];
    var slots = _0x3de4x2[_0x5cb4[69]][this[_0x5cb4[393]][_0x5cb4[44]]][_0x5cb4[522]] ? _0x3de4x2[_0x5cb4[69]][this[_0x5cb4[393]][_0x5cb4[44]]][_0x5cb4[522]] : [0, currentIndex - 1];
    var xValue = functionDesc[0];
    for (; xValue <= functionDesc[1]; xValue++) {
      var slot = slots[0];
      for (; slot <= slots[1]; slot++) {
        if (nextIdLookup[xValue][slot] > 0) {
          this[_0x5cb4[406]][_0x5cb4[523]](slot - slots[0], xValue - functionDesc[0], artistTrack, this[_0x5cb4[406]].HOLD);
          if (this[_0x5cb4[393]][_0x5cb4[68]] && nextIdLookup[xValue][slot] === this[_0x5cb4[393]][_0x5cb4[68]]) {
            this[_0x5cb4[406]][_0x5cb4[524]](slot - slots[0], xValue - functionDesc[0], this[_0x5cb4[406]].HOLD);
          }
        }
      }
    }
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[526]] = function() {
  let drivers = Object[_0x5cb4[64]](this[_0x5cb4[150]]);
  for (let drvName of drivers) {
    /** @type {number} */
    this[_0x5cb4[150]][drvName] = 0;
  }
}, GameCore[_0x5cb4[135]][_0x5cb4[527]] = function(canCreateDiscussions) {
  return canCreateDiscussions <= 0 ? [Number[_0x5cb4[528]], 0] : canCreateDiscussions <= 18 ? [(18 - 1 * (canCreateDiscussions - 1)) / 20, 0] : canCreateDiscussions <= 24 ? [(.9 - .1 * (canCreateDiscussions - 19)) / 20, 0] : 25 === canCreateDiscussions ? [.03, 1] : 26 === canCreateDiscussions ? [.02, 1] : 27 === canCreateDiscussions ? [.1 / 3, 2] : [0, 20];
}, _0x5cb4[51] != typeof module && null != module && (module[_0x5cb4[529]] = GameCore), Bag[_0x5cb4[135]][_0x5cb4[224]] = function() {
  let artistTrack = Math[_0x5cb4[2]](this.RNG() * this[_0x5cb4[222]][_0x5cb4[19]]);
  let type = this[_0x5cb4[222]][_0x5cb4[363]](artistTrack, 1)[0];
  return 0 === this[_0x5cb4[222]][_0x5cb4[19]] && (this[_0x5cb4[222]] = this[_0x5cb4[221]][_0x5cb4[24]](0)), new Block(type);
}, Classic[_0x5cb4[135]][_0x5cb4[224]] = function() {
  return new Block(Math[_0x5cb4[2]](this.RNG() * this[_0x5cb4[223]]));
}, OneBlock[_0x5cb4[135]][_0x5cb4[224]] = function() {
  var type = this[_0x5cb4[222]][0];
  return this[_0x5cb4[222]][_0x5cb4[19]] > 1 && (type = this[_0x5cb4[222]][this[_0x5cb4[225]]++], this[_0x5cb4[225]] %= this[_0x5cb4[222]][_0x5cb4[19]]), new Block(type);
}, C2Sim[_0x5cb4[135]][_0x5cb4[530]] = function(topMaxHeight) {
  let topNaturalHeight = Math[_0x5cb4[2]](this.RNG() * (this[_0x5cb4[223]] - 1));
  return topMaxHeight >= 0 && topNaturalHeight >= topMaxHeight && ++topNaturalHeight, topNaturalHeight === this[_0x5cb4[223]] && (topNaturalHeight = 0), topNaturalHeight;
}, C2Sim[_0x5cb4[135]][_0x5cb4[224]] = function() {
  let type = 0;
  if (this[_0x5cb4[226]][0] < 0) {
    type = Math[_0x5cb4[2]](this.RNG() * this[_0x5cb4[223]]);
  } else {
    if (this[_0x5cb4[226]][0] === this[_0x5cb4[226]][1] || this[_0x5cb4[226]][1] < 0) {
      type = this.RNG() <= .028105 ? this[_0x5cb4[226]][0] : this[_0x5cb4[530]](this[_0x5cb4[226]][0]);
    } else {
      let _0x3de4x3 = this.RNG();
      if (_0x3de4x3 <= .027055) {
        type = this[_0x5cb4[226]][0];
      } else {
        if (_0x3de4x3 >= .882639) {
          type = this[_0x5cb4[226]][1];
        } else {
          do {
            type = this[_0x5cb4[530]](this[_0x5cb4[226]][0]);
          } while (type === this[_0x5cb4[226]][1]);
        }
      }
    }
  }
  return this[_0x5cb4[226]][1] = this[_0x5cb4[226]][0], this[_0x5cb4[226]][0] = type, new Block(type);
}, Repeated[_0x5cb4[135]][_0x5cb4[228]] = function(canCreateDiscussions) {
  this[_0x5cb4[36]] = this[_0x5cb4[142]][_0x5cb4[224]]();
  this[_0x5cb4[227]] = 1 + Math[_0x5cb4[2]](this[_0x5cb4[142]].RNG() * this[_0x5cb4[223]]);
}, Repeated[_0x5cb4[135]][_0x5cb4[224]] = function(canCreateDiscussions) {
  return 0 === this[_0x5cb4[227]] && this[_0x5cb4[228]](), this[_0x5cb4[227]]--, this[_0x5cb4[36]];
}, BsBlock[_0x5cb4[135]][_0x5cb4[224]] = function() {
  let _0x3de4x2 = this[_0x5cb4[142]][_0x5cb4[224]]();
  return this[_0x5cb4[227]]++, this[_0x5cb4[227]] >= 21 && this[_0x5cb4[142]].RNG() < .1 && (_0x3de4x2[_0x5cb4[65]] = this[_0x5cb4[229]][Math[_0x5cb4[2]](this[_0x5cb4[142]].RNG() * this[_0x5cb4[229]][_0x5cb4[19]])], this[_0x5cb4[227]] = 0, 2 === _0x3de4x2[_0x5cb4[65]] && (_0x3de4x2[_0x5cb4[44]] = Math[_0x5cb4[2]](7 * this[_0x5cb4[142]].RNG())), 4 === _0x3de4x2[_0x5cb4[65]] && (_0x3de4x2[_0x5cb4[44]] = Math[_0x5cb4[2]](18 * this[_0x5cb4[142]].RNG()))), _0x3de4x2;
}, BigBlockRand[_0x5cb4[135]][_0x5cb4[224]] = function() {
  let _0x3de4x2 = this[_0x5cb4[142]][_0x5cb4[224]]();
  return this[_0x5cb4[227]]++, this[_0x5cb4[142]].RNG() < this[_0x5cb4[227]] / this[_0x5cb4[230]] && (_0x3de4x2[_0x5cb4[65]] = 2, _0x3de4x2[_0x5cb4[44]] = Math[_0x5cb4[2]](7 * this[_0x5cb4[142]].RNG())), _0x3de4x2;
}, ConstBlock[_0x5cb4[135]][_0x5cb4[224]] = function() {
  let _0x3de4x2 = new Block(this[_0x5cb4[44]]);
  return _0x3de4x2[_0x5cb4[65]] = 0 === this[_0x5cb4[65]] ? -1 : this[_0x5cb4[65]], _0x3de4x2;
}, YotipoSFXset[_0x5cb4[135]] = new BaseSFXset, RainforestSFXset[_0x5cb4[135]] = new BaseSFXset, TetraSFXset[_0x5cb4[135]] = new BaseSFXset, NullSFXset[_0x5cb4[135]] = new BaseSFXset, VoiceSFXset[_0x5cb4[135]] = new NullSFXset, SpawnSFXset[_0x5cb4[135]] = new NullSFXset, DalVSFXset[_0x5cb4[135]] = new NullSFXset, DalSpawnVSFXset[_0x5cb4[135]] = new NullSFXset;
/** @type {!Array} */
var SFXsets = [{
  id : 0,
  name : _0x5cb4[531],
  data : BaseSFXset
}, {
  id : 1,
  name : _0x5cb4[532],
  data : YotipoSFXset
}, {
  id : 2,
  name : _0x5cb4[533],
  data : RainforestSFXset
}, {
  id : 3,
  name : _0x5cb4[534],
  data : TetraSFXset
}, {
  id : 4,
  name : _0x5cb4[152],
  data : NullSFXset
}];
/** @type {!Array} */
var VSFXsets = [{
  id : 0,
  name : _0x5cb4[535],
  data : VoiceSFXset
}, {
  id : 1,
  name : _0x5cb4[536],
  data : SpawnSFXset
}, {
  id : 2,
  name : _0x5cb4[537],
  data : DalVSFXset
}, {
  id : 3,
  name : _0x5cb4[538],
  data : DalSpawnVSFXset
}];
/**
 * @return {undefined}
 */
function SoundQueue() {
  /** @type {null} */
  this[_0x5cb4[539]] = null;
  /** @type {!Array} */
  this[_0x5cb4[148]] = [];
}
/**
 * @param {?} p
 * @return {undefined}
 */
function Items(p) {
  this[_0x5cb4[540]] = p;
  this[_0x5cb4[541]] = document[_0x5cb4[542]](_0x5cb4[541])[0];
  this[_0x5cb4[543]] = document[_0x5cb4[542]](_0x5cb4[543])[0];
  this[_0x5cb4[544]] = document[_0x5cb4[542]](_0x5cb4[544])[0];
  /** @type {!Array} */
  this[_0x5cb4[545]] = [null, {
    id : 1,
    n : _0x5cb4[546],
    i : _0x5cb4[547],
    m : .24,
    p : .12
  }, {
    id : 2,
    n : _0x5cb4[548],
    i : _0x5cb4[549],
    m : .22,
    p : .22
  }, {
    id : 3,
    n : _0x5cb4[550],
    i : _0x5cb4[551],
    m : .2,
    p : .06
  }, {
    id : 4,
    n : _0x5cb4[552],
    i : _0x5cb4[553],
    m : .04,
    p : .06
  }, {
    id : 5,
    n : _0x5cb4[554],
    i : _0x5cb4[555],
    m : .003,
    p : .03
  }, {
    id : 6,
    n : _0x5cb4[556],
    i : _0x5cb4[557],
    m : .107,
    p : .06
  }, {
    id : 7,
    n : _0x5cb4[558],
    i : _0x5cb4[559],
    m : .13,
    p : .06
  }, {
    id : 8,
    n : _0x5cb4[560],
    i : _0x5cb4[561],
    m : .02,
    p : .06
  }, {
    id : 9,
    n : _0x5cb4[562],
    i : _0x5cb4[563],
    m : 0,
    p : .3
  }, {
    id : 10,
    n : _0x5cb4[564],
    i : _0x5cb4[565],
    m : 0,
    p : 0
  }, {
    id : 11,
    n : _0x5cb4[566],
    i : _0x5cb4[567],
    m : .04,
    p : .03
  }, {
    id : 12,
    n : _0x5cb4[568],
    i : _0x5cb4[559],
    m : 0,
    p : 0
  }];
  /** @type {null} */
  this[_0x5cb4[68]] = null;
  /** @type {number} */
  this[_0x5cb4[569]] = 87;
  /** @type {null} */
  this[_0x5cb4[570]] = null;
  /** @type {number} */
  this[_0x5cb4[571]] = 200;
  /** @type {boolean} */
  this[_0x5cb4[572]] = false;
  /** @type {null} */
  this[_0x5cb4[573]] = null;
  /** @type {boolean} */
  this[_0x5cb4[574]] = false;
  /** @type {!Array} */
  this[_0x5cb4[575]] = [];
  /** @type {!Array} */
  this[_0x5cb4[576]] = [];
  /** @type {!Date} */
  var expected_date2 = new Date;
  /** @type {number} */
  this[_0x5cb4[577]] = parseInt(expected_date2[_0x5cb4[578]]());
}
/**
 * @param {?} listenerInfo
 * @param {?} context
 * @return {undefined}
 */
function InvertAnimator(listenerInfo, context) {
  this[_0x5cb4[72]] = listenerInfo;
  this[_0x5cb4[579]] = context;
  this[_0x5cb4[143]] = context[_0x5cb4[143]];
  this[_0x5cb4[580]] = copyMatrix(context[_0x5cb4[143]]);
  this[_0x5cb4[72]][_0x5cb4[581]]();
  /** @type {number} */
  this[_0x5cb4[582]] = .1;
  this[_0x5cb4[583]] = this[_0x5cb4[579]][_0x5cb4[408]];
  /** @type {number} */
  this[_0x5cb4[227]] = 0;
  /** @type {number} */
  this[_0x5cb4[584]] = 0;
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[408]] = false;
  this[_0x5cb4[579]][_0x5cb4[381]]();
}
/**
 * @param {?} isSlidingUp
 * @param {?} $cont
 * @return {undefined}
 */
function PoisonAnimator(isSlidingUp, $cont) {
  this[_0x5cb4[72]] = isSlidingUp;
  this[_0x5cb4[579]] = $cont;
  this[_0x5cb4[143]] = $cont[_0x5cb4[143]];
  /** @type {number} */
  this[_0x5cb4[582]] = .06;
  this[_0x5cb4[583]] = this[_0x5cb4[579]][_0x5cb4[408]];
  /** @type {number} */
  this[_0x5cb4[227]] = 0;
  /** @type {number} */
  this[_0x5cb4[584]] = 0;
  this[_0x5cb4[579]][_0x5cb4[367]]();
  this[_0x5cb4[579]][_0x5cb4[380]](true);
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[408]] = false;
}
/**
 * @param {?} isSlidingUp
 * @param {?} $cont
 * @return {undefined}
 */
function CompressAnimator(isSlidingUp, $cont) {
  this[_0x5cb4[72]] = isSlidingUp;
  this[_0x5cb4[579]] = $cont;
  this[_0x5cb4[143]] = $cont[_0x5cb4[143]];
  /** @type {number} */
  this[_0x5cb4[582]] = .06;
  this[_0x5cb4[583]] = this[_0x5cb4[579]][_0x5cb4[408]];
  /** @type {number} */
  this[_0x5cb4[227]] = 0;
  /** @type {number} */
  this[_0x5cb4[584]] = 0;
  this[_0x5cb4[579]][_0x5cb4[367]]();
  this[_0x5cb4[579]][_0x5cb4[380]](true);
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[408]] = false;
}
/**
 * @param {?} data
 * @param {?} linkedEntities
 * @param {?} force
 * @return {undefined}
 */
function WindAnimator(data, linkedEntities, force) {
  this[_0x5cb4[72]] = data;
  this[_0x5cb4[579]] = linkedEntities;
  this[_0x5cb4[227]] = force;
  this[_0x5cb4[143]] = linkedEntities[_0x5cb4[143]];
  /** @type {number} */
  this[_0x5cb4[582]] = .06;
  /** @type {number} */
  this[_0x5cb4[584]] = 0;
  this[_0x5cb4[583]] = this[_0x5cb4[579]][_0x5cb4[408]];
  this[_0x5cb4[579]][_0x5cb4[367]]();
  this[_0x5cb4[579]][_0x5cb4[380]](true);
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[408]] = false;
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function ItemActivation(canCreateDiscussions) {
  this[_0x5cb4[44]] = canCreateDiscussions;
  /** @type {number} */
  this[_0x5cb4[585]] = 0;
}
/**
 * @param {?} $timeout
 * @return {undefined}
 */
function MapManager($timeout) {
  this[_0x5cb4[540]] = $timeout;
  /** @type {null} */
  this[_0x5cb4[586]] = null;
  /** @type {null} */
  this[_0x5cb4[587]] = null;
  /** @type {!Array} */
  this[_0x5cb4[143]] = [];
  this[_0x5cb4[588]]();
  this[_0x5cb4[423]] = {};
  /** @type {null} */
  this[_0x5cb4[589]] = null;
  /** @type {!Array} */
  this[_0x5cb4[455]] = [];
  /** @type {number} */
  this[_0x5cb4[425]] = 0;
  /** @type {number} */
  this[_0x5cb4[453]] = 1;
  /** @type {number} */
  this[_0x5cb4[590]] = 0;
  /** @type {number} */
  this[_0x5cb4[591]] = 1;
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function ModeManager(canCreateDiscussions) {
  this[_0x5cb4[540]] = canCreateDiscussions;
  /** @type {null} */
  this[_0x5cb4[592]] = null;
  /** @type {null} */
  this[_0x5cb4[593]] = null;
  this[_0x5cb4[594]] = {};
  /** @type {null} */
  this[_0x5cb4[589]] = null;
  /** @type {!Array} */
  this[_0x5cb4[455]] = [];
  this[_0x5cb4[595]] = document[_0x5cb4[542]](_0x5cb4[595])[0];
  this[_0x5cb4[596]] = document[_0x5cb4[542]](_0x5cb4[596])[0];
  this[_0x5cb4[597]] = {};
  this[_0x5cb4[598]] = {};
  this[_0x5cb4[599]] = {};
  /** @type {null} */
  this[_0x5cb4[600]] = null;
  /** @type {null} */
  this[_0x5cb4[601]] = null;
  /** @type {null} */
  this[_0x5cb4[602]] = null;
  this[_0x5cb4[603]] = {};
  this[_0x5cb4[604]] = {};
  /** @type {!Array} */
  this[_0x5cb4[605]] = [];
  this[_0x5cb4[606]] = new ModeTrigger;
  this[_0x5cb4[607]] = new ModeTrigger;
  this[_0x5cb4[608]] = new ModeTrigger;
  /** @type {number} */
  this[_0x5cb4[609]] = 0;
  /** @type {number} */
  this[_0x5cb4[610]] = 0;
  /** @type {number} */
  this[_0x5cb4[611]] = 0;
  /** @type {boolean} */
  this[_0x5cb4[612]] = false;
  /** @type {boolean} */
  this[_0x5cb4[613]] = false;
  /** @type {boolean} */
  this[_0x5cb4[614]] = false;
  /** @type {boolean} */
  this[_0x5cb4[615]] = false;
  /** @type {number} */
  this[_0x5cb4[616]] = -1;
  /** @type {number} */
  this[_0x5cb4[425]] = 0;
  /** @type {number} */
  this[_0x5cb4[453]] = 1;
  /** @type {number} */
  this[_0x5cb4[590]] = 0;
  /** @type {number} */
  this[_0x5cb4[617]] = 1;
  /** @type {number} */
  this[_0x5cb4[591]] = 2;
  /** @type {number} */
  this[_0x5cb4[618]] = 3;
  /** @type {number} */
  this[_0x5cb4[619]] = 3;
  /** @type {number} */
  this[_0x5cb4[620]] = 4;
  /** @type {number} */
  this[_0x5cb4[621]] = 5;
  this[_0x5cb4[622]] = {
    blocks : 1,
    finesse : 2,
    kpp : 3,
    sent : 4,
    tspins : 5,
    combo : 6,
    PC : 7,
    TSD : 8,
    time : 9,
    APM : 10,
    PPS : 11,
    VS : 12,
    garbage : 13,
    hold : 14,
    B2B : 15,
    wasted : 16,
    lines : 17,
    maxCombo : 18,
    single : 19,
    double : 20,
    triple : 21,
    jstris : 22,
    score : 23
  };
  this[_0x5cb4[623]] = {
    I : [0, 0],
    O : [0, 1],
    T : [0, 2],
    L : [0, 3],
    J : [0, 4],
    S : [0, 5],
    Z : [0, 6],
    BI : [2, 0],
    BO : [2, 1],
    BT : [2, 2],
    BL : [2, 3],
    BJ : [2, 4],
    BS : [2, 5],
    BZ : [2, 6],
    I5 : [4, 0],
    V5 : [4, 1],
    T5 : [4, 2],
    U5 : [4, 3],
    W5 : [4, 4],
    X5 : [4, 5],
    J5 : [4, 6],
    L5 : [4, 7],
    S5 : [4, 8],
    Z5 : [4, 9],
    TL : [4, 10],
    TJ : [4, 11],
    OZ : [4, 12],
    OS : [4, 13],
    TS : [4, 14],
    TZ : [4, 15],
    LL : [4, 16],
    JJ : [4, 17],
    I1 : [5, 0],
    I2 : [5, 1],
    I3 : [5, 2],
    L3 : [5, 3],
    "O+" : [8, 1],
    INV : [9, 0],
    NONE : [9, 0]
  };
  createjs[_0x5cb4[628]][_0x5cb4[627]](_0x5cb4[624], this[_0x5cb4[626]][_0x5cb4[625]](this));
}
/**
 * @param {!Object} obj
 * @return {undefined}
 */
function ModeCommand(obj) {
  var key;
  for (key in this[_0x5cb4[629]] = true, obj) {
    this[key] = obj[key];
  }
}
/**
 * @return {undefined}
 */
function ModeTrigger() {
  /** @type {boolean} */
  this[_0x5cb4[629]] = true;
  /** @type {!Array} */
  this[_0x5cb4[630]] = [];
  /** @type {null} */
  this[_0x5cb4[150]] = null;
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function ReplayController(canCreateDiscussions) {
  if (this[_0x5cb4[579]] = canCreateDiscussions, this[_0x5cb4[631]] = 1, this[_0x5cb4[476]] = 0, this[_0x5cb4[632]](false), this[_0x5cb4[633]] = {}, this[_0x5cb4[430]] = getParameterByName(_0x5cb4[430]), this[_0x5cb4[430]]) {
    /** @type {number} */
    var _0x3de4x3 = 0;
    for (; _0x3de4x3 < this[_0x5cb4[579]][_0x5cb4[19]]; _0x3de4x3++) {
      /** @type {number} */
      this[_0x5cb4[579]][_0x5cb4[430]] = parseInt(this[_0x5cb4[430]]);
    }
  }
  this[_0x5cb4[634]]();
}
/**
 * @param {?} mmCoreSplitViewBlock
 * @param {?} $state
 * @param {?} confirmDialogService
 * @param {number} persistentStateService
 * @return {undefined}
 */
function ReplayDownloader(mmCoreSplitViewBlock, $state, confirmDialogService, persistentStateService) {
  this[_0x5cb4[44]] = mmCoreSplitViewBlock;
  this[_0x5cb4[635]] = confirmDialogService;
  this[_0x5cb4[636]] = document[_0x5cb4[637]](this[_0x5cb4[635]]);
  this[_0x5cb4[638]] = $state;
  /** @type {boolean} */
  this[_0x5cb4[639]] = false;
  this[_0x5cb4[640]] = void 0 !== persistentStateService ? persistentStateService : null;
  if (mmCoreSplitViewBlock) {
    this[_0x5cb4[641]](mmCoreSplitViewBlock, $state);
    this[_0x5cb4[642]] = document[_0x5cb4[42]](_0x5cb4[643]);
    this[_0x5cb4[642]][_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[644]);
    this[_0x5cb4[642]][_0x5cb4[59]] = _0x5cb4[646];
    insertNodeAfter(this[_0x5cb4[642]], this[_0x5cb4[636]]);
  }
}
/**
 * @param {?} newNode
 * @param {?} referenceNode
 * @return {undefined}
 */
function insertNodeAfter(newNode, referenceNode) {
  referenceNode[_0x5cb4[649]][_0x5cb4[648]](newNode, referenceNode[_0x5cb4[647]]);
}
/**
 * @param {?} timeWarp
 * @return {undefined}
 */
function Replayer(timeWarp) {
  this[_0x5cb4[406]] = timeWarp;
  this[_0x5cb4[406]][_0x5cb4[579]] = this;
  /** @type {null} */
  this[_0x5cb4[355]] = null;
  /** @type {boolean} */
  this[_0x5cb4[650]] = false;
  /** @type {number} */
  this[_0x5cb4[357]] = 0;
  /** @type {number} */
  this[_0x5cb4[651]] = 0;
  this[_0x5cb4[362]] = new Block(0);
  this[_0x5cb4[410]] = {
    pos : {
      x : 0,
      y : 0
    }
  };
  /** @type {number} */
  this[_0x5cb4[378]] = 0;
  /** @type {number} */
  this[_0x5cb4[652]] = 0;
  /** @type {number} */
  this[_0x5cb4[653]] = .9;
  /** @type {boolean} */
  this[_0x5cb4[654]] = false;
  /** @type {number} */
  this[_0x5cb4[655]] = 2;
  /** @type {boolean} */
  this[_0x5cb4[656]] = false;
  /** @type {boolean} */
  this[_0x5cb4[391]] = false;
  /** @type {number} */
  this[_0x5cb4[657]] = 0;
  /** @type {number} */
  this[_0x5cb4[383]] = 0;
  /** @type {number} */
  this[_0x5cb4[504]] = 0;
  this[_0x5cb4[658]] = void 0;
  /** @type {null} */
  this[_0x5cb4[393]] = null;
  /** @type {boolean} */
  this[_0x5cb4[408]] = true;
  /** @type {number} */
  this[_0x5cb4[493]] = 0;
  /** @type {number} */
  this[_0x5cb4[372]] = 0;
  /** @type {number} */
  this[_0x5cb4[659]] = 0;
  /** @type {number} */
  this[_0x5cb4[399]] = 0;
  /** @type {null} */
  this[_0x5cb4[660]] = null;
  /** @type {null} */
  this[_0x5cb4[661]] = null;
  /** @type {!Array} */
  this[_0x5cb4[138]] = [0, 0, 1, 2, 4, 4, 6, 2, 0, 10, 1];
  /** @type {!Array} */
  this[_0x5cb4[662]] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5];
  /** @type {number} */
  this[_0x5cb4[663]] = 120;
  /** @type {number} */
  this[_0x5cb4[466]] = 0;
  this[_0x5cb4[220]] = alea(this[_0x5cb4[385]]());
  this[_0x5cb4[351]] = this[_0x5cb4[220]];
  this[_0x5cb4[512]] = {};
  /** @type {!Array} */
  this[_0x5cb4[664]] = [];
  /** @type {number} */
  this[_0x5cb4[430]] = 0;
  /** @type {null} */
  this[_0x5cb4[665]] = null;
  this[_0x5cb4[432]] = new Scoring;
  GameCore[_0x5cb4[666]](this, false);
  /** @type {null} */
  this[_0x5cb4[667]] = null;
  /** @type {number} */
  this[_0x5cb4[668]] = 0;
  /** @type {number} */
  this[_0x5cb4[669]] = 0;
  /** @type {null} */
  this[_0x5cb4[670]] = null;
  /** @type {boolean} */
  this[_0x5cb4[671]] = false;
  /** @type {number} */
  this[_0x5cb4[672]] = 0;
  if (_0x5cb4[51] != typeof i18n) {
    this[_0x5cb4[401]] = new SimpleStatsManager(timeWarp);
  }
}
SoundQueue[_0x5cb4[135]][_0x5cb4[386]] = function(newWayId, vol) {
  let artistTrack = {
    id : newWayId,
    vol : vol
  };
  if (null === this[_0x5cb4[539]]) {
    this._playTask(artistTrack);
  } else {
    this[_0x5cb4[148]][_0x5cb4[106]](artistTrack);
  }
}, SoundQueue[_0x5cb4[135]][_0x5cb4[673]] = function() {
  /** @type {!Array} */
  this[_0x5cb4[148]] = [];
  if (this[_0x5cb4[539]]) {
    this[_0x5cb4[539]][_0x5cb4[673]]();
    /** @type {null} */
    this[_0x5cb4[539]] = null;
  }
}, SoundQueue[_0x5cb4[135]][_0x5cb4[674]] = function(options) {
  var processedOptions = createjs[_0x5cb4[628]][_0x5cb4[487]](options[_0x5cb4[44]]);
  processedOptions[_0x5cb4[231]] = options[_0x5cb4[675]];
  processedOptions[_0x5cb4[482]](_0x5cb4[676], this[_0x5cb4[677]][_0x5cb4[625]](this));
  processedOptions[_0x5cb4[482]](_0x5cb4[678], this[_0x5cb4[677]][_0x5cb4[625]](this));
  this[_0x5cb4[539]] = processedOptions;
}, SoundQueue[_0x5cb4[135]][_0x5cb4[677]] = function() {
  if (this[_0x5cb4[148]][_0x5cb4[19]]) {
    let artistTrack = this[_0x5cb4[148]][_0x5cb4[679]]();
    this._playTask(artistTrack);
  } else {
    /** @type {null} */
    this[_0x5cb4[539]] = null;
  }
}, Items[_0x5cb4[135]][_0x5cb4[680]] = function() {
  return false;
}, Items[_0x5cb4[135]][_0x5cb4[681]] = function(canCreateDiscussions) {
  this[_0x5cb4[571]] = canCreateDiscussions[_0x5cb4[571]];
  var coupling = this;
  canCreateDiscussions[_0x5cb4[684]][_0x5cb4[683]](function(res) {
    if (res[_0x5cb4[682]]) {
      coupling[_0x5cb4[545]][res[_0x5cb4[44]]][_0x5cb4[682]] = res[_0x5cb4[682]];
    }
    if (res[_0x5cb4[540]]) {
      coupling[_0x5cb4[545]][res[_0x5cb4[44]]][_0x5cb4[540]] = res[_0x5cb4[540]];
    }
  });
}, Items[_0x5cb4[135]][_0x5cb4[685]] = function() {
  let min = 0;
  let array = [[87, _0x5cb4[686]], [86, _0x5cb4[406]], [88, _0x5cb4[368]], [90, _0x5cb4[687]], [67, _0x5cb4[240]], [65, _0x5cb4[688]], [66, _0x5cb4[248]], [68, _0x5cb4[584]], [69, _0x5cb4[689]], [70, _0x5cb4[573]], [71, _0x5cb4[579]]];
  let coordtransform = this[_0x5cb4[540]][_0x5cb4[691]][_0x5cb4[690]];
  for (let x = 0; x < array[_0x5cb4[19]]; x++) {
    let coord = array[x];
    if (!coordtransform[_0x5cb4[692]](coord[0])) {
      min = x;
      break;
    }
  }
  let _0x3de4x5 = array[min][0];
  let _0x3de4x9 = _0x5cb4[693] + array[min][1][_0x5cb4[694]]() + _0x5cb4[695];
  this[_0x5cb4[569]] = _0x3de4x5;
  this[_0x5cb4[544]][_0x5cb4[45]] = _0x3de4x9;
}, Items[_0x5cb4[135]][_0x5cb4[696]] = function() {
  var _0x3de4x2 = this[_0x5cb4[540]][_0x5cb4[697]](0, this[_0x5cb4[571]] - 1);
  if (this[_0x5cb4[680]]()) {
    return 0 === _0x3de4x2 || this[_0x5cb4[572]] ? (this[_0x5cb4[572]] = false, this[_0x5cb4[540]][_0x5cb4[697]](1, 4)) : 0;
  }
}, Items[_0x5cb4[135]][_0x5cb4[698]] = function() {
  if (this[_0x5cb4[573]]) {
    let _0x3de4x2 = this[_0x5cb4[545]][this[_0x5cb4[573]]];
    return this[_0x5cb4[573]] = null, _0x3de4x2;
  }
  return this[_0x5cb4[699]](_0x5cb4[540]);
}, Items[_0x5cb4[135]][_0x5cb4[700]] = function() {
  if (this[_0x5cb4[680]]()) {
    this[_0x5cb4[701]]();
  }
  /** @type {number} */
  this[_0x5cb4[570]] = 0;
  var packByNumType = this;
  if (this[_0x5cb4[575]]) {
    this[_0x5cb4[575]][_0x5cb4[683]](function(data) {
      packByNumType[_0x5cb4[702]](data[_0x5cb4[44]]);
    });
  }
  /** @type {!Array} */
  this[_0x5cb4[575]] = [];
  this[_0x5cb4[685]]();
  this[_0x5cb4[703]]();
}, Items[_0x5cb4[135]][_0x5cb4[703]] = function() {
  /** @type {null} */
  this[_0x5cb4[68]] = null;
  hideElem(this[_0x5cb4[541]]);
}, Items[_0x5cb4[135]][_0x5cb4[272]] = function() {
  showElem(this[_0x5cb4[541]]);
  let _0x3de4x2 = this[_0x5cb4[698]]();
  this[_0x5cb4[68]] = _0x3de4x2[_0x5cb4[44]];
  this[_0x5cb4[540]][_0x5cb4[379]](_0x5cb4[272]);
  if (9 === this[_0x5cb4[68]]) {
    this[_0x5cb4[701]]();
    /** @type {null} */
    this[_0x5cb4[543]][_0x5cb4[35]][_0x5cb4[704]] = null;
    this[_0x5cb4[543]][_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[705]);
    this[_0x5cb4[543]][_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[706]);
  } else {
    this[_0x5cb4[543]][_0x5cb4[35]][_0x5cb4[704]] = _0x5cb4[707] + _0x3de4x2[_0x5cb4[227]] + _0x5cb4[442];
    this[_0x5cb4[543]][_0x5cb4[645]][_0x5cb4[708]](_0x5cb4[705]);
    this[_0x5cb4[543]][_0x5cb4[645]][_0x5cb4[708]](_0x5cb4[706]);
  }
}, Items[_0x5cb4[135]][_0x5cb4[709]] = function() {
  let criterion_index = this[_0x5cb4[575]][_0x5cb4[19]];
  for (; criterion_index--;) {
    let _0x3de4x3 = this[_0x5cb4[575]][criterion_index];
    _0x3de4x3[_0x5cb4[585]]--;
    if (_0x3de4x3[_0x5cb4[585]] <= 0) {
      this[_0x5cb4[575]][_0x5cb4[363]](criterion_index, 1);
      this[_0x5cb4[702]](_0x3de4x3[_0x5cb4[44]]);
    }
  }
}, Items[_0x5cb4[135]][_0x5cb4[710]] = function(mmCoreSplitViewBlock) {
  mmCoreSplitViewBlock = mmCoreSplitViewBlock || this[_0x5cb4[540]][_0x5cb4[385]]();
  let artistTrack = this[_0x5cb4[68]];
  if (this[_0x5cb4[68]]) {
    /** @type {null} */
    this[_0x5cb4[68]] = null;
    if (9 !== artistTrack) {
      this[_0x5cb4[703]]();
    }
    this[_0x5cb4[540]][_0x5cb4[379]](_0x5cb4[68]);
    this[_0x5cb4[711]](artistTrack, mmCoreSplitViewBlock);
  }
}, Items[_0x5cb4[135]][_0x5cb4[711]] = function(canCreateDiscussions, context) {
  if (1 === canCreateDiscussions) {
    this[_0x5cb4[712]](11, true, context);
    let artistTrack = new ItemActivation(canCreateDiscussions);
    /** @type {number} */
    artistTrack[_0x5cb4[585]] = 7;
    this[_0x5cb4[575]][_0x5cb4[106]](artistTrack);
  } else {
    if (2 === canCreateDiscussions) {
      this[_0x5cb4[713]](1);
    } else {
      if (3 === canCreateDiscussions) {
        this[_0x5cb4[713]](2);
      } else {
        if (4 === canCreateDiscussions) {
          this[_0x5cb4[713]](3);
          let artistTrack = new ItemActivation(canCreateDiscussions);
          artistTrack[_0x5cb4[585]] = this[_0x5cb4[540]][_0x5cb4[697]](5, 11);
          this[_0x5cb4[575]][_0x5cb4[106]](artistTrack);
        } else {
          if (5 === canCreateDiscussions) {
            /** @type {boolean} */
            this[_0x5cb4[540]][_0x5cb4[487]] = false;
            this[_0x5cb4[540]][_0x5cb4[488]] = new PoisonAnimator(this, this[_0x5cb4[540]]);
          } else {
            if (6 === canCreateDiscussions) {
              this[_0x5cb4[714]](4, context);
              let artistTrack = new ItemActivation(canCreateDiscussions);
              /** @type {number} */
              artistTrack[_0x5cb4[585]] = 5;
              this[_0x5cb4[575]][_0x5cb4[106]](artistTrack);
            } else {
              if (7 === canCreateDiscussions) {
                var readInfo = new ReplayAction(this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[384]].AUX, context);
                /** @type {!Array} */
                readInfo[_0x5cb4[584]] = [this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[716]][_0x5cb4[715]], 0, 2];
                this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[386]](readInfo);
                /** @type {number} */
                this[_0x5cb4[540]][_0x5cb4[355]] = 2;
              } else {
                if (8 === canCreateDiscussions) {
                  this[_0x5cb4[713]](4);
                } else {
                  if (9 === canCreateDiscussions) {
                    this[_0x5cb4[705]](context);
                  } else {
                    if (10 === canCreateDiscussions) {
                      this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[718]](_0x5cb4[717], 2);
                    } else {
                      if (11 === canCreateDiscussions) {
                        this[_0x5cb4[712]](12, true, context);
                        let artistTrack = new ItemActivation(canCreateDiscussions);
                        artistTrack[_0x5cb4[585]] = this[_0x5cb4[540]][_0x5cb4[697]](7, 28);
                        this[_0x5cb4[575]][_0x5cb4[106]](artistTrack);
                      } else {
                        if (12 === canCreateDiscussions) {
                          this[_0x5cb4[714]](2, context);
                          let artistTrack = new ItemActivation(canCreateDiscussions);
                          artistTrack[_0x5cb4[585]] = this[_0x5cb4[540]][_0x5cb4[697]](5, 27);
                          this[_0x5cb4[575]][_0x5cb4[106]](artistTrack);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, Items[_0x5cb4[135]][_0x5cb4[701]] = function() {
  if (!this[_0x5cb4[576]][_0x5cb4[19]]) {
    var color1hsl;
    for (color1hsl of this[_0x5cb4[545]]) {
      if (color1hsl) {
        /** @type {!Image} */
        var color3hsl = new Image;
        color3hsl[_0x5cb4[59]] = color1hsl[_0x5cb4[227]];
        this[_0x5cb4[576]][_0x5cb4[106]](color3hsl);
      }
    }
  }
}, Items[_0x5cb4[135]][_0x5cb4[699]] = function(i) {
  var lastModified = Math[_0x5cb4[697]]();
  /** @type {number} */
  var curTotal = 0;
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x5cb4[545]][_0x5cb4[19]]; indexLookupKey++) {
    let userSubmission = this[_0x5cb4[545]][indexLookupKey];
    if (userSubmission && lastModified < (curTotal = curTotal + userSubmission[i])) {
      return userSubmission;
    }
  }
  return results[this[_0x5cb4[545]][_0x5cb4[19]] - 1];
}, Items[_0x5cb4[135]][_0x5cb4[719]] = function() {
  return this[_0x5cb4[699]](_0x5cb4[682]);
}, Items[_0x5cb4[135]][_0x5cb4[705]] = function(mmCoreSplitViewBlock) {
  let criterion_index = this[_0x5cb4[719]]()[_0x5cb4[44]];
  let _0x3de4x4 = this[_0x5cb4[545]][criterion_index];
  this[_0x5cb4[543]][_0x5cb4[35]][_0x5cb4[704]] = _0x5cb4[707] + _0x3de4x4[_0x5cb4[227]] + _0x5cb4[442];
  this[_0x5cb4[711]](criterion_index, mmCoreSplitViewBlock);
  this[_0x5cb4[543]][_0x5cb4[645]][_0x5cb4[708]](_0x5cb4[706]);
  var _0x3de4x5 = this;
  setTimeout(function() {
    if (null === _0x3de4x5[_0x5cb4[68]]) {
      hideElem(_0x3de4x5[_0x5cb4[541]]);
    }
  }, 1500);
}, Items[_0x5cb4[135]][_0x5cb4[714]] = function(boardManager, auto) {
  auto = auto || this[_0x5cb4[540]][_0x5cb4[385]]();
  var auto_option = new ReplayAction(this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[384]].AUX, auto);
  /** @type {!Array} */
  auto_option[_0x5cb4[584]] = [this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[716]][_0x5cb4[715]], 1, boardManager];
  this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[386]](auto_option);
  this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[350]] = boardManager;
  this[_0x5cb4[712]](this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[218]], true, auto);
}, Items[_0x5cb4[135]][_0x5cb4[713]] = function(canCreateDiscussions) {
  if (1 === canCreateDiscussions) {
    let _0x3de4x2 = this[_0x5cb4[540]][_0x5cb4[697]](10, 31);
    /** @type {boolean} */
    this[_0x5cb4[540]][_0x5cb4[487]] = false;
    this[_0x5cb4[540]][_0x5cb4[488]] = new WindAnimator(this, this[_0x5cb4[540]], _0x3de4x2);
    /** @type {!Array} */
    (artistTrack = new ReplayAction(this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[384]].AUX, this[_0x5cb4[540]][_0x5cb4[385]]()))[_0x5cb4[584]] = [this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[716]][_0x5cb4[720]], 0, _0x3de4x2];
    this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[386]](artistTrack);
  } else {
    if (2 === canCreateDiscussions) {
      /** @type {boolean} */
      this[_0x5cb4[540]][_0x5cb4[487]] = false;
      this[_0x5cb4[540]][_0x5cb4[488]] = new CompressAnimator(this, this[_0x5cb4[540]]);
      /** @type {!Array} */
      (artistTrack = new ReplayAction(this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[384]].AUX, this[_0x5cb4[540]][_0x5cb4[385]]()))[_0x5cb4[584]] = [this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[716]][_0x5cb4[720]], 1, 0];
      this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[386]](artistTrack);
    } else {
      if (3 === canCreateDiscussions) {
        /** @type {!Array} */
        (artistTrack = new ReplayAction(this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[384]].AUX, this[_0x5cb4[540]][_0x5cb4[385]]()))[_0x5cb4[584]] = [this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[716]][_0x5cb4[720]], 2, 0];
        this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[386]](artistTrack);
        this[_0x5cb4[721]]();
        this[_0x5cb4[540]][_0x5cb4[381]]();
      } else {
        if (4 === canCreateDiscussions) {
          var artistTrack;
          /** @type {!Array} */
          (artistTrack = new ReplayAction(this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[384]].AUX, this[_0x5cb4[540]][_0x5cb4[385]]()))[_0x5cb4[584]] = [this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[716]][_0x5cb4[720]], 3, 0];
          this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[386]](artistTrack);
          /** @type {boolean} */
          this[_0x5cb4[540]][_0x5cb4[487]] = false;
          this[_0x5cb4[540]][_0x5cb4[488]] = new InvertAnimator(this, this[_0x5cb4[540]]);
          this[_0x5cb4[540]][_0x5cb4[367]]();
          this[_0x5cb4[540]][_0x5cb4[380]](true);
        }
      }
    }
  }
}, Items[_0x5cb4[135]][_0x5cb4[722]] = function() {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < 10; ++indexLookupKey) {
    /** @type {number} */
    this[_0x5cb4[540]][_0x5cb4[144]][indexLookupKey] = 0;
  }
}, Items[_0x5cb4[135]][_0x5cb4[581]] = function() {
  this[_0x5cb4[722]]();
  /** @type {number} */
  var id = 0;
  for (; id < 2; id++) {
    if (9 !== this[_0x5cb4[540]][_0x5cb4[143]][id][0]) {
      var map = this[_0x5cb4[540]][_0x5cb4[143]][id];
      /** @type {number} */
      var num_elements = 0;
      for (; num_elements < 10; ++num_elements) {
        /** @type {number} */
        map[num_elements] = 0;
      }
    }
  }
  /** @type {number} */
  id = 2;
  for (; id < this[_0x5cb4[540]][_0x5cb4[143]][_0x5cb4[19]]; id++) {
    if (9 !== this[_0x5cb4[540]][_0x5cb4[143]][id][0]) {
      map = this[_0x5cb4[540]][_0x5cb4[143]][id];
      /** @type {number} */
      var _0x3de4x5 = 0;
      /** @type {number} */
      num_elements = 0;
      for (; num_elements < 10; ++num_elements) {
        if (map[num_elements]) {
          /** @type {number} */
          map[num_elements] = 0;
        } else {
          if (0 === map[num_elements]) {
            /** @type {number} */
            map[num_elements] = 8;
            _0x3de4x5++;
          }
        }
      }
      if (10 === _0x3de4x5) {
        /** @type {number} */
        map[9] = 0;
      }
    }
  }
}, Items[_0x5cb4[135]][_0x5cb4[721]] = function(results) {
  if (!results) {
    results = this[_0x5cb4[540]][_0x5cb4[424]];
  }
  /** @type {number} */
  var j = 0;
  results[_0x5cb4[724]](_0x5cb4[723]);
  this[_0x5cb4[722]]();
  let d = 0;
  /** @type {number} */
  var i = j = this[_0x5cb4[540]][_0x5cb4[143]][_0x5cb4[19]] - 1;
  for (; i >= 0; --i, --j) {
    if (9 !== this[_0x5cb4[540]][_0x5cb4[143]][i][0]) {
      this[_0x5cb4[540]][_0x5cb4[143]][i] = results[_0x5cb4[143]][j + d];
    } else {
      d++;
    }
  }
  this[_0x5cb4[540]][_0x5cb4[367]]();
  this[_0x5cb4[540]][_0x5cb4[380]](true);
  /** @type {number} */
  this[_0x5cb4[540]][_0x5cb4[459]] = -1;
}, Items[_0x5cb4[135]][_0x5cb4[725]] = function(boardManager) {
  /**
   * @param {number} index
   * @param {!Array} data
   * @return {undefined}
   */
  function parse(index, data) {
    if (!data[index - 1]) {
      /** @type {number} */
      var n = index;
      for (; n < 10; ++n) {
        data[n - 1] = data[n];
      }
      /** @type {number} */
      data[9] = 0;
    }
  }
  this[_0x5cb4[722]]();
  /** @type {number} */
  var apiCallRaw = 1;
  for (; apiCallRaw <= boardManager; apiCallRaw++) {
    /** @type {number} */
    var textureUrl = 0;
    for (; textureUrl < 20; ++textureUrl) {
      if (9 !== this[_0x5cb4[540]][_0x5cb4[143]][textureUrl][0]) {
        parse(apiCallRaw, this[_0x5cb4[540]][_0x5cb4[143]][textureUrl]);
      }
    }
  }
}, Items[_0x5cb4[135]][_0x5cb4[726]] = function(canCreateDiscussions) {
  var article = copyMatrix(this[_0x5cb4[540]][_0x5cb4[143]]);
  this[_0x5cb4[722]]();
  /** @type {number} */
  var category = 0;
  for (; category < 20; ++category) {
    if (9 === article[category][0]) {
      continue;
    }
    let SegClasses = (category % 2 == 0 ? 1 : -1) * canCreateDiscussions;
    /** @type {number} */
    var type = 0;
    for (; type < 10; ++type) {
      let i = (type + SegClasses) % 10;
      for (; i < 0;) {
        i = i + 10;
      }
      this[_0x5cb4[540]][_0x5cb4[143]][category][type] = article[category][i];
    }
  }
}, Items[_0x5cb4[135]][_0x5cb4[712]] = function(leftFence, canCreateDiscussions, isSlidingUp) {
  let history = isSlidingUp || this[_0x5cb4[540]][_0x5cb4[385]]();
  let object = canCreateDiscussions ? 1 : 0;
  this[_0x5cb4[540]][_0x5cb4[142]] = this[_0x5cb4[540]][_0x5cb4[349]](leftFence);
  if (canCreateDiscussions) {
    this[_0x5cb4[540]][_0x5cb4[511]]();
    this[_0x5cb4[540]][_0x5cb4[365]]();
  }
  var visualization2D = new ReplayAction(this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[384]].AUX, history);
  /** @type {!Array} */
  visualization2D[_0x5cb4[584]] = [this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[716]][_0x5cb4[727]], object, leftFence];
  this[_0x5cb4[540]][_0x5cb4[352]][_0x5cb4[386]](visualization2D);
}, Items[_0x5cb4[135]][_0x5cb4[702]] = function(canCreateDiscussions) {
  if (1 === canCreateDiscussions) {
    this[_0x5cb4[712]](this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[218]], false);
  } else {
    if (4 === canCreateDiscussions) {
      let _0x3de4x2 = this[_0x5cb4[68]];
      /** @type {number} */
      this[_0x5cb4[68]] = 2;
      this[_0x5cb4[710]]();
      this[_0x5cb4[68]] = _0x3de4x2;
      /** @type {boolean} */
      this[_0x5cb4[540]][_0x5cb4[728]] = true;
    } else {
      if (6 === canCreateDiscussions) {
        this[_0x5cb4[714]](this[_0x5cb4[570]]);
      } else {
        if (11 === canCreateDiscussions) {
          this[_0x5cb4[712]](this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[218]], false);
        } else {
          if (12 === canCreateDiscussions) {
            this[_0x5cb4[714]](this[_0x5cb4[570]]);
          }
        }
      }
    }
  }
}, InvertAnimator[_0x5cb4[135]][_0x5cb4[729]] = function(canCreateDiscussions) {
  this[_0x5cb4[584]] += canCreateDiscussions;
  for (; this[_0x5cb4[584]] > this[_0x5cb4[582]];) {
    this[_0x5cb4[584]] -= this[_0x5cb4[582]];
    this[_0x5cb4[730]]();
  }
}, InvertAnimator[_0x5cb4[135]][_0x5cb4[730]] = function() {
  this[_0x5cb4[227]]++;
  var _0x3de4x2 = this[_0x5cb4[580]];
  this[_0x5cb4[580]] = this[_0x5cb4[579]][_0x5cb4[143]];
  this[_0x5cb4[579]][_0x5cb4[143]] = _0x3de4x2;
  if (2 !== this[_0x5cb4[227]]) {
    this[_0x5cb4[579]][_0x5cb4[381]]();
  } else {
    this[_0x5cb4[731]]();
  }
}, InvertAnimator[_0x5cb4[135]][_0x5cb4[731]] = function() {
  /** @type {null} */
  this[_0x5cb4[579]][_0x5cb4[488]] = null;
  if (!this[_0x5cb4[579]][_0x5cb4[732]]) {
    /** @type {boolean} */
    this[_0x5cb4[579]][_0x5cb4[487]] = true;
  }
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[409]] = false;
  this[_0x5cb4[579]][_0x5cb4[408]] = this[_0x5cb4[583]];
  this[_0x5cb4[579]][_0x5cb4[380]](true);
  this[_0x5cb4[579]][_0x5cb4[381]]();
}, PoisonAnimator[_0x5cb4[135]][_0x5cb4[729]] = function(canCreateDiscussions) {
  this[_0x5cb4[584]] += canCreateDiscussions;
  for (; this[_0x5cb4[584]] > this[_0x5cb4[582]];) {
    this[_0x5cb4[584]] -= this[_0x5cb4[582]];
    this[_0x5cb4[730]]();
  }
}, PoisonAnimator[_0x5cb4[135]][_0x5cb4[730]] = function() {
  this[_0x5cb4[227]]++;
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[487]] = true;
  this[_0x5cb4[579]][_0x5cb4[733]]();
  if (!this[_0x5cb4[579]][_0x5cb4[487]]) {
    this[_0x5cb4[731]]();
  }
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[487]] = false;
}, PoisonAnimator[_0x5cb4[135]][_0x5cb4[731]] = function() {
  /** @type {null} */
  this[_0x5cb4[579]][_0x5cb4[488]] = null;
  if (!this[_0x5cb4[579]][_0x5cb4[732]]) {
    /** @type {boolean} */
    this[_0x5cb4[579]][_0x5cb4[487]] = true;
  }
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[409]] = false;
  this[_0x5cb4[579]][_0x5cb4[408]] = this[_0x5cb4[583]];
  this[_0x5cb4[579]][_0x5cb4[380]](true);
  this[_0x5cb4[579]][_0x5cb4[381]]();
}, CompressAnimator[_0x5cb4[135]][_0x5cb4[729]] = function(canCreateDiscussions) {
  this[_0x5cb4[584]] += canCreateDiscussions;
  for (; this[_0x5cb4[584]] > this[_0x5cb4[582]];) {
    this[_0x5cb4[584]] -= this[_0x5cb4[582]];
    this[_0x5cb4[730]]();
  }
}, CompressAnimator[_0x5cb4[135]][_0x5cb4[730]] = function() {
  this[_0x5cb4[227]]++;
  this[_0x5cb4[72]][_0x5cb4[725]](this[_0x5cb4[227]]);
  this[_0x5cb4[579]][_0x5cb4[381]]();
  if (this[_0x5cb4[227]] >= 10) {
    this[_0x5cb4[731]]();
  }
}, CompressAnimator[_0x5cb4[135]][_0x5cb4[731]] = function() {
  /** @type {null} */
  this[_0x5cb4[579]][_0x5cb4[488]] = null;
  if (!this[_0x5cb4[579]][_0x5cb4[732]]) {
    /** @type {boolean} */
    this[_0x5cb4[579]][_0x5cb4[487]] = true;
  }
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[409]] = false;
  this[_0x5cb4[579]][_0x5cb4[408]] = this[_0x5cb4[583]];
  this[_0x5cb4[579]][_0x5cb4[380]](true);
  this[_0x5cb4[579]][_0x5cb4[381]]();
}, WindAnimator[_0x5cb4[135]][_0x5cb4[729]] = function(canCreateDiscussions) {
  this[_0x5cb4[584]] += canCreateDiscussions;
  for (; this[_0x5cb4[584]] > this[_0x5cb4[582]];) {
    this[_0x5cb4[584]] -= this[_0x5cb4[582]];
    this[_0x5cb4[730]]();
  }
}, WindAnimator[_0x5cb4[135]][_0x5cb4[730]] = function() {
  this[_0x5cb4[72]][_0x5cb4[726]](1);
  this[_0x5cb4[579]][_0x5cb4[381]]();
  this[_0x5cb4[227]]--;
  if (this[_0x5cb4[227]] <= 0) {
    this[_0x5cb4[731]]();
  }
}, WindAnimator[_0x5cb4[135]][_0x5cb4[731]] = function() {
  /** @type {null} */
  this[_0x5cb4[579]][_0x5cb4[488]] = null;
  if (!this[_0x5cb4[579]][_0x5cb4[732]]) {
    /** @type {boolean} */
    this[_0x5cb4[579]][_0x5cb4[487]] = true;
  }
  /** @type {boolean} */
  this[_0x5cb4[579]][_0x5cb4[409]] = false;
  this[_0x5cb4[579]][_0x5cb4[408]] = this[_0x5cb4[583]];
  this[_0x5cb4[579]][_0x5cb4[380]](true);
  this[_0x5cb4[579]][_0x5cb4[381]]();
}, MapManager[_0x5cb4[135]][_0x5cb4[588]] = function() {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < 20; ++indexLookupKey) {
    /** @type {!Array} */
    this[_0x5cb4[143]][indexLookupKey] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}, MapManager[_0x5cb4[135]][_0x5cb4[734]] = function(theLibrary) {
  alert(_0x5cb4[735] + theLibrary);
  this[_0x5cb4[540]][_0x5cb4[736]](2, false);
}, MapManager[_0x5cb4[135]][_0x5cb4[724]] = function(sample) {
  var PL$13 = base64ToBinary(sample);
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13[_0x5cb4[19]]; PL$17++) {
    var iix = Math[_0x5cb4[2]](PL$17 / 5);
    /** @type {number} */
    var iiy = 2 * (PL$17 - 5 * iix);
    /** @type {number} */
    this[_0x5cb4[143]][iix][iiy] = PL$13[PL$17] >>> 4;
    /** @type {number} */
    this[_0x5cb4[143]][iix][iiy + 1] = 15 & PL$13[PL$17];
  }
}, MapManager[_0x5cb4[135]][_0x5cb4[426]] = function(colNumber) {
  /** @type {null} */
  var messageWarn = null;
  /** @type {number} */
  var colProp = 0;
  for (; colProp < this[_0x5cb4[455]][_0x5cb4[19]]; colProp++) {
    if (this[_0x5cb4[455]][colProp] === colNumber) {
      /** @type {number} */
      messageWarn = colProp;
    } else {
      if (this[_0x5cb4[455]][colProp] < colNumber) {
        ++this[_0x5cb4[455]][colProp];
      }
    }
  }
  if (null !== messageWarn) {
    this[_0x5cb4[455]][_0x5cb4[363]](messageWarn, 1);
  }
}, MapManager[_0x5cb4[135]][_0x5cb4[737]] = function(canCreateDiscussions) {
  /** @type {!Array} */
  this[_0x5cb4[455]] = [];
  /** @type {number} */
  var criterion_index = 19;
  for (; criterion_index >= 0; --criterion_index) {
    var _0x3de4x4 = this[_0x5cb4[143]][criterion_index][_0x5cb4[738]]((buckets, name) => {
      return buckets + name;
    }, 0);
    if (_0x3de4x4 > 0) {
      /** @type {number} */
      this[_0x5cb4[589]] = criterion_index;
    }
    if (_0x3de4x4 > 0) {
      this[_0x5cb4[455]][_0x5cb4[106]](criterion_index);
    }
  }
}, MapManager[_0x5cb4[135]][_0x5cb4[739]] = function() {
  this[_0x5cb4[724]](this[_0x5cb4[423]][_0x5cb4[667]]);
  this[_0x5cb4[737]]();
  this[_0x5cb4[586]]();
}, MapManager[_0x5cb4[135]][_0x5cb4[740]] = function() {
  if (this[_0x5cb4[587]] !== this[_0x5cb4[423]][_0x5cb4[44]] || this[_0x5cb4[423]][_0x5cb4[741]] !== this[_0x5cb4[591]]) {
    /** @type {!XMLHttpRequest} */
    var xhr = new XMLHttpRequest;
    var url = _0x5cb4[742] + this[_0x5cb4[587]];
    /** @type {number} */
    xhr[_0x5cb4[670]] = 5E3;
    xhr[_0x5cb4[744]](_0x5cb4[743], url, true);
    xhr[_0x5cb4[747]](_0x5cb4[745], _0x5cb4[746]);
    xhr[_0x5cb4[747]](_0x5cb4[748], _0x5cb4[749]);
    try {
      xhr[_0x5cb4[750]]();
    } catch (_0x3de4x2) {
      this[_0x5cb4[734]](_0x3de4x2[_0x5cb4[751]]);
    }
    var _0x3de4x4 = this;
    /**
     * @return {undefined}
     */
    xhr[_0x5cb4[752]] = function() {
      _0x3de4x4[_0x5cb4[734]](_0x5cb4[753]);
    };
    /** @type {function(): undefined} */
    xhr[_0x5cb4[754]] = xhr[_0x5cb4[755]] = function() {
      _0x3de4x4[_0x5cb4[734]](_0x5cb4[756]);
    };
    /**
     * @return {undefined}
     */
    xhr[_0x5cb4[60]] = function() {
      if (200 === xhr[_0x5cb4[757]]) {
        _0x3de4x4[_0x5cb4[423]] = JSON[_0x5cb4[111]](xhr[_0x5cb4[758]]);
        _0x3de4x4[_0x5cb4[739]]();
      } else {
        _0x3de4x4[_0x5cb4[734]](xhr[_0x5cb4[757]] + _0x5cb4[759] + xhr[_0x5cb4[760]]);
      }
    };
  } else {
    this[_0x5cb4[739]]();
  }
}, MapManager[_0x5cb4[135]][_0x5cb4[761]] = function(width) {
  var w = width || parseInt(getParameterByName(_0x5cb4[63]));
  if (!isNaN(w) && w) {
    this[_0x5cb4[587]] = w;
  } else {
    alert(_0x5cb4[762]);
  }
  this[_0x5cb4[740]]();
}, ModeCommand[_0x5cb4[135]][_0x5cb4[763]] = function(canCreateDiscussions) {
  if (this[_0x5cb4[629]]) {
    canCreateDiscussions[_0x5cb4[764]](this);
  }
}, ModeTrigger[_0x5cb4[135]][_0x5cb4[106]] = function(mmCoreSplitViewBlock) {
  this[_0x5cb4[630]][_0x5cb4[106]](mmCoreSplitViewBlock);
}, ModeTrigger[_0x5cb4[135]][_0x5cb4[763]] = function(canCreateDiscussions) {
  if (this[_0x5cb4[629]]) {
    canCreateDiscussions[_0x5cb4[765]](this);
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[482]] = function(targetfieldName, to_row) {
  let insertion_target = null;
  try {
    insertion_target = this[_0x5cb4[604]][targetfieldName + 100];
  } catch (_0x3de4x2) {
  }
  if (insertion_target) {
    this[_0x5cb4[765]](insertion_target);
    /** @type {null} */
    insertion_target = null;
  }
  try {
    if (insertion_target = this[_0x5cb4[604]][targetfieldName][to_row], !insertion_target) {
      return;
    }
  } catch (_0x3de4x2) {
    return;
  }
  this[_0x5cb4[765]](insertion_target);
}, ModeManager[_0x5cb4[135]][_0x5cb4[766]] = function() {
  if (this[_0x5cb4[600]]) {
    clearTimeout(this[_0x5cb4[600]]);
    /** @type {null} */
    this[_0x5cb4[600]] = null;
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[767]] = function() {
  if (this[_0x5cb4[602]]) {
    document[_0x5cb4[769]](_0x5cb4[768], this[_0x5cb4[602]], true);
    /** @type {null} */
    this[_0x5cb4[602]] = null;
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[770]] = function() {
  if (this[_0x5cb4[601]]) {
    document[_0x5cb4[769]](_0x5cb4[768], this[_0x5cb4[601]]);
    /** @type {null} */
    this[_0x5cb4[601]] = null;
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[771]] = function() {
  hideElem(this[_0x5cb4[595]]);
  this[_0x5cb4[766]]();
  this[_0x5cb4[770]]();
  /** @type {boolean} */
  this[_0x5cb4[540]][_0x5cb4[409]] = false;
  this[_0x5cb4[596]][_0x5cb4[45]] = _0x5cb4[5];
}, ModeManager[_0x5cb4[135]][_0x5cb4[772]] = function(coord, canCreateDiscussions) {
  if (canCreateDiscussions || (canCreateDiscussions = this[_0x5cb4[540]][_0x5cb4[150]]), (_0x5cb4[773] == typeof coord || coord instanceof String) && !(coord = this[_0x5cb4[622]][coord])) {
    return null;
  }
  switch(coord) {
    case 1:
      return [this[_0x5cb4[540]][_0x5cb4[493]], _0x5cb4[774]];
    case 2:
      return [this[_0x5cb4[540]][_0x5cb4[659]], _0x5cb4[775]];
    case 3:
      return [this[_0x5cb4[540]][_0x5cb4[496]](), _0x5cb4[497]];
    case 4:
      return [canCreateDiscussions[_0x5cb4[461]], _0x5cb4[776]];
    case 5:
      return [canCreateDiscussions[_0x5cb4[449]], _0x5cb4[777]];
    case 6:
      return [this[_0x5cb4[540]][_0x5cb4[459]], _0x5cb4[778]];
    case 7:
      return [canCreateDiscussions[_0x5cb4[451]], _0x5cb4[451]];
    case 8:
      return [canCreateDiscussions[_0x5cb4[435]], _0x5cb4[779]];
    case 9:
      return [this[_0x5cb4[540]][_0x5cb4[476]], _0x5cb4[780]];
    case 10:
      return [this[_0x5cb4[540]][_0x5cb4[513]](), _0x5cb4[781]];
    case 11:
      return [this[_0x5cb4[540]][_0x5cb4[782]](), _0x5cb4[783]];
    case 12:
      return [this[_0x5cb4[540]][_0x5cb4[514]](), _0x5cb4[784]];
    case 13:
      return [canCreateDiscussions[_0x5cb4[420]], _0x5cb4[785]];
    case 14:
      return [canCreateDiscussions[_0x5cb4[400]], _0x5cb4[786]];
    case 15:
      return [canCreateDiscussions[_0x5cb4[133]], _0x5cb4[133]];
    case 16:
      return [canCreateDiscussions[_0x5cb4[448]], _0x5cb4[787]];
    case 17:
      return [canCreateDiscussions[_0x5cb4[427]], _0x5cb4[788]];
    case 18:
      return [canCreateDiscussions[_0x5cb4[233]], _0x5cb4[789]];
    case 19:
      return [canCreateDiscussions[_0x5cb4[429]], _0x5cb4[790]];
    case 20:
      return [canCreateDiscussions[_0x5cb4[434]], _0x5cb4[791]];
    case 21:
      return [canCreateDiscussions[_0x5cb4[437]], _0x5cb4[792]];
    case 22:
      return [canCreateDiscussions[_0x5cb4[439]], _0x5cb4[793]];
    case 23:
      return [canCreateDiscussions[_0x5cb4[450]], _0x5cb4[140]];
    default:
      return [0, _0x5cb4[28]];
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[794]] = function(saveNotifs) {
  this[_0x5cb4[611]]++;
  let deps = this[_0x5cb4[606]][_0x5cb4[630]];
  let autoReview = null;
  if (1 == this[_0x5cb4[597]][this[_0x5cb4[594]][_0x5cb4[44]]] && this[_0x5cb4[607]][_0x5cb4[630]]) {
    deps = deps[_0x5cb4[105]](this[_0x5cb4[607]][_0x5cb4[630]]);
  }
  this[_0x5cb4[540]][_0x5cb4[515]]();
  for (const depPkgUri of deps) {
    if (depPkgUri[_0x5cb4[629]]) {
      if (_0x5cb4[795] == depPkgUri[_0x5cb4[796]]) {
        autoReview = depPkgUri;
      } else {
        this[_0x5cb4[764]](depPkgUri);
      }
    }
  }
  if (this[_0x5cb4[797]]() || this[_0x5cb4[540]][_0x5cb4[798]](), null === autoReview) {
    saveNotifs();
  } else {
    this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[802]]({
      sec : autoReview[_0x5cb4[800]][_0x5cb4[799]],
      skip : autoReview[_0x5cb4[800]][_0x5cb4[801]]
    });
    if (autoReview[_0x5cb4[800]][_0x5cb4[801]]) {
      this[_0x5cb4[770]]();
      /**
       * @param {?} canCreateDiscussions
       * @return {undefined}
       */
      this[_0x5cb4[601]] = (canCreateDiscussions) => {
        this[_0x5cb4[766]]();
        this[_0x5cb4[770]]();
        saveNotifs();
      };
      document[_0x5cb4[627]](_0x5cb4[768], this[_0x5cb4[601]]);
    }
    let ngiScroll_timeout = 1E3 * parseFloat(autoReview[_0x5cb4[800]][_0x5cb4[799]]);
    /** @type {number} */
    this[_0x5cb4[600]] = setTimeout(() => {
      this[_0x5cb4[770]]();
      saveNotifs();
      /** @type {null} */
      this[_0x5cb4[600]] = null;
    }, ngiScroll_timeout);
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[765]] = function(srcInputStrArray) {
  if (Array[_0x5cb4[414]](srcInputStrArray)) {
    for (const srcInputStr of srcInputStrArray) {
      this[_0x5cb4[765]](srcInputStr);
    }
    return;
  }
  if (this[_0x5cb4[611]]++, !srcInputStrArray[_0x5cb4[629]]) {
    return;
  }
  let extensionsPages = srcInputStrArray[_0x5cb4[630]];
  for (const extensionPages of extensionsPages) {
    this[_0x5cb4[764]](extensionPages);
  }
  if (0 == this[_0x5cb4[613]] && !this[_0x5cb4[612]] && this[_0x5cb4[803]] > 0 && this[_0x5cb4[803]] === this[_0x5cb4[804]]) {
    this[_0x5cb4[805]]();
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[806]] = function() {
  if (this[_0x5cb4[594]][_0x5cb4[14]](_0x5cb4[807]) && this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[512]]) {
    let data = {
      t : 34,
      f : true,
      i : this[_0x5cb4[594]][_0x5cb4[44]]
    };
    this[_0x5cb4[540]][_0x5cb4[458]][_0x5cb4[808]](JSON[_0x5cb4[110]](data));
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[809]] = function() {
  if (this[_0x5cb4[594]][_0x5cb4[14]](_0x5cb4[810])) {
    if (null === this[_0x5cb4[594]][_0x5cb4[810]]) {
      this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[811]](1);
      let placeHolder = this[_0x5cb4[596]][_0x5cb4[542]](_0x5cb4[812])[0];
      if (placeHolder) {
        hideElem(placeHolder);
      }
    } else {
      this[_0x5cb4[806]]();
      this[_0x5cb4[540]][_0x5cb4[736]](9, false, {
        mapId : this[_0x5cb4[594]][_0x5cb4[810]]
      });
    }
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[805]] = function() {
  if (this[_0x5cb4[613]] || this[_0x5cb4[612]]) {
    return;
  }
  /** @type {boolean} */
  this[_0x5cb4[613]] = true;
  let _0x3de4x2 = null === this[_0x5cb4[594]][_0x5cb4[810]];
  if (this[_0x5cb4[765]](this[_0x5cb4[608]]), this[_0x5cb4[540]][_0x5cb4[454]](), this[_0x5cb4[813]](true), _0x3de4x2 || (this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[811]](), createjs[_0x5cb4[628]][_0x5cb4[673]](), this[_0x5cb4[540]][_0x5cb4[379]](_0x5cb4[276])), this[_0x5cb4[594]][_0x5cb4[14]](_0x5cb4[810])) {
    if (null === this[_0x5cb4[594]][_0x5cb4[810]]) {
      /** @type {boolean} */
      _0x3de4x2 = true;
      this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[811]](1);
      createjs[_0x5cb4[628]][_0x5cb4[673]]();
      createjs[_0x5cb4[628]][_0x5cb4[487]](_0x5cb4[814]);
      this[_0x5cb4[540]][_0x5cb4[458]][_0x5cb4[464]](_0x5cb4[815], _0x5cb4[816] + this[_0x5cb4[609]]);
    } else {
      let mapid = this[_0x5cb4[594]][_0x5cb4[810]];
      this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[817]]({
        handler : () => {
          this[_0x5cb4[540]][_0x5cb4[736]](9, false, {
            mapId : mapid
          });
        }
      });
      this[_0x5cb4[767]]();
      /**
       * @param {?} canCreateDiscussions
       * @return {undefined}
       */
      this[_0x5cb4[602]] = (canCreateDiscussions) => {
        if (!this[_0x5cb4[540]][_0x5cb4[487]] && 0 === this[_0x5cb4[540]][_0x5cb4[818]] && (canCreateDiscussions[_0x5cb4[819]] === this[_0x5cb4[540]][_0x5cb4[691]][_0x5cb4[585]] || 13 === canCreateDiscussions[_0x5cb4[819]] || 32 === canCreateDiscussions[_0x5cb4[819]])) {
          canCreateDiscussions[_0x5cb4[820]]();
          let _0x3de4x4 = this[_0x5cb4[540]][_0x5cb4[361]];
          if (_0x5cb4[37] != _0x3de4x4[_0x5cb4[822]][_0x3de4x4[_0x5cb4[821]]][_0x5cb4[35]][_0x5cb4[34]]) {
            this[_0x5cb4[540]][_0x5cb4[736]](9, false, {
              mapId : mapid
            });
          }
          this[_0x5cb4[767]]();
        }
      };
      document[_0x5cb4[627]](_0x5cb4[768], this[_0x5cb4[602]], true);
    }
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[823]] = function(canCreateDiscussions) {
  let _0x3de4x3 = canCreateDiscussions[_0x5cb4[825]](_0x5cb4[824], 2);
  if (1 == _0x3de4x3[_0x5cb4[19]]) {
    return this[_0x5cb4[772]](_0x3de4x3[0]);
  }
  let obj_name = _0x3de4x3[0];
  if (!this[_0x5cb4[604]][_0x5cb4[14]](_0x5cb4[368] + obj_name)) {
    return console[_0x5cb4[828]](_0x5cb4[826] + obj_name + _0x5cb4[827]), [null, null];
  }
  let analysis = this[_0x5cb4[604]][_0x5cb4[368] + obj_name][_0x5cb4[150]];
  let globalWordIndex = Object[_0x5cb4[829]]({}, this[_0x5cb4[540]][_0x5cb4[150]]);
  for (const id in globalWordIndex) {
    globalWordIndex[id] -= analysis[id];
  }
  let [require, i] = this[_0x5cb4[772]](_0x3de4x3[1], globalWordIndex);
  return i = obj_name + _0x5cb4[824] + i, [require, i];
}, ModeManager[_0x5cb4[135]][_0x5cb4[764]] = function(options) {
  if (options[_0x5cb4[629]]) {
    if (_0x5cb4[830] == options[_0x5cb4[796]]) {
      let left_c;
      let finalAni;
      let num = parseInt(options[_0x5cb4[800]][_0x5cb4[831]]);
      if (!options[_0x5cb4[800]][_0x5cb4[14]](_0x5cb4[482])) {
        /** @type {boolean} */
        options[_0x5cb4[800]][_0x5cb4[482]] = false;
      }
      let nundefined = parseInt(options[_0x5cb4[800]][_0x5cb4[832]]);
      let PL$120 = options[_0x5cb4[800]][_0x5cb4[833]];
      let result_c = false;
      if (0 == options[_0x5cb4[800]][_0x5cb4[831]]) {
        let PL$32 = PL$120[_0x5cb4[834]](/^((?:[\w]*\.)?[\w]+)([><=]+.*)$/);
        if (3 != PL$32[_0x5cb4[19]]) {
          return;
        }
        let num = PL$32[1];
        PL$120 = PL$32[2];
        [left_c, finalAni] = this[_0x5cb4[823]](num);
      } else {
        [left_c, finalAni] = this[_0x5cb4[772]](num);
      }
      if (null === left_c) {
        return void console[_0x5cb4[828]](_0x5cb4[835] + options[_0x5cb4[800]][_0x5cb4[833]]);
      }
      let _0x3de4x23;
      let right_c;
      let PL$24 = 0;
      let user = _0x5cb4[5];
      for (; PL$24 < PL$120[_0x5cb4[19]];) {
        if (_0x5cb4[836] != PL$120[PL$24] && _0x5cb4[837] != PL$120[PL$24] && _0x5cb4[838] != PL$120[PL$24]) {
          _0x3de4x23 = PL$120[_0x5cb4[840]](0, PL$24)[_0x5cb4[839]]();
          right_c = PL$120[_0x5cb4[840]](PL$24, PL$120[_0x5cb4[19]])[_0x5cb4[839]]();
          break;
        }
        ++PL$24;
      }
      if (right_c = right_c[_0x5cb4[692]](_0x5cb4[824]) || right_c[_0x5cb4[692]](_0x5cb4[841]) ? parseFloat(right_c) : parseInt(right_c), _0x5cb4[837] == _0x3de4x23 ? (result_c = left_c > right_c, user = _0x5cb4[837]) : _0x5cb4[836] == _0x3de4x23 ? (result_c = left_c < right_c, user = _0x5cb4[836]) : _0x5cb4[842] == _0x3de4x23 || _0x5cb4[843] == _0x3de4x23 ? (result_c = left_c <= right_c, user = _0x5cb4[842]) : _0x5cb4[844] == _0x3de4x23 || _0x5cb4[845] == _0x3de4x23 ? (result_c = left_c >= right_c, 
      user = _0x5cb4[844]) : (result_c = left_c == right_c, user = _0x5cb4[5]), 1 == nundefined) {
        this[_0x5cb4[804]]++;
        let tagParseOptions = document[_0x5cb4[42]](_0x5cb4[846]);
        let rooms = _0x5cb4[5] == user ? _0x5cb4[838] : user;
        if (tagParseOptions[_0x5cb4[645]][_0x5cb4[386]](result_c ? _0x5cb4[847] : _0x5cb4[848]), tagParseOptions[_0x5cb4[467]] = finalAni + _0x5cb4[849] + left_c + _0x5cb4[13] + rooms + right_c, this[_0x5cb4[595]][_0x5cb4[50]](tagParseOptions), this[_0x5cb4[595]][_0x5cb4[850]][_0x5cb4[19]] >= 4) {
          let artistTrack = this[_0x5cb4[595]][_0x5cb4[851]];
          artistTrack[_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[852]);
          setTimeout(() => {
            try {
              this[_0x5cb4[595]][_0x5cb4[853]](artistTrack);
            } catch (_0x3de4x2) {
            }
          }, 1E3);
        }
        if (options[_0x5cb4[800]][_0x5cb4[482]] === result_c) {
          /** @type {boolean} */
          this[_0x5cb4[612]] = true;
          this[_0x5cb4[540]].GameOver();
          const artistTrack = _0x5cb4[854] + user + right_c + _0x5cb4[13] + finalAni + _0x5cb4[855] + left_c + _0x5cb4[824];
          this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[360]](_0x5cb4[856], artistTrack, {
            fade_after : 6E3
          });
        }
      } else {
        if (2 == nundefined && options[_0x5cb4[800]][_0x5cb4[857]]) {
          if (options[_0x5cb4[800]][_0x5cb4[482]] === result_c) {
            let artistTrack = options[_0x5cb4[800]][_0x5cb4[857]];
            this[_0x5cb4[858]](artistTrack);
          }
        } else {
          if (3 == nundefined && options[_0x5cb4[800]][_0x5cb4[482]] === result_c) {
            this[_0x5cb4[805]]();
          }
        }
      }
    } else {
      if (_0x5cb4[859] == options[_0x5cb4[796]]) {
        let _0x3de4x3 = parseInt(options[_0x5cb4[800]][_0x5cb4[860]]);
        let _0x3de4x4 = options[_0x5cb4[800]][_0x5cb4[861]];
        let _0x3de4x5 = null;
        if (0 === _0x3de4x3) {
          _0x3de4x5 = this[_0x5cb4[862]](2, this[_0x5cb4[540]][_0x5cb4[476]] + _0x3de4x4);
          this[_0x5cb4[605]][_0x5cb4[864]]((fit1, fit2) => {
            return fit1[_0x5cb4[863]] > fit2[_0x5cb4[863]] ? 1 : -1;
          });
        } else {
          if (1 === _0x3de4x3) {
            _0x3de4x5 = this[_0x5cb4[862]](3, this[_0x5cb4[540]][_0x5cb4[493]] + _0x3de4x4);
          } else {
            if (2 === _0x3de4x3) {
              _0x3de4x5 = this[_0x5cb4[862]](4, this[_0x5cb4[540]][_0x5cb4[150]][_0x5cb4[427]] + _0x3de4x4);
            }
          }
        }
        if (_0x3de4x5) {
          _0x3de4x5[_0x5cb4[106]](new ModeCommand({
            field_type : _0x5cb4[763],
            opts : {
              id : options[_0x5cb4[800]][_0x5cb4[44]]
            }
          }));
        }
      } else {
        if (_0x5cb4[148] == options[_0x5cb4[796]]) {
          /** @type {boolean} */
          this[_0x5cb4[614]] = !options[_0x5cb4[800]][_0x5cb4[14]](_0x5cb4[865]) || !options[_0x5cb4[800]][_0x5cb4[865]];
          let artistTrack = options[_0x5cb4[800]][_0x5cb4[14]](_0x5cb4[866]) && true === options[_0x5cb4[800]][_0x5cb4[866]];
          let _0x3de4x4 = options[_0x5cb4[800]][_0x5cb4[14]](_0x5cb4[867]) && true === options[_0x5cb4[800]][_0x5cb4[867]];
          this[_0x5cb4[868]] = options[_0x5cb4[800]][_0x5cb4[148]];
          /** @type {!Array} */
          this[_0x5cb4[540]][_0x5cb4[148]] = [];
          this[_0x5cb4[519]] = options[_0x5cb4[800]][_0x5cb4[14]](_0x5cb4[869]) && options[_0x5cb4[800]][_0x5cb4[869]];
          let _0x3de4x5 = this[_0x5cb4[520]](artistTrack);
          if (!this[_0x5cb4[614]]) {
            this[_0x5cb4[540]][_0x5cb4[219]](this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[218]]);
            for (; !this[_0x5cb4[614]] && this[_0x5cb4[540]][_0x5cb4[148]][_0x5cb4[19]] < this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[518]];) {
              this[_0x5cb4[540]][_0x5cb4[364]]();
            }
          }
          if (_0x3de4x4) {
            let artistTrack = new Block(0);
            /** @type {number} */
            artistTrack[_0x5cb4[65]] = 9;
            this[_0x5cb4[540]][_0x5cb4[148]][_0x5cb4[106]](artistTrack);
          }
          this[_0x5cb4[540]][_0x5cb4[365]]();
          if (_0x3de4x5) {
            this[_0x5cb4[540]][_0x5cb4[404]]();
          }
        } else {
          if (_0x5cb4[63] == options[_0x5cb4[796]]) {
            let maindata3 = options[_0x5cb4[800]][_0x5cb4[63]];
            let type = parseInt(options[_0x5cb4[800]][_0x5cb4[112]]);
            /**
             * @return {undefined}
             */
            this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[586]] = function() {
            };
            this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[423]] = {
              data : maindata3
            };
            this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[739]]();
            let PL$13 = this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[143]];
            if (isNaN(type) || 1 == type || 7 == type) {
              this[_0x5cb4[540]][_0x5cb4[143]] = copyMatrix(this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[143]]);
            } else {
              /** @type {number} */
              var PL$17 = 0;
              for (; PL$17 < PL$13[_0x5cb4[19]]; PL$17++) {
                /** @type {number} */
                var split = 0;
                for (; split < PL$13[PL$17][_0x5cb4[19]]; split++) {
                  let dataLength = this[_0x5cb4[540]][_0x5cb4[143]][PL$17][split];
                  let avgRangeEnd = dataLength;
                  if (2 == type || 6 == type) {
                    avgRangeEnd = this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[143]][PL$17][split] || dataLength;
                  } else {
                    if (3 == type) {
                      avgRangeEnd = this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[143]][PL$17][split] ? 0 : dataLength;
                    } else {
                      if (4 == type) {
                        avgRangeEnd = dataLength && this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[143]][PL$17][split] ? dataLength : 0;
                      } else {
                        if (5 == type) {
                          avgRangeEnd = dataLength && this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[143]][PL$17][split] ? this[_0x5cb4[540]][_0x5cb4[424]][_0x5cb4[143]][PL$17][split] : 0;
                        }
                      }
                    }
                  }
                  this[_0x5cb4[540]][_0x5cb4[143]][PL$17][split] = avgRangeEnd;
                  if (!(4 != type && 5 != type)) {
                    /** @type {!Array} */
                    this[_0x5cb4[540]][_0x5cb4[144]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                  }
                }
              }
            }
            if (7 != type) {
              this[_0x5cb4[540]][_0x5cb4[367]]();
              this[_0x5cb4[540]][_0x5cb4[380]](true);
            } else {
              if (this[_0x5cb4[540]][_0x5cb4[366]](this[_0x5cb4[540]][_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]], this[_0x5cb4[540]][_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]], null)) {
                this[_0x5cb4[540]].GameOver();
              } else {
                this[_0x5cb4[540]][_0x5cb4[380]](true);
              }
            }
            this[_0x5cb4[540]][_0x5cb4[381]]();
          } else {
            if (_0x5cb4[870] == options[_0x5cb4[796]]) {
              this[_0x5cb4[540]][_0x5cb4[401]][_0x5cb4[871]]();
              this[_0x5cb4[540]][_0x5cb4[401]][_0x5cb4[872]](parseInt(options[_0x5cb4[800]][_0x5cb4[870]]));
              this[_0x5cb4[540]][_0x5cb4[401]][_0x5cb4[873]]();
              this[_0x5cb4[540]][_0x5cb4[401]][_0x5cb4[729]]();
            } else {
              if (_0x5cb4[874] == options[_0x5cb4[796]]) {
                let value = parseInt(options[_0x5cb4[800]][_0x5cb4[66]]);
                let ch = options[_0x5cb4[800]][_0x5cb4[874]];
                ch = this[_0x5cb4[875]](ch);
                ch = stringEscape(ch);
                if (1 == value || isNaN(value)) {
                  this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[876]](ch, {
                    t : 0
                  });
                } else {
                  if (2 == value) {
                    if (this[_0x5cb4[540]][_0x5cb4[732]]) {
                      hideElem(this[_0x5cb4[540]][_0x5cb4[877]]);
                    } else {
                      showElem(this[_0x5cb4[540]][_0x5cb4[877]]);
                    }
                    this[_0x5cb4[540]][_0x5cb4[468]][_0x5cb4[467]] = ch;
                  } else {
                    if (3 == value) {
                      this[_0x5cb4[540]][_0x5cb4[878]](ch);
                    } else {
                      if (4 == value) {
                        this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[876]](ch, {
                          t : 1
                        });
                      }
                    }
                  }
                }
              } else {
                if (_0x5cb4[795] == options[_0x5cb4[796]]) {
                  if (!options[_0x5cb4[800]][_0x5cb4[14]](_0x5cb4[879])) {
                    /** @type {boolean} */
                    options[_0x5cb4[800]][_0x5cb4[879]] = false;
                  }
                  this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[802]]({
                    sec : options[_0x5cb4[800]][_0x5cb4[799]],
                    skip : options[_0x5cb4[800]][_0x5cb4[801]]
                  });
                  /** @type {boolean} */
                  this[_0x5cb4[540]][_0x5cb4[487]] = false;
                  this[_0x5cb4[540]][_0x5cb4[409]] = options[_0x5cb4[800]][_0x5cb4[879]];
                  console[_0x5cb4[828]](this[_0x5cb4[540]][_0x5cb4[409]]);
                  let _0x3de4x3 = this[_0x5cb4[540]][_0x5cb4[385]]();
                  let gotoNewOfflinePage = () => {
                    this[_0x5cb4[766]]();
                    this[_0x5cb4[770]]();
                    /** @type {boolean} */
                    this[_0x5cb4[540]][_0x5cb4[487]] = true;
                    /** @type {boolean} */
                    this[_0x5cb4[540]][_0x5cb4[409]] = false;
                    this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[880]](this[_0x5cb4[540]][_0x5cb4[361]].PAUSED);
                    /** @type {boolean} */
                    this[_0x5cb4[540]][_0x5cb4[377]] = false;
                    this[_0x5cb4[540]][_0x5cb4[395]] = this[_0x5cb4[540]][_0x5cb4[385]]();
                    if (!options[_0x5cb4[800]][_0x5cb4[879]]) {
                      this[_0x5cb4[540]][_0x5cb4[367]]();
                    }
                    this[_0x5cb4[540]][_0x5cb4[380]](true);
                    this[_0x5cb4[540]][_0x5cb4[881]]();
                  };
                  if (options[_0x5cb4[800]][_0x5cb4[801]]) {
                    this[_0x5cb4[770]]();
                    /**
                     * @param {?} canCreateDiscussions
                     * @return {undefined}
                     */
                    this[_0x5cb4[601]] = (canCreateDiscussions) => {
                      if (!(this[_0x5cb4[540]][_0x5cb4[385]]() - _0x3de4x3 < 1E3)) {
                        gotoNewOfflinePage();
                      }
                    };
                    document[_0x5cb4[627]](_0x5cb4[768], this[_0x5cb4[601]]);
                  }
                  let ngiScroll_timeout = 1E3 * parseFloat(options[_0x5cb4[800]][_0x5cb4[799]]);
                  /** @type {number} */
                  this[_0x5cb4[600]] = setTimeout(() => {
                    gotoNewOfflinePage();
                  }, ngiScroll_timeout);
                } else {
                  if (_0x5cb4[882] == options[_0x5cb4[796]]) {
                    if (this[_0x5cb4[540]][_0x5cb4[883]]) {
                      let magnifier = _0x5cb4[884] + this[_0x5cb4[594]][_0x5cb4[44]] + _0x5cb4[885] + options[_0x5cb4[44]];
                      var $magnifier = createjs[_0x5cb4[628]][_0x5cb4[487]](magnifier);
                      try {
                        let _0x3de4x2 = createjs[_0x5cb4[887]][_0x5cb4[886]];
                        if (_0x5cb4[888] == _0x3de4x2[_0x5cb4[741]]) {
                          this[_0x5cb4[540]][_0x5cb4[361]][_0x5cb4[889]]({
                            top : 311
                          });
                          $magnifier[_0x5cb4[673]]();
                          /**
                           * @param {?} canCreateDiscussions
                           * @return {undefined}
                           */
                          _0x3de4x2[_0x5cb4[890]] = (canCreateDiscussions) => {
                            $magnifier[_0x5cb4[487]]();
                          };
                        }
                      } catch (_0x3de4x2) {
                      }
                    }
                  } else {
                    if (_0x5cb4[465] == options[_0x5cb4[796]]) {
                      if (this[_0x5cb4[540]][_0x5cb4[732]]) {
                        return;
                      }
                      let editableLibraries = options[_0x5cb4[800]][_0x5cb4[891]][_0x5cb4[825]](_0x5cb4[841]);
                      if (options[_0x5cb4[800]][_0x5cb4[892]]) {
                        this[_0x5cb4[893]];
                        let editableLibraries = options[_0x5cb4[800]][_0x5cb4[894]][_0x5cb4[825]](_0x5cb4[841]);
                        for (let libraryID of editableLibraries) {
                          let artistTrack = parseInt(libraryID);
                          if (artistTrack >= 0 && artistTrack <= 9) {
                            this[_0x5cb4[540]][_0x5cb4[893]][_0x5cb4[106]](artistTrack);
                          }
                        }
                      } else {
                        if (options[_0x5cb4[800]][_0x5cb4[895]]) {
                          /** @type {number} */
                          var relative_threshold = 0;
                          for (; relative_threshold < editableLibraries[_0x5cb4[19]]; ++relative_threshold) {
                            let artistTrack = Math[_0x5cb4[2]](10 * Math[_0x5cb4[697]]());
                            if (artistTrack === this[_0x5cb4[616]]) {
                              /** @type {number} */
                              artistTrack = (artistTrack + 1 + Math[_0x5cb4[2]](8 * Math[_0x5cb4[697]]())) % 9;
                            }
                            this[_0x5cb4[540]][_0x5cb4[893]][_0x5cb4[106]](artistTrack);
                            this[_0x5cb4[616]] = artistTrack;
                          }
                        }
                      }
                      for (let libraryID of editableLibraries) {
                        let artistTrack = parseInt(libraryID);
                        if (artistTrack && artistTrack > 0 && artistTrack < 30) {
                          this[_0x5cb4[540]][_0x5cb4[896]](artistTrack);
                        }
                      }
                      if (3 === this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[505]]) {
                        this[_0x5cb4[540]][_0x5cb4[897]]();
                        this[_0x5cb4[540]][_0x5cb4[381]]();
                      }
                    } else {
                      if (_0x5cb4[898] == options[_0x5cb4[796]]) {
                        let $field = options[_0x5cb4[800]][_0x5cb4[237]];
                        let _slotNums = this[_0x5cb4[599]][$field];
                        if (_slotNums && !_slotNums[_0x5cb4[899]]) {
                          return void console[_0x5cb4[901]](_0x5cb4[900]);
                        }
                        if (_0x5cb4[4] == $field) {
                          this[_0x5cb4[540]][_0x5cb4[902]](0);
                        } else {
                          window[_0x5cb4[904]]($field, _slotNums[_0x5cb4[903]]);
                        }
                        /** @type {boolean} */
                        this[_0x5cb4[540]][_0x5cb4[182]] = false;
                        /** @type {boolean} */
                        this[_0x5cb4[540]][_0x5cb4[183]] = false;
                        /** @type {boolean} */
                        this[_0x5cb4[615]] = true;
                        this[_0x5cb4[540]][_0x5cb4[881]]();
                      } else {
                        if (_0x5cb4[905] == options[_0x5cb4[796]]) {
                          let data = options[_0x5cb4[800]][_0x5cb4[905]];
                          let artistTrack = JSON[_0x5cb4[111]](data);
                          let _0x3de4x5 = null;
                          if (_0x3de4x5 = options[_0x5cb4[800]][_0x5cb4[386]] ? this[_0x5cb4[540]][_0x5cb4[907]][_0x5cb4[906]](artistTrack, this[_0x5cb4[540]].R, false) : this[_0x5cb4[540]][_0x5cb4[907]][_0x5cb4[906]](artistTrack, this[_0x5cb4[540]].R, true), _0x3de4x5[_0x5cb4[14]](_0x5cb4[908]) && this[_0x5cb4[540]][_0x5cb4[909]](this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[908]]), _0x3de4x5[_0x5cb4[14]](_0x5cb4[910]) && this[_0x5cb4[540]][_0x5cb4[911]](this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[910]]), 
                          _0x3de4x5[_0x5cb4[14]](_0x5cb4[912]) && this[_0x5cb4[540]][_0x5cb4[913]](this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[912]]), _0x3de4x5[_0x5cb4[14]](_0x5cb4[518])) {
                            for (; !this[_0x5cb4[614]] && this[_0x5cb4[540]][_0x5cb4[148]][_0x5cb4[19]] < this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[518]];) {
                              this[_0x5cb4[540]][_0x5cb4[364]]();
                            }
                          }
                          if (_0x3de4x5[_0x5cb4[14]](_0x5cb4[350]) || _0x3de4x5[_0x5cb4[14]](_0x5cb4[218])) {
                            let artistTrack = 0 === this[_0x5cb4[540]][_0x5cb4[476]];
                            this[_0x5cb4[540]][_0x5cb4[215]][_0x5cb4[712]](this[_0x5cb4[540]][_0x5cb4[216]][_0x5cb4[218]], artistTrack, this[_0x5cb4[540]][_0x5cb4[385]]());
                          }
                          this[_0x5cb4[540]][_0x5cb4[881]]();
                        } else {
                          if (_0x5cb4[763] == options[_0x5cb4[796]]) {
                            let artistTrack = options[_0x5cb4[800]][_0x5cb4[44]];
                            this[_0x5cb4[858]](artistTrack);
                          } else {
                            if (_0x5cb4[914] == options[_0x5cb4[796]]) {
                              for (const subkey in options[_0x5cb4[800]]) {
                                if (_0x5cb4[44] == subkey[_0x5cb4[915]](0, 2)) {
                                  let lng = subkey[_0x5cb4[915]](2);
                                  let criterion_index = options[_0x5cb4[800]][subkey];
                                  let _0x3de4x9 = !!options[_0x5cb4[800]][_0x5cb4[14]](_0x5cb4[482] + lng) && options[_0x5cb4[800]][_0x5cb4[482] + lng];
                                  if (this[_0x5cb4[603]][_0x5cb4[14]](criterion_index)) {
                                    this[_0x5cb4[603]][criterion_index][_0x5cb4[629]] = _0x3de4x9;
                                  } else {
                                    if (this[_0x5cb4[604]][_0x5cb4[14]](_0x5cb4[368] + criterion_index)) {
                                      this[_0x5cb4[604]][_0x5cb4[368] + criterion_index][_0x5cb4[629]] = _0x3de4x9;
                                    }
                                  }
                                }
                              }
                            } else {
                              if (_0x5cb4[697] == options[_0x5cb4[796]]) {
                                let getKey = function(data) {
                                  let ticks_delta = Math[_0x5cb4[697]]();
                                  let _0x3de4x4 = data[_0x5cb4[916]]((timedelta) => {
                                    return (ticks_delta = ticks_delta - timedelta) < 0;
                                  });
                                  return -1 === _0x3de4x4 ? 0 : _0x3de4x4;
                                };
                                let obj = [];
                                let i = [];
                                for (const subkey in options[_0x5cb4[800]]) {
                                  if (_0x5cb4[512] == subkey[_0x5cb4[915]](0, 1)) {
                                    let args = options[_0x5cb4[800]][subkey][_0x5cb4[825]](_0x5cb4[841], 2);
                                    obj[_0x5cb4[106]](args[0]);
                                    if (2 === args[_0x5cb4[19]]) {
                                      i[_0x5cb4[106]](parseFloat(args[1]));
                                    }
                                  }
                                }
                                if (!i[_0x5cb4[19]]) {
                                  let id = 1 / obj[_0x5cb4[19]];
                                  for (let d = 0; d < obj[_0x5cb4[19]]; ++d) {
                                    i[_0x5cb4[106]](id);
                                  }
                                }
                                let GET_AUTH_URL_TIMEOUT = obj[getKey(i)];
                                this[_0x5cb4[858]](GET_AUTH_URL_TIMEOUT);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[858]] = function(statisticName) {
  if (this[_0x5cb4[604]][_0x5cb4[14]](_0x5cb4[368] + statisticName)) {
    let artistTrack = this[_0x5cb4[604]][_0x5cb4[368] + statisticName];
    artistTrack[_0x5cb4[150]] = Object[_0x5cb4[829]]({}, this[_0x5cb4[540]][_0x5cb4[150]]);
    this[_0x5cb4[765]](artistTrack);
  } else {
    if (this[_0x5cb4[603]][_0x5cb4[14]](statisticName)) {
      this[_0x5cb4[603]][statisticName][_0x5cb4[763]](this);
    }
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[875]] = function(tab) {
  const fieldDetails = [...tab[_0x5cb4[917]](/{([\w.]+)}/g)];
  for (let fieldDetail of fieldDetails) {
    let display = fieldDetail[0];
    let artistTrack = fieldDetail[1];
    let PL$10 = this[_0x5cb4[823]](artistTrack);
    if (null != PL$10) {
      tab = tab[_0x5cb4[7]](display, PL$10[0]);
    }
  }
  return tab;
}, ModeManager[_0x5cb4[135]][_0x5cb4[734]] = function(theLibrary) {
  alert(_0x5cb4[918] + theLibrary);
  this[_0x5cb4[540]][_0x5cb4[736]](2, false);
}, ModeManager[_0x5cb4[135]][_0x5cb4[813]] = function(sourceMultiple) {
  if (this[_0x5cb4[594]][_0x5cb4[741]] < 2 || !this[_0x5cb4[594]][_0x5cb4[14]](_0x5cb4[807])) {
    return;
  }
  let targetMultiple = this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[573]];
  if (!sourceMultiple && !targetMultiple) {
    return;
  }
  let fun_stack = null;
  let nextPhotoId = this[_0x5cb4[772]](this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[540]])[0];
  let settingHandler = this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[240]];
  var value = settingHandler[_0x5cb4[22]](this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[540]]);
  if (-1 != value) {
    settingHandler[_0x5cb4[363]](value, 1);
  }
  if (this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[14]](_0x5cb4[245])) {
    fun_stack = this[_0x5cb4[772]](this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[245]])[0];
    if (-1 != (value = settingHandler[_0x5cb4[22]](this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[245]]))) {
      settingHandler[_0x5cb4[363]](value, 1);
    }
  }
  let newSorting = {};
  for (const criterion_index of settingHandler) {
    newSorting[criterion_index] = this[_0x5cb4[772]](criterion_index)[0];
  }
  let data = {
    t : 33,
    p : nextPhotoId,
    s : fun_stack,
    m : newSorting,
    i : this[_0x5cb4[594]][_0x5cb4[44]],
    r : this[_0x5cb4[594]][_0x5cb4[14]](_0x5cb4[919]) ? this[_0x5cb4[594]][_0x5cb4[919]] : 0
  };
  /** @type {number} */
  this[_0x5cb4[594]][_0x5cb4[919]] = 0;
  this[_0x5cb4[540]][_0x5cb4[458]][_0x5cb4[808]](JSON[_0x5cb4[110]](data));
}, ModeManager[_0x5cb4[135]][_0x5cb4[920]] = function() {
  let artistTrack = document[_0x5cb4[42]](_0x5cb4[688]);
  artistTrack[_0x5cb4[627]](_0x5cb4[921], this[_0x5cb4[809]][_0x5cb4[625]](this));
  artistTrack[_0x5cb4[45]] = _0x5cb4[922];
  artistTrack[_0x5cb4[923]] = _0x5cb4[924];
  artistTrack[_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[925], _0x5cb4[926], _0x5cb4[927], _0x5cb4[812]);
  this[_0x5cb4[596]][_0x5cb4[50]](artistTrack);
}, ModeManager[_0x5cb4[135]][_0x5cb4[928]] = function() {
  if (this[_0x5cb4[604]][_0x5cb4[14]](_0x5cb4[929] + this[_0x5cb4[930]])) {
    if (!this[_0x5cb4[540]][_0x5cb4[487]]) {
      /** @type {!Array} */
      this[_0x5cb4[540]][_0x5cb4[144]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (1 == this[_0x5cb4[930]]) {
      this[_0x5cb4[806]]();
    }
    this[_0x5cb4[765]](this[_0x5cb4[604]][_0x5cb4[929] + this[_0x5cb4[930]]]);
  }
  this[_0x5cb4[932]](this[_0x5cb4[931]] - this[_0x5cb4[930]]);
  this[_0x5cb4[930]]++;
}, ModeManager[_0x5cb4[135]][_0x5cb4[932]] = function(canCreateDiscussions) {
  let placeHolder = this[_0x5cb4[596]][_0x5cb4[542]](_0x5cb4[933])[0];
  if (placeHolder) {
    if (canCreateDiscussions <= 0) {
      hideElem(placeHolder);
    }
  } else {
    placeHolder = document[_0x5cb4[42]](_0x5cb4[688]);
    placeHolder[_0x5cb4[627]](_0x5cb4[921], this[_0x5cb4[928]][_0x5cb4[625]](this));
    placeHolder[_0x5cb4[45]] = _0x5cb4[934];
    placeHolder[_0x5cb4[923]] = _0x5cb4[924];
    placeHolder[_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[925], _0x5cb4[926], _0x5cb4[927], _0x5cb4[933]);
    this[_0x5cb4[596]][_0x5cb4[50]](placeHolder);
  }
  placeHolder[_0x5cb4[45]] = _0x5cb4[935] + canCreateDiscussions + _0x5cb4[442];
}, ModeManager[_0x5cb4[135]][_0x5cb4[936]] = function() {
  if (this[_0x5cb4[593]] === this[_0x5cb4[594]][_0x5cb4[44]] && this[_0x5cb4[594]][_0x5cb4[741]] >= 1) {
    return this[_0x5cb4[937]](), void(this[_0x5cb4[594]][_0x5cb4[14]](_0x5cb4[919]) ? this[_0x5cb4[594]][_0x5cb4[919]]++ : this[_0x5cb4[594]][_0x5cb4[919]] = 1);
  }
  /** @type {number} */
  var d = parseInt(this[_0x5cb4[540]][_0x5cb4[458]][_0x5cb4[939]](_0x5cb4[938]));
  var s = _0x5cb4[5];
  if (!d && this[_0x5cb4[940]]) {
    d = this[_0x5cb4[940]];
  }
  if (d && d > 0) {
    s = _0x5cb4[941] + d;
    window[_0x5cb4[945]][_0x5cb4[944]]({}, _0x5cb4[942], _0x5cb4[943] + d + _0x5cb4[53] + this[_0x5cb4[593]]);
    this[_0x5cb4[940]] = d;
  } else {
    window[_0x5cb4[945]][_0x5cb4[944]]({}, _0x5cb4[942], _0x5cb4[946] + this[_0x5cb4[593]]);
  }
  /** @type {!XMLHttpRequest} */
  var xhr = new XMLHttpRequest;
  var url = _0x5cb4[947] + this[_0x5cb4[593]] + s;
  /** @type {number} */
  xhr[_0x5cb4[670]] = 8E3;
  xhr[_0x5cb4[744]](_0x5cb4[743], url, true);
  xhr[_0x5cb4[747]](_0x5cb4[745], _0x5cb4[746]);
  xhr[_0x5cb4[747]](_0x5cb4[748], _0x5cb4[749]);
  try {
    xhr[_0x5cb4[750]]();
  } catch (_0x3de4x2) {
    this[_0x5cb4[734]](_0x3de4x2[_0x5cb4[751]]);
  }
  var _0x3de4x9 = this;
  /**
   * @return {undefined}
   */
  xhr[_0x5cb4[752]] = function() {
    _0x3de4x9[_0x5cb4[734]](_0x5cb4[753]);
  };
  /** @type {function(): undefined} */
  xhr[_0x5cb4[754]] = xhr[_0x5cb4[755]] = function() {
    _0x3de4x9[_0x5cb4[734]](_0x5cb4[756]);
  };
  /**
   * @return {undefined}
   */
  xhr[_0x5cb4[60]] = function() {
    if (200 === xhr[_0x5cb4[757]]) {
      _0x3de4x9[_0x5cb4[594]] = JSON[_0x5cb4[111]](xhr[_0x5cb4[758]]);
      _0x3de4x9[_0x5cb4[937]]();
    } else {
      _0x3de4x9[_0x5cb4[734]](xhr[_0x5cb4[757]] + _0x5cb4[759] + xhr[_0x5cb4[760]]);
    }
  };
}, ModeManager[_0x5cb4[135]][_0x5cb4[948]] = function() {
  if (this[_0x5cb4[615]]) {
    if (1 === this[_0x5cb4[949]][_0x5cb4[44]]) {
      this[_0x5cb4[540]][_0x5cb4[151]][1] = JSON[_0x5cb4[111]](this[_0x5cb4[949]][_0x5cb4[950]]);
    }
    this[_0x5cb4[540]][_0x5cb4[902]](this[_0x5cb4[949]][_0x5cb4[44]]);
  } else {
    if (void 0 === this[_0x5cb4[949]]) {
      this[_0x5cb4[949]] = {
        id : this[_0x5cb4[540]][_0x5cb4[951]]
      };
      if (1 == this[_0x5cb4[540]][_0x5cb4[951]]) {
        this[_0x5cb4[949]][_0x5cb4[950]] = JSON[_0x5cb4[110]](this[_0x5cb4[540]][_0x5cb4[151]][1]);
      }
    }
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[937]] = function() {
  if (this[_0x5cb4[597]][this[_0x5cb4[594]][_0x5cb4[44]]] ? this[_0x5cb4[597]][this[_0x5cb4[594]][_0x5cb4[44]]]++ : this[_0x5cb4[597]][this[_0x5cb4[594]][_0x5cb4[44]]] = 1, this[_0x5cb4[540]][_0x5cb4[458]][_0x5cb4[952]] && this[_0x5cb4[594]][_0x5cb4[953]] >= 1 && 0 === this[_0x5cb4[594]][_0x5cb4[807]][_0x5cb4[954]]) {
    let data = {
      t : 34,
      i : this[_0x5cb4[594]][_0x5cb4[44]]
    };
    this[_0x5cb4[540]][_0x5cb4[458]][_0x5cb4[808]](JSON[_0x5cb4[110]](data));
  }
  this[_0x5cb4[603]] = {};
  this[_0x5cb4[604]] = {};
  /** @type {!Array} */
  this[_0x5cb4[605]] = [];
  /** @type {number} */
  this[_0x5cb4[955]] = 0;
  /** @type {number} */
  this[_0x5cb4[610]] = 0;
  /** @type {number} */
  this[_0x5cb4[611]] = 0;
  /** @type {number} */
  this[_0x5cb4[804]] = 0;
  /** @type {number} */
  this[_0x5cb4[803]] = 0;
  /** @type {boolean} */
  this[_0x5cb4[612]] = false;
  /** @type {boolean} */
  this[_0x5cb4[613]] = false;
  /** @type {boolean} */
  this[_0x5cb4[614]] = false;
  this[_0x5cb4[609]]++;
  let callbacks = null;
  /** @type {!Array} */
  var PL$144 = [];
  this[_0x5cb4[948]]();
  for (let obj of this[_0x5cb4[594]][_0x5cb4[667]][_0x5cb4[956]]) {
    if (obj[_0x5cb4[14]](_0x5cb4[44]) || (obj[_0x5cb4[44]] = obj[_0x5cb4[957]]), obj[_0x5cb4[14]](_0x5cb4[482]) || (obj[_0x5cb4[482]] = true), _0x5cb4[958] != obj[_0x5cb4[796]]) {
      if (_0x5cb4[830] == obj[_0x5cb4[796]] && 1 == obj[_0x5cb4[800]][_0x5cb4[832]] && (this[_0x5cb4[803]] += 1), _0x5cb4[882] == obj[_0x5cb4[796]]) {
        let id = _0x5cb4[884] + this[_0x5cb4[594]][_0x5cb4[44]] + _0x5cb4[885] + obj[_0x5cb4[44]];
        if (!this[_0x5cb4[598]][id]) {
          this[_0x5cb4[598]][id] = {
            l : false
          };
          PL$144[_0x5cb4[106]]({
            id : id,
            src : obj[_0x5cb4[800]][_0x5cb4[237]]
          });
        }
      }
      if (_0x5cb4[898] == obj[_0x5cb4[796]] && obj[_0x5cb4[800]][_0x5cb4[237]][_0x5cb4[19]] > 5 && !this[_0x5cb4[599]][obj[_0x5cb4[800]][_0x5cb4[237]]]) {
        let gen_counter = new Image;
        this[_0x5cb4[599]][obj[_0x5cb4[800]][_0x5cb4[237]]] = {
          i : gen_counter,
          loaded : false
        };
        /**
         * @return {undefined}
         */
        gen_counter[_0x5cb4[60]] = () => {
          /** @type {boolean} */
          this[_0x5cb4[599]][obj[_0x5cb4[800]][_0x5cb4[237]]][_0x5cb4[899]] = true;
          this[_0x5cb4[599]][obj[_0x5cb4[800]][_0x5cb4[237]]][_0x5cb4[903]] = gen_counter[_0x5cb4[959]];
          console[_0x5cb4[828]](_0x5cb4[960] + obj[_0x5cb4[800]][_0x5cb4[237]]);
          this[_0x5cb4[961]]();
        };
        /**
         * @param {?} body
         * @return {undefined}
         */
        gen_counter[_0x5cb4[754]] = (body) => {
          console[_0x5cb4[962]](body);
          alert(_0x5cb4[963]);
        };
        gen_counter[_0x5cb4[59]] = obj[_0x5cb4[800]][_0x5cb4[237]];
      }
      if (null !== callbacks) {
        let result = new ModeCommand(obj);
        result[_0x5cb4[629]] = obj[_0x5cb4[482]];
        /** @type {!Array} */
        this[_0x5cb4[603]][_0x5cb4[964] + obj[_0x5cb4[44]]] = result;
        callbacks[_0x5cb4[106]](result);
      }
    } else {
      callbacks = this[_0x5cb4[862]](obj[_0x5cb4[800]][_0x5cb4[861]], obj[_0x5cb4[800]][_0x5cb4[965]]);
      callbacks[_0x5cb4[629]] = obj[_0x5cb4[482]];
      this[_0x5cb4[603]][_0x5cb4[964] + obj[_0x5cb4[44]]] = callbacks;
    }
  }
  if (this[_0x5cb4[594]][_0x5cb4[14]](_0x5cb4[810]) && (this[_0x5cb4[920]](), null === this[_0x5cb4[594]][_0x5cb4[810]])) {
    let id = _0x5cb4[814];
    if (!this[_0x5cb4[598]][id]) {
      this[_0x5cb4[598]][id] = {
        l : false
      };
      PL$144[_0x5cb4[106]]({
        id : id,
        src : _0x5cb4[966]
      });
    }
  }
  /** @type {number} */
  this[_0x5cb4[931]] = 0;
  /** @type {number} */
  this[_0x5cb4[930]] = 1;
  for (; this[_0x5cb4[604]][_0x5cb4[14]](_0x5cb4[929] + (this[_0x5cb4[931]] + 1));) {
    this[_0x5cb4[931]]++;
  }
  if (this[_0x5cb4[931]] > 0) {
    this[_0x5cb4[932]](this[_0x5cb4[931]]);
  }
  this[_0x5cb4[605]][_0x5cb4[864]]((fit1, fit2) => {
    return fit1[_0x5cb4[863]] > fit2[_0x5cb4[863]] ? 1 : -1;
  });
  this[_0x5cb4[595]][_0x5cb4[45]] = _0x5cb4[5];
  this[_0x5cb4[595]][_0x5cb4[35]][_0x5cb4[34]] = _0x5cb4[967];
  if (PL$144[_0x5cb4[19]]) {
    createjs[_0x5cb4[628]][_0x5cb4[968]](PL$144);
  } else {
    this[_0x5cb4[955]]++;
  }
  this[_0x5cb4[961]]();
  this[_0x5cb4[969]]();
}, ModeManager[_0x5cb4[135]][_0x5cb4[961]] = function() {
  let all_updated = true;
  for (const criterion_index in this[_0x5cb4[599]]) {
    if (this[_0x5cb4[599]][_0x5cb4[14]](criterion_index)) {
      const update_list = this[_0x5cb4[599]][criterion_index];
      all_updated = all_updated && update_list[_0x5cb4[899]];
    }
  }
  if (all_updated) {
    this[_0x5cb4[955]]++;
    this[_0x5cb4[969]]();
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[626]] = function(canCreateDiscussions) {
  let indexLookupKey = canCreateDiscussions[_0x5cb4[44]];
  if (indexLookupKey && indexLookupKey[_0x5cb4[970]](_0x5cb4[884])) {
    /** @type {boolean} */
    this[_0x5cb4[598]][indexLookupKey][_0x5cb4[807]] = true;
    let _0x3de4x2 = true;
    var signedTransactionsCounter;
    for (signedTransactionsCounter in this[_0x5cb4[598]]) {
      _0x3de4x2 = _0x3de4x2 && this[_0x5cb4[598]][signedTransactionsCounter][_0x5cb4[807]];
    }
    if (_0x3de4x2) {
      this[_0x5cb4[955]]++;
      this[_0x5cb4[969]]();
    }
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[969]] = function() {
  if (2 === this[_0x5cb4[955]]) {
    this[_0x5cb4[955]]++;
    this[_0x5cb4[592]]();
  }
}, ModeManager[_0x5cb4[135]][_0x5cb4[971]] = function(canCreateDiscussions) {
  this[_0x5cb4[540]][_0x5cb4[362]] = canCreateDiscussions;
  this[_0x5cb4[540]][_0x5cb4[367]]();
  this[_0x5cb4[540]][_0x5cb4[380]](true);
  this[_0x5cb4[540]][_0x5cb4[381]]();
}, ModeManager[_0x5cb4[135]][_0x5cb4[520]] = function(inlineElement) {
  let _0x3de4x3 = false;
  if (null !== this[_0x5cb4[868]][_0x5cb4[834]](/^[SZLJOIT]*$/)) {
    /** @type {number} */
    var js = 0;
    for (; js < this[_0x5cb4[868]][_0x5cb4[19]]; ++js) {
      let artistTrack = new Block(this[_0x5cb4[540]][_0x5cb4[147]][this[_0x5cb4[868]][js]]);
      if (0 === js && inlineElement) {
        this[_0x5cb4[971]](artistTrack);
      } else {
        this[_0x5cb4[540]][_0x5cb4[148]][_0x5cb4[106]](artistTrack);
      }
    }
  } else {
    let selTimeVal = 0;
    let modules = this[_0x5cb4[868]][_0x5cb4[825]](_0x5cb4[841]);
    let tmpTimeVal = -1;
    for (let module of modules) {
      tmpTimeVal++;
      let remain = module[_0x5cb4[825]](_0x5cb4[838], 2);
      let e = false;
      if (2 == remain[_0x5cb4[19]]) {
        if (_0x5cb4[903] == remain[0]) {
          /** @type {boolean} */
          e = true;
          /** @type {number} */
          selTimeVal = 1;
        }
        module = remain[1];
      }
      let mmCoreDownloaded = module[_0x5cb4[834]](/^\[([0-9]+):([0-9]+)\]$/);
      let i = null;
      let sig = null;
      if (null === mmCoreDownloaded && this[_0x5cb4[623]][_0x5cb4[14]](module)) {
        let _ref1 = this[_0x5cb4[623]][module];
        i = _ref1[0];
        sig = _ref1[1];
      } else {
        if (mmCoreDownloaded && 3 === mmCoreDownloaded[_0x5cb4[19]]) {
          /** @type {number} */
          i = parseInt(mmCoreDownloaded[1]);
          /** @type {number} */
          sig = parseInt(mmCoreDownloaded[2]);
        }
      }
      if (null != i) {
        let uniqueLinks = new Block(sig);
        if (uniqueLinks[_0x5cb4[65]] = i, e) {
          this[_0x5cb4[540]][_0x5cb4[393]] = uniqueLinks;
          if (9 === uniqueLinks[_0x5cb4[65]] && 0 === uniqueLinks[_0x5cb4[44]]) {
            /** @type {null} */
            this[_0x5cb4[540]][_0x5cb4[393]] = null;
          }
          /** @type {boolean} */
          _0x3de4x3 = true;
        } else {
          if (tmpTimeVal === selTimeVal && inlineElement) {
            this[_0x5cb4[971]](uniqueLinks);
            continue;
          }
          this[_0x5cb4[540]][_0x5cb4[148]][_0x5cb4[106]](uniqueLinks);
        }
      }
    }
  }
  return _0x3de4x3;
}, ModeManager[_0x5cb4[135]][_0x5cb4[972]] = function(rangePart) {
  let artistTrack = {
    t : rangePart = parseFloat(rangePart),
    c : new ModeTrigger
  };
  return this[_0x5cb4[605]][_0x5cb4[106]](artistTrack), artistTrack[_0x5cb4[240]];
}, ModeManager[_0x5cb4[135]][_0x5cb4[862]] = function(i, timestamp) {
  if (9 == (i = parseInt(i))) {
    return new ModeTrigger;
  }
  if (1 !== i && 5 !== i && this[_0x5cb4[610]]++, 0 == i || 5 == i) {
    return 0 == i ? (this[_0x5cb4[606]] = new ModeTrigger, this[_0x5cb4[606]]) : (this[_0x5cb4[607]] = new ModeTrigger, this[_0x5cb4[607]]);
  }
  if (2 == i) {
    return this[_0x5cb4[972]](timestamp);
  }
  if (10 == i) {
    return this[_0x5cb4[972]](0);
  }
  if (1 == i) {
    return this[_0x5cb4[608]] = new ModeTrigger, this[_0x5cb4[608]];
  }
  if (3 == i || 4 == i) {
    /** @type {number} */
    timestamp = parseInt(timestamp);
    let entry = null;
    if (this[_0x5cb4[604]][i]) {
      entry = this[_0x5cb4[604]][i];
    } else {
      entry = {};
      this[_0x5cb4[604]][i] = entry;
    }
    if (!entry[timestamp]) {
      /** @type {!Array} */
      entry[timestamp] = [];
    }
    let artistTrack = new ModeTrigger;
    return entry[timestamp][_0x5cb4[106]](artistTrack), artistTrack;
  }
  if (6 == i) {
    let artistTrack = new ModeTrigger;
    return this[_0x5cb4[604]][this[_0x5cb4[619]] + 100] ? this[_0x5cb4[604]][this[_0x5cb4[619]] + 100][_0x5cb4[106]](artistTrack) : this[_0x5cb4[604]][this[_0x5cb4[619]] + 100] = [artistTrack], artistTrack;
  }
  if (8 == i) {
    let artistTrack = new ModeTrigger;
    return this[_0x5cb4[604]][this[_0x5cb4[621]] + 100] ? this[_0x5cb4[604]][this[_0x5cb4[621]] + 100][_0x5cb4[106]](artistTrack) : this[_0x5cb4[604]][this[_0x5cb4[621]] + 100] = [artistTrack], artistTrack;
  }
  return 7 == i ? (this[_0x5cb4[604]][_0x5cb4[368] + timestamp] = new ModeTrigger, this[_0x5cb4[604]][_0x5cb4[368] + timestamp]) : void 0;
}, ModeManager[_0x5cb4[135]][_0x5cb4[761]] = function(canCreateDiscussions) {
  /** @type {!Array} */
  var aStatedRank = canCreateDiscussions;
  if (!canCreateDiscussions) {
    aStatedRank = this[_0x5cb4[594]][_0x5cb4[44]] ? this[_0x5cb4[594]][_0x5cb4[44]] : parseInt(getParameterByName(_0x5cb4[973]));
  }
  if (!isNaN(aStatedRank) && aStatedRank) {
    this[_0x5cb4[593]] = aStatedRank;
  } else {
    alert(_0x5cb4[974]);
  }
  this[_0x5cb4[936]]();
}, ModeManager[_0x5cb4[135]][_0x5cb4[797]] = function() {
  /** @type {number} */
  var IS_HANDLED = 0;
  for (; IS_HANDLED < this[_0x5cb4[540]][_0x5cb4[143]][_0x5cb4[19]]; IS_HANDLED++) {
    /** @type {number} */
    var id = 0;
    for (; id < this[_0x5cb4[540]][_0x5cb4[143]][IS_HANDLED][_0x5cb4[19]]; id++) {
      if (this[_0x5cb4[540]][_0x5cb4[143]][IS_HANDLED][id] > 0) {
        return false;
      }
    }
  }
  return true;
}, ReplayController[_0x5cb4[135]][_0x5cb4[975]] = function() {
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[977])[_0x5cb4[976]] = false;
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[795])[_0x5cb4[976]] = !document[_0x5cb4[637]](_0x5cb4[795])[_0x5cb4[976]];
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[978])[_0x5cb4[976]] = !document[_0x5cb4[637]](_0x5cb4[978])[_0x5cb4[976]];
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[810])[_0x5cb4[976]] = !document[_0x5cb4[637]](_0x5cb4[810])[_0x5cb4[976]];
}, ReplayController[_0x5cb4[135]][_0x5cb4[979]] = function(ballNumber, mmCoreSplitViewBlock) {
  if (void 0 === this[_0x5cb4[633]][ballNumber]) {
    /** @type {!Array} */
    this[_0x5cb4[633]][ballNumber] = [];
  }
  this[_0x5cb4[633]][ballNumber][_0x5cb4[106]](mmCoreSplitViewBlock);
}, ReplayController[_0x5cb4[135]][_0x5cb4[980]] = function(yKey) {
  if (void 0 !== this[_0x5cb4[633]][yKey]) {
    var colorByKey;
    for (colorByKey in this[_0x5cb4[633]][yKey]) {
      this[_0x5cb4[633]][yKey][colorByKey]();
    }
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[981]] = function() {
  var _0x3de4x2 = this[_0x5cb4[385]]();
  this[_0x5cb4[982]](Math[_0x5cb4[241]](1E3, _0x3de4x2 - this[_0x5cb4[867]]));
  this[_0x5cb4[867]] = _0x3de4x2;
  window[_0x5cb4[984]](this[_0x5cb4[981]][_0x5cb4[625]](this), this[_0x5cb4[983]]);
}, ReplayController[_0x5cb4[135]][_0x5cb4[763]] = function() {
  this[_0x5cb4[867]] = this[_0x5cb4[385]]();
  this[_0x5cb4[981]]();
}, ReplayController[_0x5cb4[135]][_0x5cb4[982]] = function(canCreateDiscussions) {
  if (this[_0x5cb4[487]]) {
    /** @type {number} */
    canCreateDiscussions = canCreateDiscussions * this[_0x5cb4[631]];
    this[_0x5cb4[476]] = this[_0x5cb4[476]] + canCreateDiscussions;
    /** @type {number} */
    var _0x3de4x3 = 0;
    /** @type {number} */
    var indexLookupKey = 0;
    for (; indexLookupKey < this[_0x5cb4[579]][_0x5cb4[19]]; indexLookupKey++) {
      if (this[_0x5cb4[579]][indexLookupKey][_0x5cb4[985]](this[_0x5cb4[476]]), this[_0x5cb4[579]][indexLookupKey][_0x5cb4[650]] && _0x3de4x3++, 5 === this[_0x5cb4[579]][indexLookupKey][_0x5cb4[357]]) {
        /** @type {number} */
        var _0x3de4x5 = 120 - this[_0x5cb4[476]] / 1E3;
        for (; this[_0x5cb4[579]][indexLookupKey][_0x5cb4[663]] - _0x3de4x5 >= 1;) {
          this[_0x5cb4[579]][indexLookupKey][_0x5cb4[663]]--;
          this[_0x5cb4[579]][indexLookupKey][_0x5cb4[406]][_0x5cb4[986]]();
        }
        if (this[_0x5cb4[579]][indexLookupKey][_0x5cb4[663]] <= 0) {
          this[_0x5cb4[632]](false);
          this[_0x5cb4[987]]();
        }
      }
    }
    if (_0x3de4x3 === this[_0x5cb4[579]][_0x5cb4[19]]) {
      this[_0x5cb4[632]](false);
      this[_0x5cb4[987]]();
    }
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[988]] = function() {
  /** @type {number} */
  this[_0x5cb4[476]] = 0;
  /** @type {number} */
  var _0x3de4x2 = 0;
  /** @type {number} */
  var support = 0;
  for (; support < this[_0x5cb4[579]][_0x5cb4[19]]; support++) {
    var fakeHash = document[_0x5cb4[637]](_0x5cb4[989] + support)[_0x5cb4[43]];
    try {
      var message = LZString[_0x5cb4[990]](fakeHash);
      if (null === message) {
        throw _0x5cb4[991];
      }
      if (this[_0x5cb4[430]]) {
        console[_0x5cb4[828]](message);
      }
      this[_0x5cb4[579]][support][_0x5cb4[512]] = JSON[_0x5cb4[111]](message);
      if (_0x5cb4[773] == typeof this[_0x5cb4[579]][support][_0x5cb4[512]]) {
        this[_0x5cb4[579]][support][_0x5cb4[512]] = JSON[_0x5cb4[111]](LZString[_0x5cb4[990]](this[_0x5cb4[579]][support][_0x5cb4[512]]));
      }
    } catch (_0x3de4x2) {
      return alert(_0x5cb4[992]), false;
    }
    this[_0x5cb4[579]][support][_0x5cb4[993]]();
    this[_0x5cb4[579]][support][_0x5cb4[994]]();
  }
  /** @type {number} */
  support = 0;
  for (; support < this[_0x5cb4[579]][_0x5cb4[19]]; support++) {
    this[_0x5cb4[579]][support][_0x5cb4[995]]();
    this[_0x5cb4[579]][support][_0x5cb4[665]][_0x5cb4[996]](this[_0x5cb4[579]][support][_0x5cb4[512]]);
    if (1 === this[_0x5cb4[579]][_0x5cb4[19]]) {
      this[_0x5cb4[997]](1);
    }
    if (1 === this[_0x5cb4[579]][support][_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[406]]) {
      _0x3de4x2++;
    }
  }
  if (document[_0x5cb4[637]](_0x5cb4[795])[_0x5cb4[976]]) {
    this[_0x5cb4[975]]();
  }
  this[_0x5cb4[632]](true);
  if (_0x3de4x2 > 1) {
    alert(_0x5cb4[998]);
    this[_0x5cb4[632]](false);
    this[_0x5cb4[975]]();
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[999]] = function(canCreateDiscussions) {
  /** @type {number} */
  var _0x3de4x3 = 0;
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x5cb4[579]][_0x5cb4[19]]; indexLookupKey++) {
    if (this[_0x5cb4[579]][indexLookupKey][_0x5cb4[1E3]] >= this[_0x5cb4[579]][indexLookupKey][_0x5cb4[664]][_0x5cb4[19]]) {
      _0x3de4x3++;
    }
  }
  return _0x3de4x3 === this[_0x5cb4[579]][_0x5cb4[19]];
}, ReplayController[_0x5cb4[135]][_0x5cb4[632]] = function(canCreateDiscussions) {
  return this[_0x5cb4[487]] = _0x5cb4[1001] == typeof canCreateDiscussions ? canCreateDiscussions : !this[_0x5cb4[487]], this[_0x5cb4[487]] && !this[_0x5cb4[999]]() ? document[_0x5cb4[637]](_0x5cb4[795])[_0x5cb4[45]] = _0x5cb4[1002] : (document[_0x5cb4[637]](_0x5cb4[795])[_0x5cb4[45]] = _0x5cb4[1003], this[_0x5cb4[487]] = false), this[_0x5cb4[487]];
}, ReplayController[_0x5cb4[135]][_0x5cb4[1004]] = function() {
  var deltaX = Number[_0x5cb4[528]];
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x5cb4[579]][_0x5cb4[19]]; indexLookupKey++) {
    var currentIndex = this[_0x5cb4[579]][indexLookupKey];
    if (!(currentIndex[_0x5cb4[1E3]] >= currentIndex[_0x5cb4[664]][_0x5cb4[19]])) {
      deltaX = Math[_0x5cb4[241]](deltaX, currentIndex[_0x5cb4[664]][currentIndex[_0x5cb4[1E3]]][_0x5cb4[863]]);
    }
  }
  if (deltaX !== Number[_0x5cb4[528]]) {
    this[_0x5cb4[476]] = deltaX;
    /** @type {number} */
    indexLookupKey = 0;
    for (; indexLookupKey < this[_0x5cb4[579]][_0x5cb4[19]]; indexLookupKey++) {
      this[_0x5cb4[579]][indexLookupKey][_0x5cb4[985]](this[_0x5cb4[476]]);
      this[_0x5cb4[579]][indexLookupKey][_0x5cb4[406]][_0x5cb4[1005]]();
    }
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[1006]] = function() {
  /** @type {number} */
  var t = -1;
  /** @type {number} */
  var mapped_field = 0;
  for (; mapped_field < this[_0x5cb4[579]][_0x5cb4[19]]; mapped_field++) {
    var _targetScrollPosition = this[_0x5cb4[579]][mapped_field];
    /** @type {number} */
    var arg = -1;
    /** @type {number} */
    var lowerBound = 2;
    for (; !(_targetScrollPosition[_0x5cb4[1E3]] < lowerBound);) {
      if (_targetScrollPosition[_0x5cb4[664]][_targetScrollPosition[_0x5cb4[1E3]] - lowerBound][_0x5cb4[863]] < _targetScrollPosition[_0x5cb4[476]]) {
        arg = _targetScrollPosition[_0x5cb4[664]][_targetScrollPosition[_0x5cb4[1E3]] - lowerBound][_0x5cb4[863]];
        break;
      }
      lowerBound++;
    }
    t = Math[_0x5cb4[1007]](t, arg);
  }
  if (!(t < 0)) {
    this[_0x5cb4[1008]](t);
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[1009]] = function(col) {
  var _modules = this[_0x5cb4[579]][0];
  for (; col > 0 && (_modules[_0x5cb4[664]][col - 1][_0x5cb4[863]] === _modules[_0x5cb4[664]][col][_0x5cb4[863]] || col + 1 < _modules[_0x5cb4[664]][_0x5cb4[19]] && _modules[_0x5cb4[664]][col + 1][_0x5cb4[863]] === _modules[_0x5cb4[664]][col][_0x5cb4[863]]);) {
    col--;
  }
  /** @type {boolean} */
  _modules[_0x5cb4[406]][_0x5cb4[409]] = true;
  _modules[_0x5cb4[993]]();
  this[_0x5cb4[1008]](_modules[_0x5cb4[664]][col][_0x5cb4[863]]);
}, ReplayController[_0x5cb4[135]][_0x5cb4[1008]] = function(canCreateDiscussions) {
  this[_0x5cb4[476]] = canCreateDiscussions;
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x5cb4[579]][_0x5cb4[19]]; indexLookupKey++) {
    var currentIndex = this[_0x5cb4[579]][indexLookupKey];
    var _0x3de4x5 = currentIndex[_0x5cb4[406]][_0x5cb4[883]];
    /** @type {boolean} */
    currentIndex[_0x5cb4[406]][_0x5cb4[883]] = false;
    /** @type {boolean} */
    currentIndex[_0x5cb4[406]][_0x5cb4[409]] = true;
    currentIndex[_0x5cb4[993]]();
    currentIndex[_0x5cb4[995]]();
    currentIndex[_0x5cb4[985]](this[_0x5cb4[476]]);
    currentIndex[_0x5cb4[406]][_0x5cb4[883]] = _0x3de4x5;
    /** @type {boolean} */
    currentIndex[_0x5cb4[406]][_0x5cb4[409]] = false;
    currentIndex[_0x5cb4[380]](false);
    currentIndex[_0x5cb4[406]][_0x5cb4[381]]();
    currentIndex[_0x5cb4[404]]();
    currentIndex[_0x5cb4[365]]();
    currentIndex[_0x5cb4[406]][_0x5cb4[1005]]();
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[1010]] = function() {
  /** @type {number} */
  var value_high = parseFloat(document[_0x5cb4[637]](_0x5cb4[1011])[_0x5cb4[43]]);
  if (!isNaN(value_high)) {
    /** @type {number} */
    this[_0x5cb4[631]] = value_high;
  }
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x5cb4[579]][_0x5cb4[19]]; indexLookupKey++) {
    var currentIndex = this[_0x5cb4[579]][indexLookupKey];
    if (this[_0x5cb4[631]] >= 10) {
      /** @type {boolean} */
      currentIndex[_0x5cb4[883]] = false;
    } else {
      /** @type {boolean} */
      currentIndex[_0x5cb4[883]] = true;
    }
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[385]] = function() {
  return (new Date)[_0x5cb4[1012]]();
}, ReplayController[_0x5cb4[135]][_0x5cb4[997]] = function(canCreateDiscussions) {
  if (void 0 !== canCreateDiscussions && 1 === canCreateDiscussions) {
    return document[_0x5cb4[637]](_0x5cb4[1013])[_0x5cb4[35]][_0x5cb4[34]] = _0x5cb4[36], void(document[_0x5cb4[637]](_0x5cb4[1014])[_0x5cb4[45]] = _0x5cb4[1015]);
  }
  var _0x3de4x3 = document[_0x5cb4[637]](_0x5cb4[1013])[_0x5cb4[35]][_0x5cb4[34]];
  document[_0x5cb4[637]](_0x5cb4[1013])[_0x5cb4[35]][_0x5cb4[34]] = _0x5cb4[36] === _0x3de4x3 ? _0x5cb4[37] : _0x5cb4[36];
  document[_0x5cb4[637]](_0x5cb4[1014])[_0x5cb4[45]] = _0x5cb4[36] === _0x3de4x3 ? _0x5cb4[1016] : _0x5cb4[1015];
}, ReplayController[_0x5cb4[135]][_0x5cb4[1017]] = function(canCreateDiscussions) {
  if (37 !== canCreateDiscussions[_0x5cb4[819]] || document[_0x5cb4[637]](_0x5cb4[978])[_0x5cb4[976]]) {
    if (!(39 !== canCreateDiscussions[_0x5cb4[819]] || document[_0x5cb4[637]](_0x5cb4[810])[_0x5cb4[976]])) {
      this[_0x5cb4[1004]]();
    }
  } else {
    this[_0x5cb4[1006]]();
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[1018]] = function() {
  var script = this[_0x5cb4[579]][0][_0x5cb4[1E3]];
  this[_0x5cb4[632]](false);
  this[_0x5cb4[1009]](this[_0x5cb4[579]][0][_0x5cb4[664]][_0x5cb4[19]] - 1);
  var $ = {
    finesse : null !== this[_0x5cb4[579]][0][_0x5cb4[660]] ? this[_0x5cb4[579]][0][_0x5cb4[660]][_0x5cb4[24]](0) : [],
    scoreStamps : null !== this[_0x5cb4[579]][0][_0x5cb4[661]] ? this[_0x5cb4[579]][0][_0x5cb4[661]][_0x5cb4[24]](0) : []
  };
  return this[_0x5cb4[1009]](script), $;
}, ReplayController[_0x5cb4[135]][_0x5cb4[987]] = function() {
  /** @type {number} */
  this[_0x5cb4[476]] = 12E4;
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x5cb4[579]][_0x5cb4[19]]; indexLookupKey++) {
    if (5 === this[_0x5cb4[579]][indexLookupKey][_0x5cb4[357]]) {
      this[_0x5cb4[579]][indexLookupKey][_0x5cb4[476]] = this[_0x5cb4[476]];
      this[_0x5cb4[579]][indexLookupKey][_0x5cb4[406]][_0x5cb4[1005]]();
    }
  }
}, ReplayController[_0x5cb4[135]][_0x5cb4[634]] = function() {
  var _0x3de4x2 = REP_ID;
  /** @type {null} */
  var _0x3de4x3 = null;
  if (1 === _0x3de4x2[0] ? _0x3de4x3 = new ReplayDownloader(_0x3de4x2[1], false, _0x5cb4[1019], this) : 2 === _0x3de4x2[0] ? _0x3de4x3 = new ReplayDownloader(_0x3de4x2[1], true, _0x5cb4[1019], this) : 3 === _0x3de4x2[0] && (_0x3de4x3 = new ReplayDownloader(_0x3de4x2[1][0], true, _0x5cb4[1019], this), _0x3de4x3 = new ReplayDownloader(_0x3de4x2[1][1], true, _0x5cb4[1020], this)), _0x3de4x3 && _0x3de4x3[_0x5cb4[639]]) {
    var _0x3de4x4 = document[_0x5cb4[637]](_0x5cb4[977]);
    _0x3de4x4[_0x5cb4[35]][_0x5cb4[34]] = _0x5cb4[37];
    this[_0x5cb4[979]](_0x5cb4[1021], function() {
      /** @type {null} */
      _0x3de4x4[_0x5cb4[35]][_0x5cb4[34]] = null;
    });
  }
}, ReplayDownloader[_0x5cb4[135]][_0x5cb4[1022]] = function(data) {
  /** @type {boolean} */
  this[_0x5cb4[639]] = false;
  var _0x3de4x3 = LZString[_0x5cb4[1023]](JSON[_0x5cb4[110]](data));
  this[_0x5cb4[636]][_0x5cb4[45]] = _0x3de4x3;
  this[_0x5cb4[636]][_0x5cb4[649]][_0x5cb4[853]](this[_0x5cb4[642]]);
  if (null !== this[_0x5cb4[640]]) {
    this[_0x5cb4[640]][_0x5cb4[980]](_0x5cb4[1021]);
  }
}, ReplayDownloader[_0x5cb4[135]][_0x5cb4[641]] = function(firstFeatureNumber, bias) {
  /** @type {boolean} */
  this[_0x5cb4[639]] = true;
  var url = document[_0x5cb4[55]][_0x5cb4[1026]](_0x5cb4[1025])[_0x5cb4[1024]];
  /** @type {!XMLHttpRequest} */
  var xhr = new XMLHttpRequest;
  var b = _0x5cb4[1027] + (_0x5cb4[1028] + firstFeatureNumber + (bias ? _0x5cb4[1029] : _0x5cb4[5]));
  /** @type {number} */
  xhr[_0x5cb4[670]] = 1E4;
  xhr[_0x5cb4[744]](_0x5cb4[743], b, true);
  xhr[_0x5cb4[747]](_0x5cb4[745], _0x5cb4[746]);
  xhr[_0x5cb4[747]](_0x5cb4[1030], url);
  var coordtransform = this;
  try {
    xhr[_0x5cb4[750]]();
  } catch (coord) {
    coordtransform[_0x5cb4[1031]](coord[_0x5cb4[751]]);
  }
  /**
   * @return {undefined}
   */
  xhr[_0x5cb4[752]] = function() {
    coordtransform[_0x5cb4[1031]](_0x5cb4[753]);
  };
  /** @type {function(): undefined} */
  xhr[_0x5cb4[754]] = xhr[_0x5cb4[755]] = function() {
    coordtransform[_0x5cb4[1031]](_0x5cb4[756]);
  };
  /**
   * @return {undefined}
   */
  xhr[_0x5cb4[60]] = function() {
    if (200 === xhr[_0x5cb4[757]]) {
      if (_0x5cb4[1032] == typeof coordtransform[_0x5cb4[1022]]) {
        coordtransform[_0x5cb4[1022]](JSON[_0x5cb4[111]](xhr[_0x5cb4[758]]));
      }
    } else {
      coordtransform[_0x5cb4[1031]](xhr[_0x5cb4[757]] + _0x5cb4[759] + xhr[_0x5cb4[760]]);
    }
  };
}, ReplayDownloader[_0x5cb4[135]][_0x5cb4[1031]] = function(tmp) {
  this[_0x5cb4[636]][_0x5cb4[649]][_0x5cb4[853]](this[_0x5cb4[642]]);
  var prefixTextNode = document[_0x5cb4[42]](_0x5cb4[846]);
  prefixTextNode[_0x5cb4[45]] = _0x5cb4[1033] + tmp;
  insertNodeAfter(prefixTextNode, this[_0x5cb4[636]]);
};
/** @type {boolean} */
var LIVE_REPLAY_LOG = false;
var ReplayerProto = Object[_0x5cb4[1034]](GameCore[_0x5cb4[135]]);
/**
 * @param {?} axsPath
 * @return {?}
 */
function _base64ToArrayBuffer(axsPath) {
  var axs = window[_0x5cb4[18]](axsPath);
  var signature = axs[_0x5cb4[19]];
  /** @type {!Uint8Array} */
  var result = new Uint8Array(signature);
  /** @type {number} */
  var pxPerCell = 0;
  for (; pxPerCell < signature / 4; pxPerCell++) {
    /** @type {number} */
    var i = 0;
    for (; i < 4; i++) {
      result[4 * pxPerCell + i] = axs[_0x5cb4[20]](4 * pxPerCell + 3 - i);
    }
  }
  return result[_0x5cb4[1035]];
}
/**
 * @param {number} host
 * @return {undefined}
 */
function Analytics(host) {
  this[_0x5cb4[227]] = void 0 === host ? 0 : host;
  /** @type {null} */
  this[_0x5cb4[640]] = null;
  /** @type {null} */
  this[_0x5cb4[512]] = null;
  /** @type {null} */
  this[_0x5cb4[664]] = null;
  /** @type {!Array} */
  this[_0x5cb4[1036]] = [];
  /** @type {number} */
  this[_0x5cb4[1037]] = 10;
  /** @type {boolean} */
  this[_0x5cb4[1038]] = false;
  /** @type {boolean} */
  this[_0x5cb4[1039]] = true;
  /** @type {boolean} */
  this[_0x5cb4[1040]] = true;
  /** @type {boolean} */
  this[_0x5cb4[1041]] = false;
  this[_0x5cb4[1042]] = document[_0x5cb4[637]](_0x5cb4[1043]);
  this[_0x5cb4[1044]] = this[_0x5cb4[1042]][_0x5cb4[1046]](_0x5cb4[1045]);
  this[_0x5cb4[1044]][_0x5cb4[1047]] = _0x5cb4[1048];
  this[_0x5cb4[1044]][_0x5cb4[1049]] = _0x5cb4[1048];
  this[_0x5cb4[1050]] = document[_0x5cb4[637]](_0x5cb4[1051]);
  this[_0x5cb4[1052]] = this[_0x5cb4[1050]][_0x5cb4[1046]](_0x5cb4[1045]);
  this[_0x5cb4[1050]][_0x5cb4[627]](_0x5cb4[1053], this[_0x5cb4[1054]][_0x5cb4[625]](this), false);
  this[_0x5cb4[1050]][_0x5cb4[627]](_0x5cb4[1055], this[_0x5cb4[1056]][_0x5cb4[625]](this), false);
  this[_0x5cb4[1050]][_0x5cb4[627]](_0x5cb4[921], this[_0x5cb4[1057]][_0x5cb4[625]](this), false);
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[1059])[_0x5cb4[1058]] = true;
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[1060])[_0x5cb4[1058]] = true;
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[1061])[_0x5cb4[1058]] = false;
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[1062])[_0x5cb4[1058]] = false;
  /** @type {boolean} */
  document[_0x5cb4[637]](_0x5cb4[1063])[_0x5cb4[1058]] = false;
  document[_0x5cb4[637]](_0x5cb4[1059])[_0x5cb4[627]](_0x5cb4[1064], this[_0x5cb4[1059]][_0x5cb4[625]](this), false);
  document[_0x5cb4[637]](_0x5cb4[1060])[_0x5cb4[627]](_0x5cb4[1064], this[_0x5cb4[1060]][_0x5cb4[625]](this), false);
  document[_0x5cb4[637]](_0x5cb4[1061])[_0x5cb4[627]](_0x5cb4[1064], this[_0x5cb4[1061]][_0x5cb4[625]](this), false);
  document[_0x5cb4[637]](_0x5cb4[1062])[_0x5cb4[627]](_0x5cb4[1064], this[_0x5cb4[1062]][_0x5cb4[625]](this), false);
  document[_0x5cb4[637]](_0x5cb4[1063])[_0x5cb4[627]](_0x5cb4[1064], this[_0x5cb4[1063]][_0x5cb4[625]](this), false);
  this[_0x5cb4[1065]] = document[_0x5cb4[637]](_0x5cb4[1068])[_0x5cb4[1067]](_0x5cb4[1066])[0];
  this[_0x5cb4[667]] = {};
  this[_0x5cb4[1069]]();
  /** @type {!Array} */
  this[_0x5cb4[1070]] = [];
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function SimpleStatsManager(canCreateDiscussions) {
  this[_0x5cb4[406]] = canCreateDiscussions;
  /** @type {!Array} */
  this[_0x5cb4[1071]] = [];
  this[_0x5cb4[1072]]();
}
/**
 * @param {?} type
 * @param {?} box
 * @param {?} meta11183
 * @return {undefined}
 */
function StatLine(type, box, meta11183) {
  this[_0x5cb4[44]] = type;
  this[_0x5cb4[1073]] = meta11183;
  this[_0x5cb4[1074]] = this[_0x5cb4[43]] = _0x5cb4[4];
  /** @type {boolean} */
  this[_0x5cb4[629]] = false;
  this[_0x5cb4[1075]] = document[_0x5cb4[42]](_0x5cb4[1076]);
  /** @type {number} */
  this[_0x5cb4[1075]][_0x5cb4[1077]] = 120;
  this[_0x5cb4[1075]][_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[1078]);
  this[_0x5cb4[1075]][_0x5cb4[467]] = box;
  this[_0x5cb4[1079]] = document[_0x5cb4[42]](_0x5cb4[1076]);
  this[_0x5cb4[1079]][_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[1080]);
}
Replayer[_0x5cb4[135]] = ReplayerProto, Replayer[_0x5cb4[135]][_0x5cb4[1081]] = Replayer, Replayer[_0x5cb4[135]][_0x5cb4[1082]] = function(canCreateDiscussions, value) {
  return 1 === canCreateDiscussions && _0x5cb4[1032] == typeof Math[_0x5cb4[1083]] ? (Math[_0x5cb4[1083]](value), Math[_0x5cb4[697]]) : alea(value);
}, Replayer[_0x5cb4[135]][_0x5cb4[993]] = function() {
  this[_0x5cb4[351]] = this[_0x5cb4[1082]](this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[406]], this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1084]]);
  this[_0x5cb4[216]][_0x5cb4[350]] = void 0 !== this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1085]] ? this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1085]] : 0;
  this[_0x5cb4[219]](this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[218]] ? this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[218]] : 0);
  this[_0x5cb4[655]] = this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[655]];
  /** @type {number} */
  this[_0x5cb4[1E3]] = 0;
  /** @type {boolean} */
  this[_0x5cb4[650]] = false;
  if (3 === this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[512]]) {
    this[_0x5cb4[219]](2);
    /** @type {number} */
    this[_0x5cb4[216]][_0x5cb4[518]] = 0;
  }
  /** @type {number} */
  var _0x3de4x2 = 0 | this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[682]];
  /** @type {number} */
  this[_0x5cb4[357]] = (4294901760 & _0x3de4x2) >> 16;
  /** @type {number} */
  var indexLookupKey = this[_0x5cb4[651]] = 65535 & _0x3de4x2;
  if (0 === this[_0x5cb4[357]]) {
    /** @type {number} */
    this[_0x5cb4[357]] = 1;
  }
  this[_0x5cb4[511]]();
  /** @type {number} */
  this[_0x5cb4[466]] = 1E6;
  if (!(100 === this[_0x5cb4[357]])) {
    if (1 === this[_0x5cb4[357]]) {
      this[_0x5cb4[466]] = {
        1 : 40,
        2 : 20,
        3 : 100,
        4 : 1E3
      }[indexLookupKey];
    } else {
      if (!(2 === this[_0x5cb4[357]])) {
        if (3 === this[_0x5cb4[357]]) {
          this[_0x5cb4[466]] = {
            1 : 10,
            2 : 18,
            3 : 100
          }[indexLookupKey];
        } else {
          if (5 === this[_0x5cb4[357]]) {
            /** @type {number} */
            this[_0x5cb4[663]] = 120;
          } else {
            if (6 === this[_0x5cb4[357]]) {
              this[_0x5cb4[424]] = new MapManager(this);
              this[_0x5cb4[424]][_0x5cb4[724]](this[_0x5cb4[512]][_0x5cb4[63]][_0x5cb4[667]]);
              this[_0x5cb4[740]](this[_0x5cb4[424]][_0x5cb4[143]], this[_0x5cb4[512]][_0x5cb4[63]][_0x5cb4[148]]);
            } else {
              this[_0x5cb4[357]];
            }
          }
        }
      }
    }
  }
  /** @type {null} */
  this[_0x5cb4[393]] = null;
  this[_0x5cb4[406]][_0x5cb4[592]]();
}, Replayer[_0x5cb4[135]][_0x5cb4[740]] = function(thisTransform2, canCreateDiscussions) {
  if (void 0 === this[_0x5cb4[512]][_0x5cb4[63]] && (this[_0x5cb4[512]][_0x5cb4[63]] = {}), this[_0x5cb4[512]][_0x5cb4[63]][_0x5cb4[148]] = canCreateDiscussions, this[_0x5cb4[143]] = copyMatrix(thisTransform2), canCreateDiscussions) {
    var PL$13 = this[_0x5cb4[512]][_0x5cb4[63]][_0x5cb4[148]];
    /** @type {!Array} */
    this[_0x5cb4[148]] = [];
    /** @type {number} */
    var PL$17 = 0;
    for (; PL$17 < PL$13[_0x5cb4[19]]; ++PL$17) {
      this[_0x5cb4[148]][_0x5cb4[106]](new Block(this[_0x5cb4[147]][PL$13[PL$17]]));
    }
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[1086]] = function(boardManager) {
  if (this[_0x5cb4[667]][_0x5cb4[19]] === this[_0x5cb4[668]]) {
    return null;
  }
  var orTmp;
  /** @type {number} */
  var numBitsRemaining = 32 - (this[_0x5cb4[669]] + boardManager);
  if (numBitsRemaining >= 0) {
    /** @type {number} */
    var bitsShiftedOut = (1 << boardManager) - 1 << numBitsRemaining;
    /** @type {number} */
    orTmp = (this[_0x5cb4[667]][this[_0x5cb4[668]]] & bitsShiftedOut) >>> numBitsRemaining;
  } else {
    /** @type {number} */
    var _0x3de4x9 = (1 << boardManager + numBitsRemaining) - 1;
    /** @type {number} */
    var tmpa = (this[_0x5cb4[667]][this[_0x5cb4[668]]] & _0x3de4x9) << -numBitsRemaining;
    /** @type {number} */
    var _0x3de4x22 = (1 << -numBitsRemaining) - 1 << 32 + numBitsRemaining;
    if (this[_0x5cb4[667]][_0x5cb4[19]] === this[_0x5cb4[668]] + 1 && 0 !== numBitsRemaining) {
      return null;
    }
    /** @type {number} */
    orTmp = tmpa | (this[_0x5cb4[667]][this[_0x5cb4[668]] + 1] & _0x3de4x22) >>> 32 + numBitsRemaining;
  }
  return this[_0x5cb4[669]] = this[_0x5cb4[669]] + boardManager, this[_0x5cb4[669]] >= 32 && (this[_0x5cb4[669]] -= 32, this[_0x5cb4[668]]++), orTmp;
}, Replayer[_0x5cb4[135]][_0x5cb4[1087]] = function() {
  var Uint32size = _base64ToArrayBuffer(this[_0x5cb4[512]][_0x5cb4[584]]);
  /** @type {!Uint32Array} */
  this[_0x5cb4[667]] = new Uint32Array(Uint32size);
  /** @type {number} */
  this[_0x5cb4[668]] = 0;
  /** @type {number} */
  this[_0x5cb4[669]] = 0;
  this[_0x5cb4[667]][_0x5cb4[19]];
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var colsCount = 0;
  for (;;) {
    var posarr = {};
    var j = this[_0x5cb4[1086]](12);
    if (null === j || 4095 === j) {
      break;
    }
    if (j < i) {
      colsCount++;
    }
    i = j;
    posarr[_0x5cb4[863]] = 4094 * colsCount + j;
    posarr[_0x5cb4[688]] = this[_0x5cb4[1086]](4);
    if (posarr[_0x5cb4[688]] === Action[_0x5cb4[1088]]) {
      /** @type {!Array} */
      posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](5), this[_0x5cb4[1086]](4)];
    }
    if (posarr[_0x5cb4[688]] === Action[_0x5cb4[1089]]) {
      /** @type {!Array} */
      posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](5)];
    }
    if (posarr[_0x5cb4[688]] === Action[_0x5cb4[1090]]) {
      /** @type {!Array} */
      posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](1)];
    }
    if (posarr[_0x5cb4[688]] === Action[_0x5cb4[716]]) {
      posarr[_0x5cb4[1091]] = this[_0x5cb4[1086]](4);
      if (posarr[_0x5cb4[1091]] === Aux[_0x5cb4[1092]]) {
        /** @type {!Array} */
        posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](16)];
        if ((i = i + posarr[_0x5cb4[584]][0] % 4094) >= 4094) {
          /** @type {number} */
          i = i - 4094;
          colsCount++;
        }
        /** @type {number} */
        colsCount = colsCount + (posarr[_0x5cb4[584]][0] / 4094 >>> 0);
      } else {
        if (posarr[_0x5cb4[1091]] === Aux[_0x5cb4[715]]) {
          /** @type {!Array} */
          posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](1), this[_0x5cb4[1086]](4)];
        } else {
          if (posarr[_0x5cb4[1091]] === Aux[_0x5cb4[1093]]) {
            /** @type {!Array} */
            posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](4) - 3, this[_0x5cb4[1086]](5) - 12];
          } else {
            if (posarr[_0x5cb4[1091]] === Aux[_0x5cb4[727]]) {
              /** @type {!Array} */
              posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](1), this[_0x5cb4[1086]](5)];
            } else {
              if (posarr[_0x5cb4[1091]] === Aux[_0x5cb4[720]]) {
                /** @type {!Array} */
                posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](4), this[_0x5cb4[1086]](5)];
              } else {
                if (posarr[_0x5cb4[1091]] === Aux[_0x5cb4[1094]]) {
                  /** @type {!Array} */
                  posarr[_0x5cb4[584]] = [this[_0x5cb4[1086]](5), this[_0x5cb4[1086]](4), this[_0x5cb4[1086]](3), this[_0x5cb4[1086]](1)];
                }
              }
            }
          }
        }
      }
    }
    this[_0x5cb4[664]][_0x5cb4[106]](posarr);
  }
  if (this[_0x5cb4[430]]) {
    console[_0x5cb4[828]](JSON[_0x5cb4[110]](this[_0x5cb4[664]]));
  }
  this[_0x5cb4[512]][_0x5cb4[688]] = this[_0x5cb4[664]];
}, Replayer[_0x5cb4[135]][_0x5cb4[994]] = function() {
  /** @type {!Array} */
  this[_0x5cb4[664]] = [];
  if (this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[406]] >= 3) {
    this[_0x5cb4[1087]]();
  } else {
    this[_0x5cb4[664]] = this[_0x5cb4[512]][_0x5cb4[688]];
  }
  if (this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[406]] >= 2) {
    this[_0x5cb4[406]][_0x5cb4[1095]] = this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1096]];
    if (this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1097]] >= 1E3 && this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1098]]) {
      this[_0x5cb4[177]] = this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1098]];
    }
    if (7 === this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1097]]) {
      this[_0x5cb4[183]] = this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1099]];
      this[_0x5cb4[406]][_0x5cb4[902]](0);
    } else {
      this[_0x5cb4[406]][_0x5cb4[902]](this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[1097]]);
    }
  } else {
    this[_0x5cb4[406]][_0x5cb4[902]](1);
    /** @type {number} */
    this[_0x5cb4[406]][_0x5cb4[1095]] = 0;
  }
  this[_0x5cb4[406]][_0x5cb4[1100]]();
}, Replayer[_0x5cb4[135]][_0x5cb4[995]] = function() {
  if (6 !== this[_0x5cb4[357]] && this[_0x5cb4[515]](), this[_0x5cb4[393]] = null, this[_0x5cb4[459]] = -1, this[_0x5cb4[391]] = false, this[_0x5cb4[181]] = false, this[_0x5cb4[144]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this[_0x5cb4[149]] = 5, this[_0x5cb4[362]] = new Block(0), this[_0x5cb4[652]] = 0, this[_0x5cb4[654]] = false, this[_0x5cb4[653]] = .9, this[_0x5cb4[378]] = 0, this[_0x5cb4[476]] = 0, this[_0x5cb4[657]] = 0, this[_0x5cb4[383]] = 0, this[_0x5cb4[504]] = 0, this[_0x5cb4[493]] = 0, this[_0x5cb4[659]] = 
  0, this[_0x5cb4[399]] = 0, this[_0x5cb4[372]] = 0, this[_0x5cb4[660]] = null, this[_0x5cb4[661]] = null, this[_0x5cb4[526]](), this[_0x5cb4[394]](), this[_0x5cb4[664]][_0x5cb4[19]] > 0) {
    for (; 0 === this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[863]] && this[_0x5cb4[1E3]] < this[_0x5cb4[664]][_0x5cb4[19]];) {
      this[_0x5cb4[1101]](this[_0x5cb4[664]][this[_0x5cb4[1E3]]]);
      this[_0x5cb4[1E3]]++;
    }
  }
  this[_0x5cb4[406]][_0x5cb4[1102]]();
}, Replayer[_0x5cb4[135]][_0x5cb4[1103]] = function(canCreateDiscussions, mmCoreSplitViewBlock) {
  /** @type {number} */
  canCreateDiscussions = canCreateDiscussions * this[_0x5cb4[145]][this[_0x5cb4[362]][_0x5cb4[65]]][_0x5cb4[70]];
  if (!this[_0x5cb4[366]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] + canCreateDiscussions, this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]], this[_0x5cb4[362]][_0x5cb4[67]])) {
    /** @type {boolean} */
    this[_0x5cb4[178]] = false;
    this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] + canCreateDiscussions;
    this[_0x5cb4[380]](false);
    this[_0x5cb4[406]][_0x5cb4[1104]](mmCoreSplitViewBlock);
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[733]] = function() {
  var _0x3de4x2 = this[_0x5cb4[145]][this[_0x5cb4[362]][_0x5cb4[65]]];
  var indexLookupKey = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] + _0x3de4x2[_0x5cb4[69]][this[_0x5cb4[362]][_0x5cb4[44]]][_0x5cb4[1105]][this[_0x5cb4[362]][_0x5cb4[67]]];
  /** @type {number} */
  var _0x3de4x4 = this[_0x5cb4[372]] - (0 === this[_0x5cb4[362]][_0x5cb4[65]] ? finesse[this[_0x5cb4[362]][_0x5cb4[44]]][this[_0x5cb4[362]][_0x5cb4[67]]][indexLookupKey] : 0);
  if (_0x3de4x4 > 0) {
    this[_0x5cb4[659]] += _0x3de4x4;
    if (null === this[_0x5cb4[660]]) {
      /** @type {!Array} */
      this[_0x5cb4[660]] = [];
    }
    this[_0x5cb4[660]][_0x5cb4[106]](this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[1106]]);
  }
  this[_0x5cb4[399]] += this[_0x5cb4[372]];
  /** @type {number} */
  this[_0x5cb4[372]] = 0;
  if (!(this[_0x5cb4[406]][_0x5cb4[408]] && !this[_0x5cb4[406]][_0x5cb4[409]])) {
    this[_0x5cb4[380]](true);
  }
  var artistTrack = this[_0x5cb4[410]][_0x5cb4[66]][_0x5cb4[369]];
  this[_0x5cb4[450]](this[_0x5cb4[432]][_0x5cb4[115]].HARD_DROP, artistTrack - this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]);
  this[_0x5cb4[492]](this[_0x5cb4[410]][_0x5cb4[66]][_0x5cb4[368]], artistTrack);
  if (this[_0x5cb4[178]] && artistTrack !== this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]) {
    /** @type {boolean} */
    this[_0x5cb4[178]] = false;
  }
  this[_0x5cb4[406]][_0x5cb4[381]]();
  if (_0x3de4x4 && this[_0x5cb4[401]]) {
    this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[1107])[_0x5cb4[65]](this[_0x5cb4[659]]);
  }
  if (this[_0x5cb4[665]]) {
    this[_0x5cb4[665]][_0x5cb4[1108]](this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[1106]]);
  }
  if (this[_0x5cb4[671]]) {
    this[_0x5cb4[406]][_0x5cb4[1005]]();
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[1109]] = function() {
  /** @type {boolean} */
  this[_0x5cb4[650]] = true;
  this[_0x5cb4[406]][_0x5cb4[1110]]();
}, Replayer[_0x5cb4[135]][_0x5cb4[364]] = function() {
  if (!(6 === this[_0x5cb4[357]] && null !== this[_0x5cb4[512]][_0x5cb4[63]][_0x5cb4[148]])) {
    this[_0x5cb4[148]][_0x5cb4[106]](this[_0x5cb4[354]]());
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[381]] = function() {
  this[_0x5cb4[406]][_0x5cb4[381]]();
}, Replayer[_0x5cb4[135]][_0x5cb4[394]] = function() {
  this[_0x5cb4[362]] = this[_0x5cb4[356]]();
  this[_0x5cb4[367]]();
  this[_0x5cb4[380]](false);
  /** @type {number} */
  this[_0x5cb4[378]] = 0;
}, Replayer[_0x5cb4[135]][_0x5cb4[421]] = function() {
  return this[_0x5cb4[357]];
}, Replayer[_0x5cb4[135]][_0x5cb4[137]] = function(ballNumber) {
  return ballNumber <= 12 ? this[_0x5cb4[662]][ballNumber] : this[_0x5cb4[662]][this[_0x5cb4[662]][_0x5cb4[19]] - 1];
}, Replayer[_0x5cb4[135]][_0x5cb4[471]] = function(range, length, offset, dontForceConstraints) {
  if (offset || (offset = 1), range > 0) {
    this[_0x5cb4[150]][_0x5cb4[1111]] += range;
    /** @type {!Array} */
    var entries = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
    if (entries[length] = 0, offset > 1) {
      if (length + offset > 10) {
        /** @type {number} */
        length = 10 - offset;
      }
      for (let i = 1; i < offset; ++i) {
        /** @type {number} */
        entries[length + i] = 0;
      }
    }
    if (dontForceConstraints) {
      for (let i = 0; i < entries[_0x5cb4[19]]; ++i) {
        /** @type {number} */
        entries[i] = 8 === entries[i] ? 0 : 8;
      }
    }
    this[_0x5cb4[144]] = this[_0x5cb4[143]][range - 1][_0x5cb4[24]](0);
    /** @type {number} */
    var connectNumber = this[_0x5cb4[143]][_0x5cb4[19]] - this[_0x5cb4[383]];
    /** @type {number} */
    var currentNumber = 0;
    for (; currentNumber < connectNumber; currentNumber++) {
      this[_0x5cb4[143]][currentNumber] = connectNumber - currentNumber > range ? this[_0x5cb4[143]][currentNumber + range][_0x5cb4[24]](0) : entries[_0x5cb4[24]](0);
    }
    if (this[_0x5cb4[401]]) {
      this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[1112])[_0x5cb4[65]](this[_0x5cb4[150]][_0x5cb4[1111]]);
    }
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[1113]] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg) {
  if (mmaFrontpagePriority || (mmaFrontpagePriority = 1), isBgroundImg || (isBgroundImg = 0), this[_0x5cb4[657]] > 0 && (this[_0x5cb4[657]] -= mmCoreSplitViewBlock > this[_0x5cb4[657]] ? this[_0x5cb4[657]] : mmCoreSplitViewBlock), this[_0x5cb4[410]][_0x5cb4[66]][_0x5cb4[369]] -= mmCoreSplitViewBlock, this[_0x5cb4[471]](mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg), this[_0x5cb4[1E3]] + 1 === this[_0x5cb4[664]][_0x5cb4[19]] || this[_0x5cb4[1E3]] + 1 < this[_0x5cb4[664]][_0x5cb4[19]] && 
  this[_0x5cb4[664]][this[_0x5cb4[1E3]] + 1][_0x5cb4[688]] !== Action[_0x5cb4[1088]]) {
    for (; this[_0x5cb4[366]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]], this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]], this[_0x5cb4[362]][_0x5cb4[67]]);) {
      this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]--;
    }
    this[_0x5cb4[380]](false);
  }
  this[_0x5cb4[406]][_0x5cb4[381]]();
}, Replayer[_0x5cb4[135]][_0x5cb4[1101]] = function(data) {
  var v_field_name = data[_0x5cb4[688]];
  switch(artistTrack) {
    case Action[_0x5cb4[1114]]:
      this[_0x5cb4[372]]++;
      this[_0x5cb4[1103]](-1, true);
      break;
    case Action[_0x5cb4[1115]]:
      this[_0x5cb4[372]]++;
      this[_0x5cb4[1103]](1, true);
      break;
    case Action[_0x5cb4[1116]]:
      this[_0x5cb4[407]](-1);
      break;
    case Action[_0x5cb4[1117]]:
      this[_0x5cb4[407]](1);
      break;
    case Action[_0x5cb4[1118]]:
      this[_0x5cb4[371]](-1);
      break;
    case Action[_0x5cb4[1119]]:
      this[_0x5cb4[371]](1);
      break;
    case Action[_0x5cb4[1120]]:
      this[_0x5cb4[371]](2);
      break;
    case Action[_0x5cb4[119]]:
      this[_0x5cb4[733]]();
      break;
    case Action[_0x5cb4[1122]]:
      if (this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[406]] >= 3) {
        /** @type {boolean} */
        this[_0x5cb4[654]] = !this[_0x5cb4[654]];
      } else {
        /** @type {boolean} */
        this[_0x5cb4[654]] = true;
        this[_0x5cb4[653]] = this[_0x5cb4[146]][this[_0x5cb4[655]]][_0x5cb4[1121]];
      }
      break;
    case Action[_0x5cb4[1124]]:
      if (this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[406]] >= 3) {
        var artistTrack = this[_0x5cb4[387]](this[_0x5cb4[654]] ? this[_0x5cb4[146]][this[_0x5cb4[655]]][_0x5cb4[1123]] : 0);
        if (artistTrack) {
          this[_0x5cb4[406]][_0x5cb4[381]]();
          if (this[_0x5cb4[654]]) {
            this[_0x5cb4[450]](this[_0x5cb4[432]][_0x5cb4[115]].SOFT_DROP, artistTrack);
          }
        }
      } else {
        /** @type {boolean} */
        this[_0x5cb4[654]] = false;
        /** @type {number} */
        this[_0x5cb4[653]] = .9;
        /** @type {number} */
        this[_0x5cb4[378]] = 0;
      }
      break;
    case Action[_0x5cb4[1125]]:
      this[_0x5cb4[390]]();
      break;
    case Action[_0x5cb4[1088]]:
      let artistTrack = data[_0x5cb4[584]][0];
      let GET_AUTH_URL_TIMEOUT = data[_0x5cb4[584]][1];
      this[_0x5cb4[1113]](artistTrack, GET_AUTH_URL_TIMEOUT);
      break;
    case Action[_0x5cb4[1126]]:
      this[_0x5cb4[410]][_0x5cb4[66]][_0x5cb4[369]]--;
      this[_0x5cb4[382]]();
      for (; this[_0x5cb4[366]](this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]], this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]], this[_0x5cb4[362]][_0x5cb4[67]]);) {
        this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]]--;
      }
      this[_0x5cb4[380]](false);
      break;
    case Action[_0x5cb4[1089]]:
      this[_0x5cb4[657]] = data[_0x5cb4[584]][0];
      this[_0x5cb4[406]][_0x5cb4[381]]();
      break;
    case Action[_0x5cb4[1090]]:
      this[_0x5cb4[1103]](0 === data[_0x5cb4[584]][0] ? -1 : 1, false);
      break;
    case Action[_0x5cb4[716]]:
      if (data[_0x5cb4[1091]] === Aux[_0x5cb4[715]]) {
        if (0 === data[_0x5cb4[584]][0]) {
          this[_0x5cb4[355]] = data[_0x5cb4[584]][1];
        } else {
          if (1 === data[_0x5cb4[584]][0]) {
            this[_0x5cb4[216]][_0x5cb4[350]] = data[_0x5cb4[584]][1];
          }
        }
      } else {
        if (data[_0x5cb4[1091]] === Aux[_0x5cb4[1093]]) {
          this[_0x5cb4[410]][_0x5cb4[66]][_0x5cb4[368]] = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[368]] = data[_0x5cb4[584]][0];
          this[_0x5cb4[410]][_0x5cb4[66]][_0x5cb4[369]] = this[_0x5cb4[362]][_0x5cb4[66]][_0x5cb4[369]] = data[_0x5cb4[584]][1];
          this[_0x5cb4[380]](true);
          this[_0x5cb4[406]][_0x5cb4[381]]();
        } else {
          if (data[_0x5cb4[1091]] === Aux[_0x5cb4[727]]) {
            this[_0x5cb4[142]] = this[_0x5cb4[349]](data[_0x5cb4[584]][1]);
            if (1 === data[_0x5cb4[584]][0]) {
              this[_0x5cb4[511]]();
            }
          } else {
            if (data[_0x5cb4[1091]] === Aux[_0x5cb4[720]]) {
              if (0 === data[_0x5cb4[584]][0]) {
                let artistTrack = data[_0x5cb4[584]][1];
                this[_0x5cb4[215]][_0x5cb4[726]](artistTrack);
              } else {
                if (1 === data[_0x5cb4[584]][0]) {
                  /** @type {number} */
                  var artistTrack = 1;
                  for (; artistTrack < 10; artistTrack++) {
                    this[_0x5cb4[215]][_0x5cb4[725]](artistTrack);
                  }
                } else {
                  if (2 === data[_0x5cb4[584]][0]) {
                    this[_0x5cb4[215]][_0x5cb4[721]](new MapManager(this));
                  } else {
                    if (3 === data[_0x5cb4[584]][0]) {
                      this[_0x5cb4[215]][_0x5cb4[581]]();
                    }
                  }
                }
              }
              this[_0x5cb4[367]]();
              this[_0x5cb4[380]](true);
            } else {
              if (data[_0x5cb4[1091]] === Aux[_0x5cb4[1094]]) {
                let artistTrack = data[_0x5cb4[584]][0];
                let GET_AUTH_URL_TIMEOUT = data[_0x5cb4[584]][1];
                let numKeysDeleted = data[_0x5cb4[584]][2];
                let postDateGmt = data[_0x5cb4[584]][3];
                this[_0x5cb4[1113]](artistTrack, GET_AUTH_URL_TIMEOUT, numKeysDeleted, postDateGmt);
              }
            }
          }
        }
      }
  }
  if (this[_0x5cb4[430]]) {
    console[_0x5cb4[828]](Object[_0x5cb4[64]](Action)[v_field_name] + _0x5cb4[759] + JSON[_0x5cb4[110]](data));
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[1127]] = function() {
  if (!(this[_0x5cb4[512]][_0x5cb4[240]][_0x5cb4[406]] >= 3)) {
    /** @type {boolean} */
    var _0x3de4x2 = false;
    /** @type {number} */
    var _0x3de4x3 = 20;
    for (; this[_0x5cb4[378]] >= this[_0x5cb4[653]] && (this[_0x5cb4[378]] -= this[_0x5cb4[653]], this[_0x5cb4[387]](this[_0x5cb4[654]] ? this[_0x5cb4[146]][this[_0x5cb4[655]]][_0x5cb4[1123]] : 0), _0x3de4x2 = true, _0x3de4x3--);) {
    }
    if (_0x3de4x2) {
      this[_0x5cb4[406]][_0x5cb4[381]]();
    }
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[1128]] = function(canCreateDiscussions) {
  if (this[_0x5cb4[671]] = true, ++this[_0x5cb4[672]], this[_0x5cb4[670]]) {
    clearTimeout(this[_0x5cb4[670]]);
    /** @type {null} */
    this[_0x5cb4[670]] = null;
    let _0x3de4x2 = 0;
    let _0x3de4x3 = 0;
    for (; this[_0x5cb4[1E3]] < this[_0x5cb4[664]][_0x5cb4[19]];) {
      this[_0x5cb4[1101]](this[_0x5cb4[664]][this[_0x5cb4[1E3]]]);
      ++_0x3de4x2;
      _0x3de4x3 = _0x3de4x3 + (0 === this[_0x5cb4[1E3]] ? this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[863]] : this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[863]] - this[_0x5cb4[664]][this[_0x5cb4[1E3]] - 1][_0x5cb4[863]]);
      ++this[_0x5cb4[1E3]];
    }
    if (LIVE_REPLAY_LOG) {
      console[_0x5cb4[828]](_0x5cb4[1129] + this[_0x5cb4[672]] + _0x5cb4[1130] + _0x3de4x2 + _0x5cb4[1131] + _0x3de4x3 + _0x5cb4[1132]);
    }
  } else {
    if (LIVE_REPLAY_LOG && this[_0x5cb4[1133]]) {
      let _0x3de4x3 = (new Date)[_0x5cb4[1012]]();
      console[_0x5cb4[828]](_0x5cb4[1129] + this[_0x5cb4[672]] + _0x5cb4[1134] + (_0x3de4x3 - this[_0x5cb4[1133]]) + _0x5cb4[1135] + canCreateDiscussions[_0x5cb4[19]] + _0x5cb4[442]);
    }
  }
  /** @type {null} */
  this[_0x5cb4[1133]] = null;
  this[_0x5cb4[664]] = canCreateDiscussions;
  /** @type {number} */
  this[_0x5cb4[1E3]] = 0;
  for (; this[_0x5cb4[1E3]] < this[_0x5cb4[664]][_0x5cb4[19]] && 0 === this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[863]];) {
    this[_0x5cb4[1101]](this[_0x5cb4[664]][this[_0x5cb4[1E3]]]);
    ++this[_0x5cb4[1E3]];
  }
  this[_0x5cb4[1136]]();
}, Replayer[_0x5cb4[135]][_0x5cb4[1136]] = function() {
  if (this[_0x5cb4[1E3]] < this[_0x5cb4[664]][_0x5cb4[19]]) {
    var _0x3de4x2 = this;
    /** @type {number} */
    this[_0x5cb4[670]] = setTimeout(function() {
      _0x3de4x2[_0x5cb4[1101]](_0x3de4x2[_0x5cb4[664]][_0x3de4x2[_0x5cb4[1E3]]]);
      ++_0x3de4x2[_0x5cb4[1E3]];
      /** @type {null} */
      _0x3de4x2[_0x5cb4[670]] = null;
      _0x3de4x2[_0x5cb4[1136]]();
    }, this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[863]]);
  } else {
    if (this[_0x5cb4[1E3]] === this[_0x5cb4[664]][_0x5cb4[19]]) {
      this[_0x5cb4[1133]] = (new Date)[_0x5cb4[1012]]();
    }
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[985]] = function(canCreateDiscussions) {
  if (!this[_0x5cb4[650]]) {
    for (; canCreateDiscussions >= this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[863]];) {
      if (this[_0x5cb4[1E3]] && (this[_0x5cb4[378]] += (this[_0x5cb4[664]][this[_0x5cb4[1E3]]][_0x5cb4[863]] - this[_0x5cb4[664]][this[_0x5cb4[1E3]] - 1][_0x5cb4[863]]) / 1E3), this[_0x5cb4[1127]](), this[_0x5cb4[1101]](this[_0x5cb4[664]][this[_0x5cb4[1E3]]]), this[_0x5cb4[1E3]]++, this[_0x5cb4[664]][_0x5cb4[19]] === this[_0x5cb4[1E3]]) {
        /** @type {boolean} */
        this[_0x5cb4[650]] = true;
        break;
      }
    }
    this[_0x5cb4[652]]++;
    this[_0x5cb4[476]] = canCreateDiscussions;
    if (this[_0x5cb4[652]] % 5 == 0 || this[_0x5cb4[650]]) {
      if (this[_0x5cb4[650]]) {
        this[_0x5cb4[476]] = this[_0x5cb4[664]][this[_0x5cb4[664]][_0x5cb4[19]] - 1][_0x5cb4[863]];
        this[_0x5cb4[406]][_0x5cb4[1137]](9);
        this[_0x5cb4[406]][_0x5cb4[381]]();
        if (void 0 !== this[_0x5cb4[406]][_0x5cb4[877]]) {
          hideElem(this[_0x5cb4[406]][_0x5cb4[877]]);
        }
      }
      this[_0x5cb4[406]][_0x5cb4[1005]]();
    }
  }
}, Replayer[_0x5cb4[135]][_0x5cb4[782]] = function() {
  return Math[_0x5cb4[477]](100 * this[_0x5cb4[493]] / (this[_0x5cb4[476]] / 1E3)) / 100;
}, Replayer[_0x5cb4[135]][_0x5cb4[385]] = function() {
  return (new Date)[_0x5cb4[1012]]();
}, Replayer[_0x5cb4[135]][_0x5cb4[450]] = function(dx, cB) {
  var zrC;
  if (void 0 === cB && (cB = 1), this[_0x5cb4[150]][_0x5cb4[450]] += zrC = cB * this[_0x5cb4[432]][_0x5cb4[134]](dx, this[_0x5cb4[139]]), null === this[_0x5cb4[661]] && (this[_0x5cb4[661]] = []), dx !== this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[118]] && dx !== this[_0x5cb4[432]][_0x5cb4[115]][_0x5cb4[119]]) {
    /** @type {number} */
    var _0x3de4x5 = 0;
    if (this[_0x5cb4[1E3]] >= 1) {
      _0x3de4x5 = this[_0x5cb4[664]][this[_0x5cb4[1E3]] - 1][_0x5cb4[863]];
    }
    0;
    this[_0x5cb4[661]][_0x5cb4[106]]([_0x3de4x5, dx, zrC, cB, 0]);
  }
  if (this[_0x5cb4[401]]) {
    this[_0x5cb4[401]][_0x5cb4[134]](_0x5cb4[1138])[_0x5cb4[65]](this[_0x5cb4[150]][_0x5cb4[450]]);
  }
  this[_0x5cb4[406]][_0x5cb4[1139]](dx);
}, _0x5cb4[51] != typeof module && null != module && (module[_0x5cb4[529]] = Replayer), Analytics[_0x5cb4[135]][_0x5cb4[1069]] = function() {
  this[_0x5cb4[667]] = {
    finesse : null,
    scoreStamps : null
  };
}, Analytics[_0x5cb4[135]][_0x5cb4[996]] = function(canCreateDiscussions) {
  this[_0x5cb4[512]] = canCreateDiscussions;
  this[_0x5cb4[664]] = this[_0x5cb4[512]][_0x5cb4[688]];
  this[_0x5cb4[1069]]();
  this[_0x5cb4[1140]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1140]] = function() {
  this[_0x5cb4[1141]]();
  this[_0x5cb4[1142]]();
  this[_0x5cb4[1143]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1141]] = function() {
  /** @type {!Array} */
  this[_0x5cb4[1036]] = [];
  /** @type {null} */
  var _0x3de4x2 = null;
  /** @type {number} */
  var id = 0;
  for (; id < this[_0x5cb4[664]][_0x5cb4[19]]; id++) {
    if (this[_0x5cb4[664]][id][_0x5cb4[688]] === Action[_0x5cb4[119]]) {
      /** @type {(null|number)} */
      var _0x3de4x4 = null !== _0x3de4x2 ? this[_0x5cb4[664]][id][_0x5cb4[863]] - _0x3de4x2 : null;
      if (_0x3de4x4) {
        this[_0x5cb4[1036]][_0x5cb4[106]]({
          frame : id,
          deltat : _0x3de4x4
        });
      }
      _0x3de4x2 = this[_0x5cb4[664]][id][_0x5cb4[863]];
      this[_0x5cb4[664]][id][_0x5cb4[1106]] = this[_0x5cb4[1036]][_0x5cb4[19]] + 1;
    }
  }
  this[_0x5cb4[1144]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1144]] = function() {
  var count = this[_0x5cb4[1037]];
  /** @type {!Array} */
  var array = [];
  /** @type {!Array} */
  var endColorCoords = [];
  /** @type {number} */
  var i = 0;
  for (; i < this[_0x5cb4[1036]][_0x5cb4[19]]; i++) {
    array[i] = this[_0x5cb4[1036]][i][_0x5cb4[1145]];
    if (i) {
      array[i] += array[i - 1];
    }
    if (i >= count - 1) {
      /** @type {!Array} */
      endColorCoords[i] = [];
      /** @type {number} */
      endColorCoords[i][0] = array[i] - (i === count - 1 ? 0 : array[i - count]);
      /** @type {number} */
      endColorCoords[i][1] = i;
      endColorCoords[i][2] = void 0 !== this[_0x5cb4[1036]][i - (count + 1)] ? this[_0x5cb4[1036]][i - (count + 1)][_0x5cb4[981]] : this[_0x5cb4[1036]][i - count + 1][_0x5cb4[981]];
      endColorCoords[i][3] = array[i];
    }
  }
  this[_0x5cb4[1146]](endColorCoords);
}, Analytics[_0x5cb4[135]][_0x5cb4[1147]] = function() {
  var splits = document[_0x5cb4[637]](_0x5cb4[1148]);
  var validator = splits[_0x5cb4[1046]](_0x5cb4[1045]);
  var value = splits[_0x5cb4[1077]];
  var s = splits[_0x5cb4[1149]];
  /** @type {number} */
  var t = -1;
  /** @type {number} */
  var destX = 1;
  /** @type {number} */
  var val = 25;
  if (1 !== this[_0x5cb4[227]]) {
    validator[_0x5cb4[1150]](0, 0, value, s);
  }
  validator[_0x5cb4[1047]] = _0x5cb4[197];
  validator[_0x5cb4[1151]]();
  validator[_0x5cb4[1152]](val, 10);
  validator[_0x5cb4[1153]](val, s - 10);
  validator[_0x5cb4[1153]](value, s - 10);
  validator[_0x5cb4[1154]]();
  var PL$17 = this[_0x5cb4[1037]];
  for (; PL$17 < this[_0x5cb4[1155]][_0x5cb4[19]]; PL$17++) {
    /** @type {number} */
    var b = this[_0x5cb4[1037]] / (this[_0x5cb4[1155]][PL$17][0] / 1E3);
    if (b > t) {
      /** @type {number} */
      t = b;
    }
  }
  /** @type {number} */
  var w = destX = (t = Math[_0x5cb4[1156]](t)) >= 3 ? 1 : .5;
  validator[_0x5cb4[1151]]();
  validator[_0x5cb4[1047]] = _0x5cb4[1157];
  validator[_0x5cb4[1158]] = _0x5cb4[1159];
  validator[_0x5cb4[1049]] = _0x5cb4[197];
  for (; w < t;) {
    /** @type {number} */
    var $item = w / t * (s - 10);
    validator[_0x5cb4[1160]](t - w, 5, $item + 3);
    validator[_0x5cb4[1152]](val, $item);
    validator[_0x5cb4[1153]](value, $item);
    /** @type {number} */
    w = w + destX;
  }
  if (validator[_0x5cb4[1160]](_0x5cb4[783], 0, s - 10), validator[_0x5cb4[1154]](), this[_0x5cb4[1161]] = (value - val) / (this[_0x5cb4[1155]][_0x5cb4[19]] - this[_0x5cb4[1037]]), this[_0x5cb4[1162]]) {
    var PL$13 = this[_0x5cb4[640]][_0x5cb4[579]][0][_0x5cb4[660]];
    if (null === PL$13) {
      this[_0x5cb4[667]] = this[_0x5cb4[640]][_0x5cb4[1018]]();
      if (null === (PL$13 = this[_0x5cb4[667]][_0x5cb4[372]])) {
        /** @type {!Array} */
        PL$13 = [];
      }
    }
    /** @type {number} */
    PL$17 = 0;
    for (; PL$17 < PL$13[_0x5cb4[19]]; PL$17++) {
      validator[_0x5cb4[1151]]();
      validator[_0x5cb4[1047]] = _0x5cb4[1163];
      /** @type {number} */
      var value = val + (PL$13[PL$17] - 1) * this[_0x5cb4[1161]];
      validator[_0x5cb4[1152]](value, 10);
      validator[_0x5cb4[1153]](value, s - 10);
      validator[_0x5cb4[1154]]();
      validator[_0x5cb4[1049]] = _0x5cb4[1163];
      validator[_0x5cb4[1152]](value - 5, 0);
      validator[_0x5cb4[1153]](value + 5, 0);
      validator[_0x5cb4[1153]](value, 15);
      validator[_0x5cb4[1164]]();
    }
  }
  if (this[_0x5cb4[1041]]) {
    let _0x3de4x2 = this[_0x5cb4[1165]](0);
    validator[_0x5cb4[1151]]();
    /** @type {number} */
    validator[_0x5cb4[1166]] = 5;
    /** @type {!Array} */
    var _0x3de4x29 = [_0x5cb4[1167], _0x5cb4[1168], _0x5cb4[1169]];
    validator[_0x5cb4[1047]] = _0x3de4x29[this[_0x5cb4[227]]];
    validator[_0x5cb4[1152]](val, s - 10);
    var _0x3de4x2a = this[_0x5cb4[1037]];
    /** @type {number} */
    PL$17 = this[_0x5cb4[1037]] - 1;
    for (; PL$17 < this[_0x5cb4[1155]][_0x5cb4[19]]; PL$17++) {
      /** @type {number} */
      $item = _0x3de4x2[_0x5cb4[667]][PL$17 - this[_0x5cb4[1037]] + 1] / this[_0x5cb4[1037]] / (_0x3de4x2[_0x5cb4[1007]] / this[_0x5cb4[1037]]) * (s - 10);
      validator[_0x5cb4[1153]](val + (PL$17 - this[_0x5cb4[1037]] + 1) * this[_0x5cb4[1161]], s - 10 - $item);
    }
    validator[_0x5cb4[1154]]();
    /** @type {number} */
    validator[_0x5cb4[1166]] = 1;
  }
  if (this[_0x5cb4[1038]]) {
    validator[_0x5cb4[1151]]();
    /** @type {number} */
    validator[_0x5cb4[1166]] = 5;
    /** @type {!Array} */
    _0x3de4x29 = [_0x5cb4[1170], _0x5cb4[1170]];
    validator[_0x5cb4[1047]] = _0x3de4x29[this[_0x5cb4[227]]];
    validator[_0x5cb4[1152]](val, s - 10);
    _0x3de4x2a = this[_0x5cb4[1037]];
    /** @type {number} */
    PL$17 = this[_0x5cb4[1037]] - 1;
    for (; PL$17 < this[_0x5cb4[1155]][_0x5cb4[19]]; PL$17++) {
      /** @type {number} */
      $item = (_0x3de4x2a = _0x3de4x2a + 1) / (this[_0x5cb4[1155]][PL$17][3] / 1E3) / t * (s - 10);
      validator[_0x5cb4[1153]](val + (PL$17 - this[_0x5cb4[1037]] + 1) * this[_0x5cb4[1161]], s - 10 - $item);
    }
    validator[_0x5cb4[1154]]();
    /** @type {number} */
    validator[_0x5cb4[1166]] = 1;
  }
  if (this[_0x5cb4[1039]]) {
    validator[_0x5cb4[1151]]();
    /** @type {!Array} */
    _0x3de4x29 = [_0x5cb4[1048], _0x5cb4[1171]];
    validator[_0x5cb4[1047]] = _0x3de4x29[this[_0x5cb4[227]]];
    validator[_0x5cb4[1152]](val, s - 10);
    /** @type {number} */
    PL$17 = this[_0x5cb4[1037]] - 1;
    for (; PL$17 < this[_0x5cb4[1155]][_0x5cb4[19]]; PL$17++) {
      /** @type {number} */
      $item = this[_0x5cb4[1037]] / (this[_0x5cb4[1155]][PL$17][0] / 1E3) / t * (s - 10);
      validator[_0x5cb4[1153]](val + (PL$17 - this[_0x5cb4[1037]] + 1) * this[_0x5cb4[1161]], s - 10 - $item);
    }
    validator[_0x5cb4[1154]]();
  }
}, Analytics[_0x5cb4[135]][_0x5cb4[1146]] = function(serverElements) {
  this[_0x5cb4[1155]] = serverElements[_0x5cb4[24]](0);
  this[_0x5cb4[1147]]();
  var val;
  var _spring2;
  /** @type {!Array} */
  var bonusTraitModifiers = [];
  /** @type {!Array} */
  var traitsChosen = [];
  /**
   * @param {!Object} oidB
   * @param {!Object} oidA
   * @return {?}
   */
  bonusTraitModifiers[0] = function(oidB, oidA) {
    return oidB[0] > oidA[0] ? 1 : oidA[0] > oidB[0] ? -1 : 0;
  };
  /**
   * @param {!Object} aabb1
   * @param {!Object} aabb2
   * @return {?}
   */
  bonusTraitModifiers[1] = function(aabb1, aabb2) {
    return aabb1[0] < aabb2[0] ? 1 : aabb2[0] < aabb1[0] ? -1 : 0;
  };
  traitsChosen[0] = document[_0x5cb4[637]](_0x5cb4[1172]);
  traitsChosen[1] = document[_0x5cb4[637]](_0x5cb4[1173]);
  /** @type {number} */
  var trait = 0;
  for (; trait < 2; trait++) {
    serverElements[_0x5cb4[864]](bonusTraitModifiers[trait]);
    var _0x3de4x22 = _0x5cb4[1174] + i18n[_0x5cb4[1175]] + _0x5cb4[1176] + i18n[_0x5cb4[1177]] + _0x5cb4[1178];
    traitsChosen[trait][_0x5cb4[45]] = _0x3de4x22;
    /** @type {number} */
    var _0x3de4x23 = 0;
    /** @type {number} */
    var i = -1;
    /** @type {!Array} */
    var PL$13 = [];
    for (; _0x3de4x23 < 5 && ++i !== serverElements[_0x5cb4[19]] && void 0 !== serverElements[i];) {
      /** @type {boolean} */
      var _0x3de4x26 = false;
      /** @type {number} */
      var PL$17 = 0;
      for (; PL$17 < PL$13[_0x5cb4[19]]; PL$17++) {
        /** @type {number} */
        var __line_number = serverElements[i][1] - (this[_0x5cb4[1037]] - 1);
        var timestampMillis = serverElements[i][1];
        /** @type {number} */
        var __highlight_line_start = PL$13[PL$17][1] - (this[_0x5cb4[1037]] - 1);
        var __highlight_line_end = PL$13[PL$17][1];
        if (__line_number >= __highlight_line_start && __line_number <= __highlight_line_end || timestampMillis >= __highlight_line_start && timestampMillis <= __highlight_line_end) {
          /** @type {boolean} */
          _0x3de4x26 = true;
          break;
        }
      }
      if (!_0x3de4x26) {
        PL$13[_0x5cb4[106]](serverElements[i]);
        /** @type {number} */
        var _0x3de4x2c = Math[_0x5cb4[477]](this[_0x5cb4[1037]] / (serverElements[i][0] / 1E3) * 100) / 100;
        (_spring2 = document[_0x5cb4[42]](_0x5cb4[1180]))[_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[1179]);
        _spring2[_0x5cb4[48]][_0x5cb4[66]] = serverElements[i][2];
        _spring2[_0x5cb4[48]][_0x5cb4[227]] = serverElements[i][1];
        _spring2[_0x5cb4[627]](_0x5cb4[921], this[_0x5cb4[1009]][_0x5cb4[625]](this), false);
        _spring2[_0x5cb4[627]](_0x5cb4[1181], this[_0x5cb4[1182]][_0x5cb4[625]](this), false);
        _spring2[_0x5cb4[627]](_0x5cb4[1055], this[_0x5cb4[1056]][_0x5cb4[625]](this), false);
        (val = document[_0x5cb4[42]](_0x5cb4[1076]))[_0x5cb4[45]] = _0x5cb4[81] + serverElements[i][1];
        _spring2[_0x5cb4[50]](val);
        /** @type {number} */
        (val = document[_0x5cb4[42]](_0x5cb4[1076]))[_0x5cb4[45]] = serverElements[i][0] / 1E3;
        _spring2[_0x5cb4[50]](val);
        /** @type {number} */
        (val = document[_0x5cb4[42]](_0x5cb4[1076]))[_0x5cb4[45]] = _0x3de4x2c;
        _spring2[_0x5cb4[50]](val);
        traitsChosen[trait][_0x5cb4[50]](_spring2);
        _0x3de4x23++;
      }
    }
  }
}, Analytics[_0x5cb4[135]][_0x5cb4[1183]] = function(wikipedia_title) {
  var title = wikipedia_title;
  return _0x5cb4[1184] === title[_0x5cb4[1185]] && (title = title[_0x5cb4[649]]), title;
}, Analytics[_0x5cb4[135]][_0x5cb4[1182]] = function(canCreateDiscussions) {
  this[_0x5cb4[1050]][_0x5cb4[1077]];
  var _0x3de4x3 = this[_0x5cb4[1050]][_0x5cb4[1149]];
  var _0x3de4x4 = this[_0x5cb4[1183]](canCreateDiscussions[_0x5cb4[1186]])[_0x5cb4[48]][_0x5cb4[227]];
  /** @type {number} */
  this[_0x5cb4[1052]][_0x5cb4[1187]] = .5;
  this[_0x5cb4[1052]][_0x5cb4[1049]] = _0x5cb4[927];
  this[_0x5cb4[1052]][_0x5cb4[1188]](25 + (_0x3de4x4 - this[_0x5cb4[1037]] + 1 - this[_0x5cb4[1037]]) * this[_0x5cb4[1161]], 10, this[_0x5cb4[1037]] * this[_0x5cb4[1161]], _0x3de4x3 - 20);
}, Analytics[_0x5cb4[135]][_0x5cb4[1056]] = function(canCreateDiscussions) {
  this[_0x5cb4[1052]][_0x5cb4[1150]](0, 0, this[_0x5cb4[1050]][_0x5cb4[1077]], this[_0x5cb4[1050]][_0x5cb4[1149]]);
}, Analytics[_0x5cb4[135]][_0x5cb4[1009]] = function(canCreateDiscussions) {
  /** @type {number} */
  var normalized_images = parseInt(this[_0x5cb4[1183]](canCreateDiscussions[_0x5cb4[1186]])[_0x5cb4[48]][_0x5cb4[66]]);
  if (!isNaN(normalized_images) && normalized_images >= 0) {
    this[_0x5cb4[640]][_0x5cb4[1009]](normalized_images);
  }
}, Analytics[_0x5cb4[135]][_0x5cb4[1008]] = function(canCreateDiscussions) {
  /** @type {number} */
  var normalized_images = parseInt(this[_0x5cb4[1183]](canCreateDiscussions[_0x5cb4[1186]])[_0x5cb4[48]][_0x5cb4[863]]);
  if (!isNaN(normalized_images) && normalized_images >= 0) {
    this[_0x5cb4[640]][_0x5cb4[1008]](normalized_images);
  }
}, Analytics[_0x5cb4[135]][_0x5cb4[1189]] = function(newDeriv) {
  var deriv = this[_0x5cb4[1050]][_0x5cb4[1190]]();
  /** @type {number} */
  var damping = this[_0x5cb4[1050]][_0x5cb4[1077]] / deriv[_0x5cb4[1077]];
  /** @type {number} */
  var zerodBFS = this[_0x5cb4[1050]][_0x5cb4[1149]] / deriv[_0x5cb4[1149]];
  var csoundInputBuffer = {};
  return csoundInputBuffer[_0x5cb4[1191]] = (newDeriv[_0x5cb4[1192]] - deriv[_0x5cb4[1193]]) * damping, csoundInputBuffer[_0x5cb4[1194]] = (newDeriv[_0x5cb4[1195]] - deriv[_0x5cb4[1196]]) * zerodBFS, csoundInputBuffer[_0x5cb4[1191]] < 25 && (csoundInputBuffer[_0x5cb4[1191]] = 25), csoundInputBuffer;
}, Analytics[_0x5cb4[135]][_0x5cb4[1054]] = function(magnifier) {
  var $magnifier = this[_0x5cb4[1189]](magnifier);
  this[_0x5cb4[1056]]();
  this[_0x5cb4[1052]][_0x5cb4[1047]] = _0x5cb4[1197];
  this[_0x5cb4[1052]][_0x5cb4[1049]] = _0x5cb4[1197];
  this[_0x5cb4[1052]][_0x5cb4[1151]]();
  this[_0x5cb4[1052]][_0x5cb4[1152]]($magnifier.X, 10);
  this[_0x5cb4[1052]][_0x5cb4[1153]]($magnifier.X, this[_0x5cb4[1050]][_0x5cb4[1149]] - 10);
  this[_0x5cb4[1052]][_0x5cb4[1154]]();
  this[_0x5cb4[1052]][_0x5cb4[1152]]($magnifier[_0x5cb4[1191]] - 5, 0);
  this[_0x5cb4[1052]][_0x5cb4[1153]]($magnifier[_0x5cb4[1191]] + 5, 0);
  this[_0x5cb4[1052]][_0x5cb4[1153]]($magnifier.X, 15);
  this[_0x5cb4[1052]][_0x5cb4[1164]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1057]] = function(magnifier) {
  var $magnifier = this[_0x5cb4[1189]](magnifier);
  var indexLookupKey = Math[_0x5cb4[477]](($magnifier[_0x5cb4[1191]] - 25) / this[_0x5cb4[1161]]) + (this[_0x5cb4[1037]] - 1);
  this[_0x5cb4[640]][_0x5cb4[1009]](this[_0x5cb4[1155]][indexLookupKey][2]);
}, Analytics[_0x5cb4[135]][_0x5cb4[1061]] = function(canCreateDiscussions) {
  this[_0x5cb4[1038]] = document[_0x5cb4[637]](_0x5cb4[1061])[_0x5cb4[1058]];
  this[_0x5cb4[1147]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1062]] = function(canCreateDiscussions) {
  this[_0x5cb4[1162]] = document[_0x5cb4[637]](_0x5cb4[1062])[_0x5cb4[1058]];
  this[_0x5cb4[1147]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1060]] = function(canCreateDiscussions) {
  this[_0x5cb4[1039]] = document[_0x5cb4[637]](_0x5cb4[1060])[_0x5cb4[1058]];
  this[_0x5cb4[1147]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1059]] = function(canCreateDiscussions) {
  this[_0x5cb4[1040]] = document[_0x5cb4[637]](_0x5cb4[1059])[_0x5cb4[1058]];
  if (!this[_0x5cb4[1040]]) {
    this[_0x5cb4[1044]][_0x5cb4[1150]](0, 0, this[_0x5cb4[1042]][_0x5cb4[1077]], this[_0x5cb4[1042]][_0x5cb4[1149]]);
  }
}, Analytics[_0x5cb4[135]][_0x5cb4[1063]] = function(canCreateDiscussions) {
  this[_0x5cb4[1041]] = document[_0x5cb4[637]](_0x5cb4[1063])[_0x5cb4[1058]];
  this[_0x5cb4[1147]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1108]] = function(headB) {
  /** @type {!Array} */
  var cacheB = headB;
  if (this[_0x5cb4[1040]]) {
    this[_0x5cb4[1044]][_0x5cb4[1150]](0, 0, this[_0x5cb4[1042]][_0x5cb4[1077]], this[_0x5cb4[1042]][_0x5cb4[1149]]);
    this[_0x5cb4[1044]][_0x5cb4[1151]]();
    /** @type {number} */
    var hexRadius = 25 + (headB = Math[_0x5cb4[1007]](headB - this[_0x5cb4[1037]], 0)) * this[_0x5cb4[1161]];
    this[_0x5cb4[1044]][_0x5cb4[1152]](hexRadius, 10);
    this[_0x5cb4[1044]][_0x5cb4[1153]](hexRadius, this[_0x5cb4[1042]][_0x5cb4[1149]] - 10);
    this[_0x5cb4[1044]][_0x5cb4[1154]]();
    var newx = Math[_0x5cb4[241]](this[_0x5cb4[1037]], cacheB - 1);
    this[_0x5cb4[1044]][_0x5cb4[1151]]();
    this[_0x5cb4[1044]][_0x5cb4[1198]]([5, 5]);
    this[_0x5cb4[1044]][_0x5cb4[1152]](hexRadius, this[_0x5cb4[1042]][_0x5cb4[1149]] - 12);
    this[_0x5cb4[1044]][_0x5cb4[1153]](hexRadius + this[_0x5cb4[1161]] * newx, this[_0x5cb4[1042]][_0x5cb4[1149]] - 12);
    this[_0x5cb4[1044]][_0x5cb4[1153]](hexRadius + this[_0x5cb4[1161]] * newx, 10);
    this[_0x5cb4[1044]][_0x5cb4[1154]]();
    this[_0x5cb4[1044]][_0x5cb4[1198]]([]);
    this[_0x5cb4[1044]][_0x5cb4[1151]]();
    this[_0x5cb4[1044]][_0x5cb4[1152]](hexRadius - 5, 0);
    this[_0x5cb4[1044]][_0x5cb4[1153]](hexRadius + 5, 0);
    this[_0x5cb4[1044]][_0x5cb4[1153]](hexRadius, 15);
    this[_0x5cb4[1044]][_0x5cb4[1164]]();
  }
}, Analytics[_0x5cb4[135]][_0x5cb4[1143]] = function() {
  var payloadKeyObject = document[_0x5cb4[637]](_0x5cb4[1199]);
  var embed = _0x5cb4[5];
  /** @type {number} */
  var _0x3de4x4 = 0;
  var PL$13 = Object[_0x5cb4[64]](this[_0x5cb4[640]][_0x5cb4[579]][0][_0x5cb4[432]].A);
  /** @type {number} */
  var PL$17 = 2;
  for (; PL$17 < PL$13[_0x5cb4[19]]; PL$17++) {
    embed = embed + (_0x5cb4[1200] + PL$17 + _0x5cb4[1201] + PL$17 + _0x5cb4[1202] + PL$17 + _0x5cb4[1203] + PL$13[PL$17] + _0x5cb4[1204]);
    if (6 === ++_0x3de4x4) {
      payloadKeyObject[_0x5cb4[45]] = embed;
      embed = _0x5cb4[5];
      payloadKeyObject = document[_0x5cb4[637]](_0x5cb4[1205]);
    }
  }
  payloadKeyObject[_0x5cb4[45]] = embed;
  document[_0x5cb4[637]](_0x5cb4[1206])[_0x5cb4[627]](_0x5cb4[921], this[_0x5cb4[1206]][_0x5cb4[625]](this), false);
}, Analytics[_0x5cb4[135]][_0x5cb4[1206]] = function() {
  var PL$13 = Object[_0x5cb4[64]](this[_0x5cb4[640]][_0x5cb4[579]][0][_0x5cb4[432]].A);
  /** @type {number} */
  var PL$17 = 2;
  for (; PL$17 < PL$13[_0x5cb4[19]]; PL$17++) {
    this[_0x5cb4[1070]][PL$17] = document[_0x5cb4[637]](_0x5cb4[1207] + PL$17)[_0x5cb4[1058]];
  }
  this[_0x5cb4[1142]]();
}, Analytics[_0x5cb4[135]][_0x5cb4[1208]] = function() {
  var _0x3de4x2 = this[_0x5cb4[667]][_0x5cb4[661]];
  return null === _0x3de4x2 && (this[_0x5cb4[667]] = this[_0x5cb4[640]][_0x5cb4[1018]](), null === (_0x3de4x2 = this[_0x5cb4[667]][_0x5cb4[661]]) && (_0x3de4x2 = [])), _0x3de4x2;
}, Analytics[_0x5cb4[135]][_0x5cb4[1165]] = function(canCreateDiscussions) {
  /** @type {number} */
  var v = 0 === canCreateDiscussions ? 2 : 4;
  var axisValues = this[_0x5cb4[1208]]();
  /** @type {number} */
  var k = 0;
  /** @type {number} */
  var c = 0;
  /** @type {number} */
  var height = 0;
  /** @type {!Array} */
  var options = [];
  /** @type {number} */
  var highestValue = 0;
  /** @type {number} */
  var newcolor = 0;
  /** @type {number} */
  var endTime = 0;
  /** @type {number} */
  var X = 0;
  /** @type {number} */
  var i = this[_0x5cb4[1037]] - 1;
  for (; i < this[_0x5cb4[1155]][_0x5cb4[19]]; i++) {
    /** @type {number} */
    endTime = (newcolor = i - Math[_0x5cb4[2]](this[_0x5cb4[1155]][_0x5cb4[19]] / 100) * this[_0x5cb4[1037]]) <= this[_0x5cb4[1037]] - 1 ? 0 : this[_0x5cb4[1155]][newcolor][3] - this[_0x5cb4[1155]][newcolor][0];
    X = this[_0x5cb4[1155]][i][3];
    for (; c < axisValues[_0x5cb4[19]] && axisValues[c][0] <= X;) {
      height = height + axisValues[c][v];
      c++;
    }
    for (; k < axisValues[_0x5cb4[19]] && axisValues[k][0] < endTime;) {
      /** @type {number} */
      height = height - axisValues[k][v];
      k++;
    }
    var y = height;
    options[_0x5cb4[106]](y);
  }
  /** @type {number} */
  var stepSize = this[_0x5cb4[1155]][_0x5cb4[19]] / 30;
  /** @type {!Array} */
  var maps = [];
  /** @type {number} */
  i = 0;
  for (; i < options[_0x5cb4[19]]; i++) {
    let value = 0;
    /** @type {number} */
    var j = i;
    for (; j < i + stepSize && j < options[_0x5cb4[19]]; j++) {
      value = value + options[j];
    }
    /** @type {number} */
    value = value / stepSize;
    if (value > highestValue) {
      highestValue = Math[_0x5cb4[1156]](value);
    }
    maps[_0x5cb4[106]](value);
  }
  return {
    data : maps,
    max : highestValue
  };
}, Analytics[_0x5cb4[135]][_0x5cb4[1142]] = function() {
  var PL$13 = this[_0x5cb4[1208]]();
  var moveLen = this[_0x5cb4[640]][_0x5cb4[579]][0][_0x5cb4[432]];
  var _0x3de4x4 = Object[_0x5cb4[64]](moveLen.A);
  this[_0x5cb4[1065]][_0x5cb4[45]] = _0x5cb4[5];
  var _spring2;
  var val;
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13[_0x5cb4[19]]; PL$17++) {
    if (!(void 0 !== this[_0x5cb4[1070]][PL$13[PL$17][1]] && false === this[_0x5cb4[1070]][PL$13[PL$17][1]])) {
      (_spring2 = document[_0x5cb4[42]](_0x5cb4[1180]))[_0x5cb4[645]][_0x5cb4[386]](_0x5cb4[1179]);
      _spring2[_0x5cb4[48]][_0x5cb4[863]] = PL$13[PL$17][0];
      _spring2[_0x5cb4[627]](_0x5cb4[921], this[_0x5cb4[1008]][_0x5cb4[625]](this), false);
      (val = document[_0x5cb4[42]](_0x5cb4[1076]))[_0x5cb4[45]] = sprintTimeFormat(PL$13[PL$17][0] / 1E3);
      _spring2[_0x5cb4[50]](val);
      (val = document[_0x5cb4[42]](_0x5cb4[1076]))[_0x5cb4[45]] = _0x3de4x4[PL$13[PL$17][1]] + (PL$13[PL$17][1] === moveLen[_0x5cb4[115]][_0x5cb4[132]] ? _0x5cb4[368] + PL$13[PL$17][3] : _0x5cb4[5]);
      _spring2[_0x5cb4[50]](val);
      (val = document[_0x5cb4[42]](_0x5cb4[1076]))[_0x5cb4[45]] = PL$13[PL$17][2];
      _spring2[_0x5cb4[50]](val);
      this[_0x5cb4[1065]][_0x5cb4[50]](_spring2);
    }
  }
}, SimpleStatsManager[_0x5cb4[135]][_0x5cb4[1209]] = function(name) {
  var base = localStorage[_0x5cb4[1211]](_0x5cb4[1210]);
  if (null != base && (100 === name && (name = 0), (base = base[_0x5cb4[825]](_0x5cb4[841])[_0x5cb4[63]]((id_local) => {
    return parseInt(id_local);
  }))[name])) {
    this[_0x5cb4[1212]] = base[name];
  } else {
    /** @type {number} */
    this[_0x5cb4[1212]] = 741 + (5 === name);
  }
}, SimpleStatsManager[_0x5cb4[135]][_0x5cb4[1072]] = function(canCreateDiscussions) {
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[1213], i18n[_0x5cb4[1214]], 0));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[1138], i18n[_0x5cb4[450]], 10));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[428], _0x5cb4[788], 15));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[462], i18n[_0x5cb4[465]], 20));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[1112], i18n[_0x5cb4[1216]], 30));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[1107], i18n[_0x5cb4[372]], 40));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[783], i18n.PPS, 50));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[497], i18n.KPP, 60));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[781], i18n.APM, 70));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[495], _0x5cb4[1217], 80));
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[784], _0x5cb4[784], 90), false);
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[509], _0x5cb4[1218], 100), false);
  this[_0x5cb4[1215]](new StatLine(_0x5cb4[402], _0x5cb4[1219], 110), false);
  this[_0x5cb4[1071]][0][_0x5cb4[1074]] = _0x5cb4[1220];
}, SimpleStatsManager[_0x5cb4[135]][_0x5cb4[1221]] = function() {
  let _0x3de4x2 = this[_0x5cb4[406]][_0x5cb4[1222]];
  for (; _0x3de4x2[_0x5cb4[851]];) {
    _0x3de4x2[_0x5cb4[851]][_0x5cb4[708]]();
  }
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x5cb4[1071]][_0x5cb4[19]]; indexLookupKey++) {
    /** @type {boolean} */
    this[_0x5cb4[1071]][indexLookupKey][_0x5cb4[629]] = false;
  }
  /** @type {number} */
  indexLookupKey = 0;
  for (; indexLookupKey <= Math[_0x5cb4[1156]](Math[_0x5cb4[1223]](this[_0x5cb4[1212]])); indexLookupKey++) {
    if (this[_0x5cb4[1212]] & 1 << indexLookupKey) {
      let artistTrack = document[_0x5cb4[42]](_0x5cb4[1180]);
      artistTrack[_0x5cb4[50]](this[_0x5cb4[1071]][indexLookupKey][_0x5cb4[1075]]);
      artistTrack[_0x5cb4[50]](this[_0x5cb4[1071]][indexLookupKey][_0x5cb4[1079]]);
      /** @type {boolean} */
      this[_0x5cb4[1071]][indexLookupKey][_0x5cb4[629]] = true;
      this[_0x5cb4[1071]][indexLookupKey][_0x5cb4[1079]][_0x5cb4[467]] = this[_0x5cb4[1071]][indexLookupKey][_0x5cb4[1074]];
      this[_0x5cb4[406]][_0x5cb4[1222]][_0x5cb4[50]](artistTrack);
    }
  }
}, SimpleStatsManager[_0x5cb4[135]][_0x5cb4[1215]] = function(mmCoreSplitViewBlock) {
  this[_0x5cb4[1071]][_0x5cb4[106]](mmCoreSplitViewBlock);
}, SimpleStatsManager[_0x5cb4[135]][_0x5cb4[871]] = function() {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x5cb4[1071]][_0x5cb4[19]]; indexLookupKey++) {
    this[_0x5cb4[1071]][indexLookupKey][_0x5cb4[703]]();
  }
}, StatLine[_0x5cb4[135]][_0x5cb4[703]] = function() {
  return this[_0x5cb4[65]](this[_0x5cb4[1074]]), this;
}, StatLine[_0x5cb4[135]][_0x5cb4[65]] = function(canCreateDiscussions) {
  return this[_0x5cb4[629]] && canCreateDiscussions != this[_0x5cb4[43]] && (this[_0x5cb4[43]] = canCreateDiscussions, this[_0x5cb4[1079]][_0x5cb4[467]] = canCreateDiscussions), this;
}, SimpleStatsManager[_0x5cb4[135]][_0x5cb4[134]] = function(value) {
  return this[_0x5cb4[1071]][_0x5cb4[1224]]((htmlvalue) => {
    return htmlvalue[_0x5cb4[44]] === value;
  });
};
