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
    susanin._routes.map(function (route) {
        var reactComponents = componentsInfo[route.getName()];
        if (!reactComponents) {
            return;
        }

        var routeData = route.getData();
        routeData.components = reactComponents;
    });
};

module.exports = exports['default'];