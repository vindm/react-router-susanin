'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Actions = require('history/lib/Actions');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _RouterUtils = require('react-router/lib/RouterUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */
function match(_ref, callback) {
    var history = _ref.history,
        routeMatcher = _ref.routeMatcher,
        section = _ref.section,
        location = _ref.location;

    !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

    !(typeof routeMatcher === 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a routeMatcher function') : (0, _invariant2.default)(false) : void 0;

    var transitionManager = (0, _createTransitionManager2.default)(history, routeMatcher, section);

    if (location) {
        // Allow match({ location: '/the/path', ... })
        location = history.createLocation(location);
    } else {
        location = history.getCurrentLocation();
    }

    transitionManager.match(location, function (error, redirectLocation, nextState) {
        var renderProps = void 0;

        if (nextState) {
            var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
            renderProps = _extends({}, nextState, {
                router: router,
                matchContext: { transitionManager: transitionManager, router: router }
            });
        }

        callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
    });
}

exports.default = match;
module.exports = exports['default'];