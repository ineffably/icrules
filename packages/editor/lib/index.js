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
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_607__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processRules = exports.validateRule = exports.processVerbose = exports.verbosePlugin = exports.processGroup = exports.processRuleOrGroup = exports.internalOperators = exports.processResult = exports.memoizedFlattenKeys = exports.flattenKeys = exports.isGroup = exports.internalOperatorValues = void 0;
const memoize_1 = __nested_webpack_require_607__(/*! ./library/memoize */ "./src/library/memoize.ts");
exports.internalOperatorValues = ['eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'has', 'nhas', 'in', 'nit'];
const defaultDelimiter = '.';
const operatorMap = new Set(exports.internalOperatorValues);
function isGroup(testRule = {}) {
    if (!testRule || typeof testRule !== 'object')
        return false;
    const { all, any } = testRule;
    return Boolean(all || any);
}
exports.isGroup = isGroup;
function flattenKeys(obj, prefix = '', delimiter = '.') {
    if (!obj || typeof obj !== 'object')
        return {};
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
            return { ...acc, ...flattenKeys(value, `${prefix}${key}${delimiter}`) };
        }
        return { ...acc, [`${prefix}${key}`]: value };
    }, {});
}
exports.flattenKeys = flattenKeys;
exports.memoizedFlattenKeys = (0, memoize_1.memoize)(flattenKeys);
const processResult = ({ pass, facts, rule, group, plugins = [] }) => {
    if (plugins.length === 0)
        return { pass };
    return plugins.reduce((pluginResult, plugin) => ({ ...pluginResult, ...(plugin({ pass, facts, rule, group }) || {}) }), { pass });
};
exports.processResult = processResult;
const in_nit = (operator) => ({ value, term }) => {
    if (!term)
        return false;
    if (Array.isArray(term) || ['string', 'object'].includes(typeof term)) {
        const pass = term.includes(value);
        return operator === 'in' ? pass : !pass;
    }
    return false;
};
const has_nhas = (operator) => ({ value, term }) => {
    if (!value || ['number', 'bigint', 'symbol', 'undefined'].includes(typeof value))
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
const factQueryCache = new Map();
function extractDotNotationValue(facts, subject) {
    const cacheKey = `${JSON.stringify(facts)}-${subject}`;
    if (factQueryCache.has(cacheKey)) {
        return factQueryCache.get(cacheKey);
    }
    const flatFacts = (0, exports.memoizedFlattenKeys)(facts);
    const queryValue = flatFacts[subject];
    const type = Array.isArray(queryValue) ? 'array' : typeof queryValue;
    const result = {
        value: queryValue,
        type
    };
    factQueryCache.set(cacheKey, result);
    return result;
}
function processRuleOrGroup(facts = {}, rule, options = {}) {
    const { plugins = [], operators = {} } = options;
    if (isGroup(rule)) {
        return processGroup(facts, rule, { plugins });
    }
    const [subject, op, term] = rule;
    if (subject === null || subject === undefined || !op) {
        throw new Error(`Invalid Rule\n${JSON.stringify(rule, null, 2)}`);
    }
    const ruleResult = { pass: false };
    let factValue, valueType;
    if (subject.indexOf(defaultDelimiter) > 0) {
        const result = extractDotNotationValue(facts, subject);
        factValue = result.value;
        valueType = result.type;
    }
    else {
        factValue = facts?.[subject];
        valueType = Array.isArray(factValue) ? 'array' : typeof factValue;
    }
    const termIsObject = term !== null && typeof term === 'object';
    const isNumeric = valueType === 'bigint' || valueType === 'number';
    const termValue = isNumeric && typeof term === 'string' ? Number(term) : term;
    if (exports.internalOperators[op]) {
        ruleResult.pass = exports.internalOperators[op]({ value: factValue, term: termValue });
    }
    if (operators[op]) {
        ruleResult.pass = operators[op]({ value: factValue, term: termValue });
    }
    return (0, exports.processResult)({
        ...ruleResult,
        rule,
        facts,
        plugins
    });
}
exports.processRuleOrGroup = processRuleOrGroup;
function processGroup(facts = {}, ruleGroup = {}, options = {}) {
    const { all, any } = ruleGroup;
    const { plugins = [] } = options;
    const action = (rule) => processRuleOrGroup(facts, rule, options);
    if (all) {
        const groupResult = [];
        let allPass = true;
        for (const rule of all) {
            const result = action(rule);
            groupResult.push(result);
            if (!result.pass) {
                allPass = false;
                if (plugins.length === 0)
                    break;
            }
        }
        return (0, exports.processResult)({
            pass: allPass,
            rule: ruleGroup,
            facts,
            plugins,
            group: { all: groupResult, pass: allPass }
        });
    }
    if (any) {
        const groupResult = [];
        let anyPass = false;
        for (const rule of any) {
            const result = action(rule);
            groupResult.push(result);
            if (result.pass) {
                anyPass = true;
                if (plugins.length === 0)
                    break;
            }
        }
        return (0, exports.processResult)({
            pass: anyPass,
            rule: ruleGroup,
            facts,
            plugins,
            group: { any: groupResult, pass: anyPass }
        });
    }
    throw new Error(`Invalid RuleGroup\n${JSON.stringify(ruleGroup, null, 2)}`);
}
exports.processGroup = processGroup;
const verbosePlugin = ({ pass, rule, group }) => ({ pass, rule, group });
exports.verbosePlugin = verbosePlugin;
const processVerbose = (facts = {}, ruleGroup, plugins = []) => (processGroup(facts, ruleGroup, { plugins: [exports.verbosePlugin, ...plugins] }));
exports.processVerbose = processVerbose;
function validateRule(ruleGroup = {}) {
    if (!ruleGroup) {
        return {
            isValid: false,
            message: 'No Rule Group Found'
        };
    }
    const { all, any } = ruleGroup;
    const validateRuleSet = (rules) => {
        if (!rules || !Array.isArray(rules) || rules.length === 0) {
            return {
                isValid: false,
                message: 'No Rule Group Found'
            };
        }
        for (let ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
            const rule = rules[ruleIndex];
            if (typeof rule === 'object' && !Array.isArray(rule)) {
                const ruleGroup = rule;
                if (ruleGroup?.all || ruleGroup?.any) {
                    const result = validateRule(ruleGroup);
                    if (!result.isValid)
                        return result;
                    continue;
                }
            }
            if (!Array.isArray(rule) || rule.length < 2) {
                return {
                    isValid: false,
                    message: 'Invalid Rule Format'
                };
            }
            const [field, op] = rule;
            if (!field || !op) {
                return {
                    isValid: false,
                    message: 'Invalid Rule: Missing field or operator'
                };
            }
            if (!operatorMap.has(op)) {
                return {
                    isValid: false,
                    message: `Invalid Operator: ${op}`
                };
            }
        }
        return {
            isValid: true
        };
    };
    if (all || any) {
        return validateRuleSet(all || any);
    }
    return {
        isValid: false,
        message: 'No Quantifiers (all|any) Found'
    };
}
exports.validateRule = validateRule;
exports.processRules = processGroup;
exports["default"] = exports.processRules;


/***/ }),

