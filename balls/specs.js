var expect = require('chai').expect;
var Journal = require('./../js/journal.js').Journal;

describe('Journal Constructor', function() {
  it("creates a new journal object", function() {
    var journal = new Journal("Title", "Body");
    expect(journal.title).to.equal("Title");
   });
 });

 describe('Journal method countWords', function() {
   it("creates a new journal object", function() {
     var journal = new Journal("Title", "Two Words");
     expect(journal.countWords()).to.equal(22);
    });
  });
