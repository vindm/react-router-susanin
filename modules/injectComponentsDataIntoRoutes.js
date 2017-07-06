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
    susanin._routes.map((route) => {
        const reactComponents = componentsInfo[route.getName()];
        if (!reactComponents) {
            return;
        }

        const routeData = route.getData();
        routeData.components = reactComponents;
    });
}
