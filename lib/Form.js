"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _asyncValidator = _interopRequireDefault(require("async-validator"));

var _util = require("./util");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Form = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      formRules = _useState4[0],
      setFormRules = _useState4[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      validator: new _asyncValidator.default(formRules),
      values: values
    };
  });
  var children = props.children,
      className = props.className,
      errors = props.errors;

  var items = _react.default.Children.map(children, function (element, index) {
    var _React$cloneElement;

    var elemetTypeName = element.type.displayName;

    if (elemetTypeName !== 'zarm-form-item') {
      return /*#__PURE__*/_react.default.cloneElement(element);
    }

    var _element$props = element.props,
        name = _element$props.name,
        label = _element$props.label,
        _element$props$rules = _element$props.rules,
        rules = _element$props$rules === void 0 ? [] : _element$props$rules;
    var error = element.props.error;
    error = error || (errors === null || errors === void 0 ? void 0 : errors[name]);
    var blurRule = rules === null || rules === void 0 ? void 0 : rules.items.filter(function (item) {
      return item.trigger === 'blur';
    });
    var changeRule = rules.items.filter(function (item) {
      return item.trigger === 'change';
    });

    if (formRules !== null && formRules !== void 0 && formRules[name]) {
      formRules[name] = formRules[name].concat(rules === null || rules === void 0 ? void 0 : rules.items);
    } else {
      formRules[name] = rules === null || rules === void 0 ? void 0 : rules.items;
    }

    return /*#__PURE__*/_react.default.cloneElement(element, (_React$cloneElement = {
      error: error,
      name: name,
      label: label
    }, (0, _defineProperty2.default)(_React$cloneElement, "error", error), (0, _defineProperty2.default)(_React$cloneElement, "changelistener", function changelistener(value) {
      setValues(_objectSpread(_objectSpread({}, values), {}, (0, _defineProperty2.default)({}, name, value)));

      if (changeRule.length > 0) {
        rules.callback(changeRule, name, value);
      }
    }), (0, _defineProperty2.default)(_React$cloneElement, "blurlistener", function blurlistener(value) {
      if (blurRule.length > 0) {
        rules.callback(blurRule, name, value);
      }
    }), _React$cloneElement));
  });

  var cls = (0, _classnames.default)('zarm-form', className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls
  }, items);
});

var _default = Form;
exports.default = _default;