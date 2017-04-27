'use strict';

var unlockApk = require('..');

describe('test', function() {
  it('should be ok', function() {
    unlockApk.apkPath.should.be.ok();
  });
});
