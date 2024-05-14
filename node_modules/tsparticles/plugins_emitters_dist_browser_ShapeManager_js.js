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
(this["webpackChunktsparticles"] = this["webpackChunktsparticles"] || []).push([["plugins_emitters_dist_browser_ShapeManager_js"],{

/***/ "../../plugins/emitters/dist/browser/ShapeManager.js":
/*!***********************************************************!*\
  !*** ../../plugins/emitters/dist/browser/ShapeManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShapeManager: () => (/* binding */ ShapeManager)\n/* harmony export */ });\nconst shapeGeneratorss = new Map();\nclass ShapeManager {\n  constructor(engine) {\n    this._engine = engine;\n  }\n  addShapeGenerator(name, generator) {\n    if (!this.getShapeGenerator(name)) {\n      shapeGeneratorss.set(name, generator);\n    }\n  }\n  getShapeGenerator(name) {\n    return shapeGeneratorss.get(name);\n  }\n  getSupportedShapeGenerators() {\n    return shapeGeneratorss.keys();\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/ShapeManager.js?");

/***/ })

}]);