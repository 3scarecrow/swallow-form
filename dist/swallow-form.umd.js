(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("element-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["element-ui"], factory);
	else if(typeof exports === 'object')
		exports["swallow-form"] = factory(require("element-ui"));
	else
		root["swallow-form"] = factory(root["ELEMENT"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__5f72__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "04f7":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),

/***/ "139f":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ "169d":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.reduce");

/***/ }),

/***/ "18d2":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ "1ce0":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),

/***/ "2175":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ "2691":
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/theme-chalk/index.css");

/***/ }),

/***/ "46bb":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),

/***/ "46fa":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split");

/***/ }),

/***/ "4a38":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ "51f7":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),

/***/ "5a5e":
/***/ (function(module, exports) {

module.exports = require("@vue/babel-helper-vue-jsx-merge-props");

/***/ }),

/***/ "5f72":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5f72__;

/***/ }),

/***/ "5fef":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),

/***/ "6049":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ "6579":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),

/***/ "6b07":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),

/***/ "850c":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "907b":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),

/***/ "9861":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.map");

/***/ }),

/***/ "9bb0":
/***/ (function(module, exports) {

module.exports = require("@soda/get-current-script");

/***/ }),

/***/ "ab7e":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes");

/***/ }),

/***/ "bcd8":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ "bcda":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),

/***/ "dc05":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.last-index-of");

/***/ }),

