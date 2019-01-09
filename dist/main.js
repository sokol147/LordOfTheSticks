/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/battleground.js":
/*!****************************************!*\
  !*** ./src/components/battleground.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/components/player.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./src/components/enemy.js");
/* harmony import */ var _modal_ability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-ability */ "./src/components/modal-ability.js");
/* harmony import */ var _modal_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-task */ "./src/components/modal-task.js");
/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaderboard */ "./src/components/leaderboard.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound */ "./src/components/sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Battleground =
/*#__PURE__*/
function () {
  function Battleground(name) {
    _classCallCheck(this, Battleground);

    this.playerName = name;
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](this.playerName);
    this.enemy = new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.modalAbilities = new _modal_ability__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.modalTask = new _modal_task__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.leaderboard = new _leaderboard__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }

  _createClass(Battleground, [{
    key: "hideNameRequestForm",
    value: function hideNameRequestForm() {
      var nameRequestFrom = document.querySelector('.section__start');
      nameRequestFrom.style.top = '-1000px';
    }
  }, {
    key: "render",
    value: function render() {
      var root = document.querySelector('#root');
      var battlegroundSection = document.createElement('section');
      battlegroundSection.setAttribute('class', 'battleground');
      var playerSide = document.createElement('div');
      playerSide.setAttribute('class', 'player-side');
      var enemySide = document.createElement('div');
      enemySide.setAttribute('class', 'enemy-side');
      battlegroundSection.appendChild(playerSide);
      battlegroundSection.appendChild(enemySide);
      root.appendChild(battlegroundSection);
      var mySound = new _sound__WEBPACK_IMPORTED_MODULE_5__["default"]('./music/bg.mp3', true, 0.1);
      mySound.play();
      this.player.renderPlayerInfo();
      this.player.renderPlayerAvatar();
      this.player.renderPlayerAbilities();
      this.enemy.renderEnemyInfo();
      this.enemy.renderEnemyAvtar();
      this.modalAbilities.renderEmptyModal();
      this.modalTask.renderEmptyModal();
      this.leaderboard.renderEmptyTable();
    }
  }, {
    key: "renderEnemyLevel",
    value: function renderEnemyLevel() {
      var battleground = document.querySelector('.battleground');
      var enemyLevel = document.createElement('span');
      enemyLevel.setAttribute('class', 'battleground__level');
      enemyLevel.innerHTML = "\u0420\u0430\u0443\u043D\u0434 ".concat(this.enemy.getEnemyLevel());
      battleground.appendChild(enemyLevel);
    }
  }]);

  return Battleground;
}();

/* harmony default export */ __webpack_exports__["default"] = (Battleground);

/***/ }),

