"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _zarm = require("zarm");

var _error = require("./error");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(FormItem, _React$Component);

  var _super = _createSuper(FormItem);

  function FormItem() {
    (0, _classCallCheck2.default)(this, FormItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FormItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          label = _this$props.label,
          changelistener = _this$props.changelistener,
          blurlistener = _this$props.blurlistener,
          className = _this$props.className,
          error = _this$props.error,
          hasArrow = _this$props.hasArrow;
      var _children$props = children.props,
          onChange = _children$props.onChange,
          onBlur = _children$props.onBlur,
          onOk = _children$props.onOk,
          others = (0, _objectWithoutProperties2.default)(_children$props, ["onChange", "onBlur", "onOk"]);
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
      return /*#__PURE__*/_react.default.createElement(_zarm.Cell, {
        title: label,
        className: cls,
        help: (0, _error.createErrorElement)(error),
        hasArrow: hasArrow
      }, child);
    }
  }]);
  return FormItem;
}(_react.default.Component);

FormItem.displayName = 'zarm-form-item';
var _default = FormItem;
exports.default = _default;