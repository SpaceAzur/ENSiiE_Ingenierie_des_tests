const TestRunner = require("jest-runner");

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

// The mock function is called twice
test("The mock function is called twice",() => {
    expect(mockCallback.mock.calls.length).toBe(2);
});

// The first argument of the first call to the function was 0
test("The first argument of the first call to the function was 0", () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
});

// The first argument of the second call to the function was 1
test("The first argument of the second call to the function was 1", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
});

// The return value of the first call to the function was 42
test("The return value of the first call to the function was 42", () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
});


const myMock = jest.fn(x => 42 + x);
const a = new myMock(3);
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);
// > [ <a>, <b> ]

// The function was called exactly once
test("The function was called exactly once", () => {
    expect(myMock.mock.calls.length).toBe(2);
});
// The first arg of the first call to the function was 'first arg'
test("The first arg of the first call to the function was 3", () => {
    expect(myMock.mock.calls[0][0]).toBe(3);
});
// The second arg of the first call to the function was 'second arg'
test("The second arg of the first call to the function was 'second arg'", () => {
    expect(myMock.mock.calls[0][1]).not.toDefined;
});
// The return value of the first call to the function was 'return value'
test("The return value of the first call to the function was 'return value'", () => {
    expect(myMock.mock.results[0].value).toBe(45);
});

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
test("The object returned by the first instantiation", () => {
    expect(myMock.mock.instances[0].name).toBeFalsy;
});

const myMock2 = jest.fn();
console.log(myMock2());
// > undefined

myMock2
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

console.log(myMock2(), myMock2(), myMock2(), myMock2());
// > 10, 'x', true, true

const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(filterTestFn);

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls);
// > [ [11], [12] ]