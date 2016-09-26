var expect = require('chai').expect;
var fibonacci = require('./app.js').fibonacci;
suite('app TestSuite', function(){
  test('fibonacci: correct output is produced', function(done){
    expect(fibonacci(6)).to.equal(8);
    done();
  })

  test('fibonacci: fail the test case', function(done){
    expect(fibonacci(6)).to.equal(0);
    done();
  })
});
