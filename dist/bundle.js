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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ \"./js/modules/DOM.js\");\n/* harmony import */ var _modules_Bequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Bequest */ \"./js/modules/Bequest.js\");\n/* harmony import */ var _modules_GiftAnnuity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/GiftAnnuity */ \"./js/modules/GiftAnnuity.js\");\n/* harmony import */ var _modules_Unitrust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Unitrust */ \"./js/modules/Unitrust.js\");\n\n\n\n\n\nObject(_modules_DOM__WEBPACK_IMPORTED_MODULE_0__[\"ready\"])(function () {\n  var wrapper = document.getElementById('wrapper');\n\n  wrapper.appendChild(Object(_modules_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createH1\"])('Bequest present value is ' + Object(_modules_Bequest__WEBPACK_IMPORTED_MODULE_1__[\"presentValue\"])()));\n  wrapper.appendChild(Object(_modules_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createH1\"])('Bequest tax benefits are ' + Object(_modules_Bequest__WEBPACK_IMPORTED_MODULE_1__[\"taxBenefits\"])()));\n\n  wrapper.appendChild(document.createElement('br'));\n  wrapper.appendChild(document.createElement('br'));\n\n  wrapper.appendChild(Object(_modules_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createH1\"])('Gift Annuity present value is ' + Object(_modules_GiftAnnuity__WEBPACK_IMPORTED_MODULE_2__[\"presentValue\"])()));\n  wrapper.appendChild(Object(_modules_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createH1\"])('Gift Annuity tax benefits are ' + Object(_modules_GiftAnnuity__WEBPACK_IMPORTED_MODULE_2__[\"taxBenefits\"])()));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/ZDQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkeSwgY3JlYXRlSDEgfSBmcm9tICcuL21vZHVsZXMvRE9NJztcbmltcG9ydCB7IHByZXNlbnRWYWx1ZSBhcyBiZXF1ZXN0UHJlc2VudFZhbHVlLCB0YXhCZW5lZml0cyBhcyBiZXF1ZXN0VGF4QmVuZWZpdHMgfSBmcm9tICcuL21vZHVsZXMvQmVxdWVzdCc7XG5pbXBvcnQgeyBwcmVzZW50VmFsdWUgYXMgZ2lmdEFubnVpdHlQcmVzZW50VmFsdWUsIHRheEJlbmVmaXRzIGFzIGdpZnRBbm51aXR5VGF4QmVuZWZpdHMgfSBmcm9tICcuL21vZHVsZXMvR2lmdEFubnVpdHknO1xuaW1wb3J0IHsgcHJlc2VudFZhbHVlIGFzIHVuaXRydXN0UHJlc2VudFZhbHVlLCB0YXhCZW5lZml0cyBhcyB1bml0cnVzdFRheEJlbmVmaXRzIH0gZnJvbSAnLi9tb2R1bGVzL1VuaXRydXN0JztcblxucmVhZHkoZnVuY3Rpb24gKCkge1xuICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVIMSgnQmVxdWVzdCBwcmVzZW50IHZhbHVlIGlzICcgKyBiZXF1ZXN0UHJlc2VudFZhbHVlKCkpKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVIMSgnQmVxdWVzdCB0YXggYmVuZWZpdHMgYXJlICcgKyBiZXF1ZXN0VGF4QmVuZWZpdHMoKSkpO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVIMSgnR2lmdCBBbm51aXR5IHByZXNlbnQgdmFsdWUgaXMgJyArIGdpZnRBbm51aXR5UHJlc2VudFZhbHVlKCkpKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVIMSgnR2lmdCBBbm51aXR5IHRheCBiZW5lZml0cyBhcmUgJyArIGdpZnRBbm51aXR5VGF4QmVuZWZpdHMoKSkpO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ }),

/***/ "./js/modules/Bequest.js":
/*!*******************************!*\
  !*** ./js/modules/Bequest.js ***!
  \*******************************/
