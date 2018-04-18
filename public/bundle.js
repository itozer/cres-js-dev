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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var test = function () {\n  'usestrict';\n\n  var _console, _console2, _console3;\n\n  var obj, obj2;\n\n  var notUsed;\n\n  var what;\n  what = 'im making a change';\n\n  function ready(fn) {\n    if (document.readyState !== 'loading') {\n      fn();\n    } else {\n      document.addEventListener('DOMContentLoaded', fn);\n    }\n  }\n\n  obj = {\n    test: 'test'\n  };\n\n  obj2 = {\n    key1: [1, 2, 3, 4],\n    key2: {\n      blah: 'blah',\n      blah2: 'blahh',\n      test: 'test'\n    },\n    name: 'isaac'\n  };\n\n  obj2.test2 = obj.test2;\n\n  var testArr = [1, 2, 3, 4, 5, 6];\n  // spread syntax\n  (_console = console).log.apply(_console, testArr);\n  console.log(testArr);\n\n  // destructoring\n  var a = testArr[0],\n      b = testArr[1];\n\n  console.log(a);\n  console.log(b);\n\n  var _obj = obj2,\n      key1 = _obj.key1,\n      key2 = _obj.key2;\n\n  console.log(key1);\n  console.log(key2);\n\n  // template literals\n  console.log('hi, my name is ' + obj2.name);\n  // console.log(`hi, my name is ${ob.name}`);\n\n  // arrow function expressions\n  var dogs = ['Rocket', 'Cody', 'Caleb'];\n  // old way\n  var dogOld = dogs.map(function (dog) {\n    return dog + ' Dog';\n  });\n  (_console2 = console).log.apply(_console2, dogOld);\n  // new way\n  var dogNew = dogs.map(function (dog) {\n    return dog + ' Dog';\n  });\n  (_console3 = console).log.apply(_console3, dogNew);\n\n  ready(function () {\n    var inner = document.getElementById('p7').innerHTML;\n    var value = document.getElementById('p7').nodeValue;\n    console.log(inner);\n    console.log(value);\n\n    var p = document.createElement('p');\n    p.appendChild(document.createTextNode('This is a new text node, yee'));\n    document.getElementById('wrapper').appendChild(p);\n  });\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcz85NjZjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAndXNlc3RyaWN0JztcblxuICB2YXIgX2NvbnNvbGUsIF9jb25zb2xlMiwgX2NvbnNvbGUzO1xuXG4gIHZhciBvYmosIG9iajI7XG5cbiAgdmFyIG5vdFVzZWQ7XG5cbiAgdmFyIHdoYXQ7XG4gIHdoYXQgPSAnaW0gbWFraW5nIGEgY2hhbmdlJztcblxuICBmdW5jdGlvbiByZWFkeShmbikge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxuICB9XG5cbiAgb2JqID0ge1xuICAgIHRlc3Q6ICd0ZXN0J1xuICB9O1xuXG4gIG9iajIgPSB7XG4gICAga2V5MTogWzEsIDIsIDMsIDRdLFxuICAgIGtleTI6IHtcbiAgICAgIGJsYWg6ICdibGFoJyxcbiAgICAgIGJsYWgyOiAnYmxhaGgnLFxuICAgICAgdGVzdDogJ3Rlc3QnXG4gICAgfSxcbiAgICBuYW1lOiAnaXNhYWMnXG4gIH07XG5cbiAgb2JqMi50ZXN0MiA9IG9iai50ZXN0MjtcblxuICB2YXIgdGVzdEFyciA9IFsxLCAyLCAzLCA0LCA1LCA2XTtcbiAgLy8gc3ByZWFkIHN5bnRheFxuICAoX2NvbnNvbGUgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUsIHRlc3RBcnIpO1xuICBjb25zb2xlLmxvZyh0ZXN0QXJyKTtcblxuICAvLyBkZXN0cnVjdG9yaW5nXG4gIHZhciBhID0gdGVzdEFyclswXSxcbiAgICAgIGIgPSB0ZXN0QXJyWzFdO1xuXG4gIGNvbnNvbGUubG9nKGEpO1xuICBjb25zb2xlLmxvZyhiKTtcblxuICB2YXIgX29iaiA9IG9iajIsXG4gICAgICBrZXkxID0gX29iai5rZXkxLFxuICAgICAga2V5MiA9IF9vYmoua2V5MjtcblxuICBjb25zb2xlLmxvZyhrZXkxKTtcbiAgY29uc29sZS5sb2coa2V5Mik7XG5cbiAgLy8gdGVtcGxhdGUgbGl0ZXJhbHNcbiAgY29uc29sZS5sb2coJ2hpLCBteSBuYW1lIGlzICcgKyBvYmoyLm5hbWUpO1xuICAvLyBjb25zb2xlLmxvZyhgaGksIG15IG5hbWUgaXMgJHtvYi5uYW1lfWApO1xuXG4gIC8vIGFycm93IGZ1bmN0aW9uIGV4cHJlc3Npb25zXG4gIHZhciBkb2dzID0gWydSb2NrZXQnLCAnQ29keScsICdDYWxlYiddO1xuICAvLyBvbGQgd2F5XG4gIHZhciBkb2dPbGQgPSBkb2dzLm1hcChmdW5jdGlvbiAoZG9nKSB7XG4gICAgcmV0dXJuIGRvZyArICcgRG9nJztcbiAgfSk7XG4gIChfY29uc29sZTIgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUyLCBkb2dPbGQpO1xuICAvLyBuZXcgd2F5XG4gIHZhciBkb2dOZXcgPSBkb2dzLm1hcChmdW5jdGlvbiAoZG9nKSB7XG4gICAgcmV0dXJuIGRvZyArICcgRG9nJztcbiAgfSk7XG4gIChfY29uc29sZTMgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUzLCBkb2dOZXcpO1xuXG4gIHJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDcnKS5pbm5lckhUTUw7XG4gICAgdmFyIHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3A3Jykubm9kZVZhbHVlO1xuICAgIGNvbnNvbGUubG9nKGlubmVyKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdUaGlzIGlzIGEgbmV3IHRleHQgbm9kZSwgeWVlJykpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJykuYXBwZW5kQ2hpbGQocCk7XG4gIH0pO1xufSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ })

/******/ });