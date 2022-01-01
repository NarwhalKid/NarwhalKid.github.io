'use strict';
!function(addedRenderer, module, define) {
  /**
   * @param {?} seed
   * @return {undefined}
   */
  function Alea(seed) {
    var me = this;
    var mash = function() {
      /** @type {number} */
      var width = 4022871197;
      /**
       * @param {string} bytes
       * @return {?}
       */
      var random = function(bytes) {
        bytes = bytes.toString();
        /** @type {number} */
        var i = 0;
        for (; i < bytes.length; i++) {
          /** @type {number} */
          var x = .02519603282416938 * (width = width + bytes.charCodeAt(i));
          /** @type {number} */
          x = x - (width = x >>> 0);
          /** @type {number} */
          width = (x = x * width) >>> 0;
          /** @type {number} */
          width = width + 4294967296 * (x = x - width);
        }
        return 2.3283064365386963e-10 * (width >>> 0);
      };
      return random;
    }();
    /**
     * @return {?}
     */
    me.next = function() {
      /** @type {number} */
      var t = 2091639 * me.s0 + 2.3283064365386963e-10 * me.c;
      return me.s0 = me.s1, me.s1 = me.s2, me.s2 = t - (me.c = 0 | t);
    };
    /** @type {number} */
    me.c = 1;
    me.s0 = mash(" ");
    me.s1 = mash(" ");
    me.s2 = mash(" ");
    me.s0 -= mash(seed);
    if (me.s0 < 0) {
      me.s0 += 1;
    }
    me.s1 -= mash(seed);
    if (me.s1 < 0) {
      me.s1 += 1;
    }
    me.s2 -= mash(seed);
    if (me.s2 < 0) {
      me.s2 += 1;
    }
    /** @type {null} */
    mash = null;
  }
  /**
   * @param {!Object} f
   * @param {!Object} t
   * @return {?}
   */
  function copy(f, t) {
    return t.c = f.c, t.s0 = f.s0, t.s1 = f.s1, t.s2 = f.s2, t;
  }
  /**
   * @param {?} seed
   * @param {number} data
   * @return {?}
   */
  function impl(seed, data) {
    var xg = new Alea(seed);
    var src = data && data.state;
    var prng = xg.next;
    return prng.int32 = function() {
      return 4294967296 * xg.next() | 0;
    }, prng.double = function() {
      return prng() + 11102230246251565e-32 * (2097152 * prng() | 0);
    }, prng.quick = prng, src && ("object" == typeof src && copy(src, xg), prng.state = function() {
      return copy(xg, {});
    }), prng;
  }
  if (module && module.exports) {
    /** @type {function(?, number): ?} */
    module.exports = impl;
  } else {
    if (define && define.amd) {
      define(function() {
        return impl;
      });
    } else {
      /** @type {function(?, number): ?} */
      this.alea = impl;
    }
  }
}(0, "object" == typeof module && module, "function" == typeof define && define), function(window, doc, n, undefined) {
  /**
   * @param {!Function} fn
   * @param {?} timeout
   * @param {?} context
   * @return {?}
   */
  function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
  }
  /**
   * @param {!Object} arg
   * @param {string} fn
   * @param {!Object} context
   * @return {?}
   */
  function invokeArrayArg(arg, fn, context) {
    return !!Array.isArray(arg) && (each(arg, context[fn], context), true);
  }
  /**
   * @param {!Object} array
   * @param {!Function} fn
   * @param {!Object} context
   * @return {undefined}
   */
  function each(array, fn, context) {
    var i;
    if (array) {
      if (array.forEach) {
        array.forEach(fn, context);
      } else {
        if (array.length !== undefined) {
          /** @type {number} */
          i = 0;
          for (; i < array.length;) {
            fn.call(context, array[i], i, array);
            i++;
          }
        } else {
          for (i in array) {
            if (array.hasOwnProperty(i)) {
              fn.call(context, array[i], i, array);
            }
          }
        }
      }
    }
  }
  /**
   * @param {!Function} callback
   * @param {string} fn
   * @param {string} deprecationWarning
   * @return {?}
   */
  function deprecate(callback, fn, deprecationWarning) {
    /** @type {string} */
    var item = "DEPRECATED METHOD: " + fn + "\n" + deprecationWarning + " AT \n";
    return function() {
      /** @type {!Error} */
      var e = new Error("get-stack-trace");
      /** @type {string} */
      var i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
      /** @type {function(this:Console, ...*): undefined} */
      var func = window.console && (window.console.warn || window.console.log);
      return func && func.call(window.console, item, i), callback.apply(this, arguments);
    };
  }
  /**
   * @param {!Object} child
   * @param {!Function} base
   * @param {?} prototype
   * @return {undefined}
   */
  function inherit(child, base, prototype) {
    var proxy;
    var parent = base.prototype;
    /** @type {!Object} */
    (proxy = child.prototype = Object.create(parent)).constructor = child;
    proxy._super = parent;
    if (prototype) {
      assign(proxy, prototype);
    }
  }
  /**
   * @param {!Function} fn
   * @param {?} context
   * @return {?}
   */
  function bindFn(fn, context) {
    return function() {
      return fn.apply(context, arguments);
    };
  }
  /**
   * @param {!Function} callback
   * @param {!Object} args
   * @return {?}
   */
  function boolOrFn(callback, args) {
    return "function" == typeof callback ? callback.apply(args && args[0] || undefined, args) : callback;
  }
  /**
   * @param {string} val1
   * @param {string} val2
   * @return {?}
   */
  function ifUndefined(val1, val2) {
    return val1 === undefined ? val2 : val1;
  }
  /**
   * @param {string} name
   * @param {string} target
   * @param {!Function} handler
   * @return {undefined}
   */
  function addEventListeners(name, target, handler) {
    each($(target), function(e) {
      name.addEventListener(e, handler, false);
    });
  }
  /**
   * @param {!Object} type
   * @param {!Function} el
   * @param {boolean} e
   * @return {undefined}
   */
  function removeEventListeners(type, el, e) {
    each($(el), function(target) {
      type.removeEventListener(target, e, false);
    });
  }
  /**
   * @param {!Object} parent
   * @param {!Object} node
   * @return {?}
   */
  function hasParent(parent, node) {
    for (; parent;) {
      if (parent == node) {
        return true;
      }
      parent = parent.parentNode;
    }
    return false;
  }
  /**
   * @param {string} str
   * @param {string} find
   * @return {?}
   */
  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }
  /**
   * @param {string} el
   * @return {?}
   */
  function $(el) {
    return el.trim().split(/\s+/g);
  }
  /**
   * @param {!Array} src
   * @param {string} find
   * @param {string} findByKey
   * @return {?}
   */
  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    }
    /** @type {number} */
    var i = 0;
    for (; i < src.length;) {
      if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
        return i;
      }
      i++;
    }
    return -1;
  }
  /**
   * @param {?} elemntList
   * @return {?}
   */
  function toArray(elemntList) {
    return Array.prototype.slice.call(elemntList, 0);
  }
  /**
   * @param {!NodeList} deps
   * @param {string} d
   * @param {boolean} e
   * @return {?}
   */
  function build(deps, d, e) {
    /** @type {!Array} */
    var t = [];
    /** @type {!Array} */
    var values = [];
    /** @type {number} */
    var i = 0;
    for (; i < deps.length;) {
      var val = d ? deps[i][d] : deps[i];
      if (inArray(values, val) < 0) {
        t.push(deps[i]);
      }
      values[i] = val;
      i++;
    }
    return e && (t = d ? t.sort(function(BBoxMin, pt) {
      return BBoxMin[d] > pt[d];
    }) : t.sort()), t;
  }
  /**
   * @param {!Object} name
   * @param {string} property
   * @return {?}
   */
  function prefixed(name, property) {
    var prefix;
    var prop;
    var day_display = property[0].toUpperCase() + property.slice(1);
    /** @type {number} */
    var i = 0;
    for (; i < VENDOR_PREFIXES.length;) {
      if ((prop = (prefix = VENDOR_PREFIXES[i]) ? prefix + day_display : property) in name) {
        return prop;
      }
      i++;
    }
    return undefined;
  }
  /**
   * @param {!Node} element
   * @return {?}
   */
  function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return doc.defaultView || doc.parentWindow || window;
  }
  /**
   * @param {!Object} manager
   * @param {!Object} callback
   * @return {undefined}
   */
  function Input(manager, callback) {
    var shortcut = this;
    /** @type {!Object} */
    this.manager = manager;
    /** @type {!Object} */
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;
    /**
     * @param {!Object} ev
     * @return {undefined}
     */
    this.domHandler = function(ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        shortcut.handler(ev);
      }
    };
    this.init();
  }
  /**
   * @param {?} manager
   * @param {number} eventType
   * @param {!Object} input
   * @return {undefined}
   */
  function init(manager, eventType, input) {
    var maxNrStages = input.pointers.length;
    var nrStages = input.changedPointers.length;
    /** @type {(boolean|number)} */
    var o = 1 & eventType && maxNrStages - nrStages == 0;
    /** @type {(boolean|number)} */
    var a = 12 & eventType && maxNrStages - nrStages == 0;
    /** @type {boolean} */
    input.isFirst = !!o;
    /** @type {boolean} */
    input.isFinal = !!a;
    if (o) {
      manager.session = {};
    }
    /** @type {number} */
    input.eventType = eventType;
    (function(manager, input) {
      var session = manager.session;
      var pointers = input.pointers;
      var pointersLength = pointers.length;
      if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
      }
      if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
      } else {
        if (1 === pointersLength) {
          /** @type {boolean} */
          session.firstMultiple = false;
        }
      }
      var firstInput = session.firstInput;
      var firstMultiple = session.firstMultiple;
      var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
      var center = input.center = getCenter(pointers);
      /** @type {number} */
      input.timeStamp = now();
      /** @type {number} */
      input.deltaTime = input.timeStamp - firstInput.timeStamp;
      input.angle = getAngle(offsetCenter, center);
      input.distance = getDistance(offsetCenter, center);
      (function(session, event) {
        var vertex = event.center;
        var vertexToCheck = session.offsetDelta || {};
        var xhair = session.prevDelta || {};
        var prevInput = session.prevInput || {};
        if (!(1 !== event.eventType && 4 !== prevInput.eventType)) {
          xhair = session.prevDelta = {
            x : prevInput.deltaX || 0,
            y : prevInput.deltaY || 0
          };
          vertexToCheck = session.offsetDelta = {
            x : vertex.x,
            y : vertex.y
          };
        }
        event.deltaX = xhair.x + (vertex.x - vertexToCheck.x);
        event.deltaY = xhair.y + (vertex.y - vertexToCheck.y);
      })(session, input);
      input.offsetDirection = getDirection(input.deltaX, input.deltaY);
      var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
      input.overallVelocityX = overallVelocity.x;
      input.overallVelocityY = overallVelocity.y;
      input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
      /** @type {number} */
      input.scale = firstMultiple ? (start = firstMultiple.pointers, end = pointers, getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY)) : 1;
      input.rotation = firstMultiple ? function(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
      }(firstMultiple.pointers, pointers) : 0;
      input.maxPointers = session.prevInput ? input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers : input.pointers.length;
      (function(session, input) {
        var velocity;
        var velocityX;
        var velocityY;
        var direction;
        var last = session.lastInterval || input;
        /** @type {number} */
        var deltaTime = input.timeStamp - last.timeStamp;
        if (8 != input.eventType && (deltaTime > 25 || last.velocity === undefined)) {
          /** @type {number} */
          var deltaX = input.deltaX - last.deltaX;
          /** @type {number} */
          var deltaY = input.deltaY - last.deltaY;
          var v = getVelocity(deltaTime, deltaX, deltaY);
          velocityX = v.x;
          velocityY = v.y;
          velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
          direction = getDirection(deltaX, deltaY);
          /** @type {!Object} */
          session.lastInterval = input;
        } else {
          velocity = last.velocity;
          velocityX = last.velocityX;
          velocityY = last.velocityY;
          direction = last.direction;
        }
        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
      })(session, input);
      var start;
      var end;
      var target = manager.element;
      if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
      }
      input.target = target;
    })(manager, input);
    manager.emit("hammer.input", input);
    manager.recognize(input);
    /** @type {!Object} */
    manager.session.prevInput = input;
  }
  /**
   * @param {!Object} input
   * @return {?}
   */
  function simpleCloneInputData(input) {
    /** @type {!Array} */
    var pointers = [];
    /** @type {number} */
    var i = 0;
    for (; i < input.pointers.length;) {
      pointers[i] = {
        clientX : round(input.pointers[i].clientX),
        clientY : round(input.pointers[i].clientY)
      };
      i++;
    }
    return {
      timeStamp : now(),
      pointers : pointers,
      center : getCenter(pointers),
      deltaX : input.deltaX,
      deltaY : input.deltaY
    };
  }
  /**
   * @param {!Array} pointers
   * @return {?}
   */
  function getCenter(pointers) {
    var pointersLength = pointers.length;
    if (1 === pointersLength) {
      return {
        x : round(pointers[0].clientX),
        y : round(pointers[0].clientY)
      };
    }
    /** @type {number} */
    var x = 0;
    /** @type {number} */
    var y = 0;
    /** @type {number} */
    var i = 0;
    for (; i < pointersLength;) {
      x = x + pointers[i].clientX;
      y = y + pointers[i].clientY;
      i++;
    }
    return {
      x : round(x / pointersLength),
      y : round(y / pointersLength)
    };
  }
  /**
   * @param {number} deltaTime
   * @param {number} x
   * @param {number} y
   * @return {?}
   */
  function getVelocity(deltaTime, x, y) {
    return {
      x : x / deltaTime || 0,
      y : y / deltaTime || 0
    };
  }
  /**
   * @param {number} x
   * @param {number} y
   * @return {?}
   */
  function getDirection(x, y) {
    return x === y ? 1 : abs(x) >= abs(y) ? x < 0 ? 2 : 4 : y < 0 ? 8 : 16;
  }
  /**
   * @param {?} p1
   * @param {?} p2
   * @param {!Array} props
   * @return {?}
   */
  function getDistance(p1, p2, props) {
    if (!props) {
      /** @type {!Array} */
      props = PROPS_XY;
    }
    /** @type {number} */
    var lightI = p2[props[0]] - p1[props[0]];
    /** @type {number} */
    var lightJ = p2[props[1]] - p1[props[1]];
    return Math.sqrt(lightI * lightI + lightJ * lightJ);
  }
  /**
   * @param {?} p1
   * @param {?} p2
   * @param {!Array} props
   * @return {?}
   */
  function getAngle(p1, p2, props) {
    if (!props) {
      /** @type {!Array} */
      props = PROPS_XY;
    }
    /** @type {number} */
    var mouseStartXFromCentre = p2[props[0]] - p1[props[0]];
    /** @type {number} */
    var trueAnomalyY = p2[props[1]] - p1[props[1]];
    return 180 * Math.atan2(trueAnomalyY, mouseStartXFromCentre) / Math.PI;
  }
  /**
   * @return {undefined}
   */
  function MouseInput() {
    /** @type {string} */
    this.evEl = MOUSE_ELEMENT_EVENTS;
    /** @type {string} */
    this.evWin = POINTER_WINDOW_EVENTS;
    /** @type {boolean} */
    this.pressed = false;
    Input.apply(this, arguments);
  }
  /**
   * @return {undefined}
   */
  function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    Input.apply(this, arguments);
    /** @type {!Array} */
    this.store = this.manager.session.pointerEvents = [];
  }
  /**
   * @return {undefined}
   */
  function SingleTouchInput() {
    /** @type {string} */
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    /** @type {string} */
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    /** @type {boolean} */
    this.started = false;
    Input.apply(this, arguments);
  }
  /**
   * @param {!Event} event
   * @param {number} row
   * @return {?}
   */
  function f(event, row) {
    var result = toArray(event.touches);
    var i = toArray(event.changedTouches);
    return 12 & row && (result = build(result.concat(i), "identifier", true)), [result, i];
  }
  /**
   * @return {undefined}
   */
  function TouchInput() {
    /** @type {string} */
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
  }
  /**
   * @param {!Event} event
   * @param {number} touches
   * @return {?}
   */
  function getTouches(event, touches) {
    var allTouches = toArray(event.touches);
    var targetIds = this.targetIds;
    if (3 & touches && 1 === allTouches.length) {
      return targetIds[allTouches[0].identifier] = true, [allTouches, allTouches];
    }
    var i;
    var columns;
    var args = toArray(event.changedTouches);
    /** @type {!Array} */
    var path = [];
    var target = this.target;
    if (columns = allTouches.filter(function(touch) {
      return hasParent(touch.target, target);
    }), 1 === touches) {
      /** @type {number} */
      i = 0;
      for (; i < columns.length;) {
        /** @type {boolean} */
        targetIds[columns[i].identifier] = true;
        i++;
      }
    }
    /** @type {number} */
    i = 0;
    for (; i < args.length;) {
      if (targetIds[args[i].identifier]) {
        path.push(args[i]);
      }
      if (12 & touches) {
        delete targetIds[args[i].identifier];
      }
      i++;
    }
    return path.length ? [build(columns.concat(path), "identifier", true), path] : void 0;
  }
  /**
   * @return {undefined}
   */
  function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
    /** @type {null} */
    this.primaryTouch = null;
    /** @type {!Array} */
    this.lastTouches = [];
  }
  /**
   * @param {number} eventType
   * @param {!Object} eventData
   * @return {undefined}
   */
  function recordTouches(eventType, eventData) {
    if (1 & eventType) {
      this.primaryTouch = eventData.changedPointers[0].identifier;
      setLastTouch.call(this, eventData);
    } else {
      if (12 & eventType) {
        setLastTouch.call(this, eventData);
      }
    }
  }
  /**
   * @param {!Object} eventData
   * @return {undefined}
   */
  function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];
    if (touch.identifier === this.primaryTouch) {
      var lastTouch = {
        x : touch.clientX,
        y : touch.clientY
      };
      this.lastTouches.push(lastTouch);
      var lts = this.lastTouches;
      setTimeout(function() {
        var i = lts.indexOf(lastTouch);
        if (i > -1) {
          lts.splice(i, 1);
        }
      }, 2500);
    }
  }
  /**
   * @param {!Object} eventData
   * @return {?}
   */
  function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX;
    var y = eventData.srcEvent.clientY;
    /** @type {number} */
    var i = 0;
    for (; i < this.lastTouches.length; i++) {
      var t = this.lastTouches[i];
      /** @type {number} */
      var r = Math.abs(x - t.x);
      /** @type {number} */
      var m = Math.abs(y - t.y);
      if (r <= 25 && m <= 25) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {!Object} value
   * @param {undefined} c
   * @return {undefined}
   */
  function TouchAction(value, c) {
    /** @type {!Object} */
    this.manager = value;
    this.set(c);
  }
  /**
   * @param {number} options
   * @return {undefined}
   */
  function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});
    /** @type {number} */
    this.id = nextProfileItemId++;
    /** @type {null} */
    this.manager = null;
    this.options.enable = ifUndefined(this.options.enable, true);
    /** @type {number} */
    this.state = 1;
    this.simultaneous = {};
    /** @type {!Array} */
    this.requireFail = [];
  }
  /**
   * @param {number} state
   * @return {?}
   */
  function stateStr(state) {
    return 16 & state ? "cancel" : 8 & state ? "end" : 4 & state ? "move" : 2 & state ? "start" : "";
  }
  /**
   * @param {number} textAlign
   * @return {?}
   */
  function directionStr(textAlign) {
    return 16 == textAlign ? "down" : 8 == textAlign ? "up" : 2 == textAlign ? "left" : 4 == textAlign ? "right" : "";
  }
  /**
   * @param {!Object} arg
   * @param {!Window} task
   * @return {?}
   */
  function getRecognizerByNameIfManager(arg, task) {
    var context = task.manager;
    return context ? context.get(arg) : arg;
  }
  /**
   * @return {undefined}
   */
  function AttrRecognizer() {
    Recognizer.apply(this, arguments);
  }
  /**
   * @return {undefined}
   */
  function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    /** @type {null} */
    this.pX = null;
    /** @type {null} */
    this.pY = null;
  }
  /**
   * @return {undefined}
   */
  function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  /**
   * @return {undefined}
   */
  function PressRecognizer() {
    Recognizer.apply(this, arguments);
    /** @type {null} */
    this._timer = null;
    /** @type {null} */
    this._input = null;
  }
  /**
   * @return {undefined}
   */
  function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  /**
   * @return {undefined}
   */
  function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  /**
   * @return {undefined}
   */
  function TapRecognizer() {
    Recognizer.apply(this, arguments);
    /** @type {boolean} */
    this.pTime = false;
    /** @type {boolean} */
    this.pCenter = false;
    /** @type {null} */
    this._timer = null;
    /** @type {null} */
    this._input = null;
    /** @type {number} */
    this.count = 0;
  }
  /**
   * @param {string} element
   * @param {!Object} options
   * @return {?}
   */
  function Hammer(element, options) {
    return (options = options || {}).recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset), new Manager(element, options);
  }
  /**
   * @param {!Object} element
   * @param {number} options
   * @return {undefined}
   */
  function Manager(element, options) {
    var entry;
    this.options = assign({}, Hammer.defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    /** @type {!Array} */
    this.recognizers = [];
    this.oldCssProps = {};
    /** @type {!Object} */
    this.element = element;
    this.input = new ((entry = this).options.inputClass || (rawDataIsArray ? PointerEventInput : rawDataIsList ? TouchInput : IS_TOUCH_ENABLED ? TouchMouseInput : MouseInput))(entry, init);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function(item) {
      var recognizer = this.add(new item[0](item[1]));
      if (item[2]) {
        recognizer.recognizeWith(item[2]);
      }
      if (item[3]) {
        recognizer.requireFailure(item[3]);
      }
    }, this);
  }
  /**
   * @param {!Object} manager
   * @param {boolean} add
   * @return {undefined}
   */
  function toggleCssProps(manager, add) {
    var prop;
    var element = manager.element;
    if (element.style) {
      each(manager.options.cssProps, function(cond, name) {
        prop = prefixed(element.style, name);
        if (add) {
          manager.oldCssProps[prop] = element.style[prop];
          /** @type {!Object} */
          element.style[prop] = cond;
        } else {
          element.style[prop] = manager.oldCssProps[prop] || "";
        }
      });
      if (!add) {
        manager.oldCssProps = {};
      }
    }
  }
  var assign;
  /** @type {!Array} */
  var VENDOR_PREFIXES = ["", "webkit", "Moz", "MS", "ms", "o"];
  /** @type {!Element} */
  var TEST_ELEMENT = doc.createElement("div");
  /** @type {function(?): number} */
  var round = Math.round;
  /** @type {function(?): number} */
  var abs = Math.abs;
  /** @type {function(): number} */
  var now = Date.now;
  /** @type {!Function} */
  assign = "function" != typeof Object.assign ? function(target) {
    if (target === undefined || null === target) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    /** @type {!Object} */
    var output = Object(target);
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      var value = arguments[i];
      if (value !== undefined && null !== value) {
        var k;
        for (k in value) {
          if (value.hasOwnProperty(k)) {
            output[k] = value[k];
          }
        }
      }
    }
    return output;
  } : Object.assign;
  var extend = deprecate(function(stats, tiles, n) {
    /** @type {!Array<string>} */
    var rows = Object.keys(tiles);
    /** @type {number} */
    var i = 0;
    for (; i < rows.length;) {
      if (!n || n && stats[rows[i]] === undefined) {
        stats[rows[i]] = tiles[rows[i]];
      }
      i++;
    }
    return stats;
  }, "extend", "Use `assign`.");
  var merge = deprecate(function(t, e) {
    return extend(t, e, true);
  }, "merge", "Use `assign`.");
  /** @type {number} */
  var nextProfileItemId = 1;
  /** @type {boolean} */
  var IS_TOUCH_ENABLED = "ontouchstart" in window;
  /** @type {boolean} */
  var rawDataIsArray = prefixed(window, "PointerEvent") !== undefined;
  /** @type {boolean} */
  var rawDataIsList = IS_TOUCH_ENABLED && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent);
  /** @type {string} */
  var INPUT_TYPE_TOUCH = "touch";
  /** @type {string} */
  var INPUT_TYPE_MOUSE = "mouse";
  /** @type {number} */
  var DIRECTION_VERTICAL = 24;
  /** @type {!Array} */
  var PROPS_XY = ["x", "y"];
  /** @type {!Array} */
  var PROPS_CLIENT_XY = ["clientX", "clientY"];
  Input.prototype = {
    handler : function() {
    },
    init : function() {
      if (this.evEl) {
        addEventListeners(this.element, this.evEl, this.domHandler);
      }
      if (this.evTarget) {
        addEventListeners(this.target, this.evTarget, this.domHandler);
      }
      if (this.evWin) {
        addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
      }
    },
    destroy : function() {
      if (this.evEl) {
        removeEventListeners(this.element, this.evEl, this.domHandler);
      }
      if (this.evTarget) {
        removeEventListeners(this.target, this.evTarget, this.domHandler);
      }
      if (this.evWin) {
        removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
      }
    }
  };
  var MOUSE_INPUT_MAP = {
    mousedown : 1,
    mousemove : 2,
    mouseup : 4
  };
  /** @type {string} */
  var MOUSE_ELEMENT_EVENTS = "mousedown";
  /** @type {string} */
  var POINTER_WINDOW_EVENTS = "mousemove mouseup";
  inherit(MouseInput, Input, {
    handler : function(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type];
      if (1 & eventType && 0 === ev.button) {
        /** @type {boolean} */
        this.pressed = true;
      }
      if (2 & eventType && 1 !== ev.which) {
        /** @type {number} */
        eventType = 4;
      }
      if (this.pressed) {
        if (4 & eventType) {
          /** @type {boolean} */
          this.pressed = false;
        }
        this.callback(this.manager, eventType, {
          pointers : [ev],
          changedPointers : [ev],
          pointerType : INPUT_TYPE_MOUSE,
          srcEvent : ev
        });
      }
    }
  });
  var POINTER_INPUT_MAP = {
    pointerdown : 1,
    pointermove : 2,
    pointerup : 4,
    pointercancel : 8,
    pointerout : 8
  };
  var IE10_POINTER_TYPE_ENUM = {
    2 : INPUT_TYPE_TOUCH,
    3 : "pen",
    4 : INPUT_TYPE_MOUSE,
    5 : "kinect"
  };
  /** @type {string} */
  var POINTER_ELEMENT_EVENTS = "pointerdown";
  /** @type {string} */
  var MOUSE_WINDOW_EVENTS = "pointermove pointerup pointercancel";
  if (window.MSPointerEvent && !window.PointerEvent) {
    /** @type {string} */
    POINTER_ELEMENT_EVENTS = "MSPointerDown";
    /** @type {string} */
    MOUSE_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
  }
  inherit(PointerEventInput, Input, {
    handler : function(ev) {
      var store = this.store;
      /** @type {boolean} */
      var n = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      /** @type {boolean} */
      var isTouch = pointerType == INPUT_TYPE_TOUCH;
      var storeIndex = inArray(store, ev.pointerId, "pointerId");
      if (1 & eventType && (0 === ev.button || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          /** @type {number} */
          storeIndex = store.length - 1;
        }
      } else {
        if (12 & eventType) {
          /** @type {boolean} */
          n = true;
        }
      }
      if (!(storeIndex < 0)) {
        /** @type {!Object} */
        store[storeIndex] = ev;
        this.callback(this.manager, eventType, {
          pointers : store,
          changedPointers : [ev],
          pointerType : pointerType,
          srcEvent : ev
        });
        if (n) {
          store.splice(storeIndex, 1);
        }
      }
    }
  });
  var map = {
    touchstart : 1,
    touchmove : 2,
    touchend : 4,
    touchcancel : 8
  };
  /** @type {string} */
  var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
  /** @type {string} */
  var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
  inherit(SingleTouchInput, Input, {
    handler : function(event) {
      var type = map[event.type];
      if (1 === type && (this.started = true), this.started) {
        var touches = f.call(this, event, type);
        if (12 & type && touches[0].length - touches[1].length == 0) {
          /** @type {boolean} */
          this.started = false;
        }
        this.callback(this.manager, type, {
          pointers : touches[0],
          changedPointers : touches[1],
          pointerType : INPUT_TYPE_TOUCH,
          srcEvent : event
        });
      }
    }
  });
  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart : 1,
    touchmove : 2,
    touchend : 4,
    touchcancel : 8
  };
  /** @type {string} */
  var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
  inherit(TouchInput, Input, {
    handler : function(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);
      if (touches) {
        this.callback(this.manager, type, {
          pointers : touches[0],
          changedPointers : touches[1],
          pointerType : INPUT_TYPE_TOUCH,
          srcEvent : ev
        });
      }
    }
  });
  inherit(TouchMouseInput, Input, {
    handler : function(type, inputEvent, inputData) {
      /** @type {boolean} */
      var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH;
      /** @type {boolean} */
      var isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
      if (!(isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents)) {
        if (isTouch) {
          recordTouches.call(this, inputEvent, inputData);
        } else {
          if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
          }
        }
        this.callback(type, inputEvent, inputData);
      }
    },
    destroy : function() {
      this.touch.destroy();
      this.mouse.destroy();
    }
  });
  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
  /** @type {boolean} */
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
  /** @type {string} */
  var TOUCH_ACTION_COMPUTE = "compute";
  /** @type {string} */
  var value = "auto";
  /** @type {string} */
  var TOUCH_ACTION_MANIPULATION = "manipulation";
  /** @type {string} */
  var TOUCH_ACTION_NONE = "none";
  /** @type {string} */
  var TOUCH_ACTION_PAN_X = "pan-x";
  /** @type {string} */
  var TOUCH_ACTION_PAN_Y = "pan-y";
  var TOUCH_ACTION_MAP = function() {
    if (!NATIVE_TOUCH_ACTION) {
      return false;
    }
    var ColumnsPlugins = {};
    /** @type {(function(this:CSSInterface, string, string=): boolean|null)} */
    var n = window.CSS && window.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(val) {
      /** @type {boolean} */
      ColumnsPlugins[val] = !n || window.CSS.supports("touch-action", val);
    }), ColumnsPlugins;
  }();
  TouchAction.prototype = {
    set : function(value) {
      if (value == TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }
      if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
        /** @type {string} */
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }
      this.actions = value.toLowerCase().trim();
    },
    update : function() {
      this.set(this.manager.options.touchAction);
    },
    compute : function() {
      /** @type {!Array} */
      var sortedFolderIds = [];
      return each(this.manager.recognizers, function(recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          sortedFolderIds = sortedFolderIds.concat(recognizer.getTouchAction());
        }
      }), function(actions) {
        if (inStr(actions, TOUCH_ACTION_NONE)) {
          return TOUCH_ACTION_NONE;
        }
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        if (hasPanX && hasPanY) {
          return TOUCH_ACTION_NONE;
        }
        if (hasPanX || hasPanY) {
          return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        }
        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
          return TOUCH_ACTION_MANIPULATION;
        }
        return value;
      }(sortedFolderIds.join(" "));
    },
    preventDefaults : function(input) {
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection;
      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
      } else {
        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP.none;
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP["pan-y"];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP["pan-x"];
        if (hasNone) {
          /** @type {boolean} */
          var a = 1 === input.pointers.length;
          /** @type {boolean} */
          var b = input.distance < 2;
          /** @type {boolean} */
          var div = input.deltaTime < 250;
          if (a && b && div) {
            return;
          }
        }
        if (!hasPanX || !hasPanY) {
          return hasNone || hasPanY && 6 & direction || hasPanX && direction & DIRECTION_VERTICAL ? this.preventSrc(srcEvent) : void 0;
        }
      }
    },
    preventSrc : function(srcEvent) {
      /** @type {boolean} */
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    }
  };
  /** @type {number} */
  var val = 32;
  Recognizer.prototype = {
    defaults : {},
    set : function(value) {
      return assign(this.options, value), this.manager && this.manager.touchAction.update(), this;
    },
    recognizeWith : function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) {
        return this;
      }
      var simultaneous = this.simultaneous;
      return simultaneous[(otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this)).id] || (simultaneous[otherRecognizer.id] = otherRecognizer, otherRecognizer.recognizeWith(this)), this;
    },
    dropRecognizeWith : function(otherRecognizer) {
      return invokeArrayArg(otherRecognizer, "dropRecognizeWith", this) || (otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this), delete this.simultaneous[otherRecognizer.id]), this;
    },
    requireFailure : function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, "requireFailure", this)) {
        return this;
      }
      var requireFail = this.requireFail;
      return -1 === inArray(requireFail, otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this)) && (requireFail.push(otherRecognizer), otherRecognizer.requireFailure(this)), this;
    },
    dropRequireFailure : function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);
      return index > -1 && this.requireFail.splice(index, 1), this;
    },
    hasRequireFailures : function() {
      return this.requireFail.length > 0;
    },
    canRecognizeWith : function(otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    },
    emit : function(input) {
      /**
       * @param {undefined} name
       * @return {undefined}
       */
      function emit(name) {
        that.manager.emit(name, input);
      }
      var that = this;
      var state = this.state;
      if (state < 8) {
        emit(that.options.event + stateStr(state));
      }
      emit(that.options.event);
      if (input.additionalEvent) {
        emit(input.additionalEvent);
      }
      if (state >= 8) {
        emit(that.options.event + stateStr(state));
      }
    },
    tryEmit : function(input) {
      if (this.canEmit()) {
        return this.emit(input);
      }
      /** @type {number} */
      this.state = val;
    },
    canEmit : function() {
      /** @type {number} */
      var i = 0;
      for (; i < this.requireFail.length;) {
        if (!(33 & this.requireFail[i].state)) {
          return false;
        }
        i++;
      }
      return true;
    },
    recognize : function(inputData) {
      var inputDataClone = assign({}, inputData);
      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        return this.reset(), void(this.state = val);
      }
      if (56 & this.state) {
        /** @type {number} */
        this.state = 1;
      }
      this.state = this.process(inputDataClone);
      if (30 & this.state) {
        this.tryEmit(inputDataClone);
      }
    },
    process : function(input) {
    },
    getTouchAction : function() {
    },
    reset : function() {
    }
  };
  inherit(AttrRecognizer, Recognizer, {
    defaults : {
      pointers : 1
    },
    attrTest : function(input) {
      var optionPointers = this.options.pointers;
      return 0 === optionPointers || input.pointers.length === optionPointers;
    },
    process : function(input) {
      var thisState = this.state;
      var et = input.eventType;
      /** @type {number} */
      var minDate = 6 & thisState;
      var isValid = this.attrTest(input);
      return minDate && (8 & et || !isValid) ? 16 | thisState : minDate || isValid ? 4 & et ? 8 | thisState : 2 & thisState ? 4 | thisState : 2 : val;
    }
  });
  inherit(PanRecognizer, AttrRecognizer, {
    defaults : {
      event : "pan",
      threshold : 10,
      pointers : 1,
      direction : 30
    },
    getTouchAction : function() {
      var direction = this.options.direction;
      /** @type {!Array} */
      var actions = [];
      return 6 & direction && actions.push(TOUCH_ACTION_PAN_Y), direction & DIRECTION_VERTICAL && actions.push(TOUCH_ACTION_PAN_X), actions;
    },
    directionTest : function(input) {
      var options = this.options;
      /** @type {boolean} */
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY;
      return direction & options.direction || (6 & options.direction ? (direction = 0 === x ? 1 : x < 0 ? 2 : 4, hasMoved = x != this.pX, distance = Math.abs(input.deltaX)) : (direction = 0 === y ? 1 : y < 0 ? 8 : 16, hasMoved = y != this.pY, distance = Math.abs(input.deltaY))), input.direction = direction, hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest : function(input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && (2 & this.state || !(2 & this.state) && this.directionTest(input));
    },
    emit : function(input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);
      if (direction) {
        input.additionalEvent = this.options.event + direction;
      }
      this._super.emit.call(this, input);
    }
  });
  inherit(PinchRecognizer, AttrRecognizer, {
    defaults : {
      event : "pinch",
      threshold : 0,
      pointers : 2
    },
    getTouchAction : function() {
      return [TOUCH_ACTION_NONE];
    },
    attrTest : function(input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || 2 & this.state);
    },
    emit : function(input) {
      if (1 !== input.scale) {
        /** @type {string} */
        var inOut = input.scale < 1 ? "in" : "out";
        /** @type {string} */
        input.additionalEvent = this.options.event + inOut;
      }
      this._super.emit.call(this, input);
    }
  });
  inherit(PressRecognizer, Recognizer, {
    defaults : {
      event : "press",
      pointers : 1,
      time : 251,
      threshold : 9
    },
    getTouchAction : function() {
      return [value];
    },
    process : function(input) {
      var options = this.options;
      /** @type {boolean} */
      var n = input.pointers.length === options.pointers;
      /** @type {boolean} */
      var op_type = input.distance < options.threshold;
      /** @type {boolean} */
      var s = input.deltaTime > options.time;
      if (this._input = input, !op_type || !n || 12 & input.eventType && !s) {
        this.reset();
      } else {
        if (1 & input.eventType) {
          this.reset();
          this._timer = setTimeoutContext(function() {
            /** @type {number} */
            this.state = 8;
            this.tryEmit();
          }, options.time, this);
        } else {
          if (4 & input.eventType) {
            return 8;
          }
        }
      }
      return val;
    },
    reset : function() {
      clearTimeout(this._timer);
    },
    emit : function(input) {
      if (8 === this.state) {
        if (input && 4 & input.eventType) {
          this.manager.emit(this.options.event + "up", input);
        } else {
          /** @type {number} */
          this._input.timeStamp = now();
          this.manager.emit(this.options.event, this._input);
        }
      }
    }
  });
  inherit(RotateRecognizer, AttrRecognizer, {
    defaults : {
      event : "rotate",
      threshold : 0,
      pointers : 2
    },
    getTouchAction : function() {
      return [TOUCH_ACTION_NONE];
    },
    attrTest : function(input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || 2 & this.state);
    }
  });
  inherit(SwipeRecognizer, AttrRecognizer, {
    defaults : {
      event : "swipe",
      threshold : 10,
      velocity : .3,
      direction : 30,
      pointers : 1
    },
    getTouchAction : function() {
      return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest : function(input) {
      var velocity;
      var direction = this.options.direction;
      return 30 & direction ? velocity = input.overallVelocity : 6 & direction ? velocity = input.overallVelocityX : direction & DIRECTION_VERTICAL && (velocity = input.overallVelocityY), this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && 4 & input.eventType;
    },
    emit : function(input) {
      var direction = directionStr(input.offsetDirection);
      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }
      this.manager.emit(this.options.event, input);
    }
  });
  inherit(TapRecognizer, Recognizer, {
    defaults : {
      event : "tap",
      pointers : 1,
      taps : 1,
      interval : 300,
      time : 250,
      threshold : 9,
      posThreshold : 10
    },
    getTouchAction : function() {
      return [TOUCH_ACTION_MANIPULATION];
    },
    process : function(input) {
      var options = this.options;
      /** @type {boolean} */
      var m = input.pointers.length === options.pointers;
      /** @type {boolean} */
      var i = input.distance < options.threshold;
      /** @type {boolean} */
      var j = input.deltaTime < options.time;
      if (this.reset(), 1 & input.eventType && 0 === this.count) {
        return this.failTimeout();
      }
      if (i && j && m) {
        if (4 != input.eventType) {
          return this.failTimeout();
        }
        /** @type {boolean} */
        var c = !this.pTime || input.timeStamp - this.pTime < options.interval;
        /** @type {boolean} */
        var o = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        if (this.pTime = input.timeStamp, this.pCenter = input.center, o && c ? this.count += 1 : this.count = 1, this._input = input, 0 === this.count % options.taps) {
          return this.hasRequireFailures() ? (this._timer = setTimeoutContext(function() {
            /** @type {number} */
            this.state = 8;
            this.tryEmit();
          }, options.interval, this), 2) : 8;
        }
      }
      return val;
    },
    failTimeout : function() {
      return this._timer = setTimeoutContext(function() {
        /** @type {number} */
        this.state = val;
      }, this.options.interval, this), val;
    },
    reset : function() {
      clearTimeout(this._timer);
    },
    emit : function() {
      if (8 == this.state) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    }
  });
  /** @type {string} */
  Hammer.VERSION = "2.0.8";
  Hammer.defaults = {
    domEvents : false,
    touchAction : TOUCH_ACTION_COMPUTE,
    enable : true,
    inputTarget : null,
    inputClass : null,
    preset : [[RotateRecognizer, {
      enable : false
    }], [PinchRecognizer, {
      enable : false
    }, ["rotate"]], [SwipeRecognizer, {
      direction : 6
    }], [PanRecognizer, {
      direction : 6
    }, ["swipe"]], [TapRecognizer], [TapRecognizer, {
      event : "doubletap",
      taps : 2
    }, ["tap"]], [PressRecognizer]],
    cssProps : {
      userSelect : "none",
      touchSelect : "none",
      touchCallout : "none",
      contentZooming : "none",
      userDrag : "none",
      tapHighlightColor : "rgba(0,0,0,0)"
    }
  };
  Manager.prototype = {
    set : function(options) {
      return assign(this.options, options), options.touchAction && this.touchAction.update(), options.inputTarget && (this.input.destroy(), this.input.target = options.inputTarget, this.input.init()), this;
    },
    stop : function(force) {
      /** @type {number} */
      this.session.stopped = force ? 2 : 1;
    },
    recognize : function(inputData) {
      var session = this.session;
      if (!session.stopped) {
        var recognizer;
        this.touchAction.preventDefaults(inputData);
        var recognizers = this.recognizers;
        var curRecognizer = session.curRecognizer;
        if (!curRecognizer || curRecognizer && 8 & curRecognizer.state) {
          /** @type {null} */
          curRecognizer = session.curRecognizer = null;
        }
        /** @type {number} */
        var i = 0;
        for (; i < recognizers.length;) {
          recognizer = recognizers[i];
          if (2 === session.stopped || curRecognizer && recognizer != curRecognizer && !recognizer.canRecognizeWith(curRecognizer)) {
            recognizer.reset();
          } else {
            recognizer.recognize(inputData);
          }
          if (!curRecognizer && 14 & recognizer.state) {
            curRecognizer = session.curRecognizer = recognizer;
          }
          i++;
        }
      }
    },
    get : function(fn) {
      if (fn instanceof Recognizer) {
        return fn;
      }
      var recognizers = this.recognizers;
      /** @type {number} */
      var i = 0;
      for (; i < recognizers.length; i++) {
        if (recognizers[i].options.event == fn) {
          return recognizers[i];
        }
      }
      return null;
    },
    add : function(recognizer) {
      if (invokeArrayArg(recognizer, "add", this)) {
        return this;
      }
      var a = this.get(recognizer.options.event);
      return a && this.remove(a), this.recognizers.push(recognizer), recognizer.manager = this, this.touchAction.update(), recognizer;
    },
    remove : function(val) {
      if (invokeArrayArg(val, "remove", this)) {
        return this;
      }
      if (val = this.get(val)) {
        var recognizers = this.recognizers;
        var index = inArray(recognizers, val);
        if (-1 !== index) {
          recognizers.splice(index, 1);
          this.touchAction.update();
        }
      }
      return this;
    },
    on : function(name, type) {
      if (name !== undefined && type !== undefined) {
        var handlers = this.handlers;
        return each($(name), function(name) {
          handlers[name] = handlers[name] || [];
          handlers[name].push(type);
        }), this;
      }
    },
    off : function(name, value) {
      if (name !== undefined) {
        var handlers = this.handlers;
        return each($(name), function(event) {
          if (value) {
            if (handlers[event]) {
              handlers[event].splice(inArray(handlers[event], value), 1);
            }
          } else {
            delete handlers[event];
          }
        }), this;
      }
    },
    emit : function(type, data) {
      if (this.options.domEvents) {
        (function(type, data) {
          /** @type {(Event|null)} */
          var event = doc.createEvent("Event");
          event.initEvent(type, true, true);
          /** @type {!Object} */
          event.gesture = data;
          data.target.dispatchEvent(event);
        })(type, data);
      }
      var urls = this.handlers[type] && this.handlers[type].slice();
      if (urls && urls.length) {
        /** @type {string} */
        data.type = type;
        /**
         * @return {undefined}
         */
        data.preventDefault = function() {
          data.srcEvent.preventDefault();
        };
        /** @type {number} */
        var i = 0;
        for (; i < urls.length;) {
          urls[i](data);
          i++;
        }
      }
    },
    destroy : function() {
      if (this.element) {
        toggleCssProps(this, false);
      }
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      /** @type {null} */
      this.element = null;
    }
  };
  assign(Hammer, {
    INPUT_START : 1,
    INPUT_MOVE : 2,
    INPUT_END : 4,
    INPUT_CANCEL : 8,
    STATE_POSSIBLE : 1,
    STATE_BEGAN : 2,
    STATE_CHANGED : 4,
    STATE_ENDED : 8,
    STATE_RECOGNIZED : 8,
    STATE_CANCELLED : 16,
    STATE_FAILED : val,
    DIRECTION_NONE : 1,
    DIRECTION_LEFT : 2,
    DIRECTION_RIGHT : 4,
    DIRECTION_UP : 8,
    DIRECTION_DOWN : 16,
    DIRECTION_HORIZONTAL : 6,
    DIRECTION_VERTICAL : DIRECTION_VERTICAL,
    DIRECTION_ALL : 30,
    Manager : Manager,
    Input : Input,
    TouchAction : TouchAction,
    TouchInput : TouchInput,
    MouseInput : MouseInput,
    PointerEventInput : PointerEventInput,
    TouchMouseInput : TouchMouseInput,
    SingleTouchInput : SingleTouchInput,
    Recognizer : Recognizer,
    AttrRecognizer : AttrRecognizer,
    Tap : TapRecognizer,
    Pan : PanRecognizer,
    Swipe : SwipeRecognizer,
    Pinch : PinchRecognizer,
    Rotate : RotateRecognizer,
    Press : PressRecognizer,
    on : addEventListeners,
    off : removeEventListeners,
    each : each,
    merge : merge,
    extend : extend,
    assign : assign,
    inherit : inherit,
    bindFn : bindFn,
    prefixed : prefixed
  });
  /** @type {function(string, !Object): ?} */
  (void 0 !== window ? window : "undefined" != typeof self ? self : {}).Hammer = Hammer;
  if ("function" == typeof define && define.amd) {
    define(function() {
      return Hammer;
    });
  } else {
    if ("undefined" != typeof module && module.exports) {
      /** @type {function(string, !Object): ?} */
      module.exports = Hammer;
    } else {
      /** @type {function(string, !Object): ?} */
      window.Hammer = Hammer;
    }
  }
}(window, document);
var LZString = function() {
  /**
   * @param {string} alphabet
   * @param {?} character
   * @return {?}
   */
  function getBaseValue(alphabet, character) {
    if (!baseReverseDic[alphabet]) {
      baseReverseDic[alphabet] = {};
      /** @type {number} */
      var i = 0;
      for (; i < alphabet.length; i++) {
        /** @type {number} */
        baseReverseDic[alphabet][alphabet.charAt(i)] = i;
      }
    }
    return baseReverseDic[alphabet][character];
  }
  /** @type {function(...number): string} */
  var f = String.fromCharCode;
  /** @type {string} */
  var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  /** @type {string} */
  var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
  var baseReverseDic = {};
  var LZString = {
    compressToBase64 : function(input) {
      if (null == input) {
        return "";
      }
      var output = LZString._compress(input, 6, function(a) {
        return keyStrBase64.charAt(a);
      });
      switch(output.length % 4) {
        default:
          return output;
        case 1:
          return output + "===";
        case 2:
          return output + "==";
        case 3:
          return output + "=";
      }
    },
    decompressFromBase64 : function(input) {
      return null == input ? "" : "" == input ? null : LZString._decompress(input.length, 32, function(index) {
        return getBaseValue(keyStrBase64, input.charAt(index));
      });
    },
    compressToUTF16 : function(input) {
      return null == input ? "" : LZString._compress(input, 15, function(i) {
        return f(i + 32);
      }) + " ";
    },
    decompressFromUTF16 : function(input) {
      return null == input ? "" : "" == input ? null : LZString._decompress(input.length, 16384, function(i) {
        return input.charCodeAt(i) - 32;
      });
    },
    compressToUint8Array : function(uncompressed) {
      var compressed = LZString.compress(uncompressed);
      /** @type {!Uint8Array} */
      var buf = new Uint8Array(2 * compressed.length);
      /** @type {number} */
      var i = 0;
      var length = compressed.length;
      for (; length > i; i++) {
        var current_value = compressed.charCodeAt(i);
        /** @type {number} */
        buf[2 * i] = current_value >>> 8;
        /** @type {number} */
        buf[2 * i + 1] = current_value % 256;
      }
      return buf;
    },
    decompressFromUint8Array : function(compressed) {
      if (null == compressed) {
        return LZString.decompress(compressed);
      }
      /** @type {!Array} */
      var n = new Array(compressed.length / 2);
      /** @type {number} */
      var s = 0;
      /** @type {number} */
      var count = n.length;
      for (; count > s; s++) {
        n[s] = 256 * compressed[2 * s] + compressed[2 * s + 1];
      }
      /** @type {!Array} */
      var zip = [];
      return n.forEach(function(file) {
        zip.push(f(file));
      }), LZString.decompress(zip.join(""));
    },
    compressToEncodedURIComponent : function(value) {
      return null == value ? "" : LZString._compress(value, 6, function(a) {
        return keyStrUriSafe.charAt(a);
      });
    },
    decompressFromEncodedURIComponent : function(input) {
      return null == input ? "" : "" == input ? null : (input = input.replace(/ /g, "+"), LZString._decompress(input.length, 32, function(index) {
        return getBaseValue(keyStrUriSafe, input.charAt(index));
      }));
    },
    compress : function(data) {
      return LZString._compress(data, 16, function(aTarget) {
        return f(aTarget);
      });
    },
    _compress : function(id, data, clamp) {
      if (null == id) {
        return "";
      }
      var x;
      var v;
      var i;
      var out = {};
      var o = {};
      /** @type {string} */
      var s = "";
      /** @type {string} */
      var b = "";
      /** @type {string} */
      var c = "";
      /** @type {number} */
      var randomValue = 2;
      /** @type {number} */
      var symbolId = 3;
      /** @type {number} */
      var charsetBitSize = 2;
      /** @type {!Array} */
      var colors = [];
      /** @type {number} */
      var r = 0;
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      i = 0;
      for (; i < id.length; i = i + 1) {
        if (s = id.charAt(i), Object.prototype.hasOwnProperty.call(out, s) || (out[s] = symbolId++, o[s] = true), b = c + s, Object.prototype.hasOwnProperty.call(out, b)) {
          /** @type {string} */
          c = b;
        } else {
          if (Object.prototype.hasOwnProperty.call(o, c)) {
            if (c.charCodeAt(0) < 256) {
              /** @type {number} */
              x = 0;
              for (; charsetBitSize > x; x++) {
                /** @type {number} */
                r = r << 1;
                if (n == data - 1) {
                  /** @type {number} */
                  n = 0;
                  colors.push(clamp(r));
                  /** @type {number} */
                  r = 0;
                } else {
                  n++;
                }
              }
              /** @type {number} */
              v = c.charCodeAt(0);
              /** @type {number} */
              x = 0;
              for (; 8 > x; x++) {
                /** @type {number} */
                r = r << 1 | 1 & v;
                if (n == data - 1) {
                  /** @type {number} */
                  n = 0;
                  colors.push(clamp(r));
                  /** @type {number} */
                  r = 0;
                } else {
                  n++;
                }
                /** @type {number} */
                v = v >> 1;
              }
            } else {
              /** @type {number} */
              v = 1;
              /** @type {number} */
              x = 0;
              for (; charsetBitSize > x; x++) {
                /** @type {number} */
                r = r << 1 | v;
                if (n == data - 1) {
                  /** @type {number} */
                  n = 0;
                  colors.push(clamp(r));
                  /** @type {number} */
                  r = 0;
                } else {
                  n++;
                }
                /** @type {number} */
                v = 0;
              }
              /** @type {number} */
              v = c.charCodeAt(0);
              /** @type {number} */
              x = 0;
              for (; 16 > x; x++) {
                /** @type {number} */
                r = r << 1 | 1 & v;
                if (n == data - 1) {
                  /** @type {number} */
                  n = 0;
                  colors.push(clamp(r));
                  /** @type {number} */
                  r = 0;
                } else {
                  n++;
                }
                /** @type {number} */
                v = v >> 1;
              }
            }
            if (0 == --randomValue) {
              /** @type {number} */
              randomValue = Math.pow(2, charsetBitSize);
              charsetBitSize++;
            }
            delete o[c];
          } else {
            v = out[c];
            /** @type {number} */
            x = 0;
            for (; charsetBitSize > x; x++) {
              /** @type {number} */
              r = r << 1 | 1 & v;
              if (n == data - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
              /** @type {number} */
              v = v >> 1;
            }
          }
          if (0 == --randomValue) {
            /** @type {number} */
            randomValue = Math.pow(2, charsetBitSize);
            charsetBitSize++;
          }
          /** @type {number} */
          out[b] = symbolId++;
          /** @type {string} */
          c = String(s);
        }
      }
      if ("" !== c) {
        if (Object.prototype.hasOwnProperty.call(o, c)) {
          if (c.charCodeAt(0) < 256) {
            /** @type {number} */
            x = 0;
            for (; charsetBitSize > x; x++) {
              /** @type {number} */
              r = r << 1;
              if (n == data - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
            }
            /** @type {number} */
            v = c.charCodeAt(0);
            /** @type {number} */
            x = 0;
            for (; 8 > x; x++) {
              /** @type {number} */
              r = r << 1 | 1 & v;
              if (n == data - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
              /** @type {number} */
              v = v >> 1;
            }
          } else {
            /** @type {number} */
            v = 1;
            /** @type {number} */
            x = 0;
            for (; charsetBitSize > x; x++) {
              /** @type {number} */
              r = r << 1 | v;
              if (n == data - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
              /** @type {number} */
              v = 0;
            }
            /** @type {number} */
            v = c.charCodeAt(0);
            /** @type {number} */
            x = 0;
            for (; 16 > x; x++) {
              /** @type {number} */
              r = r << 1 | 1 & v;
              if (n == data - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
              /** @type {number} */
              v = v >> 1;
            }
          }
          if (0 == --randomValue) {
            /** @type {number} */
            randomValue = Math.pow(2, charsetBitSize);
            charsetBitSize++;
          }
          delete o[c];
        } else {
          v = out[c];
          /** @type {number} */
          x = 0;
          for (; charsetBitSize > x; x++) {
            /** @type {number} */
            r = r << 1 | 1 & v;
            if (n == data - 1) {
              /** @type {number} */
              n = 0;
              colors.push(clamp(r));
              /** @type {number} */
              r = 0;
            } else {
              n++;
            }
            /** @type {number} */
            v = v >> 1;
          }
        }
        if (0 == --randomValue) {
          /** @type {number} */
          randomValue = Math.pow(2, charsetBitSize);
          charsetBitSize++;
        }
      }
      /** @type {number} */
      v = 2;
      /** @type {number} */
      x = 0;
      for (; charsetBitSize > x; x++) {
        /** @type {number} */
        r = r << 1 | 1 & v;
        if (n == data - 1) {
          /** @type {number} */
          n = 0;
          colors.push(clamp(r));
          /** @type {number} */
          r = 0;
        } else {
          n++;
        }
        /** @type {number} */
        v = v >> 1;
      }
      for (;;) {
        if (r = r << 1, n == data - 1) {
          colors.push(clamp(r));
          break;
        }
        n++;
      }
      return colors.join("");
    },
    decompress : function(input) {
      return null == input ? "" : "" == input ? null : LZString._decompress(input.length, 32768, function(i) {
        return input.charCodeAt(i);
      });
    },
    _decompress : function(length, resetValue, getNextValue) {
      var index;
      var k;
      var i;
      var a;
      var o;
      var ch;
      var n;
      /** @type {!Array} */
      var args = [];
      /** @type {number} */
      var el = 4;
      /** @type {number} */
      var c = 4;
      /** @type {number} */
      var y = 3;
      /** @type {string} */
      var m = "";
      /** @type {!Array} */
      var v = [];
      var data = {
        val : getNextValue(0),
        position : resetValue,
        index : 1
      };
      /** @type {number} */
      index = 0;
      for (; 3 > index; index = index + 1) {
        /** @type {number} */
        args[index] = index;
      }
      /** @type {number} */
      i = 0;
      /** @type {number} */
      o = Math.pow(2, 2);
      /** @type {number} */
      ch = 1;
      for (; ch != o;) {
        /** @type {number} */
        a = data.val & data.position;
        data.position >>= 1;
        if (0 == data.position) {
          /** @type {number} */
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        /** @type {number} */
        i = i | (a > 0 ? 1 : 0) * ch;
        /** @type {number} */
        ch = ch << 1;
      }
      switch(i) {
        case 0:
          /** @type {number} */
          i = 0;
          /** @type {number} */
          o = Math.pow(2, 8);
          /** @type {number} */
          ch = 1;
          for (; ch != o;) {
            /** @type {number} */
            a = data.val & data.position;
            data.position >>= 1;
            if (0 == data.position) {
              /** @type {number} */
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            /** @type {number} */
            i = i | (a > 0 ? 1 : 0) * ch;
            /** @type {number} */
            ch = ch << 1;
          }
          /** @type {string} */
          n = f(i);
          break;
        case 1:
          /** @type {number} */
          i = 0;
          /** @type {number} */
          o = Math.pow(2, 16);
          /** @type {number} */
          ch = 1;
          for (; ch != o;) {
            /** @type {number} */
            a = data.val & data.position;
            data.position >>= 1;
            if (0 == data.position) {
              /** @type {number} */
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            /** @type {number} */
            i = i | (a > 0 ? 1 : 0) * ch;
            /** @type {number} */
            ch = ch << 1;
          }
          /** @type {string} */
          n = f(i);
          break;
        case 2:
          return "";
      }
      /** @type {(string|undefined)} */
      args[3] = n;
      /** @type {(string|undefined)} */
      k = n;
      v.push(n);
      for (;;) {
        if (data.index > length) {
          return "";
        }
        /** @type {number} */
        i = 0;
        /** @type {number} */
        o = Math.pow(2, y);
        /** @type {number} */
        ch = 1;
        for (; ch != o;) {
          /** @type {number} */
          a = data.val & data.position;
          data.position >>= 1;
          if (0 == data.position) {
            /** @type {number} */
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          /** @type {number} */
          i = i | (a > 0 ? 1 : 0) * ch;
          /** @type {number} */
          ch = ch << 1;
        }
        switch(n = i) {
          case 0:
            /** @type {number} */
            i = 0;
            /** @type {number} */
            o = Math.pow(2, 8);
            /** @type {number} */
            ch = 1;
            for (; ch != o;) {
              /** @type {number} */
              a = data.val & data.position;
              data.position >>= 1;
              if (0 == data.position) {
                /** @type {number} */
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              /** @type {number} */
              i = i | (a > 0 ? 1 : 0) * ch;
              /** @type {number} */
              ch = ch << 1;
            }
            /** @type {string} */
            args[c++] = f(i);
            /** @type {number} */
            n = c - 1;
            el--;
            break;
          case 1:
            /** @type {number} */
            i = 0;
            /** @type {number} */
            o = Math.pow(2, 16);
            /** @type {number} */
            ch = 1;
            for (; ch != o;) {
              /** @type {number} */
              a = data.val & data.position;
              data.position >>= 1;
              if (0 == data.position) {
                /** @type {number} */
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              /** @type {number} */
              i = i | (a > 0 ? 1 : 0) * ch;
              /** @type {number} */
              ch = ch << 1;
            }
            /** @type {string} */
            args[c++] = f(i);
            /** @type {number} */
            n = c - 1;
            el--;
            break;
          case 2:
            return v.join("");
        }
        if (0 == el && (el = Math.pow(2, y), y++), args[n]) {
          m = args[n];
        } else {
          if (n !== c) {
            return null;
          }
          /** @type {string} */
          m = k + k.charAt(0);
        }
        v.push(m);
        args[c++] = k + m.charAt(0);
        k = m;
        if (0 == --el) {
          /** @type {number} */
          el = Math.pow(2, y);
          y++;
        }
      }
    }
  };
  return LZString;
}();
"function" == typeof define && define.amd ? define(function() {
  return LZString;
}) : "undefined" != typeof module && null != module && (module.exports = LZString), function(window) {
  /**
   * @param {number} a
   * @param {number} i
   * @return {?}
   */
  function $(a, i) {
    /** @type {number} */
    var n = (65535 & a) + (65535 & i);
    return (a >> 16) + (i >> 16) + (n >> 16) << 16 | 65535 & n;
  }
  /**
   * @param {number} t
   * @param {number} i
   * @param {number} obj
   * @param {number} v
   * @param {number} type
   * @param {number} id
   * @return {?}
   */
  function fn(t, i, obj, v, type, id) {
    return $(function(x, n) {
      return x << n | x >>> 32 - n;
    }($($(i, t), $(v, id)), type), obj);
  }
  /**
   * @param {number} d
   * @param {number} c
   * @param {number} b
   * @param {number} a
   * @param {undefined} x
   * @param {number} t
   * @param {number} s
   * @return {?}
   */
  function md5_gg(d, c, b, a, x, t, s) {
    return fn(c & b | ~c & a, d, c, x, t, s);
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   * @param {undefined} x
   * @param {number} t
   * @param {number} s
   * @return {?}
   */
  function md5_hh(a, b, c, d, x, t, s) {
    return fn(b & d | c & ~d, a, b, x, t, s);
  }
  /**
   * @param {number} e
   * @param {number} d
   * @param {number} a
   * @param {number} b
   * @param {undefined} x
   * @param {number} t
   * @param {number} i
   * @return {?}
   */
  function p(e, d, a, b, x, t, i) {
    return fn(d ^ a ^ b, e, d, x, t, i);
  }
  /**
   * @param {number} n
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {undefined} callback
   * @param {number} config
   * @param {number} source
   * @return {?}
   */
  function r(n, a, b, c, callback, config, source) {
    return fn(b ^ (a | ~c), n, a, callback, config, source);
  }
  /**
   * @param {!Object} x
   * @param {number} len
   * @return {?}
   */
  function success(x, len) {
    x[len >> 5] |= 128 << len % 32;
    /** @type {number} */
    x[14 + (len + 64 >>> 9 << 4)] = len;
    var i;
    var button;
    var g;
    var day;
    var w;
    /** @type {number} */
    var b = 1732584193;
    /** @type {number} */
    var c = -271733879;
    /** @type {number} */
    var d = -1732584194;
    /** @type {number} */
    var a = 271733878;
    /** @type {number} */
    i = 0;
    for (; i < x.length; i = i + 16) {
      button = b;
      g = c;
      day = d;
      w = a;
      b = md5_gg(b, c, d, a, x[i], 7, -680876936);
      a = md5_gg(a, b, c, d, x[i + 1], 12, -389564586);
      d = md5_gg(d, a, b, c, x[i + 2], 17, 606105819);
      c = md5_gg(c, d, a, b, x[i + 3], 22, -1044525330);
      b = md5_gg(b, c, d, a, x[i + 4], 7, -176418897);
      a = md5_gg(a, b, c, d, x[i + 5], 12, 1200080426);
      d = md5_gg(d, a, b, c, x[i + 6], 17, -1473231341);
      c = md5_gg(c, d, a, b, x[i + 7], 22, -45705983);
      b = md5_gg(b, c, d, a, x[i + 8], 7, 1770035416);
      a = md5_gg(a, b, c, d, x[i + 9], 12, -1958414417);
      d = md5_gg(d, a, b, c, x[i + 10], 17, -42063);
      c = md5_gg(c, d, a, b, x[i + 11], 22, -1990404162);
      b = md5_gg(b, c, d, a, x[i + 12], 7, 1804603682);
      a = md5_gg(a, b, c, d, x[i + 13], 12, -40341101);
      d = md5_gg(d, a, b, c, x[i + 14], 17, -1502002290);
      b = md5_hh(b, c = md5_gg(c, d, a, b, x[i + 15], 22, 1236535329), d, a, x[i + 1], 5, -165796510);
      a = md5_hh(a, b, c, d, x[i + 6], 9, -1069501632);
      d = md5_hh(d, a, b, c, x[i + 11], 14, 643717713);
      c = md5_hh(c, d, a, b, x[i], 20, -373897302);
      b = md5_hh(b, c, d, a, x[i + 5], 5, -701558691);
      a = md5_hh(a, b, c, d, x[i + 10], 9, 38016083);
      d = md5_hh(d, a, b, c, x[i + 15], 14, -660478335);
      c = md5_hh(c, d, a, b, x[i + 4], 20, -405537848);
      b = md5_hh(b, c, d, a, x[i + 9], 5, 568446438);
      a = md5_hh(a, b, c, d, x[i + 14], 9, -1019803690);
      d = md5_hh(d, a, b, c, x[i + 3], 14, -187363961);
      c = md5_hh(c, d, a, b, x[i + 8], 20, 1163531501);
      b = md5_hh(b, c, d, a, x[i + 13], 5, -1444681467);
      a = md5_hh(a, b, c, d, x[i + 2], 9, -51403784);
      d = md5_hh(d, a, b, c, x[i + 7], 14, 1735328473);
      b = p(b, c = md5_hh(c, d, a, b, x[i + 12], 20, -1926607734), d, a, x[i + 5], 4, -378558);
      a = p(a, b, c, d, x[i + 8], 11, -2022574463);
      d = p(d, a, b, c, x[i + 11], 16, 1839030562);
      c = p(c, d, a, b, x[i + 14], 23, -35309556);
      b = p(b, c, d, a, x[i + 1], 4, -1530992060);
      a = p(a, b, c, d, x[i + 4], 11, 1272893353);
      d = p(d, a, b, c, x[i + 7], 16, -155497632);
      c = p(c, d, a, b, x[i + 10], 23, -1094730640);
      b = p(b, c, d, a, x[i + 13], 4, 681279174);
      a = p(a, b, c, d, x[i], 11, -358537222);
      d = p(d, a, b, c, x[i + 3], 16, -722521979);
      c = p(c, d, a, b, x[i + 6], 23, 76029189);
      b = p(b, c, d, a, x[i + 9], 4, -640364487);
      a = p(a, b, c, d, x[i + 12], 11, -421815835);
      d = p(d, a, b, c, x[i + 15], 16, 530742520);
      b = r(b, c = p(c, d, a, b, x[i + 2], 23, -995338651), d, a, x[i], 6, -198630844);
      a = r(a, b, c, d, x[i + 7], 10, 1126891415);
      d = r(d, a, b, c, x[i + 14], 15, -1416354905);
      c = r(c, d, a, b, x[i + 5], 21, -57434055);
      b = r(b, c, d, a, x[i + 12], 6, 1700485571);
      a = r(a, b, c, d, x[i + 3], 10, -1894986606);
      d = r(d, a, b, c, x[i + 10], 15, -1051523);
      c = r(c, d, a, b, x[i + 1], 21, -2054922799);
      b = r(b, c, d, a, x[i + 8], 6, 1873313359);
      a = r(a, b, c, d, x[i + 15], 10, -30611744);
      d = r(d, a, b, c, x[i + 6], 15, -1560198380);
      c = r(c, d, a, b, x[i + 13], 21, 1309151649);
      b = r(b, c, d, a, x[i + 4], 6, -145523070);
      a = r(a, b, c, d, x[i + 11], 10, -1120210379);
      d = r(d, a, b, c, x[i + 2], 15, 718787259);
      c = r(c, d, a, b, x[i + 9], 21, -343485551);
      b = $(b, button);
      c = $(c, g);
      d = $(d, day);
      a = $(a, w);
    }
    return [b, c, d, a];
  }
  /**
   * @param {!Object} input
   * @return {?}
   */
  function next(input) {
    var i;
    /** @type {string} */
    var token = "";
    /** @type {number} */
    var inputsSize = 32 * input.length;
    /** @type {number} */
    i = 0;
    for (; i < inputsSize; i = i + 8) {
      /** @type {string} */
      token = token + String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
    }
    return token;
  }
  /**
   * @param {string} e
   * @return {?}
   */
  function f(e) {
    var a;
    /** @type {!Array} */
    var b = [];
    b[(e.length >> 2) - 1] = void 0;
    /** @type {number} */
    a = 0;
    for (; a < b.length; a = a + 1) {
      /** @type {number} */
      b[a] = 0;
    }
    /** @type {number} */
    var Del = 8 * e.length;
    /** @type {number} */
    a = 0;
    for (; a < Del; a = a + 8) {
      b[a >> 5] |= (255 & e.charCodeAt(a / 8)) << a % 32;
    }
    return b;
  }
  /**
   * @param {string} text
   * @return {?}
   */
  function expect(text) {
    var a;
    var i;
    /** @type {string} */
    var s = "0123456789abcdef";
    /** @type {string} */
    var chain = "";
    /** @type {number} */
    i = 0;
    for (; i < text.length; i = i + 1) {
      a = text.charCodeAt(i);
      /** @type {string} */
      chain = chain + (s.charAt(a >>> 4 & 15) + s.charAt(15 & a));
    }
    return chain;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function decode(value) {
    return unescape(encodeURIComponent(value));
  }
  /**
   * @param {?} name
   * @return {?}
   */
  function read(name) {
    return function(value) {
      return next(success(f(value), 8 * value.length));
    }(decode(name));
  }
  /**
   * @param {?} name
   * @param {?} value
   * @return {?}
   */
  function update(name, value) {
    return function(e, t) {
      var i;
      var ret;
      var r = f(e);
      /** @type {!Array} */
      var args = [];
      /** @type {!Array} */
      var files = [];
      args[15] = files[15] = void 0;
      if (r.length > 16) {
        r = success(r, 8 * e.length);
      }
      /** @type {number} */
      i = 0;
      for (; i < 16; i = i + 1) {
        /** @type {number} */
        args[i] = 909522486 ^ r[i];
        /** @type {number} */
        files[i] = 1549556828 ^ r[i];
      }
      return ret = success(args.concat(f(t)), 512 + 8 * t.length), next(success(files.concat(ret), 640));
    }(decode(name), decode(value));
  }
  /**
   * @param {?} key
   * @param {?} value
   * @param {?} array
   * @return {?}
   */
  function exports(key, value, array) {
    return value ? array ? update(value, key) : function(year, p) {
      return expect(update(year, p));
    }(value, key) : array ? read(key) : function(chain) {
      return expect(read(chain));
    }(key);
  }
  if ("function" == typeof define && define.amd) {
    define(function() {
      return exports;
    });
  } else {
    if ("object" == typeof module && module.exports) {
      /** @type {function(?, ?, ?): ?} */
      module.exports = exports;
    } else {
      /** @type {function(?, ?, ?): ?} */
      window.md5 = exports;
    }
  }
}(this);
var settingsTabs = {
  tabsClass : "setTab",
  menuId : "tabsMenu",
  hideAll : function() {
    /** @type {!NodeList<Element>} */
    var submitButtons = document.getElementsByClassName(this.tabsClass);
    /** @type {number} */
    var k = 0;
    for (; k < submitButtons.length; k++) {
      /** @type {string} */
      submitButtons[k].style.display = "none";
    }
    /** @type {number} */
    k = 0;
    for (; k < this.navs.length; k++) {
      /** @type {string} */
      this.navs[k].className = "";
    }
  },
  open : function(config) {
    this.hideAll();
    /** @type {string} */
    config.className = "active";
    var e = config.dataset.target;
    /** @type {string} */
    document.getElementById(e).style.display = "block";
  },
  init : function() {
    /** @type {(Element|null)} */
    var embedElement = document.getElementById(this.menuId);
    /** @type {!NodeList<Element>} */
    this.navs = embedElement.getElementsByTagName("a");
    this.hideAll();
    /** @type {number} */
    var i = 0;
    for (; i < this.navs.length; i++) {
      if (0 == i) {
        this.open(this.navs[i]);
      }
      /**
       * @return {undefined}
       */
      this.navs[i].onclick = function() {
        settingsTabs.open(this);
      };
    }
  }
};
!function(window, e) {
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = e();
  } else {
    if ("function" == typeof define && define.amd) {
      define(e);
    } else {
      window.Stats = e();
    }
  }
}(this, function() {
  /**
   * @return {?}
   */
  var init = function() {
    /**
     * @param {!HTMLElement} p
     * @return {?}
     */
    function addPanel(p) {
      return container.appendChild(p.dom), p;
    }
    /**
     * @param {number} id
     * @return {undefined}
     */
    function showPanel(id) {
      /** @type {number} */
      var i = 0;
      for (; i < container.children.length; i++) {
        /** @type {string} */
        container.children[i].style.display = i === id ? "block" : "none";
      }
      /** @type {number} */
      p = id;
    }
    /** @type {number} */
    var p = 0;
    /** @type {!Element} */
    var container = document.createElement("div");
    /** @type {string} */
    container.style.cssText = "cursor:pointer;opacity:0.9;width:110px";
    container.addEventListener("click", function(event) {
      event.preventDefault();
      showPanel(++p % container.children.length);
    }, false);
    /** @type {number} */
    var beginTime = (performance || Date).now();
    var prevTime = beginTime;
    /** @type {number} */
    var value = 0;
    var memPanel = addPanel(new init.Panel("FPS", "#0ff", "#002"));
    var msPanel = addPanel(new init.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) {
      var fpsPanel = addPanel(new init.Panel("MB", "#f08", "#201"));
    }
    return showPanel(0), {
      REVISION : 16,
      dom : container,
      addPanel : addPanel,
      showPanel : showPanel,
      begin : function() {
        /** @type {number} */
        beginTime = (performance || Date).now();
      },
      end : function() {
        value++;
        /** @type {number} */
        var time = (performance || Date).now();
        if (msPanel.update(time - beginTime, 200), time > prevTime + 1E3 && (memPanel.update(1E3 * value / (time - prevTime), 100), prevTime = time, value = 0, fpsPanel)) {
          /** @type {(MemoryInfo|null)} */
          var m = performance.memory;
          fpsPanel.update(m.usedJSHeapSize / 1048576, m.jsHeapSizeLimit / 1048576);
        }
        return time;
      },
      update : function() {
        beginTime = this.end();
      },
      domElement : container,
      setMode : showPanel
    };
  };
  return init.Panel = function(name, id, fg) {
    /** @type {number} */
    var i = 1 / 0;
    /** @type {number} */
    var m = 0;
    /** @type {function(?): number} */
    var round = Math.round;
    /** @type {number} */
    var dx = round(window.devicePixelRatio || 1);
    /** @type {number} */
    var $limitX = 80 * dx;
    /** @type {number} */
    var $limitY = 48 * dx;
    /** @type {number} */
    var x2 = 3 * dx;
    /** @type {number} */
    var labelsY = 2 * dx;
    /** @type {number} */
    var x = 3 * dx;
    /** @type {number} */
    var dy = 15 * dx;
    /** @type {number} */
    var width = 74 * dx;
    /** @type {number} */
    var height = 30 * dx;
    /** @type {!Element} */
    var canvas = document.createElement("canvas");
    /** @type {number} */
    canvas.width = $limitX;
    /** @type {number} */
    canvas.height = $limitY;
    /** @type {string} */
    canvas.style.cssText = "width:80px;height:48px";
    var ctx = canvas.getContext("2d");
    return ctx.font = "bold " + 9 * dx + "px Helvetica,Arial,sans-serif", ctx.textBaseline = "top", ctx.fillStyle = fg, ctx.fillRect(0, 0, $limitX, $limitY), ctx.fillStyle = id, ctx.fillText(name, x2, labelsY), ctx.fillRect(x, dy, width, height), ctx.fillStyle = fg, ctx.globalAlpha = .9, ctx.fillRect(x, dy, width, height), {
      dom : canvas,
      max : function() {
        return m;
      },
      update : function(n, incr) {
        /** @type {number} */
        i = Math.min(i, n);
        /** @type {number} */
        m = Math.max(m, n);
        /** @type {string} */
        ctx.fillStyle = fg;
        /** @type {number} */
        ctx.globalAlpha = 1;
        ctx.fillRect(0, 0, $limitX, dy);
        /** @type {string} */
        ctx.fillStyle = id;
        ctx.fillText(round(n) + " " + name + " (" + round(i) + "-" + round(m) + ")", x2, labelsY);
        ctx.drawImage(canvas, x + dx, dy, width - dx, height, x, dy, width - dx, height);
        ctx.fillRect(x + width - dx, dy, dx, height);
        /** @type {string} */
        ctx.fillStyle = fg;
        /** @type {number} */
        ctx.globalAlpha = .9;
        ctx.fillRect(x + width - dx, dy, dx, round((1 - n / incr) * height));
      }
    };
  }, init;
}), function(window, context, n) {
  /**
   * @param {?} object
   * @return {?}
   */
  function isArray(object) {
    return void 0 !== object;
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function isObject(val) {
    return "object" == typeof val;
  }
  /**
   * @param {?} apps
   * @return {?}
   */
  function cb(apps) {
    return Object.keys(apps).length;
  }
  /**
   * @param {number} c
   * @param {number} a
   * @param {number} b
   * @return {?}
   */
  function max(c, a, b) {
    return a > c ? a : c > b ? b : c;
  }
  /**
   * @param {?} value
   * @param {number} radix
   * @return {?}
   */
  function parser(value, radix) {
    return parseInt(value, radix || 10);
  }
  /**
   * @param {number} n
   * @return {?}
   */
  function toInt(n) {
    return Math.round(n);
  }
  /**
   * @param {!Array} var_args
   * @return {?}
   */
  function div(var_args) {
    var start;
    var p;
    var n;
    var pad;
    var x0;
    var b;
    var a;
    var i;
    /** @type {number} */
    var caveWidth = +var_args[0];
    /** @type {number} */
    var kx = +var_args[1];
    /** @type {number} */
    var j = +var_args[2];
    switch(b = j * (1 - kx), a = (a = j * (1 - (x0 = 6 * caveWidth - (pad = Math.floor(6 * caveWidth))) * kx)) || 0, i = (i = j * (1 - (1 - x0) * kx)) || 0, (pad = pad || 0) % 6) {
      case 0:
        /** @type {number} */
        start = j;
        /** @type {number} */
        p = i;
        /** @type {number} */
        n = b;
        break;
      case 1:
        /** @type {number} */
        start = a;
        /** @type {number} */
        p = j;
        /** @type {number} */
        n = b;
        break;
      case 2:
        /** @type {number} */
        start = b;
        /** @type {number} */
        p = j;
        /** @type {number} */
        n = i;
        break;
      case 3:
        /** @type {number} */
        start = b;
        /** @type {number} */
        p = a;
        /** @type {number} */
        n = j;
        break;
      case 4:
        /** @type {number} */
        start = i;
        /** @type {number} */
        p = b;
        /** @type {number} */
        n = j;
        break;
      case 5:
        /** @type {number} */
        start = j;
        /** @type {number} */
        p = b;
        /** @type {number} */
        n = a;
    }
    return [toInt(255 * start), toInt(255 * p), toInt(255 * n)];
  }
  /**
   * @param {!Array} t
   * @return {?}
   */
  function copy(t) {
    return $(div(t));
  }
  /**
   * @param {!Array} producer
   * @return {?}
   */
  function fn(producer) {
    var radical;
    /** @type {number} */
    var i = +producer[0];
    /** @type {number} */
    var x = +producer[1];
    /** @type {number} */
    var y = +producer[2];
    /** @type {number} */
    var d = Math.max(i, x, y);
    /** @type {number} */
    var o = Math.min(i, x, y);
    /** @type {number} */
    var n = d - o;
    /** @type {number} */
    var u = 0 === d ? 0 : n / d;
    /** @type {number} */
    var h = d / 255;
    switch(d) {
      case o:
        /** @type {number} */
        radical = 0;
        break;
      case i:
        /** @type {number} */
        radical = x - y + n * (y > x ? 6 : 0);
        /** @type {number} */
        radical = radical / (6 * n);
        break;
      case x:
        /** @type {number} */
        radical = y - i + 2 * n;
        /** @type {number} */
        radical = radical / (6 * n);
        break;
      case y:
        /** @type {number} */
        radical = i - x + 4 * n;
        /** @type {number} */
        radical = radical / (6 * n);
    }
    return [radical, u, h];
  }
  /**
   * @param {!Array} fnMatch0
   * @return {?}
   */
  function $(fnMatch0) {
    /** @type {number} */
    var n = +fnMatch0[2] | +fnMatch0[1] << 8 | +fnMatch0[0] << 16;
    return (n = "000000" + n.toString(16)).slice(-6);
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function template(data) {
    return fn(format(data));
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function format(str) {
    return 3 === str.length && (str = str.replace(/./g, "$&$&")), [parser(str[0] + str[1], 16), parser(str[2] + str[3], 16), parser(str[4] + str[5], 16)];
  }
  /**
   * @param {!Array} name
   * @return {?}
   */
  function makeButton(name) {
    return [+name[0] / 360, +name[1] / 100, +name[2] / 100];
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function expect(value) {
    return [toInt(360 * +value[0]), toInt(100 * +value[1]), toInt(100 * +value[2])];
  }
  /**
   * @param {!Object} f
   * @return {?}
   */
  function start(f) {
    if (isObject(f)) {
      return f;
    }
    /** @type {(Array<string>|null)} */
    var data = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(f);
    /** @type {(Array<string>|null)} */
    var dataInHeader = /\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(f);
    return "#" === f[0] && f.match(/^#([\da-f]{3}|[\da-f]{6})$/i) ? template(f.slice(1)) : dataInHeader ? makeButton([+dataInHeader[1], +dataInHeader[2], +dataInHeader[3]]) : data ? fn([+data[1], +data[2], +data[3]]) : [0, 1, 1];
  }
  /** @type {string} */
  var p = "__instance__";
  /** @type {string} */
  var i = "firstChild";
  /** @type {function((!Function|null|string), number=, ...*): number} */
  var key = setTimeout;
  !function(params) {
    /** @type {string} */
    params.version = "1.4.1";
    params[p] = {};
    /**
     * @param {!Function} self
     * @param {number} reverse
     * @return {?}
     */
    params.each = function(self, reverse) {
      return key(function() {
        var i;
        var routes = params[p];
        for (i in routes) {
          self.call(routes[i], i, routes);
        }
      }, 0 === reverse ? 0 : reverse || 1), params;
    };
    /** @type {function(!Object): ?} */
    params.parse = start;
    /** @type {function(!Array): ?} */
    params._HSV2RGB = div;
    /** @type {function(!Array): ?} */
    params._HSV2HEX = copy;
    /** @type {function(!Array): ?} */
    params._RGB2HSV = fn;
    /** @type {function(string): ?} */
    params._HEX2HSV = template;
    /**
     * @param {string} _hex
     * @return {?}
     */
    params._HEX2RGB = function(_hex) {
      return function(canCreateDiscussions) {
        return [+canCreateDiscussions[0] / 255, +canCreateDiscussions[1] / 255, +canCreateDiscussions[2] / 255];
      }(format(_hex));
    };
    /**
     * @param {!Array} TL
     * @return {?}
     */
    params.HSV2RGB = function(TL) {
      return div(makeButton(TL));
    };
    /**
     * @param {!Array} name
     * @return {?}
     */
    params.HSV2HEX = function(name) {
      return copy(makeButton(name));
    };
    /**
     * @param {!Array} b
     * @return {?}
     */
    params.RGB2HSV = function(b) {
      return expect(fn(b));
    };
    /** @type {function(!Array): ?} */
    params.RGB2HEX = $;
    /**
     * @param {string} data
     * @return {?}
     */
    params.HEX2HSV = function(data) {
      return expect(template(data));
    };
    /** @type {function(string): ?} */
    params.HEX2RGB = format;
  }(window.CP = function(item, value, autoRemove) {
    /**
     * @param {string} t
     * @param {!Object} e
     * @param {!Function} item
     * @return {undefined}
     */
    function callback(t, e, item) {
      /** @type {number} */
      var i = 0;
      var countRep = (t = t.split(/\s+/)).length;
      for (; countRep > i; ++i) {
        e.addEventListener(t[i], item, false);
      }
    }
    /**
     * @param {string} t
     * @param {!Object} e
     * @param {!Function} item
     * @return {undefined}
     */
    function next(t, e, item) {
      /** @type {number} */
      var i = 0;
      var countRep = (t = t.split(/\s+/)).length;
      for (; countRep > i; ++i) {
        e.removeEventListener(t[i], item);
      }
    }
    /**
     * @param {!Object} context
     * @param {!Object} params
     * @return {?}
     */
    function parse(context, params) {
      /** @type {string} */
      var type = "touches";
      /** @type {string} */
      var x = "clientX";
      /** @type {string} */
      var id = "clientY";
      var l = params[type] ? params[type][0][x] : params[x];
      var y = params[type] ? params[type][0][id] : params[id];
      var d = f(context);
      return {
        x : l - d.l,
        y : y - d.t
      };
    }
    /**
     * @param {!Object} a
     * @return {?}
     */
    function f(a) {
      var x;
      var y;
      var rect;
      return a === window ? (x = window.pageXOffset || html.scrollLeft, y = window.pageYOffset || html.scrollTop) : (x = (rect = a.getBoundingClientRect()).left, y = rect.top), {
        l : x,
        t : y
      };
    }
    /**
     * @param {!Object} a
     * @param {!Object} b
     * @return {?}
     */
    function _(a, b) {
      for (; (a = a.parentElement) && a !== b;) {
      }
      return a;
    }
    /**
     * @param {!Event} type
     * @return {undefined}
     */
    function toArray(type) {
      if (type) {
        type.preventDefault();
      }
    }
    /**
     * @param {!Object} el
     * @return {?}
     */
    function check(el) {
      return el === window ? {
        w : window.innerWidth,
        h : window.innerHeight
      } : {
        w : el.offsetWidth,
        h : el.offsetHeight
      };
    }
    /**
     * @param {?} data
     * @return {?}
     */
    function extend(data) {
      return tRecord || !!isArray(data) && data;
    }
    /**
     * @param {boolean} t
     * @return {undefined}
     */
    function asLazy(t) {
      /** @type {boolean} */
      tRecord = t;
    }
    /**
     * @param {string} id
     * @param {!Array} e
     * @param {?} prop
     * @return {?}
     */
    function $(id, e, prop) {
      if (!isArray(data[id])) {
        return self;
      }
      if (isArray(prop)) {
        if (isArray(data[id][prop])) {
          data[id][prop].apply(self, e);
        }
      } else {
        var name;
        for (name in data[id]) {
          data[id][name].apply(self, e);
        }
      }
      return self;
    }
    /**
     * @param {!Object} key
     * @param {!Array} e
     * @return {undefined}
     */
    function wrap(key, e) {
      if (!(key && "h" !== key)) {
        $("change:h", e);
      }
      if (!(key && "sv" !== key)) {
        $("change:sv", e);
      }
      $("change", e);
    }
    /**
     * @return {?}
     */
    function locate() {
      return node.parentNode;
    }
    /**
     * @param {number} batchSize
     * @param {boolean} callback
     * @return {undefined}
     */
    function init(batchSize, callback) {
      /**
       * @param {!Event} c
       * @return {undefined}
       */
      function success(c) {
        var t = c.target;
        if (t === item || _(t, item) === item) {
          init();
          $("enter");
        } else {
          self.exit();
        }
      }
      /**
       * @param {!Event} b
       * @return {undefined}
       */
      function log(b) {
        var drilldownLevelLabels = (div(result), div([result[0], 1, 1]));
        /** @type {string} */
        event.style.backgroundColor = "rgb(" + drilldownLevelLabels.join(",") + ")";
        asLazy(result);
        toArray(b);
      }
      /**
       * @param {!Event} name
       * @return {undefined}
       */
      function render(name) {
        if (C) {
          (function(a) {
            var x = max(parse(c, a).y, 0, width);
            /** @type {number} */
            result[0] = (width - x) / width;
            /** @type {string} */
            b.style.top = x - size / 2 + "px";
            log(a);
          })(name);
          /** @type {!Array} */
          nberr = [copy(result)];
          if (!z) {
            $("drag:h", nberr);
            $("drag", nberr);
            wrap("h", nberr);
          }
        }
        if (J) {
          (function(filename) {
            var a = parse(event, filename);
            var x = max(a.x, 0, d);
            var h = max(a.y, 0, w);
            /** @type {number} */
            result[1] = 1 - (d - x) / d;
            /** @type {number} */
            result[2] = (w - h) / w;
            /** @type {string} */
            scope.style.right = d - x - min / 2 + "px";
            /** @type {string} */
            scope.style.top = h - t / 2 + "px";
            log(filename);
          })(name);
          /** @type {!Array} */
          nberr = [copy(result)];
          if (!W) {
            $("drag:sv", nberr);
            $("drag", nberr);
            wrap("sv", nberr);
          }
        }
        /** @type {number} */
        z = 0;
        /** @type {number} */
        W = 0;
      }
      /**
       * @param {!Event} t
       * @return {undefined}
       */
      function create(t) {
        var name = t.target;
        /** @type {string} */
        var c = C ? "h" : "sv";
        /** @type {!Array} */
        var map = [copy(result), self];
        /** @type {boolean} */
        var modifier = name === item || _(name, item) === item;
        /** @type {boolean} */
        var g = name === node || _(name, node) === node;
        if (modifier || g) {
          if (g) {
            $("stop:" + c, map);
            $("stop", map);
            wrap(c, map);
          }
        } else {
          if (locate() && false !== value) {
            self.exit();
            wrap(0, map);
          }
        }
        /** @type {number} */
        C = 0;
        /** @type {number} */
        J = 0;
      }
      /**
       * @param {!Event} desc
       * @return {undefined}
       */
      function test(desc) {
        /** @type {number} */
        z = 1;
        /** @type {number} */
        C = 1;
        render(desc);
        toArray(desc);
        $("start:h", nberr);
        $("start", nberr);
        wrap("h", nberr);
      }
      /**
       * @param {!Event} message
       * @return {undefined}
       */
      function info(message) {
        /** @type {number} */
        W = 1;
        /** @type {number} */
        J = 1;
        render(message);
        toArray(message);
        $("start:sv", nberr);
        $("start", nberr);
        wrap("sv", nberr);
      }
      if (!batchSize) {
        (autoRemove || callback || doc).appendChild(node);
        /** @type {boolean} */
        self.visible = true;
      }
      RectBegin = check(node).w;
      comboBottom = check(node).h;
      var obj = check(event);
      var m = check(scope);
      var width = check(c).h;
      var d = obj.w;
      var w = obj.h;
      var size = check(b).h;
      var min = m.w;
      var t = m.h;
      if (batchSize) {
        /** @type {string} */
        node.style.left = node.style.top = "-9999px";
        if (false !== value) {
          callback(value, item, success);
        }
        /**
         * @return {?}
         */
        self.create = function() {
          return init(1), $("create"), self;
        };
        /**
         * @return {?}
         */
        self.destroy = function() {
          return false !== value && next(value, item, success), self.exit(), asLazy(false), $("destroy"), self;
        };
      } else {
        code();
      }
      /**
       * @return {undefined}
       */
      elementLibrary = function() {
        result = extend(result);
        log();
        /** @type {string} */
        b.style.top = width - size / 2 - width * +result[0] + "px";
        /** @type {string} */
        scope.style.right = d - min / 2 - d * +result[1] + "px";
        /** @type {string} */
        scope.style.top = w - t / 2 - w * +result[2] + "px";
      };
      /**
       * @return {?}
       */
      self.exit = function() {
        return locate() && (locate().removeChild(node), self.visible = false), next(k, c, test), next(k, event, info), next(nameArgs, context, render), next(mtopic, context, create), next(code_tree, window, code), $("exit"), self;
      };
      elementLibrary();
      if (!batchSize) {
        callback(k, c, test);
        callback(k, event, info);
        callback(nameArgs, context, render);
        callback(mtopic, context, create);
        callback(code_tree, window, code);
      }
    }
    /**
     * @return {?}
     */
    function code() {
      return self.fit();
    }
    /** @type {!HTMLBodyElement} */
    var doc = context.body;
    /** @type {!Element} */
    var html = context.documentElement;
    var self = this;
    /** @type {function(!Object, boolean, boolean): ?} */
    var json = window.CP;
    /** @type {boolean} */
    var tRecord = false;
    var data = {};
    /** @type {!Element} */
    var node = context.createElement("div");
    /** @type {string} */
    var k = "touchstart mousedown";
    /** @type {string} */
    var nameArgs = "touchmove mousemove";
    /** @type {string} */
    var mtopic = "touchend mouseup";
    /** @type {string} */
    var code_tree = "orientationchange resize";
    if (!(self instanceof json)) {
      return new json(item, value);
    }
    json[p][item.id || item.name || cb(json[p])] = self;
    if (!(isArray(value) && true !== value)) {
      /** @type {string} */
      value = k;
    }
    asLazy(json.parse(item.getAttribute("data-color") || item.value || [0, 1, 1]));
    /** @type {string} */
    node.className = "color-picker";
    /** @type {string} */
    node.innerHTML = '<div class="color-picker-container"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';
    var elementLibrary;
    var values = node[i].children;
    var result = extend([0, 1, 1]);
    var c = values[0];
    var event = values[1];
    var b = c[i];
    var scope = event[i];
    /** @type {number} */
    var z = 0;
    /** @type {number} */
    var W = 0;
    /** @type {number} */
    var C = 0;
    /** @type {number} */
    var J = 0;
    /** @type {number} */
    var a = 0;
    /** @type {number} */
    var y = 0;
    /** @type {number} */
    var RectBegin = 0;
    /** @type {number} */
    var comboBottom = 0;
    /** @type {!Array} */
    var nberr = [copy(result)];
    return init(1), key(function() {
      /** @type {!Array} */
      var t = [copy(result)];
      $("create", t);
      wrap(0, t);
    }, 0), self.fit = function(x) {
      var box = check(window);
      var size = check(html);
      /** @type {number} */
      var RectEnd = box.w - size.w;
      /** @type {number} */
      var outerHeight = box.h - html.clientHeight;
      var b = f(window);
      var p = f(item);
      if (a = p.l + b.l, y = p.t + b.t + check(item).h, isObject(x)) {
        if (isArray(x[0])) {
          a = x[0];
        }
        if (isArray(x[1])) {
          y = x[1];
        }
      } else {
        var x = b.l;
        var t = b.t;
        /** @type {number} */
        var width = b.l + box.w - RectBegin - RectEnd;
        /** @type {number} */
        var a2 = b.t + box.h - comboBottom - outerHeight;
        /** @type {number} */
        a = max(a, x, width) >> 0;
        /** @type {number} */
        y = max(y, t, a2) >> 0;
      }
      return node.style.left = a + "px", node.style.top = y + "px", $("fit"), self;
    }, self.set = function(value) {
      return isArray(value) ? (function(data) {
        return "string" == typeof data;
      }(value) && (value = json.parse(value)), asLazy(value), elementLibrary(), self) : extend();
    }, self.get = function(fn) {
      return extend(fn);
    }, self.source = item, self.self = node, self.visible = false, self.on = function(name, id, value) {
      return isArray(name) ? isArray(id) ? (isArray(data[name]) || (data[name] = {}), isArray(value) || (value = cb(data[name])), data[name][value] = id, self) : data[name] : data;
    }, self.off = function(type, obj) {
      return isArray(type) ? isArray(obj) ? (delete data[type][obj], self) : (data[type] = {}, self) : (data = {}, self);
    }, self.fire = $, self.hooks = data, self.enter = function(cb) {
      return init(0, cb), $("enter"), self;
    }, self;
  });
}(window, document), this.createjs = this.createjs || {}, function() {
  var s = createjs.SoundJS = createjs.SoundJS || {};
  /** @type {string} */
  s.version = "0.6.2";
  /** @type {string} */
  s.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT";
}(), this.createjs = this.createjs || {}, createjs.extend = function(child, parent) {
  /**
   * @return {undefined}
   */
  function ctor() {
    /** @type {!Object} */
    this.constructor = child;
  }
  return ctor.prototype = parent.prototype, child.prototype = new ctor;
}, this.createjs = this.createjs || {}, createjs.promote = function(subclass, prefix) {
  var subP = subclass.prototype;
  var supP = Object.getPrototypeOf && Object.getPrototypeOf(subP) || subP.__proto__;
  if (supP) {
    var n;
    for (n in subP[(prefix = prefix + "_") + "constructor"] = supP.constructor, supP) {
      if (subP.hasOwnProperty(n) && "function" == typeof supP[n]) {
        subP[prefix + n] = supP[n];
      }
    }
  }
  return subclass;
}, this.createjs = this.createjs || {}, createjs.indexOf = function(name, o) {
  /** @type {number} */
  var i = 0;
  var length = name.length;
  for (; length > i; i++) {
    if (o === name[i]) {
      return i;
    }
  }
  return -1;
}, this.createjs = this.createjs || {}, function() {
  /**
   * @param {!Function} fn
   * @param {!Function} ctx
   * @return {?}
   */
  createjs.proxy = function(fn, ctx) {
    /** @type {!Array<?>} */
    var args = Array.prototype.slice.call(arguments, 2);
    return function() {
      return fn.apply(ctx, Array.prototype.slice.call(arguments, 0).concat(args));
    };
  };
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @return {?}
   */
  function BrowserDetect() {
    throw "BrowserDetect cannot be instantiated";
  }
  /** @type {string} */
  var agent = BrowserDetect.agent = window.navigator.userAgent;
  /** @type {boolean} */
  BrowserDetect.isWindowPhone = agent.indexOf("IEMobile") > -1 || agent.indexOf("Windows Phone") > -1;
  /** @type {boolean} */
  BrowserDetect.isFirefox = agent.indexOf("Firefox") > -1;
  /** @type {boolean} */
  BrowserDetect.isOpera = null != window.opera;
  /** @type {boolean} */
  BrowserDetect.isChrome = agent.indexOf("Chrome") > -1;
  /** @type {boolean} */
  BrowserDetect.isIOS = (agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1) && !BrowserDetect.isWindowPhone;
  /** @type {boolean} */
  BrowserDetect.isAndroid = agent.indexOf("Android") > -1 && !BrowserDetect.isWindowPhone;
  /** @type {boolean} */
  BrowserDetect.isBlackberry = agent.indexOf("Blackberry") > -1;
  /** @type {function(): ?} */
  createjs.BrowserDetect = BrowserDetect;
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @return {undefined}
   */
  function EventDispatcher() {
    /** @type {null} */
    this._listeners = null;
    /** @type {null} */
    this._captureListeners = null;
  }
  var p = EventDispatcher.prototype;
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  EventDispatcher.initialize = function(target) {
    /** @type {function(string, !Function, boolean): ?} */
    target.addEventListener = p.addEventListener;
    /** @type {function(string, !Object, !Object, ?, ?, boolean): ?} */
    target.on = p.on;
    /** @type {function(string, !Function, string): undefined} */
    target.removeEventListener = target.off = p.removeEventListener;
    /** @type {function(?): undefined} */
    target.removeAllEventListeners = p.removeAllEventListeners;
    /** @type {function(string): ?} */
    target.hasEventListener = p.hasEventListener;
    /** @type {function(!Object, !Object, !Object): ?} */
    target.dispatchEvent = p.dispatchEvent;
    /** @type {function(!Object, number): undefined} */
    target._dispatchEvent = p._dispatchEvent;
    /** @type {function(string): ?} */
    target.willTrigger = p.willTrigger;
  };
  /**
   * @param {string} type
   * @param {!Function} obj
   * @param {boolean} fn
   * @return {?}
   */
  p.addEventListener = function(type, obj, fn) {
    var result;
    var data = (result = fn ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {})[type];
    return data && this.removeEventListener(type, obj, fn), (data = result[type]) ? data.push(obj) : result[type] = [obj], obj;
  };
  /**
   * @param {string} name
   * @param {!Object} listener
   * @param {!Object} scope
   * @param {?} evt
   * @param {?} data
   * @param {boolean} callback
   * @return {?}
   */
  p.on = function(name, listener, scope, evt, data, callback) {
    return listener.handleEvent && (scope = scope || listener, listener = listener.handleEvent), scope = scope || this, this.addEventListener(name, function(event) {
      listener.call(scope, event, data);
      if (evt) {
        event.remove();
      }
    }, callback);
  };
  /**
   * @param {string} type
   * @param {!Function} func
   * @param {string} useCapture
   * @return {undefined}
   */
  p.removeEventListener = function(type, func, useCapture) {
    var listeners = useCapture ? this._captureListeners : this._listeners;
    if (listeners) {
      var events = listeners[type];
      if (events) {
        /** @type {number} */
        var i = 0;
        var len = events.length;
        for (; len > i; i++) {
          if (events[i] == func) {
            if (1 == len) {
              delete listeners[type];
            } else {
              events.splice(i, 1);
            }
            break;
          }
        }
      }
    }
  };
  /** @type {function(string, !Function, string): undefined} */
  p.off = p.removeEventListener;
  /**
   * @param {?} type
   * @return {undefined}
   */
  p.removeAllEventListeners = function(type) {
    if (type) {
      if (this._listeners) {
        delete this._listeners[type];
      }
      if (this._captureListeners) {
        delete this._captureListeners[type];
      }
    } else {
      /** @type {null} */
      this._listeners = this._captureListeners = null;
    }
  };
  /**
   * @param {!Object} eventObj
   * @param {!Object} bubbles
   * @param {!Object} cancelable
   * @return {?}
   */
  p.dispatchEvent = function(eventObj, bubbles, cancelable) {
    if ("string" == typeof eventObj) {
      var listeners = this._listeners;
      if (!(bubbles || listeners && listeners[eventObj])) {
        return true;
      }
      eventObj = new createjs.Event(eventObj, bubbles, cancelable);
    } else {
      if (eventObj.target && eventObj.clone) {
        eventObj = eventObj.clone();
      }
    }
    try {
      eventObj.target = this;
    } catch (t) {
    }
    if (eventObj.bubbles && this.parent) {
      var top = this;
      /** @type {!Array} */
      var list = [top];
      for (; top.parent;) {
        list.push(top = top.parent);
      }
      var i;
      /** @type {number} */
      var l = list.length;
      /** @type {number} */
      i = l - 1;
      for (; i >= 0 && !eventObj.propagationStopped; i--) {
        list[i]._dispatchEvent(eventObj, 1 + (0 == i));
      }
      /** @type {number} */
      i = 1;
      for (; l > i && !eventObj.propagationStopped; i++) {
        list[i]._dispatchEvent(eventObj, 3);
      }
    } else {
      this._dispatchEvent(eventObj, 2);
    }
    return !eventObj.defaultPrevented;
  };
  /**
   * @param {string} type
   * @return {?}
   */
  p.hasEventListener = function(type) {
    var listeners = this._listeners;
    var captureListeners = this._captureListeners;
    return !!(listeners && listeners[type] || captureListeners && captureListeners[type]);
  };
  /**
   * @param {string} type
   * @return {?}
   */
  p.willTrigger = function(type) {
    var s = this;
    for (; s;) {
      if (s.hasEventListener(type)) {
        return true;
      }
      s = s.parent;
    }
    return false;
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[EventDispatcher]";
  };
  /**
   * @param {!Object} eventObj
   * @param {number} eventPhase
   * @return {undefined}
   */
  p._dispatchEvent = function(eventObj, eventPhase) {
    var i;
    var listeners = 1 == eventPhase ? this._captureListeners : this._listeners;
    if (eventObj && listeners) {
      var arr = listeners[eventObj.type];
      if (!arr || !(i = arr.length)) {
        return;
      }
      try {
        eventObj.currentTarget = this;
      } catch (t) {
      }
      try {
        /** @type {number} */
        eventObj.eventPhase = eventPhase;
      } catch (t) {
      }
      /** @type {boolean} */
      eventObj.removed = false;
      arr = arr.slice();
      /** @type {number} */
      var l = 0;
      for (; i > l && !eventObj.immediatePropagationStopped; l++) {
        var o = arr[l];
        if (o.handleEvent) {
          o.handleEvent(eventObj);
        } else {
          o(eventObj);
        }
        if (eventObj.removed) {
          this.off(eventObj.type, o, 1 == eventPhase);
          /** @type {boolean} */
          eventObj.removed = false;
        }
      }
    }
  };
  /** @type {function(): undefined} */
  createjs.EventDispatcher = EventDispatcher;
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {string} src
   * @param {?} type
   * @param {?} bubbles
   * @return {undefined}
   */
  function Event(src, type, bubbles) {
    /** @type {string} */
    this.type = src;
    /** @type {null} */
    this.target = null;
    /** @type {null} */
    this.currentTarget = null;
    /** @type {number} */
    this.eventPhase = 0;
    /** @type {boolean} */
    this.bubbles = !!type;
    /** @type {boolean} */
    this.cancelable = !!bubbles;
    /** @type {number} */
    this.timeStamp = (new Date).getTime();
    /** @type {boolean} */
    this.defaultPrevented = false;
    /** @type {boolean} */
    this.propagationStopped = false;
    /** @type {boolean} */
    this.immediatePropagationStopped = false;
    /** @type {boolean} */
    this.removed = false;
  }
  var proto = Event.prototype;
  /**
   * @return {undefined}
   */
  proto.preventDefault = function() {
    this.defaultPrevented = this.cancelable && true;
  };
  /**
   * @return {undefined}
   */
  proto.stopPropagation = function() {
    /** @type {boolean} */
    this.propagationStopped = true;
  };
  /**
   * @return {undefined}
   */
  proto.stopImmediatePropagation = function() {
    /** @type {boolean} */
    this.immediatePropagationStopped = this.propagationStopped = true;
  };
  /**
   * @return {undefined}
   */
  proto.remove = function() {
    /** @type {boolean} */
    this.removed = true;
  };
  /**
   * @return {?}
   */
  proto.clone = function() {
    return new Event(this.type, this.bubbles, this.cancelable);
  };
  /**
   * @param {?} value
   * @return {?}
   */
  proto.set = function(value) {
    var cssName;
    for (cssName in value) {
      this[cssName] = value[cssName];
    }
    return this;
  };
  /**
   * @return {?}
   */
  proto.toString = function() {
    return "[Event (type=" + this.type + ")]";
  };
  /** @type {function(string, ?, ?): undefined} */
  createjs.Event = Event;
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {string} title
   * @param {string} message
   * @param {!Object} data
   * @return {undefined}
   */
  function ErrorEvent(title, message, data) {
    this.Event_constructor("error");
    /** @type {string} */
    this.title = title;
    /** @type {string} */
    this.message = message;
    /** @type {!Object} */
    this.data = data;
  }
  /**
   * @return {?}
   */
  createjs.extend(ErrorEvent, createjs.Event).clone = function() {
    return new createjs.ErrorEvent(this.title, this.message, this.data);
  };
  createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {boolean} loaded
   * @param {number} total
   * @return {undefined}
   */
  function ProgressEvent(loaded, total) {
    this.Event_constructor("progress");
    /** @type {boolean} */
    this.loaded = loaded;
    this.total = null == total ? 1 : total;
    /** @type {number} */
    this.progress = 0 == total ? 0 : this.loaded / this.total;
  }
  /**
   * @return {?}
   */
  createjs.extend(ProgressEvent, createjs.Event).clone = function() {
    return new createjs.ProgressEvent(this.loaded, this.total);
  };
  createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");
}(window), this.createjs = this.createjs || {}, function() {
  /**
   * @return {undefined}
   */
  function init() {
    /** @type {null} */
    this.src = null;
    /** @type {null} */
    this.type = null;
    /** @type {null} */
    this.id = null;
    /** @type {boolean} */
    this.maintainOrder = false;
    /** @type {null} */
    this.callback = null;
    /** @type {null} */
    this.data = null;
    this.method = createjs.LoadItem.GET;
    /** @type {null} */
    this.values = null;
    /** @type {null} */
    this.headers = null;
    /** @type {boolean} */
    this.withCredentials = false;
    /** @type {null} */
    this.mimeType = null;
    /** @type {null} */
    this.crossOrigin = null;
    /** @type {number} */
    this.loadTimeout = Log.LOAD_TIMEOUT_DEFAULT;
  }
  var oldNotPinned = init.prototype = {};
  /** @type {function(): undefined} */
  var Log = init;
  /** @type {number} */
  Log.LOAD_TIMEOUT_DEFAULT = 8E3;
  /**
   * @param {string} obj
   * @return {?}
   */
  Log.create = function(obj) {
    if ("string" == typeof obj) {
      var img = new init;
      return img.src = obj, img;
    }
    if (obj instanceof Log) {
      return obj;
    }
    if (obj instanceof Object && obj.src) {
      return null == obj.loadTimeout && (obj.loadTimeout = Log.LOAD_TIMEOUT_DEFAULT), obj;
    }
    throw new Error("Type not recognized.");
  };
  /**
   * @param {?} value
   * @return {?}
   */
  oldNotPinned.set = function(value) {
    var cssName;
    for (cssName in value) {
      this[cssName] = value[cssName];
    }
    return this;
  };
  /** @type {function(): undefined} */
  createjs.LoadItem = Log;
}(), function() {
  var s = {
    ABSOLUTE_PATT : /^(?:\w+:)?\/{2}/i,
    RELATIVE_PATT : /^[.\/]*?\//i,
    EXTENSION_PATT : /\/?[^\/]+\.(\w{1,5})$/i,
    parseURI : function(result) {
      var info = {
        absolute : false,
        relative : false
      };
      if (null == result) {
        return info;
      }
      var nameTmpArr;
      var length = result.indexOf("?");
      return length > -1 && (result = result.substr(0, length)), s.ABSOLUTE_PATT.test(result) ? info.absolute = true : s.RELATIVE_PATT.test(result) && (info.relative = true), (nameTmpArr = result.match(s.EXTENSION_PATT)) && (info.extension = nameTmpArr[1].toLowerCase()), info;
    },
    formatQueryString : function(data, key) {
      if (null == data) {
        throw new Error("You must specify data.");
      }
      /** @type {!Array} */
      var str = [];
      var k;
      for (k in data) {
        str.push(k + "=" + escape(data[k]));
      }
      return key && (str = str.concat(key)), str.join("&");
    },
    buildPath : function(src, data) {
      if (null == data) {
        return src;
      }
      /** @type {!Array} */
      var query = [];
      var i = src.indexOf("?");
      if (-1 != i) {
        var s = src.slice(i + 1);
        /** @type {!Array<?>} */
        query = query.concat(s.split("&"));
      }
      return -1 != i ? src.slice(0, i) + "?" + this.formatQueryString(data, query) : src + "?" + this.formatQueryString(data, query);
    },
    isCrossDomain : function(item) {
      /** @type {!Element} */
      var target = document.createElement("a");
      target.href = item.src;
      /** @type {!Element} */
      var host = document.createElement("a");
      return host.href = location.href, "" != target.hostname && (target.port != host.port || target.protocol != host.protocol || target.hostname != host.hostname);
    },
    isLocal : function(event) {
      /** @type {!Element} */
      var s = document.createElement("a");
      return s.href = event.src, "" == s.hostname && "file:" == s.protocol;
    },
    isBinary : function(data) {
      switch(data) {
        case createjs.AbstractLoader.IMAGE:
        case createjs.AbstractLoader.BINARY:
          return true;
        default:
          return false;
      }
    },
    isImageTag : function(item) {
      return item instanceof HTMLImageElement;
    },
    isAudioTag : function(src) {
      return !!window.HTMLAudioElement && src instanceof HTMLAudioElement;
    },
    isVideoTag : function(item) {
      return !!window.HTMLVideoElement && item instanceof HTMLVideoElement;
    },
    isText : function(value) {
      switch(value) {
        case createjs.AbstractLoader.TEXT:
        case createjs.AbstractLoader.JSON:
        case createjs.AbstractLoader.MANIFEST:
        case createjs.AbstractLoader.XML:
        case createjs.AbstractLoader.CSS:
        case createjs.AbstractLoader.SVG:
        case createjs.AbstractLoader.JAVASCRIPT:
        case createjs.AbstractLoader.SPRITESHEET:
          return true;
        default:
          return false;
      }
    },
    getTypeByExtension : function(extension) {
      if (null == extension) {
        return createjs.AbstractLoader.TEXT;
      }
      switch(extension.toLowerCase()) {
        case "jpeg":
        case "jpg":
        case "gif":
        case "png":
        case "webp":
        case "bmp":
          return createjs.AbstractLoader.IMAGE;
        case "ogg":
        case "mp3":
        case "webm":
          return createjs.AbstractLoader.SOUND;
        case "mp4":
        case "webm":
        case "ts":
          return createjs.AbstractLoader.VIDEO;
        case "json":
          return createjs.AbstractLoader.JSON;
        case "xml":
          return createjs.AbstractLoader.XML;
        case "css":
          return createjs.AbstractLoader.CSS;
        case "js":
          return createjs.AbstractLoader.JAVASCRIPT;
        case "svg":
          return createjs.AbstractLoader.SVG;
        default:
          return createjs.AbstractLoader.TEXT;
      }
    }
  };
  createjs.RequestUtils = s;
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {!Function} metadata
   * @param {boolean} preferXHR
   * @param {string} type
   * @return {undefined}
   */
  function AbstractLoader(metadata, preferXHR, type) {
    this.EventDispatcher_constructor();
    /** @type {boolean} */
    this.loaded = false;
    /** @type {boolean} */
    this.canceled = false;
    /** @type {number} */
    this.progress = 0;
    /** @type {string} */
    this.type = type;
    /** @type {null} */
    this.resultFormatter = null;
    this._item = metadata ? createjs.LoadItem.create(metadata) : null;
    /** @type {boolean} */
    this._preferXHR = preferXHR;
    /** @type {null} */
    this._result = null;
    /** @type {null} */
    this._rawResult = null;
    /** @type {null} */
    this._loadedItems = null;
    /** @type {null} */
    this._tagSrcAttribute = null;
    /** @type {null} */
    this._tag = null;
  }
  var p = createjs.extend(AbstractLoader, createjs.EventDispatcher);
  /** @type {function(!Function, boolean, string): undefined} */
  var s = AbstractLoader;
  /** @type {string} */
  s.POST = "POST";
  /** @type {string} */
  s.GET = "GET";
  /** @type {string} */
  s.BINARY = "binary";
  /** @type {string} */
  s.CSS = "css";
  /** @type {string} */
  s.IMAGE = "image";
  /** @type {string} */
  s.JAVASCRIPT = "javascript";
  /** @type {string} */
  s.JSON = "json";
  /** @type {string} */
  s.JSONP = "jsonp";
  /** @type {string} */
  s.MANIFEST = "manifest";
  /** @type {string} */
  s.SOUND = "sound";
  /** @type {string} */
  s.VIDEO = "video";
  /** @type {string} */
  s.SPRITESHEET = "spritesheet";
  /** @type {string} */
  s.SVG = "svg";
  /** @type {string} */
  s.TEXT = "text";
  /** @type {string} */
  s.XML = "xml";
  /**
   * @return {?}
   */
  p.getItem = function() {
    return this._item;
  };
  /**
   * @param {!Function} raw
   * @return {?}
   */
  p.getResult = function(raw) {
    return raw ? this._rawResult : this._result;
  };
  /**
   * @return {?}
   */
  p.getTag = function() {
    return this._tag;
  };
  /**
   * @param {!HTMLElement} tag
   * @return {undefined}
   */
  p.setTag = function(tag) {
    /** @type {!HTMLElement} */
    this._tag = tag;
  };
  /**
   * @return {undefined}
   */
  p.load = function() {
    this._createRequest();
    this._request.on("complete", this, this);
    this._request.on("progress", this, this);
    this._request.on("loadStart", this, this);
    this._request.on("abort", this, this);
    this._request.on("timeout", this, this);
    this._request.on("error", this, this);
    var evt = new createjs.Event("initialize");
    evt.loader = this._request;
    this.dispatchEvent(evt);
    this._request.load();
  };
  /**
   * @return {undefined}
   */
  p.cancel = function() {
    /** @type {boolean} */
    this.canceled = true;
    this.destroy();
  };
  /**
   * @return {undefined}
   */
  p.destroy = function() {
    if (this._request) {
      this._request.removeAllEventListeners();
      this._request.destroy();
    }
    /** @type {null} */
    this._request = null;
    /** @type {null} */
    this._item = null;
    /** @type {null} */
    this._rawResult = null;
    /** @type {null} */
    this._result = null;
    /** @type {null} */
    this._loadItems = null;
    this.removeAllEventListeners();
  };
  /**
   * @return {?}
   */
  p.getLoadedItems = function() {
    return this._loadedItems;
  };
  /**
   * @return {undefined}
   */
  p._createRequest = function() {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  };
  /**
   * @return {?}
   */
  p._createTag = function() {
    return null;
  };
  /**
   * @return {undefined}
   */
  p._sendLoadStart = function() {
    if (!this._isCanceled()) {
      this.dispatchEvent("loadstart");
    }
  };
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  p._sendProgress = function(value) {
    if (!this._isCanceled()) {
      /** @type {null} */
      var event = null;
      if ("number" == typeof value) {
        /** @type {!Object} */
        this.progress = value;
        event = new createjs.ProgressEvent(this.progress);
      } else {
        /** @type {!Object} */
        event = value;
        /** @type {number} */
        this.progress = value.loaded / value.total;
        /** @type {number} */
        event.progress = this.progress;
        if (isNaN(this.progress) || 1 / 0 == this.progress) {
          /** @type {number} */
          this.progress = 0;
        }
      }
      if (this.hasEventListener("progress")) {
        this.dispatchEvent(event);
      }
    }
  };
  /**
   * @return {undefined}
   */
  p._sendComplete = function() {
    if (!this._isCanceled()) {
      /** @type {boolean} */
      this.loaded = true;
      var event = new createjs.Event("complete");
      event.rawResult = this._rawResult;
      if (null != this._result) {
        event.result = this._result;
      }
      this.dispatchEvent(event);
    }
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._sendError = function(event) {
    if (!this._isCanceled() && this.hasEventListener("error")) {
      if (null == event) {
        event = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY");
      }
      this.dispatchEvent(event);
    }
  };
  /**
   * @return {?}
   */
  p._isCanceled = function() {
    return !(null != window.createjs && !this.canceled);
  };
  /** @type {null} */
  p.resultFormatter = null;
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p.handleEvent = function(event) {
    switch(event.type) {
      case "complete":
        this._rawResult = event.target._response;
        var result = this.resultFormatter && this.resultFormatter(this);
        if (result instanceof Function) {
          result.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this));
        } else {
          this._result = result || this._rawResult;
          this._sendComplete();
        }
        break;
      case "progress":
        this._sendProgress(event);
        break;
      case "error":
        this._sendError(event);
        break;
      case "loadstart":
        this._sendLoadStart();
        break;
      case "abort":
      case "timeout":
        if (!this._isCanceled()) {
          this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + event.type.toUpperCase() + "_ERROR"));
        }
    }
  };
  /**
   * @param {!Object} result
   * @return {undefined}
   */
  p._resultFormatSuccess = function(result) {
    /** @type {!Object} */
    this._result = result;
    this._sendComplete();
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._resultFormatFailed = function(event) {
    this._sendError(event);
  };
  /**
   * @param {string} route
   * @param {string} data
   * @return {?}
   */
  p.buildPath = function(route, data) {
    return createjs.RequestUtils.buildPath(route, data);
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[PreloadJS AbstractLoader]";
  };
  createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {?} loadItem
   * @param {?} preferXHR
   * @param {?} type
   * @return {undefined}
   */
  function AbstractMediaLoader(loadItem, preferXHR, type) {
    this.AbstractLoader_constructor(loadItem, preferXHR, type);
    this.resultFormatter = this._formatResult;
    /** @type {string} */
    this._tagSrcAttribute = "src";
    this.on("initialize", this._updateXHR, this);
  }
  var p = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);
  /**
   * @return {undefined}
   */
  p.load = function() {
    if (!this._tag) {
      this._tag = this._createTag(this._item.src);
    }
    /** @type {string} */
    this._tag.preload = "auto";
    this._tag.load();
    this.AbstractLoader_load();
  };
  /**
   * @return {undefined}
   */
  p._createTag = function() {
  };
  /**
   * @return {undefined}
   */
  p._createRequest = function() {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._updateXHR = function(event) {
    if (event.loader.setResponseType) {
      event.loader.setResponseType("blob");
    }
  };
  /**
   * @param {!Object} item
   * @return {?}
   */
  p._formatResult = function(item) {
    if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
      var URL = window.URL || window.webkitURL;
      var localMediaStream = item.getResult(true);
      item.getTag().src = URL.createObjectURL(localMediaStream);
    }
    return item.getTag();
  };
  createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {!Object} item
   * @return {undefined}
   */
  var AbstractRequest = function(item) {
    /** @type {!Object} */
    this._item = item;
  };
  var p = createjs.extend(AbstractRequest, createjs.EventDispatcher);
  /**
   * @return {undefined}
   */
  p.load = function() {
  };
  /**
   * @return {undefined}
   */
  p.destroy = function() {
  };
  /**
   * @return {undefined}
   */
  p.cancel = function() {
  };
  createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {?} loadItem
   * @param {!Object} tag
   * @param {string} srcAttribute
   * @return {undefined}
   */
  function TagRequest(loadItem, tag, srcAttribute) {
    this.AbstractRequest_constructor(loadItem);
    /** @type {!Object} */
    this._tag = tag;
    /** @type {string} */
    this._tagSrcAttribute = srcAttribute;
    this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
    /** @type {boolean} */
    this._addedToDOM = false;
    /** @type {null} */
    this._startTagVisibility = null;
  }
  var p = createjs.extend(TagRequest, createjs.AbstractRequest);
  /**
   * @return {undefined}
   */
  p.load = function() {
    this._tag.onload = createjs.proxy(this._handleTagComplete, this);
    this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
    this._tag.onerror = createjs.proxy(this._handleError, this);
    var evt = new createjs.Event("initialize");
    evt.loader = this._tag;
    this.dispatchEvent(evt);
    this._hideTag();
    /** @type {number} */
    this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
    this._tag[this._tagSrcAttribute] = this._item.src;
    if (null == this._tag.parentNode) {
      window.document.body.appendChild(this._tag);
      /** @type {boolean} */
      this._addedToDOM = true;
    }
  };
  /**
   * @return {undefined}
   */
  p.destroy = function() {
    this._clean();
    /** @type {null} */
    this._tag = null;
    this.AbstractRequest_destroy();
  };
  /**
   * @return {undefined}
   */
  p._handleReadyStateChange = function() {
    clearTimeout(this._loadTimeout);
    var tag = this._tag;
    if ("loaded" == tag.readyState || "complete" == tag.readyState) {
      this._handleTagComplete();
    }
  };
  /**
   * @return {undefined}
   */
  p._handleError = function() {
    this._clean();
    this.dispatchEvent("error");
  };
  /**
   * @return {undefined}
   */
  p._handleTagComplete = function() {
    this._rawResult = this._tag;
    this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult;
    this._clean();
    this._showTag();
    this.dispatchEvent("complete");
  };
  /**
   * @return {undefined}
   */
  p._handleTimeout = function() {
    this._clean();
    this.dispatchEvent(new createjs.Event("timeout"));
  };
  /**
   * @return {undefined}
   */
  p._clean = function() {
    /** @type {null} */
    this._tag.onload = null;
    /** @type {null} */
    this._tag.onreadystatechange = null;
    /** @type {null} */
    this._tag.onerror = null;
    if (this._addedToDOM && null != this._tag.parentNode) {
      this._tag.parentNode.removeChild(this._tag);
    }
    clearTimeout(this._loadTimeout);
  };
  /**
   * @return {undefined}
   */
  p._hideTag = function() {
    this._startTagVisibility = this._tag.style.visibility;
    /** @type {string} */
    this._tag.style.visibility = "hidden";
  };
  /**
   * @return {undefined}
   */
  p._showTag = function() {
    this._tag.style.visibility = this._startTagVisibility;
  };
  /**
   * @return {undefined}
   */
  p._handleStalled = function() {
  };
  createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {?} loadItem
   * @param {!HTMLElement} tag
   * @param {string} srcAttribute
   * @return {undefined}
   */
  function MediaTagRequest(loadItem, tag, srcAttribute) {
    this.AbstractRequest_constructor(loadItem);
    /** @type {!HTMLElement} */
    this._tag = tag;
    /** @type {string} */
    this._tagSrcAttribute = srcAttribute;
    this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
  }
  var p = createjs.extend(MediaTagRequest, createjs.TagRequest);
  /**
   * @return {undefined}
   */
  p.load = function() {
    var sc = createjs.proxy(this._handleStalled, this);
    this._stalledCallback = sc;
    var pc = createjs.proxy(this._handleProgress, this);
    this._handleProgress = pc;
    this._tag.addEventListener("stalled", sc);
    this._tag.addEventListener("progress", pc);
    if (this._tag.addEventListener) {
      this._tag.addEventListener("canplaythrough", this._loadedHandler, false);
    }
    this.TagRequest_load();
  };
  /**
   * @return {undefined}
   */
  p._handleReadyStateChange = function() {
    clearTimeout(this._loadTimeout);
    var tag = this._tag;
    if ("loaded" == tag.readyState || "complete" == tag.readyState) {
      this._handleTagComplete();
    }
  };
  /**
   * @return {undefined}
   */
  p._handleStalled = function() {
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._handleProgress = function(event) {
    if (event && !(event.loaded > 0 && 0 == event.total)) {
      var changeEvent = new createjs.ProgressEvent(event.loaded, event.total);
      this.dispatchEvent(changeEvent);
    }
  };
  /**
   * @return {undefined}
   */
  p._clean = function() {
    if (this._tag.removeEventListener) {
      this._tag.removeEventListener("canplaythrough", this._loadedHandler);
    }
    this._tag.removeEventListener("stalled", this._stalledCallback);
    this._tag.removeEventListener("progress", this._progressCallback);
    this.TagRequest__clean();
  };
  createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {!Object} item
   * @return {undefined}
   */
  function XHRRequest(item) {
    this.AbstractRequest_constructor(item);
    /** @type {null} */
    this._request = null;
    /** @type {null} */
    this._loadTimeout = null;
    /** @type {number} */
    this._xhrLevel = 1;
    /** @type {null} */
    this._response = null;
    /** @type {null} */
    this._rawResponse = null;
    /** @type {boolean} */
    this._canceled = false;
    this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this);
    this._handleProgressProxy = createjs.proxy(this._handleProgress, this);
    this._handleAbortProxy = createjs.proxy(this._handleAbort, this);
    this._handleErrorProxy = createjs.proxy(this._handleError, this);
    this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this);
    this._handleLoadProxy = createjs.proxy(this._handleLoad, this);
    this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this);
    this._createXHR(item);
  }
  var p = createjs.extend(XHRRequest, createjs.AbstractRequest);
  /** @type {!Array} */
  XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
  /**
   * @param {boolean} raw
   * @return {?}
   */
  p.getResult = function(raw) {
    return raw && this._rawResponse ? this._rawResponse : this._response;
  };
  /**
   * @return {undefined}
   */
  p.cancel = function() {
    /** @type {boolean} */
    this.canceled = true;
    this._clean();
    this._request.abort();
  };
  /**
   * @return {undefined}
   */
  p.load = function() {
    if (null != this._request) {
      if (null != this._request.addEventListener) {
        this._request.addEventListener("loadstart", this._handleLoadStartProxy, false);
        this._request.addEventListener("progress", this._handleProgressProxy, false);
        this._request.addEventListener("abort", this._handleAbortProxy, false);
        this._request.addEventListener("error", this._handleErrorProxy, false);
        this._request.addEventListener("timeout", this._handleTimeoutProxy, false);
        this._request.addEventListener("load", this._handleLoadProxy, false);
        this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, false);
      } else {
        this._request.onloadstart = this._handleLoadStartProxy;
        this._request.onprogress = this._handleProgressProxy;
        this._request.onabort = this._handleAbortProxy;
        this._request.onerror = this._handleErrorProxy;
        this._request.ontimeout = this._handleTimeoutProxy;
        this._request.onload = this._handleLoadProxy;
        this._request.onreadystatechange = this._handleReadyStateChangeProxy;
      }
      if (1 == this._xhrLevel) {
        /** @type {number} */
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
      }
      try {
        if (this._item.values && this._item.method != createjs.AbstractLoader.GET) {
          if (this._item.method == createjs.AbstractLoader.POST) {
            this._request.send(createjs.RequestUtils.formatQueryString(this._item.values));
          }
        } else {
          this._request.send();
        }
      } catch (event) {
        this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, event));
      }
    } else {
      this._handleError();
    }
  };
  /**
   * @param {string} type
   * @return {undefined}
   */
  p.setResponseType = function(type) {
    if ("blob" === type) {
      /** @type {string} */
      type = window.URL ? "blob" : "arraybuffer";
      /** @type {string} */
      this._responseType = type;
    }
    /** @type {string} */
    this._request.responseType = type;
  };
  /**
   * @return {?}
   */
  p.getAllResponseHeaders = function() {
    return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
  };
  /**
   * @param {?} name
   * @return {?}
   */
  p.getResponseHeader = function(name) {
    return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(name) : null;
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._handleProgress = function(event) {
    if (event && !(event.loaded > 0 && 0 == event.total)) {
      var changeEvent = new createjs.ProgressEvent(event.loaded, event.total);
      this.dispatchEvent(changeEvent);
    }
  };
  /**
   * @return {undefined}
   */
  p._handleLoadStart = function() {
    clearTimeout(this._loadTimeout);
    this.dispatchEvent("loadstart");
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._handleAbort = function(event) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, event));
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._handleError = function(event) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent(event.message));
  };
  /**
   * @return {undefined}
   */
  p._handleReadyStateChange = function() {
    if (4 == this._request.readyState) {
      this._handleLoad();
    }
  };
  /**
   * @return {?}
   */
  p._handleLoad = function() {
    if (!this.loaded) {
      /** @type {boolean} */
      this.loaded = true;
      var error = this._checkError();
      if (error) {
        return void this._handleError(error);
      }
      if (this._response = this._getResponse(), "arraybuffer" === this._responseType) {
        try {
          /** @type {!Blob} */
          this._response = new Blob([this._response]);
        } catch (e) {
          if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === e.name && window.BlobBuilder) {
            /** @type {!BlobBuilder} */
            var builder = new BlobBuilder;
            builder.append(this._response);
            /** @type {!Blob} */
            this._response = builder.getBlob();
          }
        }
      }
      this._clean();
      this.dispatchEvent(new createjs.Event("complete"));
    }
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._handleTimeout = function(event) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, event));
  };
  /**
   * @return {?}
   */
  p._checkError = function() {
    /** @type {number} */
    var t = parseInt(this._request.status);
    switch(t) {
      case 404:
      case 0:
        return new Error(t);
    }
    return null;
  };
  /**
   * @return {?}
   */
  p._getResponse = function() {
    if (null != this._response) {
      return this._response;
    }
    if (null != this._request.response) {
      return this._request.response;
    }
    try {
      if (null != this._request.responseText) {
        return this._request.responseText;
      }
    } catch (t) {
    }
    try {
      if (null != this._request.responseXML) {
        return this._request.responseXML;
      }
    } catch (t) {
    }
    return null;
  };
  /**
   * @param {!Object} item
   * @return {?}
   */
  p._createXHR = function(item) {
    var crossdomain = createjs.RequestUtils.isCrossDomain(item);
    var headers = {};
    /** @type {null} */
    var req = null;
    if (window.XMLHttpRequest) {
      /** @type {!XMLHttpRequest} */
      req = new XMLHttpRequest;
      if (crossdomain && void 0 === req.withCredentials && window.XDomainRequest) {
        /** @type {!XDomainRequest} */
        req = new XDomainRequest;
      }
    } else {
      /** @type {number} */
      var i = 0;
      var countRep = s.ACTIVEX_VERSIONS.length;
      for (; countRep > i; i++) {
        var axVersion = s.ACTIVEX_VERSIONS[i];
        try {
          req = new ActiveXObject(axVersion);
          break;
        } catch (t) {
        }
      }
      if (null == req) {
        return false;
      }
    }
    if (null == item.mimeType && createjs.RequestUtils.isText(item.type)) {
      /** @type {string} */
      item.mimeType = "text/plain; charset=utf-8";
    }
    if (item.mimeType && req.overrideMimeType) {
      req.overrideMimeType(item.mimeType);
    }
    /** @type {number} */
    this._xhrLevel = "string" == typeof req.responseType ? 2 : 1;
    var GAIA_COMMIT;
    if (GAIA_COMMIT = item.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(item.src, item.values) : item.src, req.open(item.method || createjs.AbstractLoader.GET, GAIA_COMMIT, true), crossdomain && req instanceof XMLHttpRequest && 1 == this._xhrLevel && (headers.Origin = location.origin), item.values && item.method == createjs.AbstractLoader.POST && (headers["Content-Type"] = "application/x-www-form-urlencoded"), crossdomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = 
    "XMLHttpRequest"), item.headers) {
      var i;
      for (i in item.headers) {
        headers[i] = item.headers[i];
      }
    }
    for (i in headers) {
      req.setRequestHeader(i, headers[i]);
    }
    return req instanceof XMLHttpRequest && void 0 !== item.withCredentials && (req.withCredentials = item.withCredentials), this._request = req, true;
  };
  /**
   * @return {undefined}
   */
  p._clean = function() {
    clearTimeout(this._loadTimeout);
    if (null != this._request.removeEventListener) {
      this._request.removeEventListener("loadstart", this._handleLoadStartProxy);
      this._request.removeEventListener("progress", this._handleProgressProxy);
      this._request.removeEventListener("abort", this._handleAbortProxy);
      this._request.removeEventListener("error", this._handleErrorProxy);
      this._request.removeEventListener("timeout", this._handleTimeoutProxy);
      this._request.removeEventListener("load", this._handleLoadProxy);
      this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy);
    } else {
      /** @type {null} */
      this._request.onloadstart = null;
      /** @type {null} */
      this._request.onprogress = null;
      /** @type {null} */
      this._request.onabort = null;
      /** @type {null} */
      this._request.onerror = null;
      /** @type {null} */
      this._request.ontimeout = null;
      /** @type {null} */
      this._request.onload = null;
      /** @type {null} */
      this._request.onreadystatechange = null;
    }
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[PreloadJS XHRRequest]";
  };
  createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {!Object} loadItem
   * @param {?} preferXHR
   * @return {undefined}
   */
  function SoundLoader(loadItem, preferXHR) {
    this.AbstractMediaLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SOUND);
    if (createjs.RequestUtils.isAudioTag(loadItem) || createjs.RequestUtils.isAudioTag(loadItem.src)) {
      /** @type {!Object} */
      this._tag = loadItem;
    } else {
      if (createjs.RequestUtils.isAudioTag(loadItem.tag)) {
        this._tag = createjs.RequestUtils.isAudioTag(loadItem) ? loadItem : loadItem.src;
      }
    }
    if (null != this._tag) {
      /** @type {boolean} */
      this._preferXHR = false;
    }
  }
  var p = createjs.extend(SoundLoader, createjs.AbstractMediaLoader);
  /**
   * @param {!Object} item
   * @return {?}
   */
  SoundLoader.canLoadItem = function(item) {
    return item.type == createjs.AbstractLoader.SOUND;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  p._createTag = function(value) {
    /** @type {!Element} */
    var obj = document.createElement("audio");
    return obj.autoplay = false, obj.preload = "none", obj.src = value, obj;
  };
  createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @return {undefined}
   */
  var PlayPropsConfig = function() {
    /** @type {null} */
    this.interrupt = null;
    /** @type {null} */
    this.delay = null;
    /** @type {null} */
    this.offset = null;
    /** @type {null} */
    this.loop = null;
    /** @type {null} */
    this.volume = null;
    /** @type {null} */
    this.pan = null;
    /** @type {null} */
    this.startTime = null;
    /** @type {null} */
    this.duration = null;
  };
  var e = PlayPropsConfig.prototype = {};
  /** @type {function(): undefined} */
  var s = PlayPropsConfig;
  /**
   * @param {!Array} value
   * @return {?}
   */
  s.create = function(value) {
    if (value instanceof s || value instanceof Object) {
      var result = new createjs.PlayPropsConfig;
      return result.set(value), result;
    }
    throw new Error("Type not recognized.");
  };
  /**
   * @param {?} value
   * @return {?}
   */
  e.set = function(value) {
    var cssName;
    for (cssName in value) {
      this[cssName] = value[cssName];
    }
    return this;
  };
  /**
   * @return {?}
   */
  e.toString = function() {
    return "[PlayPropsConfig]";
  };
  /** @type {function(): undefined} */
  createjs.PlayPropsConfig = s;
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @return {?}
   */
  function Sound() {
    throw "Sound cannot be instantiated";
  }
  /**
   * @param {string} src
   * @param {undefined} max
   * @return {undefined}
   */
  function SoundChannel(src, max) {
    this.init(src, max);
  }
  /** @type {function(): ?} */
  var s = Sound;
  /** @type {string} */
  s.INTERRUPT_ANY = "any";
  /** @type {string} */
  s.INTERRUPT_EARLY = "early";
  /** @type {string} */
  s.INTERRUPT_LATE = "late";
  /** @type {string} */
  s.INTERRUPT_NONE = "none";
  /** @type {string} */
  s.PLAY_INITED = "playInited";
  /** @type {string} */
  s.PLAY_SUCCEEDED = "playSucceeded";
  /** @type {string} */
  s.PLAY_INTERRUPTED = "playInterrupted";
  /** @type {string} */
  s.PLAY_FINISHED = "playFinished";
  /** @type {string} */
  s.PLAY_FAILED = "playFailed";
  /** @type {!Array} */
  s.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
  s.EXTENSION_MAP = {
    m4a : "mp4"
  };
  /** @type {!RegExp} */
  s.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/;
  /** @type {string} */
  s.defaultInterruptBehavior = s.INTERRUPT_NONE;
  /** @type {!Array} */
  s.alternateExtensions = [];
  /** @type {null} */
  s.activePlugin = null;
  /** @type {number} */
  s._masterVolume = 1;
  Object.defineProperty(s, "volume", {
    get : function() {
      return this._masterVolume;
    },
    set : function(value) {
      if (null == Number(value)) {
        return false;
      }
      if (value = Math.max(0, Math.min(1, value)), s._masterVolume = value, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(value)) {
        var instances = this._instances;
        /** @type {number} */
        var i = 0;
        var length = instances.length;
        for (; length > i; i++) {
          instances[i].setMasterVolume(value);
        }
      }
    }
  });
  /** @type {boolean} */
  s._masterMute = false;
  Object.defineProperty(s, "muted", {
    get : function() {
      return this._masterMute;
    },
    set : function(value) {
      if (null == value) {
        return false;
      }
      if (this._masterMute = value, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(value)) {
        var instances = this._instances;
        /** @type {number} */
        var i = 0;
        var length = instances.length;
        for (; length > i; i++) {
          instances[i].setMasterMute(value);
        }
      }
      return true;
    }
  });
  Object.defineProperty(s, "capabilities", {
    get : function() {
      return null == s.activePlugin ? null : s.activePlugin._capabilities;
    },
    set : function() {
      return false;
    }
  });
  /** @type {boolean} */
  s._pluginsRegistered = false;
  /** @type {number} */
  s._lastID = 0;
  /** @type {!Array} */
  s._instances = [];
  s._idHash = {};
  s._preloadHash = {};
  s._defaultPlayPropsHash = {};
  /** @type {null} */
  s.addEventListener = null;
  /** @type {null} */
  s.removeEventListener = null;
  /** @type {null} */
  s.removeAllEventListeners = null;
  /** @type {null} */
  s.dispatchEvent = null;
  /** @type {null} */
  s.hasEventListener = null;
  /** @type {null} */
  s._listeners = null;
  createjs.EventDispatcher.initialize(s);
  /**
   * @return {?}
   */
  s.getPreloadHandlers = function() {
    return {
      callback : createjs.proxy(s.initLoad, s),
      types : ["sound"],
      extensions : s.SUPPORTED_EXTENSIONS
    };
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  s._handleLoadComplete = function(event) {
    var src = event.target.getItem().src;
    if (s._preloadHash[src]) {
      /** @type {number} */
      var i = 0;
      var countRep = s._preloadHash[src].length;
      for (; countRep > i; i++) {
        var item = s._preloadHash[src][i];
        if (s._preloadHash[src][i] = true, s.hasEventListener("fileload")) {
          (event = new createjs.Event("fileload")).src = item.src;
          event.id = item.id;
          event.data = item.data;
          event.sprite = item.sprite;
          s.dispatchEvent(event);
        }
      }
    }
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  s._handleLoadError = function(event) {
    var src = event.target.getItem().src;
    if (s._preloadHash[src]) {
      /** @type {number} */
      var i = 0;
      var countRep = s._preloadHash[src].length;
      for (; countRep > i; i++) {
        var item = s._preloadHash[src][i];
        if (s._preloadHash[src][i] = false, s.hasEventListener("fileerror")) {
          (event = new createjs.Event("fileerror")).src = item.src;
          event.id = item.id;
          event.data = item.data;
          event.sprite = item.sprite;
          s.dispatchEvent(event);
        }
      }
    }
  };
  /**
   * @param {!Object} plugin
   * @return {?}
   */
  s._registerPlugin = function(plugin) {
    return !!plugin.isSupported() && (s.activePlugin = new plugin, true);
  };
  /**
   * @param {!Array} plugins
   * @return {?}
   */
  s.registerPlugins = function(plugins) {
    /** @type {boolean} */
    s._pluginsRegistered = true;
    /** @type {number} */
    var i = 0;
    var length = plugins.length;
    for (; length > i; i++) {
      if (s._registerPlugin(plugins[i])) {
        return true;
      }
    }
    return false;
  };
  /**
   * @return {?}
   */
  s.initializeDefaultPlugins = function() {
    return null != s.activePlugin || !s._pluginsRegistered && !!s.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
  };
  /**
   * @return {?}
   */
  s.isReady = function() {
    return null != s.activePlugin;
  };
  /**
   * @return {?}
   */
  s.getCapabilities = function() {
    return null == s.activePlugin ? null : s.activePlugin._capabilities;
  };
  /**
   * @param {?} key
   * @return {?}
   */
  s.getCapability = function(key) {
    return null == s.activePlugin ? null : s.activePlugin._capabilities[key];
  };
  /**
   * @param {!Object} loadItem
   * @return {?}
   */
  s.initLoad = function(loadItem) {
    return s._registerSound(loadItem);
  };
  /**
   * @param {!Object} loadItem
   * @return {?}
   */
  s._registerSound = function(loadItem) {
    if (!s.initializeDefaultPlugins()) {
      return false;
    }
    var details;
    if (loadItem.src instanceof Object ? (details = s._parseSrc(loadItem.src)).src = loadItem.path + details.src : details = s._parsePath(loadItem.src), null == details) {
      return false;
    }
    loadItem.src = details.src;
    /** @type {string} */
    loadItem.type = "sound";
    var data = loadItem.data;
    /** @type {null} */
    var numChannels = null;
    if (null != data && (isNaN(data.channels) ? isNaN(data) || (numChannels = parseInt(data)) : numChannels = parseInt(data.channels), data.audioSprite)) {
      var sp;
      var i = data.audioSprite.length;
      for (; i--;) {
        sp = data.audioSprite[i];
        s._idHash[sp.id] = {
          src : loadItem.src,
          startTime : parseInt(sp.startTime),
          duration : parseInt(sp.duration)
        };
        if (sp.defaultPlayProps) {
          s._defaultPlayPropsHash[sp.id] = createjs.PlayPropsConfig.create(sp.defaultPlayProps);
        }
      }
    }
    if (null != loadItem.id) {
      s._idHash[loadItem.id] = {
        src : loadItem.src
      };
    }
    var loader = s.activePlugin.register(loadItem);
    return SoundChannel.create(loadItem.src, numChannels), null != data && isNaN(data) ? loadItem.data.channels = numChannels || SoundChannel.maxPerChannel() : loadItem.data = numChannels || SoundChannel.maxPerChannel(), loader.type && (loadItem.type = loader.type), loadItem.defaultPlayProps && (s._defaultPlayPropsHash[loadItem.src] = createjs.PlayPropsConfig.create(loadItem.defaultPlayProps)), loader;
  };
  /**
   * @param {string} src
   * @param {string} id
   * @param {!Object} data
   * @param {string} basePath
   * @param {?} defaultPlayProps
   * @return {?}
   */
  s.registerSound = function(src, id, data, basePath, defaultPlayProps) {
    var loadItem = {
      src : src,
      id : id,
      data : data,
      defaultPlayProps : defaultPlayProps
    };
    if (src instanceof Object && src.src) {
      /** @type {string} */
      basePath = id;
      /** @type {string} */
      loadItem = src;
    }
    /** @type {string} */
    (loadItem = createjs.LoadItem.create(loadItem)).path = basePath;
    if (!(null == basePath || loadItem.src instanceof Object)) {
      loadItem.src = basePath + src;
    }
    var loader = s._registerSound(loadItem);
    if (!loader) {
      return false;
    }
    if (s._preloadHash[loadItem.src] || (s._preloadHash[loadItem.src] = []), s._preloadHash[loadItem.src].push(loadItem), 1 == s._preloadHash[loadItem.src].length) {
      loader.on("complete", createjs.proxy(this._handleLoadComplete, this));
      loader.on("error", createjs.proxy(this._handleLoadError, this));
      s.activePlugin.preload(loader);
    } else {
      if (1 == s._preloadHash[loadItem.src][0]) {
        return true;
      }
    }
    return loadItem;
  };
  /**
   * @param {!Object} sounds
   * @param {!Object} basePath
   * @return {?}
   */
  s.registerSounds = function(sounds, basePath) {
    /** @type {!Array} */
    var returnValues = [];
    if (sounds.path) {
      if (basePath) {
        basePath = basePath + sounds.path;
      } else {
        basePath = sounds.path;
      }
      sounds = sounds.manifest;
    }
    /** @type {number} */
    var i = 0;
    var l = sounds.length;
    for (; l > i; i++) {
      returnValues[i] = createjs.Sound.registerSound(sounds[i].src, sounds[i].id, sounds[i].data, basePath, sounds[i].defaultPlayProps);
    }
    return returnValues;
  };
  /**
   * @param {!Object} src
   * @param {string} basePath
   * @return {?}
   */
  s.removeSound = function(src, basePath) {
    if (null == s.activePlugin) {
      return false;
    }
    var img;
    if (src instanceof Object && src.src && (src = src.src), src instanceof Object ? img = s._parseSrc(src) : (src = s._getSrcById(src).src, img = s._parsePath(src)), null == img) {
      return false;
    }
    var prop;
    for (prop in src = img.src, null != basePath && (src = basePath + src), s._idHash) {
      if (s._idHash[prop].src == src) {
        delete s._idHash[prop];
      }
    }
    return SoundChannel.removeSrc(src), delete s._preloadHash[src], s.activePlugin.removeSound(src), true;
  };
  /**
   * @param {!Object} sounds
   * @param {!Object} basePath
   * @return {?}
   */
  s.removeSounds = function(sounds, basePath) {
    /** @type {!Array} */
    var returnValues = [];
    if (sounds.path) {
      if (basePath) {
        basePath = basePath + sounds.path;
      } else {
        basePath = sounds.path;
      }
      sounds = sounds.manifest;
    }
    /** @type {number} */
    var i = 0;
    var l = sounds.length;
    for (; l > i; i++) {
      returnValues[i] = createjs.Sound.removeSound(sounds[i].src, basePath);
    }
    return returnValues;
  };
  /**
   * @return {undefined}
   */
  s.removeAllSounds = function() {
    s._idHash = {};
    s._preloadHash = {};
    SoundChannel.removeAll();
    if (s.activePlugin) {
      s.activePlugin.removeAllSounds();
    }
  };
  /**
   * @param {undefined} src
   * @return {?}
   */
  s.loadComplete = function(src) {
    if (!s.isReady()) {
      return false;
    }
    var value = s._parsePath(src);
    return src = value ? s._getSrcById(value.src).src : s._getSrcById(src).src, null != s._preloadHash[src] && 1 == s._preloadHash[src][0];
  };
  /**
   * @param {string} path
   * @return {?}
   */
  s._parsePath = function(path) {
    if ("string" != typeof path) {
      path = path.toString();
    }
    var metadata_property_names = path.match(s.FILE_PATTERN);
    if (null == metadata_property_names) {
      return false;
    }
    var metadata_property_name = metadata_property_names[4];
    var extension = metadata_property_names[5];
    var contents = s.capabilities;
    /** @type {number} */
    var i = 0;
    for (; !contents[extension];) {
      if (extension = s.alternateExtensions[i++], i > s.alternateExtensions.length) {
        return null;
      }
    }
    return {
      name : metadata_property_name,
      src : path = path.replace("." + metadata_property_names[5], "." + extension),
      extension : extension
    };
  };
  /**
   * @param {!Object} source
   * @return {?}
   */
  s._parseSrc = function(source) {
    var options = {
      name : void 0,
      src : void 0,
      extension : void 0
    };
    var c = s.capabilities;
    var prop;
    for (prop in source) {
      if (source.hasOwnProperty(prop) && c[prop]) {
        options.src = source[prop];
        /** @type {string} */
        options.extension = prop;
        break;
      }
    }
    if (!options.src) {
      return false;
    }
    var single = options.src.lastIndexOf("/");
    return options.name = -1 != single ? options.src.slice(single + 1) : options.src, options;
  };
  /**
   * @param {string} src
   * @param {(Object|string)} interrupt
   * @param {number} delay
   * @param {number} time
   * @param {number} loop
   * @param {number} volume
   * @param {number} pan
   * @param {string} startTime
   * @param {number} duration
   * @return {?}
   */
  s.play = function(src, interrupt, delay, time, loop, volume, pan, startTime, duration) {
    var playProps;
    playProps = createjs.PlayPropsConfig.create(interrupt instanceof Object || interrupt instanceof createjs.PlayPropsConfig ? interrupt : {
      interrupt : interrupt,
      delay : delay,
      offset : time,
      loop : loop,
      volume : volume,
      pan : pan,
      startTime : startTime,
      duration : duration
    });
    var instance = s.createInstance(src, playProps.startTime, playProps.duration);
    return s._playInstance(instance, playProps) || instance._playFailed(), instance;
  };
  /**
   * @param {string} src
   * @param {string} startTime
   * @param {number} duration
   * @return {?}
   */
  s.createInstance = function(src, startTime, duration) {
    if (!s.initializeDefaultPlugins()) {
      return new createjs.DefaultSoundInstance(src, startTime, duration);
    }
    var defaultPlayProps = s._defaultPlayPropsHash[src];
    src = s._getSrcById(src);
    var loadItem = s._parsePath(src.src);
    /** @type {null} */
    var instance = null;
    return null != loadItem && null != loadItem.src ? (SoundChannel.create(loadItem.src), null == startTime && (startTime = src.startTime), instance = s.activePlugin.create(loadItem.src, startTime, duration || src.duration), (defaultPlayProps = defaultPlayProps || s._defaultPlayPropsHash[loadItem.src]) && instance.applyPlayProps(defaultPlayProps)) : instance = new createjs.DefaultSoundInstance(src, startTime, duration), instance.uniqueId = s._lastID++, instance;
  };
  /**
   * @return {undefined}
   */
  s.stop = function() {
    var instances = this._instances;
    var i = instances.length;
    for (; i--;) {
      instances[i].stop();
    }
  };
  /**
   * @param {number} value
   * @return {?}
   */
  s.setVolume = function(value) {
    if (null == Number(value)) {
      return false;
    }
    if (value = Math.max(0, Math.min(1, value)), s._masterVolume = value, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(value)) {
      var instances = this._instances;
      /** @type {number} */
      var i = 0;
      var length = instances.length;
      for (; length > i; i++) {
        instances[i].setMasterVolume(value);
      }
    }
  };
  /**
   * @return {?}
   */
  s.getVolume = function() {
    return this._masterVolume;
  };
  /**
   * @param {boolean} value
   * @return {?}
   */
  s.setMute = function(value) {
    if (null == value) {
      return false;
    }
    if (this._masterMute = value, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(value)) {
      var instances = this._instances;
      /** @type {number} */
      var i = 0;
      var length = instances.length;
      for (; length > i; i++) {
        instances[i].setMasterMute(value);
      }
    }
    return true;
  };
  /**
   * @return {?}
   */
  s.getMute = function() {
    return this._masterMute;
  };
  /**
   * @param {!Object} src
   * @param {undefined} e
   * @return {undefined}
   */
  s.setDefaultPlayProps = function(src, e) {
    src = s._getSrcById(src);
    s._defaultPlayPropsHash[s._parsePath(src.src).src] = createjs.PlayPropsConfig.create(e);
  };
  /**
   * @param {!Object} src
   * @return {?}
   */
  s.getDefaultPlayProps = function(src) {
    return src = s._getSrcById(src), s._defaultPlayPropsHash[s._parsePath(src.src).src];
  };
  /**
   * @param {!Object} instance
   * @param {!Object} playProps
   * @return {?}
   */
  s._playInstance = function(instance, playProps) {
    var defaultPlayProps = s._defaultPlayPropsHash[instance.src] || {};
    if (null == playProps.interrupt && (playProps.interrupt = defaultPlayProps.interrupt || s.defaultInterruptBehavior), null == playProps.delay && (playProps.delay = defaultPlayProps.delay || 0), null == playProps.offset && (playProps.offset = instance.getPosition()), null == playProps.loop && (playProps.loop = instance.loop), null == playProps.volume && (playProps.volume = instance.volume), null == playProps.pan && (playProps.pan = instance.pan), 0 == playProps.delay) {
      if (!s._beginPlaying(instance, playProps)) {
        return false;
      }
    } else {
      /** @type {number} */
      var delayTimeoutId = setTimeout(function() {
        s._beginPlaying(instance, playProps);
      }, playProps.delay);
      /** @type {number} */
      instance.delayTimeoutId = delayTimeoutId;
    }
    return this._instances.push(instance), true;
  };
  /**
   * @param {!Object} instance
   * @param {!Object} playProps
   * @return {?}
   */
  s._beginPlaying = function(instance, playProps) {
    if (!SoundChannel.add(instance, playProps.interrupt)) {
      return false;
    }
    if (!instance._beginPlaying(playProps)) {
      var index = createjs.indexOf(this._instances, instance);
      return index > -1 && this._instances.splice(index, 1), false;
    }
    return true;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  s._getSrcById = function(value) {
    return s._idHash[value] || {
      src : value
    };
  };
  /**
   * @param {undefined} instance
   * @return {undefined}
   */
  s._playFinished = function(instance) {
    SoundChannel.remove(instance);
    var index = createjs.indexOf(this._instances, instance);
    if (index > -1) {
      this._instances.splice(index, 1);
    }
  };
  /** @type {function(): ?} */
  createjs.Sound = Sound;
  SoundChannel.channels = {};
  /**
   * @param {string} src
   * @param {string} max
   * @return {?}
   */
  SoundChannel.create = function(src, max) {
    return null == SoundChannel.get(src) && (SoundChannel.channels[src] = new SoundChannel(src, max), true);
  };
  /**
   * @param {boolean} src
   * @return {?}
   */
  SoundChannel.removeSrc = function(src) {
    var channel = SoundChannel.get(src);
    return null != channel && (channel._removeAll(), delete SoundChannel.channels[src], true);
  };
  /**
   * @return {undefined}
   */
  SoundChannel.removeAll = function() {
    var channel;
    for (channel in SoundChannel.channels) {
      SoundChannel.channels[channel]._removeAll();
    }
    SoundChannel.channels = {};
  };
  /**
   * @param {!Object} instance
   * @param {string} interrupt
   * @return {?}
   */
  SoundChannel.add = function(instance, interrupt) {
    var s = SoundChannel.get(instance.src);
    return null != s && s._add(instance, interrupt);
  };
  /**
   * @param {!Object} instance
   * @return {?}
   */
  SoundChannel.remove = function(instance) {
    var widgets = SoundChannel.get(instance.src);
    return null != widgets && (widgets._remove(instance), true);
  };
  /**
   * @return {?}
   */
  SoundChannel.maxPerChannel = function() {
    return p.maxDefault;
  };
  /**
   * @param {string} src
   * @return {?}
   */
  SoundChannel.get = function(src) {
    return SoundChannel.channels[src];
  };
  var p = SoundChannel.prototype;
  /** @type {function(string, undefined): undefined} */
  p.constructor = SoundChannel;
  /** @type {null} */
  p.src = null;
  /** @type {null} */
  p.max = null;
  /** @type {number} */
  p.maxDefault = 100;
  /** @type {number} */
  p.length = 0;
  /**
   * @param {string} src
   * @param {number} max
   * @return {undefined}
   */
  p.init = function(src, max) {
    /** @type {string} */
    this.src = src;
    this.max = max || this.maxDefault;
    if (-1 == this.max) {
      this.max = this.maxDefault;
    }
    /** @type {!Array} */
    this._instances = [];
  };
  /**
   * @param {number} name
   * @return {?}
   */
  p._get = function(name) {
    return this._instances[name];
  };
  /**
   * @param {!Object} instance
   * @param {string} interrupt
   * @return {?}
   */
  p._add = function(instance, interrupt) {
    return !!this._getSlot(interrupt, instance) && (this._instances.push(instance), this.length++, true);
  };
  /**
   * @param {!Object} instance
   * @return {?}
   */
  p._remove = function(instance) {
    var index = createjs.indexOf(this._instances, instance);
    return -1 != index && (this._instances.splice(index, 1), this.length--, true);
  };
  /**
   * @return {undefined}
   */
  p._removeAll = function() {
    /** @type {number} */
    var i = this.length - 1;
    for (; i >= 0; i--) {
      this._instances[i].stop();
    }
  };
  /**
   * @param {string} interrupt
   * @return {?}
   */
  p._getSlot = function(interrupt) {
    var target;
    var replacement;
    if (interrupt != Sound.INTERRUPT_NONE && null == (replacement = this._get(0))) {
      return true;
    }
    /** @type {number} */
    var value = 0;
    var i = this.max;
    for (; i > value; value++) {
      if (null == (target = this._get(value))) {
        return true;
      }
      if (target.playState == Sound.PLAY_FINISHED || target.playState == Sound.PLAY_INTERRUPTED || target.playState == Sound.PLAY_FAILED) {
        replacement = target;
        break;
      }
      if (interrupt != Sound.INTERRUPT_NONE && (interrupt == Sound.INTERRUPT_EARLY && target.getPosition() < replacement.getPosition() || interrupt == Sound.INTERRUPT_LATE && target.getPosition() > replacement.getPosition())) {
        replacement = target;
      }
    }
    return null != replacement && (replacement._interrupt(), this._remove(replacement), true);
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[Sound SoundChannel]";
  };
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {string} src
   * @param {number} duration
   * @param {number} startTime
   * @param {boolean} e
   * @return {undefined}
   */
  var AbstractSoundInstance = function(src, duration, startTime, e) {
    this.EventDispatcher_constructor();
    /** @type {string} */
    this.src = src;
    /** @type {number} */
    this.uniqueId = -1;
    /** @type {null} */
    this.playState = null;
    /** @type {null} */
    this.delayTimeoutId = null;
    /** @type {number} */
    this._volume = 1;
    Object.defineProperty(this, "volume", {
      get : this.getVolume,
      set : this.setVolume
    });
    /** @type {number} */
    this._pan = 0;
    Object.defineProperty(this, "pan", {
      get : this.getPan,
      set : this.setPan
    });
    /** @type {number} */
    this._startTime = Math.max(0, duration || 0);
    Object.defineProperty(this, "startTime", {
      get : this.getStartTime,
      set : this.setStartTime
    });
    /** @type {number} */
    this._duration = Math.max(0, startTime || 0);
    Object.defineProperty(this, "duration", {
      get : this.getDuration,
      set : this.setDuration
    });
    /** @type {null} */
    this._playbackResource = null;
    Object.defineProperty(this, "playbackResource", {
      get : this.getPlaybackResource,
      set : this.setPlaybackResource
    });
    if (false !== e && true !== e) {
      this.setPlaybackResource(e);
    }
    /** @type {number} */
    this._position = 0;
    Object.defineProperty(this, "position", {
      get : this.getPosition,
      set : this.setPosition
    });
    /** @type {number} */
    this._loop = 0;
    Object.defineProperty(this, "loop", {
      get : this.getLoop,
      set : this.setLoop
    });
    /** @type {boolean} */
    this._muted = false;
    Object.defineProperty(this, "muted", {
      get : this.getMuted,
      set : this.setMuted
    });
    /** @type {boolean} */
    this._paused = false;
    Object.defineProperty(this, "paused", {
      get : this.getPaused,
      set : this.setPaused
    });
  };
  var p = createjs.extend(AbstractSoundInstance, createjs.EventDispatcher);
  /**
   * @param {(Object|string)} interrupt
   * @param {number} delay
   * @param {number} time
   * @param {number} loop
   * @param {number} volume
   * @param {number} pan
   * @return {?}
   */
  p.play = function(interrupt, delay, time, loop, volume, pan) {
    var playProps;
    return playProps = createjs.PlayPropsConfig.create(interrupt instanceof Object || interrupt instanceof createjs.PlayPropsConfig ? interrupt : {
      interrupt : interrupt,
      delay : delay,
      offset : time,
      loop : loop,
      volume : volume,
      pan : pan
    }), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(playProps), void(this._paused && this.setPaused(false))) : (this._cleanUp(), createjs.Sound._playInstance(this, playProps), this);
  };
  /**
   * @return {?}
   */
  p.stop = function() {
    return this._position = 0, this._paused = false, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this;
  };
  /**
   * @return {undefined}
   */
  p.destroy = function() {
    this._cleanUp();
    /** @type {null} */
    this.src = null;
    /** @type {null} */
    this.playbackResource = null;
    this.removeAllEventListeners();
  };
  /**
   * @param {!Object} playProps
   * @return {?}
   */
  p.applyPlayProps = function(playProps) {
    return null != playProps.offset && this.setPosition(playProps.offset), null != playProps.loop && this.setLoop(playProps.loop), null != playProps.volume && this.setVolume(playProps.volume), null != playProps.pan && this.setPan(playProps.pan), null != playProps.startTime && (this.setStartTime(playProps.startTime), this.setDuration(playProps.duration)), this;
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[AbstractSoundInstance]";
  };
  /**
   * @return {?}
   */
  p.getPaused = function() {
    return this._paused;
  };
  /**
   * @param {boolean} value
   * @return {?}
   */
  p.setPaused = function(value) {
    return true !== value && false !== value || this._paused == value || 1 == value && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = value, value ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this);
  };
  /**
   * @param {number} value
   * @return {?}
   */
  p.setVolume = function(value) {
    return value == this._volume || (this._volume = Math.max(0, Math.min(1, value)), this._muted || this._updateVolume()), this;
  };
  /**
   * @return {?}
   */
  p.getVolume = function() {
    return this._volume;
  };
  /**
   * @param {boolean} value
   * @return {?}
   */
  p.setMuted = function(value) {
    return true === value || false === value ? (this._muted = value, this._updateVolume(), this) : void 0;
  };
  /**
   * @return {?}
   */
  p.getMuted = function() {
    return this._muted;
  };
  /**
   * @param {?} value
   * @return {?}
   */
  p.setPan = function(value) {
    return value == this._pan || (this._pan = Math.max(-1, Math.min(1, value)), this._updatePan()), this;
  };
  /**
   * @return {?}
   */
  p.getPan = function() {
    return this._pan;
  };
  /**
   * @return {?}
   */
  p.getPosition = function() {
    return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position;
  };
  /**
   * @param {?} value
   * @return {?}
   */
  p.setPosition = function(value) {
    return this._position = Math.max(0, value), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this;
  };
  /**
   * @return {?}
   */
  p.getStartTime = function() {
    return this._startTime;
  };
  /**
   * @param {number} value
   * @return {?}
   */
  p.setStartTime = function(value) {
    return value == this._startTime || (this._startTime = Math.max(0, value || 0), this._updateStartTime()), this;
  };
  /**
   * @return {?}
   */
  p.getDuration = function() {
    return this._duration;
  };
  /**
   * @param {number} value
   * @return {?}
   */
  p.setDuration = function(value) {
    return value == this._duration || (this._duration = Math.max(0, value || 0), this._updateDuration()), this;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  p.setPlaybackResource = function(value) {
    return this._playbackResource = value, 0 == this._duration && this._setDurationFromSource(), this;
  };
  /**
   * @return {?}
   */
  p.getPlaybackResource = function() {
    return this._playbackResource;
  };
  /**
   * @return {?}
   */
  p.getLoop = function() {
    return this._loop;
  };
  /**
   * @param {number} value
   * @return {undefined}
   */
  p.setLoop = function(value) {
    if (null != this._playbackResource) {
      if (0 != this._loop && 0 == value) {
        this._removeLooping(value);
      } else {
        if (0 == this._loop && 0 != value) {
          this._addLooping(value);
        }
      }
    }
    /** @type {number} */
    this._loop = value;
  };
  /**
   * @param {string} type
   * @return {undefined}
   */
  p._sendEvent = function(type) {
    var event = new createjs.Event(type);
    this.dispatchEvent(event);
  };
  /**
   * @return {undefined}
   */
  p._cleanUp = function() {
    clearTimeout(this.delayTimeoutId);
    this._handleCleanUp();
    /** @type {boolean} */
    this._paused = false;
    createjs.Sound._playFinished(this);
  };
  /**
   * @return {undefined}
   */
  p._interrupt = function() {
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_INTERRUPTED;
    this._sendEvent("interrupted");
  };
  /**
   * @param {!Object} playProps
   * @return {?}
   */
  p._beginPlaying = function(playProps) {
    return this.setPosition(playProps.offset), this.setLoop(playProps.loop), this.setVolume(playProps.volume), this.setPan(playProps.pan), null != playProps.startTime && (this.setStartTime(playProps.startTime), this.setDuration(playProps.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = false, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), true) : (this._playFailed(), false);
  };
  /**
   * @return {undefined}
   */
  p._playFailed = function() {
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_FAILED;
    this._sendEvent("failed");
  };
  /**
   * @return {?}
   */
  p._handleSoundComplete = function() {
    return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"));
  };
  /**
   * @return {undefined}
   */
  p._handleSoundReady = function() {
  };
  /**
   * @return {undefined}
   */
  p._updateVolume = function() {
  };
  /**
   * @return {undefined}
   */
  p._updatePan = function() {
  };
  /**
   * @return {undefined}
   */
  p._updateStartTime = function() {
  };
  /**
   * @return {undefined}
   */
  p._updateDuration = function() {
  };
  /**
   * @return {undefined}
   */
  p._setDurationFromSource = function() {
  };
  /**
   * @return {undefined}
   */
  p._calculateCurrentPosition = function() {
  };
  /**
   * @return {undefined}
   */
  p._updatePosition = function() {
  };
  /**
   * @return {undefined}
   */
  p._removeLooping = function() {
  };
  /**
   * @return {undefined}
   */
  p._addLooping = function() {
  };
  /**
   * @return {undefined}
   */
  p._pause = function() {
  };
  /**
   * @return {undefined}
   */
  p._resume = function() {
  };
  /**
   * @return {undefined}
   */
  p._handleStop = function() {
  };
  /**
   * @return {undefined}
   */
  p._handleCleanUp = function() {
  };
  /**
   * @return {undefined}
   */
  p._handleLoop = function() {
  };
  createjs.AbstractSoundInstance = createjs.promote(AbstractSoundInstance, "EventDispatcher");
  createjs.DefaultSoundInstance = createjs.AbstractSoundInstance;
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @return {undefined}
   */
  var AbstractPlugin = function() {
    /** @type {null} */
    this._capabilities = null;
    this._loaders = {};
    this._audioSources = {};
    this._soundInstances = {};
    /** @type {number} */
    this._volume = 1;
    this._loaderClass;
    this._soundInstanceClass;
  };
  var p = AbstractPlugin.prototype;
  /** @type {null} */
  AbstractPlugin._capabilities = null;
  /**
   * @return {?}
   */
  AbstractPlugin.isSupported = function() {
    return true;
  };
  /**
   * @param {!Object} loadItem
   * @return {?}
   */
  p.register = function(loadItem) {
    var loader = this._loaders[loadItem.src];
    return loader && !loader.canceled ? this._loaders[loadItem.src] : (this._audioSources[loadItem.src] = true, this._soundInstances[loadItem.src] = [], (loader = new this._loaderClass(loadItem)).on("complete", this._handlePreloadComplete, this), this._loaders[loadItem.src] = loader, loader);
  };
  /**
   * @param {!Object} loader
   * @return {undefined}
   */
  p.preload = function(loader) {
    loader.on("error", this._handlePreloadError, this);
    loader.load();
  };
  /**
   * @param {string} src
   * @return {?}
   */
  p.isPreloadStarted = function(src) {
    return null != this._audioSources[src];
  };
  /**
   * @param {?} src
   * @return {?}
   */
  p.isPreloadComplete = function(src) {
    return !(null == this._audioSources[src] || 1 == this._audioSources[src]);
  };
  /**
   * @param {!Object} src
   * @return {undefined}
   */
  p.removeSound = function(src) {
    if (this._soundInstances[src]) {
      var i = this._soundInstances[src].length;
      for (; i--;) {
        this._soundInstances[src][i].destroy();
      }
      delete this._soundInstances[src];
      delete this._audioSources[src];
      if (this._loaders[src]) {
        this._loaders[src].destroy();
      }
      delete this._loaders[src];
    }
  };
  /**
   * @return {undefined}
   */
  p.removeAllSounds = function() {
    var key;
    for (key in this._audioSources) {
      this.removeSound(key);
    }
  };
  /**
   * @param {string} src
   * @param {string} startTime
   * @param {!Object} duration
   * @return {?}
   */
  p.create = function(src, startTime, duration) {
    if (!this.isPreloadStarted(src)) {
      this.preload(this.register(src));
    }
    var si = new this._soundInstanceClass(src, startTime, duration, this._audioSources[src]);
    return this._soundInstances[src].push(si), si;
  };
  /**
   * @param {number} value
   * @return {?}
   */
  p.setVolume = function(value) {
    return this._volume = value, this._updateVolume(), true;
  };
  /**
   * @return {?}
   */
  p.getVolume = function() {
    return this._volume;
  };
  /**
   * @return {?}
   */
  p.setMute = function() {
    return this._updateVolume(), true;
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[AbstractPlugin]";
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  p._handlePreloadComplete = function(event) {
    var src = event.target.getItem().src;
    this._audioSources[src] = event.result;
    /** @type {number} */
    var i = 0;
    var countRep = this._soundInstances[src].length;
    for (; countRep > i; i++) {
      this._soundInstances[src][i].setPlaybackResource(this._audioSources[src]);
    }
  };
  /**
   * @return {undefined}
   */
  p._handlePreloadError = function() {
  };
  /**
   * @return {undefined}
   */
  p._updateVolume = function() {
  };
  /** @type {function(): undefined} */
  createjs.AbstractPlugin = AbstractPlugin;
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {?} loadItem
   * @return {undefined}
   */
  function Loader(loadItem) {
    this.AbstractLoader_constructor(loadItem, true, createjs.AbstractLoader.SOUND);
  }
  var p = createjs.extend(Loader, createjs.AbstractLoader);
  /** @type {null} */
  Loader.context = null;
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[WebAudioLoader]";
  };
  /**
   * @return {undefined}
   */
  p._createRequest = function() {
    this._request = new createjs.XHRRequest(this._item, false);
    this._request.setResponseType("arraybuffer");
  };
  /**
   * @return {undefined}
   */
  p._sendComplete = function() {
    Loader.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this));
  };
  /**
   * @param {!Object} decodedAudio
   * @return {undefined}
   */
  p._handleAudioDecoded = function(decodedAudio) {
    /** @type {!Object} */
    this._result = decodedAudio;
    this.AbstractLoader__sendComplete();
  };
  createjs.WebAudioLoader = createjs.promote(Loader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {?} src
   * @param {?} startTime
   * @param {?} duration
   * @param {?} playbackResource
   * @return {undefined}
   */
  function WebAudioSoundInstance(src, startTime, duration, playbackResource) {
    this.AbstractSoundInstance_constructor(src, startTime, duration, playbackResource);
    this.gainNode = s.context.createGain();
    this.panNode = s.context.createPanner();
    /** @type {string} */
    this.panNode.panningModel = s._panningModel;
    this.panNode.connect(this.gainNode);
    this._updatePan();
    /** @type {null} */
    this.sourceNode = null;
    /** @type {null} */
    this._soundCompleteTimeout = null;
    /** @type {null} */
    this._sourceNodeNext = null;
    /** @type {number} */
    this._playbackStartTime = 0;
    this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
  }
  var p = createjs.extend(WebAudioSoundInstance, createjs.AbstractSoundInstance);
  /** @type {function(?, ?, ?, ?): undefined} */
  var s = WebAudioSoundInstance;
  /** @type {null} */
  s.context = null;
  /** @type {null} */
  s._scratchBuffer = null;
  /** @type {null} */
  s.destinationNode = null;
  /** @type {string} */
  s._panningModel = "equalpower";
  /**
   * @return {undefined}
   */
  p.destroy = function() {
    this.AbstractSoundInstance_destroy();
    this.panNode.disconnect(0);
    /** @type {null} */
    this.panNode = null;
    this.gainNode.disconnect(0);
    /** @type {null} */
    this.gainNode = null;
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[WebAudioSoundInstance]";
  };
  /**
   * @return {undefined}
   */
  p._updatePan = function() {
    this.panNode.setPosition(this._pan, 0, -.5);
  };
  /**
   * @return {undefined}
   */
  p._removeLooping = function() {
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
  };
  /**
   * @return {undefined}
   */
  p._addLooping = function() {
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
    }
  };
  /**
   * @return {undefined}
   */
  p._setDurationFromSource = function() {
    /** @type {number} */
    this._duration = 1E3 * this.playbackResource.duration;
  };
  /**
   * @return {undefined}
   */
  p._handleCleanUp = function() {
    if (this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
      this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    }
    if (0 != this.gainNode.numberOfOutputs) {
      this.gainNode.disconnect(0);
    }
    clearTimeout(this._soundCompleteTimeout);
    /** @type {number} */
    this._playbackStartTime = 0;
  };
  /**
   * @param {!Object} audioNode
   * @return {?}
   */
  p._cleanUpAudioNode = function(audioNode) {
    if (audioNode) {
      audioNode.stop(0);
      audioNode.disconnect(0);
      try {
        /** @type {null} */
        audioNode.buffer = s._scratchBuffer;
      } catch (t) {
      }
      /** @type {null} */
      audioNode = null;
    }
    return audioNode;
  };
  /**
   * @return {undefined}
   */
  p._handleSoundReady = function() {
    this.gainNode.connect(s.destinationNode);
    /** @type {number} */
    var offset = .001 * this._duration;
    /** @type {number} */
    var pos = .001 * this._position;
    if (pos > offset) {
      /** @type {number} */
      pos = offset;
    }
    this.sourceNode = this._createAndPlayAudioNode(s.context.currentTime - offset, pos);
    /** @type {number} */
    this._playbackStartTime = this.sourceNode.startTime - pos;
    /** @type {number} */
    this._soundCompleteTimeout = setTimeout(this._endedHandler, 1E3 * (offset - pos));
    if (0 != this._loop) {
      this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
    }
  };
  /**
   * @param {number} startTime
   * @param {number} offset
   * @return {?}
   */
  p._createAndPlayAudioNode = function(startTime, offset) {
    var audioNode = s.context.createBufferSource();
    audioNode.buffer = this.playbackResource;
    audioNode.connect(this.panNode);
    /** @type {number} */
    var dur = .001 * this._duration;
    return audioNode.startTime = startTime + dur, audioNode.start(audioNode.startTime, offset + .001 * this._startTime, dur - offset), audioNode;
  };
  /**
   * @return {undefined}
   */
  p._pause = function() {
    /** @type {number} */
    this._position = 1E3 * (s.context.currentTime - this._playbackStartTime);
    this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    if (0 != this.gainNode.numberOfOutputs) {
      this.gainNode.disconnect(0);
    }
    clearTimeout(this._soundCompleteTimeout);
  };
  /**
   * @return {undefined}
   */
  p._resume = function() {
    this._handleSoundReady();
  };
  /**
   * @return {undefined}
   */
  p._updateVolume = function() {
    var newVolume = this._muted ? 0 : this._volume;
    if (newVolume != this.gainNode.gain.value) {
      this.gainNode.gain.value = newVolume;
    }
  };
  /**
   * @return {?}
   */
  p._calculateCurrentPosition = function() {
    return 1E3 * (s.context.currentTime - this._playbackStartTime);
  };
  /**
   * @return {undefined}
   */
  p._updatePosition = function() {
    this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    clearTimeout(this._soundCompleteTimeout);
    if (!this._paused) {
      this._handleSoundReady();
    }
  };
  /**
   * @return {undefined}
   */
  p._handleLoop = function() {
    this._cleanUpAudioNode(this.sourceNode);
    this.sourceNode = this._sourceNodeNext;
    this._playbackStartTime = this.sourceNode.startTime;
    this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
    /** @type {number} */
    this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration);
  };
  /**
   * @return {undefined}
   */
  p._updateDuration = function() {
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._pause();
      this._resume();
    }
  };
  createjs.WebAudioSoundInstance = createjs.promote(WebAudioSoundInstance, "AbstractSoundInstance");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @return {undefined}
   */
  function WebAudioPlugin() {
    this.AbstractPlugin_constructor();
    /** @type {string} */
    this._panningModel = s._panningModel;
    /** @type {null} */
    this.context = s.context;
    this.dynamicsCompressorNode = this.context.createDynamicsCompressor();
    this.dynamicsCompressorNode.connect(this.context.destination);
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.dynamicsCompressorNode);
    createjs.WebAudioSoundInstance.destinationNode = this.gainNode;
    /** @type {null} */
    this._capabilities = s._capabilities;
    this._loaderClass = createjs.WebAudioLoader;
    this._soundInstanceClass = createjs.WebAudioSoundInstance;
    this._addPropsToClasses();
  }
  var p = createjs.extend(WebAudioPlugin, createjs.AbstractPlugin);
  /** @type {function(): undefined} */
  var s = WebAudioPlugin;
  /** @type {null} */
  s._capabilities = null;
  /** @type {string} */
  s._panningModel = "equalpower";
  /** @type {null} */
  s.context = null;
  /** @type {null} */
  s._scratchBuffer = null;
  /** @type {boolean} */
  s._unlocked = false;
  /**
   * @return {?}
   */
  s.isSupported = function() {
    var t = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
    return !("file:" == location.protocol && !t && !this._isFileXHRSupported()) && (s._generateCapabilities(), null != s.context);
  };
  /**
   * @return {undefined}
   */
  s.playEmptySound = function() {
    if (null != s.context) {
      var source = s.context.createBufferSource();
      /** @type {null} */
      source.buffer = s._scratchBuffer;
      source.connect(s.context.destination);
      source.start(0, 0, 0);
    }
  };
  /**
   * @return {?}
   */
  s._isFileXHRSupported = function() {
    /** @type {boolean} */
    var supported = true;
    /** @type {!XMLHttpRequest} */
    var xhrHandshake = new XMLHttpRequest;
    try {
      xhrHandshake.open("GET", "WebAudioPluginTest.fail", false);
    } catch (e) {
      return supported = false;
    }
    /**
     * @return {undefined}
     */
    xhrHandshake.onerror = function() {
      /** @type {boolean} */
      supported = false;
    };
    /**
     * @return {undefined}
     */
    xhrHandshake.onload = function() {
      /** @type {boolean} */
      supported = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response;
    };
    try {
      xhrHandshake.send();
    } catch (e) {
      /** @type {boolean} */
      supported = false;
    }
    return supported;
  };
  /**
   * @return {?}
   */
  s._generateCapabilities = function() {
    if (null == s._capabilities) {
      /** @type {!Element} */
      var t = document.createElement("audio");
      if (null == t.canPlayType) {
        return null;
      }
      if (null == s.context) {
        if (window.AudioContext) {
          /** @type {!AudioContext} */
          s.context = new AudioContext;
        } else {
          if (!window.webkitAudioContext) {
            return null;
          }
          /** @type {!webkitAudioContext} */
          s.context = new webkitAudioContext;
        }
      }
      if (null == s._scratchBuffer) {
        s._scratchBuffer = s.context.createBuffer(1, 1, 22050);
      }
      s._compatibilitySetUp();
      if ("ontouchstart" in window && "running" != s.context.state) {
        s._unlock();
        document.addEventListener("mousedown", s._unlock, true);
        document.addEventListener("touchend", s._unlock, true);
      }
      s._capabilities = {
        panning : true,
        volume : true,
        tracks : -1
      };
      var supportedExtensions = createjs.Sound.SUPPORTED_EXTENSIONS;
      var extensionMap = createjs.Sound.EXTENSION_MAP;
      /** @type {number} */
      var i = 0;
      var l = supportedExtensions.length;
      for (; l > i; i++) {
        var ext = supportedExtensions[i];
        var playType = extensionMap[ext] || ext;
        /** @type {boolean} */
        s._capabilities[ext] = "no" != t.canPlayType("audio/" + ext) && "" != t.canPlayType("audio/" + ext) || "no" != t.canPlayType("audio/" + playType) && "" != t.canPlayType("audio/" + playType);
      }
      if (s.context.destination.numberOfChannels < 2) {
        /** @type {boolean} */
        s._capabilities.panning = false;
      }
    }
  };
  /**
   * @return {undefined}
   */
  s._compatibilitySetUp = function() {
    if (s._panningModel = "equalpower", !s.context.createGain) {
      /** @type {function(this:AudioContext): !GainNode} */
      s.context.createGain = s.context.createGainNode;
      /** @type {!AudioBufferSourceNode} */
      var audioNode = s.context.createBufferSource();
      audioNode.__proto__.start = audioNode.__proto__.noteGrainOn;
      audioNode.__proto__.stop = audioNode.__proto__.noteOff;
      /** @type {number} */
      s._panningModel = 0;
    }
  };
  /**
   * @return {undefined}
   */
  s._unlock = function() {
    if (!s._unlocked) {
      s.playEmptySound();
      if ("running" == s.context.state) {
        document.removeEventListener("mousedown", s._unlock, true);
        document.removeEventListener("touchend", s._unlock, true);
        /** @type {boolean} */
        s._unlocked = true;
      }
    }
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[WebAudioPlugin]";
  };
  /**
   * @return {undefined}
   */
  p._addPropsToClasses = function() {
    var c = this._soundInstanceClass;
    c.context = this.context;
    c._scratchBuffer = s._scratchBuffer;
    c.destinationNode = this.gainNode;
    c._panningModel = this._panningModel;
    this._loaderClass.context = this.context;
  };
  /**
   * @return {undefined}
   */
  p._updateVolume = function() {
    var newVolume = createjs.Sound._masterMute ? 0 : this._volume;
    if (newVolume != this.gainNode.gain.value) {
      this.gainNode.gain.value = newVolume;
    }
  };
  createjs.WebAudioPlugin = createjs.promote(WebAudioPlugin, "AbstractPlugin");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @return {?}
   */
  function HTMLAudioTagPool() {
    throw "HTMLAudioTagPool cannot be instantiated";
  }
  /**
   * @return {undefined}
   */
  function TagPool() {
    /** @type {!Array} */
    this._tags = [];
  }
  /** @type {function(): ?} */
  var s = HTMLAudioTagPool;
  s._tags = {};
  s._tagPool = new TagPool;
  s._tagUsed = {};
  /**
   * @param {string} src
   * @return {?}
   */
  s.get = function(src) {
    var callbacks = s._tags[src];
    return null == callbacks ? (callbacks = s._tags[src] = s._tagPool.get()).src = src : s._tagUsed[src] ? (callbacks = s._tagPool.get()).src = src : s._tagUsed[src] = true, callbacks;
  };
  /**
   * @param {?} src
   * @param {?} tag
   * @return {undefined}
   */
  s.set = function(src, tag) {
    if (tag == s._tags[src]) {
      /** @type {boolean} */
      s._tagUsed[src] = false;
    } else {
      s._tagPool.set(tag);
    }
  };
  /**
   * @param {string} name
   * @return {?}
   */
  s.remove = function(name) {
    var e = s._tags[name];
    return null != e && (s._tagPool.set(e), delete s._tags[name], delete s._tagUsed[name], true);
  };
  /**
   * @param {string} src
   * @return {?}
   */
  s.getDuration = function(src) {
    var target = s._tags[src];
    return null != target && target.duration ? 1E3 * target.duration : 0;
  };
  /** @type {function(): ?} */
  createjs.HTMLAudioTagPool = HTMLAudioTagPool;
  var p = TagPool.prototype;
  /** @type {function(): undefined} */
  p.constructor = TagPool;
  /**
   * @return {?}
   */
  p.get = function() {
    var cell;
    return null == (cell = 0 == this._tags.length ? this._createTag() : this._tags.pop()).parentNode && document.body.appendChild(cell), cell;
  };
  /**
   * @param {?} tag
   * @return {undefined}
   */
  p.set = function(tag) {
    if (-1 == createjs.indexOf(this._tags, tag)) {
      /** @type {null} */
      this._tags.src = null;
      this._tags.push(tag);
    }
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[TagPool]";
  };
  /**
   * @return {?}
   */
  p._createTag = function() {
    /** @type {!Element} */
    var a = document.createElement("audio");
    return a.autoplay = false, a.preload = "none", a;
  };
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @param {?} src
   * @param {(Object|number)} startTime
   * @param {!Object} duration
   * @param {?} playbackResource
   * @return {undefined}
   */
  function HTMLAudioSoundInstance(src, startTime, duration, playbackResource) {
    this.AbstractSoundInstance_constructor(src, startTime, duration, playbackResource);
    /** @type {null} */
    this._audioSpriteStopTime = null;
    /** @type {null} */
    this._delayTimeoutId = null;
    this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
    this._readyHandler = createjs.proxy(this._handleTagReady, this);
    this._stalledHandler = createjs.proxy(this._playFailed, this);
    this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this);
    this._loopHandler = createjs.proxy(this._handleSoundComplete, this);
    if (duration) {
      /** @type {number} */
      this._audioSpriteStopTime = .001 * (startTime + duration);
    } else {
      this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
    }
  }
  var p = createjs.extend(HTMLAudioSoundInstance, createjs.AbstractSoundInstance);
  /**
   * @return {undefined}
   */
  p.setMasterVolume = function() {
    this._updateVolume();
  };
  /**
   * @return {undefined}
   */
  p.setMasterMute = function() {
    this._updateVolume();
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[HTMLAudioSoundInstance]";
  };
  /**
   * @return {undefined}
   */
  p._removeLooping = function() {
    if (null != this._playbackResource) {
      /** @type {boolean} */
      this._playbackResource.loop = false;
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    }
  };
  /**
   * @return {undefined}
   */
  p._addLooping = function() {
    if (!(null == this._playbackResource || this._audioSpriteStopTime)) {
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
      /** @type {boolean} */
      this._playbackResource.loop = true;
    }
  };
  /**
   * @return {undefined}
   */
  p._handleCleanUp = function() {
    var tag = this._playbackResource;
    if (null != tag) {
      tag.pause();
      /** @type {boolean} */
      tag.loop = false;
      tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
      tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
      tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
      tag.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
      try {
        tag.currentTime = this._startTime;
      } catch (t) {
      }
      createjs.HTMLAudioTagPool.set(this.src, tag);
      /** @type {null} */
      this._playbackResource = null;
    }
  };
  /**
   * @param {!Object} instance
   * @return {?}
   */
  p._beginPlaying = function(instance) {
    return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(instance);
  };
  /**
   * @return {?}
   */
  p._handleSoundReady = function() {
    if (4 !== this._playbackResource.readyState) {
      var tag = this._playbackResource;
      return tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false), tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false), tag.preload = "auto", void tag.load();
    }
    this._updateVolume();
    /** @type {number} */
    this._playbackResource.currentTime = .001 * (this._startTime + this._position);
    if (this._audioSpriteStopTime) {
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    } else {
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      if (0 != this._loop) {
        this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
        /** @type {boolean} */
        this._playbackResource.loop = true;
      }
    }
    this._playbackResource.play();
  };
  /**
   * @return {undefined}
   */
  p._handleTagReady = function() {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
    this._handleSoundReady();
  };
  /**
   * @return {undefined}
   */
  p._pause = function() {
    this._playbackResource.pause();
  };
  /**
   * @return {undefined}
   */
  p._resume = function() {
    this._playbackResource.play();
  };
  /**
   * @return {undefined}
   */
  p._updateVolume = function() {
    if (null != this._playbackResource) {
      /** @type {number} */
      var newVolume = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
      if (newVolume != this._playbackResource.volume) {
        /** @type {number} */
        this._playbackResource.volume = newVolume;
      }
    }
  };
  /**
   * @return {?}
   */
  p._calculateCurrentPosition = function() {
    return 1E3 * this._playbackResource.currentTime - this._startTime;
  };
  /**
   * @return {undefined}
   */
  p._updatePosition = function() {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, false);
    try {
      /** @type {number} */
      this._playbackResource.currentTime = .001 * (this._position + this._startTime);
    } catch (t) {
      this._handleSetPositionSeek(null);
    }
  };
  /**
   * @return {undefined}
   */
  p._handleSetPositionSeek = function() {
    if (null != this._playbackResource) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, false);
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    }
  };
  /**
   * @return {undefined}
   */
  p._handleAudioSpriteLoop = function() {
    if (!(this._playbackResource.currentTime <= this._audioSpriteStopTime)) {
      this._playbackResource.pause();
      if (0 == this._loop) {
        this._handleSoundComplete(null);
      } else {
        /** @type {number} */
        this._position = 0;
        this._loop--;
        /** @type {number} */
        this._playbackResource.currentTime = .001 * this._startTime;
        if (!this._paused) {
          this._playbackResource.play();
        }
        this._sendEvent("loop");
      }
    }
  };
  /**
   * @return {undefined}
   */
  p._handleLoop = function() {
    if (0 == this._loop) {
      /** @type {boolean} */
      this._playbackResource.loop = false;
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    }
  };
  /**
   * @return {undefined}
   */
  p._updateStartTime = function() {
    /** @type {number} */
    this._audioSpriteStopTime = .001 * (this._startTime + this._duration);
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    }
  };
  /**
   * @return {undefined}
   */
  p._updateDuration = function() {
    /** @type {number} */
    this._audioSpriteStopTime = .001 * (this._startTime + this._duration);
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    }
  };
  /**
   * @return {undefined}
   */
  p._setDurationFromSource = function() {
    this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
    /** @type {null} */
    this._playbackResource = null;
  };
  createjs.HTMLAudioSoundInstance = createjs.promote(HTMLAudioSoundInstance, "AbstractSoundInstance");
}(), this.createjs = this.createjs || {}, function() {
  /**
   * @return {undefined}
   */
  function HTMLAudioPlugin() {
    this.AbstractPlugin_constructor();
    /** @type {number} */
    this.defaultNumChannels = 2;
    /** @type {null} */
    this._capabilities = s._capabilities;
    this._loaderClass = createjs.SoundLoader;
    this._soundInstanceClass = createjs.HTMLAudioSoundInstance;
  }
  var p = createjs.extend(HTMLAudioPlugin, createjs.AbstractPlugin);
  /** @type {function(): undefined} */
  var s = HTMLAudioPlugin;
  /** @type {number} */
  s.MAX_INSTANCES = 30;
  /** @type {string} */
  s._AUDIO_READY = "canplaythrough";
  /** @type {string} */
  s._AUDIO_ENDED = "ended";
  /** @type {string} */
  s._AUDIO_SEEKED = "seeked";
  /** @type {string} */
  s._AUDIO_STALLED = "stalled";
  /** @type {string} */
  s._TIME_UPDATE = "timeupdate";
  /** @type {null} */
  s._capabilities = null;
  /**
   * @return {?}
   */
  s.isSupported = function() {
    return s._generateCapabilities(), null != s._capabilities;
  };
  /**
   * @return {?}
   */
  s._generateCapabilities = function() {
    if (null == s._capabilities) {
      /** @type {!Element} */
      var t = document.createElement("audio");
      if (null == t.canPlayType) {
        return null;
      }
      s._capabilities = {
        panning : false,
        volume : true,
        tracks : -1
      };
      var supportedExtensions = createjs.Sound.SUPPORTED_EXTENSIONS;
      var extensionMap = createjs.Sound.EXTENSION_MAP;
      /** @type {number} */
      var i = 0;
      var l = supportedExtensions.length;
      for (; l > i; i++) {
        var ext = supportedExtensions[i];
        var playType = extensionMap[ext] || ext;
        /** @type {boolean} */
        s._capabilities[ext] = "no" != t.canPlayType("audio/" + ext) && "" != t.canPlayType("audio/" + ext) || "no" != t.canPlayType("audio/" + playType) && "" != t.canPlayType("audio/" + playType);
      }
    }
  };
  /**
   * @param {!Object} loadItem
   * @return {?}
   */
  p.register = function(loadItem) {
    var tag = createjs.HTMLAudioTagPool.get(loadItem.src);
    var loader = this.AbstractPlugin_register(loadItem);
    return loader.setTag(tag), loader;
  };
  /**
   * @param {string} src
   * @return {undefined}
   */
  p.removeSound = function(src) {
    this.AbstractPlugin_removeSound(src);
    createjs.HTMLAudioTagPool.remove(src);
  };
  /**
   * @param {!Function} src
   * @param {string} startTime
   * @param {?} duration
   * @return {?}
   */
  p.create = function(src, startTime, duration) {
    var si = this.AbstractPlugin_create(src, startTime, duration);
    return si.setPlaybackResource(null), si;
  };
  /**
   * @return {?}
   */
  p.toString = function() {
    return "[HTMLAudioPlugin]";
  };
  /** @type {null} */
  p.setVolume = p.getVolume = p.setMute = null;
  createjs.HTMLAudioPlugin = createjs.promote(HTMLAudioPlugin, "AbstractPlugin");
}();
