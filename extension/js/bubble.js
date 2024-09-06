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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var md5 = __webpack_require__(9);

var Youdao = /*#__PURE__*/function () {
  function Youdao(appKey, appSecret, resType, query) {
    _classCallCheck(this, Youdao);

    var _ref = [appKey, appSecret, resType, query];
    this.appKey = _ref[0];
    this.appSecret = _ref[1];
    this.resType = _ref[2];
    this.query = _ref[3];
    // appkey和appsecret需要去有道智云申请，http://ai.youdao.com/index.s
    // let appkey = '1bbc9fe90f41c3ea';
    // let appsecret = 'FXsSxdu0OxPWcBhvkdtUcy08SCiVg2v3';
    var salt = Date.now() + '';
    var sign = md5(this.appKey + query + salt + this.appSecret);
    this.requestUrl = "https://openapi.youdao.com/api?from=auto&to=auto&appKey=".concat(appKey, "&salt=").concat(salt, "&sign=").concat(sign, "&q=").concat(encodeURIComponent(this.query));
  }

  _createClass(Youdao, [{
    key: "isChinese",
    value: function isChinese(str) {
      var re = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+$/gi;
      return re.test(str);
    }
  }, {
    key: "removeReferrer",
    value: function removeReferrer() {
      var meta = document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'no-referrer';
      this.noReferrer = document.querySelector('head').appendChild(meta);
    }
  }, {
    key: "parseJsonContent",
    value: function parseJsonContent(res) {
      var word,
          explains,
          pronoun,
          wav,
          relate = [],
          more;
      res = typeof res === 'string' ? JSON.parse(res) : res;
      word = this.query;

      if (!res) {
        explains = 'Nothing found.';
      } else if (Object.is(_typeof(res), 'string')) {
        explains = res.toString();
      } else if (!res.basic) {
        explains = res.translation[0];
      } else {
        explains = res.basic.explains;
        pronoun = res.basic.phonetic;
      }

      wav = res.speakUrl;
      relate = res.web;
      res.webdict && (more = res.webdict.url);
      return {
        word: word,
        wav: wav,
        explains: explains,
        pronoun: pronoun,
        relate: relate,
        more: more
      };
    }
  }, {
    key: "parseXmlContent",
    value: function parseXmlContent(res) {
      var word,
          explains,
          pronoun,
          wav,
          relate = [],
          more;
      res = new DOMParser().parseFromString(res, 'text/xml');
      word = res.querySelector('query').textContent.toString().trim();

      if (!res) {
        explains = 'Nothing found.';
      } else if (Object.is(_typeof(res), 'string')) {
        explains = res.toString().trim();
      } else if (!res.querySelectorAll('basic').length) {
        explains = res.querySelector('translation').querySelector('paragraph').textContent.toString().trim();
      } else {
        var explainsNode = res.querySelector('basic').querySelector('explains').querySelectorAll('ex');
        explains = _toConsumableArray(explainsNode).map(function (v) {
          return v.textContent.toString().trim();
        });
        pronoun = res.querySelector('basic').querySelector('phonetic').textContent.toString().trim() || undefined;
        !this.isChinese(word) && (wav = "https://dict.youdao.com/dictvoice?audio=".concat(word, "&type=2"));

        var relates = _toConsumableArray(res.querySelector('web').querySelector('explain'));

        if (relates.length) {
          relate = relates.map(function (v) {
            var dummy = {};
            dummy.key = v.querySelector('key').textContent.toString().trim();
            dummy.relate = _toConsumableArray(v.querySelector('value')).map(function (v) {
              return val.textContent.toString().trim();
            });
            return dummy;
          });
        }
      }

      more = res.querySelector('query')[0].textContent.toString().trim();
      return {
        word: word,
        wav: wav,
        explains: explains,
        pronoun: pronoun,
        relate: relate,
        more: more
      };
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var _this2 = this;

      var _this = this;

      _this.removeReferrer();

      return new Promise(function (resolve, reject) {
        fetch("".concat(_this2.requestUrl)).then(function (res) {
          if (res.ok) {
            res.json().then(function (data) {
              var result;

              if (data.errorCode !== '0') {
                reject('Query failed');
                return;
              }

              result = _this.parseJsonContent(data);
              resolve(result);
            });
          } else {
            reject('Query failed');
          }
        }, function (err) {
          reject('Query failed');
        }).then(function (res) {
          if (_this.noReferrer) {
            _this.noReferrer.remove();

            _this.noReferrer = null;
          }
        });
      });
    }
  }], [{
    key: "addToWordBook",
    value: function addToWordBook(word) {
      var wordBookLoginUrl = 'https://account.youdao.com/login?service=dict&back_url=https://dict.youdao.com/wordbook/wordlist%3Fkeyfrom%3Dnull';
      var addToWordBookApi = 'https://dict.youdao.com/wordbook/ajax?action=addword&q=';
      var wordBookDomain = 'dict.youdao.com'; // I think the api is made by an intern: adddone => addone

      var noUser = 'nouser',
          addOne = 'adddone';
      var headers = new Headers();

      if (chrome && chrome.cookies) {
        chrome.cookies.getAll({}, function (cookies) {
          cookies.forEach(function (cookie) {
            if (Object.is(cookie.domain, wordBookDomain)) {
              headers.append('Cookie', "".concat(cookie.name, "=").concat(cookie.value));
            }
          });
        });
      }

      return new Promise(function (resolve, reject) {
        __webpack_require__(10)("".concat(addToWordBookApi).concat(word), {
          method: 'GET',
          headers: headers,
          mode: 'cors',
          cache: 'default'
        }).then(function (res) {
          if (res.ok) {
            res.json().then(function (data) {
              if (Object.is(data.message, noUser)) {
                if (chrome && chrome.tabs) {
                  chrome.tabs.create({
                    url: wordBookLoginUrl
                  });
                } else {
                  window.open(wordBookLoginUrl, '_blank');
                }

                resolve({
                  added: false
                });
              } else if (Object.is(data.message, addOne)) {
                resolve({
                  added: true
                });
              }
            });
          } else {
            reject();
          }
        }, function (err) {
          reject(err);
        });
      });
    }
  }]);

  return Youdao;
}();

