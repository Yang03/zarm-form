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

var Checkbox =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Checkbox, _React$PureComponent);

  function Checkbox() {
    (0, _classCallCheck2.default)(this, Checkbox);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
  }

  (0, _createClass2.default)(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["label"]);
      return _react.default.createElement(_zarm.Cell, {
        title: label
      }, _react.default.createElement(_zarm.Checkbox, others), this.props.message ? this.props.message : '');
    }
  }]);
  return Checkbox;
}(_react.default.PureComponent);

exports.default = Checkbox;