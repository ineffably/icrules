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
    return ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'row' }, children: [showFactsEditor && depth === 0 && index === 0 &&
                (0, jsx_runtime_1.jsx)(FactsEditor, { object: liveFacts, onChange: (stringValue, parsedValue) => {
                        const isValid = !!parsedValue;
                        if (isValid) {
                            setLiveFacts(parsedValue);
                        }
                    } }), (0, jsx_runtime_1.jsx)(antd_1.Card, { style: { marginTop: '4px' }, hoverable: true, title: depth === 0 && index === 0 && (0, jsx_runtime_1.jsxs)(antd_1.Space, { children: [(0, jsx_runtime_1.jsxs)("span", { style: { color: (isValidRule ? 'green' : 'darkred') }, children: ["Rule is ", isValidRule ? 'valid' : 'invalid', "."] }), (0, jsx_runtime_1.jsxs)("span", { style: { color: (isValidRule ? 'green' : 'darkred') }, children: ["Rule is ", isValidRule?.pass ? 'passing' : 'failing', "."] })] }), children: (0, jsx_runtime_1.jsxs)("div", { style: { border: '2px dotted #ccc', padding: '4px' }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(antd_1.Select, { size: userSize, value: quantifier, options: quantfiers.map(q => ({ label: q, value: q })), onChange: ev => setQuantifier(ev), style: { width: '70px' } }), (0, jsx_runtime_1.jsx)(antd_1.Button, { size: userSize, icon: (0, jsx_runtime_1.jsx)(icons_1.PlusCircleOutlined, {}), title: 'add a group', onClick: () => addGroup() }), extra && extra()] }), (0, jsx_runtime_1.jsx)("div", { children: ruleList.map((ruleEntry, ruleIndex) => Array.isArray(ruleEntry) ?
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.opMap = exports.safeParse = exports.flattenKeys = exports.ICRulesEditor = exports.ICRulesEditorAntd = void 0;
var RuleEditorAntd_1 = __webpack_require__(/*! ./RuleEditorAntd */ "./src/RuleEditorAntd.tsx");
Object.defineProperty(exports, "ICRulesEditorAntd", ({ enumerable: true, get: function () { return RuleEditorAntd_1.ICRulesEditorAntd; } }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0VBQW9FOztBQUVwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZCxXQUFXLGVBQWU7QUFDMUIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjs7QUFF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QUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL2VkaXRvclN0eWxlLmNzcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvZWRpdG9yU3R5bGUuY3NzP2U1ZmUiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvUnVsZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL1J1bGVFZGl0b3JBbnRkLnRzeCIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uL2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovL2VkaXRvci9leHRlcm5hbCB1bWQgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovL2VkaXRvci9leHRlcm5hbCB1bWQgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vZWRpdG9yL2V4dGVybmFsIHVtZCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiYW50ZFwiLCBcIkBhbnQtZGVzaWduL2ljb25zXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImVkaXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlZGl0b3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcImFudGRcIl0sIHJvb3RbXCJAYW50LWRlc2lnbi9pY29uc1wiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fKSA9PiB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ydWxlLWdyb3VwLWVkaXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlZWU7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2JiYjtcclxuICBwYWRkaW5nOiAycHggMDtcclxufVxyXG5cclxuLnJ1bGVzIHtcclxuICBtYXJnaW46IDBweCAwcHg7XHJcbiAgcGFkZGluZzogMnB4IDJweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSB7XHJcbiAgbWFyZ2luOiAycHggMHB4O1xyXG4gIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3QgLmVkaXRvci13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3QgLmFkZHJ1bGUge1xyXG4gIG1hcmdpbjogNnB4IDVweCAwcHggMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3QgLnJlbW92ZS1ncm91cC1jZWxsIHtcclxuICBtYXJnaW46IDE0cHggNXB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5ydWxlLWVudHJ5IG9wdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSBvcHRpb24ge1xyXG4gIGhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLnJ1bGUtcmVzdWx0IHtcclxuICB3aWR0aDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW46IDRweCA3cHggMCA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uY2hlY2stbWFyayB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiAxcHggOHB4IDAgMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNoZWNrLW1hcmsgLnBhc3MsIC5ydWxlLXJlc3VsdCAucGFzcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uY2hlY2stbWFyayAuZmFpbCwgLnJ1bGUtcmVzdWx0IC5mYWlsIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuLnJ1bGUtZW50cnkgLmF1dG8tc2VsZWN0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlZWU7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJ1bGUtbGlzdCAucnVsZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnJ1bGUtbGlzdCAuZWRpdC1ydWxlLWJ1dHRvbnMge1xyXG4gIG1hcmdpbjogNXB4IDVweCAwcHggMHB4O1xyXG59XHJcblxyXG4ucnVsZS1saXN0IC5lZGl0LWdyb3VwLWJ1dHRvbnMge1xyXG4gIG1hcmdpbjogNXB4IDVweCAwcHggMHB4O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSBzZWxlY3QsXHJcbi5ydWxlLWVudHJ5IGlucHV0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAycHggNHB4O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSBzZWxlY3Qge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGhlaWdodDogMjZweDtcclxufVxyXG5cclxuLnJ1bGUtZW50cnkgc2VsZWN0OmZvY3VzLFxyXG4ucnVsZS1lbnRyeSBpbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnJ1bGUtZWRpdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWVlO1xyXG59XHJcblxyXG4uZmFjdHMtc3RhdHVzIHtcclxuICBwYWRkaW5nOiAycHg7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQtZ3JvdXAsIGJ1dHRvbi5yZW1vdmUtZ3JvdXAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luOiAwcHggMnB4O1xyXG59XHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lZGl0b3JTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtNQUFrTTtFQUNsTSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucnVsZS1ncm91cC1lZGl0b3Ige1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWVlZTtcXHJcXG4gIG1hcmdpbjogMnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2JiYjtcXHJcXG4gIHBhZGRpbmc6IDJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZXMge1xcclxcbiAgbWFyZ2luOiAwcHggMHB4O1xcclxcbiAgcGFkZGluZzogMnB4IDJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVudHJ5IHtcXHJcXG4gIG1hcmdpbjogMnB4IDBweDtcXHJcXG4gIHBhZGRpbmc6IDJweCA0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1saXN0IC5lZGl0b3Itd3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtbGlzdCAuYWRkcnVsZSB7XFxyXFxuICBtYXJnaW46IDZweCA1cHggMHB4IDBweDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWxpc3QgLnJlbW92ZS1ncm91cC1jZWxsIHtcXHJcXG4gIG1hcmdpbjogMTRweCA1cHggMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgb3B0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgb3B0aW9uIHtcXHJcXG4gIGhlaWdodDogMjJweDtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1yZXN1bHQge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luOiA0cHggN3B4IDAgOHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1tYXJrIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbjogMXB4IDhweCAwIDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLW1hcmsgLnBhc3MsIC5ydWxlLXJlc3VsdCAucGFzcyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1tYXJrIC5mYWlsLCAucnVsZS1yZXN1bHQgLmZhaWwge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcclxcbiAgY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVudHJ5IC5hdXRvLXNlbGVjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1saXN0IC5ydWxlLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtbGlzdCAuZWRpdC1ydWxlLWJ1dHRvbnMge1xcclxcbiAgbWFyZ2luOiA1cHggNXB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWxpc3QgLmVkaXQtZ3JvdXAtYnV0dG9ucyB7XFxyXFxuICBtYXJnaW46IDVweCA1cHggMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgc2VsZWN0LFxcclxcbi5ydWxlLWVudHJ5IGlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgcGFkZGluZzogMnB4IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgc2VsZWN0IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1lbnRyeSBzZWxlY3Q6Zm9jdXMsXFxyXFxuLnJ1bGUtZW50cnkgaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZWRpdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFjdHMtc3RhdHVzIHtcXHJcXG4gIHBhZGRpbmc6IDJweDsgXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLWdyb3VwLCBidXR0b24ucmVtb3ZlLWdyb3VwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG4gIG1hcmdpbjogMHB4IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRLZXlTcHJlYWQgPSB7fTtcbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2tleScpKSB7XG4gICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gayAhPT0gJ2tleSc7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYmVmb3JlRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7a2V5OiBzb21lS2V5LCAnICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7a2V5OiBzb21lS2V5fSc7XG5cbiAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdKSB7XG4gICAgICAgICAgdmFyIGFmdGVyRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7JyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne30nO1xuXG4gICAgICAgICAgZXJyb3IoJ0EgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmcgYSBcImtleVwiIHByb3AgaXMgYmVpbmcgc3ByZWFkIGludG8gSlNYOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIHsuLi5wcm9wc30gLz5cXG4nICsgJ1JlYWN0IGtleXMgbXVzdCBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gSlNYIHdpdGhvdXQgdXNpbmcgc3ByZWFkOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIGtleT17c29tZUtleX0gey4uLnByb3BzfSAvPicsIGJlZm9yZUV4YW1wbGUsIGNvbXBvbmVudE5hbWUsIGFmdGVyRXhhbXBsZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuLy8gZXZlbiB3aXRoIHRoZSBwcm9kIHRyYW5zZm9ybS4gVGhpcyBtZWFucyB0aGF0IGpzeERFViBpcyBwdXJlbHlcbi8vIG9wdC1pbiBiZWhhdmlvciBmb3IgYmV0dGVyIG1lc3NhZ2VzIGJ1dCB0aGF0IHdlIHdvbid0IHN0b3Bcbi8vIGdpdmluZyB5b3Ugd2FybmluZ3MgaWYgeW91IHVzZSBwcm9kdWN0aW9uIGFwaXMuXG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25EeW5hbWljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBmYWxzZSk7XG4gIH1cbn1cblxudmFyIGpzeCA9ICBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMgOyAvLyB3ZSBtYXkgd2FudCB0byBzcGVjaWFsIGNhc2UganN4cyBpbnRlcm5hbGx5IHRvIHRha2UgYWR2YW50YWdlIG9mIHN0YXRpYyBjaGlsZHJlbi5cbi8vIGZvciBub3cgd2UgY2FuIHNoaXAgaWRlbnRpY2FsIHByb2QgZnVuY3Rpb25zXG5cbnZhciBqc3hzID0gIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljIDtcblxuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLmpzeCA9IGpzeDtcbmV4cG9ydHMuanN4cyA9IGpzeHM7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3JTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvclN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFjdHNFZGl0b3JQcm9wcywgSUNSdWxlc0VkaXRvclByb3BzLCBSdWxlRWRpdG9yUHJvcHMsIFJ1bGVHcm91cEVkaXRvclByb3BzLCBvcE1hcCwgc2FmZVBhcnNlIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IE9wZXJhdG9yLCBpbnRlcm5hbE9wZXJhdG9yVmFsdWVzLCBwcm9jZXNzUnVsZU9yR3JvdXAsIHByb2Nlc3NWZXJib3NlLCBRdWFudGlmaWVycywgUnVsZSwgUnVsZUdyb3VwIH0gZnJvbSAnQGljcnVsZXMvY29yZSc7XHJcbmltcG9ydCAnLi9lZGl0b3JTdHlsZS5jc3MnO1xyXG5cclxubGV0IGxhc3RJZCA9IG51bGw7XHJcblxyXG5jb25zdCBSdWxlRWRpdG9yID0gKHtcclxuICBmYWN0cyA9IHt9LFxyXG4gIHJ1bGUgPSBbJycsICdlcScsICcnXSxcclxuICBvblVwZGF0ZSA9IChydWxlLCBpbmRleCkgPT4geyB9LFxyXG4gIGluZGV4ID0gMCxcclxuICBkZXB0aCA9IDBcclxufTogUnVsZUVkaXRvclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2ZhY3RLZXlzXSA9IHVzZVN0YXRlKE9iamVjdC5rZXlzKGZhY3RzKSk7XHJcbiAgY29uc3QgW2xpdmVSdWxlLCBzZXRFZGl0UnVsZV0gPSB1c2VTdGF0ZShydWxlKTtcclxuICBjb25zdCBbZmFjdEtleSwgb3BlcmF0b3IsIHRlcm1dID0gbGl2ZVJ1bGU7XHJcbiAgY29uc3Qga2V5ID0gYCR7aW5kZXh9LSR7ZGVwdGh9YDtcclxuICBjb25zdCBsaXN0SWQgPSBgJHtmYWN0S2V5c30tJHtrZXl9YDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uVXBkYXRlKFtmYWN0S2V5LCBvcGVyYXRvciwgdGVybV0sIGluZGV4KTtcclxuICAgIFxyXG4gIH0sIFtmYWN0S2V5LCBvcGVyYXRvciwgdGVybV0pXHJcblxyXG4gIGNvbnN0IHZhbHVlSWQgPSBgdmFsdWUtJHtrZXl9YFxyXG4gIGNvbnN0IHRlcm1JZCA9IGB0ZXJtLSR7a2V5fWBcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzLCBsaXZlUnVsZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT0ncnVsZS1lZGl0b3InPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGUtcmVzdWx0XCI+e3Jlc3VsdC5wYXNzID8gPHNwYW4gY2xhc3NOYW1lPVwicGFzc1wiPiYjMTAwMDM7PC9zcGFuPiA6IDxzcGFuICBjbGFzc05hbWU9XCJmYWlsXCI+JiN4MjcxNTs8L3NwYW4+fTwvZGl2PlxyXG4gICAgICA8ZGl2IGtleT17J3J1bGUtZmFjdCd9IGNsYXNzTmFtZT1cInJ1bGUtZW50cnkgcnVsZS1mYWN0XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD17dGVybUlkfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPSdvbidcclxuICAgICAgICAgIGF1dG9Gb2N1cz17bGFzdElkID09PSB0ZXJtSWR9XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbGlzdD17bGlzdElkfVxyXG4gICAgICAgICAgdmFsdWU9e2ZhY3RLZXl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4ge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSBldi50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIHNldEVkaXRSdWxlKFtldi50YXJnZXQudmFsdWUsIG9wZXJhdG9yLCB0ZXJtXSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPXtsaXN0SWR9PlxyXG4gICAgICAgICAge2ZhY3RLZXlzLm1hcChrZXkgPT4gKDxvcHRpb24gdmFsdWU9e2tleX0gLz4pKX1cclxuICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBrZXk9eydydWxlLW9wJ30gY2xhc3NOYW1lPVwicnVsZS1lbnRyeSBydWxlLW9wXCI+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17b3BlcmF0b3J9IG9uQ2hhbmdlPXtldiA9PiBzZXRFZGl0UnVsZShbZmFjdEtleSwgKGV2LnRhcmdldC52YWx1ZSBhcyBPcGVyYXRvciksIHRlcm1dKX0+XHJcbiAgICAgICAgICB7aW50ZXJuYWxPcGVyYXRvclZhbHVlcy5tYXAob3AgPT4gPG9wdGlvbiB2YWx1ZT17b3B9PntvcE1hcFtvcF19PC9vcHRpb24+KX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYga2V5PXsncnVsZS10ZXJtJ30gY2xhc3NOYW1lPVwicnVsZS1lbnRyeSBydWxlLXRlcm1cIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBpZD17dmFsdWVJZH1cclxuICAgICAgICAgIHZhbHVlPXt0ZXJtfVxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtsYXN0SWQgPT09IHZhbHVlSWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4ge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSBldi50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIHNldEVkaXRSdWxlKFtmYWN0S2V5LCBvcGVyYXRvciwgZXYudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFJ1bGVHcm91cEVkaXRvciA9ICh7XHJcbiAgZmFjdHMgPSB7fSxcclxuICBydWxlcyA9IHt9LFxyXG4gIG9uQ2hhbmdlID0gciA9PiB7IH0sXHJcbiAgZGVwdGggPSAwLFxyXG4gIGluZGV4ID0gMCxcclxuICBzaG93RmFjdHNFZGl0b3IgPSB0cnVlXHJcbn06IFJ1bGVHcm91cEVkaXRvclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xpdmVGYWN0cywgc2V0TGl2ZUZhY3RzXSA9IHVzZVN0YXRlKGZhY3RzKTtcclxuICBjb25zdCBbcXVhbnRpZmllciwgc2V0UXVhbnRpZmllcl0gPSB1c2VTdGF0ZSgocnVsZXMuYWxsID8gJ2FsbCcgOiAnYW55JykgYXMgUXVhbnRpZmllcnMpO1xyXG4gIGNvbnN0IFtsaXZlUnVsZXMsIHNldExpdmVSdWxlc10gPSB1c2VTdGF0ZShydWxlcyk7XHJcbiAgY29uc3QgW3J1bGVMaXN0LCBzZXRMaXZlUnVsZUxpc3RdID0gdXNlU3RhdGUoWy4uLihsaXZlUnVsZXMuYWxsIHx8IGxpdmVSdWxlcy5hbnkpXSk7XHJcbiAgY29uc3QgW3ZlcnNib3NlUmVzdWx0LCBzZXRWZXJib3NlUmVzdWx0XSA9IHVzZVN0YXRlKHt9IGFzIGFueSk7XHJcbiAgY29uc3QgcXVhbnRmaWVycyA9IFsnYWxsJywgJ2FueSddIGFzIFF1YW50aWZpZXJzW107XHJcbiAgY29uc3QgZW1wdHlSdWxlID0gWycnLCAnZXEnLCAnJ10gYXMgUnVsZTtcclxuICBjb25zdCBlbXB0eUdyb3VwID0geyBhbGw6IFtlbXB0eVJ1bGVdIH0gYXMgUnVsZUdyb3VwO1xyXG5cclxuICBjb25zdCBvblJ1bGVVcGRhdGUgPSAocnVsZTogUnVsZSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICBydWxlTGlzdFtpXSA9IHJ1bGU7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkFkZFJ1bGUgPSAoaSA9IG51bGwgYXMgbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaSA9PT0gbnVsbCkge1xyXG4gICAgICBydWxlTGlzdC5wdXNoKGVtcHR5UnVsZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcnVsZUxpc3Quc3BsaWNlKGksIDAsIGVtcHR5UnVsZSk7XHJcbiAgICB9XHJcbiAgICBzZXRMaXZlUnVsZUxpc3QoWy4uLnJ1bGVMaXN0XSk7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkR3JvdXAgPSAoaSA9IG51bGwgYXMgbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaSA9PT0gbnVsbCkge1xyXG4gICAgICBydWxlTGlzdC5wdXNoKGVtcHR5R3JvdXApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJ1bGVMaXN0LnNwbGljZShpLCAwLCBlbXB0eUdyb3VwKTtcclxuICAgIH1cclxuICAgIHNldExpdmVSdWxlTGlzdChbLi4ucnVsZUxpc3RdKTtcclxuICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZVJ1bGUgPSAoaSkgPT4ge1xyXG4gICAgcnVsZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gICAgc2V0TGl2ZVJ1bGVMaXN0KFsuLi5ydWxlTGlzdF0pO1xyXG4gICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2ZXJib3NlUmVzdWx0cyA9IHByb2Nlc3NWZXJib3NlKGZhY3RzLCBsaXZlUnVsZXMpO1xyXG4gICAgb25DaGFuZ2UobGl2ZVJ1bGVzLCAwLCBpbmRleCk7XHJcbiAgfSwgW0pTT04uc3RyaW5naWZ5KGxpdmVSdWxlcyldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gIH0sIFtKU09OLnN0cmluZ2lmeShydWxlTGlzdCldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gIH0sIFtxdWFudGlmaWVyXSlcclxuXHJcbiAgY29uc3QgaXNWYWxpZFJ1bGUgPSBwcm9jZXNzUnVsZU9yR3JvdXAoZmFjdHMsIGxpdmVSdWxlcyk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZS1ncm91cC1lZGl0b3JcIiBrZXk9e2Bncm91cC1lZGl0LSR7aW5kZXh9LSR7ZGVwdGh9YH0+XHJcbiAgICAgIHtzaG93RmFjdHNFZGl0b3IgJiYgZGVwdGggPT09IDAgJiYgaW5kZXggPT09IDAgJiYgPGRpdj5cclxuICAgICAgICA8RmFjdHNFZGl0b3Igb2JqZWN0PXtsaXZlRmFjdHN9IG9uQ2hhbmdlPXsodmFsdWUsIGlzVmFsaWQpID0+IHtcclxuICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldExpdmVGYWN0cyh2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkZXB0aCA9PT0gMCAmJiBpbmRleCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT0nZmFjdHMtc3RhdHVzJz5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBpc1ZhbGlkUnVsZSA/ICdncmVlbicgOiAnZGFya3JlZCcgfX0+UnVsZSBpcyB7aXNWYWxpZFJ1bGUgPyAndmFsaWQnIDogJ2ludmFsaWQnfS4gPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGlzVmFsaWRSdWxlPy5wYXNzID8gJ2dyZWVuJyA6ICdkYXJrcmVkJyB9fT5SdWxlIGlzIHtpc1ZhbGlkUnVsZT8ucGFzcyA/ICdwYXNzaW5nJyA6ICdmYWlsaW5nJ30uIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlLWVudHJ5IHF1YW50aWZpZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVjay1tYXJrXCI+XHJcbiAgICAgICAgICAgIHtpc1ZhbGlkUnVsZT8ucGFzcyA/IDxzcGFuIGNsYXNzTmFtZT0ncGFzcyc+JiN4MjYxMTs8L3NwYW4+IDogPHNwYW4gY2xhc3NOYW1lPSdmYWlsJz4mIzk3NDY7PC9zcGFuPn0gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtxdWFudGlmaWVyfSBvbkNoYW5nZT17ZXYgPT4gc2V0UXVhbnRpZmllcihldi50YXJnZXQudmFsdWUgYXMgUXVhbnRpZmllcnMpfT5cclxuICAgICAgICAgICAgICB7cXVhbnRmaWVycy5tYXAocSA9PiAoPG9wdGlvbiB2YWx1ZT17cX0+e3F9PC9vcHRpb24+KSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWdyb3VwXCIgdGl0bGU9J2FkZCBhIGdyb3VwJyBvbkNsaWNrPXsoKSA9PiBhZGRHcm91cCgpfT4mI3gyNzk1OzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlLWxpc3RcIj5cclxuICAgICAgICAgICAge3J1bGVMaXN0Lm1hcCgocnVsZUVudHJ5LCBydWxlSW5kZXgpID0+IEFycmF5LmlzQXJyYXkocnVsZUVudHJ5KSA/XHJcbiAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxSdWxlRWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblJ1bGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7SlNPTi5zdHJpbmdpZnkocnVsZUVudHJ5KX0tJHtydWxlSW5kZXh9LSR7ZGVwdGh9YH1cclxuICAgICAgICAgICAgICAgICAgey4uLnsgcnVsZTogcnVsZUVudHJ5LCBmYWN0czogbGl2ZUZhY3RzLCBpbmRleDogcnVsZUluZGV4LCBkZXB0aCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcnVsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSdhZGQgYSBydWxlJyBvbkNsaWNrPXsoKSA9PiBvbkFkZFJ1bGUocnVsZUluZGV4ICsgMSl9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge3J1bGVJbmRleCA+IDAgJiYgPGJ1dHRvbiB0aXRsZT0ncmVtb3ZlIHJ1bGUnIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUnVsZShydWxlSW5kZXgpfT4tPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+KSA6XHJcbiAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxSdWxlR3JvdXBFZGl0b3JcclxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtKU09OLnN0cmluZ2lmeShydWxlRW50cnkpfS0ke3J1bGVJbmRleH0tJHtkZXB0aH1gfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBydWxlRW50cnkgYXMgUnVsZUdyb3VwLCBmYWN0cywgaW5kZXg6IHJ1bGVJbmRleCwgZGVwdGg6IChkZXB0aCArIDEpLCBvbkNoYW5nZTogKHJ1bGVHcm91cCwgaSwgcGFyZW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVMaXN0W3J1bGVJbmRleF0gPSBydWxlR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIHBhcmVudEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbW92ZS1ncm91cC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtydWxlSW5kZXggPiAwICYmIDxidXR0b24gY2xhc3NOYW1lPSdyZW1vdmUtZ3JvdXAnIHRpdGxlPSdyZW1vdmUgZ3JvdXAnIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUnVsZShydWxlSW5kZXgpfT4mI3gyNzk2OzwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IElDUnVsZXNFZGl0b3IgPSAoe1xyXG4gIHJ1bGVzID0ge30sXHJcbiAgZmFjdHMgPSB7fSxcclxuICBvbkNoYW5nZSA9IChyID0+IG51bGwpLFxyXG4gIG9wdGlvbnMgPSB7IHNob3dGYWN0c0VkaXRvcjogdHJ1ZSB9XHJcbn06IElDUnVsZXNFZGl0b3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsaXZlUnVsZXMsIHNldExpdmVSdWxlc10gPSB1c2VTdGF0ZShydWxlcyk7XHJcbiAgY29uc3QgeyBzaG93RmFjdHNFZGl0b3IgfSA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IG9uUnVsZUNoYW5nZSA9IChsYXRlc3RSdWxlczogUnVsZUdyb3VwKSA9PiB7XHJcbiAgICBvbkNoYW5nZShsYXRlc3RSdWxlcyk7XHJcbiAgICBzZXRMaXZlUnVsZXMoeyAuLi5sYXRlc3RSdWxlcyB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSdWxlR3JvdXBFZGl0b3Igey4uLnsgcnVsZXM6IGxpdmVSdWxlcywgZmFjdHMsIG9uQ2hhbmdlOiBvblJ1bGVDaGFuZ2UsIHNob3dGYWN0c0VkaXRvciB9fSAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZhY3RzRWRpdG9yID0gKHsgb2JqZWN0LCBvbkNoYW5nZSA9ICgpID0+IG51bGwgfTogRmFjdHNFZGl0b3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVPYmplY3QsIHNldEFjdGl2ZU9iamVjdF0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeShvYmplY3QsIG51bGwsIDIpKTtcclxuICBjb25zdCBwYXJzZWRWYWx1ZSA9IHNhZmVQYXJzZShhY3RpdmVPYmplY3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhY3RzLXN0YXR1cycgc3R5bGU9e3sgY29sb3I6IHBhcnNlZFZhbHVlID8gJ2dyZWVuJyA6ICdkYXJrcmVkJyB9fT5cclxuICAgICAgICBGYWN0cyBhcmUge3BhcnNlZFZhbHVlID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHRpdGxlPSdlbnRlciB5b3VyIGZhY3RzIGhlcmUnXHJcbiAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHtcclxuICAgICAgICAgIHNldEFjdGl2ZU9iamVjdChldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgb25DaGFuZ2UoZXYudGFyZ2V0LnZhbHVlLCBwYXJzZWRWYWx1ZSAhPT0gZmFsc2UpXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgaGVpZ2h0OiAnMzAwcHgnIH19XHJcbiAgICAgICAgdmFsdWU9e2FjdGl2ZU9iamVjdH0+XHJcbiAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElDUnVsZXNFZGl0b3I7XHJcbiIsImltcG9ydCB7IHR5cGUgT3BlcmF0b3IsIHR5cGUgUnVsZUdyb3VwLCBpbnRlcm5hbE9wZXJhdG9yVmFsdWVzLCBwcm9jZXNzUnVsZU9yR3JvdXAsIFF1YW50aWZpZXJzLCBSdWxlLCBwcm9jZXNzVmVyYm9zZSwgZmxhdHRlbktleXMgfSBmcm9tICdAaWNydWxlcy9jb3JlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgb3BNYXAsIHR5cGUgSUNSdWxlc0VkaXRvclByb3BzLCB0eXBlIFJ1bGVFZGl0b3JQcm9wcywgdHlwZSBSdWxlR3JvdXBFZGl0b3JQcm9wcywgRmFjdHNFZGl0b3JQcm9wcywgc2FmZVBhcnNlIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSwgQnV0dG9uLCBDYXJkLCBJbnB1dCwgU2VsZWN0LCBTcGFjZSwgVGFnLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNpemVUeXBlIH0gZnJvbSAnYW50ZC9lcy9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBDaGVja0NpcmNsZU91dGxpbmVkLCBNaW51c0NpcmNsZU91dGxpbmVkLCBQbHVzQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCAnLi9lZGl0b3JTdHlsZS5jc3MnO1xyXG5cclxubGV0IGxhc3RJZCA9IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgRmFjdHNFZGl0b3JBbnRkID0gKHsgb2JqZWN0LCBvbkNoYW5nZSA9ICgpID0+IG51bGwgfTogRmFjdHNFZGl0b3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVPYmplY3QsIHNldEFjdGl2ZU9iamVjdF0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeShvYmplY3QsIG51bGwsIDIpKTtcclxuICBjb25zdCBwYXJzZWRWYWx1ZSA9IHNhZmVQYXJzZShhY3RpdmVPYmplY3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICczNTBweCcsIG1hcmdpbjogJzRweCcgfX1cclxuICAgICAgaG92ZXJhYmxlPXt0cnVlfVxyXG4gICAgICB0aXRsZT17XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjogKHBhcnNlZFZhbHVlID8gJ2dyZWVuJyA6ICdkYXJrcmVkJyl9fT5cclxuICAgICAgICAgIEZhY3RzIGFyZSB7cGFyc2VkVmFsdWUgPyAndmFsaWQnIDogJ2ludmFsaWQnfS5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIH0+XHJcbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgIHJvd3M9ezI1fVxyXG4gICAgICAgIHRpdGxlPSdlbnRlciB5b3VyIGZhY3RzIGhlcmUnXHJcbiAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHtcclxuICAgICAgICAgIHNldEFjdGl2ZU9iamVjdChldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgb25DaGFuZ2UoZXYudGFyZ2V0LnZhbHVlLCBzYWZlUGFyc2UoZXYudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbHVlPXthY3RpdmVPYmplY3R9XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUnVsZUVkaXRvckFudGQgPSAoe1xyXG4gIGZhY3RzID0ge30sXHJcbiAgcnVsZSA9IFsnJywgJ2VxJywgJyddLFxyXG4gIG9uVXBkYXRlID0gKHJ1bGUsIGluZGV4KSA9PiB7IH0sXHJcbiAgaW5kZXggPSAwLFxyXG4gIGRlcHRoID0gMFxyXG59OiBSdWxlRWRpdG9yUHJvcHMpID0+IHtcclxuICAvLyBjb25zdCBbcnVsZUZhY3RzLCBzZXRSdWxlRmFjdHNdID0gdXNlU3RhdGUoZmFjdHMpO1xyXG4gIGNvbnN0IFt1c2VyU2l6ZSwgc2V0VXNlclNpemVdID0gdXNlU3RhdGU8U2l6ZVR5cGU+KCdtaWRkbGUnKTtcclxuICBjb25zdCBbZmFjdEtleXMsIHNldEZhY3RLZXlzXSA9IHVzZVN0YXRlKE9iamVjdC5lbnRyaWVzKGZsYXR0ZW5LZXlzKGZhY3RzKSkpO1xyXG4gIGNvbnN0IFtsaXZlUnVsZSwgc2V0RWRpdFJ1bGVdID0gdXNlU3RhdGUocnVsZSk7XHJcbiAgY29uc3QgW2ZhY3RLZXksIG9wZXJhdG9yLCB0ZXJtXSA9IGxpdmVSdWxlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmFjdEtleXMoT2JqZWN0LmVudHJpZXMoZmxhdHRlbktleXMoZmFjdHMpKSk7XHJcbiAgfSwgW0pTT04uc3RyaW5naWZ5KGZhY3RzKV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvblVwZGF0ZShbZmFjdEtleSwgb3BlcmF0b3IsIHRlcm1dLCBpbmRleCk7XHJcbiAgfSwgW2ZhY3RLZXksIG9wZXJhdG9yLCB0ZXJtXSlcclxuXHJcbiAgY29uc3Qga2V5ID0gYCR7aW5kZXh9LSR7ZGVwdGh9YDtcclxuICBjb25zdCB2YWx1ZUlkID0gYHZhbHVlLSR7a2V5fWBcclxuICBjb25zdCB0ZXJtSWQgPSBgdGVybS0ke2tleX1gXHJcbiAgY29uc3QgcmVzdWx0ID0gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzLCBsaXZlUnVsZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTcGFjZSBrZXk9e2tleX0gZGlyZWN0aW9uPSdob3Jpem9udGFsJz5cclxuICAgICAgPFRvb2x0aXAgdGl0bGU9e2Ake3Jlc3VsdC5wYXNzID8gJ1J1bGUgUGFzc2VkJyA6ICdSdWxlIEZhaWxlZCd9IHdpdGggcHJvdmlkZWQgZmFjdHNgfT5cclxuICAgICAgICA8VGFnIGljb249ezxDaGVja0NpcmNsZU91dGxpbmVkIC8+fSBjb2xvcj17cmVzdWx0LnBhc3MgPyAnZ3JlZW4nIDogJ3JlZCd9IC8+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPGRpdiBrZXk9eydydWxlLWZhY3QnfSA+XHJcbiAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX1cclxuICAgICAgICAgIHNpemU9e3VzZXJTaXplfVxyXG4gICAgICAgICAgaWQ9e3Rlcm1JZH1cclxuICAgICAgICAgIGF1dG9Gb2N1cz17bGFzdElkID09PSB0ZXJtSWR9XHJcbiAgICAgICAgICBvcHRpb25zPXtmYWN0S2V5cy5tYXAoKFtrZXldKSA9PiAoeyB2YWx1ZToga2V5IH0pKX1cclxuICAgICAgICAgIHZhbHVlPXtmYWN0S2V5fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgbGFzdElkID0gdGVybUlkXHJcbiAgICAgICAgICAgIHNldEVkaXRSdWxlKFt2YWx1ZS50b1N0cmluZygpLCBvcGVyYXRvciwgdGVybV0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBrZXk9eydydWxlLW9wJ30+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2Ake2ZhY3RLZXl9ICR7b3BNYXBbb3BlcmF0b3JdfSAke3Rlcm19YH0+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTQ1cHgnIH19XHJcbiAgICAgICAgICAgIHNpemU9e3VzZXJTaXplfVxyXG4gICAgICAgICAgICB2YWx1ZT17b3BlcmF0b3J9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiBzZXRFZGl0UnVsZShbZmFjdEtleSwgKGV2IGFzIE9wZXJhdG9yKSwgdGVybV0pfVxyXG4gICAgICAgICAgICBvcHRpb25zPXtpbnRlcm5hbE9wZXJhdG9yVmFsdWVzLm1hcChvcCA9PiAoeyBsYWJlbDogb3BNYXBbb3BdLCB2YWx1ZTogb3AgfSkpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGtleT17J3J1bGUtdGVybSd9PlxyXG4gICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICBzaXplPXt1c2VyU2l6ZX1cclxuICAgICAgICAgIGlkPXt2YWx1ZUlkfVxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtsYXN0SWQgPT09IHZhbHVlSWR9XHJcbiAgICAgICAgICBvcHRpb25zPXtmYWN0S2V5cy5tYXAoKFssIHZhbHVlXSkgPT4gKHsgdmFsdWU6IHZhbHVlLnRvU3RyaW5nKCkgfSkpfVxyXG4gICAgICAgICAgdmFsdWU9e3Rlcm19XHJcbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSB2YWx1ZUlkXHJcbiAgICAgICAgICAgIHNldEVkaXRSdWxlKFtmYWN0S2V5LCBvcGVyYXRvciwgdmFsdWVdKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3BhY2U+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBSdWxlR3JvdXBFZGl0b3JBbnRkID0gKHtcclxuICBmYWN0cyA9IHt9LFxyXG4gIHJ1bGVzID0ge30sXHJcbiAgb25DaGFuZ2UgPSByID0+IHsgfSxcclxuICBkZXB0aCA9IDAsXHJcbiAgaW5kZXggPSAwLFxyXG4gIHNob3dGYWN0c0VkaXRvciA9IHRydWUsXHJcbiAgZXh0cmEgPSAoKSA9PiBudWxsLFxyXG4gIEZhY3RzRWRpdG9yID0gRmFjdHNFZGl0b3JBbnRkXHJcbn06IFJ1bGVHcm91cEVkaXRvclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJTaXplLCBzZXRVc2VyU2l6ZV0gPSB1c2VTdGF0ZTxTaXplVHlwZT4oJ21pZGRsZScpO1xyXG4gIGNvbnN0IFtsaXZlRmFjdHMsIHNldExpdmVGYWN0c10gPSB1c2VTdGF0ZShmYWN0cyk7XHJcbiAgY29uc3QgW3F1YW50aWZpZXIsIHNldFF1YW50aWZpZXJdID0gdXNlU3RhdGUoKHJ1bGVzLmFsbCA/ICdhbGwnIDogJ2FueScpIGFzIFF1YW50aWZpZXJzKTtcclxuICBjb25zdCBbbGl2ZVJ1bGVzLCBzZXRMaXZlUnVsZXNdID0gdXNlU3RhdGUocnVsZXMpO1xyXG4gIGNvbnN0IFtydWxlTGlzdCwgc2V0TGl2ZVJ1bGVMaXN0XSA9IHVzZVN0YXRlKFsuLi4obGl2ZVJ1bGVzLmFsbCB8fCBsaXZlUnVsZXMuYW55KV0pO1xyXG4gIGNvbnN0IFt2ZXJzYm9zZVJlc3VsdCwgc2V0VmVyYm9zZVJlc3VsdF0gPSB1c2VTdGF0ZSh7fSBhcyBhbnkpO1xyXG4gIGNvbnN0IHF1YW50ZmllcnMgPSBbJ2FsbCcsICdhbnknXSBhcyBRdWFudGlmaWVyc1tdO1xyXG4gIGNvbnN0IGVtcHR5UnVsZSA9IFsnJywgJ2VxJywgJyddIGFzIFJ1bGU7XHJcbiAgY29uc3QgZW1wdHlHcm91cCA9IHsgYWxsOiBbZW1wdHlSdWxlXSB9IGFzIFJ1bGVHcm91cDtcclxuXHJcbiAgY29uc3Qgb25SdWxlVXBkYXRlID0gKHJ1bGU6IFJ1bGUsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgcnVsZUxpc3RbaV0gPSBydWxlO1xyXG4gICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BZGRSdWxlID0gKGkgPSBudWxsIGFzIG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGkgPT09IG51bGwpIHtcclxuICAgICAgcnVsZUxpc3QucHVzaChlbXB0eVJ1bGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJ1bGVMaXN0LnNwbGljZShpLCAwLCBlbXB0eVJ1bGUpO1xyXG4gICAgfVxyXG4gICAgc2V0TGl2ZVJ1bGVMaXN0KFsuLi5ydWxlTGlzdF0pO1xyXG4gICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEdyb3VwID0gKGkgPSBudWxsIGFzIG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGkgPT09IG51bGwpIHtcclxuICAgICAgcnVsZUxpc3QucHVzaChlbXB0eUdyb3VwKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBydWxlTGlzdC5zcGxpY2UoaSwgMCwgZW1wdHlHcm91cCk7XHJcbiAgICB9XHJcbiAgICBzZXRMaXZlUnVsZUxpc3QoWy4uLnJ1bGVMaXN0XSk7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGVSdWxlID0gKGkpID0+IHtcclxuICAgIHJ1bGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgIHNldExpdmVSdWxlcyh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9KTtcclxuICAgIHNldExpdmVSdWxlTGlzdChbLi4ucnVsZUxpc3RdKTtcclxuICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIGluZGV4KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmVyYm9zZVJlc3VsdHMgPSBwcm9jZXNzVmVyYm9zZShmYWN0cywgbGl2ZVJ1bGVzKTtcclxuICAgIG9uQ2hhbmdlKGxpdmVSdWxlcywgMCwgaW5kZXgpO1xyXG4gIH0sIFtKU09OLnN0cmluZ2lmeShsaXZlUnVsZXMpXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExpdmVSdWxlcyh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9KTtcclxuICB9LCBbSlNPTi5zdHJpbmdpZnkocnVsZUxpc3QpXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExpdmVSdWxlcyh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9KTtcclxuICB9LCBbcXVhbnRpZmllcl0pXHJcblxyXG4gIGNvbnN0IGlzVmFsaWRSdWxlID0gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzLCBsaXZlUnVsZXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0ga2V5PXtgZ3JvdXAtZWRpdC0ke2luZGV4fS0ke2RlcHRofWB9PlxyXG4gICAgICB7c2hvd0ZhY3RzRWRpdG9yICYmIGRlcHRoID09PSAwICYmIGluZGV4ID09PSAwICYmXHJcbiAgICAgICAgPEZhY3RzRWRpdG9yIG9iamVjdD17bGl2ZUZhY3RzfSBvbkNoYW5nZT17KHN0cmluZ1ZhbHVlLCBwYXJzZWRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNWYWxpZCA9ICEhcGFyc2VkVmFsdWU7XHJcbiAgICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBzZXRMaXZlRmFjdHMocGFyc2VkVmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgIH1cclxuICAgICAgPENhcmRcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0cHgnIH19XHJcbiAgICAgICAgaG92ZXJhYmxlPXt0cnVlfVxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIGRlcHRoID09PSAwICYmIGluZGV4ID09PSAwICYmIDxTcGFjZT5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjogKGlzVmFsaWRSdWxlID8gJ2dyZWVuJyA6ICdkYXJrcmVkJykgfX0gPlJ1bGUgaXMge2lzVmFsaWRSdWxlID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJ30uPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiAoaXNWYWxpZFJ1bGUgPyAnZ3JlZW4nIDogJ2RhcmtyZWQnKSB9fSA+UnVsZSBpcyB7aXNWYWxpZFJ1bGU/LnBhc3MgPyAncGFzc2luZycgOiAnZmFpbGluZyd9Ljwvc3Bhbj5cclxuICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcycHggZG90dGVkICNjY2MnLCBwYWRkaW5nOiAnNHB4JyB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTZWxlY3Qgc2l6ZT17dXNlclNpemV9IHZhbHVlPXtxdWFudGlmaWVyfSBvcHRpb25zPXtxdWFudGZpZXJzLm1hcChxID0+ICh7IGxhYmVsOiBxLCB2YWx1ZTogcSB9KSl9IG9uQ2hhbmdlPXtldiA9PiBzZXRRdWFudGlmaWVyKGV2IGFzIFF1YW50aWZpZXJzKX0gc3R5bGU9e3sgd2lkdGg6ICc3MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9e3VzZXJTaXplfSBpY29uPXs8UGx1c0NpcmNsZU91dGxpbmVkIC8+fSB0aXRsZT0nYWRkIGEgZ3JvdXAnIG9uQ2xpY2s9eygpID0+IGFkZEdyb3VwKCl9IC8+XHJcbiAgICAgICAgICAgIHtleHRyYSAmJiBleHRyYSgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cnVsZUxpc3QubWFwKChydWxlRW50cnksIHJ1bGVJbmRleCkgPT4gQXJyYXkuaXNBcnJheShydWxlRW50cnkpID9cclxuICAgICAgICAgICAgICAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cclxuICAgICAgICAgICAgICAgIDxSdWxlRWRpdG9yQW50ZFxyXG4gICAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25SdWxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake0pTT04uc3RyaW5naWZ5KHJ1bGVFbnRyeSl9LSR7cnVsZUluZGV4fS0ke2RlcHRofWB9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi57IHJ1bGU6IHJ1bGVFbnRyeSwgZmFjdHM6IGxpdmVGYWN0cywgaW5kZXg6IHJ1bGVJbmRleCwgZGVwdGggfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGZsZXhXcmFwOiAnbm93cmFwJ319PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9e3VzZXJTaXplfSBpY29uPXs8UGx1c0NpcmNsZU91dGxpbmVkIC8+fSB0aXRsZT0nYWRkIGEgcnVsZScgb25DbGljaz17KCkgPT4gb25BZGRSdWxlKHJ1bGVJbmRleCArIDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgICB7cnVsZUluZGV4ID4gMCAmJiA8QnV0dG9uIHNpemU9e3VzZXJTaXplfSBpY29uPXs8TWludXNDaXJjbGVPdXRsaW5lZCAvPn0gdGl0bGU9J3JlbW92ZSBydWxlJyBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZVJ1bGUocnVsZUluZGV4KX0gLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4pIDpcclxuICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICA8UnVsZUdyb3VwRWRpdG9yQW50ZFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake0pTT04uc3RyaW5naWZ5KHJ1bGVFbnRyeSl9LSR7cnVsZUluZGV4fS0ke2RlcHRofWB9XHJcbiAgICAgICAgICAgICAgICAgIGV4dHJhPXsocnVsZUluZGV4ID4gMCA/ICgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17dXNlclNpemV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J3JlbW92ZSBncm91cCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZVJ1bGUocnVsZUluZGV4KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8TWludXNDaXJjbGVPdXRsaW5lZCAvPn0gLz4pIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVFbnRyeSBhcyBSdWxlR3JvdXAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjdHM6IGxpdmVGYWN0cyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogcnVsZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoOiAoZGVwdGggKyAxKSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKHJ1bGVHcm91cCwgaSwgcGFyZW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVMaXN0W3J1bGVJbmRleF0gPSBydWxlR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIHBhcmVudEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJQ1J1bGVzRWRpdG9yQW50ZCA9ICh7XHJcbiAgcnVsZXMgPSB7fSxcclxuICBmYWN0cyA9IHt9LFxyXG4gIG9uQ2hhbmdlID0gKHIgPT4gbnVsbCksXHJcbiAgb3B0aW9ucyA9IHtcclxuICAgIHNob3dGYWN0c0VkaXRvcjogdHJ1ZSxcclxuICAgIGZhY3RzRWRpdG9yOiBGYWN0c0VkaXRvckFudGRcclxuICB9XHJcbn06IElDUnVsZXNFZGl0b3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsaXZlUnVsZXMsIHNldExpdmVSdWxlc10gPSB1c2VTdGF0ZShydWxlcyk7XHJcbiAgY29uc3QgeyBzaG93RmFjdHNFZGl0b3IgfSA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IG9uUnVsZUNoYW5nZSA9IChsYXRlc3RSdWxlczogUnVsZUdyb3VwKSA9PiB7XHJcbiAgICBvbkNoYW5nZShsYXRlc3RSdWxlcyk7XHJcbiAgICBzZXRMaXZlUnVsZXMoeyAuLi5sYXRlc3RSdWxlcyB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSdWxlR3JvdXBFZGl0b3JBbnRkIHsuLi57IHJ1bGVzOiBsaXZlUnVsZXMsIGZhY3RzLCBvbkNoYW5nZTogb25SdWxlQ2hhbmdlLCBzaG93RmFjdHNFZGl0b3IsIEZhY3RzRWRpdG9yOiBvcHRpb25zLmZhY3RzRWRpdG9yIH19IC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJQ1J1bGVzRWRpdG9yQW50ZDsiLCJleHBvcnQgeyBJQ1J1bGVzRWRpdG9yQW50ZCB9IGZyb20gJy4vUnVsZUVkaXRvckFudGQnO1xyXG5pbXBvcnQgeyBSdWxlLCBSdWxlR3JvdXAgfSBmcm9tICdAaWNydWxlcy9jb3JlJztcclxuaW1wb3J0IHsgSUNSdWxlc0VkaXRvciB9IGZyb20gJy4vUnVsZUVkaXRvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJQ1J1bGVzRWRpdG9yO1xyXG5leHBvcnQgeyBcclxuICBJQ1J1bGVzRWRpdG9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmbGF0dGVuS2V5cyA9IChvYmo6IGFueSwgcHJlZml4ID0gJycpOiBhbnkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSB7fTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0LCAuLi5mbGF0dGVuS2V5cyhvYmpba2V5XSwgYCR7cHJlZml4fSR7a2V5fS5gKSB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0W2Ake3ByZWZpeH0ke2tleX1gXSA9IG9ialtrZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2FmZVBhcnNlID0gKHRleHRKc29uOiBzdHJpbmcsIHNob3dFcnJvciA9IGZhbHNlKTogYW55IHwgYm9vbGVhbiA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHRleHRKc29uKTtcclxuICB9XHJcbiAgY2F0Y2ggKGUpIHtcclxuICAgIGlmIChzaG93RXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcE1hcCA9IHtcclxuICBlcTogJ2VxdWFscycsXHJcbiAgbmVxOiAnbm90IGVxdWFscycsXHJcbiAgZ3Q6ICc+IGdyZWF0ZXIgdGhhbicsXHJcbiAgbHQ6ICc8IGxlc3MgdGhhbicsXHJcbiAgbHRlOiAnPD0gbGVzcyBvciBlcXVhbCcsXHJcbiAgZ3RlOiAnPj0gZ3JlYXRlciBvciBlcXVhbCcsXHJcbiAgaGFzOiAnY29udGFpbnMnLFxyXG4gIG5oYXM6ICdub3QgY29udGFpbnMnLFxyXG4gIGluOiAnaW4gdGVybScsXHJcbiAgbml0OiAnbm90IGluIHRlcm0nXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVFZGl0b3JQcm9wcyB7XHJcbiAgZmFjdHM/OiBhbnk7XHJcbiAgcnVsZT86IFJ1bGU7XHJcbiAgb25VcGRhdGU/OiAocjogUnVsZSwgaTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIG9uRGVsZXRlUnVsZT86IChudW1iZXIpID0+IHZvaWQ7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbiAgZGVwdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZUdyb3VwRWRpdG9yUHJvcHMge1xyXG4gIGZhY3RzPzogYW55O1xyXG4gIHJ1bGVzPzogUnVsZUdyb3VwO1xyXG4gIG9uQ2hhbmdlPzogKFJ1bGVHcm91cCwgaW5kZXgsIHBhcmVudEluZGV4PykgPT4gdm9pZDtcclxuICBkZXB0aD86IG51bWJlcjtcclxuICBpbmRleD86IG51bWJlcjtcclxuICBzaG93RmFjdHNFZGl0b3I/OiBib29sZWFuO1xyXG4gIGV4dHJhPzogYW55O1xyXG4gIEZhY3RzRWRpdG9yPzogUmVhY3QuRkM8RmFjdHNFZGl0b3JQcm9wcz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZXNFZGl0b3JPcHRpb25zIHtcclxuICBzaG93RmFjdHNFZGl0b3I/OiBib29sZWFuO1xyXG4gIGZhY3RzRWRpdG9yPzogUmVhY3QuRkM8RmFjdHNFZGl0b3JQcm9wcz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjdHNFZGl0b3JQcm9wcyB7XHJcbiAgb2JqZWN0OiBhbnk7XHJcbiAgb25DaGFuZ2U/OiAoc3RyaW5nLCBhbnkpPT52b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDUnVsZXNFZGl0b3JQcm9wcyB7XHJcbiAgcnVsZXM6IFJ1bGVHcm91cDtcclxuICBmYWN0czogYW55O1xyXG4gIG9uQ2hhbmdlPzogKFJ1bGVHcm91cCkgPT4gdm9pZDtcclxuICBvcHRpb25zPzogUnVsZXNFZGl0b3JPcHRpb25zO1xyXG59IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjb3JlXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuL3NyYy9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpID0+IHtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7IHZhbHVlOiB0cnVlIH0pKTtcbmV4cG9ydHMucHJvY2Vzc1J1bGVzID0gZXhwb3J0cy52YWxpZGF0ZVJ1bGUgPSBleHBvcnRzLnByb2Nlc3NWZXJib3NlID0gZXhwb3J0cy52ZXJib3NlUGx1Z2luID0gZXhwb3J0cy5wcm9jZXNzR3JvdXAgPSBleHBvcnRzLnByb2Nlc3NSdWxlT3JHcm91cCA9IGV4cG9ydHMuaW50ZXJuYWxPcGVyYXRvcnMgPSBleHBvcnRzLnByb2Nlc3NSZXN1bHQgPSBleHBvcnRzLmZsYXR0ZW5LZXlzID0gZXhwb3J0cy5pc0dyb3VwID0gZXhwb3J0cy5pbnRlcm5hbE9wZXJhdG9yVmFsdWVzID0gdm9pZCAwO1xuZXhwb3J0cy5pbnRlcm5hbE9wZXJhdG9yVmFsdWVzID0gWydlcScsICduZXEnLCAnZ3QnLCAnbHQnLCAnZ3RlJywgJ2x0ZScsICdoYXMnLCAnbmhhcycsICdpbicsICduaXQnXTtcbmNvbnN0IGRlZmF1bHREZWxpbWl0ZXIgPSAnLic7XG5mdW5jdGlvbiBpc0dyb3VwKHRlc3RSdWxlID0ge30pIHtcbiAgICBjb25zdCB7IGFsbCwgYW55IH0gPSB0ZXN0UnVsZTtcbiAgICBpZiAoYWxsIHx8IGFueSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0dyb3VwID0gaXNHcm91cDtcbmZ1bmN0aW9uIGZsYXR0ZW5LZXlzKG9iaiwgcHJlZml4ID0gJycsIGRlbGltaXRlciA9ICcuJykge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5hY2MsIC4uLmZsYXR0ZW5LZXlzKHZhbHVlLCBgJHtwcmVmaXh9JHtrZXl9JHtkZWxpbWl0ZXJ9YCkgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5hY2MsIFtgJHtwcmVmaXh9JHtrZXl9YF06IHZhbHVlIH07XG4gICAgfSwge30pO1xufVxuZXhwb3J0cy5mbGF0dGVuS2V5cyA9IGZsYXR0ZW5LZXlzO1xuY29uc3QgcHJvY2Vzc1Jlc3VsdCA9ICh7IHBhc3MsIGZhY3RzLCBydWxlLCBncm91cCwgcGx1Z2lucyA9IFtdIH0pID0+IChwbHVnaW5zLnJlZHVjZSgocGx1Z2luUmVzdWx0LCBwbHVnaW4pID0+ICh7IC4uLnBsdWdpblJlc3VsdCwgLi4uKHBsdWdpbih7IHBhc3MsIGZhY3RzLCBydWxlLCBncm91cCB9KSB8fCB7fSkgfSksIHsgcGFzcyB9KSk7XG5leHBvcnRzLnByb2Nlc3NSZXN1bHQgPSBwcm9jZXNzUmVzdWx0O1xuY29uc3QgaW5fbml0ID0gKG9wZXJhdG9yKSA9PiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGVybSkgfHwgWydzdHJpbmcnLCAnb2JqZWN0J10uaW5jbHVkZXModHlwZW9mIHRlcm0pKSB7XG4gICAgICAgIGNvbnN0IHBhc3MgPSB0ZXJtLmluY2x1ZGVzKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9wZXJhdG9yID09PSAnaW4nID8gcGFzcyA6ICFwYXNzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgaGFzX25oYXMgPSAob3BlcmF0b3IpID0+ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHtcbiAgICBpZiAoWydudW1iZXInLCAnYmlnaW50JywgJ3N5bWJvbCcsICd1bmRlZmluZWQnXS5pbmNsdWRlcyh0eXBlb2YgdmFsdWUpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcGFzcyA9IHZhbHVlLmluY2x1ZGVzKHRlcm0pO1xuICAgIHJldHVybiAob3BlcmF0b3IgPT09ICdoYXMnKSA/IHBhc3MgOiAhcGFzcztcbn07XG5leHBvcnRzLmludGVybmFsT3BlcmF0b3JzID0ge1xuICAgIGVxOiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA9PT0gdGVybSxcbiAgICBuZXE6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlICE9PSB0ZXJtLFxuICAgIGd0OiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA+IHRlcm0sXG4gICAgZ3RlOiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA+PSB0ZXJtLFxuICAgIGx0OiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA8IHRlcm0sXG4gICAgbHRlOiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB2YWx1ZSA8PSB0ZXJtLFxuICAgIGluOiBpbl9uaXQoJ2luJyksXG4gICAgbml0OiBpbl9uaXQoJ25pdCcpLFxuICAgIGhhczogaGFzX25oYXMoJ2hhcycpLFxuICAgIG5oYXM6IGhhc19uaGFzKCduaGFzJylcbn07XG5mdW5jdGlvbiBwcm9jZXNzUnVsZU9yR3JvdXAoZmFjdHMgPSB7fSwgcnVsZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBwbHVnaW5zID0gW10sIG9wZXJhdG9ycyA9IHt9IH0gPSBvcHRpb25zO1xuICAgIGlmIChpc0dyb3VwKHJ1bGUpKVxuICAgICAgICByZXR1cm4gcHJvY2Vzc0dyb3VwKGZhY3RzLCBydWxlLCB7IHBsdWdpbnMgfSk7XG4gICAgY29uc3QgW3N1YmplY3QsIG9wLCB0ZXJtXSA9IHJ1bGU7XG4gICAgaWYgKHN1YmplY3QgPT09IG51bGwgfHwgc3ViamVjdCA9PT0gdW5kZWZpbmVkIHx8ICFvcCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgUnVsZVxcbiR7SlNPTi5zdHJpbmdpZnkocnVsZSwgbnVsbCwgMil9YCk7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGVSZXN1bHQgPSB7IHBhc3M6IGZhbHNlIH07XG4gICAgY29uc3QgdmFsdWUgPSBmYWN0cz8uW3N1YmplY3RdO1xuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICBjb25zdCB0ZXJtSXNPYmplY3QgPSB0eXBlb2YgdGVybSA9PSAnb2JqZWN0JztcbiAgICBjb25zdCB0ZXJtSXNSdWxlID0gdGVybUlzT2JqZWN0ICYmIGlzR3JvdXAodGVybSk7XG4gICAgY29uc3QgZmFjdFF1ZXJ5ID0ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgdHlwZTogdmFsdWVUeXBlLFxuICAgICAgICBxdWVyeUZpZWxkczogbnVsbFxuICAgIH07XG4gICAgaWYgKHN1YmplY3QuaW5kZXhPZihkZWZhdWx0RGVsaW1pdGVyKSA+IDApIHtcbiAgICAgICAgY29uc3QgZmxhdEZhY3RzID0gZmxhdHRlbktleXMoZmFjdHMpO1xuICAgICAgICBjb25zdCBxdWVyeVZhbHVlID0gZmxhdEZhY3RzW3N1YmplY3RdO1xuICAgICAgICBjb25zdCBvYmpUeXBlID0gdHlwZW9mIHF1ZXJ5VmFsdWU7XG4gICAgICAgIGlmIChxdWVyeVZhbHVlKSB7XG4gICAgICAgICAgICBmYWN0UXVlcnkudmFsdWUgPSBxdWVyeVZhbHVlO1xuICAgICAgICAgICAgZmFjdFF1ZXJ5LnR5cGUgPSBBcnJheS5pc0FycmF5KHF1ZXJ5VmFsdWUpID8gJ2FycmF5JyA6IG9ialR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1Jc1J1bGUpIHtcbiAgICB9XG4gICAgY29uc3QgaXNOdW1lcmljID0gZmFjdFF1ZXJ5LnR5cGUgPT09ICdiaWdpbnQnIHx8IGZhY3RRdWVyeS50eXBlID09PSAnbnVtYmVyJztcbiAgICBjb25zdCB0ZXJtVmFsdWUgPSBpc051bWVyaWMgPyBwYXJzZUludCh0ZXJtLCAxMCkgOiB0ZXJtO1xuICAgIGNvbnN0IGZhY3RWYWx1ZSA9IGZhY3RRdWVyeS52YWx1ZTtcbiAgICBpZiAoZXhwb3J0cy5pbnRlcm5hbE9wZXJhdG9yc1tvcF0pIHtcbiAgICAgICAgcnVsZVJlc3VsdC5wYXNzID0gZXhwb3J0cy5pbnRlcm5hbE9wZXJhdG9yc1tvcF0oeyB2YWx1ZTogZmFjdFZhbHVlLCB0ZXJtOiB0ZXJtVmFsdWUgfSk7XG4gICAgfVxuICAgIGlmIChvcGVyYXRvcnNbb3BdKSB7XG4gICAgICAgIHJ1bGVSZXN1bHQucGFzcyA9IG9wZXJhdG9yc1tvcF0oeyB2YWx1ZTogZmFjdFZhbHVlLCB0ZXJtOiB0ZXJtVmFsdWUgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgZXhwb3J0cy5wcm9jZXNzUmVzdWx0KSh7XG4gICAgICAgIC4uLnJ1bGVSZXN1bHQsIHJ1bGUsIGZhY3RzLCBwbHVnaW5zXG4gICAgfSk7XG59XG5leHBvcnRzLnByb2Nlc3NSdWxlT3JHcm91cCA9IHByb2Nlc3NSdWxlT3JHcm91cDtcbmZ1bmN0aW9uIHByb2Nlc3NHcm91cChmYWN0cyA9IHt9LCBydWxlR3JvdXAgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBhbGwsIGFueSB9ID0gcnVsZUdyb3VwO1xuICAgIGNvbnN0IHsgcGx1Z2lucyA9IFtdIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGFjdGlvbiA9IHJ1bGUgPT4gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzLCBydWxlLCBvcHRpb25zKTtcbiAgICBpZiAoYWxsKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwUmVzdWx0ID0gYWxsLm1hcChhY3Rpb24pO1xuICAgICAgICBjb25zdCBwYXNzID0gZ3JvdXBSZXN1bHQuZXZlcnkociA9PiByLnBhc3MpO1xuICAgICAgICByZXR1cm4gKDAsIGV4cG9ydHMucHJvY2Vzc1Jlc3VsdCkoeyBwYXNzLCBydWxlOiBydWxlR3JvdXAsIGZhY3RzLCBwbHVnaW5zLCBncm91cDogeyBhbGw6IGdyb3VwUmVzdWx0LCBwYXNzIH0gfSk7XG4gICAgfVxuICAgIGlmIChhbnkpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBSZXN1bHQgPSBhbnkubWFwKGFjdGlvbik7XG4gICAgICAgIGNvbnN0IHBhc3MgPSBncm91cFJlc3VsdC5zb21lKHIgPT4gci5wYXNzKTtcbiAgICAgICAgcmV0dXJuICgwLCBleHBvcnRzLnByb2Nlc3NSZXN1bHQpKHsgcGFzcywgcnVsZTogcnVsZUdyb3VwLCBmYWN0cywgcGx1Z2lucywgZ3JvdXA6IHsgYW55OiBncm91cFJlc3VsdCwgcGFzcyB9IH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgUnVsZUdyb3VwXFxuJHtKU09OLnN0cmluZ2lmeShydWxlR3JvdXAsIG51bGwsIDIpfWApO1xufVxuZXhwb3J0cy5wcm9jZXNzR3JvdXAgPSBwcm9jZXNzR3JvdXA7XG5jb25zdCB2ZXJib3NlUGx1Z2luID0gKHsgcGFzcywgcnVsZSwgZ3JvdXAgfSkgPT4gKHsgcGFzcywgcnVsZSwgZ3JvdXAgfSk7XG5leHBvcnRzLnZlcmJvc2VQbHVnaW4gPSB2ZXJib3NlUGx1Z2luO1xuY29uc3QgcHJvY2Vzc1ZlcmJvc2UgPSAoZmFjdHMgPSB7fSwgcnVsZUdyb3VwLCBwbHVnaW5zID0gW10pID0+IChwcm9jZXNzR3JvdXAoZmFjdHMsIHJ1bGVHcm91cCwgeyBwbHVnaW5zOiBbZXhwb3J0cy52ZXJib3NlUGx1Z2luLCAuLi5wbHVnaW5zXSB9KSk7XG5leHBvcnRzLnByb2Nlc3NWZXJib3NlID0gcHJvY2Vzc1ZlcmJvc2U7XG5mdW5jdGlvbiB2YWxpZGF0ZVJ1bGUocnVsZUdyb3VwID0ge30pIHtcbiAgICBjb25zdCBpc1ZhbGlkID0gZmFsc2U7XG4gICAgaWYgKCFydWxlR3JvdXApXG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgaXNWYWxpZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdObyBSdWxlIEdyb3VwIEZvdW5kJ1xuICAgICAgICB9KTtcbiAgICBjb25zdCB7IGFsbCwgYW55IH0gPSBydWxlR3JvdXA7XG4gICAgY29uc3QgdmFsaWRhdGVSdWxlU2V0ID0gKHJ1bGVzKSA9PiB7XG4gICAgICAgIGlmIChydWxlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdObyBSdWxlIEdyb3VwIEZvdW5kJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IHJ1bGVJbmRleCA9IDA7IHJ1bGVJbmRleCA8IHJ1bGVzLmxlbmd0aDsgcnVsZUluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVHcm91cCA9IHJ1bGVzW3J1bGVJbmRleF07XG4gICAgICAgICAgICBpZiAocnVsZUdyb3VwPy5hbGwgfHwgcnVsZUdyb3VwPy5hbnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVSdWxlKHJ1bGVHcm91cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZUdyb3VwO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJ1bGUpIHx8IHJ1bGUubGVuZ3RoIDwgMilcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIFJ1bGUgR3JvdXAgRm91bmQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBbZmllbGQsIG9wXSA9IHJ1bGU7XG4gICAgICAgICAgICBpZiAoIWZpZWxkIHx8ICFvcClcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgUnVsZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghZXhwb3J0cy5pbnRlcm5hbE9wZXJhdG9yVmFsdWVzLmluY2x1ZGVzKG9wKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgT3BlcmF0b3InXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzVmFsaWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGlmIChhbGwgfHwgYW55KSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVJ1bGVTZXQoYWxsIHx8IGFueSk7XG4gICAgfVxuICAgIHJldHVybiAoe1xuICAgICAgICBpc1ZhbGlkLFxuICAgICAgICBtZXNzYWdlOiAnTm8gUXVhbnRpZmllcnMgKGFsbHxhbnkpIEZvdW5kJ1xuICAgIH0pO1xufVxuZXhwb3J0cy52YWxpZGF0ZVJ1bGUgPSB2YWxpZGF0ZVJ1bGU7XG5leHBvcnRzLnByb2Nlc3NSdWxlcyA9IHByb2Nlc3NHcm91cDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5wcm9jZXNzUnVsZXM7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvaW5kZXgudHNcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3T3pzN096czdPenM3T3pzN1FVTnJRbUVzT0VKQlFYTkNMRWRCUVdVc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVVYwU0N4TlFVRk5MR2RDUVVGblFpeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVVTNRaXhUUVVGblFpeFBRVUZQTEVOQlFVTXNWMEZCTmtJc1JVRkJSVHRKUVVOeVJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExGRkJRWEZDTEVOQlFVTTdTVUZETTBNc1NVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ6dFJRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUXpWQ0xFOUJRVThzUzBGQlN5eERRVUZETzBGQlEyWXNRMEZCUXp0QlFVcEVMREJDUVVsRE8wRkJSVVFzVTBGQlowSXNWMEZCVnl4RFFVRkRMRWRCUVZFc1JVRkJSU3hOUVVGTkxFZEJRVWNzUlVGQlJTeEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMGxCUTJoRkxFOUJRVThzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU4wUkN4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU4yUkN4UFFVRlBMRVZCUVVVc1IwRkJSeXhIUVVGSExFVkJRVVVzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzUjBGQlJ5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRNVVVzUTBGQlF6dFJRVU5FTEU5QlFVOHNSVUZCUlN4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGFFUXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRCUVVOU0xFTkJRVU03UVVGUVJDeHJRMEZQUXp0QlFVVk5MRTFCUVUwc1lVRkJZU3hIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzVDBGQlR5eEhRVUZITEVWQlFXOUNMRVZCUVdVc1JVRkJhVUlzUlVGQlJTeERRVUZETEVOQlEzcElMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eFpRVUZaTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGRE0wZzdRVUZHV1N4eFFrRkJZU3hwUWtGRmVrSTdRVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhEUVVGRExGRkJRV3RDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlR0SlFVTjZSQ3hKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU4wUlN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTJ4RExFOUJRVThzVVVGQlVTeExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTXhReXhEUVVGRE8wbEJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEWml4RFFVRkRPMEZCUlVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eFJRVUZyUWl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVN1NVRkRNMFFzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRXRCUVVzc1EwRkJRenRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEzSkdMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRiRU1zVDBGQlR5eERRVUZETEZGQlFWRXNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRCUVVNM1F5eERRVUZETzBGQlJWa3NlVUpCUVdsQ0xFZEJRVWM3U1VGREwwSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRXRCUVVzc1MwRkJTeXhKUVVGSk8wbEJRM1pETEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4TFFVRkxMRXRCUVVzc1NVRkJTVHRKUVVONFF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrN1NVRkRja01zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpPMGxCUTNaRExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1R0SlFVTnlReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVazdTVUZEZGtNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEYkVJc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEY0VJc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTTdRMEZEVEN4RFFVRkRPMEZCUlhCQ0xGTkJRV2RDTEd0Q1FVRnJRaXhEUVVGRExGRkJRV1VzUlVGQlJTeEZRVUZGTEVsQlFYTkNMRVZCUVVVc1ZVRkJiVUlzUlVGQlJUdEpRVU5xUnl4TlFVRk5MRVZCUVVVc1QwRkJUeXhIUVVGSExFVkJRVVVzUlVGQlJTeFRRVUZUTEVkQlFVY3NSVUZCUlN4RlFVRkZMRWRCUVVjc1QwRkJUeXhEUVVGRE8wbEJRMnBFTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVGRkxFOUJRVThzV1VGQldTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRnBRaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVVTVSU3hOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGWkxFTkJRVU03U1VGRGVrTXNTVUZCU1N4UFFVRlBMRXRCUVVzc1NVRkJTU3hKUVVGSkxFOUJRVThzUzBGQlN5eFRRVUZUTEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVOeVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNCRkxFTkJRVU03U1VGRlJDeE5RVUZOTEZWQlFWVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRV2RDTEVOQlFVTTdTVUZEYWtRc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRMMElzVFVGQlRTeFRRVUZUTEVkQlFVY3NUMEZCVHl4TFFVRnJRaXhEUVVGRE8wbEJRelZETEUxQlFVMHNXVUZCV1N4SFFVRkhMRTlCUVU4c1NVRkJTU3hKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0zUXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhaUVVGWkxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJwRUxFMUJRVTBzVTBGQlV5eEhRVUZITzFGQlEyaENMRXRCUVVzN1VVRkRUQ3hKUVVGSkxFVkJRVVVzVTBGQlV6dFJRVU5tTEZkQlFWY3NSVUZCUlN4SlFVRkpPMHRCUTJ4Q08wbEJSMFFzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRNVU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM0pETEUxQlFVMHNWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU4wUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhQUVVGUExGVkJRVlVzUTBGQlF6dFJRVU5zUXl4SlFVRkpMRlZCUVZVc1JVRkJSU3hEUVVGRE8xbEJRMllzVTBGQlV5eERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlZMRU5CUVVNN1dVRkROMElzVTBGQlV5eERRVUZETEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dFJRVU5xUlN4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVWRUxFbEJRVWtzVlVGQlZTeEZRVUZGTEVOQlFVTTdTVUZGYWtJc1EwRkJRenRKUVVWRUxFMUJRVTBzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1VVRkJVU3hKUVVGSkxGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RFFVRkRPMGxCUXpkRkxFMUJRVTBzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM2hFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRmJFTXNTVUZCU1N4NVFrRkJhVUlzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUXpGQ0xGVkJRVlVzUTBGQlF5eEpRVUZKTEVkQlFVY3NlVUpCUVdsQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTJwR0xFTkJRVU03U1VGSFJDeEpRVUZKTEZOQlFWTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRMnhDTEZWQlFWVXNRMEZCUXl4SlFVRkpMRWRCUVVjc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTjZSU3hEUVVGRE8wbEJSVVFzVDBGQlR5eDVRa0ZCWVN4RlFVRkRPMUZCUTI1Q0xFZEJRVWNzVlVGQlZTeEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1QwRkJUenRMUVVOeVFpeERRVUZETEVOQlFVTTdRVUZEY0VJc1EwRkJRenRCUVc1RVJDeG5SRUZ0UkVNN1FVRTRRa1FzVTBGQlowSXNXVUZCV1N4RFFVRkRMRkZCUVdVc1JVRkJSU3hGUVVGRkxGbEJRWFZDTEVWQlFVVXNSVUZCUlN4VlFVRnRRaXhGUVVGRk8wbEJRemxHTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETzBsQlF5OUNMRTFCUVUwc1JVRkJSU3hQUVVGUExFZEJRVWNzUlVGQlJTeEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRPMGxCUTJwRExFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dEpRVVZvUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMUlzVFVGQlRTeFhRVUZYTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6VkRMRTlCUVU4c2VVSkJRV0VzUlVGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRja2NzUTBGQlF6dEpRVVZFTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRVaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM0JETEUxQlFVMHNTVUZCU1N4SFFVRkhMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE0wTXNUMEZCVHl4NVFrRkJZU3hGUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFOUJRVThzUlVGQlJTeExRVUZMTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1YwRkJWeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnlSeXhEUVVGRE8wbEJSVVFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVVXNRMEZCUXp0QlFVTXZSU3hEUVVGRE8wRkJiRUpFTEc5RFFXdENRenRCUVVWTkxFMUJRVTBzWVVGQllTeEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQll5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUVM5RkxIRkNRVUZoTEdsQ1FVRnJSVHRCUVVWeVJpeE5RVUZOTEdOQlFXTXNSMEZCUnl4RFFVRkRMRkZCUVdVc1JVRkJSU3hGUVVGRkxGTkJRVzlDTEVWQlFVVXNWVUZCTUVJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVU4yUnl4WlFVRlpMRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRMSEZDUVVGaExFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUTNwRkxFTkJRVU03UVVGR1Z5eHpRa0ZCWXl4clFrRkZla0k3UVVGRlJpeFRRVUZuUWl4WlFVRlpMRU5CUVVNc1dVRkJXU3hGUVVGbE8wbEJRM1JFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOMFFpeEpRVUZKTEVOQlFVTXNVMEZCVXp0UlFVRkZMRTlCUVU4c1EwRkJRenRaUVVOMFFpeFBRVUZQTzFsQlExQXNUMEZCVHl4RlFVRkZMSEZDUVVGeFFqdFRRVU12UWl4RFFVRkRMRU5CUVVNN1NVRkRTQ3hOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRk5CUVZNc1EwRkJRenRKUVVVdlFpeE5RVUZOTEdWQlFXVXNSMEZCUnl4RFFVRkRMRXRCUVZrc1JVRkJSU3hGUVVGRk8xRkJRM1pETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRE8xbEJRVVVzVDBGQlR5eERRVUZETzJkQ1FVTTVRaXhQUVVGUE8yZENRVU5RTEU5QlFVOHNSVUZCUlN4eFFrRkJjVUk3WVVGREwwSXNRMEZCUXl4RFFVRkRPMUZCUTBnc1MwRkJTeXhKUVVGSkxGTkJRVk1zUjBGQlJ5eERRVUZETEVWQlFVVXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXp0WlFVTTVSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRmpMRU5CUVVNN1dVRkRhRVFzU1VGQlNTeFRRVUZUTEVWQlFVVXNSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEY2tNc1QwRkJUeXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYWtNc1EwRkJRenRaUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEZOQlFXbENMRU5CUVVNN1dVRkRMMElzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRPMmRDUVVGRkxFOUJRVThzUTBGQlF6dHZRa0ZEYmtRc1QwRkJUenR2UWtGRFVDeFBRVUZQTEVWQlFVVXNjVUpCUVhGQ08ybENRVU12UWl4RFFVRkRMRU5CUVVNN1dVRkZTQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVONlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGQlJTeFBRVUZQTEVOQlFVTTdiMEpCUTNwQ0xFOUJRVTg3YjBKQlExQXNUMEZCVHl4RlFVRkZMR05CUVdNN2FVSkJRM2hDTEVOQlFVTTdXVUZEUml4SlFVRkpMRU5CUVVNc09FSkJRWE5DTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJRenRuUWtGQlJTeFBRVUZQTEVOQlFVTTdiMEpCUTJoRUxFOUJRVTg3YjBKQlExQXNUMEZCVHl4RlFVRkZMR3RDUVVGclFqdHBRa0ZETlVJc1EwRkJReXhEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVU5FTEU5QlFVODdXVUZEVEN4UFFVRlBMRVZCUVVVc1NVRkJTVHRUUVVOa0xFTkJRVU03U1VGRFNpeERRVUZETzBsQlJVUXNTVUZCU1N4SFFVRkhMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFppeFBRVUZQTEdWQlFXVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGNrTXNRMEZCUXp0SlFVVkVMRTlCUVU4c1EwRkJRenRSUVVOT0xFOUJRVTg3VVVGRFVDeFBRVUZQTEVWQlFVVXNaME5CUVdkRE8wdEJRekZETEVOQlFVTXNRMEZCUXp0QlFVTk1MRU5CUVVNN1FVRm9SRVFzYjBOQlowUkRPMEZCVDFrc2IwSkJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTTdRVUZGZWtNc2NVSkJRV1VzYjBKQlFWa3NRMEZCUXpzN096czdPenM3VlVWc1VEVkNPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEVpTENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OWpiM0psTDNkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSW5kbFluQmhZMnM2THk5amIzSmxMeTR2YzNKakwybHVaR1Y0TG5Seklpd2lkMlZpY0dGamF6b3ZMMk52Y21VdmQyVmljR0ZqYXk5aVpXWnZjbVV0YzNSaGNuUjFjQ0lzSW5kbFluQmhZMnM2THk5amIzSmxMM2RsWW5CaFkyc3ZjM1JoY25SMWNDSXNJbmRsWW5CaFkyczZMeTlqYjNKbEwzZGxZbkJoWTJzdllXWjBaWEl0YzNSaGNuUjFjQ0pkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pqYjNKbFhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0ltTnZjbVZjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzU5S1NoelpXeG1MQ0FvS1NBOVBpQjdYRzV5WlhSMWNtNGdJaXdpWlhod2IzSjBJSFI1Y0dVZ1UzVmlhbVZqZENBOUlITjBjbWx1Wnp0Y2NseHVaWGh3YjNKMElIUjVjR1VnVkdWeWJTQTlJR0Z1ZVR0Y2NseHVaWGh3YjNKMElIUjVjR1VnVW5Wc1pTQTlJRnRUZFdKcVpXTjBMQ0JQY0dWeVlYUnZjaXdnVkdWeWJWMDdYSEpjYm1WNGNHOXlkQ0IwZVhCbElGRjFZVzUwYVdacFpYSnpJRDBnSjJGc2JDY2dmQ0FuWVc1NUp6dGNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1QzQmxjbUYwYjNJZ1BTQW5aWEVuSUh3Z0oyNWxjU2NnZkNBblozUW5JSHdnSjJ4MEp5QjhJQ2RuZEdVbklId2dKMngwWlNjZ2ZDQW5hR0Z6SnlCOElDZHVhR0Z6SnlCOElDZHBiaWNnZkNBbmJtbDBKeUI4SUhOMGNtbHVaenRjY2x4dVpYaHdiM0owSUhSNWNHVWdVblZzWlhNZ1BTQW9VblZzWlNCOElGSjFiR1ZIY205MWNDbGJYVHRjY2x4dVpYaHdiM0owSUhSNWNHVWdVblZzWlVkeWIzVndJRDBnZXlCaGJHdy9PaUJTZFd4bGN5d2dZVzU1UHpvZ1VuVnNaWE1nZlR0Y2NseHVaWGh3YjNKMElIUjVjR1VnUm1GamRITWdQU0JTWldOdmNtUThjM1J5YVc1bkxDQmhibmsrSUh3Z1VtVmpiM0prUEhOMGNtbHVaeXdnWVc1NVBsdGRPMXh5WEc1bGVIQnZjblFnZEhsd1pTQlNaWE4xYkhSUWJIVm5hVzRnUFNBb1lYSm5jem9nVUd4MVoybHVRWEpuY3lrZ1BUNGdVSEp2WTJWemMxSmxjM1ZzZER0Y2NseHVaWGh3YjNKMElIUjVjR1VnVDNCbGNtRjBiM0pRYkhWbmFXNGdQU0JTWldOdmNtUThjM1J5YVc1bkxDQW9ZWEpuY3pvZ1QzQmxjbUYwYjNKR2RXNWpRWEpuY3lrZ1BUNGdZbTl2YkdWaGJqNDdYSEpjYm1WNGNHOXlkQ0IwZVhCbElFOXdaWEpoZEc5eVJuVnVZMEZ5WjNNZ1BTQjdYSEpjYmlBZ2RtRnNkV1U2SUdGdWVUdGNjbHh1SUNCMFpYSnRPaUJoYm5rN1hISmNibjFjY2x4dVpYaHdiM0owSUhSNWNHVWdVR3gxWjJsdVFYSm5jeUE5SUh0Y2NseHVJQ0J3WVhOek9pQmliMjlzWldGdU8xeHlYRzRnSUhKMWJHVTZJRkoxYkdVZ2ZDQlNkV3hsUjNKdmRYQTdYSEpjYmlBZ1ptRmpkSE0vT2lCR1lXTjBjenRjY2x4dUlDQm5jbTkxY0Q4NklHRnVlVHRjY2x4dWZUdGNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JRY205alpYTnpRWEpuY3lCbGVIUmxibVJ6SUZCc2RXZHBia0Z5WjNNZ2V5QndiSFZuYVc1ek9pQlNaWE4xYkhSUWJIVm5hVzViWFNCOVhISmNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdVSEp2WTJWemMxSmxjM1ZzZENCbGVIUmxibVJ6SUZKbFkyOXlaRHh6ZEhKcGJtY3NJR0Z1ZVQ0Z2V5QndZWE56T2lCaWIyOXNaV0Z1SUgxY2NseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQlNkV3hsUlhaaGJIVmhkR2x2YmlCN0lHbHpWbUZzYVdRNklHSnZiMnhsWVc0N0lHMWxjM05oWjJVL09pQnpkSEpwYm1jN0lIMWNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JQY0hScGIyNXpJSHRjY2x4dUlDQndiSFZuYVc1elB6b2dVbVZ6ZFd4MFVHeDFaMmx1VzEwN1hISmNiaUFnYjNCbGNtRjBiM0p6UHpvZ1QzQmxjbUYwYjNKUWJIVm5hVzQ3WEhKY2JuMWNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1ZtRnNkV1ZVZVhCbElEMGdKM04wY21sdVp5Y2dmQ0FuYm5WdFltVnlKeUI4SUNkaWFXZHBiblFuSUh3Z0oySnZiMnhsWVc0bklId2dKM041YldKdmJDY2dmQ0FuZFc1a1pXWnBibVZrSnlCOElDZHZZbXBsWTNRbklId2dKMloxYm1OMGFXOXVKeUI4SUNkaGNuSmhlU2M3WEhKY2JtVjRjRzl5ZENCamIyNXpkQ0JwYm5SbGNtNWhiRTl3WlhKaGRHOXlWbUZzZFdWek9pQlBjR1Z5WVhSdmNsdGRJRDBnV3lkbGNTY3NJQ2R1WlhFbkxDQW5aM1FuTENBbmJIUW5MQ0FuWjNSbEp5d2dKMngwWlNjc0lDZG9ZWE1uTENBbmJtaGhjeWNzSUNkcGJpY3NJQ2R1YVhRblhUdGNjbHh1WEhKY2JtTnZibk4wSUdSbFptRjFiSFJFWld4cGJXbDBaWElnUFNBbkxpYzdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2FYTkhjbTkxY0NoMFpYTjBVblZzWlRvZ1VuVnNaU0I4SUZKMWJHVkhjbTkxY0NBOUlIdDlLVG9nWW05dmJHVmhiaUI3WEhKY2JpQWdZMjl1YzNRZ2V5QmhiR3dzSUdGdWVTQjlJRDBnZEdWemRGSjFiR1VnWVhNZ1VuVnNaVWR5YjNWd08xeHlYRzRnSUdsbUlDaGhiR3dnZkh3Z1lXNTVLU0J5WlhSMWNtNGdkSEoxWlR0Y2NseHVJQ0J5WlhSMWNtNGdabUZzYzJVN1hISmNibjFjY2x4dVhISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iR0YwZEdWdVMyVjVjeWh2WW1vNklHRnVlU3dnY0hKbFptbDRJRDBnSnljc0lHUmxiR2x0YVhSbGNpQTlJQ2N1SnlrNklGSmxZMjl5WkR4emRISnBibWNzSUdGdWVUNGdlMXh5WEc0Z0lISmxkSFZ5YmlCUFltcGxZM1F1Wlc1MGNtbGxjeWh2WW1vcExuSmxaSFZqWlNnb1lXTmpMQ0JiYTJWNUxDQjJZV3gxWlYwcElEMCtJSHRjY2x4dUlDQWdJR2xtSUNoMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlDRkJjbkpoZVM1cGMwRnljbUY1S0haaGJIVmxLU2tnZTF4eVhHNGdJQ0FnSUNCeVpYUjFjbTRnZXlBdUxpNWhZMk1zSUM0dUxtWnNZWFIwWlc1TFpYbHpLSFpoYkhWbExDQmdKSHR3Y21WbWFYaDlKSHRyWlhsOUpIdGtaV3hwYldsMFpYSjlZQ2tnZlR0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhKbGRIVnliaUI3SUM0dUxtRmpZeXdnVzJBa2UzQnlaV1pwZUgwa2UydGxlWDFnWFRvZ2RtRnNkV1VnZlR0Y2NseHVJQ0I5TENCN2ZTbGNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJR052Ym5OMElIQnliMk5sYzNOU1pYTjFiSFFnUFNBb2V5QndZWE56TENCbVlXTjBjeXdnY25Wc1pTd2daM0p2ZFhBc0lIQnNkV2RwYm5NZ1BTQmJYU0JoY3lCU1pYTjFiSFJRYkhWbmFXNWJYU0I5T2lCUWNtOWpaWE56UVhKbmN5azZJRkJ5YjJObGMzTlNaWE4xYkhRZ1BUNGdLRnh5WEc0Z0lIQnNkV2RwYm5NdWNtVmtkV05sS0Nod2JIVm5hVzVTWlhOMWJIUXNJSEJzZFdkcGJpa2dQVDRnS0hzZ0xpNHVjR3gxWjJsdVVtVnpkV3gwTENBdUxpNG9jR3gxWjJsdUtIc2djR0Z6Y3l3Z1ptRmpkSE1zSUhKMWJHVXNJR2R5YjNWd0lIMHBJSHg4SUh0OUtTQjlLU3dnZXlCd1lYTnpJSDBwWEhKY2JpbGNjbHh1WEhKY2JtTnZibk4wSUdsdVgyNXBkQ0E5SUNodmNHVnlZWFJ2Y2pvZ1QzQmxjbUYwYjNJcElEMCtJQ2g3SUhaaGJIVmxMQ0IwWlhKdElIMHBJRDArSUh0Y2NseHVJQ0JwWmlBb1FYSnlZWGt1YVhOQmNuSmhlU2gwWlhKdEtTQjhmQ0JiSjNOMGNtbHVaeWNzSUNkdlltcGxZM1FuWFM1cGJtTnNkV1JsY3loMGVYQmxiMllnZEdWeWJTa3BJSHRjY2x4dUlDQWdJR052Ym5OMElIQmhjM01nUFNCMFpYSnRMbWx1WTJ4MVpHVnpLSFpoYkhWbEtUdGNjbHh1SUNBZ0lISmxkSFZ5YmlCdmNHVnlZWFJ2Y2lBOVBUMGdKMmx1SnlBL0lIQmhjM01nT2lBaGNHRnpjenRjY2x4dUlDQjlYSEpjYmlBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc1OVhISmNibHh5WEc1amIyNXpkQ0JvWVhOZmJtaGhjeUE5SUNodmNHVnlZWFJ2Y2pvZ1QzQmxjbUYwYjNJcElEMCtJQ2g3SUhaaGJIVmxMQ0IwWlhKdElIMHBJRDArSUh0Y2NseHVJQ0JwWmlBb1d5ZHVkVzFpWlhJbkxDQW5ZbWxuYVc1MEp5d2dKM041YldKdmJDY3NJQ2QxYm1SbFptbHVaV1FuWFM1cGJtTnNkV1JsY3loMGVYQmxiMllnZG1Gc2RXVXBLU0J5WlhSMWNtNGdabUZzYzJVN1hISmNiaUFnWTI5dWMzUWdjR0Z6Y3lBOUlIWmhiSFZsTG1sdVkyeDFaR1Z6S0hSbGNtMHBPMXh5WEc0Z0lISmxkSFZ5YmlBb2IzQmxjbUYwYjNJZ1BUMDlJQ2RvWVhNbktTQS9JSEJoYzNNZ09pQWhjR0Z6Y3p0Y2NseHVmVnh5WEc1Y2NseHVaWGh3YjNKMElHTnZibk4wSUdsdWRHVnlibUZzVDNCbGNtRjBiM0p6SUQwZ2UxeHlYRzRnSUdWeE9pQW9leUIyWVd4MVpTd2dkR1Z5YlNCOUtTQTlQaUIyWVd4MVpTQTlQVDBnZEdWeWJTeGNjbHh1SUNCdVpYRTZJQ2g3SUhaaGJIVmxMQ0IwWlhKdElIMHBJRDArSUhaaGJIVmxJQ0U5UFNCMFpYSnRMRnh5WEc0Z0lHZDBPaUFvZXlCMllXeDFaU3dnZEdWeWJTQjlLU0E5UGlCMllXeDFaU0ErSUhSbGNtMHNYSEpjYmlBZ1ozUmxPaUFvZXlCMllXeDFaU3dnZEdWeWJTQjlLU0E5UGlCMllXeDFaU0ErUFNCMFpYSnRMRnh5WEc0Z0lHeDBPaUFvZXlCMllXeDFaU3dnZEdWeWJTQjlLU0E5UGlCMllXeDFaU0E4SUhSbGNtMHNYSEpjYmlBZ2JIUmxPaUFvZXlCMllXeDFaU3dnZEdWeWJTQjlLU0E5UGlCMllXeDFaU0E4UFNCMFpYSnRMRnh5WEc0Z0lHbHVPaUJwYmw5dWFYUW9KMmx1Snlrc1hISmNiaUFnYm1sME9pQnBibDl1YVhRb0oyNXBkQ2NwTEZ4eVhHNGdJR2hoY3pvZ2FHRnpYMjVvWVhNb0oyaGhjeWNwTEZ4eVhHNGdJRzVvWVhNNklHaGhjMTl1YUdGektDZHVhR0Z6SnlsY2NseHVmU0JoY3lCUGNHVnlZWFJ2Y2xCc2RXZHBianRjY2x4dVhISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQndjbTlqWlhOelVuVnNaVTl5UjNKdmRYQW9abUZqZEhNNklFWmhZM1J6SUQwZ2UzMHNJSEoxYkdVNklGSjFiR1VnZkNCU2RXeGxSM0p2ZFhBc0lHOXdkR2x2Ym5NNklFOXdkR2x2Ym5NZ1BTQjdmU2s2SUZCeWIyTmxjM05TWlhOMWJIUWdlMXh5WEc0Z0lHTnZibk4wSUhzZ2NHeDFaMmx1Y3lBOUlGdGRMQ0J2Y0dWeVlYUnZjbk1nUFNCN2ZTQjlJRDBnYjNCMGFXOXVjenRjY2x4dUlDQnBaaUFvYVhOSGNtOTFjQ2h5ZFd4bEtTa2djbVYwZFhKdUlIQnliMk5sYzNOSGNtOTFjQ2htWVdOMGN5d2djblZzWlNCaGN5QlNkV3hsUjNKdmRYQXNJSHNnY0d4MVoybHVjeUI5S1R0Y2NseHVYSEpjYmlBZ1kyOXVjM1FnVzNOMVltcGxZM1FzSUc5d0xDQjBaWEp0WFNBOUlISjFiR1VnWVhNZ1VuVnNaVHRjY2x4dUlDQnBaaUFvYzNWaWFtVmpkQ0E5UFQwZ2JuVnNiQ0I4ZkNCemRXSnFaV04wSUQwOVBTQjFibVJsWm1sdVpXUWdmSHdnSVc5d0tTQjdYSEpjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1lFbHVkbUZzYVdRZ1VuVnNaVnhjYmlSN1NsTlBUaTV6ZEhKcGJtZHBabmtvY25Wc1pTd2diblZzYkN3Z01pbDlZQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JqYjI1emRDQnlkV3hsVW1WemRXeDBJRDBnZXlCd1lYTnpPaUJtWVd4elpTQjlJR0Z6SUZCc2RXZHBia0Z5WjNNN1hISmNiaUFnWTI5dWMzUWdkbUZzZFdVZ1BTQm1ZV04wY3o4dVczTjFZbXBsWTNSZE8xeHlYRzRnSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhSNWNHVnZaaUIyWVd4MVpTQmhjeUJXWVd4MVpWUjVjR1U3WEhKY2JpQWdZMjl1YzNRZ2RHVnliVWx6VDJKcVpXTjBJRDBnZEhsd1pXOW1JSFJsY20wZ1BUMGdKMjlpYW1WamRDYzdYSEpjYmlBZ1kyOXVjM1FnZEdWeWJVbHpVblZzWlNBOUlIUmxjbTFKYzA5aWFtVmpkQ0FtSmlCcGMwZHliM1Z3S0hSbGNtMHBPMXh5WEc0Z0lHTnZibk4wSUdaaFkzUlJkV1Z5ZVNBOUlIdGNjbHh1SUNBZ0lIWmhiSFZsTEZ4eVhHNGdJQ0FnZEhsd1pUb2dkbUZzZFdWVWVYQmxMRnh5WEc0Z0lDQWdjWFZsY25sR2FXVnNaSE02SUc1MWJHeGNjbHh1SUNCOVhISmNibHh5WEc0Z0lDOHZJR2xtSUdacFpXeGtjeUJqYjI1MFlXbHVJR1J2ZENCeVpXWnpMQ0JzWlhRbmN5QnpaV1VnYVdZZ2RHaGxjbVVuY3lCaGJpQnZZbXBsWTNRZ2RHOGdjWFZsY25sY2NseHVJQ0JwWmlBb2MzVmlhbVZqZEM1cGJtUmxlRTltS0dSbFptRjFiSFJFWld4cGJXbDBaWElwSUQ0Z01Da2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ1pteGhkRVpoWTNSeklEMGdabXhoZEhSbGJrdGxlWE1vWm1GamRITXBPMXh5WEc0Z0lDQWdZMjl1YzNRZ2NYVmxjbmxXWVd4MVpTQTlJR1pzWVhSR1lXTjBjMXR6ZFdKcVpXTjBYVHRjY2x4dUlDQWdJR052Ym5OMElHOWlhbFI1Y0dVZ1BTQjBlWEJsYjJZZ2NYVmxjbmxXWVd4MVpUdGNjbHh1SUNBZ0lHbG1JQ2h4ZFdWeWVWWmhiSFZsS1NCN1hISmNiaUFnSUNBZ0lHWmhZM1JSZFdWeWVTNTJZV3gxWlNBOUlIRjFaWEo1Vm1Gc2RXVTdYSEpjYmlBZ0lDQWdJR1poWTNSUmRXVnllUzUwZVhCbElEMGdRWEp5WVhrdWFYTkJjbkpoZVNoeGRXVnllVlpoYkhWbEtTQS9JQ2RoY25KaGVTY2dPaUJ2WW1wVWVYQmxPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0hSbGNtMUpjMUoxYkdVcElIdGNjbHh1SUNBZ0lDOHZJRlJQUkU4NklHbHRjR3hsYldWdWRDQnVaWE4wWldRZ2NuVnNaU0J3Y205alpYTnphVzVuSUdGbllXbHVjM1FnWm1GamRDQnNaV0YyWlhOY2NseHVJQ0I5WEhKY2JseHlYRzRnSUdOdmJuTjBJR2x6VG5WdFpYSnBZeUE5SUdaaFkzUlJkV1Z5ZVM1MGVYQmxJRDA5UFNBblltbG5hVzUwSnlCOGZDQm1ZV04wVVhWbGNua3VkSGx3WlNBOVBUMGdKMjUxYldKbGNpYzdYSEpjYmlBZ1kyOXVjM1FnZEdWeWJWWmhiSFZsSUQwZ2FYTk9kVzFsY21saklEOGdjR0Z5YzJWSmJuUW9kR1Z5YlN3Z01UQXBJRG9nZEdWeWJUdGNjbHh1SUNCamIyNXpkQ0JtWVdOMFZtRnNkV1VnUFNCbVlXTjBVWFZsY25rdWRtRnNkV1U3WEhKY2JseHlYRzRnSUdsbUlDaHBiblJsY201aGJFOXdaWEpoZEc5eWMxdHZjRjBwSUh0Y2NseHVJQ0FnSUhKMWJHVlNaWE4xYkhRdWNHRnpjeUE5SUdsdWRHVnlibUZzVDNCbGNtRjBiM0p6VzI5d1hTaDdJSFpoYkhWbE9pQm1ZV04wVm1Gc2RXVXNJSFJsY20wNklIUmxjbTFXWVd4MVpTQjlLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJQzh2SUdWMllXeDFZWFJsSUhWelpYSnpJRzl3WlhKaGRHOXljenNnZDJocFkyZ2dZMkZ1SUc5MlpYSnlhV1JsSUdsdWRHVnlibUZzSUc5d1pYSmhkRzl5Y3lCY2NseHVJQ0JwWmlBb2IzQmxjbUYwYjNKelcyOXdYU2tnZTF4eVhHNGdJQ0FnY25Wc1pWSmxjM1ZzZEM1d1lYTnpJRDBnYjNCbGNtRjBiM0p6VzI5d1hTaDdJSFpoYkhWbE9pQm1ZV04wVm1Gc2RXVXNJSFJsY20wNklIUmxjbTFXWVd4MVpTQjlLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQndjbTlqWlhOelVtVnpkV3gwS0h0Y2NseHVJQ0FnSUM0dUxuSjFiR1ZTWlhOMWJIUXNJSEoxYkdVc0lHWmhZM1J6TENCd2JIVm5hVzV6WEhKY2JpQWdmU0JoY3lCUWNtOWpaWE56UVhKbmN5azdYSEpjYm4xY2NseHVYSEpjYmk4cUtseHlYRzRnS2lCY2NseHVJQ29nU0dWeVpTQnBjeUJ6WVcxd2JHVWdiMllnZDJoaGRDQmpiMjV6ZEhKMVkzUnBibWNnWVNCeWRXeGxJRzFoYm5WaGJHeDVJR0ZuWVdsdWMzUWdZU0J6YldGc2JDQnpaWFFnYjJZZ1ptRmpkSE1nZDI5MWJHUWdiRzl2YXlCc2FXdGxJR2x1SUdwaGRtRnpZM0pwY0hSY2NseHVJQ29nWEhKY2JpQXFJR0JnWUhSelhISmNiaUFxSUNBZ2FXMXdiM0owSUhzZ2NISnZZMlZ6YzFKMWJHVnpJSDBnWm5KdmJTQW5RR2xqY25Wc1pYTXZZMjl5WlNjN1hISmNiaUFxSUZ4eVhHNGdLaUFnSUdOdmJuTjBJR1poWTNSeklEMGdleUJjY2x4dUlDb2dJQ0FnSUcxaGNtdGxkRG9nSjJWdUxWVlRKeXdnWEhKY2JpQXFJQ0FnSUNCamIyeHZjam9nSjJKc2RXVW5MQ0JjY2x4dUlDb2dJQ0FnSUdScFlXMWxkR1Z5T2lBeE1DQmNjbHh1SUNvZ0lDQjlPMXh5WEc0Z0tpQmNjbHh1SUNvZ0lDQmpiMjV6ZENCeWRXeGxjeUE5SUhzZ1hISmNiaUFxSUNBZ0lDQmhibms2SUZ0Y2NseHVJQ29nSUNBZ0lDQWdXeWR0WVhKclpYUW5MQ0FuWlhFbkxDQW5aVzR0VlZNblhTd2dYSEpjYmlBcUlDQWdJQ0FnSUZzblpHbGhiV1YwWlhJbkxDQW5aM1FuTENBMVhWeHlYRzRnS2lBZ0lDQWdYU0JjY2x4dUlDb2dJQ0I5TzF4eVhHNGdLaUJjY2x4dUlDb2dJQ0JqYjI1emRDQnlaWE4xYkhRZ1BTQndjbTlqWlhOelVuVnNaWE1vWm1GamRITXNJSEoxYkdWektUdGNjbHh1SUNvZ0lDQmNjbHh1SUNvZ0lDQnBaaWh5WlhOMWJIUnpMbkJoYzNNcGUxeHlYRzRnS2lBZ0lDQWdMeThnWkc4Z2RHaGxJSFJvYVc1bklIUm9ZWFFnYm1WbFpITWdaRzl1WlZ4eVhHNGdLaUFnSUgxY2NseHVJQ29nSUZ4eVhHNGdLaUJnWUdCY2NseHVJQ292WEhKY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCd2NtOWpaWE56UjNKdmRYQW9abUZqZEhNNklFWmhZM1J6SUQwZ2UzMHNJSEoxYkdWSGNtOTFjRG9nVW5Wc1pVZHliM1Z3SUQwZ2UzMHNJRzl3ZEdsdmJuTTZJRTl3ZEdsdmJuTWdQU0I3ZlNrNklGQnliMk5sYzNOU1pYTjFiSFFnZTF4eVhHNGdJR052Ym5OMElIc2dZV3hzTENCaGJua2dmU0E5SUhKMWJHVkhjbTkxY0R0Y2NseHVJQ0JqYjI1emRDQjdJSEJzZFdkcGJuTWdQU0JiWFNCOUlEMGdiM0IwYVc5dWN6dGNjbHh1SUNCamIyNXpkQ0JoWTNScGIyNGdQU0J5ZFd4bElEMCtJSEJ5YjJObGMzTlNkV3hsVDNKSGNtOTFjQ2htWVdOMGN5d2djblZzWlN3Z2IzQjBhVzl1Y3lrN1hISmNibHh5WEc0Z0lHbG1JQ2hoYkd3cElIdGNjbHh1SUNBZ0lHTnZibk4wSUdkeWIzVndVbVZ6ZFd4MElEMGdZV3hzTG0xaGNDaGhZM1JwYjI0cE8xeHlYRzRnSUNBZ1kyOXVjM1FnY0dGemN5QTlJR2R5YjNWd1VtVnpkV3gwTG1WMlpYSjVLSElnUFQ0Z2NpNXdZWE56S1R0Y2NseHVJQ0FnSUhKbGRIVnliaUJ3Y205alpYTnpVbVZ6ZFd4MEtIc2djR0Z6Y3l3Z2NuVnNaVG9nY25Wc1pVZHliM1Z3TENCbVlXTjBjeXdnY0d4MVoybHVjeXdnWjNKdmRYQTZJSHNnWVd4c09pQm5jbTkxY0ZKbGMzVnNkQ3dnY0dGemN5QjlJSDBwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYVdZZ0tHRnVlU2tnZTF4eVhHNGdJQ0FnWTI5dWMzUWdaM0p2ZFhCU1pYTjFiSFFnUFNCaGJua3ViV0Z3S0dGamRHbHZiaWs3WEhKY2JpQWdJQ0JqYjI1emRDQndZWE56SUQwZ1ozSnZkWEJTWlhOMWJIUXVjMjl0WlNoeUlEMCtJSEl1Y0dGemN5azdYSEpjYmlBZ0lDQnlaWFIxY200Z2NISnZZMlZ6YzFKbGMzVnNkQ2g3SUhCaGMzTXNJSEoxYkdVNklISjFiR1ZIY205MWNDd2dabUZqZEhNc0lIQnNkV2RwYm5Nc0lHZHliM1Z3T2lCN0lHRnVlVG9nWjNKdmRYQlNaWE4xYkhRc0lIQmhjM01nZlNCOUtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1NXNTJZV3hwWkNCU2RXeGxSM0p2ZFhCY1hHNGtlMHBUVDA0dWMzUnlhVzVuYVdaNUtISjFiR1ZIY205MWNDd2diblZzYkN3Z01pbDlZQ3dwTzF4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZG1WeVltOXpaVkJzZFdkcGJpQTlJQ2g3SUhCaGMzTXNJSEoxYkdVc0lHZHliM1Z3SUgwNklGQnNkV2RwYmtGeVozTXBJRDArSUNoN0lIQmhjM01zSUhKMWJHVXNJR2R5YjNWd0lIMHBPMXh5WEc1Y2NseHVaWGh3YjNKMElHTnZibk4wSUhCeWIyTmxjM05XWlhKaWIzTmxJRDBnS0daaFkzUnpPaUJHWVdOMGN5QTlJSHQ5TENCeWRXeGxSM0p2ZFhBNklGSjFiR1ZIY205MWNDd2djR3gxWjJsdWN6b2dVbVZ6ZFd4MFVHeDFaMmx1VzEwZ1BTQmJYU2tnUFQ0Z0tGeHlYRzRnSUhCeWIyTmxjM05IY205MWNDaG1ZV04wY3l3Z2NuVnNaVWR5YjNWd0xDQjdJSEJzZFdkcGJuTTZJRnQyWlhKaWIzTmxVR3gxWjJsdUxDQXVMaTV3YkhWbmFXNXpYU0I5S1Z4eVhHNHBPMXh5WEc1Y2NseHVaWGh3YjNKMElHWjFibU4wYVc5dUlIWmhiR2xrWVhSbFVuVnNaU2h5ZFd4bFIzSnZkWEFnUFNCN2ZTQmhjeUJTZFd4bFIzSnZkWEFwT2lCU2RXeGxSWFpoYkhWaGRHbHZiaUI3WEhKY2JpQWdZMjl1YzNRZ2FYTldZV3hwWkNBOUlHWmhiSE5sTzF4eVhHNGdJR2xtSUNnaGNuVnNaVWR5YjNWd0tTQnlaWFIxY200Z0tIdGNjbHh1SUNBZ0lHbHpWbUZzYVdRc1hISmNiaUFnSUNCdFpYTnpZV2RsT2lBblRtOGdVblZzWlNCSGNtOTFjQ0JHYjNWdVpDZGNjbHh1SUNCOUtUdGNjbHh1SUNCamIyNXpkQ0I3SUdGc2JDd2dZVzU1SUgwZ1BTQnlkV3hsUjNKdmRYQTdYSEpjYmx4eVhHNGdJR052Ym5OMElIWmhiR2xrWVhSbFVuVnNaVk5sZENBOUlDaHlkV3hsY3pvZ1VuVnNaWE1wSUQwK0lIdGNjbHh1SUNBZ0lHbG1JQ2h5ZFd4bGN5NXNaVzVuZEdnZ1BUMDlJREFwSUhKbGRIVnliaUFvZTF4eVhHNGdJQ0FnSUNCcGMxWmhiR2xrTEZ4eVhHNGdJQ0FnSUNCdFpYTnpZV2RsT2lBblRtOGdVblZzWlNCSGNtOTFjQ0JHYjNWdVpDZGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdabTl5SUNoc1pYUWdjblZzWlVsdVpHVjRJRDBnTURzZ2NuVnNaVWx1WkdWNElEd2djblZzWlhNdWJHVnVaM1JvT3lCeWRXeGxTVzVrWlhnckt5a2dlMXh5WEc0Z0lDQWdJQ0JqYjI1emRDQnlkV3hsUjNKdmRYQWdQU0J5ZFd4bGMxdHlkV3hsU1c1a1pYaGRJR0Z6SUZKMWJHVkhjbTkxY0R0Y2NseHVJQ0FnSUNBZ2FXWWdLSEoxYkdWSGNtOTFjRDh1WVd4c0lIeDhJSEoxYkdWSGNtOTFjRDh1WVc1NUtTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFpoYkdsa1lYUmxVblZzWlNoeWRXeGxSM0p2ZFhBcE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNCamIyNXpkQ0J5ZFd4bElEMGdjblZzWlVkeWIzVndJR0Z6SUZKMWJHVTdYSEpjYmlBZ0lDQWdJR2xtSUNnaFFYSnlZWGt1YVhOQmNuSmhlU2h5ZFd4bEtTQjhmQ0J5ZFd4bExteGxibWQwYUNBOElESXBJSEpsZEhWeWJpQW9lMXh5WEc0Z0lDQWdJQ0FnSUdselZtRnNhV1FzWEhKY2JpQWdJQ0FnSUNBZ2JXVnpjMkZuWlRvZ0owNXZJRkoxYkdVZ1IzSnZkWEFnUm05MWJtUW5YSEpjYmlBZ0lDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDQWdZMjl1YzNRZ1cyWnBaV3hrTENCdmNGMGdQU0J5ZFd4bE8xeHlYRzRnSUNBZ0lDQnBaaUFvSVdacFpXeGtJSHg4SUNGdmNDa2djbVYwZFhKdUlDaDdYSEpjYmlBZ0lDQWdJQ0FnYVhOV1lXeHBaQ3hjY2x4dUlDQWdJQ0FnSUNCdFpYTnpZV2RsT2lBblNXNTJZV3hwWkNCU2RXeGxKMXh5WEc0Z0lDQWdJQ0I5S1Z4eVhHNGdJQ0FnSUNCcFppQW9JV2x1ZEdWeWJtRnNUM0JsY21GMGIzSldZV3gxWlhNdWFXNWpiSFZrWlhNb2IzQXBLU0J5WlhSMWNtNGdLSHRjY2x4dUlDQWdJQ0FnSUNCcGMxWmhiR2xrTEZ4eVhHNGdJQ0FnSUNBZ0lHMWxjM05oWjJVNklDZEpiblpoYkdsa0lFOXdaWEpoZEc5eUoxeHlYRzRnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJSEpsZEhWeWJpQjdYSEpjYmlBZ0lDQWdJR2x6Vm1Gc2FXUTZJSFJ5ZFdWY2NseHVJQ0FnSUgwN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCcFppQW9ZV3hzSUh4OElHRnVlU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSFpoYkdsa1lYUmxVblZzWlZObGRDaGhiR3dnZkh3Z1lXNTVLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQW9lMXh5WEc0Z0lDQWdhWE5XWVd4cFpDeGNjbHh1SUNBZ0lHMWxjM05oWjJVNklDZE9ieUJSZFdGdWRHbG1hV1Z5Y3lBb1lXeHNmR0Z1ZVNrZ1JtOTFibVFuWEhKY2JpQWdmU2s3WEhKY2JuMWNjbHh1WEhKY2JpOHFYSEpjYm1CZ1lGeHlYRzVjY2x4dVlHQmdYSEpjYmlvdlhISmNibVY0Y0c5eWRDQmpiMjV6ZENCd2NtOWpaWE56VW5Wc1pYTWdQU0J3Y205alpYTnpSM0p2ZFhBN1hISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0J3Y205alpYTnpVblZzWlhNN1hISmNiaUlzSWlJc0lpOHZJSE4wWVhKMGRYQmNiaTh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUx5OGdWR2hwY3lCbGJuUnllU0J0YjJSMWJHVWdhWE1nY21WbVpYSmxibU5sWkNCaWVTQnZkR2hsY2lCdGIyUjFiR1Z6SUhOdklHbDBJR05oYmlkMElHSmxJR2x1YkdsdVpXUmNiblpoY2lCZlgzZGxZbkJoWTJ0ZlpYaHdiM0owYzE5ZklEMGdlMzA3WEc1ZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5Zlcxd2lMaTl6Y21NdmFXNWtaWGd1ZEhOY0lsMG9NQ3dnWDE5M1pXSndZV05yWDJWNGNHOXlkSE5mWHlrN1hHNGlMQ0lpWFN3aWJtRnRaWE1pT2x0ZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=