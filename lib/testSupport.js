mocha.setup('bdd');

window.assert = chai.assert;

$(() => {
  mocha.run();
});
