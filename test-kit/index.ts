/// <reference path='../typings/index.d.ts' />

import * as chai from 'chai';
import typecheck from './matchers/typecheck';

chai.use(typecheck);

export {findCodePosition, findCodeRange} from './code-positions';
export {evaluateModuleExports} from './evaluate-module';

// This is a loader for debugging purposes when running node tests (not from webpack bundle)
if (require.extensions) {
    require.extensions['.ts'] = function(module, fileName) {
        var content = require('fs').readFileSync(fileName).toString();
        var code = 'module.exports = ' + JSON.stringify(content) + ';';
        return module._compile(code, fileName);
    };
}
