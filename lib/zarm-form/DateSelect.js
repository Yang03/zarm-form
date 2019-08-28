"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _zarm = require("zarm");

var _Error = require("./Error");

var DateSelect =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(DateSelect, _React$PureComponent);

  function DateSelect() {
    (0, _classCallCheck2.default)(this, DateSelect);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DateSelect).apply(this, arguments));
  }

  (0, _createClass2.default)(DateSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          label = _this$props.label,
          hasArrow = _this$props.hasArrow,
          ohters = (0, _objectWithoutProperties2.default)(_this$props, ["error", "label", "hasArrow"]);
      return _react.default.createElement(_zarm.Cell, {
        title: label,
        help: (0, _Error.createErrorElement)(error),
        hasArrow: hasArrow
      }, _react.default.createElement(_zarm.DateSelect, ohters));
    }
  }]);
  return DateSelect;
}(_react.default.PureComponent);

DateSelect.displayName = 'DateSelect';
var _default = DateSelect;
exports.default = _default;