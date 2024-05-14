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
(this["webpackChunktsparticles"] = this["webpackChunktsparticles"] || []).push([["interactions_external_trail_dist_browser_TrailMaker_js"],{

/***/ "../../interactions/external/trail/dist/browser/TrailMaker.js":
/*!********************************************************************!*\
  !*** ../../interactions/external/trail/dist/browser/TrailMaker.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrailMaker: () => (/* binding */ TrailMaker)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/engine */ \"../../engine/dist/browser/index.js\");\n/* harmony import */ var _Options_Classes_Trail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Trail.js */ \"../../interactions/external/trail/dist/browser/Options/Classes/Trail.js\");\n\n\nconst trailMode = \"trail\";\nclass TrailMaker extends _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n  constructor(container) {\n    super(container);\n    this._delay = 0;\n  }\n  clear() {}\n  init() {}\n  interact(delta) {\n    const container = this.container,\n      {\n        interactivity\n      } = container;\n    if (!container.retina.reduceFactor) {\n      return;\n    }\n    const options = container.actualOptions,\n      trailOptions = options.interactivity.modes.trail;\n    if (!trailOptions) {\n      return;\n    }\n    const optDelay = trailOptions.delay * _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.millisecondsToSeconds / this.container.retina.reduceFactor;\n    if (this._delay < optDelay) {\n      this._delay += delta.value;\n    }\n    if (this._delay < optDelay) {\n      return;\n    }\n    const canEmit = !(trailOptions.pauseOnStop && (interactivity.mouse.position === this._lastPosition || interactivity.mouse.position?.x === this._lastPosition?.x && interactivity.mouse.position?.y === this._lastPosition?.y));\n    const mousePos = container.interactivity.mouse.position;\n    if (mousePos) {\n      this._lastPosition = {\n        ...mousePos\n      };\n    } else {\n      delete this._lastPosition;\n    }\n    if (canEmit) {\n      container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);\n    }\n    this._delay -= optDelay;\n  }\n  isEnabled(particle) {\n    const container = this.container,\n      options = container.actualOptions,\n      mouse = container.interactivity.mouse,\n      events = (particle?.interactivity ?? options.interactivity).events;\n    return mouse.clicking && mouse.inside && !!mouse.position && (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.isInArray)(trailMode, events.onClick.mode) || mouse.inside && !!mouse.position && (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.isInArray)(trailMode, events.onHover.mode);\n  }\n  loadModeOptions(options, ...sources) {\n    if (!options.trail) {\n      options.trail = new _Options_Classes_Trail_js__WEBPACK_IMPORTED_MODULE_1__.Trail();\n    }\n    for (const source of sources) {\n      options.trail.load(source?.trail);\n    }\n  }\n  reset() {}\n}\n\n//# sourceURL=webpack://tsparticles/../../interactions/external/trail/dist/browser/TrailMaker.js?");

/***/ })

}]);