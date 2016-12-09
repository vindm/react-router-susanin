"use strict";

exports.__esModule = true;
exports.default = extendRoutes;
/**
 * Extends susaninRoutes with reactData.
 * @example
 * extendRoutes([
 *   {name: "foo": pattern: "/foo/"},
 *   {name: "bar": pattern: "/bar/"}
 * ], {
 *   "foo": [App, FooApp, FooAppPage]
 * }
 * @param {Array} susaninRoutes
 * @param {Object} reactData
 */
function extendRoutes(susaninRoutes, reactData) {
    return susaninRoutes.map(function (route) {
        if (route.data && route.data.react) {
            var components = reactData[route.name];
            if (!components) {
                throw new Error("Missed components declaration for route \"" + route.name + "\"");
            }
            route.data.components = components;
        }
        return route;
    });
}
module.exports = exports["default"];