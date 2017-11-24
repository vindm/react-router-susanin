'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = locationToState;
function locationToState(routeMatcher, location, section) {
    var match = routeMatcher(location);

    if (!match) {
        return;
    }

    var route = match.route,
        params = match.params;

    var routeName = route.getName();
    var routeData = route.getData();
    var components = routeData.components;

    if (section && (typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object' && !Array.isArray(components)) {
        components = components[section];
    }

    var fake = (typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object' && !Array.isArray(components) ? components[Object.keys(components)[0]] : components;

    // RouterContext requires "route" object for every component
    // in fact it's fake because susanin do all stuff
    var routes = fake.map(function () {
        return { name: routeName, data: routeData };
    });

    return {
        params: params,
        routes: routes,
        routeData: routeData,
        routeName: routeName,
        section: section,
        components: components
    };
}
module.exports = exports['default'];