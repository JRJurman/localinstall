expect = require('chai').expect;

describe('localinstall', function() {
  it('should be available as a package', function() {
    var localinstall = require('localinstall');
    expect(localinstall).to.be.defined;
  });
});
