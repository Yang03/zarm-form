"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _asyncValidator = _interopRequireDefault(require("async-validator"));

var ZarmForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ZarmForm, _Component);

  function ZarmForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ZarmForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ZarmForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (key, value) {
      console.log(value);
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          values = _this$props.values;
      values[key] = value;
      onChange(values);
    });
    return _this;
  }

  (0, _createClass2.default)(ZarmForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var inputItems = _react.default.Children.map(children, function (element, index) {
        if (element.type.name === 'Select') {
          return (0, _react.cloneElement)(element, {
            key: index,
            onOk: function onOk(value) {
              return _this2.onChange(element.props.name, value);
            }
          });
        } else {
          return (0, _react.cloneElement)(element, {
            key: index,
            onChange: function onChange(value) {
              return _this2.onChange(element.props.name, value);
            }
          });
        }
      });

      return _react.default.createElement("div", {
        className: "zarm__form"
      }, inputItems);
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this3 = this;

      var _this$props2 = this.props,
          values = _this$props2.values,
          rules = _this$props2.rules;
      this.validator = new _asyncValidator.default(rules);
      return new Promise(function (resolve, reject) {
        _this3.validator.validate(values).then(function () {
          resolve(values);
        }).catch(function (_ref) {
          var errors = _ref.errors,
              fields = _ref.fields;
          reject({
            errors: errors,
            fields: fields
          });
        });
      });
    }
  }]);
  return ZarmForm;
}(_react.Component);

exports.default = ZarmForm;