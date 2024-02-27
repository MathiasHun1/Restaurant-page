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

/***/ "./src/cleanContent.js":
/*!*****************************!*\
  !*** ./src/cleanContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cleanContent = (element) => {\n    while (element.firstChild) {\n        element.removeChild(element.firstChild)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cleanContent);\n\n//# sourceURL=webpack://restaurant-page/./src/cleanContent.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHome = (element) => {\n\n    const homeCont = document.createElement('div');\n    homeCont.classList.add('home-container');\n\n    const restaurantName = document.createElement('h1');\n    restaurantName.classList.add('name');\n    restaurantName.textContent = \"Csepel City Restaurant\";\n\n    const quote = document.createElement('p');\n    quote.classList.add('quote');\n    quote.textContent = '\"The only thing I like better than talking about food is eating.\" - John Walters';\n    \n    element.appendChild(homeCont);\n    homeCont.appendChild(restaurantName);\n    homeCont.appendChild(quote);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _cleanContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanContent.js */ \"./src/cleanContent.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nconst content = document.querySelector('#content');\nconst homeButton = document.querySelector('.home');\nconst menuButton = document.querySelector('.menu');\n\n// Load page\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content)\n\n\n\n\nhomeButton.addEventListener('click', () => {\n    ;(0,_cleanContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\n})\n\nmenuButton.addEventListener('click', () => {\n    ;(0,_cleanContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n    \n    const item1 = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    item1.addItemName('Classic Hamburger');\n    item1.addItemDescription(\n        'marhahúspogácsa, házi készítésű hamburger szósz, jégsaláta, uborka, hagyma, káposzta, lilahagyma, ketchup, mustár');\n    \n    const item2 = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    item2.addItemName('CheeeseBurger');\n    item2.addItemDescription(\n        'marhahúspogácsa, sajt, házi készítésű hamburger szósz, jégsaláta, uborka, hagyma, káposzta, lilahagyma, ketchup, mustár');\n\n    const item3 = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    item3.addItemName('Cheddar burger');\n    item3.addItemDescription(\n        'marhahúspogácsa, házi készítésű hamburger szósz, cheddar sajt, jégsaláta, ubokra, hagyma, káposzta, lilahahagyma, ketchup, mustár'\n    );\n\n    const item4 = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    item4.addItemName('Lyoni burger');\n    item4.addItemDescription(\n        'marhahúspogácsa, házi készítésű hamburger szósz, pirított hagyma, jégsaláta, uborka, káposzta, lilahagyma, ketchup, mustár');\n\n    const item5 = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    item5.addItemName('Haspók burger');\n    item5.addItemDescription(\n        'marhahúspogácsa, haspók ragu, házi készítésű hamburger szósz, sajt, jégsaláta, uborka, káposzta, hagyma, lilahagyma, ketchup, mustár'\n    );\n\n    const item6 = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    item6.addItemName('Funghi burger');\n    item6.addItemDescription(\n        'marhahúspogácsa, pirított gomba, házi készítésű hamburger szósz, jégsaláta, uborka, káposzta, hagyma, lilahagyma, ketchup, mustár'\n    );\n\n    const item7 = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    item7.addItemName('Vega burger');\n    item7.addItemDescription(\n        'grilelzett camambert sajt, házi készítésű hamburger szósz, áfonyamártás, jégsaláta, hagyma, lilahagyma, uborka, ketchup, mustár'\n    );\n\n})\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n// menu item creation\n\nconst createMenuItem = (element) => {\n\n    //container    \nconst itemCont = document.createElement('div');\nitemCont.classList.add('item-container');\nelement.appendChild(itemCont)\n    //item name\nconst itemName = document.createElement('h2');\nitemName.classList.add('item-name');\nitemCont.appendChild(itemName);\n    //item description\nconst itemDescription = document.createElement('p');\nitemDescription.classList.add('item-description');\nitemCont.appendChild(itemDescription);\n\nconst addItemName = (name) => {\n    itemName.textContent = name;\n}\n\nconst addItemDescription = (description) => {\n    itemDescription.textContent = description;\n}\n\nreturn {addItemName, addItemDescription}\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuItem);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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