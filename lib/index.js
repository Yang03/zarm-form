"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useForm", {
  enumerable: true,
  get: function get() {
    return _useForm.default;
  }
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("./Form"));

var _FormItem = _interopRequireDefault(require("./FormItem"));

var _useForm = _interopRequireDefault(require("./useForm"));

_Form.default.Item = _FormItem.default;
var _default = _Form.default;
exports.default = _default;