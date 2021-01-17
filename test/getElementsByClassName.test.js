const htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {
  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
    htmlStrings.forEach((htmlString) => {
      const $rootElement = $(htmlString);
      $('body').append($rootElement);

      const actual = getElementsByClassName('targetClassName');
      const expectedNodeList = document.getElementsByClassName('targetClassName');
      const expectedArray = Array.prototype.slice.apply(expectedNodeList);

      assert.deepEqual(actual, expectedArray);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

  it('should not call native function', function() {
    const getElementsByClassNameSpy = sinon.spy(document, 'getElementsByClassName');

    getElementsByClassName();

    sinon.assert.notCalled(getElementsByClassNameSpy);
    getElementsByClassNameSpy.restore();
  });


});
