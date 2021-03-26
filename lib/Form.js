"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _asyncValidator = _interopRequireDefault(require("async-validator"));

var _util = require("./util");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Form = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    (0, _classCallCheck2.default)(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "formRules", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "values", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "error", {
      errors: [],
      fields: {}
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addError", function (err, key) {
      var errors = _this.error.errors.concat(err.errors.filter(function (item) {
        return item.field === key;
      }));

      _this.error = _objectSpread(_objectSpread({}, _this.error), {}, {
        fields: _objectSpread(_objectSpread({}, _this.error.fields), {}, (0, _defineProperty2.default)({}, key, err.fields[key])),
        errors: errors
      });

      _this.onError(_this.error);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeError", function (key) {
      var fields = _this.error.fields;
      delete fields[key];
      _this.error = _objectSpread(_objectSpread({}, _this.error), {}, {
        fields: fields,
        errors: _this.error.errors.filter(function (item) {
          return item.field !== key;
        })
      });

      _this.onError(_this.error);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onError", function () {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var onError = _this.props.onError;

      if (typeof onError === 'function') {
        onError(error.errors);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Form, [{
    key: "validate",
    value: function validate() {
      var _this2 = this;

      var validator = new _asyncValidator.default(this.formRules);
      return new Promise(function (resolve, reject) {
        validator.validate(_this2.values).then(function () {
          return resolve(_this2.values);
        }, function (err) {
          _this2.error = err;
          return reject(err);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          errors = _this$props.errors;

      var items = _react.default.Children.map(children, function (element, index) {
        var _React$cloneElement;

        var elemetTypeName = element.type.displayName;

        if (elemetTypeName !== 'zarm-form-item') {
          return /*#__PURE__*/_react.default.cloneElement(element);
        }

        var _element$props = element.props,
            name = _element$props.name,
            label = _element$props.label,
            _element$props$rules = _element$props.rules,
            rules = _element$props$rules === void 0 ? [] : _element$props$rules;
        var error = element.props.error;
        error = error || (0, _util.getError)(errors, name);
        var blurRule = rules.filter(function (item) {
          return item.trigger === 'blur';
        });
        var changeRule = rules.filter(function (item) {
          return item.trigger === 'change';
        });

        if (_this3.formRules[name]) {
          _this3.formRules[name] = _this3.formRules[name].concat(rules);
        } else {
          _this3.formRules[name] = rules;
        }

        return /*#__PURE__*/_react.default.cloneElement(element, (_React$cloneElement = {
          error: error,
          name: name,
          label: label
        }, (0, _defineProperty2.default)(_React$cloneElement, "error", error), (0, _defineProperty2.default)(_React$cloneElement, "changelistener", function changelistener(value) {
          _this3.values[name] = value;

          if (changeRule.length > 0) {
            var validator = new _asyncValidator.default((0, _defineProperty2.default)({}, name, changeRule));
            validator.validate((0, _defineProperty2.default)({}, name, value)).then(function () {
              _this3.removeError(name);
            }, function (err) {
              _this3.addError(err, name);
            });
          }
        }), (0, _defineProperty2.default)(_React$cloneElement, "blurlistener", function blurlistener(value) {
          if (blurRule.length > 0) {
            var validator = new _asyncValidator.default((0, _defineProperty2.default)({}, name, blurRule));
            validator.validate((0, _defineProperty2.default)({}, name, value)).then(function () {
              _this3.removeError(name);
            }, function (err) {
              _this3.addError(err, name);
            });
          }
        }), _React$cloneElement));
      });

      var cls = (0, _classnames.default)('zarm-form', className);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cls
      }, items);
    }
  }]);
  return Form;
}(_react.default.Component);

exports.default = Form;