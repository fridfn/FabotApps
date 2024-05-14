var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var __syncRequire = typeof module === "object" && typeof module.exports === "object";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadFull = void 0;
    async function loadFull(engine, refresh = true) {
        const { loadDestroyUpdater } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/updater-destroy"))) : new Promise((resolve_1, reject_1) => { require(["@tsparticles/updater-destroy"], resolve_1, reject_1); }).then(__importStar)), { loadRollUpdater } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/updater-roll"))) : new Promise((resolve_2, reject_2) => { require(["@tsparticles/updater-roll"], resolve_2, reject_2); }).then(__importStar)), { loadTiltUpdater } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/updater-tilt"))) : new Promise((resolve_3, reject_3) => { require(["@tsparticles/updater-tilt"], resolve_3, reject_3); }).then(__importStar)), { loadTwinkleUpdater } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/updater-twinkle"))) : new Promise((resolve_4, reject_4) => { require(["@tsparticles/updater-twinkle"], resolve_4, reject_4); }).then(__importStar)), { loadWobbleUpdater } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/updater-wobble"))) : new Promise((resolve_5, reject_5) => { require(["@tsparticles/updater-wobble"], resolve_5, reject_5); }).then(__importStar)), { loadTextShape } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/shape-text"))) : new Promise((resolve_6, reject_6) => { require(["@tsparticles/shape-text"], resolve_6, reject_6); }).then(__importStar)), { loadExternalTrailInteraction } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/interaction-external-trail"))) : new Promise((resolve_7, reject_7) => { require(["@tsparticles/interaction-external-trail"], resolve_7, reject_7); }).then(__importStar)), { loadAbsorbersPlugin } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/plugin-absorbers"))) : new Promise((resolve_8, reject_8) => { require(["@tsparticles/plugin-absorbers"], resolve_8, reject_8); }).then(__importStar)), { loadEmittersPlugin } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/plugin-emitters"))) : new Promise((resolve_9, reject_9) => { require(["@tsparticles/plugin-emitters"], resolve_9, reject_9); }).then(__importStar)), { loadEmittersShapeCircle } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/plugin-emitters-shape-circle"))) : new Promise((resolve_10, reject_10) => { require(["@tsparticles/plugin-emitters-shape-circle"], resolve_10, reject_10); }).then(__importStar)), { loadEmittersShapeSquare } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/plugin-emitters-shape-square"))) : new Promise((resolve_11, reject_11) => { require(["@tsparticles/plugin-emitters-shape-square"], resolve_11, reject_11); }).then(__importStar)), { loadSlim } = await (__syncRequire ? Promise.resolve().then(() => __importStar(require("@tsparticles/slim"))) : new Promise((resolve_12, reject_12) => { require(["@tsparticles/slim"], resolve_12, reject_12); }).then(__importStar));
        await loadDestroyUpdater(engine, false);
        await loadRollUpdater(engine, false);
        await loadTiltUpdater(engine, false);
        await loadTwinkleUpdater(engine, false);
        await loadWobbleUpdater(engine, false);
        await loadTextShape(engine, false);
        await loadExternalTrailInteraction(engine, false);
        await loadAbsorbersPlugin(engine, false);
        await loadEmittersPlugin(engine, false);
        await loadEmittersShapeCircle(engine, false);
        await loadEmittersShapeSquare(engine, false);
        await loadSlim(engine, refresh);
    }
    exports.loadFull = loadFull;
});
