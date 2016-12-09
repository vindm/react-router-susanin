const ReactRouter = require('react-router');

ReactRouter.createTransitionManager = require('./createTransitionManager');
ReactRouter.extendRoutes = require('./extendRoutes');
ReactRouter.generateReactRoutes = require('./generateReactRoutes');
ReactRouter.match = require('./match');

// reexport react-router with redefines
module.exports = ReactRouter;
