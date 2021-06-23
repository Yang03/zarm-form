"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _asyncValidator = _interopRequireDefault(require("async-validator"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var formatErr = function formatErr(data) {
  var obj = {};
  data === null || data === void 0 ? void 0 : data.forEach(function (item) {
    obj[item.field] = item.message;
  });
  return obj;
};

var useForm = function useForm(ref) {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      errors = _useState2[0],
      setError = _useState2[1];

  var submitFlag = false;
  return {
    handleSubmit: function handleSubmit(callback) {
      return function () {
        var _ref$current, _ref$current$validato, _ref$current2;

        submitFlag = true;
        ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$validato = _ref$current.validator) === null || _ref$current$validato === void 0 ? void 0 : _ref$current$validato.validate(ref === null || ref === void 0 ? void 0 : (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.values).then(function () {
          var _ref$current3;

          setError(undefined);
          callback(ref === null || ref === void 0 ? void 0 : (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.values);
        }).catch(function (_ref) {
          var errors = _ref.errors,
              fields = _ref.fields;
          setError(formatErr(errors));
          callback(ref.current.values);
        });
      };
    },
    register: function register(data) {
      return {
        items: data,
        callback: function callback(relus, name, value) {
          if (submitFlag) {
            return false;
          }

          var validator = new _asyncValidator.default((0, _defineProperty2.default)({}, name, relus));
          validator.validate((0, _defineProperty2.default)({}, name, value)).then(function () {
            var temp = (0, _lodash.default)(errors, [name]);
            setError(temp);
          }).catch(function (_ref2) {
            var _err$, _err$2;

            var err = _ref2.errors,
                fields = _ref2.fields;
            setError(_objectSpread(_objectSpread({}, errors), {}, (0, _defineProperty2.default)({}, err === null || err === void 0 ? void 0 : (_err$ = err[0]) === null || _err$ === void 0 ? void 0 : _err$.field, err === null || err === void 0 ? void 0 : (_err$2 = err[0]) === null || _err$2 === void 0 ? void 0 : _err$2.message)));
          });
        }
      };
    },
    errors: errors
  };
};

var _default = useForm;
exports.default = _default;