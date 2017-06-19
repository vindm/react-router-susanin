'use strict';

/**
 * Injects components data into Susanin routes.
 * @example
 * injectComponentsDataIntoRoutes(susaninInstance, {
 *   "foo": [App, FooApp, FooAppPage]
 * }
 * @param {Susanin} susanin
 * @param {Object} componentsInfo
 */

exports.__esModule = true;

exports.default = function (susanin, componentsInfo) {
    for (var routeName in componentsInfo) {
        var route = susanin.getRouteByName(routeName);
        if (route) {
            var routeData = route.getData();
            if (routeData && routeData.react) {
                routeData.components = componentsInfo[routeName];
            }
        }
    }
};

module.exports = exports['default'];