/***/ "./src/components/enemy.js":
/*!*********************************!*\
  !*** ./src/components/enemy.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enemy =
/*#__PURE__*/
function () {
  function Enemy() {
    _classCallCheck(this, Enemy);

    this.level = 1;
    this.helthPoints = 100;
  }

  _createClass(Enemy, [{
    key: "renderEnemyInfo",
    value: function renderEnemyInfo() {
      var enemySide = document.querySelector('.enemy-side');
      var info = document.createElement('div');
      info.setAttribute('class', 'enemy__info battleground__info');

      function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      function enemyNameGenerator() {
        var firstName = ['Ужасный', 'Злобный', 'Сопливый'];
        var middleName = ['Огр', 'Гном', 'Гоблин'];
        var lastName = ['Том', 'Макс', 'Дима'];
        var fullName = "".concat(random(firstName), " ").concat(random(middleName), " ").concat(random(lastName));
        return fullName;
      }

      var enemyName = document.createElement('span');
      enemyName.setAttribute('class', 'enemy__name battleground__name');
      enemyName.innerHTML = enemyNameGenerator();
      info.appendChild(enemyName);
      var healthBar = document.createElement('div');
      healthBar.setAttribute('class', 'health-bar__wrapper');
      info.appendChild(healthBar);
      var enemyHealthPoints = document.createElement('span');
      enemyHealthPoints.setAttribute('class', 'enemy__healthpoints');
      enemyHealthPoints.style.width = "".concat(this.helthPoints, "%");
      healthBar.appendChild(enemyHealthPoints);
      enemySide.appendChild(info);
    }
  }, {
    key: "renderEnemyAvtar",
    value: function renderEnemyAvtar() {
      var enemySide = document.querySelector('.enemy-side');
      var enemyAvatar = document.createElement('div');
      enemyAvatar.setAttribute('class', 'avatar enemy__avatar');
      enemyAvatar.innerHTML = '';

      function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      var enemyStyle = [1, 2, 3];
      var enemyHead = document.createElement('div');
      enemyHead.setAttribute('class', 'enemy__head');
      enemyHead.innerHTML = "<img src='img/enemy-head-".concat(random(enemyStyle), ".png' alt='enemy head'>");
      var enemyBody = document.createElement('div');
      enemyBody.setAttribute('class', 'enemy__body');
      enemyBody.innerHTML = "<img src='img/enemy-body-".concat(random(enemyStyle), ".png' alt='enemy body'>");
      var enemyLegs = document.createElement('div');
      enemyLegs.setAttribute('class', 'enemy__legs');
      enemyLegs.innerHTML = "<img src='img/enemy-leg-".concat(random(enemyStyle), ".png' alt='enemy legs'>");
      var enemyArms = document.createElement('div');
      enemyArms.setAttribute('class', 'enemy__arm');
      enemyArms.innerHTML = "<img src='img/enemy-weapon-".concat(random(enemyStyle), ".png' alt='enemy weapon'>");
      enemyAvatar.appendChild(enemyHead);
      enemyAvatar.appendChild(enemyBody);
      enemyAvatar.appendChild(enemyLegs);
      enemyAvatar.appendChild(enemyArms);
      enemySide.appendChild(enemyAvatar);
    }
  }, {
    key: "setLevelUp",
    value: function setLevelUp() {
      return this.level += 1;
    }
  }, {
    key: "getEnemyLevel",
    value: function getEnemyLevel() {
      return this.level;
    }
  }]);

  return Enemy;
}();

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/components/gameplay.js":
/*!************************************!*\
  !*** ./src/components/gameplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/components/player.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./src/components/enemy.js");
/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaderboard */ "./src/components/leaderboard.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound */ "./src/components/sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Gameplay =
/*#__PURE__*/
function () {
  function Gameplay() {
    _classCallCheck(this, Gameplay);

    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.enemy = new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.leaderboard = new _leaderboard__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.attackSound = new _sound__WEBPACK_IMPORTED_MODULE_3__["default"]('./music/attack.mp3', false, 0.5);
    this.healSound = new _sound__WEBPACK_IMPORTED_MODULE_3__["default"]('./music/heal.mp3', false, 0.5);
  }

  _createClass(Gameplay, [{
    key: "takeDamage",
    value: function takeDamage() {
      var playerHealtPoints = document.querySelector('.player__helthpoints');
      this.player.healthPoints = this.player.healthPoints - this.player.attack * this.enemy.level;
      this.enemyAttackAnimation();
      this.attackSound.play();

      if (this.player.healthPoints <= 0) {
        this.leaderboard.getInfo();
        var leaderboard = document.querySelector('.leaderboard');
        leaderboard.style.top = 0;
      }

      playerHealtPoints.style.width = "".concat(this.player.healthPoints, "%");
    }
  }, {
    key: "takeHeal",
    value: function takeHeal() {
      var playerHealtPoints = document.querySelector('.player__helthpoints');
      this.player.healthPoints = this.player.healthPoints + this.player.attack;
      this.healSound.play();
      this.healAnimation();

      if (this.player.healthPoints >= 100) {
        this.player.healthPoints = 100;
      }

      playerHealtPoints.style.width = "".concat(this.player.healthPoints, "%");
    }
  }, {
    key: "takeDamageFromPlayer",
    value: function takeDamageFromPlayer() {
      var enemyHealthpoints = document.querySelector('.enemy__healthpoints');
      this.enemy.helthPoints = this.enemy.helthPoints - 20;
      this.attackSound.play();
      this.playerAttackAnimation();

      if (this.enemy.helthPoints <= 0) {
        this.enemy.helthPoints = 100;
        this.enemy.setLevelUp();
        var enemyLevel = document.querySelector('.battleground__level');
        enemyLevel.innerHTML = "\u0420\u0430\u0443\u043D\u0434 ".concat(this.enemy.level);
        var enemySide = document.querySelector('.enemy-side');
        enemySide.innerHTML = '';
        this.enemy.renderEnemyInfo();
        this.enemy.renderEnemyAvtar();
      }

      enemyHealthpoints.style.width = "".concat(this.enemy.helthPoints, "%");
    }
  }, {
    key: "healAnimation",
    value: function healAnimation() {
      var playerBody = document.querySelector('.avatar__body');
      playerBody.style.animation = 'healAnimation 3s';
      setTimeout(function () {
        playerBody.style.animation = 'none';
      }, 3000);
    }
  }, {
    key: "playerAttackAnimation",
    value: function playerAttackAnimation() {
      var playerWeapon = document.querySelector('.avatar__arm');
      playerWeapon.style.animation = 'attackPlayer 1s';
      setTimeout(function () {
        playerWeapon.style.animation = 'none';
      }, 1000);
    }
  }, {
    key: "enemyAttackAnimation",
    value: function enemyAttackAnimation() {
      var enemyWeapon = document.querySelector('.enemy__arm');
      enemyWeapon.style.animation = 'attack 1s';
      setTimeout(function () {
        enemyWeapon.style.animation = 'none';
      }, 1000);
    }
  }]);

  return Gameplay;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gameplay);

