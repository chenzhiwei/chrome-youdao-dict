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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Thin.eot");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Light.eot");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Regular.eot");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Medium.eot");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Bold.eot");

/***/ }),
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Material-Design-Icons.eot");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Material-Design-Icons.woff2");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Material-Design-Icons.woff");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Material-Design-Icons.ttf");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Material-Design-Icons.svg");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Thin.woff2");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Thin.woff");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Thin.ttf");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Light.woff2");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Light.woff");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Light.ttf");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Regular.woff2");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Regular.woff");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Regular.ttf");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Medium.woff2");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Medium.woff");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Medium.ttf");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Bold.woff2");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Bold.woff");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "font/Roboto-Bold.ttf");

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(35);

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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_material_design_icons_Material_Design_Icons_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _font_material_design_icons_Material_Design_Icons_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _font_material_design_icons_Material_Design_Icons_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _font_material_design_icons_Material_Design_Icons_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _font_material_design_icons_Material_Design_Icons_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _font_roboto_Roboto_Thin_eot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _font_roboto_Roboto_Thin_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _font_roboto_Roboto_Thin_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _font_roboto_Roboto_Thin_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _font_roboto_Roboto_Light_eot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5);
/* harmony import */ var _font_roboto_Roboto_Light_woff2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
/* harmony import */ var _font_roboto_Roboto_Light_woff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20);
/* harmony import */ var _font_roboto_Roboto_Light_ttf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21);
/* harmony import */ var _font_roboto_Roboto_Regular_eot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6);
/* harmony import */ var _font_roboto_Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22);
/* harmony import */ var _font_roboto_Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23);
/* harmony import */ var _font_roboto_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24);
/* harmony import */ var _font_roboto_Roboto_Medium_eot__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7);
/* harmony import */ var _font_roboto_Roboto_Medium_woff2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25);
/* harmony import */ var _font_roboto_Roboto_Medium_woff__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);
/* harmony import */ var _font_roboto_Roboto_Medium_ttf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(27);
/* harmony import */ var _font_roboto_Roboto_Bold_eot__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8);
/* harmony import */ var _font_roboto_Roboto_Bold_woff2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(28);
/* harmony import */ var _font_roboto_Roboto_Bold_woff__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(29);
/* harmony import */ var _font_roboto_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(30);
// Imports



























