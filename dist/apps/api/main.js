(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
const environment = {
    production: true,
    DB: 'production',
    DB_USER: 'backend-prod',
    DB_PASSWORD: 'Q46XSpzmzufHocWG',
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marker; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const markerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    availabilities: [{ type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId, ref: 'Availability' }],
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
});
const Marker = mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Marker', markerSchema);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return markerAvail; });
/* unused harmony export availableTime */
/* harmony import */ var _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _postedhere_avail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/**
 * If one person is available right now, then present is returned
 * If one person is available in the future and no one is available now, the future is returned
 * Otherwise the past is returned
 */
function markerAvail(marker) {
    if (marker.availabilities.some(avail => availableTime(avail) === _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* AvailableWhen */ "a"].PRESENT))
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* AvailableWhen */ "a"].PRESENT;
    else if (marker.availabilities.some(avail => availableTime(avail) === _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* AvailableWhen */ "a"].FUTURE))
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* AvailableWhen */ "a"].FUTURE;
    else
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* AvailableWhen */ "a"].PAST;
}
function availableTime(avail) {
    if (typeof avail.startTime === 'string' || typeof avail.endTime === 'string')
        avail = Object(_postedhere_avail__WEBPACK_IMPORTED_MODULE_1__[/* processAvail */ "a"])(avail);
    if (avail.startTime.getTime() + 0 <= Date.now() && Date.now() <= avail.endTime.getTime() + 0)
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* AvailableWhen */ "a"].PRESENT;
    else if (avail.startTime.getTime() + 0 > Date.now())
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* AvailableWhen */ "a"].FUTURE;
    else
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* AvailableWhen */ "a"].PAST;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableWhen; });
var AvailableWhen;
(function (AvailableWhen) {
    AvailableWhen[AvailableWhen["PAST"] = 0] = "PAST";
    AvailableWhen[AvailableWhen["PRESENT"] = 1] = "PRESENT";
    AvailableWhen[AvailableWhen["FUTURE"] = 2] = "FUTURE";
})(AvailableWhen || (AvailableWhen = {}));


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export avail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return processAvail; });
function avail() {
    return "avail";
}
function processAvail(avail) {
    avail.startTime = new Date(avail.startTime);
    avail.endTime = new Date(avail.endTime);
    return avail;
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_calender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_calender__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_avail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_avail__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Availability; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const availSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    name: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, require: true },
});
const Availability = mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Availability', availSchema);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _postedhere_calender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _app_models_markers_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _app_models_availability_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_9__);










/**
 * MONGO Connection
 */
mongoose__WEBPACK_IMPORTED_MODULE_3__["connect"](`mongodb+srv://${_environments_environment__WEBPACK_IMPORTED_MODULE_5__[/* environment */ "a"].DB_USER}:${_environments_environment__WEBPACK_IMPORTED_MODULE_5__[/* environment */ "a"].DB_PASSWORD}@cluster0.bfyql.mongodb.net/${_environments_environment__WEBPACK_IMPORTED_MODULE_5__[/* environment */ "a"].DB}?retryWrites=true&w=majority`);
const db = mongoose__WEBPACK_IMPORTED_MODULE_3__["connection"];
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.info("Connected to mongo!");
});
const app = express__WEBPACK_IMPORTED_MODULE_1__();
// parse application/x-www-form-urlencoded
app.use(body_parser__WEBPACK_IMPORTED_MODULE_8__["urlencoded"]({ extended: false }));
// parse application/json
app.use(body_parser__WEBPACK_IMPORTED_MODULE_8__["json"]());
app.use(cors__WEBPACK_IMPORTED_MODULE_9__());
function processMarker(marker) {
    const markerAPI = marker.toObject();
    return Object.assign({}, markerAPI);
}
app.get('/api_v1/all-markers', (req, res, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    // TODO transfer filtering to MongoDB
    const allMarkers = (yield _app_models_markers_model__WEBPACK_IMPORTED_MODULE_6__[/* Marker */ "a"].find({}).populate('availabilities'));
    const markersFiltered = allMarkers.map(marker => processMarker(marker)).filter(marker => Object(_postedhere_calender__WEBPACK_IMPORTED_MODULE_2__[/* markerAvail */ "a"])(marker) !== _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_4__[/* AvailableWhen */ "a"].PAST);
    res.status(200).json({
        markerInfos: markersFiltered
    });
}));
app.post('/api_v1/marker', (req, res, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const newMarkerBody = req.body.info;
    const newAvails = yield _app_models_availability_model__WEBPACK_IMPORTED_MODULE_7__[/* Availability */ "a"].create(newMarkerBody.availabilities);
    const newMarker = new _app_models_markers_model__WEBPACK_IMPORTED_MODULE_6__[/* Marker */ "a"](Object.assign(Object.assign({}, newMarkerBody), { availabilities: newAvails.map(avail => avail._id) }));
    yield newMarker.save();
    res.status(204).json({});
}));
const port = process.env.PORT || process.env.port || 3333;
const server = app.listen(port, () => {
    console.info('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map