// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
/** @type {!Array} */
var _0x77fc = ["use strict", "canvas", "myCanvas", "getElementById", "holdCanvas", "queueCanvas", "v", "bgCanvas", "bgLayer", "bgctx", "2d", "getContext", "GS", "roomCapacity", "connectStatusElement", "connectStatus", "rInfoBox", "practiceMenu", "practiceMenuBig", "practice-menu-big", "teamInfo", "sprintInfo", "lrem", "fpsElement", "fps", "block_size", "debug", "SEenabled", "VSEenabled", "SEStartEnabled", "SEFaultEnabled", "SErotate", "WebAudioPlugin", "registerPlugins", "Sound", "volume", "tex", 
"tex2", "src", "/res/tex2.png", "drawScale", "skinId", "ghostTex", "ghostSkinId", "ghostSkins", "Default", "", "Custom", "SFXset", "VSFXset", "play", "gameEnded", "hdAbort", "lastSeen", "isTabFocused", "pmode", "livePmode", "selectedPmode", "sprintMode", "sprintModeToRun", "sprintModes", "cheeseModes", "ultraModes", "cheeseLevel", "maxCheeseHeight", "minCheeseHeight", "lastHolePos", "starting", "activeBlock", "ghostPiece", "timer", "lastSnapshot", "clock", "frames", "baseGravity", "currentGravity", 
"softDrop", "softDropId", "holdPressed", "hardDropPressed", "lastDAS", "firstDAS", "DASdebug", "ARRtime", "pressedDir", "ARRon", "DASto", "DASmethod", "lockDelayActive", "lockDelayActivated", "lastAction", "lastGeneration", "lockDelay", "maxLockDelayWithoutLock", "maxWithoutLock", "holdUsedAlready", "temporaryBlockSet", "redBar", "incomingGarbage", "solidHeight", "solidToAdd", "solidInterval", "solidProfiles", "garbageCols", "blockInHold", "focusState", "statsEnabled", "statsMode", "placedBlocks", 
"lastPlacements", "finesse", "totalFinesse", "totalKeyPresses", "place", "redrawBlocked", "linesAttackDef", "linesAttack", "cheeseHeight", "ghostEnabled", "getPPS", "getCumulativePPS", "comboAttackDef", "comboAttack", "comboCounter", "fourWideFlag", "PCdata", "linesRemaining", "inactiveGamesCount", "xbuffMask", "replayPartsSent", "transmitMode", "fragmentCounter", "liveSnapRate", "snapRate", "soundQ", "RNG", "timestamp", "blockRNG", "blockSeed", "bigTriggered", "bigChance", "interval", "animator", 
"call", "RulesetManager", "conf", "applyRule", "R", "ruleSetChange", "setActiveMode", "Settings", "startWebGL", "init", "Caption", "stage", "Live", "Replay", "Scoring", "MapManager", "ModeManager", "GameStats", "Mobile", "Report", "setLockDelay", "gravityLvl", "applyGravityLvl", "changeSkin", "initSFX", "setupSwipeControl", "setupGameLinks", "prototype", "create", "display", "style", "block", "none", "g", "matrix", "clearPositions", "clearDelay", "t", "IS_SOLID", "MAIN", "HOLD", "QUEUE", "NAME", 
"fontSize", "glstats", "ctx", "availableLines", "resizeCanvas", "ctxs", "webGL", "colorsInTexture", "shaders", "attribute vec4 a_position;     attribute vec2 a_texcoord;     uniform mat4 u_matrix;     uniform mat4 u_textureMatrix;     varying vec2 v_texcoord;     void main() {     gl_Position = u_matrix * a_position;     v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;     }", "precision mediump float;     varying vec2 v_texcoord;     uniform sampler2D u_texture;     uniform float globalAlpha;     void main() {     gl_FragColor = texture2D(u_texture, v_texcoord);     gl_FragColor.rgb *= gl_FragColor.a * globalAlpha;     }", 
"videoSkin", "video", "sdfs", "attribute vec2 a_pos;     attribute vec2 a_texcoord;     uniform mat4 u_matrix;     uniform vec2 u_texsize;     varying vec2 v_texcoord;     void main() {     gl_Position = u_matrix * vec4(a_pos.xy, 0, 1);     v_texcoord = a_texcoord / u_texsize;     }", "precision mediump float;     uniform sampler2D u_texture;     uniform vec4 u_color;     uniform float u_buffer;     uniform float u_gamma;     varying vec2 v_texcoord;     void main() {     float dist = texture2D(u_texture, v_texcoord).r;     float alpha = smoothstep(u_buffer - u_gamma, u_buffer + u_gamma, dist);     gl_FragColor = vec4(u_color.rgb, alpha * u_color.a);     }", 
"elem", "gl", "getWebGLcontext", "program", "createProgram", "useProgram", "clearColor", "registerContextAttrUnifs", "a_pos", "enableVertexAttribArray", "a_texcoord", "m4", "MAX_STR_LEN", "verElem", "texElem", "blendFuncSeparate", "enable", "textureInfo", "createTexture", "vertexBuffer", "createBuffer", "textureBuffer", "ready", "scale", "gamma", "defaultGlyphW", "glParamsSet", "ISGAME", "randomizer", "deadline", "blockSets", "softDropSpeeds", "blockIds", "queue", "queueLength", "length", "gamedata", 
"skins", "None", "/res/b1.png", "Pixel", "/res/b2.png?v2", "Glass", "/res/b3.png?v2", "Gradient", "/res/b4.png?v2", "Nullpomino4", "/res/b5.png", "Invisible", "Mono", "Eyebites", "/res/b8.png", "Retro", "/res/b9.png", "Color Cubes", "/res/b10.png", "Simple", "/res/b11.png", "Color Blocks", "/res/b12.png", "Critter", "/res/b13.png", "customSkinPath", "spinPossible", "spinMiniPossible", "tspinMiniPossible", "isBack2Back", "wasBack2Back", "isInvisibleSkin", "monochromeSkin", "cids", "coffset", "colors", 
"black", "#D70F37", "#E35B02", "#E39F02", "#59B101", "#0F9BD7", "#2141C6", "#AF298A", "#999999", "#6A6A6A", "white", "colorsV3", "NullCol", "#E4203E", "#E47E30", "#E3CF3C", "#1DE03D", "#00C9DF", "#0042DC", "#9E2CDC", "#585858", "multipleNames", "Single", "Double", "Triple", "Quadruple", "Multiple", "excludedBlocksAS", "Items", "DEF", "rnd", "initRandomizer", "usebag", "push", "bag", "slice", "n", "id", "getBlock", "floor", "indexOf", "lastIndex", "hist", "i", "nextSegment", "bsArr", "EXPECTED_BLOCKS", 
"set", "version", "v1.39.5", "serverScheme", "srvScheme", "tryProxy", "revProxy", "server", "srv", "port", "authorized", "name", "authReady", "connected", "sitout", "socket", "p", "cid", "conAttempts", "sTier", "isProxy", "servers", "serverId", "joinRemote", "createRoomRequest", "connectionTimeout", "clients", "players", "bots", "authList", "places", "notPlaying", "rid", "rc", "rcS", "roomConfig", "gid", "lastGameId", "currentTarget", "winnerCID", "iAmHost", "xbufferEnabled", "xbuffer", "urlPlayParamApplied", 
"msgCount", "chatBox", "ch1", "friendsBox", "ch2", "chatArea", "chatContent", "friendsBtn", "frLobby", "chatInput", "chatInputArea", "chatButton", "sendMsg", "resetButton", "res", "resetProgress", "span", "createElement", "btn-progress", "add", "classList", "appendChild", "width", "0%", "teamOptions", "team-options", "tsArea", "myTeam", "resultsBox", "resultsContent", "moreResults", "moreData", "saveLink", "moreVisible", "statsSent", "lobbyVisible", "lobbyInfoShown", "chatAtBottom", "lobbyBox", "lobbyContent", 
"refreshLobbyButton", "refreshLobby", "setupLobbyHandlers", "RoomInfo", "adjustForCustomLayout", "editRoomButton", "createRoomDialog", "createRoom", "roomNameInput", "roomName", "isPrivateInput", "isPrivate", "chatName", "textContent", "sendButton", "roomJoinTimes", "LiveGameRunning", "liveMode", "pingSent", "emoteAutocomplete", ":", "minimalLengthForHint", "nameAutocomplete", "@", "bind", "map", "values", "prefixInSearch", "sessX", "get", "hostStartMode", "noFourWide", "solidAfter", "liveSeed", 
"liveMap", "livePmodeTypes", "team", "teamSwitchDisabled", "teamButtons", "gdm", "gdms", "targets", "divide", "toAll", "toLeast", "toMost", "toSelf", "random", "roulette", "gDelay", "sgProfile", "playingOfflineWarningShown", "loadMapForOpponents", "Friends", "connecting", "loading", "connect", "type", "rep", "mod", "auth", "color", "icon", "l", "roomDetailBox", "timeoutRequestDetail", "timeoutRoomDetail", "rdParts", "roomDetails", "ON_OFF", "off", "on", "CONF_NAMES", "Attack table", "Combo table", 
"Lock delay", "Clear delay", "ms", "G-distrib.", "G-blocking", "full", "limited", "instant", "Randomizer", "7bag", "14bag", "Classic", "1Block", "2Block", "1x7bag", "1x14bag", "C2Sim", "7b-RR", "BSb-7b", "BB-7b", "Previews", "Hold", "Blocks", "Big", "ARS", "Penta", "M123", "All28", "C2RS", "OSpin", "Gravity", "Messiness", "%", "G-delay", "HostStart", "G-invert", "G-gap", "noFW", "SolidAtk", "AllSpin", " - Im.", " - 4P", "AS-Excl.", "Solid", "0", "1", "2", "Custom speed", "LIMIT_NAMES", "APM", "sprint", 
"s", "gTimeShort", "hrs", "box", "settingsBox", "touchEnabledBox", "touch", "soundEnabledBox", "esound", "DMsoundBox", "DMsound", "SEEnabledBox", "SE", "VSEEnabledBox", "vSE", "sfxSelect", "vsfxSelect", "SEStartEnabledBox", "SEstart", "SErotateEnabledBox", "SErot", "SEFaultEnabledBox", "SEfault", "monoColorInp", "monoColor", "statOptId", "settingBoxes", "DAS", "ARR", "settingsSaveBtn", "settingsSave", "onclick", "closeSettings", "settingsResetBtn", "settingsReset", "resetSettings", "mainDiv", "main", 
"moreSkins", "skinsLoaded", "inputBoxes", "input", "onkeydown", "onControlKeySet", "webGlStartFailed", "BAN_ARTIFACT_KEY", "room3", "mc", "auto", "preventZoomHandler", "preventZoom", "touchActuallyUsed", "monochromePicker", "registerColorPicker", "gamepadFound", "statGameModeSelect", "onchange", "onStatGameModeChange", "statCheckboxes", "statCheckbox", "getElementsByClassName", "stat", "onStatCheckboxChange", "srcElement", "soundDesc", "audioCred", "soundDesc2", "audioCred2", "data", "value", "author", 
"table-row", "innerHTML", "gsDiv", "gameSlots", "chatExp", "chatExpand", "w", "offsetWidth", "h", "offsetHeight", "slotHeight", "matrixHeight", "slotWidth", "matrixWidth", "zoom", "isFullscreen", "forceExtended", "slotStats", "checked", "fsSlots", "hqSlots", "zoomControl", "cidSlots", "nameFontSize", "nameHeight", "redBarWidth", "slots", "targetSlotId", "shownSlots", "extendedView", "isExtended", "extendedAvailable", "skinOverride", "baseSize", "rowCount", "liveBlockSize", "holdQueueBlockSize", "blocksY", 
"chatExpanded", "resultsShown", "setup", "teamTags", "tagHeight", "teamData", "teamMembers", "gs", "x", "y", "pCan", "bgCan", "holdCan", "queueCan", "layer", "mainLayer", "mp-holdCan", "mp-queueCan", "slotDiv", "div", "stageDiv", "stats", "slot", "statsDiv", "unsel", "pps", "apm", "ppsTitle", "apmTitle", "statLine", "winCounter", "wins", "ti", "PPS", "0.00", "bg", "hold", "hctx", "qctx", "QueueHoldEnabled", "replaySEset", "skinWidth", "ordered", "dirty", "labelsElem", "statLabels", "shown", "isPmode", 
"shownStats", "initDefault", "setView", "order", "manager", "enabled", "label", "initialVal", "resets", "locked", "parent", "captions", "SPECTATOR_MODE", "OUT_OF_FOCUS", "READY_GO", "GAME_PLACE", "SPEED_LIMIT", "MAP_LOADING", "NEW_PERSONAL_BEST", "LOADING", "RACE_FINISHED", "GAME_WARNING", "MODE_INFO", "MODE_COMPLETE", "PAUSED", "BUTTON", "speedTimout", "isMobile", "showPlBtn", "draggingEnabled", "initForMobile", "a", "Action", "freeze", "AUX", "AuxBits", "GARBAGE_ADD", "REDBAR_SET", "ARR_MOVE", 
"config", "actions", "string", "md5", "mode", "isAfkMode", "afkQueue", "stream", "onSaved", "onMoveAdded", "byteLength", "fromCharCode", "btoa", "Unknown endianness!", "Aborted", "datapos", "bitpos", "wordSize", "byte", "modeMenu", "mode-menu", "pmodeRuleId", "RULE_KEYS", "showPreviews", "holdEnabled", "baseBlockSet", "mess", "gapW", "gInv", "gblock", "tsdOnly", "allSpin", "speedLimit", "scoreMult", "clearLines", "sfx", "vsfx", "solidAttack", "ext", "PRESET_KEYS", "sgpA", "RULESETS", "Normal settings", 
"Big mode", "big", "Blocks are larger than normal", "Pentomino", "pentomino", "Pentomino blocks", "MPH", "Memoryless, previewless, holdless", "MODES", "20", "20L", "40", "40L", "100", "100L", "1K", "1000L", "cheese", "10", "10L", "18", "18L", "&infin;", "survival", "1g/s", "ultra", "2min", "20TSD", "PCmode", "freePlay", "combo", "isOpen", "rs1", "ruleSel1", "registerCombo", "reportWin", "reportU", "icn", "warnI", "rReTxt", "repUser", "itmBox", "itmIcn", "itmTxt", "itmDef", "Tblocks", "/res/img/i/tpieces.png", 
"Tornado", "/res/img/i/tornado.png", "Compress", "/res/img/i/compress.png", "Fourwide", "/res/img/i/four.png", "Poison", "/res/img/i/poison.png", "/res/img/i/pento.png", "/res/img/i/big.png", "Invert", "/res/img/i/invert.png", "Mystery", "/res/img/i/unknown.png", "Win", "/res/img/i/win.png", "B1", "/res/img/i/dot.png", "Big2", "item", "key", "origBBS", "P1", "fs", "f", "isPriv", "active", "preload", "dom", "getDate", "items", "tmpMatrix", "invertMatrix", "PER_ROUND", "hadGhost", "d", "redraw", "setCurrentPieceToDefaultPos", 
"updateGhostPiece", "hd", "uri", "jwt", "reconnects", "forcedReconDelay", "pendingStatus", "friendsOpened", "friendsCount", "openChatName", "friends", "openFriends", "notifElem", "chatHeader", "dmChatBackButton", "unreadChannels", "lastNotifSound", "friendsError", "statusData", "VIEW_MODE", "viewIntro", "inp", "hintParent", "prfx", "hints", "hintsImg", "initEmoteHints", "maxPerHint", "addEmoteSurrounder", "wipePrevious", "onWiped", "preProcessEmotes", "onEmoteObjectReady", "moreEmotesAdded", "selectedIndex", 
"hintsElem", "chatHints", "emoteIndex", "container", "openBtn", "path", "groupEmotes", "constructor", "rollBigSpawn", "loadGhostSkin", "loadTexture", "cdn", "/res/b/", ".png", "redrawAll", "removeAllSounds", "SFXsetID", "VSFXsetID", "changeSFX", "v_", "loadSounds", "linefall", "lock", "harddrop", "rotate", "success", "garbage", "b2b", "land", "move", "died", "go", "golive", "ding", "msg", "fault", "pickup", "splice", "getSoundUrlFromObj", "registerSound", "_idHash", "loadSounds error: src parse / cannot init plugins, id=", 
", rs=false", ", no _idHash", "error", "sndObj", "scoring", "b2bScoring", "isArray", "bs", "spawns", "b_", "comboTones", "c", "maxCombo", "cnt", "duration", "spacing", "getSoundUrl", "registerSounds", "drawBgGrid", "height", "rect", "fillStyle", "#000000", "fill", "beginPath", "lineWidth", "moveTo", "lineTo", "strokeStyle", "#101010", "stroke", "#202020", "#393939", "strokeRect", "startPractice", "isLivePmode", "showOfflineWarning", "adjustToValidMode", "m", "r", "generatePracticeQueue", "updateQueueBox", 
"sprintInfoLineContent", "toggleMorePractice", "resetUI", "callback", "sendPracticeModeStarting", "readyGo", "setLrem", "clearMainCanvas", "clearQueueCanvas", "clearHoldCanvas", "mapLoading", "onMapReady", "mapForOpponents", "mapData", "loadMap", "mapId", "redrawMatrix", "prepare", "appendRule", "clearMatrix", "adjustToGameMode", "onReady", "hide", "initialExecCommands", "hideExcept", "beforeReset", "seed", "maxSlots", "clear", "generateLiveQueue", "startReadyGo", "redrawHoldBox", "playSound", "restart", 
"getPlace", "gamePlace", "getPlaceColor", "th", "st", "nd", "rd", "yellow", "orange", "#FC6D3D", "#00BFFF", "str", "start", "generateQueue", "getNextBlock", "run", "onReset", "spectatorMode", "setSpeedLimit", "resetGameData", "stop", "comboTableTimer", "cheeseModeStart", "lastGarbage", "addGarbage", "isSoftDropFasterThanGravity", "softDropSet", "outOfFocus", "reorder", "onGameStart", "cancelSolid", "gameStart", "bbs", "mClr", "touchControlsEnabled", "bp", "substring", "se", "das", "arr", "sc", "onMove", 
"toggleAfkMode", "sendReplayConfig", "evalDefferedDAS", "setFocusState", "keyInput2", "keyCode", "controls", "focus", "preventDefault", "sendRestartEvent", "stopImmediatePropagation", "repeat", "ml", "mr", "sd", "rl", "rotateCurrentBlock", "rr", "dr", "hk", "isHardDropAllowed", "hardDrop", "holdBlock", "moveCurrentBlock", "DAScancel", "directionCancel", "setDASto", "stopPropagation", "keyInput3", "max", "activateDAS", "plotForDASDebug", "setTimeout", "clearTimeout", "drawGhostAndCurrent", "rot", 
"blocks", "previewAs", "pos", "drawGhostBlock", "drawBrickOverlay", "drawBlock", "redrawRedBar", "update", "updateLiveMatrix", "q", "forEach", "step", "checkIntersection", "beforeHardDrop", "BLOCK_SET", "cc", "restartSprintOnFF", "A", "score", "FINESSE", "placeBlock", "time", "steps", "GameOver", "paintMatrixWithColor", "sendRepFragment", "sendGameOverEvent", "hasUserInputs", "inactive1", "showInChat", "<span style='color:yellow'>", "warning", "</span>", "inactive2", "sendGameModeResult", "practiceModeCompleted", 
"saveScore", "onGameEnd", "reset", "updateTextBar", "setTarget", "isBannedStartSequence", "getAdjustedLiveSeed", "randomizerFactory", "getQueuePreview", "refillQueue", "noQueueRefill", "getRandomizerBlock", "getBlockFromQueue", "checkAutoRepeat", "sendSnapshot", "playCurrentPieceSound", "gameEnd", "raceCompleted", "getComboAttack", "deleteFromGarbageQueue", "blockOrSendAttack", "attack", "recordRedbarChange", "frame", "last", "min", "requestAnimFrame", "DAS_LEFT", "DAS_RIGHT", "autoRepeat", "statsDASPanel", 
"moveBlockToTheWall", "fpsUpdate", "videoOpts", "updateTexture", "processGamepad", "render", "gravityStep", "MOVE_TO", "addAsyncGarbage", "ceil", "timeTriggers", "execCommands", "shift", "changeTarget", "hasOwnProperty", "CLOCK", "toFixed", "getAPM", "getVS", "VS", "addGarbageFromQueue", "garbageQueue", "addIntoGarbageQueue", "addAsyncGarbageFromTheQueue", "addSolidGarbage", "linesReceived", "randomExcept", "RECV", "WIDE_GARBAGE_ADD", "solidStartRaising", "toggleStats", "\u0394DAS", "#ff8", "#221", 
"addPanel", "domElement", "marginTop", "15px", "getGravityLevel", "pageTitle", "title", "getTime", "round", "requestAnimationFrame", "webkitRequestAnimationFrame", "mozRequestAnimationFrame", "oRequestAnimationFrame", "msRequestAnimationFrame", "browserTabFocusChange", "<span style='color:yellow'>NOTE</span>", "Game lost focus during the final hurry-up phase, your game was halted to avoid stalling.", "afk", "AFK", "keys", " * ", " = <b>", "</b>", "SCORE", "stLrem", "stTSD", "stPC", "oRem", "evalPCmodeEnd", 
"lines", "notPC", "notPCInfo", "gameWarning", "savePlacementTime", "getCurrentPPS", "speedWarning", "storedPlayParam", "The Private Room", "tryPlayParam", "createPrivatePracticeRoom", "click", "attr", "pl", "startsWith", "3", "H", "4", "5", "6", "7", "I", "8", "9", "B", "C", "D", "E", "F", "G", "substr", ".plLinks a", "drawClearLine", "setAlpha", "finished", "isAvailable", "initRenderer", "clearRect", "drawBlockOnCanvas", "drawRectangle", "drawImage", "drawBrickOverlayOnCanvas", "globalAlpha", "drawLine", 
"grey", "#FF270F", "#FFFFFF", "createFastFont", "clientHeight", "renderLines", "draw", "font", "bold ", "px Verdana,serif", "#808080", "fillText", "high-performance", "webgl", "experimental-webgl", "Your browser does not support WebGL!", "COLOR_BUFFER_BIT", "DEPTH_BUFFER_BIT", "createShader", "vertex", "shaderSource", "fragment", "compileShader", "getShaderParameter", "attachShader", "linkProgram", "getProgramParameter", "validateProgram", "Validation error", "getProgramInfoLog", "Linking error", 
"Fragment shader: compile err", "getShaderInfoLog", "Vertex shader: compile err", "getActiveAttrib", "getAttribLocation", "getActiveUniform", "getUniformLocation", "initGLContext", "positionLocation", "a_position", "texcoordLocation", "matrixLocation", "u_matrix", "textureMatrixLocation", "u_textureMatrix", "uniform1f", "positionBuffer", "bindBuffer", "bufferData", "texcoordBuffer", "textureInfos", "boundBuffers", "boundTexture", "initEmptyTexture", "initRedbarTexture", "bindTexture", "texImage2D", 
"texParameteri", "load", "texture", "addEventListener", "crossOrigin", "anonymous", "vertexAttribPointer", "orthographic", "translate", "uniformMatrix4fv", "translation", "textureLocation", "uniform1i", "drawArrays", "scissor", "disable", "setupGif", "undefined", "/js/vendor/gifler.min.js", "realSetupGif", "tagName", "removeChild", "body", "updateGifTexture", "skinify", "globalCompositeOperation", "source-over", "buffer", "colorize", "colorAlpha", "source-atop", "rgba(", ", ", ")", "fillRect", "updateTextureFromElem", 
"setupVideo", "loop", "autoplay", "muted", "sound", "playing", "timeupdate", "waiting", "videoWidth", "videoHeight", "u_texsize", "uniform2f", "/res/img/sdf2.png", "viewport", "drawText", "?", "numItems", "activeTexture", "u_texture", "u_color", "uniform4fv", "u_buffer", "u_gamma", "noBlocks", "noBlocks2", "spawn", "centerColumnCheck", "-1", "kicks", "tspinType", "holds", "onBlockHold", "checkTSpin", "checkAllSpinImmobile", "checkAllSpin", "allspin", "checkLineClears", "countGarbageHeight", "garbageCleared", 
"finish", "FINISH_STANDARD", "lineCleared", "LINES", "singles", "T-Spin Single", "TSPIN_SINGLE", "B2B", "TSPIN_MINI_SINGLE", "T-Spin Mini Single", "CLEAR1", "doubles", "TSD", "TSPIN_DOUBLE", "T-Spin Double", "CLEAR2", "triples", "CLEAR3", "TSPIN_TRIPLE", "T-Spin Triple", "tetrises", "CLEAR4", "Tetris", "CLEAR5", "Multitris (", "Ignored ", "-Spin", "-Spin ", " Mini", "B2B ", "wasted", "tspins", "PCs", "PERFECT_CLEAR", "Perfect Clear", "FINISH_BY_PC", "mapLines", "is4W", "linesSent", "ATTACK", "getClearSFX", 
"notTSD", "notTSDInfo", "TSD20", "lastPC", "fwDetect", "fwDetectInfo", "sendAttack", "onLinesCleared", "TSPIN", "TSPIN_MINI", "-Spin Mini", "tpieces", "BLOCKS", "getKPP", "KPP", "onBlockLocked", "getWasted", "WASTE", "repeatQueue", "addStaticQueueToQueue", "equidist", "yp", "xp", "MAX_SAFE_INTEGER", "exports", "getRandomExcept", "vt", "getParameterByName", "lobby", "navbar", "ce", "toggleLobbby", "boolean", "onLobbyClosed", "editBtn", "modEditBtn", "contains", "remove", "nodeValue", "childNodes", 
" Edit", " ModEdit", "refreshLobbby", "initEmoteSelect", "svg.emSel", "querySelector", "paddingRight", "37px", "EmoteSelect", "/res/oe/", "/res/img/e/jstris.png", "grinning_face", "waving_hand", "monkey_face", "red_apple", "compass", "joystick", "light_bulb", "flag_isle_of_man", "hacker_cat", "first_aid", "/res/img/e/u/erickmack.png", "toggleMore", '{"t":15}', "safeSend", '{"t":10}', "disabled", "saveRD", ",", "/", "moreSet2", "getElementsByTagName", "select", "concat", "attackMode", "radio", "hidden", 
"checkbox", "test", "split", 'input[name="allSpin"]:checked', "hostStart", "srvSel", "saveData", "saveDataArea", "stringify", "function", "send", "event", "Preset", "export", "switchRDmode", "moreSel", "getElementsByName", "presetMode", "visibility", "visible", "adv", "showClass", "simple", "660px", "493px", "onPresetChange", "presetSel", "settingsDesc", "desc", "dataset", "options", "useCustomPreset", "Enter title or ID", "responseText", "parse", "GET", "/code/getPresetData/", "open", "X-Requested-With", 
"XMLHttpRequest", "setRequestHeader", "showRoomDialogForEdit", "showRoomDialog", " ", "applyCh", "gameMode", "addJL", "textarea", "numPlayers", "attackTable", "join", "at", "comboTable", "ct", "gdmSel", "gblockSel", "rndSel", "blocksSel", "prSel", "pr", "garbageDelay", "hasSolid", "sg", "solid", "hasHold", "solidAtk", "sa", "as", "asEx", "cd", "sl", "grav", "ld", "clearRoomForm", "inline", '<option value="0" data-desc="The default settings">Default</option>', "presetLoadState", "/code/presetList", 
"closeRoomDialog", "NoNamed", "'s room", "createState", "setDefaultRule", "clearLimitsForm", "joinLimits", "from", ".1", "autocomplete", "placeholder", "MIN", "MAX", "getFilledLimits", "attackSelect", "500/5000/20000", "0,3", "500", "as0", "0,0,1,2,4,4,6,2,0,10,1", "0,0,1,1,1,2,2,3,3,4,4,4,5", "0,0,1,2,4,4,6,2,1,9,1", "0,0,1,1,2,2,3,3,4,4,4,5,5", "0,0,1,2,4,1,2,0,0,10,1", "applyPreset", "makeRoomWrapper", "more_preset", "makeRoom", '\\"', "replace", "edit", "more_simple", "rNameReq", "\n", "pm", 
"[", "]", "every", "Attack table or combo table has invalid format.\n", "bset", "gDelay, mess, gapW must be numeric values.\n", "toUpperCase", "Allspin piece exclusion list invalid. Enter e.g.: L,S,Z,J\n", "Time interval is invalid.\n", "M", "charAt", "Server selection is currently available only for Private rooms.\n", "Clear delay is invalid.\n", "Speed limit is invalid. Allowed (0-10PPS).\n", "Gravity LVL must be 0-28.\n", "Lock delay value is invalid. Expected format: 500/5000/20000.\n", "Last sgProfile delay must be > 0.\n", 
"Solid garbage profile has invalid format.\n", "All join limits must be numeric and MIN must be less than MAX.\n", "lim", "r-ext", "joinRoom", '{"t":12, "id":"', '"}', "hideResults", "Team", "joinTeamRoom", "onOpen", "onclose", "onClose", "signingIn", "onreadystatechange", "readyState", "status", "authorize", "/token", "token", "getAuthorizedNameLink", '<img src="/res/crown.png" class="nameIcon">', "Champion", '<img src="', "/res/ield.png", '" alt="Mod" class="nameIcon">', "Moderator", "/res/", "gstr", 
"jsT", "blt", "blo", "bls", "blz", "bll", "blj", "bli", '" alt="D" class="nameIcon">', "Jstris supporter", '<img src="https://www.narwhalkid.com/jstris/vendor/countries/flags/', '.png" alt="', '" class="nameIcon">', ".svg", '" class="nameIcon_oe">', "color:", "bold", "font-weight:bold", "&hellip;", ' style="', ";", '"', '<a href="/u/', '" target="_blank"', ' title="', ">", "</a>", "getName", "<span style='color:#00D928'>", "newsUser", "<span style='color:#FF3700'>", "serverUser", "warning2", "<i class='glyphicon glyphicon-info-sign'></i>", 
"noNamed", "forgetRoomPlayers", "onCIDassigned", "lastDC", "proxy", "normal", "Connect", "removeBanArtifact", "readSpecs", "spec", "col", "<em>", "watching", ": ", "</em>", "chatJoiningInfoEnabled", "showMessageAboutJoin", "userCame", ".</em>", "userJoined", "soundEnabled", "joined", "!", "Jstris", "updateConnectionInfo", " [P]", " [F]", " [DC]", "notConnected", "s:", " (client ", "), ", "handleResponse", "nick", "setCookie", "setChatName", "option", "selected", "so", "getGameSlot", "setName", "bot", 
"rescaleNow", "autoScale", "vacantClear", "spectator", "hasLeft", "isSpectating", "True", "waitNext2", "ss", "setResetButton", "shouldWait", "trM", "Map", "<a target='_blank' href='/map/", "'>", "</a> (D=", "diff", "%)", "setResetProgress", "e", "chatErrShown", '<span style="color:#ff9100"><b>', "oops", "</b> ", "chatNA", ' <a href="/about/chat" target="_blank">', "leMore", "resolveMention", "resetWinCounter", "getChatLineClassesFor", "cl", "apply", "className", "rchNew", "liveRaceFinished", "np", 
"afterRedraw", ".t", "loadEmotesIndex", "placePrinted", "sendStats", "Game", "victory", "displayTeamResults", "displayResults", "href", "/games/", "displayLobby", "re", "welcomeIn", "!</em>", "roomFull", "spectatorModeOff", "onRoomJoined", "applyConfig", "postLiveData", "noSpectators", "onReplaySaved", "postData", "REJECTED - ", "err", "uploadError", "updateTeamData", "initReplay", "signedAs", ".", "loginFail", "loginFail2", "<b>", "dc", "chatMajorWarning", "roomHost", '<span class="mention">@', 
"</span> ", "newHost", "acceptRoomDetail", "getData", "avail", "loadConf", "use", "j", "log", "<span style='color:green'>Completed</span>", "Not saved, you already completed this mode.", "<span style='color:red'>Skipped</span>", '<a href="/usermodes/', "mid", '" target="_blank">', ", <b>", "<span style='color:green'>Saved</span>", "</a>: ", "newRating", "oldRating", "+", "mapRating", ". Used ", " of ", " restarts!", "<span style='color:", "#00ff00", "#ff7400", "Rank", ", new: <b>", "</b>, quiz rating: ", 
"showModListOfRooms", "close", "ms</b>", "oldVer", "\n If you continue, your game will be unstable.", "oldVer2", "<b>CTRL+F5</b>", "!!!", "badRoom", "Unknown", "stngsChanged", " (", ").</b>", "gh", "bi", "xb", "setXbuffer", "snr", "lsnr", "sgp", "teams", "updateTeamNames", "button", "teamSelect", "target", "teamSwitch", "backgroundColor", '{"t":20,"team":"', "rule", "privateRoom", "restartInfo", "<em><b>Room was not found!</b></em>", "<em><b>Room is full, please find another one in the lobby!</b></em>", 
"resetAll", "https://www.narwhalkid.com/jstris/join/", "joinLinkInfo", "</em><span class='joinLink' onClick='selectText(this)'>", "customRoomJoin", "sendStatus", "Sprint", "Cheese", "Surv.", "Maps", "tr", "sort", '<span class="plusSpec">+', "s-customw", "dark", "loIc", "mo", "s-unlocked", "s-locked", '<div class="modeCol"><span class="gmTag">', "</div>", '<div class="modeCol">', "s-speedlimit", "slIc", '<span class="slVal">', '</span><span class="ppsTag">PPS</span></div>', " myRoom", "onclick=\"window.joinRoom('", 
"')\"", "<tr data-id=", ' class="lobbyRow', "><td >", "</td><td class='gamesCol'>", "</td><td class='plCol'>", "</td><td class='pLimit'>", "</td></tr>", "tbody", "lobbyTable", "rLSep", "customTable", "o", "ovLSep", "ovfTable", "guLSep", "guTable", "loLSep", "loTable", "onLobbyRefresh", "lobby_", "next", "toggle", "up", "toggleClass", "down", "hasClass", "removeItem", "setItem", "getItem", "addClass", "each", ".roomListSep", "forfeit", '<table class="tstripes" width="100%"><tr><td></td><td width="100"><b>', 
"</b></td><td><b>", "rec", "sent", "</b></td>                        <td><b>B2B</b></td><td><b>B2Bpm</b></td><td><b>", "</b></td><td><b>APM</b></td><td><b>SPM</b></td><td><b>PPS</b></td><td><b>", "ren", "</b></td></tr>", "<tr><td><b>-</b></td><td>", "</td><td>", "</td><td>&infin;</td><td>", "</td>                    <td>", "</td><td>-</td><td>-</td>                    <td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>", "-", '<a href="/replay/live/', '" target="_blank"><img height="16" src="', 
"/res/play.png", '"></a>', "<tr><td><b>", ".</b></td><td>", "</table>", '<table class="tstripes" width="100%"><tr><td></td><td><b>', "received", "resizeElements", '<table width="100%"><tr><td></td><td><b>', "<tr class='spaceBefore'><td><b>", '<span class="teamResTag" style="background-color:', ';">', "</span></td><td>", "<tr><td><b></b></td><td>", '<span class="mention">', "warnBox", "closable", '<img src="/res/darkClose.png" alt="CLOSE">', "javascript:void(0)", "warnClose", "parentNode", "infoChl", 
"</b>: ", "chl", "object", "clearOldChatIfNeeded", "scrollOnMessage", "scrollChatDown", "scrollDownChatBtn", "children", "showInLobbyChat", '<b><a class="relUser" target="_blank" href="https://discord.gg/RcNFCZC"><img src="', "/res/svg/disW.svg", '"> ', "</a>: </b>", '<b><a href="/u/', '<b><a href="/about" target="_blank">', ": </b>", " infoChl", "chatBoxLobby", "<div class='chl", "scrollTop", "scrollHeight", "getSlot", "onMessage", "9002", "Text message received: ", "parseBinaryMatrix", "updateLiveMatrixViaSnapshot", 
"decodeActionsAndPlay", "pullBits", "aux", "RANDOMIZER", "MATRIX_MOD", "playLive", "code", "<span style='font-weight:normal'>", "connLimit", " (discord.gg/RcNFCZC).</span>", "criticalErr", "<b>Disconnected</b> - ", "RLreach", " (<em>", "reason", "</em>)", " | ", "red", "setBanArtifact", "ban1", "PE", "ban2", " | Account BANNED", "OLD VERSION - refresh to update your client!", "Switching servers", "CHANGING SERVER", "changeServer", "Server switch request with code 1006?", "useProxy", "<span class='wFirstLine'><span class='wTitle'>", 
"connLost", "</span></span>", "<p>", "ncGS", '<a href="javascript:location.reload(true);">', "refr", "</p>", "Authentication failure!", "idleDC", "/ws/", "1st connection attempt failed, reconnecting...", "srvId", "sess", "://", "?v=", "&sess=", "binaryType", "arraybuffer", "onopen", "onmessage", "onerror", "&join=0", "teamflow", "pass", "&pass=", "tf-", "bramble", "br-", "in-", "&join=", "&guest=1", "&gSess=", "getCookie", "&nt=", "getBanArtifact", "&room=", "WebSocket", "This browser does not support websockets, we can't connect you :(", 
"pushBits", "OPEN", '{"t":14,"d":', ',"rep":"', '{"t":5}', '{"t":7}', "showTargetOnSlot", "favicon", "/res/favicon", ".ico", "\u26a0 New game starting! \u26a0", "/res/favicon.ico", "cmb", "sendAttackOld", '{"t":13, "a":', ', "cid":', ', "g":', "}", "sendAttackToSlot", "welcome", "typeHelp", '{"t":16, "mode":0}', "specModeInfo", "fullScreen", "<em>You left the spectator mode.</em>", "gm", "replayInfoToChat", "pb", "fullModeName", "modeTitle", "/ /g", "&nbsp;", " by&nbsp;", "newPB", "getLeaderboardLink", 
"&display=4&id=", "my scores", "my times", "my TSD games", "my PC games", "replay", ': <a target="_blank" href="/replay/', '">/replay/', '</a>. View in <a href="', "</a>.", "replayAvailable", "&rule=", "/sprint?lines=", "L", "/cheese?lines=", "/survival?lines=", "1+g%2Fs", "/ultra?lines=2+minutes", "/map/", "?ref=game", "/20TSD?ref=game", "/PC-mode?ref=game", "getGameTime", "gameTime", ": <b>", " s</b>. ", "see", " <a href='/sprint?lines=", "' target='_blank'>", "leaderboard", " <a href='/cheese?lines=", 
" <a href='/survival", "pts", " Score: <b>", "</b>. ", " <a href='/ultra", '<b>"', '"</b> map ', " <a href='/map/", "' target='_blank'>the map ", "state", "STATE_PUBLISHED", "nsUnpub", "t20", "20TSD Result: <b>", " TSDs, ", " <a href='/20TSD", "nsTspins", "tt", " Result: <b>", " PCs, ", " <a href='/PC-mode", "nsLowPC", "bl", "offline", "OFFLINE", "pow", "Xbuffer enabled at lvl", " (fm:", ").", "Xbuffer disabled.", "transitionDuration", "0s", "99.9%", "onChatScroll", "tc-hd", "chatScrolllBtn", "removeScrollButton", 
"sendChat", "jez", ".a", '/js - {"t":31,"a":', ".s", '/js - {"t":31,"s":', "/clearCookies", "clearAllCookies", "<em>All saved settings cleared.</em>", "/last", "/result", "/results", "/stats", "lastGame", ' <a target="_blank" href="/games/', '">/games/', "There is no last game to show.", "/sitout", "/spectate", "/spec", "aSpec", "/play", "aPlay", "/speclist", "/watching", "/spectators", '{"t":16, "mode":1}', "/clear", "/fps", "/realfps", "/fps2", "/debug", "<em>Debug output activated.</em>", "/DAS", 
"showPanel", "/version", "/link", "/url", "/URL", "<span class='joinLink' onClick='selectText(this)'>", "/config", "roomSettings", "</b><br>", "<br>", "On - ", " sec", "Off", " ms", "Standard", "LiveRace", " ms<br>", "messiness", "/cid", "/ping", '{"t":99}', "/dc", "/clients", "/memory", "performance", "memory", "Memory", "usedJSHeapSize", " MiB", "Available only in Chrome browser.", "/zoom", "setZoom", "/setup", "/tsetup", "tsetup", "/fe", "/fullscreen", "/fs", "/rescale", "/autoscale", "/replay", 
"REQUESTED_BY_USER", "/host", "Room host: ", "No room host is set.", "/xbuffer", "isFriendChat", "You are offline! Only possible to use offline commands.", "modWindow", "admBtn", "closeBtn", "REFRESH", "left", "60px", "/admin", "<h1>Active rooms</h1>", "ul", "admList", "li", "settings", "<span style='color:yellow'>(P)</span>", " - ", "<ul>", "issitout", '<hr style="margin:0">', "<li>", "<em>NoNamed</em>", " <span style='color:grey'>(guest)</span>", " <span style='color:grey'>(spec)</span>", ' <span style="float:right">[<a href="javascript:void(0)" class="dcMLink" data-cid="', 
'">D/C</a> | <a href="javascript:void(0)" style="color:red" class="banMLink" data-cid="', '">IP-BAN</a>]</span></li>', "</ul>", "dcMLink", "/kickByDC ", '{"t":6,"m":"', '","cid":', "banMLink", "Execute BAN CID=", " ?", "/resetIP", "/admin/ban/cid/", "You are playing offline!<br>Try reloading Jstris online, otherwise:", "&#8226; Your games won't be stored in the leaderboards.", "&#8226; Your replay won't be uploaded, but you can save it.", "&#8226; Your game version <b>", "</b> might be outdated.", 
"&#8226; Multiplayer games and chat are unavailable.", "more-practice", "showMore", "showLess", "\\]", "\\[", "search", "exec", "[\\?&]", "=([^&#]*)", "lobbyRow", "mouseenter", "openRoomDetails", "mouseleave", "closeRoomDetails", "parentElement", "detailBoxEntered", "detailBoxLeft", "requestRoomDetail", '{"t":28,"r":"', "displayRoomDetail", "spinner", "displayPlayers", "displayConfig", "displayLimit", "limit", "flex", "rdLimitInf", "rdOK", "rdF", "lIcn", "<h1>", "joinPossible", "</h1>", "notEligible", 
"\u27e8", "\u27e9", "\u2713", "\u2717", "<dl>", "<dt>", "</dt>", "<dd>", "u", "</dd>", "</dl>", "settingsContent", "firstChild", "\u2022 ", ": <span class=confVal>", "rdItem", "content", "localeCompare", "<span class=pInfo>+", "cntMore", "cntGuests", "<span class=pInfo>", "noPlayers", "cntSpec", "firstElementChild", "rdW", "detail", "roomDetail", "rdTitle", "rdSpinner", "rdContent", "settingsTitle", "rdSub", "rdConf", "rdLimit", "stngsCustom", "img", "/res/svg/spinWhite.svg", "40px", "getBoundingClientRect", 
"clientY", "top", "px", "applyDefaults", "tryToLoadControlsFromCookie", "cookiePrefOnly", "clearRealCookies", "touchControls", "gridMode", "defaultMonochrome", "#5c5c5c", "openSettings", "getKeyName", "cancelDAS", "dasMethod", "wGL", "gr", "ghost", "mLay", "volumeChange", "loadMoreSkins", "mSkInf-s", "addSkins", '<input type="radio" name="bSkin" data-p="', '" value="', '" id="bs', '"><label for="bs', '<img height="20" src="', '"><span class="skinAuth">by ', "</span></label><br>", "timeout", "/code/skins?v2", 
"Content-type", "application/x-www-form-urlencoded", '<img src="/res/svg/spinWhite.svg" style="height:20px"> Loading more skins...', "Could not load skin data, try refreshing the page or reopening the Settings.", "ontimeout", "onabort", "onload", "reloadCanvases", "cloneNode", "replaceChild", "setDAS", "setARR", "eSE", "eDM", "VSE", 'input[name="bSkin"]:checked', 'input[name="sds"]:checked', "SD", "touchActionVal", "TouchC", "ffRestart", "SEvol", "rescale", "removeCookie", "sendSettings", "startCtx2D", 
"isMobileDetect", "mobile", "<em>(SD) ", "settingsChanged", '{"t":25}', "reload", "updateStatsOptionsId", "No WebGL support! Option has been disabled.", "match", "room2", "invalidDAS", "ARR value is invalid.", "handleKeyDown", "kc", "setControlKey", "k", "unknown", "loadFromJson", "SEf", "SEs", "bSp", "bSk", "eso", "gho", "grs", "setGrid", "sds", "tou", "DASca", "vol", "postSettings", "[name=csrf-token]", "head", "d=", "POST", "/code/settings", "X-CSRF-TOKEN", "setTouchControls", "vol-control", "vol-value", 
"touchUsed", "border", "1px solid #0062ca", "tc-area-desc", "touchstart", "removeEventListener", "nullpoDAS", "enterNullDAS", "suggestedIs", ". ", "applyConfirm", "DIRECTION_ALL", "pan", "panstart", "direction", "DIRECTION_DOWN", "distance", "velocityY", "DIRECTION_LEFT", "deltaX", "DIRECTION_RIGHT", "panend", "gameStep", "deltaY", "overallVelocityY", "abs", "DIRECTION_UP", "panleft", "overallVelocityX", "panright", "tap", "center", "cookie", "=", "=;expires=Thu, 01 Jan 1970 00:00:00 GMT", "; DAS=", 
"; ", "timeStamp", "lastTouch", "touches", ".colorPicker", "change", "source", "#", "enter", "bs7", "initGamePad", "gamepad", "buttons", "gamepadButtons", "Gamepad connected at index %d: %s. %d buttons, %d axes.", "index", "axes", "removeGamePad", "Lost connection with the gamepad.", "getGamepads", "webkitGetGamepads", "pressed", "keydown", "dispatchEvent", "activeElement", "keyup", "GPAD_", "\\", "backspace", "tab", "num", "ctrl", "alt", "pause", "caps", "esc", "space", "pageup", "pagedown", "end", 
"home", "right", "print", "insert", "delete", "b", "z", "cmd", "num_0", "num_1", "num_2", "num_3", "num_4", "num_5", "num_6", "num_7", "num_8", "num_9", "num_multiply", "num_add", "num_enter", "num_subtract", "num_decimal", "num_divide", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "scroll", "`", "'", "KeyCode ", "playersW", "playersH", "marginLeft", "gameFrame", "100%", "gc", "95%", "numRows", "nmob", "swapSlot", "mvSlot", "shrink", "teamOfSlot", "teamOfCid", "hideTags", 
"initTeamTag", "teamTag", "minWidth", "170px", "realHeight", "chatMaxH", "maxHeight", "140px", "180px", "240px", "setIsTargetted", "CID", "data-original-title", "Minify", "setAttribute", "Expand", "exUp", "exDown", "aria-describedby", "hasAttribute", "getAttribute", "position", "relative", "0px", "clientWidth", "onResized", "marginRight", "Skin unavailable - ", "loadResources", "#0c0c0c", "#1c1c1c", "restartedAt", "onCreate", "onRestart", "onBlockMove", "onFinesseChange", "onGameOver", "onScoreChanged", 
"printTextBg", "save", "#090909", "restore", "printSlotPlace", 'px "Exo 2"', "textAlign", "printSlotNotPlaying", "view", "ff", "applyShownStats", "roundTime", "addStat", "Lines", "Wasted", "pop", "setLock", "setOrder", "242px", "gCapt", "288px", "73px", "#CBD600", "specMode", "22px", "7px", "endSpec", "97px", "notFocused", "30px", "11px", "clickToFocus", "16px", "opacity", "264px", "fontWeight", "31px", "modeInfo", "90px", "rgb(107 180 255)", "20px", "TASK:", "19px", "4px", "marginBottom", "236px", 
"5px", "transitionCaption", "modeComplete", "272px", "#00db00", "27px", "\u2714 All done! Nice.", "\u2714 Completed", "fadeInTop", "paused", "387px", "pausedSign", "fadeIn", "skip", "13px", "Any key to resume", "sec", "pauseProg", "animationDuration", "266px", "69px", "1px", "Custom mode loading", "372px", "59px", "javascript:void(0);", "8px", "btnNX2", "btnNX-lrg", "green", "NEXT", "handler", "168px", "32px", "waitNext", "pressStart", "216px", "slowDown", "slSubT", "speedLimitIs", " <b>", "</b> PPS", 
"_fadeOut", "noTransition", "transition", "all ", "s ease-out", "paddingTop", "#fafad2", "12px", "14px", "initial", "paddingBottom", "184px", "firstPB", "235px", "142px", "newS", "prevS", "days", "daysAgo", "diffS", "infoPB", "214px", "125px", "/res/svg/cancel.svg", "/res/img/i/troll.png", "6px", "174px", "63px", "raceFin", "raceFinInfo", "fade_after", "padding", "0px 6px", "false", "userAgent", "vendor", "opera", "changeStyle", "width=500, user-scalable=0", "meta[name=viewport]", ".players", "margin-left", 
"css", ".navbar-brand", "float", "#main", "margin-right", "#gameFrame", "#gc", "500px", "html", "margin-bottom", ".navbar", "margin-top", "10px", "padding-top", "#gstats", "show", "tc", "#tcc", "#touchBtn", "#touchBtnMove", "prop", "#touch", "touch-action", "manipulation", "#app", ".tc", '<img src="/res/svg/white/arrowLeft.svg"> Back to game', "navbar-back", "removeClass", "2px", "#res", "tc-l", "touchend", "tc-r", "tc-d", "tc-c", "tc-cc", "tc-dr", "tc-h", "tc-vs", '<img src="/res/svg/dark/screens.svg">', 
"mMenu", "setupButtonDragDrop", "#tc-hd", "#tc-dr", "#tc-l", "#tc-r", "#tc-d", "#tc-cc", "#tc-c", "#tc-h", "custom_xOffset", "custom_yOffset", "custom_initialX", "clientX", "custom_initialY", "touchmove", "transform", "translate3d(", "px, ", "px, 0)", "mousedown", "mouseup", "mousemove", "getBlobData", "compressToEncodedURIComponent", "pushEndPadding", "gid=", "&cid=", "&r=", "/code/replayUploaderLive", "ver", "vcsm", "id=", "&c=", "/code/replayUploader", "message", "REQUEST_TIMEOUT", "REQUEST_FAIL", 
"statusText", "<span class='wFirstLine'><span class='wTitle'>!", "!</span> <b>", "repFail", "</b> (<em>", "</em>)</span>", "repInChat", "repTxtInfo", '<textarea readonly cols="30" onclick="this.focus();this.select()">', "</textarea>", "ROTATE_180", "Map ", "modes", "fn", "rs", "prKey", "F4", "practice-last", "updateModeMenu", "prMenuItem", "practice-submenu", "pract-subopt", "createOptions", "comboclass", "opt", "ruleDesc", "ruleDiff", "s-l", "lvl", "closeCombo", "toggleCombo", "afterRuleChange", 
"forceApplyChanges", "applyPresetRule", "openReport", "closeReport", "repClose", "sendReport", "repSend", "rRe", "repForm", "svg.warnI", 'input[name="rRe"]:checked', "trim", "User must be selected!", "Reason cannot be empty!", "No users to report", "rr0", "def", "autoSelectKey", "includes", "</b> to use", "genItem", "genItemType", "resolveProb", "preloadIcons", "revert", "backgroundImage", "mysteryItem", "fullSize", "url(", "onHardDrop", "applyItem", "changeRandomizer", "changeMatrix", "changeBBS", 
"Instant win", "resolveMystery", "loadFourWide", "wipeDeadline", "VmAAAiJUYAACIlRAAAMyUUAAAzIRcAAGZhdwAAEWEXAABxFREAAHdVIgAAcVUiAAARVSIAABdWIgAAd3ZmAABmYzUAAGZjNQAAYzIlAABjNSUAACIlIQAAJEURRABEJRRAACIg==", "parseMatrix", "compressMatrix", "tfTornado", "iter", "FS timeout", "reconnect", "#ff5555", "0.8em", " Could not send, reconnecting...", "0.7em", "sendInvite", "[INV:", "/:/g", "\\:", "friendBoxMode", "friendsNotif", "frNewChatH", "checkNewFriend", "notifSoundDM", "msgNotif", "fr-", "f-ch", "friendRowNotif", 
"decideFriendsBoxMode", "requestRefresh", "friNew", "frNotif", "NEW", "newTag", "newMsg", "tryRenderInvite", "inviteBox", "s-envelope", "frInvTo", "getHours", "getMinutes", "invInfo", "frInvBy", "frInvIn", "ttch", "ttClass", "tooltip", "getCategorySeparator", "sep", "frOn", "frOff", "Reconnecting...", "loadingScreen", "openChat", "fchat", "h3", "s-exit", "exitDM", "inviteDM", "frInv", "insertBefore", "frMsgTo", '<div class="tooltip ', '" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', 
"updateFriendList", "flist", "fr", "frRel", "s-reload", "_blank", "/u/", "frChat", "disBtn", "frIn", "frPriv", "f-jo", "fempty", "FRIEND_LIST_LOADING", "frLoad", "LOGIN_FIRST", "frLogin", "TOO_MANY_CONN", "Account is already connected multiple times.", "Close other connections.", "NO_FRIENDS", "frEmpty", "frHowAdd", "FRIEND_LIST", "INTRO", '<h1 style="font-size: 20px;margin-top: 3px;">', "frWelc", '</h1><ul style="margin-bottom: 7px;margin-left: -13px;"><li>', "frIntro", "</li><li>", "frIntro2", 
"frIntro3", '<a target="_blank" href="/friends">', "frPage", "</li></ul>", "frIntroCl", "4px 29px", "frN", "rch", "Room chat", "fri", "moreClose", "cancelCreation", "createRoomButton", "closeLobby", "closeLink", "onfocus", "more_adv", "saveDataClose", "saveLimits", "customPre", "blur", "gamepadconnected", "gamepaddisconnected", "slotSettingsBtn", "slotSettings", "zoomIc", "okIc", "zoomNow", "statsSlots", "loadSkin", "loadVideoSkin", "loadSFX", "gridForm", "context", "suspended", "resume", "Error while trying to resume the Web Audio context.", 
"cursor", "global", "gif", "Enable webGL before using loadVideoSkin!", '[data-toggle="tooltip"]', "clearEmotes", "addEmotes", "res/oe/", "/code/emotes?", "getCurrentWord", "processHint", "moveSelected", "ksel", "setSelected", "toLowerCase", "emHint", "setCaretPosition", "ReturnWord", "GetCaretPosition", "selection", "createRange", "character", "moveStart", "text", "selectionStart", "createTextRange", "collapse", "setSelectionRange", "multiply", "monospace", "sans-serif", "serif", "72px", "mmmwmmmmmmlli", 
"fontFamily", "detect", "charCodeAt", "webgl2", "gsp", "gpl", "gfo", "gtz", "gla", "gsl", "gcp", "Cu: ", "gcr", ", Av: ", "gar", ", CD: ", "gcd", ", X: ", "gXDPI", ", Y: ", "gYDPI", "colorDepth", "availWidth", "availHeight", "deviceXDPI", "deviceYDPI", "plugins", "mimeTypes", "description", "Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", 
"Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", 
"Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", 
"Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", 
"Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", 
"Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", 
"PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", 
"Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings", "getTimezoneOffset", "language", "systemLanguage", "navigator", "experimental-webgl2", "moz-webgl", "itemSize", "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}", 
"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}", "vertexPosAttrib", "attrVertex", "offsetUniform", "uniformOffset", "vertexPosArray", "readPixels", "depthFunc", "toDataURL", "ext:", "getSupportedExtensions", "a:", "getParameter", "b:", "c:", "d:", "antialias", "getContextAttributes", "yes", "no", "e:", "f:", "g:", "h:", "EXT_texture_filter_anisotropic", "getExtension", "WEBKIT_EXT_texture_filter_anisotropic", "MOZ_EXT_texture_filter_anisotropic", 
"i:", "j:", "k:", "l:", "m:", "n:", "o:", "p:", "q:", "r:", "t:", "u:", "v:", "w:", "x:", "y:", "z:", "precision", "getShaderPrecisionFormat", "aa:", "rangeMin", "bb:", "rangeMax", "cc:", "dd:", "ee:", "ff:", "gg:", "hh:", "ii:", "jj:", "kk:", "ll:", "mm:", "nn:", "oo:", "pp:", "qq:", "rr:", "ss:", "tt:", "uu:", "vv:", "ww:", "xx:", "yy:", "zz:", "1:", "2:", "3:", "4:", "5:", "6:", "7:", "8:", "9:", "\u00a7", "WEBGL_debug_renderer_info", "NA", "Jstris,mx <canvas> v0.39.0-X", "textBaseline", "14px 'Arial'", 
"alphabetic", "#f60", "#069", "rgba(102, 204, 0, 0.7)", "_jstrisx", "emoteElem", "emotePicker", "comment", "Designed and developed by Erickmack", "createComment", "initializeContainers", "emoteList", "json", "then", "initializeEmotes", "lastUsed", "openButtonLogic", "searchElem", "form", "form-inline", "emoteForm", "searchBar", "form-control", "emoteSearch", "searchFunction", "submit", "Search Emotes", "optionsContainer", "emotesWrapper", "findIndex", "groupList", "createGroups", "donateInfo", "emojis", 
".emotesWrapper", "isIntersecting", "createImages", "unobserve", "groupsFragment", "createDocumentFragment", "filter", "groupDiv", "emotesGroup", "data-groupName", "observe", "groupName", "innerText", "minHeight", "selectGroup", "donateLink", "mSkInf", "/donate", "glyphicon", "glyphicon-info-sign", "2k+ more emotes available to Jstris Supporters for $5", "clamp(1.5rem,1vw,3rem)", "getEmoteSource", "http", "searchResults", "setSource", "emotesFragment", "emoteImg", "loadingEmote", "jstrisEmote", "data-emoteName", 
"data-source", "chatEmote", "setStoredEmotes", "shiftKey", "hideElem", "mouseover", "showName", "selectionDiv", "groupImage", "groupLink", "data-groupname", "offsetTop", "data-toggle", "data-placement", "jstrisSelector", "resultsFragment", "emoteResult", "resultImg", "getCaretPosition", "now", "recent", "lastUsedWrapper", "usedWrapper", "recently-used", "RECENTLY USED", "Recently used", "three_oclock.svg", "updateLastUsed", "usedImage", "scrollTo", "fuseScript", "script", "https://cdn.jsdelivr.net/npm/fuse.js@6.4.3"];
_0x77fc[0];
/**
 * @return {undefined}
 */
function Game() {
  this[_0x77fc[1]] = document[_0x77fc[3]](_0x77fc[2]);
  this[_0x77fc[4]] = document[_0x77fc[3]](_0x77fc[4]);
  this[_0x77fc[5]] = document[_0x77fc[3]](_0x77fc[5]);
  /** @type {null} */
  this[_0x77fc[6]] = null;
  this[_0x77fc[7]] = document[_0x77fc[3]](_0x77fc[8]);
  this[_0x77fc[9]] = this[_0x77fc[7]][_0x77fc[11]](_0x77fc[10]);
  this[_0x77fc[12]] = new GameSlots(this);
  /** @type {number} */
  this[_0x77fc[13]] = 6;
  this[_0x77fc[14]] = document[_0x77fc[3]](_0x77fc[15]);
  this[_0x77fc[16]] = document[_0x77fc[3]](_0x77fc[16]);
  this[_0x77fc[17]] = document[_0x77fc[3]](_0x77fc[17]);
  this[_0x77fc[18]] = document[_0x77fc[3]](_0x77fc[19]);
  this[_0x77fc[20]] = document[_0x77fc[3]](_0x77fc[20]);
  this[_0x77fc[21]] = document[_0x77fc[3]](_0x77fc[21]);
  this[_0x77fc[22]] = document[_0x77fc[3]](_0x77fc[22]);
  this[_0x77fc[23]] = document[_0x77fc[3]](_0x77fc[24]);
  /** @type {number} */
  this[_0x77fc[25]] = 24;
  this[_0x77fc[26]] = false;
  this[_0x77fc[27]] = true;
  this[_0x77fc[28]] = false;
  this[_0x77fc[29]] = true;
  this[_0x77fc[30]] = false;
  this[_0x77fc[31]] = false;
  createjs[_0x77fc[34]][_0x77fc[33]]([createjs[_0x77fc[32]]]);
  /** @type {number} */
  createjs[_0x77fc[34]][_0x77fc[35]] = .6;
  this[_0x77fc[36]] = new Image;
  this[_0x77fc[37]] = new Image;
  this[_0x77fc[37]][_0x77fc[38]] = _0x77fc[39];
  /** @type {number} */
  this[_0x77fc[40]] = 1;
  /** @type {number} */
  this[_0x77fc[41]] = 0;
  /** @type {null} */
  this[_0x77fc[42]] = null;
  /** @type {number} */
  this[_0x77fc[43]] = 0;
  /** @type {!Array} */
  this[_0x77fc[44]] = [{
    id : 0,
    name : _0x77fc[45],
    data : _0x77fc[46]
  }, {
    id : 1,
    name : _0x77fc[47],
    data : _0x77fc[46],
    w : 36
  }];
  /** @type {null} */
  this[_0x77fc[48]] = null;
  /** @type {null} */
  this[_0x77fc[49]] = null;
  this[_0x77fc[50]] = false;
  this[_0x77fc[51]] = false;
  this[_0x77fc[52]] = false;
  /** @type {null} */
  this[_0x77fc[53]] = null;
  this[_0x77fc[54]] = true;
  /** @type {number} */
  this[_0x77fc[55]] = 0;
  /** @type {number} */
  this[_0x77fc[56]] = 0;
  /** @type {number} */
  this[_0x77fc[57]] = 1;
  /** @type {number} */
  this[_0x77fc[58]] = 1;
  /** @type {number} */
  this[_0x77fc[59]] = 1;
  this[_0x77fc[60]] = {
    1 : 40,
    2 : 20,
    3 : 100,
    4 : 1E3
  };
  this[_0x77fc[61]] = {
    1 : 10,
    2 : 18,
    3 : 100,
    100 : 1E6
  };
  this[_0x77fc[62]] = {
    1 : 120
  };
  this[_0x77fc[63]] = void 0;
  /** @type {number} */
  this[_0x77fc[64]] = 9;
  /** @type {number} */
  this[_0x77fc[65]] = 3;
  /** @type {null} */
  this[_0x77fc[66]] = null;
  this[_0x77fc[67]] = false;
  this[_0x77fc[68]] = new Block(0);
  this[_0x77fc[69]] = {
    pos : {
      x : 0,
      y : 0
    }
  };
  /** @type {number} */
  this[_0x77fc[70]] = 0;
  /** @type {number} */
  this[_0x77fc[71]] = 0;
  /** @type {number} */
  this[_0x77fc[72]] = 0;
  /** @type {number} */
  this[_0x77fc[73]] = 0;
  /** @type {null} */
  this[_0x77fc[74]] = null;
  /** @type {!Array} */
  this[_0x77fc[75]] = [.9, 0];
  this[_0x77fc[76]] = false;
  /** @type {number} */
  this[_0x77fc[77]] = 2;
  this[_0x77fc[78]] = false;
  this[_0x77fc[79]] = false;
  /** @type {number} */
  this[_0x77fc[80]] = 0;
  this[_0x77fc[81]] = true;
  this[_0x77fc[82]] = false;
  /** @type {number} */
  this[_0x77fc[83]] = 0;
  this[_0x77fc[84]] = {
    "-1" : false,
    1 : false
  };
  this[_0x77fc[85]] = {
    "-1" : false,
    1 : false
  };
  this[_0x77fc[86]] = {
    "-1" : null,
    1 : null
  };
  /** @type {number} */
  this[_0x77fc[87]] = 1;
  this[_0x77fc[88]] = false;
  this[_0x77fc[89]] = void 0;
  /** @type {number} */
  this[_0x77fc[90]] = 0;
  /** @type {number} */
  this[_0x77fc[91]] = 0;
  /** @type {null} */
  this[_0x77fc[92]] = null;
  /** @type {null} */
  this[_0x77fc[93]] = null;
  /** @type {null} */
  this[_0x77fc[94]] = null;
  this[_0x77fc[95]] = false;
  /** @type {null} */
  this[_0x77fc[96]] = null;
  /** @type {number} */
  this[_0x77fc[97]] = 0;
  /** @type {!Array} */
  this[_0x77fc[98]] = [];
  /** @type {number} */
  this[_0x77fc[99]] = 0;
  /** @type {number} */
  this[_0x77fc[100]] = 0;
  /** @type {null} */
  this[_0x77fc[101]] = null;
  /** @type {!Array} */
  this[_0x77fc[102]] = [[0, 3], [0, 3, 2.8, 2.6, 2.4, 2.2, 2, 1.8, 1.6, 1.4, 1.2, 1, 31, 1, 1, 1, 1, 1, 1, 1], null, null];
  /** @type {!Array} */
  this[_0x77fc[103]] = [];
  /** @type {null} */
  this[_0x77fc[104]] = null;
  /** @type {number} */
  this[_0x77fc[105]] = 0;
  this[_0x77fc[106]] = false;
  /** @type {number} */
  this[_0x77fc[107]] = 0;
  /** @type {number} */
  this[_0x77fc[108]] = 0;
  /** @type {!Array} */
  this[_0x77fc[109]] = [];
  /** @type {number} */
  this[_0x77fc[110]] = 0;
  /** @type {number} */
  this[_0x77fc[111]] = 0;
  /** @type {number} */
  this[_0x77fc[112]] = 0;
  /** @type {null} */
  this[_0x77fc[113]] = null;
  this[_0x77fc[114]] = false;
  /** @type {!Array} */
  this[_0x77fc[115]] = [0, 0, 1, 2, 4, 4, 6, 2, 0, 10, 1];
  this[_0x77fc[116]] = this[_0x77fc[115]];
  /** @type {number} */
  this[_0x77fc[117]] = 10;
  this[_0x77fc[118]] = true;
  this[_0x77fc[119]] = this[_0x77fc[120]];
  /** @type {!Array} */
  this[_0x77fc[121]] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5];
  this[_0x77fc[122]] = this[_0x77fc[121]];
  /** @type {number} */
  this[_0x77fc[123]] = -1;
  this[_0x77fc[124]] = false;
  this[_0x77fc[125]] = {
    blocks : 0,
    lines : 0
  };
  /** @type {number} */
  this[_0x77fc[126]] = 0;
  /** @type {number} */
  this[_0x77fc[127]] = 0;
  /** @type {number} */
  this[_0x77fc[128]] = 1;
  /** @type {number} */
  this[_0x77fc[129]] = 0;
  /** @type {number} */
  this[_0x77fc[130]] = 0;
  /** @type {number} */
  this[_0x77fc[131]] = 0;
  /** @type {number} */
  this[_0x77fc[132]] = 100;
  /** @type {number} */
  this[_0x77fc[133]] = 1E3;
  this[_0x77fc[134]] = new SoundQueue;
  this[_0x77fc[135]] = alea(this[_0x77fc[136]]());
  this[_0x77fc[137]] = this[_0x77fc[135]];
  this[_0x77fc[138]] = _0x77fc[46];
  this[_0x77fc[139]] = false;
  /** @type {number} */
  this[_0x77fc[140]] = 1E8;
  /** @type {null} */
  this[_0x77fc[141]] = null;
  /** @type {null} */
  this[_0x77fc[142]] = null;
  GameCore[_0x77fc[143]](this, true);
  this[_0x77fc[144]] = new RulesetManager(this);
  /** @type {!Array} */
  this[_0x77fc[145]] = [{}, {}];
  this[_0x77fc[144]][_0x77fc[146]]({}, this[_0x77fc[145]][0]);
  this[_0x77fc[144]][_0x77fc[146]]({}, this[_0x77fc[145]][1]);
  this[_0x77fc[147]] = this[_0x77fc[145]][0];
  this[_0x77fc[144]][_0x77fc[148]](0);
  this[_0x77fc[144]][_0x77fc[149]](1);
  this[_0x77fc[150]] = new Settings(this);
  this[_0x77fc[150]][_0x77fc[151]](false);
  this[_0x77fc[150]][_0x77fc[152]]();
  this[_0x77fc[153]] = new GameCaption(document[_0x77fc[3]](_0x77fc[154]));
  this[_0x77fc[155]] = new Live(this);
  this[_0x77fc[156]] = new Replay;
  this[_0x77fc[157]] = new Scoring;
  this[_0x77fc[158]] = new MapManager(this);
  this[_0x77fc[159]] = new ModeManager(this);
  this[_0x77fc[160]] = new StatsManager(this[_0x77fc[6]]);
  this[_0x77fc[161]] = new Mobile(this);
  this[_0x77fc[162]] = new Report(this);
  this[_0x77fc[163]](this[_0x77fc[147]][_0x77fc[92]]);
  this[_0x77fc[165]](this[_0x77fc[147]][_0x77fc[164]]);
  this[_0x77fc[166]](this[_0x77fc[41]]);
  this[_0x77fc[167]]();
  this[_0x77fc[150]][_0x77fc[168]]();
  this[_0x77fc[169]]();
}
var GameProto = Object[_0x77fc[171]](GameCore[_0x77fc[170]]);
/**
 * @param {?} elem
 * @return {undefined}
 */
function showElem(elem) {
  if (elem) {
    elem[_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  }
}
/**
 * @param {?} elem
 * @return {undefined}
 */
function hideElem(elem) {
  if (elem) {
    elem[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  }
}
/**
 * @param {?} branchData
 * @param {?} beforeZero
 * @param {?} afterZero
 * @return {undefined}
 */
function LineClearAnimator(branchData, beforeZero, afterZero) {
  this[_0x77fc[176]] = afterZero;
  this[_0x77fc[177]] = branchData;
  this[_0x77fc[178]] = beforeZero;
  this[_0x77fc[179]] = this[_0x77fc[176]][_0x77fc[147]][_0x77fc[179]] / 1E3;
  /** @type {number} */
  this[_0x77fc[180]] = 0;
  this[_0x77fc[181]] = true;
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function Ctx2DView(canCreateDiscussions) {
  this[_0x77fc[176]] = canCreateDiscussions;
  /** @type {number} */
  this[_0x77fc[182]] = 0;
  /** @type {number} */
  this[_0x77fc[183]] = 1;
  /** @type {number} */
  this[_0x77fc[184]] = 2;
  this[_0x77fc[185]] = _0x77fc[10];
}
/**
 * @return {undefined}
 */
function FastFont2D() {
  /** @type {number} */
  this[_0x77fc[186]] = 16;
  this[_0x77fc[1]] = document[_0x77fc[3]](_0x77fc[187]);
  this[_0x77fc[188]] = this[_0x77fc[1]][_0x77fc[11]](_0x77fc[10]);
  /** @type {number} */
  this[_0x77fc[189]] = -1;
  this[_0x77fc[190]]();
}
/**
 * @return {undefined}
 */
function WebGLUtils() {
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function WebGLView(canCreateDiscussions) {
  this[_0x77fc[176]] = canCreateDiscussions;
  /** @type {!Array} */
  this[_0x77fc[191]] = [];
  /** @type {number} */
  this[_0x77fc[182]] = 0;
  /** @type {number} */
  this[_0x77fc[183]] = 1;
  /** @type {number} */
  this[_0x77fc[184]] = 2;
  this[_0x77fc[185]] = _0x77fc[192];
  /** @type {!Array} */
  this[_0x77fc[193]] = [9, 8, 1, 2, 3, 4, 5, 6, 7];
  this[_0x77fc[194]] = {
    vertex : _0x77fc[195],
    fragment : _0x77fc[196]
  };
  this[_0x77fc[197]] = false;
  /** @type {null} */
  this[_0x77fc[198]] = null;
}
/**
 * @return {undefined}
 */
function FastFont() {
  /** @type {number} */
  this[_0x77fc[186]] = 16;
  this[_0x77fc[199]] = {
    0 : {
      x : 0,
      y : 0
    },
    1 : {
      x : 20,
      y : 0
    },
    2 : {
      x : 40,
      y : 0
    },
    3 : {
      x : 60,
      y : 0
    },
    4 : {
      x : 80,
      y : 0
    },
    5 : {
      x : 100,
      y : 0
    },
    6 : {
      x : 120,
      y : 0
    },
    7 : {
      x : 140,
      y : 0
    },
    8 : {
      x : 160,
      y : 0
    },
    9 : {
      x : 180,
      y : 0
    },
    "(" : {
      x : 200,
      y : 0,
      w : 7
    },
    ")" : {
      x : 220,
      y : 0,
      w : 7
    },
    "/" : {
      x : 240,
      y : 0,
      w : 10
    },
    "?" : {
      x : 260,
      y : 0
    },
    "-" : {
      x : 280,
      y : 0
    },
    "+" : {
      x : 300,
      y : 0
    },
    "\u221e" : {
      x : 320,
      y : 0
    },
    "." : {
      x : 340,
      y : 0,
      w : 7
    },
    ":" : {
      x : 360,
      y : 0,
      w : 7
    },
    "," : {
      x : 380,
      y : 0,
      w : 7
    },
    " " : {
      x : 400,
      y : 0,
      w : 4
    }
  };
  this[_0x77fc[194]] = {
    vertex : _0x77fc[200],
    fragment : _0x77fc[201]
  };
  var result = this[_0x77fc[188]] = {};
  this[_0x77fc[1]] = result[_0x77fc[202]] = document[_0x77fc[3]](_0x77fc[187]);
  var gl = result[_0x77fc[203]] = WebGLUtils[_0x77fc[204]](result[_0x77fc[202]]);
  result[_0x77fc[205]] = WebGLUtils[_0x77fc[206]](result[_0x77fc[203]], this[_0x77fc[194]]);
  gl[_0x77fc[207]](result[_0x77fc[205]]);
  gl[_0x77fc[208]](0, 0, 0, 0);
  this[_0x77fc[190]]();
  WebGLUtils[_0x77fc[209]](gl, result);
  gl[_0x77fc[211]](result[_0x77fc[210]]);
  gl[_0x77fc[211]](result[_0x77fc[212]]);
  result[_0x77fc[213]] = new Float32Array(16);
  /** @type {number} */
  this[_0x77fc[214]] = 11;
  this[_0x77fc[215]] = new Float32Array(12 * this[_0x77fc[214]]);
  this[_0x77fc[216]] = new Float32Array(12 * this[_0x77fc[214]]);
  gl[_0x77fc[217]](gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
  gl[_0x77fc[218]](gl.BLEND);
  result[_0x77fc[219]] = {
    texture : gl[_0x77fc[220]]()
  };
  result[_0x77fc[221]] = gl[_0x77fc[222]]();
  result[_0x77fc[223]] = gl[_0x77fc[222]]();
  this[_0x77fc[224]] = false;
  /** @type {number} */
  this[_0x77fc[225]] = 16;
  /** @type {number} */
  this[_0x77fc[226]] = 1.4;
  /** @type {number} */
  this[_0x77fc[189]] = 0;
  /** @type {number} */
  this[_0x77fc[227]] = .75;
  this[_0x77fc[228]] = false;
}
/**
 * @param {?} logger
 * @return {undefined}
 */
function GameCore(logger) {
  this[_0x77fc[229]] = logger;
  /** @type {null} */
  this[_0x77fc[230]] = null;
  /** @type {!Array} */
  this[_0x77fc[177]] = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  /** @type {!Array} */
  this[_0x77fc[231]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this[_0x77fc[232]] = getBlockSets();
  /** @type {!Array} */
  this[_0x77fc[233]] = [{
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
  this[_0x77fc[234]] = {
    Z : 6,
    L : 3,
    O : 1,
    S : 5,
    I : 0,
    J : 4,
    T : 2
  };
  /** @type {!Array} */
  this[_0x77fc[235]] = [new Block(0), new Block(0), new Block(0), new Block(0), new Block(0)];
  this[_0x77fc[236]] = this[_0x77fc[235]][_0x77fc[237]];
  this[_0x77fc[238]] = {
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
  this[_0x77fc[239]] = [{
    id : 0,
    name : _0x77fc[240],
    data : _0x77fc[46]
  }, {
    id : 1,
    name : _0x77fc[45],
    data : _0x77fc[241],
    w : 32
  }, {
    id : 2,
    name : _0x77fc[242],
    data : _0x77fc[243],
    w : 32
  }, {
    id : 3,
    name : _0x77fc[244],
    data : _0x77fc[245],
    w : 32
  }, {
    id : 4,
    name : _0x77fc[246],
    data : _0x77fc[247],
    w : 32
  }, {
    id : 5,
    name : _0x77fc[248],
    data : _0x77fc[249],
    w : 32
  }, {
    id : 6,
    name : _0x77fc[250],
    data : _0x77fc[46]
  }, {
    id : 7,
    name : _0x77fc[251],
    data : _0x77fc[46]
  }, {
    id : 8,
    name : _0x77fc[252],
    data : _0x77fc[253],
    w : 32
  }, {
    id : 9,
    name : _0x77fc[254],
    data : _0x77fc[255],
    w : 32
  }, {
    id : 10,
    name : _0x77fc[256],
    data : _0x77fc[257],
    w : 32
  }, {
    id : 11,
    name : _0x77fc[258],
    data : _0x77fc[259],
    w : 32
  }, {
    id : 12,
    name : _0x77fc[260],
    data : _0x77fc[261],
    w : 32
  }, {
    id : 13,
    name : _0x77fc[262],
    data : _0x77fc[263],
    w : 32
  }];
  /** @type {null} */
  this[_0x77fc[264]] = null;
  this[_0x77fc[265]] = false;
  this[_0x77fc[266]] = false;
  this[_0x77fc[267]] = false;
  this[_0x77fc[268]] = false;
  this[_0x77fc[269]] = false;
  this[_0x77fc[270]] = false;
  this[_0x77fc[271]] = false;
  /** @type {!Array} */
  this[_0x77fc[272]] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  /** @type {!Array} */
  this[_0x77fc[273]] = [0, 2, 3, 4, 5, 6, 7, 8, 1, 0];
  /** @type {!Array} */
  this[_0x77fc[274]] = [_0x77fc[275], _0x77fc[276], _0x77fc[277], _0x77fc[278], _0x77fc[279], _0x77fc[280], _0x77fc[281], _0x77fc[282], _0x77fc[283], _0x77fc[284], _0x77fc[275], _0x77fc[285]];
  /** @type {!Array} */
  this[_0x77fc[286]] = [[0, 0, 0], [215, 15, 55], [227, 91, 2], [227, 159, 2], [89, 177, 1], [15, 155, 215], [33, 65, 198], [175, 41, 138], [153, 153, 153], [106, 106, 106], [0, 0, 0], [255, 255, 255]];
  /** @type {number} */
  var IS_HANDLED = 0;
  for (; IS_HANDLED < this[_0x77fc[286]][_0x77fc[237]]; ++IS_HANDLED) {
    /** @type {number} */
    var id = 0;
    for (; id < 3; ++id) {
      this[_0x77fc[286]][IS_HANDLED][id] /= 255;
    }
  }
  /** @type {!Array} */
  this[_0x77fc[287]] = [_0x77fc[275], _0x77fc[288], _0x77fc[289], _0x77fc[290], _0x77fc[291], _0x77fc[292], _0x77fc[293], _0x77fc[294], _0x77fc[283], _0x77fc[295], _0x77fc[275], _0x77fc[285]];
  /** @type {!Array} */
  this[_0x77fc[296]] = [_0x77fc[297], _0x77fc[298], _0x77fc[299], _0x77fc[300], _0x77fc[301]];
  /** @type {!Array} */
  this[_0x77fc[302]] = [];
  this[_0x77fc[303]] = new Items(this);
  this[_0x77fc[147]] = this[_0x77fc[304]] = {
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
  this[_0x77fc[306]](this[_0x77fc[147]][_0x77fc[305]]);
}
/**
 * @param {?} data
 * @param {?} length
 * @param {?} width
 * @return {undefined}
 */
function Bag(data, length, width) {
  this[_0x77fc[135]] = data;
  /** @type {!Array} */
  this[_0x77fc[307]] = [];
  for (let i = 0; i < length; i++) {
    for (let img_x = 0; img_x < width; img_x++) {
      this[_0x77fc[307]][_0x77fc[308]](i);
    }
  }
  this[_0x77fc[309]] = this[_0x77fc[307]][_0x77fc[310]](0);
}
/**
 * @param {?} config
 * @param {?} _newfeed
 * @return {undefined}
 */
function Classic(config, _newfeed) {
  this[_0x77fc[135]] = config;
  this[_0x77fc[311]] = _newfeed;
}
/**
 * @param {?} res
 * @param {?} rej
 * @param {?} nb_ft
 * @param {?} type_geom
 * @return {undefined}
 */
function OneBlock(res, rej, nb_ft, type_geom) {
  if (this[_0x77fc[135]] = res, this[_0x77fc[311]] = rej, this[_0x77fc[309]] = [], type_geom) {
    let _0xe1a7x13 = new Bag(res, rej, type_geom);
    for (let _t_ix = 0; _t_ix < nb_ft; ++_t_ix) {
      this[_0x77fc[309]][_0x77fc[308]](_0xe1a7x13[_0x77fc[313]]()[_0x77fc[312]]);
    }
  } else {
    for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
      let artistTrack;
      do {
        artistTrack = Math[_0x77fc[314]](this.RNG() * this[_0x77fc[311]]);
      } while (-1 !== this[_0x77fc[309]][_0x77fc[315]](artistTrack));
      this[_0x77fc[309]][_0x77fc[308]](artistTrack);
    }
  }
  /** @type {number} */
  this[_0x77fc[316]] = 0;
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function C2Sim(formatters, customFormatters) {
  this[_0x77fc[135]] = formatters;
  this[_0x77fc[311]] = customFormatters;
  /** @type {!Array} */
  this[_0x77fc[317]] = [-1, -2];
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function Repeated(formatters, customFormatters) {
  this[_0x77fc[230]] = formatters;
  this[_0x77fc[311]] = customFormatters;
  /** @type {null} */
  this[_0x77fc[174]] = null;
  /** @type {number} */
  this[_0x77fc[318]] = 0;
  this[_0x77fc[319]]();
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function BsBlock(formatters, customFormatters) {
  this[_0x77fc[230]] = formatters;
  this[_0x77fc[320]] = customFormatters;
  /** @type {number} */
  this[_0x77fc[318]] = 0;
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function BigBlockRand(formatters, customFormatters) {
  this[_0x77fc[230]] = formatters;
  this[_0x77fc[320]] = customFormatters;
  /** @type {number} */
  this[_0x77fc[318]] = 0;
  /** @type {number} */
  this[_0x77fc[321]] = 5E3;
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function ConstBlock(formatters, customFormatters) {
  this[_0x77fc[312]] = formatters;
  this[_0x77fc[322]] = customFormatters;
}
/**
 * @param {?} status
 * @return {undefined}
 */
function Live(status) {
  this[_0x77fc[323]] = _0x77fc[324];
  this[_0x77fc[325]] = conf_global[_0x77fc[326]];
  this[_0x77fc[327]] = conf_global[_0x77fc[328]];
  this[_0x77fc[329]] = conf_global[_0x77fc[330]];
  this[_0x77fc[331]] = conf_global[_0x77fc[331]];
  this[_0x77fc[332]] = _0x77fc[46] !== conf_global[_0x77fc[333]];
  this[_0x77fc[334]] = true;
  this[_0x77fc[335]] = false;
  this[_0x77fc[336]] = false;
  /** @type {null} */
  this[_0x77fc[337]] = null;
  this[_0x77fc[338]] = status;
  /** @type {number} */
  this[_0x77fc[339]] = 0;
  /** @type {number} */
  this[_0x77fc[340]] = 0;
  /** @type {number} */
  this[_0x77fc[341]] = 0;
  this[_0x77fc[342]] = false;
  /** @type {null} */
  this[_0x77fc[343]] = null;
  /** @type {null} */
  this[_0x77fc[344]] = null;
  /** @type {null} */
  this[_0x77fc[345]] = null;
  /** @type {null} */
  this[_0x77fc[346]] = null;
  /** @type {null} */
  this[_0x77fc[347]] = null;
  this[_0x77fc[348]] = {};
  this[_0x77fc[349]] = Array();
  this[_0x77fc[350]] = Array();
  this[_0x77fc[351]] = Array();
  this[_0x77fc[352]] = {};
  /** @type {!Array} */
  this[_0x77fc[353]] = [];
  this[_0x77fc[354]] = _0x77fc[46];
  /** @type {number} */
  this[_0x77fc[355]] = 0;
  this[_0x77fc[356]] = {};
  /** @type {null} */
  this[_0x77fc[357]] = null;
  this[_0x77fc[358]] = _0x77fc[46];
  this[_0x77fc[359]] = _0x77fc[46];
  /** @type {number} */
  this[_0x77fc[360]] = 0;
  this[_0x77fc[361]] = void 0;
  this[_0x77fc[362]] = false;
  this[_0x77fc[363]] = false;
  this[_0x77fc[364]] = {};
  this[_0x77fc[365]] = false;
  /** @type {number} */
  this[_0x77fc[366]] = 0;
  this[_0x77fc[367]] = document[_0x77fc[3]](_0x77fc[368]);
  this[_0x77fc[369]] = document[_0x77fc[3]](_0x77fc[370]);
  this[_0x77fc[371]] = document[_0x77fc[3]](_0x77fc[372]);
  this[_0x77fc[373]] = document[_0x77fc[3]](_0x77fc[374]);
  this[_0x77fc[375]] = document[_0x77fc[3]](_0x77fc[375]);
  this[_0x77fc[376]] = document[_0x77fc[3]](_0x77fc[376]);
  this[_0x77fc[377]] = document[_0x77fc[3]](_0x77fc[378]);
  this[_0x77fc[379]] = document[_0x77fc[3]](_0x77fc[380]);
  this[_0x77fc[381]] = document[_0x77fc[383]](_0x77fc[382]);
  this[_0x77fc[381]][_0x77fc[386]][_0x77fc[385]](_0x77fc[384]);
  this[_0x77fc[379]][_0x77fc[387]](this[_0x77fc[381]]);
  this[_0x77fc[381]][_0x77fc[173]][_0x77fc[388]] = _0x77fc[389];
  this[_0x77fc[390]] = document[_0x77fc[3]](_0x77fc[391]);
  this[_0x77fc[392]] = document[_0x77fc[3]](_0x77fc[392]);
  this[_0x77fc[393]] = document[_0x77fc[3]](_0x77fc[393]);
  this[_0x77fc[394]] = document[_0x77fc[3]](_0x77fc[394]);
  this[_0x77fc[395]] = document[_0x77fc[3]](_0x77fc[395]);
  this[_0x77fc[396]] = document[_0x77fc[3]](_0x77fc[396]);
  this[_0x77fc[397]] = document[_0x77fc[3]](_0x77fc[397]);
  this[_0x77fc[398]] = document[_0x77fc[3]](_0x77fc[398]);
  this[_0x77fc[399]] = false;
  this[_0x77fc[400]] = true;
  this[_0x77fc[401]] = false;
  this[_0x77fc[402]] = false;
  this[_0x77fc[403]] = true;
  this[_0x77fc[404]] = document[_0x77fc[3]](_0x77fc[404]);
  this[_0x77fc[405]] = document[_0x77fc[3]](_0x77fc[405]);
  this[_0x77fc[406]] = document[_0x77fc[3]](_0x77fc[407]);
  this[_0x77fc[408]]();
  this[_0x77fc[409]] = new RoomInfo(this);
  this[_0x77fc[410]]();
  this[_0x77fc[411]] = document[_0x77fc[3]](_0x77fc[411]);
  this[_0x77fc[412]] = document[_0x77fc[3]](_0x77fc[413]);
  this[_0x77fc[414]] = document[_0x77fc[3]](_0x77fc[415]);
  /** @type {null} */
  this[_0x77fc[415]] = null;
  this[_0x77fc[416]] = document[_0x77fc[3]](_0x77fc[417]);
  this[_0x77fc[418]] = conf_global[_0x77fc[333]];
  this[_0x77fc[377]][_0x77fc[419]] = i18n[_0x77fc[420]];
  this[_0x77fc[421]] = {};
  this[_0x77fc[422]] = true;
  /** @type {number} */
  this[_0x77fc[423]] = 0;
  /** @type {number} */
  this[_0x77fc[424]] = 0;
  this[_0x77fc[425]] = new ChatAutocomplete(this[_0x77fc[375]], this[_0x77fc[376]], _0x77fc[426], null);
  /** @type {number} */
  this[_0x77fc[425]][_0x77fc[427]] = 3;
  this[_0x77fc[428]] = new ChatAutocomplete(this[_0x77fc[375]], this[_0x77fc[376]], _0x77fc[429], function() {
    return arrayUnique(Object[_0x77fc[432]](this[_0x77fc[348]])[_0x77fc[431]](function(canCreateDiscussions) {
      return canCreateDiscussions[_0x77fc[333]];
    }));
  }[_0x77fc[430]](this));
  this[_0x77fc[428]][_0x77fc[433]] = false;
  let _0xe1a7x7 = new _jstrisx;
  this[_0x77fc[434]] = _0xe1a7x7[_0x77fc[435]]();
  this[_0x77fc[436]] = false;
  /** @type {number} */
  this[_0x77fc[437]] = 0;
  /** @type {number} */
  this[_0x77fc[438]] = 0;
  this[_0x77fc[439]] = _0x77fc[46];
  /** @type {null} */
  this[_0x77fc[440]] = null;
  /** @type {!Array} */
  this[_0x77fc[441]] = [1, 1];
  /** @type {null} */
  this[_0x77fc[442]] = null;
  this[_0x77fc[443]] = false;
  this[_0x77fc[444]] = {};
  /** @type {number} */
  this[_0x77fc[445]] = 0;
  /** @type {!Array} */
  this[_0x77fc[446]] = [_0x77fc[447], _0x77fc[448], _0x77fc[449], _0x77fc[450], _0x77fc[451], _0x77fc[452], _0x77fc[453], _0x77fc[454]];
  /** @type {number} */
  this[_0x77fc[455]] = 500;
  /** @type {number} */
  this[_0x77fc[456]] = 0;
  this[_0x77fc[457]] = false;
  this[_0x77fc[458]] = false;
  this[_0x77fc[459]] = new Friends(this);
  this[_0x77fc[338]][_0x77fc[153]][_0x77fc[461]](i18n[_0x77fc[460]]);
  this[_0x77fc[462]]();
}
/**
 * @param {?} backend_hostname
 * @return {undefined}
 */
function Client(backend_hostname) {
  this[_0x77fc[339]] = backend_hostname;
  /** @type {number} */
  this[_0x77fc[463]] = 0;
  /** @type {null} */
  this[_0x77fc[464]] = null;
  /** @type {null} */
  this[_0x77fc[333]] = null;
  this[_0x77fc[465]] = false;
  this[_0x77fc[466]] = false;
  /** @type {null} */
  this[_0x77fc[467]] = null;
  /** @type {null} */
  this[_0x77fc[468]] = null;
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function RoomInfo(canCreateDiscussions) {
  this[_0x77fc[469]] = canCreateDiscussions;
  this[_0x77fc[470]] = this[_0x77fc[471]] = this[_0x77fc[472]] = null;
  this[_0x77fc[473]] = {};
  this[_0x77fc[474]] = {};
  /** @type {!Array} */
  this[_0x77fc[475]] = [i18n[_0x77fc[476]], i18n[_0x77fc[477]]];
  this[_0x77fc[478]] = {
    at : _0x77fc[479],
    ct : _0x77fc[480],
    ld : _0x77fc[481],
    cd : {
      n : _0x77fc[482],
      u : _0x77fc[483]
    },
    gdm : {
      n : _0x77fc[484],
      v : [null, _0x77fc[448], _0x77fc[449], null, _0x77fc[451], _0x77fc[452], _0x77fc[453], _0x77fc[454]]
    },
    gblock : {
      n : _0x77fc[485],
      v : [_0x77fc[486], _0x77fc[487], _0x77fc[175], _0x77fc[488]]
    },
    rnd : {
      n : _0x77fc[489],
      v : [_0x77fc[490], _0x77fc[491], _0x77fc[492], _0x77fc[493], _0x77fc[494], _0x77fc[495], _0x77fc[496], _0x77fc[497], _0x77fc[498], _0x77fc[499], _0x77fc[500]]
    },
    pr : _0x77fc[501],
    hold : _0x77fc[502],
    bbs : {
      n : _0x77fc[503],
      v : [null, _0x77fc[504], null, _0x77fc[505], _0x77fc[506], _0x77fc[507], _0x77fc[508], _0x77fc[509], _0x77fc[510]]
    },
    grav : _0x77fc[511],
    mess : {
      n : _0x77fc[512],
      u : _0x77fc[513]
    },
    gDelay : {
      n : _0x77fc[514],
      u : _0x77fc[483]
    },
    hostStart : _0x77fc[515],
    gInv : _0x77fc[516],
    gapW : _0x77fc[517],
    noFW : _0x77fc[518],
    sa : _0x77fc[519],
    as : {
      n : _0x77fc[520],
      v : [i18n[_0x77fc[476]], i18n[_0x77fc[477]] + _0x77fc[521], i18n[_0x77fc[477]] + _0x77fc[522]]
    },
    asEx : _0x77fc[523],
    sgp : {
      n : _0x77fc[524],
      v : [_0x77fc[525], _0x77fc[526], _0x77fc[527], _0x77fc[528]]
    }
  };
  this[_0x77fc[529]] = {
    apm : {
      n : i18n[_0x77fc[530]],
      u : _0x77fc[46]
    },
    sub : {
      n : i18n[_0x77fc[531]],
      u : i18n[_0x77fc[532]]
    },
    gt : {
      n : i18n[_0x77fc[533]],
      u : i18n[_0x77fc[534]]
    }
  };
}
/**
 * @param {?} graphProperties
 * @return {undefined}
 */
function Settings(graphProperties) {
  this[_0x77fc[338]] = graphProperties;
  this[_0x77fc[535]] = document[_0x77fc[3]](_0x77fc[536]);
  this[_0x77fc[537]] = document[_0x77fc[3]](_0x77fc[538]);
  this[_0x77fc[539]] = document[_0x77fc[3]](_0x77fc[540]);
  this[_0x77fc[541]] = document[_0x77fc[3]](_0x77fc[542]);
  this[_0x77fc[543]] = document[_0x77fc[3]](_0x77fc[544]);
  this[_0x77fc[545]] = document[_0x77fc[3]](_0x77fc[546]);
  this[_0x77fc[547]] = document[_0x77fc[3]](_0x77fc[547]);
  this[_0x77fc[548]] = document[_0x77fc[3]](_0x77fc[548]);
  this[_0x77fc[549]] = document[_0x77fc[3]](_0x77fc[550]);
  this[_0x77fc[551]] = document[_0x77fc[3]](_0x77fc[552]);
  this[_0x77fc[553]] = document[_0x77fc[3]](_0x77fc[554]);
  this[_0x77fc[555]] = document[_0x77fc[3]](_0x77fc[556]);
  this[_0x77fc[557]] = document[_0x77fc[3]](_0x77fc[557]);
  this[_0x77fc[558]] = Array();
  this[_0x77fc[558]][1] = document[_0x77fc[3]](_0x77fc[559]);
  this[_0x77fc[558]][2] = document[_0x77fc[3]](_0x77fc[560]);
  this[_0x77fc[561]] = document[_0x77fc[3]](_0x77fc[562]);
  this[_0x77fc[561]][_0x77fc[563]] = this[_0x77fc[564]][_0x77fc[430]](this);
  this[_0x77fc[565]] = document[_0x77fc[3]](_0x77fc[566]);
  this[_0x77fc[565]][_0x77fc[563]] = this[_0x77fc[567]][_0x77fc[430]](this);
  this[_0x77fc[568]] = document[_0x77fc[3]](_0x77fc[569]);
  /** @type {null} */
  this[_0x77fc[570]] = null;
  this[_0x77fc[571]] = false;
  this[_0x77fc[572]] = Array();
  /** @type {number} */
  var selector = 1;
  for (; selector <= 10; selector++) {
    this[_0x77fc[572]][selector] = document[_0x77fc[3]](_0x77fc[573] + selector);
    this[_0x77fc[572]][selector][_0x77fc[574]] = this[_0x77fc[575]][_0x77fc[430]](this, selector);
  }
  this[_0x77fc[576]] = false;
  this[_0x77fc[577]] = _0x77fc[578];
  this[_0x77fc[579]] = new Hammer(this[_0x77fc[568]]);
  this[_0x77fc[579]][_0x77fc[322]]({
    enable : false,
    touchAction : _0x77fc[580]
  });
  this[_0x77fc[581]] = this[_0x77fc[582]];
  this[_0x77fc[583]] = false;
  this[_0x77fc[584]] = this[_0x77fc[585]]();
  this[_0x77fc[586]] = false;
  this[_0x77fc[587]] = document[_0x77fc[3]](_0x77fc[587]);
  this[_0x77fc[587]][_0x77fc[588]] = this[_0x77fc[589]][_0x77fc[430]](this);
  this[_0x77fc[590]] = Array();
  /** @type {number} */
  selector = 1;
  for (; selector <= document[_0x77fc[592]](_0x77fc[591])[_0x77fc[237]]; selector++) {
    this[_0x77fc[590]][selector] = document[_0x77fc[3]](_0x77fc[593] + selector);
    this[_0x77fc[590]][selector][_0x77fc[588]] = this[_0x77fc[594]][_0x77fc[430]](this, selector);
  }
}
/**
 * @param {?} partKeys
 * @return {undefined}
 */
function soundCredits(partKeys) {
  var div;
  var DOM_CONTENT_LOADED;
  var atomToChunk;
  if (_0x77fc[547] == partKeys[_0x77fc[595]][_0x77fc[312]]) {
    div = _0x77fc[596];
    DOM_CONTENT_LOADED = _0x77fc[597];
    atomToChunk = SFXsets;
  } else {
    div = _0x77fc[598];
    DOM_CONTENT_LOADED = _0x77fc[599];
    atomToChunk = VSFXsets;
  }
  var placeHolder = document[_0x77fc[3]](div);
  var tempColorArray = document[_0x77fc[3]](DOM_CONTENT_LOADED);
  var colorArray = new (0, atomToChunk[parseInt(partKeys[_0x77fc[595]][_0x77fc[601]])][_0x77fc[600]]);
  if (colorArray[_0x77fc[602]]) {
    placeHolder[_0x77fc[173]][_0x77fc[172]] = _0x77fc[603];
    tempColorArray[_0x77fc[604]] = colorArray[_0x77fc[602]];
  } else {
    hideElem(placeHolder);
  }
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function GameSlots(canCreateDiscussions) {
  this[_0x77fc[338]] = canCreateDiscussions;
  this[_0x77fc[605]] = document[_0x77fc[3]](_0x77fc[606]);
  this[_0x77fc[367]] = document[_0x77fc[3]](_0x77fc[367]);
  this[_0x77fc[371]] = document[_0x77fc[3]](_0x77fc[372]);
  this[_0x77fc[607]] = document[_0x77fc[3]](_0x77fc[608]);
  this[_0x77fc[394]] = document[_0x77fc[3]](_0x77fc[394]);
  this[_0x77fc[404]] = document[_0x77fc[3]](_0x77fc[404]);
  this[_0x77fc[609]] = this[_0x77fc[605]][_0x77fc[610]];
  this[_0x77fc[611]] = this[_0x77fc[605]][_0x77fc[612]];
  this[_0x77fc[613]] = this[_0x77fc[614]] = 0;
  this[_0x77fc[615]] = this[_0x77fc[616]] = 0;
  /** @type {number} */
  this[_0x77fc[617]] = 1;
  this[_0x77fc[618]] = false;
  this[_0x77fc[619]] = false;
  this[_0x77fc[620]] = false;
  document[_0x77fc[3]](_0x77fc[622])[_0x77fc[621]] = this[_0x77fc[618]];
  document[_0x77fc[3]](_0x77fc[623])[_0x77fc[621]] = this[_0x77fc[619]];
  /** @type {number} */
  document[_0x77fc[3]](_0x77fc[624])[_0x77fc[601]] = 100;
  this[_0x77fc[625]] = {};
  /** @type {number} */
  this[_0x77fc[626]] = 15;
  /** @type {number} */
  this[_0x77fc[627]] = 18;
  /** @type {number} */
  this[_0x77fc[628]] = 5;
  /** @type {!Array} */
  this[_0x77fc[629]] = [];
  /** @type {number} */
  this[_0x77fc[630]] = -1;
  /** @type {number} */
  this[_0x77fc[631]] = 0;
  /** @type {!Array} */
  this[_0x77fc[632]] = [1, 2, 4];
  this[_0x77fc[633]] = false;
  this[_0x77fc[634]] = true;
  this[_0x77fc[635]] = false;
  this[_0x77fc[636]] = {
    playersW : 450,
    playersH : 450,
    gameFrame : 1091
  };
  /** @type {number} */
  this[_0x77fc[637]] = 0;
  /** @type {number} */
  this[_0x77fc[638]] = 10;
  /** @type {number} */
  this[_0x77fc[639]] = 10;
  /** @type {number} */
  this[_0x77fc[640]] = 20;
  this[_0x77fc[641]] = false;
  this[_0x77fc[642]] = false;
  this[_0x77fc[643]](6);
  /** @type {!Array} */
  this[_0x77fc[644]] = [];
  /** @type {number} */
  this[_0x77fc[645]] = 20;
  /** @type {null} */
  this[_0x77fc[646]] = null;
  this[_0x77fc[647]] = {};
}
/**
 * @param {?} slotData
 * @param {?} bone
 * @param {?} elementId
 * @param {?} pathId
 * @return {undefined}
 */
function Slot(slotData, bone, elementId, pathId) {
  this[_0x77fc[648]] = pathId;
  this[_0x77fc[312]] = slotData;
  /** @type {number} */
  this[_0x77fc[339]] = -1;
  this[_0x77fc[649]] = bone;
  this[_0x77fc[650]] = elementId;
  this[_0x77fc[651]] = document[_0x77fc[383]](_0x77fc[1]);
  this[_0x77fc[652]] = document[_0x77fc[383]](_0x77fc[1]);
  this[_0x77fc[653]] = document[_0x77fc[383]](_0x77fc[1]);
  this[_0x77fc[654]] = document[_0x77fc[383]](_0x77fc[1]);
  this[_0x77fc[651]][_0x77fc[386]][_0x77fc[385]](_0x77fc[655], _0x77fc[656]);
  this[_0x77fc[652]][_0x77fc[386]][_0x77fc[385]](_0x77fc[655], _0x77fc[8]);
  this[_0x77fc[653]][_0x77fc[386]][_0x77fc[385]](_0x77fc[655], _0x77fc[657]);
  this[_0x77fc[654]][_0x77fc[386]][_0x77fc[385]](_0x77fc[655], _0x77fc[658]);
  this[_0x77fc[333]] = document[_0x77fc[383]](_0x77fc[382]);
  this[_0x77fc[659]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[661]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[662]] = new SlotStats(this, this[_0x77fc[648]]);
  var babelConfig = {
    main : this[_0x77fc[651]],
    bg : this[_0x77fc[652]],
    hold : this[_0x77fc[653]],
    queue : this[_0x77fc[654]]
  };
  this[_0x77fc[6]] = new SlotView(babelConfig);
  this[_0x77fc[6]][_0x77fc[176]] = this[_0x77fc[648]][_0x77fc[338]];
  this[_0x77fc[6]][_0x77fc[663]] = this;
  this[_0x77fc[152]]();
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function SlotStats(formatters, customFormatters) {
  this[_0x77fc[663]] = formatters;
  this[_0x77fc[648]] = customFormatters;
  this[_0x77fc[664]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[664]][_0x77fc[386]][_0x77fc[385]](_0x77fc[593], _0x77fc[665]);
  this[_0x77fc[666]] = document[_0x77fc[383]](_0x77fc[382]);
  this[_0x77fc[667]] = document[_0x77fc[383]](_0x77fc[382]);
  this[_0x77fc[668]] = document[_0x77fc[383]](_0x77fc[382]);
  this[_0x77fc[669]] = document[_0x77fc[383]](_0x77fc[382]);
  var artistTrack = document[_0x77fc[383]](_0x77fc[660]);
  artistTrack[_0x77fc[386]][_0x77fc[385]](_0x77fc[670]);
  var GET_AUTH_URL_TIMEOUT = document[_0x77fc[383]](_0x77fc[660]);
  GET_AUTH_URL_TIMEOUT[_0x77fc[386]][_0x77fc[385]](_0x77fc[670]);
  this[_0x77fc[671]] = document[_0x77fc[383]](_0x77fc[382]);
  this[_0x77fc[671]][_0x77fc[386]][_0x77fc[385]](_0x77fc[672]);
  this[_0x77fc[669]][_0x77fc[386]][_0x77fc[385]](_0x77fc[673]);
  this[_0x77fc[668]][_0x77fc[386]][_0x77fc[385]](_0x77fc[673]);
  this[_0x77fc[671]][_0x77fc[386]][_0x77fc[385]](_0x77fc[673]);
  this[_0x77fc[668]][_0x77fc[419]] = _0x77fc[674];
  this[_0x77fc[669]][_0x77fc[419]] = _0x77fc[530];
  this[_0x77fc[671]][_0x77fc[419]] = _0x77fc[525];
  this[_0x77fc[666]][_0x77fc[419]] = this[_0x77fc[667]][_0x77fc[419]] = _0x77fc[675];
  artistTrack[_0x77fc[387]](this[_0x77fc[668]]);
  artistTrack[_0x77fc[387]](this[_0x77fc[666]]);
  GET_AUTH_URL_TIMEOUT[_0x77fc[387]](this[_0x77fc[669]]);
  GET_AUTH_URL_TIMEOUT[_0x77fc[387]](this[_0x77fc[667]]);
  this[_0x77fc[664]][_0x77fc[387]](artistTrack);
  this[_0x77fc[664]][_0x77fc[387]](GET_AUTH_URL_TIMEOUT);
  this[_0x77fc[664]][_0x77fc[387]](this[_0x77fc[671]]);
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function SlotView(canCreateDiscussions) {
  /** @type {null} */
  this[_0x77fc[176]] = null;
  /** @type {null} */
  this[_0x77fc[663]] = null;
  /** @type {number} */
  this[_0x77fc[182]] = 0;
  /** @type {number} */
  this[_0x77fc[183]] = 1;
  /** @type {number} */
  this[_0x77fc[184]] = 2;
  this[_0x77fc[1]] = canCreateDiscussions[_0x77fc[569]];
  this[_0x77fc[188]] = this[_0x77fc[1]][_0x77fc[11]](_0x77fc[10]);
  this[_0x77fc[7]] = canCreateDiscussions[_0x77fc[676]];
  this[_0x77fc[9]] = this[_0x77fc[7]][_0x77fc[11]](_0x77fc[10]);
  this[_0x77fc[4]] = canCreateDiscussions[_0x77fc[677]];
  this[_0x77fc[678]] = this[_0x77fc[4]][_0x77fc[11]](_0x77fc[10]);
  this[_0x77fc[5]] = canCreateDiscussions[_0x77fc[235]];
  this[_0x77fc[679]] = this[_0x77fc[5]][_0x77fc[11]](_0x77fc[10]);
  /** @type {number} */
  this[_0x77fc[25]] = 24;
  /** @type {number} */
  this[_0x77fc[639]] = 24;
  /** @type {number} */
  this[_0x77fc[40]] = 1;
  this[_0x77fc[680]] = false;
  this[_0x77fc[27]] = false;
  /** @type {number} */
  this[_0x77fc[681]] = 0;
  this[_0x77fc[36]] = new Image;
  /** @type {number} */
  this[_0x77fc[41]] = 0;
  /** @type {number} */
  this[_0x77fc[43]] = 0;
  /** @type {number} */
  this[_0x77fc[682]] = 32;
  this[_0x77fc[114]] = false;
  this[_0x77fc[118]] = true;
}
/**
 * @param {?} options
 * @return {undefined}
 */
function StatsManager(options) {
  this[_0x77fc[662]] = {};
  /** @type {!Array} */
  this[_0x77fc[683]] = [];
  this[_0x77fc[684]] = false;
  this[_0x77fc[685]] = document[_0x77fc[3]](_0x77fc[686]);
  this[_0x77fc[687]] = options[_0x77fc[176]][_0x77fc[150]][_0x77fc[689]][options[_0x77fc[176]][_0x77fc[688]](false)];
  this[_0x77fc[690]]();
  this[_0x77fc[691]](options);
}
/**
 * @param {?} type
 * @param {?} box
 * @param {?} meta11183
 * @return {undefined}
 */
function StatLine(type, box, meta11183) {
  this[_0x77fc[312]] = type;
  this[_0x77fc[692]] = meta11183;
  /** @type {null} */
  this[_0x77fc[693]] = null;
  this[_0x77fc[694]] = false;
  this[_0x77fc[695]] = document[_0x77fc[383]](_0x77fc[382]);
  this[_0x77fc[695]][_0x77fc[419]] = box;
  this[_0x77fc[696]] = this[_0x77fc[601]] = _0x77fc[525];
  this[_0x77fc[697]] = true;
  this[_0x77fc[698]] = false;
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function GameCaption(canCreateDiscussions) {
  this[_0x77fc[699]] = canCreateDiscussions;
  this[_0x77fc[700]] = {};
  /** @type {number} */
  this[_0x77fc[701]] = 1;
  /** @type {number} */
  this[_0x77fc[702]] = 2;
  /** @type {number} */
  this[_0x77fc[703]] = 3;
  /** @type {number} */
  this[_0x77fc[704]] = 4;
  /** @type {number} */
  this[_0x77fc[705]] = 5;
  /** @type {number} */
  this[_0x77fc[706]] = 6;
  /** @type {number} */
  this[_0x77fc[707]] = 7;
  /** @type {number} */
  this[_0x77fc[708]] = 8;
  /** @type {number} */
  this[_0x77fc[709]] = 9;
  /** @type {number} */
  this[_0x77fc[710]] = 10;
  /** @type {number} */
  this[_0x77fc[711]] = 11;
  /** @type {number} */
  this[_0x77fc[712]] = 12;
  /** @type {number} */
  this[_0x77fc[713]] = 13;
  /** @type {number} */
  this[_0x77fc[714]] = 14;
  /** @type {null} */
  this[_0x77fc[715]] = null;
}
/**
 * @param {?} options
 * @return {undefined}
 */
function Mobile(options) {
  this[_0x77fc[338]] = options;
  this[_0x77fc[716]] = this[_0x77fc[716]]();
  this[_0x77fc[150]] = this[_0x77fc[338]][_0x77fc[150]];
  /** @type {null} */
  this[_0x77fc[717]] = null;
  this[_0x77fc[718]] = false;
  if (this[_0x77fc[716]]) {
    this[_0x77fc[719]]();
  }
}
/**
 * @param {?} formatters
 * @param {?} customFormatters
 * @return {undefined}
 */
function ReplayAction(formatters, customFormatters) {
  this[_0x77fc[720]] = formatters;
  this[_0x77fc[180]] = customFormatters;
}
/**
 * @return {undefined}
 */
function Replay() {
  this[_0x77fc[721]] = Object[_0x77fc[722]]({
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
  this[_0x77fc[723]] = Object[_0x77fc[722]]({
    AFK : 0,
    BLOCK_SET : 1,
    MOVE_TO : 2,
    RANDOMIZER : 3,
    MATRIX_MOD : 4,
    WIDE_GARBAGE_ADD : 5
  });
  this[_0x77fc[724]] = Array();
  /** @type {!Array} */
  this[_0x77fc[724]][this[_0x77fc[721]][_0x77fc[725]]] = [5, 4];
  /** @type {!Array} */
  this[_0x77fc[724]][this[_0x77fc[721]][_0x77fc[726]]] = [5];
  /** @type {!Array} */
  this[_0x77fc[724]][this[_0x77fc[721]][_0x77fc[727]]] = [1];
  /** @type {!Array} */
  this[_0x77fc[724]][this[_0x77fc[721]][_0x77fc[723]]] = [4];
  this[_0x77fc[728]] = {
    v : 3.3,
    softDropId : void 0,
    gameStart : void 0,
    gameEnd : void 0,
    seed : void 0,
    m : void 0,
    bs : void 0,
    se : void 0,
    das : void 0,
    arr : void 0
  };
  this[_0x77fc[729]] = Array();
  this[_0x77fc[730]] = _0x77fc[46];
  this[_0x77fc[731]] = _0x77fc[46];
  /** @type {number} */
  this[_0x77fc[732]] = 0;
  this[_0x77fc[733]] = false;
  /** @type {!Array} */
  this[_0x77fc[734]] = [];
  this[_0x77fc[735]] = new ReplayStream;
  /** @type {null} */
  this[_0x77fc[736]] = null;
  /** @type {null} */
  this[_0x77fc[737]] = null;
}
/**
 * @param {?} arrayBuffer
 * @return {?}
 */
function _arrayBufferToBase64(arrayBuffer) {
  var result = _0x77fc[46];
  var arr = new Uint8Array(arrayBuffer);
  if (endianness()) {
    var n = arr[_0x77fc[738]] / 4;
    /** @type {number} */
    var j = 0;
    for (; j < n; j++) {
      /** @type {number} */
      var initIndex = 0;
      for (; initIndex < 4; initIndex++) {
        result = result + String[_0x77fc[739]](arr[4 * j + 3 - initIndex]);
      }
    }
  } else {
    n = arr[_0x77fc[738]];
    /** @type {number} */
    j = 0;
    for (; j < n; j++) {
      result = result + String[_0x77fc[739]](arr[j]);
    }
  }
  return window[_0x77fc[740]](result);
}
/**
 * @return {?}
 */
function endianness() {
  var buffer = new ArrayBuffer(4);
  var bytes32 = new Uint32Array(buffer);
  var config_data = new Uint8Array(buffer);
  if (bytes32[0] = 3735928559, 239 === config_data[0]) {
    return 1;
  }
  if (222 === config_data[0]) {
    return 0;
  }
  throw alert(_0x77fc[741]), new Error(_0x77fc[742]);
}
/**
 * @return {undefined}
 */
function ReplayStream() {
  /** @type {!Array} */
  this[_0x77fc[600]] = [0];
  /** @type {number} */
  this[_0x77fc[743]] = 0;
  /** @type {number} */
  this[_0x77fc[744]] = 0;
  /** @type {number} */
  this[_0x77fc[745]] = 32;
  /** @type {number} */
  this[_0x77fc[746]] = 0;
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function RulesetManager(canCreateDiscussions) {
  this[_0x77fc[338]] = canCreateDiscussions;
  this[_0x77fc[747]] = document[_0x77fc[3]](_0x77fc[748]);
  this[_0x77fc[304]] = canCreateDiscussions[_0x77fc[304]];
  /** @type {number} */
  this[_0x77fc[749]] = 0;
  this[_0x77fc[750]] = {
    cd : _0x77fc[179],
    rnd : _0x77fc[305],
    pr : _0x77fc[751],
    hold : _0x77fc[752],
    bbs : _0x77fc[753],
    grav : _0x77fc[164],
    ld : _0x77fc[92],
    mess : _0x77fc[754],
    gapW : _0x77fc[755],
    gInv : _0x77fc[756],
    gDelay : _0x77fc[455],
    gblock : _0x77fc[757],
    tsdOnly : _0x77fc[758],
    as : _0x77fc[759],
    sl : _0x77fc[760],
    sm : _0x77fc[761],
    cl : _0x77fc[762],
    sfx : _0x77fc[763],
    vsfx : _0x77fc[764],
    sa : _0x77fc[765],
    ext : _0x77fc[766],
    sgpA : _0x77fc[456]
  };
  this[_0x77fc[767]] = {
    clearDelay : _0x77fc[179],
    rndSel : _0x77fc[305],
    prSel : _0x77fc[751],
    hasHold : _0x77fc[752],
    blocksSel : _0x77fc[753],
    gravityLvl : _0x77fc[164],
    lockDelay : _0x77fc[92],
    mess : _0x77fc[754],
    gapW : _0x77fc[755],
    gInv : _0x77fc[756],
    garbageDelay : _0x77fc[455],
    gblockSel : _0x77fc[757],
    tsdOnly : _0x77fc[758],
    allSpin : _0x77fc[759],
    speedLimit : _0x77fc[760],
    scoreMult : _0x77fc[761],
    clearLines : _0x77fc[762],
    sfx : _0x77fc[763],
    vsfx : _0x77fc[764],
    solidAtk : _0x77fc[765],
    sgProfile : _0x77fc[768]
  };
  /** @type {!Array} */
  this[_0x77fc[769]] = [{
    id : 0,
    lvl : 1,
    name : _0x77fc[45],
    key : _0x77fc[46],
    desc : _0x77fc[770],
    c : {}
  }, {
    id : 1,
    lvl : 1,
    name : _0x77fc[771],
    key : _0x77fc[772],
    desc : _0x77fc[773],
    c : {
      bbs : 1
    }
  }, {
    id : 2,
    lvl : 3,
    name : _0x77fc[774],
    key : _0x77fc[775],
    desc : _0x77fc[776],
    c : {
      bbs : 4
    }
  }, {
    id : 3,
    lvl : 2,
    name : _0x77fc[777],
    key : _0x77fc[777],
    desc : _0x77fc[778],
    c : {
      pr : 0,
      hold : false,
      rnd : 2
    }
  }];
  /** @type {!Array} */
  this[_0x77fc[779]] = [{
    id : 1,
    n : i18n[_0x77fc[531]],
    modes : [{
      id : 2,
      n : _0x77fc[780],
      fn : _0x77fc[781],
      rs : [0, 2, 3]
    }, {
      id : 1,
      n : _0x77fc[782],
      fn : _0x77fc[783],
      rs : [0, 1, 2, 3]
    }, {
      id : 3,
      n : _0x77fc[784],
      fn : _0x77fc[785],
      rs : [0, 1, 2, 3]
    }, {
      id : 4,
      n : _0x77fc[786],
      fn : _0x77fc[787],
      rs : [0, 1, 2, 3]
    }]
  }, {
    id : 3,
    n : i18n[_0x77fc[788]],
    modes : [{
      id : 1,
      n : _0x77fc[789],
      fn : _0x77fc[790],
      rs : [0, 2, 3]
    }, {
      id : 2,
      n : _0x77fc[791],
      fn : _0x77fc[792],
      rs : [0, 3]
    }, {
      id : 3,
      n : _0x77fc[784],
      fn : _0x77fc[785],
      rs : [0, 3]
    }, {
      id : 100,
      n : _0x77fc[793],
      rs : [0, 2, 3]
    }]
  }, {
    id : 4,
    n : i18n[_0x77fc[794]],
    modes : [{
      id : 1,
      n : _0x77fc[795],
      rs : [0]
    }]
  }, {
    id : 5,
    n : i18n[_0x77fc[796]],
    modes : [{
      id : 1,
      n : _0x77fc[797],
      rs : [0, 2, 3]
    }]
  }, {
    id : 7,
    n : i18n[_0x77fc[798]],
    modes : [{
      id : 1,
      n : _0x77fc[46],
      rs : [0, 3]
    }]
  }, {
    id : 8,
    n : i18n[_0x77fc[799]],
    modes : [{
      id : 1,
      n : _0x77fc[46],
      rs : [0, 3]
    }]
  }, {
    id : 2,
    n : i18n[_0x77fc[800]],
    modes : [{
      id : 1,
      n : _0x77fc[46],
      rs : [0, 1, 2, 3]
    }]
  }];
  /** @type {null} */
  this[_0x77fc[801]] = null;
  this[_0x77fc[802]] = false;
  this[_0x77fc[803]] = document[_0x77fc[3]](_0x77fc[804]);
  this[_0x77fc[805]]();
}
/**
 * @param {?} type
 * @return {undefined}
 */
function Report(type) {
  this[_0x77fc[338]] = type;
  this[_0x77fc[806]] = document[_0x77fc[3]](_0x77fc[807]);
  /** @type {number} */
  this[_0x77fc[749]] = 0;
  this[_0x77fc[808]] = document[_0x77fc[592]](_0x77fc[809])[0];
  this[_0x77fc[810]] = document[_0x77fc[3]](_0x77fc[810]);
  this[_0x77fc[811]] = document[_0x77fc[3]](_0x77fc[811]);
  this[_0x77fc[152]]();
}
/**
 * @param {?} p
 * @return {undefined}
 */
function Items(p) {
  this[_0x77fc[338]] = p;
  this[_0x77fc[812]] = document[_0x77fc[592]](_0x77fc[812])[0];
  this[_0x77fc[813]] = document[_0x77fc[592]](_0x77fc[813])[0];
  this[_0x77fc[814]] = document[_0x77fc[592]](_0x77fc[814])[0];
  /** @type {!Array} */
  this[_0x77fc[815]] = [null, {
    id : 1,
    n : _0x77fc[816],
    i : _0x77fc[817],
    m : .24,
    p : .12
  }, {
    id : 2,
    n : _0x77fc[818],
    i : _0x77fc[819],
    m : .22,
    p : .22
  }, {
    id : 3,
    n : _0x77fc[820],
    i : _0x77fc[821],
    m : .2,
    p : .06
  }, {
    id : 4,
    n : _0x77fc[822],
    i : _0x77fc[823],
    m : .04,
    p : .06
  }, {
    id : 5,
    n : _0x77fc[824],
    i : _0x77fc[825],
    m : .003,
    p : .03
  }, {
    id : 6,
    n : _0x77fc[774],
    i : _0x77fc[826],
    m : .107,
    p : .06
  }, {
    id : 7,
    n : _0x77fc[504],
    i : _0x77fc[827],
    m : .13,
    p : .06
  }, {
    id : 8,
    n : _0x77fc[828],
    i : _0x77fc[829],
    m : .02,
    p : .06
  }, {
    id : 9,
    n : _0x77fc[830],
    i : _0x77fc[831],
    m : 0,
    p : .3
  }, {
    id : 10,
    n : _0x77fc[832],
    i : _0x77fc[833],
    m : 0,
    p : 0
  }, {
    id : 11,
    n : _0x77fc[834],
    i : _0x77fc[835],
    m : .04,
    p : .03
  }, {
    id : 12,
    n : _0x77fc[836],
    i : _0x77fc[827],
    m : 0,
    p : 0
  }];
  /** @type {null} */
  this[_0x77fc[837]] = null;
  /** @type {number} */
  this[_0x77fc[838]] = 87;
  /** @type {null} */
  this[_0x77fc[839]] = null;
  /** @type {number} */
  this[_0x77fc[840]] = 200;
  this[_0x77fc[841]] = false;
  /** @type {null} */
  this[_0x77fc[842]] = null;
  this[_0x77fc[843]] = false;
  /** @type {!Array} */
  this[_0x77fc[844]] = [];
  /** @type {!Array} */
  this[_0x77fc[845]] = [];
  var expected_date2 = new Date;
  this[_0x77fc[846]] = parseInt(expected_date2[_0x77fc[847]]());
}
/**
 * @param {?} listenerInfo
 * @param {?} context
 * @return {undefined}
 */
function InvertAnimator(listenerInfo, context) {
  this[_0x77fc[848]] = listenerInfo;
  this[_0x77fc[176]] = context;
  this[_0x77fc[177]] = context[_0x77fc[177]];
  this[_0x77fc[849]] = copyMatrix(context[_0x77fc[177]]);
  this[_0x77fc[848]][_0x77fc[850]]();
  /** @type {number} */
  this[_0x77fc[851]] = .1;
  this[_0x77fc[852]] = this[_0x77fc[176]][_0x77fc[118]];
  /** @type {number} */
  this[_0x77fc[318]] = 0;
  /** @type {number} */
  this[_0x77fc[853]] = 0;
  this[_0x77fc[176]][_0x77fc[118]] = false;
  this[_0x77fc[176]][_0x77fc[854]]();
}
/**
 * @param {?} isSlidingUp
 * @param {?} $cont
 * @return {undefined}
 */
function PoisonAnimator(isSlidingUp, $cont) {
  this[_0x77fc[848]] = isSlidingUp;
  this[_0x77fc[176]] = $cont;
  this[_0x77fc[177]] = $cont[_0x77fc[177]];
  /** @type {number} */
  this[_0x77fc[851]] = .06;
  this[_0x77fc[852]] = this[_0x77fc[176]][_0x77fc[118]];
  /** @type {number} */
  this[_0x77fc[318]] = 0;
  /** @type {number} */
  this[_0x77fc[853]] = 0;
  this[_0x77fc[176]][_0x77fc[855]]();
  this[_0x77fc[176]][_0x77fc[856]](true);
  this[_0x77fc[176]][_0x77fc[118]] = false;
}
/**
 * @param {?} isSlidingUp
 * @param {?} $cont
 * @return {undefined}
 */
function CompressAnimator(isSlidingUp, $cont) {
  this[_0x77fc[848]] = isSlidingUp;
  this[_0x77fc[176]] = $cont;
  this[_0x77fc[177]] = $cont[_0x77fc[177]];
  /** @type {number} */
  this[_0x77fc[851]] = .06;
  this[_0x77fc[852]] = this[_0x77fc[176]][_0x77fc[118]];
  /** @type {number} */
  this[_0x77fc[318]] = 0;
  /** @type {number} */
  this[_0x77fc[853]] = 0;
  this[_0x77fc[176]][_0x77fc[855]]();
  this[_0x77fc[176]][_0x77fc[856]](true);
  this[_0x77fc[176]][_0x77fc[118]] = false;
}
/**
 * @param {?} data
 * @param {?} linkedEntities
 * @param {?} force
 * @return {undefined}
 */
function WindAnimator(data, linkedEntities, force) {
  this[_0x77fc[848]] = data;
  this[_0x77fc[176]] = linkedEntities;
  this[_0x77fc[318]] = force;
  this[_0x77fc[177]] = linkedEntities[_0x77fc[177]];
  /** @type {number} */
  this[_0x77fc[851]] = .06;
  /** @type {number} */
  this[_0x77fc[853]] = 0;
  this[_0x77fc[852]] = this[_0x77fc[176]][_0x77fc[118]];
  this[_0x77fc[176]][_0x77fc[855]]();
  this[_0x77fc[176]][_0x77fc[856]](true);
  this[_0x77fc[176]][_0x77fc[118]] = false;
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function ItemActivation(canCreateDiscussions) {
  this[_0x77fc[312]] = canCreateDiscussions;
  /** @type {number} */
  this[_0x77fc[857]] = 0;
}
/**
 * @param {?} n
 * @return {undefined}
 */
function Friends(n) {
  this[_0x77fc[155]] = n;
  /** @type {null} */
  this[_0x77fc[337]] = null;
  /** @type {null} */
  this[_0x77fc[858]] = null;
  /** @type {null} */
  this[_0x77fc[859]] = null;
  /** @type {number} */
  this[_0x77fc[860]] = 0;
  /** @type {number} */
  this[_0x77fc[861]] = 0;
  /** @type {null} */
  this[_0x77fc[862]] = null;
  this[_0x77fc[863]] = false;
  /** @type {null} */
  this[_0x77fc[864]] = null;
  /** @type {null} */
  this[_0x77fc[865]] = null;
  /** @type {null} */
  this[_0x77fc[866]] = null;
  this[_0x77fc[155]][_0x77fc[373]][_0x77fc[563]] = this[_0x77fc[867]][_0x77fc[430]](this);
  this[_0x77fc[367]] = document[_0x77fc[3]](_0x77fc[367]);
  /** @type {null} */
  this[_0x77fc[868]] = null;
  /** @type {null} */
  this[_0x77fc[869]] = null;
  /** @type {null} */
  this[_0x77fc[870]] = null;
  this[_0x77fc[871]] = {};
  /** @type {null} */
  this[_0x77fc[872]] = null;
  /** @type {null} */
  this[_0x77fc[873]] = null;
  /** @type {null} */
  this[_0x77fc[874]] = null;
  this[_0x77fc[875]] = {
    FRIEND_LIST_LOADING : 0,
    NO_FRIENDS : 1,
    FRIEND_LIST : 2,
    TOO_MANY_CONN : 3,
    LOGIN_FIRST : 4,
    INTRO : 5
  };
  this[_0x77fc[876]]();
}
/**
 * @param {?} boardManager
 * @param {?} isSlidingUp
 * @param {?} $cont
 * @param {?} $slides
 * @return {undefined}
 */
function ChatAutocomplete(boardManager, isSlidingUp, $cont, $slides) {
  this[_0x77fc[877]] = boardManager;
  this[_0x77fc[878]] = isSlidingUp;
  this[_0x77fc[879]] = $cont;
  this[_0x77fc[880]] = $slides;
  /** @type {null} */
  this[_0x77fc[881]] = null;
  if (null === $slides) {
    this[_0x77fc[882]]();
  }
  this[_0x77fc[433]] = true;
  /** @type {number} */
  this[_0x77fc[883]] = 10;
  /** @type {number} */
  this[_0x77fc[427]] = 1;
  this[_0x77fc[884]] = _0x77fc[426];
  this[_0x77fc[885]] = false;
  /** @type {null} */
  this[_0x77fc[886]] = null;
  /** @type {null} */
  this[_0x77fc[887]] = null;
  /** @type {null} */
  this[_0x77fc[888]] = null;
  this[_0x77fc[889]] = false;
  /** @type {number} */
  this[_0x77fc[890]] = 0;
  this[_0x77fc[891]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[891]][_0x77fc[386]][_0x77fc[385]](_0x77fc[892]);
  hideElem(this[_0x77fc[891]]);
  this[_0x77fc[878]][_0x77fc[387]](this[_0x77fc[891]]);
  this[_0x77fc[152]]();
}
/**
 * @return {undefined}
 */
function Matrix() {
}
/**
 * @param {?} boardManager
 * @param {?} isSlidingUp
 * @param {?} $cont
 * @param {?} $slides
 * @param {?} callback
 * @param {?} scopeIn
 * @return {undefined}
 */
function EmoteSelect(boardManager, isSlidingUp, $cont, $slides, callback, scopeIn) {
  this[_0x77fc[573]] = boardManager;
  this[_0x77fc[893]] = isSlidingUp;
  this[_0x77fc[894]] = $cont;
  this[_0x77fc[895]] = $slides;
  this[_0x77fc[896]] = callback;
  this[_0x77fc[897]] = scopeIn;
  this[_0x77fc[152]]();
}
Game[_0x77fc[170]] = GameProto, Game[_0x77fc[170]][_0x77fc[898]] = Game, Game[_0x77fc[170]][_0x77fc[899]] = function() {
  if (this[_0x77fc[140]]) {
    var _0xe1a7x4 = Math[_0x77fc[314]](Math[_0x77fc[453]]() * this[_0x77fc[140]]);
    var expected_date2 = new Date;
    if (!(!this[_0x77fc[155]][_0x77fc[422]] || this[_0x77fc[55]] || 0 !== _0xe1a7x4 || 1 !== expected_date2[_0x77fc[847]]() && 2 !== expected_date2[_0x77fc[847]]() && 31 !== expected_date2[_0x77fc[847]]())) {
      this[_0x77fc[139]] = true;
    }
  }
}, Game[_0x77fc[170]][_0x77fc[900]] = function(mmCoreSplitViewBlock, canCreateDiscussions) {
  this[_0x77fc[44]][1][_0x77fc[609]] = canCreateDiscussions;
  this[_0x77fc[42]] = new Image;
  this[_0x77fc[42]][_0x77fc[38]] = this[_0x77fc[44]][1][_0x77fc[600]] = mmCoreSplitViewBlock;
  /** @type {number} */
  this[_0x77fc[43]] = 1;
  if (_0x77fc[192] === this[_0x77fc[6]][_0x77fc[185]]) {
    this[_0x77fc[6]][_0x77fc[901]](1, mmCoreSplitViewBlock);
  }
  this[_0x77fc[854]]();
}, Game[_0x77fc[170]][_0x77fc[166]] = function(i) {
  var errorMessage;
  if (i >= 1E3 || void 0 !== this[_0x77fc[239]][i] && this[_0x77fc[239]][i][_0x77fc[600]]) {
    this[_0x77fc[41]] = i;
  } else {
    i = this[_0x77fc[41]] = 0;
  }
  var needsTranslate = i >= 1E3 || void 0 === this[_0x77fc[239]][i][_0x77fc[902]] || this[_0x77fc[239]][i][_0x77fc[902]];
  errorMessage = i >= 1E3 ? _0x77fc[903] + this[_0x77fc[264]] + _0x77fc[904] : this[_0x77fc[239]][i][_0x77fc[600]];
  var className = needsTranslate ? CDN_URL(errorMessage) : errorMessage;
  if (i > 0) {
    this[_0x77fc[36]][_0x77fc[38]] = className;
    if (_0x77fc[192] === this[_0x77fc[6]][_0x77fc[185]]) {
      this[_0x77fc[6]][_0x77fc[901]](0, className);
    }
    if (i >= 1E3) {
      this[_0x77fc[239]][i] = {
        id : i,
        data : errorMessage,
        w : 32
      };
    }
  } else {
    if (0 === i && _0x77fc[192] === this[_0x77fc[6]][_0x77fc[185]]) {
      this[_0x77fc[6]][_0x77fc[901]](0, null);
    }
  }
  this[_0x77fc[905]]();
}, Game[_0x77fc[170]][_0x77fc[167]] = function() {
  createjs[_0x77fc[34]][_0x77fc[906]]();
  if (!SFXsets[this[_0x77fc[150]][_0x77fc[907]]]) {
    /** @type {number} */
    this[_0x77fc[150]][_0x77fc[907]] = 2;
  }
  if (this[_0x77fc[28]] && !VSFXsets[this[_0x77fc[150]][_0x77fc[908]]]) {
    this[_0x77fc[28]] = false;
    /** @type {number} */
    this[_0x77fc[150]][_0x77fc[908]] = 1;
  }
  this[_0x77fc[909]](new SFXsets[this[_0x77fc[150]][_0x77fc[907]]][_0x77fc[600]]);
  if (this[_0x77fc[28]]) {
    this[_0x77fc[909]](new VSFXsets[this[_0x77fc[150]][_0x77fc[908]]][_0x77fc[600]], 1);
  }
}, Game[_0x77fc[170]][_0x77fc[909]] = function(mmCoreSplitViewBlock, canCreateDiscussions) {
  var artistTrack;
  if (!canCreateDiscussions) {
    /** @type {number} */
    canCreateDiscussions = 0;
  }
  if (0 === canCreateDiscussions) {
    this[_0x77fc[48]] = mmCoreSplitViewBlock;
    artistTrack = _0x77fc[46];
  } else {
    if (1 === canCreateDiscussions) {
      this[_0x77fc[49]] = mmCoreSplitViewBlock;
      artistTrack = _0x77fc[910];
    }
  }
  this[_0x77fc[911]](mmCoreSplitViewBlock, artistTrack);
}, Game[_0x77fc[170]][_0x77fc[911]] = function(obj, type) {
  /** @type {!Array} */
  var rafWaitQueue = [_0x77fc[677], _0x77fc[912], _0x77fc[913], _0x77fc[914], _0x77fc[915], _0x77fc[916], _0x77fc[917], _0x77fc[918], _0x77fc[919], _0x77fc[920], _0x77fc[921], _0x77fc[224], _0x77fc[922], _0x77fc[923], _0x77fc[924], _0x77fc[925], _0x77fc[926], _0x77fc[837], _0x77fc[927]];
  if (null === obj[_0x77fc[914]] && (obj[_0x77fc[914]] = obj[_0x77fc[913]]), !this[_0x77fc[31]]) {
    var pageWidth = rafWaitQueue[_0x77fc[315]](_0x77fc[915]);
    if (-1 !== pageWidth) {
      rafWaitQueue[_0x77fc[928]](pageWidth, 1);
    }
  }
  /**
   * @param {?} key
   * @param {?} val
   * @return {?}
   */
  var add = function(key, val) {
    if (!key || !val) {
      return;
    }
    let node = obj[_0x77fc[929]](val);
    if (key = type + key, node) {
      let _0xe1a7x4 = createjs[_0x77fc[34]][_0x77fc[930]](node, key);
      if (!_0xe1a7x4 || !createjs[_0x77fc[34]][_0x77fc[931]][key]) {
        return void console[_0x77fc[935]](_0x77fc[932] + key + (false === _0xe1a7x4 ? _0x77fc[933] : _0x77fc[934]));
      }
      createjs[_0x77fc[34]][_0x77fc[931]][key][_0x77fc[936]] = val;
    }
  };
  if (obj[_0x77fc[937]]) {
    /** @type {number} */
    var i = 0;
    for (; i < obj[_0x77fc[937]][_0x77fc[237]]; ++i) {
      if (obj[_0x77fc[937]][i]) {
        add(_0x77fc[532] + i, obj[_0x77fc[937]][i]);
      }
    }
  }
  if (obj[_0x77fc[938]] && Array[_0x77fc[939]](obj[_0x77fc[938]])) {
    /** @type {number} */
    i = 0;
    for (; i < obj[_0x77fc[938]][_0x77fc[237]]; ++i) {
      if (obj[_0x77fc[938]][i]) {
        add(_0x77fc[940] + i, obj[_0x77fc[938]][i]);
      }
    }
  }
  if (obj[_0x77fc[941]]) {
    var i;
    for (i in obj[_0x77fc[941]]) {
      add(_0x77fc[942] + i, obj[_0x77fc[941]][i]);
    }
  }
  /** @type {number} */
  i = 0;
  for (; i < rafWaitQueue[_0x77fc[237]]; ++i) {
    let f = rafWaitQueue[i];
    add(f, obj[f]);
  }
  if (obj[_0x77fc[943]] && Array[_0x77fc[939]](obj[_0x77fc[943]])) {
    /** @type {number} */
    i = 0;
    for (; i < obj[_0x77fc[943]][_0x77fc[237]]; ++i) {
      var elem = obj[_0x77fc[943]][i];
      if (elem) {
        createjs[_0x77fc[34]][_0x77fc[930]](obj[_0x77fc[929]](elem), type + _0x77fc[944] + i);
      }
    }
    obj[_0x77fc[945]] = obj[_0x77fc[943]][_0x77fc[237]] - 1;
  } else {
    if (obj[_0x77fc[943]]) {
      /** @type {!Array} */
      var _data = [];
      /** @type {number} */
      i = 0;
      for (; i < obj[_0x77fc[943]][_0x77fc[946]]; ++i) {
        _data[_0x77fc[308]]({
          id : type + _0x77fc[944] + i,
          startTime : i * (obj[_0x77fc[943]][_0x77fc[947]] + obj[_0x77fc[943]][_0x77fc[948]]),
          duration : obj[_0x77fc[943]][_0x77fc[947]]
        });
      }
      obj[_0x77fc[945]] = obj[_0x77fc[943]][_0x77fc[946]] - 1;
      /** @type {!Array} */
      var artistTrack = [{
        src : obj[_0x77fc[949]](_0x77fc[943]),
        data : {
          audioSprite : _data
        }
      }];
      createjs[_0x77fc[34]][_0x77fc[950]](artistTrack, _0x77fc[46]);
    }
  }
}, Game[_0x77fc[170]][_0x77fc[951]] = function(canCreateDiscussions) {
  if (canCreateDiscussions = void 0 === canCreateDiscussions ? 1 : canCreateDiscussions, this[_0x77fc[9]][_0x77fc[953]](0, 0, this[_0x77fc[1]][_0x77fc[388]], this[_0x77fc[1]][_0x77fc[952]]), this[_0x77fc[9]][_0x77fc[954]] = _0x77fc[955], this[_0x77fc[9]][_0x77fc[956]](), this[_0x77fc[9]][_0x77fc[957]](), this[_0x77fc[9]][_0x77fc[958]] = 1, 1 === canCreateDiscussions) {
    /** @type {number} */
    var _0xe1a7x7 = 1;
    for (; _0xe1a7x7 < 10; _0xe1a7x7++) {
      this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x7 * this[_0x77fc[25]] + .5, 0);
      this[_0x77fc[9]][_0x77fc[960]](_0xe1a7x7 * this[_0x77fc[25]] + .5, this[_0x77fc[1]][_0x77fc[952]]);
    }
    /** @type {number} */
    _0xe1a7x7 = 1;
    for (; _0xe1a7x7 < 20; _0xe1a7x7++) {
      this[_0x77fc[9]][_0x77fc[959]](0, _0xe1a7x7 * this[_0x77fc[25]] + .5);
      this[_0x77fc[9]][_0x77fc[960]](241, _0xe1a7x7 * this[_0x77fc[25]] + .5);
    }
    this[_0x77fc[9]][_0x77fc[961]] = _0x77fc[962];
    this[_0x77fc[9]][_0x77fc[963]]();
    this[_0x77fc[9]][_0x77fc[957]]();
    /** @type {number} */
    _0xe1a7x7 = 0;
    for (; _0xe1a7x7 < 9; _0xe1a7x7++) {
      /** @type {number} */
      var _0xe1a7x8 = 1;
      for (; _0xe1a7x8 < 20; _0xe1a7x8++) {
        this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x7 * this[_0x77fc[25]] + .75 * this[_0x77fc[25]], _0xe1a7x8 * this[_0x77fc[25]] + .5);
        this[_0x77fc[9]][_0x77fc[960]]((_0xe1a7x7 + 1) * this[_0x77fc[25]] + .2 * this[_0x77fc[25]], _0xe1a7x8 * this[_0x77fc[25]] + .5);
      }
    }
    /** @type {number} */
    _0xe1a7x7 = 0;
    for (; _0xe1a7x7 < 19; _0xe1a7x7++) {
      /** @type {number} */
      var _0xe1a7x12 = 1;
      for (; _0xe1a7x12 < 10; _0xe1a7x12++) {
        this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x12 * this[_0x77fc[25]] + .5, _0xe1a7x7 * this[_0x77fc[25]] + .75 * this[_0x77fc[25]]);
        this[_0x77fc[9]][_0x77fc[960]](_0xe1a7x12 * this[_0x77fc[25]] + .5, (_0xe1a7x7 + 1) * this[_0x77fc[25]] + .2 * this[_0x77fc[25]]);
      }
    }
    this[_0x77fc[9]][_0x77fc[961]] = _0x77fc[964];
    this[_0x77fc[9]][_0x77fc[963]]();
    this[_0x77fc[9]][_0x77fc[957]]();
  } else {
    if (2 === canCreateDiscussions) {
      /** @type {number} */
      _0xe1a7x7 = 0;
      for (; _0xe1a7x7 < 9; _0xe1a7x7++) {
        /** @type {number} */
        _0xe1a7x8 = 1;
        for (; _0xe1a7x8 < 20; _0xe1a7x8++) {
          this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x7 * this[_0x77fc[25]] + .75 * this[_0x77fc[25]], _0xe1a7x8 * this[_0x77fc[25]] - .5);
          this[_0x77fc[9]][_0x77fc[960]]((_0xe1a7x7 + 1) * this[_0x77fc[25]] + .2 * this[_0x77fc[25]], _0xe1a7x8 * this[_0x77fc[25]] - .5);
        }
      }
      /** @type {number} */
      _0xe1a7x7 = 0;
      for (; _0xe1a7x7 < 19; _0xe1a7x7++) {
        /** @type {number} */
        _0xe1a7x12 = 1;
        for (; _0xe1a7x12 < 10; _0xe1a7x12++) {
          this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x12 * this[_0x77fc[25]] - .5, _0xe1a7x7 * this[_0x77fc[25]] + .75 * this[_0x77fc[25]]);
          this[_0x77fc[9]][_0x77fc[960]](_0xe1a7x12 * this[_0x77fc[25]] - .5, (_0xe1a7x7 + 1) * this[_0x77fc[25]] + .2 * this[_0x77fc[25]]);
        }
      }
    } else {
      if (3 === canCreateDiscussions) {
        /** @type {number} */
        _0xe1a7x7 = 1;
        for (; _0xe1a7x7 < 10; _0xe1a7x7++) {
          this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x7 * this[_0x77fc[25]] + .5, 0);
          this[_0x77fc[9]][_0x77fc[960]](_0xe1a7x7 * this[_0x77fc[25]] + .5, this[_0x77fc[1]][_0x77fc[952]]);
        }
      } else {
        if (4 === canCreateDiscussions) {
          /** @type {number} */
          _0xe1a7x7 = 1;
          for (; _0xe1a7x7 < 10; _0xe1a7x7++) {
            this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x7 * this[_0x77fc[25]] + .5, 0);
            this[_0x77fc[9]][_0x77fc[960]](_0xe1a7x7 * this[_0x77fc[25]] + .5, this[_0x77fc[1]][_0x77fc[952]]);
          }
          /** @type {number} */
          _0xe1a7x7 = 1;
          for (; _0xe1a7x7 < 20; _0xe1a7x7++) {
            this[_0x77fc[9]][_0x77fc[959]](0, _0xe1a7x7 * this[_0x77fc[25]] + .5);
            this[_0x77fc[9]][_0x77fc[960]](241, _0xe1a7x7 * this[_0x77fc[25]] + .5);
          }
        }
      }
    }
  }
  this[_0x77fc[9]][_0x77fc[961]] = _0x77fc[965];
  this[_0x77fc[9]][_0x77fc[963]]();
  /** @type {number} */
  this[_0x77fc[9]][_0x77fc[958]] = 2;
  this[_0x77fc[9]][_0x77fc[966]](1, 1, 240, this[_0x77fc[1]][_0x77fc[952]] - 2);
}, Game[_0x77fc[170]][_0x77fc[688]] = function(canCreateDiscussions) {
  return canCreateDiscussions ? this[_0x77fc[55]] : this[_0x77fc[56]] ? this[_0x77fc[56]] : this[_0x77fc[55]];
}, Game[_0x77fc[170]][_0x77fc[967]] = function(mmCoreSplitViewBlock, canCreateDiscussions, options) {
  if (void 0 === options && (options = {
    callback : null,
    isLivePmode : false,
    mapId : null,
    mapForOpponents : false
  }), (!this[_0x77fc[67]] || options[_0x77fc[968]]) && (!this[_0x77fc[50]] || !this[_0x77fc[155]][_0x77fc[422]] || this[_0x77fc[55]])) {
    if (!(this[_0x77fc[155]][_0x77fc[337]] || this[_0x77fc[155]][_0x77fc[457]])) {
      this[_0x77fc[155]][_0x77fc[969]]();
    }
    if (this[_0x77fc[55]] !== mmCoreSplitViewBlock) {
      this[_0x77fc[144]][_0x77fc[149]](mmCoreSplitViewBlock);
    }
    if (canCreateDiscussions) {
      /** @type {number} */
      this[_0x77fc[58]] = -1;
    }
    this[_0x77fc[55]] = this[_0x77fc[57]] = mmCoreSplitViewBlock;
    this[_0x77fc[144]][_0x77fc[970]](mmCoreSplitViewBlock, this[_0x77fc[58]]);
    this[_0x77fc[50]] = false;
    this[_0x77fc[156]] = new Replay;
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = this[_0x77fc[55]];
    if (!options[_0x77fc[968]]) {
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[972]] = this[_0x77fc[144]][_0x77fc[749]];
    }
    this[_0x77fc[147]] = options[_0x77fc[968]] ? this[_0x77fc[145]][0] : this[_0x77fc[145]][1];
    /** @type {null} */
    this[_0x77fc[96]] = null;
    this[_0x77fc[973]](this[_0x77fc[147]][_0x77fc[305]]);
    this[_0x77fc[974]]();
    this[_0x77fc[975]](0);
    hideElem(this[_0x77fc[17]]);
    this[_0x77fc[155]][_0x77fc[976]](true, false);
    hideElem(this[_0x77fc[155]][_0x77fc[390]]);
    hideElem(this[_0x77fc[20]]);
    this[_0x77fc[159]][_0x77fc[977]]();
    var _0xe1a7x12 = options[_0x77fc[978]] ? options[_0x77fc[978]] : function() {
      this[_0x77fc[155]][_0x77fc[979]]();
      this[_0x77fc[980]]();
    };
    let artistTrack = 9999999999;
    if (1 === this[_0x77fc[55]]) {
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = this[_0x77fc[58]];
      this[_0x77fc[126]] = this[_0x77fc[60]][this[_0x77fc[58]]];
      this[_0x77fc[22]][_0x77fc[419]] = this[_0x77fc[126]];
      showElem(this[_0x77fc[21]]);
    } else {
      if (2 === this[_0x77fc[55]]) {
        /** @type {number} */
        this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 131072;
        this[_0x77fc[126]] = artistTrack;
        hideElem(this[_0x77fc[21]]);
      } else {
        if (3 === this[_0x77fc[55]]) {
          this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 196608 | this[_0x77fc[58]];
          this[_0x77fc[126]] = this[_0x77fc[61]][this[_0x77fc[58]]];
          this[_0x77fc[981]](this[_0x77fc[126]]);
          showElem(this[_0x77fc[21]]);
        } else {
          if (4 === this[_0x77fc[55]]) {
            /** @type {number} */
            this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 262144;
            this[_0x77fc[126]] = artistTrack;
            this[_0x77fc[981]](artistTrack);
            hideElem(this[_0x77fc[21]]);
          } else {
            if (5 === this[_0x77fc[55]]) {
              /** @type {number} */
              this[_0x77fc[58]] = 1;
              this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 327680 | this[_0x77fc[58]];
              showElem(this[_0x77fc[21]]);
              this[_0x77fc[126]] = this[_0x77fc[62]][this[_0x77fc[58]]];
              this[_0x77fc[22]][_0x77fc[419]] = sprintTimeFormat(this[_0x77fc[126]], -1);
              this[_0x77fc[975]](1);
            } else {
              if (6 === this[_0x77fc[55]]) {
                hideElem(this[_0x77fc[21]]);
                /** @type {number} */
                this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 393216;
                this[_0x77fc[126]] = artistTrack;
                this[_0x77fc[981]](artistTrack);
                this[_0x77fc[6]][_0x77fc[982]]();
                this[_0x77fc[6]][_0x77fc[983]]();
                this[_0x77fc[6]][_0x77fc[984]]();
                this[_0x77fc[153]][_0x77fc[985]]();
                return this[_0x77fc[158]][_0x77fc[986]] = function() {
                  if (options[_0x77fc[987]]) {
                    var indexLookupKey;
                    for (indexLookupKey in this[_0x77fc[155]][_0x77fc[458]] = true, this[_0x77fc[12]][_0x77fc[625]]) {
                      if (this[_0x77fc[155]][_0x77fc[348]][indexLookupKey][_0x77fc[464]]) {
                        this[_0x77fc[155]][_0x77fc[348]][indexLookupKey][_0x77fc[464]][_0x77fc[989]](this[_0x77fc[158]][_0x77fc[177]], this[_0x77fc[158]][_0x77fc[988]][_0x77fc[235]]);
                      }
                    }
                  }
                  if (this[_0x77fc[177]] = copyMatrix(this[_0x77fc[158]][_0x77fc[177]]), this[_0x77fc[156]][_0x77fc[728]][_0x77fc[431]] = this[_0x77fc[58]] = this[_0x77fc[158]][_0x77fc[990]], this[_0x77fc[991]](), this[_0x77fc[158]][_0x77fc[988]][_0x77fc[235]]) {
                    var PL$13 = this[_0x77fc[158]][_0x77fc[988]][_0x77fc[235]];
                    /** @type {!Array} */
                    this[_0x77fc[235]] = [];
                    /** @type {number} */
                    var PL$17 = 0;
                    for (; PL$17 < PL$13[_0x77fc[237]]; ++PL$17) {
                      this[_0x77fc[235]][_0x77fc[308]](new Block(this[_0x77fc[234]][PL$13[PL$17]]));
                    }
                  }
                  this[_0x77fc[974]]();
                  _0xe1a7x12[_0x77fc[143]](this);
                }[_0x77fc[430]](this), void this[_0x77fc[158]][_0x77fc[992]](options[_0x77fc[990]]);
              }
              if (7 === this[_0x77fc[55]]) {
                /** @type {number} */
                this[_0x77fc[58]] = 1;
                this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 458752 | this[_0x77fc[58]];
                showElem(this[_0x77fc[21]]);
                this[_0x77fc[126]] = artistTrack;
                /** @type {number} */
                this[_0x77fc[22]][_0x77fc[419]] = 0;
                this[_0x77fc[975]](2);
              } else {
                if (8 === this[_0x77fc[55]]) {
                  /** @type {number} */
                  this[_0x77fc[58]] = 1;
                  this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 524288 | this[_0x77fc[58]];
                  this[_0x77fc[125]] = {
                    blocks : 0,
                    lines : 0
                  };
                  showElem(this[_0x77fc[21]]);
                  this[_0x77fc[126]] = artistTrack;
                  /** @type {number} */
                  this[_0x77fc[22]][_0x77fc[419]] = 0;
                  this[_0x77fc[975]](3);
                  this[_0x77fc[144]][_0x77fc[993]]({
                    grav : 10
                  }, this[_0x77fc[145]][1]);
                } else {
                  if (9 === this[_0x77fc[55]]) {
                    hideElem(this[_0x77fc[21]]);
                    /** @type {number} */
                    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 589824;
                    this[_0x77fc[126]] = artistTrack;
                    /** @type {!Array} */
                    this[_0x77fc[103]] = [];
                    this[_0x77fc[51]] = false;
                    /** @type {null} */
                    this[_0x77fc[104]] = null;
                    /** @type {number} */
                    this[_0x77fc[72]] = 0;
                    /** @type {!Array} */
                    this[_0x77fc[231]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    this[_0x77fc[994]]();
                    this[_0x77fc[144]][_0x77fc[146]]({}, this.R);
                    this[_0x77fc[973]](this[_0x77fc[147]][_0x77fc[305]]);
                    this[_0x77fc[981]](artistTrack);
                    this[_0x77fc[6]][_0x77fc[982]]();
                    this[_0x77fc[6]][_0x77fc[983]]();
                    this[_0x77fc[6]][_0x77fc[984]]();
                    this[_0x77fc[153]][_0x77fc[985]](1);
                    this[_0x77fc[160]][_0x77fc[995]]();
                    return this[_0x77fc[159]][_0x77fc[996]] = function() {
                      this[_0x77fc[153]][_0x77fc[997]]();
                      this[_0x77fc[159]][_0x77fc[998]](() => {
                        _0xe1a7x12[_0x77fc[143]](this);
                      });
                      this[_0x77fc[974]]();
                    }[_0x77fc[430]](this), this[_0x77fc[159]][_0x77fc[992]](options[_0x77fc[990]]), void(this[_0x77fc[67]] = true);
                  }
                }
              }
            }
          }
        }
      }
    }
    _0xe1a7x12[_0x77fc[143]](this);
  }
}, Game[_0x77fc[170]][_0x77fc[980]] = function() {
  if (this[_0x77fc[67]] = true, this[_0x77fc[153]][_0x77fc[999]](this[_0x77fc[153]].MODE_INFO), this[_0x77fc[56]] = 0, this[_0x77fc[155]][_0x77fc[458]] = false, !this[_0x77fc[55]]) {
    this[_0x77fc[155]][_0x77fc[1E3]]();
    /** @type {number} */
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = -1;
    /** @type {number} */
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[971]] = 6553600;
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1001]] = this[_0x77fc[138]];
    delete this[_0x77fc[156]][_0x77fc[728]][_0x77fc[972]];
    this[_0x77fc[6]][_0x77fc[983]]();
    /** @type {number} */
    var indexLookupKey = 0;
    for (; indexLookupKey < this[_0x77fc[155]][_0x77fc[1002]]; indexLookupKey++) {
      this[_0x77fc[12]][_0x77fc[629]][indexLookupKey][_0x77fc[1003]]();
    }
    if (this[_0x77fc[147]] = this[_0x77fc[145]][0], hideElem(this[_0x77fc[16]]), hideElem(this[_0x77fc[18]]), hideElem(this[_0x77fc[155]][_0x77fc[390]]), 2 === this[_0x77fc[155]][_0x77fc[423]]) {
      hideElem(this[_0x77fc[21]]);
      hideElem(this[_0x77fc[17]]);
      showElem(this[_0x77fc[20]]);
      showElem(this[_0x77fc[16]]);
    } else {
      if (3 === this[_0x77fc[155]][_0x77fc[423]]) {
        this[_0x77fc[55]] = this[_0x77fc[155]][_0x77fc[441]][0];
        this[_0x77fc[58]] = this[_0x77fc[155]][_0x77fc[441]][1];
        if (6 === this[_0x77fc[55]]) {
          this[_0x77fc[58]] = this[_0x77fc[155]][_0x77fc[440]];
        }
        var request = {
          callback : function() {
            this[_0x77fc[56]] = this[_0x77fc[55]];
            /** @type {number} */
            this[_0x77fc[55]] = 0;
            showElem(this[_0x77fc[16]]);
            if (!(6 === this[_0x77fc[56]] && this[_0x77fc[158]][_0x77fc[988]][_0x77fc[235]])) {
              this[_0x77fc[1004]]();
              this[_0x77fc[974]]();
            }
            this[_0x77fc[1005]]();
          }[_0x77fc[430]](this),
          isLivePmode : true,
          mapId : this[_0x77fc[58]],
          mapForOpponents : true
        };
        return void this[_0x77fc[967]](this[_0x77fc[55]], false, request);
      }
    }
  }
  this[_0x77fc[1005]]();
}, Game[_0x77fc[170]][_0x77fc[1005]] = function() {
  if (9 !== this[_0x77fc[688]](false)) {
    /** @type {null} */
    this[_0x77fc[104]] = null;
  }
  this[_0x77fc[1006]]();
  if (6 !== this[_0x77fc[688]](false) && 9 !== this[_0x77fc[688]](false)) {
    this[_0x77fc[6]][_0x77fc[982]]();
  }
  /** @type {number} */
  var _0xe1a7x4 = 2;
  if (this[_0x77fc[29]]) {
    this[_0x77fc[1007]](_0x77fc[224]);
  }
  this[_0x77fc[153]][_0x77fc[980]](0);
  var timers = this;
  this[_0x77fc[141]] = setInterval(function() {
    if (1 === (_0xe1a7x4 = _0xe1a7x4 - 1)) {
      timers[_0x77fc[153]][_0x77fc[980]](1);
      if (timers[_0x77fc[29]]) {
        timers[_0x77fc[1007]](timers[_0x77fc[688]](true) ? _0x77fc[922] : _0x77fc[923]);
      }
    } else {
      if (0 === _0xe1a7x4) {
        clearInterval(timers[_0x77fc[141]]);
        timers[_0x77fc[1008]]();
        timers[_0x77fc[67]] = false;
      }
    }
  }, 900);
}, Game[_0x77fc[170]][_0x77fc[1009]] = function(inverseFlag, isSlidingUp) {
  /** @type {number} */
  var ccw_flag = 7;
  if (isSlidingUp) {
    if (inverseFlag) {
      ccw_flag = this[_0x77fc[155]][_0x77fc[349]][_0x77fc[237]] + 1;
    } else {
      if (null !== this[_0x77fc[113]]) {
        ccw_flag = this[_0x77fc[113]];
      } else {
        /** @type {number} */
        var _0xe1a7x12 = 0;
        /** @type {number} */
        var indexLookupKey = 0;
        for (; indexLookupKey < this[_0x77fc[155]][_0x77fc[349]][_0x77fc[237]]; indexLookupKey++) {
          if (-1 !== this[_0x77fc[155]][_0x77fc[353]][_0x77fc[315]](this[_0x77fc[155]][_0x77fc[349]][indexLookupKey])) {
            _0xe1a7x12 = _0xe1a7x12 + 1;
          }
        }
        ccw_flag = this[_0x77fc[155]][_0x77fc[349]][_0x77fc[237]] - _0xe1a7x12 + 1;
      }
    }
    this[_0x77fc[113]] = ccw_flag;
    this[_0x77fc[153]][_0x77fc[1010]](this);
  } else {
    ccw_flag = inverseFlag ? this[_0x77fc[155]][_0x77fc[349]][_0x77fc[237]] + 1 : this[_0x77fc[155]][_0x77fc[349]][_0x77fc[237]] - this[_0x77fc[155]][_0x77fc[353]][_0x77fc[237]] + 1;
  }
  return ccw_flag;
}, Game[_0x77fc[170]][_0x77fc[1011]] = function(selectionHeight) {
  var key = {
    str : _0x77fc[46],
    color : _0x77fc[46]
  };
  var msgname = i18n[_0x77fc[1012]];
  var pxAllowance = selectionHeight / 10;
  if (pxAllowance < .4 || pxAllowance > 2) {
    switch(selectionHeight % 10) {
      case 1:
        msgname = i18n[_0x77fc[1013]];
        break;
      case 2:
        msgname = i18n[_0x77fc[1014]];
        break;
      case 3:
        msgname = i18n[_0x77fc[1015]];
        break;
      default:
        msgname = i18n[_0x77fc[1012]];
    }
  }
  switch(key[_0x77fc[1020]] = selectionHeight + msgname, selectionHeight) {
    case 1:
      key[_0x77fc[467]] = _0x77fc[1016];
      break;
    case 2:
      key[_0x77fc[467]] = _0x77fc[1017];
      break;
    case 3:
      key[_0x77fc[467]] = _0x77fc[1018];
      break;
    default:
      key[_0x77fc[467]] = _0x77fc[1019];
  }
  return key;
}, Game[_0x77fc[170]][_0x77fc[1021]] = function() {
  this[_0x77fc[1022]]();
  this[_0x77fc[1023]]();
  this[_0x77fc[854]]();
  this[_0x77fc[1024]]();
  this[_0x77fc[155]][_0x77fc[1025]]();
}, Game[_0x77fc[170]][_0x77fc[1008]] = function() {
  if (this[_0x77fc[67]] && (this[_0x77fc[155]][_0x77fc[422]] || this[_0x77fc[55]])) {
    if (2 === this[_0x77fc[127]] && !this[_0x77fc[688]](true)) {
      return void this[_0x77fc[155]][_0x77fc[1026]]();
    }
    if (6 !== this[_0x77fc[688]](false) && 9 !== this[_0x77fc[688]](false) && (this[_0x77fc[994]](), 9 !== this[_0x77fc[55]] && this[_0x77fc[159]][_0x77fc[977]]()), this[_0x77fc[51]] = false, this[_0x77fc[156]][_0x77fc[1003]](), this[_0x77fc[156]][_0x77fc[732]] = 1, this[_0x77fc[80]] = 0, this[_0x77fc[81]] = true, this[_0x77fc[78]] = false, this[_0x77fc[95]] = false, this[_0x77fc[79]] = false, this[_0x77fc[123]] = -1, this[_0x77fc[139]] = false, this[_0x77fc[268]] = false, this[_0x77fc[66]] = null, 
    this[_0x77fc[96]] = null, this[_0x77fc[1006]](), this[_0x77fc[231]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this[_0x77fc[68]] = new Block(0), this[_0x77fc[113]] = null, this[_0x77fc[73]] = 0, this[_0x77fc[70]] = 0, this[_0x77fc[72]] = 0, this[_0x77fc[97]] = 0, this[_0x77fc[108]] = 0, this[_0x77fc[109]] = [], this[_0x77fc[111]] = 0, this[_0x77fc[112]] = 0, this[_0x77fc[110]] = 0, this[_0x77fc[98]] = [], this[_0x77fc[100]] = 0, this[_0x77fc[99]] = 0, this[_0x77fc[165]](this[_0x77fc[147]][_0x77fc[164]]), 
    this[_0x77fc[163]](this[_0x77fc[147]][_0x77fc[92]]), this[_0x77fc[1027]](this[_0x77fc[147]][_0x77fc[760]]), this[_0x77fc[1028]](), this[_0x77fc[303]][_0x77fc[1025]](), this[_0x77fc[134]][_0x77fc[1029]](), 9 !== this[_0x77fc[688]](true) && (this[_0x77fc[160]][_0x77fc[995]](), this[_0x77fc[104]] = null), this[_0x77fc[688]](true) || (this[_0x77fc[56]] || this[_0x77fc[1004]](), this[_0x77fc[155]][_0x77fc[1025]](), 2 !== this[_0x77fc[155]][_0x77fc[423]] && 3 !== this[_0x77fc[155]][_0x77fc[423]] && 
    hideElem(this[_0x77fc[16]]), this[_0x77fc[155]][_0x77fc[976]](true, false), 1 === this[_0x77fc[147]][_0x77fc[766]] && (this[_0x77fc[122]] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 0], this[_0x77fc[1030]] && clearTimeout(this[_0x77fc[1030]]), this[_0x77fc[1030]] = setTimeout(() => {
      this[_0x77fc[122]] = this[_0x77fc[121]];
      /** @type {null} */
      this[_0x77fc[1030]] = null;
    }, 2E4))), this[_0x77fc[688]](false) && (3 === this[_0x77fc[688]](false) ? this[_0x77fc[1031]]() : 4 === this[_0x77fc[688]](false) && (this[_0x77fc[1032]] = 0)), 1 === this[_0x77fc[155]][_0x77fc[423]] && !this[_0x77fc[688]](true)) {
      /** @type {number} */
      var _0xe1a7x4 = 0;
      for (; _0xe1a7x4 < this[_0x77fc[117]]; _0xe1a7x4++) {
        this[_0x77fc[1033]](1);
      }
    }
    if (this[_0x77fc[76]]) {
      if (this[_0x77fc[1034]]()) {
        this[_0x77fc[1035]](true, 0);
      } else {
        this[_0x77fc[1035]](false, null);
      }
    }
    this[_0x77fc[153]][_0x77fc[997]]();
    if (1 === this[_0x77fc[105]]) {
      this[_0x77fc[153]][_0x77fc[1036]]();
    }
    this[_0x77fc[160]][_0x77fc[1037]]();
    this[_0x77fc[150]][_0x77fc[1038]]();
    this[_0x77fc[1039]]();
    this[_0x77fc[1023]]();
    this[_0x77fc[114]] = false;
    this[_0x77fc[854]]();
    var artistTrack = this[_0x77fc[136]]();
    this[_0x77fc[50]] = true;
    if (-1 !== this[_0x77fc[156]][_0x77fc[732]]) {
      /** @type {number} */
      this[_0x77fc[156]][_0x77fc[732]] = 0;
    }
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[77]] = this[_0x77fc[77]];
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1040]] = artistTrack;
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[940]] = this[_0x77fc[41]];
    if (this[_0x77fc[147]][_0x77fc[753]]) {
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1041]] = this[_0x77fc[147]][_0x77fc[753]];
    }
    if (this[_0x77fc[271]]) {
      /** @type {number} */
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[940]] = 7;
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1042]] = this[_0x77fc[271]];
    }
    if (this[_0x77fc[150]][_0x77fc[1043]]) {
      /** @type {number} */
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[538]] = 1;
    }
    if (this[_0x77fc[270]]) {
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[940]] += 100;
    }
    if (this[_0x77fc[41]] >= 1E3 && this[_0x77fc[264]]) {
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1044]] = this[_0x77fc[264]][_0x77fc[1045]](0, 6);
    } else {
      delete this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1044]];
    }
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1046]] = this[_0x77fc[150]][_0x77fc[907]];
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1047]] = this[_0x77fc[150]][_0x77fc[559]];
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1048]] = this[_0x77fc[150]][_0x77fc[560]] > 0 ? this[_0x77fc[150]][_0x77fc[560]] : void 0;
    delete this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1049]];
    this[_0x77fc[156]][_0x77fc[737]] = this[_0x77fc[1050]][_0x77fc[430]](this);
    if (!this[_0x77fc[54]]) {
      this[_0x77fc[50]] = false;
      this[_0x77fc[53]] = artistTrack;
      this[_0x77fc[156]][_0x77fc[1051]](true);
    }
    if (!this[_0x77fc[688]](true)) {
      /** @type {number} */
      this[_0x77fc[129]] = 0;
      this[_0x77fc[155]][_0x77fc[1052]]();
    }
    if (1 === this[_0x77fc[87]]) {
      this[_0x77fc[1053]](null, artistTrack);
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1054]] = function(canCreateDiscussions) {
  this[_0x77fc[105]] = canCreateDiscussions;
  if (1 === canCreateDiscussions && this[_0x77fc[50]]) {
    this[_0x77fc[153]][_0x77fc[1036]]();
  } else {
    this[_0x77fc[153]][_0x77fc[997]](this[_0x77fc[153]].OUT_OF_FOCUS);
  }
}, Game[_0x77fc[170]][_0x77fc[1055]] = function(canCreateDiscussions) {
  if (113 === canCreateDiscussions[_0x77fc[1056]] || canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1057]][9]) {
    if (1 === this[_0x77fc[105]]) {
      if (canCreateDiscussions[_0x77fc[1056]] < 112 || canCreateDiscussions[_0x77fc[1056]] > 123) {
        return;
      }
      this[_0x77fc[1]][_0x77fc[1058]]();
      this[_0x77fc[1054]](0);
    }
    if (canCreateDiscussions[_0x77fc[1056]] >= 112 && canCreateDiscussions[_0x77fc[1056]] <= 123) {
      canCreateDiscussions[_0x77fc[1059]]();
    }
    this[_0x77fc[155]][_0x77fc[1060]]();
  } else {
    if (115 === canCreateDiscussions[_0x77fc[1056]] || canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1057]][8]) {
      if (1 === this[_0x77fc[105]]) {
        if (canCreateDiscussions[_0x77fc[1056]] < 112 || canCreateDiscussions[_0x77fc[1056]] > 123) {
          return;
        }
        this[_0x77fc[1]][_0x77fc[1058]]();
        this[_0x77fc[1054]](0);
      }
      if (canCreateDiscussions[_0x77fc[1056]] >= 112 && canCreateDiscussions[_0x77fc[1056]] <= 123) {
        canCreateDiscussions[_0x77fc[1059]]();
      }
      this[_0x77fc[967]](this[_0x77fc[57]]);
      if (9 === this[_0x77fc[55]]) {
        canCreateDiscussions[_0x77fc[1061]]();
      }
    } else {
      if (13 === canCreateDiscussions[_0x77fc[1056]] && 1 !== this[_0x77fc[105]]) {
        this[_0x77fc[1054]](1);
        this[_0x77fc[155]][_0x77fc[375]][_0x77fc[1058]]();
      }
    }
  }
  if (0 !== this[_0x77fc[105]] || 38 !== canCreateDiscussions[_0x77fc[1056]] && 40 !== canCreateDiscussions[_0x77fc[1056]] && 32 !== canCreateDiscussions[_0x77fc[1056]] || canCreateDiscussions[_0x77fc[1059]](), (this[_0x77fc[50]] || this[_0x77fc[114]] || this[_0x77fc[67]]) && 0 === this[_0x77fc[105]]) {
    if (canCreateDiscussions[_0x77fc[1062]]) {
      return void canCreateDiscussions[_0x77fc[1059]]();
    }
    if (this[_0x77fc[67]]) {
      return void(canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1063]] ? this[_0x77fc[84]][-1] = this[_0x77fc[136]]() : canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1064]] ? this[_0x77fc[84]][1] = this[_0x77fc[136]]() : canCreateDiscussions[_0x77fc[1056]] !== this[_0x77fc[150]][_0x77fc[1065]] || this[_0x77fc[76]] || this[_0x77fc[1035]](true, null));
    }
    if (canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1066]]) {
      this[_0x77fc[1067]](-1);
      this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].ROTATE_LEFT, this[_0x77fc[136]]()));
      this[_0x77fc[90]] = this[_0x77fc[136]]();
    } else {
      if (canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1068]]) {
        this[_0x77fc[1067]](1);
        this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].ROTATE_RIGHT, this[_0x77fc[136]]()));
        this[_0x77fc[90]] = this[_0x77fc[136]]();
      } else {
        if (canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1069]]) {
          this[_0x77fc[1067]](2);
          this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].ROTATE_180, this[_0x77fc[136]]()));
          this[_0x77fc[90]] = this[_0x77fc[136]]();
        } else {
          if (canCreateDiscussions[_0x77fc[1056]] !== this[_0x77fc[150]][_0x77fc[1063]] || this[_0x77fc[84]][-1]) {
            if (canCreateDiscussions[_0x77fc[1056]] !== this[_0x77fc[150]][_0x77fc[1064]] || this[_0x77fc[84]][1]) {
              if (canCreateDiscussions[_0x77fc[1056]] !== this[_0x77fc[150]][_0x77fc[1070]] || this[_0x77fc[78]]) {
                if (this[_0x77fc[114]]) {
                  return;
                }
                if (!this[_0x77fc[79]] && canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[857]] && this[_0x77fc[1071]]()) {
                  this[_0x77fc[79]] = true;
                  this[_0x77fc[1072]](this[_0x77fc[136]]());
                } else {
                  if (!(canCreateDiscussions[_0x77fc[1056]] !== this[_0x77fc[150]][_0x77fc[1065]] || this[_0x77fc[76]])) {
                    this[_0x77fc[1035]](true, this[_0x77fc[136]]());
                  }
                }
              } else {
                this[_0x77fc[1073]]();
                this[_0x77fc[78]] = true;
              }
            } else {
              artistTrack = this[_0x77fc[136]]();
              this[_0x77fc[1074]](1, false, artistTrack);
              this[_0x77fc[84]][1] = artistTrack;
              this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].MOVE_RIGHT, this[_0x77fc[84]][1]));
              if (this[_0x77fc[150]][_0x77fc[1075]] && this[_0x77fc[84]][-1]) {
                this[_0x77fc[1076]](-1, -1);
              }
              if (1 === this[_0x77fc[87]]) {
                this[_0x77fc[1077]](1, true, null);
              }
            }
          } else {
            var artistTrack = this[_0x77fc[136]]();
            this[_0x77fc[1074]](-1, false, artistTrack);
            this[_0x77fc[84]][-1] = artistTrack;
            this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].MOVE_LEFT, this[_0x77fc[84]][-1]));
            if (this[_0x77fc[150]][_0x77fc[1075]] && this[_0x77fc[84]][1]) {
              this[_0x77fc[1076]](1, -1);
            }
            if (1 === this[_0x77fc[87]]) {
              this[_0x77fc[1077]](-1, true, null);
            }
          }
        }
      }
    }
    if (canCreateDiscussions[_0x77fc[1056]] < 113 || canCreateDiscussions[_0x77fc[1056]] > 123) {
      return canCreateDiscussions[_0x77fc[1059]](), canCreateDiscussions[_0x77fc[1078]](), false;
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1079]] = function(canCreateDiscussions) {
  if (canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1063]]) {
    this[_0x77fc[1076]](-1, false);
    if (-1 === this[_0x77fc[84]][1]) {
      this[_0x77fc[84]][1] = this[_0x77fc[136]]();
    }
    if (1 === this[_0x77fc[87]]) {
      this[_0x77fc[1077]](-1, false);
    }
  } else {
    if (canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1064]]) {
      this[_0x77fc[1076]](1, false);
      if (-1 === this[_0x77fc[84]][-1]) {
        this[_0x77fc[84]][-1] = this[_0x77fc[136]]();
      }
      if (1 === this[_0x77fc[87]]) {
        this[_0x77fc[1077]](1, false);
      }
    } else {
      if (canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1065]] && this[_0x77fc[76]]) {
        this[_0x77fc[1035]](false, this[_0x77fc[136]]());
      } else {
        if (canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[1070]]) {
          this[_0x77fc[78]] = false;
        } else {
          if (canCreateDiscussions[_0x77fc[1056]] === this[_0x77fc[150]][_0x77fc[857]]) {
            this[_0x77fc[79]] = false;
          }
        }
      }
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1076]] = function(canCreateDiscussions, isSlidingUp) {
  if (-1 === canCreateDiscussions ? (this[_0x77fc[84]][-1] = isSlidingUp, this[_0x77fc[85]][-1] = false) : (this[_0x77fc[84]][1] = isSlidingUp, this[_0x77fc[85]][1] = false), 1 === this[_0x77fc[87]] && false === isSlidingUp) {
    var criterion_index = -1 === canCreateDiscussions ? 1 : -1;
    var artistTrack = this[_0x77fc[136]]();
    if (this[_0x77fc[84]][criterion_index]) {
      if (this[_0x77fc[150]][_0x77fc[1075]]) {
        this[_0x77fc[1077]](criterion_index, true, null);
      } else {
        this[_0x77fc[1053]](criterion_index, artistTrack);
      }
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1053]] = function(i, res) {
  if (null === i) {
    if (this[_0x77fc[84]][-1] && (i = -1), this[_0x77fc[84]][1] && (null === i || this[_0x77fc[84]][1] < this[_0x77fc[84]][-1]) && (i = 1), null === i) {
      return;
    }
  } else {
    if (!this[_0x77fc[84]][i]) {
      return;
    }
  }
  var artistTrack = Math[_0x77fc[1080]](0, this[_0x77fc[150]][_0x77fc[559]] - (res - this[_0x77fc[84]][i]));
  this[_0x77fc[1077]](i, true, artistTrack);
}, Game[_0x77fc[170]][_0x77fc[1077]] = function(targetId, isSlidingUp, value) {
  var target = null === value ? this[_0x77fc[150]][_0x77fc[559]] : value;
  if (isSlidingUp || null === this[_0x77fc[86]][targetId]) {
    if (isSlidingUp && null === this[_0x77fc[86]][targetId]) {
      var action = this;
      this[_0x77fc[86]][targetId] = window[_0x77fc[1083]](function() {
        /** @type {null} */
        action[_0x77fc[86]][targetId] = null;
        var i = -1 === targetId ? 1 : -1;
        if (action[_0x77fc[80]] !== targetId && (action[_0x77fc[50]] || null !== action[_0x77fc[142]])) {
          var engine = action[_0x77fc[136]]();
          if (!(-1 === action[_0x77fc[84]][targetId] || action[_0x77fc[84]][-1] > 0 && action[_0x77fc[84]][1] > 0 && action[_0x77fc[84]][i] > action[_0x77fc[84]][targetId])) {
            action[_0x77fc[1081]](targetId, engine);
            if (action[_0x77fc[82]] && null === value) {
              action[_0x77fc[1082]](engine - action[_0x77fc[84]][targetId]);
            }
          }
        }
      }, target);
    }
  } else {
    window[_0x77fc[1084]](this[_0x77fc[86]][targetId]);
    /** @type {null} */
    this[_0x77fc[86]][targetId] = null;
  }
}, Game[_0x77fc[170]][_0x77fc[991]] = function() {
  this[_0x77fc[6]][_0x77fc[991]]();
}, Game[_0x77fc[170]][_0x77fc[1085]] = function() {
  var _0xe1a7x4 = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]];
  var dist = 1 === _0xe1a7x4[_0x77fc[225]] ? _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[1086]]] : _0xe1a7x4[_0x77fc[1088]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[1086]]];
  var i = dist[_0x77fc[237]];
  if (this[_0x77fc[40]] = _0xe1a7x4[_0x77fc[225]], this[_0x77fc[118]] && !this[_0x77fc[51]]) {
    /** @type {number} */
    var k = 0;
    for (; k < i; k++) {
      /** @type {number} */
      var j = 0;
      for (; j < i; j++) {
        if (dist[k][j] > 0) {
          this[_0x77fc[6]][_0x77fc[1090]](this[_0x77fc[69]][_0x77fc[1089]][_0x77fc[649]] + j * this[_0x77fc[40]], this[_0x77fc[69]][_0x77fc[1089]][_0x77fc[650]] + k * this[_0x77fc[40]], _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]][_0x77fc[467]]);
          if (this[_0x77fc[68]][_0x77fc[837]] && dist[k][j] === this[_0x77fc[68]][_0x77fc[837]]) {
            this[_0x77fc[6]][_0x77fc[1091]](this[_0x77fc[69]][_0x77fc[1089]][_0x77fc[649]] + j * this[_0x77fc[40]], this[_0x77fc[69]][_0x77fc[1089]][_0x77fc[650]] + k * this[_0x77fc[40]], true);
          }
        }
      }
    }
  }
  if (!this[_0x77fc[51]]) {
    /** @type {number} */
    k = 0;
    for (; k < i; k++) {
      /** @type {number} */
      j = 0;
      for (; j < i; j++) {
        if (dist[k][j] > 0) {
          this[_0x77fc[6]][_0x77fc[1092]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + j * this[_0x77fc[40]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] + k * this[_0x77fc[40]], _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]][_0x77fc[467]], 0);
          if (this[_0x77fc[68]][_0x77fc[837]] && dist[k][j] === this[_0x77fc[68]][_0x77fc[837]]) {
            this[_0x77fc[6]][_0x77fc[1091]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + j * this[_0x77fc[40]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] + k * this[_0x77fc[40]], false);
          }
        }
      }
    }
  }
  /** @type {number} */
  this[_0x77fc[40]] = 1;
}, Game[_0x77fc[170]][_0x77fc[854]] = function() {
  if (!this[_0x77fc[114]]) {
    this[_0x77fc[991]]();
    this[_0x77fc[1085]]();
    this[_0x77fc[6]][_0x77fc[1093]](false);
    if (this[_0x77fc[106]] && 1 === this[_0x77fc[107]]) {
      this[_0x77fc[662]][_0x77fc[1094]]();
    }
  }
}, Game[_0x77fc[170]][_0x77fc[905]] = function() {
  this[_0x77fc[854]]();
  this[_0x77fc[1006]]();
  this[_0x77fc[974]]();
}, Game[_0x77fc[170]][_0x77fc[1095]] = function(ballNumber, mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
  var sprite = this[_0x77fc[12]][_0x77fc[629]][ballNumber][_0x77fc[339]];
  if (!(this[_0x77fc[12]][_0x77fc[634]] && !arrayContains(this[_0x77fc[155]][_0x77fc[350]], sprite) && null !== this[_0x77fc[155]][_0x77fc[348]][sprite][_0x77fc[464]])) {
    if (!this[_0x77fc[12]][_0x77fc[629]][ballNumber][_0x77fc[6]][_0x77fc[176]]) {
      this[_0x77fc[12]][_0x77fc[629]][ballNumber][_0x77fc[6]][_0x77fc[176]] = this;
    }
    this[_0x77fc[12]][_0x77fc[629]][ballNumber][_0x77fc[6]][_0x77fc[1095]](mmCoreSplitViewBlock, mmaPushNotificationsComponent);
  }
}, Game[_0x77fc[170]][_0x77fc[1007]] = function(data, canCreateDiscussions) {
  if (this[_0x77fc[27]] && this[_0x77fc[147]][_0x77fc[763]]) {
    if (!canCreateDiscussions) {
      /** @type {number} */
      canCreateDiscussions = 0;
    }
    var _0xe1a7x8 = this;
    var _0xe1a7x12 = false;
    /**
     * @param {?} callback
     * @param {?} group
     * @return {undefined}
     */
    var trace = function(callback, group) {
      if (!callback || !(callback in createjs[_0x77fc[34]][_0x77fc[931]])) {
        return;
      }
      let _0xe1a7x13 = createjs[_0x77fc[34]][_0x77fc[931]][callback][_0x77fc[936]];
      if (_0xe1a7x13 && _0xe1a7x13[_0x77fc[1096]]) {
        if (!(1 !== _0xe1a7x13[_0x77fc[1096]] || _0xe1a7x12)) {
          _0xe1a7x12 = true;
          _0xe1a7x8[_0x77fc[134]][_0x77fc[1029]]();
        }
        _0xe1a7x8[_0x77fc[134]][_0x77fc[385]](callback, group);
      } else {
        createjs[_0x77fc[34]][_0x77fc[50]](callback)[_0x77fc[35]] = group;
      }
    };
    if (Array[_0x77fc[939]](data)) {
      if (2 !== canCreateDiscussions) {
        data[_0x77fc[1097]](function(obj) {
          trace(obj, _0xe1a7x8[_0x77fc[48]][_0x77fc[35]]);
        });
      }
      if (1 !== canCreateDiscussions && this[_0x77fc[28]] && this[_0x77fc[147]][_0x77fc[764]]) {
        data[_0x77fc[1097]](function(letter) {
          trace(_0x77fc[910] + letter, _0xe1a7x8[_0x77fc[49]][_0x77fc[35]]);
        });
      }
    } else {
      if (2 !== canCreateDiscussions) {
        trace(data, this[_0x77fc[48]][_0x77fc[35]]);
      }
      if (1 !== canCreateDiscussions && this[_0x77fc[28]] && this[_0x77fc[147]][_0x77fc[764]]) {
        trace(_0x77fc[910] + data, this[_0x77fc[49]][_0x77fc[35]]);
      }
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1074]] = function(source, interpolateValue, dontForceConstraints) {
  return interpolateValue || this[_0x77fc[110]]++, source = source * this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]][_0x77fc[1098]], !this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + source, this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]], null) && (this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + source, this[_0x77fc[90]] = dontForceConstraints, this[_0x77fc[856]](true), this[_0x77fc[854]](), interpolateValue || this[_0x77fc[1007]](_0x77fc[920]), 
  true);
}, Game[_0x77fc[170]][_0x77fc[1100]] = function(rest_pts_in) {
  if (this[_0x77fc[139]] && this[_0x77fc[155]][_0x77fc[422]] && !this[_0x77fc[55]]) {
    this[_0x77fc[139]] = false;
    var new_region = new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].AUX, rest_pts_in);
    /** @type {!Array} */
    new_region[_0x77fc[853]] = [this[_0x77fc[156]][_0x77fc[723]][_0x77fc[1101]], 0, 2];
    this[_0x77fc[156]][_0x77fc[385]](new_region);
    /** @type {number} */
    this[_0x77fc[96]] = 2;
  }
}, Game[_0x77fc[170]][_0x77fc[1072]] = function(mmCoreSplitViewBlock) {
  if (this[_0x77fc[1100]](mmCoreSplitViewBlock), this[_0x77fc[52]]) {
    this[_0x77fc[52]] = false;
  } else {
    this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].HARD_DROP, mmCoreSplitViewBlock));
    var _0xe1a7x7 = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]];
    var indexLookupKey = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + _0xe1a7x7[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]][_0x77fc[1102]][this[_0x77fc[68]][_0x77fc[1086]]];
    var _0xe1a7x12 = this[_0x77fc[110]] - (0 === this[_0x77fc[68]][_0x77fc[322]] ? finesse[this[_0x77fc[68]][_0x77fc[312]]][this[_0x77fc[68]][_0x77fc[1086]]][indexLookupKey] : 0);
    if (_0xe1a7x12 > 0) {
      this[_0x77fc[111]] += _0xe1a7x12;
      if (1 === this[_0x77fc[55]] && this[_0x77fc[150]][_0x77fc[1103]]) {
        this.GameOver();
        this[_0x77fc[967]](1);
      }
    }
    this[_0x77fc[112]] += this[_0x77fc[110]];
    /** @type {number} */
    this[_0x77fc[110]] = 0;
    if (!this[_0x77fc[118]]) {
      this[_0x77fc[856]](true);
    }
    var artistTrack = this[_0x77fc[69]][_0x77fc[1089]][_0x77fc[650]];
    if (this[_0x77fc[265]] && artistTrack !== this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]) {
      this[_0x77fc[265]] = false;
    }
    this[_0x77fc[1105]](this[_0x77fc[157]][_0x77fc[1104]].HARD_DROP, artistTrack - this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]);
    this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1106])[_0x77fc[322]](this[_0x77fc[111]]);
    this[_0x77fc[1107]](this[_0x77fc[69]][_0x77fc[1089]][_0x77fc[649]], artistTrack, mmCoreSplitViewBlock);
    this[_0x77fc[854]]();
    if (9 === this[_0x77fc[55]]) {
      this[_0x77fc[159]][_0x77fc[477]](this[_0x77fc[159]].BLOCK, this[_0x77fc[108]]);
    }
    if (this[_0x77fc[27]] && this[_0x77fc[50]]) {
      if (_0xe1a7x12 > 0 && this[_0x77fc[30]]) {
        this[_0x77fc[1007]](_0x77fc[926]);
      } else {
        this[_0x77fc[1007]](this[_0x77fc[79]] ? _0x77fc[914] : _0x77fc[913]);
      }
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1034]] = function() {
  return this[_0x77fc[147]][_0x77fc[164]] <= 1 || this[_0x77fc[233]][this[_0x77fc[77]]][_0x77fc[1108]] / (this[_0x77fc[233]][this[_0x77fc[77]]][_0x77fc[1109]] + 1) < this[_0x77fc[74]][0] / this[_0x77fc[74]][1];
}, Game[_0x77fc[170]][_0x77fc[1035]] = function(isSlidingUp, eof) {
  let indents = false;
  if (true === isSlidingUp) {
    if (this[_0x77fc[1034]]()) {
      this[_0x77fc[76]] = true;
      this[_0x77fc[75]][0] = this[_0x77fc[233]][this[_0x77fc[77]]][_0x77fc[1108]];
      this[_0x77fc[75]][1] = this[_0x77fc[233]][this[_0x77fc[77]]][_0x77fc[1109]];
      indents = true;
    }
  } else {
    indents = this[_0x77fc[76]];
    this[_0x77fc[76]] = false;
    this[_0x77fc[75]] = this[_0x77fc[74]][_0x77fc[310]](0);
    /** @type {number} */
    this[_0x77fc[70]] = 0;
  }
  if (null !== eof && indents) {
    this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].SOFT_DROP_BEGIN_END, eof));
  }
}, Game[_0x77fc[170]][_0x77fc[1110]] = function() {
  this[_0x77fc[1111]](9);
  this[_0x77fc[51]] = true;
  this[_0x77fc[50]] = false;
  if (!this[_0x77fc[688]](true)) {
    this[_0x77fc[1112]]();
    this[_0x77fc[155]][_0x77fc[1113]]();
    this[_0x77fc[1009]](false, true);
    if (!this[_0x77fc[156]][_0x77fc[1114]]()) {
      if (2 == ++this[_0x77fc[127]]) {
        this[_0x77fc[155]][_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[1115]]);
      } else {
        this[_0x77fc[155]][_0x77fc[1116]](_0x77fc[1117] + i18n[_0x77fc[1118]] + _0x77fc[1119], i18n[_0x77fc[1120]]);
      }
    }
  }
  if (this[_0x77fc[688]](false)) {
    if (!(1 === this[_0x77fc[688]](false))) {
      if (4 === this[_0x77fc[688]](true)) {
        this[_0x77fc[155]][_0x77fc[1121]](this.Replay);
      } else {
        if (7 === this[_0x77fc[688]](true)) {
          this[_0x77fc[1122]]();
        } else {
          if (9 === this[_0x77fc[688]](true)) {
            this[_0x77fc[159]][_0x77fc[1123]](false);
          }
        }
      }
    }
  }
  this[_0x77fc[155]][_0x77fc[1124]]();
  this[_0x77fc[150]][_0x77fc[1124]]();
  this[_0x77fc[303]][_0x77fc[1125]]();
  this[_0x77fc[1126]]();
  this[_0x77fc[1007]](_0x77fc[921]);
  this[_0x77fc[12]][_0x77fc[1127]](-1);
  this[_0x77fc[1039]]();
}, Game[_0x77fc[170]][_0x77fc[1111]] = function(signedTxHex) {
  /** @type {number} */
  var IS_HANDLED = 0;
  for (; IS_HANDLED < 20; IS_HANDLED++) {
    /** @type {number} */
    var signedTransactionsCounter = 0;
    for (; signedTransactionsCounter < 10; signedTransactionsCounter++) {
      if (this[_0x77fc[177]][IS_HANDLED][signedTransactionsCounter] > 0) {
        this[_0x77fc[177]][IS_HANDLED][signedTransactionsCounter] = signedTxHex;
      }
    }
  }
}, Game[_0x77fc[170]][_0x77fc[973]] = function(mmCoreSplitViewBlock) {
  /** @type {number} */
  var _0xe1a7x7 = 0;
  do {
    var artistTrack = this.RNG().toString(36)[_0x77fc[1045]](7);
    this[_0x77fc[137]] = alea(artistTrack);
    this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1001]] = artistTrack;
    this[_0x77fc[306]](mmCoreSplitViewBlock);
    this[_0x77fc[1022]]();
  } while (++_0xe1a7x7 < 1E3 && this[_0x77fc[1128]](this[_0x77fc[235]], false));
}, Game[_0x77fc[170]][_0x77fc[1129]] = function(type) {
  /** @type {number} */
  var default_favicon = 0;
  /** @type {!Array} */
  var listMD5 = [];
  var text = type;
  do {
    type = text + (0 === default_favicon ? _0x77fc[46] : default_favicon.toString(36));
    let numKeysDeleted = alea(type);
    let listContent = this[_0x77fc[1130]](this[_0x77fc[145]][0][_0x77fc[305]], numKeysDeleted);
    listMD5 = this[_0x77fc[1131]](listContent);
  } while (++default_favicon < 1E3 && this[_0x77fc[1128]](listMD5, true));
  return type;
}, Game[_0x77fc[170]][_0x77fc[1004]] = function() {
  this[_0x77fc[137]] = alea(this[_0x77fc[138]]);
  this[_0x77fc[135]] = alea(this[_0x77fc[138]]);
  this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1001]] = this[_0x77fc[138]];
  this[_0x77fc[306]](this[_0x77fc[145]][0][_0x77fc[305]]);
  this[_0x77fc[1022]]();
}, Game[_0x77fc[170]][_0x77fc[1128]] = function(limitFromUnread, isSlidingUp) {
  limitFromUnread = limitFromUnread || this[_0x77fc[235]];
  let _0xe1a7x8 = isSlidingUp ? 3 === this[_0x77fc[155]][_0x77fc[423]] ? this[_0x77fc[155]][_0x77fc[441]][0] : this[_0x77fc[56]] : this[_0x77fc[55]];
  let _0xe1a7x12 = isSlidingUp ? this[_0x77fc[145]][0][_0x77fc[753]] : this[_0x77fc[145]][1][_0x77fc[753]];
  return limitFromUnread[_0x77fc[237]] >= 2 && _0xe1a7x12 <= 3 && (!isSlidingUp || 0 === this[_0x77fc[145]][0][_0x77fc[305]]) && (1 === _0xe1a7x8 && (limitFromUnread[0][_0x77fc[312]] >= 5 || 1 === limitFromUnread[0][_0x77fc[312]] && limitFromUnread[1][_0x77fc[312]] >= 5) || 2 !== _0xe1a7x8 && limitFromUnread[0][_0x77fc[312]] >= 5 && limitFromUnread[1][_0x77fc[312]] >= 5);
}, Game[_0x77fc[170]][_0x77fc[1132]] = function() {
  if (!(6 === this[_0x77fc[55]] && null != this[_0x77fc[158]][_0x77fc[988]][_0x77fc[235]] || 9 === this[_0x77fc[55]] && this[_0x77fc[159]][_0x77fc[1133]])) {
    let artistTrack = this[_0x77fc[1134]]();
    0;
    this[_0x77fc[235]][_0x77fc[308]](artistTrack);
  }
}, Game[_0x77fc[170]][_0x77fc[1023]] = function(mmCoreSplitViewBlock) {
  mmCoreSplitViewBlock = mmCoreSplitViewBlock || this[_0x77fc[136]]();
  this[_0x77fc[88]] = false;
  this[_0x77fc[91]] = mmCoreSplitViewBlock;
  this[_0x77fc[68]] = this[_0x77fc[1135]]();
  this[_0x77fc[855]]();
  this[_0x77fc[856]](true);
  this[_0x77fc[1136]](mmCoreSplitViewBlock, false);
  if (!this[_0x77fc[688]](true) && 0 === this[_0x77fc[130]] && this[_0x77fc[133]] <= 1E3 && mmCoreSplitViewBlock - this[_0x77fc[71]] > this[_0x77fc[133]] / 4) {
    this[_0x77fc[1137]]();
    this[_0x77fc[71]] = mmCoreSplitViewBlock;
  }
  if (this[_0x77fc[28]] && this[_0x77fc[49]][_0x77fc[941]]) {
    this[_0x77fc[1138]]();
  }
  /** @type {number} */
  this[_0x77fc[70]] = 0;
}, Game[_0x77fc[170]][_0x77fc[1138]] = function() {
  this[_0x77fc[1007]](_0x77fc[942] + this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]][_0x77fc[333]]);
}, Game[_0x77fc[170]][_0x77fc[1122]] = function(limitFromUnread) {
  limitFromUnread = limitFromUnread || this[_0x77fc[136]]();
  this[_0x77fc[50]] = false;
  this[_0x77fc[51]] = true;
  this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1139]] = limitFromUnread;
  this[_0x77fc[1126]]();
  this[_0x77fc[1111]](9);
  hideElem(this[_0x77fc[21]]);
  showElem(this[_0x77fc[17]]);
  if (2 !== this[_0x77fc[688]](true) && 9 !== this[_0x77fc[688]](true)) {
    if (this[_0x77fc[56]]) {
      this[_0x77fc[155]][_0x77fc[1140]]();
    } else {
      if (this[_0x77fc[55]]) {
        this[_0x77fc[155]][_0x77fc[1121]](this.Replay);
      }
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1141]] = function(ballNumber) {
  return ballNumber <= 12 ? this[_0x77fc[122]][ballNumber] : this[_0x77fc[122]][this[_0x77fc[122]][_0x77fc[237]] - 1];
}, Game[_0x77fc[170]][_0x77fc[1142]] = function(canCreateDiscussions) {
  var addressCount = this[_0x77fc[98]][_0x77fc[237]];
  /** @type {number} */
  var iAddressLoop = 0;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    if (this[_0x77fc[98]][iAddressLoop][0] >= canCreateDiscussions) {
      this[_0x77fc[98]][iAddressLoop][0] -= canCreateDiscussions;
      break;
    }
    canCreateDiscussions = canCreateDiscussions - this[_0x77fc[98]][iAddressLoop][0];
    /** @type {number} */
    this[_0x77fc[98]][iAddressLoop][0] = 0;
  }
}, Game[_0x77fc[170]][_0x77fc[1143]] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
  return this[_0x77fc[238]][_0x77fc[1144]] += mmCoreSplitViewBlock, this[_0x77fc[97]] > 0 && this[_0x77fc[147]][_0x77fc[757]] < 2 && (this[_0x77fc[97]] > mmCoreSplitViewBlock ? (this[_0x77fc[97]] -= mmCoreSplitViewBlock, this[_0x77fc[1142]](mmCoreSplitViewBlock), mmCoreSplitViewBlock = 0) : (mmCoreSplitViewBlock = mmCoreSplitViewBlock - this[_0x77fc[97]], this[_0x77fc[97]] = 0, this[_0x77fc[98]] = []), this[_0x77fc[1145]](mmaPushNotificationsComponent)), mmCoreSplitViewBlock > 0 && 0 === this[_0x77fc[155]][_0x77fc[423]] || 
  2 === this[_0x77fc[155]][_0x77fc[423]] ? mmCoreSplitViewBlock : null;
}, Game[_0x77fc[170]][_0x77fc[1146]] = function() {
  let artistTrack = this[_0x77fc[136]]();
  this[_0x77fc[1094]](Math[_0x77fc[1148]](1, (artistTrack - this[_0x77fc[1147]]) / 1E3), artistTrack);
  this[_0x77fc[1147]] = artistTrack;
  if (this[_0x77fc[106]] && 0 === this[_0x77fc[107]]) {
    this[_0x77fc[662]][_0x77fc[1094]]();
  }
  window[_0x77fc[1149]](this[_0x77fc[1146]][_0x77fc[430]](this), this[_0x77fc[1]]);
}, Game[_0x77fc[170]][_0x77fc[1024]] = function() {
  this[_0x77fc[1147]] = this[_0x77fc[136]]();
  this[_0x77fc[1146]]();
}, Game[_0x77fc[170]][_0x77fc[1050]] = function(canCreateDiscussions) {
  if (canCreateDiscussions[_0x77fc[720]] !== this[_0x77fc[156]][_0x77fc[721]][_0x77fc[1150]] && canCreateDiscussions[_0x77fc[720]] !== this[_0x77fc[156]][_0x77fc[721]][_0x77fc[1151]]) {
    /** @type {number} */
    this[_0x77fc[80]] = 0;
  } else {
    if (this[_0x77fc[81]]) {
      this[_0x77fc[81]] = false;
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1136]] = function(dockerComposeRunning, isSlidingUp) {
  let runningServices = false;
  let swapFrontSource = false;
  return isSlidingUp || this[_0x77fc[114]] || (swapFrontSource = true, this[_0x77fc[114]] = true), this[_0x77fc[84]][-1] > 0 && this[_0x77fc[84]][1] > 0 ? runningServices = this[_0x77fc[84]][-1] > this[_0x77fc[84]][1] ? this[_0x77fc[1152]](-1, this[_0x77fc[84]][-1], dockerComposeRunning) : this[_0x77fc[1152]](1, this[_0x77fc[84]][1], dockerComposeRunning) : this[_0x77fc[84]][-1] > 0 ? runningServices = this[_0x77fc[1152]](-1, this[_0x77fc[84]][-1], dockerComposeRunning) : this[_0x77fc[84]][1] > 0 && 
  (runningServices = this[_0x77fc[1152]](1, this[_0x77fc[84]][1], dockerComposeRunning)), !isSlidingUp && swapFrontSource && (this[_0x77fc[114]] = false), runningServices;
}, Game[_0x77fc[170]][_0x77fc[1152]] = function(type, size, context) {
  if (1 === this[_0x77fc[87]] && this[_0x77fc[85]][type] && !this[_0x77fc[150]][_0x77fc[560]]) {
    return this[_0x77fc[1081]](type, context);
  }
  if (this[_0x77fc[150]][_0x77fc[560]] && this[_0x77fc[85]][type]) {
    if (context - this[_0x77fc[83]] >= this[_0x77fc[150]][_0x77fc[560]] && (this[_0x77fc[83]] = context, this[_0x77fc[1074]](type, true, context))) {
      var readInfo = new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].ARR_MOVE, context);
      return readInfo[_0x77fc[853]] = [-1 === type ? 0 : 1], this[_0x77fc[156]][_0x77fc[385]](readInfo), true;
    }
  } else {
    if (0 === this[_0x77fc[87]] && context - size >= this[_0x77fc[150]][_0x77fc[559]] && this[_0x77fc[80]] !== type) {
      return this[_0x77fc[82]] && !this[_0x77fc[85]][type] && this[_0x77fc[1082]](context - size), this[_0x77fc[1081]](type, context);
    }
  }
  return false;
}, Game[_0x77fc[170]][_0x77fc[1082]] = function(canCreateDiscussions) {
  if (!this[_0x77fc[81]]) {
    var artistTrack = Math[_0x77fc[1080]](0, canCreateDiscussions - this[_0x77fc[150]][_0x77fc[559]]);
    this[_0x77fc[1153]][_0x77fc[1094]](artistTrack, 32);
  }
}, Game[_0x77fc[170]][_0x77fc[1081]] = function(statisticName, canCreateDiscussions) {
  if (this[_0x77fc[85]][statisticName] = true, this[_0x77fc[80]] = statisticName, 0 === this[_0x77fc[150]][_0x77fc[560]]) {
    if (this[_0x77fc[1154]](statisticName)) {
      return this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(-1 === statisticName ? this[_0x77fc[156]][_0x77fc[721]][_0x77fc[1150]] : this[_0x77fc[156]][_0x77fc[721]][_0x77fc[1151]], canCreateDiscussions)), true;
    }
  } else {
    this[_0x77fc[83]] = canCreateDiscussions;
  }
  return false;
}, Game[_0x77fc[170]][_0x77fc[1094]] = function(mmaPushNotificationsComponent, context) {
  if (this[_0x77fc[73]]++, this[_0x77fc[6]][_0x77fc[197]] && (this[_0x77fc[6]][_0x77fc[1156]][_0x77fc[1155]] && this[_0x77fc[6]][_0x77fc[1157]](0), this[_0x77fc[905]]()), this[_0x77fc[150]][_0x77fc[586]] && this[_0x77fc[150]][_0x77fc[1158]](), null !== this[_0x77fc[142]] && this[_0x77fc[142]][_0x77fc[1159]](mmaPushNotificationsComponent), this[_0x77fc[50]]) {
    if (this[_0x77fc[70]] += mmaPushNotificationsComponent, this[_0x77fc[72]] += mmaPushNotificationsComponent, this[_0x77fc[70]] >= this[_0x77fc[75]][0]) {
      this[_0x77fc[70]] = this[_0x77fc[70]] - this[_0x77fc[75]][0];
      var packageManifest = this[_0x77fc[1160]](this[_0x77fc[75]][1], context);
      if (packageManifest) {
        if (this[_0x77fc[76]] || 1 === packageManifest) {
          this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].GRAVITY_STEP, context));
          if (this[_0x77fc[76]]) {
            this[_0x77fc[1105]](this[_0x77fc[157]][_0x77fc[1104]].SOFT_DROP, packageManifest);
          }
        } else {
          var readInfo = new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].AUX, context);
          /** @type {!Array} */
          readInfo[_0x77fc[853]] = [this[_0x77fc[156]][_0x77fc[723]][_0x77fc[1161]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]];
          this[_0x77fc[156]][_0x77fc[385]](readInfo);
        }
      }
      this[_0x77fc[854]]();
    }
    if (this[_0x77fc[1136]](context, true), this[_0x77fc[88]] && (context - this[_0x77fc[90]] >= this[_0x77fc[92]] && (this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] + 1, null) ? this[_0x77fc[1072]](context) : (this[_0x77fc[55]] || null === this[_0x77fc[101]] && !this[_0x77fc[100]]) && (this[_0x77fc[88]] = false)), context - this[_0x77fc[89]] >= this[_0x77fc[93]] && this[_0x77fc[1072]](context)), this[_0x77fc[688]](true) || (1 === 
    this[_0x77fc[130]] && context - this[_0x77fc[71]] > this[_0x77fc[132]] ? (this[_0x77fc[1112]](), this[_0x77fc[71]] = context, ++this[_0x77fc[131]] >= 10 && (this[_0x77fc[131]] = 0, this[_0x77fc[1137]]())) : 0 === this[_0x77fc[130]] && context - this[_0x77fc[71]] > this[_0x77fc[133]] && (this[_0x77fc[1137]](), this[_0x77fc[71]] = context)), 4 === this[_0x77fc[688]](false) && this[_0x77fc[72]] - this[_0x77fc[1032]] > 1) {
      var _0xe1a7x13 = this[_0x77fc[72]] - this[_0x77fc[1032]] - 1;
      this[_0x77fc[1162]](1);
      this[_0x77fc[854]]();
      this[_0x77fc[1032]] = this[_0x77fc[72]] - _0xe1a7x13;
    } else {
      if (5 === this[_0x77fc[688]](false)) {
        var _0xe1a7x1e = Math[_0x77fc[1163]](this[_0x77fc[62]][this[_0x77fc[58]]] - this[_0x77fc[72]]);
        if (_0xe1a7x1e < this[_0x77fc[126]]) {
          this[_0x77fc[126]] = _0xe1a7x1e;
          this[_0x77fc[22]][_0x77fc[419]] = sprintTimeFormat(this[_0x77fc[126]], -1);
        }
        if (this[_0x77fc[126]] <= 0) {
          this[_0x77fc[1122]](context);
        }
      } else {
        if (9 === this[_0x77fc[55]] && this[_0x77fc[159]][_0x77fc[1164]][_0x77fc[237]]) {
          let _0xe1a7x4 = this[_0x77fc[159]][_0x77fc[1164]][0];
          if (this[_0x77fc[72]] >= _0xe1a7x4[_0x77fc[180]]) {
            this[_0x77fc[159]][_0x77fc[1165]](_0xe1a7x4[_0x77fc[944]]);
            this[_0x77fc[159]][_0x77fc[1164]][_0x77fc[1166]]();
          }
        }
      }
    }
    if ((7 == (7 & this[_0x77fc[73]]) || this[_0x77fc[160]][_0x77fc[684]]) && this[_0x77fc[1126]](), 31 == (31 & this[_0x77fc[73]])) {
      if (!(this[_0x77fc[55]] || 63 != (63 & this[_0x77fc[73]]))) {
        this[_0x77fc[155]][_0x77fc[1167]]();
      }
      if (context - this[_0x77fc[91]] >= this[_0x77fc[94]]) {
        this[_0x77fc[1072]](context);
      }
      var _0xe1a7x1f = this[_0x77fc[99]] + this[_0x77fc[100]];
      if (_0xe1a7x1f !== this[_0x77fc[94]]) {
        var maxRadix = Math[_0x77fc[1080]](2500, this[_0x77fc[94]] - _0xe1a7x1f * (this[_0x77fc[94]] / 10));
        if (context - this[_0x77fc[91]] > maxRadix) {
          this[_0x77fc[1072]](context);
        }
      }
    }
  }
  if (this[_0x77fc[155]][_0x77fc[363]] && (this[_0x77fc[73]] & this[_0x77fc[128]]) === this[_0x77fc[128]]) {
    /** @type {number} */
    var criterion_index = 0;
    for (; criterion_index < this[_0x77fc[12]][_0x77fc[631]]; criterion_index++) {
      var conditionName = this[_0x77fc[12]][_0x77fc[629]][criterion_index][_0x77fc[339]];
      if (this[_0x77fc[155]][_0x77fc[364]][_0x77fc[1168]](conditionName)) {
        var conditionVariable = this[_0x77fc[155]][_0x77fc[364]][conditionName];
        this[_0x77fc[1095]](criterion_index, conditionVariable[0], conditionVariable[1]);
        delete this[_0x77fc[155]][_0x77fc[364]][conditionName];
      }
    }
  }
}, Game[_0x77fc[170]][_0x77fc[120]] = function() {
  return this[_0x77fc[108]] / this[_0x77fc[72]];
}, Game[_0x77fc[170]][_0x77fc[1126]] = function() {
  this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1169])[_0x77fc[322]](sprintTimeFormat(this[_0x77fc[72]], 2));
  this[_0x77fc[160]][_0x77fc[435]](_0x77fc[674])[_0x77fc[322]](this[_0x77fc[119]]()[_0x77fc[1170]](2));
  this[_0x77fc[160]][_0x77fc[435]](_0x77fc[530])[_0x77fc[322]](this[_0x77fc[1171]]());
  this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1173])[_0x77fc[322]](this[_0x77fc[1172]]());
  this[_0x77fc[160]][_0x77fc[1159]]();
}, Game[_0x77fc[170]][_0x77fc[1112]] = function() {
  if (1 === this[_0x77fc[130]]) {
    /** @type {!Array} */
    var _maskLayer = [];
    /** @type {null} */
    var endColorCoords = null;
    var GET_AUTH_URL_TIMEOUT = false;
    /** @type {null} */
    var timeNow = null;
    for (; this[_0x77fc[129]] < this[_0x77fc[156]][_0x77fc[729]][_0x77fc[237]]; ++this[_0x77fc[129]]) {
      var splatAttrs = this[_0x77fc[156]][_0x77fc[729]][this[_0x77fc[129]]];
      var rootAttrs = {};
      var splatAttr;
      for (splatAttr in splatAttrs) {
        rootAttrs[splatAttr] = splatAttrs[splatAttr];
      }
      if (null === timeNow) {
        endColorCoords = splatAttrs;
      } else {
        if (splatAttrs[_0x77fc[180]] - endColorCoords[_0x77fc[180]] > 10) {
          GET_AUTH_URL_TIMEOUT = true;
        }
      }
      rootAttrs[_0x77fc[180]] = null === timeNow ? 0 : Math[_0x77fc[1080]](0, splatAttrs[_0x77fc[180]] - timeNow);
      _maskLayer[_0x77fc[308]](rootAttrs);
      timeNow = splatAttrs[_0x77fc[180]];
    }
    if (_maskLayer[_0x77fc[237]]) {
      this[_0x77fc[155]][_0x77fc[1112]](_maskLayer, GET_AUTH_URL_TIMEOUT);
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1137]] = function() {
  var name;
  var value;
  var values = copyMatrix(this[_0x77fc[177]]);
  var uk_icon_ = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]];
  var test = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]];
  var carrierNames = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]];
  var a = carrierNames[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[1086]]][_0x77fc[237]];
  /** @type {number} */
  var char = 0;
  for (; char < a; char++) {
    /** @type {number} */
    var i = 0;
    for (; i < a; i++) {
      if (carrierNames[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[1086]]][char][i] > 0) {
        value = test + char;
        if ((name = uk_icon_ + i) >= 0 && value >= 0 && value < values[_0x77fc[237]] && name < values[0][_0x77fc[237]]) {
          values[value][name] = carrierNames[_0x77fc[467]];
        }
      }
    }
  }
  this[_0x77fc[155]][_0x77fc[1137]](values);
}, Game[_0x77fc[170]][_0x77fc[1174]] = function(mmCoreSplitViewBlock) {
  if (this[_0x77fc[97]] > 0) {
    var _0xe1a7x7;
    var addressCount = this[_0x77fc[98]][_0x77fc[237]];
    /** @type {number} */
    var iAddressLoop = 0;
    /** @type {number} */
    var _0xe1a7x13 = 0;
    /** @type {number} */
    iAddressLoop = 0;
    for (; iAddressLoop < addressCount && !(mmCoreSplitViewBlock - this[_0x77fc[98]][iAddressLoop][1] <= this[_0x77fc[147]][_0x77fc[455]]); iAddressLoop++) {
      _0xe1a7x7 = this[_0x77fc[1033]](this[_0x77fc[98]][iAddressLoop][0]);
    }
    /** @type {number} */
    this[_0x77fc[97]] = 0;
    if (null === _0xe1a7x7) {
      this[_0x77fc[1145]](mmCoreSplitViewBlock);
    }
    for (; iAddressLoop < addressCount;) {
      this[_0x77fc[98]][_0xe1a7x13++] = this[_0x77fc[98]][iAddressLoop];
      this[_0x77fc[97]] += this[_0x77fc[98]][iAddressLoop][0];
      iAddressLoop++;
    }
    this[_0x77fc[98]][_0x77fc[237]] = _0xe1a7x13;
  }
}, Game[_0x77fc[170]][_0x77fc[1175]] = function(mmCoreSplitViewBlock) {
  if (3 !== this[_0x77fc[147]][_0x77fc[757]]) {
    this[_0x77fc[1176]](mmCoreSplitViewBlock);
  } else {
    this[_0x77fc[1162]](mmCoreSplitViewBlock);
  }
}, Game[_0x77fc[170]][_0x77fc[1176]] = function(clientHeight) {
  var artistTrack = this[_0x77fc[136]]();
  if (0 === this[_0x77fc[147]][_0x77fc[754]]) {
    this[_0x77fc[98]][_0x77fc[308]]([clientHeight, artistTrack]);
  } else {
    /** @type {number} */
    var targetOffsetHeight = 0;
    /** @type {number} */
    var _0xe1a7x12 = 0;
    var _0xe1a7x13 = this[_0x77fc[147]][_0x77fc[754]] > 0 ? this[_0x77fc[147]][_0x77fc[754]] : 100;
    for (; targetOffsetHeight < clientHeight;) {
      _0xe1a7x12++;
      if (100 === _0xe1a7x13 || Math[_0x77fc[453]]() < _0xe1a7x13 / 100) {
        this[_0x77fc[98]][_0x77fc[308]]([_0xe1a7x12, artistTrack]);
        /** @type {number} */
        _0xe1a7x12 = 0;
      }
      targetOffsetHeight++;
    }
    if (_0xe1a7x12) {
      this[_0x77fc[98]][_0x77fc[308]]([_0xe1a7x12, artistTrack]);
    }
  }
  this[_0x77fc[97]] += clientHeight;
  this[_0x77fc[1145]](artistTrack);
  this[_0x77fc[6]][_0x77fc[1093]](true);
}, Game[_0x77fc[170]][_0x77fc[1162]] = function(magnifier) {
  var $magnifier = this[_0x77fc[1033]](magnifier);
  for (; this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]], null);) {
    this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]--;
  }
  return this[_0x77fc[856]](true), 4 === this[_0x77fc[688]](false) && -4 === this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] && this.GameOver(), $magnifier;
}, Game[_0x77fc[170]][_0x77fc[1177]] = function() {
  this[_0x77fc[1174]](this[_0x77fc[136]]() + 1E4);
  for (; this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]], null);) {
    this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]--;
  }
  this[_0x77fc[856]](true);
  if (this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] <= -4) {
    this.GameOver();
  }
}, Game[_0x77fc[170]][_0x77fc[1033]] = function(clientWidth) {
  var i = void 0;
  var _0xe1a7x8 = this[_0x77fc[688]](false);
  if (clientWidth <= 0) {
    return 0;
  }
  if (this[_0x77fc[147]][_0x77fc[765]]) {
    /** @type {number} */
    var targetOffsetWidth = 0;
    for (; targetOffsetWidth < clientWidth; ++targetOffsetWidth) {
      this[_0x77fc[1178]]();
    }
    /** @type {null} */
    i = null;
  } else {
    this[_0x77fc[238]][_0x77fc[1179]] += clientWidth;
    /** @type {!Array} */
    var params = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
    if (9 === _0xe1a7x8 && this[_0x77fc[103]][_0x77fc[237]]) {
      i = this[_0x77fc[103]][_0x77fc[1166]]();
    } else {
      if (3 !== _0xe1a7x8 && 4 !== _0xe1a7x8) {
        if (this[_0x77fc[147]][_0x77fc[754]] >= 0) {
          i = this[_0x77fc[453]](0, 9);
        } else {
          var _0xe1a7x1e = 100 + this[_0x77fc[147]][_0x77fc[754]];
          if (!this[_0x77fc[66]] || _0xe1a7x1e > 0 && this.RNG() < _0xe1a7x1e / 100) {
            this[_0x77fc[66]] = this[_0x77fc[453]](0, 9);
          }
          i = this[_0x77fc[66]];
        }
      } else {
        i = this[_0x77fc[66]] = this[_0x77fc[1180]](0, 9, this[_0x77fc[66]]);
      }
    }
    if (1 === this[_0x77fc[147]][_0x77fc[755]]) {
      /** @type {number} */
      params[i] = 0;
    } else {
      if (1 === this[_0x77fc[147]][_0x77fc[753]]) {
        i = i - i % 2;
      }
      if (i + this[_0x77fc[147]][_0x77fc[755]] > 10) {
        i = 10 - this[_0x77fc[147]][_0x77fc[755]];
      }
      for (let j = 0; j < this[_0x77fc[147]][_0x77fc[755]]; ++j) {
        /** @type {number} */
        params[i + j] = 0;
      }
    }
    if (this[_0x77fc[147]][_0x77fc[756]]) {
      for (let i = 0; i < params[_0x77fc[237]]; ++i) {
        params[i] = 8 === params[i] ? 0 : 8;
      }
    }
    if (clientWidth <= this[_0x77fc[177]][_0x77fc[237]]) {
      this[_0x77fc[231]] = this[_0x77fc[177]][clientWidth - 1][_0x77fc[310]](0);
    } else {
      this[_0x77fc[231]] = params[_0x77fc[310]](0);
    }
    var artistTrack;
    var configCount = this[_0x77fc[177]][_0x77fc[237]] - this[_0x77fc[99]];
    /** @type {number} */
    var currentCount = 0;
    for (; currentCount < configCount; currentCount++) {
      this[_0x77fc[177]][currentCount] = configCount - currentCount > clientWidth ? this[_0x77fc[177]][currentCount + clientWidth][_0x77fc[310]](0) : params[_0x77fc[310]](0);
    }
    if (this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1181])[_0x77fc[322]](this[_0x77fc[238]][_0x77fc[1179]]), this[_0x77fc[147]][_0x77fc[756]] || 1 !== this[_0x77fc[147]][_0x77fc[755]]) {
      /** @type {!Array} */
      (artistTrack = new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].AUX, this[_0x77fc[136]]()))[_0x77fc[853]] = [this[_0x77fc[156]][_0x77fc[723]][_0x77fc[1182]], clientWidth, i, this[_0x77fc[147]][_0x77fc[755]], this[_0x77fc[147]][_0x77fc[756]] ? 1 : 0];
    } else {
      /** @type {!Array} */
      (artistTrack = new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].GARBAGE_ADD, this[_0x77fc[136]]()))[_0x77fc[853]] = [clientWidth, i];
    }
    this[_0x77fc[156]][_0x77fc[385]](artistTrack);
    this[_0x77fc[856]](true);
  }
  return i;
}, Game[_0x77fc[170]][_0x77fc[1039]] = function() {
  if (null !== this[_0x77fc[101]]) {
    clearTimeout(this[_0x77fc[101]]);
  }
  /** @type {null} */
  this[_0x77fc[101]] = null;
}, Game[_0x77fc[170]][_0x77fc[1183]] = function() {
  var acc = this;
  /** @type {number} */
  var k__460175 = 0;
  var out__460160 = this[_0x77fc[102]][this[_0x77fc[155]][_0x77fc[456]]];
  if (!out__460160) {
    out__460160 = this[_0x77fc[147]][_0x77fc[456]];
  }
  this[_0x77fc[1039]]();
  /**
   * @return {undefined}
   */
  var _chooseTrackingDelay = function() {
    let value = 1E3 * out__460160[Math[_0x77fc[1148]](out__460160[_0x77fc[237]] - 1, k__460175)];
    acc[_0x77fc[101]] = setTimeout(fn, value);
  };
  /**
   * @return {undefined}
   */
  var fn = function() {
    acc[_0x77fc[100]]++;
    if (20 === ++k__460175) {
      acc[_0x77fc[1039]]();
    } else {
      _chooseTrackingDelay();
    }
  };
  _chooseTrackingDelay();
}, Game[_0x77fc[170]][_0x77fc[1184]] = function(canCreateDiscussions) {
  if (this[_0x77fc[106]]) {
    this[_0x77fc[106]] = false;
    /** @type {null} */
    this[_0x77fc[662]] = null;
    this[_0x77fc[23]][_0x77fc[419]] = _0x77fc[46];
  } else {
    this[_0x77fc[662]] = new Stats;
    this[_0x77fc[1153]] = this[_0x77fc[662]][_0x77fc[1188]](new Stats.Panel(_0x77fc[1185], _0x77fc[1186], _0x77fc[1187]));
    this[_0x77fc[662]][_0x77fc[1189]][_0x77fc[312]] = _0x77fc[24];
    this[_0x77fc[23]][_0x77fc[387]](this[_0x77fc[662]][_0x77fc[1189]]);
    this[_0x77fc[106]] = true;
    this[_0x77fc[107]] = canCreateDiscussions;
    this[_0x77fc[23]][_0x77fc[173]][_0x77fc[1190]] = _0x77fc[1191];
  }
}, Game[_0x77fc[170]][_0x77fc[1031]] = function() {
  /** @type {null} */
  this[_0x77fc[66]] = null;
  this[_0x77fc[63]] = this[_0x77fc[64]];
  /** @type {number} */
  var _0xe1a7x4 = 0;
  for (; _0xe1a7x4 < this[_0x77fc[63]]; _0xe1a7x4++) {
    this[_0x77fc[1033]](1);
  }
}, Game[_0x77fc[170]][_0x77fc[981]] = function(canCreateDiscussions) {
  if (canCreateDiscussions < 1E4) {
    this[_0x77fc[22]][_0x77fc[419]] = canCreateDiscussions;
  } else {
    this[_0x77fc[22]][_0x77fc[604]] = _0x77fc[793];
  }
}, Game[_0x77fc[170]][_0x77fc[165]] = function(mmCoreSplitViewBlock) {
  this[_0x77fc[147]][_0x77fc[164]] = mmCoreSplitViewBlock;
  this[_0x77fc[74]] = this[_0x77fc[1192]](mmCoreSplitViewBlock);
  this[_0x77fc[75]] = this[_0x77fc[74]][_0x77fc[310]](0);
  if (!(!this[_0x77fc[76]] || this[_0x77fc[1034]]() || this[_0x77fc[67]])) {
    this[_0x77fc[1035]](false, this[_0x77fc[136]]());
  }
}, Game[_0x77fc[170]][_0x77fc[163]] = function(canCreateDiscussions) {
  this[_0x77fc[92]] = canCreateDiscussions[0];
  this[_0x77fc[93]] = canCreateDiscussions[1];
  this[_0x77fc[94]] = canCreateDiscussions[2];
}, Game[_0x77fc[170]][_0x77fc[1193]] = function(sdir) {
  document[_0x77fc[1194]] = sdir;
}, Game[_0x77fc[170]][_0x77fc[136]] = function() {
  return (new Date)[_0x77fc[1195]]();
}, Game[_0x77fc[170]][_0x77fc[453]] = function(from, to) {
  return Math[_0x77fc[1196]](from + this.RNG() * (to - from));
}, Game[_0x77fc[170]][_0x77fc[1180]] = function(leftFence, rightFence, value) {
  for (;;) {
    var fenced = this[_0x77fc[453]](leftFence, rightFence);
    if (fenced !== value) {
      return fenced;
    }
  }
}, window[_0x77fc[1149]] = window[_0x77fc[1197]] || window[_0x77fc[1198]] || window[_0x77fc[1199]] || window[_0x77fc[1200]] || window[_0x77fc[1201]] || function(axsPath, canCreateDiscussions) {
  window[_0x77fc[1083]](axsPath, 1E3 / 60);
}, Game[_0x77fc[170]][_0x77fc[1145]] = function(context) {
  context = context || this[_0x77fc[136]]();
  var readInfo = new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].REDBAR_SET, context);
  /** @type {!Array} */
  readInfo[_0x77fc[853]] = [this[_0x77fc[97]] <= 20 ? this[_0x77fc[97]] : 20];
  this[_0x77fc[156]][_0x77fc[385]](readInfo);
}, Game[_0x77fc[170]][_0x77fc[1202]] = function(canCreateDiscussions) {
  if (0 === canCreateDiscussions) {
    this[_0x77fc[54]] = false;
    this[_0x77fc[53]] = this[_0x77fc[136]]();
    if (this[_0x77fc[50]]) {
      this[_0x77fc[50]] = false;
      this[_0x77fc[156]][_0x77fc[1051]](true);
      if (!(this[_0x77fc[55]] || null === this[_0x77fc[101]] && !this[_0x77fc[100]])) {
        this.GameOver();
        this[_0x77fc[155]][_0x77fc[1116]](_0x77fc[1203], _0x77fc[1204]);
        /** @type {null} */
        this[_0x77fc[53]] = null;
      }
    }
  } else {
    if (this[_0x77fc[54]] = true, null !== this[_0x77fc[53]] && !this[_0x77fc[50]] && !this[_0x77fc[51]] && !this[_0x77fc[67]]) {
      this[_0x77fc[50]] = true;
      var first = this[_0x77fc[136]]();
      var object = first - this[_0x77fc[53]];
      if (this[_0x77fc[70]] += object / 1E3, this[_0x77fc[72]] += object / 1E3, object > 1E3) {
        this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1205]] = void 0 === this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1205]] ? object : this[_0x77fc[156]][_0x77fc[728]][_0x77fc[1205]] + object;
        if (object > 65535) {
          /** @type {number} */
          object = 65535;
        }
        var objectIdMap = new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].AUX, this[_0x77fc[53]]);
        /** @type {!Array} */
        objectIdMap[_0x77fc[853]] = [this[_0x77fc[156]][_0x77fc[723]][_0x77fc[1206]], object];
        this[_0x77fc[156]][_0x77fc[733]] = false;
        this[_0x77fc[156]][_0x77fc[385]](objectIdMap);
      }
      this[_0x77fc[156]][_0x77fc[1051]](false, first);
    }
    if (null === this[_0x77fc[53]] && this[_0x77fc[50]] && this[_0x77fc[55]]) {
      this[_0x77fc[967]](this[_0x77fc[55]]);
    }
    /** @type {null} */
    this[_0x77fc[53]] = null;
  }
}, Game[_0x77fc[170]][_0x77fc[1105]] = function(interval, val) {
  var _0xe1a7x8;
  if (void 0 === val) {
    /** @type {number} */
    val = 1;
  }
  val = val * this[_0x77fc[147]][_0x77fc[761]];
  this[_0x77fc[238]][_0x77fc[1105]] += _0xe1a7x8 = Math[_0x77fc[1196]](val * this[_0x77fc[157]][_0x77fc[435]](interval, this[_0x77fc[269]]));
  if (_0xe1a7x8 > 0 && this[_0x77fc[26]]) {
    this[_0x77fc[155]][_0x77fc[1116]](_0x77fc[46], Object[_0x77fc[1207]](this[_0x77fc[157]].A)[interval] + _0x77fc[1208] + val + _0x77fc[1209] + _0xe1a7x8 + _0x77fc[1210]);
  }
  this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1211])[_0x77fc[322]](this[_0x77fc[238]][_0x77fc[1105]]);
}, Game[_0x77fc[170]][_0x77fc[975]] = function(p) {
  if (hideElem(document[_0x77fc[3]](_0x77fc[1212])), hideElem(document[_0x77fc[3]](_0x77fc[1213])), hideElem(document[_0x77fc[3]](_0x77fc[1214])), hideElem(document[_0x77fc[3]](_0x77fc[1215])), 0 === p) {
    showElem(document[_0x77fc[3]](_0x77fc[1212]));
  } else {
    if (1 === p) {
    } else {
      if (2 === p) {
        showElem(document[_0x77fc[3]](_0x77fc[1213]));
      } else {
        if (3 === p) {
          showElem(document[_0x77fc[3]](_0x77fc[1214]));
        } else {
          if (_0x77fc[730] == typeof p || p instanceof String) {
            let progress = document[_0x77fc[3]](_0x77fc[1215]);
            showElem(progress);
            progress[_0x77fc[419]] = p;
          }
        }
      }
    }
  }
}, Game[_0x77fc[170]][_0x77fc[1216]] = function() {
  let _0xe1a7x4 = false;
  if (this[_0x77fc[125]][_0x77fc[1087]] >= 10 && (_0xe1a7x4 = true), !_0xe1a7x4) {
    let IS_HANDLED = 19 - (4 - this[_0x77fc[125]][_0x77fc[1217]]);
    /** @type {number} */
    var id = 0;
    for (; id < 10; id++) {
      if (0 !== this[_0x77fc[177]][IS_HANDLED][id]) {
        _0xe1a7x4 = true;
        break;
      }
    }
  }
  if (_0xe1a7x4) {
    this[_0x77fc[153]][_0x77fc[1220]](i18n[_0x77fc[1218]], i18n[_0x77fc[1219]]);
    this[_0x77fc[1122]]();
  }
}, Game[_0x77fc[170]][_0x77fc[1221]] = function() {
  if (this[_0x77fc[109]][_0x77fc[237]] >= 8) {
    this[_0x77fc[109]][_0x77fc[1166]]();
  }
  this[_0x77fc[109]][_0x77fc[308]](this[_0x77fc[72]]);
}, Game[_0x77fc[170]][_0x77fc[1222]] = function() {
  var _0xe1a7x4 = this[_0x77fc[109]][_0x77fc[237]];
  return _0xe1a7x4 > 1 ? (_0xe1a7x4 - 1) / (this[_0x77fc[72]] - this[_0x77fc[109]][0]) : _0xe1a7x4 / this[_0x77fc[72]];
}, Game[_0x77fc[170]][_0x77fc[1071]] = function() {
  return 0 === this[_0x77fc[147]][_0x77fc[760]] || this[_0x77fc[109]][_0x77fc[237]] < 5 || (this[_0x77fc[1222]]() <= this[_0x77fc[147]][_0x77fc[760]] || (this[_0x77fc[153]][_0x77fc[1223]](this[_0x77fc[147]][_0x77fc[760]]), false));
}, Game[_0x77fc[170]][_0x77fc[1027]] = function(canCreateDiscussions) {
  if (canCreateDiscussions < .1) {
    /** @type {number} */
    this[_0x77fc[147]][_0x77fc[760]] = 0;
    this[_0x77fc[119]] = this[_0x77fc[120]];
  } else {
    this[_0x77fc[147]][_0x77fc[760]] = canCreateDiscussions;
    this[_0x77fc[119]] = this[_0x77fc[1222]];
  }
}, Game[_0x77fc[170]][_0x77fc[169]] = function() {
  let txContribData = this[_0x77fc[155]];
  let _0xe1a7x7 = this;
  let prefetchGroupsInfo = function(canCreateDiscussions, forum, courseId) {
    txContribData[_0x77fc[1224]] = {
      gameMode : canCreateDiscussions,
      mode : forum,
      rule : courseId
    };
    txContribData[_0x77fc[365]] = true;
    if (_0x77fc[1225] == txContribData[_0x77fc[415]]) {
      txContribData[_0x77fc[1226]]();
    } else {
      txContribData[_0x77fc[1227]](true);
    }
  };
  $(_0x77fc[1248])[_0x77fc[477]](_0x77fc[1228], function(canCreateDiscussions) {
    let pubStr = $(this)[_0x77fc[1229]](_0x77fc[312]);
    if (pubStr && pubStr[_0x77fc[1231]](_0x77fc[1230]) && txContribData[_0x77fc[335]] && !_0xe1a7x7[_0x77fc[67]] && txContribData[_0x77fc[334]]) {
      switch(pubStr[_0x77fc[1247]](2)) {
        case _0x77fc[527]:
          prefetchGroupsInfo(1, 2);
          break;
        case _0x77fc[1232]:
        case _0x77fc[1233]:
          prefetchGroupsInfo(1, 1);
          break;
        case _0x77fc[1234]:
          prefetchGroupsInfo(1, 3);
          break;
        case _0x77fc[1235]:
          prefetchGroupsInfo(1, 4);
          break;
        case _0x77fc[1236]:
          prefetchGroupsInfo(3, 1);
          break;
        case _0x77fc[1237]:
        case _0x77fc[1238]:
          prefetchGroupsInfo(3, 2);
          break;
        case _0x77fc[1239]:
          prefetchGroupsInfo(3, 3);
          break;
        case _0x77fc[1240]:
          prefetchGroupsInfo(4);
          break;
        case _0x77fc[1104]:
          prefetchGroupsInfo(5);
          break;
        case _0x77fc[1241]:
          prefetchGroupsInfo(7);
          break;
        case _0x77fc[1242]:
          prefetchGroupsInfo(8);
          break;
        case _0x77fc[1243]:
          prefetchGroupsInfo(2);
          break;
        case _0x77fc[1244]:
          prefetchGroupsInfo(1, 3, 1);
          break;
        case _0x77fc[1245]:
          prefetchGroupsInfo(1, null, 2);
          break;
        case _0x77fc[1246]:
          prefetchGroupsInfo(1, null, 3);
      }
      canCreateDiscussions[_0x77fc[1059]]();
    }
  });
}, LineClearAnimator[_0x77fc[170]][_0x77fc[1159]] = function(canCreateDiscussions) {
  this[_0x77fc[180]] += canCreateDiscussions;
  var artistTrack = Math[_0x77fc[1080]](0, 1 - this[_0x77fc[180]] / this[_0x77fc[179]]);
  this[_0x77fc[176]][_0x77fc[6]][_0x77fc[982]]();
  /** @type {number} */
  var uivar = 0;
  for (; uivar < 20; uivar++) {
    if (-1 !== this[_0x77fc[178]][_0x77fc[315]](uivar)) {
      if (this[_0x77fc[181]]) {
        this[_0x77fc[176]][_0x77fc[6]][_0x77fc[1249]](uivar, artistTrack);
      } else {
        this[_0x77fc[176]][_0x77fc[6]][_0x77fc[1250]](artistTrack);
        /** @type {number} */
        var prop = 0;
        for (; prop < 10; prop++) {
          this[_0x77fc[176]][_0x77fc[6]][_0x77fc[1092]](prop, uivar, this[_0x77fc[177]][uivar][prop], 0);
        }
        this[_0x77fc[176]][_0x77fc[6]][_0x77fc[1250]](1);
      }
    } else {
      /** @type {number} */
      prop = 0;
      for (; prop < 10; prop++) {
        this[_0x77fc[176]][_0x77fc[6]][_0x77fc[1092]](prop, uivar, this[_0x77fc[177]][uivar][prop], 0);
      }
    }
  }
  this[_0x77fc[176]][_0x77fc[6]][_0x77fc[1093]](false);
  if (this[_0x77fc[180]] > this[_0x77fc[179]]) {
    this[_0x77fc[1251]]();
  }
}, LineClearAnimator[_0x77fc[170]][_0x77fc[1251]] = function() {
  /** @type {null} */
  this[_0x77fc[176]][_0x77fc[142]] = null;
  if (!this[_0x77fc[176]][_0x77fc[51]]) {
    this[_0x77fc[176]][_0x77fc[50]] = true;
  }
  this[_0x77fc[176]][_0x77fc[114]] = false;
  this[_0x77fc[176]][_0x77fc[854]]();
  this[_0x77fc[176]][_0x77fc[974]]();
  this[_0x77fc[176]][_0x77fc[1006]]();
}, Ctx2DView[_0x77fc[170]][_0x77fc[1252]] = function() {
  return true;
}, Ctx2DView[_0x77fc[170]][_0x77fc[1253]] = function() {
  this[_0x77fc[188]] = this[_0x77fc[176]][_0x77fc[1]][_0x77fc[11]](_0x77fc[10]);
  this[_0x77fc[678]] = this[_0x77fc[176]][_0x77fc[4]][_0x77fc[11]](_0x77fc[10]);
  this[_0x77fc[679]] = this[_0x77fc[176]][_0x77fc[5]][_0x77fc[11]](_0x77fc[10]);
}, Ctx2DView[_0x77fc[170]][_0x77fc[991]] = function() {
  if (this[_0x77fc[982]](), !this[_0x77fc[176]][_0x77fc[270]]) {
    /** @type {number} */
    var uivar = 0;
    for (; uivar < 20; uivar++) {
      /** @type {number} */
      var prop = 0;
      for (; prop < 10; prop++) {
        this[_0x77fc[1092]](prop, uivar, 15 & this[_0x77fc[176]][_0x77fc[177]][uivar][prop]);
        if (16 & this[_0x77fc[176]][_0x77fc[177]][uivar][prop]) {
          this[_0x77fc[1091]](prop, uivar, false);
        }
      }
    }
  }
}, Ctx2DView[_0x77fc[170]][_0x77fc[982]] = function() {
  this[_0x77fc[188]][_0x77fc[1254]](0, 0, this[_0x77fc[176]][_0x77fc[1]][_0x77fc[388]], this[_0x77fc[176]][_0x77fc[1]][_0x77fc[952]]);
}, Ctx2DView[_0x77fc[170]][_0x77fc[984]] = function() {
  this[_0x77fc[678]][_0x77fc[1254]](0, 0, this[_0x77fc[176]][_0x77fc[4]][_0x77fc[388]], this[_0x77fc[176]][_0x77fc[4]][_0x77fc[952]]);
}, Ctx2DView[_0x77fc[170]][_0x77fc[983]] = function() {
  this[_0x77fc[679]][_0x77fc[1254]](0, 0, this[_0x77fc[176]][_0x77fc[5]][_0x77fc[388]], this[_0x77fc[176]][_0x77fc[5]][_0x77fc[952]]);
}, Ctx2DView[_0x77fc[170]][_0x77fc[1255]] = function(canCreateDiscussions, isSlidingUp, ballNumber, dontForceConstraints) {
  var artistTrack = dontForceConstraints === this[_0x77fc[183]] ? this[_0x77fc[678]] : this[_0x77fc[679]];
  if (0 === this[_0x77fc[176]][_0x77fc[41]]) {
    var GET_AUTH_URL_TIMEOUT = this[_0x77fc[176]][_0x77fc[271]] && ballNumber <= 7 ? this[_0x77fc[176]][_0x77fc[271]] : this[_0x77fc[176]][_0x77fc[274]][ballNumber];
    this[_0x77fc[1256]](artistTrack, canCreateDiscussions * this[_0x77fc[176]][_0x77fc[25]], isSlidingUp * this[_0x77fc[176]][_0x77fc[25]], this[_0x77fc[176]][_0x77fc[25]], this[_0x77fc[176]][_0x77fc[25]], GET_AUTH_URL_TIMEOUT);
  } else {
    artistTrack[_0x77fc[1257]](this[_0x77fc[176]][_0x77fc[36]], this[_0x77fc[176]][_0x77fc[273]][ballNumber] * this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], 0, this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], canCreateDiscussions * this[_0x77fc[176]][_0x77fc[25]], isSlidingUp * this[_0x77fc[176]][_0x77fc[25]], this[_0x77fc[176]][_0x77fc[25]], this[_0x77fc[176]][_0x77fc[25]]);
  }
}, Ctx2DView[_0x77fc[170]][_0x77fc[1258]] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  (dontForceConstraints === this[_0x77fc[183]] ? this[_0x77fc[678]] : this[_0x77fc[679]])[_0x77fc[1257]](this[_0x77fc[176]][_0x77fc[37]], 0, 0, 32, 32, canCreateDiscussions * this[_0x77fc[176]][_0x77fc[25]], isSlidingUp * this[_0x77fc[176]][_0x77fc[25]], this[_0x77fc[176]][_0x77fc[25]], this[_0x77fc[176]][_0x77fc[25]]);
}, Ctx2DView[_0x77fc[170]][_0x77fc[1091]] = function(remoteChainTail, localChainTail, dontForceConstraints) {
  if (remoteChainTail >= 0 && localChainTail >= 0 && remoteChainTail < 10 && localChainTail < 20) {
    if (dontForceConstraints) {
      /** @type {number} */
      this[_0x77fc[188]][_0x77fc[1259]] = .5;
    }
    var artistTrack = this[_0x77fc[176]][_0x77fc[40]] * this[_0x77fc[176]][_0x77fc[25]];
    this[_0x77fc[188]][_0x77fc[1257]](this[_0x77fc[176]][_0x77fc[37]], 0, 0, 32, 32, remoteChainTail * this[_0x77fc[176]][_0x77fc[25]], localChainTail * this[_0x77fc[176]][_0x77fc[25]], artistTrack, artistTrack);
    if (dontForceConstraints) {
      /** @type {number} */
      this[_0x77fc[188]][_0x77fc[1259]] = 1;
    }
  }
}, Ctx2DView[_0x77fc[170]][_0x77fc[1092]] = function(shareDiff, index, curr) {
  if (curr && shareDiff >= 0 && index >= 0 && shareDiff < 10 && index < 20) {
    var artistTrack = this[_0x77fc[176]][_0x77fc[40]] * this[_0x77fc[176]][_0x77fc[25]];
    if (this[_0x77fc[176]][_0x77fc[41]]) {
      this[_0x77fc[188]][_0x77fc[1257]](this[_0x77fc[176]][_0x77fc[36]], this[_0x77fc[176]][_0x77fc[273]][curr] * this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], 0, this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], shareDiff * this[_0x77fc[176]][_0x77fc[25]], index * this[_0x77fc[176]][_0x77fc[25]], artistTrack, artistTrack);
    } else {
      var GET_AUTH_URL_TIMEOUT = this[_0x77fc[176]][_0x77fc[271]] && curr <= 7 ? this[_0x77fc[176]][_0x77fc[271]] : this[_0x77fc[176]][_0x77fc[274]][curr];
      this[_0x77fc[1256]](this[_0x77fc[188]], shareDiff * this[_0x77fc[176]][_0x77fc[25]], index * this[_0x77fc[176]][_0x77fc[25]], artistTrack, artistTrack, GET_AUTH_URL_TIMEOUT);
    }
  }
}, Ctx2DView[_0x77fc[170]][_0x77fc[1090]] = function(thisStart, start, statisticName) {
  if (thisStart >= 0 && start >= 0 && thisStart < 10 && start < 20) {
    var artistTrack = this[_0x77fc[176]][_0x77fc[40]] * this[_0x77fc[176]][_0x77fc[25]];
    if (0 === this[_0x77fc[176]][_0x77fc[43]]) {
      /** @type {number} */
      this[_0x77fc[188]][_0x77fc[1259]] = .5;
      if (this[_0x77fc[176]][_0x77fc[41]] > 0) {
        this[_0x77fc[188]][_0x77fc[1257]](this[_0x77fc[176]][_0x77fc[36]], this[_0x77fc[176]][_0x77fc[273]][statisticName] * this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], 0, this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], this[_0x77fc[176]][_0x77fc[239]][this[_0x77fc[176]][_0x77fc[41]]][_0x77fc[609]], thisStart * this[_0x77fc[176]][_0x77fc[25]], start * this[_0x77fc[176]][_0x77fc[25]], artistTrack, artistTrack);
      } else {
        this[_0x77fc[1092]](thisStart, start, statisticName);
      }
      /** @type {number} */
      this[_0x77fc[188]][_0x77fc[1259]] = 1;
    } else {
      var _0xe1a7x13 = this[_0x77fc[176]][_0x77fc[44]][this[_0x77fc[176]][_0x77fc[43]]];
      this[_0x77fc[188]][_0x77fc[1257]](this[_0x77fc[176]][_0x77fc[42]], (this[_0x77fc[176]][_0x77fc[273]][statisticName] - 2) * _0xe1a7x13[_0x77fc[609]], 0, _0xe1a7x13[_0x77fc[609]], _0xe1a7x13[_0x77fc[609]], thisStart * this[_0x77fc[176]][_0x77fc[25]], start * this[_0x77fc[176]][_0x77fc[25]], artistTrack, artistTrack);
    }
  }
}, Ctx2DView[_0x77fc[170]][_0x77fc[1256]] = function(KUTE, el, from, to, ops, mmCoreSecondsYear) {
  KUTE[_0x77fc[957]]();
  KUTE[_0x77fc[953]](el, from, to, ops);
  KUTE[_0x77fc[954]] = mmCoreSecondsYear;
  KUTE[_0x77fc[956]]();
}, Ctx2DView[_0x77fc[170]][_0x77fc[1260]] = function(mActionBar, command, selected_group_obj_array, selected_group, isBgroundImg) {
  mActionBar[_0x77fc[957]]();
  mActionBar[_0x77fc[959]](command, selected_group_obj_array);
  mActionBar[_0x77fc[960]](selected_group, isBgroundImg);
  mActionBar[_0x77fc[961]] = _0x77fc[1261];
  /** @type {number} */
  mActionBar[_0x77fc[958]] = 1;
  mActionBar[_0x77fc[963]]();
}, Ctx2DView[_0x77fc[170]][_0x77fc[1093]] = function(canCreateDiscussions) {
  if (canCreateDiscussions || this[_0x77fc[176]][_0x77fc[97]]) {
    if (canCreateDiscussions) {
      this[_0x77fc[188]][_0x77fc[1254]](240, 0, 8, (20 - this[_0x77fc[176]][_0x77fc[97]]) * this[_0x77fc[176]][_0x77fc[25]]);
    }
    this[_0x77fc[1256]](this[_0x77fc[188]], 240, (20 - this[_0x77fc[176]][_0x77fc[97]]) * this[_0x77fc[176]][_0x77fc[25]], 8, this[_0x77fc[176]][_0x77fc[97]] * this[_0x77fc[176]][_0x77fc[25]], _0x77fc[1262]);
  }
}, Ctx2DView[_0x77fc[170]][_0x77fc[1249]] = function(canCreateDiscussions, isSlidingUp) {
  this[_0x77fc[188]][_0x77fc[1259]] = isSlidingUp;
  this[_0x77fc[1256]](this[_0x77fc[188]], 0, canCreateDiscussions * this[_0x77fc[176]][_0x77fc[25]], 10 * this[_0x77fc[176]][_0x77fc[25]], this[_0x77fc[176]][_0x77fc[25]], _0x77fc[1263]);
  /** @type {number} */
  this[_0x77fc[188]][_0x77fc[1259]] = 1;
}, Ctx2DView[_0x77fc[170]][_0x77fc[1250]] = function(canCreateDiscussions) {
  this[_0x77fc[188]][_0x77fc[1259]] = canCreateDiscussions;
}, Ctx2DView[_0x77fc[170]][_0x77fc[1254]] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg) {
  this[_0x77fc[188]][_0x77fc[1254]](mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg);
}, Ctx2DView[_0x77fc[170]][_0x77fc[1264]] = function() {
  return new FastFont2D;
}, FastFont2D[_0x77fc[170]][_0x77fc[152]] = function(saveNotifs) {
  saveNotifs();
}, FastFont2D[_0x77fc[170]][_0x77fc[190]] = function() {
  if (this[_0x77fc[1]][_0x77fc[952]] < this[_0x77fc[1]][_0x77fc[1265]]) {
    this[_0x77fc[1]][_0x77fc[952]] = this[_0x77fc[1]][_0x77fc[1265]];
  }
}, FastFont2D[_0x77fc[170]][_0x77fc[1266]] = function(PL$53) {
  this[_0x77fc[190]]();
  this[_0x77fc[188]][_0x77fc[1254]](0, 0, this[_0x77fc[1]][_0x77fc[388]], this[_0x77fc[1]][_0x77fc[952]]);
  var backoffDelay = this[_0x77fc[1]][_0x77fc[952]];
  if (PL$53[_0x77fc[237]] > this[_0x77fc[189]]) {
    this[_0x77fc[189]] = PL$53[_0x77fc[237]];
  }
  var backoffDelaySeconds = backoffDelay / this[_0x77fc[189]];
  /** @type {number} */
  var PL$54 = 0;
  for (; PL$54 < PL$53[_0x77fc[237]]; ++PL$54) {
    this[_0x77fc[1267]](PL$53[PL$54][_0x77fc[601]].toString(), 0, backoffDelaySeconds * PL$54 + this[_0x77fc[186]]);
  }
}, FastFont2D[_0x77fc[170]][_0x77fc[1267]] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority) {
  this[_0x77fc[188]][_0x77fc[1268]] = _0x77fc[1269] + this[_0x77fc[186]] + _0x77fc[1270];
  this[_0x77fc[188]][_0x77fc[954]] = _0x77fc[1271];
  this[_0x77fc[188]][_0x77fc[1272]](mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority);
}, WebGLUtils[_0x77fc[204]] = function(context) {
  var data = {
    preserveDrawingBuffer : false,
    antialias : false,
    powerPreference : _0x77fc[1273],
    alpha : true,
    premultipliedalpha : false
  };
  var transport = context[_0x77fc[11]](_0x77fc[1274], data) || context[_0x77fc[11]](_0x77fc[1275], data);
  return transport || alert(_0x77fc[1276]), transport[_0x77fc[208]](0, 0, 0, 0), transport[_0x77fc[1003]](transport[_0x77fc[1277]] | transport[_0x77fc[1278]]), transport;
}, WebGLUtils[_0x77fc[206]] = function(gl, params) {
  var d = gl[_0x77fc[206]]();
  var i = gl[_0x77fc[1279]](gl.VERTEX_SHADER);
  var e = gl[_0x77fc[1279]](gl.FRAGMENT_SHADER);
  if (gl[_0x77fc[1281]](i, params[_0x77fc[1280]]), gl[_0x77fc[1281]](e, params[_0x77fc[1282]]), gl[_0x77fc[1283]](i), gl[_0x77fc[1284]](i, gl.COMPILE_STATUS)) {
    if (gl[_0x77fc[1283]](e), gl[_0x77fc[1284]](e, gl.COMPILE_STATUS)) {
      if (gl[_0x77fc[1285]](d, i), gl[_0x77fc[1285]](d, e), gl[_0x77fc[1286]](d), gl[_0x77fc[1287]](d, gl.LINK_STATUS)) {
        if (gl[_0x77fc[1288]](d), gl[_0x77fc[1287]](d, gl.VALIDATE_STATUS)) {
          return d;
        }
        console[_0x77fc[935]](_0x77fc[1289], gl[_0x77fc[1290]](d));
      } else {
        console[_0x77fc[935]](_0x77fc[1291], gl[_0x77fc[1290]](d));
      }
    } else {
      console[_0x77fc[935]](_0x77fc[1292], gl[_0x77fc[1293]](e));
    }
  } else {
    console[_0x77fc[935]](_0x77fc[1294], gl[_0x77fc[1293]](i));
  }
}, WebGLUtils[_0x77fc[209]] = function(gl, data) {
  var type = data[_0x77fc[205]];
  var target = gl[_0x77fc[1287]](type, gl.ACTIVE_ATTRIBUTES);
  /** @type {number} */
  var value = 0;
  for (; value < target; value++) {
    var params = gl[_0x77fc[1295]](type, value);
    data[params[_0x77fc[333]]] = gl[_0x77fc[1296]](type, params[_0x77fc[333]]);
  }
  var result = gl[_0x77fc[1287]](type, gl.ACTIVE_UNIFORMS);
  /** @type {number} */
  value = 0;
  for (; value < result; value++) {
    var params = gl[_0x77fc[1297]](type, value);
    data[params[_0x77fc[333]]] = gl[_0x77fc[1298]](type, params[_0x77fc[333]]);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1252]] = function() {
  var _0xe1a7x4 = this[_0x77fc[176]][_0x77fc[1]];
  return !(!_0xe1a7x4[_0x77fc[11]](_0x77fc[1274]) && !_0xe1a7x4[_0x77fc[11]](_0x77fc[1275]));
}, WebGLView[_0x77fc[170]][_0x77fc[1299]] = function(obj) {
  obj[_0x77fc[203]] = WebGLUtils[_0x77fc[204]](obj[_0x77fc[202]]);
  obj[_0x77fc[205]] = WebGLUtils[_0x77fc[206]](obj[_0x77fc[203]], this[_0x77fc[194]]);
  obj[_0x77fc[213]] = new Float32Array(16);
  var gl = obj[_0x77fc[203]];
  var type = obj[_0x77fc[205]];
  gl[_0x77fc[207]](type);
  obj[_0x77fc[1300]] = gl[_0x77fc[1296]](type, _0x77fc[1301]);
  obj[_0x77fc[1302]] = gl[_0x77fc[1296]](type, _0x77fc[212]);
  obj[_0x77fc[1303]] = gl[_0x77fc[1298]](type, _0x77fc[1304]);
  obj[_0x77fc[1305]] = gl[_0x77fc[1298]](type, _0x77fc[1306]);
  obj[_0x77fc[1259]] = gl[_0x77fc[1298]](type, _0x77fc[1259]);
  gl[_0x77fc[1307]](obj[_0x77fc[1259]], 1);
  obj[_0x77fc[1308]] = gl[_0x77fc[222]]();
  gl[_0x77fc[1309]](gl.ARRAY_BUFFER, obj[_0x77fc[1308]]);
  gl[_0x77fc[1310]](gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
  obj[_0x77fc[1311]] = gl[_0x77fc[222]]();
  gl[_0x77fc[1309]](gl.ARRAY_BUFFER, obj[_0x77fc[1311]]);
  gl[_0x77fc[1310]](gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
  /** @type {!Array} */
  obj[_0x77fc[1312]] = [];
  obj[_0x77fc[1313]] = false;
  /** @type {null} */
  obj[_0x77fc[1314]] = null;
  this[_0x77fc[1315]](obj, 0);
  this[_0x77fc[1315]](obj, 1);
  this[_0x77fc[1316]](obj, 2);
}, WebGLView[_0x77fc[170]][_0x77fc[1253]] = function() {
  /** @type {!Array} */
  this[_0x77fc[191]] = [{
    elem : this[_0x77fc[176]][_0x77fc[1]],
    mesh : {
      w : 10,
      h : 20
    }
  }, {
    elem : this[_0x77fc[176]][_0x77fc[4]],
    mesh : {
      w : 4,
      h : 4
    }
  }, {
    elem : this[_0x77fc[176]][_0x77fc[5]],
    mesh : {
      w : 4,
      h : 15
    }
  }];
  this[_0x77fc[1299]](this[_0x77fc[191]][0]);
  this[_0x77fc[1299]](this[_0x77fc[191]][1]);
  this[_0x77fc[1299]](this[_0x77fc[191]][2]);
  if (void 0 !== this[_0x77fc[176]][_0x77fc[41]] && this[_0x77fc[176]][_0x77fc[41]]) {
    this[_0x77fc[176]][_0x77fc[166]](this[_0x77fc[176]][_0x77fc[41]]);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1316]] = function(ranges, n) {
  var gl = ranges[_0x77fc[203]];
  var key = gl[_0x77fc[220]]();
  key[_0x77fc[312]] = n;
  gl[_0x77fc[1317]](gl.TEXTURE_2D, key);
  gl[_0x77fc[1318]](gl.TEXTURE_2D, 0, gl.RGBA, 2, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 39, 15, 255, 255, 255, 255, 255]));
  gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  var fmt = {
    width : 2,
    height : 1,
    texture : key
  };
  ranges[_0x77fc[1312]][n] = fmt;
}, WebGLView[_0x77fc[170]][_0x77fc[1315]] = function(ranges, n) {
  var gl = ranges[_0x77fc[203]];
  var key = gl[_0x77fc[220]]();
  key[_0x77fc[312]] = n;
  gl[_0x77fc[1317]](gl.TEXTURE_2D, key);
  var size = this[_0x77fc[193]][_0x77fc[237]];
  var bytearray = new Uint8Array(4 * size);
  /** @type {number} */
  var i = 0;
  for (; i < size; ++i) {
    var color = this[_0x77fc[176]][_0x77fc[286]][this[_0x77fc[193]][i]];
    if (this[_0x77fc[176]][_0x77fc[271]] && i > 1) {
      color = hexToRgb(this[_0x77fc[176]][_0x77fc[271]], 255);
    }
    bytearray[4 * i] = Math[_0x77fc[1196]](255 * color[0]);
    bytearray[4 * i + 1] = Math[_0x77fc[1196]](255 * color[1]);
    bytearray[4 * i + 2] = Math[_0x77fc[1196]](255 * color[2]);
    /** @type {number} */
    bytearray[4 * i + 3] = 255;
  }
  gl[_0x77fc[1318]](gl.TEXTURE_2D, 0, gl.RGBA, size, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, bytearray);
  gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  var fmt = {
    width : size,
    height : 1,
    texture : key
  };
  ranges[_0x77fc[1312]][n] = fmt;
}, WebGLView[_0x77fc[170]][_0x77fc[901]] = function(itemIndexInCache, resolvedViewModel) {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x77fc[191]][_0x77fc[237]]; ++indexLookupKey) {
    this[_0x77fc[1315]](this[_0x77fc[191]][indexLookupKey], itemIndexInCache);
  }
  if (null !== resolvedViewModel) {
    var result = new Image;
    var historical_metrics = this;
    result[_0x77fc[1322]](_0x77fc[1320], function() {
      /** @type {number} */
      var chartInstanceName = 0;
      for (; chartInstanceName < historical_metrics[_0x77fc[191]][_0x77fc[237]]; ++chartInstanceName) {
        var gl = historical_metrics[_0x77fc[191]][chartInstanceName][_0x77fc[203]];
        var params = historical_metrics[_0x77fc[191]][chartInstanceName][_0x77fc[1312]][itemIndexInCache];
        params[_0x77fc[388]] = result[_0x77fc[388]];
        params[_0x77fc[952]] = result[_0x77fc[952]];
        historical_metrics[_0x77fc[191]][chartInstanceName][_0x77fc[1314]] = params[_0x77fc[1321]];
        gl[_0x77fc[1317]](gl.TEXTURE_2D, params[_0x77fc[1321]]);
        gl[_0x77fc[1318]](gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, result);
        gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      }
      historical_metrics[_0x77fc[176]][_0x77fc[905]]();
    });
    result[_0x77fc[1323]] = _0x77fc[1324];
    result[_0x77fc[38]] = resolvedViewModel;
    if (0 === itemIndexInCache) {
      this[_0x77fc[197]] = false;
    }
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1257]] = function(args, event, duration, width, current_amount, parentKeyLeft, dist, size, mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg) {
  var context = args[_0x77fc[203]];
  if (args[_0x77fc[1314]] !== event) {
    context[_0x77fc[1317]](context.TEXTURE_2D, event);
    args[_0x77fc[1314]] = event;
  }
  if (!args[_0x77fc[1313]]) {
    context[_0x77fc[1309]](context.ARRAY_BUFFER, args[_0x77fc[1308]]);
    context[_0x77fc[211]](args[_0x77fc[1300]]);
    context[_0x77fc[1325]](args[_0x77fc[1300]], 2, context.FLOAT, false, 0, 0);
    context[_0x77fc[1309]](context.ARRAY_BUFFER, args[_0x77fc[1311]]);
    context[_0x77fc[211]](args[_0x77fc[1302]]);
    context[_0x77fc[1325]](args[_0x77fc[1302]], 2, context.FLOAT, false, 0, 0);
    args[_0x77fc[1313]] = true;
  }
  Matrix[_0x77fc[1326]](0, args[_0x77fc[202]][_0x77fc[388]], args[_0x77fc[202]][_0x77fc[952]], 0, -1, 1, args[_0x77fc[213]]);
  Matrix[_0x77fc[1327]](args[_0x77fc[213]], mmCoreSplitViewBlock, mmaPushNotificationsComponent, 0, args[_0x77fc[213]]);
  Matrix[_0x77fc[225]](args[_0x77fc[213]], mmaFrontpagePriority, isBgroundImg, 1, args[_0x77fc[213]]);
  context[_0x77fc[1328]](args[_0x77fc[1303]], false, args[_0x77fc[213]]);
  Matrix[_0x77fc[1329]](current_amount / duration, parentKeyLeft / width, 0, args[_0x77fc[213]]);
  Matrix[_0x77fc[225]](args[_0x77fc[213]], dist / duration, size / width, 1, args[_0x77fc[213]]);
  context[_0x77fc[1328]](args[_0x77fc[1305]], false, args[_0x77fc[213]]);
  context[_0x77fc[1331]](args[_0x77fc[1330]], 0);
  context[_0x77fc[1332]](context.TRIANGLES, 0, 6);
}, WebGLView[_0x77fc[170]][_0x77fc[991]] = function() {
  if (this[_0x77fc[982]](), !this[_0x77fc[176]][_0x77fc[270]]) {
    /** @type {number} */
    var uivar = 0;
    for (; uivar < 20; uivar++) {
      /** @type {number} */
      var prop = 0;
      for (; prop < 10; prop++) {
        this[_0x77fc[1092]](prop, uivar, this[_0x77fc[176]][_0x77fc[177]][uivar][prop], this.MAIN);
      }
    }
  }
}, WebGLView[_0x77fc[170]][_0x77fc[982]] = function() {
  var gl = this[_0x77fc[191]][0][_0x77fc[203]];
  gl[_0x77fc[1003]](gl.COLOR_BUFFER_BIT);
}, WebGLView[_0x77fc[170]][_0x77fc[984]] = function() {
  var gl = this[_0x77fc[191]][this[_0x77fc[183]]][_0x77fc[203]];
  gl[_0x77fc[1003]](gl.COLOR_BUFFER_BIT);
}, WebGLView[_0x77fc[170]][_0x77fc[983]] = function() {
  var gl = this[_0x77fc[191]][this[_0x77fc[184]]][_0x77fc[203]];
  gl[_0x77fc[1003]](gl.COLOR_BUFFER_BIT);
}, WebGLView[_0x77fc[170]][_0x77fc[1255]] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg) {
  this[_0x77fc[1092]](mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg);
}, WebGLView[_0x77fc[170]][_0x77fc[1258]] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
}, WebGLView[_0x77fc[170]][_0x77fc[1091]] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
}, WebGLView[_0x77fc[170]][_0x77fc[1092]] = function(canCreateDiscussions, isSlidingUp, traitName, drawtype) {
  if (traitName) {
    var GET_AUTH_URL_TIMEOUT = this[_0x77fc[176]][_0x77fc[40]] * this[_0x77fc[176]][_0x77fc[25]];
    var dali_drawtype = this[_0x77fc[191]][drawtype];
    var msg = dali_drawtype[_0x77fc[1312]][0];
    this[_0x77fc[1257]](dali_drawtype, msg[_0x77fc[1321]], msg[_0x77fc[388]], msg[_0x77fc[952]], this[_0x77fc[176]][_0x77fc[273]][traitName] * msg[_0x77fc[952]], 0, msg[_0x77fc[952]], msg[_0x77fc[952]], canCreateDiscussions * this[_0x77fc[176]][_0x77fc[25]], isSlidingUp * this[_0x77fc[176]][_0x77fc[25]], GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1090]] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent, statisticName) {
  var artistTrack = this[_0x77fc[191]][0];
  if (0 === this[_0x77fc[176]][_0x77fc[43]]) {
    artistTrack[_0x77fc[203]][_0x77fc[1307]](artistTrack[_0x77fc[1259]], .5);
    this[_0x77fc[1092]](mmCoreSplitViewBlock, mmaPushNotificationsComponent, statisticName, 0);
    artistTrack[_0x77fc[203]][_0x77fc[1307]](artistTrack[_0x77fc[1259]], 1);
  } else {
    var GET_AUTH_URL_TIMEOUT = this[_0x77fc[176]][_0x77fc[40]] * this[_0x77fc[176]][_0x77fc[25]];
    var _0xe1a7x1e = artistTrack[_0x77fc[1312]][1];
    this[_0x77fc[1257]](artistTrack, _0xe1a7x1e[_0x77fc[1321]], _0xe1a7x1e[_0x77fc[388]], _0xe1a7x1e[_0x77fc[952]], (this[_0x77fc[176]][_0x77fc[273]][statisticName] - 2) * _0xe1a7x1e[_0x77fc[952]], 0, _0xe1a7x1e[_0x77fc[952]], _0xe1a7x1e[_0x77fc[952]], mmCoreSplitViewBlock * this[_0x77fc[176]][_0x77fc[25]], mmaPushNotificationsComponent * this[_0x77fc[176]][_0x77fc[25]], GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1093]] = function(canCreateDiscussions) {
  if (canCreateDiscussions || this[_0x77fc[176]][_0x77fc[97]]) {
    var artistTrack = this[_0x77fc[191]][this[_0x77fc[182]]];
    var _0xe1a7x8 = artistTrack[_0x77fc[1312]][2];
    if (canCreateDiscussions) {
      artistTrack[_0x77fc[203]][_0x77fc[1003]](artistTrack[_0x77fc[203]].COLOR_BUFFER_BIT);
      this[_0x77fc[176]][_0x77fc[991]]();
      this[_0x77fc[176]][_0x77fc[1085]]();
    }
    this[_0x77fc[1257]](artistTrack, _0xe1a7x8[_0x77fc[1321]], _0xe1a7x8[_0x77fc[388]], _0xe1a7x8[_0x77fc[952]], 0, 0, 1, 1, 240, (20 - this[_0x77fc[176]][_0x77fc[97]]) * this[_0x77fc[176]][_0x77fc[25]], 8, this[_0x77fc[176]][_0x77fc[97]] * this[_0x77fc[176]][_0x77fc[25]]);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1249]] = function(canCreateDiscussions, mmCoreSplitViewBlock) {
  var artistTrack = this[_0x77fc[191]][this[_0x77fc[182]]];
  var _0xe1a7x12 = artistTrack[_0x77fc[1312]][2];
  artistTrack[_0x77fc[203]][_0x77fc[1307]](artistTrack[_0x77fc[1259]], mmCoreSplitViewBlock);
  this[_0x77fc[1257]](artistTrack, _0xe1a7x12[_0x77fc[1321]], _0xe1a7x12[_0x77fc[388]], _0xe1a7x12[_0x77fc[952]], 1, 0, 1, 1, 0, canCreateDiscussions * this[_0x77fc[176]][_0x77fc[25]], 10 * this[_0x77fc[176]][_0x77fc[25]], this[_0x77fc[176]][_0x77fc[25]]);
  artistTrack[_0x77fc[203]][_0x77fc[1307]](artistTrack[_0x77fc[1259]], 1);
}, WebGLView[_0x77fc[170]][_0x77fc[1250]] = function(mmCoreSplitViewBlock) {
  var _0xe1a7x7 = this[_0x77fc[191]][this[_0x77fc[182]]];
  _0xe1a7x7[_0x77fc[203]][_0x77fc[1307]](_0xe1a7x7[_0x77fc[1259]], mmCoreSplitViewBlock);
}, WebGLView[_0x77fc[170]][_0x77fc[1254]] = function(type, key, mValue, value3) {
  var ranges = this[_0x77fc[191]][this[_0x77fc[182]]];
  var gl = ranges[_0x77fc[203]];
  key = Math[_0x77fc[1163]](ranges[_0x77fc[202]][_0x77fc[952]] - key - value3);
  gl[_0x77fc[218]](gl.SCISSOR_TEST);
  gl[_0x77fc[1333]](type, key, mValue, value3);
  gl[_0x77fc[1003]](gl.COLOR_BUFFER_BIT);
  gl[_0x77fc[1334]](gl.SCISSOR_TEST);
  gl[_0x77fc[208]](0, 0, 0, 0);
}, WebGLView[_0x77fc[170]][_0x77fc[1335]] = function(mmCoreSplitViewBlock, canCreateDiscussions) {
  if (this[_0x77fc[1156]] = canCreateDiscussions, _0x77fc[1336] == typeof gifler) {
    let resource = CDN_URL(_0x77fc[1337]);
    includeScript(resource, this[_0x77fc[1338]][_0x77fc[430]](this, mmCoreSplitViewBlock));
  } else {
    this[_0x77fc[1338]](mmCoreSplitViewBlock);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1338]] = function(mmCoreSplitViewBlock) {
  let artistTrack = null;
  if (this[_0x77fc[1156]][_0x77fc[1155]] = false, this[_0x77fc[1156]][_0x77fc[609]] = this[_0x77fc[1156]][_0x77fc[611]] = null, this[_0x77fc[198]] && _0x77fc[1] === this[_0x77fc[198]][_0x77fc[1339]]) {
    artistTrack = this[_0x77fc[198]];
    try {
      document[_0x77fc[1341]][_0x77fc[1340]](artistTrack);
    } catch (_0xe1a7x4) {
    }
  } else {
    artistTrack = document[_0x77fc[383]](_0x77fc[1]);
  }
  gifler(mmCoreSplitViewBlock)[_0x77fc[73]](artistTrack, this[_0x77fc[1342]][_0x77fc[430]](this), true);
  this[_0x77fc[198]] = artistTrack;
  if (this[_0x77fc[1156]][_0x77fc[26]]) {
    document[_0x77fc[1341]][_0x77fc[387]](artistTrack);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1342]] = function(ctx, buffer) {
  if (this[_0x77fc[1156]][_0x77fc[1343]]) {
    if (null === this[_0x77fc[1156]][_0x77fc[609]]) {
      this[_0x77fc[1156]][_0x77fc[609]] = this[_0x77fc[198]][_0x77fc[388]];
      this[_0x77fc[1156]][_0x77fc[611]] = this[_0x77fc[198]][_0x77fc[952]];
      /** @type {number} */
      ctx[_0x77fc[1]][_0x77fc[388]] = 576;
      /** @type {number} */
      ctx[_0x77fc[1]][_0x77fc[952]] = 64;
    }
    let retval = [9, 8, 1, 2, 3, 4, 5, 6, 7];
    /** @type {number} */
    var ratio = 0;
    for (; ratio < 9; ++ratio) {
      ctx[_0x77fc[1344]] = _0x77fc[1345];
      let panL = 64 / this[_0x77fc[1156]][_0x77fc[609]];
      let panR = 64 / this[_0x77fc[1156]][_0x77fc[611]];
      let offset = buffer[_0x77fc[649]] * panL;
      let sizeX = buffer[_0x77fc[650]] * panR;
      let sizeY = buffer[_0x77fc[388]] * panL;
      let numKeysDeleted = buffer[_0x77fc[952]] * panR;
      if (ctx[_0x77fc[1257]](buffer[_0x77fc[1346]], 64 * ratio + offset, sizeX, sizeY, numKeysDeleted), this[_0x77fc[1156]][_0x77fc[1347]]) {
        let _0xe1a7x7 = this[_0x77fc[176]][_0x77fc[286]][retval[ratio]];
        let _0xe1a7x13 = this[_0x77fc[1156]][_0x77fc[1348]] || .7;
        ctx[_0x77fc[1344]] = _0x77fc[1349];
        ctx[_0x77fc[954]] = _0x77fc[1350] + 255 * _0xe1a7x7[0] + _0x77fc[1351] + 255 * _0xe1a7x7[1] + _0x77fc[1351] + 255 * _0xe1a7x7[2] + _0x77fc[1351] + _0xe1a7x13 + _0x77fc[1352];
        ctx[_0x77fc[1353]](64 * ratio, 0, 64, 64);
      }
    }
  } else {
    ctx[_0x77fc[1257]](buffer[_0x77fc[1346]], buffer[_0x77fc[649]], buffer[_0x77fc[650]], buffer[_0x77fc[388]], buffer[_0x77fc[952]]);
  }
  this[_0x77fc[1354]](0, this[_0x77fc[198]], this[_0x77fc[198]][_0x77fc[388]], this[_0x77fc[198]][_0x77fc[952]]);
  this[_0x77fc[197]] = true;
}, WebGLView[_0x77fc[170]][_0x77fc[1355]] = function(i, isSlidingUp) {
  this[_0x77fc[1156]] = isSlidingUp;
  this[_0x77fc[1156]][_0x77fc[1155]] = true;
  this[_0x77fc[197]] = false;
  const bBag = document[_0x77fc[383]](_0x77fc[198]);
  var value = false;
  var text = false;
  var result = this;
  bBag[_0x77fc[1323]] = _0x77fc[1324];
  bBag[_0x77fc[1356]] = bBag[_0x77fc[1357]] = true;
  bBag[_0x77fc[1358]] = true !== this[_0x77fc[1156]][_0x77fc[1359]];
  bBag[_0x77fc[1322]](_0x77fc[1360], function() {
    value = true;
    result[_0x77fc[197]] = value && text;
  }, true);
  bBag[_0x77fc[1322]](_0x77fc[1361], function() {
    text = true;
    result[_0x77fc[197]] = value && text;
  }, true);
  bBag[_0x77fc[1322]](_0x77fc[1362], function() {
    result[_0x77fc[197]] = value = text = false;
  }, true);
  bBag[_0x77fc[38]] = i;
  bBag[_0x77fc[50]]();
  this[_0x77fc[198]] = bBag;
}, WebGLView[_0x77fc[170]][_0x77fc[1157]] = function(mmCoreSplitViewBlock) {
  if (this[_0x77fc[197]]) {
    this[_0x77fc[1354]](mmCoreSplitViewBlock, this[_0x77fc[198]], this[_0x77fc[198]][_0x77fc[1363]], this[_0x77fc[198]][_0x77fc[1364]]);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1354]] = function(url, mmCoreSplitViewBlock, modelMaskFeature, targetPassword) {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x77fc[191]][_0x77fc[237]]; ++indexLookupKey) {
    var gl = this[_0x77fc[191]][indexLookupKey][_0x77fc[203]];
    var params = this[_0x77fc[191]][indexLookupKey][_0x77fc[1312]][url];
    params[_0x77fc[388]] = modelMaskFeature;
    params[_0x77fc[952]] = targetPassword;
    if (this[_0x77fc[191]][indexLookupKey][_0x77fc[1314]] !== params[_0x77fc[1321]]) {
      gl[_0x77fc[1317]](gl.TEXTURE_2D, params[_0x77fc[1321]]);
      this[_0x77fc[191]][indexLookupKey][_0x77fc[1314]] = params[_0x77fc[1321]];
    }
    gl[_0x77fc[1318]](gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mmCoreSplitViewBlock);
  }
}, WebGLView[_0x77fc[170]][_0x77fc[1264]] = function() {
  return new FastFont;
}, FastFont[_0x77fc[170]][_0x77fc[152]] = function(saveNotifs) {
  var _0xe1a7x7 = this;
  var param = new Image;
  param[_0x77fc[1322]](_0x77fc[1320], function() {
    var gl = _0xe1a7x7[_0x77fc[188]][_0x77fc[203]];
    var args = _0xe1a7x7[_0x77fc[188]][_0x77fc[219]];
    args[_0x77fc[388]] = param[_0x77fc[388]];
    args[_0x77fc[952]] = param[_0x77fc[952]];
    gl[_0x77fc[1317]](gl.TEXTURE_2D, _0xe1a7x7[_0x77fc[188]][_0x77fc[219]][_0x77fc[1321]]);
    gl[_0x77fc[1318]](gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, param);
    gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl[_0x77fc[1319]](gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl[_0x77fc[1366]](_0xe1a7x7[_0x77fc[188]][_0x77fc[1365]], param[_0x77fc[388]], param[_0x77fc[952]]);
    _0xe1a7x7[_0x77fc[224]] = true;
    saveNotifs();
  });
  param[_0x77fc[1323]] = _0x77fc[1324];
  param[_0x77fc[38]] = CDN_URL(_0x77fc[1367]);
}, FastFont[_0x77fc[170]][_0x77fc[190]] = function() {
  if (this[_0x77fc[1]][_0x77fc[952]] < this[_0x77fc[1]][_0x77fc[1265]]) {
    this[_0x77fc[1]][_0x77fc[952]] = this[_0x77fc[1]][_0x77fc[1265]];
    this[_0x77fc[188]][_0x77fc[203]][_0x77fc[1368]](0, 0, this[_0x77fc[1]][_0x77fc[388]], this[_0x77fc[1]][_0x77fc[952]]);
  }
}, FastFont[_0x77fc[170]][_0x77fc[1369]] = function(PL$53, countryPopulation) {
  var params = this[_0x77fc[188]];
  var gl = params[_0x77fc[203]];
  var population = this[_0x77fc[186]];
  var eyehvar = population / 8;
  var siteName = population + 2 * eyehvar;
  var middlePathName = population + 2 * eyehvar;
  var zoomSpeed = population / 2 + eyehvar;
  var scrollAccum = countryPopulation / population;
  var extentX = {
    x : 0,
    y : middlePathName / 2 - eyehvar
  };
  /** @type {number} */
  var artistTrack = 0;
  /** @type {number} */
  var PL$54 = 0;
  for (; PL$54 < PL$53[_0x77fc[237]]; PL$54++) {
    var options = this[_0x77fc[199]][PL$53[PL$54]];
    if (options || (options = this[_0x77fc[199]][_0x77fc[1370]]), PL$54 === this[_0x77fc[214]]) {
      PL$53 = PL$53[_0x77fc[1045]](0, this.MAX_STR_LEN);
      break;
    }
    var managementcommandsdns = options[_0x77fc[649]];
    var baseNewPath = options[_0x77fc[650]];
    var offsetY = options[_0x77fc[609]] || population * this[_0x77fc[227]];
    this[_0x77fc[215]][_0x77fc[322]]([extentX[_0x77fc[649]] + (0 - eyehvar) * scrollAccum, extentX[_0x77fc[650]] - zoomSpeed * scrollAccum, extentX[_0x77fc[649]] + (0 - eyehvar + siteName) * scrollAccum, extentX[_0x77fc[650]] - zoomSpeed * scrollAccum, extentX[_0x77fc[649]] + (0 - eyehvar) * scrollAccum, extentX[_0x77fc[650]] + (middlePathName - zoomSpeed) * scrollAccum, extentX[_0x77fc[649]] + (0 - eyehvar + siteName) * scrollAccum, extentX[_0x77fc[650]] - zoomSpeed * scrollAccum, extentX[_0x77fc[649]] + 
    (0 - eyehvar) * scrollAccum, extentX[_0x77fc[650]] + (middlePathName - zoomSpeed) * scrollAccum, extentX[_0x77fc[649]] + (0 - eyehvar + siteName) * scrollAccum, extentX[_0x77fc[650]] + (middlePathName - zoomSpeed) * scrollAccum], artistTrack);
    this[_0x77fc[216]][_0x77fc[322]]([managementcommandsdns, baseNewPath, managementcommandsdns + siteName, baseNewPath, managementcommandsdns, baseNewPath + middlePathName, managementcommandsdns + siteName, baseNewPath, managementcommandsdns, baseNewPath + middlePathName, managementcommandsdns + siteName, baseNewPath + middlePathName], artistTrack);
    artistTrack = artistTrack + 12;
    extentX[_0x77fc[649]] = extentX[_0x77fc[649]] + offsetY * scrollAccum;
  }
  gl[_0x77fc[1309]](gl.ARRAY_BUFFER, params[_0x77fc[221]]);
  gl[_0x77fc[1310]](gl.ARRAY_BUFFER, this[_0x77fc[215]], gl.STATIC_DRAW);
  gl[_0x77fc[1309]](gl.ARRAY_BUFFER, params[_0x77fc[223]]);
  gl[_0x77fc[1310]](gl.ARRAY_BUFFER, this[_0x77fc[216]], gl.STATIC_DRAW);
  params[_0x77fc[221]][_0x77fc[1371]] = params[_0x77fc[223]][_0x77fc[1371]] = 6 * PL$53[_0x77fc[237]];
}, FastFont[_0x77fc[170]][_0x77fc[1266]] = function(PL$53) {
  this[_0x77fc[190]]();
  var gl = this[_0x77fc[188]][_0x77fc[203]];
  var backoffDelay = this[_0x77fc[188]][_0x77fc[202]][_0x77fc[952]];
  gl[_0x77fc[1003]](gl.COLOR_BUFFER_BIT);
  if (PL$53[_0x77fc[237]] > this[_0x77fc[189]]) {
    this[_0x77fc[189]] = PL$53[_0x77fc[237]];
  }
  var backoffDelaySeconds = backoffDelay / this[_0x77fc[189]];
  /** @type {number} */
  var PL$54 = 0;
  for (; PL$54 < PL$53[_0x77fc[237]]; ++PL$54) {
    this[_0x77fc[1267]](PL$53[PL$54][_0x77fc[601]].toString(), 0, backoffDelaySeconds * PL$54);
  }
}, FastFont[_0x77fc[170]][_0x77fc[1267]] = function(mmaFrontpagePriority, mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
  if (this[_0x77fc[224]]) {
    var ctx = this[_0x77fc[188]][_0x77fc[203]];
    var buffer = this[_0x77fc[188]];
    this[_0x77fc[1369]](mmaFrontpagePriority, this[_0x77fc[225]]);
    Matrix[_0x77fc[1326]](0, buffer[_0x77fc[202]][_0x77fc[388]], buffer[_0x77fc[202]][_0x77fc[952]], 0, -1, 1, buffer[_0x77fc[213]]);
    Matrix[_0x77fc[1327]](buffer[_0x77fc[213]], mmCoreSplitViewBlock, mmaPushNotificationsComponent, 0, buffer[_0x77fc[213]]);
    ctx[_0x77fc[1328]](buffer[_0x77fc[1304]], false, buffer[_0x77fc[213]]);
    if (!this[_0x77fc[228]]) {
      this[_0x77fc[228]] = true;
      ctx[_0x77fc[1372]](ctx.TEXTURE0);
      ctx[_0x77fc[1317]](ctx.TEXTURE_2D, buffer[_0x77fc[219]][_0x77fc[1321]]);
      ctx[_0x77fc[1331]](buffer[_0x77fc[1373]], 0);
      ctx[_0x77fc[1309]](ctx.ARRAY_BUFFER, buffer[_0x77fc[221]]);
      ctx[_0x77fc[1325]](buffer[_0x77fc[210]], 2, ctx.FLOAT, false, 0, 0);
      ctx[_0x77fc[1309]](ctx.ARRAY_BUFFER, buffer[_0x77fc[223]]);
      ctx[_0x77fc[1325]](buffer[_0x77fc[212]], 2, ctx.FLOAT, false, 0, 0);
      ctx[_0x77fc[1375]](buffer[_0x77fc[1374]], [128 / 255, 128 / 255, 128 / 255, 1]);
      ctx[_0x77fc[1307]](buffer[_0x77fc[1376]], .75);
      ctx[_0x77fc[1307]](buffer[_0x77fc[1377]], 1.4142 * this[_0x77fc[226]] / this[_0x77fc[225]]);
    }
    ctx[_0x77fc[1332]](ctx.TRIANGLES, 0, buffer[_0x77fc[221]][_0x77fc[1371]]);
  }
}, GameCore[_0x77fc[170]][_0x77fc[1130]] = function(canCreateDiscussions, isSlidingUp) {
  let zero = this[_0x77fc[232]][this[_0x77fc[147]][_0x77fc[753]]][_0x77fc[1087]][_0x77fc[237]];
  let point_2 = null;
  let collected = isSlidingUp || this[_0x77fc[137]];
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
}, GameCore[_0x77fc[170]][_0x77fc[306]] = function(mmCoreSplitViewBlock) {
  this[_0x77fc[230]] = this[_0x77fc[1130]](mmCoreSplitViewBlock);
  if (this[_0x77fc[229]] && this[_0x77fc[156]]) {
    if (0 !== mmCoreSplitViewBlock) {
      this[_0x77fc[156]][_0x77fc[728]][_0x77fc[305]] = mmCoreSplitViewBlock;
    } else {
      if (_0x77fc[305] in this[_0x77fc[156]][_0x77fc[728]]) {
        delete this[_0x77fc[156]][_0x77fc[728]][_0x77fc[305]];
      }
    }
  }
}, GameCore[_0x77fc[170]][_0x77fc[1134]] = function(limitFromUnread) {
  let _0xe1a7x7 = (limitFromUnread = limitFromUnread || this[_0x77fc[230]])[_0x77fc[313]]();
  return 0 === _0xe1a7x7[_0x77fc[322]] ? _0xe1a7x7[_0x77fc[322]] = this[_0x77fc[147]][_0x77fc[753]] : -1 === _0xe1a7x7[_0x77fc[322]] && (_0xe1a7x7[_0x77fc[322]] = 0), null !== this[_0x77fc[96]] && (_0xe1a7x7[_0x77fc[322]] = this[_0x77fc[96]], this[_0x77fc[96]] = null), _0xe1a7x7;
}, GameCore[_0x77fc[170]][_0x77fc[1135]] = function() {
  if (0 === this[_0x77fc[235]][_0x77fc[237]]) {
    return this[_0x77fc[229]] && 9 === this[_0x77fc[55]] && this[_0x77fc[153]][_0x77fc[1220]](i18n[_0x77fc[1378]], i18n[_0x77fc[1379]]), this.GameOver(), this[_0x77fc[68]];
  }
  var _0xe1a7x4 = this[_0x77fc[235]][_0x77fc[928]](0, 1)[0];
  return this[_0x77fc[1132]](), this[_0x77fc[974]](), _0xe1a7x4;
}, GameCore[_0x77fc[170]][_0x77fc[1099]] = function(imageModelSection, afterIdx, m) {
  m = null === m ? this[_0x77fc[68]][_0x77fc[1086]] : m;
  let _0xe1a7x12 = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]];
  let DateDisabled = _0xe1a7x12[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]][_0x77fc[1087]];
  let ld = _0xe1a7x12[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]][_0x77fc[1087]][m][_0x77fc[237]];
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
        if (afterIdx + i >= 0 && this[_0x77fc[177]][afterIdx + i][imageModelSection + id] > 0) {
          return true;
        }
      }
    }
  }
  return false;
}, GameCore[_0x77fc[170]][_0x77fc[855]] = function() {
  let _0xe1a7x4 = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]];
  let iClef = _0xe1a7x4[_0x77fc[1087]][0][_0x77fc[237]];
  if (this[_0x77fc[68]][_0x77fc[1086]] = 0, this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] = _0xe1a7x4[_0x77fc[1380]][0], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] = _0xe1a7x4[_0x77fc[1380]][1], 0 === this[_0x77fc[68]][_0x77fc[322]]) {
    var _0xe1a7x8 = _0xe1a7x4[_0x77fc[1087]][0][-this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]];
    if (this[_0x77fc[177]][0][3] && _0xe1a7x8[0] || this[_0x77fc[177]][0][4] && _0xe1a7x8[1] || this[_0x77fc[177]][0][5] && _0xe1a7x8[2] || this[_0x77fc[177]][0][6] && _0xe1a7x8[3]) {
      this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]--;
    }
  } else {
    for (; this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]], null);) {
      this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]--;
    }
  }
  var iPitch = -(1 + this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]);
  if (iPitch >= 0 && iPitch < iClef) {
    /** @type {number} */
    var HTMLELEMENT = 0;
    for (; HTMLELEMENT < iClef; ++HTMLELEMENT) {
      if (_0xe1a7x4[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[1086]]][iPitch][HTMLELEMENT] && this[_0x77fc[231]][this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + HTMLELEMENT]) {
        this.GameOver();
        break;
      }
    }
  }
}, GameCore[_0x77fc[170]][_0x77fc[1381]] = function(pixX, pixY) {
  let _0xe1a7x8 = this[_0x77fc[68]][_0x77fc[312]];
  let _0xe1a7x12 = false;
  return !(pixY < 0) && (3 === _0xe1a7x8 || 4 === _0xe1a7x8 ? 0 === this[_0x77fc[68]][_0x77fc[1086]] ? _0xe1a7x12 = (this[_0x77fc[177]][pixY][pixX + 1] > 0 || this[_0x77fc[177]][pixY + 2][pixX + 1] > 0) && !(this[_0x77fc[177]][pixY + 2][pixX + 1] > 0 && this[_0x77fc[177]][pixY][pixX + (2 * (4 === _0xe1a7x8) | 0)] > 0) : 3 === this[_0x77fc[68]][_0x77fc[1086]] && (_0xe1a7x12 = this[_0x77fc[177]][pixY][pixX + 1] > 0 || this[_0x77fc[177]][pixY + 1][pixX + 1] > 0) : 2 === _0xe1a7x8 && (0 !== this[_0x77fc[68]][_0x77fc[1086]] && 
  2 !== this[_0x77fc[68]][_0x77fc[1086]] || (_0xe1a7x12 = this[_0x77fc[177]][pixY + 1][pixX] > 0)), _0xe1a7x12);
}, GameCore[_0x77fc[170]][_0x77fc[1067]] = function(canCreateDiscussions) {
  this[_0x77fc[110]] += 2 === canCreateDiscussions ? 2 : 1;
  let indexLookupKey = -1 === canCreateDiscussions ? _0x77fc[1382] : 1 === canCreateDiscussions ? _0x77fc[526] : _0x77fc[527];
  let _maskLayer = this[_0x77fc[68]][_0x77fc[1086]] + canCreateDiscussions;
  _maskLayer = -1 === _maskLayer ? _maskLayer = 3 : _maskLayer % 4;
  let _0xe1a7x12 = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]];
  let heapDiffs = _0xe1a7x12[_0x77fc[1383]][this[_0x77fc[68]][_0x77fc[1086]]][indexLookupKey];
  let gcollections = heapDiffs[_0x77fc[237]];
  if (3 !== this[_0x77fc[68]][_0x77fc[322]] || !this[_0x77fc[1381]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]])) {
    for (let gcIndex = 0; gcIndex < gcollections; gcIndex++) {
      let _0xe1a7x1e = heapDiffs[gcIndex][0];
      let _0xe1a7x1f = heapDiffs[gcIndex][1];
      if (!this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + _0xe1a7x1e, this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] - _0xe1a7x1f, _maskLayer)) {
        if (this[_0x77fc[265]] = true, 2 === _0xe1a7x12[_0x77fc[312]]) {
          this[_0x77fc[1384]] = 10 * _maskLayer + gcIndex;
        } else {
          if (50 === _0xe1a7x12[_0x77fc[312]]) {
            if (2 === canCreateDiscussions) {
              return;
            }
            if (3 === _maskLayer && gcIndex < 14) {
              return;
            }
            if ((1 === _maskLayer && 0 === this[_0x77fc[68]][_0x77fc[1086]] || 2 === _maskLayer && 1 === this[_0x77fc[68]][_0x77fc[1086]]) && 3 !== gcIndex) {
              return;
            }
            if ((0 === _maskLayer && 1 === this[_0x77fc[68]][_0x77fc[1086]] || 1 === _maskLayer && 2 === this[_0x77fc[68]][_0x77fc[1086]]) && 11 !== gcIndex) {
              return;
            }
            if (3 === this[_0x77fc[68]][_0x77fc[1086]] && 0 !== _maskLayer) {
              return;
            }
          }
        }
        this[_0x77fc[68]][_0x77fc[1086]] = _maskLayer;
        this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] += _0xe1a7x1e;
        this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] -= _0xe1a7x1f;
        if (_0xe1a7x1f > 0) {
          this[_0x77fc[88]] = false;
          /** @type {number} */
          this[_0x77fc[70]] = 0;
        }
        if (this[_0x77fc[229]]) {
          this[_0x77fc[1007]](_0x77fc[915]);
        }
        break;
      }
    }
    this[_0x77fc[856]](true);
    this[_0x77fc[854]]();
  }
}, GameCore[_0x77fc[170]][_0x77fc[1178]] = function() {
  if (20 === this[_0x77fc[99]]) {
    return;
  }
  let _0xe1a7x4 = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
  this[_0x77fc[231]] = this[_0x77fc[177]][0][_0x77fc[310]](0);
  var configCount = this[_0x77fc[177]][_0x77fc[237]];
  /** @type {number} */
  var currentCount = 0;
  for (; currentCount < configCount; currentCount++) {
    this[_0x77fc[177]][currentCount] = configCount - currentCount > 1 ? this[_0x77fc[177]][currentCount + 1][_0x77fc[310]](0) : _0xe1a7x4[_0x77fc[310]](0);
  }
  this[_0x77fc[99]]++;
  if (this[_0x77fc[229]]) {
    this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].SGARBAGE_ADD, this[_0x77fc[136]]()));
  }
}, GameCore[_0x77fc[170]][_0x77fc[1160]] = function(canCreateDiscussions, mmCoreSplitViewBlock) {
  return this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]], this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] + 1, null) ? (this[_0x77fc[229]] && !this[_0x77fc[88]] && (this[_0x77fc[88]] = true, this[_0x77fc[89]] = mmCoreSplitViewBlock, this[_0x77fc[90]] = mmCoreSplitViewBlock, this[_0x77fc[1007]](_0x77fc[919])), 0) : (this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]]++, this[_0x77fc[265]] = false, canCreateDiscussions ? 1 + this[_0x77fc[1160]](canCreateDiscussions - 1, mmCoreSplitViewBlock) : 
  1);
}, GameCore[_0x77fc[170]][_0x77fc[1073]] = function() {
  if (!this[_0x77fc[95]] && this[_0x77fc[147]][_0x77fc[752]]) {
    /** @type {null} */
    var artistTrack = null;
    if (this[_0x77fc[229]] && (artistTrack = this[_0x77fc[136]](), this[_0x77fc[156]][_0x77fc[385]](new ReplayAction(this[_0x77fc[156]][_0x77fc[721]].HOLD_BLOCK, artistTrack))), this[_0x77fc[88]] = false, null === this[_0x77fc[104]]) {
      this[_0x77fc[104]] = this[_0x77fc[68]];
      this[_0x77fc[1023]](artistTrack);
    } else {
      var _0xe1a7x7 = this[_0x77fc[104]];
      this[_0x77fc[104]] = this[_0x77fc[68]];
      this[_0x77fc[68]] = _0xe1a7x7;
      this[_0x77fc[855]]();
      if (this[_0x77fc[229]]) {
        this[_0x77fc[91]] = artistTrack;
        if (this[_0x77fc[28]] && this[_0x77fc[49]][_0x77fc[941]]) {
          this[_0x77fc[1138]]();
        }
      }
    }
    this[_0x77fc[856]](true);
    this[_0x77fc[95]] = true;
    this[_0x77fc[112]]++;
    this[_0x77fc[238]][_0x77fc[1385]]++;
    if (this[_0x77fc[160]]) {
      this[_0x77fc[160]][_0x77fc[435]](_0x77fc[183])[_0x77fc[322]](this[_0x77fc[238]][_0x77fc[1385]]);
    }
    if (this[_0x77fc[229]]) {
      this[_0x77fc[1136]](artistTrack, false);
      this[_0x77fc[1006]]();
      this[_0x77fc[854]]();
      this[_0x77fc[1007]](_0x77fc[677]);
    } else {
      this[_0x77fc[6]][_0x77fc[1386]]();
    }
  }
}, GameCore[_0x77fc[170]][_0x77fc[1154]] = function(canCreateDiscussions) {
  /** @type {number} */
  var _0xe1a7x7 = 0;
  for (; !this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + canCreateDiscussions, this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]], null);) {
    this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + canCreateDiscussions;
    _0xe1a7x7 = _0xe1a7x7 + 1;
  }
  return _0xe1a7x7 && (this[_0x77fc[856]](true), this[_0x77fc[854]]()), _0xe1a7x7;
}, GameCore[_0x77fc[170]][_0x77fc[856]] = function(canCreateDiscussions) {
  if (canCreateDiscussions || this[_0x77fc[118]] && (!this[_0x77fc[229]] || this[_0x77fc[6]][_0x77fc[118]] && !this[_0x77fc[6]][_0x77fc[114]])) {
    var artistTrack = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]];
    for (; artistTrack <= 20; ++artistTrack) {
      if (this[_0x77fc[1099]](this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]], artistTrack, null)) {
        this[_0x77fc[69]][_0x77fc[1089]][_0x77fc[649]] = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]];
        this[_0x77fc[69]][_0x77fc[1089]][_0x77fc[650]] = artistTrack - 1;
        break;
      }
    }
  }
}, GameCore[_0x77fc[170]][_0x77fc[1387]] = function(canCreateDiscussions) {
  let mmCoreDownloaded = 0;
  let mmCoreNotDownloadable = 0;
  let _0xe1a7x12 = this[_0x77fc[68]][_0x77fc[1086]];
  let indexLookupKey = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]];
  let _0xe1a7x1e = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]];
  if (202 === canCreateDiscussions && (2 !== this[_0x77fc[68]][_0x77fc[1086]] && --_0xe1a7x1e, _0xe1a7x12 = (this[_0x77fc[68]][_0x77fc[1086]] + 2) % 4), _0xe1a7x1e < -2) {
    return false;
  }
  switch(_0xe1a7x12) {
    case 0:
      if (_0xe1a7x1e >= -1) {
        mmCoreDownloaded = (this[_0x77fc[177]][_0xe1a7x1e + 1][indexLookupKey] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 1][indexLookupKey + 2] > 0);
      } else {
        if (-2 === _0xe1a7x1e) {
          mmCoreDownloaded = (this[_0x77fc[231]][indexLookupKey] > 0) + (this[_0x77fc[231]][indexLookupKey + 2] > 0);
        }
      }
      mmCoreNotDownloadable = 17 === _0xe1a7x1e ? 2 : (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey + 2] > 0);
      break;
    case 1:
      if (-1 === indexLookupKey) {
        /** @type {number} */
        mmCoreNotDownloadable = 2;
      }
      if (_0xe1a7x1e >= -1) {
        mmCoreDownloaded = (this[_0x77fc[177]][_0xe1a7x1e + 1][indexLookupKey + 2] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey + 2] > 0);
        if (!mmCoreNotDownloadable) {
          mmCoreNotDownloadable = (this[_0x77fc[177]][_0xe1a7x1e + 1][indexLookupKey] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey] > 0);
        }
      } else {
        if (-2 === _0xe1a7x1e) {
          mmCoreDownloaded = (this[_0x77fc[231]][indexLookupKey + 2] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey + 2] > 0);
          if (!mmCoreNotDownloadable) {
            mmCoreNotDownloadable = (this[_0x77fc[231]][indexLookupKey] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey] > 0);
          }
        }
      }
      break;
    case 2:
      if (_0xe1a7x1e >= -1) {
        mmCoreNotDownloadable = (this[_0x77fc[177]][_0xe1a7x1e + 1][indexLookupKey] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 1][indexLookupKey + 2] > 0);
      } else {
        if (-2 === _0xe1a7x1e) {
          mmCoreNotDownloadable = (this[_0x77fc[231]][indexLookupKey] > 0) + (this[_0x77fc[231]][indexLookupKey + 2] > 0);
        }
      }
      mmCoreDownloaded = 17 === _0xe1a7x1e ? 2 : (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey + 2] > 0);
      break;
    case 3:
      if (8 === indexLookupKey) {
        /** @type {number} */
        mmCoreNotDownloadable = 2;
      }
      if (_0xe1a7x1e >= -1) {
        mmCoreDownloaded = (this[_0x77fc[177]][_0xe1a7x1e + 1][indexLookupKey] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey] > 0);
        if (!mmCoreNotDownloadable) {
          mmCoreNotDownloadable = (this[_0x77fc[177]][_0xe1a7x1e + 1][indexLookupKey + 2] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey + 2] > 0);
        }
      } else {
        if (-2 === _0xe1a7x1e) {
          mmCoreDownloaded = (this[_0x77fc[231]][indexLookupKey] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey] > 0);
          if (!mmCoreNotDownloadable) {
            mmCoreNotDownloadable = (this[_0x77fc[231]][indexLookupKey + 2] > 0) + (this[_0x77fc[177]][_0xe1a7x1e + 3][indexLookupKey + 2] > 0);
          }
        }
      }
  }
  this[_0x77fc[265]] = 2 === mmCoreDownloaded && mmCoreNotDownloadable >= 1;
  this[_0x77fc[266]] = 1 === mmCoreDownloaded && 2 === mmCoreNotDownloadable;
}, GameCore[_0x77fc[170]][_0x77fc[1388]] = function() {
  let artistTrack = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]];
  let GET_AUTH_URL_TIMEOUT = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]];
  this[_0x77fc[265]] = this[_0x77fc[1099]](artistTrack - 1, GET_AUTH_URL_TIMEOUT, null) && this[_0x77fc[1099]](artistTrack + 1, GET_AUTH_URL_TIMEOUT, null) && this[_0x77fc[1099]](artistTrack, GET_AUTH_URL_TIMEOUT - 1, null);
}, GameCore[_0x77fc[170]][_0x77fc[1389]] = function(name) {
  let indexesByNodeName = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]];
  if (!indexesByNodeName[_0x77fc[1390]]) {
    return;
  }
  let _0xe1a7x8 = indexesByNodeName[_0x77fc[1390]][name];
  if (!_0xe1a7x8) {
    return;
  }
  let newIntervals = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]];
  let paramStringWellFormed = this[_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]];
  let componentJsStreams = _0xe1a7x8[this[_0x77fc[68]][_0x77fc[1086]]][0];
  let options = _0xe1a7x8[this[_0x77fc[68]][_0x77fc[1086]]][1];
  let hreviews = this;
  let merge = function(values) {
    let e1 = 0;
    for (let i = 0; i < values[_0x77fc[237]]; i = i + 2) {
      let status = newIntervals + values[i];
      let k = paramStringWellFormed + values[i + 1];
      if (status < 0 || status >= 10 || k < 0 || k >= 20 || hreviews[_0x77fc[177]][k][status] > 0) {
        ++e1;
      }
    }
    return e1;
  };
  if (merge(componentJsStreams) !== componentJsStreams[_0x77fc[237]] / 2) {
    return;
  }
  let headers = 0;
  if (Array[_0x77fc[939]](options[0])) {
    for (let i = 0; i < options[_0x77fc[237]]; i++) {
      if (merge(options[i])) {
        headers++;
      }
    }
  } else {
    headers = merge(options);
  }
  if (this[_0x77fc[265]] = true, 2 == headers) {
  } else {
    if (1 != headers) {
      return;
    }
    this[_0x77fc[266]] = true;
  }
}, GameCore[_0x77fc[170]][_0x77fc[1391]] = function(leftFence) {
  let r = 0;
  let layerPath = -1;
  let reconnectTimeIncrease = 0;
  let _currentModifierKeys = 0;
  let _0xe1a7x1e = false;
  let waitBeforeReconnect = 0;
  let zeroSizeMax = 0;
  let subdoc = [];
  let _0xe1a7x3b = null;
  let _0xe1a7x3c = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]];
  let wsFunction = _0x77fc[46];
  if (this[_0x77fc[269]] = this[_0x77fc[268]], this[_0x77fc[266]] = false, this[_0x77fc[229]] || 3 !== this[_0x77fc[55]] || (zeroSizeMax = this[_0x77fc[1392]]()), this[_0x77fc[147]][_0x77fc[762]]) {
    if (this[_0x77fc[265]] && 1 !== this[_0x77fc[147]][_0x77fc[759]]) {
      if (2 === _0xe1a7x3c[_0x77fc[312]] || 202 === _0xe1a7x3c[_0x77fc[312]]) {
        this[_0x77fc[1387]](_0xe1a7x3c[_0x77fc[312]]);
      } else {
        if (2 === this[_0x77fc[147]][_0x77fc[759]]) {
          this[_0x77fc[265]] = false;
          this[_0x77fc[1389]](_0xe1a7x3c[_0x77fc[312]]);
        } else {
          this[_0x77fc[265]] = false;
        }
      }
    }
    /** @type {number} */
    var prop = 0;
    for (; prop < 10; ++prop) {
      if (0 !== this[_0x77fc[231]][prop]) {
        ++reconnectTimeIncrease;
      } else {
        if (reconnectTimeIncrease > 0) {
          break;
        }
      }
    }
    if (10 === reconnectTimeIncrease) {
      /** @type {!Array} */
      this[_0x77fc[231]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
        let modifierKeyValue = this[_0x77fc[177]][newPath][prop];
        if (9 === modifierKeyValue) {
          break;
        }
        if (0 !== modifierKeyValue) {
          reconnectTimeIncrease++;
          _currentModifierKeys = _currentModifierKeys | modifierKeyValue;
        } else {
          if (waitBeforeReconnect + reconnectTimeIncrease > 0) {
            break;
          }
        }
      }
      if (10 === reconnectTimeIncrease) {
        if (this[_0x77fc[147]][_0x77fc[179]]) {
          if (null === _0xe1a7x3b) {
            _0xe1a7x3b = copyMatrix(this[_0x77fc[177]]);
          }
          subdoc[_0x77fc[308]](newPath);
        }
        if (this[_0x77fc[177]][newPath][_0x77fc[315]](8) >= 0) {
          this[_0x77fc[238]][_0x77fc[1393]]++;
        }
        var thatpos = newPath;
        for (; thatpos > 0; thatpos--) {
          this[_0x77fc[177]][thatpos] = this[_0x77fc[177]][thatpos - 1];
        }
        this[_0x77fc[177]][0] = this[_0x77fc[231]][_0x77fc[310]](0);
        /** @type {!Array} */
        this[_0x77fc[231]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        /** @type {number} */
        reconnectTimeIncrease = 0;
        r++;
        layerPath = newPath;
        if (this[_0x77fc[229]] && 6 === this[_0x77fc[688]](false) && this[_0x77fc[158]][_0x77fc[988]][_0x77fc[1394]] === this[_0x77fc[158]][_0x77fc[1395]]) {
          this[_0x77fc[158]][_0x77fc[1396]](newPath);
        }
        if (16 & _currentModifierKeys) {
          _0xe1a7x1e = true;
        }
      }
      waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
    }
    if (r > 0) {
      this[_0x77fc[238]][_0x77fc[1217]] += r;
      if (this[_0x77fc[160]]) {
        this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1397])[_0x77fc[322]](this[_0x77fc[238]][_0x77fc[1217]]);
      }
      /** @type {number} */
      var preCount = 0;
      /** @type {null} */
      var _maskLayer = null;
      switch(r) {
        case 1:
          this[_0x77fc[238]][_0x77fc[1398]]++;
          preCount = this[_0x77fc[116]][1];
          if (this[_0x77fc[265]]) {
            if (this[_0x77fc[26]]) {
              wsFunction = _0x77fc[1399];
            }
            _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1400]];
            preCount = this[_0x77fc[116]][7];
            if (this[_0x77fc[268]]) {
              this[_0x77fc[238]][_0x77fc[1401]] += 1;
              preCount = preCount + this[_0x77fc[116]][10];
            } else {
              this[_0x77fc[268]] = true;
            }
          } else {
            if (this[_0x77fc[266]]) {
              _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1402]];
              if (this[_0x77fc[268]]) {
                this[_0x77fc[238]][_0x77fc[1401]] += 1;
              } else {
                this[_0x77fc[268]] = true;
              }
              preCount = this[_0x77fc[116]][8];
              if (this[_0x77fc[26]]) {
                wsFunction = _0x77fc[1403];
              }
            } else {
              this[_0x77fc[268]] = false;
              _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1404]];
            }
          }
          break;
        case 2:
          this[_0x77fc[238]][_0x77fc[1405]]++;
          preCount = this[_0x77fc[116]][2];
          if (this[_0x77fc[265]] || this[_0x77fc[266]]) {
            this[_0x77fc[238]][_0x77fc[1406]]++;
            preCount = this[_0x77fc[116]][5];
            _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1407]];
            if (this[_0x77fc[268]]) {
              this[_0x77fc[238]][_0x77fc[1401]] += 1;
              preCount = preCount + this[_0x77fc[116]][10];
            } else {
              this[_0x77fc[268]] = true;
            }
            if (this[_0x77fc[26]]) {
              wsFunction = _0x77fc[1408];
            }
          } else {
            this[_0x77fc[268]] = false;
            _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1409]];
          }
          break;
        case 3:
          this[_0x77fc[238]][_0x77fc[1410]]++;
          preCount = this[_0x77fc[116]][3];
          if (!this[_0x77fc[265]] && !this[_0x77fc[266]] || 2 !== _0xe1a7x3c[_0x77fc[312]] && 50 !== _0xe1a7x3c[_0x77fc[312]]) {
            this[_0x77fc[268]] = false;
            _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1411]];
          } else {
            preCount = this[_0x77fc[116]][6];
            _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1412]];
            if (this[_0x77fc[268]]) {
              this[_0x77fc[238]][_0x77fc[1401]] += 1;
              preCount = preCount + this[_0x77fc[116]][10];
            } else {
              this[_0x77fc[268]] = true;
            }
            if (this[_0x77fc[26]]) {
              wsFunction = _0x77fc[1413];
            }
          }
          break;
        case 4:
          this[_0x77fc[238]][_0x77fc[1414]]++;
          _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1415]];
          preCount = this[_0x77fc[116]][4];
          if (this[_0x77fc[268]]) {
            this[_0x77fc[238]][_0x77fc[1401]] += 1;
            preCount = preCount + this[_0x77fc[116]][10];
          } else {
            this[_0x77fc[268]] = true;
          }
          if (this[_0x77fc[26]]) {
            wsFunction = _0x77fc[1416];
          }
          break;
        default:
          this[_0x77fc[238]][_0x77fc[1414]]++;
          _maskLayer = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1417]];
          preCount = this[_0x77fc[116]][6];
          if (this[_0x77fc[268]]) {
            this[_0x77fc[238]][_0x77fc[1401]] += 1;
            preCount = preCount + this[_0x77fc[116]][10];
          } else {
            this[_0x77fc[268]] = true;
          }
          if (this[_0x77fc[26]]) {
            wsFunction = _0x77fc[1418] + r + _0x77fc[1352];
          }
      }
      if (this[_0x77fc[147]][_0x77fc[759]] && this[_0x77fc[265]]) {
        if (this[_0x77fc[302]] && this[_0x77fc[302]][_0x77fc[237]] && -1 !== this[_0x77fc[302]][_0x77fc[315]](_0xe1a7x3c[_0x77fc[333]])) {
          /** @type {number} */
          preCount = 0;
          if (this[_0x77fc[26]]) {
            wsFunction = _0x77fc[1419] + _0xe1a7x3c[_0x77fc[333]] + _0x77fc[1420];
          }
        } else {
          if (2 !== _0xe1a7x3c[_0x77fc[312]]) {
            /** @type {number} */
            _maskLayer = 127;
            preCount = 1 === this[_0x77fc[147]][_0x77fc[759]] ? r >= 4 ? this[_0x77fc[116]][6] + 1 : 3 === r ? this[_0x77fc[116]][6] : 2 === r ? this[_0x77fc[116]][5] : this[_0x77fc[116]][7] : this[_0x77fc[266]] ? Math[_0x77fc[1148]](2, r) : Math[_0x77fc[1148]](5, 2 * r);
            if (this[_0x77fc[269]]) {
              preCount = preCount + this[_0x77fc[116]][10];
            }
            this[_0x77fc[268]] = true;
            if (this[_0x77fc[26]] && this[_0x77fc[229]]) {
              wsFunction = _0xe1a7x3c[_0x77fc[333]] + _0x77fc[1421] + (r <= 4 ? this[_0x77fc[296]][r - 1] : this[_0x77fc[296]][4]);
              if (this[_0x77fc[266]]) {
                wsFunction = wsFunction + _0x77fc[1422];
              }
              if (this[_0x77fc[269]]) {
                wsFunction = _0x77fc[1423] + wsFunction;
              }
            }
          }
        }
      }
      if (_maskLayer >= 8 && _maskLayer <= 11) {
        this[_0x77fc[238]][_0x77fc[1424]]--;
        this[_0x77fc[238]][_0x77fc[1425]]++;
      }
      this[_0x77fc[1105]](_maskLayer);
      let UCR_PARTICIPATION_RECEIVED = _maskLayer;
      if (0 === waitBeforeReconnect) {
        this[_0x77fc[238]][_0x77fc[1426]]++;
        preCount = this[_0x77fc[116]][9];
        UCR_PARTICIPATION_RECEIVED = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1427]];
        if (this[_0x77fc[26]]) {
          wsFunction = _0x77fc[1428];
        }
        this[_0x77fc[1105]](UCR_PARTICIPATION_RECEIVED);
        if (this[_0x77fc[229]] && 6 === this[_0x77fc[688]](false) && this[_0x77fc[158]][_0x77fc[988]][_0x77fc[1394]] === this[_0x77fc[158]][_0x77fc[1429]]) {
          this[_0x77fc[1122]](leftFence);
        }
      }
      if (this[_0x77fc[229]] && 6 === this[_0x77fc[688]](false) && this[_0x77fc[158]][_0x77fc[988]][_0x77fc[1394]] === this[_0x77fc[158]][_0x77fc[1395]] && 0 === this[_0x77fc[158]][_0x77fc[1430]][_0x77fc[237]]) {
        this[_0x77fc[1122]](leftFence);
      }
      this[_0x77fc[124]] = this[_0x77fc[229]] && this[_0x77fc[155]][_0x77fc[437]] && (this[_0x77fc[124]] && this[_0x77fc[123]] >= 0 || this[_0x77fc[1431]](layerPath));
      this[_0x77fc[123]]++;
      if (this[_0x77fc[123]] > 0) {
        this[_0x77fc[1105]](this[_0x77fc[157]][_0x77fc[1104]].COMBO, this[_0x77fc[123]]);
      }
      if (this[_0x77fc[123]] > this[_0x77fc[238]][_0x77fc[945]]) {
        this[_0x77fc[238]][_0x77fc[945]] = this[_0x77fc[123]];
      }
      var files = this[_0x77fc[1141]](this[_0x77fc[123]]);
      this[_0x77fc[238]][_0x77fc[1432]] += preCount + files;
      let _maskLayerSimulate = {
        type : UCR_PARTICIPATION_RECEIVED,
        b2b : this[_0x77fc[269]],
        cmb : this[_0x77fc[123]]
      };
      if ((preCount > 0 || files > 0) && this[_0x77fc[160]] && this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1433])[_0x77fc[322]](this[_0x77fc[238]][_0x77fc[1432]]), this[_0x77fc[229]]) {
        let _0xe1a7x4 = [UCR_PARTICIPATION_RECEIVED, _maskLayer, this[_0x77fc[269]] && this[_0x77fc[268]], this[_0x77fc[123]]];
        this[_0x77fc[1007]](this[_0x77fc[48]][_0x77fc[1434]](..._0xe1a7x4), 1);
        if (this[_0x77fc[28]]) {
          this[_0x77fc[1007]](this[_0x77fc[49]][_0x77fc[1434]](..._0xe1a7x4), 2);
        }
        if (this[_0x77fc[26]] && wsFunction) {
          this[_0x77fc[155]][_0x77fc[1116]](_0x77fc[46], wsFunction);
        }
      }
      if (this[_0x77fc[688]](false)) {
        if (this[_0x77fc[238]][_0x77fc[1144]] = this[_0x77fc[238]][_0x77fc[1432]], 1 === this[_0x77fc[688]](false)) {
          if (this[_0x77fc[126]] >= r) {
            this[_0x77fc[126]] -= r;
          } else {
            /** @type {number} */
            this[_0x77fc[126]] = 0;
          }
          if (this[_0x77fc[229]]) {
            this[_0x77fc[22]][_0x77fc[419]] = this[_0x77fc[126]];
          }
        } else {
          if (3 === this[_0x77fc[688]](false)) {
            let duedate = this[_0x77fc[1392]]();
            if (this[_0x77fc[229]]) {
              if (this[_0x77fc[63]] > duedate) {
                var timeSubmittedDiff = this[_0x77fc[63]] - duedate;
                this[_0x77fc[63]] = duedate;
                this[_0x77fc[126]] -= timeSubmittedDiff;
                if (this[_0x77fc[126]] > this[_0x77fc[63]] && this[_0x77fc[63]] < this[_0x77fc[65]]) {
                  this[_0x77fc[1033]](1);
                  this[_0x77fc[63]] += 1;
                }
              }
              this[_0x77fc[981]](this[_0x77fc[126]]);
            } else {
              let _0xe1a7x7 = zeroSizeMax - duedate;
              this[_0x77fc[126]] -= _0xe1a7x7;
            }
          } else {
            if (7 === this[_0x77fc[688]](false)) {
              if (this[_0x77fc[229]] && _maskLayer !== this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1407]]) {
                this[_0x77fc[153]][_0x77fc[1220]](i18n[_0x77fc[1435]], i18n[_0x77fc[1436]]);
                this[_0x77fc[1122]]();
              }
              if (this[_0x77fc[229]]) {
                this[_0x77fc[22]][_0x77fc[419]] = this[_0x77fc[238]][_0x77fc[1406]];
              }
              if (20 === this[_0x77fc[238]][_0x77fc[1406]]) {
                this[_0x77fc[238]][_0x77fc[1437]] = Math[_0x77fc[1196]](1E3 * this[_0x77fc[72]]);
              }
            } else {
              if (this[_0x77fc[229]] && 8 === this[_0x77fc[688]](false)) {
                if (UCR_PARTICIPATION_RECEIVED === this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1427]]) {
                  this[_0x77fc[238]][_0x77fc[1438]] = this[_0x77fc[72]];
                  this[_0x77fc[22]][_0x77fc[419]] = this[_0x77fc[238]][_0x77fc[1426]];
                  if (this[_0x77fc[229]]) {
                    this[_0x77fc[125]] = {
                      blocks : 0,
                      lines : 0
                    };
                  }
                } else {
                  if (this[_0x77fc[229]]) {
                    this[_0x77fc[125]][_0x77fc[1087]]++;
                    this[_0x77fc[125]][_0x77fc[1217]] += r;
                    this[_0x77fc[1216]]();
                  }
                }
              } else {
                if (this[_0x77fc[229]] && 9 === this[_0x77fc[688]](false)) {
                  let y = this[_0x77fc[238]][_0x77fc[1217]] - r;
                  for (let ky = 1; ky <= r; ++ky) {
                    this[_0x77fc[159]][_0x77fc[477]](this[_0x77fc[159]].LINE, y + ky);
                  }
                  this[_0x77fc[159]][_0x77fc[477]](this[_0x77fc[159]].LINECLEAR, r);
                  if (preCount > 0) {
                    this[_0x77fc[1143]](preCount, leftFence);
                  }
                  if (files > 0) {
                    this[_0x77fc[1143]](files, leftFence);
                  }
                }
              }
            }
          }
        }
        if (!this[_0x77fc[126]] && this[_0x77fc[229]]) {
          this[_0x77fc[1122]]();
        }
      } else {
        if (this[_0x77fc[229]]) {
          if (this[_0x77fc[124]] && files && this[_0x77fc[155]][_0x77fc[437]]) {
            this[_0x77fc[153]][_0x77fc[1220]](i18n[_0x77fc[1439]], i18n[_0x77fc[1440]]);
            for (; files > 0;) {
              this[_0x77fc[1033]](1);
              --files;
            }
          }
          let lastviewmatrix = null;
          let selectedArchive = null;
          if (preCount > 0) {
            lastviewmatrix = this[_0x77fc[1143]](preCount, leftFence);
          }
          if (files > 0) {
            selectedArchive = this[_0x77fc[1143]](files, leftFence);
          }
          if (lastviewmatrix || selectedArchive) {
            this[_0x77fc[155]][_0x77fc[1441]](lastviewmatrix, selectedArchive, _maskLayerSimulate);
          }
        }
      }
      if (this[_0x77fc[229]]) {
        if (_0xe1a7x1e) {
          this[_0x77fc[303]][_0x77fc[927]]();
        }
        if (this[_0x77fc[147]][_0x77fc[179]] && !this[_0x77fc[114]]) {
          this[_0x77fc[50]] = false;
          this[_0x77fc[114]] = true;
          this[_0x77fc[142]] = new LineClearAnimator(_0xe1a7x3b, subdoc, this);
        }
      } else {
        this[_0x77fc[6]][_0x77fc[1442]](preCount, files, _maskLayerSimulate);
      }
    } else {
      /** @type {number} */
      this[_0x77fc[123]] = -1;
      let artistTrack = null;
      if (this[_0x77fc[265]] ? (artistTrack = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1443]], this[_0x77fc[26]] && this[_0x77fc[229]] && this[_0x77fc[155]][_0x77fc[1116]](_0x77fc[46], _0xe1a7x3c[_0x77fc[333]] + _0x77fc[1420])) : this[_0x77fc[266]] && (artistTrack = this[_0x77fc[157]][_0x77fc[1104]][_0x77fc[1444]], this[_0x77fc[26]] && this[_0x77fc[229]] && this[_0x77fc[155]][_0x77fc[1116]](_0x77fc[46], _0xe1a7x3c[_0x77fc[333]] + _0x77fc[1445])), artistTrack && (this[_0x77fc[1105]](artistTrack), 
      this[_0x77fc[229]])) {
        let _0xe1a7x7 = [artistTrack, artistTrack, false, -1];
        this[_0x77fc[1007]](this[_0x77fc[48]][_0x77fc[1434]](..._0xe1a7x7), 1);
        if (this[_0x77fc[28]]) {
          this[_0x77fc[1007]](this[_0x77fc[49]][_0x77fc[1434]](..._0xe1a7x7), 2);
        }
      }
      if (this[_0x77fc[229]] && 3 === this[_0x77fc[688]](false)) {
        var value = this[_0x77fc[64]] - this[_0x77fc[63]];
        if (value > 0) {
          var i = Math[_0x77fc[1148]](value, this[_0x77fc[126]] - this[_0x77fc[63]]);
          /** @type {number} */
          thatpos = 0;
          for (; thatpos < i; thatpos++) {
            this[_0x77fc[1033]](1);
          }
          this[_0x77fc[63]] += i;
        }
      } else {
        if (this[_0x77fc[229]] && 8 === this[_0x77fc[688]](false)) {
          this[_0x77fc[125]][_0x77fc[1087]]++;
          this[_0x77fc[1216]]();
        }
      }
    }
  } else {
    /** @type {number} */
    this[_0x77fc[123]] = -1;
  }
}, GameCore[_0x77fc[170]][_0x77fc[1392]] = function(i) {
  i = i || 20;
  /** @type {number} */
  var interestingPoint = 0;
  /** @type {number} */
  var whichFriend = 0;
  for (; whichFriend < i; whichFriend++) {
    if (8 !== this[_0x77fc[177]][19 - whichFriend][0] && 8 !== this[_0x77fc[177]][19 - whichFriend][1]) {
      interestingPoint = whichFriend;
      break;
    }
  }
  return interestingPoint;
}, GameCore[_0x77fc[170]][_0x77fc[1431]] = function(boardManager) {
  /** @type {number} */
  var _0xe1a7x7 = 0;
  var IS_HANDLED = boardManager;
  for (; IS_HANDLED >= 0; IS_HANDLED--) {
    /** @type {null} */
    var mmCoreNotDownloaded = null;
    var isOnline = false;
    /** @type {number} */
    var id = 0;
    for (; id < 10; id++) {
      if (9 !== this[_0x77fc[177]][IS_HANDLED][id]) {
        if (0 === this[_0x77fc[177]][IS_HANDLED][id]) {
          if (isOnline) {
            /** @type {number} */
            mmCoreNotDownloaded = -1;
            isOnline = false;
            break;
          }
          if (null === mmCoreNotDownloaded) {
            /** @type {number} */
            mmCoreNotDownloaded = 1;
          } else {
            if (++mmCoreNotDownloaded > 4) {
              isOnline = false;
              break;
            }
          }
        } else {
          if (4 === mmCoreNotDownloaded) {
            isOnline = true;
          } else {
            if (mmCoreNotDownloaded) {
              /** @type {number} */
              mmCoreNotDownloaded = -1;
              isOnline = false;
              break;
            }
          }
        }
      }
    }
    if (4 === mmCoreNotDownloaded || isOnline) {
      if (++_0xe1a7x7 >= 3) {
        return true;
      }
    } else {
      if (_0xe1a7x7 = 0, IS_HANDLED <= 3) {
        return false;
      }
    }
  }
  return false;
}, GameCore[_0x77fc[170]][_0x77fc[1107]] = function(imageModelSection, afterIdx, mmCoreSplitViewBlock) {
  ++this[_0x77fc[108]];
  if (2 === this[_0x77fc[68]][_0x77fc[312]]) {
    this[_0x77fc[238]][_0x77fc[1424]]++;
    this[_0x77fc[238]][_0x77fc[1446]]++;
  }
  if (this[_0x77fc[160]]) {
    this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1447])[_0x77fc[322]](this[_0x77fc[108]]);
  }
  if (this[_0x77fc[160]]) {
    this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1449])[_0x77fc[322]](this[_0x77fc[1448]]());
  }
  if (this[_0x77fc[229]]) {
    this[_0x77fc[1221]]();
    mmCoreSplitViewBlock = mmCoreSplitViewBlock || this[_0x77fc[136]]();
  }
  let tmpTimeVal = 0;
  let selTimeVal = 0;
  let _0xe1a7x1e = false;
  let MULT3 = this[_0x77fc[232]][this[_0x77fc[68]][_0x77fc[322]]][_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[312]]];
  let ld = MULT3[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[1086]]][_0x77fc[237]];
  let s1 = 0;
  if (this[_0x77fc[265]] && 1 === this[_0x77fc[147]][_0x77fc[759]]) {
    this[_0x77fc[1388]]();
  }
  /** @type {number} */
  var i = 0;
  for (; i < ld; i++) {
    /** @type {number} */
    var id = 0;
    for (; id < ld; id++) {
      let _0xe1a7x8 = MULT3[_0x77fc[1087]][this[_0x77fc[68]][_0x77fc[1086]]][i][id];
      if (_0xe1a7x8 > 0) {
        ++selTimeVal;
        s1 = _0xe1a7x8 === this[_0x77fc[68]][_0x77fc[837]] ? 16 : 0;
        if (afterIdx + i >= 0 && imageModelSection + id >= 0) {
          this[_0x77fc[177]][afterIdx + i][imageModelSection + id] = MULT3[_0x77fc[467]] ^ s1;
          if (afterIdx + i === 19 - this[_0x77fc[99]]) {
            if (this[_0x77fc[229]] && 1 === this[_0x77fc[155]][_0x77fc[423]] && !this[_0x77fc[55]]) {
              this[_0x77fc[155]][_0x77fc[1140]]();
              /** @type {number} */
              this[_0x77fc[113]] = 1;
              _0xe1a7x1e = true;
            } else {
              if (!this[_0x77fc[229]]) {
                this[_0x77fc[1360]] = false;
              }
            }
          }
        } else {
          tmpTimeVal++;
          if (afterIdx + i === -1 && 0 === this[_0x77fc[231]][imageModelSection + id]) {
            this[_0x77fc[231]][imageModelSection + id] = MULT3[_0x77fc[467]] ^ s1;
          }
        }
      }
    }
  }
  if (tmpTimeVal === selTimeVal && this.GameOver(), this[_0x77fc[50]]) {
    this[_0x77fc[95]] = false;
    this[_0x77fc[1391]](mmCoreSplitViewBlock);
    for (; this[_0x77fc[100]];) {
      this[_0x77fc[1178]]();
      this[_0x77fc[100]]--;
    }
    if (!(-1 !== this[_0x77fc[123]] && 0 === this[_0x77fc[147]][_0x77fc[757]])) {
      this[_0x77fc[1174]](mmCoreSplitViewBlock);
    }
    this[_0x77fc[1023]](mmCoreSplitViewBlock);
    if (_0xe1a7x1e) {
      this.GameOver();
    }
  } else {
    if (!this[_0x77fc[229]]) {
      this[_0x77fc[95]] = false;
      this[_0x77fc[1391]]();
      this[_0x77fc[1023]]();
      this[_0x77fc[6]][_0x77fc[1450]]();
    }
  }
  if (this[_0x77fc[238]][_0x77fc[1446]] > 0 && this[_0x77fc[160]]) {
    this[_0x77fc[160]][_0x77fc[435]](_0x77fc[1452])[_0x77fc[322]](this[_0x77fc[1451]]());
  }
}, GameCore[_0x77fc[170]][_0x77fc[1131]] = function(url) {
  let Sharetor = [];
  /** @type {number} */
  var _0xe1a7x8 = 0;
  for (; _0xe1a7x8 < this[_0x77fc[236]]; _0xe1a7x8++) {
    Sharetor[_0x77fc[308]](this[_0x77fc[1134]](url));
  }
  return Sharetor;
}, GameCore[_0x77fc[170]][_0x77fc[1022]] = function() {
  if (this[_0x77fc[229]]) {
    /** @type {!Array} */
    this[_0x77fc[235]] = [];
  } else {
    this[_0x77fc[235]][_0x77fc[928]](0, this[_0x77fc[236]]);
  }
  /** @type {number} */
  var _0xe1a7x4 = 0;
  for (; _0xe1a7x4 < this[_0x77fc[236]]; _0xe1a7x4++) {
    this[_0x77fc[235]][_0x77fc[308]](this[_0x77fc[1134]]());
  }
  if (!this[_0x77fc[229]]) {
    if (1 === this[_0x77fc[55]]) {
      if (this[_0x77fc[235]][0][_0x77fc[312]] >= 5 && 0 === this[_0x77fc[235]][0][_0x77fc[322]]) {
        var _0xe1a7x7 = this[_0x77fc[235]][0];
        if (this[_0x77fc[235]][1][_0x77fc[312]] < 5) {
          this[_0x77fc[235]][0] = this[_0x77fc[235]][1];
          this[_0x77fc[235]][1] = _0xe1a7x7;
        } else {
          this[_0x77fc[235]][0] = this[_0x77fc[235]][2];
          this[_0x77fc[235]][2] = _0xe1a7x7;
        }
      }
    } else {
      if (this[_0x77fc[972]][_0x77fc[944]][_0x77fc[6]] < 3.3 && 2 !== this[_0x77fc[55]] && this[_0x77fc[235]][_0x77fc[237]] >= 3 && this[_0x77fc[235]][0][_0x77fc[312]] >= 5 && this[_0x77fc[235]][1][_0x77fc[312]] >= 5) {
        _0xe1a7x7 = this[_0x77fc[235]][0];
        this[_0x77fc[235]][0] = this[_0x77fc[235]][2];
        this[_0x77fc[235]][2] = _0xe1a7x7;
      }
    }
  }
}, GameCore[_0x77fc[170]][_0x77fc[1171]] = function() {
  var _0xe1a7x4 = this[_0x77fc[72]];
  return this[_0x77fc[229]] || (_0xe1a7x4 = _0xe1a7x4 / 1E3), Math[_0x77fc[1196]](100 * this[_0x77fc[238]][_0x77fc[1144]] / (_0xe1a7x4 / 60)) / 100;
}, GameCore[_0x77fc[170]][_0x77fc[1448]] = function() {
  /** @type {number} */
  var number = 0;
  return this[_0x77fc[108]] && (number = (this[_0x77fc[112]] + this[_0x77fc[108]]) / this[_0x77fc[108]]), Math[_0x77fc[1196]](100 * number) / 100;
}, GameCore[_0x77fc[170]][_0x77fc[1172]] = function() {
  var lowestDelta = this[_0x77fc[72]];
  return this[_0x77fc[229]] || (lowestDelta = lowestDelta / 1E3), Math[_0x77fc[1196]](1E4 * (this[_0x77fc[238]][_0x77fc[1393]] + this[_0x77fc[238]][_0x77fc[1144]]) / lowestDelta) / 100;
}, GameCore[_0x77fc[170]][_0x77fc[1451]] = function() {
  return Math[_0x77fc[1196]](this[_0x77fc[238]][_0x77fc[1424]] / this[_0x77fc[238]][_0x77fc[1446]] * 100) / 100;
}, GameCore[_0x77fc[170]][_0x77fc[994]] = function() {
  var addressCount = this[_0x77fc[177]][_0x77fc[237]];
  /** @type {number} */
  var IS_HANDLED = 0;
  for (; IS_HANDLED < addressCount; IS_HANDLED++) {
    var ld = this[_0x77fc[177]][IS_HANDLED][_0x77fc[237]];
    /** @type {number} */
    var id = 0;
    for (; id < ld; id++) {
      /** @type {number} */
      this[_0x77fc[177]][IS_HANDLED][id] = 0;
    }
  }
}, GameCore[_0x77fc[170]][_0x77fc[974]] = function() {
  if (this[_0x77fc[229]] && this[_0x77fc[114]]) {
    return;
  }
  if (!this[_0x77fc[229]] && (this[_0x77fc[6]][_0x77fc[114]] || !this[_0x77fc[6]][_0x77fc[680]])) {
    return;
  }
  this[_0x77fc[6]][_0x77fc[983]]();
  let keyOffset = 0;
  /** @type {number} */
  var cur = 0;
  for (; cur < this[_0x77fc[147]][_0x77fc[751]]; cur++) {
    if (cur >= this[_0x77fc[235]][_0x77fc[237]]) {
      if (9 != this[_0x77fc[55]]) {
        break;
      }
      if (!this[_0x77fc[159]][_0x77fc[1453]]) {
        break;
      }
      this[_0x77fc[159]][_0x77fc[1454]]();
    }
    var res = this[_0x77fc[235]][cur];
    var coupling = this[_0x77fc[232]][res[_0x77fc[322]]][_0x77fc[1088]];
    var values = coupling[_0x77fc[1087]][res[_0x77fc[312]]][_0x77fc[1087]][0];
    var artistTrack = coupling[_0x77fc[1087]][res[_0x77fc[312]]][_0x77fc[467]];
    var change = coupling[_0x77fc[1455]] ? [0, 3] : coupling[_0x77fc[1087]][res[_0x77fc[312]]][_0x77fc[1456]];
    var notes_mac = values[_0x77fc[237]];
    var curElem = coupling[_0x77fc[1087]][res[_0x77fc[312]]][_0x77fc[1457]] ? coupling[_0x77fc[1087]][res[_0x77fc[312]]][_0x77fc[1457]] : [0, notes_mac - 1];
    var j = change[0];
    for (; j <= change[1]; j++) {
      var i = curElem[0];
      for (; i <= curElem[1]; i++) {
        if (values[j][i] > 0) {
          this[_0x77fc[6]][_0x77fc[1255]](i - curElem[0], j - change[0] + keyOffset, artistTrack, this[_0x77fc[6]].QUEUE);
          if (res[_0x77fc[837]] && values[j][i] === res[_0x77fc[837]]) {
            this[_0x77fc[6]][_0x77fc[1258]](i - curElem[0], j - change[0] + keyOffset, this[_0x77fc[6]].QUEUE);
          }
        }
      }
    }
    if (coupling[_0x77fc[1455]]) {
      keyOffset = keyOffset + 3;
    } else {
      keyOffset = keyOffset + (change[1] - change[0] + 2);
    }
  }
}, GameCore[_0x77fc[170]][_0x77fc[1006]] = function() {
  if ((!this[_0x77fc[229]] || !this[_0x77fc[114]]) && (this[_0x77fc[229]] || !this[_0x77fc[6]][_0x77fc[114]] && this[_0x77fc[6]][_0x77fc[680]]) && (this[_0x77fc[6]][_0x77fc[984]](), null !== this[_0x77fc[104]])) {
    var _0xe1a7x4 = this[_0x77fc[232]][this[_0x77fc[104]][_0x77fc[322]]][_0x77fc[1088]];
    var nextIdLookup = _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[104]][_0x77fc[312]]][_0x77fc[1087]][0];
    var artistTrack = _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[104]][_0x77fc[312]]][_0x77fc[467]];
    var functionDesc = _0xe1a7x4[_0x77fc[1455]] ? [0, 3] : _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[104]][_0x77fc[312]]][_0x77fc[1456]];
    var currentIndex = nextIdLookup[_0x77fc[237]];
    var slots = _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[104]][_0x77fc[312]]][_0x77fc[1457]] ? _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[104]][_0x77fc[312]]][_0x77fc[1457]] : [0, currentIndex - 1];
    var xValue = functionDesc[0];
    for (; xValue <= functionDesc[1]; xValue++) {
      var slot = slots[0];
      for (; slot <= slots[1]; slot++) {
        if (nextIdLookup[xValue][slot] > 0) {
          this[_0x77fc[6]][_0x77fc[1255]](slot - slots[0], xValue - functionDesc[0], artistTrack, this[_0x77fc[6]].HOLD);
          if (this[_0x77fc[104]][_0x77fc[837]] && nextIdLookup[xValue][slot] === this[_0x77fc[104]][_0x77fc[837]]) {
            this[_0x77fc[6]][_0x77fc[1258]](slot - slots[0], xValue - functionDesc[0], this[_0x77fc[6]].HOLD);
          }
        }
      }
    }
  }
}, GameCore[_0x77fc[170]][_0x77fc[1028]] = function() {
  let drivers = Object[_0x77fc[1207]](this[_0x77fc[238]]);
  for (let drvName of drivers) {
    /** @type {number} */
    this[_0x77fc[238]][drvName] = 0;
  }
}, GameCore[_0x77fc[170]][_0x77fc[1192]] = function(canCreateDiscussions) {
  return canCreateDiscussions <= 0 ? [Number[_0x77fc[1458]], 0] : canCreateDiscussions <= 18 ? [(18 - 1 * (canCreateDiscussions - 1)) / 20, 0] : canCreateDiscussions <= 24 ? [(.9 - .1 * (canCreateDiscussions - 19)) / 20, 0] : 25 === canCreateDiscussions ? [.03, 1] : 26 === canCreateDiscussions ? [.02, 1] : 27 === canCreateDiscussions ? [.1 / 3, 2] : [0, 20];
}, _0x77fc[1336] != typeof module && null != module && (module[_0x77fc[1459]] = GameCore), Bag[_0x77fc[170]][_0x77fc[313]] = function() {
  let artistTrack = Math[_0x77fc[314]](this.RNG() * this[_0x77fc[309]][_0x77fc[237]]);
  let type = this[_0x77fc[309]][_0x77fc[928]](artistTrack, 1)[0];
  return 0 === this[_0x77fc[309]][_0x77fc[237]] && (this[_0x77fc[309]] = this[_0x77fc[307]][_0x77fc[310]](0)), new Block(type);
}, Classic[_0x77fc[170]][_0x77fc[313]] = function() {
  let type = Math[_0x77fc[314]](this.RNG() * this[_0x77fc[311]]);
  return new Block(type);
}, OneBlock[_0x77fc[170]][_0x77fc[313]] = function() {
  var type = this[_0x77fc[309]][0];
  return this[_0x77fc[309]][_0x77fc[237]] > 1 && (type = this[_0x77fc[309]][this[_0x77fc[316]]++], this[_0x77fc[316]] %= this[_0x77fc[309]][_0x77fc[237]]), new Block(type);
}, C2Sim[_0x77fc[170]][_0x77fc[1460]] = function(topMaxHeight) {
  let topNaturalHeight = Math[_0x77fc[314]](this.RNG() * (this[_0x77fc[311]] - 1));
  return topMaxHeight >= 0 && topNaturalHeight >= topMaxHeight && ++topNaturalHeight, topNaturalHeight === this[_0x77fc[311]] && (topNaturalHeight = 0), topNaturalHeight;
}, C2Sim[_0x77fc[170]][_0x77fc[313]] = function() {
  let type = 0;
  if (this[_0x77fc[317]][0] < 0) {
    type = Math[_0x77fc[314]](this.RNG() * this[_0x77fc[311]]);
  } else {
    if (this[_0x77fc[317]][0] === this[_0x77fc[317]][1] || this[_0x77fc[317]][1] < 0) {
      type = this.RNG() <= .028105 ? this[_0x77fc[317]][0] : this[_0x77fc[1460]](this[_0x77fc[317]][0]);
    } else {
      let _0xe1a7x7 = this.RNG();
      if (_0xe1a7x7 <= .027055) {
        type = this[_0x77fc[317]][0];
      } else {
        if (_0xe1a7x7 >= .882639) {
          type = this[_0x77fc[317]][1];
        } else {
          do {
            type = this[_0x77fc[1460]](this[_0x77fc[317]][0]);
          } while (type === this[_0x77fc[317]][1]);
        }
      }
    }
  }
  return this[_0x77fc[317]][1] = this[_0x77fc[317]][0], this[_0x77fc[317]][0] = type, new Block(type);
}, Repeated[_0x77fc[170]][_0x77fc[319]] = function(canCreateDiscussions) {
  this[_0x77fc[174]] = this[_0x77fc[230]][_0x77fc[313]]();
  this[_0x77fc[318]] = 1 + Math[_0x77fc[314]](this[_0x77fc[230]].RNG() * this[_0x77fc[311]]);
}, Repeated[_0x77fc[170]][_0x77fc[313]] = function(canCreateDiscussions) {
  return 0 === this[_0x77fc[318]] && this[_0x77fc[319]](), this[_0x77fc[318]]--, this[_0x77fc[174]];
}, BsBlock[_0x77fc[170]][_0x77fc[313]] = function() {
  let _0xe1a7x4 = this[_0x77fc[230]][_0x77fc[313]]();
  return this[_0x77fc[318]]++, this[_0x77fc[318]] >= 21 && this[_0x77fc[230]].RNG() < .1 && (_0xe1a7x4[_0x77fc[322]] = this[_0x77fc[320]][Math[_0x77fc[314]](this[_0x77fc[230]].RNG() * this[_0x77fc[320]][_0x77fc[237]])], this[_0x77fc[318]] = 0, 2 === _0xe1a7x4[_0x77fc[322]] && (_0xe1a7x4[_0x77fc[312]] = Math[_0x77fc[314]](7 * this[_0x77fc[230]].RNG())), 4 === _0xe1a7x4[_0x77fc[322]] && (_0xe1a7x4[_0x77fc[312]] = Math[_0x77fc[314]](18 * this[_0x77fc[230]].RNG()))), _0xe1a7x4;
}, BigBlockRand[_0x77fc[170]][_0x77fc[313]] = function() {
  let _0xe1a7x4 = this[_0x77fc[230]][_0x77fc[313]]();
  return this[_0x77fc[318]]++, this[_0x77fc[230]].RNG() < this[_0x77fc[318]] / this[_0x77fc[321]] && (_0xe1a7x4[_0x77fc[322]] = 2, _0xe1a7x4[_0x77fc[312]] = Math[_0x77fc[314]](7 * this[_0x77fc[230]].RNG())), _0xe1a7x4;
}, ConstBlock[_0x77fc[170]][_0x77fc[313]] = function() {
  let _0xe1a7x4 = new Block(this[_0x77fc[312]]);
  return _0xe1a7x4[_0x77fc[322]] = 0 === this[_0x77fc[322]] ? -1 : this[_0x77fc[322]], _0xe1a7x4;
}, Live[_0x77fc[170]][_0x77fc[410]] = function() {
  if (_0x77fc[532] === this[_0x77fc[1462]](_0x77fc[1461])) {
    document[_0x77fc[3]](_0x77fc[1463])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    document[_0x77fc[592]](_0x77fc[1464])[0][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  }
  if (_0x77fc[525] === this[_0x77fc[1462]](_0x77fc[1465])) {
    document[_0x77fc[3]](_0x77fc[376])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    document[_0x77fc[592]](_0x77fc[371])[0][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  }
}, Live[_0x77fc[170]][_0x77fc[1466]] = function(canCreateDiscussions) {
  if (_0x77fc[1467] == typeof canCreateDiscussions && (this[_0x77fc[401]] = !canCreateDiscussions), this[_0x77fc[401]]) {
    this[_0x77fc[404]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    this[_0x77fc[401]] = false;
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[105]] = 0;
    this[_0x77fc[409]][_0x77fc[1468]]();
  } else {
    let _0xe1a7x4 = this[_0x77fc[348]][this[_0x77fc[339]]] && this[_0x77fc[348]][this[_0x77fc[339]]][_0x77fc[465]];
    this[_0x77fc[411]][_0x77fc[173]][_0x77fc[172]] = this[_0x77fc[362]] || _0xe1a7x4 ? null : _0x77fc[175];
    this[_0x77fc[411]][_0x77fc[386]][_0x77fc[385]](_0x77fc[1469]);
    if (_0xe1a7x4) {
      if (this[_0x77fc[362]]) {
        if (this[_0x77fc[411]][_0x77fc[386]][_0x77fc[1471]](_0x77fc[1470])) {
          this[_0x77fc[411]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[1470]);
          this[_0x77fc[411]][_0x77fc[1474]][1][_0x77fc[1473]] = _0x77fc[1475];
        }
      } else {
        this[_0x77fc[411]][_0x77fc[386]][_0x77fc[385]](_0x77fc[1470]);
        this[_0x77fc[411]][_0x77fc[1474]][1][_0x77fc[1473]] = _0x77fc[1476];
      }
    }
    this[_0x77fc[404]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
    this[_0x77fc[401]] = true;
    this[_0x77fc[1477]]();
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[105]] = 1;
  }
}, Live[_0x77fc[170]][_0x77fc[1478]] = function(canCreateDiscussions) {
  showElem(document[_0x77fc[1480]](_0x77fc[1479]));
  this[_0x77fc[375]][_0x77fc[173]][_0x77fc[1481]] = _0x77fc[1482];
  this[_0x77fc[1483]] = new EmoteSelect(this[_0x77fc[375]], canCreateDiscussions, this[_0x77fc[371]], document[_0x77fc[1480]](_0x77fc[1479]), _0x77fc[1484], {
    Jstris : _0x77fc[1485],
    "smileys-emotion" : _0x77fc[1486],
    "people-body" : _0x77fc[1487],
    "animals-nature" : _0x77fc[1488],
    "food-drink" : _0x77fc[1489],
    "travel-places" : _0x77fc[1490],
    activities : _0x77fc[1491],
    objects : _0x77fc[1492],
    symbols : _0x77fc[1118],
    flags : _0x77fc[1493],
    "extras-openmoji" : _0x77fc[1494],
    "extras-unicode" : _0x77fc[1495],
    "user-emotes" : _0x77fc[1496]
  });
}, Live[_0x77fc[170]][_0x77fc[1497]] = function() {
  if (this[_0x77fc[399]]) {
    this[_0x77fc[396]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    this[_0x77fc[399]] = false;
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[105]] = 0;
  } else {
    this[_0x77fc[1499]](_0x77fc[1498]);
    this[_0x77fc[396]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
    this[_0x77fc[399]] = true;
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[105]] = 1;
  }
}, Live[_0x77fc[170]][_0x77fc[1477]] = function() {
  this[_0x77fc[1499]](_0x77fc[1500]);
  this[_0x77fc[406]][_0x77fc[1501]] = true;
  setTimeout(function() {
    this[_0x77fc[406]][_0x77fc[1501]] = false;
  }[_0x77fc[430]](this), 2E3);
}, Live[_0x77fc[170]][_0x77fc[1502]] = function() {
  var _0xe1a7x4;
  var PL$13;
  var PL$17;
  var data = {};
  var _0xe1a7x13 = {
    comboTable : {
      d : _0x77fc[1503],
      t : _0x77fc[318]
    },
    attackTable : {
      d : _0x77fc[1503],
      t : _0x77fc[318]
    },
    lockDelay : {
      d : _0x77fc[1504],
      t : _0x77fc[318]
    },
    sgProfile : {
      d : _0x77fc[1503],
      t : _0x77fc[842]
    }
  };
  _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[1505]);
  var settingHandler = Array[_0x77fc[170]][_0x77fc[310]][_0x77fc[143]](_0xe1a7x4[_0x77fc[1506]](_0x77fc[573]), 0);
  var value = Array[_0x77fc[170]][_0x77fc[310]][_0x77fc[143]](_0xe1a7x4[_0x77fc[1506]](_0x77fc[1507]), 0);
  PL$13 = settingHandler[_0x77fc[1508]](value);
  /** @type {number} */
  PL$17 = 0;
  for (; PL$17 < PL$13[_0x77fc[237]]; ++PL$17) {
    if (_0x77fc[1509] !== PL$13[PL$17][_0x77fc[312]] && _0x77fc[1510] !== PL$13[PL$17][_0x77fc[463]] && _0x77fc[1511] !== PL$13[PL$17][_0x77fc[463]]) {
      if (_0x77fc[1512] === PL$13[PL$17][_0x77fc[463]]) {
        data[PL$13[PL$17][_0x77fc[312]]] = PL$13[PL$17][_0x77fc[621]];
      } else {
        var value = PL$13[PL$17][_0x77fc[601]];
        var color = /^\d+$/[_0x77fc[1513]](value);
        if (data[PL$13[PL$17][_0x77fc[312]]] = color ? parseInt(value) : value, PL$13[PL$17][_0x77fc[312]] in _0xe1a7x13) {
          let magnifier = _0xe1a7x13[PL$13[PL$17][_0x77fc[312]]][_0x77fc[853]];
          let _0xe1a7x1e = _0xe1a7x13[PL$13[PL$17][_0x77fc[312]]][_0x77fc[180]];
          var $magnifier = value[_0x77fc[1514]](magnifier);
          /** @type {null} */
          var travis_job = null;
          if (_0x77fc[318] === _0xe1a7x1e) {
            travis_job = $magnifier[_0x77fc[431]](function(id_local) {
              return parseInt(id_local);
            });
          } else {
            if (_0x77fc[842] === _0xe1a7x1e) {
              travis_job = $magnifier[_0x77fc[431]](function(IDM_s0) {
                return parseFloat(IDM_s0);
              });
            }
          }
          data[PL$13[PL$17][_0x77fc[312]]] = travis_job;
        }
      }
    }
  }
  var courseId = parseInt(document[_0x77fc[1480]](_0x77fc[1515])[_0x77fc[601]]);
  if (courseId) {
    data[_0x77fc[759]] = courseId;
  }
  delete data[_0x77fc[1516]];
  delete data[_0x77fc[1517]];
  document[_0x77fc[3]](_0x77fc[1518])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  document[_0x77fc[3]](_0x77fc[1519])[_0x77fc[601]] = JSON[_0x77fc[1520]](data);
  if (_0x77fc[1521] == typeof ga) {
    ga(_0x77fc[1522], {
      hitType : _0x77fc[1523],
      eventCategory : _0x77fc[1524],
      eventAction : _0x77fc[1525]
    });
  }
}, Live[_0x77fc[170]][_0x77fc[1526]] = function(pingErr) {
  var PL$13 = document[_0x77fc[1528]](_0x77fc[1527]);
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13[_0x77fc[237]]; PL$17++) {
    if (PL$13[PL$17][_0x77fc[601]] === pingErr.toString()) {
      PL$13[PL$17][_0x77fc[621]] = true;
    }
  }
  document[_0x77fc[3]](_0x77fc[1505])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  document[_0x77fc[3]](_0x77fc[1529])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  document[_0x77fc[3]](_0x77fc[1502])[_0x77fc[173]][_0x77fc[1530]] = _0x77fc[1531];
  /** @type {null} */
  this[_0x77fc[412]][_0x77fc[173]][_0x77fc[952]] = null;
  if (0 === pingErr) {
    this[_0x77fc[1533]](_0x77fc[1532], false);
    this[_0x77fc[1533]](_0x77fc[1534], true);
  } else {
    if (1 === pingErr) {
      this[_0x77fc[1533]](_0x77fc[1534], false);
      this[_0x77fc[1533]](_0x77fc[1532], true);
      this[_0x77fc[412]][_0x77fc[173]][_0x77fc[952]] = _0x77fc[1535];
    } else {
      if (2 === pingErr) {
        document[_0x77fc[3]](_0x77fc[1505])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
        document[_0x77fc[3]](_0x77fc[1529])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
        document[_0x77fc[3]](_0x77fc[1502])[_0x77fc[173]][_0x77fc[1530]] = _0x77fc[1511];
        this[_0x77fc[412]][_0x77fc[173]][_0x77fc[952]] = _0x77fc[1536];
      }
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1537]] = function() {
  var _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[1538]);
  document[_0x77fc[3]](_0x77fc[1539])[_0x77fc[419]] = _0xe1a7x4[_0x77fc[1542]][_0xe1a7x4[_0x77fc[890]]][_0x77fc[1541]][_0x77fc[1540]];
}, Live[_0x77fc[170]][_0x77fc[1543]] = function() {
  var line = prompt(_0x77fc[1544]);
  if (null !== line) {
    var reporter = new XMLHttpRequest;
    var _0xe1a7x8 = this;
    reporter[_0x77fc[1322]](_0x77fc[1320], function() {
      var value = JSON[_0x77fc[1546]](this[_0x77fc[1545]]);
      var element = document[_0x77fc[3]](_0x77fc[1538]);
      addOption(element, value);
      element[_0x77fc[601]] = value[_0x77fc[312]];
      _0xe1a7x8[_0x77fc[1537]]();
    });
    reporter[_0x77fc[1549]](_0x77fc[1547], _0x77fc[1548] + line);
    reporter[_0x77fc[1552]](_0x77fc[1550], _0x77fc[1551]);
    reporter[_0x77fc[1522]]();
  }
}, Live[_0x77fc[170]][_0x77fc[1553]] = function() {
  this[_0x77fc[1554]]();
  this[_0x77fc[1526]](1);
  let _0xe1a7x4 = this[_0x77fc[357]];
  let _0xe1a7x7 = document[_0x77fc[3]](_0x77fc[171]);
  var _0xe1a7x8;
  var _0xe1a7x12;
  _0xe1a7x7[_0x77fc[386]][_0x77fc[385]](_0x77fc[1469]);
  _0xe1a7x7[_0x77fc[1474]][1][_0x77fc[1473]] = _0x77fc[1555] + i18n[_0x77fc[1556]];
  document[_0x77fc[3]](_0x77fc[1557])[_0x77fc[1501]] = true;
  document[_0x77fc[3]](_0x77fc[1517])[_0x77fc[1501]] = true;
  hideElem(document[_0x77fc[3]](_0x77fc[1558]));
  this[_0x77fc[414]][_0x77fc[601]] = (_0xe1a7x8 = this[_0x77fc[357]][_0x77fc[311]], (_0xe1a7x12 = document[_0x77fc[383]](_0x77fc[1559]))[_0x77fc[604]] = _0xe1a7x8, _0xe1a7x12[_0x77fc[601]]);
  this[_0x77fc[416]][_0x77fc[621]] = this[_0x77fc[357]][_0x77fc[338]];
  document[_0x77fc[3]](_0x77fc[1560])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1080]] >= 1 && _0xe1a7x4[_0x77fc[1080]] <= 7 ? _0xe1a7x4[_0x77fc[1080]] : 28;
  document[_0x77fc[3]](_0x77fc[1557])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[55]] ? _0xe1a7x4[_0x77fc[55]][0] + 100 : _0xe1a7x4[_0x77fc[732]];
  document[_0x77fc[3]](_0x77fc[1561])[_0x77fc[601]] = this[_0x77fc[357]][_0x77fc[1563]][_0x77fc[1562]](_0x77fc[1503]);
  document[_0x77fc[3]](_0x77fc[1564])[_0x77fc[601]] = this[_0x77fc[357]][_0x77fc[1565]][_0x77fc[1562]](_0x77fc[1503]);
  document[_0x77fc[3]](_0x77fc[456])[_0x77fc[601]] = this[_0x77fc[357]][_0x77fc[768]][_0x77fc[1562]](_0x77fc[1503]);
  document[_0x77fc[3]](_0x77fc[1566])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[445]];
  document[_0x77fc[3]](_0x77fc[1567])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[757]];
  document[_0x77fc[3]](_0x77fc[1568])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[305]];
  document[_0x77fc[3]](_0x77fc[1569])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1041]];
  document[_0x77fc[3]](_0x77fc[1570])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1571]];
  document[_0x77fc[3]](_0x77fc[1572])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[455]];
  document[_0x77fc[3]](_0x77fc[754])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[754]];
  document[_0x77fc[3]](_0x77fc[755])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[755]];
  document[_0x77fc[3]](_0x77fc[756])[_0x77fc[621]] = _0xe1a7x4[_0x77fc[756]];
  document[_0x77fc[3]](_0x77fc[1573])[_0x77fc[621]] = 0 !== _0xe1a7x4[_0x77fc[1574]];
  document[_0x77fc[3]](_0x77fc[1575])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1574]];
  document[_0x77fc[3]](_0x77fc[1576])[_0x77fc[621]] = _0xe1a7x4[_0x77fc[677]];
  document[_0x77fc[3]](_0x77fc[1516])[_0x77fc[621]] = _0xe1a7x4[_0x77fc[1516]];
  document[_0x77fc[3]](_0x77fc[518])[_0x77fc[621]] = _0xe1a7x4[_0x77fc[518]];
  document[_0x77fc[3]](_0x77fc[1577])[_0x77fc[621]] = _0xe1a7x4[_0x77fc[1578]];
  document[_0x77fc[3]](_0x77fc[1579] + _0xe1a7x4[_0x77fc[1579]])[_0x77fc[621]] = true;
  document[_0x77fc[3]](_0x77fc[1580])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1580]];
  document[_0x77fc[3]](_0x77fc[179])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1581]];
  document[_0x77fc[3]](_0x77fc[760])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1582]];
  document[_0x77fc[3]](_0x77fc[164])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1583]];
  document[_0x77fc[3]](_0x77fc[92])[_0x77fc[601]] = _0xe1a7x4[_0x77fc[1584]][_0x77fc[1562]](_0x77fc[1504]);
  document[_0x77fc[3]](_0x77fc[1517])[_0x77fc[601]] = this[_0x77fc[344]];
}, Live[_0x77fc[170]][_0x77fc[1554]] = function() {
  this[_0x77fc[1585]]();
  this[_0x77fc[412]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  let _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[171]);
  _0xe1a7x4[_0x77fc[386]][_0x77fc[1472]](_0x77fc[1469]);
  _0xe1a7x4[_0x77fc[1474]][1][_0x77fc[1473]] = _0x77fc[1555] + i18n[_0x77fc[171]];
  document[_0x77fc[3]](_0x77fc[1557])[_0x77fc[1501]] = false;
  document[_0x77fc[3]](_0x77fc[1517])[_0x77fc[1501]] = false;
  document[_0x77fc[3]](_0x77fc[1558])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[1586];
  var xhrHandshake = new XMLHttpRequest;
  var values = document[_0x77fc[3]](_0x77fc[1538]);
  values[_0x77fc[604]] = _0x77fc[1587];
  values[_0x77fc[601]] = _0x77fc[525];
  this[_0x77fc[1537]]();
  xhrHandshake[_0x77fc[1322]](_0x77fc[1320], function() {
    var options = JSON[_0x77fc[1546]](this[_0x77fc[1545]]);
    /** @type {number} */
    var i = 0;
    for (; i < options[_0x77fc[237]]; i++) {
      addOption(values, options[i]);
    }
    document[_0x77fc[3]](_0x77fc[1588])[_0x77fc[173]][_0x77fc[1530]] = _0x77fc[1511];
  });
  xhrHandshake[_0x77fc[1549]](_0x77fc[1547], _0x77fc[1589]);
  xhrHandshake[_0x77fc[1552]](_0x77fc[1550], _0x77fc[1551]);
  xhrHandshake[_0x77fc[1522]]();
  document[_0x77fc[3]](_0x77fc[1588])[_0x77fc[173]][_0x77fc[1530]] = _0x77fc[1531];
}, Live[_0x77fc[170]][_0x77fc[1590]] = function() {
  this[_0x77fc[412]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  this[_0x77fc[1585]]();
}, Live[_0x77fc[170]][_0x77fc[1585]] = function() {
  this[_0x77fc[1526]](2);
  this[_0x77fc[414]][_0x77fc[601]] = (_0x77fc[46] !== this[_0x77fc[418]] ? this[_0x77fc[418]] : _0x77fc[1591]) + _0x77fc[1592];
  this[_0x77fc[416]][_0x77fc[621]] = false;
  document[_0x77fc[3]](_0x77fc[1593])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  document[_0x77fc[3]](_0x77fc[171])[_0x77fc[1501]] = false;
  document[_0x77fc[3]](_0x77fc[1518])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  /** @type {number} */
  document[_0x77fc[3]](_0x77fc[1560])[_0x77fc[601]] = 28;
  /** @type {number} */
  document[_0x77fc[3]](_0x77fc[1557])[_0x77fc[601]] = 0;
  document[_0x77fc[3]](_0x77fc[417])[_0x77fc[621]] = false;
  document[_0x77fc[3]](_0x77fc[1573])[_0x77fc[621]] = true;
  /** @type {number} */
  document[_0x77fc[3]](_0x77fc[1575])[_0x77fc[601]] = 120;
  this[_0x77fc[1594]]();
  this[_0x77fc[1595]]();
}, Live[_0x77fc[170]][_0x77fc[1595]] = function() {
  let _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[1596]);
  let fieldDetails = Array[_0x77fc[1597]](_0xe1a7x4[_0x77fc[1506]](_0x77fc[573]));
  let _0xe1a7x8 = 0;
  for (let fieldDetail of fieldDetails) {
    fieldDetail[_0x77fc[1148]] = _0x77fc[525];
    fieldDetail[_0x77fc[1098]] = _0x77fc[1598];
    fieldDetail[_0x77fc[1599]] = _0x77fc[476];
    fieldDetail[_0x77fc[1600]] = _0xe1a7x8 % 2 == 0 ? _0x77fc[1601] : _0x77fc[1602];
    fieldDetail[_0x77fc[601]] = _0x77fc[46];
    ++_0xe1a7x8;
  }
}, Live[_0x77fc[170]][_0x77fc[1603]] = function() {
  let _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[1596]);
  let fieldDetails = Array[_0x77fc[1597]](_0xe1a7x4[_0x77fc[1506]](_0x77fc[573]));
  let dialogShowLen = -1;
  let $definitionBase = 0;
  let range_max_score = [];
  for (let fieldDetail of fieldDetails) {
    if (++dialogShowLen, _0x77fc[46] === fieldDetail[_0x77fc[601]]) {
      range_max_score[_0x77fc[308]](null);
      ++$definitionBase;
      continue;
    }
    let percentageScore = parseFloat(fieldDetail[_0x77fc[601]]);
    if (isNaN(percentageScore)) {
      return false;
    }
    if (range_max_score[_0x77fc[308]](percentageScore), dialogShowLen % 2 == 1 && null !== range_max_score[dialogShowLen - 1] && percentageScore <= range_max_score[dialogShowLen - 1]) {
      return false;
    }
  }
  return $definitionBase === range_max_score[_0x77fc[237]] ? null : range_max_score;
}, Live[_0x77fc[170]][_0x77fc[1594]] = function() {
  /** @type {number} */
  document[_0x77fc[3]](_0x77fc[1509])[_0x77fc[601]] = 0;
  this[_0x77fc[1604]]();
  document[_0x77fc[3]](_0x77fc[1575])[_0x77fc[1501]] = !document[_0x77fc[3]](_0x77fc[1573])[_0x77fc[621]];
  document[_0x77fc[3]](_0x77fc[1576])[_0x77fc[621]] = true;
  /** @type {number} */
  document[_0x77fc[3]](_0x77fc[1575])[_0x77fc[601]] = 120;
  /** @type {number} */
  document[_0x77fc[3]](_0x77fc[179])[_0x77fc[601]] = 0;
  /** @type {number} */
  document[_0x77fc[3]](_0x77fc[760])[_0x77fc[601]] = 0;
  document[_0x77fc[3]](_0x77fc[1568])[_0x77fc[601]] = _0x77fc[525];
  document[_0x77fc[3]](_0x77fc[1569])[_0x77fc[601]] = _0x77fc[525];
  document[_0x77fc[3]](_0x77fc[164])[_0x77fc[601]] = _0x77fc[526];
  document[_0x77fc[3]](_0x77fc[92])[_0x77fc[601]] = _0x77fc[1605];
  document[_0x77fc[3]](_0x77fc[456])[_0x77fc[601]] = _0x77fc[1606];
  document[_0x77fc[3]](_0x77fc[1570])[_0x77fc[601]] = _0x77fc[1235];
  document[_0x77fc[3]](_0x77fc[1566])[_0x77fc[601]] = _0x77fc[1232];
  document[_0x77fc[3]](_0x77fc[1567])[_0x77fc[601]] = _0x77fc[525];
  document[_0x77fc[3]](_0x77fc[1572])[_0x77fc[601]] = _0x77fc[1607];
  document[_0x77fc[3]](_0x77fc[754])[_0x77fc[601]] = _0x77fc[525];
  document[_0x77fc[3]](_0x77fc[755])[_0x77fc[601]] = _0x77fc[526];
  document[_0x77fc[3]](_0x77fc[756])[_0x77fc[621]] = false;
  document[_0x77fc[3]](_0x77fc[1516])[_0x77fc[621]] = false;
  document[_0x77fc[3]](_0x77fc[518])[_0x77fc[621]] = false;
  document[_0x77fc[3]](_0x77fc[1577])[_0x77fc[621]] = false;
  document[_0x77fc[3]](_0x77fc[1608])[_0x77fc[621]] = true;
  document[_0x77fc[3]](_0x77fc[1580])[_0x77fc[601]] = _0x77fc[46];
  document[_0x77fc[3]](_0x77fc[1517])[_0x77fc[601]] = _0x77fc[525];
}, Live[_0x77fc[170]][_0x77fc[1604]] = function() {
  var _0xe1a7x4 = _0x77fc[46];
  var _0xe1a7x7 = _0x77fc[46];
  switch(parseInt(document[_0x77fc[3]](_0x77fc[1509])[_0x77fc[601]])) {
    case 0:
      _0xe1a7x4 = _0x77fc[1609];
      _0xe1a7x7 = _0x77fc[1610];
      break;
    case 1:
      _0xe1a7x4 = _0x77fc[1611];
      _0xe1a7x7 = _0x77fc[1612];
      break;
    case 2:
      _0xe1a7x4 = _0x77fc[1613];
      _0xe1a7x7 = _0x77fc[1610];
  }
  document[_0x77fc[3]](_0x77fc[1561])[_0x77fc[601]] = _0xe1a7x4;
  document[_0x77fc[3]](_0x77fc[1564])[_0x77fc[601]] = _0xe1a7x7;
}, Live[_0x77fc[170]][_0x77fc[1614]] = function(ExistingConfig) {
  var name;
  for (name in ExistingConfig) {
    switch(name) {
      case _0x77fc[1561]:
        document[_0x77fc[3]](_0x77fc[1561])[_0x77fc[601]] = ExistingConfig[name][_0x77fc[1562]](_0x77fc[1503]);
        break;
      case _0x77fc[1564]:
        document[_0x77fc[3]](_0x77fc[1564])[_0x77fc[601]] = ExistingConfig[name][_0x77fc[1562]](_0x77fc[1503]);
        break;
      case _0x77fc[456]:
        document[_0x77fc[3]](_0x77fc[456])[_0x77fc[601]] = ExistingConfig[name][_0x77fc[1562]](_0x77fc[1503]);
        break;
      case _0x77fc[92]:
        document[_0x77fc[3]](_0x77fc[92])[_0x77fc[601]] = ExistingConfig[name][_0x77fc[1562]](_0x77fc[1504]);
        break;
      case _0x77fc[1573]:
        document[_0x77fc[3]](_0x77fc[1573])[_0x77fc[621]] = ExistingConfig[name];
        break;
      case _0x77fc[1576]:
        document[_0x77fc[3]](_0x77fc[1576])[_0x77fc[621]] = ExistingConfig[name];
        break;
      case _0x77fc[417]:
        document[_0x77fc[3]](_0x77fc[417])[_0x77fc[621]] = ExistingConfig[name];
        break;
      case _0x77fc[759]:
        document[_0x77fc[3]](_0x77fc[1579] + ExistingConfig[name])[_0x77fc[621]] = true;
        break;
      default:
        document[_0x77fc[3]](name)[_0x77fc[601]] = ExistingConfig[name];
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1615]] = function() {
  var data = document[_0x77fc[3]](_0x77fc[171])[_0x77fc[386]][_0x77fc[1471]](_0x77fc[1469]);
  if (document[_0x77fc[3]](_0x77fc[1616])[_0x77fc[621]]) {
    var tQueryStr = document[_0x77fc[3]](_0x77fc[1538])[_0x77fc[601]];
    if (_0x77fc[525] != tQueryStr) {
      document[_0x77fc[3]](_0x77fc[1593])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[1586];
      document[_0x77fc[3]](_0x77fc[171])[_0x77fc[1501]] = true;
      var originCaptchaUrl = new XMLHttpRequest;
      var coordtransform = this;
      return originCaptchaUrl[_0x77fc[1322]](_0x77fc[1320], function() {
        var coord = JSON[_0x77fc[1546]](this[_0x77fc[1545]]);
        coordtransform[_0x77fc[1594]]();
        coordtransform[_0x77fc[1614]](coord[_0x77fc[600]]);
        coordtransform[_0x77fc[1617]](data);
      }), originCaptchaUrl[_0x77fc[1549]](_0x77fc[1547], _0x77fc[1548] + tQueryStr), originCaptchaUrl[_0x77fc[1552]](_0x77fc[1550], _0x77fc[1551]), originCaptchaUrl[_0x77fc[1522]](), void(_0x77fc[1521] == typeof ga && ga(_0x77fc[1522], {
        hitType : _0x77fc[1523],
        eventCategory : _0x77fc[1524],
        eventAction : _0x77fc[1320]
      }));
    }
  }
  this[_0x77fc[1617]](data);
}, Live[_0x77fc[170]][_0x77fc[1617]] = function(responseTasks) {
  var inputPos = true;
  var outputPos = _0x77fc[46];
  var lta = this[_0x77fc[414]][_0x77fc[601]][_0x77fc[1619]](/"/g, _0x77fc[1618]);
  var data = new Object;
  /** @type {number} */
  data[_0x77fc[180]] = 11;
  if (responseTasks) {
    data[_0x77fc[1620]] = responseTasks;
  }
  if (document[_0x77fc[3]](_0x77fc[1621])[_0x77fc[621]]) {
    this[_0x77fc[1604]]();
  }
  if (0 === lta[_0x77fc[237]]) {
    outputPos = outputPos + (i18n[_0x77fc[1622]] + _0x77fc[1623]);
    inputPos = false;
  }
  data[_0x77fc[338]] = this[_0x77fc[416]][_0x77fc[621]];
  data[_0x77fc[311]] = lta;
  var content;
  var average;
  var _0xe1a7x39 = document[_0x77fc[3]](_0x77fc[1560]);
  data[_0x77fc[1230]] = parseInt(_0xe1a7x39[_0x77fc[1542]][_0xe1a7x39[_0x77fc[890]]][_0x77fc[601]]);
  _0xe1a7x39 = document[_0x77fc[3]](_0x77fc[1557]);
  data[_0x77fc[971]] = parseInt(_0xe1a7x39[_0x77fc[1542]][_0xe1a7x39[_0x77fc[890]]][_0x77fc[601]]);
  if (data[_0x77fc[971]] > 100) {
    data[_0x77fc[1624]] = data[_0x77fc[971]] - 100;
    /** @type {number} */
    data[_0x77fc[971]] = 3;
  }
  var nPiePattern = _0x77fc[1625] + document[_0x77fc[3]](_0x77fc[1561])[_0x77fc[601]] + _0x77fc[1626];
  var message = _0x77fc[1625] + document[_0x77fc[3]](_0x77fc[1564])[_0x77fc[601]] + _0x77fc[1626];
  try {
    content = JSON[_0x77fc[1546]](nPiePattern);
    average = JSON[_0x77fc[1546]](message);
    /**
     * @param {?} val
     * @return {?}
     */
    var trigger = function(val) {
      return Number(val) === val && val % 1 == 0 && val >= 0 && val <= 255;
    };
    if (11 !== content[_0x77fc[237]] || 13 !== average[_0x77fc[237]] || !content[_0x77fc[1627]](trigger) || !average[_0x77fc[1627]](trigger)) {
      throw 1;
    }
  } catch (_0xe1a7x39) {
    outputPos = outputPos + _0x77fc[1628];
    inputPos = false;
  }
  data[_0x77fc[1563]] = content;
  data[_0x77fc[1565]] = average;
  data[_0x77fc[445]] = parseInt(document[_0x77fc[3]](_0x77fc[1566])[_0x77fc[601]]);
  data[_0x77fc[757]] = parseInt(document[_0x77fc[3]](_0x77fc[1567])[_0x77fc[601]]);
  data[_0x77fc[305]] = parseInt(document[_0x77fc[3]](_0x77fc[1568])[_0x77fc[601]]);
  data[_0x77fc[1629]] = parseInt(document[_0x77fc[3]](_0x77fc[1569])[_0x77fc[601]]);
  data[_0x77fc[1571]] = parseInt(document[_0x77fc[3]](_0x77fc[1570])[_0x77fc[601]]);
  data[_0x77fc[455]] = parseInt(document[_0x77fc[3]](_0x77fc[1572])[_0x77fc[601]]);
  data[_0x77fc[754]] = parseInt(document[_0x77fc[3]](_0x77fc[754])[_0x77fc[601]]);
  data[_0x77fc[755]] = parseInt(document[_0x77fc[3]](_0x77fc[755])[_0x77fc[601]]);
  if (isNaN(data[_0x77fc[455]]) || isNaN(data[_0x77fc[754]]) || isNaN(data[_0x77fc[755]])) {
    outputPos = outputPos + _0x77fc[1630];
    inputPos = false;
  }
  var _goodListener2 = document[_0x77fc[3]](_0x77fc[1580])[_0x77fc[601]];
  if (_goodListener2[_0x77fc[237]]) {
    try {
      _goodListener2 = _goodListener2[_0x77fc[1631]]()[_0x77fc[1514]](_0x77fc[1503]);
      /**
       * @param {?} extra
       * @return {?}
       */
      trigger = function(extra) {
        return extra[_0x77fc[237]] > 0 && extra[_0x77fc[237]] <= 2 && /^[A-Z0-9]+$/[_0x77fc[1513]](extra);
      };
      if (_goodListener2[_0x77fc[237]] > 6 || !_goodListener2[_0x77fc[1627]](trigger)) {
        throw 1;
      }
      data[_0x77fc[1580]] = _goodListener2[_0x77fc[1562]](_0x77fc[1503]);
    } catch (_0xe1a7x39) {
      outputPos = outputPos + _0x77fc[1632];
      inputPos = false;
    }
  }
  if (document[_0x77fc[3]](_0x77fc[1573])[_0x77fc[621]]) {
    var courseId = parseInt(document[_0x77fc[3]](_0x77fc[1575])[_0x77fc[601]]);
    if (!courseId || courseId < 0 || courseId > 600) {
      outputPos = outputPos + _0x77fc[1633];
      inputPos = false;
    } else {
      data[_0x77fc[1574]] = courseId;
    }
  } else {
    /** @type {number} */
    data[_0x77fc[1574]] = 0;
  }
  data[_0x77fc[677]] = document[_0x77fc[3]](_0x77fc[1576])[_0x77fc[621]];
  data[_0x77fc[1516]] = document[_0x77fc[3]](_0x77fc[1516])[_0x77fc[621]];
  data[_0x77fc[518]] = document[_0x77fc[3]](_0x77fc[518])[_0x77fc[621]];
  data[_0x77fc[1578]] = document[_0x77fc[3]](_0x77fc[1577])[_0x77fc[621]];
  data[_0x77fc[756]] = document[_0x77fc[3]](_0x77fc[756])[_0x77fc[621]];
  data[_0x77fc[1579]] = parseInt(document[_0x77fc[1480]](_0x77fc[1515])[_0x77fc[601]]);
  data[_0x77fc[330]] = document[_0x77fc[3]](_0x77fc[1517])[_0x77fc[601]];
  if (!(_0x77fc[525] === data[_0x77fc[330]] || _0x77fc[1634] === data[_0x77fc[330]][_0x77fc[1635]](0) || data[_0x77fc[338]])) {
    outputPos = outputPos + _0x77fc[1636];
    inputPos = false;
  }
  var forceStartIndex = parseInt(document[_0x77fc[3]](_0x77fc[179])[_0x77fc[601]]);
  if (isNaN(forceStartIndex) || forceStartIndex < 0 || forceStartIndex > 6E3) {
    outputPos = outputPos + _0x77fc[1637];
    inputPos = false;
  } else {
    data[_0x77fc[1581]] = forceStartIndex;
  }
  var dimmerDelay = parseFloat(document[_0x77fc[3]](_0x77fc[760])[_0x77fc[601]]);
  if (isNaN(dimmerDelay) || dimmerDelay < 0 || dimmerDelay > 10) {
    outputPos = outputPos + _0x77fc[1638];
    inputPos = false;
  } else {
    data[_0x77fc[1582]] = dimmerDelay;
  }
  var maxScoreValueInt = parseInt(document[_0x77fc[3]](_0x77fc[164])[_0x77fc[601]]);
  if (isNaN(maxScoreValueInt) || maxScoreValueInt < 0 || maxScoreValueInt > 28) {
    outputPos = outputPos + _0x77fc[1639];
    inputPos = false;
  } else {
    data[_0x77fc[1583]] = maxScoreValueInt;
  }
  var travis_job = document[_0x77fc[3]](_0x77fc[92])[_0x77fc[601]][_0x77fc[1514]](_0x77fc[1504], 3)[_0x77fc[431]](function(id_local) {
    return parseInt(id_local, 10);
  });
  if (3 !== travis_job[_0x77fc[237]] || isNaN(travis_job[0]) || isNaN(travis_job[1]) || isNaN(travis_job[2]) || travis_job[0] < 0 || travis_job[1] < 0 || travis_job[2] < 0 || travis_job[0] > 2E7 || travis_job[1] > 2E7 || travis_job[2] > 2E7) {
    outputPos = outputPos + _0x77fc[1640];
    inputPos = false;
  } else {
    data[_0x77fc[1584]] = travis_job;
  }
  var input = _0x77fc[1625] + document[_0x77fc[3]](_0x77fc[456])[_0x77fc[601]] + _0x77fc[1626];
  try {
    input = JSON[_0x77fc[1546]](input);
    /**
     * @param {?} x
     * @return {?}
     */
    trigger = function(x) {
      return Number(x) === x && x >= 0 && x <= 999;
    };
    if (input[_0x77fc[237]] < 1 || input[_0x77fc[237]] > 30 || !input[_0x77fc[1627]](trigger)) {
      throw 1;
    }
    if (input[input[_0x77fc[237]] - 1] <= 0) {
      throw outputPos = outputPos + _0x77fc[1641], 1;
    }
  } catch (_0xe1a7x39) {
    outputPos = outputPos + _0x77fc[1642];
    inputPos = false;
  }
  data[_0x77fc[768]] = input;
  var itf = this[_0x77fc[1603]]();
  if (false === itf ? (outputPos = outputPos + _0x77fc[1643], inputPos = false) : null !== itf && (data[_0x77fc[1644]] = itf), 0 != document[_0x77fc[3]](_0x77fc[1645])[_0x77fc[601]] && (data[_0x77fc[766]] = parseInt(document[_0x77fc[3]](_0x77fc[1645])[_0x77fc[601]])), inputPos) {
    var agents_html = JSON[_0x77fc[1520]](data);
    this[_0x77fc[1499]](agents_html);
    this[_0x77fc[1113]]();
    this[_0x77fc[1590]]();
    this[_0x77fc[1466]](false);
    this[_0x77fc[346]] = data;
  } else {
    alert(outputPos);
  }
  document[_0x77fc[3]](_0x77fc[1593])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  document[_0x77fc[3]](_0x77fc[171])[_0x77fc[1501]] = false;
}, Live[_0x77fc[170]][_0x77fc[1646]] = function(att) {
  this[_0x77fc[1113]]();
  var _0xe1a7x7 = att[_0x77fc[1619]](/"/g, _0x77fc[1618]);
  var artistTrack = _0x77fc[1647] + _0xe1a7x7 + _0x77fc[1648];
  this[_0x77fc[1499]](artistTrack);
  this[_0x77fc[1590]]();
  this[_0x77fc[1466]](false);
  this[_0x77fc[1649]]();
  if (5 == _0xe1a7x7 && _0x77fc[1521] == typeof ga) {
    ga(_0x77fc[1522], {
      hitType : _0x77fc[1523],
      eventCategory : _0x77fc[1650],
      eventAction : _0x77fc[1651]
    });
  }
}, Live[_0x77fc[170]][_0x77fc[1652]] = function(canCreateDiscussions) {
  if (this[_0x77fc[347]] && (clearTimeout(this[_0x77fc[347]]), this[_0x77fc[347]] = null), this[_0x77fc[338]][_0x77fc[153]][_0x77fc[997]](this[_0x77fc[338]][_0x77fc[153]].LOADING), this[_0x77fc[337]][_0x77fc[1653]] = this[_0x77fc[1654]][_0x77fc[430]](this), this[_0x77fc[332]] && !this[_0x77fc[345]]) {
    this[_0x77fc[334]] = false;
    this[_0x77fc[338]][_0x77fc[153]][_0x77fc[461]](i18n[_0x77fc[1655]]);
    var xhrHandshake = new XMLHttpRequest;
    var command_codes = this;
    /**
     * @return {undefined}
     */
    xhrHandshake[_0x77fc[1656]] = function() {
      if (4 === this[_0x77fc[1657]] && 200 === this[_0x77fc[1658]]) {
        var data = JSON[_0x77fc[1546]](this[_0x77fc[1545]]);
        command_codes[_0x77fc[1659]](data);
      }
    };
    xhrHandshake[_0x77fc[1549]](_0x77fc[1547], _0x77fc[1660], true);
    xhrHandshake[_0x77fc[1552]](_0x77fc[1550], _0x77fc[1551]);
    xhrHandshake[_0x77fc[1522]]();
  }
}, Live[_0x77fc[170]][_0x77fc[1659]] = function(data) {
  if (data[_0x77fc[1168]](_0x77fc[1661])) {
    /** @type {number} */
    data[_0x77fc[180]] = 19;
    data[_0x77fc[532]] = this[_0x77fc[434]];
    this[_0x77fc[1499]](JSON[_0x77fc[1520]](data));
  }
}, Live[_0x77fc[170]][_0x77fc[1662]] = function(requestedDatabaseType, last, val) {
  var type = requestedDatabaseType;
  var srcdidl = _0x77fc[46];
  var id = _0x77fc[46];
  /** @type {null} */
  var key = null;
  var menuentry = _0x77fc[46];
  /** @type {!Array} */
  var scriptElement = [];
  switch(val && val[_0x77fc[467]] && (key = val[_0x77fc[467]]), null !== key && scriptElement[_0x77fc[308]](_0x77fc[1686] + key), val && val[_0x77fc[1687]] && scriptElement[_0x77fc[308]](_0x77fc[1688]), type[_0x77fc[237]] >= 16 && (type = type[_0x77fc[1247]](0, 14) + _0x77fc[1689]), last) {
    case 100:
      srcdidl = _0x77fc[1663];
      id = _0x77fc[1664];
      break;
    case 101:
      srcdidl = _0x77fc[1665] + CDN_URL(_0x77fc[1666]) + _0x77fc[1667];
      id = _0x77fc[1668];
      break;
    default:
      if (last >= 110 && last <= 118) {
        srcdidl = _0x77fc[1665] + CDN_URL(_0x77fc[1669] + {
          110 : _0x77fc[1670],
          111 : _0x77fc[1671],
          112 : _0x77fc[1672],
          113 : _0x77fc[1673],
          114 : _0x77fc[1674],
          115 : _0x77fc[1675],
          116 : _0x77fc[1676],
          117 : _0x77fc[1677],
          118 : _0x77fc[1678]
        }[last] + _0x77fc[904]) + _0x77fc[1679];
        id = _0x77fc[1680];
      } else {
        if (last >= 1E3 && last <= 2E3) {
          last = last - 1E3;
          let _0xe1a7x4 = String[_0x77fc[739]](65 + ((992 & last) >> 5));
          _0xe1a7x4 = _0xe1a7x4 + String[_0x77fc[739]](65 + (31 & last));
          srcdidl = _0x77fc[1681] + _0xe1a7x4 + _0x77fc[1682] + _0xe1a7x4 + _0x77fc[1683];
          id = _0x77fc[1680];
        } else {
          if (999 === last && val && val[_0x77fc[468]]) {
            srcdidl = _0x77fc[1665] + CDN_URL(_0x77fc[1484] + val[_0x77fc[468]] + _0x77fc[1684]) + _0x77fc[1685];
            id = _0x77fc[1680];
          }
        }
      }
  }
  return scriptElement[_0x77fc[237]] && (menuentry = menuentry + (_0x77fc[1690] + scriptElement[_0x77fc[1562]](_0x77fc[1691]) + _0x77fc[1692])), _0x77fc[1693] + requestedDatabaseType + _0x77fc[1694] + (menuentry = menuentry + (id ? _0x77fc[1695] + id + _0x77fc[1692] : _0x77fc[46])) + _0x77fc[1696] + srcdidl + type + _0x77fc[1697];
}, Live[_0x77fc[170]][_0x77fc[1698]] = function(trainsize, textNodeMap) {
  var _textNodeMap = void 0 === textNodeMap || textNodeMap;
  return void 0 !== this[_0x77fc[348]][trainsize] && null !== this[_0x77fc[348]][trainsize][_0x77fc[333]] ? _textNodeMap && (arrayContains(this[_0x77fc[351]], parseInt(trainsize)) || this[_0x77fc[339]] == parseInt(trainsize) && this[_0x77fc[332]]) ? this[_0x77fc[1662]](this[_0x77fc[348]][trainsize][_0x77fc[333]], this[_0x77fc[348]][trainsize][_0x77fc[463]], this[_0x77fc[348]][trainsize]) : this[_0x77fc[348]][trainsize][_0x77fc[333]] : -1 === trainsize ? _0x77fc[46] : -2 === trainsize ? _0x77fc[1699] + 
  i18n[_0x77fc[1700]] + _0x77fc[1119] : -3 === trainsize ? _0x77fc[1701] + i18n[_0x77fc[1702]] + _0x77fc[1119] : -4 === trainsize ? _0x77fc[1117] + i18n[_0x77fc[1703]] + _0x77fc[1119] : -5 === trainsize ? _0x77fc[1704] : i18n[_0x77fc[1705]] + trainsize.toString();
}, Live[_0x77fc[170]][_0x77fc[1706]] = function() {
  /** @type {null} */
  var _0xe1a7x4 = null;
  if (void 0 !== this[_0x77fc[348]][this[_0x77fc[339]]]) {
    _0xe1a7x4 = this[_0x77fc[348]][this[_0x77fc[339]]];
  }
  this[_0x77fc[348]] = {};
  this[_0x77fc[349]] = Array();
  this[_0x77fc[350]] = Array();
  this[_0x77fc[351]] = Array();
  this[_0x77fc[421]] = {};
  if (null !== _0xe1a7x4) {
    this[_0x77fc[348]][this[_0x77fc[339]]] = _0xe1a7x4;
  }
}, Live[_0x77fc[170]][_0x77fc[1227]] = function(canCreateDiscussions) {
  var perTick = this[_0x77fc[1462]](_0x77fc[50]);
  if (!(!canCreateDiscussions && (this[_0x77fc[365]] || this[_0x77fc[345]] || _0x77fc[46] == perTick || isNaN(parseInt(perTick))))) {
    this[_0x77fc[1585]]();
    this[_0x77fc[414]][_0x77fc[601]] = _0x77fc[1225];
    this[_0x77fc[416]][_0x77fc[621]] = true;
    this[_0x77fc[1617]]();
  }
}, Live[_0x77fc[170]][_0x77fc[1707]] = function() {
  if (4008 === this[_0x77fc[1708]]) {
    /** @type {null} */
    this[_0x77fc[1708]] = null;
    var artistTrack = JSON[_0x77fc[1520]](this[_0x77fc[346]]);
    this[_0x77fc[1499]](artistTrack);
    /** @type {null} */
    this[_0x77fc[346]] = null;
  } else {
    if (this[_0x77fc[334]]) {
      this[_0x77fc[1227]]();
    }
  }
  if (_0x77fc[1521] == typeof ga) {
    var action = this[_0x77fc[342]] ? _0x77fc[1709] : _0x77fc[1710];
    ga(_0x77fc[1522], {
      hitType : _0x77fc[1523],
      eventCategory : _0x77fc[1711],
      eventAction : action
    });
  }
  this[_0x77fc[338]][_0x77fc[150]][_0x77fc[1712]]();
}, Live[_0x77fc[170]][_0x77fc[1713]] = function(marginGroups, isSlidingUp) {
  var topLevelTreeElements = _0x77fc[46];
  /** @type {number} */
  var _0xe1a7x12 = 0;
  var dir;
  for (dir in marginGroups[_0x77fc[1714]]) {
    var id = parseInt(dir);
    if (!isNaN(id)) {
      if (void 0 === this[_0x77fc[348]][id]) {
        this[_0x77fc[348]][id] = new Client(id);
      }
      if (marginGroups[_0x77fc[1714]][dir][_0x77fc[1168]](_0x77fc[466]) && true === marginGroups[_0x77fc[1714]][dir][_0x77fc[466]]) {
        this[_0x77fc[348]][id][_0x77fc[466]] = true;
        this[_0x77fc[351]][_0x77fc[308]](id);
      }
      if (isSlidingUp && void 0 !== marginGroups[_0x77fc[1714]][dir][_0x77fc[311]]) {
        this[_0x77fc[348]][id][_0x77fc[333]] = marginGroups[_0x77fc[1714]][dir][_0x77fc[311]];
      }
      if (marginGroups[_0x77fc[1714]][dir][_0x77fc[1168]](_0x77fc[463])) {
        this[_0x77fc[348]][id][_0x77fc[463]] = marginGroups[_0x77fc[1714]][dir][_0x77fc[463]];
        if (marginGroups[_0x77fc[1714]][dir][_0x77fc[1168]](_0x77fc[808])) {
          this[_0x77fc[348]][id][_0x77fc[468]] = marginGroups[_0x77fc[1714]][dir][_0x77fc[808]];
        }
      }
      if (marginGroups[_0x77fc[1714]][dir][_0x77fc[1168]](_0x77fc[1715])) {
        this[_0x77fc[348]][id][_0x77fc[467]] = marginGroups[_0x77fc[1714]][dir][_0x77fc[1715]];
      }
      if (0 != _0xe1a7x12) {
        topLevelTreeElements = topLevelTreeElements + _0x77fc[1351];
      }
      topLevelTreeElements = topLevelTreeElements + this[_0x77fc[1698]](id);
      _0xe1a7x12++;
    }
  }
  this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[1717]] + _0x77fc[1718] + topLevelTreeElements + _0x77fc[1719]);
}, Live[_0x77fc[170]][_0x77fc[1720]] = function(sprite) {
  return this[_0x77fc[349]][_0x77fc[237]] < 8 || this[_0x77fc[349]][_0x77fc[237]] < 20 && arrayContains(this[_0x77fc[351]], sprite) || this[_0x77fc[348]][sprite][_0x77fc[463]] >= 100;
}, Live[_0x77fc[170]][_0x77fc[1721]] = function(statisticName, type) {
  if (void 0 !== this[_0x77fc[348]][statisticName] && null !== this[_0x77fc[348]][statisticName][_0x77fc[333]]) {
    if (this[_0x77fc[1720]](statisticName)) {
      var msg = _0x77fc[1716] + this[_0x77fc[1698]](statisticName) + _0x77fc[1555];
      msg = msg + (type ? i18n[_0x77fc[1722]] + _0x77fc[1723] : i18n[_0x77fc[1724]] + _0x77fc[1723]);
      this[_0x77fc[1116]](_0x77fc[46], msg);
      if (this[_0x77fc[338]][_0x77fc[150]][_0x77fc[1725]]) {
        createjs[_0x77fc[34]][_0x77fc[50]](_0x77fc[924]);
      }
      this[_0x77fc[338]][_0x77fc[1193]](this[_0x77fc[1698]](statisticName, false) + _0x77fc[1555] + i18n[_0x77fc[1726]] + _0x77fc[1727]);
      setTimeout(function() {
        this[_0x77fc[338]][_0x77fc[1193]](_0x77fc[1728]);
      }[_0x77fc[430]](this), 1500);
    }
  } else {
    /** @type {!Array} */
    this[_0x77fc[421]][statisticName] = [];
    this[_0x77fc[421]][statisticName][0] = this[_0x77fc[338]][_0x77fc[136]]();
    this[_0x77fc[421]][statisticName][1] = type;
  }
}, Live[_0x77fc[170]][_0x77fc[1729]] = function() {
  var middlePathName = this[_0x77fc[342]] ? _0x77fc[1730] : _0x77fc[46];
  var dupeNameCount = _0x77fc[46];
  if (!this[_0x77fc[335]]) {
    dupeNameCount = 0 === this[_0x77fc[339]] ? _0x77fc[1731] : _0x77fc[1732];
  }
  var groupNamePrefix = this[_0x77fc[335]] ? i18n[_0x77fc[335]] : i18n[_0x77fc[1733]];
  var _0xe1a7x12 = _0x77fc[46];
  if (this[_0x77fc[344]]) {
    _0xe1a7x12 = _0x77fc[1734] + this[_0x77fc[344]] + _0x77fc[1351];
  }
  this[_0x77fc[338]][_0x77fc[14]][_0x77fc[604]] = groupNamePrefix + middlePathName + dupeNameCount + _0x77fc[1735] + this[_0x77fc[339]] + _0x77fc[1736] + _0xe1a7x12 + this[_0x77fc[323]];
}, Live[_0x77fc[170]][_0x77fc[1737]] = function(args) {
  switch(args[_0x77fc[180]]) {
    case 1:
      if (this[_0x77fc[339]] = args[_0x77fc[339]], this[_0x77fc[344]] = args[_0x77fc[532]], void 0 === this[_0x77fc[348]][this[_0x77fc[339]]] && (this[_0x77fc[348]][this[_0x77fc[339]]] = new Client(this[_0x77fc[339]])), this[_0x77fc[332]] || (args[_0x77fc[311]][_0x77fc[318]] >= 0 && this[_0x77fc[338]][_0x77fc[150]][_0x77fc[1739]](_0x77fc[1738], args[_0x77fc[311]][_0x77fc[318]]), this[_0x77fc[1740]](args[_0x77fc[311]][_0x77fc[311]])), args[_0x77fc[1168]](_0x77fc[972])) {
        this[_0x77fc[343]] = args[_0x77fc[972]];
        let command_codes = document[_0x77fc[3]](_0x77fc[1517]);
        command_codes[_0x77fc[604]] = _0x77fc[46];
        let data = document[_0x77fc[383]](_0x77fc[1741]);
        data[_0x77fc[601]] = _0x77fc[525];
        data[_0x77fc[1742]] = true;
        data[_0x77fc[419]] = _0x77fc[45];
        command_codes[_0x77fc[387]](data);
        for (let _lo in this[_0x77fc[343]]) {
          let data = document[_0x77fc[383]](_0x77fc[1741]);
          data[_0x77fc[601]] = _lo;
          data[_0x77fc[419]] = this[_0x77fc[343]][_lo][_0x77fc[311]];
          command_codes[_0x77fc[387]](data);
        }
      }
      this[_0x77fc[335]] = true;
      this[_0x77fc[1707]]();
      this[_0x77fc[1729]]();
      break;
    case 2:
      if (void 0 === this[_0x77fc[348]][args[_0x77fc[339]]]) {
        this[_0x77fc[348]][args[_0x77fc[339]]] = new Client(args[_0x77fc[339]]);
      }
      if (args[_0x77fc[1168]](_0x77fc[463])) {
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[463]] = args[_0x77fc[463]];
        if (args[_0x77fc[1168]](_0x77fc[808])) {
          this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[468]] = args[_0x77fc[808]];
        }
      }
      if (args[_0x77fc[1168]](_0x77fc[1715])) {
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[467]] = args[_0x77fc[1715]];
      }
      if (args[_0x77fc[1168]](_0x77fc[442])) {
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[442]] = args[_0x77fc[442]];
      }
      if (void 0 !== args[_0x77fc[311]]) {
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[333]] = args[_0x77fc[311]];
      }
      if (args[_0x77fc[1168]](_0x77fc[466]) && true === args[_0x77fc[466]]) {
        this[_0x77fc[351]][_0x77fc[308]](args[_0x77fc[339]]);
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[466]] = true;
      }
      var artistTrack = args[_0x77fc[1168]](_0x77fc[1743]) && true === args[_0x77fc[1743]];
      if (!artistTrack) {
        var _0xe1a7x8 = this[_0x77fc[1744]](args[_0x77fc[339]], args[_0x77fc[355]], args[_0x77fc[442]]);
        this[_0x77fc[338]][_0x77fc[12]].CID(args[_0x77fc[339]])[_0x77fc[1745]](this[_0x77fc[1698]](args[_0x77fc[339]]));
        if (args[_0x77fc[1168]](_0x77fc[1746]) && true === args[_0x77fc[1746]]) {
          this[_0x77fc[350]][_0x77fc[308]](args[_0x77fc[339]]);
        }
        if (!(_0xe1a7x8 || !this[_0x77fc[338]][_0x77fc[150]][_0x77fc[1747]] && this[_0x77fc[422]])) {
          this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1748]]();
        }
      }
      this[_0x77fc[1721]](args[_0x77fc[339]], artistTrack);
      break;
    case 3:
      if (args[_0x77fc[339]] === this[_0x77fc[339]] && 1 === args[_0x77fc[336]]) {
        if (!this[_0x77fc[336]]) {
          this[_0x77fc[1026]](1);
        }
        break;
      }
      if (args[_0x77fc[336]] <= 1) {
        if (2 === this[_0x77fc[423]] && this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[1168]](_0x77fc[442])) {
          var indexLookupKey = this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[442]];
          artistTrack = this[_0x77fc[338]][_0x77fc[12]][_0x77fc[647]][indexLookupKey][_0x77fc[315]](args[_0x77fc[339]]);
          this[_0x77fc[338]][_0x77fc[12]][_0x77fc[647]][indexLookupKey][_0x77fc[928]](artistTrack, 1);
        }
        if ((artistTrack = this[_0x77fc[349]][_0x77fc[315]](args[_0x77fc[339]])) > -1) {
          this[_0x77fc[349]][_0x77fc[928]](artistTrack, 1);
        }
        if ((artistTrack = this[_0x77fc[350]][_0x77fc[315]](args[_0x77fc[339]])) > -1) {
          this[_0x77fc[350]][_0x77fc[928]](artistTrack, 1);
        }
        this[_0x77fc[338]][_0x77fc[12]].CID(args[_0x77fc[339]])[_0x77fc[1749]]();
        if (!(this[_0x77fc[338]][_0x77fc[51]] || this[_0x77fc[360]] !== args[_0x77fc[339]])) {
          this[_0x77fc[1167]]();
        }
      } else {
        if (2 === args[_0x77fc[336]] && this[_0x77fc[1720]](args[_0x77fc[339]])) {
          this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[1750]] + _0x77fc[1555] + this[_0x77fc[1698]](args[_0x77fc[339]]) + _0x77fc[1555] + i18n[_0x77fc[1751]] + _0x77fc[1723]);
        }
      }
      if (1 === args[_0x77fc[336]] && this[_0x77fc[1720]](args[_0x77fc[339]])) {
        this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + this[_0x77fc[1698]](args[_0x77fc[339]]) + _0x77fc[1555] + i18n[_0x77fc[1752]] + _0x77fc[1723]);
      }
      if (!(0 !== args[_0x77fc[336]] && 2 !== args[_0x77fc[336]])) {
        delete this[_0x77fc[351]][args[_0x77fc[339]]];
        delete this[_0x77fc[348]][args[_0x77fc[339]]];
      }
      break;
    case 4:
      if (this[_0x77fc[1706]](), objSize(args[_0x77fc[1714]]) > 0 && this[_0x77fc[1713]](args, true), objSize(args[_0x77fc[349]]) > 0) {
        var name;
        for (name in args[_0x77fc[349]]) {
          var id = parseInt(name);
          if (!isNaN(id)) {
            this[_0x77fc[1744]](id, args[_0x77fc[349]][name][_0x77fc[355]], args[_0x77fc[349]][name][_0x77fc[442]]);
            if (void 0 === this[_0x77fc[348]][id]) {
              this[_0x77fc[348]][id] = new Client(id);
            }
            if (void 0 !== args[_0x77fc[349]][name][_0x77fc[311]]) {
              this[_0x77fc[348]][id][_0x77fc[333]] = args[_0x77fc[349]][name][_0x77fc[311]];
            }
            if (args[_0x77fc[349]][name][_0x77fc[1168]](_0x77fc[1746]) && true === args[_0x77fc[349]][name][_0x77fc[1746]]) {
              this[_0x77fc[350]][_0x77fc[308]](id);
            }
            if (args[_0x77fc[349]][name][_0x77fc[1168]](_0x77fc[466]) && true === args[_0x77fc[349]][name][_0x77fc[466]]) {
              this[_0x77fc[348]][id][_0x77fc[466]] = true;
              this[_0x77fc[351]][_0x77fc[308]](id);
            }
            if (args[_0x77fc[349]][name][_0x77fc[1168]](_0x77fc[463])) {
              this[_0x77fc[348]][id][_0x77fc[463]] = args[_0x77fc[349]][name][_0x77fc[463]];
              if (args[_0x77fc[349]][name][_0x77fc[1168]](_0x77fc[808])) {
                this[_0x77fc[348]][id][_0x77fc[468]] = args[_0x77fc[349]][name][_0x77fc[808]];
              }
            }
            if (args[_0x77fc[349]][name][_0x77fc[1168]](_0x77fc[1715])) {
              this[_0x77fc[348]][id][_0x77fc[467]] = args[_0x77fc[349]][name][_0x77fc[1715]];
            }
            if (args[_0x77fc[349]][name][_0x77fc[1168]](_0x77fc[442])) {
              this[_0x77fc[348]][id][_0x77fc[442]] = args[_0x77fc[349]][name][_0x77fc[442]];
            }
            this[_0x77fc[338]][_0x77fc[12]].CID(id)[_0x77fc[1745]](this[_0x77fc[1698]](id));
          }
        }
        this[_0x77fc[338]][_0x77fc[50]] = false;
        this[_0x77fc[1124]]();
        this[_0x77fc[422]] = _0x77fc[1753] == args[_0x77fc[50]];
        if (this[_0x77fc[422]]) {
          if (!this[_0x77fc[336]]) {
            this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[1754]] + _0x77fc[1719]);
          }
          this[_0x77fc[338]][_0x77fc[1111]](9);
          this[_0x77fc[338]][_0x77fc[1009]](true, true);
        }
        this[_0x77fc[1756]](args[_0x77fc[1755]] || this[_0x77fc[422]]);
        this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1748]]();
      } else {
        /** @type {number} */
        var artistTrack = 6;
        if (this[_0x77fc[357]] && this[_0x77fc[357]][_0x77fc[1168]](_0x77fc[1080]) && this[_0x77fc[357]][_0x77fc[1080]] <= 7) {
          artistTrack = Math[_0x77fc[1148]](1, this[_0x77fc[357]][_0x77fc[1080]] - 1);
        }
        this[_0x77fc[338]][_0x77fc[12]][_0x77fc[643]](artistTrack);
        this[_0x77fc[1756]](false);
      }
      this[_0x77fc[358]] = args[_0x77fc[358]];
      this[_0x77fc[439]] = this[_0x77fc[338]][_0x77fc[1129]](args[_0x77fc[1001]]);
      break;
    case 5:
      if (this[_0x77fc[1757]](args)) {
        return;
      }
      if (this[_0x77fc[353]] = [], this[_0x77fc[338]][_0x77fc[130]] = args[_0x77fc[1758]], this[_0x77fc[338]][_0x77fc[12]][_0x77fc[634]] = 1 === args[_0x77fc[1758]], 0 === this[_0x77fc[338]][_0x77fc[130]]) {
        /** @type {number} */
        var indexLookupKey = 0;
        for (; indexLookupKey < this[_0x77fc[338]][_0x77fc[12]][_0x77fc[631]]; indexLookupKey++) {
          this[_0x77fc[338]][_0x77fc[12]][_0x77fc[629]][indexLookupKey][_0x77fc[6]][_0x77fc[166]](this[_0x77fc[338]][_0x77fc[41]]);
        }
      }
      this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1748]]();
      this[_0x77fc[439]] = this[_0x77fc[338]][_0x77fc[1129]](args[_0x77fc[1001]]);
      if (args[_0x77fc[1168]](_0x77fc[431])) {
        this[_0x77fc[440]] = args[_0x77fc[431]][_0x77fc[312]];
        this[_0x77fc[1116]](_0x77fc[1759], _0x77fc[1760] + this[_0x77fc[440]] + _0x77fc[1761] + args[_0x77fc[431]][_0x77fc[333]] + _0x77fc[1762] + args[_0x77fc[431]][_0x77fc[1763]] + _0x77fc[1764]);
      } else {
        /** @type {null} */
        this[_0x77fc[440]] = null;
      }
      if (this[_0x77fc[336]]) {
        if (this[_0x77fc[440]]) {
          this[_0x77fc[338]][_0x77fc[12]][_0x77fc[634]] = false;
        }
        this[_0x77fc[1025]]();
      } else {
        /** @type {number} */
        this[_0x77fc[338]][_0x77fc[55]] = 0;
        this[_0x77fc[338]][_0x77fc[50]] = false;
        if (this[_0x77fc[338]][_0x77fc[67]]) {
          clearInterval(this[_0x77fc[338]][_0x77fc[141]]);
          this[_0x77fc[338]][_0x77fc[67]] = false;
        }
        this[_0x77fc[338]][_0x77fc[137]] = alea(this[_0x77fc[439]]);
        this[_0x77fc[338]][_0x77fc[135]] = alea(this[_0x77fc[439]]);
        this[_0x77fc[338]][_0x77fc[138]] = this[_0x77fc[439]];
        this[_0x77fc[338]][_0x77fc[980]]();
        this[_0x77fc[400]] = false;
        this[_0x77fc[1765]](0);
        this[_0x77fc[1756]](true);
        this[_0x77fc[422]] = true;
      }
      if (2 === this[_0x77fc[423]] && _0x77fc[1521] == typeof ga) {
        ga(_0x77fc[1522], {
          hitType : _0x77fc[1523],
          eventCategory : _0x77fc[1650],
          eventAction : _0x77fc[1021]
        });
      }
      this[_0x77fc[358]] = args[_0x77fc[358]];
      break;
    case 6:
      if (args[_0x77fc[1168]](_0x77fc[1766]) && !this[_0x77fc[1168]](_0x77fc[1767])) {
        this[_0x77fc[1767]] = true;
        var artistTrack = _0x77fc[1768] + i18n[_0x77fc[1769]] + _0x77fc[1770] + trans(i18n[_0x77fc[1771]], {
          chReq : 2
        }) + _0x77fc[1119];
        artistTrack = artistTrack + (_0x77fc[1772] + i18n[_0x77fc[1773]] + _0x77fc[1697]);
        this[_0x77fc[1116]](_0x77fc[46], artistTrack);
        break;
      }
      if (args[_0x77fc[971]] = args[_0x77fc[971]][_0x77fc[1619]](/\\"/g, _0x77fc[1692]), this[_0x77fc[332]] && (args[_0x77fc[971]] = this[_0x77fc[1774]](args)), args[_0x77fc[720]] && 1 === args[_0x77fc[720]]) {
        this[_0x77fc[1775]]();
      }
      let explicitCbMaybe = this[_0x77fc[1776]](args[_0x77fc[339]]);
      if (args[_0x77fc[1168]](_0x77fc[1777]) && null !== args[_0x77fc[1777]] && args[_0x77fc[1777]][_0x77fc[237]]) {
        if (explicitCbMaybe && 0 !== explicitCbMaybe[_0x77fc[237]]) {
          Array[_0x77fc[170]][_0x77fc[308]][_0x77fc[1778]](explicitCbMaybe, args[_0x77fc[1777]]);
        } else {
          explicitCbMaybe = args[_0x77fc[1777]];
        }
      }
      if (this[_0x77fc[459]][_0x77fc[863]] && args[_0x77fc[339]] !== this[_0x77fc[339]] && args[_0x77fc[339]] > 0) {
        this[_0x77fc[373]][_0x77fc[1779]] = _0x77fc[1780];
      }
      this[_0x77fc[1116]](this[_0x77fc[1698]](args[_0x77fc[339]]), args[_0x77fc[971]], explicitCbMaybe);
      break;
    case 7:
      if (args[_0x77fc[339]] === this[_0x77fc[339]]) {
        if (!this[_0x77fc[422]]) {
          break;
        }
        if (3 === this[_0x77fc[423]]) {
          this[_0x77fc[338]][_0x77fc[153]][_0x77fc[1781]]();
          break;
        }
        this[_0x77fc[338]][_0x77fc[1111]](9);
        this[_0x77fc[338]][_0x77fc[50]] = false;
        /** @type {null} */
        this[_0x77fc[338]][_0x77fc[53]] = null;
        this[_0x77fc[1124]]();
        this[_0x77fc[400]] = true;
        this[_0x77fc[338]][_0x77fc[1009]](true, true);
        this[_0x77fc[338]][_0x77fc[854]]();
      } else {
        if (this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]][_0x77fc[1168]](args[_0x77fc[339]])) {
          this[_0x77fc[353]][_0x77fc[308]](args[_0x77fc[339]]);
          if (!(this[_0x77fc[338]][_0x77fc[51]] || this[_0x77fc[360]] !== args[_0x77fc[339]])) {
            this[_0x77fc[1167]]();
          }
          var _0xe1a7x3b = this[_0x77fc[338]][_0x77fc[12]].CID(args[_0x77fc[339]]);
          _0xe1a7x3b[_0x77fc[659]][_0x77fc[386]][_0x77fc[385]](_0x77fc[1782]);
          if (args[_0x77fc[6]]) {
            this[_0x77fc[352]][args[_0x77fc[339]]] = args[_0x77fc[338]];
          } else {
            /** @type {number} */
            this[_0x77fc[352]][args[_0x77fc[339]]] = 0;
          }
          _0xe1a7x3b[_0x77fc[6]][_0x77fc[1783]]();
        }
      }
      break;
    case 8:
      if (void 0 === this[_0x77fc[348]][args[_0x77fc[339]]]) {
        this[_0x77fc[348]][args[_0x77fc[339]]] = new Client(args[_0x77fc[339]]);
      }
      this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[333]] = args[_0x77fc[311]];
      if (args[_0x77fc[339]] === this[_0x77fc[339]] && args[_0x77fc[1168]](_0x77fc[673])) {
        this[_0x77fc[341]] = args[_0x77fc[673]];
      }
      var command_codes = this;
      /**
       * @param {?} data
       * @return {undefined}
       */
      this[_0x77fc[425]][_0x77fc[888]] = function(data) {
        command_codes[_0x77fc[1478]](data);
      };
      this[_0x77fc[425]][_0x77fc[1785]](this[_0x77fc[323]] + _0x77fc[1784] + this[_0x77fc[341]]);
      if (this[_0x77fc[341]] < 2 && this[_0x77fc[338]][_0x77fc[41]] >= 1E3) {
        this[_0x77fc[338]][_0x77fc[166]](0);
      }
      if (args[_0x77fc[1168]](_0x77fc[463])) {
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[463]] = args[_0x77fc[463]];
        if (args[_0x77fc[1168]](_0x77fc[808])) {
          this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[468]] = args[_0x77fc[808]];
        }
      }
      if (args[_0x77fc[1168]](_0x77fc[1715])) {
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[467]] = args[_0x77fc[1715]];
      }
      if (args[_0x77fc[1168]](_0x77fc[466]) && true === args[_0x77fc[466]]) {
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[466]] = true;
        this[_0x77fc[351]][_0x77fc[308]](parseInt(args[_0x77fc[339]]));
      }
      if (args[_0x77fc[339]] in this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]]) {
        this[_0x77fc[338]][_0x77fc[12]].CID(args[_0x77fc[339]])[_0x77fc[1745]](this[_0x77fc[1698]](args[_0x77fc[339]]));
      }
      if (void 0 !== this[_0x77fc[421]][args[_0x77fc[339]]]) {
        if (this[_0x77fc[421]][args[_0x77fc[339]]][0] >= this[_0x77fc[338]][_0x77fc[136]]() - 1E3) {
          this[_0x77fc[1721]](args[_0x77fc[339]], this[_0x77fc[421]][args[_0x77fc[339]]][1]);
        }
        delete this[_0x77fc[421]][args[_0x77fc[339]]];
      }
      break;
    case 9:
      if (this[_0x77fc[400]]) {
        /** @type {number} */
        indexLookupKey = 0;
        for (; indexLookupKey < this[_0x77fc[349]][_0x77fc[237]]; indexLookupKey++) {
          if (this[_0x77fc[349]][indexLookupKey] !== this[_0x77fc[339]] && -1 === this[_0x77fc[353]][_0x77fc[315]](this[_0x77fc[349]][indexLookupKey])) {
            this[_0x77fc[361]] = this[_0x77fc[349]][indexLookupKey];
            break;
          }
        }
      } else {
        if (2 === this[_0x77fc[423]]) {
          /** @type {number} */
          this[_0x77fc[338]][_0x77fc[113]] = 1;
          this[_0x77fc[338]][_0x77fc[1786]] = true;
        } else {
          if (3 !== this[_0x77fc[423]]) {
            this[_0x77fc[338]][_0x77fc[1009]](false, true);
          }
        }
        this[_0x77fc[1787]]();
        this[_0x77fc[361]] = this[_0x77fc[339]];
        this[_0x77fc[1124]]();
        if (_0x77fc[1521] == typeof ga) {
          ga(_0x77fc[1522], {
            hitType : _0x77fc[1523],
            eventCategory : _0x77fc[1788],
            eventAction : _0x77fc[1789]
          });
        }
      }
      /** @type {number} */
      this[_0x77fc[352]][this[_0x77fc[361]]] = 1;
      if (this[_0x77fc[361]] in this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]]) {
        this[_0x77fc[338]][_0x77fc[12]].CID(this[_0x77fc[361]])[_0x77fc[6]][_0x77fc[1783]]();
      }
      if (2 === this[_0x77fc[423]]) {
        this[_0x77fc[1790]](args[_0x77fc[972]]);
      } else {
        this[_0x77fc[1791]](args[_0x77fc[972]][_0x77fc[380]], false);
      }
      this[_0x77fc[359]] = args[_0x77fc[972]][_0x77fc[358]];
      this[_0x77fc[398]][_0x77fc[1792]] = _0x77fc[1793] + this[_0x77fc[359]];
      if (!this[_0x77fc[336]]) {
        this[_0x77fc[1756]](false);
        this[_0x77fc[338]][_0x77fc[854]]();
      }
      this[_0x77fc[422]] = false;
      break;
    case 10:
      this[_0x77fc[1794]](args[_0x77fc[853]]);
      break;
    case 12:
      var indexLookupKey;
      for (indexLookupKey in this[_0x77fc[355]] = args[_0x77fc[355]], _0x77fc[46] !== this[_0x77fc[354]] && 0 === args[_0x77fc[1795]] && (this[_0x77fc[367]][_0x77fc[419]] = _0x77fc[46], this[_0x77fc[1168]](_0x77fc[1767]) && delete this[_0x77fc[1767]], this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[1796]] + _0x77fc[1555] + args[_0x77fc[311]] + _0x77fc[1797])), this[_0x77fc[354]] = args[_0x77fc[354]], args[_0x77fc[1168]](_0x77fc[1743]) && 1 === args[_0x77fc[1743]] ? (this[_0x77fc[1026]](1), 
      this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[1798]] + _0x77fc[1719])) : this[_0x77fc[336]] && this[_0x77fc[1799]](1), this[_0x77fc[362]] = args[_0x77fc[1168]](_0x77fc[611]) && args[_0x77fc[611]] === this[_0x77fc[339]], this[_0x77fc[1800]](args[_0x77fc[354]], args[_0x77fc[338]], args[_0x77fc[311]]), this[_0x77fc[338]][_0x77fc[12]][_0x77fc[634]] = false, this[_0x77fc[423]] = args[_0x77fc[145]][_0x77fc[732]], this[_0x77fc[338]][_0x77fc[12]][_0x77fc[647]]) {
        delete this[_0x77fc[338]][_0x77fc[12]][_0x77fc[647]][indexLookupKey];
      }
      this[_0x77fc[1801]](args);
      if (!this[_0x77fc[336]] && args[_0x77fc[1168]](_0x77fc[1755])) {
        this[_0x77fc[1765]](args[_0x77fc[1755]]);
        this[_0x77fc[1756]](true);
      } else {
        this[_0x77fc[1765]](0);
      }
      break;
    case 13:
      if (this[_0x77fc[338]][_0x77fc[55]] || this[_0x77fc[338]][_0x77fc[51]]) {
        return;
      }
      this[_0x77fc[338]][_0x77fc[1175]](args[_0x77fc[720]]);
      break;
    case 14:
      if (!args[_0x77fc[532]]) {
        break;
      }
      this[_0x77fc[338]][_0x77fc[156]][_0x77fc[1802]](args[_0x77fc[358]], this[_0x77fc[339]], this);
      break;
    case 15:
      this[_0x77fc[1791]](args[_0x77fc[972]][_0x77fc[380]], true);
      break;
    case 16:
      if (objSize(args[_0x77fc[1714]]) > 0) {
        this[_0x77fc[1713]](args, false);
      } else {
        this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[1803]] + _0x77fc[1719]);
      }
      break;
    case 17:
      if (!(this[_0x77fc[338]][_0x77fc[51]] || this[_0x77fc[338]][_0x77fc[55]])) {
        this[_0x77fc[338]][_0x77fc[1183]]();
      }
      break;
    case 18:
      this[_0x77fc[1801]](args);
      break;
    case 19:
      if (0 !== args[_0x77fc[312]]) {
        this[_0x77fc[338]][_0x77fc[156]][_0x77fc[736]] = this[_0x77fc[1804]][_0x77fc[430]](this);
        this[_0x77fc[338]][_0x77fc[156]][_0x77fc[1805]](args[_0x77fc[312]], this);
      } else {
        this[_0x77fc[338]][_0x77fc[156]][_0x77fc[1808]](this, _0x77fc[1806] + args[_0x77fc[1807]]);
      }
      break;
    case 20:
      if (args[_0x77fc[339]] === this[_0x77fc[339]]) {
        this[_0x77fc[442]] = args[_0x77fc[442]];
        this[_0x77fc[1809]](this[_0x77fc[338]][_0x77fc[12]][_0x77fc[646]]);
      } else {
        if (void 0 !== this[_0x77fc[348]][args[_0x77fc[339]]]) {
          var indexLookupKey = this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[442]];
          this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[442]] = args[_0x77fc[442]];
          var artistTrack = this[_0x77fc[338]][_0x77fc[12]][_0x77fc[647]][indexLookupKey][_0x77fc[315]](args[_0x77fc[339]]);
          this[_0x77fc[338]][_0x77fc[12]][_0x77fc[647]][indexLookupKey][_0x77fc[928]](artistTrack, 1);
          if (args[_0x77fc[442]] in this[_0x77fc[338]][_0x77fc[12]][_0x77fc[647]]) {
            this[_0x77fc[338]][_0x77fc[12]][_0x77fc[647]][args[_0x77fc[442]]][_0x77fc[308]](args[_0x77fc[339]]);
          }
          this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1748]]();
        }
      }
      break;
    case 21:
      break;
    case 23:
      if (!((id = this[_0x77fc[356]][args[_0x77fc[355]]]) in this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]])) {
        break;
      }
      var _0xe1a7x40 = new Replayer(this[_0x77fc[338]][_0x77fc[12]].CID(id)[_0x77fc[6]]);
      _0xe1a7x40[_0x77fc[26]] = this[_0x77fc[338]][_0x77fc[26]];
      this[_0x77fc[348]][id][_0x77fc[464]] = _0xe1a7x40;
      /** @type {number} */
      args[_0x77fc[6]] = 3.3;
      /** @type {number} */
      args[_0x77fc[1046]] = 0;
      /** @type {number} */
      args[_0x77fc[971]] = 6553600;
      args[_0x77fc[1001]] = this[_0x77fc[439]];
      _0xe1a7x40[_0x77fc[972]][_0x77fc[944]] = args;
      _0xe1a7x40[_0x77fc[1810]]();
      if (this[_0x77fc[458]]) {
        _0xe1a7x40[_0x77fc[989]](this[_0x77fc[338]][_0x77fc[158]][_0x77fc[177]], this[_0x77fc[338]][_0x77fc[158]][_0x77fc[988]][_0x77fc[235]]);
        /** @type {number} */
        _0xe1a7x40[_0x77fc[55]] = 6;
      }
      _0xe1a7x40[_0x77fc[1008]]();
      if (args[_0x77fc[1044]]) {
        this[_0x77fc[338]][_0x77fc[12]].CID(id)[_0x77fc[6]][_0x77fc[264]] = args[_0x77fc[1044]];
      }
      if (!args[_0x77fc[1044]] && args[_0x77fc[940]] >= 1E3) {
        /** @type {number} */
        args[_0x77fc[940]] = 0;
      }
      this[_0x77fc[338]][_0x77fc[12]].CID(id)[_0x77fc[6]][_0x77fc[166]](args[_0x77fc[940]], args[_0x77fc[1042]]);
      break;
    case 25:
      if (args[_0x77fc[339]] in this[_0x77fc[348]]) {
        /** @type {null} */
        this[_0x77fc[348]][args[_0x77fc[339]]][_0x77fc[464]] = null;
        if (args[_0x77fc[339]] in this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]]) {
          this[_0x77fc[338]][_0x77fc[12]].CID(args[_0x77fc[339]])[_0x77fc[6]][_0x77fc[996]]();
        }
      }
      break;
    case 26:
      if (this[_0x77fc[338]][_0x77fc[153]][_0x77fc[997]](this[_0x77fc[338]][_0x77fc[153]].LOADING), this[_0x77fc[334]] = true, this[_0x77fc[1227]](), args[_0x77fc[380]]) {
        this[_0x77fc[459]][_0x77fc[864]] = args[_0x77fc[1168]](_0x77fc[842]) ? args[_0x77fc[842]] : 0;
        if (args[_0x77fc[1168]](_0x77fc[465]) && args[_0x77fc[465]]) {
          this[_0x77fc[348]][this[_0x77fc[339]]][_0x77fc[465]] = true;
        }
        this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[1811]] + _0x77fc[1555] + this[_0x77fc[1698]](this[_0x77fc[339]]) + _0x77fc[1812]);
      } else {
        this[_0x77fc[332]] = false;
        this[_0x77fc[1740]](args[_0x77fc[311]][_0x77fc[311]]);
        this[_0x77fc[338]][_0x77fc[153]][_0x77fc[461]](i18n[_0x77fc[1813]], 1);
        let artistTrack = trans(i18n[_0x77fc[1814]], {
          name : _0x77fc[1815] + args[_0x77fc[311]][_0x77fc[311]] + _0x77fc[1210]
        });
        this[_0x77fc[1817]](artistTrack, _0x77fc[1816]);
      }
      break;
    case 27:
      this[_0x77fc[1818]] = args[_0x77fc[611]];
      if (args[_0x77fc[611]] === this[_0x77fc[339]]) {
        this[_0x77fc[1116]](_0x77fc[46], (this[_0x77fc[332]] ? _0x77fc[1819] + this[_0x77fc[418]] + _0x77fc[1820] : _0x77fc[46]) + _0x77fc[1716] + i18n[_0x77fc[1821]] + _0x77fc[1719]);
        this[_0x77fc[362]] = true;
      }
      break;
    case 28:
      this[_0x77fc[409]][_0x77fc[1822]](args);
      break;
    case 29:
      this[_0x77fc[338]][_0x77fc[156]][_0x77fc[1823]]();
      var ATTRIBUTE_REPEAT = this[_0x77fc[338]][_0x77fc[156]][_0x77fc[730]];
      if (ATTRIBUTE_REPEAT && this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[1001]][_0x77fc[1231]](args[_0x77fc[358]])) {
        args[_0x77fc[972]] = ATTRIBUTE_REPEAT;
      } else {
        /** @type {number} */
        args[_0x77fc[972]] = 0;
      }
      this[_0x77fc[1499]](JSON[_0x77fc[1520]](args));
      break;
    case 30:
      this[_0x77fc[345]] = args;
      break;
    case 31:
      if (!this[_0x77fc[338]][_0x77fc[303]][_0x77fc[1824]]()) {
        return;
      }
      if (args[_0x77fc[1168]](_0x77fc[944])) {
        this[_0x77fc[338]][_0x77fc[303]][_0x77fc[1825]](args[_0x77fc[944]]);
      }
      if (args[_0x77fc[1168]](_0x77fc[532])) {
        this[_0x77fc[338]][_0x77fc[303]][_0x77fc[841]] = true;
        this[_0x77fc[338]][_0x77fc[303]][_0x77fc[842]] = args[_0x77fc[532]];
      }
      if (args[_0x77fc[1168]](_0x77fc[720])) {
        this[_0x77fc[338]][_0x77fc[303]][_0x77fc[837]] = args[_0x77fc[720]];
        this[_0x77fc[338]][_0x77fc[303]][_0x77fc[1826]]();
      }
      break;
    case 32:
      let GET_AUTH_URL_TIMEOUT = args[_0x77fc[1827]];
      let numKeysDeleted = args[_0x77fc[532]];
      this[_0x77fc[459]][_0x77fc[462]](numKeysDeleted, GET_AUTH_URL_TIMEOUT);
      break;
    case 33:
      if (console[_0x77fc[1828]](args), args[_0x77fc[1168]](_0x77fc[1766])) {
        return void(1 === args[_0x77fc[1766]] && this[_0x77fc[1116]](_0x77fc[1829], _0x77fc[1830]));
      }
      const change_btn = (hide) => {
        return _0x77fc[730] != typeof hide ? _0x77fc[46] : hide[_0x77fc[1635]](0)[_0x77fc[1631]]() + hide[_0x77fc[310]](1);
      };
      if (args[_0x77fc[1168]](_0x77fc[842])) {
        this[_0x77fc[1116]](_0x77fc[1831], _0x77fc[1832] + args[_0x77fc[1833]] + _0x77fc[1834] + args[_0x77fc[311]] + _0x77fc[1697]);
      } else {
        let _0xe1a7x7 = _0x77fc[1815] + args[_0x77fc[972]][0][_0x77fc[1170]](2) + _0x77fc[1770] + change_btn(args[_0x77fc[972]][1]);
        if (_0x77fc[175] != args[_0x77fc[972]][3]) {
          _0xe1a7x7 = _0xe1a7x7 + (_0x77fc[1835] + args[_0x77fc[972]][2][_0x77fc[1170]](2) + _0x77fc[1770] + change_btn(args[_0x77fc[972]][3]));
        }
        this[_0x77fc[1116]](_0x77fc[1836], _0x77fc[1832] + args[_0x77fc[1833]] + _0x77fc[1834] + args[_0x77fc[311]] + _0x77fc[1837] + _0xe1a7x7);
      }
      if (args[_0x77fc[1068]]) {
        let value = args[_0x77fc[1068]][_0x77fc[1838]] - args[_0x77fc[1068]][_0x77fc[1839]];
        let _0xe1a7x8 = (value > 0 ? _0x77fc[1840] : _0x77fc[46]) + Math[_0x77fc[1196]](value)[_0x77fc[1170]](0);
        let _0xe1a7x12 = args[_0x77fc[1068]][_0x77fc[1841]];
        let _0xe1a7x13 = _0x77fc[46];
        if (false === args[_0x77fc[1068]][_0x77fc[1743]]) {
          _0xe1a7x13 = _0x77fc[1842] + args[_0x77fc[1068]][_0x77fc[380]][0] + _0x77fc[1843] + args[_0x77fc[1068]][_0x77fc[380]][1] + _0x77fc[1844];
        }
        let _0xe1a7x1e = _0x77fc[1845] + (value >= 0 ? _0x77fc[1846] : _0x77fc[1847]) + _0x77fc[1761] + _0xe1a7x8 + _0x77fc[1119];
        this[_0x77fc[1116]](_0x77fc[1848], _0xe1a7x1e + _0x77fc[1849] + args[_0x77fc[1068]][_0x77fc[1838]][_0x77fc[1170]](0) + _0x77fc[1850] + _0xe1a7x12[_0x77fc[1170]](0) + _0xe1a7x13);
      }
      break;
    case 97:
      this[_0x77fc[1851]](args[_0x77fc[600]]);
      break;
    case 98:
      this[_0x77fc[337]][_0x77fc[1852]]();
      break;
    case 99:
      this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1815] + (this[_0x77fc[338]][_0x77fc[136]]() - this[_0x77fc[424]]) + _0x77fc[1853]);
      break;
    case 100:
      alert(i18n[_0x77fc[1854]] + _0x77fc[1855]);
      this[_0x77fc[367]][_0x77fc[419]] = _0x77fc[46];
      this[_0x77fc[1116]](_0x77fc[1117] + i18n[_0x77fc[1703]] + _0x77fc[1119], trans(i18n[_0x77fc[1856]], {
        key : _0x77fc[1857]
      }) + _0x77fc[1858]);
      break;
    case 101:
      alert(i18n[_0x77fc[1859]]);
      this[_0x77fc[1646]](_0x77fc[527]);
      break;
    default:
      console[_0x77fc[1828]](_0x77fc[1860]);
  }
}, Live[_0x77fc[170]][_0x77fc[1801]] = function(canCreateDiscussions) {
  this[_0x77fc[1818]] = canCreateDiscussions[_0x77fc[611]];
  this[_0x77fc[357]] = canCreateDiscussions[_0x77fc[145]];
  if (canCreateDiscussions[_0x77fc[1168]](_0x77fc[1620])) {
    this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1815] + i18n[_0x77fc[1861]] + _0x77fc[1862] + this[_0x77fc[1698]](canCreateDiscussions[_0x77fc[1620]]) + _0x77fc[1863]);
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1565]) && canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1563])) {
    this[_0x77fc[338]][_0x77fc[116]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1563]];
    this[_0x77fc[338]][_0x77fc[122]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1565]];
  } else {
    canCreateDiscussions[_0x77fc[145]][_0x77fc[1563]] = this[_0x77fc[338]][_0x77fc[116]] = this[_0x77fc[338]][_0x77fc[115]];
    canCreateDiscussions[_0x77fc[145]][_0x77fc[1565]] = this[_0x77fc[338]][_0x77fc[122]] = this[_0x77fc[338]][_0x77fc[121]];
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1580])) {
    this[_0x77fc[338]][_0x77fc[302]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1580]][_0x77fc[1514]](_0x77fc[1503]);
  } else {
    canCreateDiscussions[_0x77fc[145]][_0x77fc[1580]] = this[_0x77fc[338]][_0x77fc[302]] = null;
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1864])) {
    this[_0x77fc[338]][_0x77fc[117]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1864]];
  } else {
    canCreateDiscussions[_0x77fc[145]][_0x77fc[1864]] = this[_0x77fc[338]][_0x77fc[117]] = 10;
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1574])) {
    this[_0x77fc[438]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1574]];
  } else {
    this[_0x77fc[438]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1574]] = 120;
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[445])) {
    this[_0x77fc[445]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[445]];
    if (0 !== this[_0x77fc[445]]) {
      this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1127]](-1);
      /** @type {number} */
      this[_0x77fc[360]] = 0;
    }
  }
  this[_0x77fc[338]][_0x77fc[144]][_0x77fc[146]](canCreateDiscussions[_0x77fc[145]], this[_0x77fc[338]][_0x77fc[145]][0]);
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1516]) && canCreateDiscussions[_0x77fc[145]][_0x77fc[1516]]) {
    this[_0x77fc[436]] = true;
  } else {
    this[_0x77fc[436]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1516]] = false;
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[518]) && canCreateDiscussions[_0x77fc[145]][_0x77fc[518]]) {
    this[_0x77fc[437]] = true;
  } else {
    this[_0x77fc[437]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[518]] = false;
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1865])) {
    this[_0x77fc[338]][_0x77fc[140]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1865]];
    if (0 === canCreateDiscussions[_0x77fc[145]][_0x77fc[1865]]) {
      /** @type {number} */
      this[_0x77fc[338]][_0x77fc[145]][0][_0x77fc[753]] = 1;
    } else {
      /** @type {number} */
      this[_0x77fc[338]][_0x77fc[145]][0][_0x77fc[753]] = 0;
    }
  } else {
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[140]] = 1E8;
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1866])) {
    this[_0x77fc[1867]](canCreateDiscussions[_0x77fc[145]][_0x77fc[1866]], false);
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1868])) {
    this[_0x77fc[338]][_0x77fc[133]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1868]];
  } else {
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[133]] = 1E3;
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1869])) {
    this[_0x77fc[338]][_0x77fc[132]] = 100 * canCreateDiscussions[_0x77fc[145]][_0x77fc[1869]];
  } else {
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[132]] = 100;
  }
  if (canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[1870])) {
    this[_0x77fc[456]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[1870]];
  } else {
    /** @type {number} */
    this[_0x77fc[456]] = 0;
  }
  if (2 === this[_0x77fc[423]]) {
    if (canCreateDiscussions[_0x77fc[1168]](_0x77fc[442])) {
      this[_0x77fc[442]] = canCreateDiscussions[_0x77fc[442]];
    }
    if (canCreateDiscussions[_0x77fc[1168]](_0x77fc[1871])) {
      this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1872]](canCreateDiscussions[_0x77fc[1871]]);
      this[_0x77fc[1809]](canCreateDiscussions[_0x77fc[1871]]);
    }
  }
  if (3 === this[_0x77fc[423]] && canCreateDiscussions[_0x77fc[145]][_0x77fc[1168]](_0x77fc[55])) {
    this[_0x77fc[441]] = canCreateDiscussions[_0x77fc[145]][_0x77fc[55]];
  }
}, Live[_0x77fc[170]][_0x77fc[1809]] = function(songsByAlbum) {
  var i;
  for (i in songsByAlbum) {
    var pathpart;
    if (!(i in this[_0x77fc[444]])) {
      pathpart = document[_0x77fc[383]](_0x77fc[1873]);
      this[_0x77fc[444]][i] = pathpart;
      pathpart[_0x77fc[1541]][_0x77fc[442]] = i;
      pathpart[_0x77fc[386]][_0x77fc[385]](_0x77fc[1874]);
      pathpart[_0x77fc[1322]](_0x77fc[1228], function(canCreateDiscussions) {
        this[_0x77fc[1876]](canCreateDiscussions[_0x77fc[1875]][_0x77fc[1541]][_0x77fc[442]]);
      }[_0x77fc[430]](this), false);
      this[_0x77fc[392]][_0x77fc[387]](pathpart);
    }
    (pathpart = this[_0x77fc[444]][i])[_0x77fc[419]] = songsByAlbum[i][_0x77fc[333]];
    pathpart[_0x77fc[173]][_0x77fc[1877]] = songsByAlbum[i][_0x77fc[467]];
    if (i === this[_0x77fc[442]]) {
      pathpart[_0x77fc[1501]] = true;
      this[_0x77fc[393]][_0x77fc[419]] = songsByAlbum[i][_0x77fc[333]];
      this[_0x77fc[393]][_0x77fc[173]][_0x77fc[1877]] = songsByAlbum[i][_0x77fc[467]];
    } else {
      pathpart[_0x77fc[1501]] = false;
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1876]] = function(interName) {
  if (this[_0x77fc[443]]) {
    return false;
  }
  var name;
  for (name in this[_0x77fc[443]] = true, setTimeout(function() {
    this[_0x77fc[443]] = false;
  }[_0x77fc[430]](this), 1E3), this[_0x77fc[444]]) {
    this[_0x77fc[444]][name][_0x77fc[1501]] = name === interName;
  }
  var artistTrack = _0x77fc[1878] + interName + _0x77fc[1648];
  this[_0x77fc[1499]](artistTrack);
}, Live[_0x77fc[170]][_0x77fc[1226]] = function() {
  var last_fret = this[_0x77fc[1462]](_0x77fc[50]);
  /** @type {null} */
  var result = null;
  if (_0x77fc[46] === last_fret || this[_0x77fc[365]]) {
    if (this[_0x77fc[1224]]) {
      result = this[_0x77fc[1224]];
      /** @type {null} */
      this[_0x77fc[1224]] = null;
    }
  } else {
    if (!this[_0x77fc[334]]) {
      return true;
    }
    result = {
      gameMode : parseInt(last_fret),
      mode : this[_0x77fc[1462]](_0x77fc[732]),
      rule : this[_0x77fc[1462]](_0x77fc[1879])
    };
    this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[1880]] + _0x77fc[1555] + i18n[_0x77fc[1881]] + _0x77fc[1719]);
    this[_0x77fc[365]] = true;
  }
  return !!result && (this[_0x77fc[1466]](false), this[_0x77fc[1026]](2), result[_0x77fc[1879]] && this[_0x77fc[338]][_0x77fc[144]][_0x77fc[148]](result[_0x77fc[1879]]), this[_0x77fc[338]][_0x77fc[58]] = parseInt(result[_0x77fc[732]]), this[_0x77fc[338]][_0x77fc[55]] = -1, this[_0x77fc[338]][_0x77fc[967]](result[_0x77fc[1557]], isNaN(this[_0x77fc[338]][_0x77fc[58]])), true);
}, Live[_0x77fc[170]][_0x77fc[1800]] = function(key, mmaPushNotificationsComponent, mmaFrontpagePriority) {
  if (_0x77fc[46] === key) {
    this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1882]);
  } else {
    if (_0x77fc[1812] === key) {
      this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1883]);
    } else {
      if (this[_0x77fc[415]] = mmaFrontpagePriority, this[_0x77fc[366]] = 0, this[_0x77fc[1025]](), this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1884]](), this[_0x77fc[356]] = {}, this[_0x77fc[349]] = Array(), this[_0x77fc[350]] = Array(), this[_0x77fc[351]] = Array(), this[_0x77fc[353]] = [], this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1125]](), this[_0x77fc[338]][_0x77fc[303]][_0x77fc[843]] = mmaPushNotificationsComponent, mmaPushNotificationsComponent) {
        if (!this[_0x77fc[1226]]() && key[_0x77fc[237]] < 15) {
          var animkey = _0x77fc[1885] + key;
          this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[1886]] + _0x77fc[1887] + animkey + _0x77fc[1119]);
        }
      } else {
        this[_0x77fc[365]] = false;
      }
      if (_0x77fc[527] != this[_0x77fc[354]] && _0x77fc[1521] == typeof ga) {
        ga(_0x77fc[1522], {
          hitType : _0x77fc[1523],
          eventCategory : _0x77fc[1788],
          eventAction : _0x77fc[1888]
        });
      }
      this[_0x77fc[459]][_0x77fc[1889]](key, mmaPushNotificationsComponent, mmaFrontpagePriority);
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1794]] = function(global) {
  /** @type {!Array} */
  var zeroSizeMaxes = [0, _0x77fc[1890], 0, _0x77fc[1891], _0x77fc[1892], 0, _0x77fc[1893]];
  var _0xe1a7x8 = this[_0x77fc[354]];
  /**
   * @param {?} context
   * @param {number} id
   * @return {?}
   */
  var init = function(context, id) {
    id = id || 0;
    var ipv6 = _0x77fc[46];
    var taskComponentMap = context[_0x77fc[237]];
    /**
     * @param {?} isSlidingUp
     * @param {?} $cont
     * @return {?}
     */
    var handleSlide = function(isSlidingUp, $cont) {
      return $cont[_0x77fc[176]] - isSlidingUp[_0x77fc[176]];
    };
    if (1 === id) {
      /**
       * @param {?} subtractor
       * @param {?} subtractee
       * @return {?}
       */
      handleSlide = function(subtractor, subtractee) {
        if (null == subtractee[_0x77fc[609]]) {
          /** @type {number} */
          subtractee[_0x77fc[609]] = 0;
        }
        if (null == subtractor[_0x77fc[609]]) {
          /** @type {number} */
          subtractor[_0x77fc[609]] = 0;
        }
        var _0xe1a7x8 = subtractor[_0x77fc[609]] - subtractee[_0x77fc[609]];
        return 0 !== _0xe1a7x8 ? _0xe1a7x8 : subtractee[_0x77fc[176]] - subtractor[_0x77fc[176]];
      };
    } else {
      if (2 === id) {
        /**
         * @param {?} isSlidingUp
         * @param {?} $cont
         * @return {?}
         */
        handleSlide = function(isSlidingUp, $cont) {
          return 0 !== (isSlidingUp = $cont[_0x77fc[1894]] - isSlidingUp[_0x77fc[1894]]) ? isSlidingUp : $cont[_0x77fc[176]] - isSlidingUp[_0x77fc[176]];
        };
      } else {
        if (3 === id) {
          /**
           * @param {number} bindingsa
           * @param {?} bindingsb
           * @return {?}
           */
          handleSlide = function(bindingsa, bindingsb) {
            bindingsa = bindingsb[_0x77fc[311]] > bindingsa[_0x77fc[311]] ? -1 : 1;
            return bindingsb[_0x77fc[311]] != bindingsa[_0x77fc[311]] ? bindingsa : bindingsb[_0x77fc[176]] - bindingsa[_0x77fc[176]];
          };
        }
      }
    }
    context[_0x77fc[1895]](handleSlide);
    /** @type {number} */
    var dynamicLookupKey = 0;
    for (; dynamicLookupKey < taskComponentMap; dynamicLookupKey++) {
      var siteName = _0x77fc[46];
      var _0xe1a7x3b = _0x77fc[46];
      var sitesowners = context[dynamicLookupKey][_0x77fc[944]].toString();
      if (context[dynamicLookupKey][_0x77fc[532]] > 0) {
        siteName = _0x77fc[1896] + context[dynamicLookupKey][_0x77fc[532]] + _0x77fc[1119];
      }
      var _0xe1a7x3d = _0x77fc[46];
      var last = _0x77fc[46];
      if (context[dynamicLookupKey][_0x77fc[609]] && (last = getSVG(_0x77fc[1897], _0x77fc[1898], _0x77fc[1899])), 0 === context[dynamicLookupKey][_0x77fc[1900]] && (context[dynamicLookupKey][_0x77fc[469]] ? last = last + getSVG(_0x77fc[1901], _0x77fc[1898], _0x77fc[1899]) : 3 === id && (last = last + getSVG(_0x77fc[1902], _0x77fc[1898], _0x77fc[1899]))), context[dynamicLookupKey][_0x77fc[1900]] > 0) {
        let zeroSizeMax;
        let zeroSizeMaxes = [0, _0x77fc[1891], _0x77fc[1650]];
        if (3 === context[dynamicLookupKey][_0x77fc[1900]]) {
          zeroSizeMax = zeroSizeMaxes[context[dynamicLookupKey][_0x77fc[1624]]];
        } else {
          zeroSizeMax = zeroSizeMaxes[context[dynamicLookupKey][_0x77fc[1900]]];
        }
        _0xe1a7x3d = _0x77fc[1903] + zeroSizeMax + _0x77fc[1119] + last + _0x77fc[1904];
      } else {
        if (context[dynamicLookupKey][_0x77fc[1582]] >= .1 && (!last || 1 === context[dynamicLookupKey][_0x77fc[312]][_0x77fc[237]])) {
          _0xe1a7x3d = _0x77fc[1905] + getSVG(_0x77fc[1906], _0x77fc[1898], _0x77fc[1907]) + _0x77fc[1908] + context[dynamicLookupKey][_0x77fc[1582]][_0x77fc[1170]](0) + _0x77fc[1909];
        } else {
          if (last) {
            _0xe1a7x3d = _0x77fc[1905] + last + _0x77fc[1904];
          }
        }
      }
      if (context[dynamicLookupKey][_0x77fc[971]] < 24) {
        _0xe1a7x3b = _0x77fc[1504] + context[dynamicLookupKey][_0x77fc[971]];
      }
      if (0 === context[dynamicLookupKey][_0x77fc[944]] && context[dynamicLookupKey][_0x77fc[532]] > 0) {
        sitesowners = _0x77fc[46];
      }
      var _0xe1a7x3f = _0x77fc[46];
      var _0xe1a7x40 = _0x77fc[46];
      if (_0xe1a7x8 === context[dynamicLookupKey][_0x77fc[312]]) {
        _0xe1a7x40 = _0x77fc[1910];
      } else {
        _0xe1a7x3f = _0x77fc[1911] + context[dynamicLookupKey][_0x77fc[312]] + _0x77fc[1912];
      }
      ipv6 = ipv6 + (_0x77fc[1913] + context[dynamicLookupKey][_0x77fc[312]] + _0x77fc[1914] + _0xe1a7x40 + _0x77fc[1692] + _0xe1a7x3f + _0x77fc[1915] + context[dynamicLookupKey][_0x77fc[311]] + _0xe1a7x3d + _0x77fc[1916] + context[dynamicLookupKey][_0x77fc[176]] + _0x77fc[1917] + sitesowners + siteName + _0x77fc[1918] + _0xe1a7x3b + _0x77fc[1919]);
    }
    return ipv6;
  };
  document[_0x77fc[3]](_0x77fc[1921])[_0x77fc[1506]](_0x77fc[1920])[0][_0x77fc[604]] = init(global[_0x77fc[532]], 0);
  if (global[_0x77fc[944]][_0x77fc[237]]) {
    showElem(document[_0x77fc[3]](_0x77fc[1922]));
  } else {
    hideElem(document[_0x77fc[3]](_0x77fc[1922]));
  }
  document[_0x77fc[3]](_0x77fc[1923])[_0x77fc[604]] = init(global[_0x77fc[944]], 1);
  if (global[_0x77fc[1924]][_0x77fc[237]]) {
    showElem(document[_0x77fc[3]](_0x77fc[1925]));
  } else {
    hideElem(document[_0x77fc[3]](_0x77fc[1925]));
  }
  document[_0x77fc[3]](_0x77fc[1926])[_0x77fc[604]] = init(global[_0x77fc[1924]], 2);
  if (global[_0x77fc[176]][_0x77fc[237]]) {
    showElem(document[_0x77fc[3]](_0x77fc[1927]));
  } else {
    hideElem(document[_0x77fc[3]](_0x77fc[1927]));
  }
  document[_0x77fc[3]](_0x77fc[1928])[_0x77fc[604]] = init(global[_0x77fc[176]], 2);
  if (global[_0x77fc[469]] && global[_0x77fc[469]][_0x77fc[237]]) {
    showElem(document[_0x77fc[3]](_0x77fc[1929]));
  } else {
    hideElem(document[_0x77fc[3]](_0x77fc[1929]));
  }
  document[_0x77fc[3]](_0x77fc[1930])[_0x77fc[604]] = init(global[_0x77fc[469]], 3);
  this[_0x77fc[409]][_0x77fc[1931]]();
}, Live[_0x77fc[170]][_0x77fc[408]] = function() {
  $(_0x77fc[1944])[_0x77fc[1943]](function() {
    let namespace = _0x77fc[1932] + $(this)[_0x77fc[1229]](_0x77fc[312]);
    let delete_behavior_form = $(this)[_0x77fc[1933]]();
    $(this)[_0x77fc[477]](_0x77fc[1228], function() {
      $(delete_behavior_form)[_0x77fc[1934]]();
      $(this)[_0x77fc[1936]](_0x77fc[1935]);
      $(this)[_0x77fc[1936]](_0x77fc[1937]);
      if ($(this)[_0x77fc[1938]](_0x77fc[1935])) {
        localStorage[_0x77fc[1939]](namespace);
      } else {
        localStorage[_0x77fc[1940]](namespace, _0x77fc[526]);
      }
    });
    if (null !== localStorage[_0x77fc[1941]](namespace)) {
      $(this)[_0x77fc[1942]](_0x77fc[1937]);
      $(delete_behavior_form)[_0x77fc[997]]();
    } else {
      $(this)[_0x77fc[1942]](_0x77fc[1935]);
    }
  });
}, Live[_0x77fc[170]][_0x77fc[1775]] = function() {
  for (let indexLookupKey = 0; indexLookupKey < this[_0x77fc[338]][_0x77fc[12]][_0x77fc[629]][_0x77fc[237]]; indexLookupKey++) {
    this[_0x77fc[338]][_0x77fc[12]][_0x77fc[629]][indexLookupKey][_0x77fc[662]][_0x77fc[671]][_0x77fc[419]] = _0x77fc[525];
  }
}, Live[_0x77fc[170]][_0x77fc[1791]] = function(boardManager, isSlidingUp) {
  this[_0x77fc[394]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  var _0xe1a7x8 = _0x77fc[46];
  var addressCount = boardManager[_0x77fc[237]];
  /** @type {number} */
  var iAddressLoop = 0;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    boardManager[iAddressLoop][_0x77fc[1945]] = boardManager[iAddressLoop][_0x77fc[180]] < 0;
  }
  if (boardManager[_0x77fc[1895]](function(datapair, value_array) {
    return parseFloat(value_array[_0x77fc[180]]) - parseFloat(datapair[_0x77fc[180]]);
  }), isSlidingUp) {
    _0xe1a7x8 = _0xe1a7x8 + (_0x77fc[1946] + i18n[_0x77fc[333]] + _0x77fc[1947] + i18n[_0x77fc[672]] + _0x77fc[1947] + i18n[_0x77fc[1108]] + _0x77fc[1947] + i18n[_0x77fc[1948]] + _0x77fc[1947] + i18n[_0x77fc[1949]] + _0x77fc[1950] + i18n[_0x77fc[1087]] + _0x77fc[1951] + i18n[_0x77fc[1952]] + _0x77fc[1947] + i18n[_0x77fc[464]] + _0x77fc[1953]);
    /** @type {number} */
    iAddressLoop = 0;
    for (; iAddressLoop < addressCount; iAddressLoop++) {
      if (boardManager[iAddressLoop][_0x77fc[1945]]) {
        _0xe1a7x8 = _0xe1a7x8 + (_0x77fc[1954] + this[_0x77fc[1698]](boardManager[iAddressLoop][_0x77fc[944]]) + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[609]] + _0x77fc[1956] + boardManager[iAddressLoop][_0x77fc[972]] + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[469]] + _0x77fc[1957] + boardManager[iAddressLoop][_0x77fc[1401]] + _0x77fc[1958]);
      } else {
        var _0xe1a7x1e = Math[_0x77fc[1196]](100 * boardManager[iAddressLoop][_0x77fc[469]] / (boardManager[iAddressLoop][_0x77fc[180]] / 60)) / 100;
        var _0xe1a7x1f = Math[_0x77fc[1196]](100 * boardManager[iAddressLoop][_0x77fc[720]] / (boardManager[iAddressLoop][_0x77fc[180]] / 60)) / 100;
        var _0xe1a7x39 = Math[_0x77fc[1196]](100 * boardManager[iAddressLoop][_0x77fc[338]] / boardManager[iAddressLoop][_0x77fc[180]]) / 100;
        var _0xe1a7x3a = Math[_0x77fc[1196]](100 * boardManager[iAddressLoop][_0x77fc[1401]] / (boardManager[iAddressLoop][_0x77fc[180]] / 60)) / 100;
        var _0xe1a7x3b = _0x77fc[1959];
        if (boardManager[iAddressLoop][_0x77fc[1168]](_0x77fc[464]) && 0 !== boardManager[iAddressLoop][_0x77fc[464]]) {
          _0xe1a7x3b = _0x77fc[1960] + boardManager[iAddressLoop][_0x77fc[464]] + _0x77fc[1961] + CDN_URL(_0x77fc[1962]) + _0x77fc[1963];
        }
        _0xe1a7x8 = _0xe1a7x8 + (_0x77fc[1964] + (iAddressLoop + 1) + _0x77fc[1965] + this[_0x77fc[1698]](boardManager[iAddressLoop][_0x77fc[944]]) + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[609]] + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[180]] + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[972]] + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[469]] + _0x77fc[1957] + boardManager[iAddressLoop][_0x77fc[1401]] + _0x77fc[1955] + _0xe1a7x3a + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[338]] + 
        _0x77fc[1957] + _0xe1a7x1f + _0x77fc[1955] + _0xe1a7x1e + _0x77fc[1955] + _0xe1a7x39 + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[579]] + _0x77fc[1955] + _0xe1a7x3b + _0x77fc[1919]);
      }
    }
    _0xe1a7x8 = _0xe1a7x8 + _0x77fc[1966];
    this[_0x77fc[397]][_0x77fc[604]] = _0xe1a7x8;
  } else {
    _0xe1a7x8 = _0xe1a7x8 + (_0x77fc[1967] + i18n[_0x77fc[333]] + _0x77fc[1947] + i18n[_0x77fc[672]] + _0x77fc[1947] + i18n[_0x77fc[1108]] + _0x77fc[1947] + i18n[_0x77fc[1968]] + _0x77fc[1947] + i18n[_0x77fc[1949]] + _0x77fc[1953]);
    /** @type {number} */
    iAddressLoop = 0;
    for (; iAddressLoop < addressCount; iAddressLoop++) {
      if (boardManager[iAddressLoop][_0x77fc[1945]]) {
        _0xe1a7x8 = _0xe1a7x8 + (_0x77fc[1954] + this[_0x77fc[1698]](boardManager[iAddressLoop][_0x77fc[944]]) + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[609]] + _0x77fc[1956] + boardManager[iAddressLoop][_0x77fc[972]] + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[469]] + _0x77fc[1919]);
      } else {
        _0xe1a7x8 = _0xe1a7x8 + (_0x77fc[1964] + (iAddressLoop + 1) + _0x77fc[1965] + this[_0x77fc[1698]](boardManager[iAddressLoop][_0x77fc[944]]) + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[609]] + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[180]] + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[972]] + _0x77fc[1955] + boardManager[iAddressLoop][_0x77fc[469]] + _0x77fc[1919]);
      }
      let signedTransactionsCounter = this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]][boardManager[iAddressLoop][_0x77fc[944]]];
      if (void 0 !== signedTransactionsCounter) {
        this[_0x77fc[338]][_0x77fc[12]][_0x77fc[629]][signedTransactionsCounter][_0x77fc[662]][_0x77fc[671]][_0x77fc[419]] = boardManager[iAddressLoop][_0x77fc[609]];
      }
    }
    _0xe1a7x8 = _0xe1a7x8 + _0x77fc[1966];
    this[_0x77fc[395]][_0x77fc[604]] = _0xe1a7x8;
    this[_0x77fc[338]][_0x77fc[12]][_0x77fc[642]] = true;
    this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1969]]();
  }
}, Live[_0x77fc[170]][_0x77fc[1790]] = function(data) {
  this[_0x77fc[394]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  var iSeg0;
  var iSeg1;
  var _0xe1a7x12 = _0x77fc[46];
  var res = data[_0x77fc[380]];
  var targetName = res[_0x77fc[237]];
  var _0xe1a7x1f = this;
  /** @type {number} */
  var name = 0;
  for (; name < targetName; name++) {
    res[name][_0x77fc[1945]] = res[name][_0x77fc[180]] < 0;
  }
  data[_0x77fc[1871]][_0x77fc[1895]](function(subtractor, subtractee) {
    return subtractor[_0x77fc[1230]] - subtractee[_0x77fc[1230]];
  });
  _0xe1a7x12 = _0xe1a7x12 + (_0x77fc[1970] + i18n[_0x77fc[333]] + _0x77fc[1947] + i18n[_0x77fc[672]] + _0x77fc[1947] + i18n[_0x77fc[1108]] + _0x77fc[1947] + i18n[_0x77fc[1968]] + _0x77fc[1947] + i18n[_0x77fc[1949]] + _0x77fc[1953]);
  /** @type {number} */
  name = 0;
  for (; name < data[_0x77fc[1871]][_0x77fc[237]]; name++) {
    _0xe1a7x12 = _0xe1a7x12 + (_0x77fc[1971] + (name + 1) + _0x77fc[1965] + (iSeg0 = data[_0x77fc[1871]][name][_0x77fc[442]], iSeg1 = void 0, iSeg1 = _0xe1a7x1f[_0x77fc[338]][_0x77fc[12]][_0x77fc[646]][iSeg0][_0x77fc[333]], _0x77fc[1972] + _0xe1a7x1f[_0x77fc[338]][_0x77fc[12]][_0x77fc[646]][iSeg0][_0x77fc[467]] + _0x77fc[1973] + iSeg1 + _0x77fc[1974]) + data[_0x77fc[1871]][name][_0x77fc[609]] + _0x77fc[1955] + data[_0x77fc[1871]][name][_0x77fc[180]] + _0x77fc[1955] + data[_0x77fc[1871]][name][_0x77fc[972]] + 
    _0x77fc[1955] + data[_0x77fc[1871]][name][_0x77fc[469]] + _0x77fc[1919]);
    /** @type {!Array} */
    var ActivityPicker = [];
    /** @type {number} */
    var type = 0;
    for (; type < targetName; type++) {
      if (res[type][_0x77fc[442]] === data[_0x77fc[1871]][name][_0x77fc[442]]) {
        ActivityPicker[_0x77fc[308]](res[type]);
      }
    }
    ActivityPicker[_0x77fc[1895]](function(subtractee, subtractor) {
      var _0xe1a7x8 = parseFloat(subtractor[_0x77fc[180]]) - parseFloat(subtractee[_0x77fc[180]]);
      return 0 === _0xe1a7x8 ? subtractor[_0x77fc[469]] - subtractee[_0x77fc[469]] : _0xe1a7x8;
    });
    /** @type {number} */
    type = 0;
    for (; type < ActivityPicker[_0x77fc[237]]; type++) {
      if (ActivityPicker[type][_0x77fc[1945]]) {
        _0xe1a7x12 = _0xe1a7x12 + (_0x77fc[1975] + this[_0x77fc[1698]](ActivityPicker[type][_0x77fc[944]]) + _0x77fc[1955] + ActivityPicker[type][_0x77fc[609]] + _0x77fc[1956] + ActivityPicker[type][_0x77fc[972]] + _0x77fc[1955] + ActivityPicker[type][_0x77fc[469]] + _0x77fc[1919]);
      } else {
        _0xe1a7x12 = _0xe1a7x12 + (_0x77fc[1975] + this[_0x77fc[1698]](ActivityPicker[type][_0x77fc[944]]) + _0x77fc[1955] + ActivityPicker[type][_0x77fc[609]] + _0x77fc[1955] + ActivityPicker[type][_0x77fc[180]] + _0x77fc[1955] + ActivityPicker[type][_0x77fc[972]] + _0x77fc[1955] + ActivityPicker[type][_0x77fc[469]] + _0x77fc[1919]);
      }
    }
  }
  _0xe1a7x12 = _0xe1a7x12 + _0x77fc[1966];
  this[_0x77fc[395]][_0x77fc[604]] = _0xe1a7x12;
  this[_0x77fc[338]][_0x77fc[12]][_0x77fc[642]] = true;
  this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1969]]();
}, Live[_0x77fc[170]][_0x77fc[1774]] = function(returnTypes) {
  var otherClients = returnTypes[_0x77fc[971]][_0x77fc[1514]](_0x77fc[1555]);
  var undefined = _0x77fc[429] + this[_0x77fc[418]];
  var multipleTypes = false;
  var currentEasyrtcid;
  for (currentEasyrtcid in otherClients) {
    if (otherClients[currentEasyrtcid] === undefined) {
      otherClients[currentEasyrtcid] = _0x77fc[1976] + undefined + _0x77fc[1119];
      multipleTypes = true;
      break;
    }
  }
  return multipleTypes ? otherClients[_0x77fc[1562]](_0x77fc[1555]) : returnTypes[_0x77fc[971]];
}, Live[_0x77fc[170]][_0x77fc[1817]] = function(to, mmCoreSplitViewBlock, canCreateDiscussions) {
  if (void 0 === canCreateDiscussions) {
    canCreateDiscussions = {
      closable : true
    };
  }
  if (this[_0x77fc[459]][_0x77fc[863]]) {
    this[_0x77fc[459]][_0x77fc[867]]();
  }
  var m = document[_0x77fc[383]](_0x77fc[660]);
  if (m[_0x77fc[386]][_0x77fc[385]](_0x77fc[1977]), void 0 !== mmCoreSplitViewBlock && m[_0x77fc[386]][_0x77fc[385]](mmCoreSplitViewBlock), m[_0x77fc[604]] = to, canCreateDiscussions[_0x77fc[1978]]) {
    var id = document[_0x77fc[383]](_0x77fc[720]);
    id[_0x77fc[604]] = _0x77fc[1979];
    id[_0x77fc[1792]] = _0x77fc[1980];
    id[_0x77fc[386]][_0x77fc[385]](_0x77fc[1981]);
    id[_0x77fc[1322]](_0x77fc[1228], function(canCreateDiscussions) {
      canCreateDiscussions[_0x77fc[1875]][_0x77fc[1982]][_0x77fc[1982]][_0x77fc[1472]]();
    });
    m[_0x77fc[387]](id);
  }
  this[_0x77fc[1116]](_0x77fc[46], m);
}, Live[_0x77fc[170]][_0x77fc[1776]] = function(canCreateDiscussions) {
  return -5 === canCreateDiscussions ? [_0x77fc[1983]] : null;
}, Live[_0x77fc[170]][_0x77fc[1116]] = function(canCreateDiscussions, line, mmCoreSplitViewBlock) {
  var prefix = _0x77fc[46] === canCreateDiscussions ? _0x77fc[46] : _0x77fc[1815] + canCreateDiscussions + _0x77fc[1984];
  var GET_AUTH_URL_TIMEOUT = _0x77fc[46] === canCreateDiscussions ? _0x77fc[330] : _0x77fc[46];
  var lines = document[_0x77fc[383]](_0x77fc[660]);
  lines[_0x77fc[386]][_0x77fc[385]](_0x77fc[1985]);
  if (_0x77fc[1986] == typeof mmCoreSplitViewBlock && null !== mmCoreSplitViewBlock) {
    lines[_0x77fc[386]][_0x77fc[385]](mmCoreSplitViewBlock);
  }
  if (GET_AUTH_URL_TIMEOUT) {
    lines[_0x77fc[386]][_0x77fc[385]](GET_AUTH_URL_TIMEOUT);
  }
  if (line instanceof HTMLDivElement) {
    lines[_0x77fc[387]](line);
  } else {
    lines[_0x77fc[604]] = prefix + line;
  }
  this[_0x77fc[367]][_0x77fc[387]](lines);
  this[_0x77fc[1987]]();
  if (!this[_0x77fc[459]][_0x77fc[863]]) {
    this[_0x77fc[1988]]();
  }
}, Live[_0x77fc[170]][_0x77fc[1988]] = function(canCreateDiscussions) {
  if (this[_0x77fc[403]] || canCreateDiscussions) {
    this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1989]]();
  } else {
    if (this[_0x77fc[1990]]) {
      this[_0x77fc[1990]][_0x77fc[173]][_0x77fc[1877]] = _0x77fc[1016];
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1987]] = function() {
  if (++this[_0x77fc[366]], this[_0x77fc[366]] % 10 == 0) {
    var nextIdLookup = this[_0x77fc[367]][_0x77fc[1991]];
    if (nextIdLookup[_0x77fc[237]] > 120) {
      /** @type {number} */
      var indexLookupKey = 0;
      for (; indexLookupKey < 10; indexLookupKey++) {
        this[_0x77fc[367]][_0x77fc[1340]](nextIdLookup[indexLookupKey]);
      }
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1992]] = function(componentStack) {
  var sitesowners;
  var _0xe1a7x8 = _0x77fc[46];
  if (componentStack[_0x77fc[1168]](_0x77fc[311])) {
    if (componentStack[_0x77fc[1168]](_0x77fc[853]) && 1 === componentStack[_0x77fc[853]]) {
      sitesowners = _0x77fc[1993] + CDN_URL(_0x77fc[1994]) + _0x77fc[1995] + componentStack[_0x77fc[311]] + _0x77fc[1996];
    } else {
      sitesowners = _0x77fc[1997] + componentStack[_0x77fc[311]] + _0x77fc[1834] + componentStack[_0x77fc[311]] + _0x77fc[1996];
      if (_0x77fc[1728] === componentStack[_0x77fc[311]]) {
        sitesowners = _0x77fc[1998] + componentStack[_0x77fc[311]] + _0x77fc[1996];
      }
    }
  } else {
    sitesowners = componentStack[_0x77fc[1168]](_0x77fc[339]) && componentStack[_0x77fc[339]] < 0 ? _0x77fc[1815] + this[_0x77fc[1698]](componentStack[_0x77fc[339]]) + _0x77fc[1999] : _0x77fc[46];
    if (-5 === componentStack[_0x77fc[339]]) {
      sitesowners = this[_0x77fc[1698]](componentStack[_0x77fc[339]]);
      _0xe1a7x8 = _0xe1a7x8 + _0x77fc[2E3];
    }
  }
  var parentComponentDef = componentStack[_0x77fc[971]];
  this[_0x77fc[2001]][_0x77fc[604]] = this[_0x77fc[2001]][_0x77fc[604]] + _0x77fc[2002] + _0xe1a7x8 + _0x77fc[1761] + sitesowners + parentComponentDef + _0x77fc[1904];
  this[_0x77fc[371]][_0x77fc[2003]] = this[_0x77fc[371]][_0x77fc[2004]];
}, Live[_0x77fc[170]][_0x77fc[1744]] = function(f, sheetName, mmaPushNotificationsComponent) {
  return !!this[_0x77fc[338]][_0x77fc[12]][_0x77fc[2005]](f, mmaPushNotificationsComponent) && (this[_0x77fc[349]][_0x77fc[308]](f), this[_0x77fc[356]][sheetName] = f, true);
}, Live[_0x77fc[170]][_0x77fc[2006]] = function(xhr) {
  if (_0x77fc[730] == typeof xhr[_0x77fc[600]]) {
    if (_0x77fc[2007] === this[_0x77fc[331]]) {
      console[_0x77fc[1828]](_0x77fc[2008] + xhr[_0x77fc[600]]);
    }
    this[_0x77fc[1737]](JSON[_0x77fc[1546]](xhr[_0x77fc[600]]));
  } else {
    var a;
    var mswordHtml;
    var dataSlice;
    var max;
    var all;
    var data = new Uint8Array(xhr[_0x77fc[600]]);
    var nextLeftGripPositionPx = _0x77fc[46];
    if (1 === data[0]) {
      mswordHtml = data[1];
      dataSlice = data[2];
      all = data[3];
      max = data[_0x77fc[237]];
      /** @type {number} */
      var i = 4;
      for (; i < max; i++) {
        if ((delta = data[i].toString(2))[_0x77fc[237]] < 8) {
          var clientHeight = 8 - delta[_0x77fc[237]];
          /** @type {number} */
          var targetOffsetHeight = 0;
          for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
            delta = _0x77fc[525] + delta;
          }
        }
        nextLeftGripPositionPx = nextLeftGripPositionPx + delta;
      }
      a = this[_0x77fc[2009]](nextLeftGripPositionPx, all);
      this[_0x77fc[2010]](mswordHtml, dataSlice, a);
    } else {
      if (2 === data[0]) {
        mswordHtml = data[1];
        dataSlice = data[2];
        max = data[_0x77fc[237]];
        a = Array();
        var x = Array();
        /** @type {number} */
        i = 3;
        for (; i < max; i++) {
          var delta = data[i];
          x[_0x77fc[308]](15 & delta);
          x[_0x77fc[308]]((240 & delta) >> 4);
          if (10 === x[_0x77fc[237]]) {
            a[_0x77fc[308]](x);
            x = Array();
          }
        }
        this[_0x77fc[2010]](mswordHtml, dataSlice, a);
      } else {
        if (4 === data[0]) {
          this[_0x77fc[2011]](data, true);
        } else {
          if (5 === data[0]) {
            this[_0x77fc[2011]](data, false);
          } else {
            if (99 === data[0]) {
              return void this[_0x77fc[1499]](xhr[_0x77fc[600]]);
            }
          }
        }
      }
    }
  }
}, Live[_0x77fc[170]][_0x77fc[2011]] = function(i, diff) {
  if (this[_0x77fc[338]][_0x77fc[12]][_0x77fc[634]]) {
    var replay = new Replay;
    var bBag = new ReplayStream;
    /** @type {!Array} */
    var CustomTests = [];
    bBag[_0x77fc[600]] = i;
    /** @type {number} */
    bBag[_0x77fc[745]] = 8;
    /** @type {number} */
    bBag[_0x77fc[746]] = 2;
    for (;;) {
      var validAttributes = {};
      if (validAttributes[_0x77fc[180]] = diff ? bBag[_0x77fc[2012]](12) : 0, validAttributes[_0x77fc[720]] = bBag[_0x77fc[2012]](4), null === validAttributes[_0x77fc[180]] || null === validAttributes[_0x77fc[720]]) {
        break;
      }
      if (validAttributes[_0x77fc[720]] === replay[_0x77fc[721]][_0x77fc[725]]) {
        /** @type {!Array} */
        validAttributes[_0x77fc[853]] = [bBag[_0x77fc[2012]](5), bBag[_0x77fc[2012]](4)];
      }
      if (validAttributes[_0x77fc[720]] === replay[_0x77fc[721]][_0x77fc[726]]) {
        /** @type {!Array} */
        validAttributes[_0x77fc[853]] = [bBag[_0x77fc[2012]](5)];
      }
      if (validAttributes[_0x77fc[720]] === replay[_0x77fc[721]][_0x77fc[727]]) {
        /** @type {!Array} */
        validAttributes[_0x77fc[853]] = [bBag[_0x77fc[2012]](1)];
      }
      if (validAttributes[_0x77fc[720]] === replay[_0x77fc[721]][_0x77fc[723]]) {
        validAttributes[_0x77fc[2013]] = bBag[_0x77fc[2012]](4);
        if (!(validAttributes[_0x77fc[2013]] === replay[_0x77fc[723]][_0x77fc[1206]])) {
          if (validAttributes[_0x77fc[2013]] === replay[_0x77fc[723]][_0x77fc[1101]]) {
            /** @type {!Array} */
            validAttributes[_0x77fc[853]] = [bBag[_0x77fc[2012]](1), bBag[_0x77fc[2012]](4)];
          } else {
            if (validAttributes[_0x77fc[2013]] === replay[_0x77fc[723]][_0x77fc[1161]]) {
              /** @type {!Array} */
              validAttributes[_0x77fc[853]] = [bBag[_0x77fc[2012]](4) - 3, bBag[_0x77fc[2012]](5) - 12];
            } else {
              if (validAttributes[_0x77fc[2013]] === replay[_0x77fc[723]][_0x77fc[2014]]) {
                /** @type {!Array} */
                validAttributes[_0x77fc[853]] = [bBag[_0x77fc[2012]](1), bBag[_0x77fc[2012]](5)];
              } else {
                if (validAttributes[_0x77fc[2013]] === replay[_0x77fc[723]][_0x77fc[2015]]) {
                  /** @type {!Array} */
                  validAttributes[_0x77fc[853]] = [bBag[_0x77fc[2012]](4), bBag[_0x77fc[2012]](5)];
                } else {
                  if (validAttributes[_0x77fc[2013]] === replay[_0x77fc[723]][_0x77fc[1182]]) {
                    /** @type {!Array} */
                    validAttributes[_0x77fc[853]] = [bBag[_0x77fc[2012]](5), bBag[_0x77fc[2012]](4), bBag[_0x77fc[2012]](3), bBag[_0x77fc[2012]](1)];
                  }
                }
              }
            }
          }
        }
      }
      CustomTests[_0x77fc[308]](validAttributes);
    }
    var indexLookupKey = this[_0x77fc[356]][i[1]];
    if (indexLookupKey in this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]] && this[_0x77fc[348]][indexLookupKey][_0x77fc[464]]) {
      this[_0x77fc[348]][indexLookupKey][_0x77fc[464]][_0x77fc[2016]](CustomTests);
    }
  }
}, Live[_0x77fc[170]][_0x77fc[2010]] = function(ballNumber, n, tplClasspath) {
  var cssClasspath = this[_0x77fc[356]][ballNumber];
  if (this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]][_0x77fc[1168]](cssClasspath)) {
    if (this[_0x77fc[363]]) {
      /** @type {!Array} */
      this[_0x77fc[364]][cssClasspath] = [tplClasspath, n];
    } else {
      this[_0x77fc[338]][_0x77fc[1095]](this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]][cssClasspath], tplClasspath, n);
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1654]] = function(canCreateDiscussions) {
  if (this[_0x77fc[338]][_0x77fc[153]][_0x77fc[997]](this[_0x77fc[338]][_0x77fc[153]].LOADING), this[_0x77fc[335]] = false, this[_0x77fc[337]] = null, 4001 === canCreateDiscussions[_0x77fc[2017]]) {
    var artistTrack = _0x77fc[2018] + i18n[_0x77fc[2019]] + _0x77fc[2020];
    return this[_0x77fc[1817]](artistTrack, _0x77fc[2021], {
      closable : false
    }), this[_0x77fc[1817]](_0x77fc[2022] + i18n[_0x77fc[2023]] + _0x77fc[2024] + canCreateDiscussions[_0x77fc[2025]] + _0x77fc[2026], _0x77fc[1816]), void(this[_0x77fc[338]][_0x77fc[14]][_0x77fc[604]] += _0x77fc[2027] + canCreateDiscussions[_0x77fc[2025]]);
  }
  if (4002 !== canCreateDiscussions[_0x77fc[2017]]) {
    if (4003 === canCreateDiscussions[_0x77fc[2017]] || 4004 === canCreateDiscussions[_0x77fc[2017]]) {
      return this[_0x77fc[340]] = 1E3, this[_0x77fc[371]][_0x77fc[173]][_0x77fc[1877]] = _0x77fc[2028], this[_0x77fc[976]](true, true), showElem(this[_0x77fc[338]][_0x77fc[17]]), showElem(this[_0x77fc[338]][_0x77fc[16]]), void(4003 === canCreateDiscussions[_0x77fc[2017]] ? (this[_0x77fc[338]][_0x77fc[150]][_0x77fc[2029]](canCreateDiscussions[_0x77fc[2025]]), this[_0x77fc[1817]](i18n[_0x77fc[2030]], _0x77fc[2021], {
        closable : false
      }), this[_0x77fc[338]][_0x77fc[14]][_0x77fc[604]] += _0x77fc[2027] + canCreateDiscussions[_0x77fc[2025]] + _0x77fc[2031]) : (this[_0x77fc[1817]](i18n[_0x77fc[2032]], _0x77fc[2021], {
        closable : false
      }), this[_0x77fc[338]][_0x77fc[14]][_0x77fc[604]] += _0x77fc[2033]));
    }
    if (4005 !== canCreateDiscussions[_0x77fc[2017]]) {
      if (4006 === canCreateDiscussions[_0x77fc[2017]]) {
        this[_0x77fc[1817]](_0x77fc[2034], _0x77fc[2021]);
      } else {
        if (4007 === canCreateDiscussions[_0x77fc[2017]] || 4008 === canCreateDiscussions[_0x77fc[2017]]) {
          return this[_0x77fc[338]][_0x77fc[153]][_0x77fc[461]](_0x77fc[2035]), this[_0x77fc[340]] = 0, 4008 === canCreateDiscussions[_0x77fc[2017]] && (this[_0x77fc[1708]] = canCreateDiscussions[_0x77fc[2017]]), this[_0x77fc[338]][_0x77fc[26]] && this[_0x77fc[1817]](_0x77fc[2036], _0x77fc[2021]), this[_0x77fc[1729]](), void setTimeout(this[_0x77fc[2037]][_0x77fc[430]](this), 50);
        }
        if (1006 === canCreateDiscussions[_0x77fc[2017]] && this[_0x77fc[345]]) {
          console[_0x77fc[1828]](_0x77fc[2038]);
          let previousState = this[_0x77fc[338]][_0x77fc[136]]() - this[_0x77fc[345]][_0x77fc[180]];
          if (console[_0x77fc[1828]](previousState), console[_0x77fc[1828]](this[_0x77fc[345]]), previousState < 3E3) {
            return this[_0x77fc[1729]](), void setTimeout(this[_0x77fc[2037]][_0x77fc[430]](this), 50);
          }
        }
      }
      if (0 === this[_0x77fc[339]] && this[_0x77fc[340]] < 2) {
        return this[_0x77fc[2039]](), void this[_0x77fc[462]]();
      }
      if (0 === this[_0x77fc[339]]) {
        this[_0x77fc[342]] = false;
      }
      artistTrack = _0x77fc[2040] + i18n[_0x77fc[2041]][_0x77fc[1631]]() + _0x77fc[2042];
      artistTrack = artistTrack + (_0x77fc[2043] + trans(i18n[_0x77fc[2044]], {
        refr : _0x77fc[2045] + i18n[_0x77fc[2046]] + _0x77fc[1697]
      }) + _0x77fc[2047]);
      this[_0x77fc[1817]](artistTrack, _0x77fc[1816]);
      this[_0x77fc[1729]]();
      if (false === this[_0x77fc[338]][_0x77fc[50]] && null === this[_0x77fc[338]][_0x77fc[53]]) {
        this[_0x77fc[976]](true, true);
      }
      if (!(this[_0x77fc[338]][_0x77fc[50]] && this[_0x77fc[338]][_0x77fc[688]](true))) {
        showElem(this[_0x77fc[338]][_0x77fc[17]]);
        showElem(this[_0x77fc[338]][_0x77fc[16]]);
        hideElem(this[_0x77fc[338]][_0x77fc[21]]);
      }
      this[_0x77fc[338]][_0x77fc[12]][_0x77fc[605]][_0x77fc[419]] = _0x77fc[46];
      this[_0x77fc[338]][_0x77fc[12]][_0x77fc[643]](8);
      this[_0x77fc[338]][_0x77fc[153]][_0x77fc[997]]();
      this[_0x77fc[338]][_0x77fc[166]](0);
    } else {
      alert(_0x77fc[2048]);
    }
  } else {
    this[_0x77fc[1817]](i18n[_0x77fc[2049]], _0x77fc[1816]);
  }
}, Live[_0x77fc[170]][_0x77fc[2039]] = function() {
  if (this[_0x77fc[327]]) {
    this[_0x77fc[331]] = _0x77fc[46];
    this[_0x77fc[329]] = this[_0x77fc[329]] + _0x77fc[2050];
    this[_0x77fc[342]] = true;
    console[_0x77fc[1828]](_0x77fc[2051]);
  }
}, Live[_0x77fc[170]][_0x77fc[2037]] = function() {
  let indexLookupKey = this[_0x77fc[345]][_0x77fc[2052]];
  let serialPort = this[_0x77fc[345]][_0x77fc[2053]];
  let _0xe1a7x8 = this[_0x77fc[343]][indexLookupKey];
  var _0xe1a7x12 = _0xe1a7x8[_0x77fc[338]][_0x77fc[237]] > 1 ? _0x77fc[426] + _0xe1a7x8[_0x77fc[338]] : _0x77fc[46];
  this[_0x77fc[337]] = new WebSocket(_0xe1a7x8[_0x77fc[532]] + _0x77fc[2054] + _0xe1a7x8[_0x77fc[611]] + _0xe1a7x12 + _0x77fc[2055] + this[_0x77fc[323]] + _0x77fc[2056] + serialPort);
  this[_0x77fc[337]][_0x77fc[2057]] = _0x77fc[2058];
  var getComputeFrom = this;
  /**
   * @param {?} el
   * @return {undefined}
   */
  this[_0x77fc[337]][_0x77fc[2059]] = function(el) {
    if (1 === el[_0x77fc[1875]][_0x77fc[1657]]) {
      getComputeFrom[_0x77fc[1652]](el);
    }
  };
  this[_0x77fc[337]][_0x77fc[2060]] = this[_0x77fc[2006]][_0x77fc[430]](this);
  /**
   * @param {?} el
   * @return {undefined}
   */
  var hasDraftID = function(el) {
    if (getComputeFrom[_0x77fc[340]] > 10) {
      getComputeFrom[_0x77fc[1654]](el);
    } else {
      setTimeout(function() {
        getComputeFrom[_0x77fc[340]]++;
        getComputeFrom[_0x77fc[2037]]();
      }, 1E3);
    }
  };
  /**
   * @param {?} el
   * @return {undefined}
   */
  this[_0x77fc[337]][_0x77fc[2061]] = function(el) {
    /**
     * @return {undefined}
     */
    el[_0x77fc[1875]][_0x77fc[1653]] = function() {
    };
    if (!(0 !== el[_0x77fc[1875]][_0x77fc[1657]] && 1 !== el[_0x77fc[1875]][_0x77fc[1657]])) {
      el[_0x77fc[1875]][_0x77fc[1852]]();
    }
    /** @type {number} */
    el[_0x77fc[2017]] = 1006;
    hasDraftID(el);
  };
  /**
   * @param {?} el
   * @return {undefined}
   */
  this[_0x77fc[337]][_0x77fc[1653]] = function(el) {
    if (1006 === el[_0x77fc[2017]]) {
      hasDraftID(el);
    } else {
      getComputeFrom[_0x77fc[1654]](el);
    }
  };
}, Live[_0x77fc[170]][_0x77fc[462]] = function() {
  var maxHeight;
  ++this[_0x77fc[340]];
  var stringExpr = _0x77fc[46];
  var escapedEmail = this[_0x77fc[1462]](_0x77fc[50]) ? _0x77fc[2062] : _0x77fc[46];
  var waitBeforeReconnect = this[_0x77fc[1462]](_0x77fc[1562]);
  if (!waitBeforeReconnect) {
    let no = this[_0x77fc[1462]](_0x77fc[2063]);
    if (no && 36 == no[_0x77fc[237]]) {
      let quoteChar = this[_0x77fc[1462]](_0x77fc[2064]);
      if (quoteChar) {
        stringExpr = stringExpr + (_0x77fc[2065] + quoteChar);
      }
      waitBeforeReconnect = _0x77fc[2066] + no;
    }
    let varVal = this[_0x77fc[1462]](_0x77fc[2067]);
    if (varVal && 36 == varVal[_0x77fc[237]]) {
      let quoteChar = this[_0x77fc[1462]](_0x77fc[2064]);
      if (quoteChar) {
        stringExpr = stringExpr + (_0x77fc[2065] + quoteChar);
      }
      waitBeforeReconnect = _0x77fc[2068] + varVal;
    }
    let reconnectTimeIncrease = this[_0x77fc[1462]](_0x77fc[766]);
    if (reconnectTimeIncrease && 36 == reconnectTimeIncrease[_0x77fc[237]]) {
      let quoteChar = this[_0x77fc[1462]](_0x77fc[2064]);
      if (quoteChar) {
        stringExpr = stringExpr + (_0x77fc[2065] + quoteChar);
      }
      waitBeforeReconnect = _0x77fc[2069] + reconnectTimeIncrease;
    }
  }
  if (_0x77fc[46] !== waitBeforeReconnect) {
    escapedEmail = _0x77fc[2070] + waitBeforeReconnect;
  }
  var sitesusers = this[_0x77fc[332]] ? _0x77fc[46] : _0x77fc[2071];
  var varVal = this[_0x77fc[332]] ? _0x77fc[46] : _0x77fc[2072] + this[_0x77fc[434]];
  var siteName = this[_0x77fc[332]] || isNaN(maxHeight = parseInt(this[_0x77fc[338]][_0x77fc[150]][_0x77fc[2073]](_0x77fc[1738]))) ? _0x77fc[46] : _0x77fc[2074] + maxHeight;
  var varWithEqual = null !== this[_0x77fc[338]][_0x77fc[150]][_0x77fc[2075]]() ? _0x77fc[2076] + this[_0x77fc[338]][_0x77fc[150]][_0x77fc[2075]]() : _0x77fc[46];
  if (window[_0x77fc[2077]]) {
    var _0xe1a7x3a = this[_0x77fc[331]][_0x77fc[237]] > 1 ? _0x77fc[426] + this[_0x77fc[331]] : _0x77fc[46];
    this[_0x77fc[337]] = new WebSocket(this[_0x77fc[325]] + _0x77fc[2054] + this[_0x77fc[329]] + _0xe1a7x3a + _0x77fc[2055] + this[_0x77fc[323]] + escapedEmail + sitesusers + siteName + varWithEqual + varVal + stringExpr);
    this[_0x77fc[337]][_0x77fc[2057]] = _0x77fc[2058];
    this[_0x77fc[337]][_0x77fc[2059]] = this[_0x77fc[1652]][_0x77fc[430]](this);
    this[_0x77fc[337]][_0x77fc[2060]] = this[_0x77fc[2006]][_0x77fc[430]](this);
    this[_0x77fc[337]][_0x77fc[1653]] = this[_0x77fc[1654]][_0x77fc[430]](this);
    var pointerColors = this;
    this[_0x77fc[347]] = setTimeout(function() {
      var color = pointerColors[_0x77fc[337]];
      if (null !== color && 0 === color[_0x77fc[1657]] && pointerColors[_0x77fc[340]] < 2) {
        color[_0x77fc[1653]] = color[_0x77fc[2060]] = function() {
        };
        /**
         * @return {undefined}
         */
        color[_0x77fc[2059]] = function() {
          color[_0x77fc[1852]]();
        };
        color[_0x77fc[1852]]();
        pointerColors[_0x77fc[337]] = color = null;
        pointerColors[_0x77fc[2039]]();
        pointerColors[_0x77fc[462]]();
      }
    }, 1500);
  } else {
    alert(_0x77fc[2078]);
  }
}, Live[_0x77fc[170]][_0x77fc[2009]] = function(object, boardManager) {
  var cases = Array();
  var data = Array();
  var result = object[_0x77fc[237]];
  /** @type {number} */
  var value = 0;
  for (; value < result; value++) {
    if (data[_0x77fc[308]](parseInt(object[_0x77fc[1635]](value))), 10 === data[_0x77fc[237]]) {
      if (!(cases[_0x77fc[237]] < 20 - boardManager)) {
        for (; boardManager > 0;) {
          cases[_0x77fc[308]]([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
          boardManager--;
        }
        break;
      }
      cases[_0x77fc[308]](data);
      data = Array();
    }
  }
  return cases;
}, Live[_0x77fc[170]][_0x77fc[1052]] = function() {
  var data = {
    t : 23
  };
  data[_0x77fc[355]] = this[_0x77fc[355]];
  data[_0x77fc[77]] = this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[77]];
  data[_0x77fc[940]] = this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[940]];
  if (this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[1041]]) {
    data[_0x77fc[1041]] = this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[1041]];
  }
  if (this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[305]]) {
    data[_0x77fc[305]] = this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[305]];
  }
  if (7 === data[_0x77fc[940]]) {
    data[_0x77fc[1042]] = this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[1042]];
  }
  if (data[_0x77fc[940]] > 1E3) {
    data[_0x77fc[1044]] = this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[1044]];
  }
  var agents_html = JSON[_0x77fc[1520]](data);
  this[_0x77fc[1499]](agents_html);
}, Live[_0x77fc[170]][_0x77fc[1112]] = function(boardManager, diff) {
  var PL$13 = new ReplayStream;
  /** @type {number} */
  PL$13[_0x77fc[745]] = 8;
  var replay = new Replay;
  PL$13[_0x77fc[2079]](diff ? 4 : 5, 8);
  PL$13[_0x77fc[2079]](this[_0x77fc[355]], 8);
  var addressCount = boardManager[_0x77fc[237]];
  /** @type {number} */
  var iAddressLoop = 0;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    var high = boardManager[iAddressLoop][_0x77fc[180]];
    if (diff && (PL$13[_0x77fc[2079]](high >>> 6, 6), PL$13[_0x77fc[2079]](63 & high, 6)), PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[720]], 4), void 0 !== replay[_0x77fc[724]][boardManager[iAddressLoop][_0x77fc[720]]]) {
      var PL$15 = replay[_0x77fc[724]][boardManager[iAddressLoop][_0x77fc[720]]];
      /** @type {number} */
      var valueType = 0;
      for (; valueType < PL$15[_0x77fc[237]]; valueType++) {
        PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][valueType], PL$15[valueType]);
      }
      if (boardManager[iAddressLoop][_0x77fc[720]] === replay[_0x77fc[721]][_0x77fc[723]]) {
        if (!(boardManager[iAddressLoop][_0x77fc[853]][0] === replay[_0x77fc[723]][_0x77fc[1206]])) {
          if (boardManager[iAddressLoop][_0x77fc[853]][0] === replay[_0x77fc[723]][_0x77fc[1101]]) {
            PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][1], 1);
            PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][2], 4);
          } else {
            if (boardManager[iAddressLoop][_0x77fc[853]][0] === replay[_0x77fc[723]][_0x77fc[1161]]) {
              PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][1] + 3, 4);
              PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][2] + 12, 5);
            } else {
              if (boardManager[iAddressLoop][_0x77fc[853]][0] === replay[_0x77fc[723]][_0x77fc[2014]]) {
                PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][1], 1);
                PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][2], 5);
              } else {
                if (boardManager[iAddressLoop][_0x77fc[853]][0] === replay[_0x77fc[723]][_0x77fc[2015]]) {
                  PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][1], 4);
                  PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][2], 5);
                } else {
                  if (boardManager[iAddressLoop][_0x77fc[853]][0] === replay[_0x77fc[723]][_0x77fc[1182]]) {
                    PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][1], 5);
                    PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][2], 4);
                    PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][3], 3);
                    PL$13[_0x77fc[2079]](boardManager[iAddressLoop][_0x77fc[853]][4], 1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (!diff) {
    if (8 - PL$13[_0x77fc[744]] >= 4) {
      PL$13[_0x77fc[2079]](replay[_0x77fc[721]].AUX, 4);
    }
  }
  var m_block = new Uint8Array(PL$13[_0x77fc[600]]);
  this[_0x77fc[1499]](m_block[_0x77fc[1346]]);
}, Live[_0x77fc[170]][_0x77fc[1137]] = function(difficultyLevel) {
  if (true === this[_0x77fc[335]] && !this[_0x77fc[338]][_0x77fc[688]](true)) {
    var arrayValueHash;
    var vertexData = new ArrayBuffer(103);
    /** @type {number} */
    (arrayValueHash = new Uint8Array(vertexData))[0] = 2;
    arrayValueHash[1] = this[_0x77fc[355]];
    arrayValueHash[2] = this[_0x77fc[338]][_0x77fc[97]];
    /** @type {number} */
    var _0xe1a7x12 = 0;
    /** @type {number} */
    var graphVariable = 3;
    /** @type {number} */
    var j = 0;
    /** @type {number} */
    var gamePattern = 0;
    for (; gamePattern < 20; gamePattern++) {
      /** @type {number} */
      var currentLevel = 0;
      for (; currentLevel < 10; currentLevel++) {
        j = j | (15 & difficultyLevel[gamePattern][currentLevel]) << 4 * _0xe1a7x12++;
        if (2 == _0xe1a7x12) {
          arrayValueHash[graphVariable] = j;
          /** @type {number} */
          j = 0;
          /** @type {number} */
          _0xe1a7x12 = 0;
          graphVariable++;
        }
      }
    }
    this[_0x77fc[1499]](vertexData);
  }
}, Live[_0x77fc[170]][_0x77fc[1499]] = function(mmCoreSplitViewBlock) {
  return !(!this[_0x77fc[337]] || this[_0x77fc[337]][_0x77fc[1657]] !== this[_0x77fc[337]][_0x77fc[2080]]) && (this[_0x77fc[337]][_0x77fc[1522]](mmCoreSplitViewBlock), true);
}, Live[_0x77fc[170]][_0x77fc[1787]] = function() {
  if (!this[_0x77fc[400]]) {
    var data = {
      pcs : this[_0x77fc[338]][_0x77fc[108]],
      apm : this[_0x77fc[338]][_0x77fc[1171]](),
      mc : this[_0x77fc[338]][_0x77fc[238]][_0x77fc[945]],
      B2B : this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1401]],
      a : this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1144]]
    };
    var myDoughnutChart = JSON[_0x77fc[1520]](data);
    this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[1139]] = this[_0x77fc[338]][_0x77fc[136]]();
    var artistTrack = _0x77fc[2081] + myDoughnutChart + _0x77fc[2082] + this[_0x77fc[338]][_0x77fc[156]][_0x77fc[1823]]()[_0x77fc[1247]](0, 5) + _0x77fc[1648];
    this[_0x77fc[1499]](artistTrack);
    this[_0x77fc[400]] = true;
  }
}, Live[_0x77fc[170]][_0x77fc[1060]] = function() {
  this[_0x77fc[1499]](_0x77fc[2083]);
  /** @type {number} */
  this[_0x77fc[338]][_0x77fc[105]] = 0;
  this[_0x77fc[338]][_0x77fc[1]][_0x77fc[1058]]();
  if (_0x77fc[1521] == typeof ga) {
    ga(_0x77fc[1522], {
      hitType : _0x77fc[1523],
      eventCategory : _0x77fc[1788],
      eventAction : _0x77fc[1008]
    });
  }
}, Live[_0x77fc[170]][_0x77fc[1113]] = function() {
  this[_0x77fc[1499]](_0x77fc[2084]);
  if (!this[_0x77fc[400]]) {
    this[_0x77fc[1787]]();
  }
  this[_0x77fc[353]][_0x77fc[308]](this[_0x77fc[339]]);
}, Live[_0x77fc[170]][_0x77fc[2085]] = function(mmCoreSplitViewBlock) {
  if (!(mmCoreSplitViewBlock >= 0)) {
    /** @type {number} */
    mmCoreSplitViewBlock = -1;
  }
  this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1127]](mmCoreSplitViewBlock);
}, Live[_0x77fc[170]][_0x77fc[1649]] = function() {
  this[_0x77fc[394]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  this[_0x77fc[395]][_0x77fc[419]] = _0x77fc[46];
  this[_0x77fc[338]][_0x77fc[12]][_0x77fc[642]] = false;
  this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1969]]();
}, Live[_0x77fc[170]][_0x77fc[1E3]] = function() {
  if (!this[_0x77fc[338]][_0x77fc[54]]) {
    var _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[2086]);
    var img = this[_0x77fc[338]];
    var el = document[_0x77fc[1194]];
    /** @type {number} */
    var UNIT_TYPE_PERCENT = 0;
    var chat_retry = setInterval(function() {
      ++UNIT_TYPE_PERCENT;
      _0xe1a7x4[_0x77fc[1792]] = _0x77fc[2087] + (UNIT_TYPE_PERCENT % 2 == 0 ? _0x77fc[527] : _0x77fc[46]) + _0x77fc[2088];
      document[_0x77fc[1194]] = UNIT_TYPE_PERCENT % 10 > 7 ? el : _0x77fc[2089];
      if (101 === UNIT_TYPE_PERCENT || img[_0x77fc[54]]) {
        clearInterval(chat_retry);
        document[_0x77fc[1194]] = el;
        _0xe1a7x4[_0x77fc[1792]] = _0x77fc[2090];
      }
    }, 100);
  }
}, Live[_0x77fc[170]][_0x77fc[1025]] = function() {
  this[_0x77fc[361]] = void 0;
  this[_0x77fc[352]] = {};
  this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1125]]();
  this[_0x77fc[1649]]();
  this[_0x77fc[1167]]();
}, Live[_0x77fc[170]][_0x77fc[1167]] = function() {
  if (this[_0x77fc[336]] || 1 == this[_0x77fc[423]] || 0 !== this[_0x77fc[445]]) {
    return false;
  }
  /** @type {!Array} */
  var enabledHandlers = [];
  /** @type {number} */
  var indexLookupKey = 0;
  var cell_amount = this[_0x77fc[349]][_0x77fc[237]];
  /** @type {number} */
  var i = 0;
  for (; i < this[_0x77fc[350]][_0x77fc[237]]; i++) {
    if (false === arrayContains(this[_0x77fc[353]], this[_0x77fc[350]][i])) {
      enabledHandlers[_0x77fc[308]](this[_0x77fc[350]][i]);
    }
  }
  /** @type {number} */
  i = 0;
  for (; i < cell_amount; i++) {
    if (false === arrayContains(this[_0x77fc[353]], this[_0x77fc[349]][i]) && false === arrayContains(this[_0x77fc[350]], this[_0x77fc[349]][i])) {
      enabledHandlers[_0x77fc[308]](this[_0x77fc[349]][i]);
    }
  }
  if (enabledHandlers[_0x77fc[237]] > 0) {
    var qtype_ = enabledHandlers[_0x77fc[315]](this[_0x77fc[360]]);
    if (-1 == qtype_) {
      /** @type {number} */
      qtype_ = 0;
    }
    indexLookupKey = void 0 !== enabledHandlers[qtype_ + 1] ? enabledHandlers[qtype_ + 1] : enabledHandlers[0];
    this[_0x77fc[360]] = indexLookupKey;
  } else {
    /** @type {number} */
    this[_0x77fc[360]] = 0;
  }
  this[_0x77fc[2085]](this[_0x77fc[338]][_0x77fc[12]][_0x77fc[625]][indexLookupKey]);
}, Live[_0x77fc[170]][_0x77fc[1441]] = function(value, min, resolvedServices) {
  if (0 !== this[_0x77fc[445]] || 0 !== this[_0x77fc[360]]) {
    var whiteRating = parseInt(this[_0x77fc[360]]);
    var signature = 0 === this[_0x77fc[445]] ? 11 : 7;
    var result = new Uint8Array(signature);
    /** @type {number} */
    result[0] = 13;
    result[1] = !value || value > 255 ? 0 : value;
    result[2] = resolvedServices[_0x77fc[463]] | (resolvedServices[_0x77fc[918]] ? 128 : 0);
    result[3] = !min || min > 255 ? 0 : min;
    result[4] = resolvedServices[_0x77fc[2091]];
    result[5] = (65280 & this[_0x77fc[358]]) >> 8;
    result[6] = (255 & this[_0x77fc[358]]) >> 0;
    if (0 === this[_0x77fc[445]]) {
      result[7] = (-16777216 & whiteRating) >> 24;
      result[8] = (16711680 & whiteRating) >> 16;
      result[9] = (65280 & whiteRating) >> 8;
      result[10] = (255 & whiteRating) >> 0;
    }
    this[_0x77fc[1499]](result[_0x77fc[1346]]);
  }
}, Live[_0x77fc[170]][_0x77fc[2092]] = function(canCreateDiscussions) {
  if (0 !== this[_0x77fc[445]] || 0 !== this[_0x77fc[360]]) {
    var artistTrack = _0x77fc[2093] + canCreateDiscussions + _0x77fc[2094] + parseInt(this[_0x77fc[360]]) + _0x77fc[2095] + this[_0x77fc[358]] + _0x77fc[2096];
    this[_0x77fc[1499]](artistTrack);
  }
}, Live[_0x77fc[170]][_0x77fc[2097]] = function(ballNumber, canCreateDiscussions) {
  var artistTrack = _0x77fc[2093] + canCreateDiscussions + _0x77fc[2094] + this[_0x77fc[338]][_0x77fc[12]][_0x77fc[629]][ballNumber][_0x77fc[339]] + _0x77fc[2095] + this[_0x77fc[358]] + _0x77fc[2096];
  this[_0x77fc[1499]](artistTrack);
}, Live[_0x77fc[170]][_0x77fc[1740]] = function(canCreateDiscussions) {
  if (!this[_0x77fc[332]]) {
    var character = canCreateDiscussions[_0x77fc[1247]](0, 15);
    this[_0x77fc[418]] = stringEscape(character);
  }
  this[_0x77fc[348]][this[_0x77fc[339]]][_0x77fc[333]] = this[_0x77fc[418]];
  this[_0x77fc[375]][_0x77fc[1600]] = _0x77fc[46];
  this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[2098]] + _0x77fc[1555] + this[_0x77fc[418]] + _0x77fc[1797]);
  this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[2099]] + _0x77fc[1719]);
}, Live[_0x77fc[170]][_0x77fc[1026]] = function(canCreateDiscussions) {
  if (0 === arguments[_0x77fc[237]] && (canCreateDiscussions = 0), 1 !== canCreateDiscussions) {
    var artistTrack = _0x77fc[2100];
    this[_0x77fc[1499]](artistTrack);
  }
  if (2 !== canCreateDiscussions) {
    this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[2101]] + _0x77fc[1719]);
  }
  this[_0x77fc[336]] = true;
  this[_0x77fc[1756]](true);
  this[_0x77fc[338]][_0x77fc[1111]](9);
  this[_0x77fc[338]][_0x77fc[50]] = false;
  this[_0x77fc[1124]]();
  this[_0x77fc[400]] = true;
  this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1127]](-1);
  this[_0x77fc[338]][_0x77fc[6]][_0x77fc[984]]();
  this[_0x77fc[338]][_0x77fc[6]][_0x77fc[983]]();
  this[_0x77fc[338]][_0x77fc[994]]();
  /** @type {number} */
  this[_0x77fc[338]][_0x77fc[97]] = 0;
  /** @type {number} */
  this[_0x77fc[338]][_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] = 30;
  /** @type {number} */
  this[_0x77fc[338]][_0x77fc[105]] = 0;
  this[_0x77fc[338]][_0x77fc[854]]();
  this[_0x77fc[338]][_0x77fc[153]][_0x77fc[997]]();
  this[_0x77fc[338]][_0x77fc[153]][_0x77fc[1026]]();
  hideElem(this[_0x77fc[390]]);
}, Live[_0x77fc[170]][_0x77fc[1799]] = function(canCreateDiscussions) {
  if (0 === arguments[_0x77fc[237]] && (canCreateDiscussions = 0), 0 === canCreateDiscussions) {
    var artistTrack = _0x77fc[2100];
    this[_0x77fc[1499]](artistTrack);
  }
  if (this[_0x77fc[338]][_0x77fc[12]][_0x77fc[618]]) {
    this[_0x77fc[338]][_0x77fc[12]][_0x77fc[2102]](false);
  }
  this[_0x77fc[336]] = false;
  this[_0x77fc[1756]](false);
  this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2103]);
  this[_0x77fc[338]][_0x77fc[153]][_0x77fc[997]]();
}, Live[_0x77fc[170]][_0x77fc[1124]] = function() {
  hideElem(this[_0x77fc[338]][_0x77fc[21]]);
  hideElem(this[_0x77fc[338]][_0x77fc[20]]);
  showElem(this[_0x77fc[338]][_0x77fc[16]]);
  showElem(this[_0x77fc[338]][_0x77fc[17]]);
  if (2 === this[_0x77fc[423]]) {
    showElem(this[_0x77fc[390]]);
  }
}, Live[_0x77fc[170]][_0x77fc[1804]] = function(canCreateDiscussions) {
  if (canCreateDiscussions[_0x77fc[464]] && this[_0x77fc[2105]](canCreateDiscussions[_0x77fc[312]], canCreateDiscussions[_0x77fc[2104]], canCreateDiscussions[_0x77fc[971]]), canCreateDiscussions[_0x77fc[2106]] && !this[_0x77fc[338]][_0x77fc[50]] && !this[_0x77fc[338]][_0x77fc[67]]) {
    if (_0x77fc[1986] == typeof canCreateDiscussions[_0x77fc[2106]]) {
      let _0xe1a7x7 = this[_0x77fc[338]][_0x77fc[144]][_0x77fc[2107]](canCreateDiscussions[_0x77fc[2104]], canCreateDiscussions[_0x77fc[971]]);
      canCreateDiscussions[_0x77fc[2106]][_0x77fc[2108]] = _0xe1a7x7[_0x77fc[1619]](_0x77fc[2109], _0x77fc[2110]) + _0x77fc[2111] + this[_0x77fc[418]];
    }
    this[_0x77fc[338]][_0x77fc[153]][_0x77fc[2112]](canCreateDiscussions[_0x77fc[2106]]);
  }
}, Live[_0x77fc[170]][_0x77fc[1756]] = function(canCreateDiscussions) {
  if (this[_0x77fc[436]]) {
    this[_0x77fc[379]][_0x77fc[1501]] = false;
  } else {
    this[_0x77fc[379]][_0x77fc[1501]] = canCreateDiscussions;
  }
}, Live[_0x77fc[170]][_0x77fc[2105]] = function(vguid, mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
  if (this[_0x77fc[332]]) {
    var ytVideoSrc = this[_0x77fc[2113]](mmCoreSplitViewBlock, mmaPushNotificationsComponent) + _0x77fc[2114] + vguid;
    var _0xe1a7x13 = 5 === mmCoreSplitViewBlock ? _0x77fc[2115] : _0x77fc[2116];
    if (7 === mmCoreSplitViewBlock) {
      _0xe1a7x13 = _0x77fc[2117];
    } else {
      if (8 === mmCoreSplitViewBlock) {
        _0xe1a7x13 = _0x77fc[2118];
      }
    }
    this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[2119]] + _0x77fc[2120] + vguid + _0x77fc[2121] + vguid + _0x77fc[2122] + ytVideoSrc + _0x77fc[1834] + _0xe1a7x13 + _0x77fc[2123]);
  } else {
    this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[2124]] + _0x77fc[2120] + vguid + _0x77fc[2121] + vguid + _0x77fc[2123]);
  }
}, Live[_0x77fc[170]][_0x77fc[2113]] = function(modelIndex, m) {
  var waitBeforeReconnect = _0x77fc[46];
  var reconnectTimeIncrease = _0x77fc[46];
  if (m >= 10 && 6 != modelIndex) {
    var indexLookupKey = Math[_0x77fc[314]](m / 10);
    var currentIndex = this[_0x77fc[338]][_0x77fc[144]][_0x77fc[769]][indexLookupKey];
    if (0 !== indexLookupKey && currentIndex) {
      reconnectTimeIncrease = _0x77fc[2125] + currentIndex[_0x77fc[838]];
      m = m % 10;
    } else {
      reconnectTimeIncrease = _0x77fc[46];
    }
  }
  switch(modelIndex) {
    case 1:
      waitBeforeReconnect = _0x77fc[2126] + (this[_0x77fc[338]][_0x77fc[60]][m] + _0x77fc[2127]);
      break;
    case 3:
      waitBeforeReconnect = _0x77fc[2128] + (this[_0x77fc[338]][_0x77fc[61]][m] + _0x77fc[2127]);
      break;
    case 4:
      waitBeforeReconnect = _0x77fc[2129] + ([_0x77fc[2130]][m] + _0x77fc[2127]);
      break;
    case 5:
      waitBeforeReconnect = _0x77fc[2131];
      break;
    case 6:
      waitBeforeReconnect = _0x77fc[2132] + m + _0x77fc[2133];
      break;
    case 7:
      waitBeforeReconnect = _0x77fc[2134];
      break;
    case 8:
      waitBeforeReconnect = _0x77fc[2135];
  }
  return waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
}, Live[_0x77fc[170]][_0x77fc[979]] = function() {
  if (this[_0x77fc[337]]) {
    var data = new Object;
    /** @type {number} */
    data[_0x77fc[180]] = 22;
    data[_0x77fc[532]] = this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[1001]];
    this[_0x77fc[1499]](JSON[_0x77fc[1520]](data));
  }
}, Live[_0x77fc[170]][_0x77fc[1121]] = function(canCreateDiscussions) {
  if (-1 !== canCreateDiscussions[_0x77fc[732]]) {
    var t = canCreateDiscussions[_0x77fc[2136]]();
    var section = canCreateDiscussions[_0x77fc[1823]]();
    var valToSet = sprintTimeFormat(t, 3);
    var part_id = _0x77fc[46];
    var images = _0x77fc[46];
    if (0 === canCreateDiscussions[_0x77fc[728]][_0x77fc[972]] && 1 === this[_0x77fc[338]][_0x77fc[55]] && (1 === this[_0x77fc[338]][_0x77fc[58]] && 20 === this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1406]] && 40 === this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1217]] || 2 === this[_0x77fc[338]][_0x77fc[58]] && 10 === this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1406]] && 20 === this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1217]]) && (canCreateDiscussions[_0x77fc[728]][_0x77fc[971]] = 458753, this[_0x77fc[338]][_0x77fc[55]] = 
    7, this[_0x77fc[338]][_0x77fc[58]] = 1, 20 === this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1406]] && (this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1437]] = Math[_0x77fc[1196]](1E3 * t)), section = canCreateDiscussions[_0x77fc[1823]]()), canCreateDiscussions[_0x77fc[728]][_0x77fc[972]] > 0) {
      let _0xe1a7x7 = this[_0x77fc[338]][_0x77fc[144]][_0x77fc[769]][canCreateDiscussions[_0x77fc[728]][_0x77fc[972]]];
      part_id = _0x77fc[2125] + _0xe1a7x7[_0x77fc[838]];
      if (_0xe1a7x7[_0x77fc[333]]) {
        images = _0xe1a7x7[_0x77fc[333]] + _0x77fc[1555];
      }
    }
    var data = new Object;
    if (1 === this[_0x77fc[338]][_0x77fc[55]]) {
      var divider = this[_0x77fc[338]][_0x77fc[60]][this[_0x77fc[338]][_0x77fc[58]]] + _0x77fc[2127];
      this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[531]] + _0x77fc[1555] + i18n[_0x77fc[2137]] + _0x77fc[2138] + valToSet + _0x77fc[2139] + i18n[_0x77fc[2140]] + _0x77fc[2141] + divider + part_id + _0x77fc[2142] + images + divider + _0x77fc[1555] + i18n[_0x77fc[2143]] + _0x77fc[2123]);
    } else {
      if (3 === this[_0x77fc[338]][_0x77fc[55]]) {
        divider = this[_0x77fc[338]][_0x77fc[61]][this[_0x77fc[338]][_0x77fc[58]]] + _0x77fc[2127];
        this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[788]] + _0x77fc[1555] + i18n[_0x77fc[2137]] + _0x77fc[2138] + valToSet + _0x77fc[2139] + i18n[_0x77fc[2140]] + _0x77fc[2144] + divider + part_id + _0x77fc[2142] + images + divider + _0x77fc[1555] + i18n[_0x77fc[2143]] + _0x77fc[2123]);
      } else {
        if (4 === this[_0x77fc[338]][_0x77fc[55]]) {
          part_id = _0x77fc[1370] + part_id[_0x77fc[1247]](1);
          t = canCreateDiscussions[_0x77fc[2136]](false);
          this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[794]] + _0x77fc[1555] + i18n[_0x77fc[2137]] + _0x77fc[2138] + valToSet + _0x77fc[2139] + i18n[_0x77fc[2140]] + _0x77fc[2145] + part_id + _0x77fc[2142] + images + i18n[_0x77fc[2143]] + _0x77fc[2123]);
        } else {
          if (5 === this[_0x77fc[338]][_0x77fc[55]]) {
            part_id = _0x77fc[1370] + part_id[_0x77fc[1247]](1);
            data[_0x77fc[2146]] = this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1105]];
            this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[796]] + _0x77fc[2147] + this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1105]] + _0x77fc[2148] + i18n[_0x77fc[2140]] + _0x77fc[2149] + part_id + _0x77fc[2142] + images + i18n[_0x77fc[2143]] + _0x77fc[2123]);
          } else {
            if (6 === this[_0x77fc[338]][_0x77fc[55]]) {
              var _0xe1a7x3a = this[_0x77fc[338]][_0x77fc[158]][_0x77fc[988]][_0x77fc[333]];
              if (this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2150] + _0xe1a7x3a + _0x77fc[2151] + i18n[_0x77fc[2137]] + _0x77fc[2138] + valToSet + _0x77fc[2139] + i18n[_0x77fc[2140]] + _0x77fc[2152] + this[_0x77fc[338]][_0x77fc[158]][_0x77fc[990]] + _0x77fc[2153] + i18n[_0x77fc[2143]] + _0x77fc[2123]), this[_0x77fc[338]][_0x77fc[158]][_0x77fc[988]][_0x77fc[2154]] !== this[_0x77fc[338]][_0x77fc[158]][_0x77fc[2155]]) {
                return void this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[2156]]);
              }
            } else {
              if (7 === this[_0x77fc[338]][_0x77fc[55]]) {
                if (part_id = _0x77fc[1370] + part_id[_0x77fc[1247]](1), data[_0x77fc[2146]] = this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1406]], data[_0x77fc[2157]] = this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1437]], this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2158] + this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1406]] + _0x77fc[2159] + valToSet + _0x77fc[2139] + i18n[_0x77fc[2140]] + _0x77fc[2160] + part_id + _0x77fc[2142] + images + i18n[_0x77fc[2143]] + _0x77fc[2123]), this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1406]] < 
                1) {
                  return void this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[2161]]);
                }
              } else {
                if (8 === this[_0x77fc[338]][_0x77fc[55]] && (part_id = _0x77fc[1370] + part_id[_0x77fc[1247]](1), data[_0x77fc[2146]] = this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1426]], this[_0x77fc[338]][_0x77fc[108]] -= this[_0x77fc[338]][_0x77fc[125]][_0x77fc[1087]], data[_0x77fc[2146]] > 0 && (data[_0x77fc[2162]] = t, t = this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1438]], valToSet = sprintTimeFormat(t, 3)), this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[799]] + _0x77fc[2163] + this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1426]] + 
                _0x77fc[2164] + valToSet + _0x77fc[2139] + i18n[_0x77fc[2140]] + _0x77fc[2165] + part_id + _0x77fc[2142] + images + i18n[_0x77fc[2143]] + _0x77fc[2123]), this[_0x77fc[338]][_0x77fc[238]][_0x77fc[1426]] < 2)) {
                  return void this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[2166]]);
                }
              }
            }
          }
        }
      }
    }
    /** @type {number} */
    data[_0x77fc[180]] = 17;
    data[_0x77fc[2104]] = this[_0x77fc[338]][_0x77fc[55]];
    data[_0x77fc[971]] = this[_0x77fc[338]][_0x77fc[58]];
    data[_0x77fc[1108]] = t;
    data[_0x77fc[842]] = this[_0x77fc[338]][_0x77fc[111]];
    data[_0x77fc[2167]] = this[_0x77fc[338]][_0x77fc[108]];
    data[_0x77fc[532]] = canCreateDiscussions[_0x77fc[728]][_0x77fc[1001]];
    data[_0x77fc[972]] = canCreateDiscussions[_0x77fc[728]][_0x77fc[972]];
    if (canCreateDiscussions[_0x77fc[728]][_0x77fc[1807]]) {
      data[_0x77fc[1807]] = canCreateDiscussions[_0x77fc[728]][_0x77fc[1807]];
    }
    if (this[_0x77fc[337]]) {
      data[_0x77fc[464]] = section;
      this[_0x77fc[1499]](JSON[_0x77fc[1520]](data));
    } else {
      canCreateDiscussions[_0x77fc[728]][_0x77fc[2168]] = data;
      data[_0x77fc[464]] = section = canCreateDiscussions[_0x77fc[1823]]();
      this[_0x77fc[338]][_0x77fc[156]][_0x77fc[1808]](this, _0x77fc[2169]);
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1140]] = function() {
  var data = new Object;
  /** @type {number} */
  data[_0x77fc[180]] = 18;
  this[_0x77fc[1499]](JSON[_0x77fc[1520]](data));
}, Live[_0x77fc[170]][_0x77fc[1867]] = function(n, canCreateDiscussions) {
  if (n >= 1 && n <= 6) {
    this[_0x77fc[338]][_0x77fc[128]] = Math[_0x77fc[2170]](2, n) - 1 >>> 0;
    this[_0x77fc[363]] = true;
    if (canCreateDiscussions) {
      this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2171] + n + _0x77fc[2172] + this[_0x77fc[338]][_0x77fc[128]] + _0x77fc[2173]);
    }
  } else {
    this[_0x77fc[363]] = false;
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[128]] = 1;
    if (canCreateDiscussions) {
      this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2174]);
    }
  }
}, Live[_0x77fc[170]][_0x77fc[1757]] = function(canCreateDiscussions) {
  return !!canCreateDiscussions[_0x77fc[1168]](_0x77fc[609]) && (0 === canCreateDiscussions[_0x77fc[609]] ? (this[_0x77fc[1756]](false), true) : (this[_0x77fc[336]] || this[_0x77fc[1765]](canCreateDiscussions[_0x77fc[609]]), this[_0x77fc[1756]](true), true));
}, Live[_0x77fc[170]][_0x77fc[1765]] = function(canCreateDiscussions) {
  if (this[_0x77fc[381]][_0x77fc[173]][_0x77fc[388]] = _0x77fc[389], this[_0x77fc[381]][_0x77fc[173]][_0x77fc[2175]] = _0x77fc[2176], canCreateDiscussions > 0) {
    var _0xe1a7x7 = this;
    setTimeout(function() {
      _0xe1a7x7[_0x77fc[381]][_0x77fc[173]][_0x77fc[388]] = _0x77fc[2177];
      _0xe1a7x7[_0x77fc[381]][_0x77fc[173]][_0x77fc[2175]] = canCreateDiscussions + _0x77fc[532];
    }, 10);
  }
}, Live[_0x77fc[170]][_0x77fc[2178]] = function(canCreateDiscussions) {
  if (this[_0x77fc[459]][_0x77fc[863]]) {
    return;
  }
  let _0xe1a7x7 = this[_0x77fc[403]];
  if (this[_0x77fc[403]] = this[_0x77fc[371]][_0x77fc[2003]] + this[_0x77fc[371]][_0x77fc[1265]] >= this[_0x77fc[371]][_0x77fc[2004]] - 42, !this[_0x77fc[403]] && _0xe1a7x7) {
    let artistTrack = document[_0x77fc[383]](_0x77fc[1873]);
    this[_0x77fc[1990]] = artistTrack;
    artistTrack[_0x77fc[604]] = document[_0x77fc[3]](_0x77fc[2179])[_0x77fc[604]];
    artistTrack[_0x77fc[386]][_0x77fc[385]](_0x77fc[2180]);
    var _0xe1a7x8 = this;
    artistTrack[_0x77fc[1322]](_0x77fc[1228], function() {
      _0xe1a7x8[_0x77fc[403]] = true;
      _0xe1a7x8[_0x77fc[371]][_0x77fc[2003]] = _0xe1a7x8[_0x77fc[371]][_0x77fc[2004]];
    });
    this[_0x77fc[371]][_0x77fc[387]](artistTrack);
  } else {
    if (this[_0x77fc[403]] && this[_0x77fc[1990]]) {
      this[_0x77fc[2181]]();
    }
  }
}, Live[_0x77fc[170]][_0x77fc[2181]] = function() {
  try {
    this[_0x77fc[371]][_0x77fc[1340]](this[_0x77fc[1990]]);
  } catch (t) {
  }
}, Live[_0x77fc[170]][_0x77fc[2182]] = function(exports) {
  var e = _0x77fc[730] != typeof exports ? this[_0x77fc[375]][_0x77fc[601]][_0x77fc[1619]](/"/g, _0x77fc[1618]) : exports;
  if (this[_0x77fc[338]][_0x77fc[127]] = 0, this[_0x77fc[332]] && void 0 !== this[_0x77fc[348]][this[_0x77fc[339]]] && _0x77fc[2183] === this[_0x77fc[348]][this[_0x77fc[339]]][_0x77fc[333]]) {
    if (_0x77fc[2184] === e[_0x77fc[1045]](0, 2)) {
      var intTempPreference = parseInt(e[_0x77fc[1045]](2, e[_0x77fc[237]]));
      e = _0x77fc[2185] + intTempPreference + _0x77fc[2096];
    } else {
      if (_0x77fc[2186] === e[_0x77fc[1045]](0, 2)) {
        intTempPreference = parseInt(e[_0x77fc[1045]](2, e[_0x77fc[237]]));
        e = _0x77fc[2187] + intTempPreference + _0x77fc[2096];
      }
    }
  }
  if (e[_0x77fc[237]] > 0) {
    if (_0x77fc[2188] === e) {
      this[_0x77fc[338]][_0x77fc[150]][_0x77fc[2189]]();
      this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2190]);
    } else {
      if (_0x77fc[2191] === e || _0x77fc[2192] === e || _0x77fc[2193] === e || _0x77fc[2194] === e) {
        if (this[_0x77fc[359]]) {
          this[_0x77fc[1116]](_0x77fc[46], i18n[_0x77fc[2195]] + _0x77fc[2196] + this[_0x77fc[359]] + _0x77fc[2197] + this[_0x77fc[359]] + _0x77fc[1697]);
        } else {
          this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2198]);
        }
      } else {
        if (_0x77fc[2199] === e || _0x77fc[2200] === e || _0x77fc[2201] === e) {
          if (this[_0x77fc[336]]) {
            this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[2202]] + _0x77fc[1719]);
          } else {
            this[_0x77fc[1026]]();
          }
        } else {
          if (_0x77fc[2203] === e) {
            if (this[_0x77fc[336]]) {
              this[_0x77fc[1799]]();
            } else {
              this[_0x77fc[1116]](_0x77fc[46], _0x77fc[1716] + i18n[_0x77fc[2204]] + _0x77fc[1719]);
            }
          } else {
            if (_0x77fc[2205] === e || _0x77fc[2206] === e || _0x77fc[2207] === e) {
              exports = _0x77fc[2208];
              this[_0x77fc[1499]](exports);
            } else {
              if (_0x77fc[2209] === e) {
                this[_0x77fc[367]][_0x77fc[419]] = _0x77fc[46];
              } else {
                if (_0x77fc[2210] === e) {
                  this[_0x77fc[338]][_0x77fc[1184]](0);
                } else {
                  if (_0x77fc[2211] === e || _0x77fc[2212] === e) {
                    this[_0x77fc[338]][_0x77fc[1184]](1);
                  } else {
                    if (_0x77fc[2213] === e) {
                      this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2214]);
                      this[_0x77fc[338]][_0x77fc[26]] = true;
                    } else {
                      if (_0x77fc[2215] === e) {
                        this[_0x77fc[338]][_0x77fc[82]] = !this[_0x77fc[338]][_0x77fc[82]];
                        this[_0x77fc[338]][_0x77fc[1184]](0);
                        if (this[_0x77fc[338]][_0x77fc[662]]) {
                          this[_0x77fc[338]][_0x77fc[662]][_0x77fc[2216]](3);
                        }
                      } else {
                        if (_0x77fc[2217] === e) {
                          this[_0x77fc[1116]](_0x77fc[46], this[_0x77fc[323]]);
                        } else {
                          if (_0x77fc[2218] === e || _0x77fc[2219] === e || _0x77fc[2220] === e) {
                            var _0xe1a7x12 = _0x77fc[1885] + this[_0x77fc[354]];
                            this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2221] + _0xe1a7x12 + _0x77fc[1119]);
                          } else {
                            if (_0x77fc[2222] === e) {
                              var artistTrack = _0x77fc[1815] + i18n[_0x77fc[2223]] + _0x77fc[2224];
                              this[_0x77fc[338]][_0x77fc[145]][0];
                              artistTrack = artistTrack + (i18n[_0x77fc[1144]] + _0x77fc[1718] + JSON[_0x77fc[1520]](this[_0x77fc[338]][_0x77fc[116]])[_0x77fc[1247]](1)[_0x77fc[310]](0, -1) + _0x77fc[2225] + i18n[_0x77fc[801]] + _0x77fc[1718] + JSON[_0x77fc[1520]](this[_0x77fc[338]][_0x77fc[122]])[_0x77fc[1247]](1)[_0x77fc[310]](0, -1) + _0x77fc[2225] + i18n[_0x77fc[1575]] + _0x77fc[1718] + (this[_0x77fc[438]] ? _0x77fc[2226] + this[_0x77fc[438]] + _0x77fc[2227] : _0x77fc[2228]) + _0x77fc[2225] + 
                              i18n[_0x77fc[1003]] + _0x77fc[1718] + (this[_0x77fc[338]][_0x77fc[147]][_0x77fc[179]] ? _0x77fc[2226] + this[_0x77fc[338]][_0x77fc[147]][_0x77fc[179]] + _0x77fc[2229] : _0x77fc[2228]) + _0x77fc[2225] + i18n[_0x77fc[732]] + _0x77fc[1718] + [_0x77fc[2230], _0x77fc[1891], _0x77fc[1650], _0x77fc[2231]][this[_0x77fc[423]]] + _0x77fc[2225] + i18n[_0x77fc[917]] + _0x77fc[1718] + this[_0x77fc[446]][this[_0x77fc[445]]] + _0x77fc[2225] + i18n[_0x77fc[1572]] + _0x77fc[1718] + this[_0x77fc[338]][_0x77fc[147]][_0x77fc[455]] + 
                              _0x77fc[2232] + i18n[_0x77fc[2233]] + _0x77fc[1718] + this[_0x77fc[338]][_0x77fc[147]][_0x77fc[754]] + _0x77fc[513]);
                              this[_0x77fc[1116]](_0x77fc[46], artistTrack);
                            } else {
                              if (_0x77fc[2234] === e[_0x77fc[1045]](0, 4)) {
                                this[_0x77fc[1116]](_0x77fc[46], this[_0x77fc[338]][_0x77fc[12]][_0x77fc[629]][parseInt(e[_0x77fc[1514]](_0x77fc[1555])[1])][_0x77fc[339]]);
                              } else {
                                if (_0x77fc[2235] === e) {
                                  exports = _0x77fc[2236];
                                  this[_0x77fc[424]] = this[_0x77fc[338]][_0x77fc[136]]();
                                  this[_0x77fc[1499]](exports);
                                } else {
                                  if (_0x77fc[2237] === e) {
                                    this[_0x77fc[337]][_0x77fc[1852]]();
                                  } else {
                                    if (_0x77fc[2238] === e) {
                                      var criterion_index;
                                      for (criterion_index in this[_0x77fc[348]]) {
                                        this[_0x77fc[1116]](criterion_index, this[_0x77fc[348]][criterion_index][_0x77fc[333]]);
                                      }
                                    } else {
                                      if (_0x77fc[2239] === e) {
                                        if (window[_0x77fc[2240]] && window[_0x77fc[2240]][_0x77fc[2241]]) {
                                          this[_0x77fc[1116]](_0x77fc[2242], Math[_0x77fc[1196]](1E3 * window[_0x77fc[2240]][_0x77fc[2241]][_0x77fc[2243]] / 1048576) / 1E3 + _0x77fc[2244]);
                                        } else {
                                          this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2245]);
                                        }
                                      } else {
                                        if (_0x77fc[2246] === e[_0x77fc[1045]](0, 5)) {
                                          this[_0x77fc[338]][_0x77fc[12]][_0x77fc[2247]](parseInt(e[_0x77fc[1514]](_0x77fc[1555])[1]));
                                        } else {
                                          if (_0x77fc[2248] === e[_0x77fc[1045]](0, 6)) {
                                            this[_0x77fc[338]][_0x77fc[12]][_0x77fc[643]](parseInt(e[_0x77fc[1514]](_0x77fc[1555])[1]));
                                          } else {
                                            if (_0x77fc[2249] === e[_0x77fc[1045]](0, 7)) {
                                              this[_0x77fc[338]][_0x77fc[12]][_0x77fc[2250]]([parseInt(e[_0x77fc[1514]](_0x77fc[1555])[1]), parseInt(e[_0x77fc[1514]](_0x77fc[1555])[2])]);
                                            } else {
                                              if (_0x77fc[2251] === e) {
                                                this[_0x77fc[338]][_0x77fc[12]][_0x77fc[619]] = !this[_0x77fc[338]][_0x77fc[12]][_0x77fc[619]];
                                                this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1748]]();
                                              } else {
                                                if (_0x77fc[2252] === e || _0x77fc[2253] === e) {
                                                  this[_0x77fc[338]][_0x77fc[12]][_0x77fc[2102]](!this[_0x77fc[338]][_0x77fc[12]][_0x77fc[618]]);
                                                } else {
                                                  if (_0x77fc[2254] === e || _0x77fc[2255] === e) {
                                                    this[_0x77fc[338]][_0x77fc[12]][_0x77fc[1748]]();
                                                  } else {
                                                    if (_0x77fc[2256] === e) {
                                                      this[_0x77fc[338]][_0x77fc[156]][_0x77fc[1823]]();
                                                      this[_0x77fc[338]][_0x77fc[156]][_0x77fc[1808]](this, _0x77fc[2257]);
                                                    } else {
                                                      if (_0x77fc[2258] === e) {
                                                        if (this[_0x77fc[1168]](_0x77fc[1818]) && this[_0x77fc[1818]] && this[_0x77fc[348]][this[_0x77fc[1818]]]) {
                                                          this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2259] + this[_0x77fc[348]][this[_0x77fc[1818]]][_0x77fc[333]]);
                                                        } else {
                                                          this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2260]);
                                                        }
                                                      } else {
                                                        if (_0x77fc[2261] === e[_0x77fc[1045]](0, 8)) {
                                                          this[_0x77fc[1867]](parseInt(e[_0x77fc[1514]](_0x77fc[1555])[1]), true);
                                                        } else {
                                                          if (this[_0x77fc[337]]) {
                                                            if (this[_0x77fc[459]][_0x77fc[2262]]()) {
                                                              this[_0x77fc[459]][_0x77fc[2182]](e);
                                                            } else {
                                                              var data = {
                                                                t : 6,
                                                                m : e
                                                              };
                                                              this[_0x77fc[1499]](JSON[_0x77fc[1520]](data));
                                                            }
                                                          } else {
                                                            this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2263]);
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
  this[_0x77fc[375]][_0x77fc[601]] = _0x77fc[46];
}, Live[_0x77fc[170]][_0x77fc[1851]] = function(descriptor) {
  var graphic = document[_0x77fc[383]](_0x77fc[660]);
  graphic[_0x77fc[386]][_0x77fc[385]](_0x77fc[2264]);
  var sector = document[_0x77fc[383]](_0x77fc[660]);
  sector[_0x77fc[386]][_0x77fc[385]](_0x77fc[894]);
  graphic[_0x77fc[387]](sector);
  var clipPath = document[_0x77fc[383]](_0x77fc[720]);
  clipPath[_0x77fc[1792]] = _0x77fc[1980];
  clipPath[_0x77fc[386]][_0x77fc[385]](_0x77fc[2265], _0x77fc[2266]);
  clipPath[_0x77fc[1322]](_0x77fc[1228], function(canCreateDiscussions) {
    canCreateDiscussions[_0x77fc[1875]][_0x77fc[1982]][_0x77fc[1472]]();
  }, false);
  graphic[_0x77fc[387]](clipPath);
  var rect = document[_0x77fc[383]](_0x77fc[720]);
  rect[_0x77fc[419]] = _0x77fc[2267];
  rect[_0x77fc[1792]] = _0x77fc[1980];
  rect[_0x77fc[173]][_0x77fc[2268]] = _0x77fc[2269];
  rect[_0x77fc[386]][_0x77fc[385]](_0x77fc[2265]);
  var _0xe1a7x1e = this;
  rect[_0x77fc[1322]](_0x77fc[1228], function(canCreateDiscussions) {
    _0xe1a7x1e[_0x77fc[2182]](_0x77fc[2270]);
    canCreateDiscussions[_0x77fc[1875]][_0x77fc[1982]][_0x77fc[1472]]();
  });
  graphic[_0x77fc[387]](rect);
  document[_0x77fc[1341]][_0x77fc[387]](graphic);
  sector[_0x77fc[604]] = _0x77fc[2271];
  var $errorContainer = document[_0x77fc[383]](_0x77fc[2272]);
  $errorContainer[_0x77fc[386]][_0x77fc[385]](_0x77fc[2273]);
  Object[_0x77fc[1207]](descriptor)[_0x77fc[1097]](function(settingName) {
    var p = document[_0x77fc[383]](_0x77fc[2274]);
    /** @type {!Array} */
    var service_obj = [];
    var bonusModeActive = false;
    var captures = _0x77fc[1815] + settingName + _0x77fc[1770] + (descriptor[settingName][_0x77fc[2275]][_0x77fc[338]] ? _0x77fc[2276] : _0x77fc[46]) + _0x77fc[2277] + descriptor[settingName][_0x77fc[2275]][_0x77fc[311]];
    var id;
    for (id in captures = captures + _0x77fc[2278], descriptor[settingName][_0x77fc[348]]) {
      var status = descriptor[settingName][_0x77fc[348]][id];
      status[_0x77fc[339]] = id;
      service_obj[_0x77fc[308]](status);
    }
    service_obj[_0x77fc[1895]](function(subtractor, subtractee) {
      return subtractor[_0x77fc[2279]] - subtractee[_0x77fc[2279]];
    });
    service_obj[_0x77fc[1097]](function(params) {
      if (params[_0x77fc[2279]] && !bonusModeActive) {
        bonusModeActive = true;
        captures = captures + _0x77fc[2280];
      }
      captures = captures + (_0x77fc[2281] + params[_0x77fc[339]] + _0x77fc[2277] + function(b) {
        var f = _0x77fc[46];
        return b[_0x77fc[466]] ? f = _0x77fc[1693] + b[_0x77fc[333]] + _0x77fc[1834] + b[_0x77fc[333]] + _0x77fc[1697] : (f = f + (null === b[_0x77fc[333]] ? _0x77fc[2282] : b[_0x77fc[333]]), f = f + _0x77fc[2283]), b[_0x77fc[2279]] && (f = f + _0x77fc[2284]), f;
      }(params) + _0x77fc[2285] + params[_0x77fc[339]] + _0x77fc[2286] + params[_0x77fc[339]] + _0x77fc[2287]);
    });
    captures = captures + _0x77fc[2288];
    p[_0x77fc[604]] = captures;
    $errorContainer[_0x77fc[387]](p);
  });
  sector[_0x77fc[387]]($errorContainer);
  var PL$13 = document[_0x77fc[592]](_0x77fc[2289]);
  var PL$17 = (_0xe1a7x1e = this, 0);
  for (; PL$17 < PL$13[_0x77fc[237]]; PL$17++) {
    PL$13[PL$17][_0x77fc[1322]](_0x77fc[1228], function() {
      var _0xe1a7x4 = _0x77fc[2290] + this[_0x77fc[1541]][_0x77fc[339]];
      _0xe1a7x1e[_0x77fc[337]][_0x77fc[1522]](_0x77fc[2291] + _0xe1a7x4 + _0x77fc[2292] + _0xe1a7x1e[_0x77fc[339]] + _0x77fc[2096]);
    });
  }
  PL$13 = document[_0x77fc[592]](_0x77fc[2293]);
  _0xe1a7x1e = this;
  /** @type {number} */
  PL$17 = 0;
  for (; PL$17 < PL$13[_0x77fc[237]]; PL$17++) {
    PL$13[PL$17][_0x77fc[1322]](_0x77fc[1228], function() {
      var no = this[_0x77fc[1541]][_0x77fc[339]];
      if (confirm(_0x77fc[2294] + no + _0x77fc[2295])) {
        var xhrb = new XMLHttpRequest;
        /**
         * @return {undefined}
         */
        xhrb[_0x77fc[1656]] = function() {
          if (4 === xhrb[_0x77fc[1657]] && 200 === xhrb[_0x77fc[1658]]) {
            var tmpSlug = _0x77fc[2296];
            _0xe1a7x1e[_0x77fc[337]][_0x77fc[1522]](_0x77fc[2291] + tmpSlug + _0x77fc[2292] + _0xe1a7x1e[_0x77fc[339]] + _0x77fc[2096]);
            tmpSlug = _0x77fc[2290] + no;
            _0xe1a7x1e[_0x77fc[337]][_0x77fc[1522]](_0x77fc[2291] + tmpSlug + _0x77fc[2292] + _0xe1a7x1e[_0x77fc[339]] + _0x77fc[2096]);
          }
        };
        xhrb[_0x77fc[1549]](_0x77fc[1547], _0x77fc[2297] + no, true);
        xhrb[_0x77fc[1522]](null);
      }
    });
  }
}, Live[_0x77fc[170]][_0x77fc[969]] = function() {
  this[_0x77fc[457]] = true;
  this[_0x77fc[367]][_0x77fc[419]] = _0x77fc[46];
  this[_0x77fc[1116]](_0x77fc[1117] + i18n[_0x77fc[1703]] + _0x77fc[1119], _0x77fc[2298]);
  this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2299]);
  this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2300]);
  this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2301] + this[_0x77fc[323]] + _0x77fc[2302]);
  this[_0x77fc[1116]](_0x77fc[46], _0x77fc[2303]);
}, Live[_0x77fc[170]][_0x77fc[976]] = function(limitFromUnread, excluded) {
  limitFromUnread = limitFromUnread || false;
  excluded = excluded || false;
  let webSiteExcluded = _0x77fc[174] === document[_0x77fc[3]](_0x77fc[19])[_0x77fc[173]][_0x77fc[172]];
  if (limitFromUnread) {
    webSiteExcluded = !excluded;
  }
  document[_0x77fc[3]](_0x77fc[19])[_0x77fc[173]][_0x77fc[172]] = webSiteExcluded ? _0x77fc[175] : _0x77fc[174];
  document[_0x77fc[3]](_0x77fc[2304])[_0x77fc[419]] = webSiteExcluded ? i18n[_0x77fc[2305]] : i18n[_0x77fc[2306]];
}, Live[_0x77fc[170]][_0x77fc[1462]] = function(canCreateDiscussions) {
  canCreateDiscussions = canCreateDiscussions[_0x77fc[1619]](/[\[]/, _0x77fc[2308])[_0x77fc[1619]](/[\]]/, _0x77fc[2307]);
  var d3_map_zero = (new RegExp(_0x77fc[2311] + canCreateDiscussions + _0x77fc[2312]))[_0x77fc[2310]](location[_0x77fc[2309]]);
  return null === d3_map_zero ? _0x77fc[46] : decodeURIComponent(d3_map_zero[1][_0x77fc[1619]](/\+/g, _0x77fc[1555]));
}, Live[_0x77fc[170]][_0x77fc[1533]] = function(name, canCreateDiscussions) {
  canCreateDiscussions = void 0 === canCreateDiscussions || canCreateDiscussions;
  var PL$13 = document[_0x77fc[592]](name);
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13[_0x77fc[237]]; PL$17++) {
    PL$13[PL$17][_0x77fc[173]][_0x77fc[172]] = canCreateDiscussions ? _0x77fc[603] : _0x77fc[175];
  }
}, RoomInfo[_0x77fc[170]][_0x77fc[1931]] = function() {
  var fieldDetails = Array[_0x77fc[1597]](this[_0x77fc[469]][_0x77fc[404]][_0x77fc[592]](_0x77fc[2313]));
  for (let fieldDetail of fieldDetails) {
    fieldDetail[_0x77fc[1322]](_0x77fc[2314], this[_0x77fc[2315]][_0x77fc[430]](this));
    fieldDetail[_0x77fc[1322]](_0x77fc[2316], this[_0x77fc[2317]][_0x77fc[430]](this));
  }
  this[_0x77fc[474]] = {};
}, RoomInfo[_0x77fc[170]][_0x77fc[1468]] = function() {
  if (null !== this[_0x77fc[470]]) {
    this[_0x77fc[470]][_0x77fc[2318]][_0x77fc[1340]](this[_0x77fc[470]]);
    /** @type {null} */
    this[_0x77fc[470]] = null;
  }
  /** @type {null} */
  this[_0x77fc[472]] = null;
  this[_0x77fc[473]] = {};
  this[_0x77fc[474]] = {};
}, RoomInfo[_0x77fc[170]][_0x77fc[2319]] = function(canCreateDiscussions) {
  if (this[_0x77fc[472]]) {
    clearTimeout(this[_0x77fc[472]]);
    /** @type {null} */
    this[_0x77fc[472]] = null;
  }
}, RoomInfo[_0x77fc[170]][_0x77fc[2320]] = function(canCreateDiscussions) {
  hideElem(this[_0x77fc[470]]);
  /** @type {null} */
  this[_0x77fc[472]] = null;
  if (this[_0x77fc[471]]) {
    clearTimeout(this[_0x77fc[471]]);
  }
}, RoomInfo[_0x77fc[170]][_0x77fc[383]] = function(name, importedPages, e) {
  var t = document[_0x77fc[383]](name);
  var importedPageName;
  for (importedPageName in importedPages) {
    t[_0x77fc[386]][_0x77fc[385]](importedPages[importedPageName]);
  }
  return e && e[_0x77fc[387]](t), t;
}, RoomInfo[_0x77fc[170]][_0x77fc[2321]] = function(canCreateDiscussions) {
  this[_0x77fc[469]][_0x77fc[1499]](_0x77fc[2322] + canCreateDiscussions + _0x77fc[1648]);
}, RoomInfo[_0x77fc[170]][_0x77fc[1822]] = function(canCreateDiscussions) {
  if (this[_0x77fc[469]][_0x77fc[401]]) {
    this[_0x77fc[474]][canCreateDiscussions[_0x77fc[972]]] = canCreateDiscussions;
    this[_0x77fc[2323]](canCreateDiscussions[_0x77fc[972]]);
  }
}, RoomInfo[_0x77fc[170]][_0x77fc[2323]] = function(drawtype) {
  if (this[_0x77fc[470]][_0x77fc[1541]][_0x77fc[312]] === drawtype && _0x77fc[175] !== this[_0x77fc[470]][_0x77fc[173]][_0x77fc[172]]) {
    var dali_drawtype = this[_0x77fc[474]][drawtype];
    hideElem(this[_0x77fc[473]][_0x77fc[2324]]);
    this[_0x77fc[2325]](dali_drawtype);
    this[_0x77fc[2326]](dali_drawtype);
    this[_0x77fc[2327]](dali_drawtype);
  }
}, RoomInfo[_0x77fc[170]][_0x77fc[2327]] = function(canCreateDiscussions) {
  if (null === canCreateDiscussions[_0x77fc[469]]) {
    return void hideElem(this[_0x77fc[473]][_0x77fc[2328]]);
  }
  let command_codes = this[_0x77fc[473]][_0x77fc[2328]];
  let _0xe1a7x8 = canCreateDiscussions[_0x77fc[469]][_0x77fc[972]];
  let object = canCreateDiscussions[_0x77fc[469]][_0x77fc[469]];
  let obj = canCreateDiscussions[_0x77fc[469]][_0x77fc[532]] || {};
  this[_0x77fc[473]][_0x77fc[2328]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[2329];
  let data = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2330]], null);
  if (_0xe1a7x8) {
    command_codes[_0x77fc[386]][_0x77fc[385]](_0x77fc[2331]);
    command_codes[_0x77fc[386]][_0x77fc[1472]](_0x77fc[2332]);
    command_codes[_0x77fc[604]] = getSVG(_0x77fc[1901], _0x77fc[1898], _0x77fc[2333]);
    data[_0x77fc[604]] = _0x77fc[2334] + i18n[_0x77fc[2335]] + _0x77fc[2336];
  } else {
    command_codes[_0x77fc[386]][_0x77fc[385]](_0x77fc[2332]);
    command_codes[_0x77fc[386]][_0x77fc[1472]](_0x77fc[2331]);
    command_codes[_0x77fc[604]] = getSVG(_0x77fc[1902], _0x77fc[1898], _0x77fc[2333]);
    data[_0x77fc[604]] = _0x77fc[2334] + i18n[_0x77fc[2337]] + _0x77fc[2336];
  }
  let exploreObject2 = function(fullName) {
    let _0xe1a7x7 = fullName[0];
    let _0xe1a7x8 = fullName[1];
    return _0xe1a7x7 || (_0xe1a7x7 = _0x77fc[525]), _0xe1a7x8 || (_0xe1a7x8 = _0x77fc[793]), _0x77fc[2338] + _0xe1a7x7 + _0x77fc[1503] + _0xe1a7x8 + _0x77fc[2339];
  };
  let serializeObject = function(sampleNr, name) {
    let spaceLower = name[0];
    let spaceHigher = name[1];
    return sampleNr && (!spaceLower && !spaceHigher || !spaceLower && sampleNr <= spaceHigher || !spaceHigher && sampleNr >= spaceLower || sampleNr <= spaceHigher && sampleNr >= spaceLower) ? _0x77fc[2340] : _0x77fc[2341];
  };
  let brightness = _0x77fc[2342];
  for (let key in object) {
    brightness = brightness + (_0x77fc[2343] + this[_0x77fc[529]][key][_0x77fc[311]] + _0x77fc[1718] + exploreObject2(object[key]) + _0x77fc[2344]);
    brightness = brightness + (_0x77fc[2345] + (serializeObject(obj[key], object[key]) + _0x77fc[1555] + (descHeaders = obj[key], currCellId = this[_0x77fc[529]][key][_0x77fc[2346]], descHeaders ? descHeaders + _0x77fc[1555] + currCellId : _0x77fc[240])) + _0x77fc[2347]);
  }
  var descHeaders;
  var currCellId;
  brightness = brightness + _0x77fc[2348];
  data[_0x77fc[604]] += brightness;
  command_codes[_0x77fc[387]](data);
}, RoomInfo[_0x77fc[170]][_0x77fc[2326]] = function(interfaces) {
  let _0xe1a7x7 = 0;
  let artistTrack = this[_0x77fc[473]][_0x77fc[2349]];
  for (; artistTrack[_0x77fc[2350]];) {
    artistTrack[_0x77fc[1340]](artistTrack[_0x77fc[2350]]);
  }
  for (let i in interfaces[_0x77fc[532]]) {
    if (!(i in this[_0x77fc[478]])) {
      continue;
    }
    let is_vert = _0x77fc[1986] == typeof this[_0x77fc[478]][i];
    let message = _0x77fc[46];
    let _0xe1a7x1f = _0x77fc[2351] + (is_vert ? this[_0x77fc[478]][i][_0x77fc[311]] : this[_0x77fc[478]][i]);
    if (_0x77fc[1467] == typeof interfaces[_0x77fc[532]][i]) {
      message = this[_0x77fc[475]][interfaces[_0x77fc[532]][i] + 0];
    } else {
      if (Array[_0x77fc[939]](interfaces[_0x77fc[532]][i])) {
      } else {
        if (is_vert && _0x77fc[6] in this[_0x77fc[478]][i]) {
          let timeout = this[_0x77fc[478]][i][_0x77fc[6]][interfaces[_0x77fc[532]][i]];
          if (null === timeout) {
            continue;
          }
          timeout = timeout || _0x77fc[1370];
          message = timeout;
        } else {
          message = interfaces[_0x77fc[532]][i];
        }
        if (is_vert && _0x77fc[2346] in this[_0x77fc[478]][i]) {
          message = message + this[_0x77fc[478]][i][_0x77fc[2346]];
        }
      }
    }
    if (message) {
      _0xe1a7x1f = _0xe1a7x1f + (_0x77fc[2352] + message + _0x77fc[1119]);
    }
    this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2353]], artistTrack)[_0x77fc[604]] = _0xe1a7x1f;
    ++_0xe1a7x7;
  }
  if (_0xe1a7x7) {
    showElem(this[_0x77fc[473]][_0x77fc[2275]]);
  }
}, RoomInfo[_0x77fc[170]][_0x77fc[2325]] = function(canCreateDiscussions) {
  this[_0x77fc[473]][_0x77fc[2354]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[2329];
  /** @type {number} */
  var nOutptIdx = 0;
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < canCreateDiscussions[_0x77fc[338]][_0x77fc[338]][_0x77fc[237]]; ++indexLookupKey) {
    if (!canCreateDiscussions[_0x77fc[338]][_0x77fc[338]][indexLookupKey][_0x77fc[1168]](_0x77fc[673])) {
      /** @type {number} */
      canCreateDiscussions[_0x77fc[338]][_0x77fc[338]][indexLookupKey][_0x77fc[673]] = 0;
    }
  }
  canCreateDiscussions[_0x77fc[338]][_0x77fc[338]][_0x77fc[1895]](function(routeA, routeB) {
    return routeA[_0x77fc[463]] && !routeB[_0x77fc[463]] ? -1 : !routeA[_0x77fc[463]] && routeB[_0x77fc[463]] ? 1 : routeA[_0x77fc[463]] && routeB[_0x77fc[463]] && routeA[_0x77fc[673]] != routeB[_0x77fc[673]] ? routeA[_0x77fc[673]] > routeB[_0x77fc[673]] ? -1 : 1 : routeA[_0x77fc[311]][_0x77fc[2355]](routeB[_0x77fc[311]]);
  });
  var newPixelShader = _0x77fc[46];
  /** @type {null} */
  var curCam = null;
  var camCat;
  for (camCat of canCreateDiscussions[_0x77fc[338]][_0x77fc[338]]) {
    if (null !== curCam && curCam === camCat[_0x77fc[311]]) {
      continue;
    }
    let technique = camCat[_0x77fc[463]] || 0;
    let unTreatedUniforms = {
      color : camCat[_0x77fc[1715]] || null,
      icon : camCat[_0x77fc[808]] || null,
      bold : camCat[_0x77fc[673]] >= 2
    };
    if (newPixelShader = newPixelShader + this[_0x77fc[469]][_0x77fc[1662]](camCat[_0x77fc[311]], technique, unTreatedUniforms), ++nOutptIdx, curCam = camCat[_0x77fc[311]], nOutptIdx >= 21) {
      break;
    }
  }
  if (canCreateDiscussions[_0x77fc[338]][_0x77fc[944]] > 21) {
    newPixelShader = newPixelShader + (_0x77fc[2356] + trans(i18n[_0x77fc[2357]], {
      cnt : canCreateDiscussions[_0x77fc[338]][_0x77fc[944]] - 21
    }) + _0x77fc[1119]);
    ++nOutptIdx;
  } else {
    if (canCreateDiscussions[_0x77fc[338]][_0x77fc[176]]) {
      newPixelShader = newPixelShader + (_0x77fc[2356] + trans(i18n[_0x77fc[2358]], {
        cnt : canCreateDiscussions[_0x77fc[338]][_0x77fc[176]]
      }) + _0x77fc[1119]);
      ++nOutptIdx;
    } else {
      if (canCreateDiscussions[_0x77fc[338]][_0x77fc[944]] + canCreateDiscussions[_0x77fc[338]][_0x77fc[532]] === 0) {
        newPixelShader = newPixelShader + (_0x77fc[2359] + i18n[_0x77fc[2360]] + _0x77fc[1119]);
      }
    }
  }
  if (canCreateDiscussions[_0x77fc[338]][_0x77fc[532]] && nOutptIdx < 22) {
    newPixelShader = newPixelShader + (_0x77fc[2356] + trans(i18n[_0x77fc[2361]], {
      cnt : canCreateDiscussions[_0x77fc[338]][_0x77fc[532]]
    }) + _0x77fc[1119]);
    ++nOutptIdx;
  }
  this[_0x77fc[473]][_0x77fc[2354]][_0x77fc[604]] = newPixelShader;
}, RoomInfo[_0x77fc[170]][_0x77fc[2315]] = function(res) {
  var artistTrack;
  var peerset = res[_0x77fc[1875]][_0x77fc[1541]][_0x77fc[312]];
  var _0xe1a7x12 = res[_0x77fc[1875]][_0x77fc[2362]][_0x77fc[1474]][0][_0x77fc[1473]];
  if (this[_0x77fc[470]]) {
    artistTrack = this[_0x77fc[470]];
    showElem(this[_0x77fc[470]]);
    this[_0x77fc[2319]]();
  } else {
    artistTrack = this[_0x77fc[470]] = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2363]], this[_0x77fc[469]][_0x77fc[404]]);
    let GET_AUTH_URL_TIMEOUT = this[_0x77fc[473]][_0x77fc[2364]] = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2365]], artistTrack);
    this[_0x77fc[473]][_0x77fc[1194]] = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2366]], GET_AUTH_URL_TIMEOUT);
    this[_0x77fc[473]][_0x77fc[2324]] = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2367]], GET_AUTH_URL_TIMEOUT);
    this[_0x77fc[473]][_0x77fc[2354]] = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2368]], GET_AUTH_URL_TIMEOUT);
    this[_0x77fc[473]][_0x77fc[2275]] = this[_0x77fc[383]](_0x77fc[660], [], GET_AUTH_URL_TIMEOUT);
    this[_0x77fc[473]][_0x77fc[2369]] = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2366], _0x77fc[2370]], this[_0x77fc[473]][_0x77fc[2275]]);
    this[_0x77fc[473]][_0x77fc[2349]] = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2368], _0x77fc[2371]], this[_0x77fc[473]][_0x77fc[2275]]);
    this[_0x77fc[473]][_0x77fc[2328]] = this[_0x77fc[383]](_0x77fc[660], [_0x77fc[2372]], artistTrack);
    this[_0x77fc[473]][_0x77fc[2369]][_0x77fc[604]] = i18n[_0x77fc[2373]];
    var _0xe1a7x13 = this[_0x77fc[383]](_0x77fc[2374], [], this[_0x77fc[473]][_0x77fc[2324]]);
    _0xe1a7x13[_0x77fc[38]] = CDN_URL(_0x77fc[2375]);
    _0xe1a7x13[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2376];
    artistTrack[_0x77fc[1322]](_0x77fc[2314], this[_0x77fc[2319]][_0x77fc[430]](this));
    artistTrack[_0x77fc[1322]](_0x77fc[2316], this[_0x77fc[2320]][_0x77fc[430]](this));
  }
  showElem(this[_0x77fc[473]][_0x77fc[2324]]);
  hideElem(this[_0x77fc[473]][_0x77fc[2354]]);
  hideElem(this[_0x77fc[473]][_0x77fc[2275]]);
  hideElem(this[_0x77fc[473]][_0x77fc[2328]]);
  let _0xe1a7x1e = (resolve = res, reject = this[_0x77fc[469]][_0x77fc[404]], endColorCoords = reject[_0x77fc[2377]](), resolve[_0x77fc[2378]] - endColorCoords[_0x77fc[2379]]);
  var resolve;
  var reject;
  var endColorCoords;
  let _0xe1a7x3b = Math[_0x77fc[1148]](255, Math[_0x77fc[1080]](-15, _0xe1a7x1e - artistTrack[_0x77fc[1265]] / 2));
  artistTrack[_0x77fc[173]][_0x77fc[2379]] = _0xe1a7x3b + _0x77fc[2380];
  artistTrack[_0x77fc[1541]][_0x77fc[312]] = peerset;
  this[_0x77fc[473]][_0x77fc[1194]][_0x77fc[604]] = _0xe1a7x12;
  if (this[_0x77fc[471]]) {
    clearTimeout(this[_0x77fc[471]]);
  }
  if (this[_0x77fc[474]][peerset]) {
    this[_0x77fc[2323]](peerset);
  } else {
    this[_0x77fc[471]] = setTimeout(this[_0x77fc[2321]][_0x77fc[430]](this, peerset), 30);
  }
}, RoomInfo[_0x77fc[170]][_0x77fc[2317]] = function(canCreateDiscussions) {
  if (this[_0x77fc[470]]) {
    this[_0x77fc[472]] = setTimeout(this[_0x77fc[2320]][_0x77fc[430]](this), 200);
  }
}, Settings[_0x77fc[170]][_0x77fc[152]] = function() {
  this[_0x77fc[2381]]();
  this[_0x77fc[2382]]();
  this[_0x77fc[2383]]();
  this[_0x77fc[2384]]();
}, Settings[_0x77fc[170]][_0x77fc[2381]] = function() {
  /** @type {!Array} */
  this[_0x77fc[1057]] = [37, 39, 40, 32, 90, 38, 67, 65, 115, 113];
  this[_0x77fc[1725]] = false;
  this[_0x77fc[542]] = true;
  /** @type {number} */
  this[_0x77fc[1063]] = 37;
  /** @type {number} */
  this[_0x77fc[1064]] = 39;
  /** @type {number} */
  this[_0x77fc[1065]] = 40;
  /** @type {number} */
  this[_0x77fc[857]] = 32;
  /** @type {number} */
  this[_0x77fc[1066]] = 90;
  /** @type {number} */
  this[_0x77fc[1068]] = 38;
  /** @type {number} */
  this[_0x77fc[1070]] = 67;
  /** @type {number} */
  this[_0x77fc[1069]] = 65;
  /** @type {number} */
  this[_0x77fc[559]] = 133;
  /** @type {number} */
  this[_0x77fc[560]] = 10;
  this[_0x77fc[1043]] = false;
  this[_0x77fc[2385]] = false;
  /** @type {number} */
  this[_0x77fc[2386]] = 1;
  /** @type {number} */
  this[_0x77fc[907]] = 2;
  /** @type {number} */
  this[_0x77fc[908]] = 2;
  this[_0x77fc[1103]] = false;
  this[_0x77fc[1747]] = false;
  this[_0x77fc[1075]] = true;
  this[_0x77fc[2387]] = _0x77fc[2388];
  /** @type {number} */
  this[_0x77fc[338]][_0x77fc[87]] = 1;
  /** @type {!Array} */
  this[_0x77fc[689]] = [345, 745, 745, 745, 745, 746, 745, 745, 745, 741, 69];
}, Settings[_0x77fc[170]][_0x77fc[2389]] = function() {
  this[_0x77fc[535]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  /** @type {number} */
  var indexLookupKey = 1;
  for (; indexLookupKey < this[_0x77fc[572]][_0x77fc[237]]; indexLookupKey++) {
    this[_0x77fc[572]][indexLookupKey][_0x77fc[601]] = this[_0x77fc[2390]](this[_0x77fc[1057]][indexLookupKey - 1]);
  }
  this[_0x77fc[558]][1][_0x77fc[601]] = this[_0x77fc[559]];
  this[_0x77fc[558]][2][_0x77fc[601]] = this[_0x77fc[560]];
  this[_0x77fc[537]][_0x77fc[621]] = this[_0x77fc[1043]];
  this[_0x77fc[539]][_0x77fc[621]] = this[_0x77fc[1725]];
  this[_0x77fc[541]][_0x77fc[621]] = this[_0x77fc[542]];
  this[_0x77fc[543]][_0x77fc[621]] = this[_0x77fc[338]][_0x77fc[27]];
  this[_0x77fc[545]][_0x77fc[621]] = this[_0x77fc[338]][_0x77fc[28]];
  this[_0x77fc[549]][_0x77fc[621]] = this[_0x77fc[338]][_0x77fc[29]];
  this[_0x77fc[553]][_0x77fc[621]] = this[_0x77fc[338]][_0x77fc[30]];
  this[_0x77fc[551]][_0x77fc[621]] = this[_0x77fc[338]][_0x77fc[31]];
  document[_0x77fc[3]](_0x77fc[1747])[_0x77fc[621]] = this[_0x77fc[1747]];
  document[_0x77fc[3]](_0x77fc[2391])[_0x77fc[621]] = this[_0x77fc[1075]];
  document[_0x77fc[3]](_0x77fc[2392])[_0x77fc[621]] = 0 === this[_0x77fc[338]][_0x77fc[87]];
  document[_0x77fc[3]](_0x77fc[2393])[_0x77fc[621]] = _0x77fc[192] === this[_0x77fc[338]][_0x77fc[6]][_0x77fc[185]];
  document[_0x77fc[3]](_0x77fc[1065] + this[_0x77fc[338]][_0x77fc[77]])[_0x77fc[621]] = true;
  document[_0x77fc[3]](_0x77fc[2394] + this[_0x77fc[2386]])[_0x77fc[621]] = true;
  document[_0x77fc[3]](_0x77fc[2395])[_0x77fc[621]] = this[_0x77fc[338]][_0x77fc[118]];
  document[_0x77fc[3]](_0x77fc[1065] + this[_0x77fc[338]][_0x77fc[77]])[_0x77fc[621]] = true;
  document[_0x77fc[3]](_0x77fc[2396])[_0x77fc[621]] = this[_0x77fc[338]][_0x77fc[161]] && this[_0x77fc[338]][_0x77fc[161]][_0x77fc[716]];
  /** @type {number} */
  this[_0x77fc[587]][_0x77fc[601]] = 0;
  this[_0x77fc[589]]();
  var click = this[_0x77fc[338]][_0x77fc[271]] ? 7 : this[_0x77fc[338]][_0x77fc[41]];
  try {
    document[_0x77fc[3]](_0x77fc[940] + click)[_0x77fc[621]] = true;
  } catch (_0xe1a7x4) {
  }
  this[_0x77fc[547]][_0x77fc[601]] = this[_0x77fc[907]].toString();
  this[_0x77fc[548]][_0x77fc[601]] = this[_0x77fc[908]].toString();
  this[_0x77fc[2397]](Math[_0x77fc[1196]](100 * createjs[_0x77fc[34]][_0x77fc[35]]));
  soundCredits({
    srcElement : this[_0x77fc[547]],
    set : this[_0x77fc[338]][_0x77fc[48]]
  });
  soundCredits({
    srcElement : this[_0x77fc[548]],
    set : this[_0x77fc[338]][_0x77fc[49]]
  });
  var artistTrack = this[_0x77fc[338]][_0x77fc[271]] ? this[_0x77fc[338]][_0x77fc[271]] : this[_0x77fc[2387]];
  this[_0x77fc[555]][_0x77fc[601]] = this[_0x77fc[555]][_0x77fc[173]][_0x77fc[1877]] = artistTrack;
  this[_0x77fc[584]][_0x77fc[322]](artistTrack);
  if (this[_0x77fc[338]][_0x77fc[155]][_0x77fc[341]] >= 2 && !this[_0x77fc[571]]) {
    this[_0x77fc[2398]]();
    hideElem(document[_0x77fc[3]](_0x77fc[2399]));
  }
}, Settings[_0x77fc[170]][_0x77fc[2400]] = function() {
  if (null === this[_0x77fc[570]]) {
    return;
  }
  let _0xe1a7x4 = _0x77fc[46];
  for (let _0xe1a7x7 of this[_0x77fc[570]]) {
    let _0xe1a7x8 = CDN_URL(_0x77fc[903] + _0xe1a7x7[_0x77fc[338]] + _0x77fc[904]);
    _0xe1a7x4 = _0xe1a7x4 + (_0x77fc[2401] + _0xe1a7x7[_0x77fc[338]] + _0x77fc[2402] + _0xe1a7x7[_0x77fc[318]] + _0x77fc[2403] + _0xe1a7x7[_0x77fc[318]] + _0x77fc[2404] + _0xe1a7x7[_0x77fc[318]] + _0x77fc[1995]);
    _0xe1a7x4 = _0xe1a7x4 + (_0x77fc[2405] + _0xe1a7x8 + _0x77fc[2406] + _0xe1a7x7[_0x77fc[720]] + _0x77fc[2407]);
  }
  if (document[_0x77fc[3]](_0x77fc[570])[_0x77fc[604]] = _0xe1a7x4, this[_0x77fc[338]][_0x77fc[41]] >= 1E3) {
    var click = this[_0x77fc[338]][_0x77fc[271]] ? 7 : this[_0x77fc[338]][_0x77fc[41]];
    try {
      document[_0x77fc[3]](_0x77fc[940] + click)[_0x77fc[621]] = true;
    } catch (_0xe1a7x4) {
    }
  }
}, Settings[_0x77fc[170]][_0x77fc[2398]] = function() {
  this[_0x77fc[571]] = true;
  var xhr = new XMLHttpRequest;
  /** @type {number} */
  xhr[_0x77fc[2408]] = 1E4;
  xhr[_0x77fc[1549]](_0x77fc[1547], _0x77fc[2409], true);
  xhr[_0x77fc[1552]](_0x77fc[1550], _0x77fc[1551]);
  xhr[_0x77fc[1552]](_0x77fc[2410], _0x77fc[2411]);
  var _0xe1a7x7 = document[_0x77fc[3]](_0x77fc[570]);
  _0xe1a7x7[_0x77fc[604]] = _0x77fc[2412];
  /**
   * @return {undefined}
   */
  var gotoNewOfflinePage = function() {
    this[_0x77fc[571]] = false;
    _0xe1a7x7[_0x77fc[604]] = _0x77fc[2413];
  };
  try {
    xhr[_0x77fc[1522]]();
  } catch (_0xe1a7x4) {
    gotoNewOfflinePage();
  }
  var _0xe1a7x12 = this;
  xhr[_0x77fc[2414]] = xhr[_0x77fc[2061]] = xhr[_0x77fc[2415]] = function() {
    gotoNewOfflinePage();
  };
  /**
   * @return {undefined}
   */
  xhr[_0x77fc[2416]] = function() {
    if (200 === xhr[_0x77fc[1658]]) {
      _0xe1a7x12[_0x77fc[570]] = JSON[_0x77fc[1546]](xhr[_0x77fc[1545]]);
      _0xe1a7x12[_0x77fc[2400]]();
    } else {
      gotoNewOfflinePage();
    }
  };
}, Settings[_0x77fc[170]][_0x77fc[2417]] = function() {
  /**
   * @param {?} superclass
   * @return {?}
   */
  var build_class = function(superclass) {
    var S = superclass[_0x77fc[2418]](false);
    return superclass[_0x77fc[1982]][_0x77fc[2419]](S, superclass), S;
  };
  this[_0x77fc[338]][_0x77fc[1]] = build_class(this[_0x77fc[338]][_0x77fc[1]]);
  this[_0x77fc[338]][_0x77fc[4]] = build_class(this[_0x77fc[338]][_0x77fc[4]]);
  this[_0x77fc[338]][_0x77fc[5]] = build_class(this[_0x77fc[338]][_0x77fc[5]]);
  build_class(document[_0x77fc[3]](_0x77fc[187]));
}, Settings[_0x77fc[170]][_0x77fc[564]] = function() {
  let _0xe1a7x4 = false;
  let _0xe1a7x7 = false;
  var whiteRating = parseInt(this[_0x77fc[558]][1][_0x77fc[601]]);
  this[_0x77fc[2420]](whiteRating);
  var pageInd = parseInt(this[_0x77fc[558]][2][_0x77fc[601]]);
  this[_0x77fc[2421]](pageInd);
  this[_0x77fc[1725]] = this[_0x77fc[539]][_0x77fc[621]];
  this[_0x77fc[542]] = this[_0x77fc[541]][_0x77fc[621]];
  this[_0x77fc[338]][_0x77fc[27]] = this[_0x77fc[543]][_0x77fc[621]];
  if (this[_0x77fc[338]][_0x77fc[28]] != this[_0x77fc[545]][_0x77fc[621]]) {
    _0xe1a7x7 = true;
    this[_0x77fc[338]][_0x77fc[28]] = this[_0x77fc[545]][_0x77fc[621]];
  }
  this[_0x77fc[338]][_0x77fc[29]] = this[_0x77fc[549]][_0x77fc[621]];
  this[_0x77fc[338]][_0x77fc[30]] = this[_0x77fc[553]][_0x77fc[621]];
  if (this[_0x77fc[338]][_0x77fc[31]] != this[_0x77fc[551]][_0x77fc[621]]) {
    _0xe1a7x7 = true;
  }
  this[_0x77fc[338]][_0x77fc[31]] = this[_0x77fc[551]][_0x77fc[621]];
  if (this[_0x77fc[1725]]) {
    this[_0x77fc[1739]](_0x77fc[2422], _0x77fc[526]);
  } else {
    this[_0x77fc[1739]](_0x77fc[2422], _0x77fc[525]);
  }
  if (this[_0x77fc[542]]) {
    this[_0x77fc[1739]](_0x77fc[2423], _0x77fc[526]);
  } else {
    this[_0x77fc[1739]](_0x77fc[2423], _0x77fc[525]);
  }
  if (this[_0x77fc[338]][_0x77fc[27]]) {
    this[_0x77fc[1739]](_0x77fc[544], _0x77fc[526]);
  } else {
    this[_0x77fc[1739]](_0x77fc[544], _0x77fc[525]);
  }
  if (this[_0x77fc[338]][_0x77fc[29]]) {
    this[_0x77fc[1739]](_0x77fc[550], _0x77fc[526]);
  } else {
    this[_0x77fc[1739]](_0x77fc[550], _0x77fc[525]);
  }
  if (this[_0x77fc[338]][_0x77fc[31]]) {
    this[_0x77fc[1739]](_0x77fc[552], _0x77fc[526]);
  } else {
    this[_0x77fc[1739]](_0x77fc[552], _0x77fc[525]);
  }
  if (this[_0x77fc[338]][_0x77fc[28]]) {
    this[_0x77fc[1739]](_0x77fc[2424], _0x77fc[526]);
  } else {
    this[_0x77fc[1739]](_0x77fc[2424], _0x77fc[525]);
  }
  var appVersion = document[_0x77fc[1480]](_0x77fc[2425]);
  var $constraint = appVersion ? parseInt(appVersion[_0x77fc[601]]) : 0;
  var $handle = $constraint;
  if ($constraint >= 1E3) {
    this[_0x77fc[338]][_0x77fc[264]] = appVersion[_0x77fc[1541]][_0x77fc[338]];
  } else {
    if (6 === $constraint) {
      $constraint = $handle = $handle = 0;
      this[_0x77fc[338]][_0x77fc[270]] = true;
    } else {
      this[_0x77fc[338]][_0x77fc[270]] = false;
    }
  }
  if (7 === $constraint) {
    /** @type {number} */
    $handle = 0;
    /** @type {number} */
    $constraint = 7;
    this[_0x77fc[338]][_0x77fc[271]] = this[_0x77fc[2387]] = document[_0x77fc[3]](_0x77fc[556])[_0x77fc[601]];
  } else {
    this[_0x77fc[338]][_0x77fc[271]] = false;
  }
  this[_0x77fc[338]][_0x77fc[166]]($handle);
  this[_0x77fc[1739]](_0x77fc[41], $constraint);
  var oldValue = parseInt(document[_0x77fc[1480]](_0x77fc[2426])[_0x77fc[601]]);
  var oldValueIsNaN = this[_0x77fc[338]][_0x77fc[77]] !== oldValue;
  this[_0x77fc[338]][_0x77fc[77]] = oldValue;
  this[_0x77fc[1739]](_0x77fc[2427], oldValue);
  this[_0x77fc[1043]] = this[_0x77fc[2385]] = this[_0x77fc[537]][_0x77fc[621]];
  this[_0x77fc[579]][_0x77fc[322]]({
    enable : this[_0x77fc[2385]],
    touchAction : this[_0x77fc[2428]]()
  });
  if (this[_0x77fc[1043]]) {
    this[_0x77fc[1739]](_0x77fc[2429], _0x77fc[526]);
  } else {
    this[_0x77fc[1739]](_0x77fc[2429], _0x77fc[525]);
  }
  this[_0x77fc[1103]] = document[_0x77fc[3]](_0x77fc[2430])[_0x77fc[621]];
  var intTempPreference = parseInt(this[_0x77fc[547]][_0x77fc[601]]);
  if (this[_0x77fc[907]] !== intTempPreference) {
    this[_0x77fc[907]] = intTempPreference;
    this[_0x77fc[1739]](_0x77fc[48], this.SFXsetID);
    _0xe1a7x7 = true;
  }
  intTempPreference = parseInt(this[_0x77fc[548]][_0x77fc[601]]);
  if (this[_0x77fc[908]] !== intTempPreference) {
    this[_0x77fc[908]] = intTempPreference;
    this[_0x77fc[1739]](_0x77fc[49], this.VSFXsetID);
    _0xe1a7x7 = true;
  }
  if (_0xe1a7x7) {
    this[_0x77fc[338]][_0x77fc[167]]();
  }
  var numKeysDeleted = Math[_0x77fc[1196]](100 * createjs[_0x77fc[34]][_0x77fc[35]]);
  this[_0x77fc[1739]](_0x77fc[2431], numKeysDeleted);
  this[_0x77fc[1747]] = document[_0x77fc[3]](_0x77fc[1747])[_0x77fc[621]];
  if (this[_0x77fc[1747]]) {
    this[_0x77fc[1739]](_0x77fc[2432], _0x77fc[526]);
  } else {
    this[_0x77fc[2433]](_0x77fc[2432]);
  }
  this[_0x77fc[1075]] = document[_0x77fc[3]](_0x77fc[2391])[_0x77fc[621]];
  this[_0x77fc[338]][_0x77fc[87]] = document[_0x77fc[3]](_0x77fc[2392])[_0x77fc[621]] ? 0 : 1;
  if (0 === this[_0x77fc[338]][_0x77fc[87]]) {
    this[_0x77fc[1739]](_0x77fc[2392], _0x77fc[525]);
  } else {
    this[_0x77fc[2433]](_0x77fc[2392]);
  }
  this[_0x77fc[338]][_0x77fc[160]][_0x77fc[1037]]();
  this[_0x77fc[1739]](_0x77fc[689], this[_0x77fc[689]]);
  if (this[_0x77fc[338]][_0x77fc[155]][_0x77fc[332]]) {
    this[_0x77fc[2434]]();
  }
  var _0xe1a7x3d = this[_0x77fc[338]][_0x77fc[6]];
  if (document[_0x77fc[3]](_0x77fc[2393])[_0x77fc[621]] && _0x77fc[192] !== this[_0x77fc[338]][_0x77fc[6]][_0x77fc[185]]) {
    this[_0x77fc[151]](true);
  } else {
    if (!(document[_0x77fc[3]](_0x77fc[2393])[_0x77fc[621]] || _0x77fc[10] === this[_0x77fc[338]][_0x77fc[6]][_0x77fc[185]])) {
      this[_0x77fc[2435]]();
    }
  }
  if (_0xe1a7x3d !== this[_0x77fc[338]][_0x77fc[6]]) {
    this[_0x77fc[338]][_0x77fc[160]][_0x77fc[691]](this[_0x77fc[338]][_0x77fc[6]]);
  }
  let postDateGmt = document[_0x77fc[3]](_0x77fc[2396])[_0x77fc[621]];
  if (this[_0x77fc[338]][_0x77fc[161]] && this[_0x77fc[338]][_0x77fc[161]][_0x77fc[716]] !== postDateGmt) {
    if (postDateGmt !== this[_0x77fc[338]][_0x77fc[161]][_0x77fc[2436]]()) {
      this[_0x77fc[1739]](_0x77fc[2437], postDateGmt);
    } else {
      this[_0x77fc[2433]](_0x77fc[2437]);
    }
    _0xe1a7x4 = true;
  }
  this[_0x77fc[535]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  if (this[_0x77fc[338]][_0x77fc[50]]) {
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[156]][_0x77fc[728]][_0x77fc[1049]] = 1;
    if (oldValueIsNaN) {
      /** @type {number} */
      this[_0x77fc[338]][_0x77fc[156]][_0x77fc[732]] = -1;
      this[_0x77fc[338]][_0x77fc[155]][_0x77fc[1116]](_0x77fc[46], _0x77fc[2438] + i18n[_0x77fc[2439]] + _0x77fc[1719]);
      /** @type {number} */
      this[_0x77fc[338]][_0x77fc[130]] = 0;
      if (this[_0x77fc[338]][_0x77fc[155]][_0x77fc[337]]) {
        this[_0x77fc[338]][_0x77fc[155]][_0x77fc[1499]](_0x77fc[2440]);
      }
    }
  }
  if (_0xe1a7x4) {
    location[_0x77fc[2441]]();
  }
}, Settings[_0x77fc[170]][_0x77fc[589]] = function(ballNumber) {
  ballNumber = void 0 === ballNumber ? 0 : ballNumber[_0x77fc[1875]][_0x77fc[601]];
  /** @type {number} */
  var indexLookupKey = 1;
  for (; indexLookupKey < this[_0x77fc[590]][_0x77fc[237]]; indexLookupKey++) {
    this[_0x77fc[590]][indexLookupKey][_0x77fc[621]] = this[_0x77fc[689]][ballNumber] & 1 << indexLookupKey - 1;
  }
  this[_0x77fc[2442]]();
}, Settings[_0x77fc[170]][_0x77fc[594]] = function(canCreateDiscussions) {
  this[_0x77fc[689]][parseInt(this[_0x77fc[587]][_0x77fc[601]])] ^= 1 << canCreateDiscussions - 1;
  this[_0x77fc[2442]]();
}, Settings[_0x77fc[170]][_0x77fc[2442]] = function() {
  this[_0x77fc[557]][_0x77fc[419]] = this[_0x77fc[689]][parseInt(this[_0x77fc[587]][_0x77fc[601]])];
}, Settings[_0x77fc[170]][_0x77fc[2435]] = function() {
  this[_0x77fc[2417]]();
  this[_0x77fc[338]][_0x77fc[6]] = new Ctx2DView(this[_0x77fc[338]]);
  this[_0x77fc[338]][_0x77fc[6]][_0x77fc[1253]]();
  this[_0x77fc[338]][_0x77fc[854]]();
  this[_0x77fc[338]][_0x77fc[1006]]();
  this[_0x77fc[338]][_0x77fc[974]]();
}, Settings[_0x77fc[170]][_0x77fc[151]] = function(canCreateDiscussions) {
  if (canCreateDiscussions) {
    this[_0x77fc[2417]]();
  }
  var _0xe1a7x7 = new WebGLView(this[_0x77fc[338]]);
  if (_0xe1a7x7[_0x77fc[1252]]()) {
    this[_0x77fc[338]][_0x77fc[6]] = _0xe1a7x7;
    this[_0x77fc[338]][_0x77fc[6]][_0x77fc[1253]]();
    this[_0x77fc[338]][_0x77fc[854]]();
    this[_0x77fc[338]][_0x77fc[1006]]();
    this[_0x77fc[338]][_0x77fc[974]]();
  } else {
    this[_0x77fc[576]] = true;
    console[_0x77fc[935]](_0x77fc[2443]);
    document[_0x77fc[3]](_0x77fc[2393])[_0x77fc[621]] = false;
    this[_0x77fc[2435]]();
  }
}, Settings[_0x77fc[170]][_0x77fc[2029]] = function(options) {
  /** @type {number} */
  var datum = 0;
  if (_0x77fc[730] == typeof options) {
    var sArrDayId = options[_0x77fc[2444]](/\d+/g);
    if (sArrDayId) {
      datum = parseInt(sArrDayId[0]);
    }
  } else {
    datum = options;
  }
  localStorage[_0x77fc[1940]](self.BAN_ARTIFACT_KEY, datum);
}, Settings[_0x77fc[170]][_0x77fc[2075]] = function() {
  return localStorage[_0x77fc[1939]](_0x77fc[2445]), localStorage[_0x77fc[1941]](self.BAN_ARTIFACT_KEY);
}, Settings[_0x77fc[170]][_0x77fc[1712]] = function() {
  return localStorage[_0x77fc[1939]](self.BAN_ARTIFACT_KEY);
}, Settings[_0x77fc[170]][_0x77fc[567]] = function() {
  let _0xe1a7x4 = null !== localStorage[_0x77fc[1941]](self.BAN_ARTIFACT_KEY);
  localStorage[_0x77fc[1003]]();
  this[_0x77fc[2381]]();
  this[_0x77fc[2389]]();
  if (_0xe1a7x4) {
    this[_0x77fc[2029]]();
  }
  if (this[_0x77fc[338]][_0x77fc[161]][_0x77fc[716]]) {
    location[_0x77fc[2441]]();
  }
}, Settings[_0x77fc[170]][_0x77fc[2420]] = function(mmCoreSplitViewBlock) {
  if (mmCoreSplitViewBlock > 0 && mmCoreSplitViewBlock < 5E3) {
    this[_0x77fc[559]] = mmCoreSplitViewBlock;
    this[_0x77fc[1739]](_0x77fc[559], mmCoreSplitViewBlock);
  } else {
    alert(i18n[_0x77fc[2446]]);
  }
}, Settings[_0x77fc[170]][_0x77fc[2421]] = function(mmCoreSplitViewBlock) {
  if (mmCoreSplitViewBlock >= 0 && mmCoreSplitViewBlock < 5E3) {
    this[_0x77fc[560]] = mmCoreSplitViewBlock;
    this[_0x77fc[1739]](_0x77fc[560], mmCoreSplitViewBlock);
  } else {
    alert(_0x77fc[2447]);
  }
}, Settings[_0x77fc[170]][_0x77fc[2448]] = function(mmCoreSplitViewBlock, selector) {
  document[_0x77fc[3]](_0x77fc[2449] + selector)[_0x77fc[604]] = mmCoreSplitViewBlock;
  this[_0x77fc[572]][selector][_0x77fc[601]] = this[_0x77fc[2390]](mmCoreSplitViewBlock);
  this[_0x77fc[2450]](selector, mmCoreSplitViewBlock);
  this[_0x77fc[1739]](_0x77fc[2451] + selector, mmCoreSplitViewBlock);
}, Settings[_0x77fc[170]][_0x77fc[2450]] = function(val, cur) {
  switch(this[_0x77fc[1057]][val - 1] = cur, val) {
    case 1:
      this[_0x77fc[1063]] = cur;
      break;
    case 2:
      this[_0x77fc[1064]] = cur;
      break;
    case 3:
      this[_0x77fc[1065]] = cur;
      break;
    case 4:
      this[_0x77fc[857]] = cur;
      break;
    case 5:
      this[_0x77fc[1066]] = cur;
      break;
    case 6:
      this[_0x77fc[1068]] = cur;
      break;
    case 7:
      this[_0x77fc[1070]] = cur;
      break;
    case 8:
      this[_0x77fc[1069]] = cur;
      break;
    case 9:
    case 10:
      break;
    default:
      console[_0x77fc[1828]](_0x77fc[2452]);
  }
}, Settings[_0x77fc[170]][_0x77fc[2453]] = function(expected) {
  /** @type {number} */
  var select = 0;
  for (; select < 10; select++) {
    this[_0x77fc[2450]](select + 1, expected[_0x77fc[2451] + select]);
  }
  this[_0x77fc[2420]](expected.DAS);
  this[_0x77fc[2421]](expected.ARR);
  this[_0x77fc[338]][_0x77fc[27]] = expected[_0x77fc[544]];
  this[_0x77fc[338]][_0x77fc[30]] = expected[_0x77fc[2454]];
  this[_0x77fc[338]][_0x77fc[29]] = expected[_0x77fc[2455]];
  if (expected[_0x77fc[2456]]) {
    this[_0x77fc[338]][_0x77fc[264]] = expected[_0x77fc[2456]];
  }
  this[_0x77fc[338]][_0x77fc[166]](expected[_0x77fc[2457]]);
  this[_0x77fc[1725]] = expected[_0x77fc[2458]];
  this[_0x77fc[338]][_0x77fc[118]] = expected[_0x77fc[2459]];
  this[_0x77fc[2461]](expected[_0x77fc[2460]]);
  this[_0x77fc[1747]] = expected[_0x77fc[380]];
  this[_0x77fc[338]][_0x77fc[77]] = expected[_0x77fc[2462]];
  this[_0x77fc[1043]] = expected[_0x77fc[2463]];
  this[_0x77fc[1075]] = expected[_0x77fc[2464]];
  this[_0x77fc[2397]](expected[_0x77fc[2465]]);
  this[_0x77fc[907]] = expected[_0x77fc[544]] > 0 ? expected[_0x77fc[544]] - 1 : 0;
  if (expected[_0x77fc[1042]]) {
    this[_0x77fc[2387]] = expected[_0x77fc[1042]];
    if (7 === expected[_0x77fc[2457]]) {
      this[_0x77fc[338]][_0x77fc[271]] = expected[_0x77fc[1042]];
    }
  }
  if (expected[_0x77fc[2393]] && _0x77fc[192] !== this[_0x77fc[338]][_0x77fc[6]][_0x77fc[185]] && !this[_0x77fc[576]]) {
    this[_0x77fc[151]]();
  } else {
    if (!(expected[_0x77fc[2393]] || _0x77fc[10] === this[_0x77fc[338]][_0x77fc[6]][_0x77fc[185]])) {
      this[_0x77fc[2435]]();
    }
  }
}, Settings[_0x77fc[170]][_0x77fc[2383]] = function() {
  /** @type {number} */
  var unusedAttrsVerticalAutoCutoff = 0;
  unusedAttrsVerticalAutoCutoff = this[_0x77fc[2073]](_0x77fc[552]);
  this[_0x77fc[338]][_0x77fc[31]] = _0x77fc[526] === unusedAttrsVerticalAutoCutoff;
  unusedAttrsVerticalAutoCutoff = this[_0x77fc[2073]](_0x77fc[2424]);
  this[_0x77fc[338]][_0x77fc[28]] = _0x77fc[526] === unusedAttrsVerticalAutoCutoff;
  unusedAttrsVerticalAutoCutoff = parseInt(this[_0x77fc[2073]](_0x77fc[49]));
  if (!isNaN(unusedAttrsVerticalAutoCutoff)) {
    this[_0x77fc[908]] = unusedAttrsVerticalAutoCutoff;
  }
  unusedAttrsVerticalAutoCutoff = parseInt(this[_0x77fc[2073]](_0x77fc[2392]));
  this[_0x77fc[338]][_0x77fc[87]] = 0 === unusedAttrsVerticalAutoCutoff ? 0 : 1;
  if (null != (unusedAttrsVerticalAutoCutoff = this[_0x77fc[2073]](_0x77fc[689]))) {
    this[_0x77fc[689]] = unusedAttrsVerticalAutoCutoff[_0x77fc[1514]](_0x77fc[1503])[_0x77fc[431]]((id_local) => {
      return parseInt(id_local);
    });
  }
}, Settings[_0x77fc[170]][_0x77fc[2382]] = function() {
  if (_0x77fc[46] !== conf_global[_0x77fc[333]] && _0x77fc[1336] != typeof sts) {
    return this[_0x77fc[2453]](sts), true;
  }
  /** @type {number} */
  var questIndex = 0;
  /** @type {number} */
  var artistTrack = 1;
  for (; artistTrack <= 10; artistTrack++) {
    questIndex = parseInt(this[_0x77fc[2073]](_0x77fc[2451] + artistTrack));
    if (!isNaN(questIndex)) {
      this[_0x77fc[2450]](artistTrack, questIndex);
    }
  }
  questIndex = parseInt(this[_0x77fc[2073]](_0x77fc[559]));
  if (!isNaN(questIndex)) {
    this[_0x77fc[2420]](questIndex);
  }
  questIndex = parseInt(this[_0x77fc[2073]](_0x77fc[560]));
  if (!isNaN(questIndex)) {
    this[_0x77fc[2421]](questIndex);
  }
  questIndex = parseInt(this[_0x77fc[2073]](_0x77fc[41]));
  if (!isNaN(questIndex)) {
    this[_0x77fc[338]][_0x77fc[166]](parseInt(questIndex));
  }
  questIndex = this[_0x77fc[2073]](_0x77fc[544]);
  this[_0x77fc[338]][_0x77fc[27]] = _0x77fc[525] !== questIndex;
  questIndex = this[_0x77fc[2073]](_0x77fc[550]);
  this[_0x77fc[338]][_0x77fc[29]] = _0x77fc[525] !== questIndex;
  questIndex = this[_0x77fc[2073]](_0x77fc[2422]);
  this[_0x77fc[1725]] = _0x77fc[525] !== questIndex && null !== questIndex;
  questIndex = this[_0x77fc[2073]](_0x77fc[2423]);
  this[_0x77fc[542]] = _0x77fc[526] === questIndex || null === questIndex;
  questIndex = parseInt(this[_0x77fc[2073]](_0x77fc[2427]));
  if (!isNaN(questIndex)) {
    this[_0x77fc[338]][_0x77fc[77]] = questIndex;
  }
  questIndex = this[_0x77fc[2073]](_0x77fc[2429]);
  this[_0x77fc[1043]] = _0x77fc[526] === questIndex;
  questIndex = parseInt(this[_0x77fc[2073]](_0x77fc[48]));
  if (!isNaN(questIndex)) {
    this[_0x77fc[907]] = questIndex;
  }
  questIndex = parseInt(this[_0x77fc[2073]](_0x77fc[2431]));
  if (!isNaN(questIndex) && questIndex >= 0 && questIndex <= 100) {
    this[_0x77fc[2397]](parseInt(questIndex));
  }
  questIndex = this[_0x77fc[2073]](_0x77fc[2432]);
  this[_0x77fc[1747]] = !(null === questIndex || _0x77fc[525] === questIndex);
  this[_0x77fc[2461]](1);
}, Settings[_0x77fc[170]][_0x77fc[2434]] = function() {
  var _0xe1a7x4;
  var PL$13;
  var PL$17;
  var result = {};
  _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[536]);
  var command_codes = Array[_0x77fc[170]][_0x77fc[310]][_0x77fc[143]](_0xe1a7x4[_0x77fc[1506]](_0x77fc[573]), 0);
  var data = Array[_0x77fc[170]][_0x77fc[310]][_0x77fc[143]](_0xe1a7x4[_0x77fc[1506]](_0x77fc[1507]), 0);
  /**
   * @param {?} hide
   * @return {?}
   */
  var change_btn = function(hide) {
    return _0x77fc[2391] === hide ? _0x77fc[2464] : null;
  };
  PL$13 = command_codes[_0x77fc[1508]](data);
  /** @type {number} */
  PL$17 = 0;
  for (; PL$17 < PL$13[_0x77fc[237]]; ++PL$17) {
    if (_0x77fc[573] !== PL$13[PL$17][_0x77fc[312]][_0x77fc[1247]](0, 5) && _0x77fc[2430] !== PL$13[PL$17][_0x77fc[312]] && _0x77fc[593] !== PL$13[PL$17][_0x77fc[312]][_0x77fc[1247]](0, 4)) {
      if (_0x77fc[1510] === PL$13[PL$17][_0x77fc[463]]) {
        if (PL$13[PL$17][_0x77fc[621]]) {
          let list_for_lang = PL$13[PL$17][_0x77fc[333]][_0x77fc[1247]](0, 3);
          result[list_for_lang] = PL$13[PL$17][_0x77fc[601]];
          if (_0x77fc[2457] == list_for_lang && PL$13[PL$17][_0x77fc[1541]][_0x77fc[338]]) {
            result[_0x77fc[2456]] = PL$13[PL$17][_0x77fc[1541]][_0x77fc[338]];
          }
        }
      } else {
        if (_0x77fc[1512] === PL$13[PL$17][_0x77fc[463]]) {
          result[change_btn(PL$13[PL$17][_0x77fc[312]]) ? change_btn(PL$13[PL$17][_0x77fc[312]]) : PL$13[PL$17][_0x77fc[312]][_0x77fc[1247]](0, 3)] = PL$13[PL$17][_0x77fc[621]];
        } else {
          result[PL$13[PL$17][_0x77fc[312]][_0x77fc[1247]](0, 3)] = PL$13[PL$17][_0x77fc[601]];
          if (PL$13[PL$17][_0x77fc[312]] === this[_0x77fc[547]][_0x77fc[312]] && void 0 !== result[_0x77fc[544]] && result[_0x77fc[544]]) {
            result[_0x77fc[544]] += parseInt(PL$13[PL$17][_0x77fc[601]]);
          }
        }
      }
    }
  }
  result[_0x77fc[838]] = this[_0x77fc[1057]];
  result[_0x77fc[662]] = this[_0x77fc[689]];
  this[_0x77fc[2466]](JSON[_0x77fc[1520]](result));
}, Settings[_0x77fc[170]][_0x77fc[2466]] = function(qov) {
  var scope = document[_0x77fc[2468]][_0x77fc[1480]](_0x77fc[2467])[_0x77fc[2354]];
  var directiveProcessors = new XMLHttpRequest;
  var $node = _0x77fc[2469] + encodeURIComponent(qov);
  /** @type {number} */
  directiveProcessors[_0x77fc[2408]] = 1E4;
  directiveProcessors[_0x77fc[1549]](_0x77fc[2470], _0x77fc[2471], true);
  directiveProcessors[_0x77fc[1552]](_0x77fc[1550], _0x77fc[1551]);
  directiveProcessors[_0x77fc[1552]](_0x77fc[2472], scope);
  directiveProcessors[_0x77fc[1552]](_0x77fc[2410], _0x77fc[2411]);
  directiveProcessors[_0x77fc[1522]]($node);
  /**
   * @return {undefined}
   */
  directiveProcessors[_0x77fc[2416]] = function() {
    directiveProcessors[_0x77fc[1658]];
  };
}, Settings[_0x77fc[170]][_0x77fc[1038]] = function() {
  if (this[_0x77fc[1043]]) {
    this[_0x77fc[2473]](1);
  }
}, Settings[_0x77fc[170]][_0x77fc[1124]] = function() {
  if (this[_0x77fc[1043]]) {
    this[_0x77fc[2473]](0);
  }
}, Settings[_0x77fc[170]][_0x77fc[2397]] = function(canCreateDiscussions) {
  document[_0x77fc[3]](_0x77fc[2474])[_0x77fc[601]] = canCreateDiscussions;
  document[_0x77fc[3]](_0x77fc[2475])[_0x77fc[604]] = canCreateDiscussions + _0x77fc[513];
  createjs[_0x77fc[34]][_0x77fc[35]] = canCreateDiscussions / 100;
}, Settings[_0x77fc[170]][_0x77fc[2428]] = function() {
  return this[_0x77fc[2385]] ? _0x77fc[175] : _0x77fc[580];
}, Settings[_0x77fc[170]][_0x77fc[2476]] = function() {
  this[_0x77fc[583]] = true;
  if (!this[_0x77fc[338]][_0x77fc[161]][_0x77fc[716]]) {
    this[_0x77fc[568]][_0x77fc[173]][_0x77fc[2477]] = _0x77fc[2478];
    showElem(document[_0x77fc[3]](_0x77fc[2479]));
  }
}, Settings[_0x77fc[170]][_0x77fc[2473]] = function(canCreateDiscussions) {
  if (0 === canCreateDiscussions) {
    this[_0x77fc[2385]] = false;
    this[_0x77fc[579]][_0x77fc[322]]({
      enable : this[_0x77fc[2385]],
      touchAction : this[_0x77fc[2428]]()
    });
    this[_0x77fc[568]][_0x77fc[2481]](_0x77fc[2480], this[_0x77fc[581]]);
    if (this[_0x77fc[583]]) {
      this[_0x77fc[568]][_0x77fc[173]][_0x77fc[2477]] = _0x77fc[175];
      hideElem(document[_0x77fc[3]](_0x77fc[2479]));
    }
  } else {
    if (!this[_0x77fc[1043]]) {
      return false;
    }
    this[_0x77fc[2385]] = true;
    this[_0x77fc[579]][_0x77fc[322]]({
      enable : this[_0x77fc[2385]],
      touchAction : this[_0x77fc[2428]]()
    });
    this[_0x77fc[568]][_0x77fc[1322]](_0x77fc[2480], this[_0x77fc[581]]);
    if (this[_0x77fc[583]]) {
      this[_0x77fc[2476]]();
    }
  }
}, Settings[_0x77fc[170]][_0x77fc[1739]] = function(namespace, datum) {
  localStorage[_0x77fc[1940]](namespace, datum);
}, Settings[_0x77fc[170]][_0x77fc[2073]] = function(namespace) {
  return localStorage[_0x77fc[1941]](namespace);
}, Settings[_0x77fc[170]][_0x77fc[2433]] = function(namespace) {
  localStorage[_0x77fc[1939]](namespace);
}, Settings[_0x77fc[170]][_0x77fc[575]] = function(mmCoreSplitViewBlock, canCreateDiscussions) {
  this[_0x77fc[2448]](canCreateDiscussions[_0x77fc[1056]], mmCoreSplitViewBlock);
  canCreateDiscussions[_0x77fc[1059]]();
}, Settings[_0x77fc[170]][_0x77fc[2461]] = function(canCreateDiscussions) {
  this[_0x77fc[2386]] = canCreateDiscussions;
  this[_0x77fc[338]][_0x77fc[951]](this[_0x77fc[2386]]);
}, Settings[_0x77fc[170]][_0x77fc[2482]] = function() {
  var number = parseInt(prompt(i18n[_0x77fc[2483]]));
  if (!isNaN(number) && number >= 0 && number <= 1E3) {
    var _0xe1a7x7 = Math[_0x77fc[1196]](1E3 / 60 * number);
    if (true === confirm(i18n[_0x77fc[2484]] + _0x77fc[1555] + _0xe1a7x7 + _0x77fc[2485] + i18n[_0x77fc[2486]])) {
      this[_0x77fc[558]][1][_0x77fc[601]] = _0xe1a7x7;
    }
  }
}, Settings[_0x77fc[170]][_0x77fc[168]] = function() {
  var splitEmailAddressFragments = this[_0x77fc[338]];
  var lifecycleEvent = {
    keyCode : 0,
    repeat : false,
    preventDefault : function() {
    },
    stopPropagation : function() {
    }
  };
  var color1hsl = this[_0x77fc[1057]];
  /** @type {number} */
  var n = 0;
  /** @type {number} */
  var _0xe1a7x13 = 0;
  var _0xe1a7x1e = false;
  /** @type {number} */
  var p = 25;
  var _0xe1a7x39 = this;
  var nextEmailAddress = splitEmailAddressFragments[_0x77fc[25]];
  this[_0x77fc[579]][_0x77fc[435]](_0x77fc[2488])[_0x77fc[322]]({
    direction : Hammer[_0x77fc[2487]],
    threshold : 10
  });
  this[_0x77fc[579]][_0x77fc[477]](_0x77fc[2489], function(canCreateDiscussions) {
    if (!_0xe1a7x39[_0x77fc[583]]) {
      _0xe1a7x39[_0x77fc[2476]]();
    }
    /** @type {number} */
    n = 0;
    _0xe1a7x1e = false;
    _0xe1a7x13 = true;
    p = _0xe1a7x39[_0x77fc[560]] <= 25 ? 25 : _0xe1a7x39[_0x77fc[560]];
  });
  this[_0x77fc[579]][_0x77fc[477]](_0x77fc[2488], function(groups) {
    if (groups[_0x77fc[2490]] === Hammer[_0x77fc[2491]]) {
      if (groups[_0x77fc[2492]] < splitEmailAddressFragments[_0x77fc[25]]) {
        nextEmailAddress = splitEmailAddressFragments[_0x77fc[25]];
      }
      if (groups[_0x77fc[2493]] < .15 && groups[_0x77fc[2492]] > nextEmailAddress) {
        _0xe1a7x1e = true;
        nextEmailAddress = nextEmailAddress + splitEmailAddressFragments[_0x77fc[25]];
        splitEmailAddressFragments[_0x77fc[1160]](0);
        splitEmailAddressFragments[_0x77fc[156]][_0x77fc[385]](new ReplayAction(splitEmailAddressFragments[_0x77fc[156]][_0x77fc[721]].GRAVITY_STEP, splitEmailAddressFragments[_0x77fc[136]]()));
        splitEmailAddressFragments[_0x77fc[854]]();
      }
    } else {
      if (groups[_0x77fc[2490]] === Hammer[_0x77fc[2494]]) {
        if (groups[_0x77fc[2495]] <= (n - 1) * p) {
          n--;
          if (_0xe1a7x13) {
            n--;
            _0xe1a7x13 = false;
          }
          if (splitEmailAddressFragments[_0x77fc[1074]](-1, false)) {
            splitEmailAddressFragments[_0x77fc[156]][_0x77fc[385]](new ReplayAction(splitEmailAddressFragments[_0x77fc[156]][_0x77fc[721]].MOVE_LEFT, splitEmailAddressFragments[_0x77fc[136]]()));
          }
        }
      } else {
        if (groups[_0x77fc[2490]] === Hammer[_0x77fc[2496]] && groups[_0x77fc[2495]] >= (n + 1) * p) {
          n++;
          if (_0xe1a7x13) {
            n++;
            _0xe1a7x13 = false;
          }
          if (splitEmailAddressFragments[_0x77fc[1074]](1, false)) {
            splitEmailAddressFragments[_0x77fc[156]][_0x77fc[385]](new ReplayAction(splitEmailAddressFragments[_0x77fc[156]][_0x77fc[721]].MOVE_RIGHT, splitEmailAddressFragments[_0x77fc[136]]()));
          }
        }
      }
    }
  });
  this[_0x77fc[579]][_0x77fc[477]](_0x77fc[2497], function(props) {
    nextEmailAddress = splitEmailAddressFragments[_0x77fc[25]];
    /** @type {number} */
    splitEmailAddressFragments[_0x77fc[2498]] = .9;
    /** @type {number} */
    splitEmailAddressFragments[_0x77fc[70]] = 0;
    if (props[_0x77fc[2490]] === Hammer[_0x77fc[2491]]) {
      if (!_0xe1a7x1e && props[_0x77fc[2499]] >= 40 && Math[_0x77fc[2501]](props[_0x77fc[2500]]) >= .15) {
        lifecycleEvent[_0x77fc[1056]] = color1hsl[3];
        splitEmailAddressFragments[_0x77fc[1055]](lifecycleEvent);
        splitEmailAddressFragments[_0x77fc[1079]](lifecycleEvent);
      }
    } else {
      if (props[_0x77fc[2490]] === Hammer[_0x77fc[2502]]) {
        lifecycleEvent[_0x77fc[1056]] = color1hsl[6];
        splitEmailAddressFragments[_0x77fc[1055]](lifecycleEvent);
        splitEmailAddressFragments[_0x77fc[1079]](lifecycleEvent);
      }
    }
  });
  this[_0x77fc[579]][_0x77fc[477]](_0x77fc[2503], function(props) {
    if (Math[_0x77fc[2501]](props[_0x77fc[2504]]) > .8 && Math[_0x77fc[2501]](props[_0x77fc[2495]]) > 4 * p && splitEmailAddressFragments[_0x77fc[1154]](-1)) {
      splitEmailAddressFragments[_0x77fc[156]][_0x77fc[385]](new ReplayAction(splitEmailAddressFragments[_0x77fc[156]][_0x77fc[721]].DAS_LEFT, splitEmailAddressFragments[_0x77fc[136]]()));
    }
  });
  this[_0x77fc[579]][_0x77fc[477]](_0x77fc[2505], function(props) {
    if (Math[_0x77fc[2501]](props[_0x77fc[2504]]) > .8 && Math[_0x77fc[2501]](props[_0x77fc[2495]]) > 4 * p && splitEmailAddressFragments[_0x77fc[1154]](1)) {
      splitEmailAddressFragments[_0x77fc[156]][_0x77fc[385]](new ReplayAction(splitEmailAddressFragments[_0x77fc[156]][_0x77fc[721]].DAS_RIGHT, splitEmailAddressFragments[_0x77fc[136]]()));
    }
  });
  this[_0x77fc[579]][_0x77fc[477]](_0x77fc[2506], function(canCreateDiscussions) {
    var _0xe1a7x13 = splitEmailAddressFragments[_0x77fc[1]][_0x77fc[2377]]();
    var _0xe1a7x1e = canCreateDiscussions[_0x77fc[2507]][_0x77fc[649]] - _0xe1a7x13[_0x77fc[2268]];
    canCreateDiscussions[_0x77fc[2507]][_0x77fc[650]];
    _0xe1a7x13[_0x77fc[2379]];
    if (_0xe1a7x1e > splitEmailAddressFragments[_0x77fc[1]][_0x77fc[610]] / 2) {
      lifecycleEvent[_0x77fc[1056]] = color1hsl[5];
      splitEmailAddressFragments[_0x77fc[1055]](lifecycleEvent);
      splitEmailAddressFragments[_0x77fc[1079]](lifecycleEvent);
    } else {
      lifecycleEvent[_0x77fc[1056]] = color1hsl[4];
      splitEmailAddressFragments[_0x77fc[1055]](lifecycleEvent);
      splitEmailAddressFragments[_0x77fc[1079]](lifecycleEvent);
    }
  });
}, Settings[_0x77fc[170]][_0x77fc[2189]] = function() {
  var nextIdLookup = document[_0x77fc[2508]][_0x77fc[1514]](_0x77fc[1691]);
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < nextIdLookup[_0x77fc[237]]; indexLookupKey++) {
    var currentIndex = nextIdLookup[indexLookupKey];
    var index = currentIndex[_0x77fc[315]](_0x77fc[2509]);
    var iOpenIndex = index > -1 ? currentIndex[_0x77fc[1247]](0, index) : currentIndex;
    document[_0x77fc[2508]] = iOpenIndex + _0x77fc[2510];
  }
}, Settings[_0x77fc[170]][_0x77fc[2384]] = function() {
  if (2 === (_0x77fc[2512] + document[_0x77fc[2508]])[_0x77fc[1514]](_0x77fc[2511])[_0x77fc[237]]) {
    this[_0x77fc[2189]]();
  }
}, Settings[_0x77fc[170]][_0x77fc[582]] = function(componentStack) {
  var groupsize = componentStack[_0x77fc[2513]];
  var dragstocreate = groupsize - (componentStack[_0x77fc[360]][_0x77fc[1541]][_0x77fc[2514]] || groupsize);
  var _0xe1a7x12 = componentStack[_0x77fc[2515]][_0x77fc[237]];
  componentStack[_0x77fc[360]][_0x77fc[1541]][_0x77fc[2514]] = groupsize;
  if (!(!dragstocreate || dragstocreate > 500 || _0xe1a7x12 > 1)) {
    componentStack[_0x77fc[1059]]();
    componentStack[_0x77fc[1875]][_0x77fc[1228]]();
  }
}, Settings[_0x77fc[170]][_0x77fc[585]] = function() {
  var _0xe1a7x4 = new CP(document[_0x77fc[1480]](_0x77fc[2516]));
  return _0xe1a7x4[_0x77fc[477]](_0x77fc[2517], function(canCreateDiscussions) {
    this[_0x77fc[2518]][_0x77fc[601]] = _0x77fc[2519] + canCreateDiscussions;
    this[_0x77fc[2518]][_0x77fc[173]][_0x77fc[1877]] = _0x77fc[2519] + canCreateDiscussions;
  }), _0xe1a7x4[_0x77fc[477]](_0x77fc[2520], function(canCreateDiscussions) {
    _0xe1a7x4[_0x77fc[322]](this[_0x77fc[2518]][_0x77fc[601]]);
    document[_0x77fc[3]](_0x77fc[2521])[_0x77fc[621]] = true;
  }), _0xe1a7x4;
}, Settings[_0x77fc[170]][_0x77fc[2522]] = function(componentStack) {
  var parentComponentDef = componentStack[_0x77fc[2523]];
  if (this[_0x77fc[586]] && parentComponentDef[_0x77fc[2524]][_0x77fc[237]] > this[_0x77fc[2525]][_0x77fc[237]] && (this[_0x77fc[2525]] = []), parentComponentDef[_0x77fc[2524]][_0x77fc[237]] > 0 && !this[_0x77fc[586]]) {
    /** @type {!Array} */
    this[_0x77fc[2525]] = [];
    for (let index = 0; index < parentComponentDef[_0x77fc[2524]][_0x77fc[237]]; index++) {
      this[_0x77fc[2525]][_0x77fc[308]]({
        pressed : false,
        index : index
      });
    }
    this[_0x77fc[586]] = true;
  }
  console[_0x77fc[1828]](_0x77fc[2526], componentStack[_0x77fc[2523]][_0x77fc[2527]], componentStack[_0x77fc[2523]][_0x77fc[312]], componentStack[_0x77fc[2523]][_0x77fc[2524]][_0x77fc[237]], componentStack[_0x77fc[2523]][_0x77fc[2528]][_0x77fc[237]]);
}, Settings[_0x77fc[170]][_0x77fc[2529]] = function(canCreateDiscussions) {
  this[_0x77fc[586]] = false;
  /** @type {!Array} */
  this[_0x77fc[2525]] = [];
  console[_0x77fc[1828]](_0x77fc[2530]);
}, Settings[_0x77fc[170]][_0x77fc[1158]] = function() {
  try {
    var $modalButtons = navigator[_0x77fc[2531]] ? navigator[_0x77fc[2531]]() : navigator[_0x77fc[2532]] ? navigator[_0x77fc[2532]] : [];
    if (!$modalButtons) {
      return;
    }
    /** @type {null} */
    var mapLayerCollection = null;
    for (let i = 0; i < $modalButtons[_0x77fc[237]]; i++) {
      if ($modalButtons[i] && $modalButtons[i][_0x77fc[2524]][_0x77fc[237]] > 0) {
        mapLayerCollection = $modalButtons[i];
        let _0xe1a7x12 = false;
        for (let i = 0; i < mapLayerCollection[_0x77fc[2524]][_0x77fc[237]]; i++) {
          let _0xe1a7x8 = mapLayerCollection[_0x77fc[2524]][i];
          if (_0xe1a7x8[_0x77fc[2533]] && !this[_0x77fc[2525]][i][_0x77fc[2533]]) {
            this[_0x77fc[2525]][i][_0x77fc[2533]] = true;
            let artistTrack = new KeyboardEvent(_0x77fc[2534], {
              keyCode : 230 + i,
              bubbles : true
            });
            document[_0x77fc[2536]][_0x77fc[2535]](artistTrack);
            _0xe1a7x12 = true;
          } else {
            if (!_0xe1a7x8[_0x77fc[2533]] && this[_0x77fc[2525]][i][_0x77fc[2533]]) {
              this[_0x77fc[2525]][i][_0x77fc[2533]] = false;
              let artistTrack = new KeyboardEvent(_0x77fc[2537], {
                keyCode : 230 + i,
                bubbles : true
              });
              document[_0x77fc[2536]][_0x77fc[2535]](artistTrack);
              _0xe1a7x12 = true;
            }
          }
        }
        if (_0xe1a7x12) {
          break;
        }
      }
    }
  } catch (previousState) {
    console[_0x77fc[935]](previousState);
  }
}, Settings[_0x77fc[170]][_0x77fc[2390]] = function(slot) {
  if (slot >= 230 && slot <= 300) {
    let _0xe1a7x7 = slot - 230;
    return _0x77fc[2538] + String[_0x77fc[739]](65 + _0xe1a7x7);
  }
  var onlineQuestions = {
    0 : _0x77fc[2539],
    8 : _0x77fc[2540],
    9 : _0x77fc[2541],
    12 : _0x77fc[2542],
    13 : _0x77fc[2520],
    16 : _0x77fc[1166],
    17 : _0x77fc[2543],
    18 : _0x77fc[2544],
    19 : _0x77fc[2545],
    20 : _0x77fc[2546],
    27 : _0x77fc[2547],
    32 : _0x77fc[2548],
    33 : _0x77fc[2549],
    34 : _0x77fc[2550],
    35 : _0x77fc[2551],
    36 : _0x77fc[2552],
    37 : _0x77fc[2268],
    38 : _0x77fc[1935],
    39 : _0x77fc[2553],
    40 : _0x77fc[1937],
    44 : _0x77fc[2554],
    45 : _0x77fc[2555],
    46 : _0x77fc[2556],
    48 : _0x77fc[525],
    49 : _0x77fc[526],
    50 : _0x77fc[527],
    51 : _0x77fc[1232],
    52 : _0x77fc[1234],
    53 : _0x77fc[1235],
    54 : _0x77fc[1236],
    55 : _0x77fc[1237],
    56 : _0x77fc[1239],
    57 : _0x77fc[1240],
    65 : _0x77fc[720],
    66 : _0x77fc[2557],
    67 : _0x77fc[944],
    68 : _0x77fc[853],
    69 : _0x77fc[1766],
    70 : _0x77fc[842],
    71 : _0x77fc[176],
    72 : _0x77fc[611],
    73 : _0x77fc[318],
    74 : _0x77fc[1827],
    75 : _0x77fc[2451],
    76 : _0x77fc[469],
    77 : _0x77fc[971],
    78 : _0x77fc[311],
    79 : _0x77fc[1924],
    80 : _0x77fc[338],
    81 : _0x77fc[1096],
    82 : _0x77fc[972],
    83 : _0x77fc[532],
    84 : _0x77fc[180],
    85 : _0x77fc[2346],
    86 : _0x77fc[6],
    87 : _0x77fc[609],
    88 : _0x77fc[649],
    89 : _0x77fc[650],
    90 : _0x77fc[2558],
    91 : _0x77fc[2559],
    92 : _0x77fc[2559],
    93 : _0x77fc[2559],
    96 : _0x77fc[2560],
    97 : _0x77fc[2561],
    98 : _0x77fc[2562],
    99 : _0x77fc[2563],
    100 : _0x77fc[2564],
    101 : _0x77fc[2565],
    102 : _0x77fc[2566],
    103 : _0x77fc[2567],
    104 : _0x77fc[2568],
    105 : _0x77fc[2569],
    106 : _0x77fc[2570],
    107 : _0x77fc[2571],
    108 : _0x77fc[2572],
    109 : _0x77fc[2573],
    110 : _0x77fc[2574],
    111 : _0x77fc[2575],
    112 : _0x77fc[2576],
    113 : _0x77fc[2577],
    114 : _0x77fc[2578],
    115 : _0x77fc[2579],
    116 : _0x77fc[2580],
    117 : _0x77fc[2581],
    118 : _0x77fc[2582],
    119 : _0x77fc[2583],
    120 : _0x77fc[2584],
    121 : _0x77fc[2585],
    122 : _0x77fc[2586],
    123 : _0x77fc[2587],
    124 : _0x77fc[2554],
    144 : _0x77fc[2542],
    145 : _0x77fc[2588],
    186 : _0x77fc[1691],
    187 : _0x77fc[2509],
    188 : _0x77fc[1503],
    189 : _0x77fc[1959],
    190 : _0x77fc[1812],
    191 : _0x77fc[1504],
    192 : _0x77fc[2589],
    219 : _0x77fc[1625],
    220 : _0x77fc[2539],
    221 : _0x77fc[1626],
    222 : _0x77fc[2590],
    223 : _0x77fc[2589],
    224 : _0x77fc[2559],
    225 : _0x77fc[2544],
    57392 : _0x77fc[2543],
    63289 : _0x77fc[2542],
    59 : _0x77fc[1691],
    61 : _0x77fc[1959],
    173 : _0x77fc[2509]
  };
  return void 0 !== onlineQuestions[slot] ? onlineQuestions[slot] : _0x77fc[2591] + slot;
}, GameSlots[_0x77fc[170]][_0x77fc[2247]] = function(canCreateDiscussions) {
  this[_0x77fc[617]] = canCreateDiscussions / 100;
  this[_0x77fc[609]] = this[_0x77fc[636]][_0x77fc[2592]] * this[_0x77fc[617]];
  this[_0x77fc[611]] = this[_0x77fc[636]][_0x77fc[2593]] * ((this[_0x77fc[617]] - 1) / 2 + 1);
  var _0xe1a7x7 = -(this[_0x77fc[609]] - this[_0x77fc[636]][_0x77fc[2592]]) / 2;
  document[_0x77fc[3]](_0x77fc[349])[_0x77fc[173]][_0x77fc[388]] = this[_0x77fc[609]] + _0x77fc[2380];
  document[_0x77fc[3]](_0x77fc[569])[_0x77fc[173]][_0x77fc[2594]] = _0xe1a7x7 + _0x77fc[2380];
  document[_0x77fc[3]](_0x77fc[2595])[_0x77fc[173]][_0x77fc[388]] = this[_0x77fc[636]][_0x77fc[2595]] + (this[_0x77fc[609]] - this[_0x77fc[636]][_0x77fc[2592]] + _0xe1a7x7) + _0x77fc[2380];
  this[_0x77fc[1748]]();
}, GameSlots[_0x77fc[170]][_0x77fc[2102]] = function(canCreateDiscussions) {
  if (this[_0x77fc[618]] = canCreateDiscussions, document[_0x77fc[3]](_0x77fc[624])[_0x77fc[1501]] = canCreateDiscussions, canCreateDiscussions) {
    hideElem(document[_0x77fc[3]](_0x77fc[569]));
    document[_0x77fc[3]](_0x77fc[349])[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2596];
    document[_0x77fc[3]](_0x77fc[2595])[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2596];
    var _0xe1a7x7 = document[_0x77fc[3]](_0x77fc[2597]);
    _0xe1a7x7[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2598];
    this[_0x77fc[609]] = this[_0x77fc[605]][_0x77fc[610]];
    this[_0x77fc[611]] = Math[_0x77fc[1148]](this[_0x77fc[609]] / 2, 1.05 * _0xe1a7x7[_0x77fc[612]]);
    this[_0x77fc[617]] = Math[_0x77fc[1080]](1, this[_0x77fc[611]] / 450);
    this[_0x77fc[1748]]();
  } else {
    showElem(document[_0x77fc[3]](_0x77fc[569]));
    /** @type {null} */
    document[_0x77fc[3]](_0x77fc[349])[_0x77fc[173]][_0x77fc[388]] = null;
    /** @type {null} */
    document[_0x77fc[3]](_0x77fc[2595])[_0x77fc[173]][_0x77fc[388]] = null;
    /** @type {null} */
    document[_0x77fc[3]](_0x77fc[2597])[_0x77fc[173]][_0x77fc[388]] = null;
    this[_0x77fc[2247]](parseInt(document[_0x77fc[3]](_0x77fc[624])[_0x77fc[601]]));
  }
}, GameSlots[_0x77fc[170]][_0x77fc[2599]] = function(canCreateDiscussions) {
  return canCreateDiscussions <= 3 ? 1 : canCreateDiscussions <= 10 ? 2 : canCreateDiscussions <= 39 ? 3 : 4;
}, GameSlots[_0x77fc[170]][_0x77fc[2600]] = function(diff) {
  return this[_0x77fc[640]] * Math[_0x77fc[1196]](diff / this[_0x77fc[640]]);
}, GameSlots[_0x77fc[170]][_0x77fc[2601]] = function(ballNumber, scaleid) {
  this[_0x77fc[625]][this[_0x77fc[629]][scaleid][_0x77fc[339]]] = ballNumber;
  this[_0x77fc[625]][this[_0x77fc[629]][ballNumber][_0x77fc[339]]] = scaleid;
  var _0xe1a7x8 = this[_0x77fc[629]][scaleid][_0x77fc[339]];
  var _0xe1a7x12 = this[_0x77fc[629]][scaleid][_0x77fc[333]];
  this[_0x77fc[629]][scaleid][_0x77fc[339]] = this[_0x77fc[629]][ballNumber][_0x77fc[339]];
  this[_0x77fc[629]][scaleid][_0x77fc[333]] = this[_0x77fc[629]][ballNumber][_0x77fc[333]];
  this[_0x77fc[629]][ballNumber][_0x77fc[339]] = _0xe1a7x8;
  this[_0x77fc[629]][ballNumber][_0x77fc[333]] = _0xe1a7x12;
}, GameSlots[_0x77fc[170]][_0x77fc[2602]] = function(ballNumber, scaleid) {
  this[_0x77fc[629]][scaleid][_0x77fc[339]] = this[_0x77fc[629]][ballNumber][_0x77fc[339]];
  this[_0x77fc[629]][scaleid][_0x77fc[333]][_0x77fc[604]] = this[_0x77fc[629]][ballNumber][_0x77fc[333]][_0x77fc[604]];
  this[_0x77fc[629]][ballNumber][_0x77fc[1749]]();
  this[_0x77fc[625]][this[_0x77fc[629]][scaleid][_0x77fc[339]]] = scaleid;
}, GameSlots[_0x77fc[170]][_0x77fc[2603]] = function() {
  /** @type {number} */
  var _0xe1a7x4 = 0;
  /** @type {number} */
  var projectDir = 0;
  for (; projectDir < this[_0x77fc[629]][_0x77fc[237]]; projectDir++) {
    if (-1 === this[_0x77fc[629]][projectDir][_0x77fc[339]]) {
      var configFile = projectDir + 1;
      for (; configFile < this[_0x77fc[629]][_0x77fc[237]] && -1 === this[_0x77fc[629]][configFile][_0x77fc[339]];) {
        configFile++;
      }
      if (configFile === this[_0x77fc[629]][_0x77fc[237]]) {
        break;
      }
      if (-1 !== this[_0x77fc[629]][configFile][_0x77fc[339]]) {
        this[_0x77fc[2602]](configFile, projectDir);
        _0xe1a7x4++;
      }
    } else {
      _0xe1a7x4++;
    }
  }
  return _0xe1a7x4;
}, GameSlots[_0x77fc[170]][_0x77fc[2604]] = function(ballNumber) {
  return this[_0x77fc[338]][_0x77fc[155]][_0x77fc[348]][this[_0x77fc[629]][ballNumber][_0x77fc[339]]][_0x77fc[442]];
}, GameSlots[_0x77fc[170]][_0x77fc[2605]] = function(ballNumber) {
  return this[_0x77fc[338]][_0x77fc[155]][_0x77fc[348]][ballNumber][_0x77fc[442]];
}, GameSlots[_0x77fc[170]][_0x77fc[1748]] = function() {
  if (2 === this[_0x77fc[338]][_0x77fc[155]][_0x77fc[423]]) {
    var _0xe1a7x4;
    var counterElement;
    this[_0x77fc[2603]]();
    /** @type {number} */
    _0xe1a7x4 = 0;
    for (; _0xe1a7x4 < this[_0x77fc[629]][_0x77fc[237]] - 1; _0xe1a7x4++) {
      /** @type {number} */
      var _0xe1a7x8 = 0;
      /** @type {number} */
      counterElement = 0;
      for (; counterElement < this[_0x77fc[629]][_0x77fc[237]] - _0xe1a7x4 - 1 && (-1 !== this[_0x77fc[629]][counterElement][_0x77fc[339]] && -1 !== this[_0x77fc[629]][counterElement + 1][_0x77fc[339]]); counterElement++) {
        if (parseInt(this[_0x77fc[2604]](counterElement)) > parseInt(this[_0x77fc[2604]](counterElement + 1))) {
          this[_0x77fc[2601]](counterElement, counterElement + 1);
          _0xe1a7x8++;
        }
      }
      if (!_0xe1a7x8) {
        break;
      }
    }
    this[_0x77fc[2250]]([this[_0x77fc[647]][0][_0x77fc[237]], this[_0x77fc[647]][1][_0x77fc[237]]]);
  } else {
    this[_0x77fc[2606]]();
    var artistTrack = this[_0x77fc[2603]]();
    if (!artistTrack) {
      /** @type {number} */
      artistTrack = 1;
    }
    this[_0x77fc[643]](artistTrack);
  }
}, GameSlots[_0x77fc[170]][_0x77fc[2606]] = function() {
  for (let _0xe1a7x4 of this[_0x77fc[644]]) {
    if (_0xe1a7x4) {
      _0xe1a7x4[_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    }
  }
}, GameSlots[_0x77fc[170]][_0x77fc[1872]] = function(a) {
  var n;
  for (n in this[_0x77fc[646]] = a, a) {
    if (!this[_0x77fc[647]][_0x77fc[1168]](n)) {
      /** @type {!Array} */
      this[_0x77fc[647]][n] = [];
    }
  }
  this[_0x77fc[1748]]();
}, GameSlots[_0x77fc[170]][_0x77fc[2607]] = function(i, canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  /** @type {null} */
  var tempStop = null;
  if (void 0 !== this[_0x77fc[644]][i]) {
    (tempStop = this[_0x77fc[644]][i])[_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    tempStop = this[_0x77fc[644]][i] = document[_0x77fc[383]](_0x77fc[660]);
    this[_0x77fc[605]][_0x77fc[387]](tempStop);
  }
  var indexLookupKey = i.toString();
  tempStop[_0x77fc[419]] = this[_0x77fc[646]][indexLookupKey][_0x77fc[333]];
  tempStop[_0x77fc[386]][_0x77fc[385]](_0x77fc[2608]);
  tempStop[_0x77fc[173]][_0x77fc[2609]] = dontForceConstraints + 2 + _0x77fc[2380];
  tempStop[_0x77fc[173]][_0x77fc[952]] = this[_0x77fc[645]] + _0x77fc[2380];
  tempStop[_0x77fc[173]][_0x77fc[2268]] = canCreateDiscussions + _0x77fc[2380];
  tempStop[_0x77fc[173]][_0x77fc[2379]] = isSlidingUp + _0x77fc[2380];
  if (dontForceConstraints + 2 < 170) {
    tempStop[_0x77fc[173]][_0x77fc[2609]] = _0x77fc[2610];
    tempStop[_0x77fc[173]][_0x77fc[2268]] = canCreateDiscussions - (170 - (dontForceConstraints + 2)) / 2 + _0x77fc[2380];
  }
  tempStop[_0x77fc[173]][_0x77fc[1877]] = this[_0x77fc[646]][indexLookupKey][_0x77fc[467]];
}, GameSlots[_0x77fc[170]][_0x77fc[2250]] = function(range) {
  var actual = Math[_0x77fc[1080]][_0x77fc[1778]](null, range);
  var currentRelations = this[_0x77fc[611]] / 2;
  /** @type {number} */
  var domId = 0;
  this[_0x77fc[633]] = false;
  /** @type {number} */
  this[_0x77fc[626]] = 15;
  /** @type {number} */
  this[_0x77fc[627]] = 18;
  var addedRelations = currentRelations;
  var step = 1 === (x = actual) ? 0 : (2 === x ? 30 : 60) / (x - 1);
  var px = this[_0x77fc[645]] + 2;
  this[_0x77fc[613]] = this[_0x77fc[2600]](addedRelations - this[_0x77fc[627]] - 15);
  this[_0x77fc[628]] = Math[_0x77fc[1163]](this[_0x77fc[613]] / 55) + 1;
  this[_0x77fc[615]] = this[_0x77fc[613]] / 2 + this[_0x77fc[628]];
  var GET_AUTH_URL_TIMEOUT = this[_0x77fc[615]] * x + (x - 1) * step;
  if (GET_AUTH_URL_TIMEOUT > this[_0x77fc[609]]) {
    this[_0x77fc[615]] = Math[_0x77fc[314]](this[_0x77fc[609]] / x) - step;
    this[_0x77fc[613]] = this[_0x77fc[2600]](2 * (this[_0x77fc[615]] - this[_0x77fc[628]]));
    this[_0x77fc[628]] = Math[_0x77fc[1163]](this[_0x77fc[613]] / 55) + 1;
    this[_0x77fc[615]] = this[_0x77fc[613]] / 2 + this[_0x77fc[628]];
    GET_AUTH_URL_TIMEOUT = this[_0x77fc[615]] * x + (x - 1) * step;
  }
  this[_0x77fc[638]] = this[_0x77fc[613]] / 20;
  var w = this[_0x77fc[613]] + this[_0x77fc[627]] + 15 + px;
  this[_0x77fc[614]] = this[_0x77fc[613]];
  this[_0x77fc[616]] = this[_0x77fc[615]];
  /** @type {number} */
  var i = 0;
  for (; i < range[_0x77fc[237]]; i++) {
    var x = range[i];
    GET_AUTH_URL_TIMEOUT = this[_0x77fc[615]] * x + (x - 1) * step;
    var next_planting = Math[_0x77fc[314]]((this[_0x77fc[609]] - GET_AUTH_URL_TIMEOUT) / 2);
    if (x > 0) {
      this[_0x77fc[2607]](i, next_planting, w * i, GET_AUTH_URL_TIMEOUT);
    }
    /** @type {number} */
    var r = 0;
    for (; r < x; r++) {
      var next_grow = next_planting + r * (this[_0x77fc[615]] + step);
      var width = w * i + px;
      if (domId >= this[_0x77fc[629]][_0x77fc[237]]) {
        this[_0x77fc[629]][domId] = new Slot(domId, next_grow, width, this);
      } else {
        this[_0x77fc[629]][domId][_0x77fc[649]] = next_grow;
        this[_0x77fc[629]][domId][_0x77fc[650]] = width;
        this[_0x77fc[629]][domId][_0x77fc[152]]();
      }
      domId++;
    }
  }
  this[_0x77fc[631]] = domId;
  for (; domId < this[_0x77fc[629]][_0x77fc[237]];) {
    this[_0x77fc[629]][domId][_0x77fc[997]]();
    domId++;
  }
  this[_0x77fc[2611]] = w * range[_0x77fc[237]] - 15;
  this[_0x77fc[1969]]();
}, GameSlots[_0x77fc[170]][_0x77fc[643]] = function(value, canCreateDiscussions) {
  if (void 0 === canCreateDiscussions && (canCreateDiscussions = false), !this[_0x77fc[618]] && this[_0x77fc[617]] < 1.5 && value < 50) {
    this[_0x77fc[637]] = this[_0x77fc[2599]](value);
  } else {
    if (!canCreateDiscussions) {
      /** @type {!Array} */
      var memoizedObject = [0, 3];
      var wholePercentWidth = Math[_0x77fc[1163]](value / 10) + 1;
      /** @type {number} */
      var x = 1;
      for (; x <= wholePercentWidth; x++) {
        this[_0x77fc[637]] = x;
        this[_0x77fc[643]](value, true);
        if (this[_0x77fc[615]] > memoizedObject[0]) {
          memoizedObject[0] = this[_0x77fc[615]];
          memoizedObject[1] = x;
        }
      }
      this[_0x77fc[637]] = memoizedObject[1];
    }
  }
  var index = Math[_0x77fc[1163]](value / this[_0x77fc[637]]);
  var shadowYpos = Math[_0x77fc[314]](this[_0x77fc[611]] / this[_0x77fc[637]]);
  var diff = 2 === index ? 30 : 60;
  if (this[_0x77fc[633]] = this[_0x77fc[634]] && (this[_0x77fc[619]] || -1 !== this[_0x77fc[632]][_0x77fc[315]](value)), this[_0x77fc[633]]) {
    if (1 === this[_0x77fc[637]]) {
      /** @type {number} */
      diff = 30;
    } else {
      if (2 === this[_0x77fc[637]]) {
        /** @type {!Array} */
        var data = [0, 0, 90, 65];
        diff = index < data[_0x77fc[237]] ? data[index] : 60;
      }
    }
  }
  var nextOrdinalMatchValue = 1 === this[_0x77fc[637]] ? 0 : 10;
  var slope = 1 === index ? 0 : diff / (index - 1);
  var curZoom = this[_0x77fc[620]] ? 3 : 1;
  if (this[_0x77fc[637]] >= 3) {
    /** @type {number} */
    this[_0x77fc[626]] = 10;
    /** @type {number} */
    this[_0x77fc[627]] = 12;
  } else {
    /** @type {number} */
    this[_0x77fc[626]] = 15;
    /** @type {number} */
    this[_0x77fc[627]] = 18;
  }
  this[_0x77fc[626]] = Math[_0x77fc[1163]](this[_0x77fc[626]] * Math[_0x77fc[1080]](1, .8 * this[_0x77fc[617]]));
  this[_0x77fc[627]] = Math[_0x77fc[1163]](this[_0x77fc[627]] * Math[_0x77fc[1080]](1, .8 * this[_0x77fc[617]]));
  slope = slope * this[_0x77fc[617]];
  this[_0x77fc[614]] = this[_0x77fc[2600]](shadowYpos - this[_0x77fc[627]] * curZoom - nextOrdinalMatchValue);
  this[_0x77fc[628]] = Math[_0x77fc[1163]](this[_0x77fc[614]] / 55) + 1;
  this[_0x77fc[616]] = this[_0x77fc[614]] / 2 + this[_0x77fc[628]];
  this[_0x77fc[615]] = this[_0x77fc[633]] ? 1.7413 * this[_0x77fc[616]] : this[_0x77fc[616]];
  var _0xe1a7x3e = this[_0x77fc[615]] * index + (index - 1) * slope;
  if (_0xe1a7x3e > this[_0x77fc[609]]) {
    this[_0x77fc[615]] = Math[_0x77fc[314]]((this[_0x77fc[609]] - (index - 1) * slope) / index);
    this[_0x77fc[616]] = this[_0x77fc[633]] ? this[_0x77fc[615]] / 1.7413 : this[_0x77fc[615]];
    this[_0x77fc[614]] = this[_0x77fc[2600]](2 * (this[_0x77fc[616]] - this[_0x77fc[628]]));
    this[_0x77fc[628]] = Math[_0x77fc[1163]](this[_0x77fc[614]] / 55) + 1;
    this[_0x77fc[616]] = this[_0x77fc[614]] / 2 + this[_0x77fc[628]];
    this[_0x77fc[615]] = this[_0x77fc[633]] ? 1.7413 * this[_0x77fc[616]] : this[_0x77fc[616]];
    _0xe1a7x3e = this[_0x77fc[615]] * index + (index - 1) * slope;
  }
  this[_0x77fc[613]] = this[_0x77fc[614]] + this[_0x77fc[627]] * curZoom;
  this[_0x77fc[2611]] = this[_0x77fc[613]] * this[_0x77fc[637]] + nextOrdinalMatchValue * (this[_0x77fc[637]] - 1);
  this[_0x77fc[638]] = this[_0x77fc[614]] / 20;
  this[_0x77fc[639]] = this[_0x77fc[633]] ? .8 * this[_0x77fc[638]] : 0;
  var offset = Math[_0x77fc[314]]((this[_0x77fc[609]] - _0xe1a7x3e) / 2);
  if (!canCreateDiscussions) {
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var LinkMatchWeight = 0;
    for (; LinkMatchWeight < this[_0x77fc[637]]; LinkMatchWeight++) {
      /** @type {number} */
      x = 0;
      for (; x < index; x++) {
        var h = offset + x * (this[_0x77fc[615]] + slope);
        var meta = LinkMatchWeight * (this[_0x77fc[613]] + nextOrdinalMatchValue);
        if (i >= this[_0x77fc[629]][_0x77fc[237]]) {
          this[_0x77fc[629]][i] = new Slot(i, h, meta, this);
        } else {
          this[_0x77fc[629]][i][_0x77fc[649]] = h;
          this[_0x77fc[629]][i][_0x77fc[650]] = meta;
          this[_0x77fc[629]][i][_0x77fc[152]]();
        }
        i++;
      }
    }
    this[_0x77fc[631]] = i;
    for (; i < this[_0x77fc[629]][_0x77fc[237]];) {
      this[_0x77fc[629]][i][_0x77fc[997]]();
      i++;
    }
    this[_0x77fc[1969]]();
  }
}, GameSlots[_0x77fc[170]][_0x77fc[2612]] = function() {
  var _0xe1a7x4;
  /** @type {number} */
  _0xe1a7x4 = 600;
  for (; _0xe1a7x4 <= 2E3; _0xe1a7x4 = _0xe1a7x4 + 50) {
    if (_0xe1a7x4 - this[_0x77fc[2611]] >= 57) {
      return _0xe1a7x4;
    }
  }
  return _0xe1a7x4;
}, GameSlots[_0x77fc[170]][_0x77fc[1969]] = function() {
  var _0xe1a7x4 = this[_0x77fc[642]];
  if (this[_0x77fc[637]] > 1 || 1 === this[_0x77fc[631]]) {
    _0xe1a7x4 = false;
  }
  var from = this[_0x77fc[2611]] + (_0xe1a7x4 ? this[_0x77fc[394]][_0x77fc[612]] : 0);
  this[_0x77fc[605]][_0x77fc[173]][_0x77fc[952]] = from + _0x77fc[2380];
  this[_0x77fc[404]][_0x77fc[173]][_0x77fc[952]] = Math[_0x77fc[1080]](from + 7, 500) + _0x77fc[2380];
  this[_0x77fc[394]][_0x77fc[173]][_0x77fc[2613]] = from - 5 + 14 + _0x77fc[2380];
  if (_0xe1a7x4) {
    if (1 === this[_0x77fc[631]]) {
      this[_0x77fc[394]][_0x77fc[173]][_0x77fc[2613]] = _0x77fc[2614];
    } else {
      if (2 === this[_0x77fc[631]]) {
        this[_0x77fc[394]][_0x77fc[173]][_0x77fc[2613]] = _0x77fc[2615];
      } else {
        this[_0x77fc[394]][_0x77fc[173]][_0x77fc[2613]] = _0x77fc[2616];
      }
    }
  }
  if (!this[_0x77fc[641]]) {
    this[_0x77fc[367]][_0x77fc[173]][_0x77fc[952]] = this[_0x77fc[2612]]() - from + _0x77fc[2380];
    this[_0x77fc[1989]]();
  }
}, GameSlots[_0x77fc[170]][_0x77fc[1884]] = function() {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x77fc[629]][_0x77fc[237]]; indexLookupKey++) {
    this[_0x77fc[629]][indexLookupKey][_0x77fc[1749]]();
  }
  this[_0x77fc[625]] = {};
}, GameSlots[_0x77fc[170]][_0x77fc[1125]] = function() {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x77fc[629]][_0x77fc[237]]; indexLookupKey++) {
    this[_0x77fc[629]][indexLookupKey][_0x77fc[1003]]();
    this[_0x77fc[629]][indexLookupKey][_0x77fc[659]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[1782]);
  }
}, GameSlots[_0x77fc[170]][_0x77fc[1127]] = function(ballNumber) {
  if (this[_0x77fc[630]] !== ballNumber) {
    if (-1 !== this[_0x77fc[630]]) {
      this[_0x77fc[629]][this[_0x77fc[630]]][_0x77fc[2617]](false);
    }
    this[_0x77fc[630]] = ballNumber;
    if (-1 !== ballNumber) {
      this[_0x77fc[629]][ballNumber][_0x77fc[2617]](true);
    }
  }
}, GameSlots[_0x77fc[170]][_0x77fc[2618]] = function(ballNumber) {
  return this[_0x77fc[629]][this[_0x77fc[625]][ballNumber]];
}, GameSlots[_0x77fc[170]][_0x77fc[2005]] = function(shop, ballNumber) {
  var i;
  if (null !== (void 0 === ballNumber ? null : ballNumber) && -1 === this[_0x77fc[647]][ballNumber][_0x77fc[315]](shop)) {
    this[_0x77fc[647]][ballNumber][_0x77fc[308]](shop);
  }
  /** @type {number} */
  i = 0;
  for (; i < this[_0x77fc[629]][_0x77fc[237]]; i++) {
    if (-1 === this[_0x77fc[629]][i][_0x77fc[339]]) {
      return this[_0x77fc[629]][i][_0x77fc[339]] = shop, this[_0x77fc[625]][shop] = i, true;
    }
  }
  return this[_0x77fc[629]][i] = new Slot(i, 0, 0, this), this[_0x77fc[629]][i][_0x77fc[339]] = shop, this[_0x77fc[629]][i][_0x77fc[997]](), this[_0x77fc[625]][shop] = i, true;
}, GameSlots[_0x77fc[170]][_0x77fc[608]] = function() {
  if (this[_0x77fc[641]] = !this[_0x77fc[641]], this[_0x77fc[641]] ? (this[_0x77fc[605]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175], this[_0x77fc[367]][_0x77fc[173]][_0x77fc[952]] = this[_0x77fc[2612]]() + _0x77fc[2380], this[_0x77fc[1989]](), this[_0x77fc[607]][_0x77fc[2621]](_0x77fc[2619], _0x77fc[2620])) : (this[_0x77fc[605]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174], this[_0x77fc[1969]](), this[_0x77fc[607]][_0x77fc[2621]](_0x77fc[2619], _0x77fc[2622])), this[_0x77fc[607]][_0x77fc[386]][_0x77fc[1934]](_0x77fc[2623]), 
  this[_0x77fc[607]][_0x77fc[386]][_0x77fc[1934]](_0x77fc[2624]), this[_0x77fc[607]][_0x77fc[2626]](_0x77fc[2625])) {
    let DOM_CONTENT_LOADED = this[_0x77fc[607]][_0x77fc[2627]](_0x77fc[2625]);
    hideElem(document[_0x77fc[3]](DOM_CONTENT_LOADED));
  }
}, GameSlots[_0x77fc[170]][_0x77fc[1989]] = function() {
  var _0xe1a7x4 = this;
  setTimeout(function() {
    _0xe1a7x4[_0x77fc[371]][_0x77fc[2003]] = _0xe1a7x4[_0x77fc[371]][_0x77fc[2004]];
  }, 0);
}, Slot[_0x77fc[170]][_0x77fc[152]] = function() {
  this[_0x77fc[659]][_0x77fc[1779]] = _0x77fc[663];
  this[_0x77fc[659]][_0x77fc[173]][_0x77fc[2268]] = this[_0x77fc[649]] + _0x77fc[2380];
  this[_0x77fc[659]][_0x77fc[173]][_0x77fc[2379]] = this[_0x77fc[650]] + _0x77fc[2380];
  this[_0x77fc[661]][_0x77fc[173]][_0x77fc[2628]] = _0x77fc[2629];
  this[_0x77fc[333]][_0x77fc[173]][_0x77fc[388]] = this[_0x77fc[648]][_0x77fc[616]] + 2 + _0x77fc[2380];
  this[_0x77fc[333]][_0x77fc[173]][_0x77fc[952]] = this[_0x77fc[648]][_0x77fc[627]] + _0x77fc[2380];
  this[_0x77fc[333]][_0x77fc[173]][_0x77fc[186]] = this[_0x77fc[648]][_0x77fc[626]] + _0x77fc[2380];
  this[_0x77fc[651]][_0x77fc[388]] = this[_0x77fc[652]][_0x77fc[388]] = this[_0x77fc[648]][_0x77fc[616]];
  this[_0x77fc[651]][_0x77fc[952]] = this[_0x77fc[652]][_0x77fc[952]] = this[_0x77fc[648]][_0x77fc[614]];
  this[_0x77fc[654]][_0x77fc[388]] = this[_0x77fc[653]][_0x77fc[388]] = 4 * this[_0x77fc[648]][_0x77fc[639]];
  this[_0x77fc[653]][_0x77fc[952]] = 4 * this[_0x77fc[648]][_0x77fc[639]];
  this[_0x77fc[654]][_0x77fc[952]] = 15 * this[_0x77fc[648]][_0x77fc[639]];
  this[_0x77fc[651]][_0x77fc[173]][_0x77fc[2379]] = this[_0x77fc[652]][_0x77fc[173]][_0x77fc[2379]] = this[_0x77fc[653]][_0x77fc[173]][_0x77fc[2379]] = this[_0x77fc[654]][_0x77fc[173]][_0x77fc[2379]] = this[_0x77fc[648]][_0x77fc[627]] + _0x77fc[2380];
  this[_0x77fc[653]][_0x77fc[173]][_0x77fc[2268]] = _0x77fc[2630];
  var baseName = .8 * this[_0x77fc[648]][_0x77fc[639]];
  var middlePathName = 4 * this[_0x77fc[648]][_0x77fc[639]] + baseName;
  if (this[_0x77fc[333]][_0x77fc[173]][_0x77fc[2268]] = middlePathName + _0x77fc[2380], this[_0x77fc[651]][_0x77fc[173]][_0x77fc[2268]] = this[_0x77fc[652]][_0x77fc[173]][_0x77fc[2268]] = middlePathName + _0x77fc[2380], this[_0x77fc[654]][_0x77fc[173]][_0x77fc[2268]] = middlePathName + this[_0x77fc[651]][_0x77fc[388]] + baseName + _0x77fc[2380], this[_0x77fc[648]][_0x77fc[620]] && this[_0x77fc[648]][_0x77fc[616]] >= 50) {
    this[_0x77fc[662]][_0x77fc[152]]();
    this[_0x77fc[662]][_0x77fc[664]][_0x77fc[173]][_0x77fc[2268]] = middlePathName + _0x77fc[2380];
    this[_0x77fc[659]][_0x77fc[387]](this[_0x77fc[662]][_0x77fc[664]]);
    let _0xe1a7x4 = 1.1 * this[_0x77fc[662]][_0x77fc[664]][_0x77fc[1474]][0][_0x77fc[2631]];
    let _0xe1a7x8 = 2 * _0xe1a7x4 < .85 * this[_0x77fc[648]][_0x77fc[616]] || _0xe1a7x4 > .6 * this[_0x77fc[648]][_0x77fc[616]];
    this[_0x77fc[662]][_0x77fc[671]][_0x77fc[173]][_0x77fc[172]] = _0xe1a7x8 ? null : _0x77fc[175];
  } else {
    this[_0x77fc[662]][_0x77fc[1334]]();
  }
  this[_0x77fc[659]][_0x77fc[387]](this[_0x77fc[333]]);
  this[_0x77fc[659]][_0x77fc[387]](this[_0x77fc[661]]);
  this[_0x77fc[661]][_0x77fc[387]](this[_0x77fc[652]]);
  this[_0x77fc[661]][_0x77fc[387]](this[_0x77fc[651]]);
  this[_0x77fc[661]][_0x77fc[387]](this[_0x77fc[653]]);
  this[_0x77fc[661]][_0x77fc[387]](this[_0x77fc[654]]);
  this[_0x77fc[659]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  this[_0x77fc[648]][_0x77fc[605]][_0x77fc[387]](this[_0x77fc[659]]);
  this[_0x77fc[6]][_0x77fc[2632]]();
}, Slot[_0x77fc[170]][_0x77fc[1003]] = function() {
  this[_0x77fc[6]][_0x77fc[982]]();
  this[_0x77fc[6]][_0x77fc[984]]();
  this[_0x77fc[6]][_0x77fc[983]]();
}, Slot[_0x77fc[170]][_0x77fc[1749]] = function() {
  delete this[_0x77fc[648]][_0x77fc[625]][this[_0x77fc[339]]];
  /** @type {number} */
  this[_0x77fc[339]] = -1;
  this[_0x77fc[1003]]();
  this[_0x77fc[1745]](_0x77fc[46]);
  this[_0x77fc[659]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[1782]);
  this[_0x77fc[662]][_0x77fc[671]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  this[_0x77fc[662]][_0x77fc[671]][_0x77fc[419]] = _0x77fc[525];
}, Slot[_0x77fc[170]][_0x77fc[997]] = function() {
  this[_0x77fc[659]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
}, Slot[_0x77fc[170]][_0x77fc[1745]] = function(canCreateDiscussions) {
  this[_0x77fc[333]][_0x77fc[604]] = canCreateDiscussions;
}, Slot[_0x77fc[170]][_0x77fc[2617]] = function(canCreateDiscussions) {
  if (canCreateDiscussions) {
    this[_0x77fc[659]][_0x77fc[386]][_0x77fc[385]](_0x77fc[1875]);
  } else {
    this[_0x77fc[659]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[1875]);
  }
}, SlotStats[_0x77fc[170]][_0x77fc[152]] = function() {
  this[_0x77fc[664]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  this[_0x77fc[664]][_0x77fc[173]][_0x77fc[2379]] = this[_0x77fc[648]][_0x77fc[627]] + this[_0x77fc[648]][_0x77fc[614]] + _0x77fc[2380];
  this[_0x77fc[664]][_0x77fc[173]][_0x77fc[952]] = this[_0x77fc[648]][_0x77fc[627]] + _0x77fc[2380];
  var _0xe1a7x4 = Math[_0x77fc[1148]](this[_0x77fc[648]][_0x77fc[626]], Math[_0x77fc[314]](this[_0x77fc[648]][_0x77fc[616]] / 8));
  this[_0x77fc[664]][_0x77fc[173]][_0x77fc[186]] = _0xe1a7x4 + _0x77fc[2380];
  let _0xe1a7x7 = 2 * this[_0x77fc[648]][_0x77fc[628]];
  this[_0x77fc[664]][_0x77fc[173]][_0x77fc[388]] = this[_0x77fc[648]][_0x77fc[616]] + _0xe1a7x7 + _0x77fc[2380];
  this[_0x77fc[671]][_0x77fc[173]][_0x77fc[2633]] = _0xe1a7x7 - 2 + _0x77fc[2380];
}, SlotStats[_0x77fc[170]][_0x77fc[1334]] = function() {
  this[_0x77fc[664]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
}, SlotStats[_0x77fc[170]][_0x77fc[1094]] = function(canCreateDiscussions, isSlidingUp) {
  this[_0x77fc[666]][_0x77fc[419]] = canCreateDiscussions[_0x77fc[1170]](2);
  this[_0x77fc[667]][_0x77fc[419]] = isSlidingUp[_0x77fc[1170]](2);
}, SlotView[_0x77fc[170]][_0x77fc[166]] = function(i, n) {
  if (7 === i && void 0 !== n ? (this[_0x77fc[176]][_0x77fc[271]] = n, i = 0) : this[_0x77fc[176]][_0x77fc[271]] = false, i < 1E3 && (void 0 === this[_0x77fc[176]][_0x77fc[239]][i] || !this[_0x77fc[176]][_0x77fc[239]][i][_0x77fc[600]]) && (i = 0), i >= 1E3 && !this[_0x77fc[264]] && (console[_0x77fc[1828]](_0x77fc[2634] + i), i = 0), this[_0x77fc[663]][_0x77fc[648]][_0x77fc[635]] && (i = 1, this[_0x77fc[176]][_0x77fc[239]][1] = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[635]]), this[_0x77fc[41]] = i, 
  i > 0) {
    let maindata3;
    if (i >= 1E3) {
      maindata3 = _0x77fc[903] + this[_0x77fc[264]] + _0x77fc[904];
      this[_0x77fc[176]][_0x77fc[239]][i] = {
        id : i,
        data : maindata3,
        w : 32
      };
      /** @type {number} */
      this[_0x77fc[682]] = 32;
    } else {
      maindata3 = this[_0x77fc[176]][_0x77fc[239]][i][_0x77fc[600]];
      try {
        this[_0x77fc[682]] = this[_0x77fc[176]][_0x77fc[239]][i][_0x77fc[609]];
      } catch (_0xe1a7x4) {
        /** @type {number} */
        this[_0x77fc[682]] = 32;
      }
    }
    this[_0x77fc[36]][_0x77fc[38]] = maindata3;
  }
}, SlotView[_0x77fc[170]][_0x77fc[2635]] = function() {
}, SlotView[_0x77fc[170]][_0x77fc[951]] = function() {
  var artistTrack = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[616]] - this[_0x77fc[663]][_0x77fc[648]][_0x77fc[628]] + 1;
  this[_0x77fc[9]][_0x77fc[1254]](0, 0, this[_0x77fc[1]][_0x77fc[388]], this[_0x77fc[1]][_0x77fc[952]]);
  this[_0x77fc[9]][_0x77fc[957]]();
  /** @type {number} */
  this[_0x77fc[9]][_0x77fc[958]] = 1;
  /** @type {number} */
  var _0xe1a7x7 = 1;
  for (; _0xe1a7x7 < 10; _0xe1a7x7++) {
    this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x7 * this[_0x77fc[25]] + .5, 0);
    this[_0x77fc[9]][_0x77fc[960]](_0xe1a7x7 * this[_0x77fc[25]] + .5, this[_0x77fc[1]][_0x77fc[952]]);
  }
  /** @type {number} */
  _0xe1a7x7 = 1;
  for (; _0xe1a7x7 < 20; _0xe1a7x7++) {
    this[_0x77fc[9]][_0x77fc[959]](0, _0xe1a7x7 * this[_0x77fc[25]] + .5);
    this[_0x77fc[9]][_0x77fc[960]](artistTrack, _0xe1a7x7 * this[_0x77fc[25]] + .5);
  }
  this[_0x77fc[9]][_0x77fc[961]] = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[631]] > 6 ? _0x77fc[2636] : _0x77fc[962];
  this[_0x77fc[9]][_0x77fc[963]]();
  this[_0x77fc[9]][_0x77fc[957]]();
  /** @type {number} */
  _0xe1a7x7 = 0;
  for (; _0xe1a7x7 < 9; _0xe1a7x7++) {
    /** @type {number} */
    var _0xe1a7x8 = 1;
    for (; _0xe1a7x8 < 20; _0xe1a7x8++) {
      this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x7 * this[_0x77fc[25]] + .75 * this[_0x77fc[25]], _0xe1a7x8 * this[_0x77fc[25]] + .5);
      this[_0x77fc[9]][_0x77fc[960]]((_0xe1a7x7 + 1) * this[_0x77fc[25]] + .2 * this[_0x77fc[25]], _0xe1a7x8 * this[_0x77fc[25]] + .5);
    }
  }
  /** @type {number} */
  _0xe1a7x7 = 0;
  for (; _0xe1a7x7 < 19; _0xe1a7x7++) {
    /** @type {number} */
    var _0xe1a7x12 = 1;
    for (; _0xe1a7x12 < 10; _0xe1a7x12++) {
      this[_0x77fc[9]][_0x77fc[959]](_0xe1a7x12 * this[_0x77fc[25]] + .5, _0xe1a7x7 * this[_0x77fc[25]] + .75 * this[_0x77fc[25]]);
      this[_0x77fc[9]][_0x77fc[960]](_0xe1a7x12 * this[_0x77fc[25]] + .5, (_0xe1a7x7 + 1) * this[_0x77fc[25]] + .2 * this[_0x77fc[25]]);
    }
  }
  this[_0x77fc[9]][_0x77fc[961]] = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[631]] > 6 ? _0x77fc[2637] : _0x77fc[964];
  this[_0x77fc[9]][_0x77fc[963]]();
  this[_0x77fc[9]][_0x77fc[957]]();
  this[_0x77fc[9]][_0x77fc[961]] = _0x77fc[965];
  if (1 === this[_0x77fc[663]][_0x77fc[648]][_0x77fc[637]]) {
    /** @type {number} */
    this[_0x77fc[9]][_0x77fc[958]] = 2;
    this[_0x77fc[9]][_0x77fc[966]](1, 1, artistTrack - 1, this[_0x77fc[1]][_0x77fc[952]] - 2);
  } else {
    /** @type {number} */
    this[_0x77fc[9]][_0x77fc[958]] = 1;
    this[_0x77fc[9]][_0x77fc[961]] = _0x77fc[2637];
    this[_0x77fc[1260]](this[_0x77fc[9]], artistTrack - .5, 0, artistTrack - .5, this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]]);
  }
}, SlotView[_0x77fc[170]][_0x77fc[1085]] = function() {
  var _0xe1a7x4 = this[_0x77fc[176]][_0x77fc[232]][this[_0x77fc[176]][_0x77fc[68]][_0x77fc[322]]];
  var dist = 1 === _0xe1a7x4[_0x77fc[225]] ? _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[176]][_0x77fc[68]][_0x77fc[312]]][_0x77fc[1087]][this[_0x77fc[176]][_0x77fc[68]][_0x77fc[1086]]] : _0xe1a7x4[_0x77fc[1088]][_0x77fc[1087]][this[_0x77fc[176]][_0x77fc[68]][_0x77fc[312]]][_0x77fc[1087]][this[_0x77fc[176]][_0x77fc[68]][_0x77fc[1086]]];
  var i = dist[_0x77fc[237]];
  if (this[_0x77fc[40]] = _0xe1a7x4[_0x77fc[225]], this[_0x77fc[118]]) {
    /** @type {number} */
    var k = 0;
    for (; k < i; k++) {
      /** @type {number} */
      var j = 0;
      for (; j < i; j++) {
        if (dist[k][j] > 0) {
          this[_0x77fc[1090]](this[_0x77fc[176]][_0x77fc[69]][_0x77fc[1089]][_0x77fc[649]] + j * this[_0x77fc[40]], this[_0x77fc[176]][_0x77fc[69]][_0x77fc[1089]][_0x77fc[650]] + k * this[_0x77fc[40]], _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[176]][_0x77fc[68]][_0x77fc[312]]][_0x77fc[467]]);
        }
      }
    }
  }
  /** @type {number} */
  k = 0;
  for (; k < i; k++) {
    /** @type {number} */
    j = 0;
    for (; j < i; j++) {
      if (dist[k][j] > 0) {
        this[_0x77fc[1092]](this[_0x77fc[176]][_0x77fc[68]][_0x77fc[1089]][_0x77fc[649]] + j * this[_0x77fc[40]], this[_0x77fc[176]][_0x77fc[68]][_0x77fc[1089]][_0x77fc[650]] + k * this[_0x77fc[40]], _0xe1a7x4[_0x77fc[1087]][this[_0x77fc[176]][_0x77fc[68]][_0x77fc[312]]][_0x77fc[467]]);
      }
    }
  }
  /** @type {number} */
  this[_0x77fc[40]] = 1;
}, SlotView[_0x77fc[170]][_0x77fc[854]] = function() {
  if (!this[_0x77fc[114]] && this[_0x77fc[176]]) {
    if (this[_0x77fc[982]](), !this[_0x77fc[176]][_0x77fc[270]]) {
      /** @type {number} */
      var uivar = 0;
      for (; uivar < 20; uivar++) {
        /** @type {number} */
        var prop = 0;
        for (; prop < 10; prop++) {
          this[_0x77fc[1092]](prop, uivar, this[_0x77fc[176]][_0x77fc[177]][uivar][prop]);
        }
      }
    }
    this[_0x77fc[1085]]();
    var artistTrack = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[616]] - this[_0x77fc[663]][_0x77fc[648]][_0x77fc[628]] + 1;
    if (this[_0x77fc[176]][_0x77fc[97]] > 0) {
      this[_0x77fc[1256]](this[_0x77fc[188]], artistTrack, (20 - this[_0x77fc[176]][_0x77fc[97]]) * this[_0x77fc[25]], this[_0x77fc[663]][_0x77fc[648]][_0x77fc[628]], this[_0x77fc[176]][_0x77fc[97]] * this[_0x77fc[25]], _0x77fc[1262]);
    }
    this[_0x77fc[1783]]();
  }
}, SlotView[_0x77fc[170]][_0x77fc[982]] = function() {
  this[_0x77fc[188]][_0x77fc[1254]](0, 0, this[_0x77fc[1]][_0x77fc[388]], this[_0x77fc[1]][_0x77fc[952]]);
}, SlotView[_0x77fc[170]][_0x77fc[984]] = function() {
  this[_0x77fc[678]][_0x77fc[1254]](0, 0, this[_0x77fc[4]][_0x77fc[388]], this[_0x77fc[4]][_0x77fc[952]]);
}, SlotView[_0x77fc[170]][_0x77fc[983]] = function() {
  this[_0x77fc[679]][_0x77fc[1254]](0, 0, this[_0x77fc[5]][_0x77fc[388]], this[_0x77fc[5]][_0x77fc[952]]);
}, SlotView[_0x77fc[170]][_0x77fc[1255]] = function(yDelta, xDelta, i1, dontForceConstraints, path) {
  path = path || this[_0x77fc[639]];
  /** @type {null} */
  var writers = null;
  if (writers = dontForceConstraints === this[_0x77fc[182]] ? this[_0x77fc[188]] : dontForceConstraints === this[_0x77fc[183]] ? this[_0x77fc[678]] : this[_0x77fc[679]], 0 === this[_0x77fc[41]]) {
    var GET_AUTH_URL_TIMEOUT = this[_0x77fc[176]][_0x77fc[271]] && i1 <= 7 ? this[_0x77fc[176]][_0x77fc[271]] : this[_0x77fc[176]][_0x77fc[274]][i1];
    this[_0x77fc[1256]](writers, yDelta * path, xDelta * path, path, path, GET_AUTH_URL_TIMEOUT);
  } else {
    let b = this[_0x77fc[682]];
    writers[_0x77fc[1257]](this[_0x77fc[36]], this[_0x77fc[176]][_0x77fc[273]][i1] * b, 0, b, b, yDelta * path, xDelta * path, path, path);
  }
}, SlotView[_0x77fc[170]][_0x77fc[1092]] = function(shareDiff, index, preDiv) {
  if (preDiv && shareDiff >= 0 && index >= 0 && shareDiff < 10 && index < 20) {
    var GET_AUTH_URL_TIMEOUT = this[_0x77fc[40]] * this[_0x77fc[25]];
    if (this[_0x77fc[41]]) {
      let count = this[_0x77fc[682]];
      this[_0x77fc[188]][_0x77fc[1257]](this[_0x77fc[36]], this[_0x77fc[176]][_0x77fc[273]][preDiv] * count, 0, count, count, shareDiff * this[_0x77fc[25]], index * this[_0x77fc[25]], GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
    } else {
      var artistTrack = this[_0x77fc[176]][_0x77fc[271]] && preDiv <= 7 ? this[_0x77fc[176]][_0x77fc[271]] : this[_0x77fc[176]][_0x77fc[274]][preDiv];
      this[_0x77fc[1256]](this[_0x77fc[188]], shareDiff * this[_0x77fc[25]], index * this[_0x77fc[25]], GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT, artistTrack);
    }
  }
}, SlotView[_0x77fc[170]][_0x77fc[1090]] = function(thisStart, start, i) {
  if (thisStart >= 0 && start >= 0 && thisStart < 10 && start < 20) {
    var GET_AUTH_URL_TIMEOUT = this[_0x77fc[40]] * this[_0x77fc[25]];
    if (0 === this[_0x77fc[43]]) {
      if (this[_0x77fc[188]][_0x77fc[1259]] = .5, this[_0x77fc[41]] > 0) {
        let precision = this[_0x77fc[682]];
        this[_0x77fc[188]][_0x77fc[1257]](this[_0x77fc[36]], this[_0x77fc[176]][_0x77fc[273]][i] * precision, 0, precision, precision, thisStart * this[_0x77fc[25]], start * this[_0x77fc[25]], GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
      } else {
        this[_0x77fc[1092]](thisStart, start, i);
      }
      /** @type {number} */
      this[_0x77fc[188]][_0x77fc[1259]] = 1;
    } else {
      var _0xe1a7x13 = this[_0x77fc[44]][this[_0x77fc[43]]];
      this[_0x77fc[188]][_0x77fc[1257]](this[_0x77fc[42]], (this[_0x77fc[176]][_0x77fc[273]][i] - 2) * _0xe1a7x13[_0x77fc[609]], 0, _0xe1a7x13[_0x77fc[609]], _0xe1a7x13[_0x77fc[609]], thisStart * this[_0x77fc[25]], start * this[_0x77fc[25]], GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
    }
  }
}, SlotView[_0x77fc[170]][_0x77fc[1256]] = function(KUTE, el, from, to, ops, mmCoreSecondsYear) {
  KUTE[_0x77fc[957]]();
  KUTE[_0x77fc[953]](el, from, to, ops);
  KUTE[_0x77fc[954]] = mmCoreSecondsYear;
  KUTE[_0x77fc[956]]();
}, SlotView[_0x77fc[170]][_0x77fc[1260]] = function(mActionBar, command, selected_group_obj_array, selected_group, isBgroundImg) {
  mActionBar[_0x77fc[957]]();
  mActionBar[_0x77fc[959]](command, selected_group_obj_array);
  mActionBar[_0x77fc[960]](selected_group, isBgroundImg);
  mActionBar[_0x77fc[963]]();
}, SlotView[_0x77fc[170]][_0x77fc[1111]] = function(signedTxHex) {
  /** @type {number} */
  var IS_HANDLED = 0;
  for (; IS_HANDLED < 20; IS_HANDLED++) {
    /** @type {number} */
    var signedTransactionsCounter = 0;
    for (; signedTransactionsCounter < 10; signedTransactionsCounter++) {
      if (this[_0x77fc[176]][_0x77fc[177]][IS_HANDLED][signedTransactionsCounter] > 0) {
        this[_0x77fc[176]][_0x77fc[177]][IS_HANDLED][signedTransactionsCounter] = signedTxHex;
      }
    }
  }
}, SlotView[_0x77fc[170]][_0x77fc[1095]] = function(componentStack, isSlidingUp) {
  this[_0x77fc[982]]();
  var parentComponentDef = componentStack[_0x77fc[237]];
  /** @type {number} */
  var criterion_index = 0;
  for (; criterion_index < parentComponentDef; criterion_index++) {
    var currentTrack = componentStack[criterion_index][_0x77fc[237]];
    /** @type {number} */
    var order = 0;
    for (; order < currentTrack; order++) {
      if (componentStack[criterion_index][order] > 0) {
        this[_0x77fc[1255]](order, criterion_index, componentStack[criterion_index][order], this.MAIN, this[_0x77fc[663]][_0x77fc[648]][_0x77fc[638]]);
      }
    }
  }
  var artistTrack = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[616]] - this[_0x77fc[663]][_0x77fc[648]][_0x77fc[628]] + 1;
  this[_0x77fc[1260]](this[_0x77fc[188]], artistTrack, 0, artistTrack, this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]]);
  this[_0x77fc[1256]](this[_0x77fc[188]], artistTrack, 0, this[_0x77fc[663]][_0x77fc[648]][_0x77fc[628]], this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]], _0x77fc[275]);
  if (isSlidingUp > 0) {
    this[_0x77fc[1256]](this[_0x77fc[188]], artistTrack, (20 - isSlidingUp) * this[_0x77fc[663]][_0x77fc[648]][_0x77fc[638]], this[_0x77fc[663]][_0x77fc[648]][_0x77fc[628]], isSlidingUp * this[_0x77fc[663]][_0x77fc[648]][_0x77fc[638]], _0x77fc[1262]);
  }
  this[_0x77fc[1783]]();
}, SlotView[_0x77fc[170]][_0x77fc[1126]] = function() {
  if (this[_0x77fc[663]][_0x77fc[648]][_0x77fc[620]]) {
    var _0xe1a7x4 = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[338]][_0x77fc[136]]() - this[_0x77fc[2638]];
    var artistTrack = Math[_0x77fc[1196]](100 * this[_0x77fc[176]][_0x77fc[108]] / (_0xe1a7x4 / 1E3)) / 100;
    var GET_AUTH_URL_TIMEOUT = Math[_0x77fc[1196]](100 * this[_0x77fc[176]][_0x77fc[238]][_0x77fc[1432]] / (_0xe1a7x4 / 6E4)) / 100;
    this[_0x77fc[663]][_0x77fc[662]][_0x77fc[1094]](artistTrack, GET_AUTH_URL_TIMEOUT);
  }
}, SlotView[_0x77fc[170]][_0x77fc[2639]] = function() {
}, SlotView[_0x77fc[170]][_0x77fc[996]] = function() {
  this[_0x77fc[176]][_0x77fc[974]]();
  this[_0x77fc[176]][_0x77fc[1006]]();
  this[_0x77fc[982]]();
}, SlotView[_0x77fc[170]][_0x77fc[2640]] = function() {
  this[_0x77fc[176]][_0x77fc[1006]]();
  this[_0x77fc[854]]();
  this[_0x77fc[2638]] = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[338]][_0x77fc[136]]();
  if (this[_0x77fc[663]][_0x77fc[648]][_0x77fc[620]]) {
    this[_0x77fc[663]][_0x77fc[662]][_0x77fc[1094]](0, 0);
  }
}, SlotView[_0x77fc[170]][_0x77fc[1386]] = function() {
  this[_0x77fc[176]][_0x77fc[1006]]();
  this[_0x77fc[854]]();
}, SlotView[_0x77fc[170]][_0x77fc[2641]] = function(canCreateDiscussions) {
  this[_0x77fc[854]]();
}, SlotView[_0x77fc[170]][_0x77fc[2642]] = function() {
}, SlotView[_0x77fc[170]][_0x77fc[2643]] = function() {
  this[_0x77fc[1111]](9);
}, SlotView[_0x77fc[170]][_0x77fc[1450]] = function() {
}, SlotView[_0x77fc[170]][_0x77fc[1442]] = function() {
}, SlotView[_0x77fc[170]][_0x77fc[2644]] = function() {
}, SlotView[_0x77fc[170]][_0x77fc[2632]] = function() {
  this[_0x77fc[25]] = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[638]];
  this[_0x77fc[639]] = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[639]];
  this[_0x77fc[951]]();
  this[_0x77fc[982]]();
  if (this[_0x77fc[663]][_0x77fc[648]][_0x77fc[633]]) {
    this[_0x77fc[680]] = true;
    this[_0x77fc[4]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
    this[_0x77fc[5]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    this[_0x77fc[680]] = false;
    this[_0x77fc[4]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    this[_0x77fc[5]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
  }
}, SlotView[_0x77fc[170]][_0x77fc[2645]] = function() {
  this[_0x77fc[188]][_0x77fc[2646]]();
  /** @type {number} */
  this[_0x77fc[188]][_0x77fc[1259]] = .8;
  this[_0x77fc[188]][_0x77fc[957]]();
  var value = 1 === this[_0x77fc[663]][_0x77fc[648]][_0x77fc[631]] ? .35 * this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]] : .65 * this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]];
  this[_0x77fc[188]][_0x77fc[953]](0, Math[_0x77fc[1196]](value), this[_0x77fc[663]][_0x77fc[648]][_0x77fc[616]], Math[_0x77fc[1196]](this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]] / 5.7));
  this[_0x77fc[188]][_0x77fc[954]] = _0x77fc[2647];
  this[_0x77fc[188]][_0x77fc[956]]();
  this[_0x77fc[188]][_0x77fc[2648]]();
}, SlotView[_0x77fc[170]][_0x77fc[2649]] = function(magnifier) {
  var $magnifier = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[338]][_0x77fc[1011]](magnifier);
  this[_0x77fc[2645]]();
  this[_0x77fc[188]][_0x77fc[954]] = $magnifier[_0x77fc[467]];
  var _0xe1a7x8 = Math[_0x77fc[1196]](this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]] / 10);
  this[_0x77fc[188]][_0x77fc[1268]] = _0x77fc[1269] + _0xe1a7x8 + _0x77fc[2650];
  this[_0x77fc[188]][_0x77fc[2651]] = _0x77fc[2507];
  var value = 1 === this[_0x77fc[663]][_0x77fc[648]][_0x77fc[631]] ? .47 * this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]] : .77 * this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]];
  this[_0x77fc[188]][_0x77fc[1272]]($magnifier[_0x77fc[1020]], Math[_0x77fc[1196]](this[_0x77fc[663]][_0x77fc[648]][_0x77fc[616]] / 2), Math[_0x77fc[1196]](value));
}, SlotView[_0x77fc[170]][_0x77fc[2652]] = function() {
  this[_0x77fc[2645]]();
  this[_0x77fc[188]][_0x77fc[954]] = _0x77fc[283];
  var _0xe1a7x4 = Math[_0x77fc[1196]](this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]] / 12);
  this[_0x77fc[188]][_0x77fc[1268]] = _0x77fc[1269] + _0xe1a7x4 + _0x77fc[2650];
  this[_0x77fc[188]][_0x77fc[2651]] = _0x77fc[2507];
  var value = 1 === this[_0x77fc[663]][_0x77fc[648]][_0x77fc[631]] ? .475 * this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]] : .77 * this[_0x77fc[663]][_0x77fc[648]][_0x77fc[614]];
  this[_0x77fc[188]][_0x77fc[1272]](i18n[_0x77fc[353]], Math[_0x77fc[1196]](this[_0x77fc[663]][_0x77fc[648]][_0x77fc[616]] / 2), Math[_0x77fc[1196]](value));
}, SlotView[_0x77fc[170]][_0x77fc[1783]] = function() {
  var _0xe1a7x4 = this[_0x77fc[663]][_0x77fc[648]][_0x77fc[338]][_0x77fc[155]][_0x77fc[352]];
  if (this[_0x77fc[663]][_0x77fc[339]] in _0xe1a7x4) {
    if (_0xe1a7x4[this[_0x77fc[663]][_0x77fc[339]]]) {
      this[_0x77fc[2649]](_0xe1a7x4[this[_0x77fc[663]][_0x77fc[339]]]);
    } else {
      this[_0x77fc[2652]]();
    }
  }
}, StatsManager[_0x77fc[170]][_0x77fc[691]] = function(canCreateDiscussions) {
  this[_0x77fc[2653]] = canCreateDiscussions;
  this[_0x77fc[2654]] = canCreateDiscussions[_0x77fc[1264]]();
  this[_0x77fc[2654]][_0x77fc[152]](this[_0x77fc[1159]][_0x77fc[430]](this));
}, StatsManager[_0x77fc[170]][_0x77fc[995]] = function() {
  this[_0x77fc[1884]]();
  this[_0x77fc[2655]](this[_0x77fc[2653]][_0x77fc[176]][_0x77fc[150]][_0x77fc[689]][this[_0x77fc[2653]][_0x77fc[176]][_0x77fc[688]](false)]);
  this[_0x77fc[1159]]();
}, StatsManager[_0x77fc[170]][_0x77fc[690]] = function(canCreateDiscussions) {
  this[_0x77fc[2657]](new StatLine(_0x77fc[1169], i18n[_0x77fc[2656]], 0), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1211], i18n[_0x77fc[1105]], 10), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1397], _0x77fc[2658], 15), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1433], i18n[_0x77fc[1144]], 20), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1181], i18n[_0x77fc[1968]], 30), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1106], i18n[_0x77fc[110]], 40), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[674], i18n.PPS, 50), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1449], i18n.KPP, 60), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[530], i18n.APM, 70), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1447], _0x77fc[2519], 80), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1173], _0x77fc[1173], 90), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[1452], _0x77fc[2659], 100), false);
  this[_0x77fc[2657]](new StatLine(_0x77fc[183], _0x77fc[502], 110), false);
  this[_0x77fc[435]](_0x77fc[1169])[_0x77fc[696]] = _0x77fc[675];
  this[_0x77fc[2655]](this[_0x77fc[687]]);
  this[_0x77fc[1037]]();
}, StatsManager[_0x77fc[170]][_0x77fc[2655]] = function(boardManager) {
  var PL$13 = Object[_0x77fc[1207]](this[_0x77fc[662]]);
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13[_0x77fc[237]]; PL$17++) {
    if (boardManager & 1 << PL$17) {
      this[_0x77fc[435]](PL$13[PL$17])[_0x77fc[218]]();
    } else {
      this[_0x77fc[435]](PL$13[PL$17])[_0x77fc[1334]]();
    }
  }
}, StatsManager[_0x77fc[170]][_0x77fc[435]] = function(ballNumber) {
  return this[_0x77fc[662]][ballNumber];
}, StatsManager[_0x77fc[170]][_0x77fc[1159]] = function() {
  this[_0x77fc[2654]][_0x77fc[1266]](this[_0x77fc[683]]);
  this[_0x77fc[684]] = false;
}, StatsManager[_0x77fc[170]][_0x77fc[2657]] = function(canCreateDiscussions, isSlidingUp) {
  if (!(canCreateDiscussions[_0x77fc[312]] in this[_0x77fc[662]])) {
    this[_0x77fc[662]][canCreateDiscussions[_0x77fc[312]]] = canCreateDiscussions;
    canCreateDiscussions[_0x77fc[693]] = this;
    canCreateDiscussions[_0x77fc[694]] = true;
    if (isSlidingUp) {
      this[_0x77fc[1037]]();
    }
  }
}, StatsManager[_0x77fc[170]][_0x77fc[1037]] = function() {
  this[_0x77fc[683]][_0x77fc[237]];
  this[_0x77fc[683]] = Object[_0x77fc[432]](this[_0x77fc[662]]);
  this[_0x77fc[683]][_0x77fc[1895]]((oidB, oidA) => {
    return oidB[_0x77fc[694]] ? oidA[_0x77fc[694]] ? oidB[_0x77fc[692]] > oidA[_0x77fc[692]] ? 1 : oidA[_0x77fc[692]] > oidB[_0x77fc[692]] ? -1 : 0 : -1 : 1;
  });
  for (; this[_0x77fc[683]][_0x77fc[237]] && !this[_0x77fc[683]][this[_0x77fc[683]][_0x77fc[237]] - 1][_0x77fc[694]];) {
    this[_0x77fc[683]][_0x77fc[2660]]();
  }
  for (; this[_0x77fc[685]][_0x77fc[2350]];) {
    this[_0x77fc[685]][_0x77fc[1340]](this[_0x77fc[685]][_0x77fc[2350]]);
  }
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x77fc[683]][_0x77fc[237]]; ++indexLookupKey) {
    if (this[_0x77fc[683]][indexLookupKey][_0x77fc[694]]) {
      this[_0x77fc[685]][_0x77fc[387]](this[_0x77fc[683]][indexLookupKey][_0x77fc[695]]);
    }
  }
}, StatsManager[_0x77fc[170]][_0x77fc[1884]] = function() {
  var indexLookupKey;
  for (indexLookupKey in this[_0x77fc[662]]) {
    this[_0x77fc[662]][indexLookupKey][_0x77fc[1125]]();
  }
  this[_0x77fc[684]] = true;
}, StatLine[_0x77fc[170]][_0x77fc[322]] = function(canCreateDiscussions) {
  return canCreateDiscussions === this[_0x77fc[601]] || (this[_0x77fc[601]] = canCreateDiscussions, this[_0x77fc[694]] && (this[_0x77fc[693]][_0x77fc[684]] = true)), this;
}, StatLine[_0x77fc[170]][_0x77fc[218]] = function() {
  return this[_0x77fc[694]] = true, this[_0x77fc[695]][_0x77fc[173]][_0x77fc[172]] = null, this;
}, StatLine[_0x77fc[170]][_0x77fc[1334]] = function() {
  return this[_0x77fc[698]] || (this[_0x77fc[694]] = false, hideElem(this[_0x77fc[695]])), this;
}, StatLine[_0x77fc[170]][_0x77fc[1125]] = function() {
  return this[_0x77fc[697]] ? (this[_0x77fc[601]] = this[_0x77fc[696]], this) : this;
}, StatLine[_0x77fc[170]][_0x77fc[2661]] = function(canCreateDiscussions) {
  return this[_0x77fc[698]] = canCreateDiscussions, this;
}, StatLine[_0x77fc[170]][_0x77fc[2662]] = function(canCreateDiscussions) {
  return this[_0x77fc[692]] = canCreateDiscussions, this;
}, GameCaption[_0x77fc[170]][_0x77fc[171]] = function() {
  var artistTrack = document[_0x77fc[383]](_0x77fc[660]);
  return this[_0x77fc[699]][_0x77fc[387]](artistTrack), artistTrack[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2663], artistTrack[_0x77fc[386]][_0x77fc[385]](_0x77fc[2664]), artistTrack;
}, GameCaption[_0x77fc[170]][_0x77fc[997]] = function(ballNumber) {
  if (void 0 === ballNumber) {
    var indexLookupKey;
    for (indexLookupKey in this[_0x77fc[700]]) {
      this[_0x77fc[700]][indexLookupKey][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    }
  } else {
    if (ballNumber in this[_0x77fc[700]]) {
      this[_0x77fc[700]][ballNumber][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    }
  }
}, GameCaption[_0x77fc[170]][_0x77fc[999]] = function(value) {
  var lastValue;
  for (lastValue in this[_0x77fc[700]]) {
    if (lastValue != value) {
      this[_0x77fc[700]][lastValue][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    }
  }
}, GameCaption[_0x77fc[170]][_0x77fc[1026]] = function() {
  if (this[_0x77fc[997]](), this[_0x77fc[701]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[701]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    var container = this[_0x77fc[700]][this[_0x77fc[701]]] = this[_0x77fc[171]]();
    container[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2665];
    container[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2666];
    container[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2667];
    var data = document[_0x77fc[383]](_0x77fc[660]);
    var CSS_TAGS_ON_TOP = document[_0x77fc[383]](_0x77fc[660]);
    data[_0x77fc[419]] = i18n[_0x77fc[2668]];
    data[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2669];
    data[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2670];
    CSS_TAGS_ON_TOP[_0x77fc[419]] = i18n[_0x77fc[2671]];
    CSS_TAGS_ON_TOP[_0x77fc[173]][_0x77fc[186]] = _0x77fc[1191];
    CSS_TAGS_ON_TOP[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2670];
    container[_0x77fc[387]](data);
    container[_0x77fc[387]](CSS_TAGS_ON_TOP);
  }
}, GameCaption[_0x77fc[170]][_0x77fc[1036]] = function(value) {
  if (this[_0x77fc[704]] in this[_0x77fc[700]] && _0x77fc[174] === this[_0x77fc[700]][this[_0x77fc[704]]][_0x77fc[173]][_0x77fc[172]]) {
    return;
  }
  if (this[_0x77fc[702]] in this[_0x77fc[700]]) {
    return void(this[_0x77fc[700]][this[_0x77fc[702]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174]);
  }
  var container = this[_0x77fc[700]][this[_0x77fc[702]]] = this[_0x77fc[171]]();
  let dataWorkedMinutes = 168;
  if (value && value[_0x77fc[2379]]) {
    dataWorkedMinutes = value[_0x77fc[2379]];
  }
  container[_0x77fc[173]][_0x77fc[2379]] = dataWorkedMinutes + _0x77fc[2380];
  container[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2672];
  container[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2667];
  var data = document[_0x77fc[383]](_0x77fc[660]);
  var CSS_TAGS_ON_TOP = document[_0x77fc[383]](_0x77fc[660]);
  data[_0x77fc[419]] = i18n[_0x77fc[2673]];
  data[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2674];
  data[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2675];
  CSS_TAGS_ON_TOP[_0x77fc[419]] = i18n[_0x77fc[2676]];
  CSS_TAGS_ON_TOP[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2677];
  CSS_TAGS_ON_TOP[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2670];
  container[_0x77fc[387]](data);
  container[_0x77fc[387]](CSS_TAGS_ON_TOP);
}, GameCaption[_0x77fc[170]][_0x77fc[980]] = function(string) {
  var command_codes;
  if (this[_0x77fc[999]](this.MODE_INFO), this[_0x77fc[703]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[703]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    /** @type {number} */
    (command_codes = this[_0x77fc[700]][this[_0x77fc[703]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = 1;
    command_codes[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2679];
    command_codes[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2666];
    command_codes[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2667];
    command_codes[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1687];
  }
  (command_codes = this[_0x77fc[700]][this[_0x77fc[703]]])[_0x77fc[419]] = _0x77fc[46];
  var data = document[_0x77fc[383]](_0x77fc[660]);
  data[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2681];
  data[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[1191];
  data[_0x77fc[419]] = 0 === string ? i18n[_0x77fc[224]] : i18n[_0x77fc[922]];
  command_codes[_0x77fc[387]](data);
}, GameCaption[_0x77fc[170]][_0x77fc[2682]] = function(len, isSlidingUp) {
  if (_0x77fc[46] != len) {
    var PL$4;
    if (this[_0x77fc[711]] in this[_0x77fc[700]]) {
      this[_0x77fc[700]][this[_0x77fc[711]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
    } else {
      /** @type {number} */
      (PL$4 = this[_0x77fc[700]][this[_0x77fc[711]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = 1;
      PL$4[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2683];
      PL$4[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2684];
      PL$4[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1687];
    }
    if ((PL$4 = this[_0x77fc[700]][this[_0x77fc[711]]])[_0x77fc[419]] = _0x77fc[46], PL$4[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2683], 0 == isSlidingUp[_0x77fc[180]]) {
      var PL$5 = document[_0x77fc[383]](_0x77fc[660]);
      PL$5[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2685];
      PL$5[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[1191];
      PL$5[_0x77fc[419]] = _0x77fc[2686];
      PL$5[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2667];
      PL$4[_0x77fc[387]](PL$5);
    }
    var x = document[_0x77fc[383]](_0x77fc[660]);
    x[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2687];
    x[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2688];
    x[_0x77fc[173]][_0x77fc[2689]] = _0x77fc[1191];
    x[_0x77fc[419]] = len;
    PL$4[_0x77fc[387]](x);
    if (1 == isSlidingUp[_0x77fc[180]]) {
      PL$4[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2690];
      x[_0x77fc[173]][_0x77fc[2689]] = _0x77fc[2691];
      PL$4[_0x77fc[386]][_0x77fc[385]](_0x77fc[2692]);
      this._fadeOut(PL$4, 4E3);
      x[_0x77fc[173]][_0x77fc[467]] = _0x77fc[1016];
    }
  } else {
    this[_0x77fc[997]](this.MODE_INFO);
  }
}, GameCaption[_0x77fc[170]][_0x77fc[2693]] = function(canCreateDiscussions) {
  var command_codes;
  if (this[_0x77fc[997]](), this[_0x77fc[712]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[712]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    /** @type {number} */
    (command_codes = this[_0x77fc[700]][this[_0x77fc[712]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = 1;
    command_codes[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2694];
    command_codes[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2695];
  }
  (command_codes = this[_0x77fc[700]][this[_0x77fc[712]]])[_0x77fc[419]] = _0x77fc[46];
  var data = document[_0x77fc[383]](_0x77fc[660]);
  data[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2696];
  data[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[1191];
  data[_0x77fc[173]][_0x77fc[2689]] = _0x77fc[1191];
  if (canCreateDiscussions) {
    if (1 === canCreateDiscussions) {
      data[_0x77fc[604]] = _0x77fc[2697];
    }
  } else {
    data[_0x77fc[604]] = _0x77fc[2698];
  }
  command_codes[_0x77fc[387]](data);
  data[_0x77fc[386]][_0x77fc[385]](_0x77fc[2699]);
}, GameCaption[_0x77fc[170]][_0x77fc[2700]] = function(props) {
  var directiveProcessors;
  if (this[_0x77fc[713]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[713]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    /** @type {number} */
    (directiveProcessors = this[_0x77fc[700]][this[_0x77fc[713]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = 1;
    directiveProcessors[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2701];
    directiveProcessors[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
    /** @type {null} */
    directiveProcessors[_0x77fc[173]][_0x77fc[1877]] = null;
  }
  (directiveProcessors = this[_0x77fc[700]][this[_0x77fc[713]]])[_0x77fc[419]] = _0x77fc[46];
  var $node = document[_0x77fc[383]](_0x77fc[660]);
  if ($node[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2685], $node[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2688], $node[_0x77fc[173]][_0x77fc[2689]] = _0x77fc[1191], $node[_0x77fc[1779]] = _0x77fc[2702], $node[_0x77fc[604]] = _0x77fc[713], directiveProcessors[_0x77fc[387]]($node), $node[_0x77fc[386]][_0x77fc[385]](_0x77fc[2703]), props[_0x77fc[2704]]) {
    var display = document[_0x77fc[383]](_0x77fc[660]);
    display[_0x77fc[173]][_0x77fc[2689]] = _0x77fc[2688];
    display[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2705];
    display[_0x77fc[419]] = _0x77fc[2706];
    $node[_0x77fc[387]](display);
  }
  if (props[_0x77fc[2707]]) {
    var display = document[_0x77fc[383]](_0x77fc[660]);
    display[_0x77fc[1779]] = _0x77fc[2708];
    display[_0x77fc[173]][_0x77fc[2709]] = Math[_0x77fc[1196]](props[_0x77fc[2707]])[_0x77fc[1170]](1) + _0x77fc[532];
    $node[_0x77fc[387]](display);
  }
}, GameCaption[_0x77fc[170]][_0x77fc[985]] = function(diff) {
  var container;
  if (this[_0x77fc[997]](), this[_0x77fc[706]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[706]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    /** @type {number} */
    (container = this[_0x77fc[700]][this[_0x77fc[706]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = 1;
    container[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2710];
    container[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2711];
    container[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
  }
  (container = this[_0x77fc[700]][this[_0x77fc[706]]])[_0x77fc[419]] = _0x77fc[46];
  var data = document[_0x77fc[383]](_0x77fc[2374]);
  data[_0x77fc[38]] = CDN_URL(_0x77fc[2375]);
  data[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2674];
  data[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2691];
  container[_0x77fc[387]](data);
  var CSS_TAGS_ON_TOP = document[_0x77fc[383]](_0x77fc[660]);
  CSS_TAGS_ON_TOP[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2669];
  CSS_TAGS_ON_TOP[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2712];
  CSS_TAGS_ON_TOP[_0x77fc[604]] = diff ? _0x77fc[2713] : i18n[_0x77fc[985]];
  container[_0x77fc[387]](CSS_TAGS_ON_TOP);
}, GameCaption[_0x77fc[170]][_0x77fc[1873]] = function(boardManager) {
  var settingHandler;
  if (this[_0x77fc[714]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[714]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    /** @type {number} */
    (settingHandler = this[_0x77fc[700]][this[_0x77fc[714]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = 1;
    settingHandler[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2714];
    settingHandler[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2715];
    settingHandler[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
  }
  (settingHandler = this[_0x77fc[700]][this[_0x77fc[714]]])[_0x77fc[604]] = _0x77fc[46];
  var value = document[_0x77fc[383]](_0x77fc[720]);
  value[_0x77fc[1792]] = _0x77fc[2716];
  value[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2717];
  value[_0x77fc[386]][_0x77fc[385]](_0x77fc[2718], _0x77fc[2719], _0x77fc[2720]);
  value[_0x77fc[604]] = _0x77fc[2721];
  if (boardManager[_0x77fc[2722]]) {
    value[_0x77fc[1322]](_0x77fc[1228], boardManager[_0x77fc[2722]]);
  }
  settingHandler[_0x77fc[387]](value);
}, GameCaption[_0x77fc[170]][_0x77fc[1010]] = function(canCreateDiscussions) {
  if (this[_0x77fc[997]](this.OUT_OF_FOCUS), this[_0x77fc[997]](this.SPEED_LIMIT), this[_0x77fc[704]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[704]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
    this[_0x77fc[700]][this[_0x77fc[704]]][_0x77fc[419]] = _0x77fc[46];
  } else {
    /** @type {number} */
    (container = this[_0x77fc[700]][this[_0x77fc[704]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = .91;
    container[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2723];
    container[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2672];
    container[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2667];
    container[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1687];
  }
  var container = this[_0x77fc[700]][this[_0x77fc[704]]];
  var color1hsl = canCreateDiscussions[_0x77fc[1011]](canCreateDiscussions[_0x77fc[113]]);
  var color3hsl = document[_0x77fc[383]](_0x77fc[660]);
  var data = document[_0x77fc[383]](_0x77fc[660]);
  color3hsl[_0x77fc[419]] = color1hsl[_0x77fc[1020]];
  color3hsl[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2724];
  color3hsl[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2675];
  color3hsl[_0x77fc[173]][_0x77fc[467]] = color1hsl[_0x77fc[467]];
  data[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2677];
  data[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2670];
  if (canCreateDiscussions[_0x77fc[155]][_0x77fc[422]]) {
    data[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
    data[_0x77fc[419]] = i18n[_0x77fc[2725]];
  } else {
    data[_0x77fc[173]][_0x77fc[467]] = _0x77fc[1016];
    data[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1687];
    data[_0x77fc[419]] = i18n[_0x77fc[2726]];
  }
  container[_0x77fc[387]](color3hsl);
  container[_0x77fc[387]](data);
}, GameCaption[_0x77fc[170]][_0x77fc[1223]] = function(canCreateDiscussions) {
  if (!(this[_0x77fc[704]] in this[_0x77fc[700]]) || _0x77fc[174] !== this[_0x77fc[700]][this[_0x77fc[704]]][_0x77fc[173]][_0x77fc[172]]) {
    if (this[_0x77fc[705]] in this[_0x77fc[700]]) {
      this[_0x77fc[700]][this[_0x77fc[705]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
    } else {
      (CustomTests = this[_0x77fc[700]][this[_0x77fc[705]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2727];
      CustomTests[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2672];
      CustomTests[_0x77fc[173]][_0x77fc[1877]] = _0x77fc[2028];
      CustomTests[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1687];
      CustomTests[_0x77fc[386]][_0x77fc[385]](_0x77fc[2692]);
      var emoticonI18n = document[_0x77fc[383]](_0x77fc[660]);
      emoticonI18n[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2681];
      emoticonI18n[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[1191];
      emoticonI18n[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
      emoticonI18n[_0x77fc[419]] = i18n[_0x77fc[2728]];
      CustomTests[_0x77fc[387]](emoticonI18n);
      var element = document[_0x77fc[383]](_0x77fc[660]);
      element[_0x77fc[312]] = _0x77fc[2729];
      element[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2677];
      element[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2670];
      element[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
      element[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1710];
      CustomTests[_0x77fc[387]](element);
    }
    var CustomTests;
    (CustomTests = this[_0x77fc[700]][this[_0x77fc[705]]])[_0x77fc[1506]](_0x77fc[660])[1][_0x77fc[604]] = i18n[_0x77fc[2730]] + _0x77fc[2731] + canCreateDiscussions[_0x77fc[1170]](1) + _0x77fc[2732];
    if (this[_0x77fc[715]]) {
      window[_0x77fc[1084]](this[_0x77fc[715]]);
    }
    this._fadeOut(CustomTests, 300);
  }
}, GameCaption[_0x77fc[170]][_0x77fc[2733]] = function(canCreateDiscussions, e, isSlidingUp, dontForceConstraints) {
  if (void 0 === isSlidingUp) {
    /** @type {null} */
    isSlidingUp = null;
  }
  if (void 0 === dontForceConstraints) {
    /** @type {number} */
    dontForceConstraints = 1;
  }
  canCreateDiscussions[_0x77fc[386]][_0x77fc[1472]](_0x77fc[2692]);
  canCreateDiscussions[_0x77fc[386]][_0x77fc[385]](_0x77fc[2734]);
  canCreateDiscussions[_0x77fc[173]][_0x77fc[2678]] = dontForceConstraints;
  var _0xe1a7x13 = this;
  this[_0x77fc[715]] = window[_0x77fc[1083]](function() {
    canCreateDiscussions[_0x77fc[386]][_0x77fc[1472]](_0x77fc[2734]);
    canCreateDiscussions[_0x77fc[386]][_0x77fc[385]](_0x77fc[2692]);
    if (null !== isSlidingUp) {
      canCreateDiscussions[_0x77fc[173]][_0x77fc[2735]] = _0x77fc[2736] + isSlidingUp + _0x77fc[2737];
    }
    /** @type {number} */
    canCreateDiscussions[_0x77fc[173]][_0x77fc[2678]] = 0;
    /** @type {null} */
    _0xe1a7x13[_0x77fc[715]] = null;
  }, e);
}, GameCaption[_0x77fc[170]][_0x77fc[2112]] = function(canCreateDiscussions) {
  if (this[_0x77fc[997]](), this[_0x77fc[707]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[707]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    /** @type {number} */
    (window = this[_0x77fc[700]][this[_0x77fc[707]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = 1;
    window[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2723];
    window[_0x77fc[173]][_0x77fc[2738]] = _0x77fc[2675];
    window[_0x77fc[386]][_0x77fc[385]](_0x77fc[2692]);
    var processEvaluatorsCallback = document[_0x77fc[383]](_0x77fc[660]);
    processEvaluatorsCallback[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2376];
    processEvaluatorsCallback[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1687];
    processEvaluatorsCallback[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2739];
    window[_0x77fc[387]](processEvaluatorsCallback);
    var universalSendCommand = document[_0x77fc[383]](_0x77fc[660]);
    universalSendCommand[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2681];
    universalSendCommand[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2688];
    universalSendCommand[_0x77fc[173]][_0x77fc[467]] = _0x77fc[1016];
    universalSendCommand[_0x77fc[419]] = i18n[_0x77fc[2112]];
    window[_0x77fc[387]](universalSendCommand);
    var srcToEval = document[_0x77fc[383]](_0x77fc[660]);
    srcToEval[_0x77fc[312]] = _0x77fc[2729];
    srcToEval[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2677];
    srcToEval[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2740];
    srcToEval[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
    srcToEval[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1710];
    window[_0x77fc[387]](srcToEval);
    var _renderTimer = document[_0x77fc[383]](_0x77fc[660]);
    _renderTimer[_0x77fc[1779]] = _0x77fc[2664];
    let _0xe1a7x4 = _renderTimer[_0x77fc[173]];
    _0xe1a7x4[_0x77fc[186]] = _0x77fc[2741];
    _0xe1a7x4[_0x77fc[1190]] = _0x77fc[2741];
    _0xe1a7x4[_0x77fc[2678]] = _0x77fc[526];
    _0xe1a7x4[_0x77fc[2628]] = _0x77fc[2742];
    _0xe1a7x4[_0x77fc[2743]] = _0x77fc[2675];
    _0xe1a7x4[_0x77fc[467]] = _0x77fc[1261];
    window[_0x77fc[387]](_renderTimer);
  }
  var window = this[_0x77fc[700]][this[_0x77fc[707]]];
  if (true === canCreateDiscussions) {
    window[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2744];
    window[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2723];
    window[_0x77fc[1506]](_0x77fc[660])[2][_0x77fc[419]] = i18n[_0x77fc[2745]];
    hideElem(window[_0x77fc[1506]](_0x77fc[660])[0]);
    hideElem(window[_0x77fc[1506]](_0x77fc[660])[3]);
  } else {
    if (canCreateDiscussions) {
      window[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2746];
      window[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2747];
      window[_0x77fc[1506]](_0x77fc[660])[0][_0x77fc[604]] = canCreateDiscussions[_0x77fc[2748]];
      let data = {
        prevPB : _0x77fc[1815] + canCreateDiscussions[_0x77fc[2749]] + _0x77fc[1210],
        prevAgo : _0x77fc[1815] + canCreateDiscussions[_0x77fc[2750]] + _0x77fc[1555] + i18n[_0x77fc[2751]] + _0x77fc[1210],
        PBdiff : _0x77fc[1815] + canCreateDiscussions[_0x77fc[2752]] + _0x77fc[1210]
      };
      window[_0x77fc[1506]](_0x77fc[660])[2][_0x77fc[604]] = trans(i18n[_0x77fc[2753]], data);
      window[_0x77fc[1506]](_0x77fc[660])[3][_0x77fc[604]] = canCreateDiscussions[_0x77fc[2108]];
      showElem(window[_0x77fc[1506]](_0x77fc[660])[0]);
      showElem(window[_0x77fc[1506]](_0x77fc[660])[3]);
    }
  }
}, GameCaption[_0x77fc[170]][_0x77fc[461]] = function(value, isSlidingUp) {
  var cookiesToString;
  if (this[_0x77fc[997]](), this[_0x77fc[708]] in this[_0x77fc[700]]) {
    this[_0x77fc[700]][this[_0x77fc[708]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
  } else {
    /** @type {number} */
    (cookiesToString = this[_0x77fc[700]][this[_0x77fc[708]]] = this[_0x77fc[171]]())[_0x77fc[173]][_0x77fc[2678]] = 1;
    cookiesToString[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2754];
    cookiesToString[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2755];
    cookiesToString[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
  }
  (cookiesToString = this[_0x77fc[700]][this[_0x77fc[708]]])[_0x77fc[419]] = _0x77fc[46];
  var data = document[_0x77fc[383]](_0x77fc[2374]);
  if (isSlidingUp) {
    if (1 === isSlidingUp) {
      data[_0x77fc[38]] = CDN_URL(_0x77fc[2756]);
    } else {
      if (2 === isSlidingUp) {
        data[_0x77fc[38]] = CDN_URL(_0x77fc[2757]);
      }
    }
  } else {
    data[_0x77fc[38]] = CDN_URL(_0x77fc[2375]);
  }
  data[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2269];
  data[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[1191];
  cookiesToString[_0x77fc[387]](data);
  var cookies = document[_0x77fc[383]](_0x77fc[660]);
  cookies[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2669];
  cookies[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2758];
  cookies[_0x77fc[604]] = value;
  cookiesToString[_0x77fc[387]](cookies);
}, GameCaption[_0x77fc[170]][_0x77fc[1781]] = function() {
  if (this[_0x77fc[709]] in this[_0x77fc[700]]) {
    return this[_0x77fc[700]][this[_0x77fc[709]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174], void this._fadeOut(this[_0x77fc[700]][this[_0x77fc[709]]], 5E3, 3, .85);
  }
  var CustomTests = this[_0x77fc[700]][this[_0x77fc[709]]] = this[_0x77fc[171]]();
  CustomTests[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2759];
  CustomTests[_0x77fc[173]][_0x77fc[952]] = _0x77fc[2760];
  CustomTests[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2667];
  var emoticonI18n = document[_0x77fc[383]](_0x77fc[660]);
  var element = document[_0x77fc[383]](_0x77fc[660]);
  emoticonI18n[_0x77fc[419]] = i18n[_0x77fc[2761]];
  emoticonI18n[_0x77fc[173]][_0x77fc[467]] = _0x77fc[1016];
  emoticonI18n[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2687];
  emoticonI18n[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2688];
  element[_0x77fc[419]] = i18n[_0x77fc[2762]];
  element[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2740];
  element[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2712];
  CustomTests[_0x77fc[387]](emoticonI18n);
  CustomTests[_0x77fc[387]](element);
  this._fadeOut(CustomTests, 5E3, 3, .85);
}, GameCaption[_0x77fc[170]][_0x77fc[1220]] = function(tpl, name, items) {
  /** @type {number} */
  var item = 3E3;
  if (items && items[_0x77fc[2763]] && (item = items[_0x77fc[2763]]), void 0 === name && (name = _0x77fc[46]), this[_0x77fc[710]] in this[_0x77fc[700]]) {
    return this[_0x77fc[700]][this[_0x77fc[710]]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174], this[_0x77fc[700]][this[_0x77fc[710]]][_0x77fc[1506]](_0x77fc[660])[0][_0x77fc[604]] = tpl, this[_0x77fc[700]][this[_0x77fc[710]]][_0x77fc[1506]](_0x77fc[660])[1][_0x77fc[604]] = name, void this._fadeOut(this[_0x77fc[700]][this[_0x77fc[710]]], item, 2, .85);
  }
  var container = this[_0x77fc[700]][this[_0x77fc[710]]] = this[_0x77fc[171]]();
  container[_0x77fc[173]][_0x77fc[2379]] = _0x77fc[2727];
  container[_0x77fc[173]][_0x77fc[2743]] = _0x77fc[1191];
  container[_0x77fc[173]][_0x77fc[1877]] = _0x77fc[2028];
  container[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1687];
  container[_0x77fc[386]][_0x77fc[385]](_0x77fc[2692]);
  var c = document[_0x77fc[383]](_0x77fc[660]);
  c[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2681];
  c[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[1191];
  c[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
  c[_0x77fc[604]] = tpl;
  container[_0x77fc[387]](c);
  var data = document[_0x77fc[383]](_0x77fc[660]);
  data[_0x77fc[312]] = _0x77fc[2729];
  data[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2677];
  data[_0x77fc[173]][_0x77fc[1190]] = _0x77fc[2670];
  data[_0x77fc[173]][_0x77fc[467]] = _0x77fc[285];
  data[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1710];
  data[_0x77fc[173]][_0x77fc[2764]] = _0x77fc[2765];
  data[_0x77fc[604]] = name;
  container[_0x77fc[387]](data);
  this._fadeOut(container, item, 2, .85);
}, Mobile[_0x77fc[170]][_0x77fc[716]] = function() {
  let _0xe1a7x4 = localStorage[_0x77fc[1941]](_0x77fc[2437]);
  return null !== _0xe1a7x4 ? _0x77fc[2766] !== _0xe1a7x4 && _0xe1a7x4 : this[_0x77fc[2436]]();
}, Mobile[_0x77fc[170]][_0x77fc[2436]] = function() {
  let artistTrack = navigator[_0x77fc[2767]] || navigator[_0x77fc[2768]] || window[_0x77fc[2769]];
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i[_0x77fc[1513]](artistTrack) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[_0x77fc[1513]](artistTrack[_0x77fc[1247]](0, 
  4));
}, Mobile[_0x77fc[170]][_0x77fc[2770]] = function() {
  document[_0x77fc[1480]](_0x77fc[2772])[_0x77fc[2621]](_0x77fc[2354], _0x77fc[2771]);
  $(_0x77fc[2773])[_0x77fc[997]]();
  $(_0x77fc[2773])[_0x77fc[2775]](_0x77fc[2774], _0x77fc[2669]);
  $(_0x77fc[2776])[_0x77fc[1229]](_0x77fc[1792], _0x77fc[1980]);
  $(_0x77fc[2778])[_0x77fc[2775]](_0x77fc[2777], _0x77fc[175]);
  $(_0x77fc[2778])[_0x77fc[2775]](_0x77fc[2779], _0x77fc[580]);
  $(_0x77fc[2778])[_0x77fc[2775]](_0x77fc[2774], _0x77fc[580]);
  $(_0x77fc[2780])[_0x77fc[2775]](_0x77fc[388], _0x77fc[580]);
  $(_0x77fc[2781])[_0x77fc[2775]](_0x77fc[2764], _0x77fc[525]);
  $(_0x77fc[2783])[_0x77fc[2775]](_0x77fc[388], _0x77fc[2782]);
  $(_0x77fc[2785])[_0x77fc[2775]](_0x77fc[2784], _0x77fc[525]);
  $(_0x77fc[2780])[_0x77fc[2775]](_0x77fc[2786], _0x77fc[2787]);
  $(_0x77fc[2789])[_0x77fc[2775]](_0x77fc[2788], _0x77fc[2787]);
  $(_0x77fc[2792])[_0x77fc[1942]](_0x77fc[2791])[_0x77fc[2790]]();
  $(_0x77fc[2793])[_0x77fc[699]]()[_0x77fc[699]]()[_0x77fc[2790]]();
  $(_0x77fc[2794])[_0x77fc[699]]()[_0x77fc[699]]()[_0x77fc[2790]]();
  $(_0x77fc[2796])[_0x77fc[2795]](_0x77fc[621], true);
  $(_0x77fc[2793])[_0x77fc[2795]](_0x77fc[621], true);
  $(_0x77fc[2794])[_0x77fc[2795]](_0x77fc[621], false);
  $(_0x77fc[2799])[_0x77fc[2775]](_0x77fc[2797], _0x77fc[2798]);
}, Mobile[_0x77fc[170]][_0x77fc[719]] = function() {
  /**
   * @param {?} name
   * @return {undefined}
   */
  function resolve(name) {
    if (!_0xe1a7x4[_0x77fc[718]]) {
      name[_0x77fc[1059]]();
      name[_0x77fc[1078]]();
    }
  }
  /**
   * @param {?} fileData
   * @return {undefined}
   */
  function getFileJSON(fileData) {
    if (!_0xe1a7x4[_0x77fc[718]]) {
      fileData[_0x77fc[1059]]();
      fileData[_0x77fc[1078]]();
    }
  }
  /**
   * @param {?} outFile
   * @return {undefined}
   */
  function concatenateSourceMaps(outFile) {
    if (!_0xe1a7x4[_0x77fc[718]]) {
      outFile[_0x77fc[1059]]();
      outFile[_0x77fc[1078]]();
    }
  }
  /**
   * @param {?} width
   * @return {undefined}
   */
  function justinImageSize(width) {
    resolve(width);
    width[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1070]];
    this[_0x77fc[338]][_0x77fc[1055]](width);
    this[_0x77fc[338]][_0x77fc[78]] = false;
  }
  /**
   * @return {undefined}
   */
  function _insert_template() {
    $(_0x77fc[2773])[_0x77fc[2790]]();
    $(_0x77fc[2778])[_0x77fc[997]]();
    $(_0x77fc[2800])[_0x77fc[997]]();
    $(_0x77fc[2776])[_0x77fc[2783]](_0x77fc[2801]);
    $(_0x77fc[2776])[_0x77fc[1942]](_0x77fc[2802]);
    $(_0x77fc[2785])[_0x77fc[2775]](_0x77fc[2784], _0x77fc[2669]);
  }
  /**
   * @return {undefined}
   */
  function clearCut() {
    $(_0x77fc[2773])[_0x77fc[997]]();
    $(_0x77fc[2800])[_0x77fc[2790]]();
    $(_0x77fc[2778])[_0x77fc[2790]]();
    $(_0x77fc[2776])[_0x77fc[2783]](_0x77fc[1728]);
    $(_0x77fc[2776])[_0x77fc[2803]](_0x77fc[2802]);
    $(_0x77fc[2785])[_0x77fc[2775]](_0x77fc[2784], _0x77fc[2804]);
  }
  var _0xe1a7x4 = this;
  this[_0x77fc[2770]]();
  $(_0x77fc[2793])[_0x77fc[477]](_0x77fc[1228], function() {
    if ($(_0x77fc[2793])[_0x77fc[2795]](_0x77fc[621])) {
      $(_0x77fc[2792])[_0x77fc[2790]]();
      $(_0x77fc[2794])[_0x77fc[699]]()[_0x77fc[699]]()[_0x77fc[2790]]();
    } else {
      $(_0x77fc[2792])[_0x77fc[997]]();
      $(_0x77fc[2794])[_0x77fc[699]]()[_0x77fc[699]]()[_0x77fc[997]]();
    }
  }[_0x77fc[430]](this));
  $(_0x77fc[2805])[_0x77fc[477]](_0x77fc[1228], function() {
    if (this[_0x77fc[338]][_0x77fc[155]][_0x77fc[336]] || 0 === this[_0x77fc[338]][_0x77fc[155]][_0x77fc[349]][_0x77fc[237]]) {
      this[_0x77fc[338]][_0x77fc[967]](this[_0x77fc[338]][_0x77fc[57]]);
    }
  }[_0x77fc[430]](this));
  $(_0x77fc[2776])[_0x77fc[477]](_0x77fc[1228], clearCut[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[1463])[_0x77fc[1322]](_0x77fc[1228], function() {
    _insert_template();
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[380])[_0x77fc[1322]](_0x77fc[1228], function() {
    clearCut();
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2179])[_0x77fc[1322]](_0x77fc[2480], function(modesFolder) {
    resolve(modesFolder);
    modesFolder[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[857]];
    this[_0x77fc[338]][_0x77fc[1055]](modesFolder);
    this[_0x77fc[338]][_0x77fc[79]] = false;
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2806])[_0x77fc[1322]](_0x77fc[2480], function(fileData) {
    getFileJSON(fileData);
    fileData[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1063]];
    this[_0x77fc[338]][_0x77fc[1055]](fileData);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2806])[_0x77fc[1322]](_0x77fc[2807], function(outFile) {
    concatenateSourceMaps(outFile);
    outFile[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1063]];
    this[_0x77fc[338]][_0x77fc[1079]](outFile);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2808])[_0x77fc[1322]](_0x77fc[2480], function(fileData) {
    getFileJSON(fileData);
    fileData[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1064]];
    this[_0x77fc[338]][_0x77fc[1055]](fileData);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2808])[_0x77fc[1322]](_0x77fc[2807], function(outFile) {
    concatenateSourceMaps(outFile);
    outFile[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1064]];
    this[_0x77fc[338]][_0x77fc[1079]](outFile);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2809])[_0x77fc[1322]](_0x77fc[2480], function(fileData) {
    getFileJSON(fileData);
    fileData[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1065]];
    this[_0x77fc[338]][_0x77fc[1055]](fileData);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2809])[_0x77fc[1322]](_0x77fc[2807], function(outFile) {
    concatenateSourceMaps(outFile);
    outFile[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1065]];
    this[_0x77fc[338]][_0x77fc[1079]](outFile);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2810])[_0x77fc[1322]](_0x77fc[2480], function(modesFolder) {
    resolve(modesFolder);
    modesFolder[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1068]];
    this[_0x77fc[338]][_0x77fc[1055]](modesFolder);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2811])[_0x77fc[1322]](_0x77fc[2480], function(modesFolder) {
    resolve(modesFolder);
    modesFolder[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1066]];
    this[_0x77fc[338]][_0x77fc[1055]](modesFolder);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2812])[_0x77fc[1322]](_0x77fc[2480], function(modesFolder) {
    resolve(modesFolder);
    modesFolder[_0x77fc[1056]] = this[_0x77fc[150]][_0x77fc[1069]];
    this[_0x77fc[338]][_0x77fc[1055]](modesFolder);
  }[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2813])[_0x77fc[1322]](_0x77fc[2480], justinImageSize[_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[4])[_0x77fc[1322]](_0x77fc[2480], justinImageSize[_0x77fc[430]](this));
  this[_0x77fc[717]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[717]][_0x77fc[312]] = _0x77fc[2814];
  this[_0x77fc[717]][_0x77fc[1322]](_0x77fc[1228], _insert_template[_0x77fc[430]](this));
  this[_0x77fc[717]][_0x77fc[604]] = _0x77fc[2815];
  let artistTrack = document[_0x77fc[383]](_0x77fc[660]);
  artistTrack[_0x77fc[1779]] = _0x77fc[2816];
  artistTrack[_0x77fc[387]](this[_0x77fc[717]]);
  document[_0x77fc[3]](_0x77fc[154])[_0x77fc[387]](artistTrack);
  this[_0x77fc[2817]]();
}, Mobile[_0x77fc[170]][_0x77fc[2817]] = function() {
  /**
   * @param {?} data
   * @return {undefined}
   */
  function userChannelHandler(data) {
    if (!joinBy[_0x77fc[718]] || -1 === packByNumType[_0x77fc[315]](data[_0x77fc[1875]])) {
      return;
    }
    props = data[_0x77fc[1875]];
    let pivot = data[_0x77fc[1875]][_0x77fc[2826]] ? data[_0x77fc[1875]][_0x77fc[2826]] : 0;
    let mobsFirstgid = data[_0x77fc[1875]][_0x77fc[2827]] ? data[_0x77fc[1875]][_0x77fc[2827]] : 0;
    if (_0x77fc[2480] === data[_0x77fc[463]]) {
      data[_0x77fc[1875]][_0x77fc[2828]] = data[_0x77fc[2515]][0][_0x77fc[2829]] - pivot;
      data[_0x77fc[1875]][_0x77fc[2830]] = data[_0x77fc[2515]][0][_0x77fc[2378]] - mobsFirstgid;
    } else {
      data[_0x77fc[1875]][_0x77fc[2828]] = data[_0x77fc[2829]] - pivot;
      data[_0x77fc[1875]][_0x77fc[2830]] = data[_0x77fc[2378]] - mobsFirstgid;
    }
  }
  /**
   * @param {?} second
   * @return {undefined}
   */
  function yAxisHeadersSort(second) {
    if (!joinBy[_0x77fc[718]] || !props) {
      return;
    }
    props[_0x77fc[2828]] = forum;
    props[_0x77fc[2830]] = courseId;
    let datum = forum[_0x77fc[1170]](2) + _0x77fc[1503] + courseId[_0x77fc[1170]](2);
    localStorage[_0x77fc[1940]](props[_0x77fc[312]], datum);
    props = false;
  }
  /**
   * @param {?} includeExt
   * @return {undefined}
   */
  function base(includeExt) {
    if (joinBy[_0x77fc[718]] && props) {
      includeExt[_0x77fc[1059]]();
      if (_0x77fc[2831] === includeExt[_0x77fc[463]]) {
        forum = includeExt[_0x77fc[2515]][0][_0x77fc[2829]] - props[_0x77fc[2828]];
        courseId = includeExt[_0x77fc[2515]][0][_0x77fc[2378]] - props[_0x77fc[2830]];
      } else {
        forum = includeExt[_0x77fc[2829]] - props[_0x77fc[2828]];
        courseId = includeExt[_0x77fc[2378]] - props[_0x77fc[2830]];
      }
      props[_0x77fc[2826]] = forum;
      props[_0x77fc[2827]] = courseId;
      prefetchGroupsInfo(forum, courseId, props);
    }
  }
  /**
   * @param {?} forum
   * @param {?} courseId
   * @param {?} options
   * @return {undefined}
   */
  function prefetchGroupsInfo(forum, courseId, options) {
    options[_0x77fc[173]][_0x77fc[2832]] = _0x77fc[2833] + forum + _0x77fc[2834] + courseId + _0x77fc[2835];
  }
  var forum;
  var courseId;
  /** @type {!Array} */
  var packByNumType = [document[_0x77fc[1480]](_0x77fc[2818]), document[_0x77fc[1480]](_0x77fc[2819]), document[_0x77fc[1480]](_0x77fc[2820]), document[_0x77fc[1480]](_0x77fc[2821]), document[_0x77fc[1480]](_0x77fc[2822]), document[_0x77fc[1480]](_0x77fc[2823]), document[_0x77fc[1480]](_0x77fc[2824]), document[_0x77fc[1480]](_0x77fc[2825]), this[_0x77fc[717]]];
  var MajorityMethods = document[_0x77fc[1480]](_0x77fc[2799]);
  var props = false;
  var joinBy = this;
  packByNumType[_0x77fc[1097]]((Module) => {
    let _0xe1a7x7 = localStorage[_0x77fc[1941]](Module[_0x77fc[312]]);
    if (null !== _0xe1a7x7) {
      let rDefs = _0xe1a7x7[_0x77fc[1514]](_0x77fc[1503], 2);
      Module[_0x77fc[2826]] = parseFloat(rDefs[0]);
      Module[_0x77fc[2827]] = parseFloat(rDefs[1]);
      prefetchGroupsInfo(Module[_0x77fc[2826]], Module[_0x77fc[2827]], Module);
    }
  });
  $(_0x77fc[2794])[_0x77fc[477]](_0x77fc[1228], function() {
    joinBy[_0x77fc[718]] = $(_0x77fc[2794])[_0x77fc[2795]](_0x77fc[621]);
  });
  MajorityMethods[_0x77fc[1322]](_0x77fc[2480], userChannelHandler, false);
  MajorityMethods[_0x77fc[1322]](_0x77fc[2807], yAxisHeadersSort, false);
  MajorityMethods[_0x77fc[1322]](_0x77fc[2831], base, false);
  MajorityMethods[_0x77fc[1322]](_0x77fc[2836], userChannelHandler, false);
  MajorityMethods[_0x77fc[1322]](_0x77fc[2837], yAxisHeadersSort, false);
  MajorityMethods[_0x77fc[1322]](_0x77fc[2838], base, false);
}, Replay[_0x77fc[170]][_0x77fc[385]] = function(mmCoreSplitViewBlock) {
  if (this[_0x77fc[733]]) {
    this[_0x77fc[734]][_0x77fc[308]](mmCoreSplitViewBlock);
  } else {
    if (!(mmCoreSplitViewBlock[_0x77fc[720]] === this[_0x77fc[721]][_0x77fc[1150]] && this[_0x77fc[729]][_0x77fc[237]] && this[_0x77fc[729]][this[_0x77fc[729]][_0x77fc[237]] - 1][_0x77fc[720]] === mmCoreSplitViewBlock[_0x77fc[720]] || mmCoreSplitViewBlock[_0x77fc[720]] === this[_0x77fc[721]][_0x77fc[1151]] && this[_0x77fc[729]][_0x77fc[237]] && this[_0x77fc[729]][this[_0x77fc[729]][_0x77fc[237]] - 1][_0x77fc[720]] === mmCoreSplitViewBlock[_0x77fc[720]])) {
      mmCoreSplitViewBlock[_0x77fc[180]] -= this[_0x77fc[728]][_0x77fc[1040]];
      if (1 === this[_0x77fc[732]]) {
        /** @type {number} */
        mmCoreSplitViewBlock[_0x77fc[180]] = 0;
      }
      this[_0x77fc[729]][_0x77fc[308]](mmCoreSplitViewBlock);
      if (this[_0x77fc[737]]) {
        this[_0x77fc[737]](mmCoreSplitViewBlock);
      }
    }
  }
}, Replay[_0x77fc[170]][_0x77fc[1003]] = function() {
  /** @type {number} */
  this[_0x77fc[729]][_0x77fc[237]] = 0;
  /** @type {number} */
  this[_0x77fc[732]] = 0;
  this[_0x77fc[733]] = false;
  /** @type {!Array} */
  this[_0x77fc[734]] = [];
  this[_0x77fc[730]] = _0x77fc[46];
  this[_0x77fc[731]] = _0x77fc[46];
  this[_0x77fc[728]][_0x77fc[732]] = void 0;
  if (_0x77fc[1205] in this[_0x77fc[728]]) {
    delete this[_0x77fc[728]][_0x77fc[1205]];
  }
  if (_0x77fc[1041] in this[_0x77fc[728]]) {
    delete this[_0x77fc[728]][_0x77fc[1041]];
  }
  if (_0x77fc[305] in this[_0x77fc[728]]) {
    delete this[_0x77fc[728]][_0x77fc[305]];
  }
}, Replay[_0x77fc[170]][_0x77fc[1051]] = function(isSlidingUp, i) {
  if (isSlidingUp) {
    this[_0x77fc[733]] = true;
  } else {
    this[_0x77fc[733]] = false;
    for (let uniqueLinks of this[_0x77fc[734]]) {
      uniqueLinks[_0x77fc[180]] = i;
      this[_0x77fc[385]](uniqueLinks);
    }
    /** @type {!Array} */
    this[_0x77fc[734]] = [];
  }
}, Replay[_0x77fc[170]][_0x77fc[1823]] = function() {
  if (-1 === this[_0x77fc[732]]) {
    return _0x77fc[46];
  }
  var data = new Object;
  data[_0x77fc[853]] = this[_0x77fc[2839]]();
  data[_0x77fc[944]] = this[_0x77fc[728]];
  var newPolyfill = LZString[_0x77fc[2840]](JSON[_0x77fc[1520]](data));
  return this[_0x77fc[730]] = newPolyfill, this[_0x77fc[731]] = md5(newPolyfill), this[_0x77fc[731]];
}, Replay[_0x77fc[170]][_0x77fc[2841]] = function() {
  if (32 - this[_0x77fc[735]][_0x77fc[744]] >= 12) {
    this[_0x77fc[735]][_0x77fc[2079]](4095, 12);
  }
}, Replay[_0x77fc[170]][_0x77fc[2839]] = function() {
  this[_0x77fc[735]] = new ReplayStream;
  var start;
  /** @type {null} */
  var _0xe1a7x7 = null;
  var addressCount = this[_0x77fc[729]][_0x77fc[237]];
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var end = 4094;
  /** @type {number} */
  var iAddressLoop = 0;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    if (null !== _0xe1a7x7 && _0xe1a7x7 > this[_0x77fc[729]][iAddressLoop][_0x77fc[180]]) {
      let _0xe1a7x4 = _0xe1a7x7 - this[_0x77fc[729]][iAddressLoop][_0x77fc[180]];
      this[_0x77fc[729]][iAddressLoop][_0x77fc[180]] = _0xe1a7x7;
      if (_0xe1a7x4 > 10) {
        this[_0x77fc[728]][_0x77fc[1807]] |= 1;
      }
    }
    if (_0xe1a7x7 = this[_0x77fc[729]][iAddressLoop][_0x77fc[180]], (start = this[_0x77fc[729]][iAddressLoop][_0x77fc[180]] - i * end) > end && (start = start - end, i++), start < 0 && (this[_0x77fc[728]][_0x77fc[1807]] |= 1, start = 0), start > end && (this[_0x77fc[728]][_0x77fc[1807]] |= 2, start = end), this[_0x77fc[735]][_0x77fc[2079]](start, 12), this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[720]], 4), void 0 !== this[_0x77fc[724]][this[_0x77fc[729]][iAddressLoop][_0x77fc[720]]]) {
      var PL$13 = this[_0x77fc[724]][this[_0x77fc[729]][iAddressLoop][_0x77fc[720]]];
      /** @type {number} */
      var PL$17 = 0;
      for (; PL$17 < PL$13[_0x77fc[237]]; PL$17++) {
        this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][PL$17], PL$13[PL$17]);
      }
      if (this[_0x77fc[729]][iAddressLoop][_0x77fc[720]] === this[_0x77fc[721]][_0x77fc[723]]) {
        if (this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][0] === this[_0x77fc[723]][_0x77fc[1206]]) {
          this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][1], 16);
          i = i + (this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][1] / end >>> 0);
        } else {
          if (this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][0] === this[_0x77fc[723]][_0x77fc[1101]]) {
            this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][1], 1);
            this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][2], 4);
          } else {
            if (this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][0] === this[_0x77fc[723]][_0x77fc[1161]]) {
              let artistTrack = this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][1] + 3;
              let GET_AUTH_URL_TIMEOUT = this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][2] + 12;
              if (artistTrack < 0 || artistTrack > 15 || GET_AUTH_URL_TIMEOUT < 0 || GET_AUTH_URL_TIMEOUT > 31) {
                this[_0x77fc[728]][_0x77fc[1807]] |= 16;
              }
              this[_0x77fc[735]][_0x77fc[2079]](artistTrack, 4);
              this[_0x77fc[735]][_0x77fc[2079]](GET_AUTH_URL_TIMEOUT, 5);
            } else {
              if (this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][0] === this[_0x77fc[723]][_0x77fc[2014]]) {
                this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][1], 1);
                this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][2], 5);
              } else {
                if (this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][0] === this[_0x77fc[723]][_0x77fc[2015]]) {
                  this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][1], 4);
                  this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][2], 5);
                } else {
                  if (this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][0] === this[_0x77fc[723]][_0x77fc[1182]]) {
                    this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][1], 5);
                    this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][2], 4);
                    this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][3], 3);
                    this[_0x77fc[735]][_0x77fc[2079]](this[_0x77fc[729]][iAddressLoop][_0x77fc[853]][4], 1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return this[_0x77fc[2841]](), _arrayBufferToBase64((new Uint32Array(this[_0x77fc[735]][_0x77fc[600]]))[_0x77fc[1346]]);
}, Replay[_0x77fc[170]][_0x77fc[2136]] = function(canCreateDiscussions) {
  if (void 0 === canCreateDiscussions) {
    canCreateDiscussions = true;
  }
  var n = this[_0x77fc[729]][this[_0x77fc[729]][_0x77fc[237]] - 1][_0x77fc[180]];
  return canCreateDiscussions || void 0 !== this[_0x77fc[728]][_0x77fc[1205]] && (n = n - this[_0x77fc[728]][_0x77fc[1205]]), Math[_0x77fc[1196]](n) / 1E3;
}, Replay[_0x77fc[170]][_0x77fc[1802]] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  if (-1 !== this[_0x77fc[732]]) {
    var scope = document[_0x77fc[2468]][_0x77fc[1480]](_0x77fc[2467])[_0x77fc[2354]];
    var directiveProcessors = new XMLHttpRequest;
    var $node = _0x77fc[2842] + canCreateDiscussions + _0x77fc[2843] + isSlidingUp + _0x77fc[2844] + encodeURIComponent(this[_0x77fc[730]]);
    /** @type {number} */
    directiveProcessors[_0x77fc[2408]] = 6E3;
    directiveProcessors[_0x77fc[1549]](_0x77fc[2470], _0x77fc[2845], true);
    directiveProcessors[_0x77fc[1552]](_0x77fc[1550], _0x77fc[1551]);
    directiveProcessors[_0x77fc[1552]](_0x77fc[2472], scope);
    directiveProcessors[_0x77fc[1552]](_0x77fc[2410], _0x77fc[2411]);
    directiveProcessors[_0x77fc[1522]]($node);
  } else {
    this[_0x77fc[1003]]();
  }
}, Replay[_0x77fc[170]][_0x77fc[2846]] = function(manifest) {
  if (manifest[_0x77fc[1168]](_0x77fc[2847])) {
    return manifest[_0x77fc[2847]];
  }
  {
    let data = GameCore.toString() + _0x77fc[1959] + Game.toString() + _0x77fc[1959] + Live.toString();
    manifest[_0x77fc[2847]] = md5(data);
  }
  return manifest[_0x77fc[2847]][_0x77fc[1247]](0, 16);
}, Replay[_0x77fc[170]][_0x77fc[1805]] = function(canCreateDiscussions, data) {
  var url = document[_0x77fc[2468]][_0x77fc[1480]](_0x77fc[2467])[_0x77fc[2354]];
  var xhr = new XMLHttpRequest;
  var mime = _0x77fc[2848] + canCreateDiscussions + _0x77fc[2844] + encodeURIComponent(this[_0x77fc[730]]) + _0x77fc[2849] + this[_0x77fc[2846]](data);
  /** @type {number} */
  xhr[_0x77fc[2408]] = 1E4;
  xhr[_0x77fc[1549]](_0x77fc[2470], _0x77fc[2850], true);
  xhr[_0x77fc[1552]](_0x77fc[1550], _0x77fc[1551]);
  xhr[_0x77fc[1552]](_0x77fc[2472], url);
  xhr[_0x77fc[1552]](_0x77fc[2410], _0x77fc[2411]);
  var PL$9 = this;
  try {
    xhr[_0x77fc[1522]](mime);
  } catch (PL$10) {
    PL$9[_0x77fc[1808]](data, PL$10[_0x77fc[2851]]);
  }
  /**
   * @return {undefined}
   */
  xhr[_0x77fc[2414]] = function() {
    PL$9[_0x77fc[1808]](data, _0x77fc[2852]);
  };
  xhr[_0x77fc[2061]] = xhr[_0x77fc[2415]] = function() {
    PL$9[_0x77fc[1808]](data, _0x77fc[2853]);
  };
  /**
   * @return {undefined}
   */
  xhr[_0x77fc[2416]] = function() {
    if (200 === xhr[_0x77fc[1658]]) {
      if (_0x77fc[1521] == typeof PL$9[_0x77fc[736]]) {
        PL$9[_0x77fc[736]](JSON[_0x77fc[1546]](xhr[_0x77fc[1545]]));
      }
    } else {
      PL$9[_0x77fc[1808]](data, xhr[_0x77fc[1658]] + _0x77fc[2277] + xhr[_0x77fc[2854]]);
    }
  };
}, Replay[_0x77fc[170]][_0x77fc[1808]] = function(InkElement, isSlidingUp) {
  if (this[_0x77fc[730]]) {
    var el = _0x77fc[2855] + i18n[_0x77fc[1703]] + _0x77fc[2856] + i18n[_0x77fc[2857]] + _0x77fc[2858] + isSlidingUp + _0x77fc[2859];
    el = el + (_0x77fc[2043] + i18n[_0x77fc[2860]] + _0x77fc[1555] + i18n[_0x77fc[2861]] + _0x77fc[2047]);
    el = el + (_0x77fc[2862] + this[_0x77fc[730]] + _0x77fc[2863]);
    InkElement[_0x77fc[1817]](el);
  }
}, Replay[_0x77fc[170]][_0x77fc[1114]] = function() {
  if (!this[_0x77fc[729]][_0x77fc[237]]) {
    return false;
  }
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x77fc[729]][_0x77fc[237]]; indexLookupKey++) {
    if (this[_0x77fc[729]][indexLookupKey][_0x77fc[720]] <= this[_0x77fc[721]][_0x77fc[2864]]) {
      return true;
    }
  }
  return false;
}, ReplayStream[_0x77fc[170]][_0x77fc[2079]] = function(tileSize, fixedZoom) {
  var zoom = this[_0x77fc[745]] - this[_0x77fc[744]];
  tileSize = tileSize & (1 << fixedZoom) - 1;
  if (zoom - fixedZoom >= 0) {
    this[_0x77fc[600]][this[_0x77fc[743]]] |= tileSize << zoom - fixedZoom;
    this[_0x77fc[744]] += fixedZoom;
  } else {
    if (zoom >= 0) {
      this[_0x77fc[600]][this[_0x77fc[743]]] |= tileSize >> fixedZoom - zoom;
    } else {
      /** @type {number} */
      zoom = 0;
    }
    this[_0x77fc[744]] = fixedZoom - zoom;
    this[_0x77fc[600]][++this[_0x77fc[743]]] = tileSize << this[_0x77fc[745]] - this[_0x77fc[744]];
  }
}, ReplayStream[_0x77fc[170]][_0x77fc[2012]] = function(p) {
  if (this[_0x77fc[600]][_0x77fc[237]] === this[_0x77fc[746]]) {
    return null;
  }
  var orTmp;
  var q = this[_0x77fc[745]] - (this[_0x77fc[744]] + p);
  if (q >= 0) {
    var modulus = (1 << p) - 1 << q;
    orTmp = (this[_0x77fc[600]][this[_0x77fc[746]]] & modulus) >>> q;
    this[_0x77fc[744]] = this[_0x77fc[744]] + p;
    if (this[_0x77fc[744]] >= this[_0x77fc[745]]) {
      this[_0x77fc[744]] -= this[_0x77fc[745]];
      this[_0x77fc[746]]++;
    }
  } else {
    var r = p + q;
    var _0xe1a7x1e = (1 << r) - 1;
    var tmpa = (this[_0x77fc[600]][this[_0x77fc[746]]] & _0xe1a7x1e) << -q;
    ++this[_0x77fc[746]];
    /** @type {number} */
    this[_0x77fc[744]] = 0;
    var tmpb = this[_0x77fc[2012]](p - r);
    if (null === tmpb) {
      return null;
    }
    orTmp = tmpa | tmpb;
  }
  return orTmp;
}, RulesetManager[_0x77fc[170]][_0x77fc[2107]] = function(dirkey, value) {
  if (6 === dirkey) {
    return _0x77fc[2865] + value;
  }
  var indexLookupKey = Math[_0x77fc[314]](value / 10);
  var groupNamePrefix = 0 === indexLookupKey ? _0x77fc[46] : this[_0x77fc[769]][indexLookupKey][_0x77fc[333]];
  var bufferindex = _0x77fc[46];
  var _0xe1a7x1e = _0x77fc[46];
  value = value % 10;
  for (const cache of this[_0x77fc[779]]) {
    if (cache[_0x77fc[312]] === dirkey) {
      bufferindex = cache[_0x77fc[311]];
      for (const entry of cache[_0x77fc[2866]]) {
        if (entry[_0x77fc[312]] === value) {
          _0xe1a7x1e = entry[_0x77fc[2867]] ? entry[_0x77fc[2867]] : entry[_0x77fc[311]];
        }
      }
    }
  }
  return groupNamePrefix + _0x77fc[1555] + bufferindex + _0x77fc[1555] + _0xe1a7x1e;
}, RulesetManager[_0x77fc[170]][_0x77fc[970]] = function(b, a) {
  a = parseInt(a);
  let uly_lb = Number[_0x77fc[1458]];
  if (0 === this[_0x77fc[749]] && (6 === b || 9 === b)) {
    return true;
  }
  for (const n_bb of this[_0x77fc[779]]) {
    let guard = Number[_0x77fc[1458]];
    let hasAnswered = 0;
    for (const curColHeights of n_bb[_0x77fc[2866]]) {
      let _0xe1a7x1f = -1 !== curColHeights[_0x77fc[2868]][_0x77fc[315]](this[_0x77fc[749]]);
      if (n_bb[_0x77fc[312]] === b && curColHeights[_0x77fc[312]] === a && _0xe1a7x1f) {
        return;
      }
      if (_0xe1a7x1f) {
        hasAnswered++;
        if (curColHeights[_0x77fc[312]] < guard) {
          guard = curColHeights[_0x77fc[312]];
        }
      }
    }
    if (hasAnswered && n_bb[_0x77fc[312]] < uly_lb && (uly_lb = n_bb[_0x77fc[312]]), n_bb[_0x77fc[312]] === b && hasAnswered) {
      return void(this[_0x77fc[338]][_0x77fc[58]] = guard);
    }
  }
  this[_0x77fc[338]][_0x77fc[55]] = uly_lb;
  this[_0x77fc[149]](this[_0x77fc[338]][_0x77fc[55]]);
  this[_0x77fc[970]](this[_0x77fc[338]][_0x77fc[55]], -1);
}, RulesetManager[_0x77fc[170]][_0x77fc[149]] = function(pbPlayer) {
  let dataType = null;
  let dM = null;
  let data = this[_0x77fc[338]];
  for (const pbPlayerInstances of this[_0x77fc[779]]) {
    if (pbPlayerInstances[_0x77fc[312]] === pbPlayer) {
      dataType = pbPlayerInstances[_0x77fc[202]];
      dM = pbPlayerInstances[_0x77fc[311]];
      break;
    }
  }
  if (!dataType) {
    return;
  }
  let esInflections = this[_0x77fc[747]][_0x77fc[592]](_0x77fc[2869]);
  let value = null;
  /** @type {number} */
  var i = 0;
  for (; esInflections[_0x77fc[237]]; i++) {
    value = esInflections[i];
    esInflections[i][_0x77fc[2318]][_0x77fc[1340]](esInflections[i]);
  }
  if (!value) {
    value = document[_0x77fc[383]](_0x77fc[660]);
    value[_0x77fc[419]] = _0x77fc[2870];
    value[_0x77fc[1779]] = _0x77fc[2869];
  }
  dataType[_0x77fc[387]](value);
  let date = document[_0x77fc[3]](_0x77fc[2871]);
  date[_0x77fc[419]] = dM;
  date[_0x77fc[387]](value);
  date[_0x77fc[563]] = data[_0x77fc[967]][_0x77fc[430]](data, pbPlayer);
  this[_0x77fc[148]](this[_0x77fc[749]], false);
}, RulesetManager[_0x77fc[170]][_0x77fc[2872]] = function() {
  let GET_AUTH_URL_TIMEOUT = this[_0x77fc[749]];
  let questionsWithAnswers = this[_0x77fc[338]];
  for (; this[_0x77fc[747]][_0x77fc[2350]];) {
    this[_0x77fc[747]][_0x77fc[1340]](this[_0x77fc[747]][_0x77fc[2350]]);
  }
  for (const colorArray of this[_0x77fc[779]]) {
    if (!colorArray[_0x77fc[202]]) {
      let tempColorArray = colorArray[_0x77fc[202]] = document[_0x77fc[383]](_0x77fc[660]);
      tempColorArray[_0x77fc[1779]] = _0x77fc[2873];
      tempColorArray[_0x77fc[604]] = colorArray[_0x77fc[311]];
      tempColorArray[_0x77fc[1322]](_0x77fc[1228], function() {
        questionsWithAnswers[_0x77fc[967]][_0x77fc[143]](questionsWithAnswers, colorArray[_0x77fc[312]]);
      });
    }
    let deps = colorArray[_0x77fc[2866]];
    let extensionLanguages = [];
    for (const depPkgUri of deps) {
      if (-1 !== depPkgUri[_0x77fc[2868]][_0x77fc[315]](GET_AUTH_URL_TIMEOUT)) {
        extensionLanguages[_0x77fc[308]](depPkgUri);
      }
    }
    if (extensionLanguages[_0x77fc[237]] && (this[_0x77fc[747]][_0x77fc[387]](colorArray[_0x77fc[202]]), extensionLanguages[_0x77fc[237]] > 1)) {
      let CustomTests = document[_0x77fc[383]](_0x77fc[660]);
      CustomTests[_0x77fc[1779]] = _0x77fc[2874];
      for (const questions of extensionLanguages) {
        let element = document[_0x77fc[383]](_0x77fc[660]);
        element[_0x77fc[1779]] = _0x77fc[2875];
        element[_0x77fc[604]] = questions[_0x77fc[311]];
        /**
         * @return {undefined}
         */
        element[_0x77fc[563]] = function() {
          questionsWithAnswers[_0x77fc[58]] = questions[_0x77fc[312]];
          questionsWithAnswers[_0x77fc[967]][_0x77fc[143]](questionsWithAnswers, colorArray[_0x77fc[312]]);
        };
        CustomTests[_0x77fc[387]](element);
      }
      this[_0x77fc[747]][_0x77fc[387]](CustomTests);
    }
  }
}, RulesetManager[_0x77fc[170]][_0x77fc[148]] = function(last_fret, canCreateDiscussions) {
  if (void 0 === canCreateDiscussions) {
    canCreateDiscussions = true;
  }
  let _0xe1a7x8 = this[_0x77fc[769]][last_fret];
  if (_0xe1a7x8) {
    this[_0x77fc[146]](_0xe1a7x8[_0x77fc[944]], this[_0x77fc[338]][_0x77fc[145]][1]);
    this[_0x77fc[803]][_0x77fc[1991]][1][_0x77fc[419]] = _0xe1a7x8[_0x77fc[333]];
    this[_0x77fc[749]] = parseInt(last_fret);
    this[_0x77fc[2872]]();
    if (canCreateDiscussions) {
      this[_0x77fc[970]](this[_0x77fc[338]][_0x77fc[55]], this[_0x77fc[338]][_0x77fc[58]]);
    }
  }
}, RulesetManager[_0x77fc[170]][_0x77fc[2876]] = function() {
  let artistTrack = this;
  this[_0x77fc[801]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[801]][_0x77fc[386]][_0x77fc[385]](_0x77fc[2877]);
  let typeCheckers = document[_0x77fc[383]](_0x77fc[2272]);
  for (const merged of this[_0x77fc[769]]) {
    let value = document[_0x77fc[383]](_0x77fc[2274]);
    value[_0x77fc[386]][_0x77fc[385]](_0x77fc[2878]);
    let leftArgsCopy = document[_0x77fc[383]](_0x77fc[382]);
    leftArgsCopy[_0x77fc[419]] = merged[_0x77fc[333]];
    value[_0x77fc[387]](leftArgsCopy);
    let rightArgsCopy = document[_0x77fc[383]](_0x77fc[382]);
    rightArgsCopy[_0x77fc[386]][_0x77fc[385]](_0x77fc[2879]);
    rightArgsCopy[_0x77fc[419]] = merged[_0x77fc[1540]];
    value[_0x77fc[387]](rightArgsCopy);
    let data = document[_0x77fc[383]](_0x77fc[382]);
    data[_0x77fc[386]][_0x77fc[385]](_0x77fc[2880]);
    data[_0x77fc[604]] = getSVG(_0x77fc[2881] + merged[_0x77fc[2882]], _0x77fc[1898], _0x77fc[2333]);
    value[_0x77fc[387]](data);
    value[_0x77fc[1541]][_0x77fc[312]] = merged[_0x77fc[312]];
    value[_0x77fc[1322]](_0x77fc[1228], function() {
      artistTrack[_0x77fc[148]][_0x77fc[143]](artistTrack, this[_0x77fc[1541]][_0x77fc[312]]);
    });
    typeCheckers[_0x77fc[387]](value);
  }
  this[_0x77fc[801]][_0x77fc[387]](typeCheckers);
  this[_0x77fc[801]][_0x77fc[1322]](_0x77fc[2837], function() {
    return false;
  });
}, RulesetManager[_0x77fc[170]][_0x77fc[2883]] = function(canCreateDiscussions) {
  return null !== this[_0x77fc[801]] && (hideElem(this[_0x77fc[801]]), this[_0x77fc[802]] = false, true);
}, RulesetManager[_0x77fc[170]][_0x77fc[2884]] = function(mmCoreSplitViewBlock, canCreateDiscussions) {
  if (this[_0x77fc[802]]) {
    this[_0x77fc[2883]](mmCoreSplitViewBlock);
  } else {
    if (!this[_0x77fc[801]]) {
      this[_0x77fc[2876]]();
      canCreateDiscussions[_0x77fc[387]](this[_0x77fc[801]]);
    }
    showElem(this[_0x77fc[801]]);
    this[_0x77fc[802]] = true;
  }
  mmCoreSplitViewBlock[_0x77fc[1061]]();
}, RulesetManager[_0x77fc[170]][_0x77fc[805]] = function() {
  var artistTrack = this;
  this[_0x77fc[803]][_0x77fc[1322]](_0x77fc[2837], function(mmCoreSplitViewBlock) {
    artistTrack[_0x77fc[2884]][_0x77fc[143]](artistTrack, mmCoreSplitViewBlock, artistTrack[_0x77fc[803]]);
  });
  document[_0x77fc[1322]](_0x77fc[2837], function(mmCoreSplitViewBlock) {
    artistTrack[_0x77fc[2883]][_0x77fc[143]](artistTrack, mmCoreSplitViewBlock);
  });
}, RulesetManager[_0x77fc[170]][_0x77fc[2885]] = function(canCreateDiscussions) {
}, RulesetManager[_0x77fc[170]][_0x77fc[2886]] = function(canCreateDiscussions) {
  this[_0x77fc[338]][_0x77fc[230]] = this[_0x77fc[338]][_0x77fc[1130]](canCreateDiscussions[_0x77fc[305]]);
  this[_0x77fc[338]][_0x77fc[1027]](canCreateDiscussions[_0x77fc[760]]);
  this[_0x77fc[338]][_0x77fc[165]](canCreateDiscussions[_0x77fc[164]]);
  this[_0x77fc[338]][_0x77fc[163]](canCreateDiscussions[_0x77fc[92]]);
}, RulesetManager[_0x77fc[170]][_0x77fc[146]] = function(questions, questionsWithAnswers, isSlidingUp) {
  if (void 0 === isSlidingUp) {
    isSlidingUp = true;
  }
  for (const slot in this[_0x77fc[750]]) {
    let ref = this[_0x77fc[750]][slot];
    if (questions[_0x77fc[1168]](slot)) {
      questionsWithAnswers[ref] = questions[slot];
    } else {
      if (isSlidingUp) {
        questionsWithAnswers[ref] = questions[slot] = this[_0x77fc[304]][ref];
      }
    }
  }
  this[_0x77fc[2885]](questionsWithAnswers);
}, RulesetManager[_0x77fc[170]][_0x77fc[2887]] = function(self, keys, isSlidingUp) {
  if (void 0 === isSlidingUp) {
    isSlidingUp = true;
  }
  let o = {};
  for (const i in this[_0x77fc[767]]) {
    let key = this[_0x77fc[767]][i];
    let value = null;
    if (self[_0x77fc[1168]](i)) {
      value = self[i];
    } else {
      if (isSlidingUp) {
        value = self[i] = this[_0x77fc[304]][key];
      }
    }
    if (!(null === value || keys[_0x77fc[1168]](key) && keys[key] == value)) {
      keys[key] = value;
      o[key] = value;
    }
  }
  return this[_0x77fc[2885]](keys), o;
}, RulesetManager[_0x77fc[170]][_0x77fc[993]] = function(questions, questionsWithAnswers) {
  for (const slot in this[_0x77fc[750]]) {
    let slotNum = this[_0x77fc[750]][slot];
    if (questions[_0x77fc[1168]](slot)) {
      questionsWithAnswers[slotNum] = questions[slot];
    }
  }
  this[_0x77fc[2885]](questionsWithAnswers);
}, Report[_0x77fc[170]][_0x77fc[152]] = function() {
  this[_0x77fc[808]][_0x77fc[1322]](_0x77fc[1228], this[_0x77fc[2888]][_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2890])[_0x77fc[1322]](_0x77fc[1228], this[_0x77fc[2889]][_0x77fc[430]](this));
  document[_0x77fc[3]](_0x77fc[2892])[_0x77fc[1322]](_0x77fc[1228], this[_0x77fc[2891]][_0x77fc[430]](this));
  var PL$13 = document[_0x77fc[2894]][_0x77fc[2893]];
  var _0xe1a7x7 = this;
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13[_0x77fc[237]]; PL$17++) {
    PL$13[PL$17][_0x77fc[1322]](_0x77fc[2517], function() {
      if (_0x77fc[1234] == this[_0x77fc[601]]) {
        showElem(_0xe1a7x7[_0x77fc[810]]);
      } else {
        hideElem(_0xe1a7x7[_0x77fc[810]]);
      }
    });
  }
  if (!this[_0x77fc[338]][_0x77fc[155]][_0x77fc[332]]) {
    hideElem(document[_0x77fc[1480]](_0x77fc[2895]));
  }
}, Report[_0x77fc[170]][_0x77fc[2889]] = function() {
  hideElem(this[_0x77fc[806]]);
}, Report[_0x77fc[170]][_0x77fc[2891]] = function() {
  var empty = this[_0x77fc[811]][_0x77fc[601]];
  var grey = parseInt(document[_0x77fc[1480]](_0x77fc[2896])[_0x77fc[601]]);
  /** @type {null} */
  var fun_stack = null;
  if (_0x77fc[1234] != grey || _0x77fc[46] != (fun_stack = this[_0x77fc[810]][_0x77fc[601]][_0x77fc[2897]]())) {
    if (_0x77fc[46] != empty) {
      var params = {
        t : 32,
        u : empty,
        r : grey,
        s : fun_stack
      };
      this[_0x77fc[338]][_0x77fc[155]][_0x77fc[1499]](JSON[_0x77fc[1520]](params));
      this[_0x77fc[2889]]();
    } else {
      alert(_0x77fc[2898]);
    }
  } else {
    alert(_0x77fc[2899]);
  }
}, Report[_0x77fc[170]][_0x77fc[2888]] = function() {
  this[_0x77fc[811]][_0x77fc[604]] = _0x77fc[46];
  let PL$13 = [];
  let nextto = this[_0x77fc[338]][_0x77fc[155]][_0x77fc[339]];
  var tagName;
  for (tagName in this[_0x77fc[338]][_0x77fc[155]][_0x77fc[348]]) {
    var color1hsl = this[_0x77fc[338]][_0x77fc[155]][_0x77fc[348]][tagName];
    if (nextto == color1hsl[_0x77fc[339]] || color1hsl[_0x77fc[465]] || !color1hsl[_0x77fc[466]]) {
      continue;
    }
    let color3hsl = document[_0x77fc[383]](_0x77fc[1741]);
    color3hsl[_0x77fc[419]] = color1hsl[_0x77fc[333]];
    color3hsl[_0x77fc[601]] = color1hsl[_0x77fc[333]];
    PL$13[_0x77fc[308]](color3hsl);
  }
  if (PL$13[_0x77fc[1895]](function(canCreateDiscussions, isSlidingUp) {
    return canCreateDiscussions[_0x77fc[419]][_0x77fc[1631]]() > isSlidingUp[_0x77fc[419]][_0x77fc[1631]]() ? 1 : canCreateDiscussions[_0x77fc[419]][_0x77fc[1631]]() < isSlidingUp[_0x77fc[419]][_0x77fc[1631]]() ? -1 : 0;
  }), PL$13[_0x77fc[237]]) {
    this[_0x77fc[811]][_0x77fc[1501]] = false;
    /** @type {number} */
    var PL$17 = 0;
    for (; PL$17 < PL$13[_0x77fc[237]]; PL$17++) {
      this[_0x77fc[811]][_0x77fc[387]](PL$13[PL$17]);
    }
  } else {
    this[_0x77fc[811]][_0x77fc[1501]] = true;
    let artistTrack = document[_0x77fc[383]](_0x77fc[1741]);
    artistTrack[_0x77fc[419]] = _0x77fc[2900];
    artistTrack[_0x77fc[601]] = _0x77fc[46];
    this[_0x77fc[811]][_0x77fc[387]](artistTrack);
  }
  showElem(this[_0x77fc[806]]);
  this[_0x77fc[810]][_0x77fc[601]] = _0x77fc[46];
  document[_0x77fc[3]](_0x77fc[2901])[_0x77fc[621]] = true;
  hideElem(this[_0x77fc[810]]);
  this[_0x77fc[338]][_0x77fc[1054]](1);
}, Items[_0x77fc[170]][_0x77fc[1824]] = function() {
  return false;
}, Items[_0x77fc[170]][_0x77fc[1825]] = function(canCreateDiscussions) {
  this[_0x77fc[840]] = canCreateDiscussions[_0x77fc[840]];
  var coupling = this;
  canCreateDiscussions[_0x77fc[2902]][_0x77fc[1097]](function(res) {
    if (res[_0x77fc[971]]) {
      coupling[_0x77fc[815]][res[_0x77fc[312]]][_0x77fc[971]] = res[_0x77fc[971]];
    }
    if (res[_0x77fc[338]]) {
      coupling[_0x77fc[815]][res[_0x77fc[312]]][_0x77fc[338]] = res[_0x77fc[338]];
    }
  });
}, Items[_0x77fc[170]][_0x77fc[2903]] = function() {
  let min = 0;
  let array = [[87, _0x77fc[609]], [86, _0x77fc[6]], [88, _0x77fc[649]], [90, _0x77fc[2558]], [67, _0x77fc[944]], [65, _0x77fc[720]], [66, _0x77fc[2557]], [68, _0x77fc[853]], [69, _0x77fc[1766]], [70, _0x77fc[842]], [71, _0x77fc[176]]];
  let coordtransform = this[_0x77fc[338]][_0x77fc[150]][_0x77fc[1057]];
  for (let x = 0; x < array[_0x77fc[237]]; x++) {
    let coord = array[x];
    if (!coordtransform[_0x77fc[2904]](coord[0])) {
      min = x;
      break;
    }
  }
  let _0xe1a7x12 = array[min][0];
  let _0xe1a7x13 = _0x77fc[1815] + array[min][1][_0x77fc[1631]]() + _0x77fc[2905];
  this[_0x77fc[838]] = _0xe1a7x12;
  this[_0x77fc[814]][_0x77fc[604]] = _0xe1a7x13;
}, Items[_0x77fc[170]][_0x77fc[2906]] = function() {
  var _0xe1a7x4 = this[_0x77fc[338]][_0x77fc[453]](0, this[_0x77fc[840]] - 1);
  if (this[_0x77fc[1824]]()) {
    return 0 === _0xe1a7x4 || this[_0x77fc[841]] ? (this[_0x77fc[841]] = false, this[_0x77fc[338]][_0x77fc[453]](1, 4)) : 0;
  }
}, Items[_0x77fc[170]][_0x77fc[2907]] = function() {
  if (this[_0x77fc[842]]) {
    let _0xe1a7x4 = this[_0x77fc[815]][this[_0x77fc[842]]];
    return this[_0x77fc[842]] = null, _0xe1a7x4;
  }
  return this[_0x77fc[2908]](_0x77fc[338]);
}, Items[_0x77fc[170]][_0x77fc[1025]] = function() {
  if (this[_0x77fc[1824]]()) {
    this[_0x77fc[2909]]();
  }
  /** @type {number} */
  this[_0x77fc[839]] = 0;
  var packByNumType = this;
  if (this[_0x77fc[844]]) {
    this[_0x77fc[844]][_0x77fc[1097]](function(data) {
      packByNumType[_0x77fc[2910]](data[_0x77fc[312]]);
    });
  }
  /** @type {!Array} */
  this[_0x77fc[844]] = [];
  this[_0x77fc[2903]]();
  this[_0x77fc[1125]]();
}, Items[_0x77fc[170]][_0x77fc[1125]] = function() {
  /** @type {null} */
  this[_0x77fc[837]] = null;
  hideElem(this[_0x77fc[812]]);
}, Items[_0x77fc[170]][_0x77fc[927]] = function() {
  showElem(this[_0x77fc[812]]);
  let _0xe1a7x4 = this[_0x77fc[2907]]();
  this[_0x77fc[837]] = _0xe1a7x4[_0x77fc[312]];
  this[_0x77fc[338]][_0x77fc[1007]](_0x77fc[927]);
  if (9 === this[_0x77fc[837]]) {
    this[_0x77fc[2909]]();
    /** @type {null} */
    this[_0x77fc[813]][_0x77fc[173]][_0x77fc[2911]] = null;
    this[_0x77fc[813]][_0x77fc[386]][_0x77fc[385]](_0x77fc[2912]);
    this[_0x77fc[813]][_0x77fc[386]][_0x77fc[385]](_0x77fc[2913]);
  } else {
    this[_0x77fc[813]][_0x77fc[173]][_0x77fc[2911]] = _0x77fc[2914] + _0xe1a7x4[_0x77fc[318]] + _0x77fc[1352];
    this[_0x77fc[813]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[2912]);
    this[_0x77fc[813]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[2913]);
  }
}, Items[_0x77fc[170]][_0x77fc[2915]] = function() {
  let criterion_index = this[_0x77fc[844]][_0x77fc[237]];
  for (; criterion_index--;) {
    let _0xe1a7x7 = this[_0x77fc[844]][criterion_index];
    _0xe1a7x7[_0x77fc[857]]--;
    if (_0xe1a7x7[_0x77fc[857]] <= 0) {
      this[_0x77fc[844]][_0x77fc[928]](criterion_index, 1);
      this[_0x77fc[2910]](_0xe1a7x7[_0x77fc[312]]);
    }
  }
}, Items[_0x77fc[170]][_0x77fc[1826]] = function(mmCoreSplitViewBlock) {
  mmCoreSplitViewBlock = mmCoreSplitViewBlock || this[_0x77fc[338]][_0x77fc[136]]();
  let artistTrack = this[_0x77fc[837]];
  if (this[_0x77fc[837]]) {
    /** @type {null} */
    this[_0x77fc[837]] = null;
    if (9 !== artistTrack) {
      this[_0x77fc[1125]]();
    }
    this[_0x77fc[338]][_0x77fc[1007]](_0x77fc[837]);
    this[_0x77fc[2916]](artistTrack, mmCoreSplitViewBlock);
  }
}, Items[_0x77fc[170]][_0x77fc[2916]] = function(canCreateDiscussions, context) {
  if (1 === canCreateDiscussions) {
    this[_0x77fc[2917]](11, true, context);
    let artistTrack = new ItemActivation(canCreateDiscussions);
    /** @type {number} */
    artistTrack[_0x77fc[857]] = 7;
    this[_0x77fc[844]][_0x77fc[308]](artistTrack);
  } else {
    if (2 === canCreateDiscussions) {
      this[_0x77fc[2918]](1);
    } else {
      if (3 === canCreateDiscussions) {
        this[_0x77fc[2918]](2);
      } else {
        if (4 === canCreateDiscussions) {
          this[_0x77fc[2918]](3);
          let artistTrack = new ItemActivation(canCreateDiscussions);
          artistTrack[_0x77fc[857]] = this[_0x77fc[338]][_0x77fc[453]](5, 11);
          this[_0x77fc[844]][_0x77fc[308]](artistTrack);
        } else {
          if (5 === canCreateDiscussions) {
            this[_0x77fc[338]][_0x77fc[50]] = false;
            this[_0x77fc[338]][_0x77fc[142]] = new PoisonAnimator(this, this[_0x77fc[338]]);
          } else {
            if (6 === canCreateDiscussions) {
              this[_0x77fc[2919]](4, context);
              let artistTrack = new ItemActivation(canCreateDiscussions);
              /** @type {number} */
              artistTrack[_0x77fc[857]] = 5;
              this[_0x77fc[844]][_0x77fc[308]](artistTrack);
            } else {
              if (7 === canCreateDiscussions) {
                var readInfo = new ReplayAction(this[_0x77fc[338]][_0x77fc[156]][_0x77fc[721]].AUX, context);
                /** @type {!Array} */
                readInfo[_0x77fc[853]] = [this[_0x77fc[338]][_0x77fc[156]][_0x77fc[723]][_0x77fc[1101]], 0, 2];
                this[_0x77fc[338]][_0x77fc[156]][_0x77fc[385]](readInfo);
                /** @type {number} */
                this[_0x77fc[338]][_0x77fc[96]] = 2;
              } else {
                if (8 === canCreateDiscussions) {
                  this[_0x77fc[2918]](4);
                } else {
                  if (9 === canCreateDiscussions) {
                    this[_0x77fc[2912]](context);
                  } else {
                    if (10 === canCreateDiscussions) {
                      this[_0x77fc[338]][_0x77fc[153]][_0x77fc[461]](_0x77fc[2920], 2);
                    } else {
                      if (11 === canCreateDiscussions) {
                        this[_0x77fc[2917]](12, true, context);
                        let artistTrack = new ItemActivation(canCreateDiscussions);
                        artistTrack[_0x77fc[857]] = this[_0x77fc[338]][_0x77fc[453]](7, 28);
                        this[_0x77fc[844]][_0x77fc[308]](artistTrack);
                      } else {
                        if (12 === canCreateDiscussions) {
                          this[_0x77fc[2919]](2, context);
                          let artistTrack = new ItemActivation(canCreateDiscussions);
                          artistTrack[_0x77fc[857]] = this[_0x77fc[338]][_0x77fc[453]](5, 27);
                          this[_0x77fc[844]][_0x77fc[308]](artistTrack);
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
}, Items[_0x77fc[170]][_0x77fc[2909]] = function() {
  if (!this[_0x77fc[845]][_0x77fc[237]]) {
    var color1hsl;
    for (color1hsl of this[_0x77fc[815]]) {
      if (color1hsl) {
        var color3hsl = new Image;
        color3hsl[_0x77fc[38]] = color1hsl[_0x77fc[318]];
        this[_0x77fc[845]][_0x77fc[308]](color3hsl);
      }
    }
  }
}, Items[_0x77fc[170]][_0x77fc[2908]] = function(i) {
  var lastModified = Math[_0x77fc[453]]();
  /** @type {number} */
  var curTotal = 0;
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this[_0x77fc[815]][_0x77fc[237]]; indexLookupKey++) {
    let userSubmission = this[_0x77fc[815]][indexLookupKey];
    if (userSubmission && lastModified < (curTotal = curTotal + userSubmission[i])) {
      return userSubmission;
    }
  }
  return results[this[_0x77fc[815]][_0x77fc[237]] - 1];
}, Items[_0x77fc[170]][_0x77fc[2921]] = function() {
  return this[_0x77fc[2908]](_0x77fc[971]);
}, Items[_0x77fc[170]][_0x77fc[2912]] = function(mmCoreSplitViewBlock) {
  let criterion_index = this[_0x77fc[2921]]()[_0x77fc[312]];
  let _0xe1a7x8 = this[_0x77fc[815]][criterion_index];
  this[_0x77fc[813]][_0x77fc[173]][_0x77fc[2911]] = _0x77fc[2914] + _0xe1a7x8[_0x77fc[318]] + _0x77fc[1352];
  this[_0x77fc[2916]](criterion_index, mmCoreSplitViewBlock);
  this[_0x77fc[813]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[2913]);
  var _0xe1a7x12 = this;
  setTimeout(function() {
    if (null === _0xe1a7x12[_0x77fc[837]]) {
      hideElem(_0xe1a7x12[_0x77fc[812]]);
    }
  }, 1500);
}, Items[_0x77fc[170]][_0x77fc[2919]] = function(boardManager, auto) {
  auto = auto || this[_0x77fc[338]][_0x77fc[136]]();
  var auto_option = new ReplayAction(this[_0x77fc[338]][_0x77fc[156]][_0x77fc[721]].AUX, auto);
  /** @type {!Array} */
  auto_option[_0x77fc[853]] = [this[_0x77fc[338]][_0x77fc[156]][_0x77fc[723]][_0x77fc[1101]], 1, boardManager];
  this[_0x77fc[338]][_0x77fc[156]][_0x77fc[385]](auto_option);
  this[_0x77fc[338]][_0x77fc[147]][_0x77fc[753]] = boardManager;
  this[_0x77fc[2917]](this[_0x77fc[338]][_0x77fc[147]][_0x77fc[305]], true, auto);
}, Items[_0x77fc[170]][_0x77fc[2918]] = function(canCreateDiscussions) {
  if (1 === canCreateDiscussions) {
    let _0xe1a7x4 = this[_0x77fc[338]][_0x77fc[453]](10, 31);
    this[_0x77fc[338]][_0x77fc[50]] = false;
    this[_0x77fc[338]][_0x77fc[142]] = new WindAnimator(this, this[_0x77fc[338]], _0xe1a7x4);
    /** @type {!Array} */
    (artistTrack = new ReplayAction(this[_0x77fc[338]][_0x77fc[156]][_0x77fc[721]].AUX, this[_0x77fc[338]][_0x77fc[136]]()))[_0x77fc[853]] = [this[_0x77fc[338]][_0x77fc[156]][_0x77fc[723]][_0x77fc[2015]], 0, _0xe1a7x4];
    this[_0x77fc[338]][_0x77fc[156]][_0x77fc[385]](artistTrack);
  } else {
    if (2 === canCreateDiscussions) {
      this[_0x77fc[338]][_0x77fc[50]] = false;
      this[_0x77fc[338]][_0x77fc[142]] = new CompressAnimator(this, this[_0x77fc[338]]);
      /** @type {!Array} */
      (artistTrack = new ReplayAction(this[_0x77fc[338]][_0x77fc[156]][_0x77fc[721]].AUX, this[_0x77fc[338]][_0x77fc[136]]()))[_0x77fc[853]] = [this[_0x77fc[338]][_0x77fc[156]][_0x77fc[723]][_0x77fc[2015]], 1, 0];
      this[_0x77fc[338]][_0x77fc[156]][_0x77fc[385]](artistTrack);
    } else {
      if (3 === canCreateDiscussions) {
        /** @type {!Array} */
        (artistTrack = new ReplayAction(this[_0x77fc[338]][_0x77fc[156]][_0x77fc[721]].AUX, this[_0x77fc[338]][_0x77fc[136]]()))[_0x77fc[853]] = [this[_0x77fc[338]][_0x77fc[156]][_0x77fc[723]][_0x77fc[2015]], 2, 0];
        this[_0x77fc[338]][_0x77fc[156]][_0x77fc[385]](artistTrack);
        this[_0x77fc[2922]]();
        this[_0x77fc[338]][_0x77fc[854]]();
      } else {
        if (4 === canCreateDiscussions) {
          var artistTrack;
          /** @type {!Array} */
          (artistTrack = new ReplayAction(this[_0x77fc[338]][_0x77fc[156]][_0x77fc[721]].AUX, this[_0x77fc[338]][_0x77fc[136]]()))[_0x77fc[853]] = [this[_0x77fc[338]][_0x77fc[156]][_0x77fc[723]][_0x77fc[2015]], 3, 0];
          this[_0x77fc[338]][_0x77fc[156]][_0x77fc[385]](artistTrack);
          this[_0x77fc[338]][_0x77fc[50]] = false;
          this[_0x77fc[338]][_0x77fc[142]] = new InvertAnimator(this, this[_0x77fc[338]]);
          this[_0x77fc[338]][_0x77fc[855]]();
          this[_0x77fc[338]][_0x77fc[856]](true);
        }
      }
    }
  }
}, Items[_0x77fc[170]][_0x77fc[2923]] = function() {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < 10; ++indexLookupKey) {
    /** @type {number} */
    this[_0x77fc[338]][_0x77fc[231]][indexLookupKey] = 0;
  }
}, Items[_0x77fc[170]][_0x77fc[850]] = function() {
  this[_0x77fc[2923]]();
  /** @type {number} */
  var id = 0;
  for (; id < 2; id++) {
    if (9 !== this[_0x77fc[338]][_0x77fc[177]][id][0]) {
      var map = this[_0x77fc[338]][_0x77fc[177]][id];
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
  for (; id < this[_0x77fc[338]][_0x77fc[177]][_0x77fc[237]]; id++) {
    if (9 !== this[_0x77fc[338]][_0x77fc[177]][id][0]) {
      map = this[_0x77fc[338]][_0x77fc[177]][id];
      /** @type {number} */
      var _0xe1a7x12 = 0;
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
            _0xe1a7x12++;
          }
        }
      }
      if (10 === _0xe1a7x12) {
        /** @type {number} */
        map[9] = 0;
      }
    }
  }
}, Items[_0x77fc[170]][_0x77fc[2922]] = function(results) {
  if (!results) {
    results = this[_0x77fc[338]][_0x77fc[158]];
  }
  /** @type {number} */
  var j = 0;
  results[_0x77fc[2925]](_0x77fc[2924]);
  this[_0x77fc[2923]]();
  let d = 0;
  var i = j = this[_0x77fc[338]][_0x77fc[177]][_0x77fc[237]] - 1;
  for (; i >= 0; --i, --j) {
    if (9 !== this[_0x77fc[338]][_0x77fc[177]][i][0]) {
      this[_0x77fc[338]][_0x77fc[177]][i] = results[_0x77fc[177]][j + d];
    } else {
      d++;
    }
  }
  this[_0x77fc[338]][_0x77fc[855]]();
  this[_0x77fc[338]][_0x77fc[856]](true);
  /** @type {number} */
  this[_0x77fc[338]][_0x77fc[123]] = -1;
}, Items[_0x77fc[170]][_0x77fc[2926]] = function(boardManager) {
  /**
   * @param {number} index
   * @param {?} data
   * @return {undefined}
   */
  function parse(index, data) {
    if (!data[index - 1]) {
      var n = index;
      for (; n < 10; ++n) {
        data[n - 1] = data[n];
      }
      /** @type {number} */
      data[9] = 0;
    }
  }
  this[_0x77fc[2923]]();
  /** @type {number} */
  var apiCallRaw = 1;
  for (; apiCallRaw <= boardManager; apiCallRaw++) {
    /** @type {number} */
    var textureUrl = 0;
    for (; textureUrl < 20; ++textureUrl) {
      if (9 !== this[_0x77fc[338]][_0x77fc[177]][textureUrl][0]) {
        parse(apiCallRaw, this[_0x77fc[338]][_0x77fc[177]][textureUrl]);
      }
    }
  }
}, Items[_0x77fc[170]][_0x77fc[2927]] = function(canCreateDiscussions) {
  var article = copyMatrix(this[_0x77fc[338]][_0x77fc[177]]);
  this[_0x77fc[2923]]();
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
      this[_0x77fc[338]][_0x77fc[177]][category][type] = article[category][i];
    }
  }
}, Items[_0x77fc[170]][_0x77fc[2917]] = function(leftFence, canCreateDiscussions, isSlidingUp) {
  let history = isSlidingUp || this[_0x77fc[338]][_0x77fc[136]]();
  let object = canCreateDiscussions ? 1 : 0;
  this[_0x77fc[338]][_0x77fc[230]] = this[_0x77fc[338]][_0x77fc[1130]](leftFence);
  if (canCreateDiscussions) {
    this[_0x77fc[338]][_0x77fc[1022]]();
    this[_0x77fc[338]][_0x77fc[974]]();
  }
  var visualization2D = new ReplayAction(this[_0x77fc[338]][_0x77fc[156]][_0x77fc[721]].AUX, history);
  /** @type {!Array} */
  visualization2D[_0x77fc[853]] = [this[_0x77fc[338]][_0x77fc[156]][_0x77fc[723]][_0x77fc[2014]], object, leftFence];
  this[_0x77fc[338]][_0x77fc[156]][_0x77fc[385]](visualization2D);
}, Items[_0x77fc[170]][_0x77fc[2910]] = function(canCreateDiscussions) {
  if (1 === canCreateDiscussions) {
    this[_0x77fc[2917]](this[_0x77fc[338]][_0x77fc[147]][_0x77fc[305]], false);
  } else {
    if (4 === canCreateDiscussions) {
      let _0xe1a7x4 = this[_0x77fc[837]];
      /** @type {number} */
      this[_0x77fc[837]] = 2;
      this[_0x77fc[1826]]();
      this[_0x77fc[837]] = _0xe1a7x4;
      this[_0x77fc[338]][_0x77fc[52]] = true;
    } else {
      if (6 === canCreateDiscussions) {
        this[_0x77fc[2919]](this[_0x77fc[839]]);
      } else {
        if (11 === canCreateDiscussions) {
          this[_0x77fc[2917]](this[_0x77fc[338]][_0x77fc[147]][_0x77fc[305]], false);
        } else {
          if (12 === canCreateDiscussions) {
            this[_0x77fc[2919]](this[_0x77fc[839]]);
          }
        }
      }
    }
  }
}, InvertAnimator[_0x77fc[170]][_0x77fc[1159]] = function(canCreateDiscussions) {
  this[_0x77fc[853]] += canCreateDiscussions;
  for (; this[_0x77fc[853]] > this[_0x77fc[851]];) {
    this[_0x77fc[853]] -= this[_0x77fc[851]];
    this[_0x77fc[2928]]();
  }
}, InvertAnimator[_0x77fc[170]][_0x77fc[2928]] = function() {
  this[_0x77fc[318]]++;
  var _0xe1a7x4 = this[_0x77fc[849]];
  this[_0x77fc[849]] = this[_0x77fc[176]][_0x77fc[177]];
  this[_0x77fc[176]][_0x77fc[177]] = _0xe1a7x4;
  if (2 !== this[_0x77fc[318]]) {
    this[_0x77fc[176]][_0x77fc[854]]();
  } else {
    this[_0x77fc[1251]]();
  }
}, InvertAnimator[_0x77fc[170]][_0x77fc[1251]] = function() {
  /** @type {null} */
  this[_0x77fc[176]][_0x77fc[142]] = null;
  if (!this[_0x77fc[176]][_0x77fc[51]]) {
    this[_0x77fc[176]][_0x77fc[50]] = true;
  }
  this[_0x77fc[176]][_0x77fc[114]] = false;
  this[_0x77fc[176]][_0x77fc[118]] = this[_0x77fc[852]];
  this[_0x77fc[176]][_0x77fc[856]](true);
  this[_0x77fc[176]][_0x77fc[854]]();
}, PoisonAnimator[_0x77fc[170]][_0x77fc[1159]] = function(canCreateDiscussions) {
  this[_0x77fc[853]] += canCreateDiscussions;
  for (; this[_0x77fc[853]] > this[_0x77fc[851]];) {
    this[_0x77fc[853]] -= this[_0x77fc[851]];
    this[_0x77fc[2928]]();
  }
}, PoisonAnimator[_0x77fc[170]][_0x77fc[2928]] = function() {
  this[_0x77fc[318]]++;
  this[_0x77fc[176]][_0x77fc[50]] = true;
  this[_0x77fc[176]][_0x77fc[1072]]();
  if (!this[_0x77fc[176]][_0x77fc[50]]) {
    this[_0x77fc[1251]]();
  }
  this[_0x77fc[176]][_0x77fc[50]] = false;
}, PoisonAnimator[_0x77fc[170]][_0x77fc[1251]] = function() {
  /** @type {null} */
  this[_0x77fc[176]][_0x77fc[142]] = null;
  if (!this[_0x77fc[176]][_0x77fc[51]]) {
    this[_0x77fc[176]][_0x77fc[50]] = true;
  }
  this[_0x77fc[176]][_0x77fc[114]] = false;
  this[_0x77fc[176]][_0x77fc[118]] = this[_0x77fc[852]];
  this[_0x77fc[176]][_0x77fc[856]](true);
  this[_0x77fc[176]][_0x77fc[854]]();
}, CompressAnimator[_0x77fc[170]][_0x77fc[1159]] = function(canCreateDiscussions) {
  this[_0x77fc[853]] += canCreateDiscussions;
  for (; this[_0x77fc[853]] > this[_0x77fc[851]];) {
    this[_0x77fc[853]] -= this[_0x77fc[851]];
    this[_0x77fc[2928]]();
  }
}, CompressAnimator[_0x77fc[170]][_0x77fc[2928]] = function() {
  this[_0x77fc[318]]++;
  this[_0x77fc[848]][_0x77fc[2926]](this[_0x77fc[318]]);
  this[_0x77fc[176]][_0x77fc[854]]();
  if (this[_0x77fc[318]] >= 10) {
    this[_0x77fc[1251]]();
  }
}, CompressAnimator[_0x77fc[170]][_0x77fc[1251]] = function() {
  /** @type {null} */
  this[_0x77fc[176]][_0x77fc[142]] = null;
  if (!this[_0x77fc[176]][_0x77fc[51]]) {
    this[_0x77fc[176]][_0x77fc[50]] = true;
  }
  this[_0x77fc[176]][_0x77fc[114]] = false;
  this[_0x77fc[176]][_0x77fc[118]] = this[_0x77fc[852]];
  this[_0x77fc[176]][_0x77fc[856]](true);
  this[_0x77fc[176]][_0x77fc[854]]();
}, WindAnimator[_0x77fc[170]][_0x77fc[1159]] = function(canCreateDiscussions) {
  this[_0x77fc[853]] += canCreateDiscussions;
  for (; this[_0x77fc[853]] > this[_0x77fc[851]];) {
    this[_0x77fc[853]] -= this[_0x77fc[851]];
    this[_0x77fc[2928]]();
  }
}, WindAnimator[_0x77fc[170]][_0x77fc[2928]] = function() {
  this[_0x77fc[848]][_0x77fc[2927]](1);
  this[_0x77fc[176]][_0x77fc[854]]();
  this[_0x77fc[318]]--;
  if (this[_0x77fc[318]] <= 0) {
    this[_0x77fc[1251]]();
  }
}, WindAnimator[_0x77fc[170]][_0x77fc[1251]] = function() {
  /** @type {null} */
  this[_0x77fc[176]][_0x77fc[142]] = null;
  if (!this[_0x77fc[176]][_0x77fc[51]]) {
    this[_0x77fc[176]][_0x77fc[50]] = true;
  }
  this[_0x77fc[176]][_0x77fc[114]] = false;
  this[_0x77fc[176]][_0x77fc[118]] = this[_0x77fc[852]];
  this[_0x77fc[176]][_0x77fc[856]](true);
  this[_0x77fc[176]][_0x77fc[854]]();
}, Friends[_0x77fc[170]][_0x77fc[462]] = function(url__33, canCreateDiscussions) {
  this[_0x77fc[858]] = url__33;
  this[_0x77fc[859]] = canCreateDiscussions;
  this[_0x77fc[337]] = new WebSocket(url__33);
  this[_0x77fc[337]][_0x77fc[2059]] = this[_0x77fc[1652]][_0x77fc[430]](this);
  this[_0x77fc[337]][_0x77fc[2060]] = this[_0x77fc[2006]][_0x77fc[430]](this);
  this[_0x77fc[337]][_0x77fc[1653]] = this[_0x77fc[1654]][_0x77fc[430]](this);
  var pointerColors = this;
  this[_0x77fc[347]] = setTimeout(function() {
    var color = pointerColors[_0x77fc[337]];
    if (null !== color && 0 === color[_0x77fc[1657]]) {
      color[_0x77fc[1653]] = color[_0x77fc[2060]] = function() {
      };
      /**
       * @return {undefined}
       */
      color[_0x77fc[2059]] = function() {
        color[_0x77fc[1852]]();
      };
      color[_0x77fc[1852]]();
      pointerColors[_0x77fc[337]] = color = null;
      console[_0x77fc[1828]](_0x77fc[2929]);
      pointerColors[_0x77fc[2930]]();
    }
  }, 5E3);
}, Friends[_0x77fc[170]][_0x77fc[335]] = function() {
  return this[_0x77fc[337]] && this[_0x77fc[337]][_0x77fc[1657]] === this[_0x77fc[337]][_0x77fc[2080]];
}, Friends[_0x77fc[170]][_0x77fc[2262]] = function() {
  return this[_0x77fc[863]] && this[_0x77fc[865]];
}, Friends[_0x77fc[170]][_0x77fc[1499]] = function(mmCoreSplitViewBlock) {
  return !(!this[_0x77fc[337]] || this[_0x77fc[337]][_0x77fc[1657]] !== this[_0x77fc[337]][_0x77fc[2080]]) && (this[_0x77fc[337]][_0x77fc[1522]](mmCoreSplitViewBlock), true);
}, Friends[_0x77fc[170]][_0x77fc[2182]] = function(name) {
  let artistTrack = JSON[_0x77fc[1520]]({
    t : 5,
    u : this[_0x77fc[865]],
    m : name
  });
  if (this[_0x77fc[1499]](artistTrack), !this[_0x77fc[335]]()) {
    let _spring2 = document[_0x77fc[383]](_0x77fc[660]);
    _spring2[_0x77fc[604]] = _0x77fc[1815] + this[_0x77fc[155]][_0x77fc[1698]](this[_0x77fc[155]][_0x77fc[339]]) + _0x77fc[1984] + htmlEntities(name);
    _spring2[_0x77fc[173]][_0x77fc[467]] = _0x77fc[2931];
    this[_0x77fc[1116]](_0x77fc[46], _spring2);
    let val = document[_0x77fc[383]](_0x77fc[2374]);
    val[_0x77fc[38]] = CDN_URL(_0x77fc[2375]);
    val[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2932];
    _spring2 = document[_0x77fc[383]](_0x77fc[660]);
    _spring2[_0x77fc[387]](val);
    _spring2[_0x77fc[173]][_0x77fc[2680]] = _0x77fc[1687];
    _spring2[_0x77fc[604]] += _0x77fc[2933];
    _spring2[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2934];
    _spring2[_0x77fc[173]][_0x77fc[467]] = _0x77fc[1261];
    this[_0x77fc[1116]](_0x77fc[46], _spring2);
  }
}, Friends[_0x77fc[170]][_0x77fc[2935]] = function() {
  if (!this[_0x77fc[863]] || !this[_0x77fc[865]] || !this[_0x77fc[874]]) {
    return;
  }
  let artistTrack = _0x77fc[2936] + this[_0x77fc[874]][_0x77fc[972]] + _0x77fc[426] + this[_0x77fc[874]][_0x77fc[311]][_0x77fc[1619]](_0x77fc[2937], _0x77fc[2938]) + _0x77fc[1626];
  this[_0x77fc[2182]](artistTrack);
}, Friends[_0x77fc[170]][_0x77fc[2930]] = function() {
  this[_0x77fc[860]]++;
  let n = Math[_0x77fc[1148]](5E3, 1E3 * (this[_0x77fc[860]] - 1));
  if (this[_0x77fc[860]] > 60 && (n = 3E4), n = Math[_0x77fc[1080]](this[_0x77fc[861]], n), this[_0x77fc[860]] <= 100) {
    var _0xe1a7x7 = this;
    setTimeout(function() {
      _0xe1a7x7[_0x77fc[462]](_0xe1a7x7[_0x77fc[858]], _0xe1a7x7[_0x77fc[859]]);
    }, n);
  }
}, Friends[_0x77fc[170]][_0x77fc[1652]] = function() {
  let artistTrack = JSON[_0x77fc[1520]]({
    t : 1,
    j : this[_0x77fc[859]]
  });
  this[_0x77fc[1499]](artistTrack);
}, Friends[_0x77fc[170]][_0x77fc[2006]] = function(xhr) {
  if (_0x77fc[730] == typeof xhr[_0x77fc[600]]) {
    this[_0x77fc[1737]](JSON[_0x77fc[1546]](xhr[_0x77fc[600]]));
  }
}, Friends[_0x77fc[170]][_0x77fc[1737]] = function(data) {
  switch(data[_0x77fc[180]]) {
    case 1:
      /** @type {number} */
      this[_0x77fc[860]] = 0;
      /** @type {number} */
      this[_0x77fc[861]] = 0;
      /** @type {null} */
      this[_0x77fc[873]] = null;
      let artistTrack = JSON[_0x77fc[1520]]({
        t : 2
      });
      this[_0x77fc[1499]](artistTrack);
      if (this[_0x77fc[862]]) {
        this[_0x77fc[1499]](this[_0x77fc[862]]);
        /** @type {null} */
        this[_0x77fc[862]] = null;
      }
      break;
    case 2:
      if (this[_0x77fc[866]] = data[_0x77fc[842]], this[_0x77fc[863]] && this[_0x77fc[2939]](this[_0x77fc[875]].FRIEND_LIST), data[_0x77fc[2346]] && data[_0x77fc[2346]][_0x77fc[237]]) {
        for (let user of data[_0x77fc[2346]]) {
          this[_0x77fc[871]] = {};
          /** @type {number} */
          this[_0x77fc[871]][user] = 1;
        }
        if (!this[_0x77fc[863]]) {
          this[_0x77fc[2940]](data[_0x77fc[2346]][_0x77fc[237]]);
        }
      }
      break;
    case 4:
      if (this[_0x77fc[863]] && data[_0x77fc[2346]] === this[_0x77fc[865]]) {
        for (let _jsonName = data[_0x77fc[611]][_0x77fc[237]] - 1; _jsonName >= 0; --_jsonName) {
          let artistTrack = 1 === data[_0x77fc[611]][_jsonName][_0x77fc[532]] ? this[_0x77fc[155]][_0x77fc[1698]](this[_0x77fc[155]][_0x77fc[339]]) : this[_0x77fc[155]][_0x77fc[1662]](data[_0x77fc[2346]], 0);
          this[_0x77fc[1116]](artistTrack, data[_0x77fc[611]][_jsonName][_0x77fc[971]], null, data[_0x77fc[611]][_jsonName][_0x77fc[180]]);
        }
        if (delete this[_0x77fc[871]][data[_0x77fc[2346]]], !data[_0x77fc[611]][_0x77fc[237]]) {
          let artistTrack = document[_0x77fc[383]](_0x77fc[660]);
          artistTrack[_0x77fc[604]] = trans(i18n[_0x77fc[2941]], {
            name : this[_0x77fc[155]][_0x77fc[1662]](data[_0x77fc[2346]], 0)
          });
          artistTrack[_0x77fc[173]][_0x77fc[467]] = _0x77fc[1261];
          artistTrack[_0x77fc[173]][_0x77fc[186]] = _0x77fc[2932];
          artistTrack[_0x77fc[173]][_0x77fc[2651]] = _0x77fc[2507];
          this[_0x77fc[1116]](_0x77fc[46], artistTrack);
        }
      }
      break;
    case 5:
      let p = data[_0x77fc[2346]];
      if (data[_0x77fc[532]] || this[_0x77fc[2942]](data[_0x77fc[2346]]), this[_0x77fc[863]]) {
        if (p === this[_0x77fc[865]]) {
          let artistTrack = 1 === data[_0x77fc[532]] ? this[_0x77fc[155]][_0x77fc[1698]](this[_0x77fc[155]][_0x77fc[339]]) : this[_0x77fc[155]][_0x77fc[1662]](p, data[_0x77fc[650]]);
          if (this[_0x77fc[1116]](artistTrack, data[_0x77fc[971]], null, data[_0x77fc[318]]), !data[_0x77fc[532]]) {
            let artistTrack = JSON[_0x77fc[1520]]({
              t : 6,
              u : p,
              i : data[_0x77fc[318]]
            });
            this[_0x77fc[1499]](artistTrack);
          }
        } else {
          if (null !== this[_0x77fc[865]]) {
            if (this[_0x77fc[2943]](), this[_0x77fc[870]]) {
              let result = this[_0x77fc[870]][_0x77fc[592]](_0x77fc[2944]);
              if (result[_0x77fc[237]]) {
                result = result[0];
                let value = parseInt(result[_0x77fc[419]]);
                if (value) {
                  value = value + 1;
                } else {
                  /** @type {number} */
                  value = 1;
                }
                result[_0x77fc[419]] = Math[_0x77fc[1148]](99, value);
              } else {
                result = document[_0x77fc[383]](_0x77fc[660]);
                result[_0x77fc[1779]] = _0x77fc[2944];
                /** @type {number} */
                result[_0x77fc[419]] = 1;
                this[_0x77fc[870]][_0x77fc[387]](result);
              }
            }
          } else {
            this[_0x77fc[2943]]();
            let _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[2945] + p);
            if (_0xe1a7x4) {
              let PL$133 = _0xe1a7x4[_0x77fc[592]](_0x77fc[2946])[0];
              let PL$159 = PL$133[_0x77fc[592]](_0x77fc[2944]);
              if (PL$159[_0x77fc[237]]) {
                let GET_AUTH_URL_TIMEOUT = parseInt(PL$159[0][_0x77fc[419]]);
                if (GET_AUTH_URL_TIMEOUT) {
                  GET_AUTH_URL_TIMEOUT = GET_AUTH_URL_TIMEOUT + 1;
                } else {
                  /** @type {number} */
                  GET_AUTH_URL_TIMEOUT = 1;
                }
                PL$133[_0x77fc[1340]](PL$159[0]);
                this[_0x77fc[2947]](PL$133, GET_AUTH_URL_TIMEOUT);
              } else {
                this[_0x77fc[2947]](PL$133, 1);
              }
            }
          }
        }
      } else {
        if (1 == data[_0x77fc[532]]) {
          break;
        }
        if (!this[_0x77fc[871]][_0x77fc[1168]](p)) {
          /** @type {number} */
          this[_0x77fc[871]][p] = 1;
        }
        let artistTrack = Object[_0x77fc[1207]](this[_0x77fc[871]])[_0x77fc[237]];
        this[_0x77fc[2940]](artistTrack);
        this[_0x77fc[2943]]();
      }
      break;
    case 99:
      this[_0x77fc[873]] = data[_0x77fc[1766]];
      /** @type {number} */
      this[_0x77fc[861]] = 2E4;
      if (this[_0x77fc[863]]) {
        this[_0x77fc[2948]]();
      }
  }
}, Friends[_0x77fc[170]][_0x77fc[2942]] = function(value) {
  let alreadyMarked = false;
  let selfCompletionActive = false;
  for (let indexLookupKey = 0; indexLookupKey < this[_0x77fc[866]][_0x77fc[237]]; ++indexLookupKey) {
    let imscp = this[_0x77fc[866]][indexLookupKey];
    if (imscp[_0x77fc[311]] == value) {
      if (!imscp[_0x77fc[532]]) {
        alreadyMarked = false;
        break;
      }
      selfCompletionActive = true;
      break;
    }
  }
  if (!(selfCompletionActive && !alreadyMarked)) {
    this[_0x77fc[2949]]();
  }
}, Friends[_0x77fc[170]][_0x77fc[2943]] = function() {
  if (!this[_0x77fc[155]][_0x77fc[338]][_0x77fc[150]][_0x77fc[542]]) {
    return;
  }
  let _0xe1a7x4 = this[_0x77fc[155]][_0x77fc[338]][_0x77fc[136]]();
  if (!this[_0x77fc[872]] || _0xe1a7x4 - this[_0x77fc[872]] > 1E3) {
    createjs[_0x77fc[34]][_0x77fc[50]](_0x77fc[925]);
    this[_0x77fc[872]] = _0xe1a7x4;
  }
}, Friends[_0x77fc[170]][_0x77fc[2940]] = function(suggestedValue) {
  this[_0x77fc[155]][_0x77fc[373]][_0x77fc[1779]] = _0x77fc[2950];
  if (!this[_0x77fc[868]]) {
    this[_0x77fc[868]] = document[_0x77fc[383]](_0x77fc[660]);
    this[_0x77fc[155]][_0x77fc[373]][_0x77fc[387]](this[_0x77fc[868]]);
  }
  this[_0x77fc[868]][_0x77fc[1779]] = _0x77fc[2951];
  if (suggestedValue > 0) {
    this[_0x77fc[868]][_0x77fc[419]] = Math[_0x77fc[1148]](99, suggestedValue);
  } else {
    if (-1 === suggestedValue) {
      this[_0x77fc[868]][_0x77fc[419]] = _0x77fc[2952];
      this[_0x77fc[868]][_0x77fc[386]][_0x77fc[385]](_0x77fc[2953]);
    }
  }
  showElem(this[_0x77fc[868]]);
}, Friends[_0x77fc[170]][_0x77fc[2947]] = function(elem, value) {
  elem[_0x77fc[386]][_0x77fc[385]](_0x77fc[2954]);
  let input = document[_0x77fc[383]](_0x77fc[660]);
  input[_0x77fc[1779]] = _0x77fc[2944];
  input[_0x77fc[419]] = Math[_0x77fc[1148]](99, value);
  elem[_0x77fc[387]](input);
}, Friends[_0x77fc[170]][_0x77fc[2955]] = function(canCreateDiscussions, currentAppUser, mtime) {
  if (_0x77fc[730] != typeof canCreateDiscussions) {
    return canCreateDiscussions;
  }
  let _0xe1a7x12 = canCreateDiscussions[_0x77fc[2444]](/^\[INV:([\w]+):(.*)\]$/);
  if (_0xe1a7x12) {
    let processEvaluatorsCallback = _0xe1a7x12[1];
    let _0xe1a7x1e = _0xe1a7x12[2];
    let window = document[_0x77fc[383]](_0x77fc[660]);
    window[_0x77fc[1779]] = _0x77fc[2956];
    window[_0x77fc[604]] = getSVG(_0x77fc[2957], _0x77fc[1898], _0x77fc[46]);
    let universalSendCommand = document[_0x77fc[383]](_0x77fc[382]);
    universalSendCommand[_0x77fc[604]] = trans(i18n[_0x77fc[2958]], {
      room : _0x77fc[1815] + _0xe1a7x1e + _0x77fc[1210]
    });
    window[_0x77fc[387]](universalSendCommand);
    var expected_date2 = new Date(1E3 * mtime);
    let _0xe1a7x3a = expected_date2[_0x77fc[2959]]() + _0x77fc[426] + (_0x77fc[525] + expected_date2[_0x77fc[2960]]())[_0x77fc[1247]](-2);
    let srcToEval = document[_0x77fc[383]](_0x77fc[382]);
    return srcToEval[_0x77fc[1779]] = _0x77fc[2961], srcToEval[_0x77fc[604]] = _0xe1a7x3a + _0x77fc[2225] + trans(i18n[_0x77fc[2962]], {
      user : currentAppUser
    }), window[_0x77fc[387]](srcToEval), processEvaluatorsCallback != this[_0x77fc[155]][_0x77fc[354]] ? window[_0x77fc[1322]](_0x77fc[1228], function(canCreateDiscussions) {
      window[_0x77fc[1646]](processEvaluatorsCallback);
    }) : _0x77fc[1521] == typeof $ && $(window)[_0x77fc[2966]]({
      title : i18n[_0x77fc[2963]],
      template : this[_0x77fc[2965]](_0x77fc[2964]),
      viewport : {
        selector : _0x77fc[1341],
        padding : -1E4
      }
    }), window;
  }
  return canCreateDiscussions;
}, Friends[_0x77fc[170]][_0x77fc[1116]] = function(sketchName, sketch, mmaPushNotificationsComponent, resolve) {
  var i = _0x77fc[46] === sketchName ? _0x77fc[46] : _0x77fc[1815] + sketchName + _0x77fc[1999];
  var GET_AUTH_URL_TIMEOUT = _0x77fc[46] === sketchName ? _0x77fc[330] : _0x77fc[46];
  sketch = this[_0x77fc[2955]](sketch, sketchName, resolve);
  var btnList = document[_0x77fc[383]](_0x77fc[660]);
  btnList[_0x77fc[386]][_0x77fc[385]](_0x77fc[1985]);
  if (_0x77fc[1986] == typeof mmaPushNotificationsComponent && null !== mmaPushNotificationsComponent) {
    btnList[_0x77fc[386]][_0x77fc[385]](mmaPushNotificationsComponent);
  }
  if (GET_AUTH_URL_TIMEOUT) {
    btnList[_0x77fc[386]][_0x77fc[385]](GET_AUTH_URL_TIMEOUT);
  }
  if (sketch instanceof HTMLDivElement) {
    btnList[_0x77fc[387]](sketch);
  } else {
    btnList[_0x77fc[604]] = i + sketch;
  }
  this[_0x77fc[155]][_0x77fc[369]][_0x77fc[387]](btnList);
  this[_0x77fc[155]][_0x77fc[371]][_0x77fc[2003]] = this[_0x77fc[155]][_0x77fc[371]][_0x77fc[2004]];
}, Friends[_0x77fc[170]][_0x77fc[2967]] = function(canCreateDiscussions) {
  let emoticonI18n = document[_0x77fc[383]](_0x77fc[660]);
  return emoticonI18n[_0x77fc[386]][_0x77fc[385]](_0x77fc[2968]), canCreateDiscussions ? (emoticonI18n[_0x77fc[386]][_0x77fc[385]](_0x77fc[477]), emoticonI18n[_0x77fc[419]] = i18n[_0x77fc[2969]]) : emoticonI18n[_0x77fc[419]] = i18n[_0x77fc[2970]], emoticonI18n;
}, Friends[_0x77fc[170]][_0x77fc[2949]] = function() {
  let artistTrack = JSON[_0x77fc[1520]]({
    t : 2
  });
  this[_0x77fc[1499]](artistTrack);
  /** @type {null} */
  this[_0x77fc[865]] = null;
  if (!this[_0x77fc[335]]()) {
    this[_0x77fc[2972]](_0x77fc[2971]);
  }
}, Friends[_0x77fc[170]][_0x77fc[1889]] = function(pointRadius, isSlidingUp, canCreateDiscussions) {
  this[_0x77fc[874]] = {
    t : 3,
    r : pointRadius,
    p : !isSlidingUp,
    n : canCreateDiscussions[_0x77fc[1045]](0, 30)
  };
  let artistTrack = JSON[_0x77fc[1520]](this[_0x77fc[874]]);
  if (this[_0x77fc[335]]()) {
    this[_0x77fc[1499]](artistTrack);
  } else {
    this[_0x77fc[862]] = artistTrack;
  }
  if (this[_0x77fc[863]] && this[_0x77fc[864]]) {
    this[_0x77fc[2949]]();
  }
}, Friends[_0x77fc[170]][_0x77fc[2973]] = function(v) {
  let numKeysDeleted = JSON[_0x77fc[1520]]({
    t : 4,
    u : v
  });
  this[_0x77fc[1499]](numKeysDeleted);
  this[_0x77fc[155]][_0x77fc[369]][_0x77fc[604]] = _0x77fc[46];
  this[_0x77fc[155]][_0x77fc[369]][_0x77fc[1779]] = _0x77fc[2974];
  let window = document[_0x77fc[383]](_0x77fc[2975]);
  window[_0x77fc[1779]] = _0x77fc[869];
  window[_0x77fc[419]] = v;
  let processEvaluatorsCallback = document[_0x77fc[383]](_0x77fc[1873]);
  processEvaluatorsCallback[_0x77fc[604]] = getSVG(_0x77fc[2976], _0x77fc[1898], _0x77fc[46]);
  processEvaluatorsCallback[_0x77fc[1322]](_0x77fc[1228], this[_0x77fc[2949]][_0x77fc[430]](this));
  processEvaluatorsCallback[_0x77fc[1779]] = _0x77fc[2977];
  this[_0x77fc[870]] = processEvaluatorsCallback;
  window[_0x77fc[387]](processEvaluatorsCallback);
  let $list = document[_0x77fc[383]](_0x77fc[1873]);
  $list[_0x77fc[604]] = getSVG(_0x77fc[2957], _0x77fc[1898], _0x77fc[46]);
  $list[_0x77fc[1322]](_0x77fc[1228], this[_0x77fc[2935]][_0x77fc[430]](this));
  $list[_0x77fc[1779]] = _0x77fc[2978];
  if (_0x77fc[1521] == typeof $) {
    $($list)[_0x77fc[2966]]({
      title : i18n[_0x77fc[2979]],
      viewport : {
        selector : _0x77fc[1341],
        padding : -1E4
      }
    });
  }
  window[_0x77fc[387]]($list);
  let postDateGmt = this[_0x77fc[155]][_0x77fc[371]];
  if (this[_0x77fc[869]]) {
    this[_0x77fc[367]][_0x77fc[1340]](this[_0x77fc[869]]);
    /** @type {null} */
    this[_0x77fc[869]] = null;
  }
  this[_0x77fc[869]] = window;
  this[_0x77fc[367]][_0x77fc[2980]](window, postDateGmt);
  this[_0x77fc[155]][_0x77fc[375]][_0x77fc[1600]] = trans(i18n[_0x77fc[2981]], {
    name : v
  });
  this[_0x77fc[865]] = v;
}, Friends[_0x77fc[170]][_0x77fc[2965]] = function(canCreateDiscussions) {
  return _0x77fc[2982] + canCreateDiscussions + _0x77fc[2983];
}, Friends[_0x77fc[170]][_0x77fc[2984]] = function() {
  let packByNumType = this;
  /** @type {null} */
  this[_0x77fc[865]] = null;
  this[_0x77fc[155]][_0x77fc[375]][_0x77fc[1600]] = _0x77fc[46];
  this[_0x77fc[155]][_0x77fc[369]][_0x77fc[604]] = _0x77fc[46];
  this[_0x77fc[155]][_0x77fc[369]][_0x77fc[1779]] = _0x77fc[2985];
  /** @type {null} */
  this[_0x77fc[155]][_0x77fc[371]][_0x77fc[173]][_0x77fc[2738]] = null;
  if (this[_0x77fc[869]]) {
    this[_0x77fc[367]][_0x77fc[1340]](this[_0x77fc[869]]);
    /** @type {null} */
    this[_0x77fc[869]] = null;
  }
  let CustomTests = document[_0x77fc[383]](_0x77fc[2975]);
  CustomTests[_0x77fc[419]] = i18n[_0x77fc[2986]];
  let emoticonI18n = document[_0x77fc[383]](_0x77fc[1873]);
  emoticonI18n[_0x77fc[1194]] = i18n[_0x77fc[2987]];
  emoticonI18n[_0x77fc[604]] = getSVG(_0x77fc[2988], _0x77fc[1898], _0x77fc[46]);
  emoticonI18n[_0x77fc[1322]](_0x77fc[1228], this[_0x77fc[2949]][_0x77fc[430]](this));
  CustomTests[_0x77fc[387]](emoticonI18n);
  this[_0x77fc[155]][_0x77fc[369]][_0x77fc[387]](CustomTests);
  this[_0x77fc[866]][_0x77fc[1895]](function(dump1, dump2) {
    return dump1[_0x77fc[532]] != dump2[_0x77fc[532]] ? dump1[_0x77fc[532]] && !dump2[_0x77fc[532]] ? -1 : 1 : dump1[_0x77fc[944]] && !dump2[_0x77fc[944]] ? -1 : dump2[_0x77fc[944]] && !dump1[_0x77fc[944]] ? 1 : dump1[_0x77fc[311]][_0x77fc[2355]](dump2[_0x77fc[311]]);
  });
  let max = null;
  for (let indexLookupKey = 0; indexLookupKey < this[_0x77fc[866]][_0x77fc[237]]; ++indexLookupKey) {
    let data = this[_0x77fc[866]][indexLookupKey];
    if (max !== data[_0x77fc[532]]) {
      max = data[_0x77fc[532]];
      this[_0x77fc[155]][_0x77fc[369]][_0x77fc[387]](this[_0x77fc[2967]](max));
    }
    let helper = document[_0x77fc[383]](_0x77fc[660]);
    helper[_0x77fc[1779]] = _0x77fc[2986];
    helper[_0x77fc[312]] = _0x77fc[2945] + data[_0x77fc[311]];
    let component = document[_0x77fc[383]](_0x77fc[720]);
    component[_0x77fc[1875]] = _0x77fc[2989];
    component[_0x77fc[1792]] = _0x77fc[2990] + data[_0x77fc[311]];
    component[_0x77fc[419]] = data[_0x77fc[311]];
    helper[_0x77fc[387]](component);
    let val = document[_0x77fc[383]](_0x77fc[1873]);
    if (val[_0x77fc[1194]] = i18n[_0x77fc[2991]], val[_0x77fc[386]][_0x77fc[385]](_0x77fc[2946]), data[_0x77fc[944]] && this[_0x77fc[2947]](val, data[_0x77fc[944]]), val[_0x77fc[1322]](_0x77fc[1228], function() {
      packByNumType[_0x77fc[2973]](data[_0x77fc[311]]);
    }), helper[_0x77fc[387]](val), data[_0x77fc[532]]) {
      let o = document[_0x77fc[383]](_0x77fc[1873]);
      let t = _0x77fc[46];
      if (data[_0x77fc[972]] && this[_0x77fc[155]][_0x77fc[354]] != data[_0x77fc[972]]) {
        o[_0x77fc[1322]](_0x77fc[1228], function(canCreateDiscussions) {
          if (canCreateDiscussions[_0x77fc[1875]][_0x77fc[2626]](_0x77fc[2625])) {
            let DOM_CONTENT_LOADED = canCreateDiscussions[_0x77fc[1875]][_0x77fc[2627]](_0x77fc[2625]);
            let artistTrack = document[_0x77fc[3]](DOM_CONTENT_LOADED);
            if (artistTrack) {
              artistTrack[_0x77fc[1982]][_0x77fc[1340]](artistTrack);
            }
          }
          window[_0x77fc[1646]](data[_0x77fc[972]]);
        });
        if (data[_0x77fc[720]]) {
          t = data[_0x77fc[720]];
        }
      } else {
        o[_0x77fc[386]][_0x77fc[385]](_0x77fc[2992]);
        if (data[_0x77fc[972]]) {
          if (this[_0x77fc[155]][_0x77fc[354]] == data[_0x77fc[972]]) {
            t = i18n[_0x77fc[2993]];
          }
        } else {
          t = i18n[_0x77fc[2994]];
        }
      }
      if (t && _0x77fc[1521] == typeof $) {
        $(o)[_0x77fc[2966]]({
          title : t,
          template : this[_0x77fc[2965]](_0x77fc[2964]),
          html : true,
          viewport : {
            selector : _0x77fc[1341],
            padding : -1E4
          }
        });
      }
      o[_0x77fc[386]][_0x77fc[385]](_0x77fc[2995]);
      helper[_0x77fc[387]](o);
    }
    this[_0x77fc[155]][_0x77fc[369]][_0x77fc[387]](helper);
  }
}, Friends[_0x77fc[170]][_0x77fc[2972]] = function(i, isSlidingUp) {
  if (this[_0x77fc[863]]) {
    this[_0x77fc[155]][_0x77fc[369]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[2329];
    this[_0x77fc[155]][_0x77fc[369]][_0x77fc[604]] = _0x77fc[46];
    var artistTrack = document[_0x77fc[383]](_0x77fc[2374]);
    if (isSlidingUp) {
      if (1 === isSlidingUp) {
        artistTrack[_0x77fc[38]] = CDN_URL(_0x77fc[2756]);
      }
    } else {
      artistTrack[_0x77fc[38]] = CDN_URL(_0x77fc[2375]);
    }
    artistTrack[_0x77fc[173]][_0x77fc[388]] = _0x77fc[2696];
    var uniqueLinks = document[_0x77fc[383]](_0x77fc[382]);
    uniqueLinks[_0x77fc[604]] = i;
    this[_0x77fc[155]][_0x77fc[369]][_0x77fc[387]](artistTrack);
    this[_0x77fc[155]][_0x77fc[369]][_0x77fc[387]](uniqueLinks);
    this[_0x77fc[155]][_0x77fc[369]][_0x77fc[1779]] = _0x77fc[2996];
  }
}, Friends[_0x77fc[170]][_0x77fc[2939]] = function(canCreateDiscussions) {
  if (this[_0x77fc[155]][_0x77fc[369]][_0x77fc[1779]] = _0x77fc[46], canCreateDiscussions === this[_0x77fc[875]][_0x77fc[2997]]) {
    this[_0x77fc[2972]](i18n[_0x77fc[2998]]);
  } else {
    if (canCreateDiscussions === this[_0x77fc[875]][_0x77fc[2999]]) {
      this[_0x77fc[2972]](i18n[_0x77fc[3E3]], 1);
    } else {
      if (canCreateDiscussions === this[_0x77fc[875]][_0x77fc[3001]]) {
        let groupNamePrefix = _0x77fc[3002];
        let dupeNameCount = _0x77fc[3003];
        this[_0x77fc[2972]](groupNamePrefix + _0x77fc[2225] + dupeNameCount, 1);
      } else {
        if (canCreateDiscussions === this[_0x77fc[875]][_0x77fc[3004]]) {
          this[_0x77fc[155]][_0x77fc[369]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[2329];
          this[_0x77fc[155]][_0x77fc[369]][_0x77fc[604]] = _0x77fc[2334] + i18n[_0x77fc[3005]] + _0x77fc[2336] + i18n[_0x77fc[3006]];
          this[_0x77fc[155]][_0x77fc[369]][_0x77fc[1779]] = _0x77fc[2996];
        } else {
          if (canCreateDiscussions === this[_0x77fc[875]][_0x77fc[3007]]) {
            this[_0x77fc[2949]]();
            this[_0x77fc[155]][_0x77fc[369]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174];
            this[_0x77fc[2984]]();
            if (this[_0x77fc[866]] && this[_0x77fc[866]][_0x77fc[237]] > 2 && this[_0x77fc[367]][_0x77fc[1265]] < 140 && !this[_0x77fc[155]][_0x77fc[338]][_0x77fc[12]][_0x77fc[641]]) {
              this[_0x77fc[155]][_0x77fc[338]][_0x77fc[12]][_0x77fc[608]]();
            }
          } else {
            if (canCreateDiscussions === this[_0x77fc[875]][_0x77fc[3008]]) {
              if (!this[_0x77fc[863]]) {
                return;
              }
              if (this[_0x77fc[367]][_0x77fc[1265]] < 153 && !this[_0x77fc[155]][_0x77fc[338]][_0x77fc[12]][_0x77fc[641]]) {
                this[_0x77fc[155]][_0x77fc[338]][_0x77fc[12]][_0x77fc[608]]();
              }
              this[_0x77fc[155]][_0x77fc[369]][_0x77fc[604]] = _0x77fc[3009] + i18n[_0x77fc[3010]] + _0x77fc[3011] + i18n[_0x77fc[3012]] + _0x77fc[3013] + i18n[_0x77fc[3014]] + _0x77fc[3013] + trans(i18n[_0x77fc[3015]], {
                frPage : _0x77fc[3016] + i18n[_0x77fc[3017]] + _0x77fc[1697]
              }) + _0x77fc[3018];
              let emoticonI18n = document[_0x77fc[383]](_0x77fc[1873]);
              emoticonI18n[_0x77fc[419]] = i18n[_0x77fc[3019]];
              emoticonI18n[_0x77fc[173]][_0x77fc[2477]] = _0x77fc[175];
              emoticonI18n[_0x77fc[173]][_0x77fc[2764]] = _0x77fc[3020];
              emoticonI18n[_0x77fc[1322]](_0x77fc[1228], this[_0x77fc[2948]][_0x77fc[430]](this));
              this[_0x77fc[155]][_0x77fc[369]][_0x77fc[387]](emoticonI18n);
              localStorage[_0x77fc[1940]](_0x77fc[3021], 1);
            }
          }
        }
      }
    }
  }
}, Friends[_0x77fc[170]][_0x77fc[876]] = function() {
  return null === localStorage[_0x77fc[1941]](_0x77fc[3021]);
}, Friends[_0x77fc[170]][_0x77fc[2948]] = function() {
  if (this[_0x77fc[876]]()) {
    this[_0x77fc[2939]](this[_0x77fc[875]].INTRO);
  } else {
    if (this[_0x77fc[155]][_0x77fc[332]]) {
      if (1 === this[_0x77fc[873]]) {
        this[_0x77fc[2939]](this[_0x77fc[875]].TOO_MANY_CONN);
      } else {
        if (0 === this[_0x77fc[864]]) {
          this[_0x77fc[2939]](this[_0x77fc[875]].NO_FRIENDS);
        } else {
          if (null === this[_0x77fc[864]] || null === this[_0x77fc[866]]) {
            this[_0x77fc[2939]](this[_0x77fc[875]].FRIEND_LIST_LOADING);
          } else {
            this[_0x77fc[2939]](this[_0x77fc[875]].FRIEND_LIST);
          }
        }
      }
    } else {
      this[_0x77fc[2939]](this[_0x77fc[875]].LOGIN_FIRST);
    }
  }
}, Friends[_0x77fc[170]][_0x77fc[867]] = function() {
  if (this[_0x77fc[863]] = !this[_0x77fc[863]], hideElem(this[_0x77fc[868]]), this[_0x77fc[863]] ? (this[_0x77fc[155]][_0x77fc[373]][_0x77fc[1779]] = _0x77fc[3022], this[_0x77fc[155]][_0x77fc[367]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175], this[_0x77fc[155]][_0x77fc[2181]](), this[_0x77fc[155]][_0x77fc[373]][_0x77fc[2621]](_0x77fc[2619], _0x77fc[3023]), this[_0x77fc[367]][_0x77fc[1265]] < 100 && !this[_0x77fc[155]][_0x77fc[338]][_0x77fc[12]][_0x77fc[641]] && this[_0x77fc[155]][_0x77fc[338]][_0x77fc[12]][_0x77fc[608]](), 
  this[_0x77fc[2948]]()) : (this[_0x77fc[155]][_0x77fc[373]][_0x77fc[1779]] = _0x77fc[3024], this[_0x77fc[155]][_0x77fc[367]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[174], this[_0x77fc[155]][_0x77fc[369]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175], this[_0x77fc[155]][_0x77fc[371]][_0x77fc[173]][_0x77fc[2738]] = null, this[_0x77fc[155]][_0x77fc[375]][_0x77fc[1600]] = _0x77fc[46], this[_0x77fc[869]] && (this[_0x77fc[367]][_0x77fc[1340]](this[_0x77fc[869]]), this[_0x77fc[869]] = null), this[_0x77fc[155]][_0x77fc[373]][_0x77fc[2621]](_0x77fc[2619], 
  _0x77fc[459]), this[_0x77fc[155]][_0x77fc[1988]](true)), this[_0x77fc[155]][_0x77fc[373]][_0x77fc[2626]](_0x77fc[2625])) {
    let DOM_CONTENT_LOADED = this[_0x77fc[155]][_0x77fc[373]][_0x77fc[2627]](_0x77fc[2625]);
    hideElem(document[_0x77fc[3]](DOM_CONTENT_LOADED));
  }
}, Friends[_0x77fc[170]][_0x77fc[1654]] = function() {
  this[_0x77fc[2930]]();
}, function() {
  /**
   * @param {?} forum
   * @param {?} courseId
   * @param {?} canCreateDiscussions
   * @return {undefined}
   */
  function prefetchGroupsInfo(forum, courseId, canCreateDiscussions) {
    item[_0x77fc[239]][1][_0x77fc[600]] = forum;
    item[_0x77fc[239]][1][_0x77fc[609]] = courseId;
    item[_0x77fc[239]][1][_0x77fc[902]] = false;
    item[_0x77fc[166]](1);
    if (canCreateDiscussions && canCreateDiscussions[_0x77fc[3053]]) {
      item[_0x77fc[12]][_0x77fc[635]] = item[_0x77fc[239]][1];
      item[_0x77fc[12]][_0x77fc[629]][_0x77fc[1097]](function(canCreateDiscussions) {
        canCreateDiscussions[_0x77fc[6]][_0x77fc[166]](1);
      });
    }
  }
  /**
   * @param {?} mmCoreSplitViewBlock
   * @param {?} $state
   * @return {undefined}
   */
  function $get(mmCoreSplitViewBlock, $state) {
    $state = $state || {};
    if (_0x77fc[192] === item[_0x77fc[6]][_0x77fc[185]]) {
      if (_0x77fc[3054] !== mmCoreSplitViewBlock[_0x77fc[1514]](_0x77fc[1812])[_0x77fc[2660]]()) {
        item[_0x77fc[6]][_0x77fc[1355]](mmCoreSplitViewBlock, $state);
      } else {
        item[_0x77fc[6]][_0x77fc[1335]](mmCoreSplitViewBlock, $state);
      }
    } else {
      alert(_0x77fc[3055]);
    }
  }
  /**
   * @param {?} value
   * @param {?} i
   * @return {undefined}
   */
  function QueryStringParser$placeNestedValue(value, i) {
    item[_0x77fc[909]](value, i);
  }
  /**
   * @param {?} options
   * @return {undefined}
   */
  function UkkioSDK(options) {
    item[_0x77fc[155]][_0x77fc[1646]](options);
  }
  /**
   * @return {undefined}
   */
  window[_0x77fc[2416]] = function() {
    /**
     * @return {undefined}
     */
    function getSectionsData() {
      _0xe1a7x3b[_0x77fc[173]][_0x77fc[3052]] = _0x77fc[175];
      _0xe1a7x3a = true;
      setTimeout(function() {
        _0xe1a7x3a = false;
      }, 100);
    }
    (item = new Game)[_0x77fc[1021]]();
    settingsTabs[_0x77fc[152]]();
    document[_0x77fc[1322]](_0x77fc[2534], item[_0x77fc[1055]][_0x77fc[430]](item), false);
    document[_0x77fc[1322]](_0x77fc[2537], item[_0x77fc[1079]][_0x77fc[430]](item), false);
    document[_0x77fc[3]](_0x77fc[569])[_0x77fc[1322]](_0x77fc[1228], function() {
      item[_0x77fc[1054]](0);
    }, true);
    document[_0x77fc[3]](_0x77fc[413])[_0x77fc[1322]](_0x77fc[1228], function() {
      item[_0x77fc[1054]](1);
    }, true);
    document[_0x77fc[3]](_0x77fc[536])[_0x77fc[1322]](_0x77fc[1228], function() {
      item[_0x77fc[1054]](1);
    }, true);
    document[_0x77fc[3]](_0x77fc[367])[_0x77fc[1322]](_0x77fc[1228], function() {
      item[_0x77fc[1054]](1);
    }, true);
    document[_0x77fc[3]](_0x77fc[367])[_0x77fc[1322]](_0x77fc[2588], item[_0x77fc[155]][_0x77fc[2178]][_0x77fc[430]](item.Live), true);
    document[_0x77fc[3]](_0x77fc[404])[_0x77fc[1322]](_0x77fc[1228], function() {
      item[_0x77fc[1054]](1);
    }, true);
    document[_0x77fc[3]](_0x77fc[2305])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1497]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[3025])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1497]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[3026])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1590]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[3027])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1554]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[411])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1553]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[1463])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1466]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[407])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1477]][_0x77fc[430]](item.Live);
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[2275])[_0x77fc[563]] = function() {
      item[_0x77fc[150]][_0x77fc[2389]]();
      item[_0x77fc[1054]](1);
    };
    document[_0x77fc[3]](_0x77fc[380])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1060]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[3028])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1466]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[3029])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1649]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[171])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[1615]][_0x77fc[430]](item.Live);
    document[_0x77fc[3]](_0x77fc[378])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[2182]][_0x77fc[430]](item.Live);
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[2])[_0x77fc[563]] = function() {
      if (!item[_0x77fc[155]][_0x77fc[336]] && item[_0x77fc[105]]) {
        item[_0x77fc[854]]();
      }
      item[_0x77fc[1054]](0);
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[375])[_0x77fc[563]] = function() {
      item[_0x77fc[1054]](1);
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[375])[_0x77fc[3030]] = function() {
      item[_0x77fc[1054]](1);
    };
    document[_0x77fc[3]](_0x77fc[375])[_0x77fc[1322]](_0x77fc[2534], function(canCreateDiscussions) {
      if (13 === canCreateDiscussions[_0x77fc[1056]]) {
        item[_0x77fc[155]][_0x77fc[2182]]();
      }
    });
    document[_0x77fc[3]](_0x77fc[2304])[_0x77fc[563]] = item[_0x77fc[155]][_0x77fc[976]][_0x77fc[430]](item.Live, false);
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[1573])[_0x77fc[563]] = function() {
      document[_0x77fc[3]](_0x77fc[1575])[_0x77fc[1501]] = !document[_0x77fc[3]](_0x77fc[1573])[_0x77fc[621]];
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[2395])[_0x77fc[563]] = function() {
      item[_0x77fc[118]] = document[_0x77fc[3]](_0x77fc[2395])[_0x77fc[621]];
      if (item[_0x77fc[50]] && item[_0x77fc[118]]) {
        item[_0x77fc[856]]();
        item[_0x77fc[854]]();
      }
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[1621])[_0x77fc[563]] = function() {
      item[_0x77fc[155]][_0x77fc[1526]](0);
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[3031])[_0x77fc[563]] = function() {
      item[_0x77fc[155]][_0x77fc[1526]](1);
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[1616])[_0x77fc[563]] = function() {
      item[_0x77fc[155]][_0x77fc[1526]](2);
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[1502])[_0x77fc[563]] = function() {
      item[_0x77fc[155]][_0x77fc[1502]]();
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[3032])[_0x77fc[563]] = function() {
      this[_0x77fc[2318]][_0x77fc[173]][_0x77fc[172]] = _0x77fc[175];
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[1558])[_0x77fc[563]] = function() {
      showElem(document[_0x77fc[3]](_0x77fc[1596]));
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[3033])[_0x77fc[563]] = function() {
      hideElem(document[_0x77fc[3]](_0x77fc[1596]));
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[1509])[_0x77fc[588]] = function() {
      item[_0x77fc[155]][_0x77fc[1604]]();
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[1538])[_0x77fc[588]] = function() {
      item[_0x77fc[155]][_0x77fc[1537]]();
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[3034])[_0x77fc[563]] = function() {
      item[_0x77fc[155]][_0x77fc[1543]]();
    };
    document[_0x77fc[3]](_0x77fc[2482])[_0x77fc[563]] = item[_0x77fc[150]][_0x77fc[2482]][_0x77fc[430]](item.Settings);
    document[_0x77fc[3]](_0x77fc[547])[_0x77fc[588]] = soundCredits;
    document[_0x77fc[3]](_0x77fc[548])[_0x77fc[588]] = soundCredits;
    document[_0x77fc[3]](_0x77fc[608])[_0x77fc[563]] = item[_0x77fc[12]][_0x77fc[608]][_0x77fc[430]](item.GS);
    window[_0x77fc[1322]](_0x77fc[3035], function() {
      item[_0x77fc[1202]](0);
    }, false);
    window[_0x77fc[1322]](_0x77fc[1058], function() {
      item[_0x77fc[1202]](1);
    }, false);
    window[_0x77fc[1322]](_0x77fc[3036], item[_0x77fc[150]][_0x77fc[2522]][_0x77fc[430]](item.Settings));
    window[_0x77fc[1322]](_0x77fc[3037], item[_0x77fc[150]][_0x77fc[2529]][_0x77fc[430]](item.Settings));
    document[_0x77fc[3]](_0x77fc[2474])[_0x77fc[1322]](_0x77fc[573], function() {
      item[_0x77fc[150]][_0x77fc[2397]](this[_0x77fc[601]]);
    });
    document[_0x77fc[3]](_0x77fc[3038])[_0x77fc[1322]](_0x77fc[1228], function() {
      var _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[3038]);
      var container = document[_0x77fc[3]](_0x77fc[3039]);
      _0xe1a7x4[_0x77fc[386]][_0x77fc[1934]](_0x77fc[3040]);
      _0xe1a7x4[_0x77fc[386]][_0x77fc[1934]](_0x77fc[3041]);
      toggleElem(container);
    }, false);
    document[_0x77fc[3]](_0x77fc[3039])[_0x77fc[1322]](_0x77fc[1228], function(canCreateDiscussions) {
      canCreateDiscussions[_0x77fc[1061]]();
    }, false);
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[624])[_0x77fc[588]] = function() {
      var whiteRating = parseInt(document[_0x77fc[3]](_0x77fc[624])[_0x77fc[601]]);
      document[_0x77fc[3]](_0x77fc[3042])[_0x77fc[604]] = whiteRating + _0x77fc[513];
      item[_0x77fc[12]][_0x77fc[2247]][_0x77fc[143]](item.GS, whiteRating);
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[622])[_0x77fc[563]] = function() {
      item[_0x77fc[12]][_0x77fc[2102]][_0x77fc[143]](item.GS, document[_0x77fc[3]](_0x77fc[622])[_0x77fc[621]]);
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[623])[_0x77fc[563]] = function() {
      item[_0x77fc[12]][_0x77fc[619]] = document[_0x77fc[3]](_0x77fc[623])[_0x77fc[621]];
      item[_0x77fc[12]][_0x77fc[1748]][_0x77fc[143]](item.GS);
    };
    /**
     * @return {undefined}
     */
    document[_0x77fc[3]](_0x77fc[3043])[_0x77fc[563]] = function() {
      item[_0x77fc[12]][_0x77fc[620]] = document[_0x77fc[3]](_0x77fc[3043])[_0x77fc[621]];
      item[_0x77fc[12]][_0x77fc[1748]][_0x77fc[143]](item.GS);
    };
    window[_0x77fc[1646]] = UkkioSDK;
    window[_0x77fc[3044]] = prefetchGroupsInfo;
    window[_0x77fc[3045]] = $get;
    window[_0x77fc[900]] = item[_0x77fc[900]][_0x77fc[430]](item);
    window[_0x77fc[3046]] = QueryStringParser$placeNestedValue;
    /** @type {number} */
    var indexLookupKey = 0;
    for (; indexLookupKey < document[_0x77fc[3047]][_0x77fc[2460]][_0x77fc[237]]; indexLookupKey++) {
      /**
       * @return {undefined}
       */
      document[_0x77fc[3047]][_0x77fc[2460]][indexLookupKey][_0x77fc[563]] = function() {
        item[_0x77fc[150]][_0x77fc[2461]](parseInt(this[_0x77fc[601]]));
      };
    }
    /**
     * @return {undefined}
     */
    var selectorText = function() {
      try {
        if (createjs[_0x77fc[32]][_0x77fc[3048]] && _0x77fc[3049] === createjs[_0x77fc[32]][_0x77fc[3048]][_0x77fc[2154]]) {
          createjs[_0x77fc[32]][_0x77fc[3048]][_0x77fc[3050]]();
          window[_0x77fc[2481]](_0x77fc[1228], selectorText);
        }
      } catch (previousState) {
        console[_0x77fc[935]](_0x77fc[3051]);
        console[_0x77fc[935]](previousState);
      }
    };
    window[_0x77fc[1322]](_0x77fc[1228], selectorText);
    var _takingTooLongTimeout;
    var _0xe1a7x3a = false;
    var _0xe1a7x3b = document[_0x77fc[3]](_0x77fc[569]);
    _0xe1a7x3b[_0x77fc[1322]](_0x77fc[2838], function() {
      if (!_0xe1a7x3a) {
        _0xe1a7x3a = false;
        clearTimeout(_takingTooLongTimeout);
        /** @type {null} */
        _0xe1a7x3b[_0x77fc[173]][_0x77fc[3052]] = null;
        _takingTooLongTimeout = setTimeout(getSectionsData, 3E3);
      }
    });
  };
  var item = void 0;
  if (_0x77fc[1521] == typeof $) {
    $(_0x77fc[3056])[_0x77fc[2966]]({
      viewport : {
        selector : _0x77fc[1341],
        padding : -1E4
      }
    });
  }
}(), ChatAutocomplete[_0x77fc[170]][_0x77fc[3057]] = function() {
  this[_0x77fc[881]] = {};
  /** @type {!Array} */
  this[_0x77fc[880]] = [];
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[882]] = function() {
  this[_0x77fc[881]] = {};
  this[_0x77fc[880]] = Object[_0x77fc[1207]](this[_0x77fc[881]]);
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[3058]] = function(unscreenedStyles) {
  const costSum = this[_0x77fc[884]];
  for (const folder of unscreenedStyles) {
    let folderEntity = costSum + folder[_0x77fc[311]] + costSum;
    this[_0x77fc[880]][_0x77fc[308]](folderEntity);
    if (folder[_0x77fc[2346]]) {
      this[_0x77fc[881]][folderEntity] = folder[_0x77fc[2346]];
    } else {
      this[_0x77fc[881]][folderEntity] = _0x77fc[3059] + folder[_0x77fc[311]] + _0x77fc[1684];
    }
  }
  this[_0x77fc[889]] = true;
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[1785]] = function(geoportal) {
  if (!this[_0x77fc[889]]) {
    var xhr = new XMLHttpRequest;
    var url = _0x77fc[3060] + geoportal;
    /** @type {number} */
    xhr[_0x77fc[2408]] = 8E3;
    xhr[_0x77fc[1549]](_0x77fc[1547], url, true);
    try {
      xhr[_0x77fc[1522]]();
    } catch (_0xe1a7x4) {
    }
    var command_codes = this;
    /**
     * @return {undefined}
     */
    xhr[_0x77fc[2414]] = function() {
    };
    xhr[_0x77fc[2061]] = xhr[_0x77fc[2415]] = function() {
    };
    /**
     * @return {undefined}
     */
    xhr[_0x77fc[2416]] = function() {
      if (200 === xhr[_0x77fc[1658]]) {
        let data = JSON[_0x77fc[1546]](xhr[_0x77fc[1545]]);
        if (null !== command_codes[_0x77fc[887]]) {
          data = command_codes[_0x77fc[887]](data);
        }
        command_codes[_0x77fc[3058]](data);
        if (null !== command_codes[_0x77fc[888]]) {
          command_codes[_0x77fc[888]](data);
        }
      }
    };
  }
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[152]] = function() {
  var directiveProcessors = this;
  this[_0x77fc[877]][_0x77fc[1322]](_0x77fc[573], function(canCreateDiscussions) {
    var $node = directiveProcessors[_0x77fc[3061]]();
    directiveProcessors[_0x77fc[3062]]($node);
  }, false);
  if (_0x77fc[46] === this[_0x77fc[879]]) {
    this[_0x77fc[877]][_0x77fc[1322]](_0x77fc[1058], function(canCreateDiscussions) {
      var $node = directiveProcessors[_0x77fc[3061]]();
      directiveProcessors[_0x77fc[3062]]($node);
    });
  }
  this[_0x77fc[877]][_0x77fc[1322]](_0x77fc[2534], function(canCreateDiscussions) {
    if (_0x77fc[175] !== directiveProcessors[_0x77fc[891]][_0x77fc[173]][_0x77fc[172]]) {
      if (38 === canCreateDiscussions[_0x77fc[1056]] || 40 === canCreateDiscussions[_0x77fc[1056]]) {
        directiveProcessors[_0x77fc[3063]](38 === canCreateDiscussions[_0x77fc[1056]] ? -1 : 1);
        canCreateDiscussions[_0x77fc[1059]]();
      } else {
        if (13 === canCreateDiscussions[_0x77fc[1056]] && null !== this[_0x77fc[890]]) {
          directiveProcessors[_0x77fc[891]][_0x77fc[1474]][directiveProcessors[_0x77fc[890]]][_0x77fc[1228]]();
          canCreateDiscussions[_0x77fc[1059]]();
          canCreateDiscussions[_0x77fc[1061]]();
        }
      }
    }
  }, true);
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[3063]] = function(step) {
  var shape = this[_0x77fc[891]][_0x77fc[1474]];
  this[_0x77fc[891]][_0x77fc[1474]][this[_0x77fc[890]]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[3064]);
  this[_0x77fc[890]] = (shape[_0x77fc[237]] + this[_0x77fc[890]] + step) % shape[_0x77fc[237]];
  this[_0x77fc[3065]](this[_0x77fc[890]]);
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[3065]] = function(canCreateDiscussions) {
  if (canCreateDiscussions >= this[_0x77fc[891]][_0x77fc[1474]][_0x77fc[237]]) {
    /** @type {null} */
    this[_0x77fc[890]] = null;
  } else {
    this[_0x77fc[890]] = canCreateDiscussions;
    this[_0x77fc[891]][_0x77fc[1474]][this[_0x77fc[890]]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3064]);
  }
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[3062]] = function(componentStack) {
  var nameStr = componentStack[0][_0x77fc[3066]]();
  var parentComponentDef = componentStack[1];
  if (_0x77fc[46] !== this[_0x77fc[879]] && (null === nameStr || nameStr[_0x77fc[237]] < this[_0x77fc[427]] || nameStr[0] !== this[_0x77fc[879]])) {
    hideElem(this[_0x77fc[891]]);
  } else {
    name = name;
    var req = nameStr[_0x77fc[1045]](this[_0x77fc[879]][_0x77fc[237]]);
    var name = this[_0x77fc[433]] ? nameStr : req;
    /** @type {number} */
    var _0xe1a7x1e = 0;
    var headerArray = _0x77fc[1521] == typeof this[_0x77fc[880]] ? this[_0x77fc[880]]() : this[_0x77fc[880]];
    this[_0x77fc[891]][_0x77fc[604]] = _0x77fc[46];
    /** @type {!Array} */
    var set = [];
    /** @type {!Array} */
    var array = [];
    var hdrIndex;
    for (hdrIndex in headerArray) {
      var exports = (value = headerArray[hdrIndex])[_0x77fc[3066]]();
      if (exports[_0x77fc[1231]](name)) {
        set[_0x77fc[308]](value);
      } else {
        if (req[_0x77fc[237]] >= 2 && exports[_0x77fc[2904]](req)) {
          array[_0x77fc[308]](value);
        }
      }
    }
    if (set[_0x77fc[1895]](), set[_0x77fc[237]] < this[_0x77fc[883]]) {
      array[_0x77fc[1895]]();
      for (const value of array) {
        if (-1 === set[_0x77fc[315]](value) && (set[_0x77fc[308]](value), set[_0x77fc[237]] >= this[_0x77fc[883]])) {
          break;
        }
      }
    }
    var value;
    for (value of set) {
      var that = document[_0x77fc[383]](_0x77fc[660]);
      if (this[_0x77fc[881]] && this[_0x77fc[881]][value]) {
        that[_0x77fc[1779]] = _0x77fc[3067];
        var hoverItem = document[_0x77fc[383]](_0x77fc[2374]);
        hoverItem[_0x77fc[38]] = CDN_URL(_0x77fc[1504] + this[_0x77fc[881]][value]);
        that[_0x77fc[387]](hoverItem);
        var option = document[_0x77fc[383]](_0x77fc[660]);
        option[_0x77fc[419]] = value;
        that[_0x77fc[387]](option);
      } else {
        that[_0x77fc[604]] = value;
      }
      that[_0x77fc[1541]][_0x77fc[1089]] = parentComponentDef;
      that[_0x77fc[1541]][_0x77fc[1020]] = value;
      var _0xe1a7x41 = this;
      if (that[_0x77fc[1322]](_0x77fc[1228], function(canCreateDiscussions) {
        var inBtn = _0xe1a7x41[_0x77fc[877]][_0x77fc[601]];
        var d = parseInt(this[_0x77fc[1541]][_0x77fc[1089]]);
        var VoiceEffects = inBtn[_0x77fc[1045]](0, d);
        var time = VoiceEffects[_0x77fc[315]](_0x77fc[1555]);
        var lastTime = time + 1;
        for (; -1 !== time;) {
          if (-1 !== (time = VoiceEffects[_0x77fc[315]](_0x77fc[1555], time + 1))) {
            lastTime = time + 1;
          }
        }
        if (!_0xe1a7x41[_0x77fc[433]]) {
          ++lastTime;
        }
        _0xe1a7x41[_0x77fc[877]][_0x77fc[601]] = inBtn[_0x77fc[1045]](0, lastTime) + this[_0x77fc[1541]][_0x77fc[1020]] + _0x77fc[1555] + inBtn[_0x77fc[1045]](d);
        _0xe1a7x41[_0x77fc[877]][_0x77fc[1058]]();
        _0xe1a7x41[_0x77fc[3068]](d + this[_0x77fc[1541]][_0x77fc[1020]][_0x77fc[237]] + 1 - (d - lastTime));
        hideElem(_0xe1a7x41[_0x77fc[891]]);
        if (_0xe1a7x41[_0x77fc[885]]) {
          _0xe1a7x41[_0x77fc[877]][_0x77fc[601]] = this[_0x77fc[1541]][_0x77fc[1020]];
          if (_0xe1a7x41[_0x77fc[886]]) {
            _0xe1a7x41[_0x77fc[886]](this[_0x77fc[1541]][_0x77fc[1020]]);
          }
        }
      }, false), this[_0x77fc[891]][_0x77fc[387]](that), ++_0xe1a7x1e >= this[_0x77fc[883]]) {
        break;
      }
    }
    this[_0x77fc[3065]](0);
    if (_0xe1a7x1e) {
      showElem(this[_0x77fc[891]]);
    } else {
      hideElem(this[_0x77fc[891]]);
    }
  }
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[3069]] = function(boardManager, startColumn) {
  var existingFold = boardManager[_0x77fc[1045]](0, startColumn);
  if (existingFold[_0x77fc[315]](_0x77fc[1555]) > 0) {
    var _0xe1a7x12 = existingFold[_0x77fc[1514]](_0x77fc[1555]);
    return _0xe1a7x12[_0xe1a7x12[_0x77fc[237]] - 1];
  }
  return existingFold;
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[3061]] = function() {
  var artistTrack = this.GetCaretPosition(this[_0x77fc[877]]);
  return [this.ReturnWord(this[_0x77fc[877]][_0x77fc[601]], artistTrack), artistTrack];
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[3070]] = function(tagsWithShortcuts) {
  /** @type {number} */
  var tagOrShortcut = 0;
  if (document[_0x77fc[3071]]) {
    tagsWithShortcuts[_0x77fc[1058]]();
    var _0xe1a7x8 = document[_0x77fc[3071]][_0x77fc[3072]]();
    _0xe1a7x8[_0x77fc[3074]](_0x77fc[3073], -tagsWithShortcuts[_0x77fc[601]][_0x77fc[237]]);
    tagOrShortcut = _0xe1a7x8[_0x77fc[3075]][_0x77fc[237]];
  } else {
    if (tagsWithShortcuts[_0x77fc[3076]] || _0x77fc[525] == tagsWithShortcuts[_0x77fc[3076]]) {
      tagOrShortcut = tagsWithShortcuts[_0x77fc[3076]];
    }
  }
  return tagOrShortcut;
}, ChatAutocomplete[_0x77fc[170]][_0x77fc[3068]] = function(n) {
  if (n = Math[_0x77fc[1080]](Math[_0x77fc[1148]](n, this[_0x77fc[877]][_0x77fc[601]][_0x77fc[237]]), 0), this[_0x77fc[877]][_0x77fc[3077]]) {
    var comparator = this[_0x77fc[877]][_0x77fc[3077]]();
    comparator[_0x77fc[3074]](_0x77fc[3073], n);
    comparator[_0x77fc[3078]]();
    comparator[_0x77fc[1507]]();
  } else {
    this[_0x77fc[877]][_0x77fc[1058]]();
    this[_0x77fc[877]][_0x77fc[3079]](n, n);
  }
}, Matrix[_0x77fc[3080]] = function(args, data, result) {
  result = result || new Float32Array(16);
  var row = data[0];
  var col = data[1];
  var c = data[2];
  var dy = data[3];
  var x = data[4];
  var v = data[5];
  var f = data[6];
  var value = data[7];
  var y = data[8];
  var height = data[9];
  var alpha = data[10];
  var val = data[11];
  var ratio = data[12];
  var i = data[13];
  var n = data[14];
  var speed = data[15];
  var width = args[0];
  var scale = args[1];
  var h = args[2];
  var WIDTH = args[3];
  var stride = args[4];
  var s = args[5];
  var w = args[6];
  var size = args[7];
  var angle = args[8];
  var step = args[9];
  var t = args[10];
  var p = args[11];
  var k = args[12];
  var scaleFactor = args[13];
  var multiplier = args[14];
  var level = args[15];
  return result[0] = row * width + col * stride + c * angle + dy * k, result[1] = row * scale + col * s + c * step + dy * scaleFactor, result[2] = row * h + col * w + c * t + dy * multiplier, result[3] = row * WIDTH + col * size + c * p + dy * level, result[4] = x * width + v * stride + f * angle + value * k, result[5] = x * scale + v * s + f * step + value * scaleFactor, result[6] = x * h + v * w + f * t + value * multiplier, result[7] = x * WIDTH + v * size + f * p + value * level, result[8] = 
  y * width + height * stride + alpha * angle + val * k, result[9] = y * scale + height * s + alpha * step + val * scaleFactor, result[10] = y * h + height * w + alpha * t + val * multiplier, result[11] = y * WIDTH + height * size + alpha * p + val * level, result[12] = ratio * width + i * stride + n * angle + speed * k, result[13] = ratio * scale + i * s + n * step + speed * scaleFactor, result[14] = ratio * h + i * w + n * t + speed * multiplier, result[15] = ratio * WIDTH + i * size + n * p + 
  speed * level, result;
}, Matrix[_0x77fc[1326]] = function(far, near, right, left, farVal, nearVal, result) {
  return (result = result || new Float32Array(16))[0] = 2 / (near - far), result[1] = 0, result[2] = 0, result[3] = 0, result[4] = 0, result[5] = 2 / (left - right), result[6] = 0, result[7] = 0, result[8] = 0, result[9] = 0, result[10] = 2 / (farVal - nearVal), result[11] = 0, result[12] = (far + near) / (far - near), result[13] = (right + left) / (right - left), result[14] = (farVal + nearVal) / (farVal - nearVal), result[15] = 1, result;
}, Matrix[_0x77fc[1327]] = function(data, x, f, daysInterval, result) {
  result = result || new Float32Array(16);
  var e = data[0];
  var g = data[1];
  var x0 = data[2];
  var a = data[3];
  var y = data[4];
  var h = data[5];
  var t = data[6];
  var b = data[7];
  var mmCoreSecondsDay = data[8];
  var passid = data[9];
  var dt1v = data[10];
  var fileStatus = data[11];
  var px = data[12];
  var width = data[13];
  var value = data[14];
  var lib = data[15];
  return data !== result && (result[0] = e, result[1] = g, result[2] = x0, result[3] = a, result[4] = y, result[5] = h, result[6] = t, result[7] = b, result[8] = mmCoreSecondsDay, result[9] = passid, result[10] = dt1v, result[11] = fileStatus), result[12] = e * x + y * f + mmCoreSecondsDay * daysInterval + px, result[13] = g * x + h * f + passid * daysInterval + width, result[14] = x0 * x + t * f + dt1v * daysInterval + value, result[15] = a * x + b * f + fileStatus * daysInterval + lib, result;
}, Matrix[_0x77fc[225]] = function(v, scalar, r, a, result) {
  return (result = result || new Float32Array(16))[0] = scalar * v[0], result[1] = scalar * v[1], result[2] = scalar * v[2], result[3] = scalar * v[3], result[4] = r * v[4], result[5] = r * v[5], result[6] = r * v[6], result[7] = r * v[7], result[8] = a * v[8], result[9] = a * v[9], result[10] = a * v[10], result[11] = a * v[11], v !== result && (result[12] = v[12], result[13] = v[13], result[14] = v[14], result[15] = v[15]), result;
}, Matrix[_0x77fc[1329]] = function(resolvedViewModel, fragmentPointer, resolvedTemplate, result) {
  return (result = result || new Float32Array(16))[0] = 1, result[1] = 0, result[2] = 0, result[3] = 0, result[4] = 0, result[5] = 1, result[6] = 0, result[7] = 0, result[8] = 0, result[9] = 0, result[10] = 1, result[11] = 0, result[12] = resolvedViewModel, result[13] = fragmentPointer, result[14] = resolvedTemplate, result[15] = 1, result;
}, function(metaWindow) {
  /**
   * @param {?} data
   * @param {number} timeout
   * @return {?}
   */
  function getterSelector(data, timeout) {
    var pivot;
    var center;
    var hash;
    var _0xe1a7x1e;
    var c2;
    var c1;
    var k1;
    var i;
    pivot = 3 & data[_0x77fc[237]];
    center = data[_0x77fc[237]] - pivot;
    hash = timeout;
    /** @type {number} */
    c2 = 3432918353;
    /** @type {number} */
    c1 = 461845907;
    /** @type {number} */
    i = 0;
    for (; i < center;) {
      k1 = 255 & data[_0x77fc[3088]](i) | (255 & data[_0x77fc[3088]](++i)) << 8 | (255 & data[_0x77fc[3088]](++i)) << 16 | (255 & data[_0x77fc[3088]](++i)) << 24;
      ++i;
      hash = 27492 + (65535 & (_0xe1a7x1e = 5 * (65535 & (hash = (hash = hash ^ (k1 = (65535 & (k1 = (k1 = (65535 & k1) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295) << 15 | k1 >>> 17)) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295)) << 13 | hash >>> 19)) + ((5 * (hash >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (_0xe1a7x1e >>> 16) & 65535) << 16);
    }
    switch(k1 = 0, pivot) {
      case 3:
        k1 = k1 ^ (255 & data[_0x77fc[3088]](i + 2)) << 16;
      case 2:
        k1 = k1 ^ (255 & data[_0x77fc[3088]](i + 1)) << 8;
      case 1:
        hash = hash ^ (k1 = (65535 & (k1 = (k1 = (65535 & (k1 = k1 ^ 255 & data[_0x77fc[3088]](i))) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295) << 15 | k1 >>> 17)) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295);
    }
    return hash = hash ^ data[_0x77fc[237]], hash = 2246822507 * (65535 & (hash = hash ^ hash >>> 16)) + ((2246822507 * (hash >>> 16) & 65535) << 16) & 4294967295, hash = 3266489909 * (65535 & (hash = hash ^ hash >>> 13)) + ((3266489909 * (hash >>> 16) & 65535) << 16) & 4294967295, (hash = hash ^ hash >>> 16) >>> 0;
  }
  var keys;
  /**
   * @return {undefined}
   */
  var Map = function() {
    /** @type {!Array} */
    var labels = [_0x77fc[3081], _0x77fc[3082], _0x77fc[3083]];
    var command_codes = document[_0x77fc[1506]](_0x77fc[1341])[0];
    var data = document[_0x77fc[383]](_0x77fc[382]);
    data[_0x77fc[173]][_0x77fc[186]] = _0x77fc[3084];
    data[_0x77fc[604]] = _0x77fc[3085];
    var result = {};
    var obj = {};
    var i;
    for (i in labels) {
      data[_0x77fc[173]][_0x77fc[3086]] = labels[i];
      command_codes[_0x77fc[387]](data);
      result[labels[i]] = data[_0x77fc[610]];
      obj[labels[i]] = data[_0x77fc[612]];
      command_codes[_0x77fc[1340]](data);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    this[_0x77fc[3087]] = function(item) {
      var hasDataToSync = false;
      var i;
      for (i in labels) {
        data[_0x77fc[173]][_0x77fc[3086]] = item + _0x77fc[1503] + labels[i];
        command_codes[_0x77fc[387]](data);
        var hasAttempts = data[_0x77fc[610]] != result[labels[i]] || data[_0x77fc[612]] != obj[labels[i]];
        command_codes[_0x77fc[1340]](data);
        hasDataToSync = hasDataToSync || hasAttempts;
      }
      return hasDataToSync;
    };
  };
  /**
   * @return {?}
   */
  var handleUnexpectedData = function() {
    return keys = new Map, this;
  };
  handleUnexpectedData[_0x77fc[170]] = {
    get : function() {
      var bar = _0x77fc[426];
      var $scope = this[_0x77fc[3089]]();
      var prefix = this[_0x77fc[3090]]();
      var language = this[_0x77fc[3091]]();
      var screenPrint = this[_0x77fc[3092]]();
      var systemLanguage = this[_0x77fc[3093]]();
      var fontList = this[_0x77fc[3094]]();
      var localStorage = this[_0x77fc[3095]]();
      var baz = this[_0x77fc[3096]]();
      var text = prefix + bar + language + bar + screenPrint + bar + sessionStorage + bar + systemLanguage + bar + fontList + bar + localStorage + bar + baz;
      return getterSelector($scope, 256) + _0x77fc[426] + getterSelector(text, 256);
    },
    gsp : function() {
      return _0x77fc[3097] + this[_0x77fc[3098]]() + _0x77fc[3099] + this[_0x77fc[3100]]() + _0x77fc[3101] + this[_0x77fc[3102]]() + _0x77fc[3103] + this[_0x77fc[3104]]() + _0x77fc[3105] + this[_0x77fc[3106]]();
    },
    gcd : function() {
      return screen[_0x77fc[3107]];
    },
    gcr : function() {
      return screen[_0x77fc[388]] + _0x77fc[649] + screen[_0x77fc[952]];
    },
    gar : function() {
      return screen[_0x77fc[3108]] + _0x77fc[649] + screen[_0x77fc[3109]];
    },
    gXDPI : function() {
      return screen[_0x77fc[3110]];
    },
    gYDPI : function() {
      return screen[_0x77fc[3111]];
    },
    gpl : function() {
      var _0xe1a7x4 = _0x77fc[46];
      /** @type {number} */
      var indexLookupKey = 0;
      for (; indexLookupKey < navigator[_0x77fc[3112]][_0x77fc[237]]; indexLookupKey++) {
        if (indexLookupKey == navigator[_0x77fc[3112]][_0x77fc[237]] - 1) {
          _0xe1a7x4 = _0xe1a7x4 + navigator[_0x77fc[3112]][indexLookupKey][_0x77fc[333]];
        } else {
          _0xe1a7x4 = _0xe1a7x4 + (navigator[_0x77fc[3112]][indexLookupKey][_0x77fc[333]] + _0x77fc[1351]);
        }
      }
      return _0xe1a7x4;
    },
    gmty : function() {
      var _0xe1a7x4 = _0x77fc[46];
      if (navigator[_0x77fc[3113]]) {
        /** @type {number} */
        var indexLookupKey = 0;
        for (; indexLookupKey < navigator[_0x77fc[3113]][_0x77fc[237]]; indexLookupKey++) {
          if (indexLookupKey == navigator[_0x77fc[3113]][_0x77fc[237]] - 1) {
            _0xe1a7x4 = _0xe1a7x4 + navigator[_0x77fc[3113]][indexLookupKey][_0x77fc[3114]];
          } else {
            _0xe1a7x4 = _0xe1a7x4 + (navigator[_0x77fc[3113]][indexLookupKey][_0x77fc[3114]] + _0x77fc[1351]);
          }
        }
      }
      return _0xe1a7x4;
    },
    gfo : function() {
      /** @type {!Array} */
      var data = [_0x77fc[3115], _0x77fc[3116], _0x77fc[3117], _0x77fc[3118], _0x77fc[3119], _0x77fc[3120], _0x77fc[3121], _0x77fc[3122], _0x77fc[3123], _0x77fc[3124], _0x77fc[3125], _0x77fc[3126], _0x77fc[3127], _0x77fc[3128], _0x77fc[3129], _0x77fc[3130], _0x77fc[3131], _0x77fc[3132], _0x77fc[3133], _0x77fc[3134], _0x77fc[3135], _0x77fc[3136], _0x77fc[3137], _0x77fc[3138], _0x77fc[3139], _0x77fc[3140], _0x77fc[3141], _0x77fc[3142], _0x77fc[3143], _0x77fc[3144], _0x77fc[3145], _0x77fc[3146], _0x77fc[3147], 
      _0x77fc[3148], _0x77fc[3149], _0x77fc[3150], _0x77fc[3151], _0x77fc[3152], _0x77fc[3153], _0x77fc[3154], _0x77fc[3155], _0x77fc[3156], _0x77fc[3157], _0x77fc[3158], _0x77fc[3159], _0x77fc[3160], _0x77fc[3161], _0x77fc[3162], _0x77fc[3163], _0x77fc[3164], _0x77fc[3165], _0x77fc[3166], _0x77fc[3167], _0x77fc[3168], _0x77fc[3169], _0x77fc[3170], _0x77fc[3171], _0x77fc[3172], _0x77fc[3173], _0x77fc[3174], _0x77fc[3175], _0x77fc[3176], _0x77fc[3177], _0x77fc[3178], _0x77fc[3179], _0x77fc[3180], 
      _0x77fc[3181], _0x77fc[3182], _0x77fc[3183], _0x77fc[3184], _0x77fc[3185], _0x77fc[3186], _0x77fc[3187], _0x77fc[3188], _0x77fc[3189], _0x77fc[3190], _0x77fc[3191], _0x77fc[3192], _0x77fc[3193], _0x77fc[3194], _0x77fc[3195], _0x77fc[3196], _0x77fc[3197], _0x77fc[3198], _0x77fc[3199], _0x77fc[3200], _0x77fc[3201], _0x77fc[3202], _0x77fc[3203], _0x77fc[3204], _0x77fc[3205], _0x77fc[3206], _0x77fc[3207], _0x77fc[3208], _0x77fc[3209], _0x77fc[3210], _0x77fc[3211], _0x77fc[3212], _0x77fc[3213], 
      _0x77fc[3214], _0x77fc[3215], _0x77fc[3216], _0x77fc[3217], _0x77fc[3218], _0x77fc[3219], _0x77fc[3220], _0x77fc[3221], _0x77fc[3222], _0x77fc[3223], _0x77fc[3224], _0x77fc[3225], _0x77fc[3226], _0x77fc[3227], _0x77fc[3228], _0x77fc[3229], _0x77fc[3230], _0x77fc[3231], _0x77fc[3232], _0x77fc[3233], _0x77fc[3234], _0x77fc[3235], _0x77fc[3236], _0x77fc[3237], _0x77fc[3238], _0x77fc[3239], _0x77fc[3240], _0x77fc[3241], _0x77fc[3242], _0x77fc[3243], _0x77fc[3244], _0x77fc[3245], _0x77fc[3246], 
      _0x77fc[3247], _0x77fc[3248], _0x77fc[3249], _0x77fc[3250], _0x77fc[3251], _0x77fc[3252], _0x77fc[3253], _0x77fc[3254], _0x77fc[3255], _0x77fc[3256], _0x77fc[3257], _0x77fc[3258], _0x77fc[3259], _0x77fc[3260], _0x77fc[3261], _0x77fc[3262], _0x77fc[3263], _0x77fc[3264], _0x77fc[3265], _0x77fc[3266], _0x77fc[3267], _0x77fc[3268], _0x77fc[3269], _0x77fc[3270], _0x77fc[3271], _0x77fc[3272], _0x77fc[3273], _0x77fc[3274], _0x77fc[3275], _0x77fc[3276], _0x77fc[3277], _0x77fc[3278], _0x77fc[3279], 
      _0x77fc[3280], _0x77fc[3281], _0x77fc[3282], _0x77fc[3283], _0x77fc[3284], _0x77fc[3285], _0x77fc[3286], _0x77fc[3287], _0x77fc[3288], _0x77fc[3289], _0x77fc[3290], _0x77fc[3291], _0x77fc[3292], _0x77fc[3293], _0x77fc[3294], _0x77fc[3295], _0x77fc[3296], _0x77fc[3297], _0x77fc[3298], _0x77fc[3299], _0x77fc[3300], _0x77fc[3301], _0x77fc[3302], _0x77fc[3303], _0x77fc[3304], _0x77fc[3305], _0x77fc[3306], _0x77fc[3307], _0x77fc[3308], _0x77fc[3309], _0x77fc[3310], _0x77fc[3311], _0x77fc[3312], 
      _0x77fc[3313], _0x77fc[3314], _0x77fc[3315], _0x77fc[3316], _0x77fc[3317], _0x77fc[3318], _0x77fc[3319], _0x77fc[3320], _0x77fc[3321], _0x77fc[3322], _0x77fc[3323], _0x77fc[3324], _0x77fc[3325], _0x77fc[3326], _0x77fc[3327], _0x77fc[3328], _0x77fc[3329], _0x77fc[3330], _0x77fc[3331], _0x77fc[3332], _0x77fc[3333], _0x77fc[3334], _0x77fc[3335], _0x77fc[3336], _0x77fc[3337], _0x77fc[3338], _0x77fc[3339], _0x77fc[3340], _0x77fc[3341], _0x77fc[3342], _0x77fc[3343], _0x77fc[3344], _0x77fc[3345]];
      var _0xe1a7x8 = _0x77fc[46];
      /** @type {number} */
      var i = 0;
      for (; i < data[_0x77fc[237]]; i++) {
        if (keys[_0x77fc[3087]](data[i])) {
          _0xe1a7x8 = _0xe1a7x8 + (i == data[_0x77fc[237]] - 1 ? data[i] : data[i] + _0x77fc[1351]);
        }
      }
      return _0xe1a7x8;
    },
    gtz : function() {
      var stringConstructorEndTime;
      var fullSNPTime;
      return stringConstructorEndTime = new Date, (fullSNPTime = String(-stringConstructorEndTime[_0x77fc[3346]]() / 60)) < 0 ? _0x77fc[1959] + (_0x77fc[525] + (fullSNPTime = fullSNPTime * -1))[_0x77fc[310]](-2) : _0x77fc[1840] + (_0x77fc[525] + fullSNPTime)[_0x77fc[310]](-2);
    },
    gla : function() {
      return navigator[_0x77fc[3347]];
    },
    gsl : function() {
      return navigator[_0x77fc[3348]] || window[_0x77fc[3349]][_0x77fc[3347]];
    },
    webgl : function() {
      var _0xe1a7x4;
      var gl;
      if ((_0xe1a7x4 = document[_0x77fc[383]](_0x77fc[1]))[_0x77fc[388]] = 256, _0xe1a7x4[_0x77fc[952]] = 128, !(gl = _0xe1a7x4[_0x77fc[11]](_0x77fc[3089]) || _0xe1a7x4[_0x77fc[11]](_0x77fc[3350]) || _0xe1a7x4[_0x77fc[11]](_0x77fc[1274]) || _0xe1a7x4[_0x77fc[11]](_0x77fc[1275]) || _0xe1a7x4[_0x77fc[11]](_0x77fc[3351]))) {
        return _0x77fc[525];
      }
      try {
        var mValue = gl[_0x77fc[222]]();
        gl[_0x77fc[1309]](gl.ARRAY_BUFFER, mValue);
        var values = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .7321, 0]);
        gl[_0x77fc[1310]](gl.ARRAY_BUFFER, values, gl.STATIC_DRAW);
        /** @type {number} */
        mValue[_0x77fc[3352]] = 3;
        /** @type {number} */
        mValue[_0x77fc[1371]] = 3;
        var shaderProgram = gl[_0x77fc[206]]();
        var type = gl[_0x77fc[1279]](gl.VERTEX_SHADER);
        gl[_0x77fc[1281]](type, _0x77fc[3353]);
        gl[_0x77fc[1283]](type);
        var value = gl[_0x77fc[1279]](gl.FRAGMENT_SHADER);
        gl[_0x77fc[1281]](value, _0x77fc[3354]);
        gl[_0x77fc[1283]](value);
        gl[_0x77fc[1285]](shaderProgram, type);
        gl[_0x77fc[1285]](shaderProgram, value);
        gl[_0x77fc[1286]](shaderProgram);
        gl[_0x77fc[207]](shaderProgram);
        shaderProgram[_0x77fc[3355]] = gl[_0x77fc[1296]](shaderProgram, _0x77fc[3356]);
        shaderProgram[_0x77fc[3357]] = gl[_0x77fc[1298]](shaderProgram, _0x77fc[3358]);
        gl[_0x77fc[211]](shaderProgram[_0x77fc[3359]]);
        gl[_0x77fc[1325]](shaderProgram[_0x77fc[3355]], mValue[_0x77fc[3352]], gl.FLOAT, false, 0, 0);
        gl[_0x77fc[1366]](shaderProgram[_0x77fc[3357]], 1, 1);
        gl[_0x77fc[1332]](gl.TRIANGLE_STRIP, 0, mValue[_0x77fc[1371]]);
      } catch (_0xe1a7x4) {
        return _0x77fc[525];
      }
      try {
        var data = new Uint8Array(131072);
        return gl[_0x77fc[3360]](0, 0, 256, 128, gl.RGBA, gl.UNSIGNED_BYTE, data), getterSelector(JSON[_0x77fc[1520]](data)[_0x77fc[1619]](/,?"[0-9]+":/g, _0x77fc[46]), 256);
      } catch (_0xe1a7x4) {
        return _0x77fc[525];
      }
    },
    webgl2 : function() {
      let groupNamePrefix = _0x77fc[46];
      let dupeNameCount = _0x77fc[46];
      let _0xe1a7x8 = _0x77fc[46];
      try {
        /**
         * @param {?} hide
         * @return {?}
         */
        var change_btn = function(hide) {
          return gl[_0x77fc[208]](0, 0, 0, 1), gl[_0x77fc[218]](gl.DEPTH_TEST), gl[_0x77fc[3361]](gl.LEQUAL), gl[_0x77fc[1003]](gl[_0x77fc[1277]] | gl[_0x77fc[1278]]), _0x77fc[1625] + hide[0] + _0x77fc[1351] + hide[1] + _0x77fc[1626];
        };
        var _0xe1a7x13 = document[_0x77fc[383]](_0x77fc[1]);
        var gl = _0xe1a7x13[_0x77fc[11]](_0x77fc[1274]) || _0xe1a7x13[_0x77fc[11]](_0x77fc[1275]);
        /** @type {!Array} */
        var _0xe1a7x1f = [];
        var mValue = gl[_0x77fc[222]]();
        gl[_0x77fc[1309]](gl.ARRAY_BUFFER, mValue);
        var values = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
        gl[_0x77fc[1310]](gl.ARRAY_BUFFER, values, gl.STATIC_DRAW);
        /** @type {number} */
        mValue[_0x77fc[3352]] = 3;
        /** @type {number} */
        mValue[_0x77fc[1371]] = 3;
        var shaderProgram = gl[_0x77fc[206]]();
        var type = gl[_0x77fc[1279]](gl.VERTEX_SHADER);
        gl[_0x77fc[1281]](type, _0x77fc[3353]);
        gl[_0x77fc[1283]](type);
        var value = gl[_0x77fc[1279]](gl.FRAGMENT_SHADER);
        gl[_0x77fc[1281]](value, _0x77fc[3354]);
        gl[_0x77fc[1283]](value);
        gl[_0x77fc[1285]](shaderProgram, type);
        gl[_0x77fc[1285]](shaderProgram, value);
        gl[_0x77fc[1286]](shaderProgram);
        gl[_0x77fc[207]](shaderProgram);
        shaderProgram[_0x77fc[3355]] = gl[_0x77fc[1296]](shaderProgram, _0x77fc[3356]);
        shaderProgram[_0x77fc[3357]] = gl[_0x77fc[1298]](shaderProgram, _0x77fc[3358]);
        gl[_0x77fc[211]](shaderProgram[_0x77fc[3359]]);
        gl[_0x77fc[1325]](shaderProgram[_0x77fc[3355]], mValue[_0x77fc[3352]], gl.FLOAT, false, 0, 0);
        gl[_0x77fc[1366]](shaderProgram[_0x77fc[3357]], 1, 1);
        gl[_0x77fc[1332]](gl.TRIANGLE_STRIP, 0, mValue[_0x77fc[1371]]);
        if (null != gl[_0x77fc[1]]) {
          _0xe1a7x1f[_0x77fc[308]](gl[_0x77fc[1]][_0x77fc[3362]]());
        }
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3363] + gl[_0x77fc[3364]]()[_0x77fc[1562]](_0x77fc[1691]));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3365] + change_btn(gl[_0x77fc[3366]](gl.ALIASED_LINE_WIDTH_RANGE)));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3367] + change_btn(gl[_0x77fc[3366]](gl.ALIASED_POINT_SIZE_RANGE)));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3368] + gl[_0x77fc[3366]](gl.ALPHA_BITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3369] + (gl[_0x77fc[3371]]()[_0x77fc[3370]] ? _0x77fc[3372] : _0x77fc[3373]));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3374] + gl[_0x77fc[3366]](gl.BLUE_BITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3375] + gl[_0x77fc[3366]](gl.DEPTH_BITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3376] + gl[_0x77fc[3366]](gl.GREEN_BITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3377] + function(gl) {
          var anisotropy;
          var ext = gl[_0x77fc[3379]](_0x77fc[3378]) || gl[_0x77fc[3379]](_0x77fc[3380]) || gl[_0x77fc[3379]](_0x77fc[3381]);
          return ext ? (0 === (anisotropy = gl[_0x77fc[3366]](ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (anisotropy = 2), anisotropy) : null;
        }(gl));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3382] + gl[_0x77fc[3366]](gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3383] + gl[_0x77fc[3366]](gl.MAX_CUBE_MAP_TEXTURE_SIZE));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3384] + gl[_0x77fc[3366]](gl.MAX_FRAGMENT_UNIFORM_VECTORS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3385] + gl[_0x77fc[3366]](gl.MAX_RENDERBUFFER_SIZE));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3386] + gl[_0x77fc[3366]](gl.MAX_TEXTURE_IMAGE_UNITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3387] + gl[_0x77fc[3366]](gl.MAX_TEXTURE_SIZE));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3388] + gl[_0x77fc[3366]](gl.MAX_VARYING_VECTORS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3389] + gl[_0x77fc[3366]](gl.MAX_VERTEX_ATTRIBS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3390] + gl[_0x77fc[3366]](gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3391] + gl[_0x77fc[3366]](gl.MAX_VERTEX_UNIFORM_VECTORS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[1734] + change_btn(gl[_0x77fc[3366]](gl.MAX_VIEWPORT_DIMS)));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3392] + gl[_0x77fc[3366]](gl.RED_BITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3393] + gl[_0x77fc[3366]](gl.RENDERER));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3394] + gl[_0x77fc[3366]](gl.SHADING_LANGUAGE_VERSION));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3395] + gl[_0x77fc[3366]](gl.STENCIL_BITS));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3396] + gl[_0x77fc[3366]](gl.VENDOR));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3397] + gl[_0x77fc[3366]](gl.VERSION));
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3398] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.HIGH_FLOAT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3401] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.HIGH_FLOAT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3403] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.HIGH_FLOAT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3405] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.MEDIUM_FLOAT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3406] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.MEDIUM_FLOAT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3407] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.MEDIUM_FLOAT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3408] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.LOW_FLOAT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3409] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.LOW_FLOAT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3410] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.LOW_FLOAT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3411] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3412] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3413] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3414] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3415] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3416] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3417] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.LOW_FLOAT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3418] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.LOW_FLOAT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3419] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.LOW_FLOAT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3420] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.HIGH_INT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3421] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.HIGH_INT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3422] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.HIGH_INT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3423] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.MEDIUM_INT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3424] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.MEDIUM_INT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3425] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.MEDIUM_INT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3426] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.LOW_INT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3427] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.LOW_INT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3428] + gl[_0x77fc[3400]](gl.VERTEX_SHADER, gl.LOW_INT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3429] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.HIGH_INT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3430] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.HIGH_INT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3431] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.HIGH_INT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3432] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.MEDIUM_INT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3433] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.MEDIUM_INT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3434] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.MEDIUM_INT)[_0x77fc[3404]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3435] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.LOW_INT)[_0x77fc[3399]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3436] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.LOW_INT)[_0x77fc[3402]]);
        _0xe1a7x1f[_0x77fc[308]](_0x77fc[3437] + gl[_0x77fc[3400]](gl.FRAGMENT_SHADER, gl.LOW_INT)[_0x77fc[3404]]);
        groupNamePrefix = _0xe1a7x1f[_0x77fc[1562]](_0x77fc[3438]);
        var _0xe1a7x3e = (_0xe1a7x13 = document[_0x77fc[383]](_0x77fc[1]))[_0x77fc[11]](_0x77fc[1274]) || _0xe1a7x13[_0x77fc[11]](_0x77fc[1275]);
        if (_0xe1a7x3e[_0x77fc[3364]]()[_0x77fc[315]](_0x77fc[3439]) >= 0) {
          dupeNameCount = _0xe1a7x3e[_0x77fc[3366]](_0xe1a7x3e[_0x77fc[3379]](_0x77fc[3439]).UNMASKED_VENDOR_WEBGL);
          _0xe1a7x8 = _0xe1a7x3e[_0x77fc[3366]](_0xe1a7x3e[_0x77fc[3379]](_0x77fc[3439]).UNMASKED_RENDERER_WEBGL);
        } else {
          dupeNameCount = _0x77fc[3440];
          _0xe1a7x8 = _0x77fc[3440];
        }
      } catch (_0xe1a7x12) {
        groupNamePrefix = _0x77fc[3440];
        dupeNameCount = _0x77fc[3440];
        _0xe1a7x8 = _0x77fc[3440];
      }
      return groupNamePrefix + _0x77fc[1503] + dupeNameCount + _0x77fc[1503] + _0xe1a7x8;
    },
    gcp : function() {
      var command_codes;
      var _0xe1a7x7 = document[_0x77fc[383]](_0x77fc[1]);
      try {
        command_codes = _0xe1a7x7[_0x77fc[11]](_0x77fc[10]);
      } catch (_0xe1a7x4) {
        return _0x77fc[46];
      }
      var data = _0x77fc[3441];
      return command_codes[_0x77fc[3442]] = _0x77fc[2379], command_codes[_0x77fc[1268]] = _0x77fc[3443], command_codes[_0x77fc[3442]] = _0x77fc[3444], command_codes[_0x77fc[954]] = _0x77fc[3445], command_codes[_0x77fc[1353]](125, 1, 62, 20), command_codes[_0x77fc[954]] = _0x77fc[3446], command_codes[_0x77fc[1272]](data, 2, 15), command_codes[_0x77fc[954]] = _0x77fc[3447], command_codes[_0x77fc[1272]](data, 4, 17), _0xe1a7x7[_0x77fc[3362]]();
    }
  };
  metaWindow[_0x77fc[3448]] = handleUnexpectedData;
}(window), EmoteSelect[_0x77fc[170]][_0x77fc[152]] = async function() {
  this[_0x77fc[3449]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[3449]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3450]);
  this[_0x77fc[894]][_0x77fc[387]](this[_0x77fc[3449]]);
  this[_0x77fc[3451]] = document[_0x77fc[3453]](_0x77fc[3452]);
  this[_0x77fc[3449]][_0x77fc[387]](this[_0x77fc[3451]]);
  this[_0x77fc[3454]]();
  this[_0x77fc[3455]] = _0x77fc[730] == typeof this[_0x77fc[893]] ? await fetch(this[_0x77fc[893]])[_0x77fc[3457]]((canCreateDiscussions) => {
    return canCreateDiscussions[_0x77fc[3456]]();
  }) : this[_0x77fc[893]];
  this[_0x77fc[3458]]();
  this[_0x77fc[3459]]();
  this[_0x77fc[3460]]();
}, EmoteSelect[_0x77fc[170]][_0x77fc[3454]] = function() {
  this[_0x77fc[3461]] = document[_0x77fc[383]](_0x77fc[3462]);
  this[_0x77fc[3461]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3463], _0x77fc[3464]);
  this[_0x77fc[3449]][_0x77fc[387]](this[_0x77fc[3461]]);
  this[_0x77fc[3465]] = document[_0x77fc[383]](_0x77fc[573]);
  this[_0x77fc[3465]][_0x77fc[2621]](_0x77fc[1599], _0x77fc[476]);
  this[_0x77fc[3465]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3466]);
  this[_0x77fc[3465]][_0x77fc[312]] = _0x77fc[3467];
  this[_0x77fc[3465]][_0x77fc[1322]](_0x77fc[573], () => {
    this[_0x77fc[3468]](this[_0x77fc[3455]]);
  });
  this[_0x77fc[3461]][_0x77fc[1322]](_0x77fc[3469], (canCreateDiscussions) => {
    canCreateDiscussions[_0x77fc[1059]]();
  });
  this[_0x77fc[3465]][_0x77fc[2621]](_0x77fc[463], _0x77fc[3075]);
  this[_0x77fc[3465]][_0x77fc[2621]](_0x77fc[1600], _0x77fc[3470]);
  this[_0x77fc[3461]][_0x77fc[387]](this[_0x77fc[3465]]);
  this[_0x77fc[3471]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[3471]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3471]);
  this[_0x77fc[3449]][_0x77fc[387]](this[_0x77fc[3471]]);
  this[_0x77fc[3472]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[3472]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3472]);
  this[_0x77fc[3471]][_0x77fc[387]](this[_0x77fc[3472]]);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3458]] = function() {
  let packByNumType = [];
  this[_0x77fc[3455]][_0x77fc[1097]]((data) => {
    if (packByNumType[_0x77fc[3473]]((index) => {
      return index === data[_0x77fc[176]];
    }) <= -1) {
      packByNumType[_0x77fc[308]](data[_0x77fc[176]]);
    }
  });
  this[_0x77fc[3474]] = packByNumType;
  this[_0x77fc[3475]](this[_0x77fc[3474]]);
  this[_0x77fc[3476]](this[_0x77fc[3474]]);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3475]] = async function(canCreateDiscussions) {
  let arr = this;
  this[_0x77fc[3477]] = this[_0x77fc[3455]];
  let _0xe1a7x8 = {
    root : document[_0x77fc[1480]](_0x77fc[3478]),
    rootMargin : _0x77fc[2787],
    threshold : 0
  };
  let umecob = new IntersectionObserver(function(canCreateDiscussions, component) {
    setTimeout(() => {
      canCreateDiscussions[_0x77fc[1097]]((data) => {
        if (data[_0x77fc[3479]]) {
          arr[_0x77fc[3480]](arr[_0x77fc[3477]], data[_0x77fc[1875]]);
          component[_0x77fc[3481]](data[_0x77fc[1875]]);
        }
      });
    }, 200);
  }, _0xe1a7x8);
  this[_0x77fc[3482]] = document[_0x77fc[3483]]();
  canCreateDiscussions[_0x77fc[1097]]((algoCode) => {
    let _0xe1a7x8 = this[_0x77fc[3477]][_0x77fc[3484]]((names) => {
      return names[_0x77fc[176]] === `${_0x77fc[46]}${algoCode}${_0x77fc[46]}`;
    });
    arr[_0x77fc[3485]] = document[_0x77fc[383]](_0x77fc[660]);
    arr[_0x77fc[3485]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3486]);
    arr[_0x77fc[3485]][_0x77fc[312]] = `${_0x77fc[46]}${algoCode}${_0x77fc[46]}`;
    arr[_0x77fc[3485]][_0x77fc[2621]](_0x77fc[3487], `${_0x77fc[46]}${algoCode}${_0x77fc[46]}`);
    umecob[_0x77fc[3488]](arr[_0x77fc[3485]]);
    arr[_0x77fc[3489]] = document[_0x77fc[383]](_0x77fc[2975]);
    arr[_0x77fc[3489]][_0x77fc[312]] = `${_0x77fc[46]}${algoCode}${_0x77fc[46]}`;
    arr[_0x77fc[3489]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3489]);
    arr[_0x77fc[3489]][_0x77fc[3490]] = `${_0x77fc[46]}${algoCode[_0x77fc[1631]]()}${_0x77fc[46]}`;
    arr[_0x77fc[3485]][_0x77fc[387]](arr[_0x77fc[3489]]);
    let bowerPackageName = 45 * Math[_0x77fc[1163]](_0xe1a7x8[_0x77fc[237]] / 6) + 35.4;
    arr[_0x77fc[3485]][_0x77fc[173]][_0x77fc[3491]] = `${_0x77fc[46]}${bowerPackageName}${_0x77fc[2380]}`;
    arr[_0x77fc[3482]][_0x77fc[387]](arr[_0x77fc[3485]]);
  });
  this[_0x77fc[3472]][_0x77fc[387]](this[_0x77fc[3482]]);
  this[_0x77fc[3492]]();
}, EmoteSelect[_0x77fc[170]][_0x77fc[3476]] = function(canCreateDiscussions) {
  if (!(canCreateDiscussions[_0x77fc[237]] > 2)) {
    this[_0x77fc[3493]] = document[_0x77fc[383]](_0x77fc[720]);
    this[_0x77fc[3493]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3494]);
    this[_0x77fc[3493]][_0x77fc[312]] = _0x77fc[2399];
    this[_0x77fc[3493]][_0x77fc[2621]](_0x77fc[1792], _0x77fc[3495]);
    this[_0x77fc[468]] = document[_0x77fc[383]](_0x77fc[318]);
    this[_0x77fc[468]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3496], _0x77fc[3497]);
    this[_0x77fc[382]] = document[_0x77fc[383]](_0x77fc[382]);
    this[_0x77fc[382]][_0x77fc[3490]] = _0x77fc[3498];
    this[_0x77fc[3493]][_0x77fc[387]](this[_0x77fc[468]]);
    this[_0x77fc[3493]][_0x77fc[387]](this[_0x77fc[382]]);
    this[_0x77fc[3493]][_0x77fc[173]][_0x77fc[186]] = _0x77fc[3499];
    this[_0x77fc[3472]][_0x77fc[387]](this[_0x77fc[3493]]);
  }
}, EmoteSelect[_0x77fc[170]][_0x77fc[3500]] = function(specificSources) {
  return specificSources[_0x77fc[338]] ? source = specificSources[_0x77fc[338]] : specificSources[_0x77fc[2346]] ? (source = specificSources[_0x77fc[2346]], !source || source[_0x77fc[1231]](_0x77fc[3501]) || source[_0x77fc[1231]](_0x77fc[1504]) || (source = _0x77fc[1504] + source)) : source = `${_0x77fc[46]}${this[_0x77fc[896]]}${_0x77fc[46]}${specificSources[_0x77fc[311]]}${_0x77fc[1684]}`, source;
}, EmoteSelect[_0x77fc[170]][_0x77fc[3480]] = async function(isSlidingUp, canCreateDiscussions) {
  let arr = this;
  let _0xe1a7x12 = {
    root : document[_0x77fc[3]](_0x77fc[3502]),
    rootMargin : _0x77fc[2787],
    threshold : 0
  };
  let umecob = new IntersectionObserver(function(data, i) {
    arr[_0x77fc[3503]](data, i);
  }, _0xe1a7x12);
  this[_0x77fc[3504]] = document[_0x77fc[3483]]();
  let stripeAPIVersion = canCreateDiscussions[_0x77fc[2627]](_0x77fc[3487]);
  let r = isSlidingUp[_0x77fc[3484]]((names) => {
    return names[_0x77fc[176]] === `${_0x77fc[46]}${stripeAPIVersion}${_0x77fc[46]}`;
  });
  for (let o = 0; o < r[_0x77fc[237]]; o++) {
    arr[_0x77fc[3505]] = document[_0x77fc[383]](_0x77fc[2374]);
    let artistTrack = this[_0x77fc[3500]](r[o]);
    arr[_0x77fc[3505]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3505], _0x77fc[3506]);
    if (r[o][_0x77fc[2346]]) {
      arr[_0x77fc[3505]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3507]);
    }
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    arr[_0x77fc[3505]][_0x77fc[2416]] = function(canCreateDiscussions) {
      canCreateDiscussions[_0x77fc[1875]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[3506]);
    };
    umecob[_0x77fc[3488]](arr[_0x77fc[3505]]);
    arr[_0x77fc[3505]][_0x77fc[2621]](_0x77fc[3508], `${_0x77fc[46]}${r[o][_0x77fc[311]]}${_0x77fc[46]}`);
    arr[_0x77fc[3505]][_0x77fc[2621]](_0x77fc[3509], artistTrack);
    arr[_0x77fc[3505]][_0x77fc[1322]](_0x77fc[1228], (canCreateDiscussions) => {
      this[_0x77fc[3510]](canCreateDiscussions[_0x77fc[1875]]);
      this[_0x77fc[3511]](canCreateDiscussions[_0x77fc[1875]]);
      if (!canCreateDiscussions[_0x77fc[3512]]) {
        this[_0x77fc[3513]]();
      }
    });
    arr[_0x77fc[3505]][_0x77fc[1322]](_0x77fc[3514], (canCreateDiscussions) => {
      this[_0x77fc[3515]](canCreateDiscussions[_0x77fc[1875]]);
    });
    arr[_0x77fc[3504]][_0x77fc[387]](arr[_0x77fc[3505]]);
  }
  canCreateDiscussions[_0x77fc[387]](this[_0x77fc[3504]]);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3492]] = function() {
  this[_0x77fc[3516]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[3516]][_0x77fc[312]] = _0x77fc[3516];
  this[_0x77fc[3474]][_0x77fc[1097]]((key) => {
    this[_0x77fc[3517]] = document[_0x77fc[383]](_0x77fc[2374]);
    this[_0x77fc[3517]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3518]);
    this[_0x77fc[3517]][_0x77fc[2621]](_0x77fc[3487], `${_0x77fc[46]}${key}${_0x77fc[46]}`);
    this[_0x77fc[3517]][_0x77fc[1322]](_0x77fc[1228], (canCreateDiscussions) => {
      let DOM_CONTENT_LOADED = canCreateDiscussions[_0x77fc[1875]][_0x77fc[2627]](_0x77fc[3519]);
      let mutedPlayerIds = document[_0x77fc[3]](DOM_CONTENT_LOADED);
      let timeNow = this[_0x77fc[3461]][_0x77fc[1265]];
      let _0xe1a7x13 = mutedPlayerIds[_0x77fc[3520]] - timeNow;
      this[_0x77fc[3472]][_0x77fc[2003]] = _0xe1a7x13;
    });
    this[_0x77fc[3517]][_0x77fc[2621]](_0x77fc[1194], `${_0x77fc[46]}${key}${_0x77fc[46]}`);
    this[_0x77fc[3517]][_0x77fc[2621]](_0x77fc[3521], _0x77fc[2966]);
    this[_0x77fc[3517]][_0x77fc[2621]](_0x77fc[3522], _0x77fc[2553]);
    let _0xe1a7x7 = this[_0x77fc[3455]][_0x77fc[3484]]((JSONToCompare) => {
      return JSONToCompare[_0x77fc[311]] === this[_0x77fc[897]][key];
    });
    if (_0xe1a7x7[_0x77fc[237]] <= 0) {
      this[_0x77fc[3517]][_0x77fc[2621]](_0x77fc[38], `${_0x77fc[46]}${this[_0x77fc[897]][key]}${_0x77fc[46]}`);
      this[_0x77fc[3517]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3523]);
    } else {
      if (!_0xe1a7x7[_0x77fc[2346]]) {
        this[_0x77fc[3517]][_0x77fc[2621]](_0x77fc[38], `${_0x77fc[46]}${this[_0x77fc[896]]}${_0x77fc[46]}${this[_0x77fc[897]][key]}${_0x77fc[1684]}`);
      }
    }
    this[_0x77fc[3516]][_0x77fc[387]](this[_0x77fc[3517]]);
  });
  this[_0x77fc[3471]][_0x77fc[387]](this[_0x77fc[3516]]);
  $(_0x77fc[3056])[_0x77fc[2966]]();
}, EmoteSelect[_0x77fc[170]][_0x77fc[3515]] = function(canCreateDiscussions) {
  let stripeAPIVersion = canCreateDiscussions[_0x77fc[2627]](_0x77fc[3508]);
  document[_0x77fc[3]](_0x77fc[3467])[_0x77fc[2621]](_0x77fc[1600], `${_0x77fc[426]}${stripeAPIVersion}${_0x77fc[426]}`);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3468]] = function(table) {
  let _destructure2 = this;
  let isInnerHTML = document[_0x77fc[3]](_0x77fc[3467])[_0x77fc[601]];
  let textContent = document[_0x77fc[3]](_0x77fc[3502]);
  if (!(isInnerHTML || null == textContent)) {
    textContent[_0x77fc[1982]][_0x77fc[1340]](textContent);
  }
  let r = (new Fuse(table, {
    threshold : .3,
    keys : [{
      name : _0x77fc[311],
      weight : 2
    }, {
      name : _0x77fc[180],
      weight : 1
    }]
  }))[_0x77fc[2309]](isInnerHTML);
  if (textContent) {
    if (textContent) {
      textContent[_0x77fc[604]] = _0x77fc[46];
    }
  } else {
    this[_0x77fc[3502]] = document[_0x77fc[383]](_0x77fc[660]);
    this[_0x77fc[3502]][_0x77fc[312]] = _0x77fc[3502];
    document[_0x77fc[592]](_0x77fc[3450])[0][_0x77fc[387]](this[_0x77fc[3502]]);
    textContent = document[_0x77fc[3]](_0x77fc[3502]);
  }
  let _0xe1a7x1e = {
    root : document[_0x77fc[3]](_0x77fc[3502]),
    rootMargin : _0x77fc[2787],
    threshold : 0
  };
  let _0xe1a7x1f = new IntersectionObserver(function(model, relations) {
    _destructure2[_0x77fc[3503]](model, relations);
  }, _0xe1a7x1e);
  _destructure2[_0x77fc[3524]] = document[_0x77fc[3483]]();
  for (let o = 0; o < r[_0x77fc[237]]; o++) {
    let artistTrack = r[o][_0x77fc[837]];
    let GET_AUTH_URL_TIMEOUT = this[_0x77fc[3500]](artistTrack);
    _destructure2[_0x77fc[3525]] = document[_0x77fc[383]](_0x77fc[2374]);
    _destructure2[_0x77fc[3525]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3505], _0x77fc[3506], _0x77fc[3526]);
    _destructure2[_0x77fc[3525]][_0x77fc[2621]](_0x77fc[3509], GET_AUTH_URL_TIMEOUT);
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    _destructure2[_0x77fc[3525]][_0x77fc[2416]] = function(canCreateDiscussions) {
      canCreateDiscussions[_0x77fc[1875]][_0x77fc[386]][_0x77fc[1472]](_0x77fc[3506]);
    };
    _destructure2[_0x77fc[3525]][_0x77fc[2621]](_0x77fc[1194], artistTrack[_0x77fc[311]]);
    _destructure2[_0x77fc[3525]][_0x77fc[2621]](_0x77fc[3508], artistTrack[_0x77fc[311]]);
    _destructure2[_0x77fc[3525]][_0x77fc[1322]](_0x77fc[1228], (canCreateDiscussions) => {
      this[_0x77fc[3510]](canCreateDiscussions[_0x77fc[1875]]);
      this[_0x77fc[3511]](canCreateDiscussions[_0x77fc[1875]]);
      if (!canCreateDiscussions[_0x77fc[3512]]) {
        this[_0x77fc[3513]]();
      }
    });
    _0xe1a7x1f[_0x77fc[3488]](this[_0x77fc[3525]]);
    _destructure2[_0x77fc[3524]][_0x77fc[387]](this[_0x77fc[3525]]);
  }
  textContent[_0x77fc[387]](this[_0x77fc[3524]]);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3503]] = function(canCreateDiscussions, anExpectedRequest) {
  setTimeout(() => {
    canCreateDiscussions[_0x77fc[1097]]((anActualRequest) => {
      if (anActualRequest[_0x77fc[3479]]) {
        let artistTrack = anActualRequest[_0x77fc[1875]][_0x77fc[2627]](_0x77fc[3509]);
        anActualRequest[_0x77fc[1875]][_0x77fc[2621]](_0x77fc[38], artistTrack);
        anExpectedRequest[_0x77fc[3481]](anActualRequest[_0x77fc[1875]]);
      }
    });
  }, 400);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3510]] = function(canCreateDiscussions) {
  let stripeAPIVersion = canCreateDiscussions[_0x77fc[2627]](_0x77fc[3508]);
  let checkPlugins = this[_0x77fc[573]][_0x77fc[601]];
  let repo = this[_0x77fc[3527]]();
  this[_0x77fc[573]][_0x77fc[601]] = checkPlugins[_0x77fc[1045]](0, repo) + `${_0x77fc[426]}${stripeAPIVersion}${_0x77fc[1718]}` + checkPlugins[_0x77fc[1045]](repo, checkPlugins[_0x77fc[237]]);
  this[_0x77fc[573]][_0x77fc[1058]]();
  this[_0x77fc[3068]](repo + stripeAPIVersion[_0x77fc[237]] + 3);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3527]] = function() {
  return this[_0x77fc[573]][_0x77fc[3076]] || _0x77fc[525] == this[_0x77fc[573]][_0x77fc[3076]] ? this[_0x77fc[573]][_0x77fc[3076]] : this[_0x77fc[573]][_0x77fc[601]][_0x77fc[237]];
}, EmoteSelect[_0x77fc[170]][_0x77fc[3068]] = function(n) {
  n = Math[_0x77fc[1080]](Math[_0x77fc[1148]](n, this[_0x77fc[573]][_0x77fc[601]][_0x77fc[237]]), 0);
  if (this[_0x77fc[573]][_0x77fc[3079]]) {
    this[_0x77fc[573]][_0x77fc[3079]](n, n);
  }
}, EmoteSelect[_0x77fc[170]][_0x77fc[3459]] = function() {
  if (_0x77fc[1336] != typeof Storage && !localStorage[_0x77fc[3459]]) {
    let _0xe1a7x4 = Math[_0x77fc[314]](Date[_0x77fc[3528]]() / 1E3);
    let data = [{
      Badger : _0xe1a7x4
    }, {
      jstris : _0xe1a7x4
    }];
    localStorage[_0x77fc[1940]](_0x77fc[3459], JSON[_0x77fc[1520]](data));
  }
  let _related2 = this[_0x77fc[3472]];
  let relationName = document[_0x77fc[3]](_0x77fc[1728]);
  this[_0x77fc[3529]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[3529]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3486]);
  this[_0x77fc[3489]] = document[_0x77fc[383]](_0x77fc[2975]);
  this[_0x77fc[3489]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3489]);
  this[_0x77fc[3530]] = document[_0x77fc[383]](_0x77fc[660]);
  this[_0x77fc[3530]][_0x77fc[312]] = _0x77fc[3531];
  this[_0x77fc[3489]][_0x77fc[312]] = _0x77fc[3532];
  this[_0x77fc[3489]][_0x77fc[3490]] = _0x77fc[3533];
  this[_0x77fc[3529]][_0x77fc[387]](this[_0x77fc[3489]]);
  this[_0x77fc[3529]][_0x77fc[387]](this[_0x77fc[3530]]);
  _related2[_0x77fc[2980]](this[_0x77fc[3529]], relationName);
  let specificListeners = this[_0x77fc[3516]];
  let menuConfig = document[_0x77fc[592]](_0x77fc[3518])[0];
  this[_0x77fc[3518]] = document[_0x77fc[383]](_0x77fc[2374]);
  this[_0x77fc[3518]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3518]);
  this[_0x77fc[3518]][_0x77fc[2621]](_0x77fc[3487], _0x77fc[3532]);
  this[_0x77fc[3518]][_0x77fc[2621]](_0x77fc[1194], _0x77fc[3534]);
  this[_0x77fc[3518]][_0x77fc[2621]](_0x77fc[3521], _0x77fc[2966]);
  this[_0x77fc[3518]][_0x77fc[2621]](_0x77fc[3522], _0x77fc[2553]);
  this[_0x77fc[3518]][_0x77fc[2621]](_0x77fc[38], `${_0x77fc[46]}${this[_0x77fc[896]]}${_0x77fc[3535]}`);
  this[_0x77fc[3518]][_0x77fc[1322]](_0x77fc[1228], (canCreateDiscussions) => {
    let DOM_CONTENT_LOADED = canCreateDiscussions[_0x77fc[1875]][_0x77fc[2627]](_0x77fc[3519]);
    let _0xe1a7x8 = document[_0x77fc[3]](DOM_CONTENT_LOADED)[_0x77fc[3520]] - 60;
    this[_0x77fc[3472]][_0x77fc[2003]] = _0xe1a7x8;
  });
  specificListeners[_0x77fc[2980]](this[_0x77fc[3518]], menuConfig);
  $(_0x77fc[3056])[_0x77fc[2966]]();
}, EmoteSelect[_0x77fc[170]][_0x77fc[3536]] = function() {
  let command_codes = document[_0x77fc[3]](_0x77fc[3531]);
  command_codes[_0x77fc[604]] = _0x77fc[46];
  let _0xe1a7x7 = this[_0x77fc[3455]];
  let _0xe1a7x8 = JSON[_0x77fc[1546]](localStorage[_0x77fc[1941]](_0x77fc[3459]));
  let data = document[_0x77fc[3483]]();
  _0xe1a7x8[_0x77fc[1097]]((descriptor) => {
    let vvv_5 = Object[_0x77fc[1207]](descriptor)[0];
    let GET_AUTH_URL_TIMEOUT = _0xe1a7x7[_0x77fc[3484]]((lanetext) => {
      return lanetext[_0x77fc[311]] === vvv_5;
    })[0];
    if (GET_AUTH_URL_TIMEOUT) {
      let numKeysDeleted = this[_0x77fc[3500]](GET_AUTH_URL_TIMEOUT);
      this[_0x77fc[3537]] = document[_0x77fc[383]](_0x77fc[2374]);
      this[_0x77fc[3537]][_0x77fc[2621]](_0x77fc[38], numKeysDeleted);
      this[_0x77fc[3537]][_0x77fc[2621]](_0x77fc[3508], GET_AUTH_URL_TIMEOUT[_0x77fc[311]]);
      this[_0x77fc[3537]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3505]);
      if (GET_AUTH_URL_TIMEOUT[_0x77fc[2346]]) {
        this[_0x77fc[3537]][_0x77fc[386]][_0x77fc[385]](_0x77fc[3507]);
      }
      this[_0x77fc[3537]][_0x77fc[1322]](_0x77fc[1228], (canCreateDiscussions) => {
        this[_0x77fc[3510]](canCreateDiscussions[_0x77fc[1875]]);
        this[_0x77fc[3511]](canCreateDiscussions[_0x77fc[1875]]);
        if (!canCreateDiscussions[_0x77fc[3512]]) {
          this[_0x77fc[3513]]();
        }
      });
      this[_0x77fc[3537]][_0x77fc[1322]](_0x77fc[3514], (canCreateDiscussions) => {
        this[_0x77fc[3515]](canCreateDiscussions[_0x77fc[1875]]);
      });
      data[_0x77fc[387]](this[_0x77fc[3537]]);
    }
  });
  command_codes[_0x77fc[387]](data);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3511]] = function(canCreateDiscussions) {
  let directiveProcessors;
  let module = JSON[_0x77fc[1546]](localStorage[_0x77fc[1941]](_0x77fc[3459]));
  let q = canCreateDiscussions[_0x77fc[2627]](_0x77fc[3508]);
  if (module[_0x77fc[237]] > 24) {
    /** @type {!Array} */
    directiveProcessors = [];
    for (let property_key = 0; property_key < 24; property_key++) {
      directiveProcessors[_0x77fc[308]](module[property_key]);
    }
  }
  if (24 === module[_0x77fc[237]]) {
    let _0xe1a7x4 = false;
    let item = 0;
    for (let $routeParams of module) {
      if (item = item + 1, q in $routeParams) {
        directiveProcessors = module[_0x77fc[3484]]((a) => {
          return a[q] === module[item][q];
        });
        let $node = {
          [q]:Math[_0x77fc[314]](Date[_0x77fc[3528]]() / 1E3)
        };
        directiveProcessors[_0x77fc[308]]($node);
        _0xe1a7x4 = true;
        break;
      }
    }
    if (!_0xe1a7x4) {
      let amount = module[0][Object[_0x77fc[1207]](module[0])[0]];
      let value = module[0];
      for (let target of module) {
        let resourceType = Object[_0x77fc[1207]](target)[0];
        if (target[resourceType] < amount) {
          amount = target[resourceType];
          value = target;
        }
      }
      directiveProcessors = module[_0x77fc[3484]]((optionsValue) => {
        return optionsValue !== value;
      });
      let $node = {
        [q]:Math[_0x77fc[314]](Date[_0x77fc[3528]]() / 1E3)
      };
      directiveProcessors[_0x77fc[308]]($node);
    }
  } else {
    if (module[_0x77fc[237]] < 24) {
      let _0xe1a7x4 = false;
      let item = 0;
      for (let $routeParams of module) {
        if (q in $routeParams) {
          directiveProcessors = module[_0x77fc[3484]]((matrix) => {
            return matrix[q] !== module[item][q];
          });
          let $node = {
            [q]:Math[_0x77fc[314]](Date[_0x77fc[3528]]() / 1E3)
          };
          directiveProcessors[_0x77fc[308]]($node);
          _0xe1a7x4 = true;
          break;
        }
        item = item + 1;
      }
      if (!_0xe1a7x4) {
        let $node = {
          [q]:Math[_0x77fc[314]](Date[_0x77fc[3528]]() / 1E3)
        };
        directiveProcessors = module;
        directiveProcessors[_0x77fc[308]]($node);
      }
    }
  }
  let data = directiveProcessors[_0x77fc[1895]]((obj, descriptor) => {
    return descriptor[Object[_0x77fc[1207]](descriptor)[0]] - obj[Object[_0x77fc[1207]](obj)[0]];
  });
  localStorage[_0x77fc[3459]] = JSON[_0x77fc[1520]](data);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3513]] = function() {
  this[_0x77fc[3472]][_0x77fc[3538]](0, 0);
  this[_0x77fc[3516]][_0x77fc[3538]](0, 0);
  this[_0x77fc[3449]][_0x77fc[386]][_0x77fc[1934]](_0x77fc[1549]);
}, EmoteSelect[_0x77fc[170]][_0x77fc[3460]] = function() {
  let _0xe1a7x4 = document[_0x77fc[3]](_0x77fc[3467]);
  if (this[_0x77fc[895]][_0x77fc[1322]](_0x77fc[1228], () => {
    _0xe1a7x4[_0x77fc[601]] = _0x77fc[46];
    let artistTrack = document[_0x77fc[3]](_0x77fc[3502]);
    if (null !== artistTrack) {
      artistTrack[_0x77fc[1982]][_0x77fc[1340]](artistTrack);
    }
    this[_0x77fc[3472]][_0x77fc[3538]](0, 0);
    this[_0x77fc[3516]][_0x77fc[3538]](0, 0);
    this[_0x77fc[3536]]();
    this[_0x77fc[3449]][_0x77fc[386]][_0x77fc[1934]](_0x77fc[1549]);
    if (this[_0x77fc[3449]][_0x77fc[386]][_0x77fc[1471]](_0x77fc[1549])) {
      _0xe1a7x4[_0x77fc[1058]]();
    } else {
      document[_0x77fc[3]](_0x77fc[375])[_0x77fc[1058]]();
    }
  }), !document[_0x77fc[3]](_0x77fc[3539])) {
    let artistTrack = document[_0x77fc[383]](_0x77fc[3540]);
    artistTrack[_0x77fc[312]] = _0x77fc[3539];
    artistTrack[_0x77fc[38]] = _0x77fc[3541];
    document[_0x77fc[2468]][_0x77fc[387]](artistTrack);
  }
};
