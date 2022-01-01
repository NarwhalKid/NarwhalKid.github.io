"use strict";
("use strict");
function Game() {
  this.canvas = document.getElementById("myCanvas");
  this.holdCanvas = document.getElementById("holdCanvas");
  this.queueCanvas = document.getElementById("queueCanvas");
  this.v = null;
  this.bgCanvas = document.getElementById("bgLayer");
  this.bgctx = this.bgCanvas.getContext("2d");
  this.GS = new GameSlots(this);
  this.roomCapacity = 6;
  this.connectStatusElement = document.getElementById("connectStatus");
  this.rInfoBox = document.getElementById("rInfoBox");
  this.practiceMenu = document.getElementById("practiceMenu");
  this.practiceMenuBig = document.getElementById("practice-menu-big");
  this.teamInfo = document.getElementById("teamInfo");
  this.sprintInfo = document.getElementById("sprintInfo");
  this.lrem = document.getElementById("lrem");
  this.fpsElement = document.getElementById("fps");
  this.block_size = 24;
  this.debug = false;
  this.SEenabled = true;
  this.VSEenabled = false;
  this.SEStartEnabled = true;
  this.SEFaultEnabled = false;
  this.SErotate = false;
  createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
  createjs.Sound.volume = .6;
  this.tex = new Image;
  this.tex2 = new Image;
  this.tex2.src = "/res/tex2.png";
  this.drawScale = 1;
  this.skinId = 0;
  this.ghostTex = null;
  this.ghostSkinId = 0;
  this.ghostSkins = [{id: 0, name: "Default", data: ""}, {id: 1, name: "Custom", data: "", w: 36}];
  this.SFXset = null;
  this.VSFXset = null;
  this.play = false;
  this.gameEnded = false;
  this.hdAbort = false;
  this.lastSeen = null;
  this.isTabFocused = true;
  this.pmode = 0;
  this.livePmode = 0;
  this.selectedPmode = 1;
  this.sprintMode = 1;
  this.sprintModeToRun = 1;
  this.sprintModes = {1: 40, 2: 20, 3: 100, 4: 1e3};
  this.cheeseModes = {1: 10, 2: 18, 3: 100, 100: 1e6};
  this.ultraModes = {1: 120};
  this.cheeseLevel = void 0;
  this.maxCheeseHeight = 9;
  this.minCheeseHeight = 3;
  this.lastHolePos = null;
  this.starting = false;
  this.activeBlock = new Block(0);
  this.ghostPiece = {pos: {x: 0, y: 0}};
  this.timer = 0;
  this.lastSnapshot = 0;
  this.clock = 0;
  this.frames = 0;
  this.baseGravity = null;
  this.currentGravity = [.9, 0];
  this.softDrop = false;
  this.softDropId = 2;
  this.holdPressed = false;
  this.hardDropPressed = false;
  this.lastDAS = 0;
  this.firstDAS = true;
  this.DASdebug = false;
  this.ARRtime = 0;
  this.pressedDir = {"-1": false, 1: false};
  this.ARRon = {"-1": false, 1: false};
  this.DASto = {"-1": null, 1: null};
  this.DASmethod = 1;
  this.lockDelayActive = false;
  this.lockDelayActivated = void 0;
  this.lastAction = 0;
  this.lastGeneration = 0;
  this.lockDelay = null;
  this.maxLockDelayWithoutLock = null;
  this.maxWithoutLock = null;
  this.holdUsedAlready = false;
  this.temporaryBlockSet = null;
  this.redBar = 0;
  this.incomingGarbage = [];
  this.solidHeight = 0;
  this.solidToAdd = 0;
  this.solidInterval = null;
  this.solidProfiles = [[0, 3], [0, 3, 2.8, 2.6, 2.4, 2.2, 2, 1.8, 1.6, 1.4, 1.2, 1, 31, 1, 1, 1, 1, 1, 1, 1], null, null];
  this.garbageCols = [];
  this.blockInHold = null;
  this.focusState = 0;
  this.statsEnabled = false;
  this.statsMode = 0;
  this.placedBlocks = 0;
  this.lastPlacements = [];
  this.finesse = 0;
  this.totalFinesse = 0;
  this.totalKeyPresses = 0;
  this.place = null;
  this.redrawBlocked = false;
  this.linesAttackDef = [0, 0, 1, 2, 4, 4, 6, 2, 0, 10, 1];
  this.linesAttack = this.linesAttackDef;
  this.cheeseHeight = 10;
  this.ghostEnabled = true;
  this.getPPS = this.getCumulativePPS;
  this.comboAttackDef = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5];
  this.comboAttack = this.comboAttackDef;
  this.comboCounter = -1;
  this.fourWideFlag = false;
  this.PCdata = {blocks: 0, lines: 0};
  this.linesRemaining = 0;
  this.inactiveGamesCount = 0;
  this.xbuffMask = 1;
  this.replayPartsSent = 0;
  this.transmitMode = 0;
  this.fragmentCounter = 0;
  this.liveSnapRate = 100;
  this.snapRate = 1e3;
  this.soundQ = new SoundQueue;
  this.RNG = alea(this.timestamp());
  this.blockRNG = this.RNG;
  this.blockSeed = "";
  this.bigTriggered = false;
  this.bigChance = 1e8;
  this.interval = null;
  this.animator = null;
  GameCore.call(this, true);
  this.RulesetManager = new RulesetManager(this);
  this.conf = [{}, {}];
  this.RulesetManager.applyRule({}, this.conf[0]);
  this.RulesetManager.applyRule({}, this.conf[1]);
  this.R = this.conf[0];
  this.RulesetManager.ruleSetChange(0);
  this.RulesetManager.setActiveMode(1);
  this.Settings = new Settings(this);
  this.Settings.startWebGL(false);
  this.Settings.init();
  this.Caption = new GameCaption(document.getElementById("stage"));
  this.Live = new Live(this);
  this.Replay = new Replay;
  this.Scoring = new Scoring;
  this.MapManager = new MapManager(this);
  this.ModeManager = new ModeManager(this);
  this.GameStats = new StatsManager(this.v);
  this.Mobile = new Mobile(this);
  this.Report = new Report(this);
  this.setLockDelay(this.R.lockDelay);
  this.applyGravityLvl(this.R.gravityLvl);
  this.changeSkin(this.skinId);
  this.initSFX();
  this.Settings.setupSwipeControl();
  this.setupGameLinks();
}
var GameProto = Object.create(GameCore.prototype);
function showElem(elem) {
  if (elem) {
    elem.style.display = "block";
  }
}
function hideElem(elem) {
  if (elem) {
    elem.style.display = "none";
  }
}
function LineClearAnimator(branchData, beforeZero, afterZero) {
  this.g = afterZero;
  this.matrix = branchData;
  this.clearPositions = beforeZero;
  this.clearDelay = this.g.R.clearDelay / 1e3;
  this.t = 0;
  this.IS_SOLID = true;
}
function Ctx2DView(canCreateDiscussions) {
  this.g = canCreateDiscussions;
  this.MAIN = 0;
  this.HOLD = 1;
  this.QUEUE = 2;
  this.NAME = "2d";
}
function FastFont2D() {
  this.fontSize = 16;
  this.canvas = document.getElementById("glstats");
  this.ctx = this.canvas.getContext("2d");
  this.availableLines = -1;
  this.resizeCanvas();
}
function WebGLUtils() {}
function WebGLView(canCreateDiscussions) {
  this.g = canCreateDiscussions;
  this.ctxs = [];
  this.MAIN = 0;
  this.HOLD = 1;
  this.QUEUE = 2;
  this.NAME = "webGL";
  this.colorsInTexture = [9, 8, 1, 2, 3, 4, 5, 6, 7];
  this.shaders = {vertex: "attribute vec4 a_position;     attribute vec2 a_texcoord;     uniform mat4 u_matrix;     uniform mat4 u_textureMatrix;     varying vec2 v_texcoord;     void main() {     gl_Position = u_matrix * a_position;     v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;     }", fragment: "precision mediump float;     varying vec2 v_texcoord;     uniform sampler2D u_texture;     uniform float globalAlpha;     void main() {     gl_FragColor = texture2D(u_texture, v_texcoord);     gl_FragColor.rgb *= gl_FragColor.a * globalAlpha;     }"};
  this.videoSkin = false;
  this.video = null;
}
function FastFont() {
  this.fontSize = 16;
  this.sdfs = {0: {x: 0, y: 0}, 1: {x: 20, y: 0}, 2: {x: 40, y: 0}, 3: {x: 60, y: 0}, 4: {x: 80, y: 0}, 5: {x: 100, y: 0}, 6: {x: 120, y: 0}, 7: {x: 140, y: 0}, 8: {x: 160, y: 0}, 9: {x: 180, y: 0}, "(": {x: 200, y: 0, w: 7}, ")": {x: 220, y: 0, w: 7}, "/": {x: 240, y: 0, w: 10}, "?": {x: 260, y: 0}, "-": {x: 280, y: 0}, "+": {x: 300, y: 0}, "∞": {x: 320, y: 0}, ".": {x: 340, y: 0, w: 7}, ":": {x: 360, y: 0, w: 7}, ",": {x: 380, y: 0, w: 7}, " ": {x: 400, y: 0, w: 4}};
  this.shaders = {vertex: "attribute vec2 a_pos;     attribute vec2 a_texcoord;     uniform mat4 u_matrix;     uniform vec2 u_texsize;     varying vec2 v_texcoord;     void main() {     gl_Position = u_matrix * vec4(a_pos.xy, 0, 1);     v_texcoord = a_texcoord / u_texsize;     }", fragment: "precision mediump float;     uniform sampler2D u_texture;     uniform vec4 u_color;     uniform float u_buffer;     uniform float u_gamma;     varying vec2 v_texcoord;     void main() {     float dist = texture2D(u_texture, v_texcoord).r;     float alpha = smoothstep(u_buffer - u_gamma, u_buffer + u_gamma, dist);     gl_FragColor = vec4(u_color.rgb, alpha * u_color.a);     }"};
  var result = this.ctx = {};
  this.canvas = result.elem = document.getElementById("glstats");
  var gl = result.gl = WebGLUtils.getWebGLcontext(result.elem);
  result.program = WebGLUtils.createProgram(result.gl, this.shaders);
  gl.useProgram(result.program);
  gl.clearColor(0, 0, 0, 0);
  this.resizeCanvas();
  WebGLUtils.registerContextAttrUnifs(gl, result);
  gl.enableVertexAttribArray(result.a_pos);
  gl.enableVertexAttribArray(result.a_texcoord);
  result.m4 = new Float32Array(16);
  this.MAX_STR_LEN = 11;
  this.verElem = new Float32Array(12 * this.MAX_STR_LEN);
  this.texElem = new Float32Array(12 * this.MAX_STR_LEN);
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
  gl.enable(gl.BLEND);
  result.textureInfo = {texture: gl.createTexture()};
  result.vertexBuffer = gl.createBuffer();
  result.textureBuffer = gl.createBuffer();
  this.ready = false;
  this.scale = 16;
  this.gamma = 1.4;
  this.availableLines = 0;
  this.defaultGlyphW = .75;
  this.glParamsSet = false;
}
function GameCore(logger) {
  this.ISGAME = logger;
  this.randomizer = null;
  this.matrix = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  this.deadline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.blockSets = getBlockSets();
  this.softDropSpeeds = [{id: 0, time: .05, steps: 0}, {id: 1, time: .008, steps: 0}, {id: 2, time: 0, steps: 1}, {id: 3, time: 0, steps: 2}, {id: 4, time: 0, steps: 20}];
  this.blockIds = {Z: 6, L: 3, O: 1, S: 5, I: 0, J: 4, T: 2};
  this.queue = [new Block(0), new Block(0), new Block(0), new Block(0), new Block(0)];
  this.queueLength = this.queue.length;
  this.gamedata = {lines: 0, singles: 0, doubles: 0, triples: 0, tetrises: 0, maxCombo: 0, linesSent: 0, linesReceived: 0, PCs: 0, lastPC: 0, TSD: 0, TSD20: 0, B2B: 0, attack: 0, score: 0, holds: 0, garbageCleared: 0, wasted: 0, tpieces: 0, tspins: 0};
  this.skins = [{id: 0, name: "None", data: ""}, {id: 1, name: "Default", data: "/res/b1.png", w: 32}, {id: 2, name: "Pixel", data: "/res/b2.png?v2", w: 32}, {id: 3, name: "Glass", data: "/res/b3.png?v2", w: 32}, {id: 4, name: "Gradient", data: "/res/b4.png?v2", w: 32}, {id: 5, name: "Nullpomino4", data: "/res/b5.png", w: 32}, {id: 6, name: "Invisible", data: ""}, {id: 7, name: "Mono", data: ""}, {id: 8, name: "Eyebites", data: "/res/b8.png", w: 32}, {id: 9, name: "Retro", data: "/res/b9.png", w: 32}, {id: 10, name: "Color Cubes", data: "/res/b10.png", w: 32}, {id: 11, name: "Simple", data: "/res/b11.png", w: 32}, {id: 12, name: "Color Blocks", data: "/res/b12.png", w: 32}, {id: 13, name: "Critter", data: "/res/b13.png", w: 32}];
  this.customSkinPath = null;
  this.spinPossible = false;
  this.spinMiniPossible = false;
  this.tspinMiniPossible = false;
  this.isBack2Back = false;
  this.wasBack2Back = false;
  this.isInvisibleSkin = false;
  this.monochromeSkin = false;
  this.cids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  this.coffset = [0, 2, 3, 4, 5, 6, 7, 8, 1, 0];
  this.colors = ["black", "#D70F37", "#E35B02", "#E39F02", "#59B101", "#0F9BD7", "#2141C6", "#AF298A", "#999999", "#6A6A6A", "black", "white"];
  this.colorsV3 = [[0, 0, 0], [215, 15, 55], [227, 91, 2], [227, 159, 2], [89, 177, 1], [15, 155, 215], [33, 65, 198], [175, 41, 138], [153, 153, 153], [106, 106, 106], [0, 0, 0], [255, 255, 255]];
  var IS_HANDLED = 0;
  for (; IS_HANDLED < this.colorsV3.length; ++IS_HANDLED) {
    var id = 0;
    for (; id < 3; ++id) {
      this.colorsV3[IS_HANDLED][id] /= 255;
    }
  }
  this.NullCol = ["black", "#E4203E", "#E47E30", "#E3CF3C", "#1DE03D", "#00C9DF", "#0042DC", "#9E2CDC", "#999999", "#585858", "black", "white"];
  this.multipleNames = ["Single", "Double", "Triple", "Quadruple", "Multiple"];
  this.excludedBlocksAS = [];
  this.Items = new Items(this);
  this.R = this.DEF = {clearDelay: 0, rnd: 0, showPreviews: 5, holdEnabled: true, baseBlockSet: 0, gravityLvl: 1, lockDelay: [500, 5e3, 2e4], mess: 0, gapW: 1, gInv: false, gDelay: 500, gblock: 0, tsdOnly: false, allSpin: 0, speedLimit: 0, scoreMult: 1, clearLines: true, sfx: true, vsfx: true, solidAttack: false, ext: 0, sgProfile: [0, 3]};
  this.initRandomizer(this.R.rnd);
}
function Bag(data, length, width) {
  this.RNG = data;
  this.usebag = [];
  for (let i = 0; i < length; i++) {
    for (let img_x = 0; img_x < width; img_x++) {
      this.usebag.push(i);
    }
  }
  this.bag = this.usebag.slice(0);
}
function Classic(config, _newfeed) {
  this.RNG = config;
  this.n = _newfeed;
}
function OneBlock(res, rej, nb_ft, type_geom) {
  if (this.RNG = res, this.n = rej, this.bag = [], type_geom) {
    let l = new Bag(res, rej, type_geom);
    for (let _t_ix = 0; _t_ix < nb_ft; ++_t_ix) {
      this.bag.push(l.getBlock().id);
    }
  } else {
    for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
      let artistTrack;
      do {
        artistTrack = Math.floor(this.RNG() * this.n);
      } while (-1 !== this.bag.indexOf(artistTrack));
      this.bag.push(artistTrack);
    }
  }
  this.lastIndex = 0;
}
function C2Sim(formatters, customFormatters) {
  this.RNG = formatters;
  this.n = customFormatters;
  this.hist = [-1, -2];
}
function Repeated(formatters, customFormatters) {
  this.randomizer = formatters;
  this.n = customFormatters;
  this.block = null;
  this.i = 0;
  this.nextSegment();
}
function BsBlock(formatters, customFormatters) {
  this.randomizer = formatters;
  this.bsArr = customFormatters;
  this.i = 0;
}
function BigBlockRand(formatters, customFormatters) {
  this.randomizer = formatters;
  this.bsArr = customFormatters;
  this.i = 0;
  this.EXPECTED_BLOCKS = 5e3;
}
function ConstBlock(formatters, customFormatters) {
  this.id = formatters;
  this.set = customFormatters;
}
function Live(status) {
  this.version = "v1.39.5";
  this.serverScheme = conf_global.srvScheme;
  this.tryProxy = conf_global.revProxy;
  this.server = conf_global.srv;
  this.port = conf_global.port;
  this.authorized = "" !== conf_global.name;
  this.authReady = true;
  this.connected = false;
  this.sitout = false;
  this.socket = null;
  this.p = status;
  this.cid = 0;
  this.conAttempts = 0;
  this.sTier = 0;
  this.isProxy = false;
  this.servers = null;
  this.serverId = null;
  this.joinRemote = null;
  this.createRoomRequest = null;
  this.connectionTimeout = null;
  this.clients = {};
  this.players = Array();
  this.bots = Array();
  this.authList = Array();
  this.places = {};
  this.notPlaying = [];
  this.rid = "";
  this.rc = 0;
  this.rcS = {};
  this.roomConfig = null;
  this.gid = "";
  this.lastGameId = "";
  this.currentTarget = 0;
  this.winnerCID = void 0;
  this.iAmHost = false;
  this.xbufferEnabled = false;
  this.xbuffer = {};
  this.urlPlayParamApplied = false;
  this.msgCount = 0;
  this.chatBox = document.getElementById("ch1");
  this.friendsBox = document.getElementById("ch2");
  this.chatArea = document.getElementById("chatContent");
  this.friendsBtn = document.getElementById("frLobby");
  this.chatInput = document.getElementById("chatInput");
  this.chatInputArea = document.getElementById("chatInputArea");
  this.chatButton = document.getElementById("sendMsg");
  this.resetButton = document.getElementById("res");
  this.resetProgress = document.createElement("span");
  this.resetProgress.classList.add("btn-progress");
  this.resetButton.appendChild(this.resetProgress);
  this.resetProgress.style.width = "0%";
  this.teamOptions = document.getElementById("team-options");
  this.tsArea = document.getElementById("tsArea");
  this.myTeam = document.getElementById("myTeam");
  this.resultsBox = document.getElementById("resultsBox");
  this.resultsContent = document.getElementById("resultsContent");
  this.moreResults = document.getElementById("moreResults");
  this.moreData = document.getElementById("moreData");
  this.saveLink = document.getElementById("saveLink");
  this.moreVisible = false;
  this.statsSent = true;
  this.lobbyVisible = false;
  this.lobbyInfoShown = false;
  this.chatAtBottom = true;
  this.lobbyBox = document.getElementById("lobbyBox");
  this.lobbyContent = document.getElementById("lobbyContent");
  this.refreshLobbyButton = document.getElementById("refreshLobby");
  this.setupLobbyHandlers();
  this.RoomInfo = new RoomInfo(this);
  this.adjustForCustomLayout();
  this.editRoomButton = document.getElementById("editRoomButton");
  this.createRoomDialog = document.getElementById("createRoom");
  this.roomNameInput = document.getElementById("roomName");
  this.roomName = null;
  this.isPrivateInput = document.getElementById("isPrivate");
  this.chatName = conf_global.name;
  this.chatButton.textContent = i18n.sendButton;
  this.roomJoinTimes = {};
  this.LiveGameRunning = true;
  this.liveMode = 0;
  this.pingSent = 0;
  this.emoteAutocomplete = new ChatAutocomplete(this.chatInput, this.chatInputArea, ":", null);
  this.emoteAutocomplete.minimalLengthForHint = 3;
  this.nameAutocomplete = new ChatAutocomplete(this.chatInput, this.chatInputArea, "@", function () {
    return arrayUnique(Object.values(this.clients).map(function (canCreateDiscussions) {
      return canCreateDiscussions.name;
    }));
  }.bind(this));
  this.nameAutocomplete.prefixInSearch = false;
  let u = new _jstrisx;
  this.sessX = u.get();
  this.hostStartMode = false;
  this.noFourWide = 0;
  this.solidAfter = 0;
  this.liveSeed = "";
  this.liveMap = null;
  this.livePmodeTypes = [1, 1];
  this.team = null;
  this.teamSwitchDisabled = false;
  this.teamButtons = {};
  this.gdm = 0;
  this.gdms = ["targets", "divide", "toAll", "toLeast", "toMost", "toSelf", "random", "roulette"];
  this.gDelay = 500;
  this.sgProfile = 0;
  this.playingOfflineWarningShown = false;
  this.loadMapForOpponents = false;
  this.Friends = new Friends(this);
  this.p.Caption.loading(i18n.connecting);
  this.connect();
}
function Client(backend_hostname) {
  this.cid = backend_hostname;
  this.type = 0;
  this.rep = null;
  this.name = null;
  this.mod = false;
  this.auth = false;
  this.color = null;
  this.icon = null;
}
function RoomInfo(canCreateDiscussions) {
  this.l = canCreateDiscussions;
  this.roomDetailBox = this.timeoutRequestDetail = this.timeoutRoomDetail = null;
  this.rdParts = {};
  this.roomDetails = {};
  this.ON_OFF = [i18n.off, i18n.on];
  this.CONF_NAMES = {at: "Attack table", ct: "Combo table", ld: "Lock delay", cd: {n: "Clear delay", u: "ms"}, gdm: {n: "G-distrib.", v: [null, "divide", "toAll", null, "toMost", "toSelf", "random", "roulette"]}, gblock: {n: "G-blocking", v: ["full", "limited", "none", "instant"]}, rnd: {n: "Randomizer", v: ["7bag", "14bag", "Classic", "1Block", "2Block", "1x7bag", "1x14bag", "C2Sim", "7b-RR", "BSb-7b", "BB-7b"]}, pr: "Previews", hold: "Hold", bbs: {n: "Blocks", v: [null, "Big", null, "ARS", "Penta", "M123", "All28", "C2RS", "OSpin"]}, grav: "Gravity", mess: {n: "Messiness", u: "%"}, gDelay: {n: "G-delay", u: "ms"}, hostStart: "HostStart", gInv: "G-invert", gapW: "G-gap", noFW: "noFW", sa: "SolidAtk", as: {n: "AllSpin", v: [i18n.off, i18n.on + " - Im.", i18n.on + " - 4P"]}, asEx: "AS-Excl.", sgp: {n: "Solid", v: ["0", "1", "2", "Custom speed"]}};
  this.LIMIT_NAMES = {apm: {n: i18n.APM, u: ""}, sub: {n: i18n.sprint, u: i18n.s}, gt: {n: i18n.gTimeShort, u: i18n.hrs}};
}
function Settings(graphProperties) {
  this.p = graphProperties;
  this.box = document.getElementById("settingsBox");
  this.touchEnabledBox = document.getElementById("touch");
  this.soundEnabledBox = document.getElementById("esound");
  this.DMsoundBox = document.getElementById("DMsound");
  this.SEEnabledBox = document.getElementById("SE");
  this.VSEEnabledBox = document.getElementById("vSE");
  this.sfxSelect = document.getElementById("sfxSelect");
  this.vsfxSelect = document.getElementById("vsfxSelect");
  this.SEStartEnabledBox = document.getElementById("SEstart");
  this.SErotateEnabledBox = document.getElementById("SErot");
  this.SEFaultEnabledBox = document.getElementById("SEfault");
  this.monoColorInp = document.getElementById("monoColor");
  this.statOptId = document.getElementById("statOptId");
  this.settingBoxes = Array();
  this.settingBoxes[1] = document.getElementById("DAS");
  this.settingBoxes[2] = document.getElementById("ARR");
  this.settingsSaveBtn = document.getElementById("settingsSave");
  this.settingsSaveBtn.onclick = this.closeSettings.bind(this);
  this.settingsResetBtn = document.getElementById("settingsReset");
  this.settingsResetBtn.onclick = this.resetSettings.bind(this);
  this.mainDiv = document.getElementById("main");
  this.moreSkins = null;
  this.skinsLoaded = false;
  this.inputBoxes = Array();
  var selector = 1;
  for (; selector <= 10; selector++) {
    this.inputBoxes[selector] = document.getElementById("input" + selector);
    this.inputBoxes[selector].onkeydown = this.onControlKeySet.bind(this, selector);
  }
  this.webGlStartFailed = false;
  this.BAN_ARTIFACT_KEY = "room3";
  this.mc = new Hammer(this.mainDiv);
  this.mc.set({enable: false, touchAction: "auto"});
  this.preventZoomHandler = this.preventZoom;
  this.touchActuallyUsed = false;
  this.monochromePicker = this.registerColorPicker();
  this.gamepadFound = false;
  this.statGameModeSelect = document.getElementById("statGameModeSelect");
  this.statGameModeSelect.onchange = this.onStatGameModeChange.bind(this);
  this.statCheckboxes = Array();
  selector = 1;
  for (; selector <= document.getElementsByClassName("statCheckbox").length; selector++) {
    this.statCheckboxes[selector] = document.getElementById("stat" + selector);
    this.statCheckboxes[selector].onchange = this.onStatCheckboxChange.bind(this, selector);
  }
}
function soundCredits(partKeys) {
  var div;
  var DOM_CONTENT_LOADED;
  var atomToChunk;
  if ("sfxSelect" == partKeys.srcElement.id) {
    div = "soundDesc";
    DOM_CONTENT_LOADED = "audioCred";
    atomToChunk = SFXsets;
  } else {
    div = "soundDesc2";
    DOM_CONTENT_LOADED = "audioCred2";
    atomToChunk = VSFXsets;
  }
  var placeHolder = document.getElementById(div);
  var tempColorArray = document.getElementById(DOM_CONTENT_LOADED);
  var colorArray = new (0, atomToChunk[parseInt(partKeys.srcElement.value)].data);
  if (colorArray.author) {
    placeHolder.style.display = "table-row";
    tempColorArray.innerHTML = colorArray.author;
  } else {
    hideElem(placeHolder);
  }
}
function GameSlots(canCreateDiscussions) {
  this.p = canCreateDiscussions;
  this.gsDiv = document.getElementById("gameSlots");
  this.chatBox = document.getElementById("chatBox");
  this.chatArea = document.getElementById("chatContent");
  this.chatExp = document.getElementById("chatExpand");
  this.resultsBox = document.getElementById("resultsBox");
  this.lobbyBox = document.getElementById("lobbyBox");
  this.w = this.gsDiv.offsetWidth;
  this.h = this.gsDiv.offsetHeight;
  this.slotHeight = this.matrixHeight = 0;
  this.slotWidth = this.matrixWidth = 0;
  this.zoom = 1;
  this.isFullscreen = false;
  this.forceExtended = false;
  this.slotStats = false;
  document.getElementById("fsSlots").checked = this.isFullscreen;
  document.getElementById("hqSlots").checked = this.forceExtended;
  document.getElementById("zoomControl").value = 100;
  this.cidSlots = {};
  this.nameFontSize = 15;
  this.nameHeight = 18;
  this.redBarWidth = 5;
  this.slots = [];
  this.targetSlotId = -1;
  this.shownSlots = 0;
  this.extendedView = [1, 2, 4];
  this.isExtended = false;
  this.extendedAvailable = true;
  this.skinOverride = false;
  this.baseSize = {playersW: 450, playersH: 450, gameFrame: 1091};
  this.rowCount = 0;
  this.liveBlockSize = 10;
  this.holdQueueBlockSize = 10;
  this.blocksY = 20;
  this.chatExpanded = false;
  this.resultsShown = false;
  this.setup(6);
  this.teamTags = [];
  this.tagHeight = 20;
  this.teamData = null;
  this.teamMembers = {};
}
function Slot(slotData, bone, elementId, pathId) {
  this.gs = pathId;
  this.id = slotData;
  this.cid = -1;
  this.x = bone;
  this.y = elementId;
  this.pCan = document.createElement("canvas");
  this.bgCan = document.createElement("canvas");
  this.holdCan = document.createElement("canvas");
  this.queueCan = document.createElement("canvas");
  this.pCan.classList.add("layer", "mainLayer");
  this.bgCan.classList.add("layer", "bgLayer");
  this.holdCan.classList.add("layer", "mp-holdCan");
  this.queueCan.classList.add("layer", "mp-queueCan");
  this.name = document.createElement("span");
  this.slotDiv = document.createElement("div");
  this.stageDiv = document.createElement("div");
  this.stats = new SlotStats(this, this.gs);
  var babelConfig = {main: this.pCan, bg: this.bgCan, hold: this.holdCan, queue: this.queueCan};
  this.v = new SlotView(babelConfig);
  this.v.g = this.gs.p;
  this.v.slot = this;
  this.init();
}
function SlotStats(formatters, customFormatters) {
  this.slot = formatters;
  this.gs = customFormatters;
  this.statsDiv = document.createElement("div");
  this.statsDiv.classList.add("stat", "unsel");
  this.pps = document.createElement("span");
  this.apm = document.createElement("span");
  this.ppsTitle = document.createElement("span");
  this.apmTitle = document.createElement("span");
  var artistTrack = document.createElement("div");
  artistTrack.classList.add("statLine");
  var GET_AUTH_URL_TIMEOUT = document.createElement("div");
  GET_AUTH_URL_TIMEOUT.classList.add("statLine");
  this.winCounter = document.createElement("span");
  this.winCounter.classList.add("wins");
  this.apmTitle.classList.add("ti");
  this.ppsTitle.classList.add("ti");
  this.winCounter.classList.add("ti");
  this.ppsTitle.textContent = "PPS";
  this.apmTitle.textContent = "APM";
  this.winCounter.textContent = "0";
  this.pps.textContent = this.apm.textContent = "0.00";
  artistTrack.appendChild(this.ppsTitle);
  artistTrack.appendChild(this.pps);
  GET_AUTH_URL_TIMEOUT.appendChild(this.apmTitle);
  GET_AUTH_URL_TIMEOUT.appendChild(this.apm);
  this.statsDiv.appendChild(artistTrack);
  this.statsDiv.appendChild(GET_AUTH_URL_TIMEOUT);
  this.statsDiv.appendChild(this.winCounter);
}
function SlotView(canCreateDiscussions) {
  this.g = null;
  this.slot = null;
  this.MAIN = 0;
  this.HOLD = 1;
  this.QUEUE = 2;
  this.canvas = canCreateDiscussions.main;
  this.ctx = this.canvas.getContext("2d");
  this.bgCanvas = canCreateDiscussions.bg;
  this.bgctx = this.bgCanvas.getContext("2d");
  this.holdCanvas = canCreateDiscussions.hold;
  this.hctx = this.holdCanvas.getContext("2d");
  this.queueCanvas = canCreateDiscussions.queue;
  this.qctx = this.queueCanvas.getContext("2d");
  this.block_size = 24;
  this.holdQueueBlockSize = 24;
  this.drawScale = 1;
  this.QueueHoldEnabled = false;
  this.SEenabled = false;
  this.replaySEset = 0;
  this.tex = new Image;
  this.skinId = 0;
  this.ghostSkinId = 0;
  this.skinWidth = 32;
  this.redrawBlocked = false;
  this.ghostEnabled = true;
}
function StatsManager(options) {
  this.stats = {};
  this.ordered = [];
  this.dirty = false;
  this.labelsElem = document.getElementById("statLabels");
  this.shown = options.g.Settings.shownStats[options.g.isPmode(false)];
  this.initDefault();
  this.setView(options);
}
function StatLine(type, box, meta11183) {
  this.id = type;
  this.order = meta11183;
  this.manager = null;
  this.enabled = false;
  this.label = document.createElement("span");
  this.label.textContent = box;
  this.initialVal = this.value = "0";
  this.resets = true;
  this.locked = false;
}
function GameCaption(canCreateDiscussions) {
  this.parent = canCreateDiscussions;
  this.captions = {};
  this.SPECTATOR_MODE = 1;
  this.OUT_OF_FOCUS = 2;
  this.READY_GO = 3;
  this.GAME_PLACE = 4;
  this.SPEED_LIMIT = 5;
  this.MAP_LOADING = 6;
  this.NEW_PERSONAL_BEST = 7;
  this.LOADING = 8;
  this.RACE_FINISHED = 9;
  this.GAME_WARNING = 10;
  this.MODE_INFO = 11;
  this.MODE_COMPLETE = 12;
  this.PAUSED = 13;
  this.BUTTON = 14;
  this.speedTimout = null;
}
function Mobile(options) {
  this.p = options;
  this.isMobile = this.isMobile();
  this.Settings = this.p.Settings;
  this.showPlBtn = null;
  this.draggingEnabled = false;
  if (this.isMobile) {
    this.initForMobile();
  }
}
function ReplayAction(formatters, customFormatters) {
  this.a = formatters;
  this.t = customFormatters;
}
function Replay() {
  this.Action = Object.freeze({MOVE_LEFT: 0, MOVE_RIGHT: 1, DAS_LEFT: 2, DAS_RIGHT: 3, ROTATE_LEFT: 4, ROTATE_RIGHT: 5, ROTATE_180: 6, HARD_DROP: 7, SOFT_DROP_BEGIN_END: 8, GRAVITY_STEP: 9, HOLD_BLOCK: 10, GARBAGE_ADD: 11, SGARBAGE_ADD: 12, REDBAR_SET: 13, ARR_MOVE: 14, AUX: 15});
  this.AUX = Object.freeze({AFK: 0, BLOCK_SET: 1, MOVE_TO: 2, RANDOMIZER: 3, MATRIX_MOD: 4, WIDE_GARBAGE_ADD: 5});
  this.AuxBits = Array();
  this.AuxBits[this.Action.GARBAGE_ADD] = [5, 4];
  this.AuxBits[this.Action.REDBAR_SET] = [5];
  this.AuxBits[this.Action.ARR_MOVE] = [1];
  this.AuxBits[this.Action.AUX] = [4];
  this.config = {v: 3.3, softDropId: void 0, gameStart: void 0, gameEnd: void 0, seed: void 0, m: void 0, bs: void 0, se: void 0, das: void 0, arr: void 0};
  this.actions = Array();
  this.string = "";
  this.md5 = "";
  this.mode = 0;
  this.isAfkMode = false;
  this.afkQueue = [];
  this.stream = new ReplayStream;
  this.onSaved = null;
  this.onMoveAdded = null;
}
function _arrayBufferToBase64(arrayBuffer) {
  var result = "";
  var arr = new Uint8Array(arrayBuffer);
  if (endianness()) {
    var n = arr.byteLength / 4;
    var j = 0;
    for (; j < n; j++) {
      var initIndex = 0;
      for (; initIndex < 4; initIndex++) {
        result = result + String.fromCharCode(arr[4 * j + 3 - initIndex]);
      }
    }
  } else {
    n = arr.byteLength;
    j = 0;
    for (; j < n; j++) {
      result = result + String.fromCharCode(arr[j]);
    }
  }
  return window.btoa(result);
}
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
  throw alert("Unknown endianness!"), new Error("Aborted");
}
function ReplayStream() {
  this.data = [0];
  this.datapos = 0;
  this.bitpos = 0;
  this.wordSize = 32;
  this.byte = 0;
}
function RulesetManager(canCreateDiscussions) {
  this.p = canCreateDiscussions;
  this.modeMenu = document.getElementById("mode-menu");
  this.DEF = canCreateDiscussions.DEF;
  this.pmodeRuleId = 0;
  this.RULE_KEYS = {cd: "clearDelay", rnd: "rnd", pr: "showPreviews", hold: "holdEnabled", bbs: "baseBlockSet", grav: "gravityLvl", ld: "lockDelay", mess: "mess", gapW: "gapW", gInv: "gInv", gDelay: "gDelay", gblock: "gblock", tsdOnly: "tsdOnly", as: "allSpin", sl: "speedLimit", sm: "scoreMult", cl: "clearLines", sfx: "sfx", vsfx: "vsfx", sa: "solidAttack", ext: "ext", sgpA: "sgProfile"};
  this.PRESET_KEYS = {clearDelay: "clearDelay", rndSel: "rnd", prSel: "showPreviews", hasHold: "holdEnabled", blocksSel: "baseBlockSet", gravityLvl: "gravityLvl", lockDelay: "lockDelay", mess: "mess", gapW: "gapW", gInv: "gInv", garbageDelay: "gDelay", gblockSel: "gblock", tsdOnly: "tsdOnly", allSpin: "allSpin", speedLimit: "speedLimit", scoreMult: "scoreMult", clearLines: "clearLines", sfx: "sfx", vsfx: "vsfx", solidAtk: "solidAttack", sgProfile: "sgpA"};
  this.RULESETS = [{id: 0, lvl: 1, name: "Default", key: "", desc: "Normal settings", c: {}}, {id: 1, lvl: 1, name: "Big mode", key: "big", desc: "Blocks are larger than normal", c: {bbs: 1}}, {id: 2, lvl: 3, name: "Pentomino", key: "pentomino", desc: "Pentomino blocks", c: {bbs: 4}}, {id: 3, lvl: 2, name: "MPH", key: "MPH", desc: "Memoryless, previewless, holdless", c: {pr: 0, hold: false, rnd: 2}}];
  this.MODES = [{id: 1, n: i18n.sprint, modes: [{id: 2, n: "20", fn: "20L", rs: [0, 2, 3]}, {id: 1, n: "40", fn: "40L", rs: [0, 1, 2, 3]}, {id: 3, n: "100", fn: "100L", rs: [0, 1, 2, 3]}, {id: 4, n: "1K", fn: "1000L", rs: [0, 1, 2, 3]}]}, {id: 3, n: i18n.cheese, modes: [{id: 1, n: "10", fn: "10L", rs: [0, 2, 3]}, {id: 2, n: "18", fn: "18L", rs: [0, 3]}, {id: 3, n: "100", fn: "100L", rs: [0, 3]}, {id: 100, n: "&infin;", rs: [0, 2, 3]}]}, {id: 4, n: i18n.survival, modes: [{id: 1, n: "1g/s", rs: [0]}]}, {id: 5, n: i18n.ultra, modes: [{id: 1, n: "2min", rs: [0, 2, 3]}]}, {id: 7, n: i18n["20TSD"], modes: [{id: 1, n: "", rs: [0, 3]}]}, {id: 8, n: i18n.PCmode, modes: [{id: 1, n: "", rs: [0, 3]}]}, {id: 2, n: i18n.freePlay, modes: [{id: 1, n: "", rs: [0, 1, 2, 3]}]}];
  this.combo = null;
  this.isOpen = false;
  this.rs1 = document.getElementById("ruleSel1");
  this.registerCombo();
}
function Report(type) {
  this.p = type;
  this.reportWin = document.getElementById("reportU");
  this.pmodeRuleId = 0;
  this.icn = document.getElementsByClassName("warnI")[0];
  this.rReTxt = document.getElementById("rReTxt");
  this.repUser = document.getElementById("repUser");
  this.init();
}
function Items(p) {
  this.p = p;
  this.itmBox = document.getElementsByClassName("itmBox")[0];
  this.itmIcn = document.getElementsByClassName("itmIcn")[0];
  this.itmTxt = document.getElementsByClassName("itmTxt")[0];
  this.itmDef = [null, {id: 1, n: "Tblocks", i: "/res/img/i/tpieces.png", m: .24, p: .12}, {id: 2, n: "Tornado", i: "/res/img/i/tornado.png", m: .22, p: .22}, {id: 3, n: "Compress", i: "/res/img/i/compress.png", m: .2, p: .06}, {id: 4, n: "Fourwide", i: "/res/img/i/four.png", m: .04, p: .06}, {id: 5, n: "Poison", i: "/res/img/i/poison.png", m: .003, p: .03}, {id: 6, n: "Pentomino", i: "/res/img/i/pento.png", m: .107, p: .06}, {id: 7, n: "Big", i: "/res/img/i/big.png", m: .13, p: .06}, {id: 8, n: "Invert", i: "/res/img/i/invert.png", m: .02, p: .06}, {id: 9, n: "Mystery", i: "/res/img/i/unknown.png", m: 0, p: .3}, {id: 10, n: "Win", i: "/res/img/i/win.png", m: 0, p: 0}, {id: 11, n: "B1", i: "/res/img/i/dot.png", m: .04, p: .03}, {id: 12, n: "Big2", i: "/res/img/i/big.png", m: 0, p: 0}];
  this.item = null;
  this.key = 87;
  this.origBBS = null;
  this.P1 = 200;
  this.fs = false;
  this.f = null;
  this.isPriv = false;
  this.active = [];
  this.preload = [];
  var expected_date2 = new Date;
  this.dom = parseInt(expected_date2.getDate());
}
function InvertAnimator(listenerInfo, context) {
  this.items = listenerInfo;
  this.g = context;
  this.matrix = context.matrix;
  this.tmpMatrix = copyMatrix(context.matrix);
  this.items.invertMatrix();
  this.PER_ROUND = .1;
  this.hadGhost = this.g.ghostEnabled;
  this.i = 0;
  this.d = 0;
  this.g.ghostEnabled = false;
  this.g.redraw();
}
function PoisonAnimator(isSlidingUp, $cont) {
  this.items = isSlidingUp;
  this.g = $cont;
  this.matrix = $cont.matrix;
  this.PER_ROUND = .06;
  this.hadGhost = this.g.ghostEnabled;
  this.i = 0;
  this.d = 0;
  this.g.setCurrentPieceToDefaultPos();
  this.g.updateGhostPiece(true);
  this.g.ghostEnabled = false;
}
function CompressAnimator(isSlidingUp, $cont) {
  this.items = isSlidingUp;
  this.g = $cont;
  this.matrix = $cont.matrix;
  this.PER_ROUND = .06;
  this.hadGhost = this.g.ghostEnabled;
  this.i = 0;
  this.d = 0;
  this.g.setCurrentPieceToDefaultPos();
  this.g.updateGhostPiece(true);
  this.g.ghostEnabled = false;
}
function WindAnimator(data, linkedEntities, force) {
  this.items = data;
  this.g = linkedEntities;
  this.i = force;
  this.matrix = linkedEntities.matrix;
  this.PER_ROUND = .06;
  this.d = 0;
  this.hadGhost = this.g.ghostEnabled;
  this.g.setCurrentPieceToDefaultPos();
  this.g.updateGhostPiece(true);
  this.g.ghostEnabled = false;
}
function ItemActivation(canCreateDiscussions) {
  this.id = canCreateDiscussions;
  this.hd = 0;
}
function Friends(n) {
  this.Live = n;
  this.socket = null;
  this.uri = null;
  this.jwt = null;
  this.reconnects = 0;
  this.forcedReconDelay = 0;
  this.pendingStatus = null;
  this.friendsOpened = false;
  this.friendsCount = null;
  this.openChatName = null;
  this.friends = null;
  this.Live.friendsBtn.onclick = this.openFriends.bind(this);
  this.chatBox = document.getElementById("chatBox");
  this.notifElem = null;
  this.chatHeader = null;
  this.dmChatBackButton = null;
  this.unreadChannels = {};
  this.lastNotifSound = null;
  this.friendsError = null;
  this.statusData = null;
  this.VIEW_MODE = {FRIEND_LIST_LOADING: 0, NO_FRIENDS: 1, FRIEND_LIST: 2, TOO_MANY_CONN: 3, LOGIN_FIRST: 4, INTRO: 5};
  this.viewIntro();
}
function ChatAutocomplete(boardManager, isSlidingUp, $cont, $slides) {
  this.inp = boardManager;
  this.hintParent = isSlidingUp;
  this.prfx = $cont;
  this.hints = $slides;
  this.hintsImg = null;
  if (null === $slides) {
    this.initEmoteHints();
  }
  this.prefixInSearch = true;
  this.maxPerHint = 10;
  this.minimalLengthForHint = 1;
  this.addEmoteSurrounder = ":";
  this.wipePrevious = false;
  this.onWiped = null;
  this.preProcessEmotes = null;
  this.onEmoteObjectReady = null;
  this.moreEmotesAdded = false;
  this.selectedIndex = 0;
  this.hintsElem = document.createElement("div");
  this.hintsElem.classList.add("chatHints");
  hideElem(this.hintsElem);
  this.hintParent.appendChild(this.hintsElem);
  this.init();
}
function Matrix() {}
function EmoteSelect(boardManager, isSlidingUp, $cont, $slides, callback, scopeIn) {
  this.input = boardManager;
  this.emoteIndex = isSlidingUp;
  this.container = $cont;
  this.openBtn = $slides;
  this.path = callback;
  this.groupEmotes = scopeIn;
  this.init();
}
Game.prototype = GameProto, Game.prototype.constructor = Game, Game.prototype.rollBigSpawn = function () {
  if (this.bigChance) {
    var z = Math.floor(Math.random() * this.bigChance);
    var expected_date2 = new Date;
    if (!(!this.Live.LiveGameRunning || this.pmode || 0 !== z || 1 !== expected_date2.getDate() && 2 !== expected_date2.getDate() && 31 !== expected_date2.getDate())) {
      this.bigTriggered = true;
    }
  }
}, Game.prototype.loadGhostSkin = function (mmCoreSplitViewBlock, canCreateDiscussions) {
  this.ghostSkins[1].w = canCreateDiscussions;
  this.ghostTex = new Image;
  this.ghostTex.src = this.ghostSkins[1].data = mmCoreSplitViewBlock;
  this.ghostSkinId = 1;
  if ("webGL" === this.v.NAME) {
    this.v.loadTexture(1, mmCoreSplitViewBlock);
  }
  this.redraw();
}, Game.prototype.changeSkin = function (i) {
  var errorMessage;
  if (i >= 1e3 || void 0 !== this.skins[i] && this.skins[i].data) {
    this.skinId = i;
  } else {
    i = this.skinId = 0;
  }
  var needsTranslate = i >= 1e3 || void 0 === this.skins[i].cdn || this.skins[i].cdn;
  errorMessage = i >= 1e3 ? "/res/b/" + this.customSkinPath + ".png" : this.skins[i].data;
  var className = needsTranslate ? CDN_URL(errorMessage) : errorMessage;
  if (i > 0) {
    this.tex.src = className;
    if ("webGL" === this.v.NAME) {
      this.v.loadTexture(0, className);
    }
    if (i >= 1e3) {
      this.skins[i] = {id: i, data: errorMessage, w: 32};
    }
  } else {
    if (0 === i && "webGL" === this.v.NAME) {
      this.v.loadTexture(0, null);
    }
  }
  this.redrawAll();
}, Game.prototype.initSFX = function () {
  createjs.Sound.removeAllSounds();
  if (!SFXsets[this.Settings.SFXsetID]) {
    this.Settings.SFXsetID = 2;
  }
  if (this.VSEenabled && !VSFXsets[this.Settings.VSFXsetID]) {
    this.VSEenabled = false;
    this.Settings.VSFXsetID = 1;
  }
  this.changeSFX(new SFXsets[this.Settings.SFXsetID].data);
  if (this.VSEenabled) {
    this.changeSFX(new VSFXsets[this.Settings.VSFXsetID].data, 1);
  }
}, Game.prototype.changeSFX = function (mmCoreSplitViewBlock, canCreateDiscussions) {
  var artistTrack;
  if (!canCreateDiscussions) {
    canCreateDiscussions = 0;
  }
  if (0 === canCreateDiscussions) {
    this.SFXset = mmCoreSplitViewBlock;
    artistTrack = "";
  } else {
    if (1 === canCreateDiscussions) {
      this.VSFXset = mmCoreSplitViewBlock;
      artistTrack = "v_";
    }
  }
  this.loadSounds(mmCoreSplitViewBlock, artistTrack);
}, Game.prototype.loadSounds = function (obj, type) {
  var rafWaitQueue = ["hold", "linefall", "lock", "harddrop", "rotate", "success", "garbage", "b2b", "land", "move", "died", "ready", "go", "golive", "ding", "msg", "fault", "item", "pickup"];
  if (null === obj.harddrop && (obj.harddrop = obj.lock), !this.SErotate) {
    var pageWidth = rafWaitQueue.indexOf("rotate");
    if (-1 !== pageWidth) {
      rafWaitQueue.splice(pageWidth, 1);
    }
  }
  var add = function (key, val) {
    if (!key || !val) {
      return;
    }
    let node = obj.getSoundUrlFromObj(val);
    if (key = type + key, node) {
      let aa = createjs.Sound.registerSound(node, key);
      if (!aa || !createjs.Sound._idHash[key]) {
        return void console.error("loadSounds error: src parse / cannot init plugins, id=" + key + (false === aa ? ", rs=false" : ", no _idHash"));
      }
      createjs.Sound._idHash[key].sndObj = val;
    }
  };
  if (obj.scoring) {
    var i = 0;
    for (; i < obj.scoring.length; ++i) {
      if (obj.scoring[i]) {
        add("s" + i, obj.scoring[i]);
      }
    }
  }
  if (obj.b2bScoring && Array.isArray(obj.b2bScoring)) {
    i = 0;
    for (; i < obj.b2bScoring.length; ++i) {
      if (obj.b2bScoring[i]) {
        add("bs" + i, obj.b2bScoring[i]);
      }
    }
  }
  if (obj.spawns) {
    var i;
    for (i in obj.spawns) {
      add("b_" + i, obj.spawns[i]);
    }
  }
  i = 0;
  for (; i < rafWaitQueue.length; ++i) {
    let f = rafWaitQueue[i];
    add(f, obj[f]);
  }
  if (obj.comboTones && Array.isArray(obj.comboTones)) {
    i = 0;
    for (; i < obj.comboTones.length; ++i) {
      var elem = obj.comboTones[i];
      if (elem) {
        createjs.Sound.registerSound(obj.getSoundUrlFromObj(elem), type + "c" + i);
      }
    }
    obj.maxCombo = obj.comboTones.length - 1;
  } else {
    if (obj.comboTones) {
      var _data = [];
      i = 0;
      for (; i < obj.comboTones.cnt; ++i) {
        _data.push({id: type + "c" + i, startTime: i * (obj.comboTones.duration + obj.comboTones.spacing), duration: obj.comboTones.duration});
      }
      obj.maxCombo = obj.comboTones.cnt - 1;
      var artistTrack = [{src: obj.getSoundUrl("comboTones"), data: {audioSprite: _data}}];
      createjs.Sound.registerSounds(artistTrack, "");
    }
  }
}, Game.prototype.drawBgGrid = function (canCreateDiscussions) {
  if (canCreateDiscussions = void 0 === canCreateDiscussions ? 1 : canCreateDiscussions, this.bgctx.rect(0, 0, this.canvas.width, this.canvas.height), this.bgctx.fillStyle = "#000000", this.bgctx.fill(), this.bgctx.beginPath(), this.bgctx.lineWidth = 1, 1 === canCreateDiscussions) {
    var ab = 1;
    for (; ab < 10; ab++) {
      this.bgctx.moveTo(ab * this.block_size + .5, 0);
      this.bgctx.lineTo(ab * this.block_size + .5, this.canvas.height);
    }
    ab = 1;
    for (; ab < 20; ab++) {
      this.bgctx.moveTo(0, ab * this.block_size + .5);
      this.bgctx.lineTo(241, ab * this.block_size + .5);
    }
    this.bgctx.strokeStyle = "#101010";
    this.bgctx.stroke();
    this.bgctx.beginPath();
    ab = 0;
    for (; ab < 9; ab++) {
      var ac = 1;
      for (; ac < 20; ac++) {
        this.bgctx.moveTo(ab * this.block_size + .75 * this.block_size, ac * this.block_size + .5);
        this.bgctx.lineTo((ab + 1) * this.block_size + .2 * this.block_size, ac * this.block_size + .5);
      }
    }
    ab = 0;
    for (; ab < 19; ab++) {
      var ad = 1;
      for (; ad < 10; ad++) {
        this.bgctx.moveTo(ad * this.block_size + .5, ab * this.block_size + .75 * this.block_size);
        this.bgctx.lineTo(ad * this.block_size + .5, (ab + 1) * this.block_size + .2 * this.block_size);
      }
    }
    this.bgctx.strokeStyle = "#202020";
    this.bgctx.stroke();
    this.bgctx.beginPath();
  } else {
    if (2 === canCreateDiscussions) {
      ab = 0;
      for (; ab < 9; ab++) {
        ac = 1;
        for (; ac < 20; ac++) {
          this.bgctx.moveTo(ab * this.block_size + .75 * this.block_size, ac * this.block_size - .5);
          this.bgctx.lineTo((ab + 1) * this.block_size + .2 * this.block_size, ac * this.block_size - .5);
        }
      }
      ab = 0;
      for (; ab < 19; ab++) {
        ad = 1;
        for (; ad < 10; ad++) {
          this.bgctx.moveTo(ad * this.block_size - .5, ab * this.block_size + .75 * this.block_size);
          this.bgctx.lineTo(ad * this.block_size - .5, (ab + 1) * this.block_size + .2 * this.block_size);
        }
      }
    } else {
      if (3 === canCreateDiscussions) {
        ab = 1;
        for (; ab < 10; ab++) {
          this.bgctx.moveTo(ab * this.block_size + .5, 0);
          this.bgctx.lineTo(ab * this.block_size + .5, this.canvas.height);
        }
      } else {
        if (4 === canCreateDiscussions) {
          ab = 1;
          for (; ab < 10; ab++) {
            this.bgctx.moveTo(ab * this.block_size + .5, 0);
            this.bgctx.lineTo(ab * this.block_size + .5, this.canvas.height);
          }
          ab = 1;
          for (; ab < 20; ab++) {
            this.bgctx.moveTo(0, ab * this.block_size + .5);
            this.bgctx.lineTo(241, ab * this.block_size + .5);
          }
        }
      }
    }
  }
  this.bgctx.strokeStyle = "#393939";
  this.bgctx.stroke();
  this.bgctx.lineWidth = 2;
  this.bgctx.strokeRect(1, 1, 240, this.canvas.height - 2);
}, Game.prototype.isPmode = function (canCreateDiscussions) {
  return canCreateDiscussions ? this.pmode : this.livePmode ? this.livePmode : this.pmode;
}, Game.prototype.startPractice = function (mmCoreSplitViewBlock, canCreateDiscussions, options) {
  if (void 0 === options && (options = {callback: null, isLivePmode: false, mapId: null, mapForOpponents: false}), (!this.starting || options.isLivePmode) && (!this.play || !this.Live.LiveGameRunning || this.pmode)) {
    if (!(this.Live.socket || this.Live.playingOfflineWarningShown)) {
      this.Live.showOfflineWarning();
    }
    if (this.pmode !== mmCoreSplitViewBlock) {
      this.RulesetManager.setActiveMode(mmCoreSplitViewBlock);
    }
    if (canCreateDiscussions) {
      this.sprintMode = -1;
    }
    this.pmode = this.selectedPmode = mmCoreSplitViewBlock;
    this.RulesetManager.adjustToValidMode(mmCoreSplitViewBlock, this.sprintMode);
    this.play = false;
    this.Replay = new Replay;
    this.Replay.config.m = this.pmode;
    if (!options.isLivePmode) {
      this.Replay.config.r = this.RulesetManager.pmodeRuleId;
    }
    this.R = options.isLivePmode ? this.conf[0] : this.conf[1];
    this.temporaryBlockSet = null;
    this.generatePracticeQueue(this.R.rnd);
    this.updateQueueBox();
    this.sprintInfoLineContent(0);
    hideElem(this.practiceMenu);
    this.Live.toggleMorePractice(true, false);
    hideElem(this.Live.teamOptions);
    hideElem(this.teamInfo);
    this.ModeManager.resetUI();
    var ae = options.callback ? options.callback : function () {
      this.Live.sendPracticeModeStarting();
      this.readyGo();
    };
    let artistTrack = 9999999999;
    if (1 === this.pmode) {
      this.Replay.config.m = this.sprintMode;
      this.linesRemaining = this.sprintModes[this.sprintMode];
      this.lrem.textContent = this.linesRemaining;
      showElem(this.sprintInfo);
    } else {
      if (2 === this.pmode) {
        this.Replay.config.m = 131072;
        this.linesRemaining = artistTrack;
        hideElem(this.sprintInfo);
      } else {
        if (3 === this.pmode) {
          this.Replay.config.m = 196608 | this.sprintMode;
          this.linesRemaining = this.cheeseModes[this.sprintMode];
          this.setLrem(this.linesRemaining);
          showElem(this.sprintInfo);
        } else {
          if (4 === this.pmode) {
            this.Replay.config.m = 262144;
            this.linesRemaining = artistTrack;
            this.setLrem(artistTrack);
            hideElem(this.sprintInfo);
          } else {
            if (5 === this.pmode) {
              this.sprintMode = 1;
              this.Replay.config.m = 327680 | this.sprintMode;
              showElem(this.sprintInfo);
              this.linesRemaining = this.ultraModes[this.sprintMode];
              this.lrem.textContent = sprintTimeFormat(this.linesRemaining, -1);
              this.sprintInfoLineContent(1);
            } else {
              if (6 === this.pmode) {
                hideElem(this.sprintInfo);
                this.Replay.config.m = 393216;
                this.linesRemaining = artistTrack;
                this.setLrem(artistTrack);
                this.v.clearMainCanvas();
                this.v.clearQueueCanvas();
                this.v.clearHoldCanvas();
                this.Caption.mapLoading();
                return this.MapManager.onMapReady = function () {
                  if (options.mapForOpponents) {
                    var indexLookupKey;
                    for (indexLookupKey in this.Live.loadMapForOpponents = true, this.GS.cidSlots) {
                      if (this.Live.clients[indexLookupKey].rep) {
                        this.Live.clients[indexLookupKey].rep.loadMap(this.MapManager.matrix, this.MapManager.mapData.queue);
                      }
                    }
                  }
                  if (this.matrix = copyMatrix(this.MapManager.matrix), this.Replay.config.map = this.sprintMode = this.MapManager.mapId, this.redrawMatrix(), this.MapManager.mapData.queue) {
                    var PL$13 = this.MapManager.mapData.queue;
                    this.queue = [];
                    var PL$17 = 0;
                    for (; PL$17 < PL$13.length; ++PL$17) {
                      this.queue.push(new Block(this.blockIds[PL$13[PL$17]]));
                    }
                  }
                  this.updateQueueBox();
                  ae.call(this);
                }.bind(this), void this.MapManager.prepare(options.mapId);
              }
              if (7 === this.pmode) {
                this.sprintMode = 1;
                this.Replay.config.m = 458752 | this.sprintMode;
                showElem(this.sprintInfo);
                this.linesRemaining = artistTrack;
                this.lrem.textContent = 0;
                this.sprintInfoLineContent(2);
              } else {
                if (8 === this.pmode) {
                  this.sprintMode = 1;
                  this.Replay.config.m = 524288 | this.sprintMode;
                  this.PCdata = {blocks: 0, lines: 0};
                  showElem(this.sprintInfo);
                  this.linesRemaining = artistTrack;
                  this.lrem.textContent = 0;
                  this.sprintInfoLineContent(3);
                  this.RulesetManager.appendRule({grav: 10}, this.conf[1]);
                } else {
                  if (9 === this.pmode) {
                    hideElem(this.sprintInfo);
                    this.Replay.config.m = 589824;
                    this.linesRemaining = artistTrack;
                    this.garbageCols = [];
                    this.gameEnded = false;
                    this.blockInHold = null;
                    this.clock = 0;
                    this.deadline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    this.clearMatrix();
                    this.RulesetManager.applyRule({}, this.R);
                    this.generatePracticeQueue(this.R.rnd);
                    this.setLrem(artistTrack);
                    this.v.clearMainCanvas();
                    this.v.clearQueueCanvas();
                    this.v.clearHoldCanvas();
                    this.Caption.mapLoading(1);
                    this.GameStats.adjustToGameMode();
                    return this.ModeManager.onReady = function () {
                      this.Caption.hide();
                      this.ModeManager.initialExecCommands(() => {
                        ae.call(this);
                      });
                      this.updateQueueBox();
                    }.bind(this), this.ModeManager.prepare(options.mapId), void (this.starting = true);
                  }
                }
              }
            }
          }
        }
      }
    }
    ae.call(this);
  }
}, Game.prototype.readyGo = function () {
  if (this.starting = true, this.Caption.hideExcept(this.Caption.MODE_INFO), this.livePmode = 0, this.Live.loadMapForOpponents = false, !this.pmode) {
    this.Live.beforeReset();
    this.Replay.config.m = -1;
    this.Replay.config.m = 6553600;
    this.Replay.config.seed = this.blockSeed;
    delete this.Replay.config.r;
    this.v.clearQueueCanvas();
    var indexLookupKey = 0;
    for (; indexLookupKey < this.Live.maxSlots; indexLookupKey++) {
      this.GS.slots[indexLookupKey].clear();
    }
    if (this.R = this.conf[0], hideElem(this.rInfoBox), hideElem(this.practiceMenuBig), hideElem(this.Live.teamOptions), 2 === this.Live.liveMode) {
      hideElem(this.sprintInfo);
      hideElem(this.practiceMenu);
      showElem(this.teamInfo);
      showElem(this.rInfoBox);
    } else {
      if (3 === this.Live.liveMode) {
        this.pmode = this.Live.livePmodeTypes[0];
        this.sprintMode = this.Live.livePmodeTypes[1];
        if (6 === this.pmode) {
          this.sprintMode = this.Live.liveMap;
        }
        var request = {callback: function () {
          this.livePmode = this.pmode;
          this.pmode = 0;
          showElem(this.rInfoBox);
          if (!(6 === this.livePmode && this.MapManager.mapData.queue)) {
            this.generateLiveQueue();
            this.updateQueueBox();
          }
          this.startReadyGo();
        }.bind(this), isLivePmode: true, mapId: this.sprintMode, mapForOpponents: true};
        return void this.startPractice(this.pmode, false, request);
      }
    }
  }
  this.startReadyGo();
}, Game.prototype.startReadyGo = function () {
  if (9 !== this.isPmode(false)) {
    this.blockInHold = null;
  }
  this.redrawHoldBox();
  if (6 !== this.isPmode(false) && 9 !== this.isPmode(false)) {
    this.v.clearMainCanvas();
  }
  var af = 2;
  if (this.SEStartEnabled) {
    this.playSound("ready");
  }
  this.Caption.readyGo(0);
  var timers = this;
  this.interval = setInterval(function () {
    if (1 === (af = af - 1)) {
      timers.Caption.readyGo(1);
      if (timers.SEStartEnabled) {
        timers.playSound(timers.isPmode(true) ? "go" : "golive");
      }
    } else {
      if (0 === af) {
        clearInterval(timers.interval);
        timers.restart();
        timers.starting = false;
      }
    }
  }, 900);
}, Game.prototype.getPlace = function (inverseFlag, isSlidingUp) {
  var ccw_flag = 7;
  if (isSlidingUp) {
    if (inverseFlag) {
      ccw_flag = this.Live.players.length + 1;
    } else {
      if (null !== this.place) {
        ccw_flag = this.place;
      } else {
        var ag = 0;
        var indexLookupKey = 0;
        for (; indexLookupKey < this.Live.players.length; indexLookupKey++) {
          if (-1 !== this.Live.notPlaying.indexOf(this.Live.players[indexLookupKey])) {
            ag = ag + 1;
          }
        }
        ccw_flag = this.Live.players.length - ag + 1;
      }
    }
    this.place = ccw_flag;
    this.Caption.gamePlace(this);
  } else {
    ccw_flag = inverseFlag ? this.Live.players.length + 1 : this.Live.players.length - this.Live.notPlaying.length + 1;
  }
  return ccw_flag;
}, Game.prototype.getPlaceColor = function (selectionHeight) {
  var key = {str: "", color: ""};
  var msgname = i18n.th;
  var pxAllowance = selectionHeight / 10;
  if (pxAllowance < .4 || pxAllowance > 2) {
    switch (selectionHeight % 10) {
      case 1:
        msgname = i18n.st;
        break;
      case 2:
        msgname = i18n.nd;
        break;
      case 3:
        msgname = i18n.rd;
        break;
      default:
        msgname = i18n.th;
    }
  }
  switch (key.str = selectionHeight + msgname, selectionHeight) {
    case 1:
      key.color = "yellow";
      break;
    case 2:
      key.color = "orange";
      break;
    case 3:
      key.color = "#FC6D3D";
      break;
    default:
      key.color = "#00BFFF";
  }
  return key;
}, Game.prototype.start = function () {
  this.generateQueue();
  this.getNextBlock();
  this.redraw();
  this.run();
  this.Live.onReset();
}, Game.prototype.restart = function () {
  if (this.starting && (this.Live.LiveGameRunning || this.pmode)) {
    if (2 === this.inactiveGamesCount && !this.isPmode(true)) {
      return void this.Live.spectatorMode();
    }
    if (6 !== this.isPmode(false) && 9 !== this.isPmode(false) && (this.clearMatrix(), 9 !== this.pmode && this.ModeManager.resetUI()), this.gameEnded = false, this.Replay.clear(), this.Replay.mode = 1, this.lastDAS = 0, this.firstDAS = true, this.holdPressed = false, this.holdUsedAlready = false, this.hardDropPressed = false, this.comboCounter = -1, this.bigTriggered = false, this.isBack2Back = false, this.lastHolePos = null, this.temporaryBlockSet = null, this.redrawHoldBox(), this.deadline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.activeBlock = new Block(0), this.place = null, this.frames = 0, this.timer = 0, this.clock = 0, this.redBar = 0, this.placedBlocks = 0, this.lastPlacements = [], this.totalFinesse = 0, this.totalKeyPresses = 0, this.finesse = 0, this.incomingGarbage = [], this.solidToAdd = 0, this.solidHeight = 0, this.applyGravityLvl(this.R.gravityLvl), this.setLockDelay(this.R.lockDelay), this.setSpeedLimit(this.R.speedLimit), this.resetGameData(), this.Items.onReset(), this.soundQ.stop(), 9 !== this.isPmode(true) && (this.GameStats.adjustToGameMode(), this.blockInHold = null), this.isPmode(true) || (this.livePmode || this.generateLiveQueue(), this.Live.onReset(), 2 !== this.Live.liveMode && 3 !== this.Live.liveMode && hideElem(this.rInfoBox), this.Live.toggleMorePractice(true, false), 1 === this.R.ext && (this.comboAttack = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 0], this.comboTableTimer && clearTimeout(this.comboTableTimer), this.comboTableTimer = setTimeout(() => {
      this.comboAttack = this.comboAttackDef;
      this.comboTableTimer = null;
    }, 2e4))), this.isPmode(false) && (3 === this.isPmode(false) ? this.cheeseModeStart() : 4 === this.isPmode(false) && (this.lastGarbage = 0)), 1 === this.Live.liveMode && !this.isPmode(true)) {
      var ah = 0;
      for (; ah < this.cheeseHeight; ah++) {
        this.addGarbage(1);
      }
    }
    if (this.softDrop) {
      if (this.isSoftDropFasterThanGravity()) {
        this.softDropSet(true, 0);
      } else {
        this.softDropSet(false, null);
      }
    }
    this.Caption.hide();
    if (1 === this.focusState) {
      this.Caption.outOfFocus();
    }
    this.GameStats.reorder();
    this.Settings.onGameStart();
    this.cancelSolid();
    this.getNextBlock();
    this.redrawBlocked = false;
    this.redraw();
    var artistTrack = this.timestamp();
    this.play = true;
    if (-1 !== this.Replay.mode) {
      this.Replay.mode = 0;
    }
    this.Replay.config.softDropId = this.softDropId;
    this.Replay.config.gameStart = artistTrack;
    this.Replay.config.bs = this.skinId;
    if (this.R.baseBlockSet) {
      this.Replay.config.bbs = this.R.baseBlockSet;
    }
    if (this.monochromeSkin) {
      this.Replay.config.bs = 7;
      this.Replay.config.mClr = this.monochromeSkin;
    }
    if (this.Settings.touchControlsEnabled) {
      this.Replay.config.touch = 1;
    }
    if (this.isInvisibleSkin) {
      this.Replay.config.bs += 100;
    }
    if (this.skinId >= 1e3 && this.customSkinPath) {
      this.Replay.config.bp = this.customSkinPath.substring(0, 6);
    } else {
      delete this.Replay.config.bp;
    }
    this.Replay.config.se = this.Settings.SFXsetID;
    this.Replay.config.das = this.Settings.DAS;
    this.Replay.config.arr = this.Settings.ARR > 0 ? this.Settings.ARR : void 0;
    delete this.Replay.config.sc;
    this.Replay.onMoveAdded = this.onMove.bind(this);
    if (!this.isTabFocused) {
      this.play = false;
      this.lastSeen = artistTrack;
      this.Replay.toggleAfkMode(true);
    }
    if (!this.isPmode(true)) {
      this.replayPartsSent = 0;
      this.Live.sendReplayConfig();
    }
    if (1 === this.DASmethod) {
      this.evalDefferedDAS(null, artistTrack);
    }
  }
}, Game.prototype.setFocusState = function (canCreateDiscussions) {
  this.focusState = canCreateDiscussions;
  if (1 === canCreateDiscussions && this.play) {
    this.Caption.outOfFocus();
  } else {
    this.Caption.hide(this.Caption.OUT_OF_FOCUS);
  }
}, Game.prototype.keyInput2 = function (canCreateDiscussions) {
  if (113 === canCreateDiscussions.keyCode || canCreateDiscussions.keyCode === this.Settings.controls[9]) {
    if (1 === this.focusState) {
      if (canCreateDiscussions.keyCode < 112 || canCreateDiscussions.keyCode > 123) {
        return;
      }
      this.canvas.focus();
      this.setFocusState(0);
    }
    if (canCreateDiscussions.keyCode >= 112 && canCreateDiscussions.keyCode <= 123) {
      canCreateDiscussions.preventDefault();
    }
    this.Live.sendRestartEvent();
  } else {
    if (115 === canCreateDiscussions.keyCode || canCreateDiscussions.keyCode === this.Settings.controls[8]) {
      if (1 === this.focusState) {
        if (canCreateDiscussions.keyCode < 112 || canCreateDiscussions.keyCode > 123) {
          return;
        }
        this.canvas.focus();
        this.setFocusState(0);
      }
      if (canCreateDiscussions.keyCode >= 112 && canCreateDiscussions.keyCode <= 123) {
        canCreateDiscussions.preventDefault();
      }
      this.startPractice(this.selectedPmode);
      if (9 === this.pmode) {
        canCreateDiscussions.stopImmediatePropagation();
      }
    } else {
      if (13 === canCreateDiscussions.keyCode && 1 !== this.focusState) {
        this.setFocusState(1);
        this.Live.chatInput.focus();
      }
    }
  }
  if (0 !== this.focusState || 38 !== canCreateDiscussions.keyCode && 40 !== canCreateDiscussions.keyCode && 32 !== canCreateDiscussions.keyCode || canCreateDiscussions.preventDefault(), (this.play || this.redrawBlocked || this.starting) && 0 === this.focusState) {
    if (canCreateDiscussions.repeat) {
      return void canCreateDiscussions.preventDefault();
    }
    if (this.starting) {
      return void (canCreateDiscussions.keyCode === this.Settings.ml ? this.pressedDir[-1] = this.timestamp() : canCreateDiscussions.keyCode === this.Settings.mr ? this.pressedDir[1] = this.timestamp() : canCreateDiscussions.keyCode !== this.Settings.sd || this.softDrop || this.softDropSet(true, null));
    }
    if (canCreateDiscussions.keyCode === this.Settings.rl) {
      this.rotateCurrentBlock(-1);
      this.Replay.add(new ReplayAction(this.Replay.Action.ROTATE_LEFT, this.timestamp()));
      this.lastAction = this.timestamp();
    } else {
      if (canCreateDiscussions.keyCode === this.Settings.rr) {
        this.rotateCurrentBlock(1);
        this.Replay.add(new ReplayAction(this.Replay.Action.ROTATE_RIGHT, this.timestamp()));
        this.lastAction = this.timestamp();
      } else {
        if (canCreateDiscussions.keyCode === this.Settings.dr) {
          this.rotateCurrentBlock(2);
          this.Replay.add(new ReplayAction(this.Replay.Action.ROTATE_180, this.timestamp()));
          this.lastAction = this.timestamp();
        } else {
          if (canCreateDiscussions.keyCode !== this.Settings.ml || this.pressedDir[-1]) {
            if (canCreateDiscussions.keyCode !== this.Settings.mr || this.pressedDir[1]) {
              if (canCreateDiscussions.keyCode !== this.Settings.hk || this.holdPressed) {
                if (this.redrawBlocked) {
                  return;
                }
                if (!this.hardDropPressed && canCreateDiscussions.keyCode === this.Settings.hd && this.isHardDropAllowed()) {
                  this.hardDropPressed = true;
                  this.hardDrop(this.timestamp());
                } else {
                  if (!(canCreateDiscussions.keyCode !== this.Settings.sd || this.softDrop)) {
                    this.softDropSet(true, this.timestamp());
                  }
                }
              } else {
                this.holdBlock();
                this.holdPressed = true;
              }
            } else {
              artistTrack = this.timestamp();
              this.moveCurrentBlock(1, false, artistTrack);
              this.pressedDir[1] = artistTrack;
              this.Replay.add(new ReplayAction(this.Replay.Action.MOVE_RIGHT, this.pressedDir[1]));
              if (this.Settings.DAScancel && this.pressedDir[-1]) {
                this.directionCancel(-1, -1);
              }
              if (1 === this.DASmethod) {
                this.setDASto(1, true, null);
              }
            }
          } else {
            var artistTrack = this.timestamp();
            this.moveCurrentBlock(-1, false, artistTrack);
            this.pressedDir[-1] = artistTrack;
            this.Replay.add(new ReplayAction(this.Replay.Action.MOVE_LEFT, this.pressedDir[-1]));
            if (this.Settings.DAScancel && this.pressedDir[1]) {
              this.directionCancel(1, -1);
            }
            if (1 === this.DASmethod) {
              this.setDASto(-1, true, null);
            }
          }
        }
      }
    }
    if (canCreateDiscussions.keyCode < 113 || canCreateDiscussions.keyCode > 123) {
      return canCreateDiscussions.preventDefault(), canCreateDiscussions.stopPropagation(), false;
    }
  }
}, Game.prototype.keyInput3 = function (canCreateDiscussions) {
  if (canCreateDiscussions.keyCode === this.Settings.ml) {
    this.directionCancel(-1, false);
    if (-1 === this.pressedDir[1]) {
      this.pressedDir[1] = this.timestamp();
    }
    if (1 === this.DASmethod) {
      this.setDASto(-1, false);
    }
  } else {
    if (canCreateDiscussions.keyCode === this.Settings.mr) {
      this.directionCancel(1, false);
      if (-1 === this.pressedDir[-1]) {
        this.pressedDir[-1] = this.timestamp();
      }
      if (1 === this.DASmethod) {
        this.setDASto(1, false);
      }
    } else {
      if (canCreateDiscussions.keyCode === this.Settings.sd && this.softDrop) {
        this.softDropSet(false, this.timestamp());
      } else {
        if (canCreateDiscussions.keyCode === this.Settings.hk) {
          this.holdPressed = false;
        } else {
          if (canCreateDiscussions.keyCode === this.Settings.hd) {
            this.hardDropPressed = false;
          }
        }
      }
    }
  }
}, Game.prototype.directionCancel = function (canCreateDiscussions, isSlidingUp) {
  if (-1 === canCreateDiscussions ? (this.pressedDir[-1] = isSlidingUp, this.ARRon[-1] = false) : (this.pressedDir[1] = isSlidingUp, this.ARRon[1] = false), 1 === this.DASmethod && false === isSlidingUp) {
    var criterion_index = -1 === canCreateDiscussions ? 1 : -1;
    var artistTrack = this.timestamp();
    if (this.pressedDir[criterion_index]) {
      if (this.Settings.DAScancel) {
        this.setDASto(criterion_index, true, null);
      } else {
        this.evalDefferedDAS(criterion_index, artistTrack);
      }
    }
  }
}, Game.prototype.evalDefferedDAS = function (i, res) {
  if (null === i) {
    if (this.pressedDir[-1] && (i = -1), this.pressedDir[1] && (null === i || this.pressedDir[1] < this.pressedDir[-1]) && (i = 1), null === i) {
      return;
    }
  } else {
    if (!this.pressedDir[i]) {
      return;
    }
  }
  var artistTrack = Math.max(0, this.Settings.DAS - (res - this.pressedDir[i]));
  this.setDASto(i, true, artistTrack);
}, Game.prototype.setDASto = function (targetId, isSlidingUp, value) {
  var target = null === value ? this.Settings.DAS : value;
  if (isSlidingUp || null === this.DASto[targetId]) {
    if (isSlidingUp && null === this.DASto[targetId]) {
      var action = this;
      this.DASto[targetId] = window.setTimeout(function () {
        action.DASto[targetId] = null;
        var i = -1 === targetId ? 1 : -1;
        if (action.lastDAS !== targetId && (action.play || null !== action.animator)) {
          var engine = action.timestamp();
          if (!(-1 === action.pressedDir[targetId] || action.pressedDir[-1] > 0 && action.pressedDir[1] > 0 && action.pressedDir[i] > action.pressedDir[targetId])) {
            action.activateDAS(targetId, engine);
            if (action.DASdebug && null === value) {
              action.plotForDASDebug(engine - action.pressedDir[targetId]);
            }
          }
        }
      }, target);
    }
  } else {
    window.clearTimeout(this.DASto[targetId]);
    this.DASto[targetId] = null;
  }
}, Game.prototype.redrawMatrix = function () {
  this.v.redrawMatrix();
}, Game.prototype.drawGhostAndCurrent = function () {
  var ai = this.blockSets[this.activeBlock.set];
  var dist = 1 === ai.scale ? ai.blocks[this.activeBlock.id].blocks[this.activeBlock.rot] : ai.previewAs.blocks[this.activeBlock.id].blocks[this.activeBlock.rot];
  var i = dist.length;
  if (this.drawScale = ai.scale, this.ghostEnabled && !this.gameEnded) {
    var k = 0;
    for (; k < i; k++) {
      var j = 0;
      for (; j < i; j++) {
        if (dist[k][j] > 0) {
          this.v.drawGhostBlock(this.ghostPiece.pos.x + j * this.drawScale, this.ghostPiece.pos.y + k * this.drawScale, ai.blocks[this.activeBlock.id].color);
          if (this.activeBlock.item && dist[k][j] === this.activeBlock.item) {
            this.v.drawBrickOverlay(this.ghostPiece.pos.x + j * this.drawScale, this.ghostPiece.pos.y + k * this.drawScale, true);
          }
        }
      }
    }
  }
  if (!this.gameEnded) {
    k = 0;
    for (; k < i; k++) {
      j = 0;
      for (; j < i; j++) {
        if (dist[k][j] > 0) {
          this.v.drawBlock(this.activeBlock.pos.x + j * this.drawScale, this.activeBlock.pos.y + k * this.drawScale, ai.blocks[this.activeBlock.id].color, 0);
          if (this.activeBlock.item && dist[k][j] === this.activeBlock.item) {
            this.v.drawBrickOverlay(this.activeBlock.pos.x + j * this.drawScale, this.activeBlock.pos.y + k * this.drawScale, false);
          }
        }
      }
    }
  }
  this.drawScale = 1;
}, Game.prototype.redraw = function () {
  if (!this.redrawBlocked) {
    this.redrawMatrix();
    this.drawGhostAndCurrent();
    this.v.redrawRedBar(false);
    if (this.statsEnabled && 1 === this.statsMode) {
      this.stats.update();
    }
  }
}, Game.prototype.redrawAll = function () {
  this.redraw();
  this.redrawHoldBox();
  this.updateQueueBox();
}, Game.prototype.updateLiveMatrix = function (ballNumber, mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
  var sprite = this.GS.slots[ballNumber].cid;
  if (!(this.GS.extendedAvailable && !arrayContains(this.Live.bots, sprite) && null !== this.Live.clients[sprite].rep)) {
    if (!this.GS.slots[ballNumber].v.g) {
      this.GS.slots[ballNumber].v.g = this;
    }
    this.GS.slots[ballNumber].v.updateLiveMatrix(mmCoreSplitViewBlock, mmaPushNotificationsComponent);
  }
}, Game.prototype.playSound = function (data, canCreateDiscussions) {
  if (this.SEenabled && this.R.sfx) {
    if (!canCreateDiscussions) {
      canCreateDiscussions = 0;
    }
    var aj = this;
    var ak = false;
    var trace = function (callback, group) {
      if (!callback || !(callback in createjs.Sound._idHash)) {
        return;
      }
      let al = createjs.Sound._idHash[callback].sndObj;
      if (al && al.q) {
        if (!(1 !== al.q || ak)) {
          ak = true;
          aj.soundQ.stop();
        }
        aj.soundQ.add(callback, group);
      } else {
        createjs.Sound.play(callback).volume = group;
      }
    };
    if (Array.isArray(data)) {
      if (2 !== canCreateDiscussions) {
        data.forEach(function (obj) {
          trace(obj, aj.SFXset.volume);
        });
      }
      if (1 !== canCreateDiscussions && this.VSEenabled && this.R.vsfx) {
        data.forEach(function (letter) {
          trace("v_" + letter, aj.VSFXset.volume);
        });
      }
    } else {
      if (2 !== canCreateDiscussions) {
        trace(data, this.SFXset.volume);
      }
      if (1 !== canCreateDiscussions && this.VSEenabled && this.R.vsfx) {
        trace("v_" + data, this.VSFXset.volume);
      }
    }
  }
}, Game.prototype.moveCurrentBlock = function (source, interpolateValue, dontForceConstraints) {
  return interpolateValue || this.finesse++, source = source * this.blockSets[this.activeBlock.set].step, !this.checkIntersection(this.activeBlock.pos.x + source, this.activeBlock.pos.y, null) && (this.activeBlock.pos.x = this.activeBlock.pos.x + source, this.lastAction = dontForceConstraints, this.updateGhostPiece(true), this.redraw(), interpolateValue || this.playSound("move"), true);
}, Game.prototype.beforeHardDrop = function (rest_pts_in) {
  if (this.bigTriggered && this.Live.LiveGameRunning && !this.pmode) {
    this.bigTriggered = false;
    var new_region = new ReplayAction(this.Replay.Action.AUX, rest_pts_in);
    new_region.d = [this.Replay.AUX.BLOCK_SET, 0, 2];
    this.Replay.add(new_region);
    this.temporaryBlockSet = 2;
  }
}, Game.prototype.hardDrop = function (mmCoreSplitViewBlock) {
  if (this.beforeHardDrop(mmCoreSplitViewBlock), this.hdAbort) {
    this.hdAbort = false;
  } else {
    this.Replay.add(new ReplayAction(this.Replay.Action.HARD_DROP, mmCoreSplitViewBlock));
    var am = this.blockSets[this.activeBlock.set];
    var indexLookupKey = this.activeBlock.pos.x + am.blocks[this.activeBlock.id].cc[this.activeBlock.rot];
    var an = this.finesse - (0 === this.activeBlock.set ? finesse[this.activeBlock.id][this.activeBlock.rot][indexLookupKey] : 0);
    if (an > 0) {
      this.totalFinesse += an;
      if (1 === this.pmode && this.Settings.restartSprintOnFF) {
        this.GameOver();
        this.startPractice(1);
      }
    }
    this.totalKeyPresses += this.finesse;
    this.finesse = 0;
    if (!this.ghostEnabled) {
      this.updateGhostPiece(true);
    }
    var artistTrack = this.ghostPiece.pos.y;
    if (this.spinPossible && artistTrack !== this.activeBlock.pos.y) {
      this.spinPossible = false;
    }
    this.score(this.Scoring.A.HARD_DROP, artistTrack - this.activeBlock.pos.y);
    this.GameStats.get("FINESSE").set(this.totalFinesse);
    this.placeBlock(this.ghostPiece.pos.x, artistTrack, mmCoreSplitViewBlock);
    this.redraw();
    if (9 === this.pmode) {
      this.ModeManager.on(this.ModeManager.BLOCK, this.placedBlocks);
    }
    if (this.SEenabled && this.play) {
      if (an > 0 && this.SEFaultEnabled) {
        this.playSound("fault");
      } else {
        this.playSound(this.hardDropPressed ? "harddrop" : "lock");
      }
    }
  }
}, Game.prototype.isSoftDropFasterThanGravity = function () {
  return this.R.gravityLvl <= 1 || this.softDropSpeeds[this.softDropId].time / (this.softDropSpeeds[this.softDropId].steps + 1) < this.baseGravity[0] / this.baseGravity[1];
}, Game.prototype.softDropSet = function (isSlidingUp, eof) {
  let indents = false;
  if (true === isSlidingUp) {
    if (this.isSoftDropFasterThanGravity()) {
      this.softDrop = true;
      this.currentGravity[0] = this.softDropSpeeds[this.softDropId].time;
      this.currentGravity[1] = this.softDropSpeeds[this.softDropId].steps;
      indents = true;
    }
  } else {
    indents = this.softDrop;
    this.softDrop = false;
    this.currentGravity = this.baseGravity.slice(0);
    this.timer = 0;
  }
  if (null !== eof && indents) {
    this.Replay.add(new ReplayAction(this.Replay.Action.SOFT_DROP_BEGIN_END, eof));
  }
}, Game.prototype.GameOver = function () {
  this.paintMatrixWithColor(9);
  this.gameEnded = true;
  this.play = false;
  if (!this.isPmode(true)) {
    this.sendRepFragment();
    this.Live.sendGameOverEvent();
    this.getPlace(false, true);
    if (!this.Replay.hasUserInputs()) {
      if (2 == ++this.inactiveGamesCount) {
        this.Live.showInChat("", i18n.inactive1);
      } else {
        this.Live.showInChat("<span style='color:yellow'>" + i18n.warning + "</span>", i18n.inactive2);
      }
    }
  }
  if (this.isPmode(false)) {
    if (!(1 === this.isPmode(false))) {
      if (4 === this.isPmode(true)) {
        this.Live.sendGameModeResult(this.Replay);
      } else {
        if (7 === this.isPmode(true)) {
          this.practiceModeCompleted();
        } else {
          if (9 === this.isPmode(true)) {
            this.ModeManager.saveScore(false);
          }
        }
      }
    }
  }
  this.Live.onGameEnd();
  this.Settings.onGameEnd();
  this.Items.reset();
  this.updateTextBar();
  this.playSound("died");
  this.GS.setTarget(-1);
  this.cancelSolid();
}, Game.prototype.paintMatrixWithColor = function (signedTxHex) {
  var IS_HANDLED = 0;
  for (; IS_HANDLED < 20; IS_HANDLED++) {
    var signedTransactionsCounter = 0;
    for (; signedTransactionsCounter < 10; signedTransactionsCounter++) {
      if (this.matrix[IS_HANDLED][signedTransactionsCounter] > 0) {
        this.matrix[IS_HANDLED][signedTransactionsCounter] = signedTxHex;
      }
    }
  }
}, Game.prototype.generatePracticeQueue = function (mmCoreSplitViewBlock) {
  var ao = 0;
  do {
    var artistTrack = this.RNG().toString(36).substring(7);
    this.blockRNG = alea(artistTrack);
    this.Replay.config.seed = artistTrack;
    this.initRandomizer(mmCoreSplitViewBlock);
    this.generateQueue();
  } while (++ao < 1e3 && this.isBannedStartSequence(this.queue, false));
}, Game.prototype.getAdjustedLiveSeed = function (type) {
  var default_favicon = 0;
  var listMD5 = [];
  var text = type;
  do {
    type = text + (0 === default_favicon ? "" : default_favicon.toString(36));
    let numKeysDeleted = alea(type);
    let listContent = this.randomizerFactory(this.conf[0].rnd, numKeysDeleted);
    listMD5 = this.getQueuePreview(listContent);
  } while (++default_favicon < 1e3 && this.isBannedStartSequence(listMD5, true));
  return type;
}, Game.prototype.generateLiveQueue = function () {
  this.blockRNG = alea(this.blockSeed);
  this.RNG = alea(this.blockSeed);
  this.Replay.config.seed = this.blockSeed;
  this.initRandomizer(this.conf[0].rnd);
  this.generateQueue();
}, Game.prototype.isBannedStartSequence = function (limitFromUnread, isSlidingUp) {
  limitFromUnread = limitFromUnread || this.queue;
  let ap = isSlidingUp ? 3 === this.Live.liveMode ? this.Live.livePmodeTypes[0] : this.livePmode : this.pmode;
  let aq = isSlidingUp ? this.conf[0].baseBlockSet : this.conf[1].baseBlockSet;
  return limitFromUnread.length >= 2 && aq <= 3 && (!isSlidingUp || 0 === this.conf[0].rnd) && (1 === ap && (limitFromUnread[0].id >= 5 || 1 === limitFromUnread[0].id && limitFromUnread[1].id >= 5) || 2 !== ap && limitFromUnread[0].id >= 5 && limitFromUnread[1].id >= 5);
}, Game.prototype.refillQueue = function () {
  if (!(6 === this.pmode && null != this.MapManager.mapData.queue || 9 === this.pmode && this.ModeManager.noQueueRefill)) {
    let artistTrack = this.getRandomizerBlock();
    0;
    this.queue.push(artistTrack);
  }
}, Game.prototype.getNextBlock = function (mmCoreSplitViewBlock) {
  mmCoreSplitViewBlock = mmCoreSplitViewBlock || this.timestamp();
  this.lockDelayActive = false;
  this.lastGeneration = mmCoreSplitViewBlock;
  this.activeBlock = this.getBlockFromQueue();
  this.setCurrentPieceToDefaultPos();
  this.updateGhostPiece(true);
  this.checkAutoRepeat(mmCoreSplitViewBlock, false);
  if (!this.isPmode(true) && 0 === this.transmitMode && this.snapRate <= 1e3 && mmCoreSplitViewBlock - this.lastSnapshot > this.snapRate / 4) {
    this.sendSnapshot();
    this.lastSnapshot = mmCoreSplitViewBlock;
  }
  if (this.VSEenabled && this.VSFXset.spawns) {
    this.playCurrentPieceSound();
  }
  this.timer = 0;
}, Game.prototype.playCurrentPieceSound = function () {
  this.playSound("b_" + this.blockSets[this.activeBlock.set].blocks[this.activeBlock.id].name);
}, Game.prototype.practiceModeCompleted = function (limitFromUnread) {
  limitFromUnread = limitFromUnread || this.timestamp();
  this.play = false;
  this.gameEnded = true;
  this.Replay.config.gameEnd = limitFromUnread;
  this.updateTextBar();
  this.paintMatrixWithColor(9);
  hideElem(this.sprintInfo);
  showElem(this.practiceMenu);
  if (2 !== this.isPmode(true) && 9 !== this.isPmode(true)) {
    if (this.livePmode) {
      this.Live.raceCompleted();
    } else {
      if (this.pmode) {
        this.Live.sendGameModeResult(this.Replay);
      }
    }
  }
}, Game.prototype.getComboAttack = function (ballNumber) {
  return ballNumber <= 12 ? this.comboAttack[ballNumber] : this.comboAttack[this.comboAttack.length - 1];
}, Game.prototype.deleteFromGarbageQueue = function (canCreateDiscussions) {
  var addressCount = this.incomingGarbage.length;
  var iAddressLoop = 0;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    if (this.incomingGarbage[iAddressLoop][0] >= canCreateDiscussions) {
      this.incomingGarbage[iAddressLoop][0] -= canCreateDiscussions;
      break;
    }
    canCreateDiscussions = canCreateDiscussions - this.incomingGarbage[iAddressLoop][0];
    this.incomingGarbage[iAddressLoop][0] = 0;
  }
}, Game.prototype.blockOrSendAttack = function (mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
  return this.gamedata.attack += mmCoreSplitViewBlock, this.redBar > 0 && this.R.gblock < 2 && (this.redBar > mmCoreSplitViewBlock ? (this.redBar -= mmCoreSplitViewBlock, this.deleteFromGarbageQueue(mmCoreSplitViewBlock), mmCoreSplitViewBlock = 0) : (mmCoreSplitViewBlock = mmCoreSplitViewBlock - this.redBar, this.redBar = 0, this.incomingGarbage = []), this.recordRedbarChange(mmaPushNotificationsComponent)), mmCoreSplitViewBlock > 0 && 0 === this.Live.liveMode || 2 === this.Live.liveMode ? mmCoreSplitViewBlock : null;
}, Game.prototype.frame = function () {
  let artistTrack = this.timestamp();
  this.update(Math.min(1, (artistTrack - this.last) / 1e3), artistTrack);
  this.last = artistTrack;
  if (this.statsEnabled && 0 === this.statsMode) {
    this.stats.update();
  }
  window.requestAnimFrame(this.frame.bind(this), this.canvas);
}, Game.prototype.run = function () {
  this.last = this.timestamp();
  this.frame();
}, Game.prototype.onMove = function (canCreateDiscussions) {
  if (canCreateDiscussions.a !== this.Replay.Action.DAS_LEFT && canCreateDiscussions.a !== this.Replay.Action.DAS_RIGHT) {
    this.lastDAS = 0;
  } else {
    if (this.firstDAS) {
      this.firstDAS = false;
    }
  }
}, Game.prototype.checkAutoRepeat = function (dockerComposeRunning, isSlidingUp) {
  let runningServices = false;
  let swapFrontSource = false;
  return isSlidingUp || this.redrawBlocked || (swapFrontSource = true, this.redrawBlocked = true), this.pressedDir[-1] > 0 && this.pressedDir[1] > 0 ? runningServices = this.pressedDir[-1] > this.pressedDir[1] ? this.autoRepeat(-1, this.pressedDir[-1], dockerComposeRunning) : this.autoRepeat(1, this.pressedDir[1], dockerComposeRunning) : this.pressedDir[-1] > 0 ? runningServices = this.autoRepeat(-1, this.pressedDir[-1], dockerComposeRunning) : this.pressedDir[1] > 0 && (runningServices = this.autoRepeat(1, this.pressedDir[1], dockerComposeRunning)), !isSlidingUp && swapFrontSource && (this.redrawBlocked = false), runningServices;
}, Game.prototype.autoRepeat = function (type, size, context) {
  if (1 === this.DASmethod && this.ARRon[type] && !this.Settings.ARR) {
    return this.activateDAS(type, context);
  }
  if (this.Settings.ARR && this.ARRon[type]) {
    if (context - this.ARRtime >= this.Settings.ARR && (this.ARRtime = context, this.moveCurrentBlock(type, true, context))) {
      var readInfo = new ReplayAction(this.Replay.Action.ARR_MOVE, context);
      return readInfo.d = [-1 === type ? 0 : 1], this.Replay.add(readInfo), true;
    }
  } else {
    if (0 === this.DASmethod && context - size >= this.Settings.DAS && this.lastDAS !== type) {
      return this.DASdebug && !this.ARRon[type] && this.plotForDASDebug(context - size), this.activateDAS(type, context);
    }
  }
  return false;
}, Game.prototype.plotForDASDebug = function (canCreateDiscussions) {
  if (!this.firstDAS) {
    var artistTrack = Math.max(0, canCreateDiscussions - this.Settings.DAS);
    this.statsDASPanel.update(artistTrack, 32);
  }
}, Game.prototype.activateDAS = function (statisticName, canCreateDiscussions) {
  if (this.ARRon[statisticName] = true, this.lastDAS = statisticName, 0 === this.Settings.ARR) {
    if (this.moveBlockToTheWall(statisticName)) {
      return this.Replay.add(new ReplayAction(-1 === statisticName ? this.Replay.Action.DAS_LEFT : this.Replay.Action.DAS_RIGHT, canCreateDiscussions)), true;
    }
  } else {
    this.ARRtime = canCreateDiscussions;
  }
  return false;
}, Game.prototype.update = function (mmaPushNotificationsComponent, context) {
  if (this.frames++, this.v.videoSkin && (this.v.videoOpts.fpsUpdate && this.v.updateTexture(0), this.redrawAll()), this.Settings.gamepadFound && this.Settings.processGamepad(), null !== this.animator && this.animator.render(mmaPushNotificationsComponent), this.play) {
    if (this.timer += mmaPushNotificationsComponent, this.clock += mmaPushNotificationsComponent, this.timer >= this.currentGravity[0]) {
      this.timer = this.timer - this.currentGravity[0];
      var packageManifest = this.gravityStep(this.currentGravity[1], context);
      if (packageManifest) {
        if (this.softDrop || 1 === packageManifest) {
          this.Replay.add(new ReplayAction(this.Replay.Action.GRAVITY_STEP, context));
          if (this.softDrop) {
            this.score(this.Scoring.A.SOFT_DROP, packageManifest);
          }
        } else {
          var readInfo = new ReplayAction(this.Replay.Action.AUX, context);
          readInfo.d = [this.Replay.AUX.MOVE_TO, this.activeBlock.pos.x, this.activeBlock.pos.y];
          this.Replay.add(readInfo);
        }
      }
      this.redraw();
    }
    if (this.checkAutoRepeat(context, true), this.lockDelayActive && (context - this.lastAction >= this.lockDelay && (this.checkIntersection(this.activeBlock.pos.x, this.activeBlock.pos.y + 1, null) ? this.hardDrop(context) : (this.pmode || null === this.solidInterval && !this.solidToAdd) && (this.lockDelayActive = false)), context - this.lockDelayActivated >= this.maxLockDelayWithoutLock && this.hardDrop(context)), this.isPmode(true) || (1 === this.transmitMode && context - this.lastSnapshot > this.liveSnapRate ? (this.sendRepFragment(), this.lastSnapshot = context, ++this.fragmentCounter >= 10 && (this.fragmentCounter = 0, this.sendSnapshot())) : 0 === this.transmitMode && context - this.lastSnapshot > this.snapRate && (this.sendSnapshot(), this.lastSnapshot = context)), 4 === this.isPmode(false) && this.clock - this.lastGarbage > 1) {
      var ar = this.clock - this.lastGarbage - 1;
      this.addAsyncGarbage(1);
      this.redraw();
      this.lastGarbage = this.clock - ar;
    } else {
      if (5 === this.isPmode(false)) {
        var as = Math.ceil(this.ultraModes[this.sprintMode] - this.clock);
        if (as < this.linesRemaining) {
          this.linesRemaining = as;
          this.lrem.textContent = sprintTimeFormat(this.linesRemaining, -1);
        }
        if (this.linesRemaining <= 0) {
          this.practiceModeCompleted(context);
        }
      } else {
        if (9 === this.pmode && this.ModeManager.timeTriggers.length) {
          let au = this.ModeManager.timeTriggers[0];
          if (this.clock >= au.t) {
            this.ModeManager.execCommands(au.c);
            this.ModeManager.timeTriggers.shift();
          }
        }
      }
    }
    if ((7 == (7 & this.frames) || this.GameStats.dirty) && this.updateTextBar(), 31 == (31 & this.frames)) {
      if (!(this.pmode || 63 != (63 & this.frames))) {
        this.Live.changeTarget();
      }
      if (context - this.lastGeneration >= this.maxWithoutLock) {
        this.hardDrop(context);
      }
      var at = this.solidHeight + this.solidToAdd;
      if (at !== this.maxWithoutLock) {
        var maxRadix = Math.max(2500, this.maxWithoutLock - at * (this.maxWithoutLock / 10));
        if (context - this.lastGeneration > maxRadix) {
          this.hardDrop(context);
        }
      }
    }
  }
  if (this.Live.xbufferEnabled && (this.frames & this.xbuffMask) === this.xbuffMask) {
    var criterion_index = 0;
    for (; criterion_index < this.GS.shownSlots; criterion_index++) {
      var conditionName = this.GS.slots[criterion_index].cid;
      if (this.Live.xbuffer.hasOwnProperty(conditionName)) {
        var conditionVariable = this.Live.xbuffer[conditionName];
        this.updateLiveMatrix(criterion_index, conditionVariable[0], conditionVariable[1]);
        delete this.Live.xbuffer[conditionName];
      }
    }
  }
}, Game.prototype.getCumulativePPS = function () {
  return this.placedBlocks / this.clock;
}, Game.prototype.updateTextBar = function () {
  this.GameStats.get("CLOCK").set(sprintTimeFormat(this.clock, 2));
  this.GameStats.get("PPS").set(this.getPPS().toFixed(2));
  this.GameStats.get("APM").set(this.getAPM());
  this.GameStats.get("VS").set(this.getVS());
  this.GameStats.render();
}, Game.prototype.sendRepFragment = function () {
  if (1 === this.transmitMode) {
    var _maskLayer = [];
    var endColorCoords = null;
    var GET_AUTH_URL_TIMEOUT = false;
    var timeNow = null;
    for (; this.replayPartsSent < this.Replay.actions.length; ++this.replayPartsSent) {
      var splatAttrs = this.Replay.actions[this.replayPartsSent];
      var rootAttrs = {};
      var splatAttr;
      for (splatAttr in splatAttrs) {
        rootAttrs[splatAttr] = splatAttrs[splatAttr];
      }
      if (null === timeNow) {
        endColorCoords = splatAttrs;
      } else {
        if (splatAttrs.t - endColorCoords.t > 10) {
          GET_AUTH_URL_TIMEOUT = true;
        }
      }
      rootAttrs.t = null === timeNow ? 0 : Math.max(0, splatAttrs.t - timeNow);
      _maskLayer.push(rootAttrs);
      timeNow = splatAttrs.t;
    }
    if (_maskLayer.length) {
      this.Live.sendRepFragment(_maskLayer, GET_AUTH_URL_TIMEOUT);
    }
  }
}, Game.prototype.sendSnapshot = function () {
  var name;
  var value;
  var values = copyMatrix(this.matrix);
  var uk_icon_ = this.activeBlock.pos.x;
  var test = this.activeBlock.pos.y;
  var carrierNames = this.blockSets[this.activeBlock.set].blocks[this.activeBlock.id];
  var a = carrierNames.blocks[this.activeBlock.rot].length;
  var char = 0;
  for (; char < a; char++) {
    var i = 0;
    for (; i < a; i++) {
      if (carrierNames.blocks[this.activeBlock.rot][char][i] > 0) {
        value = test + char;
        if ((name = uk_icon_ + i) >= 0 && value >= 0 && value < values.length && name < values[0].length) {
          values[value][name] = carrierNames.color;
        }
      }
    }
  }
  this.Live.sendSnapshot(values);
}, Game.prototype.addGarbageFromQueue = function (mmCoreSplitViewBlock) {
  if (this.redBar > 0) {
    var av;
    var addressCount = this.incomingGarbage.length;
    var iAddressLoop = 0;
    var aw = 0;
    iAddressLoop = 0;
    for (; iAddressLoop < addressCount && !(mmCoreSplitViewBlock - this.incomingGarbage[iAddressLoop][1] <= this.R.gDelay); iAddressLoop++) {
      av = this.addGarbage(this.incomingGarbage[iAddressLoop][0]);
    }
    this.redBar = 0;
    if (null === av) {
      this.recordRedbarChange(mmCoreSplitViewBlock);
    }
    for (; iAddressLoop < addressCount;) {
      this.incomingGarbage[aw++] = this.incomingGarbage[iAddressLoop];
      this.redBar += this.incomingGarbage[iAddressLoop][0];
      iAddressLoop++;
    }
    this.incomingGarbage.length = aw;
  }
}, Game.prototype.garbageQueue = function (mmCoreSplitViewBlock) {
  if (3 !== this.R.gblock) {
    this.addIntoGarbageQueue(mmCoreSplitViewBlock);
  } else {
    this.addAsyncGarbage(mmCoreSplitViewBlock);
  }
}, Game.prototype.addIntoGarbageQueue = function (clientHeight) {
  var artistTrack = this.timestamp();
  if (0 === this.R.mess) {
    this.incomingGarbage.push([clientHeight, artistTrack]);
  } else {
    var targetOffsetHeight = 0;
    var ax = 0;
    var ay = this.R.mess > 0 ? this.R.mess : 100;
    for (; targetOffsetHeight < clientHeight;) {
      ax++;
      if (100 === ay || Math.random() < ay / 100) {
        this.incomingGarbage.push([ax, artistTrack]);
        ax = 0;
      }
      targetOffsetHeight++;
    }
    if (ax) {
      this.incomingGarbage.push([ax, artistTrack]);
    }
  }
  this.redBar += clientHeight;
  this.recordRedbarChange(artistTrack);
  this.v.redrawRedBar(true);
}, Game.prototype.addAsyncGarbage = function (magnifier) {
  var $magnifier = this.addGarbage(magnifier);
  for (; this.checkIntersection(this.activeBlock.pos.x, this.activeBlock.pos.y, null);) {
    this.activeBlock.pos.y--;
  }
  return this.updateGhostPiece(true), 4 === this.isPmode(false) && -4 === this.activeBlock.pos.y && this.GameOver(), $magnifier;
}, Game.prototype.addAsyncGarbageFromTheQueue = function () {
  this.addGarbageFromQueue(this.timestamp() + 1e4);
  for (; this.checkIntersection(this.activeBlock.pos.x, this.activeBlock.pos.y, null);) {
    this.activeBlock.pos.y--;
  }
  this.updateGhostPiece(true);
  if (this.activeBlock.pos.y <= -4) {
    this.GameOver();
  }
}, Game.prototype.addGarbage = function (clientWidth) {
  var i = void 0;
  var az = this.isPmode(false);
  if (clientWidth <= 0) {
    return 0;
  }
  if (this.R.solidAttack) {
    var targetOffsetWidth = 0;
    for (; targetOffsetWidth < clientWidth; ++targetOffsetWidth) {
      this.addSolidGarbage();
    }
    i = null;
  } else {
    this.gamedata.linesReceived += clientWidth;
    var params = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
    if (9 === az && this.garbageCols.length) {
      i = this.garbageCols.shift();
    } else {
      if (3 !== az && 4 !== az) {
        if (this.R.mess >= 0) {
          i = this.random(0, 9);
        } else {
          var ba = 100 + this.R.mess;
          if (!this.lastHolePos || ba > 0 && this.RNG() < ba / 100) {
            this.lastHolePos = this.random(0, 9);
          }
          i = this.lastHolePos;
        }
      } else {
        i = this.lastHolePos = this.randomExcept(0, 9, this.lastHolePos);
      }
    }
    if (1 === this.R.gapW) {
      params[i] = 0;
    } else {
      if (1 === this.R.baseBlockSet) {
        i = i - i % 2;
      }
      if (i + this.R.gapW > 10) {
        i = 10 - this.R.gapW;
      }
      for (let j = 0; j < this.R.gapW; ++j) {
        params[i + j] = 0;
      }
    }
    if (this.R.gInv) {
      for (let i = 0; i < params.length; ++i) {
        params[i] = 8 === params[i] ? 0 : 8;
      }
    }
    if (clientWidth <= this.matrix.length) {
      this.deadline = this.matrix[clientWidth - 1].slice(0);
    } else {
      this.deadline = params.slice(0);
    }
    var artistTrack;
    var configCount = this.matrix.length - this.solidHeight;
    var currentCount = 0;
    for (; currentCount < configCount; currentCount++) {
      this.matrix[currentCount] = configCount - currentCount > clientWidth ? this.matrix[currentCount + clientWidth].slice(0) : params.slice(0);
    }
    if (this.GameStats.get("RECV").set(this.gamedata.linesReceived), this.R.gInv || 1 !== this.R.gapW) {
      (artistTrack = new ReplayAction(this.Replay.Action.AUX, this.timestamp())).d = [this.Replay.AUX.WIDE_GARBAGE_ADD, clientWidth, i, this.R.gapW, this.R.gInv ? 1 : 0];
    } else {
      (artistTrack = new ReplayAction(this.Replay.Action.GARBAGE_ADD, this.timestamp())).d = [clientWidth, i];
    }
    this.Replay.add(artistTrack);
    this.updateGhostPiece(true);
  }
  return i;
}, Game.prototype.cancelSolid = function () {
  if (null !== this.solidInterval) {
    clearTimeout(this.solidInterval);
  }
  this.solidInterval = null;
}, Game.prototype.solidStartRaising = function () {
  var acc = this;
  var k__460175 = 0;
  var out__460160 = this.solidProfiles[this.Live.sgProfile];
  if (!out__460160) {
    out__460160 = this.R.sgProfile;
  }
  this.cancelSolid();
  var _chooseTrackingDelay = function () {
    let value = 1e3 * out__460160[Math.min(out__460160.length - 1, k__460175)];
    acc.solidInterval = setTimeout(fn, value);
  };
  var fn = function () {
    acc.solidToAdd++;
    if (20 === ++k__460175) {
      acc.cancelSolid();
    } else {
      _chooseTrackingDelay();
    }
  };
  _chooseTrackingDelay();
}, Game.prototype.toggleStats = function (canCreateDiscussions) {
  if (this.statsEnabled) {
    this.statsEnabled = false;
    this.stats = null;
    this.fpsElement.textContent = "";
  } else {
    this.stats = new Stats;
    this.statsDASPanel = this.stats.addPanel(new Stats.Panel("ΔDAS", "#ff8", "#221"));
    this.stats.domElement.id = "fps";
    this.fpsElement.appendChild(this.stats.domElement);
    this.statsEnabled = true;
    this.statsMode = canCreateDiscussions;
    this.fpsElement.style.marginTop = "15px";
  }
}, Game.prototype.cheeseModeStart = function () {
  this.lastHolePos = null;
  this.cheeseLevel = this.maxCheeseHeight;
  var bb = 0;
  for (; bb < this.cheeseLevel; bb++) {
    this.addGarbage(1);
  }
}, Game.prototype.setLrem = function (canCreateDiscussions) {
  if (canCreateDiscussions < 1e4) {
    this.lrem.textContent = canCreateDiscussions;
  } else {
    this.lrem.innerHTML = "&infin;";
  }
}, Game.prototype.applyGravityLvl = function (mmCoreSplitViewBlock) {
  this.R.gravityLvl = mmCoreSplitViewBlock;
  this.baseGravity = this.getGravityLevel(mmCoreSplitViewBlock);
  this.currentGravity = this.baseGravity.slice(0);
  if (!(!this.softDrop || this.isSoftDropFasterThanGravity() || this.starting)) {
    this.softDropSet(false, this.timestamp());
  }
}, Game.prototype.setLockDelay = function (canCreateDiscussions) {
  this.lockDelay = canCreateDiscussions[0];
  this.maxLockDelayWithoutLock = canCreateDiscussions[1];
  this.maxWithoutLock = canCreateDiscussions[2];
}, Game.prototype.pageTitle = function (sdir) {
  document.title = sdir;
}, Game.prototype.timestamp = function () {
  return (new Date).getTime();
}, Game.prototype.random = function (from, to) {
  return Math.round(from + this.RNG() * (to - from));
}, Game.prototype.randomExcept = function (leftFence, rightFence, value) {
  for (;;) {
    var fenced = this.random(leftFence, rightFence);
    if (fenced !== value) {
      return fenced;
    }
  }
}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (axsPath, canCreateDiscussions) {
  window.setTimeout(axsPath, 16.666666666666668);
}, Game.prototype.recordRedbarChange = function (context) {
  context = context || this.timestamp();
  var readInfo = new ReplayAction(this.Replay.Action.REDBAR_SET, context);
  readInfo.d = [this.redBar <= 20 ? this.redBar : 20];
  this.Replay.add(readInfo);
}, Game.prototype.browserTabFocusChange = function (canCreateDiscussions) {
  if (0 === canCreateDiscussions) {
    this.isTabFocused = false;
    this.lastSeen = this.timestamp();
    if (this.play) {
      this.play = false;
      this.Replay.toggleAfkMode(true);
      if (!(this.pmode || null === this.solidInterval && !this.solidToAdd)) {
        this.GameOver();
        this.Live.showInChat("<span style='color:yellow'>NOTE</span>", "Game lost focus during the final hurry-up phase, your game was halted to avoid stalling.");
        this.lastSeen = null;
      }
    }
  } else {
    if (this.isTabFocused = true, null !== this.lastSeen && !this.play && !this.gameEnded && !this.starting) {
      this.play = true;
      var first = this.timestamp();
      var object = first - this.lastSeen;
      if (this.timer += object / 1e3, this.clock += object / 1e3, object > 1e3) {
        this.Replay.config.afk = void 0 === this.Replay.config.afk ? object : this.Replay.config.afk + object;
        if (object > 65535) {
          object = 65535;
        }
        var objectIdMap = new ReplayAction(this.Replay.Action.AUX, this.lastSeen);
        objectIdMap.d = [this.Replay.AUX.AFK, object];
        this.Replay.isAfkMode = false;
        this.Replay.add(objectIdMap);
      }
      this.Replay.toggleAfkMode(false, first);
    }
    if (null === this.lastSeen && this.play && this.pmode) {
      this.startPractice(this.pmode);
    }
    this.lastSeen = null;
  }
}, Game.prototype.score = function (interval, val) {
  var bc;
  if (void 0 === val) {
    val = 1;
  }
  val = val * this.R.scoreMult;
  this.gamedata.score += bc = Math.round(val * this.Scoring.get(interval, this.wasBack2Back));
  if (bc > 0 && this.debug) {
    this.Live.showInChat("", Object.keys(this.Scoring.A)[interval] + " * " + val + " = <b>" + bc + "</b>");
  }
  this.GameStats.get("SCORE").set(this.gamedata.score);
}, Game.prototype.sprintInfoLineContent = function (p) {
  if (hideElem(document.getElementById("stLrem")), hideElem(document.getElementById("stTSD")), hideElem(document.getElementById("stPC")), hideElem(document.getElementById("oRem")), 0 === p) {
    showElem(document.getElementById("stLrem"));
  } else {
    if (1 === p) {} else {
      if (2 === p) {
        showElem(document.getElementById("stTSD"));
      } else {
        if (3 === p) {
          showElem(document.getElementById("stPC"));
        } else {
          if ("string" == typeof p || p instanceof String) {
            let progress = document.getElementById("oRem");
            showElem(progress);
            progress.textContent = p;
          }
        }
      }
    }
  }
}, Game.prototype.evalPCmodeEnd = function () {
  let bd = false;
  if (this.PCdata.blocks >= 10 && (bd = true), !bd) {
    let IS_HANDLED = 19 - (4 - this.PCdata.lines);
    var id = 0;
    for (; id < 10; id++) {
      if (0 !== this.matrix[IS_HANDLED][id]) {
        bd = true;
        break;
      }
    }
  }
  if (bd) {
    this.Caption.gameWarning(i18n.notPC, i18n.notPCInfo);
    this.practiceModeCompleted();
  }
}, Game.prototype.savePlacementTime = function () {
  if (this.lastPlacements.length >= 8) {
    this.lastPlacements.shift();
  }
  this.lastPlacements.push(this.clock);
}, Game.prototype.getCurrentPPS = function () {
  var be = this.lastPlacements.length;
  return be > 1 ? (be - 1) / (this.clock - this.lastPlacements[0]) : be / this.clock;
}, Game.prototype.isHardDropAllowed = function () {
  return 0 === this.R.speedLimit || this.lastPlacements.length < 5 || (this.getCurrentPPS() <= this.R.speedLimit || (this.Caption.speedWarning(this.R.speedLimit), false));
}, Game.prototype.setSpeedLimit = function (canCreateDiscussions) {
  if (canCreateDiscussions < .1) {
    this.R.speedLimit = 0;
    this.getPPS = this.getCumulativePPS;
  } else {
    this.R.speedLimit = canCreateDiscussions;
    this.getPPS = this.getCurrentPPS;
  }
}, Game.prototype.setupGameLinks = function () {
  let txContribData = this.Live;
  let bf = this;
  let prefetchGroupsInfo = function (canCreateDiscussions, forum, courseId) {
    txContribData.storedPlayParam = {gameMode: canCreateDiscussions, mode: forum, rule: courseId};
    txContribData.urlPlayParamApplied = true;
    if ("The Private Room" == txContribData.roomName) {
      txContribData.tryPlayParam();
    } else {
      txContribData.createPrivatePracticeRoom(true);
    }
  };
  $(".plLinks a").on("click", function (canCreateDiscussions) {
    let pubStr = $(this).attr("id");
    if (pubStr && pubStr.startsWith("pl") && txContribData.connected && !bf.starting && txContribData.authReady) {
      switch (pubStr.substr(2)) {
        case "2":
          prefetchGroupsInfo(1, 2);
          break;
        case "3":
        case "H":
          prefetchGroupsInfo(1, 1);
          break;
        case "4":
          prefetchGroupsInfo(1, 3);
          break;
        case "5":
          prefetchGroupsInfo(1, 4);
          break;
        case "6":
          prefetchGroupsInfo(3, 1);
          break;
        case "7":
        case "I":
          prefetchGroupsInfo(3, 2);
          break;
        case "8":
          prefetchGroupsInfo(3, 3);
          break;
        case "9":
          prefetchGroupsInfo(4);
          break;
        case "A":
          prefetchGroupsInfo(5);
          break;
        case "B":
          prefetchGroupsInfo(7);
          break;
        case "C":
          prefetchGroupsInfo(8);
          break;
        case "D":
          prefetchGroupsInfo(2);
          break;
        case "E":
          prefetchGroupsInfo(1, 3, 1);
          break;
        case "F":
          prefetchGroupsInfo(1, null, 2);
          break;
        case "G":
          prefetchGroupsInfo(1, null, 3);
      }
      canCreateDiscussions.preventDefault();
    }
  });
}, LineClearAnimator.prototype.render = function (canCreateDiscussions) {
  this.t += canCreateDiscussions;
  var artistTrack = Math.max(0, 1 - this.t / this.clearDelay);
  this.g.v.clearMainCanvas();
  var uivar = 0;
  for (; uivar < 20; uivar++) {
    if (-1 !== this.clearPositions.indexOf(uivar)) {
      if (this.IS_SOLID) {
        this.g.v.drawClearLine(uivar, artistTrack);
      } else {
        this.g.v.setAlpha(artistTrack);
        var prop = 0;
        for (; prop < 10; prop++) {
          this.g.v.drawBlock(prop, uivar, this.matrix[uivar][prop], 0);
        }
        this.g.v.setAlpha(1);
      }
    } else {
      prop = 0;
      for (; prop < 10; prop++) {
        this.g.v.drawBlock(prop, uivar, this.matrix[uivar][prop], 0);
      }
    }
  }
  this.g.v.redrawRedBar(false);
  if (this.t > this.clearDelay) {
    this.finished();
  }
}, LineClearAnimator.prototype.finished = function () {
  this.g.animator = null;
  if (!this.g.gameEnded) {
    this.g.play = true;
  }
  this.g.redrawBlocked = false;
  this.g.redraw();
  this.g.updateQueueBox();
  this.g.redrawHoldBox();
}, Ctx2DView.prototype.isAvailable = function () {
  return true;
}, Ctx2DView.prototype.initRenderer = function () {
  this.ctx = this.g.canvas.getContext("2d");
  this.hctx = this.g.holdCanvas.getContext("2d");
  this.qctx = this.g.queueCanvas.getContext("2d");
}, Ctx2DView.prototype.redrawMatrix = function () {
  if (this.clearMainCanvas(), !this.g.isInvisibleSkin) {
    var uivar = 0;
    for (; uivar < 20; uivar++) {
      var prop = 0;
      for (; prop < 10; prop++) {
        this.drawBlock(prop, uivar, 15 & this.g.matrix[uivar][prop]);
        if (16 & this.g.matrix[uivar][prop]) {
          this.drawBrickOverlay(prop, uivar, false);
        }
      }
    }
  }
}, Ctx2DView.prototype.clearMainCanvas = function () {
  this.ctx.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height);
}, Ctx2DView.prototype.clearHoldCanvas = function () {
  this.hctx.clearRect(0, 0, this.g.holdCanvas.width, this.g.holdCanvas.height);
}, Ctx2DView.prototype.clearQueueCanvas = function () {
  this.qctx.clearRect(0, 0, this.g.queueCanvas.width, this.g.queueCanvas.height);
}, Ctx2DView.prototype.drawBlockOnCanvas = function (canCreateDiscussions, isSlidingUp, ballNumber, dontForceConstraints) {
  var artistTrack = dontForceConstraints === this.HOLD ? this.hctx : this.qctx;
  if (0 === this.g.skinId) {
    var GET_AUTH_URL_TIMEOUT = this.g.monochromeSkin && ballNumber <= 7 ? this.g.monochromeSkin : this.g.colors[ballNumber];
    this.drawRectangle(artistTrack, canCreateDiscussions * this.g.block_size, isSlidingUp * this.g.block_size, this.g.block_size, this.g.block_size, GET_AUTH_URL_TIMEOUT);
  } else {
    artistTrack.drawImage(this.g.tex, this.g.coffset[ballNumber] * this.g.skins[this.g.skinId].w, 0, this.g.skins[this.g.skinId].w, this.g.skins[this.g.skinId].w, canCreateDiscussions * this.g.block_size, isSlidingUp * this.g.block_size, this.g.block_size, this.g.block_size);
  }
}, Ctx2DView.prototype.drawBrickOverlayOnCanvas = function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  (dontForceConstraints === this.HOLD ? this.hctx : this.qctx).drawImage(this.g.tex2, 0, 0, 32, 32, canCreateDiscussions * this.g.block_size, isSlidingUp * this.g.block_size, this.g.block_size, this.g.block_size);
}, Ctx2DView.prototype.drawBrickOverlay = function (remoteChainTail, localChainTail, dontForceConstraints) {
  if (remoteChainTail >= 0 && localChainTail >= 0 && remoteChainTail < 10 && localChainTail < 20) {
    if (dontForceConstraints) {
      this.ctx.globalAlpha = .5;
    }
    var artistTrack = this.g.drawScale * this.g.block_size;
    this.ctx.drawImage(this.g.tex2, 0, 0, 32, 32, remoteChainTail * this.g.block_size, localChainTail * this.g.block_size, artistTrack, artistTrack);
    if (dontForceConstraints) {
      this.ctx.globalAlpha = 1;
    }
  }
}, Ctx2DView.prototype.drawBlock = function (shareDiff, index, curr) {
  if (curr && shareDiff >= 0 && index >= 0 && shareDiff < 10 && index < 20) {
    var artistTrack = this.g.drawScale * this.g.block_size;
    if (this.g.skinId) {
      this.ctx.drawImage(this.g.tex, this.g.coffset[curr] * this.g.skins[this.g.skinId].w, 0, this.g.skins[this.g.skinId].w, this.g.skins[this.g.skinId].w, shareDiff * this.g.block_size, index * this.g.block_size, artistTrack, artistTrack);
    } else {
      var GET_AUTH_URL_TIMEOUT = this.g.monochromeSkin && curr <= 7 ? this.g.monochromeSkin : this.g.colors[curr];
      this.drawRectangle(this.ctx, shareDiff * this.g.block_size, index * this.g.block_size, artistTrack, artistTrack, GET_AUTH_URL_TIMEOUT);
    }
  }
}, Ctx2DView.prototype.drawGhostBlock = function (thisStart, start, statisticName) {
  if (thisStart >= 0 && start >= 0 && thisStart < 10 && start < 20) {
    var artistTrack = this.g.drawScale * this.g.block_size;
    if (0 === this.g.ghostSkinId) {
      this.ctx.globalAlpha = .5;
      if (this.g.skinId > 0) {
        this.ctx.drawImage(this.g.tex, this.g.coffset[statisticName] * this.g.skins[this.g.skinId].w, 0, this.g.skins[this.g.skinId].w, this.g.skins[this.g.skinId].w, thisStart * this.g.block_size, start * this.g.block_size, artistTrack, artistTrack);
      } else {
        this.drawBlock(thisStart, start, statisticName);
      }
      this.ctx.globalAlpha = 1;
    } else {
      var bg = this.g.ghostSkins[this.g.ghostSkinId];
      this.ctx.drawImage(this.g.ghostTex, (this.g.coffset[statisticName] - 2) * bg.w, 0, bg.w, bg.w, thisStart * this.g.block_size, start * this.g.block_size, artistTrack, artistTrack);
    }
  }
}, Ctx2DView.prototype.drawRectangle = function (KUTE, el, from, to, ops, mmCoreSecondsYear) {
  KUTE.beginPath();
  KUTE.rect(el, from, to, ops);
  KUTE.fillStyle = mmCoreSecondsYear;
  KUTE.fill();
}, Ctx2DView.prototype.drawLine = function (mActionBar, command, selected_group_obj_array, selected_group, isBgroundImg) {
  mActionBar.beginPath();
  mActionBar.moveTo(command, selected_group_obj_array);
  mActionBar.lineTo(selected_group, isBgroundImg);
  mActionBar.strokeStyle = "grey";
  mActionBar.lineWidth = 1;
  mActionBar.stroke();
}, Ctx2DView.prototype.redrawRedBar = function (canCreateDiscussions) {
  if (canCreateDiscussions || this.g.redBar) {
    if (canCreateDiscussions) {
      this.ctx.clearRect(240, 0, 8, (20 - this.g.redBar) * this.g.block_size);
    }
    this.drawRectangle(this.ctx, 240, (20 - this.g.redBar) * this.g.block_size, 8, this.g.redBar * this.g.block_size, "#FF270F");
  }
}, Ctx2DView.prototype.drawClearLine = function (canCreateDiscussions, isSlidingUp) {
  this.ctx.globalAlpha = isSlidingUp;
  this.drawRectangle(this.ctx, 0, canCreateDiscussions * this.g.block_size, 10 * this.g.block_size, this.g.block_size, "#FFFFFF");
  this.ctx.globalAlpha = 1;
}, Ctx2DView.prototype.setAlpha = function (canCreateDiscussions) {
  this.ctx.globalAlpha = canCreateDiscussions;
}, Ctx2DView.prototype.clearRect = function (mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg) {
  this.ctx.clearRect(mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg);
}, Ctx2DView.prototype.createFastFont = function () {
  return new FastFont2D;
}, FastFont2D.prototype.init = function (saveNotifs) {
  saveNotifs();
}, FastFont2D.prototype.resizeCanvas = function () {
  if (this.canvas.height < this.canvas.clientHeight) {
    this.canvas.height = this.canvas.clientHeight;
  }
}, FastFont2D.prototype.renderLines = function (PL$53) {
  this.resizeCanvas();
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  var backoffDelay = this.canvas.height;
  if (PL$53.length > this.availableLines) {
    this.availableLines = PL$53.length;
  }
  var backoffDelaySeconds = backoffDelay / this.availableLines;
  var PL$54 = 0;
  for (; PL$54 < PL$53.length; ++PL$54) {
    this.draw(PL$53[PL$54].value.toString(), 0, backoffDelaySeconds * PL$54 + this.fontSize);
  }
}, FastFont2D.prototype.draw = function (mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority) {
  this.ctx.font = "bold " + this.fontSize + "px Verdana,serif";
  this.ctx.fillStyle = "#808080";
  this.ctx.fillText(mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority);
}, WebGLUtils.getWebGLcontext = function (context) {
  var data = {preserveDrawingBuffer: false, antialias: false, powerPreference: "high-performance", alpha: true, premultipliedalpha: false};
  var transport = context.getContext("webgl", data) || context.getContext("experimental-webgl", data);
  return transport || alert("Your browser does not support WebGL!"), transport.clearColor(0, 0, 0, 0), transport.clear(transport.COLOR_BUFFER_BIT | transport.DEPTH_BUFFER_BIT), transport;
}, WebGLUtils.createProgram = function (gl, params) {
  var d = gl.createProgram();
  var i = gl.createShader(gl.VERTEX_SHADER);
  var e = gl.createShader(gl.FRAGMENT_SHADER);
  if (gl.shaderSource(i, params.vertex), gl.shaderSource(e, params.fragment), gl.compileShader(i), gl.getShaderParameter(i, gl.COMPILE_STATUS)) {
    if (gl.compileShader(e), gl.getShaderParameter(e, gl.COMPILE_STATUS)) {
      if (gl.attachShader(d, i), gl.attachShader(d, e), gl.linkProgram(d), gl.getProgramParameter(d, gl.LINK_STATUS)) {
        if (gl.validateProgram(d), gl.getProgramParameter(d, gl.VALIDATE_STATUS)) {
          return d;
        }
        console.error("Validation error", gl.getProgramInfoLog(d));
      } else {
        console.error("Linking error", gl.getProgramInfoLog(d));
      }
    } else {
      console.error("Fragment shader: compile err", gl.getShaderInfoLog(e));
    }
  } else {
    console.error("Vertex shader: compile err", gl.getShaderInfoLog(i));
  }
}, WebGLUtils.registerContextAttrUnifs = function (gl, data) {
  var type = data.program;
  var target = gl.getProgramParameter(type, gl.ACTIVE_ATTRIBUTES);
  var value = 0;
  for (; value < target; value++) {
    var params = gl.getActiveAttrib(type, value);
    data[params.name] = gl.getAttribLocation(type, params.name);
  }
  var result = gl.getProgramParameter(type, gl.ACTIVE_UNIFORMS);
  value = 0;
  for (; value < result; value++) {
    var params = gl.getActiveUniform(type, value);
    data[params.name] = gl.getUniformLocation(type, params.name);
  }
}, WebGLView.prototype.isAvailable = function () {
  var bh = this.g.canvas;
  return !(!bh.getContext("webgl") && !bh.getContext("experimental-webgl"));
}, WebGLView.prototype.initGLContext = function (obj) {
  obj.gl = WebGLUtils.getWebGLcontext(obj.elem);
  obj.program = WebGLUtils.createProgram(obj.gl, this.shaders);
  obj.m4 = new Float32Array(16);
  var gl = obj.gl;
  var type = obj.program;
  gl.useProgram(type);
  obj.positionLocation = gl.getAttribLocation(type, "a_position");
  obj.texcoordLocation = gl.getAttribLocation(type, "a_texcoord");
  obj.matrixLocation = gl.getUniformLocation(type, "u_matrix");
  obj.textureMatrixLocation = gl.getUniformLocation(type, "u_textureMatrix");
  obj.globalAlpha = gl.getUniformLocation(type, "globalAlpha");
  gl.uniform1f(obj.globalAlpha, 1);
  obj.positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, obj.positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
  obj.texcoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, obj.texcoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
  obj.textureInfos = [];
  obj.boundBuffers = false;
  obj.boundTexture = null;
  this.initEmptyTexture(obj, 0);
  this.initEmptyTexture(obj, 1);
  this.initRedbarTexture(obj, 2);
}, WebGLView.prototype.initRenderer = function () {
  this.ctxs = [{elem: this.g.canvas, mesh: {w: 10, h: 20}}, {elem: this.g.holdCanvas, mesh: {w: 4, h: 4}}, {elem: this.g.queueCanvas, mesh: {w: 4, h: 15}}];
  this.initGLContext(this.ctxs[0]);
  this.initGLContext(this.ctxs[1]);
  this.initGLContext(this.ctxs[2]);
  if (void 0 !== this.g.skinId && this.g.skinId) {
    this.g.changeSkin(this.g.skinId);
  }
}, WebGLView.prototype.initRedbarTexture = function (ranges, n) {
  var gl = ranges.gl;
  var key = gl.createTexture();
  key.id = n;
  gl.bindTexture(gl.TEXTURE_2D, key);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 2, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 39, 15, 255, 255, 255, 255, 255]));
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  var fmt = {width: 2, height: 1, texture: key};
  ranges.textureInfos[n] = fmt;
}, WebGLView.prototype.initEmptyTexture = function (ranges, n) {
  var gl = ranges.gl;
  var key = gl.createTexture();
  key.id = n;
  gl.bindTexture(gl.TEXTURE_2D, key);
  var size = this.colorsInTexture.length;
  var bytearray = new Uint8Array(4 * size);
  var i = 0;
  for (; i < size; ++i) {
    var color = this.g.colorsV3[this.colorsInTexture[i]];
    if (this.g.monochromeSkin && i > 1) {
      color = hexToRgb(this.g.monochromeSkin, 255);
    }
    bytearray[4 * i] = Math.round(255 * color[0]);
    bytearray[4 * i + 1] = Math.round(255 * color[1]);
    bytearray[4 * i + 2] = Math.round(255 * color[2]);
    bytearray[4 * i + 3] = 255;
  }
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, bytearray);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  var fmt = {width: size, height: 1, texture: key};
  ranges.textureInfos[n] = fmt;
}, WebGLView.prototype.loadTexture = function (itemIndexInCache, resolvedViewModel) {
  var indexLookupKey = 0;
  for (; indexLookupKey < this.ctxs.length; ++indexLookupKey) {
    this.initEmptyTexture(this.ctxs[indexLookupKey], itemIndexInCache);
  }
  if (null !== resolvedViewModel) {
    var result = new Image;
    var historical_metrics = this;
    result.addEventListener("load", function () {
      var chartInstanceName = 0;
      for (; chartInstanceName < historical_metrics.ctxs.length; ++chartInstanceName) {
        var gl = historical_metrics.ctxs[chartInstanceName].gl;
        var params = historical_metrics.ctxs[chartInstanceName].textureInfos[itemIndexInCache];
        params.width = result.width;
        params.height = result.height;
        historical_metrics.ctxs[chartInstanceName].boundTexture = params.texture;
        gl.bindTexture(gl.TEXTURE_2D, params.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, result);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      }
      historical_metrics.g.redrawAll();
    });
    result.crossOrigin = "anonymous";
    result.src = resolvedViewModel;
    if (0 === itemIndexInCache) {
      this.videoSkin = false;
    }
  }
}, WebGLView.prototype.drawImage = function (args, event, duration, width, current_amount, parentKeyLeft, dist, size, mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg) {
  var context = args.gl;
  if (args.boundTexture !== event) {
    context.bindTexture(context.TEXTURE_2D, event);
    args.boundTexture = event;
  }
  if (!args.boundBuffers) {
    context.bindBuffer(context.ARRAY_BUFFER, args.positionBuffer);
    context.enableVertexAttribArray(args.positionLocation);
    context.vertexAttribPointer(args.positionLocation, 2, context.FLOAT, false, 0, 0);
    context.bindBuffer(context.ARRAY_BUFFER, args.texcoordBuffer);
    context.enableVertexAttribArray(args.texcoordLocation);
    context.vertexAttribPointer(args.texcoordLocation, 2, context.FLOAT, false, 0, 0);
    args.boundBuffers = true;
  }
  Matrix.orthographic(0, args.elem.width, args.elem.height, 0, -1, 1, args.m4);
  Matrix.translate(args.m4, mmCoreSplitViewBlock, mmaPushNotificationsComponent, 0, args.m4);
  Matrix.scale(args.m4, mmaFrontpagePriority, isBgroundImg, 1, args.m4);
  context.uniformMatrix4fv(args.matrixLocation, false, args.m4);
  Matrix.translation(current_amount / duration, parentKeyLeft / width, 0, args.m4);
  Matrix.scale(args.m4, dist / duration, size / width, 1, args.m4);
  context.uniformMatrix4fv(args.textureMatrixLocation, false, args.m4);
  context.uniform1i(args.textureLocation, 0);
  context.drawArrays(context.TRIANGLES, 0, 6);
}, WebGLView.prototype.redrawMatrix = function () {
  if (this.clearMainCanvas(), !this.g.isInvisibleSkin) {
    var uivar = 0;
    for (; uivar < 20; uivar++) {
      var prop = 0;
      for (; prop < 10; prop++) {
        this.drawBlock(prop, uivar, this.g.matrix[uivar][prop], this.MAIN);
      }
    }
  }
}, WebGLView.prototype.clearMainCanvas = function () {
  var gl = this.ctxs[0].gl;
  gl.clear(gl.COLOR_BUFFER_BIT);
}, WebGLView.prototype.clearHoldCanvas = function () {
  var gl = this.ctxs[this.HOLD].gl;
  gl.clear(gl.COLOR_BUFFER_BIT);
}, WebGLView.prototype.clearQueueCanvas = function () {
  var gl = this.ctxs[this.QUEUE].gl;
  gl.clear(gl.COLOR_BUFFER_BIT);
}, WebGLView.prototype.drawBlockOnCanvas = function (mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg) {
  this.drawBlock(mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg);
}, WebGLView.prototype.drawBrickOverlayOnCanvas = function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {}, WebGLView.prototype.drawBrickOverlay = function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {}, WebGLView.prototype.drawBlock = function (canCreateDiscussions, isSlidingUp, traitName, drawtype) {
  if (traitName) {
    var GET_AUTH_URL_TIMEOUT = this.g.drawScale * this.g.block_size;
    var dali_drawtype = this.ctxs[drawtype];
    var msg = dali_drawtype.textureInfos[0];
    this.drawImage(dali_drawtype, msg.texture, msg.width, msg.height, this.g.coffset[traitName] * msg.height, 0, msg.height, msg.height, canCreateDiscussions * this.g.block_size, isSlidingUp * this.g.block_size, GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
  }
}, WebGLView.prototype.drawGhostBlock = function (mmCoreSplitViewBlock, mmaPushNotificationsComponent, statisticName) {
  var artistTrack = this.ctxs[0];
  if (0 === this.g.ghostSkinId) {
    artistTrack.gl.uniform1f(artistTrack.globalAlpha, .5);
    this.drawBlock(mmCoreSplitViewBlock, mmaPushNotificationsComponent, statisticName, 0);
    artistTrack.gl.uniform1f(artistTrack.globalAlpha, 1);
  } else {
    var GET_AUTH_URL_TIMEOUT = this.g.drawScale * this.g.block_size;
    var bi = artistTrack.textureInfos[1];
    this.drawImage(artistTrack, bi.texture, bi.width, bi.height, (this.g.coffset[statisticName] - 2) * bi.height, 0, bi.height, bi.height, mmCoreSplitViewBlock * this.g.block_size, mmaPushNotificationsComponent * this.g.block_size, GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
  }
}, WebGLView.prototype.redrawRedBar = function (canCreateDiscussions) {
  if (canCreateDiscussions || this.g.redBar) {
    var artistTrack = this.ctxs[this.MAIN];
    var bj = artistTrack.textureInfos[2];
    if (canCreateDiscussions) {
      artistTrack.gl.clear(artistTrack.gl.COLOR_BUFFER_BIT);
      this.g.redrawMatrix();
      this.g.drawGhostAndCurrent();
    }
    this.drawImage(artistTrack, bj.texture, bj.width, bj.height, 0, 0, 1, 1, 240, (20 - this.g.redBar) * this.g.block_size, 8, this.g.redBar * this.g.block_size);
  }
}, WebGLView.prototype.drawClearLine = function (canCreateDiscussions, mmCoreSplitViewBlock) {
  var artistTrack = this.ctxs[this.MAIN];
  var bk = artistTrack.textureInfos[2];
  artistTrack.gl.uniform1f(artistTrack.globalAlpha, mmCoreSplitViewBlock);
  this.drawImage(artistTrack, bk.texture, bk.width, bk.height, 1, 0, 1, 1, 0, canCreateDiscussions * this.g.block_size, 10 * this.g.block_size, this.g.block_size);
  artistTrack.gl.uniform1f(artistTrack.globalAlpha, 1);
}, WebGLView.prototype.setAlpha = function (mmCoreSplitViewBlock) {
  var bl = this.ctxs[this.MAIN];
  bl.gl.uniform1f(bl.globalAlpha, mmCoreSplitViewBlock);
}, WebGLView.prototype.clearRect = function (type, key, mValue, value3) {
  var ranges = this.ctxs[this.MAIN];
  var gl = ranges.gl;
  key = Math.ceil(ranges.elem.height - key - value3);
  gl.enable(gl.SCISSOR_TEST);
  gl.scissor(type, key, mValue, value3);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.disable(gl.SCISSOR_TEST);
  gl.clearColor(0, 0, 0, 0);
}, WebGLView.prototype.setupGif = function (mmCoreSplitViewBlock, canCreateDiscussions) {
  if (this.videoOpts = canCreateDiscussions, "undefined" == typeof gifler) {
    let resource = CDN_URL("/js/vendor/gifler.min.js");
    includeScript(resource, this.realSetupGif.bind(this, mmCoreSplitViewBlock));
  } else {
    this.realSetupGif(mmCoreSplitViewBlock);
  }
}, WebGLView.prototype.realSetupGif = function (mmCoreSplitViewBlock) {
  let artistTrack = null;
  if (this.videoOpts.fpsUpdate = false, this.videoOpts.w = this.videoOpts.h = null, this.video && "canvas" === this.video.tagName) {
    artistTrack = this.video;
    try {
      document.body.removeChild(artistTrack);
    } catch (bm) {}
  } else {
    artistTrack = document.createElement("canvas");
  }
  gifler(mmCoreSplitViewBlock).frames(artistTrack, this.updateGifTexture.bind(this), true);
  this.video = artistTrack;
  if (this.videoOpts.debug) {
    document.body.appendChild(artistTrack);
  }
}, WebGLView.prototype.updateGifTexture = function (ctx, buffer) {
  if (this.videoOpts.skinify) {
    if (null === this.videoOpts.w) {
      this.videoOpts.w = this.video.width;
      this.videoOpts.h = this.video.height;
      ctx.canvas.width = 576;
      ctx.canvas.height = 64;
    }
    let retval = [9, 8, 1, 2, 3, 4, 5, 6, 7];
    var ratio = 0;
    for (; ratio < 9; ++ratio) {
      ctx.globalCompositeOperation = "source-over";
      let panL = 64 / this.videoOpts.w;
      let panR = 64 / this.videoOpts.h;
      let offset = buffer.x * panL;
      let sizeX = buffer.y * panR;
      let sizeY = buffer.width * panL;
      let numKeysDeleted = buffer.height * panR;
      if (ctx.drawImage(buffer.buffer, 64 * ratio + offset, sizeX, sizeY, numKeysDeleted), this.videoOpts.colorize) {
        let bn = this.g.colorsV3[retval[ratio]];
        let bo = this.videoOpts.colorAlpha || .7;
        ctx.globalCompositeOperation = "source-atop";
        ctx.fillStyle = "rgba(" + 255 * bn[0] + ", " + 255 * bn[1] + ", " + 255 * bn[2] + ", " + bo + ")";
        ctx.fillRect(64 * ratio, 0, 64, 64);
      }
    }
  } else {
    ctx.drawImage(buffer.buffer, buffer.x, buffer.y, buffer.width, buffer.height);
  }
  this.updateTextureFromElem(0, this.video, this.video.width, this.video.height);
  this.videoSkin = true;
}, WebGLView.prototype.setupVideo = function (i, isSlidingUp) {
  this.videoOpts = isSlidingUp;
  this.videoOpts.fpsUpdate = true;
  this.videoSkin = false;
  const bBag = document.createElement("video");
  var value = false;
  var text = false;
  var result = this;
  bBag.crossOrigin = "anonymous";
  bBag.loop = bBag.autoplay = true;
  bBag.muted = true !== this.videoOpts.sound;
  bBag.addEventListener("playing", function () {
    value = true;
    result.videoSkin = value && text;
  }, true);
  bBag.addEventListener("timeupdate", function () {
    text = true;
    result.videoSkin = value && text;
  }, true);
  bBag.addEventListener("waiting", function () {
    result.videoSkin = value = text = false;
  }, true);
  bBag.src = i;
  bBag.play();
  this.video = bBag;
}, WebGLView.prototype.updateTexture = function (mmCoreSplitViewBlock) {
  if (this.videoSkin) {
    this.updateTextureFromElem(mmCoreSplitViewBlock, this.video, this.video.videoWidth, this.video.videoHeight);
  }
}, WebGLView.prototype.updateTextureFromElem = function (url, mmCoreSplitViewBlock, modelMaskFeature, targetPassword) {
  var indexLookupKey = 0;
  for (; indexLookupKey < this.ctxs.length; ++indexLookupKey) {
    var gl = this.ctxs[indexLookupKey].gl;
    var params = this.ctxs[indexLookupKey].textureInfos[url];
    params.width = modelMaskFeature;
    params.height = targetPassword;
    if (this.ctxs[indexLookupKey].boundTexture !== params.texture) {
      gl.bindTexture(gl.TEXTURE_2D, params.texture);
      this.ctxs[indexLookupKey].boundTexture = params.texture;
    }
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mmCoreSplitViewBlock);
  }
}, WebGLView.prototype.createFastFont = function () {
  return new FastFont;
}, FastFont.prototype.init = function (saveNotifs) {
  var bp = this;
  var param = new Image;
  param.addEventListener("load", function () {
    var gl = bp.ctx.gl;
    var args = bp.ctx.textureInfo;
    args.width = param.width;
    args.height = param.height;
    gl.bindTexture(gl.TEXTURE_2D, bp.ctx.textureInfo.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform2f(bp.ctx.u_texsize, param.width, param.height);
    bp.ready = true;
    saveNotifs();
  });
  param.crossOrigin = "anonymous";
  param.src = CDN_URL("/res/img/sdf2.png");
}, FastFont.prototype.resizeCanvas = function () {
  if (this.canvas.height < this.canvas.clientHeight) {
    this.canvas.height = this.canvas.clientHeight;
    this.ctx.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }
}, FastFont.prototype.drawText = function (PL$53, countryPopulation) {
  var params = this.ctx;
  var gl = params.gl;
  var population = this.fontSize;
  var eyehvar = population / 8;
  var siteName = population + 2 * eyehvar;
  var middlePathName = population + 2 * eyehvar;
  var zoomSpeed = population / 2 + eyehvar;
  var scrollAccum = countryPopulation / population;
  var extentX = {x: 0, y: middlePathName / 2 - eyehvar};
  var artistTrack = 0;
  var PL$54 = 0;
  for (; PL$54 < PL$53.length; PL$54++) {
    var options = this.sdfs[PL$53[PL$54]];
    if (options || (options = this.sdfs["?"]), PL$54 === this.MAX_STR_LEN) {
      PL$53 = PL$53.substring(0, this.MAX_STR_LEN);
      break;
    }
    var managementcommandsdns = options.x;
    var baseNewPath = options.y;
    var offsetY = options.w || population * this.defaultGlyphW;
    this.verElem.set([extentX.x + (0 - eyehvar) * scrollAccum, extentX.y - zoomSpeed * scrollAccum, extentX.x + (0 - eyehvar + siteName) * scrollAccum, extentX.y - zoomSpeed * scrollAccum, extentX.x + (0 - eyehvar) * scrollAccum, extentX.y + (middlePathName - zoomSpeed) * scrollAccum, extentX.x + (0 - eyehvar + siteName) * scrollAccum, extentX.y - zoomSpeed * scrollAccum, extentX.x + (0 - eyehvar) * scrollAccum, extentX.y + (middlePathName - zoomSpeed) * scrollAccum, extentX.x + (0 - eyehvar + siteName) * scrollAccum, extentX.y + (middlePathName - zoomSpeed) * scrollAccum], artistTrack);
    this.texElem.set([managementcommandsdns, baseNewPath, managementcommandsdns + siteName, baseNewPath, managementcommandsdns, baseNewPath + middlePathName, managementcommandsdns + siteName, baseNewPath, managementcommandsdns, baseNewPath + middlePathName, managementcommandsdns + siteName, baseNewPath + middlePathName], artistTrack);
    artistTrack = artistTrack + 12;
    extentX.x = extentX.x + offsetY * scrollAccum;
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, params.vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, this.verElem, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, params.textureBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, this.texElem, gl.STATIC_DRAW);
  params.vertexBuffer.numItems = params.textureBuffer.numItems = 6 * PL$53.length;
}, FastFont.prototype.renderLines = function (PL$53) {
  this.resizeCanvas();
  var gl = this.ctx.gl;
  var backoffDelay = this.ctx.elem.height;
  gl.clear(gl.COLOR_BUFFER_BIT);
  if (PL$53.length > this.availableLines) {
    this.availableLines = PL$53.length;
  }
  var backoffDelaySeconds = backoffDelay / this.availableLines;
  var PL$54 = 0;
  for (; PL$54 < PL$53.length; ++PL$54) {
    this.draw(PL$53[PL$54].value.toString(), 0, backoffDelaySeconds * PL$54);
  }
}, FastFont.prototype.draw = function (mmaFrontpagePriority, mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
  if (this.ready) {
    var ctx = this.ctx.gl;
    var buffer = this.ctx;
    this.drawText(mmaFrontpagePriority, this.scale);
    Matrix.orthographic(0, buffer.elem.width, buffer.elem.height, 0, -1, 1, buffer.m4);
    Matrix.translate(buffer.m4, mmCoreSplitViewBlock, mmaPushNotificationsComponent, 0, buffer.m4);
    ctx.uniformMatrix4fv(buffer.u_matrix, false, buffer.m4);
    if (!this.glParamsSet) {
      this.glParamsSet = true;
      ctx.activeTexture(ctx.TEXTURE0);
      ctx.bindTexture(ctx.TEXTURE_2D, buffer.textureInfo.texture);
      ctx.uniform1i(buffer.u_texture, 0);
      ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer.vertexBuffer);
      ctx.vertexAttribPointer(buffer.a_pos, 2, ctx.FLOAT, false, 0, 0);
      ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer.textureBuffer);
      ctx.vertexAttribPointer(buffer.a_texcoord, 2, ctx.FLOAT, false, 0, 0);
      ctx.uniform4fv(buffer.u_color, [.5019607843137255, .5019607843137255, .5019607843137255, 1]);
      ctx.uniform1f(buffer.u_buffer, .75);
      ctx.uniform1f(buffer.u_gamma, 1.4142 * this.gamma / this.scale);
    }
    ctx.drawArrays(ctx.TRIANGLES, 0, buffer.vertexBuffer.numItems);
  }
}, GameCore.prototype.randomizerFactory = function (canCreateDiscussions, isSlidingUp) {
  let zero = this.blockSets[this.R.baseBlockSet].blocks.length;
  let point_2 = null;
  let collected = isSlidingUp || this.blockRNG;
  switch (canCreateDiscussions) {
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
}, GameCore.prototype.initRandomizer = function (mmCoreSplitViewBlock) {
  this.randomizer = this.randomizerFactory(mmCoreSplitViewBlock);
  if (this.ISGAME && this.Replay) {
    if (0 !== mmCoreSplitViewBlock) {
      this.Replay.config.rnd = mmCoreSplitViewBlock;
    } else {
      if ("rnd" in this.Replay.config) {
        delete this.Replay.config.rnd;
      }
    }
  }
}, GameCore.prototype.getRandomizerBlock = function (limitFromUnread) {
  let bq = (limitFromUnread = limitFromUnread || this.randomizer).getBlock();
  return 0 === bq.set ? bq.set = this.R.baseBlockSet : -1 === bq.set && (bq.set = 0), null !== this.temporaryBlockSet && (bq.set = this.temporaryBlockSet, this.temporaryBlockSet = null), bq;
}, GameCore.prototype.getBlockFromQueue = function () {
  if (0 === this.queue.length) {
    return this.ISGAME && 9 === this.pmode && this.Caption.gameWarning(i18n.noBlocks, i18n.noBlocks2), this.GameOver(), this.activeBlock;
  }
  var br = this.queue.splice(0, 1)[0];
  return this.refillQueue(), this.updateQueueBox(), br;
}, GameCore.prototype.checkIntersection = function (imageModelSection, afterIdx, m) {
  m = null === m ? this.activeBlock.rot : m;
  let bs = this.blockSets[this.activeBlock.set];
  let DateDisabled = bs.blocks[this.activeBlock.id].blocks;
  let ld = bs.blocks[this.activeBlock.id].blocks[m].length;
  var i = 0;
  for (; i < ld; i++) {
    var id = 0;
    for (; id < ld; id++) {
      if (DateDisabled[m][i][id] > 0) {
        if (afterIdx + i >= 20) {
          return true;
        }
        if (imageModelSection + id < 0 || imageModelSection + id >= 10) {
          return true;
        }
        if (afterIdx + i >= 0 && this.matrix[afterIdx + i][imageModelSection + id] > 0) {
          return true;
        }
      }
    }
  }
  return false;
}, GameCore.prototype.setCurrentPieceToDefaultPos = function () {
  let bt = this.blockSets[this.activeBlock.set].blocks[this.activeBlock.id];
  let iClef = bt.blocks[0].length;
  if (this.activeBlock.rot = 0, this.activeBlock.pos.x = bt.spawn[0], this.activeBlock.pos.y = bt.spawn[1], 0 === this.activeBlock.set) {
    var bu = bt.blocks[0][-this.activeBlock.pos.y];
    if (this.matrix[0][3] && bu[0] || this.matrix[0][4] && bu[1] || this.matrix[0][5] && bu[2] || this.matrix[0][6] && bu[3]) {
      this.activeBlock.pos.y--;
    }
  } else {
    for (; this.checkIntersection(this.activeBlock.pos.x, this.activeBlock.pos.y, null);) {
      this.activeBlock.pos.y--;
    }
  }
  var iPitch = -(1 + this.activeBlock.pos.y);
  if (iPitch >= 0 && iPitch < iClef) {
    var HTMLELEMENT = 0;
    for (; HTMLELEMENT < iClef; ++HTMLELEMENT) {
      if (bt.blocks[this.activeBlock.rot][iPitch][HTMLELEMENT] && this.deadline[this.activeBlock.pos.x + HTMLELEMENT]) {
        this.GameOver();
        break;
      }
    }
  }
}, GameCore.prototype.centerColumnCheck = function (pixX, pixY) {
  let bv = this.activeBlock.id;
  let bw = false;
  return !(pixY < 0) && (3 === bv || 4 === bv ? 0 === this.activeBlock.rot ? bw = (this.matrix[pixY][pixX + 1] > 0 || this.matrix[pixY + 2][pixX + 1] > 0) && !(this.matrix[pixY + 2][pixX + 1] > 0 && this.matrix[pixY][pixX + (2 * (4 === bv) | 0)] > 0) : 3 === this.activeBlock.rot && (bw = this.matrix[pixY][pixX + 1] > 0 || this.matrix[pixY + 1][pixX + 1] > 0) : 2 === bv && (0 !== this.activeBlock.rot && 2 !== this.activeBlock.rot || (bw = this.matrix[pixY + 1][pixX] > 0)), bw);
}, GameCore.prototype.rotateCurrentBlock = function (canCreateDiscussions) {
  this.finesse += 2 === canCreateDiscussions ? 2 : 1;
  let indexLookupKey = -1 === canCreateDiscussions ? "-1" : 1 === canCreateDiscussions ? "1" : "2";
  let _maskLayer = this.activeBlock.rot + canCreateDiscussions;
  _maskLayer = -1 === _maskLayer ? _maskLayer = 3 : _maskLayer % 4;
  let bx = this.blockSets[this.activeBlock.set].blocks[this.activeBlock.id];
  let heapDiffs = bx.kicks[this.activeBlock.rot][indexLookupKey];
  let gcollections = heapDiffs.length;
  if (3 !== this.activeBlock.set || !this.centerColumnCheck(this.activeBlock.pos.x, this.activeBlock.pos.y)) {
    for (let gcIndex = 0; gcIndex < gcollections; gcIndex++) {
      let by = heapDiffs[gcIndex][0];
      let bz = heapDiffs[gcIndex][1];
      if (!this.checkIntersection(this.activeBlock.pos.x + by, this.activeBlock.pos.y - bz, _maskLayer)) {
        if (this.spinPossible = true, 2 === bx.id) {
          this.tspinType = 10 * _maskLayer + gcIndex;
        } else {
          if (50 === bx.id) {
            if (2 === canCreateDiscussions) {
              return;
            }
            if (3 === _maskLayer && gcIndex < 14) {
              return;
            }
            if ((1 === _maskLayer && 0 === this.activeBlock.rot || 2 === _maskLayer && 1 === this.activeBlock.rot) && 3 !== gcIndex) {
              return;
            }
            if ((0 === _maskLayer && 1 === this.activeBlock.rot || 1 === _maskLayer && 2 === this.activeBlock.rot) && 11 !== gcIndex) {
              return;
            }
            if (3 === this.activeBlock.rot && 0 !== _maskLayer) {
              return;
            }
          }
        }
        this.activeBlock.rot = _maskLayer;
        this.activeBlock.pos.x += by;
        this.activeBlock.pos.y -= bz;
        if (bz > 0) {
          this.lockDelayActive = false;
          this.timer = 0;
        }
        if (this.ISGAME) {
          this.playSound("rotate");
        }
        break;
      }
    }
    this.updateGhostPiece(true);
    this.redraw();
  }
}, GameCore.prototype.addSolidGarbage = function () {
  if (20 === this.solidHeight) {
    return;
  }
  let ca = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
  this.deadline = this.matrix[0].slice(0);
  var configCount = this.matrix.length;
  var currentCount = 0;
  for (; currentCount < configCount; currentCount++) {
    this.matrix[currentCount] = configCount - currentCount > 1 ? this.matrix[currentCount + 1].slice(0) : ca.slice(0);
  }
  this.solidHeight++;
  if (this.ISGAME) {
    this.Replay.add(new ReplayAction(this.Replay.Action.SGARBAGE_ADD, this.timestamp()));
  }
}, GameCore.prototype.gravityStep = function (canCreateDiscussions, mmCoreSplitViewBlock) {
  return this.checkIntersection(this.activeBlock.pos.x, this.activeBlock.pos.y + 1, null) ? (this.ISGAME && !this.lockDelayActive && (this.lockDelayActive = true, this.lockDelayActivated = mmCoreSplitViewBlock, this.lastAction = mmCoreSplitViewBlock, this.playSound("land")), 0) : (this.activeBlock.pos.y++, this.spinPossible = false, canCreateDiscussions ? 1 + this.gravityStep(canCreateDiscussions - 1, mmCoreSplitViewBlock) : 1);
}, GameCore.prototype.holdBlock = function () {
  if (!this.holdUsedAlready && this.R.holdEnabled) {
    var artistTrack = null;
    if (this.ISGAME && (artistTrack = this.timestamp(), this.Replay.add(new ReplayAction(this.Replay.Action.HOLD_BLOCK, artistTrack))), this.lockDelayActive = false, null === this.blockInHold) {
      this.blockInHold = this.activeBlock;
      this.getNextBlock(artistTrack);
    } else {
      var cb = this.blockInHold;
      this.blockInHold = this.activeBlock;
      this.activeBlock = cb;
      this.setCurrentPieceToDefaultPos();
      if (this.ISGAME) {
        this.lastGeneration = artistTrack;
        if (this.VSEenabled && this.VSFXset.spawns) {
          this.playCurrentPieceSound();
        }
      }
    }
    this.updateGhostPiece(true);
    this.holdUsedAlready = true;
    this.totalKeyPresses++;
    this.gamedata.holds++;
    if (this.GameStats) {
      this.GameStats.get("HOLD").set(this.gamedata.holds);
    }
    if (this.ISGAME) {
      this.checkAutoRepeat(artistTrack, false);
      this.redrawHoldBox();
      this.redraw();
      this.playSound("hold");
    } else {
      this.v.onBlockHold();
    }
  }
}, GameCore.prototype.moveBlockToTheWall = function (canCreateDiscussions) {
  var cc = 0;
  for (; !this.checkIntersection(this.activeBlock.pos.x + canCreateDiscussions, this.activeBlock.pos.y, null);) {
    this.activeBlock.pos.x = this.activeBlock.pos.x + canCreateDiscussions;
    cc = cc + 1;
  }
  return cc && (this.updateGhostPiece(true), this.redraw()), cc;
}, GameCore.prototype.updateGhostPiece = function (canCreateDiscussions) {
  if (canCreateDiscussions || this.ghostEnabled && (!this.ISGAME || this.v.ghostEnabled && !this.v.redrawBlocked)) {
    var artistTrack = this.activeBlock.pos.y;
    for (; artistTrack <= 20; ++artistTrack) {
      if (this.checkIntersection(this.activeBlock.pos.x, artistTrack, null)) {
        this.ghostPiece.pos.x = this.activeBlock.pos.x;
        this.ghostPiece.pos.y = artistTrack - 1;
        break;
      }
    }
  }
}, GameCore.prototype.checkTSpin = function (canCreateDiscussions) {
  let mmCoreDownloaded = 0;
  let mmCoreNotDownloadable = 0;
  let cd = this.activeBlock.rot;
  let indexLookupKey = this.activeBlock.pos.x;
  let ce = this.activeBlock.pos.y;
  if (202 === canCreateDiscussions && (2 !== this.activeBlock.rot && --ce, cd = (this.activeBlock.rot + 2) % 4), ce < -2) {
    return false;
  }
  switch (cd) {
    case 0:
      if (ce >= -1) {
        mmCoreDownloaded = (this.matrix[ce + 1][indexLookupKey] > 0) + (this.matrix[ce + 1][indexLookupKey + 2] > 0);
      } else {
        if (-2 === ce) {
          mmCoreDownloaded = (this.deadline[indexLookupKey] > 0) + (this.deadline[indexLookupKey + 2] > 0);
        }
      }
      mmCoreNotDownloadable = 17 === ce ? 2 : (this.matrix[ce + 3][indexLookupKey] > 0) + (this.matrix[ce + 3][indexLookupKey + 2] > 0);
      break;
    case 1:
      if (-1 === indexLookupKey) {
        mmCoreNotDownloadable = 2;
      }
      if (ce >= -1) {
        mmCoreDownloaded = (this.matrix[ce + 1][indexLookupKey + 2] > 0) + (this.matrix[ce + 3][indexLookupKey + 2] > 0);
        if (!mmCoreNotDownloadable) {
          mmCoreNotDownloadable = (this.matrix[ce + 1][indexLookupKey] > 0) + (this.matrix[ce + 3][indexLookupKey] > 0);
        }
      } else {
        if (-2 === ce) {
          mmCoreDownloaded = (this.deadline[indexLookupKey + 2] > 0) + (this.matrix[ce + 3][indexLookupKey + 2] > 0);
          if (!mmCoreNotDownloadable) {
            mmCoreNotDownloadable = (this.deadline[indexLookupKey] > 0) + (this.matrix[ce + 3][indexLookupKey] > 0);
          }
        }
      }
      break;
    case 2:
      if (ce >= -1) {
        mmCoreNotDownloadable = (this.matrix[ce + 1][indexLookupKey] > 0) + (this.matrix[ce + 1][indexLookupKey + 2] > 0);
      } else {
        if (-2 === ce) {
          mmCoreNotDownloadable = (this.deadline[indexLookupKey] > 0) + (this.deadline[indexLookupKey + 2] > 0);
        }
      }
      mmCoreDownloaded = 17 === ce ? 2 : (this.matrix[ce + 3][indexLookupKey] > 0) + (this.matrix[ce + 3][indexLookupKey + 2] > 0);
      break;
    case 3:
      if (8 === indexLookupKey) {
        mmCoreNotDownloadable = 2;
      }
      if (ce >= -1) {
        mmCoreDownloaded = (this.matrix[ce + 1][indexLookupKey] > 0) + (this.matrix[ce + 3][indexLookupKey] > 0);
        if (!mmCoreNotDownloadable) {
          mmCoreNotDownloadable = (this.matrix[ce + 1][indexLookupKey + 2] > 0) + (this.matrix[ce + 3][indexLookupKey + 2] > 0);
        }
      } else {
        if (-2 === ce) {
          mmCoreDownloaded = (this.deadline[indexLookupKey] > 0) + (this.matrix[ce + 3][indexLookupKey] > 0);
          if (!mmCoreNotDownloadable) {
            mmCoreNotDownloadable = (this.deadline[indexLookupKey + 2] > 0) + (this.matrix[ce + 3][indexLookupKey + 2] > 0);
          }
        }
      }
  }
  this.spinPossible = 2 === mmCoreDownloaded && mmCoreNotDownloadable >= 1;
  this.spinMiniPossible = 1 === mmCoreDownloaded && 2 === mmCoreNotDownloadable;
}, GameCore.prototype.checkAllSpinImmobile = function () {
  let artistTrack = this.activeBlock.pos.x;
  let GET_AUTH_URL_TIMEOUT = this.activeBlock.pos.y;
  this.spinPossible = this.checkIntersection(artistTrack - 1, GET_AUTH_URL_TIMEOUT, null) && this.checkIntersection(artistTrack + 1, GET_AUTH_URL_TIMEOUT, null) && this.checkIntersection(artistTrack, GET_AUTH_URL_TIMEOUT - 1, null);
}, GameCore.prototype.checkAllSpin = function (name) {
  let indexesByNodeName = this.blockSets[this.activeBlock.set];
  if (!indexesByNodeName.allspin) {
    return;
  }
  let cf = indexesByNodeName.allspin[name];
  if (!cf) {
    return;
  }
  let newIntervals = this.activeBlock.pos.x;
  let paramStringWellFormed = this.activeBlock.pos.y;
  let componentJsStreams = cf[this.activeBlock.rot][0];
  let options = cf[this.activeBlock.rot][1];
  let hreviews = this;
  let merge = function (values) {
    let e1 = 0;
    for (let i = 0; i < values.length; i = i + 2) {
      let status = newIntervals + values[i];
      let k = paramStringWellFormed + values[i + 1];
      if (status < 0 || status >= 10 || k < 0 || k >= 20 || hreviews.matrix[k][status] > 0) {
        ++e1;
      }
    }
    return e1;
  };
  if (merge(componentJsStreams) !== componentJsStreams.length / 2) {
    return;
  }
  let headers = 0;
  if (Array.isArray(options[0])) {
    for (let i = 0; i < options.length; i++) {
      if (merge(options[i])) {
        headers++;
      }
    }
  } else {
    headers = merge(options);
  }
  if (this.spinPossible = true, 2 == headers) {} else {
    if (1 != headers) {
      return;
    }
    this.spinMiniPossible = true;
  }
}, GameCore.prototype.checkLineClears = function (leftFence) {
  let r = 0;
  let layerPath = -1;
  let reconnectTimeIncrease = 0;
  let _currentModifierKeys = 0;
  let cg = false;
  let waitBeforeReconnect = 0;
  let zeroSizeMax = 0;
  let subdoc = [];
  let ch = null;
  let ci = this.blockSets[this.activeBlock.set].blocks[this.activeBlock.id];
  let wsFunction = "";
  if (this.wasBack2Back = this.isBack2Back, this.spinMiniPossible = false, this.ISGAME || 3 !== this.pmode || (zeroSizeMax = this.countGarbageHeight()), this.R.clearLines) {
    if (this.spinPossible && 1 !== this.R.allSpin) {
      if (2 === ci.id || 202 === ci.id) {
        this.checkTSpin(ci.id);
      } else {
        if (2 === this.R.allSpin) {
          this.spinPossible = false;
          this.checkAllSpin(ci.id);
        } else {
          this.spinPossible = false;
        }
      }
    }
    var prop = 0;
    for (; prop < 10; ++prop) {
      if (0 !== this.deadline[prop]) {
        ++reconnectTimeIncrease;
      } else {
        if (reconnectTimeIncrease > 0) {
          break;
        }
      }
    }
    if (10 === reconnectTimeIncrease) {
      this.deadline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ++r;
    } else {
      waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
    }
    var newPath = 0;
    for (; newPath < 20; newPath++) {
      reconnectTimeIncrease = 0;
      _currentModifierKeys = 0;
      prop = 0;
      for (; prop < 10; prop++) {
        let modifierKeyValue = this.matrix[newPath][prop];
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
        if (this.R.clearDelay) {
          if (null === ch) {
            ch = copyMatrix(this.matrix);
          }
          subdoc.push(newPath);
        }
        if (this.matrix[newPath].indexOf(8) >= 0) {
          this.gamedata.garbageCleared++;
        }
        var thatpos = newPath;
        for (; thatpos > 0; thatpos--) {
          this.matrix[thatpos] = this.matrix[thatpos - 1];
        }
        this.matrix[0] = this.deadline.slice(0);
        this.deadline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        reconnectTimeIncrease = 0;
        r++;
        layerPath = newPath;
        if (this.ISGAME && 6 === this.isPmode(false) && this.MapManager.mapData.finish === this.MapManager.FINISH_STANDARD) {
          this.MapManager.lineCleared(newPath);
        }
        if (16 & _currentModifierKeys) {
          cg = true;
        }
      }
      waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
    }
    if (r > 0) {
      this.gamedata.lines += r;
      if (this.GameStats) {
        this.GameStats.get("LINES").set(this.gamedata.lines);
      }
      var preCount = 0;
      var _maskLayer = null;
      switch (r) {
        case 1:
          this.gamedata.singles++;
          preCount = this.linesAttack[1];
          if (this.spinPossible) {
            if (this.debug) {
              wsFunction = "T-Spin Single";
            }
            _maskLayer = this.Scoring.A.TSPIN_SINGLE;
            preCount = this.linesAttack[7];
            if (this.isBack2Back) {
              this.gamedata.B2B += 1;
              preCount = preCount + this.linesAttack[10];
            } else {
              this.isBack2Back = true;
            }
          } else {
            if (this.spinMiniPossible) {
              _maskLayer = this.Scoring.A.TSPIN_MINI_SINGLE;
              if (this.isBack2Back) {
                this.gamedata.B2B += 1;
              } else {
                this.isBack2Back = true;
              }
              preCount = this.linesAttack[8];
              if (this.debug) {
                wsFunction = "T-Spin Mini Single";
              }
            } else {
              this.isBack2Back = false;
              _maskLayer = this.Scoring.A.CLEAR1;
            }
          }
          break;
        case 2:
          this.gamedata.doubles++;
          preCount = this.linesAttack[2];
          if (this.spinPossible || this.spinMiniPossible) {
            this.gamedata.TSD++;
            preCount = this.linesAttack[5];
            _maskLayer = this.Scoring.A.TSPIN_DOUBLE;
            if (this.isBack2Back) {
              this.gamedata.B2B += 1;
              preCount = preCount + this.linesAttack[10];
            } else {
              this.isBack2Back = true;
            }
            if (this.debug) {
              wsFunction = "T-Spin Double";
            }
          } else {
            this.isBack2Back = false;
            _maskLayer = this.Scoring.A.CLEAR2;
          }
          break;
        case 3:
          this.gamedata.triples++;
          preCount = this.linesAttack[3];
          if (!this.spinPossible && !this.spinMiniPossible || 2 !== ci.id && 50 !== ci.id) {
            this.isBack2Back = false;
            _maskLayer = this.Scoring.A.CLEAR3;
          } else {
            preCount = this.linesAttack[6];
            _maskLayer = this.Scoring.A.TSPIN_TRIPLE;
            if (this.isBack2Back) {
              this.gamedata.B2B += 1;
              preCount = preCount + this.linesAttack[10];
            } else {
              this.isBack2Back = true;
            }
            if (this.debug) {
              wsFunction = "T-Spin Triple";
            }
          }
          break;
        case 4:
          this.gamedata.tetrises++;
          _maskLayer = this.Scoring.A.CLEAR4;
          preCount = this.linesAttack[4];
          if (this.isBack2Back) {
            this.gamedata.B2B += 1;
            preCount = preCount + this.linesAttack[10];
          } else {
            this.isBack2Back = true;
          }
          if (this.debug) {
            wsFunction = "Tetris";
          }
          break;
        default:
          this.gamedata.tetrises++;
          _maskLayer = this.Scoring.A.CLEAR5;
          preCount = this.linesAttack[6];
          if (this.isBack2Back) {
            this.gamedata.B2B += 1;
            preCount = preCount + this.linesAttack[10];
          } else {
            this.isBack2Back = true;
          }
          if (this.debug) {
            wsFunction = "Multitris (" + r + ")";
          }
      }
      if (this.R.allSpin && this.spinPossible) {
        if (this.excludedBlocksAS && this.excludedBlocksAS.length && -1 !== this.excludedBlocksAS.indexOf(ci.name)) {
          preCount = 0;
          if (this.debug) {
            wsFunction = "Ignored " + ci.name + "-Spin";
          }
        } else {
          if (2 !== ci.id) {
            _maskLayer = 127;
            preCount = 1 === this.R.allSpin ? r >= 4 ? this.linesAttack[6] + 1 : 3 === r ? this.linesAttack[6] : 2 === r ? this.linesAttack[5] : this.linesAttack[7] : this.spinMiniPossible ? Math.min(2, r) : Math.min(5, 2 * r);
            if (this.wasBack2Back) {
              preCount = preCount + this.linesAttack[10];
            }
            this.isBack2Back = true;
            if (this.debug && this.ISGAME) {
              wsFunction = ci.name + "-Spin " + (r <= 4 ? this.multipleNames[r - 1] : this.multipleNames[4]);
              if (this.spinMiniPossible) {
                wsFunction = wsFunction + " Mini";
              }
              if (this.wasBack2Back) {
                wsFunction = "B2B " + wsFunction;
              }
            }
          }
        }
      }
      if (_maskLayer >= 8 && _maskLayer <= 11) {
        this.gamedata.wasted--;
        this.gamedata.tspins++;
      }
      this.score(_maskLayer);
      let UCR_PARTICIPATION_RECEIVED = _maskLayer;
      if (0 === waitBeforeReconnect) {
        this.gamedata.PCs++;
        preCount = this.linesAttack[9];
        UCR_PARTICIPATION_RECEIVED = this.Scoring.A.PERFECT_CLEAR;
        if (this.debug) {
          wsFunction = "Perfect Clear";
        }
        this.score(UCR_PARTICIPATION_RECEIVED);
        if (this.ISGAME && 6 === this.isPmode(false) && this.MapManager.mapData.finish === this.MapManager.FINISH_BY_PC) {
          this.practiceModeCompleted(leftFence);
        }
      }
      if (this.ISGAME && 6 === this.isPmode(false) && this.MapManager.mapData.finish === this.MapManager.FINISH_STANDARD && 0 === this.MapManager.mapLines.length) {
        this.practiceModeCompleted(leftFence);
      }
      this.fourWideFlag = this.ISGAME && this.Live.noFourWide && (this.fourWideFlag && this.comboCounter >= 0 || this.is4W(layerPath));
      this.comboCounter++;
      if (this.comboCounter > 0) {
        this.score(this.Scoring.A.COMBO, this.comboCounter);
      }
      if (this.comboCounter > this.gamedata.maxCombo) {
        this.gamedata.maxCombo = this.comboCounter;
      }
      var files = this.getComboAttack(this.comboCounter);
      this.gamedata.linesSent += preCount + files;
      let _maskLayerSimulate = {type: UCR_PARTICIPATION_RECEIVED, b2b: this.wasBack2Back, cmb: this.comboCounter};
      if ((preCount > 0 || files > 0) && this.GameStats && this.GameStats.get("ATTACK").set(this.gamedata.linesSent), this.ISGAME) {
        let cj = [UCR_PARTICIPATION_RECEIVED, _maskLayer, this.wasBack2Back && this.isBack2Back, this.comboCounter];
        this.playSound(this.SFXset.getClearSFX(...cj), 1);
        if (this.VSEenabled) {
          this.playSound(this.VSFXset.getClearSFX(...cj), 2);
        }
        if (this.debug && wsFunction) {
          this.Live.showInChat("", wsFunction);
        }
      }
      if (this.isPmode(false)) {
        if (this.gamedata.attack = this.gamedata.linesSent, 1 === this.isPmode(false)) {
          if (this.linesRemaining >= r) {
            this.linesRemaining -= r;
          } else {
            this.linesRemaining = 0;
          }
          if (this.ISGAME) {
            this.lrem.textContent = this.linesRemaining;
          }
        } else {
          if (3 === this.isPmode(false)) {
            let duedate = this.countGarbageHeight();
            if (this.ISGAME) {
              if (this.cheeseLevel > duedate) {
                var timeSubmittedDiff = this.cheeseLevel - duedate;
                this.cheeseLevel = duedate;
                this.linesRemaining -= timeSubmittedDiff;
                if (this.linesRemaining > this.cheeseLevel && this.cheeseLevel < this.minCheeseHeight) {
                  this.addGarbage(1);
                  this.cheeseLevel += 1;
                }
              }
              this.setLrem(this.linesRemaining);
            } else {
              let ck = zeroSizeMax - duedate;
              this.linesRemaining -= ck;
            }
          } else {
            if (7 === this.isPmode(false)) {
              if (this.ISGAME && _maskLayer !== this.Scoring.A.TSPIN_DOUBLE) {
                this.Caption.gameWarning(i18n.notTSD, i18n.notTSDInfo);
                this.practiceModeCompleted();
              }
              if (this.ISGAME) {
                this.lrem.textContent = this.gamedata.TSD;
              }
              if (20 === this.gamedata.TSD) {
                this.gamedata.TSD20 = Math.round(1e3 * this.clock);
              }
            } else {
              if (this.ISGAME && 8 === this.isPmode(false)) {
                if (UCR_PARTICIPATION_RECEIVED === this.Scoring.A.PERFECT_CLEAR) {
                  this.gamedata.lastPC = this.clock;
                  this.lrem.textContent = this.gamedata.PCs;
                  if (this.ISGAME) {
                    this.PCdata = {blocks: 0, lines: 0};
                  }
                } else {
                  if (this.ISGAME) {
                    this.PCdata.blocks++;
                    this.PCdata.lines += r;
                    this.evalPCmodeEnd();
                  }
                }
              } else {
                if (this.ISGAME && 9 === this.isPmode(false)) {
                  let y = this.gamedata.lines - r;
                  for (let ky = 1; ky <= r; ++ky) {
                    this.ModeManager.on(this.ModeManager.LINE, y + ky);
                  }
                  this.ModeManager.on(this.ModeManager.LINECLEAR, r);
                  if (preCount > 0) {
                    this.blockOrSendAttack(preCount, leftFence);
                  }
                  if (files > 0) {
                    this.blockOrSendAttack(files, leftFence);
                  }
                }
              }
            }
          }
        }
        if (!this.linesRemaining && this.ISGAME) {
          this.practiceModeCompleted();
        }
      } else {
        if (this.ISGAME) {
          if (this.fourWideFlag && files && this.Live.noFourWide) {
            this.Caption.gameWarning(i18n.fwDetect, i18n.fwDetectInfo);
            for (; files > 0;) {
              this.addGarbage(1);
              --files;
            }
          }
          let lastviewmatrix = null;
          let selectedArchive = null;
          if (preCount > 0) {
            lastviewmatrix = this.blockOrSendAttack(preCount, leftFence);
          }
          if (files > 0) {
            selectedArchive = this.blockOrSendAttack(files, leftFence);
          }
          if (lastviewmatrix || selectedArchive) {
            this.Live.sendAttack(lastviewmatrix, selectedArchive, _maskLayerSimulate);
          }
        }
      }
      if (this.ISGAME) {
        if (cg) {
          this.Items.pickup();
        }
        if (this.R.clearDelay && !this.redrawBlocked) {
          this.play = false;
          this.redrawBlocked = true;
          this.animator = new LineClearAnimator(ch, subdoc, this);
        }
      } else {
        this.v.onLinesCleared(preCount, files, _maskLayerSimulate);
      }
    } else {
      this.comboCounter = -1;
      let artistTrack = null;
      if (this.spinPossible ? (artistTrack = this.Scoring.A.TSPIN, this.debug && this.ISGAME && this.Live.showInChat("", ci.name + "-Spin")) : this.spinMiniPossible && (artistTrack = this.Scoring.A.TSPIN_MINI, this.debug && this.ISGAME && this.Live.showInChat("", ci.name + "-Spin Mini")), artistTrack && (this.score(artistTrack), this.ISGAME)) {
        let cl = [artistTrack, artistTrack, false, -1];
        this.playSound(this.SFXset.getClearSFX(...cl), 1);
        if (this.VSEenabled) {
          this.playSound(this.VSFXset.getClearSFX(...cl), 2);
        }
      }
      if (this.ISGAME && 3 === this.isPmode(false)) {
        var value = this.maxCheeseHeight - this.cheeseLevel;
        if (value > 0) {
          var i = Math.min(value, this.linesRemaining - this.cheeseLevel);
          thatpos = 0;
          for (; thatpos < i; thatpos++) {
            this.addGarbage(1);
          }
          this.cheeseLevel += i;
        }
      } else {
        if (this.ISGAME && 8 === this.isPmode(false)) {
          this.PCdata.blocks++;
          this.evalPCmodeEnd();
        }
      }
    }
  } else {
    this.comboCounter = -1;
  }
}, GameCore.prototype.countGarbageHeight = function (i) {
  i = i || 20;
  var interestingPoint = 0;
  var whichFriend = 0;
  for (; whichFriend < i; whichFriend++) {
    if (8 !== this.matrix[19 - whichFriend][0] && 8 !== this.matrix[19 - whichFriend][1]) {
      interestingPoint = whichFriend;
      break;
    }
  }
  return interestingPoint;
}, GameCore.prototype.is4W = function (boardManager) {
  var cm = 0;
  var IS_HANDLED = boardManager;
  for (; IS_HANDLED >= 0; IS_HANDLED--) {
    var mmCoreNotDownloaded = null;
    var isOnline = false;
    var id = 0;
    for (; id < 10; id++) {
      if (9 !== this.matrix[IS_HANDLED][id]) {
        if (0 === this.matrix[IS_HANDLED][id]) {
          if (isOnline) {
            mmCoreNotDownloaded = -1;
            isOnline = false;
            break;
          }
          if (null === mmCoreNotDownloaded) {
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
              mmCoreNotDownloaded = -1;
              isOnline = false;
              break;
            }
          }
        }
      }
    }
    if (4 === mmCoreNotDownloaded || isOnline) {
      if (++cm >= 3) {
        return true;
      }
    } else {
      if (cm = 0, IS_HANDLED <= 3) {
        return false;
      }
    }
  }
  return false;
}, GameCore.prototype.placeBlock = function (imageModelSection, afterIdx, mmCoreSplitViewBlock) {
  ++this.placedBlocks;
  if (2 === this.activeBlock.id) {
    this.gamedata.wasted++;
    this.gamedata.tpieces++;
  }
  if (this.GameStats) {
    this.GameStats.get("BLOCKS").set(this.placedBlocks);
  }
  if (this.GameStats) {
    this.GameStats.get("KPP").set(this.getKPP());
  }
  if (this.ISGAME) {
    this.savePlacementTime();
    mmCoreSplitViewBlock = mmCoreSplitViewBlock || this.timestamp();
  }
  let tmpTimeVal = 0;
  let selTimeVal = 0;
  let cn = false;
  let MULT3 = this.blockSets[this.activeBlock.set].blocks[this.activeBlock.id];
  let ld = MULT3.blocks[this.activeBlock.rot].length;
  let s1 = 0;
  if (this.spinPossible && 1 === this.R.allSpin) {
    this.checkAllSpinImmobile();
  }
  var i = 0;
  for (; i < ld; i++) {
    var id = 0;
    for (; id < ld; id++) {
      let co = MULT3.blocks[this.activeBlock.rot][i][id];
      if (co > 0) {
        ++selTimeVal;
        s1 = co === this.activeBlock.item ? 16 : 0;
        if (afterIdx + i >= 0 && imageModelSection + id >= 0) {
          this.matrix[afterIdx + i][imageModelSection + id] = MULT3.color ^ s1;
          if (afterIdx + i === 19 - this.solidHeight) {
            if (this.ISGAME && 1 === this.Live.liveMode && !this.pmode) {
              this.Live.raceCompleted();
              this.place = 1;
              cn = true;
            } else {
              if (!this.ISGAME) {
                this.playing = false;
              }
            }
          }
        } else {
          tmpTimeVal++;
          if (afterIdx + i === -1 && 0 === this.deadline[imageModelSection + id]) {
            this.deadline[imageModelSection + id] = MULT3.color ^ s1;
          }
        }
      }
    }
  }
  if (tmpTimeVal === selTimeVal && this.GameOver(), this.play) {
    this.holdUsedAlready = false;
    this.checkLineClears(mmCoreSplitViewBlock);
    for (; this.solidToAdd;) {
      this.addSolidGarbage();
      this.solidToAdd--;
    }
    if (!(-1 !== this.comboCounter && 0 === this.R.gblock)) {
      this.addGarbageFromQueue(mmCoreSplitViewBlock);
    }
    this.getNextBlock(mmCoreSplitViewBlock);
    if (cn) {
      this.GameOver();
    }
  } else {
    if (!this.ISGAME) {
      this.holdUsedAlready = false;
      this.checkLineClears();
      this.getNextBlock();
      this.v.onBlockLocked();
    }
  }
  if (this.gamedata.tpieces > 0 && this.GameStats) {
    this.GameStats.get("WASTE").set(this.getWasted());
  }
}, GameCore.prototype.getQueuePreview = function (url) {
  let Sharetor = [];
  var cp = 0;
  for (; cp < this.queueLength; cp++) {
    Sharetor.push(this.getRandomizerBlock(url));
  }
  return Sharetor;
}, GameCore.prototype.generateQueue = function () {
  if (this.ISGAME) {
    this.queue = [];
  } else {
    this.queue.splice(0, this.queueLength);
  }
  var cq = 0;
  for (; cq < this.queueLength; cq++) {
    this.queue.push(this.getRandomizerBlock());
  }
  if (!this.ISGAME) {
    if (1 === this.pmode) {
      if (this.queue[0].id >= 5 && 0 === this.queue[0].set) {
        var cr = this.queue[0];
        if (this.queue[1].id < 5) {
          this.queue[0] = this.queue[1];
          this.queue[1] = cr;
        } else {
          this.queue[0] = this.queue[2];
          this.queue[2] = cr;
        }
      }
    } else {
      if (this.r.c.v < 3.3 && 2 !== this.pmode && this.queue.length >= 3 && this.queue[0].id >= 5 && this.queue[1].id >= 5) {
        cr = this.queue[0];
        this.queue[0] = this.queue[2];
        this.queue[2] = cr;
      }
    }
  }
}, GameCore.prototype.getAPM = function () {
  var cs = this.clock;
  return this.ISGAME || (cs = cs / 1e3), Math.round(100 * this.gamedata.attack / (cs / 60)) / 100;
}, GameCore.prototype.getKPP = function () {
  var number = 0;
  return this.placedBlocks && (number = (this.totalKeyPresses + this.placedBlocks) / this.placedBlocks), Math.round(100 * number) / 100;
}, GameCore.prototype.getVS = function () {
  var lowestDelta = this.clock;
  return this.ISGAME || (lowestDelta = lowestDelta / 1e3), Math.round(1e4 * (this.gamedata.garbageCleared + this.gamedata.attack) / lowestDelta) / 100;
}, GameCore.prototype.getWasted = function () {
  return Math.round(this.gamedata.wasted / this.gamedata.tpieces * 100) / 100;
}, GameCore.prototype.clearMatrix = function () {
  var addressCount = this.matrix.length;
  var IS_HANDLED = 0;
  for (; IS_HANDLED < addressCount; IS_HANDLED++) {
    var ld = this.matrix[IS_HANDLED].length;
    var id = 0;
    for (; id < ld; id++) {
      this.matrix[IS_HANDLED][id] = 0;
    }
  }
}, GameCore.prototype.updateQueueBox = function () {
  if (this.ISGAME && this.redrawBlocked) {
    return;
  }
  if (!this.ISGAME && (this.v.redrawBlocked || !this.v.QueueHoldEnabled)) {
    return;
  }
  this.v.clearQueueCanvas();
  let keyOffset = 0;
  var cur = 0;
  for (; cur < this.R.showPreviews; cur++) {
    if (cur >= this.queue.length) {
      if (9 != this.pmode) {
        break;
      }
      if (!this.ModeManager.repeatQueue) {
        break;
      }
      this.ModeManager.addStaticQueueToQueue();
    }
    var res = this.queue[cur];
    var coupling = this.blockSets[res.set].previewAs;
    var values = coupling.blocks[res.id].blocks[0];
    var artistTrack = coupling.blocks[res.id].color;
    var change = coupling.equidist ? [0, 3] : coupling.blocks[res.id].yp;
    var notes_mac = values.length;
    var curElem = coupling.blocks[res.id].xp ? coupling.blocks[res.id].xp : [0, notes_mac - 1];
    var j = change[0];
    for (; j <= change[1]; j++) {
      var i = curElem[0];
      for (; i <= curElem[1]; i++) {
        if (values[j][i] > 0) {
          this.v.drawBlockOnCanvas(i - curElem[0], j - change[0] + keyOffset, artistTrack, this.v.QUEUE);
          if (res.item && values[j][i] === res.item) {
            this.v.drawBrickOverlayOnCanvas(i - curElem[0], j - change[0] + keyOffset, this.v.QUEUE);
          }
        }
      }
    }
    if (coupling.equidist) {
      keyOffset = keyOffset + 3;
    } else {
      keyOffset = keyOffset + (change[1] - change[0] + 2);
    }
  }
}, GameCore.prototype.redrawHoldBox = function () {
  if ((!this.ISGAME || !this.redrawBlocked) && (this.ISGAME || !this.v.redrawBlocked && this.v.QueueHoldEnabled) && (this.v.clearHoldCanvas(), null !== this.blockInHold)) {
    var ct = this.blockSets[this.blockInHold.set].previewAs;
    var nextIdLookup = ct.blocks[this.blockInHold.id].blocks[0];
    var artistTrack = ct.blocks[this.blockInHold.id].color;
    var functionDesc = ct.equidist ? [0, 3] : ct.blocks[this.blockInHold.id].yp;
    var currentIndex = nextIdLookup.length;
    var slots = ct.blocks[this.blockInHold.id].xp ? ct.blocks[this.blockInHold.id].xp : [0, currentIndex - 1];
    var xValue = functionDesc[0];
    for (; xValue <= functionDesc[1]; xValue++) {
      var slot = slots[0];
      for (; slot <= slots[1]; slot++) {
        if (nextIdLookup[xValue][slot] > 0) {
          this.v.drawBlockOnCanvas(slot - slots[0], xValue - functionDesc[0], artistTrack, this.v.HOLD);
          if (this.blockInHold.item && nextIdLookup[xValue][slot] === this.blockInHold.item) {
            this.v.drawBrickOverlayOnCanvas(slot - slots[0], xValue - functionDesc[0], this.v.HOLD);
          }
        }
      }
    }
  }
}, GameCore.prototype.resetGameData = function () {
  let drivers = Object.keys(this.gamedata);
  for (let drvName of drivers) {
    this.gamedata[drvName] = 0;
  }
}, GameCore.prototype.getGravityLevel = function (canCreateDiscussions) {
  return canCreateDiscussions <= 0 ? [Number.MAX_SAFE_INTEGER, 0] : canCreateDiscussions <= 18 ? [(18 - 1 * (canCreateDiscussions - 1)) / 20, 0] : canCreateDiscussions <= 24 ? [(.9 - .1 * (canCreateDiscussions - 19)) / 20, 0] : 25 === canCreateDiscussions ? [.03, 1] : 26 === canCreateDiscussions ? [.02, 1] : 27 === canCreateDiscussions ? [.03333333333333333, 2] : [0, 20];
}, "undefined" != typeof module && null != module && (module.exports = GameCore), Bag.prototype.getBlock = function () {
  let artistTrack = Math.floor(this.RNG() * this.bag.length);
  let type = this.bag.splice(artistTrack, 1)[0];
  return 0 === this.bag.length && (this.bag = this.usebag.slice(0)), new Block(type);
}, Classic.prototype.getBlock = function () {
  let type = Math.floor(this.RNG() * this.n);
  return new Block(type);
}, OneBlock.prototype.getBlock = function () {
  var type = this.bag[0];
  return this.bag.length > 1 && (type = this.bag[this.lastIndex++], this.lastIndex %= this.bag.length), new Block(type);
}, C2Sim.prototype.getRandomExcept = function (topMaxHeight) {
  let topNaturalHeight = Math.floor(this.RNG() * (this.n - 1));
  return topMaxHeight >= 0 && topNaturalHeight >= topMaxHeight && ++topNaturalHeight, topNaturalHeight === this.n && (topNaturalHeight = 0), topNaturalHeight;
}, C2Sim.prototype.getBlock = function () {
  let type = 0;
  if (this.hist[0] < 0) {
    type = Math.floor(this.RNG() * this.n);
  } else {
    if (this.hist[0] === this.hist[1] || this.hist[1] < 0) {
      type = this.RNG() <= .028105 ? this.hist[0] : this.getRandomExcept(this.hist[0]);
    } else {
      let cu = this.RNG();
      if (cu <= .027055) {
        type = this.hist[0];
      } else {
        if (cu >= .882639) {
          type = this.hist[1];
        } else {
          do {
            type = this.getRandomExcept(this.hist[0]);
          } while (type === this.hist[1]);
        }
      }
    }
  }
  return this.hist[1] = this.hist[0], this.hist[0] = type, new Block(type);
}, Repeated.prototype.nextSegment = function (canCreateDiscussions) {
  this.block = this.randomizer.getBlock();
  this.i = 1 + Math.floor(this.randomizer.RNG() * this.n);
}, Repeated.prototype.getBlock = function (canCreateDiscussions) {
  return 0 === this.i && this.nextSegment(), this.i--, this.block;
}, BsBlock.prototype.getBlock = function () {
  let cv = this.randomizer.getBlock();
  return this.i++, this.i >= 21 && this.randomizer.RNG() < .1 && (cv.set = this.bsArr[Math.floor(this.randomizer.RNG() * this.bsArr.length)], this.i = 0, 2 === cv.set && (cv.id = Math.floor(7 * this.randomizer.RNG())), 4 === cv.set && (cv.id = Math.floor(18 * this.randomizer.RNG()))), cv;
}, BigBlockRand.prototype.getBlock = function () {
  let cw = this.randomizer.getBlock();
  return this.i++, this.randomizer.RNG() < this.i / this.EXPECTED_BLOCKS && (cw.set = 2, cw.id = Math.floor(7 * this.randomizer.RNG())), cw;
}, ConstBlock.prototype.getBlock = function () {
  let cx = new Block(this.id);
  return cx.set = 0 === this.set ? -1 : this.set, cx;
}, Live.prototype.adjustForCustomLayout = function () {
  if ("s" === this.getParameterByName("vt")) {
    document.getElementById("lobby").style.display = "none";
    document.getElementsByClassName("navbar")[0].style.display = "none";
  }
  if ("0" === this.getParameterByName("ce")) {
    document.getElementById("chatInputArea").style.display = "none";
    document.getElementsByClassName("chatArea")[0].style.display = "none";
  }
}, Live.prototype.toggleLobbby = function (canCreateDiscussions) {
  if ("boolean" == typeof canCreateDiscussions && (this.lobbyVisible = !canCreateDiscussions), this.lobbyVisible) {
    this.lobbyBox.style.display = "none";
    this.lobbyVisible = false;
    this.p.focusState = 0;
    this.RoomInfo.onLobbyClosed();
  } else {
    let cy = this.clients[this.cid] && this.clients[this.cid].mod;
    this.editRoomButton.style.display = this.iAmHost || cy ? null : "none";
    this.editRoomButton.classList.add("editBtn");
    if (cy) {
      if (this.iAmHost) {
        if (this.editRoomButton.classList.contains("modEditBtn")) {
          this.editRoomButton.classList.remove("modEditBtn");
          this.editRoomButton.childNodes[1].nodeValue = " Edit";
        }
      } else {
        this.editRoomButton.classList.add("modEditBtn");
        this.editRoomButton.childNodes[1].nodeValue = " ModEdit";
      }
    }
    this.lobbyBox.style.display = "block";
    this.lobbyVisible = true;
    this.refreshLobbby();
    this.p.focusState = 1;
  }
}, Live.prototype.initEmoteSelect = function (canCreateDiscussions) {
  showElem(document.querySelector("svg.emSel"));
  this.chatInput.style.paddingRight = "37px";
  this.EmoteSelect = new EmoteSelect(this.chatInput, canCreateDiscussions, this.chatArea, document.querySelector("svg.emSel"), "/res/oe/", {Jstris: "/res/img/e/jstris.png", "smileys-emotion": "grinning_face", "people-body": "waving_hand", "animals-nature": "monkey_face", "food-drink": "red_apple", "travel-places": "compass", activities: "joystick", objects: "light_bulb", symbols: "warning", flags: "flag_isle_of_man", "extras-openmoji": "hacker_cat", "extras-unicode": "first_aid", "user-emotes": "/res/img/e/u/erickmack.png"});
}, Live.prototype.toggleMore = function () {
  if (this.moreVisible) {
    this.moreResults.style.display = "none";
    this.moreVisible = false;
    this.p.focusState = 0;
  } else {
    this.safeSend('{"t":15}');
    this.moreResults.style.display = "block";
    this.moreVisible = true;
    this.p.focusState = 1;
  }
}, Live.prototype.refreshLobbby = function () {
  this.safeSend('{"t":10}');
  this.refreshLobbyButton.disabled = true;
  setTimeout(function () {
    this.refreshLobbyButton.disabled = false;
  }.bind(this), 2e3);
}, Live.prototype.saveRD = function () {
  var cz;
  var PL$13;
  var PL$17;
  var data = {};
  var da = {comboTable: {d: ",", t: "i"}, attackTable: {d: ",", t: "i"}, lockDelay: {d: "/", t: "i"}, sgProfile: {d: ",", t: "f"}};
  cz = document.getElementById("moreSet2");
  var settingHandler = Array.prototype.slice.call(cz.getElementsByTagName("input"), 0);
  var value = Array.prototype.slice.call(cz.getElementsByTagName("select"), 0);
  PL$13 = settingHandler.concat(value);
  PL$17 = 0;
  for (; PL$17 < PL$13.length; ++PL$17) {
    if ("attackMode" !== PL$13[PL$17].id && "radio" !== PL$13[PL$17].type && "hidden" !== PL$13[PL$17].type) {
      if ("checkbox" === PL$13[PL$17].type) {
        data[PL$13[PL$17].id] = PL$13[PL$17].checked;
      } else {
        var value = PL$13[PL$17].value;
        var color = /^\d+$/.test(value);
        if (data[PL$13[PL$17].id] = color ? parseInt(value) : value, PL$13[PL$17].id in da) {
          let magnifier = da[PL$13[PL$17].id].d;
          let db = da[PL$13[PL$17].id].t;
          var $magnifier = value.split(magnifier);
          var travis_job = null;
          if ("i" === db) {
            travis_job = $magnifier.map(function (id_local) {
              return parseInt(id_local);
            });
          } else {
            if ("f" === db) {
              travis_job = $magnifier.map(function (IDM_s0) {
                return parseFloat(IDM_s0);
              });
            }
          }
          data[PL$13[PL$17].id] = travis_job;
        }
      }
    }
  }
  var courseId = parseInt(document.querySelector('input[name="allSpin"]:checked').value);
  if (courseId) {
    data.allSpin = courseId;
  }
  delete data.hostStart;
  delete data.srvSel;
  document.getElementById("saveData").style.display = "block";
  document.getElementById("saveDataArea").value = JSON.stringify(data);
  if ("function" == typeof ga) {
    ga("send", {hitType: "event", eventCategory: "Preset", eventAction: "export"});
  }
}, Live.prototype.switchRDmode = function (pingErr) {
  var PL$13 = document.getElementsByName("moreSel");
  var PL$17 = 0;
  for (; PL$17 < PL$13.length; PL$17++) {
    if (PL$13[PL$17].value === pingErr.toString()) {
      PL$13[PL$17].checked = true;
    }
  }
  document.getElementById("moreSet2").style.display = "block";
  document.getElementById("presetMode").style.display = "none";
  document.getElementById("saveRD").style.visibility = "visible";
  this.createRoomDialog.style.height = null;
  if (0 === pingErr) {
    this.showClass("adv", false);
    this.showClass("simple", true);
  } else {
    if (1 === pingErr) {
      this.showClass("simple", false);
      this.showClass("adv", true);
      this.createRoomDialog.style.height = "660px";
    } else {
      if (2 === pingErr) {
        document.getElementById("moreSet2").style.display = "none";
        document.getElementById("presetMode").style.display = "block";
        document.getElementById("saveRD").style.visibility = "hidden";
        this.createRoomDialog.style.height = "493px";
      }
    }
  }
}, Live.prototype.onPresetChange = function () {
  var dc = document.getElementById("presetSel");
  document.getElementById("settingsDesc").textContent = dc.options[dc.selectedIndex].dataset.desc;
}, Live.prototype.useCustomPreset = function () {
  var line = prompt("Enter title or ID");
  if (null !== line) {
    var reporter = new XMLHttpRequest;
    var dd = this;
    reporter.addEventListener("load", function () {
      var value = JSON.parse(this.responseText);
      var element = document.getElementById("presetSel");
      addOption(element, value);
      element.value = value.id;
      dd.onPresetChange();
    });
    reporter.open("GET", "/code/getPresetData/" + line);
    reporter.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    reporter.send();
  }
}, Live.prototype.showRoomDialogForEdit = function () {
  this.showRoomDialog();
  this.switchRDmode(1);
  let de = this.roomConfig;
  let df = document.getElementById("create");
  var dg;
  var dh;
  df.classList.add("editBtn");
  df.childNodes[1].nodeValue = " " + i18n.applyCh;
  document.getElementById("gameMode").disabled = true;
  document.getElementById("srvSel").disabled = true;
  hideElem(document.getElementById("addJL"));
  this.roomNameInput.value = (dg = this.roomConfig.n, (dh = document.createElement("textarea")).innerHTML = dg, dh.value);
  this.isPrivateInput.checked = this.roomConfig.p;
  document.getElementById("numPlayers").value = de.max >= 1 && de.max <= 7 ? de.max : 28;
  document.getElementById("gameMode").value = de.pmode ? de.pmode[0] + 100 : de.mode;
  document.getElementById("attackTable").value = this.roomConfig.at.join(",");
  document.getElementById("comboTable").value = this.roomConfig.ct.join(",");
  document.getElementById("sgProfile").value = this.roomConfig.sgpA.join(",");
  document.getElementById("gdmSel").value = de.gdm;
  document.getElementById("gblockSel").value = de.gblock;
  document.getElementById("rndSel").value = de.rnd;
  document.getElementById("blocksSel").value = de.bbs;
  document.getElementById("prSel").value = de.pr;
  document.getElementById("garbageDelay").value = de.gDelay;
  document.getElementById("mess").value = de.mess;
  document.getElementById("gapW").value = de.gapW;
  document.getElementById("gInv").checked = de.gInv;
  document.getElementById("hasSolid").checked = 0 !== de.sg;
  document.getElementById("solid").value = de.sg;
  document.getElementById("hasHold").checked = de.hold;
  document.getElementById("hostStart").checked = de.hostStart;
  document.getElementById("noFW").checked = de.noFW;
  document.getElementById("solidAtk").checked = de.sa;
  document.getElementById("as" + de.as).checked = true;
  document.getElementById("asEx").value = de.asEx;
  document.getElementById("clearDelay").value = de.cd;
  document.getElementById("speedLimit").value = de.sl;
  document.getElementById("gravityLvl").value = de.grav;
  document.getElementById("lockDelay").value = de.ld.join("/");
  document.getElementById("srvSel").value = this.serverId;
}, Live.prototype.showRoomDialog = function () {
  this.clearRoomForm();
  this.createRoomDialog.style.display = "block";
  let di = document.getElementById("create");
  di.classList.remove("editBtn");
  di.childNodes[1].nodeValue = " " + i18n.create;
  document.getElementById("gameMode").disabled = false;
  document.getElementById("srvSel").disabled = false;
  document.getElementById("addJL").style.display = "inline";
  var xhrHandshake = new XMLHttpRequest;
  var values = document.getElementById("presetSel");
  values.innerHTML = '<option value="0" data-desc="The default settings">Default</option>';
  values.value = "0";
  this.onPresetChange();
  xhrHandshake.addEventListener("load", function () {
    var options = JSON.parse(this.responseText);
    var i = 0;
    for (; i < options.length; i++) {
      addOption(values, options[i]);
    }
    document.getElementById("presetLoadState").style.visibility = "hidden";
  });
  xhrHandshake.open("GET", "/code/presetList");
  xhrHandshake.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhrHandshake.send();
  document.getElementById("presetLoadState").style.visibility = "visible";
}, Live.prototype.closeRoomDialog = function () {
  this.createRoomDialog.style.display = "none";
  this.clearRoomForm();
}, Live.prototype.clearRoomForm = function () {
  this.switchRDmode(2);
  this.roomNameInput.value = ("" !== this.chatName ? this.chatName : "NoNamed") + "'s room";
  this.isPrivateInput.checked = false;
  document.getElementById("createState").style.display = "none";
  document.getElementById("create").disabled = false;
  document.getElementById("saveData").style.display = "none";
  document.getElementById("numPlayers").value = 28;
  document.getElementById("gameMode").value = 0;
  document.getElementById("isPrivate").checked = false;
  document.getElementById("hasSolid").checked = true;
  document.getElementById("solid").value = 120;
  this.setDefaultRule();
  this.clearLimitsForm();
}, Live.prototype.clearLimitsForm = function () {
  let dj = document.getElementById("joinLimits");
  let fieldDetails = Array.from(dj.getElementsByTagName("input"));
  let dk = 0;
  for (let fieldDetail of fieldDetails) {
    fieldDetail.min = "0";
    fieldDetail.step = ".1";
    fieldDetail.autocomplete = "off";
    fieldDetail.placeholder = dk % 2 == 0 ? "MIN" : "MAX";
    fieldDetail.value = "";
    ++dk;
  }
}, Live.prototype.getFilledLimits = function () {
  let dl = document.getElementById("joinLimits");
  let fieldDetails = Array.from(dl.getElementsByTagName("input"));
  let dialogShowLen = -1;
  let $definitionBase = 0;
  let range_max_score = [];
  for (let fieldDetail of fieldDetails) {
    if (++dialogShowLen, "" === fieldDetail.value) {
      range_max_score.push(null);
      ++$definitionBase;
      continue;
    }
    let percentageScore = parseFloat(fieldDetail.value);
    if (isNaN(percentageScore)) {
      return false;
    }
    if (range_max_score.push(percentageScore), dialogShowLen % 2 == 1 && null !== range_max_score[dialogShowLen - 1] && percentageScore <= range_max_score[dialogShowLen - 1]) {
      return false;
    }
  }
  return $definitionBase === range_max_score.length ? null : range_max_score;
}, Live.prototype.setDefaultRule = function () {
  document.getElementById("attackMode").value = 0;
  this.attackSelect();
  document.getElementById("solid").disabled = !document.getElementById("hasSolid").checked;
  document.getElementById("hasHold").checked = true;
  document.getElementById("solid").value = 120;
  document.getElementById("clearDelay").value = 0;
  document.getElementById("speedLimit").value = 0;
  document.getElementById("rndSel").value = "0";
  document.getElementById("blocksSel").value = "0";
  document.getElementById("gravityLvl").value = "1";
  document.getElementById("lockDelay").value = "500/5000/20000";
  document.getElementById("sgProfile").value = "0,3";
  document.getElementById("prSel").value = "5";
  document.getElementById("gdmSel").value = "3";
  document.getElementById("gblockSel").value = "0";
  document.getElementById("garbageDelay").value = "500";
  document.getElementById("mess").value = "0";
  document.getElementById("gapW").value = "1";
  document.getElementById("gInv").checked = false;
  document.getElementById("hostStart").checked = false;
  document.getElementById("noFW").checked = false;
  document.getElementById("solidAtk").checked = false;
  document.getElementById("as0").checked = true;
  document.getElementById("asEx").value = "";
  document.getElementById("srvSel").value = "0";
}, Live.prototype.attackSelect = function () {
  var dm = "";
  var dn = "";
  switch (parseInt(document.getElementById("attackMode").value)) {
    case 0:
      dm = "0,0,1,2,4,4,6,2,0,10,1";
      dn = "0,0,1,1,1,2,2,3,3,4,4,4,5";
      break;
    case 1:
      dm = "0,0,1,2,4,4,6,2,1,9,1";
      dn = "0,0,1,1,2,2,3,3,4,4,4,5,5";
      break;
    case 2:
      dm = "0,0,1,2,4,1,2,0,0,10,1";
      dn = "0,0,1,1,1,2,2,3,3,4,4,4,5";
  }
  document.getElementById("attackTable").value = dm;
  document.getElementById("comboTable").value = dn;
}, Live.prototype.applyPreset = function (ExistingConfig) {
  var name;
  for (name in ExistingConfig) {
    switch (name) {
      case "attackTable":
        document.getElementById("attackTable").value = ExistingConfig[name].join(",");
        break;
      case "comboTable":
        document.getElementById("comboTable").value = ExistingConfig[name].join(",");
        break;
      case "sgProfile":
        document.getElementById("sgProfile").value = ExistingConfig[name].join(",");
        break;
      case "lockDelay":
        document.getElementById("lockDelay").value = ExistingConfig[name].join("/");
        break;
      case "hasSolid":
        document.getElementById("hasSolid").checked = ExistingConfig[name];
        break;
      case "hasHold":
        document.getElementById("hasHold").checked = ExistingConfig[name];
        break;
      case "isPrivate":
        document.getElementById("isPrivate").checked = ExistingConfig[name];
        break;
      case "allSpin":
        document.getElementById("as" + ExistingConfig[name]).checked = true;
        break;
      default:
        document.getElementById(name).value = ExistingConfig[name];
    }
  }
}, Live.prototype.makeRoomWrapper = function () {
  var data = document.getElementById("create").classList.contains("editBtn");
  if (document.getElementById("more_preset").checked) {
    var tQueryStr = document.getElementById("presetSel").value;
    if ("0" != tQueryStr) {
      document.getElementById("createState").style.display = "inline";
      document.getElementById("create").disabled = true;
      var originCaptchaUrl = new XMLHttpRequest;
      var coordtransform = this;
      return originCaptchaUrl.addEventListener("load", function () {
        var coord = JSON.parse(this.responseText);
        coordtransform.setDefaultRule();
        coordtransform.applyPreset(coord.data);
        coordtransform.makeRoom(data);
      }), originCaptchaUrl.open("GET", "/code/getPresetData/" + tQueryStr), originCaptchaUrl.setRequestHeader("X-Requested-With", "XMLHttpRequest"), originCaptchaUrl.send(), void ("function" == typeof ga && ga("send", {hitType: "event", eventCategory: "Preset", eventAction: "load"}));
    }
  }
  this.makeRoom(data);
}, Live.prototype.makeRoom = function (responseTasks) {
  var inputPos = true;
  var outputPos = "";
  var lta = this.roomNameInput.value.replace(/"/g, '\\"');
  var data = new Object;
  data.t = 11;
  if (responseTasks) {
    data.edit = responseTasks;
  }
  if (document.getElementById("more_simple").checked) {
    this.attackSelect();
  }
  if (0 === lta.length) {
    outputPos = outputPos + (i18n.rNameReq + "\n");
    inputPos = false;
  }
  data.p = this.isPrivateInput.checked;
  data.n = lta;
  var content;
  var average;
  var _0xe1a7x39 = document.getElementById("numPlayers");
  data.pl = parseInt(dp.options[dp.selectedIndex].value);
  dp = document.getElementById("gameMode");
  data.m = parseInt(dp.options[dp.selectedIndex].value);
  if (data.m > 100) {
    data.pm = data.m - 100;
    data.m = 3;
  }
  var nPiePattern = "[" + document.getElementById("attackTable").value + "]";
  var message = "[" + document.getElementById("comboTable").value + "]";
  try {
    content = JSON.parse(nPiePattern);
    average = JSON.parse(message);
    if (11 !== content.length || 13 !== average.length || !content.every(trigger) || !average.every(trigger)) {
      throw 1;
    }
  } catch (_0xe1a7x39) {
    outputPos = outputPos + "Attack table or combo table has invalid format.\n";
    inputPos = false;
  }
  data.at = content;
  data.ct = average;
  data.gdm = parseInt(document.getElementById("gdmSel").value);
  data.gblock = parseInt(document.getElementById("gblockSel").value);
  data.rnd = parseInt(document.getElementById("rndSel").value);
  data.bset = parseInt(document.getElementById("blocksSel").value);
  data.pr = parseInt(document.getElementById("prSel").value);
  data.gDelay = parseInt(document.getElementById("garbageDelay").value);
  data.mess = parseInt(document.getElementById("mess").value);
  data.gapW = parseInt(document.getElementById("gapW").value);
  if (isNaN(data.gDelay) || isNaN(data.mess) || isNaN(data.gapW)) {
    outputPos = outputPos + "gDelay, mess, gapW must be numeric values.\n";
    inputPos = false;
  }
  var _goodListener2 = document.getElementById("asEx").value;
  if (_goodListener2.length) {
    try {
      _goodListener2 = _goodListener2.toUpperCase().split(",");
      trigger = function (extra) {
        return extra.length > 0 && extra.length <= 2 && /^[A-Z0-9]+$/.test(extra);
      };
      if (_goodListener2.length > 6 || !_goodListener2.every(trigger)) {
        throw 1;
      }
      data.asEx = _goodListener2.join(",");
    } catch (dq) {
      outputPos = outputPos + "Allspin piece exclusion list invalid. Enter e.g.: L,S,Z,J\n";
      inputPos = false;
    }
  }
  if (document.getElementById("hasSolid").checked) {
    var courseId = parseInt(document.getElementById("solid").value);
    if (!courseId || courseId < 0 || courseId > 600) {
      outputPos = outputPos + "Time interval is invalid.\n";
      inputPos = false;
    } else {
      data.sg = courseId;
    }
  } else {
    data.sg = 0;
  }
  data.hold = document.getElementById("hasHold").checked;
  data.hostStart = document.getElementById("hostStart").checked;
  data.noFW = document.getElementById("noFW").checked;
  data.sa = document.getElementById("solidAtk").checked;
  data.gInv = document.getElementById("gInv").checked;
  data.as = parseInt(document.querySelector('input[name="allSpin"]:checked').value);
  data.srv = document.getElementById("srvSel").value;
  if (!("0" === data.srv || "M" === data.srv.charAt(0) || data.p)) {
    outputPos = outputPos + "Server selection is currently available only for Private rooms.\n";
    inputPos = false;
  }
  var forceStartIndex = parseInt(document.getElementById("clearDelay").value);
  if (isNaN(forceStartIndex) || forceStartIndex < 0 || forceStartIndex > 6e3) {
    outputPos = outputPos + "Clear delay is invalid.\n";
    inputPos = false;
  } else {
    data.cd = forceStartIndex;
  }
  var dimmerDelay = parseFloat(document.getElementById("speedLimit").value);
  if (isNaN(dimmerDelay) || dimmerDelay < 0 || dimmerDelay > 10) {
    outputPos = outputPos + "Speed limit is invalid. Allowed (0-10PPS).\n";
    inputPos = false;
  } else {
    data.sl = dimmerDelay;
  }
  var maxScoreValueInt = parseInt(document.getElementById("gravityLvl").value);
  if (isNaN(maxScoreValueInt) || maxScoreValueInt < 0 || maxScoreValueInt > 28) {
    outputPos = outputPos + "Gravity LVL must be 0-28.\n";
    inputPos = false;
  } else {
    data.grav = maxScoreValueInt;
  }
  var travis_job = document.getElementById("lockDelay").value.split("/", 3).map(function (id_local) {
    return parseInt(id_local, 10);
  });
  if (3 !== travis_job.length || isNaN(travis_job[0]) || isNaN(travis_job[1]) || isNaN(travis_job[2]) || travis_job[0] < 0 || travis_job[1] < 0 || travis_job[2] < 0 || travis_job[0] > 2e7 || travis_job[1] > 2e7 || travis_job[2] > 2e7) {
    outputPos = outputPos + "Lock delay value is invalid. Expected format: 500/5000/20000.\n";
    inputPos = false;
  } else {
    data.ld = travis_job;
  }
  var input = "[" + document.getElementById("sgProfile").value + "]";
  try {
    input = JSON.parse(input);
    trigger = function (x) {
      return Number(x) === x && x >= 0 && x <= 999;
    };
    if (input.length < 1 || input.length > 30 || !input.every(trigger)) {
      throw 1;
    }
    if (input[input.length - 1] <= 0) {
      throw outputPos = outputPos + "Last sgProfile delay must be > 0.\n", 1;
    }
  } catch (dp) {
    outputPos = outputPos + "Solid garbage profile has invalid format.\n";
    inputPos = false;
  }
  data.sgpA = input;
  var itf = this.getFilledLimits();
  if (false === itf ? (outputPos = outputPos + "All join limits must be numeric and MIN must be less than MAX.\n", inputPos = false) : null !== itf && (data.lim = itf), 0 != document.getElementById("r-ext").value && (data.ext = parseInt(document.getElementById("r-ext").value)), inputPos) {
    var agents_html = JSON.stringify(data);
    this.safeSend(agents_html);
    this.sendGameOverEvent();
    this.closeRoomDialog();
    this.toggleLobbby(false);
    this.createRoomRequest = data;
  } else {
    alert(outputPos);
  }
  document.getElementById("createState").style.display = "none";
  document.getElementById("create").disabled = false;
}, Live.prototype.joinRoom = function (att) {
  this.sendGameOverEvent();
  var dr = att.replace(/"/g, '\\"');
  var artistTrack = '{"t":12, "id":"' + dr + '"}';
  this.safeSend(artistTrack);
  this.closeRoomDialog();
  this.toggleLobbby(false);
  this.hideResults();
  if (5 == dr && "function" == typeof ga) {
    ga("send", {hitType: "event", eventCategory: "Team", eventAction: "joinTeamRoom"});
  }
}, Live.prototype.onOpen = function (canCreateDiscussions) {
  if (this.connectionTimeout && (clearTimeout(this.connectionTimeout), this.connectionTimeout = null), this.p.Caption.hide(this.p.Caption.LOADING), this.socket.onclose = this.onClose.bind(this), this.authorized && !this.joinRemote) {
    this.authReady = false;
    this.p.Caption.loading(i18n.signingIn);
    var xhrHandshake = new XMLHttpRequest;
    var command_codes = this;
    xhrHandshake.onreadystatechange = function () {
      if (4 === this.readyState && 200 === this.status) {
        var data = JSON.parse(this.responseText);
        command_codes.authorize(data);
      }
    };
    xhrHandshake.open("GET", "/token", true);
    xhrHandshake.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhrHandshake.send();
  }
}, Live.prototype.authorize = function (data) {
  if (data.hasOwnProperty("token")) {
    data.t = 19;
    data.s = this.sessX;
    this.safeSend(JSON.stringify(data));
  }
}, Live.prototype.getAuthorizedNameLink = function (requestedDatabaseType, last, val) {
  var type = requestedDatabaseType;
  var srcdidl = "";
  var id = "";
  var key = null;
  var menuentry = "";
  var scriptElement = [];
  switch (val && val.color && (key = val.color), null !== key && scriptElement.push("color:" + key), val && val.bold && scriptElement.push("font-weight:bold"), type.length >= 16 && (type = type.substr(0, 14) + "&hellip;"), last) {
    case 100:
      srcdidl = '<img src="/res/crown.png" class="nameIcon">';
      id = "Champion";
      break;
    case 101:
      srcdidl = '<img src="' + CDN_URL("/res/ield.png") + '" alt="Mod" class="nameIcon">';
      id = "Moderator";
      break;
    default:
      if (last >= 110 && last <= 118) {
        srcdidl = '<img src="' + CDN_URL("/res/" + {110: "gstr", 111: "jsT", 112: "blt", 113: "blo", 114: "bls", 115: "blz", 116: "bll", 117: "blj", 118: "bli"}[last] + ".png") + '" alt="D" class="nameIcon">';
        id = "Jstris supporter";
      } else {
        if (last >= 1e3 && last <= 2e3) {
          last = last - 1e3;
          let ds = String.fromCharCode(65 + ((992 & last) >> 5));
          ds = ds + String.fromCharCode(65 + (31 & last));
          srcdidl = '<img src="https://www.narwhalkid.com/jstris/vendor/countries/flags/' + ds + '.png" alt="' + ds + '" class="nameIcon">';
          id = "Jstris supporter";
        } else {
          if (999 === last && val && val.icon) {
            srcdidl = '<img src="' + CDN_URL("/res/oe/" + val.icon + ".svg") + '" class="nameIcon_oe">';
            id = "Jstris supporter";
          }
        }
      }
  }
  return scriptElement.length && (menuentry = menuentry + (' style="' + scriptElement.join(";") + '"')), '<a href="/u/' + requestedDatabaseType + '" target="_blank"' + (menuentry = menuentry + (id ? ' title="' + id + '"' : "")) + ">" + srcdidl + type + "</a>";
}, Live.prototype.getName = function (trainsize, textNodeMap) {
  var _textNodeMap = void 0 === textNodeMap || textNodeMap;
  return void 0 !== this.clients[trainsize] && null !== this.clients[trainsize].name ? _textNodeMap && (arrayContains(this.authList, parseInt(trainsize)) || this.cid == parseInt(trainsize) && this.authorized) ? this.getAuthorizedNameLink(this.clients[trainsize].name, this.clients[trainsize].type, this.clients[trainsize]) : this.clients[trainsize].name : -1 === trainsize ? "" : -2 === trainsize ? "<span style='color:#00D928'>" + i18n.newsUser + "</span>" : -3 === trainsize ? "<span style='color:#FF3700'>" + i18n.serverUser + "</span>" : -4 === trainsize ? "<span style='color:yellow'>" + i18n.warning2 + "</span>" : -5 === trainsize ? "<i class='glyphicon glyphicon-info-sign'></i>" : i18n.noNamed + trainsize.toString();
}, Live.prototype.forgetRoomPlayers = function () {
  var dt = null;
  if (void 0 !== this.clients[this.cid]) {
    dt = this.clients[this.cid];
  }
  this.clients = {};
  this.players = Array();
  this.bots = Array();
  this.authList = Array();
  this.roomJoinTimes = {};
  if (null !== dt) {
    this.clients[this.cid] = dt;
  }
}, Live.prototype.createPrivatePracticeRoom = function (canCreateDiscussions) {
  var perTick = this.getParameterByName("play");
  if (!(!canCreateDiscussions && (this.urlPlayParamApplied || this.joinRemote || "" == perTick || isNaN(parseInt(perTick))))) {
    this.clearRoomForm();
    this.roomNameInput.value = "The Private Room";
    this.isPrivateInput.checked = true;
    this.makeRoom();
  }
}, Live.prototype.onCIDassigned = function () {
  if (4008 === this.lastDC) {
    this.lastDC = null;
    var artistTrack = JSON.stringify(this.createRoomRequest);
    this.safeSend(artistTrack);
    this.createRoomRequest = null;
  } else {
    if (this.authReady) {
      this.createPrivatePracticeRoom();
    }
  }
  if ("function" == typeof ga) {
    var action = this.isProxy ? "proxy" : "normal";
    ga("send", {hitType: "event", eventCategory: "Connect", eventAction: action});
  }
  this.p.Settings.removeBanArtifact();
}, Live.prototype.readSpecs = function (marginGroups, isSlidingUp) {
  var topLevelTreeElements = "";
  var du = 0;
  var dir;
  for (dir in marginGroups.spec) {
    var id = parseInt(dir);
    if (!isNaN(id)) {
      if (void 0 === this.clients[id]) {
        this.clients[id] = new Client(id);
      }
      if (marginGroups.spec[dir].hasOwnProperty("auth") && true === marginGroups.spec[dir].auth) {
        this.clients[id].auth = true;
        this.authList.push(id);
      }
      if (isSlidingUp && void 0 !== marginGroups.spec[dir].n) {
        this.clients[id].name = marginGroups.spec[dir].n;
      }
      if (marginGroups.spec[dir].hasOwnProperty("type")) {
        this.clients[id].type = marginGroups.spec[dir].type;
        if (marginGroups.spec[dir].hasOwnProperty("icn")) {
          this.clients[id].icon = marginGroups.spec[dir].icn;
        }
      }
      if (marginGroups.spec[dir].hasOwnProperty("col")) {
        this.clients[id].color = marginGroups.spec[dir].col;
      }
      if (0 != du) {
        topLevelTreeElements = topLevelTreeElements + ", ";
      }
      topLevelTreeElements = topLevelTreeElements + this.getName(id);
      du++;
    }
  }
  this.showInChat("", "<em>" + i18n.watching + ": " + topLevelTreeElements + "</em>");
}, Live.prototype.chatJoiningInfoEnabled = function (sprite) {
  return this.players.length < 8 || this.players.length < 20 && arrayContains(this.authList, sprite) || this.clients[sprite].type >= 100;
}, Live.prototype.showMessageAboutJoin = function (statisticName, type) {
  if (void 0 !== this.clients[statisticName] && null !== this.clients[statisticName].name) {
    if (this.chatJoiningInfoEnabled(statisticName)) {
      var msg = "<em>" + this.getName(statisticName) + " ";
      msg = msg + (type ? i18n.userCame + ".</em>" : i18n.userJoined + ".</em>");
      this.showInChat("", msg);
      if (this.p.Settings.soundEnabled) {
        createjs.Sound.play("ding");
      }
      this.p.pageTitle(this.getName(statisticName, false) + " " + i18n.joined + "!");
      setTimeout(function () {
        this.p.pageTitle("Jstris");
      }.bind(this), 1500);
    }
  } else {
    this.roomJoinTimes[statisticName] = [];
    this.roomJoinTimes[statisticName][0] = this.p.timestamp();
    this.roomJoinTimes[statisticName][1] = type;
  }
}, Live.prototype.updateConnectionInfo = function () {
  var middlePathName = this.isProxy ? " [P]" : "";
  var dupeNameCount = "";
  if (!this.connected) {
    dupeNameCount = 0 === this.cid ? " [F]" : " [DC]";
  }
  var groupNamePrefix = this.connected ? i18n.connected : i18n.notConnected;
  var dv = "";
  if (this.serverId) {
    dv = "s:" + this.serverId + ", ";
  }
  this.p.connectStatusElement.innerHTML = groupNamePrefix + middlePathName + dupeNameCount + " (client " + this.cid + "), " + dv + this.version;
}, Live.prototype.handleResponse = function (args) {
  switch (args.t) {
    case 1:
      if (this.cid = args.cid, this.serverId = args.s, void 0 === this.clients[this.cid] && (this.clients[this.cid] = new Client(this.cid)), this.authorized || (args.n.i >= 0 && this.p.Settings.setCookie("nick", args.n.i), this.setChatName(args.n.n)), args.hasOwnProperty("r")) {
        this.servers = args.r;
        let command_codes = document.getElementById("srvSel");
        command_codes.innerHTML = "";
        let data = document.createElement("option");
        data.value = "0";
        data.selected = true;
        data.textContent = "Default";
        command_codes.appendChild(data);
        for (let _lo in this.servers) {
          let data = document.createElement("option");
          data.value = _lo;
          data.textContent = this.servers[_lo].n;
          command_codes.appendChild(data);
        }
      }
      this.connected = true;
      this.onCIDassigned();
      this.updateConnectionInfo();
      break;
    case 2:
      if (void 0 === this.clients[args.cid]) {
        this.clients[args.cid] = new Client(args.cid);
      }
      if (args.hasOwnProperty("type")) {
        this.clients[args.cid].type = args.type;
        if (args.hasOwnProperty("icn")) {
          this.clients[args.cid].icon = args.icn;
        }
      }
      if (args.hasOwnProperty("col")) {
        this.clients[args.cid].color = args.col;
      }
      if (args.hasOwnProperty("team")) {
        this.clients[args.cid].team = args.team;
      }
      if (void 0 !== args.n) {
        this.clients[args.cid].name = args.n;
      }
      if (args.hasOwnProperty("auth") && true === args.auth) {
        this.authList.push(args.cid);
        this.clients[args.cid].auth = true;
      }
      var artistTrack = args.hasOwnProperty("so") && true === args.so;
      if (!artistTrack) {
        var dw = this.getGameSlot(args.cid, args.rc, args.team);
        this.p.GS.CID(args.cid).setName(this.getName(args.cid));
        if (args.hasOwnProperty("bot") && true === args.bot) {
          this.bots.push(args.cid);
        }
        if (!(dw || !this.p.Settings.rescaleNow && this.LiveGameRunning)) {
          this.p.GS.autoScale();
        }
      }
      this.showMessageAboutJoin(args.cid, artistTrack);
      break;
    case 3:
      if (args.cid === this.cid && 1 === args.sitout) {
        if (!this.sitout) {
          this.spectatorMode(1);
        }
        break;
      }
      if (args.sitout <= 1) {
        if (2 === this.liveMode && this.clients[args.cid].hasOwnProperty("team")) {
          var indexLookupKey = this.clients[args.cid].team;
          artistTrack = this.p.GS.teamMembers[indexLookupKey].indexOf(args.cid);
          this.p.GS.teamMembers[indexLookupKey].splice(artistTrack, 1);
        }
        if ((artistTrack = this.players.indexOf(args.cid)) > -1) {
          this.players.splice(artistTrack, 1);
        }
        if ((artistTrack = this.bots.indexOf(args.cid)) > -1) {
          this.bots.splice(artistTrack, 1);
        }
        this.p.GS.CID(args.cid).vacantClear();
        if (!(this.p.gameEnded || this.currentTarget !== args.cid)) {
          this.changeTarget();
        }
      } else {
        if (2 === args.sitout && this.chatJoiningInfoEnabled(args.cid)) {
          this.showInChat("", "<em>" + i18n.spectator + " " + this.getName(args.cid) + " " + i18n.hasLeft + ".</em>");
        }
      }
      if (1 === args.sitout && this.chatJoiningInfoEnabled(args.cid)) {
        this.showInChat("", "<em>" + this.getName(args.cid) + " " + i18n.isSpectating + ".</em>");
      }
      if (!(0 !== args.sitout && 2 !== args.sitout)) {
        delete this.authList[args.cid];
        delete this.clients[args.cid];
      }
      break;
    case 4:
      if (this.forgetRoomPlayers(), objSize(args.spec) > 0 && this.readSpecs(args, true), objSize(args.players) > 0) {
        var name;
        for (name in args.players) {
          var id = parseInt(name);
          if (!isNaN(id)) {
            this.getGameSlot(id, args.players[name].rc, args.players[name].team);
            if (void 0 === this.clients[id]) {
              this.clients[id] = new Client(id);
            }
            if (void 0 !== args.players[name].n) {
              this.clients[id].name = args.players[name].n;
            }
            if (args.players[name].hasOwnProperty("bot") && true === args.players[name].bot) {
              this.bots.push(id);
            }
            if (args.players[name].hasOwnProperty("auth") && true === args.players[name].auth) {
              this.clients[id].auth = true;
              this.authList.push(id);
            }
            if (args.players[name].hasOwnProperty("type")) {
              this.clients[id].type = args.players[name].type;
              if (args.players[name].hasOwnProperty("icn")) {
                this.clients[id].icon = args.players[name].icn;
              }
            }
            if (args.players[name].hasOwnProperty("col")) {
              this.clients[id].color = args.players[name].col;
            }
            if (args.players[name].hasOwnProperty("team")) {
              this.clients[id].team = args.players[name].team;
            }
            this.p.GS.CID(id).setName(this.getName(id));
          }
        }
        this.p.play = false;
        this.onGameEnd();
        this.LiveGameRunning = "True" == args.play;
        if (this.LiveGameRunning) {
          if (!this.sitout) {
            this.showInChat("", "<em>" + i18n.waitNext2 + "</em>");
          }
          this.p.paintMatrixWithColor(9);
          this.p.getPlace(true, true);
        }
        this.setResetButton(args.ss || this.LiveGameRunning);
        this.p.GS.autoScale();
      } else {
        var artistTrack = 6;
        if (this.roomConfig && this.roomConfig.hasOwnProperty("max") && this.roomConfig.max <= 7) {
          artistTrack = Math.min(1, this.roomConfig.max - 1);
        }
        this.p.GS.setup(artistTrack);
        this.setResetButton(false);
      }
      this.gid = args.gid;
      this.liveSeed = this.p.getAdjustedLiveSeed(args.seed);
      break;
    case 5:
      if (this.shouldWait(args)) {
        return;
      }
      if (this.notPlaying = [], this.p.transmitMode = args.trM, this.p.GS.extendedAvailable = 1 === args.trM, 0 === this.p.transmitMode) {
        var indexLookupKey = 0;
        for (; indexLookupKey < this.p.GS.shownSlots; indexLookupKey++) {
          this.p.GS.slots[indexLookupKey].v.changeSkin(this.p.skinId);
        }
      }
      this.p.GS.autoScale();
      this.liveSeed = this.p.getAdjustedLiveSeed(args.seed);
      if (args.hasOwnProperty("map")) {
        this.liveMap = args.map.id;
        this.showInChat("Map", "<a target='_blank' href='/map/" + this.liveMap + "'>" + args.map.name + "</a> (D=" + args.map.diff + "%)");
      } else {
        this.liveMap = null;
      }
      if (this.sitout) {
        if (this.liveMap) {
          this.p.GS.extendedAvailable = false;
        }
        this.onReset();
      } else {
        this.p.pmode = 0;
        this.p.play = false;
        if (this.p.starting) {
          clearInterval(this.p.interval);
          this.p.starting = false;
        }
        this.p.blockRNG = alea(this.liveSeed);
        this.p.RNG = alea(this.liveSeed);
        this.p.blockSeed = this.liveSeed;
        this.p.readyGo();
        this.statsSent = false;
        this.setResetProgress(0);
        this.setResetButton(true);
        this.LiveGameRunning = true;
      }
      if (2 === this.liveMode && "function" == typeof ga) {
        ga("send", {hitType: "event", eventCategory: "Team", eventAction: "start"});
      }
      this.gid = args.gid;
      break;
    case 6:
      if (args.hasOwnProperty("e") && !this.hasOwnProperty("chatErrShown")) {
        this.chatErrShown = true;
        var artistTrack = '<span style="color:#ff9100"><b>' + i18n.oops + "</b> " + trans(i18n.chatNA, {chReq: 2}) + "</span>";
        artistTrack = artistTrack + (' <a href="/about/chat" target="_blank">' + i18n.leMore + "</a>");
        this.showInChat("", artistTrack);
        break;
      }
      if (args.m = args.m.replace(/\\"/g, '"'), this.authorized && (args.m = this.resolveMention(args)), args.a && 1 === args.a) {
        this.resetWinCounter();
      }
      let explicitCbMaybe = this.getChatLineClassesFor(args.cid);
      if (args.hasOwnProperty("cl") && null !== args.cl && args.cl.length) {
        if (explicitCbMaybe && 0 !== explicitCbMaybe.length) {
          Array.prototype.push.apply(explicitCbMaybe, args.cl);
        } else {
          explicitCbMaybe = args.cl;
        }
      }
      if (this.Friends.friendsOpened && args.cid !== this.cid && args.cid > 0) {
        this.friendsBtn.className = "rchNew";
      }
      this.showInChat(this.getName(args.cid), args.m, explicitCbMaybe);
      break;
    case 7:
      if (args.cid === this.cid) {
        if (!this.LiveGameRunning) {
          break;
        }
        if (3 === this.liveMode) {
          this.p.Caption.liveRaceFinished();
          break;
        }
        this.p.paintMatrixWithColor(9);
        this.p.play = false;
        this.p.lastSeen = null;
        this.onGameEnd();
        this.statsSent = true;
        this.p.getPlace(true, true);
        this.p.redraw();
      } else {
        if (this.p.GS.cidSlots.hasOwnProperty(args.cid)) {
          this.notPlaying.push(args.cid);
          if (!(this.p.gameEnded || this.currentTarget !== args.cid)) {
            this.changeTarget();
          }
          var dx = this.p.GS.CID(args.cid);
          dx.slotDiv.classList.add("np");
          if (args.v) {
            this.places[args.cid] = args.p;
          } else {
            this.places[args.cid] = 0;
          }
          dx.v.afterRedraw();
        }
      }
      break;
    case 8:
      if (void 0 === this.clients[args.cid]) {
        this.clients[args.cid] = new Client(args.cid);
      }
      this.clients[args.cid].name = args.n;
      if (args.cid === this.cid && args.hasOwnProperty("ti")) {
        this.sTier = args.ti;
      }
      var command_codes = this;
      this.emoteAutocomplete.onEmoteObjectReady = function (data) {
        command_codes.initEmoteSelect(data);
      };
      this.emoteAutocomplete.loadEmotesIndex(this.version + ".t" + this.sTier);
      if (this.sTier < 2 && this.p.skinId >= 1e3) {
        this.p.changeSkin(0);
      }
      if (args.hasOwnProperty("type")) {
        this.clients[args.cid].type = args.type;
        if (args.hasOwnProperty("icn")) {
          this.clients[args.cid].icon = args.icn;
        }
      }
      if (args.hasOwnProperty("col")) {
        this.clients[args.cid].color = args.col;
      }
      if (args.hasOwnProperty("auth") && true === args.auth) {
        this.clients[args.cid].auth = true;
        this.authList.push(parseInt(args.cid));
      }
      if (args.cid in this.p.GS.cidSlots) {
        this.p.GS.CID(args.cid).setName(this.getName(args.cid));
      }
      if (void 0 !== this.roomJoinTimes[args.cid]) {
        if (this.roomJoinTimes[args.cid][0] >= this.p.timestamp() - 1e3) {
          this.showMessageAboutJoin(args.cid, this.roomJoinTimes[args.cid][1]);
        }
        delete this.roomJoinTimes[args.cid];
      }
      break;
    case 9:
      if (this.statsSent) {
        indexLookupKey = 0;
        for (; indexLookupKey < this.players.length; indexLookupKey++) {
          if (this.players[indexLookupKey] !== this.cid && -1 === this.notPlaying.indexOf(this.players[indexLookupKey])) {
            this.winnerCID = this.players[indexLookupKey];
            break;
          }
        }
      } else {
        if (2 === this.liveMode) {
          this.p.place = 1;
          this.p.placePrinted = true;
        } else {
          if (3 !== this.liveMode) {
            this.p.getPlace(false, true);
          }
        }
        this.sendStats();
        this.winnerCID = this.cid;
        this.onGameEnd();
        if ("function" == typeof ga) {
          ga("send", {hitType: "event", eventCategory: "Game", eventAction: "victory"});
        }
      }
      this.places[this.winnerCID] = 1;
      if (this.winnerCID in this.p.GS.cidSlots) {
        this.p.GS.CID(this.winnerCID).v.afterRedraw();
      }
      if (2 === this.liveMode) {
        this.displayTeamResults(args.r);
      } else {
        this.displayResults(args.r.res, false);
      }
      this.lastGameId = args.r.gid;
      this.saveLink.href = "/games/" + this.lastGameId;
      if (!this.sitout) {
        this.setResetButton(false);
        this.p.redraw();
      }
      this.LiveGameRunning = false;
      break;
    case 10:
      this.displayLobby(args.d);
      break;
    case 12:
      var indexLookupKey;
      for (indexLookupKey in this.rc = args.rc, "" !== this.rid && 0 === args.re && (this.chatBox.textContent = "", this.hasOwnProperty("chatErrShown") && delete this.chatErrShown, this.showInChat("", "<em>" + i18n.welcomeIn + " " + args.n + "!</em>")), this.rid = args.rid, args.hasOwnProperty("so") && 1 === args.so ? (this.spectatorMode(1), this.showInChat("", "<em>" + i18n.roomFull + "</em>")) : this.sitout && this.spectatorModeOff(1), this.iAmHost = args.hasOwnProperty("h") && args.h === this.cid, this.onRoomJoined(args.rid, args.p, args.n), this.p.GS.extendedAvailable = false, this.liveMode = args.conf.mode, this.p.GS.teamMembers) {
        delete this.p.GS.teamMembers[indexLookupKey];
      }
      this.applyConfig(args);
      if (!this.sitout && args.hasOwnProperty("ss")) {
        this.setResetProgress(args.ss);
        this.setResetButton(true);
      } else {
        this.setResetProgress(0);
      }
      break;
    case 13:
      if (this.p.pmode || this.p.gameEnded) {
        return;
      }
      this.p.garbageQueue(args.a);
      break;
    case 14:
      if (!args.s) {
        break;
      }
      this.p.Replay.postLiveData(args.gid, this.cid, this);
      break;
    case 15:
      this.displayResults(args.r.res, true);
      break;
    case 16:
      if (objSize(args.spec) > 0) {
        this.readSpecs(args, false);
      } else {
        this.showInChat("", "<em>" + i18n.noSpectators + "</em>");
      }
      break;
    case 17:
      if (!(this.p.gameEnded || this.p.pmode)) {
        this.p.solidStartRaising();
      }
      break;
    case 18:
      this.applyConfig(args);
      break;
    case 19:
      if (0 !== args.id) {
        this.p.Replay.onSaved = this.onReplaySaved.bind(this);
        this.p.Replay.postData(args.id, this);
      } else {
        this.p.Replay.uploadError(this, "REJECTED - " + args.err);
      }
      break;
    case 20:
      if (args.cid === this.cid) {
        this.team = args.team;
        this.updateTeamData(this.p.GS.teamData);
      } else {
        if (void 0 !== this.clients[args.cid]) {
          var indexLookupKey = this.clients[args.cid].team;
          this.clients[args.cid].team = args.team;
          var artistTrack = this.p.GS.teamMembers[indexLookupKey].indexOf(args.cid);
          this.p.GS.teamMembers[indexLookupKey].splice(artistTrack, 1);
          if (args.team in this.p.GS.teamMembers) {
            this.p.GS.teamMembers[args.team].push(args.cid);
          }
          this.p.GS.autoScale();
        }
      }
      break;
    case 21:
      break;
    case 23:
      if (!((id = this.rcS[args.rc]) in this.p.GS.cidSlots)) {
        break;
      }
      var dz = new Replayer(this.p.GS.CID(id).v);
      dz.debug = this.p.debug;
      this.clients[id].rep = dz;
      args.v = 3.3;
      args.se = 0;
      args.m = 6553600;
      args.seed = this.liveSeed;
      dz.r.c = args;
      dz.initReplay();
      if (this.loadMapForOpponents) {
        dz.loadMap(this.p.MapManager.matrix, this.p.MapManager.mapData.queue);
        dz.pmode = 6;
      }
      dz.restart();
      if (args.bp) {
        this.p.GS.CID(id).v.customSkinPath = args.bp;
      }
      if (!args.bp && args.bs >= 1e3) {
        args.bs = 0;
      }
      this.p.GS.CID(id).v.changeSkin(args.bs, args.mClr);
      break;
    case 25:
      if (args.cid in this.clients) {
        this.clients[args.cid].rep = null;
        if (args.cid in this.p.GS.cidSlots) {
          this.p.GS.CID(args.cid).v.onReady();
        }
      }
      break;
    case 26:
      if (this.p.Caption.hide(this.p.Caption.LOADING), this.authReady = true, this.createPrivatePracticeRoom(), args.res) {
        this.Friends.friendsCount = args.hasOwnProperty("f") ? args.f : 0;
        if (args.hasOwnProperty("mod") && args.mod) {
          this.clients[this.cid].mod = true;
        }
        this.showInChat("", i18n.signedAs + " " + this.getName(this.cid) + ".");
      } else {
        this.authorized = false;
        this.setChatName(args.n.n);
        this.p.Caption.loading(i18n.loginFail, 1);
        let artistTrack = trans(i18n.loginFail2, {name: "<b>" + args.n.n + "</b>"});
        this.chatMajorWarning(artistTrack, "dc");
      }
      break;
    case 27:
      this.roomHost = args.h;
      if (args.h === this.cid) {
        this.showInChat("", (this.authorized ? '<span class="mention">@' + this.chatName + "</span> " : "") + "<em>" + i18n.newHost + "</em>");
        this.iAmHost = true;
      }
      break;
    case 28:
      this.RoomInfo.acceptRoomDetail(args);
      break;
    case 29:
      this.p.Replay.getData();
      var ATTRIBUTE_REPEAT = this.p.Replay.string;
      if (ATTRIBUTE_REPEAT && this.p.Replay.config.seed.startsWith(args.gid)) {
        args.r = ATTRIBUTE_REPEAT;
      } else {
        args.r = 0;
      }
      this.safeSend(JSON.stringify(args));
      break;
    case 30:
      this.joinRemote = args;
      break;
    case 31:
      if (!this.p.Items.avail()) {
        return;
      }
      if (args.hasOwnProperty("c")) {
        this.p.Items.loadConf(args.c);
      }
      if (args.hasOwnProperty("s")) {
        this.p.Items.fs = true;
        this.p.Items.f = args.s;
      }
      if (args.hasOwnProperty("a")) {
        this.p.Items.item = args.a;
        this.p.Items.use();
      }
      break;
    case 32:
      let GET_AUTH_URL_TIMEOUT = args.j;
      let numKeysDeleted = args.s;
      this.Friends.connect(numKeysDeleted, GET_AUTH_URL_TIMEOUT);
      break;
    case 33:
      if (console.log(args), args.hasOwnProperty("e")) {
        return void (1 === args.e && this.showInChat("<span style='color:green'>Completed</span>", "Not saved, you already completed this mode."));
      }
      const change_btn = hide => {
        return "string" != typeof hide ? "" : hide.charAt(0).toUpperCase() + hide.slice(1);
      };
      if (args.hasOwnProperty("f")) {
        this.showInChat("<span style='color:red'>Skipped</span>", '<a href="/usermodes/' + args.mid + '" target="_blank">' + args.n + "</a>");
      } else {
        let ea = "<b>" + args.r[0].toFixed(2) + "</b> " + change_btn(args.r[1]);
        if ("none" != args.r[3]) {
          ea = ea + (", <b>" + args.r[2].toFixed(2) + "</b> " + change_btn(args.r[3]));
        }
        this.showInChat("<span style='color:green'>Saved</span>", '<a href="/usermodes/' + args.mid + '" target="_blank">' + args.n + "</a>: " + ea);
      }
      if (args.rr) {
        let value = args.rr.newRating - args.rr.oldRating;
        let eb = (value > 0 ? "+" : "") + Math.round(value).toFixed(0);
        let ec = args.rr.mapRating;
        let ed = "";
        if (false === args.rr.so) {
          ed = ". Used " + args.rr.res[0] + " of " + args.rr.res[1] + " restarts!";
        }
        let ee = "<span style='color:" + (value >= 0 ? "#00ff00" : "#ff7400") + "'>" + eb + "</span>";
        this.showInChat("Rank", ee + ", new: <b>" + args.rr.newRating.toFixed(0) + "</b>, quiz rating: " + ec.toFixed(0) + ed);
      }
      break;
    case 97:
      this.showModListOfRooms(args.data);
      break;
    case 98:
      this.socket.close();
      break;
    case 99:
      this.showInChat("", "<b>" + (this.p.timestamp() - this.pingSent) + "ms</b>");
      break;
    case 100:
      alert(i18n.oldVer + "\n If you continue, your game will be unstable.");
      this.chatBox.textContent = "";
      this.showInChat("<span style='color:yellow'>" + i18n.warning2 + "</span>", trans(i18n.oldVer2, {key: "<b>CTRL+F5</b>"}) + "!!!");
      break;
    case 101:
      alert(i18n.badRoom);
      this.joinRoom("2");
      break;
    default:
      console.log("Unknown");
  }
}, Live.prototype.applyConfig = function (canCreateDiscussions) {
  this.roomHost = canCreateDiscussions.h;
  this.roomConfig = canCreateDiscussions.conf;
  if (canCreateDiscussions.hasOwnProperty("edit")) {
    this.showInChat("", "<b>" + i18n.stngsChanged + " (" + this.getName(canCreateDiscussions.edit) + ").</b>");
  }
  if (canCreateDiscussions.conf.hasOwnProperty("ct") && canCreateDiscussions.conf.hasOwnProperty("at")) {
    this.p.linesAttack = canCreateDiscussions.conf.at;
    this.p.comboAttack = canCreateDiscussions.conf.ct;
  } else {
    canCreateDiscussions.conf.at = this.p.linesAttack = this.p.linesAttackDef;
    canCreateDiscussions.conf.ct = this.p.comboAttack = this.p.comboAttackDef;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("asEx")) {
    this.p.excludedBlocksAS = canCreateDiscussions.conf.asEx.split(",");
  } else {
    canCreateDiscussions.conf.asEx = this.p.excludedBlocksAS = null;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("gh")) {
    this.p.cheeseHeight = canCreateDiscussions.conf.gh;
  } else {
    canCreateDiscussions.conf.gh = this.p.cheeseHeight = 10;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("sg")) {
    this.solidAfter = canCreateDiscussions.conf.sg;
  } else {
    this.solidAfter = canCreateDiscussions.conf.sg = 120;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("gdm")) {
    this.gdm = canCreateDiscussions.conf.gdm;
    if (0 !== this.gdm) {
      this.p.GS.setTarget(-1);
      this.currentTarget = 0;
    }
  }
  this.p.RulesetManager.applyRule(canCreateDiscussions.conf, this.p.conf[0]);
  if (canCreateDiscussions.conf.hasOwnProperty("hostStart") && canCreateDiscussions.conf.hostStart) {
    this.hostStartMode = true;
  } else {
    this.hostStartMode = canCreateDiscussions.conf.hostStart = false;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("noFW") && canCreateDiscussions.conf.noFW) {
    this.noFourWide = true;
  } else {
    this.noFourWide = canCreateDiscussions.conf.noFW = false;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("bi")) {
    this.p.bigChance = canCreateDiscussions.conf.bi;
    if (0 === canCreateDiscussions.conf.bi) {
      this.p.conf[0].baseBlockSet = 1;
    } else {
      this.p.conf[0].baseBlockSet = 0;
    }
  } else {
    this.p.bigChance = 1e8;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("xb")) {
    this.setXbuffer(canCreateDiscussions.conf.xb, false);
  }
  if (canCreateDiscussions.conf.hasOwnProperty("snr")) {
    this.p.snapRate = canCreateDiscussions.conf.snr;
  } else {
    this.p.snapRate = 1e3;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("lsnr")) {
    this.p.liveSnapRate = 100 * canCreateDiscussions.conf.lsnr;
  } else {
    this.p.liveSnapRate = 100;
  }
  if (canCreateDiscussions.conf.hasOwnProperty("sgp")) {
    this.sgProfile = canCreateDiscussions.conf.sgp;
  } else {
    this.sgProfile = 0;
  }
  if (2 === this.liveMode) {
    if (canCreateDiscussions.hasOwnProperty("team")) {
      this.team = canCreateDiscussions.team;
    }
    if (canCreateDiscussions.hasOwnProperty("teams")) {
      this.p.GS.updateTeamNames(canCreateDiscussions.teams);
      this.updateTeamData(canCreateDiscussions.teams);
    }
  }
  if (3 === this.liveMode && canCreateDiscussions.conf.hasOwnProperty("pmode")) {
    this.livePmodeTypes = canCreateDiscussions.conf.pmode;
  }
}, Live.prototype.updateTeamData = function (songsByAlbum) {
  var i;
  for (i in songsByAlbum) {
    var pathpart;
    if (!(i in this.teamButtons)) {
      pathpart = document.createElement("button");
      this.teamButtons[i] = pathpart;
      pathpart.dataset.team = i;
      pathpart.classList.add("teamSelect");
      pathpart.addEventListener("click", function (canCreateDiscussions) {
        this.teamSwitch(canCreateDiscussions.target.dataset.team);
      }.bind(this), false);
      this.tsArea.appendChild(pathpart);
    }
    (pathpart = this.teamButtons[i]).textContent = songsByAlbum[i].name;
    pathpart.style.backgroundColor = songsByAlbum[i].color;
    if (i === this.team) {
      pathpart.disabled = true;
      this.myTeam.textContent = songsByAlbum[i].name;
      this.myTeam.style.backgroundColor = songsByAlbum[i].color;
    } else {
      pathpart.disabled = false;
    }
  }
}, Live.prototype.teamSwitch = function (interName) {
  if (this.teamSwitchDisabled) {
    return false;
  }
  var name;
  for (name in this.teamSwitchDisabled = true, setTimeout(function () {
    this.teamSwitchDisabled = false;
  }.bind(this), 1e3), this.teamButtons) {
    this.teamButtons[name].disabled = name === interName;
  }
  var artistTrack = '{"t":20,"team":"' + interName + '"}';
  this.safeSend(artistTrack);
}, Live.prototype.tryPlayParam = function () {
  var last_fret = this.getParameterByName("play");
  var result = null;
  if ("" === last_fret || this.urlPlayParamApplied) {
    if (this.storedPlayParam) {
      result = this.storedPlayParam;
      this.storedPlayParam = null;
    }
  } else {
    if (!this.authReady) {
      return true;
    }
    result = {gameMode: parseInt(last_fret), mode: this.getParameterByName("mode"), rule: this.getParameterByName("rule")};
    this.showInChat("", "<em>" + i18n.privateRoom + " " + i18n.restartInfo + "</em>");
    this.urlPlayParamApplied = true;
  }
  return !!result && (this.toggleLobbby(false), this.spectatorMode(2), result.rule && this.p.RulesetManager.ruleSetChange(result.rule), this.p.sprintMode = parseInt(result.mode), this.p.pmode = -1, this.p.startPractice(result.gameMode, isNaN(this.p.sprintMode)), true);
}, Live.prototype.onRoomJoined = function (key, mmaPushNotificationsComponent, mmaFrontpagePriority) {
  if ("" === key) {
    this.showInChat("", "<em><b>Room was not found!</b></em>");
  } else {
    if ("." === key) {
      this.showInChat("", "<em><b>Room is full, please find another one in the lobby!</b></em>");
    } else {
      if (this.roomName = mmaFrontpagePriority, this.msgCount = 0, this.onReset(), this.p.GS.resetAll(), this.rcS = {}, this.players = Array(), this.bots = Array(), this.authList = Array(), this.notPlaying = [], this.p.GS.reset(), this.p.Items.isPriv = mmaPushNotificationsComponent, mmaPushNotificationsComponent) {
        if (!this.tryPlayParam() && key.length < 15) {
          var animkey = "https://www.narwhalkid.com/jstris/join/" + key;
          this.showInChat("", "<em>" + i18n.joinLinkInfo + "</em><span class='joinLink' onClick='selectText(this)'>" + animkey + "</span>");
        }
      } else {
        this.urlPlayParamApplied = false;
      }
      if ("2" != this.rid && "function" == typeof ga) {
        ga("send", {hitType: "event", eventCategory: "Game", eventAction: "customRoomJoin"});
      }
      this.Friends.sendStatus(key, mmaPushNotificationsComponent, mmaFrontpagePriority);
    }
  }
}, Live.prototype.displayLobby = function (global) {
  var zeroSizeMaxes = [0, "Sprint", 0, "Cheese", "Surv.", 0, "Maps"];
  var ef = this.rid;
  var init = function (context, id) {
    id = id || 0;
    var ipv6 = "";
    var taskComponentMap = context.length;
    if (1 === id) {
      handleSlide = function (subtractor, subtractee) {
        if (null == subtractee.w) {
          subtractee.w = 0;
        }
        if (null == subtractor.w) {
          subtractor.w = 0;
        }
        var ek = subtractor.w - subtractee.w;
        return 0 !== ek ? ek : subtractee.g - subtractor.g;
      };
    } else {
      if (2 === id) {
        handleSlide = function (isSlidingUp, $cont) {
          return 0 !== (isSlidingUp = $cont.tr - isSlidingUp.tr) ? isSlidingUp : $cont.g - isSlidingUp.g;
        };
      } else {
        if (3 === id) {
          handleSlide = function (bindingsa, bindingsb) {
            bindingsa = bindingsb.n > bindingsa.n ? -1 : 1;
            return bindingsb.n != bindingsa.n ? bindingsa : bindingsb.g - bindingsa.g;
          };
        }
      }
    }
    context.sort(handleSlide);
    var dynamicLookupKey = 0;
    for (; dynamicLookupKey < taskComponentMap; dynamicLookupKey++) {
      var siteName = "";
      var eg = "";
      var sitesowners = context[dynamicLookupKey].c.toString();
      if (context[dynamicLookupKey].s > 0) {
        siteName = '<span class="plusSpec">+' + context[dynamicLookupKey].s + "</span>";
      }
      var eh = "";
      var last = "";
      if (context[dynamicLookupKey].w && (last = getSVG("s-customw", "dark", "loIc")), 0 === context[dynamicLookupKey].mo && (context[dynamicLookupKey].l ? last = last + getSVG("s-unlocked", "dark", "loIc") : 3 === id && (last = last + getSVG("s-locked", "dark", "loIc"))), context[dynamicLookupKey].mo > 0) {
        let zeroSizeMax;
        let zeroSizeMaxes = [0, "Cheese", "Team"];
        if (3 === context[dynamicLookupKey].mo) {
          zeroSizeMax = zeroSizeMaxes[context[dynamicLookupKey].pm];
        } else {
          zeroSizeMax = zeroSizeMaxes[context[dynamicLookupKey].mo];
        }
        eh = '<div class="modeCol"><span class="gmTag">' + zeroSizeMax + "</span>" + last + "</div>";
      } else {
        if (context[dynamicLookupKey].sl >= .1 && (!last || 1 === context[dynamicLookupKey].id.length)) {
          eh = '<div class="modeCol">' + getSVG("s-speedlimit", "dark", "slIc") + '<span class="slVal">' + context[dynamicLookupKey].sl.toFixed(0) + '</span><span class="ppsTag">PPS</span></div>';
        } else {
          if (last) {
            eh = '<div class="modeCol">' + last + "</div>";
          }
        }
      }
      if (context[dynamicLookupKey].m < 24) {
        eg = "/" + context[dynamicLookupKey].m;
      }
      if (0 === context[dynamicLookupKey].c && context[dynamicLookupKey].s > 0) {
        sitesowners = "";
      }
      var ei = "";
      var ej = "";
      if (ef === context[dynamicLookupKey].id) {
        ej = " myRoom";
      } else {
        ei = "onclick=\"window.joinRoom('" + context[dynamicLookupKey].id + "')\"";
      }
      ipv6 = ipv6 + ("<tr data-id=" + context[dynamicLookupKey].id + ' class="lobbyRow' + ej + '"' + ei + "><td >" + context[dynamicLookupKey].n + eh + "</td><td class='gamesCol'>" + context[dynamicLookupKey].g + "</td><td class='plCol'>" + sitesowners + siteName + "</td><td class='pLimit'>" + eg + "</td></tr>");
    }
    return ipv6;
  };
  document.getElementById("lobbyTable").getElementsByTagName("tbody")[0].innerHTML = init(global.s, 0);
  if (global.c.length) {
    showElem(document.getElementById("rLSep"));
  } else {
    hideElem(document.getElementById("rLSep"));
  }
  document.getElementById("customTable").innerHTML = init(global.c, 1);
  if (global.o.length) {
    showElem(document.getElementById("ovLSep"));
  } else {
    hideElem(document.getElementById("ovLSep"));
  }
  document.getElementById("ovfTable").innerHTML = init(global.o, 2);
  if (global.g.length) {
    showElem(document.getElementById("guLSep"));
  } else {
    hideElem(document.getElementById("guLSep"));
  }
  document.getElementById("guTable").innerHTML = init(global.g, 2);
  if (global.l && global.l.length) {
    showElem(document.getElementById("loLSep"));
  } else {
    hideElem(document.getElementById("loLSep"));
  }
  document.getElementById("loTable").innerHTML = init(global.l, 3);
  this.RoomInfo.onLobbyRefresh();
}, Live.prototype.setupLobbyHandlers = function () {
  $(".roomListSep").each(function () {
    let namespace = "lobby_" + $(this).attr("id");
    let delete_behavior_form = $(this).next();
    $(this).on("click", function () {
      $(delete_behavior_form).toggle();
      $(this).toggleClass("up");
      $(this).toggleClass("down");
      if ($(this).hasClass("up")) {
        localStorage.removeItem(namespace);
      } else {
        localStorage.setItem(namespace, "1");
      }
    });
    if (null !== localStorage.getItem(namespace)) {
      $(this).addClass("down");
      $(delete_behavior_form).hide();
    } else {
      $(this).addClass("up");
    }
  });
}, Live.prototype.resetWinCounter = function () {
  for (let indexLookupKey = 0; indexLookupKey < this.p.GS.slots.length; indexLookupKey++) {
    this.p.GS.slots[indexLookupKey].stats.winCounter.textContent = "0";
  }
}, Live.prototype.displayResults = function (boardManager, isSlidingUp) {
  this.resultsBox.style.display = "block";
  var em = "";
  var addressCount = boardManager.length;
  var iAddressLoop = 0;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    boardManager[iAddressLoop].forfeit = boardManager[iAddressLoop].t < 0;
  }
  if (boardManager.sort(function (datapair, value_array) {
    return parseFloat(value_array.t) - parseFloat(datapair.t);
  }), isSlidingUp) {
    em = em + ('<table class="tstripes" width="100%"><tr><td></td><td width="100"><b>' + i18n.name + "</b></td><td><b>" + i18n.wins + "</b></td><td><b>" + i18n.time + "</b></td><td><b>" + i18n.rec + "</b></td><td><b>" + i18n.sent + "</b></td>                        <td><b>B2B</b></td><td><b>B2Bpm</b></td><td><b>" + i18n.blocks + "</b></td><td><b>APM</b></td><td><b>SPM</b></td><td><b>PPS</b></td><td><b>" + i18n.ren + "</b></td><td><b>" + i18n.rep + "</b></td></tr>");
    iAddressLoop = 0;
    for (; iAddressLoop < addressCount; iAddressLoop++) {
      if (boardManager[iAddressLoop].forfeit) {
        em = em + ("<tr><td><b>-</b></td><td>" + this.getName(boardManager[iAddressLoop].c) + "</td><td>" + boardManager[iAddressLoop].w + "</td><td>&infin;</td><td>" + boardManager[iAddressLoop].r + "</td><td>" + boardManager[iAddressLoop].l + "</td>                    <td>" + boardManager[iAddressLoop].B2B + "</td><td>-</td><td>-</td>                    <td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>");
      } else {
        var en = Math.round(100 * boardManager[iAddressLoop].l / (boardManager[iAddressLoop].t / 60)) / 100;
        var eo = Math.round(100 * boardManager[iAddressLoop].a / (boardManager[iAddressLoop].t / 60)) / 100;
        var ep = Math.round(100 * boardManager[iAddressLoop].p / boardManager[iAddressLoop].t) / 100;
        var eq = Math.round(100 * boardManager[iAddressLoop].B2B / (boardManager[iAddressLoop].t / 60)) / 100;
        var er = "-";
        if (boardManager[iAddressLoop].hasOwnProperty("rep") && 0 !== boardManager[iAddressLoop].rep) {
          er = '<a href="/replay/live/' + boardManager[iAddressLoop].rep + '" target="_blank"><img height="16" src="' + CDN_URL("/res/play.png") + '"></a>';
        }
        em = em + ("<tr><td><b>" + (iAddressLoop + 1) + ".</b></td><td>" + this.getName(boardManager[iAddressLoop].c) + "</td><td>" + boardManager[iAddressLoop].w + "</td><td>" + boardManager[iAddressLoop].t + "</td><td>" + boardManager[iAddressLoop].r + "</td><td>" + boardManager[iAddressLoop].l + "</td>                    <td>" + boardManager[iAddressLoop].B2B + "</td><td>" + eq + "</td><td>" + boardManager[iAddressLoop].p + "</td>                    <td>" + eo + "</td><td>" + en + "</td><td>" + ep + "</td><td>" + boardManager[iAddressLoop].mc + "</td><td>" + er + "</td></tr>");
      }
    }
    em = em + "</table>";
    this.moreData.innerHTML = em;
  } else {
    em = em + ('<table class="tstripes" width="100%"><tr><td></td><td><b>' + i18n.name + "</b></td><td><b>" + i18n.wins + "</b></td><td><b>" + i18n.time + "</b></td><td><b>" + i18n.received + "</b></td><td><b>" + i18n.sent + "</b></td></tr>");
    iAddressLoop = 0;
    for (; iAddressLoop < addressCount; iAddressLoop++) {
      if (boardManager[iAddressLoop].forfeit) {
        em = em + ("<tr><td><b>-</b></td><td>" + this.getName(boardManager[iAddressLoop].c) + "</td><td>" + boardManager[iAddressLoop].w + "</td><td>&infin;</td><td>" + boardManager[iAddressLoop].r + "</td><td>" + boardManager[iAddressLoop].l + "</td></tr>");
      } else {
        em = em + ("<tr><td><b>" + (iAddressLoop + 1) + ".</b></td><td>" + this.getName(boardManager[iAddressLoop].c) + "</td><td>" + boardManager[iAddressLoop].w + "</td><td>" + boardManager[iAddressLoop].t + "</td><td>" + boardManager[iAddressLoop].r + "</td><td>" + boardManager[iAddressLoop].l + "</td></tr>");
      }
      let signedTransactionsCounter = this.p.GS.cidSlots[boardManager[iAddressLoop].c];
      if (void 0 !== signedTransactionsCounter) {
        this.p.GS.slots[signedTransactionsCounter].stats.winCounter.textContent = boardManager[iAddressLoop].w;
      }
    }
    em = em + "</table>";
    this.resultsContent.innerHTML = em;
    this.p.GS.resultsShown = true;
    this.p.GS.resizeElements();
  }
}, Live.prototype.displayTeamResults = function (data) {
  this.resultsBox.style.display = "block";
  var iSeg0;
  var iSeg1;
  var es = "";
  var res = data.res;
  var targetName = res.length;
  var et = this;
  var name = 0;
  for (; name < targetName; name++) {
    res[name].forfeit = res[name].t < 0;
  }
  data.teams.sort(function (subtractor, subtractee) {
    return subtractor.pl - subtractee.pl;
  });
  es = es + ('<table width="100%"><tr><td></td><td><b>' + i18n.name + "</b></td><td><b>" + i18n.wins + "</b></td><td><b>" + i18n.time + "</b></td><td><b>" + i18n.received + "</b></td><td><b>" + i18n.sent + "</b></td></tr>");
  name = 0;
  for (; name < data.teams.length; name++) {
    es = es + ("<tr class='spaceBefore'><td><b>" + (name + 1) + ".</b></td><td>" + (iSeg0 = data.teams[name].team, iSeg1 = void 0, iSeg1 = et.p.GS.teamData[iSeg0].name, '<span class="teamResTag" style="background-color:' + et.p.GS.teamData[iSeg0].color + ';">' + iSeg1 + "</span></td><td>") + data.teams[name].w + "</td><td>" + data.teams[name].t + "</td><td>" + data.teams[name].r + "</td><td>" + data.teams[name].l + "</td></tr>");
    var ActivityPicker = [];
    var type = 0;
    for (; type < targetName; type++) {
      if (res[type].team === data.teams[name].team) {
        ActivityPicker.push(res[type]);
      }
    }
    ActivityPicker.sort(function (subtractee, subtractor) {
      var eu = parseFloat(subtractor.t) - parseFloat(subtractee.t);
      return 0 === eu ? subtractor.l - subtractee.l : eu;
    });
    type = 0;
    for (; type < ActivityPicker.length; type++) {
      if (ActivityPicker[type].forfeit) {
        es = es + ("<tr><td><b></b></td><td>" + this.getName(ActivityPicker[type].c) + "</td><td>" + ActivityPicker[type].w + "</td><td>&infin;</td><td>" + ActivityPicker[type].r + "</td><td>" + ActivityPicker[type].l + "</td></tr>");
      } else {
        es = es + ("<tr><td><b></b></td><td>" + this.getName(ActivityPicker[type].c) + "</td><td>" + ActivityPicker[type].w + "</td><td>" + ActivityPicker[type].t + "</td><td>" + ActivityPicker[type].r + "</td><td>" + ActivityPicker[type].l + "</td></tr>");
      }
    }
  }
  es = es + "</table>";
  this.resultsContent.innerHTML = es;
  this.p.GS.resultsShown = true;
  this.p.GS.resizeElements();
}, Live.prototype.resolveMention = function (returnTypes) {
  var otherClients = returnTypes.m.split(" ");
  var undefined = "@" + this.chatName;
  var multipleTypes = false;
  var currentEasyrtcid;
  for (currentEasyrtcid in otherClients) {
    if (otherClients[currentEasyrtcid] === undefined) {
      otherClients[currentEasyrtcid] = '<span class="mention">' + undefined + "</span>";
      multipleTypes = true;
      break;
    }
  }
  return multipleTypes ? otherClients.join(" ") : returnTypes.m;
}, Live.prototype.chatMajorWarning = function (to, mmCoreSplitViewBlock, canCreateDiscussions) {
  if (void 0 === canCreateDiscussions) {
    canCreateDiscussions = {closable: true};
  }
  if (this.Friends.friendsOpened) {
    this.Friends.openFriends();
  }
  var m = document.createElement("div");
  if (m.classList.add("warnBox"), void 0 !== mmCoreSplitViewBlock && m.classList.add(mmCoreSplitViewBlock), m.innerHTML = to, canCreateDiscussions.closable) {
    var id = document.createElement("a");
    id.innerHTML = '<img src="/res/darkClose.png" alt="CLOSE">';
    id.href = "javascript:void(0)";
    id.classList.add("warnClose");
    id.addEventListener("click", function (canCreateDiscussions) {
      canCreateDiscussions.target.parentNode.parentNode.remove();
    });
    m.appendChild(id);
  }
  this.showInChat("", m);
}, Live.prototype.getChatLineClassesFor = function (canCreateDiscussions) {
  return -5 === canCreateDiscussions ? ["infoChl"] : null;
}, Live.prototype.showInChat = function (canCreateDiscussions, line, mmCoreSplitViewBlock) {
  var prefix = "" === canCreateDiscussions ? "" : "<b>" + canCreateDiscussions + "</b>: ";
  var GET_AUTH_URL_TIMEOUT = "" === canCreateDiscussions ? "srv" : "";
  var lines = document.createElement("div");
  lines.classList.add("chl");
  if ("object" == typeof mmCoreSplitViewBlock && null !== mmCoreSplitViewBlock) {
    lines.classList.add(mmCoreSplitViewBlock);
  }
  if (GET_AUTH_URL_TIMEOUT) {
    lines.classList.add(GET_AUTH_URL_TIMEOUT);
  }
  if (line instanceof HTMLDivElement) {
    lines.appendChild(line);
  } else {
    lines.innerHTML = prefix + line;
  }
  this.chatBox.appendChild(lines);
  this.clearOldChatIfNeeded();
  if (!this.Friends.friendsOpened) {
    this.scrollOnMessage();
  }
}, Live.prototype.scrollOnMessage = function (canCreateDiscussions) {
  if (this.chatAtBottom || canCreateDiscussions) {
    this.p.GS.scrollChatDown();
  } else {
    if (this.scrollDownChatBtn) {
      this.scrollDownChatBtn.style.backgroundColor = "yellow";
    }
  }
}, Live.prototype.clearOldChatIfNeeded = function () {
  if (++this.msgCount, this.msgCount % 10 == 0) {
    var nextIdLookup = this.chatBox.children;
    if (nextIdLookup.length > 120) {
      var indexLookupKey = 0;
      for (; indexLookupKey < 10; indexLookupKey++) {
        this.chatBox.removeChild(nextIdLookup[indexLookupKey]);
      }
    }
  }
}, Live.prototype.showInLobbyChat = function (componentStack) {
  var sitesowners;
  var ev = "";
  if (componentStack.hasOwnProperty("n")) {
    if (componentStack.hasOwnProperty("d") && 1 === componentStack.d) {
      sitesowners = '<b><a class="relUser" target="_blank" href="https://discord.gg/RcNFCZC"><img src="' + CDN_URL("/res/svg/disW.svg") + '"> ' + componentStack.n + "</a>: </b>";
    } else {
      sitesowners = '<b><a href="/u/' + componentStack.n + '" target="_blank">' + componentStack.n + "</a>: </b>";
      if ("Jstris" === componentStack.n) {
        sitesowners = '<b><a href="/about" target="_blank">' + componentStack.n + "</a>: </b>";
      }
    }
  } else {
    sitesowners = componentStack.hasOwnProperty("cid") && componentStack.cid < 0 ? "<b>" + this.getName(componentStack.cid) + ": </b>" : "";
    if (-5 === componentStack.cid) {
      sitesowners = this.getName(componentStack.cid);
      ev = ev + " infoChl";
    }
  }
  var parentComponentDef = componentStack.m;
  this.chatBoxLobby.innerHTML = this.chatBoxLobby.innerHTML + "<div class='chl" + ev + "'>" + sitesowners + parentComponentDef + "</div>";
  this.chatArea.scrollTop = this.chatArea.scrollHeight;
}, Live.prototype.getGameSlot = function (f, sheetName, mmaPushNotificationsComponent) {
  return !!this.p.GS.getSlot(f, mmaPushNotificationsComponent) && (this.players.push(f), this.rcS[sheetName] = f, true);
}, Live.prototype.onMessage = function (xhr) {
  if ("string" == typeof xhr.data) {
    if ("9002" === this.port) {
      console.log("Text message received: " + xhr.data);
    }
    this.handleResponse(JSON.parse(xhr.data));
  } else {
    var a;
    var mswordHtml;
    var dataSlice;
    var max;
    var all;
    var data = new Uint8Array(xhr.data);
    var nextLeftGripPositionPx = "";
    if (1 === data[0]) {
      mswordHtml = data[1];
      dataSlice = data[2];
      all = data[3];
      max = data.length;
      var i = 4;
      for (; i < max; i++) {
        if ((delta = data[i].toString(2)).length < 8) {
          var clientHeight = 8 - delta.length;
          var targetOffsetHeight = 0;
          for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
            delta = "0" + delta;
          }
        }
        nextLeftGripPositionPx = nextLeftGripPositionPx + delta;
      }
      a = this.parseBinaryMatrix(nextLeftGripPositionPx, all);
      this.updateLiveMatrixViaSnapshot(mswordHtml, dataSlice, a);
    } else {
      if (2 === data[0]) {
        mswordHtml = data[1];
        dataSlice = data[2];
        max = data.length;
        a = Array();
        var x = Array();
        i = 3;
        for (; i < max; i++) {
          var delta = data[i];
          x.push(15 & delta);
          x.push((240 & delta) >> 4);
          if (10 === x.length) {
            a.push(x);
            x = Array();
          }
        }
        this.updateLiveMatrixViaSnapshot(mswordHtml, dataSlice, a);
      } else {
        if (4 === data[0]) {
          this.decodeActionsAndPlay(data, true);
        } else {
          if (5 === data[0]) {
            this.decodeActionsAndPlay(data, false);
          } else {
            if (99 === data[0]) {
              return void this.safeSend(xhr.data);
            }
          }
        }
      }
    }
  }
}, Live.prototype.decodeActionsAndPlay = function (i, diff) {
  if (this.p.GS.extendedAvailable) {
    var replay = new Replay;
    var bBag = new ReplayStream;
    var CustomTests = [];
    bBag.data = i;
    bBag.wordSize = 8;
    bBag.byte = 2;
    for (;;) {
      var validAttributes = {};
      if (validAttributes.t = diff ? bBag.pullBits(12) : 0, validAttributes.a = bBag.pullBits(4), null === validAttributes.t || null === validAttributes.a) {
        break;
      }
      if (validAttributes.a === replay.Action.GARBAGE_ADD) {
        validAttributes.d = [bBag.pullBits(5), bBag.pullBits(4)];
      }
      if (validAttributes.a === replay.Action.REDBAR_SET) {
        validAttributes.d = [bBag.pullBits(5)];
      }
      if (validAttributes.a === replay.Action.ARR_MOVE) {
        validAttributes.d = [bBag.pullBits(1)];
      }
      if (validAttributes.a === replay.Action.AUX) {
        validAttributes.aux = bBag.pullBits(4);
        if (!(validAttributes.aux === replay.AUX.AFK)) {
          if (validAttributes.aux === replay.AUX.BLOCK_SET) {
            validAttributes.d = [bBag.pullBits(1), bBag.pullBits(4)];
          } else {
            if (validAttributes.aux === replay.AUX.MOVE_TO) {
              validAttributes.d = [bBag.pullBits(4) - 3, bBag.pullBits(5) - 12];
            } else {
              if (validAttributes.aux === replay.AUX.RANDOMIZER) {
                validAttributes.d = [bBag.pullBits(1), bBag.pullBits(5)];
              } else {
                if (validAttributes.aux === replay.AUX.MATRIX_MOD) {
                  validAttributes.d = [bBag.pullBits(4), bBag.pullBits(5)];
                } else {
                  if (validAttributes.aux === replay.AUX.WIDE_GARBAGE_ADD) {
                    validAttributes.d = [bBag.pullBits(5), bBag.pullBits(4), bBag.pullBits(3), bBag.pullBits(1)];
                  }
                }
              }
            }
          }
        }
      }
      CustomTests.push(validAttributes);
    }
    var indexLookupKey = this.rcS[i[1]];
    if (indexLookupKey in this.p.GS.cidSlots && this.clients[indexLookupKey].rep) {
      this.clients[indexLookupKey].rep.playLive(CustomTests);
    }
  }
}, Live.prototype.updateLiveMatrixViaSnapshot = function (ballNumber, n, tplClasspath) {
  var cssClasspath = this.rcS[ballNumber];
  if (this.p.GS.cidSlots.hasOwnProperty(cssClasspath)) {
    if (this.xbufferEnabled) {
      this.xbuffer[cssClasspath] = [tplClasspath, n];
    } else {
      this.p.updateLiveMatrix(this.p.GS.cidSlots[cssClasspath], tplClasspath, n);
    }
  }
}, Live.prototype.onClose = function (canCreateDiscussions) {
  if (this.p.Caption.hide(this.p.Caption.LOADING), this.connected = false, this.socket = null, 4001 === canCreateDiscussions.code) {
    var artistTrack = "<span style='font-weight:normal'>" + i18n.connLimit + " (discord.gg/RcNFCZC).</span>";
    return this.chatMajorWarning(artistTrack, "criticalErr", {closable: false}), this.chatMajorWarning("<b>Disconnected</b> - " + i18n.RLreach + " (<em>" + canCreateDiscussions.reason + "</em>)", "dc"), void (this.p.connectStatusElement.innerHTML += " | " + canCreateDiscussions.reason);
  }
  if (4002 !== canCreateDiscussions.code) {
    if (4003 === canCreateDiscussions.code || 4004 === canCreateDiscussions.code) {
      return this.conAttempts = 1e3, this.chatArea.style.backgroundColor = "red", this.toggleMorePractice(true, true), showElem(this.p.practiceMenu), showElem(this.p.rInfoBox), void (4003 === canCreateDiscussions.code ? (this.p.Settings.setBanArtifact(canCreateDiscussions.reason), this.chatMajorWarning(i18n.ban1, "criticalErr", {closable: false}), this.p.connectStatusElement.innerHTML += " | " + canCreateDiscussions.reason + "PE") : (this.chatMajorWarning(i18n.ban2, "criticalErr", {closable: false}), this.p.connectStatusElement.innerHTML += " | Account BANNED"));
    }
    if (4005 !== canCreateDiscussions.code) {
      if (4006 === canCreateDiscussions.code) {
        this.chatMajorWarning("OLD VERSION - refresh to update your client!", "criticalErr");
      } else {
        if (4007 === canCreateDiscussions.code || 4008 === canCreateDiscussions.code) {
          return this.p.Caption.loading("Switching servers"), this.conAttempts = 0, 4008 === canCreateDiscussions.code && (this.lastDC = canCreateDiscussions.code), this.p.debug && this.chatMajorWarning("CHANGING SERVER", "criticalErr"), this.updateConnectionInfo(), void setTimeout(this.changeServer.bind(this), 50);
        }
        if (1006 === canCreateDiscussions.code && this.joinRemote) {
          console.log("Server switch request with code 1006?");
          let previousState = this.p.timestamp() - this.joinRemote.t;
          if (console.log(previousState), console.log(this.joinRemote), previousState < 3e3) {
            return this.updateConnectionInfo(), void setTimeout(this.changeServer.bind(this), 50);
          }
        }
      }
      if (0 === this.cid && this.conAttempts < 2) {
        return this.useProxy(), void this.connect();
      }
      if (0 === this.cid) {
        this.isProxy = false;
      }
      artistTrack = "<span class='wFirstLine'><span class='wTitle'>" + i18n.connLost.toUpperCase() + "</span></span>";
      artistTrack = artistTrack + ("<p>" + trans(i18n.ncGS, {refr: '<a href="javascript:location.reload(true);">' + i18n.refr + "</a>"}) + "</p>");
      this.chatMajorWarning(artistTrack, "dc");
      this.updateConnectionInfo();
      if (false === this.p.play && null === this.p.lastSeen) {
        this.toggleMorePractice(true, true);
      }
      if (!(this.p.play && this.p.isPmode(true))) {
        showElem(this.p.practiceMenu);
        showElem(this.p.rInfoBox);
        hideElem(this.p.sprintInfo);
      }
      this.p.GS.gsDiv.textContent = "";
      this.p.GS.setup(8);
      this.p.Caption.hide();
      this.p.changeSkin(0);
    } else {
      alert("Authentication failure!");
    }
  } else {
    this.chatMajorWarning(i18n.idleDC, "dc");
  }
}, Live.prototype.useProxy = function () {
  if (this.tryProxy) {
    this.port = "";
    this.server = this.server + "/ws/";
    this.isProxy = true;
    console.log("1st connection attempt failed, reconnecting...");
  }
}, Live.prototype.changeServer = function () {
  let indexLookupKey = this.joinRemote.srvId;
  let serialPort = this.joinRemote.sess;
  let ew = this.servers[indexLookupKey];
  var ex = ew.p.length > 1 ? ":" + ew.p : "";
  this.socket = new WebSocket(ew.s + "://" + ew.h + ex + "?v=" + this.version + "&sess=" + serialPort);
  this.socket.binaryType = "arraybuffer";
  var getComputeFrom = this;
  this.socket.onopen = function (el) {
    if (1 === el.target.readyState) {
      getComputeFrom.onOpen(el);
    }
  };
  this.socket.onmessage = this.onMessage.bind(this);
  var hasDraftID = function (el) {
    if (getComputeFrom.conAttempts > 10) {
      getComputeFrom.onClose(el);
    } else {
      setTimeout(function () {
        getComputeFrom.conAttempts++;
        getComputeFrom.changeServer();
      }, 1e3);
    }
  };
  this.socket.onerror = function (el) {
    el.target.onclose = function () {};
    if (!(0 !== el.target.readyState && 1 !== el.target.readyState)) {
      el.target.close();
    }
    el.code = 1006;
    hasDraftID(el);
  };
  this.socket.onclose = function (el) {
    if (1006 === el.code) {
      hasDraftID(el);
    } else {
      getComputeFrom.onClose(el);
    }
  };
}, Live.prototype.connect = function () {
  var maxHeight;
  ++this.conAttempts;
  var stringExpr = "";
  var escapedEmail = this.getParameterByName("play") ? "&join=0" : "";
  var waitBeforeReconnect = this.getParameterByName("join");
  if (!waitBeforeReconnect) {
    let no = this.getParameterByName("teamflow");
    if (no && 36 == no.length) {
      let quoteChar = this.getParameterByName("pass");
      if (quoteChar) {
        stringExpr = stringExpr + ("&pass=" + quoteChar);
      }
      waitBeforeReconnect = "tf-" + no;
    }
    let varVal = this.getParameterByName("bramble");
    if (varVal && 36 == varVal.length) {
      let quoteChar = this.getParameterByName("pass");
      if (quoteChar) {
        stringExpr = stringExpr + ("&pass=" + quoteChar);
      }
      waitBeforeReconnect = "br-" + varVal;
    }
    let reconnectTimeIncrease = this.getParameterByName("ext");
    if (reconnectTimeIncrease && 36 == reconnectTimeIncrease.length) {
      let quoteChar = this.getParameterByName("pass");
      if (quoteChar) {
        stringExpr = stringExpr + ("&pass=" + quoteChar);
      }
      waitBeforeReconnect = "in-" + reconnectTimeIncrease;
    }
  }
  if ("" !== waitBeforeReconnect) {
    escapedEmail = "&join=" + waitBeforeReconnect;
  }
  var sitesusers = this.authorized ? "" : "&guest=1";
  var varVal = this.authorized ? "" : "&gSess=" + this.sessX;
  var siteName = this.authorized || isNaN(maxHeight = parseInt(this.p.Settings.getCookie("nick"))) ? "" : "&nt=" + maxHeight;
  var varWithEqual = null !== this.p.Settings.getBanArtifact() ? "&room=" + this.p.Settings.getBanArtifact() : "";
  if (window.WebSocket) {
    var ey = this.port.length > 1 ? ":" + this.port : "";
    this.socket = new WebSocket(this.serverScheme + "://" + this.server + ey + "?v=" + this.version + escapedEmail + sitesusers + siteName + varWithEqual + varVal + stringExpr);
    this.socket.binaryType = "arraybuffer";
    this.socket.onopen = this.onOpen.bind(this);
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onclose = this.onClose.bind(this);
    var pointerColors = this;
    this.connectionTimeout = setTimeout(function () {
      var color = pointerColors.socket;
      if (null !== color && 0 === color.readyState && pointerColors.conAttempts < 2) {
        color.onclose = color.onmessage = function () {};
        color.onopen = function () {
          color.close();
        };
        color.close();
        pointerColors.socket = color = null;
        pointerColors.useProxy();
        pointerColors.connect();
      }
    }, 1500);
  } else {
    alert("This browser does not support websockets, we can't connect you :(");
  }
}, Live.prototype.parseBinaryMatrix = function (object, boardManager) {
  var cases = Array();
  var data = Array();
  var result = object.length;
  var value = 0;
  for (; value < result; value++) {
    if (data.push(parseInt(object.charAt(value))), 10 === data.length) {
      if (!(cases.length < 20 - boardManager)) {
        for (; boardManager > 0;) {
          cases.push([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
          boardManager--;
        }
        break;
      }
      cases.push(data);
      data = Array();
    }
  }
  return cases;
}, Live.prototype.sendReplayConfig = function () {
  var data = {t: 23};
  data.rc = this.rc;
  data.softDropId = this.p.Replay.config.softDropId;
  data.bs = this.p.Replay.config.bs;
  if (this.p.Replay.config.bbs) {
    data.bbs = this.p.Replay.config.bbs;
  }
  if (this.p.Replay.config.rnd) {
    data.rnd = this.p.Replay.config.rnd;
  }
  if (7 === data.bs) {
    data.mClr = this.p.Replay.config.mClr;
  }
  if (data.bs > 1e3) {
    data.bp = this.p.Replay.config.bp;
  }
  var agents_html = JSON.stringify(data);
  this.safeSend(agents_html);
}, Live.prototype.sendRepFragment = function (boardManager, diff) {
  var PL$13 = new ReplayStream;
  PL$13.wordSize = 8;
  var replay = new Replay;
  PL$13.pushBits(diff ? 4 : 5, 8);
  PL$13.pushBits(this.rc, 8);
  var addressCount = boardManager.length;
  var iAddressLoop = 0;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    var high = boardManager[iAddressLoop].t;
    if (diff && (PL$13.pushBits(high >>> 6, 6), PL$13.pushBits(63 & high, 6)), PL$13.pushBits(boardManager[iAddressLoop].a, 4), void 0 !== replay.AuxBits[boardManager[iAddressLoop].a]) {
      var PL$15 = replay.AuxBits[boardManager[iAddressLoop].a];
      var valueType = 0;
      for (; valueType < PL$15.length; valueType++) {
        PL$13.pushBits(boardManager[iAddressLoop].d[valueType], PL$15[valueType]);
      }
      if (boardManager[iAddressLoop].a === replay.Action.AUX) {
        if (!(boardManager[iAddressLoop].d[0] === replay.AUX.AFK)) {
          if (boardManager[iAddressLoop].d[0] === replay.AUX.BLOCK_SET) {
            PL$13.pushBits(boardManager[iAddressLoop].d[1], 1);
            PL$13.pushBits(boardManager[iAddressLoop].d[2], 4);
          } else {
            if (boardManager[iAddressLoop].d[0] === replay.AUX.MOVE_TO) {
              PL$13.pushBits(boardManager[iAddressLoop].d[1] + 3, 4);
              PL$13.pushBits(boardManager[iAddressLoop].d[2] + 12, 5);
            } else {
              if (boardManager[iAddressLoop].d[0] === replay.AUX.RANDOMIZER) {
                PL$13.pushBits(boardManager[iAddressLoop].d[1], 1);
                PL$13.pushBits(boardManager[iAddressLoop].d[2], 5);
              } else {
                if (boardManager[iAddressLoop].d[0] === replay.AUX.MATRIX_MOD) {
                  PL$13.pushBits(boardManager[iAddressLoop].d[1], 4);
                  PL$13.pushBits(boardManager[iAddressLoop].d[2], 5);
                } else {
                  if (boardManager[iAddressLoop].d[0] === replay.AUX.WIDE_GARBAGE_ADD) {
                    PL$13.pushBits(boardManager[iAddressLoop].d[1], 5);
                    PL$13.pushBits(boardManager[iAddressLoop].d[2], 4);
                    PL$13.pushBits(boardManager[iAddressLoop].d[3], 3);
                    PL$13.pushBits(boardManager[iAddressLoop].d[4], 1);
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
    if (8 - PL$13.bitpos >= 4) {
      PL$13.pushBits(replay.Action.AUX, 4);
    }
  }
  var m_block = new Uint8Array(PL$13.data);
  this.safeSend(m_block.buffer);
}, Live.prototype.sendSnapshot = function (difficultyLevel) {
  if (true === this.connected && !this.p.isPmode(true)) {
    var arrayValueHash;
    var vertexData = new ArrayBuffer(103);
    (arrayValueHash = new Uint8Array(vertexData))[0] = 2;
    arrayValueHash[1] = this.rc;
    arrayValueHash[2] = this.p.redBar;
    var ez = 0;
    var graphVariable = 3;
    var j = 0;
    var gamePattern = 0;
    for (; gamePattern < 20; gamePattern++) {
      var currentLevel = 0;
      for (; currentLevel < 10; currentLevel++) {
        j = j | (15 & difficultyLevel[gamePattern][currentLevel]) << 4 * ez++;
        if (2 == ez) {
          arrayValueHash[graphVariable] = j;
          j = 0;
          ez = 0;
          graphVariable++;
        }
      }
    }
    this.safeSend(vertexData);
  }
}, Live.prototype.safeSend = function (mmCoreSplitViewBlock) {
  return !(!this.socket || this.socket.readyState !== this.socket.OPEN) && (this.socket.send(mmCoreSplitViewBlock), true);
}, Live.prototype.sendStats = function () {
  if (!this.statsSent) {
    var data = {pcs: this.p.placedBlocks, apm: this.p.getAPM(), mc: this.p.gamedata.maxCombo, B2B: this.p.gamedata.B2B, a: this.p.gamedata.attack};
    var myDoughnutChart = JSON.stringify(data);
    this.p.Replay.config.gameEnd = this.p.timestamp();
    var artistTrack = '{"t":14,"d":' + myDoughnutChart + ',"rep":"' + this.p.Replay.getData().substr(0, 5) + '"}';
    this.safeSend(artistTrack);
    this.statsSent = true;
  }
}, Live.prototype.sendRestartEvent = function () {
  this.safeSend('{"t":5}');
  this.p.focusState = 0;
  this.p.canvas.focus();
  if ("function" == typeof ga) {
    ga("send", {hitType: "event", eventCategory: "Game", eventAction: "restart"});
  }
}, Live.prototype.sendGameOverEvent = function () {
  this.safeSend('{"t":7}');
  if (!this.statsSent) {
    this.sendStats();
  }
  this.notPlaying.push(this.cid);
}, Live.prototype.showTargetOnSlot = function (mmCoreSplitViewBlock) {
  if (!(mmCoreSplitViewBlock >= 0)) {
    mmCoreSplitViewBlock = -1;
  }
  this.p.GS.setTarget(mmCoreSplitViewBlock);
}, Live.prototype.hideResults = function () {
  this.resultsBox.style.display = "none";
  this.resultsContent.textContent = "";
  this.p.GS.resultsShown = false;
  this.p.GS.resizeElements();
}, Live.prototype.beforeReset = function () {
  if (!this.p.isTabFocused) {
    var fa = document.getElementById("favicon");
    var img = this.p;
    var el = document.title;
    var UNIT_TYPE_PERCENT = 0;
    var chat_retry = setInterval(function () {
      ++UNIT_TYPE_PERCENT;
      fa.href = "/res/favicon" + (UNIT_TYPE_PERCENT % 2 == 0 ? "2" : "") + ".ico";
      document.title = UNIT_TYPE_PERCENT % 10 > 7 ? el : "⚠ New game starting! ⚠";
      if (101 === UNIT_TYPE_PERCENT || img.isTabFocused) {
        clearInterval(chat_retry);
        document.title = el;
        fa.href = "/res/favicon.ico";
      }
    }, 100);
  }
}, Live.prototype.onReset = function () {
  this.winnerCID = void 0;
  this.places = {};
  this.p.GS.reset();
  this.hideResults();
  this.changeTarget();
}, Live.prototype.changeTarget = function () {
  if (this.sitout || 1 == this.liveMode || 0 !== this.gdm) {
    return false;
  }
  var enabledHandlers = [];
  var indexLookupKey = 0;
  var cell_amount = this.players.length;
  var i = 0;
  for (; i < this.bots.length; i++) {
    if (false === arrayContains(this.notPlaying, this.bots[i])) {
      enabledHandlers.push(this.bots[i]);
    }
  }
  i = 0;
  for (; i < cell_amount; i++) {
    if (false === arrayContains(this.notPlaying, this.players[i]) && false === arrayContains(this.bots, this.players[i])) {
      enabledHandlers.push(this.players[i]);
    }
  }
  if (enabledHandlers.length > 0) {
    var qtype_ = enabledHandlers.indexOf(this.currentTarget);
    if (-1 == qtype_) {
      qtype_ = 0;
    }
    indexLookupKey = void 0 !== enabledHandlers[qtype_ + 1] ? enabledHandlers[qtype_ + 1] : enabledHandlers[0];
    this.currentTarget = indexLookupKey;
  } else {
    this.currentTarget = 0;
  }
  this.showTargetOnSlot(this.p.GS.cidSlots[indexLookupKey]);
}, Live.prototype.sendAttack = function (value, min, resolvedServices) {
  if (0 !== this.gdm || 0 !== this.currentTarget) {
    var whiteRating = parseInt(this.currentTarget);
    var signature = 0 === this.gdm ? 11 : 7;
    var result = new Uint8Array(signature);
    result[0] = 13;
    result[1] = !value || value > 255 ? 0 : value;
    result[2] = resolvedServices.type | (resolvedServices.b2b ? 128 : 0);
    result[3] = !min || min > 255 ? 0 : min;
    result[4] = resolvedServices.cmb;
    result[5] = (65280 & this.gid) >> 8;
    result[6] = (255 & this.gid) >> 0;
    if (0 === this.gdm) {
      result[7] = (-16777216 & whiteRating) >> 24;
      result[8] = (16711680 & whiteRating) >> 16;
      result[9] = (65280 & whiteRating) >> 8;
      result[10] = (255 & whiteRating) >> 0;
    }
    this.safeSend(result.buffer);
  }
}, Live.prototype.sendAttackOld = function (canCreateDiscussions) {
  if (0 !== this.gdm || 0 !== this.currentTarget) {
    var artistTrack = '{"t":13, "a":' + canCreateDiscussions + ', "cid":' + parseInt(this.currentTarget) + ', "g":' + this.gid + "}";
    this.safeSend(artistTrack);
  }
}, Live.prototype.sendAttackToSlot = function (ballNumber, canCreateDiscussions) {
  var artistTrack = '{"t":13, "a":' + canCreateDiscussions + ', "cid":' + this.p.GS.slots[ballNumber].cid + ', "g":' + this.gid + "}";
  this.safeSend(artistTrack);
}, Live.prototype.setChatName = function (canCreateDiscussions) {
  if (!this.authorized) {
    var character = canCreateDiscussions.substr(0, 15);
    this.chatName = stringEscape(character);
  }
  this.clients[this.cid].name = this.chatName;
  this.chatInput.placeholder = "";
  this.showInChat("", "<em>" + i18n.welcome + " " + this.chatName + "!</em>");
  this.showInChat("", "<em>" + i18n.typeHelp + "</em>");
}, Live.prototype.spectatorMode = function (canCreateDiscussions) {
  if (0 === arguments.length && (canCreateDiscussions = 0), 1 !== canCreateDiscussions) {
    var artistTrack = '{"t":16, "mode":0}';
    this.safeSend(artistTrack);
  }
  if (2 !== canCreateDiscussions) {
    this.showInChat("", "<em>" + i18n.specModeInfo + "</em>");
  }
  this.sitout = true;
  this.setResetButton(true);
  this.p.paintMatrixWithColor(9);
  this.p.play = false;
  this.onGameEnd();
  this.statsSent = true;
  this.p.GS.setTarget(-1);
  this.p.v.clearHoldCanvas();
  this.p.v.clearQueueCanvas();
  this.p.clearMatrix();
  this.p.redBar = 0;
  this.p.activeBlock.pos.y = 30;
  this.p.focusState = 0;
  this.p.redraw();
  this.p.Caption.hide();
  this.p.Caption.spectatorMode();
  hideElem(this.teamOptions);
}, Live.prototype.spectatorModeOff = function (canCreateDiscussions) {
  if (0 === arguments.length && (canCreateDiscussions = 0), 0 === canCreateDiscussions) {
    var artistTrack = '{"t":16, "mode":0}';
    this.safeSend(artistTrack);
  }
  if (this.p.GS.isFullscreen) {
    this.p.GS.fullScreen(false);
  }
  this.sitout = false;
  this.setResetButton(false);
  this.showInChat("", "<em>You left the spectator mode.</em>");
  this.p.Caption.hide();
}, Live.prototype.onGameEnd = function () {
  hideElem(this.p.sprintInfo);
  hideElem(this.p.teamInfo);
  showElem(this.p.rInfoBox);
  showElem(this.p.practiceMenu);
  if (2 === this.liveMode) {
    showElem(this.teamOptions);
  }
}, Live.prototype.onReplaySaved = function (canCreateDiscussions) {
  if (canCreateDiscussions.rep && this.replayInfoToChat(canCreateDiscussions.id, canCreateDiscussions.gm, canCreateDiscussions.m), canCreateDiscussions.pb && !this.p.play && !this.p.starting) {
    if ("object" == typeof canCreateDiscussions.pb) {
      let fb = this.p.RulesetManager.fullModeName(canCreateDiscussions.gm, canCreateDiscussions.m);
      canCreateDiscussions.pb.modeTitle = fb.replace("/ /g", "&nbsp;") + " by&nbsp;" + this.chatName;
    }
    this.p.Caption.newPB(canCreateDiscussions.pb);
  }
}, Live.prototype.setResetButton = function (canCreateDiscussions) {
  if (this.hostStartMode) {
    this.resetButton.disabled = false;
  } else {
    this.resetButton.disabled = canCreateDiscussions;
  }
}, Live.prototype.replayInfoToChat = function (vguid, mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
  if (this.authorized) {
    var ytVideoSrc = this.getLeaderboardLink(mmCoreSplitViewBlock, mmaPushNotificationsComponent) + "&display=4&id=" + vguid;
    var fc = 5 === mmCoreSplitViewBlock ? "my scores" : "my times";
    if (7 === mmCoreSplitViewBlock) {
      fc = "my TSD games";
    } else {
      if (8 === mmCoreSplitViewBlock) {
        fc = "my PC games";
      }
    }
    this.showInChat("", i18n.replay + ': <a target="_blank" href="/replay/' + vguid + '">/replay/' + vguid + '</a>. View in <a href="' + ytVideoSrc + '" target="_blank">' + fc + "</a>.");
  } else {
    this.showInChat("", i18n.replayAvailable + ': <a target="_blank" href="/replay/' + vguid + '">/replay/' + vguid + "</a>.");
  }
}, Live.prototype.getLeaderboardLink = function (modelIndex, m) {
  var waitBeforeReconnect = "";
  var reconnectTimeIncrease = "";
  if (m >= 10 && 6 != modelIndex) {
    var indexLookupKey = Math.floor(m / 10);
    var currentIndex = this.p.RulesetManager.RULESETS[indexLookupKey];
    if (0 !== indexLookupKey && currentIndex) {
      reconnectTimeIncrease = "&rule=" + currentIndex.key;
      m = m % 10;
    } else {
      reconnectTimeIncrease = "";
    }
  }
  switch (modelIndex) {
    case 1:
      waitBeforeReconnect = "/sprint?lines=" + (this.p.sprintModes[m] + "L");
      break;
    case 3:
      waitBeforeReconnect = "/cheese?lines=" + (this.p.cheeseModes[m] + "L");
      break;
    case 4:
      waitBeforeReconnect = "/survival?lines=" + (["1+g%2Fs"][m] + "L");
      break;
    case 5:
      waitBeforeReconnect = "/ultra?lines=2+minutes";
      break;
    case 6:
      waitBeforeReconnect = "/map/" + m + "?ref=game";
      break;
    case 7:
      waitBeforeReconnect = "/20TSD?ref=game";
      break;
    case 8:
      waitBeforeReconnect = "/PC-mode?ref=game";
  }
  return waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
}, Live.prototype.sendPracticeModeStarting = function () {
  if (this.socket) {
    var data = new Object;
    data.t = 22;
    data.s = this.p.Replay.config.seed;
    this.safeSend(JSON.stringify(data));
  }
}, Live.prototype.sendGameModeResult = function (canCreateDiscussions) {
  if (-1 !== canCreateDiscussions.mode) {
    var t = canCreateDiscussions.getGameTime();
    var section = canCreateDiscussions.getData();
    var valToSet = sprintTimeFormat(t, 3);
    var part_id = "";
    var images = "";
    if (0 === canCreateDiscussions.config.r && 1 === this.p.pmode && (1 === this.p.sprintMode && 20 === this.p.gamedata.TSD && 40 === this.p.gamedata.lines || 2 === this.p.sprintMode && 10 === this.p.gamedata.TSD && 20 === this.p.gamedata.lines) && (canCreateDiscussions.config.m = 458753, this.p.pmode = 7, this.p.sprintMode = 1, 20 === this.p.gamedata.TSD && (this.p.gamedata.TSD20 = Math.round(1e3 * t)), section = canCreateDiscussions.getData()), canCreateDiscussions.config.r > 0) {
      let fe = this.p.RulesetManager.RULESETS[canCreateDiscussions.config.r];
      part_id = "&rule=" + fe.key;
      if (fe.name) {
        images = fe.name + " ";
      }
    }
    var data = new Object;
    if (1 === this.p.pmode) {
      var divider = this.p.sprintModes[this.p.sprintMode] + "L";
      this.showInChat("", i18n.sprint + " " + i18n.gameTime + ": <b>" + valToSet + " s</b>. " + i18n.see + " <a href='/sprint?lines=" + divider + part_id + "' target='_blank'>" + images + divider + " " + i18n.leaderboard + "</a>.");
    } else {
      if (3 === this.p.pmode) {
        divider = this.p.cheeseModes[this.p.sprintMode] + "L";
        this.showInChat("", i18n.cheese + " " + i18n.gameTime + ": <b>" + valToSet + " s</b>. " + i18n.see + " <a href='/cheese?lines=" + divider + part_id + "' target='_blank'>" + images + divider + " " + i18n.leaderboard + "</a>.");
      } else {
        if (4 === this.p.pmode) {
          part_id = "?" + part_id.substr(1);
          t = canCreateDiscussions.getGameTime(false);
          this.showInChat("", i18n.survival + " " + i18n.gameTime + ": <b>" + valToSet + " s</b>. " + i18n.see + " <a href='/survival" + part_id + "' target='_blank'>" + images + i18n.leaderboard + "</a>.");
        } else {
          if (5 === this.p.pmode) {
            part_id = "?" + part_id.substr(1);
            data.pts = this.p.gamedata.score;
            this.showInChat("", i18n.ultra + " Score: <b>" + this.p.gamedata.score + "</b>. " + i18n.see + " <a href='/ultra" + part_id + "' target='_blank'>" + images + i18n.leaderboard + "</a>.");
          } else {
            if (6 === this.p.pmode) {
              var fd = this.p.MapManager.mapData.name;
              if (this.showInChat("", '<b>"' + fd + '"</b> map ' + i18n.gameTime + ": <b>" + valToSet + " s</b>. " + i18n.see + " <a href='/map/" + this.p.MapManager.mapId + "' target='_blank'>the map " + i18n.leaderboard + "</a>."), this.p.MapManager.mapData.state !== this.p.MapManager.STATE_PUBLISHED) {
                return void this.showInChat("", i18n.nsUnpub);
              }
            } else {
              if (7 === this.p.pmode) {
                if (part_id = "?" + part_id.substr(1), data.pts = this.p.gamedata.TSD, data.t20 = this.p.gamedata.TSD20, this.showInChat("", "20TSD Result: <b>" + this.p.gamedata.TSD + " TSDs, " + valToSet + " s</b>. " + i18n.see + " <a href='/20TSD" + part_id + "' target='_blank'>" + images + i18n.leaderboard + "</a>."), this.p.gamedata.TSD < 1) {
                  return void this.showInChat("", i18n.nsTspins);
                }
              } else {
                if (8 === this.p.pmode && (part_id = "?" + part_id.substr(1), data.pts = this.p.gamedata.PCs, this.p.placedBlocks -= this.p.PCdata.blocks, data.pts > 0 && (data.tt = t, t = this.p.gamedata.lastPC, valToSet = sprintTimeFormat(t, 3)), this.showInChat("", i18n.PCmode + " Result: <b>" + this.p.gamedata.PCs + " PCs, " + valToSet + " s</b>. " + i18n.see + " <a href='/PC-mode" + part_id + "' target='_blank'>" + images + i18n.leaderboard + "</a>."), this.p.gamedata.PCs < 2)) {
                  return void this.showInChat("", i18n.nsLowPC);
                }
              }
            }
          }
        }
      }
    }
    data.t = 17;
    data.gm = this.p.pmode;
    data.m = this.p.sprintMode;
    data.time = t;
    data.f = this.p.totalFinesse;
    data.bl = this.p.placedBlocks;
    data.s = canCreateDiscussions.config.seed;
    data.r = canCreateDiscussions.config.r;
    if (canCreateDiscussions.config.err) {
      data.err = canCreateDiscussions.config.err;
    }
    if (this.socket) {
      data.rep = section;
      this.safeSend(JSON.stringify(data));
    } else {
      canCreateDiscussions.config.offline = data;
      data.rep = section = canCreateDiscussions.getData();
      this.p.Replay.uploadError(this, "OFFLINE");
    }
  }
}, Live.prototype.raceCompleted = function () {
  var data = new Object;
  data.t = 18;
  this.safeSend(JSON.stringify(data));
}, Live.prototype.setXbuffer = function (n, canCreateDiscussions) {
  if (n >= 1 && n <= 6) {
    this.p.xbuffMask = Math.pow(2, n) - 1 >>> 0;
    this.xbufferEnabled = true;
    if (canCreateDiscussions) {
      this.showInChat("", "Xbuffer enabled at lvl" + n + " (fm:" + this.p.xbuffMask + ").");
    }
  } else {
    this.xbufferEnabled = false;
    this.p.xbuffMask = 1;
    if (canCreateDiscussions) {
      this.showInChat("", "Xbuffer disabled.");
    }
  }
}, Live.prototype.shouldWait = function (canCreateDiscussions) {
  return !!canCreateDiscussions.hasOwnProperty("w") && (0 === canCreateDiscussions.w ? (this.setResetButton(false), true) : (this.sitout || this.setResetProgress(canCreateDiscussions.w), this.setResetButton(true), true));
}, Live.prototype.setResetProgress = function (canCreateDiscussions) {
  if (this.resetProgress.style.width = "0%", this.resetProgress.style.transitionDuration = "0s", canCreateDiscussions > 0) {
    var ff = this;
    setTimeout(function () {
      ff.resetProgress.style.width = "99.9%";
      ff.resetProgress.style.transitionDuration = canCreateDiscussions + "s";
    }, 10);
  }
}, Live.prototype.onChatScroll = function (canCreateDiscussions) {
  if (this.Friends.friendsOpened) {
    return;
  }
  let fg = this.chatAtBottom;
  if (this.chatAtBottom = this.chatArea.scrollTop + this.chatArea.clientHeight >= this.chatArea.scrollHeight - 42, !this.chatAtBottom && fg) {
    let artistTrack = document.createElement("button");
    this.scrollDownChatBtn = artistTrack;
    artistTrack.innerHTML = document.getElementById("tc-hd").innerHTML;
    artistTrack.classList.add("chatScrolllBtn");
    var fh = this;
    artistTrack.addEventListener("click", function () {
      fh.chatAtBottom = true;
      fh.chatArea.scrollTop = fh.chatArea.scrollHeight;
    });
    this.chatArea.appendChild(artistTrack);
  } else {
    if (this.chatAtBottom && this.scrollDownChatBtn) {
      this.removeScrollButton();
    }
  }
}, Live.prototype.removeScrollButton = function () {
  try {
    this.chatArea.removeChild(this.scrollDownChatBtn);
  } catch (t) {}
}, Live.prototype.sendChat = function (exports) {
  var e = "string" != typeof exports ? this.chatInput.value.replace(/"/g, '\\"') : exports;
  if (this.p.inactiveGamesCount = 0, this.authorized && void 0 !== this.clients[this.cid] && "jez" === this.clients[this.cid].name) {
    if (".a" === e.substring(0, 2)) {
      var intTempPreference = parseInt(e.substring(2, e.length));
      e = '/js - {"t":31,"a":' + intTempPreference + "}";
    } else {
      if (".s" === e.substring(0, 2)) {
        intTempPreference = parseInt(e.substring(2, e.length));
        e = '/js - {"t":31,"s":' + intTempPreference + "}";
      }
    }
  }
  if (e.length > 0) {
    if ("/clearCookies" === e) {
      this.p.Settings.clearAllCookies();
      this.showInChat("", "<em>All saved settings cleared.</em>");
    } else {
      if ("/last" === e || "/result" === e || "/results" === e || "/stats" === e) {
        if (this.lastGameId) {
          this.showInChat("", i18n.lastGame + ' <a target="_blank" href="/games/' + this.lastGameId + '">/games/' + this.lastGameId + "</a>");
        } else {
          this.showInChat("", "There is no last game to show.");
        }
      } else {
        if ("/sitout" === e || "/spectate" === e || "/spec" === e) {
          if (this.sitout) {
            this.showInChat("", "<em>" + i18n.aSpec + "</em>");
          } else {
            this.spectatorMode();
          }
        } else {
          if ("/play" === e) {
            if (this.sitout) {
              this.spectatorModeOff();
            } else {
              this.showInChat("", "<em>" + i18n.aPlay + "</em>");
            }
          } else {
            if ("/speclist" === e || "/watching" === e || "/spectators" === e) {
              exports = '{"t":16, "mode":1}';
              this.safeSend(exports);
            } else {
              if ("/clear" === e) {
                this.chatBox.textContent = "";
              } else {
                if ("/fps" === e) {
                  this.p.toggleStats(0);
                } else {
                  if ("/realfps" === e || "/fps2" === e) {
                    this.p.toggleStats(1);
                  } else {
                    if ("/debug" === e) {
                      this.showInChat("", "<em>Debug output activated.</em>");
                      this.p.debug = true;
                    } else {
                      if ("/DAS" === e) {
                        this.p.DASdebug = !this.p.DASdebug;
                        this.p.toggleStats(0);
                        if (this.p.stats) {
                          this.p.stats.showPanel(3);
                        }
                      } else {
                        if ("/version" === e) {
                          this.showInChat("", this.version);
                        } else {
                          if ("/link" === e || "/url" === e || "/URL" === e) {
                            var fi = "https://www.narwhalkid.com/jstris/join/" + this.rid;
                            this.showInChat("", "<span class='joinLink' onClick='selectText(this)'>" + fi + "</span>");
                          } else {
                            if ("/config" === e) {
                              var artistTrack = "<b>" + i18n.roomSettings + "</b><br>";
                              this.p.conf[0];
                              artistTrack = artistTrack + (i18n.attack + ": " + JSON.stringify(this.p.linesAttack).substr(1).slice(0, -1) + "<br>" + i18n.combo + ": " + JSON.stringify(this.p.comboAttack).substr(1).slice(0, -1) + "<br>" + i18n.solid + ": " + (this.solidAfter ? "On - " + this.solidAfter + " sec" : "Off") + "<br>" + i18n.clear + ": " + (this.p.R.clearDelay ? "On - " + this.p.R.clearDelay + " ms" : "Off") + "<br>" + i18n.mode + ": " + ["Standard", "Cheese", "Team", "LiveRace"][this.liveMode] + "<br>" + i18n.garbage + ": " + this.gdms[this.gdm] + "<br>" + i18n.garbageDelay + ": " + this.p.R.gDelay + " ms<br>" + i18n.messiness + ": " + this.p.R.mess + "%");
                              this.showInChat("", artistTrack);
                            } else {
                              if ("/cid" === e.substring(0, 4)) {
                                this.showInChat("", this.p.GS.slots[parseInt(e.split(" ")[1])].cid);
                              } else {
                                if ("/ping" === e) {
                                  exports = '{"t":99}';
                                  this.pingSent = this.p.timestamp();
                                  this.safeSend(exports);
                                } else {
                                  if ("/dc" === e) {
                                    this.socket.close();
                                  } else {
                                    if ("/clients" === e) {
                                      var criterion_index;
                                      for (criterion_index in this.clients) {
                                        this.showInChat(criterion_index, this.clients[criterion_index].name);
                                      }
                                    } else {
                                      if ("/memory" === e) {
                                        if (window.performance && window.performance.memory) {
                                          this.showInChat("Memory", Math.round(1e3 * window.performance.memory.usedJSHeapSize / 1048576) / 1e3 + " MiB");
                                        } else {
                                          this.showInChat("", "Available only in Chrome browser.");
                                        }
                                      } else {
                                        if ("/zoom" === e.substring(0, 5)) {
                                          this.p.GS.setZoom(parseInt(e.split(" ")[1]));
                                        } else {
                                          if ("/setup" === e.substring(0, 6)) {
                                            this.p.GS.setup(parseInt(e.split(" ")[1]));
                                          } else {
                                            if ("/tsetup" === e.substring(0, 7)) {
                                              this.p.GS.tsetup([parseInt(e.split(" ")[1]), parseInt(e.split(" ")[2])]);
                                            } else {
                                              if ("/fe" === e) {
                                                this.p.GS.forceExtended = !this.p.GS.forceExtended;
                                                this.p.GS.autoScale();
                                              } else {
                                                if ("/fullscreen" === e || "/fs" === e) {
                                                  this.p.GS.fullScreen(!this.p.GS.isFullscreen);
                                                } else {
                                                  if ("/rescale" === e || "/autoscale" === e) {
                                                    this.p.GS.autoScale();
                                                  } else {
                                                    if ("/replay" === e) {
                                                      this.p.Replay.getData();
                                                      this.p.Replay.uploadError(this, "REQUESTED_BY_USER");
                                                    } else {
                                                      if ("/host" === e) {
                                                        if (this.hasOwnProperty("roomHost") && this.roomHost && this.clients[this.roomHost]) {
                                                          this.showInChat("", "Room host: " + this.clients[this.roomHost].name);
                                                        } else {
                                                          this.showInChat("", "No room host is set.");
                                                        }
                                                      } else {
                                                        if ("/xbuffer" === e.substring(0, 8)) {
                                                          this.setXbuffer(parseInt(e.split(" ")[1]), true);
                                                        } else {
                                                          if (this.socket) {
                                                            if (this.Friends.isFriendChat()) {
                                                              this.Friends.sendChat(e);
                                                            } else {
                                                              var data = {t: 6, m: e};
                                                              this.safeSend(JSON.stringify(data));
                                                            }
                                                          } else {
                                                            this.showInChat("", "You are offline! Only possible to use offline commands.");
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
  this.chatInput.value = "";
}, Live.prototype.showModListOfRooms = function (descriptor) {
  var graphic = document.createElement("div");
  graphic.classList.add("modWindow");
  var sector = document.createElement("div");
  sector.classList.add("container");
  graphic.appendChild(sector);
  var clipPath = document.createElement("a");
  clipPath.href = "javascript:void(0)";
  clipPath.classList.add("admBtn", "closeBtn");
  clipPath.addEventListener("click", function (canCreateDiscussions) {
    canCreateDiscussions.target.parentNode.remove();
  }, false);
  graphic.appendChild(clipPath);
  var rect = document.createElement("a");
  rect.textContent = "REFRESH";
  rect.href = "javascript:void(0)";
  rect.style.left = "60px";
  rect.classList.add("admBtn");
  var fj = this;
  rect.addEventListener("click", function (canCreateDiscussions) {
    fj.sendChat("/admin");
    canCreateDiscussions.target.parentNode.remove();
  });
  graphic.appendChild(rect);
  document.body.appendChild(graphic);
  sector.innerHTML = "<h1>Active rooms</h1>";
  var $errorContainer = document.createElement("ul");
  $errorContainer.classList.add("admList");
  Object.keys(descriptor).forEach(function (settingName) {
    var p = document.createElement("li");
    var service_obj = [];
    var bonusModeActive = false;
    var captures = "<b>" + settingName + "</b> " + (descriptor[settingName].settings.p ? "<span style='color:yellow'>(P)</span>" : "") + " - " + descriptor[settingName].settings.n;
    var id;
    for (id in captures = captures + "<ul>", descriptor[settingName].clients) {
      var status = descriptor[settingName].clients[id];
      status.cid = id;
      service_obj.push(status);
    }
    service_obj.sort(function (subtractor, subtractee) {
      return subtractor.issitout - subtractee.issitout;
    });
    service_obj.forEach(function (params) {
      if (params.issitout && !bonusModeActive) {
        bonusModeActive = true;
        captures = captures + '<hr style="margin:0">';
      }
      captures = captures + ("<li>" + params.cid + " - " + function (b) {
        var f = "";
        return b.auth ? f = '<a href="/u/' + b.name + '" target="_blank">' + b.name + "</a>" : (f = f + (null === b.name ? "<em>NoNamed</em>" : b.name), f = f + " <span style='color:grey'>(guest)</span>"), b.issitout && (f = f + " <span style='color:grey'>(spec)</span>"), f;
      }(params) + ' <span style="float:right">[<a href="javascript:void(0)" class="dcMLink" data-cid="' + params.cid + '">D/C</a> | <a href="javascript:void(0)" style="color:red" class="banMLink" data-cid="' + params.cid + '">IP-BAN</a>]</span></li>');
    });
    captures = captures + "</ul>";
    p.innerHTML = captures;
    $errorContainer.appendChild(p);
  });
  sector.appendChild($errorContainer);
  var PL$13 = document.getElementsByClassName("dcMLink");
  var PL$17 = (fj = this, 0);
  for (; PL$17 < PL$13.length; PL$17++) {
    PL$13[PL$17].addEventListener("click", function () {
      var fk = "/kickByDC " + this.dataset.cid;
      fj.socket.send('{"t":6,"m":"' + fk + '","cid":' + fj.cid + "}");
    });
  }
  PL$13 = document.getElementsByClassName("banMLink");
  fj = this;
  PL$17 = 0;
  for (; PL$17 < PL$13.length; PL$17++) {
    PL$13[PL$17].addEventListener("click", function () {
      var no = this.dataset.cid;
      if (confirm("Execute BAN CID=" + no + " ?")) {
        var xhrb = new XMLHttpRequest;
        xhrb.onreadystatechange = function () {
          if (4 === xhrb.readyState && 200 === xhrb.status) {
            var tmpSlug = "/resetIP";
            fj.socket.send('{"t":6,"m":"' + tmpSlug + '","cid":' + fj.cid + "}");
            tmpSlug = "/kickByDC " + no;
            fj.socket.send('{"t":6,"m":"' + tmpSlug + '","cid":' + fj.cid + "}");
          }
        };
        xhrb.open("GET", "/admin/ban/cid/" + no, true);
        xhrb.send(null);
      }
    });
  }
}, Live.prototype.showOfflineWarning = function () {
  this.playingOfflineWarningShown = true;
  this.chatBox.textContent = "";
  this.showInChat("<span style='color:yellow'>" + i18n.warning2 + "</span>", "You are playing offline!<br>Try reloading Jstris online, otherwise:");
  this.showInChat("", "&#8226; Your games won't be stored in the leaderboards.");
  this.showInChat("", "&#8226; Your replay won't be uploaded, but you can save it.");
  this.showInChat("", "&#8226; Your game version <b>" + this.version + "</b> might be outdated.");
  this.showInChat("", "&#8226; Multiplayer games and chat are unavailable.");
}, Live.prototype.toggleMorePractice = function (limitFromUnread, excluded) {
  limitFromUnread = limitFromUnread || false;
  excluded = excluded || false;
  let webSiteExcluded = "block" === document.getElementById("practice-menu-big").style.display;
  if (limitFromUnread) {
    webSiteExcluded = !excluded;
  }
  document.getElementById("practice-menu-big").style.display = webSiteExcluded ? "none" : "block";
  document.getElementById("more-practice").textContent = webSiteExcluded ? i18n.showMore : i18n.showLess;
}, Live.prototype.getParameterByName = function (canCreateDiscussions) {
  canCreateDiscussions = canCreateDiscussions.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var d3_map_zero = new RegExp("[\\?&]" + canCreateDiscussions + "=([^&#]*)").exec(location.search);
  return null === d3_map_zero ? "" : decodeURIComponent(d3_map_zero[1].replace(/\+/g, " "));
}, Live.prototype.showClass = function (name, canCreateDiscussions) {
  canCreateDiscussions = void 0 === canCreateDiscussions || canCreateDiscussions;
  var PL$13 = document.getElementsByClassName(name);
  var PL$17 = 0;
  for (; PL$17 < PL$13.length; PL$17++) {
    PL$13[PL$17].style.display = canCreateDiscussions ? "table-row" : "none";
  }
}, RoomInfo.prototype.onLobbyRefresh = function () {
  var fieldDetails = Array.from(this.l.lobbyBox.getElementsByClassName("lobbyRow"));
  for (let fieldDetail of fieldDetails) {
    fieldDetail.addEventListener("mouseenter", this.openRoomDetails.bind(this));
    fieldDetail.addEventListener("mouseleave", this.closeRoomDetails.bind(this));
  }
  this.roomDetails = {};
}, RoomInfo.prototype.onLobbyClosed = function () {
  if (null !== this.roomDetailBox) {
    this.roomDetailBox.parentElement.removeChild(this.roomDetailBox);
    this.roomDetailBox = null;
  }
  this.timeoutRoomDetail = null;
  this.rdParts = {};
  this.roomDetails = {};
}, RoomInfo.prototype.detailBoxEntered = function (canCreateDiscussions) {
  if (this.timeoutRoomDetail) {
    clearTimeout(this.timeoutRoomDetail);
    this.timeoutRoomDetail = null;
  }
}, RoomInfo.prototype.detailBoxLeft = function (canCreateDiscussions) {
  hideElem(this.roomDetailBox);
  this.timeoutRoomDetail = null;
  if (this.timeoutRequestDetail) {
    clearTimeout(this.timeoutRequestDetail);
  }
}, RoomInfo.prototype.createElement = function (name, importedPages, e) {
  var t = document.createElement(name);
  var importedPageName;
  for (importedPageName in importedPages) {
    t.classList.add(importedPages[importedPageName]);
  }
  return e && e.appendChild(t), t;
}, RoomInfo.prototype.requestRoomDetail = function (canCreateDiscussions) {
  this.l.safeSend('{"t":28,"r":"' + canCreateDiscussions + '"}');
}, RoomInfo.prototype.acceptRoomDetail = function (canCreateDiscussions) {
  if (this.l.lobbyVisible) {
    this.roomDetails[canCreateDiscussions.r] = canCreateDiscussions;
    this.displayRoomDetail(canCreateDiscussions.r);
  }
}, RoomInfo.prototype.displayRoomDetail = function (drawtype) {
  if (this.roomDetailBox.dataset.id === drawtype && "none" !== this.roomDetailBox.style.display) {
    var dali_drawtype = this.roomDetails[drawtype];
    hideElem(this.rdParts.spinner);
    this.displayPlayers(dali_drawtype);
    this.displayConfig(dali_drawtype);
    this.displayLimit(dali_drawtype);
  }
}, RoomInfo.prototype.displayLimit = function (canCreateDiscussions) {
  if (null === canCreateDiscussions.l) {
    return void hideElem(this.rdParts.limit);
  }
  let command_codes = this.rdParts.limit;
  let fl = canCreateDiscussions.l.r;
  let object = canCreateDiscussions.l.l;
  let obj = canCreateDiscussions.l.s || {};
  this.rdParts.limit.style.display = "flex";
  let data = this.createElement("div", ["rdLimitInf"], null);
  if (fl) {
    command_codes.classList.add("rdOK");
    command_codes.classList.remove("rdF");
    command_codes.innerHTML = getSVG("s-unlocked", "dark", "lIcn");
    data.innerHTML = "<h1>" + i18n.joinPossible + "</h1>";
  } else {
    command_codes.classList.add("rdF");
    command_codes.classList.remove("rdOK");
    command_codes.innerHTML = getSVG("s-locked", "dark", "lIcn");
    data.innerHTML = "<h1>" + i18n.notEligible + "</h1>";
  }
  let exploreObject2 = function (fullName) {
    let fm = fullName[0];
    let fo = fullName[1];
    return fm || (fm = "0"), fo || (fo = "&infin;"), "⟨" + fm + "," + fo + "⟩";
  };
  let serializeObject = function (sampleNr, name) {
    let spaceLower = name[0];
    let spaceHigher = name[1];
    return sampleNr && (!spaceLower && !spaceHigher || !spaceLower && sampleNr <= spaceHigher || !spaceHigher && sampleNr >= spaceLower || sampleNr <= spaceHigher && sampleNr >= spaceLower) ? "✓" : "✗";
  };
  let brightness = "<dl>";
  for (let key in object) {
    brightness = brightness + ("<dt>" + this.LIMIT_NAMES[key].n + ": " + exploreObject2(object[key]) + "</dt>");
    brightness = brightness + ("<dd>" + (serializeObject(obj[key], object[key]) + " " + (descHeaders = obj[key], currCellId = this.LIMIT_NAMES[key].u, descHeaders ? descHeaders + " " + currCellId : "None")) + "</dd>");
  }
  var descHeaders;
  var currCellId;
  brightness = brightness + "</dl>";
  data.innerHTML += brightness;
  command_codes.appendChild(data);
}, RoomInfo.prototype.displayConfig = function (interfaces) {
  let fp = 0;
  let artistTrack = this.rdParts.settingsContent;
  for (; artistTrack.firstChild;) {
    artistTrack.removeChild(artistTrack.firstChild);
  }
  for (let i in interfaces.s) {
    if (!(i in this.CONF_NAMES)) {
      continue;
    }
    let is_vert = "object" == typeof this.CONF_NAMES[i];
    let message = "";
    let fq = "• " + (is_vert ? this.CONF_NAMES[i].n : this.CONF_NAMES[i]);
    if ("boolean" == typeof interfaces.s[i]) {
      message = this.ON_OFF[interfaces.s[i] + 0];
    } else {
      if (Array.isArray(interfaces.s[i])) {} else {
        if (is_vert && "v" in this.CONF_NAMES[i]) {
          let timeout = this.CONF_NAMES[i].v[interfaces.s[i]];
          if (null === timeout) {
            continue;
          }
          timeout = timeout || "?";
          message = timeout;
        } else {
          message = interfaces.s[i];
        }
        if (is_vert && "u" in this.CONF_NAMES[i]) {
          message = message + this.CONF_NAMES[i].u;
        }
      }
    }
    if (message) {
      fq = fq + (": <span class=confVal>" + message + "</span>");
    }
    this.createElement("div", ["rdItem"], artistTrack).innerHTML = fq;
    ++fp;
  }
  if (fp) {
    showElem(this.rdParts.settings);
  }
}, RoomInfo.prototype.displayPlayers = function (canCreateDiscussions) {
  this.rdParts.content.style.display = "flex";
  var nOutptIdx = 0;
  var indexLookupKey = 0;
  for (; indexLookupKey < canCreateDiscussions.p.p.length; ++indexLookupKey) {
    if (!canCreateDiscussions.p.p[indexLookupKey].hasOwnProperty("ti")) {
      canCreateDiscussions.p.p[indexLookupKey].ti = 0;
    }
  }
  canCreateDiscussions.p.p.sort(function (routeA, routeB) {
    return routeA.type && !routeB.type ? -1 : !routeA.type && routeB.type ? 1 : routeA.type && routeB.type && routeA.ti != routeB.ti ? routeA.ti > routeB.ti ? -1 : 1 : routeA.n.localeCompare(routeB.n);
  });
  var newPixelShader = "";
  var curCam = null;
  var camCat;
  for (camCat of canCreateDiscussions.p.p) {
    if (null !== curCam && curCam === camCat.n) {
      continue;
    }
    let technique = camCat.type || 0;
    let unTreatedUniforms = {color: camCat.col || null, icon: camCat.icn || null, bold: camCat.ti >= 2};
    if (newPixelShader = newPixelShader + this.l.getAuthorizedNameLink(camCat.n, technique, unTreatedUniforms), ++nOutptIdx, curCam = camCat.n, nOutptIdx >= 21) {
      break;
    }
  }
  if (canCreateDiscussions.p.c > 21) {
    newPixelShader = newPixelShader + ("<span class=pInfo>+" + trans(i18n.cntMore, {cnt: canCreateDiscussions.p.c - 21}) + "</span>");
    ++nOutptIdx;
  } else {
    if (canCreateDiscussions.p.g) {
      newPixelShader = newPixelShader + ("<span class=pInfo>+" + trans(i18n.cntGuests, {cnt: canCreateDiscussions.p.g}) + "</span>");
      ++nOutptIdx;
    } else {
      if (canCreateDiscussions.p.c + canCreateDiscussions.p.s === 0) {
        newPixelShader = newPixelShader + ("<span class=pInfo>" + i18n.noPlayers + "</span>");
      }
    }
  }
  if (canCreateDiscussions.p.s && nOutptIdx < 22) {
    newPixelShader = newPixelShader + ("<span class=pInfo>+" + trans(i18n.cntSpec, {cnt: canCreateDiscussions.p.s}) + "</span>");
    ++nOutptIdx;
  }
  this.rdParts.content.innerHTML = newPixelShader;
}, RoomInfo.prototype.openRoomDetails = function (res) {
  var artistTrack;
  var peerset = res.target.dataset.id;
  var fr = res.target.firstElementChild.childNodes[0].nodeValue;
  if (this.roomDetailBox) {
    artistTrack = this.roomDetailBox;
    showElem(this.roomDetailBox);
    this.detailBoxEntered();
  } else {
    artistTrack = this.roomDetailBox = this.createElement("div", ["rdW"], this.l.lobbyBox);
    let GET_AUTH_URL_TIMEOUT = this.rdParts.detail = this.createElement("div", ["roomDetail"], artistTrack);
    this.rdParts.title = this.createElement("div", ["rdTitle"], GET_AUTH_URL_TIMEOUT);
    this.rdParts.spinner = this.createElement("div", ["rdSpinner"], GET_AUTH_URL_TIMEOUT);
    this.rdParts.content = this.createElement("div", ["rdContent"], GET_AUTH_URL_TIMEOUT);
    this.rdParts.settings = this.createElement("div", [], GET_AUTH_URL_TIMEOUT);
    this.rdParts.settingsTitle = this.createElement("div", ["rdTitle", "rdSub"], this.rdParts.settings);
    this.rdParts.settingsContent = this.createElement("div", ["rdContent", "rdConf"], this.rdParts.settings);
    this.rdParts.limit = this.createElement("div", ["rdLimit"], artistTrack);
    this.rdParts.settingsTitle.innerHTML = i18n.stngsCustom;
    var fs = this.createElement("img", [], this.rdParts.spinner);
    fs.src = CDN_URL("/res/svg/spinWhite.svg");
    fs.style.width = "40px";
    artistTrack.addEventListener("mouseenter", this.detailBoxEntered.bind(this));
    artistTrack.addEventListener("mouseleave", this.detailBoxLeft.bind(this));
  }
  showElem(this.rdParts.spinner);
  hideElem(this.rdParts.content);
  hideElem(this.rdParts.settings);
  hideElem(this.rdParts.limit);
  let ft = (resolve = res, reject = this.l.lobbyBox, endColorCoords = reject.getBoundingClientRect(), resolve.clientY - endColorCoords.top);
  var resolve;
  var reject;
  var endColorCoords;
  let fu = Math.min(255, Math.max(-15, ft - artistTrack.clientHeight / 2));
  artistTrack.style.top = fu + "px";
  artistTrack.dataset.id = peerset;
  this.rdParts.title.innerHTML = fr;
  if (this.timeoutRequestDetail) {
    clearTimeout(this.timeoutRequestDetail);
  }
  if (this.roomDetails[peerset]) {
    this.displayRoomDetail(peerset);
  } else {
    this.timeoutRequestDetail = setTimeout(this.requestRoomDetail.bind(this, peerset), 30);
  }
}, RoomInfo.prototype.closeRoomDetails = function (canCreateDiscussions) {
  if (this.roomDetailBox) {
    this.timeoutRoomDetail = setTimeout(this.detailBoxLeft.bind(this), 200);
  }
}, Settings.prototype.init = function () {
  this.applyDefaults();
  this.tryToLoadControlsFromCookie();
  this.cookiePrefOnly();
  this.clearRealCookies();
}, Settings.prototype.applyDefaults = function () {
  this.controls = [37, 39, 40, 32, 90, 38, 67, 65, 115, 113];
  this.soundEnabled = false;
  this.DMsound = true;
  this.ml = 37;
  this.mr = 39;
  this.sd = 40;
  this.hd = 32;
  this.rl = 90;
  this.rr = 38;
  this.hk = 67;
  this.dr = 65;
  this.DAS = 133;
  this.ARR = 10;
  this.touchControlsEnabled = false;
  this.touchControls = false;
  this.gridMode = 1;
  this.SFXsetID = 2;
  this.VSFXsetID = 2;
  this.restartSprintOnFF = false;
  this.rescaleNow = false;
  this.DAScancel = true;
  this.defaultMonochrome = "#5c5c5c";
  this.p.DASmethod = 1;
  this.shownStats = [345, 745, 745, 745, 745, 746, 745, 745, 745, 741, 69];
}, Settings.prototype.openSettings = function () {
  this.box.style.display = "block";
  var indexLookupKey = 1;
  for (; indexLookupKey < this.inputBoxes.length; indexLookupKey++) {
    this.inputBoxes[indexLookupKey].value = this.getKeyName(this.controls[indexLookupKey - 1]);
  }
  this.settingBoxes[1].value = this.DAS;
  this.settingBoxes[2].value = this.ARR;
  this.touchEnabledBox.checked = this.touchControlsEnabled;
  this.soundEnabledBox.checked = this.soundEnabled;
  this.DMsoundBox.checked = this.DMsound;
  this.SEEnabledBox.checked = this.p.SEenabled;
  this.VSEEnabledBox.checked = this.p.VSEenabled;
  this.SEStartEnabledBox.checked = this.p.SEStartEnabled;
  this.SEFaultEnabledBox.checked = this.p.SEFaultEnabled;
  this.SErotateEnabledBox.checked = this.p.SErotate;
  document.getElementById("rescaleNow").checked = this.rescaleNow;
  document.getElementById("cancelDAS").checked = this.DAScancel;
  document.getElementById("dasMethod").checked = 0 === this.p.DASmethod;
  document.getElementById("wGL").checked = "webGL" === this.p.v.NAME;
  document.getElementById("sd" + this.p.softDropId).checked = true;
  document.getElementById("gr" + this.gridMode).checked = true;
  document.getElementById("ghost").checked = this.p.ghostEnabled;
  document.getElementById("sd" + this.p.softDropId).checked = true;
  document.getElementById("mLay").checked = this.p.Mobile && this.p.Mobile.isMobile;
  this.statGameModeSelect.value = 0;
  this.onStatGameModeChange();
  var click = this.p.monochromeSkin ? 7 : this.p.skinId;
  try {
    document.getElementById("bs" + click).checked = true;
  } catch (fv) {}
  this.sfxSelect.value = this.SFXsetID.toString();
  this.vsfxSelect.value = this.VSFXsetID.toString();
  this.volumeChange(Math.round(100 * createjs.Sound.volume));
  soundCredits({srcElement: this.sfxSelect, set: this.p.SFXset});
  soundCredits({srcElement: this.vsfxSelect, set: this.p.VSFXset});
  var artistTrack = this.p.monochromeSkin ? this.p.monochromeSkin : this.defaultMonochrome;
  this.monoColorInp.value = this.monoColorInp.style.backgroundColor = artistTrack;
  this.monochromePicker.set(artistTrack);
  if (this.p.Live.sTier >= 2 && !this.skinsLoaded) {
    this.loadMoreSkins();
    hideElem(document.getElementById("mSkInf-s"));
  }
}, Settings.prototype.addSkins = function () {
  if (null === this.moreSkins) {
    return;
  }
  let fw = "";
  for (let fx of this.moreSkins) {
    let fy = CDN_URL("/res/b/" + fx.p + ".png");
    fw = fw + ('<input type="radio" name="bSkin" data-p="' + fx.p + '" value="' + fx.i + '" id="bs' + fx.i + '"><label for="bs' + fx.i + '"> ');
    fw = fw + ('<img height="20" src="' + fy + '"><span class="skinAuth">by ' + fx.a + "</span></label><br>");
  }
  if (document.getElementById("moreSkins").innerHTML = fw, this.p.skinId >= 1e3) {
    var click = this.p.monochromeSkin ? 7 : this.p.skinId;
    try {
      document.getElementById("bs" + click).checked = true;
    } catch (fz) {}
  }
}, Settings.prototype.loadMoreSkins = function () {
  this.skinsLoaded = true;
  var xhr = new XMLHttpRequest;
  xhr.timeout = 1e4;
  xhr.open("GET", "/code/skins?v2", true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var gb = document.getElementById("moreSkins");
  gb.innerHTML = '<img src="/res/svg/spinWhite.svg" style="height:20px"> Loading more skins...';
  var gotoNewOfflinePage = function () {
    this.skinsLoaded = false;
    gb.innerHTML = "Could not load skin data, try refreshing the page or reopening the Settings.";
  };
  try {
    xhr.send();
  } catch (gc) {
    gotoNewOfflinePage();
  }
  var gd = this;
  xhr.ontimeout = xhr.onerror = xhr.onabort = function () {
    gotoNewOfflinePage();
  };
  xhr.onload = function () {
    if (200 === xhr.status) {
      gd.moreSkins = JSON.parse(xhr.responseText);
      gd.addSkins();
    } else {
      gotoNewOfflinePage();
    }
  };
}, Settings.prototype.reloadCanvases = function () {
  var build_class = function (superclass) {
    var S = superclass.cloneNode(false);
    return superclass.parentNode.replaceChild(S, superclass), S;
  };
  this.p.canvas = build_class(this.p.canvas);
  this.p.holdCanvas = build_class(this.p.holdCanvas);
  this.p.queueCanvas = build_class(this.p.queueCanvas);
  build_class(document.getElementById("glstats"));
}, Settings.prototype.closeSettings = function () {
  let ge = false;
  let gf = false;
  var whiteRating = parseInt(this.settingBoxes[1].value);
  this.setDAS(whiteRating);
  var pageInd = parseInt(this.settingBoxes[2].value);
  this.setARR(pageInd);
  this.soundEnabled = this.soundEnabledBox.checked;
  this.DMsound = this.DMsoundBox.checked;
  this.p.SEenabled = this.SEEnabledBox.checked;
  if (this.p.VSEenabled != this.VSEEnabledBox.checked) {
    gf = true;
    this.p.VSEenabled = this.VSEEnabledBox.checked;
  }
  this.p.SEStartEnabled = this.SEStartEnabledBox.checked;
  this.p.SEFaultEnabled = this.SEFaultEnabledBox.checked;
  if (this.p.SErotate != this.SErotateEnabledBox.checked) {
    gf = true;
  }
  this.p.SErotate = this.SErotateEnabledBox.checked;
  if (this.soundEnabled) {
    this.setCookie("eSE", "1");
  } else {
    this.setCookie("eSE", "0");
  }
  if (this.DMsound) {
    this.setCookie("eDM", "1");
  } else {
    this.setCookie("eDM", "0");
  }
  if (this.p.SEenabled) {
    this.setCookie("SE", "1");
  } else {
    this.setCookie("SE", "0");
  }
  if (this.p.SEStartEnabled) {
    this.setCookie("SEstart", "1");
  } else {
    this.setCookie("SEstart", "0");
  }
  if (this.p.SErotate) {
    this.setCookie("SErot", "1");
  } else {
    this.setCookie("SErot", "0");
  }
  if (this.p.VSEenabled) {
    this.setCookie("VSE", "1");
  } else {
    this.setCookie("VSE", "0");
  }
  var appVersion = document.querySelector('input[name="bSkin"]:checked');
  var $constraint = appVersion ? parseInt(appVersion.value) : 0;
  var $handle = $constraint;
  if ($constraint >= 1e3) {
    this.p.customSkinPath = appVersion.dataset.p;
  } else {
    if (6 === $constraint) {
      $constraint = $handle = $handle = 0;
      this.p.isInvisibleSkin = true;
    } else {
      this.p.isInvisibleSkin = false;
    }
  }
  if (7 === $constraint) {
    $handle = 0;
    $constraint = 7;
    this.p.monochromeSkin = this.defaultMonochrome = document.getElementById("monoColor").value;
  } else {
    this.p.monochromeSkin = false;
  }
  this.p.changeSkin($handle);
  this.setCookie("skinId", $constraint);
  var oldValue = parseInt(document.querySelector('input[name="sds"]:checked').value);
  var oldValueIsNaN = this.p.softDropId !== oldValue;
  this.p.softDropId = oldValue;
  this.setCookie("SD", oldValue);
  this.touchControlsEnabled = this.touchControls = this.touchEnabledBox.checked;
  this.mc.set({enable: this.touchControls, touchAction: this.touchActionVal()});
  if (this.touchControlsEnabled) {
    this.setCookie("TouchC", "1");
  } else {
    this.setCookie("TouchC", "0");
  }
  this.restartSprintOnFF = document.getElementById("ffRestart").checked;
  var intTempPreference = parseInt(this.sfxSelect.value);
  if (this.SFXsetID !== intTempPreference) {
    this.SFXsetID = intTempPreference;
    this.setCookie("SFXset", this.SFXsetID);
    gf = true;
  }
  intTempPreference = parseInt(this.vsfxSelect.value);
  if (this.VSFXsetID !== intTempPreference) {
    this.VSFXsetID = intTempPreference;
    this.setCookie("VSFXset", this.VSFXsetID);
    gf = true;
  }
  if (gf) {
    this.p.initSFX();
  }
  var numKeysDeleted = Math.round(100 * createjs.Sound.volume);
  this.setCookie("SEvol", numKeysDeleted);
  this.rescaleNow = document.getElementById("rescaleNow").checked;
  if (this.rescaleNow) {
    this.setCookie("rescale", "1");
  } else {
    this.removeCookie("rescale");
  }
  this.DAScancel = document.getElementById("cancelDAS").checked;
  this.p.DASmethod = document.getElementById("dasMethod").checked ? 0 : 1;
  if (0 === this.p.DASmethod) {
    this.setCookie("dasMethod", "0");
  } else {
    this.removeCookie("dasMethod");
  }
  this.p.GameStats.reorder();
  this.setCookie("shownStats", this.shownStats);
  if (this.p.Live.authorized) {
    this.sendSettings();
  }
  var gg = this.p.v;
  if (document.getElementById("wGL").checked && "webGL" !== this.p.v.NAME) {
    this.startWebGL(true);
  } else {
    if (!(document.getElementById("wGL").checked || "2d" === this.p.v.NAME)) {
      this.startCtx2D();
    }
  }
  if (gg !== this.p.v) {
    this.p.GameStats.setView(this.p.v);
  }
  let postDateGmt = document.getElementById("mLay").checked;
  if (this.p.Mobile && this.p.Mobile.isMobile !== postDateGmt) {
    if (postDateGmt !== this.p.Mobile.isMobileDetect()) {
      this.setCookie("mobile", postDateGmt);
    } else {
      this.removeCookie("mobile");
    }
    ge = true;
  }
  this.box.style.display = "none";
  if (this.p.play) {
    this.p.Replay.config.sc = 1;
    if (oldValueIsNaN) {
      this.p.Replay.mode = -1;
      this.p.Live.showInChat("", "<em>(SD) " + i18n.settingsChanged + "</em>");
      this.p.transmitMode = 0;
      if (this.p.Live.socket) {
        this.p.Live.safeSend('{"t":25}');
      }
    }
  }
  if (ge) {
    location.reload();
  }
}, Settings.prototype.onStatGameModeChange = function (ballNumber) {
  ballNumber = void 0 === ballNumber ? 0 : ballNumber.target.value;
  var indexLookupKey = 1;
  for (; indexLookupKey < this.statCheckboxes.length; indexLookupKey++) {
    this.statCheckboxes[indexLookupKey].checked = this.shownStats[ballNumber] & 1 << indexLookupKey - 1;
  }
  this.updateStatsOptionsId();
}, Settings.prototype.onStatCheckboxChange = function (canCreateDiscussions) {
  this.shownStats[parseInt(this.statGameModeSelect.value)] ^= 1 << canCreateDiscussions - 1;
  this.updateStatsOptionsId();
}, Settings.prototype.updateStatsOptionsId = function () {
  this.statOptId.textContent = this.shownStats[parseInt(this.statGameModeSelect.value)];
}, Settings.prototype.startCtx2D = function () {
  this.reloadCanvases();
  this.p.v = new Ctx2DView(this.p);
  this.p.v.initRenderer();
  this.p.redraw();
  this.p.redrawHoldBox();
  this.p.updateQueueBox();
}, Settings.prototype.startWebGL = function (canCreateDiscussions) {
  if (canCreateDiscussions) {
    this.reloadCanvases();
  }
  var gh = new WebGLView(this.p);
  if (gh.isAvailable()) {
    this.p.v = gh;
    this.p.v.initRenderer();
    this.p.redraw();
    this.p.redrawHoldBox();
    this.p.updateQueueBox();
  } else {
    this.webGlStartFailed = true;
    console.error("No WebGL support! Option has been disabled.");
    document.getElementById("wGL").checked = false;
    this.startCtx2D();
  }
}, Settings.prototype.setBanArtifact = function (options) {
  var datum = 0;
  if ("string" == typeof options) {
    var sArrDayId = options.match(/\d+/g);
    if (sArrDayId) {
      datum = parseInt(sArrDayId[0]);
    }
  } else {
    datum = options;
  }
  localStorage.setItem(self.BAN_ARTIFACT_KEY, datum);
}, Settings.prototype.getBanArtifact = function () {
  return localStorage.removeItem("room2"), localStorage.getItem(self.BAN_ARTIFACT_KEY);
}, Settings.prototype.removeBanArtifact = function () {
  return localStorage.removeItem(self.BAN_ARTIFACT_KEY);
}, Settings.prototype.resetSettings = function () {
  let gi = null !== localStorage.getItem(self.BAN_ARTIFACT_KEY);
  localStorage.clear();
  this.applyDefaults();
  this.openSettings();
  if (gi) {
    this.setBanArtifact();
  }
  if (this.p.Mobile.isMobile) {
    location.reload();
  }
}, Settings.prototype.setDAS = function (mmCoreSplitViewBlock) {
  if (mmCoreSplitViewBlock > 0 && mmCoreSplitViewBlock < 5e3) {
    this.DAS = mmCoreSplitViewBlock;
    this.setCookie("DAS", mmCoreSplitViewBlock);
  } else {
    alert(i18n.invalidDAS);
  }
}, Settings.prototype.setARR = function (mmCoreSplitViewBlock) {
  if (mmCoreSplitViewBlock >= 0 && mmCoreSplitViewBlock < 5e3) {
    this.ARR = mmCoreSplitViewBlock;
    this.setCookie("ARR", mmCoreSplitViewBlock);
  } else {
    alert("ARR value is invalid.");
  }
}, Settings.prototype.handleKeyDown = function (mmCoreSplitViewBlock, selector) {
  document.getElementById("kc" + selector).innerHTML = mmCoreSplitViewBlock;
  this.inputBoxes[selector].value = this.getKeyName(mmCoreSplitViewBlock);
  this.setControlKey(selector, mmCoreSplitViewBlock);
  this.setCookie("k" + selector, mmCoreSplitViewBlock);
}, Settings.prototype.setControlKey = function (val, cur) {
  switch (this.controls[val - 1] = cur, val) {
    case 1:
      this.ml = cur;
      break;
    case 2:
      this.mr = cur;
      break;
    case 3:
      this.sd = cur;
      break;
    case 4:
      this.hd = cur;
      break;
    case 5:
      this.rl = cur;
      break;
    case 6:
      this.rr = cur;
      break;
    case 7:
      this.hk = cur;
      break;
    case 8:
      this.dr = cur;
      break;
    case 9:
    case 10:
      break;
    default:
      console.log("unknown");
  }
}, Settings.prototype.loadFromJson = function (expected) {
  var select = 0;
  for (; select < 10; select++) {
    this.setControlKey(select + 1, expected["k" + select]);
  }
  this.setDAS(expected.DAS);
  this.setARR(expected.ARR);
  this.p.SEenabled = expected.SE;
  this.p.SEFaultEnabled = expected.SEf;
  this.p.SEStartEnabled = expected.SEs;
  if (expected.bSp) {
    this.p.customSkinPath = expected.bSp;
  }
  this.p.changeSkin(expected.bSk);
  this.soundEnabled = expected.eso;
  this.p.ghostEnabled = expected.gho;
  this.setGrid(expected.grs);
  this.rescaleNow = expected.res;
  this.p.softDropId = expected.sds;
  this.touchControlsEnabled = expected.tou;
  this.DAScancel = expected.DASca;
  this.volumeChange(expected.vol);
  this.SFXsetID = expected.SE > 0 ? expected.SE - 1 : 0;
  if (expected.mClr) {
    this.defaultMonochrome = expected.mClr;
    if (7 === expected.bSk) {
      this.p.monochromeSkin = expected.mClr;
    }
  }
  if (expected.wGL && "webGL" !== this.p.v.NAME && !this.webGlStartFailed) {
    this.startWebGL();
  } else {
    if (!(expected.wGL || "2d" === this.p.v.NAME)) {
      this.startCtx2D();
    }
  }
}, Settings.prototype.cookiePrefOnly = function () {
  var unusedAttrsVerticalAutoCutoff = 0;
  unusedAttrsVerticalAutoCutoff = this.getCookie("SErot");
  this.p.SErotate = "1" === unusedAttrsVerticalAutoCutoff;
  unusedAttrsVerticalAutoCutoff = this.getCookie("VSE");
  this.p.VSEenabled = "1" === unusedAttrsVerticalAutoCutoff;
  unusedAttrsVerticalAutoCutoff = parseInt(this.getCookie("VSFXset"));
  if (!isNaN(unusedAttrsVerticalAutoCutoff)) {
    this.VSFXsetID = unusedAttrsVerticalAutoCutoff;
  }
  unusedAttrsVerticalAutoCutoff = parseInt(this.getCookie("dasMethod"));
  this.p.DASmethod = 0 === unusedAttrsVerticalAutoCutoff ? 0 : 1;
  if (null != (unusedAttrsVerticalAutoCutoff = this.getCookie("shownStats"))) {
    this.shownStats = unusedAttrsVerticalAutoCutoff.split(",").map(id_local => {
      return parseInt(id_local);
    });
  }
}, Settings.prototype.tryToLoadControlsFromCookie = function () {
  if ("" !== conf_global.name && "undefined" != typeof sts) {
    return this.loadFromJson(sts), true;
  }
  var questIndex = 0;
  var artistTrack = 1;
  for (; artistTrack <= 10; artistTrack++) {
    questIndex = parseInt(this.getCookie("k" + artistTrack));
    if (!isNaN(questIndex)) {
      this.setControlKey(artistTrack, questIndex);
    }
  }
  questIndex = parseInt(this.getCookie("DAS"));
  if (!isNaN(questIndex)) {
    this.setDAS(questIndex);
  }
  questIndex = parseInt(this.getCookie("ARR"));
  if (!isNaN(questIndex)) {
    this.setARR(questIndex);
  }
  questIndex = parseInt(this.getCookie("skinId"));
  if (!isNaN(questIndex)) {
    this.p.changeSkin(parseInt(questIndex));
  }
  questIndex = this.getCookie("SE");
  this.p.SEenabled = "0" !== questIndex;
  questIndex = this.getCookie("SEstart");
  this.p.SEStartEnabled = "0" !== questIndex;
  questIndex = this.getCookie("eSE");
  this.soundEnabled = "0" !== questIndex && null !== questIndex;
  questIndex = this.getCookie("eDM");
  this.DMsound = "1" === questIndex || null === questIndex;
  questIndex = parseInt(this.getCookie("SD"));
  if (!isNaN(questIndex)) {
    this.p.softDropId = questIndex;
  }
  questIndex = this.getCookie("TouchC");
  this.touchControlsEnabled = "1" === questIndex;
  questIndex = parseInt(this.getCookie("SFXset"));
  if (!isNaN(questIndex)) {
    this.SFXsetID = questIndex;
  }
  questIndex = parseInt(this.getCookie("SEvol"));
  if (!isNaN(questIndex) && questIndex >= 0 && questIndex <= 100) {
    this.volumeChange(parseInt(questIndex));
  }
  questIndex = this.getCookie("rescale");
  this.rescaleNow = !(null === questIndex || "0" === questIndex);
  this.setGrid(1);
}, Settings.prototype.sendSettings = function () {
  var gj;
  var PL$13;
  var PL$17;
  var result = {};
  gj = document.getElementById("settingsBox");
  var command_codes = Array.prototype.slice.call(gj.getElementsByTagName("input"), 0);
  var data = Array.prototype.slice.call(gj.getElementsByTagName("select"), 0);
  var change_btn = function (hide) {
    return "cancelDAS" === hide ? "DASca" : null;
  };
  PL$13 = command_codes.concat(data);
  PL$17 = 0;
  for (; PL$17 < PL$13.length; ++PL$17) {
    if ("input" !== PL$13[PL$17].id.substr(0, 5) && "ffRestart" !== PL$13[PL$17].id && "stat" !== PL$13[PL$17].id.substr(0, 4)) {
      if ("radio" === PL$13[PL$17].type) {
        if (PL$13[PL$17].checked) {
          let list_for_lang = PL$13[PL$17].name.substr(0, 3);
          result[list_for_lang] = PL$13[PL$17].value;
          if ("bSk" == list_for_lang && PL$13[PL$17].dataset.p) {
            result.bSp = PL$13[PL$17].dataset.p;
          }
        }
      } else {
        if ("checkbox" === PL$13[PL$17].type) {
          result[change_btn(PL$13[PL$17].id) ? change_btn(PL$13[PL$17].id) : PL$13[PL$17].id.substr(0, 3)] = PL$13[PL$17].checked;
        } else {
          result[PL$13[PL$17].id.substr(0, 3)] = PL$13[PL$17].value;
          if (PL$13[PL$17].id === this.sfxSelect.id && void 0 !== result.SE && result.SE) {
            result.SE += parseInt(PL$13[PL$17].value);
          }
        }
      }
    }
  }
  result.key = this.controls;
  result.stats = this.shownStats;
  this.postSettings(JSON.stringify(result));
}, Settings.prototype.postSettings = function (qov) {
  var scope = document.head.querySelector("[name=csrf-token]").content;
  var directiveProcessors = new XMLHttpRequest;
  var $node = "d=" + encodeURIComponent(qov);
  directiveProcessors.timeout = 1e4;
  directiveProcessors.open("POST", "/code/settings", true);
  directiveProcessors.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  directiveProcessors.setRequestHeader("X-CSRF-TOKEN", scope);
  directiveProcessors.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  directiveProcessors.send($node);
  directiveProcessors.onload = function () {
    directiveProcessors.status;
  };
}, Settings.prototype.onGameStart = function () {
  if (this.touchControlsEnabled) {
    this.setTouchControls(1);
  }
}, Settings.prototype.onGameEnd = function () {
  if (this.touchControlsEnabled) {
    this.setTouchControls(0);
  }
}, Settings.prototype.volumeChange = function (canCreateDiscussions) {
  document.getElementById("vol-control").value = canCreateDiscussions;
  document.getElementById("vol-value").innerHTML = canCreateDiscussions + "%";
  createjs.Sound.volume = canCreateDiscussions / 100;
}, Settings.prototype.touchActionVal = function () {
  return this.touchControls ? "none" : "auto";
}, Settings.prototype.touchUsed = function () {
  this.touchActuallyUsed = true;
  if (!this.p.Mobile.isMobile) {
    this.mainDiv.style.border = "1px solid #0062ca";
    showElem(document.getElementById("tc-area-desc"));
  }
}, Settings.prototype.setTouchControls = function (canCreateDiscussions) {
  if (0 === canCreateDiscussions) {
    this.touchControls = false;
    this.mc.set({enable: this.touchControls, touchAction: this.touchActionVal()});
    this.mainDiv.removeEventListener("touchstart", this.preventZoomHandler);
    if (this.touchActuallyUsed) {
      this.mainDiv.style.border = "none";
      hideElem(document.getElementById("tc-area-desc"));
    }
  } else {
    if (!this.touchControlsEnabled) {
      return false;
    }
    this.touchControls = true;
    this.mc.set({enable: this.touchControls, touchAction: this.touchActionVal()});
    this.mainDiv.addEventListener("touchstart", this.preventZoomHandler);
    if (this.touchActuallyUsed) {
      this.touchUsed();
    }
  }
}, Settings.prototype.setCookie = function (namespace, datum) {
  localStorage.setItem(namespace, datum);
}, Settings.prototype.getCookie = function (namespace) {
  return localStorage.getItem(namespace);
}, Settings.prototype.removeCookie = function (namespace) {
  localStorage.removeItem(namespace);
}, Settings.prototype.onControlKeySet = function (mmCoreSplitViewBlock, canCreateDiscussions) {
  this.handleKeyDown(canCreateDiscussions.keyCode, mmCoreSplitViewBlock);
  canCreateDiscussions.preventDefault();
}, Settings.prototype.setGrid = function (canCreateDiscussions) {
  this.gridMode = canCreateDiscussions;
  this.p.drawBgGrid(this.gridMode);
}, Settings.prototype.nullpoDAS = function () {
  var number = parseInt(prompt(i18n.enterNullDAS));
  if (!isNaN(number) && number >= 0 && number <= 1e3) {
    var gk = Math.round(16.666666666666668 * number);
    if (true === confirm(i18n.suggestedIs + " " + gk + ". " + i18n.applyConfirm)) {
      this.settingBoxes[1].value = gk;
    }
  }
}, Settings.prototype.setupSwipeControl = function () {
  var splitEmailAddressFragments = this.p;
  var lifecycleEvent = {keyCode: 0, repeat: false, preventDefault: function () {}, stopPropagation: function () {}};
  var color1hsl = this.controls;
  var n = 0;
  var gm = 0;
  var gn = false;
  var p = 25;
  var go = this;
  var nextEmailAddress = splitEmailAddressFragments.block_size;
  this.mc.get("pan").set({direction: Hammer.DIRECTION_ALL, threshold: 10});
  this.mc.on("panstart", function (canCreateDiscussions) {
    if (!go.touchActuallyUsed) {
      go.touchUsed();
    }
    n = 0;
    gn = false;
    gm = true;
    p = go.ARR <= 25 ? 25 : go.ARR;
  });
  this.mc.on("pan", function (groups) {
    if (groups.direction === Hammer.DIRECTION_DOWN) {
      if (groups.distance < splitEmailAddressFragments.block_size) {
        nextEmailAddress = splitEmailAddressFragments.block_size;
      }
      if (groups.velocityY < .15 && groups.distance > nextEmailAddress) {
        gn = true;
        nextEmailAddress = nextEmailAddress + splitEmailAddressFragments.block_size;
        splitEmailAddressFragments.gravityStep(0);
        splitEmailAddressFragments.Replay.add(new ReplayAction(splitEmailAddressFragments.Replay.Action.GRAVITY_STEP, splitEmailAddressFragments.timestamp()));
        splitEmailAddressFragments.redraw();
      }
    } else {
      if (groups.direction === Hammer.DIRECTION_LEFT) {
        if (groups.deltaX <= (n - 1) * p) {
          n--;
          if (gm) {
            n--;
            gm = false;
          }
          if (splitEmailAddressFragments.moveCurrentBlock(-1, false)) {
            splitEmailAddressFragments.Replay.add(new ReplayAction(splitEmailAddressFragments.Replay.Action.MOVE_LEFT, splitEmailAddressFragments.timestamp()));
          }
        }
      } else {
        if (groups.direction === Hammer.DIRECTION_RIGHT && groups.deltaX >= (n + 1) * p) {
          n++;
          if (gm) {
            n++;
            gm = false;
          }
          if (splitEmailAddressFragments.moveCurrentBlock(1, false)) {
            splitEmailAddressFragments.Replay.add(new ReplayAction(splitEmailAddressFragments.Replay.Action.MOVE_RIGHT, splitEmailAddressFragments.timestamp()));
          }
        }
      }
    }
  });
  this.mc.on("panend", function (props) {
    nextEmailAddress = splitEmailAddressFragments.block_size;
    splitEmailAddressFragments.gameStep = .9;
    splitEmailAddressFragments.timer = 0;
    if (props.direction === Hammer.DIRECTION_DOWN) {
      if (!gn && props.deltaY >= 40 && Math.abs(props.overallVelocityY) >= .15) {
        lifecycleEvent.keyCode = color1hsl[3];
        splitEmailAddressFragments.keyInput2(lifecycleEvent);
        splitEmailAddressFragments.keyInput3(lifecycleEvent);
      }
    } else {
      if (props.direction === Hammer.DIRECTION_UP) {
        lifecycleEvent.keyCode = color1hsl[6];
        splitEmailAddressFragments.keyInput2(lifecycleEvent);
        splitEmailAddressFragments.keyInput3(lifecycleEvent);
      }
    }
  });
  this.mc.on("panleft", function (props) {
    if (Math.abs(props.overallVelocityX) > .8 && Math.abs(props.deltaX) > 4 * p && splitEmailAddressFragments.moveBlockToTheWall(-1)) {
      splitEmailAddressFragments.Replay.add(new ReplayAction(splitEmailAddressFragments.Replay.Action.DAS_LEFT, splitEmailAddressFragments.timestamp()));
    }
  });
  this.mc.on("panright", function (props) {
    if (Math.abs(props.overallVelocityX) > .8 && Math.abs(props.deltaX) > 4 * p && splitEmailAddressFragments.moveBlockToTheWall(1)) {
      splitEmailAddressFragments.Replay.add(new ReplayAction(splitEmailAddressFragments.Replay.Action.DAS_RIGHT, splitEmailAddressFragments.timestamp()));
    }
  });
  this.mc.on("tap", function (canCreateDiscussions) {
    var gp = splitEmailAddressFragments.canvas.getBoundingClientRect();
    var gq = canCreateDiscussions.center.x - gp.left;
    canCreateDiscussions.center.y;
    gp.top;
    if (gq > splitEmailAddressFragments.canvas.offsetWidth / 2) {
      lifecycleEvent.keyCode = color1hsl[5];
      splitEmailAddressFragments.keyInput2(lifecycleEvent);
      splitEmailAddressFragments.keyInput3(lifecycleEvent);
    } else {
      lifecycleEvent.keyCode = color1hsl[4];
      splitEmailAddressFragments.keyInput2(lifecycleEvent);
      splitEmailAddressFragments.keyInput3(lifecycleEvent);
    }
  });
}, Settings.prototype.clearAllCookies = function () {
  var nextIdLookup = document.cookie.split(";");
  var indexLookupKey = 0;
  for (; indexLookupKey < nextIdLookup.length; indexLookupKey++) {
    var currentIndex = nextIdLookup[indexLookupKey];
    var index = currentIndex.indexOf("=");
    var iOpenIndex = index > -1 ? currentIndex.substr(0, index) : currentIndex;
    document.cookie = iOpenIndex + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}, Settings.prototype.clearRealCookies = function () {
  if (2 === ("; " + document.cookie).split("; DAS=").length) {
    this.clearAllCookies();
  }
}, Settings.prototype.preventZoom = function (componentStack) {
  var groupsize = componentStack.timeStamp;
  var dragstocreate = groupsize - (componentStack.currentTarget.dataset.lastTouch || groupsize);
  var gr = componentStack.touches.length;
  componentStack.currentTarget.dataset.lastTouch = groupsize;
  if (!(!dragstocreate || dragstocreate > 500 || gr > 1)) {
    componentStack.preventDefault();
    componentStack.target.click();
  }
}, Settings.prototype.registerColorPicker = function () {
  var gs = new CP(document.querySelector(".colorPicker"));
  return gs.on("change", function (canCreateDiscussions) {
    this.source.value = "#" + canCreateDiscussions;
    this.source.style.backgroundColor = "#" + canCreateDiscussions;
  }), gs.on("enter", function (canCreateDiscussions) {
    gs.set(this.source.value);
    document.getElementById("bs7").checked = true;
  }), gs;
}, Settings.prototype.initGamePad = function (componentStack) {
  var parentComponentDef = componentStack.gamepad;
  if (this.gamepadFound && parentComponentDef.buttons.length > this.gamepadButtons.length && (this.gamepadButtons = []), parentComponentDef.buttons.length > 0 && !this.gamepadFound) {
    this.gamepadButtons = [];
    for (let index = 0; index < parentComponentDef.buttons.length; index++) {
      this.gamepadButtons.push({pressed: false, index: index});
    }
    this.gamepadFound = true;
  }
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", componentStack.gamepad.index, componentStack.gamepad.id, componentStack.gamepad.buttons.length, componentStack.gamepad.axes.length);
}, Settings.prototype.removeGamePad = function (canCreateDiscussions) {
  this.gamepadFound = false;
  this.gamepadButtons = [];
  console.log("Lost connection with the gamepad.");
}, Settings.prototype.processGamepad = function () {
  try {
    var $modalButtons = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
    if (!$modalButtons) {
      return;
    }
    var mapLayerCollection = null;
    for (let i = 0; i < $modalButtons.length; i++) {
      if ($modalButtons[i] && $modalButtons[i].buttons.length > 0) {
        mapLayerCollection = $modalButtons[i];
        let gt = false;
        for (let i = 0; i < mapLayerCollection.buttons.length; i++) {
          let gu = mapLayerCollection.buttons[i];
          if (gu.pressed && !this.gamepadButtons[i].pressed) {
            this.gamepadButtons[i].pressed = true;
            let artistTrack = new KeyboardEvent("keydown", {keyCode: 230 + i, bubbles: true});
            document.activeElement.dispatchEvent(artistTrack);
            gt = true;
          } else {
            if (!gu.pressed && this.gamepadButtons[i].pressed) {
              this.gamepadButtons[i].pressed = false;
              let artistTrack = new KeyboardEvent("keyup", {keyCode: 230 + i, bubbles: true});
              document.activeElement.dispatchEvent(artistTrack);
              gt = true;
            }
          }
        }
        if (gt) {
          break;
        }
      }
    }
  } catch (previousState) {
    console.error(previousState);
  }
}, Settings.prototype.getKeyName = function (slot) {
  if (slot >= 230 && slot <= 300) {
    let gv = slot - 230;
    return "GPAD_" + String.fromCharCode(65 + gv);
  }
  var onlineQuestions = {0: "\\", 8: "backspace", 9: "tab", 12: "num", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "caps", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 44: "print", 45: "insert", 46: "delete", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 91: "cmd", 92: "cmd", 93: "cmd", 96: "num_0", 97: "num_1", 98: "num_2", 99: "num_3", 100: "num_4", 101: "num_5", 102: "num_6", 103: "num_7", 104: "num_8", 105: "num_9", 106: "num_multiply", 107: "num_add", 108: "num_enter", 109: "num_subtract", 110: "num_decimal", 111: "num_divide", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 124: "print", 144: "num", 145: "scroll", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 223: "`", 224: "cmd", 225: "alt", 57392: "ctrl", 63289: "num", 59: ";", 61: "-", 173: "="};
  return void 0 !== onlineQuestions[slot] ? onlineQuestions[slot] : "KeyCode " + slot;
}, GameSlots.prototype.setZoom = function (canCreateDiscussions) {
  this.zoom = canCreateDiscussions / 100;
  this.w = this.baseSize.playersW * this.zoom;
  this.h = this.baseSize.playersH * ((this.zoom - 1) / 2 + 1);
  var gw = -(this.w - this.baseSize.playersW) / 2;
  document.getElementById("players").style.width = this.w + "px";
  document.getElementById("main").style.marginLeft = gw + "px";
  document.getElementById("gameFrame").style.width = this.baseSize.gameFrame + (this.w - this.baseSize.playersW + gw) + "px";
  this.autoScale();
}, GameSlots.prototype.fullScreen = function (canCreateDiscussions) {
  if (this.isFullscreen = canCreateDiscussions, document.getElementById("zoomControl").disabled = canCreateDiscussions, canCreateDiscussions) {
    hideElem(document.getElementById("main"));
    document.getElementById("players").style.width = "100%";
    document.getElementById("gameFrame").style.width = "100%";
    var gx = document.getElementById("gc");
    gx.style.width = "95%";
    this.w = this.gsDiv.offsetWidth;
    this.h = Math.min(this.w / 2, 1.05 * gx.offsetHeight);
    this.zoom = Math.max(1, this.h / 450);
    this.autoScale();
  } else {
    showElem(document.getElementById("main"));
    document.getElementById("players").style.width = null;
    document.getElementById("gameFrame").style.width = null;
    document.getElementById("gc").style.width = null;
    this.setZoom(parseInt(document.getElementById("zoomControl").value));
  }
}, GameSlots.prototype.numRows = function (canCreateDiscussions) {
  return canCreateDiscussions <= 3 ? 1 : canCreateDiscussions <= 10 ? 2 : canCreateDiscussions <= 39 ? 3 : 4;
}, GameSlots.prototype.nmob = function (diff) {
  return this.blocksY * Math.round(diff / this.blocksY);
}, GameSlots.prototype.swapSlot = function (ballNumber, scaleid) {
  this.cidSlots[this.slots[scaleid].cid] = ballNumber;
  this.cidSlots[this.slots[ballNumber].cid] = scaleid;
  var gy = this.slots[scaleid].cid;
  var gz = this.slots[scaleid].name;
  this.slots[scaleid].cid = this.slots[ballNumber].cid;
  this.slots[scaleid].name = this.slots[ballNumber].name;
  this.slots[ballNumber].cid = gy;
  this.slots[ballNumber].name = gz;
}, GameSlots.prototype.mvSlot = function (ballNumber, scaleid) {
  this.slots[scaleid].cid = this.slots[ballNumber].cid;
  this.slots[scaleid].name.innerHTML = this.slots[ballNumber].name.innerHTML;
  this.slots[ballNumber].vacantClear();
  this.cidSlots[this.slots[scaleid].cid] = scaleid;
}, GameSlots.prototype.shrink = function () {
  var ha = 0;
  var projectDir = 0;
  for (; projectDir < this.slots.length; projectDir++) {
    if (-1 === this.slots[projectDir].cid) {
      var configFile = projectDir + 1;
      for (; configFile < this.slots.length && -1 === this.slots[configFile].cid;) {
        configFile++;
      }
      if (configFile === this.slots.length) {
        break;
      }
      if (-1 !== this.slots[configFile].cid) {
        this.mvSlot(configFile, projectDir);
        ha++;
      }
    } else {
      ha++;
    }
  }
  return ha;
}, GameSlots.prototype.teamOfSlot = function (ballNumber) {
  return this.p.Live.clients[this.slots[ballNumber].cid].team;
}, GameSlots.prototype.teamOfCid = function (ballNumber) {
  return this.p.Live.clients[ballNumber].team;
}, GameSlots.prototype.autoScale = function () {
  if (2 === this.p.Live.liveMode) {
    var hb;
    var counterElement;
    this.shrink();
    hb = 0;
    for (; hb < this.slots.length - 1; hb++) {
      var hc = 0;
      counterElement = 0;
      for (; counterElement < this.slots.length - hb - 1 && (-1 !== this.slots[counterElement].cid && -1 !== this.slots[counterElement + 1].cid); counterElement++) {
        if (parseInt(this.teamOfSlot(counterElement)) > parseInt(this.teamOfSlot(counterElement + 1))) {
          this.swapSlot(counterElement, counterElement + 1);
          hc++;
        }
      }
      if (!hc) {
        break;
      }
    }
    this.tsetup([this.teamMembers[0].length, this.teamMembers[1].length]);
  } else {
    this.hideTags();
    var artistTrack = this.shrink();
    if (!artistTrack) {
      artistTrack = 1;
    }
    this.setup(artistTrack);
  }
}, GameSlots.prototype.hideTags = function () {
  for (let hd of this.teamTags) {
    if (hd) {
      hd.style.display = "none";
    }
  }
}, GameSlots.prototype.updateTeamNames = function (a) {
  var n;
  for (n in this.teamData = a, a) {
    if (!this.teamMembers.hasOwnProperty(n)) {
      this.teamMembers[n] = [];
    }
  }
  this.autoScale();
}, GameSlots.prototype.initTeamTag = function (i, canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  var tempStop = null;
  if (void 0 !== this.teamTags[i]) {
    (tempStop = this.teamTags[i]).style.display = "block";
  } else {
    tempStop = this.teamTags[i] = document.createElement("div");
    this.gsDiv.appendChild(tempStop);
  }
  var indexLookupKey = i.toString();
  tempStop.textContent = this.teamData[indexLookupKey].name;
  tempStop.classList.add("teamTag");
  tempStop.style.minWidth = dontForceConstraints + 2 + "px";
  tempStop.style.height = this.tagHeight + "px";
  tempStop.style.left = canCreateDiscussions + "px";
  tempStop.style.top = isSlidingUp + "px";
  if (dontForceConstraints + 2 < 170) {
    tempStop.style.minWidth = "170px";
    tempStop.style.left = canCreateDiscussions - (170 - (dontForceConstraints + 2)) / 2 + "px";
  }
  tempStop.style.backgroundColor = this.teamData[indexLookupKey].color;
}, GameSlots.prototype.tsetup = function (range) {
  var actual = Math.max.apply(null, range);
  var currentRelations = this.h / 2;
  var domId = 0;
  this.isExtended = false;
  this.nameFontSize = 15;
  this.nameHeight = 18;
  var addedRelations = currentRelations;
  var step = 1 === (x = actual) ? 0 : (2 === x ? 30 : 60) / (x - 1);
  var px = this.tagHeight + 2;
  this.slotHeight = this.nmob(addedRelations - this.nameHeight - 15);
  this.redBarWidth = Math.ceil(this.slotHeight / 55) + 1;
  this.slotWidth = this.slotHeight / 2 + this.redBarWidth;
  var GET_AUTH_URL_TIMEOUT = this.slotWidth * x + (x - 1) * step;
  if (GET_AUTH_URL_TIMEOUT > this.w) {
    this.slotWidth = Math.floor(this.w / x) - step;
    this.slotHeight = this.nmob(2 * (this.slotWidth - this.redBarWidth));
    this.redBarWidth = Math.ceil(this.slotHeight / 55) + 1;
    this.slotWidth = this.slotHeight / 2 + this.redBarWidth;
    GET_AUTH_URL_TIMEOUT = this.slotWidth * x + (x - 1) * step;
  }
  this.liveBlockSize = this.slotHeight / 20;
  var w = this.slotHeight + this.nameHeight + 15 + px;
  this.matrixHeight = this.slotHeight;
  this.matrixWidth = this.slotWidth;
  var i = 0;
  for (; i < range.length; i++) {
    var x = range[i];
    GET_AUTH_URL_TIMEOUT = this.slotWidth * x + (x - 1) * step;
    var next_planting = Math.floor((this.w - GET_AUTH_URL_TIMEOUT) / 2);
    if (x > 0) {
      this.initTeamTag(i, next_planting, w * i, GET_AUTH_URL_TIMEOUT);
    }
    var r = 0;
    for (; r < x; r++) {
      var next_grow = next_planting + r * (this.slotWidth + step);
      var width = w * i + px;
      if (domId >= this.slots.length) {
        this.slots[domId] = new Slot(domId, next_grow, width, this);
      } else {
        this.slots[domId].x = next_grow;
        this.slots[domId].y = width;
        this.slots[domId].init();
      }
      domId++;
    }
  }
  this.shownSlots = domId;
  for (; domId < this.slots.length;) {
    this.slots[domId].hide();
    domId++;
  }
  this.realHeight = w * range.length - 15;
  this.resizeElements();
}, GameSlots.prototype.setup = function (value, canCreateDiscussions) {
  if (void 0 === canCreateDiscussions && (canCreateDiscussions = false), !this.isFullscreen && this.zoom < 1.5 && value < 50) {
    this.rowCount = this.numRows(value);
  } else {
    if (!canCreateDiscussions) {
      var wholePercentWidth = Math.ceil(value / 10) + 1;
      var x = 1;
      for (; x <= wholePercentWidth; x++) {
        this.rowCount = x;
        this.setup(value, true);
        if (this.slotWidth > 0) {
          memoizedObject[0] = this.slotWidth;
          memoizedObject[1] = x;
        }
      }
      this.rowCount = 3;
    }
  }
  var index = Math.ceil(value / this.rowCount);
  var shadowYpos = Math.floor(this.h / this.rowCount);
  var diff = 2 === index ? 30 : 60;
  if (this.isExtended = this.extendedAvailable && (this.forceExtended || -1 !== this.extendedView.indexOf(value)), this.isExtended) {
    if (1 === this.rowCount) {
      diff = 30;
    } else {
      if (2 === this.rowCount) {
        var data = [0, 0, 90, 65];
        diff = index < data.length ? data[index] : 60;
      }
    }
  }
  var nextOrdinalMatchValue = 1 === this.rowCount ? 0 : 10;
  var slope = 1 === index ? 0 : diff / (index - 1);
  var curZoom = this.slotStats ? 3 : 1;
  if (this.rowCount >= 3) {
    this.nameFontSize = 10;
    this.nameHeight = 12;
  } else {
    this.nameFontSize = 15;
    this.nameHeight = 18;
  }
  this.nameFontSize = Math.ceil(this.nameFontSize * Math.max(1, .8 * this.zoom));
  this.nameHeight = Math.ceil(this.nameHeight * Math.max(1, .8 * this.zoom));
  slope = slope * this.zoom;
  this.matrixHeight = this.nmob(shadowYpos - this.nameHeight * curZoom - nextOrdinalMatchValue);
  this.redBarWidth = Math.ceil(this.matrixHeight / 55) + 1;
  this.matrixWidth = this.matrixHeight / 2 + this.redBarWidth;
  this.slotWidth = this.isExtended ? 1.7413 * this.matrixWidth : this.matrixWidth;
  var he = this.slotWidth * index + (index - 1) * slope;
  if (he > this.w) {
    this.slotWidth = Math.floor((this.w - (index - 1) * slope) / index);
    this.matrixWidth = this.isExtended ? this.slotWidth / 1.7413 : this.slotWidth;
    this.matrixHeight = this.nmob(2 * (this.matrixWidth - this.redBarWidth));
    this.redBarWidth = Math.ceil(this.matrixHeight / 55) + 1;
    this.matrixWidth = this.matrixHeight / 2 + this.redBarWidth;
    this.slotWidth = this.isExtended ? 1.7413 * this.matrixWidth : this.matrixWidth;
    he = this.slotWidth * index + (index - 1) * slope;
  }
  this.slotHeight = this.matrixHeight + this.nameHeight * curZoom;
  this.realHeight = this.slotHeight * this.rowCount + nextOrdinalMatchValue * (this.rowCount - 1);
  this.liveBlockSize = this.matrixHeight / 20;
  this.holdQueueBlockSize = this.isExtended ? .8 * this.liveBlockSize : 0;
  var offset = Math.floor((this.w - he) / 2);
  if (!canCreateDiscussions) {
    var i = 0;
    var LinkMatchWeight = 0;
    for (; LinkMatchWeight < this.rowCount; LinkMatchWeight++) {
      x = 0;
      for (; x < index; x++) {
        var h = offset + x * (this.slotWidth + slope);
        var meta = LinkMatchWeight * (this.slotHeight + nextOrdinalMatchValue);
        if (i >= this.slots.length) {
          this.slots[i] = new Slot(i, h, meta, this);
        } else {
          this.slots[i].x = h;
          this.slots[i].y = meta;
          this.slots[i].init();
        }
        i++;
      }
    }
    this.shownSlots = i;
    for (; i < this.slots.length;) {
      this.slots[i].hide();
      i++;
    }
    this.resizeElements();
  }
}, GameSlots.prototype.chatMaxH = function () {
  var hf;
  hf = 600;
  for (; hf <= 2e3; hf = hf + 50) {
    if (hf - this.realHeight >= 57) {
      return hf;
    }
  }
  return hf;
}, GameSlots.prototype.resizeElements = function () {
  var hg = this.resultsShown;
  if (this.rowCount > 1 || 1 === this.shownSlots) {
    hg = false;
  }
  var from = this.realHeight + (hg ? this.resultsBox.offsetHeight : 0);
  this.gsDiv.style.height = from + "px";
  this.lobbyBox.style.height = Math.max(from + 7, 500) + "px";
  this.resultsBox.style.maxHeight = from - 5 + 14 + "px";
  if (hg) {
    if (1 === this.shownSlots) {
      this.resultsBox.style.maxHeight = "140px";
    } else {
      if (2 === this.shownSlots) {
        this.resultsBox.style.maxHeight = "180px";
      } else {
        this.resultsBox.style.maxHeight = "240px";
      }
    }
  }
  if (!this.chatExpanded) {
    this.chatBox.style.height = this.chatMaxH() - from + "px";
    this.scrollChatDown();
  }
}, GameSlots.prototype.resetAll = function () {
  var indexLookupKey = 0;
  for (; indexLookupKey < this.slots.length; indexLookupKey++) {
    this.slots[indexLookupKey].vacantClear();
  }
  this.cidSlots = {};
}, GameSlots.prototype.reset = function () {
  var indexLookupKey = 0;
  for (; indexLookupKey < this.slots.length; indexLookupKey++) {
    this.slots[indexLookupKey].clear();
    this.slots[indexLookupKey].slotDiv.classList.remove("np");
  }
}, GameSlots.prototype.setTarget = function (ballNumber) {
  if (this.targetSlotId !== ballNumber) {
    if (-1 !== this.targetSlotId) {
      this.slots[this.targetSlotId].setIsTargetted(false);
    }
    this.targetSlotId = ballNumber;
    if (-1 !== ballNumber) {
      this.slots[ballNumber].setIsTargetted(true);
    }
  }
}, GameSlots.prototype.CID = function (ballNumber) {
  return this.slots[this.cidSlots[ballNumber]];
}, GameSlots.prototype.getSlot = function (shop, ballNumber) {
  var i;
  if (null !== (void 0 === ballNumber ? null : ballNumber) && -1 === this.teamMembers[ballNumber].indexOf(shop)) {
    this.teamMembers[ballNumber].push(shop);
  }
  i = 0;
  for (; i < this.slots.length; i++) {
    if (-1 === this.slots[i].cid) {
      return this.slots[i].cid = shop, this.cidSlots[shop] = i, true;
    }
  }
  return this.slots[i] = new Slot(i, 0, 0, this), this.slots[i].cid = shop, this.slots[i].hide(), this.cidSlots[shop] = i, true;
}, GameSlots.prototype.chatExpand = function () {
  if (this.chatExpanded = !this.chatExpanded, this.chatExpanded ? (this.gsDiv.style.display = "none", this.chatBox.style.height = this.chatMaxH() + "px", this.scrollChatDown(), this.chatExp.setAttribute("data-original-title", "Minify")) : (this.gsDiv.style.display = "block", this.resizeElements(), this.chatExp.setAttribute("data-original-title", "Expand")), this.chatExp.classList.toggle("exUp"), this.chatExp.classList.toggle("exDown"), this.chatExp.hasAttribute("aria-describedby")) {
    let DOM_CONTENT_LOADED = this.chatExp.getAttribute("aria-describedby");
    hideElem(document.getElementById(DOM_CONTENT_LOADED));
  }
}, GameSlots.prototype.scrollChatDown = function () {
  var hh = this;
  setTimeout(function () {
    hh.chatArea.scrollTop = hh.chatArea.scrollHeight;
  }, 0);
}, Slot.prototype.init = function () {
  this.slotDiv.className = "slot";
  this.slotDiv.style.left = this.x + "px";
  this.slotDiv.style.top = this.y + "px";
  this.stageDiv.style.position = "relative";
  this.name.style.width = this.gs.matrixWidth + 2 + "px";
  this.name.style.height = this.gs.nameHeight + "px";
  this.name.style.fontSize = this.gs.nameFontSize + "px";
  this.pCan.width = this.bgCan.width = this.gs.matrixWidth;
  this.pCan.height = this.bgCan.height = this.gs.matrixHeight;
  this.queueCan.width = this.holdCan.width = 4 * this.gs.holdQueueBlockSize;
  this.holdCan.height = 4 * this.gs.holdQueueBlockSize;
  this.queueCan.height = 15 * this.gs.holdQueueBlockSize;
  this.pCan.style.top = this.bgCan.style.top = this.holdCan.style.top = this.queueCan.style.top = this.gs.nameHeight + "px";
  this.holdCan.style.left = "0px";
  var baseName = .8 * this.gs.holdQueueBlockSize;
  var middlePathName = 4 * this.gs.holdQueueBlockSize + baseName;
  if (this.name.style.left = middlePathName + "px", this.pCan.style.left = this.bgCan.style.left = middlePathName + "px", this.queueCan.style.left = middlePathName + this.pCan.width + baseName + "px", this.gs.slotStats && this.gs.matrixWidth >= 50) {
    this.stats.init();
    this.stats.statsDiv.style.left = middlePathName + "px";
    this.slotDiv.appendChild(this.stats.statsDiv);
    let hi = 1.1 * this.stats.statsDiv.childNodes[0].clientWidth;
    let hj = 2 * hi < .85 * this.gs.matrixWidth || hi > .6 * this.gs.matrixWidth;
    this.stats.winCounter.style.display = hj ? null : "none";
  } else {
    this.stats.disable();
  }
  this.slotDiv.appendChild(this.name);
  this.slotDiv.appendChild(this.stageDiv);
  this.stageDiv.appendChild(this.bgCan);
  this.stageDiv.appendChild(this.pCan);
  this.stageDiv.appendChild(this.holdCan);
  this.stageDiv.appendChild(this.queueCan);
  this.slotDiv.style.display = "block";
  this.gs.gsDiv.appendChild(this.slotDiv);
  this.v.onResized();
}, Slot.prototype.clear = function () {
  this.v.clearMainCanvas();
  this.v.clearHoldCanvas();
  this.v.clearQueueCanvas();
}, Slot.prototype.vacantClear = function () {
  delete this.gs.cidSlots[this.cid];
  this.cid = -1;
  this.clear();
  this.setName("");
  this.slotDiv.classList.remove("np");
  this.stats.winCounter.style.display = "none";
  this.stats.winCounter.textContent = "0";
}, Slot.prototype.hide = function () {
  this.slotDiv.style.display = "none";
}, Slot.prototype.setName = function (canCreateDiscussions) {
  this.name.innerHTML = canCreateDiscussions;
}, Slot.prototype.setIsTargetted = function (canCreateDiscussions) {
  if (canCreateDiscussions) {
    this.slotDiv.classList.add("target");
  } else {
    this.slotDiv.classList.remove("target");
  }
}, SlotStats.prototype.init = function () {
  this.statsDiv.style.display = "block";
  this.statsDiv.style.top = this.gs.nameHeight + this.gs.matrixHeight + "px";
  this.statsDiv.style.height = this.gs.nameHeight + "px";
  var hk = Math.min(this.gs.nameFontSize, Math.floor(this.gs.matrixWidth / 8));
  this.statsDiv.style.fontSize = hk + "px";
  let hl = 2 * this.gs.redBarWidth;
  this.statsDiv.style.width = this.gs.matrixWidth + hl + "px";
  this.winCounter.style.marginRight = hl - 2 + "px";
}, SlotStats.prototype.disable = function () {
  this.statsDiv.style.display = "none";
}, SlotStats.prototype.update = function (canCreateDiscussions, isSlidingUp) {
  this.pps.textContent = canCreateDiscussions.toFixed(2);
  this.apm.textContent = isSlidingUp.toFixed(2);
}, SlotView.prototype.changeSkin = function (i, n) {
  if (7 === i && void 0 !== n ? (this.g.monochromeSkin = n, i = 0) : this.g.monochromeSkin = false, i < 1e3 && (void 0 === this.g.skins[i] || !this.g.skins[i].data) && (i = 0), i >= 1e3 && !this.customSkinPath && (console.log("Skin unavailable - " + i), i = 0), this.slot.gs.skinOverride && (i = 1, this.g.skins[1] = this.slot.gs.skinOverride), this.skinId = i, i > 0) {
    let maindata3;
    if (i >= 1e3) {
      maindata3 = "/res/b/" + this.customSkinPath + ".png";
      this.g.skins[i] = {id: i, data: maindata3, w: 32};
      this.skinWidth = 32;
    } else {
      maindata3 = this.g.skins[i].data;
      try {
        this.skinWidth = this.g.skins[i].w;
      } catch (hm) {
        this.skinWidth = 32;
      }
    }
    this.tex.src = maindata3;
  }
}, SlotView.prototype.loadResources = function () {}, SlotView.prototype.drawBgGrid = function () {
  var artistTrack = this.slot.gs.matrixWidth - this.slot.gs.redBarWidth + 1;
  this.bgctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.bgctx.beginPath();
  this.bgctx.lineWidth = 1;
  var hn = 1;
  for (; hn < 10; hn++) {
    this.bgctx.moveTo(hn * this.block_size + .5, 0);
    this.bgctx.lineTo(hn * this.block_size + .5, this.canvas.height);
  }
  hn = 1;
  for (; hn < 20; hn++) {
    this.bgctx.moveTo(0, hn * this.block_size + .5);
    this.bgctx.lineTo(artistTrack, hn * this.block_size + .5);
  }
  this.bgctx.strokeStyle = this.slot.gs.shownSlots > 6 ? "#0c0c0c" : "#101010";
  this.bgctx.stroke();
  this.bgctx.beginPath();
  hn = 0;
  for (; hn < 9; hn++) {
    var ho = 1;
    for (; ho < 20; ho++) {
      this.bgctx.moveTo(hn * this.block_size + .75 * this.block_size, ho * this.block_size + .5);
      this.bgctx.lineTo((hn + 1) * this.block_size + .2 * this.block_size, ho * this.block_size + .5);
    }
  }
  hn = 0;
  for (; hn < 19; hn++) {
    var hp = 1;
    for (; hp < 10; hp++) {
      this.bgctx.moveTo(hp * this.block_size + .5, hn * this.block_size + .75 * this.block_size);
      this.bgctx.lineTo(hp * this.block_size + .5, (hn + 1) * this.block_size + .2 * this.block_size);
    }
  }
  this.bgctx.strokeStyle = this.slot.gs.shownSlots > 6 ? "#1c1c1c" : "#202020";
  this.bgctx.stroke();
  this.bgctx.beginPath();
  this.bgctx.strokeStyle = "#393939";
  if (1 === this.slot.gs.rowCount) {
    this.bgctx.lineWidth = 2;
    this.bgctx.strokeRect(1, 1, artistTrack - 1, this.canvas.height - 2);
  } else {
    this.bgctx.lineWidth = 1;
    this.bgctx.strokeStyle = "#1c1c1c";
    this.drawLine(this.bgctx, artistTrack - .5, 0, artistTrack - .5, this.slot.gs.matrixHeight);
  }
}, SlotView.prototype.drawGhostAndCurrent = function () {
  var hq = this.g.blockSets[this.g.activeBlock.set];
  var dist = 1 === hq.scale ? hq.blocks[this.g.activeBlock.id].blocks[this.g.activeBlock.rot] : hq.previewAs.blocks[this.g.activeBlock.id].blocks[this.g.activeBlock.rot];
  var i = dist.length;
  if (this.drawScale = hq.scale, this.ghostEnabled) {
    var k = 0;
    for (; k < i; k++) {
      var j = 0;
      for (; j < i; j++) {
        if (dist[k][j] > 0) {
          this.drawGhostBlock(this.g.ghostPiece.pos.x + j * this.drawScale, this.g.ghostPiece.pos.y + k * this.drawScale, hq.blocks[this.g.activeBlock.id].color);
        }
      }
    }
  }
  k = 0;
  for (; k < i; k++) {
    j = 0;
    for (; j < i; j++) {
      if (dist[k][j] > 0) {
        this.drawBlock(this.g.activeBlock.pos.x + j * this.drawScale, this.g.activeBlock.pos.y + k * this.drawScale, hq.blocks[this.g.activeBlock.id].color);
      }
    }
  }
  this.drawScale = 1;
}, SlotView.prototype.redraw = function () {
  if (!this.redrawBlocked && this.g) {
    if (this.clearMainCanvas(), !this.g.isInvisibleSkin) {
      var uivar = 0;
      for (; uivar < 20; uivar++) {
        var prop = 0;
        for (; prop < 10; prop++) {
          this.drawBlock(prop, uivar, this.g.matrix[uivar][prop]);
        }
      }
    }
    this.drawGhostAndCurrent();
    var artistTrack = this.slot.gs.matrixWidth - this.slot.gs.redBarWidth + 1;
    if (this.g.redBar > 0) {
      this.drawRectangle(this.ctx, artistTrack, (20 - this.g.redBar) * this.block_size, this.slot.gs.redBarWidth, this.g.redBar * this.block_size, "#FF270F");
    }
    this.afterRedraw();
  }
}, SlotView.prototype.clearMainCanvas = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}, SlotView.prototype.clearHoldCanvas = function () {
  this.hctx.clearRect(0, 0, this.holdCanvas.width, this.holdCanvas.height);
}, SlotView.prototype.clearQueueCanvas = function () {
  this.qctx.clearRect(0, 0, this.queueCanvas.width, this.queueCanvas.height);
}, SlotView.prototype.drawBlockOnCanvas = function (yDelta, xDelta, i1, dontForceConstraints, path) {
  path = path || this.holdQueueBlockSize;
  var writers = null;
  if (writers = dontForceConstraints === this.MAIN ? this.ctx : dontForceConstraints === this.HOLD ? this.hctx : this.qctx, 0 === this.skinId) {
    var GET_AUTH_URL_TIMEOUT = this.g.monochromeSkin && i1 <= 7 ? this.g.monochromeSkin : this.g.colors[i1];
    this.drawRectangle(writers, yDelta * path, xDelta * path, path, path, GET_AUTH_URL_TIMEOUT);
  } else {
    let b = this.skinWidth;
    writers.drawImage(this.tex, this.g.coffset[i1] * b, 0, b, b, yDelta * path, xDelta * path, path, path);
  }
}, SlotView.prototype.drawBlock = function (shareDiff, index, preDiv) {
  if (preDiv && shareDiff >= 0 && index >= 0 && shareDiff < 10 && index < 20) {
    var GET_AUTH_URL_TIMEOUT = this.drawScale * this.block_size;
    if (this.skinId) {
      let count = this.skinWidth;
      this.ctx.drawImage(this.tex, this.g.coffset[preDiv] * count, 0, count, count, shareDiff * this.block_size, index * this.block_size, GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
    } else {
      var artistTrack = this.g.monochromeSkin && preDiv <= 7 ? this.g.monochromeSkin : this.g.colors[preDiv];
      this.drawRectangle(this.ctx, shareDiff * this.block_size, index * this.block_size, GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT, artistTrack);
    }
  }
}, SlotView.prototype.drawGhostBlock = function (thisStart, start, i) {
  if (thisStart >= 0 && start >= 0 && thisStart < 10 && start < 20) {
    var GET_AUTH_URL_TIMEOUT = this.drawScale * this.block_size;
    if (0 === this.ghostSkinId) {
      if (this.ctx.globalAlpha = .5, this.skinId > 0) {
        let precision = this.skinWidth;
        this.ctx.drawImage(this.tex, this.g.coffset[i] * precision, 0, precision, precision, thisStart * this.block_size, start * this.block_size, GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
      } else {
        this.drawBlock(thisStart, start, i);
      }
      this.ctx.globalAlpha = 1;
    } else {
      var hr = this.ghostSkins[this.ghostSkinId];
      this.ctx.drawImage(this.ghostTex, (this.g.coffset[i] - 2) * hr.w, 0, hr.w, hr.w, thisStart * this.block_size, start * this.block_size, GET_AUTH_URL_TIMEOUT, GET_AUTH_URL_TIMEOUT);
    }
  }
}, SlotView.prototype.drawRectangle = function (KUTE, el, from, to, ops, mmCoreSecondsYear) {
  KUTE.beginPath();
  KUTE.rect(el, from, to, ops);
  KUTE.fillStyle = mmCoreSecondsYear;
  KUTE.fill();
}, SlotView.prototype.drawLine = function (mActionBar, command, selected_group_obj_array, selected_group, isBgroundImg) {
  mActionBar.beginPath();
  mActionBar.moveTo(command, selected_group_obj_array);
  mActionBar.lineTo(selected_group, isBgroundImg);
  mActionBar.stroke();
}, SlotView.prototype.paintMatrixWithColor = function (signedTxHex) {
  var IS_HANDLED = 0;
  for (; IS_HANDLED < 20; IS_HANDLED++) {
    var signedTransactionsCounter = 0;
    for (; signedTransactionsCounter < 10; signedTransactionsCounter++) {
      if (this.g.matrix[IS_HANDLED][signedTransactionsCounter] > 0) {
        this.g.matrix[IS_HANDLED][signedTransactionsCounter] = signedTxHex;
      }
    }
  }
}, SlotView.prototype.updateLiveMatrix = function (componentStack, isSlidingUp) {
  this.clearMainCanvas();
  var parentComponentDef = componentStack.length;
  var criterion_index = 0;
  for (; criterion_index < parentComponentDef; criterion_index++) {
    var currentTrack = componentStack[criterion_index].length;
    var order = 0;
    for (; order < currentTrack; order++) {
      if (componentStack[criterion_index][order] > 0) {
        this.drawBlockOnCanvas(order, criterion_index, componentStack[criterion_index][order], this.MAIN, this.slot.gs.liveBlockSize);
      }
    }
  }
  var artistTrack = this.slot.gs.matrixWidth - this.slot.gs.redBarWidth + 1;
  this.drawLine(this.ctx, artistTrack, 0, artistTrack, this.slot.gs.matrixHeight);
  this.drawRectangle(this.ctx, artistTrack, 0, this.slot.gs.redBarWidth, this.slot.gs.matrixHeight, "black");
  if (isSlidingUp > 0) {
    this.drawRectangle(this.ctx, artistTrack, (20 - isSlidingUp) * this.slot.gs.liveBlockSize, this.slot.gs.redBarWidth, isSlidingUp * this.slot.gs.liveBlockSize, "#FF270F");
  }
  this.afterRedraw();
}, SlotView.prototype.updateTextBar = function () {
  if (this.slot.gs.slotStats) {
    var hs = this.slot.gs.p.timestamp() - this.restartedAt;
    var artistTrack = Math.round(100 * this.g.placedBlocks / (hs / 1e3)) / 100;
    var GET_AUTH_URL_TIMEOUT = Math.round(100 * this.g.gamedata.linesSent / (hs / 6e4)) / 100;
    this.slot.stats.update(artistTrack, GET_AUTH_URL_TIMEOUT);
  }
}, SlotView.prototype.onCreate = function () {}, SlotView.prototype.onReady = function () {
  this.g.updateQueueBox();
  this.g.redrawHoldBox();
  this.clearMainCanvas();
}, SlotView.prototype.onRestart = function () {
  this.g.redrawHoldBox();
  this.redraw();
  this.restartedAt = this.slot.gs.p.timestamp();
  if (this.slot.gs.slotStats) {
    this.slot.stats.update(0, 0);
  }
}, SlotView.prototype.onBlockHold = function () {
  this.g.redrawHoldBox();
  this.redraw();
}, SlotView.prototype.onBlockMove = function (canCreateDiscussions) {
  this.redraw();
}, SlotView.prototype.onFinesseChange = function () {}, SlotView.prototype.onGameOver = function () {
  this.paintMatrixWithColor(9);
}, SlotView.prototype.onBlockLocked = function () {}, SlotView.prototype.onLinesCleared = function () {}, SlotView.prototype.onScoreChanged = function () {}, SlotView.prototype.onResized = function () {
  this.block_size = this.slot.gs.liveBlockSize;
  this.holdQueueBlockSize = this.slot.gs.holdQueueBlockSize;
  this.drawBgGrid();
  this.clearMainCanvas();
  if (this.slot.gs.isExtended) {
    this.QueueHoldEnabled = true;
    this.holdCanvas.style.display = "block";
    this.queueCanvas.style.display = "block";
  } else {
    this.QueueHoldEnabled = false;
    this.holdCanvas.style.display = "none";
    this.queueCanvas.style.display = "none";
  }
}, SlotView.prototype.printTextBg = function () {
  this.ctx.save();
  this.ctx.globalAlpha = .8;
  this.ctx.beginPath();
  var value = 1 === this.slot.gs.shownSlots ? .35 * this.slot.gs.matrixHeight : .65 * this.slot.gs.matrixHeight;
  this.ctx.rect(0, Math.round(value), this.slot.gs.matrixWidth, Math.round(this.slot.gs.matrixHeight / 5.7));
  this.ctx.fillStyle = "#090909";
  this.ctx.fill();
  this.ctx.restore();
}, SlotView.prototype.printSlotPlace = function (magnifier) {
  var $magnifier = this.slot.gs.p.getPlaceColor(magnifier);
  this.printTextBg();
  this.ctx.fillStyle = $magnifier.color;
  var ht = Math.round(this.slot.gs.matrixHeight / 10);
  this.ctx.font = "bold " + ht + 'px "Exo 2"';
  this.ctx.textAlign = "center";
  var value = 1 === this.slot.gs.shownSlots ? .47 * this.slot.gs.matrixHeight : .77 * this.slot.gs.matrixHeight;
  this.ctx.fillText($magnifier.str, Math.round(this.slot.gs.matrixWidth / 2), Math.round(value));
}, SlotView.prototype.printSlotNotPlaying = function () {
  this.printTextBg();
  this.ctx.fillStyle = "#999999";
  var hu = Math.round(this.slot.gs.matrixHeight / 12);
  this.ctx.font = "bold " + hu + 'px "Exo 2"';
  this.ctx.textAlign = "center";
  var value = 1 === this.slot.gs.shownSlots ? .475 * this.slot.gs.matrixHeight : .77 * this.slot.gs.matrixHeight;
  this.ctx.fillText(i18n.notPlaying, Math.round(this.slot.gs.matrixWidth / 2), Math.round(value));
}, SlotView.prototype.afterRedraw = function () {
  var hv = this.slot.gs.p.Live.places;
  if (this.slot.cid in hv) {
    if (hv[this.slot.cid]) {
      this.printSlotPlace(hv[this.slot.cid]);
    } else {
      this.printSlotNotPlaying();
    }
  }
}, StatsManager.prototype.setView = function (canCreateDiscussions) {
  this.view = canCreateDiscussions;
  this.ff = canCreateDiscussions.createFastFont();
  this.ff.init(this.render.bind(this));
}, StatsManager.prototype.adjustToGameMode = function () {
  this.resetAll();
  this.applyShownStats(this.view.g.Settings.shownStats[this.view.g.isPmode(false)]);
  this.render();
}, StatsManager.prototype.initDefault = function (canCreateDiscussions) {
  this.addStat(new StatLine("CLOCK", i18n.roundTime, 0), false);
  this.addStat(new StatLine("SCORE", i18n.score, 10), false);
  this.addStat(new StatLine("LINES", "Lines", 15), false);
  this.addStat(new StatLine("ATTACK", i18n.attack, 20), false);
  this.addStat(new StatLine("RECV", i18n.received, 30), false);
  this.addStat(new StatLine("FINESSE", i18n.finesse, 40), false);
  this.addStat(new StatLine("PPS", i18n.PPS, 50), false);
  this.addStat(new StatLine("KPP", i18n.KPP, 60), false);
  this.addStat(new StatLine("APM", i18n.APM, 70), false);
  this.addStat(new StatLine("BLOCKS", "#", 80), false);
  this.addStat(new StatLine("VS", "VS", 90), false);
  this.addStat(new StatLine("WASTE", "Wasted", 100), false);
  this.addStat(new StatLine("HOLD", "Hold", 110), false);
  this.get("CLOCK").initialVal = "0.00";
  this.applyShownStats(this.shown);
  this.reorder();
}, StatsManager.prototype.applyShownStats = function (boardManager) {
  var PL$13 = Object.keys(this.stats);
  var PL$17 = 0;
  for (; PL$17 < PL$13.length; PL$17++) {
    if (boardManager & 1 << PL$17) {
      this.get(PL$13[PL$17]).enable();
    } else {
      this.get(PL$13[PL$17]).disable();
    }
  }
}, StatsManager.prototype.get = function (ballNumber) {
  return this.stats[ballNumber];
}, StatsManager.prototype.render = function () {
  this.ff.renderLines(this.ordered);
  this.dirty = false;
}, StatsManager.prototype.addStat = function (canCreateDiscussions, isSlidingUp) {
  if (!(canCreateDiscussions.id in this.stats)) {
    this.stats[canCreateDiscussions.id] = canCreateDiscussions;
    canCreateDiscussions.manager = this;
    canCreateDiscussions.enabled = true;
    if (isSlidingUp) {
      this.reorder();
    }
  }
}, StatsManager.prototype.reorder = function () {
  this.ordered.length;
  this.ordered = Object.values(this.stats);
  this.ordered.sort((oidB, oidA) => {
    return oidB.enabled ? oidA.enabled ? oidB.order > oidA.order ? 1 : oidA.order > oidB.order ? -1 : 0 : -1 : 1;
  });
  for (; this.ordered.length && !this.ordered[this.ordered.length - 1].enabled;) {
    this.ordered.pop();
  }
  for (; this.labelsElem.firstChild;) {
    this.labelsElem.removeChild(this.labelsElem.firstChild);
  }
  var indexLookupKey = 0;
  for (; indexLookupKey < this.ordered.length; ++indexLookupKey) {
    if (this.ordered[indexLookupKey].enabled) {
      this.labelsElem.appendChild(this.ordered[indexLookupKey].label);
    }
  }
}, StatsManager.prototype.resetAll = function () {
  var indexLookupKey;
  for (indexLookupKey in this.stats) {
    this.stats[indexLookupKey].reset();
  }
  this.dirty = true;
}, StatLine.prototype.set = function (canCreateDiscussions) {
  return canCreateDiscussions === this.value || (this.value = canCreateDiscussions, this.enabled && (this.manager.dirty = true)), this;
}, StatLine.prototype.enable = function () {
  return this.enabled = true, this.label.style.display = null, this;
}, StatLine.prototype.disable = function () {
  return this.locked || (this.enabled = false, hideElem(this.label)), this;
}, StatLine.prototype.reset = function () {
  return this.resets ? (this.value = this.initialVal, this) : this;
}, StatLine.prototype.setLock = function (canCreateDiscussions) {
  return this.locked = canCreateDiscussions, this;
}, StatLine.prototype.setOrder = function (canCreateDiscussions) {
  return this.order = canCreateDiscussions, this;
}, GameCaption.prototype.create = function () {
  var artistTrack = document.createElement("div");
  return this.parent.appendChild(artistTrack), artistTrack.style.width = "242px", artistTrack.classList.add("gCapt"), artistTrack;
}, GameCaption.prototype.hide = function (ballNumber) {
  if (void 0 === ballNumber) {
    var indexLookupKey;
    for (indexLookupKey in this.captions) {
      this.captions[indexLookupKey].style.display = "none";
    }
  } else {
    if (ballNumber in this.captions) {
      this.captions[ballNumber].style.display = "none";
    }
  }
}, GameCaption.prototype.hideExcept = function (value) {
  var lastValue;
  for (lastValue in this.captions) {
    if (lastValue != value) {
      this.captions[lastValue].style.display = "none";
    }
  }
}, GameCaption.prototype.spectatorMode = function () {
  if (this.hide(), this.SPECTATOR_MODE in this.captions) {
    this.captions[this.SPECTATOR_MODE].style.display = "block";
  } else {
    var container = this.captions[this.SPECTATOR_MODE] = this.create();
    container.style.top = "288px";
    container.style.height = "73px";
    container.style.color = "#CBD600";
    var data = document.createElement("div");
    var CSS_TAGS_ON_TOP = document.createElement("div");
    data.textContent = i18n.specMode;
    data.style.fontSize = "22px";
    data.style.marginTop = "7px";
    CSS_TAGS_ON_TOP.textContent = i18n.endSpec;
    CSS_TAGS_ON_TOP.style.fontSize = "15px";
    CSS_TAGS_ON_TOP.style.marginTop = "7px";
    container.appendChild(data);
    container.appendChild(CSS_TAGS_ON_TOP);
  }
}, GameCaption.prototype.outOfFocus = function (value) {
  if (this.GAME_PLACE in this.captions && "block" === this.captions[this.GAME_PLACE].style.display) {
    return;
  }
  if (this.OUT_OF_FOCUS in this.captions) {
    return void (this.captions[this.OUT_OF_FOCUS].style.display = "block");
  }
  var container = this.captions[this.OUT_OF_FOCUS] = this.create();
  let dataWorkedMinutes = 168;
  if (value && value.top) {
    dataWorkedMinutes = value.top;
  }
  container.style.top = dataWorkedMinutes + "px";
  container.style.height = "97px";
  container.style.color = "#CBD600";
  var data = document.createElement("div");
  var CSS_TAGS_ON_TOP = document.createElement("div");
  data.textContent = i18n.notFocused;
  data.style.fontSize = "30px";
  data.style.marginTop = "11px";
  CSS_TAGS_ON_TOP.textContent = i18n.clickToFocus;
  CSS_TAGS_ON_TOP.style.fontSize = "16px";
  CSS_TAGS_ON_TOP.style.marginTop = "7px";
  container.appendChild(data);
  container.appendChild(CSS_TAGS_ON_TOP);
}, GameCaption.prototype.readyGo = function (string) {
  var command_codes;
  if (this.hideExcept(this.MODE_INFO), this.READY_GO in this.captions) {
    this.captions[this.READY_GO].style.display = "block";
  } else {
    (command_codes = this.captions[this.READY_GO] = this.create()).style.opacity = 1;
    command_codes.style.top = "264px";
    command_codes.style.height = "73px";
    command_codes.style.color = "#CBD600";
    command_codes.style.fontWeight = "bold";
  }
  (command_codes = this.captions[this.READY_GO]).textContent = "";
  var data = document.createElement("div");
  data.style.fontSize = "31px";
  data.style.marginTop = "15px";
  data.textContent = 0 === string ? i18n.ready : i18n.go;
  command_codes.appendChild(data);
}, GameCaption.prototype.modeInfo = function (len, isSlidingUp) {
  if ("" != len) {
    var PL$4;
    if (this.MODE_INFO in this.captions) {
      this.captions[this.MODE_INFO].style.display = "block";
    } else {
      (PL$4 = this.captions[this.MODE_INFO] = this.create()).style.opacity = 1;
      PL$4.style.top = "90px";
      PL$4.style.color = "rgb(107 180 255)";
      PL$4.style.fontWeight = "bold";
    }
    if ((PL$4 = this.captions[this.MODE_INFO]).textContent = "", PL$4.style.top = "90px", 0 == isSlidingUp.t) {
      var PL$5 = document.createElement("div");
      PL$5.style.fontSize = "20px";
      PL$5.style.marginTop = "15px";
      PL$5.textContent = "TASK:";
      PL$5.style.color = "#CBD600";
      PL$4.appendChild(PL$5);
    }
    var x = document.createElement("div");
    x.style.fontSize = "19px";
    x.style.marginTop = "4px";
    x.style.marginBottom = "15px";
    x.textContent = len;
    PL$4.appendChild(x);
    if (1 == isSlidingUp.t) {
      PL$4.style.top = "236px";
      x.style.marginBottom = "5px";
      PL$4.classList.add("transitionCaption");
      this._fadeOut(PL$4, 4e3);
      x.style.color = "yellow";
    }
  } else {
    this.hide(this.MODE_INFO);
  }
}, GameCaption.prototype.modeComplete = function (canCreateDiscussions) {
  var command_codes;
  if (this.hide(), this.MODE_COMPLETE in this.captions) {
    this.captions[this.MODE_COMPLETE].style.display = "block";
  } else {
    (command_codes = this.captions[this.MODE_COMPLETE] = this.create()).style.opacity = 1;
    command_codes.style.top = "272px";
    command_codes.style.color = "#00db00";
  }
  (command_codes = this.captions[this.MODE_COMPLETE]).textContent = "";
  var data = document.createElement("div");
  data.style.fontSize = "27px";
  data.style.marginTop = "15px";
  data.style.marginBottom = "15px";
  if (canCreateDiscussions) {
    if (1 === canCreateDiscussions) {
      data.innerHTML = "✔ All done! Nice.";
    }
  } else {
    data.innerHTML = "✔ Completed";
  }
  command_codes.appendChild(data);
  data.classList.add("fadeInTop");
}, GameCaption.prototype.paused = function (props) {
  var directiveProcessors;
  if (this.PAUSED in this.captions) {
    this.captions[this.PAUSED].style.display = "block";
  } else {
    (directiveProcessors = this.captions[this.PAUSED] = this.create()).style.opacity = 1;
    directiveProcessors.style.top = "387px";
    directiveProcessors.style.color = "white";
    directiveProcessors.style.backgroundColor = null;
  }
  (directiveProcessors = this.captions[this.PAUSED]).textContent = "";
  var $node = document.createElement("div");
  if ($node.style.fontSize = "20px", $node.style.marginTop = "4px", $node.style.marginBottom = "15px", $node.className = "pausedSign", $node.innerHTML = "PAUSED", directiveProcessors.appendChild($node), $node.classList.add("fadeIn"), props.skip) {
    var display = document.createElement("div");
    display.style.marginBottom = "4px";
    display.style.fontSize = "13px";
    display.textContent = "Any key to resume";
    $node.appendChild(display);
  }
  if (props.sec) {
    var display = document.createElement("div");
    display.className = "pauseProg";
    display.style.animationDuration = Math.round(props.sec).toFixed(1) + "s";
    $node.appendChild(display);
  }
}, GameCaption.prototype.mapLoading = function (diff) {
  var container;
  if (this.hide(), this.MAP_LOADING in this.captions) {
    this.captions[this.MAP_LOADING].style.display = "block";
  } else {
    (container = this.captions[this.MAP_LOADING] = this.create()).style.opacity = 1;
    container.style.top = "266px";
    container.style.height = "69px";
    container.style.color = "white";
  }
  (container = this.captions[this.MAP_LOADING]).textContent = "";
  var data = document.createElement("img");
  data.src = CDN_URL("/res/svg/spinWhite.svg");
  data.style.width = "30px";
  data.style.marginTop = "5px";
  container.appendChild(data);
  var CSS_TAGS_ON_TOP = document.createElement("div");
  CSS_TAGS_ON_TOP.style.fontSize = "22px";
  CSS_TAGS_ON_TOP.style.marginTop = "1px";
  CSS_TAGS_ON_TOP.innerHTML = diff ? "Custom mode loading" : i18n.mapLoading;
  container.appendChild(CSS_TAGS_ON_TOP);
}, GameCaption.prototype.button = function (boardManager) {
  var settingHandler;
  if (this.BUTTON in this.captions) {
    this.captions[this.BUTTON].style.display = "block";
  } else {
    (settingHandler = this.captions[this.BUTTON] = this.create()).style.opacity = 1;
    settingHandler.style.top = "372px";
    settingHandler.style.height = "59px";
    settingHandler.style.color = "white";
  }
  (settingHandler = this.captions[this.BUTTON]).innerHTML = "";
  var value = document.createElement("a");
  value.href = "javascript:void(0);";
  value.style.marginTop = "8px";
  value.classList.add("btnNX2", "btnNX-lrg", "green");
  value.innerHTML = "NEXT";
  if (boardManager.handler) {
    value.addEventListener("click", boardManager.handler);
  }
  settingHandler.appendChild(value);
}, GameCaption.prototype.gamePlace = function (canCreateDiscussions) {
  if (this.hide(this.OUT_OF_FOCUS), this.hide(this.SPEED_LIMIT), this.GAME_PLACE in this.captions) {
    this.captions[this.GAME_PLACE].style.display = "block";
    this.captions[this.GAME_PLACE].textContent = "";
  } else {
    (container = this.captions[this.GAME_PLACE] = this.create()).style.opacity = .91;
    container.style.top = "168px";
    container.style.height = "97px";
    container.style.color = "#CBD600";
    container.style.fontWeight = "bold";
  }
  var container = this.captions[this.GAME_PLACE];
  var color1hsl = canCreateDiscussions.getPlaceColor(canCreateDiscussions.place);
  var color3hsl = document.createElement("div");
  var data = document.createElement("div");
  color3hsl.textContent = color1hsl.str;
  color3hsl.style.fontSize = "32px";
  color3hsl.style.marginTop = "11px";
  color3hsl.style.color = color1hsl.color;
  data.style.fontSize = "16px";
  data.style.marginTop = "7px";
  if (canCreateDiscussions.Live.LiveGameRunning) {
    data.style.color = "white";
    data.textContent = i18n.waitNext;
  } else {
    data.style.color = "yellow";
    data.style.fontWeight = "bold";
    data.textContent = i18n.pressStart;
  }
  container.appendChild(color3hsl);
  container.appendChild(data);
}, GameCaption.prototype.speedWarning = function (canCreateDiscussions) {
  if (!(this.GAME_PLACE in this.captions) || "block" !== this.captions[this.GAME_PLACE].style.display) {
    if (this.SPEED_LIMIT in this.captions) {
      this.captions[this.SPEED_LIMIT].style.display = "block";
    } else {
      (CustomTests = this.captions[this.SPEED_LIMIT] = this.create()).style.top = "216px";
      CustomTests.style.height = "97px";
      CustomTests.style.backgroundColor = "red";
      CustomTests.style.fontWeight = "bold";
      CustomTests.classList.add("transitionCaption");
      var emoticonI18n = document.createElement("div");
      emoticonI18n.style.fontSize = "31px";
      emoticonI18n.style.marginTop = "15px";
      emoticonI18n.style.color = "white";
      emoticonI18n.textContent = i18n.slowDown;
      CustomTests.appendChild(emoticonI18n);
      var element = document.createElement("div");
      element.id = "slSubT";
      element.style.fontSize = "16px";
      element.style.marginTop = "7px";
      element.style.color = "white";
      element.style.fontWeight = "normal";
      CustomTests.appendChild(element);
    }
    var CustomTests;
    (CustomTests = this.captions[this.SPEED_LIMIT]).getElementsByTagName("div")[1].innerHTML = i18n.speedLimitIs + " <b>" + canCreateDiscussions.toFixed(1) + "</b> PPS";
    if (this.speedTimout) {
      window.clearTimeout(this.speedTimout);
    }
    this._fadeOut(CustomTests, 300);
  }
}, GameCaption.prototype._fadeOut = function (canCreateDiscussions, e, isSlidingUp, dontForceConstraints) {
  if (void 0 === isSlidingUp) {
    isSlidingUp = null;
  }
  if (void 0 === dontForceConstraints) {
    dontForceConstraints = 1;
  }
  canCreateDiscussions.classList.remove("transitionCaption");
  canCreateDiscussions.classList.add("noTransition");
  canCreateDiscussions.style.opacity = dontForceConstraints;
  var hw = this;
  this.speedTimout = window.setTimeout(function () {
    canCreateDiscussions.classList.remove("noTransition");
    canCreateDiscussions.classList.add("transitionCaption");
    if (null !== isSlidingUp) {
      canCreateDiscussions.style.transition = "all " + isSlidingUp + "s ease-out";
    }
    canCreateDiscussions.style.opacity = 0;
    hw.speedTimout = null;
  }, e);
}, GameCaption.prototype.newPB = function (canCreateDiscussions) {
  if (this.hide(), this.NEW_PERSONAL_BEST in this.captions) {
    this.captions[this.NEW_PERSONAL_BEST].style.display = "block";
  } else {
    (window = this.captions[this.NEW_PERSONAL_BEST] = this.create()).style.opacity = 1;
    window.style.top = "168px";
    window.style.paddingTop = "11px";
    window.classList.add("transitionCaption");
    var processEvaluatorsCallback = document.createElement("div");
    processEvaluatorsCallback.style.fontSize = "40px";
    processEvaluatorsCallback.style.fontWeight = "bold";
    processEvaluatorsCallback.style.color = "#fafad2";
    window.appendChild(processEvaluatorsCallback);
    var universalSendCommand = document.createElement("div");
    universalSendCommand.style.fontSize = "31px";
    universalSendCommand.style.marginTop = "4px";
    universalSendCommand.style.color = "yellow";
    universalSendCommand.textContent = i18n.newPB;
    window.appendChild(universalSendCommand);
    var srcToEval = document.createElement("div");
    srcToEval.id = "slSubT";
    srcToEval.style.fontSize = "16px";
    srcToEval.style.marginTop = "12px";
    srcToEval.style.color = "white";
    srcToEval.style.fontWeight = "normal";
    window.appendChild(srcToEval);
    var _renderTimer = document.createElement("div");
    _renderTimer.className = "gCapt";
    let hx = _renderTimer.style;
    hx.fontSize = "14px";
    hx.marginTop = "14px";
    hx.opacity = "1";
    hx.position = "initial";
    hx.paddingBottom = "11px";
    hx.color = "grey";
    window.appendChild(_renderTimer);
  }
  var window = this.captions[this.NEW_PERSONAL_BEST];
  if (true === canCreateDiscussions) {
    window.style.height = "184px";
    window.style.top = "168px";
    window.getElementsByTagName("div")[2].textContent = i18n.firstPB;
    hideElem(window.getElementsByTagName("div")[0]);
    hideElem(window.getElementsByTagName("div")[3]);
  } else {
    if (canCreateDiscussions) {
      window.style.height = "235px";
      window.style.top = "142px";
      window.getElementsByTagName("div")[0].innerHTML = canCreateDiscussions.newS;
      let data = {prevPB: "<b>" + canCreateDiscussions.prevS + "</b>", prevAgo: "<b>" + canCreateDiscussions.days + " " + i18n.daysAgo + "</b>", PBdiff: "<b>" + canCreateDiscussions.diffS + "</b>"};
      window.getElementsByTagName("div")[2].innerHTML = trans(i18n.infoPB, data);
      window.getElementsByTagName("div")[3].innerHTML = canCreateDiscussions.modeTitle;
      showElem(window.getElementsByTagName("div")[0]);
      showElem(window.getElementsByTagName("div")[3]);
    }
  }
}, GameCaption.prototype.loading = function (value, isSlidingUp) {
  var cookiesToString;
  if (this.hide(), this.LOADING in this.captions) {
    this.captions[this.LOADING].style.display = "block";
  } else {
    (cookiesToString = this.captions[this.LOADING] = this.create()).style.opacity = 1;
    cookiesToString.style.top = "214px";
    cookiesToString.style.height = "125px";
    cookiesToString.style.color = "white";
  }
  (cookiesToString = this.captions[this.LOADING]).textContent = "";
  var data = document.createElement("img");
  if (isSlidingUp) {
    if (1 === isSlidingUp) {
      data.src = CDN_URL("/res/svg/cancel.svg");
    } else {
      if (2 === isSlidingUp) {
        data.src = CDN_URL("/res/img/i/troll.png");
      }
    }
  } else {
    data.src = CDN_URL("/res/svg/spinWhite.svg");
  }
  data.style.width = "60px";
  data.style.marginTop = "15px";
  cookiesToString.appendChild(data);
  var cookies = document.createElement("div");
  cookies.style.fontSize = "22px";
  cookies.style.marginTop = "6px";
  cookies.innerHTML = value;
  cookiesToString.appendChild(cookies);
}, GameCaption.prototype.liveRaceFinished = function () {
  if (this.RACE_FINISHED in this.captions) {
    return this.captions[this.RACE_FINISHED].style.display = "block", void this._fadeOut(this.captions[this.RACE_FINISHED], 5e3, 3, .85);
  }
  var CustomTests = this.captions[this.RACE_FINISHED] = this.create();
  CustomTests.style.top = "174px";
  CustomTests.style.height = "63px";
  CustomTests.style.color = "#CBD600";
  var emoticonI18n = document.createElement("div");
  var element = document.createElement("div");
  emoticonI18n.textContent = i18n.raceFin;
  emoticonI18n.style.color = "yellow";
  emoticonI18n.style.fontSize = "19px";
  emoticonI18n.style.marginTop = "4px";
  element.textContent = i18n.raceFinInfo;
  element.style.fontSize = "12px";
  element.style.marginTop = "1px";
  CustomTests.appendChild(emoticonI18n);
  CustomTests.appendChild(element);
  this._fadeOut(CustomTests, 5e3, 3, .85);
}, GameCaption.prototype.gameWarning = function (tpl, name, items) {
  var item = 3e3;
  if (items && items.fade_after && (item = items.fade_after), void 0 === name && (name = ""), this.GAME_WARNING in this.captions) {
    return this.captions[this.GAME_WARNING].style.display = "block", this.captions[this.GAME_WARNING].getElementsByTagName("div")[0].innerHTML = tpl, this.captions[this.GAME_WARNING].getElementsByTagName("div")[1].innerHTML = name, void this._fadeOut(this.captions[this.GAME_WARNING], item, 2, .85);
  }
  var container = this.captions[this.GAME_WARNING] = this.create();
  container.style.top = "216px";
  container.style.paddingBottom = "15px";
  container.style.backgroundColor = "red";
  container.style.fontWeight = "bold";
  container.classList.add("transitionCaption");
  var c = document.createElement("div");
  c.style.fontSize = "31px";
  c.style.marginTop = "15px";
  c.style.color = "white";
  c.innerHTML = tpl;
  container.appendChild(c);
  var data = document.createElement("div");
  data.id = "slSubT";
  data.style.fontSize = "16px";
  data.style.marginTop = "7px";
  data.style.color = "white";
  data.style.fontWeight = "normal";
  data.style.padding = "0px 6px";
  data.innerHTML = name;
  container.appendChild(data);
  this._fadeOut(container, item, 2, .85);
}, Mobile.prototype.isMobile = function () {
  let hy = localStorage.getItem("mobile");
  return null !== hy ? "false" !== hy && hy : this.isMobileDetect();
}, Mobile.prototype.isMobileDetect = function () {
  let artistTrack = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(artistTrack) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(artistTrack.substr(0, 4));
}, Mobile.prototype.changeStyle = function () {
  document.querySelector("meta[name=viewport]").setAttribute("content", "width=500, user-scalable=0");
  $(".players").hide();
  $(".players").css("margin-left", "22px");
  $(".navbar-brand").attr("href", "javascript:void(0)");
  $("#main").css("float", "none");
  $("#main").css("margin-right", "auto");
  $("#main").css("margin-left", "auto");
  $("#gameFrame").css("width", "auto");
  $("#gc").css("padding", "0");
  $("html").css("width", "500px");
  $(".navbar").css("margin-bottom", "0");
  $("#gameFrame").css("margin-top", "10px");
  $("#gstats").css("padding-top", "10px");
  $("#tcc").addClass("tc").show();
  $("#touchBtn").parent().parent().show();
  $("#touchBtnMove").parent().parent().show();
  $("#touch").prop("checked", true);
  $("#touchBtn").prop("checked", true);
  $("#touchBtnMove").prop("checked", false);
  $("#app").css("touch-action", "manipulation");
}, Mobile.prototype.initForMobile = function () {
  function resolve(name) {
    if (!hz.draggingEnabled) {
      name.preventDefault();
      name.stopPropagation();
    }
  }
  function getFileJSON(fileData) {
    if (!hz.draggingEnabled) {
      fileData.preventDefault();
      fileData.stopPropagation();
    }
  }
  function concatenateSourceMaps(outFile) {
    if (!hz.draggingEnabled) {
      outFile.preventDefault();
      outFile.stopPropagation();
    }
  }
  function justinImageSize(width) {
    resolve(width);
    width.keyCode = this.Settings.hk;
    this.p.keyInput2(width);
    this.p.holdPressed = false;
  }
  function _insert_template() {
    $(".players").show();
    $("#main").hide();
    $(".tc").hide();
    $(".navbar-brand").html('<img src="/res/svg/white/arrowLeft.svg"> Back to game');
    $(".navbar-brand").addClass("navbar-back");
    $(".navbar").css("margin-bottom", "22px");
  }
  function clearCut() {
    $(".players").hide();
    $(".tc").show();
    $("#main").show();
    $(".navbar-brand").html("Jstris");
    $(".navbar-brand").removeClass("navbar-back");
    $(".navbar").css("margin-bottom", "2px");
  }
  var hz = this;
  this.changeStyle();
  $("#touchBtn").on("click", function () {
    if ($("#touchBtn").prop("checked")) {
      $("#tcc").show();
      $("#touchBtnMove").parent().parent().show();
    } else {
      $("#tcc").hide();
      $("#touchBtnMove").parent().parent().hide();
    }
  }.bind(this));
  $("#res").on("click", function () {
    if (this.p.Live.sitout || 0 === this.p.Live.players.length) {
      this.p.startPractice(this.p.selectedPmode);
    }
  }.bind(this));
  $(".navbar-brand").on("click", clearCut.bind(this));
  document.getElementById("lobby").addEventListener("click", function () {
    _insert_template();
  }.bind(this));
  document.getElementById("res").addEventListener("click", function () {
    clearCut();
  }.bind(this));
  document.getElementById("tc-hd").addEventListener("touchstart", function (modesFolder) {
    resolve(modesFolder);
    modesFolder.keyCode = this.Settings.hd;
    this.p.keyInput2(modesFolder);
    this.p.hardDropPressed = false;
  }.bind(this));
  document.getElementById("tc-l").addEventListener("touchstart", function (fileData) {
    getFileJSON(fileData);
    fileData.keyCode = this.Settings.ml;
    this.p.keyInput2(fileData);
  }.bind(this));
  document.getElementById("tc-l").addEventListener("touchend", function (outFile) {
    concatenateSourceMaps(outFile);
    outFile.keyCode = this.Settings.ml;
    this.p.keyInput3(outFile);
  }.bind(this));
  document.getElementById("tc-r").addEventListener("touchstart", function (fileData) {
    getFileJSON(fileData);
    fileData.keyCode = this.Settings.mr;
    this.p.keyInput2(fileData);
  }.bind(this));
  document.getElementById("tc-r").addEventListener("touchend", function (outFile) {
    concatenateSourceMaps(outFile);
    outFile.keyCode = this.Settings.mr;
    this.p.keyInput3(outFile);
  }.bind(this));
  document.getElementById("tc-d").addEventListener("touchstart", function (fileData) {
    getFileJSON(fileData);
    fileData.keyCode = this.Settings.sd;
    this.p.keyInput2(fileData);
  }.bind(this));
  document.getElementById("tc-d").addEventListener("touchend", function (outFile) {
    concatenateSourceMaps(outFile);
    outFile.keyCode = this.Settings.sd;
    this.p.keyInput3(outFile);
  }.bind(this));
  document.getElementById("tc-c").addEventListener("touchstart", function (modesFolder) {
    resolve(modesFolder);
    modesFolder.keyCode = this.Settings.rr;
    this.p.keyInput2(modesFolder);
  }.bind(this));
  document.getElementById("tc-cc").addEventListener("touchstart", function (modesFolder) {
    resolve(modesFolder);
    modesFolder.keyCode = this.Settings.rl;
    this.p.keyInput2(modesFolder);
  }.bind(this));
  document.getElementById("tc-dr").addEventListener("touchstart", function (modesFolder) {
    resolve(modesFolder);
    modesFolder.keyCode = this.Settings.dr;
    this.p.keyInput2(modesFolder);
  }.bind(this));
  document.getElementById("tc-h").addEventListener("touchstart", justinImageSize.bind(this));
  document.getElementById("holdCanvas").addEventListener("touchstart", justinImageSize.bind(this));
  this.showPlBtn = document.createElement("div");
  this.showPlBtn.id = "tc-vs";
  this.showPlBtn.addEventListener("click", _insert_template.bind(this));
  this.showPlBtn.innerHTML = '<img src="/res/svg/dark/screens.svg">';
  let artistTrack = document.createElement("div");
  artistTrack.className = "mMenu";
  artistTrack.appendChild(this.showPlBtn);
  document.getElementById("stage").appendChild(artistTrack);
  this.setupButtonDragDrop();
}, Mobile.prototype.setupButtonDragDrop = function () {
  function userChannelHandler(data) {
    if (!joinBy.draggingEnabled || -1 === packByNumType.indexOf(data.target)) {
      return;
    }
    props = data.target;
    let pivot = data.target.custom_xOffset ? data.target.custom_xOffset : 0;
    let mobsFirstgid = data.target.custom_yOffset ? data.target.custom_yOffset : 0;
    if ("touchstart" === data.type) {
      data.target.custom_initialX = data.touches[0].clientX - pivot;
      data.target.custom_initialY = data.touches[0].clientY - mobsFirstgid;
    } else {
      data.target.custom_initialX = data.clientX - pivot;
      data.target.custom_initialY = data.clientY - mobsFirstgid;
    }
  }
  function yAxisHeadersSort(second) {
    if (!joinBy.draggingEnabled || !props) {
      return;
    }
    props.custom_initialX = forum;
    props.custom_initialY = courseId;
    let datum = forum.toFixed(2) + "," + courseId.toFixed(2);
    localStorage.setItem(props.id, datum);
    props = false;
  }
  function base(includeExt) {
    if (joinBy.draggingEnabled && props) {
      includeExt.preventDefault();
      if ("touchmove" === includeExt.type) {
        forum = includeExt.touches[0].clientX - props.custom_initialX;
        courseId = includeExt.touches[0].clientY - props.custom_initialY;
      } else {
        forum = includeExt.clientX - props.custom_initialX;
        courseId = includeExt.clientY - props.custom_initialY;
      }
      props.custom_xOffset = forum;
      props.custom_yOffset = courseId;
      prefetchGroupsInfo(forum, courseId, props);
    }
  }
  function prefetchGroupsInfo(forum, courseId, options) {
    options.style.transform = "translate3d(" + forum + "px, " + courseId + "px, 0)";
  }
  var forum;
  var courseId;
  var packByNumType = [document.querySelector("#tc-hd"), document.querySelector("#tc-dr"), document.querySelector("#tc-l"), document.querySelector("#tc-r"), document.querySelector("#tc-d"), document.querySelector("#tc-cc"), document.querySelector("#tc-c"), document.querySelector("#tc-h"), this.showPlBtn];
  var MajorityMethods = document.querySelector("#app");
  var props = false;
  var joinBy = this;
  packByNumType.forEach(Module => {
    let ia = localStorage.getItem(Module.id);
    if (null !== ia) {
      let rDefs = ia.split(",", 2);
      Module.custom_xOffset = parseFloat(rDefs[0]);
      Module.custom_yOffset = parseFloat(rDefs[1]);
      prefetchGroupsInfo(Module.custom_xOffset, Module.custom_yOffset, Module);
    }
  });
  $("#touchBtnMove").on("click", function () {
    joinBy.draggingEnabled = $("#touchBtnMove").prop("checked");
  });
  MajorityMethods.addEventListener("touchstart", userChannelHandler, false);
  MajorityMethods.addEventListener("touchend", yAxisHeadersSort, false);
  MajorityMethods.addEventListener("touchmove", base, false);
  MajorityMethods.addEventListener("mousedown", userChannelHandler, false);
  MajorityMethods.addEventListener("mouseup", yAxisHeadersSort, false);
  MajorityMethods.addEventListener("mousemove", base, false);
}, Replay.prototype.add = function (mmCoreSplitViewBlock) {
  if (this.isAfkMode) {
    this.afkQueue.push(mmCoreSplitViewBlock);
  } else {
    if (!(mmCoreSplitViewBlock.a === this.Action.DAS_LEFT && this.actions.length && this.actions[this.actions.length - 1].a === mmCoreSplitViewBlock.a || mmCoreSplitViewBlock.a === this.Action.DAS_RIGHT && this.actions.length && this.actions[this.actions.length - 1].a === mmCoreSplitViewBlock.a)) {
      mmCoreSplitViewBlock.t -= this.config.gameStart;
      if (1 === this.mode) {
        mmCoreSplitViewBlock.t = 0;
      }
      this.actions.push(mmCoreSplitViewBlock);
      if (this.onMoveAdded) {
        this.onMoveAdded(mmCoreSplitViewBlock);
      }
    }
  }
}, Replay.prototype.clear = function () {
  this.actions.length = 0;
  this.mode = 0;
  this.isAfkMode = false;
  this.afkQueue = [];
  this.string = "";
  this.md5 = "";
  this.config.mode = void 0;
  if ("afk" in this.config) {
    delete this.config.afk;
  }
  if ("bbs" in this.config) {
    delete this.config.bbs;
  }
  if ("rnd" in this.config) {
    delete this.config.rnd;
  }
}, Replay.prototype.toggleAfkMode = function (isSlidingUp, i) {
  if (isSlidingUp) {
    this.isAfkMode = true;
  } else {
    this.isAfkMode = false;
    for (let uniqueLinks of this.afkQueue) {
      uniqueLinks.t = i;
      this.add(uniqueLinks);
    }
    this.afkQueue = [];
  }
}, Replay.prototype.getData = function () {
  if (-1 === this.mode) {
    return "";
  }
  var data = new Object;
  data.d = this.getBlobData();
  data.c = this.config;
  var newPolyfill = LZString.compressToEncodedURIComponent(JSON.stringify(data));
  return this.string = newPolyfill, this.md5 = md5(newPolyfill), this.md5;
}, Replay.prototype.pushEndPadding = function () {
  if (32 - this.stream.bitpos >= 12) {
    this.stream.pushBits(4095, 12);
  }
}, Replay.prototype.getBlobData = function () {
  this.stream = new ReplayStream;
  var start;
  var ib = null;
  var addressCount = this.actions.length;
  var i = 0;
  var end = 4094;
  var iAddressLoop = 0;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    if (null !== ib && ib > this.actions[iAddressLoop].t) {
      let ic = ib - this.actions[iAddressLoop].t;
      this.actions[iAddressLoop].t = ib;
      if (ic > 10) {
        this.config.err |= 1;
      }
    }
    if (ib = this.actions[iAddressLoop].t, (start = this.actions[iAddressLoop].t - i * end) > end && (start = start - end, i++), start < 0 && (this.config.err |= 1, start = 0), start > end && (this.config.err |= 2, start = end), this.stream.pushBits(start, 12), this.stream.pushBits(this.actions[iAddressLoop].a, 4), void 0 !== this.AuxBits[this.actions[iAddressLoop].a]) {
      var PL$13 = this.AuxBits[this.actions[iAddressLoop].a];
      var PL$17 = 0;
      for (; PL$17 < PL$13.length; PL$17++) {
        this.stream.pushBits(this.actions[iAddressLoop].d[PL$17], PL$13[PL$17]);
      }
      if (this.actions[iAddressLoop].a === this.Action.AUX) {
        if (this.actions[iAddressLoop].d[0] === this.AUX.AFK) {
          this.stream.pushBits(this.actions[iAddressLoop].d[1], 16);
          i = i + (this.actions[iAddressLoop].d[1] / end >>> 0);
        } else {
          if (this.actions[iAddressLoop].d[0] === this.AUX.BLOCK_SET) {
            this.stream.pushBits(this.actions[iAddressLoop].d[1], 1);
            this.stream.pushBits(this.actions[iAddressLoop].d[2], 4);
          } else {
            if (this.actions[iAddressLoop].d[0] === this.AUX.MOVE_TO) {
              let artistTrack = this.actions[iAddressLoop].d[1] + 3;
              let GET_AUTH_URL_TIMEOUT = this.actions[iAddressLoop].d[2] + 12;
              if (artistTrack < 0 || artistTrack > 15 || GET_AUTH_URL_TIMEOUT < 0 || GET_AUTH_URL_TIMEOUT > 31) {
                this.config.err |= 16;
              }
              this.stream.pushBits(artistTrack, 4);
              this.stream.pushBits(GET_AUTH_URL_TIMEOUT, 5);
            } else {
              if (this.actions[iAddressLoop].d[0] === this.AUX.RANDOMIZER) {
                this.stream.pushBits(this.actions[iAddressLoop].d[1], 1);
                this.stream.pushBits(this.actions[iAddressLoop].d[2], 5);
              } else {
                if (this.actions[iAddressLoop].d[0] === this.AUX.MATRIX_MOD) {
                  this.stream.pushBits(this.actions[iAddressLoop].d[1], 4);
                  this.stream.pushBits(this.actions[iAddressLoop].d[2], 5);
                } else {
                  if (this.actions[iAddressLoop].d[0] === this.AUX.WIDE_GARBAGE_ADD) {
                    this.stream.pushBits(this.actions[iAddressLoop].d[1], 5);
                    this.stream.pushBits(this.actions[iAddressLoop].d[2], 4);
                    this.stream.pushBits(this.actions[iAddressLoop].d[3], 3);
                    this.stream.pushBits(this.actions[iAddressLoop].d[4], 1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return this.pushEndPadding(), _arrayBufferToBase64(new Uint32Array(this.stream.data).buffer);
}, Replay.prototype.getGameTime = function (canCreateDiscussions) {
  if (void 0 === canCreateDiscussions) {
    canCreateDiscussions = true;
  }
  var n = this.actions[this.actions.length - 1].t;
  return canCreateDiscussions || void 0 !== this.config.afk && (n = n - this.config.afk), Math.round(n) / 1e3;
}, Replay.prototype.postLiveData = function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  if (-1 !== this.mode) {
    var scope = document.head.querySelector("[name=csrf-token]").content;
    var directiveProcessors = new XMLHttpRequest;
    var $node = "gid=" + canCreateDiscussions + "&cid=" + isSlidingUp + "&r=" + encodeURIComponent(this.string);
    directiveProcessors.timeout = 6e3;
    directiveProcessors.open("POST", "/code/replayUploaderLive", true);
    directiveProcessors.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    directiveProcessors.setRequestHeader("X-CSRF-TOKEN", scope);
    directiveProcessors.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    directiveProcessors.send($node);
  } else {
    this.clear();
  }
}, Replay.prototype.ver = function (manifest) {
  if (manifest.hasOwnProperty("vcsm")) {
    return manifest.vcsm;
  }
  {
    let data = GameCore.toString() + "-" + Game.toString() + "-" + Live.toString();
    manifest.vcsm = md5(data);
  }
  return manifest.vcsm.substr(0, 16);
}, Replay.prototype.postData = function (canCreateDiscussions, data) {
  var url = document.head.querySelector("[name=csrf-token]").content;
  var xhr = new XMLHttpRequest;
  var mime = "id=" + canCreateDiscussions + "&r=" + encodeURIComponent(this.string) + "&c=" + this.ver(data);
  xhr.timeout = 1e4;
  xhr.open("POST", "/code/replayUploader", true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("X-CSRF-TOKEN", url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var PL$9 = this;
  try {
    xhr.send(mime);
  } catch (PL$10) {
    PL$9.uploadError(data, PL$10.message);
  }
  xhr.ontimeout = function () {
    PL$9.uploadError(data, "REQUEST_TIMEOUT");
  };
  xhr.onerror = xhr.onabort = function () {
    PL$9.uploadError(data, "REQUEST_FAIL");
  };
  xhr.onload = function () {
    if (200 === xhr.status) {
      if ("function" == typeof PL$9.onSaved) {
        PL$9.onSaved(JSON.parse(xhr.responseText));
      }
    } else {
      PL$9.uploadError(data, xhr.status + " - " + xhr.statusText);
    }
  };
}, Replay.prototype.uploadError = function (InkElement, isSlidingUp) {
  if (this.string) {
    var el = "<span class='wFirstLine'><span class='wTitle'>!" + i18n.warning2 + "!</span> <b>" + i18n.repFail + "</b> (<em>" + isSlidingUp + "</em>)</span>";
    el = el + ("<p>" + i18n.repInChat + " " + i18n.repTxtInfo + "</p>");
    el = el + ('<textarea readonly cols="30" onclick="this.focus();this.select()">' + this.string + "</textarea>");
    InkElement.chatMajorWarning(el);
  }
}, Replay.prototype.hasUserInputs = function () {
  if (!this.actions.length) {
    return false;
  }
  var indexLookupKey = 0;
  for (; indexLookupKey < this.actions.length; indexLookupKey++) {
    if (this.actions[indexLookupKey].a <= this.Action.ROTATE_180) {
      return true;
    }
  }
  return false;
}, ReplayStream.prototype.pushBits = function (tileSize, fixedZoom) {
  var zoom = this.wordSize - this.bitpos;
  tileSize = tileSize & (1 << fixedZoom) - 1;
  if (zoom - fixedZoom >= 0) {
    this.data[this.datapos] |= tileSize << zoom - fixedZoom;
    this.bitpos += fixedZoom;
  } else {
    if (zoom >= 0) {
      this.data[this.datapos] |= tileSize >> fixedZoom - zoom;
    } else {
      zoom = 0;
    }
    this.bitpos = fixedZoom - zoom;
    this.data[++this.datapos] = tileSize << this.wordSize - this.bitpos;
  }
}, ReplayStream.prototype.pullBits = function (p) {
  if (this.data.length === this.byte) {
    return null;
  }
  var orTmp;
  var q = this.wordSize - (this.bitpos + p);
  if (q >= 0) {
    var modulus = (1 << p) - 1 << q;
    orTmp = (this.data[this.byte] & modulus) >>> q;
    this.bitpos = this.bitpos + p;
    if (this.bitpos >= this.wordSize) {
      this.bitpos -= this.wordSize;
      this.byte++;
    }
  } else {
    var r = p + q;
    var ie = (1 << r) - 1;
    var tmpa = (this.data[this.byte] & ie) << -q;
    ++this.byte;
    this.bitpos = 0;
    var tmpb = this.pullBits(p - r);
    if (null === tmpb) {
      return null;
    }
    orTmp = tmpa | tmpb;
  }
  return orTmp;
}, RulesetManager.prototype.fullModeName = function (dirkey, value) {
  if (6 === dirkey) {
    return "Map " + value;
  }
  var indexLookupKey = Math.floor(value / 10);
  var groupNamePrefix = 0 === indexLookupKey ? "" : this.RULESETS[indexLookupKey].name;
  var bufferindex = "";
  var ig = "";
  value = value % 10;
  for (const cache of this.MODES) {
    if (cache.id === dirkey) {
      bufferindex = cache.n;
      for (const entry of cache.modes) {
        if (entry.id === value) {
          ig = entry.fn ? entry.fn : entry.n;
        }
      }
    }
  }
  return groupNamePrefix + " " + bufferindex + " " + ig;
}, RulesetManager.prototype.adjustToValidMode = function (b, a) {
  a = parseInt(a);
  let uly_lb = Number.MAX_SAFE_INTEGER;
  if (0 === this.pmodeRuleId && (6 === b || 9 === b)) {
    return true;
  }
  for (const n_bb of this.MODES) {
    let guard = Number.MAX_SAFE_INTEGER;
    let hasAnswered = 0;
    for (const curColHeights of n_bb.modes) {
      let ih = -1 !== curColHeights.rs.indexOf(this.pmodeRuleId);
      if (n_bb.id === b && curColHeights.id === a && ih) {
        return;
      }
      if (ih) {
        hasAnswered++;
        if (curColHeights.id < guard) {
          guard = curColHeights.id;
        }
      }
    }
    if (hasAnswered && n_bb.id < uly_lb && (uly_lb = n_bb.id), n_bb.id === b && hasAnswered) {
      return void (this.p.sprintMode = guard);
    }
  }
  this.p.pmode = uly_lb;
  this.setActiveMode(this.p.pmode);
  this.adjustToValidMode(this.p.pmode, -1);
}, RulesetManager.prototype.setActiveMode = function (pbPlayer) {
  let dataType = null;
  let dM = null;
  let data = this.p;
  for (const pbPlayerInstances of this.MODES) {
    if (pbPlayerInstances.id === pbPlayer) {
      dataType = pbPlayerInstances.elem;
      dM = pbPlayerInstances.n;
      break;
    }
  }
  if (!dataType) {
    return;
  }
  let esInflections = this.modeMenu.getElementsByClassName("prKey");
  let value = null;
  var i = 0;
  for (; esInflections.length; i++) {
    value = esInflections[i];
    esInflections[i].parentElement.removeChild(esInflections[i]);
  }
  if (!value) {
    value = document.createElement("div");
    value.textContent = "F4";
    value.className = "prKey";
  }
  dataType.appendChild(value);
  let date = document.getElementById("practice-last");
  date.textContent = dM;
  date.appendChild(value);
  date.onclick = data.startPractice.bind(data, pbPlayer);
  this.ruleSetChange(this.pmodeRuleId, false);
}, RulesetManager.prototype.updateModeMenu = function () {
  let GET_AUTH_URL_TIMEOUT = this.pmodeRuleId;
  let questionsWithAnswers = this.p;
  for (; this.modeMenu.firstChild;) {
    this.modeMenu.removeChild(this.modeMenu.firstChild);
  }
  for (const colorArray of this.MODES) {
    if (!colorArray.elem) {
      let tempColorArray = colorArray.elem = document.createElement("div");
      tempColorArray.className = "prMenuItem";
      tempColorArray.innerHTML = colorArray.n;
      tempColorArray.addEventListener("click", function () {
        questionsWithAnswers.startPractice.call(questionsWithAnswers, colorArray.id);
      });
    }
    let deps = colorArray.modes;
    let extensionLanguages = [];
    for (const depPkgUri of deps) {
      if (-1 !== depPkgUri.rs.indexOf(GET_AUTH_URL_TIMEOUT)) {
        extensionLanguages.push(depPkgUri);
      }
    }
    if (extensionLanguages.length && (this.modeMenu.appendChild(colorArray.elem), extensionLanguages.length > 1)) {
      let CustomTests = document.createElement("div");
      CustomTests.className = "practice-submenu";
      for (const questions of extensionLanguages) {
        let element = document.createElement("div");
        element.className = "pract-subopt";
        element.innerHTML = questions.n;
        element.onclick = function () {
          questionsWithAnswers.sprintMode = questions.id;
          questionsWithAnswers.startPractice.call(questionsWithAnswers, colorArray.id);
        };
        CustomTests.appendChild(element);
      }
      this.modeMenu.appendChild(CustomTests);
    }
  }
}, RulesetManager.prototype.ruleSetChange = function (last_fret, canCreateDiscussions) {
  if (void 0 === canCreateDiscussions) {
    canCreateDiscussions = true;
  }
  let ii = this.RULESETS[last_fret];
  if (ii) {
    this.applyRule(ii.c, this.p.conf[1]);
    this.rs1.children[1].textContent = ii.name;
    this.pmodeRuleId = parseInt(last_fret);
    this.updateModeMenu();
    if (canCreateDiscussions) {
      this.adjustToValidMode(this.p.pmode, this.p.sprintMode);
    }
  }
}, RulesetManager.prototype.createOptions = function () {
  let artistTrack = this;
  this.combo = document.createElement("div");
  this.combo.classList.add("comboclass");
  let typeCheckers = document.createElement("ul");
  for (const merged of this.RULESETS) {
    let value = document.createElement("li");
    value.classList.add("opt");
    let leftArgsCopy = document.createElement("span");
    leftArgsCopy.textContent = merged.name;
    value.appendChild(leftArgsCopy);
    let rightArgsCopy = document.createElement("span");
    rightArgsCopy.classList.add("ruleDesc");
    rightArgsCopy.textContent = merged.desc;
    value.appendChild(rightArgsCopy);
    let data = document.createElement("span");
    data.classList.add("ruleDiff");
    data.innerHTML = getSVG("s-l" + merged.lvl, "dark", "lIcn");
    value.appendChild(data);
    value.dataset.id = merged.id;
    value.addEventListener("click", function () {
      artistTrack.ruleSetChange.call(artistTrack, this.dataset.id);
    });
    typeCheckers.appendChild(value);
  }
  this.combo.appendChild(typeCheckers);
  this.combo.addEventListener("mouseup", function () {
    return false;
  });
}, RulesetManager.prototype.closeCombo = function (canCreateDiscussions) {
  return null !== this.combo && (hideElem(this.combo), this.isOpen = false, true);
}, RulesetManager.prototype.toggleCombo = function (mmCoreSplitViewBlock, canCreateDiscussions) {
  if (this.isOpen) {
    this.closeCombo(mmCoreSplitViewBlock);
  } else {
    if (!this.combo) {
      this.createOptions();
      canCreateDiscussions.appendChild(this.combo);
    }
    showElem(this.combo);
    this.isOpen = true;
  }
  mmCoreSplitViewBlock.stopImmediatePropagation();
}, RulesetManager.prototype.registerCombo = function () {
  var artistTrack = this;
  this.rs1.addEventListener("mouseup", function (mmCoreSplitViewBlock) {
    artistTrack.toggleCombo.call(artistTrack, mmCoreSplitViewBlock, artistTrack.rs1);
  });
  document.addEventListener("mouseup", function (mmCoreSplitViewBlock) {
    artistTrack.closeCombo.call(artistTrack, mmCoreSplitViewBlock);
  });
}, RulesetManager.prototype.afterRuleChange = function (canCreateDiscussions) {}, RulesetManager.prototype.forceApplyChanges = function (canCreateDiscussions) {
  this.p.randomizer = this.p.randomizerFactory(canCreateDiscussions.rnd);
  this.p.setSpeedLimit(canCreateDiscussions.speedLimit);
  this.p.applyGravityLvl(canCreateDiscussions.gravityLvl);
  this.p.setLockDelay(canCreateDiscussions.lockDelay);
}, RulesetManager.prototype.applyRule = function (questions, questionsWithAnswers, isSlidingUp) {
  if (void 0 === isSlidingUp) {
    isSlidingUp = true;
  }
  for (const slot in this.RULE_KEYS) {
    let ref = this.RULE_KEYS[slot];
    if (questions.hasOwnProperty(slot)) {
      questionsWithAnswers[ref] = questions[slot];
    } else {
      if (isSlidingUp) {
        questionsWithAnswers[ref] = questions[slot] = this.DEF[ref];
      }
    }
  }
  this.afterRuleChange(questionsWithAnswers);
}, RulesetManager.prototype.applyPresetRule = function (self, keys, isSlidingUp) {
  if (void 0 === isSlidingUp) {
    isSlidingUp = true;
  }
  let o = {};
  for (const i in this.PRESET_KEYS) {
    let key = this.PRESET_KEYS[i];
    let value = null;
    if (self.hasOwnProperty(i)) {
      value = self[i];
    } else {
      if (isSlidingUp) {
        value = self[i] = this.DEF[key];
      }
    }
    if (!(null === value || keys.hasOwnProperty(key) && keys[key] == value)) {
      keys[key] = value;
      o[key] = value;
    }
  }
  return this.afterRuleChange(keys), o;
}, RulesetManager.prototype.appendRule = function (questions, questionsWithAnswers) {
  for (const slot in this.RULE_KEYS) {
    let slotNum = this.RULE_KEYS[slot];
    if (questions.hasOwnProperty(slot)) {
      questionsWithAnswers[slotNum] = questions[slot];
    }
  }
  this.afterRuleChange(questionsWithAnswers);
}, Report.prototype.init = function () {
  this.icn.addEventListener("click", this.openReport.bind(this));
  document.getElementById("repClose").addEventListener("click", this.closeReport.bind(this));
  document.getElementById("repSend").addEventListener("click", this.sendReport.bind(this));
  var PL$13 = document.repForm.rRe;
  var ij = this;
  var PL$17 = 0;
  for (; PL$17 < PL$13.length; PL$17++) {
    PL$13[PL$17].addEventListener("change", function () {
      if ("4" == this.value) {
        showElem(ij.rReTxt);
      } else {
        hideElem(ij.rReTxt);
      }
    });
  }
  if (!this.p.Live.authorized) {
    hideElem(document.querySelector("svg.warnI"));
  }
}, Report.prototype.closeReport = function () {
  hideElem(this.reportWin);
}, Report.prototype.sendReport = function () {
  var empty = this.repUser.value;
  var grey = parseInt(document.querySelector('input[name="rRe"]:checked').value);
  var fun_stack = null;
  if ("4" != grey || "" != (fun_stack = this.rReTxt.value.trim())) {
    if ("" != empty) {
      var params = {t: 32, u: empty, r: grey, s: fun_stack};
      this.p.Live.safeSend(JSON.stringify(params));
      this.closeReport();
    } else {
      alert("User must be selected!");
    }
  } else {
    alert("Reason cannot be empty!");
  }
}, Report.prototype.openReport = function () {
  this.repUser.innerHTML = "";
  let PL$13 = [];
  let nextto = this.p.Live.cid;
  var tagName;
  for (tagName in this.p.Live.clients) {
    var color1hsl = this.p.Live.clients[tagName];
    if (nextto == color1hsl.cid || color1hsl.mod || !color1hsl.auth) {
      continue;
    }
    let color3hsl = document.createElement("option");
    color3hsl.textContent = color1hsl.name;
    color3hsl.value = color1hsl.name;
    PL$13.push(color3hsl);
  }
  if (PL$13.sort(function (canCreateDiscussions, isSlidingUp) {
    return canCreateDiscussions.textContent.toUpperCase() > isSlidingUp.textContent.toUpperCase() ? 1 : canCreateDiscussions.textContent.toUpperCase() < isSlidingUp.textContent.toUpperCase() ? -1 : 0;
  }), PL$13.length) {
    this.repUser.disabled = false;
    var PL$17 = 0;
    for (; PL$17 < PL$13.length; PL$17++) {
      this.repUser.appendChild(PL$13[PL$17]);
    }
  } else {
    this.repUser.disabled = true;
    let artistTrack = document.createElement("option");
    artistTrack.textContent = "No users to report";
    artistTrack.value = "";
    this.repUser.appendChild(artistTrack);
  }
  showElem(this.reportWin);
  this.rReTxt.value = "";
  document.getElementById("rr0").checked = true;
  hideElem(this.rReTxt);
  this.p.setFocusState(1);
}, Items.prototype.avail = function () {
  return false;
}, Items.prototype.loadConf = function (canCreateDiscussions) {
  this.P1 = canCreateDiscussions.P1;
  var coupling = this;
  canCreateDiscussions.def.forEach(function (res) {
    if (res.m) {
      coupling.itmDef[res.id].m = res.m;
    }
    if (res.p) {
      coupling.itmDef[res.id].p = res.p;
    }
  });
}, Items.prototype.autoSelectKey = function () {
  let min = 0;
  let array = [[87, "w"], [86, "v"], [88, "x"], [90, "z"], [67, "c"], [65, "a"], [66, "b"], [68, "d"], [69, "e"], [70, "f"], [71, "g"]];
  let coordtransform = this.p.Settings.controls;
  for (let x = 0; x < array.length; x++) {
    let coord = array[x];
    if (!coordtransform.includes(coord[0])) {
      min = x;
      break;
    }
  }
  let ik = array[min][0];
  let il = "<b>" + array[min][1].toUpperCase() + "</b> to use";
  this.key = ik;
  this.itmTxt.innerHTML = il;
}, Items.prototype.genItem = function () {
  var im = this.p.random(0, this.P1 - 1);
  if (this.avail()) {
    return 0 === im || this.fs ? (this.fs = false, this.p.random(1, 4)) : 0;
  }
}, Items.prototype.genItemType = function () {
  if (this.f) {
    let io = this.itmDef[this.f];
    return this.f = null, io;
  }
  return this.resolveProb("p");
}, Items.prototype.onReset = function () {
  if (this.avail()) {
    this.preloadIcons();
  }
  this.origBBS = 0;
  var packByNumType = this;
  if (this.active) {
    this.active.forEach(function (data) {
      packByNumType.revert(data.id);
    });
  }
  this.active = [];
  this.autoSelectKey();
  this.reset();
}, Items.prototype.reset = function () {
  this.item = null;
  hideElem(this.itmBox);
}, Items.prototype.pickup = function () {
  showElem(this.itmBox);
  let ip = this.genItemType();
  this.item = ip.id;
  this.p.playSound("pickup");
  if (9 === this.item) {
    this.preloadIcons();
    this.itmIcn.style.backgroundImage = null;
    this.itmIcn.classList.add("mysteryItem");
    this.itmIcn.classList.add("fullSize");
  } else {
    this.itmIcn.style.backgroundImage = "url(" + ip.i + ")";
    this.itmIcn.classList.remove("mysteryItem");
    this.itmIcn.classList.remove("fullSize");
  }
}, Items.prototype.onHardDrop = function () {
  let criterion_index = this.active.length;
  for (; criterion_index--;) {
    let iq = this.active[criterion_index];
    iq.hd--;
    if (iq.hd <= 0) {
      this.active.splice(criterion_index, 1);
      this.revert(iq.id);
    }
  }
}, Items.prototype.use = function (mmCoreSplitViewBlock) {
  mmCoreSplitViewBlock = mmCoreSplitViewBlock || this.p.timestamp();
  let artistTrack = this.item;
  if (this.item) {
    this.item = null;
    if (9 !== artistTrack) {
      this.reset();
    }
    this.p.playSound("item");
    this.applyItem(artistTrack, mmCoreSplitViewBlock);
  }
}, Items.prototype.applyItem = function (canCreateDiscussions, context) {
  if (1 === canCreateDiscussions) {
    this.changeRandomizer(11, true, context);
    let artistTrack = new ItemActivation(canCreateDiscussions);
    artistTrack.hd = 7;
    this.active.push(artistTrack);
  } else {
    if (2 === canCreateDiscussions) {
      this.changeMatrix(1);
    } else {
      if (3 === canCreateDiscussions) {
        this.changeMatrix(2);
      } else {
        if (4 === canCreateDiscussions) {
          this.changeMatrix(3);
          let artistTrack = new ItemActivation(canCreateDiscussions);
          artistTrack.hd = this.p.random(5, 11);
          this.active.push(artistTrack);
        } else {
          if (5 === canCreateDiscussions) {
            this.p.play = false;
            this.p.animator = new PoisonAnimator(this, this.p);
          } else {
            if (6 === canCreateDiscussions) {
              this.changeBBS(4, context);
              let artistTrack = new ItemActivation(canCreateDiscussions);
              artistTrack.hd = 5;
              this.active.push(artistTrack);
            } else {
              if (7 === canCreateDiscussions) {
                var readInfo = new ReplayAction(this.p.Replay.Action.AUX, context);
                readInfo.d = [this.p.Replay.AUX.BLOCK_SET, 0, 2];
                this.p.Replay.add(readInfo);
                this.p.temporaryBlockSet = 2;
              } else {
                if (8 === canCreateDiscussions) {
                  this.changeMatrix(4);
                } else {
                  if (9 === canCreateDiscussions) {
                    this.mysteryItem(context);
                  } else {
                    if (10 === canCreateDiscussions) {
                      this.p.Caption.loading("Instant win", 2);
                    } else {
                      if (11 === canCreateDiscussions) {
                        this.changeRandomizer(12, true, context);
                        let artistTrack = new ItemActivation(canCreateDiscussions);
                        artistTrack.hd = this.p.random(7, 28);
                        this.active.push(artistTrack);
                      } else {
                        if (12 === canCreateDiscussions) {
                          this.changeBBS(2, context);
                          let artistTrack = new ItemActivation(canCreateDiscussions);
                          artistTrack.hd = this.p.random(5, 27);
                          this.active.push(artistTrack);
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
}, Items.prototype.preloadIcons = function () {
  if (!this.preload.length) {
    var color1hsl;
    for (color1hsl of this.itmDef) {
      if (color1hsl) {
        var color3hsl = new Image;
        color3hsl.src = color1hsl.i;
        this.preload.push(color3hsl);
      }
    }
  }
}, Items.prototype.resolveProb = function (i) {
  var lastModified = Math.random();
  var curTotal = 0;
  var indexLookupKey = 0;
  for (; indexLookupKey < this.itmDef.length; indexLookupKey++) {
    let userSubmission = this.itmDef[indexLookupKey];
    if (userSubmission && lastModified < (curTotal = curTotal + userSubmission[i])) {
      return userSubmission;
    }
  }
  return results[this.itmDef.length - 1];
}, Items.prototype.resolveMystery = function () {
  return this.resolveProb("m");
}, Items.prototype.mysteryItem = function (mmCoreSplitViewBlock) {
  let criterion_index = this.resolveMystery().id;
  let ir = this.itmDef[criterion_index];
  this.itmIcn.style.backgroundImage = "url(" + ir.i + ")";
  this.applyItem(criterion_index, mmCoreSplitViewBlock);
  this.itmIcn.classList.remove("fullSize");
  var is = this;
  setTimeout(function () {
    if (null === is.item) {
      hideElem(is.itmBox);
    }
  }, 1500);
}, Items.prototype.changeBBS = function (boardManager, auto) {
  auto = auto || this.p.timestamp();
  var auto_option = new ReplayAction(this.p.Replay.Action.AUX, auto);
  auto_option.d = [this.p.Replay.AUX.BLOCK_SET, 1, boardManager];
  this.p.Replay.add(auto_option);
  this.p.R.baseBlockSet = boardManager;
  this.changeRandomizer(this.p.R.rnd, true, auto);
}, Items.prototype.changeMatrix = function (canCreateDiscussions) {
  if (1 === canCreateDiscussions) {
    let it = this.p.random(10, 31);
    this.p.play = false;
    this.p.animator = new WindAnimator(this, this.p, it);
    (artistTrack = new ReplayAction(this.p.Replay.Action.AUX, this.p.timestamp())).d = [this.p.Replay.AUX.MATRIX_MOD, 0, it];
    this.p.Replay.add(artistTrack);
  } else {
    if (2 === canCreateDiscussions) {
      this.p.play = false;
      this.p.animator = new CompressAnimator(this, this.p);
      (artistTrack = new ReplayAction(this.p.Replay.Action.AUX, this.p.timestamp())).d = [this.p.Replay.AUX.MATRIX_MOD, 1, 0];
      this.p.Replay.add(artistTrack);
    } else {
      if (3 === canCreateDiscussions) {
        (artistTrack = new ReplayAction(this.p.Replay.Action.AUX, this.p.timestamp())).d = [this.p.Replay.AUX.MATRIX_MOD, 2, 0];
        this.p.Replay.add(artistTrack);
        this.loadFourWide();
        this.p.redraw();
      } else {
        if (4 === canCreateDiscussions) {
          var artistTrack;
          (artistTrack = new ReplayAction(this.p.Replay.Action.AUX, this.p.timestamp())).d = [this.p.Replay.AUX.MATRIX_MOD, 3, 0];
          this.p.Replay.add(artistTrack);
          this.p.play = false;
          this.p.animator = new InvertAnimator(this, this.p);
          this.p.setCurrentPieceToDefaultPos();
          this.p.updateGhostPiece(true);
        }
      }
    }
  }
}, Items.prototype.wipeDeadline = function () {
  var indexLookupKey = 0;
  for (; indexLookupKey < 10; ++indexLookupKey) {
    this.p.deadline[indexLookupKey] = 0;
  }
}, Items.prototype.invertMatrix = function () {
  this.wipeDeadline();
  var id = 0;
  for (; id < 2; id++) {
    if (9 !== this.p.matrix[id][0]) {
      var map = this.p.matrix[id];
      var num_elements = 0;
      for (; num_elements < 10; ++num_elements) {
        map[num_elements] = 0;
      }
    }
  }
  id = 2;
  for (; id < this.p.matrix.length; id++) {
    if (9 !== this.p.matrix[id][0]) {
      map = this.p.matrix[id];
      var iu = 0;
      num_elements = 0;
      for (; num_elements < 10; ++num_elements) {
        if (map[num_elements]) {
          map[num_elements] = 0;
        } else {
          if (0 === map[num_elements]) {
            map[num_elements] = 8;
            iu++;
          }
        }
      }
      if (10 === iu) {
        map[9] = 0;
      }
    }
  }
}, Items.prototype.loadFourWide = function (results) {
  if (!results) {
    results = this.p.MapManager;
  }
  var j = 0;
  results.parseMatrix("VmAAAiJUYAACIlRAAAMyUUAAAzIRcAAGZhdwAAEWEXAABxFREAAHdVIgAAcVUiAAARVSIAABdWIgAAd3ZmAABmYzUAAGZjNQAAYzIlAABjNSUAACIlIQAAJEURRABEJRRAACIg==");
  this.wipeDeadline();
  let d = 0;
  var i = j = this.p.matrix.length - 1;
  for (; i >= 0; --i, --j) {
    if (9 !== this.p.matrix[i][0]) {
      this.p.matrix[i] = results.matrix[j + d];
    } else {
      d++;
    }
  }
  this.p.setCurrentPieceToDefaultPos();
  this.p.updateGhostPiece(true);
  this.p.comboCounter = -1;
}, Items.prototype.compressMatrix = function (boardManager) {
  function parse(index, data) {
    if (!data[index - 1]) {
      var n = index;
      for (; n < 10; ++n) {
        data[n - 1] = data[n];
      }
      data[9] = 0;
    }
  }
  this.wipeDeadline();
  var apiCallRaw = 1;
  for (; apiCallRaw <= boardManager; apiCallRaw++) {
    var textureUrl = 0;
    for (; textureUrl < 20; ++textureUrl) {
      if (9 !== this.p.matrix[textureUrl][0]) {
        parse(apiCallRaw, this.p.matrix[textureUrl]);
      }
    }
  }
}, Items.prototype.tfTornado = function (canCreateDiscussions) {
  var article = copyMatrix(this.p.matrix);
  this.wipeDeadline();
  var category = 0;
  for (; category < 20; ++category) {
    if (9 === article[category][0]) {
      continue;
    }
    let SegClasses = (category % 2 == 0 ? 1 : -1) * canCreateDiscussions;
    var type = 0;
    for (; type < 10; ++type) {
      let i = (type + SegClasses) % 10;
      for (; i < 0;) {
        i = i + 10;
      }
      this.p.matrix[category][type] = article[category][i];
    }
  }
}, Items.prototype.changeRandomizer = function (leftFence, canCreateDiscussions, isSlidingUp) {
  let history = isSlidingUp || this.p.timestamp();
  let object = canCreateDiscussions ? 1 : 0;
  this.p.randomizer = this.p.randomizerFactory(leftFence);
  if (canCreateDiscussions) {
    this.p.generateQueue();
    this.p.updateQueueBox();
  }
  var visualization2D = new ReplayAction(this.p.Replay.Action.AUX, history);
  visualization2D.d = [this.p.Replay.AUX.RANDOMIZER, object, leftFence];
  this.p.Replay.add(visualization2D);
}, Items.prototype.revert = function (canCreateDiscussions) {
  if (1 === canCreateDiscussions) {
    this.changeRandomizer(this.p.R.rnd, false);
  } else {
    if (4 === canCreateDiscussions) {
      let iv = this.item;
      this.item = 2;
      this.use();
      this.item = iv;
      this.p.hdAbort = true;
    } else {
      if (6 === canCreateDiscussions) {
        this.changeBBS(this.origBBS);
      } else {
        if (11 === canCreateDiscussions) {
          this.changeRandomizer(this.p.R.rnd, false);
        } else {
          if (12 === canCreateDiscussions) {
            this.changeBBS(this.origBBS);
          }
        }
      }
    }
  }
}, InvertAnimator.prototype.render = function (canCreateDiscussions) {
  this.d += canCreateDiscussions;
  for (; this.d > this.PER_ROUND;) {
    this.d -= this.PER_ROUND;
    this.iter();
  }
}, InvertAnimator.prototype.iter = function () {
  this.i++;
  var iw = this.tmpMatrix;
  this.tmpMatrix = this.g.matrix;
  this.g.matrix = iw;
  if (2 !== this.i) {
    this.g.redraw();
  } else {
    this.finished();
  }
}, InvertAnimator.prototype.finished = function () {
  this.g.animator = null;
  if (!this.g.gameEnded) {
    this.g.play = true;
  }
  this.g.redrawBlocked = false;
  this.g.ghostEnabled = this.hadGhost;
  this.g.updateGhostPiece(true);
  this.g.redraw();
}, PoisonAnimator.prototype.render = function (canCreateDiscussions) {
  this.d += canCreateDiscussions;
  for (; this.d > this.PER_ROUND;) {
    this.d -= this.PER_ROUND;
    this.iter();
  }
}, PoisonAnimator.prototype.iter = function () {
  this.i++;
  this.g.play = true;
  this.g.hardDrop();
  if (!this.g.play) {
    this.finished();
  }
  this.g.play = false;
}, PoisonAnimator.prototype.finished = function () {
  this.g.animator = null;
  if (!this.g.gameEnded) {
    this.g.play = true;
  }
  this.g.redrawBlocked = false;
  this.g.ghostEnabled = this.hadGhost;
  this.g.updateGhostPiece(true);
  this.g.redraw();
}, CompressAnimator.prototype.render = function (canCreateDiscussions) {
  this.d += canCreateDiscussions;
  for (; this.d > this.PER_ROUND;) {
    this.d -= this.PER_ROUND;
    this.iter();
  }
}, CompressAnimator.prototype.iter = function () {
  this.i++;
  this.items.compressMatrix(this.i);
  this.g.redraw();
  if (this.i >= 10) {
    this.finished();
  }
}, CompressAnimator.prototype.finished = function () {
  this.g.animator = null;
  if (!this.g.gameEnded) {
    this.g.play = true;
  }
  this.g.redrawBlocked = false;
  this.g.ghostEnabled = this.hadGhost;
  this.g.updateGhostPiece(true);
  this.g.redraw();
}, WindAnimator.prototype.render = function (canCreateDiscussions) {
  this.d += canCreateDiscussions;
  for (; this.d > this.PER_ROUND;) {
    this.d -= this.PER_ROUND;
    this.iter();
  }
}, WindAnimator.prototype.iter = function () {
  this.items.tfTornado(1);
  this.g.redraw();
  this.i--;
  if (this.i <= 0) {
    this.finished();
  }
}, WindAnimator.prototype.finished = function () {
  this.g.animator = null;
  if (!this.g.gameEnded) {
    this.g.play = true;
  }
  this.g.redrawBlocked = false;
  this.g.ghostEnabled = this.hadGhost;
  this.g.updateGhostPiece(true);
  this.g.redraw();
}, Friends.prototype.connect = function (url__33, canCreateDiscussions) {
  this.uri = url__33;
  this.jwt = canCreateDiscussions;
  this.socket = new WebSocket(url__33);
  this.socket.onopen = this.onOpen.bind(this);
  this.socket.onmessage = this.onMessage.bind(this);
  this.socket.onclose = this.onClose.bind(this);
  var pointerColors = this;
  this.connectionTimeout = setTimeout(function () {
    var color = pointerColors.socket;
    if (null !== color && 0 === color.readyState) {
      color.onclose = color.onmessage = function () {};
      color.onopen = function () {
        color.close();
      };
      color.close();
      pointerColors.socket = color = null;
      console.log("FS timeout");
      pointerColors.reconnect();
    }
  }, 5e3);
}, Friends.prototype.connected = function () {
  return this.socket && this.socket.readyState === this.socket.OPEN;
}, Friends.prototype.isFriendChat = function () {
  return this.friendsOpened && this.openChatName;
}, Friends.prototype.safeSend = function (mmCoreSplitViewBlock) {
  return !(!this.socket || this.socket.readyState !== this.socket.OPEN) && (this.socket.send(mmCoreSplitViewBlock), true);
}, Friends.prototype.sendChat = function (name) {
  let artistTrack = JSON.stringify({t: 5, u: this.openChatName, m: name});
  if (this.safeSend(artistTrack), !this.connected()) {
    let _spring2 = document.createElement("div");
    _spring2.innerHTML = "<b>" + this.Live.getName(this.Live.cid) + "</b>: " + htmlEntities(name);
    _spring2.style.color = "#ff5555";
    this.showInChat("", _spring2);
    let val = document.createElement("img");
    val.src = CDN_URL("/res/svg/spinWhite.svg");
    val.style.width = "0.8em";
    _spring2 = document.createElement("div");
    _spring2.appendChild(val);
    _spring2.style.fontWeight = "bold";
    _spring2.innerHTML += " Could not send, reconnecting...";
    _spring2.style.fontSize = "0.7em";
    _spring2.style.color = "grey";
    this.showInChat("", _spring2);
  }
}, Friends.prototype.sendInvite = function () {
  if (!this.friendsOpened || !this.openChatName || !this.statusData) {
    return;
  }
  let artistTrack = "[INV:" + this.statusData.r + ":" + this.statusData.n.replace("/:/g", "\\:") + "]";
  this.sendChat(artistTrack);
}, Friends.prototype.reconnect = function () {
  this.reconnects++;
  let n = Math.min(5e3, 1e3 * (this.reconnects - 1));
  if (this.reconnects > 60 && (n = 3e4), n = Math.max(this.forcedReconDelay, n), this.reconnects <= 100) {
    var ix = this;
    setTimeout(function () {
      ix.connect(ix.uri, ix.jwt);
    }, n);
  }
}, Friends.prototype.onOpen = function () {
  let artistTrack = JSON.stringify({t: 1, j: this.jwt});
  this.safeSend(artistTrack);
}, Friends.prototype.onMessage = function (xhr) {
  if ("string" == typeof xhr.data) {
    this.handleResponse(JSON.parse(xhr.data));
  }
}, Friends.prototype.handleResponse = function (data) {
  switch (data.t) {
    case 1:
      this.reconnects = 0;
      this.forcedReconDelay = 0;
      this.friendsError = null;
      let artistTrack = JSON.stringify({t: 2});
      this.safeSend(artistTrack);
      if (this.pendingStatus) {
        this.safeSend(this.pendingStatus);
        this.pendingStatus = null;
      }
      break;
    case 2:
      if (this.friends = data.f, this.friendsOpened && this.friendBoxMode(this.VIEW_MODE.FRIEND_LIST), data.u && data.u.length) {
        for (let user of data.u) {
          this.unreadChannels = {};
          this.unreadChannels[user] = 1;
        }
        if (!this.friendsOpened) {
          this.friendsNotif(data.u.length);
        }
      }
      break;
    case 4:
      if (this.friendsOpened && data.u === this.openChatName) {
        for (let _jsonName = data.h.length - 1; _jsonName >= 0; --_jsonName) {
          let artistTrack = 1 === data.h[_jsonName].s ? this.Live.getName(this.Live.cid) : this.Live.getAuthorizedNameLink(data.u, 0);
          this.showInChat(artistTrack, data.h[_jsonName].m, null, data.h[_jsonName].t);
        }
        if (delete this.unreadChannels[data.u], !data.h.length) {
          let artistTrack = document.createElement("div");
          artistTrack.innerHTML = trans(i18n.frNewChatH, {name: this.Live.getAuthorizedNameLink(data.u, 0)});
          artistTrack.style.color = "grey";
          artistTrack.style.fontSize = "0.8em";
          artistTrack.style.textAlign = "center";
          this.showInChat("", artistTrack);
        }
      }
      break;
    case 5:
      let p = data.u;
      if (data.s || this.checkNewFriend(data.u), this.friendsOpened) {
        if (p === this.openChatName) {
          let artistTrack = 1 === data.s ? this.Live.getName(this.Live.cid) : this.Live.getAuthorizedNameLink(p, data.y);
          if (this.showInChat(artistTrack, data.m, null, data.i), !data.s) {
            let artistTrack = JSON.stringify({t: 6, u: p, i: data.i});
            this.safeSend(artistTrack);
          }
        } else {
          if (null !== this.openChatName) {
            if (this.notifSoundDM(), this.dmChatBackButton) {
              let result = this.dmChatBackButton.getElementsByClassName("msgNotif");
              if (result.length) {
                result = result[0];
                let value = parseInt(result.textContent);
                if (value) {
                  value = value + 1;
                } else {
                  value = 1;
                }
                result.textContent = Math.min(99, value);
              } else {
                result = document.createElement("div");
                result.className = "msgNotif";
                result.textContent = 1;
                this.dmChatBackButton.appendChild(result);
              }
            }
          } else {
            this.notifSoundDM();
            let iy = document.getElementById("fr-" + p);
            if (iy) {
              let PL$133 = iy.getElementsByClassName("f-ch")[0];
              let PL$159 = PL$133.getElementsByClassName("msgNotif");
              if (PL$159.length) {
                let GET_AUTH_URL_TIMEOUT = parseInt(PL$159[0].textContent);
                if (GET_AUTH_URL_TIMEOUT) {
                  GET_AUTH_URL_TIMEOUT = GET_AUTH_URL_TIMEOUT + 1;
                } else {
                  GET_AUTH_URL_TIMEOUT = 1;
                }
                PL$133.removeChild(PL$159[0]);
                this.friendRowNotif(PL$133, GET_AUTH_URL_TIMEOUT);
              } else {
                this.friendRowNotif(PL$133, 1);
              }
            }
          }
        }
      } else {
        if (1 == data.s) {
          break;
        }
        if (!this.unreadChannels.hasOwnProperty(p)) {
          this.unreadChannels[p] = 1;
        }
        let artistTrack = Object.keys(this.unreadChannels).length;
        this.friendsNotif(artistTrack);
        this.notifSoundDM();
      }
      break;
    case 99:
      this.friendsError = data.e;
      this.forcedReconDelay = 2e4;
      if (this.friendsOpened) {
        this.decideFriendsBoxMode();
      }
  }
}, Friends.prototype.checkNewFriend = function (value) {
  let alreadyMarked = false;
  let selfCompletionActive = false;
  for (let indexLookupKey = 0; indexLookupKey < this.friends.length; ++indexLookupKey) {
    let imscp = this.friends[indexLookupKey];
    if (imscp.n == value) {
      if (!imscp.s) {
        alreadyMarked = false;
        break;
      }
      selfCompletionActive = true;
      break;
    }
  }
  if (!(selfCompletionActive && !alreadyMarked)) {
    this.requestRefresh();
  }
}, Friends.prototype.notifSoundDM = function () {
  if (!this.Live.p.Settings.DMsound) {
    return;
  }
  let iz = this.Live.p.timestamp();
  if (!this.lastNotifSound || iz - this.lastNotifSound > 1e3) {
    createjs.Sound.play("msg");
    this.lastNotifSound = iz;
  }
}, Friends.prototype.friendsNotif = function (suggestedValue) {
  this.Live.friendsBtn.className = "friNew";
  if (!this.notifElem) {
    this.notifElem = document.createElement("div");
    this.Live.friendsBtn.appendChild(this.notifElem);
  }
  this.notifElem.className = "frNotif";
  if (suggestedValue > 0) {
    this.notifElem.textContent = Math.min(99, suggestedValue);
  } else {
    if (-1 === suggestedValue) {
      this.notifElem.textContent = "NEW";
      this.notifElem.classList.add("newTag");
    }
  }
  showElem(this.notifElem);
}, Friends.prototype.friendRowNotif = function (elem, value) {
  elem.classList.add("newMsg");
  let input = document.createElement("div");
  input.className = "msgNotif";
  input.textContent = Math.min(99, value);
  elem.appendChild(input);
}, Friends.prototype.tryRenderInvite = function (canCreateDiscussions, currentAppUser, mtime) {
  if ("string" != typeof canCreateDiscussions) {
    return canCreateDiscussions;
  }
  let ja = canCreateDiscussions.match(/^\[INV:([\w]+):(.*)\]$/);
  if (ja) {
    let processEvaluatorsCallback = ja[1];
    let jb = ja[2];
    let window = document.createElement("div");
    window.className = "inviteBox";
    window.innerHTML = getSVG("s-envelope", "dark", "");
    let universalSendCommand = document.createElement("span");
    universalSendCommand.innerHTML = trans(i18n.frInvTo, {room: "<b>" + jb + "</b>"});
    window.appendChild(universalSendCommand);
    var expected_date2 = new Date(1e3 * mtime);
    let jc = expected_date2.getHours() + ":" + ("0" + expected_date2.getMinutes()).substr(-2);
    let srcToEval = document.createElement("span");
    return srcToEval.className = "invInfo", srcToEval.innerHTML = jc + "<br>" + trans(i18n.frInvBy, {user: currentAppUser}), window.appendChild(srcToEval), processEvaluatorsCallback != this.Live.rid ? window.addEventListener("click", function (canCreateDiscussions) {
      window.joinRoom(processEvaluatorsCallback);
    }) : "function" == typeof $ && $(window).tooltip({title: i18n.frInvIn, template: this.ttClass("ttch"), viewport: {selector: "body", padding: -10000}}), window;
  }
  return canCreateDiscussions;
}, Friends.prototype.showInChat = function (sketchName, sketch, mmaPushNotificationsComponent, resolve) {
  var i = "" === sketchName ? "" : "<b>" + sketchName + ": </b>";
  var GET_AUTH_URL_TIMEOUT = "" === sketchName ? "srv" : "";
  sketch = this.tryRenderInvite(sketch, sketchName, resolve);
  var btnList = document.createElement("div");
  btnList.classList.add("chl");
  if ("object" == typeof mmaPushNotificationsComponent && null !== mmaPushNotificationsComponent) {
    btnList.classList.add(mmaPushNotificationsComponent);
  }
  if (GET_AUTH_URL_TIMEOUT) {
    btnList.classList.add(GET_AUTH_URL_TIMEOUT);
  }
  if (sketch instanceof HTMLDivElement) {
    btnList.appendChild(sketch);
  } else {
    btnList.innerHTML = i + sketch;
  }
  this.Live.friendsBox.appendChild(btnList);
  this.Live.chatArea.scrollTop = this.Live.chatArea.scrollHeight;
}, Friends.prototype.getCategorySeparator = function (canCreateDiscussions) {
  let emoticonI18n = document.createElement("div");
  return emoticonI18n.classList.add("sep"), canCreateDiscussions ? (emoticonI18n.classList.add("on"), emoticonI18n.textContent = i18n.frOn) : emoticonI18n.textContent = i18n.frOff, emoticonI18n;
}, Friends.prototype.requestRefresh = function () {
  let artistTrack = JSON.stringify({t: 2});
  this.safeSend(artistTrack);
  this.openChatName = null;
  if (!this.connected()) {
    this.loadingScreen("Reconnecting...");
  }
}, Friends.prototype.sendStatus = function (pointRadius, isSlidingUp, canCreateDiscussions) {
  this.statusData = {t: 3, r: pointRadius, p: !isSlidingUp, n: canCreateDiscussions.substring(0, 30)};
  let artistTrack = JSON.stringify(this.statusData);
  if (this.connected()) {
    this.safeSend(artistTrack);
  } else {
    this.pendingStatus = artistTrack;
  }
  if (this.friendsOpened && this.friendsCount) {
    this.requestRefresh();
  }
}, Friends.prototype.openChat = function (v) {
  let numKeysDeleted = JSON.stringify({t: 4, u: v});
  this.safeSend(numKeysDeleted);
  this.Live.friendsBox.innerHTML = "";
  this.Live.friendsBox.className = "fchat";
  let window = document.createElement("h3");
  window.className = "chatHeader";
  window.textContent = v;
  let processEvaluatorsCallback = document.createElement("button");
  processEvaluatorsCallback.innerHTML = getSVG("s-exit", "dark", "");
  processEvaluatorsCallback.addEventListener("click", this.requestRefresh.bind(this));
  processEvaluatorsCallback.className = "exitDM";
  this.dmChatBackButton = processEvaluatorsCallback;
  window.appendChild(processEvaluatorsCallback);
  let $list = document.createElement("button");
  $list.innerHTML = getSVG("s-envelope", "dark", "");
  $list.addEventListener("click", this.sendInvite.bind(this));
  $list.className = "inviteDM";
  if ("function" == typeof $) {
    $($list).tooltip({title: i18n.frInv, viewport: {selector: "body", padding: -10000}});
  }
  window.appendChild($list);
  let postDateGmt = this.Live.chatArea;
  if (this.chatHeader) {
    this.chatBox.removeChild(this.chatHeader);
    this.chatHeader = null;
  }
  this.chatHeader = window;
  this.chatBox.insertBefore(window, postDateGmt);
  this.Live.chatInput.placeholder = trans(i18n.frMsgTo, {name: v});
  this.openChatName = v;
}, Friends.prototype.ttClass = function (canCreateDiscussions) {
  return '<div class="tooltip ' + canCreateDiscussions + '" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';
}, Friends.prototype.updateFriendList = function () {
  let packByNumType = this;
  this.openChatName = null;
  this.Live.chatInput.placeholder = "";
  this.Live.friendsBox.innerHTML = "";
  this.Live.friendsBox.className = "flist";
  this.Live.chatArea.style.paddingTop = null;
  if (this.chatHeader) {
    this.chatBox.removeChild(this.chatHeader);
    this.chatHeader = null;
  }
  let CustomTests = document.createElement("h3");
  CustomTests.textContent = i18n.fr;
  let emoticonI18n = document.createElement("button");
  emoticonI18n.title = i18n.frRel;
  emoticonI18n.innerHTML = getSVG("s-reload", "dark", "");
  emoticonI18n.addEventListener("click", this.requestRefresh.bind(this));
  CustomTests.appendChild(emoticonI18n);
  this.Live.friendsBox.appendChild(CustomTests);
  this.friends.sort(function (dump1, dump2) {
    return dump1.s != dump2.s ? dump1.s && !dump2.s ? -1 : 1 : dump1.c && !dump2.c ? -1 : dump2.c && !dump1.c ? 1 : dump1.n.localeCompare(dump2.n);
  });
  let max = null;
  for (let indexLookupKey = 0; indexLookupKey < this.friends.length; ++indexLookupKey) {
    let data = this.friends[indexLookupKey];
    if (max !== data.s) {
      max = data.s;
      this.Live.friendsBox.appendChild(this.getCategorySeparator(max));
    }
    let helper = document.createElement("div");
    helper.className = "fr";
    helper.id = "fr-" + data.n;
    let component = document.createElement("a");
    component.target = "_blank";
    component.href = "/u/" + data.n;
    component.textContent = data.n;
    helper.appendChild(component);
    let val = document.createElement("button");
    if (val.title = i18n.frChat, val.classList.add("f-ch"), data.c && this.friendRowNotif(val, data.c), val.addEventListener("click", function () {
      packByNumType.openChat(data.n);
    }), helper.appendChild(val), data.s) {
      let o = document.createElement("button");
      let t = "";
      if (data.r && this.Live.rid != data.r) {
        o.addEventListener("click", function (canCreateDiscussions) {
          if (canCreateDiscussions.target.hasAttribute("aria-describedby")) {
            let DOM_CONTENT_LOADED = canCreateDiscussions.target.getAttribute("aria-describedby");
            let artistTrack = document.getElementById(DOM_CONTENT_LOADED);
            if (artistTrack) {
              artistTrack.parentNode.removeChild(artistTrack);
            }
          }
          window.joinRoom(data.r);
        });
        if (data.a) {
          t = data.a;
        }
      } else {
        o.classList.add("disBtn");
        if (data.r) {
          if (this.Live.rid == data.r) {
            t = i18n.frIn;
          }
        } else {
          t = i18n.frPriv;
        }
      }
      if (t && "function" == typeof $) {
        $(o).tooltip({title: t, template: this.ttClass("ttch"), html: true, viewport: {selector: "body", padding: -10000}});
      }
      o.classList.add("f-jo");
      helper.appendChild(o);
    }
    this.Live.friendsBox.appendChild(helper);
  }
}, Friends.prototype.loadingScreen = function (i, isSlidingUp) {
  if (this.friendsOpened) {
    this.Live.friendsBox.style.display = "flex";
    this.Live.friendsBox.innerHTML = "";
    var artistTrack = document.createElement("img");
    if (isSlidingUp) {
      if (1 === isSlidingUp) {
        artistTrack.src = CDN_URL("/res/svg/cancel.svg");
      }
    } else {
      artistTrack.src = CDN_URL("/res/svg/spinWhite.svg");
    }
    artistTrack.style.width = "27px";
    var uniqueLinks = document.createElement("span");
    uniqueLinks.innerHTML = i;
    this.Live.friendsBox.appendChild(artistTrack);
    this.Live.friendsBox.appendChild(uniqueLinks);
    this.Live.friendsBox.className = "fempty";
  }
}, Friends.prototype.friendBoxMode = function (canCreateDiscussions) {
  if (this.Live.friendsBox.className = "", canCreateDiscussions === this.VIEW_MODE.FRIEND_LIST_LOADING) {
    this.loadingScreen(i18n.frLoad);
  } else {
    if (canCreateDiscussions === this.VIEW_MODE.LOGIN_FIRST) {
      this.loadingScreen(i18n.frLogin, 1);
    } else {
      if (canCreateDiscussions === this.VIEW_MODE.TOO_MANY_CONN) {
        let groupNamePrefix = "Account is already connected multiple times.";
        let dupeNameCount = "Close other connections.";
        this.loadingScreen(groupNamePrefix + "<br>" + dupeNameCount, 1);
      } else {
        if (canCreateDiscussions === this.VIEW_MODE.NO_FRIENDS) {
          this.Live.friendsBox.style.display = "flex";
          this.Live.friendsBox.innerHTML = "<h1>" + i18n.frEmpty + "</h1>" + i18n.frHowAdd;
          this.Live.friendsBox.className = "fempty";
        } else {
          if (canCreateDiscussions === this.VIEW_MODE.FRIEND_LIST) {
            this.requestRefresh();
            this.Live.friendsBox.style.display = "block";
            this.updateFriendList();
            if (this.friends && this.friends.length > 2 && this.chatBox.clientHeight < 140 && !this.Live.p.GS.chatExpanded) {
              this.Live.p.GS.chatExpand();
            }
          } else {
            if (canCreateDiscussions === this.VIEW_MODE.INTRO) {
              if (!this.friendsOpened) {
                return;
              }
              if (this.chatBox.clientHeight < 153 && !this.Live.p.GS.chatExpanded) {
                this.Live.p.GS.chatExpand();
              }
              this.Live.friendsBox.innerHTML = '<h1 style="font-size: 20px;margin-top: 3px;">' + i18n.frWelc + '</h1><ul style="margin-bottom: 7px;margin-left: -13px;"><li>' + i18n.frIntro + "</li><li>" + i18n.frIntro2 + "</li><li>" + trans(i18n.frIntro3, {frPage: '<a target="_blank" href="/friends">' + i18n.frPage + "</a>"}) + "</li></ul>";
              let emoticonI18n = document.createElement("button");
              emoticonI18n.textContent = i18n.frIntroCl;
              emoticonI18n.style.border = "none";
              emoticonI18n.style.padding = "4px 29px";
              emoticonI18n.addEventListener("click", this.decideFriendsBoxMode.bind(this));
              this.Live.friendsBox.appendChild(emoticonI18n);
              localStorage.setItem("frN", 1);
            }
          }
        }
      }
    }
  }
}, Friends.prototype.viewIntro = function () {
  return null === localStorage.getItem("frN");
}, Friends.prototype.decideFriendsBoxMode = function () {
  if (this.viewIntro()) {
    this.friendBoxMode(this.VIEW_MODE.INTRO);
  } else {
    if (this.Live.authorized) {
      if (1 === this.friendsError) {
        this.friendBoxMode(this.VIEW_MODE.TOO_MANY_CONN);
      } else {
        if (0 === this.friendsCount) {
          this.friendBoxMode(this.VIEW_MODE.NO_FRIENDS);
        } else {
          if (null === this.friendsCount || null === this.friends) {
            this.friendBoxMode(this.VIEW_MODE.FRIEND_LIST_LOADING);
          } else {
            this.friendBoxMode(this.VIEW_MODE.FRIEND_LIST);
          }
        }
      }
    } else {
      this.friendBoxMode(this.VIEW_MODE.LOGIN_FIRST);
    }
  }
}, Friends.prototype.openFriends = function () {
  if (this.friendsOpened = !this.friendsOpened, hideElem(this.notifElem), this.friendsOpened ? (this.Live.friendsBtn.className = "rch", this.Live.chatBox.style.display = "none", this.Live.removeScrollButton(), this.Live.friendsBtn.setAttribute("data-original-title", "Room chat"), this.chatBox.clientHeight < 100 && !this.Live.p.GS.chatExpanded && this.Live.p.GS.chatExpand(), this.decideFriendsBoxMode()) : (this.Live.friendsBtn.className = "fri", this.Live.chatBox.style.display = "block", this.Live.friendsBox.style.display = "none", this.Live.chatArea.style.paddingTop = null, this.Live.chatInput.placeholder = "", this.chatHeader && (this.chatBox.removeChild(this.chatHeader), this.chatHeader = null), this.Live.friendsBtn.setAttribute("data-original-title", "Friends"), this.Live.scrollOnMessage(true)), this.Live.friendsBtn.hasAttribute("aria-describedby")) {
    let DOM_CONTENT_LOADED = this.Live.friendsBtn.getAttribute("aria-describedby");
    hideElem(document.getElementById(DOM_CONTENT_LOADED));
  }
}, Friends.prototype.onClose = function () {
  this.reconnect();
}, function () {
  function prefetchGroupsInfo(forum, courseId, canCreateDiscussions) {
    item.skins[1].data = forum;
    item.skins[1].w = courseId;
    item.skins[1].cdn = false;
    item.changeSkin(1);
    if (canCreateDiscussions && canCreateDiscussions.global) {
      item.GS.skinOverride = item.skins[1];
      item.GS.slots.forEach(function (canCreateDiscussions) {
        canCreateDiscussions.v.changeSkin(1);
      });
    }
  }
  function $get(mmCoreSplitViewBlock, $state) {
    $state = $state || {};
    if ("webGL" === item.v.NAME) {
      if ("gif" !== mmCoreSplitViewBlock.split(".").pop()) {
        item.v.setupVideo(mmCoreSplitViewBlock, $state);
      } else {
        item.v.setupGif(mmCoreSplitViewBlock, $state);
      }
    } else {
      alert("Enable webGL before using loadVideoSkin!");
    }
  }
  function QueryStringParser$placeNestedValue(value, i) {
    item.changeSFX(value, i);
  }
  function UkkioSDK(options) {
    item.Live.joinRoom(options);
  }
  window.onload = function () {
    function getSectionsData() {
      je.style.cursor = "none";
      jd = true;
      setTimeout(function () {
        jd = false;
      }, 100);
    }
    (item = new Game).start();
    settingsTabs.init();
    document.addEventListener("keydown", item.keyInput2.bind(item), false);
    document.addEventListener("keyup", item.keyInput3.bind(item), false);
    document.getElementById("main").addEventListener("click", function () {
      item.setFocusState(0);
    }, true);
    document.getElementById("createRoom").addEventListener("click", function () {
      item.setFocusState(1);
    }, true);
    document.getElementById("settingsBox").addEventListener("click", function () {
      item.setFocusState(1);
    }, true);
    document.getElementById("chatBox").addEventListener("click", function () {
      item.setFocusState(1);
    }, true);
    document.getElementById("chatBox").addEventListener("scroll", item.Live.onChatScroll.bind(item.Live), true);
    document.getElementById("lobbyBox").addEventListener("click", function () {
      item.setFocusState(1);
    }, true);
    document.getElementById("showMore").onclick = item.Live.toggleMore.bind(item.Live);
    document.getElementById("moreClose").onclick = item.Live.toggleMore.bind(item.Live);
    document.getElementById("cancelCreation").onclick = item.Live.closeRoomDialog.bind(item.Live);
    document.getElementById("createRoomButton").onclick = item.Live.showRoomDialog.bind(item.Live);
    document.getElementById("editRoomButton").onclick = item.Live.showRoomDialogForEdit.bind(item.Live);
    document.getElementById("lobby").onclick = item.Live.toggleLobbby.bind(item.Live);
    document.getElementById("refreshLobby").onclick = item.Live.refreshLobbby.bind(item.Live);
    document.getElementById("settings").onclick = function () {
      item.Settings.openSettings();
      item.setFocusState(1);
    };
    document.getElementById("res").onclick = item.Live.sendRestartEvent.bind(item.Live);
    document.getElementById("closeLobby").onclick = item.Live.toggleLobbby.bind(item.Live);
    document.getElementById("closeLink").onclick = item.Live.hideResults.bind(item.Live);
    document.getElementById("create").onclick = item.Live.makeRoomWrapper.bind(item.Live);
    document.getElementById("sendMsg").onclick = item.Live.sendChat.bind(item.Live);
    document.getElementById("myCanvas").onclick = function () {
      if (!item.Live.sitout && item.focusState) {
        item.redraw();
      }
      item.setFocusState(0);
    };
    document.getElementById("chatInput").onclick = function () {
      item.setFocusState(1);
    };
    document.getElementById("chatInput").onfocus = function () {
      item.setFocusState(1);
    };
    document.getElementById("chatInput").addEventListener("keydown", function (canCreateDiscussions) {
      if (13 === canCreateDiscussions.keyCode) {
        item.Live.sendChat();
      }
    });
    document.getElementById("more-practice").onclick = item.Live.toggleMorePractice.bind(item.Live, false);
    document.getElementById("hasSolid").onclick = function () {
      document.getElementById("solid").disabled = !document.getElementById("hasSolid").checked;
    };
    document.getElementById("ghost").onclick = function () {
      item.ghostEnabled = document.getElementById("ghost").checked;
      if (item.play && item.ghostEnabled) {
        item.updateGhostPiece();
        item.redraw();
      }
    };
    document.getElementById("more_simple").onclick = function () {
      item.Live.switchRDmode(0);
    };
    document.getElementById("more_adv").onclick = function () {
      item.Live.switchRDmode(1);
    };
    document.getElementById("more_preset").onclick = function () {
      item.Live.switchRDmode(2);
    };
    document.getElementById("saveRD").onclick = function () {
      item.Live.saveRD();
    };
    document.getElementById("saveDataClose").onclick = function () {
      this.parentElement.style.display = "none";
    };
    document.getElementById("addJL").onclick = function () {
      showElem(document.getElementById("joinLimits"));
    };
    document.getElementById("saveLimits").onclick = function () {
      hideElem(document.getElementById("joinLimits"));
    };
    document.getElementById("attackMode").onchange = function () {
      item.Live.attackSelect();
    };
    document.getElementById("presetSel").onchange = function () {
      item.Live.onPresetChange();
    };
    document.getElementById("customPre").onclick = function () {
      item.Live.useCustomPreset();
    };
    document.getElementById("nullpoDAS").onclick = item.Settings.nullpoDAS.bind(item.Settings);
    document.getElementById("sfxSelect").onchange = soundCredits;
    document.getElementById("vsfxSelect").onchange = soundCredits;
    document.getElementById("chatExpand").onclick = item.GS.chatExpand.bind(item.GS);
    window.addEventListener("blur", function () {
      item.browserTabFocusChange(0);
    }, false);
    window.addEventListener("focus", function () {
      item.browserTabFocusChange(1);
    }, false);
    window.addEventListener("gamepadconnected", item.Settings.initGamePad.bind(item.Settings));
    window.addEventListener("gamepaddisconnected", item.Settings.removeGamePad.bind(item.Settings));
    document.getElementById("vol-control").addEventListener("input", function () {
      item.Settings.volumeChange(this.value);
    });
    document.getElementById("slotSettingsBtn").addEventListener("click", function () {
      var jf = document.getElementById("slotSettingsBtn");
      var container = document.getElementById("slotSettings");
      jf.classList.toggle("zoomIc");
      jf.classList.toggle("okIc");
      toggleElem(container);
    }, false);
    document.getElementById("slotSettings").addEventListener("click", function (canCreateDiscussions) {
      canCreateDiscussions.stopImmediatePropagation();
    }, false);
    document.getElementById("zoomControl").onchange = function () {
      var whiteRating = parseInt(document.getElementById("zoomControl").value);
      document.getElementById("zoomNow").innerHTML = whiteRating + "%";
      item.GS.setZoom.call(item.GS, whiteRating);
    };
    document.getElementById("fsSlots").onclick = function () {
      item.GS.fullScreen.call(item.GS, document.getElementById("fsSlots").checked);
    };
    document.getElementById("hqSlots").onclick = function () {
      item.GS.forceExtended = document.getElementById("hqSlots").checked;
      item.GS.autoScale.call(item.GS);
    };
    document.getElementById("statsSlots").onclick = function () {
      item.GS.slotStats = document.getElementById("statsSlots").checked;
      item.GS.autoScale.call(item.GS);
    };
    window.joinRoom = UkkioSDK;
    window.loadSkin = prefetchGroupsInfo;
    window.loadVideoSkin = $get;
    window.loadGhostSkin = item.loadGhostSkin.bind(item);
    window.loadSFX = QueryStringParser$placeNestedValue;
    var indexLookupKey = 0;
    for (; indexLookupKey < document.gridForm.grs.length; indexLookupKey++) {
      document.gridForm.grs[indexLookupKey].onclick = function () {
        item.Settings.setGrid(parseInt(this.value));
      };
    }
    var selectorText = function () {
      try {
        if (createjs.WebAudioPlugin.context && "suspended" === createjs.WebAudioPlugin.context.state) {
          createjs.WebAudioPlugin.context.resume();
          window.removeEventListener("click", selectorText);
        }
      } catch (previousState) {
        console.error("Error while trying to resume the Web Audio context.");
        console.error(previousState);
      }
    };
    window.addEventListener("click", selectorText);
    var _takingTooLongTimeout;
    var jd = false;
    var je = document.getElementById("main");
    je.addEventListener("mousemove", function () {
      if (!jd) {
        jd = false;
        clearTimeout(_takingTooLongTimeout);
        je.style.cursor = null;
        _takingTooLongTimeout = setTimeout(getSectionsData, 3e3);
      }
    });
  };
  var item = void 0;
  if ("function" == typeof $) {
    $('[data-toggle="tooltip"]').tooltip({viewport: {selector: "body", padding: -10000}});
  }
}(), ChatAutocomplete.prototype.clearEmotes = function () {
  this.hintsImg = {};
  this.hints = [];
}, ChatAutocomplete.prototype.initEmoteHints = function () {
  this.hintsImg = {};
  this.hints = Object.keys(this.hintsImg);
}, ChatAutocomplete.prototype.addEmotes = function (unscreenedStyles) {
  const costSum = this.addEmoteSurrounder;
  for (const folder of unscreenedStyles) {
    let folderEntity = costSum + folder.n + costSum;
    this.hints.push(folderEntity);
    if (folder.u) {
      this.hintsImg[folderEntity] = folder.u;
    } else {
      this.hintsImg[folderEntity] = "res/oe/" + folder.n + ".svg";
    }
  }
  this.moreEmotesAdded = true;
}, ChatAutocomplete.prototype.loadEmotesIndex = function (geoportal) {
  if (!this.moreEmotesAdded) {
    var xhr = new XMLHttpRequest;
    var url = "/code/emotes?" + geoportal;
    xhr.timeout = 8e3;
    xhr.open("GET", url, true);
    try {
      xhr.send();
    } catch (jg) {}
    var command_codes = this;
    xhr.ontimeout = function () {};
    xhr.onerror = xhr.onabort = function () {};
    xhr.onload = function () {
      if (200 === xhr.status) {
        let data = JSON.parse(xhr.responseText);
        if (null !== command_codes.preProcessEmotes) {
          data = command_codes.preProcessEmotes(data);
        }
        command_codes.addEmotes(data);
        if (null !== command_codes.onEmoteObjectReady) {
          command_codes.onEmoteObjectReady(data);
        }
      }
    };
  }
}, ChatAutocomplete.prototype.init = function () {
  var directiveProcessors = this;
  this.inp.addEventListener("input", function (canCreateDiscussions) {
    var $node = directiveProcessors.getCurrentWord();
    directiveProcessors.processHint($node);
  }, false);
  if ("" === this.prfx) {
    this.inp.addEventListener("focus", function (canCreateDiscussions) {
      var $node = directiveProcessors.getCurrentWord();
      directiveProcessors.processHint($node);
    });
  }
  this.inp.addEventListener("keydown", function (canCreateDiscussions) {
    if ("none" !== directiveProcessors.hintsElem.style.display) {
      if (38 === canCreateDiscussions.keyCode || 40 === canCreateDiscussions.keyCode) {
        directiveProcessors.moveSelected(38 === canCreateDiscussions.keyCode ? -1 : 1);
        canCreateDiscussions.preventDefault();
      } else {
        if (13 === canCreateDiscussions.keyCode && null !== this.selectedIndex) {
          directiveProcessors.hintsElem.childNodes[directiveProcessors.selectedIndex].click();
          canCreateDiscussions.preventDefault();
          canCreateDiscussions.stopImmediatePropagation();
        }
      }
    }
  }, true);
}, ChatAutocomplete.prototype.moveSelected = function (step) {
  var shape = this.hintsElem.childNodes;
  this.hintsElem.childNodes[this.selectedIndex].classList.remove("ksel");
  this.selectedIndex = (shape.length + this.selectedIndex + step) % shape.length;
  this.setSelected(this.selectedIndex);
}, ChatAutocomplete.prototype.setSelected = function (canCreateDiscussions) {
  if (canCreateDiscussions >= this.hintsElem.childNodes.length) {
    this.selectedIndex = null;
  } else {
    this.selectedIndex = canCreateDiscussions;
    this.hintsElem.childNodes[this.selectedIndex].classList.add("ksel");
  }
}, ChatAutocomplete.prototype.processHint = function (componentStack) {
  var nameStr = componentStack[0].toLowerCase();
  var parentComponentDef = componentStack[1];
  if ("" !== this.prfx && (null === nameStr || nameStr.length < this.minimalLengthForHint || nameStr[0] !== this.prfx)) {
    hideElem(this.hintsElem);
  } else {
    name = name;
    var req = nameStr.substring(this.prfx.length);
    var name = this.prefixInSearch ? nameStr : req;
    var jh = 0;
    var headerArray = "function" == typeof this.hints ? this.hints() : this.hints;
    this.hintsElem.innerHTML = "";
    var set = [];
    var array = [];
    var hdrIndex;
    for (hdrIndex in headerArray) {
      var exports = (value = headerArray[hdrIndex]).toLowerCase();
      if (exports.startsWith(name)) {
        set.push(value);
      } else {
        if (req.length >= 2 && exports.includes(req)) {
          array.push(value);
        }
      }
    }
    if (set.sort(), set.length < this.maxPerHint) {
      array.sort();
      for (const value of array) {
        if (-1 === set.indexOf(value) && (set.push(value), set.length >= this.maxPerHint)) {
          break;
        }
      }
    }
    var value;
    for (value of set) {
      var that = document.createElement("div");
      if (this.hintsImg && this.hintsImg[value]) {
        that.className = "emHint";
        var hoverItem = document.createElement("img");
        hoverItem.src = CDN_URL("/" + this.hintsImg[value]);
        that.appendChild(hoverItem);
        var option = document.createElement("div");
        option.textContent = value;
        that.appendChild(option);
      } else {
        that.innerHTML = value;
      }
      that.dataset.pos = parentComponentDef;
      that.dataset.str = value;
      var ji = this;
      if (that.addEventListener("click", function (canCreateDiscussions) {
        var inBtn = ji.inp.value;
        var d = parseInt(this.dataset.pos);
        var VoiceEffects = inBtn.substring(0, d);
        var time = VoiceEffects.indexOf(" ");
        var lastTime = time + 1;
        for (; -1 !== time;) {
          if (-1 !== (time = VoiceEffects.indexOf(" ", time + 1))) {
            lastTime = time + 1;
          }
        }
        if (!ji.prefixInSearch) {
          ++lastTime;
        }
        ji.inp.value = inBtn.substring(0, lastTime) + this.dataset.str + " " + inBtn.substring(d);
        ji.inp.focus();
        ji.setCaretPosition(d + this.dataset.str.length + 1 - (d - lastTime));
        hideElem(ji.hintsElem);
        if (ji.wipePrevious) {
          ji.inp.value = this.dataset.str;
          if (ji.onWiped) {
            ji.onWiped(this.dataset.str);
          }
        }
      }, false), this.hintsElem.appendChild(that), ++jh >= this.maxPerHint) {
        break;
      }
    }
    this.setSelected(0);
    if (jh) {
      showElem(this.hintsElem);
    } else {
      hideElem(this.hintsElem);
    }
  }
}, ChatAutocomplete.prototype.ReturnWord = function (boardManager, startColumn) {
  var existingFold = boardManager.substring(0, startColumn);
  if (existingFold.indexOf(" ") > 0) {
    var jj = existingFold.split(" ");
    return jj[jj.length - 1];
  }
  return existingFold;
}, ChatAutocomplete.prototype.getCurrentWord = function () {
  var artistTrack = this.GetCaretPosition(this.inp);
  return [this.ReturnWord(this.inp.value, artistTrack), artistTrack];
}, ChatAutocomplete.prototype.GetCaretPosition = function (tagsWithShortcuts) {
  var tagOrShortcut = 0;
  if (document.selection) {
    tagsWithShortcuts.focus();
    var jk = document.selection.createRange();
    jk.moveStart("character", -tagsWithShortcuts.value.length);
    tagOrShortcut = jk.text.length;
  } else {
    if (tagsWithShortcuts.selectionStart || "0" == tagsWithShortcuts.selectionStart) {
      tagOrShortcut = tagsWithShortcuts.selectionStart;
    }
  }
  return tagOrShortcut;
}, ChatAutocomplete.prototype.setCaretPosition = function (n) {
  if (n = Math.max(Math.min(n, this.inp.value.length), 0), this.inp.createTextRange) {
    var comparator = this.inp.createTextRange();
    comparator.moveStart("character", n);
    comparator.collapse();
    comparator.select();
  } else {
    this.inp.focus();
    this.inp.setSelectionRange(n, n);
  }
}, Matrix.multiply = function (args, data, result) {
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
  return result[0] = row * width + col * stride + c * angle + dy * k, result[1] = row * scale + col * s + c * step + dy * scaleFactor, result[2] = row * h + col * w + c * t + dy * multiplier, result[3] = row * WIDTH + col * size + c * p + dy * level, result[4] = x * width + v * stride + f * angle + value * k, result[5] = x * scale + v * s + f * step + value * scaleFactor, result[6] = x * h + v * w + f * t + value * multiplier, result[7] = x * WIDTH + v * size + f * p + value * level, result[8] = y * width + height * stride + alpha * angle + val * k, result[9] = y * scale + height * s + alpha * step + val * scaleFactor, result[10] = y * h + height * w + alpha * t + val * multiplier, result[11] = y * WIDTH + height * size + alpha * p + val * level, result[12] = ratio * width + i * stride + n * angle + speed * k, result[13] = ratio * scale + i * s + n * step + speed * scaleFactor, result[14] = ratio * h + i * w + n * t + speed * multiplier, result[15] = ratio * WIDTH + i * size + n * p + speed * level, result;
}, Matrix.orthographic = function (far, near, right, left, farVal, nearVal, result) {
  return (result = result || new Float32Array(16))[0] = 2 / (near - far), result[1] = 0, result[2] = 0, result[3] = 0, result[4] = 0, result[5] = 2 / (left - right), result[6] = 0, result[7] = 0, result[8] = 0, result[9] = 0, result[10] = 2 / (farVal - nearVal), result[11] = 0, result[12] = (far + near) / (far - near), result[13] = (right + left) / (right - left), result[14] = (farVal + nearVal) / (farVal - nearVal), result[15] = 1, result;
}, Matrix.translate = function (data, x, f, daysInterval, result) {
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
}, Matrix.scale = function (v, scalar, r, a, result) {
  return (result = result || new Float32Array(16))[0] = scalar * v[0], result[1] = scalar * v[1], result[2] = scalar * v[2], result[3] = scalar * v[3], result[4] = r * v[4], result[5] = r * v[5], result[6] = r * v[6], result[7] = r * v[7], result[8] = a * v[8], result[9] = a * v[9], result[10] = a * v[10], result[11] = a * v[11], v !== result && (result[12] = v[12], result[13] = v[13], result[14] = v[14], result[15] = v[15]), result;
}, Matrix.translation = function (resolvedViewModel, fragmentPointer, resolvedTemplate, result) {
  return (result = result || new Float32Array(16))[0] = 1, result[1] = 0, result[2] = 0, result[3] = 0, result[4] = 0, result[5] = 1, result[6] = 0, result[7] = 0, result[8] = 0, result[9] = 0, result[10] = 1, result[11] = 0, result[12] = resolvedViewModel, result[13] = fragmentPointer, result[14] = resolvedTemplate, result[15] = 1, result;
}, function (metaWindow) {
  function getterSelector(data, timeout) {
    var pivot;
    var center;
    var hash;
    var jl;
    var c2;
    var c1;
    var k1;
    var i;
    pivot = 3 & data.length;
    center = data.length - pivot;
    hash = timeout;
    c2 = 3432918353;
    c1 = 461845907;
    i = 0;
    for (; i < center;) {
      k1 = 255 & data.charCodeAt(i) | (255 & data.charCodeAt(++i)) << 8 | (255 & data.charCodeAt(++i)) << 16 | (255 & data.charCodeAt(++i)) << 24;
      ++i;
      hash = 27492 + (65535 & (jl = 5 * (65535 & (hash = (hash = hash ^ (k1 = (65535 & (k1 = (k1 = (65535 & k1) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295) << 15 | k1 >>> 17)) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295)) << 13 | hash >>> 19)) + ((5 * (hash >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (jl >>> 16) & 65535) << 16);
    }
    switch (k1 = 0, pivot) {
      case 3:
        k1 = k1 ^ (255 & data.charCodeAt(i + 2)) << 16;
      case 2:
        k1 = k1 ^ (255 & data.charCodeAt(i + 1)) << 8;
      case 1:
        hash = hash ^ (k1 = (65535 & (k1 = (k1 = (65535 & (k1 = k1 ^ 255 & data.charCodeAt(i))) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295) << 15 | k1 >>> 17)) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295);
    }
    return hash = hash ^ data.length, hash = 2246822507 * (65535 & (hash = hash ^ hash >>> 16)) + ((2246822507 * (hash >>> 16) & 65535) << 16) & 4294967295, hash = 3266489909 * (65535 & (hash = hash ^ hash >>> 13)) + ((3266489909 * (hash >>> 16) & 65535) << 16) & 4294967295, (hash = hash ^ hash >>> 16) >>> 0;
  }
  var keys;
  var Map = function () {
    var labels = ["monospace", "sans-serif", "serif"];
    var command_codes = document.getElementsByTagName("body")[0];
    var data = document.createElement("span");
    data.style.fontSize = "72px";
    data.innerHTML = "mmmwmmmmmmlli";
    var result = {};
    var obj = {};
    var i;
    for (i in labels) {
      data.style.fontFamily = labels[i];
      command_codes.appendChild(data);
      result[labels[i]] = data.offsetWidth;
      obj[labels[i]] = data.offsetHeight;
      command_codes.removeChild(data);
    }
    this.detect = function (item) {
      var hasDataToSync = false;
      var i;
      for (i in labels) {
        data.style.fontFamily = item + "," + labels[i];
        command_codes.appendChild(data);
        var hasAttempts = data.offsetWidth != result[labels[i]] || data.offsetHeight != obj[labels[i]];
        command_codes.removeChild(data);
        hasDataToSync = hasDataToSync || hasAttempts;
      }
      return hasDataToSync;
    };
  };
  handleUnexpectedData.prototype = {get: function () {
    var bar = ":";
    var $scope = this.webgl2();
    var prefix = this.gsp();
    var language = this.gpl();
    var screenPrint = this.gfo();
    var systemLanguage = this.gtz();
    var fontList = this.gla();
    var localStorage = this.gsl();
    var baz = this.gcp();
    var text = prefix + bar + language + bar + screenPrint + bar + sessionStorage + bar + systemLanguage + bar + fontList + bar + localStorage + bar + baz;
    return getterSelector($scope, 256) + ":" + getterSelector(text, 256);
  }, gsp: function () {
    return "Cu: " + this.gcr() + ", Av: " + this.gar() + ", CD: " + this.gcd() + ", X: " + this.gXDPI() + ", Y: " + this.gYDPI();
  }, gcd: function () {
    return screen.colorDepth;
  }, gcr: function () {
    return screen.width + "x" + screen.height;
  }, gar: function () {
    return screen.availWidth + "x" + screen.availHeight;
  }, gXDPI: function () {
    return screen.deviceXDPI;
  }, gYDPI: function () {
    return screen.deviceYDPI;
  }, gpl: function () {
    var jm = "";
    var indexLookupKey = 0;
    for (; indexLookupKey < navigator.plugins.length; indexLookupKey++) {
      if (indexLookupKey == navigator.plugins.length - 1) {
        jm = jm + navigator.plugins[indexLookupKey].name;
      } else {
        jm = jm + (navigator.plugins[indexLookupKey].name + ", ");
      }
    }
    return jm;
  }, gmty: function () {
    var jn = "";
    if (navigator.mimeTypes) {
      var indexLookupKey = 0;
      for (; indexLookupKey < navigator.mimeTypes.length; indexLookupKey++) {
        if (indexLookupKey == navigator.mimeTypes.length - 1) {
          jn = jn + navigator.mimeTypes[indexLookupKey].description;
        } else {
          jn = jn + (navigator.mimeTypes[indexLookupKey].description + ", ");
        }
      }
    }
    return jn;
  }, gfo: function () {
    var data = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"];
    var jo = "";
    var i = 0;
    for (; i < data.length; i++) {
      if (keys.detect(data[i])) {
        jo = jo + (i == data.length - 1 ? data[i] : data[i] + ", ");
      }
    }
    return jo;
  }, gtz: function () {
    var stringConstructorEndTime;
    var fullSNPTime;
    return stringConstructorEndTime = new Date, (fullSNPTime = String(-stringConstructorEndTime.getTimezoneOffset() / 60)) < 0 ? "-" + ("0" + (fullSNPTime = fullSNPTime * -1))["slice"](-2) : "+" + ("0" + fullSNPTime).slice(-2);
  }, gla: function () {
    return navigator.language;
  }, gsl: function () {
    return navigator.systemLanguage || window.navigator.language;
  }, webgl: function () {
    var _0xe1a7x4;
    var gl;
    if ((jp = document.createElement("canvas")).width = 256, jp.height = 128, !(gl = jp.getContext("webgl2") || jp.getContext("experimental-webgl2") || jp.getContext("webgl") || jp.getContext("experimental-webgl") || jp.getContext("moz-webgl"))) {
      return "0";
    }
    try {
      var mValue = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, mValue);
      var values = new Float32Array([-0.2, -0.9, 0, .4, -0.26, 0, 0, .7321, 0]);
      gl.bufferData(gl.ARRAY_BUFFER, values, gl.STATIC_DRAW);
      mValue.itemSize = 3;
      mValue.numItems = 3;
      var shaderProgram = gl.createProgram();
      var type = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(type, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
      gl.compileShader(type);
      var value = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(value, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
      gl.compileShader(value);
      gl.attachShader(shaderProgram, type);
      gl.attachShader(shaderProgram, value);
      gl.linkProgram(shaderProgram);
      gl.useProgram(shaderProgram);
      shaderProgram.vertexPosAttrib = gl.getAttribLocation(shaderProgram, "attrVertex");
      shaderProgram.offsetUniform = gl.getUniformLocation(shaderProgram, "uniformOffset");
      gl.enableVertexAttribArray(shaderProgram.vertexPosArray);
      gl.vertexAttribPointer(shaderProgram.vertexPosAttrib, mValue.itemSize, gl.FLOAT, false, 0, 0);
      gl.uniform2f(shaderProgram.offsetUniform, 1, 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, mValue.numItems);
    } catch (_0xe1a7x4) {
      return "0";
    }
    try {
      var data = new Uint8Array(131072);
      return gl.readPixels(0, 0, 256, 128, gl.RGBA, gl.UNSIGNED_BYTE, data), getterSelector(JSON.stringify(data).replace(/,?"[0-9]+":/g, ""), 256);
    } catch (jp) {
      return "0";
    }
  }, webgl2: function () {
    let groupNamePrefix = "";
    let dupeNameCount = "";
    let jq = "";
    try {
      var jr = document.createElement("canvas");
      var gl = jr.getContext("webgl") || jr.getContext("experimental-webgl");
      var js = [];
      var mValue = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, mValue);
      var values = new Float32Array([-0.2, -0.9, 0, .4, -0.26, 0, 0, .732134444, 0]);
      gl.bufferData(gl.ARRAY_BUFFER, values, gl.STATIC_DRAW);
      mValue.itemSize = 3;
      mValue.numItems = 3;
      var shaderProgram = gl.createProgram();
      var type = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(type, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
      gl.compileShader(type);
      var value = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(value, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
      gl.compileShader(value);
      gl.attachShader(shaderProgram, type);
      gl.attachShader(shaderProgram, value);
      gl.linkProgram(shaderProgram);
      gl.useProgram(shaderProgram);
      shaderProgram.vertexPosAttrib = gl.getAttribLocation(shaderProgram, "attrVertex");
      shaderProgram.offsetUniform = gl.getUniformLocation(shaderProgram, "uniformOffset");
      gl.enableVertexAttribArray(shaderProgram.vertexPosArray);
      gl.vertexAttribPointer(shaderProgram.vertexPosAttrib, mValue.itemSize, gl.FLOAT, false, 0, 0);
      gl.uniform2f(shaderProgram.offsetUniform, 1, 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, mValue.numItems);
      if (null != gl.canvas) {
        js.push(gl.canvas.toDataURL());
      }
      js.push("ext:" + gl.getSupportedExtensions().join(";"));
      js.push("a:" + (gl.clearColor(0, 0, 0, 1), gl.enable(gl.DEPTH_TEST), gl.depthFunc(gl.LEQUAL), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), "[" + gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[0] + ", " + gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[1] + "]"));
      js.push("b:" + (gl.clearColor(0, 0, 0, 1), gl.enable(gl.DEPTH_TEST), gl.depthFunc(gl.LEQUAL), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), "[" + gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[0] + ", " + gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1] + "]"));
      js.push("c:" + gl.getParameter(gl.ALPHA_BITS));
      js.push("d:" + (gl.getContextAttributes().antialias ? "yes" : "no"));
      js.push("e:" + gl.getParameter(gl.BLUE_BITS));
      js.push("f:" + gl.getParameter(gl.DEPTH_BITS));
      js.push("g:" + gl.getParameter(gl.GREEN_BITS));
      js.push("h:" + function (gl) {
        var anisotropy;
        var ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
        return ext ? (0 === (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (anisotropy = 2), anisotropy) : null;
      }(gl));
      js.push("i:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
      js.push("j:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
      js.push("k:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
      js.push("l:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
      js.push("m:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
      js.push("n:" + gl.getParameter(gl.MAX_TEXTURE_SIZE));
      js.push("o:" + gl.getParameter(gl.MAX_VARYING_VECTORS));
      js.push("p:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
      js.push("q:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
      js.push("r:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
      js.push("s:" + (gl.clearColor(0, 0, 0, 1), gl.enable(gl.DEPTH_TEST), gl.depthFunc(gl.LEQUAL), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), "[" + gl.getParameter(gl.MAX_VIEWPORT_DIMS)[0] + ", " + gl.getParameter(gl.MAX_VIEWPORT_DIMS)[1] + "]"));
      js.push("t:" + gl.getParameter(gl.RED_BITS));
      js.push("u:" + gl.getParameter(gl.RENDERER));
      js.push("v:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
      js.push("w:" + gl.getParameter(gl.STENCIL_BITS));
      js.push("x:" + gl.getParameter(gl.VENDOR));
      js.push("y:" + gl.getParameter(gl.VERSION));
      js.push("z:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision);
      js.push("aa:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMin);
      js.push("bb:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMax);
      js.push("cc:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision);
      js.push("dd:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin);
      js.push("ee:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax);
      js.push("ff:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).precision);
      js.push("gg:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMin);
      js.push("hh:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMax);
      js.push("ii:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision);
      js.push("jj:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMin);
      js.push("kk:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMax);
      js.push("ll:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision);
      js.push("mm:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMin);
      js.push("nn:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMax);
      js.push("oo:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).precision);
      js.push("pp:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMin);
      js.push("qq:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMax);
      js.push("rr:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).precision);
      js.push("ss:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).rangeMin);
      js.push("tt:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).rangeMax);
      js.push("uu:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).precision);
      js.push("vv:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).rangeMin);
      js.push("ww:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).rangeMax);
      js.push("xx:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).precision);
      js.push("yy:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).rangeMin);
      js.push("zz:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).rangeMax);
      js.push("1:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).precision);
      js.push("2:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).rangeMin);
      js.push("3:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).rangeMax);
      js.push("4:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).precision);
      js.push("5:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).rangeMin);
      js.push("6:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).rangeMax);
      js.push("7:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).precision);
      js.push("8:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMin);
      js.push("9:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMax);
      groupNamePrefix = js.join("§");
      var jt = (jr = document.createElement("canvas")).getContext("webgl") || jr.getContext("experimental-webgl");
      if (jt.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0) {
        dupeNameCount = jt.getParameter(jt.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL);
        jq = jt.getParameter(jt.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL);
      } else {
        dupeNameCount = "NA";
        jq = "NA";
      }
    } catch (ju) {
      groupNamePrefix = "NA";
      dupeNameCount = "NA";
      jq = "NA";
    }
    return groupNamePrefix + "," + dupeNameCount + "," + jq;
  }, gcp: function () {
    var command_codes;
    var jv = document.createElement("canvas");
    try {
      command_codes = jv.getContext("2d");
    } catch (jw) {
      return "";
    }
    var data = "Jstris,mx <canvas> v0.39.0-X";
    return command_codes.textBaseline = "top", command_codes.font = "14px 'Arial'", command_codes.textBaseline = "alphabetic", command_codes.fillStyle = "#f60", command_codes.fillRect(125, 1, 62, 20), command_codes.fillStyle = "#069", command_codes.fillText(data, 2, 15), command_codes.fillStyle = "rgba(102, 204, 0, 0.7)", command_codes.fillText(data, 4, 17), jv.toDataURL();
  }};
  metaWindow._jstrisx = handleUnexpectedData;
}(window), EmoteSelect.prototype.init = async function () {
  this.emoteElem = document.createElement("div");
  this.emoteElem.classList.add("emotePicker");
  this.container.appendChild(this.emoteElem);
  this.comment = document.createComment("Designed and developed by Erickmack");
  this.emoteElem.appendChild(this.comment);
  this.initializeContainers();
  this.emoteList = "string" == typeof this.emoteIndex ? await fetch(this.emoteIndex).then(canCreateDiscussions => {
    return canCreateDiscussions.json();
  }) : this.emoteIndex;
  this.initializeEmotes();
  this.lastUsed();
  this.openButtonLogic();
}, EmoteSelect.prototype.initializeContainers = function () {
  this.searchElem = document.createElement("form");
  this.searchElem.classList.add("form-inline", "emoteForm");
  this.emoteElem.appendChild(this.searchElem);
  this.searchBar = document.createElement("input");
  this.searchBar.setAttribute("autocomplete", "off");
  this.searchBar.classList.add("form-control");
  this.searchBar.id = "emoteSearch";
  this.searchBar.addEventListener("input", () => {
    this.searchFunction(this.emoteList);
  });
  this.searchElem.addEventListener("submit", canCreateDiscussions => {
    canCreateDiscussions.preventDefault();
  });
  this.searchBar.setAttribute("type", "text");
  this.searchBar.setAttribute("placeholder", "Search Emotes");
  this.searchElem.appendChild(this.searchBar);
  this.optionsContainer = document.createElement("div");
  this.optionsContainer.classList.add("optionsContainer");
  this.emoteElem.appendChild(this.optionsContainer);
  this.emotesWrapper = document.createElement("div");
  this.emotesWrapper.classList.add("emotesWrapper");
  this.optionsContainer.appendChild(this.emotesWrapper);
}, EmoteSelect.prototype.initializeEmotes = function () {
  let packByNumType = [];
  this.emoteList.forEach(data => {
    if (packByNumType.findIndex(index => {
      return index === data.g;
    }) <= -1) {
      packByNumType.push(data.g);
    }
  });
  this.groupList = packByNumType;
  this.createGroups(this.groupList);
  this.donateInfo(this.groupList);
}, EmoteSelect.prototype.createGroups = async function (canCreateDiscussions) {
  let arr = this;
  this.emojis = this.emoteList;
  let jx = {root: document.querySelector(".emotesWrapper"), rootMargin: "10px", threshold: 0};
  let umecob = new IntersectionObserver(function (canCreateDiscussions, component) {
    setTimeout(() => {
      canCreateDiscussions.forEach(data => {
        if (data.isIntersecting) {
          arr.createImages(arr.emojis, data.target);
          component.unobserve(data.target);
        }
      });
    }, 200);
  }, jx);
  this.groupsFragment = document.createDocumentFragment();
  canCreateDiscussions.forEach(algoCode => {
    let jy = this.emojis.filter(names => {
      return names.g === `${""}${algoCode}${""}`;
    });
    arr.groupDiv = document.createElement("div");
    arr.groupDiv.classList.add("emotesGroup");
    arr.groupDiv.id = `${""}${algoCode}${""}`;
    arr.groupDiv.setAttribute("data-groupName", `${""}${algoCode}${""}`);
    umecob.observe(arr.groupDiv);
    arr.groupName = document.createElement("h3");
    arr.groupName.id = `${""}${algoCode}${""}`;
    arr.groupName.classList.add("groupName");
    arr.groupName.innerText = `${""}${algoCode.toUpperCase()}${""}`;
    arr.groupDiv.appendChild(arr.groupName);
    let bowerPackageName = 45 * Math.ceil(jy.length / 6) + 35.4;
    arr.groupDiv.style.minHeight = `${""}${bowerPackageName}${"px"}`;
    arr.groupsFragment.appendChild(arr.groupDiv);
  });
  this.emotesWrapper.appendChild(this.groupsFragment);
  this.selectGroup();
}, EmoteSelect.prototype.donateInfo = function (canCreateDiscussions) {
  if (!(canCreateDiscussions.length > 2)) {
    this.donateLink = document.createElement("a");
    this.donateLink.classList.add("mSkInf");
    this.donateLink.id = "mSkInf-s";
    this.donateLink.setAttribute("href", "/donate");
    this.icon = document.createElement("i");
    this.icon.classList.add("glyphicon", "glyphicon-info-sign");
    this.span = document.createElement("span");
    this.span.innerText = "2k+ more emotes available to Jstris Supporters for $5";
    this.donateLink.appendChild(this.icon);
    this.donateLink.appendChild(this.span);
    this.donateLink.style.fontSize = "clamp(1.5rem,1vw,3rem)";
    this.emotesWrapper.appendChild(this.donateLink);
  }
}, EmoteSelect.prototype.getEmoteSource = function (specificSources) {
  return specificSources.p ? source = specificSources.p : specificSources.u ? (source = specificSources.u, !source || source.startsWith("http") || source.startsWith("/") || (source = "/" + source)) : source = `${""}${this.path}${""}${specificSources.n}${".svg"}`, source;
}, EmoteSelect.prototype.createImages = async function (isSlidingUp, canCreateDiscussions) {
  let arr = this;
  let jz = {root: document.getElementById("searchResults"), rootMargin: "10px", threshold: 0};
  let umecob = new IntersectionObserver(function (data, i) {
    arr.setSource(data, i);
  }, jz);
  this.emotesFragment = document.createDocumentFragment();
  let stripeAPIVersion = canCreateDiscussions.getAttribute("data-groupName");
  let r = isSlidingUp.filter(names => {
    return names.g === `${""}${stripeAPIVersion}${""}`;
  });
  for (let o = 0; o < r.length; o++) {
    arr.emoteImg = document.createElement("img");
    let artistTrack = this.getEmoteSource(r[o]);
    arr.emoteImg.classList.add("emoteImg", "loadingEmote");
    if (r[o].u) {
      arr.emoteImg.classList.add("jstrisEmote");
    }
    arr.emoteImg.onload = function (canCreateDiscussions) {
      canCreateDiscussions.target.classList.remove("loadingEmote");
    };
    umecob.observe(arr.emoteImg);
    arr.emoteImg.setAttribute("data-emoteName", `${""}${r[o].n}${""}`);
    arr.emoteImg.setAttribute("data-source", artistTrack);
    arr.emoteImg.addEventListener("click", canCreateDiscussions => {
      this.chatEmote(canCreateDiscussions.target);
      this.setStoredEmotes(canCreateDiscussions.target);
      if (!canCreateDiscussions.shiftKey) {
        this.hideElem();
      }
    });
    arr.emoteImg.addEventListener("mouseover", canCreateDiscussions => {
      this.showName(canCreateDiscussions.target);
    });
    arr.emotesFragment.appendChild(arr.emoteImg);
  }
  canCreateDiscussions.appendChild(this.emotesFragment);
}, EmoteSelect.prototype.selectGroup = function () {
  this.selectionDiv = document.createElement("div");
  this.selectionDiv.id = "selectionDiv";
  this.groupList.forEach(key => {
    this.groupImage = document.createElement("img");
    this.groupImage.classList.add("groupLink");
    this.groupImage.setAttribute("data-groupName", `${""}${key}${""}`);
    this.groupImage.addEventListener("click", canCreateDiscussions => {
      let DOM_CONTENT_LOADED = canCreateDiscussions.target.getAttribute("data-groupname");
      let mutedPlayerIds = document.getElementById(DOM_CONTENT_LOADED);
      let timeNow = this.searchElem.clientHeight;
      let kb = mutedPlayerIds.offsetTop - timeNow;
      this.emotesWrapper.scrollTop = kb;
    });
    this.groupImage.setAttribute("title", `${""}${key}${""}`);
    this.groupImage.setAttribute("data-toggle", "tooltip");
    this.groupImage.setAttribute("data-placement", "right");
    let ka = this.emoteList.filter(JSONToCompare => {
      return JSONToCompare.n === this.groupEmotes[key];
    });
    if (ka.length <= 0) {
      this.groupImage.setAttribute("src", `${""}${this.groupEmotes[key]}${""}`);
      this.groupImage.classList.add("jstrisSelector");
    } else {
      if (!ka.u) {
        this.groupImage.setAttribute("src", `${""}${this.path}${""}${this.groupEmotes[key]}${".svg"}`);
      }
    }
    this.selectionDiv.appendChild(this.groupImage);
  });
  this.optionsContainer.appendChild(this.selectionDiv);
  $('[data-toggle="tooltip"]').tooltip();
}, EmoteSelect.prototype.showName = function (canCreateDiscussions) {
  let stripeAPIVersion = canCreateDiscussions.getAttribute("data-emoteName");
  document.getElementById("emoteSearch").setAttribute("placeholder", `${":"}${stripeAPIVersion}${":"}`);
}, EmoteSelect.prototype.searchFunction = function (table) {
  let _destructure2 = this;
  let isInnerHTML = document.getElementById("emoteSearch").value;
  let textContent = document.getElementById("searchResults");
  if (!(isInnerHTML || null == textContent)) {
    textContent.parentNode.removeChild(textContent);
  }
  let r = new Fuse(table, {threshold: .3, keys: [{name: "n", weight: 2}, {name: "t", weight: 1}]}).search(isInnerHTML);
  if (textContent) {
    if (textContent) {
      textContent.innerHTML = "";
    }
  } else {
    this.searchResults = document.createElement("div");
    this.searchResults.id = "searchResults";
    document.getElementsByClassName("emotePicker")[0].appendChild(this.searchResults);
    textContent = document.getElementById("searchResults");
  }
  let kc = {root: document.getElementById("searchResults"), rootMargin: "10px", threshold: 0};
  let kd = new IntersectionObserver(function (model, relations) {
    _destructure2.setSource(model, relations);
  }, kc);
  _destructure2.resultsFragment = document.createDocumentFragment();
  for (let o = 0; o < r.length; o++) {
    let artistTrack = r[o].item;
    let GET_AUTH_URL_TIMEOUT = this.getEmoteSource(artistTrack);
    _destructure2.emoteResult = document.createElement("img");
    _destructure2.emoteResult.classList.add("emoteImg", "loadingEmote", "resultImg");
    _destructure2.emoteResult.setAttribute("data-source", GET_AUTH_URL_TIMEOUT);
    _destructure2.emoteResult.onload = function (canCreateDiscussions) {
      canCreateDiscussions.target.classList.remove("loadingEmote");
    };
    _destructure2.emoteResult.setAttribute("title", artistTrack.n);
    _destructure2.emoteResult.setAttribute("data-emoteName", artistTrack.n);
    _destructure2.emoteResult.addEventListener("click", canCreateDiscussions => {
      this.chatEmote(canCreateDiscussions.target);
      this.setStoredEmotes(canCreateDiscussions.target);
      if (!canCreateDiscussions.shiftKey) {
        this.hideElem();
      }
    });
    kd.observe(this.emoteResult);
    _destructure2.resultsFragment.appendChild(this.emoteResult);
  }
  textContent.appendChild(this.resultsFragment);
}, EmoteSelect.prototype.setSource = function (canCreateDiscussions, anExpectedRequest) {
  setTimeout(() => {
    canCreateDiscussions.forEach(anActualRequest => {
      if (anActualRequest.isIntersecting) {
        let artistTrack = anActualRequest.target.getAttribute("data-source");
        anActualRequest.target.setAttribute("src", artistTrack);
        anExpectedRequest.unobserve(anActualRequest.target);
      }
    });
  }, 400);
}, EmoteSelect.prototype.chatEmote = function (canCreateDiscussions) {
  let stripeAPIVersion = canCreateDiscussions.getAttribute("data-emoteName");
  let checkPlugins = this.input.value;
  let repo = this.getCaretPosition();
  this.input.value = checkPlugins.substring(0, repo) + `${":"}${stripeAPIVersion}${": "}` + checkPlugins.substring(repo, checkPlugins.length);
  this.input.focus();
  this.setCaretPosition(repo + stripeAPIVersion.length + 3);
}, EmoteSelect.prototype.getCaretPosition = function () {
  return this.input.selectionStart || "0" == this.input.selectionStart ? this.input.selectionStart : this.input.value.length;
}, EmoteSelect.prototype.setCaretPosition = function (n) {
  n = Math.max(Math.min(n, this.input.value.length), 0);
  if (this.input.setSelectionRange) {
    this.input.setSelectionRange(n, n);
  }
}, EmoteSelect.prototype.lastUsed = function () {
  if ("undefined" != typeof Storage && !localStorage.lastUsed) {
    let ke = Math.floor(Date.now() / 1e3);
    let data = [{Badger: ke}, {jstris: ke}];
    localStorage.setItem("lastUsed", JSON.stringify(data));
  }
  let _related2 = this.emotesWrapper;
  let relationName = document.getElementById("Jstris");
  this.recent = document.createElement("div");
  this.recent.classList.add("emotesGroup");
  this.groupName = document.createElement("h3");
  this.groupName.classList.add("groupName");
  this.lastUsedWrapper = document.createElement("div");
  this.lastUsedWrapper.id = "usedWrapper";
  this.groupName.id = "recently-used";
  this.groupName.innerText = "RECENTLY USED";
  this.recent.appendChild(this.groupName);
  this.recent.appendChild(this.lastUsedWrapper);
  _related2.insertBefore(this.recent, relationName);
  let specificListeners = this.selectionDiv;
  let menuConfig = document.getElementsByClassName("groupLink")[0];
  this.groupLink = document.createElement("img");
  this.groupLink.classList.add("groupLink");
  this.groupLink.setAttribute("data-groupName", "recently-used");
  this.groupLink.setAttribute("title", "Recently used");
  this.groupLink.setAttribute("data-toggle", "tooltip");
  this.groupLink.setAttribute("data-placement", "right");
  this.groupLink.setAttribute("src", `${""}${this.path}${"three_oclock.svg"}`);
  this.groupLink.addEventListener("click", canCreateDiscussions => {
    let DOM_CONTENT_LOADED = canCreateDiscussions.target.getAttribute("data-groupname");
    let kf = document.getElementById(DOM_CONTENT_LOADED).offsetTop - 60;
    this.emotesWrapper.scrollTop = kf;
  });
  specificListeners.insertBefore(this.groupLink, menuConfig);
  $('[data-toggle="tooltip"]').tooltip();
}, EmoteSelect.prototype.updateLastUsed = function () {
  let command_codes = document.getElementById("usedWrapper");
  command_codes.innerHTML = "";
  let kg = this.emoteList;
  let kh = JSON.parse(localStorage.getItem("lastUsed"));
  let data = document.createDocumentFragment();
  kh.forEach(descriptor => {
    let vvv_5 = Object.keys(descriptor)[0];
    let GET_AUTH_URL_TIMEOUT = kg.filter(lanetext => {
      return lanetext.n === vvv_5;
    })[0];
    if (GET_AUTH_URL_TIMEOUT) {
      let numKeysDeleted = this.getEmoteSource(GET_AUTH_URL_TIMEOUT);
      this.usedImage = document.createElement("img");
      this.usedImage.setAttribute("src", numKeysDeleted);
      this.usedImage.setAttribute("data-emoteName", GET_AUTH_URL_TIMEOUT.n);
      this.usedImage.classList.add("emoteImg");
      if (GET_AUTH_URL_TIMEOUT.u) {
        this.usedImage.classList.add("jstrisEmote");
      }
      this.usedImage.addEventListener("click", canCreateDiscussions => {
        this.chatEmote(canCreateDiscussions.target);
        this.setStoredEmotes(canCreateDiscussions.target);
        if (!canCreateDiscussions.shiftKey) {
          this.hideElem();
        }
      });
      this.usedImage.addEventListener("mouseover", canCreateDiscussions => {
        this.showName(canCreateDiscussions.target);
      });
      data.appendChild(this.usedImage);
    }
  });
  command_codes.appendChild(data);
}, EmoteSelect.prototype.setStoredEmotes = function (canCreateDiscussions) {
  let directiveProcessors;
  let module = JSON.parse(localStorage.getItem("lastUsed"));
  let q = canCreateDiscussions.getAttribute("data-emoteName");
  if (module.length > 24) {
    directiveProcessors = [];
    for (let property_key = 0; property_key < 24; property_key++) {
      directiveProcessors.push(module[property_key]);
    }
  }
  if (24 === module.length) {
    let ki = false;
    let item = 0;
    for (let $routeParams of module) {
      if (item = item + 1, q in $routeParams) {
        directiveProcessors = module.filter(a => {
          return a[q] === module[item][q];
        });
        let $node = {[q]: Math.floor(Date.now() / 1e3)};
        directiveProcessors.push($node);
        ki = true;
        break;
      }
    }
    if (!ki) {
      let amount = module[0][Object.keys(module[0])[0]];
      let value = module[0];
      for (let target of module) {
        let resourceType = Object.keys(target)[0];
        if (target[resourceType] < amount) {
          amount = target[resourceType];
          value = target;
        }
      }
      directiveProcessors = module.filter(optionsValue => {
        return optionsValue !== value;
      });
      let $node = {[q]: Math.floor(Date.now() / 1e3)};
      directiveProcessors.push($node);
    }
  } else {
    if (module.length < 24) {
      let kj = false;
      let item = 0;
      for (let $routeParams of module) {
        if (q in $routeParams) {
          directiveProcessors = module.filter(matrix => {
            return matrix[q] !== module[item][q];
          });
          let $node = {[q]: Math.floor(Date.now() / 1e3)};
          directiveProcessors.push($node);
          kj = true;
          break;
        }
        item = item + 1;
      }
      if (!kj) {
        let $node = {[q]: Math.floor(Date.now() / 1e3)};
        directiveProcessors = module;
        directiveProcessors.push($node);
      }
    }
  }
  let data = directiveProcessors.sort((obj, descriptor) => {
    return descriptor[Object.keys(descriptor)[0]] - obj[Object.keys(obj)[0]];
  });
  localStorage.lastUsed = JSON.stringify(data);
}, EmoteSelect.prototype.hideElem = function () {
  this.emotesWrapper.scrollTo(0, 0);
  this.selectionDiv.scrollTo(0, 0);
  this.emoteElem.classList.toggle("open");
}, EmoteSelect.prototype.openButtonLogic = function () {
  let kk = document.getElementById("emoteSearch");
  if (this.openBtn.addEventListener("click", () => {
    kk.value = "";
    let artistTrack = document.getElementById("searchResults");
    if (null !== artistTrack) {
      artistTrack.parentNode.removeChild(artistTrack);
    }
    this.emotesWrapper.scrollTo(0, 0);
    this.selectionDiv.scrollTo(0, 0);
    this.updateLastUsed();
    this.emoteElem.classList.toggle("open");
    if (this.emoteElem.classList.contains("open")) {
      kk.focus();
    } else {
      document.getElementById("chatInput").focus();
    }
  }), !document.getElementById("fuseScript")) {
    let artistTrack = document.createElement("script");
    artistTrack.id = "fuseScript";
    artistTrack.src = "https://cdn.jsdelivr.net/npm/fuse.js@6.4.3";
    document.head.appendChild(artistTrack);
  }
};