/***/ }),

/***/ "./src/components/leaderboard.js":
/*!***************************************!*\
  !*** ./src/components/leaderboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/components/player.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./src/components/enemy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Leaderboard =
/*#__PURE__*/
function () {
  function Leaderboard() {
    _classCallCheck(this, Leaderboard);

    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.enemy = new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.leaderboardArray = [{
      name: 'Вася',
      score: 45
    }, {
      name: 'Коля',
      score: 12
    }, {
      name: 'Миша',
      score: 4
    }, {
      name: 'Оля',
      score: 6
    }, {
      name: 'Катя',
      score: 17
    }];
  }

  _createClass(Leaderboard, [{
    key: "renderEmptyTable",
    value: function renderEmptyTable() {
      var root = document.querySelector('#root');
      var leaderboard = document.createElement('div');
      leaderboard.setAttribute('class', 'leaderboard');
      leaderboard.innerHTML = "\n      <div class='leaderboard__inner'>\n        <span class='leaderboard__header'>\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432</span>\n        <span class='leaderboard__result'></span>\n        <table id='leaderboard__table'>\n        </table>\n      </div>\n    ";
      root.appendChild(leaderboard);
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      var playerName = document.querySelector('.player__name').innerHTML;
      var enemyCounter = document.querySelector('.battleground__level').innerHTML;
      var level = enemyCounter.slice(-1);
      var resultObj = {
        name: playerName,
        score: +level - 1
      };
      this.leaderboardArray.push(resultObj);

      var sortedLeader = _.reverse(_.sortBy(this.leaderboardArray, [function (o) {
        return o.score;
      }]));

      var leaderboardTable = document.querySelector('#leaderboard__table');

      for (var i = 0; i < this.leaderboardArray.length; i++) {
        var tr = document.createElement('tr');
        var tableName = document.createElement('td');
        tableName.innerHTML = sortedLeader[i].name;
        var tableScore = document.createElement('td');
        tableScore.setAttribute('class', 'leaderboard__score');
        tableScore.innerHTML = sortedLeader[i].score;
        tr.appendChild(tableName);
        tr.appendChild(tableScore);
        leaderboardTable.appendChild(tr);
      }

      var result = "\u0418\u0433\u0440\u043E\u043A ".concat(playerName, " \u043F\u043E\u0431\u0435\u0434\u0438\u043B ").concat(level - 1, " \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432");
      var leaderboardResult = document.querySelector('.leaderboard__result');
      leaderboardResult.innerHTML = result;
    }
  }]);

  return Leaderboard;
}();

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