/***/ "f705":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SwallowForm", function() { return /* reexport */ swallow_form; });
__webpack_require__.d(__webpack_exports__, "register", function() { return /* reexport */ register; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("9bb0")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__("bcd8");

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external {"root":"ELEMENT","commonjs":"element-ui","commonjs2":"element-ui","amd":"element-ui"}
var external_root_ELEMENT_commonjs_element_ui_commonjs2_element_ui_amd_element_ui_ = __webpack_require__("5f72");
var external_root_ELEMENT_commonjs_element_ui_commonjs2_element_ui_amd_element_ui_default = /*#__PURE__*/__webpack_require__.n(external_root_ELEMENT_commonjs_element_ui_commonjs2_element_ui_amd_element_ui_);

// EXTERNAL MODULE: external "element-ui/lib/theme-chalk/index.css"
var index_css_ = __webpack_require__("2691");

// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__("f705");

// EXTERNAL MODULE: external "@vue/babel-helper-vue-jsx-merge-props"
var babel_helper_vue_jsx_merge_props_ = __webpack_require__("5a5e");
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props_);

// EXTERNAL MODULE: external "core-js/modules/es.symbol"
var es_symbol_ = __webpack_require__("6049");

// EXTERNAL MODULE: external "core-js/modules/es.array.filter"
var es_array_filter_ = __webpack_require__("4a38");

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__("139f");

// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptor"
var es_object_get_own_property_descriptor_ = __webpack_require__("6b07");

// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptors"
var es_object_get_own_property_descriptors_ = __webpack_require__("46bb");

// EXTERNAL MODULE: external "core-js/modules/es.object.keys"
var es_object_keys_ = __webpack_require__("2175");

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__("bcda");

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/defineProperty"
var defineProperty_ = __webpack_require__("04f7");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: external "core-js/modules/es.array.slice"
var es_array_slice_ = __webpack_require__("6579");

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__("850c");

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string"
var es_regexp_to_string_ = __webpack_require__("5fef");

// CONCATENATED MODULE: ./src/utils/types.js





var _toString = function _toString(val) {
  return Object.prototype.toString.call(val);
};

var isType = function isType(val, type) {
  return _toString(val).slice(8, -1) === type;
};

function isDef(val) {
  return val !== undefined && val !== null;
}
function isUndef(val) {
  return val === undefined || val === null;
}
function isString(val) {
  return isType(val, 'String');
}
function isPlainObject(val) {
  return isType(val, 'Object');
}
function isFunction(val) {
  return isType(val, 'Function');
}
function isArray(val) {
  return isType(val, 'Array');
}
function isNumber(val) {
  return isType(val, 'Number');
}
function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
function isVNode(node) {
  var vm = new external_vue_default.a();
  var emptyVNode = vm.$createElement();
  return node instanceof emptyVNode.constructor;
}
// EXTERNAL MODULE: external "core-js/modules/es.map"
var es_map_ = __webpack_require__("9861");

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator"
var es_string_iterator_ = __webpack_require__("907b");

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator"
var web_dom_collections_iterator_ = __webpack_require__("1ce0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__("18d2");

// EXTERNAL MODULE: external "core-js/modules/es.array.includes"
var es_array_includes_ = __webpack_require__("ab7e");

// EXTERNAL MODULE: external "core-js/modules/es.array.last-index-of"
var es_array_last_index_of_ = __webpack_require__("dc05");

// EXTERNAL MODULE: external "core-js/modules/es.string.includes"
var es_string_includes_ = __webpack_require__("fd48");

// EXTERNAL MODULE: external "core-js/modules/es.array.reduce"
var es_array_reduce_ = __webpack_require__("169d");

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__("51f7");

// EXTERNAL MODULE: external "core-js/modules/es.string.split"
var es_string_split_ = __webpack_require__("46fa");

// CONCATENATED MODULE: ./src/utils/helpers.js









function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function ensureArray(val) {
  return isArray(val) ? val : [val];
}
function ensureFunction(val, args) {
  return isFunction(val) ? val : isString(val) && args ? new Function(args, val) : function () {
    return val;
  };
}
function ensurePromise(val) {
  return isPromise(val) ? val : Promise.resolve(val);
}
function pick(object, keys) {
  return keys.reduce(function (prev, key) {
    object && hasOwn(object, key) && (prev[key] = object[key]);
    return prev;
  }, {});
}
function omit(object, keys) {
  return Object.keys(object).filter(function (key) {
    return !keys.includes(key);
  }).reduce(function (prev, key) {
    object && hasOwn(object, key) && (prev[key] = object[key]);
    return prev;
  }, {});
}
function helpers_get(obj, path) {
  var segs = path.split('.');

  if (hasOwn(obj, path)) {
    return obj[path];
  }

  var len = segs.length;
  var idx = 0;

  do {
    var prop = segs[idx];

    if (prop in obj) {
      obj = obj[prop];
    } else {
      break;
    }
  } while (++idx < len);

  return obj;
}
function normalizeAttrs(data) {
  if (!isPlainObject(data)) return data;
  var props = data.props;
  if (isUndef(props)) return data;
  var style = props.style,
      className = props.class;
  return Object.assign(data, {
    style: style,
    class: className
  });
}
// CONCATENATED MODULE: ./src/utils/debug.js

var error = function error(name, msg) {
  // eslint-disable-next-line no-console
  console.error("%c ".concat(name, " error %c ").concat(msg), 'background:#e30;padding:1px;border-radius:3px;color:#fff', 'background:transparent');
};
// CONCATENATED MODULE: ./src/mixins/field-mixin.js








/* harmony default export */ var field_mixin = ({
  props: {
    field: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    fieldModel: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    value: {
      set: function set(val) {
        var fieldModel = this.fieldModel;
        var _this$field = this.field,
            type = _this$field.type,
            prop = _this$field.prop;

        if (isUndef(prop)) {
          return error('swallow-form', "el-".concat(type, " \u7EC4\u4EF6\u66F4\u65B0\u503C\u7F3A\u5C11 fieldKey \u6216 prop \u5C5E\u6027"));
        }

        if (!prop.includes('.')) {
          this.setValue(fieldModel, prop, val);
        } else {
          var index = prop.lastIndexOf('.');
          var prefixKey = prop.slice(0, index);

          var assignObject = helpers_get(fieldModel, prefixKey);

          if (isUndef(assignObject)) {
            return error('swallow-form', "el-".concat(type, " \u7EC4\u4EF6\u66F4\u65B0\u6DF1\u5EA6\u5C5E\u6027 ").concat(prop, " \u7684\u503C\uFF0C\u5C5E\u6027\u5BF9\u8C61\u4E0D\u5B58\u5728"));
          }

          this.setValue(assignObject, prop.slice(index + 1), val);
        }
      },
      get: function get() {
        var fieldModel = this.fieldModel;
        var _this$field2 = this.field,
            type = _this$field2.type,
            prop = _this$field2.prop;
        if (isUndef(prop)) return;

        if (!prop.includes('.')) {
          return fieldModel[prop];
        } else {
          var index = prop.lastIndexOf('.');
          var prefixKey = prop.slice(0, index);

          var assignObject = helpers_get(fieldModel, prefixKey);

          if (isUndef(assignObject)) {
            return error('swallow-form', "el-".concat(type, " \u7EC4\u4EF6\u83B7\u53D6\u6DF1\u5EA6\u5C5E\u6027 ").concat(prop, " \u7684\u503C\uFF0C\u5C5E\u6027\u5BF9\u8C61\u4E0D\u5B58\u5728"));
          }

          return assignObject[prop.slice(index + 1)];
        }
      }
    },
    VNodeData: function VNodeData() {
      var fieldModel = this.fieldModel,
          privateProps = this.privateProps;
      var _this$field3 = this.field,
          disabled = _this$field3.disabled,
          prop = _this$field3.prop,
          props = _this$field3.props,
          on = _this$field3.on,
          style = _this$field3.style,
          className = _this$field3.class;

      if (isDef(disabled)) {
        var args = {
          model: fieldModel,
          prop: prop
        };
        props.disabled = ensureFunction(disabled)(args);
      }

      var mergedProps = Object.assign({}, privateProps, props);
      var mergedEvents = Object.assign({}, on);
      var defaultStyle = {
        width: '100%'
      };
      return {
        style: Object.assign(defaultStyle, style),
        class: className,
        props: mergedProps,
        on: mergedEvents
      };
    }
  },
  methods: {
    setValue: function setValue(obj, key, value) {
      isUndef(obj[key]) ? this.$set(obj, key, value) : obj[key] = value;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/input.vue?vue&type=script&lang=js&


/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'FieldInput',
  mixins: [field_mixin],
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("el-input", babel_helper_vue_jsx_merge_props_default()([{}, this.VNodeData, {
      "model": {
        value: _this.value,
        callback: function callback($$v) {
          _this.value = $$v;
        }
      }
    }]));
  }
});
// CONCATENATED MODULE: ./src/components/fields/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/fields/input.vue
var input_render, staticRenderFns




/* normalize component */

var input_component = normalizeComponent(
  fields_inputvue_type_script_lang_js_,
  input_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./src/mixins/option-mixin.js



/* harmony default export */ var option_mixin = ({
  data: function data() {
    return {
      internalOptions: []
    };
  },
  watch: {
    'field.options': {
      immediate: true,
      handler: function handler() {
        var _this = this;

        var setOptions = function setOptions(options) {
          if (isArray(options)) {
            _this.internalOptions = options;
          }
        };

        var options = this.field.options;
        var optionsPromise = this.resolveOptions(options, setOptions);

        if (optionsPromise) {
          this.loading = true;
          optionsPromise.then(setOptions).finally(function () {
            _this.loading = false;
          });
        }
      }
    }
  },
  methods: {
    resolveOptions: function resolveOptions(options, done) {
      var optionsPromise = null;

      if (options) {
        if (isArray(options)) {
          optionsPromise = Promise.resolve(options);
        } else if (isFunction(options)) {
          optionsPromise = ensurePromise(options(done));
        } else if (isPromise(options)) {
          optionsPromise = options;
        }
      }

      return optionsPromise;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/select.vue?vue&type=script&lang=js&





/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: 'FieldSelect',
  mixins: [field_mixin, option_mixin],
  data: function data() {
    return {
      loading: false,
      privateProps: {
        filterable: true,
        style: {
          width: '100%'
        }
      }
    };
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("el-select", babel_helper_vue_jsx_merge_props_default()([{
      "attrs": {
        "loading": this.loading
      }
    }, this.VNodeData, {
      "model": {
        value: _this.value,
        callback: function callback($$v) {
          _this.value = $$v;
        }
      }
    }]), [this.internalOptions.map(function (option) {
      return h("el-option", {
        "props": _objectSpread2({}, option)
      });
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/fields/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/select.vue
var select_render, select_staticRenderFns




/* normalize component */

var select_component = normalizeComponent(
  fields_selectvue_type_script_lang_js_,
  select_render,
  select_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fields_select = (select_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/number.vue?vue&type=script&lang=js&


/* harmony default export */ var numbervue_type_script_lang_js_ = ({
  name: 'FieldNumber',
  mixins: [field_mixin],
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("el-input-number", babel_helper_vue_jsx_merge_props_default()([{}, this.VNodeData, {
      "model": {
        value: _this.value,
        callback: function callback($$v) {
          _this.value = $$v;
        }
      }
    }]));
  }
});
// CONCATENATED MODULE: ./src/components/fields/number.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_numbervue_type_script_lang_js_ = (numbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/number.vue
var number_render, number_staticRenderFns




/* normalize component */

var number_component = normalizeComponent(
  fields_numbervue_type_script_lang_js_,
  number_render,
  number_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var number = (number_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/date.vue?vue&type=script&lang=js&


/* harmony default export */ var datevue_type_script_lang_js_ = ({
  name: 'FieldInput',
  mixins: [field_mixin],
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("el-date-picker", babel_helper_vue_jsx_merge_props_default()([{}, this.VNodeData, {
      "model": {
        value: _this.value,
        callback: function callback($$v) {
          _this.value = $$v;
        }
      }
    }]));
  }
});
// CONCATENATED MODULE: ./src/components/fields/date.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_datevue_type_script_lang_js_ = (datevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/date.vue
var date_render, date_staticRenderFns




/* normalize component */

var date_component = normalizeComponent(
  fields_datevue_type_script_lang_js_,
  date_render,
  date_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var date = (date_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/text.vue?vue&type=script&lang=js&

/* harmony default export */ var textvue_type_script_lang_js_ = ({
  name: 'FieldText',
  mixins: [field_mixin],
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": "swallow-form__field__text"
    }, [this.value]);
  }
});
// CONCATENATED MODULE: ./src/components/fields/text.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_textvue_type_script_lang_js_ = (textvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/text.vue
var text_render, text_staticRenderFns




/* normalize component */

var text_component = normalizeComponent(
  fields_textvue_type_script_lang_js_,
  text_render,
  text_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fields_text = (text_component.exports);
// CONCATENATED MODULE: ./src/mixins/static-field-mixin.js

/* harmony default export */ var static_field_mixin = ({
  props: {
    field: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    renderFields: {
      type: Function
    }
  },
  computed: {
    VNodeData: function VNodeData() {
      return pick(this.field, ['props', 'style', 'class']);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/row.vue?vue&type=script&lang=js&


/* harmony default export */ var rowvue_type_script_lang_js_ = ({
  name: 'FieldRow',
  mixins: [static_field_mixin],
  render: function render() {
    var h = arguments[0];
    return h("el-row", babel_helper_vue_jsx_merge_props_default()([{}, this.VNodeData]), [this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./src/components/fields/row.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_rowvue_type_script_lang_js_ = (rowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/row.vue
var row_render, row_staticRenderFns




/* normalize component */

var row_component = normalizeComponent(
  fields_rowvue_type_script_lang_js_,
  row_render,
  row_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var row = (row_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/col.vue?vue&type=script&lang=js&


/* harmony default export */ var colvue_type_script_lang_js_ = ({
  name: 'FieldCol',
  mixins: [static_field_mixin],
  render: function render() {
    var h = arguments[0];
    return h("el-col", babel_helper_vue_jsx_merge_props_default()([{}, this.VNodeData]), [this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./src/components/fields/col.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_colvue_type_script_lang_js_ = (colvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/col.vue
var col_render, col_staticRenderFns




/* normalize component */

var col_component = normalizeComponent(
  fields_colvue_type_script_lang_js_,
  col_render,
  col_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var col = (col_component.exports);
// CONCATENATED MODULE: ./src/components/fields/index.js
















var fields_Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);

    _defineProperty(this, "componentMap", new Map());

    this.componentMap.set('input', input);
    this.componentMap.set('select', fields_select);
    this.componentMap.set('number', number);
    this.componentMap.set('date', date);
    this.componentMap.set('text', fields_text);
    this.componentMap.set('row', row);
    this.componentMap.set('col', col);
  }

  _createClass(Store, [{
    key: "add",
    value: function add(name, component) {
      if (this.componentMap.has(name)) {
        return error("".concat(name, " \u7EC4\u4EF6\u540D\u79F0\u5DF2\u88AB\u6CE8\u518C\uFF0C\u8BF7\u6CE8\u518C\u65B0\u7684\u7EC4\u4EF6\u540D\u79F0"));
      }

      this.componentMap.set(name, component);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.componentMap.has(name);
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.componentMap.get(name);
    }
  }]);

  return Store;
}();

var ComponentStore = new fields_Store();
var register = function register() {
  return ComponentStore.add.apply(ComponentStore, arguments);
};
var has = function has() {
  return ComponentStore.has.apply(ComponentStore, arguments);
};
var fields_get = function get() {
  return ComponentStore.get.apply(ComponentStore, arguments);
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/swallow-form.vue?vue&type=script&lang=js&






/* harmony default export */ var swallow_formvue_type_script_lang_js_ = ({
  name: 'SwallowForm',
  inheritAttrs: false,
  props: {
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      internalFields: []
    };
  },
  computed: {
    mergedAttrs: function mergedAttrs() {
      return Object.assign({
        size: 'small'
      }, this.$attrs);
    }
  },
  watch: {
    fields: {
      handler: function handler(val) {
        this.internalFields = val;
      },
      immediate: true
    }
  },
  methods: {
    validate: function validate() {
      var _this$$refs$elForm;

      return (_this$$refs$elForm = this.$refs.elForm).validate.apply(_this$$refs$elForm, arguments);
    },
    validateField: function validateField() {
      var _this$$refs$elForm2;

      return (_this$$refs$elForm2 = this.$refs.elForm).validateField.apply(_this$$refs$elForm2, arguments);
    },
    resetFields: function resetFields() {
      var _this$$refs$elForm3;

      return (_this$$refs$elForm3 = this.$refs.elForm).resetFields.apply(_this$$refs$elForm3, arguments);
    },
    clearValidate: function clearValidate() {
      var _this$$refs$elForm4;

      return (_this$$refs$elForm4 = this.$refs.elForm).clearValidate.apply(_this$$refs$elForm4, arguments);
    },
    // field 为数组类型时，格式化为 row 组件配置
    normalizeField: function normalizeField(field) {
      return isArray(field) ? {
        type: 'row',
        children: field
      } : field;
    },
    renderFields: function renderFields() {
      var _this = this;

      return this.fields.map(function (field) {
        return _this.renderField(field);
      });
    },
    renderField: function renderField(_field) {
      var model = this.$attrs.model;
      var renderArgs = {
        model: model,
        renderField: this.renderField
      };
      var field = this.normalizeField(_field);
      if (isFunction(field)) return field(renderArgs);
      var visible = field.visible,
          prop = field.prop;
      var args = {
        model: model,
        prop: prop
      };
      if (ensureFunction(visible)(args) === false) return null;
      var Children = this.renderChildren(field);
      var Item = this.renderFormItem(field, Children);
      var Layout = this.renderLayout(field, Item);
      return Layout;
    },
    renderChildren: function renderChildren(field) {
      var h = this.$createElement;
      var model = this.$attrs.model;
      var renderField = this.renderField;
      var render = field.render,
          type = field.type,
          children = field.children,
          _field$slots = field.slots,
          slots = _field$slots === void 0 ? {} : _field$slots; // render 优先级高于 slots 和 children 配置

      if (isFunction(render)) {
        return render({
          model: model,
          renderField: renderField
        });
      }

      var Content, Children; // slots 的 default 插槽默认优先级高于 children

      if (slots.default) {
        Children = slots.default();
      } else if (isArray(children)) {
        Children = children.map(function (child) {
          return renderField(child);
        });
      }

      if (has(type)) {
        var PresetComponent = fields_get(type);
        Content = h(PresetComponent, {
          "attrs": {
            "field": field,
            "field-model": model
          }
        }, [Children]);
      }

      return Content || Children;
    },
    renderFormItem: function renderFormItem(field, children) {
      var h = this.$createElement;
      var item = field.item;
      var props = isString(item) ? {
        label: item
      } : item;
      return item ? h("el-form-item", {
        "props": _objectSpread2({}, props)
      }, [children]) : children;
    },
    renderLayout: function renderLayout(field, children) {
      var h = this.$createElement;
      var layout = field.layout;
      var props = isNumber(layout) ? {
        span: layout
      } : layout;
      return layout ? h("el-col", {
        "props": _objectSpread2({}, props)
      }, [children]) : children;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("el-form", babel_helper_vue_jsx_merge_props_default()([{
      "ref": "elForm"
    }, normalizeAttrs({
      props: this.mergedAttrs
    })]), [this.renderFields()]);
  }
});
// CONCATENATED MODULE: ./src/components/swallow-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_swallow_formvue_type_script_lang_js_ = (swallow_formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/swallow-form.vue
var swallow_form_render, swallow_form_staticRenderFns




/* normalize component */

var swallow_form_component = normalizeComponent(
  components_swallow_formvue_type_script_lang_js_,
  swallow_form_render,
  swallow_form_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swallow_form = (swallow_form_component.exports);
// CONCATENATED MODULE: ./src/index.js






external_vue_default.a.use(external_root_ELEMENT_commonjs_element_ui_commonjs2_element_ui_amd_element_ui_default.a);

function bindInstall(name, component) {
  var install = function install(vue) {
    return vue.component(name, component);
  };

  component.install = install;
  window && window.Vue && install(window.Vue);
  return component;
}

/* harmony default export */ var src_0 = (bindInstall(swallow_form.name, swallow_form));

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fd48":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes");

/***/ })

/******/ });
});