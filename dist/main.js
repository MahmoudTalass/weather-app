/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/general-style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/general-style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Poppins", sans-serif;
}

html,
body {
  height: 100%;
}

.root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #ece6e6;
}

/* all app elements container style */
.all-info-container {
  background-color: #fff;
  width: clamp(500px, 50%, 1000px);
  padding: 3rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 3rem;
  border-radius: 0.5rem;
  position: relative;
}

/* Loading page */
.loading-page {
  display: none;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 1.5rem;
}

.loading-page.visible {
  display: flex;
}

/* Location search bar */
.location-search-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
}

.location-search {
  border: 1px solid #ece6e6;
  border-radius: 0.5rem;
  padding-left: 0.3rem;
  outline: none;
  height: 2rem;
}

.location-options {
  overflow: auto;
  height: 0;
  transition: height 300ms ease-in-out;
}

.location-option {
  padding: 1rem;
  cursor: pointer;
  border: 1px solid #ece6e6;
  border-top: 0;
}

/* Location, date, and time info container styles */
.location-date-time-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 1rem;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.5rem;
  justify-self: start;
}

.location-info > span {
  margin-right: 0.2rem;
}

.date-time-info {
  justify-self: end;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.2rem;
  width: 8rem;
  align-items: center;
}

/* Weather Info styles */
.weather-info {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
}

/* Weather forcast of current day styles */
.today-forecast-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.main-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.weather-condition-icon {
  width: 5rem;
  max-width: 5rem;
}

.temp-and-condition-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.weather-condition {
  font-size: 1.5rem;
}

.temp-container {
  display: flex;
  gap: 0.3rem;
  font-size: 1.5rem;
}

.other-info-container {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.other-info {
  display: flex;
  gap: 0.3rem;
}

/* Future forcast styles */
.future-forecast-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.future-forecast-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #ece6e6;
  padding: 0.8rem 1.7rem;
  border-radius: 0.5rem;
  width: fit-content;
}

@media only screen and (max-width: 500px) {
  .all-info-container {
    width: 100%;
    height: 100%;
  }

  .location-date-time-info {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    gap: 1rem;
  }

  .location-info {
    align-items: center;
    justify-self: center;
    text-align: center;
  }

  .date-time-info {
    justify-self: center;
  }

  .today-forecast-container {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .future-forecast-container {
    justify-content: center;
  }

  .weather-info {
    align-self: start;
    gap: 2rem;
  }
}

@media only screen and (max-width: 1150px) {
  .main-info {
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/CSS/general-style.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;AACpC;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA,qCAAqC;AACrC;EACE,sBAAsB;EACtB,gCAAgC;EAChC,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,6BAA6B;EAC7B,SAAS;EACT,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,kBAAkB;EAClB,gCAAgC;EAChC,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,cAAc;EACd,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,aAAa;AACf;;AAEA,mDAAmD;AACnD;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;EAC3B,SAAS;AACX;;AAEA,0CAA0C;AAC1C;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA,0BAA0B;AAC1B;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,0BAA0B;IAC1B,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,iBAAiB;IACjB,SAAS;EACX;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF","sourcesContent":["* {\n  font-family: \"Poppins\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.root {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #ece6e6;\n}\n\n/* all app elements container style */\n.all-info-container {\n  background-color: #fff;\n  width: clamp(500px, 50%, 1000px);\n  padding: 3rem;\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto;\n  gap: 3rem;\n  border-radius: 0.5rem;\n  position: relative;\n}\n\n/* Loading page */\n.loading-page {\n  display: none;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  font-size: 1.5rem;\n}\n\n.loading-page.visible {\n  display: flex;\n}\n\n/* Location search bar */\n.location-search-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  z-index: 1;\n}\n\n.location-search {\n  border: 1px solid #ece6e6;\n  border-radius: 0.5rem;\n  padding-left: 0.3rem;\n  outline: none;\n  height: 2rem;\n}\n\n.location-options {\n  overflow: auto;\n  height: 0;\n  transition: height 300ms ease-in-out;\n}\n\n.location-option {\n  padding: 1rem;\n  cursor: pointer;\n  border: 1px solid #ece6e6;\n  border-top: 0;\n}\n\n/* Location, date, and time info container styles */\n.location-date-time-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.location-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-size: 1.5rem;\n  justify-self: start;\n}\n\n.location-info > span {\n  margin-right: 0.2rem;\n}\n\n.date-time-info {\n  justify-self: end;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-size: 1.2rem;\n  width: 8rem;\n  align-items: center;\n}\n\n/* Weather Info styles */\n.weather-info {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 3rem;\n}\n\n/* Weather forcast of current day styles */\n.today-forecast-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.main-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.weather-condition-icon {\n  width: 5rem;\n  max-width: 5rem;\n}\n\n.temp-and-condition-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.weather-condition {\n  font-size: 1.5rem;\n}\n\n.temp-container {\n  display: flex;\n  gap: 0.3rem;\n  font-size: 1.5rem;\n}\n\n.other-info-container {\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.other-info {\n  display: flex;\n  gap: 0.3rem;\n}\n\n/* Future forcast styles */\n.future-forecast-container {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n}\n\n.future-forecast-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  background-color: #ece6e6;\n  padding: 0.8rem 1.7rem;\n  border-radius: 0.5rem;\n  width: fit-content;\n}\n\n@media only screen and (max-width: 500px) {\n  .all-info-container {\n    width: 100%;\n    height: 100%;\n  }\n\n  .location-date-time-info {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n    gap: 1rem;\n  }\n\n  .location-info {\n    align-items: center;\n    justify-self: center;\n    text-align: center;\n  }\n\n  .date-time-info {\n    justify-self: center;\n  }\n\n  .today-forecast-container {\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n  }\n\n  .future-forecast-container {\n    justify-content: center;\n  }\n\n  .weather-info {\n    align-self: start;\n    gap: 2rem;\n  }\n}\n\n@media only screen and (max-width: 1150px) {\n  .main-info {\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`, "",{"version":3,"sources":["webpack://./src/CSS/reset.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/CSS/general-style.css":
/*!***********************************!*\
  !*** ./src/CSS/general-style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./general-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/CSS/general-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_general_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_general_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/CSS/reset.css":
/*!***************************!*\
  !*** ./src/CSS/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/CSS/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/controller/weather-controller.js":
/*!******************************************************!*\
  !*** ./src/scripts/controller/weather-controller.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTimeIntervals: () => (/* binding */ setTimeIntervals),
/* harmony export */   showTempScale: () => (/* binding */ showTempScale),
/* harmony export */   startProgram: () => (/* binding */ startProgram),
/* harmony export */   updateCity: () => (/* binding */ updateCity),
/* harmony export */   updateCountry: () => (/* binding */ updateCountry),
/* harmony export */   updateCurrentTemp: () => (/* binding */ updateCurrentTemp),
/* harmony export */   updateDate: () => (/* binding */ updateDate),
/* harmony export */   updateDay: () => (/* binding */ updateDay),
/* harmony export */   updateFutureWeather: () => (/* binding */ updateFutureWeather),
/* harmony export */   updateHumidity: () => (/* binding */ updateHumidity),
/* harmony export */   updateLocationOptions: () => (/* binding */ updateLocationOptions),
/* harmony export */   updateRegion: () => (/* binding */ updateRegion),
/* harmony export */   updateTempFeel: () => (/* binding */ updateTempFeel),
/* harmony export */   updateTempScale: () => (/* binding */ updateTempScale),
/* harmony export */   updateTime: () => (/* binding */ updateTime),
/* harmony export */   updateWeatherCondition: () => (/* binding */ updateWeatherCondition),
/* harmony export */   updateWeatherConditionIcon: () => (/* binding */ updateWeatherConditionIcon)
/* harmony export */ });
/* harmony import */ var _model_weather_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/weather-model */ "./src/scripts/model/weather-model.js");
/* harmony import */ var _view_weather_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/weather-view */ "./src/scripts/view/weather-view.js");



function updateTime() {
  const time = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getTime)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayTime)(time);
}

function updateDate() {
  const date = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getDate)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayDate)(date);
}

function updateDay() {
  const dayName = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getDayName)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayDay)(dayName);
}

function updateCity() {
  const receivedLocation = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getLocation)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayCity)(receivedLocation.city);
}

function updateRegion() {
  const receivedLocation = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getLocation)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayRegion)(receivedLocation.regionN);
}

