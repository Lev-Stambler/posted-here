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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/models/availability-model.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/models/availability-model.ts ***!
  \*******************************************************/
/*! exports provided: Availability */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Availability", function() { return Availability; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const availSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    name: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, require: true },
});
const Availability = mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Availability', availSchema);


/***/ }),

/***/ "./apps/api/src/app/models/markers-model.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/models/markers-model.ts ***!
  \**************************************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const markerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    availabilities: [{ type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId, ref: 'Availability' }],
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
});
const Marker = mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Marker', markerSchema);


/***/ }),

/***/ "./apps/api/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    DB_USER: 'backend-dev',
    DB: 'development',
    DB_PASSWORD: 'EMRBrsF7Hp8iWo3N',
    production: false,
};


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _postedhere_calender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @postedhere/calender */ "./libs/calender/src/index.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @postedhere/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./apps/api/src/environments/environment.ts");
/* harmony import */ var _app_models_markers_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/models/markers-model */ "./apps/api/src/app/models/markers-model.ts");
/* harmony import */ var _app_models_availability_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/models/availability-model */ "./apps/api/src/app/models/availability-model.ts");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_9__);










/**
 * MONGO Connection
 */
mongoose__WEBPACK_IMPORTED_MODULE_3__["connect"](`mongodb+srv://${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DB_USER}:${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DB_PASSWORD}@cluster0.bfyql.mongodb.net/${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DB}?retryWrites=true&w=majority`);
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
    const allMarkers = (yield _app_models_markers_model__WEBPACK_IMPORTED_MODULE_6__["Marker"].find({}).populate('availabilities'));
    const markersFiltered = allMarkers.map(marker => processMarker(marker)).filter(marker => Object(_postedhere_calender__WEBPACK_IMPORTED_MODULE_2__["markerAvail"])(marker) !== _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_4__["AvailableWhen"].PAST);
    res.status(200).json({
        markerInfos: markersFiltered
    });
}));
app.post('/api_v1/marker', (req, res, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const newMarkerBody = req.body.info;
    const newAvails = yield _app_models_availability_model__WEBPACK_IMPORTED_MODULE_7__["Availability"].create(newMarkerBody.availabilities);
    const newMarker = new _app_models_markers_model__WEBPACK_IMPORTED_MODULE_6__["Marker"](Object.assign(Object.assign({}, newMarkerBody), { availabilities: newAvails.map(avail => avail._id) }));
    yield newMarker.save();
    res.status(204).json({});
}));
const port = process.env.PORT || process.env.port || 3333;
const server = app.listen(port, () => {
    console.info('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-interfaces/src/index.ts ***!
  \******************************************/
/*! exports provided: AvailableWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api-interfaces */ "./libs/api-interfaces/src/lib/api-interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvailableWhen", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"]; });




/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/api-interfaces.ts ***!
  \*******************************************************/
/*! exports provided: AvailableWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableWhen", function() { return AvailableWhen; });
var AvailableWhen;
(function (AvailableWhen) {
    AvailableWhen[AvailableWhen["PAST"] = 0] = "PAST";
    AvailableWhen[AvailableWhen["PRESENT"] = 1] = "PRESENT";
    AvailableWhen[AvailableWhen["FUTURE"] = 2] = "FUTURE";
})(AvailableWhen || (AvailableWhen = {}));


/***/ }),

/***/ "./libs/avail/src/index.ts":
/*!*********************************!*\
  !*** ./libs/avail/src/index.ts ***!
  \*********************************/
/*! exports provided: avail, processAvail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_avail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/avail */ "./libs/avail/src/lib/avail.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "avail", function() { return _lib_avail__WEBPACK_IMPORTED_MODULE_0__["avail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processAvail", function() { return _lib_avail__WEBPACK_IMPORTED_MODULE_0__["processAvail"]; });




/***/ }),

/***/ "./libs/avail/src/lib/avail.ts":
/*!*************************************!*\
  !*** ./libs/avail/src/lib/avail.ts ***!
  \*************************************/
/*! exports provided: avail, processAvail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avail", function() { return avail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processAvail", function() { return processAvail; });
function avail() {
    return "avail";
}
function processAvail(avail) {
    avail.startTime = new Date(avail.startTime);
    avail.endTime = new Date(avail.endTime);
    return avail;
}


/***/ }),

/***/ "./libs/calender/src/index.ts":
/*!************************************!*\
  !*** ./libs/calender/src/index.ts ***!
  \************************************/
/*! exports provided: markerAvail, availableTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_calender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/calender */ "./libs/calender/src/lib/calender.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markerAvail", function() { return _lib_calender__WEBPACK_IMPORTED_MODULE_0__["markerAvail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "availableTime", function() { return _lib_calender__WEBPACK_IMPORTED_MODULE_0__["availableTime"]; });




/***/ }),

/***/ "./libs/calender/src/lib/calender.ts":
/*!*******************************************!*\
  !*** ./libs/calender/src/lib/calender.ts ***!
  \*******************************************/
/*! exports provided: markerAvail, availableTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerAvail", function() { return markerAvail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableTime", function() { return availableTime; });
/* harmony import */ var _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @postedhere/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _postedhere_avail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @postedhere/avail */ "./libs/avail/src/index.ts");


/**
 * If one person is available right now, then present is returned
 * If one person is available in the future and no one is available now, the future is returned
 * Otherwise the past is returned
 */
function markerAvail(marker) {
    if (marker.availabilities.some(avail => availableTime(avail) === _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"].PRESENT))
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"].PRESENT;
    else if (marker.availabilities.some(avail => availableTime(avail) === _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"].FUTURE))
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"].FUTURE;
    else
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"].PAST;
}
function availableTime(avail) {
    if (typeof avail.startTime === 'string' || typeof avail.endTime === 'string')
        avail = Object(_postedhere_avail__WEBPACK_IMPORTED_MODULE_1__["processAvail"])(avail);
    if (avail.startTime.getTime() + 0 <= Date.now() && Date.now() <= avail.endTime.getTime() + 0)
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"].PRESENT;
    else if (avail.startTime.getTime() + 0 > Date.now())
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"].FUTURE;
    else
        return _postedhere_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["AvailableWhen"].PAST;
}


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/code/current/posted-here/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map