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
(this["webpackChunktsparticles"] = this["webpackChunktsparticles"] || []).push([["plugins_emittersShapes_square_dist_browser_EmittersSquareShapeGenerator_js"],{

/***/ "../../plugins/emitters/dist/browser/EmitterContainer.js":
/*!***************************************************************!*\
  !*** ../../plugins/emitters/dist/browser/EmitterContainer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/EmitterContainer.js?");

/***/ }),

/***/ "../../plugins/emitters/dist/browser/EmitterShapeBase.js":
/*!***************************************************************!*\
  !*** ../../plugins/emitters/dist/browser/EmitterShapeBase.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmitterShapeBase: () => (/* binding */ EmitterShapeBase)\n/* harmony export */ });\nclass EmitterShapeBase {\n  constructor(position, size, fill, options) {\n    this.position = position;\n    this.size = size;\n    this.fill = fill;\n    this.options = options;\n  }\n  resize(position, size) {\n    this.position = position;\n    this.size = size;\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/EmitterShapeBase.js?");

/***/ }),

/***/ "../../plugins/emitters/dist/browser/EmittersEngine.js":
/*!*************************************************************!*\
  !*** ../../plugins/emitters/dist/browser/EmittersEngine.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/EmittersEngine.js?");

/***/ }),

/***/ "../../plugins/emitters/dist/browser/Enums/EmitterClickMode.js":
/*!*********************************************************************!*\
  !*** ../../plugins/emitters/dist/browser/Enums/EmitterClickMode.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/Enums/EmitterClickMode.js?");

/***/ }),

/***/ "../../plugins/emitters/dist/browser/IEmitterShape.js":
/*!************************************************************!*\
  !*** ../../plugins/emitters/dist/browser/IEmitterShape.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/IEmitterShape.js?");

/***/ }),

/***/ "../../plugins/emitters/dist/browser/IEmitterShapeGenerator.js":
/*!*********************************************************************!*\
  !*** ../../plugins/emitters/dist/browser/IEmitterShapeGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/IEmitterShapeGenerator.js?");

/***/ }),

/***/ "../../plugins/emitters/dist/browser/IRandomPositionData.js":
/*!******************************************************************!*\
  !*** ../../plugins/emitters/dist/browser/IRandomPositionData.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/IRandomPositionData.js?");

/***/ }),

/***/ "../../plugins/emitters/dist/browser/index.js":
/*!****************************************************!*\
  !*** ../../plugins/emitters/dist/browser/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmitterShapeBase: () => (/* reexport safe */ _EmitterShapeBase_js__WEBPACK_IMPORTED_MODULE_1__.EmitterShapeBase),\n/* harmony export */   loadEmittersPlugin: () => (/* binding */ loadEmittersPlugin)\n/* harmony export */ });\n/* harmony import */ var _EmitterContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmitterContainer.js */ \"../../plugins/emitters/dist/browser/EmitterContainer.js\");\n/* harmony import */ var _EmitterShapeBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmitterShapeBase.js */ \"../../plugins/emitters/dist/browser/EmitterShapeBase.js\");\n/* harmony import */ var _EmittersEngine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmittersEngine.js */ \"../../plugins/emitters/dist/browser/EmittersEngine.js\");\n/* harmony import */ var _IEmitterShape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IEmitterShape.js */ \"../../plugins/emitters/dist/browser/IEmitterShape.js\");\n/* harmony import */ var _IEmitterShapeGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IEmitterShapeGenerator.js */ \"../../plugins/emitters/dist/browser/IEmitterShapeGenerator.js\");\n/* harmony import */ var _Enums_EmitterClickMode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Enums/EmitterClickMode.js */ \"../../plugins/emitters/dist/browser/Enums/EmitterClickMode.js\");\n/* harmony import */ var _IRandomPositionData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IRandomPositionData.js */ \"../../plugins/emitters/dist/browser/IRandomPositionData.js\");\nasync function loadEmittersPlugin(engine, refresh = true) {\n  if (!engine.emitterShapeManager) {\n    const {\n      ShapeManager\n    } = await __webpack_require__.e(/*! import() */ \"plugins_emitters_dist_browser_ShapeManager_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./ShapeManager.js */ \"../../plugins/emitters/dist/browser/ShapeManager.js\"));\n    engine.emitterShapeManager = new ShapeManager(engine);\n  }\n  if (!engine.addEmitterShapeGenerator) {\n    engine.addEmitterShapeGenerator = (name, generator) => {\n      engine.emitterShapeManager?.addShapeGenerator(name, generator);\n    };\n  }\n  const {\n      EmittersPlugin\n    } = await __webpack_require__.e(/*! import() */ \"plugins_emitters_dist_browser_EmittersPlugin_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./EmittersPlugin.js */ \"../../plugins/emitters/dist/browser/EmittersPlugin.js\")),\n    plugin = new EmittersPlugin(engine);\n  await engine.addPlugin(plugin, refresh);\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://tsparticles/../../plugins/emitters/dist/browser/index.js?");