/***/ "./src/library/memoize.ts":
/*!********************************!*\
  !*** ./src/library/memoize.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.memoize = void 0;
function memoize(fn) {
    const cache = new Map();
    return ((...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    });
}
exports.memoize = memoize;
exports["default"] = memoize;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_9767__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_9767__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_9767__("./src/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFNLENBQUM7QUFDVixDQUFDO0FBYkQsMEJBYUM7QUFFRCxxQkFBZSxPQUFPLENBQUM7Ozs7Ozs7VUNyQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvcmUvLi9zcmMvbGlicmFyeS9tZW1vaXplLnRzIiwid2VicGFjazovL2NvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29yZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvcmUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvcmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKipcclxuICogQG1vZHVsZSBAaWNydWxlcy9jb3JlXHJcbiAqIFxyXG4gKiBJQ1J1bGVzIENvcmUgLSBBIHNtYWxsIGFuZCBleHRlbnNpYmxlIHJ1bGVzIGVuZ2luZSB3aXRoIGEgY29tcGFjdCBKU09OIGZvb3RwcmludC5cclxuICogXHJcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHRoZSBmb3VuZGF0aW9uIGZvciBjcmVhdGluZywgdmFsaWRhdGluZywgYW5kIHByb2Nlc3NpbmcgcnVsZXNcclxuICogYWdhaW5zdCBhIHNldCBvZiBmYWN0cy4gSXQgc3VwcG9ydHMgYm9vbGVhbiBsb2dpYyB3aXRoICdhbGwnIChBTkQpIGFuZCAnYW55JyAoT1IpXHJcbiAqIGNvbmRpdGlvbnMsIGN1c3RvbSBvcGVyYXRvcnMsIGFuZCBleHRlbnNpYmlsaXR5IHRocm91Z2ggcGx1Z2lucy5cclxuICogXHJcbiAqIEJhc2ljIHVzYWdlOlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCBwcm9jZXNzUnVsZXMgZnJvbSAnQGljcnVsZXMvY29yZSc7XHJcbiAqIFxyXG4gKiBjb25zdCBmYWN0cyA9IHsgYWdlOiAyNSwgcm9sZTogJ2FkbWluJyB9O1xyXG4gKiBjb25zdCBydWxlcyA9IHtcclxuICogICBhbGw6IFtcclxuICogICAgIFsnYWdlJywgJ2d0ZScsIDE4XSxcclxuICogICAgIFsncm9sZScsICdlcScsICdhZG1pbiddXHJcbiAqICAgXVxyXG4gKiB9O1xyXG4gKiBcclxuICogY29uc3QgcmVzdWx0ID0gcHJvY2Vzc1J1bGVzKGZhY3RzLCBydWxlcyk7XHJcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5wYXNzKTsgLy8gdHJ1ZVxyXG4gKiBgYGBcclxuICovXHJcblxyXG5pbXBvcnQgeyBtZW1vaXplIH0gZnJvbSAnLi9saWJyYXJ5L21lbW9pemUnO1xyXG5cclxuLyoqIFRoZSBzdWJqZWN0L2tleSB0byBldmFsdWF0ZSBpbiB0aGUgZmFjdHMgb2JqZWN0ICovXHJcbmV4cG9ydCB0eXBlIFN1YmplY3QgPSBzdHJpbmc7XHJcblxyXG4vKiogVGhlIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdCAqL1xyXG5leHBvcnQgdHlwZSBUZXJtID0gYW55O1xyXG5cclxuLyoqIEEgc2luZ2xlIHJ1bGUgY29uc2lzdGluZyBvZiBbc3ViamVjdCwgb3BlcmF0b3IsIHRlcm1dICovXHJcbmV4cG9ydCB0eXBlIFJ1bGUgPSBbU3ViamVjdCwgT3BlcmF0b3IsIFRlcm1dO1xyXG5cclxuLyoqIFRoZSBhdmFpbGFibGUgcXVhbnRpZmllcnMgZm9yIHJ1bGUgZ3JvdXBzICovXHJcbmV4cG9ydCB0eXBlIFF1YW50aWZpZXJzID0gJ2FsbCcgfCAnYW55JztcclxuXHJcbi8qKiBcclxuICogVGhlIG9wZXJhdG9ycyB1c2VkIHRvIGNvbXBhcmUgdmFsdWVzXHJcbiAqIC0gJ2VxJzogRXF1YWwgKD09PSlcclxuICogLSAnbmVxJzogTm90IGVxdWFsICghPT0pXHJcbiAqIC0gJ2d0JzogR3JlYXRlciB0aGFuICg+KVxyXG4gKiAtICdsdCc6IExlc3MgdGhhbiAoPClcclxuICogLSAnZ3RlJzogR3JlYXRlciB0aGFuIG9yIGVxdWFsICg+PSlcclxuICogLSAnbHRlJzogTGVzcyB0aGFuIG9yIGVxdWFsICg8PSlcclxuICogLSAnaGFzJzogQ29udGFpbnMgdmFsdWUgKGluY2x1ZGVzKVxyXG4gKiAtICduaGFzJzogRG9lcyBub3QgY29udGFpbiB2YWx1ZSAoIWluY2x1ZGVzKVxyXG4gKiAtICdpbic6IFZhbHVlIGlzIGluIGFycmF5L3N0cmluZy9vYmplY3QgKGlzIGluY2x1ZGVkKVxyXG4gKiAtICduaXQnOiBWYWx1ZSBpcyBub3QgaW4gYXJyYXkvc3RyaW5nL29iamVjdCAoaXMgbm90IGluY2x1ZGVkKVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgT3BlcmF0b3IgPSAnZXEnIHwgJ25lcScgfCAnZ3QnIHwgJ2x0JyB8ICdndGUnIHwgJ2x0ZScgfCAnaGFzJyB8ICduaGFzJyB8ICdpbicgfCAnbml0JyB8IHN0cmluZztcclxuXHJcbi8qKiBBbiBhcnJheSBvZiBydWxlcyBhbmQvb3IgcnVsZSBncm91cHMgKi9cclxuZXhwb3J0IHR5cGUgUnVsZXMgPSAoUnVsZSB8IFJ1bGVHcm91cClbXTtcclxuXHJcbi8qKlxyXG4gKiBBIGdyb3VwIG9mIHJ1bGVzIHdpdGggYSBsb2dpY2FsIG9wZXJhdG9yIChhbGwvYW55KVxyXG4gKiAtIGFsbDogQWxsIHJ1bGVzIG11c3QgcGFzcyAoQU5EKVxyXG4gKiAtIGFueTogQXQgbGVhc3Qgb25lIHJ1bGUgbXVzdCBwYXNzIChPUilcclxuICovXHJcbmV4cG9ydCB0eXBlIFJ1bGVHcm91cCA9IHsgYWxsPzogUnVsZXMsIGFueT86IFJ1bGVzIH07XHJcblxyXG4vKiogVGhlIGRhdGEgdG8gZXZhbHVhdGUgcnVsZXMgYWdhaW5zdCAqL1xyXG5leHBvcnQgdHlwZSBGYWN0cyA9IFJlY29yZDxzdHJpbmcsIGFueT4gfCBSZWNvcmQ8c3RyaW5nLCBhbnk+W107XHJcblxyXG4vKiogXHJcbiAqIEEgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgcnVsZSByZXN1bHRzLCB1c2VkIGZvciBjcmVhdGluZyBwbHVnaW5zXHJcbiAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyBjb250YWluaW5nIHJ1bGUgcHJvY2Vzc2luZyBpbmZvcm1hdGlvblxyXG4gKiBAcmV0dXJucyBBIFByb2Nlc3NSZXN1bHQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXN1bHRQbHVnaW4gPSAoYXJnczogUGx1Z2luQXJncykgPT4gUHJvY2Vzc1Jlc3VsdDtcclxuXHJcbi8qKiBcclxuICogQSBtYXAgb2YgY3VzdG9tIG9wZXJhdG9ycyBhbmQgdGhlaXIgaW1wbGVtZW50YXRpb24gZnVuY3Rpb25zXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBPcGVyYXRvclBsdWdpbiA9IFJlY29yZDxzdHJpbmcsIChhcmdzOiBPcGVyYXRvckZ1bmNBcmdzKSA9PiBib29sZWFuPjtcclxuXHJcbi8qKlxyXG4gKiBBcmd1bWVudHMgcGFzc2VkIHRvIG9wZXJhdG9yIGZ1bmN0aW9uc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgT3BlcmF0b3JGdW5jQXJncyA9IHtcclxuICAvKiogVGhlIHZhbHVlIGZyb20gdGhlIGZhY3RzIG9iamVjdCAqL1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgLyoqIFRoZSB0ZXJtIHRvIGNvbXBhcmUgYWdhaW5zdCAqL1xyXG4gIHRlcm06IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFyZ3VtZW50cyBwYXNzZWQgdG8gcmVzdWx0IHBsdWdpbnNcclxuICovXHJcbmV4cG9ydCB0eXBlIFBsdWdpbkFyZ3MgPSB7XHJcbiAgLyoqIFdoZXRoZXIgdGhlIHJ1bGUgcGFzc2VkICovXHJcbiAgcGFzczogYm9vbGVhbjtcclxuICAvKiogVGhlIHJ1bGUgb3IgcnVsZSBncm91cCBiZWluZyBwcm9jZXNzZWQgKi9cclxuICBydWxlOiBSdWxlIHwgUnVsZUdyb3VwO1xyXG4gIC8qKiBUaGUgZmFjdHMgYmVpbmcgZXZhbHVhdGVkICovXHJcbiAgZmFjdHM/OiBGYWN0cztcclxuICAvKiogVGhlIHJlc3VsdCBvZiBncm91cCBwcm9jZXNzaW5nICovXHJcbiAgZ3JvdXA/OiBhbnk7XHJcbn07XHJcblxyXG4vKipcclxuICogQXJndW1lbnRzIGZvciB0aGUgcHJvY2VzcyBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzQXJncyBleHRlbmRzIFBsdWdpbkFyZ3MgeyBcclxuICAvKiogVGhlIHBsdWdpbnMgdG8gdXNlIGZvciBwcm9jZXNzaW5nICovXHJcbiAgcGx1Z2luczogUmVzdWx0UGx1Z2luW10gXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgcmVzdWx0IG9mIHByb2Nlc3NpbmcgYSBydWxlIG9yIHJ1bGUgZ3JvdXBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc1Jlc3VsdCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4geyBcclxuICAvKiogV2hldGhlciB0aGUgcnVsZSBvciBydWxlIGdyb3VwIHBhc3NlZCAqL1xyXG4gIHBhc3M6IGJvb2xlYW4gXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgcmVzdWx0IG9mIHZhbGlkYXRpbmcgYSBydWxlIG9yIHJ1bGUgZ3JvdXBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZUV2YWx1YXRpb24geyBcclxuICAvKiogV2hldGhlciB0aGUgcnVsZSBpcyB2YWxpZCAqL1xyXG4gIGlzVmFsaWQ6IGJvb2xlYW47IFxyXG4gIC8qKiBFcnJvciBtZXNzYWdlIGlmIHRoZSBydWxlIGlzIGludmFsaWQgKi9cclxuICBtZXNzYWdlPzogc3RyaW5nOyBcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIHJ1bGUgcHJvY2Vzc2luZ1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcclxuICAvKiogUGx1Z2lucyB0byB1c2UgZHVyaW5nIHByb2Nlc3NpbmcgKi9cclxuICBwbHVnaW5zPzogUmVzdWx0UGx1Z2luW107XHJcbiAgLyoqIEN1c3RvbSBvcGVyYXRvcnMgdG8gdXNlIGR1cmluZyBwcm9jZXNzaW5nICovXHJcbiAgb3BlcmF0b3JzPzogT3BlcmF0b3JQbHVnaW47XHJcbn1cclxuXHJcbi8qKiBKYXZhU2NyaXB0IHZhbHVlIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9ICdzdHJpbmcnIHwgJ251bWJlcicgfCAnYmlnaW50JyB8ICdib29sZWFuJyB8ICdzeW1ib2wnIHwgJ3VuZGVmaW5lZCcgfCAnb2JqZWN0JyB8ICdmdW5jdGlvbicgfCAnYXJyYXknO1xyXG5cclxuLyoqIEJ1aWx0LWluIG9wZXJhdG9ycyAqL1xyXG5leHBvcnQgY29uc3QgaW50ZXJuYWxPcGVyYXRvclZhbHVlczogT3BlcmF0b3JbXSA9IFsnZXEnLCAnbmVxJywgJ2d0JywgJ2x0JywgJ2d0ZScsICdsdGUnLCAnaGFzJywgJ25oYXMnLCAnaW4nLCAnbml0J107XHJcblxyXG5jb25zdCBkZWZhdWx0RGVsaW1pdGVyID0gJy4nO1xyXG5cclxuLy8gQ3JlYXRlIGEgbWFwIGZvciBmYXN0ZXIgb3BlcmF0b3IgbG9va3Vwc1xyXG5jb25zdCBvcGVyYXRvck1hcCA9IG5ldyBTZXQoaW50ZXJuYWxPcGVyYXRvclZhbHVlcyk7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBhIHJ1bGUgaXMgYSBydWxlIGdyb3VwIChoYXMgJ2FsbCcgb3IgJ2FueScgcHJvcGVydHkpXHJcbiAqIFxyXG4gKiBAcGFyYW0gdGVzdFJ1bGUgVGhlIHJ1bGUgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBydWxlIGlzIGEgcnVsZSBncm91cCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNHcm91cCh0ZXN0UnVsZTogUnVsZSB8IFJ1bGVHcm91cCA9IHt9KTogYm9vbGVhbiB7XHJcbiAgaWYgKCF0ZXN0UnVsZSB8fCB0eXBlb2YgdGVzdFJ1bGUgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3QgeyBhbGwsIGFueSB9ID0gdGVzdFJ1bGUgYXMgUnVsZUdyb3VwO1xyXG4gIHJldHVybiBCb29sZWFuKGFsbCB8fCBhbnkpO1xyXG59XHJcblxyXG4vKipcclxuICogRmxhdHRlbnMgYSBuZXN0ZWQgb2JqZWN0IGludG8gYSBzaW5nbGUtbGV2ZWwgb2JqZWN0IHdpdGggZG90IG5vdGF0aW9uIGtleXNcclxuICogXHJcbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBmbGF0dGVuXHJcbiAqIEBwYXJhbSBwcmVmaXggUHJlZml4IGZvciB0aGUgZmxhdHRlbmVkIGtleXNcclxuICogQHBhcmFtIGRlbGltaXRlciBEZWxpbWl0ZXIgZm9yIG5lc3RlZCBrZXlzIChkZWZhdWx0OiAnLicpXHJcbiAqIEByZXR1cm5zIEEgZmxhdHRlbmVkIG9iamVjdCB3aXRoIGRvdCBub3RhdGlvbiBrZXlzXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGZsYXR0ZW5LZXlzKHsgdXNlcjogeyBuYW1lOiAnSm9obicsIGFnZTogMzAgfSB9KVxyXG4gKiAvLyBSZXR1cm5zOiB7ICd1c2VyLm5hbWUnOiAnSm9obicsICd1c2VyLmFnZSc6IDMwIH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbktleXMob2JqOiBhbnksIHByZWZpeCA9ICcnLCBkZWxpbWl0ZXIgPSAnLicpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcclxuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuIHt9O1xyXG4gIFxyXG4gIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4geyAuLi5hY2MsIC4uLmZsYXR0ZW5LZXlzKHZhbHVlLCBgJHtwcmVmaXh9JHtrZXl9JHtkZWxpbWl0ZXJ9YCkgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLmFjYywgW2Ake3ByZWZpeH0ke2tleX1gXTogdmFsdWUgfTtcclxuICB9LCB7fSk7XHJcbn1cclxuXHJcbi8vIE1lbW9pemUgdGhlIGZsYXR0ZW5LZXlzIGZ1bmN0aW9uIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcclxuZXhwb3J0IGNvbnN0IG1lbW9pemVkRmxhdHRlbktleXMgPSBtZW1vaXplKGZsYXR0ZW5LZXlzKTtcclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIHJlc3VsdCBvZiBhIHJ1bGUgZXZhbHVhdGlvbiB0aHJvdWdoIHBsdWdpbnNcclxuICogXHJcbiAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyBmb3IgcmVzdWx0IHByb2Nlc3NpbmdcclxuICogQHJldHVybnMgVGhlIHByb2Nlc3NlZCByZXN1bHRcclxuICovXHJcbmV4cG9ydCBjb25zdCBwcm9jZXNzUmVzdWx0ID0gKHsgcGFzcywgZmFjdHMsIHJ1bGUsIGdyb3VwLCBwbHVnaW5zID0gW10gYXMgUmVzdWx0UGx1Z2luW10gfTogUHJvY2Vzc0FyZ3MpOiBQcm9jZXNzUmVzdWx0ID0+IHtcclxuICBpZiAocGx1Z2lucy5sZW5ndGggPT09IDApIHJldHVybiB7IHBhc3MgfTtcclxuICBcclxuICByZXR1cm4gcGx1Z2lucy5yZWR1Y2UoXHJcbiAgICAocGx1Z2luUmVzdWx0LCBwbHVnaW4pID0+ICh7IC4uLnBsdWdpblJlc3VsdCwgLi4uKHBsdWdpbih7IHBhc3MsIGZhY3RzLCBydWxlLCBncm91cCB9KSB8fCB7fSkgfSksIFxyXG4gICAgeyBwYXNzIH1cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gZm9yICdpbicgYW5kICduaXQnIG9wZXJhdG9yc1xyXG4gKiBcclxuICogQHBhcmFtIG9wZXJhdG9yIFRoZSBvcGVyYXRvciB0byB1c2UgKCdpbicgb3IgJ25pdCcpXHJcbiAqIEByZXR1cm5zIEFuIG9wZXJhdG9yIGZ1bmN0aW9uXHJcbiAqL1xyXG5jb25zdCBpbl9uaXQgPSAob3BlcmF0b3I6IE9wZXJhdG9yKSA9PiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB7XHJcbiAgaWYgKCF0ZXJtKSByZXR1cm4gZmFsc2U7XHJcbiAgXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodGVybSkgfHwgWydzdHJpbmcnLCAnb2JqZWN0J10uaW5jbHVkZXModHlwZW9mIHRlcm0pKSB7XHJcbiAgICBjb25zdCBwYXNzID0gdGVybS5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICByZXR1cm4gb3BlcmF0b3IgPT09ICdpbicgPyBwYXNzIDogIXBhc3M7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIGZvciAnaGFzJyBhbmQgJ25oYXMnIG9wZXJhdG9yc1xyXG4gKiBcclxuICogQHBhcmFtIG9wZXJhdG9yIFRoZSBvcGVyYXRvciB0byB1c2UgKCdoYXMnIG9yICduaGFzJylcclxuICogQHJldHVybnMgQW4gb3BlcmF0b3IgZnVuY3Rpb25cclxuICovXHJcbmNvbnN0IGhhc19uaGFzID0gKG9wZXJhdG9yOiBPcGVyYXRvcikgPT4gKHsgdmFsdWUsIHRlcm0gfSkgPT4ge1xyXG4gIGlmICghdmFsdWUgfHwgWydudW1iZXInLCAnYmlnaW50JywgJ3N5bWJvbCcsICd1bmRlZmluZWQnXS5pbmNsdWRlcyh0eXBlb2YgdmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcbiAgXHJcbiAgY29uc3QgcGFzcyA9IHZhbHVlLmluY2x1ZGVzKHRlcm0pO1xyXG4gIHJldHVybiAob3BlcmF0b3IgPT09ICdoYXMnKSA/IHBhc3MgOiAhcGFzcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1aWx0LWluIG9wZXJhdG9ycyBmb3IgcnVsZSBwcm9jZXNzaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW50ZXJuYWxPcGVyYXRvcnMgPSB7XHJcbiAgLyoqIEVxdWFsICg9PT0pICovXHJcbiAgZXE6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID09PSB0ZXJtLFxyXG4gIC8qKiBOb3QgZXF1YWwgKCE9PSkgKi9cclxuICBuZXE6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlICE9PSB0ZXJtLFxyXG4gIC8qKiBHcmVhdGVyIHRoYW4gKD4pICovXHJcbiAgZ3Q6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID4gdGVybSxcclxuICAvKiogR3JlYXRlciB0aGFuIG9yIGVxdWFsICg+PSkgKi9cclxuICBndGU6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID49IHRlcm0sXHJcbiAgLyoqIExlc3MgdGhhbiAoPCkgKi9cclxuICBsdDogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPCB0ZXJtLFxyXG4gIC8qKiBMZXNzIHRoYW4gb3IgZXF1YWwgKDw9KSAqL1xyXG4gIGx0ZTogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPD0gdGVybSxcclxuICAvKiogVmFsdWUgaXMgaW4gYXJyYXkvc3RyaW5nL29iamVjdCAqL1xyXG4gIGluOiBpbl9uaXQoJ2luJyksXHJcbiAgLyoqIFZhbHVlIGlzIG5vdCBpbiBhcnJheS9zdHJpbmcvb2JqZWN0ICovXHJcbiAgbml0OiBpbl9uaXQoJ25pdCcpLFxyXG4gIC8qKiBDb250YWlucyB2YWx1ZSAqL1xyXG4gIGhhczogaGFzX25oYXMoJ2hhcycpLFxyXG4gIC8qKiBEb2VzIG5vdCBjb250YWluIHZhbHVlICovXHJcbiAgbmhhczogaGFzX25oYXMoJ25oYXMnKVxyXG59IGFzIE9wZXJhdG9yUGx1Z2luO1xyXG5cclxuLy8gQ2FjaGUgZm9yIGRvdCBub3RhdGlvbiBsb29rdXBzXHJcbmNvbnN0IGZhY3RRdWVyeUNhY2hlID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3QgYSB2YWx1ZSBmcm9tIGZhY3RzIHVzaW5nIGRvdCBub3RhdGlvblxyXG4gKiBcclxuICogQHBhcmFtIGZhY3RzIFRoZSBmYWN0cyBvYmplY3RcclxuICogQHBhcmFtIHN1YmplY3QgVGhlIHN1YmplY3Qgd2l0aCBkb3Qgbm90YXRpb25cclxuICogQHJldHVybnMgVGhlIGV4dHJhY3RlZCB2YWx1ZSBhbmQgaXRzIHR5cGVcclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3REb3ROb3RhdGlvblZhbHVlKGZhY3RzOiBGYWN0cywgc3ViamVjdDogc3RyaW5nKSB7XHJcbiAgY29uc3QgY2FjaGVLZXkgPSBgJHtKU09OLnN0cmluZ2lmeShmYWN0cyl9LSR7c3ViamVjdH1gO1xyXG4gIFxyXG4gIGlmIChmYWN0UXVlcnlDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XHJcbiAgICByZXR1cm4gZmFjdFF1ZXJ5Q2FjaGUuZ2V0KGNhY2hlS2V5KTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgZmxhdEZhY3RzID0gbWVtb2l6ZWRGbGF0dGVuS2V5cyhmYWN0cyk7XHJcbiAgY29uc3QgcXVlcnlWYWx1ZSA9IGZsYXRGYWN0c1tzdWJqZWN0XTtcclxuICBjb25zdCB0eXBlID0gQXJyYXkuaXNBcnJheShxdWVyeVZhbHVlKSA/ICdhcnJheScgOiB0eXBlb2YgcXVlcnlWYWx1ZTtcclxuICBcclxuICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICB2YWx1ZTogcXVlcnlWYWx1ZSxcclxuICAgIHR5cGVcclxuICB9O1xyXG4gIFxyXG4gIGZhY3RRdWVyeUNhY2hlLnNldChjYWNoZUtleSwgcmVzdWx0KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIGEgc2luZ2xlIHJ1bGUgb3IgcnVsZSBncm91cCBhZ2FpbnN0IGEgc2V0IG9mIGZhY3RzXHJcbiAqIFxyXG4gKiBAcGFyYW0gZmFjdHMgVGhlIGZhY3RzIHRvIGV2YWx1YXRlIGFnYWluc3RcclxuICogQHBhcmFtIHJ1bGUgVGhlIHJ1bGUgb3IgcnVsZSBncm91cCB0byBwcm9jZXNzXHJcbiAqIEBwYXJhbSBvcHRpb25zIFByb2Nlc3Npbmcgb3B0aW9ucyAocGx1Z2lucywgY3VzdG9tIG9wZXJhdG9ycylcclxuICogQHJldHVybnMgVGhlIHByb2Nlc3NlZCByZXN1bHRcclxuICogXHJcbiAqIEB0aHJvd3MgRXJyb3IgaWYgdGhlIHJ1bGUgaXMgaW52YWxpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSdWxlT3JHcm91cChmYWN0czogRmFjdHMgPSB7fSwgcnVsZTogUnVsZSB8IFJ1bGVHcm91cCwgb3B0aW9uczogT3B0aW9ucyA9IHt9KTogUHJvY2Vzc1Jlc3VsdCB7XHJcbiAgY29uc3QgeyBwbHVnaW5zID0gW10sIG9wZXJhdG9ycyA9IHt9IH0gPSBvcHRpb25zO1xyXG4gIFxyXG4gIC8vIEZhc3QgcGF0aCBmb3IgcnVsZSBncm91cHNcclxuICBpZiAoaXNHcm91cChydWxlKSkge1xyXG4gICAgcmV0dXJuIHByb2Nlc3NHcm91cChmYWN0cywgcnVsZSBhcyBSdWxlR3JvdXAsIHsgcGx1Z2lucyB9KTtcclxuICB9XHJcblxyXG4gIC8vIEhhbmRsZSBydWxlXHJcbiAgY29uc3QgW3N1YmplY3QsIG9wLCB0ZXJtXSA9IHJ1bGUgYXMgUnVsZTtcclxuICBcclxuICAvLyBWYWxpZGF0ZSBydWxlXHJcbiAgaWYgKHN1YmplY3QgPT09IG51bGwgfHwgc3ViamVjdCA9PT0gdW5kZWZpbmVkIHx8ICFvcCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFJ1bGVcXG4ke0pTT04uc3RyaW5naWZ5KHJ1bGUsIG51bGwsIDIpfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSByZXN1bHRcclxuICBjb25zdCBydWxlUmVzdWx0ID0geyBwYXNzOiBmYWxzZSB9IGFzIFBsdWdpbkFyZ3M7XHJcbiAgXHJcbiAgLy8gR2V0IHRoZSB2YWx1ZSBhbmQgaXRzIHR5cGVcclxuICBsZXQgZmFjdFZhbHVlLCB2YWx1ZVR5cGU7XHJcbiAgXHJcbiAgLy8gSGFuZGxlIGRvdCBub3RhdGlvblxyXG4gIGlmIChzdWJqZWN0LmluZGV4T2YoZGVmYXVsdERlbGltaXRlcikgPiAwKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBleHRyYWN0RG90Tm90YXRpb25WYWx1ZShmYWN0cywgc3ViamVjdCk7XHJcbiAgICBmYWN0VmFsdWUgPSByZXN1bHQudmFsdWU7XHJcbiAgICB2YWx1ZVR5cGUgPSByZXN1bHQudHlwZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmFjdFZhbHVlID0gZmFjdHM/LltzdWJqZWN0XTtcclxuICAgIHZhbHVlVHlwZSA9IEFycmF5LmlzQXJyYXkoZmFjdFZhbHVlKSA/ICdhcnJheScgOiB0eXBlb2YgZmFjdFZhbHVlO1xyXG4gIH1cclxuICBcclxuICAvLyBIYW5kbGUgdGVybSBwcm9jZXNzaW5nXHJcbiAgY29uc3QgdGVybUlzT2JqZWN0ID0gdGVybSAhPT0gbnVsbCAmJiB0eXBlb2YgdGVybSA9PT0gJ29iamVjdCc7XHJcbiAgXHJcbiAgLy8gUGFyc2UgbnVtZXJpYyB2YWx1ZXMgY29ycmVjdGx5XHJcbiAgY29uc3QgaXNOdW1lcmljID0gdmFsdWVUeXBlID09PSAnYmlnaW50JyB8fCB2YWx1ZVR5cGUgPT09ICdudW1iZXInO1xyXG4gIGNvbnN0IHRlcm1WYWx1ZSA9IGlzTnVtZXJpYyAmJiB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyBOdW1iZXIodGVybSkgOiB0ZXJtO1xyXG4gIFxyXG4gIC8vIEFwcGx5IG9wZXJhdG9yXHJcbiAgaWYgKGludGVybmFsT3BlcmF0b3JzW29wXSkge1xyXG4gICAgcnVsZVJlc3VsdC5wYXNzID0gaW50ZXJuYWxPcGVyYXRvcnNbb3BdKHsgdmFsdWU6IGZhY3RWYWx1ZSwgdGVybTogdGVybVZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQXBwbHkgY3VzdG9tIG9wZXJhdG9ycyAod2hpY2ggY2FuIG92ZXJyaWRlIGludGVybmFsIG9wZXJhdG9ycylcclxuICBpZiAob3BlcmF0b3JzW29wXSkge1xyXG4gICAgcnVsZVJlc3VsdC5wYXNzID0gb3BlcmF0b3JzW29wXSh7IHZhbHVlOiBmYWN0VmFsdWUsIHRlcm06IHRlcm1WYWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8vIFByb2Nlc3MgcmVzdWx0c1xyXG4gIHJldHVybiBwcm9jZXNzUmVzdWx0KHtcclxuICAgIC4uLnJ1bGVSZXN1bHQsXHJcbiAgICBydWxlLFxyXG4gICAgZmFjdHMsXHJcbiAgICBwbHVnaW5zXHJcbiAgfSBhcyBQcm9jZXNzQXJncyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgYSBydWxlIGdyb3VwIGFnYWluc3QgYSBzZXQgb2YgZmFjdHNcclxuICogXHJcbiAqIEBwYXJhbSBmYWN0cyBUaGUgZmFjdHMgdG8gZXZhbHVhdGUgYWdhaW5zdFxyXG4gKiBAcGFyYW0gcnVsZUdyb3VwIFRoZSBydWxlIGdyb3VwIHRvIHByb2Nlc3NcclxuICogQHBhcmFtIG9wdGlvbnMgUHJvY2Vzc2luZyBvcHRpb25zIChwbHVnaW5zLCBjdXN0b20gb3BlcmF0b3JzKVxyXG4gKiBAcmV0dXJucyBUaGUgcHJvY2Vzc2VkIHJlc3VsdFxyXG4gKiBcclxuICogQHRocm93cyBFcnJvciBpZiB0aGUgcnVsZSBncm91cCBpcyBpbnZhbGlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0dyb3VwKGZhY3RzOiBGYWN0cyA9IHt9LCBydWxlR3JvdXA6IFJ1bGVHcm91cCA9IHt9LCBvcHRpb25zOiBPcHRpb25zID0ge30pOiBQcm9jZXNzUmVzdWx0IHtcclxuICBjb25zdCB7IGFsbCwgYW55IH0gPSBydWxlR3JvdXA7XHJcbiAgY29uc3QgeyBwbHVnaW5zID0gW10gfSA9IG9wdGlvbnM7XHJcbiAgY29uc3QgYWN0aW9uID0gKHJ1bGU6IFJ1bGUgfCBSdWxlR3JvdXApID0+IHByb2Nlc3NSdWxlT3JHcm91cChmYWN0cywgcnVsZSwgb3B0aW9ucyk7XHJcblxyXG4gIGlmIChhbGwpIHtcclxuICAgIC8vIE9wdGltaXphdGlvbjogc2hvcnQtY2lyY3VpdCBvbiBmaXJzdCBmYWlsdXJlIGZvciAnYWxsJyBncm91cHNcclxuICAgIGNvbnN0IGdyb3VwUmVzdWx0ID0gW107XHJcbiAgICBsZXQgYWxsUGFzcyA9IHRydWU7XHJcbiAgICBcclxuICAgIGZvciAoY29uc3QgcnVsZSBvZiBhbGwpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYWN0aW9uKHJ1bGUpO1xyXG4gICAgICBncm91cFJlc3VsdC5wdXNoKHJlc3VsdCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXJlc3VsdC5wYXNzKSB7XHJcbiAgICAgICAgYWxsUGFzcyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChwbHVnaW5zLmxlbmd0aCA9PT0gMCkgYnJlYWs7IC8vIE9ubHkgc2hvcnQtY2lyY3VpdCBpZiBub3QgdXNpbmcgcGx1Z2luc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHsgXHJcbiAgICAgIHBhc3M6IGFsbFBhc3MsIFxyXG4gICAgICBydWxlOiBydWxlR3JvdXAsIFxyXG4gICAgICBmYWN0cywgXHJcbiAgICAgIHBsdWdpbnMsIFxyXG4gICAgICBncm91cDogeyBhbGw6IGdyb3VwUmVzdWx0LCBwYXNzOiBhbGxQYXNzIH0gXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChhbnkpIHtcclxuICAgIC8vIE9wdGltaXphdGlvbjogc2hvcnQtY2lyY3VpdCBvbiBmaXJzdCBzdWNjZXNzIGZvciAnYW55JyBncm91cHNcclxuICAgIGNvbnN0IGdyb3VwUmVzdWx0ID0gW107XHJcbiAgICBsZXQgYW55UGFzcyA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgYW55KSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGFjdGlvbihydWxlKTtcclxuICAgICAgZ3JvdXBSZXN1bHQucHVzaChyZXN1bHQpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdC5wYXNzKSB7XHJcbiAgICAgICAgYW55UGFzcyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHBsdWdpbnMubGVuZ3RoID09PSAwKSBicmVhazsgLy8gT25seSBzaG9ydC1jaXJjdWl0IGlmIG5vdCB1c2luZyBwbHVnaW5zXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQoeyBcclxuICAgICAgcGFzczogYW55UGFzcywgXHJcbiAgICAgIHJ1bGU6IHJ1bGVHcm91cCwgXHJcbiAgICAgIGZhY3RzLCBcclxuICAgICAgcGx1Z2lucywgXHJcbiAgICAgIGdyb3VwOiB7IGFueTogZ3JvdXBSZXN1bHQsIHBhc3M6IGFueVBhc3MgfSBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFJ1bGVHcm91cFxcbiR7SlNPTi5zdHJpbmdpZnkocnVsZUdyb3VwLCBudWxsLCAyKX1gKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcGx1Z2luIHRoYXQgYWRkcyB2ZXJib3NlIGluZm9ybWF0aW9uIHRvIHRoZSByZXN1bHRcclxuICogXHJcbiAqIEBwYXJhbSBhcmdzIFBsdWdpbiBhcmd1bWVudHNcclxuICogQHJldHVybnMgVGhlIHByb2Nlc3NlZCByZXN1bHQgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdmVyYm9zZVBsdWdpbiA9ICh7IHBhc3MsIHJ1bGUsIGdyb3VwIH06IFBsdWdpbkFyZ3MpID0+ICh7IHBhc3MsIHJ1bGUsIGdyb3VwIH0pO1xyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyBhIHJ1bGUgZ3JvdXAgd2l0aCB2ZXJib3NlIG91dHB1dFxyXG4gKiBcclxuICogQHBhcmFtIGZhY3RzIFRoZSBmYWN0cyB0byBldmFsdWF0ZSBhZ2FpbnN0XHJcbiAqIEBwYXJhbSBydWxlR3JvdXAgVGhlIHJ1bGUgZ3JvdXAgdG8gcHJvY2Vzc1xyXG4gKiBAcGFyYW0gcGx1Z2lucyBBZGRpdGlvbmFsIHBsdWdpbnMgdG8gdXNlXHJcbiAqIEByZXR1cm5zIFRoZSBwcm9jZXNzZWQgcmVzdWx0IHdpdGggdmVyYm9zZSBpbmZvcm1hdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NWZXJib3NlID0gKGZhY3RzOiBGYWN0cyA9IHt9LCBydWxlR3JvdXA6IFJ1bGVHcm91cCwgcGx1Z2luczogUmVzdWx0UGx1Z2luW10gPSBbXSkgPT4gKFxyXG4gIHByb2Nlc3NHcm91cChmYWN0cywgcnVsZUdyb3VwLCB7IHBsdWdpbnM6IFt2ZXJib3NlUGx1Z2luLCAuLi5wbHVnaW5zXSB9KVxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBhIHJ1bGUgZ3JvdXAgc3RydWN0dXJlIHdpdGhvdXQgcHJvY2Vzc2luZyBpdFxyXG4gKiBcclxuICogQHBhcmFtIHJ1bGVHcm91cCBUaGUgcnVsZSBncm91cCB0byB2YWxpZGF0ZVxyXG4gKiBAcmV0dXJucyBBbiBldmFsdWF0aW9uIHJlc3VsdCB3aXRoIGlzVmFsaWQgZmxhZyBhbmQgb3B0aW9uYWwgZXJyb3IgbWVzc2FnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUnVsZShydWxlR3JvdXAgPSB7fSBhcyBSdWxlR3JvdXApOiBSdWxlRXZhbHVhdGlvbiB7XHJcbiAgaWYgKCFydWxlR3JvdXApIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiAnTm8gUnVsZSBHcm91cCBGb3VuZCdcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHsgYWxsLCBhbnkgfSA9IHJ1bGVHcm91cDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVSdWxlU2V0ID0gKHJ1bGVzOiBSdWxlcykgPT4ge1xyXG4gICAgaWYgKCFydWxlcyB8fCAhQXJyYXkuaXNBcnJheShydWxlcykgfHwgcnVsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJ05vIFJ1bGUgR3JvdXAgRm91bmQnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvciAobGV0IHJ1bGVJbmRleCA9IDA7IHJ1bGVJbmRleCA8IHJ1bGVzLmxlbmd0aDsgcnVsZUluZGV4KyspIHtcclxuICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzW3J1bGVJbmRleF07XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBmb3IgbmVzdGVkIHJ1bGUgZ3JvdXBzXHJcbiAgICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocnVsZSkpIHtcclxuICAgICAgICBjb25zdCBydWxlR3JvdXAgPSBydWxlIGFzIFJ1bGVHcm91cDtcclxuICAgICAgICBpZiAocnVsZUdyb3VwPy5hbGwgfHwgcnVsZUdyb3VwPy5hbnkpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRlUnVsZShydWxlR3JvdXApO1xyXG4gICAgICAgICAgaWYgKCFyZXN1bHQuaXNWYWxpZCkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTXVzdCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IDIgZWxlbWVudHNcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJ1bGUpIHx8IHJ1bGUubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIFJ1bGUgRm9ybWF0J1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IFtmaWVsZCwgb3BdID0gcnVsZTtcclxuICAgICAgaWYgKCFmaWVsZCB8fCAhb3ApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBSdWxlOiBNaXNzaW5nIGZpZWxkIG9yIG9wZXJhdG9yJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEZhc3QgY2hlY2sgZm9yIHZhbGlkIG9wZXJhdG9ycyB1c2luZyBTZXRcclxuICAgICAgaWYgKCFvcGVyYXRvck1hcC5oYXMob3ApKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbWVzc2FnZTogYEludmFsaWQgT3BlcmF0b3I6ICR7b3B9YFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBpZiAoYWxsIHx8IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbGlkYXRlUnVsZVNldChhbGwgfHwgYW55KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6ICdObyBRdWFudGlmaWVycyAoYWxsfGFueSkgRm91bmQnXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsaWFzIGZvciBwcm9jZXNzR3JvdXBcclxuICogQHNlZSB7QGxpbmsgcHJvY2Vzc0dyb3VwfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NSdWxlcyA9IHByb2Nlc3NHcm91cDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBleHBvcnQgaXMgdGhlIHByb2Nlc3NSdWxlcyBmdW5jdGlvblxyXG4gKiBAc2VlIHtAbGluayBwcm9jZXNzR3JvdXB9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzUnVsZXM7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVzIGEgbWVtb2l6ZWQgdmVyc2lvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgY2FjaGVzIHJlc3VsdHMgYmFzZWQgb24gaW5wdXQgYXJndW1lbnRzXHJcbiAqIFxyXG4gKiBAcGFyYW0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1lbW9pemVcclxuICogQHJldHVybnMgQSBtZW1vaXplZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbW9pemU8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihmbjogVCk6IFQge1xyXG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xyXG4gIFxyXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShhcmdzKTtcclxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xyXG4gICAgY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSkgYXMgVDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9

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
    const [factKeys, setFactKeys] = (0, react_1.useState)(Object.entries((0, _1.flattenKeys)(facts)));
    const [liveRule, setEditRule] = (0, react_1.useState)(rule);
    const [factKey, operator, term] = liveRule;
    (0, react_1.useEffect)(() => {
        setFactKeys(Object.entries((0, _1.flattenKeys)(facts)));
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
exports.opMap = exports.safeParse = exports.flattenKeys = exports.ICRulesEditor = exports.ICRulesEditorAntd = exports.FactsEditorAntd = void 0;
var RuleEditorAntd_1 = __webpack_require__(/*! ./RuleEditorAntd */ "./src/RuleEditorAntd.tsx");
Object.defineProperty(exports, "FactsEditorAntd", ({ enumerable: true, get: function () { return RuleEditorAntd_1.FactsEditorAntd; } }));
var RuleEditorAntd_2 = __webpack_require__(/*! ./RuleEditorAntd */ "./src/RuleEditorAntd.tsx");
Object.defineProperty(exports, "ICRulesEditorAntd", ({ enumerable: true, get: function () { return RuleEditorAntd_2.ICRulesEditorAntd; } }));
const core_1 = __webpack_require__(/*! @icrules/core */ "../core/lib/index.js");
const RuleEditor_1 = __webpack_require__(/*! ./RuleEditor */ "./src/RuleEditor.tsx");
Object.defineProperty(exports, "ICRulesEditor", ({ enumerable: true, get: function () { return RuleEditor_1.ICRulesEditor; } }));
exports["default"] = RuleEditor_1.ICRulesEditor;
exports.flattenKeys = core_1.memoizedFlattenKeys;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyw4Q0FBOEMsb0JBQW9CLDBCQUEwQix5TUFBeU0sc0JBQXNCLGtDQUFrQyxrQkFBa0IsNkJBQTZCLHFCQUFxQixLQUFLLGdCQUFnQixzQkFBc0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixLQUFLLHFCQUFxQixzQkFBc0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixtQkFBbUIsS0FBSyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixLQUFLLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEtBQUssdUNBQXVDLCtCQUErQixLQUFLLDRCQUE0QixzQkFBc0IsS0FBSyw0QkFBNEIsbUJBQW1CLHFCQUFxQixLQUFLLHNCQUFzQixrQkFBa0IseUJBQXlCLDZCQUE2Qiw0QkFBNEIsd0JBQXdCLHNCQUFzQixLQUFLLHFCQUFxQixrQkFBa0IseUJBQXlCLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLEtBQUssK0NBQStDLHVDQUF1QyxtQkFBbUIsS0FBSywrQ0FBK0MsdUNBQXVDLHFCQUFxQixLQUFLLHFDQUFxQyx5QkFBeUIsaUJBQWlCLGtDQUFrQyxLQUFLLG9CQUFvQixvQkFBb0IsNkJBQTZCLEtBQUssOEJBQThCLG9CQUFvQiwwQkFBMEIsS0FBSyx1Q0FBdUMsOEJBQThCLEtBQUssd0NBQXdDLDhCQUE4QixLQUFLLGtEQUFrRCxzQkFBc0IsZ0JBQWdCLHdCQUF3QixtQkFBbUIsdUJBQXVCLEtBQUssNEJBQTRCLHdCQUF3QixtQkFBbUIsS0FBSyw4REFBOEQsb0JBQW9CLEtBQUssc0JBQXNCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLEtBQUssdUJBQXVCLG9CQUFvQiw2QkFBNkIsS0FBSywrQ0FBK0MsdUNBQXVDLDZCQUE2Qix3QkFBd0Isc0JBQXNCLEtBQUssMkJBQTJCO0FBQ3A0SDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNwSjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLG9CQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlHQUFpRyxlQUFlO0FBQ2hIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVIsa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBLHFDQUFxQzs7QUFFckMsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUEsZ0NBQWdDOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFNBQVM7QUFDVCx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDO0FBQ2pDO0FBQ0EsU0FBUztBQUNULDJCQUEyQjtBQUMzQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7O0FBR2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0VBQW9FOztBQUVwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZCxXQUFXLGVBQWU7QUFDMUIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjs7QUFF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Q3BCLEVBQUUsRUFBRSxhQUFhO0lBQ2pCLEdBQUcsRUFBRSxrQkFBa0I7SUFDdkIsR0FBRyxFQUFFLHFCQUFxQjtJQUMxQixHQUFHLEVBQUUsVUFBVTtJQUNmLElBQUksRUFBRSxjQUFjO0lBQ3BCLEVBQUUsRUFBRSxTQUFTO0lBQ2IsR0FBRyxFQUFFLGFBQWE7Q0FDbkIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckNGOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL2VkaXRvclN0eWxlLmNzcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2VkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2VkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2VkaXRvci8uLi9jb3JlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvUnVsZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL1J1bGVFZGl0b3JBbnRkLnRzeCIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvZWRpdG9yU3R5bGUuY3NzP2U1ZmUiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2VkaXRvci9leHRlcm5hbCB1bWQgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovL2VkaXRvci9leHRlcm5hbCB1bWQgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vZWRpdG9yL2V4dGVybmFsIHVtZCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiYW50ZFwiLCBcIkBhbnQtZGVzaWduL2ljb25zXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImVkaXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlZGl0b3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcImFudGRcIl0sIHJvb3RbXCJAYW50LWRlc2lnbi9pY29uc1wiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fKSA9PiB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ydWxlLWdyb3VwLWVkaXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlZWU7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2JiYjtcclxuICBwYWRkaW5nOiAycHggMDtcclxufVxyXG5cclxuLnJ1bGVzIHtcclxuICBtYXJnaW46IDBweCAwcHg7XHJcbiAgcGFkZGluZzogMnB4IDJweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSB7XHJcbiAgbWFyZ2luOiAycHggMHB4O1xyXG4gIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3QgLmVkaXRvci13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3QgLmFkZHJ1bGUge1xyXG4gIG1hcmdpbjogNnB4IDVweCAwcHggMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3QgLnJlbW92ZS1ncm91cC1jZWxsIHtcclxuICBtYXJnaW46IDE0cHggNXB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5ydWxlLWVudHJ5IG9wdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSBvcHRpb24ge1xyXG4gIGhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLnJ1bGUtcmVzdWx0IHtcclxuICB3aWR0aDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW46IDRweCA3cHggMCA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uY2hlY2stbWFyayB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiAxcHggOHB4IDAgMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNoZWNrLW1hcmsgLnBhc3MsIC5ydWxlLXJlc3VsdCAucGFzcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uY2hlY2stbWFyayAuZmFpbCwgLnJ1bGUtcmVzdWx0IC5mYWlsIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuLnJ1bGUtZW50cnkgLmF1dG8tc2VsZWN0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlZWU7XHJcbn1cclxuXHJcbi5ydWxlLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJ1bGUtbGlzdCAucnVsZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnJ1bGUtbGlzdCAuZWRpdC1ydWxlLWJ1dHRvbnMge1xyXG4gIG1hcmdpbjogNXB4IDVweCAwcHggMHB4O1xyXG59XHJcblxyXG4ucnVsZS1saXN0IC5lZGl0LWdyb3VwLWJ1dHRvbnMge1xyXG4gIG1hcmdpbjogNXB4IDVweCAwcHggMHB4O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSBzZWxlY3QsXHJcbi5ydWxlLWVudHJ5IGlucHV0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAycHggNHB4O1xyXG59XHJcblxyXG4ucnVsZS1lbnRyeSBzZWxlY3Qge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGhlaWdodDogMjZweDtcclxufVxyXG5cclxuLnJ1bGUtZW50cnkgc2VsZWN0OmZvY3VzLFxyXG4ucnVsZS1lbnRyeSBpbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnJ1bGUtZWRpdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWVlO1xyXG59XHJcblxyXG4uZmFjdHMtc3RhdHVzIHtcclxuICBwYWRkaW5nOiAycHg7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQtZ3JvdXAsIGJ1dHRvbi5yZW1vdmUtZ3JvdXAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luOiAwcHggMnB4O1xyXG59XHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lZGl0b3JTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtNQUFrTTtFQUNsTSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucnVsZS1ncm91cC1lZGl0b3Ige1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWVlZTtcXHJcXG4gIG1hcmdpbjogMnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2JiYjtcXHJcXG4gIHBhZGRpbmc6IDJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZXMge1xcclxcbiAgbWFyZ2luOiAwcHggMHB4O1xcclxcbiAgcGFkZGluZzogMnB4IDJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVudHJ5IHtcXHJcXG4gIG1hcmdpbjogMnB4IDBweDtcXHJcXG4gIHBhZGRpbmc6IDJweCA0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1saXN0IC5lZGl0b3Itd3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtbGlzdCAuYWRkcnVsZSB7XFxyXFxuICBtYXJnaW46IDZweCA1cHggMHB4IDBweDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWxpc3QgLnJlbW92ZS1ncm91cC1jZWxsIHtcXHJcXG4gIG1hcmdpbjogMTRweCA1cHggMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgb3B0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgb3B0aW9uIHtcXHJcXG4gIGhlaWdodDogMjJweDtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1yZXN1bHQge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luOiA0cHggN3B4IDAgOHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1tYXJrIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbjogMXB4IDhweCAwIDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLW1hcmsgLnBhc3MsIC5ydWxlLXJlc3VsdCAucGFzcyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1tYXJrIC5mYWlsLCAucnVsZS1yZXN1bHQgLmZhaWwge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcclxcbiAgY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWVudHJ5IC5hdXRvLXNlbGVjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1saXN0IC5ydWxlLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtbGlzdCAuZWRpdC1ydWxlLWJ1dHRvbnMge1xcclxcbiAgbWFyZ2luOiA1cHggNXB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlLWxpc3QgLmVkaXQtZ3JvdXAtYnV0dG9ucyB7XFxyXFxuICBtYXJnaW46IDVweCA1cHggMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgc2VsZWN0LFxcclxcbi5ydWxlLWVudHJ5IGlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgcGFkZGluZzogMnB4IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZW50cnkgc2VsZWN0IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZS1lbnRyeSBzZWxlY3Q6Zm9jdXMsXFxyXFxuLnJ1bGUtZW50cnkgaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGUtZWRpdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFjdHMtc3RhdHVzIHtcXHJcXG4gIHBhZGRpbmc6IDJweDsgXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLWdyb3VwLCBidXR0b24ucmVtb3ZlLWdyb3VwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG4gIG1hcmdpbjogMHB4IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRLZXlTcHJlYWQgPSB7fTtcbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2tleScpKSB7XG4gICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gayAhPT0gJ2tleSc7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYmVmb3JlRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7a2V5OiBzb21lS2V5LCAnICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7a2V5OiBzb21lS2V5fSc7XG5cbiAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdKSB7XG4gICAgICAgICAgdmFyIGFmdGVyRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7JyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne30nO1xuXG4gICAgICAgICAgZXJyb3IoJ0EgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmcgYSBcImtleVwiIHByb3AgaXMgYmVpbmcgc3ByZWFkIGludG8gSlNYOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIHsuLi5wcm9wc30gLz5cXG4nICsgJ1JlYWN0IGtleXMgbXVzdCBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gSlNYIHdpdGhvdXQgdXNpbmcgc3ByZWFkOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIGtleT17c29tZUtleX0gey4uLnByb3BzfSAvPicsIGJlZm9yZUV4YW1wbGUsIGNvbXBvbmVudE5hbWUsIGFmdGVyRXhhbXBsZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuLy8gZXZlbiB3aXRoIHRoZSBwcm9kIHRyYW5zZm9ybS4gVGhpcyBtZWFucyB0aGF0IGpzeERFViBpcyBwdXJlbHlcbi8vIG9wdC1pbiBiZWhhdmlvciBmb3IgYmV0dGVyIG1lc3NhZ2VzIGJ1dCB0aGF0IHdlIHdvbid0IHN0b3Bcbi8vIGdpdmluZyB5b3Ugd2FybmluZ3MgaWYgeW91IHVzZSBwcm9kdWN0aW9uIGFwaXMuXG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25EeW5hbWljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBmYWxzZSk7XG4gIH1cbn1cblxudmFyIGpzeCA9ICBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMgOyAvLyB3ZSBtYXkgd2FudCB0byBzcGVjaWFsIGNhc2UganN4cyBpbnRlcm5hbGx5IHRvIHRha2UgYWR2YW50YWdlIG9mIHN0YXRpYyBjaGlsZHJlbi5cbi8vIGZvciBub3cgd2UgY2FuIHNoaXAgaWRlbnRpY2FsIHByb2QgZnVuY3Rpb25zXG5cbnZhciBqc3hzID0gIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljIDtcblxuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLmpzeCA9IGpzeDtcbmV4cG9ydHMuanN4cyA9IGpzeHM7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjb3JlXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuL3NyYy9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7IHZhbHVlOiB0cnVlIH0pKTtcbmV4cG9ydHMucHJvY2Vzc1J1bGVzID0gZXhwb3J0cy52YWxpZGF0ZVJ1bGUgPSBleHBvcnRzLnByb2Nlc3NWZXJib3NlID0gZXhwb3J0cy52ZXJib3NlUGx1Z2luID0gZXhwb3J0cy5wcm9jZXNzR3JvdXAgPSBleHBvcnRzLnByb2Nlc3NSdWxlT3JHcm91cCA9IGV4cG9ydHMuaW50ZXJuYWxPcGVyYXRvcnMgPSBleHBvcnRzLnByb2Nlc3NSZXN1bHQgPSBleHBvcnRzLm1lbW9pemVkRmxhdHRlbktleXMgPSBleHBvcnRzLmZsYXR0ZW5LZXlzID0gZXhwb3J0cy5pc0dyb3VwID0gZXhwb3J0cy5pbnRlcm5hbE9wZXJhdG9yVmFsdWVzID0gdm9pZCAwO1xuY29uc3QgbWVtb2l6ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9saWJyYXJ5L21lbW9pemUgKi8gXCIuL3NyYy9saWJyYXJ5L21lbW9pemUudHNcIik7XG5leHBvcnRzLmludGVybmFsT3BlcmF0b3JWYWx1ZXMgPSBbJ2VxJywgJ25lcScsICdndCcsICdsdCcsICdndGUnLCAnbHRlJywgJ2hhcycsICduaGFzJywgJ2luJywgJ25pdCddO1xuY29uc3QgZGVmYXVsdERlbGltaXRlciA9ICcuJztcbmNvbnN0IG9wZXJhdG9yTWFwID0gbmV3IFNldChleHBvcnRzLmludGVybmFsT3BlcmF0b3JWYWx1ZXMpO1xuZnVuY3Rpb24gaXNHcm91cCh0ZXN0UnVsZSA9IHt9KSB7XG4gICAgaWYgKCF0ZXN0UnVsZSB8fCB0eXBlb2YgdGVzdFJ1bGUgIT09ICdvYmplY3QnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgeyBhbGwsIGFueSB9ID0gdGVzdFJ1bGU7XG4gICAgcmV0dXJuIEJvb2xlYW4oYWxsIHx8IGFueSk7XG59XG5leHBvcnRzLmlzR3JvdXAgPSBpc0dyb3VwO1xuZnVuY3Rpb24gZmxhdHRlbktleXMob2JqLCBwcmVmaXggPSAnJywgZGVsaW1pdGVyID0gJy4nKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCAuLi5mbGF0dGVuS2V5cyh2YWx1ZSwgYCR7cHJlZml4fSR7a2V5fSR7ZGVsaW1pdGVyfWApIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCBbYCR7cHJlZml4fSR7a2V5fWBdOiB2YWx1ZSB9O1xuICAgIH0sIHt9KTtcbn1cbmV4cG9ydHMuZmxhdHRlbktleXMgPSBmbGF0dGVuS2V5cztcbmV4cG9ydHMubWVtb2l6ZWRGbGF0dGVuS2V5cyA9ICgwLCBtZW1vaXplXzEubWVtb2l6ZSkoZmxhdHRlbktleXMpO1xuY29uc3QgcHJvY2Vzc1Jlc3VsdCA9ICh7IHBhc3MsIGZhY3RzLCBydWxlLCBncm91cCwgcGx1Z2lucyA9IFtdIH0pID0+IHtcbiAgICBpZiAocGx1Z2lucy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiB7IHBhc3MgfTtcbiAgICByZXR1cm4gcGx1Z2lucy5yZWR1Y2UoKHBsdWdpblJlc3VsdCwgcGx1Z2luKSA9PiAoeyAuLi5wbHVnaW5SZXN1bHQsIC4uLihwbHVnaW4oeyBwYXNzLCBmYWN0cywgcnVsZSwgZ3JvdXAgfSkgfHwge30pIH0pLCB7IHBhc3MgfSk7XG59O1xuZXhwb3J0cy5wcm9jZXNzUmVzdWx0ID0gcHJvY2Vzc1Jlc3VsdDtcbmNvbnN0IGluX25pdCA9IChvcGVyYXRvcikgPT4gKHsgdmFsdWUsIHRlcm0gfSkgPT4ge1xuICAgIGlmICghdGVybSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRlcm0pIHx8IFsnc3RyaW5nJywgJ29iamVjdCddLmluY2x1ZGVzKHR5cGVvZiB0ZXJtKSkge1xuICAgICAgICBjb25zdCBwYXNzID0gdGVybS5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvcGVyYXRvciA9PT0gJ2luJyA/IHBhc3MgOiAhcGFzcztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IGhhc19uaGFzID0gKG9wZXJhdG9yKSA9PiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB7XG4gICAgaWYgKCF2YWx1ZSB8fCBbJ251bWJlcicsICdiaWdpbnQnLCAnc3ltYm9sJywgJ3VuZGVmaW5lZCddLmluY2x1ZGVzKHR5cGVvZiB2YWx1ZSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBwYXNzID0gdmFsdWUuaW5jbHVkZXModGVybSk7XG4gICAgcmV0dXJuIChvcGVyYXRvciA9PT0gJ2hhcycpID8gcGFzcyA6ICFwYXNzO1xufTtcbmV4cG9ydHMuaW50ZXJuYWxPcGVyYXRvcnMgPSB7XG4gICAgZXE6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID09PSB0ZXJtLFxuICAgIG5lcTogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgIT09IHRlcm0sXG4gICAgZ3Q6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID4gdGVybSxcbiAgICBndGU6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID49IHRlcm0sXG4gICAgbHQ6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlIDwgdGVybSxcbiAgICBsdGU6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlIDw9IHRlcm0sXG4gICAgaW46IGluX25pdCgnaW4nKSxcbiAgICBuaXQ6IGluX25pdCgnbml0JyksXG4gICAgaGFzOiBoYXNfbmhhcygnaGFzJyksXG4gICAgbmhhczogaGFzX25oYXMoJ25oYXMnKVxufTtcbmNvbnN0IGZhY3RRdWVyeUNhY2hlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZXh0cmFjdERvdE5vdGF0aW9uVmFsdWUoZmFjdHMsIHN1YmplY3QpIHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGAke0pTT04uc3RyaW5naWZ5KGZhY3RzKX0tJHtzdWJqZWN0fWA7XG4gICAgaWYgKGZhY3RRdWVyeUNhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RRdWVyeUNhY2hlLmdldChjYWNoZUtleSk7XG4gICAgfVxuICAgIGNvbnN0IGZsYXRGYWN0cyA9ICgwLCBleHBvcnRzLm1lbW9pemVkRmxhdHRlbktleXMpKGZhY3RzKTtcbiAgICBjb25zdCBxdWVyeVZhbHVlID0gZmxhdEZhY3RzW3N1YmplY3RdO1xuICAgIGNvbnN0IHR5cGUgPSBBcnJheS5pc0FycmF5KHF1ZXJ5VmFsdWUpID8gJ2FycmF5JyA6IHR5cGVvZiBxdWVyeVZhbHVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgdmFsdWU6IHF1ZXJ5VmFsdWUsXG4gICAgICAgIHR5cGVcbiAgICB9O1xuICAgIGZhY3RRdWVyeUNhY2hlLnNldChjYWNoZUtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzID0ge30sIHJ1bGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgcGx1Z2lucyA9IFtdLCBvcGVyYXRvcnMgPSB7fSB9ID0gb3B0aW9ucztcbiAgICBpZiAoaXNHcm91cChydWxlKSkge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc0dyb3VwKGZhY3RzLCBydWxlLCB7IHBsdWdpbnMgfSk7XG4gICAgfVxuICAgIGNvbnN0IFtzdWJqZWN0LCBvcCwgdGVybV0gPSBydWxlO1xuICAgIGlmIChzdWJqZWN0ID09PSBudWxsIHx8IHN1YmplY3QgPT09IHVuZGVmaW5lZCB8fCAhb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFJ1bGVcXG4ke0pTT04uc3RyaW5naWZ5KHJ1bGUsIG51bGwsIDIpfWApO1xuICAgIH1cbiAgICBjb25zdCBydWxlUmVzdWx0ID0geyBwYXNzOiBmYWxzZSB9O1xuICAgIGxldCBmYWN0VmFsdWUsIHZhbHVlVHlwZTtcbiAgICBpZiAoc3ViamVjdC5pbmRleE9mKGRlZmF1bHREZWxpbWl0ZXIpID4gMCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBleHRyYWN0RG90Tm90YXRpb25WYWx1ZShmYWN0cywgc3ViamVjdCk7XG4gICAgICAgIGZhY3RWYWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgdmFsdWVUeXBlID0gcmVzdWx0LnR5cGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmYWN0VmFsdWUgPSBmYWN0cz8uW3N1YmplY3RdO1xuICAgICAgICB2YWx1ZVR5cGUgPSBBcnJheS5pc0FycmF5KGZhY3RWYWx1ZSkgPyAnYXJyYXknIDogdHlwZW9mIGZhY3RWYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgdGVybUlzT2JqZWN0ID0gdGVybSAhPT0gbnVsbCAmJiB0eXBlb2YgdGVybSA9PT0gJ29iamVjdCc7XG4gICAgY29uc3QgaXNOdW1lcmljID0gdmFsdWVUeXBlID09PSAnYmlnaW50JyB8fCB2YWx1ZVR5cGUgPT09ICdudW1iZXInO1xuICAgIGNvbnN0IHRlcm1WYWx1ZSA9IGlzTnVtZXJpYyAmJiB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyBOdW1iZXIodGVybSkgOiB0ZXJtO1xuICAgIGlmIChleHBvcnRzLmludGVybmFsT3BlcmF0b3JzW29wXSkge1xuICAgICAgICBydWxlUmVzdWx0LnBhc3MgPSBleHBvcnRzLmludGVybmFsT3BlcmF0b3JzW29wXSh7IHZhbHVlOiBmYWN0VmFsdWUsIHRlcm06IHRlcm1WYWx1ZSB9KTtcbiAgICB9XG4gICAgaWYgKG9wZXJhdG9yc1tvcF0pIHtcbiAgICAgICAgcnVsZVJlc3VsdC5wYXNzID0gb3BlcmF0b3JzW29wXSh7IHZhbHVlOiBmYWN0VmFsdWUsIHRlcm06IHRlcm1WYWx1ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBleHBvcnRzLnByb2Nlc3NSZXN1bHQpKHtcbiAgICAgICAgLi4ucnVsZVJlc3VsdCxcbiAgICAgICAgcnVsZSxcbiAgICAgICAgZmFjdHMsXG4gICAgICAgIHBsdWdpbnNcbiAgICB9KTtcbn1cbmV4cG9ydHMucHJvY2Vzc1J1bGVPckdyb3VwID0gcHJvY2Vzc1J1bGVPckdyb3VwO1xuZnVuY3Rpb24gcHJvY2Vzc0dyb3VwKGZhY3RzID0ge30sIHJ1bGVHcm91cCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IGFsbCwgYW55IH0gPSBydWxlR3JvdXA7XG4gICAgY29uc3QgeyBwbHVnaW5zID0gW10gfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgYWN0aW9uID0gKHJ1bGUpID0+IHByb2Nlc3NSdWxlT3JHcm91cChmYWN0cywgcnVsZSwgb3B0aW9ucyk7XG4gICAgaWYgKGFsbCkge1xuICAgICAgICBjb25zdCBncm91cFJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgYWxsUGFzcyA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBhbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGFjdGlvbihydWxlKTtcbiAgICAgICAgICAgIGdyb3VwUmVzdWx0LnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnBhc3MpIHtcbiAgICAgICAgICAgICAgICBhbGxQYXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpbnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDAsIGV4cG9ydHMucHJvY2Vzc1Jlc3VsdCkoe1xuICAgICAgICAgICAgcGFzczogYWxsUGFzcyxcbiAgICAgICAgICAgIHJ1bGU6IHJ1bGVHcm91cCxcbiAgICAgICAgICAgIGZhY3RzLFxuICAgICAgICAgICAgcGx1Z2lucyxcbiAgICAgICAgICAgIGdyb3VwOiB7IGFsbDogZ3JvdXBSZXN1bHQsIHBhc3M6IGFsbFBhc3MgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFueSkge1xuICAgICAgICBjb25zdCBncm91cFJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgYW55UGFzcyA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgYW55KSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhY3Rpb24ocnVsZSk7XG4gICAgICAgICAgICBncm91cFJlc3VsdC5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnBhc3MpIHtcbiAgICAgICAgICAgICAgICBhbnlQYXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAocGx1Z2lucy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoMCwgZXhwb3J0cy5wcm9jZXNzUmVzdWx0KSh7XG4gICAgICAgICAgICBwYXNzOiBhbnlQYXNzLFxuICAgICAgICAgICAgcnVsZTogcnVsZUdyb3VwLFxuICAgICAgICAgICAgZmFjdHMsXG4gICAgICAgICAgICBwbHVnaW5zLFxuICAgICAgICAgICAgZ3JvdXA6IHsgYW55OiBncm91cFJlc3VsdCwgcGFzczogYW55UGFzcyB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgUnVsZUdyb3VwXFxuJHtKU09OLnN0cmluZ2lmeShydWxlR3JvdXAsIG51bGwsIDIpfWApO1xufVxuZXhwb3J0cy5wcm9jZXNzR3JvdXAgPSBwcm9jZXNzR3JvdXA7XG5jb25zdCB2ZXJib3NlUGx1Z2luID0gKHsgcGFzcywgcnVsZSwgZ3JvdXAgfSkgPT4gKHsgcGFzcywgcnVsZSwgZ3JvdXAgfSk7XG5leHBvcnRzLnZlcmJvc2VQbHVnaW4gPSB2ZXJib3NlUGx1Z2luO1xuY29uc3QgcHJvY2Vzc1ZlcmJvc2UgPSAoZmFjdHMgPSB7fSwgcnVsZUdyb3VwLCBwbHVnaW5zID0gW10pID0+IChwcm9jZXNzR3JvdXAoZmFjdHMsIHJ1bGVHcm91cCwgeyBwbHVnaW5zOiBbZXhwb3J0cy52ZXJib3NlUGx1Z2luLCAuLi5wbHVnaW5zXSB9KSk7XG5leHBvcnRzLnByb2Nlc3NWZXJib3NlID0gcHJvY2Vzc1ZlcmJvc2U7XG5mdW5jdGlvbiB2YWxpZGF0ZVJ1bGUocnVsZUdyb3VwID0ge30pIHtcbiAgICBpZiAoIXJ1bGVHcm91cCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnTm8gUnVsZSBHcm91cCBGb3VuZCdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyBhbGwsIGFueSB9ID0gcnVsZUdyb3VwO1xuICAgIGNvbnN0IHZhbGlkYXRlUnVsZVNldCA9IChydWxlcykgPT4ge1xuICAgICAgICBpZiAoIXJ1bGVzIHx8ICFBcnJheS5pc0FycmF5KHJ1bGVzKSB8fCBydWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIFJ1bGUgR3JvdXAgRm91bmQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHJ1bGVJbmRleCA9IDA7IHJ1bGVJbmRleCA8IHJ1bGVzLmxlbmd0aDsgcnVsZUluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlc1tydWxlSW5kZXhdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBydWxlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShydWxlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVHcm91cCA9IHJ1bGU7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVHcm91cD8uYWxsIHx8IHJ1bGVHcm91cD8uYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRlUnVsZShydWxlR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5pc1ZhbGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJ1bGUpIHx8IHJ1bGUubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBSdWxlIEZvcm1hdCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgW2ZpZWxkLCBvcF0gPSBydWxlO1xuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCAhb3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgUnVsZTogTWlzc2luZyBmaWVsZCBvciBvcGVyYXRvcidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFvcGVyYXRvck1hcC5oYXMob3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBJbnZhbGlkIE9wZXJhdG9yOiAke29wfWBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBpZiAoYWxsIHx8IGFueSkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVSdWxlU2V0KGFsbCB8fCBhbnkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ05vIFF1YW50aWZpZXJzIChhbGx8YW55KSBGb3VuZCdcbiAgICB9O1xufVxuZXhwb3J0cy52YWxpZGF0ZVJ1bGUgPSB2YWxpZGF0ZVJ1bGU7XG5leHBvcnRzLnByb2Nlc3NSdWxlcyA9IHByb2Nlc3NHcm91cDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5wcm9jZXNzUnVsZXM7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbGlicmFyeS9tZW1vaXplLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9saWJyYXJ5L21lbW9pemUudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykgPT4ge1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHsgdmFsdWU6IHRydWUgfSkpO1xuZXhwb3J0cy5tZW1vaXplID0gdm9pZCAwO1xuZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICAgIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoYXJncyk7XG4gICAgICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5tZW1vaXplID0gbWVtb2l6ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbWVtb2l6ZTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3T3pzN096czdPenM3T3pzN1FVTm5Ra0VzTWtaQlFUUkRPMEZCYzBndlFpdzRRa0ZCYzBJc1IwRkJaU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlJYUklMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NSMEZCUnl4RFFVRkRPMEZCUnpkQ0xFMUJRVTBzVjBGQlZ5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRGhDUVVGelFpeERRVUZETEVOQlFVTTdRVUZSY0VRc1UwRkJaMElzVDBGQlR5eERRVUZETEZkQlFUWkNMRVZCUVVVN1NVRkRja1FzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4UFFVRlBMRkZCUVZFc1MwRkJTeXhSUVVGUk8xRkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZETlVRc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4UlFVRnhRaXhEUVVGRE8wbEJRek5ETEU5QlFVOHNUMEZCVHl4RFFVRkRMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU0zUWl4RFFVRkRPMEZCU2tRc01FSkJTVU03UVVGblFrUXNVMEZCWjBJc1YwRkJWeXhEUVVGRExFZEJRVkVzUlVGQlJTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wbEJRMmhGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVUdFJRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUlM5RExFOUJRVThzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU4wUkN4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRPMWxCUTNwRkxFOUJRVThzUlVGQlJTeEhRVUZITEVkQlFVY3NSVUZCUlN4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU14UlN4RFFVRkRPMUZCUTBRc1QwRkJUeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTm9SQ3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZEVkN4RFFVRkRPMEZCVkVRc2EwTkJVME03UVVGSFdTd3lRa0ZCYlVJc1IwRkJSeXh4UWtGQlR5eEZRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMEZCVVdwRUxFMUJRVTBzWVVGQllTeEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNUMEZCVHl4SFFVRkhMRVZCUVc5Q0xFVkJRV1VzUlVGQmFVSXNSVUZCUlR0SlFVTjRTQ3hKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXp0UlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVVV4UXl4UFFVRlBMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRMjVDTEVOQlFVTXNXVUZCV1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NXVUZCV1N4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkRhRWNzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZEVkN4RFFVRkRPMEZCUTBvc1EwRkJRenRCUVZCWkxIRkNRVUZoTEdsQ1FVOTZRanRCUVZGRUxFMUJRVTBzVFVGQlRTeEhRVUZITEVOQlFVTXNVVUZCYTBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRk8wbEJRM3BFTEVsQlFVa3NRMEZCUXl4SlFVRkpPMUZCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRmVFSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRkRVVzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4UFFVRlBMRkZCUVZFc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRE1VTXNRMEZCUXp0SlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMllzUTBGQlF6dEJRVkZFTEUxQlFVMHNVVUZCVVN4SFFVRkhMRU5CUVVNc1VVRkJhMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBsQlF6TkVMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4TFFVRkxMRU5CUVVNN1VVRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF6dEpRVVV2Uml4TlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJ4RExFOUJRVThzUTBGQlF5eFJRVUZSTEV0QlFVc3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1FVRkROME1zUTBGQlF6dEJRVXRaTEhsQ1FVRnBRaXhIUVVGSE8wbEJSUzlDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4TFFVRkxMRXRCUVVzc1NVRkJTVHRKUVVWMlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrN1NVRkZlRU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpPMGxCUlhKRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1R0SlFVVjJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVazdTVUZGY2tNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTzBsQlJYWkRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlJXaENMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlJXeENMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlJYQkNMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETzBOQlEwd3NRMEZCUXp0QlFVZHdRaXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCVTJwRExGTkJRVk1zZFVKQlFYVkNMRU5CUVVNc1MwRkJXU3hGUVVGRkxFOUJRV1U3U1VGRE5VUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJSWFpFTEVsQlFVa3NZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEycERMRTlCUVU4c1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTjBReXhEUVVGRE8wbEJSVVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NLMEpCUVcxQ0xFVkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBNc1RVRkJUU3hWUVVGVkxFZEJRVWNzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNSRExFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhWUVVGVkxFTkJRVU03U1VGRmNrVXNUVUZCVFN4TlFVRk5MRWRCUVVjN1VVRkRZaXhMUVVGTExFVkJRVVVzVlVGQlZUdFJRVU5xUWl4SlFVRkpPMHRCUTB3c1EwRkJRenRKUVVWR0xHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pETEU5QlFVOHNUVUZCVFN4RFFVRkRPMEZCUTJoQ0xFTkJRVU03UVVGWlJDeFRRVUZuUWl4clFrRkJhMElzUTBGQlF5eFJRVUZsTEVWQlFVVXNSVUZCUlN4SlFVRnpRaXhGUVVGRkxGVkJRVzFDTEVWQlFVVTdTVUZEYWtjc1RVRkJUU3hGUVVGRkxFOUJRVThzUjBGQlJ5eEZRVUZGTEVWQlFVVXNVMEZCVXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF6dEpRVWRxUkN4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEyeENMRTlCUVU4c1dVRkJXU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZwUWl4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU0zUkN4RFFVRkRPMGxCUjBRc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJXU3hEUVVGRE8wbEJSM3BETEVsQlFVa3NUMEZCVHl4TFFVRkxMRWxCUVVrc1NVRkJTU3hQUVVGUExFdEJRVXNzVTBGQlV5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRja1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTndSU3hEUVVGRE8wbEJSMFFzVFVGQlRTeFZRVUZWTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGblFpeERRVUZETzBsQlIycEVMRWxCUVVrc1UwRkJVeXhGUVVGRkxGTkJRVk1zUTBGQlF6dEpRVWQ2UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU14UXl4TlFVRk5MRTFCUVUwc1IwRkJSeXgxUWtGQmRVSXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGRrUXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRGVrSXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0VFFVRk5MRU5CUVVNN1VVRkRUaXhUUVVGVExFZEJRVWNzUzBGQlN5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkROMElzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNFVXNRMEZCUXp0SlFVZEVMRTFCUVUwc1dVRkJXU3hIUVVGSExFbEJRVWtzUzBGQlN5eEpRVUZKTEVsQlFVa3NUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRE8wbEJSeTlFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRk5CUVZNc1MwRkJTeXhSUVVGUkxFbEJRVWtzVTBGQlV5eExRVUZMTEZGQlFWRXNRMEZCUXp0SlFVTnVSU3hOUVVGTkxGTkJRVk1zUjBGQlJ5eFRRVUZUTEVsQlFVa3NUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVWM1UlN4SlFVRkpMSGxDUVVGcFFpeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRNVUlzVlVGQlZTeERRVUZETEVsQlFVa3NSMEZCUnl4NVFrRkJhVUlzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1lzUTBGQlF6dEpRVWRFTEVsQlFVa3NVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGJFSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNwRkxFTkJRVU03U1VGSFJDeFBRVUZQTEhsQ1FVRmhMRVZCUVVNN1VVRkRia0lzUjBGQlJ5eFZRVUZWTzFGQlEySXNTVUZCU1R0UlFVTktMRXRCUVVzN1VVRkRUQ3hQUVVGUE8wdEJRMDhzUTBGQlF5eERRVUZETzBGQlEzQkNMRU5CUVVNN1FVRjRSRVFzWjBSQmQwUkRPMEZCV1VRc1UwRkJaMElzV1VGQldTeERRVUZETEZGQlFXVXNSVUZCUlN4RlFVRkZMRmxCUVhWQ0xFVkJRVVVzUlVGQlJTeFZRVUZ0UWl4RlFVRkZPMGxCUXpsR0xFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1UwRkJVeXhEUVVGRE8wbEJReTlDTEUxQlFVMHNSVUZCUlN4UFFVRlBMRWRCUVVjc1JVRkJSU3hGUVVGRkxFZEJRVWNzVDBGQlR5eERRVUZETzBsQlEycERMRTFCUVUwc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQmMwSXNSVUZCUlN4RlFVRkZMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dEpRVVZ3Uml4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSVklzVFVGQlRTeFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTNaQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVVnVRaXhMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNaQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNMVFpeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJSWHBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEycENMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03WjBKQlEyaENMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETzI5Q1FVRkZMRTFCUVUwN1dVRkRiRU1zUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZGUkN4UFFVRlBMSGxDUVVGaExFVkJRVU03V1VGRGJrSXNTVUZCU1N4RlFVRkZMRTlCUVU4N1dVRkRZaXhKUVVGSkxFVkJRVVVzVTBGQlV6dFpRVU5tTEV0QlFVczdXVUZEVEN4UFFVRlBPMWxCUTFBc1MwRkJTeXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRk8xTkJRek5ETEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlJWSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRM1pDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVWd1FpeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM1pDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlJYcENMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTm9RaXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVTm1MRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETzI5Q1FVRkZMRTFCUVUwN1dVRkRiRU1zUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZGUkN4UFFVRlBMSGxDUVVGaExFVkJRVU03V1VGRGJrSXNTVUZCU1N4RlFVRkZMRTlCUVU4N1dVRkRZaXhKUVVGSkxFVkJRVVVzVTBGQlV6dFpRVU5tTEV0QlFVczdXVUZEVEN4UFFVRlBPMWxCUTFBc1MwRkJTeXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRk8xTkJRek5ETEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlF6bEZMRU5CUVVNN1FVRjBSRVFzYjBOQmMwUkRPMEZCVVUwc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGakxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZCTDBVc2NVSkJRV0VzYVVKQlFXdEZPMEZCVlhKR0xFMUJRVTBzWTBGQll5eEhRVUZITEVOQlFVTXNVVUZCWlN4RlFVRkZMRVZCUVVVc1UwRkJiMElzUlVGQlJTeFZRVUV3UWl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRM1pITEZsQlFWa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNjVUpCUVdFc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZEZWtVc1EwRkJRenRCUVVaWExITkNRVUZqTEd0Q1FVVjZRanRCUVZGR0xGTkJRV2RDTEZsQlFWa3NRMEZCUXl4WlFVRlpMRVZCUVdVN1NVRkRkRVFzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUTJZc1QwRkJUenRaUVVOTUxFOUJRVThzUlVGQlJTeExRVUZMTzFsQlEyUXNUMEZCVHl4RlFVRkZMSEZDUVVGeFFqdFRRVU12UWl4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVWRUxFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1UwRkJVeXhEUVVGRE8wbEJSUzlDTEUxQlFVMHNaVUZCWlN4SFFVRkhMRU5CUVVNc1MwRkJXU3hGUVVGRkxFVkJRVVU3VVVGRGRrTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTXhSQ3hQUVVGUE8yZENRVU5NTEU5QlFVOHNSVUZCUlN4TFFVRkxPMmRDUVVOa0xFOUJRVThzUlVGQlJTeHhRa0ZCY1VJN1lVRkRMMElzUTBGQlF6dFJRVU5LTEVOQlFVTTdVVUZGUkN4TFFVRkxMRWxCUVVrc1UwRkJVeXhIUVVGSExFTkJRVU1zUlVGQlJTeFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6bEVMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVYzVRaXhKUVVGSkxFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRja1FzVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCYVVJc1EwRkJRenRuUWtGRGNFTXNTVUZCU1N4VFFVRlRMRVZCUVVVc1IwRkJSeXhKUVVGSkxGTkJRVk1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0dlFrRkRja01zVFVGQlRTeE5RVUZOTEVkQlFVY3NXVUZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8yOUNRVU4yUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVTg3ZDBKQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN2IwSkJRMjVETEZOQlFWTTdaMEpCUTFnc1EwRkJRenRaUVVOSUxFTkJRVU03V1VGSFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU0xUXl4UFFVRlBPMjlDUVVOTUxFOUJRVThzUlVGQlJTeExRVUZMTzI5Q1FVTmtMRTlCUVU4c1JVRkJSU3h4UWtGQmNVSTdhVUpCUXk5Q0xFTkJRVU03V1VGRFNpeERRVUZETzFsQlJVUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEZWtJc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVOc1FpeFBRVUZQTzI5Q1FVTk1MRTlCUVU4c1JVRkJSU3hMUVVGTE8yOUNRVU5rTEU5QlFVOHNSVUZCUlN4NVEwRkJlVU03YVVKQlEyNUVMRU5CUVVNN1dVRkRTaXhEUVVGRE8xbEJSMFFzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZEZWtJc1QwRkJUenR2UWtGRFRDeFBRVUZQTEVWQlFVVXNTMEZCU3p0dlFrRkRaQ3hQUVVGUExFVkJRVVVzY1VKQlFYRkNMRVZCUVVVc1JVRkJSVHRwUWtGRGJrTXNRMEZCUXp0WlFVTktMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJSVVFzVDBGQlR6dFpRVU5NTEU5QlFVOHNSVUZCUlN4SlFVRkpPMU5CUTJRc1EwRkJRenRKUVVOS0xFTkJRVU1zUTBGQlF6dEpRVVZHTEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMllzVDBGQlR5eGxRVUZsTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkN4UFFVRlBPMUZCUTB3c1QwRkJUeXhGUVVGRkxFdEJRVXM3VVVGRFpDeFBRVUZQTEVWQlFVVXNaME5CUVdkRE8wdEJRekZETEVOQlFVTTdRVUZEU2l4RFFVRkRPMEZCY2tWRUxHOURRWEZGUXp0QlFVMVpMRzlDUVVGWkxFZEJRVWNzV1VGQldTeERRVUZETzBGQlRYcERMSEZDUVVGbExHOUNRVUZaTEVOQlFVTTdPenM3T3pzN096czdPenM3TzBGRE9XZENOVUlzVTBGQlowSXNUMEZCVHl4RFFVRnZReXhGUVVGTE8wbEJRemxFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRmVFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGWExFVkJRVVVzUlVGQlJUdFJRVU42UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJwRExFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRE8xbEJRMjVDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU40UWl4RFFVRkRPMUZCUlVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNMElzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGRrSXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRhRUlzUTBGQlF5eERRVUZOTEVOQlFVTTdRVUZEVml4RFFVRkRPMEZCWWtRc01FSkJZVU03UVVGRlJDeHhRa0ZCWlN4UFFVRlBMRU5CUVVNN096czdPenM3VlVOeVFuWkNPMVZCUTBFN08xVkJSVUU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdPMVZCUlVFN1ZVRkRRVHM3VlVGRlFUdFZRVU5CTzFWQlEwRTdPenM3VlVWMFFrRTdWVUZEUVR0VlFVTkJPMVZCUTBFaUxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlqYjNKbEwzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OWpiM0psTHk0dmMzSmpMMmx1WkdWNExuUnpJaXdpZDJWaWNHRmphem92TDJOdmNtVXZMaTl6Y21NdmJHbGljbUZ5ZVM5dFpXMXZhWHBsTG5Seklpd2lkMlZpY0dGamF6b3ZMMk52Y21VdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZZMjl5WlM5M1pXSndZV05yTDJKbFptOXlaUzF6ZEdGeWRIVndJaXdpZDJWaWNHRmphem92TDJOdmNtVXZkMlZpY0dGamF5OXpkR0Z5ZEhWd0lpd2lkMlZpY0dGamF6b3ZMMk52Y21VdmQyVmljR0ZqYXk5aFpuUmxjaTF6ZEdGeWRIVndJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJbU52Y21WY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aVkyOXlaVndpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hObGJHWXNJQ2dwSUQwK0lIdGNibkpsZEhWeWJpQWlMQ0l2S2lwY2NseHVJQ29nUUcxdlpIVnNaU0JBYVdOeWRXeGxjeTlqYjNKbFhISmNiaUFxSUZ4eVhHNGdLaUJKUTFKMWJHVnpJRU52Y21VZ0xTQkJJSE50WVd4c0lHRnVaQ0JsZUhSbGJuTnBZbXhsSUhKMWJHVnpJR1Z1WjJsdVpTQjNhWFJvSUdFZ1kyOXRjR0ZqZENCS1UwOU9JR1p2YjNSd2NtbHVkQzVjY2x4dUlDb2dYSEpjYmlBcUlGUm9hWE1nYlc5a2RXeGxJSEJ5YjNacFpHVnpJSFJvWlNCbWIzVnVaR0YwYVc5dUlHWnZjaUJqY21WaGRHbHVaeXdnZG1Gc2FXUmhkR2x1Wnl3Z1lXNWtJSEJ5YjJObGMzTnBibWNnY25Wc1pYTmNjbHh1SUNvZ1lXZGhhVzV6ZENCaElITmxkQ0J2WmlCbVlXTjBjeTRnU1hRZ2MzVndjRzl5ZEhNZ1ltOXZiR1ZoYmlCc2IyZHBZeUIzYVhSb0lDZGhiR3duSUNoQlRrUXBJR0Z1WkNBbllXNTVKeUFvVDFJcFhISmNiaUFxSUdOdmJtUnBkR2x2Ym5Nc0lHTjFjM1J2YlNCdmNHVnlZWFJ2Y25Nc0lHRnVaQ0JsZUhSbGJuTnBZbWxzYVhSNUlIUm9jbTkxWjJnZ2NHeDFaMmx1Y3k1Y2NseHVJQ29nWEhKY2JpQXFJRUpoYzJsaklIVnpZV2RsT2x4eVhHNGdLaUJnWUdCMGVYQmxjMk55YVhCMFhISmNiaUFxSUdsdGNHOXlkQ0J3Y205alpYTnpVblZzWlhNZ1puSnZiU0FuUUdsamNuVnNaWE12WTI5eVpTYzdYSEpjYmlBcUlGeHlYRzRnS2lCamIyNXpkQ0JtWVdOMGN5QTlJSHNnWVdkbE9pQXlOU3dnY205c1pUb2dKMkZrYldsdUp5QjlPMXh5WEc0Z0tpQmpiMjV6ZENCeWRXeGxjeUE5SUh0Y2NseHVJQ29nSUNCaGJHdzZJRnRjY2x4dUlDb2dJQ0FnSUZzbllXZGxKeXdnSjJkMFpTY3NJREU0WFN4Y2NseHVJQ29nSUNBZ0lGc25jbTlzWlNjc0lDZGxjU2NzSUNkaFpHMXBiaWRkWEhKY2JpQXFJQ0FnWFZ4eVhHNGdLaUI5TzF4eVhHNGdLaUJjY2x4dUlDb2dZMjl1YzNRZ2NtVnpkV3gwSUQwZ2NISnZZMlZ6YzFKMWJHVnpLR1poWTNSekxDQnlkV3hsY3lrN1hISmNiaUFxSUdOdmJuTnZiR1V1Ykc5bktISmxjM1ZzZEM1d1lYTnpLVHNnTHk4Z2RISjFaVnh5WEc0Z0tpQmdZR0JjY2x4dUlDb3ZYSEpjYmx4eVhHNXBiWEJ2Y25RZ2V5QnRaVzF2YVhwbElIMGdabkp2YlNBbkxpOXNhV0p5WVhKNUwyMWxiVzlwZW1Vbk8xeHlYRzVjY2x4dUx5b3FJRlJvWlNCemRXSnFaV04wTDJ0bGVTQjBieUJsZG1Gc2RXRjBaU0JwYmlCMGFHVWdabUZqZEhNZ2IySnFaV04wSUNvdlhISmNibVY0Y0c5eWRDQjBlWEJsSUZOMVltcGxZM1FnUFNCemRISnBibWM3WEhKY2JseHlYRzR2S2lvZ1ZHaGxJSFpoYkhWbElIUnZJR052YlhCaGNtVWdZV2RoYVc1emRDQXFMMXh5WEc1bGVIQnZjblFnZEhsd1pTQlVaWEp0SUQwZ1lXNTVPMXh5WEc1Y2NseHVMeW9xSUVFZ2MybHVaMnhsSUhKMWJHVWdZMjl1YzJsemRHbHVaeUJ2WmlCYmMzVmlhbVZqZEN3Z2IzQmxjbUYwYjNJc0lIUmxjbTFkSUNvdlhISmNibVY0Y0c5eWRDQjBlWEJsSUZKMWJHVWdQU0JiVTNWaWFtVmpkQ3dnVDNCbGNtRjBiM0lzSUZSbGNtMWRPMXh5WEc1Y2NseHVMeW9xSUZSb1pTQmhkbUZwYkdGaWJHVWdjWFZoYm5ScFptbGxjbk1nWm05eUlISjFiR1VnWjNKdmRYQnpJQ292WEhKY2JtVjRjRzl5ZENCMGVYQmxJRkYxWVc1MGFXWnBaWEp6SUQwZ0oyRnNiQ2NnZkNBbllXNTVKenRjY2x4dVhISmNiaThxS2lCY2NseHVJQ29nVkdobElHOXdaWEpoZEc5eWN5QjFjMlZrSUhSdklHTnZiWEJoY21VZ2RtRnNkV1Z6WEhKY2JpQXFJQzBnSjJWeEp6b2dSWEYxWVd3Z0tEMDlQU2xjY2x4dUlDb2dMU0FuYm1WeEp6b2dUbTkwSUdWeGRXRnNJQ2doUFQwcFhISmNiaUFxSUMwZ0oyZDBKem9nUjNKbFlYUmxjaUIwYUdGdUlDZytLVnh5WEc0Z0tpQXRJQ2RzZENjNklFeGxjM01nZEdoaGJpQW9QQ2xjY2x4dUlDb2dMU0FuWjNSbEp6b2dSM0psWVhSbGNpQjBhR0Z1SUc5eUlHVnhkV0ZzSUNnK1BTbGNjbHh1SUNvZ0xTQW5iSFJsSnpvZ1RHVnpjeUIwYUdGdUlHOXlJR1Z4ZFdGc0lDZzhQU2xjY2x4dUlDb2dMU0FuYUdGekp6b2dRMjl1ZEdGcGJuTWdkbUZzZFdVZ0tHbHVZMngxWkdWektWeHlYRzRnS2lBdElDZHVhR0Z6SnpvZ1JHOWxjeUJ1YjNRZ1kyOXVkR0ZwYmlCMllXeDFaU0FvSVdsdVkyeDFaR1Z6S1Z4eVhHNGdLaUF0SUNkcGJpYzZJRlpoYkhWbElHbHpJR2x1SUdGeWNtRjVMM04wY21sdVp5OXZZbXBsWTNRZ0tHbHpJR2x1WTJ4MVpHVmtLVnh5WEc0Z0tpQXRJQ2R1YVhRbk9pQldZV3gxWlNCcGN5QnViM1FnYVc0Z1lYSnlZWGt2YzNSeWFXNW5MMjlpYW1WamRDQW9hWE1nYm05MElHbHVZMngxWkdWa0tWeHlYRzRnS2k5Y2NseHVaWGh3YjNKMElIUjVjR1VnVDNCbGNtRjBiM0lnUFNBblpYRW5JSHdnSjI1bGNTY2dmQ0FuWjNRbklId2dKMngwSnlCOElDZG5kR1VuSUh3Z0oyeDBaU2NnZkNBbmFHRnpKeUI4SUNkdWFHRnpKeUI4SUNkcGJpY2dmQ0FuYm1sMEp5QjhJSE4wY21sdVp6dGNjbHh1WEhKY2JpOHFLaUJCYmlCaGNuSmhlU0J2WmlCeWRXeGxjeUJoYm1RdmIzSWdjblZzWlNCbmNtOTFjSE1nS2k5Y2NseHVaWGh3YjNKMElIUjVjR1VnVW5Wc1pYTWdQU0FvVW5Wc1pTQjhJRkoxYkdWSGNtOTFjQ2xiWFR0Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCQklHZHliM1Z3SUc5bUlISjFiR1Z6SUhkcGRHZ2dZU0JzYjJkcFkyRnNJRzl3WlhKaGRHOXlJQ2hoYkd3dllXNTVLVnh5WEc0Z0tpQXRJR0ZzYkRvZ1FXeHNJSEoxYkdWeklHMTFjM1FnY0dGemN5QW9RVTVFS1Z4eVhHNGdLaUF0SUdGdWVUb2dRWFFnYkdWaGMzUWdiMjVsSUhKMWJHVWdiWFZ6ZENCd1lYTnpJQ2hQVWlsY2NseHVJQ292WEhKY2JtVjRjRzl5ZENCMGVYQmxJRkoxYkdWSGNtOTFjQ0E5SUhzZ1lXeHNQem9nVW5Wc1pYTXNJR0Z1ZVQ4NklGSjFiR1Z6SUgwN1hISmNibHh5WEc0dktpb2dWR2hsSUdSaGRHRWdkRzhnWlhaaGJIVmhkR1VnY25Wc1pYTWdZV2RoYVc1emRDQXFMMXh5WEc1bGVIQnZjblFnZEhsd1pTQkdZV04wY3lBOUlGSmxZMjl5WkR4emRISnBibWNzSUdGdWVUNGdmQ0JTWldOdmNtUThjM1J5YVc1bkxDQmhibmsrVzEwN1hISmNibHh5WEc0dktpb2dYSEpjYmlBcUlFRWdablZ1WTNScGIyNGdkR2hoZENCd2NtOWpaWE56WlhNZ2NuVnNaU0J5WlhOMWJIUnpMQ0IxYzJWa0lHWnZjaUJqY21WaGRHbHVaeUJ3YkhWbmFXNXpYSEpjYmlBcUlFQndZWEpoYlNCaGNtZHpJRUZ5WjNWdFpXNTBjeUJqYjI1MFlXbHVhVzVuSUhKMWJHVWdjSEp2WTJWemMybHVaeUJwYm1admNtMWhkR2x2Ymx4eVhHNGdLaUJBY21WMGRYSnVjeUJCSUZCeWIyTmxjM05TWlhOMWJIUWdiMkpxWldOMFhISmNiaUFxTDF4eVhHNWxlSEJ2Y25RZ2RIbHdaU0JTWlhOMWJIUlFiSFZuYVc0Z1BTQW9ZWEpuY3pvZ1VHeDFaMmx1UVhKbmN5a2dQVDRnVUhKdlkyVnpjMUpsYzNWc2REdGNjbHh1WEhKY2JpOHFLaUJjY2x4dUlDb2dRU0J0WVhBZ2IyWWdZM1Z6ZEc5dElHOXdaWEpoZEc5eWN5QmhibVFnZEdobGFYSWdhVzF3YkdWdFpXNTBZWFJwYjI0Z1puVnVZM1JwYjI1elhISmNiaUFxTDF4eVhHNWxlSEJ2Y25RZ2RIbHdaU0JQY0dWeVlYUnZjbEJzZFdkcGJpQTlJRkpsWTI5eVpEeHpkSEpwYm1jc0lDaGhjbWR6T2lCUGNHVnlZWFJ2Y2taMWJtTkJjbWR6S1NBOVBpQmliMjlzWldGdVBqdGNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQkJjbWQxYldWdWRITWdjR0Z6YzJWa0lIUnZJRzl3WlhKaGRHOXlJR1oxYm1OMGFXOXVjMXh5WEc0Z0tpOWNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1QzQmxjbUYwYjNKR2RXNWpRWEpuY3lBOUlIdGNjbHh1SUNBdktpb2dWR2hsSUhaaGJIVmxJR1p5YjIwZ2RHaGxJR1poWTNSeklHOWlhbVZqZENBcUwxeHlYRzRnSUhaaGJIVmxPaUJoYm5rN1hISmNiaUFnTHlvcUlGUm9aU0IwWlhKdElIUnZJR052YlhCaGNtVWdZV2RoYVc1emRDQXFMMXh5WEc0Z0lIUmxjbTA2SUdGdWVUdGNjbHh1ZlZ4eVhHNWNjbHh1THlvcVhISmNiaUFxSUVGeVozVnRaVzUwY3lCd1lYTnpaV1FnZEc4Z2NtVnpkV3gwSUhCc2RXZHBibk5jY2x4dUlDb3ZYSEpjYm1WNGNHOXlkQ0IwZVhCbElGQnNkV2RwYmtGeVozTWdQU0I3WEhKY2JpQWdMeW9xSUZkb1pYUm9aWElnZEdobElISjFiR1VnY0dGemMyVmtJQ292WEhKY2JpQWdjR0Z6Y3pvZ1ltOXZiR1ZoYmp0Y2NseHVJQ0F2S2lvZ1ZHaGxJSEoxYkdVZ2IzSWdjblZzWlNCbmNtOTFjQ0JpWldsdVp5QndjbTlqWlhOelpXUWdLaTljY2x4dUlDQnlkV3hsT2lCU2RXeGxJSHdnVW5Wc1pVZHliM1Z3TzF4eVhHNGdJQzhxS2lCVWFHVWdabUZqZEhNZ1ltVnBibWNnWlhaaGJIVmhkR1ZrSUNvdlhISmNiaUFnWm1GamRITS9PaUJHWVdOMGN6dGNjbHh1SUNBdktpb2dWR2hsSUhKbGMzVnNkQ0J2WmlCbmNtOTFjQ0J3Y205alpYTnphVzVuSUNvdlhISmNiaUFnWjNKdmRYQS9PaUJoYm5rN1hISmNibjA3WEhKY2JseHlYRzR2S2lwY2NseHVJQ29nUVhKbmRXMWxiblJ6SUdadmNpQjBhR1VnY0hKdlkyVnpjeUJtZFc1amRHbHZibHh5WEc0Z0tpOWNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JRY205alpYTnpRWEpuY3lCbGVIUmxibVJ6SUZCc2RXZHBia0Z5WjNNZ2V5QmNjbHh1SUNBdktpb2dWR2hsSUhCc2RXZHBibk1nZEc4Z2RYTmxJR1p2Y2lCd2NtOWpaWE56YVc1bklDb3ZYSEpjYmlBZ2NHeDFaMmx1Y3pvZ1VtVnpkV3gwVUd4MVoybHVXMTBnWEhKY2JuMWNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQlVhR1VnY21WemRXeDBJRzltSUhCeWIyTmxjM05wYm1jZ1lTQnlkV3hsSUc5eUlISjFiR1VnWjNKdmRYQmNjbHh1SUNvdlhISmNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdVSEp2WTJWemMxSmxjM1ZzZENCbGVIUmxibVJ6SUZKbFkyOXlaRHh6ZEhKcGJtY3NJR0Z1ZVQ0Z2V5QmNjbHh1SUNBdktpb2dWMmhsZEdobGNpQjBhR1VnY25Wc1pTQnZjaUJ5ZFd4bElHZHliM1Z3SUhCaGMzTmxaQ0FxTDF4eVhHNGdJSEJoYzNNNklHSnZiMnhsWVc0Z1hISmNibjFjY2x4dVhISmNiaThxS2x4eVhHNGdLaUJVYUdVZ2NtVnpkV3gwSUc5bUlIWmhiR2xrWVhScGJtY2dZU0J5ZFd4bElHOXlJSEoxYkdVZ1ozSnZkWEJjY2x4dUlDb3ZYSEpjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVW5Wc1pVVjJZV3gxWVhScGIyNGdleUJjY2x4dUlDQXZLaW9nVjJobGRHaGxjaUIwYUdVZ2NuVnNaU0JwY3lCMllXeHBaQ0FxTDF4eVhHNGdJR2x6Vm1Gc2FXUTZJR0p2YjJ4bFlXNDdJRnh5WEc0Z0lDOHFLaUJGY25KdmNpQnRaWE56WVdkbElHbG1JSFJvWlNCeWRXeGxJR2x6SUdsdWRtRnNhV1FnS2k5Y2NseHVJQ0J0WlhOellXZGxQem9nYzNSeWFXNW5PeUJjY2x4dWZWeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFOXdkR2x2Ym5NZ1ptOXlJSEoxYkdVZ2NISnZZMlZ6YzJsdVoxeHlYRzRnS2k5Y2NseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQlBjSFJwYjI1eklIdGNjbHh1SUNBdktpb2dVR3gxWjJsdWN5QjBieUIxYzJVZ1pIVnlhVzVuSUhCeWIyTmxjM05wYm1jZ0tpOWNjbHh1SUNCd2JIVm5hVzV6UHpvZ1VtVnpkV3gwVUd4MVoybHVXMTA3WEhKY2JpQWdMeW9xSUVOMWMzUnZiU0J2Y0dWeVlYUnZjbk1nZEc4Z2RYTmxJR1IxY21sdVp5QndjbTlqWlhOemFXNW5JQ292WEhKY2JpQWdiM0JsY21GMGIzSnpQem9nVDNCbGNtRjBiM0pRYkhWbmFXNDdYSEpjYm4xY2NseHVYSEpjYmk4cUtpQktZWFpoVTJOeWFYQjBJSFpoYkhWbElIUjVjR1Z6SUNvdlhISmNibVY0Y0c5eWRDQjBlWEJsSUZaaGJIVmxWSGx3WlNBOUlDZHpkSEpwYm1jbklId2dKMjUxYldKbGNpY2dmQ0FuWW1sbmFXNTBKeUI4SUNkaWIyOXNaV0Z1SnlCOElDZHplVzFpYjJ3bklId2dKM1Z1WkdWbWFXNWxaQ2NnZkNBbmIySnFaV04wSnlCOElDZG1kVzVqZEdsdmJpY2dmQ0FuWVhKeVlYa25PMXh5WEc1Y2NseHVMeW9xSUVKMWFXeDBMV2x1SUc5d1pYSmhkRzl5Y3lBcUwxeHlYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNTBaWEp1WVd4UGNHVnlZWFJ2Y2xaaGJIVmxjem9nVDNCbGNtRjBiM0piWFNBOUlGc25aWEVuTENBbmJtVnhKeXdnSjJkMEp5d2dKMngwSnl3Z0oyZDBaU2NzSUNkc2RHVW5MQ0FuYUdGekp5d2dKMjVvWVhNbkxDQW5hVzRuTENBbmJtbDBKMTA3WEhKY2JseHlYRzVqYjI1emRDQmtaV1poZFd4MFJHVnNhVzFwZEdWeUlEMGdKeTRuTzF4eVhHNWNjbHh1THk4Z1EzSmxZWFJsSUdFZ2JXRndJR1p2Y2lCbVlYTjBaWElnYjNCbGNtRjBiM0lnYkc5dmEzVndjMXh5WEc1amIyNXpkQ0J2Y0dWeVlYUnZjazFoY0NBOUlHNWxkeUJUWlhRb2FXNTBaWEp1WVd4UGNHVnlZWFJ2Y2xaaGJIVmxjeWs3WEhKY2JseHlYRzR2S2lwY2NseHVJQ29nUkdWMFpYSnRhVzVsY3lCcFppQmhJSEoxYkdVZ2FYTWdZU0J5ZFd4bElHZHliM1Z3SUNob1lYTWdKMkZzYkNjZ2IzSWdKMkZ1ZVNjZ2NISnZjR1Z5ZEhrcFhISmNiaUFxSUZ4eVhHNGdLaUJBY0dGeVlXMGdkR1Z6ZEZKMWJHVWdWR2hsSUhKMWJHVWdkRzhnZEdWemRGeHlYRzRnS2lCQWNtVjBkWEp1Y3lCVWNuVmxJR2xtSUhSb1pTQnlkV3hsSUdseklHRWdjblZzWlNCbmNtOTFjQ3dnWm1Gc2MyVWdiM1JvWlhKM2FYTmxYSEpjYmlBcUwxeHlYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdhWE5IY205MWNDaDBaWE4wVW5Wc1pUb2dVblZzWlNCOElGSjFiR1ZIY205MWNDQTlJSHQ5S1RvZ1ltOXZiR1ZoYmlCN1hISmNiaUFnYVdZZ0tDRjBaWE4wVW5Wc1pTQjhmQ0IwZVhCbGIyWWdkR1Z6ZEZKMWJHVWdJVDA5SUNkdlltcGxZM1FuS1NCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ1kyOXVjM1FnZXlCaGJHd3NJR0Z1ZVNCOUlEMGdkR1Z6ZEZKMWJHVWdZWE1nVW5Wc1pVZHliM1Z3TzF4eVhHNGdJSEpsZEhWeWJpQkNiMjlzWldGdUtHRnNiQ0I4ZkNCaGJua3BPMXh5WEc1OVhISmNibHh5WEc0dktpcGNjbHh1SUNvZ1JteGhkSFJsYm5NZ1lTQnVaWE4wWldRZ2IySnFaV04wSUdsdWRHOGdZU0J6YVc1bmJHVXRiR1YyWld3Z2IySnFaV04wSUhkcGRHZ2daRzkwSUc1dmRHRjBhVzl1SUd0bGVYTmNjbHh1SUNvZ1hISmNiaUFxSUVCd1lYSmhiU0J2WW1vZ1ZHaGxJRzlpYW1WamRDQjBieUJtYkdGMGRHVnVYSEpjYmlBcUlFQndZWEpoYlNCd2NtVm1hWGdnVUhKbFptbDRJR1p2Y2lCMGFHVWdabXhoZEhSbGJtVmtJR3RsZVhOY2NseHVJQ29nUUhCaGNtRnRJR1JsYkdsdGFYUmxjaUJFWld4cGJXbDBaWElnWm05eUlHNWxjM1JsWkNCclpYbHpJQ2hrWldaaGRXeDBPaUFuTGljcFhISmNiaUFxSUVCeVpYUjFjbTV6SUVFZ1pteGhkSFJsYm1Wa0lHOWlhbVZqZENCM2FYUm9JR1J2ZENCdWIzUmhkR2x2YmlCclpYbHpYSEpjYmlBcUlGeHlYRzRnS2lCQVpYaGhiWEJzWlZ4eVhHNGdLaUJnWUdCMGVYQmxjMk55YVhCMFhISmNiaUFxSUdac1lYUjBaVzVMWlhsektIc2dkWE5sY2pvZ2V5QnVZVzFsT2lBblNtOW9iaWNzSUdGblpUb2dNekFnZlNCOUtWeHlYRzRnS2lBdkx5QlNaWFIxY201ek9pQjdJQ2QxYzJWeUxtNWhiV1VuT2lBblNtOW9iaWNzSUNkMWMyVnlMbUZuWlNjNklETXdJSDFjY2x4dUlDb2dZR0JnWEhKY2JpQXFMMXh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWm14aGRIUmxia3RsZVhNb2IySnFPaUJoYm5rc0lIQnlaV1pwZUNBOUlDY25MQ0JrWld4cGJXbDBaWElnUFNBbkxpY3BPaUJTWldOdmNtUThjM1J5YVc1bkxDQmhibmsrSUh0Y2NseHVJQ0JwWmlBb0lXOWlhaUI4ZkNCMGVYQmxiMllnYjJKcUlDRTlQU0FuYjJKcVpXTjBKeWtnY21WMGRYSnVJSHQ5TzF4eVhHNGdJRnh5WEc0Z0lISmxkSFZ5YmlCUFltcGxZM1F1Wlc1MGNtbGxjeWh2WW1vcExuSmxaSFZqWlNnb1lXTmpMQ0JiYTJWNUxDQjJZV3gxWlYwcElEMCtJSHRjY2x4dUlDQWdJR2xtSUNoMllXeDFaU0FoUFQwZ2JuVnNiQ0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlDRkJjbkpoZVM1cGMwRnljbUY1S0haaGJIVmxLU2tnZTF4eVhHNGdJQ0FnSUNCeVpYUjFjbTRnZXlBdUxpNWhZMk1zSUM0dUxtWnNZWFIwWlc1TFpYbHpLSFpoYkhWbExDQmdKSHR3Y21WbWFYaDlKSHRyWlhsOUpIdGtaV3hwYldsMFpYSjlZQ2tnZlR0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhKbGRIVnliaUI3SUM0dUxtRmpZeXdnVzJBa2UzQnlaV1pwZUgwa2UydGxlWDFnWFRvZ2RtRnNkV1VnZlR0Y2NseHVJQ0I5TENCN2ZTazdYSEpjYm4xY2NseHVYSEpjYmk4dklFMWxiVzlwZW1VZ2RHaGxJR1pzWVhSMFpXNUxaWGx6SUdaMWJtTjBhVzl1SUdadmNpQmlaWFIwWlhJZ2NHVnlabTl5YldGdVkyVmNjbHh1Wlhod2IzSjBJR052Ym5OMElHMWxiVzlwZW1Wa1JteGhkSFJsYmt0bGVYTWdQU0J0WlcxdmFYcGxLR1pzWVhSMFpXNUxaWGx6S1R0Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCUWNtOWpaWE56WlhNZ2RHaGxJSEpsYzNWc2RDQnZaaUJoSUhKMWJHVWdaWFpoYkhWaGRHbHZiaUIwYUhKdmRXZG9JSEJzZFdkcGJuTmNjbHh1SUNvZ1hISmNiaUFxSUVCd1lYSmhiU0JoY21keklFRnlaM1Z0Wlc1MGN5Qm1iM0lnY21WemRXeDBJSEJ5YjJObGMzTnBibWRjY2x4dUlDb2dRSEpsZEhWeWJuTWdWR2hsSUhCeWIyTmxjM05sWkNCeVpYTjFiSFJjY2x4dUlDb3ZYSEpjYm1WNGNHOXlkQ0JqYjI1emRDQndjbTlqWlhOelVtVnpkV3gwSUQwZ0tIc2djR0Z6Y3l3Z1ptRmpkSE1zSUhKMWJHVXNJR2R5YjNWd0xDQndiSFZuYVc1eklEMGdXMTBnWVhNZ1VtVnpkV3gwVUd4MVoybHVXMTBnZlRvZ1VISnZZMlZ6YzBGeVozTXBPaUJRY205alpYTnpVbVZ6ZFd4MElEMCtJSHRjY2x4dUlDQnBaaUFvY0d4MVoybHVjeTVzWlc1bmRHZ2dQVDA5SURBcElISmxkSFZ5YmlCN0lIQmhjM01nZlR0Y2NseHVJQ0JjY2x4dUlDQnlaWFIxY200Z2NHeDFaMmx1Y3k1eVpXUjFZMlVvWEhKY2JpQWdJQ0FvY0d4MVoybHVVbVZ6ZFd4MExDQndiSFZuYVc0cElEMCtJQ2g3SUM0dUxuQnNkV2RwYmxKbGMzVnNkQ3dnTGk0dUtIQnNkV2RwYmloN0lIQmhjM01zSUdaaFkzUnpMQ0J5ZFd4bExDQm5jbTkxY0NCOUtTQjhmQ0I3ZlNrZ2ZTa3NJRnh5WEc0Z0lDQWdleUJ3WVhOeklIMWNjbHh1SUNBcE8xeHlYRzU5WEhKY2JseHlYRzR2S2lwY2NseHVJQ29nU1cxd2JHVnRaVzUwWVhScGIyNGdabTl5SUNkcGJpY2dZVzVrSUNkdWFYUW5JRzl3WlhKaGRHOXljMXh5WEc0Z0tpQmNjbHh1SUNvZ1FIQmhjbUZ0SUc5d1pYSmhkRzl5SUZSb1pTQnZjR1Z5WVhSdmNpQjBieUIxYzJVZ0tDZHBiaWNnYjNJZ0oyNXBkQ2NwWEhKY2JpQXFJRUJ5WlhSMWNtNXpJRUZ1SUc5d1pYSmhkRzl5SUdaMWJtTjBhVzl1WEhKY2JpQXFMMXh5WEc1amIyNXpkQ0JwYmw5dWFYUWdQU0FvYjNCbGNtRjBiM0k2SUU5d1pYSmhkRzl5S1NBOVBpQW9leUIyWVd4MVpTd2dkR1Z5YlNCOUtTQTlQaUI3WEhKY2JpQWdhV1lnS0NGMFpYSnRLU0J5WlhSMWNtNGdabUZzYzJVN1hISmNiaUFnWEhKY2JpQWdhV1lnS0VGeWNtRjVMbWx6UVhKeVlYa29kR1Z5YlNrZ2ZId2dXeWR6ZEhKcGJtY25MQ0FuYjJKcVpXTjBKMTB1YVc1amJIVmtaWE1vZEhsd1pXOW1JSFJsY20wcEtTQjdYSEpjYmlBZ0lDQmpiMjV6ZENCd1lYTnpJRDBnZEdWeWJTNXBibU5zZFdSbGN5aDJZV3gxWlNrN1hISmNiaUFnSUNCeVpYUjFjbTRnYjNCbGNtRjBiM0lnUFQwOUlDZHBiaWNnUHlCd1lYTnpJRG9nSVhCaGMzTTdYSEpjYmlBZ2ZWeHlYRzRnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1ZlZ4eVhHNWNjbHh1THlvcVhISmNiaUFxSUVsdGNHeGxiV1Z1ZEdGMGFXOXVJR1p2Y2lBbmFHRnpKeUJoYm1RZ0oyNW9ZWE1uSUc5d1pYSmhkRzl5YzF4eVhHNGdLaUJjY2x4dUlDb2dRSEJoY21GdElHOXdaWEpoZEc5eUlGUm9aU0J2Y0dWeVlYUnZjaUIwYnlCMWMyVWdLQ2RvWVhNbklHOXlJQ2R1YUdGekp5bGNjbHh1SUNvZ1FISmxkSFZ5Ym5NZ1FXNGdiM0JsY21GMGIzSWdablZ1WTNScGIyNWNjbHh1SUNvdlhISmNibU52Ym5OMElHaGhjMTl1YUdGeklEMGdLRzl3WlhKaGRHOXlPaUJQY0dWeVlYUnZjaWtnUFQ0Z0tIc2dkbUZzZFdVc0lIUmxjbTBnZlNrZ1BUNGdlMXh5WEc0Z0lHbG1JQ2doZG1Gc2RXVWdmSHdnV3lkdWRXMWlaWEluTENBblltbG5hVzUwSnl3Z0ozTjViV0p2YkNjc0lDZDFibVJsWm1sdVpXUW5YUzVwYm1Oc2RXUmxjeWgwZVhCbGIyWWdkbUZzZFdVcEtTQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JpQWdYSEpjYmlBZ1kyOXVjM1FnY0dGemN5QTlJSFpoYkhWbExtbHVZMngxWkdWektIUmxjbTBwTzF4eVhHNGdJSEpsZEhWeWJpQW9iM0JsY21GMGIzSWdQVDA5SUNkb1lYTW5LU0EvSUhCaGMzTWdPaUFoY0dGemN6dGNjbHh1ZlZ4eVhHNWNjbHh1THlvcVhISmNiaUFxSUVKMWFXeDBMV2x1SUc5d1pYSmhkRzl5Y3lCbWIzSWdjblZzWlNCd2NtOWpaWE56YVc1blhISmNiaUFxTDF4eVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1MFpYSnVZV3hQY0dWeVlYUnZjbk1nUFNCN1hISmNiaUFnTHlvcUlFVnhkV0ZzSUNnOVBUMHBJQ292WEhKY2JpQWdaWEU2SUNoN0lIWmhiSFZsTENCMFpYSnRJSDBwSUQwK0lIWmhiSFZsSUQwOVBTQjBaWEp0TEZ4eVhHNGdJQzhxS2lCT2IzUWdaWEYxWVd3Z0tDRTlQU2tnS2k5Y2NseHVJQ0J1WlhFNklDaDdJSFpoYkhWbExDQjBaWEp0SUgwcElEMCtJSFpoYkhWbElDRTlQU0IwWlhKdExGeHlYRzRnSUM4cUtpQkhjbVZoZEdWeUlIUm9ZVzRnS0Q0cElDb3ZYSEpjYmlBZ1ozUTZJQ2g3SUhaaGJIVmxMQ0IwWlhKdElIMHBJRDArSUhaaGJIVmxJRDRnZEdWeWJTeGNjbHh1SUNBdktpb2dSM0psWVhSbGNpQjBhR0Z1SUc5eUlHVnhkV0ZzSUNnK1BTa2dLaTljY2x4dUlDQm5kR1U2SUNoN0lIWmhiSFZsTENCMFpYSnRJSDBwSUQwK0lIWmhiSFZsSUQ0OUlIUmxjbTBzWEhKY2JpQWdMeW9xSUV4bGMzTWdkR2hoYmlBb1BDa2dLaTljY2x4dUlDQnNkRG9nS0hzZ2RtRnNkV1VzSUhSbGNtMGdmU2tnUFQ0Z2RtRnNkV1VnUENCMFpYSnRMRnh5WEc0Z0lDOHFLaUJNWlhOeklIUm9ZVzRnYjNJZ1pYRjFZV3dnS0R3OUtTQXFMMXh5WEc0Z0lHeDBaVG9nS0hzZ2RtRnNkV1VzSUhSbGNtMGdmU2tnUFQ0Z2RtRnNkV1VnUEQwZ2RHVnliU3hjY2x4dUlDQXZLaW9nVm1Gc2RXVWdhWE1nYVc0Z1lYSnlZWGt2YzNSeWFXNW5MMjlpYW1WamRDQXFMMXh5WEc0Z0lHbHVPaUJwYmw5dWFYUW9KMmx1Snlrc1hISmNiaUFnTHlvcUlGWmhiSFZsSUdseklHNXZkQ0JwYmlCaGNuSmhlUzl6ZEhKcGJtY3ZiMkpxWldOMElDb3ZYSEpjYmlBZ2JtbDBPaUJwYmw5dWFYUW9KMjVwZENjcExGeHlYRzRnSUM4cUtpQkRiMjUwWVdsdWN5QjJZV3gxWlNBcUwxeHlYRzRnSUdoaGN6b2dhR0Z6WDI1b1lYTW9KMmhoY3ljcExGeHlYRzRnSUM4cUtpQkViMlZ6SUc1dmRDQmpiMjUwWVdsdUlIWmhiSFZsSUNvdlhISmNiaUFnYm1oaGN6b2dhR0Z6WDI1b1lYTW9KMjVvWVhNbktWeHlYRzU5SUdGeklFOXdaWEpoZEc5eVVHeDFaMmx1TzF4eVhHNWNjbHh1THk4Z1EyRmphR1VnWm05eUlHUnZkQ0J1YjNSaGRHbHZiaUJzYjI5cmRYQnpYSEpjYm1OdmJuTjBJR1poWTNSUmRXVnllVU5oWTJobElEMGdibVYzSUUxaGNDZ3BPMXh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJRVY0ZEhKaFkzUWdZU0IyWVd4MVpTQm1jbTl0SUdaaFkzUnpJSFZ6YVc1bklHUnZkQ0J1YjNSaGRHbHZibHh5WEc0Z0tpQmNjbHh1SUNvZ1FIQmhjbUZ0SUdaaFkzUnpJRlJvWlNCbVlXTjBjeUJ2WW1wbFkzUmNjbHh1SUNvZ1FIQmhjbUZ0SUhOMVltcGxZM1FnVkdobElITjFZbXBsWTNRZ2QybDBhQ0JrYjNRZ2JtOTBZWFJwYjI1Y2NseHVJQ29nUUhKbGRIVnlibk1nVkdobElHVjRkSEpoWTNSbFpDQjJZV3gxWlNCaGJtUWdhWFJ6SUhSNWNHVmNjbHh1SUNvdlhISmNibVoxYm1OMGFXOXVJR1Y0ZEhKaFkzUkViM1JPYjNSaGRHbHZibFpoYkhWbEtHWmhZM1J6T2lCR1lXTjBjeXdnYzNWaWFtVmpkRG9nYzNSeWFXNW5LU0I3WEhKY2JpQWdZMjl1YzNRZ1kyRmphR1ZMWlhrZ1BTQmdKSHRLVTA5T0xuTjBjbWx1WjJsbWVTaG1ZV04wY3lsOUxTUjdjM1ZpYW1WamRIMWdPMXh5WEc0Z0lGeHlYRzRnSUdsbUlDaG1ZV04wVVhWbGNubERZV05vWlM1b1lYTW9ZMkZqYUdWTFpYa3BLU0I3WEhKY2JpQWdJQ0J5WlhSMWNtNGdabUZqZEZGMVpYSjVRMkZqYUdVdVoyVjBLR05oWTJobFMyVjVLVHRjY2x4dUlDQjlYSEpjYmlBZ1hISmNiaUFnWTI5dWMzUWdabXhoZEVaaFkzUnpJRDBnYldWdGIybDZaV1JHYkdGMGRHVnVTMlY1Y3lobVlXTjBjeWs3WEhKY2JpQWdZMjl1YzNRZ2NYVmxjbmxXWVd4MVpTQTlJR1pzWVhSR1lXTjBjMXR6ZFdKcVpXTjBYVHRjY2x4dUlDQmpiMjV6ZENCMGVYQmxJRDBnUVhKeVlYa3VhWE5CY25KaGVTaHhkV1Z5ZVZaaGJIVmxLU0EvSUNkaGNuSmhlU2NnT2lCMGVYQmxiMllnY1hWbGNubFdZV3gxWlR0Y2NseHVJQ0JjY2x4dUlDQmpiMjV6ZENCeVpYTjFiSFFnUFNCN1hISmNiaUFnSUNCMllXeDFaVG9nY1hWbGNubFdZV3gxWlN4Y2NseHVJQ0FnSUhSNWNHVmNjbHh1SUNCOU8xeHlYRzRnSUZ4eVhHNGdJR1poWTNSUmRXVnllVU5oWTJobExuTmxkQ2hqWVdOb1pVdGxlU3dnY21WemRXeDBLVHRjY2x4dUlDQnlaWFIxY200Z2NtVnpkV3gwTzF4eVhHNTlYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dVSEp2WTJWemMyVnpJR0VnYzJsdVoyeGxJSEoxYkdVZ2IzSWdjblZzWlNCbmNtOTFjQ0JoWjJGcGJuTjBJR0VnYzJWMElHOW1JR1poWTNSelhISmNiaUFxSUZ4eVhHNGdLaUJBY0dGeVlXMGdabUZqZEhNZ1ZHaGxJR1poWTNSeklIUnZJR1YyWVd4MVlYUmxJR0ZuWVdsdWMzUmNjbHh1SUNvZ1FIQmhjbUZ0SUhKMWJHVWdWR2hsSUhKMWJHVWdiM0lnY25Wc1pTQm5jbTkxY0NCMGJ5QndjbTlqWlhOelhISmNiaUFxSUVCd1lYSmhiU0J2Y0hScGIyNXpJRkJ5YjJObGMzTnBibWNnYjNCMGFXOXVjeUFvY0d4MVoybHVjeXdnWTNWemRHOXRJRzl3WlhKaGRHOXljeWxjY2x4dUlDb2dRSEpsZEhWeWJuTWdWR2hsSUhCeWIyTmxjM05sWkNCeVpYTjFiSFJjY2x4dUlDb2dYSEpjYmlBcUlFQjBhSEp2ZDNNZ1JYSnliM0lnYVdZZ2RHaGxJSEoxYkdVZ2FYTWdhVzUyWVd4cFpGeHlYRzRnS2k5Y2NseHVaWGh3YjNKMElHWjFibU4wYVc5dUlIQnliMk5sYzNOU2RXeGxUM0pIY205MWNDaG1ZV04wY3pvZ1JtRmpkSE1nUFNCN2ZTd2djblZzWlRvZ1VuVnNaU0I4SUZKMWJHVkhjbTkxY0N3Z2IzQjBhVzl1Y3pvZ1QzQjBhVzl1Y3lBOUlIdDlLVG9nVUhKdlkyVnpjMUpsYzNWc2RDQjdYSEpjYmlBZ1kyOXVjM1FnZXlCd2JIVm5hVzV6SUQwZ1cxMHNJRzl3WlhKaGRHOXljeUE5SUh0OUlIMGdQU0J2Y0hScGIyNXpPMXh5WEc0Z0lGeHlYRzRnSUM4dklFWmhjM1FnY0dGMGFDQm1iM0lnY25Wc1pTQm5jbTkxY0hOY2NseHVJQ0JwWmlBb2FYTkhjbTkxY0NoeWRXeGxLU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSEJ5YjJObGMzTkhjbTkxY0NobVlXTjBjeXdnY25Wc1pTQmhjeUJTZFd4bFIzSnZkWEFzSUhzZ2NHeDFaMmx1Y3lCOUtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lDOHZJRWhoYm1Sc1pTQnlkV3hsWEhKY2JpQWdZMjl1YzNRZ1czTjFZbXBsWTNRc0lHOXdMQ0IwWlhKdFhTQTlJSEoxYkdVZ1lYTWdVblZzWlR0Y2NseHVJQ0JjY2x4dUlDQXZMeUJXWVd4cFpHRjBaU0J5ZFd4bFhISmNiaUFnYVdZZ0tITjFZbXBsWTNRZ1BUMDlJRzUxYkd3Z2ZId2djM1ZpYW1WamRDQTlQVDBnZFc1a1pXWnBibVZrSUh4OElDRnZjQ2tnZTF4eVhHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLR0JKYm5aaGJHbGtJRkoxYkdWY1hHNGtlMHBUVDA0dWMzUnlhVzVuYVdaNUtISjFiR1VzSUc1MWJHd3NJRElwZldBcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0x5OGdTVzVwZEdsaGJHbDZaU0J5WlhOMWJIUmNjbHh1SUNCamIyNXpkQ0J5ZFd4bFVtVnpkV3gwSUQwZ2V5QndZWE56T2lCbVlXeHpaU0I5SUdGeklGQnNkV2RwYmtGeVozTTdYSEpjYmlBZ1hISmNiaUFnTHk4Z1IyVjBJSFJvWlNCMllXeDFaU0JoYm1RZ2FYUnpJSFI1Y0dWY2NseHVJQ0JzWlhRZ1ptRmpkRlpoYkhWbExDQjJZV3gxWlZSNWNHVTdYSEpjYmlBZ1hISmNiaUFnTHk4Z1NHRnVaR3hsSUdSdmRDQnViM1JoZEdsdmJseHlYRzRnSUdsbUlDaHpkV0pxWldOMExtbHVaR1Y0VDJZb1pHVm1ZWFZzZEVSbGJHbHRhWFJsY2lrZ1BpQXdLU0I3WEhKY2JpQWdJQ0JqYjI1emRDQnlaWE4xYkhRZ1BTQmxlSFJ5WVdOMFJHOTBUbTkwWVhScGIyNVdZV3gxWlNobVlXTjBjeXdnYzNWaWFtVmpkQ2s3WEhKY2JpQWdJQ0JtWVdOMFZtRnNkV1VnUFNCeVpYTjFiSFF1ZG1Gc2RXVTdYSEpjYmlBZ0lDQjJZV3gxWlZSNWNHVWdQU0J5WlhOMWJIUXVkSGx3WlR0Y2NseHVJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdabUZqZEZaaGJIVmxJRDBnWm1GamRITS9MbHR6ZFdKcVpXTjBYVHRjY2x4dUlDQWdJSFpoYkhWbFZIbHdaU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29abUZqZEZaaGJIVmxLU0EvSUNkaGNuSmhlU2NnT2lCMGVYQmxiMllnWm1GamRGWmhiSFZsTzF4eVhHNGdJSDFjY2x4dUlDQmNjbHh1SUNBdkx5QklZVzVrYkdVZ2RHVnliU0J3Y205alpYTnphVzVuWEhKY2JpQWdZMjl1YzNRZ2RHVnliVWx6VDJKcVpXTjBJRDBnZEdWeWJTQWhQVDBnYm5Wc2JDQW1KaUIwZVhCbGIyWWdkR1Z5YlNBOVBUMGdKMjlpYW1WamRDYzdYSEpjYmlBZ1hISmNiaUFnTHk4Z1VHRnljMlVnYm5WdFpYSnBZeUIyWVd4MVpYTWdZMjl5Y21WamRHeDVYSEpjYmlBZ1kyOXVjM1FnYVhOT2RXMWxjbWxqSUQwZ2RtRnNkV1ZVZVhCbElEMDlQU0FuWW1sbmFXNTBKeUI4ZkNCMllXeDFaVlI1Y0dVZ1BUMDlJQ2R1ZFcxaVpYSW5PMXh5WEc0Z0lHTnZibk4wSUhSbGNtMVdZV3gxWlNBOUlHbHpUblZ0WlhKcFl5QW1KaUIwZVhCbGIyWWdkR1Z5YlNBOVBUMGdKM04wY21sdVp5Y2dQeUJPZFcxaVpYSW9kR1Z5YlNrZ09pQjBaWEp0TzF4eVhHNGdJRnh5WEc0Z0lDOHZJRUZ3Y0d4NUlHOXdaWEpoZEc5eVhISmNiaUFnYVdZZ0tHbHVkR1Z5Ym1Gc1QzQmxjbUYwYjNKelcyOXdYU2tnZTF4eVhHNGdJQ0FnY25Wc1pWSmxjM1ZzZEM1d1lYTnpJRDBnYVc1MFpYSnVZV3hQY0dWeVlYUnZjbk5iYjNCZEtIc2dkbUZzZFdVNklHWmhZM1JXWVd4MVpTd2dkR1Z5YlRvZ2RHVnliVlpoYkhWbElIMHBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMeThnUVhCd2JIa2dZM1Z6ZEc5dElHOXdaWEpoZEc5eWN5QW9kMmhwWTJnZ1kyRnVJRzkyWlhKeWFXUmxJR2x1ZEdWeWJtRnNJRzl3WlhKaGRHOXljeWxjY2x4dUlDQnBaaUFvYjNCbGNtRjBiM0p6VzI5d1hTa2dlMXh5WEc0Z0lDQWdjblZzWlZKbGMzVnNkQzV3WVhOeklEMGdiM0JsY21GMGIzSnpXMjl3WFNoN0lIWmhiSFZsT2lCbVlXTjBWbUZzZFdVc0lIUmxjbTA2SUhSbGNtMVdZV3gxWlNCOUtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lDOHZJRkJ5YjJObGMzTWdjbVZ6ZFd4MGMxeHlYRzRnSUhKbGRIVnliaUJ3Y205alpYTnpVbVZ6ZFd4MEtIdGNjbHh1SUNBZ0lDNHVMbkoxYkdWU1pYTjFiSFFzWEhKY2JpQWdJQ0J5ZFd4bExGeHlYRzRnSUNBZ1ptRmpkSE1zWEhKY2JpQWdJQ0J3YkhWbmFXNXpYSEpjYmlBZ2ZTQmhjeUJRY205alpYTnpRWEpuY3lrN1hISmNibjFjY2x4dVhISmNiaThxS2x4eVhHNGdLaUJRY205alpYTnpaWE1nWVNCeWRXeGxJR2R5YjNWd0lHRm5ZV2x1YzNRZ1lTQnpaWFFnYjJZZ1ptRmpkSE5jY2x4dUlDb2dYSEpjYmlBcUlFQndZWEpoYlNCbVlXTjBjeUJVYUdVZ1ptRmpkSE1nZEc4Z1pYWmhiSFZoZEdVZ1lXZGhhVzV6ZEZ4eVhHNGdLaUJBY0dGeVlXMGdjblZzWlVkeWIzVndJRlJvWlNCeWRXeGxJR2R5YjNWd0lIUnZJSEJ5YjJObGMzTmNjbHh1SUNvZ1FIQmhjbUZ0SUc5d2RHbHZibk1nVUhKdlkyVnpjMmx1WnlCdmNIUnBiMjV6SUNod2JIVm5hVzV6TENCamRYTjBiMjBnYjNCbGNtRjBiM0p6S1Z4eVhHNGdLaUJBY21WMGRYSnVjeUJVYUdVZ2NISnZZMlZ6YzJWa0lISmxjM1ZzZEZ4eVhHNGdLaUJjY2x4dUlDb2dRSFJvY205M2N5QkZjbkp2Y2lCcFppQjBhR1VnY25Wc1pTQm5jbTkxY0NCcGN5QnBiblpoYkdsa1hISmNiaUFxTDF4eVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NISnZZMlZ6YzBkeWIzVndLR1poWTNSek9pQkdZV04wY3lBOUlIdDlMQ0J5ZFd4bFIzSnZkWEE2SUZKMWJHVkhjbTkxY0NBOUlIdDlMQ0J2Y0hScGIyNXpPaUJQY0hScGIyNXpJRDBnZTMwcE9pQlFjbTlqWlhOelVtVnpkV3gwSUh0Y2NseHVJQ0JqYjI1emRDQjdJR0ZzYkN3Z1lXNTVJSDBnUFNCeWRXeGxSM0p2ZFhBN1hISmNiaUFnWTI5dWMzUWdleUJ3YkhWbmFXNXpJRDBnVzEwZ2ZTQTlJRzl3ZEdsdmJuTTdYSEpjYmlBZ1kyOXVjM1FnWVdOMGFXOXVJRDBnS0hKMWJHVTZJRkoxYkdVZ2ZDQlNkV3hsUjNKdmRYQXBJRDArSUhCeWIyTmxjM05TZFd4bFQzSkhjbTkxY0NobVlXTjBjeXdnY25Wc1pTd2diM0IwYVc5dWN5azdYSEpjYmx4eVhHNGdJR2xtSUNoaGJHd3BJSHRjY2x4dUlDQWdJQzh2SUU5d2RHbHRhWHBoZEdsdmJqb2djMmh2Y25RdFkybHlZM1ZwZENCdmJpQm1hWEp6ZENCbVlXbHNkWEpsSUdadmNpQW5ZV3hzSnlCbmNtOTFjSE5jY2x4dUlDQWdJR052Ym5OMElHZHliM1Z3VW1WemRXeDBJRDBnVzEwN1hISmNiaUFnSUNCc1pYUWdZV3hzVUdGemN5QTlJSFJ5ZFdVN1hISmNiaUFnSUNCY2NseHVJQ0FnSUdadmNpQW9ZMjl1YzNRZ2NuVnNaU0J2WmlCaGJHd3BJSHRjY2x4dUlDQWdJQ0FnWTI5dWMzUWdjbVZ6ZFd4MElEMGdZV04wYVc5dUtISjFiR1VwTzF4eVhHNGdJQ0FnSUNCbmNtOTFjRkpsYzNWc2RDNXdkWE5vS0hKbGMzVnNkQ2s3WEhKY2JpQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNCcFppQW9JWEpsYzNWc2RDNXdZWE56S1NCN1hISmNiaUFnSUNBZ0lDQWdZV3hzVUdGemN5QTlJR1poYkhObE8xeHlYRzRnSUNBZ0lDQWdJR2xtSUNod2JIVm5hVzV6TG14bGJtZDBhQ0E5UFQwZ01Da2dZbkpsWVdzN0lDOHZJRTl1YkhrZ2MyaHZjblF0WTJseVkzVnBkQ0JwWmlCdWIzUWdkWE5wYm1jZ2NHeDFaMmx1YzF4eVhHNGdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNCY2NseHVJQ0FnSUhKbGRIVnliaUJ3Y205alpYTnpVbVZ6ZFd4MEtIc2dYSEpjYmlBZ0lDQWdJSEJoYzNNNklHRnNiRkJoYzNNc0lGeHlYRzRnSUNBZ0lDQnlkV3hsT2lCeWRXeGxSM0p2ZFhBc0lGeHlYRzRnSUNBZ0lDQm1ZV04wY3l3Z1hISmNiaUFnSUNBZ0lIQnNkV2RwYm5Nc0lGeHlYRzRnSUNBZ0lDQm5jbTkxY0RvZ2V5QmhiR3c2SUdkeWIzVndVbVZ6ZFd4MExDQndZWE56T2lCaGJHeFFZWE56SUgwZ1hISmNiaUFnSUNCOUtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHbG1JQ2hoYm5rcElIdGNjbHh1SUNBZ0lDOHZJRTl3ZEdsdGFYcGhkR2x2YmpvZ2MyaHZjblF0WTJseVkzVnBkQ0J2YmlCbWFYSnpkQ0J6ZFdOalpYTnpJR1p2Y2lBbllXNTVKeUJuY205MWNITmNjbHh1SUNBZ0lHTnZibk4wSUdkeWIzVndVbVZ6ZFd4MElEMGdXMTA3WEhKY2JpQWdJQ0JzWlhRZ1lXNTVVR0Z6Y3lBOUlHWmhiSE5sTzF4eVhHNGdJQ0FnWEhKY2JpQWdJQ0JtYjNJZ0tHTnZibk4wSUhKMWJHVWdiMllnWVc1NUtTQjdYSEpjYmlBZ0lDQWdJR052Ym5OMElISmxjM1ZzZENBOUlHRmpkR2x2YmloeWRXeGxLVHRjY2x4dUlDQWdJQ0FnWjNKdmRYQlNaWE4xYkhRdWNIVnphQ2h5WlhOMWJIUXBPMXh5WEc0Z0lDQWdJQ0JjY2x4dUlDQWdJQ0FnYVdZZ0tISmxjM1ZzZEM1d1lYTnpLU0I3WEhKY2JpQWdJQ0FnSUNBZ1lXNTVVR0Z6Y3lBOUlIUnlkV1U3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSEJzZFdkcGJuTXViR1Z1WjNSb0lEMDlQU0F3S1NCaWNtVmhhenNnTHk4Z1QyNXNlU0J6YUc5eWRDMWphWEpqZFdsMElHbG1JRzV2ZENCMWMybHVaeUJ3YkhWbmFXNXpYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dUlDQWdJRnh5WEc0Z0lDQWdjbVYwZFhKdUlIQnliMk5sYzNOU1pYTjFiSFFvZXlCY2NseHVJQ0FnSUNBZ2NHRnpjem9nWVc1NVVHRnpjeXdnWEhKY2JpQWdJQ0FnSUhKMWJHVTZJSEoxYkdWSGNtOTFjQ3dnWEhKY2JpQWdJQ0FnSUdaaFkzUnpMQ0JjY2x4dUlDQWdJQ0FnY0d4MVoybHVjeXdnWEhKY2JpQWdJQ0FnSUdkeWIzVndPaUI3SUdGdWVUb2daM0p2ZFhCU1pYTjFiSFFzSUhCaGMzTTZJR0Z1ZVZCaGMzTWdmU0JjY2x4dUlDQWdJSDBwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnZEdoeWIzY2dibVYzSUVWeWNtOXlLR0JKYm5aaGJHbGtJRkoxYkdWSGNtOTFjRnhjYmlSN1NsTlBUaTV6ZEhKcGJtZHBabmtvY25Wc1pVZHliM1Z3TENCdWRXeHNMQ0F5S1gxZ0tUdGNjbHh1ZlZ4eVhHNWNjbHh1THlvcVhISmNiaUFxSUVFZ2NHeDFaMmx1SUhSb1lYUWdZV1JrY3lCMlpYSmliM05sSUdsdVptOXliV0YwYVc5dUlIUnZJSFJvWlNCeVpYTjFiSFJjY2x4dUlDb2dYSEpjYmlBcUlFQndZWEpoYlNCaGNtZHpJRkJzZFdkcGJpQmhjbWQxYldWdWRITmNjbHh1SUNvZ1FISmxkSFZ5Ym5NZ1ZHaGxJSEJ5YjJObGMzTmxaQ0J5WlhOMWJIUWdkMmwwYUNCaFpHUnBkR2x2Ym1Gc0lHbHVabTl5YldGMGFXOXVYSEpjYmlBcUwxeHlYRzVsZUhCdmNuUWdZMjl1YzNRZ2RtVnlZbTl6WlZCc2RXZHBiaUE5SUNoN0lIQmhjM01zSUhKMWJHVXNJR2R5YjNWd0lIMDZJRkJzZFdkcGJrRnlaM01wSUQwK0lDaDdJSEJoYzNNc0lISjFiR1VzSUdkeWIzVndJSDBwTzF4eVhHNWNjbHh1THlvcVhISmNiaUFxSUZCeWIyTmxjM05sY3lCaElISjFiR1VnWjNKdmRYQWdkMmwwYUNCMlpYSmliM05sSUc5MWRIQjFkRnh5WEc0Z0tpQmNjbHh1SUNvZ1FIQmhjbUZ0SUdaaFkzUnpJRlJvWlNCbVlXTjBjeUIwYnlCbGRtRnNkV0YwWlNCaFoyRnBibk4wWEhKY2JpQXFJRUJ3WVhKaGJTQnlkV3hsUjNKdmRYQWdWR2hsSUhKMWJHVWdaM0p2ZFhBZ2RHOGdjSEp2WTJWemMxeHlYRzRnS2lCQWNHRnlZVzBnY0d4MVoybHVjeUJCWkdScGRHbHZibUZzSUhCc2RXZHBibk1nZEc4Z2RYTmxYSEpjYmlBcUlFQnlaWFIxY201eklGUm9aU0J3Y205alpYTnpaV1FnY21WemRXeDBJSGRwZEdnZ2RtVnlZbTl6WlNCcGJtWnZjbTFoZEdsdmJseHlYRzRnS2k5Y2NseHVaWGh3YjNKMElHTnZibk4wSUhCeWIyTmxjM05XWlhKaWIzTmxJRDBnS0daaFkzUnpPaUJHWVdOMGN5QTlJSHQ5TENCeWRXeGxSM0p2ZFhBNklGSjFiR1ZIY205MWNDd2djR3gxWjJsdWN6b2dVbVZ6ZFd4MFVHeDFaMmx1VzEwZ1BTQmJYU2tnUFQ0Z0tGeHlYRzRnSUhCeWIyTmxjM05IY205MWNDaG1ZV04wY3l3Z2NuVnNaVWR5YjNWd0xDQjdJSEJzZFdkcGJuTTZJRnQyWlhKaWIzTmxVR3gxWjJsdUxDQXVMaTV3YkhWbmFXNXpYU0I5S1Z4eVhHNHBPMXh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJRlpoYkdsa1lYUmxjeUJoSUhKMWJHVWdaM0p2ZFhBZ2MzUnlkV04wZFhKbElIZHBkR2h2ZFhRZ2NISnZZMlZ6YzJsdVp5QnBkRnh5WEc0Z0tpQmNjbHh1SUNvZ1FIQmhjbUZ0SUhKMWJHVkhjbTkxY0NCVWFHVWdjblZzWlNCbmNtOTFjQ0IwYnlCMllXeHBaR0YwWlZ4eVhHNGdLaUJBY21WMGRYSnVjeUJCYmlCbGRtRnNkV0YwYVc5dUlISmxjM1ZzZENCM2FYUm9JR2x6Vm1Gc2FXUWdabXhoWnlCaGJtUWdiM0IwYVc5dVlXd2daWEp5YjNJZ2JXVnpjMkZuWlZ4eVhHNGdLaTljY2x4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhaaGJHbGtZWFJsVW5Wc1pTaHlkV3hsUjNKdmRYQWdQU0I3ZlNCaGN5QlNkV3hsUjNKdmRYQXBPaUJTZFd4bFJYWmhiSFZoZEdsdmJpQjdYSEpjYmlBZ2FXWWdLQ0Z5ZFd4bFIzSnZkWEFwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUI3WEhKY2JpQWdJQ0FnSUdselZtRnNhV1E2SUdaaGJITmxMRnh5WEc0Z0lDQWdJQ0J0WlhOellXZGxPaUFuVG04Z1VuVnNaU0JIY205MWNDQkdiM1Z1WkNkY2NseHVJQ0FnSUgwN1hISmNiaUFnZlZ4eVhHNGdJRnh5WEc0Z0lHTnZibk4wSUhzZ1lXeHNMQ0JoYm5rZ2ZTQTlJSEoxYkdWSGNtOTFjRHRjY2x4dVhISmNiaUFnWTI5dWMzUWdkbUZzYVdSaGRHVlNkV3hsVTJWMElEMGdLSEoxYkdWek9pQlNkV3hsY3lrZ1BUNGdlMXh5WEc0Z0lDQWdhV1lnS0NGeWRXeGxjeUI4ZkNBaFFYSnlZWGt1YVhOQmNuSmhlU2h5ZFd4bGN5a2dmSHdnY25Wc1pYTXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCN1hISmNiaUFnSUNBZ0lDQWdhWE5XWVd4cFpEb2dabUZzYzJVc1hISmNiaUFnSUNBZ0lDQWdiV1Z6YzJGblpUb2dKMDV2SUZKMWJHVWdSM0p2ZFhBZ1JtOTFibVFuWEhKY2JpQWdJQ0FnSUgwN1hISmNiaUFnSUNCOVhISmNiaUFnSUNCY2NseHVJQ0FnSUdadmNpQW9iR1YwSUhKMWJHVkpibVJsZUNBOUlEQTdJSEoxYkdWSmJtUmxlQ0E4SUhKMWJHVnpMbXhsYm1kMGFEc2djblZzWlVsdVpHVjRLeXNwSUh0Y2NseHVJQ0FnSUNBZ1kyOXVjM1FnY25Wc1pTQTlJSEoxYkdWelczSjFiR1ZKYm1SbGVGMDdYSEpjYmlBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0F2THlCRGFHVmpheUJtYjNJZ2JtVnpkR1ZrSUhKMWJHVWdaM0p2ZFhCelhISmNiaUFnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjblZzWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnSVVGeWNtRjVMbWx6UVhKeVlYa29jblZzWlNrcElIdGNjbHh1SUNBZ0lDQWdJQ0JqYjI1emRDQnlkV3hsUjNKdmRYQWdQU0J5ZFd4bElHRnpJRkoxYkdWSGNtOTFjRHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9jblZzWlVkeWIzVndQeTVoYkd3Z2ZId2djblZzWlVkeWIzVndQeTVoYm5rcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEpsYzNWc2RDQTlJSFpoYkdsa1lYUmxVblZzWlNoeWRXeGxSM0p2ZFhBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnlaWE4xYkhRdWFYTldZV3hwWkNrZ2NtVjBkWEp1SUhKbGMzVnNkRHRjY2x4dUlDQWdJQ0FnSUNBZ0lHTnZiblJwYm5WbE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdMeThnVFhWemRDQmlaU0JoYmlCaGNuSmhlU0IzYVhSb0lHRjBJR3hsWVhOMElESWdaV3hsYldWdWRITmNjbHh1SUNBZ0lDQWdhV1lnS0NGQmNuSmhlUzVwYzBGeWNtRjVLSEoxYkdVcElIeDhJSEoxYkdVdWJHVnVaM1JvSUR3Z01pa2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQnBjMVpoYkdsa09pQm1ZV3h6WlN4Y2NseHVJQ0FnSUNBZ0lDQWdJRzFsYzNOaFoyVTZJQ2RKYm5aaGJHbGtJRkoxYkdVZ1JtOXliV0YwSjF4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmlBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lHTnZibk4wSUZ0bWFXVnNaQ3dnYjNCZElEMGdjblZzWlR0Y2NseHVJQ0FnSUNBZ2FXWWdLQ0ZtYVdWc1pDQjhmQ0FoYjNBcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ2FYTldZV3hwWkRvZ1ptRnNjMlVzWEhKY2JpQWdJQ0FnSUNBZ0lDQnRaWE56WVdkbE9pQW5TVzUyWVd4cFpDQlNkV3hsT2lCTmFYTnphVzVuSUdacFpXeGtJRzl5SUc5d1pYSmhkRzl5SjF4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnWEhKY2JpQWdJQ0FnSUM4dklFWmhjM1FnWTJobFkyc2dabTl5SUhaaGJHbGtJRzl3WlhKaGRHOXljeUIxYzJsdVp5QlRaWFJjY2x4dUlDQWdJQ0FnYVdZZ0tDRnZjR1Z5WVhSdmNrMWhjQzVvWVhNb2IzQXBLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJR2x6Vm1Gc2FXUTZJR1poYkhObExGeHlYRzRnSUNBZ0lDQWdJQ0FnYldWemMyRm5aVG9nWUVsdWRtRnNhV1FnVDNCbGNtRjBiM0k2SUNSN2IzQjlZRnh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lGeHlYRzRnSUNBZ2NtVjBkWEp1SUh0Y2NseHVJQ0FnSUNBZ2FYTldZV3hwWkRvZ2RISjFaVnh5WEc0Z0lDQWdmVHRjY2x4dUlDQjlPMXh5WEc1Y2NseHVJQ0JwWmlBb1lXeHNJSHg4SUdGdWVTa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIWmhiR2xrWVhSbFVuVnNaVk5sZENoaGJHd2dmSHdnWVc1NUtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxkSFZ5YmlCN1hISmNiaUFnSUNCcGMxWmhiR2xrT2lCbVlXeHpaU3hjY2x4dUlDQWdJRzFsYzNOaFoyVTZJQ2RPYnlCUmRXRnVkR2xtYVdWeWN5QW9ZV3hzZkdGdWVTa2dSbTkxYm1RblhISmNiaUFnZlR0Y2NseHVmVnh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJRUZzYVdGeklHWnZjaUJ3Y205alpYTnpSM0p2ZFhCY2NseHVJQ29nUUhObFpTQjdRR3hwYm1zZ2NISnZZMlZ6YzBkeWIzVndmVnh5WEc0Z0tpOWNjbHh1Wlhod2IzSjBJR052Ym5OMElIQnliMk5sYzNOU2RXeGxjeUE5SUhCeWIyTmxjM05IY205MWNEdGNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQlVhR1VnWkdWbVlYVnNkQ0JsZUhCdmNuUWdhWE1nZEdobElIQnliMk5sYzNOU2RXeGxjeUJtZFc1amRHbHZibHh5WEc0Z0tpQkFjMlZsSUh0QWJHbHVheUJ3Y205alpYTnpSM0p2ZFhCOVhISmNiaUFxTDF4eVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCd2NtOWpaWE56VW5Wc1pYTTdYSEpjYmlJc0lpOHFLbHh5WEc0Z0tpQkRjbVZoZEdWeklHRWdiV1Z0YjJsNlpXUWdkbVZ5YzJsdmJpQnZaaUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdZMkZqYUdWeklISmxjM1ZzZEhNZ1ltRnpaV1FnYjI0Z2FXNXdkWFFnWVhKbmRXMWxiblJ6WEhKY2JpQXFJRnh5WEc0Z0tpQkFjR0Z5WVcwZ1ptNGdWR2hsSUdaMWJtTjBhVzl1SUhSdklHMWxiVzlwZW1WY2NseHVJQ29nUUhKbGRIVnlibk1nUVNCdFpXMXZhWHBsWkNCMlpYSnphVzl1SUc5bUlIUm9aU0JtZFc1amRHbHZibHh5WEc0Z0tpOWNjbHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJRzFsYlc5cGVtVThWQ0JsZUhSbGJtUnpJQ2d1TGk1aGNtZHpPaUJoYm5sYlhTa2dQVDRnWVc1NVBpaG1iam9nVkNrNklGUWdlMXh5WEc0Z0lHTnZibk4wSUdOaFkyaGxJRDBnYm1WM0lFMWhjQ2dwTzF4eVhHNGdJRnh5WEc0Z0lISmxkSFZ5YmlBb0tDNHVMbUZ5WjNNNklHRnVlVnRkS1NBOVBpQjdYSEpjYmlBZ0lDQmpiMjV6ZENCclpYa2dQU0JLVTA5T0xuTjBjbWx1WjJsbWVTaGhjbWR6S1R0Y2NseHVJQ0FnSUdsbUlDaGpZV05vWlM1b1lYTW9hMlY1S1NrZ2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1V1WjJWMEtHdGxlU2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JjY2x4dUlDQWdJR052Ym5OMElISmxjM1ZzZENBOUlHWnVLQzR1TG1GeVozTXBPMXh5WEc0Z0lDQWdZMkZqYUdVdWMyVjBLR3RsZVN3Z2NtVnpkV3gwS1R0Y2NseHVJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUTdYSEpjYmlBZ2ZTa2dZWE1nVkR0Y2NseHVmVnh5WEc1Y2NseHVaWGh3YjNKMElHUmxabUYxYkhRZ2JXVnRiMmw2WlR0Y2NseHVJaXdpTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dWRtRnlJRjlmZDJWaWNHRmphMTl0YjJSMWJHVmZZMkZqYUdWZlh5QTlJSHQ5TzF4dVhHNHZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dVpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNibHgwZG1GeUlHTmhZMmhsWkUxdlpIVnNaU0E5SUY5ZmQyVmljR0ZqYTE5dGIyUjFiR1ZmWTJGamFHVmZYMXR0YjJSMWJHVkpaRjA3WEc1Y2RHbG1JQ2hqWVdOb1pXUk5iMlIxYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQmpZV05vWldSTmIyUjFiR1V1Wlhod2IzSjBjenRjYmx4MGZWeHVYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVYSFIyWVhJZ2JXOWtkV3hsSUQwZ1gxOTNaV0p3WVdOclgyMXZaSFZzWlY5allXTm9aVjlmVzIxdlpIVnNaVWxrWFNBOUlIdGNibHgwWEhRdkx5QnVieUJ0YjJSMWJHVXVhV1FnYm1WbFpHVmtYRzVjZEZ4MEx5OGdibThnYlc5a2RXeGxMbXh2WVdSbFpDQnVaV1ZrWldSY2JseDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dVhIUjlPMXh1WEc1Y2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1WEhSZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZlcyMXZaSFZzWlVsa1hTaHRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1WEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dVhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc1OVhHNWNiaUlzSWlJc0lpOHZJSE4wWVhKMGRYQmNiaTh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUx5OGdWR2hwY3lCbGJuUnllU0J0YjJSMWJHVWdhWE1nY21WbVpYSmxibU5sWkNCaWVTQnZkR2hsY2lCdGIyUjFiR1Z6SUhOdklHbDBJR05oYmlkMElHSmxJR2x1YkdsdVpXUmNiblpoY2lCZlgzZGxZbkJoWTJ0ZlpYaHdiM0owYzE5ZklEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhjSWk0dmMzSmpMMmx1WkdWNExuUnpYQ0lwTzF4dUlpd2lJbDBzSW01aGJXVnpJanBiWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFjdHNFZGl0b3JQcm9wcywgSUNSdWxlc0VkaXRvclByb3BzLCBSdWxlRWRpdG9yUHJvcHMsIFJ1bGVHcm91cEVkaXRvclByb3BzLCBvcE1hcCwgc2FmZVBhcnNlIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IE9wZXJhdG9yLCBpbnRlcm5hbE9wZXJhdG9yVmFsdWVzLCBwcm9jZXNzUnVsZU9yR3JvdXAsIHByb2Nlc3NWZXJib3NlLCBRdWFudGlmaWVycywgUnVsZSwgUnVsZUdyb3VwIH0gZnJvbSAnQGljcnVsZXMvY29yZSc7XHJcbmltcG9ydCAnLi9lZGl0b3JTdHlsZS5jc3MnO1xyXG5cclxubGV0IGxhc3RJZCA9IG51bGw7XHJcblxyXG5jb25zdCBSdWxlRWRpdG9yID0gKHtcclxuICBmYWN0cyA9IHt9LFxyXG4gIHJ1bGUgPSBbJycsICdlcScsICcnXSxcclxuICBvblVwZGF0ZSA9IChydWxlLCBpbmRleCkgPT4geyB9LFxyXG4gIGluZGV4ID0gMCxcclxuICBkZXB0aCA9IDBcclxufTogUnVsZUVkaXRvclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2ZhY3RLZXlzXSA9IHVzZVN0YXRlKE9iamVjdC5rZXlzKGZhY3RzKSk7XHJcbiAgY29uc3QgW2xpdmVSdWxlLCBzZXRFZGl0UnVsZV0gPSB1c2VTdGF0ZShydWxlKTtcclxuICBjb25zdCBbZmFjdEtleSwgb3BlcmF0b3IsIHRlcm1dID0gbGl2ZVJ1bGU7XHJcbiAgY29uc3Qga2V5ID0gYCR7aW5kZXh9LSR7ZGVwdGh9YDtcclxuICBjb25zdCBsaXN0SWQgPSBgJHtmYWN0S2V5c30tJHtrZXl9YDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uVXBkYXRlKFtmYWN0S2V5LCBvcGVyYXRvciwgdGVybV0sIGluZGV4KTtcclxuICAgIFxyXG4gIH0sIFtmYWN0S2V5LCBvcGVyYXRvciwgdGVybV0pXHJcblxyXG4gIGNvbnN0IHZhbHVlSWQgPSBgdmFsdWUtJHtrZXl9YFxyXG4gIGNvbnN0IHRlcm1JZCA9IGB0ZXJtLSR7a2V5fWBcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gcHJvY2Vzc1J1bGVPckdyb3VwKGZhY3RzLCBsaXZlUnVsZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT0ncnVsZS1lZGl0b3InPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGUtcmVzdWx0XCI+e3Jlc3VsdC5wYXNzID8gPHNwYW4gY2xhc3NOYW1lPVwicGFzc1wiPiYjMTAwMDM7PC9zcGFuPiA6IDxzcGFuICBjbGFzc05hbWU9XCJmYWlsXCI+JiN4MjcxNTs8L3NwYW4+fTwvZGl2PlxyXG4gICAgICA8ZGl2IGtleT17J3J1bGUtZmFjdCd9IGNsYXNzTmFtZT1cInJ1bGUtZW50cnkgcnVsZS1mYWN0XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD17dGVybUlkfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPSdvbidcclxuICAgICAgICAgIGF1dG9Gb2N1cz17bGFzdElkID09PSB0ZXJtSWR9XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbGlzdD17bGlzdElkfVxyXG4gICAgICAgICAgdmFsdWU9e2ZhY3RLZXl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4ge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSBldi50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIHNldEVkaXRSdWxlKFtldi50YXJnZXQudmFsdWUsIG9wZXJhdG9yLCB0ZXJtXSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPXtsaXN0SWR9PlxyXG4gICAgICAgICAge2ZhY3RLZXlzLm1hcChrZXkgPT4gKDxvcHRpb24gdmFsdWU9e2tleX0gLz4pKX1cclxuICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBrZXk9eydydWxlLW9wJ30gY2xhc3NOYW1lPVwicnVsZS1lbnRyeSBydWxlLW9wXCI+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17b3BlcmF0b3J9IG9uQ2hhbmdlPXtldiA9PiBzZXRFZGl0UnVsZShbZmFjdEtleSwgKGV2LnRhcmdldC52YWx1ZSBhcyBPcGVyYXRvciksIHRlcm1dKX0+XHJcbiAgICAgICAgICB7aW50ZXJuYWxPcGVyYXRvclZhbHVlcy5tYXAob3AgPT4gPG9wdGlvbiB2YWx1ZT17b3B9PntvcE1hcFtvcF19PC9vcHRpb24+KX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYga2V5PXsncnVsZS10ZXJtJ30gY2xhc3NOYW1lPVwicnVsZS1lbnRyeSBydWxlLXRlcm1cIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBpZD17dmFsdWVJZH1cclxuICAgICAgICAgIHZhbHVlPXt0ZXJtfVxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtsYXN0SWQgPT09IHZhbHVlSWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4ge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSBldi50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIHNldEVkaXRSdWxlKFtmYWN0S2V5LCBvcGVyYXRvciwgZXYudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFJ1bGVHcm91cEVkaXRvciA9ICh7XHJcbiAgZmFjdHMgPSB7fSxcclxuICBydWxlcyA9IHt9LFxyXG4gIG9uQ2hhbmdlID0gciA9PiB7IH0sXHJcbiAgZGVwdGggPSAwLFxyXG4gIGluZGV4ID0gMCxcclxuICBzaG93RmFjdHNFZGl0b3IgPSB0cnVlXHJcbn06IFJ1bGVHcm91cEVkaXRvclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xpdmVGYWN0cywgc2V0TGl2ZUZhY3RzXSA9IHVzZVN0YXRlKGZhY3RzKTtcclxuICBjb25zdCBbcXVhbnRpZmllciwgc2V0UXVhbnRpZmllcl0gPSB1c2VTdGF0ZSgocnVsZXMuYWxsID8gJ2FsbCcgOiAnYW55JykgYXMgUXVhbnRpZmllcnMpO1xyXG4gIGNvbnN0IFtsaXZlUnVsZXMsIHNldExpdmVSdWxlc10gPSB1c2VTdGF0ZShydWxlcyk7XHJcbiAgY29uc3QgW3J1bGVMaXN0LCBzZXRMaXZlUnVsZUxpc3RdID0gdXNlU3RhdGUoWy4uLihsaXZlUnVsZXMuYWxsIHx8IGxpdmVSdWxlcy5hbnkpXSk7XHJcbiAgY29uc3QgW3ZlcnNib3NlUmVzdWx0LCBzZXRWZXJib3NlUmVzdWx0XSA9IHVzZVN0YXRlKHt9IGFzIGFueSk7XHJcbiAgY29uc3QgcXVhbnRmaWVycyA9IFsnYWxsJywgJ2FueSddIGFzIFF1YW50aWZpZXJzW107XHJcbiAgY29uc3QgZW1wdHlSdWxlID0gWycnLCAnZXEnLCAnJ10gYXMgUnVsZTtcclxuICBjb25zdCBlbXB0eUdyb3VwID0geyBhbGw6IFtlbXB0eVJ1bGVdIH0gYXMgUnVsZUdyb3VwO1xyXG5cclxuICBjb25zdCBvblJ1bGVVcGRhdGUgPSAocnVsZTogUnVsZSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICBydWxlTGlzdFtpXSA9IHJ1bGU7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkFkZFJ1bGUgPSAoaSA9IG51bGwgYXMgbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaSA9PT0gbnVsbCkge1xyXG4gICAgICBydWxlTGlzdC5wdXNoKGVtcHR5UnVsZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcnVsZUxpc3Quc3BsaWNlKGksIDAsIGVtcHR5UnVsZSk7XHJcbiAgICB9XHJcbiAgICBzZXRMaXZlUnVsZUxpc3QoWy4uLnJ1bGVMaXN0XSk7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkR3JvdXAgPSAoaSA9IG51bGwgYXMgbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaSA9PT0gbnVsbCkge1xyXG4gICAgICBydWxlTGlzdC5wdXNoKGVtcHR5R3JvdXApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJ1bGVMaXN0LnNwbGljZShpLCAwLCBlbXB0eUdyb3VwKTtcclxuICAgIH1cclxuICAgIHNldExpdmVSdWxlTGlzdChbLi4ucnVsZUxpc3RdKTtcclxuICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZVJ1bGUgPSAoaSkgPT4ge1xyXG4gICAgcnVsZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gICAgc2V0TGl2ZVJ1bGVMaXN0KFsuLi5ydWxlTGlzdF0pO1xyXG4gICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2ZXJib3NlUmVzdWx0cyA9IHByb2Nlc3NWZXJib3NlKGZhY3RzLCBsaXZlUnVsZXMpO1xyXG4gICAgb25DaGFuZ2UobGl2ZVJ1bGVzLCAwLCBpbmRleCk7XHJcbiAgfSwgW0pTT04uc3RyaW5naWZ5KGxpdmVSdWxlcyldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gIH0sIFtKU09OLnN0cmluZ2lmeShydWxlTGlzdCldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gIH0sIFtxdWFudGlmaWVyXSlcclxuXHJcbiAgY29uc3QgaXNWYWxpZFJ1bGUgPSBwcm9jZXNzUnVsZU9yR3JvdXAoZmFjdHMsIGxpdmVSdWxlcyk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZS1ncm91cC1lZGl0b3JcIiBrZXk9e2Bncm91cC1lZGl0LSR7aW5kZXh9LSR7ZGVwdGh9YH0+XHJcbiAgICAgIHtzaG93RmFjdHNFZGl0b3IgJiYgZGVwdGggPT09IDAgJiYgaW5kZXggPT09IDAgJiYgPGRpdj5cclxuICAgICAgICA8RmFjdHNFZGl0b3Igb2JqZWN0PXtsaXZlRmFjdHN9IG9uQ2hhbmdlPXsodmFsdWUsIGlzVmFsaWQpID0+IHtcclxuICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldExpdmVGYWN0cyh2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkZXB0aCA9PT0gMCAmJiBpbmRleCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT0nZmFjdHMtc3RhdHVzJz5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBpc1ZhbGlkUnVsZSA/ICdncmVlbicgOiAnZGFya3JlZCcgfX0+UnVsZSBpcyB7aXNWYWxpZFJ1bGUgPyAndmFsaWQnIDogJ2ludmFsaWQnfS4gPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGlzVmFsaWRSdWxlPy5wYXNzID8gJ2dyZWVuJyA6ICdkYXJrcmVkJyB9fT5SdWxlIGlzIHtpc1ZhbGlkUnVsZT8ucGFzcyA/ICdwYXNzaW5nJyA6ICdmYWlsaW5nJ30uIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlLWVudHJ5IHF1YW50aWZpZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVjay1tYXJrXCI+XHJcbiAgICAgICAgICAgIHtpc1ZhbGlkUnVsZT8ucGFzcyA/IDxzcGFuIGNsYXNzTmFtZT0ncGFzcyc+JiN4MjYxMTs8L3NwYW4+IDogPHNwYW4gY2xhc3NOYW1lPSdmYWlsJz4mIzk3NDY7PC9zcGFuPn0gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtxdWFudGlmaWVyfSBvbkNoYW5nZT17ZXYgPT4gc2V0UXVhbnRpZmllcihldi50YXJnZXQudmFsdWUgYXMgUXVhbnRpZmllcnMpfT5cclxuICAgICAgICAgICAgICB7cXVhbnRmaWVycy5tYXAocSA9PiAoPG9wdGlvbiB2YWx1ZT17cX0+e3F9PC9vcHRpb24+KSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWdyb3VwXCIgdGl0bGU9J2FkZCBhIGdyb3VwJyBvbkNsaWNrPXsoKSA9PiBhZGRHcm91cCgpfT4mI3gyNzk1OzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlLWxpc3RcIj5cclxuICAgICAgICAgICAge3J1bGVMaXN0Lm1hcCgocnVsZUVudHJ5LCBydWxlSW5kZXgpID0+IEFycmF5LmlzQXJyYXkocnVsZUVudHJ5KSA/XHJcbiAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxSdWxlRWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblJ1bGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7SlNPTi5zdHJpbmdpZnkocnVsZUVudHJ5KX0tJHtydWxlSW5kZXh9LSR7ZGVwdGh9YH1cclxuICAgICAgICAgICAgICAgICAgey4uLnsgcnVsZTogcnVsZUVudHJ5LCBmYWN0czogbGl2ZUZhY3RzLCBpbmRleDogcnVsZUluZGV4LCBkZXB0aCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcnVsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSdhZGQgYSBydWxlJyBvbkNsaWNrPXsoKSA9PiBvbkFkZFJ1bGUocnVsZUluZGV4ICsgMSl9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge3J1bGVJbmRleCA+IDAgJiYgPGJ1dHRvbiB0aXRsZT0ncmVtb3ZlIHJ1bGUnIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUnVsZShydWxlSW5kZXgpfT4tPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+KSA6XHJcbiAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxSdWxlR3JvdXBFZGl0b3JcclxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtKU09OLnN0cmluZ2lmeShydWxlRW50cnkpfS0ke3J1bGVJbmRleH0tJHtkZXB0aH1gfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBydWxlRW50cnkgYXMgUnVsZUdyb3VwLCBmYWN0cywgaW5kZXg6IHJ1bGVJbmRleCwgZGVwdGg6IChkZXB0aCArIDEpLCBvbkNoYW5nZTogKHJ1bGVHcm91cCwgaSwgcGFyZW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVMaXN0W3J1bGVJbmRleF0gPSBydWxlR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIHBhcmVudEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbW92ZS1ncm91cC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtydWxlSW5kZXggPiAwICYmIDxidXR0b24gY2xhc3NOYW1lPSdyZW1vdmUtZ3JvdXAnIHRpdGxlPSdyZW1vdmUgZ3JvdXAnIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUnVsZShydWxlSW5kZXgpfT4mI3gyNzk2OzwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IElDUnVsZXNFZGl0b3IgPSAoe1xyXG4gIHJ1bGVzID0ge30sXHJcbiAgZmFjdHMgPSB7fSxcclxuICBvbkNoYW5nZSA9IChyID0+IG51bGwpLFxyXG4gIG9wdGlvbnMgPSB7IHNob3dGYWN0c0VkaXRvcjogdHJ1ZSB9XHJcbn06IElDUnVsZXNFZGl0b3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsaXZlUnVsZXMsIHNldExpdmVSdWxlc10gPSB1c2VTdGF0ZShydWxlcyk7XHJcbiAgY29uc3QgeyBzaG93RmFjdHNFZGl0b3IgfSA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IG9uUnVsZUNoYW5nZSA9IChsYXRlc3RSdWxlczogUnVsZUdyb3VwKSA9PiB7XHJcbiAgICBvbkNoYW5nZShsYXRlc3RSdWxlcyk7XHJcbiAgICBzZXRMaXZlUnVsZXMoeyAuLi5sYXRlc3RSdWxlcyB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSdWxlR3JvdXBFZGl0b3Igey4uLnsgcnVsZXM6IGxpdmVSdWxlcywgZmFjdHMsIG9uQ2hhbmdlOiBvblJ1bGVDaGFuZ2UsIHNob3dGYWN0c0VkaXRvciB9fSAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZhY3RzRWRpdG9yID0gKHsgb2JqZWN0LCBvbkNoYW5nZSA9ICgpID0+IG51bGwgfTogRmFjdHNFZGl0b3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVPYmplY3QsIHNldEFjdGl2ZU9iamVjdF0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeShvYmplY3QsIG51bGwsIDIpKTtcclxuICBjb25zdCBwYXJzZWRWYWx1ZSA9IHNhZmVQYXJzZShhY3RpdmVPYmplY3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhY3RzLXN0YXR1cycgc3R5bGU9e3sgY29sb3I6IHBhcnNlZFZhbHVlID8gJ2dyZWVuJyA6ICdkYXJrcmVkJyB9fT5cclxuICAgICAgICBGYWN0cyBhcmUge3BhcnNlZFZhbHVlID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHRpdGxlPSdlbnRlciB5b3VyIGZhY3RzIGhlcmUnXHJcbiAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHtcclxuICAgICAgICAgIHNldEFjdGl2ZU9iamVjdChldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgb25DaGFuZ2UoZXYudGFyZ2V0LnZhbHVlLCBwYXJzZWRWYWx1ZSAhPT0gZmFsc2UpXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgaGVpZ2h0OiAnMzAwcHgnIH19XHJcbiAgICAgICAgdmFsdWU9e2FjdGl2ZU9iamVjdH0+XHJcbiAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElDUnVsZXNFZGl0b3I7XHJcbiIsImltcG9ydCB7IHR5cGUgT3BlcmF0b3IsIHR5cGUgUnVsZUdyb3VwLCBpbnRlcm5hbE9wZXJhdG9yVmFsdWVzLCBwcm9jZXNzUnVsZU9yR3JvdXAsIFF1YW50aWZpZXJzLCBSdWxlLCBwcm9jZXNzVmVyYm9zZSB9IGZyb20gJ0BpY3J1bGVzL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBvcE1hcCwgdHlwZSBJQ1J1bGVzRWRpdG9yUHJvcHMsIHR5cGUgUnVsZUVkaXRvclByb3BzLCB0eXBlIFJ1bGVHcm91cEVkaXRvclByb3BzLCBGYWN0c0VkaXRvclByb3BzLCBzYWZlUGFyc2UsIGZsYXR0ZW5LZXlzIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSwgQnV0dG9uLCBDYXJkLCBJbnB1dCwgU2VsZWN0LCBTcGFjZSwgVGFnLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNpemVUeXBlIH0gZnJvbSAnYW50ZC9lcy9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBDaGVja0NpcmNsZU91dGxpbmVkLCBNaW51c0NpcmNsZU91dGxpbmVkLCBQbHVzQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCAnLi9lZGl0b3JTdHlsZS5jc3MnO1xyXG5cclxubGV0IGxhc3RJZCA9IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgRmFjdHNFZGl0b3JBbnRkID0gKHsgb2JqZWN0LCBvbkNoYW5nZSA9ICgpID0+IG51bGwgfTogRmFjdHNFZGl0b3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVPYmplY3QsIHNldEFjdGl2ZU9iamVjdF0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeShvYmplY3QsIG51bGwsIDIpKTtcclxuICBjb25zdCBwYXJzZWRWYWx1ZSA9IHNhZmVQYXJzZShhY3RpdmVPYmplY3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICczNTBweCcsIG1hcmdpbjogJzRweCcgfX1cclxuICAgICAgaG92ZXJhYmxlPXt0cnVlfVxyXG4gICAgICB0aXRsZT17XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IChwYXJzZWRWYWx1ZSA/ICdncmVlbicgOiAnZGFya3JlZCcpIH19PlxyXG4gICAgICAgICAgRmFjdHMgYXJlIHtwYXJzZWRWYWx1ZSA/ICd2YWxpZCcgOiAnaW52YWxpZCd9LlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgfT5cclxuICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgcm93cz17MjV9XHJcbiAgICAgICAgdGl0bGU9J2VudGVyIHlvdXIgZmFjdHMgaGVyZSdcclxuICAgICAgICBvbkNoYW5nZT17ZXYgPT4ge1xyXG4gICAgICAgICAgc2V0QWN0aXZlT2JqZWN0KGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBvbkNoYW5nZShldi50YXJnZXQudmFsdWUsIHNhZmVQYXJzZShldi50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsdWU9e2FjdGl2ZU9iamVjdH1cclxuICAgICAgLz5cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSdWxlRWRpdG9yQW50ZCA9ICh7XHJcbiAgZmFjdHMgPSB7fSxcclxuICBydWxlID0gWycnLCAnZXEnLCAnJ10sXHJcbiAgb25VcGRhdGUgPSAocnVsZSwgaW5kZXgpID0+IHsgfSxcclxuICBpbmRleCA9IDAsXHJcbiAgZGVwdGggPSAwXHJcbn06IFJ1bGVFZGl0b3JQcm9wcykgPT4ge1xyXG4gIC8vIGNvbnN0IFtydWxlRmFjdHMsIHNldFJ1bGVGYWN0c10gPSB1c2VTdGF0ZShmYWN0cyk7XHJcbiAgY29uc3QgW3VzZXJTaXplLCBzZXRVc2VyU2l6ZV0gPSB1c2VTdGF0ZTxTaXplVHlwZT4oJ21pZGRsZScpO1xyXG4gIGNvbnN0IFtmYWN0S2V5cywgc2V0RmFjdEtleXNdID0gdXNlU3RhdGUoT2JqZWN0LmVudHJpZXMoZmxhdHRlbktleXMoZmFjdHMpKSk7XHJcbiAgY29uc3QgW2xpdmVSdWxlLCBzZXRFZGl0UnVsZV0gPSB1c2VTdGF0ZShydWxlKTtcclxuICBjb25zdCBbZmFjdEtleSwgb3BlcmF0b3IsIHRlcm1dID0gbGl2ZVJ1bGU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGYWN0S2V5cyhPYmplY3QuZW50cmllcyhmbGF0dGVuS2V5cyhmYWN0cykpKTtcclxuICB9LCBbSlNPTi5zdHJpbmdpZnkoZmFjdHMpXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uVXBkYXRlKFtmYWN0S2V5LCBvcGVyYXRvciwgdGVybV0sIGluZGV4KTtcclxuICB9LCBbZmFjdEtleSwgb3BlcmF0b3IsIHRlcm1dKVxyXG5cclxuICBjb25zdCBrZXkgPSBgJHtpbmRleH0tJHtkZXB0aH1gO1xyXG4gIGNvbnN0IHZhbHVlSWQgPSBgdmFsdWUtJHtrZXl9YFxyXG4gIGNvbnN0IHRlcm1JZCA9IGB0ZXJtLSR7a2V5fWBcclxuICBjb25zdCByZXN1bHQgPSBwcm9jZXNzUnVsZU9yR3JvdXAoZmFjdHMsIGxpdmVSdWxlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNwYWNlIGtleT17a2V5fSBkaXJlY3Rpb249J2hvcml6b250YWwnPlxyXG4gICAgICA8VG9vbHRpcCB0aXRsZT17YCR7cmVzdWx0LnBhc3MgPyAnUnVsZSBQYXNzZWQnIDogJ1J1bGUgRmFpbGVkJ30gd2l0aCBwcm92aWRlZCBmYWN0c2B9PlxyXG4gICAgICAgIDxUYWcgaWNvbj17PENoZWNrQ2lyY2xlT3V0bGluZWQgLz59IGNvbG9yPXtyZXN1bHQucGFzcyA/ICdncmVlbicgOiAncmVkJ30gLz5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8ZGl2IGtleT17J3J1bGUtZmFjdCd9ID5cclxuICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgc2l6ZT17dXNlclNpemV9XHJcbiAgICAgICAgICBpZD17dGVybUlkfVxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtsYXN0SWQgPT09IHRlcm1JZH1cclxuICAgICAgICAgIG9wdGlvbnM9e2ZhY3RLZXlzLm1hcCgoW2tleV0pID0+ICh7IHZhbHVlOiBrZXkgfSkpfVxyXG4gICAgICAgICAgdmFsdWU9e2ZhY3RLZXl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSB0ZXJtSWRcclxuICAgICAgICAgICAgc2V0RWRpdFJ1bGUoW3ZhbHVlLnRvU3RyaW5nKCksIG9wZXJhdG9yLCB0ZXJtXSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGtleT17J3J1bGUtb3AnfT5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17YCR7ZmFjdEtleX0gJHtvcE1hcFtvcGVyYXRvcl19ICR7dGVybX1gfT5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxNDVweCcgfX1cclxuICAgICAgICAgICAgc2l6ZT17dXNlclNpemV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRvcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldEVkaXRSdWxlKFtmYWN0S2V5LCAoZXYgYXMgT3BlcmF0b3IpLCB0ZXJtXSl9XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e2ludGVybmFsT3BlcmF0b3JWYWx1ZXMubWFwKG9wID0+ICh7IGxhYmVsOiBvcE1hcFtvcF0sIHZhbHVlOiBvcCB9KSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYga2V5PXsncnVsZS10ZXJtJ30+XHJcbiAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX1cclxuICAgICAgICAgIHNpemU9e3VzZXJTaXplfVxyXG4gICAgICAgICAgaWQ9e3ZhbHVlSWR9XHJcbiAgICAgICAgICBhdXRvRm9jdXM9e2xhc3RJZCA9PT0gdmFsdWVJZH1cclxuICAgICAgICAgIG9wdGlvbnM9e2ZhY3RLZXlzLm1hcCgoWywgdmFsdWVdKSA9PiAoeyB2YWx1ZTogdmFsdWUudG9TdHJpbmcoKSB9KSl9XHJcbiAgICAgICAgICB2YWx1ZT17dGVybX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGxhc3RJZCA9IHZhbHVlSWRcclxuICAgICAgICAgICAgc2V0RWRpdFJ1bGUoW2ZhY3RLZXksIG9wZXJhdG9yLCB2YWx1ZV0pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TcGFjZT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFJ1bGVHcm91cEVkaXRvckFudGQgPSAoe1xyXG4gIGZhY3RzID0ge30sXHJcbiAgcnVsZXMgPSB7fSxcclxuICBvbkNoYW5nZSA9IHIgPT4geyB9LFxyXG4gIGRlcHRoID0gMCxcclxuICBpbmRleCA9IDAsXHJcbiAgc2hvd0ZhY3RzRWRpdG9yID0gdHJ1ZSxcclxuICBleHRyYSA9ICgpID0+IG51bGwsXHJcbiAgRmFjdHNFZGl0b3IgPSBGYWN0c0VkaXRvckFudGRcclxufTogUnVsZUdyb3VwRWRpdG9yUHJvcHMpID0+IHtcclxuICBjb25zdCBbdXNlclNpemUsIHNldFVzZXJTaXplXSA9IHVzZVN0YXRlPFNpemVUeXBlPignbWlkZGxlJyk7XHJcbiAgY29uc3QgW2xpdmVGYWN0cywgc2V0TGl2ZUZhY3RzXSA9IHVzZVN0YXRlKGZhY3RzKTtcclxuICBjb25zdCBbcXVhbnRpZmllciwgc2V0UXVhbnRpZmllcl0gPSB1c2VTdGF0ZSgocnVsZXMuYWxsID8gJ2FsbCcgOiAnYW55JykgYXMgUXVhbnRpZmllcnMpO1xyXG4gIGNvbnN0IFtsaXZlUnVsZXMsIHNldExpdmVSdWxlc10gPSB1c2VTdGF0ZShydWxlcyk7XHJcbiAgY29uc3QgW3J1bGVMaXN0LCBzZXRMaXZlUnVsZUxpc3RdID0gdXNlU3RhdGUoWy4uLihsaXZlUnVsZXMuYWxsIHx8IGxpdmVSdWxlcy5hbnkpXSk7XHJcbiAgY29uc3QgW3ZlcnNib3NlUmVzdWx0LCBzZXRWZXJib3NlUmVzdWx0XSA9IHVzZVN0YXRlKHt9IGFzIGFueSk7XHJcbiAgY29uc3QgcXVhbnRmaWVycyA9IFsnYWxsJywgJ2FueSddIGFzIFF1YW50aWZpZXJzW107XHJcbiAgY29uc3QgZW1wdHlSdWxlID0gWycnLCAnZXEnLCAnJ10gYXMgUnVsZTtcclxuICBjb25zdCBlbXB0eUdyb3VwID0geyBhbGw6IFtlbXB0eVJ1bGVdIH0gYXMgUnVsZUdyb3VwO1xyXG5cclxuICBjb25zdCBvblJ1bGVVcGRhdGUgPSAocnVsZTogUnVsZSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICBydWxlTGlzdFtpXSA9IHJ1bGU7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkFkZFJ1bGUgPSAoaSA9IG51bGwgYXMgbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaSA9PT0gbnVsbCkge1xyXG4gICAgICBydWxlTGlzdC5wdXNoKGVtcHR5UnVsZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcnVsZUxpc3Quc3BsaWNlKGksIDAsIGVtcHR5UnVsZSk7XHJcbiAgICB9XHJcbiAgICBzZXRMaXZlUnVsZUxpc3QoWy4uLnJ1bGVMaXN0XSk7XHJcbiAgICBvbkNoYW5nZSh7IFtxdWFudGlmaWVyXTogWy4uLnJ1bGVMaXN0XSB9LCBpLCBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkR3JvdXAgPSAoaSA9IG51bGwgYXMgbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaSA9PT0gbnVsbCkge1xyXG4gICAgICBydWxlTGlzdC5wdXNoKGVtcHR5R3JvdXApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJ1bGVMaXN0LnNwbGljZShpLCAwLCBlbXB0eUdyb3VwKTtcclxuICAgIH1cclxuICAgIHNldExpdmVSdWxlTGlzdChbLi4ucnVsZUxpc3RdKTtcclxuICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZVJ1bGUgPSAoaSkgPT4ge1xyXG4gICAgcnVsZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gICAgc2V0TGl2ZVJ1bGVMaXN0KFsuLi5ydWxlTGlzdF0pO1xyXG4gICAgb25DaGFuZ2UoeyBbcXVhbnRpZmllcl06IFsuLi5ydWxlTGlzdF0gfSwgaSwgaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2ZXJib3NlUmVzdWx0cyA9IHByb2Nlc3NWZXJib3NlKGZhY3RzLCBsaXZlUnVsZXMpO1xyXG4gICAgb25DaGFuZ2UobGl2ZVJ1bGVzLCAwLCBpbmRleCk7XHJcbiAgfSwgW0pTT04uc3RyaW5naWZ5KGxpdmVSdWxlcyldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gIH0sIFtKU09OLnN0cmluZ2lmeShydWxlTGlzdCldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TGl2ZVJ1bGVzKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0pO1xyXG4gIH0sIFtxdWFudGlmaWVyXSlcclxuXHJcbiAgY29uc3QgaXNWYWxpZFJ1bGUgPSBwcm9jZXNzUnVsZU9yR3JvdXAoZmFjdHMsIGxpdmVSdWxlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0ga2V5PXtgZ3JvdXAtZWRpdC0ke2luZGV4fS0ke2RlcHRofWB9PlxyXG4gICAgICB7c2hvd0ZhY3RzRWRpdG9yICYmIGRlcHRoID09PSAwICYmIGluZGV4ID09PSAwICYmIEZhY3RzRWRpdG9yICYmIChcclxuICAgICAgICA8RmFjdHNFZGl0b3Igb2JqZWN0PXtsaXZlRmFjdHN9IG9uQ2hhbmdlPXsoc3RyaW5nVmFsdWUsIHBhcnNlZFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gISFwYXJzZWRWYWx1ZTtcclxuICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldExpdmVGYWN0cyhwYXJzZWRWYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgKX1cclxuICAgICAgPENhcmRcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0cHgnIH19XHJcbiAgICAgICAgaG92ZXJhYmxlPXt0cnVlfVxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIGRlcHRoID09PSAwICYmIGluZGV4ID09PSAwICYmIDxTcGFjZT5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IChpc1ZhbGlkUnVsZSA/ICdncmVlbicgOiAnZGFya3JlZCcpIH19ID5SdWxlIGlzIHtpc1ZhbGlkUnVsZSA/ICd2YWxpZCcgOiAnaW52YWxpZCd9Ljwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IChpc1ZhbGlkUnVsZSA/ICdncmVlbicgOiAnZGFya3JlZCcpIH19ID5SdWxlIGlzIHtpc1ZhbGlkUnVsZT8ucGFzcyA/ICdwYXNzaW5nJyA6ICdmYWlsaW5nJ30uPC9zcGFuPlxyXG4gICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzJweCBkb3R0ZWQgI2NjYycsIHBhZGRpbmc6ICc0cHgnIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFNlbGVjdCBzaXplPXt1c2VyU2l6ZX0gdmFsdWU9e3F1YW50aWZpZXJ9IG9wdGlvbnM9e3F1YW50ZmllcnMubWFwKHEgPT4gKHsgbGFiZWw6IHEsIHZhbHVlOiBxIH0pKX0gb25DaGFuZ2U9e2V2ID0+IHNldFF1YW50aWZpZXIoZXYgYXMgUXVhbnRpZmllcnMpfSBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT17dXNlclNpemV9IGljb249ezxQbHVzQ2lyY2xlT3V0bGluZWQgLz59IHRpdGxlPSdhZGQgYSBncm91cCcgb25DbGljaz17KCkgPT4gYWRkR3JvdXAoKX0gLz5cclxuICAgICAgICAgICAge2V4dHJhICYmIGV4dHJhKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtydWxlTGlzdC5tYXAoKHJ1bGVFbnRyeSwgcnVsZUluZGV4KSA9PiBBcnJheS5pc0FycmF5KHJ1bGVFbnRyeSkgP1xyXG4gICAgICAgICAgICAgICg8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XHJcbiAgICAgICAgICAgICAgICA8UnVsZUVkaXRvckFudGRcclxuICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uUnVsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtKU09OLnN0cmluZ2lmeShydWxlRW50cnkpfS0ke3J1bGVJbmRleH0tJHtkZXB0aH1gfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ueyBydWxlOiBydWxlRW50cnksIGZhY3RzOiBsaXZlRmFjdHMsIGluZGV4OiBydWxlSW5kZXgsIGRlcHRoIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBmbGV4V3JhcDogJ25vd3JhcCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXt1c2VyU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8UGx1c0NpcmNsZU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPSdhZGQgYSBydWxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkUnVsZShydWxlSW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge3J1bGVJbmRleCA+IDAgJiYgPEJ1dHRvbiBzaXplPXt1c2VyU2l6ZX0gaWNvbj17PE1pbnVzQ2lyY2xlT3V0bGluZWQgLz59IHRpdGxlPSdyZW1vdmUgcnVsZScgb25DbGljaz17KCkgPT4gb25EZWxldGVSdWxlKHJ1bGVJbmRleCl9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+KSA6XHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgPFJ1bGVHcm91cEVkaXRvckFudGRcclxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtKU09OLnN0cmluZ2lmeShydWxlRW50cnkpfS0ke3J1bGVJbmRleH0tJHtkZXB0aH1gfVxyXG4gICAgICAgICAgICAgICAgICBleHRyYT17KHJ1bGVJbmRleCA+IDAgPyAoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17dXNlclNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0ncmVtb3ZlIGdyb3VwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVSdWxlKHJ1bGVJbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8TWludXNDaXJjbGVPdXRsaW5lZCAvPn0gLz4pIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVFbnRyeSBhcyBSdWxlR3JvdXAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjdHM6IGxpdmVGYWN0cyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogcnVsZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoOiAoZGVwdGggKyAxKSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKHJ1bGVHcm91cCwgaSwgcGFyZW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVMaXN0W3J1bGVJbmRleF0gPSBydWxlR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHsgW3F1YW50aWZpZXJdOiBbLi4ucnVsZUxpc3RdIH0sIGksIHBhcmVudEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJQ1J1bGVzRWRpdG9yQW50ZCA9ICh7XHJcbiAgcnVsZXMgPSB7fSxcclxuICBmYWN0cyA9IHt9LFxyXG4gIG9uQ2hhbmdlID0gKHIgPT4gbnVsbCksXHJcbiAgb3B0aW9ucyA9IHtcclxuICAgIHNob3dGYWN0c0VkaXRvcjogdHJ1ZSxcclxuICAgIGZhY3RzRWRpdG9yOiBGYWN0c0VkaXRvckFudGRcclxuICB9XHJcbn06IElDUnVsZXNFZGl0b3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsaXZlUnVsZXMsIHNldExpdmVSdWxlc10gPSB1c2VTdGF0ZShydWxlcyk7XHJcbiAgY29uc3QgeyBzaG93RmFjdHNFZGl0b3IgfSA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IG9uUnVsZUNoYW5nZSA9IChsYXRlc3RSdWxlczogUnVsZUdyb3VwKSA9PiB7XHJcbiAgICBvbkNoYW5nZShsYXRlc3RSdWxlcyk7XHJcbiAgICBzZXRMaXZlUnVsZXMoeyAuLi5sYXRlc3RSdWxlcyB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSdWxlR3JvdXBFZGl0b3JBbnRkIHsuLi57IHJ1bGVzOiBsaXZlUnVsZXMsIGZhY3RzLCBvbkNoYW5nZTogb25SdWxlQ2hhbmdlLCBzaG93RmFjdHNFZGl0b3IsIEZhY3RzRWRpdG9yOiBvcHRpb25zLmZhY3RzRWRpdG9yIH19IC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJQ1J1bGVzRWRpdG9yQW50ZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdG9yU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3JTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgeyBGYWN0c0VkaXRvckFudGQgfSBmcm9tICcuL1J1bGVFZGl0b3JBbnRkJztcclxuZXhwb3J0IHsgSUNSdWxlc0VkaXRvckFudGQgfSBmcm9tICcuL1J1bGVFZGl0b3JBbnRkJztcclxuaW1wb3J0IHsgUnVsZSwgUnVsZUdyb3VwLCBtZW1vaXplZEZsYXR0ZW5LZXlzIGFzIGNvcmVGbGF0dGVuS2V5cyB9IGZyb20gJ0BpY3J1bGVzL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ1J1bGVzRWRpdG9yIH0gZnJvbSAnLi9SdWxlRWRpdG9yJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElDUnVsZXNFZGl0b3I7XHJcbmV4cG9ydCB7IFxyXG4gIElDUnVsZXNFZGl0b3IsXHJcbn1cclxuXHJcbi8vIFJlLWV4cG9ydCB0aGUgbWVtb2l6ZWQgdmVyc2lvbiBmcm9tIGNvcmUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxyXG5leHBvcnQgY29uc3QgZmxhdHRlbktleXMgPSBjb3JlRmxhdHRlbktleXM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2FmZVBhcnNlID0gKHRleHRKc29uOiBzdHJpbmcsIHNob3dFcnJvciA9IGZhbHNlKTogYW55IHwgYm9vbGVhbiA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHRleHRKc29uKTtcclxuICB9XHJcbiAgY2F0Y2ggKGUpIHtcclxuICAgIGlmIChzaG93RXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcE1hcCA9IHtcclxuICBlcTogJ2VxdWFscycsXHJcbiAgbmVxOiAnbm90IGVxdWFscycsXHJcbiAgZ3Q6ICc+IGdyZWF0ZXIgdGhhbicsXHJcbiAgbHQ6ICc8IGxlc3MgdGhhbicsXHJcbiAgbHRlOiAnPD0gbGVzcyBvciBlcXVhbCcsXHJcbiAgZ3RlOiAnPj0gZ3JlYXRlciBvciBlcXVhbCcsXHJcbiAgaGFzOiAnY29udGFpbnMnLFxyXG4gIG5oYXM6ICdub3QgY29udGFpbnMnLFxyXG4gIGluOiAnaW4gdGVybScsXHJcbiAgbml0OiAnbm90IGluIHRlcm0nXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVFZGl0b3JQcm9wcyB7XHJcbiAgZmFjdHM/OiBhbnk7XHJcbiAgcnVsZT86IFJ1bGU7XHJcbiAgb25VcGRhdGU/OiAocjogUnVsZSwgaTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIG9uRGVsZXRlUnVsZT86IChudW1iZXIpID0+IHZvaWQ7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbiAgZGVwdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZUdyb3VwRWRpdG9yUHJvcHMge1xyXG4gIGZhY3RzPzogYW55O1xyXG4gIHJ1bGVzPzogUnVsZUdyb3VwO1xyXG4gIG9uQ2hhbmdlPzogKHJ1bGVzOiBSdWxlR3JvdXAsIGluZGV4OiBudW1iZXIsIHBhcmVudEluZGV4PzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGRlcHRoPzogbnVtYmVyO1xyXG4gIGluZGV4PzogbnVtYmVyO1xyXG4gIHNob3dGYWN0c0VkaXRvcj86IGJvb2xlYW47XHJcbiAgZXh0cmE/OiBhbnk7XHJcbiAgRmFjdHNFZGl0b3I/OiBSZWFjdC5Db21wb25lbnRUeXBlPEZhY3RzRWRpdG9yUHJvcHM+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVzRWRpdG9yT3B0aW9ucyB7XHJcbiAgc2hvd0ZhY3RzRWRpdG9yPzogYm9vbGVhbjtcclxuICBmYWN0c0VkaXRvcj86IFJlYWN0LkNvbXBvbmVudFR5cGU8RmFjdHNFZGl0b3JQcm9wcz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjdHNFZGl0b3JQcm9wcyB7XHJcbiAgb2JqZWN0OiBhbnk7XHJcbiAgb25DaGFuZ2U/OiAoc3RyaW5nVmFsdWU6IHN0cmluZywgcGFyc2VkVmFsdWU6IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ1J1bGVzRWRpdG9yUHJvcHMge1xyXG4gIHJ1bGVzOiBSdWxlR3JvdXA7XHJcbiAgZmFjdHM6IGFueTtcclxuICBvbkNoYW5nZT86IChydWxlczogUnVsZUdyb3VwKSA9PiB2b2lkO1xyXG4gIG9wdGlvbnM/OiBSdWxlc0VkaXRvck9wdGlvbnM7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9