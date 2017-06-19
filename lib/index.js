'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ReactRouter = require('react-router');
var match = require('./match');
var createTransitionManager = require('./createTransitionManager');
var extendRoutes = require('./extendRoutes');
var generateReactRoutes = require('./generateReactRoutes');
var injectComponentsDataIntoRoutes = require('./injectComponentsDataIntoRoutes');
var Router = require('./Router');

var additionalMethods = {
    match: match,
    createTransitionManager: createTransitionManager,
    extendRoutes: extendRoutes,
    generateReactRoutes: generateReactRoutes,
    injectComponentsDataIntoRoutes: injectComponentsDataIntoRoutes,
    Router: Router
};

// reexport react-router with redefines
module.exports = _extends({}, ReactRouter, additionalMethods);