var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_material_design_icons_Material_Design_Icons_eot__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_material_design_icons_Material_Design_Icons_woff2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_material_design_icons_Material_Design_Icons_woff__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_material_design_icons_Material_Design_Icons_ttf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_material_design_icons_Material_Design_Icons_svg__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], { hash: "#Material-Design-Icons" });
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Thin_eot__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Thin_eot__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Thin_woff2__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Thin_woff__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Thin_ttf__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Light_eot__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Light_eot__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Light_woff2__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Light_woff__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Light_ttf__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Regular_eot__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Regular_eot__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Medium_eot__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Medium_eot__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Medium_woff2__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Medium_woff__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Medium_ttf__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Bold_eot__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Bold_eot__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Bold_woff2__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Bold_woff__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_roboto_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Materialize v0.97.5 (http://materializecss.com)\n * Copyright 2014-2015 Materialize\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\n */.materialize-red.lighten-5{background-color:#fdeaeb !important}.materialize-red-text.text-lighten-5{color:#fdeaeb !important}.materialize-red.lighten-4{background-color:#f8c1c3 !important}.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}.materialize-red.lighten-3{background-color:#f3989b !important}.materialize-red-text.text-lighten-3{color:#f3989b !important}.materialize-red.lighten-2{background-color:#ee6e73 !important}.materialize-red-text.text-lighten-2{color:#ee6e73 !important}.materialize-red.lighten-1{background-color:#ea454b !important}.materialize-red-text.text-lighten-1{color:#ea454b !important}.materialize-red{background-color:#e51c23 !important}.materialize-red-text{color:#e51c23 !important}.materialize-red.darken-1{background-color:#d0181e !important}.materialize-red-text.text-darken-1{color:#d0181e !important}.materialize-red.darken-2{background-color:#b9151b !important}.materialize-red-text.text-darken-2{color:#b9151b !important}.materialize-red.darken-3{background-color:#a21318 !important}.materialize-red-text.text-darken-3{color:#a21318 !important}.materialize-red.darken-4{background-color:#8b1014 !important}.materialize-red-text.text-darken-4{color:#8b1014 !important}.red.lighten-5{background-color:#FFEBEE !important}.red-text.text-lighten-5{color:#FFEBEE !important}.red.lighten-4{background-color:#FFCDD2 !important}.red-text.text-lighten-4{color:#FFCDD2 !important}.red.lighten-3{background-color:#EF9A9A !important}.red-text.text-lighten-3{color:#EF9A9A !important}.red.lighten-2{background-color:#E57373 !important}.red-text.text-lighten-2{color:#E57373 !important}.red.lighten-1{background-color:#EF5350 !important}.red-text.text-lighten-1{color:#EF5350 !important}.red{background-color:#F44336 !important}.red-text{color:#F44336 !important}.red.darken-1{background-color:#E53935 !important}.red-text.text-darken-1{color:#E53935 !important}.red.darken-2{background-color:#D32F2F !important}.red-text.text-darken-2{color:#D32F2F !important}.red.darken-3{background-color:#C62828 !important}.red-text.text-darken-3{color:#C62828 !important}.red.darken-4{background-color:#B71C1C !important}.red-text.text-darken-4{color:#B71C1C !important}.red.accent-1{background-color:#FF8A80 !important}.red-text.text-accent-1{color:#FF8A80 !important}.red.accent-2{background-color:#FF5252 !important}.red-text.text-accent-2{color:#FF5252 !important}.red.accent-3{background-color:#FF1744 !important}.red-text.text-accent-3{color:#FF1744 !important}.red.accent-4{background-color:#D50000 !important}.red-text.text-accent-4{color:#D50000 !important}.pink.lighten-5{background-color:#fce4ec !important}.pink-text.text-lighten-5{color:#fce4ec !important}.pink.lighten-4{background-color:#f8bbd0 !important}.pink-text.text-lighten-4{color:#f8bbd0 !important}.pink.lighten-3{background-color:#f48fb1 !important}.pink-text.text-lighten-3{color:#f48fb1 !important}.pink.lighten-2{background-color:#f06292 !important}.pink-text.text-lighten-2{color:#f06292 !important}.pink.lighten-1{background-color:#ec407a !important}.pink-text.text-lighten-1{color:#ec407a !important}.pink{background-color:#e91e63 !important}.pink-text{color:#e91e63 !important}.pink.darken-1{background-color:#d81b60 !important}.pink-text.text-darken-1{color:#d81b60 !important}.pink.darken-2{background-color:#c2185b !important}.pink-text.text-darken-2{color:#c2185b !important}.pink.darken-3{background-color:#ad1457 !important}.pink-text.text-darken-3{color:#ad1457 !important}.pink.darken-4{background-color:#880e4f !important}.pink-text.text-darken-4{color:#880e4f !important}.pink.accent-1{background-color:#ff80ab !important}.pink-text.text-accent-1{color:#ff80ab !important}.pink.accent-2{background-color:#ff4081 !important}.pink-text.text-accent-2{color:#ff4081 !important}.pink.accent-3{background-color:#f50057 !important}.pink-text.text-accent-3{color:#f50057 !important}.pink.accent-4{background-color:#c51162 !important}.pink-text.text-accent-4{color:#c51162 !important}.purple.lighten-5{background-color:#f3e5f5 !important}.purple-text.text-lighten-5{color:#f3e5f5 !important}.purple.lighten-4{background-color:#e1bee7 !important}.purple-text.text-lighten-4{color:#e1bee7 !important}.purple.lighten-3{background-color:#ce93d8 !important}.purple-text.text-lighten-3{color:#ce93d8 !important}.purple.lighten-2{background-color:#ba68c8 !important}.purple-text.text-lighten-2{color:#ba68c8 !important}.purple.lighten-1{background-color:#ab47bc !important}.purple-text.text-lighten-1{color:#ab47bc !important}.purple{background-color:#9c27b0 !important}.purple-text{color:#9c27b0 !important}.purple.darken-1{background-color:#8e24aa !important}.purple-text.text-darken-1{color:#8e24aa !important}.purple.darken-2{background-color:#7b1fa2 !important}.purple-text.text-darken-2{color:#7b1fa2 !important}.purple.darken-3{background-color:#6a1b9a !important}.purple-text.text-darken-3{color:#6a1b9a !important}.purple.darken-4{background-color:#4a148c !important}.purple-text.text-darken-4{color:#4a148c !important}.purple.accent-1{background-color:#ea80fc !important}.purple-text.text-accent-1{color:#ea80fc !important}.purple.accent-2{background-color:#e040fb !important}.purple-text.text-accent-2{color:#e040fb !important}.purple.accent-3{background-color:#d500f9 !important}.purple-text.text-accent-3{color:#d500f9 !important}.purple.accent-4{background-color:#a0f !important}.purple-text.text-accent-4{color:#a0f !important}.deep-purple.lighten-5{background-color:#ede7f6 !important}.deep-purple-text.text-lighten-5{color:#ede7f6 !important}.deep-purple.lighten-4{background-color:#d1c4e9 !important}.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}.deep-purple.lighten-3{background-color:#b39ddb !important}.deep-purple-text.text-lighten-3{color:#b39ddb !important}.deep-purple.lighten-2{background-color:#9575cd !important}.deep-purple-text.text-lighten-2{color:#9575cd !important}.deep-purple.lighten-1{background-color:#7e57c2 !important}.deep-purple-text.text-lighten-1{color:#7e57c2 !important}.deep-purple{background-color:#673ab7 !important}.deep-purple-text{color:#673ab7 !important}.deep-purple.darken-1{background-color:#5e35b1 !important}.deep-purple-text.text-darken-1{color:#5e35b1 !important}.deep-purple.darken-2{background-color:#512da8 !important}.deep-purple-text.text-darken-2{color:#512da8 !important}.deep-purple.darken-3{background-color:#4527a0 !important}.deep-purple-text.text-darken-3{color:#4527a0 !important}.deep-purple.darken-4{background-color:#311b92 !important}.deep-purple-text.text-darken-4{color:#311b92 !important}.deep-purple.accent-1{background-color:#b388ff !important}.deep-purple-text.text-accent-1{color:#b388ff !important}.deep-purple.accent-2{background-color:#7c4dff !important}.deep-purple-text.text-accent-2{color:#7c4dff !important}.deep-purple.accent-3{background-color:#651fff !important}.deep-purple-text.text-accent-3{color:#651fff !important}.deep-purple.accent-4{background-color:#6200ea !important}.deep-purple-text.text-accent-4{color:#6200ea !important}.indigo.lighten-5{background-color:#e8eaf6 !important}.indigo-text.text-lighten-5{color:#e8eaf6 !important}.indigo.lighten-4{background-color:#c5cae9 !important}.indigo-text.text-lighten-4{color:#c5cae9 !important}.indigo.lighten-3{background-color:#9fa8da !important}.indigo-text.text-lighten-3{color:#9fa8da !important}.indigo.lighten-2{background-color:#7986cb !important}.indigo-text.text-lighten-2{color:#7986cb !important}.indigo.lighten-1{background-color:#5c6bc0 !important}.indigo-text.text-lighten-1{color:#5c6bc0 !important}.indigo{background-color:#3f51b5 !important}.indigo-text{color:#3f51b5 !important}.indigo.darken-1{background-color:#3949ab !important}.indigo-text.text-darken-1{color:#3949ab !important}.indigo.darken-2{background-color:#303f9f !important}.indigo-text.text-darken-2{color:#303f9f !important}.indigo.darken-3{background-color:#283593 !important}.indigo-text.text-darken-3{color:#283593 !important}.indigo.darken-4{background-color:#1a237e !important}.indigo-text.text-darken-4{color:#1a237e !important}.indigo.accent-1{background-color:#8c9eff !important}.indigo-text.text-accent-1{color:#8c9eff !important}.indigo.accent-2{background-color:#536dfe !important}.indigo-text.text-accent-2{color:#536dfe !important}.indigo.accent-3{background-color:#3d5afe !important}.indigo-text.text-accent-3{color:#3d5afe !important}.indigo.accent-4{background-color:#304ffe !important}.indigo-text.text-accent-4{color:#304ffe !important}.blue.lighten-5{background-color:#E3F2FD !important}.blue-text.text-lighten-5{color:#E3F2FD !important}.blue.lighten-4{background-color:#BBDEFB !important}.blue-text.text-lighten-4{color:#BBDEFB !important}.blue.lighten-3{background-color:#90CAF9 !important}.blue-text.text-lighten-3{color:#90CAF9 !important}.blue.lighten-2{background-color:#64B5F6 !important}.blue-text.text-lighten-2{color:#64B5F6 !important}.blue.lighten-1{background-color:#42A5F5 !important}.blue-text.text-lighten-1{color:#42A5F5 !important}.blue{background-color:#2196F3 !important}.blue-text{color:#2196F3 !important}.blue.darken-1{background-color:#1E88E5 !important}.blue-text.text-darken-1{color:#1E88E5 !important}.blue.darken-2{background-color:#1976D2 !important}.blue-text.text-darken-2{color:#1976D2 !important}.blue.darken-3{background-color:#1565C0 !important}.blue-text.text-darken-3{color:#1565C0 !important}.blue.darken-4{background-color:#0D47A1 !important}.blue-text.text-darken-4{color:#0D47A1 !important}.blue.accent-1{background-color:#82B1FF !important}.blue-text.text-accent-1{color:#82B1FF !important}.blue.accent-2{background-color:#448AFF !important}.blue-text.text-accent-2{color:#448AFF !important}.blue.accent-3{background-color:#2979FF !important}.blue-text.text-accent-3{color:#2979FF !important}.blue.accent-4{background-color:#2962FF !important}.blue-text.text-accent-4{color:#2962FF !important}.light-blue.lighten-5{background-color:#e1f5fe !important}.light-blue-text.text-lighten-5{color:#e1f5fe !important}.light-blue.lighten-4{background-color:#b3e5fc !important}.light-blue-text.text-lighten-4{color:#b3e5fc !important}.light-blue.lighten-3{background-color:#81d4fa !important}.light-blue-text.text-lighten-3{color:#81d4fa !important}.light-blue.lighten-2{background-color:#4fc3f7 !important}.light-blue-text.text-lighten-2{color:#4fc3f7 !important}.light-blue.lighten-1{background-color:#29b6f6 !important}.light-blue-text.text-lighten-1{color:#29b6f6 !important}.light-blue{background-color:#03a9f4 !important}.light-blue-text{color:#03a9f4 !important}.light-blue.darken-1{background-color:#039be5 !important}.light-blue-text.text-darken-1{color:#039be5 !important}.light-blue.darken-2{background-color:#0288d1 !important}.light-blue-text.text-darken-2{color:#0288d1 !important}.light-blue.darken-3{background-color:#0277bd !important}.light-blue-text.text-darken-3{color:#0277bd !important}.light-blue.darken-4{background-color:#01579b !important}.light-blue-text.text-darken-4{color:#01579b !important}.light-blue.accent-1{background-color:#80d8ff !important}.light-blue-text.text-accent-1{color:#80d8ff !important}.light-blue.accent-2{background-color:#40c4ff !important}.light-blue-text.text-accent-2{color:#40c4ff !important}.light-blue.accent-3{background-color:#00b0ff !important}.light-blue-text.text-accent-3{color:#00b0ff !important}.light-blue.accent-4{background-color:#0091ea !important}.light-blue-text.text-accent-4{color:#0091ea !important}.cyan.lighten-5{background-color:#e0f7fa !important}.cyan-text.text-lighten-5{color:#e0f7fa !important}.cyan.lighten-4{background-color:#b2ebf2 !important}.cyan-text.text-lighten-4{color:#b2ebf2 !important}.cyan.lighten-3{background-color:#80deea !important}.cyan-text.text-lighten-3{color:#80deea !important}.cyan.lighten-2{background-color:#4dd0e1 !important}.cyan-text.text-lighten-2{color:#4dd0e1 !important}.cyan.lighten-1{background-color:#26c6da !important}.cyan-text.text-lighten-1{color:#26c6da !important}.cyan{background-color:#00bcd4 !important}.cyan-text{color:#00bcd4 !important}.cyan.darken-1{background-color:#00acc1 !important}.cyan-text.text-darken-1{color:#00acc1 !important}.cyan.darken-2{background-color:#0097a7 !important}.cyan-text.text-darken-2{color:#0097a7 !important}.cyan.darken-3{background-color:#00838f !important}.cyan-text.text-darken-3{color:#00838f !important}.cyan.darken-4{background-color:#006064 !important}.cyan-text.text-darken-4{color:#006064 !important}.cyan.accent-1{background-color:#84ffff !important}.cyan-text.text-accent-1{color:#84ffff !important}.cyan.accent-2{background-color:#18ffff !important}.cyan-text.text-accent-2{color:#18ffff !important}.cyan.accent-3{background-color:#00e5ff !important}.cyan-text.text-accent-3{color:#00e5ff !important}.cyan.accent-4{background-color:#00b8d4 !important}.cyan-text.text-accent-4{color:#00b8d4 !important}.teal.lighten-5{background-color:#e0f2f1 !important}.teal-text.text-lighten-5{color:#e0f2f1 !important}.teal.lighten-4{background-color:#b2dfdb !important}.teal-text.text-lighten-4{color:#b2dfdb !important}.teal.lighten-3{background-color:#80cbc4 !important}.teal-text.text-lighten-3{color:#80cbc4 !important}.teal.lighten-2{background-color:#4db6ac !important}.teal-text.text-lighten-2{color:#4db6ac !important}.teal.lighten-1{background-color:#26a69a !important}.teal-text.text-lighten-1{color:#26a69a !important}.teal{background-color:#009688 !important}.teal-text{color:#009688 !important}.teal.darken-1{background-color:#00897b !important}.teal-text.text-darken-1{color:#00897b !important}.teal.darken-2{background-color:#00796b !important}.teal-text.text-darken-2{color:#00796b !important}.teal.darken-3{background-color:#00695c !important}.teal-text.text-darken-3{color:#00695c !important}.teal.darken-4{background-color:#004d40 !important}.teal-text.text-darken-4{color:#004d40 !important}.teal.accent-1{background-color:#a7ffeb !important}.teal-text.text-accent-1{color:#a7ffeb !important}.teal.accent-2{background-color:#64ffda !important}.teal-text.text-accent-2{color:#64ffda !important}.teal.accent-3{background-color:#1de9b6 !important}.teal-text.text-accent-3{color:#1de9b6 !important}.teal.accent-4{background-color:#00bfa5 !important}.teal-text.text-accent-4{color:#00bfa5 !important}.green.lighten-5{background-color:#E8F5E9 !important}.green-text.text-lighten-5{color:#E8F5E9 !important}.green.lighten-4{background-color:#C8E6C9 !important}.green-text.text-lighten-4{color:#C8E6C9 !important}.green.lighten-3{background-color:#A5D6A7 !important}.green-text.text-lighten-3{color:#A5D6A7 !important}.green.lighten-2{background-color:#81C784 !important}.green-text.text-lighten-2{color:#81C784 !important}.green.lighten-1{background-color:#66BB6A !important}.green-text.text-lighten-1{color:#66BB6A !important}.green{background-color:#4CAF50 !important}.green-text{color:#4CAF50 !important}.green.darken-1{background-color:#43A047 !important}.green-text.text-darken-1{color:#43A047 !important}.green.darken-2{background-color:#388E3C !important}.green-text.text-darken-2{color:#388E3C !important}.green.darken-3{background-color:#2E7D32 !important}.green-text.text-darken-3{color:#2E7D32 !important}.green.darken-4{background-color:#1B5E20 !important}.green-text.text-darken-4{color:#1B5E20 !important}.green.accent-1{background-color:#B9F6CA !important}.green-text.text-accent-1{color:#B9F6CA !important}.green.accent-2{background-color:#69F0AE !important}.green-text.text-accent-2{color:#69F0AE !important}.green.accent-3{background-color:#00E676 !important}.green-text.text-accent-3{color:#00E676 !important}.green.accent-4{background-color:#00C853 !important}.green-text.text-accent-4{color:#00C853 !important}.light-green.lighten-5{background-color:#f1f8e9 !important}.light-green-text.text-lighten-5{color:#f1f8e9 !important}.light-green.lighten-4{background-color:#dcedc8 !important}.light-green-text.text-lighten-4{color:#dcedc8 !important}.light-green.lighten-3{background-color:#c5e1a5 !important}.light-green-text.text-lighten-3{color:#c5e1a5 !important}.light-green.lighten-2{background-color:#aed581 !important}.light-green-text.text-lighten-2{color:#aed581 !important}.light-green.lighten-1{background-color:#9ccc65 !important}.light-green-text.text-lighten-1{color:#9ccc65 !important}.light-green{background-color:#8bc34a !important}.light-green-text{color:#8bc34a !important}.light-green.darken-1{background-color:#7cb342 !important}.light-green-text.text-darken-1{color:#7cb342 !important}.light-green.darken-2{background-color:#689f38 !important}.light-green-text.text-darken-2{color:#689f38 !important}.light-green.darken-3{background-color:#558b2f !important}.light-green-text.text-darken-3{color:#558b2f !important}.light-green.darken-4{background-color:#33691e !important}.light-green-text.text-darken-4{color:#33691e !important}.light-green.accent-1{background-color:#ccff90 !important}.light-green-text.text-accent-1{color:#ccff90 !important}.light-green.accent-2{background-color:#b2ff59 !important}.light-green-text.text-accent-2{color:#b2ff59 !important}.light-green.accent-3{background-color:#76ff03 !important}.light-green-text.text-accent-3{color:#76ff03 !important}.light-green.accent-4{background-color:#64dd17 !important}.light-green-text.text-accent-4{color:#64dd17 !important}.lime.lighten-5{background-color:#f9fbe7 !important}.lime-text.text-lighten-5{color:#f9fbe7 !important}.lime.lighten-4{background-color:#f0f4c3 !important}.lime-text.text-lighten-4{color:#f0f4c3 !important}.lime.lighten-3{background-color:#e6ee9c !important}.lime-text.text-lighten-3{color:#e6ee9c !important}.lime.lighten-2{background-color:#dce775 !important}.lime-text.text-lighten-2{color:#dce775 !important}.lime.lighten-1{background-color:#d4e157 !important}.lime-text.text-lighten-1{color:#d4e157 !important}.lime{background-color:#cddc39 !important}.lime-text{color:#cddc39 !important}.lime.darken-1{background-color:#c0ca33 !important}.lime-text.text-darken-1{color:#c0ca33 !important}.lime.darken-2{background-color:#afb42b !important}.lime-text.text-darken-2{color:#afb42b !important}.lime.darken-3{background-color:#9e9d24 !important}.lime-text.text-darken-3{color:#9e9d24 !important}.lime.darken-4{background-color:#827717 !important}.lime-text.text-darken-4{color:#827717 !important}.lime.accent-1{background-color:#f4ff81 !important}.lime-text.text-accent-1{color:#f4ff81 !important}.lime.accent-2{background-color:#eeff41 !important}.lime-text.text-accent-2{color:#eeff41 !important}.lime.accent-3{background-color:#c6ff00 !important}.lime-text.text-accent-3{color:#c6ff00 !important}.lime.accent-4{background-color:#aeea00 !important}.lime-text.text-accent-4{color:#aeea00 !important}.yellow.lighten-5{background-color:#fffde7 !important}.yellow-text.text-lighten-5{color:#fffde7 !important}.yellow.lighten-4{background-color:#fff9c4 !important}.yellow-text.text-lighten-4{color:#fff9c4 !important}.yellow.lighten-3{background-color:#fff59d !important}.yellow-text.text-lighten-3{color:#fff59d !important}.yellow.lighten-2{background-color:#fff176 !important}.yellow-text.text-lighten-2{color:#fff176 !important}.yellow.lighten-1{background-color:#ffee58 !important}.yellow-text.text-lighten-1{color:#ffee58 !important}.yellow{background-color:#ffeb3b !important}.yellow-text{color:#ffeb3b !important}.yellow.darken-1{background-color:#fdd835 !important}.yellow-text.text-darken-1{color:#fdd835 !important}.yellow.darken-2{background-color:#fbc02d !important}.yellow-text.text-darken-2{color:#fbc02d !important}.yellow.darken-3{background-color:#f9a825 !important}.yellow-text.text-darken-3{color:#f9a825 !important}.yellow.darken-4{background-color:#f57f17 !important}.yellow-text.text-darken-4{color:#f57f17 !important}.yellow.accent-1{background-color:#ffff8d !important}.yellow-text.text-accent-1{color:#ffff8d !important}.yellow.accent-2{background-color:#ff0 !important}.yellow-text.text-accent-2{color:#ff0 !important}.yellow.accent-3{background-color:#ffea00 !important}.yellow-text.text-accent-3{color:#ffea00 !important}.yellow.accent-4{background-color:#ffd600 !important}.yellow-text.text-accent-4{color:#ffd600 !important}.amber.lighten-5{background-color:#fff8e1 !important}.amber-text.text-lighten-5{color:#fff8e1 !important}.amber.lighten-4{background-color:#ffecb3 !important}.amber-text.text-lighten-4{color:#ffecb3 !important}.amber.lighten-3{background-color:#ffe082 !important}.amber-text.text-lighten-3{color:#ffe082 !important}.amber.lighten-2{background-color:#ffd54f !important}.amber-text.text-lighten-2{color:#ffd54f !important}.amber.lighten-1{background-color:#ffca28 !important}.amber-text.text-lighten-1{color:#ffca28 !important}.amber{background-color:#ffc107 !important}.amber-text{color:#ffc107 !important}.amber.darken-1{background-color:#ffb300 !important}.amber-text.text-darken-1{color:#ffb300 !important}.amber.darken-2{background-color:#ffa000 !important}.amber-text.text-darken-2{color:#ffa000 !important}.amber.darken-3{background-color:#ff8f00 !important}.amber-text.text-darken-3{color:#ff8f00 !important}.amber.darken-4{background-color:#ff6f00 !important}.amber-text.text-darken-4{color:#ff6f00 !important}.amber.accent-1{background-color:#ffe57f !important}.amber-text.text-accent-1{color:#ffe57f !important}.amber.accent-2{background-color:#ffd740 !important}.amber-text.text-accent-2{color:#ffd740 !important}.amber.accent-3{background-color:#ffc400 !important}.amber-text.text-accent-3{color:#ffc400 !important}.amber.accent-4{background-color:#ffab00 !important}.amber-text.text-accent-4{color:#ffab00 !important}.orange.lighten-5{background-color:#fff3e0 !important}.orange-text.text-lighten-5{color:#fff3e0 !important}.orange.lighten-4{background-color:#ffe0b2 !important}.orange-text.text-lighten-4{color:#ffe0b2 !important}.orange.lighten-3{background-color:#ffcc80 !important}.orange-text.text-lighten-3{color:#ffcc80 !important}.orange.lighten-2{background-color:#ffb74d !important}.orange-text.text-lighten-2{color:#ffb74d !important}.orange.lighten-1{background-color:#ffa726 !important}.orange-text.text-lighten-1{color:#ffa726 !important}.orange{background-color:#ff9800 !important}.orange-text{color:#ff9800 !important}.orange.darken-1{background-color:#fb8c00 !important}.orange-text.text-darken-1{color:#fb8c00 !important}.orange.darken-2{background-color:#f57c00 !important}.orange-text.text-darken-2{color:#f57c00 !important}.orange.darken-3{background-color:#ef6c00 !important}.orange-text.text-darken-3{color:#ef6c00 !important}.orange.darken-4{background-color:#e65100 !important}.orange-text.text-darken-4{color:#e65100 !important}.orange.accent-1{background-color:#ffd180 !important}.orange-text.text-accent-1{color:#ffd180 !important}.orange.accent-2{background-color:#ffab40 !important}.orange-text.text-accent-2{color:#ffab40 !important}.orange.accent-3{background-color:#ff9100 !important}.orange-text.text-accent-3{color:#ff9100 !important}.orange.accent-4{background-color:#ff6d00 !important}.orange-text.text-accent-4{color:#ff6d00 !important}.deep-orange.lighten-5{background-color:#fbe9e7 !important}.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}.deep-orange.lighten-4{background-color:#ffccbc !important}.deep-orange-text.text-lighten-4{color:#ffccbc !important}.deep-orange.lighten-3{background-color:#ffab91 !important}.deep-orange-text.text-lighten-3{color:#ffab91 !important}.deep-orange.lighten-2{background-color:#ff8a65 !important}.deep-orange-text.text-lighten-2{color:#ff8a65 !important}.deep-orange.lighten-1{background-color:#ff7043 !important}.deep-orange-text.text-lighten-1{color:#ff7043 !important}.deep-orange{background-color:#ff5722 !important}.deep-orange-text{color:#ff5722 !important}.deep-orange.darken-1{background-color:#f4511e !important}.deep-orange-text.text-darken-1{color:#f4511e !important}.deep-orange.darken-2{background-color:#e64a19 !important}.deep-orange-text.text-darken-2{color:#e64a19 !important}.deep-orange.darken-3{background-color:#d84315 !important}.deep-orange-text.text-darken-3{color:#d84315 !important}.deep-orange.darken-4{background-color:#bf360c !important}.deep-orange-text.text-darken-4{color:#bf360c !important}.deep-orange.accent-1{background-color:#ff9e80 !important}.deep-orange-text.text-accent-1{color:#ff9e80 !important}.deep-orange.accent-2{background-color:#ff6e40 !important}.deep-orange-text.text-accent-2{color:#ff6e40 !important}.deep-orange.accent-3{background-color:#ff3d00 !important}.deep-orange-text.text-accent-3{color:#ff3d00 !important}.deep-orange.accent-4{background-color:#dd2c00 !important}.deep-orange-text.text-accent-4{color:#dd2c00 !important}.brown.lighten-5{background-color:#efebe9 !important}.brown-text.text-lighten-5{color:#efebe9 !important}.brown.lighten-4{background-color:#d7ccc8 !important}.brown-text.text-lighten-4{color:#d7ccc8 !important}.brown.lighten-3{background-color:#bcaaa4 !important}.brown-text.text-lighten-3{color:#bcaaa4 !important}.brown.lighten-2{background-color:#a1887f !important}.brown-text.text-lighten-2{color:#a1887f !important}.brown.lighten-1{background-color:#8d6e63 !important}.brown-text.text-lighten-1{color:#8d6e63 !important}.brown{background-color:#795548 !important}.brown-text{color:#795548 !important}.brown.darken-1{background-color:#6d4c41 !important}.brown-text.text-darken-1{color:#6d4c41 !important}.brown.darken-2{background-color:#5d4037 !important}.brown-text.text-darken-2{color:#5d4037 !important}.brown.darken-3{background-color:#4e342e !important}.brown-text.text-darken-3{color:#4e342e !important}.brown.darken-4{background-color:#3e2723 !important}.brown-text.text-darken-4{color:#3e2723 !important}.blue-grey.lighten-5{background-color:#eceff1 !important}.blue-grey-text.text-lighten-5{color:#eceff1 !important}.blue-grey.lighten-4{background-color:#cfd8dc !important}.blue-grey-text.text-lighten-4{color:#cfd8dc !important}.blue-grey.lighten-3{background-color:#b0bec5 !important}.blue-grey-text.text-lighten-3{color:#b0bec5 !important}.blue-grey.lighten-2{background-color:#90a4ae !important}.blue-grey-text.text-lighten-2{color:#90a4ae !important}.blue-grey.lighten-1{background-color:#78909c !important}.blue-grey-text.text-lighten-1{color:#78909c !important}.blue-grey{background-color:#607d8b !important}.blue-grey-text{color:#607d8b !important}.blue-grey.darken-1{background-color:#546e7a !important}.blue-grey-text.text-darken-1{color:#546e7a !important}.blue-grey.darken-2{background-color:#455a64 !important}.blue-grey-text.text-darken-2{color:#455a64 !important}.blue-grey.darken-3{background-color:#37474f !important}.blue-grey-text.text-darken-3{color:#37474f !important}.blue-grey.darken-4{background-color:#263238 !important}.blue-grey-text.text-darken-4{color:#263238 !important}.grey.lighten-5{background-color:#fafafa !important}.grey-text.text-lighten-5{color:#fafafa !important}.grey.lighten-4{background-color:#f5f5f5 !important}.grey-text.text-lighten-4{color:#f5f5f5 !important}.grey.lighten-3{background-color:#eee !important}.grey-text.text-lighten-3{color:#eee !important}.grey.lighten-2{background-color:#e0e0e0 !important}.grey-text.text-lighten-2{color:#e0e0e0 !important}.grey.lighten-1{background-color:#bdbdbd !important}.grey-text.text-lighten-1{color:#bdbdbd !important}.grey{background-color:#9e9e9e !important}.grey-text{color:#9e9e9e !important}.grey.darken-1{background-color:#757575 !important}.grey-text.text-darken-1{color:#757575 !important}.grey.darken-2{background-color:#616161 !important}.grey-text.text-darken-2{color:#616161 !important}.grey.darken-3{background-color:#424242 !important}.grey-text.text-darken-3{color:#424242 !important}.grey.darken-4{background-color:#212121 !important}.grey-text.text-darken-4{color:#212121 !important}.shades.black{background-color:#000 !important}.shades-text.text-black{color:#000 !important}.shades.white{background-color:#fff !important}.shades-text.text-white{color:#fff !important}.shades.transparent{background-color:transparent !important}.shades-text.text-transparent{color:transparent !important}.black{background-color:#000 !important}.black-text{color:#000 !important}.white{background-color:#fff !important}.white-text{color:#fff !important}.transparent{background-color:transparent !important}.transparent-text{color:transparent !important}/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}html input[type=\"button\"],button,input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}ul{list-style-type:none}a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.valign-wrapper .valign{display:block}ul{padding:0}ul li{list-style-type:none}.clearfix{clear:both}.z-depth-0{box-shadow:none !important}.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-floating,.dropdown-content,.collapsible,.side-nav{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-floating:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15)}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)}.z-depth-4,.modal{box-shadow:0 16px 28px 0 rgba(0,0,0,0.22),0 25px 55px 0 rgba(0,0,0,0.21)}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,0.2),0 40px 77px 0 rgba(0,0,0,0.22)}.hoverable{transition:box-shadow .25s;box-shadow:0}.hoverable:hover{transition:box-shadow .25s;box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px;border-radius:2px;text-align:center}.pagination li a{color:#444}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2.2rem;vertical-align:middle}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}.breadcrumb i,.breadcrumb [class^=\"mdi-\"],.breadcrumb [class*=\"mdi-\"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:'\\E5CC';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax img{display:none;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transform:translateX(-50%);transform:translateX(-50%)}.pin-top,.pin-bottom{position:relative}.pinned{position:fixed !important}ul.staggered-list li{opacity:0}.fade-in{opacity:0;-webkit-transform-origin:0 50%;transform-origin:0 50%}@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}@media only screen and (min-width: 993px){.show-on-large{display:block !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}@media only screen and (max-width: 600px){.show-on-small{display:block !important}}@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}footer.page-footer{margin-top:20px;padding-top:20px;background-color:#ee6e73}footer.page-footer .footer-copyright{overflow:hidden;height:50px;line-height:50px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}table,th,td{border:none}table{width:100%;display:table}table.bordered>thead>tr,table.bordered>tbody>tr{border-bottom:1px solid #d0d0d0}table.striped>tbody>tr:nth-child(odd){background-color:#f2f2f2}table.striped>tbody>tr>td{border-radius:0px}table.highlight>tbody>tr{transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:#f2f2f2}table.centered thead tr th,table.centered tbody tr td{text-align:center}thead{border-bottom:1px solid #d0d0d0}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:\"\\00a0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid #d0d0d0}table.responsive-table.bordered th{border-bottom:0;border-left:0}table.responsive-table.bordered td{border-left:0;border-right:0;border-bottom:0}table.responsive-table.bordered tr{border:0}table.responsive-table.bordered tbody tr{border-right:1px solid #d0d0d0}}.collection{margin:0.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar .circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;transition:.25s;color:#26a69a}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#26a69a}.collapsible .collection{margin:0;border:none}span.badge{min-width:3rem;padding:0 6px;text-align:center;font-size:1rem;line-height:inherit;color:#757575;position:absolute;right:15px;box-sizing:border-box}span.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#26a69a;border-radius:2px}span.badge.new:after{content:\" new\"}nav ul a span.badge{position:static;margin-left:4px;line-height:0}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:0.5rem 0 1rem 0;overflow:hidden}.progress .determinate{position:absolute;background-color:inherit;top:0;left:0;bottom:0;background-color:#26a69a;transition:width .3s linear}.progress .indeterminate{background-color:#26a69a}.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.progress .indeterminate:after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.hide{display:none !important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left !important}.right{float:right !important}.no-select,input[type=range],input[type=range]+.thumb{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0 !important}.material-icons{text-rendering:optimizeLegibility;-webkit-font-feature-settings:'liga';-moz-font-feature-settings:'liga';font-feature-settings:'liga'}@font-face{font-family:\"Material-Design-Icons\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");font-weight:normal;font-style:normal}[class^=\"mdi-\"],[class*=\"mdi-\"]{speak:none;display:inline-block;font-family:\"Material-Design-Icons\";font-style:normal;font-weight:normal;font-variant:normal;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transform:translate(0, 0);transform:translate(0, 0)}[class^=\"mdi-\"]:before,[class*=\"mdi-\"]:before{display:inline-block;speak:none;text-decoration:inherit}[class^=\"mdi-\"].pull-left,[class*=\"mdi-\"].pull-left{margin-right:.3em}[class^=\"mdi-\"].pull-right,[class*=\"mdi-\"].pull-right{margin-left:.3em}[class^=\"mdi-\"].mdi-lg:before,[class^=\"mdi-\"].mdi-lg:after,[class*=\"mdi-\"].mdi-lg:before,[class*=\"mdi-\"].mdi-lg:after{font-size:1.33333333em;line-height:0.75em;vertical-align:-15%}[class^=\"mdi-\"].mdi-2x:before,[class^=\"mdi-\"].mdi-2x:after,[class*=\"mdi-\"].mdi-2x:before,[class*=\"mdi-\"].mdi-2x:after{font-size:2em}[class^=\"mdi-\"].mdi-3x:before,[class^=\"mdi-\"].mdi-3x:after,[class*=\"mdi-\"].mdi-3x:before,[class*=\"mdi-\"].mdi-3x:after{font-size:3em}[class^=\"mdi-\"].mdi-4x:before,[class^=\"mdi-\"].mdi-4x:after,[class*=\"mdi-\"].mdi-4x:before,[class*=\"mdi-\"].mdi-4x:after{font-size:4em}[class^=\"mdi-\"].mdi-5x:before,[class^=\"mdi-\"].mdi-5x:after,[class*=\"mdi-\"].mdi-5x:before,[class*=\"mdi-\"].mdi-5x:after{font-size:5em}[class^=\"mdi-device-signal-cellular-\"]:after,[class^=\"mdi-device-battery-\"]:after,[class^=\"mdi-device-battery-charging-\"]:after,[class^=\"mdi-device-signal-cellular-connected-no-internet-\"]:after,[class^=\"mdi-device-signal-wifi-\"]:after,[class^=\"mdi-device-signal-wifi-statusbar-not-connected\"]:after,.mdi-device-network-wifi:after{opacity:.3;position:absolute;left:0;top:0;z-index:1;display:inline-block;speak:none;text-decoration:inherit}[class^=\"mdi-device-signal-cellular-\"]:after{content:\"\\e758\"}[class^=\"mdi-device-battery-\"]:after{content:\"\\e735\"}[class^=\"mdi-device-battery-charging-\"]:after{content:\"\\e733\"}[class^=\"mdi-device-signal-cellular-connected-no-internet-\"]:after{content:\"\\e75d\"}[class^=\"mdi-device-signal-wifi-\"]:after,.mdi-device-network-wifi:after{content:\"\\e765\"}[class^=\"mdi-device-signal-wifi-statusbasr-not-connected\"]:after{content:\"\\e8f7\"}.mdi-device-signal-cellular-off:after,.mdi-device-signal-cellular-null:after,.mdi-device-signal-cellular-no-sim:after,.mdi-device-signal-wifi-off:after,.mdi-device-signal-wifi-4-bar:after,.mdi-device-signal-cellular-4-bar:after,.mdi-device-battery-alert:after,.mdi-device-signal-cellular-connected-no-internet-4-bar:after,.mdi-device-battery-std:after,.mdi-device-battery-full .mdi-device-battery-unknown:after{content:\"\"}.mdi-fw{width:1.28571429em;text-align:center}.mdi-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.mdi-ul>li{position:relative}.mdi-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:0.14285714em;text-align:center}.mdi-li.mdi-lg{left:-1.85714286em}.mdi-border{padding:.2em .25em .15em;border:solid 0.08em #eeeeee;border-radius:.1em}.mdi-spin{-webkit-animation:mdi-spin 2s infinite linear;animation:mdi-spin 2s infinite linear;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.mdi-pulse{-webkit-animation:mdi-spin 1s steps(8) infinite;animation:mdi-spin 1s steps(8) infinite;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}@-webkit-keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.mdi-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.mdi-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.mdi-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);transform:rotate(270deg)}.mdi-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.mdi-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);transform:scale(1, -1)}:root .mdi-rotate-90,:root .mdi-rotate-180,:root .mdi-rotate-270,:root .mdi-flip-horizontal,:root .mdi-flip-vertical{-webkit-filter:none;filter:none}.mdi-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.mdi-stack-1x,.mdi-stack-2x{position:absolute;left:0;width:100%;text-align:center}.mdi-stack-1x{line-height:inherit}.mdi-stack-2x{font-size:2em}.mdi-inverse{color:#ffffff}.mdi-action-3d-rotation:before{content:\"\\e600\"}.mdi-action-accessibility:before{content:\"\\e601\"}.mdi-action-account-balance-wallet:before{content:\"\\e602\"}.mdi-action-account-balance:before{content:\"\\e603\"}.mdi-action-account-box:before{content:\"\\e604\"}.mdi-action-account-child:before{content:\"\\e605\"}.mdi-action-account-circle:before{content:\"\\e606\"}.mdi-action-add-shopping-cart:before{content:\"\\e607\"}.mdi-action-alarm-add:before{content:\"\\e608\"}.mdi-action-alarm-off:before{content:\"\\e609\"}.mdi-action-alarm-on:before{content:\"\\e60a\"}.mdi-action-alarm:before{content:\"\\e60b\"}.mdi-action-android:before{content:\"\\e60c\"}.mdi-action-announcement:before{content:\"\\e60d\"}.mdi-action-aspect-ratio:before{content:\"\\e60e\"}.mdi-action-assessment:before{content:\"\\e60f\"}.mdi-action-assignment-ind:before{content:\"\\e610\"}.mdi-action-assignment-late:before{content:\"\\e611\"}.mdi-action-assignment-return:before{content:\"\\e612\"}.mdi-action-assignment-returned:before{content:\"\\e613\"}.mdi-action-assignment-turned-in:before{content:\"\\e614\"}.mdi-action-assignment:before{content:\"\\e615\"}.mdi-action-autorenew:before{content:\"\\e616\"}.mdi-action-backup:before{content:\"\\e617\"}.mdi-action-book:before{content:\"\\e618\"}.mdi-action-bookmark-outline:before{content:\"\\e619\"}.mdi-action-bookmark:before{content:\"\\e61a\"}.mdi-action-bug-report:before{content:\"\\e61b\"}.mdi-action-cached:before{content:\"\\e61c\"}.mdi-action-check-circle:before{content:\"\\e61d\"}.mdi-action-class:before{content:\"\\e61e\"}.mdi-action-credit-card:before{content:\"\\e61f\"}.mdi-action-dashboard:before{content:\"\\e620\"}.mdi-action-delete:before{content:\"\\e621\"}.mdi-action-description:before{content:\"\\e622\"}.mdi-action-dns:before{content:\"\\e623\"}.mdi-action-done-all:before{content:\"\\e624\"}.mdi-action-done:before{content:\"\\e625\"}.mdi-action-event:before{content:\"\\e626\"}.mdi-action-exit-to-app:before{content:\"\\e627\"}.mdi-action-explore:before{content:\"\\e628\"}.mdi-action-extension:before{content:\"\\e629\"}.mdi-action-face-unlock:before{content:\"\\e62a\"}.mdi-action-favorite-outline:before{content:\"\\e62b\"}.mdi-action-favorite:before{content:\"\\e62c\"}.mdi-action-find-in-page:before{content:\"\\e62d\"}.mdi-action-find-replace:before{content:\"\\e62e\"}.mdi-action-flip-to-back:before{content:\"\\e62f\"}.mdi-action-flip-to-front:before{content:\"\\e630\"}.mdi-action-get-app:before{content:\"\\e631\"}.mdi-action-grade:before{content:\"\\e632\"}.mdi-action-group-work:before{content:\"\\e633\"}.mdi-action-help:before{content:\"\\e634\"}.mdi-action-highlight-remove:before{content:\"\\e635\"}.mdi-action-history:before{content:\"\\e636\"}.mdi-action-home:before{content:\"\\e637\"}.mdi-action-https:before{content:\"\\e638\"}.mdi-action-info-outline:before{content:\"\\e639\"}.mdi-action-info:before{content:\"\\e63a\"}.mdi-action-input:before{content:\"\\e63b\"}.mdi-action-invert-colors:before{content:\"\\e63c\"}.mdi-action-label-outline:before{content:\"\\e63d\"}.mdi-action-label:before{content:\"\\e63e\"}.mdi-action-language:before{content:\"\\e63f\"}.mdi-action-launch:before{content:\"\\e640\"}.mdi-action-list:before{content:\"\\e641\"}.mdi-action-lock-open:before{content:\"\\e642\"}.mdi-action-lock-outline:before{content:\"\\e643\"}.mdi-action-lock:before{content:\"\\e644\"}.mdi-action-loyalty:before{content:\"\\e645\"}.mdi-action-markunread-mailbox:before{content:\"\\e646\"}.mdi-action-note-add:before{content:\"\\e647\"}.mdi-action-open-in-browser:before{content:\"\\e648\"}.mdi-action-open-in-new:before{content:\"\\e649\"}.mdi-action-open-with:before{content:\"\\e64a\"}.mdi-action-pageview:before{content:\"\\e64b\"}.mdi-action-payment:before{content:\"\\e64c\"}.mdi-action-perm-camera-mic:before{content:\"\\e64d\"}.mdi-action-perm-contact-cal:before{content:\"\\e64e\"}.mdi-action-perm-data-setting:before{content:\"\\e64f\"}.mdi-action-perm-device-info:before{content:\"\\e650\"}.mdi-action-perm-identity:before{content:\"\\e651\"}.mdi-action-perm-media:before{content:\"\\e652\"}.mdi-action-perm-phone-msg:before{content:\"\\e653\"}.mdi-action-perm-scan-wifi:before{content:\"\\e654\"}.mdi-action-picture-in-picture:before{content:\"\\e655\"}.mdi-action-polymer:before{content:\"\\e656\"}.mdi-action-print:before{content:\"\\e657\"}.mdi-action-query-builder:before{content:\"\\e658\"}.mdi-action-question-answer:before{content:\"\\e659\"}.mdi-action-receipt:before{content:\"\\e65a\"}.mdi-action-redeem:before{content:\"\\e65b\"}.mdi-action-reorder:before{content:\"\\e65c\"}.mdi-action-report-problem:before{content:\"\\e65d\"}.mdi-action-restore:before{content:\"\\e65e\"}.mdi-action-room:before{content:\"\\e65f\"}.mdi-action-schedule:before{content:\"\\e660\"}.mdi-action-search:before{content:\"\\e661\"}.mdi-action-settings-applications:before{content:\"\\e662\"}.mdi-action-settings-backup-restore:before{content:\"\\e663\"}.mdi-action-settings-bluetooth:before{content:\"\\e664\"}.mdi-action-settings-cell:before{content:\"\\e665\"}.mdi-action-settings-display:before{content:\"\\e666\"}.mdi-action-settings-ethernet:before{content:\"\\e667\"}.mdi-action-settings-input-antenna:before{content:\"\\e668\"}.mdi-action-settings-input-component:before{content:\"\\e669\"}.mdi-action-settings-input-composite:before{content:\"\\e66a\"}.mdi-action-settings-input-hdmi:before{content:\"\\e66b\"}.mdi-action-settings-input-svideo:before{content:\"\\e66c\"}.mdi-action-settings-overscan:before{content:\"\\e66d\"}.mdi-action-settings-phone:before{content:\"\\e66e\"}.mdi-action-settings-power:before{content:\"\\e66f\"}.mdi-action-settings-remote:before{content:\"\\e670\"}.mdi-action-settings-voice:before{content:\"\\e671\"}.mdi-action-settings:before{content:\"\\e672\"}.mdi-action-shop-two:before{content:\"\\e673\"}.mdi-action-shop:before{content:\"\\e674\"}.mdi-action-shopping-basket:before{content:\"\\e675\"}.mdi-action-shopping-cart:before{content:\"\\e676\"}.mdi-action-speaker-notes:before{content:\"\\e677\"}.mdi-action-spellcheck:before{content:\"\\e678\"}.mdi-action-star-rate:before{content:\"\\e679\"}.mdi-action-stars:before{content:\"\\e67a\"}.mdi-action-store:before{content:\"\\e67b\"}.mdi-action-subject:before{content:\"\\e67c\"}.mdi-action-supervisor-account:before{content:\"\\e67d\"}.mdi-action-swap-horiz:before{content:\"\\e67e\"}.mdi-action-swap-vert-circle:before{content:\"\\e67f\"}.mdi-action-swap-vert:before{content:\"\\e680\"}.mdi-action-system-update-tv:before{content:\"\\e681\"}.mdi-action-tab-unselected:before{content:\"\\e682\"}.mdi-action-tab:before{content:\"\\e683\"}.mdi-action-theaters:before{content:\"\\e684\"}.mdi-action-thumb-down:before{content:\"\\e685\"}.mdi-action-thumb-up:before{content:\"\\e686\"}.mdi-action-thumbs-up-down:before{content:\"\\e687\"}.mdi-action-toc:before{content:\"\\e688\"}.mdi-action-today:before{content:\"\\e689\"}.mdi-action-track-changes:before{content:\"\\e68a\"}.mdi-action-translate:before{content:\"\\e68b\"}.mdi-action-trending-down:before{content:\"\\e68c\"}.mdi-action-trending-neutral:before{content:\"\\e68d\"}.mdi-action-trending-up:before{content:\"\\e68e\"}.mdi-action-turned-in-not:before{content:\"\\e68f\"}.mdi-action-turned-in:before{content:\"\\e690\"}.mdi-action-verified-user:before{content:\"\\e691\"}.mdi-action-view-agenda:before{content:\"\\e692\"}.mdi-action-view-array:before{content:\"\\e693\"}.mdi-action-view-carousel:before{content:\"\\e694\"}.mdi-action-view-column:before{content:\"\\e695\"}.mdi-action-view-day:before{content:\"\\e696\"}.mdi-action-view-headline:before{content:\"\\e697\"}.mdi-action-view-list:before{content:\"\\e698\"}.mdi-action-view-module:before{content:\"\\e699\"}.mdi-action-view-quilt:before{content:\"\\e69a\"}.mdi-action-view-stream:before{content:\"\\e69b\"}.mdi-action-view-week:before{content:\"\\e69c\"}.mdi-action-visibility-off:before{content:\"\\e69d\"}.mdi-action-visibility:before{content:\"\\e69e\"}.mdi-action-wallet-giftcard:before{content:\"\\e69f\"}.mdi-action-wallet-membership:before{content:\"\\e6a0\"}.mdi-action-wallet-travel:before{content:\"\\e6a1\"}.mdi-action-work:before{content:\"\\e6a2\"}.mdi-alert-error:before{content:\"\\e6a3\"}.mdi-alert-warning:before{content:\"\\e6a4\"}.mdi-av-album:before{content:\"\\e6a5\"}.mdi-av-closed-caption:before{content:\"\\e6a6\"}.mdi-av-equalizer:before{content:\"\\e6a7\"}.mdi-av-explicit:before{content:\"\\e6a8\"}.mdi-av-fast-forward:before{content:\"\\e6a9\"}.mdi-av-fast-rewind:before{content:\"\\e6aa\"}.mdi-av-games:before{content:\"\\e6ab\"}.mdi-av-hearing:before{content:\"\\e6ac\"}.mdi-av-high-quality:before{content:\"\\e6ad\"}.mdi-av-loop:before{content:\"\\e6ae\"}.mdi-av-mic-none:before{content:\"\\e6af\"}.mdi-av-mic-off:before{content:\"\\e6b0\"}.mdi-av-mic:before{content:\"\\e6b1\"}.mdi-av-movie:before{content:\"\\e6b2\"}.mdi-av-my-library-add:before{content:\"\\e6b3\"}.mdi-av-my-library-books:before{content:\"\\e6b4\"}.mdi-av-my-library-music:before{content:\"\\e6b5\"}.mdi-av-new-releases:before{content:\"\\e6b6\"}.mdi-av-not-interested:before{content:\"\\e6b7\"}.mdi-av-pause-circle-fill:before{content:\"\\e6b8\"}.mdi-av-pause-circle-outline:before{content:\"\\e6b9\"}.mdi-av-pause:before{content:\"\\e6ba\"}.mdi-av-play-arrow:before{content:\"\\e6bb\"}.mdi-av-play-circle-fill:before{content:\"\\e6bc\"}.mdi-av-play-circle-outline:before{content:\"\\e6bd\"}.mdi-av-play-shopping-bag:before{content:\"\\e6be\"}.mdi-av-playlist-add:before{content:\"\\e6bf\"}.mdi-av-queue-music:before{content:\"\\e6c0\"}.mdi-av-queue:before{content:\"\\e6c1\"}.mdi-av-radio:before{content:\"\\e6c2\"}.mdi-av-recent-actors:before{content:\"\\e6c3\"}.mdi-av-repeat-one:before{content:\"\\e6c4\"}.mdi-av-repeat:before{content:\"\\e6c5\"}.mdi-av-replay:before{content:\"\\e6c6\"}.mdi-av-shuffle:before{content:\"\\e6c7\"}.mdi-av-skip-next:before{content:\"\\e6c8\"}.mdi-av-skip-previous:before{content:\"\\e6c9\"}.mdi-av-snooze:before{content:\"\\e6ca\"}.mdi-av-stop:before{content:\"\\e6cb\"}.mdi-av-subtitles:before{content:\"\\e6cc\"}.mdi-av-surround-sound:before{content:\"\\e6cd\"}.mdi-av-timer:before{content:\"\\e6ce\"}.mdi-av-video-collection:before{content:\"\\e6cf\"}.mdi-av-videocam-off:before{content:\"\\e6d0\"}.mdi-av-videocam:before{content:\"\\e6d1\"}.mdi-av-volume-down:before{content:\"\\e6d2\"}.mdi-av-volume-mute:before{content:\"\\e6d3\"}.mdi-av-volume-off:before{content:\"\\e6d4\"}.mdi-av-volume-up:before{content:\"\\e6d5\"}.mdi-av-web:before{content:\"\\e6d6\"}.mdi-communication-business:before{content:\"\\e6d7\"}.mdi-communication-call-end:before{content:\"\\e6d8\"}.mdi-communication-call-made:before{content:\"\\e6d9\"}.mdi-communication-call-merge:before{content:\"\\e6da\"}.mdi-communication-call-missed:before{content:\"\\e6db\"}.mdi-communication-call-received:before{content:\"\\e6dc\"}.mdi-communication-call-split:before{content:\"\\e6dd\"}.mdi-communication-call:before{content:\"\\e6de\"}.mdi-communication-chat:before{content:\"\\e6df\"}.mdi-communication-clear-all:before{content:\"\\e6e0\"}.mdi-communication-comment:before{content:\"\\e6e1\"}.mdi-communication-contacts:before{content:\"\\e6e2\"}.mdi-communication-dialer-sip:before{content:\"\\e6e3\"}.mdi-communication-dialpad:before{content:\"\\e6e4\"}.mdi-communication-dnd-on:before{content:\"\\e6e5\"}.mdi-communication-email:before{content:\"\\e6e6\"}.mdi-communication-forum:before{content:\"\\e6e7\"}.mdi-communication-import-export:before{content:\"\\e6e8\"}.mdi-communication-invert-colors-off:before{content:\"\\e6e9\"}.mdi-communication-invert-colors-on:before{content:\"\\e6ea\"}.mdi-communication-live-help:before{content:\"\\e6eb\"}.mdi-communication-location-off:before{content:\"\\e6ec\"}.mdi-communication-location-on:before{content:\"\\e6ed\"}.mdi-communication-message:before{content:\"\\e6ee\"}.mdi-communication-messenger:before{content:\"\\e6ef\"}.mdi-communication-no-sim:before{content:\"\\e6f0\"}.mdi-communication-phone:before{content:\"\\e6f1\"}.mdi-communication-portable-wifi-off:before{content:\"\\e6f2\"}.mdi-communication-quick-contacts-dialer:before{content:\"\\e6f3\"}.mdi-communication-quick-contacts-mail:before{content:\"\\e6f4\"}.mdi-communication-ring-volume:before{content:\"\\e6f5\"}.mdi-communication-stay-current-landscape:before{content:\"\\e6f6\"}.mdi-communication-stay-current-portrait:before{content:\"\\e6f7\"}.mdi-communication-stay-primary-landscape:before{content:\"\\e6f8\"}.mdi-communication-stay-primary-portrait:before{content:\"\\e6f9\"}.mdi-communication-swap-calls:before{content:\"\\e6fa\"}.mdi-communication-textsms:before{content:\"\\e6fb\"}.mdi-communication-voicemail:before{content:\"\\e6fc\"}.mdi-communication-vpn-key:before{content:\"\\e6fd\"}.mdi-content-add-box:before{content:\"\\e6fe\"}.mdi-content-add-circle-outline:before{content:\"\\e6ff\"}.mdi-content-add-circle:before{content:\"\\e700\"}.mdi-content-add:before{content:\"\\e701\"}.mdi-content-archive:before{content:\"\\e702\"}.mdi-content-backspace:before{content:\"\\e703\"}.mdi-content-block:before{content:\"\\e704\"}.mdi-content-clear:before{content:\"\\e705\"}.mdi-content-content-copy:before{content:\"\\e706\"}.mdi-content-content-cut:before{content:\"\\e707\"}.mdi-content-content-paste:before{content:\"\\e708\"}.mdi-content-create:before{content:\"\\e709\"}.mdi-content-drafts:before{content:\"\\e70a\"}.mdi-content-filter-list:before{content:\"\\e70b\"}.mdi-content-flag:before{content:\"\\e70c\"}.mdi-content-forward:before{content:\"\\e70d\"}.mdi-content-gesture:before{content:\"\\e70e\"}.mdi-content-inbox:before{content:\"\\e70f\"}.mdi-content-link:before{content:\"\\e710\"}.mdi-content-mail:before{content:\"\\e711\"}.mdi-content-markunread:before{content:\"\\e712\"}.mdi-content-redo:before{content:\"\\e713\"}.mdi-content-remove-circle-outline:before{content:\"\\e714\"}.mdi-content-remove-circle:before{content:\"\\e715\"}.mdi-content-remove:before{content:\"\\e716\"}.mdi-content-reply-all:before{content:\"\\e717\"}.mdi-content-reply:before{content:\"\\e718\"}.mdi-content-report:before{content:\"\\e719\"}.mdi-content-save:before{content:\"\\e71a\"}.mdi-content-select-all:before{content:\"\\e71b\"}.mdi-content-send:before{content:\"\\e71c\"}.mdi-content-sort:before{content:\"\\e71d\"}.mdi-content-text-format:before{content:\"\\e71e\"}.mdi-content-undo:before{content:\"\\e71f\"}.mdi-editor-attach-file:before{content:\"\\e776\"}.mdi-editor-attach-money:before{content:\"\\e777\"}.mdi-editor-border-all:before{content:\"\\e778\"}.mdi-editor-border-bottom:before{content:\"\\e779\"}.mdi-editor-border-clear:before{content:\"\\e77a\"}.mdi-editor-border-color:before{content:\"\\e77b\"}.mdi-editor-border-horizontal:before{content:\"\\e77c\"}.mdi-editor-border-inner:before{content:\"\\e77d\"}.mdi-editor-border-left:before{content:\"\\e77e\"}.mdi-editor-border-outer:before{content:\"\\e77f\"}.mdi-editor-border-right:before{content:\"\\e780\"}.mdi-editor-border-style:before{content:\"\\e781\"}.mdi-editor-border-top:before{content:\"\\e782\"}.mdi-editor-border-vertical:before{content:\"\\e783\"}.mdi-editor-format-align-center:before{content:\"\\e784\"}.mdi-editor-format-align-justify:before{content:\"\\e785\"}.mdi-editor-format-align-left:before{content:\"\\e786\"}.mdi-editor-format-align-right:before{content:\"\\e787\"}.mdi-editor-format-bold:before{content:\"\\e788\"}.mdi-editor-format-clear:before{content:\"\\e789\"}.mdi-editor-format-color-fill:before{content:\"\\e78a\"}.mdi-editor-format-color-reset:before{content:\"\\e78b\"}.mdi-editor-format-color-text:before{content:\"\\e78c\"}.mdi-editor-format-indent-decrease:before{content:\"\\e78d\"}.mdi-editor-format-indent-increase:before{content:\"\\e78e\"}.mdi-editor-format-italic:before{content:\"\\e78f\"}.mdi-editor-format-line-spacing:before{content:\"\\e790\"}.mdi-editor-format-list-bulleted:before{content:\"\\e791\"}.mdi-editor-format-list-numbered:before{content:\"\\e792\"}.mdi-editor-format-paint:before{content:\"\\e793\"}.mdi-editor-format-quote:before{content:\"\\e794\"}.mdi-editor-format-size:before{content:\"\\e795\"}.mdi-editor-format-strikethrough:before{content:\"\\e796\"}.mdi-editor-format-textdirection-l-to-r:before{content:\"\\e797\"}.mdi-editor-format-textdirection-r-to-l:before{content:\"\\e798\"}.mdi-editor-format-underline:before{content:\"\\e799\"}.mdi-editor-functions:before{content:\"\\e79a\"}.mdi-editor-insert-chart:before{content:\"\\e79b\"}.mdi-editor-insert-comment:before{content:\"\\e79c\"}.mdi-editor-insert-drive-file:before{content:\"\\e79d\"}.mdi-editor-insert-emoticon:before{content:\"\\e79e\"}.mdi-editor-insert-invitation:before{content:\"\\e79f\"}.mdi-editor-insert-link:before{content:\"\\e7a0\"}.mdi-editor-insert-photo:before{content:\"\\e7a1\"}.mdi-editor-merge-type:before{content:\"\\e7a2\"}.mdi-editor-mode-comment:before{content:\"\\e7a3\"}.mdi-editor-mode-edit:before{content:\"\\e7a4\"}.mdi-editor-publish:before{content:\"\\e7a5\"}.mdi-editor-vertical-align-bottom:before{content:\"\\e7a6\"}.mdi-editor-vertical-align-center:before{content:\"\\e7a7\"}.mdi-editor-vertical-align-top:before{content:\"\\e7a8\"}.mdi-editor-wrap-text:before{content:\"\\e7a9\"}.mdi-file-attachment:before{content:\"\\e7aa\"}.mdi-file-cloud-circle:before{content:\"\\e7ab\"}.mdi-file-cloud-done:before{content:\"\\e7ac\"}.mdi-file-cloud-download:before{content:\"\\e7ad\"}.mdi-file-cloud-off:before{content:\"\\e7ae\"}.mdi-file-cloud-queue:before{content:\"\\e7af\"}.mdi-file-cloud-upload:before{content:\"\\e7b0\"}.mdi-file-cloud:before{content:\"\\e7b1\"}.mdi-file-file-download:before{content:\"\\e7b2\"}.mdi-file-file-upload:before{content:\"\\e7b3\"}.mdi-file-folder-open:before{content:\"\\e7b4\"}.mdi-file-folder-shared:before{content:\"\\e7b5\"}.mdi-file-folder:before{content:\"\\e7b6\"}.mdi-device-access-alarm:before{content:\"\\e720\"}.mdi-device-access-alarms:before{content:\"\\e721\"}.mdi-device-access-time:before{content:\"\\e722\"}.mdi-device-add-alarm:before{content:\"\\e723\"}.mdi-device-airplanemode-off:before{content:\"\\e724\"}.mdi-device-airplanemode-on:before{content:\"\\e725\"}.mdi-device-battery-20:before{content:\"\\e726\"}.mdi-device-battery-30:before{content:\"\\e727\"}.mdi-device-battery-50:before{content:\"\\e728\"}.mdi-device-battery-60:before{content:\"\\e729\"}.mdi-device-battery-80:before{content:\"\\e72a\"}.mdi-device-battery-90:before{content:\"\\e72b\"}.mdi-device-battery-alert:before{content:\"\\e72c\"}.mdi-device-battery-charging-20:before{content:\"\\e72d\"}.mdi-device-battery-charging-30:before{content:\"\\e72e\"}.mdi-device-battery-charging-50:before{content:\"\\e72f\"}.mdi-device-battery-charging-60:before{content:\"\\e730\"}.mdi-device-battery-charging-80:before{content:\"\\e731\"}.mdi-device-battery-charging-90:before{content:\"\\e732\"}.mdi-device-battery-charging-full:before{content:\"\\e733\"}.mdi-device-battery-full:before{content:\"\\e734\"}.mdi-device-battery-std:before{content:\"\\e735\"}.mdi-device-battery-unknown:before{content:\"\\e736\"}.mdi-device-bluetooth-connected:before{content:\"\\e737\"}.mdi-device-bluetooth-disabled:before{content:\"\\e738\"}.mdi-device-bluetooth-searching:before{content:\"\\e739\"}.mdi-device-bluetooth:before{content:\"\\e73a\"}.mdi-device-brightness-auto:before{content:\"\\e73b\"}.mdi-device-brightness-high:before{content:\"\\e73c\"}.mdi-device-brightness-low:before{content:\"\\e73d\"}.mdi-device-brightness-medium:before{content:\"\\e73e\"}.mdi-device-data-usage:before{content:\"\\e73f\"}.mdi-device-developer-mode:before{content:\"\\e740\"}.mdi-device-devices:before{content:\"\\e741\"}.mdi-device-dvr:before{content:\"\\e742\"}.mdi-device-gps-fixed:before{content:\"\\e743\"}.mdi-device-gps-not-fixed:before{content:\"\\e744\"}.mdi-device-gps-off:before{content:\"\\e745\"}.mdi-device-location-disabled:before{content:\"\\e746\"}.mdi-device-location-searching:before{content:\"\\e747\"}.mdi-device-multitrack-audio:before{content:\"\\e748\"}.mdi-device-network-cell:before{content:\"\\e749\"}.mdi-device-network-wifi:before{content:\"\\e74a\"}.mdi-device-nfc:before{content:\"\\e74b\"}.mdi-device-now-wallpaper:before{content:\"\\e74c\"}.mdi-device-now-widgets:before{content:\"\\e74d\"}.mdi-device-screen-lock-landscape:before{content:\"\\e74e\"}.mdi-device-screen-lock-portrait:before{content:\"\\e74f\"}.mdi-device-screen-lock-rotation:before{content:\"\\e750\"}.mdi-device-screen-rotation:before{content:\"\\e751\"}.mdi-device-sd-storage:before{content:\"\\e752\"}.mdi-device-settings-system-daydream:before{content:\"\\e753\"}.mdi-device-signal-cellular-0-bar:before{content:\"\\e754\"}.mdi-device-signal-cellular-1-bar:before{content:\"\\e755\"}.mdi-device-signal-cellular-2-bar:before{content:\"\\e756\"}.mdi-device-signal-cellular-3-bar:before{content:\"\\e757\"}.mdi-device-signal-cellular-4-bar:before{content:\"\\e758\"}.mdi-signal-wifi-statusbar-connected-no-internet-after:before{content:\"\\e8f6\"}.mdi-device-signal-cellular-connected-no-internet-0-bar:before{content:\"\\e759\"}.mdi-device-signal-cellular-connected-no-internet-1-bar:before{content:\"\\e75a\"}.mdi-device-signal-cellular-connected-no-internet-2-bar:before{content:\"\\e75b\"}.mdi-device-signal-cellular-connected-no-internet-3-bar:before{content:\"\\e75c\"}.mdi-device-signal-cellular-connected-no-internet-4-bar:before{content:\"\\e75d\"}.mdi-device-signal-cellular-no-sim:before{content:\"\\e75e\"}.mdi-device-signal-cellular-null:before{content:\"\\e75f\"}.mdi-device-signal-cellular-off:before{content:\"\\e760\"}.mdi-device-signal-wifi-0-bar:before{content:\"\\e761\"}.mdi-device-signal-wifi-1-bar:before{content:\"\\e762\"}.mdi-device-signal-wifi-2-bar:before{content:\"\\e763\"}.mdi-device-signal-wifi-3-bar:before{content:\"\\e764\"}.mdi-device-signal-wifi-4-bar:before{content:\"\\e765\"}.mdi-device-signal-wifi-off:before{content:\"\\e766\"}.mdi-device-signal-wifi-statusbar-1-bar:before{content:\"\\e767\"}.mdi-device-signal-wifi-statusbar-2-bar:before{content:\"\\e768\"}.mdi-device-signal-wifi-statusbar-3-bar:before{content:\"\\e769\"}.mdi-device-signal-wifi-statusbar-4-bar:before{content:\"\\e76a\"}.mdi-device-signal-wifi-statusbar-connected-no-internet-:before{content:\"\\e76b\"}.mdi-device-signal-wifi-statusbar-connected-no-internet:before{content:\"\\e76f\"}.mdi-device-signal-wifi-statusbar-connected-no-internet-2:before{content:\"\\e76c\"}.mdi-device-signal-wifi-statusbar-connected-no-internet-3:before{content:\"\\e76d\"}.mdi-device-signal-wifi-statusbar-connected-no-internet-4:before{content:\"\\e76e\"}.mdi-signal-wifi-statusbar-not-connected-after:before{content:\"\\e8f7\"}.mdi-device-signal-wifi-statusbar-not-connected:before{content:\"\\e770\"}.mdi-device-signal-wifi-statusbar-null:before{content:\"\\e771\"}.mdi-device-storage:before{content:\"\\e772\"}.mdi-device-usb:before{content:\"\\e773\"}.mdi-device-wifi-lock:before{content:\"\\e774\"}.mdi-device-wifi-tethering:before{content:\"\\e775\"}.mdi-hardware-cast-connected:before{content:\"\\e7b7\"}.mdi-hardware-cast:before{content:\"\\e7b8\"}.mdi-hardware-computer:before{content:\"\\e7b9\"}.mdi-hardware-desktop-mac:before{content:\"\\e7ba\"}.mdi-hardware-desktop-windows:before{content:\"\\e7bb\"}.mdi-hardware-dock:before{content:\"\\e7bc\"}.mdi-hardware-gamepad:before{content:\"\\e7bd\"}.mdi-hardware-headset-mic:before{content:\"\\e7be\"}.mdi-hardware-headset:before{content:\"\\e7bf\"}.mdi-hardware-keyboard-alt:before{content:\"\\e7c0\"}.mdi-hardware-keyboard-arrow-down:before{content:\"\\e7c1\"}.mdi-hardware-keyboard-arrow-left:before{content:\"\\e7c2\"}.mdi-hardware-keyboard-arrow-right:before{content:\"\\e7c3\"}.mdi-hardware-keyboard-arrow-up:before{content:\"\\e7c4\"}.mdi-hardware-keyboard-backspace:before{content:\"\\e7c5\"}.mdi-hardware-keyboard-capslock:before{content:\"\\e7c6\"}.mdi-hardware-keyboard-control:before{content:\"\\e7c7\"}.mdi-hardware-keyboard-hide:before{content:\"\\e7c8\"}.mdi-hardware-keyboard-return:before{content:\"\\e7c9\"}.mdi-hardware-keyboard-tab:before{content:\"\\e7ca\"}.mdi-hardware-keyboard-voice:before{content:\"\\e7cb\"}.mdi-hardware-keyboard:before{content:\"\\e7cc\"}.mdi-hardware-laptop-chromebook:before{content:\"\\e7cd\"}.mdi-hardware-laptop-mac:before{content:\"\\e7ce\"}.mdi-hardware-laptop-windows:before{content:\"\\e7cf\"}.mdi-hardware-laptop:before{content:\"\\e7d0\"}.mdi-hardware-memory:before{content:\"\\e7d1\"}.mdi-hardware-mouse:before{content:\"\\e7d2\"}.mdi-hardware-phone-android:before{content:\"\\e7d3\"}.mdi-hardware-phone-iphone:before{content:\"\\e7d4\"}.mdi-hardware-phonelink-off:before{content:\"\\e7d5\"}.mdi-hardware-phonelink:before{content:\"\\e7d6\"}.mdi-hardware-security:before{content:\"\\e7d7\"}.mdi-hardware-sim-card:before{content:\"\\e7d8\"}.mdi-hardware-smartphone:before{content:\"\\e7d9\"}.mdi-hardware-speaker:before{content:\"\\e7da\"}.mdi-hardware-tablet-android:before{content:\"\\e7db\"}.mdi-hardware-tablet-mac:before{content:\"\\e7dc\"}.mdi-hardware-tablet:before{content:\"\\e7dd\"}.mdi-hardware-tv:before{content:\"\\e7de\"}.mdi-hardware-watch:before{content:\"\\e7df\"}.mdi-image-add-to-photos:before{content:\"\\e7e0\"}.mdi-image-adjust:before{content:\"\\e7e1\"}.mdi-image-assistant-photo:before{content:\"\\e7e2\"}.mdi-image-audiotrack:before{content:\"\\e7e3\"}.mdi-image-blur-circular:before{content:\"\\e7e4\"}.mdi-image-blur-linear:before{content:\"\\e7e5\"}.mdi-image-blur-off:before{content:\"\\e7e6\"}.mdi-image-blur-on:before{content:\"\\e7e7\"}.mdi-image-brightness-1:before{content:\"\\e7e8\"}.mdi-image-brightness-2:before{content:\"\\e7e9\"}.mdi-image-brightness-3:before{content:\"\\e7ea\"}.mdi-image-brightness-4:before{content:\"\\e7eb\"}.mdi-image-brightness-5:before{content:\"\\e7ec\"}.mdi-image-brightness-6:before{content:\"\\e7ed\"}.mdi-image-brightness-7:before{content:\"\\e7ee\"}.mdi-image-brush:before{content:\"\\e7ef\"}.mdi-image-camera-alt:before{content:\"\\e7f0\"}.mdi-image-camera-front:before{content:\"\\e7f1\"}.mdi-image-camera-rear:before{content:\"\\e7f2\"}.mdi-image-camera-roll:before{content:\"\\e7f3\"}.mdi-image-camera:before{content:\"\\e7f4\"}.mdi-image-center-focus-strong:before{content:\"\\e7f5\"}.mdi-image-center-focus-weak:before{content:\"\\e7f6\"}.mdi-image-collections:before{content:\"\\e7f7\"}.mdi-image-color-lens:before{content:\"\\e7f8\"}.mdi-image-colorize:before{content:\"\\e7f9\"}.mdi-image-compare:before{content:\"\\e7fa\"}.mdi-image-control-point-duplicate:before{content:\"\\e7fb\"}.mdi-image-control-point:before{content:\"\\e7fc\"}.mdi-image-crop-3-2:before{content:\"\\e7fd\"}.mdi-image-crop-5-4:before{content:\"\\e7fe\"}.mdi-image-crop-7-5:before{content:\"\\e7ff\"}.mdi-image-crop-16-9:before{content:\"\\e800\"}.mdi-image-crop-din:before{content:\"\\e801\"}.mdi-image-crop-free:before{content:\"\\e802\"}.mdi-image-crop-landscape:before{content:\"\\e803\"}.mdi-image-crop-original:before{content:\"\\e804\"}.mdi-image-crop-portrait:before{content:\"\\e805\"}.mdi-image-crop-square:before{content:\"\\e806\"}.mdi-image-crop:before{content:\"\\e807\"}.mdi-image-dehaze:before{content:\"\\e808\"}.mdi-image-details:before{content:\"\\e809\"}.mdi-image-edit:before{content:\"\\e80a\"}.mdi-image-exposure-minus-1:before{content:\"\\e80b\"}.mdi-image-exposure-minus-2:before{content:\"\\e80c\"}.mdi-image-exposure-plus-1:before{content:\"\\e80d\"}.mdi-image-exposure-plus-2:before{content:\"\\e80e\"}.mdi-image-exposure-zero:before{content:\"\\e80f\"}.mdi-image-exposure:before{content:\"\\e810\"}.mdi-image-filter-1:before{content:\"\\e811\"}.mdi-image-filter-2:before{content:\"\\e812\"}.mdi-image-filter-3:before{content:\"\\e813\"}.mdi-image-filter-4:before{content:\"\\e814\"}.mdi-image-filter-5:before{content:\"\\e815\"}.mdi-image-filter-6:before{content:\"\\e816\"}.mdi-image-filter-7:before{content:\"\\e817\"}.mdi-image-filter-8:before{content:\"\\e818\"}.mdi-image-filter-9-plus:before{content:\"\\e819\"}.mdi-image-filter-9:before{content:\"\\e81a\"}.mdi-image-filter-b-and-w:before{content:\"\\e81b\"}.mdi-image-filter-center-focus:before{content:\"\\e81c\"}.mdi-image-filter-drama:before{content:\"\\e81d\"}.mdi-image-filter-frames:before{content:\"\\e81e\"}.mdi-image-filter-hdr:before{content:\"\\e81f\"}.mdi-image-filter-none:before{content:\"\\e820\"}.mdi-image-filter-tilt-shift:before{content:\"\\e821\"}.mdi-image-filter-vintage:before{content:\"\\e822\"}.mdi-image-filter:before{content:\"\\e823\"}.mdi-image-flare:before{content:\"\\e824\"}.mdi-image-flash-auto:before{content:\"\\e825\"}.mdi-image-flash-off:before{content:\"\\e826\"}.mdi-image-flash-on:before{content:\"\\e827\"}.mdi-image-flip:before{content:\"\\e828\"}.mdi-image-gradient:before{content:\"\\e829\"}.mdi-image-grain:before{content:\"\\e82a\"}.mdi-image-grid-off:before{content:\"\\e82b\"}.mdi-image-grid-on:before{content:\"\\e82c\"}.mdi-image-hdr-off:before{content:\"\\e82d\"}.mdi-image-hdr-on:before{content:\"\\e82e\"}.mdi-image-hdr-strong:before{content:\"\\e82f\"}.mdi-image-hdr-weak:before{content:\"\\e830\"}.mdi-image-healing:before{content:\"\\e831\"}.mdi-image-image-aspect-ratio:before{content:\"\\e832\"}.mdi-image-image:before{content:\"\\e833\"}.mdi-image-iso:before{content:\"\\e834\"}.mdi-image-landscape:before{content:\"\\e835\"}.mdi-image-leak-add:before{content:\"\\e836\"}.mdi-image-leak-remove:before{content:\"\\e837\"}.mdi-image-lens:before{content:\"\\e838\"}.mdi-image-looks-3:before{content:\"\\e839\"}.mdi-image-looks-4:before{content:\"\\e83a\"}.mdi-image-looks-5:before{content:\"\\e83b\"}.mdi-image-looks-6:before{content:\"\\e83c\"}.mdi-image-looks-one:before{content:\"\\e83d\"}.mdi-image-looks-two:before{content:\"\\e83e\"}.mdi-image-looks:before{content:\"\\e83f\"}.mdi-image-loupe:before{content:\"\\e840\"}.mdi-image-movie-creation:before{content:\"\\e841\"}.mdi-image-nature-people:before{content:\"\\e842\"}.mdi-image-nature:before{content:\"\\e843\"}.mdi-image-navigate-before:before{content:\"\\e844\"}.mdi-image-navigate-next:before{content:\"\\e845\"}.mdi-image-palette:before{content:\"\\e846\"}.mdi-image-panorama-fisheye:before{content:\"\\e847\"}.mdi-image-panorama-horizontal:before{content:\"\\e848\"}.mdi-image-panorama-vertical:before{content:\"\\e849\"}.mdi-image-panorama-wide-angle:before{content:\"\\e84a\"}.mdi-image-panorama:before{content:\"\\e84b\"}.mdi-image-photo-album:before{content:\"\\e84c\"}.mdi-image-photo-camera:before{content:\"\\e84d\"}.mdi-image-photo-library:before{content:\"\\e84e\"}.mdi-image-photo:before{content:\"\\e84f\"}.mdi-image-portrait:before{content:\"\\e850\"}.mdi-image-remove-red-eye:before{content:\"\\e851\"}.mdi-image-rotate-left:before{content:\"\\e852\"}.mdi-image-rotate-right:before{content:\"\\e853\"}.mdi-image-slideshow:before{content:\"\\e854\"}.mdi-image-straighten:before{content:\"\\e855\"}.mdi-image-style:before{content:\"\\e856\"}.mdi-image-switch-camera:before{content:\"\\e857\"}.mdi-image-switch-video:before{content:\"\\e858\"}.mdi-image-tag-faces:before{content:\"\\e859\"}.mdi-image-texture:before{content:\"\\e85a\"}.mdi-image-timelapse:before{content:\"\\e85b\"}.mdi-image-timer-3:before{content:\"\\e85c\"}.mdi-image-timer-10:before{content:\"\\e85d\"}.mdi-image-timer-auto:before{content:\"\\e85e\"}.mdi-image-timer-off:before{content:\"\\e85f\"}.mdi-image-timer:before{content:\"\\e860\"}.mdi-image-tonality:before{content:\"\\e861\"}.mdi-image-transform:before{content:\"\\e862\"}.mdi-image-tune:before{content:\"\\e863\"}.mdi-image-wb-auto:before{content:\"\\e864\"}.mdi-image-wb-cloudy:before{content:\"\\e865\"}.mdi-image-wb-incandescent:before{content:\"\\e866\"}.mdi-image-wb-irradescent:before{content:\"\\e867\"}.mdi-image-wb-sunny:before{content:\"\\e868\"}.mdi-maps-beenhere:before{content:\"\\e869\"}.mdi-maps-directions-bike:before{content:\"\\e86a\"}.mdi-maps-directions-bus:before{content:\"\\e86b\"}.mdi-maps-directions-car:before{content:\"\\e86c\"}.mdi-maps-directions-ferry:before{content:\"\\e86d\"}.mdi-maps-directions-subway:before{content:\"\\e86e\"}.mdi-maps-directions-train:before{content:\"\\e86f\"}.mdi-maps-directions-transit:before{content:\"\\e870\"}.mdi-maps-directions-walk:before{content:\"\\e871\"}.mdi-maps-directions:before{content:\"\\e872\"}.mdi-maps-flight:before{content:\"\\e873\"}.mdi-maps-hotel:before{content:\"\\e874\"}.mdi-maps-layers-clear:before{content:\"\\e875\"}.mdi-maps-layers:before{content:\"\\e876\"}.mdi-maps-local-airport:before{content:\"\\e877\"}.mdi-maps-local-atm:before{content:\"\\e878\"}.mdi-maps-local-attraction:before{content:\"\\e879\"}.mdi-maps-local-bar:before{content:\"\\e87a\"}.mdi-maps-local-cafe:before{content:\"\\e87b\"}.mdi-maps-local-car-wash:before{content:\"\\e87c\"}.mdi-maps-local-convenience-store:before{content:\"\\e87d\"}.mdi-maps-local-drink:before{content:\"\\e87e\"}.mdi-maps-local-florist:before{content:\"\\e87f\"}.mdi-maps-local-gas-station:before{content:\"\\e880\"}.mdi-maps-local-grocery-store:before{content:\"\\e881\"}.mdi-maps-local-hospital:before{content:\"\\e882\"}.mdi-maps-local-hotel:before{content:\"\\e883\"}.mdi-maps-local-laundry-service:before{content:\"\\e884\"}.mdi-maps-local-library:before{content:\"\\e885\"}.mdi-maps-local-mall:before{content:\"\\e886\"}.mdi-maps-local-movies:before{content:\"\\e887\"}.mdi-maps-local-offer:before{content:\"\\e888\"}.mdi-maps-local-parking:before{content:\"\\e889\"}.mdi-maps-local-pharmacy:before{content:\"\\e88a\"}.mdi-maps-local-phone:before{content:\"\\e88b\"}.mdi-maps-local-pizza:before{content:\"\\e88c\"}.mdi-maps-local-play:before{content:\"\\e88d\"}.mdi-maps-local-post-office:before{content:\"\\e88e\"}.mdi-maps-local-print-shop:before{content:\"\\e88f\"}.mdi-maps-local-restaurant:before{content:\"\\e890\"}.mdi-maps-local-see:before{content:\"\\e891\"}.mdi-maps-local-shipping:before{content:\"\\e892\"}.mdi-maps-local-taxi:before{content:\"\\e893\"}.mdi-maps-location-history:before{content:\"\\e894\"}.mdi-maps-map:before{content:\"\\e895\"}.mdi-maps-my-location:before{content:\"\\e896\"}.mdi-maps-navigation:before{content:\"\\e897\"}.mdi-maps-pin-drop:before{content:\"\\e898\"}.mdi-maps-place:before{content:\"\\e899\"}.mdi-maps-rate-review:before{content:\"\\e89a\"}.mdi-maps-restaurant-menu:before{content:\"\\e89b\"}.mdi-maps-satellite:before{content:\"\\e89c\"}.mdi-maps-store-mall-directory:before{content:\"\\e89d\"}.mdi-maps-terrain:before{content:\"\\e89e\"}.mdi-maps-traffic:before{content:\"\\e89f\"}.mdi-navigation-apps:before{content:\"\\e8a0\"}.mdi-navigation-arrow-back:before{content:\"\\e8a1\"}.mdi-navigation-arrow-drop-down-circle:before{content:\"\\e8a2\"}.mdi-navigation-arrow-drop-down:before{content:\"\\e8a3\"}.mdi-navigation-arrow-drop-up:before{content:\"\\e8a4\"}.mdi-navigation-arrow-forward:before{content:\"\\e8a5\"}.mdi-navigation-cancel:before{content:\"\\e8a6\"}.mdi-navigation-check:before{content:\"\\e8a7\"}.mdi-navigation-chevron-left:before{content:\"\\e8a8\"}.mdi-navigation-chevron-right:before{content:\"\\e8a9\"}.mdi-navigation-close:before{content:\"\\e8aa\"}.mdi-navigation-expand-less:before{content:\"\\e8ab\"}.mdi-navigation-expand-more:before{content:\"\\e8ac\"}.mdi-navigation-fullscreen-exit:before{content:\"\\e8ad\"}.mdi-navigation-fullscreen:before{content:\"\\e8ae\"}.mdi-navigation-menu:before{content:\"\\e8af\"}.mdi-navigation-more-horiz:before{content:\"\\e8b0\"}.mdi-navigation-more-vert:before{content:\"\\e8b1\"}.mdi-navigation-refresh:before{content:\"\\e8b2\"}.mdi-navigation-unfold-less:before{content:\"\\e8b3\"}.mdi-navigation-unfold-more:before{content:\"\\e8b4\"}.mdi-notification-adb:before{content:\"\\e8b5\"}.mdi-notification-bluetooth-audio:before{content:\"\\e8b6\"}.mdi-notification-disc-full:before{content:\"\\e8b7\"}.mdi-notification-dnd-forwardslash:before{content:\"\\e8b8\"}.mdi-notification-do-not-disturb:before{content:\"\\e8b9\"}.mdi-notification-drive-eta:before{content:\"\\e8ba\"}.mdi-notification-event-available:before{content:\"\\e8bb\"}.mdi-notification-event-busy:before{content:\"\\e8bc\"}.mdi-notification-event-note:before{content:\"\\e8bd\"}.mdi-notification-folder-special:before{content:\"\\e8be\"}.mdi-notification-mms:before{content:\"\\e8bf\"}.mdi-notification-more:before{content:\"\\e8c0\"}.mdi-notification-network-locked:before{content:\"\\e8c1\"}.mdi-notification-phone-bluetooth-speaker:before{content:\"\\e8c2\"}.mdi-notification-phone-forwarded:before{content:\"\\e8c3\"}.mdi-notification-phone-in-talk:before{content:\"\\e8c4\"}.mdi-notification-phone-locked:before{content:\"\\e8c5\"}.mdi-notification-phone-missed:before{content:\"\\e8c6\"}.mdi-notification-phone-paused:before{content:\"\\e8c7\"}.mdi-notification-play-download:before{content:\"\\e8c8\"}.mdi-notification-play-install:before{content:\"\\e8c9\"}.mdi-notification-sd-card:before{content:\"\\e8ca\"}.mdi-notification-sim-card-alert:before{content:\"\\e8cb\"}.mdi-notification-sms-failed:before{content:\"\\e8cc\"}.mdi-notification-sms:before{content:\"\\e8cd\"}.mdi-notification-sync-disabled:before{content:\"\\e8ce\"}.mdi-notification-sync-problem:before{content:\"\\e8cf\"}.mdi-notification-sync:before{content:\"\\e8d0\"}.mdi-notification-system-update:before{content:\"\\e8d1\"}.mdi-notification-tap-and-play:before{content:\"\\e8d2\"}.mdi-notification-time-to-leave:before{content:\"\\e8d3\"}.mdi-notification-vibration:before{content:\"\\e8d4\"}.mdi-notification-voice-chat:before{content:\"\\e8d5\"}.mdi-notification-vpn-lock:before{content:\"\\e8d6\"}.mdi-social-cake:before{content:\"\\e8d7\"}.mdi-social-domain:before{content:\"\\e8d8\"}.mdi-social-group-add:before{content:\"\\e8d9\"}.mdi-social-group:before{content:\"\\e8da\"}.mdi-social-location-city:before{content:\"\\e8db\"}.mdi-social-mood:before{content:\"\\e8dc\"}.mdi-social-notifications-none:before{content:\"\\e8dd\"}.mdi-social-notifications-off:before{content:\"\\e8de\"}.mdi-social-notifications-on:before{content:\"\\e8df\"}.mdi-social-notifications-paused:before{content:\"\\e8e0\"}.mdi-social-notifications:before{content:\"\\e8e1\"}.mdi-social-pages:before{content:\"\\e8e2\"}.mdi-social-party-mode:before{content:\"\\e8e3\"}.mdi-social-people-outline:before{content:\"\\e8e4\"}.mdi-social-people:before{content:\"\\e8e5\"}.mdi-social-person-add:before{content:\"\\e8e6\"}.mdi-social-person-outline:before{content:\"\\e8e7\"}.mdi-social-person:before{content:\"\\e8e8\"}.mdi-social-plus-one:before{content:\"\\e8e9\"}.mdi-social-poll:before{content:\"\\e8ea\"}.mdi-social-public:before{content:\"\\e8eb\"}.mdi-social-school:before{content:\"\\e8ec\"}.mdi-social-share:before{content:\"\\e8ed\"}.mdi-social-whatshot:before{content:\"\\e8ee\"}.mdi-toggle-check-box-outline-blank:before{content:\"\\e8ef\"}.mdi-toggle-check-box:before{content:\"\\e8f0\"}.mdi-toggle-radio-button-off:before{content:\"\\e8f1\"}.mdi-toggle-radio-button-on:before{content:\"\\e8f2\"}.mdi-toggle-star-half:before{content:\"\\e8f3\"}.mdi-toggle-star-outline:before{content:\"\\e8f4\"}.mdi-toggle-star:before{content:\"\\e8f5\"}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width: 601px){.container{width:85%}}@media only screen and (min-width: 993px){.container{width:70%}}.container .row{margin-left:-0.75rem;margin-right:-0.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row .col{float:left;box-sizing:border-box;padding:0 0.75rem}.row .col[class*=\"push-\"],.row .col[class*=\"pull-\"]{position:relative}.row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-s1{margin-left:8.3333333333%}.row .col.pull-s1{right:8.3333333333%}.row .col.push-s1{left:8.3333333333%}.row .col.offset-s2{margin-left:16.6666666667%}.row .col.pull-s2{right:16.6666666667%}.row .col.push-s2{left:16.6666666667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.3333333333%}.row .col.pull-s4{right:33.3333333333%}.row .col.push-s4{left:33.3333333333%}.row .col.offset-s5{margin-left:41.6666666667%}.row .col.pull-s5{right:41.6666666667%}.row .col.push-s5{left:41.6666666667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.3333333333%}.row .col.pull-s7{right:58.3333333333%}.row .col.push-s7{left:58.3333333333%}.row .col.offset-s8{margin-left:66.6666666667%}.row .col.pull-s8{right:66.6666666667%}.row .col.push-s8{left:66.6666666667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.3333333333%}.row .col.pull-s10{right:83.3333333333%}.row .col.push-s10{left:83.3333333333%}.row .col.offset-s11{margin-left:91.6666666667%}.row .col.pull-s11{right:91.6666666667%}.row .col.push-s11{left:91.6666666667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width: 601px){.row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width: 993px){.row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav a{color:#fff}nav i,nav [class^=\"mdi-\"],nav [class*=\"mdi-\"],nav i.material-icons{display:block;font-size:2rem;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width: 993px){nav a.button-collapse{display:none}}nav .button-collapse{float:left;position:relative;z-index:1;height:56px}nav .button-collapse i{font-size:2.7rem;height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0;white-space:nowrap}nav .brand-logo.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media only screen and (max-width: 992px){nav .brand-logo{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;-webkit-transform:none;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}nav .brand-logo.right{right:0.5rem;padding:0}nav ul{margin:0}nav ul li{transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,0.1)}nav ul a{transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-large,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a:hover{background-color:rgba(0,0,0,0.1)}nav ul.left{float:left}nav .input-field{margin:0}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:rgba(255,255,255,0.7);transition:color .3s}nav .input-field label.active i{color:#fff}nav .input-field label.active{-webkit-transform:translateY(0);transform:translateY(0)}.navbar-fixed{position:relative;height:56px;z-index:998}.navbar-fixed nav{position:fixed}@media only screen and (min-width: 601px){nav,nav .nav-wrapper i,nav a.button-collapse,nav a.button-collapse i{height:64px;line-height:64px}.navbar-fixed{height:64px}}@font-face{font-family:\"Roboto\";src:local(Roboto Thin),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\");font-weight:200}@font-face{font-family:\"Roboto\";src:local(Roboto Light),url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"truetype\");font-weight:300}@font-face{font-family:\"Roboto\";src:local(Roboto Regular),url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format(\"truetype\");font-weight:400}@font-face{font-family:\"Roboto\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ") format(\"truetype\");font-weight:500}@font-face{font-family:\"Roboto\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format(\"truetype\");font-weight:700}a{text-decoration:none}html{line-height:1.5;font-family:\"Roboto\", sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}@media only screen and (min-width: 0){html{font-size:14px}}@media only screen and (min-width: 992px){html{font-size:14.5px}}@media only screen and (min-width: 1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.1}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;line-height:110%;margin:2.1rem 0 1.68rem 0}h2{font-size:3.56rem;line-height:110%;margin:1.78rem 0 1.424rem 0}h3{font-size:2.92rem;line-height:110%;margin:1.46rem 0 1.168rem 0}h4{font-size:2.28rem;line-height:110%;margin:1.14rem 0 0.912rem 0}h5{font-size:1.64rem;line-height:110%;margin:0.82rem 0 0.656rem 0}h6{font-size:1rem;line-height:110%;margin:0.5rem 0 0.4rem 0}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light,footer.page-footer .footer-copyright{font-weight:300}.thin{font-weight:200}.flow-text{font-weight:300}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.card-panel{transition:box-shadow .25s;padding:20px;margin:0.5rem 0 1rem 0;border-radius:2px;background-color:#fff}.card{position:relative;margin:0.5rem 0 1rem 0;background-color:#fff;transition:box-shadow .25s;border-radius:2px}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.small,.card.medium,.card.large{position:relative}.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:40%;overflow:hidden}.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0;z-index:1;background-color:inherit}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;padding:20px}.card .card-content{padding:20px;border-radius:0 0 2px 2px}.card .card-content p{margin:0;color:inherit}.card .card-content .card-title{line-height:48px}.card .card-action{border-top:1px solid rgba(160,160,160,0.2);padding:20px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:20px;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:20px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;top:100%;height:100%;z-index:1;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:0;width:auto;clear:both;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;word-break:break-all;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.toast .btn,.toast .btn-large,.toast .btn-flat{margin:0;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}@media only screen and (min-width: 601px) and (max-width: 992px){.toast{float:left}}@media only screen and (min-width: 993px){.toast{float:right}}.tabs{display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;overflow-x:auto;overflow-y:hidden;height:48px;background-color:#fff;margin:0 auto;width:100%;white-space:nowrap}.tabs .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:block;float:left;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase;text-overflow:ellipsis;overflow:hidden;letter-spacing:.8px;width:15%;min-width:80px}.tabs .tab a{color:#ee6e73;display:block;width:100%;height:100%;text-overflow:ellipsis;overflow:hidden;transition:color .28s ease}.tabs .tab a:hover{color:#f9c9cb}.tabs .tab.disabled a{color:#f9c9cb;cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;display:none;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;will-change:top, left}.backdrop{position:absolute;opacity:0;display:none;height:7px;width:14px;border-radius:0 0 14px 14px;background-color:#323232;z-index:-1;-webkit-transform-origin:50% 10%;transform-origin:50% 10%;will-change:transform, opacity}.btn,.btn-large,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;outline:0;padding:0 2rem;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn.disabled,.disabled.btn-large,.btn-floating.disabled,.btn-large.disabled,.btn:disabled,.btn-large:disabled,.btn-large:disabled,.btn-floating:disabled{background-color:#DFDFDF !important;box-shadow:none;color:#9F9F9F !important;cursor:default}.btn.disabled *,.disabled.btn-large *,.btn-floating.disabled *,.btn-large.disabled *,.btn:disabled *,.btn-large:disabled *,.btn-large:disabled *,.btn-floating:disabled *{pointer-events:none}.btn.disabled:hover,.disabled.btn-large:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-large:disabled:hover,.btn-floating:disabled:hover{background-color:#DFDFDF;color:#9F9F9F}.btn i,.btn-large i,.btn-floating i,.btn-large i,.btn-flat i{font-size:1.3rem;line-height:inherit}.btn,.btn-large{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;transition:.2s ease-out;cursor:pointer}.btn:hover,.btn-large:hover{background-color:#2bbbad}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:37px;height:37px;line-height:37px;padding:0;background-color:#26a69a;border-radius:50%;transition:.3s;cursor:pointer;vertical-align:middle}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:37px}.btn-floating:hover{background-color:#26a69a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:55.5px;height:55.5px}.btn-floating.btn-large i{line-height:55.5px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:998}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.horizontal{padding:0 0 0 15px}.fixed-action-btn.horizontal ul{text-align:right;right:64px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:initial;width:500px}.fixed-action-btn.horizontal ul li{display:inline-block;margin:15px 15px 0 0}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer}.btn-flat.disabled{color:#b3b3b3;cursor:default}.btn-large{height:54px;line-height:56px}.btn-large i{font-size:1.6rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;max-height:650px;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width, height}.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left;text-transform:none}.dropdown-content li:hover,.dropdown-content li.active,.dropdown-content li.selected{background-color:#eee}.dropdown-content li.active.selected{background-color:#e1e1e1}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:3px;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit}/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;will-change:opacity, transform;transition:all .3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);transition:all 0.7s ease-out;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}.waves-effect input[type=\"button\"],.waves-effect input[type=\"reset\"],.waves-effect input[type=\"submit\"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-notransition{transition:none !important}.waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, #fff 100%, #000 100%)}.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}a.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}@media only screen and (max-width: 992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%}.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-flat{float:right;margin:6px 0}.lean-overlay{position:fixed;z-index:999;top:-100px;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:0.5rem 0 1rem 0}.collapsible-header{display:block;cursor:pointer;min-height:3rem;line-height:3rem;padding:0 1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header i{width:2rem;font-size:1.6rem;line-height:3rem;display:block;float:left;text-align:center;margin-right:1rem}.collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box}.collapsible-body p{margin:0;padding:2rem}.side-nav .collapsible{border:none;box-shadow:none}.side-nav .collapsible li{padding:0}.side-nav .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;margin:0 1rem}.side-nav .collapsible-header i{line-height:inherit}.side-nav .collapsible-body{border:0;background-color:#fff}.side-nav .collapsible-body li a{margin:0 1rem 0 2rem}.collapsible.popout{border:none;box-shadow:none}.collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4}.chip img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip i.material-icons{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.materialboxed{display:block;cursor:-webkit-zoom-in;cursor:zoom-in;position:relative;transition:opacity .4s}.materialboxed:hover{will-change:left, top, width, height}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:-webkit-zoom-out;cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#292929;z-index:999;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #c9f3ef}button:focus{outline:none;background-color:#2ab7a9}label{font-size:0.8rem;color:#9e9e9e}::-webkit-input-placeholder{color:#d1d1d1}:-moz-placeholder{color:#d1d1d1}::-moz-placeholder{color:#d1d1d1}:-ms-input-placeholder{color:#d1d1d1}input:not([type]),input[type=text],input[type=password],input[type=email],input[type=url],input[type=time],input[type=date],input[type=datetime-local],input[type=tel],input[type=number],input[type=search],textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:1rem;margin:0 0 15px 0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}input:not([type]):disabled,input:not([type])[readonly=\"readonly\"],input[type=text]:disabled,input[type=text][readonly=\"readonly\"],input[type=password]:disabled,input[type=password][readonly=\"readonly\"],input[type=email]:disabled,input[type=email][readonly=\"readonly\"],input[type=url]:disabled,input[type=url][readonly=\"readonly\"],input[type=time]:disabled,input[type=time][readonly=\"readonly\"],input[type=date]:disabled,input[type=date][readonly=\"readonly\"],input[type=datetime-local]:disabled,input[type=datetime-local][readonly=\"readonly\"],input[type=tel]:disabled,input[type=tel][readonly=\"readonly\"],input[type=number]:disabled,input[type=number][readonly=\"readonly\"],input[type=search]:disabled,input[type=search][readonly=\"readonly\"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=\"readonly\"]{color:rgba(0,0,0,0.26);border-bottom:1px dotted rgba(0,0,0,0.26)}input:not([type]):disabled+label,input:not([type])[readonly=\"readonly\"]+label,input[type=text]:disabled+label,input[type=text][readonly=\"readonly\"]+label,input[type=password]:disabled+label,input[type=password][readonly=\"readonly\"]+label,input[type=email]:disabled+label,input[type=email][readonly=\"readonly\"]+label,input[type=url]:disabled+label,input[type=url][readonly=\"readonly\"]+label,input[type=time]:disabled+label,input[type=time][readonly=\"readonly\"]+label,input[type=date]:disabled+label,input[type=date][readonly=\"readonly\"]+label,input[type=datetime-local]:disabled+label,input[type=datetime-local][readonly=\"readonly\"]+label,input[type=tel]:disabled+label,input[type=tel][readonly=\"readonly\"]+label,input[type=number]:disabled+label,input[type=number][readonly=\"readonly\"]+label,input[type=search]:disabled+label,input[type=search][readonly=\"readonly\"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=\"readonly\"]+label{color:rgba(0,0,0,0.26)}input:not([type]):focus:not([readonly]),input[type=text]:focus:not([readonly]),input[type=password]:focus:not([readonly]),input[type=email]:focus:not([readonly]),input[type=url]:focus:not([readonly]),input[type=time]:focus:not([readonly]),input[type=date]:focus:not([readonly]),input[type=datetime-local]:focus:not([readonly]),input[type=tel]:focus:not([readonly]),input[type=number]:focus:not([readonly]),input[type=search]:focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}input:not([type]):focus:not([readonly])+label,input[type=text]:focus:not([readonly])+label,input[type=password]:focus:not([readonly])+label,input[type=email]:focus:not([readonly])+label,input[type=url]:focus:not([readonly])+label,input[type=time]:focus:not([readonly])+label,input[type=date]:focus:not([readonly])+label,input[type=datetime-local]:focus:not([readonly])+label,input[type=tel]:focus:not([readonly])+label,input[type=number]:focus:not([readonly])+label,input[type=search]:focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}input:not([type]).valid,input:not([type]):focus.valid,input[type=text].valid,input[type=text]:focus.valid,input[type=password].valid,input[type=password]:focus.valid,input[type=email].valid,input[type=email]:focus.valid,input[type=url].valid,input[type=url]:focus.valid,input[type=time].valid,input[type=time]:focus.valid,input[type=date].valid,input[type=date]:focus.valid,input[type=datetime-local].valid,input[type=datetime-local]:focus.valid,input[type=tel].valid,input[type=tel]:focus.valid,input[type=number].valid,input[type=number]:focus.valid,input[type=search].valid,input[type=search]:focus.valid,textarea.materialize-textarea.valid,textarea.materialize-textarea:focus.valid{border-bottom:1px solid #4CAF50;box-shadow:0 1px 0 0 #4CAF50}input:not([type]).valid+label:after,input:not([type]):focus.valid+label:after,input[type=text].valid+label:after,input[type=text]:focus.valid+label:after,input[type=password].valid+label:after,input[type=password]:focus.valid+label:after,input[type=email].valid+label:after,input[type=email]:focus.valid+label:after,input[type=url].valid+label:after,input[type=url]:focus.valid+label:after,input[type=time].valid+label:after,input[type=time]:focus.valid+label:after,input[type=date].valid+label:after,input[type=date]:focus.valid+label:after,input[type=datetime-local].valid+label:after,input[type=datetime-local]:focus.valid+label:after,input[type=tel].valid+label:after,input[type=tel]:focus.valid+label:after,input[type=number].valid+label:after,input[type=number]:focus.valid+label:after,input[type=search].valid+label:after,input[type=search]:focus.valid+label:after,textarea.materialize-textarea.valid+label:after,textarea.materialize-textarea:focus.valid+label:after{content:attr(data-success);color:#4CAF50;opacity:1}input:not([type]).invalid,input:not([type]):focus.invalid,input[type=text].invalid,input[type=text]:focus.invalid,input[type=password].invalid,input[type=password]:focus.invalid,input[type=email].invalid,input[type=email]:focus.invalid,input[type=url].invalid,input[type=url]:focus.invalid,input[type=time].invalid,input[type=time]:focus.invalid,input[type=date].invalid,input[type=date]:focus.invalid,input[type=datetime-local].invalid,input[type=datetime-local]:focus.invalid,input[type=tel].invalid,input[type=tel]:focus.invalid,input[type=number].invalid,input[type=number]:focus.invalid,input[type=search].invalid,input[type=search]:focus.invalid,textarea.materialize-textarea.invalid,textarea.materialize-textarea:focus.invalid{border-bottom:1px solid #F44336;box-shadow:0 1px 0 0 #F44336}input:not([type]).invalid+label:after,input:not([type]):focus.invalid+label:after,input[type=text].invalid+label:after,input[type=text]:focus.invalid+label:after,input[type=password].invalid+label:after,input[type=password]:focus.invalid+label:after,input[type=email].invalid+label:after,input[type=email]:focus.invalid+label:after,input[type=url].invalid+label:after,input[type=url]:focus.invalid+label:after,input[type=time].invalid+label:after,input[type=time]:focus.invalid+label:after,input[type=date].invalid+label:after,input[type=date]:focus.invalid+label:after,input[type=datetime-local].invalid+label:after,input[type=datetime-local]:focus.invalid+label:after,input[type=tel].invalid+label:after,input[type=tel]:focus.invalid+label:after,input[type=number].invalid+label:after,input[type=number]:focus.invalid+label:after,input[type=search].invalid+label:after,input[type=search]:focus.invalid+label:after,textarea.materialize-textarea.invalid+label:after,textarea.materialize-textarea:focus.invalid+label:after{content:attr(data-error);color:#F44336;opacity:1}input:not([type])+label:after,input[type=text]+label:after,input[type=password]+label:after,input[type=email]+label:after,input[type=url]+label:after,input[type=time]+label:after,input[type=date]+label:after,input[type=datetime-local]+label:after,input[type=tel]+label:after,input[type=number]+label:after,input[type=search]+label:after,textarea.materialize-textarea+label:after{display:block;content:\"\";position:absolute;top:65px;opacity:0;transition:.2s opacity ease-out, .2s color ease-out}.input-field{position:relative;margin-top:1rem}.input-field label{color:#9e9e9e;position:absolute;top:0.8rem;left:0.75rem;font-size:1rem;cursor:text;transition:.2s ease-out}.input-field label.active{font-size:0.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s}.input-field .prefix.active{color:#26a69a}.input-field .prefix ~ input,.input-field .prefix ~ textarea{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix ~ textarea{padding-top:.8rem}.input-field .prefix ~ label{margin-left:3rem}@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;padding-left:4rem;width:calc(100% - 4rem)}.input-field input[type=search]:focus{background-color:#fff;border:0;box-shadow:none;color:#444}.input-field input[type=search]:focus+label i,.input-field input[type=search]:focus ~ .mdi-navigation-close,.input-field input[type=search]:focus ~ .material-icons{color:#444}.input-field input[type=search]+label{left:1rem}.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:.3s color}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{overflow-y:hidden;padding:1.6rem 0;resize:none;min-height:3rem}.hiddendiv{display:none;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem}[type=\"radio\"]:not(:checked),[type=\"radio\"]:checked{position:absolute;left:-9999px;visibility:hidden}[type=\"radio\"]:not(:checked)+label,[type=\"radio\"]:checked+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=\"radio\"]+label:before,[type=\"radio\"]+label:after{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}[type=\"radio\"]:not(:checked)+label:before{border-radius:50%;border:2px solid #5a5a5a}[type=\"radio\"]:not(:checked)+label:after{border-radius:50%;border:2px solid #5a5a5a;z-index:-1;-webkit-transform:scale(0);transform:scale(0)}[type=\"radio\"]:checked+label:before{border-radius:50%;border:2px solid transparent}[type=\"radio\"]:checked+label:after{border-radius:50%;border:2px solid #26a69a;background-color:#26a69a;z-index:0;-webkit-transform:scale(1.02);transform:scale(1.02)}[type=\"radio\"].with-gap:checked+label:before{border-radius:50%;border:2px solid #26a69a}[type=\"radio\"].with-gap:checked+label:after{border-radius:50%;border:2px solid #26a69a;background-color:#26a69a;z-index:0;-webkit-transform:scale(0.5);transform:scale(0.5)}[type=\"radio\"].with-gap:disabled:checked+label:before{border:2px solid rgba(0,0,0,0.26)}[type=\"radio\"].with-gap:disabled:checked+label:after{border:none;background-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:not(:checked)+label:before,[type=\"radio\"]:disabled:checked+label:before{background-color:transparent;border-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled+label{color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:not(:checked)+label:before{border-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:checked+label:after{background-color:rgba(0,0,0,0.26);border-color:#BDBDBD}form p{margin-bottom:10px;text-align:left}form p:last-child{margin-bottom:0}[type=\"checkbox\"]:not(:checked),[type=\"checkbox\"]:checked{position:absolute;left:-9999px;visibility:hidden}[type=\"checkbox\"]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}[type=\"checkbox\"]+label:before{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:2px;transition:.2s}[type=\"checkbox\"]:not(:checked):disabled+label:before{border:none;background-color:rgba(0,0,0,0.26)}[type=\"checkbox\"]:checked+label:before{top:-4px;left:-3px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:checked:disabled+label:before{border-right:2px solid rgba(0,0,0,0.26);border-bottom:2px solid rgba(0,0,0,0.26)}[type=\"checkbox\"]:indeterminate+label:before{left:-10px;top:-11px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,0.26);background-color:transparent}[type=\"checkbox\"].filled-in+label:after{border-radius:2px}[type=\"checkbox\"].filled-in+label:before,[type=\"checkbox\"].filled-in+label:after{content:'';left:0;position:absolute;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}[type=\"checkbox\"].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:20% 40%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}[type=\"checkbox\"].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:checked+label:after{top:0px;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:before{background-color:transparent;border:2px solid transparent}[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:after{border-color:transparent;background-color:#BDBDBD}[type=\"checkbox\"].filled-in:disabled:checked+label:before{background-color:transparent}[type=\"checkbox\"].filled-in:disabled:checked+label:after{background-color:#BDBDBD;border-color:#BDBDBD}.switch,.switch *{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a}.switch label .lever{content:\"\";display:inline-block;position:relative;width:40px;height:15px;background-color:#818181;border-radius:15px;margin-right:10px;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:21px;height:21px;background-color:#F1F1F1;border-radius:21px;box-shadow:0 1px 3px 1px rgba(0,0,0,0.4);left:-5px;top:-3px;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease}input[type=checkbox]:checked:not(:disabled) ~ .lever:active:after{box-shadow:0 1px 3px 1px rgba(0,0,0,0.4),0 0 0 15px rgba(38,166,154,0.1)}input[type=checkbox]:not(:disabled) ~ .lever:active:after{box-shadow:0 1px 3px 1px rgba(0,0,0,0.4),0 0 0 15px rgba(0,0,0,0.08)}.switch label input[type=checkbox]:checked+.lever:after{left:24px}.switch input[type=checkbox][disabled]+.lever{cursor:default}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#BDBDBD}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:1rem;margin:0 0 15px 0;padding:0;display:block}.select-wrapper span.caret{color:initial;position:absolute;right:0;top:16px;font-size:10px}.select-wrapper span.caret.disabled{color:rgba(0,0,0,0.26)}.select-wrapper+label{position:absolute;top:-14px;font-size:0.8rem}select{display:none}select.browser-default{display:block}select:disabled{color:rgba(0,0,0,0.3)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.3);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;border-bottom:1px solid rgba(0,0,0,0.3)}.select-wrapper i{color:rgba(0,0,0,0.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}.select-dropdown li.optgroup ~ li:not(.optgroup){padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0px;padding:0}input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;top:10px;margin-left:-6px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]:focus{outline:none}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#26a69a;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0 0;transition:.3s}input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}input[type=range]{border:1px solid white}input[type=range]::-moz-range-track{height:3px;background:#ddd;border:none}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid white;outline-offset:-1px}input[type=range]:focus::-moz-range-track{background:#ccc}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a}input[type=range]:focus::-ms-fill-lower{background:#888}input[type=range]:focus::-ms-fill-upper{background:#ccc}select{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:20px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:19px;border-left:1px solid #ea4a4f}.table-of-contents a.active{font-weight:500;padding-left:18px;border-left:2px solid #ea4a4f}.side-nav{position:fixed;width:240px;left:-105%;top:0;margin:0;height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:left}.side-nav.right-aligned{will-change:right;right:-105%;left:auto}.side-nav .collapsible{margin:0}.side-nav li{float:none;padding:0 15px;line-height:64px}.side-nav li:hover,.side-nav li.active{background-color:#ddd}.side-nav a{color:#444;display:block;font-size:1rem;height:64px;line-height:64px;padding:0 15px}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.side-nav.fixed a{display:block;padding:0 15px;color:#444}.side-nav.fixed{left:0;position:fixed}.side-nav.fixed.right-aligned{right:0;left:auto}@media only screen and (max-width: 992px){.side-nav.fixed{left:-105%}.side-nav.fixed.right-aligned{right:-105%;left:auto}}.side-nav .collapsible-body li.active,.side-nav.fixed .collapsible-body li.active{background-color:#ee6e73}.side-nav .collapsible-body li.active a,.side-nav.fixed .collapsible-body li.active a{color:#fff}#sidenav-overlay{position:fixed;top:0;left:0;right:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;will-change:opacity}.preloader-wrapper{display:inline-block;position:relative;width:48px;height:48px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-out{from{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4CAF50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;-webkit-perspective:500px;perspective:500px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0% 50%;transform-origin:0% 50%}.carousel .carousel-item{width:200px;position:absolute;top:0;left:0}.carousel .carousel-item img{width:100%}.carousel.carousel-slider{top:0;left:0;height:0}.carousel.carousel-slider .carousel-item{width:100%;height:100%;position:absolute;top:0;left:0}.picker{font-size:16px;text-align:left;line-height:1.2;color:#000000;position:absolute;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker__holder{width:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */.picker__holder,.picker__frame{bottom:0;left:0;right:0;top:100%}.picker__holder{position:fixed;transition:background 0.15s ease-out, top 0s 0.15s;-webkit-backface-visibility:hidden}.picker__frame{position:absolute;margin:0 auto;min-width:256px;width:300px;max-height:350px;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-moz-opacity:0;opacity:0;transition:all 0.15s ease-out}@media (min-height: 28.875em){.picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}}@media (min-height: 40.125em){.picker__frame{margin-bottom:7.5%}}.picker__wrap{display:table;width:100%;height:100%}@media (min-height: 28.875em){.picker__wrap{display:block}}.picker__box{background:#ffffff;display:table-cell;vertical-align:middle}@media (min-height: 28.875em){.picker__box{display:block;border:1px solid #777777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 12px 36px 16px rgba(0,0,0,0.24)}}.picker--opened .picker__holder{top:0;background:transparent;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";zoom:1;background:rgba(0,0,0,0.32);transition:background 0.15s ease-out}.picker--opened .picker__frame{top:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";filter:alpha(opacity=100);-moz-opacity:1;opacity:1}@media (min-height: 35.875em){.picker--opened .picker__frame{top:10%;bottom:20%auto}}.picker__input.picker__input--active{border-color:#E3F2FD}.picker__frame{margin:0 auto;max-width:325px}@media (min-height: 38.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.picker__box{padding:0 1em}.picker__header{text-align:center;position:relative;margin-top:.75em}.picker__month,.picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__select--month,.picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker__select--month.browser-default{display:inline;background-color:#FFFFFF;width:40%}.picker__select--year.browser-default{display:inline;background-color:#FFFFFF;width:25%}.picker__select--month:focus,.picker__select--year:focus{border-color:rgba(0,0,0,0.05)}.picker__nav--prev,.picker__nav--next{position:absolute;padding:.5em 1.25em;width:1em;height:1em;box-sizing:content-box;top:-0.25em}.picker__nav--prev{left:-1em;padding-right:1.25em}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__nav--disabled,.picker__nav--disabled:hover,.picker__nav--disabled:before,.picker__nav--disabled:before:hover{cursor:default;background:none;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__table th,.picker__table td{text-align:center}.picker__table td{margin:0;padding:0}.picker__weekday{width:14.285714286%;font-size:.75em;padding-bottom:.25em;color:#999999;font-weight:500}@media (min-height: 33.875em){.picker__weekday{padding-bottom:.5em}}.picker__day--today{position:relative;color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day--disabled:before{border-top-color:#aaaaaa}.picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__day--outfocus{display:none;padding:.75rem 0;color:#fff}.picker__day--outfocus:hover{cursor:pointer;color:#dddddd;font-weight:500}.picker__day--highlighted:hover,.picker--focused .picker__day--highlighted{cursor:pointer}.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;-webkit-transform:scale(0.75);transform:scale(0.75);background:#0089ec;color:#ffffff}.picker__day--disabled,.picker__day--disabled:hover,.picker--focused .picker__day--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}.picker__day--highlighted.picker__day--disabled,.picker__day--highlighted.picker__day--disabled:hover{background:#bbbbbb}.picker__footer{text-align:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.picker__button--today,.picker__button--clear,.picker__button--close{border:1px solid #ffffff;background:#ffffff;font-size:.8em;padding:.66em 0;font-weight:bold;width:33%;display:inline-block;vertical-align:bottom}.picker__button--today:hover,.picker__button--clear:hover,.picker__button--close:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__button--today:focus,.picker__button--clear:focus,.picker__button--close:focus{background:#b1dcfb;border-color:rgba(0,0,0,0.05);outline:none}.picker__button--today:before,.picker__button--clear:before,.picker__button--close:before{position:relative;display:inline-block;height:0}.picker__button--today:before,.picker__button--clear:before{content:\" \";margin-right:.45em}.picker__button--today:before{top:-0.05em;width:0;border-top:0.66em solid #0059bc;border-left:.66em solid transparent}.picker__button--clear:before{top:-0.25em;width:.66em;border-top:3px solid #ee2200}.picker__button--close:before{content:\"\\D7\";top:-0.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777777}.picker__button--today[disabled],.picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}.picker__button--today[disabled]:before{border-top-color:#aaaaaa}.picker__box{border-radius:2px;overflow:hidden}.picker__date-display{text-align:center;background-color:#26a69a;color:#fff;padding-bottom:15px;font-weight:300}.picker__nav--prev:hover,.picker__nav--next:hover{cursor:pointer;color:#000000;background:#a1ded8}.picker__weekday-display{background-color:#1f897f;padding:10px;font-weight:200;letter-spacing:.5;font-size:1rem;margin-bottom:15px}.picker__month-display{text-transform:uppercase;font-size:2rem}.picker__day-display{font-size:4.5rem;font-weight:400}.picker__year-display{font-size:1.8rem;color:rgba(255,255,255,0.4)}.picker__box{padding:0}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__table{margin-top:0;margin-bottom:.5em}.picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day.picker__day--today{color:#26a69a}.picker__day.picker__day--today.picker__day--selected{color:#fff}.picker__weekday{font-size:.9rem}.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;-webkit-transform:scale(0.9);transform:scale(0.9);background-color:#26a69a;color:#ffffff}.picker__day--selected.picker__day--outfocus,.picker__day--selected:hover.picker__day--outfocus,.picker--focused .picker__day--selected.picker__day--outfocus{background-color:#a1ded8}.picker__footer{text-align:right;padding:5px 10px}.picker__close,.picker__today{font-size:1.1rem;padding:0 1rem;color:#26a69a}.picker__nav--prev:before,.picker__nav--next:before{content:\" \";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:0.75em solid #676767;width:0;height:0;display:block;margin:0 auto}.picker__nav--next:before{border-right:0;border-left:0.75em solid #676767}button.picker__today:focus,button.picker__clear:focus,button.picker__close:focus{background-color:#a1ded8}.picker__list{list-style:none;padding:0.75em 0 4.2em;margin:0}.picker__list-item{border-bottom:1px solid #dddddd;border-top:1px solid #dddddd;margin-bottom:-1px;position:relative;background:#ffffff;padding:.75em 1.25em}@media (min-height: 46.75em){.picker__list-item{padding:.5em 1em}}.picker__list-item:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-color:#0089ec;z-index:10}.picker__list-item--highlighted{border-color:#0089ec;z-index:10}.picker__list-item--highlighted:hover,.picker--focused .picker__list-item--highlighted{cursor:pointer;color:#000000;background:#b1dcfb}.picker__list-item--selected,.picker__list-item--selected:hover,.picker--focused .picker__list-item--selected{background:#0089ec;color:#ffffff;z-index:10}.picker__list-item--disabled,.picker__list-item--disabled:hover,.picker--focused .picker__list-item--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default;border-color:#dddddd;z-index:auto}.picker--time .picker__button--clear{display:block;width:80%;margin:1em auto 0;padding:1em 1.25em;background:none;border:0;font-weight:500;font-size:.67em;text-align:center;text-transform:uppercase;color:#666}.picker--time .picker__button--clear:hover,.picker--time .picker__button--clear:focus{color:#000000;background:#b1dcfb;background:#ee2200;border-color:#ee2200;cursor:pointer;color:#ffffff;outline:none}.picker--time .picker__button--clear:before{top:-0.25em;color:#666;font-size:1.25em;font-weight:bold}.picker--time .picker__button--clear:hover:before,.picker--time .picker__button--clear:focus:before{color:#ffffff}.picker--time .picker__frame{min-width:256px;max-width:320px}.picker--time .picker__box{font-size:1em;background:#f2f2f2;padding:0}@media (min-height: 40.125em){.picker--time .picker__box{margin-bottom:5em}}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_materialize_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _lib_materialize_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_materialize_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_options_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _style_options_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_options_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_youdao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var KEY_CODE = {
  BACKSPACE: 8,
  CTRL: 17,
  SHIFT: 16,
  ALT: 18,
  CMD: 91
};

