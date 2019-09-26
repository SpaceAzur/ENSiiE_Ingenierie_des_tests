const sum = require('./sum');

test('add 1 + 2 equal 3', () =>  {
    expect(sum(1,2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});