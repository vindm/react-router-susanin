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
export default function extendRoutes(susaninRoutes, reactData) {
    return susaninRoutes.map((route) => {
        if (route.data && route.data.react) {
            const components = reactData[route.name];
            route.data.components = components;
        }
        return route;
    });
}
