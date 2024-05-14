/*!
 * Author : Matteo Bruni
 * MIT license: https://opensource.org/licenses/MIT
 * Demo / Generator : https://particles.js.org/
 * GitHub : https://www.github.com/matteobruni/tsparticles
 * How to use? : Check the GitHub README
 * v3.3.0
 */
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(this["webpackChunktsparticles"] = this["webpackChunktsparticles"] || []).push([["interactions_external_trail_dist_browser_index_js"],{

/***/ "../../interactions/external/trail/dist/browser/Options/Classes/Trail.js":
/*!*******************************************************************************!*\
  !*** ../../interactions/external/trail/dist/browser/Options/Classes/Trail.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trail: () => (/* binding */ Trail)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/engine */ \"../../engine/dist/browser/index.js\");\n\nclass Trail {\n  constructor() {\n    this.delay = 1;\n    this.pauseOnStop = false;\n    this.quantity = 1;\n  }\n  load(data) {\n    if (!data) {\n      return;\n    }\n    if (data.delay !== undefined) {\n      this.delay = data.delay;\n    }\n    if (data.quantity !== undefined) {\n      this.quantity = data.quantity;\n    }\n    if (data.particles !== undefined) {\n      this.particles = (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.deepExtend)({}, data.particles);\n    }\n    if (data.pauseOnStop !== undefined) {\n      this.pauseOnStop = data.pauseOnStop;\n    }\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../interactions/external/trail/dist/browser/Options/Classes/Trail.js?");

/***/ }),

/***/ "../../interactions/external/trail/dist/browser/Options/Interfaces/ITrail.js":
/*!***********************************************************************************!*\
  !*** ../../interactions/external/trail/dist/browser/Options/Interfaces/ITrail.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://tsparticles/../../interactions/external/trail/dist/browser/Options/Interfaces/ITrail.js?");

/***/ }),

/***/ "../../interactions/external/trail/dist/browser/index.js":
/*!***************************************************************!*\
  !*** ../../interactions/external/trail/dist/browser/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trail: () => (/* reexport safe */ _Options_Classes_Trail_js__WEBPACK_IMPORTED_MODULE_0__.Trail),\n/* harmony export */   loadExternalTrailInteraction: () => (/* binding */ loadExternalTrailInteraction)\n/* harmony export */ });\n/* harmony import */ var _Options_Classes_Trail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options/Classes/Trail.js */ \"../../interactions/external/trail/dist/browser/Options/Classes/Trail.js\");\n/* harmony import */ var _Options_Interfaces_ITrail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Interfaces/ITrail.js */ \"../../interactions/external/trail/dist/browser/Options/Interfaces/ITrail.js\");\nasync function loadExternalTrailInteraction(engine, refresh = true) {\n  await engine.addInteractor(\"externalTrail\", async container => {\n    const {\n      TrailMaker\n    } = await __webpack_require__.e(/*! import() */ \"interactions_external_trail_dist_browser_TrailMaker_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./TrailMaker.js */ \"../../interactions/external/trail/dist/browser/TrailMaker.js\"));\n    return new TrailMaker(container);\n  }, refresh);\n}\n\n\n\n//# sourceURL=webpack://tsparticles/../../interactions/external/trail/dist/browser/index.js?");

/***/ })

}]);