function updateCountry() {
  const receivedLocation = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getLocation)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayCountry)(receivedLocation.countryN);
}

function updateCurrentTemp() {
  const currentTemp = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getCurrentTemp)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayCurrentTemp)(currentTemp);
}

function showTempScale() {
  const currentScale = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getTempScale)();
  if (currentScale) {
    (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayTempScale)("C");
  } else {
    (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayTempScale)("F");
  }
}

function updateTempFeel() {
  const tempFeel = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getTempFeel)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayTempFeel)(tempFeel);
}

function updateFutureWeather() {
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.clearFutureWeatherCont)();
  const futureWeather = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getFutureWeather)();
  const futureWeatherArr = futureWeather.forecastday;

  futureWeatherArr.forEach((forecast, index) => {
    if (index !== 0) {
      const date = forecast.date.substring(5);
      const tempF = forecast.day.avgtemp_f;
      const tempC = forecast.day.avgtemp_c;

      const temp = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getTempScale)() ? tempC : tempF;
      (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayFutureWeather)(date, temp);
    }
  });
}

function updateTempScale() {
  (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.changeTempScale)();
  showTempScale();
  updateCurrentTemp();
  updateTempFeel();
  updateFutureWeather();
}

function updateWeatherCondition() {
  const weatherCondition = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getWeatherCondition)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayWeatherCondition)(weatherCondition);
}

function updateWeatherConditionIcon() {
  const weatherConditionIcon = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getWeatherConditionIcon)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayWeatherConditnionIcon)(weatherConditionIcon);
}

function updateHumidity() {
  const humidity = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getHumidity)();
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayHumidity)(humidity);
}

async function updateLocationOptions(input) {
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.clearLocationOptions)();

  const locationsArr = await (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.searchLocations)(input);
  locationsArr.forEach((location) => {
    const { name, region, country } = location;
    const fullLocation = `${name}, ${region}, ${country}`;
    (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.displayLocationOption)(fullLocation);
  });
  console.log(locationsArr);
}

async function startProgram() {
  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.toggleLoadingPage)();

  const currentLocation = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getCurrentLocation)();
  await (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.setForecastInfo)(currentLocation);

  (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.setTimeZone)();

  updateWeatherCondition();
  updateWeatherConditionIcon();
  updateHumidity();
  updateTempFeel();
  updateCurrentTemp();
  updateFutureWeather();

  updateCity();
  updateRegion();
  updateCountry();

  updateTime();
  updateDate();
  updateDay();

  showTempScale();

  (0,_view_weather_view__WEBPACK_IMPORTED_MODULE_1__.toggleLoadingPage)();
}

function setTimeIntervals() {
  setInterval(() => {
    updateDate();
    updateDay();
    updateTime();
  }, 20000);

  setInterval(async () => {
    const currentLocation = (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.getCurrentLocation)();
    await (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_0__.setForecastInfo)(currentLocation);

    updateWeatherCondition();
    updateWeatherConditionIcon();
    updateHumidity();
    updateTempFeel();
    updateCurrentTemp();
    updateFutureWeather();
  }, 3600000);
}




/***/ }),

/***/ "./src/scripts/model/weather-model.js":
/*!********************************************!*\
  !*** ./src/scripts/model/weather-model.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeTempScale: () => (/* binding */ changeTempScale),
/* harmony export */   getCurrentLocation: () => (/* binding */ getCurrentLocation),
/* harmony export */   getCurrentTemp: () => (/* binding */ getCurrentTemp),
/* harmony export */   getDate: () => (/* binding */ getDate),
/* harmony export */   getDayName: () => (/* binding */ getDayName),
/* harmony export */   getFutureWeather: () => (/* binding */ getFutureWeather),
/* harmony export */   getHumidity: () => (/* binding */ getHumidity),
/* harmony export */   getLocation: () => (/* binding */ getLocation),
/* harmony export */   getTempFeel: () => (/* binding */ getTempFeel),
/* harmony export */   getTempScale: () => (/* binding */ getTempScale),
/* harmony export */   getTime: () => (/* binding */ getTime),
/* harmony export */   getWeatherCondition: () => (/* binding */ getWeatherCondition),
/* harmony export */   getWeatherConditionIcon: () => (/* binding */ getWeatherConditionIcon),
/* harmony export */   searchLocations: () => (/* binding */ searchLocations),
/* harmony export */   setCurrentLocation: () => (/* binding */ setCurrentLocation),
/* harmony export */   setForecastInfo: () => (/* binding */ setForecastInfo),
/* harmony export */   setTimeZone: () => (/* binding */ setTimeZone)
/* harmony export */ });
const KEY = "2b31c3c95d8f4664beb190158233107";
let isCelsius = false;
let currentTimeZone;
let forecastInfo;

async function setForecastInfo(location) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=4`;

  const data = await fetch(url, { mode: "cors" });
  const forecastJson = await data.json();

  forecastInfo = forecastJson;
}

function getCurrentLocation() {
  const currentLocation = localStorage.getItem("location");
  return currentLocation;
}

function setCurrentLocation(location) {
  localStorage.setItem("location", location);
}

function getLocationData() {
  const locationData = forecastInfo.location;
  return locationData;
}

function getLocation() {
  const locationData = getLocationData();
  const city = locationData.name;
  const regionN = locationData.region;
  const countryN = locationData.country;

  return {
    city,
    regionN,
    countryN,
  };
}

function setTimeZone() {
  const locationData = getLocationData();

  currentTimeZone = locationData.tz_id;
}

function getDate() {
  const today = new Date();
  const dateAndTime = today.toLocaleString("en-US", {
    timeZone: currentTimeZone,
  });
  const dateAndTimeArr = dateAndTime.split(",");
  const date = dateAndTimeArr[0];

  return date;
}

function getDayName() {
  // wait because getDate() contains async operations
  const locationDate = getDate();
  const date = new Date(locationDate);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  return dayName;
}

function getTime() {
  const today = new Date();
  // wait because getTimeZone() contains async operations
  const dateAndTime = today.toLocaleString("en-US", {
    timeZone: currentTimeZone,
  });

  const dateAndTimeArr = dateAndTime.split(",");
  const fullTime = dateAndTimeArr[1].split(":");
  const time = `${fullTime[0]}:${fullTime[1]}`;
  const pmOram = fullTime[2].slice(-2);

  return { time, pmOram };
}

function getCurrentWeather() {
  return forecastInfo.current;
}

function getCurrentTemp() {
  const weatherInfo = getCurrentWeather();
  const tempF = weatherInfo.temp_f;
  const tempC = weatherInfo.temp_c;

  return isCelsius ? tempC : tempF;
}

function changeTempScale() {
  isCelsius = !isCelsius;
}

function getTempScale() {
  return isCelsius;
}

function getWeatherCondition() {
  const weather = getCurrentWeather();
  const weatherCondition = weather.condition.text;

  return weatherCondition;
}

function getWeatherConditionIcon() {
  const weather = getCurrentWeather();
  const weatherConditionIcon = weather.condition.icon;

  return weatherConditionIcon;
}

function getTempFeel() {
  const weatherInfo = getCurrentWeather();
  const feelsLikeC = weatherInfo.feelslike_c;
  const feelsLikeF = weatherInfo.feelslike_f;

  return isCelsius ? feelsLikeC : feelsLikeF;
}

function getHumidity() {
  const weatherInfo = getCurrentWeather();
  const { humidity } = weatherInfo;

  return humidity;
}

function getFutureWeather() {
  return forecastInfo.forecast;
}

async function searchLocations(input) {
  const url = `https://api.weatherapi.com/v1/search.json?key=${KEY}&q=${input}`;
  const data = await fetch(url, { mode: "cors" });
  const locationsJson = data.json();

  return locationsJson;
}




/***/ }),

/***/ "./src/scripts/view/weather-events.js":
/*!********************************************!*\
  !*** ./src/scripts/view/weather-events.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_weather_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/weather-controller */ "./src/scripts/controller/weather-controller.js");
/* harmony import */ var _model_weather_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/weather-model */ "./src/scripts/model/weather-model.js");
/* harmony import */ var _weather_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-view */ "./src/scripts/view/weather-view.js");