/* harmony default export */ __webpack_exports__["a"] = (Youdao);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */
;

(function ($) {
  'use strict';
  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */

  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  }
  /*
  * Bitwise rotate a 32-bit number to the left.
  */


  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  /*
  * These functions implement the four basic operations the algorithm uses.
  */


  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }

  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
  }

  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
  }

  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */


  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }

    return [a, b, c, d];
  }
  /*
  * Convert an array of little-endian words to a string
  */


  function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;

    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }

    return output;
  }
  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */


  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;

    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }

    var length8 = input.length * 8;

    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }

    return output;
  }
  /*
  * Calculate the MD5 of a raw string
  */


  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
  }
  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */


  function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;

    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }

    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }

    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }
  /*
  * Convert a raw string to a hex string
  */


  function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;

    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }

    return output;
  }
  /*
  * Encode a string as utf-8
  */


  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }
  /*
  * Take string arguments and return either raw or hex encoded strings
  */


  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
  }

  function hexMD5(s) {
    return rstr2hex(rawMD5(s));
  }

  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
  }

  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
  }

  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }

      return rawMD5(string);
    }

    if (!raw) {
      return hexHMACMD5(key, string);
    }

    return rawHMACMD5(key, string);
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return md5;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function normalizeName(name) {
  if (typeof name !== 'string') {
    name = name.toString();
  }

  if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name');
  }

  return name.toLowerCase();
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = value.toString();
  }

  return value;
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function (value, name) {
      this.append(name, value);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function (name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var list = this.map[name];

  if (!list) {
    list = [];
    this.map[name] = list;
  }

  list.push(value);
};

Headers.prototype['delete'] = function (name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function (name) {
  var values = this.map[normalizeName(name)];
  return values ? values[0] : null;
};

Headers.prototype.getAll = function (name) {
  return this.map[normalizeName(name)] || [];
};

Headers.prototype.has = function (name) {
  return this.map.hasOwnProperty(normalizeName(name));
};

Headers.prototype.set = function (name, value) {
  this.map[normalizeName(name)] = [normalizeValue(value)];
};

Headers.prototype.forEach = function (callback, thisArg) {
  Object.getOwnPropertyNames(this.map).forEach(function (name) {
    this.map[name].forEach(function (value) {
      callback.call(thisArg, value, name, this);
    }, this);
  }, this);
};

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'));
  }

  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  reader.readAsArrayBuffer(blob);
  return fileReaderReady(reader);
}

