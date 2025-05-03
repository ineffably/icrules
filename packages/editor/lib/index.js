(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("antd"), require("@ant-design/icons"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "antd", "@ant-design/icons"], factory);
	else if(typeof exports === 'object')
		exports["editor"] = factory(require("react"), require("antd"), require("@ant-design/icons"));
	else
		root["editor"] = factory(root["react"], root["antd"], root["@ant-design/icons"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE__ant_design_icons__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/editorStyle.css":
/*!***********************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/editorStyle.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.rule-group-editor {
  display: flex;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  background-color: #eeeeeeee;
  margin: 2px;
  border: 2px solid #bbb;
  padding: 2px 0;
}

.rules {
  margin: 0px 0px;
  padding: 2px 2px;
  line-height: 22px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
}

.rule-entry {
  margin: 2px 0px;
  padding: 2px 4px;
  line-height: 22px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  height: 22px;
}

.rule-list .editor-wrap {
  display: flex;
  flex-direction: row;
}

.rule-list .addrule {
  margin: 6px 5px 0px 0px;
  white-space: nowrap;
}

.rule-list .remove-group-cell {
  margin: 14px 5px 0px 0px;
}

.rule-entry option {
  font-size: 15px;
}

.rule-entry option {
  height: 22px;
  padding: 0 5px;
}

.rule-result {
  width: 15px;
  text-align: center;
  vertical-align: middle;
  margin: 4px 7px 0 8px;
  line-height: 22px;
  font-size: 17px;
}

.check-mark {
  width: 15px;
  text-align: center;
  vertical-align: middle;
  margin: 1px 8px 0 0px;
  font-size: 20px;
}

.check-mark .pass, .rule-result .pass {
  font-family: "Segoe UI Symbol";
  color: green;
}

.check-mark .fail, .rule-result .fail {
  font-family: "Segoe UI Symbol";
  color: darkred;
}

.rule-entry .auto-selection {
  position: absolute;
  z-index: 2;
  background-color: #eeeeeeee;
}

.rule-list {
  display: flex;
  flex-direction: column;
}

.rule-list .rule-row {
  display: flex;
  flex-direction: row;
}

.rule-list .edit-rule-buttons {
  margin: 5px 5px 0px 0px;
}

.rule-list .edit-group-buttons {
  margin: 5px 5px 0px 0px;
}

.rule-entry select,
.rule-entry input {
  font-size: 14px;
  border: 0;
  line-height: 24px;
  height: 22px;
  padding: 2px 4px;
}

.rule-entry select {
  line-height: 24px;
  height: 26px;
}

.rule-entry select:focus,
.rule-entry input:focus {
  outline: none;
}

.rule-editor {
  display: flex;
  flex-direction: row;
  background-color: #eeeeeeee;
}

.facts-status {
  padding: 2px; 
  border: 1px solid #333;
}

button.add-group, button.remove-group {
  font-family: "Segoe UI Symbol";
  vertical-align: middle;
  line-height: 19px;
  margin: 0px 2px;
}

`, "",{"version":3,"sources":["webpack://./src/editorStyle.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,kMAAkM;EAClM,eAAe;EACf,2BAA2B;EAC3B,WAAW;EACX,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,eAAe;EACf,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;AACjB","sourcesContent":[".rule-group-editor {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  font-size: 14px;\r\n  background-color: #eeeeeeee;\r\n  margin: 2px;\r\n  border: 2px solid #bbb;\r\n  padding: 2px 0;\r\n}\r\n\r\n.rules {\r\n  margin: 0px 0px;\r\n  padding: 2px 2px;\r\n  line-height: 22px;\r\n  border-radius: 4px;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.rule-entry {\r\n  margin: 2px 0px;\r\n  padding: 2px 4px;\r\n  line-height: 22px;\r\n  border-radius: 4px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 22px;\r\n}\r\n\r\n.rule-list .editor-wrap {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.rule-list .addrule {\r\n  margin: 6px 5px 0px 0px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.rule-list .remove-group-cell {\r\n  margin: 14px 5px 0px 0px;\r\n}\r\n\r\n.rule-entry option {\r\n  font-size: 15px;\r\n}\r\n\r\n.rule-entry option {\r\n  height: 22px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.rule-result {\r\n  width: 15px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  margin: 4px 7px 0 8px;\r\n  line-height: 22px;\r\n  font-size: 17px;\r\n}\r\n\r\n.check-mark {\r\n  width: 15px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  margin: 1px 8px 0 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n.check-mark .pass, .rule-result .pass {\r\n  font-family: \"Segoe UI Symbol\";\r\n  color: green;\r\n}\r\n\r\n.check-mark .fail, .rule-result .fail {\r\n  font-family: \"Segoe UI Symbol\";\r\n  color: darkred;\r\n}\r\n\r\n.rule-entry .auto-selection {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: #eeeeeeee;\r\n}\r\n\r\n.rule-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.rule-list .rule-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.rule-list .edit-rule-buttons {\r\n  margin: 5px 5px 0px 0px;\r\n}\r\n\r\n.rule-list .edit-group-buttons {\r\n  margin: 5px 5px 0px 0px;\r\n}\r\n\r\n.rule-entry select,\r\n.rule-entry input {\r\n  font-size: 14px;\r\n  border: 0;\r\n  line-height: 24px;\r\n  height: 22px;\r\n  padding: 2px 4px;\r\n}\r\n\r\n.rule-entry select {\r\n  line-height: 24px;\r\n  height: 26px;\r\n}\r\n\r\n.rule-entry select:focus,\r\n.rule-entry input:focus {\r\n  outline: none;\r\n}\r\n\r\n.rule-editor {\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #eeeeeeee;\r\n}\r\n\r\n.facts-status {\r\n  padding: 2px; \r\n  border: 1px solid #333;\r\n}\r\n\r\nbutton.add-group, button.remove-group {\r\n  font-family: \"Segoe UI Symbol\";\r\n  vertical-align: middle;\r\n  line-height: 19px;\r\n  margin: 0px 2px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../../node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "../../node_modules/react/jsx-runtime.js":
/*!***********************************************!*\
  !*** ../../node_modules/react/jsx-runtime.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "../../node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../core/lib/index.js":
/*!****************************!*\
  !*** ../core/lib/index.js ***!
  \****************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processRules = exports.validateRule = exports.processVerbose = exports.verbosePlugin = exports.processGroup = exports.processRuleOrGroup = exports.internalOperators = exports.processResult = exports.flattenKeys = exports.isGroup = exports.internalOperatorValues = void 0;
exports.internalOperatorValues = ['eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'has', 'nhas', 'in', 'nit'];
const defaultDelimiter = '.';
function isGroup(testRule = {}) {
    const { all, any } = testRule;
    if (all || any)
        return true;
    return false;
}
exports.isGroup = isGroup;
function flattenKeys(obj, prefix = '', delimiter = '.') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
            return { ...acc, ...flattenKeys(value, `${prefix}${key}${delimiter}`) };
        }
        return { ...acc, [`${prefix}${key}`]: value };
    }, {});
}
exports.flattenKeys = flattenKeys;
const processResult = ({ pass, facts, rule, group, plugins = [] }) => (plugins.reduce((pluginResult, plugin) => ({ ...pluginResult, ...(plugin({ pass, facts, rule, group }) || {}) }), { pass }));
exports.processResult = processResult;
const in_nit = (operator) => ({ value, term }) => {
    if (Array.isArray(term) || ['string', 'object'].includes(typeof term)) {
        const pass = term.includes(value);
        return operator === 'in' ? pass : !pass;
    }
    return false;
};
const has_nhas = (operator) => ({ value, term }) => {
    if (['number', 'bigint', 'symbol', 'undefined'].includes(typeof value))
        return false;
    const pass = value.includes(term);
    return (operator === 'has') ? pass : !pass;
};
exports.internalOperators = {
    eq: ({ value, term }) => value === term,
    neq: ({ value, term }) => value !== term,
    gt: ({ value, term }) => value > term,
    gte: ({ value, term }) => value >= term,
    lt: ({ value, term }) => value < term,
    lte: ({ value, term }) => value <= term,
    in: in_nit('in'),
    nit: in_nit('nit'),
    has: has_nhas('has'),
    nhas: has_nhas('nhas')
};
function processRuleOrGroup(facts = {}, rule, options = {}) {
    const { plugins = [], operators = {} } = options;
    if (isGroup(rule))
        return processGroup(facts, rule, { plugins });
    const [subject, op, term] = rule;
    if (subject === null || subject === undefined || !op) {
        throw new Error(`Invalid Rule\n${JSON.stringify(rule, null, 2)}`);
    }
    const ruleResult = { pass: false };
    const value = facts?.[subject];
    const valueType = typeof value;
    const termIsObject = typeof term == 'object';
    const termIsRule = termIsObject && isGroup(term);
    const factQuery = {
        value,
        type: valueType,
        queryFields: null
    };
    if (subject.indexOf(defaultDelimiter) > 0) {
        const flatFacts = flattenKeys(facts);
        const queryValue = flatFacts[subject];
        const objType = typeof queryValue;
        if (queryValue) {
            factQuery.value = queryValue;
            factQuery.type = Array.isArray(queryValue) ? 'array' : objType;
        }
    }
    if (termIsRule) {
    }
    const isNumeric = factQuery.type === 'bigint' || factQuery.type === 'number';
    const termValue = isNumeric ? parseInt(term, 10) : term;
    const factValue = factQuery.value;
    if (exports.internalOperators[op]) {
        ruleResult.pass = exports.internalOperators[op]({ value: factValue, term: termValue });
    }
    if (operators[op]) {
        ruleResult.pass = operators[op]({ value: factValue, term: termValue });
    }
    return (0, exports.processResult)({
        ...ruleResult, rule, facts, plugins
    });
}
exports.processRuleOrGroup = processRuleOrGroup;
function processGroup(facts = {}, ruleGroup = {}, options = {}) {
    const { all, any } = ruleGroup;
    const { plugins = [] } = options;
    const action = rule => processRuleOrGroup(facts, rule, options);
    if (all) {
        const groupResult = all.map(action);
        const pass = groupResult.every(r => r.pass);
        return (0, exports.processResult)({ pass, rule: ruleGroup, facts, plugins, group: { all: groupResult, pass } });
    }
    if (any) {
        const groupResult = any.map(action);
        const pass = groupResult.some(r => r.pass);
        return (0, exports.processResult)({ pass, rule: ruleGroup, facts, plugins, group: { any: groupResult, pass } });
    }
    throw new Error(`Invalid RuleGroup\n${JSON.stringify(ruleGroup, null, 2)}`);
}
exports.processGroup = processGroup;
const verbosePlugin = ({ pass, rule, group }) => ({ pass, rule, group });
exports.verbosePlugin = verbosePlugin;
const processVerbose = (facts = {}, ruleGroup, plugins = []) => (processGroup(facts, ruleGroup, { plugins: [exports.verbosePlugin, ...plugins] }));
exports.processVerbose = processVerbose;
function validateRule(ruleGroup = {}) {
    const isValid = false;
    if (!ruleGroup)
        return ({
            isValid,
            message: 'No Rule Group Found'
        });
    const { all, any } = ruleGroup;
    const validateRuleSet = (rules) => {
        if (rules.length === 0)
            return ({
                isValid,
                message: 'No Rule Group Found'
            });
        for (let ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
            const ruleGroup = rules[ruleIndex];
            if (ruleGroup?.all || ruleGroup?.any) {
                return validateRule(ruleGroup);
            }
            const rule = ruleGroup;
            if (!Array.isArray(rule) || rule.length < 2)
                return ({
                    isValid,
                    message: 'No Rule Group Found'
                });
            const [field, op] = rule;
            if (!field || !op)
                return ({
                    isValid,
                    message: 'Invalid Rule'
                });
            if (!exports.internalOperatorValues.includes(op))
                return ({
                    isValid,
                    message: 'Invalid Operator'
                });
        }
        return {
            isValid: true
        };
    };
    if (all || any) {
        return validateRuleSet(all || any);
    }
    return ({
        isValid,
        message: 'No Quantifiers (all|any) Found'
    });
}
exports.validateRule = validateRule;
exports.processRules = processGroup;
exports["default"] = exports.processRules;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __nested_webpack_exports__);
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvcmUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb3JlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb3JlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNvcmVcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IHR5cGUgU3ViamVjdCA9IHN0cmluZztcclxuZXhwb3J0IHR5cGUgVGVybSA9IGFueTtcclxuZXhwb3J0IHR5cGUgUnVsZSA9IFtTdWJqZWN0LCBPcGVyYXRvciwgVGVybV07XHJcbmV4cG9ydCB0eXBlIFF1YW50aWZpZXJzID0gJ2FsbCcgfCAnYW55JztcclxuZXhwb3J0IHR5cGUgT3BlcmF0b3IgPSAnZXEnIHwgJ25lcScgfCAnZ3QnIHwgJ2x0JyB8ICdndGUnIHwgJ2x0ZScgfCAnaGFzJyB8ICduaGFzJyB8ICdpbicgfCAnbml0JyB8IHN0cmluZztcclxuZXhwb3J0IHR5cGUgUnVsZXMgPSAoUnVsZSB8IFJ1bGVHcm91cClbXTtcclxuZXhwb3J0IHR5cGUgUnVsZUdyb3VwID0geyBhbGw/OiBSdWxlcywgYW55PzogUnVsZXMgfTtcclxuZXhwb3J0IHR5cGUgRmFjdHMgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgUmVjb3JkPHN0cmluZywgYW55PltdO1xyXG5leHBvcnQgdHlwZSBSZXN1bHRQbHVnaW4gPSAoYXJnczogUGx1Z2luQXJncykgPT4gUHJvY2Vzc1Jlc3VsdDtcclxuZXhwb3J0IHR5cGUgT3BlcmF0b3JQbHVnaW4gPSBSZWNvcmQ8c3RyaW5nLCAoYXJnczogT3BlcmF0b3JGdW5jQXJncykgPT4gYm9vbGVhbj47XHJcbmV4cG9ydCB0eXBlIE9wZXJhdG9yRnVuY0FyZ3MgPSB7XHJcbiAgdmFsdWU6IGFueTtcclxuICB0ZXJtOiBhbnk7XHJcbn1cclxuZXhwb3J0IHR5cGUgUGx1Z2luQXJncyA9IHtcclxuICBwYXNzOiBib29sZWFuO1xyXG4gIHJ1bGU6IFJ1bGUgfCBSdWxlR3JvdXA7XHJcbiAgZmFjdHM/OiBGYWN0cztcclxuICBncm91cD86IGFueTtcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzQXJncyBleHRlbmRzIFBsdWdpbkFyZ3MgeyBwbHVnaW5zOiBSZXN1bHRQbHVnaW5bXSB9XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc1Jlc3VsdCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4geyBwYXNzOiBib29sZWFuIH1cclxuZXhwb3J0IGludGVyZmFjZSBSdWxlRXZhbHVhdGlvbiB7IGlzVmFsaWQ6IGJvb2xlYW47IG1lc3NhZ2U/OiBzdHJpbmc7IH1cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcclxuICBwbHVnaW5zPzogUmVzdWx0UGx1Z2luW107XHJcbiAgb3BlcmF0b3JzPzogT3BlcmF0b3JQbHVnaW47XHJcbn1cclxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gJ3N0cmluZycgfCAnbnVtYmVyJyB8ICdiaWdpbnQnIHwgJ2Jvb2xlYW4nIHwgJ3N5bWJvbCcgfCAndW5kZWZpbmVkJyB8ICdvYmplY3QnIHwgJ2Z1bmN0aW9uJyB8ICdhcnJheSc7XHJcbmV4cG9ydCBjb25zdCBpbnRlcm5hbE9wZXJhdG9yVmFsdWVzOiBPcGVyYXRvcltdID0gWydlcScsICduZXEnLCAnZ3QnLCAnbHQnLCAnZ3RlJywgJ2x0ZScsICdoYXMnLCAnbmhhcycsICdpbicsICduaXQnXTtcclxuXHJcbmNvbnN0IGRlZmF1bHREZWxpbWl0ZXIgPSAnLic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNHcm91cCh0ZXN0UnVsZTogUnVsZSB8IFJ1bGVHcm91cCA9IHt9KTogYm9vbGVhbiB7XHJcbiAgY29uc3QgeyBhbGwsIGFueSB9ID0gdGVzdFJ1bGUgYXMgUnVsZUdyb3VwO1xyXG4gIGlmIChhbGwgfHwgYW55KSByZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuS2V5cyhvYmo6IGFueSwgcHJlZml4ID0gJycsIGRlbGltaXRlciA9ICcuJyk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xyXG4gIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4geyAuLi5hY2MsIC4uLmZsYXR0ZW5LZXlzKHZhbHVlLCBgJHtwcmVmaXh9JHtrZXl9JHtkZWxpbWl0ZXJ9YCkgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLmFjYywgW2Ake3ByZWZpeH0ke2tleX1gXTogdmFsdWUgfTtcclxuICB9LCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NSZXN1bHQgPSAoeyBwYXNzLCBmYWN0cywgcnVsZSwgZ3JvdXAsIHBsdWdpbnMgPSBbXSBhcyBSZXN1bHRQbHVnaW5bXSB9OiBQcm9jZXNzQXJncyk6IFByb2Nlc3NSZXN1bHQgPT4gKFxyXG4gIHBsdWdpbnMucmVkdWNlKChwbHVnaW5SZXN1bHQsIHBsdWdpbikgPT4gKHsgLi4ucGx1Z2luUmVzdWx0LCAuLi4ocGx1Z2luKHsgcGFzcywgZmFjdHMsIHJ1bGUsIGdyb3VwIH0pIHx8IHt9KSB9KSwgeyBwYXNzIH0pXHJcbilcclxuXHJcbmNvbnN0IGluX25pdCA9IChvcGVyYXRvcjogT3BlcmF0b3IpID0+ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh0ZXJtKSB8fCBbJ3N0cmluZycsICdvYmplY3QnXS5pbmNsdWRlcyh0eXBlb2YgdGVybSkpIHtcclxuICAgIGNvbnN0IHBhc3MgPSB0ZXJtLmluY2x1ZGVzKHZhbHVlKTtcclxuICAgIHJldHVybiBvcGVyYXRvciA9PT0gJ2luJyA/IHBhc3MgOiAhcGFzcztcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBoYXNfbmhhcyA9IChvcGVyYXRvcjogT3BlcmF0b3IpID0+ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHtcclxuICBpZiAoWydudW1iZXInLCAnYmlnaW50JywgJ3N5bWJvbCcsICd1bmRlZmluZWQnXS5pbmNsdWRlcyh0eXBlb2YgdmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3QgcGFzcyA9IHZhbHVlLmluY2x1ZGVzKHRlcm0pO1xyXG4gIHJldHVybiAob3BlcmF0b3IgPT09ICdoYXMnKSA/IHBhc3MgOiAhcGFzcztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGludGVybmFsT3BlcmF0b3JzID0ge1xyXG4gIGVxOiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA9PT0gdGVybSxcclxuICBuZXE6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlICE9PSB0ZXJtLFxyXG4gIGd0OiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA+IHRlcm0sXHJcbiAgZ3RlOiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA+PSB0ZXJtLFxyXG4gIGx0OiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA8IHRlcm0sXHJcbiAgbHRlOiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA8PSB0ZXJtLFxyXG4gIGluOiBpbl9uaXQoJ2luJyksXHJcbiAgbml0OiBpbl9uaXQoJ25pdCcpLFxyXG4gIGhhczogaGFzX25oYXMoJ2hhcycpLFxyXG4gIG5oYXM6IGhhc19uaGFzKCduaGFzJylcclxufSBhcyBPcGVyYXRvclBsdWdpbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUnVsZU9yR3JvdXAoZmFjdHM6IEZhY3RzID0ge30sIHJ1bGU6IFJ1bGUgfCBSdWxlR3JvdXAsIG9wdGlvbnM6IE9wdGlvbnMgPSB7fSk6IFByb2Nlc3NSZXN1bHQge1xyXG4gIGNvbnN0IHsgcGx1Z2lucyA9IFtdLCBvcGVyYXRvcnMgPSB7fSB9ID0gb3B0aW9ucztcclxuICBpZiAoaXNHcm91cChydWxlKSkgcmV0dXJuIHByb2Nlc3NHcm91cChmYWN0cywgcnVsZSBhcyBSdWxlR3JvdXAsIHsgcGx1Z2lucyB9KTtcclxuXHJcbiAgY29uc3QgW3N1YmplY3QsIG9wLCB0ZXJtXSA9IHJ1bGUgYXMgUnVsZTtcclxuICBpZiAoc3ViamVjdCA9PT0gbnVsbCB8fCBzdWJqZWN0ID09PSB1bmRlZmluZWQgfHwgIW9wKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgUnVsZVxcbiR7SlNPTi5zdHJpbmdpZnkocnVsZSwgbnVsbCwgMil9YCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBydWxlUmVzdWx0ID0geyBwYXNzOiBmYWxzZSB9IGFzIFBsdWdpbkFyZ3M7XHJcbiAgY29uc3QgdmFsdWUgPSBmYWN0cz8uW3N1YmplY3RdO1xyXG4gIGNvbnN0IHZhbHVlVHlwZSA9IHR5cGVvZiB2YWx1ZSBhcyBWYWx1ZVR5cGU7XHJcbiAgY29uc3QgdGVybUlzT2JqZWN0ID0gdHlwZW9mIHRlcm0gPT0gJ29iamVjdCc7XHJcbiAgY29uc3QgdGVybUlzUnVsZSA9IHRlcm1Jc09iamVjdCAmJiBpc0dyb3VwKHRlcm0pO1xyXG4gIGNvbnN0IGZhY3RRdWVyeSA9IHtcclxuICAgIHZhbHVlLFxyXG4gICAgdHlwZTogdmFsdWVUeXBlLFxyXG4gICAgcXVlcnlGaWVsZHM6IG51bGxcclxuICB9XHJcblxyXG4gIC8vIGlmIGZpZWxkcyBjb250YWluIGRvdCByZWZzLCBsZXQncyBzZWUgaWYgdGhlcmUncyBhbiBvYmplY3QgdG8gcXVlcnlcclxuICBpZiAoc3ViamVjdC5pbmRleE9mKGRlZmF1bHREZWxpbWl0ZXIpID4gMCkge1xyXG4gICAgY29uc3QgZmxhdEZhY3RzID0gZmxhdHRlbktleXMoZmFjdHMpO1xyXG4gICAgY29uc3QgcXVlcnlWYWx1ZSA9IGZsYXRGYWN0c1tzdWJqZWN0XTtcclxuICAgIGNvbnN0IG9ialR5cGUgPSB0eXBlb2YgcXVlcnlWYWx1ZTtcclxuICAgIGlmIChxdWVyeVZhbHVlKSB7XHJcbiAgICAgIGZhY3RRdWVyeS52YWx1ZSA9IHF1ZXJ5VmFsdWU7XHJcbiAgICAgIGZhY3RRdWVyeS50eXBlID0gQXJyYXkuaXNBcnJheShxdWVyeVZhbHVlKSA/ICdhcnJheScgOiBvYmpUeXBlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHRlcm1Jc1J1bGUpIHtcclxuICAgIC8vIFRPRE86IGltcGxlbWVudCBuZXN0ZWQgcnVsZSBwcm9jZXNzaW5nIGFnYWluc3QgZmFjdCBsZWF2ZXNcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzTnVtZXJpYyA9IGZhY3RRdWVyeS50eXBlID09PSAnYmlnaW50JyB8fCBmYWN0UXVlcnkudHlwZSA9PT0gJ251bWJlcic7XHJcbiAgY29uc3QgdGVybVZhbHVlID0gaXNOdW1lcmljID8gcGFyc2VJbnQodGVybSwgMTApIDogdGVybTtcclxuICBjb25zdCBmYWN0VmFsdWUgPSBmYWN0UXVlcnkudmFsdWU7XHJcblxyXG4gIGlmIChpbnRlcm5hbE9wZXJhdG9yc1tvcF0pIHtcclxuICAgIHJ1bGVSZXN1bHQucGFzcyA9IGludGVybmFsT3BlcmF0b3JzW29wXSh7IHZhbHVlOiBmYWN0VmFsdWUsIHRlcm06IHRlcm1WYWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8vIGV2YWx1YXRlIHVzZXJzIG9wZXJhdG9yczsgd2hpY2ggY2FuIG92ZXJyaWRlIGludGVybmFsIG9wZXJhdG9ycyBcclxuICBpZiAob3BlcmF0b3JzW29wXSkge1xyXG4gICAgcnVsZVJlc3VsdC5wYXNzID0gb3BlcmF0b3JzW29wXSh7IHZhbHVlOiBmYWN0VmFsdWUsIHRlcm06IHRlcm1WYWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwcm9jZXNzUmVzdWx0KHtcclxuICAgIC4uLnJ1bGVSZXN1bHQsIHJ1bGUsIGZhY3RzLCBwbHVnaW5zXHJcbiAgfSBhcyBQcm9jZXNzQXJncyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogSGVyZSBpcyBzYW1wbGUgb2Ygd2hhdCBjb25zdHJ1Y3RpbmcgYSBydWxlIG1hbnVhbGx5IGFnYWluc3QgYSBzbWFsbCBzZXQgb2YgZmFjdHMgd291bGQgbG9vayBsaWtlIGluIGphdmFzY3JpcHRcclxuICogXHJcbiAqIGBgYHRzXHJcbiAqICAgaW1wb3J0IHsgcHJvY2Vzc1J1bGVzIH0gZnJvbSAnQGljcnVsZXMvY29yZSc7XHJcbiAqIFxyXG4gKiAgIGNvbnN0IGZhY3RzID0geyBcclxuICogICAgIG1hcmtldDogJ2VuLVVTJywgXHJcbiAqICAgICBjb2xvcjogJ2JsdWUnLCBcclxuICogICAgIGRpYW1ldGVyOiAxMCBcclxuICogICB9O1xyXG4gKiBcclxuICogICBjb25zdCBydWxlcyA9IHsgXHJcbiAqICAgICBhbnk6IFtcclxuICogICAgICAgWydtYXJrZXQnLCAnZXEnLCAnZW4tVVMnXSwgXHJcbiAqICAgICAgIFsnZGlhbWV0ZXInLCAnZ3QnLCA1XVxyXG4gKiAgICAgXSBcclxuICogICB9O1xyXG4gKiBcclxuICogICBjb25zdCByZXN1bHQgPSBwcm9jZXNzUnVsZXMoZmFjdHMsIHJ1bGVzKTtcclxuICogICBcclxuICogICBpZihyZXN1bHRzLnBhc3Mpe1xyXG4gKiAgICAgLy8gZG8gdGhlIHRoaW5nIHRoYXQgbmVlZHMgZG9uZVxyXG4gKiAgIH1cclxuICogIFxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzR3JvdXAoZmFjdHM6IEZhY3RzID0ge30sIHJ1bGVHcm91cDogUnVsZUdyb3VwID0ge30sIG9wdGlvbnM6IE9wdGlvbnMgPSB7fSk6IFByb2Nlc3NSZXN1bHQge1xyXG4gIGNvbnN0IHsgYWxsLCBhbnkgfSA9IHJ1bGVHcm91cDtcclxuICBjb25zdCB7IHBsdWdpbnMgPSBbXSB9ID0gb3B0aW9ucztcclxuICBjb25zdCBhY3Rpb24gPSBydWxlID0+IHByb2Nlc3NSdWxlT3JHcm91cChmYWN0cywgcnVsZSwgb3B0aW9ucyk7XHJcblxyXG4gIGlmIChhbGwpIHtcclxuICAgIGNvbnN0IGdyb3VwUmVzdWx0ID0gYWxsLm1hcChhY3Rpb24pO1xyXG4gICAgY29uc3QgcGFzcyA9IGdyb3VwUmVzdWx0LmV2ZXJ5KHIgPT4gci5wYXNzKTtcclxuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHsgcGFzcywgcnVsZTogcnVsZUdyb3VwLCBmYWN0cywgcGx1Z2lucywgZ3JvdXA6IHsgYWxsOiBncm91cFJlc3VsdCwgcGFzcyB9IH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGFueSkge1xyXG4gICAgY29uc3QgZ3JvdXBSZXN1bHQgPSBhbnkubWFwKGFjdGlvbik7XHJcbiAgICBjb25zdCBwYXNzID0gZ3JvdXBSZXN1bHQuc29tZShyID0+IHIucGFzcyk7XHJcbiAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh7IHBhc3MsIHJ1bGU6IHJ1bGVHcm91cCwgZmFjdHMsIHBsdWdpbnMsIGdyb3VwOiB7IGFueTogZ3JvdXBSZXN1bHQsIHBhc3MgfSB9KTtcclxuICB9XHJcblxyXG4gIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBSdWxlR3JvdXBcXG4ke0pTT04uc3RyaW5naWZ5KHJ1bGVHcm91cCwgbnVsbCwgMil9YCwpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmVyYm9zZVBsdWdpbiA9ICh7IHBhc3MsIHJ1bGUsIGdyb3VwIH06IFBsdWdpbkFyZ3MpID0+ICh7IHBhc3MsIHJ1bGUsIGdyb3VwIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NWZXJib3NlID0gKGZhY3RzOiBGYWN0cyA9IHt9LCBydWxlR3JvdXA6IFJ1bGVHcm91cCwgcGx1Z2luczogUmVzdWx0UGx1Z2luW10gPSBbXSkgPT4gKFxyXG4gIHByb2Nlc3NHcm91cChmYWN0cywgcnVsZUdyb3VwLCB7IHBsdWdpbnM6IFt2ZXJib3NlUGx1Z2luLCAuLi5wbHVnaW5zXSB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUnVsZShydWxlR3JvdXAgPSB7fSBhcyBSdWxlR3JvdXApOiBSdWxlRXZhbHVhdGlvbiB7XHJcbiAgY29uc3QgaXNWYWxpZCA9IGZhbHNlO1xyXG4gIGlmICghcnVsZUdyb3VwKSByZXR1cm4gKHtcclxuICAgIGlzVmFsaWQsXHJcbiAgICBtZXNzYWdlOiAnTm8gUnVsZSBHcm91cCBGb3VuZCdcclxuICB9KTtcclxuICBjb25zdCB7IGFsbCwgYW55IH0gPSBydWxlR3JvdXA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlUnVsZVNldCA9IChydWxlczogUnVsZXMpID0+IHtcclxuICAgIGlmIChydWxlcy5sZW5ndGggPT09IDApIHJldHVybiAoe1xyXG4gICAgICBpc1ZhbGlkLFxyXG4gICAgICBtZXNzYWdlOiAnTm8gUnVsZSBHcm91cCBGb3VuZCdcclxuICAgIH0pO1xyXG4gICAgZm9yIChsZXQgcnVsZUluZGV4ID0gMDsgcnVsZUluZGV4IDwgcnVsZXMubGVuZ3RoOyBydWxlSW5kZXgrKykge1xyXG4gICAgICBjb25zdCBydWxlR3JvdXAgPSBydWxlc1tydWxlSW5kZXhdIGFzIFJ1bGVHcm91cDtcclxuICAgICAgaWYgKHJ1bGVHcm91cD8uYWxsIHx8IHJ1bGVHcm91cD8uYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlUnVsZShydWxlR3JvdXApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBydWxlID0gcnVsZUdyb3VwIGFzIFJ1bGU7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShydWxlKSB8fCBydWxlLmxlbmd0aCA8IDIpIHJldHVybiAoe1xyXG4gICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgbWVzc2FnZTogJ05vIFJ1bGUgR3JvdXAgRm91bmQnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgW2ZpZWxkLCBvcF0gPSBydWxlO1xyXG4gICAgICBpZiAoIWZpZWxkIHx8ICFvcCkgcmV0dXJuICh7XHJcbiAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBSdWxlJ1xyXG4gICAgICB9KVxyXG4gICAgICBpZiAoIWludGVybmFsT3BlcmF0b3JWYWx1ZXMuaW5jbHVkZXMob3ApKSByZXR1cm4gKHtcclxuICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIE9wZXJhdG9yJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzVmFsaWQ6IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoYWxsIHx8IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbGlkYXRlUnVsZVNldChhbGwgfHwgYW55KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoe1xyXG4gICAgaXNWYWxpZCxcclxuICAgIG1lc3NhZ2U6ICdObyBRdWFudGlmaWVycyAoYWxsfGFueSkgRm91bmQnXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbmBgYFxyXG5cclxuYGBgXHJcbiovXHJcbmV4cG9ydCBjb25zdCBwcm9jZXNzUnVsZXMgPSBwcm9jZXNzR3JvdXA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzUnVsZXM7XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvaW5kZXgudHNcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/RuleEditor.tsx":
/*!****************************!*\
  !*** ./src/RuleEditor.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FactsEditor = exports.ICRulesEditor = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
const react_1 = __webpack_require__(/*! react */ "react");
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const core_1 = __webpack_require__(/*! @icrules/core */ "../core/lib/index.js");
__webpack_require__(/*! ./editorStyle.css */ "./src/editorStyle.css");
let lastId = null;
const RuleEditor = ({ facts = {}, rule = ['', 'eq', ''], onUpdate = (rule, index) => { }, index = 0, depth = 0 }) => {
    const [factKeys] = (0, react_1.useState)(Object.keys(facts));
    const [liveRule, setEditRule] = (0, react_1.useState)(rule);
    const [factKey, operator, term] = liveRule;
    const key = `${index}-${depth}`;
    const listId = `${factKeys}-${key}`;
    (0, react_1.useEffect)(() => {
        onUpdate([factKey, operator, term], index);
    }, [factKey, operator, term]);
    const valueId = `value-${key}`;
    const termId = `term-${key}`;
    const result = (0, core_1.processRuleOrGroup)(facts, liveRule);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rule-editor', children: [(0, jsx_runtime_1.jsx)("div", { className: "rule-result", children: result.pass ? (0, jsx_runtime_1.jsx)("span", { className: "pass", children: "\u2713" }) : (0, jsx_runtime_1.jsx)("span", { className: "fail", children: "\u2715" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "rule-entry rule-fact", children: [(0, jsx_runtime_1.jsx)("input", { id: termId, autoComplete: 'on', autoFocus: lastId === termId, type: 'text', list: listId, value: factKey, onChange: ev => {
                            lastId = ev.target.id;
                            setEditRule([ev.target.value, operator, term]);
                        } }), (0, jsx_runtime_1.jsx)("datalist", { id: listId, children: factKeys.map(key => ((0, jsx_runtime_1.jsx)("option", { value: key }))) })] }, 'rule-fact'), (0, jsx_runtime_1.jsx)("div", { className: "rule-entry rule-op", children: (0, jsx_runtime_1.jsx)("select", { value: operator, onChange: ev => setEditRule([factKey, ev.target.value, term]), children: core_1.internalOperatorValues.map(op => (0, jsx_runtime_1.jsx)("option", { value: op, children: _1.opMap[op] })) }) }, 'rule-op'), (0, jsx_runtime_1.jsx)("div", { className: "rule-entry rule-term", children: (0, jsx_runtime_1.jsx)("input", { type: 'text', id: valueId, value: term, autoFocus: lastId === valueId, onChange: ev => {
                        lastId = ev.target.id;
                        setEditRule([factKey, operator, ev.target.value]);
                    } }) }, 'rule-term')] }, key));
};
const RuleGroupEditor = ({ facts = {}, rules = {}, onChange = r => { }, depth = 0, index = 0, showFactsEditor = true }) => {
    const [liveFacts, setLiveFacts] = (0, react_1.useState)(facts);
    const [quantifier, setQuantifier] = (0, react_1.useState)((rules.all ? 'all' : 'any'));
    const [liveRules, setLiveRules] = (0, react_1.useState)(rules);
    const [ruleList, setLiveRuleList] = (0, react_1.useState)([...(liveRules.all || liveRules.any)]);
    const [versboseResult, setVerboseResult] = (0, react_1.useState)({});
    const quantfiers = ['all', 'any'];
    const emptyRule = ['', 'eq', ''];
    const emptyGroup = { all: [emptyRule] };
    const onRuleUpdate = (rule, i) => {
        ruleList[i] = rule;
        onChange({ [quantifier]: [...ruleList] }, i, index);
    };
    const onAddRule = (i = null) => {
        if (i === null) {
            ruleList.push(emptyRule);
        }
        else {
            ruleList.splice(i, 0, emptyRule);
        }
        setLiveRuleList([...ruleList]);
        onChange({ [quantifier]: [...ruleList] }, i, index);
    };
    const addGroup = (i = null) => {
        if (i === null) {
            ruleList.push(emptyGroup);
        }
        else {
            ruleList.splice(i, 0, emptyGroup);
        }
        setLiveRuleList([...ruleList]);
        onChange({ [quantifier]: [...ruleList] }, i, index);
    };
    const onDeleteRule = (i) => {
        ruleList.splice(i, 1);
        setLiveRules({ [quantifier]: [...ruleList] });
        setLiveRuleList([...ruleList]);
        onChange({ [quantifier]: [...ruleList] }, i, index);
    };
    (0, react_1.useEffect)(() => {
        const verboseResults = (0, core_1.processVerbose)(facts, liveRules);
        onChange(liveRules, 0, index);
    }, [JSON.stringify(liveRules)]);
    (0, react_1.useEffect)(() => {
        setLiveRules({ [quantifier]: [...ruleList] });
    }, [JSON.stringify(ruleList)]);
    (0, react_1.useEffect)(() => {
        setLiveRules({ [quantifier]: [...ruleList] });
    }, [quantifier]);
    const isValidRule = (0, core_1.processRuleOrGroup)(facts, liveRules);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rule-group-editor", children: [showFactsEditor && depth === 0 && index === 0 && (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(exports.FactsEditor, { object: liveFacts, onChange: (value, isValid) => {
                        if (isValid) {
                            setLiveFacts(value);
                        }
                    } }) }), (0, jsx_runtime_1.jsxs)("div", { children: [depth === 0 && index === 0 && (0, jsx_runtime_1.jsxs)("div", { className: 'facts-status', children: [(0, jsx_runtime_1.jsxs)("span", { style: { color: isValidRule ? 'green' : 'darkred' }, children: ["Rule is ", isValidRule ? 'valid' : 'invalid', ". "] }), (0, jsx_runtime_1.jsxs)("span", { style: { color: isValidRule?.pass ? 'green' : 'darkred' }, children: ["Rule is ", isValidRule?.pass ? 'passing' : 'failing', ". "] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "rules", children: [(0, jsx_runtime_1.jsxs)("div", { className: "rule-entry quantifier", children: [(0, jsx_runtime_1.jsx)("div", { className: "check-mark", children: isValidRule?.pass ? (0, jsx_runtime_1.jsx)("span", { className: 'pass', children: "\u2611" }) : (0, jsx_runtime_1.jsx)("span", { className: 'fail', children: "\u2612" }) }), (0, jsx_runtime_1.jsx)("select", { value: quantifier, onChange: ev => setQuantifier(ev.target.value), children: quantfiers.map(q => ((0, jsx_runtime_1.jsx)("option", { value: q, children: q }))) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: "add-group", title: 'add a group', onClick: () => addGroup(), children: "\u2795" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "rule-list", children: ruleList.map((ruleEntry, ruleIndex) => Array.isArray(ruleEntry) ?
                                    ((0, jsx_runtime_1.jsxs)("div", { className: "editor-wrap", children: [(0, jsx_runtime_1.jsx)(RuleEditor, { onUpdate: onRuleUpdate, rule: ruleEntry, facts: liveFacts, index: ruleIndex, depth }, `${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`), (0, jsx_runtime_1.jsxs)("div", { className: "addrule", children: [(0, jsx_runtime_1.jsx)("button", { title: 'add a rule', onClick: () => onAddRule(ruleIndex + 1), children: "+" }), ruleIndex > 0 && (0, jsx_runtime_1.jsx)("button", { title: 'remove rule', onClick: () => onDeleteRule(ruleIndex), children: "-" })] })] })) :
                                    ((0, jsx_runtime_1.jsxs)("div", { className: "editor-wrap", children: [(0, jsx_runtime_1.jsx)(RuleGroupEditor, { rules: ruleEntry, facts, index: ruleIndex, depth: (depth + 1), onChange: (ruleGroup, i, parentIndex) => {
                                                    ruleList[ruleIndex] = ruleGroup;
                                                    onChange({ [quantifier]: [...ruleList] }, i, parentIndex);
                                                } }, `${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`), (0, jsx_runtime_1.jsx)("div", { className: "remove-group-cell", children: ruleIndex > 0 && (0, jsx_runtime_1.jsx)("button", { className: 'remove-group', title: 'remove group', onClick: () => onDeleteRule(ruleIndex), children: "\u2796" }) })] }))) })] })] })] }, `group-edit-${index}-${depth}`));
};
const ICRulesEditor = ({ rules = {}, facts = {}, onChange = (r => null), options = { showFactsEditor: true } }) => {
    const [liveRules, setLiveRules] = (0, react_1.useState)(rules);
    const { showFactsEditor } = options;
    const onRuleChange = (latestRules) => {
        onChange(latestRules);
        setLiveRules({ ...latestRules });
    };
    return ((0, jsx_runtime_1.jsx)(RuleGroupEditor, { rules: liveRules, facts, onChange: onRuleChange, showFactsEditor }));
};
exports.ICRulesEditor = ICRulesEditor;
const FactsEditor = ({ object, onChange = () => null }) => {
    const [activeObject, setActiveObject] = (0, react_1.useState)(JSON.stringify(object, null, 2));
    const parsedValue = (0, _1.safeParse)(activeObject);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: 'facts-status', style: { color: parsedValue ? 'green' : 'darkred' }, children: ["Facts are ", parsedValue ? 'valid' : 'invalid'] }), (0, jsx_runtime_1.jsx)("textarea", { title: 'enter your facts here', onChange: ev => {
                    setActiveObject(ev.target.value);
                    onChange(ev.target.value, parsedValue !== false);
                }, style: { width: '300px', height: '300px' }, value: activeObject })] }));
};
exports.FactsEditor = FactsEditor;
exports["default"] = exports.ICRulesEditor;


