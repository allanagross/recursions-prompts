// Test cases are described in fixtures.js
xdescribe('parseJSON', function() {
  it('should match the result of calling JSON.parse', function() {
    parseableStrings.forEach((test) => {
      const actual = parseJSON(test);
      const expected = JSON.parse(test);

      assert.deepEqual(actual, expected);
    });
  });

  it('should throw an error for invalid stringified JSON', function() {
    unparseableStrings.forEach((test) => {
      assert.throws(() => parseJSON(test), SyntaxError);
    });
  });

  it('should not call native function', function() {
    const parseSpy = sinon.spy(JSON, 'parse');

    parseJSON('{}');

    sinon.assert.notCalled(parseSpy);
    parseSpy.restore();
  });


});
