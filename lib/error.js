"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createErrorElement = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _zarm = require("zarm");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Error = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Error, _React$PureComponent);

  var _super = _createSuper(Error);

  function Error() {
    (0, _classCallCheck2.default)(this, Error);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Error, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_zarm.Message, {
        theme: this.props.theme
      }, /*#__PURE__*/_react.default.createElement(_zarm.Icon, {
        type: this.props.type,
        size: "sm"
      }), this.props.children);
    }
  }]);
  return Error;
}(_react.default.PureComponent);

exports.default = Error;
(0, _defineProperty2.default)(Error, "defaultProps", {
  theme: 'danger',
  type: 'wrong-round'
});

var createErrorElement = function createErrorElement(error) {
  var help = '';

  if ( /*#__PURE__*/_react.default.isValidElement(error)) {
    help = error;
  } else if (typeof error === 'string' && error !== '') {
    help = /*#__PURE__*/_react.default.createElement(Error, null, error);
  }

  return help;
};

exports.createErrorElement = createErrorElement;