var Options = /*#__PURE__*/function () {
  function Options() {
    var _this = this;

    _classCallCheck(this, Options);

    this.options = document.querySelectorAll('input[type=checkbox]');
    this.dblclick = document.querySelector('#dblclick');
    this.shortcut = document.querySelector('#shortcut');
    this.shortcut1 = document.querySelector('#shortcut1');
    this.shortcut2 = document.querySelector('#shortcut2');
    this.selectToTranslate = document.querySelector('#selectToTranslate');
    this.wordbook = document.querySelector('#wordbook') || document.createElement("fake");
    this.usePersonalKey = document.querySelector('#usePersonalKey');
    this.keyfrom = document.querySelector('input#keyfrom');
    this.key = document.querySelector('input#key');
    this.shortcutConfig = document.querySelector('#shortcutConfig');
    chrome.storage.sync.get(function (items) {
      _this.dblclick.checked = items.dblclick;
      _this.shortcut.checked = items.shortcut;
      _this.selectToTranslate.checked = items.selectToTranslate;
      _this.wordbook.checked = items.wordbook;
      _this.usePersonalKey.checked = items.usePersonalKey || false;
      _this.keyfrom.value = items.keyfrom || '';
      _this.key.value = items.key || '';

      switch (items.shortcut1) {
        case KEY_CODE['CTRL']:
          _this.shortcut1.value = 'CTRL';
          break;

        case KEY_CODE['SHIFT']:
          _this.shortcut1.value = 'SHIFT';
          break;

        case KEY_CODE['ALT']:
          _this.shortcut1.value = 'ALT';
          break;

        default:
          _this.shortcut1.value = String.fromCharCode(items.shortcut1).toUpperCase();
      }

      switch (items.shortcut2) {
        case KEY_CODE['CTRL']:
          _this.shortcut2.value = 'CTRL';
          break;

        case KEY_CODE['SHIFT']:
          _this.shortcut2.value = 'SHIFT';
          break;

        case KEY_CODE['ALT']:
          _this.shortcut2.value = 'ALT';
          break;

        case KEY_CODE['CMD']:
          _this.shortcut2.value = 'CMD';
          break;

        default:
          _this.shortcut2.value = String.fromCharCode(items.shortcut2).toUpperCase();
      }
    });
  }

  _createClass(Options, [{
    key: "_saveOptions",
    value: function _saveOptions() {
      var dblclick = this.dblclick.checked;
      var selectToTranslate = this.selectToTranslate.checked;
      var wordbook = this.wordbook.checked;
      var shortcut = this.shortcut.checked;
      var shortcut1 = Object.is(this.shortcut1.keyCode, KEY_CODE['BACKSPACE']) ? null : this.shortcut1.keyCode;
      var shortcut2 = Object.is(this.shortcut2.keyCode, KEY_CODE['BACKSPACE']) ? null : this.shortcut2.keyCode;
      chrome.storage.sync.set({
        dblclick: dblclick,
        selectToTranslate: selectToTranslate,
        wordbook: wordbook,
        shortcut: shortcut,
        shortcut1: shortcut1,
        shortcut2: shortcut2
      }, function () {
        Materialize.toast('设置成功', 500);
      });
    }
  }, {
    key: "_saveKey",
    value: function _saveKey() {
      var _this2 = this;

      var usePersonalKey = this.usePersonalKey.checked;
      var keyfrom = this.keyfrom.value;
      var key = this.key.value;

      if (usePersonalKey) {
        var reqResult = this._requestKey();

        if (reqResult) {
          reqResult.then(function (res) {
            chrome.storage.sync.set({
              usePersonalKey: usePersonalKey,
              keyfrom: keyfrom,
              key: key
            }, function () {
              Materialize.toast('设置成功', 500);
            });
          })["catch"](function (err) {
            _this2.usePersonalKey.checked = false;
            Materialize.toast('设置失败，请检查参数', 1000);
          });
        }
      } else {
        chrome.storage.sync.set({
          usePersonalKey: usePersonalKey
        }, function () {
          Materialize.toast('设置成功', 500);
        });
      }
    }
  }, {
    key: "_handleKeyup",
    value: function _handleKeyup(ev, ele) {
      switch (ev.keyCode) {
        case KEY_CODE['BACKSPACE']:
          ele.value = '';
          break;

        case KEY_CODE['CTRL']:
          ele.value = 'CTRL';
          break;

        case KEY_CODE['ALT']:
          ele.value = 'ALT';
          break;

        case KEY_CODE['SHIFT']:
          ele.value = 'SHIFT';
          break;

        case KEY_CODE['CMD']:
          ele.value = 'CMD';
          break;

        default:
          ele.value = String.fromCharCode(ev.keyCode);
          break;
      }

      ele.keyCode = ev.keyCode;

      this._saveOptions();
    }
  }, {
    key: "_requestKey",
    value: function _requestKey() {
      var keyfrom = this.keyfrom.value;
      var key = this.key.value;

      if (!keyfrom || !key) {
        if (!keyfrom) {
          this.keyfrom.focus();
        } else if (!key) {
          this.key.focus();
        }

        return false;
      } else {
        var resType = 'json',
            query = 'test';
        var youdao = new _util_youdao__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](keyfrom, key, resType, query);
        return youdao.getContent();
      }
    }
  }, {
    key: "_trimInput",
    value: function _trimInput(inputEle) {
      if (!inputEle instanceof HTMLInputElement) {
        throw new TypeError('parameter should be instance of HTMLInputElement.');
      }

      inputEle.value = inputEle.value.trim();
    }
  }, {
    key: "_touchUserKey",
    value: function _touchUserKey() {
      var usePersonalKey = this.usePersonalKey.checked;

      if (usePersonalKey) {
        usePersonalKey = this.usePersonalKey.checked = false;
        chrome.storage.sync.set({
          usePersonalKey: usePersonalKey
        }, function () {});
      }
    }
  }, {
    key: "_goShortcutConfig",
    value: function _goShortcutConfig() {
      chrome.tabs.create({
        url: 'chrome://extensions/configureCommands'
      });
      return this;
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      this.shortcut1.addEventListener('click', function (ev) {
        return _this3.shortcut1.select();
      });
      this.shortcut1.addEventListener('keyup', function (ev) {
        return _this3._handleKeyup(ev, shortcut1);
      });
      this.shortcut2.addEventListener('click', function (ev) {
        return _this3.shortcut2.select();
      });
      this.shortcut2.addEventListener('keyup', function (ev) {
        return _this3._handleKeyup(ev, shortcut2);
      });
      this.keyfrom.addEventListener('blur', function (ev) {
        return _this3._trimInput(ev.target);
      });
      this.keyfrom.addEventListener('keydown', this._touchUserKey.bind(this));
      this.key.addEventListener('blur', function (ev) {
        return _this3._trimInput(ev.target);
      });
      this.key.addEventListener('keydown', this._touchUserKey.bind(this));
      this.shortcutConfig.addEventListener('click', this._goShortcutConfig.bind(this));
      Object.keys(this.options).forEach(function (key) {
        var elem = _this3.options[key],
            name = elem.getAttribute('name');

        switch (name) {
          case 'usePersonalKey':
            _this3.options[key].addEventListener('click', _this3._saveKey.bind(_this3));

            break;

          default:
            _this3.options[key].addEventListener('click', _this3._saveOptions.bind(_this3));

            break;
        }
      });
    }
  }]);

  return Options;
}();

var options = new Options();
options.init();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(52);

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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".shortcut-input{width:12% !important;height:auto !important;margin:0 5px !important;text-align:center}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ ]);