/***/ }),

/***/ "./src/components/modal-ability.js":
/*!*****************************************!*\
  !*** ./src/components/modal-ability.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-list */ "./src/components/tasks-list.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Abilities =
/*#__PURE__*/
function () {
  function Abilities() {
    _classCallCheck(this, Abilities);

    this.tasks = new _tasks_list__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Abilities, [{
    key: "renderEmptyModal",
    value: function renderEmptyModal() {
      var root = document.querySelector('#root');
      var modal = document.createElement('div');
      modal.setAttribute('class', 'modal__abilities');
      modal.innerHTML = "\n      <div class=\"modal fade\" id=\"abilitiesModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u0435</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\" id=\"modal-abilities__body\">\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
      root.appendChild(modal);
      this.addAttackEventHandler();
    }
  }, {
    key: "addAttackEventHandler",
    value: function addAttackEventHandler() {
      var _this = this;

      var healButton = document.querySelector('#heal-btn');
      healButton.addEventListener('click', function () {
        _this.renderHealAbilities();
      });
      var attackButton = document.querySelector('#attack-btn');
      attackButton.addEventListener('click', function () {
        _this.renderAttackAbitities();
      });
    }
  }, {
    key: "renderAttackAbitities",
    value: function renderAttackAbitities() {
      var _this2 = this;

      var attackTasks = [{
        name: 'Математика',
        id: 'taskMath' // ,{
        //   name: 'Вставить нужное число',
        //   id: 'taskInsertNumber'
        // }

      }];
      var modalBody = document.querySelector('#modal-abilities__body');
      modalBody.innerHTML = '';

      for (var i = 0; i < attackTasks.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'btn--abilities');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#taskModal');
        button.setAttribute('id', "".concat(attackTasks[i].id));
        button.innerHTML = "".concat(attackTasks[i].name);
        button.addEventListener('click', function (e) {
          $('#abilitiesModal').modal('hide');

          _this2.tasks.taskMath();
        });
        modalBody.appendChild(button);
      }
    }
  }, {
    key: "renderHealAbilities",
    value: function renderHealAbilities() {
      var _this3 = this;

      var healTasks = [{
        name: 'Русский язык',
        id: 'taskRusLang'
      }];
      var modalBody = document.querySelector('#modal-abilities__body');
      modalBody.innerHTML = '';

      for (var i = 0; i < healTasks.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'btn--abilities');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#taskModal');
        button.setAttribute('id', "".concat(healTasks[i].id));
        button.innerHTML = "".concat(healTasks[i].name);
        button.addEventListener('click', function (e) {
          $('#abilitiesModal').modal('hide');

          _this3.tasks.taskRusLang();
        });
        modalBody.appendChild(button);
      }
    }
  }]);

  return Abilities;
}();

/* harmony default export */ __webpack_exports__["default"] = (Abilities);

/***/ }),

