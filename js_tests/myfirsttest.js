  
function add (a, b) {
  return a + b;
}

function substract (a, b) {
  return a - b;
}

QUnit.module('calc', (hooks) => {
  QUnit.test('add two numbers', (assert) => {
    assert.equal(add(1, 2), 3);
  });
});

QUnit.module('calc', (hooks) => {
  QUnit.test('substract two numbers', (assert) => {
    assert.equal(substract(5, 3), 2);
  });
});