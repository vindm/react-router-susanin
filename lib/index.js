'use strict';

var ReactRouter = require('react-router');
var match = require('./match');
var createTransitionManager = require('./createTransitionManager');
var extendRoutes = require('./extendRoutes');
var generateReactRoutes = require('./generateReactRoutes');
var Router = require('./Router');

var additionalMethods = {
    match: match,
    createTransitionManager: createTransitionManager,
    extendRoutes: extendRoutes,
    generateReactRoutes: generateReactRoutes,
    Router: Router
};

// reexport react-router with redefines
module.exports = Object.assign({}, ReactRouter, additionalMethods);