/***/ }),

/***/ "./src/RuleEditorAntd.tsx":
/*!********************************!*\
  !*** ./src/RuleEditorAntd.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ICRulesEditorAntd = exports.RuleEditorAntd = exports.FactsEditorAntd = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
const core_1 = __webpack_require__(/*! @icrules/core */ "../core/lib/index.js");
const react_1 = __webpack_require__(/*! react */ "react");
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const antd_1 = __webpack_require__(/*! antd */ "antd");
const icons_1 = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
__webpack_require__(/*! ./editorStyle.css */ "./src/editorStyle.css");
let lastId = null;
const FactsEditorAntd = ({ object, onChange = () => null }) => {
    const [activeObject, setActiveObject] = (0, react_1.useState)(JSON.stringify(object, null, 2));
    const parsedValue = (0, _1.safeParse)(activeObject);
    return ((0, jsx_runtime_1.jsx)(antd_1.Card, { style: { width: '350px', margin: '4px' }, hoverable: true, title: (0, jsx_runtime_1.jsxs)("span", { style: { color: (parsedValue ? 'green' : 'darkred') }, children: ["Facts are ", parsedValue ? 'valid' : 'invalid', "."] }), children: (0, jsx_runtime_1.jsx)(antd_1.Input.TextArea, { rows: 25, title: 'enter your facts here', onChange: ev => {
                setActiveObject(ev.target.value);
                onChange(ev.target.value, (0, _1.safeParse)(ev.target.value));
            }, value: activeObject }) }));
};
exports.FactsEditorAntd = FactsEditorAntd;
const RuleEditorAntd = ({ facts = {}, rule = ['', 'eq', ''], onUpdate = (rule, index) => { }, index = 0, depth = 0 }) => {
    const [userSize, setUserSize] = (0, react_1.useState)('middle');
    const [factKeys, setFactKeys] = (0, react_1.useState)(Object.entries((0, core_1.flattenKeys)(facts)));
    const [liveRule, setEditRule] = (0, react_1.useState)(rule);
    const [factKey, operator, term] = liveRule;
    (0, react_1.useEffect)(() => {
        setFactKeys(Object.entries((0, core_1.flattenKeys)(facts)));
    }, [JSON.stringify(facts)]);
    (0, react_1.useEffect)(() => {
        onUpdate([factKey, operator, term], index);
    }, [factKey, operator, term]);
    const key = `${index}-${depth}`;
    const valueId = `value-${key}`;
    const termId = `term-${key}`;
    const result = (0, core_1.processRuleOrGroup)(facts, liveRule);
    return ((0, jsx_runtime_1.jsxs)(antd_1.Space, { direction: 'horizontal', children: [(0, jsx_runtime_1.jsx)(antd_1.Tooltip, { title: `${result.pass ? 'Rule Passed' : 'Rule Failed'} with provided facts`, children: (0, jsx_runtime_1.jsx)(antd_1.Tag, { icon: (0, jsx_runtime_1.jsx)(icons_1.CheckCircleOutlined, {}), color: result.pass ? 'green' : 'red' }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(antd_1.AutoComplete, { style: { width: '200px' }, size: userSize, id: termId, autoFocus: lastId === termId, options: factKeys.map(([key]) => ({ value: key })), value: factKey, onChange: value => {
                        lastId = termId;
                        setEditRule([value.toString(), operator, term]);
                    } }) }, 'rule-fact'), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(antd_1.Tooltip, { title: `${factKey} ${_1.opMap[operator]} ${term}`, children: (0, jsx_runtime_1.jsx)(antd_1.Select, { style: { width: '145px' }, size: userSize, value: operator, onChange: ev => setEditRule([factKey, ev, term]), options: core_1.internalOperatorValues.map(op => ({ label: _1.opMap[op], value: op })) }) }) }, 'rule-op'), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(antd_1.AutoComplete, { style: { width: '200px' }, size: userSize, id: valueId, autoFocus: lastId === valueId, options: factKeys.map(([, value]) => ({ value: value.toString() })), value: term, onChange: value => {
                        lastId = valueId;
                        setEditRule([factKey, operator, value]);
                    } }) }, 'rule-term')] }, key));
};
exports.RuleEditorAntd = RuleEditorAntd;
const RuleGroupEditorAntd = ({ facts = {}, rules = {}, onChange = r => { }, depth = 0, index = 0, showFactsEditor = true, extra = () => null, FactsEditor = exports.FactsEditorAntd }) => {
    const [userSize, setUserSize] = (0, react_1.useState)('middle');
    const [liveFacts, setLiveFacts] = (0, react_1.useState)(facts);
    const [quantifier, setQuantifier] = (0, react_1.useState)((rules.all ? 'all' : 'any'));
    const [liveRules, setLiveRules] = (0, react_1.useState)(rules);
    const [ruleList, setLiveRuleList] = (0, react_1.useState)([...(liveRules.all || liveRules.any)]);
    const [versboseResult, setVerboseResult] = (0, react_1.useState)({});
    const quantfiers = ['all', 'any'];
    const emptyRule = ['', 'eq', ''];
    const emptyGroup = { all: [emptyRule] };
    const onRuleUpdate = (rule, i) => {
        ruleList[i] = rule;
        onChange({ [quantifier]: [...ruleList] }, i, index);
    };
    const onAddRule = (i = null) => {
        if (i === null) {
            ruleList.push(emptyRule);
        }
        else {
            ruleList.splice(i, 0, emptyRule);
        }
        setLiveRuleList([...ruleList]);
        onChange({ [quantifier]: [...ruleList] }, i, index);
    };
    const addGroup = (i = null) => {
        if (i === null) {
            ruleList.push(emptyGroup);
        }
        else {
            ruleList.splice(i, 0, emptyGroup);
        }
        setLiveRuleList([...ruleList]);
        onChange({ [quantifier]: [...ruleList] }, i, index);
    };
    const onDeleteRule = (i) => {
        ruleList.splice(i, 1);
        setLiveRules({ [quantifier]: [...ruleList] });
        setLiveRuleList([...ruleList]);
        onChange({ [quantifier]: [...ruleList] }, i, index);
    };
    (0, react_1.useEffect)(() => {
        const verboseResults = (0, core_1.processVerbose)(facts, liveRules);
        onChange(liveRules, 0, index);
    }, [JSON.stringify(liveRules)]);
    (0, react_1.useEffect)(() => {
        setLiveRules({ [quantifier]: [...ruleList] });
    }, [JSON.stringify(ruleList)]);
    (0, react_1.useEffect)(() => {
        setLiveRules({ [quantifier]: [...ruleList] });
    }, [quantifier]);
    const isValidRule = (0, core_1.processRuleOrGroup)(facts, liveRules);
    return ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'row' }, children: [showFactsEditor && depth === 0 && index === 0 && FactsEditor && ((0, jsx_runtime_1.jsx)(FactsEditor, { object: liveFacts, onChange: (stringValue, parsedValue) => {
                    const isValid = !!parsedValue;
                    if (isValid) {
                        setLiveFacts(parsedValue);
                    }
                } })), (0, jsx_runtime_1.jsx)(antd_1.Card, { style: { marginTop: '4px' }, hoverable: true, title: depth === 0 && index === 0 && (0, jsx_runtime_1.jsxs)(antd_1.Space, { children: [(0, jsx_runtime_1.jsxs)("span", { style: { color: (isValidRule ? 'green' : 'darkred') }, children: ["Rule is ", isValidRule ? 'valid' : 'invalid', "."] }), (0, jsx_runtime_1.jsxs)("span", { style: { color: (isValidRule ? 'green' : 'darkred') }, children: ["Rule is ", isValidRule?.pass ? 'passing' : 'failing', "."] })] }), children: (0, jsx_runtime_1.jsxs)("div", { style: { border: '2px dotted #ccc', padding: '4px' }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(antd_1.Select, { size: userSize, value: quantifier, options: quantfiers.map(q => ({ label: q, value: q })), onChange: ev => setQuantifier(ev), style: { width: '70px' } }), (0, jsx_runtime_1.jsx)(antd_1.Button, { size: userSize, icon: (0, jsx_runtime_1.jsx)(icons_1.PlusCircleOutlined, {}), title: 'add a group', onClick: () => addGroup() }), extra && extra()] }), (0, jsx_runtime_1.jsx)("div", { children: ruleList.map((ruleEntry, ruleIndex) => Array.isArray(ruleEntry) ?
                                ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'row' }, children: [(0, jsx_runtime_1.jsx)(exports.RuleEditorAntd, { onUpdate: onRuleUpdate, rule: ruleEntry, facts: liveFacts, index: ruleIndex, depth }, `${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`), (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { size: userSize, icon: (0, jsx_runtime_1.jsx)(icons_1.PlusCircleOutlined, {}), title: 'add a rule', onClick: () => onAddRule(ruleIndex + 1) }), ruleIndex > 0 && (0, jsx_runtime_1.jsx)(antd_1.Button, { size: userSize, icon: (0, jsx_runtime_1.jsx)(icons_1.MinusCircleOutlined, {}), title: 'remove rule', onClick: () => onDeleteRule(ruleIndex) })] })] })) :
                                ((0, jsx_runtime_1.jsx)(RuleGroupEditorAntd, { extra: (ruleIndex > 0 ? () => ((0, jsx_runtime_1.jsx)(antd_1.Button, { size: userSize, title: 'remove group', onClick: () => onDeleteRule(ruleIndex), icon: (0, jsx_runtime_1.jsx)(icons_1.MinusCircleOutlined, {}) })) : null), rules: ruleEntry,
                                    facts: liveFacts,
                                    index: ruleIndex,
                                    depth: (depth + 1),
                                    onChange: (ruleGroup, i, parentIndex) => {
                                        ruleList[ruleIndex] = ruleGroup;
                                        onChange({ [quantifier]: [...ruleList] }, i, parentIndex);
                                    } }, `${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`))) })] }) })] }, `group-edit-${index}-${depth}`));
};
const ICRulesEditorAntd = ({ rules = {}, facts = {}, onChange = (r => null), options = {
    showFactsEditor: true,
    factsEditor: exports.FactsEditorAntd
} }) => {
    const [liveRules, setLiveRules] = (0, react_1.useState)(rules);
    const { showFactsEditor } = options;
    const onRuleChange = (latestRules) => {
        onChange(latestRules);
        setLiveRules({ ...latestRules });
    };
    return ((0, jsx_runtime_1.jsx)(RuleGroupEditorAntd, { rules: liveRules, facts, onChange: onRuleChange, showFactsEditor, FactsEditor: options.factsEditor }));
};
exports.ICRulesEditorAntd = ICRulesEditorAntd;
exports["default"] = exports.ICRulesEditorAntd;