function readBlobAsText(blob) {
  var reader = new FileReader();
  reader.readAsText(blob);
  return fileReaderReady(reader);
}

var support = {
  blob: 'FileReader' in self && 'Blob' in self && function () {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: 'FormData' in self
};

function Body() {
  this.bodyUsed = false;

  this._initBody = function (body) {
    this._bodyInit = body;

    if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (!body) {
      this._bodyText = '';
    } else {
      throw new Error('unsupported BodyInit type');
    }
  };

  if (support.blob) {
    this.blob = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };

    this.arrayBuffer = function () {
      return this.blob().then(readBlobAsArrayBuffer);
    };

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };
  } else {
    this.text = function () {
      var rejected = consumed(this);
      return rejected ? rejected : Promise.resolve(this._bodyText);
    };
  }

  if (support.formData) {
    this.formData = function () {
      return this.text().then(decode);
    };
  }

  this.json = function () {
    return this.text().then(JSON.parse);
  };

  return this;
} // HTTP methods whose capitalization should be normalized


var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request(url, options) {
  options = options || {};
  this.url = url;
  this.credentials = options.credentials || 'omit';
  this.headers = new Headers(options.headers);
  this.method = normalizeMethod(options.method || 'GET');
  this.mode = options.mode || null;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
    throw new TypeError('Body not allowed for GET or HEAD requests');
  }

  this._initBody(options.body);
}

function decode(body) {
  var form = new FormData();
  body.trim().split('&').forEach(function (bytes) {
    if (bytes) {
      var split = bytes.split('=');
      var name = split.shift().replace(/\+/g, ' ');
      var value = split.join('=').replace(/\+/g, ' ');
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}

function headers(xhr) {
  var head = new Headers();
  var pairs = xhr.getAllResponseHeaders().trim().split('\n');
  pairs.forEach(function (header) {
    var split = header.trim().split(':');
    var key = split.shift().trim();
    var value = split.join(':').trim();
    head.append(key, value);
  });
  return head;
}

Body.call(Request.prototype);

function Response(bodyInit, options) {
  if (!options) {
    options = {};
  }

  this._initBody(bodyInit);

  this.type = 'default';
  this.url = null;
  this.status = options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = options.statusText;
  this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
  this.url = options.url || '';
}

Body.call(Response.prototype);
self.Headers = Headers;
self.Request = Request;
self.Response = Response;

self.fetch = function (input, init) {
  // TODO: Request constructor should accept input, init
  var request;

  if (Request.prototype.isPrototypeOf(input) && !init) {
    request = input;
  } else {
    request = new Request(input, init);
  }

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    function responseURL() {
      if ('responseURL' in xhr) {
        return xhr.responseURL;
      } // Avoid security warnings on getResponseHeader when not allowed by CORS


      if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
      }

      return;
    }

    xhr.onload = function () {
      var status = xhr.status === 1223 ? 204 : xhr.status;

      if (status < 100 || status > 599) {
        reject(new TypeError('Network request failed'));
        return;
      }

      var options = {
        status: status,
        statusText: xhr.statusText,
        headers: headers(xhr),
        url: responseURL()
      };
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      resolve(new Response(body, options));
    };

    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.open(request.method, request.url, true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob';
    }

    request.headers.forEach(function (value, name) {
      xhr.setRequestHeader(name, value);
    });
    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  });
};