/*! exports provided: taxBenefits, presentValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taxBenefits\", function() { return taxBenefits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"presentValue\", function() { return presentValue; });\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator */ \"./js/modules/Calculator.js\");\n\n\nvar presentValue = function presentValue() {\n  var giftValue = 10000;\n  return Object(_Calculator__WEBPACK_IMPORTED_MODULE_0__[\"round\"])((Math.random() + 1) * giftValue, 2);\n};\n\nvar taxBenefits = function taxBenefits() {\n  return Math.round(presentValue() * 0.32, 2);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2R1bGVzL0JlcXVlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2R1bGVzL0JlcXVlc3QuanM/OTE4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3VuZCB9IGZyb20gJy4vQ2FsY3VsYXRvcic7XG5cbnZhciBwcmVzZW50VmFsdWUgPSBmdW5jdGlvbiBwcmVzZW50VmFsdWUoKSB7XG4gIHZhciBnaWZ0VmFsdWUgPSAxMDAwMDtcbiAgcmV0dXJuIHJvdW5kKChNYXRoLnJhbmRvbSgpICsgMSkgKiBnaWZ0VmFsdWUsIDIpO1xufTtcblxudmFyIHRheEJlbmVmaXRzID0gZnVuY3Rpb24gdGF4QmVuZWZpdHMoKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHByZXNlbnRWYWx1ZSgpICogMC4zMiwgMik7XG59O1xuXG5leHBvcnQgeyB0YXhCZW5lZml0cywgcHJlc2VudFZhbHVlIH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/modules/Bequest.js\n");

/***/ }),

/***/ "./js/modules/Calculator.js":
/*!**********************************!*\
  !*** ./js/modules/Calculator.js ***!
  \**********************************/
/*! exports provided: round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"round\", function() { return round; });\nfunction round(number, precision) {\n  var shift = function shift(number, precision, reverseShift) {\n    if (reverseShift) {\n      precision = -precision;\n    }\n    var numArray = ('' + number).split('e');\n    return +(numArray[0] + 'e' + (numArray[1] ? +numArray[1] + precision : precision));\n  };\n  return shift(Math.round(shift(number, precision, false)), precision, true);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2R1bGVzL0NhbGN1bGF0b3IuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2R1bGVzL0NhbGN1bGF0b3IuanM/ZDg2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByb3VuZChudW1iZXIsIHByZWNpc2lvbikge1xuICB2YXIgc2hpZnQgPSBmdW5jdGlvbiBzaGlmdChudW1iZXIsIHByZWNpc2lvbiwgcmV2ZXJzZVNoaWZ0KSB7XG4gICAgaWYgKHJldmVyc2VTaGlmdCkge1xuICAgICAgcHJlY2lzaW9uID0gLXByZWNpc2lvbjtcbiAgICB9XG4gICAgdmFyIG51bUFycmF5ID0gKCcnICsgbnVtYmVyKS5zcGxpdCgnZScpO1xuICAgIHJldHVybiArKG51bUFycmF5WzBdICsgJ2UnICsgKG51bUFycmF5WzFdID8gK251bUFycmF5WzFdICsgcHJlY2lzaW9uIDogcHJlY2lzaW9uKSk7XG4gIH07XG4gIHJldHVybiBzaGlmdChNYXRoLnJvdW5kKHNoaWZ0KG51bWJlciwgcHJlY2lzaW9uLCBmYWxzZSkpLCBwcmVjaXNpb24sIHRydWUpO1xufVxuXG5leHBvcnQgeyByb3VuZCB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/modules/Calculator.js\n");

/***/ }),

/***/ "./js/modules/DOM.js":
/*!***************************!*\
  !*** ./js/modules/DOM.js ***!
  \***************************/