/***/ }),

/***/ "./src/editorStyle.css":
/*!*****************************!*\
  !*** ./src/editorStyle.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_editorStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./editorStyle.css */ "../../node_modules/css-loader/dist/cjs.js!./src/editorStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_editorStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_editorStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_editorStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_editorStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.opMap = exports.safeParse = exports.flattenKeys = exports.ICRulesEditor = exports.FactsEditorAntd = exports.ICRulesEditorAntd = void 0;
var RuleEditorAntd_1 = __webpack_require__(/*! ./RuleEditorAntd */ "./src/RuleEditorAntd.tsx");
Object.defineProperty(exports, "ICRulesEditorAntd", ({ enumerable: true, get: function () { return RuleEditorAntd_1.ICRulesEditorAntd; } }));
var RuleEditorAntd_2 = __webpack_require__(/*! ./RuleEditorAntd */ "./src/RuleEditorAntd.tsx");
Object.defineProperty(exports, "FactsEditorAntd", ({ enumerable: true, get: function () { return RuleEditorAntd_2.FactsEditorAntd; } }));
const RuleEditor_1 = __webpack_require__(/*! ./RuleEditor */ "./src/RuleEditor.tsx");
Object.defineProperty(exports, "ICRulesEditor", ({ enumerable: true, get: function () { return RuleEditor_1.ICRulesEditor; } }));
exports["default"] = RuleEditor_1.ICRulesEditor;
const flattenKeys = (obj, prefix = '') => {
    let result = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            result = { ...result, ...(0, exports.flattenKeys)(obj[key], `${prefix}${key}.`) };
        }
        else {
            result[`${prefix}${key}`] = obj[key];
        }
    }
    return result;
};
exports.flattenKeys = flattenKeys;
const safeParse = (textJson, showError = false) => {
    try {
        return JSON.parse(textJson);
    }
    catch (e) {
        if (showError) {
            console.error(e);
        }
        return false;
    }
};
exports.safeParse = safeParse;
exports.opMap = {
    eq: 'equals',
    neq: 'not equals',
    gt: '> greater than',
    lt: '< less than',
    lte: '<= less or equal',
    gte: '>= greater or equal',
    has: 'contains',
    nhas: 'not contains',
    in: 'in term',
    nit: 'not in term'
};


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__ant_design_icons__;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyw4Q0FBOEMsb0JBQW9CLDBCQUEwQix5TUFBeU0sc0JBQXNCLGtDQUFrQyxrQkFBa0IsNkJBQTZCLHFCQUFxQixLQUFLLGdCQUFnQixzQkFBc0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixLQUFLLHFCQUFxQixzQkFBc0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixtQkFBbUIsS0FBSyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixLQUFLLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEtBQUssdUNBQXVDLCtCQUErQixLQUFLLDRCQUE0QixzQkFBc0IsS0FBSyw0QkFBNEIsbUJBQW1CLHFCQUFxQixLQUFLLHNCQUFzQixrQkFBa0IseUJBQXlCLDZCQUE2Qiw0QkFBNEIsd0JBQXdCLHNCQUFzQixLQUFLLHFCQUFxQixrQkFBa0IseUJBQXlCLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLEtBQUssK0NBQStDLHVDQUF1QyxtQkFBbUIsS0FBSywrQ0FBK0MsdUNBQXVDLHFCQUFxQixLQUFLLHFDQUFxQyx5QkFBeUIsaUJBQWlCLGtDQUFrQyxLQUFLLG9CQUFvQixvQkFBb0IsNkJBQTZCLEtBQUssOEJBQThCLG9CQUFvQiwwQkFBMEIsS0FBSyx1Q0FBdUMsOEJBQThCLEtBQUssd0NBQXdDLDhCQUE4QixLQUFLLGtEQUFrRCxzQkFBc0IsZ0JBQWdCLHdCQUF3QixtQkFBbUIsdUJBQXVCLEtBQUssNEJBQTRCLHdCQUF3QixtQkFBbUIsS0FBSyw4REFBOEQsb0JBQW9CLEtBQUssc0JBQXNCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLEtBQUssdUJBQXVCLG9CQUFvQiw2QkFBNkIsS0FBSywrQ0FBK0MsdUNBQXVDLDZCQUE2Qix3QkFBd0Isc0JBQXNCLEtBQUssMkJBQTJCO0FBQ3A0SDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNwSjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLG9CQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlHQUFpRyxlQUFlO0FBQ2hIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVIsa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBLHFDQUFxQzs7QUFFckMsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUEsZ0NBQWdDOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFNBQVM7QUFDVCx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDO0FBQ2pDO0FBQ0EsU0FBUztBQUNULDJCQUEyQjtBQUMzQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7O0FBR2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0VBQW9FOztBQUVwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZCxXQUFXLGVBQWU7QUFDMUIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjs7QUFF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Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2VkaXRvci8uL3NyYy9lZGl0b3JTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2VkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2VkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL1J1bGVFZGl0b3IudHN4Iiwid2VicGFjazovL2VkaXRvci8uL3NyYy9SdWxlRWRpdG9yQW50ZC50c3giLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL2VkaXRvclN0eWxlLmNzcz9lNWZlIiwid2VicGFjazovL2VkaXRvci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9lZGl0b3IvZXh0ZXJuYWwgdW1kIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly9lZGl0b3IvZXh0ZXJuYWwgdW1kIFwiYW50ZFwiIiwid2VicGFjazovL2VkaXRvci9leHRlcm5hbCB1bWQgXCJyZWFjdFwiIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcImFudGRcIiwgXCJAYW50LWRlc2lnbi9pY29uc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZWRpdG9yXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJhbnRkXCJdLCByb290W1wiQGFudC1kZXNpZ24vaWNvbnNcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXykgPT4ge1xucmV0dXJuICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucnVsZS1ncm91cC1lZGl0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWVlO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYmI7XHJcbiAgcGFkZGluZzogMnB4IDA7XHJcbn1cclxuXHJcbi5ydWxlcyB7XHJcbiAgbWFyZ2luOiAwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDJweCAycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnJ1bGUtZW50cnkge1xyXG4gIG1hcmdpbjogMnB4IDBweDtcclxuICBwYWRkaW5nOiAycHggNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4ucnVsZS1saXN0IC5lZGl0b3Itd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ucnVsZS1saXN0IC5hZGRydWxlIHtcclxuICBtYXJnaW46IDZweCA1cHggMHB4IDBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ucnVsZS1saXN0IC5yZW1vdmUtZ3JvdXAtY2VsbCB7XHJcbiAgbWFyZ2luOiAxNHB4IDVweCAwcHggMHB4O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSBvcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnJ1bGUtZW50cnkgb3B0aW9uIHtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi5ydWxlLXJlc3VsdCB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiA0cHggN3B4IDAgOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmNoZWNrLW1hcmsge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbjogMXB4IDhweCAwIDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jaGVjay1tYXJrIC5wYXNzLCAucnVsZS1yZXN1bHQgLnBhc3Mge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmNoZWNrLW1hcmsgLmZhaWwsIC5ydWxlLXJlc3VsdCAuZmFpbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbi5ydWxlLWVudHJ5IC5hdXRvLXNlbGVjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWVlO1xyXG59XHJcblxyXG4ucnVsZS1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ydWxlLWxpc3QgLnJ1bGUtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3QgLmVkaXQtcnVsZS1idXR0b25zIHtcclxuICBtYXJnaW46IDVweCA1cHggMHB4IDBweDtcclxufVxyXG5cclxuLnJ1bGUtbGlzdCAuZWRpdC1ncm91cC1idXR0b25zIHtcclxuICBtYXJnaW46IDVweCA1cHggMHB4IDBweDtcclxufVxyXG5cclxuLnJ1bGUtZW50cnkgc2VsZWN0LFxyXG4ucnVsZS1lbnRyeSBpbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMnB4IDRweDtcclxufVxyXG5cclxuLnJ1bGUtZW50cnkgc2VsZWN0IHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi5ydWxlLWVudHJ5IHNlbGVjdDpmb2N1cyxcclxuLnJ1bGUtZW50cnkgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5ydWxlLWVkaXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWVlZTtcclxufVxyXG5cclxuLmZhY3RzLXN0YXR1cyB7XHJcbiAgcGFkZGluZzogMnB4OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG59XHJcblxyXG5idXR0b24uYWRkLWdyb3VwLCBidXR0b24ucmVtb3ZlLWdyb3VwIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIG1hcmdpbjogMHB4IDJweDtcclxufVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZWRpdG9yU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrTUFBa007RUFDbE0sZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGVBQWU7RUFDZixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJ1bGUtZ3JvdXAtZWRpdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlZWU7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYmI7XFxyXFxuICBwYWRkaW5nOiAycHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzIHtcXHJcXG4gIG1hcmdpbjogMHB4IDBweDtcXHJcXG4gIHBhZGRpbmc6IDJweCAycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1lbnRyeSB7XFxyXFxuICBtYXJnaW46IDJweCAwcHg7XFxyXFxuICBwYWRkaW5nOiAycHggNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGhlaWdodDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtbGlzdCAuZWRpdG9yLXdyYXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWxpc3QgLmFkZHJ1bGUge1xcclxcbiAgbWFyZ2luOiA2cHggNXB4IDBweCAwcHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1saXN0IC5yZW1vdmUtZ3JvdXAtY2VsbCB7XFxyXFxuICBtYXJnaW46IDE0cHggNXB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVudHJ5IG9wdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVudHJ5IG9wdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtcmVzdWx0IHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbjogNHB4IDdweCAwIDhweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stbWFyayB7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW46IDFweCA4cHggMCAwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1tYXJrIC5wYXNzLCAucnVsZS1yZXN1bHQgLnBhc3Mge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stbWFyayAuZmFpbCwgLnJ1bGUtcmVzdWx0IC5mYWlsIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG4gIGNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1lbnRyeSAuYXV0by1zZWxlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWVlZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtbGlzdCAucnVsZS1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWxpc3QgLmVkaXQtcnVsZS1idXR0b25zIHtcXHJcXG4gIG1hcmdpbjogNXB4IDVweCAwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1saXN0IC5lZGl0LWdyb3VwLWJ1dHRvbnMge1xcclxcbiAgbWFyZ2luOiA1cHggNXB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVudHJ5IHNlbGVjdCxcXHJcXG4ucnVsZS1lbnRyeSBpbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGhlaWdodDogMjJweDtcXHJcXG4gIHBhZGRpbmc6IDJweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVudHJ5IHNlbGVjdCB7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGhlaWdodDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgc2VsZWN0OmZvY3VzLFxcclxcbi5ydWxlLWVudHJ5IGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVkaXRvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWVlZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhY3RzLXN0YXR1cyB7XFxyXFxuICBwYWRkaW5nOiAycHg7IFxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC1ncm91cCwgYnV0dG9uLnJlbW92ZS1ncm91cCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxuICBtYXJnaW46IDBweCAycHg7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWF5YmVLZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0S2V5U3ByZWFkID0ge307XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdrZXknKSkge1xuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgcmV0dXJuIGsgIT09ICdrZXknO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJlZm9yZUV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAne2tleTogc29tZUtleSwgJyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne2tleTogc29tZUtleX0nO1xuXG4gICAgICAgIGlmICghZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSkge1xuICAgICAgICAgIHZhciBhZnRlckV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAneycgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3t9JztcblxuICAgICAgICAgIGVycm9yKCdBIHByb3BzIG9iamVjdCBjb250YWluaW5nIGEgXCJrZXlcIiBwcm9wIGlzIGJlaW5nIHNwcmVhZCBpbnRvIEpTWDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyB7Li4ucHJvcHN9IC8+XFxuJyArICdSZWFjdCBrZXlzIG11c3QgYmUgcGFzc2VkIGRpcmVjdGx5IHRvIEpTWCB3aXRob3V0IHVzaW5nIHNwcmVhZDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyBrZXk9e3NvbWVLZXl9IHsuLi5wcm9wc30gLz4nLCBiZWZvcmVFeGFtcGxlLCBjb21wb25lbnROYW1lLCBhZnRlckV4YW1wbGUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcbi8vIGV2ZW4gd2l0aCB0aGUgcHJvZCB0cmFuc2Zvcm0uIFRoaXMgbWVhbnMgdGhhdCBqc3hERVYgaXMgcHVyZWx5XG4vLyBvcHQtaW4gYmVoYXZpb3IgZm9yIGJldHRlciBtZXNzYWdlcyBidXQgdGhhdCB3ZSB3b24ndCBzdG9wXG4vLyBnaXZpbmcgeW91IHdhcm5pbmdzIGlmIHlvdSB1c2UgcHJvZHVjdGlvbiBhcGlzLlxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgZmFsc2UpO1xuICB9XG59XG5cbnZhciBqc3ggPSAganN4V2l0aFZhbGlkYXRpb25EeW5hbWljIDsgLy8gd2UgbWF5IHdhbnQgdG8gc3BlY2lhbCBjYXNlIGpzeHMgaW50ZXJuYWxseSB0byB0YWtlIGFkdmFudGFnZSBvZiBzdGF0aWMgY2hpbGRyZW4uXG4vLyBmb3Igbm93IHdlIGNhbiBzaGlwIGlkZW50aWNhbCBwcm9kIGZ1bmN0aW9uc1xuXG52YXIganN4cyA9ICBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3ggPSBqc3g7XG5leHBvcnRzLmpzeHMgPSBqc3hzO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAvKioqKioqLyAoKCkgPT4geyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9zcmMvaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSA9PiB7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoeyB2YWx1ZTogdHJ1ZSB9KSk7XG5leHBvcnRzLnByb2Nlc3NSdWxlcyA9IGV4cG9ydHMudmFsaWRhdGVSdWxlID0gZXhwb3J0cy5wcm9jZXNzVmVyYm9zZSA9IGV4cG9ydHMudmVyYm9zZVBsdWdpbiA9IGV4cG9ydHMucHJvY2Vzc0dyb3VwID0gZXhwb3J0cy5wcm9jZXNzUnVsZU9yR3JvdXAgPSBleHBvcnRzLmludGVybmFsT3BlcmF0b3JzID0gZXhwb3J0cy5wcm9jZXNzUmVzdWx0ID0gZXhwb3J0cy5mbGF0dGVuS2V5cyA9IGV4cG9ydHMuaXNHcm91cCA9IGV4cG9ydHMuaW50ZXJuYWxPcGVyYXRvclZhbHVlcyA9IHZvaWQgMDtcbmV4cG9ydHMuaW50ZXJuYWxPcGVyYXRvclZhbHVlcyA9IFsnZXEnLCAnbmVxJywgJ2d0JywgJ2x0JywgJ2d0ZScsICdsdGUnLCAnaGFzJywgJ25oYXMnLCAnaW4nLCAnbml0J107XG5jb25zdCBkZWZhdWx0RGVsaW1pdGVyID0gJy4nO1xuZnVuY3Rpb24gaXNHcm91cCh0ZXN0UnVsZSA9IHt9KSB7XG4gICAgY29uc3QgeyBhbGwsIGFueSB9ID0gdGVzdFJ1bGU7XG4gICAgaWYgKGFsbCB8fCBhbnkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNHcm91cCA9IGlzR3JvdXA7XG5mdW5jdGlvbiBmbGF0dGVuS2V5cyhvYmosIHByZWZpeCA9ICcnLCBkZWxpbWl0ZXIgPSAnLicpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCAuLi5mbGF0dGVuS2V5cyh2YWx1ZSwgYCR7cHJlZml4fSR7a2V5fSR7ZGVsaW1pdGVyfWApIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCBbYCR7cHJlZml4fSR7a2V5fWBdOiB2YWx1ZSB9O1xuICAgIH0sIHt9KTtcbn1cbmV4cG9ydHMuZmxhdHRlbktleXMgPSBmbGF0dGVuS2V5cztcbmNvbnN0IHByb2Nlc3NSZXN1bHQgPSAoeyBwYXNzLCBmYWN0cywgcnVsZSwgZ3JvdXAsIHBsdWdpbnMgPSBbXSB9KSA9PiAocGx1Z2lucy5yZWR1Y2UoKHBsdWdpblJlc3VsdCwgcGx1Z2luKSA9PiAoeyAuLi5wbHVnaW5SZXN1bHQsIC4uLihwbHVnaW4oeyBwYXNzLCBmYWN0cywgcnVsZSwgZ3JvdXAgfSkgfHwge30pIH0pLCB7IHBhc3MgfSkpO1xuZXhwb3J0cy5wcm9jZXNzUmVzdWx0ID0gcHJvY2Vzc1Jlc3VsdDtcbmNvbnN0IGluX25pdCA9IChvcGVyYXRvcikgPT4gKHsgdmFsdWUsIHRlcm0gfSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRlcm0pIHx8IFsnc3RyaW5nJywgJ29iamVjdCddLmluY2x1ZGVzKHR5cGVvZiB0ZXJtKSkge1xuICAgICAgICBjb25zdCBwYXNzID0gdGVybS5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvcGVyYXRvciA9PT0gJ2luJyA/IHBhc3MgOiAhcGFzcztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IGhhc19uaGFzID0gKG9wZXJhdG9yKSA9PiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB7XG4gICAgaWYgKFsnbnVtYmVyJywgJ2JpZ2ludCcsICdzeW1ib2wnLCAndW5kZWZpbmVkJ10uaW5jbHVkZXModHlwZW9mIHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHBhc3MgPSB2YWx1ZS5pbmNsdWRlcyh0ZXJtKTtcbiAgICByZXR1cm4gKG9wZXJhdG9yID09PSAnaGFzJykgPyBwYXNzIDogIXBhc3M7XG59O1xuZXhwb3J0cy5pbnRlcm5hbE9wZXJhdG9ycyA9IHtcbiAgICBlcTogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPT09IHRlcm0sXG4gICAgbmVxOiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSAhPT0gdGVybSxcbiAgICBndDogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPiB0ZXJtLFxuICAgIGd0ZTogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPj0gdGVybSxcbiAgICBsdDogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPCB0ZXJtLFxuICAgIGx0ZTogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPD0gdGVybSxcbiAgICBpbjogaW5fbml0KCdpbicpLFxuICAgIG5pdDogaW5fbml0KCduaXQnKSxcbiAgICBoYXM6IGhhc19uaGFzKCdoYXMnKSxcbiAgICBuaGFzOiBoYXNfbmhhcygnbmhhcycpXG59O1xuZnVuY3Rpb24gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzID0ge30sIHJ1bGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgcGx1Z2lucyA9IFtdLCBvcGVyYXRvcnMgPSB7fSB9ID0gb3B0aW9ucztcbiAgICBpZiAoaXNHcm91cChydWxlKSlcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NHcm91cChmYWN0cywgcnVsZSwgeyBwbHVnaW5zIH0pO1xuICAgIGNvbnN0IFtzdWJqZWN0LCBvcCwgdGVybV0gPSBydWxlO1xuICAgIGlmIChzdWJqZWN0ID09PSBudWxsIHx8IHN1YmplY3QgPT09IHVuZGVmaW5lZCB8fCAhb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFJ1bGVcXG4ke0pTT04uc3RyaW5naWZ5KHJ1bGUsIG51bGwsIDIpfWApO1xuICAgIH1cbiAgICBjb25zdCBydWxlUmVzdWx0ID0geyBwYXNzOiBmYWxzZSB9O1xuICAgIGNvbnN0IHZhbHVlID0gZmFjdHM/LltzdWJqZWN0XTtcbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgY29uc3QgdGVybUlzT2JqZWN0ID0gdHlwZW9mIHRlcm0gPT0gJ29iamVjdCc7XG4gICAgY29uc3QgdGVybUlzUnVsZSA9IHRlcm1Jc09iamVjdCAmJiBpc0dyb3VwKHRlcm0pO1xuICAgIGNvbnN0IGZhY3RRdWVyeSA9IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHR5cGU6IHZhbHVlVHlwZSxcbiAgICAgICAgcXVlcnlGaWVsZHM6IG51bGxcbiAgICB9O1xuICAgIGlmIChzdWJqZWN0LmluZGV4T2YoZGVmYXVsdERlbGltaXRlcikgPiAwKSB7XG4gICAgICAgIGNvbnN0IGZsYXRGYWN0cyA9IGZsYXR0ZW5LZXlzKGZhY3RzKTtcbiAgICAgICAgY29uc3QgcXVlcnlWYWx1ZSA9IGZsYXRGYWN0c1tzdWJqZWN0XTtcbiAgICAgICAgY29uc3Qgb2JqVHlwZSA9IHR5cGVvZiBxdWVyeVZhbHVlO1xuICAgICAgICBpZiAocXVlcnlWYWx1ZSkge1xuICAgICAgICAgICAgZmFjdFF1ZXJ5LnZhbHVlID0gcXVlcnlWYWx1ZTtcbiAgICAgICAgICAgIGZhY3RRdWVyeS50eXBlID0gQXJyYXkuaXNBcnJheShxdWVyeVZhbHVlKSA/ICdhcnJheScgOiBvYmpUeXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtSXNSdWxlKSB7XG4gICAgfVxuICAgIGNvbnN0IGlzTnVtZXJpYyA9IGZhY3RRdWVyeS50eXBlID09PSAnYmlnaW50JyB8fCBmYWN0UXVlcnkudHlwZSA9PT0gJ251bWJlcic7XG4gICAgY29uc3QgdGVybVZhbHVlID0gaXNOdW1lcmljID8gcGFyc2VJbnQodGVybSwgMTApIDogdGVybTtcbiAgICBjb25zdCBmYWN0VmFsdWUgPSBmYWN0UXVlcnkudmFsdWU7XG4gICAgaWYgKGV4cG9ydHMuaW50ZXJuYWxPcGVyYXRvcnNbb3BdKSB7XG4gICAgICAgIHJ1bGVSZXN1bHQucGFzcyA9IGV4cG9ydHMuaW50ZXJuYWxPcGVyYXRvcnNbb3BdKHsgdmFsdWU6IGZhY3RWYWx1ZSwgdGVybTogdGVybVZhbHVlIH0pO1xuICAgIH1cbiAgICBpZiAob3BlcmF0b3JzW29wXSkge1xuICAgICAgICBydWxlUmVzdWx0LnBhc3MgPSBvcGVyYXRvcnNbb3BdKHsgdmFsdWU6IGZhY3RWYWx1ZSwgdGVybTogdGVybVZhbHVlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIGV4cG9ydHMucHJvY2Vzc1Jlc3VsdCkoe1xuICAgICAgICAuLi5ydWxlUmVzdWx0LCBydWxlLCBmYWN0cywgcGx1Z2luc1xuICAgIH0pO1xufVxuZXhwb3J0cy5wcm9jZXNzUnVsZU9yR3JvdXAgPSBwcm9jZXNzUnVsZU9yR3JvdXA7XG5mdW5jdGlvbiBwcm9jZXNzR3JvdXAoZmFjdHMgPSB7fSwgcnVsZUdyb3VwID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgYWxsLCBhbnkgfSA9IHJ1bGVHcm91cDtcbiAgICBjb25zdCB7IHBsdWdpbnMgPSBbXSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBhY3Rpb24gPSBydWxlID0+IHByb2Nlc3NSdWxlT3JHcm91cChmYWN0cywgcnVsZSwgb3B0aW9ucyk7XG4gICAgaWYgKGFsbCkge1xuICAgICAgICBjb25zdCBncm91cFJlc3VsdCA9IGFsbC5tYXAoYWN0aW9uKTtcbiAgICAgICAgY29uc3QgcGFzcyA9IGdyb3VwUmVzdWx0LmV2ZXJ5KHIgPT4gci5wYXNzKTtcbiAgICAgICAgcmV0dXJuICgwLCBleHBvcnRzLnByb2Nlc3NSZXN1bHQpKHsgcGFzcywgcnVsZTogcnVsZUdyb3VwLCBmYWN0cywgcGx1Z2lucywgZ3JvdXA6IHsgYWxsOiBncm91cFJlc3VsdCwgcGFzcyB9IH0pO1xuICAgIH1cbiAgICBpZiAoYW55KSB7XG4gICAgICAgIGNvbnN0IGdyb3VwUmVzdWx0ID0gYW55Lm1hcChhY3Rpb24pO1xuICAgICAgICBjb25zdCBwYXNzID0gZ3JvdXBSZXN1bHQuc29tZShyID0+IHIucGFzcyk7XG4gICAgICAgIHJldHVybiAoMCwgZXhwb3J0cy5wcm9jZXNzUmVzdWx0KSh7IHBhc3MsIHJ1bGU6IHJ1bGVHcm91cCwgZmFjdHMsIHBsdWdpbnMsIGdyb3VwOiB7IGFueTogZ3JvdXBSZXN1bHQsIHBhc3MgfSB9KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFJ1bGVHcm91cFxcbiR7SlNPTi5zdHJpbmdpZnkocnVsZUdyb3VwLCBudWxsLCAyKX1gKTtcbn1cbmV4cG9ydHMucHJvY2Vzc0dyb3VwID0gcHJvY2Vzc0dyb3VwO1xuY29uc3QgdmVyYm9zZVBsdWdpbiA9ICh7IHBhc3MsIHJ1bGUsIGdyb3VwIH0pID0+ICh7IHBhc3MsIHJ1bGUsIGdyb3VwIH0pO1xuZXhwb3J0cy52ZXJib3NlUGx1Z2luID0gdmVyYm9zZVBsdWdpbjtcbmNvbnN0IHByb2Nlc3NWZXJib3NlID0gKGZhY3RzID0ge30sIHJ1bGVHcm91cCwgcGx1Z2lucyA9IFtdKSA9PiAocHJvY2Vzc0dyb3VwKGZhY3RzLCBydWxlR3JvdXAsIHsgcGx1Z2luczogW2V4cG9ydHMudmVyYm9zZVBsdWdpbiwgLi4ucGx1Z2luc10gfSkpO1xuZXhwb3J0cy5wcm9jZXNzVmVyYm9zZSA9IHByb2Nlc3NWZXJib3NlO1xuZnVuY3Rpb24gdmFsaWRhdGVSdWxlKHJ1bGVHcm91cCA9IHt9KSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IGZhbHNlO1xuICAgIGlmICghcnVsZUdyb3VwKVxuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIGlzVmFsaWQsXG4gICAgICAgICAgICBtZXNzYWdlOiAnTm8gUnVsZSBHcm91cCBGb3VuZCdcbiAgICAgICAgfSk7XG4gICAgY29uc3QgeyBhbGwsIGFueSB9ID0gcnVsZUdyb3VwO1xuICAgIGNvbnN0IHZhbGlkYXRlUnVsZVNldCA9IChydWxlcykgPT4ge1xuICAgICAgICBpZiAocnVsZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gUnVsZSBHcm91cCBGb3VuZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBydWxlSW5kZXggPSAwOyBydWxlSW5kZXggPCBydWxlcy5sZW5ndGg7IHJ1bGVJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlR3JvdXAgPSBydWxlc1tydWxlSW5kZXhdO1xuICAgICAgICAgICAgaWYgKHJ1bGVHcm91cD8uYWxsIHx8IHJ1bGVHcm91cD8uYW55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUnVsZShydWxlR3JvdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVHcm91cDtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShydWxlKSB8fCBydWxlLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdObyBSdWxlIEdyb3VwIEZvdW5kJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgW2ZpZWxkLCBvcF0gPSBydWxlO1xuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCAhb3ApXG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIFJ1bGUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWV4cG9ydHMuaW50ZXJuYWxPcGVyYXRvclZhbHVlcy5pbmNsdWRlcyhvcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIE9wZXJhdG9yJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBpZiAoYWxsIHx8IGFueSkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVSdWxlU2V0KGFsbCB8fCBhbnkpO1xuICAgIH1cbiAgICByZXR1cm4gKHtcbiAgICAgICAgaXNWYWxpZCxcbiAgICAgICAgbWVzc2FnZTogJ05vIFF1YW50aWZpZXJzIChhbGx8YW55KSBGb3VuZCdcbiAgICB9KTtcbn1cbmV4cG9ydHMudmFsaWRhdGVSdWxlID0gdmFsaWRhdGVSdWxlO1xuZXhwb3J0cy5wcm9jZXNzUnVsZXMgPSBwcm9jZXNzR3JvdXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMucHJvY2Vzc1J1bGVzO1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbi8qKioqKiovIFx0X193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luZGV4LnRzXCJdKDAsIF9fd2VicGFja19leHBvcnRzX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG4vKioqKioqLyB9KSgpXG47XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N096czdPenM3T3pzN096czdRVU5yUW1Fc09FSkJRWE5DTEVkQlFXVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVWMFNDeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExFZEJRVWNzUTBGQlF6dEJRVVUzUWl4VFFVRm5RaXhQUVVGUExFTkJRVU1zVjBGQk5rSXNSVUZCUlR0SlFVTnlSQ3hOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRkZCUVhGQ0xFTkJRVU03U1VGRE0wTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1IwRkJSenRSUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzBsQlF6VkNMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMllzUTBGQlF6dEJRVXBFTERCQ1FVbERPMEZCUlVRc1UwRkJaMElzVjBGQlZ5eERRVUZETEVkQlFWRXNSVUZCUlN4TlFVRk5MRWRCUVVjc1JVRkJSU3hGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzBsQlEyaEZMRTlCUVU4c1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVOMFJDeEpRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVOMlJDeFBRVUZQTEVWQlFVVXNSMEZCUnl4SFFVRkhMRVZCUVVVc1IwRkJSeXhYUVVGWExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1IwRkJSeXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZETVVVc1EwRkJRenRSUVVORUxFOUJRVThzUlVGQlJTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRhRVFzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0QlFVTlNMRU5CUVVNN1FVRlFSQ3hyUTBGUFF6dEJRVVZOTEUxQlFVMHNZVUZCWVN4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1QwRkJUeXhIUVVGSExFVkJRVzlDTEVWQlFXVXNSVUZCYVVJc1JVRkJSU3hEUVVGRExFTkJRM3BJTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhaUVVGWkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkRNMGc3UVVGR1dTeHhRa0ZCWVN4cFFrRkZla0k3UVVGRlJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4RFFVRkRMRkZCUVd0Q0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJUdEpRVU42UkN4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVOMFJTeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEyeERMRTlCUVU4c1VVRkJVU3hMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRFppeERRVUZETzBGQlJVUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJReXhSUVVGclFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVTdTVUZETTBRc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEV0QlFVc3NRMEZCUXp0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRM0pHTEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYkVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0QlFVTTNReXhEUVVGRE8wRkJSVmtzZVVKQlFXbENMRWRCUVVjN1NVRkRMMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpPMGxCUTNaRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eExRVUZMTEV0QlFVc3NTVUZCU1R0SlFVTjRReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVazdTVUZEY2tNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTzBsQlEzWkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNUdEpRVU55UXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWs3U1VGRGRrTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRGFFSXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGJFSXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGNFSXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03UTBGRFRDeERRVUZETzBGQlJYQkNMRk5CUVdkQ0xHdENRVUZyUWl4RFFVRkRMRkZCUVdVc1JVRkJSU3hGUVVGRkxFbEJRWE5DTEVWQlFVVXNWVUZCYlVJc1JVRkJSVHRKUVVOcVJ5eE5RVUZOTEVWQlFVVXNUMEZCVHl4SFFVRkhMRVZCUVVVc1JVRkJSU3hUUVVGVExFZEJRVWNzUlVGQlJTeEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRPMGxCUTJwRUxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0UlFVRkZMRTlCUVU4c1dVRkJXU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZwUWl4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVU1UlN4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRlpMRU5CUVVNN1NVRkRla01zU1VGQlNTeFBRVUZQTEV0QlFVc3NTVUZCU1N4SlFVRkpMRTlCUVU4c1MwRkJTeXhUUVVGVExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVTnlSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEdsQ1FVRnBRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzQkZMRU5CUVVNN1NVRkZSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVdkQ0xFTkJRVU03U1VGRGFrUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETDBJc1RVRkJUU3hUUVVGVExFZEJRVWNzVDBGQlR5eExRVUZyUWl4RFFVRkRPMGxCUXpWRExFMUJRVTBzV1VGQldTeEhRVUZITEU5QlFVOHNTVUZCU1N4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1F5eE5RVUZOTEZWQlFWVXNSMEZCUnl4WlFVRlpMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEycEVMRTFCUVUwc1UwRkJVeXhIUVVGSE8xRkJRMmhDTEV0QlFVczdVVUZEVEN4SlFVRkpMRVZCUVVVc1UwRkJVenRSUVVObUxGZEJRVmNzUlVGQlJTeEpRVUZKTzB0QlEyeENPMGxCUjBRc1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZETVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNKRExFMUJRVTBzVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOMFF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UFFVRlBMRlZCUVZVc1EwRkJRenRSUVVOc1F5eEpRVUZKTEZWQlFWVXNSVUZCUlN4RFFVRkRPMWxCUTJZc1UwRkJVeXhEUVVGRExFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdXVUZETjBJc1UwRkJVeXhEUVVGRExFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVOcVJTeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVVkVMRWxCUVVrc1ZVRkJWU3hGUVVGRkxFTkJRVU03U1VGRmFrSXNRMEZCUXp0SlFVVkVMRTFCUVUwc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NVVUZCVVN4SlFVRkpMRk5CUVZNc1EwRkJReXhKUVVGSkxFdEJRVXNzVVVGQlVTeERRVUZETzBsQlF6ZEZMRTFCUVUwc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNoRUxFMUJRVTBzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkZiRU1zU1VGQlNTeDVRa0ZCYVVJc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlF6RkNMRlZCUVZVc1EwRkJReXhKUVVGSkxFZEJRVWNzZVVKQlFXbENMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEycEdMRU5CUVVNN1NVRkhSQ3hKUVVGSkxGTkJRVk1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xGVkJRVlVzUTBGQlF5eEpRVUZKTEVkQlFVY3NVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZOQlFWTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU42UlN4RFFVRkRPMGxCUlVRc1QwRkJUeXg1UWtGQllTeEZRVUZETzFGQlEyNUNMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNUMEZCVHp0TFFVTnlRaXhEUVVGRExFTkJRVU03UVVGRGNFSXNRMEZCUXp0QlFXNUVSQ3huUkVGdFJFTTdRVUU0UWtRc1UwRkJaMElzV1VGQldTeERRVUZETEZGQlFXVXNSVUZCUlN4RlFVRkZMRmxCUVhWQ0xFVkJRVVVzUlVGQlJTeFZRVUZ0UWl4RlFVRkZPMGxCUXpsR0xFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1UwRkJVeXhEUVVGRE8wbEJReTlDTEUxQlFVMHNSVUZCUlN4UFFVRlBMRWRCUVVjc1JVRkJSU3hGUVVGRkxFZEJRVWNzVDBGQlR5eERRVUZETzBsQlEycERMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVWb1JTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTFJc1RVRkJUU3hYUVVGWExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOd1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRelZETEU5QlFVOHNlVUpCUVdFc1JVRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEY2tjc1EwRkJRenRKUVVWRUxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEVWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNCRExFMUJRVTBzU1VGQlNTeEhRVUZITEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNME1zVDBGQlR5eDVRa0ZCWVN4RlFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNWMEZCVnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU55Unl4RFFVRkRPMGxCUlVRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVVVzUTBGQlF6dEJRVU12UlN4RFFVRkRPMEZCYkVKRUxHOURRV3RDUXp0QlFVVk5MRTFCUVUwc1lVRkJZU3hIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJZeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlFTOUZMSEZDUVVGaExHbENRVUZyUlR0QlFVVnlSaXhOUVVGTkxHTkJRV01zUjBGQlJ5eERRVUZETEZGQlFXVXNSVUZCUlN4RlFVRkZMRk5CUVc5Q0xFVkJRVVVzVlVGQk1FSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVOMlJ5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEhGQ1FVRmhMRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlEzcEZMRU5CUVVNN1FVRkdWeXh6UWtGQll5eHJRa0ZGZWtJN1FVRkZSaXhUUVVGblFpeFpRVUZaTEVOQlFVTXNXVUZCV1N4RlFVRmxPMGxCUTNSRUxFMUJRVTBzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjBRaXhKUVVGSkxFTkJRVU1zVTBGQlV6dFJRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTjBRaXhQUVVGUE8xbEJRMUFzVDBGQlR5eEZRVUZGTEhGQ1FVRnhRanRUUVVNdlFpeERRVUZETEVOQlFVTTdTVUZEU0N4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEZOQlFWTXNRMEZCUXp0SlFVVXZRaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eERRVUZETEV0QlFWa3NSVUZCUlN4RlFVRkZPMUZCUTNaRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRPMWxCUVVVc1QwRkJUeXhEUVVGRE8yZENRVU01UWl4UFFVRlBPMmRDUVVOUUxFOUJRVThzUlVGQlJTeHhRa0ZCY1VJN1lVRkRMMElzUTBGQlF5eERRVUZETzFGQlEwZ3NTMEZCU3l4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFVkJRVVVzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU01UkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZqTEVOQlFVTTdXVUZEYUVRc1NVRkJTU3hUUVVGVExFVkJRVVVzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRGNrTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGFrTXNRMEZCUXp0WlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExGTkJRV2xDTEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETzJkQ1FVRkZMRTlCUVU4c1EwRkJRenR2UWtGRGJrUXNUMEZCVHp0dlFrRkRVQ3hQUVVGUExFVkJRVVVzY1VKQlFYRkNPMmxDUVVNdlFpeERRVUZETEVOQlFVTTdXVUZGU0N4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTjZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkJSU3hQUVVGUExFTkJRVU03YjBKQlEzcENMRTlCUVU4N2IwSkJRMUFzVDBGQlR5eEZRVUZGTEdOQlFXTTdhVUpCUTNoQ0xFTkJRVU03V1VGRFJpeEpRVUZKTEVOQlFVTXNPRUpCUVhOQ0xFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkJSU3hQUVVGUExFTkJRVU03YjBKQlEyaEVMRTlCUVU4N2IwSkJRMUFzVDBGQlR5eEZRVUZGTEd0Q1FVRnJRanRwUWtGRE5VSXNRMEZCUXl4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVORUxFOUJRVTg3V1VGRFRDeFBRVUZQTEVWQlFVVXNTVUZCU1R0VFFVTmtMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJSVVFzU1VGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhQUVVGUExHVkJRV1VzUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVVZFTEU5QlFVOHNRMEZCUXp0UlFVTk9MRTlCUVU4N1VVRkRVQ3hQUVVGUExFVkJRVVVzWjBOQlFXZERPMHRCUXpGRExFTkJRVU1zUTBGQlF6dEJRVU5NTEVOQlFVTTdRVUZvUkVRc2IwTkJaMFJETzBGQlQxa3NiMEpCUVZrc1IwRkJSeXhaUVVGWkxFTkJRVU03UVVGRmVrTXNjVUpCUVdVc2IwSkJRVmtzUTBGQlF6czdPenM3T3pzN1ZVVnNVRFZDTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFaUxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlqYjNKbEwzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OWpiM0psTHk0dmMzSmpMMmx1WkdWNExuUnpJaXdpZDJWaWNHRmphem92TDJOdmNtVXZkMlZpY0dGamF5OWlaV1p2Y21VdGMzUmhjblIxY0NJc0luZGxZbkJoWTJzNkx5OWpiM0psTDNkbFluQmhZMnN2YzNSaGNuUjFjQ0lzSW5kbFluQmhZMnM2THk5amIzSmxMM2RsWW5CaFkyc3ZZV1owWlhJdGMzUmhjblIxY0NKZExDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKamIzSmxYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJbU52Y21WY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1OUtTaHpaV3htTENBb0tTQTlQaUI3WEc1eVpYUjFjbTRnSWl3aVpYaHdiM0owSUhSNWNHVWdVM1ZpYW1WamRDQTlJSE4wY21sdVp6dGNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1ZHVnliU0E5SUdGdWVUdGNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1VuVnNaU0E5SUZ0VGRXSnFaV04wTENCUGNHVnlZWFJ2Y2l3Z1ZHVnliVjA3WEhKY2JtVjRjRzl5ZENCMGVYQmxJRkYxWVc1MGFXWnBaWEp6SUQwZ0oyRnNiQ2NnZkNBbllXNTVKenRjY2x4dVpYaHdiM0owSUhSNWNHVWdUM0JsY21GMGIzSWdQU0FuWlhFbklId2dKMjVsY1NjZ2ZDQW5aM1FuSUh3Z0oyeDBKeUI4SUNkbmRHVW5JSHdnSjJ4MFpTY2dmQ0FuYUdGekp5QjhJQ2R1YUdGekp5QjhJQ2RwYmljZ2ZDQW5ibWwwSnlCOElITjBjbWx1Wnp0Y2NseHVaWGh3YjNKMElIUjVjR1VnVW5Wc1pYTWdQU0FvVW5Wc1pTQjhJRkoxYkdWSGNtOTFjQ2xiWFR0Y2NseHVaWGh3YjNKMElIUjVjR1VnVW5Wc1pVZHliM1Z3SUQwZ2V5QmhiR3cvT2lCU2RXeGxjeXdnWVc1NVB6b2dVblZzWlhNZ2ZUdGNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1JtRmpkSE1nUFNCU1pXTnZjbVE4YzNSeWFXNW5MQ0JoYm5rK0lId2dVbVZqYjNKa1BITjBjbWx1Wnl3Z1lXNTVQbHRkTzF4eVhHNWxlSEJ2Y25RZ2RIbHdaU0JTWlhOMWJIUlFiSFZuYVc0Z1BTQW9ZWEpuY3pvZ1VHeDFaMmx1UVhKbmN5a2dQVDRnVUhKdlkyVnpjMUpsYzNWc2REdGNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1QzQmxjbUYwYjNKUWJIVm5hVzRnUFNCU1pXTnZjbVE4YzNSeWFXNW5MQ0FvWVhKbmN6b2dUM0JsY21GMGIzSkdkVzVqUVhKbmN5a2dQVDRnWW05dmJHVmhiajQ3WEhKY2JtVjRjRzl5ZENCMGVYQmxJRTl3WlhKaGRHOXlSblZ1WTBGeVozTWdQU0I3WEhKY2JpQWdkbUZzZFdVNklHRnVlVHRjY2x4dUlDQjBaWEp0T2lCaGJuazdYSEpjYm4xY2NseHVaWGh3YjNKMElIUjVjR1VnVUd4MVoybHVRWEpuY3lBOUlIdGNjbHh1SUNCd1lYTnpPaUJpYjI5c1pXRnVPMXh5WEc0Z0lISjFiR1U2SUZKMWJHVWdmQ0JTZFd4bFIzSnZkWEE3WEhKY2JpQWdabUZqZEhNL09pQkdZV04wY3p0Y2NseHVJQ0JuY205MWNEODZJR0Z1ZVR0Y2NseHVmVHRjY2x4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCUWNtOWpaWE56UVhKbmN5QmxlSFJsYm1SeklGQnNkV2RwYmtGeVozTWdleUJ3YkhWbmFXNXpPaUJTWlhOMWJIUlFiSFZuYVc1YlhTQjlYSEpjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVUhKdlkyVnpjMUpsYzNWc2RDQmxlSFJsYm1SeklGSmxZMjl5WkR4emRISnBibWNzSUdGdWVUNGdleUJ3WVhOek9pQmliMjlzWldGdUlIMWNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JTZFd4bFJYWmhiSFZoZEdsdmJpQjdJR2x6Vm1Gc2FXUTZJR0p2YjJ4bFlXNDdJRzFsYzNOaFoyVS9PaUJ6ZEhKcGJtYzdJSDFjY2x4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCUGNIUnBiMjV6SUh0Y2NseHVJQ0J3YkhWbmFXNXpQem9nVW1WemRXeDBVR3gxWjJsdVcxMDdYSEpjYmlBZ2IzQmxjbUYwYjNKelB6b2dUM0JsY21GMGIzSlFiSFZuYVc0N1hISmNibjFjY2x4dVpYaHdiM0owSUhSNWNHVWdWbUZzZFdWVWVYQmxJRDBnSjNOMGNtbHVaeWNnZkNBbmJuVnRZbVZ5SnlCOElDZGlhV2RwYm5RbklId2dKMkp2YjJ4bFlXNG5JSHdnSjNONWJXSnZiQ2NnZkNBbmRXNWtaV1pwYm1Wa0p5QjhJQ2R2WW1wbFkzUW5JSHdnSjJaMWJtTjBhVzl1SnlCOElDZGhjbkpoZVNjN1hISmNibVY0Y0c5eWRDQmpiMjV6ZENCcGJuUmxjbTVoYkU5d1pYSmhkRzl5Vm1Gc2RXVnpPaUJQY0dWeVlYUnZjbHRkSUQwZ1d5ZGxjU2NzSUNkdVpYRW5MQ0FuWjNRbkxDQW5iSFFuTENBblozUmxKeXdnSjJ4MFpTY3NJQ2RvWVhNbkxDQW5ibWhoY3ljc0lDZHBiaWNzSUNkdWFYUW5YVHRjY2x4dVhISmNibU52Ym5OMElHUmxabUYxYkhSRVpXeHBiV2wwWlhJZ1BTQW5MaWM3WEhKY2JseHlYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdhWE5IY205MWNDaDBaWE4wVW5Wc1pUb2dVblZzWlNCOElGSjFiR1ZIY205MWNDQTlJSHQ5S1RvZ1ltOXZiR1ZoYmlCN1hISmNiaUFnWTI5dWMzUWdleUJoYkd3c0lHRnVlU0I5SUQwZ2RHVnpkRkoxYkdVZ1lYTWdVblZzWlVkeWIzVndPMXh5WEc0Z0lHbG1JQ2hoYkd3Z2ZId2dZVzU1S1NCeVpYUjFjbTRnZEhKMVpUdGNjbHh1SUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJtYkdGMGRHVnVTMlY1Y3lodlltbzZJR0Z1ZVN3Z2NISmxabWw0SUQwZ0p5Y3NJR1JsYkdsdGFYUmxjaUE5SUNjdUp5azZJRkpsWTI5eVpEeHpkSEpwYm1jc0lHRnVlVDRnZTF4eVhHNGdJSEpsZEhWeWJpQlBZbXBsWTNRdVpXNTBjbWxsY3lodlltb3BMbkpsWkhWalpTZ29ZV05qTENCYmEyVjVMQ0IyWVd4MVpWMHBJRDArSUh0Y2NseHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RtRnNkV1VnUFQwOUlDZHZZbXBsWTNRbklDWW1JQ0ZCY25KaGVTNXBjMEZ5Y21GNUtIWmhiSFZsS1NrZ2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200Z2V5QXVMaTVoWTJNc0lDNHVMbVpzWVhSMFpXNUxaWGx6S0haaGJIVmxMQ0JnSkh0d2NtVm1hWGg5Skh0clpYbDlKSHRrWld4cGJXbDBaWEo5WUNrZ2ZUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lISmxkSFZ5YmlCN0lDNHVMbUZqWXl3Z1cyQWtlM0J5WldacGVIMGtlMnRsZVgxZ1hUb2dkbUZzZFdVZ2ZUdGNjbHh1SUNCOUxDQjdmU2xjY2x4dWZWeHlYRzVjY2x4dVpYaHdiM0owSUdOdmJuTjBJSEJ5YjJObGMzTlNaWE4xYkhRZ1BTQW9leUJ3WVhOekxDQm1ZV04wY3l3Z2NuVnNaU3dnWjNKdmRYQXNJSEJzZFdkcGJuTWdQU0JiWFNCaGN5QlNaWE4xYkhSUWJIVm5hVzViWFNCOU9pQlFjbTlqWlhOelFYSm5jeWs2SUZCeWIyTmxjM05TWlhOMWJIUWdQVDRnS0Z4eVhHNGdJSEJzZFdkcGJuTXVjbVZrZFdObEtDaHdiSFZuYVc1U1pYTjFiSFFzSUhCc2RXZHBiaWtnUFQ0Z0tIc2dMaTR1Y0d4MVoybHVVbVZ6ZFd4MExDQXVMaTRvY0d4MVoybHVLSHNnY0dGemN5d2dabUZqZEhNc0lISjFiR1VzSUdkeWIzVndJSDBwSUh4OElIdDlLU0I5S1N3Z2V5QndZWE56SUgwcFhISmNiaWxjY2x4dVhISmNibU52Ym5OMElHbHVYMjVwZENBOUlDaHZjR1Z5WVhSdmNqb2dUM0JsY21GMGIzSXBJRDArSUNoN0lIWmhiSFZsTENCMFpYSnRJSDBwSUQwK0lIdGNjbHh1SUNCcFppQW9RWEp5WVhrdWFYTkJjbkpoZVNoMFpYSnRLU0I4ZkNCYkozTjBjbWx1Wnljc0lDZHZZbXBsWTNRblhTNXBibU5zZFdSbGN5aDBlWEJsYjJZZ2RHVnliU2twSUh0Y2NseHVJQ0FnSUdOdmJuTjBJSEJoYzNNZ1BTQjBaWEp0TG1sdVkyeDFaR1Z6S0haaGJIVmxLVHRjY2x4dUlDQWdJSEpsZEhWeWJpQnZjR1Z5WVhSdmNpQTlQVDBnSjJsdUp5QS9JSEJoYzNNZ09pQWhjR0Z6Y3p0Y2NseHVJQ0I5WEhKY2JpQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNTlYSEpjYmx4eVhHNWpiMjV6ZENCb1lYTmZibWhoY3lBOUlDaHZjR1Z5WVhSdmNqb2dUM0JsY21GMGIzSXBJRDArSUNoN0lIWmhiSFZsTENCMFpYSnRJSDBwSUQwK0lIdGNjbHh1SUNCcFppQW9XeWR1ZFcxaVpYSW5MQ0FuWW1sbmFXNTBKeXdnSjNONWJXSnZiQ2NzSUNkMWJtUmxabWx1WldRblhTNXBibU5zZFdSbGN5aDBlWEJsYjJZZ2RtRnNkV1VwS1NCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ1kyOXVjM1FnY0dGemN5QTlJSFpoYkhWbExtbHVZMngxWkdWektIUmxjbTBwTzF4eVhHNGdJSEpsZEhWeWJpQW9iM0JsY21GMGIzSWdQVDA5SUNkb1lYTW5LU0EvSUhCaGMzTWdPaUFoY0dGemN6dGNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJR052Ym5OMElHbHVkR1Z5Ym1Gc1QzQmxjbUYwYjNKeklEMGdlMXh5WEc0Z0lHVnhPaUFvZXlCMllXeDFaU3dnZEdWeWJTQjlLU0E5UGlCMllXeDFaU0E5UFQwZ2RHVnliU3hjY2x4dUlDQnVaWEU2SUNoN0lIWmhiSFZsTENCMFpYSnRJSDBwSUQwK0lIWmhiSFZsSUNFOVBTQjBaWEp0TEZ4eVhHNGdJR2QwT2lBb2V5QjJZV3gxWlN3Z2RHVnliU0I5S1NBOVBpQjJZV3gxWlNBK0lIUmxjbTBzWEhKY2JpQWdaM1JsT2lBb2V5QjJZV3gxWlN3Z2RHVnliU0I5S1NBOVBpQjJZV3gxWlNBK1BTQjBaWEp0TEZ4eVhHNGdJR3gwT2lBb2V5QjJZV3gxWlN3Z2RHVnliU0I5S1NBOVBpQjJZV3gxWlNBOElIUmxjbTBzWEhKY2JpQWdiSFJsT2lBb2V5QjJZV3gxWlN3Z2RHVnliU0I5S1NBOVBpQjJZV3gxWlNBOFBTQjBaWEp0TEZ4eVhHNGdJR2x1T2lCcGJsOXVhWFFvSjJsdUp5a3NYSEpjYmlBZ2JtbDBPaUJwYmw5dWFYUW9KMjVwZENjcExGeHlYRzRnSUdoaGN6b2dhR0Z6WDI1b1lYTW9KMmhoY3ljcExGeHlYRzRnSUc1b1lYTTZJR2hoYzE5dWFHRnpLQ2R1YUdGekp5bGNjbHh1ZlNCaGN5QlBjR1Z5WVhSdmNsQnNkV2RwYmp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ3Y205alpYTnpVblZzWlU5eVIzSnZkWEFvWm1GamRITTZJRVpoWTNSeklEMGdlMzBzSUhKMWJHVTZJRkoxYkdVZ2ZDQlNkV3hsUjNKdmRYQXNJRzl3ZEdsdmJuTTZJRTl3ZEdsdmJuTWdQU0I3ZlNrNklGQnliMk5sYzNOU1pYTjFiSFFnZTF4eVhHNGdJR052Ym5OMElIc2djR3gxWjJsdWN5QTlJRnRkTENCdmNHVnlZWFJ2Y25NZ1BTQjdmU0I5SUQwZ2IzQjBhVzl1Y3p0Y2NseHVJQ0JwWmlBb2FYTkhjbTkxY0NoeWRXeGxLU2tnY21WMGRYSnVJSEJ5YjJObGMzTkhjbTkxY0NobVlXTjBjeXdnY25Wc1pTQmhjeUJTZFd4bFIzSnZkWEFzSUhzZ2NHeDFaMmx1Y3lCOUtUdGNjbHh1WEhKY2JpQWdZMjl1YzNRZ1czTjFZbXBsWTNRc0lHOXdMQ0IwWlhKdFhTQTlJSEoxYkdVZ1lYTWdVblZzWlR0Y2NseHVJQ0JwWmlBb2MzVmlhbVZqZENBOVBUMGdiblZzYkNCOGZDQnpkV0pxWldOMElEMDlQU0IxYm1SbFptbHVaV1FnZkh3Z0lXOXdLU0I3WEhKY2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9ZRWx1ZG1Gc2FXUWdVblZzWlZ4Y2JpUjdTbE5QVGk1emRISnBibWRwWm5rb2NuVnNaU3dnYm5Wc2JDd2dNaWw5WUNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCamIyNXpkQ0J5ZFd4bFVtVnpkV3gwSUQwZ2V5QndZWE56T2lCbVlXeHpaU0I5SUdGeklGQnNkV2RwYmtGeVozTTdYSEpjYmlBZ1kyOXVjM1FnZG1Gc2RXVWdQU0JtWVdOMGN6OHVXM04xWW1wbFkzUmRPMXh5WEc0Z0lHTnZibk4wSUhaaGJIVmxWSGx3WlNBOUlIUjVjR1Z2WmlCMllXeDFaU0JoY3lCV1lXeDFaVlI1Y0dVN1hISmNiaUFnWTI5dWMzUWdkR1Z5YlVselQySnFaV04wSUQwZ2RIbHdaVzltSUhSbGNtMGdQVDBnSjI5aWFtVmpkQ2M3WEhKY2JpQWdZMjl1YzNRZ2RHVnliVWx6VW5Wc1pTQTlJSFJsY20xSmMwOWlhbVZqZENBbUppQnBjMGR5YjNWd0tIUmxjbTBwTzF4eVhHNGdJR052Ym5OMElHWmhZM1JSZFdWeWVTQTlJSHRjY2x4dUlDQWdJSFpoYkhWbExGeHlYRzRnSUNBZ2RIbHdaVG9nZG1Gc2RXVlVlWEJsTEZ4eVhHNGdJQ0FnY1hWbGNubEdhV1ZzWkhNNklHNTFiR3hjY2x4dUlDQjlYSEpjYmx4eVhHNGdJQzh2SUdsbUlHWnBaV3hrY3lCamIyNTBZV2x1SUdSdmRDQnlaV1p6TENCc1pYUW5jeUJ6WldVZ2FXWWdkR2hsY21VbmN5QmhiaUJ2WW1wbFkzUWdkRzhnY1hWbGNubGNjbHh1SUNCcFppQW9jM1ZpYW1WamRDNXBibVJsZUU5bUtHUmxabUYxYkhSRVpXeHBiV2wwWlhJcElENGdNQ2tnZTF4eVhHNGdJQ0FnWTI5dWMzUWdabXhoZEVaaFkzUnpJRDBnWm14aGRIUmxia3RsZVhNb1ptRmpkSE1wTzF4eVhHNGdJQ0FnWTI5dWMzUWdjWFZsY25sV1lXeDFaU0E5SUdac1lYUkdZV04wYzF0emRXSnFaV04wWFR0Y2NseHVJQ0FnSUdOdmJuTjBJRzlpYWxSNWNHVWdQU0IwZVhCbGIyWWdjWFZsY25sV1lXeDFaVHRjY2x4dUlDQWdJR2xtSUNoeGRXVnllVlpoYkhWbEtTQjdYSEpjYmlBZ0lDQWdJR1poWTNSUmRXVnllUzUyWVd4MVpTQTlJSEYxWlhKNVZtRnNkV1U3WEhKY2JpQWdJQ0FnSUdaaFkzUlJkV1Z5ZVM1MGVYQmxJRDBnUVhKeVlYa3VhWE5CY25KaGVTaHhkV1Z5ZVZaaGJIVmxLU0EvSUNkaGNuSmhlU2NnT2lCdlltcFVlWEJsTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dVhISmNiaUFnYVdZZ0tIUmxjbTFKYzFKMWJHVXBJSHRjY2x4dUlDQWdJQzh2SUZSUFJFODZJR2x0Y0d4bGJXVnVkQ0J1WlhOMFpXUWdjblZzWlNCd2NtOWpaWE56YVc1bklHRm5ZV2x1YzNRZ1ptRmpkQ0JzWldGMlpYTmNjbHh1SUNCOVhISmNibHh5WEc0Z0lHTnZibk4wSUdselRuVnRaWEpwWXlBOUlHWmhZM1JSZFdWeWVTNTBlWEJsSUQwOVBTQW5ZbWxuYVc1MEp5QjhmQ0JtWVdOMFVYVmxjbmt1ZEhsd1pTQTlQVDBnSjI1MWJXSmxjaWM3WEhKY2JpQWdZMjl1YzNRZ2RHVnliVlpoYkhWbElEMGdhWE5PZFcxbGNtbGpJRDhnY0dGeWMyVkpiblFvZEdWeWJTd2dNVEFwSURvZ2RHVnliVHRjY2x4dUlDQmpiMjV6ZENCbVlXTjBWbUZzZFdVZ1BTQm1ZV04wVVhWbGNua3VkbUZzZFdVN1hISmNibHh5WEc0Z0lHbG1JQ2hwYm5SbGNtNWhiRTl3WlhKaGRHOXljMXR2Y0YwcElIdGNjbHh1SUNBZ0lISjFiR1ZTWlhOMWJIUXVjR0Z6Y3lBOUlHbHVkR1Z5Ym1Gc1QzQmxjbUYwYjNKelcyOXdYU2g3SUhaaGJIVmxPaUJtWVdOMFZtRnNkV1VzSUhSbGNtMDZJSFJsY20xV1lXeDFaU0I5S1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4dklHVjJZV3gxWVhSbElIVnpaWEp6SUc5d1pYSmhkRzl5Y3pzZ2QyaHBZMmdnWTJGdUlHOTJaWEp5YVdSbElHbHVkR1Z5Ym1Gc0lHOXdaWEpoZEc5eWN5QmNjbHh1SUNCcFppQW9iM0JsY21GMGIzSnpXMjl3WFNrZ2UxeHlYRzRnSUNBZ2NuVnNaVkpsYzNWc2RDNXdZWE56SUQwZ2IzQmxjbUYwYjNKelcyOXdYU2g3SUhaaGJIVmxPaUJtWVdOMFZtRnNkV1VzSUhSbGNtMDZJSFJsY20xV1lXeDFaU0I5S1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJ3Y205alpYTnpVbVZ6ZFd4MEtIdGNjbHh1SUNBZ0lDNHVMbkoxYkdWU1pYTjFiSFFzSUhKMWJHVXNJR1poWTNSekxDQndiSFZuYVc1elhISmNiaUFnZlNCaGN5QlFjbTlqWlhOelFYSm5jeWs3WEhKY2JuMWNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQmNjbHh1SUNvZ1NHVnlaU0JwY3lCellXMXdiR1VnYjJZZ2QyaGhkQ0JqYjI1emRISjFZM1JwYm1jZ1lTQnlkV3hsSUcxaGJuVmhiR3g1SUdGbllXbHVjM1FnWVNCemJXRnNiQ0J6WlhRZ2IyWWdabUZqZEhNZ2QyOTFiR1FnYkc5dmF5QnNhV3RsSUdsdUlHcGhkbUZ6WTNKcGNIUmNjbHh1SUNvZ1hISmNiaUFxSUdCZ1lIUnpYSEpjYmlBcUlDQWdhVzF3YjNKMElIc2djSEp2WTJWemMxSjFiR1Z6SUgwZ1puSnZiU0FuUUdsamNuVnNaWE12WTI5eVpTYzdYSEpjYmlBcUlGeHlYRzRnS2lBZ0lHTnZibk4wSUdaaFkzUnpJRDBnZXlCY2NseHVJQ29nSUNBZ0lHMWhjbXRsZERvZ0oyVnVMVlZUSnl3Z1hISmNiaUFxSUNBZ0lDQmpiMnh2Y2pvZ0oySnNkV1VuTENCY2NseHVJQ29nSUNBZ0lHUnBZVzFsZEdWeU9pQXhNQ0JjY2x4dUlDb2dJQ0I5TzF4eVhHNGdLaUJjY2x4dUlDb2dJQ0JqYjI1emRDQnlkV3hsY3lBOUlIc2dYSEpjYmlBcUlDQWdJQ0JoYm5rNklGdGNjbHh1SUNvZ0lDQWdJQ0FnV3lkdFlYSnJaWFFuTENBblpYRW5MQ0FuWlc0dFZWTW5YU3dnWEhKY2JpQXFJQ0FnSUNBZ0lGc25aR2xoYldWMFpYSW5MQ0FuWjNRbkxDQTFYVnh5WEc0Z0tpQWdJQ0FnWFNCY2NseHVJQ29nSUNCOU8xeHlYRzRnS2lCY2NseHVJQ29nSUNCamIyNXpkQ0J5WlhOMWJIUWdQU0J3Y205alpYTnpVblZzWlhNb1ptRmpkSE1zSUhKMWJHVnpLVHRjY2x4dUlDb2dJQ0JjY2x4dUlDb2dJQ0JwWmloeVpYTjFiSFJ6TG5CaGMzTXBlMXh5WEc0Z0tpQWdJQ0FnTHk4Z1pHOGdkR2hsSUhSb2FXNW5JSFJvWVhRZ2JtVmxaSE1nWkc5dVpWeHlYRzRnS2lBZ0lIMWNjbHh1SUNvZ0lGeHlYRzRnS2lCZ1lHQmNjbHh1SUNvdlhISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQndjbTlqWlhOelIzSnZkWEFvWm1GamRITTZJRVpoWTNSeklEMGdlMzBzSUhKMWJHVkhjbTkxY0RvZ1VuVnNaVWR5YjNWd0lEMGdlMzBzSUc5d2RHbHZibk02SUU5d2RHbHZibk1nUFNCN2ZTazZJRkJ5YjJObGMzTlNaWE4xYkhRZ2UxeHlYRzRnSUdOdmJuTjBJSHNnWVd4c0xDQmhibmtnZlNBOUlISjFiR1ZIY205MWNEdGNjbHh1SUNCamIyNXpkQ0I3SUhCc2RXZHBibk1nUFNCYlhTQjlJRDBnYjNCMGFXOXVjenRjY2x4dUlDQmpiMjV6ZENCaFkzUnBiMjRnUFNCeWRXeGxJRDArSUhCeWIyTmxjM05TZFd4bFQzSkhjbTkxY0NobVlXTjBjeXdnY25Wc1pTd2diM0IwYVc5dWN5azdYSEpjYmx4eVhHNGdJR2xtSUNoaGJHd3BJSHRjY2x4dUlDQWdJR052Ym5OMElHZHliM1Z3VW1WemRXeDBJRDBnWVd4c0xtMWhjQ2hoWTNScGIyNHBPMXh5WEc0Z0lDQWdZMjl1YzNRZ2NHRnpjeUE5SUdkeWIzVndVbVZ6ZFd4MExtVjJaWEo1S0hJZ1BUNGdjaTV3WVhOektUdGNjbHh1SUNBZ0lISmxkSFZ5YmlCd2NtOWpaWE56VW1WemRXeDBLSHNnY0dGemN5d2djblZzWlRvZ2NuVnNaVWR5YjNWd0xDQm1ZV04wY3l3Z2NHeDFaMmx1Y3l3Z1ozSnZkWEE2SUhzZ1lXeHNPaUJuY205MWNGSmxjM1ZzZEN3Z2NHRnpjeUI5SUgwcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2FXWWdLR0Z1ZVNrZ2UxeHlYRzRnSUNBZ1kyOXVjM1FnWjNKdmRYQlNaWE4xYkhRZ1BTQmhibmt1YldGd0tHRmpkR2x2YmlrN1hISmNiaUFnSUNCamIyNXpkQ0J3WVhOeklEMGdaM0p2ZFhCU1pYTjFiSFF1YzI5dFpTaHlJRDArSUhJdWNHRnpjeWs3WEhKY2JpQWdJQ0J5WlhSMWNtNGdjSEp2WTJWemMxSmxjM1ZzZENoN0lIQmhjM01zSUhKMWJHVTZJSEoxYkdWSGNtOTFjQ3dnWm1GamRITXNJSEJzZFdkcGJuTXNJR2R5YjNWd09pQjdJR0Z1ZVRvZ1ozSnZkWEJTWlhOMWJIUXNJSEJoYzNNZ2ZTQjlLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFJvY205M0lHNWxkeUJGY25KdmNpaGdTVzUyWVd4cFpDQlNkV3hsUjNKdmRYQmNYRzRrZTBwVFQwNHVjM1J5YVc1bmFXWjVLSEoxYkdWSGNtOTFjQ3dnYm5Wc2JDd2dNaWw5WUN3cE8xeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdZMjl1YzNRZ2RtVnlZbTl6WlZCc2RXZHBiaUE5SUNoN0lIQmhjM01zSUhKMWJHVXNJR2R5YjNWd0lIMDZJRkJzZFdkcGJrRnlaM01wSUQwK0lDaDdJSEJoYzNNc0lISjFiR1VzSUdkeWIzVndJSDBwTzF4eVhHNWNjbHh1Wlhod2IzSjBJR052Ym5OMElIQnliMk5sYzNOV1pYSmliM05sSUQwZ0tHWmhZM1J6T2lCR1lXTjBjeUE5SUh0OUxDQnlkV3hsUjNKdmRYQTZJRkoxYkdWSGNtOTFjQ3dnY0d4MVoybHVjem9nVW1WemRXeDBVR3gxWjJsdVcxMGdQU0JiWFNrZ1BUNGdLRnh5WEc0Z0lIQnliMk5sYzNOSGNtOTFjQ2htWVdOMGN5d2djblZzWlVkeWIzVndMQ0I3SUhCc2RXZHBibk02SUZ0MlpYSmliM05sVUd4MVoybHVMQ0F1TGk1d2JIVm5hVzV6WFNCOUtWeHlYRzRwTzF4eVhHNWNjbHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSFpoYkdsa1lYUmxVblZzWlNoeWRXeGxSM0p2ZFhBZ1BTQjdmU0JoY3lCU2RXeGxSM0p2ZFhBcE9pQlNkV3hsUlhaaGJIVmhkR2x2YmlCN1hISmNiaUFnWTI5dWMzUWdhWE5XWVd4cFpDQTlJR1poYkhObE8xeHlYRzRnSUdsbUlDZ2hjblZzWlVkeWIzVndLU0J5WlhSMWNtNGdLSHRjY2x4dUlDQWdJR2x6Vm1Gc2FXUXNYSEpjYmlBZ0lDQnRaWE56WVdkbE9pQW5UbThnVW5Wc1pTQkhjbTkxY0NCR2IzVnVaQ2RjY2x4dUlDQjlLVHRjY2x4dUlDQmpiMjV6ZENCN0lHRnNiQ3dnWVc1NUlIMGdQU0J5ZFd4bFIzSnZkWEE3WEhKY2JseHlYRzRnSUdOdmJuTjBJSFpoYkdsa1lYUmxVblZzWlZObGRDQTlJQ2h5ZFd4bGN6b2dVblZzWlhNcElEMCtJSHRjY2x4dUlDQWdJR2xtSUNoeWRXeGxjeTVzWlc1bmRHZ2dQVDA5SURBcElISmxkSFZ5YmlBb2UxeHlYRzRnSUNBZ0lDQnBjMVpoYkdsa0xGeHlYRzRnSUNBZ0lDQnRaWE56WVdkbE9pQW5UbThnVW5Wc1pTQkhjbTkxY0NCR2IzVnVaQ2RjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWm05eUlDaHNaWFFnY25Wc1pVbHVaR1Y0SUQwZ01Ec2djblZzWlVsdVpHVjRJRHdnY25Wc1pYTXViR1Z1WjNSb095QnlkV3hsU1c1a1pYZ3JLeWtnZTF4eVhHNGdJQ0FnSUNCamIyNXpkQ0J5ZFd4bFIzSnZkWEFnUFNCeWRXeGxjMXR5ZFd4bFNXNWtaWGhkSUdGeklGSjFiR1ZIY205MWNEdGNjbHh1SUNBZ0lDQWdhV1lnS0hKMWJHVkhjbTkxY0Q4dVlXeHNJSHg4SUhKMWJHVkhjbTkxY0Q4dVlXNTVLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJHbGtZWFJsVW5Wc1pTaHlkV3hsUjNKdmRYQXBPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQmpiMjV6ZENCeWRXeGxJRDBnY25Wc1pVZHliM1Z3SUdGeklGSjFiR1U3WEhKY2JpQWdJQ0FnSUdsbUlDZ2hRWEp5WVhrdWFYTkJjbkpoZVNoeWRXeGxLU0I4ZkNCeWRXeGxMbXhsYm1kMGFDQThJRElwSUhKbGRIVnliaUFvZTF4eVhHNGdJQ0FnSUNBZ0lHbHpWbUZzYVdRc1hISmNiaUFnSUNBZ0lDQWdiV1Z6YzJGblpUb2dKMDV2SUZKMWJHVWdSM0p2ZFhBZ1JtOTFibVFuWEhKY2JpQWdJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQWdJQ0FnWTI5dWMzUWdXMlpwWld4a0xDQnZjRjBnUFNCeWRXeGxPMXh5WEc0Z0lDQWdJQ0JwWmlBb0lXWnBaV3hrSUh4OElDRnZjQ2tnY21WMGRYSnVJQ2g3WEhKY2JpQWdJQ0FnSUNBZ2FYTldZV3hwWkN4Y2NseHVJQ0FnSUNBZ0lDQnRaWE56WVdkbE9pQW5TVzUyWVd4cFpDQlNkV3hsSjF4eVhHNGdJQ0FnSUNCOUtWeHlYRzRnSUNBZ0lDQnBaaUFvSVdsdWRHVnlibUZzVDNCbGNtRjBiM0pXWVd4MVpYTXVhVzVqYkhWa1pYTW9iM0FwS1NCeVpYUjFjbTRnS0h0Y2NseHVJQ0FnSUNBZ0lDQnBjMVpoYkdsa0xGeHlYRzRnSUNBZ0lDQWdJRzFsYzNOaFoyVTZJQ2RKYm5aaGJHbGtJRTl3WlhKaGRHOXlKMXh5WEc0Z0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhKbGRIVnliaUI3WEhKY2JpQWdJQ0FnSUdselZtRnNhV1E2SUhSeWRXVmNjbHh1SUNBZ0lIMDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBaaUFvWVd4c0lIeDhJR0Z1ZVNrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUhaaGJHbGtZWFJsVW5Wc1pWTmxkQ2hoYkd3Z2ZId2dZVzU1S1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUFvZTF4eVhHNGdJQ0FnYVhOV1lXeHBaQ3hjY2x4dUlDQWdJRzFsYzNOaFoyVTZJQ2RPYnlCUmRXRnVkR2xtYVdWeWN5QW9ZV3hzZkdGdWVTa2dSbTkxYm1RblhISmNiaUFnZlNrN1hISmNibjFjY2x4dVhISmNiaThxWEhKY2JtQmdZRnh5WEc1Y2NseHVZR0JnWEhKY2Jpb3ZYSEpjYm1WNGNHOXlkQ0JqYjI1emRDQndjbTlqWlhOelVuVnNaWE1nUFNCd2NtOWpaWE56UjNKdmRYQTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCd2NtOWpaWE56VW5Wc1pYTTdYSEpjYmlJc0lpSXNJaTh2SUhOMFlYSjBkWEJjYmk4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVMeThnVkdocGN5QmxiblJ5ZVNCdGIyUjFiR1VnYVhNZ2NtVm1aWEpsYm1ObFpDQmllU0J2ZEdobGNpQnRiMlIxYkdWeklITnZJR2wwSUdOaGJpZDBJR0psSUdsdWJHbHVaV1JjYm5aaGNpQmZYM2RsWW5CaFkydGZaWGh3YjNKMGMxOWZJRDBnZTMwN1hHNWZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZXMXdpTGk5emNtTXZhVzVrWlhndWRITmNJbDBvTUN3Z1gxOTNaV0p3WVdOclgyVjRjRzl5ZEhOZlh5azdYRzRpTENJaVhTd2libUZ0WlhNaU9sdGRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYWN0c0VkaXRvclByb3BzLCBJQ1J1bGVzRWRpdG9yUHJvcHMsIFJ1bGVFZGl0b3JQcm9wcywgUnVsZUdyb3VwRWRpdG9yUHJvcHMsIG9wTWFwLCBzYWZlUGFyc2UgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgT3BlcmF0b3IsIGludGVybmFsT3BlcmF0b3JWYWx1ZXMsIHByb2Nlc3NSdWxlT3JHcm91cCwgcHJvY2Vzc1ZlcmJvc2UsIFF1YW50aWZpZXJzLCBSdWxlLCBSdWxlR3JvdXAgfSBmcm9tICdAaWNydWxlcy9jb3JlJztcclxuaW1wb3J0ICcuL2VkaXRvclN0eWxlLmNzcyc7XHJcblxyXG5sZXQgbGFzdElkID0gbnVsbDtcclxuXHJcbmNvbnN0IFJ1bGVFZGl0b3IgPSAoe1xyXG4gIGZhY3RzID0ge30sXHJcbiAgcnVsZSA9IFsnJywgJ2VxJywgJyddLFxyXG4gIG9uVXBkYXRlID0gKHJ1bGUsIGluZGV4KSA9PiB7IH0sXHJcbiAgaW5kZXggPSAwLFxyXG4gIGRlcHRoID0gMFxyXG59OiBSdWxlRWRpdG9yUHJvcHMpID0+IHtcclxuICBjb25zdCBbZmFjdEtleXNdID0gdXNlU3RhdGUoT2JqZWN0LmtleXMoZmFjdHMpKTtcclxuICBjb25zdCBbbGl2ZVJ1bGUsIHNldEVkaXRSdWxlXSA9IHVzZVN0YXRlKHJ1bGUpO1xyXG4gIGNvbnN0IFtmYWN0S2V5LCBvcGVyYXRvciwgdGVybV0gPSBsaXZlUnVsZTtcclxuICBjb25zdCBrZXkgPSBgJHtpbmRleH0tJHtkZXB0aH1gO1xyXG4gIGNvbnN0IGxpc3RJZCA9IGAke2ZhY3RLZXlzfS0ke2tleX1gO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb25VcGRhdGUoW2ZhY3RLZXksIG9wZXJhdG9yLCB0ZXJtXSwgaW5kZXgpO1xyXG4gICAgXHJcbiAgfSwgW2ZhY3RLZXksIG9wZXJhdG9yLCB0ZXJtXSlcclxuXHJcbiAgY29uc3QgdmFsdWVJZCA9IGB2YWx1ZS0ke2tleX1gXHJcbiAgY29uc3QgdGVybUlkID0gYHRlcm0tJHtrZXl9YFxyXG5cclxuICBjb25zdCByZXN1bHQgPSBwcm9jZXNzUnVsZU9yR3JvdXAoZmFjdHMsIGxpdmVSdWxlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPSdydWxlLWVkaXRvcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZS1yZXN1bHRcIj57cmVzdWx0LnBhc3MgPyA8c3BhbiBjbGFzc05hbWU9XCJwYXNzXCI+JiMxMDAwMzs8L3NwYW4+IDogPHNwYW4gIGNsYXNzTmFtZT1cImZhaWxcIj4mI3gyNzE1Ozwvc3Bhbj59PC9kaXY+XHJcbiAgICAgIDxkaXYga2V5PXsncnVsZS1mYWN0J30gY2xhc3NOYW1lPVwicnVsZS1lbnRyeSBydWxlLWZhY3RcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPXt0ZXJtSWR9XHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9J29uJ1xyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtsYXN0SWQgPT09IHRlcm1JZH1cclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBsaXN0PXtsaXN0SWR9XHJcbiAgICAgICAgICB2YWx1ZT17ZmFjdEtleX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiB7XHJcbiAgICAgICAgICAgIGxhc3RJZCA9IGV2LnRhcmdldC5pZDtcclxuICAgICAgICAgICAgc2V0RWRpdFJ1bGUoW2V2LnRhcmdldC52YWx1ZSwgb3BlcmF0b3IsIHRlcm1dKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9e2xpc3RJZH0+XHJcbiAgICAgICAgICB7ZmFjdEtleXMubWFwKGtleSA9PiAoPG9wdGlvbiB2YWx1ZT17a2V5fSAvPikpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGtleT17J3J1bGUtb3AnfSBjbGFzc05hbWU9XCJydWxlLWVudHJ5IHJ1bGUtb3BcIj5cclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtvcGVyYXRvcn0gb25DaGFuZ2U9e2V2ID0+IHNldEVkaXRSdWxlKFtmYWN0S2V5LCAoZXYudGFyZ2V0LnZhbHVlIGFzIE9wZXJhdG9yKSwgdGVybV0pfT5cclxuICAgICAgICAgIHtpbnRlcm5hbE9wZXJhdG9yVmFsdWVzLm1hcChvcCA9PiA8b3B0aW9uIHZhbHVlPXtvcH0+e29wTWFwW29wXX08L29wdGlvbj4pfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBrZXk9eydydWxlLXRlcm0nfSBjbGFzc05hbWU9XCJydWxlLWVudHJ5IHJ1bGUtdGVybVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIGlkPXt2YWx1ZUlkfVxyXG4gICAgICAgICAgdmFsdWU9e3Rlcm19XHJcbiAgICAgICAgICBhdXRvRm9jdXM9e2xhc3RJZCA9PT0gdmFsdWVJZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiB7XHJcbiAgICAgICAgICAgIGxhc3RJZCA9IGV2LnRhcmdldC5pZDtcclxuICAgICAgICAgICAgc2V0RWRpdFJ1bGUoW2ZhY3RLZXksIG9wZXJhdG9yLCBldi50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgUnVsZUdyb3VwRWRpdG9yID0gKHtcclxuICBmYWN0cyA9IHt9LFxyXG4gIHJ1bGVzID0ge30sXHJcbiAgb25DaGFuZ2UgPSByID0+IHsgfSxcclxuICBkZXB0aCA9IDAsXHJcbiAgaW5kZXggPSAwLFxyXG4gIHNob3dGYWN0c0VkaXRvciA9IHRydWVcclxufTogUnVsZUdyb3VwRWRpdG9yUHJvcHMpID0+IHtcclxuICBjb25zdCBbbGl2ZUZhY3RzLCBzZXRMaXZlRmFjdHNdID0gdXNlU3RhdGUoZmFjdHMpO1xyXG4gIGNvbnN0IFtxdWFudGlmaWVyLCBzZXRRdWFudGlmaWVyXSA9IHVzZVN0YXRlKChydWxlcy5hbGwgPyAnYWxsJyA6ICdhbnknKSBhcyBRdWFudGlmaWVycyk7XHJcbiAgY29uc3QgW2xpdmVSdWxlcywgc2V0TGl2ZVJ1bGVzXSA9IHVzZVN0YXRlKHJ1bGVzKTtcclxuICBjb25zdCBbcnVsZUxpc3QsIHNldExpdmVSdWxlTGlzdF0gPSB1c2VTdGF0ZShbLi4uKGxpdmVSdWxlcy5hbGwgfHwgbGl2ZVJ1bGVzLmFueSldKTtcclxuICBjb25zdCBbdmVyc2Jvc2VSZXN1bHQsIHNldFZlcmJvc2VSZXN1bHRdID0gdXNlU3RhdGUoe30gYXMgYW55KTtcclxuICBjb25zdCBxdWFudGZpZXJzID0gWydhbGwnLCAnYW55J10gYXMgUXVhbnRpZmllcnNbXTtcclxuICBjb25zdCBlbXB0eVJ1bGUgPSBbJycsICdlcScsICcnXSBhcyBSdWxlO1xyXG4gIGNvbnN0IGVtcHR5R3JvdXAgPSB7IGFsbDogW2VtcHR5UnVsZV0gfSBhcyBSdWxlR3JvdXA7XHJcblxyXG4gIGNvbnN0IG9uUnVsZVVwZGF0ZSA9IChydWxlOiBSdWxlLCBpOiBudW1iZXIpID0+IHtcclxuICAgIHJ1bGVMaXN0W2ldID0gcnVsZTtcclxuICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQWRkUnVsZSA9IChpID0gbnVsbCBhcyBudW1iZXIpID0+IHtcclxuICAgIGlmIChpID09PSBudWxsKSB7XHJcbiAgICAgIHJ1bGVMaXN0LnB1c2goZW1wdHlSdWxlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBydWxlTGlzdC5zcGxpY2UoaSwgMCwgZW1wdHlSdWxlKTtcclxuICAgIH1cclxuICAgIHNldExpdmVSdWxlTGlzdChbLi4ucnVsZUxpc3RdKTtcclxuICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRHcm91cCA9IChpID0gbnVsbCBhcyBudW1iZXIpID0+IHtcclxuICAgIGlmIChpID09PSBudWxsKSB7XHJcbiAgICAgIHJ1bGVMaXN0LnB1c2goZW1wdHlHcm91cCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcnVsZUxpc3Quc3BsaWNlKGksIDAsIGVtcHR5R3JvdXApO1xyXG4gICAgfVxyXG4gICAgc2V0TGl2ZVJ1bGVMaXN0KFsuLi5ydWxlTGlzdF0pO1xyXG4gICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlUnVsZSA9IChpKSA9PiB7XHJcbiAgICBydWxlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICBzZXRMaXZlUnVsZXMoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSk7XHJcbiAgICBzZXRMaXZlUnVsZUxpc3QoWy4uLnJ1bGVMaXN0XSk7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZlcmJvc2VSZXN1bHRzID0gcHJvY2Vzc1ZlcmJvc2UoZmFjdHMsIGxpdmVSdWxlcyk7XHJcbiAgICBvbkNoYW5nZShsaXZlUnVsZXMsIDAsIGluZGV4KTtcclxuICB9LCBbSlNPTi5zdHJpbmdpZnkobGl2ZVJ1bGVzKV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMaXZlUnVsZXMoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSk7XHJcbiAgfSwgW0pTT04uc3RyaW5naWZ5KHJ1bGVMaXN0KV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMaXZlUnVsZXMoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSk7XHJcbiAgfSwgW3F1YW50aWZpZXJdKVxyXG5cclxuICBjb25zdCBpc1ZhbGlkUnVsZSA9IHByb2Nlc3NSdWxlT3JHcm91cChmYWN0cywgbGl2ZVJ1bGVzKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJydWxlLWdyb3VwLWVkaXRvclwiIGtleT17YGdyb3VwLWVkaXQtJHtpbmRleH0tJHtkZXB0aH1gfT5cclxuICAgICAge3Nob3dGYWN0c0VkaXRvciAmJiBkZXB0aCA9PT0gMCAmJiBpbmRleCA9PT0gMCAmJiA8ZGl2PlxyXG4gICAgICAgIDxGYWN0c0VkaXRvciBvYmplY3Q9e2xpdmVGYWN0c30gb25DaGFuZ2U9eyh2YWx1ZSwgaXNWYWxpZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgc2V0TGl2ZUZhY3RzKHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fSAvPlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2RlcHRoID09PSAwICYmIGluZGV4ID09PSAwICYmIDxkaXYgY2xhc3NOYW1lPSdmYWN0cy1zdGF0dXMnPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGlzVmFsaWRSdWxlID8gJ2dyZWVuJyA6ICdkYXJrcmVkJyB9fT5SdWxlIGlzIHtpc1ZhbGlkUnVsZSA/ICd2YWxpZCcgOiAnaW52YWxpZCd9LiA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogaXNWYWxpZFJ1bGU/LnBhc3MgPyAnZ3JlZW4nIDogJ2RhcmtyZWQnIH19PlJ1bGUgaXMge2lzVmFsaWRSdWxlPy5wYXNzID8gJ3Bhc3NpbmcnIDogJ2ZhaWxpbmcnfS4gPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGUtZW50cnkgcXVhbnRpZmllclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrLW1hcmtcIj5cclxuICAgICAgICAgICAge2lzVmFsaWRSdWxlPy5wYXNzID8gPHNwYW4gY2xhc3NOYW1lPSdwYXNzJz4mI3gyNjExOzwvc3Bhbj4gOiA8c3BhbiBjbGFzc05hbWU9J2ZhaWwnPiYjOTc0Njs8L3NwYW4+fSBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3F1YW50aWZpZXJ9IG9uQ2hhbmdlPXtldiA9PiBzZXRRdWFudGlmaWVyKGV2LnRhcmdldC52YWx1ZSBhcyBRdWFudGlmaWVycyl9PlxyXG4gICAgICAgICAgICAgIHtxdWFudGZpZXJzLm1hcChxID0+ICg8b3B0aW9uIHZhbHVlPXtxfT57cX08L29wdGlvbj4pKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtZ3JvdXBcIiB0aXRsZT0nYWRkIGEgZ3JvdXAnIG9uQ2xpY2s9eygpID0+IGFkZEdyb3VwKCl9PiYjeDI3OTU7PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGUtbGlzdFwiPlxyXG4gICAgICAgICAgICB7cnVsZUxpc3QubWFwKChydWxlRW50cnksIHJ1bGVJbmRleCkgPT4gQXJyYXkuaXNBcnJheShydWxlRW50cnkpID9cclxuICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9XCJlZGl0b3Itd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPFJ1bGVFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uUnVsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtKU09OLnN0cmluZ2lmeShydWxlRW50cnkpfS0ke3J1bGVJbmRleH0tJHtkZXB0aH1gfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ueyBydWxlOiBydWxlRW50cnksIGZhY3RzOiBsaXZlRmFjdHMsIGluZGV4OiBydWxlSW5kZXgsIGRlcHRoIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRydWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9J2FkZCBhIHJ1bGUnIG9uQ2xpY2s9eygpID0+IG9uQWRkUnVsZShydWxlSW5kZXggKyAxKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7cnVsZUluZGV4ID4gMCAmJiA8YnV0dG9uIHRpdGxlPSdyZW1vdmUgcnVsZScgb25DbGljaz17KCkgPT4gb25EZWxldGVSdWxlKHJ1bGVJbmRleCl9Pi08L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4pIDpcclxuICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9XCJlZGl0b3Itd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPFJ1bGVHcm91cEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake0pTT04uc3RyaW5naWZ5KHJ1bGVFbnRyeSl9LSR7cnVsZUluZGV4fS0ke2RlcHRofWB9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVFbnRyeSBhcyBSdWxlR3JvdXAsIGZhY3RzLCBpbmRleDogcnVsZUluZGV4LCBkZXB0aDogKGRlcHRoICsgMSksIG9uQ2hhbmdlOiAocnVsZUdyb3VwLCBpLCBwYXJlbnRJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZUxpc3RbcnVsZUluZGV4XSA9IHJ1bGVHcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgcGFyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlLWdyb3VwLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAge3J1bGVJbmRleCA+IDAgJiYgPGJ1dHRvbiBjbGFzc05hbWU9J3JlbW92ZS1ncm91cCcgdGl0bGU9J3JlbW92ZSBncm91cCcgb25DbGljaz17KCkgPT4gb25EZWxldGVSdWxlKHJ1bGVJbmRleCl9PiYjeDI3OTY7PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSUNSdWxlc0VkaXRvciA9ICh7XHJcbiAgcnVsZXMgPSB7fSxcclxuICBmYWN0cyA9IHt9LFxyXG4gIG9uQ2hhbmdlID0gKHIgPT4gbnVsbCksXHJcbiAgb3B0aW9ucyA9IHsgc2hvd0ZhY3RzRWRpdG9yOiB0cnVlIH1cclxufTogSUNSdWxlc0VkaXRvclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xpdmVSdWxlcywgc2V0TGl2ZVJ1bGVzXSA9IHVzZVN0YXRlKHJ1bGVzKTtcclxuICBjb25zdCB7IHNob3dGYWN0c0VkaXRvciB9ID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3Qgb25SdWxlQ2hhbmdlID0gKGxhdGVzdFJ1bGVzOiBSdWxlR3JvdXApID0+IHtcclxuICAgIG9uQ2hhbmdlKGxhdGVzdFJ1bGVzKTtcclxuICAgIHNldExpdmVSdWxlcyh7IC4uLmxhdGVzdFJ1bGVzIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJ1bGVHcm91cEVkaXRvciB7Li4ueyBydWxlczogbGl2ZVJ1bGVzLCBmYWN0cywgb25DaGFuZ2U6IG9uUnVsZUNoYW5nZSwgc2hvd0ZhY3RzRWRpdG9yIH19IC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmFjdHNFZGl0b3IgPSAoeyBvYmplY3QsIG9uQ2hhbmdlID0gKCkgPT4gbnVsbCB9OiBGYWN0c0VkaXRvclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZU9iamVjdCwgc2V0QWN0aXZlT2JqZWN0XSA9IHVzZVN0YXRlKEpTT04uc3RyaW5naWZ5KG9iamVjdCwgbnVsbCwgMikpO1xyXG4gIGNvbnN0IHBhcnNlZFZhbHVlID0gc2FmZVBhcnNlKGFjdGl2ZU9iamVjdCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFjdHMtc3RhdHVzJyBzdHlsZT17eyBjb2xvcjogcGFyc2VkVmFsdWUgPyAnZ3JlZW4nIDogJ2RhcmtyZWQnIH19PlxyXG4gICAgICAgIEZhY3RzIGFyZSB7cGFyc2VkVmFsdWUgPyAndmFsaWQnIDogJ2ludmFsaWQnfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgdGl0bGU9J2VudGVyIHlvdXIgZmFjdHMgaGVyZSdcclxuICAgICAgICBvbkNoYW5nZT17ZXYgPT4ge1xyXG4gICAgICAgICAgc2V0QWN0aXZlT2JqZWN0KGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBvbkNoYW5nZShldi50YXJnZXQudmFsdWUsIHBhcnNlZFZhbHVlICE9PSBmYWxzZSlcclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnLCBoZWlnaHQ6ICczMDBweCcgfX1cclxuICAgICAgICB2YWx1ZT17YWN0aXZlT2JqZWN0fT5cclxuICAgICAgPC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSUNSdWxlc0VkaXRvcjtcclxuIiwiaW1wb3J0IHsgdHlwZSBPcGVyYXRvciwgdHlwZSBSdWxlR3JvdXAsIGludGVybmFsT3BlcmF0b3JWYWx1ZXMsIHByb2Nlc3NSdWxlT3JHcm91cCwgUXVhbnRpZmllcnMsIFJ1bGUsIHByb2Nlc3NWZXJib3NlLCBmbGF0dGVuS2V5cyB9IGZyb20gJ0BpY3J1bGVzL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBvcE1hcCwgdHlwZSBJQ1J1bGVzRWRpdG9yUHJvcHMsIHR5cGUgUnVsZUVkaXRvclByb3BzLCB0eXBlIFJ1bGVHcm91cEVkaXRvclByb3BzLCB0eXBlIEZhY3RzRWRpdG9yUHJvcHMsIHNhZmVQYXJzZSB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBBdXRvQ29tcGxldGUsIEJ1dHRvbiwgQ2FyZCwgSW5wdXQsIFNlbGVjdCwgU3BhY2UsIFRhZywgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTaXplVHlwZSB9IGZyb20gJ2FudGQvZXMvY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0JztcclxuaW1wb3J0IHsgQ2hlY2tDaXJjbGVPdXRsaW5lZCwgTWludXNDaXJjbGVPdXRsaW5lZCwgUGx1c0NpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgJy4vZWRpdG9yU3R5bGUuY3NzJztcclxuXHJcbmxldCBsYXN0SWQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZhY3RzRWRpdG9yQW50ZCA9ICh7IG9iamVjdCwgb25DaGFuZ2UgPSAoKSA9PiBudWxsIH06IEZhY3RzRWRpdG9yUHJvcHMpID0+IHtcclxuICBjb25zdCBbYWN0aXZlT2JqZWN0LCBzZXRBY3RpdmVPYmplY3RdID0gdXNlU3RhdGUoSlNPTi5zdHJpbmdpZnkob2JqZWN0LCBudWxsLCAyKSk7XHJcbiAgY29uc3QgcGFyc2VkVmFsdWUgPSBzYWZlUGFyc2UoYWN0aXZlT2JqZWN0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzUwcHgnLCBtYXJnaW46ICc0cHgnIH19XHJcbiAgICAgIGhvdmVyYWJsZT17dHJ1ZX1cclxuICAgICAgdGl0bGU9e1xyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAocGFyc2VkVmFsdWUgPyAnZ3JlZW4nIDogJ2RhcmtyZWQnKSB9fT5cclxuICAgICAgICAgIEZhY3RzIGFyZSB7cGFyc2VkVmFsdWUgPyAndmFsaWQnIDogJ2ludmFsaWQnfS5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIH0+XHJcbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgIHJvd3M9ezI1fVxyXG4gICAgICAgIHRpdGxlPSdlbnRlciB5b3VyIGZhY3RzIGhlcmUnXHJcbiAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHtcclxuICAgICAgICAgIHNldEFjdGl2ZU9iamVjdChldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgb25DaGFuZ2UoZXYudGFyZ2V0LnZhbHVlLCBzYWZlUGFyc2UoZXYudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbHVlPXthY3RpdmVPYmplY3R9XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUnVsZUVkaXRvckFudGQgPSAoe1xyXG4gIGZhY3RzID0ge30sXHJcbiAgcnVsZSA9IFsnJywgJ2VxJywgJyddLFxyXG4gIG9uVXBkYXRlID0gKHJ1bGUsIGluZGV4KSA9PiB7IH0sXHJcbiAgaW5kZXggPSAwLFxyXG4gIGRlcHRoID0gMFxyXG59OiBSdWxlRWRpdG9yUHJvcHMpID0+IHtcclxuICAvLyBjb25zdCBbcnVsZUZhY3RzLCBzZXRSdWxlRmFjdHNdID0gdXNlU3RhdGUoZmFjdHMpO1xyXG4gIGNvbnN0IFt1c2VyU2l6ZSwgc2V0VXNlclNpemVdID0gdXNlU3RhdGU8U2l6ZVR5cGU+KCdtaWRkbGUnKTtcclxuICBjb25zdCBbZmFjdEtleXMsIHNldEZhY3RLZXlzXSA9IHVzZVN0YXRlKE9iamVjdC5lbnRyaWVzKGZsYXR0ZW5LZXlzKGZhY3RzKSkpO1xyXG4gIGNvbnN0IFtsaXZlUnVsZSwgc2V0RWRpdFJ1bGVdID0gdXNlU3RhdGUocnVsZSk7XHJcbiAgY29uc3QgW2ZhY3RLZXksIG9wZXJhdG9yLCB0ZXJtXSA9IGxpdmVSdWxlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmFjdEtleXMoT2JqZWN0LmVudHJpZXMoZmxhdHRlbktleXMoZmFjdHMpKSk7XHJcbiAgfSwgW0pTT04uc3RyaW5naWZ5KGZhY3RzKV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvblVwZGF0ZShbZmFjdEtleSwgb3BlcmF0b3IsIHRlcm1dLCBpbmRleCk7XHJcbiAgfSwgW2ZhY3RLZXksIG9wZXJhdG9yLCB0ZXJtXSlcclxuXHJcbiAgY29uc3Qga2V5ID0gYCR7aW5kZXh9LSR7ZGVwdGh9YDtcclxuICBjb25zdCB2YWx1ZUlkID0gYHZhbHVlLSR7a2V5fWBcclxuICBjb25zdCB0ZXJtSWQgPSBgdGVybS0ke2tleX1gXHJcbiAgY29uc3QgcmVzdWx0ID0gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzLCBsaXZlUnVsZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTcGFjZSBrZXk9e2tleX0gZGlyZWN0aW9uPSdob3Jpem9udGFsJz5cclxuICAgICAgPFRvb2x0aXAgdGl0bGU9e2Ake3Jlc3VsdC5wYXNzID8gJ1J1bGUgUGFzc2VkJyA6ICdSdWxlIEZhaWxlZCd9IHdpdGggcHJvdmlkZWQgZmFjdHNgfT5cclxuICAgICAgICA8VGFnIGljb249ezxDaGVja0NpcmNsZU91dGxpbmVkIC8+fSBjb2xvcj17cmVzdWx0LnBhc3MgPyAnZ3JlZW4nIDogJ3JlZCd9IC8+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPGRpdiBrZXk9eydydWxlLWZhY3QnfSA+XHJcbiAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX1cclxuICAgICAgICAgIHNpemU9e3VzZXJTaXplfVxyXG4gICAgICAgICAgaWQ9e3Rlcm1JZH1cclxuICAgICAgICAgIGF1dG9Gb2N1cz17bGFzdElkID09PSB0ZXJtSWR9XHJcbiAgICAgICAgICBvcHRpb25zPXtmYWN0S2V5cy5tYXAoKFtrZXldKSA9PiAoeyB2YWx1ZToga2V5IH0pKX1cclxuICAgICAgICAgIHZhbHVlPXtmYWN0S2V5fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgbGFzdElkID0gdGVybUlkXHJcbiAgICAgICAgICAgIHNldEVkaXRSdWxlKFt2YWx1ZS50b1N0cmluZygpLCBvcGVyYXRvciwgdGVybV0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBrZXk9eydydWxlLW9wJ30+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2Ake2ZhY3RLZXl9ICR7b3BNYXBbb3BlcmF0b3JdfSAke3Rlcm19YH0+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTQ1cHgnIH19XHJcbiAgICAgICAgICAgIHNpemU9e3VzZXJTaXplfVxyXG4gICAgICAgICAgICB2YWx1ZT17b3BlcmF0b3J9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiBzZXRFZGl0UnVsZShbZmFjdEtleSwgKGV2IGFzIE9wZXJhdG9yKSwgdGVybV0pfVxyXG4gICAgICAgICAgICBvcHRpb25zPXtpbnRlcm5hbE9wZXJhdG9yVmFsdWVzLm1hcChvcCA9PiAoeyBsYWJlbDogb3BNYXBbb3BdLCB2YWx1ZTogb3AgfSkpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGtleT17J3J1bGUtdGVybSd9PlxyXG4gICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICBzaXplPXt1c2VyU2l6ZX1cclxuICAgICAgICAgIGlkPXt2YWx1ZUlkfVxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtsYXN0SWQgPT09IHZhbHVlSWR9XHJcbiAgICAgICAgICBvcHRpb25zPXtmYWN0S2V5cy5tYXAoKFssIHZhbHVlXSkgPT4gKHsgdmFsdWU6IHZhbHVlLnRvU3RyaW5nKCkgfSkpfVxyXG4gICAgICAgICAgdmFsdWU9e3Rlcm19XHJcbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSB2YWx1ZUlkXHJcbiAgICAgICAgICAgIHNldEVkaXRSdWxlKFtmYWN0S2V5LCBvcGVyYXRvciwgdmFsdWVdKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3BhY2U+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBSdWxlR3JvdXBFZGl0b3JBbnRkID0gKHtcclxuICBmYWN0cyA9IHt9LFxyXG4gIHJ1bGVzID0ge30sXHJcbiAgb25DaGFuZ2UgPSByID0+IHsgfSxcclxuICBkZXB0aCA9IDAsXHJcbiAgaW5kZXggPSAwLFxyXG4gIHNob3dGYWN0c0VkaXRvciA9IHRydWUsXHJcbiAgZXh0cmEgPSAoKSA9PiBudWxsLFxyXG4gIEZhY3RzRWRpdG9yID0gRmFjdHNFZGl0b3JBbnRkXHJcbn06IFJ1bGVHcm91cEVkaXRvclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJTaXplLCBzZXRVc2VyU2l6ZV0gPSB1c2VTdGF0ZTxTaXplVHlwZT4oJ21pZGRsZScpO1xyXG4gIGNvbnN0IFtsaXZlRmFjdHMsIHNldExpdmVGYWN0c10gPSB1c2VTdGF0ZShmYWN0cyk7XHJcbiAgY29uc3QgW3F1YW50aWZpZXIsIHNldFF1YW50aWZpZXJdID0gdXNlU3RhdGUoKHJ1bGVzLmFsbCA/ICdhbGwnIDogJ2FueScpIGFzIFF1YW50aWZpZXJzKTtcclxuICBjb25zdCBbbGl2ZVJ1bGVzLCBzZXRMaXZlUnVsZXNdID0gdXNlU3RhdGUocnVsZXMpO1xyXG4gIGNvbnN0IFtydWxlTGlzdCwgc2V0TGl2ZVJ1bGVMaXN0XSA9IHVzZVN0YXRlKFsuLi4obGl2ZVJ1bGVzLmFsbCB8fCBsaXZlUnVsZXMuYW55KV0pO1xyXG4gIGNvbnN0IFt2ZXJzYm9zZVJlc3VsdCwgc2V0VmVyYm9zZVJlc3VsdF0gPSB1c2VTdGF0ZSh7fSBhcyBhbnkpO1xyXG4gIGNvbnN0IHF1YW50ZmllcnMgPSBbJ2FsbCcsICdhbnknXSBhcyBRdWFudGlmaWVyc1tdO1xyXG4gIGNvbnN0IGVtcHR5UnVsZSA9IFsnJywgJ2VxJywgJyddIGFzIFJ1bGU7XHJcbiAgY29uc3QgZW1wdHlHcm91cCA9IHsgYWxsOiBbZW1wdHlSdWxlXSB9IGFzIFJ1bGVHcm91cDtcclxuXHJcbiAgY29uc3Qgb25SdWxlVXBkYXRlID0gKHJ1bGU6IFJ1bGUsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgcnVsZUxpc3RbaV0gPSBydWxlO1xyXG4gICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BZGRSdWxlID0gKGkgPSBudWxsIGFzIG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGkgPT09IG51bGwpIHtcclxuICAgICAgcnVsZUxpc3QucHVzaChlbXB0eVJ1bGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJ1bGVMaXN0LnNwbGljZShpLCAwLCBlbXB0eVJ1bGUpO1xyXG4gICAgfVxyXG4gICAgc2V0TGl2ZVJ1bGVMaXN0KFsuLi5ydWxlTGlzdF0pO1xyXG4gICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEdyb3VwID0gKGkgPSBudWxsIGFzIG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGkgPT09IG51bGwpIHtcclxuICAgICAgcnVsZUxpc3QucHVzaChlbXB0eUdyb3VwKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBydWxlTGlzdC5zcGxpY2UoaSwgMCwgZW1wdHlHcm91cCk7XHJcbiAgICB9XHJcbiAgICBzZXRMaXZlUnVsZUxpc3QoWy4uLnJ1bGVMaXN0XSk7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGVSdWxlID0gKGkpID0+IHtcclxuICAgIHJ1bGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgIHNldExpdmVSdWxlcyh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9KTtcclxuICAgIHNldExpdmVSdWxlTGlzdChbLi4ucnVsZUxpc3RdKTtcclxuICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIGluZGV4KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmVyYm9zZVJlc3VsdHMgPSBwcm9jZXNzVmVyYm9zZShmYWN0cywgbGl2ZVJ1bGVzKTtcclxuICAgIG9uQ2hhbmdlKGxpdmVSdWxlcywgMCwgaW5kZXgpO1xyXG4gIH0sIFtKU09OLnN0cmluZ2lmeShsaXZlUnVsZXMpXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExpdmVSdWxlcyh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9KTtcclxuICB9LCBbSlNPTi5zdHJpbmdpZnkocnVsZUxpc3QpXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExpdmVSdWxlcyh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9KTtcclxuICB9LCBbcXVhbnRpZmllcl0pXHJcblxyXG4gIGNvbnN0IGlzVmFsaWRSdWxlID0gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzLCBsaXZlUnVsZXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19IGtleT17YGdyb3VwLWVkaXQtJHtpbmRleH0tJHtkZXB0aH1gfT5cclxuICAgICAge3Nob3dGYWN0c0VkaXRvciAmJiBkZXB0aCA9PT0gMCAmJiBpbmRleCA9PT0gMCAmJiBGYWN0c0VkaXRvciAmJiAoXHJcbiAgICAgICAgPEZhY3RzRWRpdG9yIG9iamVjdD17bGl2ZUZhY3RzfSBvbkNoYW5nZT17KHN0cmluZ1ZhbHVlLCBwYXJzZWRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNWYWxpZCA9ICEhcGFyc2VkVmFsdWU7XHJcbiAgICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBzZXRMaXZlRmFjdHMocGFyc2VkVmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNHB4JyB9fVxyXG4gICAgICAgIGhvdmVyYWJsZT17dHJ1ZX1cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICBkZXB0aCA9PT0gMCAmJiBpbmRleCA9PT0gMCAmJiA8U3BhY2U+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAoaXNWYWxpZFJ1bGUgPyAnZ3JlZW4nIDogJ2RhcmtyZWQnKSB9fSA+UnVsZSBpcyB7aXNWYWxpZFJ1bGUgPyAndmFsaWQnIDogJ2ludmFsaWQnfS48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAoaXNWYWxpZFJ1bGUgPyAnZ3JlZW4nIDogJ2RhcmtyZWQnKSB9fSA+UnVsZSBpcyB7aXNWYWxpZFJ1bGU/LnBhc3MgPyAncGFzc2luZycgOiAnZmFpbGluZyd9Ljwvc3Bhbj5cclxuICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcycHggZG90dGVkICNjY2MnLCBwYWRkaW5nOiAnNHB4JyB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTZWxlY3Qgc2l6ZT17dXNlclNpemV9IHZhbHVlPXtxdWFudGlmaWVyfSBvcHRpb25zPXtxdWFudGZpZXJzLm1hcChxID0+ICh7IGxhYmVsOiBxLCB2YWx1ZTogcSB9KSl9IG9uQ2hhbmdlPXtldiA9PiBzZXRRdWFudGlmaWVyKGV2IGFzIFF1YW50aWZpZXJzKX0gc3R5bGU9e3sgd2lkdGg6ICc3MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9e3VzZXJTaXplfSBpY29uPXs8UGx1c0NpcmNsZU91dGxpbmVkIC8+fSB0aXRsZT0nYWRkIGEgZ3JvdXAnIG9uQ2xpY2s9eygpID0+IGFkZEdyb3VwKCl9IC8+XHJcbiAgICAgICAgICAgIHtleHRyYSAmJiBleHRyYSgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cnVsZUxpc3QubWFwKChydWxlRW50cnksIHJ1bGVJbmRleCkgPT4gQXJyYXkuaXNBcnJheShydWxlRW50cnkpID9cclxuICAgICAgICAgICAgICAoPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxyXG4gICAgICAgICAgICAgICAgPFJ1bGVFZGl0b3JBbnRkXHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblJ1bGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7SlNPTi5zdHJpbmdpZnkocnVsZUVudHJ5KX0tJHtydWxlSW5kZXh9LSR7ZGVwdGh9YH1cclxuICAgICAgICAgICAgICAgICAgey4uLnsgcnVsZTogcnVsZUVudHJ5LCBmYWN0czogbGl2ZUZhY3RzLCBpbmRleDogcnVsZUluZGV4LCBkZXB0aCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgZmxleFdyYXA6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17dXNlclNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17PFBsdXNDaXJjbGVPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT0nYWRkIGEgcnVsZSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFJ1bGUocnVsZUluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtydWxlSW5kZXggPiAwICYmIDxCdXR0b24gc2l6ZT17dXNlclNpemV9IGljb249ezxNaW51c0NpcmNsZU91dGxpbmVkIC8+fSB0aXRsZT0ncmVtb3ZlIHJ1bGUnIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUnVsZShydWxlSW5kZXgpfSAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PikgOlxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIDxSdWxlR3JvdXBFZGl0b3JBbnRkXHJcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7SlNPTi5zdHJpbmdpZnkocnVsZUVudHJ5KX0tJHtydWxlSW5kZXh9LSR7ZGVwdGh9YH1cclxuICAgICAgICAgICAgICAgICAgZXh0cmE9eyhydWxlSW5kZXggPiAwID8gKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3VzZXJTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J3JlbW92ZSBncm91cCdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUnVsZShydWxlSW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PE1pbnVzQ2lyY2xlT3V0bGluZWQgLz59IC8+KSA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBydWxlRW50cnkgYXMgUnVsZUdyb3VwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhY3RzOiBsaXZlRmFjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHJ1bGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aDogKGRlcHRoICsgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChydWxlR3JvdXAsIGksIHBhcmVudEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlTGlzdFtydWxlSW5kZXhdID0gcnVsZUdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBwYXJlbnRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSUNSdWxlc0VkaXRvckFudGQgPSAoe1xyXG4gIHJ1bGVzID0ge30sXHJcbiAgZmFjdHMgPSB7fSxcclxuICBvbkNoYW5nZSA9IChyID0+IG51bGwpLFxyXG4gIG9wdGlvbnMgPSB7XHJcbiAgICBzaG93RmFjdHNFZGl0b3I6IHRydWUsXHJcbiAgICBmYWN0c0VkaXRvcjogRmFjdHNFZGl0b3JBbnRkXHJcbiAgfVxyXG59OiBJQ1J1bGVzRWRpdG9yUHJvcHMpID0+IHtcclxuICBjb25zdCBbbGl2ZVJ1bGVzLCBzZXRMaXZlUnVsZXNdID0gdXNlU3RhdGUocnVsZXMpO1xyXG4gIGNvbnN0IHsgc2hvd0ZhY3RzRWRpdG9yIH0gPSBvcHRpb25zO1xyXG5cclxuICBjb25zdCBvblJ1bGVDaGFuZ2UgPSAobGF0ZXN0UnVsZXM6IFJ1bGVHcm91cCkgPT4ge1xyXG4gICAgb25DaGFuZ2UobGF0ZXN0UnVsZXMpO1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgLi4ubGF0ZXN0UnVsZXMgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UnVsZUdyb3VwRWRpdG9yQW50ZCB7Li4ueyBydWxlczogbGl2ZVJ1bGVzLCBmYWN0cywgb25DaGFuZ2U6IG9uUnVsZUNoYW5nZSwgc2hvd0ZhY3RzRWRpdG9yLCBGYWN0c0VkaXRvcjogb3B0aW9ucy5mYWN0c0VkaXRvciB9fSAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSUNSdWxlc0VkaXRvckFudGQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvclN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdG9yU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IHsgSUNSdWxlc0VkaXRvckFudGQgfSBmcm9tICcuL1J1bGVFZGl0b3JBbnRkJztcclxuZXhwb3J0IHsgRmFjdHNFZGl0b3JBbnRkIH0gZnJvbSAnLi9SdWxlRWRpdG9yQW50ZCc7XHJcbmltcG9ydCB7IFJ1bGUsIFJ1bGVHcm91cCB9IGZyb20gJ0BpY3J1bGVzL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ1J1bGVzRWRpdG9yIH0gZnJvbSAnLi9SdWxlRWRpdG9yJztcclxuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJQ1J1bGVzRWRpdG9yO1xyXG5leHBvcnQgeyBcclxuICBJQ1J1bGVzRWRpdG9yLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmxhdHRlbktleXMgPSAob2JqOiBhbnksIHByZWZpeCA9ICcnKTogYW55ID0+IHtcclxuICBsZXQgcmVzdWx0ID0ge307XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXN1bHQgPSB7IC4uLnJlc3VsdCwgLi4uZmxhdHRlbktleXMob2JqW2tleV0sIGAke3ByZWZpeH0ke2tleX0uYCkgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFtgJHtwcmVmaXh9JHtrZXl9YF0gPSBvYmpba2V5XTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhZmVQYXJzZSA9ICh0ZXh0SnNvbjogc3RyaW5nLCBzaG93RXJyb3IgPSBmYWxzZSk6IGFueSB8IGJvb2xlYW4gPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0SnNvbik7XHJcbiAgfVxyXG4gIGNhdGNoIChlKSB7XHJcbiAgICBpZiAoc2hvd0Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3BNYXAgPSB7XHJcbiAgZXE6ICdlcXVhbHMnLFxyXG4gIG5lcTogJ25vdCBlcXVhbHMnLFxyXG4gIGd0OiAnPiBncmVhdGVyIHRoYW4nLFxyXG4gIGx0OiAnPCBsZXNzIHRoYW4nLFxyXG4gIGx0ZTogJzw9IGxlc3Mgb3IgZXF1YWwnLFxyXG4gIGd0ZTogJz49IGdyZWF0ZXIgb3IgZXF1YWwnLFxyXG4gIGhhczogJ2NvbnRhaW5zJyxcclxuICBuaGFzOiAnbm90IGNvbnRhaW5zJyxcclxuICBpbjogJ2luIHRlcm0nLFxyXG4gIG5pdDogJ25vdCBpbiB0ZXJtJ1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSdWxlRWRpdG9yUHJvcHMge1xyXG4gIGZhY3RzPzogYW55O1xyXG4gIHJ1bGU/OiBSdWxlO1xyXG4gIG9uVXBkYXRlPzogKHI6IFJ1bGUsIGk6IG51bWJlcikgPT4gdm9pZDtcclxuICBvbkRlbGV0ZVJ1bGU/OiAobnVtYmVyKSA9PiB2b2lkO1xyXG4gIGluZGV4PzogbnVtYmVyO1xyXG4gIGRlcHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVHcm91cEVkaXRvclByb3BzIHtcclxuICBmYWN0cz86IGFueTtcclxuICBydWxlcz86IFJ1bGVHcm91cDtcclxuICBvbkNoYW5nZT86IChydWxlczogUnVsZUdyb3VwLCBpbmRleDogbnVtYmVyLCBwYXJlbnRJbmRleD86IG51bWJlcikgPT4gdm9pZDtcclxuICBkZXB0aD86IG51bWJlcjtcclxuICBpbmRleD86IG51bWJlcjtcclxuICBzaG93RmFjdHNFZGl0b3I/OiBib29sZWFuO1xyXG4gIGV4dHJhPzogKCkgPT4gSlNYLkVsZW1lbnQgfCBudWxsO1xyXG4gIEZhY3RzRWRpdG9yPzogRkM8RmFjdHNFZGl0b3JQcm9wcz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZXNFZGl0b3JPcHRpb25zIHtcclxuICBzaG93RmFjdHNFZGl0b3I/OiBib29sZWFuO1xyXG4gIGZhY3RzRWRpdG9yPzogRkM8RmFjdHNFZGl0b3JQcm9wcz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjdHNFZGl0b3JQcm9wcyB7XHJcbiAgb2JqZWN0OiBhbnk7XHJcbiAgb25DaGFuZ2U/OiAoc3RyaW5nVmFsdWU6IHN0cmluZywgcGFyc2VkVmFsdWU6IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ1J1bGVzRWRpdG9yUHJvcHMge1xyXG4gIHJ1bGVzOiBSdWxlR3JvdXA7XHJcbiAgZmFjdHM6IGFueTtcclxuICBvbkNoYW5nZT86IChydWxlczogUnVsZUdyb3VwKSA9PiB2b2lkO1xyXG4gIG9wdGlvbnM/OiBSdWxlc0VkaXRvck9wdGlvbnM7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9