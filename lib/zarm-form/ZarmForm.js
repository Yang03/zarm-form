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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _asyncValidator = _interopRequireDefault(require("async-validator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FORM_ITEM = ['Input', 'Checkbox', 'FilePicker', 'Select', 'DateSelect', 'CheckboxGroup'];

var NOOP = function NOOP() {};

var ZarmForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ZarmForm, _Component);

  function ZarmForm(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ZarmForm);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ZarmForm).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "changeValdiate", function (key, value) {
      var _this$props = _this.props,
          values = _this$props.values,
          _this$props$rules = _this$props.rules,
          rules = _this$props$rules === void 0 ? [] : _this$props$rules;
      values[key] = value;
      var rule = rules[key] || [];
      var changeRule = rule.filter(function (item) {
        return item.trigger === 'change';
      });

      if (changeRule.length > 0) {
        var validator = new _asyncValidator.default((0, _defineProperty2.default)({}, key, changeRule));
        validator.validate((0, _defineProperty2.default)({}, key, value)).then(function () {
          _this.removeError(key);
        }, function (err) {
          _this.addError(err, key);
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCancel", function (key, value) {
      _this.changeValdiate(key, value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (key, value) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          values = _this$props2.values;

      _this.changeValdiate(key, value);

      values[key] = value;

      if (typeof onChange === 'function') {
        onChange(values);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addError", function (err, key) {
      var errors = _this.error.errors.concat(err.errors.filter(function (item) {
        return item.field === key;
      }));

      _this.error = _objectSpread({}, _this.error, {
        fields: _objectSpread({}, _this.error.fields, (0, _defineProperty2.default)({}, key, err.fields[key])),
        errors: errors
      });

      _this.onError(_this.error);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeError", function (key) {
      var fields = _this.error.fields;
      delete fields[key];
      _this.error = _objectSpread({}, _this.error, {
        fields: fields,
        errors: _this.error.errors.filter(function (item) {
          return item.field !== key;
        })
      });

      _this.onError(_this.error);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onError", function (error) {
      var onError = _this.props.onError;

      if (typeof onError === 'function') {
        onError(error);
      }
    });
    _this.error = {
      errors: [],
      fields: {}
    };
    return _this;
  }

  (0, _createClass2.default)(ZarmForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          _this$props3$rules = _this$props3.rules,
          rules = _this$props3$rules === void 0 ? [] : _this$props3$rules;

      var inputItems = _react.default.Children.map(children, function (element, index) {
        var elemetTypeName = element.type.displayName;

        if (!FORM_ITEM.includes(elemetTypeName)) {
          return (0, _react.cloneElement)(element, {
            key: index
          });
        }

        if (elemetTypeName === 'Input') {
          var name = element.props.name;
          var rule = rules[name] || [];
          var blurRule = rule.filter(function (item) {
            return item.trigger === 'blur';
          });
          return (0, _react.cloneElement)(element, {
            key: index,
            onChange: function onChange(value) {
              return _this2.onChange(name, value);
            },
            onBlur: function onBlur(value) {
              if (blurRule.length > 0) {
                var validator = new _asyncValidator.default((0, _defineProperty2.default)({}, name, blurRule));
                validator.validate((0, _defineProperty2.default)({}, name, value)).then(function () {
                  _this2.removeError(name);
                }, function (err) {
                  _this2.addError(err, name);
                });
              }
            }
          });
        }

        if (elemetTypeName === 'Select' || elemetTypeName === 'DateSelect') {
          return (0, _react.cloneElement)(element, {
            key: index,
            onOk: function onOk(value) {
              return _this2.onChange(element.props.name, value);
            },
            onCancel: function onCancel(value) {
              return _this2.onCancel(element.props.name, value);
            }
          });
        }

        return (0, _react.cloneElement)(element, {
          key: index,
          onChange: function onChange(value) {
            return _this2.onChange(element.props.name, value);
          }
        });
      });

      return _react.default.createElement("div", {
        className: "zarm__form"
      }, inputItems);
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this3 = this;

      var _this$props4 = this.props,
          values = _this$props4.values,
          rules = _this$props4.rules;
      var validator = new _asyncValidator.default(rules);
      return new Promise(function (resolve, reject) {
        validator.validate(values).then(function () {
          return resolve(values);
        }, function (err) {
          _this3.error = err;
          return reject(err);
        });
      });
    }
  }]);
  return ZarmForm;
}(_react.Component);

exports.default = ZarmForm;