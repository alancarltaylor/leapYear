var code = require('../main.js')
var expect = require('chai').expect

describe("Something", function(){
  it("Will let us know if a given year is a leapyear", function(){
    expect(code.leapYear(1700)).to.equal(false)
  })
})
