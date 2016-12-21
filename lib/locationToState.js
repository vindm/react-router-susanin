"use strict";

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = locationToState;
function locationToState(routeMatcher, location) {
    var match = routeMatcher(location);
    if (match) {
        var _ret = function () {
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
                v: {
                    routes: routes,
                    routeData: routeData,
                    components: routeData.components,
                    params: params
                }
            };
        }();

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
    }
}
module.exports = exports["default"];