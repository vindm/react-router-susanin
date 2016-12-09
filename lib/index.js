'use strict';

exports.__esModule = true;
exports.Router = exports.extendRoutes = exports.createTransitionManager = undefined;

var _reactRouter = require('react-router');

Object.keys(_reactRouter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactRouter[key];
    }
  });
});

var _createTransitionManager2 = require('./createTransitionManager');

var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);

var _extendRoutes2 = require('./extendRoutes');

var _extendRoutes3 = _interopRequireDefault(_extendRoutes2);

var _Router2 = require('./Router');

var _Router3 = _interopRequireDefault(_Router2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createTransitionManager = _createTransitionManager3.default;
exports.extendRoutes = _extendRoutes3.default;
exports.Router = _Router3.default;