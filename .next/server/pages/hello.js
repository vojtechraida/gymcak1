module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8jQN");


/***/ }),

/***/ "8jQN":
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js):\nSyntaxError: /workspace/gymcak1/pages/hello.js: Unterminated JSX contents (6:16)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mHomePage\u001b[39m \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {    \u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m    \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[33mWelcome\u001b[39m to hello page\u001b[33m!\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m  \u001b[0m\n\u001b[0m \u001b[90m 9 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mHomePage\u001b[39m\u001b[0m\n    at Object._raise (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:28993)\n    at Object.raiseWithData (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:28932)\n    at Object.raise (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:28753)\n    at Object.jsxReadToken (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:100267)\n    at Object.getTokenFromCode (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:106920)\n    at Object.nextToken (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:164459)\n    at Object.next (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:163481)\n    at Object.eat (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:163523)\n    at Object.expect (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:182881)\n    at Object.jsxParseOpeningElementAfterName (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:104722)\n    at Object.jsxParseOpeningElementAt (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:104502)\n    at Object.jsxParseElementAt (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:105130)\n    at Object.jsxParseElement (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:106425)\n    at Object.parseExprAtom (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:106591)\n    at Object.parseExprSubscripts (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:199975)\n    at Object.parseUpdate (/workspace/gymcak1/node_modules/next/dist/compiled/babel/bundle.js:2113:199535)");

/***/ })

/******/ });