/*! exports provided: ready, createH1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ready\", function() { return ready; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createH1\", function() { return createH1; });\nvar ready = function ready(fn) {\n  if (document.readyState !== 'loading') {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n};\n\nvar createH1 = function createH1(text) {\n  var h1 = document.createElement('h1');\n  h1.appendChild(document.createTextNode(text));\n  return h1;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2R1bGVzL0RPTS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvRE9NLmpzP2Y1ZTIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlYWR5ID0gZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgIGZuKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUgxID0gZnVuY3Rpb24gY3JlYXRlSDEodGV4dCkge1xuICB2YXIgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG4gIHJldHVybiBoMTtcbn07XG5cbmV4cG9ydCB7IHJlYWR5LCBjcmVhdGVIMSB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/modules/DOM.js\n");

/***/ }),

/***/ "./js/modules/GiftAnnuity.js":
/*!***********************************!*\
  !*** ./js/modules/GiftAnnuity.js ***!
  \***********************************/
/*! exports provided: taxBenefits, presentValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taxBenefits\", function() { return taxBenefits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"presentValue\", function() { return presentValue; });\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator */ \"./js/modules/Calculator.js\");\n\n\nvar presentValue = function presentValue() {\n  var giftValue = 10000;\n  return Object(_Calculator__WEBPACK_IMPORTED_MODULE_0__[\"round\"])((Math.random() + 1) * giftValue, 2);\n};\n\nvar taxBenefits = function taxBenefits() {\n  return Math.round(presentValue() * 0.32, 2);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2R1bGVzL0dpZnRBbm51aXR5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbW9kdWxlcy9HaWZ0QW5udWl0eS5qcz80MjEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdW5kIH0gZnJvbSAnLi9DYWxjdWxhdG9yJztcblxudmFyIHByZXNlbnRWYWx1ZSA9IGZ1bmN0aW9uIHByZXNlbnRWYWx1ZSgpIHtcbiAgdmFyIGdpZnRWYWx1ZSA9IDEwMDAwO1xuICByZXR1cm4gcm91bmQoKE1hdGgucmFuZG9tKCkgKyAxKSAqIGdpZnRWYWx1ZSwgMik7XG59O1xuXG52YXIgdGF4QmVuZWZpdHMgPSBmdW5jdGlvbiB0YXhCZW5lZml0cygpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQocHJlc2VudFZhbHVlKCkgKiAwLjMyLCAyKTtcbn07XG5cbmV4cG9ydCB7IHRheEJlbmVmaXRzLCBwcmVzZW50VmFsdWUgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/modules/GiftAnnuity.js\n");

/***/ }),

/***/ "./js/modules/Unitrust.js":
/*!********************************!*\
  !*** ./js/modules/Unitrust.js ***!
  \********************************/
/*! exports provided: taxBenefits, presentValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taxBenefits\", function() { return taxBenefits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"presentValue\", function() { return presentValue; });\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator */ \"./js/modules/Calculator.js\");\n\n\nvar presentValue = function presentValue() {\n  var giftValue = 10000;\n  return Object(_Calculator__WEBPACK_IMPORTED_MODULE_0__[\"round\"])((Math.random() + 1) * giftValue, 2);\n};\n\nvar taxBenefits = function taxBenefits() {\n  return Math.round(presentValue() * 0.32, 2);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2R1bGVzL1VuaXRydXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbW9kdWxlcy9Vbml0cnVzdC5qcz8zYjMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdW5kIH0gZnJvbSAnLi9DYWxjdWxhdG9yJztcblxudmFyIHByZXNlbnRWYWx1ZSA9IGZ1bmN0aW9uIHByZXNlbnRWYWx1ZSgpIHtcbiAgdmFyIGdpZnRWYWx1ZSA9IDEwMDAwO1xuICByZXR1cm4gcm91bmQoKE1hdGgucmFuZG9tKCkgKyAxKSAqIGdpZnRWYWx1ZSwgMik7XG59O1xuXG52YXIgdGF4QmVuZWZpdHMgPSBmdW5jdGlvbiB0YXhCZW5lZml0cygpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQocHJlc2VudFZhbHVlKCkgKiAwLjMyLCAyKTtcbn07XG5cbmV4cG9ydCB7IHRheEJlbmVmaXRzLCBwcmVzZW50VmFsdWUgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/modules/Unitrust.js\n");

/***/ })

/******/ });