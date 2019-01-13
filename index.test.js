'use strict'

describe("A suite is just a function", function() {
  // inject the HTML fixture for the tests
  beforeEach(function() {
    let fixture = '<div id="fixture"><input id="x" type="text">' +
    '<input id="y" type="text">' +
    '<input id="add" type="button" value="Add Numbers">' +
    'Result: <span id="result" /></div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it("and so is a spec", function() {
    function wait(ms){
      var start = new Date().getTime();
      var end = start;
      while(end < start + ms) {
        end = new Date().getTime();
      }
    }

    wait(2000);

    let a = true;
    expect(a).toBe(true);
    console.log('hello world - unit test');
  });

});
