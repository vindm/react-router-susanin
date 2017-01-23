const ReactRouter = require('react-router');
const match = require('./match');
const createTransitionManager = require('./createTransitionManager');
const extendRoutes = require('./extendRoutes');
const generateReactRoutes = require('./generateReactRoutes');
const Router = require('./Router');

const additionalMethods = {
    match: match,
    createTransitionManager: createTransitionManager,
    extendRoutes: extendRoutes,
    generateReactRoutes: generateReactRoutes,
    Router: Router
}

// reexport react-router with redefines
module.exports = Object.assign({}, ReactRouter, additionalMethods);
