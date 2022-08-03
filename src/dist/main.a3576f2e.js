// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"module\\Snake.ts":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
    function Snake() {
        _classCallCheck(this, Snake);

        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div'); // snake下第一个div为head
        this.bodies = this.element.getElementsByTagName('div'); // snake下所有的div为body
    }

    _createClass(Snake, [{
        key: 'addBody',
        value: function addBody() {
            this.element.insertAdjacentHTML("beforeend", "<div></div>");
        }
    }, {
        key: 'moveBody',
        value: function moveBody() {
            for (var i = this.bodies.length - 1; i > 0; i--) {
                var X = this.bodies[i - 1].offsetLeft;
                var Y = this.bodies[i - 1].offsetTop;
                this.bodies[i].style.left = X + 'px';
                this.bodies[i].style.top = Y + 'px';
            }
        }
    }, {
        key: 'X',
        get: function get() {
            return this.head.offsetLeft;
        },
        set: function set(value) {
            if (this.X === value) {
                return;
            }
            if (value < 0 || value > 290) {
                throw new Error('你屎到临头了');
            }
            if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
                if (value > this.X) {
                    value = this.X - 10;
                } else {
                    value = this.X + 10;
                }
            }
            this.moveBody();
            this.head.style.left = value + 'px';
        }
    }, {
        key: 'Y',
        get: function get() {
            return this.head.offsetTop;
        },
        set: function set(value) {
            if (this.Y === value) {
                return;
            }
            if (value < 0 || value > 290) {
                throw new Error('你屎到临头了');
            }
            if (this.bodies[1] && this.bodies[1].offsetTop === value) {
                if (value > this.Y) {
                    value = this.Y - 10;
                } else {
                    value = this.Y + 10;
                }
            }
            this.moveBody();
            this.head.style.top = value + 'px';
        }
    }]);

    return Snake;
}();

exports.default = Snake;
},{}],"module\\Food.ts":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// food 用来描述食物
var Food = function () {
    function Food() {
        _classCallCheck(this, Food);

        this.element = document.getElementById('food');
    }
    // 食物位置


    _createClass(Food, [{
        key: 'change',

        // 随机食物位置
        value: function change() {
            var left = Math.round(Math.round(Math.random() * 29) * 10);
            var top = Math.round(Math.round(Math.random() * 29) * 10);
            this.element.style.left = left + 'px';
            this.element.style.top = top + 'px';
        }
    }, {
        key: 'X',
        get: function get() {
            return this.element.offsetLeft;
        }
    }, {
        key: 'Y',
        get: function get() {
            return this.element.offsetTop;
        }
    }]);

    return Food;
}();

exports.default = Food;
},{}],"module\\ScreenPanel.ts":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//ScreenPanel 来描述积分面板
var ScreenPanel = function () {
    function ScreenPanel() {
        var maxLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var upScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

        _classCallCheck(this, ScreenPanel);

        // 初始化
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    // 积分修改


    _createClass(ScreenPanel, [{
        key: 'addScore',
        value: function addScore() {
            this.scoreEle.innerHTML = 'Score:' + ++this.score;
            if (this.score % this.upScore === 0) {
                this.Levelup();
            }
        }
        // 等级修改

    }, {
        key: 'Levelup',
        value: function Levelup() {
            if (this.level < this.maxLevel) {
                this.levelEle.innerHTML = 'Level:' + ++this.level;
            }
        }
    }]);

    return ScreenPanel;
}();

exports.default = ScreenPanel;
},{}],"module\\GameControl.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Snake = require("./Snake");

var _Snake2 = _interopRequireDefault(_Snake);

var _Food = require("./Food");

var _Food2 = _interopRequireDefault(_Food);

var _ScreenPanel = require("./ScreenPanel");

var _ScreenPanel2 = _interopRequireDefault(_ScreenPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//  游戏控制器
var GameControl = function () {
    function GameControl() {
        _classCallCheck(this, GameControl);

        this.direction = ''; //移动方向
        this.isLive = true;
        this.food = new _Food2.default();
        this.snake = new _Snake2.default();
        this.screenpanel = new _ScreenPanel2.default();
    }

    _createClass(GameControl, [{
        key: "init",
        value: function init() {
            document.addEventListener('keydown', this.keydownHandler.bind(this)); //绑定this 
            this.run();
        }
    }, {
        key: "keydownHandler",
        value: function keydownHandler(event) {
            this.direction = event.key;
        }
        //移动snake

    }, {
        key: "run",
        value: function run() {
            var X = this.snake.X;
            var Y = this.snake.Y;
            switch (this.direction) {
                case "ArrowUp":
                case "UP":
                    Y -= 10;
                    break;
                case "ArrowDown":
                case "Down":
                    Y += 10;
                    break;
                case "ArrowLeft":
                case "Left":
                    X -= 10;
                    break;
                case "ArrowRight":
                case "Right":
                    X += 10;
                    break;
            }
            this.checkEat(X, Y);
            try {
                this.snake.X = X;
                this.snake.Y = Y;
            } catch (error) {
                alert('GG');
                this.isLive = false;
            }
            this.isLive && setTimeout(this.run.bind(this), 300 - 30 * (this.screenpanel.level - 1));
        }
        //确实是否吃到食物

    }, {
        key: "checkEat",
        value: function checkEat(X, Y) {
            if (this.food.X === X && this.food.Y === Y) {
                console.log('吃到了');
                this.food.change();
                this.screenpanel.addScore();
                this.snake.addBody();
            }
        }
    }]);

    return GameControl;
}();

exports.default = GameControl;
},{"./Snake":"module\\Snake.ts","./Food":"module\\Food.ts","./ScreenPanel":"module\\ScreenPanel.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

var _GameControl = require("./module/GameControl");

var _GameControl2 = _interopRequireDefault(_GameControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// food
// let food = new Food()
// console.log(food.X, food.Y)
// setTimeout(() => {
//     food.change()
//     console.log(food.X, food.Y)
// }, 3000)
// screenpanel
// let screenpanel = new ScreenPanel()
// console.log(screenpanel.score)
// snake
// let snake = new Snake()
// Game
var Game = new _GameControl2.default(); // import Food from "./module/Food";
// import ScreenPanel from "./module/ScreenPanel";
// import Snake from "./module/Snake"

Game.init();
// setInterval(() => { console.log(Game.direction) }, 1000)
},{"./module/GameControl":"module\\GameControl.ts"}],"C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '1313' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.a3576f2e.map