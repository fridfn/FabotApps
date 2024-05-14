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
(this["webpackChunktsparticles"] = this["webpackChunktsparticles"] || []).push([["shapes_text_dist_browser_index_js"],{

/***/ "../../shapes/text/dist/browser/TextDrawer.js":
/*!****************************************************!*\
  !*** ../../shapes/text/dist/browser/TextDrawer.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextDrawer: () => (/* binding */ TextDrawer),\n/* harmony export */   validTypes: () => (/* binding */ validTypes)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/engine */ \"../../engine/dist/browser/index.js\");\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ \"../../shapes/text/dist/browser/Utils.js\");\n\n\nconst validTypes = [\"text\", \"character\", \"char\", \"multiline-text\"];\nclass TextDrawer {\n  draw(data) {\n    (0,_Utils_js__WEBPACK_IMPORTED_MODULE_1__.drawText)(data);\n  }\n  async init(container) {\n    const options = container.actualOptions;\n    if (validTypes.find(t => (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.isInArray)(t, options.particles.shape.type))) {\n      const shapeOptions = validTypes.map(t => options.particles.shape.options[t]).find(t => !!t),\n        promises = [];\n      (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.executeOnSingleOrMultiple)(shapeOptions, shape => {\n        promises.push((0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.loadFont)(shape.font, shape.weight));\n      });\n      await Promise.all(promises);\n    }\n  }\n  particleInit(container, particle) {\n    if (!particle.shape || !validTypes.includes(particle.shape)) {\n      return;\n    }\n    const character = particle.shapeData;\n    if (character === undefined) {\n      return;\n    }\n    const textData = character.value;\n    if (textData === undefined) {\n      return;\n    }\n    particle.text = (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.itemFromSingleOrMultiple)(textData, particle.randomIndexData);\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../shapes/text/dist/browser/TextDrawer.js?");

/***/ }),

/***/ "../../shapes/text/dist/browser/Utils.js":
/*!***********************************************!*\
  !*** ../../shapes/text/dist/browser/Utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawText: () => (/* binding */ drawText)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/engine */ \"../../engine/dist/browser/index.js\");\n\nconst double = 2,\n  half = 0.5;\nfunction drawText(data) {\n  const {\n      context,\n      particle,\n      radius,\n      opacity\n    } = data,\n    character = particle.shapeData;\n  if (!character) {\n    return;\n  }\n  const textData = character.value;\n  if (textData === undefined) {\n    return;\n  }\n  if (particle.text === undefined) {\n    particle.text = (0,_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.itemFromSingleOrMultiple)(textData, particle.randomIndexData);\n  }\n  const text = particle.text,\n    style = character.style ?? \"\",\n    weight = character.weight ?? \"400\",\n    size = Math.round(radius) * double,\n    font = character.font ?? \"Verdana\",\n    fill = particle.shapeFill;\n  const lines = text?.split(\"\\n\");\n  if (!lines) {\n    return;\n  }\n  context.font = `${style} ${weight} ${size}px \"${font}\"`;\n  context.globalAlpha = opacity;\n  for (let i = 0; i < lines.length; i++) {\n    drawLine(context, lines[i], radius, opacity, i, fill);\n  }\n  context.globalAlpha = 1;\n}\nfunction drawLine(context, line, radius, opacity, index, fill) {\n  const offsetX = line.length * radius * half,\n    pos = {\n      x: -offsetX,\n      y: radius * half\n    },\n    diameter = radius * double;\n  if (fill) {\n    context.fillText(line, pos.x, pos.y + diameter * index);\n  } else {\n    context.strokeText(line, pos.x, pos.y + diameter * index);\n  }\n}\n\n//# sourceURL=webpack://tsparticles/../../shapes/text/dist/browser/Utils.js?");

/***/ }),

/***/ "../../shapes/text/dist/browser/index.js":
/*!***********************************************!*\
  !*** ../../shapes/text/dist/browser/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTextShape: () => (/* binding */ loadTextShape)\n/* harmony export */ });\n/* harmony import */ var _TextDrawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextDrawer.js */ \"../../shapes/text/dist/browser/TextDrawer.js\");\n\nasync function loadTextShape(engine, refresh = true) {\n  const {\n    TextDrawer\n  } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./TextDrawer.js */ \"../../shapes/text/dist/browser/TextDrawer.js\"));\n  await engine.addShape(_TextDrawer_js__WEBPACK_IMPORTED_MODULE_0__.validTypes, new TextDrawer(), refresh);\n}\n\n//# sourceURL=webpack://tsparticles/../../shapes/text/dist/browser/index.js?");

/***/ })

}]);