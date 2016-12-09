'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _reactRouter = require('react-router');

var _createTransitionManager2 = require('./createTransitionManager');

var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_ReactRouter) {
  _inherits(Router, _ReactRouter);

  function Router() {
    _classCallCheck(this, Router);

    return _possibleConstructorReturn(this, _ReactRouter.apply(this, arguments));
  }

  Router.prototype.createTransitionManager = function createTransitionManager() {
    var matchContext = this.props.matchContext;

    if (matchContext) {
      return matchContext.transitionManager;
    }

    var _props = this.props,
        history = _props.history,
        susanin = _props.susanin;


    !history.getCurrentLocation ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v2.x or ' + 'earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please upgrade to history v3.x.') : (0, _invariant2.default)(false) : void 0;

    return (0, _createTransitionManager3.default)(history, susanin);
  };

  return Router;
}(_reactRouter.Router);

exports.default = Router;
module.exports = exports['default'];