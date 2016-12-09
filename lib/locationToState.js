"use strict";

exports.__esModule = true;
exports.default = locationToState;
function locationToState(susanin, location) {
    var route = susanin.findFirst(location.pathname);
    if (route) {
        return {
            routes: route[0].getData().components,
            params: route[1]
        };
    }
}
module.exports = exports["default"];