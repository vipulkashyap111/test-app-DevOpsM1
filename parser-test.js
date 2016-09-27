var expect = require('chai').expect;
var parse = require('./parser.js');
suite('parser TestSuite', function(){
  test('parser: all test cases pass', function(done){
    var result = parse("2 passing");
    expect(result).to.equal("success");
    done();
  })

  test('parser: 1 test case fails and 1 passes', function(done){
    var result = parse("1 passing \n 1 failing");
    expect(result).to.equal("failure");
    done();
  })

  test('parser: all test cases fail', function(done){
    var result = parse("2 failing");
    expect(result).to.equal("failure");
    done();
  })
});
