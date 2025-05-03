(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory();
	else
		root["core"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processRules = exports.validateRule = exports.processVerbose = exports.verbosePlugin = exports.processGroup = exports.processRuleOrGroup = exports.internalOperators = exports.processResult = exports.memoizedFlattenKeys = exports.flattenKeys = exports.isGroup = exports.internalOperatorValues = void 0;
const memoize_1 = __webpack_require__(/*! ./library/memoize */ "./src/library/memoize.ts");
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
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFNLENBQUM7QUFDVixDQUFDO0FBYkQsMEJBYUM7QUFFRCxxQkFBZSxPQUFPLENBQUM7Ozs7Ozs7VUNyQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvcmUvLi9zcmMvbGlicmFyeS9tZW1vaXplLnRzIiwid2VicGFjazovL2NvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29yZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvcmUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvcmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKipcclxuICogQG1vZHVsZSBAaWNydWxlcy9jb3JlXHJcbiAqIFxyXG4gKiBJQ1J1bGVzIENvcmUgLSBBIHNtYWxsIGFuZCBleHRlbnNpYmxlIHJ1bGVzIGVuZ2luZSB3aXRoIGEgY29tcGFjdCBKU09OIGZvb3RwcmludC5cclxuICogXHJcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHRoZSBmb3VuZGF0aW9uIGZvciBjcmVhdGluZywgdmFsaWRhdGluZywgYW5kIHByb2Nlc3NpbmcgcnVsZXNcclxuICogYWdhaW5zdCBhIHNldCBvZiBmYWN0cy4gSXQgc3VwcG9ydHMgYm9vbGVhbiBsb2dpYyB3aXRoICdhbGwnIChBTkQpIGFuZCAnYW55JyAoT1IpXHJcbiAqIGNvbmRpdGlvbnMsIGN1c3RvbSBvcGVyYXRvcnMsIGFuZCBleHRlbnNpYmlsaXR5IHRocm91Z2ggcGx1Z2lucy5cclxuICogXHJcbiAqIEJhc2ljIHVzYWdlOlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCBwcm9jZXNzUnVsZXMgZnJvbSAnQGljcnVsZXMvY29yZSc7XHJcbiAqIFxyXG4gKiBjb25zdCBmYWN0cyA9IHsgYWdlOiAyNSwgcm9sZTogJ2FkbWluJyB9O1xyXG4gKiBjb25zdCBydWxlcyA9IHtcclxuICogICBhbGw6IFtcclxuICogICAgIFsnYWdlJywgJ2d0ZScsIDE4XSxcclxuICogICAgIFsncm9sZScsICdlcScsICdhZG1pbiddXHJcbiAqICAgXVxyXG4gKiB9O1xyXG4gKiBcclxuICogY29uc3QgcmVzdWx0ID0gcHJvY2Vzc1J1bGVzKGZhY3RzLCBydWxlcyk7XHJcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5wYXNzKTsgLy8gdHJ1ZVxyXG4gKiBgYGBcclxuICovXHJcblxyXG5pbXBvcnQgeyBtZW1vaXplIH0gZnJvbSAnLi9saWJyYXJ5L21lbW9pemUnO1xyXG5cclxuLyoqIFRoZSBzdWJqZWN0L2tleSB0byBldmFsdWF0ZSBpbiB0aGUgZmFjdHMgb2JqZWN0ICovXHJcbmV4cG9ydCB0eXBlIFN1YmplY3QgPSBzdHJpbmc7XHJcblxyXG4vKiogVGhlIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdCAqL1xyXG5leHBvcnQgdHlwZSBUZXJtID0gYW55O1xyXG5cclxuLyoqIEEgc2luZ2xlIHJ1bGUgY29uc2lzdGluZyBvZiBbc3ViamVjdCwgb3BlcmF0b3IsIHRlcm1dICovXHJcbmV4cG9ydCB0eXBlIFJ1bGUgPSBbU3ViamVjdCwgT3BlcmF0b3IsIFRlcm1dO1xyXG5cclxuLyoqIFRoZSBhdmFpbGFibGUgcXVhbnRpZmllcnMgZm9yIHJ1bGUgZ3JvdXBzICovXHJcbmV4cG9ydCB0eXBlIFF1YW50aWZpZXJzID0gJ2FsbCcgfCAnYW55JztcclxuXHJcbi8qKiBcclxuICogVGhlIG9wZXJhdG9ycyB1c2VkIHRvIGNvbXBhcmUgdmFsdWVzXHJcbiAqIC0gJ2VxJzogRXF1YWwgKD09PSlcclxuICogLSAnbmVxJzogTm90IGVxdWFsICghPT0pXHJcbiAqIC0gJ2d0JzogR3JlYXRlciB0aGFuICg+KVxyXG4gKiAtICdsdCc6IExlc3MgdGhhbiAoPClcclxuICogLSAnZ3RlJzogR3JlYXRlciB0aGFuIG9yIGVxdWFsICg+PSlcclxuICogLSAnbHRlJzogTGVzcyB0aGFuIG9yIGVxdWFsICg8PSlcclxuICogLSAnaGFzJzogQ29udGFpbnMgdmFsdWUgKGluY2x1ZGVzKVxyXG4gKiAtICduaGFzJzogRG9lcyBub3QgY29udGFpbiB2YWx1ZSAoIWluY2x1ZGVzKVxyXG4gKiAtICdpbic6IFZhbHVlIGlzIGluIGFycmF5L3N0cmluZy9vYmplY3QgKGlzIGluY2x1ZGVkKVxyXG4gKiAtICduaXQnOiBWYWx1ZSBpcyBub3QgaW4gYXJyYXkvc3RyaW5nL29iamVjdCAoaXMgbm90IGluY2x1ZGVkKVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgT3BlcmF0b3IgPSAnZXEnIHwgJ25lcScgfCAnZ3QnIHwgJ2x0JyB8ICdndGUnIHwgJ2x0ZScgfCAnaGFzJyB8ICduaGFzJyB8ICdpbicgfCAnbml0JyB8IHN0cmluZztcclxuXHJcbi8qKiBBbiBhcnJheSBvZiBydWxlcyBhbmQvb3IgcnVsZSBncm91cHMgKi9cclxuZXhwb3J0IHR5cGUgUnVsZXMgPSAoUnVsZSB8IFJ1bGVHcm91cClbXTtcclxuXHJcbi8qKlxyXG4gKiBBIGdyb3VwIG9mIHJ1bGVzIHdpdGggYSBsb2dpY2FsIG9wZXJhdG9yIChhbGwvYW55KVxyXG4gKiAtIGFsbDogQWxsIHJ1bGVzIG11c3QgcGFzcyAoQU5EKVxyXG4gKiAtIGFueTogQXQgbGVhc3Qgb25lIHJ1bGUgbXVzdCBwYXNzIChPUilcclxuICovXHJcbmV4cG9ydCB0eXBlIFJ1bGVHcm91cCA9IHsgYWxsPzogUnVsZXMsIGFueT86IFJ1bGVzIH07XHJcblxyXG4vKiogVGhlIGRhdGEgdG8gZXZhbHVhdGUgcnVsZXMgYWdhaW5zdCAqL1xyXG5leHBvcnQgdHlwZSBGYWN0cyA9IFJlY29yZDxzdHJpbmcsIGFueT4gfCBSZWNvcmQ8c3RyaW5nLCBhbnk+W107XHJcblxyXG4vKiogXHJcbiAqIEEgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgcnVsZSByZXN1bHRzLCB1c2VkIGZvciBjcmVhdGluZyBwbHVnaW5zXHJcbiAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyBjb250YWluaW5nIHJ1bGUgcHJvY2Vzc2luZyBpbmZvcm1hdGlvblxyXG4gKiBAcmV0dXJucyBBIFByb2Nlc3NSZXN1bHQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXN1bHRQbHVnaW4gPSAoYXJnczogUGx1Z2luQXJncykgPT4gUHJvY2Vzc1Jlc3VsdDtcclxuXHJcbi8qKiBcclxuICogQSBtYXAgb2YgY3VzdG9tIG9wZXJhdG9ycyBhbmQgdGhlaXIgaW1wbGVtZW50YXRpb24gZnVuY3Rpb25zXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBPcGVyYXRvclBsdWdpbiA9IFJlY29yZDxzdHJpbmcsIChhcmdzOiBPcGVyYXRvckZ1bmNBcmdzKSA9PiBib29sZWFuPjtcclxuXHJcbi8qKlxyXG4gKiBBcmd1bWVudHMgcGFzc2VkIHRvIG9wZXJhdG9yIGZ1bmN0aW9uc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgT3BlcmF0b3JGdW5jQXJncyA9IHtcclxuICAvKiogVGhlIHZhbHVlIGZyb20gdGhlIGZhY3RzIG9iamVjdCAqL1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgLyoqIFRoZSB0ZXJtIHRvIGNvbXBhcmUgYWdhaW5zdCAqL1xyXG4gIHRlcm06IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFyZ3VtZW50cyBwYXNzZWQgdG8gcmVzdWx0IHBsdWdpbnNcclxuICovXHJcbmV4cG9ydCB0eXBlIFBsdWdpbkFyZ3MgPSB7XHJcbiAgLyoqIFdoZXRoZXIgdGhlIHJ1bGUgcGFzc2VkICovXHJcbiAgcGFzczogYm9vbGVhbjtcclxuICAvKiogVGhlIHJ1bGUgb3IgcnVsZSBncm91cCBiZWluZyBwcm9jZXNzZWQgKi9cclxuICBydWxlOiBSdWxlIHwgUnVsZUdyb3VwO1xyXG4gIC8qKiBUaGUgZmFjdHMgYmVpbmcgZXZhbHVhdGVkICovXHJcbiAgZmFjdHM/OiBGYWN0cztcclxuICAvKiogVGhlIHJlc3VsdCBvZiBncm91cCBwcm9jZXNzaW5nICovXHJcbiAgZ3JvdXA/OiBhbnk7XHJcbn07XHJcblxyXG4vKipcclxuICogQXJndW1lbnRzIGZvciB0aGUgcHJvY2VzcyBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzQXJncyBleHRlbmRzIFBsdWdpbkFyZ3MgeyBcclxuICAvKiogVGhlIHBsdWdpbnMgdG8gdXNlIGZvciBwcm9jZXNzaW5nICovXHJcbiAgcGx1Z2luczogUmVzdWx0UGx1Z2luW10gXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgcmVzdWx0IG9mIHByb2Nlc3NpbmcgYSBydWxlIG9yIHJ1bGUgZ3JvdXBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc1Jlc3VsdCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4geyBcclxuICAvKiogV2hldGhlciB0aGUgcnVsZSBvciBydWxlIGdyb3VwIHBhc3NlZCAqL1xyXG4gIHBhc3M6IGJvb2xlYW4gXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgcmVzdWx0IG9mIHZhbGlkYXRpbmcgYSBydWxlIG9yIHJ1bGUgZ3JvdXBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZUV2YWx1YXRpb24geyBcclxuICAvKiogV2hldGhlciB0aGUgcnVsZSBpcyB2YWxpZCAqL1xyXG4gIGlzVmFsaWQ6IGJvb2xlYW47IFxyXG4gIC8qKiBFcnJvciBtZXNzYWdlIGlmIHRoZSBydWxlIGlzIGludmFsaWQgKi9cclxuICBtZXNzYWdlPzogc3RyaW5nOyBcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIHJ1bGUgcHJvY2Vzc2luZ1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcclxuICAvKiogUGx1Z2lucyB0byB1c2UgZHVyaW5nIHByb2Nlc3NpbmcgKi9cclxuICBwbHVnaW5zPzogUmVzdWx0UGx1Z2luW107XHJcbiAgLyoqIEN1c3RvbSBvcGVyYXRvcnMgdG8gdXNlIGR1cmluZyBwcm9jZXNzaW5nICovXHJcbiAgb3BlcmF0b3JzPzogT3BlcmF0b3JQbHVnaW47XHJcbn1cclxuXHJcbi8qKiBKYXZhU2NyaXB0IHZhbHVlIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9ICdzdHJpbmcnIHwgJ251bWJlcicgfCAnYmlnaW50JyB8ICdib29sZWFuJyB8ICdzeW1ib2wnIHwgJ3VuZGVmaW5lZCcgfCAnb2JqZWN0JyB8ICdmdW5jdGlvbicgfCAnYXJyYXknO1xyXG5cclxuLyoqIEJ1aWx0LWluIG9wZXJhdG9ycyAqL1xyXG5leHBvcnQgY29uc3QgaW50ZXJuYWxPcGVyYXRvclZhbHVlczogT3BlcmF0b3JbXSA9IFsnZXEnLCAnbmVxJywgJ2d0JywgJ2x0JywgJ2d0ZScsICdsdGUnLCAnaGFzJywgJ25oYXMnLCAnaW4nLCAnbml0J107XHJcblxyXG5jb25zdCBkZWZhdWx0RGVsaW1pdGVyID0gJy4nO1xyXG5cclxuLy8gQ3JlYXRlIGEgbWFwIGZvciBmYXN0ZXIgb3BlcmF0b3IgbG9va3Vwc1xyXG5jb25zdCBvcGVyYXRvck1hcCA9IG5ldyBTZXQoaW50ZXJuYWxPcGVyYXRvclZhbHVlcyk7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBhIHJ1bGUgaXMgYSBydWxlIGdyb3VwIChoYXMgJ2FsbCcgb3IgJ2FueScgcHJvcGVydHkpXHJcbiAqIFxyXG4gKiBAcGFyYW0gdGVzdFJ1bGUgVGhlIHJ1bGUgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBydWxlIGlzIGEgcnVsZSBncm91cCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNHcm91cCh0ZXN0UnVsZTogUnVsZSB8IFJ1bGVHcm91cCA9IHt9KTogYm9vbGVhbiB7XHJcbiAgaWYgKCF0ZXN0UnVsZSB8fCB0eXBlb2YgdGVzdFJ1bGUgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3QgeyBhbGwsIGFueSB9ID0gdGVzdFJ1bGUgYXMgUnVsZUdyb3VwO1xyXG4gIHJldHVybiBCb29sZWFuKGFsbCB8fCBhbnkpO1xyXG59XHJcblxyXG4vKipcclxuICogRmxhdHRlbnMgYSBuZXN0ZWQgb2JqZWN0IGludG8gYSBzaW5nbGUtbGV2ZWwgb2JqZWN0IHdpdGggZG90IG5vdGF0aW9uIGtleXNcclxuICogXHJcbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBmbGF0dGVuXHJcbiAqIEBwYXJhbSBwcmVmaXggUHJlZml4IGZvciB0aGUgZmxhdHRlbmVkIGtleXNcclxuICogQHBhcmFtIGRlbGltaXRlciBEZWxpbWl0ZXIgZm9yIG5lc3RlZCBrZXlzIChkZWZhdWx0OiAnLicpXHJcbiAqIEByZXR1cm5zIEEgZmxhdHRlbmVkIG9iamVjdCB3aXRoIGRvdCBub3RhdGlvbiBrZXlzXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGZsYXR0ZW5LZXlzKHsgdXNlcjogeyBuYW1lOiAnSm9obicsIGFnZTogMzAgfSB9KVxyXG4gKiAvLyBSZXR1cm5zOiB7ICd1c2VyLm5hbWUnOiAnSm9obicsICd1c2VyLmFnZSc6IDMwIH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbktleXMob2JqOiBhbnksIHByZWZpeCA9ICcnLCBkZWxpbWl0ZXIgPSAnLicpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcclxuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuIHt9O1xyXG4gIFxyXG4gIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4geyAuLi5hY2MsIC4uLmZsYXR0ZW5LZXlzKHZhbHVlLCBgJHtwcmVmaXh9JHtrZXl9JHtkZWxpbWl0ZXJ9YCkgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLmFjYywgW2Ake3ByZWZpeH0ke2tleX1gXTogdmFsdWUgfTtcclxuICB9LCB7fSk7XHJcbn1cclxuXHJcbi8vIE1lbW9pemUgdGhlIGZsYXR0ZW5LZXlzIGZ1bmN0aW9uIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcclxuZXhwb3J0IGNvbnN0IG1lbW9pemVkRmxhdHRlbktleXMgPSBtZW1vaXplKGZsYXR0ZW5LZXlzKTtcclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIHJlc3VsdCBvZiBhIHJ1bGUgZXZhbHVhdGlvbiB0aHJvdWdoIHBsdWdpbnNcclxuICogXHJcbiAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyBmb3IgcmVzdWx0IHByb2Nlc3NpbmdcclxuICogQHJldHVybnMgVGhlIHByb2Nlc3NlZCByZXN1bHRcclxuICovXHJcbmV4cG9ydCBjb25zdCBwcm9jZXNzUmVzdWx0ID0gKHsgcGFzcywgZmFjdHMsIHJ1bGUsIGdyb3VwLCBwbHVnaW5zID0gW10gYXMgUmVzdWx0UGx1Z2luW10gfTogUHJvY2Vzc0FyZ3MpOiBQcm9jZXNzUmVzdWx0ID0+IHtcclxuICBpZiAocGx1Z2lucy5sZW5ndGggPT09IDApIHJldHVybiB7IHBhc3MgfTtcclxuICBcclxuICByZXR1cm4gcGx1Z2lucy5yZWR1Y2UoXHJcbiAgICAocGx1Z2luUmVzdWx0LCBwbHVnaW4pID0+ICh7IC4uLnBsdWdpblJlc3VsdCwgLi4uKHBsdWdpbih7IHBhc3MsIGZhY3RzLCBydWxlLCBncm91cCB9KSB8fCB7fSkgfSksIFxyXG4gICAgeyBwYXNzIH1cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gZm9yICdpbicgYW5kICduaXQnIG9wZXJhdG9yc1xyXG4gKiBcclxuICogQHBhcmFtIG9wZXJhdG9yIFRoZSBvcGVyYXRvciB0byB1c2UgKCdpbicgb3IgJ25pdCcpXHJcbiAqIEByZXR1cm5zIEFuIG9wZXJhdG9yIGZ1bmN0aW9uXHJcbiAqL1xyXG5jb25zdCBpbl9uaXQgPSAob3BlcmF0b3I6IE9wZXJhdG9yKSA9PiAoeyB2YWx1ZSwgdGVybSB9KSA9PiB7XHJcbiAgaWYgKCF0ZXJtKSByZXR1cm4gZmFsc2U7XHJcbiAgXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodGVybSkgfHwgWydzdHJpbmcnLCAnb2JqZWN0J10uaW5jbHVkZXModHlwZW9mIHRlcm0pKSB7XHJcbiAgICBjb25zdCBwYXNzID0gdGVybS5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICByZXR1cm4gb3BlcmF0b3IgPT09ICdpbicgPyBwYXNzIDogIXBhc3M7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIGZvciAnaGFzJyBhbmQgJ25oYXMnIG9wZXJhdG9yc1xyXG4gKiBcclxuICogQHBhcmFtIG9wZXJhdG9yIFRoZSBvcGVyYXRvciB0byB1c2UgKCdoYXMnIG9yICduaGFzJylcclxuICogQHJldHVybnMgQW4gb3BlcmF0b3IgZnVuY3Rpb25cclxuICovXHJcbmNvbnN0IGhhc19uaGFzID0gKG9wZXJhdG9yOiBPcGVyYXRvcikgPT4gKHsgdmFsdWUsIHRlcm0gfSkgPT4ge1xyXG4gIGlmICghdmFsdWUgfHwgWydudW1iZXInLCAnYmlnaW50JywgJ3N5bWJvbCcsICd1bmRlZmluZWQnXS5pbmNsdWRlcyh0eXBlb2YgdmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcbiAgXHJcbiAgY29uc3QgcGFzcyA9IHZhbHVlLmluY2x1ZGVzKHRlcm0pO1xyXG4gIHJldHVybiAob3BlcmF0b3IgPT09ICdoYXMnKSA/IHBhc3MgOiAhcGFzcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1aWx0LWluIG9wZXJhdG9ycyBmb3IgcnVsZSBwcm9jZXNzaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW50ZXJuYWxPcGVyYXRvcnMgPSB7XHJcbiAgLyoqIEVxdWFsICg9PT0pICovXHJcbiAgZXE6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID09PSB0ZXJtLFxyXG4gIC8qKiBOb3QgZXF1YWwgKCE9PSkgKi9cclxuICBuZXE6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlICE9PSB0ZXJtLFxyXG4gIC8qKiBHcmVhdGVyIHRoYW4gKD4pICovXHJcbiAgZ3Q6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID4gdGVybSxcclxuICAvKiogR3JlYXRlciB0aGFuIG9yIGVxdWFsICg+PSkgKi9cclxuICBndGU6ICh7IHZhbHVlLCB0ZXJtIH0pID0+IHZhbHVlID49IHRlcm0sXHJcbiAgLyoqIExlc3MgdGhhbiAoPCkgKi9cclxuICBsdDogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPCB0ZXJtLFxyXG4gIC8qKiBMZXNzIHRoYW4gb3IgZXF1YWwgKDw9KSAqL1xyXG4gIGx0ZTogKHsgdmFsdWUsIHRlcm0gfSkgPT4gdmFsdWUgPD0gdGVybSxcclxuICAvKiogVmFsdWUgaXMgaW4gYXJyYXkvc3RyaW5nL29iamVjdCAqL1xyXG4gIGluOiBpbl9uaXQoJ2luJyksXHJcbiAgLyoqIFZhbHVlIGlzIG5vdCBpbiBhcnJheS9zdHJpbmcvb2JqZWN0ICovXHJcbiAgbml0OiBpbl9uaXQoJ25pdCcpLFxyXG4gIC8qKiBDb250YWlucyB2YWx1ZSAqL1xyXG4gIGhhczogaGFzX25oYXMoJ2hhcycpLFxyXG4gIC8qKiBEb2VzIG5vdCBjb250YWluIHZhbHVlICovXHJcbiAgbmhhczogaGFzX25oYXMoJ25oYXMnKVxyXG59IGFzIE9wZXJhdG9yUGx1Z2luO1xyXG5cclxuLy8gQ2FjaGUgZm9yIGRvdCBub3RhdGlvbiBsb29rdXBzXHJcbmNvbnN0IGZhY3RRdWVyeUNhY2hlID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3QgYSB2YWx1ZSBmcm9tIGZhY3RzIHVzaW5nIGRvdCBub3RhdGlvblxyXG4gKiBcclxuICogQHBhcmFtIGZhY3RzIFRoZSBmYWN0cyBvYmplY3RcclxuICogQHBhcmFtIHN1YmplY3QgVGhlIHN1YmplY3Qgd2l0aCBkb3Qgbm90YXRpb25cclxuICogQHJldHVybnMgVGhlIGV4dHJhY3RlZCB2YWx1ZSBhbmQgaXRzIHR5cGVcclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3REb3ROb3RhdGlvblZhbHVlKGZhY3RzOiBGYWN0cywgc3ViamVjdDogc3RyaW5nKSB7XHJcbiAgY29uc3QgY2FjaGVLZXkgPSBgJHtKU09OLnN0cmluZ2lmeShmYWN0cyl9LSR7c3ViamVjdH1gO1xyXG4gIFxyXG4gIGlmIChmYWN0UXVlcnlDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XHJcbiAgICByZXR1cm4gZmFjdFF1ZXJ5Q2FjaGUuZ2V0KGNhY2hlS2V5KTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgZmxhdEZhY3RzID0gbWVtb2l6ZWRGbGF0dGVuS2V5cyhmYWN0cyk7XHJcbiAgY29uc3QgcXVlcnlWYWx1ZSA9IGZsYXRGYWN0c1tzdWJqZWN0XTtcclxuICBjb25zdCB0eXBlID0gQXJyYXkuaXNBcnJheShxdWVyeVZhbHVlKSA/ICdhcnJheScgOiB0eXBlb2YgcXVlcnlWYWx1ZTtcclxuICBcclxuICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICB2YWx1ZTogcXVlcnlWYWx1ZSxcclxuICAgIHR5cGVcclxuICB9O1xyXG4gIFxyXG4gIGZhY3RRdWVyeUNhY2hlLnNldChjYWNoZUtleSwgcmVzdWx0KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIGEgc2luZ2xlIHJ1bGUgb3IgcnVsZSBncm91cCBhZ2FpbnN0IGEgc2V0IG9mIGZhY3RzXHJcbiAqIFxyXG4gKiBAcGFyYW0gZmFjdHMgVGhlIGZhY3RzIHRvIGV2YWx1YXRlIGFnYWluc3RcclxuICogQHBhcmFtIHJ1bGUgVGhlIHJ1bGUgb3IgcnVsZSBncm91cCB0byBwcm9jZXNzXHJcbiAqIEBwYXJhbSBvcHRpb25zIFByb2Nlc3Npbmcgb3B0aW9ucyAocGx1Z2lucywgY3VzdG9tIG9wZXJhdG9ycylcclxuICogQHJldHVybnMgVGhlIHByb2Nlc3NlZCByZXN1bHRcclxuICogXHJcbiAqIEB0aHJvd3MgRXJyb3IgaWYgdGhlIHJ1bGUgaXMgaW52YWxpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSdWxlT3JHcm91cChmYWN0czogRmFjdHMgPSB7fSwgcnVsZTogUnVsZSB8IFJ1bGVHcm91cCwgb3B0aW9uczogT3B0aW9ucyA9IHt9KTogUHJvY2Vzc1Jlc3VsdCB7XHJcbiAgY29uc3QgeyBwbHVnaW5zID0gW10sIG9wZXJhdG9ycyA9IHt9IH0gPSBvcHRpb25zO1xyXG4gIFxyXG4gIC8vIEZhc3QgcGF0aCBmb3IgcnVsZSBncm91cHNcclxuICBpZiAoaXNHcm91cChydWxlKSkge1xyXG4gICAgcmV0dXJuIHByb2Nlc3NHcm91cChmYWN0cywgcnVsZSBhcyBSdWxlR3JvdXAsIHsgcGx1Z2lucyB9KTtcclxuICB9XHJcblxyXG4gIC8vIEhhbmRsZSBydWxlXHJcbiAgY29uc3QgW3N1YmplY3QsIG9wLCB0ZXJtXSA9IHJ1bGUgYXMgUnVsZTtcclxuICBcclxuICAvLyBWYWxpZGF0ZSBydWxlXHJcbiAgaWYgKHN1YmplY3QgPT09IG51bGwgfHwgc3ViamVjdCA9PT0gdW5kZWZpbmVkIHx8ICFvcCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFJ1bGVcXG4ke0pTT04uc3RyaW5naWZ5KHJ1bGUsIG51bGwsIDIpfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSByZXN1bHRcclxuICBjb25zdCBydWxlUmVzdWx0ID0geyBwYXNzOiBmYWxzZSB9IGFzIFBsdWdpbkFyZ3M7XHJcbiAgXHJcbiAgLy8gR2V0IHRoZSB2YWx1ZSBhbmQgaXRzIHR5cGVcclxuICBsZXQgZmFjdFZhbHVlLCB2YWx1ZVR5cGU7XHJcbiAgXHJcbiAgLy8gSGFuZGxlIGRvdCBub3RhdGlvblxyXG4gIGlmIChzdWJqZWN0LmluZGV4T2YoZGVmYXVsdERlbGltaXRlcikgPiAwKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBleHRyYWN0RG90Tm90YXRpb25WYWx1ZShmYWN0cywgc3ViamVjdCk7XHJcbiAgICBmYWN0VmFsdWUgPSByZXN1bHQudmFsdWU7XHJcbiAgICB2YWx1ZVR5cGUgPSByZXN1bHQudHlwZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmFjdFZhbHVlID0gZmFjdHM/LltzdWJqZWN0XTtcclxuICAgIHZhbHVlVHlwZSA9IEFycmF5LmlzQXJyYXkoZmFjdFZhbHVlKSA/ICdhcnJheScgOiB0eXBlb2YgZmFjdFZhbHVlO1xyXG4gIH1cclxuICBcclxuICAvLyBIYW5kbGUgdGVybSBwcm9jZXNzaW5nXHJcbiAgY29uc3QgdGVybUlzT2JqZWN0ID0gdGVybSAhPT0gbnVsbCAmJiB0eXBlb2YgdGVybSA9PT0gJ29iamVjdCc7XHJcbiAgXHJcbiAgLy8gUGFyc2UgbnVtZXJpYyB2YWx1ZXMgY29ycmVjdGx5XHJcbiAgY29uc3QgaXNOdW1lcmljID0gdmFsdWVUeXBlID09PSAnYmlnaW50JyB8fCB2YWx1ZVR5cGUgPT09ICdudW1iZXInO1xyXG4gIGNvbnN0IHRlcm1WYWx1ZSA9IGlzTnVtZXJpYyAmJiB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyBOdW1iZXIodGVybSkgOiB0ZXJtO1xyXG4gIFxyXG4gIC8vIEFwcGx5IG9wZXJhdG9yXHJcbiAgaWYgKGludGVybmFsT3BlcmF0b3JzW29wXSkge1xyXG4gICAgcnVsZVJlc3VsdC5wYXNzID0gaW50ZXJuYWxPcGVyYXRvcnNbb3BdKHsgdmFsdWU6IGZhY3RWYWx1ZSwgdGVybTogdGVybVZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQXBwbHkgY3VzdG9tIG9wZXJhdG9ycyAod2hpY2ggY2FuIG92ZXJyaWRlIGludGVybmFsIG9wZXJhdG9ycylcclxuICBpZiAob3BlcmF0b3JzW29wXSkge1xyXG4gICAgcnVsZVJlc3VsdC5wYXNzID0gb3BlcmF0b3JzW29wXSh7IHZhbHVlOiBmYWN0VmFsdWUsIHRlcm06IHRlcm1WYWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8vIFByb2Nlc3MgcmVzdWx0c1xyXG4gIHJldHVybiBwcm9jZXNzUmVzdWx0KHtcclxuICAgIC4uLnJ1bGVSZXN1bHQsXHJcbiAgICBydWxlLFxyXG4gICAgZmFjdHMsXHJcbiAgICBwbHVnaW5zXHJcbiAgfSBhcyBQcm9jZXNzQXJncyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgYSBydWxlIGdyb3VwIGFnYWluc3QgYSBzZXQgb2YgZmFjdHNcclxuICogXHJcbiAqIEBwYXJhbSBmYWN0cyBUaGUgZmFjdHMgdG8gZXZhbHVhdGUgYWdhaW5zdFxyXG4gKiBAcGFyYW0gcnVsZUdyb3VwIFRoZSBydWxlIGdyb3VwIHRvIHByb2Nlc3NcclxuICogQHBhcmFtIG9wdGlvbnMgUHJvY2Vzc2luZyBvcHRpb25zIChwbHVnaW5zLCBjdXN0b20gb3BlcmF0b3JzKVxyXG4gKiBAcmV0dXJucyBUaGUgcHJvY2Vzc2VkIHJlc3VsdFxyXG4gKiBcclxuICogQHRocm93cyBFcnJvciBpZiB0aGUgcnVsZSBncm91cCBpcyBpbnZhbGlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0dyb3VwKGZhY3RzOiBGYWN0cyA9IHt9LCBydWxlR3JvdXA6IFJ1bGVHcm91cCA9IHt9LCBvcHRpb25zOiBPcHRpb25zID0ge30pOiBQcm9jZXNzUmVzdWx0IHtcclxuICBjb25zdCB7IGFsbCwgYW55IH0gPSBydWxlR3JvdXA7XHJcbiAgY29uc3QgeyBwbHVnaW5zID0gW10gfSA9IG9wdGlvbnM7XHJcbiAgY29uc3QgYWN0aW9uID0gKHJ1bGU6IFJ1bGUgfCBSdWxlR3JvdXApID0+IHByb2Nlc3NSdWxlT3JHcm91cChmYWN0cywgcnVsZSwgb3B0aW9ucyk7XHJcblxyXG4gIGlmIChhbGwpIHtcclxuICAgIC8vIE9wdGltaXphdGlvbjogc2hvcnQtY2lyY3VpdCBvbiBmaXJzdCBmYWlsdXJlIGZvciAnYWxsJyBncm91cHNcclxuICAgIGNvbnN0IGdyb3VwUmVzdWx0ID0gW107XHJcbiAgICBsZXQgYWxsUGFzcyA9IHRydWU7XHJcbiAgICBcclxuICAgIGZvciAoY29uc3QgcnVsZSBvZiBhbGwpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYWN0aW9uKHJ1bGUpO1xyXG4gICAgICBncm91cFJlc3VsdC5wdXNoKHJlc3VsdCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXJlc3VsdC5wYXNzKSB7XHJcbiAgICAgICAgYWxsUGFzcyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChwbHVnaW5zLmxlbmd0aCA9PT0gMCkgYnJlYWs7IC8vIE9ubHkgc2hvcnQtY2lyY3VpdCBpZiBub3QgdXNpbmcgcGx1Z2luc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHsgXHJcbiAgICAgIHBhc3M6IGFsbFBhc3MsIFxyXG4gICAgICBydWxlOiBydWxlR3JvdXAsIFxyXG4gICAgICBmYWN0cywgXHJcbiAgICAgIHBsdWdpbnMsIFxyXG4gICAgICBncm91cDogeyBhbGw6IGdyb3VwUmVzdWx0LCBwYXNzOiBhbGxQYXNzIH0gXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChhbnkpIHtcclxuICAgIC8vIE9wdGltaXphdGlvbjogc2hvcnQtY2lyY3VpdCBvbiBmaXJzdCBzdWNjZXNzIGZvciAnYW55JyBncm91cHNcclxuICAgIGNvbnN0IGdyb3VwUmVzdWx0ID0gW107XHJcbiAgICBsZXQgYW55UGFzcyA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgYW55KSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGFjdGlvbihydWxlKTtcclxuICAgICAgZ3JvdXBSZXN1bHQucHVzaChyZXN1bHQpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdC5wYXNzKSB7XHJcbiAgICAgICAgYW55UGFzcyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHBsdWdpbnMubGVuZ3RoID09PSAwKSBicmVhazsgLy8gT25seSBzaG9ydC1jaXJjdWl0IGlmIG5vdCB1c2luZyBwbHVnaW5zXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQoeyBcclxuICAgICAgcGFzczogYW55UGFzcywgXHJcbiAgICAgIHJ1bGU6IHJ1bGVHcm91cCwgXHJcbiAgICAgIGZhY3RzLCBcclxuICAgICAgcGx1Z2lucywgXHJcbiAgICAgIGdyb3VwOiB7IGFueTogZ3JvdXBSZXN1bHQsIHBhc3M6IGFueVBhc3MgfSBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFJ1bGVHcm91cFxcbiR7SlNPTi5zdHJpbmdpZnkocnVsZUdyb3VwLCBudWxsLCAyKX1gKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcGx1Z2luIHRoYXQgYWRkcyB2ZXJib3NlIGluZm9ybWF0aW9uIHRvIHRoZSByZXN1bHRcclxuICogXHJcbiAqIEBwYXJhbSBhcmdzIFBsdWdpbiBhcmd1bWVudHNcclxuICogQHJldHVybnMgVGhlIHByb2Nlc3NlZCByZXN1bHQgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdmVyYm9zZVBsdWdpbiA9ICh7IHBhc3MsIHJ1bGUsIGdyb3VwIH06IFBsdWdpbkFyZ3MpID0+ICh7IHBhc3MsIHJ1bGUsIGdyb3VwIH0pO1xyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyBhIHJ1bGUgZ3JvdXAgd2l0aCB2ZXJib3NlIG91dHB1dFxyXG4gKiBcclxuICogQHBhcmFtIGZhY3RzIFRoZSBmYWN0cyB0byBldmFsdWF0ZSBhZ2FpbnN0XHJcbiAqIEBwYXJhbSBydWxlR3JvdXAgVGhlIHJ1bGUgZ3JvdXAgdG8gcHJvY2Vzc1xyXG4gKiBAcGFyYW0gcGx1Z2lucyBBZGRpdGlvbmFsIHBsdWdpbnMgdG8gdXNlXHJcbiAqIEByZXR1cm5zIFRoZSBwcm9jZXNzZWQgcmVzdWx0IHdpdGggdmVyYm9zZSBpbmZvcm1hdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NWZXJib3NlID0gKGZhY3RzOiBGYWN0cyA9IHt9LCBydWxlR3JvdXA6IFJ1bGVHcm91cCwgcGx1Z2luczogUmVzdWx0UGx1Z2luW10gPSBbXSkgPT4gKFxyXG4gIHByb2Nlc3NHcm91cChmYWN0cywgcnVsZUdyb3VwLCB7IHBsdWdpbnM6IFt2ZXJib3NlUGx1Z2luLCAuLi5wbHVnaW5zXSB9KVxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBhIHJ1bGUgZ3JvdXAgc3RydWN0dXJlIHdpdGhvdXQgcHJvY2Vzc2luZyBpdFxyXG4gKiBcclxuICogQHBhcmFtIHJ1bGVHcm91cCBUaGUgcnVsZSBncm91cCB0byB2YWxpZGF0ZVxyXG4gKiBAcmV0dXJucyBBbiBldmFsdWF0aW9uIHJlc3VsdCB3aXRoIGlzVmFsaWQgZmxhZyBhbmQgb3B0aW9uYWwgZXJyb3IgbWVzc2FnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUnVsZShydWxlR3JvdXAgPSB7fSBhcyBSdWxlR3JvdXApOiBSdWxlRXZhbHVhdGlvbiB7XHJcbiAgaWYgKCFydWxlR3JvdXApIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiAnTm8gUnVsZSBHcm91cCBGb3VuZCdcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHsgYWxsLCBhbnkgfSA9IHJ1bGVHcm91cDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVSdWxlU2V0ID0gKHJ1bGVzOiBSdWxlcykgPT4ge1xyXG4gICAgaWYgKCFydWxlcyB8fCAhQXJyYXkuaXNBcnJheShydWxlcykgfHwgcnVsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJ05vIFJ1bGUgR3JvdXAgRm91bmQnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvciAobGV0IHJ1bGVJbmRleCA9IDA7IHJ1bGVJbmRleCA8IHJ1bGVzLmxlbmd0aDsgcnVsZUluZGV4KyspIHtcclxuICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzW3J1bGVJbmRleF07XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBmb3IgbmVzdGVkIHJ1bGUgZ3JvdXBzXHJcbiAgICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocnVsZSkpIHtcclxuICAgICAgICBjb25zdCBydWxlR3JvdXAgPSBydWxlIGFzIFJ1bGVHcm91cDtcclxuICAgICAgICBpZiAocnVsZUdyb3VwPy5hbGwgfHwgcnVsZUdyb3VwPy5hbnkpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRlUnVsZShydWxlR3JvdXApO1xyXG4gICAgICAgICAgaWYgKCFyZXN1bHQuaXNWYWxpZCkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTXVzdCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IDIgZWxlbWVudHNcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJ1bGUpIHx8IHJ1bGUubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIFJ1bGUgRm9ybWF0J1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IFtmaWVsZCwgb3BdID0gcnVsZTtcclxuICAgICAgaWYgKCFmaWVsZCB8fCAhb3ApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBSdWxlOiBNaXNzaW5nIGZpZWxkIG9yIG9wZXJhdG9yJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEZhc3QgY2hlY2sgZm9yIHZhbGlkIG9wZXJhdG9ycyB1c2luZyBTZXRcclxuICAgICAgaWYgKCFvcGVyYXRvck1hcC5oYXMob3ApKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbWVzc2FnZTogYEludmFsaWQgT3BlcmF0b3I6ICR7b3B9YFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBpZiAoYWxsIHx8IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbGlkYXRlUnVsZVNldChhbGwgfHwgYW55KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6ICdObyBRdWFudGlmaWVycyAoYWxsfGFueSkgRm91bmQnXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsaWFzIGZvciBwcm9jZXNzR3JvdXBcclxuICogQHNlZSB7QGxpbmsgcHJvY2Vzc0dyb3VwfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NSdWxlcyA9IHByb2Nlc3NHcm91cDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBleHBvcnQgaXMgdGhlIHByb2Nlc3NSdWxlcyBmdW5jdGlvblxyXG4gKiBAc2VlIHtAbGluayBwcm9jZXNzR3JvdXB9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzUnVsZXM7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVzIGEgbWVtb2l6ZWQgdmVyc2lvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgY2FjaGVzIHJlc3VsdHMgYmFzZWQgb24gaW5wdXQgYXJndW1lbnRzXHJcbiAqIFxyXG4gKiBAcGFyYW0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1lbW9pemVcclxuICogQHJldHVybnMgQSBtZW1vaXplZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbW9pemU8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihmbjogVCk6IFQge1xyXG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xyXG4gIFxyXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShhcmdzKTtcclxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xyXG4gICAgY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSkgYXMgVDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9