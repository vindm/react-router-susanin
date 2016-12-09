global.__DEV__ = true;

const chai = require('chai');
chai.config.includeStack = true;
global.expect = chai.expect;

require('./modules/__tests__/extendRoutes');
require('./modules/__tests__/generateReactRoutes');