/***/ "./src/components/modal-task.js":
/*!**************************************!*\
  !*** ./src/components/modal-task.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ "./src/components/gameplay.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Tasks =
/*#__PURE__*/
function () {
  function Tasks() {
    _classCallCheck(this, Tasks);

    this.gameplay = new _gameplay__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Tasks, [{
    key: "renderEmptyModal",
    value: function renderEmptyModal() {
      var root = document.querySelector('#root');
      var modal = document.createElement('div');
      modal.setAttribute('class', 'modal__task');
      modal.innerHTML = "\n    <div class=\"modal fade\" id=\"taskModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">\u0420\u0435\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\" id=\"modal-task__body\">\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
      root.appendChild(modal);
    }
  }]);

  return Tasks;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tasks);

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/components/enemy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player =
/*#__PURE__*/
function () {
  function Player(name) {
    _classCallCheck(this, Player);

    this.name = name;
    this.healthPoints = 100;
    this.attack = 20;
    this.enemy = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Player, [{
    key: "renderPlayerInfo",
    value: function renderPlayerInfo() {
      var playerSide = document.querySelector('.player-side');
      var info = document.createElement('div');
      info.setAttribute('class', 'player__info battleground__info');
      var playerName = document.createElement('span');
      playerName.setAttribute('class', 'player__name battleground__name');
      playerName.innerHTML = this.name;
      info.appendChild(playerName);
      var healthBar = document.createElement('div');
      healthBar.setAttribute('class', 'health-bar__wrapper');
      info.appendChild(healthBar);
      var playerHealthPoints = document.createElement('span');
      playerHealthPoints.setAttribute('class', 'player__helthpoints');
      playerHealthPoints.style.width = "".concat(this.healthPoints, "%");
      healthBar.appendChild(playerHealthPoints);
      playerSide.appendChild(info);
    }
  }, {
    key: "renderPlayerAvatar",
    value: function renderPlayerAvatar() {
      var playerSide = document.querySelector('.player-side');
      var playerAvatar = document.createElement('div');
      playerAvatar.setAttribute('class', 'player__avatar avatar');
      var playerHead = document.createElement('div');
      playerHead.setAttribute('class', 'avatar__head');
      playerHead.innerHTML = '<img src=\'img/player-head.png\' alt=\'player head\'>';
      var playerBody = document.createElement('div');
      playerBody.setAttribute('class', 'avatar__body');
      playerBody.innerHTML = '<img src=\'img/player-body.png\' alt=\'player body\'>';
      var playerLegs = document.createElement('div');
      playerLegs.setAttribute('class', 'avatar__legs');
      playerLegs.innerHTML = '<img src=\'img/player-leg.png\' alt=\'player legs\'>';
      var playerArms = document.createElement('div');
      playerArms.setAttribute('class', 'avatar__arm');
      playerArms.innerHTML = '<img src=\'img/player-weapon.png\' alt=\'player weapon\'>';
      playerAvatar.appendChild(playerHead);
      playerAvatar.appendChild(playerBody);
      playerAvatar.appendChild(playerLegs);
      playerAvatar.appendChild(playerArms);
      playerSide.appendChild(playerAvatar);
    }
  }, {
    key: "renderPlayerAbilities",
    value: function renderPlayerAbilities() {
      var playerSide = document.querySelector('.player-side');
      var playerAbilities = document.createElement('div');
      playerAbilities.setAttribute('class', 'player__abilities');
      var healAbility = document.createElement('div');
      healAbility.setAttribute('class', 'player__abitity');
      var healTitle = document.createElement('span');
      healTitle.innerHTML = 'Лечение';
      healTitle.setAttribute('class', 'ability__title');
      var healButton = document.createElement('button');
      healButton.setAttribute('type', 'button');
      healButton.setAttribute('class', 'player__ability-btn');
      healButton.setAttribute('id', 'heal-btn');
      healButton.setAttribute('data-toggle', 'modal');
      healButton.setAttribute('data-target', '#abilitiesModal');
      healButton.innerHTML = '<img src=\'img/heal-icon.png\' alt=\'heal icon\' class=\'ability-icon\'>';
      healAbility.appendChild(healButton);
      healAbility.appendChild(healTitle);
      var attackAbility = document.createElement('div');
      attackAbility.setAttribute('class', 'player__abitity');
      var attackTitle = document.createElement('span');
      attackTitle.innerHTML = 'Атака';
      attackTitle.setAttribute('class', 'ability__title');
      var attackButton = document.createElement('button');
      attackButton.setAttribute('type', 'button');
      attackButton.setAttribute('class', 'player__ability-btn');
      attackButton.setAttribute('id', 'attack-btn');
      attackButton.setAttribute('data-toggle', 'modal');
      attackButton.setAttribute('data-target', '#abilitiesModal');
      attackButton.innerHTML = '<img src=\'img/attack-icon.png\' alt=\'attack icon\' class=\'ability-icon\'>';
      attackAbility.appendChild(attackButton);
      attackAbility.appendChild(attackTitle);
      playerAbilities.appendChild(healAbility);
      playerAbilities.appendChild(attackAbility);
      playerSide.appendChild(playerAbilities);
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/components/sound.js":
/*!*********************************!*\
  !*** ./src/components/sound.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sound(src, loop, volume) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.loop = loop;
  this.sound.volume = volume;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);

  this.play = function () {
    this.sound.play();
  };

  this.stop = function () {
    this.sound.pause();
  };
}

/* harmony default export */ __webpack_exports__["default"] = (sound);

/***/ }),

/***/ "./src/components/tasks-list.js":
/*!**************************************!*\
  !*** ./src/components/tasks-list.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ "./src/components/gameplay.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var TasksList =
/*#__PURE__*/
function () {
  function TasksList() {
    _classCallCheck(this, TasksList);

    this.gameplay = new _gameplay__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(TasksList, [{
    key: "taskRusLang",
    value: function taskRusLang() {
      var _this = this;

      function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      var vocabulary = ['корова', 'молоко', 'золото'];
      var answer = random(vocabulary);
      var taskChar = answer.split('');
      taskChar[Math.floor(Math.random() * taskChar.length)] = '..';
      var task = taskChar.join('');
      var modalBody = document.querySelector('#modal-task__body');
      modalBody.innerHTML = '';
      var modalTitle = document.createElement('span');
      modalTitle.innerHTML = 'Введите слово целиком';
      var form = document.createElement('form');
      form.setAttribute('class', 'modal-task__form');
      var example = document.createElement('span');
      example.setAttribute('class', 'task__example');
      example.innerHTML = task;
      var input = document.createElement('input');
      input.setAttribute('class', 'modal-task__input');
      modalBody.appendChild(modalTitle);
      modalBody.appendChild(form);
      form.appendChild(example);
      form.appendChild(input);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        $('#taskModal').modal('hide');

        if (input.value === answer) {
          _this.gameplay.takeHeal();
        } else {
          _this.gameplay.takeDamage();
        }
      });
    }
  }, {
    key: "taskMath",
    value: function taskMath() {
      var _this2 = this;

      function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var operators = ['+', '-', '*'];
      var example = "".concat(random(numbers), " ").concat(random(operators), " ").concat(random(numbers));
      var answer = eval(example);
      var modalBody = document.querySelector('#modal-task__body');
      modalBody.innerHTML = '';
      var modalTitle = document.createElement('span');
      modalTitle.innerHTML = 'Решите пример';
      var form = document.createElement('form');
      form.setAttribute('class', 'modal-task__form');
      var exampleField = document.createElement('span');
      exampleField.setAttribute('class', 'task__example');
      exampleField.innerHTML = example;
      var input = document.createElement('input');
      input.setAttribute('class', 'modal-task__input');
      modalBody.appendChild(modalTitle);
      modalBody.appendChild(form);
      form.appendChild(exampleField);
      form.appendChild(input);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        $('#taskModal').modal('hide');

        if (+input.value === answer) {
          _this2.gameplay.takeDamageFromPlayer();
        } else {
          _this2.gameplay.takeDamage();
        }
      });
    }
  }]);

  return TasksList;
}();

/* harmony default export */ __webpack_exports__["default"] = (TasksList);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_battleground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/battleground */ "./src/components/battleground.js");

var userNameForm = document.querySelector('.form-start');
userNameForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var userNameInput = document.querySelector('.form-start__input');
  var name = userNameInput.value;
  var battleground = new _components_battleground__WEBPACK_IMPORTED_MODULE_0__["default"](name);
  battleground.hideNameRequestForm();
  battleground.render();
  battleground.renderEnemyLevel();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map