self.fetch.polyfill = true;
module.exports = self.fetch;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(32);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, explains, loading, pronoun, relate, wav, word, wordReg, wordbook) {
      pug_html = pug_html + "\u003Cdiv class=\"y-bubble\" id=\"y-bubble\" style=\"left: -999px; top: -999px;\"\u003E\u003Cdiv class=\"y-arrow\" id=\"y-arrow\"\u003E\u003C\u002Fdiv\u003E";
if (loading) {
pug_html = pug_html + "\u003Cdiv class=\"y-searching\"\u003ESearching...\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"y-bubble-main\"\u003E\u003Cdiv class=\"y-bubble-query\"\u003E";
if (word) {
pug_html = pug_html + "\u003Cb class=\"y-bubble-word\"\u003E" + (pug.escape(null == (pug_interp = word) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
}
if (pronoun) {
pug_html = pug_html + "\u003Ci\u003E&nbsp;&nbsp;\u002F" + (pug.escape(null == (pug_interp = pronoun) ? "" : pug_interp)) + "\u002F&nbsp;&nbsp;";
if (wav) {
pug_html = pug_html + "\u003Ca id=\"y-bubble-wav\" href=\"javascript:;\"\u003E";
pug_mixins["audio"] = pug_interp = function(className){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Csvg" + (pug.attr("class", pug.classes([`${className || ""}`], [true]), false, true)+" id=\"Layer_1\" enable-background=\"new 0 0 24 24\" width=\"1em\" height=\"1em\" version=\"1.1\" viewbox=\"0 0 24 24\" xml:space=\"preserve\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" style=\"enable-background:new 0 0 465.256 465.256; fill: #ffffff; vertical-align: text-top;\"") + "\u003E\u003Cg\u003E\u003Cg\u003E\u003Cpath clip-rule=\"evenodd\" d=\"M19.779,3.349l-1.111,1.664C20.699,6.663,22,9.179,22,12    c0,2.822-1.301,5.338-3.332,6.988l1.111,1.663C22.345,18.639,24,15.516,24,12C24,8.485,22.346,5.362,19.779,3.349z M17.55,6.687    l-1.122,1.68c0.968,0.913,1.58,2.198,1.58,3.634s-0.612,2.722-1.58,3.635l1.122,1.68C19.047,16.03,20,14.128,20,12    C20,9.873,19.048,7.971,17.55,6.687z M12,1c-1.177,0-1.533,0.684-1.533,0.684S7.406,5.047,5.298,6.531C4.91,6.778,4.484,7,3.73,7    H2C0.896,7,0,7.896,0,9v6c0,1.104,0.896,2,2,2h1.73c0.754,0,1.18,0.222,1.567,0.469c2.108,1.484,5.169,4.848,5.169,4.848    S10.823,23,12,23c1.104,0,2-0.895,2-2V3C14,1.895,13.104,1,12,1z\" fill-rule=\"evenodd\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fg\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
};
pug_mixins["audio"]();
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Caudio" + (" id=\"y-audio\" style=\"display: none;\""+pug.attr("src", `${wav}`, true, true)) + "\u003E\u003C\u002Faudio\u003E";
}
pug_html = pug_html + "\u003C\u002Fi\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"y-bubble-explains\"\u003E";
if (explains) {
if (Array.isArray(explains)) {
// iterate explains
;(function(){
  var $$obj = explains;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var explain = $$obj[pug_index0];
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = explain) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var explain = $$obj[pug_index0];
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = explain) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = explains) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"y-bubble-relate\"\u003E";
if (relate) {
// iterate relate
;(function(){
  var $$obj = relate;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var r = $$obj[pug_index1];
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = r.key) ? "" : pug_interp)) + ":&nbsp;";
if (r.value) {
pug_html = pug_html + (pug.escape(null == (pug_interp = r.value) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var r = $$obj[pug_index1];
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = r.key) ? "" : pug_interp)) + ":&nbsp;";
if (r.value) {
pug_html = pug_html + (pug.escape(null == (pug_interp = r.value) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"y-bubble-more y-clearfix\"\u003E";
var wordReg = /^\b[a-zA-Z0-9]+\b$/ig;
if (wordReg.test(word) && wordbook) {
pug_html = pug_html + "\u003Cspan class=\"y-pull-left\"\u003E";
pug_mixins["notebook"] = pug_interp = function(className){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Csvg" + (pug.attr("class", pug.classes([`${className || ""}`], [true]), false, true)+" id=\"Layer_1\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\" width=\".8em\" height=\"1em\" viewbox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\" style=\"fill: #ffffff; vertical-align: text-top; margin: 0 .2em;\"") + "\u003E\u003Cpath d=\"M448,0H64C46.328,0,32,14.313,32,32v448c0,17.688,14.328,32,32,32h288l128-128V32C480,14.313,465.688,0,448,0z M352,466.75V384h82.75L352,466.75z M448,352h-96c-17.688,0-32,14.313-32,32v96H64V32h384V352z M96,112c0-8.844,7.156-16,16-16h288c8.844,0,16,7.156,16,16s-7.156,16-16,16H112C103.156,128,96,120.844,96,112z M96,208c0-8.844,7.156-16,16-16h288c8.844,0,16,7.156,16,16s-7.156,16-16,16H112C103.156,224,96,216.844,96,208z M96,304c0-8.844,7.156-16,16-16h288c8.844,0,16,7.156,16,16s-7.156,16-16,16H112C103.156,320,96,312.844,96,304z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";
};
pug_mixins["notebook"]();
pug_html = pug_html + "\u003Ca" + (" id=\"addToWordBookAction\" href=\"javascript:;\""+pug.attr("data-word", `${word}`, true, true)) + "\u003E添加到有道单词本\u003C\u002Fa\u003E";
pug_mixins["loading"] = pug_interp = function(className){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["spinner",className], [false,true]), false, true)+" id=\"ySpinner\"") + "\u003E\u003Cdiv class=\"double-bounce1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"double-bounce2\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["loading"]('hide');
pug_html = pug_html + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003Ca" + (" class=\"y-pull-right\""+pug.attr("href", `http://dict.youdao.com/search?q=${word}`, true, true)+" target=\"_blank\"") + "\u003Emore \u003E\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "explains" in locals_for_with ?
        locals_for_with.explains :
        typeof explains !== 'undefined' ? explains : undefined, "loading" in locals_for_with ?
        locals_for_with.loading :
        typeof loading !== 'undefined' ? loading : undefined, "pronoun" in locals_for_with ?
        locals_for_with.pronoun :
        typeof pronoun !== 'undefined' ? pronoun : undefined, "relate" in locals_for_with ?
        locals_for_with.relate :
        typeof relate !== 'undefined' ? relate : undefined, "wav" in locals_for_with ?
        locals_for_with.wav :
        typeof wav !== 'undefined' ? wav : undefined, "word" in locals_for_with ?
        locals_for_with.word :
        typeof word !== 'undefined' ? word : undefined, "wordReg" in locals_for_with ?
        locals_for_with.wordReg :
        typeof wordReg !== 'undefined' ? wordReg : undefined, "wordbook" in locals_for_with ?
        locals_for_with.wordbook :
        typeof wordbook !== 'undefined' ? wordbook : undefined));
    ;;return pug_html;};
module.exports = template;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
}

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '',
    className,
    padding = '',
    escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '',
    padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
}

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (
    val === false ||
    val == null ||
    (!val && (key === 'class' || key === 'style'))
  ) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if (
    (type === 'object' || type === 'function') &&
    typeof val.toJSON === 'function'
  ) {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + "='" + val.replace(/'/g, '&#39;') + "'";
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse) {
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
}

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html) {
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        escape = '&quot;';
        break;
      case 38:
        escape = '&amp;';
        break;
      case 60:
        escape = '&lt;';
        break;
      case 62:
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
}

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(33).readFileSync(filename, 'utf8');
  } catch (ex) {
    pug_rethrow(err, null, lineno);
  }
  var context = 3,
    lines = str.split('\n'),
    start = Math.max(lineno - context, 0),
    end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines
    .slice(start, end)
    .map(function(line, i) {
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    })
    .join('\n');

  // Alter exception message
  err.path = filename;
  try {
    err.message =
      (filename || 'Pug') +
      ':' +
      lineno +
      '\n' +
      context +
      '\n\n' +
      err.message;
  } catch (e) {}
  throw err;
}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_bubble_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _style_bubble_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_bubble_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_youdao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Bubble = /*#__PURE__*/function () {
  function Bubble() {
    _classCallCheck(this, Bubble);
  }

  _createClass(Bubble, null, [{
    key: "renderBubble",
    value: function renderBubble(tpl) {
      if (document.querySelector('#y-bubble')) {
        var unnecessaryBubble = document.querySelector('#y-bubble');
        unnecessaryBubble.parentNode.removeChild(unnecessaryBubble);
      }

      var selection = window.getSelection();
      var range = selection.getRangeAt(0);
      var rect = range.getBoundingClientRect();
      var bubbleLeft, bubbleTop, arrowRelativeLeft;
      var dummy = document.createElement('DIV');
      dummy.innerHTML = tpl.trim();
      var dummyChild = dummy.childNodes;
      document.body.appendChild(dummyChild[0]);
      var bubble = document.querySelector('#y-bubble');
      bubbleLeft = rect.left + rect.width / 2 - bubble.offsetWidth / 2;

      if (bubbleLeft < 5) {
        bubbleLeft = 5;
        arrowRelativeLeft = rect.left + rect.width / 2 - 15;
      } else if (bubbleLeft + bubble.offsetWidth > document.body.offsetWidth + 5) {
        bubbleLeft = document.body.offsetWidth - bubble.offsetWidth - 5;
        arrowRelativeLeft = rect.left - bubbleLeft - 10 + rect.width / 2;
      } else {
        arrowRelativeLeft = bubble.offsetWidth / 2 - 10;
      }

      if (rect.top < bubble.offsetHeight) {
        bubbleTop = rect.top + window.scrollY + rect.height + 10;
        var bubbleArrow = document.querySelector('#y-arrow');
        bubbleArrow.style.borderBottom = '10px solid rgba(13, 13, 13, .8)';
        bubbleArrow.style.borderTop = 0;
        bubbleArrow.style.top = '-10px';
        bubbleArrow.style.left = "".concat(arrowRelativeLeft, "px");
      } else {
        bubbleTop = rect.top + window.scrollY - bubble.offsetHeight - 10;

        var _bubbleArrow = document.querySelector('#y-arrow');

        _bubbleArrow.style.borderBottom = 0;
        _bubbleArrow.style.borderTop = '10px solid rgba(13, 13, 13, .8)';
        _bubbleArrow.style.top = "".concat(bubble.offsetHeight, "px");
        _bubbleArrow.style.left = "".concat(arrowRelativeLeft, "px");
      }

      bubble.style.left = "".concat(bubbleLeft, "px");
      bubble.style.top = "".concat(bubbleTop, "px");
      document.addEventListener('click', function (ev) {
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      });
      bubble.addEventListener('click', function (ev) {
        ev.stopPropagation();
      });
      Bubble.audioPlay();
      Bubble.addToWordBook();
    }
  }, {
    key: "doTranslate",
    value: function doTranslate(ev, options) {
      var _ref = [Bubble.keyfrom, 'json', window.getSelection().toString().trim(), Bubble.key],
          from = _ref[0],
          resType = _ref[1],
          query = _ref[2],
          youdaoKey = _ref[3];
      if (Object.is(query.toString().trim(), '')) return;
      Bubble.renderBubble(__webpack_require__(31)({
        loading: true
      }));
      var youdao = new _util_youdao__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](from, youdaoKey, resType, query);
      youdao.getContent().then(function (data) {
        data.loading = false;
        if (options && options.wordbook) data.wordbook = options.wordbook;
        Bubble.renderBubble(__webpack_require__(31)(data));
      })["catch"](function (err) {
        Bubble.renderBubble(__webpack_require__(31)({
          word: query,
          explains: err
        }));
      });
    }
  }, {
    key: "enableDblclick",
    value: function enableDblclick(options) {
      document.addEventListener('dblclick', function (ev) {
        return Bubble.doTranslate(ev, options);
      });
    }
  }, {
    key: "enableKeydown",
    value: function enableKeydown(options) {
      var map = [];
      document.addEventListener('keydown', function (ev) {
        return map.push(ev.keyCode);
      });
      document.addEventListener('keyup', function (ev) {
        if (!options.shortcut1 && !options.shortcut2) {
          return;
        } else if (!options.shortcut1 || !options.shortcut2) {
          if (Object.is(map.length, 1) && (Object.is(map[0], options.shortcut1) || Object.is(map[0], options.shortcut2))) {
            Bubble.doTranslate(ev, options);
          }
        } else {
          if (Object.is(map.length, 2) && Object.is(map[0], options.shortcut1) && Object.is(map[1], options.shortcut2)) {
            Bubble.doTranslate(ev, options);
          }
        }

        map = [];
      });
    }
  }, {
    key: "enableSelectToTranslate",
    value: function enableSelectToTranslate(options) {
      document.addEventListener('mouseup', function (ev) {
        setTimeout(function () {
          var bubble = document.querySelector('#y-bubble');
          if (!bubble) Bubble.doTranslate(ev, options);
        });
      });
    }
  }, {
    key: "audioPlay",
    value: function audioPlay() {
      var audioAction = document.querySelector('#y-bubble-wav');

      if (audioAction) {
        audioAction.addEventListener('click', function (ev) {
          ev.preventDefault();
          var audioNode = document.querySelector('#y-audio');
          audioNode.play();
        });
      }
    }
  }, {
    key: "addToWordBook",
    value: function addToWordBook() {
      var addToWordBookSuccessText = '添加成功';
      var added = 'added';
      var addToWordBookAction = document.querySelector('#addToWordBookAction');

      if (addToWordBookAction) {
        addToWordBookAction.addEventListener('click', function (ev) {
          ev.preventDefault();
          if (Object.is(ev.target.getAttribute('data-add-status'), added)) return;
          var word = ev.target.getAttribute('data-word');
          var spinner = document.querySelector('#ySpinner');
          spinner.className = spinner.className.replace(' hide', '');
          _util_youdao__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addToWordBook(word).then(function (res) {
            if (res.added) {
              ev.target.setAttribute('data-add-status', added);
              ev.target.textContent = addToWordBookSuccessText;
            }

            spinner.className += ' hide';
          })["catch"](function (err) {});
        });
      }
    }
  }, {
    key: "popupQueryInput",
    value: function popupQueryInput() {}
  }, {
    key: "init",
    value: function init() {
      chrome.storage.sync.get(function (items) {
        if (items.dblclick) Bubble.enableDblclick(items);
        if (items.shortcut) Bubble.enableKeydown(items);
        if (items.selectToTranslate) Bubble.enableSelectToTranslate(items);

        if (items.usePersonalKey) {
          Bubble.keyfrom = items.keyfrom || Bubble.keyfrom;
          Bubble.key = items.key || Bubble.key;
        }
      });
      Bubble.popupQueryInput();
    }
  }]);

  return Bubble;
}();