function handleWeatherEvents() {
  const tempScale = document.querySelector("#temp-scale");
  const locationSearch = document.querySelector("#location-search");
  const locationOptionsContainer = document.querySelector("#location-options");

  tempScale.addEventListener("click", () => {
    (0,_controller_weather_controller__WEBPACK_IMPORTED_MODULE_0__.updateTempScale)();
  });

  locationSearch.addEventListener("input", (e) => {
    const val = e.target.value;
    if (val.length > 0) {
      locationOptionsContainer.style.height = "6.5rem";
      (0,_controller_weather_controller__WEBPACK_IMPORTED_MODULE_0__.updateLocationOptions)(val);
    } else {
      locationOptionsContainer.style.height = "0";
    }
  });

  locationOptionsContainer.addEventListener("click", (e) => {
    const isLocationOption = e.target.classList.contains("location-option");

    if (isLocationOption) {
      const location = e.target.textContent;
      (0,_model_weather_model__WEBPACK_IMPORTED_MODULE_1__.setCurrentLocation)(location)
      ;(0,_controller_weather_controller__WEBPACK_IMPORTED_MODULE_0__.startProgram)();
      (0,_weather_view__WEBPACK_IMPORTED_MODULE_2__.clearLocationSearchInput)();
      locationOptionsContainer.style.height = "0";
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleWeatherEvents);


/***/ }),

/***/ "./src/scripts/view/weather-view.js":
/*!******************************************!*\
  !*** ./src/scripts/view/weather-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearFutureWeatherCont: () => (/* binding */ clearFutureWeatherCont),
/* harmony export */   clearLocationOptions: () => (/* binding */ clearLocationOptions),
/* harmony export */   clearLocationSearchInput: () => (/* binding */ clearLocationSearchInput),
/* harmony export */   displayCity: () => (/* binding */ displayCity),
/* harmony export */   displayCountry: () => (/* binding */ displayCountry),
/* harmony export */   displayCurrentTemp: () => (/* binding */ displayCurrentTemp),
/* harmony export */   displayDate: () => (/* binding */ displayDate),
/* harmony export */   displayDay: () => (/* binding */ displayDay),
/* harmony export */   displayFutureWeather: () => (/* binding */ displayFutureWeather),
/* harmony export */   displayHumidity: () => (/* binding */ displayHumidity),
/* harmony export */   displayLocationOption: () => (/* binding */ displayLocationOption),
/* harmony export */   displayRegion: () => (/* binding */ displayRegion),
/* harmony export */   displayTempFeel: () => (/* binding */ displayTempFeel),
/* harmony export */   displayTempScale: () => (/* binding */ displayTempScale),
/* harmony export */   displayTime: () => (/* binding */ displayTime),
/* harmony export */   displayWeatherCondition: () => (/* binding */ displayWeatherCondition),
/* harmony export */   displayWeatherConditnionIcon: () => (/* binding */ displayWeatherConditnionIcon),
/* harmony export */   toggleLoadingPage: () => (/* binding */ toggleLoadingPage)
/* harmony export */ });
/* eslint-disable no-unused-vars */
function displayTime({ time, pmOram }) {
  const timeContainer = document.querySelector("#time");
  timeContainer.textContent = `${time} ${pmOram}`;
}

function displayDay(day) {
  const dayContainer = document.querySelector("#day");
  dayContainer.textContent = day;
}

function displayDate(date) {
  const dateContainer = document.querySelector("#date");
  dateContainer.textContent = date;
}

function displayCity(city) {
  const cityContainer = document.querySelector("#city");
  cityContainer.textContent = city;
}

function displayRegion(region) {
  const regionContainer = document.querySelector("#region");
  regionContainer.textContent = region;
}

function displayCountry(country) {
  const countryContainer = document.querySelector("#country");
  countryContainer.textContent = country;
}

function displayCurrentTemp(temp) {
  const currentTempContainer = document.querySelector("#current-temp");
  currentTempContainer.textContent = `${temp}°`;
}

function displayTempScale(scale) {
  const tempScale = document.querySelector("#temp-scale");
  tempScale.textContent = scale;
}

function displayWeatherCondition(condition) {
  const weatherCondition = document.querySelector("#weather-condition");
  weatherCondition.textContent = condition;
}

function displayWeatherConditnionIcon(icon) {
  const weatherConditionIcon = document.querySelector(
    "#weather-condition-icon",
  );

  weatherConditionIcon.src = icon;
}

function displayTempFeel(temp) {
  const tempFeel = document.querySelector("#temp-feel");

  tempFeel.textContent = `${temp}°`;
}

function displayHumidity(humidityLevel) {
  const humidity = document.querySelector("#humidity");

  humidity.textContent = `${humidityLevel}%`;
}

function displayFutureWeather(date, temp) {
  const futureForecastsContainer = document.querySelector(
    "#future-forecast-container",
  );

  const futureForecast = document.createElement("div");
  const futureDate = document.createElement("p");
  const futureTemp = document.createElement("p");

  const month = date.substring(0, 2);
  const day = date.substring(3);

  futureForecast.classList.add("future-forecast-item");

  futureDate.id = "future-date";
  futureTemp.id = "future-temp";

  futureDate.textContent = `${month}/${day}`;
  futureTemp.textContent = `${temp}°`;

  futureForecast.appendChild(futureDate);
  futureForecast.appendChild(futureTemp);

  futureForecastsContainer.appendChild(futureForecast);
}

function clearFutureWeatherCont() {
  const futureForecastsContainer = document.querySelector(
    "#future-forecast-container",
  );
  futureForecastsContainer.innerHTML = "";
}

function displayLocationOption(location) {
  const optionsContainer = document.querySelector("#location-options");
  const option = document.createElement("p");

  option.classList.add("location-option");
  option.textContent = location;

  optionsContainer.appendChild(option);
}

function clearLocationOptions() {
  const optionsContainer = document.querySelector("#location-options");

  optionsContainer.innerHTML = "";
}

function clearLocationSearchInput() {
  const locationSearch = document.querySelector("#location-search");

  locationSearch.value = "";
}

function toggleLoadingPage() {
  const loadingPage = document.querySelector("#loading-page")
  
  loadingPage.classList.toggle("visible");
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSS/reset.css */ "./src/CSS/reset.css");
/* harmony import */ var _CSS_general_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSS/general-style.css */ "./src/CSS/general-style.css");
/* harmony import */ var _scripts_model_weather_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/model/weather-model */ "./src/scripts/model/weather-model.js");
/* harmony import */ var _scripts_controller_weather_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/controller/weather-controller */ "./src/scripts/controller/weather-controller.js");
/* harmony import */ var _scripts_view_weather_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/view/weather-events */ "./src/scripts/view/weather-events.js");
/* eslint-disable no-unused-vars */







const localLocation = localStorage.getItem("location");
if (localLocation === undefined) (0,_scripts_model_weather_model__WEBPACK_IMPORTED_MODULE_2__.setCurrentLocation)("New York");