/***/ }),

/***/ "../../plugins/emittersShapes/square/dist/browser/EmittersSquareShape.js":
/*!*******************************************************************************!*\
  !*** ../../plugins/emittersShapes/square/dist/browser/EmittersSquareShape.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmittersSquareShape: () => (/* binding */ EmittersSquareShape)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_plugin_emitters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/plugin-emitters */ \"../../plugins/emitters/dist/browser/index.js\");\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tsparticles/engine */ \"../../engine/dist/browser/index.js\");\n\n\nconst half = 0.5,\n  sides = 4,\n  double = 2;\nfunction randomSquareCoordinate(position, offset) {\n  return position + offset * ((0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRandom)() - _tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.halfRandom);\n}\nclass EmittersSquareShape extends _tsparticles_plugin_emitters__WEBPACK_IMPORTED_MODULE_0__.EmitterShapeBase {\n  constructor(position, size, fill, options) {\n    super(position, size, fill, options);\n  }\n  async init() {}\n  randomPosition() {\n    const fill = this.fill,\n      position = this.position,\n      size = this.size;\n    if (fill) {\n      return {\n        position: {\n          x: randomSquareCoordinate(position.x, size.width),\n          y: randomSquareCoordinate(position.y, size.height)\n        }\n      };\n    } else {\n      const halfW = size.width * half,\n        halfH = size.height * half,\n        side = Math.floor((0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRandom)() * sides),\n        v = ((0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRandom)() - _tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.halfRandom) * double;\n      switch (side) {\n        case 0:\n          return {\n            position: {\n              x: position.x + v * halfW,\n              y: position.y - halfH\n            }\n          };\n        case 1:\n          return {\n            position: {\n              x: position.x - halfW,\n              y: position.y + v * halfH\n            }\n          };\n        case 2:\n          return {\n            position: {\n              x: position.x + v * halfW,\n              y: position.y + halfH\n            }\n          };\n        case 3:\n        default:\n          return {\n            position: {\n              x: position.x + halfW,\n              y: position.y + v * halfH\n            }\n          };\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../plugins/emittersShapes/square/dist/browser/EmittersSquareShape.js?");

/***/ }),

/***/ "../../plugins/emittersShapes/square/dist/browser/EmittersSquareShapeGenerator.js":
/*!****************************************************************************************!*\
  !*** ../../plugins/emittersShapes/square/dist/browser/EmittersSquareShapeGenerator.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmittersSquareShapeGenerator: () => (/* binding */ EmittersSquareShapeGenerator)\n/* harmony export */ });\n/* harmony import */ var _EmittersSquareShape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmittersSquareShape.js */ \"../../plugins/emittersShapes/square/dist/browser/EmittersSquareShape.js\");\n\nclass EmittersSquareShapeGenerator {\n  generate(position, size, fill, options) {\n    return new _EmittersSquareShape_js__WEBPACK_IMPORTED_MODULE_0__.EmittersSquareShape(position, size, fill, options);\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../plugins/emittersShapes/square/dist/browser/EmittersSquareShapeGenerator.js?");

/***/ })

}]);