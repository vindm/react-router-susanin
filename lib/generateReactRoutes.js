'use strict';

exports.__esModule = true;
exports.default = generateReactRoutes;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateReactRoutes(routes, AppComponent) {
    return _react2.default.createElement(
        _reactRouter.Route,
        { component: AppComponent },
        routes.map(susaninRouteToReactRoute).filter(Boolean)
    );
}

function susaninRouteToReactRoute(route) {
    if (!route.data || !route.data.react) {
        return null;
    }

    var components = route.data.components;
    var componentsLength = components.length;
    return components.reduceRight(function (result, component, i) {
        if (i === componentsLength - 1) {
            return (0, _react.createElement)(_reactRouter.IndexRoute, {
                component: component
            });
        } else if (i > 0) {
            return (0, _react.createElement)(_reactRouter.Route, {
                component: component
            }, result);
        } else {
            return (0, _react.createElement)(_reactRouter.Route, {
                component: component,
                path: pattern2Path(route.pattern)
            }, result);
        }
    }, null);
}

var SUSANIN_PARAM_RE = /<([-_a-z0-9]+)>/ig;
function pattern2Path(pattern) {
    return pattern.replace(SUSANIN_PARAM_RE, ':$1');
}
module.exports = exports['default'];