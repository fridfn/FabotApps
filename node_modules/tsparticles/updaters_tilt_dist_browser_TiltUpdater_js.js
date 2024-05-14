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
(this["webpackChunktsparticles"] = this["webpackChunktsparticles"] || []).push([["updaters_tilt_dist_browser_TiltUpdater_js"],{

/***/ "../../updaters/tilt/dist/browser/Options/Classes/Tilt.js":
/*!****************************************************************!*\
  !*** ../../updaters/tilt/dist/browser/Options/Classes/Tilt.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tilt: () => (/* binding */ Tilt)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/engine */ \"../../engine/dist/browser/index.js\");\n/* harmony import */ var _TiltAnimation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TiltAnimation.js */ \"../../updaters/tilt/dist/browser/Options/Classes/TiltAnimation.js\");\n\n\nclass Tilt extends _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ValueWithRandom {\n  constructor() {\n    super();\n    this.animation = new _TiltAnimation_js__WEBPACK_IMPORTED_MODULE_1__.TiltAnimation();\n    this.direction = \"clockwise\";\n    this.enable = false;\n    this.value = 0;\n  }\n  load(data) {\n    super.load(data);\n    if (!data) {\n      return;\n    }\n    this.animation.load(data.animation);\n    if (data.direction !== undefined) {\n      this.direction = data.direction;\n    }\n    if (data.enable !== undefined) {\n      this.enable = data.enable;\n    }\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../updaters/tilt/dist/browser/Options/Classes/Tilt.js?");

/***/ }),

/***/ "../../updaters/tilt/dist/browser/Options/Classes/TiltAnimation.js":
/*!*************************************************************************!*\
  !*** ../../updaters/tilt/dist/browser/Options/Classes/TiltAnimation.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TiltAnimation: () => (/* binding */ TiltAnimation)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/engine */ \"../../engine/dist/browser/index.js\");\n\nclass TiltAnimation {\n  constructor() {\n    this.enable = false;\n    this.speed = 0;\n    this.decay = 0;\n    this.sync = false;\n  }\n  load(data) {\n    if (!data) {\n      return;\n    }\n    if (data.enable !== undefined) {\n      this.enable = data.enable;\n    }\n    if (data.speed !== undefined) {\n      this.speed = (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(data.speed);\n    }\n    if (data.decay !== undefined) {\n      this.decay = (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(data.decay);\n    }\n    if (data.sync !== undefined) {\n      this.sync = data.sync;\n    }\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../updaters/tilt/dist/browser/Options/Classes/TiltAnimation.js?");

/***/ }),

/***/ "../../updaters/tilt/dist/browser/TiltUpdater.js":
/*!*******************************************************!*\
  !*** ../../updaters/tilt/dist/browser/TiltUpdater.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TiltUpdater: () => (/* binding */ TiltUpdater)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/engine */ \"../../engine/dist/browser/index.js\");\n/* harmony import */ var _Options_Classes_Tilt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Tilt.js */ \"../../updaters/tilt/dist/browser/Options/Classes/Tilt.js\");\n\n\nconst identity = 1,\n  double = 2,\n  doublePI = Math.PI * double,\n  maxAngle = 360;\nclass TiltUpdater {\n  constructor(container) {\n    this.container = container;\n  }\n  getTransformValues(particle) {\n    const tilt = particle.tilt?.enable && particle.tilt;\n    return {\n      b: tilt ? Math.cos(tilt.value) * tilt.cosDirection : undefined,\n      c: tilt ? Math.sin(tilt.value) * tilt.sinDirection : undefined\n    };\n  }\n  init(particle) {\n    const tiltOptions = particle.options.tilt;\n    if (!tiltOptions) {\n      return;\n    }\n    particle.tilt = {\n      enable: tiltOptions.enable,\n      value: (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.degToRad)((0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(tiltOptions.value)),\n      sinDirection: (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)() >= _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.halfRandom ? identity : -identity,\n      cosDirection: (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)() >= _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.halfRandom ? identity : -identity,\n      min: 0,\n      max: doublePI\n    };\n    let tiltDirection = tiltOptions.direction;\n    if (tiltDirection === \"random\") {\n      const index = Math.floor((0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)() * double),\n        minIndex = 0;\n      tiltDirection = index > minIndex ? \"counter-clockwise\" : \"clockwise\";\n    }\n    switch (tiltDirection) {\n      case \"counter-clockwise\":\n      case \"counterClockwise\":\n        particle.tilt.status = \"decreasing\";\n        break;\n      case \"clockwise\":\n        particle.tilt.status = \"increasing\";\n        break;\n    }\n    const tiltAnimation = particle.options.tilt?.animation;\n    if (tiltAnimation?.enable) {\n      particle.tilt.decay = identity - (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(tiltAnimation.decay);\n      particle.tilt.velocity = (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(tiltAnimation.speed) / maxAngle * this.container.retina.reduceFactor;\n      if (!tiltAnimation.sync) {\n        particle.tilt.velocity *= (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)();\n      }\n    }\n  }\n  isEnabled(particle) {\n    const tiltAnimation = particle.options.tilt?.animation;\n    return !particle.destroyed && !particle.spawning && !!tiltAnimation?.enable;\n  }\n  loadOptions(options, ...sources) {\n    if (!options.tilt) {\n      options.tilt = new _Options_Classes_Tilt_js__WEBPACK_IMPORTED_MODULE_1__.Tilt();\n    }\n    for (const source of sources) {\n      options.tilt.load(source?.tilt);\n    }\n  }\n  async update(particle, delta) {\n    if (!this.isEnabled(particle) || !particle.tilt) {\n      return;\n    }\n    (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.updateAnimation)(particle, particle.tilt, false, \"none\", delta);\n    await Promise.resolve();\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../updaters/tilt/dist/browser/TiltUpdater.js?");

/***/ })

}]);