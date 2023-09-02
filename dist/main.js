/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/current.js":
/*!************************!*\
  !*** ./src/current.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction current(mainData, location){\n    console.log(\"currentData\", mainData);\n    console.log(\"Location\", location); \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (current); \n\n//# sourceURL=webpack://weather-application/./src/current.js?");

/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction forecast(data){\n    console.log(\"Three Day Forecast\", data); \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forecast); \n\n//# sourceURL=webpack://weather-application/./src/forecast.js?");

/***/ }),

/***/ "./src/hourly.js":
/*!***********************!*\
  !*** ./src/hourly.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hourly(data){\n    console.log(\"Hourly Data\", data); \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hourly); \n\n//# sourceURL=webpack://weather-application/./src/hourly.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast.js */ \"./src/forecast.js\");\n/* harmony import */ var _hourly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourly.js */ \"./src/hourly.js\");\n/* harmony import */ var _current_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current.js */ \"./src/current.js\");\n \n \n \n\nconst button = document.getElementById(\"searchButton\"); \nbutton.addEventListener(\"click\", search); \nfunction search(){\n    console.log(\"hi\"); \n    const searchTerm = document.getElementById(\"citySearch\").value.trim().toLowerCase(); \n    fetch(`http://api.weatherapi.com/v1/forecast.json?key=2172c71e82df4422b4e143223230209&q=${searchTerm}&days=3&aqi=no&alerts=no`, {mode: 'cors'})\n    .then(response => {\n        if (!response.ok) {\n        throw new Error('Server returned ' + response.status);\n        }\n        return response.json();\n    })\n    .then(data => {\n        document.getElementById(\"fail\").style.display=\"none\"; \n        document.getElementById(\"success\").style.display=\"initial\";\n        console.log(data); \n        (0,_forecast_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.forecast.forecastday);\n        (0,_hourly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.forecast.forecastday[0].hour); \n        (0,_current_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.current, data.location); \n    })\n    .catch(error => {\n        const infodiv = document.getElementById(\"success\");\n        infodiv.style.display=\"none\";  \n        document.getElementById(\"fail\").style.display=\"initial\"; \n        console.error('There was a problem with the Fetch operation:', error);\n    });\n}\n\n\n\n\n//# sourceURL=webpack://weather-application/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;