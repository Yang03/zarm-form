"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldError = void 0;

var getFieldError = function getFieldError(errors, key) {
  var error = '';

  for (var i = 0, len = errors.length; i < len; i++) {
    if (errors[i].field === key) {
      error = errors[i].message;
    }
  }

  return error;
};

exports.getFieldError = getFieldError;