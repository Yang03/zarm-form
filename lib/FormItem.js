"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _zarm = require("zarm");

var _excluded = ["onChange", "onBlur", "onOk"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FormItem(props) {
  var children = props.children,
      label = props.label,
      changelistener = props.changelistener,
      blurlistener = props.blurlistener,
      className = props.className,
      error = props.error,
      hasArrow = props.hasArrow,
      showError = props.showError;
  var _children$props = children.props,
      onChange = _children$props.onChange,
      onBlur = _children$props.onBlur,
      onOk = _children$props.onOk,
      others = (0, _objectWithoutProperties2.default)(_children$props, _excluded);
  var change = typeof onOk === 'function' ? 'onOk' : 'onChange';
  var events = (0, _defineProperty2.default)({}, change, function (value) {
    if (typeof onChange === 'function') {
      onChange(value);
    }

    if (typeof onOk === 'function') {
      onOk(value);
    }

    changelistener(value);
  });

  if (change === 'onChange') {
    events.onBlur = function (value) {
      if (typeof onChange === 'function') {
        onBlur(value);
      }

      blurlistener(value);
    };
  }

  var child = /*#__PURE__*/_react.default.cloneElement(children, _objectSpread(_objectSpread({}, others), events));

  var cls = (0, _classnames.default)('zarm-form__item', className);
  var help = '';

  if (error) {
    if ( /*#__PURE__*/_react.default.isValidElement(error)) {
      help = error;
    } else if (typeof error === 'string') {
      help = /*#__PURE__*/_react.default.createElement(_zarm.Message, {
        theme: "danger"
      }, /*#__PURE__*/_react.default.createElement(_zarm.Icon, {
        type: "wrong-round",
        size: "sm"
      }), /*#__PURE__*/_react.default.createElement("div", null, error));
    }
  }

  return /*#__PURE__*/_react.default.createElement(_zarm.Cell, {
    title: label,
    className: cls,
    hasArrow: hasArrow,
    help: showError ? help : ''
  }, child);
}

FormItem.displayName = 'zarm-form-item';
var _default = FormItem;
exports.default = _default;