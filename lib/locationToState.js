"use strict";

exports.__esModule = true;
exports.default = locationToState;
function locationToState(routeMatcher, location) {
    var match = routeMatcher(location);
    if (match) {
        var route = match.route,
            params = match.params;

        var routeData = route.getData();

        // RouterContext requires "route" object for every component
        // in fact it's fake because susanin do all stuff
        var fakeRoute = { name: route.getName(), data: routeData };
        var routes = routeData.components.map(function () {
            return fakeRoute;
        });

        return {
            routes: routes,
            routeData: routeData,
            routeName: route.getName(),
            components: routeData.components,
            params: params
        };
    }
}
module.exports = exports["default"];