(0,_scripts_controller_weather_controller__WEBPACK_IMPORTED_MODULE_3__.startProgram)();
(0,_scripts_view_weather_events__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_scripts_controller_weather_controller__WEBPACK_IMPORTED_MODULE_3__.setTimeIntervals)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRGQUE0RixZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSw0QkFBNEIseUNBQXlDLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLFdBQVcsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLDhCQUE4QixHQUFHLGlFQUFpRSwyQkFBMkIscUNBQXFDLGtCQUFrQixrQkFBa0Isd0JBQXdCLCtCQUErQixrQ0FBa0MsY0FBYywwQkFBMEIsdUJBQXVCLEdBQUcsdUNBQXVDLGtCQUFrQix1QkFBdUIscUNBQXFDLGdCQUFnQixpQkFBaUIsYUFBYSxjQUFjLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLHNCQUFzQixHQUFHLDJCQUEyQixrQkFBa0IsR0FBRywyREFBMkQsa0JBQWtCLDJCQUEyQixnQkFBZ0IsZUFBZSxHQUFHLHNCQUFzQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixrQkFBa0IsaUJBQWlCLEdBQUcsdUJBQXVCLG1CQUFtQixjQUFjLHlDQUF5QyxHQUFHLHNCQUFzQixrQkFBa0Isb0JBQW9CLDhCQUE4QixrQkFBa0IsR0FBRyxvRkFBb0Ysa0JBQWtCLG1DQUFtQyw0QkFBNEIsY0FBYyxHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGdCQUFnQixzQkFBc0Isd0JBQXdCLEdBQUcsMkJBQTJCLHlCQUF5QixHQUFHLHFCQUFxQixzQkFBc0Isa0JBQWtCLDJCQUEyQixnQkFBZ0Isc0JBQXNCLGdCQUFnQix3QkFBd0IsR0FBRyw4Q0FBOEMsa0JBQWtCLCtCQUErQixnQ0FBZ0MsY0FBYyxHQUFHLDRFQUE0RSxrQkFBa0IsbUNBQW1DLG9CQUFvQix3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHdCQUF3QixnQkFBZ0IsR0FBRyw2QkFBNkIsZ0JBQWdCLG9CQUFvQixHQUFHLG1DQUFtQyxrQkFBa0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcscUJBQXFCLGtCQUFrQixnQkFBZ0Isc0JBQXNCLEdBQUcsMkJBQTJCLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLGlCQUFpQixrQkFBa0IsZ0JBQWdCLEdBQUcsNkRBQTZELGdCQUFnQixrQkFBa0Isb0JBQW9CLHdCQUF3QixjQUFjLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLDhCQUE4QiwyQkFBMkIsMEJBQTBCLHVCQUF1QixHQUFHLCtDQUErQyx5QkFBeUIsa0JBQWtCLG1CQUFtQixLQUFLLGdDQUFnQyxpQ0FBaUMsa0NBQWtDLDBCQUEwQixnQkFBZ0IsS0FBSyxzQkFBc0IsMEJBQTBCLDJCQUEyQix5QkFBeUIsS0FBSyx1QkFBdUIsMkJBQTJCLEtBQUssaUNBQWlDLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEtBQUssa0NBQWtDLDhCQUE4QixLQUFLLHFCQUFxQix3QkFBd0IsZ0JBQWdCLEtBQUssR0FBRyxnREFBZ0QsZ0JBQWdCLDZCQUE2QixLQUFLLEdBQUcscUJBQXFCO0FBQzN6TDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN092QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFlBQVksT0FBTyxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsNkJBQTZCLDZCQUE2QixHQUFHLGdrQkFBZ2tCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQiw2QkFBNkIsR0FBRyx3SkFBd0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxXQUFXLHFCQUFxQixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyw2REFBNkQsa0JBQWtCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHLHFCQUFxQjtBQUNybEQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN0STFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUE4RztBQUM5RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhGQUFPOzs7O0FBSXdEO0FBQ2hGLE9BQU8saUVBQWUsOEZBQU8sSUFBSSw4RkFBTyxVQUFVLDhGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNJZ0M7QUFtQkY7O0FBRTlCO0FBQ0EsZUFBZSw2REFBTztBQUN0QixFQUFFLCtEQUFXO0FBQ2I7O0FBRUE7QUFDQSxlQUFlLDZEQUFPO0FBQ3RCLEVBQUUsK0RBQVc7QUFDYjs7QUFFQTtBQUNBLGtCQUFrQixnRUFBVTtBQUM1QixFQUFFLDhEQUFVO0FBQ1o7O0FBRUE7QUFDQSwyQkFBMkIsaUVBQVc7QUFDdEMsRUFBRSwrREFBVztBQUNiOztBQUVBO0FBQ0EsMkJBQTJCLGlFQUFXO0FBQ3RDLEVBQUUsaUVBQWE7QUFDZjs7QUFFQTtBQUNBLDJCQUEyQixpRUFBVztBQUN0QyxFQUFFLGtFQUFjO0FBQ2hCOztBQUVBO0FBQ0Esc0JBQXNCLG9FQUFjO0FBQ3BDLEVBQUUsc0VBQWtCO0FBQ3BCOztBQUVBO0FBQ0EsdUJBQXVCLGtFQUFZO0FBQ25DO0FBQ0EsSUFBSSxvRUFBZ0I7QUFDcEIsSUFBSTtBQUNKLElBQUksb0VBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUVBQVc7QUFDOUIsRUFBRSxtRUFBZTtBQUNqQjs7QUFFQTtBQUNBLEVBQUUsMEVBQXNCO0FBQ3hCLHdCQUF3QixzRUFBZ0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0VBQVk7QUFDL0IsTUFBTSx3RUFBb0I7QUFDMUI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLHFFQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIseUVBQW1CO0FBQzlDLEVBQUUsMkVBQXVCO0FBQ3pCOztBQUVBO0FBQ0EsK0JBQStCLDZFQUF1QjtBQUN0RCxFQUFFLGdGQUE0QjtBQUM5Qjs7QUFFQTtBQUNBLG1CQUFtQixpRUFBVztBQUM5QixFQUFFLG1FQUFlO0FBQ2pCOztBQUVBO0FBQ0EsRUFBRSx3RUFBb0I7O0FBRXRCLDZCQUE2QixxRUFBZTtBQUM1QztBQUNBLFlBQVksd0JBQXdCO0FBQ3BDLDRCQUE0QixLQUFLLElBQUksT0FBTyxJQUFJLFFBQVE7QUFDeEQsSUFBSSx5RUFBcUI7QUFDekIsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHFFQUFpQjs7QUFFbkIsMEJBQTBCLHdFQUFrQjtBQUM1QyxRQUFRLHFFQUFlOztBQUV2QixFQUFFLGlFQUFXOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUUscUVBQWlCO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsNEJBQTRCLHdFQUFrQjtBQUM5QyxVQUFVLHFFQUFlOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBb0JFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN01GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLElBQUksS0FBSyxTQUFTOztBQUVuRixrQ0FBa0MsY0FBYztBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGlCQUFpQjs7QUFFdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esa0JBQWtCLFlBQVksR0FBRyxZQUFZO0FBQzdDOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsV0FBVzs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsSUFBSSxLQUFLLE1BQU07QUFDOUUsa0NBQWtDLGNBQWM7QUFDaEQ7O0FBRUE7QUFDQTs7QUFvQkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdKd0M7QUFDa0I7QUFDRjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtFQUFlO0FBQ25CLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFGQUFxQjtBQUMzQixNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSx3RUFBa0I7QUFDeEIsTUFBTSw2RUFBWTtBQUNsQixNQUFNLHVFQUF3QjtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDbkM7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBLGlDQUFpQyxNQUFNLEVBQUUsT0FBTztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0QixLQUFLO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCLGNBQWM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw4QkFBOEIsTUFBTSxHQUFHLElBQUk7QUFDM0MsOEJBQThCLEtBQUs7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcUJFOzs7Ozs7O1VDbEpGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDb0M7QUFDZTs7QUFFZ0I7QUFJbEI7QUFDZTs7QUFFaEU7QUFDQSxpQ0FBaUMsZ0ZBQWtCOztBQUVuRCxvRkFBWTtBQUNaLHdFQUFtQjtBQUNuQix3RkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9DU1MvZ2VuZXJhbC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQ1NTL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9DU1MvZ2VuZXJhbC1zdHlsZS5jc3M/N2YwNiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9DU1MvcmVzZXQuY3NzPzc4MTgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXIvd2VhdGhlci1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvbW9kZWwvd2VhdGhlci1tb2RlbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL3ZpZXcvd2VhdGhlci1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy92aWV3L3dlYXRoZXItdmlldy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTZlNjtcbn1cblxuLyogYWxsIGFwcCBlbGVtZW50cyBjb250YWluZXIgc3R5bGUgKi9cbi5hbGwtaW5mby1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogY2xhbXAoNTAwcHgsIDUwJSwgMTAwMHB4KTtcbiAgcGFkZGluZzogM3JlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICBnYXA6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBMb2FkaW5nIHBhZ2UgKi9cbi5sb2FkaW5nLXBhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5sb2FkaW5nLXBhZ2UudmlzaWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIExvY2F0aW9uIHNlYXJjaCBiYXIgKi9cbi5sb2NhdGlvbi1zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sb2NhdGlvbi1zZWFyY2gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlNmU2O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC4zcmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5sb2NhdGlvbi1vcHRpb25zIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9jYXRpb24tb3B0aW9uIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlNmU2O1xuICBib3JkZXItdG9wOiAwO1xufVxuXG4vKiBMb2NhdGlvbiwgZGF0ZSwgYW5kIHRpbWUgaW5mbyBjb250YWluZXIgc3R5bGVzICovXG4ubG9jYXRpb24tZGF0ZS10aW1lLWluZm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5sb2NhdGlvbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xufVxuXG4ubG9jYXRpb24taW5mbyA+IHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbn1cblxuLmRhdGUtdGltZS1pbmZvIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIFdlYXRoZXIgSW5mbyBzdHlsZXMgKi9cbi53ZWF0aGVyLWluZm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBnYXA6IDNyZW07XG59XG5cbi8qIFdlYXRoZXIgZm9yY2FzdCBvZiBjdXJyZW50IGRheSBzdHlsZXMgKi9cbi50b2RheS1mb3JlY2FzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4ud2VhdGhlci1jb25kaXRpb24taWNvbiB7XG4gIHdpZHRoOiA1cmVtO1xuICBtYXgtd2lkdGg6IDVyZW07XG59XG5cbi50ZW1wLWFuZC1jb25kaXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi53ZWF0aGVyLWNvbmRpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGVtcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5vdGhlci1pbmZvLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLm90aGVyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuM3JlbTtcbn1cblxuLyogRnV0dXJlIGZvcmNhc3Qgc3R5bGVzICovXG4uZnV0dXJlLWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmZ1dHVyZS1mb3JlY2FzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTZlNjtcbiAgcGFkZGluZzogMC44cmVtIDEuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmFsbC1pbmZvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmxvY2F0aW9uLWRhdGUtdGltZS1pbmZvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAubG9jYXRpb24taW5mbyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZGF0ZS10aW1lLWluZm8ge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG5cbiAgLnRvZGF5LWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC5mdXR1cmUtZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC53ZWF0aGVyLWluZm8ge1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIGdhcDogMnJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xuICAubWFpbi1pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9DU1MvZ2VuZXJhbC1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUEsbURBQW1EO0FBQ25EO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5yb290IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlNmU2O1xcbn1cXG5cXG4vKiBhbGwgYXBwIGVsZW1lbnRzIGNvbnRhaW5lciBzdHlsZSAqL1xcbi5hbGwtaW5mby1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiBjbGFtcCg1MDBweCwgNTAlLCAxMDAwcHgpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdhcDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogTG9hZGluZyBwYWdlICovXFxuLmxvYWRpbmctcGFnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubG9hZGluZy1wYWdlLnZpc2libGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogTG9jYXRpb24gc2VhcmNoIGJhciAqL1xcbi5sb2NhdGlvbi1zZWFyY2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubG9jYXRpb24tc2VhcmNoIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2U2ZTY7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5sb2NhdGlvbi1vcHRpb25zIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubG9jYXRpb24tb3B0aW9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlNmU2O1xcbiAgYm9yZGVyLXRvcDogMDtcXG59XFxuXFxuLyogTG9jYXRpb24sIGRhdGUsIGFuZCB0aW1lIGluZm8gY29udGFpbmVyIHN0eWxlcyAqL1xcbi5sb2NhdGlvbi1kYXRlLXRpbWUtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5sb2NhdGlvbi1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5sb2NhdGlvbi1pbmZvID4gc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcXG59XFxuXFxuLmRhdGUtdGltZS1pbmZvIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDhyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBXZWF0aGVyIEluZm8gc3R5bGVzICovXFxuLndlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi8qIFdlYXRoZXIgZm9yY2FzdCBvZiBjdXJyZW50IGRheSBzdHlsZXMgKi9cXG4udG9kYXktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbi1pY29uIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgbWF4LXdpZHRoOiA1cmVtO1xcbn1cXG5cXG4udGVtcC1hbmQtY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGVtcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5vdGhlci1pbmZvLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5vdGhlci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLyogRnV0dXJlIGZvcmNhc3Qgc3R5bGVzICovXFxuLmZ1dHVyZS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZ1dHVyZS1mb3JlY2FzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTZlNjtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjdyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5hbGwtaW5mby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLmxvY2F0aW9uLWRhdGUtdGltZS1pbmZvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLmxvY2F0aW9uLWluZm8ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRhdGUtdGltZS1pbmZvIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAudG9kYXktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgLmZ1dHVyZS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWluZm8ge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xcbiAgLm1haW4taW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQ1NTL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dlbmVyYWwtc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nZW5lcmFsLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgY2hhbmdlVGVtcFNjYWxlLFxuICBnZXRDdXJyZW50VGVtcCxcbiAgZ2V0RGF0ZSxcbiAgZ2V0RGF5TmFtZSxcbiAgZ2V0RnV0dXJlV2VhdGhlcixcbiAgZ2V0SHVtaWRpdHksXG4gIGdldExvY2F0aW9uLFxuICBnZXRUZW1wRmVlbCxcbiAgZ2V0VGVtcFNjYWxlLFxuICBnZXRUaW1lLFxuICBnZXRXZWF0aGVyQ29uZGl0aW9uLFxuICBnZXRXZWF0aGVyQ29uZGl0aW9uSWNvbixcbiAgc2VhcmNoTG9jYXRpb25zLFxuICBnZXRDdXJyZW50TG9jYXRpb24sXG4gIHNldFRpbWVab25lLFxuICBzZXRGb3JlY2FzdEluZm8sXG59IGZyb20gXCIuLi9tb2RlbC93ZWF0aGVyLW1vZGVsXCI7XG5pbXBvcnQge1xuICBkaXNwbGF5RGF0ZSxcbiAgZGlzcGxheVRpbWUsXG4gIGRpc3BsYXlEYXksXG4gIGRpc3BsYXlDaXR5LFxuICBkaXNwbGF5UmVnaW9uLFxuICBkaXNwbGF5Q291bnRyeSxcbiAgZGlzcGxheUN1cnJlbnRUZW1wLFxuICBkaXNwbGF5VGVtcFNjYWxlLFxuICBkaXNwbGF5V2VhdGhlckNvbmRpdGlvbixcbiAgZGlzcGxheVdlYXRoZXJDb25kaXRuaW9uSWNvbixcbiAgZGlzcGxheVRlbXBGZWVsLFxuICBkaXNwbGF5SHVtaWRpdHksXG4gIGRpc3BsYXlGdXR1cmVXZWF0aGVyLFxuICBjbGVhckZ1dHVyZVdlYXRoZXJDb250LFxuICBkaXNwbGF5TG9jYXRpb25PcHRpb24sXG4gIGNsZWFyTG9jYXRpb25PcHRpb25zLFxuICB0b2dnbGVMb2FkaW5nUGFnZSxcbn0gZnJvbSBcIi4uL3ZpZXcvd2VhdGhlci12aWV3XCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWUoKSB7XG4gIGNvbnN0IHRpbWUgPSBnZXRUaW1lKCk7XG4gIGRpc3BsYXlUaW1lKHRpbWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRlKCkge1xuICBjb25zdCBkYXRlID0gZ2V0RGF0ZSgpO1xuICBkaXNwbGF5RGF0ZShkYXRlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF5KCkge1xuICBjb25zdCBkYXlOYW1lID0gZ2V0RGF5TmFtZSgpO1xuICBkaXNwbGF5RGF5KGRheU5hbWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDaXR5KCkge1xuICBjb25zdCByZWNlaXZlZExvY2F0aW9uID0gZ2V0TG9jYXRpb24oKTtcbiAgZGlzcGxheUNpdHkocmVjZWl2ZWRMb2NhdGlvbi5jaXR5KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUmVnaW9uKCkge1xuICBjb25zdCByZWNlaXZlZExvY2F0aW9uID0gZ2V0TG9jYXRpb24oKTtcbiAgZGlzcGxheVJlZ2lvbihyZWNlaXZlZExvY2F0aW9uLnJlZ2lvbk4pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudHJ5KCkge1xuICBjb25zdCByZWNlaXZlZExvY2F0aW9uID0gZ2V0TG9jYXRpb24oKTtcbiAgZGlzcGxheUNvdW50cnkocmVjZWl2ZWRMb2NhdGlvbi5jb3VudHJ5Tik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRUZW1wKCkge1xuICBjb25zdCBjdXJyZW50VGVtcCA9IGdldEN1cnJlbnRUZW1wKCk7XG4gIGRpc3BsYXlDdXJyZW50VGVtcChjdXJyZW50VGVtcCk7XG59XG5cbmZ1bmN0aW9uIHNob3dUZW1wU2NhbGUoKSB7XG4gIGNvbnN0IGN1cnJlbnRTY2FsZSA9IGdldFRlbXBTY2FsZSgpO1xuICBpZiAoY3VycmVudFNjYWxlKSB7XG4gICAgZGlzcGxheVRlbXBTY2FsZShcIkNcIik7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheVRlbXBTY2FsZShcIkZcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGVtcEZlZWwoKSB7XG4gIGNvbnN0IHRlbXBGZWVsID0gZ2V0VGVtcEZlZWwoKTtcbiAgZGlzcGxheVRlbXBGZWVsKHRlbXBGZWVsKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRnV0dXJlV2VhdGhlcigpIHtcbiAgY2xlYXJGdXR1cmVXZWF0aGVyQ29udCgpO1xuICBjb25zdCBmdXR1cmVXZWF0aGVyID0gZ2V0RnV0dXJlV2VhdGhlcigpO1xuICBjb25zdCBmdXR1cmVXZWF0aGVyQXJyID0gZnV0dXJlV2VhdGhlci5mb3JlY2FzdGRheTtcblxuICBmdXR1cmVXZWF0aGVyQXJyLmZvckVhY2goKGZvcmVjYXN0LCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgY29uc3QgZGF0ZSA9IGZvcmVjYXN0LmRhdGUuc3Vic3RyaW5nKDUpO1xuICAgICAgY29uc3QgdGVtcEYgPSBmb3JlY2FzdC5kYXkuYXZndGVtcF9mO1xuICAgICAgY29uc3QgdGVtcEMgPSBmb3JlY2FzdC5kYXkuYXZndGVtcF9jO1xuXG4gICAgICBjb25zdCB0ZW1wID0gZ2V0VGVtcFNjYWxlKCkgPyB0ZW1wQyA6IHRlbXBGO1xuICAgICAgZGlzcGxheUZ1dHVyZVdlYXRoZXIoZGF0ZSwgdGVtcCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGVtcFNjYWxlKCkge1xuICBjaGFuZ2VUZW1wU2NhbGUoKTtcbiAgc2hvd1RlbXBTY2FsZSgpO1xuICB1cGRhdGVDdXJyZW50VGVtcCgpO1xuICB1cGRhdGVUZW1wRmVlbCgpO1xuICB1cGRhdGVGdXR1cmVXZWF0aGVyKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJDb25kaXRpb24oKSB7XG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBnZXRXZWF0aGVyQ29uZGl0aW9uKCk7XG4gIGRpc3BsYXlXZWF0aGVyQ29uZGl0aW9uKHdlYXRoZXJDb25kaXRpb24pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyQ29uZGl0aW9uSWNvbigpIHtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbkljb24gPSBnZXRXZWF0aGVyQ29uZGl0aW9uSWNvbigpO1xuICBkaXNwbGF5V2VhdGhlckNvbmRpdG5pb25JY29uKHdlYXRoZXJDb25kaXRpb25JY29uKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSHVtaWRpdHkoKSB7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZ2V0SHVtaWRpdHkoKTtcbiAgZGlzcGxheUh1bWlkaXR5KGh1bWlkaXR5KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb25PcHRpb25zKGlucHV0KSB7XG4gIGNsZWFyTG9jYXRpb25PcHRpb25zKCk7XG5cbiAgY29uc3QgbG9jYXRpb25zQXJyID0gYXdhaXQgc2VhcmNoTG9jYXRpb25zKGlucHV0KTtcbiAgbG9jYXRpb25zQXJyLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCByZWdpb24sIGNvdW50cnkgfSA9IGxvY2F0aW9uO1xuICAgIGNvbnN0IGZ1bGxMb2NhdGlvbiA9IGAke25hbWV9LCAke3JlZ2lvbn0sICR7Y291bnRyeX1gO1xuICAgIGRpc3BsYXlMb2NhdGlvbk9wdGlvbihmdWxsTG9jYXRpb24pO1xuICB9KTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25zQXJyKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRQcm9ncmFtKCkge1xuICB0b2dnbGVMb2FkaW5nUGFnZSgpO1xuXG4gIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICBhd2FpdCBzZXRGb3JlY2FzdEluZm8oY3VycmVudExvY2F0aW9uKTtcblxuICBzZXRUaW1lWm9uZSgpO1xuXG4gIHVwZGF0ZVdlYXRoZXJDb25kaXRpb24oKTtcbiAgdXBkYXRlV2VhdGhlckNvbmRpdGlvbkljb24oKTtcbiAgdXBkYXRlSHVtaWRpdHkoKTtcbiAgdXBkYXRlVGVtcEZlZWwoKTtcbiAgdXBkYXRlQ3VycmVudFRlbXAoKTtcbiAgdXBkYXRlRnV0dXJlV2VhdGhlcigpO1xuXG4gIHVwZGF0ZUNpdHkoKTtcbiAgdXBkYXRlUmVnaW9uKCk7XG4gIHVwZGF0ZUNvdW50cnkoKTtcblxuICB1cGRhdGVUaW1lKCk7XG4gIHVwZGF0ZURhdGUoKTtcbiAgdXBkYXRlRGF5KCk7XG5cbiAgc2hvd1RlbXBTY2FsZSgpO1xuXG4gIHRvZ2dsZUxvYWRpbmdQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHNldFRpbWVJbnRlcnZhbHMoKSB7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICB1cGRhdGVEYXRlKCk7XG4gICAgdXBkYXRlRGF5KCk7XG4gICAgdXBkYXRlVGltZSgpO1xuICB9LCAyMDAwMCk7XG5cbiAgc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgIGF3YWl0IHNldEZvcmVjYXN0SW5mbyhjdXJyZW50TG9jYXRpb24pO1xuXG4gICAgdXBkYXRlV2VhdGhlckNvbmRpdGlvbigpO1xuICAgIHVwZGF0ZVdlYXRoZXJDb25kaXRpb25JY29uKCk7XG4gICAgdXBkYXRlSHVtaWRpdHkoKTtcbiAgICB1cGRhdGVUZW1wRmVlbCgpO1xuICAgIHVwZGF0ZUN1cnJlbnRUZW1wKCk7XG4gICAgdXBkYXRlRnV0dXJlV2VhdGhlcigpO1xuICB9LCAzNjAwMDAwKTtcbn1cblxuZXhwb3J0IHtcbiAgdXBkYXRlVGltZSxcbiAgdXBkYXRlRGF0ZSxcbiAgdXBkYXRlRGF5LFxuICB1cGRhdGVDaXR5LFxuICB1cGRhdGVSZWdpb24sXG4gIHVwZGF0ZUNvdW50cnksXG4gIHVwZGF0ZUN1cnJlbnRUZW1wLFxuICB1cGRhdGVUZW1wU2NhbGUsXG4gIHNob3dUZW1wU2NhbGUsXG4gIHVwZGF0ZVdlYXRoZXJDb25kaXRpb24sXG4gIHVwZGF0ZVdlYXRoZXJDb25kaXRpb25JY29uLFxuICB1cGRhdGVUZW1wRmVlbCxcbiAgdXBkYXRlSHVtaWRpdHksXG4gIHVwZGF0ZUZ1dHVyZVdlYXRoZXIsXG4gIHVwZGF0ZUxvY2F0aW9uT3B0aW9ucyxcbiAgc3RhcnRQcm9ncmFtLFxuICBzZXRUaW1lSW50ZXJ2YWxzLFxufTtcbiIsImNvbnN0IEtFWSA9IFwiMmIzMWMzYzk1ZDhmNDY2NGJlYjE5MDE1ODIzMzEwN1wiO1xubGV0IGlzQ2Vsc2l1cyA9IGZhbHNlO1xubGV0IGN1cnJlbnRUaW1lWm9uZTtcbmxldCBmb3JlY2FzdEluZm87XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEZvcmVjYXN0SW5mbyhsb2NhdGlvbikge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtLRVl9JnE9JHtsb2NhdGlvbn0mZGF5cz00YDtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICBjb25zdCBmb3JlY2FzdEpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcblxuICBmb3JlY2FzdEluZm8gPSBmb3JlY2FzdEpzb247XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgY29uc3QgY3VycmVudExvY2F0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhdGlvblwiKTtcbiAgcmV0dXJuIGN1cnJlbnRMb2NhdGlvbjtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYXRpb25cIiwgbG9jYXRpb24pO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbkRhdGEoKSB7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGZvcmVjYXN0SW5mby5sb2NhdGlvbjtcbiAgcmV0dXJuIGxvY2F0aW9uRGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGdldExvY2F0aW9uRGF0YSgpO1xuICBjb25zdCBjaXR5ID0gbG9jYXRpb25EYXRhLm5hbWU7XG4gIGNvbnN0IHJlZ2lvbk4gPSBsb2NhdGlvbkRhdGEucmVnaW9uO1xuICBjb25zdCBjb3VudHJ5TiA9IGxvY2F0aW9uRGF0YS5jb3VudHJ5O1xuXG4gIHJldHVybiB7XG4gICAgY2l0eSxcbiAgICByZWdpb25OLFxuICAgIGNvdW50cnlOLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRUaW1lWm9uZSgpIHtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gZ2V0TG9jYXRpb25EYXRhKCk7XG5cbiAgY3VycmVudFRpbWVab25lID0gbG9jYXRpb25EYXRhLnR6X2lkO1xufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gdG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgdGltZVpvbmU6IGN1cnJlbnRUaW1lWm9uZSxcbiAgfSk7XG4gIGNvbnN0IGRhdGVBbmRUaW1lQXJyID0gZGF0ZUFuZFRpbWUuc3BsaXQoXCIsXCIpO1xuICBjb25zdCBkYXRlID0gZGF0ZUFuZFRpbWVBcnJbMF07XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIGdldERheU5hbWUoKSB7XG4gIC8vIHdhaXQgYmVjYXVzZSBnZXREYXRlKCkgY29udGFpbnMgYXN5bmMgb3BlcmF0aW9uc1xuICBjb25zdCBsb2NhdGlvbkRhdGUgPSBnZXREYXRlKCk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShsb2NhdGlvbkRhdGUpO1xuICBjb25zdCBkYXlOYW1lID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xuXG4gIHJldHVybiBkYXlOYW1lO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIC8vIHdhaXQgYmVjYXVzZSBnZXRUaW1lWm9uZSgpIGNvbnRhaW5zIGFzeW5jIG9wZXJhdGlvbnNcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSB0b2RheS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICB0aW1lWm9uZTogY3VycmVudFRpbWVab25lLFxuICB9KTtcblxuICBjb25zdCBkYXRlQW5kVGltZUFyciA9IGRhdGVBbmRUaW1lLnNwbGl0KFwiLFwiKTtcbiAgY29uc3QgZnVsbFRpbWUgPSBkYXRlQW5kVGltZUFyclsxXS5zcGxpdChcIjpcIik7XG4gIGNvbnN0IHRpbWUgPSBgJHtmdWxsVGltZVswXX06JHtmdWxsVGltZVsxXX1gO1xuICBjb25zdCBwbU9yYW0gPSBmdWxsVGltZVsyXS5zbGljZSgtMik7XG5cbiAgcmV0dXJuIHsgdGltZSwgcG1PcmFtIH07XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCkge1xuICByZXR1cm4gZm9yZWNhc3RJbmZvLmN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRUZW1wKCkge1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGdldEN1cnJlbnRXZWF0aGVyKCk7XG4gIGNvbnN0IHRlbXBGID0gd2VhdGhlckluZm8udGVtcF9mO1xuICBjb25zdCB0ZW1wQyA9IHdlYXRoZXJJbmZvLnRlbXBfYztcblxuICByZXR1cm4gaXNDZWxzaXVzID8gdGVtcEMgOiB0ZW1wRjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGVtcFNjYWxlKCkge1xuICBpc0NlbHNpdXMgPSAhaXNDZWxzaXVzO1xufVxuXG5mdW5jdGlvbiBnZXRUZW1wU2NhbGUoKSB7XG4gIHJldHVybiBpc0NlbHNpdXM7XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJDb25kaXRpb24oKSB7XG4gIGNvbnN0IHdlYXRoZXIgPSBnZXRDdXJyZW50V2VhdGhlcigpO1xuICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gd2VhdGhlci5jb25kaXRpb24udGV4dDtcblxuICByZXR1cm4gd2VhdGhlckNvbmRpdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckNvbmRpdGlvbkljb24oKSB7XG4gIGNvbnN0IHdlYXRoZXIgPSBnZXRDdXJyZW50V2VhdGhlcigpO1xuICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uSWNvbiA9IHdlYXRoZXIuY29uZGl0aW9uLmljb247XG5cbiAgcmV0dXJuIHdlYXRoZXJDb25kaXRpb25JY29uO1xufVxuXG5mdW5jdGlvbiBnZXRUZW1wRmVlbCgpIHtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBnZXRDdXJyZW50V2VhdGhlcigpO1xuICBjb25zdCBmZWVsc0xpa2VDID0gd2VhdGhlckluZm8uZmVlbHNsaWtlX2M7XG4gIGNvbnN0IGZlZWxzTGlrZUYgPSB3ZWF0aGVySW5mby5mZWVsc2xpa2VfZjtcblxuICByZXR1cm4gaXNDZWxzaXVzID8gZmVlbHNMaWtlQyA6IGZlZWxzTGlrZUY7XG59XG5cbmZ1bmN0aW9uIGdldEh1bWlkaXR5KCkge1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGdldEN1cnJlbnRXZWF0aGVyKCk7XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJJbmZvO1xuXG4gIHJldHVybiBodW1pZGl0eTtcbn1cblxuZnVuY3Rpb24gZ2V0RnV0dXJlV2VhdGhlcigpIHtcbiAgcmV0dXJuIGZvcmVjYXN0SW5mby5mb3JlY2FzdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoTG9jYXRpb25zKGlucHV0KSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9JHtLRVl9JnE9JHtpbnB1dH1gO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICBjb25zdCBsb2NhdGlvbnNKc29uID0gZGF0YS5qc29uKCk7XG5cbiAgcmV0dXJuIGxvY2F0aW9uc0pzb247XG59XG5cbmV4cG9ydCB7XG4gIHNldEZvcmVjYXN0SW5mbyxcbiAgZ2V0VGltZSxcbiAgZ2V0RGF0ZSxcbiAgZ2V0RGF5TmFtZSxcbiAgZ2V0TG9jYXRpb24sXG4gIGdldEN1cnJlbnRUZW1wLFxuICBjaGFuZ2VUZW1wU2NhbGUsXG4gIGdldFRlbXBTY2FsZSxcbiAgZ2V0V2VhdGhlckNvbmRpdGlvbixcbiAgZ2V0V2VhdGhlckNvbmRpdGlvbkljb24sXG4gIGdldFRlbXBGZWVsLFxuICBnZXRIdW1pZGl0eSxcbiAgZ2V0RnV0dXJlV2VhdGhlcixcbiAgc2VhcmNoTG9jYXRpb25zLFxuICBnZXRDdXJyZW50TG9jYXRpb24sXG4gIHNldEN1cnJlbnRMb2NhdGlvbixcbiAgc2V0VGltZVpvbmUsXG59O1xuIiwiaW1wb3J0IHtcbiAgc3RhcnRQcm9ncmFtLFxuICB1cGRhdGVMb2NhdGlvbk9wdGlvbnMsXG4gIHVwZGF0ZVRlbXBTY2FsZSxcbn0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvd2VhdGhlci1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50TG9jYXRpb24gfSBmcm9tIFwiLi4vbW9kZWwvd2VhdGhlci1tb2RlbFwiO1xuaW1wb3J0IHsgY2xlYXJMb2NhdGlvblNlYXJjaElucHV0IH0gZnJvbSBcIi4vd2VhdGhlci12aWV3XCI7XG5cbmZ1bmN0aW9uIGhhbmRsZVdlYXRoZXJFdmVudHMoKSB7XG4gIGNvbnN0IHRlbXBTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcC1zY2FsZVwiKTtcbiAgY29uc3QgbG9jYXRpb25TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uLXNlYXJjaFwiKTtcbiAgY29uc3QgbG9jYXRpb25PcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbi1vcHRpb25zXCIpO1xuXG4gIHRlbXBTY2FsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVwZGF0ZVRlbXBTY2FsZSgpO1xuICB9KTtcblxuICBsb2NhdGlvblNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvY2F0aW9uT3B0aW9uc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjYuNXJlbVwiO1xuICAgICAgdXBkYXRlTG9jYXRpb25PcHRpb25zKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uT3B0aW9uc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGxvY2F0aW9uT3B0aW9uc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBpc0xvY2F0aW9uT3B0aW9uID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9jYXRpb24tb3B0aW9uXCIpO1xuXG4gICAgaWYgKGlzTG9jYXRpb25PcHRpb24pIHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICBzZXRDdXJyZW50TG9jYXRpb24obG9jYXRpb24pXG4gICAgICBzdGFydFByb2dyYW0oKTtcbiAgICAgIGNsZWFyTG9jYXRpb25TZWFyY2hJbnB1dCgpO1xuICAgICAgbG9jYXRpb25PcHRpb25zQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVdlYXRoZXJFdmVudHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuZnVuY3Rpb24gZGlzcGxheVRpbWUoeyB0aW1lLCBwbU9yYW0gfSkge1xuICBjb25zdCB0aW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lXCIpO1xuICB0aW1lQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7dGltZX0gJHtwbU9yYW19YDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURheShkYXkpIHtcbiAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXlcIik7XG4gIGRheUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGRheTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURhdGUoZGF0ZSkge1xuICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuICBkYXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gZGF0ZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNpdHkoY2l0eSkge1xuICBjb25zdCBjaXR5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpO1xuICBjaXR5Q29udGFpbmVyLnRleHRDb250ZW50ID0gY2l0eTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlZ2lvbihyZWdpb24pIHtcbiAgY29uc3QgcmVnaW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdpb25cIik7XG4gIHJlZ2lvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IHJlZ2lvbjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNvdW50cnkoY291bnRyeSkge1xuICBjb25zdCBjb3VudHJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuICBjb3VudHJ5Q29udGFpbmVyLnRleHRDb250ZW50ID0gY291bnRyeTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRUZW1wKHRlbXApIHtcbiAgY29uc3QgY3VycmVudFRlbXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtdGVtcFwiKTtcbiAgY3VycmVudFRlbXBDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHt0ZW1wfcKwYDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRlbXBTY2FsZShzY2FsZSkge1xuICBjb25zdCB0ZW1wU2NhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXAtc2NhbGVcIik7XG4gIHRlbXBTY2FsZS50ZXh0Q29udGVudCA9IHNjYWxlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1jb25kaXRpb25cIik7XG4gIHdlYXRoZXJDb25kaXRpb24udGV4dENvbnRlbnQgPSBjb25kaXRpb247XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyQ29uZGl0bmlvbkljb24oaWNvbikge1xuICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjd2VhdGhlci1jb25kaXRpb24taWNvblwiLFxuICApO1xuXG4gIHdlYXRoZXJDb25kaXRpb25JY29uLnNyYyA9IGljb247XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUZW1wRmVlbCh0ZW1wKSB7XG4gIGNvbnN0IHRlbXBGZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wLWZlZWxcIik7XG5cbiAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgJHt0ZW1wfcKwYDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUh1bWlkaXR5KGh1bWlkaXR5TGV2ZWwpIHtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkaXR5XCIpO1xuXG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHlMZXZlbH0lYDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZ1dHVyZVdlYXRoZXIoZGF0ZSwgdGVtcCkge1xuICBjb25zdCBmdXR1cmVGb3JlY2FzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2Z1dHVyZS1mb3JlY2FzdC1jb250YWluZXJcIixcbiAgKTtcblxuICBjb25zdCBmdXR1cmVGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZ1dHVyZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZnV0dXJlVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5zdWJzdHJpbmcoMCwgMik7XG4gIGNvbnN0IGRheSA9IGRhdGUuc3Vic3RyaW5nKDMpO1xuXG4gIGZ1dHVyZUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJmdXR1cmUtZm9yZWNhc3QtaXRlbVwiKTtcblxuICBmdXR1cmVEYXRlLmlkID0gXCJmdXR1cmUtZGF0ZVwiO1xuICBmdXR1cmVUZW1wLmlkID0gXCJmdXR1cmUtdGVtcFwiO1xuXG4gIGZ1dHVyZURhdGUudGV4dENvbnRlbnQgPSBgJHttb250aH0vJHtkYXl9YDtcbiAgZnV0dXJlVGVtcC50ZXh0Q29udGVudCA9IGAke3RlbXB9wrBgO1xuXG4gIGZ1dHVyZUZvcmVjYXN0LmFwcGVuZENoaWxkKGZ1dHVyZURhdGUpO1xuICBmdXR1cmVGb3JlY2FzdC5hcHBlbmRDaGlsZChmdXR1cmVUZW1wKTtcblxuICBmdXR1cmVGb3JlY2FzdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZnV0dXJlRm9yZWNhc3QpO1xufVxuXG5mdW5jdGlvbiBjbGVhckZ1dHVyZVdlYXRoZXJDb250KCkge1xuICBjb25zdCBmdXR1cmVGb3JlY2FzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2Z1dHVyZS1mb3JlY2FzdC1jb250YWluZXJcIixcbiAgKTtcbiAgZnV0dXJlRm9yZWNhc3RzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMb2NhdGlvbk9wdGlvbihsb2NhdGlvbikge1xuICBjb25zdCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbi1vcHRpb25zXCIpO1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLW9wdGlvblwiKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb247XG5cbiAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG5mdW5jdGlvbiBjbGVhckxvY2F0aW9uT3B0aW9ucygpIHtcbiAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb24tb3B0aW9uc1wiKTtcblxuICBvcHRpb25zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTG9jYXRpb25TZWFyY2hJbnB1dCgpIHtcbiAgY29uc3QgbG9jYXRpb25TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uLXNlYXJjaFwiKTtcblxuICBsb2NhdGlvblNlYXJjaC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUxvYWRpbmdQYWdlKCkge1xuICBjb25zdCBsb2FkaW5nUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZy1wYWdlXCIpXG4gIFxuICBsb2FkaW5nUGFnZS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn1cblxuZXhwb3J0IHtcbiAgZGlzcGxheVRpbWUsXG4gIGRpc3BsYXlEYXRlLFxuICBkaXNwbGF5RGF5LFxuICBkaXNwbGF5Q2l0eSxcbiAgZGlzcGxheUNvdW50cnksXG4gIGRpc3BsYXlSZWdpb24sXG4gIGRpc3BsYXlDdXJyZW50VGVtcCxcbiAgZGlzcGxheVRlbXBTY2FsZSxcbiAgZGlzcGxheVdlYXRoZXJDb25kaXRpb24sXG4gIGRpc3BsYXlXZWF0aGVyQ29uZGl0bmlvbkljb24sXG4gIGRpc3BsYXlUZW1wRmVlbCxcbiAgZGlzcGxheUh1bWlkaXR5LFxuICBkaXNwbGF5RnV0dXJlV2VhdGhlcixcbiAgY2xlYXJGdXR1cmVXZWF0aGVyQ29udCxcbiAgZGlzcGxheUxvY2F0aW9uT3B0aW9uLFxuICBjbGVhckxvY2F0aW9uT3B0aW9ucyxcbiAgY2xlYXJMb2NhdGlvblNlYXJjaElucHV0LFxuICB0b2dnbGVMb2FkaW5nUGFnZVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgcmVzZXQgZnJvbSBcIi4vQ1NTL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IGdlbmVyYWxTdHlsZSBmcm9tIFwiLi9DU1MvZ2VuZXJhbC1zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgc2V0Q3VycmVudExvY2F0aW9uIH0gZnJvbSBcIi4vc2NyaXB0cy9tb2RlbC93ZWF0aGVyLW1vZGVsXCI7XG5pbXBvcnQge1xuICBzdGFydFByb2dyYW0sXG4gIHNldFRpbWVJbnRlcnZhbHMsXG59IGZyb20gXCIuL3NjcmlwdHMvY29udHJvbGxlci93ZWF0aGVyLWNvbnRyb2xsZXJcIjtcbmltcG9ydCBoYW5kbGVXZWF0aGVyRXZlbnRzIGZyb20gXCIuL3NjcmlwdHMvdmlldy93ZWF0aGVyLWV2ZW50c1wiO1xuXG5jb25zdCBsb2NhbExvY2F0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhdGlvblwiKTtcbmlmIChsb2NhbExvY2F0aW9uID09PSB1bmRlZmluZWQpIHNldEN1cnJlbnRMb2NhdGlvbihcIk5ldyBZb3JrXCIpO1xuXG5zdGFydFByb2dyYW0oKTtcbmhhbmRsZVdlYXRoZXJFdmVudHMoKTtcbnNldFRpbWVJbnRlcnZhbHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==