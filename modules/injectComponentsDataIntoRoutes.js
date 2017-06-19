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
export default (susanin, componentsInfo) => {
    for (let routeName in componentsInfo) {
        const route = susanin.getRouteByName(routeName);
        if (route) {
            const routeData = route.getData();
            if (routeData && routeData.react) {
                routeData.components = componentsInfo[routeName];
            }
        }
    }
}