_defineProperty(Bubble, "keyfrom", 'your-youdao-appKey');

_defineProperty(Bubble, "key", 'appSecret');

/* harmony default export */ __webpack_exports__["default"] = (Bubble);
Bubble.init();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(41);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".y-bubble{position:absolute;z-index:9999;margin:0;padding:10px;min-width:300px;max-width:500px;border-radius:5px;background-color:rgba(13,13,13,0.8);box-shadow:0 0 20px rgba(0,0,0,0.8);color:#fff !important;text-align:left;font-weight:300;font-size:16px;font-family:\"Roboto\", 'Helvetica', sans-serif;line-height:1.5}.y-bubble p{margin:2px 0;color:#fff !important;line-height:20px}.y-bubble .y-bubble-word{color:#f60}.y-bubble .y-arrow{position:absolute;width:0;height:0;border-right:10px solid transparent;border-left:10px solid transparent}.y-bubble .y-bubble-explains{margin:10px 0}.y-bubble .y-clearfix:before,.y-bubble .y-clearfix:after{display:table;content:''}.y-bubble .y-clearfix:after{clear:both}.y-bubble .y-bubble-more{margin-top:10px}.y-bubble .y-bubble-more .y-pull-left{float:left}.y-bubble .y-bubble-more .y-pull-right{float:right}.y-bubble .y-bubble-more a{color:#ffffff !important;text-decoration:none !important}.y-bubble .y-bubble-more a:hover{text-decoration:underline !important}.y-bubble .spinner{display:inline-block;position:relative;margin:0 5px;width:20px;height:20px;vertical-align:middle}.y-bubble .spinner.hide{display:none}.y-bubble .spinner .double-bounce1,.y-bubble .spinner .double-bounce2{width:100%;height:100%;border-radius:50%;background-color:#ffffff;opacity:0.6;position:absolute;top:0;left:0;-webkit-animation:sk-bounce 2.0s infinite ease-in-out;animation:sk-bounce 2.0s infinite ease-in-out}.y-bubble .spinner .double-bounce2{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ ]);