(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/app-styles.tsx":
/*!****************************!*\
  !*** ./app/app-styles.tsx ***!
  \****************************/
/*! exports provided: overlayStyle, inputWrapperStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlayStyle", function() { return overlayStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputWrapperStyle", function() { return inputWrapperStyle; });
const overlayStyle = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'hidden',
  // see through grey
  background: '#c8c8c894',
  justifyContent: 'center',
  alignItems: 'center',
  'z-index': 1000
};
const inputWrapperStyle = {
  display: 'block',
  width: '100%',
  padding: '1rem'
};

/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./app/map.tsx");


const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      height: '100vh',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_map__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/map.tsx":
/*!*********************!*\
  !*** ./app/map.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "../../../node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-styles */ "./app/app-styles.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function dateFromTime(time) {
  console.log(time);
  const date = new Date();
  const times = time.split(':'); // replace with ":" for differently displayed time.

  const hours = times[0];
  const minutes = times[1];
  console.log(parseInt(hours), parseInt(minutes));
  date.setHours(parseInt(hours));
  date.setMinutes(parseInt(minutes));
  date.setSeconds(0);
  return date;
}

function timeFromDate(date) {
  function twoLong(n) {
    return n < 10 ? `0${n}` : `${n}`;
  }

  return `${twoLong(date.getHours())}:${twoLong(date.getMinutes())}`;
}

const NewMarkerPopup = props => {
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [startTime, setStartTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date());
  const [endTime, setEndTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date());

  async function onSubmit() {
    const ret = await fetch('http://localhost:3333/api_v1/marker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        info: {
          lat: props.lat,
          lng: props.lng,
          availabilities: [{
            name,
            startTime,
            endTime
          }]
        }
      })
    });

    if (ret.status === 204) {
      alert('Success!');
      props.successClbk();
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      display: `${props.vis ? 'grid' : 'none'}`
    }, _app_styles__WEBPACK_IMPORTED_MODULE_2__["overlayStyle"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal",
    style: {
      background: 'white',
      padding: '2rem',
      display: 'grid',
      justifyContent: 'start'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _app_styles__WEBPACK_IMPORTED_MODULE_2__["inputWrapperStyle"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "",
    id: "",
    placeholder: "An identifiable name",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _app_styles__WEBPACK_IMPORTED_MODULE_2__["inputWrapperStyle"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: ""
  }, "Availability start time "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "time",
    name: "",
    id: "",
    placeholder: "",
    value: timeFromDate(startTime),
    onChange: e => setStartTime(dateFromTime(e.target.value))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _app_styles__WEBPACK_IMPORTED_MODULE_2__["inputWrapperStyle"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: ""
  }, "Availability end time "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "time",
    name: "",
    id: "",
    placeholder: "",
    value: timeFromDate(endTime),
    onChange: e => setEndTime(dateFromTime(e.target.value))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "button",
    value: "Post here!",
    onClick: () => onSubmit()
  })));
};

const MapWithAMarker = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(props => {
  const [markers, setMarkers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [newMarkerVis, setNewMarkerVis] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [lat, setLat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [lng, setLng] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  function onMarkerClick(e) {
    setLat(e.latLng.lat());
    setLng(e.latLng.lng());
    setNewMarkerVis(true); // setMarkers([...markers, { lat, lng, people: [{ name: 'Lev' }] }]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch('http://localhost:3333/api_v1/all-markers').then(async ret => {
      const body = await ret.json();
      setMarkers(body.markerInfos);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    defaultZoom: 18,
    defaultCenter: {
      lat: 40.4427,
      lng: -79.943
    },
    onClick: onMarkerClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewMarkerPopup, {
    vis: newMarkerVis,
    lat: lat,
    lng: lng,
    successClbk: () => window.location.reload()
  }), markers.map(marker => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    position: {
      lat: marker.lat,
      lng: marker.lng
    }
  })));
}));

const GoogleMapCustom = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapWithAMarker, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNHLik16D00yU-MKF0vqt2yp_v8UqPh7w&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: `100%`
      }
    }),
    containerElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: `100%`
      }
    }),
    mapElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: `100%`
      }
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleMapCustom);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/code/current/posted-here/apps/postedhere/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map