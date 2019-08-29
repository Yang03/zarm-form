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

var RadioGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(RadioGroup, _React$PureComponent);

  function RadioGroup() {
    (0, _classCallCheck2.default)(this, RadioGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadioGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          label = _this$props.label,
          children = _this$props.children,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["error", "label", "children"]);

      var items = _react.default.Children.map(children, function (element) {
        return _react.default.createElement(_zarm.Radio, element.props);
      });

      return _react.default.createElement(_zarm.Cell, {
        title: label,
        help: (0, _Error.createErrorElement)(error)
      }, _react.default.createElement(_zarm.Radio.Group, others, items));
    }
  }]);
  return RadioGroup;
}(_react.default.PureComponent);

RadioGroup.displayName = 'RadioGroup';
var _default = RadioGroup;
exports.default = _default;