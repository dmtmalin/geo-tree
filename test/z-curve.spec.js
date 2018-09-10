var assert = require('assert');
var curve = require('../src/z-curve');

describe('z-curve module', function() {
  it('should verify xy2d()', function() {
    assert.strictEqual(curve.xy2d(0, 0), 0);
    assert.strictEqual(curve.xy2d(0, 1), 1);
    assert.strictEqual(curve.xy2d(1, 0), 2);
    assert.strictEqual(curve.xy2d(1023, 1023), 1048575);
  });
});
