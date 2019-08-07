"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createErrorElement = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _zarm = require("zarm");

var Error =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Error, _React$PureComponent);

  function Error() {
    (0, _classCallCheck2.default)(this, Error);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Error).apply(this, arguments));
  }

  (0, _createClass2.default)(Error, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_zarm.Message, {
        theme: this.props.theme
      }, _react.default.createElement(_zarm.Icon, {
        type: this.props.type
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

  if (_react.default.isValidElement(error)) {
    help = error;
  } else if (typeof error === 'string' && error !== '') {
    help = _react.default.createElement(Error, null, error);
  }

  return help;
};

exports.createErrorElement = createErrorElement;