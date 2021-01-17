// Test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify with the stringifiableObjects', function() {
    stringifiableObjects.forEach((test) => {
      const expected = JSON.stringify(test);
      const actual = stringifyJSON(test);

      assert.equal(actual, expected);
    });
  });

  it('should match the result of calling JSON.stringify with the unstringifiableValues', function() {
    unstringifiableValues.forEach((obj) => {
      const expected = JSON.stringify(obj);
      const actual = stringifyJSON(obj);

      assert.equal(actual, expected);
    });
  });

  it('should not call native function', function() {
    const stringifySpy = sinon.spy(JSON, 'stringify');

    stringifyJSON({});

    sinon.assert.notCalled(stringifySpy);
    stringifySpy.restore();
  });


});
