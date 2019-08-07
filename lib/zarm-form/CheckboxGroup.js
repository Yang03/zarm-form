"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _zarm = require("zarm");

var _Error = require("./Error");

var CheckboxGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(CheckboxGroup, _React$PureComponent);

  function CheckboxGroup() {
    (0, _classCallCheck2.default)(this, CheckboxGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CheckboxGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(CheckboxGroup, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      var items = _react.default.Children.map(children, function (element) {
        return _react.default.createElement(_zarm.Checkbox, element.props);
      });

      var error = this.props.error;
      return _react.default.createElement(_zarm.Cell, {
        title: this.props.label,
        help: (0, _Error.createErrorElement)(error)
      }, _react.default.createElement(_zarm.Checkbox.Group, this.props, items));
    }
  }]);
  return CheckboxGroup;
}(_react.default.PureComponent);

exports.default = CheckboxGroup;