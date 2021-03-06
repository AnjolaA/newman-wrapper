var replacer = require(__dirname + '/../function/replacevalue.js');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
const path = require('path');
var filepath = path.resolve("test/env.json");
var file = require(filepath);

describe('A suite of tests', function() {

  before(function() {
    // runs before all tests in this block
  });

  it('Success message when complete', function() {
    let result = replacer.replacevalue(file, 'clientsecret', 'money');
    expect(replacer.replacevalue(file, 'clientsecret', 'money')).to.be.equal("Found and updated: clientsecret");

  });

    it('Not found message when not found', function() {
    expect(replacer.replacevalue(file, 'myclientsecret', 'money')).to.be.equal("Could not find: myclientsecret");

  });
    it('Key and Value cannot be null with incomplete request', function() {   
    let result = replacer.replacevalue(file);
    expect(result).to.be.equal("Key and Value cannot be null");

  });

    it('File/Object cannot be null with incomplete request', function() {
    let result = replacer.replacevalue();
    expect(result).to.be.equal("Key and Value cannot be null");

  });

});
